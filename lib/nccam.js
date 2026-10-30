(()=>{var Am=Object.create;var dc=Object.defineProperty;var Cm=Object.getOwnPropertyDescriptor;var Pm=Object.getOwnPropertyNames;var Im=Object.getPrototypeOf,Rm=Object.prototype.hasOwnProperty;var pc=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var Sn=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var yu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},xu=(n,t)=>{for(var e in t)dc(n,e,{get:t[e],enumerable:!0})},Lm=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Pm(t))!Rm.call(n,r)&&r!==e&&dc(n,r,{get:()=>t[r],enumerable:!(i=Cm(t,r))||i.enumerable});return n};var Mu=(n,t,e)=>(e=n!=null?Am(Im(n)):{},Lm(t||!n||!n.__esModule?dc(e,"default",{value:n,enumerable:!0}):e,n));var wu=yu((bu,mc)=>{var Su=(()=>{var n=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(t={}){var e,i=t,r,o,c=new Promise((h,m)=>{r=h,o=m}),u=typeof window=="object",f=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",g=Object.assign({},i),y=[],v="./this.program",b=(h,m)=>{throw m},E="";function P(h){return i.locateFile?i.locateFile(h,E):E+h}var S,M;if(d){var F=pc("fs"),H=pc("path");E=__dirname+"/",M=h=>{h=He(h)?new URL(h):H.normalize(h);var m=F.readFileSync(h);return m},S=(h,m=!0)=>(h=He(h)?new URL(h):H.normalize(h),new Promise((x,w)=>{F.readFile(h,m?void 0:"utf8",(N,G)=>{N?w(N):x(m?G.buffer:G)})})),!i.thisProgram&&process.argv.length>1&&(v=process.argv[1].replace(/\\/g,"/")),y=process.argv.slice(2),b=(h,m)=>{throw process.exitCode=h,m}}else(u||f)&&(f?E=self.location.href:typeof document<"u"&&document.currentScript&&(E=document.currentScript.src),n&&(E=n),E.startsWith("blob:")?E="":E=E.substr(0,E.replace(/[?#].*/,"").lastIndexOf("/")+1),f&&(M=h=>{var m=new XMLHttpRequest;return m.open("GET",h,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),S=h=>He(h)?new Promise((m,x)=>{var w=new XMLHttpRequest;w.open("GET",h,!0),w.responseType="arraybuffer",w.onload=()=>{if(w.status==200||w.status==0&&w.response){m(w.response);return}x(w.status)},w.onerror=x,w.send(null)}):fetch(h,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(new Error(m.status+" : "+m.url))));var L=i.print||console.log.bind(console),U=i.printErr||console.error.bind(console);Object.assign(i,g),g=null,i.arguments&&(y=i.arguments),i.thisProgram&&(v=i.thisProgram);var B=i.wasmBinary,q,C=!1,k;function Y(h,m){h||Se(m)}var nt,rt,et,Q,tt,dt,X,pt;function ut(){var h=q.buffer;i.HEAP8=nt=new Int8Array(h),i.HEAP16=et=new Int16Array(h),i.HEAPU8=rt=new Uint8Array(h),i.HEAPU16=Q=new Uint16Array(h),i.HEAP32=tt=new Int32Array(h),i.HEAPU32=dt=new Uint32Array(h),i.HEAPF32=X=new Float32Array(h),i.HEAPF64=pt=new Float64Array(h)}var gt=[],yt=[],Ft=[],zt=!1;function Wt(){var h=i.preRun;h&&(typeof h=="function"&&(h=[h]),h.forEach(V)),Bt(gt)}function ie(){zt=!0,!i.noFSInit&&!R.initialized&&R.init(),R.ignorePermissions=!1,St.init(),Bt(yt)}function ce(){var h=i.postRun;h&&(typeof h=="function"&&(h=[h]),h.forEach(Jt)),Bt(Ft)}function V(h){gt.unshift(h)}function Pt(h){yt.unshift(h)}function Jt(h){Ft.unshift(h)}var te=0,Vt=null,le=null;function qe(h){return h}function ue(h){te++,i.monitorRunDependencies?.(te)}function ye(h){if(te--,i.monitorRunDependencies?.(te),te==0&&(Vt!==null&&(clearInterval(Vt),Vt=null),le)){var m=le;le=null,m()}}function Se(h){i.onAbort?.(h),h="Aborted("+h+")",U(h),C=!0,h+=". Build with -sASSERTIONS for more info.",zt&&gu();var m=new WebAssembly.RuntimeError(h);throw o(m),m}var _e="data:application/octet-stream;base64,",Ie=h=>h.startsWith(_e),He=h=>h.startsWith("file://");function je(){var h="occt-import-js.wasm";return Ie(h)?h:P(h)}var Re;function Fe(h){if(h==Re&&B)return new Uint8Array(B);if(M)return M(h);throw"both async and sync fetching of the wasm failed"}function ct(h){return B?Promise.resolve().then(()=>Fe(h)):S(h).then(m=>new Uint8Array(m),()=>Fe(h))}function Ue(h,m,x){return ct(h).then(w=>WebAssembly.instantiate(w,m)).then(x,w=>{U(`failed to asynchronously prepare wasm: ${w}`),Se(w)})}function Te(h,m,x,w){return!h&&typeof WebAssembly.instantiateStreaming=="function"&&!Ie(m)&&!He(m)&&!d&&typeof fetch=="function"?fetch(m,{credentials:"same-origin"}).then(N=>{var G=WebAssembly.instantiateStreaming(N,x);return G.then(w,function(J){return U(`wasm streaming compile failed: ${J}`),U("falling back to ArrayBuffer instantiation"),Ue(m,x,w)})}):Ue(m,x,w)}function W(){return{a:ym}}function T(){var h=W();function m(w,N){return ln=w.exports,q=ln._,ut(),Bo=ln.ba,Pt(ln.$),ye("wasm-instantiate"),ln}ue("wasm-instantiate");function x(w){m(w.instance)}if(i.instantiateWasm)try{return i.instantiateWasm(h,m)}catch(w){U(`Module.instantiateWasm callback failed with error: ${w}`),o(w)}return Re??=je(),Te(B,Re,h,x).catch(o),{}}var it,mt;function Et(h){this.name="ExitStatus",this.message=`Program terminated with exit(${h})`,this.status=h}var Bt=h=>{h.forEach(m=>m(i))},Ht=i.noExitRuntime||!0,I={isAbs:h=>h.charAt(0)==="/",splitPath:h=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return m.exec(h).slice(1)},normalizeArray:(h,m)=>{for(var x=0,w=h.length-1;w>=0;w--){var N=h[w];N==="."?h.splice(w,1):N===".."?(h.splice(w,1),x++):x&&(h.splice(w,1),x--)}if(m)for(;x;x--)h.unshift("..");return h},normalize:h=>{var m=I.isAbs(h),x=h.substr(-1)==="/";return h=I.normalizeArray(h.split("/").filter(w=>!!w),!m).join("/"),!h&&!m&&(h="."),h&&x&&(h+="/"),(m?"/":"")+h},dirname:h=>{var m=I.splitPath(h),x=m[0],w=m[1];return!x&&!w?".":(w&&(w=w.substr(0,w.length-1)),x+w)},basename:h=>{if(h==="/")return"/";h=I.normalize(h),h=h.replace(/\/$/,"");var m=h.lastIndexOf("/");return m===-1?h:h.substr(m+1)},join:(...h)=>I.normalize(h.join("/")),join2:(h,m)=>I.normalize(h+"/"+m)},z=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return w=>crypto.getRandomValues(w);if(d)try{var h=pc("crypto"),m=h.randomFillSync;if(m)return w=>h.randomFillSync(w);var x=h.randomBytes;return w=>(w.set(x(w.byteLength)),w)}catch{}Se("initRandomDevice")},$=h=>($=z())(h),at={resolve:(...h)=>{for(var m="",x=!1,w=h.length-1;w>=-1&&!x;w--){var N=w>=0?h[w]:R.cwd();if(typeof N!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!N)return"";m=N+"/"+m,x=I.isAbs(N)}return m=I.normalizeArray(m.split("/").filter(G=>!!G),!x).join("/"),(x?"/":"")+m||"."},relative:(h,m)=>{h=at.resolve(h).substr(1),m=at.resolve(m).substr(1);function x(Ot){for(var $t=0;$t<Ot.length&&Ot[$t]==="";$t++);for(var Qt=Ot.length-1;Qt>=0&&Ot[Qt]==="";Qt--);return $t>Qt?[]:Ot.slice($t,Qt-$t+1)}for(var w=x(h.split("/")),N=x(m.split("/")),G=Math.min(w.length,N.length),J=G,ot=0;ot<G;ot++)if(w[ot]!==N[ot]){J=ot;break}for(var wt=[],ot=J;ot<w.length;ot++)wt.push("..");return wt=wt.concat(N.slice(J)),wt.join("/")}},ft=typeof TextDecoder<"u"?new TextDecoder:void 0,bt=(h,m=0,x=NaN)=>{for(var w=m+x,N=m;h[N]&&!(N>=w);)++N;if(N-m>16&&h.buffer&&ft)return ft.decode(h.subarray(m,N));for(var G="";m<N;){var J=h[m++];if(!(J&128)){G+=String.fromCharCode(J);continue}var ot=h[m++]&63;if((J&224)==192){G+=String.fromCharCode((J&31)<<6|ot);continue}var wt=h[m++]&63;if((J&240)==224?J=(J&15)<<12|ot<<6|wt:J=(J&7)<<18|ot<<12|wt<<6|h[m++]&63,J<65536)G+=String.fromCharCode(J);else{var Ot=J-65536;G+=String.fromCharCode(55296|Ot>>10,56320|Ot&1023)}}return G},Ct=[],Nt=h=>{for(var m=0,x=0;x<h.length;++x){var w=h.charCodeAt(x);w<=127?m++:w<=2047?m+=2:w>=55296&&w<=57343?(m+=4,++x):m+=3}return m},Mt=(h,m,x,w)=>{if(!(w>0))return 0;for(var N=x,G=x+w-1,J=0;J<h.length;++J){var ot=h.charCodeAt(J);if(ot>=55296&&ot<=57343){var wt=h.charCodeAt(++J);ot=65536+((ot&1023)<<10)|wt&1023}if(ot<=127){if(x>=G)break;m[x++]=ot}else if(ot<=2047){if(x+1>=G)break;m[x++]=192|ot>>6,m[x++]=128|ot&63}else if(ot<=65535){if(x+2>=G)break;m[x++]=224|ot>>12,m[x++]=128|ot>>6&63,m[x++]=128|ot&63}else{if(x+3>=G)break;m[x++]=240|ot>>18,m[x++]=128|ot>>12&63,m[x++]=128|ot>>6&63,m[x++]=128|ot&63}}return m[x]=0,x-N};function j(h,m,x){var w=x>0?x:Nt(h)+1,N=new Array(w),G=Mt(h,N,0,N.length);return m&&(N.length=G),N}var It=()=>{if(!Ct.length){var h=null;if(d){var m=256,x=Buffer.alloc(m),w=0,N=process.stdin.fd;try{w=F.readSync(N,x,0,m)}catch(G){if(G.toString().includes("EOF"))w=0;else throw G}w>0&&(h=x.slice(0,w).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(h=window.prompt("Input: "),h!==null&&(h+=`
`));if(!h)return null;Ct=j(h,!0)}return Ct.shift()},St={ttys:[],init(){},shutdown(){},register(h,m){St.ttys[h]={input:[],output:[],ops:m},R.registerDevice(h,St.stream_ops)},stream_ops:{open(h){var m=St.ttys[h.node.rdev];if(!m)throw new R.ErrnoError(43);h.tty=m,h.seekable=!1},close(h){h.tty.ops.fsync(h.tty)},fsync(h){h.tty.ops.fsync(h.tty)},read(h,m,x,w,N){if(!h.tty||!h.tty.ops.get_char)throw new R.ErrnoError(60);for(var G=0,J=0;J<w;J++){var ot;try{ot=h.tty.ops.get_char(h.tty)}catch{throw new R.ErrnoError(29)}if(ot===void 0&&G===0)throw new R.ErrnoError(6);if(ot==null)break;G++,m[x+J]=ot}return G&&(h.node.timestamp=Date.now()),G},write(h,m,x,w,N){if(!h.tty||!h.tty.ops.put_char)throw new R.ErrnoError(60);try{for(var G=0;G<w;G++)h.tty.ops.put_char(h.tty,m[x+G])}catch{throw new R.ErrnoError(29)}return w&&(h.node.timestamp=Date.now()),G}},default_tty_ops:{get_char(h){return It()},put_char(h,m){m===null||m===10?(L(bt(h.output)),h.output=[]):m!=0&&h.output.push(m)},fsync(h){h.output&&h.output.length>0&&(L(bt(h.output)),h.output=[])},ioctl_tcgets(h){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(h,m,x){return 0},ioctl_tiocgwinsz(h){return[24,80]}},default_tty1_ops:{put_char(h,m){m===null||m===10?(U(bt(h.output)),h.output=[]):m!=0&&h.output.push(m)},fsync(h){h.output&&h.output.length>0&&(U(bt(h.output)),h.output=[])}}},kt=(h,m)=>{rt.fill(0,h,h+m)},Gt=(h,m)=>Math.ceil(h/m)*m,Rt=h=>{h=Gt(h,65536);var m=mu(65536,h);return m&&kt(m,h),m},Dt={ops_table:null,mount(h){return Dt.createNode(null,"/",16895,0)},createNode(h,m,x,w){if(R.isBlkdev(x)||R.isFIFO(x))throw new R.ErrnoError(63);Dt.ops_table||={dir:{node:{getattr:Dt.node_ops.getattr,setattr:Dt.node_ops.setattr,lookup:Dt.node_ops.lookup,mknod:Dt.node_ops.mknod,rename:Dt.node_ops.rename,unlink:Dt.node_ops.unlink,rmdir:Dt.node_ops.rmdir,readdir:Dt.node_ops.readdir,symlink:Dt.node_ops.symlink},stream:{llseek:Dt.stream_ops.llseek}},file:{node:{getattr:Dt.node_ops.getattr,setattr:Dt.node_ops.setattr},stream:{llseek:Dt.stream_ops.llseek,read:Dt.stream_ops.read,write:Dt.stream_ops.write,allocate:Dt.stream_ops.allocate,mmap:Dt.stream_ops.mmap,msync:Dt.stream_ops.msync}},link:{node:{getattr:Dt.node_ops.getattr,setattr:Dt.node_ops.setattr,readlink:Dt.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Dt.node_ops.getattr,setattr:Dt.node_ops.setattr},stream:R.chrdev_stream_ops}};var N=R.createNode(h,m,x,w);return R.isDir(N.mode)?(N.node_ops=Dt.ops_table.dir.node,N.stream_ops=Dt.ops_table.dir.stream,N.contents={}):R.isFile(N.mode)?(N.node_ops=Dt.ops_table.file.node,N.stream_ops=Dt.ops_table.file.stream,N.usedBytes=0,N.contents=null):R.isLink(N.mode)?(N.node_ops=Dt.ops_table.link.node,N.stream_ops=Dt.ops_table.link.stream):R.isChrdev(N.mode)&&(N.node_ops=Dt.ops_table.chrdev.node,N.stream_ops=Dt.ops_table.chrdev.stream),N.timestamp=Date.now(),h&&(h.contents[m]=N,h.timestamp=N.timestamp),N},getFileDataAsTypedArray(h){return h.contents?h.contents.subarray?h.contents.subarray(0,h.usedBytes):new Uint8Array(h.contents):new Uint8Array(0)},expandFileStorage(h,m){var x=h.contents?h.contents.length:0;if(!(x>=m)){var w=1024*1024;m=Math.max(m,x*(x<w?2:1.125)>>>0),x!=0&&(m=Math.max(m,256));var N=h.contents;h.contents=new Uint8Array(m),h.usedBytes>0&&h.contents.set(N.subarray(0,h.usedBytes),0)}},resizeFileStorage(h,m){if(h.usedBytes!=m)if(m==0)h.contents=null,h.usedBytes=0;else{var x=h.contents;h.contents=new Uint8Array(m),x&&h.contents.set(x.subarray(0,Math.min(m,h.usedBytes))),h.usedBytes=m}},node_ops:{getattr(h){var m={};return m.dev=R.isChrdev(h.mode)?h.id:1,m.ino=h.id,m.mode=h.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=h.rdev,R.isDir(h.mode)?m.size=4096:R.isFile(h.mode)?m.size=h.usedBytes:R.isLink(h.mode)?m.size=h.link.length:m.size=0,m.atime=new Date(h.timestamp),m.mtime=new Date(h.timestamp),m.ctime=new Date(h.timestamp),m.blksize=4096,m.blocks=Math.ceil(m.size/m.blksize),m},setattr(h,m){m.mode!==void 0&&(h.mode=m.mode),m.timestamp!==void 0&&(h.timestamp=m.timestamp),m.size!==void 0&&Dt.resizeFileStorage(h,m.size)},lookup(h,m){throw R.genericErrors[44]},mknod(h,m,x,w){return Dt.createNode(h,m,x,w)},rename(h,m,x){if(R.isDir(h.mode)){var w;try{w=R.lookupNode(m,x)}catch{}if(w)for(var N in w.contents)throw new R.ErrnoError(55)}delete h.parent.contents[h.name],h.parent.timestamp=Date.now(),h.name=x,m.contents[x]=h,m.timestamp=h.parent.timestamp},unlink(h,m){delete h.contents[m],h.timestamp=Date.now()},rmdir(h,m){var x=R.lookupNode(h,m);for(var w in x.contents)throw new R.ErrnoError(55);delete h.contents[m],h.timestamp=Date.now()},readdir(h){var m=[".",".."];for(var x of Object.keys(h.contents))m.push(x);return m},symlink(h,m,x){var w=Dt.createNode(h,m,41471,0);return w.link=x,w},readlink(h){if(!R.isLink(h.mode))throw new R.ErrnoError(28);return h.link}},stream_ops:{read(h,m,x,w,N){var G=h.node.contents;if(N>=h.node.usedBytes)return 0;var J=Math.min(h.node.usedBytes-N,w);if(J>8&&G.subarray)m.set(G.subarray(N,N+J),x);else for(var ot=0;ot<J;ot++)m[x+ot]=G[N+ot];return J},write(h,m,x,w,N,G){if(m.buffer===nt.buffer&&(G=!1),!w)return 0;var J=h.node;if(J.timestamp=Date.now(),m.subarray&&(!J.contents||J.contents.subarray)){if(G)return J.contents=m.subarray(x,x+w),J.usedBytes=w,w;if(J.usedBytes===0&&N===0)return J.contents=m.slice(x,x+w),J.usedBytes=w,w;if(N+w<=J.usedBytes)return J.contents.set(m.subarray(x,x+w),N),w}if(Dt.expandFileStorage(J,N+w),J.contents.subarray&&m.subarray)J.contents.set(m.subarray(x,x+w),N);else for(var ot=0;ot<w;ot++)J.contents[N+ot]=m[x+ot];return J.usedBytes=Math.max(J.usedBytes,N+w),w},llseek(h,m,x){var w=m;if(x===1?w+=h.position:x===2&&R.isFile(h.node.mode)&&(w+=h.node.usedBytes),w<0)throw new R.ErrnoError(28);return w},allocate(h,m,x){Dt.expandFileStorage(h.node,m+x),h.node.usedBytes=Math.max(h.node.usedBytes,m+x)},mmap(h,m,x,w,N){if(!R.isFile(h.node.mode))throw new R.ErrnoError(43);var G,J,ot=h.node.contents;if(!(N&2)&&ot&&ot.buffer===nt.buffer)J=!1,G=ot.byteOffset;else{if(J=!0,G=Rt(m),!G)throw new R.ErrnoError(48);ot&&((x>0||x+m<ot.length)&&(ot.subarray?ot=ot.subarray(x,x+m):ot=Array.prototype.slice.call(ot,x,x+m)),nt.set(ot,G))}return{ptr:G,allocated:J}},msync(h,m,x,w,N){return Dt.stream_ops.write(h,m,0,w,x,!1),0}}},ee=(h,m,x,w)=>{var N=w?"":`al ${h}`;S(h).then(G=>{m(new Uint8Array(G)),N&&ye(N)},G=>{if(x)x();else throw`Loading data file "${h}" failed.`}),N&&ue(N)},Ne=(h,m,x,w,N,G)=>{R.createDataFile(h,m,x,w,N,G)},Ce=i.preloadPlugins||[],Mn=(h,m,x,w)=>{typeof Browser<"u"&&Browser.init();var N=!1;return Ce.forEach(G=>{N||G.canHandle(m)&&(G.handle(h,m,x,w),N=!0)}),N},An=(h,m,x,w,N,G,J,ot,wt,Ot)=>{var $t=m?at.resolve(I.join2(h,m)):h,Qt=`cp ${$t}`;function ae(se){function me(Le){Ot?.(),ot||Ne(h,m,Le,w,N,wt),G?.(),ye(Qt)}Mn(se,$t,me,()=>{J?.(),ye(Qt)})||me(se)}ue(Qt),typeof x=="string"?ee(x,ae,J):ae(x)},Ls=h=>{var m={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},x=m[h];if(typeof x>"u")throw new Error(`Unknown file open mode: ${h}`);return x},cr=(h,m)=>{var x=0;return h&&(x|=365),m&&(x|=146),x},R={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(h){this.name="ErrnoError",this.errno=h}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(h){this.node=h}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(h){this.shared.flags=h}get position(){return this.shared.position}set position(h){this.shared.position=h}},FSNode:class{constructor(h,m,x,w){h||(h=this),this.parent=h,this.mount=h.mount,this.mounted=null,this.id=R.nextInode++,this.name=m,this.mode=x,this.node_ops={},this.stream_ops={},this.rdev=w,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(h){h?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(h){h?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return R.isDir(this.mode)}get isDevice(){return R.isChrdev(this.mode)}},lookupPath(h,m={}){if(h=at.resolve(h),!h)return{path:"",node:null};var x={follow_mount:!0,recurse_count:0};if(m=Object.assign(x,m),m.recurse_count>8)throw new R.ErrnoError(32);for(var w=h.split("/").filter(Qt=>!!Qt),N=R.root,G="/",J=0;J<w.length;J++){var ot=J===w.length-1;if(ot&&m.parent)break;if(N=R.lookupNode(N,w[J]),G=I.join2(G,w[J]),R.isMountpoint(N)&&(!ot||ot&&m.follow_mount)&&(N=N.mounted.root),!ot||m.follow)for(var wt=0;R.isLink(N.mode);){var Ot=R.readlink(G);G=at.resolve(I.dirname(G),Ot);var $t=R.lookupPath(G,{recurse_count:m.recurse_count+1});if(N=$t.node,wt++>40)throw new R.ErrnoError(32)}}return{path:G,node:N}},getPath(h){for(var m;;){if(R.isRoot(h)){var x=h.mount.mountpoint;return m?x[x.length-1]!=="/"?`${x}/${m}`:x+m:x}m=m?`${h.name}/${m}`:h.name,h=h.parent}},hashName(h,m){for(var x=0,w=0;w<m.length;w++)x=(x<<5)-x+m.charCodeAt(w)|0;return(h+x>>>0)%R.nameTable.length},hashAddNode(h){var m=R.hashName(h.parent.id,h.name);h.name_next=R.nameTable[m],R.nameTable[m]=h},hashRemoveNode(h){var m=R.hashName(h.parent.id,h.name);if(R.nameTable[m]===h)R.nameTable[m]=h.name_next;else for(var x=R.nameTable[m];x;){if(x.name_next===h){x.name_next=h.name_next;break}x=x.name_next}},lookupNode(h,m){var x=R.mayLookup(h);if(x)throw new R.ErrnoError(x);for(var w=R.hashName(h.id,m),N=R.nameTable[w];N;N=N.name_next){var G=N.name;if(N.parent.id===h.id&&G===m)return N}return R.lookup(h,m)},createNode(h,m,x,w){var N=new R.FSNode(h,m,x,w);return R.hashAddNode(N),N},destroyNode(h){R.hashRemoveNode(h)},isRoot(h){return h===h.parent},isMountpoint(h){return!!h.mounted},isFile(h){return(h&61440)===32768},isDir(h){return(h&61440)===16384},isLink(h){return(h&61440)===40960},isChrdev(h){return(h&61440)===8192},isBlkdev(h){return(h&61440)===24576},isFIFO(h){return(h&61440)===4096},isSocket(h){return(h&49152)===49152},flagsToPermissionString(h){var m=["r","w","rw"][h&3];return h&512&&(m+="w"),m},nodePermissions(h,m){return R.ignorePermissions?0:m.includes("r")&&!(h.mode&292)||m.includes("w")&&!(h.mode&146)||m.includes("x")&&!(h.mode&73)?2:0},mayLookup(h){if(!R.isDir(h.mode))return 54;var m=R.nodePermissions(h,"x");return m||(h.node_ops.lookup?0:2)},mayCreate(h,m){try{var x=R.lookupNode(h,m);return 20}catch{}return R.nodePermissions(h,"wx")},mayDelete(h,m,x){var w;try{w=R.lookupNode(h,m)}catch(G){return G.errno}var N=R.nodePermissions(h,"wx");if(N)return N;if(x){if(!R.isDir(w.mode))return 54;if(R.isRoot(w)||R.getPath(w)===R.cwd())return 10}else if(R.isDir(w.mode))return 31;return 0},mayOpen(h,m){return h?R.isLink(h.mode)?32:R.isDir(h.mode)&&(R.flagsToPermissionString(m)!=="r"||m&512)?31:R.nodePermissions(h,R.flagsToPermissionString(m)):44},MAX_OPEN_FDS:4096,nextfd(){for(var h=0;h<=R.MAX_OPEN_FDS;h++)if(!R.streams[h])return h;throw new R.ErrnoError(33)},getStreamChecked(h){var m=R.getStream(h);if(!m)throw new R.ErrnoError(8);return m},getStream:h=>R.streams[h],createStream(h,m=-1){return h=Object.assign(new R.FSStream,h),m==-1&&(m=R.nextfd()),h.fd=m,R.streams[m]=h,h},closeStream(h){R.streams[h]=null},dupStream(h,m=-1){var x=R.createStream(h,m);return x.stream_ops?.dup?.(x),x},chrdev_stream_ops:{open(h){var m=R.getDevice(h.node.rdev);h.stream_ops=m.stream_ops,h.stream_ops.open?.(h)},llseek(){throw new R.ErrnoError(70)}},major:h=>h>>8,minor:h=>h&255,makedev:(h,m)=>h<<8|m,registerDevice(h,m){R.devices[h]={stream_ops:m}},getDevice:h=>R.devices[h],getMounts(h){for(var m=[],x=[h];x.length;){var w=x.pop();m.push(w),x.push(...w.mounts)}return m},syncfs(h,m){typeof h=="function"&&(m=h,h=!1),R.syncFSRequests++,R.syncFSRequests>1&&U(`warning: ${R.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var x=R.getMounts(R.root.mount),w=0;function N(J){return R.syncFSRequests--,m(J)}function G(J){if(J)return G.errored?void 0:(G.errored=!0,N(J));++w>=x.length&&N(null)}x.forEach(J=>{if(!J.type.syncfs)return G(null);J.type.syncfs(J,h,G)})},mount(h,m,x){var w=x==="/",N=!x,G;if(w&&R.root)throw new R.ErrnoError(10);if(!w&&!N){var J=R.lookupPath(x,{follow_mount:!1});if(x=J.path,G=J.node,R.isMountpoint(G))throw new R.ErrnoError(10);if(!R.isDir(G.mode))throw new R.ErrnoError(54)}var ot={type:h,opts:m,mountpoint:x,mounts:[]},wt=h.mount(ot);return wt.mount=ot,ot.root=wt,w?R.root=wt:G&&(G.mounted=ot,G.mount&&G.mount.mounts.push(ot)),wt},unmount(h){var m=R.lookupPath(h,{follow_mount:!1});if(!R.isMountpoint(m.node))throw new R.ErrnoError(28);var x=m.node,w=x.mounted,N=R.getMounts(w);Object.keys(R.nameTable).forEach(J=>{for(var ot=R.nameTable[J];ot;){var wt=ot.name_next;N.includes(ot.mount)&&R.destroyNode(ot),ot=wt}}),x.mounted=null;var G=x.mount.mounts.indexOf(w);x.mount.mounts.splice(G,1)},lookup(h,m){return h.node_ops.lookup(h,m)},mknod(h,m,x){var w=R.lookupPath(h,{parent:!0}),N=w.node,G=I.basename(h);if(!G||G==="."||G==="..")throw new R.ErrnoError(28);var J=R.mayCreate(N,G);if(J)throw new R.ErrnoError(J);if(!N.node_ops.mknod)throw new R.ErrnoError(63);return N.node_ops.mknod(N,G,m,x)},create(h,m){return m=m!==void 0?m:438,m&=4095,m|=32768,R.mknod(h,m,0)},mkdir(h,m){return m=m!==void 0?m:511,m&=1023,m|=16384,R.mknod(h,m,0)},mkdirTree(h,m){for(var x=h.split("/"),w="",N=0;N<x.length;++N)if(x[N]){w+="/"+x[N];try{R.mkdir(w,m)}catch(G){if(G.errno!=20)throw G}}},mkdev(h,m,x){return typeof x>"u"&&(x=m,m=438),m|=8192,R.mknod(h,m,x)},symlink(h,m){if(!at.resolve(h))throw new R.ErrnoError(44);var x=R.lookupPath(m,{parent:!0}),w=x.node;if(!w)throw new R.ErrnoError(44);var N=I.basename(m),G=R.mayCreate(w,N);if(G)throw new R.ErrnoError(G);if(!w.node_ops.symlink)throw new R.ErrnoError(63);return w.node_ops.symlink(w,N,h)},rename(h,m){var x=I.dirname(h),w=I.dirname(m),N=I.basename(h),G=I.basename(m),J,ot,wt;if(J=R.lookupPath(h,{parent:!0}),ot=J.node,J=R.lookupPath(m,{parent:!0}),wt=J.node,!ot||!wt)throw new R.ErrnoError(44);if(ot.mount!==wt.mount)throw new R.ErrnoError(75);var Ot=R.lookupNode(ot,N),$t=at.relative(h,w);if($t.charAt(0)!==".")throw new R.ErrnoError(28);if($t=at.relative(m,x),$t.charAt(0)!==".")throw new R.ErrnoError(55);var Qt;try{Qt=R.lookupNode(wt,G)}catch{}if(Ot!==Qt){var ae=R.isDir(Ot.mode),se=R.mayDelete(ot,N,ae);if(se)throw new R.ErrnoError(se);if(se=Qt?R.mayDelete(wt,G,ae):R.mayCreate(wt,G),se)throw new R.ErrnoError(se);if(!ot.node_ops.rename)throw new R.ErrnoError(63);if(R.isMountpoint(Ot)||Qt&&R.isMountpoint(Qt))throw new R.ErrnoError(10);if(wt!==ot&&(se=R.nodePermissions(ot,"w"),se))throw new R.ErrnoError(se);R.hashRemoveNode(Ot);try{ot.node_ops.rename(Ot,wt,G),Ot.parent=wt}catch(me){throw me}finally{R.hashAddNode(Ot)}}},rmdir(h){var m=R.lookupPath(h,{parent:!0}),x=m.node,w=I.basename(h),N=R.lookupNode(x,w),G=R.mayDelete(x,w,!0);if(G)throw new R.ErrnoError(G);if(!x.node_ops.rmdir)throw new R.ErrnoError(63);if(R.isMountpoint(N))throw new R.ErrnoError(10);x.node_ops.rmdir(x,w),R.destroyNode(N)},readdir(h){var m=R.lookupPath(h,{follow:!0}),x=m.node;if(!x.node_ops.readdir)throw new R.ErrnoError(54);return x.node_ops.readdir(x)},unlink(h){var m=R.lookupPath(h,{parent:!0}),x=m.node;if(!x)throw new R.ErrnoError(44);var w=I.basename(h),N=R.lookupNode(x,w),G=R.mayDelete(x,w,!1);if(G)throw new R.ErrnoError(G);if(!x.node_ops.unlink)throw new R.ErrnoError(63);if(R.isMountpoint(N))throw new R.ErrnoError(10);x.node_ops.unlink(x,w),R.destroyNode(N)},readlink(h){var m=R.lookupPath(h),x=m.node;if(!x)throw new R.ErrnoError(44);if(!x.node_ops.readlink)throw new R.ErrnoError(28);return at.resolve(R.getPath(x.parent),x.node_ops.readlink(x))},stat(h,m){var x=R.lookupPath(h,{follow:!m}),w=x.node;if(!w)throw new R.ErrnoError(44);if(!w.node_ops.getattr)throw new R.ErrnoError(63);return w.node_ops.getattr(w)},lstat(h){return R.stat(h,!0)},chmod(h,m,x){var w;if(typeof h=="string"){var N=R.lookupPath(h,{follow:!x});w=N.node}else w=h;if(!w.node_ops.setattr)throw new R.ErrnoError(63);w.node_ops.setattr(w,{mode:m&4095|w.mode&-4096,timestamp:Date.now()})},lchmod(h,m){R.chmod(h,m,!0)},fchmod(h,m){var x=R.getStreamChecked(h);R.chmod(x.node,m)},chown(h,m,x,w){var N;if(typeof h=="string"){var G=R.lookupPath(h,{follow:!w});N=G.node}else N=h;if(!N.node_ops.setattr)throw new R.ErrnoError(63);N.node_ops.setattr(N,{timestamp:Date.now()})},lchown(h,m,x){R.chown(h,m,x,!0)},fchown(h,m,x){var w=R.getStreamChecked(h);R.chown(w.node,m,x)},truncate(h,m){if(m<0)throw new R.ErrnoError(28);var x;if(typeof h=="string"){var w=R.lookupPath(h,{follow:!0});x=w.node}else x=h;if(!x.node_ops.setattr)throw new R.ErrnoError(63);if(R.isDir(x.mode))throw new R.ErrnoError(31);if(!R.isFile(x.mode))throw new R.ErrnoError(28);var N=R.nodePermissions(x,"w");if(N)throw new R.ErrnoError(N);x.node_ops.setattr(x,{size:m,timestamp:Date.now()})},ftruncate(h,m){var x=R.getStreamChecked(h);if((x.flags&2097155)===0)throw new R.ErrnoError(28);R.truncate(x.node,m)},utime(h,m,x){var w=R.lookupPath(h,{follow:!0}),N=w.node;N.node_ops.setattr(N,{timestamp:Math.max(m,x)})},open(h,m,x){if(h==="")throw new R.ErrnoError(44);m=typeof m=="string"?Ls(m):m,m&64?(x=typeof x>"u"?438:x,x=x&4095|32768):x=0;var w;if(typeof h=="object")w=h;else{h=I.normalize(h);try{var N=R.lookupPath(h,{follow:!(m&131072)});w=N.node}catch{}}var G=!1;if(m&64)if(w){if(m&128)throw new R.ErrnoError(20)}else w=R.mknod(h,x,0),G=!0;if(!w)throw new R.ErrnoError(44);if(R.isChrdev(w.mode)&&(m&=-513),m&65536&&!R.isDir(w.mode))throw new R.ErrnoError(54);if(!G){var J=R.mayOpen(w,m);if(J)throw new R.ErrnoError(J)}m&512&&!G&&R.truncate(w,0),m&=-131713;var ot=R.createStream({node:w,path:R.getPath(w),flags:m,seekable:!0,position:0,stream_ops:w.stream_ops,ungotten:[],error:!1});return ot.stream_ops.open&&ot.stream_ops.open(ot),i.logReadFiles&&!(m&1)&&(h in R.readFiles||(R.readFiles[h]=1)),ot},close(h){if(R.isClosed(h))throw new R.ErrnoError(8);h.getdents&&(h.getdents=null);try{h.stream_ops.close&&h.stream_ops.close(h)}catch(m){throw m}finally{R.closeStream(h.fd)}h.fd=null},isClosed(h){return h.fd===null},llseek(h,m,x){if(R.isClosed(h))throw new R.ErrnoError(8);if(!h.seekable||!h.stream_ops.llseek)throw new R.ErrnoError(70);if(x!=0&&x!=1&&x!=2)throw new R.ErrnoError(28);return h.position=h.stream_ops.llseek(h,m,x),h.ungotten=[],h.position},read(h,m,x,w,N){if(w<0||N<0)throw new R.ErrnoError(28);if(R.isClosed(h))throw new R.ErrnoError(8);if((h.flags&2097155)===1)throw new R.ErrnoError(8);if(R.isDir(h.node.mode))throw new R.ErrnoError(31);if(!h.stream_ops.read)throw new R.ErrnoError(28);var G=typeof N<"u";if(!G)N=h.position;else if(!h.seekable)throw new R.ErrnoError(70);var J=h.stream_ops.read(h,m,x,w,N);return G||(h.position+=J),J},write(h,m,x,w,N,G){if(w<0||N<0)throw new R.ErrnoError(28);if(R.isClosed(h))throw new R.ErrnoError(8);if((h.flags&2097155)===0)throw new R.ErrnoError(8);if(R.isDir(h.node.mode))throw new R.ErrnoError(31);if(!h.stream_ops.write)throw new R.ErrnoError(28);h.seekable&&h.flags&1024&&R.llseek(h,0,2);var J=typeof N<"u";if(!J)N=h.position;else if(!h.seekable)throw new R.ErrnoError(70);var ot=h.stream_ops.write(h,m,x,w,N,G);return J||(h.position+=ot),ot},allocate(h,m,x){if(R.isClosed(h))throw new R.ErrnoError(8);if(m<0||x<=0)throw new R.ErrnoError(28);if((h.flags&2097155)===0)throw new R.ErrnoError(8);if(!R.isFile(h.node.mode)&&!R.isDir(h.node.mode))throw new R.ErrnoError(43);if(!h.stream_ops.allocate)throw new R.ErrnoError(138);h.stream_ops.allocate(h,m,x)},mmap(h,m,x,w,N){if((w&2)!==0&&(N&2)===0&&(h.flags&2097155)!==2)throw new R.ErrnoError(2);if((h.flags&2097155)===1)throw new R.ErrnoError(2);if(!h.stream_ops.mmap)throw new R.ErrnoError(43);if(!m)throw new R.ErrnoError(28);return h.stream_ops.mmap(h,m,x,w,N)},msync(h,m,x,w,N){return h.stream_ops.msync?h.stream_ops.msync(h,m,x,w,N):0},ioctl(h,m,x){if(!h.stream_ops.ioctl)throw new R.ErrnoError(59);return h.stream_ops.ioctl(h,m,x)},readFile(h,m={}){if(m.flags=m.flags||0,m.encoding=m.encoding||"binary",m.encoding!=="utf8"&&m.encoding!=="binary")throw new Error(`Invalid encoding type "${m.encoding}"`);var x,w=R.open(h,m.flags),N=R.stat(h),G=N.size,J=new Uint8Array(G);return R.read(w,J,0,G,0),m.encoding==="utf8"?x=bt(J):m.encoding==="binary"&&(x=J),R.close(w),x},writeFile(h,m,x={}){x.flags=x.flags||577;var w=R.open(h,x.flags,x.mode);if(typeof m=="string"){var N=new Uint8Array(Nt(m)+1),G=Mt(m,N,0,N.length);R.write(w,N,0,G,void 0,x.canOwn)}else if(ArrayBuffer.isView(m))R.write(w,m,0,m.byteLength,void 0,x.canOwn);else throw new Error("Unsupported data type");R.close(w)},cwd:()=>R.currentPath,chdir(h){var m=R.lookupPath(h,{follow:!0});if(m.node===null)throw new R.ErrnoError(44);if(!R.isDir(m.node.mode))throw new R.ErrnoError(54);var x=R.nodePermissions(m.node,"x");if(x)throw new R.ErrnoError(x);R.currentPath=m.path},createDefaultDirectories(){R.mkdir("/tmp"),R.mkdir("/home"),R.mkdir("/home/web_user")},createDefaultDevices(){R.mkdir("/dev"),R.registerDevice(R.makedev(1,3),{read:()=>0,write:(w,N,G,J,ot)=>J}),R.mkdev("/dev/null",R.makedev(1,3)),St.register(R.makedev(5,0),St.default_tty_ops),St.register(R.makedev(6,0),St.default_tty1_ops),R.mkdev("/dev/tty",R.makedev(5,0)),R.mkdev("/dev/tty1",R.makedev(6,0));var h=new Uint8Array(1024),m=0,x=()=>(m===0&&(m=$(h).byteLength),h[--m]);R.createDevice("/dev","random",x),R.createDevice("/dev","urandom",x),R.mkdir("/dev/shm"),R.mkdir("/dev/shm/tmp")},createSpecialDirectories(){R.mkdir("/proc");var h=R.mkdir("/proc/self");R.mkdir("/proc/self/fd"),R.mount({mount(){var m=R.createNode(h,"fd",16895,73);return m.node_ops={lookup(x,w){var N=+w,G=R.getStreamChecked(N),J={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>G.path}};return J.parent=J,J}},m}},{},"/proc/self/fd")},createStandardStreams(h,m,x){h?R.createDevice("/dev","stdin",h):R.symlink("/dev/tty","/dev/stdin"),m?R.createDevice("/dev","stdout",null,m):R.symlink("/dev/tty","/dev/stdout"),x?R.createDevice("/dev","stderr",null,x):R.symlink("/dev/tty1","/dev/stderr");var w=R.open("/dev/stdin",0),N=R.open("/dev/stdout",1),G=R.open("/dev/stderr",1)},staticInit(){[44].forEach(h=>{R.genericErrors[h]=new R.ErrnoError(h),R.genericErrors[h].stack="<generic error, no stack>"}),R.nameTable=new Array(4096),R.mount(Dt,{},"/"),R.createDefaultDirectories(),R.createDefaultDevices(),R.createSpecialDirectories(),R.filesystems={MEMFS:Dt}},init(h,m,x){R.initialized=!0,h??=i.stdin,m??=i.stdout,x??=i.stderr,R.createStandardStreams(h,m,x)},quit(){R.initialized=!1;for(var h=0;h<R.streams.length;h++){var m=R.streams[h];m&&R.close(m)}},findObject(h,m){var x=R.analyzePath(h,m);return x.exists?x.object:null},analyzePath(h,m){try{var x=R.lookupPath(h,{follow:!m});h=x.path}catch{}var w={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var x=R.lookupPath(h,{parent:!0});w.parentExists=!0,w.parentPath=x.path,w.parentObject=x.node,w.name=I.basename(h),x=R.lookupPath(h,{follow:!m}),w.exists=!0,w.path=x.path,w.object=x.node,w.name=x.node.name,w.isRoot=x.path==="/"}catch(N){w.error=N.errno}return w},createPath(h,m,x,w){h=typeof h=="string"?h:R.getPath(h);for(var N=m.split("/").reverse();N.length;){var G=N.pop();if(G){var J=I.join2(h,G);try{R.mkdir(J)}catch{}h=J}}return J},createFile(h,m,x,w,N){var G=I.join2(typeof h=="string"?h:R.getPath(h),m),J=cr(w,N);return R.create(G,J)},createDataFile(h,m,x,w,N,G){var J=m;h&&(h=typeof h=="string"?h:R.getPath(h),J=m?I.join2(h,m):h);var ot=cr(w,N),wt=R.create(J,ot);if(x){if(typeof x=="string"){for(var Ot=new Array(x.length),$t=0,Qt=x.length;$t<Qt;++$t)Ot[$t]=x.charCodeAt($t);x=Ot}R.chmod(wt,ot|146);var ae=R.open(wt,577);R.write(ae,x,0,x.length,0,G),R.close(ae),R.chmod(wt,ot)}},createDevice(h,m,x,w){var N=I.join2(typeof h=="string"?h:R.getPath(h),m),G=cr(!!x,!!w);R.createDevice.major??=64;var J=R.makedev(R.createDevice.major++,0);return R.registerDevice(J,{open(ot){ot.seekable=!1},close(ot){w?.buffer?.length&&w(10)},read(ot,wt,Ot,$t,Qt){for(var ae=0,se=0;se<$t;se++){var me;try{me=x()}catch{throw new R.ErrnoError(29)}if(me===void 0&&ae===0)throw new R.ErrnoError(6);if(me==null)break;ae++,wt[Ot+se]=me}return ae&&(ot.node.timestamp=Date.now()),ae},write(ot,wt,Ot,$t,Qt){for(var ae=0;ae<$t;ae++)try{w(wt[Ot+ae])}catch{throw new R.ErrnoError(29)}return $t&&(ot.node.timestamp=Date.now()),ae}}),R.mkdev(N,G,J)},forceLoadFile(h){if(h.isDevice||h.isFolder||h.link||h.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{h.contents=M(h.url),h.usedBytes=h.contents.length}catch{throw new R.ErrnoError(29)}},createLazyFile(h,m,x,w,N){class G{constructor(){this.lengthKnown=!1,this.chunks=[]}get(se){if(!(se>this.length-1||se<0)){var me=se%this.chunkSize,Le=se/this.chunkSize|0;return this.getter(Le)[me]}}setDataGetter(se){this.getter=se}cacheLength(){var se=new XMLHttpRequest;if(se.open("HEAD",x,!1),se.send(null),!(se.status>=200&&se.status<300||se.status===304))throw new Error("Couldn't load "+x+". Status: "+se.status);var me=Number(se.getResponseHeader("Content-length")),Le,mn=(Le=se.getResponseHeader("Accept-Ranges"))&&Le==="bytes",Ke=(Le=se.getResponseHeader("Content-Encoding"))&&Le==="gzip",qn=1024*1024;mn||(qn=me);var $n=(hi,Br)=>{if(hi>Br)throw new Error("invalid range ("+hi+", "+Br+") or no bytes requested!");if(Br>me-1)throw new Error("only "+me+" bytes available! programmer error!");var un=new XMLHttpRequest;if(un.open("GET",x,!1),me!==qn&&un.setRequestHeader("Range","bytes="+hi+"-"+Br),un.responseType="arraybuffer",un.overrideMimeType&&un.overrideMimeType("text/plain; charset=x-user-defined"),un.send(null),!(un.status>=200&&un.status<300||un.status===304))throw new Error("Couldn't load "+x+". Status: "+un.status);return un.response!==void 0?new Uint8Array(un.response||[]):j(un.responseText||"",!0)},Us=this;Us.setDataGetter(hi=>{var Br=hi*qn,un=(hi+1)*qn-1;if(un=Math.min(un,me-1),typeof Us.chunks[hi]>"u"&&(Us.chunks[hi]=$n(Br,un)),typeof Us.chunks[hi]>"u")throw new Error("doXHR failed!");return Us.chunks[hi]}),(Ke||!me)&&(qn=me=1,me=this.getter(0).length,qn=me,L("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=qn,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!f)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var J=new G,ot={isDevice:!1,contents:J}}else var ot={isDevice:!1,url:x};var wt=R.createFile(h,m,ot,w,N);ot.contents?wt.contents=ot.contents:ot.url&&(wt.contents=null,wt.url=ot.url),Object.defineProperties(wt,{usedBytes:{get:function(){return this.contents.length}}});var Ot={},$t=Object.keys(wt.stream_ops);$t.forEach(ae=>{var se=wt.stream_ops[ae];Ot[ae]=(...me)=>(R.forceLoadFile(wt),se(...me))});function Qt(ae,se,me,Le,mn){var Ke=ae.node.contents;if(mn>=Ke.length)return 0;var qn=Math.min(Ke.length-mn,Le);if(Ke.slice)for(var $n=0;$n<qn;$n++)se[me+$n]=Ke[mn+$n];else for(var $n=0;$n<qn;$n++)se[me+$n]=Ke.get(mn+$n);return qn}return Ot.read=(ae,se,me,Le,mn)=>(R.forceLoadFile(wt),Qt(ae,se,me,Le,mn)),Ot.mmap=(ae,se,me,Le,mn)=>{R.forceLoadFile(wt);var Ke=Rt(se);if(!Ke)throw new R.ErrnoError(48);return Qt(ae,nt,Ke,se,me),{ptr:Ke,allocated:!0}},wt.stream_ops=Ot,wt}},xi=(h,m)=>h?bt(rt,h,m):"",Ae={DEFAULT_POLLMASK:5,calculateAt(h,m,x){if(I.isAbs(m))return m;var w;if(h===-100)w=R.cwd();else{var N=Ae.getStreamFromFD(h);w=N.path}if(m.length==0){if(!x)throw new R.ErrnoError(44);return w}return I.join2(w,m)},doStat(h,m,x){var w=h(m);tt[x>>2]=w.dev,tt[x+4>>2]=w.mode,dt[x+8>>2]=w.nlink,tt[x+12>>2]=w.uid,tt[x+16>>2]=w.gid,tt[x+20>>2]=w.rdev,mt=[w.size>>>0,(it=w.size,+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],tt[x+24>>2]=mt[0],tt[x+28>>2]=mt[1],tt[x+32>>2]=4096,tt[x+36>>2]=w.blocks;var N=w.atime.getTime(),G=w.mtime.getTime(),J=w.ctime.getTime();return mt=[Math.floor(N/1e3)>>>0,(it=Math.floor(N/1e3),+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],tt[x+40>>2]=mt[0],tt[x+44>>2]=mt[1],dt[x+48>>2]=N%1e3*1e3*1e3,mt=[Math.floor(G/1e3)>>>0,(it=Math.floor(G/1e3),+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],tt[x+56>>2]=mt[0],tt[x+60>>2]=mt[1],dt[x+64>>2]=G%1e3*1e3*1e3,mt=[Math.floor(J/1e3)>>>0,(it=Math.floor(J/1e3),+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],tt[x+72>>2]=mt[0],tt[x+76>>2]=mt[1],dt[x+80>>2]=J%1e3*1e3*1e3,mt=[w.ino>>>0,(it=w.ino,+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],tt[x+88>>2]=mt[0],tt[x+92>>2]=mt[1],0},doMsync(h,m,x,w,N){if(!R.isFile(m.node.mode))throw new R.ErrnoError(43);if(w&2)return 0;var G=rt.slice(h,h+x);R.msync(m,G,N,x,w)},getStreamFromFD(h){var m=R.getStreamChecked(h);return m},varargs:void 0,getStr(h){var m=xi(h);return m}};function Pr(h,m){try{return h=Ae.getStr(h),R.chmod(h,m),0}catch(x){if(typeof R>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function Ir(h,m,x,w){try{if(m=Ae.getStr(m),m=Ae.calculateAt(h,m),x&-8)return-28;var N=R.lookupPath(m,{follow:!0}),G=N.node;if(!G)return-44;var J="";return x&4&&(J+="r"),x&2&&(J+="w"),x&1&&(J+="x"),J&&R.nodePermissions(G,J)?-2:0}catch(ot){if(typeof R>"u"||ot.name!=="ErrnoError")throw ot;return-ot.errno}}function Cn(){var h=tt[+Ae.varargs>>2];return Ae.varargs+=4,h}var zn=Cn;function Rr(h,m,x){Ae.varargs=x;try{var w=Ae.getStreamFromFD(h);switch(m){case 0:{var N=Cn();if(N<0)return-28;for(;R.streams[N];)N++;var G;return G=R.dupStream(w,N),G.fd}case 1:case 2:return 0;case 3:return w.flags;case 4:{var N=Cn();return w.flags|=N,0}case 12:{var N=zn(),J=0;return et[N+J>>1]=2,0}case 13:case 14:return 0}return-28}catch(ot){if(typeof R>"u"||ot.name!=="ErrnoError")throw ot;return-ot.errno}}function li(h,m){try{var x=Ae.getStreamFromFD(h);return Ae.doStat(R.stat,x.path,m)}catch(w){if(typeof R>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function Mi(h,m,x){Ae.varargs=x;try{var w=Ae.getStreamFromFD(h);switch(m){case 21509:return w.tty?0:-59;case 21505:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tcgets){var N=w.tty.ops.ioctl_tcgets(w),G=zn();tt[G>>2]=N.c_iflag||0,tt[G+4>>2]=N.c_oflag||0,tt[G+8>>2]=N.c_cflag||0,tt[G+12>>2]=N.c_lflag||0;for(var J=0;J<32;J++)nt[G+J+17]=N.c_cc[J]||0;return 0}return 0}case 21510:case 21511:case 21512:return w.tty?0:-59;case 21506:case 21507:case 21508:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tcsets){for(var G=zn(),ot=tt[G>>2],wt=tt[G+4>>2],Ot=tt[G+8>>2],$t=tt[G+12>>2],Qt=[],J=0;J<32;J++)Qt.push(nt[G+J+17]);return w.tty.ops.ioctl_tcsets(w.tty,m,{c_iflag:ot,c_oflag:wt,c_cflag:Ot,c_lflag:$t,c_cc:Qt})}return 0}case 21519:{if(!w.tty)return-59;var G=zn();return tt[G>>2]=0,0}case 21520:return w.tty?-28:-59;case 21531:{var G=zn();return R.ioctl(w,m,G)}case 21523:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tiocgwinsz){var ae=w.tty.ops.ioctl_tiocgwinsz(w.tty),G=zn();et[G>>1]=ae[0],et[G+2>>1]=ae[1]}return 0}case 21524:return w.tty?0:-59;case 21515:return w.tty?0:-59;default:return-28}}catch(se){if(typeof R>"u"||se.name!=="ErrnoError")throw se;return-se.errno}}function Lr(h,m){try{return h=Ae.getStr(h),Ae.doStat(R.lstat,h,m)}catch(x){if(typeof R>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function Di(h,m,x,w){try{m=Ae.getStr(m);var N=w&256,G=w&4096;return w=w&-6401,m=Ae.calculateAt(h,m,G),Ae.doStat(N?R.lstat:R.stat,m,x)}catch(J){if(typeof R>"u"||J.name!=="ErrnoError")throw J;return-J.errno}}function Nr(h,m,x,w){Ae.varargs=w;try{m=Ae.getStr(m),m=Ae.calculateAt(h,m);var N=w?Cn():0;return R.open(m,x,N).fd}catch(G){if(typeof R>"u"||G.name!=="ErrnoError")throw G;return-G.errno}}function Dr(h){try{return h=Ae.getStr(h),R.rmdir(h),0}catch(m){if(typeof R>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}function Ns(h,m){try{return h=Ae.getStr(h),Ae.doStat(R.stat,h,m)}catch(x){if(typeof R>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function ci(h,m,x){try{return m=Ae.getStr(m),m=Ae.calculateAt(h,m),x===0?R.unlink(m):x===512?R.rmdir(m):Se("Invalid flags passed to unlinkat"),0}catch(w){if(typeof R>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}var Ds=()=>{Se("")},Os=(h,m,x,w,N)=>{},Or=()=>{for(var h=new Array(256),m=0;m<256;++m)h[m]=String.fromCharCode(m);D=h},D,st=h=>{for(var m="",x=h;rt[x];)m+=D[rt[x++]];return m},xt={},_t={},vt={},qt,Ut=h=>{throw new qt(h)},Yt,Kt=h=>{throw new Yt(h)},ne=(h,m,x)=>{h.forEach(ot=>vt[ot]=m);function w(ot){var wt=x(ot);wt.length!==h.length&&Kt("Mismatched type converter count");for(var Ot=0;Ot<h.length;++Ot)fe(h[Ot],wt[Ot])}var N=new Array(m.length),G=[],J=0;m.forEach((ot,wt)=>{_t.hasOwnProperty(ot)?N[wt]=_t[ot]:(G.push(ot),xt.hasOwnProperty(ot)||(xt[ot]=[]),xt[ot].push(()=>{N[wt]=_t[ot],++J,J===G.length&&w(N)}))}),G.length===0&&w(N)};function Xt(h,m,x={}){var w=m.name;if(h||Ut(`type "${w}" must have a positive integer typeid pointer`),_t.hasOwnProperty(h)){if(x.ignoreDuplicateRegistrations)return;Ut(`Cannot register type '${w}' twice`)}if(_t[h]=m,delete vt[h],xt.hasOwnProperty(h)){var N=xt[h];delete xt[h],N.forEach(G=>G())}}function fe(h,m,x={}){return Xt(h,m,x)}var jt=8,Pe=(h,m,x,w)=>{m=st(m),fe(h,{name:m,fromWireType:function(N){return!!N},toWireType:function(N,G){return G?x:w},argPackAdvance:jt,readValueFromPointer:function(N){return this.fromWireType(rt[N])},destructorFunction:null})},We=[],we=[],s=h=>{h>9&&--we[h+1]===0&&(we[h]=void 0,We.push(h))},a=()=>we.length/2-5-We.length,l=()=>{we.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=a},p={toValue:h=>(h||Ut("Cannot use deleted val. handle = "+h),we[h]),toHandle:h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let m=We.pop()||we.length;return we[m]=h,we[m+1]=1,m}}}};function _(h){return this.fromWireType(dt[h>>2])}var A={name:"emscripten::val",fromWireType:h=>{var m=p.toValue(h);return s(h),m},toWireType:(h,m)=>p.toHandle(m),argPackAdvance:jt,readValueFromPointer:_,destructorFunction:null},O=h=>fe(h,A),Z=(h,m)=>{switch(m){case 4:return function(x){return this.fromWireType(X[x>>2])};case 8:return function(x){return this.fromWireType(pt[x>>3])};default:throw new TypeError(`invalid float width (${m}): ${h}`)}},K=(h,m,x)=>{m=st(m),fe(h,{name:m,fromWireType:w=>w,toWireType:(w,N)=>N,argPackAdvance:jt,readValueFromPointer:Z(m,x),destructorFunction:null})},ht=(h,m)=>Object.defineProperty(m,"name",{value:h}),At=h=>{for(;h.length;){var m=h.pop(),x=h.pop();x(m)}};function Tt(h){for(var m=1;m<h.length;++m)if(h[m]!==null&&h[m].destructorFunction===void 0)return!0;return!1}function Lt(h,m){if(!(h instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof h} which is not a function`);var x=ht(h.name||"unknownFunctionName",function(){});x.prototype=h.prototype;var w=new x,N=h.apply(w,m);return N instanceof Object?N:w}function re(h,m,x,w){var N=Tt(h),G=h.length-2,J=[],ot=["fn"];m&&ot.push("thisWired");for(var wt=0;wt<G;++wt)J.push(`arg${wt}`),ot.push(`arg${wt}Wired`);J=J.join(","),ot=ot.join(",");var Ot=`return function (${J}) {
`;N&&(Ot+=`var destructors = [];
`);var $t=N?"destructors":"null",Qt=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];m&&(Ot+=`var thisWired = classParam['toWireType'](${$t}, this);
`);for(var wt=0;wt<G;++wt)Ot+=`var arg${wt}Wired = argType${wt}['toWireType'](${$t}, arg${wt});
`,Qt.push(`argType${wt}`);if(Ot+=(x||w?"var rv = ":"")+`invoker(${ot});
`,N)Ot+=`runDestructors(destructors);
`;else for(var wt=m?1:2;wt<h.length;++wt){var ae=wt===1?"thisWired":"arg"+(wt-2)+"Wired";h[wt].destructorFunction!==null&&(Ot+=`${ae}_dtor(${ae});
`,Qt.push(`${ae}_dtor`))}return x&&(Ot+=`var ret = retType['fromWireType'](rv);
return ret;
`),Ot+=`}
`,[Qt,Ot]}function pe(h,m,x,w,N,G){var J=m.length;J<2&&Ut("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ot=m[1]!==null&&x!==null,wt=Tt(m),Ot=m[0].name!=="void",$t=[h,Ut,w,N,At,m[0],m[1]],Qt=0;Qt<J-2;++Qt)$t.push(m[Qt+2]);if(!wt)for(var Qt=ot?1:2;Qt<m.length;++Qt)m[Qt].destructorFunction!==null&&$t.push(m[Qt].destructorFunction);let[ae,se]=re(m,ot,Ot,G);ae.push(se);var me=Lt(Function,ae)(...$t);return ht(h,me)}var xe=(h,m,x)=>{if(h[m].overloadTable===void 0){var w=h[m];h[m]=function(...N){return h[m].overloadTable.hasOwnProperty(N.length)||Ut(`Function '${x}' called with an invalid number of arguments (${N.length}) - expects one of (${h[m].overloadTable})!`),h[m].overloadTable[N.length].apply(this,N)},h[m].overloadTable=[],h[m].overloadTable[w.argCount]=w}},Be=(h,m,x)=>{i.hasOwnProperty(h)?((x===void 0||i[h].overloadTable!==void 0&&i[h].overloadTable[x]!==void 0)&&Ut(`Cannot register public name '${h}' twice`),xe(i,h,h),i.hasOwnProperty(x)&&Ut(`Cannot register multiple overloads of a function with the same number of arguments (${x})!`),i[h].overloadTable[x]=m):(i[h]=m,x!==void 0&&(i[h].numArguments=x))},pn=(h,m)=>{for(var x=[],w=0;w<h;w++)x.push(dt[m+w*4>>2]);return x},Vn=(h,m,x)=>{i.hasOwnProperty(h)||Kt("Replacing nonexistent public symbol"),i[h].overloadTable!==void 0&&x!==void 0?i[h].overloadTable[x]=m:(i[h]=m,i[h].argCount=x)},Oi=(h,m,x)=>{h=h.replace(/p/g,"i");var w=i["dynCall_"+h];return w(m,...x)},Fr=[],Bo,Si=h=>{var m=Fr[h];return m||(h>=Fr.length&&(Fr.length=h+1),Fr[h]=m=Bo.get(h)),m},sp=(h,m,x=[])=>{if(h.includes("j"))return Oi(h,m,x);var w=Si(m)(...x);return w},op=(h,m)=>(...x)=>sp(h,m,x),ap=(h,m)=>{h=st(h);function x(){return h.includes("j")?op(h,m):Si(m)}var w=x();return typeof w!="function"&&Ut(`unknown function pointer with signature ${h}: ${m}`),w},lp=(h,m)=>{var x=ht(m,function(w){this.name=m,this.message=w;var N=new Error(w).stack;N!==void 0&&(this.stack=this.toString()+`
`+N.replace(/^Error(:[^\n]*)?\n/,""))});return x.prototype=Object.create(h.prototype),x.prototype.constructor=x,x.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},x},ou,au=h=>{var m=du(h),x=st(m);return bi(m),x},cp=(h,m)=>{var x=[],w={};function N(G){if(!w[G]&&!_t[G]){if(vt[G]){vt[G].forEach(N);return}x.push(G),w[G]=!0}}throw m.forEach(N),new ou(`${h}: `+x.map(au).join([", "]))},hp=h=>{h=h.trim();let m=h.indexOf("(");return m!==-1?h.substr(0,m):h},up=(h,m,x,w,N,G,J,ot)=>{var wt=pn(m,x);h=st(h),h=hp(h),N=ap(w,N),Be(h,function(){cp(`Cannot call ${h} due to unbound types`,wt)},m-1),ne([],wt,Ot=>{var $t=[Ot[0],null].concat(Ot.slice(1));return Vn(h,pe(h,$t,null,N,G,J),m-1),[]})},fp=(h,m,x)=>{switch(m){case 1:return x?w=>nt[w]:w=>rt[w];case 2:return x?w=>et[w>>1]:w=>Q[w>>1];case 4:return x?w=>tt[w>>2]:w=>dt[w>>2];default:throw new TypeError(`invalid integer width (${m}): ${h}`)}},dp=(h,m,x,w,N)=>{m=st(m),N===-1&&(N=4294967295);var G=$t=>$t;if(w===0){var J=32-8*x;G=$t=>$t<<J>>>J}var ot=m.includes("unsigned"),wt=($t,Qt)=>{},Ot;ot?Ot=function($t,Qt){return wt(Qt,this.name),Qt>>>0}:Ot=function($t,Qt){return wt(Qt,this.name),Qt},fe(h,{name:m,fromWireType:G,toWireType:Ot,argPackAdvance:jt,readValueFromPointer:fp(m,x,w!==0),destructorFunction:null})},pp=(h,m,x)=>{var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],N=w[m];function G(J){var ot=dt[J>>2],wt=dt[J+4>>2];return new N(nt.buffer,wt,ot)}x=st(x),fe(h,{name:x,fromWireType:G,argPackAdvance:jt,readValueFromPointer:G},{ignoreDuplicateRegistrations:!0})},Ur=(h,m,x)=>Mt(h,rt,m,x),mp=(h,m)=>{m=st(m);var x=m==="std::string";fe(h,{name:m,fromWireType(w){var N=dt[w>>2],G=w+4,J;if(x)for(var ot=G,wt=0;wt<=N;++wt){var Ot=G+wt;if(wt==N||rt[Ot]==0){var $t=Ot-ot,Qt=xi(ot,$t);J===void 0?J=Qt:(J+="\0",J+=Qt),ot=Ot+1}}else{for(var ae=new Array(N),wt=0;wt<N;++wt)ae[wt]=String.fromCharCode(rt[G+wt]);J=ae.join("")}return bi(w),J},toWireType(w,N){N instanceof ArrayBuffer&&(N=new Uint8Array(N));var G,J=typeof N=="string";J||N instanceof Uint8Array||N instanceof Uint8ClampedArray||N instanceof Int8Array||Ut("Cannot pass non-string to std::string"),x&&J?G=Nt(N):G=N.length;var ot=fc(4+G+1),wt=ot+4;if(dt[ot>>2]=G,x&&J)Ur(N,wt,G+1);else if(J)for(var Ot=0;Ot<G;++Ot){var $t=N.charCodeAt(Ot);$t>255&&(bi(wt),Ut("String has UTF-16 code units that do not fit in 8 bits")),rt[wt+Ot]=$t}else for(var Ot=0;Ot<G;++Ot)rt[wt+Ot]=N[Ot];return w!==null&&w.push(bi,ot),ot},argPackAdvance:jt,readValueFromPointer:_,destructorFunction(w){bi(w)}})},lu=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,gp=(h,m)=>{for(var x=h,w=x>>1,N=w+m/2;!(w>=N)&&Q[w];)++w;if(x=w<<1,x-h>32&&lu)return lu.decode(rt.subarray(h,x));for(var G="",J=0;!(J>=m/2);++J){var ot=et[h+J*2>>1];if(ot==0)break;G+=String.fromCharCode(ot)}return G},_p=(h,m,x)=>{if(x??=2147483647,x<2)return 0;x-=2;for(var w=m,N=x<h.length*2?x/2:h.length,G=0;G<N;++G){var J=h.charCodeAt(G);et[m>>1]=J,m+=2}return et[m>>1]=0,m-w},vp=h=>h.length*2,yp=(h,m)=>{for(var x=0,w="";!(x>=m/4);){var N=tt[h+x*4>>2];if(N==0)break;if(++x,N>=65536){var G=N-65536;w+=String.fromCharCode(55296|G>>10,56320|G&1023)}else w+=String.fromCharCode(N)}return w},xp=(h,m,x)=>{if(x??=2147483647,x<4)return 0;for(var w=m,N=w+x-4,G=0;G<h.length;++G){var J=h.charCodeAt(G);if(J>=55296&&J<=57343){var ot=h.charCodeAt(++G);J=65536+((J&1023)<<10)|ot&1023}if(tt[m>>2]=J,m+=4,m+4>N)break}return tt[m>>2]=0,m-w},Mp=h=>{for(var m=0,x=0;x<h.length;++x){var w=h.charCodeAt(x);w>=55296&&w<=57343&&++x,m+=4}return m},Sp=(h,m,x)=>{x=st(x);var w,N,G,J;m===2?(w=gp,N=_p,J=vp,G=ot=>Q[ot>>1]):m===4&&(w=yp,N=xp,J=Mp,G=ot=>dt[ot>>2]),fe(h,{name:x,fromWireType:ot=>{for(var wt=dt[ot>>2],Ot,$t=ot+4,Qt=0;Qt<=wt;++Qt){var ae=ot+4+Qt*m;if(Qt==wt||G(ae)==0){var se=ae-$t,me=w($t,se);Ot===void 0?Ot=me:(Ot+="\0",Ot+=me),$t=ae+m}}return bi(ot),Ot},toWireType:(ot,wt)=>{typeof wt!="string"&&Ut(`Cannot pass non-string to C++ string type ${x}`);var Ot=J(wt),$t=fc(4+Ot+m);return dt[$t>>2]=Ot/m,N(wt,$t+4,Ot+m),ot!==null&&ot.push(bi,$t),$t},argPackAdvance:jt,readValueFromPointer:_,destructorFunction(ot){bi(ot)}})},bp=(h,m)=>{m=st(m),fe(h,{isVoid:!0,name:m,argPackAdvance:0,fromWireType:()=>{},toWireType:(x,w)=>{}})},wp=1,Ep=()=>wp,cu=h=>{for(var m=h.split("."),x=0;x<4;x++){var w=Number(m[x]);if(isNaN(w))return null;m[x]=w}return(m[0]|m[1]<<8|m[2]<<16|m[3]<<24)>>>0},ko=h=>parseInt(h),Tp=h=>{var m,x,w,N,G=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,J=[];if(!G.test(h))return null;if(h==="::")return[0,0,0,0,0,0,0,0];for(h.startsWith("::")?h=h.replace("::","Z:"):h=h.replace("::",":Z:"),h.indexOf(".")>0?(h=h.replace(new RegExp("[.]","g"),":"),m=h.split(":"),m[m.length-4]=ko(m[m.length-4])+ko(m[m.length-3])*256,m[m.length-3]=ko(m[m.length-2])+ko(m[m.length-1])*256,m=m.slice(0,m.length-2)):m=h.split(":"),w=0,N=0,x=0;x<m.length;x++)if(typeof m[x]=="string")if(m[x]==="Z"){for(N=0;N<8-m.length+1;N++)J[x+N]=0;w=N-1}else J[x+w]=pu(parseInt(m[x],16));else J[x+w]=m[x];return[J[1]<<16|J[0],J[3]<<16|J[2],J[5]<<16|J[4],J[7]<<16|J[6]]},Fi={address_map:{id:1,addrs:{},names:{}},lookup_name(h){var m=cu(h);if(m!==null||(m=Tp(h),m!==null))return h;var x;if(Fi.address_map.addrs[h])x=Fi.address_map.addrs[h];else{var w=Fi.address_map.id++;Y(w<65535,"exceeded max address mappings of 65535"),x="172.29."+(w&255)+"."+(w&65280),Fi.address_map.names[x]=h,Fi.address_map.addrs[h]=x}return x},lookup_addr(h){return Fi.address_map.names[h]?Fi.address_map.names[h]:null}},Ap=h=>{var m=xi(h);return cu(Fi.lookup_name(m))},Cp=(h,m,x)=>rt.copyWithin(h,m,m+x),ac=(h,m)=>{var x=_t[h];return x===void 0&&Ut(`${m} has unknown type ${au(h)}`),x},hu=(h,m,x)=>{var w=[],N=h.toWireType(w,x);return w.length&&(dt[m>>2]=p.toHandle(w)),N},Pp=(h,m,x)=>(h=p.toValue(h),m=ac(m,"emval::as"),hu(m,x,h)),Ip={},lc=h=>{var m=Ip[h];return m===void 0?st(h):m},cc=[],Rp=(h,m,x,w,N)=>(h=cc[h],m=p.toValue(m),x=lc(x),h(m,m[x],w,N)),uu=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),Lp=h=>h===0?p.toHandle(uu()):(h=lc(h),p.toHandle(uu()[h])),Np=h=>{var m=cc.length;return cc.push(h),m},Dp=(h,m)=>{for(var x=new Array(h),w=0;w<h;++w)x[w]=ac(dt[m+w*4>>2],"parameter "+w);return x},MM=Reflect.construct,Op=(h,m,x)=>{var w=Dp(h,m),N=w.shift();h--;var G=`return function (obj, func, destructorsRef, args) {
`,J=0,ot=[];x===0&&ot.push("obj");for(var wt=["retType"],Ot=[N],$t=0;$t<h;++$t)ot.push("arg"+$t),wt.push("argType"+$t),Ot.push(w[$t]),G+=`  var arg${$t} = argType${$t}.readValueFromPointer(args${J?"+"+J:""});
`,J+=w[$t].argPackAdvance;var Qt=x===1?"new func":"func.call";G+=`  var rv = ${Qt}(${ot.join(", ")});
`,N.isVoid||(wt.push("emval_returnValue"),Ot.push(hu),G+=`  return emval_returnValue(retType, destructorsRef, rv);
`),G+=`};
`,wt.push(G);var ae=Lt(Function,wt)(...Ot),se=`methodCaller<(${w.map(me=>me.name).join(", ")}) => ${N.name}>`;return Np(ht(se,ae))},Fp=(h,m)=>(h=p.toValue(h),m=p.toValue(m),p.toHandle(h[m])),Up=h=>{h>9&&(we[h+1]+=1)},Bp=()=>p.toHandle([]),kp=h=>p.toHandle(lc(h)),zp=()=>p.toHandle({}),Vp=h=>{var m=p.toValue(h);At(m),s(h)},Hp=(h,m,x)=>{h=p.toValue(h),m=p.toValue(m),x=p.toValue(x),h[m]=x},Gp=(h,m)=>{h=ac(h,"_emval_take_value");var x=h.readValueFromPointer(m);return p.toHandle(x)},Xp=h=>h%4===0&&(h%100!==0||h%400===0),Wp=[0,31,60,91,121,152,182,213,244,274,305,335],Yp=[0,31,59,90,120,151,181,212,243,273,304,334],qp=h=>{var m=Xp(h.getFullYear()),x=m?Wp:Yp,w=x[h.getMonth()]+h.getDate()-1;return w},hc=(h,m)=>m+2097152>>>0<4194305-!!h?(h>>>0)+m*4294967296:NaN;function $p(h,m,x){var w=hc(h,m),N=new Date(w*1e3);tt[x>>2]=N.getSeconds(),tt[x+4>>2]=N.getMinutes(),tt[x+8>>2]=N.getHours(),tt[x+12>>2]=N.getDate(),tt[x+16>>2]=N.getMonth(),tt[x+20>>2]=N.getFullYear()-1900,tt[x+24>>2]=N.getDay();var G=qp(N)|0;tt[x+28>>2]=G,tt[x+36>>2]=-(N.getTimezoneOffset()*60);var J=new Date(N.getFullYear(),0,1),ot=new Date(N.getFullYear(),6,1).getTimezoneOffset(),wt=J.getTimezoneOffset(),Ot=(ot!=wt&&N.getTimezoneOffset()==Math.min(wt,ot))|0;tt[x+32>>2]=Ot}function Zp(h,m,x,w,N,G,J){var ot=hc(G,J);try{var wt=Ae.getStreamFromFD(N);x&2&&Ae.doMsync(h,wt,m,w,ot)}catch(Ot){if(typeof R>"u"||Ot.name!=="ErrnoError")throw Ot;return-Ot.errno}}var Jp=(h,m,x,w)=>{var N=new Date().getFullYear(),G=new Date(N,0,1),J=new Date(N,6,1),ot=G.getTimezoneOffset(),wt=J.getTimezoneOffset(),Ot=Math.max(ot,wt);dt[h>>2]=Ot*60,tt[m>>2]=+(ot!=wt);var $t=se=>{var me=se>=0?"-":"+",Le=Math.abs(se),mn=String(Math.floor(Le/60)).padStart(2,"0"),Ke=String(Le%60).padStart(2,"0");return`UTC${me}${mn}${Ke}`},Qt=$t(ot),ae=$t(wt);wt<ot?(Ur(Qt,x,17),Ur(ae,w,17)):(Ur(Qt,w,17),Ur(ae,x,17))},jp=()=>Date.now();function Kp(){return new Error().stack.toString()}var zo=h=>{zo.shown||={},zo.shown[h]||(zo.shown[h]=1,d&&(h="warning: "+h),U(h))};function Qp(h){var m=Kp(),x=m.lastIndexOf("_emscripten_log"),w=m.lastIndexOf("_emscripten_get_callstack"),N=m.indexOf(`
`,Math.max(x,w))+1;m=m.slice(N),h&8&&typeof emscripten_source_map>"u"&&(zo('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),h^=8,h|=16);var G=m.split(`
`);m="";var J=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),ot=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),wt=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Ot in G){var $t=G[Ot],Qt="",ae="",se=0,me=0,Le=wt.exec($t);if(Le&&Le.length==5)Qt=Le[1],ae=Le[2],se=Le[3],me=Le[4];else if(Le=J.exec($t)||ot.exec($t),Le&&Le.length>=4)Qt=Le[1],ae=Le[2],se=Le[3],me=Le[4]|0;else{m+=$t+`
`;continue}var mn=!1;if(h&8){var Ke=emscripten_source_map.originalPositionFor({line:se,column:me});mn=Ke?.source,mn&&(h&64&&(Ke.source=Ke.source.substring(Ke.source.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=`    at ${Qt} (${Ke.source}:${Ke.line}:${Ke.column})
`)}(h&16||!mn)&&(h&64&&(ae=ae.substring(ae.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=(mn?`     = ${Qt}`:`    at ${Qt}`)+` (${ae}:${se}:${me})
`)}return m=m.replace(/\s+$/,""),m}function tm(h,m,x){var w=Qp(h);if(!m||x<=0)return Nt(w)+1;var N=Ur(w,m,x);return N+1}var fu=()=>2147483648,em=()=>fu(),nm=h=>{var m=q.buffer,x=(h-m.byteLength+65535)/65536|0;try{return q.grow(x),ut(),1}catch{}},im=h=>{var m=rt.length;h>>>=0;var x=fu();if(h>x)return!1;for(var w=1;w<=4;w*=2){var N=m*(1+.2/w);N=Math.min(N,h+100663296);var G=Math.min(x,Gt(Math.max(h,N),65536)),J=nm(G);if(J)return!0}return!1},uc={},rm=()=>v||"./this.program",Fs=()=>{if(!Fs.strings){var h=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",m={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:h,_:rm()};for(var x in uc)uc[x]===void 0?delete m[x]:m[x]=uc[x];var w=[];for(var x in m)w.push(`${x}=${m[x]}`);Fs.strings=w}return Fs.strings},sm=(h,m)=>{for(var x=0;x<h.length;++x)nt[m++]=h.charCodeAt(x);nt[m]=0},om=(h,m)=>{var x=0;return Fs().forEach((w,N)=>{var G=m+x;dt[h+N*4>>2]=G,sm(w,G),x+=w.length+1}),0},am=(h,m)=>{var x=Fs();dt[h>>2]=x.length;var w=0;return x.forEach(N=>w+=N.length+1),dt[m>>2]=w,0},lm=0,cm=()=>Ht||lm>0,hm=h=>{k=h,cm()||(i.onExit?.(h),C=!0),b(h,new Et(h))},um=(h,m)=>{k=h,hm(h)},fm=um;function dm(h){try{var m=Ae.getStreamFromFD(h);return R.close(m),0}catch(x){if(typeof R>"u"||x.name!=="ErrnoError")throw x;return x.errno}}var pm=(h,m,x,w)=>{for(var N=0,G=0;G<x;G++){var J=dt[m>>2],ot=dt[m+4>>2];m+=8;var wt=R.read(h,nt,J,ot,w);if(wt<0)return-1;if(N+=wt,wt<ot)break;typeof w<"u"&&(w+=wt)}return N};function mm(h,m,x,w){try{var N=Ae.getStreamFromFD(h),G=pm(N,m,x);return dt[w>>2]=G,0}catch(J){if(typeof R>"u"||J.name!=="ErrnoError")throw J;return J.errno}}function gm(h,m,x,w,N){var G=hc(m,x);try{if(isNaN(G))return 61;var J=Ae.getStreamFromFD(h);return R.llseek(J,G,w),mt=[J.position>>>0,(it=J.position,+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],tt[N>>2]=mt[0],tt[N+4>>2]=mt[1],J.getdents&&G===0&&w===0&&(J.getdents=null),0}catch(ot){if(typeof R>"u"||ot.name!=="ErrnoError")throw ot;return ot.errno}}var _m=(h,m,x,w)=>{for(var N=0,G=0;G<x;G++){var J=dt[m>>2],ot=dt[m+4>>2];m+=8;var wt=R.write(h,nt,J,ot,w);if(wt<0)return-1;if(N+=wt,wt<ot)break;typeof w<"u"&&(w+=wt)}return N};function vm(h,m,x,w){try{var N=Ae.getStreamFromFD(h),G=_m(N,m,x);return dt[w>>2]=G,0}catch(J){if(typeof R>"u"||J.name!=="ErrnoError")throw J;return J.errno}}R.createPreloadedFile=An,R.staticInit(),Or(),qt=i.BindingError=class extends Error{constructor(m){super(m),this.name="BindingError"}},Yt=i.InternalError=class extends Error{constructor(m){super(m),this.name="InternalError"}},l(),ou=i.UnboundTypeError=lp(Error,"UnboundTypeError");var ym={M:Pr,N:Ir,h:Rr,I:li,Q:Mi,F:Lr,G:Di,j:Nr,B:Dr,H:Ns,C:ci,A:Ds,w:Os,V:Pe,U:O,n:K,f:up,b:dp,a:pp,m:mp,i:Sp,W:bp,J:Ep,x:Ap,L:Cp,e:Pp,q:Rp,T:s,u:Lp,p:Op,k:Fp,Y:Up,X:Bp,r:kp,Z:zp,o:Vp,c:Hp,d:Gp,t:$p,s:Zp,O:Jp,K:jp,R:tm,z:em,y:im,D:om,E:am,S:fm,g:dm,P:mm,v:gm,l:vm},ln=T(),xm=()=>(xm=ln.$)(),du=h=>(du=ln.aa)(h),fc=h=>(fc=ln.ca)(h),bi=h=>(bi=ln.da)(h),pu=h=>(pu=ln.ea)(h),mu=(h,m)=>(mu=ln.fa)(h,m),gu=()=>(gu=ln.ga)(),Mm=i.dynCall_viijii=(h,m,x,w,N,G,J)=>(Mm=i.dynCall_viijii=ln.ha)(h,m,x,w,N,G,J),Sm=i.dynCall_viiiiji=(h,m,x,w,N,G,J,ot)=>(Sm=i.dynCall_viiiiji=ln.ia)(h,m,x,w,N,G,J,ot),bm=i.dynCall_jiji=(h,m,x,w,N)=>(bm=i.dynCall_jiji=ln.ja)(h,m,x,w,N),wm=i.dynCall_iiiiij=(h,m,x,w,N,G,J)=>(wm=i.dynCall_iiiiij=ln.ka)(h,m,x,w,N,G,J),Em=i.dynCall_iiiiijj=(h,m,x,w,N,G,J,ot,wt)=>(Em=i.dynCall_iiiiijj=ln.la)(h,m,x,w,N,G,J,ot,wt),Tm=i.dynCall_iiiiiijj=(h,m,x,w,N,G,J,ot,wt,Ot)=>(Tm=i.dynCall_iiiiiijj=ln.ma)(h,m,x,w,N,G,J,ot,wt,Ot),Vo,_u;le=function h(){Vo||vu(),Vo||(le=h)};function vu(){if(te>0||!_u&&(_u=1,Wt(),te>0))return;function h(){Vo||(Vo=1,i.calledRun=1,!C&&(ie(),r(i),i.onRuntimeInitialized?.(),ce()))}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),h()},1)):h()}if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return vu(),e=c,e})})();typeof bu=="object"&&typeof mc=="object"?mc.exports=Su:typeof define=="function"&&define.amd&&define([],()=>Su)});var Eu=yu((CM,Ho)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof Ho<"u"&&Ho.exports?(Ho.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var r={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?r.chrome=1:r.chrome=0,i.indexOf("chromium")!=-1?r.chromium=1:r.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?r.safari=1:r.safari=0,i.indexOf("firefox")!=-1?r.firefox=1:r.firefox=0,i.indexOf("firefox/17")!=-1?r.firefox17=1:r.firefox17=0,i.indexOf("firefox/15")!=-1?r.firefox15=1:r.firefox15=0,i.indexOf("firefox/3")!=-1?r.firefox3=1:r.firefox3=0,i.indexOf("opera")!=-1?r.opera=1:r.opera=0,i.indexOf("msie 10")!=-1?r.msie10=1:r.msie10=0,i.indexOf("msie 9")!=-1?r.msie9=1:r.msie9=0,i.indexOf("msie 8")!=-1?r.msie8=1:r.msie8=0,i.indexOf("msie 7")!=-1?r.msie7=1:r.msie7=0,i.indexOf("msie ")!=-1?r.msie=1:r.msie=0,n.biginteger_used=null;var o,c=0xdeadbeefcafe,u=(c&16777215)==15715070;function f(s,a,l){n.biginteger_used=1,s!=null&&(typeof s=="number"&&typeof a>"u"?this.fromInt(s):typeof s=="number"?this.fromNumber(s,a,l):a==null&&typeof s!="string"?this.fromString(s,256):this.fromString(s,a))}function d(){return new f(null,void 0,void 0)}function g(s,a,l,p,_,A){for(;--A>=0;){var O=a*this[s++]+l[p]+_;_=Math.floor(O/67108864),l[p++]=O&67108863}return _}function y(s,a,l,p,_,A){for(var O=a&32767,Z=a>>15;--A>=0;){var K=this[s]&32767,ht=this[s++]>>15,At=Z*K+ht*O;K=O*K+((At&32767)<<15)+l[p]+(_&1073741823),_=(K>>>30)+(At>>>15)+Z*ht+(_>>>30),l[p++]=K&1073741823}return _}function v(s,a,l,p,_,A){for(var O=a&16383,Z=a>>14;--A>=0;){var K=this[s]&16383,ht=this[s++]>>14,At=Z*K+ht*O;K=O*K+((At&16383)<<14)+l[p]+_,_=(K>>28)+(At>>14)+Z*ht,l[p++]=K&268435455}return _}u&&e=="Microsoft Internet Explorer"?(f.prototype.am=y,o=30):u&&e!="Netscape"?(f.prototype.am=g,o=26):(f.prototype.am=v,o=28),f.prototype.DB=o,f.prototype.DM=(1<<o)-1,f.prototype.DV=1<<o;var b=52;f.prototype.FV=Math.pow(2,b),f.prototype.F1=b-o,f.prototype.F2=2*o-b;var E="0123456789abcdefghijklmnopqrstuvwxyz",P=new Array,S,M;for(S=48,M=0;M<=9;++M)P[S++]=M;for(S=97,M=10;M<36;++M)P[S++]=M;for(S=65,M=10;M<36;++M)P[S++]=M;function F(s){return E.charAt(s)}function H(s,a){var l=P[s.charCodeAt(a)];return l??-1}function L(s){for(var a=this.t-1;a>=0;--a)s[a]=this[a];s.t=this.t,s.s=this.s}function U(s){this.t=1,this.s=s<0?-1:0,s>0?this[0]=s:s<-1?this[0]=s+this.DV:this.t=0}function B(s){var a=d();return a.fromInt(s),a}function q(s,a){var l;if(a==16)l=4;else if(a==8)l=3;else if(a==256)l=8;else if(a==2)l=1;else if(a==32)l=5;else if(a==4)l=2;else{this.fromRadix(s,a);return}this.t=0,this.s=0;for(var p=s.length,_=!1,A=0;--p>=0;){var O=l==8?s[p]&255:H(s,p);if(O<0){s.charAt(p)=="-"&&(_=!0);continue}_=!1,A==0?this[this.t++]=O:A+l>this.DB?(this[this.t-1]|=(O&(1<<this.DB-A)-1)<<A,this[this.t++]=O>>this.DB-A):this[this.t-1]|=O<<A,A+=l,A>=this.DB&&(A-=this.DB)}l==8&&(s[0]&128)!=0&&(this.s=-1,A>0&&(this[this.t-1]|=(1<<this.DB-A)-1<<A)),this.clamp(),_&&f.ZERO.subTo(this,this)}function C(){for(var s=this.s&this.DM;this.t>0&&this[this.t-1]==s;)--this.t}function k(s){if(this.s<0)return"-"+this.negate().toString(s);var a;if(s==16)a=4;else if(s==8)a=3;else if(s==2)a=1;else if(s==32)a=5;else if(s==4)a=2;else return this.toRadix(s);var l=(1<<a)-1,p,_=!1,A="",O=this.t,Z=this.DB-O*this.DB%a;if(O-- >0)for(Z<this.DB&&(p=this[O]>>Z)>0&&(_=!0,A=F(p));O>=0;)Z<a?(p=(this[O]&(1<<Z)-1)<<a-Z,p|=this[--O]>>(Z+=this.DB-a)):(p=this[O]>>(Z-=a)&l,Z<=0&&(Z+=this.DB,--O)),p>0&&(_=!0),_&&(A+=F(p));return _?A:"0"}function Y(){var s=d();return f.ZERO.subTo(this,s),s}function nt(){return this.s<0?this.negate():this}function rt(s){var a=this.s-s.s;if(a!=0)return a;var l=this.t;if(a=l-s.t,a!=0)return this.s<0?-a:a;for(;--l>=0;)if((a=this[l]-s[l])!=0)return a;return 0}function et(s){var a=1,l;return(l=s>>>16)!=0&&(s=l,a+=16),(l=s>>8)!=0&&(s=l,a+=8),(l=s>>4)!=0&&(s=l,a+=4),(l=s>>2)!=0&&(s=l,a+=2),(l=s>>1)!=0&&(s=l,a+=1),a}function Q(){return this.t<=0?0:this.DB*(this.t-1)+et(this[this.t-1]^this.s&this.DM)}function tt(s,a){var l;for(l=this.t-1;l>=0;--l)a[l+s]=this[l];for(l=s-1;l>=0;--l)a[l]=0;a.t=this.t+s,a.s=this.s}function dt(s,a){for(var l=s;l<this.t;++l)a[l-s]=this[l];a.t=Math.max(this.t-s,0),a.s=this.s}function X(s,a){var l=s%this.DB,p=this.DB-l,_=(1<<p)-1,A=Math.floor(s/this.DB),O=this.s<<l&this.DM,Z;for(Z=this.t-1;Z>=0;--Z)a[Z+A+1]=this[Z]>>p|O,O=(this[Z]&_)<<l;for(Z=A-1;Z>=0;--Z)a[Z]=0;a[A]=O,a.t=this.t+A+1,a.s=this.s,a.clamp()}function pt(s,a){a.s=this.s;var l=Math.floor(s/this.DB);if(l>=this.t){a.t=0;return}var p=s%this.DB,_=this.DB-p,A=(1<<p)-1;a[0]=this[l]>>p;for(var O=l+1;O<this.t;++O)a[O-l-1]|=(this[O]&A)<<_,a[O-l]=this[O]>>p;p>0&&(a[this.t-l-1]|=(this.s&A)<<_),a.t=this.t-l,a.clamp()}function ut(s,a){for(var l=0,p=0,_=Math.min(s.t,this.t);l<_;)p+=this[l]-s[l],a[l++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p-=s.s;l<this.t;)p+=this[l],a[l++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;l<s.t;)p-=s[l],a[l++]=p&this.DM,p>>=this.DB;p-=s.s}a.s=p<0?-1:0,p<-1?a[l++]=this.DV+p:p>0&&(a[l++]=p),a.t=l,a.clamp()}function gt(s,a){var l=this.abs(),p=s.abs(),_=l.t;for(a.t=_+p.t;--_>=0;)a[_]=0;for(_=0;_<p.t;++_)a[_+l.t]=l.am(0,p[_],a,_,0,l.t);a.s=0,a.clamp(),this.s!=s.s&&f.ZERO.subTo(a,a)}function yt(s){for(var a=this.abs(),l=s.t=2*a.t;--l>=0;)s[l]=0;for(l=0;l<a.t-1;++l){var p=a.am(l,a[l],s,2*l,0,1);(s[l+a.t]+=a.am(l+1,2*a[l],s,2*l+1,p,a.t-l-1))>=a.DV&&(s[l+a.t]-=a.DV,s[l+a.t+1]=1)}s.t>0&&(s[s.t-1]+=a.am(l,a[l],s,2*l,0,1)),s.s=0,s.clamp()}function Ft(s,a,l){var p=s.abs();if(!(p.t<=0)){var _=this.abs();if(_.t<p.t){a?.fromInt(0),l!=null&&this.copyTo(l);return}l==null&&(l=d());var A=d(),O=this.s,Z=s.s,K=this.DB-et(p[p.t-1]);K>0?(p.lShiftTo(K,A),_.lShiftTo(K,l)):(p.copyTo(A),_.copyTo(l));var ht=A.t,At=A[ht-1];if(At!=0){var Tt=At*(1<<this.F1)+(ht>1?A[ht-2]>>this.F2:0),Lt=this.FV/Tt,re=(1<<this.F1)/Tt,pe=1<<this.F2,xe=l.t,Be=xe-ht,pn=a??d();for(A.dlShiftTo(Be,pn),l.compareTo(pn)>=0&&(l[l.t++]=1,l.subTo(pn,l)),f.ONE.dlShiftTo(ht,pn),pn.subTo(A,A);A.t<ht;)A[A.t++]=0;for(;--Be>=0;){var Vn=l[--xe]==At?this.DM:Math.floor(l[xe]*Lt+(l[xe-1]+pe)*re);if((l[xe]+=A.am(0,Vn,l,Be,0,ht))<Vn)for(A.dlShiftTo(Be,pn),l.subTo(pn,l);l[xe]<--Vn;)l.subTo(pn,l)}a!=null&&(l.drShiftTo(ht,a),O!=Z&&f.ZERO.subTo(a,a)),l.t=ht,l.clamp(),K>0&&l.rShiftTo(K,l),O<0&&f.ZERO.subTo(l,l)}}}function zt(s){var a=d();return this.abs().divRemTo(s,null,a),this.s<0&&a.compareTo(f.ZERO)>0&&s.subTo(a,a),a}function Wt(s){this.m=s}function ie(s){return s.s<0||s.compareTo(this.m)>=0?s.mod(this.m):s}function ce(s){return s}function V(s){s.divRemTo(this.m,null,s)}function Pt(s,a,l){s.multiplyTo(a,l),this.reduce(l)}function Jt(s,a){s.squareTo(a),this.reduce(a)}Wt.prototype.convert=ie,Wt.prototype.revert=ce,Wt.prototype.reduce=V,Wt.prototype.mulTo=Pt,Wt.prototype.sqrTo=Jt;function te(){if(this.t<1)return 0;var s=this[0];if((s&1)==0)return 0;var a=s&3;return a=a*(2-(s&15)*a)&15,a=a*(2-(s&255)*a)&255,a=a*(2-((s&65535)*a&65535))&65535,a=a*(2-s*a%this.DV)%this.DV,a>0?this.DV-a:-a}function Vt(s){this.m=s,this.mp=s.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<s.DB-15)-1,this.mt2=2*s.t}function le(s){var a=d();return s.abs().dlShiftTo(this.m.t,a),a.divRemTo(this.m,null,a),s.s<0&&a.compareTo(f.ZERO)>0&&this.m.subTo(a,a),a}function qe(s){var a=d();return s.copyTo(a),this.reduce(a),a}function ue(s){for(;s.t<=this.mt2;)s[s.t++]=0;for(var a=0;a<this.m.t;++a){var l=s[a]&32767,p=l*this.mpl+((l*this.mph+(s[a]>>15)*this.mpl&this.um)<<15)&s.DM;for(l=a+this.m.t,s[l]+=this.m.am(0,p,s,a,0,this.m.t);s[l]>=s.DV;)s[l]-=s.DV,s[++l]++}s.clamp(),s.drShiftTo(this.m.t,s),s.compareTo(this.m)>=0&&s.subTo(this.m,s)}function ye(s,a){s.squareTo(a),this.reduce(a)}function Se(s,a,l){s.multiplyTo(a,l),this.reduce(l)}Vt.prototype.convert=le,Vt.prototype.revert=qe,Vt.prototype.reduce=ue,Vt.prototype.mulTo=Se,Vt.prototype.sqrTo=ye;function _e(){return(this.t>0?this[0]&1:this.s)==0}function Ie(s,a){if(s>4294967295||s<1)return f.ONE;var l=d(),p=d(),_=a.convert(this),A=et(s)-1;for(_.copyTo(l);--A>=0;)if(a.sqrTo(l,p),(s&1<<A)>0)a.mulTo(p,_,l);else{var O=l;l=p,p=O}return a.revert(l)}function He(s,a){var l;return s<256||a.isEven()?l=new Wt(a):l=new Vt(a),this.exp(s,l)}f.prototype.copyTo=L,f.prototype.fromInt=U,f.prototype.fromString=q,f.prototype.clamp=C,f.prototype.dlShiftTo=tt,f.prototype.drShiftTo=dt,f.prototype.lShiftTo=X,f.prototype.rShiftTo=pt,f.prototype.subTo=ut,f.prototype.multiplyTo=gt,f.prototype.squareTo=yt,f.prototype.divRemTo=Ft,f.prototype.invDigit=te,f.prototype.isEven=_e,f.prototype.exp=Ie,f.prototype.toString=k,f.prototype.negate=Y,f.prototype.abs=nt,f.prototype.compareTo=rt,f.prototype.bitLength=Q,f.prototype.mod=zt,f.prototype.modPowInt=He,f.ZERO=B(0),f.ONE=B(1);function je(){var s=d();return this.copyTo(s),s}function Re(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Fe(){return this.t==0?this.s:this[0]<<24>>24}function ct(){return this.t==0?this.s:this[0]<<16>>16}function Ue(s){return Math.floor(Math.LN2*this.DB/Math.log(s))}function Te(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function W(s){if(s==null&&(s=10),this.signum()==0||s<2||s>36)return"0";var a=this.chunkSize(s),l=Math.pow(s,a),p=B(l),_=d(),A=d(),O="";for(this.divRemTo(p,_,A);_.signum()>0;)O=(l+A.intValue()).toString(s).substr(1)+O,_.divRemTo(p,_,A);return A.intValue().toString(s)+O}function T(s,a){this.fromInt(0),a==null&&(a=10);for(var l=this.chunkSize(a),p=Math.pow(a,l),_=!1,A=0,O=0,Z=0;Z<s.length;++Z){var K=H(s,Z);if(K<0){s.charAt(Z)=="-"&&this.signum()==0&&(_=!0);continue}O=a*O+K,++A>=l&&(this.dMultiply(p),this.dAddOffset(O,0),A=0,O=0)}A>0&&(this.dMultiply(Math.pow(a,A)),this.dAddOffset(O,0)),_&&f.ZERO.subTo(this,this)}function it(s,a,l){if(typeof a=="number")if(s<2)this.fromInt(1);else for(this.fromNumber(s,l),this.testBit(s-1)||this.bitwiseTo(f.ONE.shiftLeft(s-1),at,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(a);)this.dAddOffset(2,0),this.bitLength()>s&&this.subTo(f.ONE.shiftLeft(s-1),this);else{var p=new Array,_=s&7;p.length=(s>>3)+1,a.nextBytes(p),_>0?p[0]&=(1<<_)-1:p[0]=0,this.fromString(p,256)}}function mt(){var s=this.t,a=new Array;a[0]=this.s;var l=this.DB-s*this.DB%8,p,_=0;if(s-- >0)for(l<this.DB&&(p=this[s]>>l)!=(this.s&this.DM)>>l&&(a[_++]=p|this.s<<this.DB-l);s>=0;)l<8?(p=(this[s]&(1<<l)-1)<<8-l,p|=this[--s]>>(l+=this.DB-8)):(p=this[s]>>(l-=8)&255,l<=0&&(l+=this.DB,--s)),(p&128)!=0&&(p|=-256),_==0&&(this.s&128)!=(p&128)&&++_,(_>0||p!=this.s)&&(a[_++]=p);return a}function Et(s){return this.compareTo(s)==0}function Bt(s){return this.compareTo(s)<0?this:s}function Ht(s){return this.compareTo(s)>0?this:s}function I(s,a,l){var p,_,A=Math.min(s.t,this.t);for(p=0;p<A;++p)l[p]=a(this[p],s[p]);if(s.t<this.t){for(_=s.s&this.DM,p=A;p<this.t;++p)l[p]=a(this[p],_);l.t=this.t}else{for(_=this.s&this.DM,p=A;p<s.t;++p)l[p]=a(_,s[p]);l.t=s.t}l.s=a(this.s,s.s),l.clamp()}function z(s,a){return s&a}function $(s){var a=d();return this.bitwiseTo(s,z,a),a}function at(s,a){return s|a}function ft(s){var a=d();return this.bitwiseTo(s,at,a),a}function bt(s,a){return s^a}function Ct(s){var a=d();return this.bitwiseTo(s,bt,a),a}function Nt(s,a){return s&~a}function Mt(s){var a=d();return this.bitwiseTo(s,Nt,a),a}function j(){for(var s=d(),a=0;a<this.t;++a)s[a]=this.DM&~this[a];return s.t=this.t,s.s=~this.s,s}function It(s){var a=d();return s<0?this.rShiftTo(-s,a):this.lShiftTo(s,a),a}function St(s){var a=d();return s<0?this.lShiftTo(-s,a):this.rShiftTo(s,a),a}function kt(s){if(s==0)return-1;var a=0;return(s&65535)==0&&(s>>=16,a+=16),(s&255)==0&&(s>>=8,a+=8),(s&15)==0&&(s>>=4,a+=4),(s&3)==0&&(s>>=2,a+=2),(s&1)==0&&++a,a}function Gt(){for(var s=0;s<this.t;++s)if(this[s]!=0)return s*this.DB+kt(this[s]);return this.s<0?this.t*this.DB:-1}function Rt(s){for(var a=0;s!=0;)s&=s-1,++a;return a}function Dt(){for(var s=0,a=this.s&this.DM,l=0;l<this.t;++l)s+=Rt(this[l]^a);return s}function ee(s){var a=Math.floor(s/this.DB);return a>=this.t?this.s!=0:(this[a]&1<<s%this.DB)!=0}function Ne(s,a){var l=f.ONE.shiftLeft(s);return this.bitwiseTo(l,a,l),l}function Ce(s){return this.changeBit(s,at)}function Mn(s){return this.changeBit(s,Nt)}function An(s){return this.changeBit(s,bt)}function Ls(s,a){for(var l=0,p=0,_=Math.min(s.t,this.t);l<_;)p+=this[l]+s[l],a[l++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p+=s.s;l<this.t;)p+=this[l],a[l++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;l<s.t;)p+=s[l],a[l++]=p&this.DM,p>>=this.DB;p+=s.s}a.s=p<0?-1:0,p>0?a[l++]=p:p<-1&&(a[l++]=this.DV+p),a.t=l,a.clamp()}function cr(s){var a=d();return this.addTo(s,a),a}function R(s){var a=d();return this.subTo(s,a),a}function xi(s){var a=d();return this.multiplyTo(s,a),a}function Ae(){var s=d();return this.squareTo(s),s}function Pr(s){var a=d();return this.divRemTo(s,a,null),a}function Ir(s){var a=d();return this.divRemTo(s,null,a),a}function Cn(s){var a=d(),l=d();return this.divRemTo(s,a,l),new Array(a,l)}function zn(s){this[this.t]=this.am(0,s-1,this,0,0,this.t),++this.t,this.clamp()}function Rr(s,a){if(s!=0){for(;this.t<=a;)this[this.t++]=0;for(this[a]+=s;this[a]>=this.DV;)this[a]-=this.DV,++a>=this.t&&(this[this.t++]=0),++this[a]}}function li(){}function Mi(s){return s}function Lr(s,a,l){s.multiplyTo(a,l)}function Di(s,a){s.squareTo(a)}li.prototype.convert=Mi,li.prototype.revert=Mi,li.prototype.mulTo=Lr,li.prototype.sqrTo=Di;function Nr(s){return this.exp(s,new li)}function Dr(s,a,l){var p=Math.min(this.t+s.t,a);for(l.s=0,l.t=p;p>0;)l[--p]=0;var _;for(_=l.t-this.t;p<_;++p)l[p+this.t]=this.am(0,s[p],l,p,0,this.t);for(_=Math.min(s.t,a);p<_;++p)this.am(0,s[p],l,p,0,a-p);l.clamp()}function Ns(s,a,l){--a;var p=l.t=this.t+s.t-a;for(l.s=0;--p>=0;)l[p]=0;for(p=Math.max(a-this.t,0);p<s.t;++p)l[this.t+p-a]=this.am(a-p,s[p],l,0,0,this.t+p-a);l.clamp(),l.drShiftTo(1,l)}function ci(s){this.r2=d(),this.q3=d(),f.ONE.dlShiftTo(2*s.t,this.r2),this.mu=this.r2.divide(s),this.m=s}function Ds(s){if(s.s<0||s.t>2*this.m.t)return s.mod(this.m);if(s.compareTo(this.m)<0)return s;var a=d();return s.copyTo(a),this.reduce(a),a}function Os(s){return s}function Or(s){for(s.drShiftTo(this.m.t-1,this.r2),s.t>this.m.t+1&&(s.t=this.m.t+1,s.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);s.compareTo(this.r2)<0;)s.dAddOffset(1,this.m.t+1);for(s.subTo(this.r2,s);s.compareTo(this.m)>=0;)s.subTo(this.m,s)}function D(s,a){s.squareTo(a),this.reduce(a)}function st(s,a,l){s.multiplyTo(a,l),this.reduce(l)}ci.prototype.convert=Ds,ci.prototype.revert=Os,ci.prototype.reduce=Or,ci.prototype.mulTo=st,ci.prototype.sqrTo=D;function xt(s,a){var l=s.bitLength(),p,_=B(1),A;if(l<=0)return _;l<18?p=1:l<48?p=3:l<144?p=4:l<768?p=5:p=6,l<8?A=new Wt(a):a.isEven()?A=new ci(a):A=new Vt(a);var O=new Array,Z=3,K=p-1,ht=(1<<p)-1;if(O[1]=A.convert(this),p>1){var At=d();for(A.sqrTo(O[1],At);Z<=ht;)O[Z]=d(),A.mulTo(At,O[Z-2],O[Z]),Z+=2}var Tt=s.t-1,Lt,re=!0,pe=d(),xe;for(l=et(s[Tt])-1;Tt>=0;){for(l>=K?Lt=s[Tt]>>l-K&ht:(Lt=(s[Tt]&(1<<l+1)-1)<<K-l,Tt>0&&(Lt|=s[Tt-1]>>this.DB+l-K)),Z=p;(Lt&1)==0;)Lt>>=1,--Z;if((l-=Z)<0&&(l+=this.DB,--Tt),re)O[Lt].copyTo(_),re=!1;else{for(;Z>1;)A.sqrTo(_,pe),A.sqrTo(pe,_),Z-=2;Z>0?A.sqrTo(_,pe):(xe=_,_=pe,pe=xe),A.mulTo(pe,O[Lt],_)}for(;Tt>=0&&(s[Tt]&1<<l)==0;)A.sqrTo(_,pe),xe=_,_=pe,pe=xe,--l<0&&(l=this.DB-1,--Tt)}return A.revert(_)}function _t(s){var a=this.s<0?this.negate():this.clone(),l=s.s<0?s.negate():s.clone();if(a.compareTo(l)<0){var p=a;a=l,l=p}var _=a.getLowestSetBit(),A=l.getLowestSetBit();if(A<0)return a;for(_<A&&(A=_),A>0&&(a.rShiftTo(A,a),l.rShiftTo(A,l));a.signum()>0;)(_=a.getLowestSetBit())>0&&a.rShiftTo(_,a),(_=l.getLowestSetBit())>0&&l.rShiftTo(_,l),a.compareTo(l)>=0?(a.subTo(l,a),a.rShiftTo(1,a)):(l.subTo(a,l),l.rShiftTo(1,l));return A>0&&l.lShiftTo(A,l),l}function vt(s){if(s<=0)return 0;var a=this.DV%s,l=this.s<0?s-1:0;if(this.t>0)if(a==0)l=this[0]%s;else for(var p=this.t-1;p>=0;--p)l=(a*l+this[p])%s;return l}function qt(s){var a=s.isEven();if(this.isEven()&&a||s.signum()==0)return f.ZERO;for(var l=s.clone(),p=this.clone(),_=B(1),A=B(0),O=B(0),Z=B(1);l.signum()!=0;){for(;l.isEven();)l.rShiftTo(1,l),a?((!_.isEven()||!A.isEven())&&(_.addTo(this,_),A.subTo(s,A)),_.rShiftTo(1,_)):A.isEven()||A.subTo(s,A),A.rShiftTo(1,A);for(;p.isEven();)p.rShiftTo(1,p),a?((!O.isEven()||!Z.isEven())&&(O.addTo(this,O),Z.subTo(s,Z)),O.rShiftTo(1,O)):Z.isEven()||Z.subTo(s,Z),Z.rShiftTo(1,Z);l.compareTo(p)>=0?(l.subTo(p,l),a&&_.subTo(O,_),A.subTo(Z,A)):(p.subTo(l,p),a&&O.subTo(_,O),Z.subTo(A,Z))}if(p.compareTo(f.ONE)!=0)return f.ZERO;if(Z.compareTo(s)>=0)return Z.subtract(s);if(Z.signum()<0)Z.addTo(s,Z);else return Z;return Z.signum()<0?Z.add(s):Z}var Ut=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Yt=(1<<26)/Ut[Ut.length-1];function Kt(s){var a,l=this.abs();if(l.t==1&&l[0]<=Ut[Ut.length-1]){for(a=0;a<Ut.length;++a)if(l[0]==Ut[a])return!0;return!1}if(l.isEven())return!1;for(a=1;a<Ut.length;){for(var p=Ut[a],_=a+1;_<Ut.length&&p<Yt;)p*=Ut[_++];for(p=l.modInt(p);a<_;)if(p%Ut[a++]==0)return!1}return l.millerRabin(s)}function ne(s){var a=this.subtract(f.ONE),l=a.getLowestSetBit();if(l<=0)return!1;var p=a.shiftRight(l);s=s+1>>1,s>Ut.length&&(s=Ut.length);for(var _=d(),A=0;A<s;++A){_.fromInt(Ut[Math.floor(Math.random()*Ut.length)]);var O=_.modPow(p,this);if(O.compareTo(f.ONE)!=0&&O.compareTo(a)!=0){for(var Z=1;Z++<l&&O.compareTo(a)!=0;)if(O=O.modPowInt(2,this),O.compareTo(f.ONE)==0)return!1;if(O.compareTo(a)!=0)return!1}}return!0}f.prototype.chunkSize=Ue,f.prototype.toRadix=W,f.prototype.fromRadix=T,f.prototype.fromNumber=it,f.prototype.bitwiseTo=I,f.prototype.changeBit=Ne,f.prototype.addTo=Ls,f.prototype.dMultiply=zn,f.prototype.dAddOffset=Rr,f.prototype.multiplyLowerTo=Dr,f.prototype.multiplyUpperTo=Ns,f.prototype.modInt=vt,f.prototype.millerRabin=ne,f.prototype.clone=je,f.prototype.intValue=Re,f.prototype.byteValue=Fe,f.prototype.shortValue=ct,f.prototype.signum=Te,f.prototype.toByteArray=mt,f.prototype.equals=Et,f.prototype.min=Bt,f.prototype.max=Ht,f.prototype.and=$,f.prototype.or=ft,f.prototype.xor=Ct,f.prototype.andNot=Mt,f.prototype.not=j,f.prototype.shiftLeft=It,f.prototype.shiftRight=St,f.prototype.getLowestSetBit=Gt,f.prototype.bitCount=Dt,f.prototype.testBit=ee,f.prototype.setBit=Ce,f.prototype.clearBit=Mn,f.prototype.flipBit=An,f.prototype.add=cr,f.prototype.subtract=R,f.prototype.multiply=xi,f.prototype.divide=Pr,f.prototype.remainder=Ir,f.prototype.divideAndRemainder=Cn,f.prototype.modPow=xt,f.prototype.modInverse=qt,f.prototype.pow=Nr,f.prototype.gcd=_t,f.prototype.isProbablePrime=Kt,f.prototype.square=Ae;var Xt=f;Xt.prototype.IsNegative=function(){return this.compareTo(Xt.ZERO)==-1},Xt.op_Equality=function(s,a){return s.compareTo(a)==0},Xt.op_Inequality=function(s,a){return s.compareTo(a)!=0},Xt.op_GreaterThan=function(s,a){return s.compareTo(a)>0},Xt.op_LessThan=function(s,a){return s.compareTo(a)<0},Xt.op_Addition=function(s,a){return new Xt(s,void 0,void 0).add(new Xt(a,void 0,void 0))},Xt.op_Subtraction=function(s,a){return new Xt(s,void 0,void 0).subtract(new Xt(a,void 0,void 0))},Xt.Int128Mul=function(s,a){return new Xt(s,void 0,void 0).multiply(new Xt(a,void 0,void 0))},Xt.op_Division=function(s,a){return s.divide(a)},Xt.prototype.ToDouble=function(){return parseFloat(this.toString())};var fe=function(s,a){var l;if(typeof Object.getOwnPropertyNames>"u"){for(l in a.prototype)(typeof s.prototype[l]>"u"||s.prototype[l]===Object.prototype[l])&&(s.prototype[l]=a.prototype[l]);for(l in a)typeof s[l]>"u"&&(s[l]=a[l]);s.$baseCtor=a}else{for(var p=Object.getOwnPropertyNames(a.prototype),_=0;_<p.length;_++)typeof Object.getOwnPropertyDescriptor(s.prototype,p[_])>"u"&&Object.defineProperty(s.prototype,p[_],Object.getOwnPropertyDescriptor(a.prototype,p[_]));for(l in a)typeof s[l]>"u"&&(s[l]=a[l]);s.$baseCtor=a}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var s=arguments;this.X=0,this.Y=0,s.length===1?(this.X=s[0].X,this.Y=s[0].Y):s.length===2&&(this.X=s[0],this.Y=s[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(s){this.X=s.X,this.Y=s.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(s,a){this.X=s,this.Y=a},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var s=!0,a=this.m_Parent;a!==null;)s=!s,a=a.m_Parent;return s},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(s){var a=this.m_Childs.length;this.m_Childs.push(s),s.m_Parent=this,s.m_Index=a},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var s=0,a=this.m_AllPolys.length;s<a;s++)this.m_AllPolys[s]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var s=this.m_AllPolys.length;return s>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&s--,s},fe(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(s){return Math.abs(s)},n.Math_Max_Int32_Int32=function(s,a){return Math.max(s,a)},r.msie||r.opera||r.safari?n.Cast_Int32=function(s){return s|0}:n.Cast_Int32=function(s){return~~s},typeof Number.toInteger>"u"&&(Number.toInteger=null),r.chrome?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):~~s}:r.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(s){return Number.toInteger(s)}:r.msie7||r.msie8?n.Cast_Int64=function(s){return parseInt(s,10)}:r.msie?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):s|0}:n.Cast_Int64=function(s){return s<0?Math.ceil(s):Math.floor(s)},n.Clear=function(s){s.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var s=arguments,a=s.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,a===3)this.X=s[0],this.Y=s[1],this.Z=s[2];else if(a===2)this.X=s[0],this.Y=s[1],this.Z=0;else if(a===1)if(s[0]instanceof n.DoublePoint){var l=s[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y),this.Z=0}else{var p=s[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(a===2)this.X=s[0],this.Y=s[1];else if(a===1)if(s[0]instanceof n.DoublePoint){var l=s[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y)}else{var p=s[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(s,a){return s.X===a.X&&s.Y===a.Y},n.IntPoint.op_Inequality=function(s,a){return s.X!==a.X||s.Y!==a.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(s){this.X=s.X,this.Y=s.Y,n.use_xyz&&(typeof s.Z>"u"?this.Z=0:this.Z=s.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(s){this.X=n.Clipper.Round(s.X),this.Y=n.Clipper.Round(s.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(s,a,l){this.X=s,this.Y=a,n.use_xyz&&(typeof l>"u"?this.Z=0:this.Z=l)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var s=arguments,a=s.length;if(a===4)this.left=s[0],this.top=s[1],this.right=s[2],this.bottom=s[3];else if(a===1){var l=s[0];this.left=l.left,this.top=l.top,this.right=l.right,this.bottom=l.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(s){this.left=s.left,this.top=s.top,this.right=s.right,this.bottom=s.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(s,a,l,p){this.left=s,this.top=a,this.right=l,this.bottom=p},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(s,a){var l=a.Pt.Y-s.Pt.Y;return l>0?1:l<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(s){return s>-n.ClipperBase.tolerance&&s<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(s){return s.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(s,a){var l=a;do{if(n.IntPoint.op_Equality(l.Pt,s))return!0;l=l.Next}while(l!==a);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(s,a,l,p){return p?s.X===a.X&&s.Y===a.Y||s.X===l.X&&s.Y===l.Y||s.X>a.X==s.X<l.X&&s.Y>a.Y==s.Y<l.Y&&Xt.op_Equality(Xt.Int128Mul(s.X-a.X,l.Y-a.Y),Xt.Int128Mul(l.X-a.X,s.Y-a.Y)):s.X===a.X&&s.Y===a.Y||s.X===l.X&&s.Y===l.Y||s.X>a.X==s.X<l.X&&s.Y>a.Y==s.Y<l.Y&&(s.X-a.X)*(l.Y-a.Y)===(l.X-a.X)*(s.Y-a.Y)},n.ClipperBase.prototype.PointOnPolygon=function(s,a,l){for(var p=a;;){if(this.PointOnLineSegment(s,p.Pt,p.Next.Pt,l))return!0;if(p=p.Next,p===a)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var s=arguments,a=s.length,l,p,_,A,O,Z,K;return a===3?(l=s[0],p=s[1],K=s[2],K?Xt.op_Equality(Xt.Int128Mul(l.Delta.Y,p.Delta.X),Xt.Int128Mul(l.Delta.X,p.Delta.Y)):n.Cast_Int64(l.Delta.Y*p.Delta.X)===n.Cast_Int64(l.Delta.X*p.Delta.Y)):a===4?(_=s[0],A=s[1],O=s[2],K=s[3],K?Xt.op_Equality(Xt.Int128Mul(_.Y-A.Y,A.X-O.X),Xt.Int128Mul(_.X-A.X,A.Y-O.Y)):n.Cast_Int64((_.Y-A.Y)*(A.X-O.X))-n.Cast_Int64((_.X-A.X)*(A.Y-O.Y))===0):(_=s[0],A=s[1],O=s[2],Z=s[3],K=s[4],K?Xt.op_Equality(Xt.Int128Mul(_.Y-A.Y,O.X-Z.X),Xt.Int128Mul(_.X-A.X,O.Y-Z.Y)):n.Cast_Int64((_.Y-A.Y)*(O.X-Z.X))-n.Cast_Int64((_.X-A.X)*(O.Y-Z.Y))===0)},n.ClipperBase.SlopesEqual3=function(s,a,l){return l?Xt.op_Equality(Xt.Int128Mul(s.Delta.Y,a.Delta.X),Xt.Int128Mul(s.Delta.X,a.Delta.Y)):n.Cast_Int64(s.Delta.Y*a.Delta.X)===n.Cast_Int64(s.Delta.X*a.Delta.Y)},n.ClipperBase.SlopesEqual4=function(s,a,l,p){return p?Xt.op_Equality(Xt.Int128Mul(s.Y-a.Y,a.X-l.X),Xt.Int128Mul(s.X-a.X,a.Y-l.Y)):n.Cast_Int64((s.Y-a.Y)*(a.X-l.X))-n.Cast_Int64((s.X-a.X)*(a.Y-l.Y))===0},n.ClipperBase.SlopesEqual5=function(s,a,l,p,_){return _?Xt.op_Equality(Xt.Int128Mul(s.Y-a.Y,l.X-p.X),Xt.Int128Mul(s.X-a.X,l.Y-p.Y)):n.Cast_Int64((s.Y-a.Y)*(l.X-p.X))-n.Cast_Int64((s.X-a.X)*(l.Y-p.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var s=0,a=this.m_edges.length;s<a;++s){for(var l=0,p=this.m_edges[s].length;l<p;++l)this.m_edges[s][l]=null;n.Clear(this.m_edges[s])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var s=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=s}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(s,a){a.Value?(s.X>n.ClipperBase.hiRange||s.Y>n.ClipperBase.hiRange||-s.X>n.ClipperBase.hiRange||-s.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(s.X>n.ClipperBase.loRange||s.Y>n.ClipperBase.loRange||-s.X>n.ClipperBase.loRange||-s.Y>n.ClipperBase.loRange)&&(a.Value=!0,this.RangeTest(s,a))},n.ClipperBase.prototype.InitEdge=function(s,a,l,p){s.Next=a,s.Prev=l,s.Curr.X=p.X,s.Curr.Y=p.Y,n.use_xyz&&(s.Curr.Z=p.Z),s.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(s,a){s.Curr.Y>=s.Next.Curr.Y?(s.Bot.X=s.Curr.X,s.Bot.Y=s.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Curr.Z),s.Top.X=s.Next.Curr.X,s.Top.Y=s.Next.Curr.Y,n.use_xyz&&(s.Top.Z=s.Next.Curr.Z)):(s.Top.X=s.Curr.X,s.Top.Y=s.Curr.Y,n.use_xyz&&(s.Top.Z=s.Curr.Z),s.Bot.X=s.Next.Curr.X,s.Bot.Y=s.Next.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Next.Curr.Z)),this.SetDx(s),s.PolyTyp=a},n.ClipperBase.prototype.FindNextLocMin=function(s){for(var a;;){for(;n.IntPoint.op_Inequality(s.Bot,s.Prev.Bot)||n.IntPoint.op_Equality(s.Curr,s.Top);)s=s.Next;if(s.Dx!==n.ClipperBase.horizontal&&s.Prev.Dx!==n.ClipperBase.horizontal)break;for(;s.Prev.Dx===n.ClipperBase.horizontal;)s=s.Prev;for(a=s;s.Dx===n.ClipperBase.horizontal;)s=s.Next;if(s.Top.Y!==s.Prev.Bot.Y){a.Prev.Bot.X<s.Bot.X&&(s=a);break}}return s},n.ClipperBase.prototype.ProcessBound=function(s,a){var l,p=s,_;if(p.OutIdx===n.ClipperBase.Skip){if(s=p,a){for(;s.Top.Y===s.Next.Bot.Y;)s=s.Next;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Prev}else{for(;s.Top.Y===s.Prev.Bot.Y;)s=s.Prev;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Next}if(s===p)a?p=s.Next:p=s.Prev;else{a?s=p.Next:s=p.Prev;var A=new n.LocalMinima;A.Next=null,A.Y=s.Bot.Y,A.LeftBound=null,A.RightBound=s,s.WindDelta=0,p=this.ProcessBound(s,a),this.InsertLocalMinima(A)}return p}if(s.Dx===n.ClipperBase.horizontal&&(a?l=s.Prev:l=s.Next,l.Dx===n.ClipperBase.horizontal?l.Bot.X!==s.Bot.X&&l.Top.X!==s.Bot.X&&this.ReverseHorizontal(s):l.Bot.X!==s.Bot.X&&this.ReverseHorizontal(s)),l=s,a){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==n.ClipperBase.Skip;)p=p.Next;if(p.Dx===n.ClipperBase.horizontal&&p.Next.OutIdx!==n.ClipperBase.Skip){for(_=p;_.Prev.Dx===n.ClipperBase.horizontal;)_=_.Prev;_.Prev.Top.X>p.Next.Top.X&&(p=_.Prev)}for(;s!==p;)s.NextInLML=s.Next,s.Dx===n.ClipperBase.horizontal&&s!==l&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),s=s.Next;s.Dx===n.ClipperBase.horizontal&&s!==l&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==n.ClipperBase.Skip;)p=p.Prev;if(p.Dx===n.ClipperBase.horizontal&&p.Prev.OutIdx!==n.ClipperBase.Skip){for(_=p;_.Next.Dx===n.ClipperBase.horizontal;)_=_.Next;(_.Next.Top.X===p.Prev.Top.X||_.Next.Top.X>p.Prev.Top.X)&&(p=_.Next)}for(;s!==p;)s.NextInLML=s.Prev,s.Dx===n.ClipperBase.horizontal&&s!==l&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),s=s.Prev;s.Dx===n.ClipperBase.horizontal&&s!==l&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),p=p.Prev}return p},n.ClipperBase.prototype.AddPath=function(s,a,l){n.use_lines?!l&&a===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):l||n.Error("AddPath: Open paths have been disabled.");var p=s.length-1;if(l)for(;p>0&&n.IntPoint.op_Equality(s[p],s[0]);)--p;for(;p>0&&n.IntPoint.op_Equality(s[p],s[p-1]);)--p;if(l&&p<2||!l&&p<1)return!1;for(var _=new Array,A=0;A<=p;A++)_.push(new n.TEdge);var O=!0;_[1].Curr.X=s[1].X,_[1].Curr.Y=s[1].Y,n.use_xyz&&(_[1].Curr.Z=s[1].Z);var Z={Value:this.m_UseFullRange};this.RangeTest(s[0],Z),this.m_UseFullRange=Z.Value,Z.Value=this.m_UseFullRange,this.RangeTest(s[p],Z),this.m_UseFullRange=Z.Value,this.InitEdge(_[0],_[1],_[p],s[0]),this.InitEdge(_[p],_[0],_[p-1],s[p]);for(var A=p-1;A>=1;--A)Z.Value=this.m_UseFullRange,this.RangeTest(s[A],Z),this.m_UseFullRange=Z.Value,this.InitEdge(_[A],_[A+1],_[A-1],s[A]);for(var K=_[0],ht=K,At=K;;){if(ht.Curr===ht.Next.Curr&&(l||ht.Next!==K)){if(ht===ht.Next)break;ht===K&&(K=ht.Next),ht=this.RemoveEdge(ht),At=ht;continue}if(ht.Prev===ht.Next)break;if(l&&n.ClipperBase.SlopesEqual4(ht.Prev.Curr,ht.Curr,ht.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(ht.Prev.Curr,ht.Curr,ht.Next.Curr))){ht===K&&(K=ht.Next),ht=this.RemoveEdge(ht),ht=ht.Prev,At=ht;continue}if(ht=ht.Next,ht===At||!l&&ht.Next===K)break}if(!l&&ht===ht.Next||l&&ht.Prev===ht.Next)return!1;l||(this.m_HasOpenPaths=!0,K.Prev.OutIdx=n.ClipperBase.Skip),ht=K;do this.InitEdge2(ht,a),ht=ht.Next,O&&ht.Curr.Y!==K.Curr.Y&&(O=!1);while(ht!==K);if(O){if(l)return!1;ht.Prev.OutIdx=n.ClipperBase.Skip;var Tt=new n.LocalMinima;for(Tt.Next=null,Tt.Y=ht.Bot.Y,Tt.LeftBound=null,Tt.RightBound=ht,Tt.RightBound.Side=n.EdgeSide.esRight,Tt.RightBound.WindDelta=0;ht.Bot.X!==ht.Prev.Top.X&&this.ReverseHorizontal(ht),ht.Next.OutIdx!==n.ClipperBase.Skip;)ht.NextInLML=ht.Next,ht=ht.Next;return this.InsertLocalMinima(Tt),this.m_edges.push(_),!0}this.m_edges.push(_);var Lt,re=null;for(n.IntPoint.op_Equality(ht.Prev.Bot,ht.Prev.Top)&&(ht=ht.Next);ht=this.FindNextLocMin(ht),ht!==re;){re===null&&(re=ht);var Tt=new n.LocalMinima;Tt.Next=null,Tt.Y=ht.Bot.Y,ht.Dx<ht.Prev.Dx?(Tt.LeftBound=ht.Prev,Tt.RightBound=ht,Lt=!1):(Tt.LeftBound=ht,Tt.RightBound=ht.Prev,Lt=!0),Tt.LeftBound.Side=n.EdgeSide.esLeft,Tt.RightBound.Side=n.EdgeSide.esRight,l?Tt.LeftBound.Next===Tt.RightBound?Tt.LeftBound.WindDelta=-1:Tt.LeftBound.WindDelta=1:Tt.LeftBound.WindDelta=0,Tt.RightBound.WindDelta=-Tt.LeftBound.WindDelta,ht=this.ProcessBound(Tt.LeftBound,Lt),ht.OutIdx===n.ClipperBase.Skip&&(ht=this.ProcessBound(ht,Lt));var pe=this.ProcessBound(Tt.RightBound,!Lt);pe.OutIdx===n.ClipperBase.Skip&&(pe=this.ProcessBound(pe,!Lt)),Tt.LeftBound.OutIdx===n.ClipperBase.Skip?Tt.LeftBound=null:Tt.RightBound.OutIdx===n.ClipperBase.Skip&&(Tt.RightBound=null),this.InsertLocalMinima(Tt),Lt||(ht=pe)}return!0},n.ClipperBase.prototype.AddPaths=function(s,a,l){for(var p=!1,_=0,A=s.length;_<A;++_)this.AddPath(s[_],a,l)&&(p=!0);return p},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(s,a,l){return n.IntPoint.op_Equality(s,l)||n.IntPoint.op_Equality(s,a)||n.IntPoint.op_Equality(l,a)?!1:s.X!==l.X?a.X>s.X==a.X<l.X:a.Y>s.Y==a.Y<l.Y},n.ClipperBase.prototype.RemoveEdge=function(s){s.Prev.Next=s.Next,s.Next.Prev=s.Prev;var a=s.Next;return s.Prev=null,a},n.ClipperBase.prototype.SetDx=function(s){s.Delta.X=s.Top.X-s.Bot.X,s.Delta.Y=s.Top.Y-s.Bot.Y,s.Delta.Y===0?s.Dx=n.ClipperBase.horizontal:s.Dx=s.Delta.X/s.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(s){if(this.m_MinimaList===null)this.m_MinimaList=s;else if(s.Y>=this.m_MinimaList.Y)s.Next=this.m_MinimaList,this.m_MinimaList=s;else{for(var a=this.m_MinimaList;a.Next!==null&&s.Y<a.Next.Y;)a=a.Next;s.Next=a.Next,a.Next=s}},n.ClipperBase.prototype.PopLocalMinima=function(s,a){return a.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===s?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(s){var a=s.Top.X;s.Top.X=s.Bot.X,s.Bot.X=a,n.use_xyz&&(a=s.Top.Z,s.Top.Z=s.Bot.Z,s.Bot.Z=a)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var s=this.m_MinimaList;s!==null;){this.InsertScanbeam(s.Y);var a=s.LeftBound;a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),a=s.RightBound,a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),s=s.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(s){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=s;else if(s>this.m_Scanbeam.Y){var a=new n.Scanbeam;a.Y=s,a.Next=this.m_Scanbeam,this.m_Scanbeam=a}else{for(var l=this.m_Scanbeam;l.Next!==null&&s<=l.Next.Y;)l=l.Next;if(s===l.Y)return;var p=new n.Scanbeam;p.Y=s,p.Next=l.Next,l.Next=p}},n.ClipperBase.prototype.PopScanbeam=function(s){return this.m_Scanbeam===null?(s.v=0,!1):(s.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var s=new n.OutRec;return s.Idx=n.ClipperBase.Unassigned,s.IsHole=!1,s.IsOpen=!1,s.FirstLeft=null,s.Pts=null,s.BottomPt=null,s.PolyNode=null,this.m_PolyOuts.push(s),s.Idx=this.m_PolyOuts.length-1,s},n.ClipperBase.prototype.DisposeOutRec=function(s){var a=this.m_PolyOuts[s];a.Pts=null,a=null,this.m_PolyOuts[s]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(s){s.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var a=s.PrevInAEL,l=s.NextInAEL;return s.NextInLML.OutIdx=s.OutIdx,a!==null?a.NextInAEL=s.NextInLML:this.m_ActiveEdges=s.NextInLML,l!==null&&(l.PrevInAEL=s.NextInLML),s.NextInLML.Side=s.Side,s.NextInLML.WindDelta=s.WindDelta,s.NextInLML.WindCnt=s.WindCnt,s.NextInLML.WindCnt2=s.WindCnt2,s=s.NextInLML,s.Curr.X=s.Bot.X,s.Curr.Y=s.Bot.Y,s.PrevInAEL=a,s.NextInAEL=l,n.ClipperBase.IsHorizontal(s)||this.InsertScanbeam(s.Top.Y),s},n.ClipperBase.prototype.SwapPositionsInAEL=function(s,a){if(!(s.NextInAEL===s.PrevInAEL||a.NextInAEL===a.PrevInAEL)){if(s.NextInAEL===a){var l=a.NextInAEL;l!==null&&(l.PrevInAEL=s);var p=s.PrevInAEL;p!==null&&(p.NextInAEL=a),a.PrevInAEL=p,a.NextInAEL=s,s.PrevInAEL=a,s.NextInAEL=l}else if(a.NextInAEL===s){var _=s.NextInAEL;_!==null&&(_.PrevInAEL=a);var A=a.PrevInAEL;A!==null&&(A.NextInAEL=s),s.PrevInAEL=A,s.NextInAEL=a,a.PrevInAEL=s,a.NextInAEL=_}else{var O=s.NextInAEL,Z=s.PrevInAEL;s.NextInAEL=a.NextInAEL,s.NextInAEL!==null&&(s.NextInAEL.PrevInAEL=s),s.PrevInAEL=a.PrevInAEL,s.PrevInAEL!==null&&(s.PrevInAEL.NextInAEL=s),a.NextInAEL=O,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=a),a.PrevInAEL=Z,a.PrevInAEL!==null&&(a.PrevInAEL.NextInAEL=a)}s.PrevInAEL===null?this.m_ActiveEdges=s:a.PrevInAEL===null&&(this.m_ActiveEdges=a)}},n.ClipperBase.prototype.DeleteFromAEL=function(s){var a=s.PrevInAEL,l=s.NextInAEL;a===null&&l===null&&s!==this.m_ActiveEdges||(a!==null?a.NextInAEL=l:this.m_ActiveEdges=l,l!==null&&(l.PrevInAEL=a),s.NextInAEL=null,s.PrevInAEL=null)},n.Clipper=function(s){typeof s>"u"&&(s=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&s)!==0,this.StrictlySimple=(2&s)!==0,this.PreserveCollinear=(4&s)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(s){var a=new n.Maxima;if(a.X=s,this.m_Maxima===null)this.m_Maxima=a,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(s<this.m_Maxima.X)a.Next=this.m_Maxima,a.Prev=null,this.m_Maxima=a;else{for(var l=this.m_Maxima;l.Next!==null&&s>=l.Next.X;)l=l.Next;if(s===l.X)return;a.Next=l.Next,a.Prev=l,l.Next!==null&&(l.Next.Prev=a),l.Next=a}},n.Clipper.prototype.Execute=function(){var s=arguments,a=s.length,l=s[1]instanceof n.PolyTree;if(a===4&&!l){var p=s[0],_=s[1],A=s[2],O=s[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(_),this.m_SubjFillType=A,this.m_ClipFillType=O,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var Z=this.ExecuteInternal();Z&&this.BuildResult(_)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Z}else if(a===4&&l){var p=s[0],K=s[1],A=s[2],O=s[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=A,this.m_ClipFillType=O,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var Z=this.ExecuteInternal();Z&&this.BuildResult2(K)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Z}else if(a===2&&!l){var p=s[0],_=s[1];return this.Execute(p,_,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(a===2&&l){var p=s[0],K=s[1];return this.Execute(p,K,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(s){if(!(s.FirstLeft===null||s.IsHole!==s.FirstLeft.IsHole&&s.FirstLeft.Pts!==null)){for(var a=s.FirstLeft;a!==null&&(a.IsHole===s.IsHole||a.Pts===null);)a=a.FirstLeft;s.FirstLeft=a}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var s={},a={};if(!this.PopScanbeam(s))return!1;for(this.InsertLocalMinimaIntoAEL(s.v);this.PopScanbeam(a)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(a.v))return!1;this.ProcessEdgesAtTopOfScanbeam(a.v),s.v=a.v,this.InsertLocalMinimaIntoAEL(s.v)}var l,p,_;for(p=0,_=this.m_PolyOuts.length;p<_;p++)l=this.m_PolyOuts[p],!(l.Pts===null||l.IsOpen)&&(l.IsHole^this.ReverseSolution)==this.Area$1(l)>0&&this.ReversePolyPtLinks(l.Pts);for(this.JoinCommonEdges(),p=0,_=this.m_PolyOuts.length;p<_;p++)l=this.m_PolyOuts[p],l.Pts!==null&&(l.IsOpen?this.FixupOutPolyline(l):this.FixupOutPolygon(l));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var s=0,a=this.m_PolyOuts.length;s<a;++s)this.DisposeOutRec(s);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(s,a,l){var p=new n.Join;p.OutPt1=s,p.OutPt2=a,p.OffPt.X=l.X,p.OffPt.Y=l.Y,n.use_xyz&&(p.OffPt.Z=l.Z),this.m_Joins.push(p)},n.Clipper.prototype.AddGhostJoin=function(s,a){var l=new n.Join;l.OutPt1=s,l.OffPt.X=a.X,l.OffPt.Y=a.Y,n.use_xyz&&(l.OffPt.Z=a.Z),this.m_GhostJoins.push(l)},n.Clipper.prototype.SetZ=function(s,a,l){if(this.ZFillFunction!==null){if(s.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(s,a.Bot)?s.Z=a.Bot.Z:n.IntPoint.op_Equality(s,a.Top)?s.Z=a.Top.Z:n.IntPoint.op_Equality(s,l.Bot)?s.Z=l.Bot.Z:n.IntPoint.op_Equality(s,l.Top)?s.Z=l.Top.Z:this.ZFillFunction(a.Bot,a.Top,l.Bot,l.Top,s)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(s){for(var a={},l,p;this.PopLocalMinima(s,a);){l=a.v.LeftBound,p=a.v.RightBound;var _=null;if(l===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(_=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(l,null),this.SetWindingCount(l),this.IsContributing(l)&&(_=this.AddOutPt(l,l.Bot)),this.InsertScanbeam(l.Top.Y)):(this.InsertEdgeIntoAEL(l,null),this.InsertEdgeIntoAEL(p,l),this.SetWindingCount(l),p.WindCnt=l.WindCnt,p.WindCnt2=l.WindCnt2,this.IsContributing(l)&&(_=this.AddLocalMinPoly(l,p,l.Bot)),this.InsertScanbeam(l.Top.Y)),p!==null&&(n.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(l===null||p===null)){if(_!==null&&n.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var A=0,O=this.m_GhostJoins.length;A<O;A++){var Z=this.m_GhostJoins[A];this.HorzSegmentsOverlap(Z.OutPt1.Pt.X,Z.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin(Z.OutPt1,_,Z.OffPt)}if(l.OutIdx>=0&&l.PrevInAEL!==null&&l.PrevInAEL.Curr.X===l.Bot.X&&l.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(l.PrevInAEL.Curr,l.PrevInAEL.Top,l.Curr,l.Top,this.m_UseFullRange)&&l.WindDelta!==0&&l.PrevInAEL.WindDelta!==0){var K=this.AddOutPt(l.PrevInAEL,l.Bot);this.AddJoin(_,K,l.Top)}if(l.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var K=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(_,K,p.Top)}var ht=l.NextInAEL;if(ht!==null)for(;ht!==p;)this.IntersectEdges(p,ht,l.Curr),ht=ht.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(s,a){if(this.m_ActiveEdges===null)s.PrevInAEL=null,s.NextInAEL=null,this.m_ActiveEdges=s;else if(a===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,s))s.PrevInAEL=null,s.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=s,this.m_ActiveEdges=s;else{for(a===null&&(a=this.m_ActiveEdges);a.NextInAEL!==null&&!this.E2InsertsBeforeE1(a.NextInAEL,s);)a=a.NextInAEL;s.NextInAEL=a.NextInAEL,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=s),s.PrevInAEL=a,a.NextInAEL=s}},n.Clipper.prototype.E2InsertsBeforeE1=function(s,a){return a.Curr.X===s.Curr.X?a.Top.Y>s.Top.Y?a.Top.X<n.Clipper.TopX(s,a.Top.Y):s.Top.X>n.Clipper.TopX(a,s.Top.Y):a.Curr.X<s.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(s){var a,l;switch(s.PolyTyp===n.PolyType.ptSubject?(a=this.m_SubjFillType,l=this.m_ClipFillType):(a=this.m_ClipFillType,l=this.m_SubjFillType),a){case n.PolyFillType.pftEvenOdd:if(s.WindDelta===0&&s.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(s.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(s.WindCnt!==1)return!1;break;default:if(s.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctUnion:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}case n.ClipType.ctDifference:if(s.PolyTyp===n.PolyType.ptSubject)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctXor:if(s.WindDelta===0)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(s){for(var a=s.PrevInAEL;a!==null&&(a.PolyTyp!==s.PolyTyp||a.WindDelta===0);)a=a.PrevInAEL;if(a===null){var l=s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;s.WindDelta===0?s.WindCnt=l===n.PolyFillType.pftNegative?-1:1:s.WindCnt=s.WindDelta,s.WindCnt2=0,a=this.m_ActiveEdges}else if(s.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)s.WindCnt=1,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;else if(this.IsEvenOddFillType(s)){if(s.WindDelta===0){for(var p=!0,_=a.PrevInAEL;_!==null;)_.PolyTyp===a.PolyTyp&&_.WindDelta!==0&&(p=!p),_=_.PrevInAEL;s.WindCnt=p?0:1}else s.WindCnt=s.WindDelta;s.WindCnt2=a.WindCnt2,a=a.NextInAEL}else a.WindCnt*a.WindDelta<0?Math.abs(a.WindCnt)>1?a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta:s.WindCnt=s.WindDelta===0?1:s.WindDelta:s.WindDelta===0?s.WindCnt=a.WindCnt<0?a.WindCnt-1:a.WindCnt+1:a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;if(this.IsEvenOddAltFillType(s))for(;a!==s;)a.WindDelta!==0&&(s.WindCnt2=s.WindCnt2===0?1:0),a=a.NextInAEL;else for(;a!==s;)s.WindCnt2+=a.WindDelta,a=a.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(s){this.m_SortedEdges===null?(this.m_SortedEdges=s,s.PrevInSEL=null,s.NextInSEL=null):(s.NextInSEL=this.m_SortedEdges,s.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=s,this.m_SortedEdges=s)},n.Clipper.prototype.PopEdgeFromSEL=function(s){if(s.v=this.m_SortedEdges,s.v===null)return!1;var a=s.v;return this.m_SortedEdges=s.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),a.NextInSEL=null,a.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var s=this.m_ActiveEdges;for(this.m_SortedEdges=s;s!==null;)s.PrevInSEL=s.PrevInAEL,s.NextInSEL=s.NextInAEL,s=s.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(s,a){if(!(s.NextInSEL===null&&s.PrevInSEL===null)&&!(a.NextInSEL===null&&a.PrevInSEL===null)){if(s.NextInSEL===a){var l=a.NextInSEL;l!==null&&(l.PrevInSEL=s);var p=s.PrevInSEL;p!==null&&(p.NextInSEL=a),a.PrevInSEL=p,a.NextInSEL=s,s.PrevInSEL=a,s.NextInSEL=l}else if(a.NextInSEL===s){var l=s.NextInSEL;l!==null&&(l.PrevInSEL=a);var p=a.PrevInSEL;p!==null&&(p.NextInSEL=s),s.PrevInSEL=p,s.NextInSEL=a,a.PrevInSEL=s,a.NextInSEL=l}else{var l=s.NextInSEL,p=s.PrevInSEL;s.NextInSEL=a.NextInSEL,s.NextInSEL!==null&&(s.NextInSEL.PrevInSEL=s),s.PrevInSEL=a.PrevInSEL,s.PrevInSEL!==null&&(s.PrevInSEL.NextInSEL=s),a.NextInSEL=l,a.NextInSEL!==null&&(a.NextInSEL.PrevInSEL=a),a.PrevInSEL=p,a.PrevInSEL!==null&&(a.PrevInSEL.NextInSEL=a)}s.PrevInSEL===null?this.m_SortedEdges=s:a.PrevInSEL===null&&(this.m_SortedEdges=a)}},n.Clipper.prototype.AddLocalMaxPoly=function(s,a,l){this.AddOutPt(s,l),a.WindDelta===0&&this.AddOutPt(a,l),s.OutIdx===a.OutIdx?(s.OutIdx=-1,a.OutIdx=-1):s.OutIdx<a.OutIdx?this.AppendPolygon(s,a):this.AppendPolygon(a,s)},n.Clipper.prototype.AddLocalMinPoly=function(s,a,l){var p,_,A;if(n.ClipperBase.IsHorizontal(a)||s.Dx>a.Dx?(p=this.AddOutPt(s,l),a.OutIdx=s.OutIdx,s.Side=n.EdgeSide.esLeft,a.Side=n.EdgeSide.esRight,_=s,_.PrevInAEL===a?A=a.PrevInAEL:A=_.PrevInAEL):(p=this.AddOutPt(a,l),s.OutIdx=a.OutIdx,s.Side=n.EdgeSide.esRight,a.Side=n.EdgeSide.esLeft,_=a,_.PrevInAEL===s?A=s.PrevInAEL:A=_.PrevInAEL),A!==null&&A.OutIdx>=0&&A.Top.Y<l.Y&&_.Top.Y<l.Y){var O=n.Clipper.TopX(A,l.Y),Z=n.Clipper.TopX(_,l.Y);if(O===Z&&_.WindDelta!==0&&A.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(O,l.Y),A.Top,new n.IntPoint2(Z,l.Y),_.Top,this.m_UseFullRange)){var K=this.AddOutPt(A,l);this.AddJoin(p,K,_.Top)}}return p},n.Clipper.prototype.AddOutPt=function(s,a){if(s.OutIdx<0){var l=this.CreateOutRec();l.IsOpen=s.WindDelta===0;var p=new n.OutPt;return l.Pts=p,p.Idx=l.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=p,p.Prev=p,l.IsOpen||this.SetHoleState(s,l),s.OutIdx=l.Idx,p}else{var l=this.m_PolyOuts[s.OutIdx],_=l.Pts,A=s.Side===n.EdgeSide.esLeft;if(A&&n.IntPoint.op_Equality(a,_.Pt))return _;if(!A&&n.IntPoint.op_Equality(a,_.Prev.Pt))return _.Prev;var p=new n.OutPt;return p.Idx=l.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=_,p.Prev=_.Prev,p.Prev.Next=p,_.Prev=p,A&&(l.Pts=p),p}},n.Clipper.prototype.GetLastOutPt=function(s){var a=this.m_PolyOuts[s.OutIdx];return s.Side===n.EdgeSide.esLeft?a.Pts:a.Pts.Prev},n.Clipper.prototype.SwapPoints=function(s,a){var l=new n.IntPoint1(s.Value);s.Value.X=a.Value.X,s.Value.Y=a.Value.Y,n.use_xyz&&(s.Value.Z=a.Value.Z),a.Value.X=l.X,a.Value.Y=l.Y,n.use_xyz&&(a.Value.Z=l.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(s,a,l,p){var _;return s>a&&(_=s,s=a,a=_),l>p&&(_=l,l=p,p=_),s<p&&l<a},n.Clipper.prototype.SetHoleState=function(s,a){for(var l=s.PrevInAEL,p=null;l!==null;)l.OutIdx>=0&&l.WindDelta!==0&&(p===null?p=l:p.OutIdx===l.OutIdx&&(p=null)),l=l.PrevInAEL;p===null?(a.FirstLeft=null,a.IsHole=!1):(a.FirstLeft=this.m_PolyOuts[p.OutIdx],a.IsHole=!a.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(s,a){return s.Y===a.Y?n.ClipperBase.horizontal:(a.X-s.X)/(a.Y-s.Y)},n.Clipper.prototype.FirstIsBottomPt=function(s,a){for(var l=s.Prev;n.IntPoint.op_Equality(l.Pt,s.Pt)&&l!==s;)l=l.Prev;var p=Math.abs(this.GetDx(s.Pt,l.Pt));for(l=s.Next;n.IntPoint.op_Equality(l.Pt,s.Pt)&&l!==s;)l=l.Next;var _=Math.abs(this.GetDx(s.Pt,l.Pt));for(l=a.Prev;n.IntPoint.op_Equality(l.Pt,a.Pt)&&l!==a;)l=l.Prev;var A=Math.abs(this.GetDx(a.Pt,l.Pt));for(l=a.Next;n.IntPoint.op_Equality(l.Pt,a.Pt)&&l!==a;)l=l.Next;var O=Math.abs(this.GetDx(a.Pt,l.Pt));return Math.max(p,_)===Math.max(A,O)&&Math.min(p,_)===Math.min(A,O)?this.Area(s)>0:p>=A&&p>=O||_>=A&&_>=O},n.Clipper.prototype.GetBottomPt=function(s){for(var a=null,l=s.Next;l!==s;)l.Pt.Y>s.Pt.Y?(s=l,a=null):l.Pt.Y===s.Pt.Y&&l.Pt.X<=s.Pt.X&&(l.Pt.X<s.Pt.X?(a=null,s=l):l.Next!==s&&l.Prev!==s&&(a=l)),l=l.Next;if(a!==null)for(;a!==l;)for(this.FirstIsBottomPt(l,a)||(s=a),a=a.Next;n.IntPoint.op_Inequality(a.Pt,s.Pt);)a=a.Next;return s},n.Clipper.prototype.GetLowermostRec=function(s,a){s.BottomPt===null&&(s.BottomPt=this.GetBottomPt(s.Pts)),a.BottomPt===null&&(a.BottomPt=this.GetBottomPt(a.Pts));var l=s.BottomPt,p=a.BottomPt;return l.Pt.Y>p.Pt.Y?s:l.Pt.Y<p.Pt.Y?a:l.Pt.X<p.Pt.X?s:l.Pt.X>p.Pt.X||l.Next===l?a:p.Next===p||this.FirstIsBottomPt(l,p)?s:a},n.Clipper.prototype.OutRec1RightOfOutRec2=function(s,a){do if(s=s.FirstLeft,s===a)return!0;while(s!==null);return!1},n.Clipper.prototype.GetOutRec=function(s){for(var a=this.m_PolyOuts[s];a!==this.m_PolyOuts[a.Idx];)a=this.m_PolyOuts[a.Idx];return a},n.Clipper.prototype.AppendPolygon=function(s,a){var l=this.m_PolyOuts[s.OutIdx],p=this.m_PolyOuts[a.OutIdx],_;this.OutRec1RightOfOutRec2(l,p)?_=p:this.OutRec1RightOfOutRec2(p,l)?_=l:_=this.GetLowermostRec(l,p);var A=l.Pts,O=A.Prev,Z=p.Pts,K=Z.Prev;s.Side===n.EdgeSide.esLeft?a.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(Z),Z.Next=A,A.Prev=Z,O.Next=K,K.Prev=O,l.Pts=K):(K.Next=A,A.Prev=K,Z.Prev=O,O.Next=Z,l.Pts=Z):a.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(Z),O.Next=K,K.Prev=O,Z.Next=A,A.Prev=Z):(O.Next=Z,Z.Prev=O,A.Prev=K,K.Next=A),l.BottomPt=null,_===p&&(p.FirstLeft!==l&&(l.FirstLeft=p.FirstLeft),l.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=l;var ht=s.OutIdx,At=a.OutIdx;s.OutIdx=-1,a.OutIdx=-1;for(var Tt=this.m_ActiveEdges;Tt!==null;){if(Tt.OutIdx===At){Tt.OutIdx=ht,Tt.Side=s.Side;break}Tt=Tt.NextInAEL}p.Idx=l.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(s){if(s!==null){var a,l;a=s;do l=a.Next,a.Next=a.Prev,a.Prev=l,a=l;while(a!==s)}},n.Clipper.SwapSides=function(s,a){var l=s.Side;s.Side=a.Side,a.Side=l},n.Clipper.SwapPolyIndexes=function(s,a){var l=s.OutIdx;s.OutIdx=a.OutIdx,a.OutIdx=l},n.Clipper.prototype.IntersectEdges=function(s,a,l){var p=s.OutIdx>=0,_=a.OutIdx>=0;if(n.use_xyz&&this.SetZ(l,s,a),n.use_lines&&(s.WindDelta===0||a.WindDelta===0)){if(s.WindDelta===0&&a.WindDelta===0)return;s.PolyTyp===a.PolyTyp&&s.WindDelta!==a.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?s.WindDelta===0?_&&(this.AddOutPt(s,l),p&&(s.OutIdx=-1)):p&&(this.AddOutPt(a,l),_&&(a.OutIdx=-1)):s.PolyTyp!==a.PolyTyp&&(s.WindDelta===0&&Math.abs(a.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||a.WindCnt2===0)?(this.AddOutPt(s,l),p&&(s.OutIdx=-1)):a.WindDelta===0&&Math.abs(s.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||s.WindCnt2===0)&&(this.AddOutPt(a,l),_&&(a.OutIdx=-1)));return}if(s.PolyTyp===a.PolyTyp)if(this.IsEvenOddFillType(s)){var A=s.WindCnt;s.WindCnt=a.WindCnt,a.WindCnt=A}else s.WindCnt+a.WindDelta===0?s.WindCnt=-s.WindCnt:s.WindCnt+=a.WindDelta,a.WindCnt-s.WindDelta===0?a.WindCnt=-a.WindCnt:a.WindCnt-=s.WindDelta;else this.IsEvenOddFillType(a)?s.WindCnt2=s.WindCnt2===0?1:0:s.WindCnt2+=a.WindDelta,this.IsEvenOddFillType(s)?a.WindCnt2=a.WindCnt2===0?1:0:a.WindCnt2-=s.WindDelta;var O,Z,K,ht;s.PolyTyp===n.PolyType.ptSubject?(O=this.m_SubjFillType,K=this.m_ClipFillType):(O=this.m_ClipFillType,K=this.m_SubjFillType),a.PolyTyp===n.PolyType.ptSubject?(Z=this.m_SubjFillType,ht=this.m_ClipFillType):(Z=this.m_ClipFillType,ht=this.m_SubjFillType);var At,Tt;switch(O){case n.PolyFillType.pftPositive:At=s.WindCnt;break;case n.PolyFillType.pftNegative:At=-s.WindCnt;break;default:At=Math.abs(s.WindCnt);break}switch(Z){case n.PolyFillType.pftPositive:Tt=a.WindCnt;break;case n.PolyFillType.pftNegative:Tt=-a.WindCnt;break;default:Tt=Math.abs(a.WindCnt);break}if(p&&_)At!==0&&At!==1||Tt!==0&&Tt!==1||s.PolyTyp!==a.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(s,a,l):(this.AddOutPt(s,l),this.AddOutPt(a,l),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(p)(Tt===0||Tt===1)&&(this.AddOutPt(s,l),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(_)(At===0||At===1)&&(this.AddOutPt(a,l),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if((At===0||At===1)&&(Tt===0||Tt===1)){var Lt,re;switch(K){case n.PolyFillType.pftPositive:Lt=s.WindCnt2;break;case n.PolyFillType.pftNegative:Lt=-s.WindCnt2;break;default:Lt=Math.abs(s.WindCnt2);break}switch(ht){case n.PolyFillType.pftPositive:re=a.WindCnt2;break;case n.PolyFillType.pftNegative:re=-a.WindCnt2;break;default:re=Math.abs(a.WindCnt2);break}if(s.PolyTyp!==a.PolyTyp)this.AddLocalMinPoly(s,a,l);else if(At===1&&Tt===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Lt>0&&re>0&&this.AddLocalMinPoly(s,a,l);break;case n.ClipType.ctUnion:Lt<=0&&re<=0&&this.AddLocalMinPoly(s,a,l);break;case n.ClipType.ctDifference:(s.PolyTyp===n.PolyType.ptClip&&Lt>0&&re>0||s.PolyTyp===n.PolyType.ptSubject&&Lt<=0&&re<=0)&&this.AddLocalMinPoly(s,a,l);break;case n.ClipType.ctXor:this.AddLocalMinPoly(s,a,l);break}else n.Clipper.SwapSides(s,a)}},n.Clipper.prototype.DeleteFromSEL=function(s){var a=s.PrevInSEL,l=s.NextInSEL;a===null&&l===null&&s!==this.m_SortedEdges||(a!==null?a.NextInSEL=l:this.m_SortedEdges=l,l!==null&&(l.PrevInSEL=a),s.NextInSEL=null,s.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var s={};this.PopEdgeFromSEL(s);)this.ProcessHorizontal(s.v)},n.Clipper.prototype.GetHorzDirection=function(s,a){s.Bot.X<s.Top.X?(a.Left=s.Bot.X,a.Right=s.Top.X,a.Dir=n.Direction.dLeftToRight):(a.Left=s.Top.X,a.Right=s.Bot.X,a.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(s){var a={Dir:null,Left:null,Right:null};this.GetHorzDirection(s,a);for(var l=a.Dir,p=a.Left,_=a.Right,A=s.WindDelta===0,O=s,Z=null;O.NextInLML!==null&&n.ClipperBase.IsHorizontal(O.NextInLML);)O=O.NextInLML;O.NextInLML===null&&(Z=this.GetMaximaPair(O));var K=this.m_Maxima;if(K!==null)if(l===n.Direction.dLeftToRight){for(;K!==null&&K.X<=s.Bot.X;)K=K.Next;K!==null&&K.X>=O.Top.X&&(K=null)}else{for(;K.Next!==null&&K.Next.X<s.Bot.X;)K=K.Next;K.X<=O.Top.X&&(K=null)}for(var ht=null;;){for(var At=s===O,Tt=this.GetNextInAEL(s,l);Tt!==null;){if(K!==null)if(l===n.Direction.dLeftToRight)for(;K!==null&&K.X<Tt.Curr.X;)s.OutIdx>=0&&!A&&this.AddOutPt(s,new n.IntPoint2(K.X,s.Bot.Y)),K=K.Next;else for(;K!==null&&K.X>Tt.Curr.X;)s.OutIdx>=0&&!A&&this.AddOutPt(s,new n.IntPoint2(K.X,s.Bot.Y)),K=K.Prev;if(l===n.Direction.dLeftToRight&&Tt.Curr.X>_||l===n.Direction.dRightToLeft&&Tt.Curr.X<p||Tt.Curr.X===s.Top.X&&s.NextInLML!==null&&Tt.Dx<s.NextInLML.Dx)break;if(s.OutIdx>=0&&!A){n.use_xyz&&(l===n.Direction.dLeftToRight?this.SetZ(Tt.Curr,s,Tt):this.SetZ(Tt.Curr,Tt,s)),ht=this.AddOutPt(s,Tt.Curr);for(var Lt=this.m_SortedEdges;Lt!==null;){if(Lt.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,Lt.Bot.X,Lt.Top.X)){var re=this.GetLastOutPt(Lt);this.AddJoin(re,ht,Lt.Top)}Lt=Lt.NextInSEL}this.AddGhostJoin(ht,s.Bot)}if(Tt===Z&&At){s.OutIdx>=0&&this.AddLocalMaxPoly(s,Z,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(Z);return}if(l===n.Direction.dLeftToRight){var pe=new n.IntPoint2(Tt.Curr.X,s.Curr.Y);this.IntersectEdges(s,Tt,pe)}else{var pe=new n.IntPoint2(Tt.Curr.X,s.Curr.Y);this.IntersectEdges(Tt,s,pe)}var xe=this.GetNextInAEL(Tt,l);this.SwapPositionsInAEL(s,Tt),Tt=xe}if(s.NextInLML===null||!n.ClipperBase.IsHorizontal(s.NextInLML))break;s=this.UpdateEdgeIntoAEL(s),s.OutIdx>=0&&this.AddOutPt(s,s.Bot),a={Dir:l,Left:p,Right:_},this.GetHorzDirection(s,a),l=a.Dir,p=a.Left,_=a.Right}if(s.OutIdx>=0&&ht===null){ht=this.GetLastOutPt(s);for(var Lt=this.m_SortedEdges;Lt!==null;){if(Lt.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,Lt.Bot.X,Lt.Top.X)){var re=this.GetLastOutPt(Lt);this.AddJoin(re,ht,Lt.Top)}Lt=Lt.NextInSEL}this.AddGhostJoin(ht,s.Top)}if(s.NextInLML!==null)if(s.OutIdx>=0){if(ht=this.AddOutPt(s,s.Top),s=this.UpdateEdgeIntoAEL(s),s.WindDelta===0)return;var Be=s.PrevInAEL,xe=s.NextInAEL;if(Be!==null&&Be.Curr.X===s.Bot.X&&Be.Curr.Y===s.Bot.Y&&Be.WindDelta===0&&Be.OutIdx>=0&&Be.Curr.Y>Be.Top.Y&&n.ClipperBase.SlopesEqual3(s,Be,this.m_UseFullRange)){var re=this.AddOutPt(Be,s.Bot);this.AddJoin(ht,re,s.Top)}else if(xe!==null&&xe.Curr.X===s.Bot.X&&xe.Curr.Y===s.Bot.Y&&xe.WindDelta!==0&&xe.OutIdx>=0&&xe.Curr.Y>xe.Top.Y&&n.ClipperBase.SlopesEqual3(s,xe,this.m_UseFullRange)){var re=this.AddOutPt(xe,s.Bot);this.AddJoin(ht,re,s.Top)}}else s=this.UpdateEdgeIntoAEL(s);else s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s)},n.Clipper.prototype.GetNextInAEL=function(s,a){return a===n.Direction.dLeftToRight?s.NextInAEL:s.PrevInAEL},n.Clipper.prototype.IsMinima=function(s){return s!==null&&s.Prev.NextInLML!==s&&s.Next.NextInLML!==s},n.Clipper.prototype.IsMaxima=function(s,a){return s!==null&&s.Top.Y===a&&s.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(s,a){return s.Top.Y===a&&s.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(s){return n.IntPoint.op_Equality(s.Next.Top,s.Top)&&s.Next.NextInLML===null?s.Next:n.IntPoint.op_Equality(s.Prev.Top,s.Top)&&s.Prev.NextInLML===null?s.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(s){var a=this.GetMaximaPair(s);return a===null||a.OutIdx===n.ClipperBase.Skip||a.NextInAEL===a.PrevInAEL&&!n.ClipperBase.IsHorizontal(a)?null:a},n.Clipper.prototype.ProcessIntersections=function(s){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(s),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(s){if(this.m_ActiveEdges!==null){var a=this.m_ActiveEdges;for(this.m_SortedEdges=a;a!==null;)a.PrevInSEL=a.PrevInAEL,a.NextInSEL=a.NextInAEL,a.Curr.X=n.Clipper.TopX(a,s),a=a.NextInAEL;for(var l=!0;l&&this.m_SortedEdges!==null;){for(l=!1,a=this.m_SortedEdges;a.NextInSEL!==null;){var p=a.NextInSEL,_=new n.IntPoint0;if(a.Curr.X>p.Curr.X){this.IntersectPoint(a,p,_),_.Y<s&&(_=new n.IntPoint2(n.Clipper.TopX(a,s),s));var A=new n.IntersectNode;A.Edge1=a,A.Edge2=p,A.Pt.X=_.X,A.Pt.Y=_.Y,n.use_xyz&&(A.Pt.Z=_.Z),this.m_IntersectList.push(A),this.SwapPositionsInSEL(a,p),l=!0}else a=p}if(a.PrevInSEL!==null)a.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(s){return s.Edge1.NextInSEL===s.Edge2||s.Edge1.PrevInSEL===s.Edge2},n.Clipper.IntersectNodeSort=function(s,a){return a.Pt.Y-s.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var s=this.m_IntersectList.length,a=0;a<s;a++){if(!this.EdgesAdjacent(this.m_IntersectList[a])){for(var l=a+1;l<s&&!this.EdgesAdjacent(this.m_IntersectList[l]);)l++;if(l===s)return!1;var p=this.m_IntersectList[a];this.m_IntersectList[a]=this.m_IntersectList[l],this.m_IntersectList[l]=p}this.SwapPositionsInSEL(this.m_IntersectList[a].Edge1,this.m_IntersectList[a].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var s=0,a=this.m_IntersectList.length;s<a;s++){var l=this.m_IntersectList[s];this.IntersectEdges(l.Edge1,l.Edge2,l.Pt),this.SwapPositionsInAEL(l.Edge1,l.Edge2)}this.m_IntersectList.length=0};var jt=function(s){return s<0?Math.ceil(s-.5):Math.round(s)},Pe=function(s){return s<0?Math.ceil(s-.5):Math.floor(s+.5)},We=function(s){return s<0?-Math.round(Math.abs(s)):Math.round(s)},we=function(s){return s<0?(s-=.5,s<-2147483648?Math.ceil(s):s|0):(s+=.5,s>2147483647?Math.floor(s):s|0)};r.msie?n.Clipper.Round=jt:r.chromium?n.Clipper.Round=We:r.safari?n.Clipper.Round=we:n.Clipper.Round=Pe,n.Clipper.TopX=function(s,a){return a===s.Top.Y?s.Top.X:s.Bot.X+n.Clipper.Round(s.Dx*(a-s.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(s,a,l){l.X=0,l.Y=0;var p,_;if(s.Dx===a.Dx){l.Y=s.Curr.Y,l.X=n.Clipper.TopX(s,l.Y);return}if(s.Delta.X===0)l.X=s.Bot.X,n.ClipperBase.IsHorizontal(a)?l.Y=a.Bot.Y:(_=a.Bot.Y-a.Bot.X/a.Dx,l.Y=n.Clipper.Round(l.X/a.Dx+_));else if(a.Delta.X===0)l.X=a.Bot.X,n.ClipperBase.IsHorizontal(s)?l.Y=s.Bot.Y:(p=s.Bot.Y-s.Bot.X/s.Dx,l.Y=n.Clipper.Round(l.X/s.Dx+p));else{p=s.Bot.X-s.Bot.Y*s.Dx,_=a.Bot.X-a.Bot.Y*a.Dx;var A=(_-p)/(s.Dx-a.Dx);l.Y=n.Clipper.Round(A),Math.abs(s.Dx)<Math.abs(a.Dx)?l.X=n.Clipper.Round(s.Dx*A+p):l.X=n.Clipper.Round(a.Dx*A+_)}if(l.Y<s.Top.Y||l.Y<a.Top.Y){if(s.Top.Y>a.Top.Y)return l.Y=s.Top.Y,l.X=n.Clipper.TopX(a,s.Top.Y),l.X<s.Top.X;l.Y=a.Top.Y,Math.abs(s.Dx)<Math.abs(a.Dx)?l.X=n.Clipper.TopX(s,l.Y):l.X=n.Clipper.TopX(a,l.Y)}l.Y>s.Curr.Y&&(l.Y=s.Curr.Y,Math.abs(s.Dx)>Math.abs(a.Dx)?l.X=n.Clipper.TopX(a,l.Y):l.X=n.Clipper.TopX(s,l.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(s){for(var a=this.m_ActiveEdges;a!==null;){var l=this.IsMaxima(a,s);if(l){var p=this.GetMaximaPairEx(a);l=p===null||!n.ClipperBase.IsHorizontal(p)}if(l){this.StrictlySimple&&this.InsertMaxima(a.Top.X);var _=a.PrevInAEL;this.DoMaxima(a),_===null?a=this.m_ActiveEdges:a=_.NextInAEL}else{if(this.IsIntermediate(a,s)&&n.ClipperBase.IsHorizontal(a.NextInLML)?(a=this.UpdateEdgeIntoAEL(a),a.OutIdx>=0&&this.AddOutPt(a,a.Bot),this.AddEdgeToSEL(a)):(a.Curr.X=n.Clipper.TopX(a,s),a.Curr.Y=s),n.use_xyz&&(a.Top.Y===s?a.Curr.Z=a.Top.Z:a.Bot.Y===s?a.Curr.Z=a.Bot.Z:a.Curr.Z=0),this.StrictlySimple){var _=a.PrevInAEL;if(a.OutIdx>=0&&a.WindDelta!==0&&_!==null&&_.OutIdx>=0&&_.Curr.X===a.Curr.X&&_.WindDelta!==0){var A=new n.IntPoint1(a.Curr);n.use_xyz&&this.SetZ(A,_,a);var O=this.AddOutPt(_,A),Z=this.AddOutPt(a,A);this.AddJoin(O,Z,A)}}a=a.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,a=this.m_ActiveEdges;a!==null;){if(this.IsIntermediate(a,s)){var O=null;a.OutIdx>=0&&(O=this.AddOutPt(a,a.Top)),a=this.UpdateEdgeIntoAEL(a);var _=a.PrevInAEL,K=a.NextInAEL;if(_!==null&&_.Curr.X===a.Bot.X&&_.Curr.Y===a.Bot.Y&&O!==null&&_.OutIdx>=0&&_.Curr.Y===_.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,_.Curr,_.Top,this.m_UseFullRange)&&a.WindDelta!==0&&_.WindDelta!==0){var Z=this.AddOutPt(ePrev2,a.Bot);this.AddJoin(O,Z,a.Top)}else if(K!==null&&K.Curr.X===a.Bot.X&&K.Curr.Y===a.Bot.Y&&O!==null&&K.OutIdx>=0&&K.Curr.Y===K.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,K.Curr,K.Top,this.m_UseFullRange)&&a.WindDelta!==0&&K.WindDelta!==0){var Z=this.AddOutPt(K,a.Bot);this.AddJoin(O,Z,a.Top)}}a=a.NextInAEL}},n.Clipper.prototype.DoMaxima=function(s){var a=this.GetMaximaPairEx(s);if(a===null){s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s);return}for(var l=s.NextInAEL;l!==null&&l!==a;)this.IntersectEdges(s,l,s.Top),this.SwapPositionsInAEL(s,l),l=s.NextInAEL;s.OutIdx===-1&&a.OutIdx===-1?(this.DeleteFromAEL(s),this.DeleteFromAEL(a)):s.OutIdx>=0&&a.OutIdx>=0?(s.OutIdx>=0&&this.AddLocalMaxPoly(s,a,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(a)):n.use_lines&&s.WindDelta===0?(s.OutIdx>=0&&(this.AddOutPt(s,s.Top),s.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(s),a.OutIdx>=0&&(this.AddOutPt(a,s.Top),a.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(a)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(s){for(var a=0,l=s.length;a<l;a++)s[a].reverse()},n.Clipper.Orientation=function(s){return n.Clipper.Area(s)>=0},n.Clipper.prototype.PointCount=function(s){if(s===null)return 0;var a=0,l=s;do a++,l=l.Next;while(l!==s);return a},n.Clipper.prototype.BuildResult=function(s){n.Clear(s);for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a];if(p.Pts!==null){var _=p.Pts.Prev,A=this.PointCount(_);if(!(A<2)){for(var O=new Array(A),Z=0;Z<A;Z++)O[Z]=_.Pt,_=_.Prev;s.push(O)}}}},n.Clipper.prototype.BuildResult2=function(s){s.Clear();for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a],_=this.PointCount(p.Pts);if(!(p.IsOpen&&_<2||!p.IsOpen&&_<3)){this.FixHoleLinkage(p);var A=new n.PolyNode;s.m_AllPolys.push(A),p.PolyNode=A,A.m_polygon.length=_;for(var O=p.Pts.Prev,Z=0;Z<_;Z++)A.m_polygon[Z]=O.Pt,O=O.Prev}}for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,s.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):s.AddChild(p.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(s){for(var a=s.Pts,l=a.Prev;a!==l;)if(a=a.Next,n.IntPoint.op_Equality(a.Pt,a.Prev.Pt)){a===l&&(l=a.Prev);var p=a.Prev;p.Next=a.Next,a.Next.Prev=p,a=p}a===a.Prev&&(s.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(s){var a=null;s.BottomPt=null;for(var l=s.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(l.Prev===l||l.Prev===l.Next){s.Pts=null;return}if(n.IntPoint.op_Equality(l.Pt,l.Next.Pt)||n.IntPoint.op_Equality(l.Pt,l.Prev.Pt)||n.ClipperBase.SlopesEqual4(l.Prev.Pt,l.Pt,l.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(l.Prev.Pt,l.Pt,l.Next.Pt)))a=null,l.Prev.Next=l.Next,l.Next.Prev=l.Prev,l=l.Prev;else{if(l===a)break;a===null&&(a=l),l=l.Next}}s.Pts=l},n.Clipper.prototype.DupOutPt=function(s,a){var l=new n.OutPt;return l.Pt.X=s.Pt.X,l.Pt.Y=s.Pt.Y,n.use_xyz&&(l.Pt.Z=s.Pt.Z),l.Idx=s.Idx,a?(l.Next=s.Next,l.Prev=s,s.Next.Prev=l,s.Next=l):(l.Prev=s.Prev,l.Next=s,s.Prev.Next=l,s.Prev=l),l},n.Clipper.prototype.GetOverlap=function(s,a,l,p,_){return s<a?l<p?(_.Left=Math.max(s,l),_.Right=Math.min(a,p)):(_.Left=Math.max(s,p),_.Right=Math.min(a,l)):l<p?(_.Left=Math.max(a,l),_.Right=Math.min(s,p)):(_.Left=Math.max(a,p),_.Right=Math.min(s,l)),_.Left<_.Right},n.Clipper.prototype.JoinHorz=function(s,a,l,p,_,A){var O=s.Pt.X>a.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,Z=l.Pt.X>p.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(O===Z)return!1;if(O===n.Direction.dLeftToRight){for(;s.Next.Pt.X<=_.X&&s.Next.Pt.X>=s.Pt.X&&s.Next.Pt.Y===_.Y;)s=s.Next;A&&s.Pt.X!==_.X&&(s=s.Next),a=this.DupOutPt(s,!A),n.IntPoint.op_Inequality(a.Pt,_)&&(s=a,s.Pt.X=_.X,s.Pt.Y=_.Y,n.use_xyz&&(s.Pt.Z=_.Z),a=this.DupOutPt(s,!A))}else{for(;s.Next.Pt.X>=_.X&&s.Next.Pt.X<=s.Pt.X&&s.Next.Pt.Y===_.Y;)s=s.Next;!A&&s.Pt.X!==_.X&&(s=s.Next),a=this.DupOutPt(s,A),n.IntPoint.op_Inequality(a.Pt,_)&&(s=a,s.Pt.X=_.X,s.Pt.Y=_.Y,n.use_xyz&&(s.Pt.Z=_.Z),a=this.DupOutPt(s,A))}if(Z===n.Direction.dLeftToRight){for(;l.Next.Pt.X<=_.X&&l.Next.Pt.X>=l.Pt.X&&l.Next.Pt.Y===_.Y;)l=l.Next;A&&l.Pt.X!==_.X&&(l=l.Next),p=this.DupOutPt(l,!A),n.IntPoint.op_Inequality(p.Pt,_)&&(l=p,l.Pt.X=_.X,l.Pt.Y=_.Y,n.use_xyz&&(l.Pt.Z=_.Z),p=this.DupOutPt(l,!A))}else{for(;l.Next.Pt.X>=_.X&&l.Next.Pt.X<=l.Pt.X&&l.Next.Pt.Y===_.Y;)l=l.Next;!A&&l.Pt.X!==_.X&&(l=l.Next),p=this.DupOutPt(l,A),n.IntPoint.op_Inequality(p.Pt,_)&&(l=p,l.Pt.X=_.X,l.Pt.Y=_.Y,n.use_xyz&&(l.Pt.Z=_.Z),p=this.DupOutPt(l,A))}return O===n.Direction.dLeftToRight===A?(s.Prev=l,l.Next=s,a.Next=p,p.Prev=a):(s.Next=l,l.Prev=s,a.Prev=p,p.Next=a),!0},n.Clipper.prototype.JoinPoints=function(s,a,l){var p=s.OutPt1,_=new n.OutPt,A=s.OutPt2,O=new n.OutPt,Z=s.OutPt1.Pt.Y===s.OffPt.Y;if(Z&&n.IntPoint.op_Equality(s.OffPt,s.OutPt1.Pt)&&n.IntPoint.op_Equality(s.OffPt,s.OutPt2.Pt)){if(a!==l)return!1;for(_=s.OutPt1.Next;_!==p&&n.IntPoint.op_Equality(_.Pt,s.OffPt);)_=_.Next;var K=_.Pt.Y>s.OffPt.Y;for(O=s.OutPt2.Next;O!==A&&n.IntPoint.op_Equality(O.Pt,s.OffPt);)O=O.Next;var ht=O.Pt.Y>s.OffPt.Y;return K===ht?!1:K?(_=this.DupOutPt(p,!1),O=this.DupOutPt(A,!0),p.Prev=A,A.Next=p,_.Next=O,O.Prev=_,s.OutPt1=p,s.OutPt2=_,!0):(_=this.DupOutPt(p,!0),O=this.DupOutPt(A,!1),p.Next=A,A.Prev=p,_.Prev=O,O.Next=_,s.OutPt1=p,s.OutPt2=_,!0)}else if(Z){for(_=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==_&&p.Prev!==A;)p=p.Prev;for(;_.Next.Pt.Y===_.Pt.Y&&_.Next!==p&&_.Next!==A;)_=_.Next;if(_.Next===p||_.Next===A)return!1;for(O=A;A.Prev.Pt.Y===A.Pt.Y&&A.Prev!==O&&A.Prev!==_;)A=A.Prev;for(;O.Next.Pt.Y===O.Pt.Y&&O.Next!==A&&O.Next!==p;)O=O.Next;if(O.Next===A||O.Next===p)return!1;var At={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,_.Pt.X,A.Pt.X,O.Pt.X,At))return!1;var Tt=At.Left,Lt=At.Right,re=new n.IntPoint0,pe;return p.Pt.X>=Tt&&p.Pt.X<=Lt?(re.X=p.Pt.X,re.Y=p.Pt.Y,n.use_xyz&&(re.Z=p.Pt.Z),pe=p.Pt.X>_.Pt.X):A.Pt.X>=Tt&&A.Pt.X<=Lt?(re.X=A.Pt.X,re.Y=A.Pt.Y,n.use_xyz&&(re.Z=A.Pt.Z),pe=A.Pt.X>O.Pt.X):_.Pt.X>=Tt&&_.Pt.X<=Lt?(re.X=_.Pt.X,re.Y=_.Pt.Y,n.use_xyz&&(re.Z=_.Pt.Z),pe=_.Pt.X>p.Pt.X):(re.X=O.Pt.X,re.Y=O.Pt.Y,n.use_xyz&&(re.Z=O.Pt.Z),pe=O.Pt.X>A.Pt.X),s.OutPt1=p,s.OutPt2=A,this.JoinHorz(p,_,A,O,re,pe)}else{for(_=p.Next;n.IntPoint.op_Equality(_.Pt,p.Pt)&&_!==p;)_=_.Next;var xe=_.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,_.Pt,s.OffPt,this.m_UseFullRange);if(xe){for(_=p.Prev;n.IntPoint.op_Equality(_.Pt,p.Pt)&&_!==p;)_=_.Prev;if(_.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,_.Pt,s.OffPt,this.m_UseFullRange))return!1}for(O=A.Next;n.IntPoint.op_Equality(O.Pt,A.Pt)&&O!==A;)O=O.Next;var Be=O.Pt.Y>A.Pt.Y||!n.ClipperBase.SlopesEqual4(A.Pt,O.Pt,s.OffPt,this.m_UseFullRange);if(Be){for(O=A.Prev;n.IntPoint.op_Equality(O.Pt,A.Pt)&&O!==A;)O=O.Prev;if(O.Pt.Y>A.Pt.Y||!n.ClipperBase.SlopesEqual4(A.Pt,O.Pt,s.OffPt,this.m_UseFullRange))return!1}return _===p||O===A||_===O||a===l&&xe===Be?!1:xe?(_=this.DupOutPt(p,!1),O=this.DupOutPt(A,!0),p.Prev=A,A.Next=p,_.Next=O,O.Prev=_,s.OutPt1=p,s.OutPt2=_,!0):(_=this.DupOutPt(p,!0),O=this.DupOutPt(A,!1),p.Next=A,A.Prev=p,_.Prev=O,O.Next=_,s.OutPt1=p,s.OutPt2=_,!0)}},n.Clipper.GetBounds=function(s){for(var a=0,l=s.length;a<l&&s[a].length===0;)a++;if(a===l)return new n.IntRect(0,0,0,0);var p=new n.IntRect;for(p.left=s[a][0].X,p.right=p.left,p.top=s[a][0].Y,p.bottom=p.top;a<l;a++)for(var _=0,A=s[a].length;_<A;_++)s[a][_].X<p.left?p.left=s[a][_].X:s[a][_].X>p.right&&(p.right=s[a][_].X),s[a][_].Y<p.top?p.top=s[a][_].Y:s[a][_].Y>p.bottom&&(p.bottom=s[a][_].Y);return p},n.Clipper.prototype.GetBounds2=function(s){var a=s,l=new n.IntRect;for(l.left=s.Pt.X,l.right=s.Pt.X,l.top=s.Pt.Y,l.bottom=s.Pt.Y,s=s.Next;s!==a;)s.Pt.X<l.left&&(l.left=s.Pt.X),s.Pt.X>l.right&&(l.right=s.Pt.X),s.Pt.Y<l.top&&(l.top=s.Pt.Y),s.Pt.Y>l.bottom&&(l.bottom=s.Pt.Y),s=s.Next;return l},n.Clipper.PointInPolygon=function(s,a){var l=0,p=a.length;if(p<3)return 0;for(var _=a[0],A=1;A<=p;++A){var O=A===p?a[0]:a[A];if(O.Y===s.Y&&(O.X===s.X||_.Y===s.Y&&O.X>s.X==_.X<s.X))return-1;if(_.Y<s.Y!=O.Y<s.Y){if(_.X>=s.X)if(O.X>s.X)l=1-l;else{var Z=(_.X-s.X)*(O.Y-s.Y)-(O.X-s.X)*(_.Y-s.Y);if(Z===0)return-1;Z>0==O.Y>_.Y&&(l=1-l)}else if(O.X>s.X){var Z=(_.X-s.X)*(O.Y-s.Y)-(O.X-s.X)*(_.Y-s.Y);if(Z===0)return-1;Z>0==O.Y>_.Y&&(l=1-l)}}_=O}return l},n.Clipper.prototype.PointInPolygon=function(s,a){var l=0,p=a,_=s.X,A=s.Y,O=a.Pt.X,Z=a.Pt.Y;do{a=a.Next;var K=a.Pt.X,ht=a.Pt.Y;if(ht===A&&(K===_||Z===A&&K>_==O<_))return-1;if(Z<A!=ht<A){if(O>=_)if(K>_)l=1-l;else{var At=(O-_)*(ht-A)-(K-_)*(Z-A);if(At===0)return-1;At>0==ht>Z&&(l=1-l)}else if(K>_){var At=(O-_)*(ht-A)-(K-_)*(Z-A);if(At===0)return-1;At>0==ht>Z&&(l=1-l)}}O=K,Z=ht}while(p!==a);return l},n.Clipper.prototype.Poly2ContainsPoly1=function(s,a){var l=s;do{var p=this.PointInPolygon(l.Pt,a);if(p>=0)return p>0;l=l.Next}while(l!==s);return!0},n.Clipper.prototype.FixupFirstLefts1=function(s,a){for(var l,p,_=0,A=this.m_PolyOuts.length;_<A;_++)l=this.m_PolyOuts[_],p=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&p===s&&this.Poly2ContainsPoly1(l.Pts,a.Pts)&&(l.FirstLeft=a)},n.Clipper.prototype.FixupFirstLefts2=function(s,a){for(var l=a.FirstLeft,p,_,A=0,O=this.m_PolyOuts.length;A<O;A++)p=this.m_PolyOuts[A],!(p.Pts===null||p===a||p===s)&&(_=n.Clipper.ParseFirstLeft(p.FirstLeft),!(_!==l&&_!==s&&_!==a)&&(this.Poly2ContainsPoly1(p.Pts,s.Pts)?p.FirstLeft=s:this.Poly2ContainsPoly1(p.Pts,a.Pts)?p.FirstLeft=a:(p.FirstLeft===s||p.FirstLeft===a)&&(p.FirstLeft=l)))},n.Clipper.prototype.FixupFirstLefts3=function(s,a){for(var l,p,_=0,A=this.m_PolyOuts.length;_<A;_++)l=this.m_PolyOuts[_],p=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&p===s&&(l.FirstLeft=a)},n.Clipper.ParseFirstLeft=function(s){for(;s!==null&&s.Pts===null;)s=s.FirstLeft;return s},n.Clipper.prototype.JoinCommonEdges=function(){for(var s=0,a=this.m_Joins.length;s<a;s++){var l=this.m_Joins[s],p=this.GetOutRec(l.OutPt1.Idx),_=this.GetOutRec(l.OutPt2.Idx);if(!(p.Pts===null||_.Pts===null)&&!(p.IsOpen||_.IsOpen)){var A;p===_?A=p:this.OutRec1RightOfOutRec2(p,_)?A=_:this.OutRec1RightOfOutRec2(_,p)?A=p:A=this.GetLowermostRec(p,_),this.JoinPoints(l,p,_)&&(p===_?(p.Pts=l.OutPt1,p.BottomPt=null,_=this.CreateOutRec(),_.Pts=l.OutPt2,this.UpdateOutPtIdxs(_),this.Poly2ContainsPoly1(_.Pts,p.Pts)?(_.IsHole=!p.IsHole,_.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(_,p),(_.IsHole^this.ReverseSolution)==this.Area$1(_)>0&&this.ReversePolyPtLinks(_.Pts)):this.Poly2ContainsPoly1(p.Pts,_.Pts)?(_.IsHole=p.IsHole,p.IsHole=!_.IsHole,_.FirstLeft=p.FirstLeft,p.FirstLeft=_,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,_),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(_.IsHole=p.IsHole,_.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,_))):(_.Pts=null,_.BottomPt=null,_.Idx=p.Idx,p.IsHole=A.IsHole,A===_&&(p.FirstLeft=_.FirstLeft),_.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(_,p)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(s){var a=s.Pts;do a.Idx=s.Idx,a=a.Prev;while(a!==s.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var s=0;s<this.m_PolyOuts.length;){var a=this.m_PolyOuts[s++],l=a.Pts;if(!(l===null||a.IsOpen))do{for(var p=l.Next;p!==a.Pts;){if(n.IntPoint.op_Equality(l.Pt,p.Pt)&&p.Next!==l&&p.Prev!==l){var _=l.Prev,A=p.Prev;l.Prev=A,A.Next=l,p.Prev=_,_.Next=p,a.Pts=l;var O=this.CreateOutRec();O.Pts=p,this.UpdateOutPtIdxs(O),this.Poly2ContainsPoly1(O.Pts,a.Pts)?(O.IsHole=!a.IsHole,O.FirstLeft=a,this.m_UsingPolyTree&&this.FixupFirstLefts2(O,a)):this.Poly2ContainsPoly1(a.Pts,O.Pts)?(O.IsHole=a.IsHole,a.IsHole=!O.IsHole,O.FirstLeft=a.FirstLeft,a.FirstLeft=O,this.m_UsingPolyTree&&this.FixupFirstLefts2(a,O)):(O.IsHole=a.IsHole,O.FirstLeft=a.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(a,O)),p=l}p=p.Next}l=l.Next}while(l!==a.Pts)}},n.Clipper.Area=function(s){if(!Array.isArray(s))return 0;var a=s.length;if(a<3)return 0;for(var l=0,p=0,_=a-1;p<a;++p)l+=(s[_].X+s[p].X)*(s[_].Y-s[p].Y),_=p;return-l*.5},n.Clipper.prototype.Area=function(s){var a=s;if(s===null)return 0;var l=0;do l=l+(s.Prev.Pt.X+s.Pt.X)*(s.Prev.Pt.Y-s.Pt.Y),s=s.Next;while(s!==a);return l*.5},n.Clipper.prototype.Area$1=function(s){return this.Area(s.Pts)},n.Clipper.SimplifyPolygon=function(s,a){var l=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPath(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,a,a),l},n.Clipper.SimplifyPolygons=function(s,a){typeof a>"u"&&(a=n.PolyFillType.pftEvenOdd);var l=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,a,a),l},n.Clipper.DistanceSqrd=function(s,a){var l=s.X-a.X,p=s.Y-a.Y;return l*l+p*p},n.Clipper.DistanceFromLineSqrd=function(s,a,l){var p=a.Y-l.Y,_=l.X-a.X,A=p*a.X+_*a.Y;return A=p*s.X+_*s.Y-A,A*A/(p*p+_*_)},n.Clipper.SlopesNearCollinear=function(s,a,l,p){return Math.abs(s.X-a.X)>Math.abs(s.Y-a.Y)?s.X>a.X==s.X<l.X?n.Clipper.DistanceFromLineSqrd(s,a,l)<p:a.X>s.X==a.X<l.X?n.Clipper.DistanceFromLineSqrd(a,s,l)<p:n.Clipper.DistanceFromLineSqrd(l,s,a)<p:s.Y>a.Y==s.Y<l.Y?n.Clipper.DistanceFromLineSqrd(s,a,l)<p:a.Y>s.Y==a.Y<l.Y?n.Clipper.DistanceFromLineSqrd(a,s,l)<p:n.Clipper.DistanceFromLineSqrd(l,s,a)<p},n.Clipper.PointsAreClose=function(s,a,l){var p=s.X-a.X,_=s.Y-a.Y;return p*p+_*_<=l},n.Clipper.ExcludeOp=function(s){var a=s.Prev;return a.Next=s.Next,s.Next.Prev=a,a.Idx=0,a},n.Clipper.CleanPolygon=function(s,a){typeof a>"u"&&(a=1.415);var l=s.length;if(l===0)return new Array;for(var p=new Array(l),_=0;_<l;++_)p[_]=new n.OutPt;for(var _=0;_<l;++_)p[_].Pt=s[_],p[_].Next=p[(_+1)%l],p[_].Next.Prev=p[_],p[_].Idx=0;for(var A=a*a,O=p[0];O.Idx===0&&O.Next!==O.Prev;)n.Clipper.PointsAreClose(O.Pt,O.Prev.Pt,A)?(O=n.Clipper.ExcludeOp(O),l--):n.Clipper.PointsAreClose(O.Prev.Pt,O.Next.Pt,A)?(n.Clipper.ExcludeOp(O.Next),O=n.Clipper.ExcludeOp(O),l-=2):n.Clipper.SlopesNearCollinear(O.Prev.Pt,O.Pt,O.Next.Pt,A)?(O=n.Clipper.ExcludeOp(O),l--):(O.Idx=1,O=O.Next);l<3&&(l=0);for(var Z=new Array(l),_=0;_<l;++_)Z[_]=new n.IntPoint1(O.Pt),O=O.Next;return p=null,Z},n.Clipper.CleanPolygons=function(s,a){for(var l=new Array(s.length),p=0,_=s.length;p<_;p++)l[p]=n.Clipper.CleanPolygon(s[p],a);return l},n.Clipper.Minkowski=function(s,a,l,p){var _=p?1:0,A=s.length,O=a.length,Z=new Array;if(l)for(var K=0;K<O;K++){for(var ht=new Array(A),At=0,Tt=s.length,Lt=s[At];At<Tt;At++,Lt=s[At])ht[At]=new n.IntPoint2(a[K].X+Lt.X,a[K].Y+Lt.Y);Z.push(ht)}else for(var K=0;K<O;K++){for(var ht=new Array(A),At=0,Tt=s.length,Lt=s[At];At<Tt;At++,Lt=s[At])ht[At]=new n.IntPoint2(a[K].X-Lt.X,a[K].Y-Lt.Y);Z.push(ht)}for(var re=new Array,K=0;K<O-1+_;K++)for(var At=0;At<A;At++){var pe=new Array;pe.push(Z[K%O][At%A]),pe.push(Z[(K+1)%O][At%A]),pe.push(Z[(K+1)%O][(At+1)%A]),pe.push(Z[K%O][(At+1)%A]),n.Clipper.Orientation(pe)||pe.reverse(),re.push(pe)}return re},n.Clipper.MinkowskiSum=function(s,a,l){if(a[0]instanceof Array){for(var _=a,O=new n.Paths,A=new n.Clipper,Z=0;Z<_.length;++Z){var K=n.Clipper.Minkowski(s,_[Z],!0,l);if(A.AddPaths(K,n.PolyType.ptSubject,!0),l){var p=n.Clipper.TranslatePath(_[Z],s[0]);A.AddPath(p,n.PolyType.ptClip,!0)}}return A.Execute(n.ClipType.ctUnion,O,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),O}else{var p=a,_=n.Clipper.Minkowski(s,p,!0,l),A=new n.Clipper;return A.AddPaths(_,n.PolyType.ptSubject,!0),A.Execute(n.ClipType.ctUnion,_,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),_}},n.Clipper.TranslatePath=function(s,a){for(var l=new n.Path,p=0;p<s.length;p++)l.push(new n.IntPoint2(s[p].X+a.X,s[p].Y+a.Y));return l},n.Clipper.MinkowskiDiff=function(s,a){var l=n.Clipper.Minkowski(s,a,!1,!0),p=new n.Clipper;return p.AddPaths(l,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),l},n.Clipper.PolyTreeToPaths=function(s){var a=new Array;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntAny,a),a},n.Clipper.AddPolyNodeToPaths=function(s,a,l){var p=!0;switch(a){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:p=!s.IsOpen;break;default:break}s.m_polygon.length>0&&p&&l.push(s.m_polygon);for(var _=0,A=s.Childs(),O=A.length,Z=A[_];_<O;_++,Z=A[_])n.Clipper.AddPolyNodeToPaths(Z,a,l)},n.Clipper.OpenPathsFromPolyTree=function(s){for(var a=new n.Paths,l=0,p=s.ChildCount();l<p;l++)s.Childs()[l].IsOpen&&a.push(s.Childs()[l].m_polygon);return a},n.Clipper.ClosedPathsFromPolyTree=function(s){var a=new n.Paths;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntClosed,a),a},fe(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(s,a){typeof s>"u"&&(s=2),typeof a>"u"&&(a=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=s,this.ArcTolerance=a,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(s,a,l){var p=s.length-1;if(!(p<0)){var _=new n.PolyNode;if(_.m_jointype=a,_.m_endtype=l,l===n.EndType.etClosedLine||l===n.EndType.etClosedPolygon)for(;p>0&&n.IntPoint.op_Equality(s[0],s[p]);)p--;_.m_polygon.push(s[0]);for(var A=0,O=0,Z=1;Z<=p;Z++)n.IntPoint.op_Inequality(_.m_polygon[A],s[Z])&&(A++,_.m_polygon.push(s[Z]),(s[Z].Y>_.m_polygon[O].Y||s[Z].Y===_.m_polygon[O].Y&&s[Z].X<_.m_polygon[O].X)&&(O=A));if(!(l===n.EndType.etClosedPolygon&&A<2)&&(this.m_polyNodes.AddChild(_),l===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,O);else{var K=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(_.m_polygon[O].Y>K.Y||_.m_polygon[O].Y===K.Y&&_.m_polygon[O].X<K.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,O))}}},n.ClipperOffset.prototype.AddPaths=function(s,a,l){for(var p=0,_=s.length;p<_;p++)this.AddPath(s[p],a,l)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];(a.m_endtype===n.EndType.etClosedPolygon||a.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(a.m_polygon))&&a.m_polygon.reverse()}else for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];a.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(a.m_polygon)&&a.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(s,a){var l=a.X-s.X,p=a.Y-s.Y;if(l===0&&p===0)return new n.DoublePoint2(0,0);var _=1/Math.sqrt(l*l+p*p);return l*=_,p*=_,new n.DoublePoint2(p,-l)},n.ClipperOffset.prototype.DoOffset=function(s){if(this.m_destPolys=new Array,this.m_delta=s,n.ClipperBase.near_zero(s)){for(var a=0;a<this.m_polyNodes.ChildCount();a++){var l=this.m_polyNodes.Childs()[a];l.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(l.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(s)*n.ClipperOffset.def_arc_tolerance?p=Math.abs(s)*n.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var _=3.14159265358979/Math.acos(1-p/Math.abs(s));this.m_sin=Math.sin(n.ClipperOffset.two_pi/_),this.m_cos=Math.cos(n.ClipperOffset.two_pi/_),this.m_StepsPerRad=_/n.ClipperOffset.two_pi,s<0&&(this.m_sin=-this.m_sin);for(var a=0;a<this.m_polyNodes.ChildCount();a++){var l=this.m_polyNodes.Childs()[a];this.m_srcPoly=l.m_polygon;var A=this.m_srcPoly.length;if(!(A===0||s<=0&&(A<3||l.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,A===1){if(l.m_jointype===n.JoinType.jtRound)for(var O=1,Z=0,K=1;K<=_;K++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+O*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Z*s)));var ht=O;O=O*this.m_cos-this.m_sin*Z,Z=ht*this.m_sin+Z*this.m_cos}else for(var O=-1,Z=-1,K=0;K<4;++K)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+O*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Z*s))),O<0?O=1:Z<0?Z=1:O=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var K=0;K<A-1;K++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[K],this.m_srcPoly[K+1]));if(l.m_endtype===n.EndType.etClosedLine||l.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[A-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[A-2])),l.m_endtype===n.EndType.etClosedPolygon){for(var At=A-1,K=0;K<A;K++)At=this.OffsetPoint(K,At,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(l.m_endtype===n.EndType.etClosedLine){for(var At=A-1,K=0;K<A;K++)At=this.OffsetPoint(K,At,l.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var Tt=this.m_normals[A-1],K=A-1;K>0;K--)this.m_normals[K]=new n.DoublePoint2(-this.m_normals[K-1].X,-this.m_normals[K-1].Y);this.m_normals[0]=new n.DoublePoint2(-Tt.X,-Tt.Y),At=0;for(var K=A-1;K>=0;K--)At=this.OffsetPoint(K,At,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var At=0,K=1;K<A-1;++K)At=this.OffsetPoint(K,At,l.m_jointype);var Lt;if(l.m_endtype===n.EndType.etOpenButt){var K=A-1;Lt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[K].X+this.m_normals[K].X*s),n.ClipperOffset.Round(this.m_srcPoly[K].Y+this.m_normals[K].Y*s)),this.m_destPoly.push(Lt),Lt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[K].X-this.m_normals[K].X*s),n.ClipperOffset.Round(this.m_srcPoly[K].Y-this.m_normals[K].Y*s)),this.m_destPoly.push(Lt)}else{var K=A-1;At=A-2,this.m_sinA=0,this.m_normals[K]=new n.DoublePoint2(-this.m_normals[K].X,-this.m_normals[K].Y),l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(K,At):this.DoRound(K,At)}for(var K=A-1;K>0;K--)this.m_normals[K]=new n.DoublePoint2(-this.m_normals[K-1].X,-this.m_normals[K-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),At=A-1;for(var K=At-1;K>0;--K)At=this.OffsetPoint(K,At,l.m_jointype);l.m_endtype===n.EndType.etOpenButt?(Lt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*s)),this.m_destPoly.push(Lt),Lt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*s)),this.m_destPoly.push(Lt)):(At=1,this.m_sinA=0,l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var s=arguments,a=s[0]instanceof n.PolyTree;if(a){var l=s[0],p=s[1];l.Clear(),this.FixOrientations(),this.DoOffset(p);var _=new n.Clipper(0);if(_.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)_.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var A=n.Clipper.GetBounds(this.m_destPolys),O=new n.Path;if(O.push(new n.IntPoint2(A.left-10,A.bottom+10)),O.push(new n.IntPoint2(A.right+10,A.bottom+10)),O.push(new n.IntPoint2(A.right+10,A.top-10)),O.push(new n.IntPoint2(A.left-10,A.top-10)),_.AddPath(O,n.PolyType.ptSubject,!0),_.ReverseSolution=!0,_.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.ChildCount()===1&&l.Childs()[0].ChildCount()>0){var Z=l.Childs()[0];l.Childs()[0]=Z.Childs()[0],l.Childs()[0].m_Parent=l;for(var K=1;K<Z.ChildCount();K++)l.AddChild(Z.Childs()[K])}else l.Clear()}}else{var l=s[0],p=s[1];n.Clear(l),this.FixOrientations(),this.DoOffset(p);var _=new n.Clipper(0);if(_.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)_.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var A=n.Clipper.GetBounds(this.m_destPolys),O=new n.Path;O.push(new n.IntPoint2(A.left-10,A.bottom+10)),O.push(new n.IntPoint2(A.right+10,A.bottom+10)),O.push(new n.IntPoint2(A.right+10,A.top-10)),O.push(new n.IntPoint2(A.left-10,A.top-10)),_.AddPath(O,n.PolyType.ptSubject,!0),_.ReverseSolution=!0,_.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.length>0&&l.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(s,a,l){if(this.m_sinA=this.m_normals[a].X*this.m_normals[s].Y-this.m_normals[s].X*this.m_normals[a].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[a].X*this.m_normals[s].X+this.m_normals[s].Y*this.m_normals[a].Y;if(p>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),a}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[s])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)));else switch(l){case n.JoinType.jtMiter:{var _=1+(this.m_normals[s].X*this.m_normals[a].X+this.m_normals[s].Y*this.m_normals[a].Y);_>=this.m_miterLim?this.DoMiter(s,a,_):this.DoSquare(s,a);break}case n.JoinType.jtSquare:this.DoSquare(s,a);break;case n.JoinType.jtRound:this.DoRound(s,a);break}return a=s,a},n.ClipperOffset.prototype.DoSquare=function(s,a){var l=Math.tan(Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[a].X-this.m_normals[a].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[a].Y+this.m_normals[a].X*l)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[s].X+this.m_normals[s].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[s].Y-this.m_normals[s].X*l))))},n.ClipperOffset.prototype.DoMiter=function(s,a,l){var p=this.m_delta/l;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+(this.m_normals[a].X+this.m_normals[s].X)*p),n.ClipperOffset.Round(this.m_srcPoly[s].Y+(this.m_normals[a].Y+this.m_normals[s].Y)*p)))},n.ClipperOffset.prototype.DoRound=function(s,a){for(var l=Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y),p=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(l))),1),_=this.m_normals[a].X,A=this.m_normals[a].Y,O,Z=0;Z<p;++Z)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+_*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+A*this.m_delta))),O=_,_=_*this.m_cos-this.m_sin*A,A=O*this.m_sin+A*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)))},n.Error=function(s){try{throw new Error(s)}catch(a){alert(a.message)}},n.JS={},n.JS.AreaOfPolygon=function(s,a){return a||(a=1),n.Clipper.Area(s)/(a*a)},n.JS.AreaOfPolygons=function(s,a){a||(a=1);for(var l=0,p=0;p<s.length;p++)l+=n.Clipper.Area(s[p]);return l/(a*a)},n.JS.BoundsOfPath=function(s,a){return n.JS.BoundsOfPaths([s],a)},n.JS.BoundsOfPaths=function(s,a){a||(a=1);var l=n.Clipper.GetBounds(s);return l.left/=a,l.bottom/=a,l.right/=a,l.top/=a,l},n.JS.Clean=function(p,a){if(!(p instanceof Array))return[];var l=p[0]instanceof Array,p=n.JS.Clone(p);if(typeof a!="number"||a===null)return n.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||a<0)return p;l||(p=[p]);for(var _=p.length,A,O,Z,K,ht,At,Tt,Lt=[],re=0;re<_;re++)if(O=p[re],A=O.length,A!==0){if(A<3){Z=O,Lt.push(Z);continue}for(Z=O,K=a*a,ht=O[0],At=1,Tt=1;Tt<A;Tt++)(O[Tt].X-ht.X)*(O[Tt].X-ht.X)+(O[Tt].Y-ht.Y)*(O[Tt].Y-ht.Y)<=K||(Z[At]=O[Tt],ht=O[Tt],At++);ht=O[At-1],(O[0].X-ht.X)*(O[0].X-ht.X)+(O[0].Y-ht.Y)*(O[0].Y-ht.Y)<=K&&At--,At<A&&Z.splice(At,A-At),Z.length&&Lt.push(Z)}return!l&&Lt.length?Lt=Lt[0]:!l&&Lt.length===0?Lt=[]:l&&Lt.length===0&&(Lt=[[]]),Lt},n.JS.Clone=function(s){if(!(s instanceof Array))return[];if(s.length===0)return[];if(s.length===1&&s[0].length===0)return[[]];var a=s[0]instanceof Array;a||(s=[s]);var l=s.length,p,_,A,O,Z=new Array(l);for(_=0;_<l;_++){for(p=s[_].length,O=new Array(p),A=0;A<p;A++)O[A]={X:s[_][A].X,Y:s[_][A].Y};Z[_]=O}return a||(Z=Z[0]),Z},n.JS.Lighten=function(s,a){if(!(s instanceof Array))return[];if(typeof a!="number"||a===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(s);if(s.length===0||s.length===1&&s[0].length===0||a<0)return n.JS.Clone(s);var l=s[0]instanceof Array;l||(s=[s]);var p,_,A,O,Z,K,ht,At,Tt,Lt,re,pe,xe,Be,pn,Vn,Oi,Fr=s.length,Bo=a*a,Si=[];for(p=0;p<Fr;p++)if(A=s[p],K=A.length,K!==0){for(O=0;O<1e6;O++){for(Z=[],K=A.length,A[K-1].X!==A[0].X||A[K-1].Y!==A[0].Y?(pe=1,A.push({X:A[0].X,Y:A[0].Y}),K=A.length):pe=0,re=[],_=0;_<K-2;_++)ht=A[_],Tt=A[_+1],At=A[_+2],Vn=ht.X,Oi=ht.Y,xe=At.X-Vn,Be=At.Y-Oi,(xe!==0||Be!==0)&&(pn=((Tt.X-Vn)*xe+(Tt.Y-Oi)*Be)/(xe*xe+Be*Be),pn>1?(Vn=At.X,Oi=At.Y):pn>0&&(Vn+=xe*pn,Oi+=Be*pn)),xe=Tt.X-Vn,Be=Tt.Y-Oi,Lt=xe*xe+Be*Be,Lt<=Bo&&(re[_+1]=1,_++);for(Z.push({X:A[0].X,Y:A[0].Y}),_=1;_<K-1;_++)re[_]||Z.push({X:A[_].X,Y:A[_].Y});if(Z.push({X:A[K-1].X,Y:A[K-1].Y}),pe&&A.pop(),re.length)A=Z;else break}K=Z.length,Z[K-1].X===Z[0].X&&Z[K-1].Y===Z[0].Y&&Z.pop(),Z.length>2&&Si.push(Z)}return l||(Si=Si[0]),typeof Si>"u"&&(Si=[]),Si},n.JS.PerimeterOfPath=function(s,a,l){if(typeof s>"u")return 0;var p=Math.sqrt,_=0,A,O,Z=0,K=0,ht=0,At=0,Tt=s.length;if(Tt<2)return 0;for(a&&(s[Tt]=s[0],Tt++);--Tt;)A=s[Tt],Z=A.X,K=A.Y,O=s[Tt-1],ht=O.X,At=O.Y,_+=p((Z-ht)*(Z-ht)+(K-At)*(K-At));return a&&s.pop(),_/l},n.JS.PerimeterOfPaths=function(s,a,l){l||(l=1);for(var p=0,_=0;_<s.length;_++)p+=n.JS.PerimeterOfPath(s[_],a,l);return p},n.JS.ScaleDownPath=function(s,a){var l,p;for(a||(a=1),l=s.length;l--;)p=s[l],p.X=p.X/a,p.Y=p.Y/a},n.JS.ScaleDownPaths=function(s,a){var l,p,_;for(a||(a=1),l=s.length;l--;)for(p=s[l].length;p--;)_=s[l][p],_.X=_.X/a,_.Y=_.Y/a},n.JS.ScaleUpPath=function(s,a){var l,p,_=Math.round;for(a||(a=1),l=s.length;l--;)p=s[l],p.X=_(p.X*a),p.Y=_(p.Y*a)},n.JS.ScaleUpPaths=function(s,a){var l,p,_,A=Math.round;for(a||(a=1),l=s.length;l--;)for(p=s[l].length;p--;)_=s[l][p],_.X=A(_.X*a),_.Y=A(_.Y*a)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(s,a){var l=new n.ExPolygon;l.outer=s.Contour();var p=s.Childs(),_=p.length;l.holes=new Array(_);var A,O,Z,K,ht,At;for(Z=0;Z<_;Z++)for(A=p[Z],l.holes[Z]=A.Contour(),K=0,ht=A.Childs(),At=ht.length;K<At;K++)O=ht[K],n.JS.AddOuterPolyNodeToExPolygons(O,a);a.push(l)},n.JS.ExPolygonsToPaths=function(s){var a,l,p,_,A=new n.Paths;for(a=0,p=s.length;a<p;a++)for(A.push(s[a].outer),l=0,_=s[a].holes.length;l<_;l++)A.push(s[a].holes[l]);return A},n.JS.PolyTreeToExPolygons=function(s){var a=new n.ExPolygons,l,p,_,A;for(p=0,_=s.Childs(),A=_.length;p<A;p++)l=_[p],n.JS.AddOuterPolyNodeToExPolygons(l,a);return a}})()});function Xo(n,t,e,i=Qe.default.PolyFillType.pftNonZero){let r=new Qe.default.Clipper;r.AddPaths(Go(t),Qe.default.PolyType.ptSubject,!0),e&&r.AddPaths(Go(e),Qe.default.PolyType.ptClip,!0);let o=new Qe.default.Paths;return r.Execute(n,o,i,i),gc(o)}function Tu(n,t=256){let e=n;for(;e.length>t;){let i=[];for(let r=0;r<e.length;r+=t)i.push(hr(e.slice(r,r+t)));if(e=i.flat(),i.length===1)return e}return hr(e)}function tn(n,t){if(!n.length)return[];let e=new Qe.default.ClipperOffset(2,Nm);e.AddPaths(Go(n),Qe.default.JoinType.jtRound,Qe.default.EndType.etClosedPolygon);let i=new Qe.default.Paths;return e.Execute(i,t*kr),gc(i)}function Hn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function Ui(n){let t=1/0,e=1/0,i=-1/0,r=-1/0;for(let o of n)for(let[c,u]of o)c<t&&(t=c),c>i&&(i=c),u<e&&(e=u),u>r&&(r=u);return{minX:t,minY:e,maxX:i,maxY:r}}function Bi(n){if(!n.length)return[];let t=new Qe.default.Clipper;t.AddPaths(Go(n),Qe.default.PolyType.ptSubject,!0);let e=new Qe.default.PolyTree;t.Execute(Qe.default.ClipType.ctUnion,e,Qe.default.PolyFillType.pftNonZero,Qe.default.PolyFillType.pftNonZero);let i=[],r=o=>{for(let c of o.Childs()){if(c.IsHole()){r(c);continue}let u=c.Childs().map(f=>f.Contour());i.push(gc([c.Contour(),...u]));for(let f of c.Childs())r(f)}};return r(e),i}function ks([n,t],e){let i=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[c,u]=e[r],[f,d]=e[o];u>t!=d>t&&n<(f-c)*(t-u)/(d-u)+c&&(i=!i)}return i}function ui(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(Hn(e))>t)}function Dm(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let u=1;u<n.length;u++){let f=(n[u][0]-n[0][0])**2+(n[u][1]-n[0][1])**2;f>i&&(i=f,e=u)}let r=u=>{let f=new Uint8Array(u.length);f[0]=f[u.length-1]=1;let d=[[0,u.length-1]];for(;d.length;){let[g,y]=d.pop(),[v,b]=u[g],[E,P]=u[y],S=Math.hypot(E-v,P-b)||1e-12,M=-1,F=t;for(let H=g+1;H<y;H++){let L=Math.abs((E-v)*(b-u[H][1])-(v-u[H][0])*(P-b))/S;L>F&&(F=L,M=H)}M>0&&(f[M]=1,d.push([g,M],[M,y]))}return u.filter((g,y)=>f[y])},o=r(n.slice(0,e+1)),c=r([...n.slice(e),n[0]]);return[...o,...c.slice(1,-1)]}var Qe,kr,Nm,Go,gc,Wo,hr,zr,Bs,Zn,zs,Vs=Sn(()=>{Qe=Mu(Eu(),1),kr=1e3,Nm=.01*kr,Go=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*kr),Y:Math.round(i*kr)}))),gc=n=>n.map(t=>t.map(e=>[e.X/kr,e.Y/kr]));Wo=n=>Xo(Qe.default.ClipType.ctUnion,n,null,Qe.default.PolyFillType.pftEvenOdd),hr=n=>Xo(Qe.default.ClipType.ctUnion,n,null);zr=(n,t)=>Xo(Qe.default.ClipType.ctDifference,n,t),Bs=(n,t)=>Xo(Qe.default.ClipType.ctIntersection,n,t);Zn=n=>n.reduce((t,e)=>t+Hn(e),0);zs=(n,t)=>n.map(e=>Dm(e,t)).filter(e=>e.length>=3)});function Pu(n){let t=[],e=[],i=[],r=[];for(let o of n.meshes||[]){let c=t.length/3,u=e.length/3,f=o.attributes.position.array;for(let g=0;g<f.length;g++)t.push(f[g]);let d=o.index.array;for(let g=0;g<d.length;g++)e.push(d[g]+c);for(let g of o.brep_faces||[])i.push({first:g.first+u,last:g.last+u});o.name&&r.push(o.name)}return{positions:Float64Array.from(t),indices:Uint32Array.from(e),faces:i,solids:(n.meshes||[]).length,names:r}}function Hs(n){let t=n.positions,e=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]<e[o]&&(e[o]=t[r+o]),t[r+o]>i[o]&&(i[o]=t[r+o]);return{min:e,max:i,size:[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}}function vc(n,t){let e=n.positions,i=n.indices,r=i[t*3]*3,o=i[t*3+1]*3,c=i[t*3+2]*3,u=e[o]-e[r],f=e[o+1]-e[r+1],d=e[o+2]-e[r+2],g=e[c]-e[r],y=e[c+1]-e[r+1],v=e[c+2]-e[r+2],b=f*v-d*y,E=d*g-u*v,P=u*y-f*g,S=Math.hypot(b,E,P);return S>0?[b/S,E/S,P/S]:[0,0,0]}function Om(n){let[t,e,i]=n;if(i>.999999)return[1,0,0,0,1,0,0,0,1];if(i<-.999999)return[1,0,0,0,-1,0,0,0,-1];let r=e,o=-t,c=Math.hypot(r,o);r/=c,o/=c;let u=i,f=c,d=1-u;return[d*r*r+u,d*r*o,o*f,d*r*o,d*o*o+u,-r*f,-o*f,r*f,u]}function yc(n,t){let e=n.positions,i=new Float64Array(e.length);for(let c=0;c<e.length;c+=3){let u=e[c],f=e[c+1],d=e[c+2];i[c]=t[0]*u+t[1]*f+t[2]*d,i[c+1]=t[3]*u+t[4]*f+t[5]*d,i[c+2]=t[6]*u+t[7]*f+t[8]*d}let r={positions:i,indices:n.indices,faces:n.faces},{min:o}=Hs(r);for(let c=0;c<i.length;c+=3)i[c]-=o[0],i[c+1]-=o[1],i[c+2]-=o[2];for(let c=0;c<i.length;c++)i[c]=Math.round(i[c]*1e6)/1e6;return r}function ur(n,t=.001){let{max:e,size:i}=Hs(n),r=e[2],o=new Set,c=0,u=0,f=0,d=n.positions,g=n.indices,y=g.length/3;for(let E=0;E<y;E++){let P=g[E*3]*3,S=g[E*3+1]*3,M=g[E*3+2]*3,F=vc(n,E),H=d[S]-d[P],L=d[S+1]-d[P+1],U=d[S+2]-d[P+2],B=d[M]-d[P],q=d[M+1]-d[P+1],C=d[M+2]-d[P+2],k=Math.hypot(L*C-U*q,U*B-H*C,H*q-L*B)/2;f+=k;let Y=(d[P+2]+d[S+2]+d[M+2])/3;F[2]>1-t?o.add(Math.round(Y*1e3)/1e3):F[2]<-(1-t)?Y>t&&(c+=k):Math.abs(F[2])>t&&(F[2]<0?c+=k:u+=k)}let v=c>.001*f,b=v?Um(n):{inside:0,total:0};return{size:i,top:r,floors:[...o].sort((E,P)=>P-E),undercut:v&&b.inside>Au,squareEdges:v&&b.inside<=Au,sloped:u>.001*f,undercutArea:c,slopedArea:u,missed:b.inside,missedTotal:b.total}}function Fm(n){let t=n.positions,e=n.indices,i=0;for(let r=0;r<e.length;r+=3){let o=e[r]*3,c=e[r+1]*3,u=e[r+2]*3;i+=t[o]*(t[c+1]*t[u+2]-t[c+2]*t[u+1])-t[o+1]*(t[c]*t[u+2]-t[c+2]*t[u])+t[o+2]*(t[c]*t[u+1]-t[c+1]*t[u])}return Math.abs(i/6)}function Um(n){let{min:t,max:e}=Hs(n),i=e[0]-t[0],r=e[1]-t[1],o=Math.max(.05,Math.sqrt(i*r/25e4)),c={x0:t[0],y0:t[1],cell:o,nx:Math.ceil(i/o)+1,ny:Math.ceil(r/o)+1},{h:u,mat:f}=Bm(n,c),d=hr(Bi(Wo(xc(n,t[2]+.01))).map(S=>S[0])),g=Cu(d,c),y=Cu(tn(d,Math.min(3,.15*Math.min(i,r))),c),v=0,b=0;for(let S=0;S<u.length;S++){if(!(u[S]>t[2]))continue;let M=Math.max(0,u[S]-t[2]-f[S]);v+=M,(g[S]||!y[S])&&(b+=M)}let E=Fm(n),P=o*o;return E>0?{inside:b*P/E,total:v*P/E}:{inside:0,total:0}}function Bm(n,t){let e=t.nx*t.ny,i=new Float32Array(e).fill(-1/0),r=new Float32Array(e),o=n.positions,c=n.indices;for(let u=0;u<c.length;u+=3){let f=c[u]*3,d=c[u+1]*3,g=c[u+2]*3,y=o[f],v=o[f+1],b=o[f+2],E=o[d],P=o[d+1],S=o[d+2],M=o[g],F=o[g+1],H=o[g+2],L=(P-F)*(y-M)+(M-E)*(v-F);if(Math.abs(L)<1e-12)continue;let U=(E-y)*(F-v)-(P-v)*(M-y)>0?1:-1,B=Math.max(0,Math.ceil((Math.min(y,E,M)-t.x0)/t.cell)),q=Math.min(t.nx-1,Math.floor((Math.max(y,E,M)-t.x0)/t.cell)),C=Math.max(0,Math.ceil((Math.min(v,P,F)-t.y0)/t.cell)),k=Math.min(t.ny-1,Math.floor((Math.max(v,P,F)-t.y0)/t.cell));for(let Y=C;Y<=k;Y++)for(let nt=B;nt<=q;nt++){let rt=t.x0+(nt+5e-4)*t.cell,et=t.y0+(Y+7e-4)*t.cell,Q=((P-F)*(rt-M)+(M-E)*(et-F))/L,tt=((F-v)*(rt-M)+(y-M)*(et-F))/L,dt=1-Q-tt;if(Q<0||tt<0||dt<0)continue;let X=Q*b+tt*S+dt*H,pt=Y*t.nx+nt;X>i[pt]&&(i[pt]=X),r[pt]+=U*X}}return{h:i,mat:r}}function Cu(n,t){let e=new Uint8Array(t.nx*t.ny);for(let i=0;i<t.ny;i++){let r=t.y0+i*t.cell,o=[];for(let c of n)for(let u=0;u<c.length;u++){let[f,d]=c[u],[g,y]=c[(u+1)%c.length];d<=r!=y<=r&&o.push(f+(r-d)/(y-d)*(g-f))}o.sort((c,u)=>c-u);for(let c=0;c+1<o.length;c+=2){let u=Math.max(0,Math.ceil((o[c]-t.x0)/t.cell)),f=Math.min(t.nx-1,Math.floor((o[c+1]-t.x0)/t.cell));for(let d=u;d<=f;d++)e[i*t.nx+d]=1}}return e}function xc(n,t){let e=n.positions,i=n.indices,r=[],o=i.length/3;for(let c=0;c<o;c++){let u=[i[c*3]*3,i[c*3+1]*3,i[c*3+2]*3],f=[];for(let d=0;d<3;d++){let g=u[d],y=u[(d+1)%3],v=e[g+2]-t,b=e[y+2]-t;if(v<0!=b<0){let E=v/(v-b);f.push([e[g]+(e[y]-e[g])*E,e[g+1]+(e[y+1]-e[g+1])*E])}}f.length===2&&r.push(f)}return km(r)}function km(n){let t=([o,c])=>`${Math.round(o*1e4)},${Math.round(c*1e4)}`,e=new Map;n.forEach((o,c)=>{for(let u of[0,1]){let f=t(o[u]);e.has(f)||e.set(f,[]),e.get(f).push(c)}});let i=new Uint8Array(n.length),r=[];for(let o=0;o<n.length;o++){if(i[o])continue;i[o]=1;let c=[n[o][0],n[o][1]],u=t(n[o][0]),f=n[o][1];for(let d=0;d<n.length;d++){let g=t(f);if(g===u)break;let y=(e.get(g)||[]).find(b=>!i[b]);if(y===void 0)break;i[y]=1;let v=n[y];f=t(v[0])===g?v[1]:v[0],t(f)!==u&&c.push(f)}c.length>=3&&r.push(c)}return r}function Iu(n){let t={};for(let r of Object.keys(_c)){let o=ur(qo(n,r));t[r]={reachable:!o.undercut,missed:o.missed,missedTotal:o.missedTotal,undercutArea:o.undercutArea,slopedArea:o.slopedArea,height:o.size[2]}}let e=Object.keys(_c),i=e.slice().sort((r,o)=>{let c=t[r],u=t[o];return(c.reachable===u.reachable?0:c.reachable?-1:1)||(Math.abs(c.missed-u.missed)>1e-4?c.missed-u.missed:0)||(Math.abs(c.missedTotal-u.missedTotal)>1e-4?c.missedTotal-u.missedTotal:0)||(Math.abs(c.slopedArea-u.slopedArea)>1e-6?c.slopedArea-u.slopedArea:0)||(Math.abs(c.height-u.height)>1e-6?c.height-u.height:0)||e.indexOf(r)-e.indexOf(o)});if(!i.some(r=>t[r].reachable))for(let r of e)t[r].reachable=!0;return{sides:t,best:i[0]}}var _c,qo,Au,Mc=Sn(()=>{Vs();_c={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],left:[-1,0,0],right:[1,0,0]};qo=(n,t)=>yc(n,Om(typeof t=="string"?_c[t]:t));Au=.05});function Ru(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return zm.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t||"flat"}function dr(n,t){return(typeof t=="string"?t:t?.mode)==="toolId"?n.toolId??n.id:n.toolNumber?n.toolNumber:t?.manual?.get(n.id)??n.toolId??n.id}function Lu(n,t,e=0,i=null){if(n==="toolId")return{mode:n};let r=new Set(t.filter(f=>f.toolNumber).map(f=>f.toolNumber));for(let f=1;f<=e;f++)r.add(f);i&&r.add(i);let o=new Map,c=t.filter(f=>!f.toolNumber);for(let f of c){let d=f.toolId??f.id;d>e&&!r.has(d)&&(o.set(f.id,d),r.add(d))}let u=e+1;for(let f of c)if(!o.has(f.id)){for(;r.has(u);)u++;o.set(f.id,u),r.add(u)}return{mode:n,manual:o}}function Nu(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${Ru(t)}`,kind:Ru(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2}))}function Du(n,t,e,i={}){let r=fr[t]||fr.mdf,o=Gn[e]||Gn.balanced,c=i.maxRpm||24e3,u=i.minRpm||0,f=Math.round(Math.min(c,Math.max(u,r.rpm))),d=Math.min(r.maxChip,r.chip*n.diameter),g=Math.min(i.maxFeed||4e3,4e3),y=Math.round(Math.min(g,Math.max(150,f*n.flutes*d*o.feed)));return{rpm:f,feed:y,plunge:Math.round(Math.max(60,y*.3)),stepdown:Math.max(.05,n.diameter*r.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,r.stepover*o.stepover)),rampAngle:r.ramp}}var fr,Gn,zm,ki,Gs=Sn(()=>{fr={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},Gn={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},zm=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"]);ki=n=>n==="aluminum"?{height:1,length:1}:{height:2,length:2}});var zi={};xu(zi,{INCH:()=>Vm,len:()=>Sc,num:()=>$o,toMm:()=>Gm,unitsFrom:()=>Hm});function $o(n,t="mm",e=t==="in"?3:1){let i=t==="in"?n/25.4:n;return(Math.round(i*10**e)/10**e).toLocaleString("en-US",{maximumFractionDigits:e})}var Vm,Hm,Sc,Gm,bc=Sn(()=>{Vm=25.4,Hm=n=>n==="imperial"?"in":"mm";Sc=(n,t="mm",e)=>`${$o(n,t,e)} ${t}`,Gm=(n,t="mm")=>t==="in"?n*25.4:n});function Tc(n){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:2,extraTop:1,width:n.size[0]+4,depth:n.size[1]+4,thickness:n.size[2]+1},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,...ki("mdf")},throughDepth:.3,disabled:{},toolOverride:{}}}function Zo(n,t){let[e,i,r]=n.size,o=t.stock,c=o.fit?e+2*o.margin:Math.max(e,o.width),u=o.fit?i+2*o.margin:Math.max(i,o.depth),f=o.fit?r+o.extraTop:Math.max(r,o.thickness);return{minX:(e-c)/2,minY:(i-u)/2,maxX:(e+c)/2,maxY:(i+u)/2,bottom:0,top:f,width:c,depth:u,thickness:f}}function Ac(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,r=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(r=n.minY),e.includes("back")&&(r=n.maxY),{x:i,y:r,z:t.z==="bed"?n.bottom:n.top}}function Xm(n){let t=n.positions,e=n.indices,i=[];for(let r=0;r<e.length/3;r++){if(vc(n,r)[2]>-.001)continue;let c=[e[r*3]*3,e[r*3+1]*3,e[r*3+2]*3],u=c.map(f=>[t[f],t[f+1]]);Math.abs(Hn(u))<1e-6||i.push({loop:Hn(u)>0?u:u.reverse(),maxZ:Math.max(...c.map(f=>t[f+2]))})}return i}function Ym(n){if(n.length!==1)return null;let t=n[0];if(t.length<12)return null;let e=Ui([t]),i=(e.minX+e.maxX)/2,r=(e.minY+e.maxY)/2,o=t.map(([u,f])=>Math.hypot(u-i,f-r)),c=o.reduce((u,f)=>u+f,0)/o.length;return o.every(u=>Math.abs(u-c)<Math.max(.03,c*.01))?{x:i,y:r,d:2*c}:null}function Uu(n,t,e,i={}){let r=X=>Sc(X,e.units),o=X=>$o(X,e.units),c=ur(n),u=Zo(c,e),f=Gn[e.finish]||Gn.balanced,d=[];c.squareEdges&&d.push({kind:"edges",text:"Chamfers or rounded edges face down on this side, so they are left square."}),c.undercut&&d.push({kind:"undercut",text:"Some features face the other side, so they can\u2019t be reached from the top. Cut this side, then turn the part over for a second setup."}),c.sloped&&d.push({kind:"sloped",text:"Sloped or curved faces (chamfers, fillets) aren\u2019t cut in 3D yet, so they are left square."});let g=t.filter(X=>X.kind==="flat").sort((X,pt)=>pt.diameter-X.diameter),y=t.filter(X=>X.kind==="drill"),v=t.filter(X=>X.kind==="surfacing").sort((X,pt)=>pt.diameter-X.diameter),b=new Map,E=X=>(X&&b.set(X.id,(b.get(X.id)||0)+1),X),P=e.material==="aluminum"?8:12.8,S=c.undercutArea>0?Xm(n):[],M=new Map,F=X=>{if(M.has(X))return M.get(X);let pt=Wo(xc(n,X+Vr)),ut=S.filter(yt=>yt.maxZ>X+Vr).map(yt=>yt.loop),gt=ut.length?tn(tn(hr([...pt,...Tu(ut)]),.002),-.002):pt;return M.set(X,gt),gt},H=F(0),L=hr(Bi(H).map(X=>X[0])),U=[],B=1,q=X=>(X.id=X.id||`op${B++}`,U.push(X),X);function C(X,pt,ut){let gt=g.filter(Wt=>Wt.diameter<=P&&Xs(Wt,pt)&&tn(X,-(Wt.diameter/2+ut)).length);if(!gt.length)return null;let yt=gt.map(Wt=>({t:Wt,c:qm(X,Wt.diameter/2)})),Ft=yt.find(Wt=>Wt.c>=.85)||yt.reduce((Wt,ie)=>ie.c>Wt.c?ie:Wt);return(yt.find(Wt=>b.has(Wt.t.id)&&Wt.c>=Math.min(.85,Ft.c*.98))||Ft).t}function k(X,pt,ut){let gt=ui(zr(X,Ec(X,pt.diameter/2)),Vi);if(Zn(gt)<Vi)return null;let yt=g.filter(Wt=>Wt.diameter<pt.diameter-1e-6&&Xs(Wt,ut));if(!yt.length)return{tool:null,left:gt};let Ft=Zn(gt);return{tool:yt.find(Wt=>Zn(ui(zr(X,Ec(X,Wt.diameter/2)),Vi))<Ft*.25)||yt[yt.length-1],left:gt}}let Y=X=>Du(X,e.material,e.finish,i);if(u.top>c.top+Vr){let X=v[0]||g[0];X&&q({id:"face",kind:"face",label:"Flatten the top",tool:E(X),zTop:u.top,zBottom:c.top,region:Ou(u),detail:`${r(u.top-c.top)} off the top`})}let nt=[c.top,...c.floors.filter(X=>X<c.top-Vr&&X>Vr),0],rt=[],et=(X,pt)=>{let ut=Zn(X),gt=Zn(pt);if(Math.abs(ut-gt)>Math.max(Vi,ut*.005))return!1;let yt=Ui(X),Ft=Ui(pt);return Math.abs(yt.minX-Ft.minX)<.01&&Math.abs(yt.maxX-Ft.maxX)<.01&&Math.abs(yt.minY-Ft.minY)<.01&&Math.abs(yt.maxY-Ft.maxY)<.01};for(let X=1;X<nt.length;X++){let pt=nt[X-1],ut=nt[X],gt=zr(Ou(u),F(ut));for(let yt of Bi(gt)){if(Zn(yt)<Vi||!tn(yt,-.05).length)continue;let Ft=Ui([yt[0]]),zt=Ft.minX<=u.minX+.001||Ft.maxX>=u.maxX-.001||Ft.minY<=u.minY+.001||Ft.maxY>=u.maxY-.001,Wt=null;if(zt&&(ut===0||(Wt=ui(Bs(yt,L),Vi),Zn(Wt)<Vi)))continue;let ie=zt?Wt:yt,ce=rt.find(V=>V.zFloor===pt&&V.outer===zt&&et(V.shape,ie));ce?(ce.zFloor=ut,ce.region=yt):rt.push({outer:zt,region:yt,over:Wt,shape:ie,zTop:pt,zFloor:ut})}}let Q=new Map;for(let{outer:X,region:pt,over:ut,zTop:gt,zFloor:yt}of rt){let Ft=yt===0,zt=Ft?-e.throughDepth:yt,Wt=gt-zt;{if(X){let Vt=C(Bs(pt,tn(ut,13)),Wt,f.allowance);if(!Vt){d.push({kind:"notool",text:`A step ${r(gt-yt)} deep has no end mill that fits.`});continue}let le=Bs(pt,tn(ut,Vt.diameter+.5));q({kind:"step",label:"Cut the step",tool:E(Vt),zTop:gt,zBottom:zt,region:le,walls:pt,detail:`${r(gt-yt)} deep`});continue}let ie=Ym(pt);if(ie){let Vt=`${wc(ie.d)}|${wc(gt)}|${wc(zt)}`;Q.has(Vt)||Q.set(Vt,{d:ie.d,zTop:gt,zBottom:zt,through:Ft,centers:[],regions:[]}),Q.get(Vt).centers.push(ie),Q.get(Vt).regions.push(pt);continue}let ce=Ui([pt[0]]),V=C(pt,Wt,f.allowance),Pt=`${o(ce.maxX-ce.minX)} \xD7 ${r(ce.maxY-ce.minY)} \xB7 ${Ft?"through":`${r(gt-yt)} deep`}`;if(!V){d.push({kind:"notool",text:`No end mill fits the pocket ${Pt}.`});continue}let Jt=q({kind:"pocket",label:Ft?"Cut the opening":"Clear the pocket",tool:E(V),zTop:gt,zBottom:zt,region:pt,detail:Pt}),te=k(pt,V,Wt);te&&te.tool?q({kind:"corners",label:"Clean the corners",tool:E(te.tool),zTop:gt,zBottom:zt,region:pt,after:Jt.id,detail:`Corners too tight for ${V.name}`}):te&&d.push({kind:"corners",text:`Pocket corners stay rounded to ${r(V.diameter/2)}: no smaller end mill in your library.`})}}for(let X of Q.values()){let pt=X.centers.length,ut=X.zTop-X.zBottom,gt=`\xD8${r(X.d)} ${X.through?"through":`${r(X.zTop-X.zBottom)} deep`}`,yt=y.find(Wt=>Wm(Wt.diameter,X.d)&&Xs(Wt,ut));if(yt){q({kind:"drill",label:pt>1?`Drill ${pt} holes`:"Drill the hole",tool:E(yt),zTop:X.zTop,zBottom:X.zBottom,centers:X.centers,detail:gt});continue}let Ft=X.regions.flat().length?X.regions.flatMap(Wt=>Wt):[],zt=C(Ft,ut,0)||null;if(!zt||zt.diameter>X.d-.4){let Wt=g.find(ie=>ie.diameter<=X.d-.4&&Xs(ie,ut));if(!Wt){d.push({kind:"notool",text:`No drill or end mill fits the ${gt} hole${pt>1?"s":""}.`});continue}q({kind:"hole",label:pt>1?`Cut ${pt} holes`:"Cut the hole",tool:E(Wt),zTop:X.zTop,zBottom:X.zBottom,region:Ft,centers:X.centers,detail:`${gt} \xB7 spiral`});continue}q({kind:"hole",label:pt>1?`Cut ${pt} holes`:"Cut the hole",tool:E(zt),zTop:X.zTop,zBottom:X.zBottom,region:Ft,centers:X.centers,detail:`${gt} \xB7 spiral`})}if(L.length){let X=c.top+e.throughDepth,pt=g.filter(yt=>Xs(yt,X)&&yt.diameter<=P),ut=pt.find(yt=>b.has(yt.id))||pt.slice().sort((yt,Ft)=>Math.abs(yt.diameter-6.35)-Math.abs(Ft.diameter-6.35))[0],gt=e.tabs.enabled?`${e.tabs.count} tabs`:"no tabs";ut?q({id:"cutout",kind:"cutout",label:"Cut out the part",tool:E(ut),zTop:c.top,zBottom:-e.throughDepth,region:L,detail:`${r(c.top)} \xB7 ${gt}`}):d.push({kind:"notool",text:`No end mill is long enough to cut out the part (${r(X)}).`})}let tt=[],dt=new Map;for(let X of U){if(X.kind!=="pocket"&&X.kind!=="corners"){tt.push(X);continue}let pt=X.after&&dt.has(X.after)?dt.get(X.after):X.after,ut=tt.find(gt=>gt.kind===X.kind&&gt.detail===X.detail&&gt.zTop===X.zTop&&gt.zBottom===X.zBottom&&gt.tool.id===X.tool.id&&(gt.after||null)===(pt||null));ut?(ut.region=[...ut.region,...X.region],ut.count=(ut.count||1)+1,dt.set(X.id,ut.id)):tt.push({...X,after:pt})}for(let X of tt)X.count>1&&(X.kind==="pocket"&&(X.label=X.label==="Cut the opening"?`Cut ${X.count} openings`:`Clear ${X.count} pockets`),X.kind==="corners"&&(X.label=`Clean the corners of ${X.count} pockets`));U.length=0,U.push(...tt);for(let X of U){let pt=e.toolOverride?.[X.id];if(pt){let ut=t.find(gt=>gt.id===pt);ut&&(X.tool=ut)}X.enabled=!e.disabled?.[X.id],X.feeds=Y(X.tool)}return{analysis:c,stock:u,zero:Ac(u,e.zero),ops:$m(U),warnings:d,job:e}}function $m(n){let t=n.filter(d=>d.kind==="face"),e=n.filter(d=>d.kind==="cutout"),i=n.filter(d=>d.kind!=="face"&&d.kind!=="cutout"),r=d=>d.region||(d.centers||[]).map(g=>Zm(g)),o=new Map(i.map(d=>[d,i.filter(g=>g!==d&&(d.after===g.id||g.zTop>d.zTop+Vr&&Zn(Bs(r(d),r(g)))>Vi))])),c=new Set,u=[...t],f=t.length?t[t.length-1].tool:null;for(;c.size<i.length;){let d=i.filter(y=>!c.has(y)&&o.get(y).every(v=>c.has(v))),g=d.find(y=>f&&y.tool.id===f.id)||d[0];c.add(g),u.push(g),f=g.tool}return[...u,...e]}function Zm(n,t=32){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}function Jo(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var Vr,Vi,Fu,Ou,Wm,Ec,qm,Xs,wc,Bu=Sn(()=>{Mc();Vs();Gs();bc();Vr=.01,Vi=.05,Fu=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"];Ou=n=>[[[n.minX,n.minY],[n.maxX,n.minY],[n.maxX,n.maxY],[n.minX,n.maxY]]],Wm=(n,t)=>Math.abs(n-t)<.05;Ec=(n,t)=>tn(tn(n,-t),t),qm=(n,t)=>{let e=Zn(n);return e>0?Zn(Ec(n,t))/e:0},Xs=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,wc=n=>(Math.round(n*10)/10).toString()});function Hr(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(r,o)=>n-(o+1)*(n-t)/i)}function Ws(n,t,e,i,r,o,c){let u=[...t.breaks(e,i),i];if(c)for(let d of c.edges(e,i))u.push(d);u.sort((d,g)=>d-g);let f=e;for(let d of u){if(d-f<1e-9)continue;let g=(f+d)/2,y=c&&c.inside(g)?c.top:-1/0,[v,b]=t.at(f),E=Math.max(r(f),y);n.at&&Math.abs(n.at.z-E)>1e-6&&n.feed(v,b,E,o);let[P,S]=t.at(d);n.feed(P,S,Math.max(r(d),y),o),f=d}}function ku(n,t,e,i,r,o,c){let u=Math.max(0,(i-r)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||u<1e-6){let[d,g]=t.at(e);return n.feed(d,g,c&&c.inside(e)?Math.max(r,c.top):r,o.plunge),Ws(n,t,e,e+t.length,()=>r,o.feed,c),e}let f=e+u;return Ws(n,t,e,f,d=>i-(d-e)/u*(i-r),Math.min(o.feed,o.plunge*2),c),Ws(n,t,f,f+t.length,()=>r,o.feed,c),f}function jm(n,t,e){let i=[];for(let r=t,o=0;o<500;r+=e,o++){let c=zs(ui(tn(n,-r),.001),.005);if(!c.length)break;i.push(c)}return i}function Km(n){let t=n.map((r,o)=>r.map(c=>({loop:c,depth:o,kids:[]})));for(let r=1;r<t.length;r++)for(let o of t[r])(t[r-1].find(u=>ks(o.loop[0],u.loop)&&Math.sign(Hn(u.loop))===Math.sign(Hn(o.loop)))||t[r-1].find(u=>ks(o.loop[0],u.loop))||t[0][0]).kids.push(o);let e=[],i=r=>{if(!r.kids.length){e.push([r.loop]);return}for(let o of r.kids)i(o);e[e.length-1].push(r.loop)};for(let r of t[0]||[])Hn(r.loop)>0&&i(r);for(let r of t[0]||[])Hn(r.loop)<=0&&!t[0].some(o=>o.kids.includes(r))&&i(r);return e}function Qm(n,t){let e=0;for(let i of t)ks(n,i)&&(e+=Hn(i)>0?1:-1);return e>0}function tg(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let r=1;r<i;r++){let o=r/i;if(!Qm([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function eg(n,t,e,i,r,o,c){let u=Math.min(i.stepover,e*.95),f=jm(t,e+c,u);if(!f.length)return;let d=tn(t,-(e+c)+.01),g=Km(f),y=r;for(let v of Hr(r,o,i.stepdown)){for(let b of g){let E=new pr(b[0]),[P,S]=E.at(0);n.goTo(P,S,y),n.feed(P,S,y,i.plunge);let M=ku(n,E,0,y,v,i);for(let F=1;F<b.length;F++){let H=E.at(M),L=new pr(b[F]),U=L.nearest(H);tg(H,L.at(U),d)||([P,S]=L.at(U),n.rapid(H[0],H[1],y+1),n.rapid(P,S,y+1),n.feed(P,S,v,i.plunge)),Ws(n,L,U,U+L.length,()=>v,i.feed),E=L,M=U}}y=v}n.retract()}function zu(n,t,e,i,r,o,c){let u=zs(ui(tn(t,-e),.001),.005);for(let f of u){let d=new pr(f),[g,y]=d.at(0);n.goTo(g,y,r);for(let v of Hr(r,o,c))n.feed(g,y,v,i.plunge),Ws(n,d,0,d.length,()=>v,i.feed*.9);n.retract()}}function ng(n,t,e,i,r,o,c){let u=ui(zr(t,tn(tn(t,-i),i)),.01);if(!u.length)return;let f=tn(u,e+.5);for(let d of zs(ui(tn(t,-e),.001),.005)){let g=new pr(d),y=Math.max(8,Math.ceil(g.length/.25)),v=Array.from({length:y},(E,P)=>f.some(S=>ks(g.at(P/y*g.length),S)));if(v.every(Boolean)){zu(n,t,e,r,o,c,r.stepdown);return}let b=v.indexOf(!1);for(let E=0;E<y;E++){let P=(b+E)%y;if(!v[P]||v[(P-1+y)%y])continue;let S=P;for(;v[(S+1)%y]&&S-P<y;)S++;let M=P/y*g.length,F=(S+1)/y*g.length,[H,L]=g.at(M);n.goTo(H,L,o);let U=!0;for(let B of Hr(o,c,r.stepdown)){let q=[...g.breaks(M,F),F],C=U?q:[...q.slice(0,-1).reverse(),M],[k,Y]=g.at(U?M:F);n.feed(k,Y,B,r.plunge);for(let nt of C){let[rt,et]=g.at(nt);n.feed(rt,et,B,r.feed)}U=!U}n.retract()}}}function ig(n,t,e,i,r,o){let c=Math.min(i.stepover,e*1.6),u=t.minX-e-2,f=t.maxX+e+2;for(let d of Hr(r,o,i.stepdown)){let g=t.minY+e*.6;n.goTo(u,g,r),n.feed(u,g,d,i.plunge);let y=1;for(;n.feed(y>0?f:u,g,d,i.feed),!(g>=t.maxY-e*.6-1e-6);)g=Math.min(g+c,t.maxY-e*.6),n.feed(y>0?f:u,g,d,i.feed),y=-y}n.retract()}function rg(n,t,e,i,r,o){let c=Math.max(.5,o*1.5);for(let u of t){n.goTo(u.x,u.y,i);let f=i;for(;f>r+1e-6;){let d=Math.max(r,f-c);f<i&&n.rapid(u.x,u.y,f+.5),n.feed(u.x,u.y,d,e.plunge),n.rapid(u.x,u.y,i+1),f=d}n.retract()}}function sg(n,t,e,i){let r=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!r)return null;let o=t.tabs.length??ki(t.material).length,c=2*e+o,u=Array.from({length:r},(d,g)=>{let y=(g+.5)/r*n;return[y-c/2,y+c/2]}),f=n;return{top:i+(t.tabs.height??ki(t.material).height),inside:d=>{let g=(d%f+f)%f;return u.some(([y,v])=>g>y&&g<v)},edges:(d,g)=>{let y=[];for(let v=Math.floor(d/f);v*f<=g;v++)for(let[b,E]of u)for(let P of[b,E]){let S=v*f+P;S>d&&S<g&&y.push(S)}return y}}}function og(n,t,e,i,r,o,c,u){let f=[{off:e+u,fd:i}];u>0&&f.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let d of f)for(let g of Bi(t).map(y=>y[0])){let y=zs(ui(tn([g],d.off),.001),.005).filter(v=>Hn(v)>0);for(let v of y){let b=new pr(v.slice().reverse()),E=sg(b.length,c,e,0),[P,S]=b.at(0);n.goTo(P,S,r),n.feed(P,S,r,i.plunge);let M=0,F=r,H=d.finish?Hr(r,o,Math.max(i.stepdown,Math.min(6*e,r-o))):Hr(r,o,i.stepdown);for(let L of H)M=ku(n,b,M,F,L,d.fd,E),F=L;n.retract()}}}function ag(n,t){let e=c=>{let u=Ui([c[0]]);return[(u.minX+u.maxX)/2,(u.minY+u.maxY)/2]},i=n.map(c=>({a:c,m:e(c)})),r=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let c=0;for(let f=1;f<i.length;f++)Math.hypot(i[f].m[0]-o[0],i[f].m[1]-o[1])<Math.hypot(i[c].m[0]-o[0],i[c].m[1]-o[1])&&(c=f);let[u]=i.splice(c,1);r.push(u.a),o=u.m}return r}function Vu(n){let t=n.stock.top+Jm,e=(Gn[n.job.finish]||Gn.balanced).allowance,r=n.ops.some(o=>o.kind==="face"&&o.enabled)?n.analysis.top:n.stock.top;for(let o of n.ops){let c=new Cc(t),u=o.kind!=="face"&&o.zTop>=n.analysis.top-1e-6?Math.max(o.zTop,r):o.zTop,f=o.tool.diameter/2,d=o.feeds,g=Math.min(o.tool.fluteLength||1/0,3*o.tool.diameter);switch(o.kind){case"face":ig(c,n.stock,f,d,u,o.zBottom);break;case"pocket":case"step":case"hole":for(let y of ag(Bi(o.region),c.at))eg(c,y,f,d,u,o.zBottom,e),e>0&&zu(c,y,f,d,u,o.zBottom,g);break;case"corners":{let y=n.ops.find(v=>v.id===o.after);ng(c,o.region,f,y?y.tool.diameter/2:f*2,d,u,o.zBottom);break}case"drill":rg(c,o.centers,d,u,o.zBottom,o.tool.diameter);break;case"cutout":og(c,o.region,f,d,u,o.zBottom,n.job,e);break}o.moves=c.moves}return n}var Jm,Cc,pr,Hu=Sn(()=>{Vs();Gs();Jm=3;Cc=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,r){this.push({x:t,y:e,z:i,f:r})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ),this.rapid(t,e,this.clearZ),this.rapid(t,e,i+1)}retract(){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ)}},pr=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],r=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(r[0]-i[0],r[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,r=1;for(;r<this.s.length-1&&this.s[r]<i;)r++;let o=this.p[r-1],c=this.p[r%this.p.length],u=this.s[r]-this.s[r-1]||1,f=(i-this.s[r-1])/u;return[o[0]+(c[0]-o[0])*f,o[1]+(c[1]-o[1])*f]}breaks(t,e){let i=[],r=this.length;for(let o=Math.floor(t/r);o*r<=e;o++)for(let c=0;c<this.p.length;c++){let u=o*r+this.s[c];u>t+1e-9&&u<e-1e-9&&i.push(u)}return i}nearest([t,e]){let i=0,r=1/0;for(let o=0;o<this.p.length;o++){let c=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;c<r&&(r=c,i=this.s[o])}return i}}});function Gu(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:r=null,spindleDelay:o=3}=t,c=Number.isFinite(r)?`G53 G0 Z${Hi(r)}`:"G53 G0 Z0",u=n.zero,f=n.stock,d=[Gr(`ncCAM: ${e}`),Gr(`Stock ${Hi(f.width)} x ${Hi(f.depth)} x ${Hi(f.thickness)} mm, ${(fr[n.job.material]||{}).name||n.job.material}, ${(Gn[n.job.finish]||{}).name||n.job.finish}`),Gr(`Zero: X Y at the ${cg[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],g=n.ops.filter(P=>P.enabled&&P.moves&&P.moves.length);for(let P of[...new Map(g.map(S=>[S.tool.id,S.tool])).values()])d.push(Gr(`T${dr(P,i)}: ${P.name}, ${Hi(P.diameter)} mm`));d.push("G21 G90 G94 G17");let y=null,v={},b=null,E=null;for(let P of g){(!y||P.tool.id!==y.id)&&(y&&d.push("M5"),d.push(c,`M6 T${dr(P.tool,i)}`,Gr(P.tool.name)),y=P.tool,d.push(`M3 S${P.feeds.rpm}`),o>0&&d.push(`G4 P${o}`),v={},b=null,E=null),d.push(Gr(`${P.label}${P.detail?": "+P.detail:""}`));for(let S of P.moves){let M=Hi(S.x-u.x),F=Hi(S.y-u.y),H=Hi(S.z-u.z);if(S.r&&(M!==v.x||F!==v.y)&&H!==v.z){let q=v.z===void 0||+H<+v.z?[`X${M} Y${F}`,`Z${H}`]:[`Z${H}`,`X${M} Y${F}`];for(let C of q)d.push(`${E==="G0"?"":"G0 "}${C}`),E="G0";v={x:M,y:F,z:H};continue}let L=S.r?"G0":"G1",U=L===E?"":L;M!==v.x&&(U+=` X${M}`),F!==v.y&&(U+=` Y${F}`),H!==v.z&&(U+=` Z${H}`),!S.r&&S.f!==b&&(U+=` F${Math.round(S.f)}`,b=S.f),U=U.trim(),!(!U||U===L)&&(d.push(U),E=L,v={x:M,y:F,z:H})}}return d.push("M5",c,"M30",""),d.join(`
`)}function Xu(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let r=0,o=null,c=null;for(let u of n.ops){if(!u.enabled||!u.moves)continue;(!c||u.tool.id!==c.id)&&(r+=e+(c?i:0),c=u.tool);let f=0;for(let d of u.moves){if(o){let g=Math.hypot(d.x-o.x,d.y-o.y,d.z-o.z);f+=g/(d.r?t:d.f)*60}o=d}u.seconds=f,r+=f}return r}var Hi,lg,Gr,cg,Wu=Sn(()=>{Gs();Hi=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},lg={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Gr=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>lg[t]??"")})`,cg={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});function Pc(n,t){let e=n.diameter/2,i=Math.ceil(e/t),r=[];for(let o=-i;o<=i;o++)for(let c=-i;c<=i;c++){let u=Math.hypot(c,o)*t;if(u>e+1e-6)continue;let f=Math.min(u,e),d=0;if(n.kind==="ball")d=e-Math.sqrt(Math.max(0,e*e-f*f));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let g=(n.angle||(n.kind==="drill"?118:60))*Math.PI/360;d=f/Math.tan(g)}r.push(c,o,d)}return Float32Array.from(r)}function hg(n,t,e,i,r,o){let c=Math.hypot(i.x-e.x,i.y-e.y),u=Math.max(1,Math.ceil(c/(n.cell*.5))),f=!1;for(let d=r?0:1;d<=u;d++){let g=d/u,y=(e.x+(i.x-e.x)*g-n.x0)/n.cell,v=(e.y+(i.y-e.y)*g-n.y0)/n.cell,b=e.z+(i.z-e.z)*g;if(b>=n.top)continue;let E=Math.round(y),P=Math.round(v);for(let S=0;S<t.length;S+=3){let M=E+t[S],F=P+t[S+1];if(M<0||F<0||M>=n.nx||F>=n.ny)continue;let H=F*n.nx+M,L=b+t[S+2];if(n.h[H]>L+1e-4){if(r){n.h[H]>L+.05&&(f=!0);continue}n.h[H]=L,n.op[H]=o+1}}}return f}function Yu(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function Ic(n,t,e,i,r){let o=t.diameter/2,c=n.cell,u=o/c,f=t.kind==="ball"?et=>o-Math.sqrt(Math.max(0,o*o-et*et)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(et=>Q=>Q/et)(Math.tan((t.angle||(t.kind==="drill"?118:60))*Math.PI/360)):()=>0,d=!t.kind||t.kind==="flat"||t.kind==="surfacing",{h:g,sx:y,sy:v,wx:b,wy:E,gap:P,deep:S,nx:M,ny:F}=n,H=1.5*c,L=u+1.5,U=(et,Q,tt,dt)=>{let X=Math.hypot(Q,tt);if(X>L)return;let pt=X*c;if(pt<=o){let ut=dt+f(pt);if(g[et]>ut+1e-4)g[et]=ut,n.op[et]=r+1,P[et]=1/0,S[et]=-1/0;else if(g[et]<ut-1e-4)return;o-pt>S[et]&&(S[et]=o-pt,d&&o-pt<H&&X>1e-6?(y[et]=Q/X*(o-pt),v[et]=tt/X*(o-pt),b[et]=-Q/X,E[et]=-tt/X):(y[et]=0,v[et]=0,b[et]=0,E[et]=0))}else d&&g[et]>dt+1e-4&&pt-o<P[et]&&(P[et]=pt-o,y[et]=Q/X*(o-pt),v[et]=tt/X*(o-pt),b[et]=-Q/X,E[et]=-tt/X)},B=(e.x-n.x0)/c,q=(e.y-n.y0)/c,C=(i.x-n.x0)/c,k=(i.y-n.y0)/c;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let et=C-B,Q=k-q,tt=et*et+Q*Q,dt=Math.max(0,Math.floor(Math.min(B,C)-L)),X=Math.min(M-1,Math.ceil(Math.max(B,C)+L)),pt=Math.max(0,Math.floor(Math.min(q,k)-L)),ut=Math.min(F-1,Math.ceil(Math.max(q,k)+L));for(let gt=pt;gt<=ut;gt++)for(let yt=dt;yt<=X;yt++){let Ft=tt>0?Math.max(0,Math.min(1,((yt-B)*et+(gt-q)*Q)/tt)):0;U(gt*M+yt,yt-(B+et*Ft),gt-(q+Q*Ft),e.z)}return}let Y=Math.hypot(i.x-e.x,i.y-e.y),nt=Math.max(1,Math.ceil(Y/(c*.5))),rt=Math.ceil(L);for(let et=1;et<=nt;et++){let Q=et/nt,tt=B+(C-B)*Q,dt=q+(k-q)*Q,X=e.z+(i.z-e.z)*Q;if(X>=n.top)continue;let pt=Math.max(0,Math.floor(tt-rt)),ut=Math.min(M-1,Math.ceil(tt+rt)),gt=Math.max(0,Math.floor(dt-rt)),yt=Math.min(F-1,Math.ceil(dt+rt));for(let Ft=gt;Ft<=yt;Ft++)for(let zt=pt;zt<=ut;zt++)U(Ft*M+zt,zt-tt,Ft-dt,X)}}function qu(n,t){let e=new Gi(n.stock,t||Gi.cellFor(n.stock)),i=[];return n.ops.forEach((r,o)=>{if(!r.enabled||!r.moves)return;let c=Pc(r.tool,e.cell),u=null;for(let f of r.moves)u&&hg(e,c,u,f,!!f.r,o)&&i.push({op:r.id,at:f}),u=f}),{hm:e,collisions:i}}var Gi,$u=Sn(()=>{Gi=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});var Rc=Sn(()=>{Mc();Bu();Hu();Wu();$u();Gs();bc();Vs()});function fg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function dg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ld(){let n=ro("canvas");return n.style.display="block",n}function so(...n){let t="THREE."+n.shift();us?us("log",t,...n):console.log(t,...n)}function cd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function he(...n){n=cd(n);let t="THREE."+n.shift();if(us)us("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function de(...n){n=cd(n);let t="THREE."+n.shift();if(us)us("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function yr(...n){let t=n.join(" ");t in ju||(ju[t]=!0,he(...n))}function hd(n,t,e){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Pi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function be(n,t,e){return Math.max(t,Math.min(e,n))}function Fh(n,t){return(n%t+t)%t}function pg(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function mg(n,t,e){return n!==t?(e-n)/(t-n):0}function to(n,t,e){return(1-e)*n+e*t}function gg(n,t,e,i){return to(n,t,1-Math.exp(-e*i))}function _g(n,t=1){return t-Math.abs(Fh(n,t*2)-t)}function vg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function yg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function xg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Mg(n,t){return n+Math.random()*(t-n)}function Sg(n){return n*(.5-Math.random())}function bg(n){n!==void 0&&(Ku=n);let t=Ku+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wg(n){return n*as}function Eg(n){return n*fs}function Tg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Ag(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pg(n,t,e,i,r){let o=Math.cos,c=Math.sin,u=o(e/2),f=c(e/2),d=o((t+i)/2),g=c((t+i)/2),y=o((t-i)/2),v=c((t-i)/2),b=o((i-t)/2),E=c((i-t)/2);switch(r){case"XYX":n.set(u*g,f*y,f*v,u*d);break;case"YZY":n.set(f*v,u*g,f*y,u*d);break;case"ZXZ":n.set(f*y,f*v,u*g,u*d);break;case"XZX":n.set(u*g,f*E,f*b,u*d);break;case"YXY":n.set(f*b,u*g,f*E,u*d);break;case"ZYZ":n.set(f*E,f*b,u*g,u*d);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ig(){let n={enabled:!0,workingColorSpace:no,spaces:{},convert:function(r,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===De&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===De&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ni?io:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,c){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[no]:{primaries:t,whitePoint:i,transfer:io,toXYZ:tf,fromXYZ:ef,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:t,whitePoint:i,transfer:De,toXYZ:tf,fromXYZ:ef,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),n}function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ua.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}function Bc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function Yc(n,t,e,i,r){for(let o=0,c=n.length-3;o<=c;o+=3){gr.fromArray(n,o);let u=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),f=t.dot(gr),d=e.dot(gr),g=i.dot(gr);if(Math.max(-Math.max(f,d,g),Math.min(f,d,g))>u)return!1}return!0}function oa(n,t,e,i,r,o){is.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(js.x=o*is.x-r*is.y,js.y=r*is.x+o*is.y):js.copy(is),n.copy(t),n.x+=js.x,n.y+=js.y,n.applyMatrix4(dd)}function Yg(n,t,e,i,r,o,c,u){let f;if(t.side===Tn?f=i.intersectTriangle(c,o,r,!0,u):f=i.intersectTriangle(r,o,c,t.side===rr,u),f===null)return null;pa.copy(u),pa.applyMatrix4(n.matrixWorld);let d=e.ray.origin.distanceTo(pa);return d<e.near||d>e.far?null:{distance:d,point:pa.clone(),object:n}}function ma(n,t,e,i,r,o,c,u,f,d){n.getVertexPosition(u,ha),n.getVertexPosition(f,ua),n.getVertexPosition(d,fa);let g=Yg(n,t,e,i,ha,ua,fa,mf);if(g){let y=new lt;di.getBarycoord(mf,ha,ua,fa,y),r&&(g.uv=di.getInterpolatedAttribute(r,u,f,d,y,new oe)),o&&(g.uv1=di.getInterpolatedAttribute(o,u,f,d,y,new oe)),c&&(g.normal=di.getInterpolatedAttribute(c,u,f,d,y,new lt),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));let v={a:u,b:f,c:d,normal:new lt,materialIndex:0};di.getNormal(ha,ua,fa,v.normal),g.face=v,g.barycoord=y}return g}function va(n,t,e,i,r,o,c){let u=n.geometry.attributes.position;if(Ha.fromBufferAttribute(u,r),Ga.fromBufferAttribute(u,o),e.distanceSqToSegment(Ha,Ga,Qc,_f)>i)return;Qc.applyMatrix4(n.matrixWorld);let d=t.ray.origin.distanceTo(Qc);if(!(d<t.near||d>t.far))return{distance:d,point:_f.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}function Ar(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];if(xf(r))r.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(xf(r[0])){let o=[];for(let c=0,u=r.length;c<u;c++)o[c]=r[c].clone();t[e][i]=o}else t[e][i]=r.slice();else t[e][i]=r}}return t}function xn(n){let t={};for(let e=0;e<n.length;e++){let i=Ar(n[e]);for(let r in i)t[r]=i[r]}return t}function xf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $g(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}function rs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function eh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function md(n,t,e,i,r){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*r}function jg(n,t,e,i,r){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(r-i)}function Kg(n,t,e,i,r){let o=(n-t)/(r-t);for(let c=0;c<8;c++){let u=md(o,t,e,i,r)-n;if(Math.abs(u)<1e-10)break;let f=jg(o,t,e,i,r);if(Math.abs(f)<1e-10)break;o=Math.max(0,Math.min(1,o-u/f))}return o}function Mf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function Af(n,t){return n.distance-t.distance}function hh(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let o=n.children;for(let c=0,u=o.length;c<u;c++)hh(o[c],t,e,!0)}}function Vh(n,t,e,i){let r=a0(i);switch(e){case Rh:return n*t;case Nh:return n*t/r.components*r.byteLength;case dl:return n*t/r.components*r.byteLength;case lr:return n*t*2/r.components*r.byteLength;case pl:return n*t*2/r.components*r.byteLength;case Lh:return n*t*3/r.components*r.byteLength;case Wn:return n*t*4/r.components*r.byteLength;case ml:return n*t*4/r.components*r.byteLength;case Po:case Io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:case yl:return Math.max(n,16)*Math.max(t,8)/4;case gl:case vl:return Math.max(n,8)*Math.max(t,8)/2;case xl:case Ml:case bl:case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sl:case No:case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zl:case Vl:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Gl:case Xl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Do:case Wl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a0(n){switch(n){case In:case Ah:return{byteLength:1,components:1};case Es:case Ch:case ai:return{byteLength:2,components:1};case ul:case fl:return{byteLength:2,components:4};case si:case hl:case oi:return{byteLength:4,components:1};case Ph:case Ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var nr,ir,Pf,fh,If,To,Rf,bs,rr,Tn,yn,_i,ws,dh,ph,mh,Lf,wr,Nf,Df,Of,Ff,Uf,Bf,kf,zf,gh,_h,Vf,Hf,Gf,Xf,Wf,Yf,qf,$f,Zf,Aa,Ca,Pa,cs,Ia,Ra,La,Na,vh,Jf,jf,ri,yh,xh,Mh,Sh,bh,wh,Eh,Th,sr,Er,al,ll,Ao,Da,pi,Oa,hn,Kf,Co,fn,cl,or,In,Ah,Ch,Es,hl,si,oi,ai,ul,fl,Ts,Ph,Ih,Rh,Lh,Wn,mi,ar,Nh,dl,lr,pl,ml,Po,Io,Ro,Lo,gl,_l,vl,yl,xl,Ml,Sl,bl,wl,No,El,Tl,Al,Cl,Pl,Il,Rl,Ll,Nl,Dl,Ol,Fl,Ul,Bl,kl,zl,Vl,Hl,Gl,Xl,Do,Wl,eo,Fa,Ea,rh,sh,oh,ah,Qf,Yl,td,Ni,wn,no,io,De,Ta,ed,nd,id,rd,ql,sd,od,$l,ad,Dh,Tr,Oh,ti,hs,ju,us,ud,ni,gn,Ku,as,fs,Uh,oe,On,lt,Nc,Qu,ve,Dc,tf,ef,Ee,Xr,Ua,Rg,ds,Lg,Fc,En,Je,Ba,Pn,oo,ka,ze,Wr,Jn,Ng,Dg,Xi,jo,Ln,nf,rf,Ri,ps,Og,sf,Yr,wi,Ko,Ys,Fg,Ug,of,af,lf,cf,Bg,qr,Uc,rn,ei,kg,ms,fd,Wi,Qo,ge,_n,ao,jn,Ei,kc,Ti,$r,Zr,hf,zc,Vc,Hc,Gc,Xc,Wc,di,Zi,Ai,Kn,ta,Jr,jr,Kr,Yi,qi,mr,qs,ea,na,gr,en,ia,zg,Ge,lo,co,Xe,Vg,$s,qc,xr,Hg,Xn,$c,Qr,Nn,Zs,cn,Ze,za,bn,ho,Zc,Gg,Xg,Dn,Wg,gi,gs,ts,Js,es,ns,is,js,dd,ra,Ks,sa,uf,Jc,ff,uo,Ci,jc,aa,la,Ji,Fn,df,_r,ca,pf,ha,ua,fa,Kc,da,mf,pa,Oe,Va,vr,qg,ga,_s,ii,Ha,Ga,gf,Qs,_a,Qc,_f,Mr,vf,yf,Sr,fo,po,ji,Xa,mo,Ki,Li,vs,ya,xa,th,Ma,ys,go,_o,br,pd,Zg,Jg,Un,Wa,Bn,Ya,qa,vo,Qi,$a,Za,Ja,ja,kn,tr,Ka,Qa,tl,yo,er,el,nl,gd,il,xo,Mo,nh,Sf,bf,rl,Sa,ba,fi,So,$i,wf,Ef,vn,xs,lh,Ms,ss,os,sl,ol,kh,Qg,zh,t0,e0,n0,i0,r0,s0,o0,ch,$e,qM,Tf,bo,Ss,uh,Cf,wa,ih,wo,Eo,Hh=Sn(()=>{nr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pf=0,fh=1,If=2,To=1,Rf=2,bs=3,rr=0,Tn=1,yn=2,_i=0,ws=1,dh=2,ph=3,mh=4,Lf=5,wr=100,Nf=101,Df=102,Of=103,Ff=104,Uf=200,Bf=201,kf=202,zf=203,gh=204,_h=205,Vf=206,Hf=207,Gf=208,Xf=209,Wf=210,Yf=211,qf=212,$f=213,Zf=214,Aa=0,Ca=1,Pa=2,cs=3,Ia=4,Ra=5,La=6,Na=7,vh=0,Jf=1,jf=2,ri=0,yh=1,xh=2,Mh=3,Sh=4,bh=5,wh=6,Eh=7,Th=300,sr=301,Er=302,al=303,ll=304,Ao=306,Da=1e3,pi=1001,Oa=1002,hn=1003,Kf=1004,Co=1005,fn=1006,cl=1007,or=1008,In=1009,Ah=1010,Ch=1011,Es=1012,hl=1013,si=1014,oi=1015,ai=1016,ul=1017,fl=1018,Ts=1020,Ph=35902,Ih=35899,Rh=1021,Lh=1022,Wn=1023,mi=1026,ar=1027,Nh=1028,dl=1029,lr=1030,pl=1031,ml=1033,Po=33776,Io=33777,Ro=33778,Lo=33779,gl=35840,_l=35841,vl=35842,yl=35843,xl=36196,Ml=37492,Sl=37496,bl=37488,wl=37489,No=37490,El=37491,Tl=37808,Al=37809,Cl=37810,Pl=37811,Il=37812,Rl=37813,Ll=37814,Nl=37815,Dl=37816,Ol=37817,Fl=37818,Ul=37819,Bl=37820,kl=37821,zl=36492,Vl=36494,Hl=36495,Gl=36283,Xl=36284,Do=36285,Wl=36286,eo=2300,Fa=2301,Ea=2302,rh=2303,sh=2400,oh=2401,ah=2402,Qf=3200,Yl=0,td=1,Ni="",wn="srgb",no="srgb-linear",io="linear",De="srgb",Ta=7680,ed=519,nd=512,id=513,rd=514,ql=515,sd=516,od=517,$l=518,ad=519,Dh=35044,Tr=35048,Oh="300 es",ti=2e3,hs=2001;ju={},us=null;ud={[Aa]:Ca,[Pa]:La,[Ia]:Na,[cs]:Ra,[Ca]:Aa,[La]:Pa,[Na]:Ia,[Ra]:cs},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let o=0,c=r.length;o<c;o++)r[o].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=1234567,as=Math.PI/180,fs=180/Math.PI;Uh={DEG2RAD:as,RAD2DEG:fs,generateUUID:Pi,clamp:be,euclideanModulo:Fh,mapLinear:pg,inverseLerp:mg,lerp:to,damp:gg,pingpong:_g,smoothstep:vg,smootherstep:yg,randInt:xg,randFloat:Mg,randFloatSpread:Sg,seededRandom:bg,degToRad:wg,radToDeg:Eg,isPowerOfTwo:Tg,ceilPowerOfTwo:Ag,floorPowerOfTwo:Cg,setQuaternionFromProperEuler:Pg,normalize:ke,denormalize:Qn},oe=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*r+t.x,this.y=o*r+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},On=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,o,c,u){let f=i[r+0],d=i[r+1],g=i[r+2],y=i[r+3],v=o[c+0],b=o[c+1],E=o[c+2],P=o[c+3];if(y!==P||f!==v||d!==b||g!==E){let S=f*v+d*b+g*E+y*P;S<0&&(v=-v,b=-b,E=-E,P=-P,S=-S);let M=1-u;if(S<.9995){let F=Math.acos(S),H=Math.sin(F);M=Math.sin(M*F)/H,u=Math.sin(u*F)/H,f=f*M+v*u,d=d*M+b*u,g=g*M+E*u,y=y*M+P*u}else{f=f*M+v*u,d=d*M+b*u,g=g*M+E*u,y=y*M+P*u;let F=1/Math.sqrt(f*f+d*d+g*g+y*y);f*=F,d*=F,g*=F,y*=F}}t[e]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y}static multiplyQuaternionsFlat(t,e,i,r,o,c){let u=i[r],f=i[r+1],d=i[r+2],g=i[r+3],y=o[c],v=o[c+1],b=o[c+2],E=o[c+3];return t[e]=u*E+g*y+f*b-d*v,t[e+1]=f*E+g*v+d*y-u*b,t[e+2]=d*E+g*b+u*v-f*y,t[e+3]=g*E-u*y-f*v-d*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,o=t._z,c=t._order,u=Math.cos,f=Math.sin,d=u(i/2),g=u(r/2),y=u(o/2),v=f(i/2),b=f(r/2),E=f(o/2);switch(c){case"XYZ":this._x=v*g*y+d*b*E,this._y=d*b*y-v*g*E,this._z=d*g*E+v*b*y,this._w=d*g*y-v*b*E;break;case"YXZ":this._x=v*g*y+d*b*E,this._y=d*b*y-v*g*E,this._z=d*g*E-v*b*y,this._w=d*g*y+v*b*E;break;case"ZXY":this._x=v*g*y-d*b*E,this._y=d*b*y+v*g*E,this._z=d*g*E+v*b*y,this._w=d*g*y-v*b*E;break;case"ZYX":this._x=v*g*y-d*b*E,this._y=d*b*y+v*g*E,this._z=d*g*E-v*b*y,this._w=d*g*y+v*b*E;break;case"YZX":this._x=v*g*y+d*b*E,this._y=d*b*y+v*g*E,this._z=d*g*E-v*b*y,this._w=d*g*y-v*b*E;break;case"XZY":this._x=v*g*y-d*b*E,this._y=d*b*y-v*g*E,this._z=d*g*E+v*b*y,this._w=d*g*y+v*b*E;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],f=e[9],d=e[2],g=e[6],y=e[10],v=i+u+y;if(v>0){let b=.5/Math.sqrt(v+1);this._w=.25/b,this._x=(g-f)*b,this._y=(o-d)*b,this._z=(c-r)*b}else if(i>u&&i>y){let b=2*Math.sqrt(1+i-u-y);this._w=(g-f)/b,this._x=.25*b,this._y=(r+c)/b,this._z=(o+d)/b}else if(u>y){let b=2*Math.sqrt(1+u-i-y);this._w=(o-d)/b,this._x=(r+c)/b,this._y=.25*b,this._z=(f+g)/b}else{let b=2*Math.sqrt(1+y-i-u);this._w=(c-r)/b,this._x=(o+d)/b,this._y=(f+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,o=t._z,c=t._w,u=e._x,f=e._y,d=e._z,g=e._w;return this._x=i*g+c*u+r*d-o*f,this._y=r*g+c*f+o*u-i*d,this._z=o*g+c*d+i*f-r*u,this._w=c*g-i*u-r*f-o*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,o=t._z,c=t._w,u=this.dot(t);u<0&&(i=-i,r=-r,o=-o,c=-c,u=-u);let f=1-e;if(u<.9995){let d=Math.acos(u),g=Math.sin(d);f=Math.sin(f*d)/g,e=Math.sin(e*d)/g,this._x=this._x*f+i*e,this._y=this._y*f+r*e,this._z=this._z*f+o*e,this._w=this._w*f+c*e,this._onChangeCallback()}else this._x=this._x*f+i*e,this._y=this._y*f+r*e,this._z=this._z*f+o*e,this._w=this._w*f+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lt=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*r,this.y=o[1]*e+o[4]*i+o[7]*r,this.z=o[2]*e+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=t.elements,c=1/(o[3]*e+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*r+o[12])*c,this.y=(o[1]*e+o[5]*i+o[9]*r+o[13])*c,this.z=(o[2]*e+o[6]*i+o[10]*r+o[14])*c,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,o=t.x,c=t.y,u=t.z,f=t.w,d=2*(c*r-u*i),g=2*(u*e-o*r),y=2*(o*i-c*e);return this.x=e+f*d+c*y-u*g,this.y=i+f*g+u*d-o*y,this.z=r+f*y+o*g-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r,this.y=o[1]*e+o[5]*i+o[9]*r,this.z=o[2]*e+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,o=t.z,c=e.x,u=e.y,f=e.z;return this.x=r*f-o*u,this.y=o*c-i*f,this.z=i*u-r*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Nc.copy(this).projectOnVector(t),this.sub(Nc)}reflect(t){return this.sub(Nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nc=new lt,Qu=new On,ve=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,r,o,c,u,f,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,c,u,f,d)}set(t,e,i,r,o,c,u,f,d){let g=this.elements;return g[0]=t,g[1]=r,g[2]=u,g[3]=e,g[4]=o,g[5]=f,g[6]=i,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,c=i[0],u=i[3],f=i[6],d=i[1],g=i[4],y=i[7],v=i[2],b=i[5],E=i[8],P=r[0],S=r[3],M=r[6],F=r[1],H=r[4],L=r[7],U=r[2],B=r[5],q=r[8];return o[0]=c*P+u*F+f*U,o[3]=c*S+u*H+f*B,o[6]=c*M+u*L+f*q,o[1]=d*P+g*F+y*U,o[4]=d*S+g*H+y*B,o[7]=d*M+g*L+y*q,o[2]=v*P+b*F+E*U,o[5]=v*S+b*H+E*B,o[8]=v*M+b*L+E*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],g=t[8];return e*c*g-e*u*d-i*o*g+i*u*f+r*o*d-r*c*f}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],g=t[8],y=g*c-u*d,v=u*f-g*o,b=d*o-c*f,E=e*y+i*v+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/E;return t[0]=y*P,t[1]=(r*d-g*i)*P,t[2]=(u*i-r*c)*P,t[3]=v*P,t[4]=(g*e-r*f)*P,t[5]=(r*o-u*e)*P,t[6]=b*P,t[7]=(i*f-d*e)*P,t[8]=(c*e-i*o)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,o,c,u){let f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*c+d*u)+c+t,-r*d,r*f,-r*(-d*c+f*u)+u+e,0,0,1),this}scale(t,e){return yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dc.makeScale(t,e)),this}rotate(t){return yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dc.makeRotation(-t)),this}translate(t,e){return yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new ve,tf=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ee=Ig();Ua=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xr===void 0&&(Xr=ro("canvas")),Xr.width=t.width,Xr.height=t.height;let r=Xr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Xr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ro("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let c=0;c<o.length;c++)o[c]=Ii(o[c]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ii(e[i]/255)*255):e[i]=Ii(e[i]);return{data:e,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rg=0,ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let c=0,u=r.length;c<u;c++)r[c].isDataTexture?o.push(Oc(r[c].image)):o.push(Oc(r[c]))}else o=Oc(r);i.url=o}return e||(t.images[this.uuid]=i),i}};Lg=0,Fc=new lt,En=class n extends ni{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=pi,r=pi,o=fn,c=or,u=Wn,f=In,d=n.DEFAULT_ANISOTROPY,g=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Pi(),this.name="",this.source=new ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){he(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){he(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Da:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Da:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Th;En.DEFAULT_ANISOTROPY=1;Je=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*r+c[12]*o,this.y=c[1]*e+c[5]*i+c[9]*r+c[13]*o,this.z=c[2]*e+c[6]*i+c[10]*r+c[14]*o,this.w=c[3]*e+c[7]*i+c[11]*r+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,o,f=t.elements,d=f[0],g=f[4],y=f[8],v=f[1],b=f[5],E=f[9],P=f[2],S=f[6],M=f[10];if(Math.abs(g-v)<.01&&Math.abs(y-P)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(y+P)<.1&&Math.abs(E+S)<.1&&Math.abs(d+b+M-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let H=(d+1)/2,L=(b+1)/2,U=(M+1)/2,B=(g+v)/4,q=(y+P)/4,C=(E+S)/4;return H>L&&H>U?H<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(H),r=B/i,o=q/i):L>U?L<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(L),i=B/r,o=C/r):U<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(U),i=q/o,r=C/o),this.set(i,r,o,e),this}let F=Math.sqrt((S-E)*(S-E)+(y-P)*(y-P)+(v-g)*(v-g));return Math.abs(F)<.001&&(F=1),this.x=(S-E)/F,this.y=(y-P)/F,this.z=(v-g)/F,this.w=Math.acos((d+b+M-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ba=class extends ni{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},o=new En(r),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new ds(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Ba{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},oo=class extends En{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},ka=class extends En{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},ze=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,r,o,c,u,f,d,g,y,v,b,E,P,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,c,u,f,d,g,y,v,b,E,P,S)}set(t,e,i,r,o,c,u,f,d,g,y,v,b,E,P,S){let M=this.elements;return M[0]=t,M[4]=e,M[8]=i,M[12]=r,M[1]=o,M[5]=c,M[9]=u,M[13]=f,M[2]=d,M[6]=g,M[10]=y,M[14]=v,M[3]=b,M[7]=E,M[11]=P,M[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,r=1/Wr.setFromMatrixColumn(t,0).length(),o=1/Wr.setFromMatrixColumn(t,1).length(),c=1/Wr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,o=t.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(r),d=Math.sin(r),g=Math.cos(o),y=Math.sin(o);if(t.order==="XYZ"){let v=c*g,b=c*y,E=u*g,P=u*y;e[0]=f*g,e[4]=-f*y,e[8]=d,e[1]=b+E*d,e[5]=v-P*d,e[9]=-u*f,e[2]=P-v*d,e[6]=E+b*d,e[10]=c*f}else if(t.order==="YXZ"){let v=f*g,b=f*y,E=d*g,P=d*y;e[0]=v+P*u,e[4]=E*u-b,e[8]=c*d,e[1]=c*y,e[5]=c*g,e[9]=-u,e[2]=b*u-E,e[6]=P+v*u,e[10]=c*f}else if(t.order==="ZXY"){let v=f*g,b=f*y,E=d*g,P=d*y;e[0]=v-P*u,e[4]=-c*y,e[8]=E+b*u,e[1]=b+E*u,e[5]=c*g,e[9]=P-v*u,e[2]=-c*d,e[6]=u,e[10]=c*f}else if(t.order==="ZYX"){let v=c*g,b=c*y,E=u*g,P=u*y;e[0]=f*g,e[4]=E*d-b,e[8]=v*d+P,e[1]=f*y,e[5]=P*d+v,e[9]=b*d-E,e[2]=-d,e[6]=u*f,e[10]=c*f}else if(t.order==="YZX"){let v=c*f,b=c*d,E=u*f,P=u*d;e[0]=f*g,e[4]=P-v*y,e[8]=E*y+b,e[1]=y,e[5]=c*g,e[9]=-u*g,e[2]=-d*g,e[6]=b*y+E,e[10]=v-P*y}else if(t.order==="XZY"){let v=c*f,b=c*d,E=u*f,P=u*d;e[0]=f*g,e[4]=-y,e[8]=d*g,e[1]=v*y+P,e[5]=c*g,e[9]=b*y-E,e[2]=E*y-b,e[6]=u*g,e[10]=P*y+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ng,t,Dg)}lookAt(t,e,i){let r=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Xi.crossVectors(i,Ln),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Xi.crossVectors(i,Ln)),Xi.normalize(),jo.crossVectors(Ln,Xi),r[0]=Xi.x,r[4]=jo.x,r[8]=Ln.x,r[1]=Xi.y,r[5]=jo.y,r[9]=Ln.y,r[2]=Xi.z,r[6]=jo.z,r[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,c=i[0],u=i[4],f=i[8],d=i[12],g=i[1],y=i[5],v=i[9],b=i[13],E=i[2],P=i[6],S=i[10],M=i[14],F=i[3],H=i[7],L=i[11],U=i[15],B=r[0],q=r[4],C=r[8],k=r[12],Y=r[1],nt=r[5],rt=r[9],et=r[13],Q=r[2],tt=r[6],dt=r[10],X=r[14],pt=r[3],ut=r[7],gt=r[11],yt=r[15];return o[0]=c*B+u*Y+f*Q+d*pt,o[4]=c*q+u*nt+f*tt+d*ut,o[8]=c*C+u*rt+f*dt+d*gt,o[12]=c*k+u*et+f*X+d*yt,o[1]=g*B+y*Y+v*Q+b*pt,o[5]=g*q+y*nt+v*tt+b*ut,o[9]=g*C+y*rt+v*dt+b*gt,o[13]=g*k+y*et+v*X+b*yt,o[2]=E*B+P*Y+S*Q+M*pt,o[6]=E*q+P*nt+S*tt+M*ut,o[10]=E*C+P*rt+S*dt+M*gt,o[14]=E*k+P*et+S*X+M*yt,o[3]=F*B+H*Y+L*Q+U*pt,o[7]=F*q+H*nt+L*tt+U*ut,o[11]=F*C+H*rt+L*dt+U*gt,o[15]=F*k+H*et+L*X+U*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[12],c=t[1],u=t[5],f=t[9],d=t[13],g=t[2],y=t[6],v=t[10],b=t[14],E=t[3],P=t[7],S=t[11],M=t[15],F=f*b-d*v,H=u*b-d*y,L=u*v-f*y,U=c*b-d*g,B=c*v-f*g,q=c*y-u*g;return e*(P*F-S*H+M*L)-i*(E*F-S*U+M*B)+r*(E*H-P*U+M*q)-o*(E*L-P*B+S*q)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[1],c=t[5],u=t[9],f=t[2],d=t[6],g=t[10];return e*(c*g-u*d)-i*(o*g-u*f)+r*(o*d-c*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],g=t[8],y=t[9],v=t[10],b=t[11],E=t[12],P=t[13],S=t[14],M=t[15],F=e*u-i*c,H=e*f-r*c,L=e*d-o*c,U=i*f-r*u,B=i*d-o*u,q=r*d-o*f,C=g*P-y*E,k=g*S-v*E,Y=g*M-b*E,nt=y*S-v*P,rt=y*M-b*P,et=v*M-b*S,Q=F*et-H*rt+L*nt+U*Y-B*k+q*C;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let tt=1/Q;return t[0]=(u*et-f*rt+d*nt)*tt,t[1]=(r*rt-i*et-o*nt)*tt,t[2]=(P*q-S*B+M*U)*tt,t[3]=(v*B-y*q-b*U)*tt,t[4]=(f*Y-c*et-d*k)*tt,t[5]=(e*et-r*Y+o*k)*tt,t[6]=(S*L-E*q-M*H)*tt,t[7]=(g*q-v*L+b*H)*tt,t[8]=(c*rt-u*Y+d*C)*tt,t[9]=(i*Y-e*rt-o*C)*tt,t[10]=(E*B-P*L+M*F)*tt,t[11]=(y*L-g*B-b*F)*tt,t[12]=(u*k-c*nt-f*C)*tt,t[13]=(e*nt-i*k+r*C)*tt,t[14]=(P*H-E*U-S*F)*tt,t[15]=(g*U-y*H+v*F)*tt,this}scale(t){let e=this.elements,i=t.x,r=t.y,o=t.z;return e[0]*=i,e[4]*=r,e[8]*=o,e[1]*=i,e[5]*=r,e[9]*=o,e[2]*=i,e[6]*=r,e[10]*=o,e[3]*=i,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),o=1-i,c=t.x,u=t.y,f=t.z,d=o*c,g=o*u;return this.set(d*c+i,d*u-r*f,d*f+r*u,0,d*u+r*f,g*u+i,g*f-r*c,0,d*f-r*u,g*f+r*c,o*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,o,c){return this.set(1,i,o,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,o=e._x,c=e._y,u=e._z,f=e._w,d=o+o,g=c+c,y=u+u,v=o*d,b=o*g,E=o*y,P=c*g,S=c*y,M=u*y,F=f*d,H=f*g,L=f*y,U=i.x,B=i.y,q=i.z;return r[0]=(1-(P+M))*U,r[1]=(b+L)*U,r[2]=(E-H)*U,r[3]=0,r[4]=(b-L)*B,r[5]=(1-(v+M))*B,r[6]=(S+F)*B,r[7]=0,r[8]=(E+H)*q,r[9]=(S-F)*q,r[10]=(1-(v+P))*q,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let c=Wr.set(r[0],r[1],r[2]).length(),u=Wr.set(r[4],r[5],r[6]).length(),f=Wr.set(r[8],r[9],r[10]).length();o<0&&(c=-c),Jn.copy(this);let d=1/c,g=1/u,y=1/f;return Jn.elements[0]*=d,Jn.elements[1]*=d,Jn.elements[2]*=d,Jn.elements[4]*=g,Jn.elements[5]*=g,Jn.elements[6]*=g,Jn.elements[8]*=y,Jn.elements[9]*=y,Jn.elements[10]*=y,e.setFromRotationMatrix(Jn),i.x=c,i.y=u,i.z=f,this}makePerspective(t,e,i,r,o,c,u=ti,f=!1){let d=this.elements,g=2*o/(e-t),y=2*o/(i-r),v=(e+t)/(e-t),b=(i+r)/(i-r),E,P;if(f)E=o/(c-o),P=c*o/(c-o);else if(u===ti)E=-(c+o)/(c-o),P=-2*c*o/(c-o);else if(u===hs)E=-c/(c-o),P=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=y,d[9]=b,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=P,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,o,c,u=ti,f=!1){let d=this.elements,g=2/(e-t),y=2/(i-r),v=-(e+t)/(e-t),b=-(i+r)/(i-r),E,P;if(f)E=1/(c-o),P=c/(c-o);else if(u===ti)E=-2/(c-o),P=-(c+o)/(c-o);else if(u===hs)E=-1/(c-o),P=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=y,d[9]=0,d[13]=b,d[2]=0,d[6]=0,d[10]=E,d[14]=P,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Wr=new lt,Jn=new ze,Ng=new lt(0,0,0),Dg=new lt(1,1,1),Xi=new lt,jo=new lt,Ln=new lt,nf=new ze,rf=new On,Ri=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,o=r[0],c=r[4],u=r[8],f=r[1],d=r[5],g=r[9],y=r[2],v=r[6],b=r[10];switch(e){case"XYZ":this._y=Math.asin(be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,b),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-y,o),this._z=0);break;case"ZXY":this._x=Math.asin(be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,b),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-be(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,b),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-y,o)):(this._x=0,this._y=Math.atan2(u,b));break;case"XZY":this._z=Math.asin(-be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-g,b),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rf.setFromEuler(this),this.setFromQuaternion(rf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";ps=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Og=0,sf=new lt,Yr=new On,wi=new ze,Ko=new lt,Ys=new lt,Fg=new lt,Ug=new On,of=new lt(1,0,0),af=new lt(0,1,0),lf=new lt(0,0,1),cf={type:"added"},Bg={type:"removed"},qr={type:"childadded",child:null},Uc={type:"childremoved",child:null},rn=class n extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new lt,e=new Ri,i=new On,r=new lt(1,1,1);function o(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ze},normalMatrix:{value:new ve}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.premultiply(Yr),this}rotateX(t){return this.rotateOnAxis(of,t)}rotateY(t){return this.rotateOnAxis(af,t)}rotateZ(t){return this.rotateOnAxis(lf,t)}translateOnAxis(t,e){return sf.copy(t).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(of,t)}translateY(t){return this.translateOnAxis(af,t)}translateZ(t){return this.translateOnAxis(lf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ko.copy(t):Ko.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Ys,Ko,this.up):wi.lookAt(Ko,Ys,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(wi),this.quaternion.premultiply(Yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(de("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cf),qr.child=t,this.dispatchEvent(qr),qr.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bg),Uc.child=t,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cf),qr.child=t,this.dispatchEvent(qr),qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,Fg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Ug,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*r,o[13]+=i-o[1]*e-o[5]*i-o[9]*r,o[14]+=r-o[2]*e-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(u=>({...u})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){let f=u.shapes;if(Array.isArray(f))for(let d=0,g=f.length;d<g;d++){let y=f[d];o(t.shapes,y)}else o(t.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(t.materials,this.material[f]));r.material=u}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){let f=this.animations[u];r.animations.push(o(t.animations,f))}}if(e){let u=c(t.geometries),f=c(t.materials),d=c(t.textures),g=c(t.images),y=c(t.shapes),v=c(t.skeletons),b=c(t.animations),E=c(t.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),y.length>0&&(i.shapes=y),v.length>0&&(i.skeletons=v),b.length>0&&(i.animations=b),E.length>0&&(i.nodes=E)}return i.object=r,i;function c(u){let f=[];for(let d in u){let g=u[d];delete g.metadata,f.push(g)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new lt(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ei=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},kg={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,o=null,c=null,u=this._targetRay,f=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(let P of t.hand.values()){let S=e.getJointPose(P,i),M=this._getHandJoint(d,P);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}let g=d.joints["index-finger-tip"],y=d.joints["thumb-tip"],v=g.position.distanceTo(y.position),b=.02,E=.005;d.inputState.pinching&&v>b+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=b-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:t,target:this})));u!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return u!==null&&(u.visible=r!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ei;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};ge=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ee.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Ee.workingColorSpace){if(t=Fh(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,c=2*i-o;this.r=Bc(c,o,t+1/3),this.g=Bc(c,o,t),this.b=Bc(c,o,t-1/3)}return Ee.colorSpaceToWorking(this,r),this}setStyle(t,e=wn){function i(o){o!==void 0&&parseFloat(o)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,c=r[1],u=r[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:he("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wn){let i=fd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return Ee.workingToColorSpace(_n.copy(this),t),Math.round(be(_n.r*255,0,255))*65536+Math.round(be(_n.g*255,0,255))*256+Math.round(be(_n.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.workingToColorSpace(_n.copy(this),e);let i=_n.r,r=_n.g,o=_n.b,c=Math.max(i,r,o),u=Math.min(i,r,o),f,d,g=(u+c)/2;if(u===c)f=0,d=0;else{let y=c-u;switch(d=g<=.5?y/(c+u):y/(2-c-u),c){case i:f=(r-o)/y+(r<o?6:0);break;case r:f=(o-i)/y+2;break;case o:f=(i-r)/y+4;break}f/=6}return t.h=f,t.s=d,t.l=g,t}getRGB(t,e=Ee.workingColorSpace){return Ee.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=wn){Ee.workingToColorSpace(_n.copy(this),t);let e=_n.r,i=_n.g,r=_n.b;return t!==wn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(Qo);let i=to(Wi.h,Qo.h,e),r=to(Wi.s,Qo.s,e),o=to(Wi.l,Qo.l,e);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*r,this.g=o[1]*e+o[4]*i+o[7]*r,this.b=o[2]*e+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new ge;ge.NAMES=fd;ao=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},jn=new lt,Ei=new lt,kc=new lt,Ti=new lt,$r=new lt,Zr=new lt,hf=new lt,zc=new lt,Vc=new lt,Hc=new lt,Gc=new Je,Xc=new Je,Wc=new Je,di=class n{constructor(t=new lt,e=new lt,i=new lt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),jn.subVectors(t,e),r.cross(jn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,i,r,o){jn.subVectors(r,e),Ei.subVectors(i,e),kc.subVectors(t,e);let c=jn.dot(jn),u=jn.dot(Ei),f=jn.dot(kc),d=Ei.dot(Ei),g=Ei.dot(kc),y=c*d-u*u;if(y===0)return o.set(0,0,0),null;let v=1/y,b=(d*f-u*g)*v,E=(c*g-u*f)*v;return o.set(1-b-E,E,b)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,i,r,o,c,u,f){return this.getBarycoord(t,e,i,r,Ti)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Ti.x),f.addScaledVector(c,Ti.y),f.addScaledVector(u,Ti.z),f)}static getInterpolatedAttribute(t,e,i,r,o,c){return Gc.setScalar(0),Xc.setScalar(0),Wc.setScalar(0),Gc.fromBufferAttribute(t,e),Xc.fromBufferAttribute(t,i),Wc.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector(Gc,o.x),c.addScaledVector(Xc,o.y),c.addScaledVector(Wc,o.z),c}static isFrontFacing(t,e,i,r){return jn.subVectors(i,e),Ei.subVectors(t,e),jn.cross(Ei).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),jn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,o=this.c,c,u;$r.subVectors(r,i),Zr.subVectors(o,i),zc.subVectors(t,i);let f=$r.dot(zc),d=Zr.dot(zc);if(f<=0&&d<=0)return e.copy(i);Vc.subVectors(t,r);let g=$r.dot(Vc),y=Zr.dot(Vc);if(g>=0&&y<=g)return e.copy(r);let v=f*y-g*d;if(v<=0&&f>=0&&g<=0)return c=f/(f-g),e.copy(i).addScaledVector($r,c);Hc.subVectors(t,o);let b=$r.dot(Hc),E=Zr.dot(Hc);if(E>=0&&b<=E)return e.copy(o);let P=b*d-f*E;if(P<=0&&d>=0&&E<=0)return u=d/(d-E),e.copy(i).addScaledVector(Zr,u);let S=g*E-b*y;if(S<=0&&y-g>=0&&b-E>=0)return hf.subVectors(o,r),u=(y-g)/(y-g+(b-E)),e.copy(r).addScaledVector(hf,u);let M=1/(S+P+v);return c=P*M,u=v*M,e.copy(i).addScaledVector($r,c).addScaledVector(Zr,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zi=class{constructor(t=new lt(1/0,1/0,1/0),e=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,Kn):Kn.fromBufferAttribute(o,c),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}let r=t.children;for(let o=0,c=r.length;o<c;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),ea.subVectors(this.max,qs),Jr.subVectors(t.a,qs),jr.subVectors(t.b,qs),Kr.subVectors(t.c,qs),Yi.subVectors(jr,Jr),qi.subVectors(Kr,jr),mr.subVectors(Jr,Kr);let e=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-mr.z,mr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,mr.z,0,-mr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-mr.y,mr.x,0];return!Yc(e,Jr,jr,Kr,ea)||(e=[1,0,0,0,1,0,0,0,1],!Yc(e,Jr,jr,Kr,ea))?!1:(na.crossVectors(Yi,qi),e=[na.x,na.y,na.z],Yc(e,Jr,jr,Kr,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ai=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Kn=new lt,ta=new Zi,Jr=new lt,jr=new lt,Kr=new lt,Yi=new lt,qi=new lt,mr=new lt,qs=new lt,ea=new lt,na=new lt,gr=new lt;en=new lt,ia=new oe,zg=0,Ge=class extends ni{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Dh,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),r=ke(r,this.array),o=ke(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},lo=class extends Ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}},co=class extends Ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}},Xe=class extends Ge{constructor(t,e,i){super(new Float32Array(t),e,i)}},Vg=new Zi,$s=new lt,qc=new lt,xr=class{constructor(t=new lt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Vg.setFromPoints(t).getCenter(i);let r=0;for(let o=0,c=t.length;o<c;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector($s,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(qc)),this.expandByPoint($s.copy(t.center).sub(qc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Hg=0,Xn=new ze,$c=new rn,Qr=new lt,Nn=new Zi,Zs=new Zi,cn=new lt,Ze=class n extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fg(t)?co:lo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new ve().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,i){return Xn.makeTranslation(t,e,i),this.applyMatrix4(Xn),this}scale(t,e,i){return Xn.makeScale(t,e,i),this.applyMatrix4(Xn),this}lookAt(t){return $c.lookAt(t),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,o=t.length;r<o;r++){let c=t[r];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Xe(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let o=e[i];Nn.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){let u=e[o];Zs.setFromBufferAttribute(u),this.morphTargetsRelative?(cn.addVectors(Nn.min,Zs.min),Nn.expandByPoint(cn),cn.addVectors(Nn.max,Zs.max),Nn.expandByPoint(cn)):(Nn.expandByPoint(Zs.min),Nn.expandByPoint(Zs.max))}Nn.getCenter(i);let r=0;for(let o=0,c=t.count;o<c;o++)cn.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(cn));if(e)for(let o=0,c=e.length;o<c;o++){let u=e[o],f=this.morphTargetsRelative;for(let d=0,g=u.count;d<g;d++)cn.fromBufferAttribute(u,d),f&&(Qr.fromBufferAttribute(t,d),cn.add(Qr)),r=Math.max(r,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,o=e.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Ge(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));let u=[],f=[];for(let C=0;C<i.count;C++)u[C]=new lt,f[C]=new lt;let d=new lt,g=new lt,y=new lt,v=new oe,b=new oe,E=new oe,P=new lt,S=new lt;function M(C,k,Y){d.fromBufferAttribute(i,C),g.fromBufferAttribute(i,k),y.fromBufferAttribute(i,Y),v.fromBufferAttribute(o,C),b.fromBufferAttribute(o,k),E.fromBufferAttribute(o,Y),g.sub(d),y.sub(d),b.sub(v),E.sub(v);let nt=1/(b.x*E.y-E.x*b.y);isFinite(nt)&&(P.copy(g).multiplyScalar(E.y).addScaledVector(y,-b.y).multiplyScalar(nt),S.copy(y).multiplyScalar(b.x).addScaledVector(g,-E.x).multiplyScalar(nt),u[C].add(P),u[k].add(P),u[Y].add(P),f[C].add(S),f[k].add(S),f[Y].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let C=0,k=F.length;C<k;++C){let Y=F[C],nt=Y.start,rt=Y.count;for(let et=nt,Q=nt+rt;et<Q;et+=3)M(t.getX(et+0),t.getX(et+1),t.getX(et+2))}let H=new lt,L=new lt,U=new lt,B=new lt;function q(C){U.fromBufferAttribute(r,C),B.copy(U);let k=u[C];H.copy(k),H.sub(U.multiplyScalar(U.dot(k))).normalize(),L.crossVectors(B,k);let nt=L.dot(f[C])<0?-1:1;c.setXYZW(C,H.x,H.y,H.z,nt)}for(let C=0,k=F.length;C<k;++C){let Y=F[C],nt=Y.start,rt=Y.count;for(let et=nt,Q=nt+rt;et<Q;et+=3)q(t.getX(et+0)),q(t.getX(et+1)),q(t.getX(et+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,b=i.count;v<b;v++)i.setXYZ(v,0,0,0);let r=new lt,o=new lt,c=new lt,u=new lt,f=new lt,d=new lt,g=new lt,y=new lt;if(t)for(let v=0,b=t.count;v<b;v+=3){let E=t.getX(v+0),P=t.getX(v+1),S=t.getX(v+2);r.fromBufferAttribute(e,E),o.fromBufferAttribute(e,P),c.fromBufferAttribute(e,S),g.subVectors(c,o),y.subVectors(r,o),g.cross(y),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,P),d.fromBufferAttribute(i,S),u.add(g),f.add(g),d.add(g),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(P,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,b=e.count;v<b;v+=3)r.fromBufferAttribute(e,v+0),o.fromBufferAttribute(e,v+1),c.fromBufferAttribute(e,v+2),g.subVectors(c,o),y.subVectors(r,o),g.cross(y),i.setXYZ(v+0,g.x,g.y,g.z),i.setXYZ(v+1,g.x,g.y,g.z),i.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(u,f){let d=u.array,g=u.itemSize,y=u.normalized,v=new d.constructor(f.length*g),b=0,E=0;for(let P=0,S=f.length;P<S;P++){u.isInterleavedBufferAttribute?b=f[P]*u.data.stride+u.offset:b=f[P]*g;for(let M=0;M<g;M++)v[E++]=d[b++]}return new Ge(v,g,y)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let u in r){let f=r[u],d=t(f,i);e.setAttribute(u,d)}let o=this.morphAttributes;for(let u in o){let f=[],d=o[u];for(let g=0,y=d.length;g<y;g++){let v=d[g],b=t(v,i);f.push(b)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let u=0,f=c.length;u<f;u++){let d=c[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let f=this.parameters;for(let d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let f in i){let d=i[f];t.data.attributes[f]=d.toJSON(t.data)}let r={},o=!1;for(let f in this.morphAttributes){let d=this.morphAttributes[f],g=[];for(let y=0,v=d.length;y<v;y++){let b=d[y];g.push(b.toJSON(t.data))}g.length>0&&(r[f]=g,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let d in r){let g=r[d];this.setAttribute(d,g.clone(e))}let o=t.morphAttributes;for(let d in o){let g=[],y=o[d];for(let v=0,b=y.length;v<b;v++)g.push(y[v].clone(e));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let d=0,g=c.length;d<g;d++){let y=c[d];this.addGroup(y.start,y.count,y.materialIndex)}let u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());let f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},za=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dh,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},bn=new lt,ho=class n{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),r=ke(r,this.array),o=ke(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){so("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){so("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zc=new lt,Gg=new lt,Xg=new ve,Dn=class{constructor(t=new lt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=Zc.subVectors(i,e).cross(Gg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(Zc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let c=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:e.copy(t.start).addScaledVector(r,c)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Xg.getNormalMatrix(t),r=this.coplanarPoint(Zc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Wg=0,gi=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=ws,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){he(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){he(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let c=[];for(let u in o){let f=o[u];delete f.metadata,c.push(f)}return c}if(e){let o=r(t.textures),c=r(t.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Dn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new oe().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},gs=class extends gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Js=new lt,es=new lt,ns=new lt,is=new oe,js=new oe,dd=new ze,ra=new lt,Ks=new lt,sa=new lt,uf=new oe,Jc=new oe,ff=new oe,uo=class extends rn{constructor(t=new gs){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new Ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new za(e,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new ho(i,3,0,!1)),ts.setAttribute("uv",new ho(i,2,3,!1))}this.geometry=ts,this.material=t,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&de('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),dd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ns.z);let i=this.material.rotation,r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));let c=this.center;oa(ra.set(-.5,-.5,0),ns,c,es,r,o),oa(Ks.set(.5,-.5,0),ns,c,es,r,o),oa(sa.set(.5,.5,0),ns,c,es,r,o),uf.set(0,0),Jc.set(1,0),ff.set(1,1);let u=t.ray.intersectTriangle(ra,Ks,sa,!1,Js);if(u===null&&(oa(Ks.set(-.5,.5,0),ns,c,es,r,o),Jc.set(0,1),u=t.ray.intersectTriangle(ra,sa,Ks,!1,Js),u===null))return;let f=t.ray.origin.distanceTo(Js);f<t.near||f>t.far||e.push({distance:f,point:Js.clone(),uv:di.getInterpolation(Js,ra,Ks,sa,uf,Jc,ff,new oe),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Ci=new lt,jc=new lt,aa=new lt,la=new lt,Ji=class{constructor(t=new lt,e=new lt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){jc.copy(t).add(e).multiplyScalar(.5),aa.copy(e).sub(t).normalize(),la.copy(this.origin).sub(jc);let o=t.distanceTo(e)*.5,c=-this.direction.dot(aa),u=la.dot(this.direction),f=-la.dot(aa),d=la.lengthSq(),g=Math.abs(1-c*c),y,v,b,E;if(g>0)if(y=c*f-u,v=c*u-f,E=o*g,y>=0)if(v>=-E)if(v<=E){let P=1/g;y*=P,v*=P,b=y*(y+c*v+2*u)+v*(c*y+v+2*f)+d}else v=o,y=Math.max(0,-(c*v+u)),b=-y*y+v*(v+2*f)+d;else v=-o,y=Math.max(0,-(c*v+u)),b=-y*y+v*(v+2*f)+d;else v<=-E?(y=Math.max(0,-(-c*o+u)),v=y>0?-o:Math.min(Math.max(-o,-f),o),b=-y*y+v*(v+2*f)+d):v<=E?(y=0,v=Math.min(Math.max(-o,-f),o),b=v*(v+2*f)+d):(y=Math.max(0,-(c*o+u)),v=y>0?o:Math.min(Math.max(-o,-f),o),b=-y*y+v*(v+2*f)+d);else v=c>0?-o:o,y=Math.max(0,-(c*v+u)),b=-y*y+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,y),r&&r.copy(jc).addScaledVector(aa,v),b}intersectSphere(t,e){if(t.radius<0)return null;Ci.subVectors(t.center,this.origin);let i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,o=t.radius*t.radius;if(r>o)return null;let c=Math.sqrt(o-r),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,o,c,u,f,d=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,v=this.origin;return d>=0?(i=(t.min.x-v.x)*d,r=(t.max.x-v.x)*d):(i=(t.max.x-v.x)*d,r=(t.min.x-v.x)*d),g>=0?(o=(t.min.y-v.y)*g,c=(t.max.y-v.y)*g):(o=(t.max.y-v.y)*g,c=(t.min.y-v.y)*g),i>c||o>r||((o>i||isNaN(i))&&(i=o),(c<r||isNaN(r))&&(r=c),y>=0?(u=(t.min.z-v.z)*y,f=(t.max.z-v.z)*y):(u=(t.max.z-v.z)*y,f=(t.min.z-v.z)*y),i>f||u>r)||((u>i||i!==i)&&(i=u),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,r,o){let c=this.origin,u=this.direction,f=u.x,d=u.y,g=u.z,y=t.x-c.x,v=t.y-c.y,b=t.z-c.z,E=e.x-c.x,P=e.y-c.y,S=e.z-c.z,M=i.x-c.x,F=i.y-c.y,H=i.z-c.z,L=Math.abs(f),U=Math.abs(d),B=Math.abs(g),q,C,k,Y,nt,rt,et,Q,tt,dt,X,pt;if(L>=U&&L>=B?(k=f,rt=y,tt=E,pt=M,f>=0?(q=d,C=g,Y=v,nt=b,et=P,Q=S,dt=F,X=H):(q=g,C=d,Y=b,nt=v,et=S,Q=P,dt=H,X=F)):U>=B?(k=d,rt=v,tt=P,pt=F,d>=0?(q=g,C=f,Y=b,nt=y,et=S,Q=E,dt=H,X=M):(q=f,C=g,Y=y,nt=b,et=E,Q=S,dt=M,X=H)):(k=g,rt=b,tt=S,pt=H,g>=0?(q=f,C=d,Y=y,nt=v,et=E,Q=P,dt=M,X=F):(q=d,C=f,Y=v,nt=y,et=P,Q=E,dt=F,X=M)),k===0)return null;let ut=q/k,gt=C/k,yt=1/k,Ft=Y-ut*rt,zt=nt-gt*rt,Wt=et-ut*tt,ie=Q-gt*tt,ce=dt-ut*pt,V=X-gt*pt,Pt=ce*ie-V*Wt,Jt=Ft*V-zt*ce,te=Wt*zt-ie*Ft;if(r){if(Pt<0||Jt<0||te<0)return null}else if((Pt<0||Jt<0||te<0)&&(Pt>0||Jt>0||te>0))return null;let Vt=Pt+Jt+te;if(Vt===0)return null;let le=yt*(Pt*rt+Jt*tt+te*pt);return(Vt>0?le<0:le>0)?null:this.at(le/Vt,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fn=class extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},df=new ze,_r=new Ji,ca=new xr,pf=new lt,ha=new lt,ua=new lt,fa=new lt,Kc=new lt,da=new lt,mf=new lt,pa=new lt,Oe=class extends rn{constructor(t=new Ze,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){let u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let u=this.morphTargetInfluences;if(o&&u){da.set(0,0,0);for(let f=0,d=o.length;f<d;f++){let g=u[f],y=o[f];g!==0&&(Kc.fromBufferAttribute(y,t),c?da.addScaledVector(Kc,g):da.addScaledVector(Kc.sub(e),g))}e.add(da)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(o),_r.copy(t.ray).recast(t.near),!(ca.containsPoint(_r.origin)===!1&&(_r.intersectSphere(ca,pf)===null||_r.origin.distanceToSquared(pf)>(t.far-t.near)**2))&&(df.copy(o).invert(),_r.copy(t.ray).applyMatrix4(df),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_r)))}_computeIntersections(t,e,i){let r,o=this.geometry,c=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,g=o.attributes.uv1,y=o.attributes.normal,v=o.groups,b=o.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,P=v.length;E<P;E++){let S=v[E],M=c[S.materialIndex],F=Math.max(S.start,b.start),H=Math.min(u.count,Math.min(S.start+S.count,b.start+b.count));for(let L=F,U=H;L<U;L+=3){let B=u.getX(L),q=u.getX(L+1),C=u.getX(L+2);r=ma(this,M,t,i,d,g,y,B,q,C),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{let E=Math.max(0,b.start),P=Math.min(u.count,b.start+b.count);for(let S=E,M=P;S<M;S+=3){let F=u.getX(S),H=u.getX(S+1),L=u.getX(S+2);r=ma(this,c,t,i,d,g,y,F,H,L),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,P=v.length;E<P;E++){let S=v[E],M=c[S.materialIndex],F=Math.max(S.start,b.start),H=Math.min(f.count,Math.min(S.start+S.count,b.start+b.count));for(let L=F,U=H;L<U;L+=3){let B=L,q=L+1,C=L+2;r=ma(this,M,t,i,d,g,y,B,q,C),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{let E=Math.max(0,b.start),P=Math.min(f.count,b.start+b.count);for(let S=E,M=P;S<M;S+=3){let F=S,H=S+1,L=S+2;r=ma(this,c,t,i,d,g,y,F,H,L),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}}};Va=class extends En{constructor(t=null,e=1,i=1,r,o,c,u,f,d=hn,g=hn,y,v){super(null,c,u,f,d,g,r,o,y,v),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vr=new xr,qg=new oe(.5,.5),ga=new lt,_s=class{constructor(t=new Dn,e=new Dn,i=new Dn,r=new Dn,o=new Dn,c=new Dn){this.planes=[t,e,i,r,o,c]}set(t,e,i,r,o,c){let u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(r),u[4].copy(o),u[5].copy(c),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti,i=!1){let r=this.planes,o=t.elements,c=o[0],u=o[1],f=o[2],d=o[3],g=o[4],y=o[5],v=o[6],b=o[7],E=o[8],P=o[9],S=o[10],M=o[11],F=o[12],H=o[13],L=o[14],U=o[15];if(r[0].setComponents(d-c,b-g,M-E,U-F).normalize(),r[1].setComponents(d+c,b+g,M+E,U+F).normalize(),r[2].setComponents(d+u,b+y,M+P,U+H).normalize(),r[3].setComponents(d-u,b-y,M-P,U-H).normalize(),i)r[4].setComponents(f,v,S,L).normalize(),r[5].setComponents(d-f,b-v,M-S,U-L).normalize();else if(r[4].setComponents(d-f,b-v,M-S,U-L).normalize(),e===ti)r[5].setComponents(d+f,b+v,M+S,U+L).normalize();else if(e===hs)r[5].setComponents(f,v,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(t){vr.center.set(0,0,0);let e=qg.distanceTo(t.center);return vr.radius=.7071067811865476+e,vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(ga.x=r.normal.x>0?t.max.x:t.min.x,ga.y=r.normal.y>0?t.max.y:t.min.y,ga.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ii=class extends gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ha=new lt,Ga=new lt,gf=new ze,Qs=new Ji,_a=new xr,Qc=new lt,_f=new lt,Mr=class extends rn{constructor(t=new Ze,e=new ii){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,o=e.count;r<o;r++)Ha.fromBufferAttribute(e,r-1),Ga.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ha.distanceTo(Ga);t.setAttribute("lineDistance",new Xe(i,1))}else he("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(r),_a.radius+=o,t.ray.intersectsSphere(_a)===!1)return;gf.copy(r).invert(),Qs.copy(t.ray).applyMatrix4(gf);let u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,g=i.index,v=i.attributes.position;if(g!==null){let b=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let P=b,S=E-1;P<S;P+=d){let M=g.getX(P),F=g.getX(P+1),H=va(this,t,Qs,f,M,F,P);H&&e.push(H)}if(this.isLineLoop){let P=g.getX(E-1),S=g.getX(b),M=va(this,t,Qs,f,P,S,E-1);M&&e.push(M)}}else{let b=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let P=b,S=E-1;P<S;P+=d){let M=va(this,t,Qs,f,P,P+1,P);M&&e.push(M)}if(this.isLineLoop){let P=va(this,t,Qs,f,E-1,b,E-1);P&&e.push(P)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){let u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}};vf=new lt,yf=new lt,Sr=class extends Mr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,o=e.count;r<o;r+=2)vf.fromBufferAttribute(e,r),yf.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+vf.distanceTo(yf);t.setAttribute("lineDistance",new Xe(i,1))}else he("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fo=class extends En{constructor(t=[],e=sr,i,r,o,c,u,f,d,g){super(t,e,i,r,o,c,u,f,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},po=class extends En{constructor(t,e,i,r,o,c,u,f,d){super(t,e,i,r,o,c,u,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},ji=class extends En{constructor(t,e,i=si,r,o,c,u=hn,f=hn,d,g=mi,y=1){if(g!==mi&&g!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let v={width:t,height:e,depth:y};super(v,r,o,c,u,f,g,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Xa=class extends ji{constructor(t,e=si,i=sr,r,o,c=hn,u=hn,f,d=mi){let g={width:t,height:t,depth:1},y=[g,g,g,g,g,g];super(t,t,e,i,r,o,c,u,f,d),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mo=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ki=class n extends Ze{constructor(t=1,e=1,i=1,r=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:o,depthSegments:c};let u=this;r=Math.floor(r),o=Math.floor(o),c=Math.floor(c);let f=[],d=[],g=[],y=[],v=0,b=0;E("z","y","x",-1,-1,i,e,t,c,o,0),E("z","y","x",1,-1,i,e,-t,c,o,1),E("x","z","y",1,1,t,i,e,r,c,2),E("x","z","y",1,-1,t,i,-e,r,c,3),E("x","y","z",1,-1,t,e,i,r,o,4),E("x","y","z",-1,-1,t,e,-i,r,o,5),this.setIndex(f),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(g,3)),this.setAttribute("uv",new Xe(y,2));function E(P,S,M,F,H,L,U,B,q,C,k){let Y=L/q,nt=U/C,rt=L/2,et=U/2,Q=B/2,tt=q+1,dt=C+1,X=0,pt=0,ut=new lt;for(let gt=0;gt<dt;gt++){let yt=gt*nt-et;for(let Ft=0;Ft<tt;Ft++){let zt=Ft*Y-rt;ut[P]=zt*F,ut[S]=yt*H,ut[M]=Q,d.push(ut.x,ut.y,ut.z),ut[P]=0,ut[S]=0,ut[M]=B>0?1:-1,g.push(ut.x,ut.y,ut.z),y.push(Ft/q),y.push(1-gt/C),X+=1}}for(let gt=0;gt<C;gt++)for(let yt=0;yt<q;yt++){let Ft=v+yt+tt*gt,zt=v+yt+tt*(gt+1),Wt=v+(yt+1)+tt*(gt+1),ie=v+(yt+1)+tt*gt;f.push(Ft,zt,ie),f.push(zt,Wt,ie),pt+=6}u.addGroup(b,pt,k),b+=pt,v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Li=class n extends Ze{constructor(t=1,e=1,i=1,r=32,o=1,c=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:f};let d=this;r=Math.floor(r),o=Math.floor(o);let g=[],y=[],v=[],b=[],E=0,P=[],S=i/2,M=0;F(),c===!1&&(t>0&&H(!0),e>0&&H(!1)),this.setIndex(g),this.setAttribute("position",new Xe(y,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(b,2));function F(){let L=new lt,U=new lt,B=0,q=(e-t)/i;for(let C=0;C<=o;C++){let k=[],Y=C/o,nt=Y*(e-t)+t;for(let rt=0;rt<=r;rt++){let et=rt/r,Q=et*f+u,tt=Math.sin(Q),dt=Math.cos(Q);U.x=nt*tt,U.y=-Y*i+S,U.z=nt*dt,y.push(U.x,U.y,U.z),L.set(tt,q,dt).normalize(),v.push(L.x,L.y,L.z),b.push(et,1-Y),k.push(E++)}P.push(k)}for(let C=0;C<r;C++)for(let k=0;k<o;k++){let Y=P[k][C],nt=P[k+1][C],rt=P[k+1][C+1],et=P[k][C+1];(t>0||k!==0)&&(g.push(Y,nt,et),B+=3),(e>0||k!==o-1)&&(g.push(nt,rt,et),B+=3)}d.addGroup(M,B,0),M+=B}function H(L){let U=E,B=new oe,q=new lt,C=0,k=L===!0?t:e,Y=L===!0?1:-1;for(let rt=1;rt<=r;rt++)y.push(0,S*Y,0),v.push(0,Y,0),b.push(.5,.5),E++;let nt=E;for(let rt=0;rt<=r;rt++){let Q=rt/r*f+u,tt=Math.cos(Q),dt=Math.sin(Q);q.x=k*dt,q.y=S*Y,q.z=k*tt,y.push(q.x,q.y,q.z),v.push(0,Y,0),B.x=tt*.5+.5,B.y=dt*.5*Y+.5,b.push(B.x,B.y),E++}for(let rt=0;rt<r;rt++){let et=U+rt,Q=nt+rt;L===!0?g.push(Q,Q+1,et):g.push(Q+1,Q,et),C+=3}d.addGroup(M,C,L===!0?1:2),M+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vs=class n extends Li{constructor(t=1,e=1,i=32,r=1,o=!1,c=0,u=Math.PI*2){super(0,t,e,i,r,o,c,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ya=new lt,xa=new lt,th=new lt,Ma=new di,ys=class extends Ze{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),o=Math.cos(as*e),c=t.getIndex(),u=t.getAttribute("position"),f=c?c.count:u.count,d=[0,0,0],g=["a","b","c"],y=new Array(3),v={},b=[];for(let E=0;E<f;E+=3){c?(d[0]=c.getX(E),d[1]=c.getX(E+1),d[2]=c.getX(E+2)):(d[0]=E,d[1]=E+1,d[2]=E+2);let{a:P,b:S,c:M}=Ma;if(P.fromBufferAttribute(u,d[0]),S.fromBufferAttribute(u,d[1]),M.fromBufferAttribute(u,d[2]),Ma.getNormal(th),y[0]=`${Math.round(P.x*r)},${Math.round(P.y*r)},${Math.round(P.z*r)}`,y[1]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,y[2]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,!(y[0]===y[1]||y[1]===y[2]||y[2]===y[0]))for(let F=0;F<3;F++){let H=(F+1)%3,L=y[F],U=y[H],B=Ma[g[F]],q=Ma[g[H]],C=`${L}_${U}`,k=`${U}_${L}`;k in v&&v[k]?(th.dot(v[k].normal)<=o&&(b.push(B.x,B.y,B.z),b.push(q.x,q.y,q.z)),v[k]=null):C in v||(v[C]={index0:d[F],index1:d[H],normal:th.clone()})}}for(let E in v)if(v[E]){let{index0:P,index1:S}=v[E];ya.fromBufferAttribute(u,P),xa.fromBufferAttribute(u,S),b.push(ya.x,ya.y,ya.z),b.push(xa.x,xa.y,xa.z)}this.setAttribute("position",new Xe(b,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},go=class n extends Ze{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let o=t/2,c=e/2,u=Math.floor(i),f=Math.floor(r),d=u+1,g=f+1,y=t/u,v=e/f,b=[],E=[],P=[],S=[];for(let M=0;M<g;M++){let F=M*v-c;for(let H=0;H<d;H++){let L=H*y-o;E.push(L,-F,0),P.push(0,0,1),S.push(H/u),S.push(1-M/f)}}for(let M=0;M<f;M++)for(let F=0;F<u;F++){let H=F+d*M,L=F+d*(M+1),U=F+1+d*(M+1),B=F+1+d*M;b.push(H,L,B),b.push(L,U,B)}this.setIndex(b),this.setAttribute("position",new Xe(E,3)),this.setAttribute("normal",new Xe(P,3)),this.setAttribute("uv",new Xe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},_o=class n extends Ze{constructor(t=.5,e=1,i=32,r=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:c},i=Math.max(3,i),r=Math.max(1,r);let u=[],f=[],d=[],g=[],y=t,v=(e-t)/r,b=new lt,E=new oe;for(let P=0;P<=r;P++){for(let S=0;S<=i;S++){let M=o+S/i*c;b.x=y*Math.cos(M),b.y=y*Math.sin(M),f.push(b.x,b.y,b.z),d.push(0,0,1),E.x=(b.x/e+1)/2,E.y=(b.y/e+1)/2,g.push(E.x,E.y)}y+=v}for(let P=0;P<r;P++){let S=P*(i+1);for(let M=0;M<i;M++){let F=M+S,H=F,L=F+i+1,U=F+i+2,B=F+1;u.push(H,L,B),u.push(L,U,B)}}this.setIndex(u),this.setAttribute("position",new Xe(f,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},br=class n extends Ze{constructor(t=1,e=32,i=16,r=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:o,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let f=Math.min(c+u,Math.PI),d=0,g=[],y=new lt,v=new lt,b=[],E=[],P=[],S=[];for(let M=0;M<=i;M++){let F=[],H=M/i,L=c+H*u,U=t*Math.cos(L),B=Math.sqrt(t*t-U*U),q=0;M===0&&c===0?q=.5/e:M===i&&f===Math.PI&&(q=-.5/e);for(let C=0;C<=e;C++){let k=C/e,Y=r+k*o;y.x=-B*Math.cos(Y),y.y=U,y.z=B*Math.sin(Y),E.push(y.x,y.y,y.z),v.copy(y).normalize(),P.push(v.x,v.y,v.z),S.push(k+q,1-H),F.push(d++)}g.push(F)}for(let M=0;M<i;M++)for(let F=0;F<e;F++){let H=g[M][F+1],L=g[M][F],U=g[M+1][F],B=g[M+1][F+1];(M!==0||c>0)&&b.push(H,L,B),(M!==i-1||f<Math.PI)&&b.push(L,U,B)}this.setIndex(b),this.setAttribute("position",new Xe(E,3)),this.setAttribute("normal",new Xe(P,3)),this.setAttribute("uv",new Xe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};pd={clone:Ar,merge:xn},Zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zg,this.fragmentShader=Jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=$g(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(r.value);break;case"v2":this.uniforms[i].value=new oe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new lt().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Je().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ze().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wa=class extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bn=class extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ya=class extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},vo=class extends ii{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};Qi=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],o=e[i-1];n:{t:{let c;e:{i:if(!(t<r)){for(let u=i+2;;){if(r===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(o=r,r=e[++i],t<r)break t}c=e.length;break e}if(!(t>=o)){let u=e[1];t<u&&(i=2,o=u);for(let f=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(r=o,o=e[--i-1],t>=o)break t}c=i,i=0;break e}break n}for(;i<c;){let u=i+c>>>1;t<e[u]?c=u:i=u+1}if(r=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r;for(let c=0;c!==r;++c)e[c]=i[o+c];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$a=class extends Qi{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(t,e,i){let r=this.parameterPositions,o=t-2,c=t+1,u=r[o],f=r[c];if(u===void 0)switch(this.getSettings_().endingStart){case oh:o=t,u=2*e-i;break;case ah:o=r.length-2,u=e+r[o]-r[o+1];break;default:o=t,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case oh:c=t,f=2*i-e;break;case ah:c=1,f=i+r[1]-r[0];break;default:c=t-1,f=e}let d=(i-e)*.5,g=this.valueSize;this._weightPrev=d/(e-u),this._weightNext=d/(f-i),this._offsetPrev=o*g,this._offsetNext=c*g}interpolate_(t,e,i,r){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,g=this._offsetPrev,y=this._offsetNext,v=this._weightPrev,b=this._weightNext,E=(i-e)/(r-e),P=E*E,S=P*E,M=-v*S+2*v*P-v*E,F=(1+v)*S+(-1.5-2*v)*P+(-.5+v)*E+1,H=(-1-b)*S+(1.5+b)*P+.5*E,L=b*S-b*P;for(let U=0;U!==u;++U)o[U]=M*c[g+U]+F*c[d+U]+H*c[f+U]+L*c[y+U];return o}},Za=class extends Qi{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,g=(i-e)/(r-e),y=1-g;for(let v=0;v!==u;++v)o[v]=c[d+v]*y+c[f+v]*g;return o}},Ja=class extends Qi{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ja=class extends Qi{interpolate_(t,e,i,r){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,g=this.inTangents,y=this.outTangents;if(!g||!y){let E=(i-e)/(r-e),P=1-E;for(let S=0;S!==u;++S)o[S]=c[d+S]*P+c[f+S]*E;return o}let v=u*2,b=t-1;for(let E=0;E!==u;++E){let P=c[d+E],S=c[f+E],M=b*v+E*2,F=y[M],H=y[M+1],L=t*v+E*2,U=g[L],B=g[L+1],q=Kg(i,e,F,U,r);o[E]=md(q,P,H,B,S)}return o}};kn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),eh(t.settings)&&(i.settings={inTangents:rs(t.settings.inTangents,Array),outTangents:rs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case eo:e=this.InterpolantFactoryMethodDiscrete;break;case Fa:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case rh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return he("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return rh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;eh(this.settings)&&(Mf(this.settings.inTangents,t),Mf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,o=0,c=r-1;for(;o!==r&&i[o]<t;)++o;for(;c!==-1&&i[c]>e;)--c;if(++c,o!==0||c!==r){o>=c&&(c=Math.max(c,1),o=c-1);let u=this.getValueSize();this.times=i.slice(o,c),this.values=this.values.slice(o*u,c*u)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(de("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,o=i.length;o===0&&(de("KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let u=0;u!==o;u++){let f=i[u];if(typeof f=="number"&&isNaN(f)){de("KeyframeTrack: Time is not a valid number.",this,u,f),t=!1;break}if(c!==null&&c>f){de("KeyframeTrack: Out of order keys.",this,u,f,c),t=!1;break}c=f}if(r!==void 0&&dg(r))for(let u=0,f=r.length;u!==f;++u){let d=r[u];if(isNaN(d)){de("KeyframeTrack: Value is not a valid number.",this,u,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ea,o=t.length-1,c=1;for(let u=1;u<o;++u){let f=!1,d=t[u],g=t[u+1];if(d!==g&&(u!==1||d!==t[0]))if(r)f=!0;else{let y=u*i,v=y-i,b=y+i;for(let E=0;E!==i;++E){let P=e[y+E];if(P!==e[v+E]||P!==e[b+E]){f=!0;break}}}if(f){if(u!==c){t[c]=t[u];let y=u*i,v=c*i;for(let b=0;b!==i;++b)e[v+b]=e[y+b]}++c}}if(o>0){t[c]=t[o];for(let u=o*i,f=c*i,d=0;d!==i;++d)e[f+d]=e[u+d];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,eh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Fa;tr=class extends kn{constructor(t,e,i){super(t,e,i)}};tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=eo;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;Ka=class extends kn{constructor(t,e,i,r){super(t,e,i,r)}};Ka.prototype.ValueTypeName="color";Qa=class extends kn{constructor(t,e,i,r){super(t,e,i,r)}};Qa.prototype.ValueTypeName="number";tl=class extends Qi{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-e)/(r-e),d=t*u;for(let g=d+u;d!==g;d+=4)On.slerpFlat(o,0,c,d-u,c,d,f);return o}},yo=class extends kn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;er=class extends kn{constructor(t,e,i){super(t,e,i)}};er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=eo;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;el=class extends kn{constructor(t,e,i,r){super(t,e,i,r)}};el.prototype.ValueTypeName="vector";nl=class{constructor(t,e,i){let r=this,o=!1,c=0,u=0,f,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(g){u++,o===!1&&r.onStart!==void 0&&r.onStart(g,c,u),o=!0},this.itemEnd=function(g){c++,r.onProgress!==void 0&&r.onProgress(g,c,u),c===u&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),f?f(g):g},this.setURLModifier=function(g){return f=g,this},this.addHandler=function(g,y){return d.push(g,y),this},this.removeHandler=function(g){let y=d.indexOf(g);return y!==-1&&d.splice(y,2),this},this.getHandler=function(g){for(let y=0,v=d.length;y<v;y+=2){let b=d[y],E=d[y+1];if(b.global&&(b.lastIndex=0),b.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gd=new nl,il=class{constructor(t){this.manager=t!==void 0?t:gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,o){i.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};il.DEFAULT_MATERIAL_NAME="__DEFAULT";xo=class extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Mo=class extends xo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},nh=new ze,Sf=new lt,bf=new lt,rl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Sf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sf),bf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(nh,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,c=r?r.z/o.x:1,u=r?r.w/o.y:1,f=r?r.x/o.x:0,d=r?r.y/o.y:0;t.coordinateSystem===hs||t.reversedDepth?e.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+d,0,0,1,0,0,0,0,1):e.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+d,0,0,.5,.5,0,0,0,1),e.multiply(nh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sa=new lt,ba=new On,fi=new lt,So=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sa,ba,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Sa,ba,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new lt,wf=new oe,Ef=new oe,vn=class extends So{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,wf,Ef),e.subVectors(Ef,wf)}setViewOffset(t,e,i,r,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(as*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,o=-.5*r,c=this.view;if(this.view!==null&&this.view.enabled){let f=c.fullWidth,d=c.fullHeight;o+=c.offsetX*r/f,e-=c.offsetY*i/d,r*=c.width/f,i*=c.height/d}let u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xs=class extends So{constructor(t=-1,e=1,i=1,r=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-t,c=i+t,u=r+e,f=r-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,u-=g*this.view.offsetY,f=u-g*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lh=class extends rl{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ms=class extends xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new lh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ss=-90,os=1,sl=class extends rn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new vn(ss,os,t,e);r.layers=this.layers,this.add(r);let o=new vn(ss,os,t,e);o.layers=this.layers,this.add(o);let c=new vn(ss,os,t,e);c.layers=this.layers,this.add(c);let u=new vn(ss,os,t,e);u.layers=this.layers,this.add(u);let f=new vn(ss,os,t,e);f.layers=this.layers,this.add(f);let d=new vn(ss,os,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,o,c,u,f]=e;for(let d of e)this.remove(d);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,c,u,f,d,g]=this.children,y=t.getRenderTarget(),v=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;let P=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,2,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,3,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,4,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=P,t.setRenderTarget(i,5,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,g),t.setRenderTarget(y,v,b),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}},ol=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},kh="\\[\\]\\.:\\/",Qg=new RegExp("["+kh+"]","g"),zh="[^"+kh+"]",t0="[^"+kh.replace("\\.","")+"]",e0=/((?:WC+[\/:])*)/.source.replace("WC",zh),n0=/(WCOD+)?/.source.replace("WCOD",t0),i0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zh),r0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zh),s0=new RegExp("^"+e0+n0+i0+r0+"$"),o0=["material","materials","bones","map"],ch=class{constructor(t,e,i){let r=i||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},$e=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qg,"")}static parseTrackName(t){let e=s0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=i.nodeName.substring(r+1);o0.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let c=0;c<o.length;c++){let u=o[c];if(u.name===e||u.uuid===e)return u;let f=i(u.children);if(f)return f}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){he("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){de("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){de("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){de("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===d){d=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){de("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){de("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){de("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){de("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let c=t[r];if(c===void 0){let d=e.nodeName;de("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",t);return}let u=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?u=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){de("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){de("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=ch;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];qM=new Float32Array(1),Tf=new ze,bo=class{constructor(t,e,i=0,r=1/0){this.ray=new Ji(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):de("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tf),this}intersectObject(t,e=!0,i=[]){return hh(t,this,i,e),i.sort(Af),i}intersectObjects(t,e=!0,i=[]){for(let r=0,o=t.length;r<o;r++)hh(t[r],this,i,e);return i.sort(Af),i}};Ss=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},uh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=r,this}},Cf=new lt,wo=class extends rn{constructor(t=new lt(0,0,1),e=new lt(0,0,0),i=1,r=16776960,o=i*.2,c=o*.2){super(),this.type="ArrowHelper",wa===void 0&&(wa=new Ze,wa.setAttribute("position",new Xe([0,0,0,0,1,0],3)),ih=new vs(.5,1,5,1),ih.translate(0,-.5,0)),this.position.copy(e),this.line=new Mr(wa,new ii({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Oe(ih,new Fn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,c)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Cf.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Cf,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Eo=class extends ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Bd(){let n=null,t=!1,e=null,i=null;function r(o,c){i=n.requestAnimationFrame(r),e(o,c)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function c0(n){let t=new WeakMap;function e(u,f){let d=u.array,g=u.usage,y=d.byteLength,v=n.createBuffer();n.bindBuffer(f,v),n.bufferData(f,d,g),u.onUploadCallback();let b;if(d instanceof Float32Array)b=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)b=n.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?b=n.HALF_FLOAT:b=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=n.SHORT;else if(d instanceof Uint32Array)b=n.UNSIGNED_INT;else if(d instanceof Int32Array)b=n.INT;else if(d instanceof Int8Array)b=n.BYTE;else if(d instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:y}}function i(u,f,d){let g=f.array,y=f.updateRanges;if(n.bindBuffer(d,u),y.length===0)n.bufferSubData(d,0,g);else{y.sort((b,E)=>b.start-E.start);let v=0;for(let b=1;b<y.length;b++){let E=y[v],P=y[b];P.start<=E.start+E.count+1?E.count=Math.max(E.count,P.start+P.count-E.start):(++v,y[v]=P)}y.length=v+1;for(let b=0,E=y.length;b<E;b++){let P=y[b];n.bufferSubData(d,P.start*g.BYTES_PER_ELEMENT,g,P.start,P.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);let f=t.get(u);f&&(n.deleteBuffer(f.buffer),t.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){let g=t.get(u);(!g||g.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}let d=t.get(u);if(d===void 0)t.set(u,e(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:r,remove:o,update:c}}function Wv(n,t,e,i,r,o){let c=new ge(0),u=r===!0?0:1,f,d,g=null,y=0,v=null;function b(F){let H=F.isScene===!0?F.background:null;if(H&&H.isTexture){let L=F.backgroundBlurriness>0;H=t.get(H,L)}return H}function E(F){let H=!1,L=b(F);L===null?S(c,u):L&&L.isColor&&(S(L,1),H=!0);let U=n.xr.getEnvironmentBlendMode();U==="additive"?e.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||H)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function P(F,H){let L=b(H);L&&(L.isCubeTexture||L.mapping===Ao)?(d===void 0&&(d=new Oe(new Ki(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ar(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,B,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=L,d.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(H.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(kd),d.material.toneMapped=Ee.getTransfer(L.colorSpace)!==De,(g!==L||y!==L.version||v!==n.toneMapping)&&(d.material.needsUpdate=!0,g=L,y=L.version,v=n.toneMapping),d.layers.enableAll(),F.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new Oe(new go(2,2),new Un({name:"BackgroundMaterial",uniforms:Ar(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,f.material.toneMapped=Ee.getTransfer(L.colorSpace)!==De,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||y!==L.version||v!==n.toneMapping)&&(f.material.needsUpdate=!0,g=L,y=L.version,v=n.toneMapping),f.layers.enableAll(),F.unshift(f,f.geometry,f.material,0,0,null))}function S(F,H){F.getRGB(Zl,Bh(n)),e.buffers.color.setClear(Zl.r,Zl.g,Zl.b,H,o)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(F,H=1){c.set(F),u=H,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(F){u=F,S(c,u)},render:E,addToRenderList:P,dispose:M}}function Yv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=v(null),o=r,c=!1;function u(nt,rt,et,Q,tt){let dt=!1,X=y(nt,Q,et,rt);o!==X&&(o=X,d(o.object)),dt=b(nt,Q,et,tt),dt&&E(nt,Q,et,tt),tt!==null&&t.update(tt,n.ELEMENT_ARRAY_BUFFER),(dt||c)&&(c=!1,L(nt,rt,et,Q),tt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function f(){return n.createVertexArray()}function d(nt){return n.bindVertexArray(nt)}function g(nt){return n.deleteVertexArray(nt)}function y(nt,rt,et,Q){let tt=Q.wireframe===!0,dt=i[rt.id];dt===void 0&&(dt={},i[rt.id]=dt);let X=nt.isInstancedMesh===!0?nt.id:0,pt=dt[X];pt===void 0&&(pt={},dt[X]=pt);let ut=pt[et.id];ut===void 0&&(ut={},pt[et.id]=ut);let gt=ut[tt];return gt===void 0&&(gt=v(f()),ut[tt]=gt),gt}function v(nt){let rt=[],et=[],Q=[];for(let tt=0;tt<e;tt++)rt[tt]=0,et[tt]=0,Q[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rt,enabledAttributes:et,attributeDivisors:Q,object:nt,attributes:{},index:null}}function b(nt,rt,et,Q){let tt=o.attributes,dt=rt.attributes,X=0,pt=et.getAttributes();for(let ut in pt)if(pt[ut].location>=0){let yt=tt[ut],Ft=dt[ut];if(Ft===void 0&&(ut==="instanceMatrix"&&nt.instanceMatrix&&(Ft=nt.instanceMatrix),ut==="instanceColor"&&nt.instanceColor&&(Ft=nt.instanceColor)),yt===void 0||yt.attribute!==Ft||Ft&&yt.data!==Ft.data)return!0;X++}return o.attributesNum!==X||o.index!==Q}function E(nt,rt,et,Q){let tt={},dt=rt.attributes,X=0,pt=et.getAttributes();for(let ut in pt)if(pt[ut].location>=0){let yt=dt[ut];yt===void 0&&(ut==="instanceMatrix"&&nt.instanceMatrix&&(yt=nt.instanceMatrix),ut==="instanceColor"&&nt.instanceColor&&(yt=nt.instanceColor));let Ft={};Ft.attribute=yt,yt&&yt.data&&(Ft.data=yt.data),tt[ut]=Ft,X++}o.attributes=tt,o.attributesNum=X,o.index=Q}function P(){let nt=o.newAttributes;for(let rt=0,et=nt.length;rt<et;rt++)nt[rt]=0}function S(nt){M(nt,0)}function M(nt,rt){let et=o.newAttributes,Q=o.enabledAttributes,tt=o.attributeDivisors;et[nt]=1,Q[nt]===0&&(n.enableVertexAttribArray(nt),Q[nt]=1),tt[nt]!==rt&&(n.vertexAttribDivisor(nt,rt),tt[nt]=rt)}function F(){let nt=o.newAttributes,rt=o.enabledAttributes;for(let et=0,Q=rt.length;et<Q;et++)rt[et]!==nt[et]&&(n.disableVertexAttribArray(et),rt[et]=0)}function H(nt,rt,et,Q,tt,dt,X){X===!0?n.vertexAttribIPointer(nt,rt,et,tt,dt):n.vertexAttribPointer(nt,rt,et,Q,tt,dt)}function L(nt,rt,et,Q){P();let tt=Q.attributes,dt=et.getAttributes(),X=rt.defaultAttributeValues;for(let pt in dt){let ut=dt[pt];if(ut.location>=0){let gt=tt[pt];if(gt===void 0&&(pt==="instanceMatrix"&&nt.instanceMatrix&&(gt=nt.instanceMatrix),pt==="instanceColor"&&nt.instanceColor&&(gt=nt.instanceColor)),gt!==void 0){let yt=gt.normalized,Ft=gt.itemSize,zt=t.get(gt);if(zt===void 0)continue;let Wt=zt.buffer,ie=zt.type,ce=zt.bytesPerElement,V=ie===n.INT||ie===n.UNSIGNED_INT||gt.gpuType===hl;if(gt.isInterleavedBufferAttribute){let Pt=gt.data,Jt=Pt.stride,te=gt.offset;if(Pt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<ut.locationSize;Vt++)M(ut.location+Vt,Pt.meshPerAttribute);nt.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let Vt=0;Vt<ut.locationSize;Vt++)S(ut.location+Vt);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let Vt=0;Vt<ut.locationSize;Vt++)H(ut.location+Vt,Ft/ut.locationSize,ie,yt,Jt*ce,(te+Ft/ut.locationSize*Vt)*ce,V)}else{if(gt.isInstancedBufferAttribute){for(let Pt=0;Pt<ut.locationSize;Pt++)M(ut.location+Pt,gt.meshPerAttribute);nt.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Pt=0;Pt<ut.locationSize;Pt++)S(ut.location+Pt);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let Pt=0;Pt<ut.locationSize;Pt++)H(ut.location+Pt,Ft/ut.locationSize,ie,yt,Ft*ce,Ft/ut.locationSize*Pt*ce,V)}}else if(X!==void 0){let yt=X[pt];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(ut.location,yt);break;case 3:n.vertexAttrib3fv(ut.location,yt);break;case 4:n.vertexAttrib4fv(ut.location,yt);break;default:n.vertexAttrib1fv(ut.location,yt)}}}}F()}function U(){k();for(let nt in i){let rt=i[nt];for(let et in rt){let Q=rt[et];for(let tt in Q){let dt=Q[tt];for(let X in dt)g(dt[X].object),delete dt[X];delete Q[tt]}}delete i[nt]}}function B(nt){if(i[nt.id]===void 0)return;let rt=i[nt.id];for(let et in rt){let Q=rt[et];for(let tt in Q){let dt=Q[tt];for(let X in dt)g(dt[X].object),delete dt[X];delete Q[tt]}}delete i[nt.id]}function q(nt){for(let rt in i){let et=i[rt];for(let Q in et){let tt=et[Q];if(tt[nt.id]===void 0)continue;let dt=tt[nt.id];for(let X in dt)g(dt[X].object),delete dt[X];delete tt[nt.id]}}}function C(nt){for(let rt in i){let et=i[rt],Q=nt.isInstancedMesh===!0?nt.id:0,tt=et[Q];if(tt!==void 0){for(let dt in tt){let X=tt[dt];for(let pt in X)g(X[pt].object),delete X[pt];delete tt[dt]}delete et[Q],Object.keys(et).length===0&&delete i[rt]}}}function k(){Y(),c=!0,o!==r&&(o=r,d(o.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:k,resetDefaultState:Y,dispose:U,releaseStatesOfGeometry:B,releaseStatesOfObject:C,releaseStatesOfProgram:q,initAttributes:P,enableAttribute:S,disableUnusedAttributes:F}}function qv(n,t,e){let i;function r(f){i=f}function o(f,d){n.drawArrays(i,f,d),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawArraysInstanced(i,f,d,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,g);let v=0;for(let b=0;b<g;b++)v+=d[b];e.update(v,i,1)}this.setMode=r,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function $v(n,t,e,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let q=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(q){return!(q!==Wn&&i.convert(q)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(q){let C=q===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(q!==In&&q!==oi&&!C&&i.convert(q)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(q){if(q==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";q="mediump"}return q==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",g=f(d);g!==d&&(he("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);let y=e.logarithmicDepthBuffer===!0,v=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&v===!1&&he("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let b=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),M=n.getParameter(n.MAX_VERTEX_ATTRIBS),F=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),H=n.getParameter(n.MAX_VARYING_VECTORS),L=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=n.getParameter(n.MAX_SAMPLES),B=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:y,reversedDepthBuffer:v,maxTextures:b,maxVertexTextures:E,maxTextureSize:P,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:F,maxVaryings:H,maxFragmentUniforms:L,maxSamples:U,samples:B}}function Zv(n){let t=this,e=null,i=0,r=!1,o=!1,c=new Dn,u=new ve,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){let b=y.length!==0||v||i!==0||r;return r=v,i=y.length,b},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(y,v){e=g(y,v,0)},this.setState=function(y,v,b){let E=y.clippingPlanes,P=y.clipIntersection,S=y.clipShadows,M=n.get(y);if(!r||E===null||E.length===0||o&&!S)o?g(null):d();else{let F=o?0:i,H=F*4,L=M.clippingState||null;f.value=L,L=g(E,v,H,b);for(let U=0;U!==H;++U)L[U]=e[U];M.clippingState=L,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=F}};function d(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function g(y,v,b,E){let P=y!==null?y.length:0,S=null;if(P!==0){if(S=f.value,E!==!0||S===null){let M=b+P*4,F=v.matrixWorldInverse;u.getNormalMatrix(F),(S===null||S.length<M)&&(S=new Float32Array(M));for(let H=0,L=b;H!==P;++H,L+=4)c.copy(y[H]).applyMatrix4(F,u),c.normal.toArray(S,L),S[L+3]=c.constant}f.value=S,f.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,S}}function ty(n){let t=[],e=[],i=n,r=n-Cs+1+Jv;for(let o=0;o<r;o++){let c=Math.pow(2,i);t.push(c);let u=1/(c-2),f=-u,d=1+u,g=[f,f,d,f,d,d,f,f,d,d,f,d],y=6,v=6,b=3,E=new Float32Array(b*v*y),P=new Float32Array(b*v*y);for(let M=0;M<y;M++){let F=M%3*2/3-1,H=M>2?0:-1,L=[F,H,0,F+2/3,H,0,F+2/3,H+1,0,F,H,0,F+2/3,H+1,0,F,H+1,0];E.set(L,b*v*M);for(let U=0;U<v;U++){let B=g[U*2]*2-1,q=g[U*2+1]*2-1;M===0?Cr.set(1,q,B):M===1?Cr.set(-B,1,-q):M===2?Cr.set(-B,q,1):M===3?Cr.set(-1,q,-B):M===4?Cr.set(-B,-1,q):Cr.set(B,q,-1),Cr.toArray(P,(M*v+U)*b)}}let S=new Ze;S.setAttribute("position",new Ge(E,b)),S.setAttribute("outputDirection",new Ge(P,b)),e.push(new Oe(S,null)),i>Cs&&i--}return{lodMeshes:e,sizeLods:t}}function vd(n,t,e){let i=new Pn(n,t,e);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function ey(n,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function ny(n,t,e){return new Un({name:"SphericalGaussianBlur",defines:{SAMPLES:jv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function yd(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function xd(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function iy(n){let t=new WeakMap,e=new WeakMap,i=null;function r(v,b=!1){return v==null?null:b?c(v):o(v)}function o(v){if(v&&v.isTexture){let b=v.mapping;if(b===al||b===ll)if(t.has(v)){let E=t.get(v).texture;return u(E,v.mapping)}else{let E=v.image;if(E&&E.height>0){let P=new Kl(E.height);return P.fromEquirectangularTexture(n,v),t.set(v,P),v.addEventListener("dispose",d),u(P.texture,v.mapping)}else return null}}return v}function c(v){if(v&&v.isTexture){let b=v.mapping,E=b===al||b===ll,P=b===sr||b===Er;if(E||P){let S=e.get(v),M=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return i===null&&(i=new jl(n)),S=E?i.fromEquirectangular(v,S):i.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,e.set(v,S),S.texture;if(S!==void 0)return S.texture;{let F=v.image;return E&&F&&F.height>0||P&&F&&f(F)?(i===null&&(i=new jl(n)),S=E?i.fromEquirectangular(v):i.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,e.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function u(v,b){return b===al?v.mapping=sr:b===ll&&(v.mapping=Er),v}function f(v){let b=0,E=6;for(let P=0;P<E;P++)v[P]!==void 0&&b++;return b===E}function d(v){let b=v.target;b.removeEventListener("dispose",d);let E=t.get(b);E!==void 0&&(t.delete(b),E.dispose())}function g(v){let b=v.target;b.removeEventListener("dispose",g);let E=e.get(b);E!==void 0&&(e.delete(b),E.dispose())}function y(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:y}}function ry(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&yr("WebGLRenderer: "+i+" extension not supported."),r}}}function sy(n,t,e,i){let r={},o=new WeakMap;function c(y){let v=y.target;v.index!==null&&t.remove(v.index);for(let E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete r[v.id];let b=o.get(v);b&&(t.remove(b),o.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function u(y,v){return r[v.id]===!0||(v.addEventListener("dispose",c),r[v.id]=!0,e.memory.geometries++),v}function f(y){let v=y.attributes;for(let b in v)t.update(v[b],n.ARRAY_BUFFER)}function d(y){let v=[],b=y.index,E=y.attributes.position,P=0;if(E===void 0)return;if(b!==null){let F=b.array;P=b.version;for(let H=0,L=F.length;H<L;H+=3){let U=F[H+0],B=F[H+1],q=F[H+2];v.push(U,B,B,q,q,U)}}else{let F=E.array;P=E.version;for(let H=0,L=F.length/3-1;H<L;H+=3){let U=H+0,B=H+1,q=H+2;v.push(U,B,B,q,q,U)}}let S=new(E.count>=65535?co:lo)(v,1);S.version=P;let M=o.get(y);M&&t.remove(M),o.set(y,S)}function g(y){let v=o.get(y);if(v){let b=y.index;b!==null&&v.version<b.version&&d(y)}else d(y);return o.get(y)}return{get:u,update:f,getWireframeAttribute:g}}function oy(n,t,e){let i;function r(y){i=y}let o,c;function u(y){o=y.type,c=y.bytesPerElement}function f(y,v){n.drawElements(i,v,o,y*c),e.update(v,i,1)}function d(y,v,b){b!==0&&(n.drawElementsInstanced(i,v,o,y*c,b),e.update(v,i,b))}function g(y,v,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,o,y,0,b);let P=0;for(let S=0;S<b;S++)P+=v[S];e.update(P,i,1)}this.setMode=r,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=g}function ay(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(e.calls++,c){case n.TRIANGLES:e.triangles+=u*(o/3);break;case n.LINES:e.lines+=u*(o/2);break;case n.LINE_STRIP:e.lines+=u*(o-1);break;case n.LINE_LOOP:e.lines+=u*o;break;case n.POINTS:e.points+=u*o;break;default:de("WebGLInfo: Unknown draw mode:",c);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function ly(n,t,e){let i=new WeakMap,r=new Je;function o(c,u,f){let d=c.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0,v=i.get(u);if(v===void 0||v.count!==y){let k=function(){q.dispose(),i.delete(u),u.removeEventListener("dispose",k)};v!==void 0&&v.texture.dispose();let b=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],F=u.morphAttributes.color||[],H=0;b===!0&&(H=1),E===!0&&(H=2),P===!0&&(H=3);let L=u.attributes.position.count*H,U=1;L>t.maxTextureSize&&(U=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);let B=new Float32Array(L*U*4*y),q=new oo(B,L,U,y);q.type=oi,q.needsUpdate=!0;let C=H*4;for(let Y=0;Y<y;Y++){let nt=S[Y],rt=M[Y],et=F[Y],Q=L*U*4*Y;for(let tt=0;tt<nt.count;tt++){let dt=tt*C;b===!0&&(r.fromBufferAttribute(nt,tt),B[Q+dt+0]=r.x,B[Q+dt+1]=r.y,B[Q+dt+2]=r.z,B[Q+dt+3]=0),E===!0&&(r.fromBufferAttribute(rt,tt),B[Q+dt+4]=r.x,B[Q+dt+5]=r.y,B[Q+dt+6]=r.z,B[Q+dt+7]=0),P===!0&&(r.fromBufferAttribute(et,tt),B[Q+dt+8]=r.x,B[Q+dt+9]=r.y,B[Q+dt+10]=r.z,B[Q+dt+11]=et.itemSize===4?r.w:1)}}v={count:y,texture:q,size:new oe(L,U)},i.set(u,v),u.addEventListener("dispose",k)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let b=0;for(let P=0;P<d.length;P++)b+=d[P];let E=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:o}}function cy(n,t,e,i,r){let o=new WeakMap;function c(d){let g=r.render.frame,y=d.geometry,v=t.get(d,y);if(o.get(v)!==g&&(t.update(v),o.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==g&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,g))),d.isSkinnedMesh){let b=d.skeleton;o.get(b)!==g&&(b.update(),o.set(b,g))}return v}function u(){o=new WeakMap}function f(d){let g=d.target;g.removeEventListener("dispose",f),i.releaseStatesOfObject(g),e.remove(g.instanceMatrix),g.instanceColor!==null&&e.remove(g.instanceColor)}return{update:c,dispose:u}}function uy(n,t,e,i,r,o){let c=new Pn(t,e,{type:n,depthBuffer:r,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),u=null,f=null,d=new Ze;d.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Xe([0,2,0,0,2,0],2));let g=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new Oe(d,g),v=new xs(-1,1,1,-1,0,1),b=null,E=null,P=!1,S,M=null,F=[],H=!1;this.setSize=function(L,U){c.setSize(L,U),u!==null&&u.setSize(L,U),f!==null&&f.setSize(L,U);for(let B=0;B<F.length;B++){let q=F[B];q.setSize&&q.setSize(L,U)}},this.setEffects=function(L){F=L,H=F.length>0&&F[0].isRenderPass===!0;let U=c.width,B=c.height;F.length>0&&u===null&&(u=new Pn(U,B,{type:ai,depthBuffer:!1,stencilBuffer:!1}),f=new Pn(U,B,{type:ai,depthBuffer:!1,stencilBuffer:!1}));for(let q=0;q<F.length;q++){let C=F[q];C.setSize&&C.setSize(U,B)}},this.begin=function(L,U){if(P||L.toneMapping===ri&&F.length===0)return!1;if(M=U,U!==null){let B=U.width,q=U.height;(c.width!==B||c.height!==q)&&this.setSize(B,q)}return H===!1&&L.setRenderTarget(c),S=L.toneMapping,L.toneMapping=ri,!0},this.hasRenderPass=function(){return H},this.end=function(L,U){L.toneMapping=S,P=!0;let B=c,q=u;for(let C=0;C<F.length;C++){let k=F[C];k.enabled!==!1&&(k.render(L,q,B,U),k.needsSwap!==!1&&(B=q,q=q===u?f:u))}if(b!==L.outputColorSpace||E!==L.toneMapping){b=L.outputColorSpace,E=L.toneMapping,g.defines={},Ee.getTransfer(b)===De&&(g.defines.SRGB_TRANSFER="");let C=hy[E];C&&(g.defines[C]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=B.texture,L.setRenderTarget(M),L.render(y,v),M=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),f!==null&&f.dispose(),d.dispose(),g.dispose()}}function Is(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,o=Md[r];if(o===void 0&&(o=new Float32Array(r),Md[r]=o),t!==0){i.toArray(o,0);for(let c=1,u=0;c!==t;++c)u+=e,n[c].toArray(o,u)}return o}function sn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function on(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ec(n,t){let e=Sd[t];e===void 0&&(e=new Int32Array(t),Sd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function fy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2fv(this.addr,t),on(e,t)}}function py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;n.uniform3fv(this.addr,t),on(e,t)}}function my(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4fv(this.addr,t),on(e,t)}}function gy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(sn(e,i))return;Ed.set(i),n.uniformMatrix2fv(this.addr,!1,Ed),on(e,i)}}function _y(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(sn(e,i))return;wd.set(i),n.uniformMatrix3fv(this.addr,!1,wd),on(e,i)}}function vy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(sn(e,i))return;bd.set(i),n.uniformMatrix4fv(this.addr,!1,bd),on(e,i)}}function yy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function xy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2iv(this.addr,t),on(e,t)}}function My(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3iv(this.addr,t),on(e,t)}}function Sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4iv(this.addr,t),on(e,t)}}function by(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2uiv(this.addr,t),on(e,t)}}function Ey(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3uiv(this.addr,t),on(e,t)}}function Ty(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4uiv(this.addr,t),on(e,t)}}function Ay(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(Zh.compareFunction=e.isReversedDepthBuffer()?$l:ql,o=Zh):o=zd,e.setTexture2D(t||o,r)}function Cy(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Hd,r)}function Py(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Gd,r)}function Iy(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Vd,r)}function Ry(n){switch(n){case 5126:return fy;case 35664:return dy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return _y;case 35676:return vy;case 5124:case 35670:return yy;case 35667:case 35671:return xy;case 35668:case 35672:return My;case 35669:case 35673:return Sy;case 5125:return by;case 36294:return wy;case 36295:return Ey;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Iy}}function Ly(n,t){n.uniform1fv(this.addr,t)}function Ny(n,t){let e=Is(t,this.size,2);n.uniform2fv(this.addr,e)}function Dy(n,t){let e=Is(t,this.size,3);n.uniform3fv(this.addr,e)}function Oy(n,t){let e=Is(t,this.size,4);n.uniform4fv(this.addr,e)}function Fy(n,t){let e=Is(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Uy(n,t){let e=Is(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function By(n,t){let e=Is(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ky(n,t){n.uniform1iv(this.addr,t)}function zy(n,t){n.uniform2iv(this.addr,t)}function Vy(n,t){n.uniform3iv(this.addr,t)}function Hy(n,t){n.uniform4iv(this.addr,t)}function Gy(n,t){n.uniform1uiv(this.addr,t)}function Xy(n,t){n.uniform2uiv(this.addr,t)}function Wy(n,t){n.uniform3uiv(this.addr,t)}function Yy(n,t){n.uniform4uiv(this.addr,t)}function qy(n,t,e){let i=this.cache,r=t.length,o=ec(e,r);sn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));let c;this.type===n.SAMPLER_2D_SHADOW?c=Zh:c=zd;for(let u=0;u!==r;++u)e.setTexture2D(t[u]||c,o[u])}function $y(n,t,e){let i=this.cache,r=t.length,o=ec(e,r);sn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==r;++c)e.setTexture3D(t[c]||Hd,o[c])}function Zy(n,t,e){let i=this.cache,r=t.length,o=ec(e,r);sn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==r;++c)e.setTextureCube(t[c]||Gd,o[c])}function Jy(n,t,e){let i=this.cache,r=t.length,o=ec(e,r);sn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||Vd,o[c])}function jy(n){switch(n){case 5126:return Ly;case 35664:return Ny;case 35665:return Dy;case 35666:return Oy;case 35674:return Fy;case 35675:return Uy;case 35676:return By;case 5124:case 35670:return ky;case 35667:case 35671:return zy;case 35668:case 35672:return Vy;case 35669:case 35673:return Hy;case 5125:return Gy;case 36294:return Xy;case 36295:return Wy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Jy}}function Td(n,t){n.seq.push(t),n.map[t.id]=t}function Ky(n,t,e){let i=n.name,r=i.length;for(qh.lastIndex=0;;){let o=qh.exec(i),c=qh.lastIndex,u=o[1],f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===r){Td(e,d===void 0?new Jh(u,n,t):new jh(u,n,t));break}else{let y=e.map[u];y===void 0&&(y=new Kh(u),Td(e,y)),e=y}}}function Ad(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function ex(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=r;c<o;c++){let u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}function nx(n){Ee._getMatrix(Cd,Ee.workingColorSpace,n);let t=`mat3( ${Cd.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(n)){case io:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Pd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let c=/ERROR: 0:(\d+)/.exec(o);if(c){let u=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+ex(n.getShaderSource(t),u)}else return o}function ix(n,t){let e=nx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sx(n,t){let e=rx[t];return e===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ox(){Ee.getLuminanceCoefficients(Jl);let n=Jl.x.toFixed(4),t=Jl.y.toFixed(4),e=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ax(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function lx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function cx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(t,r),c=o.name,u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),e[c]={type:o.type,location:n.getAttribLocation(t,c),locationSize:u}}return e}function Uo(n){return n!==""}function Id(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Qh(n){return n.replace(hx,fx)}function fx(n,t){let e=Me[t];if(e===void 0){let i=ux.get(t);if(i!==void 0)e=Me[i],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Qh(e)}function Ld(n){return n.replace(dx,px)}function px(n,t,e,i){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Nd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function gx(n){return mx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function vx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":_x[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function xx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Sx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Mx[n.combine]||"ENVMAP_BLENDING_NONE"}function bx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function wx(n,t,e,i){let r=n.getContext(),o=e.defines,c=e.vertexShader,u=e.fragmentShader,f=gx(e),d=vx(e),g=xx(e),y=Sx(e),v=bx(e),b=ax(e),E=lx(o),P=r.createProgram(),S,M,F=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Uo).join(`
`),S.length>0&&(S+=`
`),M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Uo).join(`
`),M.length>0&&(M+=`
`)):(S=[Nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),M=[Nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",e.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Me.tonemapping_pars_fragment:"",e.toneMapping!==ri?sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,ix("linearToOutputTexel",e.outputColorSpace),ox(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Uo).join(`
`)),c=Qh(c),c=Id(c,e),c=Rd(c,e),u=Qh(u),u=Id(u,e),u=Rd(u,e),c=Ld(c),u=Ld(u),e.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,M=["#define varying in",e.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let H=F+S+c,L=F+M+u,U=Ad(r,r.VERTEX_SHADER,H),B=Ad(r,r.FRAGMENT_SHADER,L);r.attachShader(P,U),r.attachShader(P,B),e.index0AttributeName!==void 0?r.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(P,0,"position"),r.linkProgram(P);function q(nt){if(n.debug.checkShaderErrors){let rt=r.getProgramInfoLog(P)||"",et=r.getShaderInfoLog(U)||"",Q=r.getShaderInfoLog(B)||"",tt=rt.trim(),dt=et.trim(),X=Q.trim(),pt=!0,ut=!0;if(r.getProgramParameter(P,r.LINK_STATUS)===!1)if(pt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,P,U,B);else{let gt=Pd(r,U,"vertex"),yt=Pd(r,B,"fragment");de("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(P,r.VALIDATE_STATUS)+`

Material Name: `+nt.name+`
Material Type: `+nt.type+`

Program Info Log: `+tt+`
`+gt+`
`+yt)}else tt!==""?he("WebGLProgram: Program Info Log:",tt):(dt===""||X==="")&&(ut=!1);ut&&(nt.diagnostics={runnable:pt,programLog:tt,vertexShader:{log:dt,prefix:S},fragmentShader:{log:X,prefix:M}})}r.deleteShader(U),r.deleteShader(B),C=new Ps(r,P),k=cx(r,P)}let C;this.getUniforms=function(){return C===void 0&&q(this),C};let k;this.getAttributes=function(){return k===void 0&&q(this),k};let Y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=r.getProgramParameter(P,Qy)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tx++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=U,this.fragmentShader=B,this}function Tx(n){return n===lr||n===No||n===Do}function Ax(n,t,e,i,r,o){let c=new ps,u=new tu,f=new Set,d=[],g=new Map,y=i.logarithmicDepthBuffer,v=i.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return f.add(C),C===0?"uv":`uv${C}`}function P(C,k,Y,nt,rt,et){let Q=nt.fog,tt=rt.geometry,dt=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?nt.environment:null,X=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,pt=t.get(C.envMap||dt,X),ut=pt&&pt.mapping===Ao?pt.image.height:null,gt=b[C.type];C.precision!==null&&(v=i.getMaxPrecision(C.precision),v!==C.precision&&he("WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));let yt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Ft=yt!==void 0?yt.length:0,zt=0;tt.morphAttributes.position!==void 0&&(zt=1),tt.morphAttributes.normal!==void 0&&(zt=2),tt.morphAttributes.color!==void 0&&(zt=3);let Wt,ie,ce,V;if(gt){let Ne=yi[gt];Wt=Ne.vertexShader,ie=Ne.fragmentShader}else{Wt=C.vertexShader,ie=C.fragmentShader;let Ne=u.getVertexShaderStage(C),Ce=u.getFragmentShaderStage(C);u.update(C,Ne,Ce),ce=Ne.id,V=Ce.id}let Pt=n.getRenderTarget(),Jt=n.state.buffers.depth.getReversed(),te=rt.isInstancedMesh===!0,Vt=rt.isBatchedMesh===!0,le=!!C.map,qe=!!C.matcap,ue=!!pt,ye=!!C.aoMap,Se=!!C.lightMap,_e=!!C.bumpMap&&C.wireframe===!1,Ie=!!C.normalMap,He=!!C.displacementMap,je=!!C.emissiveMap,Re=!!C.metalnessMap,Fe=!!C.roughnessMap,ct=C.anisotropy>0,Ue=C.clearcoat>0,Te=C.dispersion>0,W=C.retroreflectivity>0,T=C.iridescence>0,it=C.sheen>0,mt=C.transmission>0,Et=ct&&!!C.anisotropyMap,Bt=Ue&&!!C.clearcoatMap,Ht=Ue&&!!C.clearcoatNormalMap,I=Ue&&!!C.clearcoatRoughnessMap,z=T&&!!C.iridescenceMap,$=T&&!!C.iridescenceThicknessMap,at=it&&!!C.sheenColorMap,ft=it&&!!C.sheenRoughnessMap,bt=!!C.specularMap,Ct=!!C.specularColorMap,Nt=!!C.specularIntensityMap,Mt=mt&&!!C.transmissionMap,j=mt&&!!C.thicknessMap,It=!!C.gradientMap,St=!!C.alphaMap,kt=C.alphaTest>0,Gt=!!C.alphaHash,Rt=!!C.extensions,Dt=ri;C.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Dt=n.toneMapping);let ee={shaderID:gt,shaderType:C.type,shaderName:C.name,vertexShader:Wt,fragmentShader:ie,defines:C.defines,customVertexShaderID:ce,customFragmentShaderID:V,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:Vt,batchingColor:Vt&&rt._colorsTexture!==null,instancing:te,instancingColor:te&&rt.instanceColor!==null,instancingMorph:te&&rt.morphTexture!==null,outputColorSpace:Pt===null?n.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Ee.workingColorSpace,alphaToCoverage:!!C.alphaToCoverage,map:le,matcap:qe,envMap:ue,envMapMode:ue&&pt.mapping,envMapCubeUVHeight:ut,aoMap:ye,lightMap:Se,bumpMap:_e,normalMap:Ie,displacementMap:He,emissiveMap:je,normalMapObjectSpace:Ie&&C.normalMapType===td,normalMapTangentSpace:Ie&&C.normalMapType===Yl,packedNormalMap:Ie&&C.normalMapType===Yl&&Tx(C.normalMap.format),metalnessMap:Re,roughnessMap:Fe,anisotropy:ct,anisotropyMap:Et,clearcoat:Ue,clearcoatMap:Bt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:I,dispersion:Te,retroreflection:W,iridescence:T,iridescenceMap:z,iridescenceThicknessMap:$,sheen:it,sheenColorMap:at,sheenRoughnessMap:ft,specularMap:bt,specularColorMap:Ct,specularIntensityMap:Nt,transmission:mt,transmissionMap:Mt,thicknessMap:j,gradientMap:It,opaque:C.transparent===!1&&C.blending===ws&&C.alphaToCoverage===!1,alphaMap:St,alphaTest:kt,alphaHash:Gt,combine:C.combine,mapUv:le&&E(C.map.channel),aoMapUv:ye&&E(C.aoMap.channel),lightMapUv:Se&&E(C.lightMap.channel),bumpMapUv:_e&&E(C.bumpMap.channel),normalMapUv:Ie&&E(C.normalMap.channel),displacementMapUv:He&&E(C.displacementMap.channel),emissiveMapUv:je&&E(C.emissiveMap.channel),metalnessMapUv:Re&&E(C.metalnessMap.channel),roughnessMapUv:Fe&&E(C.roughnessMap.channel),anisotropyMapUv:Et&&E(C.anisotropyMap.channel),clearcoatMapUv:Bt&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:$&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:at&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:ft&&E(C.sheenRoughnessMap.channel),specularMapUv:bt&&E(C.specularMap.channel),specularColorMapUv:Ct&&E(C.specularColorMap.channel),specularIntensityMapUv:Nt&&E(C.specularIntensityMap.channel),transmissionMapUv:Mt&&E(C.transmissionMap.channel),thicknessMapUv:j&&E(C.thicknessMap.channel),alphaMapUv:St&&E(C.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Ie||ct),vertexNormals:!!tt.attributes.normal,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!tt.attributes.uv&&(le||St),fog:!!Q,useFog:C.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:C.wireframe===!1&&(C.flatShading===!0||tt.attributes.normal===void 0&&Ie===!1&&(C.isMeshLambertMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isMeshPhysicalMaterial)),sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Jt,skinning:rt.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:zt,numSunLights:k.sun.length,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numSunLightShadows:k.sunShadowMap.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:le&&C.map.isVideoTexture===!0&&Ee.getTransfer(C.map.colorSpace)===De,decodeVideoTextureEmissive:je&&C.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(C.emissiveMap.colorSpace)===De,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===yn,flipSided:C.side===Tn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Rt&&C.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&C.extensions.multiDraw===!0||Vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return ee.vertexUv1s=f.has(1),ee.vertexUv2s=f.has(2),ee.vertexUv3s=f.has(3),f.clear(),ee}function S(C){let k=[];if(C.shaderID?k.push(C.shaderID):(k.push(C.customVertexShaderID),k.push(C.customFragmentShaderID)),C.defines!==void 0)for(let Y in C.defines)k.push(Y),k.push(C.defines[Y]);return C.isRawShaderMaterial===!1&&(M(k,C),F(k,C),k.push(n.outputColorSpace)),k.push(C.customProgramCacheKey),k.join()}function M(C,k){C.push(k.precision),C.push(k.outputColorSpace),C.push(k.envMapMode),C.push(k.envMapCubeUVHeight),C.push(k.mapUv),C.push(k.alphaMapUv),C.push(k.lightMapUv),C.push(k.aoMapUv),C.push(k.bumpMapUv),C.push(k.normalMapUv),C.push(k.displacementMapUv),C.push(k.emissiveMapUv),C.push(k.metalnessMapUv),C.push(k.roughnessMapUv),C.push(k.anisotropyMapUv),C.push(k.clearcoatMapUv),C.push(k.clearcoatNormalMapUv),C.push(k.clearcoatRoughnessMapUv),C.push(k.iridescenceMapUv),C.push(k.iridescenceThicknessMapUv),C.push(k.sheenColorMapUv),C.push(k.sheenRoughnessMapUv),C.push(k.specularMapUv),C.push(k.specularColorMapUv),C.push(k.specularIntensityMapUv),C.push(k.transmissionMapUv),C.push(k.thicknessMapUv),C.push(k.combine),C.push(k.fogExp2),C.push(k.sizeAttenuation),C.push(k.morphTargetsCount),C.push(k.morphAttributeCount),C.push(k.numSunLights),C.push(k.numDirLights),C.push(k.numPointLights),C.push(k.numSpotLights),C.push(k.numSpotLightMaps),C.push(k.numHemiLights),C.push(k.numRectAreaLights),C.push(k.numSunLightShadows),C.push(k.numDirLightShadows),C.push(k.numPointLightShadows),C.push(k.numSpotLightShadows),C.push(k.numSpotLightShadowsWithMaps),C.push(k.numLightProbes),C.push(k.shadowMapType),C.push(k.toneMapping),C.push(k.numClippingPlanes),C.push(k.numClipIntersection),C.push(k.depthPacking)}function F(C,k){c.disableAll(),k.instancing&&c.enable(0),k.instancingColor&&c.enable(1),k.instancingMorph&&c.enable(2),k.matcap&&c.enable(3),k.envMap&&c.enable(4),k.normalMapObjectSpace&&c.enable(5),k.normalMapTangentSpace&&c.enable(6),k.clearcoat&&c.enable(7),k.iridescence&&c.enable(8),k.alphaTest&&c.enable(9),k.vertexColors&&c.enable(10),k.vertexAlphas&&c.enable(11),k.vertexUv1s&&c.enable(12),k.vertexUv2s&&c.enable(13),k.vertexUv3s&&c.enable(14),k.vertexTangents&&c.enable(15),k.anisotropy&&c.enable(16),k.alphaHash&&c.enable(17),k.batching&&c.enable(18),k.dispersion&&c.enable(19),k.retroreflection&&c.enable(24),k.batchingColor&&c.enable(20),k.gradientMap&&c.enable(21),k.packedNormalMap&&c.enable(22),k.vertexNormals&&c.enable(23),C.push(c.mask),c.disableAll(),k.fog&&c.enable(0),k.useFog&&c.enable(1),k.flatShading&&c.enable(2),k.logarithmicDepthBuffer&&c.enable(3),k.reversedDepthBuffer&&c.enable(4),k.skinning&&c.enable(5),k.morphTargets&&c.enable(6),k.morphNormals&&c.enable(7),k.morphColors&&c.enable(8),k.premultipliedAlpha&&c.enable(9),k.shadowMapEnabled&&c.enable(10),k.doubleSided&&c.enable(11),k.flipSided&&c.enable(12),k.useDepthPacking&&c.enable(13),k.dithering&&c.enable(14),k.transmission&&c.enable(15),k.sheen&&c.enable(16),k.opaque&&c.enable(17),k.pointsUvs&&c.enable(18),k.decodeVideoTexture&&c.enable(19),k.decodeVideoTextureEmissive&&c.enable(20),k.alphaToCoverage&&c.enable(21),k.numLightProbeGrids>0&&c.enable(22),k.hasPositionAttribute&&c.enable(23),C.push(c.mask)}function H(C){let k=b[C.type],Y;if(k){let nt=yi[k];Y=pd.clone(nt.uniforms)}else Y=C.uniforms;return Y}function L(C,k){let Y=g.get(k);return Y!==void 0?++Y.usedTimes:(Y=new wx(n,k,C,r),d.push(Y),g.set(k,Y)),Y}function U(C){if(--C.usedTimes===0){let k=d.indexOf(C);d[k]=d[d.length-1],d.pop(),g.delete(C.cacheKey),C.destroy()}}function B(C){u.remove(C)}function q(){u.dispose()}return{getParameters:P,getProgramCacheKey:S,getUniforms:H,acquireProgram:L,releaseProgram:U,releaseShaderCache:B,programs:d,dispose:q}}function Cx(){let n=new WeakMap;function t(c){return n.has(c)}function e(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function r(c,u,f){n.get(c)[u]=f}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:o}}function Px(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Dd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Od(){let n=[],t=0,e=[],i=[],r=[];function o(){t=0,e.length=0,i.length=0,r.length=0}function c(v){let b=0;return v.isInstancedMesh&&(b+=2),v.isSkinnedMesh&&(b+=1),b}function u(v,b,E,P,S,M){let F=n[t];return F===void 0?(F={id:v.id,object:v,geometry:b,material:E,materialVariant:c(v),groupOrder:P,renderOrder:v.renderOrder,z:S,group:M},n[t]=F):(F.id=v.id,F.object=v,F.geometry=b,F.material=E,F.materialVariant=c(v),F.groupOrder=P,F.renderOrder=v.renderOrder,F.z=S,F.group=M),t++,F}function f(v,b,E,P,S,M,F){F.reversedDepth===!0&&(S=-S);let H=u(v,b,E,P,S,M);E.transmission>0?i.push(H):E.transparent===!0?r.push(H):e.push(H)}function d(v,b,E,P,S,M){let F=u(v,b,E,P,S,M);E.transmission>0?i.unshift(F):E.transparent===!0?r.unshift(F):e.unshift(F)}function g(v,b){e.length>1&&e.sort(v||Px),i.length>1&&i.sort(b||Dd),r.length>1&&r.sort(b||Dd)}function y(){for(let v=t,b=n.length;v<b;v++){let E=n[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:e,transmissive:i,transparent:r,init:o,push:f,unshift:d,finish:y,sort:g}}function Ix(){let n=new WeakMap;function t(i,r){let o=n.get(i),c;return o===void 0?(c=new Od,n.set(i,[c])):r>=o.length?(c=new Od,o.push(c)):c=o[r],c}function e(){n=new WeakMap}return{get:t,dispose:e}}function Rx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new lt,color:new ge};break;case"SpotLight":e={position:new lt,direction:new lt,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new lt,color:new ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new lt,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":e={color:new ge,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return n[t.id]=e,e}}}function Lx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function Dx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ox(n){let t=new Rx,e=Lx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new lt);let r=new lt,o=new ze,c=new ze;function u(d){let g=0,y=0,v=0;for(let rt=0;rt<9;rt++)i.probe[rt].set(0,0,0);let b=0,E=0,P=0,S=0,M=0,F=0,H=0,L=0,U=0,B=0,q=0,C=0,k=0,Y=0;d.sort(Dx);for(let rt=0,et=d.length;rt<et;rt++){let Q=d[rt],tt=Q.color,dt=Q.intensity,X=Q.distance,pt=null;if(Q.shadow&&Q.shadow.map&&(Q.shadow.map.texture.format===lr?pt=Q.shadow.map.texture:pt=Q.shadow.map.depthTexture||Q.shadow.map.texture),Q.isAmbientLight)g+=tt.r*dt,y+=tt.g*dt,v+=tt.b*dt;else if(Q.isLightProbe){for(let ut=0;ut<9;ut++)i.probe[ut].addScaledVector(Q.sh.coefficients[ut],dt);Y++}else if(Q.isSunLight){let ut=t.get(Q);if(ut.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){let gt=Q.shadow,yt=e.get(Q);yt.shadowIntensity=gt.intensity,yt.shadowBias=gt.bias,yt.shadowNormalBias=gt.normalBias,yt.shadowRadius=gt.radius,yt.shadowMapSize.copy(gt.mapSize).multiply(gt.getFrameExtents()),i.sunShadow[E]=yt,i.sunShadowMap[E]=pt;let Ft=gt.getViewportCount();for(let zt=0;zt<Ft;zt++)i.sunShadowMatrix[P+zt]=gt.getMatrix(zt),i.sunShadowCascade[P+zt]=gt._cascadeData[zt];P+=Ft,E++}i.sun[b]=ut,b++}else if(Q.isDirectionalLight){let ut=t.get(Q);if(ut.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){let gt=Q.shadow,yt=e.get(Q);yt.shadowIntensity=gt.intensity,yt.shadowBias=gt.bias,yt.shadowNormalBias=gt.normalBias,yt.shadowRadius=gt.radius,yt.shadowMapSize=gt.mapSize,i.directionalShadow[S]=yt,i.directionalShadowMap[S]=pt,i.directionalShadowMatrix[S]=Q.shadow.matrix,U++}i.directional[S]=ut,S++}else if(Q.isSpotLight){let ut=t.get(Q);ut.position.setFromMatrixPosition(Q.matrixWorld),ut.color.copy(tt).multiplyScalar(dt),ut.distance=X,ut.coneCos=Math.cos(Q.angle),ut.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),ut.decay=Q.decay,i.spot[F]=ut;let gt=Q.shadow;if(Q.map&&(i.spotLightMap[C]=Q.map,C++,gt.updateMatrices(Q),Q.castShadow&&k++),i.spotLightMatrix[F]=gt.matrix,Q.castShadow){let yt=e.get(Q);yt.shadowIntensity=gt.intensity,yt.shadowBias=gt.bias,yt.shadowNormalBias=gt.normalBias,yt.shadowRadius=gt.radius,yt.shadowMapSize=gt.mapSize,i.spotShadow[F]=yt,i.spotShadowMap[F]=pt,q++}F++}else if(Q.isRectAreaLight){let ut=t.get(Q);ut.color.copy(tt).multiplyScalar(dt),ut.halfWidth.set(Q.width*.5,0,0),ut.halfHeight.set(0,Q.height*.5,0),i.rectArea[H]=ut,H++}else if(Q.isPointLight){let ut=t.get(Q);if(ut.color.copy(Q.color).multiplyScalar(Q.intensity),ut.distance=Q.distance,ut.decay=Q.decay,Q.castShadow){let gt=Q.shadow,yt=e.get(Q);yt.shadowIntensity=gt.intensity,yt.shadowBias=gt.bias,yt.shadowNormalBias=gt.normalBias,yt.shadowRadius=gt.radius,yt.shadowMapSize=gt.mapSize,yt.shadowCameraNear=gt.camera.near,yt.shadowCameraFar=gt.camera.far,i.pointShadow[M]=yt,i.pointShadowMap[M]=pt,i.pointShadowMatrix[M]=Q.shadow.matrix,B++}i.point[M]=ut,M++}else if(Q.isHemisphereLight){let ut=t.get(Q);ut.skyColor.copy(Q.color).multiplyScalar(dt),ut.groundColor.copy(Q.groundColor).multiplyScalar(dt),i.hemi[L]=ut,L++}}H>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Zt.LTC_FLOAT_1,i.rectAreaLTC2=Zt.LTC_FLOAT_2):(i.rectAreaLTC1=Zt.LTC_HALF_1,i.rectAreaLTC2=Zt.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=y,i.ambient[2]=v;let nt=i.hash;(nt.sunLength!==b||nt.directionalLength!==S||nt.pointLength!==M||nt.spotLength!==F||nt.rectAreaLength!==H||nt.hemiLength!==L||nt.numSunShadows!==E||nt.numDirectionalShadows!==U||nt.numPointShadows!==B||nt.numSpotShadows!==q||nt.numSpotMaps!==C||nt.numLightProbes!==Y)&&(i.sun.length=b,i.directional.length=S,i.spot.length=F,i.rectArea.length=H,i.point.length=M,i.hemi.length=L,i.sunShadow.length=E,i.sunShadowMap.length=E,i.sunShadowMatrix.length=P,i.sunShadowCascade.length=P,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.directionalShadowMatrix.length=U,i.pointShadow.length=B,i.pointShadowMap.length=B,i.pointShadowMatrix.length=B,i.spotShadow.length=q,i.spotShadowMap.length=q,i.spotLightMatrix.length=q+C-k,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=Y,nt.sunLength=b,nt.directionalLength=S,nt.pointLength=M,nt.spotLength=F,nt.rectAreaLength=H,nt.hemiLength=L,nt.numSunShadows=E,nt.numDirectionalShadows=U,nt.numPointShadows=B,nt.numSpotShadows=q,nt.numSpotMaps=C,nt.numLightProbes=Y,i.version=Nx++)}function f(d,g){let y=0,v=0,b=0,E=0,P=0,S=0,M=g.matrixWorldInverse;for(let F=0,H=d.length;F<H;F++){let L=d[F];if(L.isSunLight){let U=i.sun[y];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(M),y++}else if(L.isDirectionalLight){let U=i.directional[v];U.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(M),v++}else if(L.isSpotLight){let U=i.spot[E];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(M),E++}else if(L.isRectAreaLight){let U=i.rectArea[P];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),c.identity(),o.copy(L.matrixWorld),o.premultiply(M),c.extractRotation(o),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(c),U.halfHeight.applyMatrix4(c),P++}else if(L.isPointLight){let U=i.point[b];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),b++}else if(L.isHemisphereLight){let U=i.hemi[S];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(M),S++}}}return{setup:u,setupView:f,state:i}}function Fd(n){let t=new Ox(n),e=[],i=[],r=[];function o(v){y.camera=v,e.length=0,i.length=0,r.length=0}function c(v){e.push(v)}function u(v){i.push(v)}function f(v){r.push(v)}function d(){t.setup(e)}function g(v){t.setupView(e,v)}let y={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:y,setupLights:d,setupLightsView:g,pushLight:c,pushShadow:u,pushLightProbeGrid:f}}function Fx(n){let t=new WeakMap;function e(r,o=0){let c=t.get(r),u;return c===void 0?(u=new Fd(n),t.set(r,[u])):o>=c.length?(u=new Fd(n),c.push(u)):u=c[o],u}function i(){t=new WeakMap}return{get:e,dispose:i}}function Vx(n,t,e){let i=new _s,r=new oe,o=new oe,c=new Je,u=new Ya,f=new qa,d={},g=e.maxTextureSize,y={[rr]:Tn,[Tn]:rr,[yn]:yn},v=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Ux,fragmentShader:Bx}),b=v.clone();b.defines.HORIZONTAL_PASS=1;let E=new Ze;E.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new Oe(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let M=this.type;this.render=function(B,q,C){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;this.type===Rf&&(he("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=To);let k=n.getRenderTarget(),Y=n.getActiveCubeFace(),nt=n.getActiveMipmapLevel(),rt=n.state;rt.setBlending(_i),rt.buffers.depth.getReversed()===!0?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);let et=M!==this.type;et&&q.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(tt=>tt.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,tt=B.length;Q<tt;Q++){let dt=B[Q],X=dt.shadow;if(X===void 0){he("WebGLShadowMap:",dt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let pt=X.getFrameExtents();r.multiply(pt),o.copy(X.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(o.x=Math.floor(g/pt.x),r.x=o.x*pt.x,X.mapSize.x=o.x),r.y>g&&(o.y=Math.floor(g/pt.y),r.y=o.y*pt.y,X.mapSize.y=o.y));let ut=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ut,X.map===null||et===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===bs){if(dt.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Pn(r.x,r.y,{format:lr,type:ai,minFilter:fn,magFilter:fn,generateMipmaps:!1}),X.map.texture.name=dt.name+".shadowMap",X.map.depthTexture=new ji(r.x,r.y,oi),X.map.depthTexture.name=dt.name+".shadowMapDepth",X.map.depthTexture.format=mi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=hn,X.map.depthTexture.magFilter=hn}else dt.isPointLight?(X.map=new Kl(r.x),X.map.depthTexture=new Xa(r.x,si)):(X.map=new Pn(r.x,r.y),X.map.depthTexture=new ji(r.x,r.y,si)),X.map.depthTexture.name=dt.name+".shadowMap",X.map.depthTexture.format=mi,this.type===To?(X.map.depthTexture.compareFunction=ut?$l:ql,X.map.depthTexture.minFilter=fn,X.map.depthTexture.magFilter=fn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=hn,X.map.depthTexture.magFilter=hn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);let gt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();dt.isPointLight!==!0&&X.updateMatrices(dt,C);for(let yt=0;yt<gt;yt++){let Ft=X.getCamera(yt);if(dt.isPointLight){let zt=X.camera,Wt=X.matrix,ie=dt.distance||zt.far;ie!==zt.far&&(zt.far=ie,zt.updateProjectionMatrix()),Fo.setFromMatrixPosition(dt.matrixWorld),zt.position.copy(Fo),$h.copy(zt.position),$h.add(kx[yt]),zt.up.copy(zx[yt]),zt.lookAt($h),zt.updateMatrixWorld(),Wt.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Ud.multiplyMatrices(zt.projectionMatrix,zt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Ud,zt.coordinateSystem,zt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,yt),n.clear();else{yt===0&&(n.setRenderTarget(X.map),n.clear());let zt=X.getViewport(yt);c.set(o.x*zt.x,o.y*zt.y,o.x*zt.z,o.y*zt.w),rt.viewport(c)}i=X.getFrustum(yt),L(q,C,Ft,dt,this.type)}X.isPointLightShadow!==!0&&this.type===bs&&F(X,C),X.needsUpdate=!1}M=this.type,S.needsUpdate=!1,n.setRenderTarget(k,Y,nt)};function F(B,q){let C=t.update(P);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,b.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,b.needsUpdate=!0),B.mapPass===null?B.mapPass=new Pn(r.x,r.y,{format:lr,type:ai}):(B.mapPass.width!==B.map.width||B.mapPass.height!==B.map.height)&&B.mapPass.setSize(B.map.width,B.map.height),v.uniforms.shadow_pass.value=B.map.depthTexture,v.uniforms.resolution.value.set(B.map.width,B.map.height),v.uniforms.radius.value=B.radius,n.setRenderTarget(B.mapPass),n.clear(),n.renderBufferDirect(q,null,C,v,P,null),b.uniforms.shadow_pass.value=B.mapPass.texture,b.uniforms.resolution.value.set(B.map.width,B.map.height),b.uniforms.radius.value=B.radius,n.setRenderTarget(B.map),n.clear(),n.renderBufferDirect(q,null,C,b,P,null)}function H(B,q,C,k){let Y=null,nt=C.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(nt!==void 0)Y=nt;else if(Y=C.isPointLight===!0?f:u,n.localClippingEnabled&&q.clipShadows===!0&&Array.isArray(q.clippingPlanes)&&q.clippingPlanes.length!==0||q.displacementMap&&q.displacementScale!==0||q.alphaMap&&q.alphaTest>0||q.map&&q.alphaTest>0||q.alphaToCoverage===!0){let rt=Y.uuid,et=q.uuid,Q=d[rt];Q===void 0&&(Q={},d[rt]=Q);let tt=Q[et];tt===void 0&&(tt=Y.clone(),Q[et]=tt,q.addEventListener("dispose",U)),Y=tt}if(Y.visible=q.visible,Y.wireframe=q.wireframe,k===bs?Y.side=q.shadowSide!==null?q.shadowSide:q.side:Y.side=q.shadowSide!==null?q.shadowSide:y[q.side],Y.alphaMap=q.alphaMap,Y.alphaTest=q.alphaToCoverage===!0?.5:q.alphaTest,Y.map=q.map,Y.clipShadows=q.clipShadows,Y.clippingPlanes=q.clippingPlanes,Y.clipIntersection=q.clipIntersection,Y.displacementMap=q.displacementMap,Y.displacementScale=q.displacementScale,Y.displacementBias=q.displacementBias,Y.wireframeLinewidth=q.wireframeLinewidth,Y.linewidth=q.linewidth,C.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){let rt=n.properties.get(Y);rt.light=C}return Y}function L(B,q,C,k,Y){if(B.visible===!1)return;if(B.layers.test(q.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&Y===bs)&&(!B.frustumCulled||B.intersectsFrustum(i))){B.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,B.matrixWorld);let et=t.update(B),Q=B.material;if(Array.isArray(Q)){let tt=et.groups;for(let dt=0,X=tt.length;dt<X;dt++){let pt=tt[dt],ut=Q[pt.materialIndex];if(ut&&ut.visible){let gt=H(B,ut,k,Y);B.onBeforeShadow(n,B,q,C,et,gt,pt),n.renderBufferDirect(C,null,et,gt,B,pt),B.onAfterShadow(n,B,q,C,et,gt,pt)}}}else if(Q.visible){let tt=H(B,Q,k,Y);B.onBeforeShadow(n,B,q,C,et,tt,null),n.renderBufferDirect(C,null,et,tt,B,null),B.onAfterShadow(n,B,q,C,et,tt,null)}}let rt=B.children;for(let et=0,Q=rt.length;et<Q;et++)L(rt[et],q,C,k,Y)}function U(B){B.target.removeEventListener("dispose",U);for(let C in d){let k=d[C],Y=B.target.uuid;Y in k&&(k[Y].dispose(),delete k[Y])}}}function Hx(n,t){function e(){let j=!1,It=new Je,St=null,kt=new Je(0,0,0,0);return{setMask:function(Gt){St!==Gt&&!j&&(n.colorMask(Gt,Gt,Gt,Gt),St=Gt)},setLocked:function(Gt){j=Gt},setClear:function(Gt,Rt,Dt,ee,Ne){Ne===!0&&(Gt*=ee,Rt*=ee,Dt*=ee),It.set(Gt,Rt,Dt,ee),kt.equals(It)===!1&&(n.clearColor(Gt,Rt,Dt,ee),kt.copy(It))},reset:function(){j=!1,St=null,kt.set(-1,0,0,0)}}}function i(){let j=!1,It=!1,St=null,kt=null,Gt=null;return{setReversed:function(Rt){if(It!==Rt){let Dt=t.get("EXT_clip_control");Rt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),It=Rt;let ee=Gt;Gt=null,this.setClear(ee)}},getReversed:function(){return It},setTest:function(Rt){Rt?Pt(n.DEPTH_TEST):Jt(n.DEPTH_TEST)},setMask:function(Rt){St!==Rt&&!j&&(n.depthMask(Rt),St=Rt)},setFunc:function(Rt){if(It&&(Rt=ud[Rt]),kt!==Rt){switch(Rt){case Aa:n.depthFunc(n.NEVER);break;case Ca:n.depthFunc(n.ALWAYS);break;case Pa:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case Ia:n.depthFunc(n.EQUAL);break;case Ra:n.depthFunc(n.GEQUAL);break;case La:n.depthFunc(n.GREATER);break;case Na:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}kt=Rt}},setLocked:function(Rt){j=Rt},setClear:function(Rt){Gt!==Rt&&(Gt=Rt,It&&(Rt=1-Rt),n.clearDepth(Rt))},reset:function(){j=!1,St=null,kt=null,Gt=null,It=!1}}}function r(){let j=!1,It=null,St=null,kt=null,Gt=null,Rt=null,Dt=null,ee=null,Ne=null;return{setTest:function(Ce){j||(Ce?Pt(n.STENCIL_TEST):Jt(n.STENCIL_TEST))},setMask:function(Ce){It!==Ce&&!j&&(n.stencilMask(Ce),It=Ce)},setFunc:function(Ce,Mn,An){(St!==Ce||kt!==Mn||Gt!==An)&&(n.stencilFunc(Ce,Mn,An),St=Ce,kt=Mn,Gt=An)},setOp:function(Ce,Mn,An){(Rt!==Ce||Dt!==Mn||ee!==An)&&(n.stencilOp(Ce,Mn,An),Rt=Ce,Dt=Mn,ee=An)},setLocked:function(Ce){j=Ce},setClear:function(Ce){Ne!==Ce&&(n.clearStencil(Ce),Ne=Ce)},reset:function(){j=!1,It=null,St=null,kt=null,Gt=null,Rt=null,Dt=null,ee=null,Ne=null}}}let o=new e,c=new i,u=new r,f=new WeakMap,d=new WeakMap,g={},y={},v={},b=new WeakMap,E=[],P=null,S=!1,M=null,F=null,H=null,L=null,U=null,B=null,q=null,C=new ge(0,0,0),k=0,Y=!1,nt=null,rt=null,et=null,Q=null,tt=null,dt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,pt=0,ut=n.getParameter(n.VERSION);ut.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(ut)[1]),X=pt>=1):ut.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),X=pt>=2);let gt=null,yt={},Ft=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),Wt=new Je().fromArray(Ft),ie=new Je().fromArray(zt);function ce(j,It,St,kt){let Gt=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(j,Rt),n.texParameteri(j,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(j,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<St;Dt++)j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?n.texImage3D(It,0,n.RGBA,1,1,kt,0,n.RGBA,n.UNSIGNED_BYTE,Gt):n.texImage2D(It+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Gt);return Rt}let V={};V[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Pt(n.DEPTH_TEST),c.setFunc(cs),_e(!1),Ie(fh),Pt(n.CULL_FACE),ye(_i);function Pt(j){g[j]!==!0&&(n.enable(j),g[j]=!0)}function Jt(j){g[j]!==!1&&(n.disable(j),g[j]=!1)}function te(j,It){return v[j]!==It?(n.bindFramebuffer(j,It),v[j]=It,j===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=It),j===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=It),!0):!1}function Vt(j,It){let St=E,kt=!1;if(j){St=b.get(It),St===void 0&&(St=[],b.set(It,St));let Gt=j.textures;if(St.length!==Gt.length||St[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,Dt=Gt.length;Rt<Dt;Rt++)St[Rt]=n.COLOR_ATTACHMENT0+Rt;St.length=Gt.length,kt=!0}}else St[0]!==n.BACK&&(St[0]=n.BACK,kt=!0);kt&&n.drawBuffers(St)}function le(j){return P!==j?(n.useProgram(j),P=j,!0):!1}let qe={[wr]:n.FUNC_ADD,[Nf]:n.FUNC_SUBTRACT,[Df]:n.FUNC_REVERSE_SUBTRACT};qe[Of]=n.MIN,qe[Ff]=n.MAX;let ue={[Uf]:n.ZERO,[Bf]:n.ONE,[kf]:n.SRC_COLOR,[gh]:n.SRC_ALPHA,[Wf]:n.SRC_ALPHA_SATURATE,[Gf]:n.DST_COLOR,[Vf]:n.DST_ALPHA,[zf]:n.ONE_MINUS_SRC_COLOR,[_h]:n.ONE_MINUS_SRC_ALPHA,[Xf]:n.ONE_MINUS_DST_COLOR,[Hf]:n.ONE_MINUS_DST_ALPHA,[Yf]:n.CONSTANT_COLOR,[qf]:n.ONE_MINUS_CONSTANT_COLOR,[$f]:n.CONSTANT_ALPHA,[Zf]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(j,It,St,kt,Gt,Rt,Dt,ee,Ne,Ce){if(j===_i){S===!0&&(Jt(n.BLEND),S=!1);return}if(S===!1&&(Pt(n.BLEND),S=!0),j!==Lf){if(j!==M||Ce!==Y){if((F!==wr||U!==wr)&&(n.blendEquation(n.FUNC_ADD),F=wr,U=wr),Ce)switch(j){case ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dh:n.blendFunc(n.ONE,n.ONE);break;case ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:de("WebGLState: Invalid blending: ",j);break}else switch(j){case ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ph:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mh:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",j);break}H=null,L=null,B=null,q=null,C.set(0,0,0),k=0,M=j,Y=Ce}return}Gt=Gt||It,Rt=Rt||St,Dt=Dt||kt,(It!==F||Gt!==U)&&(n.blendEquationSeparate(qe[It],qe[Gt]),F=It,U=Gt),(St!==H||kt!==L||Rt!==B||Dt!==q)&&(n.blendFuncSeparate(ue[St],ue[kt],ue[Rt],ue[Dt]),H=St,L=kt,B=Rt,q=Dt),(ee.equals(C)===!1||Ne!==k)&&(n.blendColor(ee.r,ee.g,ee.b,Ne),C.copy(ee),k=Ne),M=j,Y=!1}function Se(j,It){j.side===yn?Jt(n.CULL_FACE):Pt(n.CULL_FACE);let St=j.side===Tn;It&&(St=!St),_e(St),j.blending===ws&&j.transparent===!1?ye(_i):ye(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),o.setMask(j.colorWrite);let kt=j.stencilWrite;u.setTest(kt),kt&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),je(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Pt(n.SAMPLE_ALPHA_TO_COVERAGE):Jt(n.SAMPLE_ALPHA_TO_COVERAGE)}function _e(j){nt!==j&&(j?n.frontFace(n.CW):n.frontFace(n.CCW),nt=j)}function Ie(j){j!==Pf?(Pt(n.CULL_FACE),j!==rt&&(j===fh?n.cullFace(n.BACK):j===If?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Jt(n.CULL_FACE),rt=j}function He(j){j!==et&&(X&&n.lineWidth(j),et=j)}function je(j,It,St){j?(Pt(n.POLYGON_OFFSET_FILL),(Q!==It||tt!==St)&&(Q=It,tt=St,c.getReversed()&&(It=-It),n.polygonOffset(It,St))):Jt(n.POLYGON_OFFSET_FILL)}function Re(j){j?Pt(n.SCISSOR_TEST):Jt(n.SCISSOR_TEST)}function Fe(j){j===void 0&&(j=n.TEXTURE0+dt-1),gt!==j&&(n.activeTexture(j),gt=j)}function ct(j,It,St){St===void 0&&(gt===null?St=n.TEXTURE0+dt-1:St=gt);let kt=yt[St];kt===void 0&&(kt={type:void 0,texture:void 0},yt[St]=kt),(kt.type!==j||kt.texture!==It)&&(gt!==St&&(n.activeTexture(St),gt=St),n.bindTexture(j,It||V[j]),kt.type=j,kt.texture=It)}function Ue(){let j=yt[gt];j!==void 0&&j.type!==void 0&&(n.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Te(){try{n.compressedTexImage2D(...arguments)}catch(j){de("WebGLState:",j)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(j){de("WebGLState:",j)}}function T(){try{n.texSubImage2D(...arguments)}catch(j){de("WebGLState:",j)}}function it(){try{n.texSubImage3D(...arguments)}catch(j){de("WebGLState:",j)}}function mt(){try{n.compressedTexSubImage2D(...arguments)}catch(j){de("WebGLState:",j)}}function Et(){try{n.compressedTexSubImage3D(...arguments)}catch(j){de("WebGLState:",j)}}function Bt(){try{n.texStorage2D(...arguments)}catch(j){de("WebGLState:",j)}}function Ht(){try{n.texStorage3D(...arguments)}catch(j){de("WebGLState:",j)}}function I(){try{n.texImage2D(...arguments)}catch(j){de("WebGLState:",j)}}function z(){try{n.texImage3D(...arguments)}catch(j){de("WebGLState:",j)}}function $(j){return y[j]!==void 0?y[j]:n.getParameter(j)}function at(j,It){y[j]!==It&&(n.pixelStorei(j,It),y[j]=It)}function ft(j){Wt.equals(j)===!1&&(n.scissor(j.x,j.y,j.z,j.w),Wt.copy(j))}function bt(j){ie.equals(j)===!1&&(n.viewport(j.x,j.y,j.z,j.w),ie.copy(j))}function Ct(j,It){let St=d.get(It);St===void 0&&(St=new WeakMap,d.set(It,St));let kt=St.get(j);kt===void 0&&(kt=n.getUniformBlockIndex(It,j.name),St.set(j,kt))}function Nt(j,It){let kt=d.get(It).get(j);f.get(It)!==kt&&(n.uniformBlockBinding(It,kt,j.__bindingPointIndex),f.set(It,kt))}function Mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},y={},gt=null,yt={},v={},b=new WeakMap,E=[],P=null,S=!1,M=null,F=null,H=null,L=null,U=null,B=null,q=null,C=new ge(0,0,0),k=0,Y=!1,nt=null,rt=null,et=null,Q=null,tt=null,Wt.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Pt,disable:Jt,bindFramebuffer:te,drawBuffers:Vt,useProgram:le,setBlending:ye,setMaterial:Se,setFlipSided:_e,setCullFace:Ie,setLineWidth:He,setPolygonOffset:je,setScissorTest:Re,activeTexture:Fe,bindTexture:ct,unbindTexture:Ue,compressedTexImage2D:Te,compressedTexImage3D:W,texImage2D:I,texImage3D:z,pixelStorei:at,getParameter:$,updateUBOMapping:Ct,uniformBlockBinding:Nt,texStorage2D:Bt,texStorage3D:Ht,texSubImage2D:T,texSubImage3D:it,compressedTexSubImage2D:mt,compressedTexSubImage3D:Et,scissor:ft,viewport:bt,reset:Mt}}function Gx(n,t,e,i,r,o,c){let u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new oe,g=new WeakMap,y=new Set,v,b=new WeakMap,E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(W,T){return E?new OffscreenCanvas(W,T):ro("canvas")}function S(W,T,it){let mt=1,Et=Te(W);if((Et.width>it||Et.height>it)&&(mt=it/Math.max(Et.width,Et.height)),mt<1)if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&W instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&W instanceof ImageBitmap||typeof VideoFrame<"u"&&W instanceof VideoFrame){let Bt=Math.floor(mt*Et.width),Ht=Math.floor(mt*Et.height);v===void 0&&(v=P(Bt,Ht));let I=T?P(Bt,Ht):v;return I.width=Bt,I.height=Ht,I.getContext("2d").drawImage(W,0,0,Bt,Ht),he("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+Bt+"x"+Ht+")."),I}else return"data"in W&&he("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),W;return W}function M(W){return W.generateMipmaps}function F(W){n.generateMipmap(W)}function H(W){return W.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:W.isWebGL3DRenderTarget?n.TEXTURE_3D:W.isWebGLArrayRenderTarget||W.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function L(W,T,it,mt,Et,Bt=!1){if(W!==null){if(n[W]!==void 0)return n[W];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+W+"'")}let Ht;mt&&(Ht=t.get("EXT_texture_norm16"),Ht||he("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let I=T;if(T===n.RED&&(it===n.FLOAT&&(I=n.R32F),it===n.HALF_FLOAT&&(I=n.R16F),it===n.UNSIGNED_BYTE&&(I=n.R8),it===n.UNSIGNED_SHORT&&Ht&&(I=Ht.R16_EXT),it===n.SHORT&&Ht&&(I=Ht.R16_SNORM_EXT)),T===n.RED_INTEGER&&(it===n.UNSIGNED_BYTE&&(I=n.R8UI),it===n.UNSIGNED_SHORT&&(I=n.R16UI),it===n.UNSIGNED_INT&&(I=n.R32UI),it===n.BYTE&&(I=n.R8I),it===n.SHORT&&(I=n.R16I),it===n.INT&&(I=n.R32I)),T===n.RG&&(it===n.FLOAT&&(I=n.RG32F),it===n.HALF_FLOAT&&(I=n.RG16F),it===n.UNSIGNED_BYTE&&(I=n.RG8),it===n.UNSIGNED_SHORT&&Ht&&(I=Ht.RG16_EXT),it===n.SHORT&&Ht&&(I=Ht.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(it===n.UNSIGNED_BYTE&&(I=n.RG8UI),it===n.UNSIGNED_SHORT&&(I=n.RG16UI),it===n.UNSIGNED_INT&&(I=n.RG32UI),it===n.BYTE&&(I=n.RG8I),it===n.SHORT&&(I=n.RG16I),it===n.INT&&(I=n.RG32I)),T===n.RGB_INTEGER&&(it===n.UNSIGNED_BYTE&&(I=n.RGB8UI),it===n.UNSIGNED_SHORT&&(I=n.RGB16UI),it===n.UNSIGNED_INT&&(I=n.RGB32UI),it===n.BYTE&&(I=n.RGB8I),it===n.SHORT&&(I=n.RGB16I),it===n.INT&&(I=n.RGB32I)),T===n.RGBA_INTEGER&&(it===n.UNSIGNED_BYTE&&(I=n.RGBA8UI),it===n.UNSIGNED_SHORT&&(I=n.RGBA16UI),it===n.UNSIGNED_INT&&(I=n.RGBA32UI),it===n.BYTE&&(I=n.RGBA8I),it===n.SHORT&&(I=n.RGBA16I),it===n.INT&&(I=n.RGBA32I)),T===n.RGB&&(it===n.UNSIGNED_SHORT&&Ht&&(I=Ht.RGB16_EXT),it===n.SHORT&&Ht&&(I=Ht.RGB16_SNORM_EXT),it===n.UNSIGNED_INT_5_9_9_9_REV&&(I=n.RGB9_E5),it===n.UNSIGNED_INT_10F_11F_11F_REV&&(I=n.R11F_G11F_B10F)),T===n.RGBA){let z=Bt?io:Ee.getTransfer(Et);it===n.FLOAT&&(I=n.RGBA32F),it===n.HALF_FLOAT&&(I=n.RGBA16F),it===n.UNSIGNED_BYTE&&(I=z===De?n.SRGB8_ALPHA8:n.RGBA8),it===n.UNSIGNED_SHORT&&Ht&&(I=Ht.RGBA16_EXT),it===n.SHORT&&Ht&&(I=Ht.RGBA16_SNORM_EXT),it===n.UNSIGNED_SHORT_4_4_4_4&&(I=n.RGBA4),it===n.UNSIGNED_SHORT_5_5_5_1&&(I=n.RGB5_A1)}return(I===n.R16F||I===n.R32F||I===n.RG16F||I===n.RG32F||I===n.RGBA16F||I===n.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function U(W,T){let it;return W?T===null||T===si||T===Ts?it=n.DEPTH24_STENCIL8:T===oi?it=n.DEPTH32F_STENCIL8:T===Es&&(it=n.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===si||T===Ts?it=n.DEPTH_COMPONENT24:T===oi?it=n.DEPTH_COMPONENT32F:T===Es&&(it=n.DEPTH_COMPONENT16),it}function B(W,T){return M(W)===!0||W.isFramebufferTexture&&W.minFilter!==hn&&W.minFilter!==fn?Math.log2(Math.max(T.width,T.height))+1:W.mipmaps!==void 0&&W.mipmaps.length>0?W.mipmaps.length:W.isCompressedTexture&&Array.isArray(W.image)?T.mipmaps.length:1}function q(W){let T=W.target;T.removeEventListener("dispose",q),k(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&y.delete(T)}function C(W){let T=W.target;T.removeEventListener("dispose",C),nt(T)}function k(W){let T=i.get(W);if(T.__webglInit===void 0)return;let it=W.source,mt=b.get(it);if(mt){let Et=mt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&Y(W),Object.keys(mt).length===0&&b.delete(it)}i.remove(W)}function Y(W){let T=i.get(W);n.deleteTexture(T.__webglTexture);let it=W.source,mt=b.get(it);delete mt[T.__cacheKey],c.memory.textures--}function nt(W){let T=i.get(W);if(W.depthTexture&&(W.depthTexture.dispose(),i.remove(W.depthTexture)),W.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let Et=0;Et<T.__webglFramebuffer[mt].length;Et++)n.deleteFramebuffer(T.__webglFramebuffer[mt][Et]);else n.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)n.deleteFramebuffer(T.__webglFramebuffer[mt]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let it=W.textures;for(let mt=0,Et=it.length;mt<Et;mt++){let Bt=i.get(it[mt]);Bt.__webglTexture&&(n.deleteTexture(Bt.__webglTexture),c.memory.textures--),i.remove(it[mt])}i.remove(W)}let rt=0;function et(){rt=0}function Q(){return rt}function tt(W){rt=W}function dt(){let W=rt;return W>=r.maxTextures&&he("WebGLTextures: Trying to use "+(W+1)+" texture units while this GPU supports only "+r.maxTextures),rt+=1,W}function X(W){let T=[];return T.push(W.wrapS),T.push(W.wrapT),T.push(W.wrapR||0),T.push(W.magFilter),T.push(W.minFilter),T.push(W.anisotropy),T.push(W.internalFormat),T.push(W.format),T.push(W.type),T.push(W.generateMipmaps),T.push(W.premultiplyAlpha),T.push(W.flipY),T.push(W.unpackAlignment),T.push(W.colorSpace),T.join()}function pt(W,T){let it=i.get(W);if(W.isVideoTexture&&ct(W),W.isRenderTargetTexture===!1&&W.isExternalTexture!==!0&&W.version>0&&it.__version!==W.version){let mt=W.image;if(mt===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{Jt(it,W,T);return}}else W.isExternalTexture&&(it.__webglTexture=W.sourceTexture?W.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,it.__webglTexture,n.TEXTURE0+T)}function ut(W,T){let it=i.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&it.__version!==W.version){Jt(it,W,T);return}else W.isExternalTexture&&(it.__webglTexture=W.sourceTexture?W.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,it.__webglTexture,n.TEXTURE0+T)}function gt(W,T){let it=i.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&it.__version!==W.version){Jt(it,W,T);return}e.bindTexture(n.TEXTURE_3D,it.__webglTexture,n.TEXTURE0+T)}function yt(W,T){let it=i.get(W);if(W.isCubeDepthTexture!==!0&&W.version>0&&it.__version!==W.version){te(it,W,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture,n.TEXTURE0+T)}let Ft={[Da]:n.REPEAT,[pi]:n.CLAMP_TO_EDGE,[Oa]:n.MIRRORED_REPEAT},zt={[hn]:n.NEAREST,[Kf]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[cl]:n.LINEAR_MIPMAP_NEAREST,[or]:n.LINEAR_MIPMAP_LINEAR},Wt={[nd]:n.NEVER,[ad]:n.ALWAYS,[id]:n.LESS,[ql]:n.LEQUAL,[rd]:n.EQUAL,[$l]:n.GEQUAL,[sd]:n.GREATER,[od]:n.NOTEQUAL};function ie(W,T){if(T.type===oi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===fn||T.magFilter===cl||T.magFilter===Co||T.magFilter===or||T.minFilter===fn||T.minFilter===cl||T.minFilter===Co||T.minFilter===or)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(W,n.TEXTURE_WRAP_S,Ft[T.wrapS]),n.texParameteri(W,n.TEXTURE_WRAP_T,Ft[T.wrapT]),(W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY)&&n.texParameteri(W,n.TEXTURE_WRAP_R,Ft[T.wrapR]),n.texParameteri(W,n.TEXTURE_MAG_FILTER,zt[T.magFilter]),n.texParameteri(W,n.TEXTURE_MIN_FILTER,zt[T.minFilter]),T.compareFunction&&(n.texParameteri(W,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(W,n.TEXTURE_COMPARE_FUNC,Wt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hn||T.minFilter!==Co&&T.minFilter!==or||T.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");n.texParameterf(W,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ce(W,T){let it=!1;W.__webglInit===void 0&&(W.__webglInit=!0,T.addEventListener("dispose",q));let mt=T.source,Et=b.get(mt);Et===void 0&&(Et={},b.set(mt,Et));let Bt=X(T);if(Bt!==W.__cacheKey){Et[Bt]===void 0&&(Et[Bt]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,it=!0),Et[Bt].usedTimes++;let Ht=Et[W.__cacheKey];Ht!==void 0&&(Et[W.__cacheKey].usedTimes--,Ht.usedTimes===0&&Y(T)),W.__cacheKey=Bt,W.__webglTexture=Et[Bt].texture}return it}function V(W,T,it){return Math.floor(Math.floor(W/it)/T)}function Pt(W,T,it,mt){let Bt=W.updateRanges;if(Bt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,it,mt,T.data);else{Bt.sort((at,ft)=>at.start-ft.start);let Ht=0;for(let at=1;at<Bt.length;at++){let ft=Bt[Ht],bt=Bt[at],Ct=ft.start+ft.count,Nt=V(bt.start,T.width,4),Mt=V(ft.start,T.width,4);bt.start<=Ct+1&&Nt===Mt&&V(bt.start+bt.count-1,T.width,4)===Nt?ft.count=Math.max(ft.count,bt.start+bt.count-ft.start):(++Ht,Bt[Ht]=bt)}Bt.length=Ht+1;let I=e.getParameter(n.UNPACK_ROW_LENGTH),z=e.getParameter(n.UNPACK_SKIP_PIXELS),$=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let at=0,ft=Bt.length;at<ft;at++){let bt=Bt[at],Ct=Math.floor(bt.start/4),Nt=Math.ceil(bt.count/4),Mt=Ct%T.width,j=Math.floor(Ct/T.width),It=Nt,St=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(n.UNPACK_SKIP_ROWS,j),e.texSubImage2D(n.TEXTURE_2D,0,Mt,j,It,St,it,mt,T.data)}W.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,I),e.pixelStorei(n.UNPACK_SKIP_PIXELS,z),e.pixelStorei(n.UNPACK_SKIP_ROWS,$)}}function Jt(W,T,it){let mt=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=n.TEXTURE_3D);let Et=ce(W,T),Bt=T.source;e.bindTexture(mt,W.__webglTexture,n.TEXTURE0+it);let Ht=i.get(Bt);if(Bt.version!==Ht.__version||Et===!0){if(e.activeTexture(n.TEXTURE0+it),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let St=Ee.getPrimaries(Ee.workingColorSpace),kt=T.colorSpace===Ni?null:Ee.getPrimaries(T.colorSpace),Gt=T.colorSpace===Ni||St===kt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let z=S(T.image,!1,r.maxTextureSize);z=Ue(T,z);let $=o.convert(T.format,T.colorSpace),at=o.convert(T.type),ft=L(T.internalFormat,$,at,T.normalized,T.colorSpace,T.isVideoTexture);ie(mt,T);let bt,Ct=T.mipmaps,Nt=T.isVideoTexture!==!0,Mt=Ht.__version===void 0||Et===!0,j=Bt.dataReady,It=B(T,z);if(T.isDepthTexture)ft=U(T.format===ar,T.type),Mt&&(Nt?e.texStorage2D(n.TEXTURE_2D,1,ft,z.width,z.height):e.texImage2D(n.TEXTURE_2D,0,ft,z.width,z.height,0,$,at,null));else if(T.isDataTexture)if(Ct.length>0){Nt&&Mt&&e.texStorage2D(n.TEXTURE_2D,It,ft,Ct[0].width,Ct[0].height);for(let St=0,kt=Ct.length;St<kt;St++)bt=Ct[St],Nt?j&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,bt.width,bt.height,$,at,bt.data):e.texImage2D(n.TEXTURE_2D,St,ft,bt.width,bt.height,0,$,at,bt.data);T.generateMipmaps=!1}else Nt?(Mt&&e.texStorage2D(n.TEXTURE_2D,It,ft,z.width,z.height),j&&Pt(T,z,$,at)):e.texImage2D(n.TEXTURE_2D,0,ft,z.width,z.height,0,$,at,z.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Nt&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,ft,Ct[0].width,Ct[0].height,z.depth);for(let St=0,kt=Ct.length;St<kt;St++)if(bt=Ct[St],T.format!==Wn)if($!==null)if(Nt){if(j)if(T.layerUpdates.size>0){let Gt=Vh(bt.width,bt.height,T.format,T.type);for(let Rt of T.layerUpdates){let Dt=bt.data.subarray(Rt*Gt/bt.data.BYTES_PER_ELEMENT,(Rt+1)*Gt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,Rt,bt.width,bt.height,1,$,Dt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,0,bt.width,bt.height,z.depth,$,bt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,St,ft,bt.width,bt.height,z.depth,0,bt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?j&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,0,bt.width,bt.height,z.depth,$,at,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,St,ft,bt.width,bt.height,z.depth,0,$,at,bt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Nt&&Mt&&e.texStorage2D(n.TEXTURE_2D,It,ft,Ct[0].width,Ct[0].height);for(let St=0,kt=Ct.length;St<kt;St++)bt=Ct[St],T.format!==Wn?$!==null?Nt?j&&e.compressedTexSubImage2D(n.TEXTURE_2D,St,0,0,bt.width,bt.height,$,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,St,ft,bt.width,bt.height,0,bt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?j&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,bt.width,bt.height,$,at,bt.data):e.texImage2D(n.TEXTURE_2D,St,ft,bt.width,bt.height,0,$,at,bt.data)}else if(T.isDataArrayTexture)if(Nt){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,ft,z.width,z.height,z.depth),j)if(T.layerUpdates.size>0){let St=Vh(z.width,z.height,T.format,T.type);for(let kt of T.layerUpdates){let Gt=z.data.subarray(kt*St/z.data.BYTES_PER_ELEMENT,(kt+1)*St/z.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,kt,z.width,z.height,1,$,at,Gt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,$,at,z.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ft,z.width,z.height,z.depth,0,$,at,z.data);else if(T.isData3DTexture)Nt?(Mt&&e.texStorage3D(n.TEXTURE_3D,It,ft,z.width,z.height,z.depth),j&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,$,at,z.data)):e.texImage3D(n.TEXTURE_3D,0,ft,z.width,z.height,z.depth,0,$,at,z.data);else if(T.isFramebufferTexture){if(Mt)if(Nt)e.texStorage2D(n.TEXTURE_2D,It,ft,z.width,z.height);else{let St=z.width,kt=z.height;for(let Gt=0;Gt<It;Gt++)e.texImage2D(n.TEXTURE_2D,Gt,ft,St,kt,0,$,at,null),St>>=1,kt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let St=n.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),z.parentNode!==St){St.appendChild(z),y.add(T),St.onpaint=kt=>{let Gt=kt.changedElements;for(let Rt of y)Gt.includes(Rt.image)&&(Rt.needsUpdate=!0)},St.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,z);else{let Gt=n.RGBA,Rt=n.RGBA,Dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Gt,Rt,Dt,z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Nt&&Mt){let St=Te(Ct[0]);e.texStorage2D(n.TEXTURE_2D,It,ft,St.width,St.height)}for(let St=0,kt=Ct.length;St<kt;St++)bt=Ct[St],Nt?j&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,$,at,bt):e.texImage2D(n.TEXTURE_2D,St,ft,$,at,bt);T.generateMipmaps=!1}else if(Nt){if(Mt){let St=Te(z);e.texStorage2D(n.TEXTURE_2D,It,ft,St.width,St.height)}j&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,$,at,z)}else e.texImage2D(n.TEXTURE_2D,0,ft,$,at,z);M(T)&&F(mt),Ht.__version=Bt.version,T.onUpdate&&T.onUpdate(T)}W.__version=T.version}function te(W,T,it){if(T.image.length!==6)return;let mt=ce(W,T),Et=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+it);let Bt=i.get(Et);if(Et.version!==Bt.__version||mt===!0){e.activeTexture(n.TEXTURE0+it);let Ht=Ee.getPrimaries(Ee.workingColorSpace),I=T.colorSpace===Ni?null:Ee.getPrimaries(T.colorSpace),z=T.colorSpace===Ni||Ht===I?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);let $=T.isCompressedTexture||T.image[0].isCompressedTexture,at=T.image[0]&&T.image[0].isDataTexture,ft=[];for(let Rt=0;Rt<6;Rt++)!$&&!at?ft[Rt]=S(T.image[Rt],!0,r.maxCubemapSize):ft[Rt]=at?T.image[Rt].image:T.image[Rt],ft[Rt]=Ue(T,ft[Rt]);let bt=ft[0],Ct=o.convert(T.format,T.colorSpace),Nt=o.convert(T.type),Mt=L(T.internalFormat,Ct,Nt,T.normalized,T.colorSpace),j=T.isVideoTexture!==!0,It=Bt.__version===void 0||mt===!0,St=Et.dataReady,kt=B(T,bt);ie(n.TEXTURE_CUBE_MAP,T);let Gt;if($){j&&It&&e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,Mt,bt.width,bt.height);for(let Rt=0;Rt<6;Rt++){Gt=ft[Rt].mipmaps;for(let Dt=0;Dt<Gt.length;Dt++){let ee=Gt[Dt];T.format!==Wn?Ct!==null?j?St&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Dt,0,0,ee.width,ee.height,Ct,ee.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Dt,Mt,ee.width,ee.height,0,ee.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Dt,0,0,ee.width,ee.height,Ct,Nt,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Dt,Mt,ee.width,ee.height,0,Ct,Nt,ee.data)}}}else{if(Gt=T.mipmaps,j&&It){Gt.length>0&&kt++;let Rt=Te(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,Mt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(at){j?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,ft[Rt].width,ft[Rt].height,Ct,Nt,ft[Rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Mt,ft[Rt].width,ft[Rt].height,0,Ct,Nt,ft[Rt].data);for(let Dt=0;Dt<Gt.length;Dt++){let Ne=Gt[Dt].image[Rt].image;j?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Dt+1,0,0,Ne.width,Ne.height,Ct,Nt,Ne.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Dt+1,Mt,Ne.width,Ne.height,0,Ct,Nt,Ne.data)}}else{j?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Ct,Nt,ft[Rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Mt,Ct,Nt,ft[Rt]);for(let Dt=0;Dt<Gt.length;Dt++){let ee=Gt[Dt];j?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Dt+1,0,0,Ct,Nt,ee.image[Rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Dt+1,Mt,Ct,Nt,ee.image[Rt])}}}M(T)&&F(n.TEXTURE_CUBE_MAP),Bt.__version=Et.version,T.onUpdate&&T.onUpdate(T)}W.__version=T.version}function Vt(W,T,it,mt,Et,Bt){let Ht=o.convert(it.format,it.colorSpace),I=o.convert(it.type),z=L(it.internalFormat,Ht,I,it.normalized,it.colorSpace),$=i.get(T),at=i.get(it);if(at.__renderTarget=T,!$.__hasExternalTextures){let ft=Math.max(1,T.width>>Bt),bt=Math.max(1,T.height>>Bt);Et===n.TEXTURE_3D||Et===n.TEXTURE_2D_ARRAY?e.texImage3D(Et,Bt,z,ft,bt,T.depth,0,Ht,I,null):e.texImage2D(Et,Bt,z,ft,bt,0,Ht,I,null)}e.bindFramebuffer(n.FRAMEBUFFER,W),Fe(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,Et,at.__webglTexture,0,Re(T)):(Et===n.TEXTURE_2D||Et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,mt,Et,at.__webglTexture,Bt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(W,T,it){if(n.bindRenderbuffer(n.RENDERBUFFER,W),T.depthBuffer){let mt=T.depthTexture,Et=mt&&mt.isDepthTexture?mt.type:null,Bt=U(T.stencilBuffer,Et),Ht=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Fe(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(T),Bt,T.width,T.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(T),Bt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Bt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ht,n.RENDERBUFFER,W)}else{let mt=T.textures;for(let Et=0;Et<mt.length;Et++){let Bt=mt[Et],Ht=o.convert(Bt.format,Bt.colorSpace),I=o.convert(Bt.type),z=L(Bt.internalFormat,Ht,I,Bt.normalized,Bt.colorSpace);Fe(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(T),z,T.width,T.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(T),z,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,z,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(W,T,it){let mt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,W),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Et=i.get(T.depthTexture);if(Et.__renderTarget=T,(!Et.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),mt){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,T.depthTexture.addEventListener("dispose",q)),Et.__webglTexture===void 0){Et.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Et.__webglTexture),ie(n.TEXTURE_CUBE_MAP,T.depthTexture);let $=o.convert(T.depthTexture.format),at=o.convert(T.depthTexture.type),ft;T.depthTexture.format===mi?ft=n.DEPTH_COMPONENT24:T.depthTexture.format===ar&&(ft=n.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ft,T.width,T.height,0,$,at,null)}}else pt(T.depthTexture,0);let Bt=Et.__webglTexture,Ht=Re(T),I=mt?n.TEXTURE_CUBE_MAP_POSITIVE_X+it:n.TEXTURE_2D,z=T.depthTexture.format===ar?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===mi)Fe(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,I,Bt,0,Ht):n.framebufferTexture2D(n.FRAMEBUFFER,z,I,Bt,0);else if(T.depthTexture.format===ar)Fe(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,I,Bt,0,Ht):n.framebufferTexture2D(n.FRAMEBUFFER,z,I,Bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(W){let T=i.get(W),it=W.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==W.depthTexture){let mt=W.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){let Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",Et)};mt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=mt}if(W.depthTexture&&!T.__autoAllocateDepthBuffer)if(it)for(let mt=0;mt<6;mt++)qe(T.__webglFramebuffer[mt],W,mt);else{let mt=W.texture.mipmaps;mt&&mt.length>0?qe(T.__webglFramebuffer[0],W,0):qe(T.__webglFramebuffer,W,0)}else if(it){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=n.createRenderbuffer(),le(T.__webglDepthbuffer[mt],W,!1);else{let Et=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Bt=T.__webglDepthbuffer[mt];n.bindRenderbuffer(n.RENDERBUFFER,Bt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,Bt)}}else{let mt=W.texture.mipmaps;if(mt&&mt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),le(T.__webglDepthbuffer,W,!1);else{let Et=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Bt=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Bt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,Bt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(W,T,it){let mt=i.get(W);T!==void 0&&Vt(mt.__webglFramebuffer,W,W.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),it!==void 0&&ue(W)}function Se(W){let T=W.texture,it=i.get(W),mt=i.get(T);W.addEventListener("dispose",C);let Et=W.textures,Bt=W.isWebGLCubeRenderTarget===!0,Ht=Et.length>1;if(Ht||(mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture()),mt.__version=T.version,c.memory.textures++),Bt){it.__webglFramebuffer=[];for(let I=0;I<6;I++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[I]=[];for(let z=0;z<T.mipmaps.length;z++)it.__webglFramebuffer[I][z]=n.createFramebuffer()}else it.__webglFramebuffer[I]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let I=0;I<T.mipmaps.length;I++)it.__webglFramebuffer[I]=n.createFramebuffer()}else it.__webglFramebuffer=n.createFramebuffer();if(Ht)for(let I=0,z=Et.length;I<z;I++){let $=i.get(Et[I]);$.__webglTexture===void 0&&($.__webglTexture=n.createTexture(),c.memory.textures++)}if(W.samples>0&&Fe(W)===!1){it.__webglMultisampledFramebuffer=n.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let I=0;I<Et.length;I++){let z=Et[I];it.__webglColorRenderbuffer[I]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,it.__webglColorRenderbuffer[I]);let $=o.convert(z.format,z.colorSpace),at=o.convert(z.type),ft=L(z.internalFormat,$,at,z.normalized,z.colorSpace,W.isXRRenderTarget===!0),bt=Re(W);n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,ft,W.width,W.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,it.__webglColorRenderbuffer[I])}n.bindRenderbuffer(n.RENDERBUFFER,null),W.depthBuffer&&(it.__webglDepthRenderbuffer=n.createRenderbuffer(),le(it.__webglDepthRenderbuffer,W,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Bt){e.bindTexture(n.TEXTURE_CUBE_MAP,mt.__webglTexture),ie(n.TEXTURE_CUBE_MAP,T);for(let I=0;I<6;I++)if(T.mipmaps&&T.mipmaps.length>0)for(let z=0;z<T.mipmaps.length;z++)Vt(it.__webglFramebuffer[I][z],W,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+I,z);else Vt(it.__webglFramebuffer[I],W,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);M(T)&&F(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let I=0,z=Et.length;I<z;I++){let $=Et[I],at=i.get($),ft=n.TEXTURE_2D;(W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(ft=W.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,at.__webglTexture),ie(ft,$),Vt(it.__webglFramebuffer,W,$,n.COLOR_ATTACHMENT0+I,ft,0),M($)&&F(ft)}e.unbindTexture()}else{let I=n.TEXTURE_2D;if((W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(I=W.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(I,mt.__webglTexture),ie(I,T),T.mipmaps&&T.mipmaps.length>0)for(let z=0;z<T.mipmaps.length;z++)Vt(it.__webglFramebuffer[z],W,T,n.COLOR_ATTACHMENT0,I,z);else Vt(it.__webglFramebuffer,W,T,n.COLOR_ATTACHMENT0,I,0);M(T)&&F(I),e.unbindTexture()}W.depthBuffer&&ue(W)}function _e(W){let T=W.textures;for(let it=0,mt=T.length;it<mt;it++){let Et=T[it];if(M(Et)){let Bt=H(W),Ht=i.get(Et).__webglTexture;e.bindTexture(Bt,Ht),F(Bt),e.unbindTexture()}}}let Ie=[],He=[];function je(W){if(W.samples>0){if(Fe(W)===!1){let T=W.textures,it=W.width,mt=W.height,Et=n.COLOR_BUFFER_BIT,Bt=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ht=i.get(W),I=T.length>1;if(I)for(let $=0;$<T.length;$++)e.bindFramebuffer(n.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);let z=W.texture.mipmaps;z&&z.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let $=0;$<T.length;$++){if(W.resolveDepthBuffer&&(W.depthBuffer&&(Et|=n.DEPTH_BUFFER_BIT),W.stencilBuffer&&W.resolveStencilBuffer&&(Et|=n.STENCIL_BUFFER_BIT)),I){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ht.__webglColorRenderbuffer[$]);let at=i.get(T[$]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,at,0)}n.blitFramebuffer(0,0,it,mt,0,0,it,mt,Et,n.NEAREST),f===!0&&(Ie.length=0,He.length=0,Ie.push(n.COLOR_ATTACHMENT0+$),W.depthBuffer&&W.storeMultisampledDepthBuffer===!1&&(Ie.push(Bt),He.push(Bt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ie))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),I)for(let $=0;$<T.length;$++){e.bindFramebuffer(n.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,Ht.__webglColorRenderbuffer[$]);let at=i.get(T[$]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,at,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(W.depthBuffer&&W.storeMultisampledDepthBuffer===!1&&f){let T=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Re(W){return Math.min(r.maxSamples,W.samples)}function Fe(W){let T=i.get(W);return W.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ct(W){let T=c.render.frame;g.get(W)!==T&&(g.set(W,T),W.update())}function Ue(W,T){let it=W.colorSpace,mt=W.format,Et=W.type;return W.isCompressedTexture===!0||W.isVideoTexture===!0||it!==no&&it!==Ni&&(Ee.getTransfer(it)===De?(mt!==Wn||Et!==In)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",it)),T}function Te(W){return typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement?(d.width=W.naturalWidth||W.width,d.height=W.naturalHeight||W.height):typeof VideoFrame<"u"&&W instanceof VideoFrame?(d.width=W.displayWidth,d.height=W.displayHeight):(d.width=W.width,d.height=W.height),d}this.allocateTextureUnit=dt,this.resetTextureUnits=et,this.getTextureUnits=Q,this.setTextureUnits=tt,this.setTexture2D=pt,this.setTexture2DArray=ut,this.setTexture3D=gt,this.setTextureCube=yt,this.rebindTextures=ye,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Xx(n,t){function e(i,r=Ni){let o,c=Ee.getTransfer(r);if(i===In)return n.UNSIGNED_BYTE;if(i===ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ph)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ih)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ah)return n.BYTE;if(i===Ch)return n.SHORT;if(i===Es)return n.UNSIGNED_SHORT;if(i===hl)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===Rh)return n.ALPHA;if(i===Lh)return n.RGB;if(i===Wn)return n.RGBA;if(i===mi)return n.DEPTH_COMPONENT;if(i===ar)return n.DEPTH_STENCIL;if(i===Nh)return n.RED;if(i===dl)return n.RED_INTEGER;if(i===lr)return n.RG;if(i===pl)return n.RG_INTEGER;if(i===ml)return n.RGBA_INTEGER;if(i===Po||i===Io||i===Ro||i===Lo)if(c===De)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Po)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Po)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Io)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gl||i===_l||i===vl||i===yl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===gl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_l)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xl||i===Ml||i===Sl||i===bl||i===wl||i===No||i===El)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===xl||i===Ml)return c===De?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Sl)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===bl)return o.COMPRESSED_R11_EAC;if(i===wl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===No)return o.COMPRESSED_RG11_EAC;if(i===El)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tl||i===Al||i===Cl||i===Pl||i===Il||i===Rl||i===Ll||i===Nl||i===Dl||i===Ol||i===Fl||i===Ul||i===Bl||i===kl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Tl)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cl)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Il)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rl)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nl)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dl)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fl)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ul)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bl)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zl||i===Vl||i===Hl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===zl)return c===De?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gl||i===Xl||i===Do||i===Wl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Gl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Xl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Do)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function $x(n,t){function e(S,M){S.matrixAutoUpdate===!0&&S.updateMatrix(),M.value.copy(S.matrix)}function i(S,M){M.color.getRGB(S.fogColor.value,Bh(n)),M.isFog?(S.fogNear.value=M.near,S.fogFar.value=M.far):M.isFogExp2&&(S.fogDensity.value=M.density)}function r(S,M,F,H,L){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?o(S,M):M.isMeshLambertMaterial?(o(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(o(S,M),y(S,M)):M.isMeshPhongMaterial?(o(S,M),g(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(o(S,M),v(S,M),M.isMeshPhysicalMaterial&&b(S,M,L)):M.isMeshMatcapMaterial?(o(S,M),E(S,M)):M.isMeshDepthMaterial?o(S,M):M.isMeshDistanceMaterial?(o(S,M),P(S,M)):M.isMeshNormalMaterial?o(S,M):M.isLineBasicMaterial?(c(S,M),M.isLineDashedMaterial&&u(S,M)):M.isPointsMaterial?f(S,M,F,H):M.isSpriteMaterial?d(S,M):M.isShadowMaterial?(S.color.value.copy(M.color),S.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function o(S,M){S.opacity.value=M.opacity,M.color&&S.diffuse.value.copy(M.color),M.emissive&&S.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(S.map.value=M.map,e(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.bumpMap&&(S.bumpMap.value=M.bumpMap,e(M.bumpMap,S.bumpMapTransform),S.bumpScale.value=M.bumpScale,M.side===Tn&&(S.bumpScale.value*=-1)),M.normalMap&&(S.normalMap.value=M.normalMap,e(M.normalMap,S.normalMapTransform),S.normalScale.value.copy(M.normalScale),M.side===Tn&&S.normalScale.value.negate()),M.displacementMap&&(S.displacementMap.value=M.displacementMap,e(M.displacementMap,S.displacementMapTransform),S.displacementScale.value=M.displacementScale,S.displacementBias.value=M.displacementBias),M.emissiveMap&&(S.emissiveMap.value=M.emissiveMap,e(M.emissiveMap,S.emissiveMapTransform)),M.specularMap&&(S.specularMap.value=M.specularMap,e(M.specularMap,S.specularMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest);let F=t.get(M),H=F.envMap,L=F.envMapRotation;H&&(S.envMap.value=H,S.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(L)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Xd),S.reflectivity.value=M.reflectivity,S.ior.value=M.ior,S.refractionRatio.value=M.refractionRatio),M.lightMap&&(S.lightMap.value=M.lightMap,S.lightMapIntensity.value=M.lightMapIntensity,e(M.lightMap,S.lightMapTransform)),M.aoMap&&(S.aoMap.value=M.aoMap,S.aoMapIntensity.value=M.aoMapIntensity,e(M.aoMap,S.aoMapTransform))}function c(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,M.map&&(S.map.value=M.map,e(M.map,S.mapTransform))}function u(S,M){S.dashSize.value=M.dashSize,S.totalSize.value=M.dashSize+M.gapSize,S.scale.value=M.scale}function f(S,M,F,H){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.size.value=M.size*F,S.scale.value=H*.5,M.map&&(S.map.value=M.map,e(M.map,S.uvTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function d(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.rotation.value=M.rotation,M.map&&(S.map.value=M.map,e(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function g(S,M){S.specular.value.copy(M.specular),S.shininess.value=Math.max(M.shininess,1e-4)}function y(S,M){M.gradientMap&&(S.gradientMap.value=M.gradientMap)}function v(S,M){S.metalness.value=M.metalness,M.metalnessMap&&(S.metalnessMap.value=M.metalnessMap,e(M.metalnessMap,S.metalnessMapTransform)),S.roughness.value=M.roughness,M.roughnessMap&&(S.roughnessMap.value=M.roughnessMap,e(M.roughnessMap,S.roughnessMapTransform)),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)}function b(S,M,F){S.ior.value=M.ior,M.sheen>0&&(S.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),S.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(S.sheenColorMap.value=M.sheenColorMap,e(M.sheenColorMap,S.sheenColorMapTransform)),M.sheenRoughnessMap&&(S.sheenRoughnessMap.value=M.sheenRoughnessMap,e(M.sheenRoughnessMap,S.sheenRoughnessMapTransform))),M.clearcoat>0&&(S.clearcoat.value=M.clearcoat,S.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(S.clearcoatMap.value=M.clearcoatMap,e(M.clearcoatMap,S.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,e(M.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(S.clearcoatNormalMap.value=M.clearcoatNormalMap,e(M.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Tn&&S.clearcoatNormalScale.value.negate())),M.dispersion>0&&(S.dispersion.value=M.dispersion),M.retroreflectivity>0&&(S.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(S.iridescence.value=M.iridescence,S.iridescenceIOR.value=M.iridescenceIOR,S.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(S.iridescenceMap.value=M.iridescenceMap,e(M.iridescenceMap,S.iridescenceMapTransform)),M.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=M.iridescenceThicknessMap,e(M.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),M.transmission>0&&(S.transmission.value=M.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),M.transmissionMap&&(S.transmissionMap.value=M.transmissionMap,e(M.transmissionMap,S.transmissionMapTransform)),S.thickness.value=M.thickness,M.thicknessMap&&(S.thicknessMap.value=M.thicknessMap,e(M.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=M.attenuationDistance,S.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(S.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(S.anisotropyMap.value=M.anisotropyMap,e(M.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=M.specularIntensity,S.specularColor.value.copy(M.specularColor),M.specularColorMap&&(S.specularColorMap.value=M.specularColorMap,e(M.specularColorMap,S.specularColorMapTransform)),M.specularIntensityMap&&(S.specularIntensityMap.value=M.specularIntensityMap,e(M.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,M){M.matcap&&(S.matcap.value=M.matcap)}function P(S,M){let F=t.get(M).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zx(n,t,e,i){let r={},o={},c=[],u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,U){let B=U.program;i.uniformBlockBinding(L,B)}function d(L,U){let B=r[L.id];B===void 0&&(S(L),B=g(L),r[L.id]=B,L.addEventListener("dispose",F));let q=U.program;i.updateUBOMapping(L,q);let C=t.render.frame;o[L.id]!==C&&(v(L),o[L.id]=C)}function g(L){let U=y();L.__bindingPointIndex=U;let B=n.createBuffer(),q=L.__size,C=L.usage;return n.bindBuffer(n.UNIFORM_BUFFER,B),n.bufferData(n.UNIFORM_BUFFER,q,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,U,B),B}function y(){for(let L=0;L<u;L++)if(c.indexOf(L)===-1)return c.push(L),L;return de("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){let U=r[L.id],B=L.uniforms,q=L.__cache;n.bindBuffer(n.UNIFORM_BUFFER,U);for(let C=0,k=B.length;C<k;C++){let Y=B[C];if(Array.isArray(Y))for(let nt=0,rt=Y.length;nt<rt;nt++)b(Y[nt],C,nt,q);else b(Y,C,0,q)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function b(L,U,B,q){if(P(L,U,B,q)===!0){let C=L.__offset,k=L.value;if(Array.isArray(k)){let Y=0;for(let nt=0;nt<k.length;nt++){let rt=k[nt],et=M(rt);E(rt,L.__data,Y),typeof rt!="number"&&typeof rt!="boolean"&&!rt.isMatrix3&&!ArrayBuffer.isView(rt)&&(Y+=et.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(k,L.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,L.__data)}}function E(L,U,B){typeof L=="number"||typeof L=="boolean"?U[0]=L:L.isMatrix3?(U[0]=L.elements[0],U[1]=L.elements[1],U[2]=L.elements[2],U[3]=0,U[4]=L.elements[3],U[5]=L.elements[4],U[6]=L.elements[5],U[7]=0,U[8]=L.elements[6],U[9]=L.elements[7],U[10]=L.elements[8],U[11]=0):ArrayBuffer.isView(L)?U.set(new L.constructor(L.buffer,L.byteOffset,U.length)):L.toArray(U,B)}function P(L,U,B,q){let C=L.value,k=U+"_"+B;if(q[k]===void 0)return typeof C=="number"||typeof C=="boolean"?q[k]=C:ArrayBuffer.isView(C)?q[k]=C.slice():q[k]=C.clone(),!0;{let Y=q[k];if(typeof C=="number"||typeof C=="boolean"){if(Y!==C)return q[k]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(Y.equals(C)===!1)return Y.copy(C),!0}}return!1}function S(L){let U=L.uniforms,B=0,q=16;for(let k=0,Y=U.length;k<Y;k++){let nt=Array.isArray(U[k])?U[k]:[U[k]];for(let rt=0,et=nt.length;rt<et;rt++){let Q=nt[rt],tt=Array.isArray(Q.value)?Q.value:[Q.value];for(let dt=0,X=tt.length;dt<X;dt++){let pt=tt[dt],ut=M(pt),gt=B%q,yt=gt%ut.boundary,Ft=gt+yt;B+=yt,Ft!==0&&q-Ft<ut.storage&&(B+=q-Ft),Q.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=B,B+=ut.storage}}}let C=B%q;return C>0&&(B+=q-C),L.__size=B,L.__cache={},this}function M(L){let U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(U.boundary=16,U.storage=L.byteLength):he("WebGLRenderer: Unsupported uniform value type.",L),U}function F(L){let U=L.target;U.removeEventListener("dispose",F);let B=c.indexOf(U.__bindingPointIndex);c.splice(B,1),n.deleteBuffer(r[U.id]),delete r[U.id],delete o[U.id]}function H(){for(let L in r)n.deleteBuffer(r[L]);c=[],r={},o={}}return{bind:f,update:d,dispose:H}}function jx(){return vi===null&&(vi=new Va(Jx,16,16,lr,ai),vi.name="DFG_LUT",vi.minFilter=fn,vi.magFilter=fn,vi.wrapS=pi,vi.wrapT=pi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var h0,u0,f0,d0,p0,m0,g0,_0,v0,y0,x0,M0,S0,b0,w0,E0,T0,A0,C0,P0,I0,R0,L0,N0,D0,O0,F0,U0,B0,k0,z0,V0,H0,G0,X0,W0,Y0,q0,$0,Z0,J0,j0,K0,Q0,t_,e_,n_,i_,r_,s_,o_,a_,l_,c_,h_,u_,f_,d_,p_,m_,g_,__,v_,y_,x_,M_,S_,b_,w_,E_,T_,A_,C_,P_,I_,R_,L_,N_,D_,O_,F_,U_,B_,k_,z_,V_,H_,G_,X_,W_,Y_,q_,$_,Z_,J_,j_,K_,Q_,tv,ev,nv,iv,rv,sv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,vv,yv,xv,Mv,Sv,bv,wv,Ev,Tv,Av,Cv,Pv,Iv,Rv,Lv,Nv,Dv,Ov,Fv,Uv,Bv,kv,zv,Vv,Hv,Gv,Me,Zt,yi,Zl,Xv,kd,Cs,Jv,jv,Kv,Oo,_d,Gh,Xh,Wh,Yh,Qv,Cr,jl,Kl,hy,zd,Zh,Vd,Hd,Gd,Md,Sd,bd,wd,Ed,Jh,jh,Kh,qh,Ps,Qy,tx,Cd,rx,Jl,hx,ux,dx,mx,_x,yx,Mx,Ex,tu,eu,Nx,Ux,Bx,kx,zx,Ud,Fo,$h,Wx,Yx,nu,iu,qx,Xd,Jx,vi,Ql,nc=Sn(()=>{Hh();Hh();h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0=`#ifdef USE_BATCHING
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
#endif`,y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b0=`#ifdef USE_IRIDESCENCE
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
#endif`,w0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,N0=`#define PI 3.141592653589793
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O0=`vec3 transformedNormal = objectNormal;
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
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",V0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
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
}`,K0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a_=`PhysicalMaterial material;
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
#endif`,l_=`uniform sampler2D dfgLUT;
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
}`,c_=`
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
#endif`,h_=`#if defined( RE_IndirectDiffuse )
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,__=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x_=`#if defined( USE_POINTS_UV )
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
#endif`,M_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`#ifdef USE_MORPHTARGETS
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
#endif`,A_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N_=`#ifdef USE_NORMALMAP
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
#endif`,D_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z_=`float getShadowMask() {
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
}`,J_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q_=`#ifdef USE_SKINNING
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
#endif`,tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rv=`#ifdef USE_TRANSMISSION
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
#endif`,sv=`#ifdef USE_TRANSMISSION
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uv=`uniform sampler2D t2D;
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
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`#include <common>
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
}`,_v=`#if DEPTH_PACKING == 3200
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
}`,vv=`#define DISTANCE
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
}`,yv=`#define DISTANCE
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`uniform float scale;
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
}`,bv=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Tv=`#define LAMBERT
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
}`,Av=`#define LAMBERT
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
}`,Cv=`#define MATCAP
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
}`,Pv=`#define MATCAP
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
}`,Iv=`#define NORMAL
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
}`,Rv=`#define NORMAL
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
}`,Lv=`#define PHONG
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
}`,Nv=`#define PHONG
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
}`,Dv=`#define STANDARD
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
}`,Ov=`#define STANDARD
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
}`,Fv=`#define TOON
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
}`,Uv=`#define TOON
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
}`,Bv=`uniform float size;
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
}`,kv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,Vv=`uniform vec3 color;
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
}`,Hv=`uniform float rotation;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:h0,alphahash_pars_fragment:u0,alphamap_fragment:f0,alphamap_pars_fragment:d0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:_0,batching_pars_vertex:v0,batching_vertex:y0,begin_vertex:x0,beginnormal_vertex:M0,bsdfs:S0,iridescence_fragment:b0,bumpmap_pars_fragment:w0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:C0,color_fragment:P0,color_pars_fragment:I0,color_pars_vertex:R0,color_vertex:L0,common:N0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:O0,displacementmap_pars_vertex:F0,displacementmap_vertex:U0,emissivemap_fragment:B0,emissivemap_pars_fragment:k0,colorspace_fragment:z0,colorspace_pars_fragment:V0,envmap_fragment:H0,envmap_common_pars_fragment:G0,envmap_pars_fragment:X0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:n_,envmap_vertex:Y0,fog_vertex:q0,fog_pars_vertex:$0,fog_fragment:Z0,fog_pars_fragment:J0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:K0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:t_,lights_pars_begin:e_,lights_toon_fragment:i_,lights_toon_pars_fragment:r_,lights_phong_fragment:s_,lights_phong_pars_fragment:o_,lights_physical_fragment:a_,lights_physical_pars_fragment:l_,lights_fragment_begin:c_,lights_fragment_maps:h_,lights_fragment_end:u_,lightprobes_pars_fragment:f_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:p_,logdepthbuf_pars_vertex:m_,logdepthbuf_vertex:g_,map_fragment:__,map_pars_fragment:v_,map_particle_fragment:y_,map_particle_pars_fragment:x_,metalnessmap_fragment:M_,metalnessmap_pars_fragment:S_,morphinstance_vertex:b_,morphcolor_vertex:w_,morphnormal_vertex:E_,morphtarget_pars_vertex:T_,morphtarget_vertex:A_,normal_fragment_begin:C_,normal_fragment_maps:P_,normal_pars_fragment:I_,normal_pars_vertex:R_,normal_vertex:L_,normalmap_pars_fragment:N_,clearcoat_normal_fragment_begin:D_,clearcoat_normal_fragment_maps:O_,clearcoat_pars_fragment:F_,iridescence_pars_fragment:U_,opaque_fragment:B_,packing:k_,premultiplied_alpha_fragment:z_,project_vertex:V_,dithering_fragment:H_,dithering_pars_fragment:G_,roughnessmap_fragment:X_,roughnessmap_pars_fragment:W_,shadowmap_pars_fragment:Y_,shadowmap_pars_vertex:q_,shadowmap_vertex:$_,shadowmask_pars_fragment:Z_,skinbase_vertex:J_,skinning_pars_vertex:j_,skinning_vertex:K_,skinnormal_vertex:Q_,specularmap_fragment:tv,specularmap_pars_fragment:ev,tonemapping_fragment:nv,tonemapping_pars_fragment:iv,transmission_fragment:rv,transmission_pars_fragment:sv,uv_pars_fragment:ov,uv_pars_vertex:av,uv_vertex:lv,worldpos_vertex:cv,background_vert:hv,background_frag:uv,backgroundCube_vert:fv,backgroundCube_frag:dv,cube_vert:pv,cube_frag:mv,depth_vert:gv,depth_frag:_v,distance_vert:vv,distance_frag:yv,equirect_vert:xv,equirect_frag:Mv,linedashed_vert:Sv,linedashed_frag:bv,meshbasic_vert:wv,meshbasic_frag:Ev,meshlambert_vert:Tv,meshlambert_frag:Av,meshmatcap_vert:Cv,meshmatcap_frag:Pv,meshnormal_vert:Iv,meshnormal_frag:Rv,meshphong_vert:Lv,meshphong_frag:Nv,meshphysical_vert:Dv,meshphysical_frag:Ov,meshtoon_vert:Fv,meshtoon_frag:Uv,points_vert:Bv,points_frag:kv,shadow_vert:zv,shadow_frag:Vv,sprite_vert:Hv,sprite_frag:Gv},Zt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new lt},probesMax:{value:new lt},probesResolution:{value:new lt}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},yi={basic:{uniforms:xn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:xn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:xn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:xn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:xn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new ge(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:xn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:xn([Zt.points,Zt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:xn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:xn([Zt.common,Zt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:xn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:xn([Zt.sprite,Zt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:xn([Zt.common,Zt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:xn([Zt.lights,Zt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};yi.physical={uniforms:xn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};Zl={r:0,b:0,g:0},Xv=new ze,kd=new ve;kd.set(-1,0,0,0,1,0,0,0,1);Cs=4,Jv=6,jv=20,Kv=256,Oo=new xs,_d=new ge,Gh=null,Xh=0,Wh=0,Yh=!1,Qv=new lt,Cr=new lt,jl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,o={}){let{size:c=256,position:u=Qv}=o;Gh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,i,r,f,u),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gh,Xh,Wh),this._renderer.xr.enabled=Yh,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ai,format:Wn,colorSpace:no,depthBuffer:!1},r=vd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vd(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ty(o)),this._blurMaterial=ny(o,t,e),this._ggxMaterial=ey(o,t,e)}return r}_compileMaterial(t){let e=new Oe(new Ze,t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,i,r,o){let f=new vn(90,1,e,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],y=this._renderer,v=y.autoClear,b=y.toneMapping;y.getClearColor(_d),y.toneMapping=ri,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(r),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new Ki,new Fn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,S=P.material,M=!1,F=t.background;F?F.isColor&&(S.color.copy(F),t.background=null,M=!0):(S.color.copy(_d),M=!0);for(let H=0;H<6;H++){let L=H%3;L===0?(f.up.set(0,d[H],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+g[H],o.y,o.z)):L===1?(f.up.set(0,0,d[H]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+g[H],o.z)):(f.up.set(0,d[H],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+g[H]));let U=this._cubeSize;As(r,L*U,H>2?U:0,U,U),y.setRenderTarget(r),M&&y.render(P,f),y.render(t,f)}y.toneMapping=b,y.autoClear=v,t.background=F}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===sr||t.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yd());let o=r?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;let u=o.uniforms;u.envMap.value=t;let f=this._cubeSize;As(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(c,Oo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=i/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),y=Math.sqrt(d*d-g*g),v=d*1.25,b=y*v,{_lodMax:E}=this,P=this._sizeLods[i],S=3*P*(i>E-Cs?i-E+Cs:0),M=4*(this._cubeSize-P);f.envMap.value=t.texture,f.roughness.value=b,f.mipInt.value=E-e,As(o,S,M,3*P,2*P),r.setRenderTarget(o),r.render(u,Oo),f.envMap.value=o.texture,f.roughness.value=0,f.mipInt.value=E-i,As(t,S,M,3*P,2*P),r.setRenderTarget(t),r.render(u,Oo)}_blur(t,e,i,r){let o=this._pingPongRenderTarget,c=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,c),this._blurPass(o,t,i,i,c)}_blurPass(t,e,i,r,o){let c=this._renderer,u=this._blurMaterial,f=this._lodMeshes[r];f.material=u;let d=u.uniforms;d.envMap.value=t.texture,d.sigma.value=o,d.mipInt.value=this._lodMax-i;let g=this._sizeLods[r],y=3*g*(r>this._lodMax-Cs?r-this._lodMax+Cs:0),v=4*(this._cubeSize-g);As(e,y,v,3*g,2*g),c.setRenderTarget(e),c.render(f,Oo)}};Kl=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new fo(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ki(5,5,5),o=new Un({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:_i});o.uniforms.tEquirect.value=e;let c=new Oe(r,o),u=e.minFilter;return e.minFilter===or&&(e.minFilter=fn),new sl(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,r);t.setRenderTarget(o)}};hy={[yh]:"LINEAR_TONE_MAPPING",[xh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[Sh]:"ACES_FILMIC_TONE_MAPPING",[wh]:"AGX_TONE_MAPPING",[Eh]:"NEUTRAL_TONE_MAPPING",[bh]:"CUSTOM_TONE_MAPPING"};zd=new En,Zh=new ji(1,1),Vd=new oo,Hd=new ka,Gd=new fo,Md=[],Sd=[],bd=new Float32Array(16),wd=new Float32Array(9),Ed=new Float32Array(4);Jh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ry(e.type)}},jh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jy(e.type)}},Kh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let o=0,c=r.length;o!==c;++o){let u=r[o];u.setValue(t,e[u.id],i)}}},qh=/(\w+)(\])?(\[|\.)?/g;Ps=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){let u=t.getActiveUniform(e,c),f=t.getUniformLocation(e,u.name);Ky(u,f,this)}let r=[],o=[];for(let c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(c):o.push(c);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,i,r){let o=this.map[e];o!==void 0&&o.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let o=0,c=e.length;o!==c;++o){let u=e[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,o=t.length;r!==o;++r){let c=t[r];c.id in e&&i.push(c)}return i}};Qy=37297,tx=0;Cd=new ve;rx={[yh]:"Linear",[xh]:"Reinhard",[Mh]:"Cineon",[Sh]:"ACESFilmic",[wh]:"AgX",[Eh]:"Neutral",[bh]:"Custom"};Jl=new lt;hx=/^[ \t]*#include +<([\w\d./]+)>/gm;ux=new Map;dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;mx={[To]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};_x={[sr]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE_UV"};yx={[Er]:"ENVMAP_MODE_REFRACTION"};Mx={[vh]:"ENVMAP_BLENDING_MULTIPLY",[Jf]:"ENVMAP_BLENDING_MIX",[jf]:"ENVMAP_BLENDING_ADD"};Ex=0,tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new eu(t),e.set(t,i)),i}},eu=class{constructor(t){this.id=Ex++,this.code=t,this.usedTimes=0}};Nx=0;Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
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
}`,kx=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],zx=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],Ud=new ze,Fo=new lt,$h=new lt;Wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yx=`
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

}`,nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new mo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Un({vertexShader:Wx,fragmentShader:Yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new go(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},iu=class extends ni{constructor(t,e){super();let i=this,r=null,o=1,c=null,u="local-floor",f=1,d=null,g=null,y=null,v=null,b=null,E=null,P=typeof XRWebGLBinding<"u",S=new nu,M={},F=e.getContextAttributes(),H=null,L=null,U=[],B=[],q=new oe,C=null,k=null,Y=new vn;Y.viewport=new Je;let nt=new vn;nt.viewport=new Je;let rt=[Y,nt],et=new ol,Q=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Pt=U[V];return Pt===void 0&&(Pt=new ms,U[V]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(V){let Pt=U[V];return Pt===void 0&&(Pt=new ms,U[V]=Pt),Pt.getGripSpace()},this.getHand=function(V){let Pt=U[V];return Pt===void 0&&(Pt=new ms,U[V]=Pt),Pt.getHandSpace()};function dt(V){let Pt=B.indexOf(V.inputSource);if(Pt===-1)return;let Jt=U[Pt];Jt!==void 0&&(Jt.update(V.inputSource,V.frame,d||c),Jt.dispatchEvent({type:V.type,data:V.inputSource}))}function X(){r.removeEventListener("select",dt),r.removeEventListener("selectstart",dt),r.removeEventListener("selectend",dt),r.removeEventListener("squeeze",dt),r.removeEventListener("squeezestart",dt),r.removeEventListener("squeezeend",dt),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",pt);for(let V=0;V<U.length;V++){let Pt=B[V];Pt!==null&&(B[V]=null,U[V].disconnect(Pt))}Q=null,tt=null,S.reset();for(let V in M)delete M[V];if(t.setRenderTarget(H),b=null,v=null,y=null,r=null,L=null,ce.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(q.width,q.height,!1),k!==null){let V=k.camera;V.fov=k.fov,V.zoom=k.zoom,V.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){u=V,i.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(V){d=V},this.getBaseLayer=function(){return v!==null?v:b},this.getBinding=function(){return y===null&&P&&(y=new XRWebGLBinding(r,e)),y},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(H=t.getRenderTarget(),r.addEventListener("select",dt),r.addEventListener("selectstart",dt),r.addEventListener("selectend",dt),r.addEventListener("squeeze",dt),r.addEventListener("squeezestart",dt),r.addEventListener("squeezeend",dt),r.addEventListener("end",X),r.addEventListener("inputsourceschange",pt),F.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(q),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Jt=null,te=null,Vt=null;F.depth&&(Vt=F.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Jt=F.stencil?ar:mi,te=F.stencil?Ts:si);let le={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:o};y=this.getBinding(),v=y.createProjectionLayer(le),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new Pn(v.textureWidth,v.textureHeight,{format:Wn,type:In,depthTexture:new ji(v.textureWidth,v.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Jt),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{let Jt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:o};b=new XRWebGLLayer(r,e,Jt),r.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),L=new Pn(b.framebufferWidth,b.framebufferHeight,{format:Wn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await r.requestReferenceSpace(u),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function pt(V){for(let Pt=0;Pt<V.removed.length;Pt++){let Jt=V.removed[Pt],te=B.indexOf(Jt);te>=0&&(B[te]=null,U[te].disconnect(Jt))}for(let Pt=0;Pt<V.added.length;Pt++){let Jt=V.added[Pt],te=B.indexOf(Jt);if(te===-1){for(let le=0;le<U.length;le++)if(le>=B.length){B.push(Jt),te=le;break}else if(B[le]===null){B[le]=Jt,te=le;break}if(te===-1)break}let Vt=U[te];Vt&&Vt.connect(Jt)}}let ut=new lt,gt=new lt;function yt(V,Pt,Jt){ut.setFromMatrixPosition(Pt.matrixWorld),gt.setFromMatrixPosition(Jt.matrixWorld);let te=ut.distanceTo(gt),Vt=Pt.projectionMatrix.elements,le=Jt.projectionMatrix.elements,qe=Vt[14]/(Vt[10]-1),ue=Vt[14]/(Vt[10]+1),ye=(Vt[9]+1)/Vt[5],Se=(Vt[9]-1)/Vt[5],_e=(Vt[8]-1)/Vt[0],Ie=(le[8]+1)/le[0],He=qe*_e,je=qe*Ie,Re=te/(-_e+Ie),Fe=Re*-_e;if(Pt.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Fe),V.translateZ(Re),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Vt[10]===-1)V.projectionMatrix.copy(Pt.projectionMatrix),V.projectionMatrixInverse.copy(Pt.projectionMatrixInverse);else{let ct=qe+Re,Ue=ue+Re,Te=He-Fe,W=je+(te-Fe),T=ye*ue/Ue*ct,it=Se*ue/Ue*ct;V.projectionMatrix.makePerspective(Te,W,T,it,ct,Ue),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Ft(V,Pt){Pt===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Pt.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let Pt=V.near,Jt=V.far;S.texture!==null&&(S.depthNear>0&&(Pt=S.depthNear),S.depthFar>0&&(Jt=S.depthFar)),et.near=nt.near=Y.near=Pt,et.far=nt.far=Y.far=Jt,(Q!==et.near||tt!==et.far)&&(r.updateRenderState({depthNear:et.near,depthFar:et.far}),Q=et.near,tt=et.far),et.layers.mask=V.layers.mask|6,Y.layers.mask=et.layers.mask&-5,nt.layers.mask=et.layers.mask&-3;let te=V.parent,Vt=et.cameras;Ft(et,te);for(let le=0;le<Vt.length;le++)Ft(Vt[le],te);Vt.length===2?yt(et,Y,nt):et.projectionMatrix.copy(Y.projectionMatrix),k===null&&V.isPerspectiveCamera&&(k={camera:V,fov:V.fov,zoom:V.zoom}),zt(V,et,te)};function zt(V,Pt,Jt){Jt===null?V.matrix.copy(Pt.matrixWorld):(V.matrix.copy(Jt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Pt.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Pt.projectionMatrix),V.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=fs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(v===null&&b===null))return f},this.setFoveation=function(V){f=V,v!==null&&(v.fixedFoveation=V),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=V)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(et)},this.getCameraTexture=function(V){return M[V]};let Wt=null;function ie(V,Pt){if(g=Pt.getViewerPose(d||c),E=Pt,g!==null){let Jt=g.views;b!==null&&(t.setRenderTargetFramebuffer(L,b.framebuffer),t.setRenderTarget(L));let te=!1;Jt.length!==et.cameras.length&&(et.cameras.length=0,te=!0);for(let ue=0;ue<Jt.length;ue++){let ye=Jt[ue],Se=null;if(b!==null)Se=b.getViewport(ye);else{let Ie=y.getViewSubImage(v,ye);Se=Ie.viewport,ue===0&&(t.setRenderTargetTextures(L,Ie.colorTexture,Ie.depthStencilTexture),t.setRenderTarget(L))}let _e=rt[ue];_e===void 0&&(_e=new vn,_e.layers.enable(ue),_e.viewport=new Je,rt[ue]=_e),_e.matrix.fromArray(ye.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ye.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Se.x,Se.y,Se.width,Se.height),ue===0&&(et.matrix.copy(_e.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),te===!0&&et.cameras.push(_e)}let Vt=r.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&P){y=i.getBinding();let ue=y.getDepthInformation(Jt[0]);ue&&ue.isValid&&ue.texture&&S.init(ue,r.renderState)}if(Vt&&Vt.includes("camera-access")&&P){t.state.unbindTexture(),y=i.getBinding();for(let ue=0;ue<Jt.length;ue++){let ye=Jt[ue].camera;if(ye){let Se=M[ye];Se||(Se=new mo,M[ye]=Se);let _e=y.getCameraImage(ye);Se.sourceTexture=_e}}}}for(let Jt=0;Jt<U.length;Jt++){let te=B[Jt],Vt=U[Jt];te!==null&&Vt!==void 0&&Vt.update(te,Pt,d||c)}Wt&&Wt(V,Pt),Pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Pt}),E=null}let ce=new Bd;ce.setAnimationLoop(ie),this.setAnimationLoop=function(V){Wt=V},this.dispose=function(){}}},qx=new ze,Xd=new ve;Xd.set(-1,0,0,0,1,0,0,0,1);Jx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;Ql=class{constructor(t={}){let{canvas:e=ld(),context:i=null,depth:r=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:v=!1,outputBufferType:b=In}=t;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=c;let P=b,S=new Set([ml,pl,dl]),M=new Set([In,si,Es,Ts,ul,fl]),F=new Uint32Array(4),H=new Int32Array(4),L=new lt,U=null,B=null,q=[],C=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let Y=this,nt=!1,rt=null,et=null,Q=null,tt=null;this._outputColorSpace=wn;let dt=0,X=0,pt=null,ut=-1,gt=null,yt=new Je,Ft=new Je,zt=null,Wt=new ge(0),ie=0,ce=e.width,V=e.height,Pt=1,Jt=null,te=null,Vt=new Je(0,0,ce,V),le=new Je(0,0,ce,V),qe=!1,ue=new _s,ye=!1,Se=!1,_e=new ze,Ie=new lt,He=new Je,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Fe(){return pt===null?Pt:1}let ct=i;function Ue(D,st){return e.getContext(D,st)}let Te,W,T,it,mt,Et,Bt,Ht,I,z,$,at,ft,bt,Ct,Nt,Mt,j,It,St,kt,Gt,Rt;try{let D={alpha:!0,depth:r,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",Ce,!1),e.addEventListener("webglcontextcreationerror",Mn,!1),ct===null){let st="webgl2";if(ct=Ue(st,D),ct===null)throw Ue(st)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(D){throw e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Ce,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),de("WebGLRenderer: "+D.message),D}function Dt(){Te=new ry(ct),Te.init(),kt=new Xx(ct,Te),W=new $v(ct,Te,t,kt),T=new Hx(ct,Te),W.reversedDepthBuffer&&v&&T.buffers.depth.setReversed(!0),et=ct.createFramebuffer(),Q=ct.createFramebuffer(),tt=ct.createFramebuffer(),it=new ay(ct),mt=new Cx,Et=new Gx(ct,Te,T,mt,W,kt,it),Bt=new iy(Y),Ht=new c0(ct),Gt=new Yv(ct,Ht),I=new sy(ct,Ht,it,Gt),z=new cy(ct,I,Ht,Gt,it),j=new ly(ct,W,Et),Ct=new Zv(mt),$=new Ax(Y,Bt,Te,W,Gt,Ct),at=new $x(Y,mt),ft=new Ix,bt=new Fx(Te),Mt=new Wv(Y,Bt,T,z,E,f),Nt=new Vx(Y,z,W),Rt=new Zx(ct,it,W,T),It=new qv(ct,Te,it),St=new oy(ct,Te,it),it.programs=$.programs,Y.capabilities=W,Y.extensions=Te,Y.properties=mt,Y.renderLists=ft,Y.shadowMap=Nt,Y.state=T,Y.info=it}P!==In&&(k=new uy(P,e.width,e.height,u,r,o));let ee=new iu(Y,ct);this.xr=ee,this.getContext=function(){return ct},this.getContextAttributes=function(){return ct.getContextAttributes()},this.forceContextLoss=function(){let D=Te.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=Te.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Pt},this.setPixelRatio=function(D){D!==void 0&&(Pt=D,this.setSize(ce,V,!1))},this.getSize=function(D){return D.set(ce,V)},this.setSize=function(D,st,xt=!0){if(ee.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=D,V=st,e.width=Math.floor(D*Pt),e.height=Math.floor(st*Pt),xt===!0&&(e.style.width=D+"px",e.style.height=st+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,D,st)},this.getDrawingBufferSize=function(D){return D.set(ce*Pt,V*Pt).floor()},this.setDrawingBufferSize=function(D,st,xt){ce=D,V=st,Pt=xt,e.width=Math.floor(D*xt),e.height=Math.floor(st*xt),this.setViewport(0,0,D,st)},this.setEffects=function(D){if(P===In){de("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let st=0;st<D.length;st++)if(D[st].isOutputPass===!0){he("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(yt)},this.getViewport=function(D){return D.copy(Vt)},this.setViewport=function(D,st,xt,_t){D.isVector4?Vt.set(D.x,D.y,D.z,D.w):Vt.set(D,st,xt,_t),T.viewport(yt.copy(Vt).multiplyScalar(Pt).round())},this.getScissor=function(D){return D.copy(le)},this.setScissor=function(D,st,xt,_t){D.isVector4?le.set(D.x,D.y,D.z,D.w):le.set(D,st,xt,_t),T.scissor(Ft.copy(le).multiplyScalar(Pt).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(D){T.setScissorTest(qe=D)},this.setOpaqueSort=function(D){Jt=D},this.setTransparentSort=function(D){te=D},this.getClearColor=function(D){return D.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(D=!0,st=!0,xt=!0){let _t=0;if(D){let vt=!1;if(pt!==null){let qt=pt.texture.format;vt=S.has(qt)}if(vt){let qt=pt.texture.type,Ut=M.has(qt),Yt=Mt.getClearColor(),Kt=Mt.getClearAlpha(),ne=Yt.r,Xt=Yt.g,fe=Yt.b;Ut?(F[0]=ne,F[1]=Xt,F[2]=fe,F[3]=Kt,ct.clearBufferuiv(ct.COLOR,0,F)):(H[0]=ne,H[1]=Xt,H[2]=fe,H[3]=Kt,ct.clearBufferiv(ct.COLOR,0,H))}else _t|=ct.COLOR_BUFFER_BIT}st&&(_t|=ct.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),xt&&(_t|=ct.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_t!==0&&ct.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),rt=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Ce,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),Mt.dispose(),ft.dispose(),bt.dispose(),mt.dispose(),Bt.dispose(),z.dispose(),Gt.dispose(),Rt.dispose(),$.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Pr),ee.removeEventListener("sessionend",Ir),Cn.stop()};function Ne(D){D.preventDefault(),so("WebGLRenderer: Context Lost."),nt=!0}function Ce(){so("WebGLRenderer: Context Restored."),nt=!1;let D=it.autoReset,st=Nt.enabled,xt=Nt.autoUpdate,_t=Nt.needsUpdate,vt=Nt.type;Dt(),it.autoReset=D,Nt.enabled=st,Nt.autoUpdate=xt,Nt.needsUpdate=_t,Nt.type=vt}function Mn(D){de("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function An(D){let st=D.target;st.removeEventListener("dispose",An),Ls(st)}function Ls(D){cr(D),mt.remove(D)}function cr(D){let st=mt.get(D).programs;st!==void 0&&(st.forEach(function(xt){$.releaseProgram(xt)}),D.isShaderMaterial&&$.releaseShaderCache(D))}this.renderBufferDirect=function(D,st,xt,_t,vt,qt){st===null&&(st=je);let Ut=vt.isMesh&&vt.matrixWorld.determinantAffine()<0,Yt=ci(D,st,xt,_t,vt);T.setMaterial(_t,Ut);let Kt=xt.index,ne=1;if(_t.wireframe===!0){if(Kt=I.getWireframeAttribute(xt),Kt===void 0)return;ne=2}let Xt=xt.drawRange,fe=xt.attributes.position,jt=Xt.start*ne,Pe=(Xt.start+Xt.count)*ne;qt!==null&&(jt=Math.max(jt,qt.start*ne),Pe=Math.min(Pe,(qt.start+qt.count)*ne)),Kt!==null?(jt=Math.max(jt,0),Pe=Math.min(Pe,Kt.count)):fe!=null&&(jt=Math.max(jt,0),Pe=Math.min(Pe,fe.count));let We=Pe-jt;if(We<0||We===1/0)return;Gt.setup(vt,_t,Yt,xt,Kt);let we,s=It;if(Kt!==null&&(we=Ht.get(Kt),s=St,s.setIndex(we)),vt.isMesh)_t.wireframe===!0?(T.setLineWidth(_t.wireframeLinewidth*Fe()),s.setMode(ct.LINES)):s.setMode(ct.TRIANGLES);else if(vt.isLine){let a=_t.linewidth;a===void 0&&(a=1),T.setLineWidth(a*Fe()),vt.isLineSegments?s.setMode(ct.LINES):vt.isLineLoop?s.setMode(ct.LINE_LOOP):s.setMode(ct.LINE_STRIP)}else vt.isPoints?s.setMode(ct.POINTS):vt.isSprite&&s.setMode(ct.TRIANGLES);if(vt.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))s.renderMultiDraw(vt._multiDrawStarts,vt._multiDrawCounts,vt._multiDrawCount);else{let a=vt._multiDrawStarts,l=vt._multiDrawCounts,p=vt._multiDrawCount,_=Kt?Ht.get(Kt).bytesPerElement:1,A=mt.get(_t).currentProgram.getUniforms();for(let O=0;O<p;O++)A.setValue(ct,"_gl_DrawID",O),s.render(a[O]/_,l[O])}else if(vt.isInstancedMesh)s.renderInstances(jt,We,vt.count);else if(xt.isInstancedBufferGeometry){let a=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,l=Math.min(xt.instanceCount,a);s.renderInstances(jt,We,l)}else s.render(jt,We)};function R(D,st,xt,_t){rt!==null&&D.isNodeMaterial&&rt.setObject(_t,D),ye===!0&&Ct.setState(D,xt,!1),D.transparent===!0&&D.side===yn&&D.forceSinglePass===!1?(D.side=Tn,D.needsUpdate=!0,Di(D,st,_t),D.side=rr,D.needsUpdate=!0,Di(D,st,_t),D.side=yn):Di(D,st,_t)}this.compile=function(D,st,xt=null){xt===null&&(xt=D),rt!==null&&rt.renderStart(D,st,xt),B=bt.get(xt),B.init(st),C.push(B),xt.traverseVisible(function(vt){vt.isLight&&vt.layers.test(st.layers)&&(B.pushLight(vt),vt.castShadow&&B.pushShadow(vt))}),D!==xt&&D.traverseVisible(function(vt){vt.isLight&&vt.layers.test(st.layers)&&(B.pushLight(vt),vt.castShadow&&B.pushShadow(vt))}),B.setupLights(),rt!==null&&rt.updateLights(B.state.lightsArray),Se=this.localClippingEnabled,ye=Ct.init(this.clippingPlanes,Se),ye===!0&&Ct.setGlobalState(this.clippingPlanes,st),rt!==null&&Nt.render(B.state.shadowsArray,xt,st);let _t=new Set;return D.traverse(function(vt){if(!(vt.isMesh||vt.isPoints||vt.isLine||vt.isSprite))return;let qt=vt.material;if(qt)if(Array.isArray(qt))for(let Ut=0;Ut<qt.length;Ut++){let Yt=qt[Ut];R(Yt,xt,st,vt),_t.add(Yt)}else R(qt,xt,st,vt),_t.add(qt)}),B=C.pop(),rt!==null&&rt.renderEnd(),_t},this.compileAsync=function(D,st,xt=null){let _t=this.compile(D,st,xt);return new Promise(vt=>{function qt(){if(_t.forEach(function(Ut){let Kt=mt.get(Ut).currentProgram;(Kt===void 0||Kt.isReady())&&_t.delete(Ut)}),_t.size===0){vt(D);return}setTimeout(qt,10)}Te.get("KHR_parallel_shader_compile")!==null?qt():setTimeout(qt,10)})};let xi=null;function Ae(D){xi&&xi(D)}function Pr(){Cn.stop()}function Ir(){Cn.start()}let Cn=new Bd;Cn.setAnimationLoop(Ae),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(D){xi=D,ee.setAnimationLoop(D),D===null?Cn.stop():Cn.start()},ee.addEventListener("sessionstart",Pr),ee.addEventListener("sessionend",Ir),this.render=function(D,st){if(st!==void 0&&st.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(nt===!0)return;rt!==null&&rt.renderStart(D,st);let xt=ee.enabled===!0&&ee.isPresenting===!0,_t=k!==null&&(pt===null||xt)&&k.begin(Y,pt);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(st),st=ee.getCamera()),D.isScene===!0&&D.onBeforeRender(Y,D,st,pt),B=bt.get(D,C.length),B.init(st),B.state.textureUnits=Et.getTextureUnits(),C.push(B),_e.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),ue.setFromProjectionMatrix(_e,ti,st.reversedDepth),Se=this.localClippingEnabled,ye=Ct.init(this.clippingPlanes,Se),U=ft.get(D,q.length),U.init(),q.push(U),ee.enabled===!0&&ee.isPresenting===!0){let Ut=Y.xr.getDepthSensingMesh();Ut!==null&&zn(Ut,st,-1/0,Y.sortObjects)}zn(D,st,0,Y.sortObjects),U.finish(),rt!==null&&rt.updateLights(B.state.lightsArray),Y.sortObjects===!0&&U.sort(Jt,te),Re=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Re&&Mt.addToRenderList(U,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&Ct.beginShadows();let vt=B.state.shadowsArray;if(Nt.render(vt,D,st),ye===!0&&Ct.endShadows(),(_t&&k.hasRenderPass())===!1){let Ut=U.opaque,Yt=U.transmissive;if(B.setupLights(),st.isArrayCamera){let Kt=st.cameras;if(Yt.length>0)for(let ne=0,Xt=Kt.length;ne<Xt;ne++){let fe=Kt[ne];li(Ut,Yt,D,fe)}Re&&Mt.render(D);for(let ne=0,Xt=Kt.length;ne<Xt;ne++){let fe=Kt[ne];Rr(U,D,fe,fe.viewport)}}else Yt.length>0&&li(Ut,Yt,D,st),Re&&Mt.render(D),Rr(U,D,st)}pt!==null&&X===0&&(Et.updateMultisampleRenderTarget(pt),Et.updateRenderTargetMipmap(pt)),_t&&k.end(Y),D.isScene===!0&&D.onAfterRender(Y,D,st),Gt.resetDefaultState(),ut=-1,gt=null,C.pop(),C.length>0?(B=C[C.length-1],Et.setTextureUnits(B.state.textureUnits),ye===!0&&Ct.setGlobalState(Y.clippingPlanes,B.state.camera)):B=null,q.pop(),q.length>0?U=q[q.length-1]:U=null,rt!==null&&rt.renderEnd()};function zn(D,st,xt,_t){if(D.visible===!1)return;if(D.layers.test(st.layers)){if(D.isGroup)xt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(st);else if(D.isLightProbeGrid)B.pushLightProbeGrid(D);else if(D.isLight)B.pushLight(D),D.castShadow&&B.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(ue)){_t&&He.setFromMatrixPosition(D.matrixWorld).applyMatrix4(_e);let Ut=z.update(D),Yt=D.material;Yt.visible&&U.push(D,Ut,Yt,xt,He.z,null,st)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(ue))){let Ut=z.update(D),Yt=D.material;if(_t&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),He.copy(D.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),He.copy(Ut.boundingSphere.center)),He.applyMatrix4(D.matrixWorld).applyMatrix4(_e)),Array.isArray(Yt)){let Kt=Ut.groups;for(let ne=0,Xt=Kt.length;ne<Xt;ne++){let fe=Kt[ne],jt=Yt[fe.materialIndex];jt&&jt.visible&&U.push(D,Ut,jt,xt,He.z,fe,st)}}else Yt.visible&&U.push(D,Ut,Yt,xt,He.z,null,st)}}let qt=D.children;for(let Ut=0,Yt=qt.length;Ut<Yt;Ut++)zn(qt[Ut],st,xt,_t)}function Rr(D,st,xt,_t){let{opaque:vt,transmissive:qt,transparent:Ut}=D;B.setupLightsView(xt),ye===!0&&Ct.setGlobalState(Y.clippingPlanes,xt),_t&&T.viewport(yt.copy(_t)),vt.length>0&&Mi(vt,st,xt),qt.length>0&&Mi(qt,st,xt),Ut.length>0&&Mi(Ut,st,xt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function li(D,st,xt,_t){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[_t.id]===void 0){let jt=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[_t.id]=new Pn(1,1,{generateMipmaps:!0,type:jt?ai:In,minFilter:or,samples:Math.max(4,W.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}let qt=B.state.transmissionRenderTarget[_t.id],Ut=_t.viewport||yt;qt.setSize(Ut.z*Y.transmissionResolutionScale,Ut.w*Y.transmissionResolutionScale);let Yt=Y.getRenderTarget(),Kt=Y.getActiveCubeFace(),ne=Y.getActiveMipmapLevel();Y.setRenderTarget(qt),Y.getClearColor(Wt),ie=Y.getClearAlpha(),ie<1&&Y.setClearColor(16777215,.5),Y.clear(),Re&&Mt.render(xt);let Xt=Y.toneMapping;Y.toneMapping=ri;let fe=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),B.setupLightsView(_t),ye===!0&&Ct.setGlobalState(Y.clippingPlanes,_t),Mi(D,xt,_t),Et.updateMultisampleRenderTarget(qt),Et.updateRenderTargetMipmap(qt),Te.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Pe=0,We=st.length;Pe<We;Pe++){let we=st[Pe],{object:s,geometry:a,material:l,group:p}=we;if(l.side===yn&&s.layers.test(_t.layers)){let _=l.side;l.side=Tn,l.needsUpdate=!0,Lr(s,xt,_t,a,l,p),l.side=_,l.needsUpdate=!0,jt=!0}}jt===!0&&(Et.updateMultisampleRenderTarget(qt),Et.updateRenderTargetMipmap(qt))}Y.setRenderTarget(Yt,Kt,ne),Y.setClearColor(Wt,ie),fe!==void 0&&(_t.viewport=fe),Y.toneMapping=Xt}function Mi(D,st,xt){let _t=st.isScene===!0?st.overrideMaterial:null;for(let vt=0,qt=D.length;vt<qt;vt++){let Ut=D[vt],{object:Yt,geometry:Kt,group:ne}=Ut,Xt=Ut.material;Xt.allowOverride===!0&&_t!==null&&(Xt=_t),Yt.layers.test(xt.layers)&&Lr(Yt,st,xt,Kt,Xt,ne)}}function Lr(D,st,xt,_t,vt,qt){rt!==null&&vt.isNodeMaterial&&rt.setObject(D,vt),D.onBeforeRender(Y,st,xt,_t,vt,qt),D.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),vt.onBeforeRender(Y,st,xt,_t,D,qt),vt.transparent===!0&&vt.side===yn&&vt.forceSinglePass===!1?(vt.side=Tn,vt.needsUpdate=!0,Y.renderBufferDirect(xt,st,_t,vt,D,qt),vt.side=rr,vt.needsUpdate=!0,Y.renderBufferDirect(xt,st,_t,vt,D,qt),vt.side=yn):Y.renderBufferDirect(xt,st,_t,vt,D,qt),D.onAfterRender(Y,st,xt,_t,vt,qt)}function Di(D,st,xt){st.isScene!==!0&&(st=je);let _t=mt.get(D),vt=B.state.lights,qt=B.state.shadowsArray,Ut=vt.state.version,Yt=$.getParameters(D,vt.state,qt,st,xt,B.state.lightProbeGridArray),Kt=$.getProgramCacheKey(Yt),ne=_t.programs;_t.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?st.environment:null,_t.fog=st.fog;let Xt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;_t.envMap=Bt.get(D.envMap||_t.environment,Xt),_t.envMapRotation=_t.environment!==null&&D.envMap===null?st.environmentRotation:D.envMapRotation,ne===void 0&&(D.addEventListener("dispose",An),ne=new Map,_t.programs=ne);let fe=ne.get(Kt);if(fe!==void 0){if(_t.currentProgram===fe&&_t.lightsStateVersion===Ut)return Dr(D,Yt),fe}else Yt.uniforms=$.getUniforms(D),rt!==null&&D.isNodeMaterial&&rt.build(D,xt,Yt),D.onBeforeCompile(Yt,Y),fe=$.acquireProgram(Yt,Kt),ne.set(Kt,fe),_t.uniforms=Yt.uniforms;let jt=_t.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(jt.clippingPlanes=Ct.uniform),Dr(D,Yt),_t.needsLights=Os(D),_t.lightsStateVersion=Ut,_t.needsLights&&(jt.ambientLightColor.value=vt.state.ambient,jt.lightProbe.value=vt.state.probe,jt.sunLights.value=vt.state.sun,jt.sunLightShadows.value=vt.state.sunShadow,jt.directionalLights.value=vt.state.directional,jt.directionalLightShadows.value=vt.state.directionalShadow,jt.spotLights.value=vt.state.spot,jt.spotLightShadows.value=vt.state.spotShadow,jt.rectAreaLights.value=vt.state.rectArea,jt.ltc_1.value=vt.state.rectAreaLTC1,jt.ltc_2.value=vt.state.rectAreaLTC2,jt.pointLights.value=vt.state.point,jt.pointLightShadows.value=vt.state.pointShadow,jt.hemisphereLights.value=vt.state.hemi,jt.sunShadowMatrix.value=vt.state.sunShadowMatrix,jt.sunShadowCascade.value=vt.state.sunShadowCascade,jt.directionalShadowMatrix.value=vt.state.directionalShadowMatrix,jt.spotLightMatrix.value=vt.state.spotLightMatrix,jt.spotLightMap.value=vt.state.spotLightMap,jt.pointShadowMatrix.value=vt.state.pointShadowMatrix),_t.lightProbeGrid=B.state.lightProbeGridArray.length>0,_t.currentProgram=fe,_t.uniformsList=null,fe}function Nr(D){if(D.uniformsList===null){let st=D.currentProgram.getUniforms();D.uniformsList=Ps.seqWithValue(st.seq,D.uniforms)}return D.uniformsList}function Dr(D,st){let xt=mt.get(D);xt.outputColorSpace=st.outputColorSpace,xt.batching=st.batching,xt.batchingColor=st.batchingColor,xt.instancing=st.instancing,xt.instancingColor=st.instancingColor,xt.instancingMorph=st.instancingMorph,xt.skinning=st.skinning,xt.morphTargets=st.morphTargets,xt.morphNormals=st.morphNormals,xt.morphColors=st.morphColors,xt.morphTargetsCount=st.morphTargetsCount,xt.numClippingPlanes=st.numClippingPlanes,xt.numIntersection=st.numClipIntersection,xt.vertexAlphas=st.vertexAlphas,xt.vertexTangents=st.vertexTangents,xt.toneMapping=st.toneMapping}function Ns(D,st){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;L.setFromMatrixPosition(st.matrixWorld);for(let xt=0,_t=D.length;xt<_t;xt++){let vt=D[xt];if(vt.texture!==null&&vt.boundingBox.containsPoint(L))return vt}return null}function ci(D,st,xt,_t,vt){st.isScene!==!0&&(st=je),Et.resetTextureUnits();let qt=st.fog,Ut=_t.isMeshStandardMaterial||_t.isMeshLambertMaterial||_t.isMeshPhongMaterial?st.environment:null,Yt=pt===null?Y.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ee.workingColorSpace,Kt=_t.isMeshStandardMaterial||_t.isMeshLambertMaterial&&!_t.envMap||_t.isMeshPhongMaterial&&!_t.envMap,ne=Bt.get(_t.envMap||Ut,Kt),Xt=_t.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,fe=!!xt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),jt=!!xt.morphAttributes.position,Pe=!!xt.morphAttributes.normal,We=!!xt.morphAttributes.color,we=ri;_t.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(we=Y.toneMapping);let s=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,a=s!==void 0?s.length:0,l=mt.get(_t),p=B.state.lights;if(ye===!0&&(Se===!0||D!==gt)){let Lt=D===gt&&_t.id===ut;Ct.setState(_t,D,Lt)}let _=!1;_t.version===l.__version?(l.needsLights&&l.lightsStateVersion!==p.state.version||l.outputColorSpace!==Yt||vt.isBatchedMesh&&l.batching===!1||!vt.isBatchedMesh&&l.batching===!0||vt.isBatchedMesh&&l.batchingColor===!0&&vt._colorsTexture===null||vt.isBatchedMesh&&l.batchingColor===!1&&vt._colorsTexture!==null||vt.isInstancedMesh&&l.instancing===!1||!vt.isInstancedMesh&&l.instancing===!0||vt.isSkinnedMesh&&l.skinning===!1||!vt.isSkinnedMesh&&l.skinning===!0||vt.isInstancedMesh&&l.instancingColor===!0&&vt.instanceColor===null||vt.isInstancedMesh&&l.instancingColor===!1&&vt.instanceColor!==null||vt.isInstancedMesh&&l.instancingMorph===!0&&vt.morphTexture===null||vt.isInstancedMesh&&l.instancingMorph===!1&&vt.morphTexture!==null||l.envMap!==ne||_t.fog===!0&&l.fog!==qt||l.numClippingPlanes!==void 0&&(l.numClippingPlanes!==Ct.numPlanes||l.numIntersection!==Ct.numIntersection)||l.vertexAlphas!==Xt||l.vertexTangents!==fe||l.morphTargets!==jt||l.morphNormals!==Pe||l.morphColors!==We||l.toneMapping!==we||l.morphTargetsCount!==a||!!l.lightProbeGrid!=B.state.lightProbeGridArray.length>0)&&(_=!0):(_=!0,l.__version=_t.version);let A=l.currentProgram;_===!0&&(A=Di(_t,st,vt),rt&&_t.isNodeMaterial&&rt.onUpdateProgram(_t,A,l));let O=!1,Z=!1,K=!1,ht=A.getUniforms(),At=l.uniforms;if(T.useProgram(A.program)&&(O=!0,Z=!0,K=!0),_t.id!==ut&&(ut=_t.id,Z=!0),l.needsLights){let Lt=Ns(B.state.lightProbeGridArray,vt);l.lightProbeGrid!==Lt&&(l.lightProbeGrid=Lt,Z=!0)}if(O||gt!==D){T.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),ht.setValue(ct,"projectionMatrix",D.projectionMatrix),ht.setValue(ct,"viewMatrix",D.matrixWorldInverse);let re=ht.map.cameraPosition;re!==void 0&&re.setValue(ct,Ie.setFromMatrixPosition(D.matrixWorld)),W.logarithmicDepthBuffer&&ht.setValue(ct,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&ht.setValue(ct,"isOrthographic",D.isOrthographicCamera===!0),gt!==D&&(gt=D,Z=!0,K=!0)}if(l.needsLights&&(p.state.sunShadowMap.length>0&&ht.setValue(ct,"sunShadowMap",p.state.sunShadowMap,Et),p.state.directionalShadowMap.length>0&&ht.setValue(ct,"directionalShadowMap",p.state.directionalShadowMap,Et),p.state.spotShadowMap.length>0&&ht.setValue(ct,"spotShadowMap",p.state.spotShadowMap,Et),p.state.pointShadowMap.length>0&&ht.setValue(ct,"pointShadowMap",p.state.pointShadowMap,Et)),vt.isSkinnedMesh){ht.setOptional(ct,vt,"bindMatrix"),ht.setOptional(ct,vt,"bindMatrixInverse");let Lt=vt.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ht.setValue(ct,"boneTexture",Lt.boneTexture,Et))}vt.isBatchedMesh&&(ht.setOptional(ct,vt,"batchingTexture"),ht.setValue(ct,"batchingTexture",vt._matricesTexture,Et),ht.setOptional(ct,vt,"batchingIdTexture"),ht.setValue(ct,"batchingIdTexture",vt._indirectTexture,Et),ht.setOptional(ct,vt,"batchingColorTexture"),vt._colorsTexture!==null&&ht.setValue(ct,"batchingColorTexture",vt._colorsTexture,Et));let Tt=xt.morphAttributes;if((Tt.position!==void 0||Tt.normal!==void 0||Tt.color!==void 0)&&j.update(vt,xt,A),(Z||l.receiveShadow!==vt.receiveShadow)&&(l.receiveShadow=vt.receiveShadow,ht.setValue(ct,"receiveShadow",vt.receiveShadow)),(_t.isMeshStandardMaterial||_t.isMeshLambertMaterial||_t.isMeshPhongMaterial)&&_t.envMap===null&&st.environment!==null&&(At.envMapIntensity.value=st.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=jx()),Z){if(ht.setValue(ct,"toneMappingExposure",Y.toneMappingExposure),l.needsLights&&Ds(At,K),qt&&_t.fog===!0&&at.refreshFogUniforms(At,qt),at.refreshMaterialUniforms(At,_t,Pt,V,B.state.transmissionRenderTarget[D.id]),l.needsLights&&l.lightProbeGrid){let Lt=l.lightProbeGrid;At.probesSH.value=Lt.texture,At.probesMin.value.copy(Lt.boundingBox.min),At.probesMax.value.copy(Lt.boundingBox.max),At.probesResolution.value.copy(Lt.resolution)}Ps.upload(ct,Nr(l),At,Et)}if(_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(Ps.upload(ct,Nr(l),At,Et),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&ht.setValue(ct,"center",vt.center),ht.setValue(ct,"modelViewMatrix",vt.modelViewMatrix),ht.setValue(ct,"normalMatrix",vt.normalMatrix),ht.setValue(ct,"modelMatrix",vt.matrixWorld),_t.uniformsGroups!==void 0){let Lt=_t.uniformsGroups;for(let re=0,pe=Lt.length;re<pe;re++){let xe=Lt[re];Rt.update(xe,A),Rt.bind(xe,A)}}return A}function Ds(D,st){D.ambientLightColor.needsUpdate=st,D.lightProbe.needsUpdate=st,D.sunLights.needsUpdate=st,D.sunLightShadows.needsUpdate=st,D.directionalLights.needsUpdate=st,D.directionalLightShadows.needsUpdate=st,D.pointLights.needsUpdate=st,D.pointLightShadows.needsUpdate=st,D.spotLights.needsUpdate=st,D.spotLightShadows.needsUpdate=st,D.rectAreaLights.needsUpdate=st,D.hemisphereLights.needsUpdate=st}function Os(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return dt},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return pt},this.setRenderTargetTextures=function(D,st,xt){let _t=mt.get(D);_t.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,_t.__autoAllocateDepthBuffer===!1&&(_t.__useRenderToTexture=!1),mt.get(D.texture).__webglTexture=st,mt.get(D.depthTexture).__webglTexture=_t.__autoAllocateDepthBuffer?void 0:xt,_t.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,st){let xt=mt.get(D);xt.__webglFramebuffer=st,xt.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(D,st=0,xt=0){pt=D,dt=st,X=xt;let _t=null,vt=!1,qt=!1;if(D){let Yt=mt.get(D);if(Yt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(ct.FRAMEBUFFER,Yt.__webglFramebuffer),yt.copy(D.viewport),Ft.copy(D.scissor),zt=D.scissorTest,T.viewport(yt),T.scissor(Ft),T.setScissorTest(zt),ut=-1;return}else if(Yt.__webglFramebuffer===void 0)Et.setupRenderTarget(D);else if(Yt.__hasExternalTextures)Et.rebindTextures(D,mt.get(D.texture).__webglTexture,mt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let Xt=D.depthTexture;if(Yt.__boundDepthTexture!==Xt){if(Xt!==null&&mt.has(Xt)&&(D.width!==Xt.image.width||D.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Et.setupDepthRenderbuffer(D)}}let Kt=D.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(qt=!0);let ne=mt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ne[st])?_t=ne[st][xt]:_t=ne[st],vt=!0):D.samples>0&&Et.useMultisampledRTT(D)===!1?_t=mt.get(D).__webglMultisampledFramebuffer:Array.isArray(ne)?_t=ne[xt]:_t=ne,yt.copy(D.viewport),Ft.copy(D.scissor),zt=D.scissorTest}else yt.copy(Vt).multiplyScalar(Pt).floor(),Ft.copy(le).multiplyScalar(Pt).floor(),zt=qe;if(xt!==0&&(_t=et),T.bindFramebuffer(ct.FRAMEBUFFER,_t)&&T.drawBuffers(D,_t),T.viewport(yt),T.scissor(Ft),T.setScissorTest(zt),vt){let Yt=mt.get(D.texture);ct.framebufferTexture2D(ct.FRAMEBUFFER,ct.COLOR_ATTACHMENT0,ct.TEXTURE_CUBE_MAP_POSITIVE_X+st,Yt.__webglTexture,xt)}else if(qt){let Yt=st;for(let Kt=0;Kt<D.textures.length;Kt++){let ne=mt.get(D.textures[Kt]);ct.framebufferTextureLayer(ct.FRAMEBUFFER,ct.COLOR_ATTACHMENT0+Kt,ne.__webglTexture,xt,Yt)}}else if(D!==null&&xt!==0){let Yt=mt.get(D.texture);ct.framebufferTexture2D(ct.FRAMEBUFFER,ct.COLOR_ATTACHMENT0,ct.TEXTURE_2D,Yt.__webglTexture,xt)}ut=-1};function Or(D){let st=mt.get(D);return(st.__readFormat!==D.format||st.__readType!==D.type)&&(st.__readFormat=D.format,st.__readType=D.type,st.__formatReadable=W.textureFormatReadable(D.format),st.__typeReadable=W.textureTypeReadable(D.type)),st}this.readRenderTargetPixels=function(D,st,xt,_t,vt,qt,Ut,Yt=0){if(!(D&&D.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=mt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ut!==void 0&&(Kt=Kt[Ut]),Kt){T.bindFramebuffer(ct.FRAMEBUFFER,Kt);try{let ne=D.textures[Yt],Xt=ne.format,fe=ne.type;D.textures.length>1&&ct.readBuffer(ct.COLOR_ATTACHMENT0+Yt);let jt=Or(ne);if(jt.__formatReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(jt.__typeReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=D.width-_t&&xt>=0&&xt<=D.height-vt&&ct.readPixels(st,xt,_t,vt,kt.convert(Xt),kt.convert(fe),qt)}finally{let ne=pt!==null?mt.get(pt).__webglFramebuffer:null;T.bindFramebuffer(ct.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(D,st,xt,_t,vt,qt,Ut,Yt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=mt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ut!==void 0&&(Kt=Kt[Ut]),Kt)if(st>=0&&st<=D.width-_t&&xt>=0&&xt<=D.height-vt){T.bindFramebuffer(ct.FRAMEBUFFER,Kt);let ne=D.textures[Yt],Xt=ne.format,fe=ne.type;D.textures.length>1&&ct.readBuffer(ct.COLOR_ATTACHMENT0+Yt);let jt=Or(ne);if(jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=ct.createBuffer();ct.bindBuffer(ct.PIXEL_PACK_BUFFER,Pe),ct.bufferData(ct.PIXEL_PACK_BUFFER,qt.byteLength,ct.STREAM_READ),ct.readPixels(st,xt,_t,vt,kt.convert(Xt),kt.convert(fe),0),ct.bindBuffer(ct.PIXEL_PACK_BUFFER,null);let We=pt!==null?mt.get(pt).__webglFramebuffer:null;T.bindFramebuffer(ct.FRAMEBUFFER,We);let we=ct.fenceSync(ct.SYNC_GPU_COMMANDS_COMPLETE,0);return ct.flush(),await hd(ct,we,4),ct.bindBuffer(ct.PIXEL_PACK_BUFFER,Pe),ct.getBufferSubData(ct.PIXEL_PACK_BUFFER,0,qt),ct.bindBuffer(ct.PIXEL_PACK_BUFFER,null),ct.deleteBuffer(Pe),ct.deleteSync(we),qt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,st=null,xt=0){let _t=Math.pow(2,-xt),vt=Math.floor(D.image.width*_t),qt=Math.floor(D.image.height*_t),Ut=st!==null?st.x:0,Yt=st!==null?st.y:0;Et.setTexture2D(D,0),ct.copyTexSubImage2D(ct.TEXTURE_2D,xt,0,0,Ut,Yt,vt,qt),T.unbindTexture()},this.copyTextureToTexture=function(D,st,xt=null,_t=null,vt=0,qt=0){let Ut,Yt,Kt,ne,Xt,fe,jt,Pe,We,we=D.isCompressedTexture?D.mipmaps[qt]:D.image;if(xt!==null)Ut=xt.max.x-xt.min.x,Yt=xt.max.y-xt.min.y,Kt=xt.isBox3?xt.max.z-xt.min.z:1,ne=xt.min.x,Xt=xt.min.y,fe=xt.isBox3?xt.min.z:0;else{let At=Math.pow(2,-vt);Ut=Math.floor(we.width*At),Yt=Math.floor(we.height*At),D.isDataArrayTexture?Kt=we.depth:D.isData3DTexture?Kt=Math.floor(we.depth*At):Kt=1,ne=0,Xt=0,fe=0}_t!==null?(jt=_t.x,Pe=_t.y,We=_t.z):(jt=0,Pe=0,We=0);let s=kt.convert(st.format),a=kt.convert(st.type),l;st.isData3DTexture?(Et.setTexture3D(st,0),l=ct.TEXTURE_3D):st.isDataArrayTexture||st.isCompressedArrayTexture?(Et.setTexture2DArray(st,0),l=ct.TEXTURE_2D_ARRAY):(Et.setTexture2D(st,0),l=ct.TEXTURE_2D),T.activeTexture(ct.TEXTURE0),T.pixelStorei(ct.UNPACK_FLIP_Y_WEBGL,st.flipY),T.pixelStorei(ct.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),T.pixelStorei(ct.UNPACK_ALIGNMENT,st.unpackAlignment);let p=T.getParameter(ct.UNPACK_ROW_LENGTH),_=T.getParameter(ct.UNPACK_IMAGE_HEIGHT),A=T.getParameter(ct.UNPACK_SKIP_PIXELS),O=T.getParameter(ct.UNPACK_SKIP_ROWS),Z=T.getParameter(ct.UNPACK_SKIP_IMAGES);T.pixelStorei(ct.UNPACK_ROW_LENGTH,we.width),T.pixelStorei(ct.UNPACK_IMAGE_HEIGHT,we.height),T.pixelStorei(ct.UNPACK_SKIP_PIXELS,ne),T.pixelStorei(ct.UNPACK_SKIP_ROWS,Xt),T.pixelStorei(ct.UNPACK_SKIP_IMAGES,fe);let K=D.isDataArrayTexture||D.isData3DTexture,ht=st.isDataArrayTexture||st.isData3DTexture;if(D.isDepthTexture){let At=mt.get(D),Tt=mt.get(st),Lt=mt.get(At.__renderTarget),re=mt.get(Tt.__renderTarget);T.bindFramebuffer(ct.READ_FRAMEBUFFER,Lt.__webglFramebuffer),T.bindFramebuffer(ct.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let pe=0;pe<Kt;pe++)K&&(ct.framebufferTextureLayer(ct.READ_FRAMEBUFFER,ct.COLOR_ATTACHMENT0,mt.get(D).__webglTexture,vt,fe+pe),ct.framebufferTextureLayer(ct.DRAW_FRAMEBUFFER,ct.COLOR_ATTACHMENT0,mt.get(st).__webglTexture,qt,We+pe)),ct.blitFramebuffer(ne,Xt,Ut,Yt,jt,Pe,Ut,Yt,ct.DEPTH_BUFFER_BIT,ct.NEAREST);T.bindFramebuffer(ct.READ_FRAMEBUFFER,null),T.bindFramebuffer(ct.DRAW_FRAMEBUFFER,null)}else if(vt!==0||D.isRenderTargetTexture||mt.has(D)){let At=mt.get(D),Tt=mt.get(st);T.bindFramebuffer(ct.READ_FRAMEBUFFER,Q),T.bindFramebuffer(ct.DRAW_FRAMEBUFFER,tt);for(let Lt=0;Lt<Kt;Lt++)K?ct.framebufferTextureLayer(ct.READ_FRAMEBUFFER,ct.COLOR_ATTACHMENT0,At.__webglTexture,vt,fe+Lt):ct.framebufferTexture2D(ct.READ_FRAMEBUFFER,ct.COLOR_ATTACHMENT0,ct.TEXTURE_2D,At.__webglTexture,vt),ht?ct.framebufferTextureLayer(ct.DRAW_FRAMEBUFFER,ct.COLOR_ATTACHMENT0,Tt.__webglTexture,qt,We+Lt):ct.framebufferTexture2D(ct.DRAW_FRAMEBUFFER,ct.COLOR_ATTACHMENT0,ct.TEXTURE_2D,Tt.__webglTexture,qt),vt!==0?ct.blitFramebuffer(ne,Xt,Ut,Yt,jt,Pe,Ut,Yt,ct.COLOR_BUFFER_BIT,ct.NEAREST):ht?ct.copyTexSubImage3D(l,qt,jt,Pe,We+Lt,ne,Xt,Ut,Yt):ct.copyTexSubImage2D(l,qt,jt,Pe,ne,Xt,Ut,Yt);T.bindFramebuffer(ct.READ_FRAMEBUFFER,null),T.bindFramebuffer(ct.DRAW_FRAMEBUFFER,null)}else ht?D.isDataTexture||D.isData3DTexture?ct.texSubImage3D(l,qt,jt,Pe,We,Ut,Yt,Kt,s,a,we.data):st.isCompressedArrayTexture?ct.compressedTexSubImage3D(l,qt,jt,Pe,We,Ut,Yt,Kt,s,we.data):ct.texSubImage3D(l,qt,jt,Pe,We,Ut,Yt,Kt,s,a,we):D.isDataTexture?ct.texSubImage2D(ct.TEXTURE_2D,qt,jt,Pe,Ut,Yt,s,a,we.data):D.isCompressedTexture?ct.compressedTexSubImage2D(ct.TEXTURE_2D,qt,jt,Pe,we.width,we.height,s,we.data):ct.texSubImage2D(ct.TEXTURE_2D,qt,jt,Pe,Ut,Yt,s,a,we);T.pixelStorei(ct.UNPACK_ROW_LENGTH,p),T.pixelStorei(ct.UNPACK_IMAGE_HEIGHT,_),T.pixelStorei(ct.UNPACK_SKIP_PIXELS,A),T.pixelStorei(ct.UNPACK_SKIP_ROWS,O),T.pixelStorei(ct.UNPACK_SKIP_IMAGES,Z),qt===0&&st.generateMipmaps&&ct.generateMipmap(l),T.unbindTexture()},this.initRenderTarget=function(D){mt.get(D).__webglFramebuffer===void 0&&Et.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Et.setTextureCube(D,0):D.isData3DTexture?Et.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Et.setTexture2DArray(D,0):Et.setTexture2D(D,0),T.unbindTexture()},this.resetState=function(){dt=0,X=0,pt=null,T.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}}});function tM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function eM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function nM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qd),this.state=Ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function iM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case nr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ve.DOLLY;break;case nr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}break;case nr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(su)}function rM(n){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function sM(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(n.preventDefault(),this.dispatchEvent(su),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(qd))}function oM(n){this.enabled!==!1&&this._handleKeyDown(n)}function aM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ve.TOUCH_ROTATE;break;case ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ve.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(su)}function lM(n){switch(this._trackPointer(n),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ve.NONE}}function cM(n){this.enabled!==!1&&n.preventDefault()}function hM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Wd,su,qd,ic,Yd,Qx,an,Rn,Ve,ru,rc,$d=Sn(()=>{nc();Wd={type:"change"},su={type:"start"},qd={type:"end"},ic=new Ji,Yd=new Dn,Qx=Math.cos(70*Uh.DEG2RAD),an=new lt,Rn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ru=1e-6,rc=class extends Eo{constructor(t,e=null){super(t,e),this.state=Ve.NONE,this.target=new lt,this.cursor=new lt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new lt,this._lastQuaternion=new On,this._lastTargetPosition=new lt,this._quat=new On().setFromUnitVectors(t.up,new lt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ss,this._sphericalDelta=new Ss,this._scale=1,this._panOffset=new lt,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new lt,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eM.bind(this),this._onPointerDown=tM.bind(this),this._onPointerUp=nM.bind(this),this._onContextMenu=cM.bind(this),this._onMouseWheel=sM.bind(this),this._onKeyDown=oM.bind(this),this._onTouchStart=aM.bind(this),this._onTouchMove=lM.bind(this),this._onMouseDown=iM.bind(this),this._onMouseMove=rM.bind(this),this._interceptControlDown=hM.bind(this),this._interceptControlUp=uM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ve.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wd),this.update(),this.state=Ve.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;an.copy(e).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),r<-Math.PI?r+=Rn:r>Math.PI&&(r-=Rn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),e.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){let u=an.length();c=this._clampDistance(u*this._scale);let f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){let u=new lt(this._mouse.x,this._mouse.y,0);u.unproject(this.object);let f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;let d=new lt(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),c=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(ic.origin.copy(this.object.position),ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ic.direction))<Qx?this.object.lookAt(this.target):(Yd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ic.intersectPlane(Yd,this.target))))}else if(this.object.isOrthographicCamera){let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>ru||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ru||this._lastTargetPosition.distanceToSquared(this.target)>ru?(this.dispatchEvent(Wd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Rn/60*this.autoRotateSpeed*t:Rn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){an.setFromMatrixColumn(e,0),an.multiplyScalar(-t),this._panOffset.add(an)}_panUp(t,e){this.screenSpacePanning===!0?an.setFromMatrixColumn(e,1):(an.setFromMatrixColumn(e,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(t),this._panOffset.add(an)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;an.copy(r).sub(this.target);let o=an.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,o=e-i.top,c=i.width,u=i.height;this._mouse.x=r/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let c=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new oe,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function Zd(n,t,e,i){n.onBeforeCompile=r=>{r.uniforms.uCut={value:t-.05},r.uniforms.uBase={value:i||new ge(1,1,1)},r.uniforms.uBottom={value:t},r.vertexShader=`varying float vZ;
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
diffuseColor.rgb = mix(diffuseColor.rgb, uBase, onWall);`).replace("#include <normal_fragment_begin>",Me.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")+`
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function Jd(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let r=i.getContext("2d");r.font="600 84px Inter, system-ui, sans-serif",r.fillStyle="#"+new ge(t).getHexString(),r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,64);let o=new po(i);o.colorSpace=wn;let c=new uo(new gs({map:o,depthTest:!1,transparent:!0}));return c.scale.set(e*2,e,1),c.renderOrder=6,c}var Yn,Rs,fM,sc,jd=Sn(()=>{nc();$d();Yn={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa"},Rs={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};fM=(n,t)=>n.some(e=>e.key===t);sc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new Ql({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new ao,this.camera=new vn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new rc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new Mo(16777215,4478310,1.6));let t=new Ms(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new Ms(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new ei,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=r=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&r-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=r,this.onFrame&&this.onFrame(r),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,r=new lt((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),c=new lt(-.45,-.8,.75).normalize(),u=[];for(let y of[t[0],e[0]])for(let v of[t[1],e[1]])for(let b of[t[2],e[2]])u.push(new lt(y,v,b));let f=r.clone(),d=o*2,g=()=>{this.camera.position.copy(f).addScaledVector(c,d),this.camera.near=d/100,this.camera.far=d*100,this.camera.lookAt(f),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let y=0;y<8;y++){g();let v=1/0,b=-1/0,E=1/0,P=-1/0;for(let U of u){let B=U.clone().project(this.camera);v=Math.min(v,B.x),b=Math.max(b,B.x),E=Math.min(E,B.y),P=Math.max(P,B.y)}let S=Math.max((b-v)/2,(P-E)/2);if(!(S>0))break;let M=d*Math.tan(this.camera.fov*Math.PI/360),F=M*this.camera.aspect,H=new lt().setFromMatrixColumn(this.camera.matrixWorld,0),L=new lt().setFromMatrixColumn(this.camera.matrixWorld,1);f.addScaledVector(H,(v+b)/2*F).addScaledVector(L,(E+P)/2*M),d*=S/(1-i)}g(),this.controls.target.copy(f),this.controls.update()}showPart(t,e=[]){this.clear();let i=new Ze;i.setAttribute("position",new Ge(t.positions,3)),i.setIndex(new Ge(t.indices,1)),i.computeVertexNormals();let r=new Oe(i,new Bn({color:9348283,metalness:.15,roughness:.55,side:yn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(r),this.pickMesh=r;let o=new Sr(new ys(i,25),new ii({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let u of e)this.addLoops(u.loops,u.z,u.color,u.dashed,u.opacity);i.computeBoundingBox();let c=i.boundingBox;this.keepCamera||this.frame(c.min.toArray(),c.max.toArray())}addLoops(t,e,i,r,o=.95){for(let c of t){let u=c.map(([y,v])=>new lt(y,v,e)),f=new Ze().setFromPoints([...u,u[0]]),d=r?new vo({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new ii({color:i,transparent:!0,opacity:o,depthTest:!1}),g=new Mr(f,d);r&&g.computeLineDistances(),g.renderOrder=2,this.content.add(g)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let r=t.getBoundingClientRect(),o=new bo;if(o.setFromCamera(new oe((i.clientX-r.left)/r.width*2-1,-((i.clientY-r.top)/r.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let f=o.intersectObjects(this.markers)[0];if(f?.object.userData.axis){this.onAxis?.(f.object.userData.axis);return}if(f){this.onMarker(f.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let c=o.intersectObject(this.pickMesh)[0];if(!c||!c.face)return;let u=c.face.normal.clone();u.dot(o.ray.direction)>0&&u.negate(),this.onPick([u.x,u.y,u.z])})}showZero({stock:t,part:e,points:i,selected:r,zFace:o,color:c,accent:u="#4c6ef5"}){this.clear();let f=t.maxX-t.minX,d=t.maxY-t.minY,g=t.top-t.bottom,y=Math.max(f,d,g),v=new Ki(f,d,g);v.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let b=new Oe(v,new Bn({color:c,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(b.renderOrder=2,this.content.add(b),this.content.add(new Sr(new ys(v),new ii({color:new ge(c).multiplyScalar(.6)}))),e){let M=new Ze;M.setAttribute("position",new Ge(e.positions,3)),M.setIndex(new Ge(e.indices,1)),M.computeVertexNormals(),this.partMesh=new Oe(M,new Bn({color:9348283,metalness:.15,roughness:.55})),this.content.add(this.partMesh)}else this.partMesh=null;let E=o==="bed"?t.bottom:t.top,P=y*.014;this.markers=[];for(let M of i){let F=M.key===r,H=new Oe(new br(F?P*1.3:P,24,16),new Fn({color:F?u:16777215}));if(H.position.set(M.x,M.y,E),H.userData.key=M.key,H.renderOrder=4,H.material.depthTest=!1,!F){let U=new Oe(new br(P*1.25,24,16),new Fn({color:6187893,depthTest:!1}));U.renderOrder=3,H.add(U)}let L=new Oe(new br(P*3.5,12,8),new Fn({visible:!1}));if(L.userData.key=M.key,H.add(L),this.markers.push(L),this.content.add(H),F){let U=new Oe(new _o(P*1.6,P*2,40),new Fn({color:u,transparent:!0,depthTest:!1,side:yn}));U.position.copy(H.position),U.renderOrder=4,this.content.add(U),this.pulse=U;let B=y*.24;for(let[q,C,k]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let Y=new wo(new lt(...q),H.position,B,C,B*.15,B*.065);Y.line.visible=!1;let nt=new Oe(new Li(y*.0028,y*.0028,B*.86,12),new Fn({color:C,depthTest:!1}));nt.position.y=B*.43,nt.renderOrder=5,Y.add(nt),Y.cone.material.depthTest=!1,Y.renderOrder=5,Y.cone.renderOrder=5,this.content.add(Y);let rt=Jd(k,C,y*.05);rt.position.copy(H.position).add(new lt(...q).multiplyScalar(B*1.18)),this.content.add(rt);let et=new Oe(new Li(B*.1,B*.1,B*1.3,10),new Fn({visible:!1}));et.quaternion.setFromUnitVectors(new lt(0,1,0),new lt(...q)),et.position.copy(H.position).add(new lt(...q).multiplyScalar(B*.65)),et.userData.axis=k.toLowerCase(),this.content.add(et),this.markers.unshift(et)}}}let S=Jd("Front",9675444,y*.04);S.position.set((t.minX+t.maxX)/2,t.minY-y*.08,t.bottom),this.content.add(S),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),fM(i,r)||(this.pulse=null),this.onFrame=M=>{if(!this.pulse)return;let F=M%1600/1600;this.pulse.scale.setScalar(1+F*1.6),this.pulse.material.opacity=.8*(1-F),this.pulse.lookAt(this.camera.position)}}spin(t,e=700){let i=this.partMesh;if(!i)return Promise.resolve();i.geometry.computeBoundingBox();let r=i.geometry.boundingBox.getCenter(new lt),o=t==="x"?new lt(1,0,0):new lt(0,0,1);i.matrixAutoUpdate=!1;let c=performance.now();return new Promise(u=>{let f=d=>{let g=Math.min(1,(d-c)/e),y=g<.5?2*g*g:1-(-2*g+2)**2/2;i.matrix.makeTranslation(r.x,r.y,r.z).multiply(new ze().makeRotationAxis(o,Math.PI*y)).multiply(new ze().makeTranslation(-r.x,-r.y,-r.z)),i.matrixWorldNeedsUpdate=!0,g<1&&i.parent?requestAnimationFrame(f):u()};requestAnimationFrame(f)})}showStock(t,e,i){this.clear(),this.keepCamera=!1;let r=t.nx,o=t.ny,c=r*o,u=new Float32Array(c*3),f=new Float32Array(c*3),d=new ge(e);for(let F=0;F<o;F++)for(let H=0;H<r;H++){let L=F*r+H;u[L*3]=t.x0+H*t.cell,u[L*3+1]=t.y0+F*t.cell,u[L*3+2]=t.h[L],f[L*3]=d.r,f[L*3+1]=d.g,f[L*3+2]=d.b}let g=new Uint32Array((r-1)*(o-1)*6),y=0;for(let F=0;F<o-1;F++)for(let H=0;H<r-1;H++){let L=F*r+H,U=L+1,B=L+r,q=B+1;g[y++]=L,g[y++]=U,g[y++]=q,g[y++]=L,g[y++]=q,g[y++]=B}let v=new Ze;v.setAttribute("position",new Ge(u,3).setUsage(Tr)),v.setAttribute("color",new Ge(f,3).setUsage(Tr));let b=new Float32Array(c*3);for(let F=0;F<c;F++)b[F*3+2]=1;v.setAttribute("normal",new Ge(b,3).setUsage(Tr));let E=new Float32Array(c*4);for(let F=0;F<c;F++)E[F*4+2]=t.h[F],E[F*4+3]=t.h[F];v.setAttribute("wall",new Ge(E,4).setUsage(Tr)),v.setIndex(new Ge(g,1));let P=new Bn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Rs.aluminum?.5:.05,side:yn});Zd(P,t.bottom,!1,d);let S=new Oe(v,P);this.content.add(S),this.stock={hm:t,geo:v,base:d,sides:this.makeSides(t,d)};let M=new Bn({color:d.clone().multiplyScalar(.7),roughness:.9,side:yn});if(Zd(M,t.bottom,!0),this.content.add(new Oe(v,M)),i){let F=new Ze;F.setAttribute("position",new Ge(i.positions,3)),F.setIndex(new Ge(i.indices,1)),F.computeVertexNormals(),this.partGhost=new Oe(F,new Bn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new ei,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(r-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let y=0;y<t.nx;y++)i.push(y);for(let y=1;y<t.ny;y++)i.push(y*t.nx+t.nx-1);for(let y=t.nx-2;y>=0;y--)i.push((t.ny-1)*t.nx+y);for(let y=t.ny-2;y>=0;y--)i.push(y*t.nx);let r=new Float32Array(i.length*6),o=new Float32Array(i.length*6),c=[],u=[[0,-1],[1,0],[0,1],[-1,0]],f=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let y=0;y<i.length;y++){let v=i[y],b=t.x0+v%t.nx*t.cell,E=t.y0+Math.floor(v/t.nx)*t.cell;r.set([b,E,t.h[v],b,E,t.bottom],y*6);let[P,S]=u[y<f[0]?0:y<f[1]?1:y<f[2]?2:3];if(o.set([P,S,0,P,S,0],y*6),y<i.length-1){let M=y*2;c.push(M,M+1,M+3,M,M+3,M+2)}}let d=new Ze;d.setAttribute("position",new Ge(r,3).setUsage(Tr)),d.setAttribute("normal",new Ge(o,3)),d.setIndex(c);let g=new Oe(d,new Bn({color:e.clone().multiplyScalar(.85),roughness:.85,side:yn}));return this.content.add(g),{g:d,edge:i}}refreshStock(t,e,i){let r=this.stock;if(!r||e<t)return;let{hm:o,geo:c,base:u}=r,f=o.nx,d=o.ny,g=o.h,y=c.attributes.position,v=c.attributes.color,b=c.attributes.normal,E=c.attributes.wall,P=new ge,S=Math.max(0,t),M=Math.min(d-1,e),F=o.cell*1.5,H=(C,k,Y)=>{let nt=g[k*f+C],rt=0;for(let et=-1;et<=1;et++)for(let Q=-1;Q<=1;Q++){let tt=C+Q,dt=k+et;(Q||et)&&tt>=0&&dt>=0&&tt<f&&dt<d&&(rt=Math.max(rt,Y*(g[dt*f+tt]-nt)))}return rt};for(let C=S;C<=M;C++)for(let k=0;k<f;k++){let Y=C*f+k;y.array[Y*3]=o.x0+k*o.cell+(o.sx?o.sx[Y]:0),y.array[Y*3+1]=o.y0+C*o.cell+(o.sy?o.sy[Y]:0),y.array[Y*3+2]=g[Y];let nt=o.op[Y];nt?(P.copy(u).lerp(i[nt-1],.28),P.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(g[Y]-o.bottom)/Math.max(1,o.top-o.bottom))))):P.copy(u),v.array[Y*3]=P.r,v.array[Y*3+1]=P.g,v.array[Y*3+2]=P.b}let L=y.array,U=Math.max(0,S-1),B=Math.min(d-1,M+1);for(let C=U;C<=B;C++)for(let k=0;k<f;k++){let Y=C*f+k,nt=E.array,rt=H(k,C,1),et=H(k,C,-1);if(nt[Y*4]=0,nt[Y*4+1]=0,nt[Y*4+2]=g[Y],nt[Y*4+3]=g[Y],o.wx&&(o.wx[Y]||o.wy[Y])&&(rt>F||et>F)){nt[Y*4]=o.wx[Y],nt[Y*4+1]=o.wy[Y],nt[Y*4+2]=g[Y]-et,nt[Y*4+3]=g[Y]+rt,b.array[Y*3]=0,b.array[Y*3+1]=0,b.array[Y*3+2]=1;continue}let Q=(C*f+Math.max(0,k-1))*3,tt=(C*f+Math.min(f-1,k+1))*3,dt=(Math.max(0,C-1)*f+k)*3,X=(Math.min(d-1,C+1)*f+k)*3,pt=L[tt]-L[Q],ut=L[tt+1]-L[Q+1],gt=L[tt+2]-L[Q+2],yt=L[X]-L[dt],Ft=L[X+1]-L[dt+1],zt=L[X+2]-L[dt+2],Wt=ut*zt-gt*Ft,ie=gt*yt-pt*zt,ce=pt*Ft-ut*yt,V=Math.hypot(Wt,ie,ce)||1;ce<0&&(Wt=-Wt,ie=-ie,ce=-ce),b.array[Y*3]=Wt/V,b.array[Y*3+1]=ie/V,b.array[Y*3+2]=ce/V}y.addUpdateRange(S*f*3,(M-S+1)*f*3),v.addUpdateRange(S*f*3,(M-S+1)*f*3),b.addUpdateRange(U*f*3,(B-U+1)*f*3),E.addUpdateRange(U*f*4,(B-U+1)*f*4),y.needsUpdate=!0,v.needsUpdate=!0,b.needsUpdate=!0,E.needsUpdate=!0;let q=r.sides.g.attributes.position;r.sides.edge.forEach((C,k)=>{q.array[k*6+2]=g[C]}),q.needsUpdate=!0}setTool(t,e){for(let y of[...this.tool.children])this.tool.remove(y),y.geometry.dispose(),y.material.dispose();let i=t.diameter/2,r=t.kind==="surfacing"||i>6.35,o=r?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),c=new Bn({color:14015457,metalness:.85,roughness:.3}),u;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let y=i/Math.tan((t.kind==="drill"?118:60)*Math.PI/360);u=new Oe(new vs(i,y,48),c),u.rotation.x=-Math.PI/2,u.position.z=y/2}else u=new Oe(new Li(i,i,o,64),c),u.rotation.x=Math.PI/2,u.position.z=o/2;let f=r?3.175:Math.max(i,Math.min(3.175,i*1.5)),d=20,g=new Oe(new Li(f,f,d,32),new Bn({color:11187132,metalness:.8,roughness:.35}));g.rotation.x=Math.PI/2,g.position.z=o+d/2,this.tool.add(u,g)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new ei;for(let e of t){let i=e.track;if(!i)continue;let r=[],o=[];for(let u=4;u<i.length;u+=4)(i[u+3]>0?r:o).push(i[u-4],i[u-3],i[u-2]+.02,i[u],i[u+1],i[u+2]+.02);let c=(u,f,d)=>{if(!u.length)return;let g=new Ze;g.setAttribute("position",new Xe(u,3));let y=new Sr(g,new ii({color:f,transparent:!0,opacity:d}));y.renderOrder=3,this.paths.add(y)};c(r,Yn[e.kind]||"#1abc9c",.75),c(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function pM(){return new Promise((n,t)=>{let e=indexedDB.open(dM,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Kd(n,t){let e=await pM();return new Promise((i,r)=>{let o=e.transaction("kv",n),c=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(c?.result)},o.onerror=o.onabort=()=>{e.close(),r(o.error)}})}var dM,Qd,tp,ep=Sn(()=>{dM="nccam";Qd=n=>Kd("readonly",t=>t.get(n)).catch(()=>null),tp=(n,t)=>Kd("readwrite",e=>e.put(t,n)).catch(()=>{})});var ip={};xu(ip,{mountApp:()=>yM});function yM(n,t,e){let i={get:async I=>{let z=await fetch(t.base+I);if(!z.ok)throw new Error(`${I}: ${z.status}`);return z.json()},post:(I,z)=>fetch(t.base+I,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)})},r={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,tools:[],numbering:"slot",safeZ:null,connected:!1,units:"mm",limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:""},o=new sc,c=I=>!!I.toolNumber&&(!r.slots||I.toolNumber<=r.slots),u=(I,z)=>zi.num(I,r.units,z),f=(I,z)=>zi.len(I,r.units,z),d=0;(async()=>{let[I,z,$,at]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);r.units=zi.unitsFrom(I?.unitsPreference),r.numbering=I?.tool?.numbering==="toolId"?"toolId":"slot",r.slots=Math.max(0,Number(I?.tool?.count)||0);let ft=I?.tool?.probe?Number(I?.tool?.probeToolNumber)||99:null,bt=Number(I?.safeZHeight);r.safeZ=Number.isFinite(bt)?bt:null,r.tools=Nu(Array.isArray(z)?z:z?.tools),r.numbering=Lu(r.numbering,r.tools,r.slots,ft);let Ct=$?.settings||{},Nt=j=>{let It=parseFloat(Ct[j]?.value);return Number.isFinite(It)&&It>0?It:null};r.limits={maxRpm:Nt("30")||void 0,minRpm:Nt("31")||void 0,maxFeed:Math.min(Nt("110")||1/0,Nt("111")||1/0,1/0)},Number.isFinite(r.limits.maxFeed)||delete r.limits.maxFeed,r.maxRapid=Math.min(Nt("110")||5e3,Nt("111")||5e3),Nt("130")&&Nt("131")&&(r.travel={x:Nt("130"),y:Nt("131"),z:Nt("132")}),r.connected=!!at?.machineState?.connected,H();let Mt=await Qd("last");Mt?.bytes&&!r.part&&!r.loading&&g(null,Mt)})();async function g(I,z=null){if(!I&&!z)return;let $=z?z.name:I.name;r.fileName=$,r.loading=`Reading ${$}\u2026`,r.error="",r.plan=null,r.result=null,r.analysis=null,r.part=null,r.step=1,r.maxStep=1,H();try{let at=z?z.bytes:await I.arrayBuffer();r.bytes=at.slice(0);let ft=await e("load",{bytes:at},[at]);if(r.sides=ft.sides,z?.upPath?.length){r.job=null;for(let bt of z.upPath)await v(bt,!0);r.job={...Tc(r.analysis),...z.job},await S()}else await v(ft.best);F()}catch(at){r.error=at.message||String(at),r.fileName=""}r.loading="",H()}let y={top:"bottom",bottom:"top",front:"back",back:"front",left:"right",right:"left"};async function v(I,z=!1,$=!1){$||(r.loading="Turning the part\u2026",H());let ft=await(I&&!Array.isArray(I)&&typeof I=="object"?e("turn",{how:I.turn}):e(Array.isArray(I)?"tilt":"orient",Array.isArray(I)?{normal:I}:{up:I}));return b(I,ft,z)}function b(I,z,$){let at=I&&!Array.isArray(I)&&typeof I=="object";if(at?r.up=I.turn==="over"?y[r.up]||"custom":r.up:r.up=Array.isArray(I)?"custom":I,r.upPath=at||Array.isArray(I)?[...r.upPath||[],I]:[I],$){r.part={positions:z.positions,indices:z.indices},r.analysis=z.analysis,r.loading="";return}r.part={positions:z.positions,indices:z.indices},r.analysis=z.analysis;let ft=r.job;return r.job=Tc(z.analysis),ft&&Object.assign(r.job,{material:ft.material,finish:ft.finish,zero:ft.zero,tabs:ft.tabs,stock:{...r.job.stock,fit:ft.stock.fit,margin:ft.stock.margin,extraTop:ft.stock.extraTop}}),r.loading="",S()}let E=!1;async function P(I){if(E||!r.part)return;E=!0;let z={turn:I==="z"?"over":"around"};try{let[$]=await Promise.all([e("turn",{how:z.turn}),o.spin(I==="z"?"x":"z")]);await b(z,$,!1)}catch($){r.error=$.message||String($),H()}E=!1}async function S(I=!1){if(!r.part)return;let z=++d;r.planning=!0,I&&(r.result=null),H();try{let $=await e("plan",{tools:r.tools,job:{...r.job,units:r.units},limits:r.limits,paths:I,gcodeOptions:{name:r.fileName,numbering:r.numbering,safeZHeightMm:r.safeZ},timing:{maxRapid:r.maxRapid||5e3}});if(z!==d)return;r.plan=$.plan,F(),I&&(r.result=$,r.simChecks=null)}catch($){z===d&&(r.error=$.message||String($))}z===d&&(r.planning=!1,H())}let M=null;function F(){!r.bytes||!r.job||(clearTimeout(M),M=setTimeout(()=>tp("last",{name:r.fileName,bytes:r.bytes,upPath:r.upPath,job:r.job,savedAt:Date.now()}),400))}function H(){if(!n.isConnected)return;let I=n.querySelector("[data-keep-scroll]"),z=I?I.scrollTop:0,$=r.step,at=["Drop a STEP file. ncCAM finds the pockets, holes and outline for you.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][$-1],ft=[r.part?"Your part":"Open your part","What are you cutting it from?","Here\u2019s the plan",r.simChecks&&!r.simChecks.ok?"Check the warnings":"Ready to cut"][$-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCAM<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">STEP file to G-code</div></div>
        <div class="ncc-steps">${gM.map((Nt,Mt)=>{let j=Mt+1,It=j===$?"on":j<r.maxStep||j<$?"done":"";return`<button class="ncc-step ${It}" type="button" data-go="${j}" ${j<=r.maxStep?"":"disabled"}><span class="ncc-num">${It==="done"?"\u2713":j}</span>${Ye(Nt)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${nn.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${Ye(ft)}</h1><p class="ncc-lede">${Ye(at)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${r.connected?"ok":""}"></span>${r.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${$===3?"fixed":""}">${[U,rt,yt,Wt][$-1]()}</div>
        <div class="ncc-foot">${L()}</div>
      </section>
      ${r.toast?`<div class="ncc-toast" role="status">${Ye(r.toast)}</div>`:""}`;let bt=n.querySelector("[data-keep-scroll]");bt&&(bt.scrollTop=z);let Ct=n.querySelector("[data-viewer]");if(Ct){Ct.replaceWith(o.el);let Nt=r.loading||$===4&&!r.result?`<div class="ncc-busy"><span class="ncc-spin"></span>${Ye(r.loading||"Making toolpaths\u2026")}</div>`:"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(Mt=>Mt.remove()),o.el.insertAdjacentHTML("beforeend",($===1?k():$===4?Jt():"")+Nt),o.fit(),$===1&&nt(),$===2&&gt(),$===3&&Ft(),$===4&&r.result&&Vt()}}function L(){let I=`<button class="ncc-back" type="button" data-go="${r.step-1}" ${r.step>1?"":"disabled"}>Back</button>`;if(r.step===1)return`${I}<button class="ncc-next" type="button" data-go="2" ${r.plan&&r.plan.ops.length&&!r.loading?"":"disabled"}>Next: Stock ${nn.next}</button>`;if(r.step===2)return`${I}<button class="ncc-next" type="button" data-go="3">Next: Operations ${nn.next}</button>`;if(r.step===3){let $=r.plan&&r.plan.ops.some(at=>at.enabled);return`${I}<button class="ncc-next" type="button" data-go="4" ${$&&!r.planning?"":"disabled"}>Make toolpaths ${nn.next}</button>`}let z=r.simChecks&&!r.simChecks.ok;return`${I}${z?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${r.result&&r.simChecks&&!z?"":"disabled"}>${nn.load}Load into ncSender</button>`}function U(){if(!r.part&&!r.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${nn.upload}</div>
        <h2>Drop a STEP file here</h2>
        <p>Export your part from Fusion, Onshape, FreeCAD or SolidWorks as <strong>.step</strong> or <strong>.stp</strong>. Millimetres or inches both work.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open STEP file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        ${r.error?`<div class="ncc-hint bad" style="max-width: 520px">${nn.warn}<span>${Ye(r.error)}</span></div>`:""}
        ${r.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${nn.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCAM can pick them.</span></div>`}
      </div>`;let I=r.analysis;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${nn.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${Ye(r.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${I?`${u(I.size[0])} \xD7 ${u(I.size[1])} \xD7 ${f(I.size[2])}`:"&nbsp;"}</div></div>
          </div>
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        </div>
        <div data-viewer></div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card">
          <div class="ncc-label">Which side faces up?</div>
          <div class="ncc-picks">${_M.map(([z,$])=>{let at=!r.sides||r.sides[z].reachable;return`<button class="ncc-pick ${r.up===z?"sel":""}" type="button" data-up="${z}" ${at?"":"disabled"} ${at?"":`title="With the ${$.toLowerCase()} up, some faces point down and the tool can\u2019t reach them"`}>${dn(vM[z],24,'stroke-width="1.8"')}${$}${at?"":"<small>Can\u2019t reach</small>"}</button>`}).join("")}</div>
          <div class="ncc-row-sub">Or click a flat face on the model to put it on top.</div>
        </div>
        ${B()}
        ${C(!0)}
      </div>`}function B(){if(!r.plan)return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-row-sub">${r.planning?"Looking\u2026":""}</div></div>`;let I=new Map;for(let $ of r.plan.ops.filter(at=>at.kind!=="face"&&at.kind!=="corners")){let at=q($),ft=I.get(at)||{o:$,name:at,n:0};ft.n+=$.count||1,I.set(at,ft)}let z=$=>$.n<2?$.name:$.name.replace(/^(Pocket|Step), /,(at,ft)=>`${$.n} ${ft.toLowerCase()}s, `);return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-found">${[...I.values()].map($=>`<div class="ncc-row"><span style="display: flex; align-items: center; gap: 8px"><span class="ncc-swatch" style="background: ${Yn[$.o.kind]}"></span>${Ye(z($))}</span><span class="ncc-ok">\u2713</span></div>`).join("")||'<div class="ncc-row-sub">Nothing to cut from this side.</div>'}</div></div>`}function q(I){let z=I.detail.replace(/ · spiral$/,"");return I.kind==="cutout"?`Outline, ${f(I.zTop)} cut-out`:I.kind==="hole"||I.kind==="drill"?`${I.centers.length>1?`${I.centers.length} holes`:"Hole"}, ${z}`:I.kind==="step"?`Step, ${z}`:`Pocket, ${z.split(" \xB7 ").pop()}`}function C(I){if(!r.plan)return"";let z=r.plan.warnings.filter($=>!I||$.kind==="undercut"||$.kind==="sloped"||$.kind==="edges");return!z.length&&I?`<div class="ncc-hint">${nn.info}<span>Everything can be cut from the top in one setup.</span></div>`:z.map($=>`<div class="ncc-hint ${$.kind==="notool"?"bad":""}">${$.kind==="notool"?nn.warn:nn.info}<span>${Ye($.text)}</span></div>`).join("")}function k(){if(!r.plan)return"";let I=[...new Set(r.plan.ops.filter($=>$.kind!=="face"&&$.kind!=="corners").map($=>$.kind))],z={pocket:"Pockets",hole:"Holes",drill:"Holes",step:"Steps",cutout:"Outline"};return`<div class="ncc-overlay tr">${I.map($=>`<span class="ncc-chip"><span class="ncc-swatch" style="background: ${Yn[$]}"></span>${z[$]}</span>`).join("")}</div>
      <div class="ncc-overlay bl"><span class="ncc-chip">Drag to rotate</span><span class="ncc-chip">Scroll to zoom</span><span class="ncc-chip">Click a face to put it on top</span></div>`}let Y=null;function nt(){if(!r.part)return;te=null,ut=null;let I=r.part.positions,z=(r.plan?.ops||[]).filter($=>$.kind!=="face"&&$.kind!=="corners").flatMap($=>$.kind==="cutout"?[{loops:$.region,z:$.zTop+.05,color:Yn.cutout,dashed:!0}]:$.centers&&!$.region?[{loops:$.centers.map(at=>np(at)),z:$.zTop+.05,color:Yn[$.kind]}]:[{loops:$.region,z:$.zTop+.05,color:Yn[$.kind]}]);o.keepCamera=Y===I,o.showPart(r.part,z),Y=I,o.onFrame=null,o.onPick=async $=>{if(r.loading)return;let at=r.up;try{await v($),r.analysis.undercut&&at!=="custom"&&(!r.sides||r.sides[at]?.reachable)&&(await v(at),it("With that face up, some of the part can\u2019t be reached from the top."))}catch(ft){r.error=ft.message,H()}}}function rt(){let I=r.job,z=r.plan?.stock||Zo(r.analysis,I),$=Object.entries(fr).map(([ft,bt])=>`<button class="ncc-pick ncc-mat ${I.material===ft?"sel":""}" type="button" data-material="${ft}"><span class="ncc-mat-swatch" style="background: ${Rs[ft]}"></span>${Ye(bt.name)}<small>${Ye(bt.note)}</small></button>`).join(""),at=(ft,bt,Ct)=>`<div class="ncc-field"><label for="ncc-${ft}">${bt}</label><input id="ncc-${ft}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${ft}" value="${r.units==="in"?Math.round(Ct/zi.INCH*1e3)/1e3:Math.round(Ct*100)/100}" ${I.stock.fit?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${$}</div></div>
        <div class="ncc-card">
          ${et("fit","Size the stock to the part",`Adds ${f(I.stock.margin)} on every side and ${f(I.stock.extraTop)} on top`,I.stock.fit)}
          <div class="ncc-fields">${at("width",`Width X (${r.units})`,z.width)}${at("depth",`Depth Y (${r.units})`,z.depth)}${at("thickness",`Thickness Z (${r.units})`,z.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${et("tabs","Leave tabs to hold the part",I.tabs.enabled?`${u(tt().height)} \xD7 ${f(tt().length)}, so the part stays put until you cut it free`:"The part comes loose at the end",I.tabs.enabled)}
          ${I.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${I.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${I.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${I.tabs.count>=12?"disabled":""}>+</button></div></div>
          ${X("height","Tab thickness","Thinner tabs","Thicker tabs")}
          ${X("length","Tab length","Shorter tabs","Longer tabs")}`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${pt(z)}
          <div style="font-size: 14px">X Y zero: <strong>${Ye(Q(I.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${I.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${I.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let et=(I,z,$,at)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${Ye(z)}</div><div class="ncc-row-sub">${Ye($)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${at}" aria-label="${Ye(z)}" data-toggle="${I}"></button></div>`;function Q(I){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[I]}let tt=()=>({...ki(r.job.material),...Object.fromEntries(["height","length"].filter(I=>r.job.tabs[I]!=null).map(I=>[I,r.job.tabs[I]]))}),dt=()=>r.units==="in"?{min:.508,max:10.16,step:.508,grid:.254}:{min:.5,max:10,step:.5,grid:.1};function X(I,z,$,at){let ft=tt()[I];return`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${z}</span><div class="ncc-stepper"><button type="button" data-tabsize="${I}" data-by="-1" aria-label="${$}" ${ft<=dt().min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${f(ft,r.units==="in"?2:1)}</span><button type="button" data-tabsize="${I}" data-by="1" aria-label="${at}" ${ft>=dt().max-1e-6?"disabled":""}>+</button></div></div>`}function pt(I){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${u(I.width)} \xD7 ${u(I.depth)} \xD7 ${f(I.thickness)} stock \xB7 tap a point for zero, an arrow to turn the part</div>`}let ut=null;function gt(){let I=r.plan?.stock||Zo(r.analysis,r.job),z=Fu.map(ft=>({key:ft,...Ac(I,{xy:ft,z:"top"})})),$=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",at=`${r.part?.positions?.length}|${I.width}|${I.depth}|${I.thickness}`;o.keepCamera=ut===at,o.showZero({stock:I,part:r.part,points:z,selected:r.job.zero.xy,zFace:r.job.zero.z,color:Rs[r.job.material],accent:$}),ut=at,Y=null,te=null,o.onPick=null,o.onMarker=ft=>{ft!==r.job.zero.xy&&(r.job.zero.xy=ft,T())},o.onAxis=ft=>P(ft)}function yt(){let I=r.plan;if(!I)return'<div class="ncc-busy" style="position: static; flex: 1"><span class="ncc-spin"></span>Planning\u2026</div>';let z=I.ops.map(Mt=>{let j=zt(Mt);return`<div class="ncc-op ${Mt.enabled?"":"off"} ${r.focusOp===Mt.id?"focus":""}" data-focus="${Mt.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${Yn[Mt.kind]} 16%, transparent); color: ${Yn[Mt.kind]}">${nn[Mt.kind]||nn.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${Ye(Mt.label)}</div><div class="ncc-op-sub ncc-mono">${Ye(Mt.detail)}</div></div>
        <select class="ncc-select" data-tool="${Mt.id}" aria-label="Tool for ${Ye(Mt.label)}">${j.map(It=>`<option value="${It.id}" ${It.id===Mt.tool.id?"selected":""}>T${dr(It,r.numbering)} \xB7 ${Ye(It.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${Mt.enabled}" aria-label="${Ye(Mt.label)}" data-op="${Mt.id}"></button>
      </div>`}).join(""),$=Jo(I),at=new Map;for(let Mt of I.ops)Mt.enabled&&Mt.kind!=="face"&&at.set(Mt.tool.id,(at.get(Mt.tool.id)||0)+1);let ft=[...at].sort((Mt,j)=>j[1]-Mt[1])[0]?.[0],bt=I.ops.find(Mt=>Mt.enabled&&Mt.tool.id===ft)||I.ops.find(Mt=>Mt.enabled),Ct=bt?.feeds,Nt=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(Gn).map(([Mt,j])=>`<button type="button" class="${r.job.finish===Mt?"sel":""}" data-finish="${Mt}">${j.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${{fast:"Bigger steps, no finishing pass.",balanced:`Leaves ${f(.2,r.units==="in"?3:1)} on the walls, then a clean finishing pass.`,smooth:"Lighter steps and a finishing pass, for the best walls."}[r.job.finish]}</div>
            ${Ct?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${Ye(bt.tool.name)}<br>${Ye(fr[r.job.material].name)} \xB7 ${Ct.rpm.toLocaleString()} RPM<br>${r.units==="in"?`${u(Ct.feed,1)} in/min`:`${Ct.feed.toLocaleString()} mm/min`} \xB7 ${f(Ct.stepdown,r.units==="in"?3:2)} per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${$.map(Mt=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${dr(Mt,r.numbering)}</span> ${Ye(Mt.name)}</span><span class="ncc-slot ${c(Mt)?"":"hand"}">${c(Mt)?`Slot ${Mt.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${$.some(Mt=>!Mt.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops"><div class="ncc-ops">${z}</div>${C(!1)}<div class="ncc-plan-pair-in">${Nt}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${Nt}</div>
      </div>`}function Ft(){let z=(r.plan?.ops||[]).filter($=>$.enabled&&$.kind!=="face").map($=>{let at=r.focusOp&&r.focusOp!==$.id;return{loops:$.region||($.centers||[]).map(bt=>np(bt)),z:$.kind==="cutout"?$.zTop+.05:Math.max($.zBottom,0)+.05,color:Yn[$.kind],dashed:$.kind==="cutout",opacity:at?.2:1,top:$.zTop}});o.keepCamera=Y===r.part?.positions,o.showPart(r.part,z),Y=r.part?.positions,te=null,ut=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function zt(I){let z=I.kind==="drill"?["drill"]:I.kind==="face"?["surfacing","flat"]:["flat"],$=r.tools.filter(at=>z.includes(at.kind)).sort((at,ft)=>ft.diameter-at.diameter);return $.some(at=>at.id===I.tool.id)?$:[I.tool,...$]}function Wt(){let I=r.result,z=I?.plan,$=z?Jo(z):[],at=z?z.ops.filter(ft=>ft.enabled).reduce((ft,bt,Ct,Nt)=>ft+(Ct>0&&Nt[Ct-1].tool.id!==bt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${Pt()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${z?Math.max(1,Math.round(I.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${$.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${z?at:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${ce()}</div>
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${Ye(ie())}${I?` \xB7 ${(I.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${I?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let ie=()=>`${(r.fileName||"part").replace(/\.(step|stp)$/i,"")}.nc`;function ce(){let I=r.simChecks;return I?I.items.map(z=>`<div class="ncc-check"><span class="ncc-ck ${z.state}">${z.state==="bad"?nn.cross:z.state==="info"?"!":nn.check}</span><span>${Ye(z.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${r.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}</div>`}let V={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null};function Pt(){if(!r.result)return"";let z=r.result.plan.ops.filter(ft=>ft.enabled&&ft.track),$=V.total||1,at=z[Math.max(0,V.opIndexAt?.(V.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${V.playing?"Pause":"Play"}">${V.playing?nn.pause:nn.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round($)}" aria-valuenow="${Math.round(V.t)}">
          ${z.map(ft=>`<i style="width: ${(ft.seconds||0)/$*100}%; background: ${Yn[ft.kind]}"></i>`).join("")}
          <b style="width: ${V.t/$*100}%"></b><em style="left: ${V.t/$*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span data-pb="step">${ct(z,at)}</span><span class="ncc-mono" data-pb="clock">${oc(V.t)} / ${oc($)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([ft,bt])=>`<button type="button" style="padding: 6px 8px" class="${V.speed===ft?"sel":""}" data-speed="${ft}">${bt}</button>`).join("")}</div>`}function Jt(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&r.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${r.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let te=null;function Vt(){if(te===r.result){le();return}te=r.result,Y=null,ut=null,o.onMarker=null,o.onPick=null;let I=r.result.plan,z=I.ops.filter(Mt=>Mt.enabled&&Mt.track),$=Gi.cellFor(I.stock,520*520);V.ops=z,V.hm=Yu(new Gi(I.stock,$)),V.colors=I.ops.map(Mt=>new ge(Yn[Mt.kind])),V.stamps=I.ops.map(Mt=>Pc(Mt.tool,$));let at=0;for(let Mt of z)at+=Mt.track.length/4;V.moves=new Float32Array(at*4),V.opOf=new Uint16Array(at),V.cum=new Float64Array(at);let ft=0,bt=0,Ct=null,Nt=r.maxRapid||5e3;for(let Mt of z){let j=I.ops.indexOf(Mt);for(let It=0;It<Mt.track.length;It+=4,ft++){if(V.moves.set(Mt.track.subarray(It,It+4),ft*4),V.opOf[ft]=j,Ct){let St=Math.hypot(Mt.track[It]-Ct[0],Mt.track[It+1]-Ct[1],Mt.track[It+2]-Ct[2]);bt+=St/(Mt.track[It+3]>0?Mt.track[It+3]:Nt)*60}Ct=[Mt.track[It],Mt.track[It+1],Mt.track[It+2]],V.cum[ft]=bt}}V.total=bt,V.opIndexAt=Mt=>{let j=Math.min(at-1,qe(V.cum,Mt));return z.indexOf(I.ops[V.opOf[j]])},V.t=0,V.i=1,V.cursor=null,V.toolOp=-1,V.snaps=[],o.showStock(V.hm,Rs[I.job.material]||Rs.mdf,r.part);{let Mt=V.hm,j=[Mt.x0,Mt.y0,Mt.bottom],It=[Mt.x0+(Mt.nx-1)*Mt.cell,Mt.y0+(Mt.ny-1)*Mt.cell,Mt.top];for(let St of z){let kt=St.tool.diameter/2;for(let Gt=0;Gt<St.track.length;Gt+=4)St.track[Gt+3]!==0&&(j[0]=Math.min(j[0],St.track[Gt]-kt),It[0]=Math.max(It[0],St.track[Gt]+kt),j[1]=Math.min(j[1],St.track[Gt+1]-kt),It[1]=Math.max(It[1],St.track[Gt+1]+kt))}o.frame(j,It)}o.showPaths(z),r.showPaths=r.showPaths??!1,le(),Se(0),V.speed=5,V.rate=Math.max(1,V.total/600/5),o.onFrame=He,Te(I),V.playing=!1,Ue()}function le(){o.paths&&(o.paths.visible=!!r.showPaths),o.partGhost&&(o.partGhost.visible=!!r.showPart)}function qe(I,z){let $=0,at=I.length;for(;$<at;){let ft=$+at>>1;I[ft]<z?$=ft+1:at=ft}return $}let ue=I=>({x:V.moves[I*4],y:V.moves[I*4+1],z:V.moves[I*4+2],r:V.moves[I*4+3]===0});function ye(I){let z=V.hm,$=V.cum.length,at=1/0,ft=-1,bt=(Ct,Nt,Mt)=>{let j=r.result.plan.ops[Mt].tool.diameter/2/z.cell+3,It=Math.floor((Math.min(Ct.y,Nt.y)-z.y0)/z.cell-j),St=Math.ceil((Math.max(Ct.y,Nt.y)-z.y0)/z.cell+j);at=Math.min(at,Math.max(0,It)),ft=Math.max(ft,Math.min(z.ny-1,St))};for(;V.i<$&&V.cum[V.i]<=I;){V.opOf[V.i]!==V.opOf[V.i-1]&&!V.cursor&&Re();let Ct=V.cursor||ue(V.i-1),Nt=ue(V.i),Mt=V.opOf[V.i];Nt.r||(Ic(z,r.result.plan.ops[Mt].tool,Ct,Nt,Mt),bt(Ct,Nt,Mt)),V.cursor=null,V.i++}if(V.i<$&&I>V.cum[V.i-1]){let Ct=V.cursor||ue(V.i-1),Nt=ue(V.i),Mt=V.opOf[V.i],j=V.cum[V.i-1],It=(I-j)/(V.cum[V.i]-j||1),St=ue(V.i-1),kt={x:St.x+(Nt.x-St.x)*It,y:St.y+(Nt.y-St.y)*It,z:St.z+(Nt.z-St.z)*It};Nt.r||(Ic(z,r.result.plan.ops[Mt].tool,Ct,kt,Mt),bt(Ct,kt,Mt)),V.cursor=kt}return[at,ft]}function Se(I){let z=V.cum.length;if(!z)return;let $=Math.min(z-1,qe(V.cum,I)),at=V.opOf[$];if(at!==V.toolOp){let bt=r.result.plan.ops[at];o.setTool(bt.tool,bt.zTop-bt.zBottom),V.toolOp=at}let ft=V.cursor||ue(Math.max(0,V.i-1));o.moveTool(ft.x,ft.y,ft.z)}let _e=0,Ie=0;function He(I){let z=_e?Math.min(.1,(I-_e)/1e3):0;if(_e=I,!V.playing||!V.cum)return;V.t=Math.min(V.total,V.t+z*V.speed*V.rate);let[$,at]=ye(V.t);o.refreshStock($,at,V.colors),Se(V.t),V.t>=V.total?(V.playing=!1,Ue()):I-Ie>200&&(Ie=I,Ue())}let je=["h","op","sx","sy","wx","wy","gap","deep"];function Re(){V.snaps.some(I=>I.i===V.i)||V.snaps.push({i:V.i,data:je.map(I=>V.hm[I].slice())})}function Fe(I){if(I=Math.max(0,Math.min(V.total,I)),I<V.t){let z=V.snaps.filter($=>V.cum[$.i-1]<=I).sort(($,at)=>at.i-$.i)[0];z?(je.forEach(($,at)=>V.hm[$].set(z.data[at])),V.i=z.i):(V.hm.h.fill(V.hm.top),V.hm.op.fill(0),V.hm.sx.fill(0),V.hm.sy.fill(0),V.hm.wx.fill(0),V.hm.wy.fill(0),V.hm.gap.fill(1/0),V.hm.deep.fill(-1/0),V.i=1),V.cursor=null,ye(I),o.refreshStock(0,V.hm.ny-1,V.colors)}else{let[z,$]=ye(I);o.refreshStock(z,$,V.colors)}V.t=I,Se(I),Ue()}let ct=(I,z)=>z?`Step ${I.indexOf(z)+1} of ${I.length} \xB7 ${Ye(z.label)} \xB7 T${dr(z.tool,r.numbering)}`:"";function Ue(){let I=n.querySelector("[data-playbar]");if(!I)return;if(I._result!==r.result||I._total!==V.total||!I.querySelector("[data-scrub]")){I.innerHTML=Pt(),I._result=r.result,I._total=V.total;return}let z=r.result.plan.ops.filter(j=>j.enabled&&j.track),$=V.total||1,at=`${V.t/$*100}%`,ft=z[Math.max(0,V.opIndexAt?.(V.t)??0)],bt=I.querySelector("[data-scrub]");bt.querySelector("b").style.width=at,bt.querySelector("em").style.left=at,bt.setAttribute("aria-valuenow",String(Math.round(V.t)));let Ct=(j,It)=>{j&&j.innerHTML!==It&&(j.innerHTML=It)};Ct(I.querySelector('[data-pb="step"]'),ct(z,ft)),Ct(I.querySelector('[data-pb="clock"]'),`${oc(V.t)} / ${oc($)}`);let Nt=I.querySelector('[data-act="play"]'),Mt=V.playing?"Pause":"Play";Nt.getAttribute("aria-label")!==Mt&&(Nt.setAttribute("aria-label",Mt),Nt.innerHTML=V.playing?nn.pause:nn.play);for(let j of I.querySelectorAll("[data-speed]"))j.classList.toggle("sel",+j.dataset.speed===V.speed)}function Te(I){setTimeout(()=>{if(r.result?.plan!==I)return;let z=I.ops.map(Ct=>({...Ct,moves:Ct.track?Array.from({length:Ct.track.length/4},(Nt,Mt)=>({x:Ct.track[Mt*4],y:Ct.track[Mt*4+1],z:Ct.track[Mt*4+2],r:Ct.track[Mt*4+3]===0,f:Ct.track[Mt*4+3]})):null})),{collisions:$}=qu({...I,ops:z},Gi.cellFor(I.stock,300*300)),at=[];if(at.push($.length?{state:"bad",text:`${$.length} fast move${$.length>1?"s go":" goes"} into the material (${[...new Set($.map(Ct=>I.ops.find(Nt=>Nt.id===Ct.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),r.travel){let Ct=I.stock.width<=r.travel.x&&I.stock.depth<=r.travel.y;at.push(Ct?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${u(r.travel.x)} \xD7 ${f(r.travel.y)}).`})}let ft=Jo(I);at.push(ft.every(Ct=>Ct.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),I.ops.find(Ct=>Ct.kind==="cutout"&&Ct.enabled)&&at.push({state:"ok",text:`The cut-out goes ${f(I.job.throughDepth,r.units==="in"?3:1)} into the spoilboard${I.job.tabs.enabled?`, with ${I.job.tabs.count} tabs`:""}`}),I.warnings.some(Ct=>Ct.kind==="undercut")&&at.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side."}),r.simChecks={ok:!at.some(Ct=>Ct.state==="bad"),items:at},H()},50)}let W=I=>{if(!(I<1||I>4||I>r.maxStep+1)){if(I===4&&r.step!==4){V.playing=!1,r.step=4,r.maxStep=4,H(),S(!0);return}r.step=I,r.maxStep=Math.max(r.maxStep,I),I!==4&&(V.playing=!1),H()}},T=()=>{r.maxStep=Math.min(r.maxStep,Math.max(r.step,3)),r.result=null,S(!1)};n.addEventListener("click",I=>{let z=I.target.closest("[data-focus]");if(z&&!I.target.closest("button, select")){r.focusOp=r.focusOp===z.dataset.focus?null:z.dataset.focus,H();return}let $=I.target.closest("button, [data-scrub]");if(!$||$.disabled)return;let at=$.dataset;if(at.go)return W(+at.go);if(at.up)return v(at.up).catch(ft=>{r.error=ft.message,H()});if(at.material)return r.job.material=at.material,Object.assign(r.job.tabs,ki(at.material)),T();if(at.tabsize){let ft=tt(),bt=dt();return r.job.tabs[at.tabsize]=Math.max(bt.min,Math.min(bt.max,Math.round((ft[at.tabsize]+ +at.by*bt.step)/bt.grid)*bt.grid)),T()}if(at.zero)return r.job.zero.xy=at.zero,T();if(at.z)return r.job.zero.z=at.z,T();if(at.finish)return r.job.finish=at.finish,T();if(at.tabs)return r.job.tabs.count=Math.max(1,Math.min(12,r.job.tabs.count+ +at.tabs)),T();if(at.toggle==="fit"){let ft=r.plan?.stock;return r.job.stock.fit=!r.job.stock.fit,!r.job.stock.fit&&ft&&Object.assign(r.job.stock,{width:ft.width,depth:ft.depth,thickness:ft.thickness}),T()}if(at.toggle==="tabs")return r.job.tabs.enabled=!r.job.tabs.enabled,T();if(at.op)return r.job.disabled[at.op]=!r.job.disabled[at.op],T();if(at.speed)return V.speed=+at.speed,Ue();if(at.act==="play")return V.t>=V.total&&Fe(0),V.playing=!V.playing,_e=0,Ue();if(at.act==="paths"){r.showPaths=!r.showPaths,le(),$.classList.toggle("on",r.showPaths);return}if(at.act==="ghost"){r.showPart=!r.showPart,le(),$.classList.toggle("on",r.showPart);return}if(at.act==="close")return Ht();if(at.act==="load")return mt($);if(at.act==="save")return Et($)}),n.addEventListener("pointerdown",I=>{if(!I.target.closest("[data-scrub]")||!V.cum)return;let $=V.playing;V.playing=!1;let at=Nt=>{let Mt=n.querySelector("[data-scrub]").getBoundingClientRect();Mt.width>0&&Fe((Nt-Mt.left)/Mt.width*V.total)};at(I.clientX);let ft=null,bt=Nt=>{ft===null&&requestAnimationFrame(()=>{let Mt=ft;ft=null,at(Mt)}),ft=Nt.clientX},Ct=()=>{window.removeEventListener("pointermove",bt),window.removeEventListener("pointerup",Ct),V.playing=$&&V.t<V.total,_e=0,Ue()};window.addEventListener("pointermove",bt),window.addEventListener("pointerup",Ct)}),n.addEventListener("change",I=>{let z=I.target;if(z.matches("[data-file]"))return g(z.files[0]);if(z.dataset.tool)return r.job.toolOverride[z.dataset.tool]=+z.value||z.value,T();if(z.dataset.stock){let $=parseFloat(String(z.value).replace(",","."));return Number.isFinite($)&&$>0&&(r.job.stock[z.dataset.stock]=zi.toMm($,r.units)),T()}}),n.addEventListener("dragover",I=>{let z=I.target.closest("[data-drop]");z&&(I.preventDefault(),z.classList.add("over"))}),n.addEventListener("dragleave",I=>{let z=I.target.closest("[data-drop]");z&&z.classList.remove("over")}),n.addEventListener("drop",I=>{I.target.closest("[data-drop]")&&(I.preventDefault(),g(I.dataTransfer.files[0]))});function it(I){r.toast=I,H(),setTimeout(()=>{r.toast===I&&(r.toast="",H())},2600)}async function mt(I){I.disabled=!0;try{let z=await i.post("/api/gcode-files/load-temp",{filename:ie(),content:r.result.gcode});if(!z.ok)throw new Error(`ncSender said ${z.status}`);Ht()}catch(z){I.disabled=!1,it(`Couldn\u2019t load the program: ${z.message}`)}}async function Et(I){I.disabled=!0;try{let z=await Bt(ie()),$=await i.post("/api/gcode-files/file/save",{path:z,content:r.result.gcode});if(!$.ok)throw new Error(`save failed (${$.status})`);it(`Saved to File Manager: ${z}`)}catch(z){it(`Couldn\u2019t save: ${z.message}`)}I.disabled=!1}async function Bt(I){let z=I.replace(/\.nc$/,""),$=new Set,at=ft=>{for(let bt of ft||[])bt.type==="folder"?at(bt.children):$.add(bt.path)};at((await i.get("/api/gcode-files"))?.tree);for(let ft=1;ft<1e3;ft++){let bt=`ncCAM/${ft<2?I:`${z} (${ft}).nc`}`;if(!$.has(bt))return bt}throw new Error("too many saved copies")}function Ht(){V.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}H(),window.__nccam={S:r,PLAY:V,viewer:o,seek:I=>Fe(I)}}function np(n,t=48){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}var gM,_M,Ye,oc,dn,nn,vM,rp=Sn(()=>{nc();Rc();jd();ep();gM=["Model","Stock & Zero","Operations","Preview & Load"],_M=[["top","Top"],["bottom","Bottom"],["front","Front"],["back","Back"],["left","Left"],["right","Right"]],Ye=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),oc=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},dn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,nn={close:dn('<path d="M6 6l12 12M18 6L6 18"/>'),next:dn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:dn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:dn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:dn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:dn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:dn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:dn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:dn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:dn('<path d="M3 9h18M3 15h18"/>'),pocket:dn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:dn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:dn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:dn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:dn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:dn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>')},vM={top:'<path d="M12 3l9 5-9 5-9-5z" fill="currentColor" fill-opacity=".35"/><path d="M3 8v8l9 5 9-5V8"/>',bottom:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M3 16l9-5 9 5" stroke-dasharray="2 2"/>',front:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".35"/><path d="M21 8v8l-9 5"/>',back:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 3v8" stroke-dasharray="2 2"/>',left:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".2"/><path d="M21 8v8l-9 5"/>',right:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5"/><path d="M21 8v8l-9 5V13z" fill="currentColor" fill-opacity=".35"/>'}});var Ju=Mu(wu(),1);Rc();var ug={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.02,angularDeflection:.1};function Lc(){let n=null,t=null,e=null,i=null,r={async init({wasmBinary:o}){return i=o,!0},async load({bytes:o}){n||=await(0,Ju.default)({wasmBinary:i});let c=n.ReadStepFile(new Uint8Array(o),ug);if(!c.success||!c.meshes?.length)throw new Error("This file has no solid ncCAM can read. Export it again as STEP (AP214 or AP242).");return t=Pu(c),{solids:t.solids,size:Hs(t).size,...Iu(t)}},async orient({up:o}){e=qo(t,o);let c=ur(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:c}},async tilt({normal:o}){e=qo(e,o);let c=ur(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:c}},async turn({how:o}){e=yc(e,o==="over"?[1,0,0,0,-1,0,0,0,-1]:[-1,0,0,0,-1,0,0,0,1]);let c=ur(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:c}},async plan({tools:o,job:c,limits:u,paths:f,gcodeOptions:d,timing:g}){let y=Uu(e,o,c,u);f&&Vu(y);let v=f?Xu(y,g):0,b=f?Gu(y,d):"";for(let E of y.ops){if(!E.moves)continue;let P=new Float32Array(E.moves.length*4);E.moves.forEach((S,M)=>{P[M*4]=S.x,P[M*4+1]=S.y,P[M*4+2]=S.z,P[M*4+3]=S.r?0:S.f}),E.track=P,delete E.moves}return{plan:y,gcode:b,seconds:v}}};return async function(c){let u=r[c.type];if(!u)throw new Error(`unknown request ${c.type}`);return u(c)}}var xM="0.1.3-mvv8l9q2";if(typeof document>"u"){let n=Lc();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e&&e.positions?[e.positions.buffer,e.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCam=window.NcCam||{};n.build=xM,n.mount=async(i,r)=>{let{mountApp:o}=await Promise.resolve().then(()=>(rp(),ip));try{o(i,r,await t(r))}catch(c){i.textContent=`ncCAM could not start: ${c.message||c}`}};let t=i=>n.engine||=e(i);async function e(i){let r=await fetch(i.file("lib/occt-import-js.wasm")).then(u=>{if(!u.ok)throw new Error(`lib/occt-import-js.wasm: ${u.status}`);return u.arrayBuffer()}),o=null;try{o=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{o=null}if(o){let u=0,f=new Map;o.onmessage=({data:y})=>{let v=f.get(y.id);v&&(f.delete(y.id),y.ok?v.resolve(y.result):v.reject(new Error(y.error)))};let d=(y,v={},b=[])=>new Promise((E,P)=>{let S=++u;f.set(S,{resolve:E,reject:P}),o.postMessage({...v,id:S,type:y},b)});if(await Promise.race([d("init",{wasmBinary:r}).then(()=>!0),new Promise(y=>setTimeout(()=>y(!1),5e3))]))return d;o.terminate()}let c=Lc();return await c({type:"init",wasmBinary:r}),(u,f={})=>c({...f,type:u})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
