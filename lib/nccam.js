(()=>{var jm=Object.create;var Sc=Object.defineProperty;var Jm=Object.getOwnPropertyDescriptor;var Km=Object.getOwnPropertyNames;var Qm=Object.getPrototypeOf,tg=Object.prototype.hasOwnProperty;var wc=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var mn=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var Ru=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Lu=(n,t)=>{for(var e in t)Sc(n,e,{get:t[e],enumerable:!0})},eg=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Km(t))!tg.call(n,r)&&r!==e&&Sc(n,r,{get:()=>t[r],enumerable:!(i=Jm(t,r))||i.enumerable});return n};var Nu=(n,t,e)=>(e=n!=null?jm(Qm(n)):{},eg(t||!n||!n.__esModule?Sc(e,"default",{value:n,enumerable:!0}):e,n));var Fu=Ru((Ou,Ec)=>{var Du=(()=>{var n=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(t={}){var e,i=t,r,o,l=new Promise((f,m)=>{r=f,o=m}),h=typeof window=="object",u=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",g=Object.assign({},i),v=[],_="./this.program",S=(f,m)=>{throw m},w="";function E(f){return i.locateFile?i.locateFile(f,w):w+f}var b,y;if(d){var R=wc("fs"),z=wc("path");w=__dirname+"/",y=f=>{f=ne(f)?new URL(f):z.normalize(f);var m=R.readFileSync(f);return m},b=(f,m=!0)=>(f=ne(f)?new URL(f):z.normalize(f),new Promise((M,T)=>{R.readFile(f,m?void 0:"utf8",(O,G)=>{O?T(O):M(m?G.buffer:G)})})),!i.thisProgram&&process.argv.length>1&&(_=process.argv[1].replace(/\\/g,"/")),v=process.argv.slice(2),S=(f,m)=>{throw process.exitCode=f,m}}else(h||u)&&(u?w=self.location.href:typeof document<"u"&&document.currentScript&&(w=document.currentScript.src),n&&(w=n),w.startsWith("blob:")?w="":w=w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1),u&&(y=f=>{var m=new XMLHttpRequest;return m.open("GET",f,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),b=f=>ne(f)?new Promise((m,M)=>{var T=new XMLHttpRequest;T.open("GET",f,!0),T.responseType="arraybuffer",T.onload=()=>{if(T.status==200||T.status==0&&T.response){m(T.response);return}M(T.status)},T.onerror=M,T.send(null)}):fetch(f,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(new Error(m.status+" : "+m.url))));var A=i.print||console.log.bind(console),L=i.printErr||console.error.bind(console);Object.assign(i,g),g=null,i.arguments&&(v=i.arguments),i.thisProgram&&(_=i.thisProgram);var D=i.wasmBinary,V,C=!1,k;function H(f,m){f||me(m)}var Y,J,q,Z,K,lt,dt,Tt;function xt(){var f=V.buffer;i.HEAP8=Y=new Int8Array(f),i.HEAP16=q=new Int16Array(f),i.HEAPU8=J=new Uint8Array(f),i.HEAPU16=Z=new Uint16Array(f),i.HEAP32=K=new Int32Array(f),i.HEAPU32=lt=new Uint32Array(f),i.HEAPF32=dt=new Float32Array(f),i.HEAPF64=Tt=new Float64Array(f)}var Ct=[],Nt=[],ct=[],It=!1;function Xt(){var f=i.preRun;f&&(typeof f=="function"&&(f=[f]),f.forEach(_t)),kt(Ct)}function Gt(){It=!0,!i.noFSInit&&!N.initialized&&N.init(),N.ignorePermissions=!1,pt.init(),kt(Nt)}function Vt(){var f=i.postRun;f&&(typeof f=="function"&&(f=[f]),f.forEach(Ot)),kt(ct)}function _t(f){Ct.unshift(f)}function Et(f){Nt.unshift(f)}function Ot(f){ct.unshift(f)}var Qt=0,et=null,oe=null;function Ue(f){return f}function ue(f){Qt++,i.monitorRunDependencies?.(Qt)}function pe(f){if(Qt--,i.monitorRunDependencies?.(Qt),Qt==0&&(et!==null&&(clearInterval(et),et=null),oe)){var m=oe;oe=null,m()}}function me(f){i.onAbort?.(f),f="Aborted("+f+")",L(f),C=!0,f+=". Build with -sASSERTIONS for more info.",It&&Cu();var m=new WebAssembly.RuntimeError(f);throw o(m),m}var fe="data:application/octet-stream;base64,",Te=f=>f.startsWith(fe),ne=f=>f.startsWith("file://");function Ce(){var f="occt-import-js.wasm";return Te(f)?f:E(f)}var ve;function Ae(f){if(f==ve&&D)return new Uint8Array(D);if(y)return y(f);throw"both async and sync fetching of the wasm failed"}function at(f){return D?Promise.resolve().then(()=>Ae(f)):b(f).then(m=>new Uint8Array(m),()=>Ae(f))}function ze(f,m,M){return at(f).then(T=>WebAssembly.instantiate(T,m)).then(M,T=>{L(`failed to asynchronously prepare wasm: ${T}`),me(T)})}function Se(f,m,M,T){return!f&&typeof WebAssembly.instantiateStreaming=="function"&&!Te(m)&&!ne(m)&&!d&&typeof fetch=="function"?fetch(m,{credentials:"same-origin"}).then(O=>{var G=WebAssembly.instantiateStreaming(O,M);return G.then(T,function(tt){return L(`wasm streaming compile failed: ${tt}`),L("falling back to ArrayBuffer instantiation"),ze(m,M,T)})}):ze(m,M,T)}function X(){return{a:Hm}}function P(){var f=X();function m(T,O){return un=T.exports,V=un._,xt(),Ho=un.ba,Et(un.$),pe("wasm-instantiate"),un}ue("wasm-instantiate");function M(T){m(T.instance)}if(i.instantiateWasm)try{return i.instantiateWasm(f,m)}catch(T){L(`Module.instantiateWasm callback failed with error: ${T}`),o(T)}return ve??=Ce(),Se(D,ve,f,M).catch(o),{}}var it,mt;function Pt(f){this.name="ExitStatus",this.message=`Program terminated with exit(${f})`,this.status=f}var kt=f=>{f.forEach(m=>m(i))},Wt=i.noExitRuntime||!0,Mt={isAbs:f=>f.charAt(0)==="/",splitPath:f=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return m.exec(f).slice(1)},normalizeArray:(f,m)=>{for(var M=0,T=f.length-1;T>=0;T--){var O=f[T];O==="."?f.splice(T,1):O===".."?(f.splice(T,1),M++):M&&(f.splice(T,1),M--)}if(m)for(;M;M--)f.unshift("..");return f},normalize:f=>{var m=Mt.isAbs(f),M=f.substr(-1)==="/";return f=Mt.normalizeArray(f.split("/").filter(T=>!!T),!m).join("/"),!f&&!m&&(f="."),f&&M&&(f+="/"),(m?"/":"")+f},dirname:f=>{var m=Mt.splitPath(f),M=m[0],T=m[1];return!M&&!T?".":(T&&(T=T.substr(0,T.length-1)),M+T)},basename:f=>{if(f==="/")return"/";f=Mt.normalize(f),f=f.replace(/\/$/,"");var m=f.lastIndexOf("/");return m===-1?f:f.substr(m+1)},join:(...f)=>Mt.normalize(f.join("/")),join2:(f,m)=>Mt.normalize(f+"/"+m)},Dt=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return T=>crypto.getRandomValues(T);if(d)try{var f=wc("crypto"),m=f.randomFillSync;if(m)return T=>f.randomFillSync(T);var M=f.randomBytes;return T=>(T.set(M(T.byteLength)),T)}catch{}me("initRandomDevice")},Yt=f=>(Yt=Dt())(f),Kt={resolve:(...f)=>{for(var m="",M=!1,T=f.length-1;T>=-1&&!M;T--){var O=T>=0?f[T]:N.cwd();if(typeof O!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!O)return"";m=O+"/"+m,M=Mt.isAbs(O)}return m=Mt.normalizeArray(m.split("/").filter(G=>!!G),!M).join("/"),(M?"/":"")+m||"."},relative:(f,m)=>{f=Kt.resolve(f).substr(1),m=Kt.resolve(m).substr(1);function M(zt){for(var jt=0;jt<zt.length&&zt[jt]==="";jt++);for(var re=zt.length-1;re>=0&&zt[re]==="";re--);return jt>re?[]:zt.slice(jt,re-jt+1)}for(var T=M(f.split("/")),O=M(m.split("/")),G=Math.min(T.length,O.length),tt=G,ot=0;ot<G;ot++)if(T[ot]!==O[ot]){tt=ot;break}for(var At=[],ot=tt;ot<T.length;ot++)At.push("..");return At=At.concat(O.slice(tt)),At.join("/")}},B=typeof TextDecoder<"u"?new TextDecoder:void 0,W=(f,m=0,M=NaN)=>{for(var T=m+M,O=m;f[O]&&!(O>=T);)++O;if(O-m>16&&f.buffer&&B)return B.decode(f.subarray(m,O));for(var G="";m<O;){var tt=f[m++];if(!(tt&128)){G+=String.fromCharCode(tt);continue}var ot=f[m++]&63;if((tt&224)==192){G+=String.fromCharCode((tt&31)<<6|ot);continue}var At=f[m++]&63;if((tt&240)==224?tt=(tt&15)<<12|ot<<6|At:tt=(tt&7)<<18|ot<<12|At<<6|f[m++]&63,tt<65536)G+=String.fromCharCode(tt);else{var zt=tt-65536;G+=String.fromCharCode(55296|zt>>10,56320|zt&1023)}}return G},j=[],st=f=>{for(var m=0,M=0;M<f.length;++M){var T=f.charCodeAt(M);T<=127?m++:T<=2047?m+=2:T>=55296&&T<=57343?(m+=4,++M):m+=3}return m},yt=(f,m,M,T)=>{if(!(T>0))return 0;for(var O=M,G=M+T-1,tt=0;tt<f.length;++tt){var ot=f.charCodeAt(tt);if(ot>=55296&&ot<=57343){var At=f.charCodeAt(++tt);ot=65536+((ot&1023)<<10)|At&1023}if(ot<=127){if(M>=G)break;m[M++]=ot}else if(ot<=2047){if(M+1>=G)break;m[M++]=192|ot>>6,m[M++]=128|ot&63}else if(ot<=65535){if(M+2>=G)break;m[M++]=224|ot>>12,m[M++]=128|ot>>6&63,m[M++]=128|ot&63}else{if(M+3>=G)break;m[M++]=240|ot>>18,m[M++]=128|ot>>12&63,m[M++]=128|ot>>6&63,m[M++]=128|ot&63}}return m[M]=0,M-O};function $(f,m,M){var T=M>0?M:st(f)+1,O=new Array(T),G=yt(f,O,0,O.length);return m&&(O.length=G),O}var St=()=>{if(!j.length){var f=null;if(d){var m=256,M=Buffer.alloc(m),T=0,O=process.stdin.fd;try{T=R.readSync(O,M,0,m)}catch(G){if(G.toString().includes("EOF"))T=0;else throw G}T>0&&(f=M.slice(0,T).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(f=window.prompt("Input: "),f!==null&&(f+=`
`));if(!f)return null;j=$(f,!0)}return j.shift()},pt={ttys:[],init(){},shutdown(){},register(f,m){pt.ttys[f]={input:[],output:[],ops:m},N.registerDevice(f,pt.stream_ops)},stream_ops:{open(f){var m=pt.ttys[f.node.rdev];if(!m)throw new N.ErrnoError(43);f.tty=m,f.seekable=!1},close(f){f.tty.ops.fsync(f.tty)},fsync(f){f.tty.ops.fsync(f.tty)},read(f,m,M,T,O){if(!f.tty||!f.tty.ops.get_char)throw new N.ErrnoError(60);for(var G=0,tt=0;tt<T;tt++){var ot;try{ot=f.tty.ops.get_char(f.tty)}catch{throw new N.ErrnoError(29)}if(ot===void 0&&G===0)throw new N.ErrnoError(6);if(ot==null)break;G++,m[M+tt]=ot}return G&&(f.node.timestamp=Date.now()),G},write(f,m,M,T,O){if(!f.tty||!f.tty.ops.put_char)throw new N.ErrnoError(60);try{for(var G=0;G<T;G++)f.tty.ops.put_char(f.tty,m[M+G])}catch{throw new N.ErrnoError(29)}return T&&(f.node.timestamp=Date.now()),G}},default_tty_ops:{get_char(f){return St()},put_char(f,m){m===null||m===10?(A(W(f.output)),f.output=[]):m!=0&&f.output.push(m)},fsync(f){f.output&&f.output.length>0&&(A(W(f.output)),f.output=[])},ioctl_tcgets(f){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(f,m,M){return 0},ioctl_tiocgwinsz(f){return[24,80]}},default_tty1_ops:{put_char(f,m){m===null||m===10?(L(W(f.output)),f.output=[]):m!=0&&f.output.push(m)},fsync(f){f.output&&f.output.length>0&&(L(W(f.output)),f.output=[])}}},ut=(f,m)=>{J.fill(0,f,f+m)},Ut=(f,m)=>Math.ceil(f/m)*m,wt=f=>{f=Ut(f,65536);var m=Au(65536,f);return m&&ut(m,f),m},Ft={ops_table:null,mount(f){return Ft.createNode(null,"/",16895,0)},createNode(f,m,M,T){if(N.isBlkdev(M)||N.isFIFO(M))throw new N.ErrnoError(63);Ft.ops_table||={dir:{node:{getattr:Ft.node_ops.getattr,setattr:Ft.node_ops.setattr,lookup:Ft.node_ops.lookup,mknod:Ft.node_ops.mknod,rename:Ft.node_ops.rename,unlink:Ft.node_ops.unlink,rmdir:Ft.node_ops.rmdir,readdir:Ft.node_ops.readdir,symlink:Ft.node_ops.symlink},stream:{llseek:Ft.stream_ops.llseek}},file:{node:{getattr:Ft.node_ops.getattr,setattr:Ft.node_ops.setattr},stream:{llseek:Ft.stream_ops.llseek,read:Ft.stream_ops.read,write:Ft.stream_ops.write,allocate:Ft.stream_ops.allocate,mmap:Ft.stream_ops.mmap,msync:Ft.stream_ops.msync}},link:{node:{getattr:Ft.node_ops.getattr,setattr:Ft.node_ops.setattr,readlink:Ft.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Ft.node_ops.getattr,setattr:Ft.node_ops.setattr},stream:N.chrdev_stream_ops}};var O=N.createNode(f,m,M,T);return N.isDir(O.mode)?(O.node_ops=Ft.ops_table.dir.node,O.stream_ops=Ft.ops_table.dir.stream,O.contents={}):N.isFile(O.mode)?(O.node_ops=Ft.ops_table.file.node,O.stream_ops=Ft.ops_table.file.stream,O.usedBytes=0,O.contents=null):N.isLink(O.mode)?(O.node_ops=Ft.ops_table.link.node,O.stream_ops=Ft.ops_table.link.stream):N.isChrdev(O.mode)&&(O.node_ops=Ft.ops_table.chrdev.node,O.stream_ops=Ft.ops_table.chrdev.stream),O.timestamp=Date.now(),f&&(f.contents[m]=O,f.timestamp=O.timestamp),O},getFileDataAsTypedArray(f){return f.contents?f.contents.subarray?f.contents.subarray(0,f.usedBytes):new Uint8Array(f.contents):new Uint8Array(0)},expandFileStorage(f,m){var M=f.contents?f.contents.length:0;if(!(M>=m)){var T=1024*1024;m=Math.max(m,M*(M<T?2:1.125)>>>0),M!=0&&(m=Math.max(m,256));var O=f.contents;f.contents=new Uint8Array(m),f.usedBytes>0&&f.contents.set(O.subarray(0,f.usedBytes),0)}},resizeFileStorage(f,m){if(f.usedBytes!=m)if(m==0)f.contents=null,f.usedBytes=0;else{var M=f.contents;f.contents=new Uint8Array(m),M&&f.contents.set(M.subarray(0,Math.min(m,f.usedBytes))),f.usedBytes=m}},node_ops:{getattr(f){var m={};return m.dev=N.isChrdev(f.mode)?f.id:1,m.ino=f.id,m.mode=f.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=f.rdev,N.isDir(f.mode)?m.size=4096:N.isFile(f.mode)?m.size=f.usedBytes:N.isLink(f.mode)?m.size=f.link.length:m.size=0,m.atime=new Date(f.timestamp),m.mtime=new Date(f.timestamp),m.ctime=new Date(f.timestamp),m.blksize=4096,m.blocks=Math.ceil(m.size/m.blksize),m},setattr(f,m){m.mode!==void 0&&(f.mode=m.mode),m.timestamp!==void 0&&(f.timestamp=m.timestamp),m.size!==void 0&&Ft.resizeFileStorage(f,m.size)},lookup(f,m){throw N.genericErrors[44]},mknod(f,m,M,T){return Ft.createNode(f,m,M,T)},rename(f,m,M){if(N.isDir(f.mode)){var T;try{T=N.lookupNode(m,M)}catch{}if(T)for(var O in T.contents)throw new N.ErrnoError(55)}delete f.parent.contents[f.name],f.parent.timestamp=Date.now(),f.name=M,m.contents[M]=f,m.timestamp=f.parent.timestamp},unlink(f,m){delete f.contents[m],f.timestamp=Date.now()},rmdir(f,m){var M=N.lookupNode(f,m);for(var T in M.contents)throw new N.ErrnoError(55);delete f.contents[m],f.timestamp=Date.now()},readdir(f){var m=[".",".."];for(var M of Object.keys(f.contents))m.push(M);return m},symlink(f,m,M){var T=Ft.createNode(f,m,41471,0);return T.link=M,T},readlink(f){if(!N.isLink(f.mode))throw new N.ErrnoError(28);return f.link}},stream_ops:{read(f,m,M,T,O){var G=f.node.contents;if(O>=f.node.usedBytes)return 0;var tt=Math.min(f.node.usedBytes-O,T);if(tt>8&&G.subarray)m.set(G.subarray(O,O+tt),M);else for(var ot=0;ot<tt;ot++)m[M+ot]=G[O+ot];return tt},write(f,m,M,T,O,G){if(m.buffer===Y.buffer&&(G=!1),!T)return 0;var tt=f.node;if(tt.timestamp=Date.now(),m.subarray&&(!tt.contents||tt.contents.subarray)){if(G)return tt.contents=m.subarray(M,M+T),tt.usedBytes=T,T;if(tt.usedBytes===0&&O===0)return tt.contents=m.slice(M,M+T),tt.usedBytes=T,T;if(O+T<=tt.usedBytes)return tt.contents.set(m.subarray(M,M+T),O),T}if(Ft.expandFileStorage(tt,O+T),tt.contents.subarray&&m.subarray)tt.contents.set(m.subarray(M,M+T),O);else for(var ot=0;ot<T;ot++)tt.contents[O+ot]=m[M+ot];return tt.usedBytes=Math.max(tt.usedBytes,O+T),T},llseek(f,m,M){var T=m;if(M===1?T+=f.position:M===2&&N.isFile(f.node.mode)&&(T+=f.node.usedBytes),T<0)throw new N.ErrnoError(28);return T},allocate(f,m,M){Ft.expandFileStorage(f.node,m+M),f.node.usedBytes=Math.max(f.node.usedBytes,m+M)},mmap(f,m,M,T,O){if(!N.isFile(f.node.mode))throw new N.ErrnoError(43);var G,tt,ot=f.node.contents;if(!(O&2)&&ot&&ot.buffer===Y.buffer)tt=!1,G=ot.byteOffset;else{if(tt=!0,G=wt(m),!G)throw new N.ErrnoError(48);ot&&((M>0||M+m<ot.length)&&(ot.subarray?ot=ot.subarray(M,M+m):ot=Array.prototype.slice.call(ot,M,M+m)),Y.set(ot,G))}return{ptr:G,allocated:tt}},msync(f,m,M,T,O){return Ft.stream_ops.write(f,m,0,T,M,!1),0}}},te=(f,m,M,T)=>{var O=T?"":`al ${f}`;b(f).then(G=>{m(new Uint8Array(G)),O&&pe(O)},G=>{if(M)M();else throw`Loading data file "${f}" failed.`}),O&&ue(O)},Pe=(f,m,M,T,O,G)=>{N.createDataFile(f,m,M,T,O,G)},De=i.preloadPlugins||[],Tn=(f,m,M,T)=>{typeof Browser<"u"&&Browser.init();var O=!1;return De.forEach(G=>{O||G.canHandle(m)&&(G.handle(f,m,M,T),O=!0)}),O},Rn=(f,m,M,T,O,G,tt,ot,At,zt)=>{var jt=m?Kt.resolve(Mt.join2(f,m)):f,re=`cp ${jt}`;function he(le){function xe(ke){zt?.(),ot||Pe(f,m,ke,T,O,At),G?.(),pe(re)}Tn(le,jt,xe,()=>{tt?.(),pe(re)})||xe(le)}ue(re),typeof M=="string"?te(M,he,tt):he(M)},Bs=f=>{var m={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},M=m[f];if(typeof M>"u")throw new Error(`Unknown file open mode: ${f}`);return M},vr=(f,m)=>{var M=0;return f&&(M|=365),m&&(M|=146),M},N={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(f){this.name="ErrnoError",this.errno=f}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(f){this.node=f}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(f){this.shared.flags=f}get position(){return this.shared.position}set position(f){this.shared.position=f}},FSNode:class{constructor(f,m,M,T){f||(f=this),this.parent=f,this.mount=f.mount,this.mounted=null,this.id=N.nextInode++,this.name=m,this.mode=M,this.node_ops={},this.stream_ops={},this.rdev=T,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(f){f?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(f){f?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return N.isDir(this.mode)}get isDevice(){return N.isChrdev(this.mode)}},lookupPath(f,m={}){if(f=Kt.resolve(f),!f)return{path:"",node:null};var M={follow_mount:!0,recurse_count:0};if(m=Object.assign(M,m),m.recurse_count>8)throw new N.ErrnoError(32);for(var T=f.split("/").filter(re=>!!re),O=N.root,G="/",tt=0;tt<T.length;tt++){var ot=tt===T.length-1;if(ot&&m.parent)break;if(O=N.lookupNode(O,T[tt]),G=Mt.join2(G,T[tt]),N.isMountpoint(O)&&(!ot||ot&&m.follow_mount)&&(O=O.mounted.root),!ot||m.follow)for(var At=0;N.isLink(O.mode);){var zt=N.readlink(G);G=Kt.resolve(Mt.dirname(G),zt);var jt=N.lookupPath(G,{recurse_count:m.recurse_count+1});if(O=jt.node,At++>40)throw new N.ErrnoError(32)}}return{path:G,node:O}},getPath(f){for(var m;;){if(N.isRoot(f)){var M=f.mount.mountpoint;return m?M[M.length-1]!=="/"?`${M}/${m}`:M+m:M}m=m?`${f.name}/${m}`:f.name,f=f.parent}},hashName(f,m){for(var M=0,T=0;T<m.length;T++)M=(M<<5)-M+m.charCodeAt(T)|0;return(f+M>>>0)%N.nameTable.length},hashAddNode(f){var m=N.hashName(f.parent.id,f.name);f.name_next=N.nameTable[m],N.nameTable[m]=f},hashRemoveNode(f){var m=N.hashName(f.parent.id,f.name);if(N.nameTable[m]===f)N.nameTable[m]=f.name_next;else for(var M=N.nameTable[m];M;){if(M.name_next===f){M.name_next=f.name_next;break}M=M.name_next}},lookupNode(f,m){var M=N.mayLookup(f);if(M)throw new N.ErrnoError(M);for(var T=N.hashName(f.id,m),O=N.nameTable[T];O;O=O.name_next){var G=O.name;if(O.parent.id===f.id&&G===m)return O}return N.lookup(f,m)},createNode(f,m,M,T){var O=new N.FSNode(f,m,M,T);return N.hashAddNode(O),O},destroyNode(f){N.hashRemoveNode(f)},isRoot(f){return f===f.parent},isMountpoint(f){return!!f.mounted},isFile(f){return(f&61440)===32768},isDir(f){return(f&61440)===16384},isLink(f){return(f&61440)===40960},isChrdev(f){return(f&61440)===8192},isBlkdev(f){return(f&61440)===24576},isFIFO(f){return(f&61440)===4096},isSocket(f){return(f&49152)===49152},flagsToPermissionString(f){var m=["r","w","rw"][f&3];return f&512&&(m+="w"),m},nodePermissions(f,m){return N.ignorePermissions?0:m.includes("r")&&!(f.mode&292)||m.includes("w")&&!(f.mode&146)||m.includes("x")&&!(f.mode&73)?2:0},mayLookup(f){if(!N.isDir(f.mode))return 54;var m=N.nodePermissions(f,"x");return m||(f.node_ops.lookup?0:2)},mayCreate(f,m){try{var M=N.lookupNode(f,m);return 20}catch{}return N.nodePermissions(f,"wx")},mayDelete(f,m,M){var T;try{T=N.lookupNode(f,m)}catch(G){return G.errno}var O=N.nodePermissions(f,"wx");if(O)return O;if(M){if(!N.isDir(T.mode))return 54;if(N.isRoot(T)||N.getPath(T)===N.cwd())return 10}else if(N.isDir(T.mode))return 31;return 0},mayOpen(f,m){return f?N.isLink(f.mode)?32:N.isDir(f.mode)&&(N.flagsToPermissionString(m)!=="r"||m&512)?31:N.nodePermissions(f,N.flagsToPermissionString(m)):44},MAX_OPEN_FDS:4096,nextfd(){for(var f=0;f<=N.MAX_OPEN_FDS;f++)if(!N.streams[f])return f;throw new N.ErrnoError(33)},getStreamChecked(f){var m=N.getStream(f);if(!m)throw new N.ErrnoError(8);return m},getStream:f=>N.streams[f],createStream(f,m=-1){return f=Object.assign(new N.FSStream,f),m==-1&&(m=N.nextfd()),f.fd=m,N.streams[m]=f,f},closeStream(f){N.streams[f]=null},dupStream(f,m=-1){var M=N.createStream(f,m);return M.stream_ops?.dup?.(M),M},chrdev_stream_ops:{open(f){var m=N.getDevice(f.node.rdev);f.stream_ops=m.stream_ops,f.stream_ops.open?.(f)},llseek(){throw new N.ErrnoError(70)}},major:f=>f>>8,minor:f=>f&255,makedev:(f,m)=>f<<8|m,registerDevice(f,m){N.devices[f]={stream_ops:m}},getDevice:f=>N.devices[f],getMounts(f){for(var m=[],M=[f];M.length;){var T=M.pop();m.push(T),M.push(...T.mounts)}return m},syncfs(f,m){typeof f=="function"&&(m=f,f=!1),N.syncFSRequests++,N.syncFSRequests>1&&L(`warning: ${N.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var M=N.getMounts(N.root.mount),T=0;function O(tt){return N.syncFSRequests--,m(tt)}function G(tt){if(tt)return G.errored?void 0:(G.errored=!0,O(tt));++T>=M.length&&O(null)}M.forEach(tt=>{if(!tt.type.syncfs)return G(null);tt.type.syncfs(tt,f,G)})},mount(f,m,M){var T=M==="/",O=!M,G;if(T&&N.root)throw new N.ErrnoError(10);if(!T&&!O){var tt=N.lookupPath(M,{follow_mount:!1});if(M=tt.path,G=tt.node,N.isMountpoint(G))throw new N.ErrnoError(10);if(!N.isDir(G.mode))throw new N.ErrnoError(54)}var ot={type:f,opts:m,mountpoint:M,mounts:[]},At=f.mount(ot);return At.mount=ot,ot.root=At,T?N.root=At:G&&(G.mounted=ot,G.mount&&G.mount.mounts.push(ot)),At},unmount(f){var m=N.lookupPath(f,{follow_mount:!1});if(!N.isMountpoint(m.node))throw new N.ErrnoError(28);var M=m.node,T=M.mounted,O=N.getMounts(T);Object.keys(N.nameTable).forEach(tt=>{for(var ot=N.nameTable[tt];ot;){var At=ot.name_next;O.includes(ot.mount)&&N.destroyNode(ot),ot=At}}),M.mounted=null;var G=M.mount.mounts.indexOf(T);M.mount.mounts.splice(G,1)},lookup(f,m){return f.node_ops.lookup(f,m)},mknod(f,m,M){var T=N.lookupPath(f,{parent:!0}),O=T.node,G=Mt.basename(f);if(!G||G==="."||G==="..")throw new N.ErrnoError(28);var tt=N.mayCreate(O,G);if(tt)throw new N.ErrnoError(tt);if(!O.node_ops.mknod)throw new N.ErrnoError(63);return O.node_ops.mknod(O,G,m,M)},create(f,m){return m=m!==void 0?m:438,m&=4095,m|=32768,N.mknod(f,m,0)},mkdir(f,m){return m=m!==void 0?m:511,m&=1023,m|=16384,N.mknod(f,m,0)},mkdirTree(f,m){for(var M=f.split("/"),T="",O=0;O<M.length;++O)if(M[O]){T+="/"+M[O];try{N.mkdir(T,m)}catch(G){if(G.errno!=20)throw G}}},mkdev(f,m,M){return typeof M>"u"&&(M=m,m=438),m|=8192,N.mknod(f,m,M)},symlink(f,m){if(!Kt.resolve(f))throw new N.ErrnoError(44);var M=N.lookupPath(m,{parent:!0}),T=M.node;if(!T)throw new N.ErrnoError(44);var O=Mt.basename(m),G=N.mayCreate(T,O);if(G)throw new N.ErrnoError(G);if(!T.node_ops.symlink)throw new N.ErrnoError(63);return T.node_ops.symlink(T,O,f)},rename(f,m){var M=Mt.dirname(f),T=Mt.dirname(m),O=Mt.basename(f),G=Mt.basename(m),tt,ot,At;if(tt=N.lookupPath(f,{parent:!0}),ot=tt.node,tt=N.lookupPath(m,{parent:!0}),At=tt.node,!ot||!At)throw new N.ErrnoError(44);if(ot.mount!==At.mount)throw new N.ErrnoError(75);var zt=N.lookupNode(ot,O),jt=Kt.relative(f,T);if(jt.charAt(0)!==".")throw new N.ErrnoError(28);if(jt=Kt.relative(m,M),jt.charAt(0)!==".")throw new N.ErrnoError(55);var re;try{re=N.lookupNode(At,G)}catch{}if(zt!==re){var he=N.isDir(zt.mode),le=N.mayDelete(ot,O,he);if(le)throw new N.ErrnoError(le);if(le=re?N.mayDelete(At,G,he):N.mayCreate(At,G),le)throw new N.ErrnoError(le);if(!ot.node_ops.rename)throw new N.ErrnoError(63);if(N.isMountpoint(zt)||re&&N.isMountpoint(re))throw new N.ErrnoError(10);if(At!==ot&&(le=N.nodePermissions(ot,"w"),le))throw new N.ErrnoError(le);N.hashRemoveNode(zt);try{ot.node_ops.rename(zt,At,G),zt.parent=At}catch(xe){throw xe}finally{N.hashAddNode(zt)}}},rmdir(f){var m=N.lookupPath(f,{parent:!0}),M=m.node,T=Mt.basename(f),O=N.lookupNode(M,T),G=N.mayDelete(M,T,!0);if(G)throw new N.ErrnoError(G);if(!M.node_ops.rmdir)throw new N.ErrnoError(63);if(N.isMountpoint(O))throw new N.ErrnoError(10);M.node_ops.rmdir(M,T),N.destroyNode(O)},readdir(f){var m=N.lookupPath(f,{follow:!0}),M=m.node;if(!M.node_ops.readdir)throw new N.ErrnoError(54);return M.node_ops.readdir(M)},unlink(f){var m=N.lookupPath(f,{parent:!0}),M=m.node;if(!M)throw new N.ErrnoError(44);var T=Mt.basename(f),O=N.lookupNode(M,T),G=N.mayDelete(M,T,!1);if(G)throw new N.ErrnoError(G);if(!M.node_ops.unlink)throw new N.ErrnoError(63);if(N.isMountpoint(O))throw new N.ErrnoError(10);M.node_ops.unlink(M,T),N.destroyNode(O)},readlink(f){var m=N.lookupPath(f),M=m.node;if(!M)throw new N.ErrnoError(44);if(!M.node_ops.readlink)throw new N.ErrnoError(28);return Kt.resolve(N.getPath(M.parent),M.node_ops.readlink(M))},stat(f,m){var M=N.lookupPath(f,{follow:!m}),T=M.node;if(!T)throw new N.ErrnoError(44);if(!T.node_ops.getattr)throw new N.ErrnoError(63);return T.node_ops.getattr(T)},lstat(f){return N.stat(f,!0)},chmod(f,m,M){var T;if(typeof f=="string"){var O=N.lookupPath(f,{follow:!M});T=O.node}else T=f;if(!T.node_ops.setattr)throw new N.ErrnoError(63);T.node_ops.setattr(T,{mode:m&4095|T.mode&-4096,timestamp:Date.now()})},lchmod(f,m){N.chmod(f,m,!0)},fchmod(f,m){var M=N.getStreamChecked(f);N.chmod(M.node,m)},chown(f,m,M,T){var O;if(typeof f=="string"){var G=N.lookupPath(f,{follow:!T});O=G.node}else O=f;if(!O.node_ops.setattr)throw new N.ErrnoError(63);O.node_ops.setattr(O,{timestamp:Date.now()})},lchown(f,m,M){N.chown(f,m,M,!0)},fchown(f,m,M){var T=N.getStreamChecked(f);N.chown(T.node,m,M)},truncate(f,m){if(m<0)throw new N.ErrnoError(28);var M;if(typeof f=="string"){var T=N.lookupPath(f,{follow:!0});M=T.node}else M=f;if(!M.node_ops.setattr)throw new N.ErrnoError(63);if(N.isDir(M.mode))throw new N.ErrnoError(31);if(!N.isFile(M.mode))throw new N.ErrnoError(28);var O=N.nodePermissions(M,"w");if(O)throw new N.ErrnoError(O);M.node_ops.setattr(M,{size:m,timestamp:Date.now()})},ftruncate(f,m){var M=N.getStreamChecked(f);if((M.flags&2097155)===0)throw new N.ErrnoError(28);N.truncate(M.node,m)},utime(f,m,M){var T=N.lookupPath(f,{follow:!0}),O=T.node;O.node_ops.setattr(O,{timestamp:Math.max(m,M)})},open(f,m,M){if(f==="")throw new N.ErrnoError(44);m=typeof m=="string"?Bs(m):m,m&64?(M=typeof M>"u"?438:M,M=M&4095|32768):M=0;var T;if(typeof f=="object")T=f;else{f=Mt.normalize(f);try{var O=N.lookupPath(f,{follow:!(m&131072)});T=O.node}catch{}}var G=!1;if(m&64)if(T){if(m&128)throw new N.ErrnoError(20)}else T=N.mknod(f,M,0),G=!0;if(!T)throw new N.ErrnoError(44);if(N.isChrdev(T.mode)&&(m&=-513),m&65536&&!N.isDir(T.mode))throw new N.ErrnoError(54);if(!G){var tt=N.mayOpen(T,m);if(tt)throw new N.ErrnoError(tt)}m&512&&!G&&N.truncate(T,0),m&=-131713;var ot=N.createStream({node:T,path:N.getPath(T),flags:m,seekable:!0,position:0,stream_ops:T.stream_ops,ungotten:[],error:!1});return ot.stream_ops.open&&ot.stream_ops.open(ot),i.logReadFiles&&!(m&1)&&(f in N.readFiles||(N.readFiles[f]=1)),ot},close(f){if(N.isClosed(f))throw new N.ErrnoError(8);f.getdents&&(f.getdents=null);try{f.stream_ops.close&&f.stream_ops.close(f)}catch(m){throw m}finally{N.closeStream(f.fd)}f.fd=null},isClosed(f){return f.fd===null},llseek(f,m,M){if(N.isClosed(f))throw new N.ErrnoError(8);if(!f.seekable||!f.stream_ops.llseek)throw new N.ErrnoError(70);if(M!=0&&M!=1&&M!=2)throw new N.ErrnoError(28);return f.position=f.stream_ops.llseek(f,m,M),f.ungotten=[],f.position},read(f,m,M,T,O){if(T<0||O<0)throw new N.ErrnoError(28);if(N.isClosed(f))throw new N.ErrnoError(8);if((f.flags&2097155)===1)throw new N.ErrnoError(8);if(N.isDir(f.node.mode))throw new N.ErrnoError(31);if(!f.stream_ops.read)throw new N.ErrnoError(28);var G=typeof O<"u";if(!G)O=f.position;else if(!f.seekable)throw new N.ErrnoError(70);var tt=f.stream_ops.read(f,m,M,T,O);return G||(f.position+=tt),tt},write(f,m,M,T,O,G){if(T<0||O<0)throw new N.ErrnoError(28);if(N.isClosed(f))throw new N.ErrnoError(8);if((f.flags&2097155)===0)throw new N.ErrnoError(8);if(N.isDir(f.node.mode))throw new N.ErrnoError(31);if(!f.stream_ops.write)throw new N.ErrnoError(28);f.seekable&&f.flags&1024&&N.llseek(f,0,2);var tt=typeof O<"u";if(!tt)O=f.position;else if(!f.seekable)throw new N.ErrnoError(70);var ot=f.stream_ops.write(f,m,M,T,O,G);return tt||(f.position+=ot),ot},allocate(f,m,M){if(N.isClosed(f))throw new N.ErrnoError(8);if(m<0||M<=0)throw new N.ErrnoError(28);if((f.flags&2097155)===0)throw new N.ErrnoError(8);if(!N.isFile(f.node.mode)&&!N.isDir(f.node.mode))throw new N.ErrnoError(43);if(!f.stream_ops.allocate)throw new N.ErrnoError(138);f.stream_ops.allocate(f,m,M)},mmap(f,m,M,T,O){if((T&2)!==0&&(O&2)===0&&(f.flags&2097155)!==2)throw new N.ErrnoError(2);if((f.flags&2097155)===1)throw new N.ErrnoError(2);if(!f.stream_ops.mmap)throw new N.ErrnoError(43);if(!m)throw new N.ErrnoError(28);return f.stream_ops.mmap(f,m,M,T,O)},msync(f,m,M,T,O){return f.stream_ops.msync?f.stream_ops.msync(f,m,M,T,O):0},ioctl(f,m,M){if(!f.stream_ops.ioctl)throw new N.ErrnoError(59);return f.stream_ops.ioctl(f,m,M)},readFile(f,m={}){if(m.flags=m.flags||0,m.encoding=m.encoding||"binary",m.encoding!=="utf8"&&m.encoding!=="binary")throw new Error(`Invalid encoding type "${m.encoding}"`);var M,T=N.open(f,m.flags),O=N.stat(f),G=O.size,tt=new Uint8Array(G);return N.read(T,tt,0,G,0),m.encoding==="utf8"?M=W(tt):m.encoding==="binary"&&(M=tt),N.close(T),M},writeFile(f,m,M={}){M.flags=M.flags||577;var T=N.open(f,M.flags,M.mode);if(typeof m=="string"){var O=new Uint8Array(st(m)+1),G=yt(m,O,0,O.length);N.write(T,O,0,G,void 0,M.canOwn)}else if(ArrayBuffer.isView(m))N.write(T,m,0,m.byteLength,void 0,M.canOwn);else throw new Error("Unsupported data type");N.close(T)},cwd:()=>N.currentPath,chdir(f){var m=N.lookupPath(f,{follow:!0});if(m.node===null)throw new N.ErrnoError(44);if(!N.isDir(m.node.mode))throw new N.ErrnoError(54);var M=N.nodePermissions(m.node,"x");if(M)throw new N.ErrnoError(M);N.currentPath=m.path},createDefaultDirectories(){N.mkdir("/tmp"),N.mkdir("/home"),N.mkdir("/home/web_user")},createDefaultDevices(){N.mkdir("/dev"),N.registerDevice(N.makedev(1,3),{read:()=>0,write:(T,O,G,tt,ot)=>tt}),N.mkdev("/dev/null",N.makedev(1,3)),pt.register(N.makedev(5,0),pt.default_tty_ops),pt.register(N.makedev(6,0),pt.default_tty1_ops),N.mkdev("/dev/tty",N.makedev(5,0)),N.mkdev("/dev/tty1",N.makedev(6,0));var f=new Uint8Array(1024),m=0,M=()=>(m===0&&(m=Yt(f).byteLength),f[--m]);N.createDevice("/dev","random",M),N.createDevice("/dev","urandom",M),N.mkdir("/dev/shm"),N.mkdir("/dev/shm/tmp")},createSpecialDirectories(){N.mkdir("/proc");var f=N.mkdir("/proc/self");N.mkdir("/proc/self/fd"),N.mount({mount(){var m=N.createNode(f,"fd",16895,73);return m.node_ops={lookup(M,T){var O=+T,G=N.getStreamChecked(O),tt={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>G.path}};return tt.parent=tt,tt}},m}},{},"/proc/self/fd")},createStandardStreams(f,m,M){f?N.createDevice("/dev","stdin",f):N.symlink("/dev/tty","/dev/stdin"),m?N.createDevice("/dev","stdout",null,m):N.symlink("/dev/tty","/dev/stdout"),M?N.createDevice("/dev","stderr",null,M):N.symlink("/dev/tty1","/dev/stderr");var T=N.open("/dev/stdin",0),O=N.open("/dev/stdout",1),G=N.open("/dev/stderr",1)},staticInit(){[44].forEach(f=>{N.genericErrors[f]=new N.ErrnoError(f),N.genericErrors[f].stack="<generic error, no stack>"}),N.nameTable=new Array(4096),N.mount(Ft,{},"/"),N.createDefaultDirectories(),N.createDefaultDevices(),N.createSpecialDirectories(),N.filesystems={MEMFS:Ft}},init(f,m,M){N.initialized=!0,f??=i.stdin,m??=i.stdout,M??=i.stderr,N.createStandardStreams(f,m,M)},quit(){N.initialized=!1;for(var f=0;f<N.streams.length;f++){var m=N.streams[f];m&&N.close(m)}},findObject(f,m){var M=N.analyzePath(f,m);return M.exists?M.object:null},analyzePath(f,m){try{var M=N.lookupPath(f,{follow:!m});f=M.path}catch{}var T={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var M=N.lookupPath(f,{parent:!0});T.parentExists=!0,T.parentPath=M.path,T.parentObject=M.node,T.name=Mt.basename(f),M=N.lookupPath(f,{follow:!m}),T.exists=!0,T.path=M.path,T.object=M.node,T.name=M.node.name,T.isRoot=M.path==="/"}catch(O){T.error=O.errno}return T},createPath(f,m,M,T){f=typeof f=="string"?f:N.getPath(f);for(var O=m.split("/").reverse();O.length;){var G=O.pop();if(G){var tt=Mt.join2(f,G);try{N.mkdir(tt)}catch{}f=tt}}return tt},createFile(f,m,M,T,O){var G=Mt.join2(typeof f=="string"?f:N.getPath(f),m),tt=vr(T,O);return N.create(G,tt)},createDataFile(f,m,M,T,O,G){var tt=m;f&&(f=typeof f=="string"?f:N.getPath(f),tt=m?Mt.join2(f,m):f);var ot=vr(T,O),At=N.create(tt,ot);if(M){if(typeof M=="string"){for(var zt=new Array(M.length),jt=0,re=M.length;jt<re;++jt)zt[jt]=M.charCodeAt(jt);M=zt}N.chmod(At,ot|146);var he=N.open(At,577);N.write(he,M,0,M.length,0,G),N.close(he),N.chmod(At,ot)}},createDevice(f,m,M,T){var O=Mt.join2(typeof f=="string"?f:N.getPath(f),m),G=vr(!!M,!!T);N.createDevice.major??=64;var tt=N.makedev(N.createDevice.major++,0);return N.registerDevice(tt,{open(ot){ot.seekable=!1},close(ot){T?.buffer?.length&&T(10)},read(ot,At,zt,jt,re){for(var he=0,le=0;le<jt;le++){var xe;try{xe=M()}catch{throw new N.ErrnoError(29)}if(xe===void 0&&he===0)throw new N.ErrnoError(6);if(xe==null)break;he++,At[zt+le]=xe}return he&&(ot.node.timestamp=Date.now()),he},write(ot,At,zt,jt,re){for(var he=0;he<jt;he++)try{T(At[zt+he])}catch{throw new N.ErrnoError(29)}return jt&&(ot.node.timestamp=Date.now()),he}}),N.mkdev(O,G,tt)},forceLoadFile(f){if(f.isDevice||f.isFolder||f.link||f.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{f.contents=y(f.url),f.usedBytes=f.contents.length}catch{throw new N.ErrnoError(29)}},createLazyFile(f,m,M,T,O){class G{constructor(){this.lengthKnown=!1,this.chunks=[]}get(le){if(!(le>this.length-1||le<0)){var xe=le%this.chunkSize,ke=le/this.chunkSize|0;return this.getter(ke)[xe]}}setDataGetter(le){this.getter=le}cacheLength(){var le=new XMLHttpRequest;if(le.open("HEAD",M,!1),le.send(null),!(le.status>=200&&le.status<300||le.status===304))throw new Error("Couldn't load "+M+". Status: "+le.status);var xe=Number(le.getResponseHeader("Content-length")),ke,yn=(ke=le.getResponseHeader("Accept-Ranges"))&&ke==="bytes",tn=(ke=le.getResponseHeader("Content-Encoding"))&&ke==="gzip",ti=1024*1024;yn||(ti=xe);var ei=(gi,Xr)=>{if(gi>Xr)throw new Error("invalid range ("+gi+", "+Xr+") or no bytes requested!");if(Xr>xe-1)throw new Error("only "+xe+" bytes available! programmer error!");var pn=new XMLHttpRequest;if(pn.open("GET",M,!1),xe!==ti&&pn.setRequestHeader("Range","bytes="+gi+"-"+Xr),pn.responseType="arraybuffer",pn.overrideMimeType&&pn.overrideMimeType("text/plain; charset=x-user-defined"),pn.send(null),!(pn.status>=200&&pn.status<300||pn.status===304))throw new Error("Couldn't load "+M+". Status: "+pn.status);return pn.response!==void 0?new Uint8Array(pn.response||[]):$(pn.responseText||"",!0)},Gs=this;Gs.setDataGetter(gi=>{var Xr=gi*ti,pn=(gi+1)*ti-1;if(pn=Math.min(pn,xe-1),typeof Gs.chunks[gi]>"u"&&(Gs.chunks[gi]=ei(Xr,pn)),typeof Gs.chunks[gi]>"u")throw new Error("doXHR failed!");return Gs.chunks[gi]}),(tn||!xe)&&(ti=xe=1,xe=this.getter(0).length,ti=xe,A("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=xe,this._chunkSize=ti,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!u)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var tt=new G,ot={isDevice:!1,contents:tt}}else var ot={isDevice:!1,url:M};var At=N.createFile(f,m,ot,T,O);ot.contents?At.contents=ot.contents:ot.url&&(At.contents=null,At.url=ot.url),Object.defineProperties(At,{usedBytes:{get:function(){return this.contents.length}}});var zt={},jt=Object.keys(At.stream_ops);jt.forEach(he=>{var le=At.stream_ops[he];zt[he]=(...xe)=>(N.forceLoadFile(At),le(...xe))});function re(he,le,xe,ke,yn){var tn=he.node.contents;if(yn>=tn.length)return 0;var ti=Math.min(tn.length-yn,ke);if(tn.slice)for(var ei=0;ei<ti;ei++)le[xe+ei]=tn[yn+ei];else for(var ei=0;ei<ti;ei++)le[xe+ei]=tn.get(yn+ei);return ti}return zt.read=(he,le,xe,ke,yn)=>(N.forceLoadFile(At),re(he,le,xe,ke,yn)),zt.mmap=(he,le,xe,ke,yn)=>{N.forceLoadFile(At);var tn=wt(le);if(!tn)throw new N.ErrnoError(48);return re(he,Y,tn,le,xe),{ptr:tn,allocated:!0}},At.stream_ops=zt,At}},Ai=(f,m)=>f?W(J,f,m):"",Ne={DEFAULT_POLLMASK:5,calculateAt(f,m,M){if(Mt.isAbs(m))return m;var T;if(f===-100)T=N.cwd();else{var O=Ne.getStreamFromFD(f);T=O.path}if(m.length==0){if(!M)throw new N.ErrnoError(44);return T}return Mt.join2(T,m)},doStat(f,m,M){var T=f(m);K[M>>2]=T.dev,K[M+4>>2]=T.mode,lt[M+8>>2]=T.nlink,K[M+12>>2]=T.uid,K[M+16>>2]=T.gid,K[M+20>>2]=T.rdev,mt=[T.size>>>0,(it=T.size,+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],K[M+24>>2]=mt[0],K[M+28>>2]=mt[1],K[M+32>>2]=4096,K[M+36>>2]=T.blocks;var O=T.atime.getTime(),G=T.mtime.getTime(),tt=T.ctime.getTime();return mt=[Math.floor(O/1e3)>>>0,(it=Math.floor(O/1e3),+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],K[M+40>>2]=mt[0],K[M+44>>2]=mt[1],lt[M+48>>2]=O%1e3*1e3*1e3,mt=[Math.floor(G/1e3)>>>0,(it=Math.floor(G/1e3),+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],K[M+56>>2]=mt[0],K[M+60>>2]=mt[1],lt[M+64>>2]=G%1e3*1e3*1e3,mt=[Math.floor(tt/1e3)>>>0,(it=Math.floor(tt/1e3),+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],K[M+72>>2]=mt[0],K[M+76>>2]=mt[1],lt[M+80>>2]=tt%1e3*1e3*1e3,mt=[T.ino>>>0,(it=T.ino,+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],K[M+88>>2]=mt[0],K[M+92>>2]=mt[1],0},doMsync(f,m,M,T,O){if(!N.isFile(m.node.mode))throw new N.ErrnoError(43);if(T&2)return 0;var G=J.slice(f,f+M);N.msync(m,G,O,M,T)},getStreamFromFD(f){var m=N.getStreamChecked(f);return m},varargs:void 0,getStr(f){var m=Ai(f);return m}};function Or(f,m){try{return f=Ne.getStr(f),N.chmod(f,m),0}catch(M){if(typeof N>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function Fr(f,m,M,T){try{if(m=Ne.getStr(m),m=Ne.calculateAt(f,m),M&-8)return-28;var O=N.lookupPath(m,{follow:!0}),G=O.node;if(!G)return-44;var tt="";return M&4&&(tt+="r"),M&2&&(tt+="w"),M&1&&(tt+="x"),tt&&N.nodePermissions(G,tt)?-2:0}catch(ot){if(typeof N>"u"||ot.name!=="ErrnoError")throw ot;return-ot.errno}}function Ln(){var f=K[+Ne.varargs>>2];return Ne.varargs+=4,f}var Yn=Ln;function Ur(f,m,M){Ne.varargs=M;try{var T=Ne.getStreamFromFD(f);switch(m){case 0:{var O=Ln();if(O<0)return-28;for(;N.streams[O];)O++;var G;return G=N.dupStream(T,O),G.fd}case 1:case 2:return 0;case 3:return T.flags;case 4:{var O=Ln();return T.flags|=O,0}case 12:{var O=Yn(),tt=0;return q[O+tt>>1]=2,0}case 13:case 14:return 0}return-28}catch(ot){if(typeof N>"u"||ot.name!=="ErrnoError")throw ot;return-ot.errno}}function pi(f,m){try{var M=Ne.getStreamFromFD(f);return Ne.doStat(N.stat,M.path,m)}catch(T){if(typeof N>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function Ci(f,m,M){Ne.varargs=M;try{var T=Ne.getStreamFromFD(f);switch(m){case 21509:return T.tty?0:-59;case 21505:{if(!T.tty)return-59;if(T.tty.ops.ioctl_tcgets){var O=T.tty.ops.ioctl_tcgets(T),G=Yn();K[G>>2]=O.c_iflag||0,K[G+4>>2]=O.c_oflag||0,K[G+8>>2]=O.c_cflag||0,K[G+12>>2]=O.c_lflag||0;for(var tt=0;tt<32;tt++)Y[G+tt+17]=O.c_cc[tt]||0;return 0}return 0}case 21510:case 21511:case 21512:return T.tty?0:-59;case 21506:case 21507:case 21508:{if(!T.tty)return-59;if(T.tty.ops.ioctl_tcsets){for(var G=Yn(),ot=K[G>>2],At=K[G+4>>2],zt=K[G+8>>2],jt=K[G+12>>2],re=[],tt=0;tt<32;tt++)re.push(Y[G+tt+17]);return T.tty.ops.ioctl_tcsets(T.tty,m,{c_iflag:ot,c_oflag:At,c_cflag:zt,c_lflag:jt,c_cc:re})}return 0}case 21519:{if(!T.tty)return-59;var G=Yn();return K[G>>2]=0,0}case 21520:return T.tty?-28:-59;case 21531:{var G=Yn();return N.ioctl(T,m,G)}case 21523:{if(!T.tty)return-59;if(T.tty.ops.ioctl_tiocgwinsz){var he=T.tty.ops.ioctl_tiocgwinsz(T.tty),G=Yn();q[G>>1]=he[0],q[G+2>>1]=he[1]}return 0}case 21524:return T.tty?0:-59;case 21515:return T.tty?0:-59;default:return-28}}catch(le){if(typeof N>"u"||le.name!=="ErrnoError")throw le;return-le.errno}}function Br(f,m){try{return f=Ne.getStr(f),Ne.doStat(N.lstat,f,m)}catch(M){if(typeof N>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function Xi(f,m,M,T){try{m=Ne.getStr(m);var O=T&256,G=T&4096;return T=T&-6401,m=Ne.calculateAt(f,m,G),Ne.doStat(O?N.lstat:N.stat,m,M)}catch(tt){if(typeof N>"u"||tt.name!=="ErrnoError")throw tt;return-tt.errno}}function kr(f,m,M,T){Ne.varargs=T;try{m=Ne.getStr(m),m=Ne.calculateAt(f,m);var O=T?Ln():0;return N.open(m,M,O).fd}catch(G){if(typeof N>"u"||G.name!=="ErrnoError")throw G;return-G.errno}}function zr(f){try{return f=Ne.getStr(f),N.rmdir(f),0}catch(m){if(typeof N>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}function ks(f,m){try{return f=Ne.getStr(f),Ne.doStat(N.stat,f,m)}catch(M){if(typeof N>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function mi(f,m,M){try{return m=Ne.getStr(m),m=Ne.calculateAt(f,m),M===0?N.unlink(m):M===512?N.rmdir(m):me("Invalid flags passed to unlinkat"),0}catch(T){if(typeof N>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}var zs=()=>{me("")},Vs=(f,m,M,T,O)=>{},Vr=()=>{for(var f=new Array(256),m=0;m<256;++m)f[m]=String.fromCharCode(m);F=f},F,rt=f=>{for(var m="",M=f;J[M];)m+=F[J[M++]];return m},bt={},gt={},vt={},Zt,Ht=f=>{throw new Zt(f)},qt,ie=f=>{throw new qt(f)},se=(f,m,M)=>{f.forEach(ot=>vt[ot]=m);function T(ot){var At=M(ot);At.length!==f.length&&ie("Mismatched type converter count");for(var zt=0;zt<f.length;++zt)ge(f[zt],At[zt])}var O=new Array(m.length),G=[],tt=0;m.forEach((ot,At)=>{gt.hasOwnProperty(ot)?O[At]=gt[ot]:(G.push(ot),bt.hasOwnProperty(ot)||(bt[ot]=[]),bt[ot].push(()=>{O[At]=gt[ot],++tt,tt===G.length&&T(O)}))}),G.length===0&&T(O)};function $t(f,m,M={}){var T=m.name;if(f||Ht(`type "${T}" must have a positive integer typeid pointer`),gt.hasOwnProperty(f)){if(M.ignoreDuplicateRegistrations)return;Ht(`Cannot register type '${T}' twice`)}if(gt[f]=m,delete vt[f],bt.hasOwnProperty(f)){var O=bt[f];delete bt[f],O.forEach(G=>G())}}function ge(f,m,M={}){return $t(f,m,M)}var ee=8,Oe=(f,m,M,T)=>{m=rt(m),ge(f,{name:m,fromWireType:function(O){return!!O},toWireType:function(O,G){return G?M:T},argPackAdvance:ee,readValueFromPointer:function(O){return this.fromWireType(J[O])},destructorFunction:null})},qe=[],Re=[],s=f=>{f>9&&--Re[f+1]===0&&(Re[f]=void 0,qe.push(f))},a=()=>Re.length/2-5-qe.length,c=()=>{Re.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=a},p={toValue:f=>(f||Ht("Cannot use deleted val. handle = "+f),Re[f]),toHandle:f=>{switch(f){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let m=qe.pop()||Re.length;return Re[m]=f,Re[m+1]=1,m}}}};function x(f){return this.fromWireType(lt[f>>2])}var I={name:"emscripten::val",fromWireType:f=>{var m=p.toValue(f);return s(f),m},toWireType:(f,m)=>p.toHandle(m),argPackAdvance:ee,readValueFromPointer:x,destructorFunction:null},U=f=>ge(f,I),Q=(f,m)=>{switch(m){case 4:return function(M){return this.fromWireType(dt[M>>2])};case 8:return function(M){return this.fromWireType(Tt[M>>3])};default:throw new TypeError(`invalid float width (${m}): ${f}`)}},nt=(f,m,M)=>{m=rt(m),ge(f,{name:m,fromWireType:T=>T,toWireType:(T,O)=>O,argPackAdvance:ee,readValueFromPointer:Q(m,M),destructorFunction:null})},ft=(f,m)=>Object.defineProperty(m,"name",{value:f}),Lt=f=>{for(;f.length;){var m=f.pop(),M=f.pop();M(m)}};function Rt(f){for(var m=1;m<f.length;++m)if(f[m]!==null&&f[m].destructorFunction===void 0)return!0;return!1}function Bt(f,m){if(!(f instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof f} which is not a function`);var M=ft(f.name||"unknownFunctionName",function(){});M.prototype=f.prototype;var T=new M,O=f.apply(T,m);return O instanceof Object?O:T}function ae(f,m,M,T){var O=Rt(f),G=f.length-2,tt=[],ot=["fn"];m&&ot.push("thisWired");for(var At=0;At<G;++At)tt.push(`arg${At}`),ot.push(`arg${At}Wired`);tt=tt.join(","),ot=ot.join(",");var zt=`return function (${tt}) {
`;O&&(zt+=`var destructors = [];
`);var jt=O?"destructors":"null",re=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];m&&(zt+=`var thisWired = classParam['toWireType'](${jt}, this);
`);for(var At=0;At<G;++At)zt+=`var arg${At}Wired = argType${At}['toWireType'](${jt}, arg${At});
`,re.push(`argType${At}`);if(zt+=(M||T?"var rv = ":"")+`invoker(${ot});
`,O)zt+=`runDestructors(destructors);
`;else for(var At=m?1:2;At<f.length;++At){var he=At===1?"thisWired":"arg"+(At-2)+"Wired";f[At].destructorFunction!==null&&(zt+=`${he}_dtor(${he});
`,re.push(`${he}_dtor`))}return M&&(zt+=`var ret = retType['fromWireType'](rv);
return ret;
`),zt+=`}
`,[re,zt]}function ye(f,m,M,T,O,G){var tt=m.length;tt<2&&Ht("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ot=m[1]!==null&&M!==null,At=Rt(m),zt=m[0].name!=="void",jt=[f,Ht,T,O,Lt,m[0],m[1]],re=0;re<tt-2;++re)jt.push(m[re+2]);if(!At)for(var re=ot?1:2;re<m.length;++re)m[re].destructorFunction!==null&&jt.push(m[re].destructorFunction);let[he,le]=ae(m,ot,zt,G);he.push(le);var xe=Bt(Function,he)(...jt);return ft(f,xe)}var we=(f,m,M)=>{if(f[m].overloadTable===void 0){var T=f[m];f[m]=function(...O){return f[m].overloadTable.hasOwnProperty(O.length)||Ht(`Function '${M}' called with an invalid number of arguments (${O.length}) - expects one of (${f[m].overloadTable})!`),f[m].overloadTable[O.length].apply(this,O)},f[m].overloadTable=[],f[m].overloadTable[T.argCount]=T}},He=(f,m,M)=>{i.hasOwnProperty(f)?((M===void 0||i[f].overloadTable!==void 0&&i[f].overloadTable[M]!==void 0)&&Ht(`Cannot register public name '${f}' twice`),we(i,f,f),i.hasOwnProperty(M)&&Ht(`Cannot register multiple overloads of a function with the same number of arguments (${M})!`),i[f].overloadTable[M]=m):(i[f]=m,M!==void 0&&(i[f].numArguments=M))},vn=(f,m)=>{for(var M=[],T=0;T<f;T++)M.push(lt[m+T*4>>2]);return M},$n=(f,m,M)=>{i.hasOwnProperty(f)||ie("Replacing nonexistent public symbol"),i[f].overloadTable!==void 0&&M!==void 0?i[f].overloadTable[M]=m:(i[f]=m,i[f].argCount=M)},Wi=(f,m,M)=>{f=f.replace(/p/g,"i");var T=i["dynCall_"+f];return T(m,...M)},Hr=[],Ho,Pi=f=>{var m=Hr[f];return m||(f>=Hr.length&&(Hr.length=f+1),Hr[f]=m=Ho.get(f)),m},Cp=(f,m,M=[])=>{if(f.includes("j"))return Wi(f,m,M);var T=Pi(m)(...M);return T},Pp=(f,m)=>(...M)=>Cp(f,m,M),Ip=(f,m)=>{f=rt(f);function M(){return f.includes("j")?Pp(f,m):Pi(m)}var T=M();return typeof T!="function"&&Ht(`unknown function pointer with signature ${f}: ${m}`),T},Rp=(f,m)=>{var M=ft(m,function(T){this.name=m,this.message=T;var O=new Error(T).stack;O!==void 0&&(this.stack=this.toString()+`
`+O.replace(/^Error(:[^\n]*)?\n/,""))});return M.prototype=Object.create(f.prototype),M.prototype.constructor=M,M.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},M},vu,yu=f=>{var m=Eu(f),M=rt(m);return Ii(m),M},Lp=(f,m)=>{var M=[],T={};function O(G){if(!T[G]&&!gt[G]){if(vt[G]){vt[G].forEach(O);return}M.push(G),T[G]=!0}}throw m.forEach(O),new vu(`${f}: `+M.map(yu).join([", "]))},Np=f=>{f=f.trim();let m=f.indexOf("(");return m!==-1?f.substr(0,m):f},Dp=(f,m,M,T,O,G,tt,ot)=>{var At=vn(m,M);f=rt(f),f=Np(f),O=Ip(T,O),He(f,function(){Lp(`Cannot call ${f} due to unbound types`,At)},m-1),se([],At,zt=>{var jt=[zt[0],null].concat(zt.slice(1));return $n(f,ye(f,jt,null,O,G,tt),m-1),[]})},Op=(f,m,M)=>{switch(m){case 1:return M?T=>Y[T]:T=>J[T];case 2:return M?T=>q[T>>1]:T=>Z[T>>1];case 4:return M?T=>K[T>>2]:T=>lt[T>>2];default:throw new TypeError(`invalid integer width (${m}): ${f}`)}},Fp=(f,m,M,T,O)=>{m=rt(m),O===-1&&(O=4294967295);var G=jt=>jt;if(T===0){var tt=32-8*M;G=jt=>jt<<tt>>>tt}var ot=m.includes("unsigned"),At=(jt,re)=>{},zt;ot?zt=function(jt,re){return At(re,this.name),re>>>0}:zt=function(jt,re){return At(re,this.name),re},ge(f,{name:m,fromWireType:G,toWireType:zt,argPackAdvance:ee,readValueFromPointer:Op(m,M,T!==0),destructorFunction:null})},Up=(f,m,M)=>{var T=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],O=T[m];function G(tt){var ot=lt[tt>>2],At=lt[tt+4>>2];return new O(Y.buffer,At,ot)}M=rt(M),ge(f,{name:M,fromWireType:G,argPackAdvance:ee,readValueFromPointer:G},{ignoreDuplicateRegistrations:!0})},Gr=(f,m,M)=>yt(f,J,m,M),Bp=(f,m)=>{m=rt(m);var M=m==="std::string";ge(f,{name:m,fromWireType(T){var O=lt[T>>2],G=T+4,tt;if(M)for(var ot=G,At=0;At<=O;++At){var zt=G+At;if(At==O||J[zt]==0){var jt=zt-ot,re=Ai(ot,jt);tt===void 0?tt=re:(tt+="\0",tt+=re),ot=zt+1}}else{for(var he=new Array(O),At=0;At<O;++At)he[At]=String.fromCharCode(J[G+At]);tt=he.join("")}return Ii(T),tt},toWireType(T,O){O instanceof ArrayBuffer&&(O=new Uint8Array(O));var G,tt=typeof O=="string";tt||O instanceof Uint8Array||O instanceof Uint8ClampedArray||O instanceof Int8Array||Ht("Cannot pass non-string to std::string"),M&&tt?G=st(O):G=O.length;var ot=bc(4+G+1),At=ot+4;if(lt[ot>>2]=G,M&&tt)Gr(O,At,G+1);else if(tt)for(var zt=0;zt<G;++zt){var jt=O.charCodeAt(zt);jt>255&&(Ii(At),Ht("String has UTF-16 code units that do not fit in 8 bits")),J[At+zt]=jt}else for(var zt=0;zt<G;++zt)J[At+zt]=O[zt];return T!==null&&T.push(Ii,ot),ot},argPackAdvance:ee,readValueFromPointer:x,destructorFunction(T){Ii(T)}})},xu=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,kp=(f,m)=>{for(var M=f,T=M>>1,O=T+m/2;!(T>=O)&&Z[T];)++T;if(M=T<<1,M-f>32&&xu)return xu.decode(J.subarray(f,M));for(var G="",tt=0;!(tt>=m/2);++tt){var ot=q[f+tt*2>>1];if(ot==0)break;G+=String.fromCharCode(ot)}return G},zp=(f,m,M)=>{if(M??=2147483647,M<2)return 0;M-=2;for(var T=m,O=M<f.length*2?M/2:f.length,G=0;G<O;++G){var tt=f.charCodeAt(G);q[m>>1]=tt,m+=2}return q[m>>1]=0,m-T},Vp=f=>f.length*2,Hp=(f,m)=>{for(var M=0,T="";!(M>=m/4);){var O=K[f+M*4>>2];if(O==0)break;if(++M,O>=65536){var G=O-65536;T+=String.fromCharCode(55296|G>>10,56320|G&1023)}else T+=String.fromCharCode(O)}return T},Gp=(f,m,M)=>{if(M??=2147483647,M<4)return 0;for(var T=m,O=T+M-4,G=0;G<f.length;++G){var tt=f.charCodeAt(G);if(tt>=55296&&tt<=57343){var ot=f.charCodeAt(++G);tt=65536+((tt&1023)<<10)|ot&1023}if(K[m>>2]=tt,m+=4,m+4>O)break}return K[m>>2]=0,m-T},Xp=f=>{for(var m=0,M=0;M<f.length;++M){var T=f.charCodeAt(M);T>=55296&&T<=57343&&++M,m+=4}return m},Wp=(f,m,M)=>{M=rt(M);var T,O,G,tt;m===2?(T=kp,O=zp,tt=Vp,G=ot=>Z[ot>>1]):m===4&&(T=Hp,O=Gp,tt=Xp,G=ot=>lt[ot>>2]),ge(f,{name:M,fromWireType:ot=>{for(var At=lt[ot>>2],zt,jt=ot+4,re=0;re<=At;++re){var he=ot+4+re*m;if(re==At||G(he)==0){var le=he-jt,xe=T(jt,le);zt===void 0?zt=xe:(zt+="\0",zt+=xe),jt=he+m}}return Ii(ot),zt},toWireType:(ot,At)=>{typeof At!="string"&&Ht(`Cannot pass non-string to C++ string type ${M}`);var zt=tt(At),jt=bc(4+zt+m);return lt[jt>>2]=zt/m,O(At,jt+4,zt+m),ot!==null&&ot.push(Ii,jt),jt},argPackAdvance:ee,readValueFromPointer:x,destructorFunction(ot){Ii(ot)}})},Yp=(f,m)=>{m=rt(m),ge(f,{isVoid:!0,name:m,argPackAdvance:0,fromWireType:()=>{},toWireType:(M,T)=>{}})},$p=1,qp=()=>$p,Mu=f=>{for(var m=f.split("."),M=0;M<4;M++){var T=Number(m[M]);if(isNaN(T))return null;m[M]=T}return(m[0]|m[1]<<8|m[2]<<16|m[3]<<24)>>>0},Go=f=>parseInt(f),Zp=f=>{var m,M,T,O,G=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,tt=[];if(!G.test(f))return null;if(f==="::")return[0,0,0,0,0,0,0,0];for(f.startsWith("::")?f=f.replace("::","Z:"):f=f.replace("::",":Z:"),f.indexOf(".")>0?(f=f.replace(new RegExp("[.]","g"),":"),m=f.split(":"),m[m.length-4]=Go(m[m.length-4])+Go(m[m.length-3])*256,m[m.length-3]=Go(m[m.length-2])+Go(m[m.length-1])*256,m=m.slice(0,m.length-2)):m=f.split(":"),T=0,O=0,M=0;M<m.length;M++)if(typeof m[M]=="string")if(m[M]==="Z"){for(O=0;O<8-m.length+1;O++)tt[M+O]=0;T=O-1}else tt[M+T]=Tu(parseInt(m[M],16));else tt[M+T]=m[M];return[tt[1]<<16|tt[0],tt[3]<<16|tt[2],tt[5]<<16|tt[4],tt[7]<<16|tt[6]]},Yi={address_map:{id:1,addrs:{},names:{}},lookup_name(f){var m=Mu(f);if(m!==null||(m=Zp(f),m!==null))return f;var M;if(Yi.address_map.addrs[f])M=Yi.address_map.addrs[f];else{var T=Yi.address_map.id++;H(T<65535,"exceeded max address mappings of 65535"),M="172.29."+(T&255)+"."+(T&65280),Yi.address_map.names[M]=f,Yi.address_map.addrs[f]=M}return M},lookup_addr(f){return Yi.address_map.names[f]?Yi.address_map.names[f]:null}},jp=f=>{var m=Ai(f);return Mu(Yi.lookup_name(m))},Jp=(f,m,M)=>J.copyWithin(f,m,m+M),_c=(f,m)=>{var M=gt[f];return M===void 0&&Ht(`${m} has unknown type ${yu(f)}`),M},bu=(f,m,M)=>{var T=[],O=f.toWireType(T,M);return T.length&&(lt[m>>2]=p.toHandle(T)),O},Kp=(f,m,M)=>(f=p.toValue(f),m=_c(m,"emval::as"),bu(m,M,f)),Qp={},vc=f=>{var m=Qp[f];return m===void 0?rt(f):m},yc=[],tm=(f,m,M,T,O)=>(f=yc[f],m=p.toValue(m),M=vc(M),f(m,m[M],T,O)),Su=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),em=f=>f===0?p.toHandle(Su()):(f=vc(f),p.toHandle(Su()[f])),nm=f=>{var m=yc.length;return yc.push(f),m},im=(f,m)=>{for(var M=new Array(f),T=0;T<f;++T)M[T]=_c(lt[m+T*4>>2],"parameter "+T);return M},mb=Reflect.construct,rm=(f,m,M)=>{var T=im(f,m),O=T.shift();f--;var G=`return function (obj, func, destructorsRef, args) {
`,tt=0,ot=[];M===0&&ot.push("obj");for(var At=["retType"],zt=[O],jt=0;jt<f;++jt)ot.push("arg"+jt),At.push("argType"+jt),zt.push(T[jt]),G+=`  var arg${jt} = argType${jt}.readValueFromPointer(args${tt?"+"+tt:""});
`,tt+=T[jt].argPackAdvance;var re=M===1?"new func":"func.call";G+=`  var rv = ${re}(${ot.join(", ")});
`,O.isVoid||(At.push("emval_returnValue"),zt.push(bu),G+=`  return emval_returnValue(retType, destructorsRef, rv);
`),G+=`};
`,At.push(G);var he=Bt(Function,At)(...zt),le=`methodCaller<(${T.map(xe=>xe.name).join(", ")}) => ${O.name}>`;return nm(ft(le,he))},sm=(f,m)=>(f=p.toValue(f),m=p.toValue(m),p.toHandle(f[m])),om=f=>{f>9&&(Re[f+1]+=1)},am=()=>p.toHandle([]),lm=f=>p.toHandle(vc(f)),cm=()=>p.toHandle({}),hm=f=>{var m=p.toValue(f);Lt(m),s(f)},um=(f,m,M)=>{f=p.toValue(f),m=p.toValue(m),M=p.toValue(M),f[m]=M},fm=(f,m)=>{f=_c(f,"_emval_take_value");var M=f.readValueFromPointer(m);return p.toHandle(M)},dm=f=>f%4===0&&(f%100!==0||f%400===0),pm=[0,31,60,91,121,152,182,213,244,274,305,335],mm=[0,31,59,90,120,151,181,212,243,273,304,334],gm=f=>{var m=dm(f.getFullYear()),M=m?pm:mm,T=M[f.getMonth()]+f.getDate()-1;return T},xc=(f,m)=>m+2097152>>>0<4194305-!!f?(f>>>0)+m*4294967296:NaN;function _m(f,m,M){var T=xc(f,m),O=new Date(T*1e3);K[M>>2]=O.getSeconds(),K[M+4>>2]=O.getMinutes(),K[M+8>>2]=O.getHours(),K[M+12>>2]=O.getDate(),K[M+16>>2]=O.getMonth(),K[M+20>>2]=O.getFullYear()-1900,K[M+24>>2]=O.getDay();var G=gm(O)|0;K[M+28>>2]=G,K[M+36>>2]=-(O.getTimezoneOffset()*60);var tt=new Date(O.getFullYear(),0,1),ot=new Date(O.getFullYear(),6,1).getTimezoneOffset(),At=tt.getTimezoneOffset(),zt=(ot!=At&&O.getTimezoneOffset()==Math.min(At,ot))|0;K[M+32>>2]=zt}function vm(f,m,M,T,O,G,tt){var ot=xc(G,tt);try{var At=Ne.getStreamFromFD(O);M&2&&Ne.doMsync(f,At,m,T,ot)}catch(zt){if(typeof N>"u"||zt.name!=="ErrnoError")throw zt;return-zt.errno}}var ym=(f,m,M,T)=>{var O=new Date().getFullYear(),G=new Date(O,0,1),tt=new Date(O,6,1),ot=G.getTimezoneOffset(),At=tt.getTimezoneOffset(),zt=Math.max(ot,At);lt[f>>2]=zt*60,K[m>>2]=+(ot!=At);var jt=le=>{var xe=le>=0?"-":"+",ke=Math.abs(le),yn=String(Math.floor(ke/60)).padStart(2,"0"),tn=String(ke%60).padStart(2,"0");return`UTC${xe}${yn}${tn}`},re=jt(ot),he=jt(At);At<ot?(Gr(re,M,17),Gr(he,T,17)):(Gr(re,T,17),Gr(he,M,17))},xm=()=>Date.now();function Mm(){return new Error().stack.toString()}var Xo=f=>{Xo.shown||={},Xo.shown[f]||(Xo.shown[f]=1,d&&(f="warning: "+f),L(f))};function bm(f){var m=Mm(),M=m.lastIndexOf("_emscripten_log"),T=m.lastIndexOf("_emscripten_get_callstack"),O=m.indexOf(`
`,Math.max(M,T))+1;m=m.slice(O),f&8&&typeof emscripten_source_map>"u"&&(Xo('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),f^=8,f|=16);var G=m.split(`
`);m="";var tt=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),ot=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),At=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var zt in G){var jt=G[zt],re="",he="",le=0,xe=0,ke=At.exec(jt);if(ke&&ke.length==5)re=ke[1],he=ke[2],le=ke[3],xe=ke[4];else if(ke=tt.exec(jt)||ot.exec(jt),ke&&ke.length>=4)re=ke[1],he=ke[2],le=ke[3],xe=ke[4]|0;else{m+=jt+`
`;continue}var yn=!1;if(f&8){var tn=emscripten_source_map.originalPositionFor({line:le,column:xe});yn=tn?.source,yn&&(f&64&&(tn.source=tn.source.substring(tn.source.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=`    at ${re} (${tn.source}:${tn.line}:${tn.column})
`)}(f&16||!yn)&&(f&64&&(he=he.substring(he.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=(yn?`     = ${re}`:`    at ${re}`)+` (${he}:${le}:${xe})
`)}return m=m.replace(/\s+$/,""),m}function Sm(f,m,M){var T=bm(f);if(!m||M<=0)return st(T)+1;var O=Gr(T,m,M);return O+1}var wu=()=>2147483648,wm=()=>wu(),Em=f=>{var m=V.buffer,M=(f-m.byteLength+65535)/65536|0;try{return V.grow(M),xt(),1}catch{}},Tm=f=>{var m=J.length;f>>>=0;var M=wu();if(f>M)return!1;for(var T=1;T<=4;T*=2){var O=m*(1+.2/T);O=Math.min(O,f+100663296);var G=Math.min(M,Ut(Math.max(f,O),65536)),tt=Em(G);if(tt)return!0}return!1},Mc={},Am=()=>_||"./this.program",Hs=()=>{if(!Hs.strings){var f=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",m={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:f,_:Am()};for(var M in Mc)Mc[M]===void 0?delete m[M]:m[M]=Mc[M];var T=[];for(var M in m)T.push(`${M}=${m[M]}`);Hs.strings=T}return Hs.strings},Cm=(f,m)=>{for(var M=0;M<f.length;++M)Y[m++]=f.charCodeAt(M);Y[m]=0},Pm=(f,m)=>{var M=0;return Hs().forEach((T,O)=>{var G=m+M;lt[f+O*4>>2]=G,Cm(T,G),M+=T.length+1}),0},Im=(f,m)=>{var M=Hs();lt[f>>2]=M.length;var T=0;return M.forEach(O=>T+=O.length+1),lt[m>>2]=T,0},Rm=0,Lm=()=>Wt||Rm>0,Nm=f=>{k=f,Lm()||(i.onExit?.(f),C=!0),S(f,new Pt(f))},Dm=(f,m)=>{k=f,Nm(f)},Om=Dm;function Fm(f){try{var m=Ne.getStreamFromFD(f);return N.close(m),0}catch(M){if(typeof N>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var Um=(f,m,M,T)=>{for(var O=0,G=0;G<M;G++){var tt=lt[m>>2],ot=lt[m+4>>2];m+=8;var At=N.read(f,Y,tt,ot,T);if(At<0)return-1;if(O+=At,At<ot)break;typeof T<"u"&&(T+=At)}return O};function Bm(f,m,M,T){try{var O=Ne.getStreamFromFD(f),G=Um(O,m,M);return lt[T>>2]=G,0}catch(tt){if(typeof N>"u"||tt.name!=="ErrnoError")throw tt;return tt.errno}}function km(f,m,M,T,O){var G=xc(m,M);try{if(isNaN(G))return 61;var tt=Ne.getStreamFromFD(f);return N.llseek(tt,G,T),mt=[tt.position>>>0,(it=tt.position,+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],K[O>>2]=mt[0],K[O+4>>2]=mt[1],tt.getdents&&G===0&&T===0&&(tt.getdents=null),0}catch(ot){if(typeof N>"u"||ot.name!=="ErrnoError")throw ot;return ot.errno}}var zm=(f,m,M,T)=>{for(var O=0,G=0;G<M;G++){var tt=lt[m>>2],ot=lt[m+4>>2];m+=8;var At=N.write(f,Y,tt,ot,T);if(At<0)return-1;if(O+=At,At<ot)break;typeof T<"u"&&(T+=At)}return O};function Vm(f,m,M,T){try{var O=Ne.getStreamFromFD(f),G=zm(O,m,M);return lt[T>>2]=G,0}catch(tt){if(typeof N>"u"||tt.name!=="ErrnoError")throw tt;return tt.errno}}N.createPreloadedFile=Rn,N.staticInit(),Vr(),Zt=i.BindingError=class extends Error{constructor(m){super(m),this.name="BindingError"}},qt=i.InternalError=class extends Error{constructor(m){super(m),this.name="InternalError"}},c(),vu=i.UnboundTypeError=Rp(Error,"UnboundTypeError");var Hm={M:Or,N:Fr,h:Ur,I:pi,Q:Ci,F:Br,G:Xi,j:kr,B:zr,H:ks,C:mi,A:zs,w:Vs,V:Oe,U,n:nt,f:Dp,b:Fp,a:Up,m:Bp,i:Wp,W:Yp,J:qp,x:jp,L:Jp,e:Kp,q:tm,T:s,u:em,p:rm,k:sm,Y:om,X:am,r:lm,Z:cm,o:hm,c:um,d:fm,t:_m,s:vm,O:ym,K:xm,R:Sm,z:wm,y:Tm,D:Pm,E:Im,S:Om,g:Fm,P:Bm,v:km,l:Vm},un=P(),Gm=()=>(Gm=un.$)(),Eu=f=>(Eu=un.aa)(f),bc=f=>(bc=un.ca)(f),Ii=f=>(Ii=un.da)(f),Tu=f=>(Tu=un.ea)(f),Au=(f,m)=>(Au=un.fa)(f,m),Cu=()=>(Cu=un.ga)(),Xm=i.dynCall_viijii=(f,m,M,T,O,G,tt)=>(Xm=i.dynCall_viijii=un.ha)(f,m,M,T,O,G,tt),Wm=i.dynCall_viiiiji=(f,m,M,T,O,G,tt,ot)=>(Wm=i.dynCall_viiiiji=un.ia)(f,m,M,T,O,G,tt,ot),Ym=i.dynCall_jiji=(f,m,M,T,O)=>(Ym=i.dynCall_jiji=un.ja)(f,m,M,T,O),$m=i.dynCall_iiiiij=(f,m,M,T,O,G,tt)=>($m=i.dynCall_iiiiij=un.ka)(f,m,M,T,O,G,tt),qm=i.dynCall_iiiiijj=(f,m,M,T,O,G,tt,ot,At)=>(qm=i.dynCall_iiiiijj=un.la)(f,m,M,T,O,G,tt,ot,At),Zm=i.dynCall_iiiiiijj=(f,m,M,T,O,G,tt,ot,At,zt)=>(Zm=i.dynCall_iiiiiijj=un.ma)(f,m,M,T,O,G,tt,ot,At,zt),Wo,Pu;oe=function f(){Wo||Iu(),Wo||(oe=f)};function Iu(){if(Qt>0||!Pu&&(Pu=1,Xt(),Qt>0))return;function f(){Wo||(Wo=1,i.calledRun=1,!C&&(Gt(),r(i),i.onRuntimeInitialized?.(),Vt()))}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),f()},1)):f()}if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Iu(),e=l,e})})();typeof Ou=="object"&&typeof Ec=="object"?Ec.exports=Du:typeof define=="function"&&define.amd&&define([],()=>Du)});var Uu=Ru((bb,Yo)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof Yo<"u"&&Yo.exports?(Yo.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var r={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?r.chrome=1:r.chrome=0,i.indexOf("chromium")!=-1?r.chromium=1:r.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?r.safari=1:r.safari=0,i.indexOf("firefox")!=-1?r.firefox=1:r.firefox=0,i.indexOf("firefox/17")!=-1?r.firefox17=1:r.firefox17=0,i.indexOf("firefox/15")!=-1?r.firefox15=1:r.firefox15=0,i.indexOf("firefox/3")!=-1?r.firefox3=1:r.firefox3=0,i.indexOf("opera")!=-1?r.opera=1:r.opera=0,i.indexOf("msie 10")!=-1?r.msie10=1:r.msie10=0,i.indexOf("msie 9")!=-1?r.msie9=1:r.msie9=0,i.indexOf("msie 8")!=-1?r.msie8=1:r.msie8=0,i.indexOf("msie 7")!=-1?r.msie7=1:r.msie7=0,i.indexOf("msie ")!=-1?r.msie=1:r.msie=0,n.biginteger_used=null;var o,l=0xdeadbeefcafe,h=(l&16777215)==15715070;function u(s,a,c){n.biginteger_used=1,s!=null&&(typeof s=="number"&&typeof a>"u"?this.fromInt(s):typeof s=="number"?this.fromNumber(s,a,c):a==null&&typeof s!="string"?this.fromString(s,256):this.fromString(s,a))}function d(){return new u(null,void 0,void 0)}function g(s,a,c,p,x,I){for(;--I>=0;){var U=a*this[s++]+c[p]+x;x=Math.floor(U/67108864),c[p++]=U&67108863}return x}function v(s,a,c,p,x,I){for(var U=a&32767,Q=a>>15;--I>=0;){var nt=this[s]&32767,ft=this[s++]>>15,Lt=Q*nt+ft*U;nt=U*nt+((Lt&32767)<<15)+c[p]+(x&1073741823),x=(nt>>>30)+(Lt>>>15)+Q*ft+(x>>>30),c[p++]=nt&1073741823}return x}function _(s,a,c,p,x,I){for(var U=a&16383,Q=a>>14;--I>=0;){var nt=this[s]&16383,ft=this[s++]>>14,Lt=Q*nt+ft*U;nt=U*nt+((Lt&16383)<<14)+c[p]+x,x=(nt>>28)+(Lt>>14)+Q*ft,c[p++]=nt&268435455}return x}h&&e=="Microsoft Internet Explorer"?(u.prototype.am=v,o=30):h&&e!="Netscape"?(u.prototype.am=g,o=26):(u.prototype.am=_,o=28),u.prototype.DB=o,u.prototype.DM=(1<<o)-1,u.prototype.DV=1<<o;var S=52;u.prototype.FV=Math.pow(2,S),u.prototype.F1=S-o,u.prototype.F2=2*o-S;var w="0123456789abcdefghijklmnopqrstuvwxyz",E=new Array,b,y;for(b=48,y=0;y<=9;++y)E[b++]=y;for(b=97,y=10;y<36;++y)E[b++]=y;for(b=65,y=10;y<36;++y)E[b++]=y;function R(s){return w.charAt(s)}function z(s,a){var c=E[s.charCodeAt(a)];return c??-1}function A(s){for(var a=this.t-1;a>=0;--a)s[a]=this[a];s.t=this.t,s.s=this.s}function L(s){this.t=1,this.s=s<0?-1:0,s>0?this[0]=s:s<-1?this[0]=s+this.DV:this.t=0}function D(s){var a=d();return a.fromInt(s),a}function V(s,a){var c;if(a==16)c=4;else if(a==8)c=3;else if(a==256)c=8;else if(a==2)c=1;else if(a==32)c=5;else if(a==4)c=2;else{this.fromRadix(s,a);return}this.t=0,this.s=0;for(var p=s.length,x=!1,I=0;--p>=0;){var U=c==8?s[p]&255:z(s,p);if(U<0){s.charAt(p)=="-"&&(x=!0);continue}x=!1,I==0?this[this.t++]=U:I+c>this.DB?(this[this.t-1]|=(U&(1<<this.DB-I)-1)<<I,this[this.t++]=U>>this.DB-I):this[this.t-1]|=U<<I,I+=c,I>=this.DB&&(I-=this.DB)}c==8&&(s[0]&128)!=0&&(this.s=-1,I>0&&(this[this.t-1]|=(1<<this.DB-I)-1<<I)),this.clamp(),x&&u.ZERO.subTo(this,this)}function C(){for(var s=this.s&this.DM;this.t>0&&this[this.t-1]==s;)--this.t}function k(s){if(this.s<0)return"-"+this.negate().toString(s);var a;if(s==16)a=4;else if(s==8)a=3;else if(s==2)a=1;else if(s==32)a=5;else if(s==4)a=2;else return this.toRadix(s);var c=(1<<a)-1,p,x=!1,I="",U=this.t,Q=this.DB-U*this.DB%a;if(U-- >0)for(Q<this.DB&&(p=this[U]>>Q)>0&&(x=!0,I=R(p));U>=0;)Q<a?(p=(this[U]&(1<<Q)-1)<<a-Q,p|=this[--U]>>(Q+=this.DB-a)):(p=this[U]>>(Q-=a)&c,Q<=0&&(Q+=this.DB,--U)),p>0&&(x=!0),x&&(I+=R(p));return x?I:"0"}function H(){var s=d();return u.ZERO.subTo(this,s),s}function Y(){return this.s<0?this.negate():this}function J(s){var a=this.s-s.s;if(a!=0)return a;var c=this.t;if(a=c-s.t,a!=0)return this.s<0?-a:a;for(;--c>=0;)if((a=this[c]-s[c])!=0)return a;return 0}function q(s){var a=1,c;return(c=s>>>16)!=0&&(s=c,a+=16),(c=s>>8)!=0&&(s=c,a+=8),(c=s>>4)!=0&&(s=c,a+=4),(c=s>>2)!=0&&(s=c,a+=2),(c=s>>1)!=0&&(s=c,a+=1),a}function Z(){return this.t<=0?0:this.DB*(this.t-1)+q(this[this.t-1]^this.s&this.DM)}function K(s,a){var c;for(c=this.t-1;c>=0;--c)a[c+s]=this[c];for(c=s-1;c>=0;--c)a[c]=0;a.t=this.t+s,a.s=this.s}function lt(s,a){for(var c=s;c<this.t;++c)a[c-s]=this[c];a.t=Math.max(this.t-s,0),a.s=this.s}function dt(s,a){var c=s%this.DB,p=this.DB-c,x=(1<<p)-1,I=Math.floor(s/this.DB),U=this.s<<c&this.DM,Q;for(Q=this.t-1;Q>=0;--Q)a[Q+I+1]=this[Q]>>p|U,U=(this[Q]&x)<<c;for(Q=I-1;Q>=0;--Q)a[Q]=0;a[I]=U,a.t=this.t+I+1,a.s=this.s,a.clamp()}function Tt(s,a){a.s=this.s;var c=Math.floor(s/this.DB);if(c>=this.t){a.t=0;return}var p=s%this.DB,x=this.DB-p,I=(1<<p)-1;a[0]=this[c]>>p;for(var U=c+1;U<this.t;++U)a[U-c-1]|=(this[U]&I)<<x,a[U-c]=this[U]>>p;p>0&&(a[this.t-c-1]|=(this.s&I)<<x),a.t=this.t-c,a.clamp()}function xt(s,a){for(var c=0,p=0,x=Math.min(s.t,this.t);c<x;)p+=this[c]-s[c],a[c++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p-=s.s;c<this.t;)p+=this[c],a[c++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;c<s.t;)p-=s[c],a[c++]=p&this.DM,p>>=this.DB;p-=s.s}a.s=p<0?-1:0,p<-1?a[c++]=this.DV+p:p>0&&(a[c++]=p),a.t=c,a.clamp()}function Ct(s,a){var c=this.abs(),p=s.abs(),x=c.t;for(a.t=x+p.t;--x>=0;)a[x]=0;for(x=0;x<p.t;++x)a[x+c.t]=c.am(0,p[x],a,x,0,c.t);a.s=0,a.clamp(),this.s!=s.s&&u.ZERO.subTo(a,a)}function Nt(s){for(var a=this.abs(),c=s.t=2*a.t;--c>=0;)s[c]=0;for(c=0;c<a.t-1;++c){var p=a.am(c,a[c],s,2*c,0,1);(s[c+a.t]+=a.am(c+1,2*a[c],s,2*c+1,p,a.t-c-1))>=a.DV&&(s[c+a.t]-=a.DV,s[c+a.t+1]=1)}s.t>0&&(s[s.t-1]+=a.am(c,a[c],s,2*c,0,1)),s.s=0,s.clamp()}function ct(s,a,c){var p=s.abs();if(!(p.t<=0)){var x=this.abs();if(x.t<p.t){a?.fromInt(0),c!=null&&this.copyTo(c);return}c==null&&(c=d());var I=d(),U=this.s,Q=s.s,nt=this.DB-q(p[p.t-1]);nt>0?(p.lShiftTo(nt,I),x.lShiftTo(nt,c)):(p.copyTo(I),x.copyTo(c));var ft=I.t,Lt=I[ft-1];if(Lt!=0){var Rt=Lt*(1<<this.F1)+(ft>1?I[ft-2]>>this.F2:0),Bt=this.FV/Rt,ae=(1<<this.F1)/Rt,ye=1<<this.F2,we=c.t,He=we-ft,vn=a??d();for(I.dlShiftTo(He,vn),c.compareTo(vn)>=0&&(c[c.t++]=1,c.subTo(vn,c)),u.ONE.dlShiftTo(ft,vn),vn.subTo(I,I);I.t<ft;)I[I.t++]=0;for(;--He>=0;){var $n=c[--we]==Lt?this.DM:Math.floor(c[we]*Bt+(c[we-1]+ye)*ae);if((c[we]+=I.am(0,$n,c,He,0,ft))<$n)for(I.dlShiftTo(He,vn),c.subTo(vn,c);c[we]<--$n;)c.subTo(vn,c)}a!=null&&(c.drShiftTo(ft,a),U!=Q&&u.ZERO.subTo(a,a)),c.t=ft,c.clamp(),nt>0&&c.rShiftTo(nt,c),U<0&&u.ZERO.subTo(c,c)}}}function It(s){var a=d();return this.abs().divRemTo(s,null,a),this.s<0&&a.compareTo(u.ZERO)>0&&s.subTo(a,a),a}function Xt(s){this.m=s}function Gt(s){return s.s<0||s.compareTo(this.m)>=0?s.mod(this.m):s}function Vt(s){return s}function _t(s){s.divRemTo(this.m,null,s)}function Et(s,a,c){s.multiplyTo(a,c),this.reduce(c)}function Ot(s,a){s.squareTo(a),this.reduce(a)}Xt.prototype.convert=Gt,Xt.prototype.revert=Vt,Xt.prototype.reduce=_t,Xt.prototype.mulTo=Et,Xt.prototype.sqrTo=Ot;function Qt(){if(this.t<1)return 0;var s=this[0];if((s&1)==0)return 0;var a=s&3;return a=a*(2-(s&15)*a)&15,a=a*(2-(s&255)*a)&255,a=a*(2-((s&65535)*a&65535))&65535,a=a*(2-s*a%this.DV)%this.DV,a>0?this.DV-a:-a}function et(s){this.m=s,this.mp=s.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<s.DB-15)-1,this.mt2=2*s.t}function oe(s){var a=d();return s.abs().dlShiftTo(this.m.t,a),a.divRemTo(this.m,null,a),s.s<0&&a.compareTo(u.ZERO)>0&&this.m.subTo(a,a),a}function Ue(s){var a=d();return s.copyTo(a),this.reduce(a),a}function ue(s){for(;s.t<=this.mt2;)s[s.t++]=0;for(var a=0;a<this.m.t;++a){var c=s[a]&32767,p=c*this.mpl+((c*this.mph+(s[a]>>15)*this.mpl&this.um)<<15)&s.DM;for(c=a+this.m.t,s[c]+=this.m.am(0,p,s,a,0,this.m.t);s[c]>=s.DV;)s[c]-=s.DV,s[++c]++}s.clamp(),s.drShiftTo(this.m.t,s),s.compareTo(this.m)>=0&&s.subTo(this.m,s)}function pe(s,a){s.squareTo(a),this.reduce(a)}function me(s,a,c){s.multiplyTo(a,c),this.reduce(c)}et.prototype.convert=oe,et.prototype.revert=Ue,et.prototype.reduce=ue,et.prototype.mulTo=me,et.prototype.sqrTo=pe;function fe(){return(this.t>0?this[0]&1:this.s)==0}function Te(s,a){if(s>4294967295||s<1)return u.ONE;var c=d(),p=d(),x=a.convert(this),I=q(s)-1;for(x.copyTo(c);--I>=0;)if(a.sqrTo(c,p),(s&1<<I)>0)a.mulTo(p,x,c);else{var U=c;c=p,p=U}return a.revert(c)}function ne(s,a){var c;return s<256||a.isEven()?c=new Xt(a):c=new et(a),this.exp(s,c)}u.prototype.copyTo=A,u.prototype.fromInt=L,u.prototype.fromString=V,u.prototype.clamp=C,u.prototype.dlShiftTo=K,u.prototype.drShiftTo=lt,u.prototype.lShiftTo=dt,u.prototype.rShiftTo=Tt,u.prototype.subTo=xt,u.prototype.multiplyTo=Ct,u.prototype.squareTo=Nt,u.prototype.divRemTo=ct,u.prototype.invDigit=Qt,u.prototype.isEven=fe,u.prototype.exp=Te,u.prototype.toString=k,u.prototype.negate=H,u.prototype.abs=Y,u.prototype.compareTo=J,u.prototype.bitLength=Z,u.prototype.mod=It,u.prototype.modPowInt=ne,u.ZERO=D(0),u.ONE=D(1);function Ce(){var s=d();return this.copyTo(s),s}function ve(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Ae(){return this.t==0?this.s:this[0]<<24>>24}function at(){return this.t==0?this.s:this[0]<<16>>16}function ze(s){return Math.floor(Math.LN2*this.DB/Math.log(s))}function Se(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function X(s){if(s==null&&(s=10),this.signum()==0||s<2||s>36)return"0";var a=this.chunkSize(s),c=Math.pow(s,a),p=D(c),x=d(),I=d(),U="";for(this.divRemTo(p,x,I);x.signum()>0;)U=(c+I.intValue()).toString(s).substr(1)+U,x.divRemTo(p,x,I);return I.intValue().toString(s)+U}function P(s,a){this.fromInt(0),a==null&&(a=10);for(var c=this.chunkSize(a),p=Math.pow(a,c),x=!1,I=0,U=0,Q=0;Q<s.length;++Q){var nt=z(s,Q);if(nt<0){s.charAt(Q)=="-"&&this.signum()==0&&(x=!0);continue}U=a*U+nt,++I>=c&&(this.dMultiply(p),this.dAddOffset(U,0),I=0,U=0)}I>0&&(this.dMultiply(Math.pow(a,I)),this.dAddOffset(U,0)),x&&u.ZERO.subTo(this,this)}function it(s,a,c){if(typeof a=="number")if(s<2)this.fromInt(1);else for(this.fromNumber(s,c),this.testBit(s-1)||this.bitwiseTo(u.ONE.shiftLeft(s-1),Kt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(a);)this.dAddOffset(2,0),this.bitLength()>s&&this.subTo(u.ONE.shiftLeft(s-1),this);else{var p=new Array,x=s&7;p.length=(s>>3)+1,a.nextBytes(p),x>0?p[0]&=(1<<x)-1:p[0]=0,this.fromString(p,256)}}function mt(){var s=this.t,a=new Array;a[0]=this.s;var c=this.DB-s*this.DB%8,p,x=0;if(s-- >0)for(c<this.DB&&(p=this[s]>>c)!=(this.s&this.DM)>>c&&(a[x++]=p|this.s<<this.DB-c);s>=0;)c<8?(p=(this[s]&(1<<c)-1)<<8-c,p|=this[--s]>>(c+=this.DB-8)):(p=this[s]>>(c-=8)&255,c<=0&&(c+=this.DB,--s)),(p&128)!=0&&(p|=-256),x==0&&(this.s&128)!=(p&128)&&++x,(x>0||p!=this.s)&&(a[x++]=p);return a}function Pt(s){return this.compareTo(s)==0}function kt(s){return this.compareTo(s)<0?this:s}function Wt(s){return this.compareTo(s)>0?this:s}function Mt(s,a,c){var p,x,I=Math.min(s.t,this.t);for(p=0;p<I;++p)c[p]=a(this[p],s[p]);if(s.t<this.t){for(x=s.s&this.DM,p=I;p<this.t;++p)c[p]=a(this[p],x);c.t=this.t}else{for(x=this.s&this.DM,p=I;p<s.t;++p)c[p]=a(x,s[p]);c.t=s.t}c.s=a(this.s,s.s),c.clamp()}function Dt(s,a){return s&a}function Yt(s){var a=d();return this.bitwiseTo(s,Dt,a),a}function Kt(s,a){return s|a}function B(s){var a=d();return this.bitwiseTo(s,Kt,a),a}function W(s,a){return s^a}function j(s){var a=d();return this.bitwiseTo(s,W,a),a}function st(s,a){return s&~a}function yt(s){var a=d();return this.bitwiseTo(s,st,a),a}function $(){for(var s=d(),a=0;a<this.t;++a)s[a]=this.DM&~this[a];return s.t=this.t,s.s=~this.s,s}function St(s){var a=d();return s<0?this.rShiftTo(-s,a):this.lShiftTo(s,a),a}function pt(s){var a=d();return s<0?this.lShiftTo(-s,a):this.rShiftTo(s,a),a}function ut(s){if(s==0)return-1;var a=0;return(s&65535)==0&&(s>>=16,a+=16),(s&255)==0&&(s>>=8,a+=8),(s&15)==0&&(s>>=4,a+=4),(s&3)==0&&(s>>=2,a+=2),(s&1)==0&&++a,a}function Ut(){for(var s=0;s<this.t;++s)if(this[s]!=0)return s*this.DB+ut(this[s]);return this.s<0?this.t*this.DB:-1}function wt(s){for(var a=0;s!=0;)s&=s-1,++a;return a}function Ft(){for(var s=0,a=this.s&this.DM,c=0;c<this.t;++c)s+=wt(this[c]^a);return s}function te(s){var a=Math.floor(s/this.DB);return a>=this.t?this.s!=0:(this[a]&1<<s%this.DB)!=0}function Pe(s,a){var c=u.ONE.shiftLeft(s);return this.bitwiseTo(c,a,c),c}function De(s){return this.changeBit(s,Kt)}function Tn(s){return this.changeBit(s,st)}function Rn(s){return this.changeBit(s,W)}function Bs(s,a){for(var c=0,p=0,x=Math.min(s.t,this.t);c<x;)p+=this[c]+s[c],a[c++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p+=s.s;c<this.t;)p+=this[c],a[c++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;c<s.t;)p+=s[c],a[c++]=p&this.DM,p>>=this.DB;p+=s.s}a.s=p<0?-1:0,p>0?a[c++]=p:p<-1&&(a[c++]=this.DV+p),a.t=c,a.clamp()}function vr(s){var a=d();return this.addTo(s,a),a}function N(s){var a=d();return this.subTo(s,a),a}function Ai(s){var a=d();return this.multiplyTo(s,a),a}function Ne(){var s=d();return this.squareTo(s),s}function Or(s){var a=d();return this.divRemTo(s,a,null),a}function Fr(s){var a=d();return this.divRemTo(s,null,a),a}function Ln(s){var a=d(),c=d();return this.divRemTo(s,a,c),new Array(a,c)}function Yn(s){this[this.t]=this.am(0,s-1,this,0,0,this.t),++this.t,this.clamp()}function Ur(s,a){if(s!=0){for(;this.t<=a;)this[this.t++]=0;for(this[a]+=s;this[a]>=this.DV;)this[a]-=this.DV,++a>=this.t&&(this[this.t++]=0),++this[a]}}function pi(){}function Ci(s){return s}function Br(s,a,c){s.multiplyTo(a,c)}function Xi(s,a){s.squareTo(a)}pi.prototype.convert=Ci,pi.prototype.revert=Ci,pi.prototype.mulTo=Br,pi.prototype.sqrTo=Xi;function kr(s){return this.exp(s,new pi)}function zr(s,a,c){var p=Math.min(this.t+s.t,a);for(c.s=0,c.t=p;p>0;)c[--p]=0;var x;for(x=c.t-this.t;p<x;++p)c[p+this.t]=this.am(0,s[p],c,p,0,this.t);for(x=Math.min(s.t,a);p<x;++p)this.am(0,s[p],c,p,0,a-p);c.clamp()}function ks(s,a,c){--a;var p=c.t=this.t+s.t-a;for(c.s=0;--p>=0;)c[p]=0;for(p=Math.max(a-this.t,0);p<s.t;++p)c[this.t+p-a]=this.am(a-p,s[p],c,0,0,this.t+p-a);c.clamp(),c.drShiftTo(1,c)}function mi(s){this.r2=d(),this.q3=d(),u.ONE.dlShiftTo(2*s.t,this.r2),this.mu=this.r2.divide(s),this.m=s}function zs(s){if(s.s<0||s.t>2*this.m.t)return s.mod(this.m);if(s.compareTo(this.m)<0)return s;var a=d();return s.copyTo(a),this.reduce(a),a}function Vs(s){return s}function Vr(s){for(s.drShiftTo(this.m.t-1,this.r2),s.t>this.m.t+1&&(s.t=this.m.t+1,s.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);s.compareTo(this.r2)<0;)s.dAddOffset(1,this.m.t+1);for(s.subTo(this.r2,s);s.compareTo(this.m)>=0;)s.subTo(this.m,s)}function F(s,a){s.squareTo(a),this.reduce(a)}function rt(s,a,c){s.multiplyTo(a,c),this.reduce(c)}mi.prototype.convert=zs,mi.prototype.revert=Vs,mi.prototype.reduce=Vr,mi.prototype.mulTo=rt,mi.prototype.sqrTo=F;function bt(s,a){var c=s.bitLength(),p,x=D(1),I;if(c<=0)return x;c<18?p=1:c<48?p=3:c<144?p=4:c<768?p=5:p=6,c<8?I=new Xt(a):a.isEven()?I=new mi(a):I=new et(a);var U=new Array,Q=3,nt=p-1,ft=(1<<p)-1;if(U[1]=I.convert(this),p>1){var Lt=d();for(I.sqrTo(U[1],Lt);Q<=ft;)U[Q]=d(),I.mulTo(Lt,U[Q-2],U[Q]),Q+=2}var Rt=s.t-1,Bt,ae=!0,ye=d(),we;for(c=q(s[Rt])-1;Rt>=0;){for(c>=nt?Bt=s[Rt]>>c-nt&ft:(Bt=(s[Rt]&(1<<c+1)-1)<<nt-c,Rt>0&&(Bt|=s[Rt-1]>>this.DB+c-nt)),Q=p;(Bt&1)==0;)Bt>>=1,--Q;if((c-=Q)<0&&(c+=this.DB,--Rt),ae)U[Bt].copyTo(x),ae=!1;else{for(;Q>1;)I.sqrTo(x,ye),I.sqrTo(ye,x),Q-=2;Q>0?I.sqrTo(x,ye):(we=x,x=ye,ye=we),I.mulTo(ye,U[Bt],x)}for(;Rt>=0&&(s[Rt]&1<<c)==0;)I.sqrTo(x,ye),we=x,x=ye,ye=we,--c<0&&(c=this.DB-1,--Rt)}return I.revert(x)}function gt(s){var a=this.s<0?this.negate():this.clone(),c=s.s<0?s.negate():s.clone();if(a.compareTo(c)<0){var p=a;a=c,c=p}var x=a.getLowestSetBit(),I=c.getLowestSetBit();if(I<0)return a;for(x<I&&(I=x),I>0&&(a.rShiftTo(I,a),c.rShiftTo(I,c));a.signum()>0;)(x=a.getLowestSetBit())>0&&a.rShiftTo(x,a),(x=c.getLowestSetBit())>0&&c.rShiftTo(x,c),a.compareTo(c)>=0?(a.subTo(c,a),a.rShiftTo(1,a)):(c.subTo(a,c),c.rShiftTo(1,c));return I>0&&c.lShiftTo(I,c),c}function vt(s){if(s<=0)return 0;var a=this.DV%s,c=this.s<0?s-1:0;if(this.t>0)if(a==0)c=this[0]%s;else for(var p=this.t-1;p>=0;--p)c=(a*c+this[p])%s;return c}function Zt(s){var a=s.isEven();if(this.isEven()&&a||s.signum()==0)return u.ZERO;for(var c=s.clone(),p=this.clone(),x=D(1),I=D(0),U=D(0),Q=D(1);c.signum()!=0;){for(;c.isEven();)c.rShiftTo(1,c),a?((!x.isEven()||!I.isEven())&&(x.addTo(this,x),I.subTo(s,I)),x.rShiftTo(1,x)):I.isEven()||I.subTo(s,I),I.rShiftTo(1,I);for(;p.isEven();)p.rShiftTo(1,p),a?((!U.isEven()||!Q.isEven())&&(U.addTo(this,U),Q.subTo(s,Q)),U.rShiftTo(1,U)):Q.isEven()||Q.subTo(s,Q),Q.rShiftTo(1,Q);c.compareTo(p)>=0?(c.subTo(p,c),a&&x.subTo(U,x),I.subTo(Q,I)):(p.subTo(c,p),a&&U.subTo(x,U),Q.subTo(I,Q))}if(p.compareTo(u.ONE)!=0)return u.ZERO;if(Q.compareTo(s)>=0)return Q.subtract(s);if(Q.signum()<0)Q.addTo(s,Q);else return Q;return Q.signum()<0?Q.add(s):Q}var Ht=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],qt=(1<<26)/Ht[Ht.length-1];function ie(s){var a,c=this.abs();if(c.t==1&&c[0]<=Ht[Ht.length-1]){for(a=0;a<Ht.length;++a)if(c[0]==Ht[a])return!0;return!1}if(c.isEven())return!1;for(a=1;a<Ht.length;){for(var p=Ht[a],x=a+1;x<Ht.length&&p<qt;)p*=Ht[x++];for(p=c.modInt(p);a<x;)if(p%Ht[a++]==0)return!1}return c.millerRabin(s)}function se(s){var a=this.subtract(u.ONE),c=a.getLowestSetBit();if(c<=0)return!1;var p=a.shiftRight(c);s=s+1>>1,s>Ht.length&&(s=Ht.length);for(var x=d(),I=0;I<s;++I){x.fromInt(Ht[Math.floor(Math.random()*Ht.length)]);var U=x.modPow(p,this);if(U.compareTo(u.ONE)!=0&&U.compareTo(a)!=0){for(var Q=1;Q++<c&&U.compareTo(a)!=0;)if(U=U.modPowInt(2,this),U.compareTo(u.ONE)==0)return!1;if(U.compareTo(a)!=0)return!1}}return!0}u.prototype.chunkSize=ze,u.prototype.toRadix=X,u.prototype.fromRadix=P,u.prototype.fromNumber=it,u.prototype.bitwiseTo=Mt,u.prototype.changeBit=Pe,u.prototype.addTo=Bs,u.prototype.dMultiply=Yn,u.prototype.dAddOffset=Ur,u.prototype.multiplyLowerTo=zr,u.prototype.multiplyUpperTo=ks,u.prototype.modInt=vt,u.prototype.millerRabin=se,u.prototype.clone=Ce,u.prototype.intValue=ve,u.prototype.byteValue=Ae,u.prototype.shortValue=at,u.prototype.signum=Se,u.prototype.toByteArray=mt,u.prototype.equals=Pt,u.prototype.min=kt,u.prototype.max=Wt,u.prototype.and=Yt,u.prototype.or=B,u.prototype.xor=j,u.prototype.andNot=yt,u.prototype.not=$,u.prototype.shiftLeft=St,u.prototype.shiftRight=pt,u.prototype.getLowestSetBit=Ut,u.prototype.bitCount=Ft,u.prototype.testBit=te,u.prototype.setBit=De,u.prototype.clearBit=Tn,u.prototype.flipBit=Rn,u.prototype.add=vr,u.prototype.subtract=N,u.prototype.multiply=Ai,u.prototype.divide=Or,u.prototype.remainder=Fr,u.prototype.divideAndRemainder=Ln,u.prototype.modPow=bt,u.prototype.modInverse=Zt,u.prototype.pow=kr,u.prototype.gcd=gt,u.prototype.isProbablePrime=ie,u.prototype.square=Ne;var $t=u;$t.prototype.IsNegative=function(){return this.compareTo($t.ZERO)==-1},$t.op_Equality=function(s,a){return s.compareTo(a)==0},$t.op_Inequality=function(s,a){return s.compareTo(a)!=0},$t.op_GreaterThan=function(s,a){return s.compareTo(a)>0},$t.op_LessThan=function(s,a){return s.compareTo(a)<0},$t.op_Addition=function(s,a){return new $t(s,void 0,void 0).add(new $t(a,void 0,void 0))},$t.op_Subtraction=function(s,a){return new $t(s,void 0,void 0).subtract(new $t(a,void 0,void 0))},$t.Int128Mul=function(s,a){return new $t(s,void 0,void 0).multiply(new $t(a,void 0,void 0))},$t.op_Division=function(s,a){return s.divide(a)},$t.prototype.ToDouble=function(){return parseFloat(this.toString())};var ge=function(s,a){var c;if(typeof Object.getOwnPropertyNames>"u"){for(c in a.prototype)(typeof s.prototype[c]>"u"||s.prototype[c]===Object.prototype[c])&&(s.prototype[c]=a.prototype[c]);for(c in a)typeof s[c]>"u"&&(s[c]=a[c]);s.$baseCtor=a}else{for(var p=Object.getOwnPropertyNames(a.prototype),x=0;x<p.length;x++)typeof Object.getOwnPropertyDescriptor(s.prototype,p[x])>"u"&&Object.defineProperty(s.prototype,p[x],Object.getOwnPropertyDescriptor(a.prototype,p[x]));for(c in a)typeof s[c]>"u"&&(s[c]=a[c]);s.$baseCtor=a}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var s=arguments;this.X=0,this.Y=0,s.length===1?(this.X=s[0].X,this.Y=s[0].Y):s.length===2&&(this.X=s[0],this.Y=s[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(s){this.X=s.X,this.Y=s.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(s,a){this.X=s,this.Y=a},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var s=!0,a=this.m_Parent;a!==null;)s=!s,a=a.m_Parent;return s},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(s){var a=this.m_Childs.length;this.m_Childs.push(s),s.m_Parent=this,s.m_Index=a},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var s=0,a=this.m_AllPolys.length;s<a;s++)this.m_AllPolys[s]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var s=this.m_AllPolys.length;return s>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&s--,s},ge(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(s){return Math.abs(s)},n.Math_Max_Int32_Int32=function(s,a){return Math.max(s,a)},r.msie||r.opera||r.safari?n.Cast_Int32=function(s){return s|0}:n.Cast_Int32=function(s){return~~s},typeof Number.toInteger>"u"&&(Number.toInteger=null),r.chrome?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):~~s}:r.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(s){return Number.toInteger(s)}:r.msie7||r.msie8?n.Cast_Int64=function(s){return parseInt(s,10)}:r.msie?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):s|0}:n.Cast_Int64=function(s){return s<0?Math.ceil(s):Math.floor(s)},n.Clear=function(s){s.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var s=arguments,a=s.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,a===3)this.X=s[0],this.Y=s[1],this.Z=s[2];else if(a===2)this.X=s[0],this.Y=s[1],this.Z=0;else if(a===1)if(s[0]instanceof n.DoublePoint){var c=s[0];this.X=n.Clipper.Round(c.X),this.Y=n.Clipper.Round(c.Y),this.Z=0}else{var p=s[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(a===2)this.X=s[0],this.Y=s[1];else if(a===1)if(s[0]instanceof n.DoublePoint){var c=s[0];this.X=n.Clipper.Round(c.X),this.Y=n.Clipper.Round(c.Y)}else{var p=s[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(s,a){return s.X===a.X&&s.Y===a.Y},n.IntPoint.op_Inequality=function(s,a){return s.X!==a.X||s.Y!==a.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(s){this.X=s.X,this.Y=s.Y,n.use_xyz&&(typeof s.Z>"u"?this.Z=0:this.Z=s.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(s){this.X=n.Clipper.Round(s.X),this.Y=n.Clipper.Round(s.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(s,a,c){this.X=s,this.Y=a,n.use_xyz&&(typeof c>"u"?this.Z=0:this.Z=c)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var s=arguments,a=s.length;if(a===4)this.left=s[0],this.top=s[1],this.right=s[2],this.bottom=s[3];else if(a===1){var c=s[0];this.left=c.left,this.top=c.top,this.right=c.right,this.bottom=c.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(s){this.left=s.left,this.top=s.top,this.right=s.right,this.bottom=s.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(s,a,c,p){this.left=s,this.top=a,this.right=c,this.bottom=p},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(s,a){var c=a.Pt.Y-s.Pt.Y;return c>0?1:c<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(s){return s>-n.ClipperBase.tolerance&&s<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(s){return s.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(s,a){var c=a;do{if(n.IntPoint.op_Equality(c.Pt,s))return!0;c=c.Next}while(c!==a);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(s,a,c,p){return p?s.X===a.X&&s.Y===a.Y||s.X===c.X&&s.Y===c.Y||s.X>a.X==s.X<c.X&&s.Y>a.Y==s.Y<c.Y&&$t.op_Equality($t.Int128Mul(s.X-a.X,c.Y-a.Y),$t.Int128Mul(c.X-a.X,s.Y-a.Y)):s.X===a.X&&s.Y===a.Y||s.X===c.X&&s.Y===c.Y||s.X>a.X==s.X<c.X&&s.Y>a.Y==s.Y<c.Y&&(s.X-a.X)*(c.Y-a.Y)===(c.X-a.X)*(s.Y-a.Y)},n.ClipperBase.prototype.PointOnPolygon=function(s,a,c){for(var p=a;;){if(this.PointOnLineSegment(s,p.Pt,p.Next.Pt,c))return!0;if(p=p.Next,p===a)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var s=arguments,a=s.length,c,p,x,I,U,Q,nt;return a===3?(c=s[0],p=s[1],nt=s[2],nt?$t.op_Equality($t.Int128Mul(c.Delta.Y,p.Delta.X),$t.Int128Mul(c.Delta.X,p.Delta.Y)):n.Cast_Int64(c.Delta.Y*p.Delta.X)===n.Cast_Int64(c.Delta.X*p.Delta.Y)):a===4?(x=s[0],I=s[1],U=s[2],nt=s[3],nt?$t.op_Equality($t.Int128Mul(x.Y-I.Y,I.X-U.X),$t.Int128Mul(x.X-I.X,I.Y-U.Y)):n.Cast_Int64((x.Y-I.Y)*(I.X-U.X))-n.Cast_Int64((x.X-I.X)*(I.Y-U.Y))===0):(x=s[0],I=s[1],U=s[2],Q=s[3],nt=s[4],nt?$t.op_Equality($t.Int128Mul(x.Y-I.Y,U.X-Q.X),$t.Int128Mul(x.X-I.X,U.Y-Q.Y)):n.Cast_Int64((x.Y-I.Y)*(U.X-Q.X))-n.Cast_Int64((x.X-I.X)*(U.Y-Q.Y))===0)},n.ClipperBase.SlopesEqual3=function(s,a,c){return c?$t.op_Equality($t.Int128Mul(s.Delta.Y,a.Delta.X),$t.Int128Mul(s.Delta.X,a.Delta.Y)):n.Cast_Int64(s.Delta.Y*a.Delta.X)===n.Cast_Int64(s.Delta.X*a.Delta.Y)},n.ClipperBase.SlopesEqual4=function(s,a,c,p){return p?$t.op_Equality($t.Int128Mul(s.Y-a.Y,a.X-c.X),$t.Int128Mul(s.X-a.X,a.Y-c.Y)):n.Cast_Int64((s.Y-a.Y)*(a.X-c.X))-n.Cast_Int64((s.X-a.X)*(a.Y-c.Y))===0},n.ClipperBase.SlopesEqual5=function(s,a,c,p,x){return x?$t.op_Equality($t.Int128Mul(s.Y-a.Y,c.X-p.X),$t.Int128Mul(s.X-a.X,c.Y-p.Y)):n.Cast_Int64((s.Y-a.Y)*(c.X-p.X))-n.Cast_Int64((s.X-a.X)*(c.Y-p.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var s=0,a=this.m_edges.length;s<a;++s){for(var c=0,p=this.m_edges[s].length;c<p;++c)this.m_edges[s][c]=null;n.Clear(this.m_edges[s])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var s=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=s}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(s,a){a.Value?(s.X>n.ClipperBase.hiRange||s.Y>n.ClipperBase.hiRange||-s.X>n.ClipperBase.hiRange||-s.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(s.X>n.ClipperBase.loRange||s.Y>n.ClipperBase.loRange||-s.X>n.ClipperBase.loRange||-s.Y>n.ClipperBase.loRange)&&(a.Value=!0,this.RangeTest(s,a))},n.ClipperBase.prototype.InitEdge=function(s,a,c,p){s.Next=a,s.Prev=c,s.Curr.X=p.X,s.Curr.Y=p.Y,n.use_xyz&&(s.Curr.Z=p.Z),s.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(s,a){s.Curr.Y>=s.Next.Curr.Y?(s.Bot.X=s.Curr.X,s.Bot.Y=s.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Curr.Z),s.Top.X=s.Next.Curr.X,s.Top.Y=s.Next.Curr.Y,n.use_xyz&&(s.Top.Z=s.Next.Curr.Z)):(s.Top.X=s.Curr.X,s.Top.Y=s.Curr.Y,n.use_xyz&&(s.Top.Z=s.Curr.Z),s.Bot.X=s.Next.Curr.X,s.Bot.Y=s.Next.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Next.Curr.Z)),this.SetDx(s),s.PolyTyp=a},n.ClipperBase.prototype.FindNextLocMin=function(s){for(var a;;){for(;n.IntPoint.op_Inequality(s.Bot,s.Prev.Bot)||n.IntPoint.op_Equality(s.Curr,s.Top);)s=s.Next;if(s.Dx!==n.ClipperBase.horizontal&&s.Prev.Dx!==n.ClipperBase.horizontal)break;for(;s.Prev.Dx===n.ClipperBase.horizontal;)s=s.Prev;for(a=s;s.Dx===n.ClipperBase.horizontal;)s=s.Next;if(s.Top.Y!==s.Prev.Bot.Y){a.Prev.Bot.X<s.Bot.X&&(s=a);break}}return s},n.ClipperBase.prototype.ProcessBound=function(s,a){var c,p=s,x;if(p.OutIdx===n.ClipperBase.Skip){if(s=p,a){for(;s.Top.Y===s.Next.Bot.Y;)s=s.Next;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Prev}else{for(;s.Top.Y===s.Prev.Bot.Y;)s=s.Prev;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Next}if(s===p)a?p=s.Next:p=s.Prev;else{a?s=p.Next:s=p.Prev;var I=new n.LocalMinima;I.Next=null,I.Y=s.Bot.Y,I.LeftBound=null,I.RightBound=s,s.WindDelta=0,p=this.ProcessBound(s,a),this.InsertLocalMinima(I)}return p}if(s.Dx===n.ClipperBase.horizontal&&(a?c=s.Prev:c=s.Next,c.Dx===n.ClipperBase.horizontal?c.Bot.X!==s.Bot.X&&c.Top.X!==s.Bot.X&&this.ReverseHorizontal(s):c.Bot.X!==s.Bot.X&&this.ReverseHorizontal(s)),c=s,a){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==n.ClipperBase.Skip;)p=p.Next;if(p.Dx===n.ClipperBase.horizontal&&p.Next.OutIdx!==n.ClipperBase.Skip){for(x=p;x.Prev.Dx===n.ClipperBase.horizontal;)x=x.Prev;x.Prev.Top.X>p.Next.Top.X&&(p=x.Prev)}for(;s!==p;)s.NextInLML=s.Next,s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),s=s.Next;s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==n.ClipperBase.Skip;)p=p.Prev;if(p.Dx===n.ClipperBase.horizontal&&p.Prev.OutIdx!==n.ClipperBase.Skip){for(x=p;x.Next.Dx===n.ClipperBase.horizontal;)x=x.Next;(x.Next.Top.X===p.Prev.Top.X||x.Next.Top.X>p.Prev.Top.X)&&(p=x.Next)}for(;s!==p;)s.NextInLML=s.Prev,s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),s=s.Prev;s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),p=p.Prev}return p},n.ClipperBase.prototype.AddPath=function(s,a,c){n.use_lines?!c&&a===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):c||n.Error("AddPath: Open paths have been disabled.");var p=s.length-1;if(c)for(;p>0&&n.IntPoint.op_Equality(s[p],s[0]);)--p;for(;p>0&&n.IntPoint.op_Equality(s[p],s[p-1]);)--p;if(c&&p<2||!c&&p<1)return!1;for(var x=new Array,I=0;I<=p;I++)x.push(new n.TEdge);var U=!0;x[1].Curr.X=s[1].X,x[1].Curr.Y=s[1].Y,n.use_xyz&&(x[1].Curr.Z=s[1].Z);var Q={Value:this.m_UseFullRange};this.RangeTest(s[0],Q),this.m_UseFullRange=Q.Value,Q.Value=this.m_UseFullRange,this.RangeTest(s[p],Q),this.m_UseFullRange=Q.Value,this.InitEdge(x[0],x[1],x[p],s[0]),this.InitEdge(x[p],x[0],x[p-1],s[p]);for(var I=p-1;I>=1;--I)Q.Value=this.m_UseFullRange,this.RangeTest(s[I],Q),this.m_UseFullRange=Q.Value,this.InitEdge(x[I],x[I+1],x[I-1],s[I]);for(var nt=x[0],ft=nt,Lt=nt;;){if(ft.Curr===ft.Next.Curr&&(c||ft.Next!==nt)){if(ft===ft.Next)break;ft===nt&&(nt=ft.Next),ft=this.RemoveEdge(ft),Lt=ft;continue}if(ft.Prev===ft.Next)break;if(c&&n.ClipperBase.SlopesEqual4(ft.Prev.Curr,ft.Curr,ft.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(ft.Prev.Curr,ft.Curr,ft.Next.Curr))){ft===nt&&(nt=ft.Next),ft=this.RemoveEdge(ft),ft=ft.Prev,Lt=ft;continue}if(ft=ft.Next,ft===Lt||!c&&ft.Next===nt)break}if(!c&&ft===ft.Next||c&&ft.Prev===ft.Next)return!1;c||(this.m_HasOpenPaths=!0,nt.Prev.OutIdx=n.ClipperBase.Skip),ft=nt;do this.InitEdge2(ft,a),ft=ft.Next,U&&ft.Curr.Y!==nt.Curr.Y&&(U=!1);while(ft!==nt);if(U){if(c)return!1;ft.Prev.OutIdx=n.ClipperBase.Skip;var Rt=new n.LocalMinima;for(Rt.Next=null,Rt.Y=ft.Bot.Y,Rt.LeftBound=null,Rt.RightBound=ft,Rt.RightBound.Side=n.EdgeSide.esRight,Rt.RightBound.WindDelta=0;ft.Bot.X!==ft.Prev.Top.X&&this.ReverseHorizontal(ft),ft.Next.OutIdx!==n.ClipperBase.Skip;)ft.NextInLML=ft.Next,ft=ft.Next;return this.InsertLocalMinima(Rt),this.m_edges.push(x),!0}this.m_edges.push(x);var Bt,ae=null;for(n.IntPoint.op_Equality(ft.Prev.Bot,ft.Prev.Top)&&(ft=ft.Next);ft=this.FindNextLocMin(ft),ft!==ae;){ae===null&&(ae=ft);var Rt=new n.LocalMinima;Rt.Next=null,Rt.Y=ft.Bot.Y,ft.Dx<ft.Prev.Dx?(Rt.LeftBound=ft.Prev,Rt.RightBound=ft,Bt=!1):(Rt.LeftBound=ft,Rt.RightBound=ft.Prev,Bt=!0),Rt.LeftBound.Side=n.EdgeSide.esLeft,Rt.RightBound.Side=n.EdgeSide.esRight,c?Rt.LeftBound.Next===Rt.RightBound?Rt.LeftBound.WindDelta=-1:Rt.LeftBound.WindDelta=1:Rt.LeftBound.WindDelta=0,Rt.RightBound.WindDelta=-Rt.LeftBound.WindDelta,ft=this.ProcessBound(Rt.LeftBound,Bt),ft.OutIdx===n.ClipperBase.Skip&&(ft=this.ProcessBound(ft,Bt));var ye=this.ProcessBound(Rt.RightBound,!Bt);ye.OutIdx===n.ClipperBase.Skip&&(ye=this.ProcessBound(ye,!Bt)),Rt.LeftBound.OutIdx===n.ClipperBase.Skip?Rt.LeftBound=null:Rt.RightBound.OutIdx===n.ClipperBase.Skip&&(Rt.RightBound=null),this.InsertLocalMinima(Rt),Bt||(ft=ye)}return!0},n.ClipperBase.prototype.AddPaths=function(s,a,c){for(var p=!1,x=0,I=s.length;x<I;++x)this.AddPath(s[x],a,c)&&(p=!0);return p},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(s,a,c){return n.IntPoint.op_Equality(s,c)||n.IntPoint.op_Equality(s,a)||n.IntPoint.op_Equality(c,a)?!1:s.X!==c.X?a.X>s.X==a.X<c.X:a.Y>s.Y==a.Y<c.Y},n.ClipperBase.prototype.RemoveEdge=function(s){s.Prev.Next=s.Next,s.Next.Prev=s.Prev;var a=s.Next;return s.Prev=null,a},n.ClipperBase.prototype.SetDx=function(s){s.Delta.X=s.Top.X-s.Bot.X,s.Delta.Y=s.Top.Y-s.Bot.Y,s.Delta.Y===0?s.Dx=n.ClipperBase.horizontal:s.Dx=s.Delta.X/s.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(s){if(this.m_MinimaList===null)this.m_MinimaList=s;else if(s.Y>=this.m_MinimaList.Y)s.Next=this.m_MinimaList,this.m_MinimaList=s;else{for(var a=this.m_MinimaList;a.Next!==null&&s.Y<a.Next.Y;)a=a.Next;s.Next=a.Next,a.Next=s}},n.ClipperBase.prototype.PopLocalMinima=function(s,a){return a.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===s?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(s){var a=s.Top.X;s.Top.X=s.Bot.X,s.Bot.X=a,n.use_xyz&&(a=s.Top.Z,s.Top.Z=s.Bot.Z,s.Bot.Z=a)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var s=this.m_MinimaList;s!==null;){this.InsertScanbeam(s.Y);var a=s.LeftBound;a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),a=s.RightBound,a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),s=s.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(s){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=s;else if(s>this.m_Scanbeam.Y){var a=new n.Scanbeam;a.Y=s,a.Next=this.m_Scanbeam,this.m_Scanbeam=a}else{for(var c=this.m_Scanbeam;c.Next!==null&&s<=c.Next.Y;)c=c.Next;if(s===c.Y)return;var p=new n.Scanbeam;p.Y=s,p.Next=c.Next,c.Next=p}},n.ClipperBase.prototype.PopScanbeam=function(s){return this.m_Scanbeam===null?(s.v=0,!1):(s.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var s=new n.OutRec;return s.Idx=n.ClipperBase.Unassigned,s.IsHole=!1,s.IsOpen=!1,s.FirstLeft=null,s.Pts=null,s.BottomPt=null,s.PolyNode=null,this.m_PolyOuts.push(s),s.Idx=this.m_PolyOuts.length-1,s},n.ClipperBase.prototype.DisposeOutRec=function(s){var a=this.m_PolyOuts[s];a.Pts=null,a=null,this.m_PolyOuts[s]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(s){s.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var a=s.PrevInAEL,c=s.NextInAEL;return s.NextInLML.OutIdx=s.OutIdx,a!==null?a.NextInAEL=s.NextInLML:this.m_ActiveEdges=s.NextInLML,c!==null&&(c.PrevInAEL=s.NextInLML),s.NextInLML.Side=s.Side,s.NextInLML.WindDelta=s.WindDelta,s.NextInLML.WindCnt=s.WindCnt,s.NextInLML.WindCnt2=s.WindCnt2,s=s.NextInLML,s.Curr.X=s.Bot.X,s.Curr.Y=s.Bot.Y,s.PrevInAEL=a,s.NextInAEL=c,n.ClipperBase.IsHorizontal(s)||this.InsertScanbeam(s.Top.Y),s},n.ClipperBase.prototype.SwapPositionsInAEL=function(s,a){if(!(s.NextInAEL===s.PrevInAEL||a.NextInAEL===a.PrevInAEL)){if(s.NextInAEL===a){var c=a.NextInAEL;c!==null&&(c.PrevInAEL=s);var p=s.PrevInAEL;p!==null&&(p.NextInAEL=a),a.PrevInAEL=p,a.NextInAEL=s,s.PrevInAEL=a,s.NextInAEL=c}else if(a.NextInAEL===s){var x=s.NextInAEL;x!==null&&(x.PrevInAEL=a);var I=a.PrevInAEL;I!==null&&(I.NextInAEL=s),s.PrevInAEL=I,s.NextInAEL=a,a.PrevInAEL=s,a.NextInAEL=x}else{var U=s.NextInAEL,Q=s.PrevInAEL;s.NextInAEL=a.NextInAEL,s.NextInAEL!==null&&(s.NextInAEL.PrevInAEL=s),s.PrevInAEL=a.PrevInAEL,s.PrevInAEL!==null&&(s.PrevInAEL.NextInAEL=s),a.NextInAEL=U,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=a),a.PrevInAEL=Q,a.PrevInAEL!==null&&(a.PrevInAEL.NextInAEL=a)}s.PrevInAEL===null?this.m_ActiveEdges=s:a.PrevInAEL===null&&(this.m_ActiveEdges=a)}},n.ClipperBase.prototype.DeleteFromAEL=function(s){var a=s.PrevInAEL,c=s.NextInAEL;a===null&&c===null&&s!==this.m_ActiveEdges||(a!==null?a.NextInAEL=c:this.m_ActiveEdges=c,c!==null&&(c.PrevInAEL=a),s.NextInAEL=null,s.PrevInAEL=null)},n.Clipper=function(s){typeof s>"u"&&(s=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&s)!==0,this.StrictlySimple=(2&s)!==0,this.PreserveCollinear=(4&s)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(s){var a=new n.Maxima;if(a.X=s,this.m_Maxima===null)this.m_Maxima=a,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(s<this.m_Maxima.X)a.Next=this.m_Maxima,a.Prev=null,this.m_Maxima=a;else{for(var c=this.m_Maxima;c.Next!==null&&s>=c.Next.X;)c=c.Next;if(s===c.X)return;a.Next=c.Next,a.Prev=c,c.Next!==null&&(c.Next.Prev=a),c.Next=a}},n.Clipper.prototype.Execute=function(){var s=arguments,a=s.length,c=s[1]instanceof n.PolyTree;if(a===4&&!c){var p=s[0],x=s[1],I=s[2],U=s[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(x),this.m_SubjFillType=I,this.m_ClipFillType=U,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var Q=this.ExecuteInternal();Q&&this.BuildResult(x)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Q}else if(a===4&&c){var p=s[0],nt=s[1],I=s[2],U=s[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=I,this.m_ClipFillType=U,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var Q=this.ExecuteInternal();Q&&this.BuildResult2(nt)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Q}else if(a===2&&!c){var p=s[0],x=s[1];return this.Execute(p,x,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(a===2&&c){var p=s[0],nt=s[1];return this.Execute(p,nt,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(s){if(!(s.FirstLeft===null||s.IsHole!==s.FirstLeft.IsHole&&s.FirstLeft.Pts!==null)){for(var a=s.FirstLeft;a!==null&&(a.IsHole===s.IsHole||a.Pts===null);)a=a.FirstLeft;s.FirstLeft=a}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var s={},a={};if(!this.PopScanbeam(s))return!1;for(this.InsertLocalMinimaIntoAEL(s.v);this.PopScanbeam(a)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(a.v))return!1;this.ProcessEdgesAtTopOfScanbeam(a.v),s.v=a.v,this.InsertLocalMinimaIntoAEL(s.v)}var c,p,x;for(p=0,x=this.m_PolyOuts.length;p<x;p++)c=this.m_PolyOuts[p],!(c.Pts===null||c.IsOpen)&&(c.IsHole^this.ReverseSolution)==this.Area$1(c)>0&&this.ReversePolyPtLinks(c.Pts);for(this.JoinCommonEdges(),p=0,x=this.m_PolyOuts.length;p<x;p++)c=this.m_PolyOuts[p],c.Pts!==null&&(c.IsOpen?this.FixupOutPolyline(c):this.FixupOutPolygon(c));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var s=0,a=this.m_PolyOuts.length;s<a;++s)this.DisposeOutRec(s);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(s,a,c){var p=new n.Join;p.OutPt1=s,p.OutPt2=a,p.OffPt.X=c.X,p.OffPt.Y=c.Y,n.use_xyz&&(p.OffPt.Z=c.Z),this.m_Joins.push(p)},n.Clipper.prototype.AddGhostJoin=function(s,a){var c=new n.Join;c.OutPt1=s,c.OffPt.X=a.X,c.OffPt.Y=a.Y,n.use_xyz&&(c.OffPt.Z=a.Z),this.m_GhostJoins.push(c)},n.Clipper.prototype.SetZ=function(s,a,c){if(this.ZFillFunction!==null){if(s.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(s,a.Bot)?s.Z=a.Bot.Z:n.IntPoint.op_Equality(s,a.Top)?s.Z=a.Top.Z:n.IntPoint.op_Equality(s,c.Bot)?s.Z=c.Bot.Z:n.IntPoint.op_Equality(s,c.Top)?s.Z=c.Top.Z:this.ZFillFunction(a.Bot,a.Top,c.Bot,c.Top,s)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(s){for(var a={},c,p;this.PopLocalMinima(s,a);){c=a.v.LeftBound,p=a.v.RightBound;var x=null;if(c===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(x=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(c,null),this.SetWindingCount(c),this.IsContributing(c)&&(x=this.AddOutPt(c,c.Bot)),this.InsertScanbeam(c.Top.Y)):(this.InsertEdgeIntoAEL(c,null),this.InsertEdgeIntoAEL(p,c),this.SetWindingCount(c),p.WindCnt=c.WindCnt,p.WindCnt2=c.WindCnt2,this.IsContributing(c)&&(x=this.AddLocalMinPoly(c,p,c.Bot)),this.InsertScanbeam(c.Top.Y)),p!==null&&(n.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(c===null||p===null)){if(x!==null&&n.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var I=0,U=this.m_GhostJoins.length;I<U;I++){var Q=this.m_GhostJoins[I];this.HorzSegmentsOverlap(Q.OutPt1.Pt.X,Q.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin(Q.OutPt1,x,Q.OffPt)}if(c.OutIdx>=0&&c.PrevInAEL!==null&&c.PrevInAEL.Curr.X===c.Bot.X&&c.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(c.PrevInAEL.Curr,c.PrevInAEL.Top,c.Curr,c.Top,this.m_UseFullRange)&&c.WindDelta!==0&&c.PrevInAEL.WindDelta!==0){var nt=this.AddOutPt(c.PrevInAEL,c.Bot);this.AddJoin(x,nt,c.Top)}if(c.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var nt=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(x,nt,p.Top)}var ft=c.NextInAEL;if(ft!==null)for(;ft!==p;)this.IntersectEdges(p,ft,c.Curr),ft=ft.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(s,a){if(this.m_ActiveEdges===null)s.PrevInAEL=null,s.NextInAEL=null,this.m_ActiveEdges=s;else if(a===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,s))s.PrevInAEL=null,s.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=s,this.m_ActiveEdges=s;else{for(a===null&&(a=this.m_ActiveEdges);a.NextInAEL!==null&&!this.E2InsertsBeforeE1(a.NextInAEL,s);)a=a.NextInAEL;s.NextInAEL=a.NextInAEL,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=s),s.PrevInAEL=a,a.NextInAEL=s}},n.Clipper.prototype.E2InsertsBeforeE1=function(s,a){return a.Curr.X===s.Curr.X?a.Top.Y>s.Top.Y?a.Top.X<n.Clipper.TopX(s,a.Top.Y):s.Top.X>n.Clipper.TopX(a,s.Top.Y):a.Curr.X<s.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(s){var a,c;switch(s.PolyTyp===n.PolyType.ptSubject?(a=this.m_SubjFillType,c=this.m_ClipFillType):(a=this.m_ClipFillType,c=this.m_SubjFillType),a){case n.PolyFillType.pftEvenOdd:if(s.WindDelta===0&&s.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(s.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(s.WindCnt!==1)return!1;break;default:if(s.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctUnion:switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}case n.ClipType.ctDifference:if(s.PolyTyp===n.PolyType.ptSubject)switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctXor:if(s.WindDelta===0)switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(s){for(var a=s.PrevInAEL;a!==null&&(a.PolyTyp!==s.PolyTyp||a.WindDelta===0);)a=a.PrevInAEL;if(a===null){var c=s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;s.WindDelta===0?s.WindCnt=c===n.PolyFillType.pftNegative?-1:1:s.WindCnt=s.WindDelta,s.WindCnt2=0,a=this.m_ActiveEdges}else if(s.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)s.WindCnt=1,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;else if(this.IsEvenOddFillType(s)){if(s.WindDelta===0){for(var p=!0,x=a.PrevInAEL;x!==null;)x.PolyTyp===a.PolyTyp&&x.WindDelta!==0&&(p=!p),x=x.PrevInAEL;s.WindCnt=p?0:1}else s.WindCnt=s.WindDelta;s.WindCnt2=a.WindCnt2,a=a.NextInAEL}else a.WindCnt*a.WindDelta<0?Math.abs(a.WindCnt)>1?a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta:s.WindCnt=s.WindDelta===0?1:s.WindDelta:s.WindDelta===0?s.WindCnt=a.WindCnt<0?a.WindCnt-1:a.WindCnt+1:a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;if(this.IsEvenOddAltFillType(s))for(;a!==s;)a.WindDelta!==0&&(s.WindCnt2=s.WindCnt2===0?1:0),a=a.NextInAEL;else for(;a!==s;)s.WindCnt2+=a.WindDelta,a=a.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(s){this.m_SortedEdges===null?(this.m_SortedEdges=s,s.PrevInSEL=null,s.NextInSEL=null):(s.NextInSEL=this.m_SortedEdges,s.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=s,this.m_SortedEdges=s)},n.Clipper.prototype.PopEdgeFromSEL=function(s){if(s.v=this.m_SortedEdges,s.v===null)return!1;var a=s.v;return this.m_SortedEdges=s.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),a.NextInSEL=null,a.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var s=this.m_ActiveEdges;for(this.m_SortedEdges=s;s!==null;)s.PrevInSEL=s.PrevInAEL,s.NextInSEL=s.NextInAEL,s=s.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(s,a){if(!(s.NextInSEL===null&&s.PrevInSEL===null)&&!(a.NextInSEL===null&&a.PrevInSEL===null)){if(s.NextInSEL===a){var c=a.NextInSEL;c!==null&&(c.PrevInSEL=s);var p=s.PrevInSEL;p!==null&&(p.NextInSEL=a),a.PrevInSEL=p,a.NextInSEL=s,s.PrevInSEL=a,s.NextInSEL=c}else if(a.NextInSEL===s){var c=s.NextInSEL;c!==null&&(c.PrevInSEL=a);var p=a.PrevInSEL;p!==null&&(p.NextInSEL=s),s.PrevInSEL=p,s.NextInSEL=a,a.PrevInSEL=s,a.NextInSEL=c}else{var c=s.NextInSEL,p=s.PrevInSEL;s.NextInSEL=a.NextInSEL,s.NextInSEL!==null&&(s.NextInSEL.PrevInSEL=s),s.PrevInSEL=a.PrevInSEL,s.PrevInSEL!==null&&(s.PrevInSEL.NextInSEL=s),a.NextInSEL=c,a.NextInSEL!==null&&(a.NextInSEL.PrevInSEL=a),a.PrevInSEL=p,a.PrevInSEL!==null&&(a.PrevInSEL.NextInSEL=a)}s.PrevInSEL===null?this.m_SortedEdges=s:a.PrevInSEL===null&&(this.m_SortedEdges=a)}},n.Clipper.prototype.AddLocalMaxPoly=function(s,a,c){this.AddOutPt(s,c),a.WindDelta===0&&this.AddOutPt(a,c),s.OutIdx===a.OutIdx?(s.OutIdx=-1,a.OutIdx=-1):s.OutIdx<a.OutIdx?this.AppendPolygon(s,a):this.AppendPolygon(a,s)},n.Clipper.prototype.AddLocalMinPoly=function(s,a,c){var p,x,I;if(n.ClipperBase.IsHorizontal(a)||s.Dx>a.Dx?(p=this.AddOutPt(s,c),a.OutIdx=s.OutIdx,s.Side=n.EdgeSide.esLeft,a.Side=n.EdgeSide.esRight,x=s,x.PrevInAEL===a?I=a.PrevInAEL:I=x.PrevInAEL):(p=this.AddOutPt(a,c),s.OutIdx=a.OutIdx,s.Side=n.EdgeSide.esRight,a.Side=n.EdgeSide.esLeft,x=a,x.PrevInAEL===s?I=s.PrevInAEL:I=x.PrevInAEL),I!==null&&I.OutIdx>=0&&I.Top.Y<c.Y&&x.Top.Y<c.Y){var U=n.Clipper.TopX(I,c.Y),Q=n.Clipper.TopX(x,c.Y);if(U===Q&&x.WindDelta!==0&&I.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(U,c.Y),I.Top,new n.IntPoint2(Q,c.Y),x.Top,this.m_UseFullRange)){var nt=this.AddOutPt(I,c);this.AddJoin(p,nt,x.Top)}}return p},n.Clipper.prototype.AddOutPt=function(s,a){if(s.OutIdx<0){var c=this.CreateOutRec();c.IsOpen=s.WindDelta===0;var p=new n.OutPt;return c.Pts=p,p.Idx=c.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=p,p.Prev=p,c.IsOpen||this.SetHoleState(s,c),s.OutIdx=c.Idx,p}else{var c=this.m_PolyOuts[s.OutIdx],x=c.Pts,I=s.Side===n.EdgeSide.esLeft;if(I&&n.IntPoint.op_Equality(a,x.Pt))return x;if(!I&&n.IntPoint.op_Equality(a,x.Prev.Pt))return x.Prev;var p=new n.OutPt;return p.Idx=c.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=x,p.Prev=x.Prev,p.Prev.Next=p,x.Prev=p,I&&(c.Pts=p),p}},n.Clipper.prototype.GetLastOutPt=function(s){var a=this.m_PolyOuts[s.OutIdx];return s.Side===n.EdgeSide.esLeft?a.Pts:a.Pts.Prev},n.Clipper.prototype.SwapPoints=function(s,a){var c=new n.IntPoint1(s.Value);s.Value.X=a.Value.X,s.Value.Y=a.Value.Y,n.use_xyz&&(s.Value.Z=a.Value.Z),a.Value.X=c.X,a.Value.Y=c.Y,n.use_xyz&&(a.Value.Z=c.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(s,a,c,p){var x;return s>a&&(x=s,s=a,a=x),c>p&&(x=c,c=p,p=x),s<p&&c<a},n.Clipper.prototype.SetHoleState=function(s,a){for(var c=s.PrevInAEL,p=null;c!==null;)c.OutIdx>=0&&c.WindDelta!==0&&(p===null?p=c:p.OutIdx===c.OutIdx&&(p=null)),c=c.PrevInAEL;p===null?(a.FirstLeft=null,a.IsHole=!1):(a.FirstLeft=this.m_PolyOuts[p.OutIdx],a.IsHole=!a.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(s,a){return s.Y===a.Y?n.ClipperBase.horizontal:(a.X-s.X)/(a.Y-s.Y)},n.Clipper.prototype.FirstIsBottomPt=function(s,a){for(var c=s.Prev;n.IntPoint.op_Equality(c.Pt,s.Pt)&&c!==s;)c=c.Prev;var p=Math.abs(this.GetDx(s.Pt,c.Pt));for(c=s.Next;n.IntPoint.op_Equality(c.Pt,s.Pt)&&c!==s;)c=c.Next;var x=Math.abs(this.GetDx(s.Pt,c.Pt));for(c=a.Prev;n.IntPoint.op_Equality(c.Pt,a.Pt)&&c!==a;)c=c.Prev;var I=Math.abs(this.GetDx(a.Pt,c.Pt));for(c=a.Next;n.IntPoint.op_Equality(c.Pt,a.Pt)&&c!==a;)c=c.Next;var U=Math.abs(this.GetDx(a.Pt,c.Pt));return Math.max(p,x)===Math.max(I,U)&&Math.min(p,x)===Math.min(I,U)?this.Area(s)>0:p>=I&&p>=U||x>=I&&x>=U},n.Clipper.prototype.GetBottomPt=function(s){for(var a=null,c=s.Next;c!==s;)c.Pt.Y>s.Pt.Y?(s=c,a=null):c.Pt.Y===s.Pt.Y&&c.Pt.X<=s.Pt.X&&(c.Pt.X<s.Pt.X?(a=null,s=c):c.Next!==s&&c.Prev!==s&&(a=c)),c=c.Next;if(a!==null)for(;a!==c;)for(this.FirstIsBottomPt(c,a)||(s=a),a=a.Next;n.IntPoint.op_Inequality(a.Pt,s.Pt);)a=a.Next;return s},n.Clipper.prototype.GetLowermostRec=function(s,a){s.BottomPt===null&&(s.BottomPt=this.GetBottomPt(s.Pts)),a.BottomPt===null&&(a.BottomPt=this.GetBottomPt(a.Pts));var c=s.BottomPt,p=a.BottomPt;return c.Pt.Y>p.Pt.Y?s:c.Pt.Y<p.Pt.Y?a:c.Pt.X<p.Pt.X?s:c.Pt.X>p.Pt.X||c.Next===c?a:p.Next===p||this.FirstIsBottomPt(c,p)?s:a},n.Clipper.prototype.OutRec1RightOfOutRec2=function(s,a){do if(s=s.FirstLeft,s===a)return!0;while(s!==null);return!1},n.Clipper.prototype.GetOutRec=function(s){for(var a=this.m_PolyOuts[s];a!==this.m_PolyOuts[a.Idx];)a=this.m_PolyOuts[a.Idx];return a},n.Clipper.prototype.AppendPolygon=function(s,a){var c=this.m_PolyOuts[s.OutIdx],p=this.m_PolyOuts[a.OutIdx],x;this.OutRec1RightOfOutRec2(c,p)?x=p:this.OutRec1RightOfOutRec2(p,c)?x=c:x=this.GetLowermostRec(c,p);var I=c.Pts,U=I.Prev,Q=p.Pts,nt=Q.Prev;s.Side===n.EdgeSide.esLeft?a.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(Q),Q.Next=I,I.Prev=Q,U.Next=nt,nt.Prev=U,c.Pts=nt):(nt.Next=I,I.Prev=nt,Q.Prev=U,U.Next=Q,c.Pts=Q):a.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(Q),U.Next=nt,nt.Prev=U,Q.Next=I,I.Prev=Q):(U.Next=Q,Q.Prev=U,I.Prev=nt,nt.Next=I),c.BottomPt=null,x===p&&(p.FirstLeft!==c&&(c.FirstLeft=p.FirstLeft),c.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=c;var ft=s.OutIdx,Lt=a.OutIdx;s.OutIdx=-1,a.OutIdx=-1;for(var Rt=this.m_ActiveEdges;Rt!==null;){if(Rt.OutIdx===Lt){Rt.OutIdx=ft,Rt.Side=s.Side;break}Rt=Rt.NextInAEL}p.Idx=c.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(s){if(s!==null){var a,c;a=s;do c=a.Next,a.Next=a.Prev,a.Prev=c,a=c;while(a!==s)}},n.Clipper.SwapSides=function(s,a){var c=s.Side;s.Side=a.Side,a.Side=c},n.Clipper.SwapPolyIndexes=function(s,a){var c=s.OutIdx;s.OutIdx=a.OutIdx,a.OutIdx=c},n.Clipper.prototype.IntersectEdges=function(s,a,c){var p=s.OutIdx>=0,x=a.OutIdx>=0;if(n.use_xyz&&this.SetZ(c,s,a),n.use_lines&&(s.WindDelta===0||a.WindDelta===0)){if(s.WindDelta===0&&a.WindDelta===0)return;s.PolyTyp===a.PolyTyp&&s.WindDelta!==a.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?s.WindDelta===0?x&&(this.AddOutPt(s,c),p&&(s.OutIdx=-1)):p&&(this.AddOutPt(a,c),x&&(a.OutIdx=-1)):s.PolyTyp!==a.PolyTyp&&(s.WindDelta===0&&Math.abs(a.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||a.WindCnt2===0)?(this.AddOutPt(s,c),p&&(s.OutIdx=-1)):a.WindDelta===0&&Math.abs(s.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||s.WindCnt2===0)&&(this.AddOutPt(a,c),x&&(a.OutIdx=-1)));return}if(s.PolyTyp===a.PolyTyp)if(this.IsEvenOddFillType(s)){var I=s.WindCnt;s.WindCnt=a.WindCnt,a.WindCnt=I}else s.WindCnt+a.WindDelta===0?s.WindCnt=-s.WindCnt:s.WindCnt+=a.WindDelta,a.WindCnt-s.WindDelta===0?a.WindCnt=-a.WindCnt:a.WindCnt-=s.WindDelta;else this.IsEvenOddFillType(a)?s.WindCnt2=s.WindCnt2===0?1:0:s.WindCnt2+=a.WindDelta,this.IsEvenOddFillType(s)?a.WindCnt2=a.WindCnt2===0?1:0:a.WindCnt2-=s.WindDelta;var U,Q,nt,ft;s.PolyTyp===n.PolyType.ptSubject?(U=this.m_SubjFillType,nt=this.m_ClipFillType):(U=this.m_ClipFillType,nt=this.m_SubjFillType),a.PolyTyp===n.PolyType.ptSubject?(Q=this.m_SubjFillType,ft=this.m_ClipFillType):(Q=this.m_ClipFillType,ft=this.m_SubjFillType);var Lt,Rt;switch(U){case n.PolyFillType.pftPositive:Lt=s.WindCnt;break;case n.PolyFillType.pftNegative:Lt=-s.WindCnt;break;default:Lt=Math.abs(s.WindCnt);break}switch(Q){case n.PolyFillType.pftPositive:Rt=a.WindCnt;break;case n.PolyFillType.pftNegative:Rt=-a.WindCnt;break;default:Rt=Math.abs(a.WindCnt);break}if(p&&x)Lt!==0&&Lt!==1||Rt!==0&&Rt!==1||s.PolyTyp!==a.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(s,a,c):(this.AddOutPt(s,c),this.AddOutPt(a,c),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(p)(Rt===0||Rt===1)&&(this.AddOutPt(s,c),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(x)(Lt===0||Lt===1)&&(this.AddOutPt(a,c),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if((Lt===0||Lt===1)&&(Rt===0||Rt===1)){var Bt,ae;switch(nt){case n.PolyFillType.pftPositive:Bt=s.WindCnt2;break;case n.PolyFillType.pftNegative:Bt=-s.WindCnt2;break;default:Bt=Math.abs(s.WindCnt2);break}switch(ft){case n.PolyFillType.pftPositive:ae=a.WindCnt2;break;case n.PolyFillType.pftNegative:ae=-a.WindCnt2;break;default:ae=Math.abs(a.WindCnt2);break}if(s.PolyTyp!==a.PolyTyp)this.AddLocalMinPoly(s,a,c);else if(Lt===1&&Rt===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Bt>0&&ae>0&&this.AddLocalMinPoly(s,a,c);break;case n.ClipType.ctUnion:Bt<=0&&ae<=0&&this.AddLocalMinPoly(s,a,c);break;case n.ClipType.ctDifference:(s.PolyTyp===n.PolyType.ptClip&&Bt>0&&ae>0||s.PolyTyp===n.PolyType.ptSubject&&Bt<=0&&ae<=0)&&this.AddLocalMinPoly(s,a,c);break;case n.ClipType.ctXor:this.AddLocalMinPoly(s,a,c);break}else n.Clipper.SwapSides(s,a)}},n.Clipper.prototype.DeleteFromSEL=function(s){var a=s.PrevInSEL,c=s.NextInSEL;a===null&&c===null&&s!==this.m_SortedEdges||(a!==null?a.NextInSEL=c:this.m_SortedEdges=c,c!==null&&(c.PrevInSEL=a),s.NextInSEL=null,s.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var s={};this.PopEdgeFromSEL(s);)this.ProcessHorizontal(s.v)},n.Clipper.prototype.GetHorzDirection=function(s,a){s.Bot.X<s.Top.X?(a.Left=s.Bot.X,a.Right=s.Top.X,a.Dir=n.Direction.dLeftToRight):(a.Left=s.Top.X,a.Right=s.Bot.X,a.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(s){var a={Dir:null,Left:null,Right:null};this.GetHorzDirection(s,a);for(var c=a.Dir,p=a.Left,x=a.Right,I=s.WindDelta===0,U=s,Q=null;U.NextInLML!==null&&n.ClipperBase.IsHorizontal(U.NextInLML);)U=U.NextInLML;U.NextInLML===null&&(Q=this.GetMaximaPair(U));var nt=this.m_Maxima;if(nt!==null)if(c===n.Direction.dLeftToRight){for(;nt!==null&&nt.X<=s.Bot.X;)nt=nt.Next;nt!==null&&nt.X>=U.Top.X&&(nt=null)}else{for(;nt.Next!==null&&nt.Next.X<s.Bot.X;)nt=nt.Next;nt.X<=U.Top.X&&(nt=null)}for(var ft=null;;){for(var Lt=s===U,Rt=this.GetNextInAEL(s,c);Rt!==null;){if(nt!==null)if(c===n.Direction.dLeftToRight)for(;nt!==null&&nt.X<Rt.Curr.X;)s.OutIdx>=0&&!I&&this.AddOutPt(s,new n.IntPoint2(nt.X,s.Bot.Y)),nt=nt.Next;else for(;nt!==null&&nt.X>Rt.Curr.X;)s.OutIdx>=0&&!I&&this.AddOutPt(s,new n.IntPoint2(nt.X,s.Bot.Y)),nt=nt.Prev;if(c===n.Direction.dLeftToRight&&Rt.Curr.X>x||c===n.Direction.dRightToLeft&&Rt.Curr.X<p||Rt.Curr.X===s.Top.X&&s.NextInLML!==null&&Rt.Dx<s.NextInLML.Dx)break;if(s.OutIdx>=0&&!I){n.use_xyz&&(c===n.Direction.dLeftToRight?this.SetZ(Rt.Curr,s,Rt):this.SetZ(Rt.Curr,Rt,s)),ft=this.AddOutPt(s,Rt.Curr);for(var Bt=this.m_SortedEdges;Bt!==null;){if(Bt.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,Bt.Bot.X,Bt.Top.X)){var ae=this.GetLastOutPt(Bt);this.AddJoin(ae,ft,Bt.Top)}Bt=Bt.NextInSEL}this.AddGhostJoin(ft,s.Bot)}if(Rt===Q&&Lt){s.OutIdx>=0&&this.AddLocalMaxPoly(s,Q,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(Q);return}if(c===n.Direction.dLeftToRight){var ye=new n.IntPoint2(Rt.Curr.X,s.Curr.Y);this.IntersectEdges(s,Rt,ye)}else{var ye=new n.IntPoint2(Rt.Curr.X,s.Curr.Y);this.IntersectEdges(Rt,s,ye)}var we=this.GetNextInAEL(Rt,c);this.SwapPositionsInAEL(s,Rt),Rt=we}if(s.NextInLML===null||!n.ClipperBase.IsHorizontal(s.NextInLML))break;s=this.UpdateEdgeIntoAEL(s),s.OutIdx>=0&&this.AddOutPt(s,s.Bot),a={Dir:c,Left:p,Right:x},this.GetHorzDirection(s,a),c=a.Dir,p=a.Left,x=a.Right}if(s.OutIdx>=0&&ft===null){ft=this.GetLastOutPt(s);for(var Bt=this.m_SortedEdges;Bt!==null;){if(Bt.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,Bt.Bot.X,Bt.Top.X)){var ae=this.GetLastOutPt(Bt);this.AddJoin(ae,ft,Bt.Top)}Bt=Bt.NextInSEL}this.AddGhostJoin(ft,s.Top)}if(s.NextInLML!==null)if(s.OutIdx>=0){if(ft=this.AddOutPt(s,s.Top),s=this.UpdateEdgeIntoAEL(s),s.WindDelta===0)return;var He=s.PrevInAEL,we=s.NextInAEL;if(He!==null&&He.Curr.X===s.Bot.X&&He.Curr.Y===s.Bot.Y&&He.WindDelta===0&&He.OutIdx>=0&&He.Curr.Y>He.Top.Y&&n.ClipperBase.SlopesEqual3(s,He,this.m_UseFullRange)){var ae=this.AddOutPt(He,s.Bot);this.AddJoin(ft,ae,s.Top)}else if(we!==null&&we.Curr.X===s.Bot.X&&we.Curr.Y===s.Bot.Y&&we.WindDelta!==0&&we.OutIdx>=0&&we.Curr.Y>we.Top.Y&&n.ClipperBase.SlopesEqual3(s,we,this.m_UseFullRange)){var ae=this.AddOutPt(we,s.Bot);this.AddJoin(ft,ae,s.Top)}}else s=this.UpdateEdgeIntoAEL(s);else s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s)},n.Clipper.prototype.GetNextInAEL=function(s,a){return a===n.Direction.dLeftToRight?s.NextInAEL:s.PrevInAEL},n.Clipper.prototype.IsMinima=function(s){return s!==null&&s.Prev.NextInLML!==s&&s.Next.NextInLML!==s},n.Clipper.prototype.IsMaxima=function(s,a){return s!==null&&s.Top.Y===a&&s.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(s,a){return s.Top.Y===a&&s.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(s){return n.IntPoint.op_Equality(s.Next.Top,s.Top)&&s.Next.NextInLML===null?s.Next:n.IntPoint.op_Equality(s.Prev.Top,s.Top)&&s.Prev.NextInLML===null?s.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(s){var a=this.GetMaximaPair(s);return a===null||a.OutIdx===n.ClipperBase.Skip||a.NextInAEL===a.PrevInAEL&&!n.ClipperBase.IsHorizontal(a)?null:a},n.Clipper.prototype.ProcessIntersections=function(s){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(s),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(s){if(this.m_ActiveEdges!==null){var a=this.m_ActiveEdges;for(this.m_SortedEdges=a;a!==null;)a.PrevInSEL=a.PrevInAEL,a.NextInSEL=a.NextInAEL,a.Curr.X=n.Clipper.TopX(a,s),a=a.NextInAEL;for(var c=!0;c&&this.m_SortedEdges!==null;){for(c=!1,a=this.m_SortedEdges;a.NextInSEL!==null;){var p=a.NextInSEL,x=new n.IntPoint0;if(a.Curr.X>p.Curr.X){this.IntersectPoint(a,p,x),x.Y<s&&(x=new n.IntPoint2(n.Clipper.TopX(a,s),s));var I=new n.IntersectNode;I.Edge1=a,I.Edge2=p,I.Pt.X=x.X,I.Pt.Y=x.Y,n.use_xyz&&(I.Pt.Z=x.Z),this.m_IntersectList.push(I),this.SwapPositionsInSEL(a,p),c=!0}else a=p}if(a.PrevInSEL!==null)a.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(s){return s.Edge1.NextInSEL===s.Edge2||s.Edge1.PrevInSEL===s.Edge2},n.Clipper.IntersectNodeSort=function(s,a){return a.Pt.Y-s.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var s=this.m_IntersectList.length,a=0;a<s;a++){if(!this.EdgesAdjacent(this.m_IntersectList[a])){for(var c=a+1;c<s&&!this.EdgesAdjacent(this.m_IntersectList[c]);)c++;if(c===s)return!1;var p=this.m_IntersectList[a];this.m_IntersectList[a]=this.m_IntersectList[c],this.m_IntersectList[c]=p}this.SwapPositionsInSEL(this.m_IntersectList[a].Edge1,this.m_IntersectList[a].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var s=0,a=this.m_IntersectList.length;s<a;s++){var c=this.m_IntersectList[s];this.IntersectEdges(c.Edge1,c.Edge2,c.Pt),this.SwapPositionsInAEL(c.Edge1,c.Edge2)}this.m_IntersectList.length=0};var ee=function(s){return s<0?Math.ceil(s-.5):Math.round(s)},Oe=function(s){return s<0?Math.ceil(s-.5):Math.floor(s+.5)},qe=function(s){return s<0?-Math.round(Math.abs(s)):Math.round(s)},Re=function(s){return s<0?(s-=.5,s<-2147483648?Math.ceil(s):s|0):(s+=.5,s>2147483647?Math.floor(s):s|0)};r.msie?n.Clipper.Round=ee:r.chromium?n.Clipper.Round=qe:r.safari?n.Clipper.Round=Re:n.Clipper.Round=Oe,n.Clipper.TopX=function(s,a){return a===s.Top.Y?s.Top.X:s.Bot.X+n.Clipper.Round(s.Dx*(a-s.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(s,a,c){c.X=0,c.Y=0;var p,x;if(s.Dx===a.Dx){c.Y=s.Curr.Y,c.X=n.Clipper.TopX(s,c.Y);return}if(s.Delta.X===0)c.X=s.Bot.X,n.ClipperBase.IsHorizontal(a)?c.Y=a.Bot.Y:(x=a.Bot.Y-a.Bot.X/a.Dx,c.Y=n.Clipper.Round(c.X/a.Dx+x));else if(a.Delta.X===0)c.X=a.Bot.X,n.ClipperBase.IsHorizontal(s)?c.Y=s.Bot.Y:(p=s.Bot.Y-s.Bot.X/s.Dx,c.Y=n.Clipper.Round(c.X/s.Dx+p));else{p=s.Bot.X-s.Bot.Y*s.Dx,x=a.Bot.X-a.Bot.Y*a.Dx;var I=(x-p)/(s.Dx-a.Dx);c.Y=n.Clipper.Round(I),Math.abs(s.Dx)<Math.abs(a.Dx)?c.X=n.Clipper.Round(s.Dx*I+p):c.X=n.Clipper.Round(a.Dx*I+x)}if(c.Y<s.Top.Y||c.Y<a.Top.Y){if(s.Top.Y>a.Top.Y)return c.Y=s.Top.Y,c.X=n.Clipper.TopX(a,s.Top.Y),c.X<s.Top.X;c.Y=a.Top.Y,Math.abs(s.Dx)<Math.abs(a.Dx)?c.X=n.Clipper.TopX(s,c.Y):c.X=n.Clipper.TopX(a,c.Y)}c.Y>s.Curr.Y&&(c.Y=s.Curr.Y,Math.abs(s.Dx)>Math.abs(a.Dx)?c.X=n.Clipper.TopX(a,c.Y):c.X=n.Clipper.TopX(s,c.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(s){for(var a=this.m_ActiveEdges;a!==null;){var c=this.IsMaxima(a,s);if(c){var p=this.GetMaximaPairEx(a);c=p===null||!n.ClipperBase.IsHorizontal(p)}if(c){this.StrictlySimple&&this.InsertMaxima(a.Top.X);var x=a.PrevInAEL;this.DoMaxima(a),x===null?a=this.m_ActiveEdges:a=x.NextInAEL}else{if(this.IsIntermediate(a,s)&&n.ClipperBase.IsHorizontal(a.NextInLML)?(a=this.UpdateEdgeIntoAEL(a),a.OutIdx>=0&&this.AddOutPt(a,a.Bot),this.AddEdgeToSEL(a)):(a.Curr.X=n.Clipper.TopX(a,s),a.Curr.Y=s),n.use_xyz&&(a.Top.Y===s?a.Curr.Z=a.Top.Z:a.Bot.Y===s?a.Curr.Z=a.Bot.Z:a.Curr.Z=0),this.StrictlySimple){var x=a.PrevInAEL;if(a.OutIdx>=0&&a.WindDelta!==0&&x!==null&&x.OutIdx>=0&&x.Curr.X===a.Curr.X&&x.WindDelta!==0){var I=new n.IntPoint1(a.Curr);n.use_xyz&&this.SetZ(I,x,a);var U=this.AddOutPt(x,I),Q=this.AddOutPt(a,I);this.AddJoin(U,Q,I)}}a=a.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,a=this.m_ActiveEdges;a!==null;){if(this.IsIntermediate(a,s)){var U=null;a.OutIdx>=0&&(U=this.AddOutPt(a,a.Top)),a=this.UpdateEdgeIntoAEL(a);var x=a.PrevInAEL,nt=a.NextInAEL;if(x!==null&&x.Curr.X===a.Bot.X&&x.Curr.Y===a.Bot.Y&&U!==null&&x.OutIdx>=0&&x.Curr.Y===x.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,x.Curr,x.Top,this.m_UseFullRange)&&a.WindDelta!==0&&x.WindDelta!==0){var Q=this.AddOutPt(ePrev2,a.Bot);this.AddJoin(U,Q,a.Top)}else if(nt!==null&&nt.Curr.X===a.Bot.X&&nt.Curr.Y===a.Bot.Y&&U!==null&&nt.OutIdx>=0&&nt.Curr.Y===nt.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,nt.Curr,nt.Top,this.m_UseFullRange)&&a.WindDelta!==0&&nt.WindDelta!==0){var Q=this.AddOutPt(nt,a.Bot);this.AddJoin(U,Q,a.Top)}}a=a.NextInAEL}},n.Clipper.prototype.DoMaxima=function(s){var a=this.GetMaximaPairEx(s);if(a===null){s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s);return}for(var c=s.NextInAEL;c!==null&&c!==a;)this.IntersectEdges(s,c,s.Top),this.SwapPositionsInAEL(s,c),c=s.NextInAEL;s.OutIdx===-1&&a.OutIdx===-1?(this.DeleteFromAEL(s),this.DeleteFromAEL(a)):s.OutIdx>=0&&a.OutIdx>=0?(s.OutIdx>=0&&this.AddLocalMaxPoly(s,a,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(a)):n.use_lines&&s.WindDelta===0?(s.OutIdx>=0&&(this.AddOutPt(s,s.Top),s.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(s),a.OutIdx>=0&&(this.AddOutPt(a,s.Top),a.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(a)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(s){for(var a=0,c=s.length;a<c;a++)s[a].reverse()},n.Clipper.Orientation=function(s){return n.Clipper.Area(s)>=0},n.Clipper.prototype.PointCount=function(s){if(s===null)return 0;var a=0,c=s;do a++,c=c.Next;while(c!==s);return a},n.Clipper.prototype.BuildResult=function(s){n.Clear(s);for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var p=this.m_PolyOuts[a];if(p.Pts!==null){var x=p.Pts.Prev,I=this.PointCount(x);if(!(I<2)){for(var U=new Array(I),Q=0;Q<I;Q++)U[Q]=x.Pt,x=x.Prev;s.push(U)}}}},n.Clipper.prototype.BuildResult2=function(s){s.Clear();for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var p=this.m_PolyOuts[a],x=this.PointCount(p.Pts);if(!(p.IsOpen&&x<2||!p.IsOpen&&x<3)){this.FixHoleLinkage(p);var I=new n.PolyNode;s.m_AllPolys.push(I),p.PolyNode=I,I.m_polygon.length=x;for(var U=p.Pts.Prev,Q=0;Q<x;Q++)I.m_polygon[Q]=U.Pt,U=U.Prev}}for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var p=this.m_PolyOuts[a];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,s.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):s.AddChild(p.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(s){for(var a=s.Pts,c=a.Prev;a!==c;)if(a=a.Next,n.IntPoint.op_Equality(a.Pt,a.Prev.Pt)){a===c&&(c=a.Prev);var p=a.Prev;p.Next=a.Next,a.Next.Prev=p,a=p}a===a.Prev&&(s.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(s){var a=null;s.BottomPt=null;for(var c=s.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(c.Prev===c||c.Prev===c.Next){s.Pts=null;return}if(n.IntPoint.op_Equality(c.Pt,c.Next.Pt)||n.IntPoint.op_Equality(c.Pt,c.Prev.Pt)||n.ClipperBase.SlopesEqual4(c.Prev.Pt,c.Pt,c.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(c.Prev.Pt,c.Pt,c.Next.Pt)))a=null,c.Prev.Next=c.Next,c.Next.Prev=c.Prev,c=c.Prev;else{if(c===a)break;a===null&&(a=c),c=c.Next}}s.Pts=c},n.Clipper.prototype.DupOutPt=function(s,a){var c=new n.OutPt;return c.Pt.X=s.Pt.X,c.Pt.Y=s.Pt.Y,n.use_xyz&&(c.Pt.Z=s.Pt.Z),c.Idx=s.Idx,a?(c.Next=s.Next,c.Prev=s,s.Next.Prev=c,s.Next=c):(c.Prev=s.Prev,c.Next=s,s.Prev.Next=c,s.Prev=c),c},n.Clipper.prototype.GetOverlap=function(s,a,c,p,x){return s<a?c<p?(x.Left=Math.max(s,c),x.Right=Math.min(a,p)):(x.Left=Math.max(s,p),x.Right=Math.min(a,c)):c<p?(x.Left=Math.max(a,c),x.Right=Math.min(s,p)):(x.Left=Math.max(a,p),x.Right=Math.min(s,c)),x.Left<x.Right},n.Clipper.prototype.JoinHorz=function(s,a,c,p,x,I){var U=s.Pt.X>a.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,Q=c.Pt.X>p.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(U===Q)return!1;if(U===n.Direction.dLeftToRight){for(;s.Next.Pt.X<=x.X&&s.Next.Pt.X>=s.Pt.X&&s.Next.Pt.Y===x.Y;)s=s.Next;I&&s.Pt.X!==x.X&&(s=s.Next),a=this.DupOutPt(s,!I),n.IntPoint.op_Inequality(a.Pt,x)&&(s=a,s.Pt.X=x.X,s.Pt.Y=x.Y,n.use_xyz&&(s.Pt.Z=x.Z),a=this.DupOutPt(s,!I))}else{for(;s.Next.Pt.X>=x.X&&s.Next.Pt.X<=s.Pt.X&&s.Next.Pt.Y===x.Y;)s=s.Next;!I&&s.Pt.X!==x.X&&(s=s.Next),a=this.DupOutPt(s,I),n.IntPoint.op_Inequality(a.Pt,x)&&(s=a,s.Pt.X=x.X,s.Pt.Y=x.Y,n.use_xyz&&(s.Pt.Z=x.Z),a=this.DupOutPt(s,I))}if(Q===n.Direction.dLeftToRight){for(;c.Next.Pt.X<=x.X&&c.Next.Pt.X>=c.Pt.X&&c.Next.Pt.Y===x.Y;)c=c.Next;I&&c.Pt.X!==x.X&&(c=c.Next),p=this.DupOutPt(c,!I),n.IntPoint.op_Inequality(p.Pt,x)&&(c=p,c.Pt.X=x.X,c.Pt.Y=x.Y,n.use_xyz&&(c.Pt.Z=x.Z),p=this.DupOutPt(c,!I))}else{for(;c.Next.Pt.X>=x.X&&c.Next.Pt.X<=c.Pt.X&&c.Next.Pt.Y===x.Y;)c=c.Next;!I&&c.Pt.X!==x.X&&(c=c.Next),p=this.DupOutPt(c,I),n.IntPoint.op_Inequality(p.Pt,x)&&(c=p,c.Pt.X=x.X,c.Pt.Y=x.Y,n.use_xyz&&(c.Pt.Z=x.Z),p=this.DupOutPt(c,I))}return U===n.Direction.dLeftToRight===I?(s.Prev=c,c.Next=s,a.Next=p,p.Prev=a):(s.Next=c,c.Prev=s,a.Prev=p,p.Next=a),!0},n.Clipper.prototype.JoinPoints=function(s,a,c){var p=s.OutPt1,x=new n.OutPt,I=s.OutPt2,U=new n.OutPt,Q=s.OutPt1.Pt.Y===s.OffPt.Y;if(Q&&n.IntPoint.op_Equality(s.OffPt,s.OutPt1.Pt)&&n.IntPoint.op_Equality(s.OffPt,s.OutPt2.Pt)){if(a!==c)return!1;for(x=s.OutPt1.Next;x!==p&&n.IntPoint.op_Equality(x.Pt,s.OffPt);)x=x.Next;var nt=x.Pt.Y>s.OffPt.Y;for(U=s.OutPt2.Next;U!==I&&n.IntPoint.op_Equality(U.Pt,s.OffPt);)U=U.Next;var ft=U.Pt.Y>s.OffPt.Y;return nt===ft?!1:nt?(x=this.DupOutPt(p,!1),U=this.DupOutPt(I,!0),p.Prev=I,I.Next=p,x.Next=U,U.Prev=x,s.OutPt1=p,s.OutPt2=x,!0):(x=this.DupOutPt(p,!0),U=this.DupOutPt(I,!1),p.Next=I,I.Prev=p,x.Prev=U,U.Next=x,s.OutPt1=p,s.OutPt2=x,!0)}else if(Q){for(x=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==x&&p.Prev!==I;)p=p.Prev;for(;x.Next.Pt.Y===x.Pt.Y&&x.Next!==p&&x.Next!==I;)x=x.Next;if(x.Next===p||x.Next===I)return!1;for(U=I;I.Prev.Pt.Y===I.Pt.Y&&I.Prev!==U&&I.Prev!==x;)I=I.Prev;for(;U.Next.Pt.Y===U.Pt.Y&&U.Next!==I&&U.Next!==p;)U=U.Next;if(U.Next===I||U.Next===p)return!1;var Lt={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,x.Pt.X,I.Pt.X,U.Pt.X,Lt))return!1;var Rt=Lt.Left,Bt=Lt.Right,ae=new n.IntPoint0,ye;return p.Pt.X>=Rt&&p.Pt.X<=Bt?(ae.X=p.Pt.X,ae.Y=p.Pt.Y,n.use_xyz&&(ae.Z=p.Pt.Z),ye=p.Pt.X>x.Pt.X):I.Pt.X>=Rt&&I.Pt.X<=Bt?(ae.X=I.Pt.X,ae.Y=I.Pt.Y,n.use_xyz&&(ae.Z=I.Pt.Z),ye=I.Pt.X>U.Pt.X):x.Pt.X>=Rt&&x.Pt.X<=Bt?(ae.X=x.Pt.X,ae.Y=x.Pt.Y,n.use_xyz&&(ae.Z=x.Pt.Z),ye=x.Pt.X>p.Pt.X):(ae.X=U.Pt.X,ae.Y=U.Pt.Y,n.use_xyz&&(ae.Z=U.Pt.Z),ye=U.Pt.X>I.Pt.X),s.OutPt1=p,s.OutPt2=I,this.JoinHorz(p,x,I,U,ae,ye)}else{for(x=p.Next;n.IntPoint.op_Equality(x.Pt,p.Pt)&&x!==p;)x=x.Next;var we=x.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,x.Pt,s.OffPt,this.m_UseFullRange);if(we){for(x=p.Prev;n.IntPoint.op_Equality(x.Pt,p.Pt)&&x!==p;)x=x.Prev;if(x.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,x.Pt,s.OffPt,this.m_UseFullRange))return!1}for(U=I.Next;n.IntPoint.op_Equality(U.Pt,I.Pt)&&U!==I;)U=U.Next;var He=U.Pt.Y>I.Pt.Y||!n.ClipperBase.SlopesEqual4(I.Pt,U.Pt,s.OffPt,this.m_UseFullRange);if(He){for(U=I.Prev;n.IntPoint.op_Equality(U.Pt,I.Pt)&&U!==I;)U=U.Prev;if(U.Pt.Y>I.Pt.Y||!n.ClipperBase.SlopesEqual4(I.Pt,U.Pt,s.OffPt,this.m_UseFullRange))return!1}return x===p||U===I||x===U||a===c&&we===He?!1:we?(x=this.DupOutPt(p,!1),U=this.DupOutPt(I,!0),p.Prev=I,I.Next=p,x.Next=U,U.Prev=x,s.OutPt1=p,s.OutPt2=x,!0):(x=this.DupOutPt(p,!0),U=this.DupOutPt(I,!1),p.Next=I,I.Prev=p,x.Prev=U,U.Next=x,s.OutPt1=p,s.OutPt2=x,!0)}},n.Clipper.GetBounds=function(s){for(var a=0,c=s.length;a<c&&s[a].length===0;)a++;if(a===c)return new n.IntRect(0,0,0,0);var p=new n.IntRect;for(p.left=s[a][0].X,p.right=p.left,p.top=s[a][0].Y,p.bottom=p.top;a<c;a++)for(var x=0,I=s[a].length;x<I;x++)s[a][x].X<p.left?p.left=s[a][x].X:s[a][x].X>p.right&&(p.right=s[a][x].X),s[a][x].Y<p.top?p.top=s[a][x].Y:s[a][x].Y>p.bottom&&(p.bottom=s[a][x].Y);return p},n.Clipper.prototype.GetBounds2=function(s){var a=s,c=new n.IntRect;for(c.left=s.Pt.X,c.right=s.Pt.X,c.top=s.Pt.Y,c.bottom=s.Pt.Y,s=s.Next;s!==a;)s.Pt.X<c.left&&(c.left=s.Pt.X),s.Pt.X>c.right&&(c.right=s.Pt.X),s.Pt.Y<c.top&&(c.top=s.Pt.Y),s.Pt.Y>c.bottom&&(c.bottom=s.Pt.Y),s=s.Next;return c},n.Clipper.PointInPolygon=function(s,a){var c=0,p=a.length;if(p<3)return 0;for(var x=a[0],I=1;I<=p;++I){var U=I===p?a[0]:a[I];if(U.Y===s.Y&&(U.X===s.X||x.Y===s.Y&&U.X>s.X==x.X<s.X))return-1;if(x.Y<s.Y!=U.Y<s.Y){if(x.X>=s.X)if(U.X>s.X)c=1-c;else{var Q=(x.X-s.X)*(U.Y-s.Y)-(U.X-s.X)*(x.Y-s.Y);if(Q===0)return-1;Q>0==U.Y>x.Y&&(c=1-c)}else if(U.X>s.X){var Q=(x.X-s.X)*(U.Y-s.Y)-(U.X-s.X)*(x.Y-s.Y);if(Q===0)return-1;Q>0==U.Y>x.Y&&(c=1-c)}}x=U}return c},n.Clipper.prototype.PointInPolygon=function(s,a){var c=0,p=a,x=s.X,I=s.Y,U=a.Pt.X,Q=a.Pt.Y;do{a=a.Next;var nt=a.Pt.X,ft=a.Pt.Y;if(ft===I&&(nt===x||Q===I&&nt>x==U<x))return-1;if(Q<I!=ft<I){if(U>=x)if(nt>x)c=1-c;else{var Lt=(U-x)*(ft-I)-(nt-x)*(Q-I);if(Lt===0)return-1;Lt>0==ft>Q&&(c=1-c)}else if(nt>x){var Lt=(U-x)*(ft-I)-(nt-x)*(Q-I);if(Lt===0)return-1;Lt>0==ft>Q&&(c=1-c)}}U=nt,Q=ft}while(p!==a);return c},n.Clipper.prototype.Poly2ContainsPoly1=function(s,a){var c=s;do{var p=this.PointInPolygon(c.Pt,a);if(p>=0)return p>0;c=c.Next}while(c!==s);return!0},n.Clipper.prototype.FixupFirstLefts1=function(s,a){for(var c,p,x=0,I=this.m_PolyOuts.length;x<I;x++)c=this.m_PolyOuts[x],p=n.Clipper.ParseFirstLeft(c.FirstLeft),c.Pts!==null&&p===s&&this.Poly2ContainsPoly1(c.Pts,a.Pts)&&(c.FirstLeft=a)},n.Clipper.prototype.FixupFirstLefts2=function(s,a){for(var c=a.FirstLeft,p,x,I=0,U=this.m_PolyOuts.length;I<U;I++)p=this.m_PolyOuts[I],!(p.Pts===null||p===a||p===s)&&(x=n.Clipper.ParseFirstLeft(p.FirstLeft),!(x!==c&&x!==s&&x!==a)&&(this.Poly2ContainsPoly1(p.Pts,s.Pts)?p.FirstLeft=s:this.Poly2ContainsPoly1(p.Pts,a.Pts)?p.FirstLeft=a:(p.FirstLeft===s||p.FirstLeft===a)&&(p.FirstLeft=c)))},n.Clipper.prototype.FixupFirstLefts3=function(s,a){for(var c,p,x=0,I=this.m_PolyOuts.length;x<I;x++)c=this.m_PolyOuts[x],p=n.Clipper.ParseFirstLeft(c.FirstLeft),c.Pts!==null&&p===s&&(c.FirstLeft=a)},n.Clipper.ParseFirstLeft=function(s){for(;s!==null&&s.Pts===null;)s=s.FirstLeft;return s},n.Clipper.prototype.JoinCommonEdges=function(){for(var s=0,a=this.m_Joins.length;s<a;s++){var c=this.m_Joins[s],p=this.GetOutRec(c.OutPt1.Idx),x=this.GetOutRec(c.OutPt2.Idx);if(!(p.Pts===null||x.Pts===null)&&!(p.IsOpen||x.IsOpen)){var I;p===x?I=p:this.OutRec1RightOfOutRec2(p,x)?I=x:this.OutRec1RightOfOutRec2(x,p)?I=p:I=this.GetLowermostRec(p,x),this.JoinPoints(c,p,x)&&(p===x?(p.Pts=c.OutPt1,p.BottomPt=null,x=this.CreateOutRec(),x.Pts=c.OutPt2,this.UpdateOutPtIdxs(x),this.Poly2ContainsPoly1(x.Pts,p.Pts)?(x.IsHole=!p.IsHole,x.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(x,p),(x.IsHole^this.ReverseSolution)==this.Area$1(x)>0&&this.ReversePolyPtLinks(x.Pts)):this.Poly2ContainsPoly1(p.Pts,x.Pts)?(x.IsHole=p.IsHole,p.IsHole=!x.IsHole,x.FirstLeft=p.FirstLeft,p.FirstLeft=x,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,x),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(x.IsHole=p.IsHole,x.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,x))):(x.Pts=null,x.BottomPt=null,x.Idx=p.Idx,p.IsHole=I.IsHole,I===x&&(p.FirstLeft=x.FirstLeft),x.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(x,p)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(s){var a=s.Pts;do a.Idx=s.Idx,a=a.Prev;while(a!==s.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var s=0;s<this.m_PolyOuts.length;){var a=this.m_PolyOuts[s++],c=a.Pts;if(!(c===null||a.IsOpen))do{for(var p=c.Next;p!==a.Pts;){if(n.IntPoint.op_Equality(c.Pt,p.Pt)&&p.Next!==c&&p.Prev!==c){var x=c.Prev,I=p.Prev;c.Prev=I,I.Next=c,p.Prev=x,x.Next=p,a.Pts=c;var U=this.CreateOutRec();U.Pts=p,this.UpdateOutPtIdxs(U),this.Poly2ContainsPoly1(U.Pts,a.Pts)?(U.IsHole=!a.IsHole,U.FirstLeft=a,this.m_UsingPolyTree&&this.FixupFirstLefts2(U,a)):this.Poly2ContainsPoly1(a.Pts,U.Pts)?(U.IsHole=a.IsHole,a.IsHole=!U.IsHole,U.FirstLeft=a.FirstLeft,a.FirstLeft=U,this.m_UsingPolyTree&&this.FixupFirstLefts2(a,U)):(U.IsHole=a.IsHole,U.FirstLeft=a.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(a,U)),p=c}p=p.Next}c=c.Next}while(c!==a.Pts)}},n.Clipper.Area=function(s){if(!Array.isArray(s))return 0;var a=s.length;if(a<3)return 0;for(var c=0,p=0,x=a-1;p<a;++p)c+=(s[x].X+s[p].X)*(s[x].Y-s[p].Y),x=p;return-c*.5},n.Clipper.prototype.Area=function(s){var a=s;if(s===null)return 0;var c=0;do c=c+(s.Prev.Pt.X+s.Pt.X)*(s.Prev.Pt.Y-s.Pt.Y),s=s.Next;while(s!==a);return c*.5},n.Clipper.prototype.Area$1=function(s){return this.Area(s.Pts)},n.Clipper.SimplifyPolygon=function(s,a){var c=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPath(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,c,a,a),c},n.Clipper.SimplifyPolygons=function(s,a){typeof a>"u"&&(a=n.PolyFillType.pftEvenOdd);var c=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,c,a,a),c},n.Clipper.DistanceSqrd=function(s,a){var c=s.X-a.X,p=s.Y-a.Y;return c*c+p*p},n.Clipper.DistanceFromLineSqrd=function(s,a,c){var p=a.Y-c.Y,x=c.X-a.X,I=p*a.X+x*a.Y;return I=p*s.X+x*s.Y-I,I*I/(p*p+x*x)},n.Clipper.SlopesNearCollinear=function(s,a,c,p){return Math.abs(s.X-a.X)>Math.abs(s.Y-a.Y)?s.X>a.X==s.X<c.X?n.Clipper.DistanceFromLineSqrd(s,a,c)<p:a.X>s.X==a.X<c.X?n.Clipper.DistanceFromLineSqrd(a,s,c)<p:n.Clipper.DistanceFromLineSqrd(c,s,a)<p:s.Y>a.Y==s.Y<c.Y?n.Clipper.DistanceFromLineSqrd(s,a,c)<p:a.Y>s.Y==a.Y<c.Y?n.Clipper.DistanceFromLineSqrd(a,s,c)<p:n.Clipper.DistanceFromLineSqrd(c,s,a)<p},n.Clipper.PointsAreClose=function(s,a,c){var p=s.X-a.X,x=s.Y-a.Y;return p*p+x*x<=c},n.Clipper.ExcludeOp=function(s){var a=s.Prev;return a.Next=s.Next,s.Next.Prev=a,a.Idx=0,a},n.Clipper.CleanPolygon=function(s,a){typeof a>"u"&&(a=1.415);var c=s.length;if(c===0)return new Array;for(var p=new Array(c),x=0;x<c;++x)p[x]=new n.OutPt;for(var x=0;x<c;++x)p[x].Pt=s[x],p[x].Next=p[(x+1)%c],p[x].Next.Prev=p[x],p[x].Idx=0;for(var I=a*a,U=p[0];U.Idx===0&&U.Next!==U.Prev;)n.Clipper.PointsAreClose(U.Pt,U.Prev.Pt,I)?(U=n.Clipper.ExcludeOp(U),c--):n.Clipper.PointsAreClose(U.Prev.Pt,U.Next.Pt,I)?(n.Clipper.ExcludeOp(U.Next),U=n.Clipper.ExcludeOp(U),c-=2):n.Clipper.SlopesNearCollinear(U.Prev.Pt,U.Pt,U.Next.Pt,I)?(U=n.Clipper.ExcludeOp(U),c--):(U.Idx=1,U=U.Next);c<3&&(c=0);for(var Q=new Array(c),x=0;x<c;++x)Q[x]=new n.IntPoint1(U.Pt),U=U.Next;return p=null,Q},n.Clipper.CleanPolygons=function(s,a){for(var c=new Array(s.length),p=0,x=s.length;p<x;p++)c[p]=n.Clipper.CleanPolygon(s[p],a);return c},n.Clipper.Minkowski=function(s,a,c,p){var x=p?1:0,I=s.length,U=a.length,Q=new Array;if(c)for(var nt=0;nt<U;nt++){for(var ft=new Array(I),Lt=0,Rt=s.length,Bt=s[Lt];Lt<Rt;Lt++,Bt=s[Lt])ft[Lt]=new n.IntPoint2(a[nt].X+Bt.X,a[nt].Y+Bt.Y);Q.push(ft)}else for(var nt=0;nt<U;nt++){for(var ft=new Array(I),Lt=0,Rt=s.length,Bt=s[Lt];Lt<Rt;Lt++,Bt=s[Lt])ft[Lt]=new n.IntPoint2(a[nt].X-Bt.X,a[nt].Y-Bt.Y);Q.push(ft)}for(var ae=new Array,nt=0;nt<U-1+x;nt++)for(var Lt=0;Lt<I;Lt++){var ye=new Array;ye.push(Q[nt%U][Lt%I]),ye.push(Q[(nt+1)%U][Lt%I]),ye.push(Q[(nt+1)%U][(Lt+1)%I]),ye.push(Q[nt%U][(Lt+1)%I]),n.Clipper.Orientation(ye)||ye.reverse(),ae.push(ye)}return ae},n.Clipper.MinkowskiSum=function(s,a,c){if(a[0]instanceof Array){for(var x=a,U=new n.Paths,I=new n.Clipper,Q=0;Q<x.length;++Q){var nt=n.Clipper.Minkowski(s,x[Q],!0,c);if(I.AddPaths(nt,n.PolyType.ptSubject,!0),c){var p=n.Clipper.TranslatePath(x[Q],s[0]);I.AddPath(p,n.PolyType.ptClip,!0)}}return I.Execute(n.ClipType.ctUnion,U,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),U}else{var p=a,x=n.Clipper.Minkowski(s,p,!0,c),I=new n.Clipper;return I.AddPaths(x,n.PolyType.ptSubject,!0),I.Execute(n.ClipType.ctUnion,x,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),x}},n.Clipper.TranslatePath=function(s,a){for(var c=new n.Path,p=0;p<s.length;p++)c.push(new n.IntPoint2(s[p].X+a.X,s[p].Y+a.Y));return c},n.Clipper.MinkowskiDiff=function(s,a){var c=n.Clipper.Minkowski(s,a,!1,!0),p=new n.Clipper;return p.AddPaths(c,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),c},n.Clipper.PolyTreeToPaths=function(s){var a=new Array;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntAny,a),a},n.Clipper.AddPolyNodeToPaths=function(s,a,c){var p=!0;switch(a){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:p=!s.IsOpen;break;default:break}s.m_polygon.length>0&&p&&c.push(s.m_polygon);for(var x=0,I=s.Childs(),U=I.length,Q=I[x];x<U;x++,Q=I[x])n.Clipper.AddPolyNodeToPaths(Q,a,c)},n.Clipper.OpenPathsFromPolyTree=function(s){for(var a=new n.Paths,c=0,p=s.ChildCount();c<p;c++)s.Childs()[c].IsOpen&&a.push(s.Childs()[c].m_polygon);return a},n.Clipper.ClosedPathsFromPolyTree=function(s){var a=new n.Paths;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntClosed,a),a},ge(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(s,a){typeof s>"u"&&(s=2),typeof a>"u"&&(a=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=s,this.ArcTolerance=a,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(s,a,c){var p=s.length-1;if(!(p<0)){var x=new n.PolyNode;if(x.m_jointype=a,x.m_endtype=c,c===n.EndType.etClosedLine||c===n.EndType.etClosedPolygon)for(;p>0&&n.IntPoint.op_Equality(s[0],s[p]);)p--;x.m_polygon.push(s[0]);for(var I=0,U=0,Q=1;Q<=p;Q++)n.IntPoint.op_Inequality(x.m_polygon[I],s[Q])&&(I++,x.m_polygon.push(s[Q]),(s[Q].Y>x.m_polygon[U].Y||s[Q].Y===x.m_polygon[U].Y&&s[Q].X<x.m_polygon[U].X)&&(U=I));if(!(c===n.EndType.etClosedPolygon&&I<2)&&(this.m_polyNodes.AddChild(x),c===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,U);else{var nt=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(x.m_polygon[U].Y>nt.Y||x.m_polygon[U].Y===nt.Y&&x.m_polygon[U].X<nt.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,U))}}},n.ClipperOffset.prototype.AddPaths=function(s,a,c){for(var p=0,x=s.length;p<x;p++)this.AddPath(s[p],a,c)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];(a.m_endtype===n.EndType.etClosedPolygon||a.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(a.m_polygon))&&a.m_polygon.reverse()}else for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];a.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(a.m_polygon)&&a.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(s,a){var c=a.X-s.X,p=a.Y-s.Y;if(c===0&&p===0)return new n.DoublePoint2(0,0);var x=1/Math.sqrt(c*c+p*p);return c*=x,p*=x,new n.DoublePoint2(p,-c)},n.ClipperOffset.prototype.DoOffset=function(s){if(this.m_destPolys=new Array,this.m_delta=s,n.ClipperBase.near_zero(s)){for(var a=0;a<this.m_polyNodes.ChildCount();a++){var c=this.m_polyNodes.Childs()[a];c.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(c.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(s)*n.ClipperOffset.def_arc_tolerance?p=Math.abs(s)*n.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var x=3.14159265358979/Math.acos(1-p/Math.abs(s));this.m_sin=Math.sin(n.ClipperOffset.two_pi/x),this.m_cos=Math.cos(n.ClipperOffset.two_pi/x),this.m_StepsPerRad=x/n.ClipperOffset.two_pi,s<0&&(this.m_sin=-this.m_sin);for(var a=0;a<this.m_polyNodes.ChildCount();a++){var c=this.m_polyNodes.Childs()[a];this.m_srcPoly=c.m_polygon;var I=this.m_srcPoly.length;if(!(I===0||s<=0&&(I<3||c.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,I===1){if(c.m_jointype===n.JoinType.jtRound)for(var U=1,Q=0,nt=1;nt<=x;nt++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+U*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Q*s)));var ft=U;U=U*this.m_cos-this.m_sin*Q,Q=ft*this.m_sin+Q*this.m_cos}else for(var U=-1,Q=-1,nt=0;nt<4;++nt)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+U*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Q*s))),U<0?U=1:Q<0?Q=1:U=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var nt=0;nt<I-1;nt++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[nt],this.m_srcPoly[nt+1]));if(c.m_endtype===n.EndType.etClosedLine||c.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[I-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[I-2])),c.m_endtype===n.EndType.etClosedPolygon){for(var Lt=I-1,nt=0;nt<I;nt++)Lt=this.OffsetPoint(nt,Lt,c.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(c.m_endtype===n.EndType.etClosedLine){for(var Lt=I-1,nt=0;nt<I;nt++)Lt=this.OffsetPoint(nt,Lt,c.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var Rt=this.m_normals[I-1],nt=I-1;nt>0;nt--)this.m_normals[nt]=new n.DoublePoint2(-this.m_normals[nt-1].X,-this.m_normals[nt-1].Y);this.m_normals[0]=new n.DoublePoint2(-Rt.X,-Rt.Y),Lt=0;for(var nt=I-1;nt>=0;nt--)Lt=this.OffsetPoint(nt,Lt,c.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var Lt=0,nt=1;nt<I-1;++nt)Lt=this.OffsetPoint(nt,Lt,c.m_jointype);var Bt;if(c.m_endtype===n.EndType.etOpenButt){var nt=I-1;Bt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[nt].X+this.m_normals[nt].X*s),n.ClipperOffset.Round(this.m_srcPoly[nt].Y+this.m_normals[nt].Y*s)),this.m_destPoly.push(Bt),Bt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[nt].X-this.m_normals[nt].X*s),n.ClipperOffset.Round(this.m_srcPoly[nt].Y-this.m_normals[nt].Y*s)),this.m_destPoly.push(Bt)}else{var nt=I-1;Lt=I-2,this.m_sinA=0,this.m_normals[nt]=new n.DoublePoint2(-this.m_normals[nt].X,-this.m_normals[nt].Y),c.m_endtype===n.EndType.etOpenSquare?this.DoSquare(nt,Lt):this.DoRound(nt,Lt)}for(var nt=I-1;nt>0;nt--)this.m_normals[nt]=new n.DoublePoint2(-this.m_normals[nt-1].X,-this.m_normals[nt-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),Lt=I-1;for(var nt=Lt-1;nt>0;--nt)Lt=this.OffsetPoint(nt,Lt,c.m_jointype);c.m_endtype===n.EndType.etOpenButt?(Bt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*s)),this.m_destPoly.push(Bt),Bt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*s)),this.m_destPoly.push(Bt)):(Lt=1,this.m_sinA=0,c.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var s=arguments,a=s[0]instanceof n.PolyTree;if(a){var c=s[0],p=s[1];c.Clear(),this.FixOrientations(),this.DoOffset(p);var x=new n.Clipper(0);if(x.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)x.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var I=n.Clipper.GetBounds(this.m_destPolys),U=new n.Path;if(U.push(new n.IntPoint2(I.left-10,I.bottom+10)),U.push(new n.IntPoint2(I.right+10,I.bottom+10)),U.push(new n.IntPoint2(I.right+10,I.top-10)),U.push(new n.IntPoint2(I.left-10,I.top-10)),x.AddPath(U,n.PolyType.ptSubject,!0),x.ReverseSolution=!0,x.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),c.ChildCount()===1&&c.Childs()[0].ChildCount()>0){var Q=c.Childs()[0];c.Childs()[0]=Q.Childs()[0],c.Childs()[0].m_Parent=c;for(var nt=1;nt<Q.ChildCount();nt++)c.AddChild(Q.Childs()[nt])}else c.Clear()}}else{var c=s[0],p=s[1];n.Clear(c),this.FixOrientations(),this.DoOffset(p);var x=new n.Clipper(0);if(x.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)x.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var I=n.Clipper.GetBounds(this.m_destPolys),U=new n.Path;U.push(new n.IntPoint2(I.left-10,I.bottom+10)),U.push(new n.IntPoint2(I.right+10,I.bottom+10)),U.push(new n.IntPoint2(I.right+10,I.top-10)),U.push(new n.IntPoint2(I.left-10,I.top-10)),x.AddPath(U,n.PolyType.ptSubject,!0),x.ReverseSolution=!0,x.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),c.length>0&&c.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(s,a,c){if(this.m_sinA=this.m_normals[a].X*this.m_normals[s].Y-this.m_normals[s].X*this.m_normals[a].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[a].X*this.m_normals[s].X+this.m_normals[s].Y*this.m_normals[a].Y;if(p>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),a}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[s])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)));else switch(c){case n.JoinType.jtMiter:{var x=1+(this.m_normals[s].X*this.m_normals[a].X+this.m_normals[s].Y*this.m_normals[a].Y);x>=this.m_miterLim?this.DoMiter(s,a,x):this.DoSquare(s,a);break}case n.JoinType.jtSquare:this.DoSquare(s,a);break;case n.JoinType.jtRound:this.DoRound(s,a);break}return a=s,a},n.ClipperOffset.prototype.DoSquare=function(s,a){var c=Math.tan(Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[a].X-this.m_normals[a].Y*c)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[a].Y+this.m_normals[a].X*c)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[s].X+this.m_normals[s].Y*c)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[s].Y-this.m_normals[s].X*c))))},n.ClipperOffset.prototype.DoMiter=function(s,a,c){var p=this.m_delta/c;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+(this.m_normals[a].X+this.m_normals[s].X)*p),n.ClipperOffset.Round(this.m_srcPoly[s].Y+(this.m_normals[a].Y+this.m_normals[s].Y)*p)))},n.ClipperOffset.prototype.DoRound=function(s,a){for(var c=Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y),p=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(c))),1),x=this.m_normals[a].X,I=this.m_normals[a].Y,U,Q=0;Q<p;++Q)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+x*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+I*this.m_delta))),U=x,x=x*this.m_cos-this.m_sin*I,I=U*this.m_sin+I*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)))},n.Error=function(s){try{throw new Error(s)}catch(a){alert(a.message)}},n.JS={},n.JS.AreaOfPolygon=function(s,a){return a||(a=1),n.Clipper.Area(s)/(a*a)},n.JS.AreaOfPolygons=function(s,a){a||(a=1);for(var c=0,p=0;p<s.length;p++)c+=n.Clipper.Area(s[p]);return c/(a*a)},n.JS.BoundsOfPath=function(s,a){return n.JS.BoundsOfPaths([s],a)},n.JS.BoundsOfPaths=function(s,a){a||(a=1);var c=n.Clipper.GetBounds(s);return c.left/=a,c.bottom/=a,c.right/=a,c.top/=a,c},n.JS.Clean=function(p,a){if(!(p instanceof Array))return[];var c=p[0]instanceof Array,p=n.JS.Clone(p);if(typeof a!="number"||a===null)return n.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||a<0)return p;c||(p=[p]);for(var x=p.length,I,U,Q,nt,ft,Lt,Rt,Bt=[],ae=0;ae<x;ae++)if(U=p[ae],I=U.length,I!==0){if(I<3){Q=U,Bt.push(Q);continue}for(Q=U,nt=a*a,ft=U[0],Lt=1,Rt=1;Rt<I;Rt++)(U[Rt].X-ft.X)*(U[Rt].X-ft.X)+(U[Rt].Y-ft.Y)*(U[Rt].Y-ft.Y)<=nt||(Q[Lt]=U[Rt],ft=U[Rt],Lt++);ft=U[Lt-1],(U[0].X-ft.X)*(U[0].X-ft.X)+(U[0].Y-ft.Y)*(U[0].Y-ft.Y)<=nt&&Lt--,Lt<I&&Q.splice(Lt,I-Lt),Q.length&&Bt.push(Q)}return!c&&Bt.length?Bt=Bt[0]:!c&&Bt.length===0?Bt=[]:c&&Bt.length===0&&(Bt=[[]]),Bt},n.JS.Clone=function(s){if(!(s instanceof Array))return[];if(s.length===0)return[];if(s.length===1&&s[0].length===0)return[[]];var a=s[0]instanceof Array;a||(s=[s]);var c=s.length,p,x,I,U,Q=new Array(c);for(x=0;x<c;x++){for(p=s[x].length,U=new Array(p),I=0;I<p;I++)U[I]={X:s[x][I].X,Y:s[x][I].Y};Q[x]=U}return a||(Q=Q[0]),Q},n.JS.Lighten=function(s,a){if(!(s instanceof Array))return[];if(typeof a!="number"||a===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(s);if(s.length===0||s.length===1&&s[0].length===0||a<0)return n.JS.Clone(s);var c=s[0]instanceof Array;c||(s=[s]);var p,x,I,U,Q,nt,ft,Lt,Rt,Bt,ae,ye,we,He,vn,$n,Wi,Hr=s.length,Ho=a*a,Pi=[];for(p=0;p<Hr;p++)if(I=s[p],nt=I.length,nt!==0){for(U=0;U<1e6;U++){for(Q=[],nt=I.length,I[nt-1].X!==I[0].X||I[nt-1].Y!==I[0].Y?(ye=1,I.push({X:I[0].X,Y:I[0].Y}),nt=I.length):ye=0,ae=[],x=0;x<nt-2;x++)ft=I[x],Rt=I[x+1],Lt=I[x+2],$n=ft.X,Wi=ft.Y,we=Lt.X-$n,He=Lt.Y-Wi,(we!==0||He!==0)&&(vn=((Rt.X-$n)*we+(Rt.Y-Wi)*He)/(we*we+He*He),vn>1?($n=Lt.X,Wi=Lt.Y):vn>0&&($n+=we*vn,Wi+=He*vn)),we=Rt.X-$n,He=Rt.Y-Wi,Bt=we*we+He*He,Bt<=Ho&&(ae[x+1]=1,x++);for(Q.push({X:I[0].X,Y:I[0].Y}),x=1;x<nt-1;x++)ae[x]||Q.push({X:I[x].X,Y:I[x].Y});if(Q.push({X:I[nt-1].X,Y:I[nt-1].Y}),ye&&I.pop(),ae.length)I=Q;else break}nt=Q.length,Q[nt-1].X===Q[0].X&&Q[nt-1].Y===Q[0].Y&&Q.pop(),Q.length>2&&Pi.push(Q)}return c||(Pi=Pi[0]),typeof Pi>"u"&&(Pi=[]),Pi},n.JS.PerimeterOfPath=function(s,a,c){if(typeof s>"u")return 0;var p=Math.sqrt,x=0,I,U,Q=0,nt=0,ft=0,Lt=0,Rt=s.length;if(Rt<2)return 0;for(a&&(s[Rt]=s[0],Rt++);--Rt;)I=s[Rt],Q=I.X,nt=I.Y,U=s[Rt-1],ft=U.X,Lt=U.Y,x+=p((Q-ft)*(Q-ft)+(nt-Lt)*(nt-Lt));return a&&s.pop(),x/c},n.JS.PerimeterOfPaths=function(s,a,c){c||(c=1);for(var p=0,x=0;x<s.length;x++)p+=n.JS.PerimeterOfPath(s[x],a,c);return p},n.JS.ScaleDownPath=function(s,a){var c,p;for(a||(a=1),c=s.length;c--;)p=s[c],p.X=p.X/a,p.Y=p.Y/a},n.JS.ScaleDownPaths=function(s,a){var c,p,x;for(a||(a=1),c=s.length;c--;)for(p=s[c].length;p--;)x=s[c][p],x.X=x.X/a,x.Y=x.Y/a},n.JS.ScaleUpPath=function(s,a){var c,p,x=Math.round;for(a||(a=1),c=s.length;c--;)p=s[c],p.X=x(p.X*a),p.Y=x(p.Y*a)},n.JS.ScaleUpPaths=function(s,a){var c,p,x,I=Math.round;for(a||(a=1),c=s.length;c--;)for(p=s[c].length;p--;)x=s[c][p],x.X=I(x.X*a),x.Y=I(x.Y*a)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(s,a){var c=new n.ExPolygon;c.outer=s.Contour();var p=s.Childs(),x=p.length;c.holes=new Array(x);var I,U,Q,nt,ft,Lt;for(Q=0;Q<x;Q++)for(I=p[Q],c.holes[Q]=I.Contour(),nt=0,ft=I.Childs(),Lt=ft.length;nt<Lt;nt++)U=ft[nt],n.JS.AddOuterPolyNodeToExPolygons(U,a);a.push(c)},n.JS.ExPolygonsToPaths=function(s){var a,c,p,x,I=new n.Paths;for(a=0,p=s.length;a<p;a++)for(I.push(s[a].outer),c=0,x=s[a].holes.length;c<x;c++)I.push(s[a].holes[c]);return I},n.JS.PolyTreeToExPolygons=function(s){var a=new n.ExPolygons,c,p,x,I;for(p=0,x=s.Childs(),I=x.length;p<I;p++)c=x[p],n.JS.AddOuterPolyNodeToExPolygons(c,a);return a}})()});function qo(n,t,e,i=en.default.PolyFillType.pftNonZero){let r=new en.default.Clipper;r.AddPaths($o(t),en.default.PolyType.ptSubject,!0),e&&r.AddPaths($o(e),en.default.PolyType.ptClip,!0);let o=new en.default.Paths;return r.Execute(n,o,i,i),Ac(o)}function ku(n,t=256){let e=n.length>t?ig(n):n;for(;e.length>t;){let i=[];for(let o=0;o<e.length;o+=t)i.push(ni(e.slice(o,o+t)));let r=i.flat();if(i.length===1)return r;if(r.length>e.length/2)return ni(r);e=r}return ni(e)}function ig(n){let t=1/0,e=1/0,i=-1/0,r=-1/0,o=n.map(d=>{let g=0,v=0;for(let[S,w]of d)g+=S,v+=w;let _=[g/d.length,v/d.length];return t=Math.min(t,_[0]),e=Math.min(e,_[1]),i=Math.max(i,_[0]),r=Math.max(r,_[1]),_}),l=65535/Math.max(i-t,r-e,1e-9),h=d=>(d=(d|d<<8)&16711935,d=(d|d<<4)&252645135,d=(d|d<<2)&858993459,(d|d<<1)&1431655765),u=o.map(([d,g])=>(h(Math.round((d-t)*l))|h(Math.round((g-e)*l))<<1)>>>0);return n.map((d,g)=>g).sort((d,g)=>u[d]-u[g]).map(d=>n[d])}function Fe(n,t,e=ng/$i){return n.length?(t<-2*Tc&&(n=Bu(n,-Tc,e),t+=Tc),Bu(n,t,e)):[]}function Bu(n,t,e){if(!n.length)return[];let i=new en.default.ClipperOffset(2,e*$i);i.AddPaths($o(n),en.default.JoinType.jtRound,en.default.EndType.etClosedPolygon);let r=new en.default.Paths;return i.Execute(r,t*$i),Ac(r)}function qn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function Li(n){let t=1/0,e=1/0,i=-1/0,r=-1/0;for(let o of n)for(let[l,h]of o)l<t&&(t=l),l>i&&(i=l),h<e&&(e=h),h>r&&(r=h);return{minX:t,minY:e,maxX:i,maxY:r}}function Zn(n){if(!n.length)return[];let t=new en.default.Clipper;t.AddPaths($o(n),en.default.PolyType.ptSubject,!0);let e=new en.default.PolyTree;t.Execute(en.default.ClipType.ctUnion,e,en.default.PolyFillType.pftNonZero,en.default.PolyFillType.pftNonZero);let i=[],r=o=>{for(let l of o.Childs()){if(l.IsHole()){r(l);continue}let h=l.Childs().map(u=>u.Contour());i.push(Ac([l.Contour(),...h]));for(let u of l.Childs())r(u)}};return r(e),i}function Xs([n,t],e){let i=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[l,h]=e[r],[u,d]=e[o];h>t!=d>t&&n<(u-l)*(t-h)/(d-h)+l&&(i=!i)}return i}function xn(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(qn(e))>t)}function rg(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let h=1;h<n.length;h++){let u=(n[h][0]-n[0][0])**2+(n[h][1]-n[0][1])**2;u>i&&(i=u,e=h)}let r=h=>{let u=new Uint8Array(h.length);u[0]=u[h.length-1]=1;let d=[[0,h.length-1]];for(;d.length;){let[g,v]=d.pop(),[_,S]=h[g],[w,E]=h[v],b=Math.hypot(w-_,E-S)||1e-12,y=-1,R=t;for(let z=g+1;z<v;z++){let A=Math.abs((w-_)*(S-h[z][1])-(_-h[z][0])*(E-S))/b;A>R&&(R=A,y=z)}y>0&&(u[y]=1,d.push([g,y],[y,v]))}return h.filter((g,v)=>u[v])},o=r(n.slice(0,e+1)),l=r([...n.slice(e),n[0]]);return[...o,...l.slice(1,-1)]}var en,$i,ng,$o,Ac,Zo,ni,_i,Ri,Tc,nn,Ni,Ws=mn(()=>{en=Nu(Uu(),1),$i=1e3,ng=.01*$i,$o=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*$i),Y:Math.round(i*$i)}))),Ac=n=>n.map(t=>t.map(e=>[e.X/$i,e.Y/$i]));Zo=n=>qo(en.default.ClipType.ctUnion,n,null,en.default.PolyFillType.pftEvenOdd),ni=n=>qo(en.default.ClipType.ctUnion,n,null);_i=(n,t)=>qo(en.default.ClipType.ctDifference,n,t),Ri=(n,t)=>qo(en.default.ClipType.ctIntersection,n,t);Tc=.005;nn=n=>n.reduce((t,e)=>t+qn(e),0);Ni=(n,t)=>n.map(e=>rg(e,t)).filter(e=>e.length>=3)});function Hu(n){let t=[],e=[],i=[],r=[];for(let o of n.meshes||[]){let l=t.length/3,h=e.length/3,u=o.attributes.position.array;for(let g=0;g<u.length;g++)t.push(u[g]);let d=o.index.array;for(let g=0;g<d.length;g++)e.push(d[g]+l);for(let g of o.brep_faces||[])i.push({first:g.first+h,last:g.last+h});o.name&&r.push(o.name)}return{positions:Float64Array.from(t),indices:Uint32Array.from(e),faces:i,solids:(n.meshes||[]).length,names:r}}function Wr(n){let t=n.positions,e=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]<e[o]&&(e[o]=t[r+o]),t[r+o]>i[o]&&(i[o]=t[r+o]);return{min:e,max:i,size:[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}}function Pc(n,t){let e=n.positions,i=n.indices,r=i[t*3]*3,o=i[t*3+1]*3,l=i[t*3+2]*3,h=e[o]-e[r],u=e[o+1]-e[r+1],d=e[o+2]-e[r+2],g=e[l]-e[r],v=e[l+1]-e[r+1],_=e[l+2]-e[r+2],S=u*_-d*v,w=d*g-h*_,E=h*v-u*g,b=Math.hypot(S,w,E);return b>0?[S/b,w/b,E/b]:[0,0,0]}function sg(n){let[t,e,i]=n;if(i>.999999)return[1,0,0,0,1,0,0,0,1];if(i<-.999999)return[1,0,0,0,-1,0,0,0,-1];let r=e,o=-t,l=Math.hypot(r,o);r/=l,o/=l;let h=i,u=l,d=1-h;return[d*r*r+h,d*r*o,o*u,d*r*o,d*o*o+h,-r*u,-o*u,r*u,h]}function Ic(n,t){let e=n.positions,i=new Float64Array(e.length);for(let l=0;l<e.length;l+=3){let h=e[l],u=e[l+1],d=e[l+2];i[l]=t[0]*h+t[1]*u+t[2]*d,i[l+1]=t[3]*h+t[4]*u+t[5]*d,i[l+2]=t[6]*h+t[7]*u+t[8]*d}let r={positions:i,indices:n.indices,faces:n.faces},{min:o}=Wr(r);for(let l=0;l<i.length;l+=3)i[l]-=o[0],i[l+1]-=o[1],i[l+2]-=o[2];for(let l=0;l<i.length;l++)i[l]=Math.round(i[l]*1e6)/1e6;return r}function Gu(n,[t,e,i]){if(t===1&&e===1&&i===1)return n;if(!(t>0&&e>0&&i>0))throw new Error("A size must be more than 0.");let r=n.positions,o=new Float64Array(r.length);for(let l=0;l<r.length;l+=3)o[l]=r[l]*t,o[l+1]=r[l+1]*e,o[l+2]=r[l+2]*i;return{...n,positions:o}}function yr(n,t=.001){let{max:e,size:i}=Wr(n),r=e[2],o=new Map,l=0,h=0,u=0,d=n.positions,g=n.indices,v=g.length/3;for(let w=0;w<v;w++){let E=g[w*3]*3,b=g[w*3+1]*3,y=g[w*3+2]*3,R=Pc(n,w),z=d[b]-d[E],A=d[b+1]-d[E+1],L=d[b+2]-d[E+2],D=d[y]-d[E],V=d[y+1]-d[E+1],C=d[y+2]-d[E+2],k=Math.hypot(A*C-L*V,L*D-z*C,z*V-A*D)/2;u+=k;let H=(d[E+2]+d[b+2]+d[y+2])/3;if(R[2]>1-t){let Y=Math.round(H*1e3)/1e3;o.set(Y,(o.get(Y)||0)+k)}else R[2]<-(1-t)?H>t&&(l+=k):Math.abs(R[2])>t&&(R[2]<0?l+=k:h+=k)}let _=l>.001*u,S=_?ag(n):{inside:0,total:0};return{size:i,top:r,floors:[...o.keys()].sort((w,E)=>E-w),floorAreas:Object.fromEntries(o),undercut:_&&S.inside>zu,squareEdges:_&&S.inside<=zu,sloped:h>.001*u,undercutArea:l,slopedArea:h,slopedShare:u>0?h/u:0,missed:S.inside,missedTotal:S.total}}function og(n){let t=n.positions,e=n.indices,i=0;for(let r=0;r<e.length;r+=3){let o=e[r]*3,l=e[r+1]*3,h=e[r+2]*3;i+=t[o]*(t[l+1]*t[h+2]-t[l+2]*t[h+1])-t[o+1]*(t[l]*t[h+2]-t[l+2]*t[h])+t[o+2]*(t[l]*t[h+1]-t[l+1]*t[h])}return Math.abs(i/6)}function ag(n){let{min:t,max:e}=Wr(n),i=e[0]-t[0],r=e[1]-t[1],o=Math.max(.05,Math.sqrt(i*r/25e4)),l={x0:t[0],y0:t[1],cell:o,nx:Math.ceil(i/o)+1,ny:Math.ceil(r/o)+1},{h,mat:u}=lg(n,l),d=ni(Zn(Zo(Rc(n,t[2]+.01))).map(b=>b[0])),g=Vu(d,l),v=Vu(Fe(d,Math.min(3,.15*Math.min(i,r))),l),_=0,S=0;for(let b=0;b<h.length;b++){if(!(h[b]>t[2]))continue;let y=Math.max(0,h[b]-t[2]-u[b]);_+=y,(g[b]||!v[b])&&(S+=y)}let w=og(n),E=o*o;return w>0?{inside:S*E/w,total:_*E/w}:{inside:0,total:0}}function lg(n,t){let e=t.nx*t.ny,i=new Float32Array(e).fill(-1/0),r=new Float32Array(e),o=n.positions,l=n.indices;for(let h=0;h<l.length;h+=3){let u=l[h]*3,d=l[h+1]*3,g=l[h+2]*3,v=o[u],_=o[u+1],S=o[u+2],w=o[d],E=o[d+1],b=o[d+2],y=o[g],R=o[g+1],z=o[g+2],A=(E-R)*(v-y)+(y-w)*(_-R);if(Math.abs(A)<1e-12)continue;let L=(w-v)*(R-_)-(E-_)*(y-v)>0?1:-1,D=Math.max(0,Math.ceil((Math.min(v,w,y)-t.x0)/t.cell)),V=Math.min(t.nx-1,Math.floor((Math.max(v,w,y)-t.x0)/t.cell)),C=Math.max(0,Math.ceil((Math.min(_,E,R)-t.y0)/t.cell)),k=Math.min(t.ny-1,Math.floor((Math.max(_,E,R)-t.y0)/t.cell));for(let H=C;H<=k;H++)for(let Y=D;Y<=V;Y++){let J=t.x0+(Y+5e-4)*t.cell,q=t.y0+(H+7e-4)*t.cell,Z=((E-R)*(J-y)+(y-w)*(q-R))/A,K=((R-_)*(J-y)+(v-y)*(q-R))/A,lt=1-Z-K;if(Z<0||K<0||lt<0)continue;let dt=Z*S+K*b+lt*z,Tt=H*t.nx+Y;dt>i[Tt]&&(i[Tt]=dt),r[Tt]+=L*dt}}return{h:i,mat:r}}function Vu(n,t){let e=new Uint8Array(t.nx*t.ny);for(let i=0;i<t.ny;i++){let r=t.y0+i*t.cell,o=[];for(let l of n)for(let h=0;h<l.length;h++){let[u,d]=l[h],[g,v]=l[(h+1)%l.length];d<=r!=v<=r&&o.push(u+(r-d)/(v-d)*(g-u))}o.sort((l,h)=>l-h);for(let l=0;l+1<o.length;l+=2){let h=Math.max(0,Math.ceil((o[l]-t.x0)/t.cell)),u=Math.min(t.nx-1,Math.floor((o[l+1]-t.x0)/t.cell));for(let d=h;d<=u;d++)e[i*t.nx+d]=1}}return e}function Rc(n,t){let e=n.positions,i=n.indices,r=[],o=i.length/3;for(let l=0;l<o;l++){let h=[i[l*3]*3,i[l*3+1]*3,i[l*3+2]*3],u=[];for(let d=0;d<3;d++){let g=h[d],v=h[(d+1)%3],_=e[g+2]-t,S=e[v+2]-t;if(_<0!=S<0){let w=_/(_-S);u.push([e[g]+(e[v]-e[g])*w,e[g+1]+(e[v+1]-e[g+1])*w])}}u.length===2&&r.push(u)}return cg(r)}function cg(n){let t=([o,l])=>`${Math.round(o*1e4)},${Math.round(l*1e4)}`,e=new Map;n.forEach((o,l)=>{for(let h of[0,1]){let u=t(o[h]);e.has(u)||e.set(u,[]),e.get(u).push(l)}});let i=new Uint8Array(n.length),r=[];for(let o=0;o<n.length;o++){if(i[o])continue;i[o]=1;let l=[n[o][0],n[o][1]],h=t(n[o][0]),u=n[o][1];for(let d=0;d<n.length;d++){let g=t(u);if(g===h)break;let v=(e.get(g)||[]).find(S=>!i[S]);if(v===void 0)break;i[v]=1;let _=n[v];u=t(_[0])===g?_[1]:_[0],t(u)!==h&&l.push(u)}l.length>=3&&r.push(l)}return r}function Xu(n){let t={};for(let o of Object.keys(Cc)){let l=yr(Jo(n,o));t[o]={reachable:!l.undercut,missed:l.missed,missedTotal:l.missedTotal,undercutArea:l.undercutArea,slopedArea:l.slopedArea,slopedShare:l.slopedShare,height:l.size[2]}}let e=Object.keys(Cc),i=e.some(o=>t[o].slopedShare>Lc),r=e.slice().sort((o,l)=>{let h=t[o],u=t[l];return(h.reachable===u.reachable?0:h.reachable?-1:1)||(i&&Math.abs(h.height-u.height)>1?h.height-u.height:0)||(Math.abs(h.missed-u.missed)>1e-4?h.missed-u.missed:0)||(Math.abs(h.missedTotal-u.missedTotal)>1e-4?h.missedTotal-u.missedTotal:0)||(Math.abs(h.slopedArea-u.slopedArea)>1e-6?h.slopedArea-u.slopedArea:0)||(Math.abs(h.height-u.height)>1e-6?h.height-u.height:0)||e.indexOf(o)-e.indexOf(l)});if(!r.some(o=>t[o].reachable))for(let o of e)t[o].reachable=!0;return{sides:t,best:r[0]}}var Cc,Jo,zu,Lc,Nc=mn(()=>{Ws();Cc={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],left:[-1,0,0],right:[1,0,0]};Jo=(n,t)=>Ic(n,sg(typeof t=="string"?Cc[t]:t));zu=.05;Lc=.2});function pg(n){let t=new Set;for(let e of n){let i=e.match(/CONVERSION_BASED_UNIT\s*\(\s*'([^']*)'/);if(i){let l=dg[i[1].trim().toUpperCase()];if(!l)return null;t.add(l);continue}let r=e.match(/SI_UNIT\s*\(\s*(\$|\.(\w+)\.)\s*,\s*\.METRE\.\s*\)/);if(!r)return null;let o=r[2]?fg[r[2]]:1e3;if(!o)return null;t.add(o)}return t.size===1?[...t][0]:null}function*mg(n){let t=n.indexOf("DATA;");if(t<0)return;let e=t+5,i=e,r=!1;for(;e<n.length;e++){let o=n.charCodeAt(e);if(o===39)r=!r;else if(o===59&&!r){let l=n.slice(i,e).trim();if(i=e+1,l==="ENDSEC")return;let h=l.match(/^#(\d+)\s*=\s*([\s\S]*)$/);h&&(yield[+h[1],h[2]])}}}function gg(n){let t=[0,0,0];for(let e=0;e<n.length;e++){let i=n[e],r=n[(e+1)%n.length];t[0]+=(i[1]-r[1])*(i[2]+r[2]),t[1]+=(i[2]-r[2])*(i[0]+r[0]),t[2]+=(i[0]-r[0])*(i[1]+r[1])}for(let e=0;e<n.length;e++){let i=n[e],r=n[(e+1)%n.length],o=n[(e+2)%n.length],l=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],h=[o[0]-r[0],o[1]-r[1],o[2]-r[2]];if((l[1]*h[2]-l[2]*h[1])*t[0]+(l[2]*h[0]-l[0]*h[2])*t[1]+(l[0]*h[1]-l[1]*h[0])*t[2]<-1e-12)return!1}return!0}function Wu(n){let t=typeof n=="string"?n:new TextDecoder("latin1").decode(n);if(!t.startsWith("ISO-10303-21")||!t.includes("POLY_LOOP")||!t.includes("FACETED_BREP"))return null;let e=new Map,i=new Map,r=new Map,o=new Map,l=new Map,h=[],u=[];for(let[S,w]of mg(t)){if(w.startsWith("(")){/\bLENGTH_UNIT\s*\(/.test(w)&&u.push(w);continue}let E=w.match(/^([A-Z0-9_]+)\s*\(/);if(!E)continue;let b=E[1];if(ug.test(b))return null;if(!hg.has(b))continue;let y=w.slice(E[0].length,w.lastIndexOf(")"));if(b==="CARTESIAN_POINT"){let R=y.match(/\(([^()]*)\)\s*$/),z=R?R[1].split(",").map(Number):[];if(z.length!==3||z.some(A=>!Number.isFinite(A)))return null;e.set(S,z)}else b==="POLY_LOOP"?i.set(S,Ys(y.slice(y.indexOf("(")))):b==="FACE_OUTER_BOUND"?r.set(S,{loop:Ys(y)[0],reversed:/\.F\.\s*$/.test(y)}):b==="FACE_SURFACE"||b==="FACE"?o.set(S,Ys(y.slice(y.indexOf("("),y.indexOf(")")+1))):b==="CLOSED_SHELL"||b==="OPEN_SHELL"?l.set(S,Ys(y)):b==="FACETED_BREP"&&h.push(Ys(y)[0])}let d=pg(u);if(!d||!h.length)return null;let g=[],v=[],_=[];for(let S of h){let w=l.get(S);if(!w)return null;for(let E of w){let b=o.get(E);if(!b||b.length!==1)return null;let y=r.get(b[0]),R=y&&i.get(y.loop);if(!R||R.length<3)return null;let z=y.reversed?R.slice().reverse():R,A=z.map(V=>e.get(V));if(A.some(V=>!V)||A.length>3&&!gg(A))return null;let L=g.length/3,D=v.length/3;for(let V of A)g.push(V[0]*d,V[1]*d,V[2]*d);for(let V=1;V+1<z.length;V++)v.push(L,L+V,L+V+1);_.push({first:D,last:v.length/3-1})}}return{positions:Float64Array.from(g),indices:Uint32Array.from(v),faces:_,solids:h.length,names:[]}}var hg,ug,fg,dg,Ys,Yu=mn(()=>{hg=new Set(["CARTESIAN_POINT","POLY_LOOP","FACE_OUTER_BOUND","FACE_SURFACE","FACE","PLANE","AXIS2_PLACEMENT_3D","DIRECTION","CLOSED_SHELL","OPEN_SHELL","FACETED_BREP","SHELL_BASED_SURFACE_MODEL"]),ug=/^(ADVANCED_FACE|EDGE_LOOP|FACE_BOUND|ORIENTED_FACE|ORIENTED_CLOSED_SHELL|BREP_WITH_VOIDS|MAPPED_ITEM|ITEM_DEFINED_TRANSFORMATION|NEXT_ASSEMBLY_USAGE_OCCURRENCE|MANIFOLD_SOLID_BREP)$/,fg={EXA:1e21,PETA:1e18,TERA:1e15,GIGA:1e12,MEGA:1e9,KILO:1e6,HECTO:1e5,DECA:1e4,DECI:100,CENTI:10,MILLI:1,MICRO:.001,NANO:1e-6},dg={MILLIMETRE:1,MILLIMETER:1,MM:1,CENTIMETRE:10,CENTIMETER:10,METRE:1e3,METER:1e3,INCH:25.4,IN:25.4,FOOT:304.8,FT:304.8},Ys=n=>[...n.matchAll(/#(\d+)/g)].map(t=>+t[1])});async function qu(n,t=""){let e=n instanceof Uint8Array?n:new Uint8Array(n);return/\.stl$/i.test(t)?vg(e):/\.3mf$/i.test(t)?Sg(e):null}function vg(n){let t=new DataView(n.buffer,n.byteOffset,n.byteLength);if(n.byteLength>=84){let o=t.getUint32(80,!0);if(84+o*50===n.byteLength){let l=new Float64Array(o*9),h=new Uint32Array(o*3);for(let u=0;u<o;u++){let d=84+u*50+12;for(let g=0;g<9;g++)l[u*9+g]=t.getFloat32(d+g*4,!0);h[u*3]=u*3,h[u*3+1]=u*3+1,h[u*3+2]=u*3+2}if(!o)throw new Error("This STL file has no triangles.");return Dc(l,h)}}let e=new TextDecoder().decode(n);if(!/^\s*solid/.test(e))throw new Error("This isn\u2019t an STL file ncCAM can read.");let i=[];for(let o of e.matchAll(/vertex\s+(\S+)\s+(\S+)\s+(\S+)/g))i.push(+o[1],+o[2],+o[3]);let r=Math.floor(i.length/9);if(!r||i.some(o=>!Number.isFinite(o)))throw new Error("This STL file has no triangles ncCAM can read.");return i.length=r*9,Dc(i,Array.from({length:r*3},(o,l)=>l))}function yg(n){let t=new DataView(n.buffer,n.byteOffset,n.byteLength),e=-1;for(let u=n.byteLength-22;u>=Math.max(0,n.byteLength-65557);u--)if(t.getUint32(u,!0)===101010256){e=u;break}if(e<0)throw new Error("This 3MF file is damaged (not a zip).");let i=u=>t.getUint32(u,!0)+t.getUint32(u+4,!0)*2**32,r=4294967295,o=t.getUint16(e+10,!0),l=t.getUint32(e+16,!0);if((l===r||o===65535)&&e>=20&&t.getUint32(e-20,!0)===117853008){let u=i(e-12);if(t.getUint32(u,!0)!==101075792)throw new Error("This 3MF file is damaged (zip64).");o=i(u+32),l=i(u+48)}let h=new Map;for(let u=0;u<o&&!(l+46>n.byteLength||t.getUint32(l,!0)!==33639248);u++){let d=t.getUint16(l+10,!0),g=t.getUint32(l+20,!0),v=t.getUint32(l+24,!0),_=t.getUint16(l+28,!0),S=t.getUint16(l+30,!0),w=t.getUint16(l+32,!0),E=t.getUint32(l+42,!0);for(let y=l+46+_;y+4<=l+46+_+S;){let R=t.getUint16(y,!0),z=t.getUint16(y+2,!0);if(R===1){let A=y+4;v===r&&(v=i(A),A+=8),g===r&&(g=i(A),A+=8),E===r&&(E=i(A),A+=8)}y+=4+z}let b=new TextDecoder().decode(n.subarray(l+46,l+46+_));h.set(b.replace(/^\//,""),{method:d,size:g,local:E}),l+=46+_+S+w}return{has:u=>h.has(u.replace(/^\//,"")),async text(u){let d=h.get(u.replace(/^\//,""));if(!d)throw new Error(`This 3MF file is missing ${u}.`);let g=d.local+30+t.getUint16(d.local+26,!0)+t.getUint16(d.local+28,!0),v=n.subarray(g,g+d.size),_=v;if(d.method===8)_=new Uint8Array(await new Response(new Blob([v]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).arrayBuffer());else if(d.method!==0)throw new Error("This 3MF file is compressed in a way ncCAM can\u2019t read.");return new TextDecoder().decode(_)}}}function bg(n){let t=_g[gn(n.slice(0,2e3).match(/<model\b[^>]*>/)?.[0]||"","unit")||"millimeter"]??1,e=new Map,i=new Set,r=/<object\b([^>]*)>([\s\S]*?)<\/object>/g;for(let l;l=r.exec(n);){let h=gn(l[1],"id"),u=l[2],d=gn(l[1],"type");if(d&&d!=="model"){i.add(h);continue}if(u.includes("<mesh")){let g=[],v=[];for(let _ of u.matchAll(/<vertex\b([^>]*)\/?>/g))g.push(+gn(_[1],"x"),+gn(_[1],"y"),+gn(_[1],"z"));for(let _ of u.matchAll(/<triangle\b([^>]*)\/?>/g))v.push(+gn(_[1],"v1"),+gn(_[1],"v2"),+gn(_[1],"v3"));e.set(h,{pos:g,tri:v})}else{let g=[...u.matchAll(/<component\b([^>]*)\/?>/g)].map(v=>({id:gn(v[1],"objectid"),path:gn(v[1],"p:path"),transform:$u(gn(v[1],"transform"))}));e.set(h,{components:g})}}let o=[...(n.match(/<build\b[\s\S]*?<\/build>/)?.[0]||"").matchAll(/<item\b([^>]*)\/?>/g)].map(l=>({id:gn(l[1],"objectid"),path:gn(l[1],"p:path"),transform:$u(gn(l[1],"transform"))}));return{unit:t,objects:e,skipped:i,build:o}}async function Sg(n){let t=yg(n),e="3D/3dmodel.model";if(t.has("_rels/.rels")){let v=[...(await t.text("_rels/.rels")).matchAll(/<Relationship\b([^>]*)\/?>/g)].find(_=>/3dmodel/.test(gn(_[1],"Type")||""));v&&(e=gn(v[1],"Target").replace(/^\//,""))}let i=new Map,r=async g=>(i.has(g)||i.set(g,bg(await t.text(g))),i.get(g)),o=await r(e),l=[],h=[],u=0,d=async(g,v,_,S=0)=>{if(S>16)throw new Error("This 3MF file nests objects too deeply.");let w=await r(g),E=w.objects.get(v);if(!E&&w.skipped.has(v))return;if(!E)throw new Error(`This 3MF file is missing object ${v}.`);if(E.components){for(let z of E.components)await d(z.path?z.path.replace(/^\//,""):g,z.id,Mg(z.transform,_),S+1);return}let b=w.unit,y=l.length/3;for(let z=0;z<E.pos.length;z+=3){let A=E.pos[z],L=E.pos[z+1],D=E.pos[z+2];l.push((A*_[0]+L*_[3]+D*_[6]+_[9])*b,(A*_[1]+L*_[4]+D*_[7]+_[10])*b,(A*_[2]+L*_[5]+D*_[8]+_[11])*b)}let R=_[0]*(_[4]*_[8]-_[5]*_[7])-_[1]*(_[3]*_[8]-_[5]*_[6])+_[2]*(_[3]*_[7]-_[4]*_[6]);for(let z=0;z<E.tri.length;z+=3)R<0?h.push(y+E.tri[z],y+E.tri[z+2],y+E.tri[z+1]):h.push(y+E.tri[z],y+E.tri[z+1],y+E.tri[z+2]);u++};for(let g of o.build)await d(g.path?g.path.replace(/^\//,""):e,g.id,g.transform);if(!h.length)throw new Error("This 3MF file has no objects to cut.");if(l.some(g=>!Number.isFinite(g))||h.some(g=>g>=l.length/3))throw new Error("This 3MF file is damaged (bad vertex numbers).");return Dc(l,h,u)}var _g,Dc,gn,xg,$u,Mg,Zu=mn(()=>{_g={micron:.001,millimeter:1,centimeter:10,inch:25.4,foot:304.8,meter:1e3};Dc=(n,t,e=1)=>({positions:n instanceof Float64Array?n:Float64Array.from(n),indices:t instanceof Uint32Array?t:Uint32Array.from(t),faces:[],solids:e,names:[]});gn=(n,t)=>{let e=n.match(new RegExp(`(?:^|\\s)${t}\\s*=\\s*"([^"]*)"`));return e?e[1]:null},xg=[1,0,0,0,1,0,0,0,1,0,0,0],$u=n=>{let t=(n||"").trim().split(/\s+/).map(Number);return t.length===12&&t.every(Number.isFinite)?t:xg},Mg=(n,t)=>{let e=new Array(12);for(let i=0;i<4;i++)for(let r=0;r<3;r++)e[i*3+r]=(i<3?0:t[9+r])+n[i*3]*t[r]+n[i*3+1]*t[3+r]+n[i*3+2]*t[6+r];return e}});function Oc(n,t){let e=n.diameter/2,i=Math.ceil(e/t),r=[];for(let l=-i;l<=i;l++)for(let h=-i;h<=i;h++){let u=Math.hypot(h,l)*t;if(u>e+1e-6)continue;let d=Math.min(u,e),g=0;if(n.kind==="ball")g=e-Math.sqrt(Math.max(0,e*e-d*d));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let v=(n.angle||(n.kind==="drill"?118:60))*Math.PI/360;g=d/Math.tan(v)}r.push(h,l,g,u)}let o=Float32Array.from(r);return o.inner=Math.max(0,e-t*Math.SQRT1_2),o}function wg(n,t,e,i,r,o){let l=Math.hypot(i.x-e.x,i.y-e.y),h=Math.max(1,Math.ceil(l/(n.cell*.5))),u=!1;for(let d=r?0:1;d<=h;d++){let g=d/h,v=(e.x+(i.x-e.x)*g-n.x0)/n.cell,_=(e.y+(i.y-e.y)*g-n.y0)/n.cell,S=e.z+(i.z-e.z)*g;if(S>=n.top)continue;let w=Math.round(v),E=Math.round(_);for(let b=0;b<t.length;b+=4){let y=w+t[b],R=E+t[b+1];if(y<0||R<0||y>=n.nx||R>=n.ny)continue;let z=R*n.nx+y,A=S+t[b+2];if(n.h[z]>A+1e-4){if(r){n.h[z]>A+.05&&t[b+3]<=t.inner&&(u=!0);continue}n.h[z]=A,n.op[z]=o+1}}}return u}function ju(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function Fc(n,t,e,i,r){let o=t.diameter/2,l=n.cell,h=o/l,u=t.kind==="ball"?q=>o-Math.sqrt(Math.max(0,o*o-q*q)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(q=>Z=>Z/q)(Math.tan((t.angle||(t.kind==="drill"?118:60))*Math.PI/360)):()=>0,d=!t.kind||t.kind==="flat"||t.kind==="surfacing",{h:g,sx:v,sy:_,wx:S,wy:w,gap:E,deep:b,nx:y,ny:R}=n,z=1.5*l,A=h+1.5,L=(q,Z,K,lt)=>{let dt=Math.hypot(Z,K);if(dt>A)return;let Tt=dt*l;if(Tt<=o){let xt=lt+u(Tt);if(g[q]>xt+1e-4)g[q]=xt,n.op[q]=r+1,E[q]=1/0,b[q]=-1/0;else if(g[q]<xt-1e-4)return;o-Tt>b[q]&&(b[q]=o-Tt,d&&o-Tt<z&&dt>1e-6?(v[q]=Z/dt*(o-Tt),_[q]=K/dt*(o-Tt),S[q]=-Z/dt,w[q]=-K/dt):(v[q]=0,_[q]=0,S[q]=0,w[q]=0))}else d&&g[q]>lt+1e-4&&Tt-o<E[q]&&(E[q]=Tt-o,v[q]=Z/dt*(o-Tt),_[q]=K/dt*(o-Tt),S[q]=-Z/dt,w[q]=-K/dt)},D=(e.x-n.x0)/l,V=(e.y-n.y0)/l,C=(i.x-n.x0)/l,k=(i.y-n.y0)/l;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let q=C-D,Z=k-V,K=q*q+Z*Z,lt=Math.max(0,Math.floor(Math.min(D,C)-A)),dt=Math.min(y-1,Math.ceil(Math.max(D,C)+A)),Tt=Math.max(0,Math.floor(Math.min(V,k)-A)),xt=Math.min(R-1,Math.ceil(Math.max(V,k)+A));for(let Ct=Tt;Ct<=xt;Ct++)for(let Nt=lt;Nt<=dt;Nt++){let ct=K>0?Math.max(0,Math.min(1,((Nt-D)*q+(Ct-V)*Z)/K)):0;L(Ct*y+Nt,Nt-(D+q*ct),Ct-(V+Z*ct),e.z)}return}let H=Math.hypot(i.x-e.x,i.y-e.y),Y=Math.max(1,Math.ceil(H/(l*.5))),J=Math.ceil(A);for(let q=1;q<=Y;q++){let Z=q/Y,K=D+(C-D)*Z,lt=V+(k-V)*Z,dt=e.z+(i.z-e.z)*Z;if(dt>=n.top)continue;let Tt=Math.max(0,Math.floor(K-J)),xt=Math.min(y-1,Math.ceil(K+J)),Ct=Math.max(0,Math.floor(lt-J)),Nt=Math.min(R-1,Math.ceil(lt+J));for(let ct=Ct;ct<=Nt;ct++)for(let It=Tt;It<=xt;It++)L(ct*y+It,It-K,ct-lt,dt)}}function Ju(n,t){let e=new qi(n.stock,t||qi.cellFor(n.stock)),i=[];return n.ops.forEach((r,o)=>{if(!r.enabled||!r.moves)return;let l=Oc(r.tool,e.cell),h=null;for(let u of r.moves)h&&wg(e,l,h,u,!!u.r,o)&&i.push({op:r.id,at:u}),h=u}),{hm:e,collisions:i}}function Ku(n,t){let e=new Float32Array(t.nx*t.ny).fill(-1/0),i=n.positions,r=n.indices;for(let o=0;o<r.length;o+=3){let l=r[o]*3,h=r[o+1]*3,u=r[o+2]*3,d=i[l],g=i[l+1],v=i[l+2],_=i[h],S=i[h+1],w=i[h+2],E=i[u],b=i[u+1],y=i[u+2],R=(S-b)*(d-E)+(E-_)*(g-b);if(Math.abs(R)<1e-12)continue;let z=Math.max(0,Math.floor((Math.min(d,_,E)-t.x0)/t.cell)),A=Math.min(t.nx-1,Math.ceil((Math.max(d,_,E)-t.x0)/t.cell)),L=Math.max(0,Math.floor((Math.min(g,S,b)-t.y0)/t.cell)),D=Math.min(t.ny-1,Math.ceil((Math.max(g,S,b)-t.y0)/t.cell));for(let V=L;V<=D;V++)for(let C=z;C<=A;C++){let k=t.x0+C*t.cell,H=t.y0+V*t.cell,Y=((S-b)*(k-E)+(E-_)*(H-b))/R,J=((b-g)*(k-E)+(d-E)*(H-b))/R,q=1-Y-J;if(Y<-1e-9||J<-1e-9||q<-1e-9)continue;let Z=Y*v+J*w+q*y,K=V*t.nx+C;Z>e[K]&&(e[K]=Z)}}return e}var qi,Uc=mn(()=>{qi=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});function Qu(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return Eg.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t||"flat"}function Mr(n,t){return(typeof t=="string"?t:t?.mode)==="toolId"?n.toolId??n.id:n.toolNumber?n.toolNumber:t?.manual?.get(n.id)??n.toolId??n.id}function tf(n,t,e=0,i=null){if(n==="toolId")return{mode:n};let r=new Set(t.filter(u=>u.toolNumber).map(u=>u.toolNumber));for(let u=1;u<=e;u++)r.add(u);i&&r.add(i);let o=new Map,l=t.filter(u=>!u.toolNumber);for(let u of l){let d=u.toolId??u.id;d>e&&!r.has(d)&&(o.set(u.id,d),r.add(d))}let h=e+1;for(let u of l)if(!o.has(u.id)){for(;r.has(h);)h++;o.set(u.id,h),r.add(h)}return{mode:n,manual:o}}function ef(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${Qu(t)}`,kind:Qu(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2}))}function nf(n,t,e,i={}){let r=xr[t]||xr.mdf,o=jn[e]||jn.balanced,l=i.maxRpm||24e3,h=i.minRpm||0,u=Math.round(Math.min(l,Math.max(h,r.rpm))),d=Math.min(r.maxChip,r.chip*n.diameter),g=Math.min(i.maxFeed||4e3,4e3),v=Math.round(Math.min(g,Math.max(150,u*n.flutes*d*o.feed)));return{rpm:u,feed:v,plunge:Math.round(Math.max(60,v*.3)),stepdown:Math.max(.05,n.diameter*r.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,r.stepover*o.stepover)),rampAngle:r.ramp}}var xr,jn,Eg,Zi,$s=mn(()=>{xr={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},jn={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},Eg=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"]);Zi=n=>n==="aluminum"?{height:1,length:1}:{height:2,length:2}});var Un={};Lu(Un,{INCH:()=>Tg,len:()=>Qo,num:()=>Ko,toMm:()=>Cg,unitsFrom:()=>Ag});function Ko(n,t="mm",e=t==="in"?3:1){let i=t==="in"?n/25.4:n;return(Math.round(i*10**e)/10**e).toLocaleString("en-US",{maximumFractionDigits:e})}var Tg,Ag,Qo,Cg,Bc=mn(()=>{Tg=25.4,Ag=n=>n==="imperial"?"in":"mm";Qo=(n,t="mm",e)=>`${Ko(n,t,e)} ${t}`,Cg=(n,t="mm")=>t==="in"?n*25.4:n});function Zs(n){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:2,extraTop:1,width:n.size[0]+4,depth:n.size[1]+4,thickness:n.size[2]+1},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,...Zi("mdf")},throughDepth:.3,disabled:{},toolOverride:{}}}function na(n,t){let[e,i,r]=n.size,o=t.stock,l=o.fit?e+2*o.margin:Math.max(e,o.width),h=o.fit?i+2*o.margin:Math.max(i,o.depth),u=o.fit?r+o.extraTop:Math.max(r,o.thickness);return{minX:(e-l)/2,minY:(i-h)/2,maxX:(e+l)/2,maxY:(i+h)/2,bottom:0,top:u,width:l,depth:h,thickness:u}}function zc(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,r=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(r=n.minY),e.includes("back")&&(r=n.maxY),{x:i,y:r,z:t.z==="bed"?n.bottom:n.top}}function Rg(n){let t=n.positions,e=n.indices,i=[];for(let r=0;r<e.length/3;r++){if(Pc(n,r)[2]>-.001)continue;let l=[e[r*3]*3,e[r*3+1]*3,e[r*3+2]*3],h=l.map(u=>[t[u],t[u+1]]);Math.abs(qn(h))<1e-6||i.push({loop:qn(h)>0?h:h.reverse(),maxZ:Math.max(...l.map(u=>t[u+2]))})}return i}function Ng(n){if(n.length!==1)return null;let t=n[0];if(t.length<12)return null;let e=Li([t]),i=(e.minX+e.maxX)/2,r=(e.minY+e.maxY)/2,o=t.map(([h,u])=>Math.hypot(h-i,u-r)),l=o.reduce((h,u)=>h+u,0)/o.length;return o.every(h=>Math.abs(h-l)<Math.max(.03,l*.01))?{x:i,y:r,d:2*l}:null}function af(n,t,e,i={}){let r=ct=>Qo(ct,e.units),o=ct=>Ko(ct,e.units),l=yr(n),h=na(l,e),u=jn[e.finish]||jn.balanced,d=[],g=e.surface3d??l.slopedShare>Lc;l.squareEdges&&d.push({kind:"edges",text:"Chamfers or rounded edges face down on this side, so they are left square."}),l.undercut&&d.push({kind:"undercut",text:"Some features face the other side, so they can\u2019t be reached from the top. Cut this side, then turn the part over for a second setup."});let v=t.filter(ct=>ct.kind==="flat").sort((ct,It)=>It.diameter-ct.diameter),_=t.filter(ct=>ct.kind==="drill"),S=t.filter(ct=>ct.kind==="surfacing").sort((ct,It)=>It.diameter-ct.diameter),w=new Map,E=ct=>(ct&&w.set(ct.id,(w.get(ct.id)||0)+1),ct),b=e.material==="aluminum"?8:12.8,y=l.undercutArea>0?Rg(n).sort((ct,It)=>It.maxZ-ct.maxZ):[],R=[],z=ct=>{let It=0,Xt=y.length;for(;It<Xt;){let Ot=It+Xt>>1;y[Ot].maxZ>ct+Di?It=Ot+1:Xt=Ot}let Gt=It;if(!Gt)return[];let Vt=null;for(let Ot of R)Ot.k<=Gt&&(!Vt||Ot.k>Vt.k)&&(Vt=Ot);if(Vt?.k===Gt)return Vt.loops;let _t=y.slice(Vt?Vt.k:0,Gt).map(Ot=>Ot.loop),Et=ku(Vt?[...Vt.loops,..._t]:_t);return R.push({k:Gt,loops:Et}),Et},A=new Map,L=ct=>{if(A.has(ct))return A.get(ct);let It=Zo(Rc(n,ct+Di)),Xt=z(ct),Gt=Xt.length?Fe(Fe(ni([...It,...Xt]),.002),-.002):It;return A.set(ct,Gt),Gt},D=L(0),V=ni(Zn(D).map(ct=>ct[0])),C=[],k=1,H=ct=>(ct.id=ct.id||`op${k++}`,C.push(ct),ct);function Y(ct,It,Xt){let Gt=v.filter(Ot=>Ot.diameter<=b&&Yr(Ot,It)&&Fe(ct,-(Ot.diameter/2+Xt)).length);if(!Gt.length)return null;let Vt=Gt.map(Ot=>({t:Ot,c:Dg(ct,Ot.diameter/2)})),_t=Vt.find(Ot=>Ot.c>=.85)||Vt.reduce((Ot,Qt)=>Qt.c>Ot.c?Qt:Ot);return(Vt.find(Ot=>w.has(Ot.t.id)&&Ot.c>=Math.min(.85,_t.c*.98))||_t).t}function J(ct,It,Xt){let Gt=xn(_i(ct,qs(ct,It.diameter/2)),on);if(nn(Gt)<on)return null;let Vt=v.filter(Ot=>Ot.diameter<It.diameter-1e-6&&Yr(Ot,Xt));if(!Vt.length)return{tool:null,left:Gt};let _t=nn(Gt);return{tool:Vt.find(Ot=>nn(xn(_i(ct,qs(ct,Ot.diameter/2)),on))<_t*.25)||Vt[Vt.length-1],left:Gt}}let q=ct=>nf(ct,e.material,e.finish,i);if(h.top>l.top+Di){let ct=S[0]||v[0];ct&&H({id:"face",kind:"face",label:"Flatten the top",tool:E(ct),zTop:h.top,zBottom:l.top,region:sf(h),detail:`${r(h.top-l.top)} off the top`})}let Z=g&&K();function K(){let ct=l.top+e.throughDepth,It=ne=>ne.diameter<=b&&Yr(ne,ct),Xt=v.find(ne=>w.has(ne.id)&&It(ne))||v.find(It);if(!Xt)return d.push({kind:"notool",text:`No end mill is long enough to rough the 3D shape (${r(ct)}), so it is cut in 2.5D.`}),!1;let Gt=t.filter(ne=>ne.kind==="ball"&&It(ne)).sort((ne,Ce)=>Math.abs(ne.diameter-6.35)-Math.abs(Ce.diameter-6.35)),Vt=Gt[0]||Xt;Gt.length||d.push({kind:"noball",text:`No ball end mill in your Tool Library is long enough, so ${Xt.name} finishes the 3D surface. A ball end mill leaves it much smoother.`});let _t=Math.min(q(Xt).stepdown,q(Vt).stepdown),Et=[l.top,...l.floors.filter(ne=>ne<l.top-Di&&ne>Di&&(l.floorAreas[ne]||0)>=Pg),0],Ot=[];for(let ne=1;ne<Et.length;ne++){let Ce=Math.max(1,Math.ceil((Et[ne-1]-Et[ne])/_t-1e-6));for(let ve=1;ve<=Ce;ve++)Ot.push(ve===Ce?Et[ne]:Et[ne-1]-ve*(Et[ne-1]-Et[ne])/Ce)}let Qt=Fe(V,Math.max(Xt.diameter,Vt.diameter)+1),et=[],oe=l.top,Ue=null;for(let ne of Ot){let Ce=ne<=Di,ve=xn(_i(Ce?V:Qt,L(Ce?0:ne)),on),Ae=Ue?xn(Ri(ve,Ue),on):ve,at=Ue?xn(_i(ve,Ue),on):[],ze={zFrom:oe,z:Ce?-e.throughDepth:ne,exact:Ae,region:Ni(Ae,rf),fresh:nn(at)>=on&&Fe(at,-.5).length?Ni(at,rf):[]};(nn(Ae)>=on||ze.fresh.length)&&et.push(ze),Ue=ve,oe=ne}if(!et.length)return!1;let ue=ea[e.finish]??ea.balanced,pe=H({kind:"rough3d",label:"Rough the 3D shape",tool:E(Xt),zTop:l.top,zBottom:et[et.length-1].z,region:Qt,layers:et,allowance:ta,detail:`${et.length} layers \xB7 ${r(ta)} left`}),me=(t.find(ne=>ne.id===e.toolOverride?.[pe.id])||Xt).diameter/2,fe=et.map(ne=>{let Ce=Fe(ne.exact,-ta),ve=xn(_i(Ce,qs(Ce,me)),on);return Zn(ve).filter(Ae=>Fe(Ae,-Ig/2).length).flat()}),Te=pe.id;if(fe.some(ne=>nn(ne)>=on)){let ne=v.filter(Se=>Se.diameter<Xt.diameter-1e-6&&It(Se)),Ce=Se=>et.map((X,P)=>nn(fe[P])>=on?xn(_i(fe[P],qs(X.region,Se.diameter/2)),on):[]).flat(),ve=nn(fe.flat()),Ae=ne.find(Se=>nn(Ce(Se))<=ve*.25)||ne[ne.length-1];if(Ae){let Se=Ae.diameter/2,X=et.map((P,it)=>({zFrom:P.zFrom,z:P.z,region:nn(fe[it])>=on?Ri(P.exact,Fe(fe[it],2*Se+.5)):[]})).filter(P=>P.region.length);Te=H({kind:"rest3d",label:"Clear where the big end mill can\u2019t reach",tool:E(Ae),zTop:l.top,zBottom:X[X.length-1].z,region:ni(X.flatMap(P=>P.region)),layers:X,after:pe.id,detail:`${X.length} layers \xB7 holes, slots, corners`}).id}let at=Ae||Xt,ze=Ce(at);Fe(ze,-.25).length?d.push({kind:"notool",text:`Some holes or slots are narrower than ${at.name} and stay uncut: add a smaller end mill to the Tool Library.`}):nn(ze)>=on&&d.push({kind:"corners",text:`Inside corners stay rounded to ${r(at.diameter/2)}: no smaller end mill in your library.`})}return H({kind:"finish3d",label:"Finish the 3D surface",tool:E(Vt),zTop:l.top,zBottom:0,region:V,after:Te,ridge:ue,detail:`Parallel passes${e.finish==="fast"?"":" and waterlines on steep walls"} \xB7 ${Qo(ue,e.units,e.units==="in"?4:2)} ridges`,steep:e.finish!=="fast",left:_t+ta+1.2}),d.push({kind:"surface3d",text:`Curved faces are cut in 3D: roughed in ${et.length} layers, then ${Vt.name} follows the surface.`}),!0}l.sloped&&!Z&&d.push({kind:"sloped",text:"Sloped or curved faces (chamfers, fillets) aren\u2019t cut in 3D yet, so they are left square."});let lt=Z?[]:[l.top,...l.floors.filter(ct=>ct<l.top-Di&&ct>Di),0],dt=[],Tt=(ct,It)=>{let Xt=nn(ct),Gt=nn(It);if(Math.abs(Xt-Gt)>Math.max(on,Xt*.005))return!1;let Vt=Li(ct),_t=Li(It);return Math.abs(Vt.minX-_t.minX)<.01&&Math.abs(Vt.maxX-_t.maxX)<.01&&Math.abs(Vt.minY-_t.minY)<.01&&Math.abs(Vt.maxY-_t.maxY)<.01};for(let ct=1;ct<lt.length;ct++){let It=lt[ct-1],Xt=lt[ct],Gt=_i(sf(h),L(Xt));for(let Vt of Zn(Gt)){if(nn(Vt)<on||!Fe(Vt,-.05).length)continue;let _t=Li([Vt[0]]),Et=_t.minX<=h.minX+.001||_t.maxX>=h.maxX-.001||_t.minY<=h.minY+.001||_t.maxY>=h.maxY-.001,Ot=null;if(Et&&(Xt===0||(Ot=xn(Ri(Vt,V),on),nn(Ot)<on)))continue;let Qt=Et?Ot:Vt,et=dt.find(oe=>oe.zFloor===It&&oe.outer===Et&&Tt(oe.shape,Qt));et?(et.zFloor=Xt,et.region=Vt):dt.push({outer:Et,region:Vt,over:Ot,shape:Qt,zTop:It,zFloor:Xt})}}let xt=new Map;for(let{outer:ct,region:It,over:Xt,zTop:Gt,zFloor:Vt}of dt){let _t=Vt===0,Et=_t?-e.throughDepth:Vt,Ot=Gt-Et;{if(ct){let me=Y(Ri(It,Fe(Xt,13)),Ot,u.allowance);if(!me){d.push({kind:"notool",text:`A step ${r(Gt-Vt)} deep has no end mill that fits.`});continue}let fe=Ri(It,Fe(Xt,me.diameter+.5));H({kind:"step",label:"Cut the step",tool:E(me),zTop:Gt,zBottom:Et,region:fe,walls:It,detail:`${r(Gt-Vt)} deep`});continue}let Qt=Ng(It);if(Qt){let me=`${kc(Qt.d)}|${kc(Gt)}|${kc(Et)}`;xt.has(me)||xt.set(me,{d:Qt.d,zTop:Gt,zBottom:Et,through:_t,centers:[],regions:[]}),xt.get(me).centers.push(Qt),xt.get(me).regions.push(It);continue}let et=Li([It[0]]),oe=Y(It,Ot,u.allowance),Ue=`${o(et.maxX-et.minX)} \xD7 ${r(et.maxY-et.minY)} \xB7 ${_t?"through":`${r(Gt-Vt)} deep`}`;if(!oe){d.push({kind:"notool",text:`No end mill fits the pocket ${Ue}.`});continue}let ue=H({kind:"pocket",label:_t?"Cut the opening":"Clear the pocket",tool:E(oe),zTop:Gt,zBottom:Et,region:It,detail:Ue}),pe=J(It,oe,Ot);pe&&pe.tool?H({kind:"corners",label:"Clean the corners",tool:E(pe.tool),zTop:Gt,zBottom:Et,region:It,after:ue.id,detail:`Corners too tight for ${oe.name}`}):pe&&d.push({kind:"corners",text:`Pocket corners stay rounded to ${r(oe.diameter/2)}: no smaller end mill in your library.`})}}for(let ct of xt.values()){let It=ct.centers.length,Xt=ct.zTop-ct.zBottom,Gt=`\xD8${r(ct.d)} ${ct.through?"through":`${r(ct.zTop-ct.zBottom)} deep`}`,Vt=_.find(Ot=>Lg(Ot.diameter,ct.d)&&Yr(Ot,Xt));if(Vt){H({kind:"drill",label:It>1?`Drill ${It} holes`:"Drill the hole",tool:E(Vt),zTop:ct.zTop,zBottom:ct.zBottom,centers:ct.centers,detail:Gt});continue}let _t=ct.regions.flat().length?ct.regions.flatMap(Ot=>Ot):[],Et=Y(_t,Xt,0)||null;if(!Et||Et.diameter>ct.d-.4){let Ot=v.find(Qt=>Qt.diameter<=ct.d-.4&&Yr(Qt,Xt));if(!Ot){d.push({kind:"notool",text:`No drill or end mill fits the ${Gt} hole${It>1?"s":""}.`});continue}H({kind:"hole",label:It>1?`Cut ${It} holes`:"Cut the hole",tool:E(Ot),zTop:ct.zTop,zBottom:ct.zBottom,region:_t,centers:ct.centers,detail:`${Gt} \xB7 spiral`});continue}H({kind:"hole",label:It>1?`Cut ${It} holes`:"Cut the hole",tool:E(Et),zTop:ct.zTop,zBottom:ct.zBottom,region:_t,centers:ct.centers,detail:`${Gt} \xB7 spiral`})}if(V.length){let ct=l.top+e.throughDepth,It=v.filter(Vt=>Yr(Vt,ct)&&Vt.diameter<=b),Xt=It.find(Vt=>w.has(Vt.id))||It.slice().sort((Vt,_t)=>Math.abs(Vt.diameter-6.35)-Math.abs(_t.diameter-6.35))[0],Gt=e.tabs.enabled?`${e.tabs.count} tabs`:"no tabs";Xt?H({id:"cutout",kind:"cutout",label:"Cut out the part",tool:E(Xt),zTop:l.top,zBottom:-e.throughDepth,region:V,detail:`${r(l.top)} \xB7 ${Gt}`}):d.push({kind:"notool",text:`No end mill is long enough to cut out the part (${r(ct)}).`})}let Ct=[],Nt=new Map;for(let ct of C){if(ct.kind!=="pocket"&&ct.kind!=="corners"){Ct.push(ct);continue}let It=ct.after&&Nt.has(ct.after)?Nt.get(ct.after):ct.after,Xt=Ct.find(Gt=>Gt.kind===ct.kind&&Gt.detail===ct.detail&&Gt.zTop===ct.zTop&&Gt.zBottom===ct.zBottom&&Gt.tool.id===ct.tool.id&&(Gt.after||null)===(It||null));Xt?(Xt.region=[...Xt.region,...ct.region],Xt.count=(Xt.count||1)+1,Nt.set(ct.id,Xt.id)):Ct.push({...ct,after:It})}for(let ct of Ct)ct.count>1&&(ct.kind==="pocket"&&(ct.label=ct.label==="Cut the opening"?`Cut ${ct.count} openings`:`Clear ${ct.count} pockets`),ct.kind==="corners"&&(ct.label=`Clean the corners of ${ct.count} pockets`));C.length=0,C.push(...Ct);for(let ct of C){let It=e.toolOverride?.[ct.id];if(It){let Xt=t.find(Gt=>Gt.id===It);Xt&&(ct.tool=Xt)}ct.enabled=!e.disabled?.[ct.id],ct.feeds=q(ct.tool),ct.kind==="finish3d"&&(ct.surface=Fg(n,h,Math.min(.2,ct.tool.diameter/16)))}return{analysis:l,stock:h,zero:zc(h,e.zero),ops:Og(C),warnings:d,job:e,mode3d:g,did3d:Z}}function Og(n){let t=n.filter(d=>d.kind==="face"),e=n.filter(d=>d.kind==="cutout"),i=n.filter(d=>d.kind!=="face"&&d.kind!=="cutout"),r=d=>d.region||(d.centers||[]).map(g=>Ug(g)),o=new Map(i.map(d=>[d,i.filter(g=>g!==d&&(d.after===g.id||g.zTop>d.zTop+Di&&nn(Ri(r(d),r(g)))>on))])),l=new Set,h=[...t],u=t.length?t[t.length-1].tool:null;for(;l.size<i.length;){let d=i.filter(v=>!l.has(v)&&o.get(v).every(_=>l.has(_))),g=d.find(v=>u&&v.tool.id===u.id)||d[0];l.add(g),h.push(g),u=g.tool}return[...h,...e]}function Fg(n,t,e){let i={x0:t.minX,y0:t.minY,cell:e,nx:Math.ceil((t.maxX-t.minX)/e)+1,ny:Math.ceil((t.maxY-t.minY)/e)+1};return i.h=Ku(n,i),i}function Ug(n,t=32){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}function ia(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var Di,on,ta,Pg,rf,Ig,ea,of,sf,Lg,qs,Dg,Yr,kc,lf=mn(()=>{Nc();Uc();Ws();$s();Bc();Di=.01,on=.05,ta=.3,Pg=25,rf=.1,Ig=.5,ea={fast:.1,balanced:.05,smooth:.02},of=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"];sf=n=>[[[n.minX,n.minY],[n.maxX,n.minY],[n.maxX,n.maxY],[n.minX,n.maxY]]],Lg=(n,t)=>Math.abs(n-t)<.05;qs=(n,t)=>Fe(Fe(n,-t),t),Dg=(n,t)=>{let e=nn(n);return e>0?nn(qs(n,t))/e:0},Yr=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,kc=n=>(Math.round(n*10)/10).toString()});function qr(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(r,o)=>n-(o+1)*(n-t)/i)}function $r(n,t,e,i,r,o,l){let h=[...t.breaks(e,i),i];if(l)for(let d of l.edges(e,i))h.push(d);h.sort((d,g)=>d-g);let u=e;for(let d of h){if(d-u<1e-9)continue;let g=(u+d)/2,v=l&&l.inside(g)?l.top:-1/0,[_,S]=t.at(u),w=Math.max(r(u),v),E=n.at;E&&(Math.abs(E.z-w)>1e-6||Math.abs(E.x-_)>1e-6||Math.abs(E.y-S)>1e-6)&&n.feed(_,S,w,o);let[b,y]=t.at(d);n.feed(b,y,Math.max(r(d),v),o),u=d}}function cf(n,t,e,i,r,o,l){let h=Math.max(0,(i-r)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||h<1e-6){let[d,g]=t.at(e);return n.feed(d,g,l&&l.inside(e)?Math.max(r,l.top):r,o.plunge),$r(n,t,e,e+t.length,()=>r,o.feed,l),e}let u=e+h;return $r(n,t,e,u,d=>i-(d-e)/h*(i-r),Math.min(o.feed,o.plunge*2),l),$r(n,t,u,u+t.length,()=>r,o.feed,l),u}function Vg(n,t,e,i){let r=[];for(let o=t,l=0;l<500;o+=e,l++){let h=Ni(xn(Fe(n,-o,i),.001),.005);if(!h.length)break;r.push(h)}return r}function Hg(n){let t=n.map((r,o)=>r.map(l=>({loop:l,depth:o,kids:[]})));for(let r=1;r<t.length;r++)for(let o of t[r])(t[r-1].find(h=>Xs(o.loop[0],h.loop)&&Math.sign(qn(h.loop))===Math.sign(qn(o.loop)))||t[r-1].find(h=>Xs(o.loop[0],h.loop))||t[0][0]).kids.push(o);let e=[],i=r=>{if(!r.kids.length){e.push([r.loop]);return}for(let o of r.kids)i(o);e[e.length-1].push(r.loop)};for(let r of t[0]||[])qn(r.loop)>0&&i(r);for(let r of t[0]||[])qn(r.loop)<=0&&!t[0].some(o=>o.kids.includes(r))&&i(r);return e}function oa(n,t){let e=0;for(let i of t)Xs(n,i)&&(e+=qn(i)>0?1:-1);return e>0}function Gg(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let r=1;r<i;r++){let o=r/i;if(!oa([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function ra(n,t,e,i,r,o,l,h=null,u=null){let d=Math.min(i.stepover,e*.95),g=Vg(t,e+l,d,l>=.2?.05:void 0);if(!g.length)return;let v=Fe(t,-(e+l)+.01),_=Hg(g),S=r;for(let w of qr(r,o,i.stepdown)){for(let E of _){let b=new ji(E[0]),[y,R]=b.at(0);n.goTo(y,R,Math.max(S,u?u(y,R):S)),n.feed(y,R,S,i.plunge);let z=cf(n,b,0,S,w,i);for(let A=1;A<E.length;A++){let L=b.at(z),D=new ji(E[A]),V=D.nearest(L);if(!Gg(L,D.at(V),v)){[y,R]=D.at(V);let C=n.travel?Math.max(S+1,Math.min(h??1/0,n.travel({x:L[0],y:L[1]},{x:y,y:R}))):h??S+1;n.rapid(L[0],L[1],C),n.rapid(y,R,C);let k=Math.max(S,u?u(y,R):S)+1;C>k&&n.rapid(y,R,k),n.feed(y,R,w,i.plunge)}$r(n,D,V,V+D.length,()=>w,i.feed),b=D,z=V}}S=w}n.retract()}function hf(n,t,e,i,r,o,l){let h=Ni(xn(Fe(t,-e),.001),.005);for(let u of h){let d=new ji(u),[g,v]=d.at(0);n.goTo(g,v,r);for(let _ of qr(r,o,l))n.feed(g,v,_,i.plunge),$r(n,d,0,d.length,()=>_,i.feed*.9);n.retract()}}function Xg(n,t,e,i,r,o,l,h){let u=e?Fe(e,-(i-.05)):null,d=e?Fe(e,-(i+.05)):null,g=v=>!e||oa(v,u)&&!oa(v,d);for(let v of Ni(xn(Fe(t,-(i+.02)),.001),.005)){let _=new ji(v),S=Math.max(8,Math.ceil(_.length/.5)),w=Array.from({length:S},(y,R)=>g(_.at(R/S*_.length)));if(!w.some(Boolean))continue;let E=w.every(Boolean),b=E?0:w.indexOf(!1);for(let y=0;y<S;y++){let R=(b+y)%S;if(!w[R]||!E&&w[(R-1+S)%S])continue;let z=R;for(;z-R<S-1&&w[(z+1)%S];)z++;let A=R/S*_.length,L=E?A+_.length:(z+1)/S*_.length,[D,V]=_.at(A);if(n.goTo(D,V,Math.max(o,h(D,V))),n.feed(D,V,l,r.plunge),$r(n,_,A,L,()=>l,r.feed*.9),n.retract(),E)break}}}function Wg(n,t,e,i,r,o,l){let h=xn(_i(t,Fe(Fe(t,-i),i)),.01);if(!h.length)return;let u=Fe(h,e+.5);for(let d of Ni(xn(Fe(t,-e),.001),.005)){let g=new ji(d),v=Math.max(8,Math.ceil(g.length/.25)),_=Array.from({length:v},(w,E)=>u.some(b=>Xs(g.at(E/v*g.length),b)));if(_.every(Boolean)){hf(n,t,e,r,o,l,r.stepdown);return}let S=_.indexOf(!1);for(let w=0;w<v;w++){let E=(S+w)%v;if(!_[E]||_[(E-1+v)%v])continue;let b=E;for(;_[(b+1)%v]&&b-E<v;)b++;let y=E/v*g.length,R=(b+1)/v*g.length,[z,A]=g.at(y);n.goTo(z,A,o);let L=!0;for(let D of qr(o,l,r.stepdown)){let V=[...g.breaks(y,R),R],C=L?V:[...V.slice(0,-1).reverse(),y],[k,H]=g.at(L?y:R);n.feed(k,H,D,r.plunge);for(let Y of C){let[J,q]=g.at(Y);n.feed(J,q,D,r.feed)}L=!L}n.retract()}}}function Yg(n,t,e,i,r,o){let l=Math.min(i.stepover,e*1.6),h=t.minX-e-2,u=t.maxX+e+2;for(let d of qr(r,o,i.stepdown)){let g=t.minY+e*.6;n.goTo(h,g,r),n.feed(h,g,d,i.plunge);let v=1;for(;n.feed(v>0?u:h,g,d,i.feed),!(g>=t.maxY-e*.6-1e-6);)g=Math.min(g+l,t.maxY-e*.6),n.feed(v>0?u:h,g,d,i.feed),v=-v}n.retract()}function $g(n,t,e,i,r,o){let l=Math.max(.5,o*1.5);for(let h of t){n.goTo(h.x,h.y,i);let u=i;for(;u>r+1e-6;){let d=Math.max(r,u-l);u<i&&n.rapid(h.x,h.y,u+.5),n.feed(h.x,h.y,d,e.plunge),n.rapid(h.x,h.y,i+1),u=d}n.retract()}}function qg(n,t,e,i){let r=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!r)return null;let o=t.tabs.length??Zi(t.material).length,l=2*e+o,h=Array.from({length:r},(d,g)=>{let v=(g+.5)/r*n;return[v-l/2,v+l/2]}),u=n;return{top:i+(t.tabs.height??Zi(t.material).height),inside:d=>{let g=(d%u+u)%u;return h.some(([v,_])=>g>v&&g<_)},edges:(d,g)=>{let v=[];for(let _=Math.floor(d/u);_*u<=g;_++)for(let[S,w]of h)for(let E of[S,w]){let b=_*u+E;b>d&&b<g&&v.push(b)}return v}}}function Zg(n,t,e,i,r,o,l,h){let u=[{off:e+h,fd:i}];h>0&&u.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let d of u)for(let g of Zn(t).map(v=>v[0])){let v=Ni(xn(Fe([g],d.off),.001),.005).filter(_=>qn(_)>0);for(let _ of v){let S=new ji(_.slice().reverse()),w=qg(S.length,l,e,0),[E,b]=S.at(0);n.goTo(E,b,r),n.feed(E,b,r,i.plunge);let y=0,R=r,z=d.finish?qr(r,o,Math.max(i.stepdown,Math.min(6*e,r-o))):qr(r,o,i.stepdown);for(let A of z)y=cf(n,S,y,R,A,d.fd,w),R=A;n.retract()}}}function jg(n,t,e){let i=t.diameter/2,r=n.cell,o=t.kind==="ball",l=r*Math.SQRT1_2,h=Math.ceil((i+l)/r),u=A=>o?i-Math.sqrt(Math.max(0,i*i-A*A)):0,d=[];for(let A=-h;A<=h;A++)for(let L=-h;L<=h;L++){let D=Math.max(0,Math.hypot(L,A)*r-l);D<=i+1e-9&&d.push(L,A,u(D))}let{nx:g,ny:v,h:_,x0:S,y0:w}=n,E={r:i,c:r,n:h,zFloor:e,x:A=>S+A*r,y:A=>w+A*r};E.drop=(A,L)=>{let D=-1/0;for(let V=0;V<d.length;V+=3){let C=A+d[V],k=L+d[V+1];if(C<0||k<0||C>=g||k>=v)continue;let H=_[k*g+C]-d[V+2];H>D&&(D=H)}return D===-1/0?null:Math.max(D,e)},E.dropAt=(A,L)=>{let D=(A-S)/r,V=(L-w)/r,C=(i+l)/r,k=-1/0;for(let H=Math.max(0,Math.ceil(V-C));H<=Math.min(v-1,Math.floor(V+C));H++)for(let Y=Math.max(0,Math.ceil(D-C));Y<=Math.min(g-1,Math.floor(D+C));Y++){let J=Math.max(0,Math.hypot(Y-D,H-V)*r-l);if(J>i)continue;let q=_[H*g+Y]-u(J);q>k&&(k=q)}return k===-1/0?null:Math.max(k,e)},E.underAt=(A,L)=>{let D=(A-S)/r,V=(L-w)/r,C=(i+l)/r,k=e;for(let H=Math.max(0,Math.ceil(V-C));H<=Math.min(v-1,Math.floor(V+C));H++)for(let Y=Math.max(0,Math.ceil(D-C));Y<=Math.min(g-1,Math.floor(D+C));Y++)_[H*g+Y]>k&&(k=_[H*g+Y]);return k};let b=1/0,y=-1,R=1/0,z=-1;for(let A=0;A<v;A++)for(let L=0;L<g;L++)_[A*g+L]!==-1/0&&(L<b&&(b=L),L>y&&(y=L),A<R&&(R=A),A>z&&(z=A));return E.box=y<0?null:{i0:Math.max(0,b-h),i1:Math.min(g-1,y+h),j0:Math.max(0,R-h),j1:Math.min(v-1,z+h)},E}function uf(n,t,e,i,r,o){let l=e[0],h=n.at;if(h&&!h.r&&Math.hypot(l.x-h.x,l.y-h.y)<=r){let d=Math.max(1,Math.ceil(Math.hypot(l.x-h.x,l.y-h.y)/(t.c/2))),g=Math.max(h.z,l.z),v=!1;for(let _=1;_<d;_++){let S=_/d,w=t.dropAt(h.x+(l.x-h.x)*S,h.y+(l.y-h.y)*S)??t.zFloor;w>h.z+(l.z-h.z)*S+.001&&(v=!0,g=Math.max(g,w))}v&&(n.feed(h.x,h.y,g+.5,i.feed),n.feed(l.x,l.y,g+.5,i.feed)),n.feed(l.x,l.y,l.z,i.plunge)}else n.goTo(l.x,l.y,t.underAt(l.x,l.y)+o),n.feed(l.x,l.y,l.z,i.plunge);let u=l;for(let d of e.slice(1))n.feed(d.x,d.y,d.z,u.z-d.z>Jg*Math.hypot(d.x-u.x,d.y-u.y)?i.plunge:i.feed),u=d}function Qg(n,t,e,i,r,o,l,h=!0){let u=jg(t,e,o);if(!u.box)return;let{r:d,c:g}=u,{i0:v,i1:_,j0:S,j1:w}=u.box,E=e.kind==="ball"?2*Math.sqrt(Math.max(0,2*d*r-r*r)):i.stepover*.5,b=Math.max(1,Math.floor(Math.min(E,d)/g+1e-9)),y=3*b*g+1e-6,R=[];for(let z=S;z<=w;z+=b)R.push(z);R[R.length-1]!==w&&R.push(w),R.forEach((z,A)=>{let L=[],D=[];for(let V=v;V<=_;V++){let C=u.drop(V,z);if(C===null){D.length&&L.push(D),D=[];continue}D.push({x:u.x(V),y:u.y(z),z:C})}D.length&&L.push(D),A%2&&(L.reverse(),L.forEach(V=>V.reverse()));for(let V of L)uf(n,u,ff(V,.005),i,y,l)}),h&&t0(n,u,i,Math.min(E,d),y,l),n.retract()}function t0(n,t,e,i,r,o){let{i0:h,i1:u,j0:d,j1:g}=t.box,v=Math.floor((u-h)/2)+1,_=Math.floor((g-d)/2)+1,S=new Float32Array(v*_),w=-1/0;for(let A=0;A<_;A++)for(let L=0;L<v;L++){let D=t.drop(h+L*2,d+A*2);S[A*v+L]=D===null?NaN:D,D!==null&&D>w&&(w=D)}let E=2*t.c,b=Kg*E,y=A=>t.x(h+A*2),R=A=>t.y(d+A*2),z=new Uint8Array(v*_);for(let A=0;A+1<_;A++)for(let L=0;L+1<v;L++){let D=S[A*v+L],V=S[A*v+L+1],C=S[(A+1)*v+L],k=S[(A+1)*v+L+1];[D,V,C,k].some(Number.isNaN)||(Math.abs(D-V)>b||Math.abs(C-k)>b||Math.abs(D-C)>b||Math.abs(V-k)>b)&&(z[A*v+L]=1)}for(let A=w-i/2;A>t.zFloor+.05;A-=i){let L=new Map,D=[],V=(Y,J,q)=>{let Z=q?`h${Y},${J}`:`v${Y},${J}`;if(!L.has(Z)){let K=S[J*v+Y],lt=q?S[J*v+Y+1]:S[(J+1)*v+Y],dt=(A-K)/(lt-K);L.set(Z,{key:Z,x:q?y(Y)+dt*E:y(Y),y:q?R(J):R(J)+dt*E,segs:[]})}return L.get(Z)};for(let Y=0;Y+1<_;Y++)for(let J=0;J+1<v;J++){if(!z[Y*v+J])continue;let q=S[Y*v+J]>A,Z=S[Y*v+J+1]>A,K=S[(Y+1)*v+J]>A,lt=S[(Y+1)*v+J+1]>A,dt=[];q!==Z&&dt.push(V(J,Y,!0)),Z!==lt&&dt.push(V(J+1,Y,!1)),K!==lt&&dt.push(V(J,Y+1,!0)),q!==K&&dt.push(V(J,Y,!1));for(let Tt=0;Tt+1<dt.length;Tt+=2){let xt=[dt[Tt],dt[Tt+1]];D.push(xt),xt[0].segs.push(xt),xt[1].segs.push(xt)}}let C=new Set,k=[];for(let Y of D){if(C.has(Y))continue;C.add(Y);let J=[Y[0],Y[1]];for(let q of[!1,!0])for(;;){let Z=q?J[0]:J[J.length-1],K=Z.segs.find(dt=>!C.has(dt));if(!K)break;C.add(K);let lt=K[0]===Z?K[1]:K[0];q?J.unshift(lt):J.push(lt)}J.length>=3&&k.push(J)}let H=n.at;for(;k.length;){let Y=0,J=1/0,q=!1;k.forEach((lt,dt)=>{for(let[Tt,xt]of[[lt[0],!1],[lt[lt.length-1],!0]]){let Ct=H?Math.hypot(Tt.x-H.x,Tt.y-H.y):0;Ct<J&&(J=Ct,Y=dt,q=xt)}});let[Z]=k.splice(Y,1);q&&Z.reverse();let K=Z.map(lt=>({x:lt.x,y:lt.y,z:Math.max(A,t.dropAt(lt.x,lt.y)??A)}));uf(n,t,ff(K,.005),e,r,o),H=n.at}}}function ff(n,t){if(n.length<3)return n;let e=new Uint8Array(n.length);e[0]=e[n.length-1]=1;let i=[[0,n.length-1]];for(;i.length;){let[r,o]=i.pop(),l=n[r],h=n[o],u=h.x-l.x,d=h.y-l.y,g=h.z-l.z,v=u*u+d*d+g*g,_=-1,S=t;for(let w=r+1;w<o;w++){let E=n[w],b=v>0?((E.x-l.x)*u+(E.y-l.y)*d+(E.z-l.z)*g)/v:0,y=Math.hypot(l.x+u*b-E.x,l.y+d*b-E.y,l.z+g*b-E.z);y>S&&(S=y,_=w)}_>=0&&(e[_]=1,i.push([r,_],[_,o]))}return n.filter((r,o)=>e[o])}function e0(n){let t=[],e=[];return n.forEach((i,r)=>{let o=[];for(let l of Zn(i.region)){let h=Li([l[0]]),u=t.find(g=>g.k===r-1&&g.b.minX<h.maxX&&h.minX<g.b.maxX&&g.b.minY<h.maxY&&h.minY<g.b.maxY&&nn(Ri(g.last,l))>0),d=u?u.spot:{parts:[]};u||e.push(d),d.parts.push({k:r,area:l}),o.push({k:r,b:h,last:l,spot:d})}t.length=0,t.push(...o)}),e.map(i=>Object.assign([...i.parts[0].area],{parts:i.parts}))}function sa(n,t){let e=l=>{let h=Li([l[0]]);return[(h.minX+h.maxX)/2,(h.minY+h.maxY)/2]},i=n.map(l=>({a:l,m:e(l)})),r=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let l=0;for(let u=1;u<i.length;u++)Math.hypot(i[u].m[0]-o[0],i[u].m[1]-o[1])<Math.hypot(i[l].m[0]-o[0],i[l].m[1]-o[1])&&(l=u);let[h]=i.splice(l,1);r.push(h.a),o=h.m}return r}function n0(n,t,e,i,r,o){let l=[...new Set(n.map(u=>u.z))].sort((u,d)=>d-u),h=o;for(let u of l){if(u<t-1e-6||!oa([i,r],i0(n,u,e)))break;h=u}return Math.max(h,t)}function i0(n,t,e){let i=n.filter(h=>Math.abs(h.z-t)<1e-6);n.inner||=new Map;let r=`${t}|${e}`,o=n.inner.get(r);if(o&&o.n===i.length)return o.loops;let l=Fe(ni(i.flatMap(h=>h.area)),-e-zg);return n.inner.set(r,{n:i.length,loops:l}),l}function df(n){let t=n.stock.top+Bg,e=[],i=null,r=(jn[n.job.finish]||jn.balanced).allowance,l=n.ops.some(h=>h.kind==="face"&&h.enabled)?n.analysis.top:n.stock.top;for(let h of n.ops){let u=new Vc(t),d=h.kind!=="face"&&h.zTop>=n.analysis.top-1e-6?Math.max(h.zTop,l):h.zTop,g=h.tool.diameter/2,v=h.feeds,_=Math.min(h.tool.fluteLength||1/0,3*h.tool.diameter);switch(h.kind){case"face":Yg(u,n.stock,g,v,d,h.zBottom);break;case"pocket":case"step":case"hole":for(let S of sa(Zn(h.region),u.at))ra(u,S,g,v,d,h.zBottom,r),r>0&&hf(u,S,g,v,d,h.zBottom,_);break;case"corners":{let S=n.ops.find(w=>w.id===h.after);Wg(u,h.region,g,S?S.tool.diameter/2:g*2,v,d,h.zBottom);break}case"rough3d":case"rest3d":{let S=h.kind==="rough3d"?h.allowance:0,w=E=>(b,y)=>n0(e,h.layers[E].zFrom,g,b,y,d);if(i||=new Hc(n.stock,l),u.travel=(E,b)=>i.over(E,b,g),h.kind==="rest3d"){for(let E of sa(e0(h.layers),u.at))for(let{k:b,area:y}of E.parts){let R=h.layers[b],z=R.zFrom>=n.analysis.top-1e-6?d:R.zFrom;ra(u,y,g,v,z,R.z,0,d+1,w(b));let A=Fe(Fe(y,-g),g);A.length&&h.enabled&&(e.push({zFrom:z,z:R.z,area:A}),i.layer(A,z,R.z))}u.travel=null,u.retract();break}h.layers.forEach((E,b)=>{let y=E.zFrom>=n.analysis.top-1e-6?d:E.zFrom;for(let z of sa(Zn(E.region),u.at))ra(u,z,g,v,y,E.z,S,d+1,w(b));for(let z of sa(Zn(E.fresh||[]),u.at))ra(u,z,g,v,d,E.z,S,d+1);S>0&&b&&Xg(u,E.exact||E.region,h.layers[b-1].exact||h.layers[b-1].region,g,v,y,E.z,w(b));let R=Fe(Fe([...E.region,...E.fresh||[]],-(g+S)),g);R.length&&h.enabled&&(e.push({zFrom:y,z:E.z,area:R}),i.layer(R,y,E.z))}),u.travel=null,u.retract();break}case"finish3d":Qg(u,h.surface,h.tool,v,h.ridge,0,h.left??kg,h.steep!==!1);break;case"drill":$g(u,h.centers,v,d,h.zBottom,h.tool.diameter);break;case"cutout":Zg(u,h.region,g,v,d,h.zBottom,n.job,r);break}h.moves=u.moves}return n}var Bg,kg,zg,Vc,ji,Jg,Kg,Hc,pf=mn(()=>{Ws();$s();Bg=3,kg=3.5,zg=.02;Vc=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null,this.travel=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,r){this.push({x:t,y:e,z:i,f:r})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){let r=this.at,o=this.clearZ;r&&this.travel&&(o=Math.min(o,Math.max(this.travel(r,{x:t,y:e}),r.z,i+1))),r&&this.rapid(r.x,r.y,o),this.rapid(t,e,o),this.rapid(t,e,i+1)}retract(){this.at&&!this.travel&&this.rapid(this.at.x,this.at.y,this.clearZ)}},ji=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],r=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(r[0]-i[0],r[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,r=1;for(;r<this.s.length-1&&this.s[r]<i;)r++;let o=this.p[r-1],l=this.p[r%this.p.length],h=this.s[r]-this.s[r-1]||1,u=(i-this.s[r-1])/h;return[o[0]+(l[0]-o[0])*u,o[1]+(l[1]-o[1])*u]}breaks(t,e){let i=[],r=this.length;for(let o=Math.floor(t/r);o*r<=e;o++)for(let l=0;l<this.p.length;l++){let h=o*r+this.s[l];h>t+1e-9&&h<e-1e-9&&i.push(h)}return i}nearest([t,e]){let i=0,r=1/0;for(let o=0;o<this.p.length;o++){let l=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;l<r&&(r=l,i=this.s[o])}return i}};Jg=Math.tan(70*Math.PI/180);Kg=Math.tan(50*Math.PI/180);Hc=class{constructor(t,e){this.c=1,this.x0=t.minX,this.y0=t.minY,this.nx=Math.ceil((t.maxX-t.minX)/this.c)+1,this.ny=Math.ceil((t.maxY-t.minY)/this.c)+1,this.top=new Float32Array(this.nx*this.ny).fill(e)}layer(t,e,i){let{c:r,x0:o,y0:l,nx:h,ny:u,top:d}=this;for(let g=0;g<u;g++){let v=l+g*r,_=[];for(let S of t)for(let w=0;w<S.length;w++){let[E,b]=S[w],[y,R]=S[(w+1)%S.length];b<=v!=R<=v&&_.push(E+(v-b)/(R-b)*(y-E))}_.sort((S,w)=>S-w);for(let S=0;S+1<_.length;S+=2)for(let w=Math.max(0,Math.ceil((_[S]-o)/r));w<=Math.min(h-1,Math.floor((_[S+1]-o)/r));w++){let E=g*h+w;d[E]<=e+1e-6&&i<d[E]&&(d[E]=i)}}}over(t,e,i){let{c:r,x0:o,y0:l,nx:h,ny:u,top:d}=this,g=(i+1.5*r)/r,v=Math.max(1,Math.ceil(Math.hypot(e.x-t.x,e.y-t.y)/(r/2))),_=-1/0;for(let S=0;S<=v;S++){let w=(t.x+(e.x-t.x)*S/v-o)/r,E=(t.y+(e.y-t.y)*S/v-l)/r;for(let b=Math.max(0,Math.ceil(E-g));b<=Math.min(u-1,Math.floor(E+g));b++)for(let y=Math.max(0,Math.ceil(w-g));y<=Math.min(h-1,Math.floor(w+g));y++)(y-w)**2+(b-E)**2<=g*g&&d[b*h+y]>_&&(_=d[b*h+y])}return _+1}}});function mf(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:r=null,spindleDelay:o=3}=t,l=Number.isFinite(r)?`G53 G0 Z${Ji(r)}`:"G53 G0 Z0",h=n.zero,u=n.stock,d=[Zr(`ncCAM: ${e}`),Zr(`Stock ${Ji(u.width)} x ${Ji(u.depth)} x ${Ji(u.thickness)} mm, ${(xr[n.job.material]||{}).name||n.job.material}, ${(jn[n.job.finish]||{}).name||n.job.finish}`),Zr(`Zero: X Y at the ${s0[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],g=n.ops.filter(E=>E.enabled&&E.moves&&E.moves.length);for(let E of[...new Map(g.map(b=>[b.tool.id,b.tool])).values()])d.push(Zr(`T${Mr(E,i)}: ${E.name}, ${Ji(E.diameter)} mm`));d.push("G21 G90 G94 G17");let v=null,_={},S=null,w=null;for(let E of g){(!v||E.tool.id!==v.id)&&(v&&d.push("M5"),d.push(l,`M6 T${Mr(E.tool,i)}`,Zr(E.tool.name)),v=E.tool,d.push(`M3 S${E.feeds.rpm}`),o>0&&d.push(`G4 P${o}`),_={},S=null,w=null),d.push(Zr(`${E.label}${E.detail?": "+E.detail:""}`));for(let b of E.moves){let y=Ji(b.x-h.x),R=Ji(b.y-h.y),z=Ji(b.z-h.z);if(b.r&&(y!==_.x||R!==_.y)&&z!==_.z){let V=_.z===void 0||+z<+_.z?[`X${y} Y${R}`,`Z${z}`]:[`Z${z}`,`X${y} Y${R}`];for(let C of V)d.push(`${w==="G0"?"":"G0 "}${C}`),w="G0";_={x:y,y:R,z};continue}let A=b.r?"G0":"G1",L=A===w?"":A;y!==_.x&&(L+=` X${y}`),R!==_.y&&(L+=` Y${R}`),z!==_.z&&(L+=` Z${z}`),!b.r&&b.f!==S&&(L+=` F${Math.round(b.f)}`,S=b.f),L=L.trim(),!(!L||L===A)&&(d.push(L),w=A,_={x:y,y:R,z})}}return d.push("M5",l,"M30",""),d.join(`
`)}function gf(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let r=0,o=null,l=null;for(let h of n.ops){if(!h.enabled||!h.moves)continue;(!l||h.tool.id!==l.id)&&(r+=e+(l?i:0),l=h.tool);let u=0;for(let d of h.moves){if(o){let g=Math.hypot(d.x-o.x,d.y-o.y,d.z-o.z);u+=g/(d.r?t:d.f)*60}o=d}h.seconds=u,r+=u}return r}var Ji,r0,Zr,s0,_f=mn(()=>{$s();Ji=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},r0={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Zr=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>r0[t]??"")})`,s0={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});var Gc=mn(()=>{Nc();Yu();Zu();lf();pf();_f();Uc();$s();Bc();Ws()});function a0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function l0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Id(){let n=lo("canvas");return n.style.display="block",n}function co(...n){let t="THREE."+n.shift();_s?_s("log",t,...n):console.log(t,...n)}function Rd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function de(...n){n=Rd(n);let t="THREE."+n.shift();if(_s)_s("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function _e(...n){n=Rd(n);let t="THREE."+n.shift();if(_s)_s("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Tr(...n){let t=n.join(" ");t in xf||(xf[t]=!0,de(...n))}function Ld(n,t,e){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function zi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function Ie(n,t,e){return Math.max(t,Math.min(e,n))}function qh(n,t){return(n%t+t)%t}function c0(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function h0(n,t,e){return n!==t?(e-n)/(t-n):0}function ro(n,t,e){return(1-e)*n+e*t}function u0(n,t,e,i){return ro(n,t,1-Math.exp(-e*i))}function f0(n,t=1){return t-Math.abs(qh(n,t*2)-t)}function d0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function p0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function m0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function g0(n,t){return n+Math.random()*(t-n)}function _0(n){return n*(.5-Math.random())}function v0(n){n!==void 0&&(Mf=n);let t=Mf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function y0(n){return n*ds}function x0(n){return n*vs}function M0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function b0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function S0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function w0(n,t,e,i,r){let o=Math.cos,l=Math.sin,h=o(e/2),u=l(e/2),d=o((t+i)/2),g=l((t+i)/2),v=o((t-i)/2),_=l((t-i)/2),S=o((i-t)/2),w=l((i-t)/2);switch(r){case"XYX":n.set(h*g,u*v,u*_,h*d);break;case"YZY":n.set(u*_,h*g,u*v,h*d);break;case"ZXZ":n.set(u*v,u*_,h*g,h*d);break;case"XZX":n.set(h*g,u*w,u*S,h*d);break;case"YXY":n.set(u*S,h*g,u*w,h*d);break;case"ZYZ":n.set(u*w,u*S,h*g,h*d);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function oi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function E0(){let n={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Ve&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ve&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gi?ao:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[oo]:{primaries:t,whitePoint:i,transfer:ao,toXYZ:Sf,fromXYZ:wf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:i,transfer:Ve,toXYZ:Sf,fromXYZ:wf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),n}function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function $c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$a.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}function jc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function rh(n,t,e,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){Sr.fromArray(n,o);let h=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),u=t.dot(Sr),d=e.dot(Sr),g=i.dot(Sr);if(Math.max(-Math.max(u,d,g),Math.min(u,d,g))>h)return!1}return!0}function ga(n,t,e,i,r,o){cs.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(eo.x=o*cs.x-r*cs.y,eo.y=r*cs.x+o*cs.y):eo.copy(cs),n.copy(t),n.x+=eo.x,n.y+=eo.y,n.applyMatrix4(Od)}function V0(n,t,e,i,r,o,l,h){let u;if(t.side===In?u=i.intersectTriangle(l,o,r,!0,h):u=i.intersectTriangle(r,o,l,t.side===dr,h),u===null)return null;wa.copy(h),wa.applyMatrix4(n.matrixWorld);let d=e.ray.origin.distanceTo(wa);return d<e.near||d>e.far?null:{distance:d,point:wa.clone(),object:n}}function Ea(n,t,e,i,r,o,l,h,u,d){n.getVertexPosition(h,xa),n.getVertexPosition(u,Ma),n.getVertexPosition(d,ba);let g=V0(n,t,e,i,xa,Ma,ba,Uf);if(g){let v=new ht;yi.getBarycoord(Uf,xa,Ma,ba,v),r&&(g.uv=yi.getInterpolatedAttribute(r,h,u,d,v,new ce)),o&&(g.uv1=yi.getInterpolatedAttribute(o,h,u,d,v,new ce)),l&&(g.normal=yi.getInterpolatedAttribute(l,h,u,d,v,new ht),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));let _={a:h,b:u,c:d,normal:new ht,materialIndex:0};yi.getNormal(xa,Ma,ba,_.normal),g.face=_,g.barycoord=v}return g}function Ca(n,t,e,i,r,o,l){let h=n.geometry.attributes.position;if(Ka.fromBufferAttribute(h,r),Qa.fromBufferAttribute(h,o),e.distanceSqToSegment(Ka,Qa,uh,kf)>i)return;uh.applyMatrix4(n.matrixWorld);let d=t.ray.origin.distanceTo(uh);if(!(d<t.near||d>t.far))return{distance:d,point:kf.clone().applyMatrix4(n.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:n}}function Nr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];if(Hf(r))r.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Hf(r[0])){let o=[];for(let l=0,h=r.length;l<h;l++)o[l]=r[l].clone();t[e][i]=o}else t[e][i]=r.slice();else t[e][i]=r}}return t}function En(n){let t={};for(let e=0;e<n.length;e++){let i=Nr(n[e]);for(let r in i)t[r]=i[r]}return t}function Hf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function G0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}function hs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function dh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Ud(n,t,e,i,r){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*r}function Y0(n,t,e,i,r){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(r-i)}function $0(n,t,e,i,r){let o=(n-t)/(r-t);for(let l=0;l<8;l++){let h=Ud(o,t,e,i,r)-n;if(Math.abs(h)<1e-10)break;let u=Y0(o,t,e,i,r);if(Math.abs(u)<1e-10)break;o=Math.max(0,Math.min(1,o-h/u))}return o}function Gf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function Zf(n,t){return n.distance-t.distance}function bh(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let o=n.children;for(let l=0,h=o.length;l<h;l++)bh(o[l],t,e,!0)}}function Qh(n,t,e,i){let r=n_(i);switch(e){case Gh:return n*t;case Wh:return n*t/r.components*r.byteLength;case Sl:return n*t/r.components*r.byteLength;case _r:return n*t*2/r.components*r.byteLength;case wl:return n*t*2/r.components*r.byteLength;case Xh:return n*t*3/r.components*r.byteLength;case Qn:return n*t*4/r.components*r.byteLength;case El:return n*t*4/r.components*r.byteLength;case No:case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:case Pl:return Math.max(n,16)*Math.max(t,8)/4;case Tl:case Cl:return Math.max(n,8)*Math.max(t,8)/2;case Il:case Rl:case Nl:case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ll:case Uo:case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case $l:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case jl:case Jl:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ql:case tc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Bo:case ec:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function n_(n){switch(n){case Dn:case kh:return{byteLength:1,components:1};case Rs:case zh:case di:return{byteLength:2,components:1};case Ml:case bl:return{byteLength:2,components:4};case ui:case xl:case fi:return{byteLength:4,components:1};case Vh:case Hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var ur,fr,Jf,wh,Kf,Io,Qf,Ps,dr,In,wn,wi,Is,Eh,Th,Ah,td,Ir,ed,nd,id,rd,sd,od,ad,ld,Ch,Ph,cd,hd,ud,fd,dd,pd,md,gd,_d,Ua,Ba,ka,ms,za,Va,Ha,Ga,Ih,vd,yd,hi,Rh,Lh,Nh,Dh,Oh,Fh,Uh,Bh,pr,Rr,_l,vl,Ro,Xa,xi,Wa,dn,xd,Lo,_n,yl,mr,Dn,kh,zh,Rs,xl,ui,fi,di,Ml,bl,Ls,Vh,Hh,Gh,Xh,Qn,Mi,gr,Wh,Sl,_r,wl,El,No,Do,Oo,Fo,Tl,Al,Cl,Pl,Il,Rl,Ll,Nl,Dl,Uo,Ol,Fl,Ul,Bl,kl,zl,Vl,Hl,Gl,Xl,Wl,Yl,$l,ql,Zl,jl,Jl,Kl,Ql,tc,Bo,ec,so,Ya,Oa,gh,_h,vh,yh,Md,nc,bd,Gi,Cn,oo,ao,Ve,Fa,Sd,wd,Ed,Td,ic,Ad,Cd,rc,Pd,Yh,Lr,$h,ai,gs,xf,_s,Nd,li,Mn,Mf,ds,vs,Zh,ce,Vn,ht,Wc,bf,be,Yc,Sf,wf,Le,jr,$a,T0,ys,A0,qc,Pn,Ke,qa,Nn,ho,Za,Xe,Jr,ii,C0,P0,Ki,aa,Bn,Ef,Tf,Hi,xs,I0,Af,Kr,Oi,la,js,R0,L0,Cf,Pf,If,Rf,N0,Qr,Zc,an,Kn,D0,Ms,Dd,Qi,ca,Me,bn,uo,ri,Fi,Jc,Ui,ts,es,Lf,Kc,Qc,th,eh,nh,ih,yi,ir,Bi,si,ha,ns,is,rs,tr,er,br,Js,ua,fa,Sr,rn,da,O0,Ye,fo,po,$e,F0,Ks,sh,Ar,U0,Jn,oh,ss,kn,Qs,fn,Je,ja,An,mo,ah,B0,k0,zn,z0,bi,bs,os,to,as,ls,cs,eo,Od,pa,no,ma,Nf,lh,Df,go,ki,ch,_a,va,rr,Hn,Of,wr,ya,Ff,xa,Ma,ba,hh,Sa,Uf,wa,Be,Ja,Er,H0,Ta,Ss,ci,Ka,Qa,Bf,io,Aa,uh,kf,Cr,zf,Vf,Pr,_o,vo,sr,tl,yo,or,Si,ws,Pa,Ia,fh,Ra,Es,xo,Mo,ar,Fd,X0,W0,Gn,el,Xn,nl,il,bo,lr,rl,sl,ol,al,Wn,cr,ll,cl,hl,So,hr,ul,fl,Bd,dl,wo,Eo,ph,Xf,Wf,pl,La,Na,vi,To,nr,Yf,$f,Sn,Ts,xh,As,us,fs,ml,gl,Jh,q0,Kh,Z0,j0,J0,K0,Q0,t_,e_,Mh,je,Yb,qf,Ao,Cs,Sh,jf,Da,mh,Co,Po,tu=mn(()=>{ur={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jf=0,wh=1,Kf=2,Io=1,Qf=2,Ps=3,dr=0,In=1,wn=2,wi=0,Is=1,Eh=2,Th=3,Ah=4,td=5,Ir=100,ed=101,nd=102,id=103,rd=104,sd=200,od=201,ad=202,ld=203,Ch=204,Ph=205,cd=206,hd=207,ud=208,fd=209,dd=210,pd=211,md=212,gd=213,_d=214,Ua=0,Ba=1,ka=2,ms=3,za=4,Va=5,Ha=6,Ga=7,Ih=0,vd=1,yd=2,hi=0,Rh=1,Lh=2,Nh=3,Dh=4,Oh=5,Fh=6,Uh=7,Bh=300,pr=301,Rr=302,_l=303,vl=304,Ro=306,Xa=1e3,xi=1001,Wa=1002,dn=1003,xd=1004,Lo=1005,_n=1006,yl=1007,mr=1008,Dn=1009,kh=1010,zh=1011,Rs=1012,xl=1013,ui=1014,fi=1015,di=1016,Ml=1017,bl=1018,Ls=1020,Vh=35902,Hh=35899,Gh=1021,Xh=1022,Qn=1023,Mi=1026,gr=1027,Wh=1028,Sl=1029,_r=1030,wl=1031,El=1033,No=33776,Do=33777,Oo=33778,Fo=33779,Tl=35840,Al=35841,Cl=35842,Pl=35843,Il=36196,Rl=37492,Ll=37496,Nl=37488,Dl=37489,Uo=37490,Ol=37491,Fl=37808,Ul=37809,Bl=37810,kl=37811,zl=37812,Vl=37813,Hl=37814,Gl=37815,Xl=37816,Wl=37817,Yl=37818,$l=37819,ql=37820,Zl=37821,jl=36492,Jl=36494,Kl=36495,Ql=36283,tc=36284,Bo=36285,ec=36286,so=2300,Ya=2301,Oa=2302,gh=2303,_h=2400,vh=2401,yh=2402,Md=3200,nc=0,bd=1,Gi="",Cn="srgb",oo="srgb-linear",ao="linear",Ve="srgb",Fa=7680,Sd=519,wd=512,Ed=513,Td=514,ic=515,Ad=516,Cd=517,rc=518,Pd=519,Yh=35044,Lr=35048,$h="300 es",ai=2e3,gs=2001;xf={},_s=null;Nd={[Ua]:Ba,[ka]:Ha,[za]:Ga,[ms]:Va,[Ba]:Ua,[Ha]:ka,[Ga]:za,[Va]:ms},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mf=1234567,ds=Math.PI/180,vs=180/Math.PI;Zh={DEG2RAD:ds,RAD2DEG:vs,generateUUID:zi,clamp:Ie,euclideanModulo:qh,mapLinear:c0,inverseLerp:h0,lerp:ro,damp:u0,pingpong:f0,smoothstep:d0,smootherstep:p0,randInt:m0,randFloat:g0,randFloatSpread:_0,seededRandom:v0,degToRad:y0,radToDeg:x0,isPowerOfTwo:M0,ceilPowerOfTwo:b0,floorPowerOfTwo:S0,setQuaternionFromProperEuler:w0,normalize:Ge,denormalize:oi},ce=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ie(this.x,t.x,e.x),this.y=Ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ie(this.x,t,e),this.y=Ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*i-l*r+t.x,this.y=o*r+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vn=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,o,l,h){let u=i[r+0],d=i[r+1],g=i[r+2],v=i[r+3],_=o[l+0],S=o[l+1],w=o[l+2],E=o[l+3];if(v!==E||u!==_||d!==S||g!==w){let b=u*_+d*S+g*w+v*E;b<0&&(_=-_,S=-S,w=-w,E=-E,b=-b);let y=1-h;if(b<.9995){let R=Math.acos(b),z=Math.sin(R);y=Math.sin(y*R)/z,h=Math.sin(h*R)/z,u=u*y+_*h,d=d*y+S*h,g=g*y+w*h,v=v*y+E*h}else{u=u*y+_*h,d=d*y+S*h,g=g*y+w*h,v=v*y+E*h;let R=1/Math.sqrt(u*u+d*d+g*g+v*v);u*=R,d*=R,g*=R,v*=R}}t[e]=u,t[e+1]=d,t[e+2]=g,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,r,o,l){let h=i[r],u=i[r+1],d=i[r+2],g=i[r+3],v=o[l],_=o[l+1],S=o[l+2],w=o[l+3];return t[e]=h*w+g*v+u*S-d*_,t[e+1]=u*w+g*_+d*v-h*S,t[e+2]=d*w+g*S+h*_-u*v,t[e+3]=g*w-h*v-u*_-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,o=t._z,l=t._order,h=Math.cos,u=Math.sin,d=h(i/2),g=h(r/2),v=h(o/2),_=u(i/2),S=u(r/2),w=u(o/2);switch(l){case"XYZ":this._x=_*g*v+d*S*w,this._y=d*S*v-_*g*w,this._z=d*g*w+_*S*v,this._w=d*g*v-_*S*w;break;case"YXZ":this._x=_*g*v+d*S*w,this._y=d*S*v-_*g*w,this._z=d*g*w-_*S*v,this._w=d*g*v+_*S*w;break;case"ZXY":this._x=_*g*v-d*S*w,this._y=d*S*v+_*g*w,this._z=d*g*w+_*S*v,this._w=d*g*v-_*S*w;break;case"ZYX":this._x=_*g*v-d*S*w,this._y=d*S*v+_*g*w,this._z=d*g*w-_*S*v,this._w=d*g*v+_*S*w;break;case"YZX":this._x=_*g*v+d*S*w,this._y=d*S*v+_*g*w,this._z=d*g*w-_*S*v,this._w=d*g*v-_*S*w;break;case"XZY":this._x=_*g*v-d*S*w,this._y=d*S*v-_*g*w,this._z=d*g*w+_*S*v,this._w=d*g*v+_*S*w;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],o=e[8],l=e[1],h=e[5],u=e[9],d=e[2],g=e[6],v=e[10],_=i+h+v;if(_>0){let S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-u)*S,this._y=(o-d)*S,this._z=(l-r)*S}else if(i>h&&i>v){let S=2*Math.sqrt(1+i-h-v);this._w=(g-u)/S,this._x=.25*S,this._y=(r+l)/S,this._z=(o+d)/S}else if(h>v){let S=2*Math.sqrt(1+h-i-v);this._w=(o-d)/S,this._x=(r+l)/S,this._y=.25*S,this._z=(u+g)/S}else{let S=2*Math.sqrt(1+v-i-h);this._w=(l-r)/S,this._x=(o+d)/S,this._y=(u+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,o=t._z,l=t._w,h=e._x,u=e._y,d=e._z,g=e._w;return this._x=i*g+l*h+r*d-o*u,this._y=r*g+l*u+o*h-i*d,this._z=o*g+l*d+i*u-r*h,this._w=l*g-i*h-r*u-o*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,o=t._z,l=t._w,h=this.dot(t);h<0&&(i=-i,r=-r,o=-o,l=-l,h=-h);let u=1-e;if(h<.9995){let d=Math.acos(h),g=Math.sin(d);u=Math.sin(u*d)/g,e=Math.sin(e*d)/g,this._x=this._x*u+i*e,this._y=this._y*u+r*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+r*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ht=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*r,this.y=o[1]*e+o[4]*i+o[7]*r,this.z=o[2]*e+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=t.elements,l=1/(o[3]*e+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*e+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*e+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,o=t.x,l=t.y,h=t.z,u=t.w,d=2*(l*r-h*i),g=2*(h*e-o*r),v=2*(o*i-l*e);return this.x=e+u*d+l*v-h*g,this.y=i+u*g+h*d-o*v,this.z=r+u*v+o*g-l*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r,this.y=o[1]*e+o[5]*i+o[9]*r,this.z=o[2]*e+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ie(this.x,t.x,e.x),this.y=Ie(this.y,t.y,e.y),this.z=Ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ie(this.x,t,e),this.y=Ie(this.y,t,e),this.z=Ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,o=t.z,l=e.x,h=e.y,u=e.z;return this.x=r*u-o*h,this.y=o*l-i*u,this.z=i*h-r*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wc.copy(this).projectOnVector(t),this.sub(Wc)}reflect(t){return this.sub(Wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wc=new ht,bf=new Vn,be=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,r,o,l,h,u,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,h,u,d)}set(t,e,i,r,o,l,h,u,d){let g=this.elements;return g[0]=t,g[1]=r,g[2]=h,g[3]=e,g[4]=o,g[5]=u,g[6]=i,g[7]=l,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,l=i[0],h=i[3],u=i[6],d=i[1],g=i[4],v=i[7],_=i[2],S=i[5],w=i[8],E=r[0],b=r[3],y=r[6],R=r[1],z=r[4],A=r[7],L=r[2],D=r[5],V=r[8];return o[0]=l*E+h*R+u*L,o[3]=l*b+h*z+u*D,o[6]=l*y+h*A+u*V,o[1]=d*E+g*R+v*L,o[4]=d*b+g*z+v*D,o[7]=d*y+g*A+v*V,o[2]=_*E+S*R+w*L,o[5]=_*b+S*z+w*D,o[8]=_*y+S*A+w*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],h=t[5],u=t[6],d=t[7],g=t[8];return e*l*g-e*h*d-i*o*g+i*h*u+r*o*d-r*l*u}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],h=t[5],u=t[6],d=t[7],g=t[8],v=g*l-h*d,_=h*u-g*o,S=d*o-l*u,w=e*v+i*_+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=v*E,t[1]=(r*d-g*i)*E,t[2]=(h*i-r*l)*E,t[3]=_*E,t[4]=(g*e-r*u)*E,t[5]=(r*o-h*e)*E,t[6]=S*E,t[7]=(i*u-d*e)*E,t[8]=(l*e-i*o)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,o,l,h){let u=Math.cos(o),d=Math.sin(o);return this.set(i*u,i*d,-i*(u*l+d*h)+l+t,-r*d,r*u,-r*(-d*l+u*h)+h+e,0,0,1),this}scale(t,e){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yc.makeScale(t,e)),this}rotate(t){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yc.makeRotation(-t)),this}translate(t,e){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yc=new be,Sf=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wf=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Le=E0();$a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{jr===void 0&&(jr=lo("canvas")),jr.width=t.width,jr.height=t.height;let r=jr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=jr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Vi(o[l]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vi(e[i]/255)*255):e[i]=Vi(e[i]);return{data:e,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},T0=0,ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,h=r.length;l<h;l++)r[l].isDataTexture?o.push($c(r[l].image)):o.push($c(r[l]))}else o=$c(r);i.url=o}return e||(t.images[this.uuid]=i),i}};A0=0,qc=new ht,Pn=class n extends li{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=xi,r=xi,o=_n,l=mr,h=Qn,u=Dn,d=n.DEFAULT_ANISOTROPY,g=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=zi(),this.name="",this.source=new ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=u,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){de(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){de(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xa:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xa:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Bh;Pn.DEFAULT_ANISOTROPY=1;Ke=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*e+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*e+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*e+l[7]*i+l[11]*r+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,o,u=t.elements,d=u[0],g=u[4],v=u[8],_=u[1],S=u[5],w=u[9],E=u[2],b=u[6],y=u[10];if(Math.abs(g-_)<.01&&Math.abs(v-E)<.01&&Math.abs(w-b)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+E)<.1&&Math.abs(w+b)<.1&&Math.abs(d+S+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let z=(d+1)/2,A=(S+1)/2,L=(y+1)/2,D=(g+_)/4,V=(v+E)/4,C=(w+b)/4;return z>A&&z>L?z<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(z),r=D/i,o=V/i):A>L?A<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(A),i=D/r,o=C/r):L<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),i=V/o,r=C/o),this.set(i,r,o,e),this}let R=Math.sqrt((b-w)*(b-w)+(v-E)*(v-E)+(_-g)*(_-g));return Math.abs(R)<.001&&(R=1),this.x=(b-w)/R,this.y=(v-E)/R,this.z=(_-g)/R,this.w=Math.acos((d+S+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ie(this.x,t.x,e.x),this.y=Ie(this.y,t.y,e.y),this.z=Ie(this.z,t.z,e.z),this.w=Ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ie(this.x,t,e),this.y=Ie(this.y,t,e),this.z=Ie(this.z,t,e),this.w=Ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends li{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},o=new Pn(r),l=i.count;for(let h=0;h<l;h++)this.textures[h]=o.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new ys(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends qa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ho=class extends Pn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Za=class extends Pn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Xe=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,r,o,l,h,u,d,g,v,_,S,w,E,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,h,u,d,g,v,_,S,w,E,b)}set(t,e,i,r,o,l,h,u,d,g,v,_,S,w,E,b){let y=this.elements;return y[0]=t,y[4]=e,y[8]=i,y[12]=r,y[1]=o,y[5]=l,y[9]=h,y[13]=u,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=S,y[7]=w,y[11]=E,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,r=1/Jr.setFromMatrixColumn(t,0).length(),o=1/Jr.setFromMatrixColumn(t,1).length(),l=1/Jr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,o=t.z,l=Math.cos(i),h=Math.sin(i),u=Math.cos(r),d=Math.sin(r),g=Math.cos(o),v=Math.sin(o);if(t.order==="XYZ"){let _=l*g,S=l*v,w=h*g,E=h*v;e[0]=u*g,e[4]=-u*v,e[8]=d,e[1]=S+w*d,e[5]=_-E*d,e[9]=-h*u,e[2]=E-_*d,e[6]=w+S*d,e[10]=l*u}else if(t.order==="YXZ"){let _=u*g,S=u*v,w=d*g,E=d*v;e[0]=_+E*h,e[4]=w*h-S,e[8]=l*d,e[1]=l*v,e[5]=l*g,e[9]=-h,e[2]=S*h-w,e[6]=E+_*h,e[10]=l*u}else if(t.order==="ZXY"){let _=u*g,S=u*v,w=d*g,E=d*v;e[0]=_-E*h,e[4]=-l*v,e[8]=w+S*h,e[1]=S+w*h,e[5]=l*g,e[9]=E-_*h,e[2]=-l*d,e[6]=h,e[10]=l*u}else if(t.order==="ZYX"){let _=l*g,S=l*v,w=h*g,E=h*v;e[0]=u*g,e[4]=w*d-S,e[8]=_*d+E,e[1]=u*v,e[5]=E*d+_,e[9]=S*d-w,e[2]=-d,e[6]=h*u,e[10]=l*u}else if(t.order==="YZX"){let _=l*u,S=l*d,w=h*u,E=h*d;e[0]=u*g,e[4]=E-_*v,e[8]=w*v+S,e[1]=v,e[5]=l*g,e[9]=-h*g,e[2]=-d*g,e[6]=S*v+w,e[10]=_-E*v}else if(t.order==="XZY"){let _=l*u,S=l*d,w=h*u,E=h*d;e[0]=u*g,e[4]=-v,e[8]=d*g,e[1]=_*v+E,e[5]=l*g,e[9]=S*v-w,e[2]=w*v-S,e[6]=h*g,e[10]=E*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(C0,t,P0)}lookAt(t,e,i){let r=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Ki.crossVectors(i,Bn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Ki.crossVectors(i,Bn)),Ki.normalize(),aa.crossVectors(Bn,Ki),r[0]=Ki.x,r[4]=aa.x,r[8]=Bn.x,r[1]=Ki.y,r[5]=aa.y,r[9]=Bn.y,r[2]=Ki.z,r[6]=aa.z,r[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,l=i[0],h=i[4],u=i[8],d=i[12],g=i[1],v=i[5],_=i[9],S=i[13],w=i[2],E=i[6],b=i[10],y=i[14],R=i[3],z=i[7],A=i[11],L=i[15],D=r[0],V=r[4],C=r[8],k=r[12],H=r[1],Y=r[5],J=r[9],q=r[13],Z=r[2],K=r[6],lt=r[10],dt=r[14],Tt=r[3],xt=r[7],Ct=r[11],Nt=r[15];return o[0]=l*D+h*H+u*Z+d*Tt,o[4]=l*V+h*Y+u*K+d*xt,o[8]=l*C+h*J+u*lt+d*Ct,o[12]=l*k+h*q+u*dt+d*Nt,o[1]=g*D+v*H+_*Z+S*Tt,o[5]=g*V+v*Y+_*K+S*xt,o[9]=g*C+v*J+_*lt+S*Ct,o[13]=g*k+v*q+_*dt+S*Nt,o[2]=w*D+E*H+b*Z+y*Tt,o[6]=w*V+E*Y+b*K+y*xt,o[10]=w*C+E*J+b*lt+y*Ct,o[14]=w*k+E*q+b*dt+y*Nt,o[3]=R*D+z*H+A*Z+L*Tt,o[7]=R*V+z*Y+A*K+L*xt,o[11]=R*C+z*J+A*lt+L*Ct,o[15]=R*k+z*q+A*dt+L*Nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[12],l=t[1],h=t[5],u=t[9],d=t[13],g=t[2],v=t[6],_=t[10],S=t[14],w=t[3],E=t[7],b=t[11],y=t[15],R=u*S-d*_,z=h*S-d*v,A=h*_-u*v,L=l*S-d*g,D=l*_-u*g,V=l*v-h*g;return e*(E*R-b*z+y*A)-i*(w*R-b*L+y*D)+r*(w*z-E*L+y*V)-o*(w*A-E*D+b*V)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[1],l=t[5],h=t[9],u=t[2],d=t[6],g=t[10];return e*(l*g-h*d)-i*(o*g-h*u)+r*(o*d-l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],h=t[5],u=t[6],d=t[7],g=t[8],v=t[9],_=t[10],S=t[11],w=t[12],E=t[13],b=t[14],y=t[15],R=e*h-i*l,z=e*u-r*l,A=e*d-o*l,L=i*u-r*h,D=i*d-o*h,V=r*d-o*u,C=g*E-v*w,k=g*b-_*w,H=g*y-S*w,Y=v*b-_*E,J=v*y-S*E,q=_*y-S*b,Z=R*q-z*J+A*Y+L*H-D*k+V*C;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/Z;return t[0]=(h*q-u*J+d*Y)*K,t[1]=(r*J-i*q-o*Y)*K,t[2]=(E*V-b*D+y*L)*K,t[3]=(_*D-v*V-S*L)*K,t[4]=(u*H-l*q-d*k)*K,t[5]=(e*q-r*H+o*k)*K,t[6]=(b*A-w*V-y*z)*K,t[7]=(g*V-_*A+S*z)*K,t[8]=(l*J-h*H+d*C)*K,t[9]=(i*H-e*J-o*C)*K,t[10]=(w*D-E*A+y*R)*K,t[11]=(v*A-g*D-S*R)*K,t[12]=(h*k-l*Y-u*C)*K,t[13]=(e*Y-i*k+r*C)*K,t[14]=(E*z-w*L-b*R)*K,t[15]=(g*L-v*z+_*R)*K,this}scale(t){let e=this.elements,i=t.x,r=t.y,o=t.z;return e[0]*=i,e[4]*=r,e[8]*=o,e[1]*=i,e[5]*=r,e[9]*=o,e[2]*=i,e[6]*=r,e[10]*=o,e[3]*=i,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),o=1-i,l=t.x,h=t.y,u=t.z,d=o*l,g=o*h;return this.set(d*l+i,d*h-r*u,d*u+r*h,0,d*h+r*u,g*h+i,g*u-r*l,0,d*u-r*h,g*u+r*l,o*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,o,l){return this.set(1,i,o,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,o=e._x,l=e._y,h=e._z,u=e._w,d=o+o,g=l+l,v=h+h,_=o*d,S=o*g,w=o*v,E=l*g,b=l*v,y=h*v,R=u*d,z=u*g,A=u*v,L=i.x,D=i.y,V=i.z;return r[0]=(1-(E+y))*L,r[1]=(S+A)*L,r[2]=(w-z)*L,r[3]=0,r[4]=(S-A)*D,r[5]=(1-(_+y))*D,r[6]=(b+R)*D,r[7]=0,r[8]=(w+z)*V,r[9]=(b-R)*V,r[10]=(1-(_+E))*V,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let l=Jr.set(r[0],r[1],r[2]).length(),h=Jr.set(r[4],r[5],r[6]).length(),u=Jr.set(r[8],r[9],r[10]).length();o<0&&(l=-l),ii.copy(this);let d=1/l,g=1/h,v=1/u;return ii.elements[0]*=d,ii.elements[1]*=d,ii.elements[2]*=d,ii.elements[4]*=g,ii.elements[5]*=g,ii.elements[6]*=g,ii.elements[8]*=v,ii.elements[9]*=v,ii.elements[10]*=v,e.setFromRotationMatrix(ii),i.x=l,i.y=h,i.z=u,this}makePerspective(t,e,i,r,o,l,h=ai,u=!1){let d=this.elements,g=2*o/(e-t),v=2*o/(i-r),_=(e+t)/(e-t),S=(i+r)/(i-r),w,E;if(u)w=o/(l-o),E=l*o/(l-o);else if(h===ai)w=-(l+o)/(l-o),E=-2*l*o/(l-o);else if(h===gs)w=-l/(l-o),E=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=w,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,o,l,h=ai,u=!1){let d=this.elements,g=2/(e-t),v=2/(i-r),_=-(e+t)/(e-t),S=-(i+r)/(i-r),w,E;if(u)w=1/(l-o),E=l/(l-o);else if(h===ai)w=-2/(l-o),E=-(l+o)/(l-o);else if(h===gs)w=-1/(l-o),E=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=w,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Jr=new ht,ii=new Xe,C0=new ht(0,0,0),P0=new ht(1,1,1),Ki=new ht,aa=new ht,Bn=new ht,Ef=new Xe,Tf=new Vn,Hi=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,o=r[0],l=r[4],h=r[8],u=r[1],d=r[5],g=r[9],v=r[2],_=r[6],S=r[10];switch(e){case"XYZ":this._y=Math.asin(Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-Ie(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,o)):(this._x=Math.atan2(-g,S),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ef.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ef,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tf.setFromEuler(this),this.setFromQuaternion(Tf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},I0=0,Af=new ht,Kr=new Vn,Oi=new Xe,la=new ht,js=new ht,R0=new ht,L0=new Vn,Cf=new ht(1,0,0),Pf=new ht(0,1,0),If=new ht(0,0,1),Rf={type:"added"},N0={type:"removed"},Qr={type:"childadded",child:null},Zc={type:"childremoved",child:null},an=class n extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new ht,e=new Hi,i=new Vn,r=new ht(1,1,1);function o(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new be}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kr.setFromAxisAngle(t,e),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,e){return Kr.setFromAxisAngle(t,e),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(Cf,t)}rotateY(t){return this.rotateOnAxis(Pf,t)}rotateZ(t){return this.rotateOnAxis(If,t)}translateOnAxis(t,e){return Af.copy(t).applyQuaternion(this.quaternion),this.position.add(Af.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cf,t)}translateY(t){return this.translateOnAxis(Pf,t)}translateZ(t){return this.translateOnAxis(If,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?la.copy(t):la.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(js,la,this.up):Oi.lookAt(la,js,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(Oi),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(_e("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rf),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null):_e("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(N0),Zc.child=t,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rf),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,R0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,L0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*r,o[13]+=i-o[1]*e-o[5]*i-o[9]*r,o[14]+=r-o[2]*e-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let u=h.shapes;if(Array.isArray(u))for(let d=0,g=u.length;d<g;d++){let v=u[d];o(t.shapes,v)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let u=0,d=this.material.length;u<d;u++)h.push(o(t.materials,this.material[u]));r.material=h}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){let u=this.animations[h];r.animations.push(o(t.animations,u))}}if(e){let h=l(t.geometries),u=l(t.materials),d=l(t.textures),g=l(t.images),v=l(t.shapes),_=l(t.skeletons),S=l(t.animations),w=l(t.nodes);h.length>0&&(i.geometries=h),u.length>0&&(i.materials=u),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),S.length>0&&(i.animations=S),w.length>0&&(i.nodes=w)}return i.object=r,i;function l(h){let u=[];for(let d in h){let g=h[d];delete g.metadata,u.push(g)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new ht(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Kn=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},D0={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ht,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ht),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ht,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ht,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,o=null,l=null,h=this._targetRay,u=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){l=!0;for(let E of t.hand.values()){let b=e.getJointPose(E,i),y=this._getHandJoint(d,E);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}let g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,w=.005;d.inputState.pinching&&_>S+w?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=S-w&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return h!==null&&(h.visible=r!==null),u!==null&&(u.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Kn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},ca={h:0,s:0,l:0};Me=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Le.workingColorSpace){return this.r=t,this.g=e,this.b=i,Le.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Le.workingColorSpace){if(t=qh(t,1),e=Ie(e,0,1),i=Ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,l=2*i-o;this.r=jc(l,o,t+1/3),this.g=jc(l,o,t),this.b=jc(l,o,t-1/3)}return Le.colorSpaceToWorking(this,r),this}setStyle(t,e=Cn){function i(o){o!==void 0&&parseFloat(o)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,l=r[1],h=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:de("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){let i=Dd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return Le.workingToColorSpace(bn.copy(this),t),Math.round(Ie(bn.r*255,0,255))*65536+Math.round(Ie(bn.g*255,0,255))*256+Math.round(Ie(bn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.workingToColorSpace(bn.copy(this),e);let i=bn.r,r=bn.g,o=bn.b,l=Math.max(i,r,o),h=Math.min(i,r,o),u,d,g=(h+l)/2;if(h===l)u=0,d=0;else{let v=l-h;switch(d=g<=.5?v/(l+h):v/(2-l-h),l){case i:u=(r-o)/v+(r<o?6:0);break;case r:u=(o-i)/v+2;break;case o:u=(i-r)/v+4;break}u/=6}return t.h=u,t.s=d,t.l=g,t}getRGB(t,e=Le.workingColorSpace){return Le.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Cn){Le.workingToColorSpace(bn.copy(this),t);let e=bn.r,i=bn.g,r=bn.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(ca);let i=ro(Qi.h,ca.h,e),r=ro(Qi.s,ca.s,e),o=ro(Qi.l,ca.l,e);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*r,this.g=o[1]*e+o[4]*i+o[7]*r,this.b=o[2]*e+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Me;Me.NAMES=Dd;uo=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ri=new ht,Fi=new ht,Jc=new ht,Ui=new ht,ts=new ht,es=new ht,Lf=new ht,Kc=new ht,Qc=new ht,th=new ht,eh=new Ke,nh=new Ke,ih=new Ke,yi=class n{constructor(t=new ht,e=new ht,i=new ht){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ri.subVectors(t,e),r.cross(ri);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,i,r,o){ri.subVectors(r,e),Fi.subVectors(i,e),Jc.subVectors(t,e);let l=ri.dot(ri),h=ri.dot(Fi),u=ri.dot(Jc),d=Fi.dot(Fi),g=Fi.dot(Jc),v=l*d-h*h;if(v===0)return o.set(0,0,0),null;let _=1/v,S=(d*u-h*g)*_,w=(l*g-h*u)*_;return o.set(1-S-w,w,S)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,i,r,o,l,h,u){return this.getBarycoord(t,e,i,r,Ui)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,Ui.x),u.addScaledVector(l,Ui.y),u.addScaledVector(h,Ui.z),u)}static getInterpolatedAttribute(t,e,i,r,o,l){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(t,e),nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(eh,o.x),l.addScaledVector(nh,o.y),l.addScaledVector(ih,o.z),l}static isFrontFacing(t,e,i,r){return ri.subVectors(i,e),Fi.subVectors(t,e),ri.cross(Fi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ri.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,o=this.c,l,h;ts.subVectors(r,i),es.subVectors(o,i),Kc.subVectors(t,i);let u=ts.dot(Kc),d=es.dot(Kc);if(u<=0&&d<=0)return e.copy(i);Qc.subVectors(t,r);let g=ts.dot(Qc),v=es.dot(Qc);if(g>=0&&v<=g)return e.copy(r);let _=u*v-g*d;if(_<=0&&u>=0&&g<=0)return l=u/(u-g),e.copy(i).addScaledVector(ts,l);th.subVectors(t,o);let S=ts.dot(th),w=es.dot(th);if(w>=0&&S<=w)return e.copy(o);let E=S*d-u*w;if(E<=0&&d>=0&&w<=0)return h=d/(d-w),e.copy(i).addScaledVector(es,h);let b=g*w-S*v;if(b<=0&&v-g>=0&&S-w>=0)return Lf.subVectors(o,r),h=(v-g)/(v-g+(S-w)),e.copy(r).addScaledVector(Lf,h);let y=1/(b+E+_);return l=E*y,h=_*y,e.copy(i).addScaledVector(ts,l).addScaledVector(es,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ir=class{constructor(t=new ht(1/0,1/0,1/0),e=new ht(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,h=o.count;l<h;l++)t.isMesh===!0?t.getVertexPosition(l,si):si.fromBufferAttribute(o,l),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ha.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(t.matrixWorld),this.union(ha)}let r=t.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),ua.subVectors(this.max,Js),ns.subVectors(t.a,Js),is.subVectors(t.b,Js),rs.subVectors(t.c,Js),tr.subVectors(is,ns),er.subVectors(rs,is),br.subVectors(ns,rs);let e=[0,-tr.z,tr.y,0,-er.z,er.y,0,-br.z,br.y,tr.z,0,-tr.x,er.z,0,-er.x,br.z,0,-br.x,-tr.y,tr.x,0,-er.y,er.x,0,-br.y,br.x,0];return!rh(e,ns,is,rs,ua)||(e=[1,0,0,0,1,0,0,0,1],!rh(e,ns,is,rs,ua))?!1:(fa.crossVectors(tr,er),e=[fa.x,fa.y,fa.z],rh(e,ns,is,rs,ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Bi=[new ht,new ht,new ht,new ht,new ht,new ht,new ht,new ht],si=new ht,ha=new ir,ns=new ht,is=new ht,rs=new ht,tr=new ht,er=new ht,br=new ht,Js=new ht,ua=new ht,fa=new ht,Sr=new ht;rn=new ht,da=new ce,O0=0,Ye=class extends li{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yh,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),o=Ge(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},fo=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}},po=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}},$e=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},F0=new ir,Ks=new ht,sh=new ht,Ar=class{constructor(t=new ht,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):F0.setFromPoints(t).getCenter(i);let r=0;for(let o=0,l=t.length;o<l;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ks,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(sh)),this.expandByPoint(Ks.copy(t.center).sub(sh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},U0=0,Jn=new Xe,oh=new an,ss=new ht,kn=new ir,Qs=new ir,fn=new ht,Je=class n extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(a0(t)?po:fo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new be().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,i){return Jn.makeTranslation(t,e,i),this.applyMatrix4(Jn),this}scale(t,e,i){return Jn.makeScale(t,e,i),this.applyMatrix4(Jn),this}lookAt(t){return oh.lookAt(t),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,o=t.length;r<o;r++){let l=t[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new $e(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ht(-1/0,-1/0,-1/0),new ht(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let o=e[i];kn.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ht,1/0);return}if(t){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){let h=e[o];Qs.setFromBufferAttribute(h),this.morphTargetsRelative?(fn.addVectors(kn.min,Qs.min),kn.expandByPoint(fn),fn.addVectors(kn.max,Qs.max),kn.expandByPoint(fn)):(kn.expandByPoint(Qs.min),kn.expandByPoint(Qs.max))}kn.getCenter(i);let r=0;for(let o=0,l=t.count;o<l;o++)fn.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(fn));if(e)for(let o=0,l=e.length;o<l;o++){let h=e[o],u=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)fn.fromBufferAttribute(h,d),u&&(ss.fromBufferAttribute(t,d),fn.add(ss)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){_e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,o=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==i.count)&&(l=new Ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",l));let h=[],u=[];for(let C=0;C<i.count;C++)h[C]=new ht,u[C]=new ht;let d=new ht,g=new ht,v=new ht,_=new ce,S=new ce,w=new ce,E=new ht,b=new ht;function y(C,k,H){d.fromBufferAttribute(i,C),g.fromBufferAttribute(i,k),v.fromBufferAttribute(i,H),_.fromBufferAttribute(o,C),S.fromBufferAttribute(o,k),w.fromBufferAttribute(o,H),g.sub(d),v.sub(d),S.sub(_),w.sub(_);let Y=1/(S.x*w.y-w.x*S.y);isFinite(Y)&&(E.copy(g).multiplyScalar(w.y).addScaledVector(v,-S.y).multiplyScalar(Y),b.copy(v).multiplyScalar(S.x).addScaledVector(g,-w.x).multiplyScalar(Y),h[C].add(E),h[k].add(E),h[H].add(E),u[C].add(b),u[k].add(b),u[H].add(b))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let C=0,k=R.length;C<k;++C){let H=R[C],Y=H.start,J=H.count;for(let q=Y,Z=Y+J;q<Z;q+=3)y(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let z=new ht,A=new ht,L=new ht,D=new ht;function V(C){L.fromBufferAttribute(r,C),D.copy(L);let k=h[C];z.copy(k),z.sub(L.multiplyScalar(L.dot(k))).normalize(),A.crossVectors(D,k);let Y=A.dot(u[C])<0?-1:1;l.setXYZW(C,z.x,z.y,z.z,Y)}for(let C=0,k=R.length;C<k;++C){let H=R[C],Y=H.start,J=H.count;for(let q=Y,Z=Y+J;q<Z;q+=3)V(t.getX(q+0)),V(t.getX(q+1)),V(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,S=i.count;_<S;_++)i.setXYZ(_,0,0,0);let r=new ht,o=new ht,l=new ht,h=new ht,u=new ht,d=new ht,g=new ht,v=new ht;if(t)for(let _=0,S=t.count;_<S;_+=3){let w=t.getX(_+0),E=t.getX(_+1),b=t.getX(_+2);r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,E),l.fromBufferAttribute(e,b),g.subVectors(l,o),v.subVectors(r,o),g.cross(v),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,b),h.add(g),u.add(g),d.add(g),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(b,d.x,d.y,d.z)}else for(let _=0,S=e.count;_<S;_+=3)r.fromBufferAttribute(e,_+0),o.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),g.subVectors(l,o),v.subVectors(r,o),g.cross(v),i.setXYZ(_+0,g.x,g.y,g.z),i.setXYZ(_+1,g.x,g.y,g.z),i.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(h,u){let d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(u.length*g),S=0,w=0;for(let E=0,b=u.length;E<b;E++){h.isInterleavedBufferAttribute?S=u[E]*h.data.stride+h.offset:S=u[E]*g;for(let y=0;y<g;y++)_[w++]=d[S++]}return new Ye(_,g,v)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let h in r){let u=r[h],d=t(u,i);e.setAttribute(h,d)}let o=this.morphAttributes;for(let h in o){let u=[],d=o[h];for(let g=0,v=d.length;g<v;g++){let _=d[g],S=t(_,i);u.push(S)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let h=0,u=l.length;h<u;h++){let d=l[h];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let d in u)u[d]!==void 0&&(t[d]=u[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let d=i[u];t.data.attributes[u]=d.toJSON(t.data)}let r={},o=!1;for(let u in this.morphAttributes){let d=this.morphAttributes[u],g=[];for(let v=0,_=d.length;v<_;v++){let S=d[v];g.push(S.toJSON(t.data))}g.length>0&&(r[u]=g,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let d in r){let g=r[d];this.setAttribute(d,g.clone(e))}let o=t.morphAttributes;for(let d in o){let g=[],v=o[d];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(e));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let d=0,g=l.length;d<g;d++){let v=l[d];this.addGroup(v.start,v.count,v.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ja=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yh,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},An=new ht,mo=class n{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=oi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),o=Ge(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ah=new ht,B0=new ht,k0=new be,zn=class{constructor(t=new ht(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=ah.subVectors(i,e).cross(B0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(ah),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(r,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||k0.getNormalMatrix(t),r=this.coplanarPoint(ah).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},z0=0,bi=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Is,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ph,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){de(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){de(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}if(e){let o=r(t.textures),l=r(t.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new zn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},bs=class extends bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},to=new ht,as=new ht,ls=new ht,cs=new ce,eo=new ce,Od=new Xe,pa=new ht,no=new ht,ma=new ht,Nf=new ce,lh=new ce,Df=new ce,go=class extends an{constructor(t=new bs){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new Je;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ja(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new mo(i,3,0,!1)),os.setAttribute("uv",new mo(i,2,3,!1))}this.geometry=os,this.material=t,this.center=new ce(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&_e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Od.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);let i=this.material.rotation,r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));let l=this.center;ga(pa.set(-.5,-.5,0),ls,l,as,r,o),ga(no.set(.5,-.5,0),ls,l,as,r,o),ga(ma.set(.5,.5,0),ls,l,as,r,o),Nf.set(0,0),lh.set(1,0),Df.set(1,1);let h=t.ray.intersectTriangle(pa,no,ma,!1,to);if(h===null&&(ga(no.set(-.5,.5,0),ls,l,as,r,o),lh.set(0,1),h=t.ray.intersectTriangle(pa,ma,no,!1,to),h===null))return;let u=t.ray.origin.distanceTo(to);u<t.near||u>t.far||e.push({distance:u,point:to.clone(),uv:yi.getInterpolation(to,pa,no,ma,Nf,lh,Df,new ce),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};ki=new ht,ch=new ht,_a=new ht,va=new ht,rr=class{constructor(t=new ht,e=new ht(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ch.copy(t).add(e).multiplyScalar(.5),_a.copy(e).sub(t).normalize(),va.copy(this.origin).sub(ch);let o=t.distanceTo(e)*.5,l=-this.direction.dot(_a),h=va.dot(this.direction),u=-va.dot(_a),d=va.lengthSq(),g=Math.abs(1-l*l),v,_,S,w;if(g>0)if(v=l*u-h,_=l*h-u,w=o*g,v>=0)if(_>=-w)if(_<=w){let E=1/g;v*=E,_*=E,S=v*(v+l*_+2*h)+_*(l*v+_+2*u)+d}else _=o,v=Math.max(0,-(l*_+h)),S=-v*v+_*(_+2*u)+d;else _=-o,v=Math.max(0,-(l*_+h)),S=-v*v+_*(_+2*u)+d;else _<=-w?(v=Math.max(0,-(-l*o+h)),_=v>0?-o:Math.min(Math.max(-o,-u),o),S=-v*v+_*(_+2*u)+d):_<=w?(v=0,_=Math.min(Math.max(-o,-u),o),S=_*(_+2*u)+d):(v=Math.max(0,-(l*o+h)),_=v>0?o:Math.min(Math.max(-o,-u),o),S=-v*v+_*(_+2*u)+d);else _=l>0?-o:o,v=Math.max(0,-(l*_+h)),S=-v*v+_*(_+2*u)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(ch).addScaledVector(_a,_),S}intersectSphere(t,e){if(t.radius<0)return null;ki.subVectors(t.center,this.origin);let i=ki.dot(this.direction),r=ki.dot(ki)-i*i,o=t.radius*t.radius;if(r>o)return null;let l=Math.sqrt(o-r),h=i-l,u=i+l;return u<0?null:h<0?this.at(u,e):this.at(h,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,o,l,h,u,d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(i=(t.min.x-_.x)*d,r=(t.max.x-_.x)*d):(i=(t.max.x-_.x)*d,r=(t.min.x-_.x)*d),g>=0?(o=(t.min.y-_.y)*g,l=(t.max.y-_.y)*g):(o=(t.max.y-_.y)*g,l=(t.min.y-_.y)*g),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),v>=0?(h=(t.min.z-_.z)*v,u=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,u=(t.min.z-_.z)*v),i>u||h>r)||((h>i||i!==i)&&(i=h),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,i,r,o){let l=this.origin,h=this.direction,u=h.x,d=h.y,g=h.z,v=t.x-l.x,_=t.y-l.y,S=t.z-l.z,w=e.x-l.x,E=e.y-l.y,b=e.z-l.z,y=i.x-l.x,R=i.y-l.y,z=i.z-l.z,A=Math.abs(u),L=Math.abs(d),D=Math.abs(g),V,C,k,H,Y,J,q,Z,K,lt,dt,Tt;if(A>=L&&A>=D?(k=u,J=v,K=w,Tt=y,u>=0?(V=d,C=g,H=_,Y=S,q=E,Z=b,lt=R,dt=z):(V=g,C=d,H=S,Y=_,q=b,Z=E,lt=z,dt=R)):L>=D?(k=d,J=_,K=E,Tt=R,d>=0?(V=g,C=u,H=S,Y=v,q=b,Z=w,lt=z,dt=y):(V=u,C=g,H=v,Y=S,q=w,Z=b,lt=y,dt=z)):(k=g,J=S,K=b,Tt=z,g>=0?(V=u,C=d,H=v,Y=_,q=w,Z=E,lt=y,dt=R):(V=d,C=u,H=_,Y=v,q=E,Z=w,lt=R,dt=y)),k===0)return null;let xt=V/k,Ct=C/k,Nt=1/k,ct=H-xt*J,It=Y-Ct*J,Xt=q-xt*K,Gt=Z-Ct*K,Vt=lt-xt*Tt,_t=dt-Ct*Tt,Et=Vt*Gt-_t*Xt,Ot=ct*_t-It*Vt,Qt=Xt*It-Gt*ct;if(r){if(Et<0||Ot<0||Qt<0)return null}else if((Et<0||Ot<0||Qt<0)&&(Et>0||Ot>0||Qt>0))return null;let et=Et+Ot+Qt;if(et===0)return null;let oe=Nt*(Et*J+Ot*K+Qt*Tt);return(et>0?oe<0:oe>0)?null:this.at(oe/et,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Of=new Xe,wr=new rr,ya=new Ar,Ff=new ht,xa=new ht,Ma=new ht,ba=new ht,hh=new ht,Sa=new ht,Uf=new ht,wa=new ht,Be=class extends an{constructor(t=new Je,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){let h=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let h=this.morphTargetInfluences;if(o&&h){Sa.set(0,0,0);for(let u=0,d=o.length;u<d;u++){let g=h[u],v=o[u];g!==0&&(hh.fromBufferAttribute(v,t),l?Sa.addScaledVector(hh,g):Sa.addScaledVector(hh.sub(e),g))}e.add(Sa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(o),wr.copy(t.ray).recast(t.near),!(ya.containsPoint(wr.origin)===!1&&(wr.intersectSphere(ya,Ff)===null||wr.origin.distanceToSquared(Ff)>(t.far-t.near)**2))&&(Of.copy(o).invert(),wr.copy(t.ray).applyMatrix4(Of),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wr)))}_computeIntersections(t,e,i){let r,o=this.geometry,l=this.material,h=o.index,u=o.attributes.position,d=o.attributes.uv,g=o.attributes.uv1,v=o.attributes.normal,_=o.groups,S=o.drawRange;if(h!==null)if(Array.isArray(l))for(let w=0,E=_.length;w<E;w++){let b=_[w],y=l[b.materialIndex],R=Math.max(b.start,S.start),z=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let A=R,L=z;A<L;A+=3){let D=h.getX(A),V=h.getX(A+1),C=h.getX(A+2);r=Ea(this,y,t,i,d,g,v,D,V,C),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=b.materialIndex,e.push(r))}}else{let w=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let b=w,y=E;b<y;b+=3){let R=h.getX(b),z=h.getX(b+1),A=h.getX(b+2);r=Ea(this,l,t,i,d,g,v,R,z,A),r&&(r.faceIndex=Math.floor(b/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let w=0,E=_.length;w<E;w++){let b=_[w],y=l[b.materialIndex],R=Math.max(b.start,S.start),z=Math.min(u.count,Math.min(b.start+b.count,S.start+S.count));for(let A=R,L=z;A<L;A+=3){let D=A,V=A+1,C=A+2;r=Ea(this,y,t,i,d,g,v,D,V,C),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=b.materialIndex,e.push(r))}}else{let w=Math.max(0,S.start),E=Math.min(u.count,S.start+S.count);for(let b=w,y=E;b<y;b+=3){let R=b,z=b+1,A=b+2;r=Ea(this,l,t,i,d,g,v,R,z,A),r&&(r.faceIndex=Math.floor(b/3),e.push(r))}}}};Ja=class extends Pn{constructor(t=null,e=1,i=1,r,o,l,h,u,d=dn,g=dn,v,_){super(null,l,h,u,d,g,r,o,v,_),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Er=new Ar,H0=new ce(.5,.5),Ta=new ht,Ss=class{constructor(t=new zn,e=new zn,i=new zn,r=new zn,o=new zn,l=new zn){this.planes=[t,e,i,r,o,l]}set(t,e,i,r,o,l){let h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(i),h[3].copy(r),h[4].copy(o),h[5].copy(l),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ai,i=!1){let r=this.planes,o=t.elements,l=o[0],h=o[1],u=o[2],d=o[3],g=o[4],v=o[5],_=o[6],S=o[7],w=o[8],E=o[9],b=o[10],y=o[11],R=o[12],z=o[13],A=o[14],L=o[15];if(r[0].setComponents(d-l,S-g,y-w,L-R).normalize(),r[1].setComponents(d+l,S+g,y+w,L+R).normalize(),r[2].setComponents(d+h,S+v,y+E,L+z).normalize(),r[3].setComponents(d-h,S-v,y-E,L-z).normalize(),i)r[4].setComponents(u,_,b,A).normalize(),r[5].setComponents(d-u,S-_,y-b,L-A).normalize();else if(r[4].setComponents(d-u,S-_,y-b,L-A).normalize(),e===ai)r[5].setComponents(d+u,S+_,y+b,L+A).normalize();else if(e===gs)r[5].setComponents(u,_,b,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(t){Er.center.set(0,0,0);let e=H0.distanceTo(t.center);return Er.radius=.7071067811865476+e,Er.applyMatrix4(t.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Ta.x=r.normal.x>0?t.max.x:t.min.x,Ta.y=r.normal.y>0?t.max.y:t.min.y,Ta.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ci=class extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ka=new ht,Qa=new ht,Bf=new Xe,io=new rr,Aa=new Ar,uh=new ht,kf=new ht,Cr=class extends an{constructor(t=new Je,e=new ci){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,o=e.count;r<o;r++)Ka.fromBufferAttribute(e,r-1),Qa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ka.distanceTo(Qa);t.setAttribute("lineDistance",new $e(i,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(r),Aa.radius+=o,t.ray.intersectsSphere(Aa)===!1)return;Bf.copy(r).invert(),io.copy(t.ray).applyMatrix4(Bf);let h=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,d=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){let S=Math.max(0,l.start),w=Math.min(g.count,l.start+l.count);for(let E=S,b=w-1;E<b;E+=d){let y=g.getX(E),R=g.getX(E+1),z=Ca(this,t,io,u,y,R,E);z&&e.push(z)}if(this.isLineLoop){let E=g.getX(w-1),b=g.getX(S),y=Ca(this,t,io,u,E,b,w-1);y&&e.push(y)}}else{let S=Math.max(0,l.start),w=Math.min(_.count,l.start+l.count);for(let E=S,b=w-1;E<b;E+=d){let y=Ca(this,t,io,u,E,E+1,E);y&&e.push(y)}if(this.isLineLoop){let E=Ca(this,t,io,u,w-1,S,w-1);E&&e.push(E)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){let h=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}};zf=new ht,Vf=new ht,Pr=class extends Cr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,o=e.count;r<o;r+=2)zf.fromBufferAttribute(e,r),Vf.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+zf.distanceTo(Vf);t.setAttribute("lineDistance",new $e(i,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},_o=class extends Pn{constructor(t=[],e=pr,i,r,o,l,h,u,d,g){super(t,e,i,r,o,l,h,u,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vo=class extends Pn{constructor(t,e,i,r,o,l,h,u,d){super(t,e,i,r,o,l,h,u,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},sr=class extends Pn{constructor(t,e,i=ui,r,o,l,h=dn,u=dn,d,g=Mi,v=1){if(g!==Mi&&g!==gr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let _={width:t,height:e,depth:v};super(_,r,o,l,h,u,g,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},tl=class extends sr{constructor(t,e=ui,i=pr,r,o,l=dn,h=dn,u,d=Mi){let g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,e,i,r,o,l,h,u,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},yo=class extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},or=class n extends Je{constructor(t=1,e=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};let h=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);let u=[],d=[],g=[],v=[],_=0,S=0;w("z","y","x",-1,-1,i,e,t,l,o,0),w("z","y","x",1,-1,i,e,-t,l,o,1),w("x","z","y",1,1,t,i,e,r,l,2),w("x","z","y",1,-1,t,i,-e,r,l,3),w("x","y","z",1,-1,t,e,i,r,o,4),w("x","y","z",-1,-1,t,e,-i,r,o,5),this.setIndex(u),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(v,2));function w(E,b,y,R,z,A,L,D,V,C,k){let H=A/V,Y=L/C,J=A/2,q=L/2,Z=D/2,K=V+1,lt=C+1,dt=0,Tt=0,xt=new ht;for(let Ct=0;Ct<lt;Ct++){let Nt=Ct*Y-q;for(let ct=0;ct<K;ct++){let It=ct*H-J;xt[E]=It*R,xt[b]=Nt*z,xt[y]=Z,d.push(xt.x,xt.y,xt.z),xt[E]=0,xt[b]=0,xt[y]=D>0?1:-1,g.push(xt.x,xt.y,xt.z),v.push(ct/V),v.push(1-Ct/C),dt+=1}}for(let Ct=0;Ct<C;Ct++)for(let Nt=0;Nt<V;Nt++){let ct=_+Nt+K*Ct,It=_+Nt+K*(Ct+1),Xt=_+(Nt+1)+K*(Ct+1),Gt=_+(Nt+1)+K*Ct;u.push(ct,It,Gt),u.push(It,Xt,Gt),Tt+=6}h.addGroup(S,Tt,k),S+=Tt,_+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Si=class n extends Je{constructor(t=1,e=1,i=1,r=32,o=1,l=!1,h=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:h,thetaLength:u};let d=this;r=Math.floor(r),o=Math.floor(o);let g=[],v=[],_=[],S=[],w=0,E=[],b=i/2,y=0;R(),l===!1&&(t>0&&z(!0),e>0&&z(!1)),this.setIndex(g),this.setAttribute("position",new $e(v,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(S,2));function R(){let A=new ht,L=new ht,D=0,V=(e-t)/i;for(let C=0;C<=o;C++){let k=[],H=C/o,Y=H*(e-t)+t;for(let J=0;J<=r;J++){let q=J/r,Z=q*u+h,K=Math.sin(Z),lt=Math.cos(Z);L.x=Y*K,L.y=-H*i+b,L.z=Y*lt,v.push(L.x,L.y,L.z),A.set(K,V,lt).normalize(),_.push(A.x,A.y,A.z),S.push(q,1-H),k.push(w++)}E.push(k)}for(let C=0;C<r;C++)for(let k=0;k<o;k++){let H=E[k][C],Y=E[k+1][C],J=E[k+1][C+1],q=E[k][C+1];(t>0||k!==0)&&(g.push(H,Y,q),D+=3),(e>0||k!==o-1)&&(g.push(Y,J,q),D+=3)}d.addGroup(y,D,0),y+=D}function z(A){let L=w,D=new ce,V=new ht,C=0,k=A===!0?t:e,H=A===!0?1:-1;for(let J=1;J<=r;J++)v.push(0,b*H,0),_.push(0,H,0),S.push(.5,.5),w++;let Y=w;for(let J=0;J<=r;J++){let Z=J/r*u+h,K=Math.cos(Z),lt=Math.sin(Z);V.x=k*lt,V.y=b*H,V.z=k*K,v.push(V.x,V.y,V.z),_.push(0,H,0),D.x=K*.5+.5,D.y=lt*.5*H+.5,S.push(D.x,D.y),w++}for(let J=0;J<r;J++){let q=L+J,Z=Y+J;A===!0?g.push(Z,Z+1,q):g.push(Z+1,Z,q),C+=3}d.addGroup(y,C,A===!0?1:2),y+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ws=class n extends Si{constructor(t=1,e=1,i=32,r=1,o=!1,l=0,h=Math.PI*2){super(0,t,e,i,r,o,l,h),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:h}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pa=new ht,Ia=new ht,fh=new ht,Ra=new yi,Es=class extends Je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),o=Math.cos(ds*e),l=t.getIndex(),h=t.getAttribute("position"),u=l?l.count:h.count,d=[0,0,0],g=["a","b","c"],v=new Array(3),_={},S=[];for(let w=0;w<u;w+=3){l?(d[0]=l.getX(w),d[1]=l.getX(w+1),d[2]=l.getX(w+2)):(d[0]=w,d[1]=w+1,d[2]=w+2);let{a:E,b,c:y}=Ra;if(E.fromBufferAttribute(h,d[0]),b.fromBufferAttribute(h,d[1]),y.fromBufferAttribute(h,d[2]),Ra.getNormal(fh),v[0]=`${Math.round(E.x*r)},${Math.round(E.y*r)},${Math.round(E.z*r)}`,v[1]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,v[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let R=0;R<3;R++){let z=(R+1)%3,A=v[R],L=v[z],D=Ra[g[R]],V=Ra[g[z]],C=`${A}_${L}`,k=`${L}_${A}`;k in _&&_[k]?(fh.dot(_[k].normal)<=o&&(S.push(D.x,D.y,D.z),S.push(V.x,V.y,V.z)),_[k]=null):C in _||(_[C]={index0:d[R],index1:d[z],normal:fh.clone()})}}for(let w in _)if(_[w]){let{index0:E,index1:b}=_[w];Pa.fromBufferAttribute(h,E),Ia.fromBufferAttribute(h,b),S.push(Pa.x,Pa.y,Pa.z),S.push(Ia.x,Ia.y,Ia.z)}this.setAttribute("position",new $e(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},xo=class n extends Je{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let o=t/2,l=e/2,h=Math.floor(i),u=Math.floor(r),d=h+1,g=u+1,v=t/h,_=e/u,S=[],w=[],E=[],b=[];for(let y=0;y<g;y++){let R=y*_-l;for(let z=0;z<d;z++){let A=z*v-o;w.push(A,-R,0),E.push(0,0,1),b.push(z/h),b.push(1-y/u)}}for(let y=0;y<u;y++)for(let R=0;R<h;R++){let z=R+d*y,A=R+d*(y+1),L=R+1+d*(y+1),D=R+1+d*y;S.push(z,A,D),S.push(A,L,D)}this.setIndex(S),this.setAttribute("position",new $e(w,3)),this.setAttribute("normal",new $e(E,3)),this.setAttribute("uv",new $e(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Mo=class n extends Je{constructor(t=.5,e=1,i=32,r=1,o=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:l},i=Math.max(3,i),r=Math.max(1,r);let h=[],u=[],d=[],g=[],v=t,_=(e-t)/r,S=new ht,w=new ce;for(let E=0;E<=r;E++){for(let b=0;b<=i;b++){let y=o+b/i*l;S.x=v*Math.cos(y),S.y=v*Math.sin(y),u.push(S.x,S.y,S.z),d.push(0,0,1),w.x=(S.x/e+1)/2,w.y=(S.y/e+1)/2,g.push(w.x,w.y)}v+=_}for(let E=0;E<r;E++){let b=E*(i+1);for(let y=0;y<i;y++){let R=y+b,z=R,A=R+i+1,L=R+i+2,D=R+1;h.push(z,A,D),h.push(A,L,D)}}this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ar=class n extends Je{constructor(t=1,e=32,i=16,r=0,o=Math.PI*2,l=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:h},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let u=Math.min(l+h,Math.PI),d=0,g=[],v=new ht,_=new ht,S=[],w=[],E=[],b=[];for(let y=0;y<=i;y++){let R=[],z=y/i,A=l+z*h,L=t*Math.cos(A),D=Math.sqrt(t*t-L*L),V=0;y===0&&l===0?V=.5/e:y===i&&u===Math.PI&&(V=-.5/e);for(let C=0;C<=e;C++){let k=C/e,H=r+k*o;v.x=-D*Math.cos(H),v.y=L,v.z=D*Math.sin(H),w.push(v.x,v.y,v.z),_.copy(v).normalize(),E.push(_.x,_.y,_.z),b.push(k+V,1-z),R.push(d++)}g.push(R)}for(let y=0;y<i;y++)for(let R=0;R<e;R++){let z=g[y][R+1],A=g[y][R],L=g[y+1][R],D=g[y+1][R+1];(y!==0||l>0)&&S.push(z,A,D),(y!==i-1||u<Math.PI)&&S.push(A,L,D)}this.setIndex(S),this.setAttribute("position",new $e(w,3)),this.setAttribute("normal",new $e(E,3)),this.setAttribute("uv",new $e(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};Fd={clone:Nr,merge:En},X0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=G0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Me().setHex(r.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(r.value);break;case"v3":this.uniforms[i].value=new ht().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ke().fromArray(r.value);break;case"m3":this.uniforms[i].value=new be().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Xe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},el=class extends Gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xn=class extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},nl=class extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},il=class extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},bo=class extends ci{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};lr=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],o=e[i-1];n:{t:{let l;e:{i:if(!(t<r)){for(let h=i+2;;){if(r===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(o=r,r=e[++i],t<r)break t}l=e.length;break e}if(!(t>=o)){let h=e[1];t<h&&(i=2,o=h);for(let u=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(r=o,o=e[--i-1],t>=o)break t}l=i,i=0;break e}break n}for(;i<l;){let h=i+l>>>1;t<e[h]?l=h:i=h+1}if(r=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r;for(let l=0;l!==r;++l)e[l]=i[o+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rl=class extends lr{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_h,endingEnd:_h}}intervalChanged_(t,e,i){let r=this.parameterPositions,o=t-2,l=t+1,h=r[o],u=r[l];if(h===void 0)switch(this.getSettings_().endingStart){case vh:o=t,h=2*e-i;break;case yh:o=r.length-2,h=e+r[o]-r[o+1];break;default:o=t,h=i}if(u===void 0)switch(this.getSettings_().endingEnd){case vh:l=t,u=2*i-e;break;case yh:l=1,u=i+r[1]-r[0];break;default:l=t-1,u=e}let d=(i-e)*.5,g=this.valueSize;this._weightPrev=d/(e-h),this._weightNext=d/(u-i),this._offsetPrev=o*g,this._offsetNext=l*g}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,d=u-h,g=this._offsetPrev,v=this._offsetNext,_=this._weightPrev,S=this._weightNext,w=(i-e)/(r-e),E=w*w,b=E*w,y=-_*b+2*_*E-_*w,R=(1+_)*b+(-1.5-2*_)*E+(-.5+_)*w+1,z=(-1-S)*b+(1.5+S)*E+.5*w,A=S*b-S*E;for(let L=0;L!==h;++L)o[L]=y*l[g+L]+R*l[d+L]+z*l[u+L]+A*l[v+L];return o}},sl=class extends lr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,d=u-h,g=(i-e)/(r-e),v=1-g;for(let _=0;_!==h;++_)o[_]=l[d+_]*v+l[u+_]*g;return o}},ol=class extends lr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},al=class extends lr{interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,d=u-h,g=this.inTangents,v=this.outTangents;if(!g||!v){let w=(i-e)/(r-e),E=1-w;for(let b=0;b!==h;++b)o[b]=l[d+b]*E+l[u+b]*w;return o}let _=h*2,S=t-1;for(let w=0;w!==h;++w){let E=l[d+w],b=l[u+w],y=S*_+w*2,R=v[y],z=v[y+1],A=t*_+w*2,L=g[A],D=g[A+1],V=$0(i,e,R,L,r);o[w]=Ud(V,E,z,D,b)}return o}};Wn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hs(e,this.TimeBufferType),this.values=hs(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:hs(t.times,Array),values:hs(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),dh(t.settings)&&(i.settings={inTangents:hs(t.settings.inTangents,Array),outTangents:hs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new al(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case so:e=this.InterpolantFactoryMethodDiscrete;break;case Ya:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break;case gh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return de("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Oa;case this.InterpolantFactoryMethodBezier:return gh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;dh(this.settings)&&(Gf(this.settings.inTangents,t),Gf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,o=0,l=r-1;for(;o!==r&&i[o]<t;)++o;for(;l!==-1&&i[l]>e;)--l;if(++l,o!==0||l!==r){o>=l&&(l=Math.max(l,1),o=l-1);let h=this.getValueSize();this.times=i.slice(o,l),this.values=this.values.slice(o*h,l*h)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(_e("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,o=i.length;o===0&&(_e("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let h=0;h!==o;h++){let u=i[h];if(typeof u=="number"&&isNaN(u)){_e("KeyframeTrack: Time is not a valid number.",this,h,u),t=!1;break}if(l!==null&&l>u){_e("KeyframeTrack: Out of order keys.",this,h,u,l),t=!1;break}l=u}if(r!==void 0&&l0(r))for(let h=0,u=r.length;h!==u;++h){let d=r[h];if(isNaN(d)){_e("KeyframeTrack: Value is not a valid number.",this,h,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Oa,o=t.length-1,l=1;for(let h=1;h<o;++h){let u=!1,d=t[h],g=t[h+1];if(d!==g&&(h!==1||d!==t[0]))if(r)u=!0;else{let v=h*i,_=v-i,S=v+i;for(let w=0;w!==i;++w){let E=e[v+w];if(E!==e[_+w]||E!==e[S+w]){u=!0;break}}}if(u){if(h!==l){t[l]=t[h];let v=h*i,_=l*i;for(let S=0;S!==i;++S)e[_+S]=e[v+S]}++l}}if(o>0){t[l]=t[o];for(let h=o*i,u=l*i,d=0;d!==i;++d)e[u+d]=e[h+d];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,dh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Ya;cr=class extends Wn{constructor(t,e,i){super(t,e,i)}};cr.prototype.ValueTypeName="bool";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=so;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;ll=class extends Wn{constructor(t,e,i,r){super(t,e,i,r)}};ll.prototype.ValueTypeName="color";cl=class extends Wn{constructor(t,e,i,r){super(t,e,i,r)}};cl.prototype.ValueTypeName="number";hl=class extends lr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=(i-e)/(r-e),d=t*h;for(let g=d+h;d!==g;d+=4)Vn.slerpFlat(o,0,l,d-h,l,d,u);return o}},So=class extends Wn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new hl(this.times,this.values,this.getValueSize(),t)}};So.prototype.ValueTypeName="quaternion";So.prototype.InterpolantFactoryMethodSmooth=void 0;hr=class extends Wn{constructor(t,e,i){super(t,e,i)}};hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=so;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;ul=class extends Wn{constructor(t,e,i,r){super(t,e,i,r)}};ul.prototype.ValueTypeName="vector";fl=class{constructor(t,e,i){let r=this,o=!1,l=0,h=0,u,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(g){h++,o===!1&&r.onStart!==void 0&&r.onStart(g,l,h),o=!0},this.itemEnd=function(g){l++,r.onProgress!==void 0&&r.onProgress(g,l,h),l===h&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),u?u(g):g},this.setURLModifier=function(g){return u=g,this},this.addHandler=function(g,v){return d.push(g,v),this},this.removeHandler=function(g){let v=d.indexOf(g);return v!==-1&&d.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=d.length;v<_;v+=2){let S=d[v],w=d[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bd=new fl,dl=class{constructor(t){this.manager=t!==void 0?t:Bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,o){i.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};dl.DEFAULT_MATERIAL_NAME="__DEFAULT";wo=class extends an{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Eo=class extends wo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ph=new Xe,Xf=new ht,Wf=new ht,pl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Xf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xf),Wf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){ph.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ph,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,l=r?r.z/o.x:1,h=r?r.w/o.y:1,u=r?r.x/o.x:0,d=r?r.y/o.y:0;t.coordinateSystem===gs||t.reversedDepth?e.set(.5*l,0,0,.5*l+u,0,.5*h,0,.5*h+d,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+u,0,.5*h,0,.5*h+d,0,0,.5,.5,0,0,0,1),e.multiply(ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},La=new ht,Na=new Vn,vi=new ht,To=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(La,Na,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(La,Na,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},nr=new ht,Yf=new ce,$f=new ce,Sn=class extends To{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,e){return this.getViewBounds(t,Yf,$f),e.subVectors($f,Yf)}setViewOffset(t,e,i,r,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ds*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,o=-.5*r,l=this.view;if(this.view!==null&&this.view.enabled){let u=l.fullWidth,d=l.fullHeight;o+=l.offsetX*r/u,e-=l.offsetY*i/d,r*=l.width/u,i*=l.height/d}let h=this.filmOffset;h!==0&&(o+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ts=class extends To{constructor(t=-1,e=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-t,l=i+t,h=r+e,u=r-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,h-=g*this.view.offsetY,u=h-g*this.view.height}this.projectionMatrix.makeOrthographic(o,l,h,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xh=class extends pl{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new xh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},us=-90,fs=1,ml=class extends an{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Sn(us,fs,t,e);r.layers=this.layers,this.add(r);let o=new Sn(us,fs,t,e);o.layers=this.layers,this.add(o);let l=new Sn(us,fs,t,e);l.layers=this.layers,this.add(l);let h=new Sn(us,fs,t,e);h.layers=this.layers,this.add(h);let u=new Sn(us,fs,t,e);u.layers=this.layers,this.add(u);let d=new Sn(us,fs,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,o,l,h,u]=e;for(let d of e)this.remove(d);if(t===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,l,h,u,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let b=!1;t.isWebGLRenderer===!0?b=t.state.buffers.depth.getReversed():b=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,2,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,3,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,4,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,g),t.setRenderTarget(v,_,S),t.xr.enabled=w,i.texture.needsPMREMUpdate=!0}},gl=class extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Jh="\\[\\]\\.:\\/",q0=new RegExp("["+Jh+"]","g"),Kh="[^"+Jh+"]",Z0="[^"+Jh.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",Kh),J0=/(WCOD+)?/.source.replace("WCOD",Z0),K0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kh),Q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kh),t_=new RegExp("^"+j0+J0+K0+Q0+"$"),e_=["material","materials","bones","map"],Mh=class{constructor(t,e,i){let r=i||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},je=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(q0,"")}static parseTrackName(t){let e=t_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=i.nodeName.substring(r+1);e_.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let l=0;l<o.length;l++){let h=o[l];if(h.name===e||h.uuid===e)return h;let u=i(h.children);if(u)return u}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){_e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){_e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){_e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===d){d=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){_e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){_e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){_e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){_e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let l=t[r];if(l===void 0){let d=e.nodeName;_e("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){_e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){_e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=Mh;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Yb=new Float32Array(1),qf=new Xe,Ao=class{constructor(t,e,i=0,r=1/0){this.ray=new rr(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):_e("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qf),this}intersectObject(t,e=!0,i=[]){return bh(t,this,i,e),i.sort(Zf),i}intersectObjects(t,e=!0,i=[]){for(let r=0,o=t.length;r<o;r++)bh(t[r],this,i,e);return i.sort(Zf),i}};Cs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Sh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=r,this}},jf=new ht,Co=class extends an{constructor(t=new ht(0,0,1),e=new ht(0,0,0),i=1,r=16776960,o=i*.2,l=o*.2){super(),this.type="ArrowHelper",Da===void 0&&(Da=new Je,Da.setAttribute("position",new $e([0,0,0,0,1,0],3)),mh=new ws(.5,1,5,1),mh.translate(0,-.5,0)),this.position.copy(e),this.line=new Cr(Da,new ci({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Be(mh,new Hn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,l)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{jf.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(jf,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Po=class extends li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function op(){let n=null,t=!1,e=null,i=null;function r(o,l){i=n.requestAnimationFrame(r),e(o,l)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function r_(n){let t=new WeakMap;function e(h,u){let d=h.array,g=h.usage,v=d.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,d,g),h.onUploadCallback();let S;if(d instanceof Float32Array)S=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=n.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?S=n.HALF_FLOAT:S=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=n.SHORT;else if(d instanceof Uint32Array)S=n.UNSIGNED_INT;else if(d instanceof Int32Array)S=n.INT;else if(d instanceof Int8Array)S=n.BYTE;else if(d instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function i(h,u,d){let g=u.array,v=u.updateRanges;if(n.bindBuffer(d,h),v.length===0)n.bufferSubData(d,0,g);else{v.sort((S,w)=>S.start-w.start);let _=0;for(let S=1;S<v.length;S++){let w=v[_],E=v[S];E.start<=w.start+w.count+1?w.count=Math.max(w.count,E.start+E.count-w.start):(++_,v[_]=E)}v.length=_+1;for(let S=0,w=v.length;S<w;S++){let E=v[S];n.bufferSubData(d,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=t.get(h);u&&(n.deleteBuffer(u.buffer),t.delete(h))}function l(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let d=t.get(h);if(d===void 0)t.set(h,e(h,u));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,h,u),d.version=h.version}}return{get:r,remove:o,update:l}}function zy(n,t,e,i,r,o){let l=new Me(0),h=r===!0?0:1,u,d,g=null,v=0,_=null;function S(R){let z=R.isScene===!0?R.background:null;if(z&&z.isTexture){let A=R.backgroundBlurriness>0;z=t.get(z,A)}return z}function w(R){let z=!1,A=S(R);A===null?b(l,h):A&&A.isColor&&(b(A,1),z=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?e.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||z)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(R,z){let A=S(z);A&&(A.isCubeTexture||A.mapping===Ro)?(d===void 0&&(d=new Be(new or(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Nr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,D,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=A,d.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ky.makeRotationFromEuler(z.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(ap),d.material.toneMapped=Le.getTransfer(A.colorSpace)!==Ve,(g!==A||v!==A.version||_!==n.toneMapping)&&(d.material.needsUpdate=!0,g=A,v=A.version,_=n.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new Be(new xo(2,2),new Gn({name:"BackgroundMaterial",uniforms:Nr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,u.material.toneMapped=Le.getTransfer(A.colorSpace)!==Ve,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||v!==A.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,g=A,v=A.version,_=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function b(R,z){R.getRGB(sc,jh(n)),e.buffers.color.setClear(sc.r,sc.g,sc.b,z,o)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(R,z=1){l.set(R),h=z,b(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,b(l,h)},render:w,addToRenderList:E,dispose:y}}function Vy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=_(null),o=r,l=!1;function h(Y,J,q,Z,K){let lt=!1,dt=v(Y,Z,q,J);o!==dt&&(o=dt,d(o.object)),lt=S(Y,Z,q,K),lt&&w(Y,Z,q,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(lt||l)&&(l=!1,A(Y,J,q,Z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function u(){return n.createVertexArray()}function d(Y){return n.bindVertexArray(Y)}function g(Y){return n.deleteVertexArray(Y)}function v(Y,J,q,Z){let K=Z.wireframe===!0,lt=i[J.id];lt===void 0&&(lt={},i[J.id]=lt);let dt=Y.isInstancedMesh===!0?Y.id:0,Tt=lt[dt];Tt===void 0&&(Tt={},lt[dt]=Tt);let xt=Tt[q.id];xt===void 0&&(xt={},Tt[q.id]=xt);let Ct=xt[K];return Ct===void 0&&(Ct=_(u()),xt[K]=Ct),Ct}function _(Y){let J=[],q=[],Z=[];for(let K=0;K<e;K++)J[K]=0,q[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:q,attributeDivisors:Z,object:Y,attributes:{},index:null}}function S(Y,J,q,Z){let K=o.attributes,lt=J.attributes,dt=0,Tt=q.getAttributes();for(let xt in Tt)if(Tt[xt].location>=0){let Nt=K[xt],ct=lt[xt];if(ct===void 0&&(xt==="instanceMatrix"&&Y.instanceMatrix&&(ct=Y.instanceMatrix),xt==="instanceColor"&&Y.instanceColor&&(ct=Y.instanceColor)),Nt===void 0||Nt.attribute!==ct||ct&&Nt.data!==ct.data)return!0;dt++}return o.attributesNum!==dt||o.index!==Z}function w(Y,J,q,Z){let K={},lt=J.attributes,dt=0,Tt=q.getAttributes();for(let xt in Tt)if(Tt[xt].location>=0){let Nt=lt[xt];Nt===void 0&&(xt==="instanceMatrix"&&Y.instanceMatrix&&(Nt=Y.instanceMatrix),xt==="instanceColor"&&Y.instanceColor&&(Nt=Y.instanceColor));let ct={};ct.attribute=Nt,Nt&&Nt.data&&(ct.data=Nt.data),K[xt]=ct,dt++}o.attributes=K,o.attributesNum=dt,o.index=Z}function E(){let Y=o.newAttributes;for(let J=0,q=Y.length;J<q;J++)Y[J]=0}function b(Y){y(Y,0)}function y(Y,J){let q=o.newAttributes,Z=o.enabledAttributes,K=o.attributeDivisors;q[Y]=1,Z[Y]===0&&(n.enableVertexAttribArray(Y),Z[Y]=1),K[Y]!==J&&(n.vertexAttribDivisor(Y,J),K[Y]=J)}function R(){let Y=o.newAttributes,J=o.enabledAttributes;for(let q=0,Z=J.length;q<Z;q++)J[q]!==Y[q]&&(n.disableVertexAttribArray(q),J[q]=0)}function z(Y,J,q,Z,K,lt,dt){dt===!0?n.vertexAttribIPointer(Y,J,q,K,lt):n.vertexAttribPointer(Y,J,q,Z,K,lt)}function A(Y,J,q,Z){E();let K=Z.attributes,lt=q.getAttributes(),dt=J.defaultAttributeValues;for(let Tt in lt){let xt=lt[Tt];if(xt.location>=0){let Ct=K[Tt];if(Ct===void 0&&(Tt==="instanceMatrix"&&Y.instanceMatrix&&(Ct=Y.instanceMatrix),Tt==="instanceColor"&&Y.instanceColor&&(Ct=Y.instanceColor)),Ct!==void 0){let Nt=Ct.normalized,ct=Ct.itemSize,It=t.get(Ct);if(It===void 0)continue;let Xt=It.buffer,Gt=It.type,Vt=It.bytesPerElement,_t=Gt===n.INT||Gt===n.UNSIGNED_INT||Ct.gpuType===xl;if(Ct.isInterleavedBufferAttribute){let Et=Ct.data,Ot=Et.stride,Qt=Ct.offset;if(Et.isInstancedInterleavedBuffer){for(let et=0;et<xt.locationSize;et++)y(xt.location+et,Et.meshPerAttribute);Y.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let et=0;et<xt.locationSize;et++)b(xt.location+et);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let et=0;et<xt.locationSize;et++)z(xt.location+et,ct/xt.locationSize,Gt,Nt,Ot*Vt,(Qt+ct/xt.locationSize*et)*Vt,_t)}else{if(Ct.isInstancedBufferAttribute){for(let Et=0;Et<xt.locationSize;Et++)y(xt.location+Et,Ct.meshPerAttribute);Y.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Et=0;Et<xt.locationSize;Et++)b(xt.location+Et);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let Et=0;Et<xt.locationSize;Et++)z(xt.location+Et,ct/xt.locationSize,Gt,Nt,ct*Vt,ct/xt.locationSize*Et*Vt,_t)}}else if(dt!==void 0){let Nt=dt[Tt];if(Nt!==void 0)switch(Nt.length){case 2:n.vertexAttrib2fv(xt.location,Nt);break;case 3:n.vertexAttrib3fv(xt.location,Nt);break;case 4:n.vertexAttrib4fv(xt.location,Nt);break;default:n.vertexAttrib1fv(xt.location,Nt)}}}}R()}function L(){k();for(let Y in i){let J=i[Y];for(let q in J){let Z=J[q];for(let K in Z){let lt=Z[K];for(let dt in lt)g(lt[dt].object),delete lt[dt];delete Z[K]}}delete i[Y]}}function D(Y){if(i[Y.id]===void 0)return;let J=i[Y.id];for(let q in J){let Z=J[q];for(let K in Z){let lt=Z[K];for(let dt in lt)g(lt[dt].object),delete lt[dt];delete Z[K]}}delete i[Y.id]}function V(Y){for(let J in i){let q=i[J];for(let Z in q){let K=q[Z];if(K[Y.id]===void 0)continue;let lt=K[Y.id];for(let dt in lt)g(lt[dt].object),delete lt[dt];delete K[Y.id]}}}function C(Y){for(let J in i){let q=i[J],Z=Y.isInstancedMesh===!0?Y.id:0,K=q[Z];if(K!==void 0){for(let lt in K){let dt=K[lt];for(let Tt in dt)g(dt[Tt].object),delete dt[Tt];delete K[lt]}delete q[Z],Object.keys(q).length===0&&delete i[J]}}}function k(){H(),l=!0,o!==r&&(o=r,d(o.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:k,resetDefaultState:H,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfObject:C,releaseStatesOfProgram:V,initAttributes:E,enableAttribute:b,disableUnusedAttributes:R}}function Hy(n,t,e){let i;function r(u){i=u}function o(u,d){n.drawArrays(i,u,d),e.update(d,i,1)}function l(u,d,g){g!==0&&(n.drawArraysInstanced(i,u,d,g),e.update(d,i,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,g);let _=0;for(let S=0;S<g;S++)_+=d[S];e.update(_,i,1)}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}function Gy(n,t,e,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let V=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(V){return!(V!==Qn&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(V){let C=V===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==Dn&&V!==fi&&!C&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(V){if(V==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",g=u(d);g!==d&&(de("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);let v=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&_===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let S=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),b=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),z=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:w,maxTextureSize:E,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:R,maxVaryings:z,maxFragmentUniforms:A,maxSamples:L,samples:D}}function Xy(n){let t=this,e=null,i=0,r=!1,o=!1,l=new zn,h=new be,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){let S=v.length!==0||_||i!==0||r;return r=_,i=v.length,S},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,_){e=g(v,_,0)},this.setState=function(v,_,S){let w=v.clippingPlanes,E=v.clipIntersection,b=v.clipShadows,y=n.get(v);if(!r||w===null||w.length===0||o&&!b)o?g(null):d();else{let R=o?0:i,z=R*4,A=y.clippingState||null;u.value=A,A=g(w,_,z,S);for(let L=0;L!==z;++L)A[L]=e[L];y.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function d(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function g(v,_,S,w){let E=v!==null?v.length:0,b=null;if(E!==0){if(b=u.value,w!==!0||b===null){let y=S+E*4,R=_.matrixWorldInverse;h.getNormalMatrix(R),(b===null||b.length<y)&&(b=new Float32Array(y));for(let z=0,A=S;z!==E;++z,A+=4)l.copy(v[z]).applyMatrix4(R,h),l.normal.toArray(b,A),b[A+3]=l.constant}u.value=b,u.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,b}}function Zy(n){let t=[],e=[],i=n,r=n-Ds+1+Wy;for(let o=0;o<r;o++){let l=Math.pow(2,i);t.push(l);let h=1/(l-2),u=-h,d=1+h,g=[u,u,d,u,d,d,u,u,d,d,u,d],v=6,_=6,S=3,w=new Float32Array(S*_*v),E=new Float32Array(S*_*v);for(let y=0;y<v;y++){let R=y%3*2/3-1,z=y>2?0:-1,A=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];w.set(A,S*_*y);for(let L=0;L<_;L++){let D=g[L*2]*2-1,V=g[L*2+1]*2-1;y===0?Dr.set(1,V,D):y===1?Dr.set(-D,1,-V):y===2?Dr.set(-D,V,1):y===3?Dr.set(-1,V,-D):y===4?Dr.set(-D,-1,V):Dr.set(D,V,-1),Dr.toArray(E,(y*_+L)*S)}}let b=new Je;b.setAttribute("position",new Ye(w,S)),b.setAttribute("outputDirection",new Ye(E,S)),e.push(new Be(b,null)),i>Ds&&i--}return{lodMeshes:e,sizeLods:t}}function zd(n,t,e){let i=new Nn(n,t,e);return i.texture.mapping=Ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function jy(n,t,e){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$y,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Jy(n,t,e){return new Gn({name:"SphericalGaussianBlur",defines:{SAMPLES:Yy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Vd(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Hd(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ky(n){let t=new WeakMap,e=new WeakMap,i=null;function r(_,S=!1){return _==null?null:S?l(_):o(_)}function o(_){if(_&&_.isTexture){let S=_.mapping;if(S===_l||S===vl)if(t.has(_)){let w=t.get(_).texture;return h(w,_.mapping)}else{let w=_.image;if(w&&w.height>0){let E=new lc(w.height);return E.fromEquirectangularTexture(n,_),t.set(_,E),_.addEventListener("dispose",d),h(E.texture,_.mapping)}else return null}}return _}function l(_){if(_&&_.isTexture){let S=_.mapping,w=S===_l||S===vl,E=S===pr||S===Rr;if(w||E){let b=e.get(_),y=b!==void 0?b.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return i===null&&(i=new ac(n)),b=w?i.fromEquirectangular(_,b):i.fromCubemap(_,b),b.texture.pmremVersion=_.pmremVersion,e.set(_,b),b.texture;if(b!==void 0)return b.texture;{let R=_.image;return w&&R&&R.height>0||E&&R&&u(R)?(i===null&&(i=new ac(n)),b=w?i.fromEquirectangular(_):i.fromCubemap(_),b.texture.pmremVersion=_.pmremVersion,e.set(_,b),_.addEventListener("dispose",g),b.texture):null}}}return _}function h(_,S){return S===_l?_.mapping=pr:S===vl&&(_.mapping=Rr),_}function u(_){let S=0,w=6;for(let E=0;E<w;E++)_[E]!==void 0&&S++;return S===w}function d(_){let S=_.target;S.removeEventListener("dispose",d);let w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function g(_){let S=_.target;S.removeEventListener("dispose",g);let w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function v(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:v}}function Qy(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Tr("WebGLRenderer: "+i+" extension not supported."),r}}}function tx(n,t,e,i){let r={},o=new WeakMap;function l(v){let _=v.target;_.index!==null&&t.remove(_.index);for(let w in _.attributes)t.remove(_.attributes[w]);_.removeEventListener("dispose",l),delete r[_.id];let S=o.get(_);S&&(t.remove(S),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function h(v,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function u(v){let _=v.attributes;for(let S in _)t.update(_[S],n.ARRAY_BUFFER)}function d(v){let _=[],S=v.index,w=v.attributes.position,E=0;if(w===void 0)return;if(S!==null){let R=S.array;E=S.version;for(let z=0,A=R.length;z<A;z+=3){let L=R[z+0],D=R[z+1],V=R[z+2];_.push(L,D,D,V,V,L)}}else{let R=w.array;E=w.version;for(let z=0,A=R.length/3-1;z<A;z+=3){let L=z+0,D=z+1,V=z+2;_.push(L,D,D,V,V,L)}}let b=new(w.count>=65535?po:fo)(_,1);b.version=E;let y=o.get(v);y&&t.remove(y),o.set(v,b)}function g(v){let _=o.get(v);if(_){let S=v.index;S!==null&&_.version<S.version&&d(v)}else d(v);return o.get(v)}return{get:h,update:u,getWireframeAttribute:g}}function ex(n,t,e){let i;function r(v){i=v}let o,l;function h(v){o=v.type,l=v.bytesPerElement}function u(v,_){n.drawElements(i,_,o,v*l),e.update(_,i,1)}function d(v,_,S){S!==0&&(n.drawElementsInstanced(i,_,o,v*l,S),e.update(_,i,S))}function g(v,_,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,o,v,0,S);let E=0;for(let b=0;b<S;b++)E+=_[b];e.update(E,i,1)}this.setMode=r,this.setIndex=h,this.render=u,this.renderInstances=d,this.renderMultiDraw=g}function nx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,h){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=h*(o/3);break;case n.LINES:e.lines+=h*(o/2);break;case n.LINE_STRIP:e.lines+=h*(o-1);break;case n.LINE_LOOP:e.lines+=h*o;break;case n.POINTS:e.points+=h*o;break;default:_e("WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function ix(n,t,e){let i=new WeakMap,r=new Ke;function o(l,h,u){let d=l.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0,_=i.get(h);if(_===void 0||_.count!==v){let k=function(){V.dispose(),i.delete(h),h.removeEventListener("dispose",k)};_!==void 0&&_.texture.dispose();let S=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],z=0;S===!0&&(z=1),w===!0&&(z=2),E===!0&&(z=3);let A=h.attributes.position.count*z,L=1;A>t.maxTextureSize&&(L=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let D=new Float32Array(A*L*4*v),V=new ho(D,A,L,v);V.type=fi,V.needsUpdate=!0;let C=z*4;for(let H=0;H<v;H++){let Y=b[H],J=y[H],q=R[H],Z=A*L*4*H;for(let K=0;K<Y.count;K++){let lt=K*C;S===!0&&(r.fromBufferAttribute(Y,K),D[Z+lt+0]=r.x,D[Z+lt+1]=r.y,D[Z+lt+2]=r.z,D[Z+lt+3]=0),w===!0&&(r.fromBufferAttribute(J,K),D[Z+lt+4]=r.x,D[Z+lt+5]=r.y,D[Z+lt+6]=r.z,D[Z+lt+7]=0),E===!0&&(r.fromBufferAttribute(q,K),D[Z+lt+8]=r.x,D[Z+lt+9]=r.y,D[Z+lt+10]=r.z,D[Z+lt+11]=q.itemSize===4?r.w:1)}}_={count:v,texture:V,size:new ce(A,L)},i.set(h,_),h.addEventListener("dispose",k)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let S=0;for(let E=0;E<d.length;E++)S+=d[E];let w=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(n,"morphTargetBaseInfluence",w),u.getUniforms().setValue(n,"morphTargetInfluences",d)}u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:o}}function rx(n,t,e,i,r){let o=new WeakMap;function l(d){let g=r.render.frame,v=d.geometry,_=t.get(d,v);if(o.get(_)!==g&&(t.update(_),o.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),o.get(d)!==g&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,g))),d.isSkinnedMesh){let S=d.skeleton;o.get(S)!==g&&(S.update(),o.set(S,g))}return _}function h(){o=new WeakMap}function u(d){let g=d.target;g.removeEventListener("dispose",u),i.releaseStatesOfObject(g),e.remove(g.instanceMatrix),g.instanceColor!==null&&e.remove(g.instanceColor)}return{update:l,dispose:h}}function ox(n,t,e,i,r,o){let l=new Nn(t,e,{type:n,depthBuffer:r,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,u=null,d=new Je;d.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new $e([0,2,0,0,2,0],2));let g=new el({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Be(d,g),_=new Ts(-1,1,1,-1,0,1),S=null,w=null,E=!1,b,y=null,R=[],z=!1;this.setSize=function(A,L){l.setSize(A,L),h!==null&&h.setSize(A,L),u!==null&&u.setSize(A,L);for(let D=0;D<R.length;D++){let V=R[D];V.setSize&&V.setSize(A,L)}},this.setEffects=function(A){R=A,z=R.length>0&&R[0].isRenderPass===!0;let L=l.width,D=l.height;R.length>0&&h===null&&(h=new Nn(L,D,{type:di,depthBuffer:!1,stencilBuffer:!1}),u=new Nn(L,D,{type:di,depthBuffer:!1,stencilBuffer:!1}));for(let V=0;V<R.length;V++){let C=R[V];C.setSize&&C.setSize(L,D)}},this.begin=function(A,L){if(E||A.toneMapping===hi&&R.length===0)return!1;if(y=L,L!==null){let D=L.width,V=L.height;(l.width!==D||l.height!==V)&&this.setSize(D,V)}return z===!1&&A.setRenderTarget(l),b=A.toneMapping,A.toneMapping=hi,!0},this.hasRenderPass=function(){return z},this.end=function(A,L){A.toneMapping=b,E=!0;let D=l,V=h;for(let C=0;C<R.length;C++){let k=R[C];k.enabled!==!1&&(k.render(A,V,D,L),k.needsSwap!==!1&&(D=V,V=V===h?u:h))}if(S!==A.outputColorSpace||w!==A.toneMapping){S=A.outputColorSpace,w=A.toneMapping,g.defines={},Le.getTransfer(S)===Ve&&(g.defines.SRGB_TRANSFER="");let C=sx[w];C&&(g.defines[C]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(y),A.render(v,_),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){l.dispose(),h!==null&&h.dispose(),u!==null&&u.dispose(),d.dispose(),g.dispose()}}function Fs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,o=Gd[r];if(o===void 0&&(o=new Float32Array(r),Gd[r]=o),t!==0){i.toArray(o,0);for(let l=1,h=0;l!==t;++l)h+=e,n[l].toArray(o,h)}return o}function ln(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function cn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function uc(n,t){let e=Xd[t];e===void 0&&(e=new Int32Array(t),Xd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ax(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function lx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2fv(this.addr,t),cn(e,t)}}function cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;n.uniform3fv(this.addr,t),cn(e,t)}}function hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4fv(this.addr,t),cn(e,t)}}function ux(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;$d.set(i),n.uniformMatrix2fv(this.addr,!1,$d),cn(e,i)}}function fx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;Yd.set(i),n.uniformMatrix3fv(this.addr,!1,Yd),cn(e,i)}}function dx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;Wd.set(i),n.uniformMatrix4fv(this.addr,!1,Wd),cn(e,i)}}function px(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2iv(this.addr,t),cn(e,t)}}function gx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;n.uniform3iv(this.addr,t),cn(e,t)}}function _x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4iv(this.addr,t),cn(e,t)}}function vx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2uiv(this.addr,t),cn(e,t)}}function xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;n.uniform3uiv(this.addr,t),cn(e,t)}}function Mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4uiv(this.addr,t),cn(e,t)}}function bx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(au.compareFunction=e.isReversedDepthBuffer()?rc:ic,o=au):o=lp,e.setTexture2D(t||o,r)}function Sx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||hp,r)}function wx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||up,r)}function Ex(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||cp,r)}function Tx(n){switch(n){case 5126:return ax;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return fx;case 35676:return dx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return vx;case 36294:return yx;case 36295:return xx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ex}}function Ax(n,t){n.uniform1fv(this.addr,t)}function Cx(n,t){let e=Fs(t,this.size,2);n.uniform2fv(this.addr,e)}function Px(n,t){let e=Fs(t,this.size,3);n.uniform3fv(this.addr,e)}function Ix(n,t){let e=Fs(t,this.size,4);n.uniform4fv(this.addr,e)}function Rx(n,t){let e=Fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Lx(n,t){let e=Fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Nx(n,t){let e=Fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Dx(n,t){n.uniform1iv(this.addr,t)}function Ox(n,t){n.uniform2iv(this.addr,t)}function Fx(n,t){n.uniform3iv(this.addr,t)}function Ux(n,t){n.uniform4iv(this.addr,t)}function Bx(n,t){n.uniform1uiv(this.addr,t)}function kx(n,t){n.uniform2uiv(this.addr,t)}function zx(n,t){n.uniform3uiv(this.addr,t)}function Vx(n,t){n.uniform4uiv(this.addr,t)}function Hx(n,t,e){let i=this.cache,r=t.length,o=uc(e,r);ln(i,o)||(n.uniform1iv(this.addr,o),cn(i,o));let l;this.type===n.SAMPLER_2D_SHADOW?l=au:l=lp;for(let h=0;h!==r;++h)e.setTexture2D(t[h]||l,o[h])}function Gx(n,t,e){let i=this.cache,r=t.length,o=uc(e,r);ln(i,o)||(n.uniform1iv(this.addr,o),cn(i,o));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||hp,o[l])}function Xx(n,t,e){let i=this.cache,r=t.length,o=uc(e,r);ln(i,o)||(n.uniform1iv(this.addr,o),cn(i,o));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||up,o[l])}function Wx(n,t,e){let i=this.cache,r=t.length,o=uc(e,r);ln(i,o)||(n.uniform1iv(this.addr,o),cn(i,o));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||cp,o[l])}function Yx(n){switch(n){case 5126:return Ax;case 35664:return Cx;case 35665:return Px;case 35666:return Ix;case 35674:return Rx;case 35675:return Lx;case 35676:return Nx;case 5124:case 35670:return Dx;case 35667:case 35671:return Ox;case 35668:case 35672:return Fx;case 35669:case 35673:return Ux;case 5125:return Bx;case 36294:return kx;case 36295:return zx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return Wx}}function qd(n,t){n.seq.push(t),n.map[t.id]=t}function $x(n,t,e){let i=n.name,r=i.length;for(su.lastIndex=0;;){let o=su.exec(i),l=su.lastIndex,h=o[1],u=o[2]==="]",d=o[3];if(u&&(h=h|0),d===void 0||d==="["&&l+2===r){qd(e,d===void 0?new lu(h,n,t):new cu(h,n,t));break}else{let v=e.map[h];v===void 0&&(v=new hu(h),qd(e,v)),e=v}}}function Zd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function jx(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=r;l<o;l++){let h=l+1;i.push(`${h===t?">":" "} ${h}: ${e[l]}`)}return i.join(`
`)}function Jx(n){Le._getMatrix(jd,Le.workingColorSpace,n);let t=`mat3( ${jd.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(n)){case ao:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Jd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let l=/ERROR: 0:(\d+)/.exec(o);if(l){let h=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+jx(n.getShaderSource(t),h)}else return o}function Kx(n,t){let e=Jx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tM(n,t){let e=Qx[t];return e===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function eM(){Le.getLuminanceCoefficients(oc);let n=oc.x.toFixed(4),t=oc.y.toFixed(4),e=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function iM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function rM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(t,r),l=o.name,h=1;o.type===n.FLOAT_MAT2&&(h=2),o.type===n.FLOAT_MAT3&&(h=3),o.type===n.FLOAT_MAT4&&(h=4),e[l]={type:o.type,location:n.getAttribLocation(t,l),locationSize:h}}return e}function Vo(n){return n!==""}function Kd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function uu(n){return n.replace(sM,aM)}function aM(n,t){let e=Ee[t];if(e===void 0){let i=oM.get(t);if(i!==void 0)e=Ee[i],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return uu(e)}function tp(n){return n.replace(lM,cM)}function cM(n,t,e,i){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ep(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function uM(n){return hM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function dM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":fM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function mM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":pM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function _M(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":gM[n.combine]||"ENVMAP_BLENDING_NONE"}function vM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function yM(n,t,e,i){let r=n.getContext(),o=e.defines,l=e.vertexShader,h=e.fragmentShader,u=uM(e),d=dM(e),g=mM(e),v=_M(e),_=vM(e),S=nM(e),w=iM(o),E=r.createProgram(),b,y,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Vo).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Vo).join(`
`),y.length>0&&(y+=`
`)):(b=[ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),y=[ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Ee.tonemapping_pars_fragment:"",e.toneMapping!==hi?tM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,Kx("linearToOutputTexel",e.outputColorSpace),eM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vo).join(`
`)),l=uu(l),l=Kd(l,e),l=Qd(l,e),h=uu(h),h=Kd(h,e),h=Qd(h,e),l=tp(l),h=tp(h),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",e.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let z=R+b+l,A=R+y+h,L=Zd(r,r.VERTEX_SHADER,z),D=Zd(r,r.FRAGMENT_SHADER,A);r.attachShader(E,L),r.attachShader(E,D),e.index0AttributeName!==void 0?r.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function V(Y){if(n.debug.checkShaderErrors){let J=r.getProgramInfoLog(E)||"",q=r.getShaderInfoLog(L)||"",Z=r.getShaderInfoLog(D)||"",K=J.trim(),lt=q.trim(),dt=Z.trim(),Tt=!0,xt=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,L,D);else{let Ct=Jd(r,L,"vertex"),Nt=Jd(r,D,"fragment");_e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+K+`
`+Ct+`
`+Nt)}else K!==""?de("WebGLProgram: Program Info Log:",K):(lt===""||dt==="")&&(xt=!1);xt&&(Y.diagnostics={runnable:Tt,programLog:K,vertexShader:{log:lt,prefix:b},fragmentShader:{log:dt,prefix:y}})}r.deleteShader(L),r.deleteShader(D),C=new Os(r,E),k=rM(r,E)}let C;this.getUniforms=function(){return C===void 0&&V(this),C};let k;this.getAttributes=function(){return k===void 0&&V(this),k};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(E,qx)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zx++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=D,this}function MM(n){return n===_r||n===Uo||n===Bo}function bM(n,t,e,i,r,o){let l=new xs,h=new fu,u=new Set,d=[],g=new Map,v=i.logarithmicDepthBuffer,_=i.precision,S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return u.add(C),C===0?"uv":`uv${C}`}function E(C,k,H,Y,J,q){let Z=Y.fog,K=J.geometry,lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,dt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,Tt=t.get(C.envMap||lt,dt),xt=Tt&&Tt.mapping===Ro?Tt.image.height:null,Ct=S[C.type];C.precision!==null&&(_=i.getMaxPrecision(C.precision),_!==C.precision&&de("WebGLProgram.getParameters:",C.precision,"not supported, using",_,"instead."));let Nt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ct=Nt!==void 0?Nt.length:0,It=0;K.morphAttributes.position!==void 0&&(It=1),K.morphAttributes.normal!==void 0&&(It=2),K.morphAttributes.color!==void 0&&(It=3);let Xt,Gt,Vt,_t;if(Ct){let Pe=Ti[Ct];Xt=Pe.vertexShader,Gt=Pe.fragmentShader}else{Xt=C.vertexShader,Gt=C.fragmentShader;let Pe=h.getVertexShaderStage(C),De=h.getFragmentShaderStage(C);h.update(C,Pe,De),Vt=Pe.id,_t=De.id}let Et=n.getRenderTarget(),Ot=n.state.buffers.depth.getReversed(),Qt=J.isInstancedMesh===!0,et=J.isBatchedMesh===!0,oe=!!C.map,Ue=!!C.matcap,ue=!!Tt,pe=!!C.aoMap,me=!!C.lightMap,fe=!!C.bumpMap&&C.wireframe===!1,Te=!!C.normalMap,ne=!!C.displacementMap,Ce=!!C.emissiveMap,ve=!!C.metalnessMap,Ae=!!C.roughnessMap,at=C.anisotropy>0,ze=C.clearcoat>0,Se=C.dispersion>0,X=C.retroreflectivity>0,P=C.iridescence>0,it=C.sheen>0,mt=C.transmission>0,Pt=at&&!!C.anisotropyMap,kt=ze&&!!C.clearcoatMap,Wt=ze&&!!C.clearcoatNormalMap,Mt=ze&&!!C.clearcoatRoughnessMap,Dt=P&&!!C.iridescenceMap,Yt=P&&!!C.iridescenceThicknessMap,Kt=it&&!!C.sheenColorMap,B=it&&!!C.sheenRoughnessMap,W=!!C.specularMap,j=!!C.specularColorMap,st=!!C.specularIntensityMap,yt=mt&&!!C.transmissionMap,$=mt&&!!C.thicknessMap,St=!!C.gradientMap,pt=!!C.alphaMap,ut=C.alphaTest>0,Ut=!!C.alphaHash,wt=!!C.extensions,Ft=hi;C.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Ft=n.toneMapping);let te={shaderID:Ct,shaderType:C.type,shaderName:C.name,vertexShader:Xt,fragmentShader:Gt,defines:C.defines,customVertexShaderID:Vt,customFragmentShaderID:_t,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:_,batching:et,batchingColor:et&&J._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&J.instanceColor!==null,instancingMorph:Qt&&J.morphTexture!==null,outputColorSpace:Et===null?n.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!C.alphaToCoverage,map:oe,matcap:Ue,envMap:ue,envMapMode:ue&&Tt.mapping,envMapCubeUVHeight:xt,aoMap:pe,lightMap:me,bumpMap:fe,normalMap:Te,displacementMap:ne,emissiveMap:Ce,normalMapObjectSpace:Te&&C.normalMapType===bd,normalMapTangentSpace:Te&&C.normalMapType===nc,packedNormalMap:Te&&C.normalMapType===nc&&MM(C.normalMap.format),metalnessMap:ve,roughnessMap:Ae,anisotropy:at,anisotropyMap:Pt,clearcoat:ze,clearcoatMap:kt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:Mt,dispersion:Se,retroreflection:X,iridescence:P,iridescenceMap:Dt,iridescenceThicknessMap:Yt,sheen:it,sheenColorMap:Kt,sheenRoughnessMap:B,specularMap:W,specularColorMap:j,specularIntensityMap:st,transmission:mt,transmissionMap:yt,thicknessMap:$,gradientMap:St,opaque:C.transparent===!1&&C.blending===Is&&C.alphaToCoverage===!1,alphaMap:pt,alphaTest:ut,alphaHash:Ut,combine:C.combine,mapUv:oe&&w(C.map.channel),aoMapUv:pe&&w(C.aoMap.channel),lightMapUv:me&&w(C.lightMap.channel),bumpMapUv:fe&&w(C.bumpMap.channel),normalMapUv:Te&&w(C.normalMap.channel),displacementMapUv:ne&&w(C.displacementMap.channel),emissiveMapUv:Ce&&w(C.emissiveMap.channel),metalnessMapUv:ve&&w(C.metalnessMap.channel),roughnessMapUv:Ae&&w(C.roughnessMap.channel),anisotropyMapUv:Pt&&w(C.anisotropyMap.channel),clearcoatMapUv:kt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:B&&w(C.sheenRoughnessMap.channel),specularMapUv:W&&w(C.specularMap.channel),specularColorMapUv:j&&w(C.specularColorMap.channel),specularIntensityMapUv:st&&w(C.specularIntensityMap.channel),transmissionMapUv:yt&&w(C.transmissionMap.channel),thicknessMapUv:$&&w(C.thicknessMap.channel),alphaMapUv:pt&&w(C.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Te||at),vertexNormals:!!K.attributes.normal,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!K.attributes.uv&&(oe||pt),fog:!!Z,useFog:C.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:C.wireframe===!1&&(C.flatShading===!0||K.attributes.normal===void 0&&Te===!1&&(C.isMeshLambertMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isMeshPhysicalMaterial)),sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ot,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:It,numSunLights:k.sun.length,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numSunLightShadows:k.sunShadowMap.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:oe&&C.map.isVideoTexture===!0&&Le.getTransfer(C.map.colorSpace)===Ve,decodeVideoTextureEmissive:Ce&&C.emissiveMap.isVideoTexture===!0&&Le.getTransfer(C.emissiveMap.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===wn,flipSided:C.side===In,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:wt&&C.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&C.extensions.multiDraw===!0||et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return te.vertexUv1s=u.has(1),te.vertexUv2s=u.has(2),te.vertexUv3s=u.has(3),u.clear(),te}function b(C){let k=[];if(C.shaderID?k.push(C.shaderID):(k.push(C.customVertexShaderID),k.push(C.customFragmentShaderID)),C.defines!==void 0)for(let H in C.defines)k.push(H),k.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(y(k,C),R(k,C),k.push(n.outputColorSpace)),k.push(C.customProgramCacheKey),k.join()}function y(C,k){C.push(k.precision),C.push(k.outputColorSpace),C.push(k.envMapMode),C.push(k.envMapCubeUVHeight),C.push(k.mapUv),C.push(k.alphaMapUv),C.push(k.lightMapUv),C.push(k.aoMapUv),C.push(k.bumpMapUv),C.push(k.normalMapUv),C.push(k.displacementMapUv),C.push(k.emissiveMapUv),C.push(k.metalnessMapUv),C.push(k.roughnessMapUv),C.push(k.anisotropyMapUv),C.push(k.clearcoatMapUv),C.push(k.clearcoatNormalMapUv),C.push(k.clearcoatRoughnessMapUv),C.push(k.iridescenceMapUv),C.push(k.iridescenceThicknessMapUv),C.push(k.sheenColorMapUv),C.push(k.sheenRoughnessMapUv),C.push(k.specularMapUv),C.push(k.specularColorMapUv),C.push(k.specularIntensityMapUv),C.push(k.transmissionMapUv),C.push(k.thicknessMapUv),C.push(k.combine),C.push(k.fogExp2),C.push(k.sizeAttenuation),C.push(k.morphTargetsCount),C.push(k.morphAttributeCount),C.push(k.numSunLights),C.push(k.numDirLights),C.push(k.numPointLights),C.push(k.numSpotLights),C.push(k.numSpotLightMaps),C.push(k.numHemiLights),C.push(k.numRectAreaLights),C.push(k.numSunLightShadows),C.push(k.numDirLightShadows),C.push(k.numPointLightShadows),C.push(k.numSpotLightShadows),C.push(k.numSpotLightShadowsWithMaps),C.push(k.numLightProbes),C.push(k.shadowMapType),C.push(k.toneMapping),C.push(k.numClippingPlanes),C.push(k.numClipIntersection),C.push(k.depthPacking)}function R(C,k){l.disableAll(),k.instancing&&l.enable(0),k.instancingColor&&l.enable(1),k.instancingMorph&&l.enable(2),k.matcap&&l.enable(3),k.envMap&&l.enable(4),k.normalMapObjectSpace&&l.enable(5),k.normalMapTangentSpace&&l.enable(6),k.clearcoat&&l.enable(7),k.iridescence&&l.enable(8),k.alphaTest&&l.enable(9),k.vertexColors&&l.enable(10),k.vertexAlphas&&l.enable(11),k.vertexUv1s&&l.enable(12),k.vertexUv2s&&l.enable(13),k.vertexUv3s&&l.enable(14),k.vertexTangents&&l.enable(15),k.anisotropy&&l.enable(16),k.alphaHash&&l.enable(17),k.batching&&l.enable(18),k.dispersion&&l.enable(19),k.retroreflection&&l.enable(24),k.batchingColor&&l.enable(20),k.gradientMap&&l.enable(21),k.packedNormalMap&&l.enable(22),k.vertexNormals&&l.enable(23),C.push(l.mask),l.disableAll(),k.fog&&l.enable(0),k.useFog&&l.enable(1),k.flatShading&&l.enable(2),k.logarithmicDepthBuffer&&l.enable(3),k.reversedDepthBuffer&&l.enable(4),k.skinning&&l.enable(5),k.morphTargets&&l.enable(6),k.morphNormals&&l.enable(7),k.morphColors&&l.enable(8),k.premultipliedAlpha&&l.enable(9),k.shadowMapEnabled&&l.enable(10),k.doubleSided&&l.enable(11),k.flipSided&&l.enable(12),k.useDepthPacking&&l.enable(13),k.dithering&&l.enable(14),k.transmission&&l.enable(15),k.sheen&&l.enable(16),k.opaque&&l.enable(17),k.pointsUvs&&l.enable(18),k.decodeVideoTexture&&l.enable(19),k.decodeVideoTextureEmissive&&l.enable(20),k.alphaToCoverage&&l.enable(21),k.numLightProbeGrids>0&&l.enable(22),k.hasPositionAttribute&&l.enable(23),C.push(l.mask)}function z(C){let k=S[C.type],H;if(k){let Y=Ti[k];H=Fd.clone(Y.uniforms)}else H=C.uniforms;return H}function A(C,k){let H=g.get(k);return H!==void 0?++H.usedTimes:(H=new yM(n,k,C,r),d.push(H),g.set(k,H)),H}function L(C){if(--C.usedTimes===0){let k=d.indexOf(C);d[k]=d[d.length-1],d.pop(),g.delete(C.cacheKey),C.destroy()}}function D(C){h.remove(C)}function V(){h.dispose()}return{getParameters:E,getProgramCacheKey:b,getUniforms:z,acquireProgram:A,releaseProgram:L,releaseShaderCache:D,programs:d,dispose:V}}function SM(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let h=n.get(l);return h===void 0&&(h={},n.set(l,h)),h}function i(l){n.delete(l)}function r(l,h,u){n.get(l)[h]=u}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:o}}function wM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function np(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ip(){let n=[],t=0,e=[],i=[],r=[];function o(){t=0,e.length=0,i.length=0,r.length=0}function l(_){let S=0;return _.isInstancedMesh&&(S+=2),_.isSkinnedMesh&&(S+=1),S}function h(_,S,w,E,b,y){let R=n[t];return R===void 0?(R={id:_.id,object:_,geometry:S,material:w,materialVariant:l(_),groupOrder:E,renderOrder:_.renderOrder,z:b,group:y},n[t]=R):(R.id=_.id,R.object=_,R.geometry=S,R.material=w,R.materialVariant=l(_),R.groupOrder=E,R.renderOrder=_.renderOrder,R.z=b,R.group=y),t++,R}function u(_,S,w,E,b,y,R){R.reversedDepth===!0&&(b=-b);let z=h(_,S,w,E,b,y);w.transmission>0?i.push(z):w.transparent===!0?r.push(z):e.push(z)}function d(_,S,w,E,b,y){let R=h(_,S,w,E,b,y);w.transmission>0?i.unshift(R):w.transparent===!0?r.unshift(R):e.unshift(R)}function g(_,S){e.length>1&&e.sort(_||wM),i.length>1&&i.sort(S||np),r.length>1&&r.sort(S||np)}function v(){for(let _=t,S=n.length;_<S;_++){let w=n[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:i,transparent:r,init:o,push:u,unshift:d,finish:v,sort:g}}function EM(){let n=new WeakMap;function t(i,r){let o=n.get(i),l;return o===void 0?(l=new ip,n.set(i,[l])):r>=o.length?(l=new ip,o.push(l)):l=o[r],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function TM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ht,color:new Me};break;case"SpotLight":e={position:new ht,direction:new ht,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ht,color:new Me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ht,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":e={color:new Me,position:new ht,halfWidth:new ht,halfHeight:new ht};break}return n[t.id]=e,e}}}function AM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function PM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function IM(n){let t=new TM,e=AM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ht);let r=new ht,o=new Xe,l=new Xe;function h(d){let g=0,v=0,_=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let S=0,w=0,E=0,b=0,y=0,R=0,z=0,A=0,L=0,D=0,V=0,C=0,k=0,H=0;d.sort(PM);for(let J=0,q=d.length;J<q;J++){let Z=d[J],K=Z.color,lt=Z.intensity,dt=Z.distance,Tt=null;if(Z.shadow&&Z.shadow.map&&(Z.shadow.map.texture.format===_r?Tt=Z.shadow.map.texture:Tt=Z.shadow.map.depthTexture||Z.shadow.map.texture),Z.isAmbientLight)g+=K.r*lt,v+=K.g*lt,_+=K.b*lt;else if(Z.isLightProbe){for(let xt=0;xt<9;xt++)i.probe[xt].addScaledVector(Z.sh.coefficients[xt],lt);H++}else if(Z.isSunLight){let xt=t.get(Z);if(xt.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let Ct=Z.shadow,Nt=e.get(Z);Nt.shadowIntensity=Ct.intensity,Nt.shadowBias=Ct.bias,Nt.shadowNormalBias=Ct.normalBias,Nt.shadowRadius=Ct.radius,Nt.shadowMapSize.copy(Ct.mapSize).multiply(Ct.getFrameExtents()),i.sunShadow[w]=Nt,i.sunShadowMap[w]=Tt;let ct=Ct.getViewportCount();for(let It=0;It<ct;It++)i.sunShadowMatrix[E+It]=Ct.getMatrix(It),i.sunShadowCascade[E+It]=Ct._cascadeData[It];E+=ct,w++}i.sun[S]=xt,S++}else if(Z.isDirectionalLight){let xt=t.get(Z);if(xt.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let Ct=Z.shadow,Nt=e.get(Z);Nt.shadowIntensity=Ct.intensity,Nt.shadowBias=Ct.bias,Nt.shadowNormalBias=Ct.normalBias,Nt.shadowRadius=Ct.radius,Nt.shadowMapSize=Ct.mapSize,i.directionalShadow[b]=Nt,i.directionalShadowMap[b]=Tt,i.directionalShadowMatrix[b]=Z.shadow.matrix,L++}i.directional[b]=xt,b++}else if(Z.isSpotLight){let xt=t.get(Z);xt.position.setFromMatrixPosition(Z.matrixWorld),xt.color.copy(K).multiplyScalar(lt),xt.distance=dt,xt.coneCos=Math.cos(Z.angle),xt.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),xt.decay=Z.decay,i.spot[R]=xt;let Ct=Z.shadow;if(Z.map&&(i.spotLightMap[C]=Z.map,C++,Ct.updateMatrices(Z),Z.castShadow&&k++),i.spotLightMatrix[R]=Ct.matrix,Z.castShadow){let Nt=e.get(Z);Nt.shadowIntensity=Ct.intensity,Nt.shadowBias=Ct.bias,Nt.shadowNormalBias=Ct.normalBias,Nt.shadowRadius=Ct.radius,Nt.shadowMapSize=Ct.mapSize,i.spotShadow[R]=Nt,i.spotShadowMap[R]=Tt,V++}R++}else if(Z.isRectAreaLight){let xt=t.get(Z);xt.color.copy(K).multiplyScalar(lt),xt.halfWidth.set(Z.width*.5,0,0),xt.halfHeight.set(0,Z.height*.5,0),i.rectArea[z]=xt,z++}else if(Z.isPointLight){let xt=t.get(Z);if(xt.color.copy(Z.color).multiplyScalar(Z.intensity),xt.distance=Z.distance,xt.decay=Z.decay,Z.castShadow){let Ct=Z.shadow,Nt=e.get(Z);Nt.shadowIntensity=Ct.intensity,Nt.shadowBias=Ct.bias,Nt.shadowNormalBias=Ct.normalBias,Nt.shadowRadius=Ct.radius,Nt.shadowMapSize=Ct.mapSize,Nt.shadowCameraNear=Ct.camera.near,Nt.shadowCameraFar=Ct.camera.far,i.pointShadow[y]=Nt,i.pointShadowMap[y]=Tt,i.pointShadowMatrix[y]=Z.shadow.matrix,D++}i.point[y]=xt,y++}else if(Z.isHemisphereLight){let xt=t.get(Z);xt.skyColor.copy(Z.color).multiplyScalar(lt),xt.groundColor.copy(Z.groundColor).multiplyScalar(lt),i.hemi[A]=xt,A++}}z>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Jt.LTC_FLOAT_1,i.rectAreaLTC2=Jt.LTC_FLOAT_2):(i.rectAreaLTC1=Jt.LTC_HALF_1,i.rectAreaLTC2=Jt.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=_;let Y=i.hash;(Y.sunLength!==S||Y.directionalLength!==b||Y.pointLength!==y||Y.spotLength!==R||Y.rectAreaLength!==z||Y.hemiLength!==A||Y.numSunShadows!==w||Y.numDirectionalShadows!==L||Y.numPointShadows!==D||Y.numSpotShadows!==V||Y.numSpotMaps!==C||Y.numLightProbes!==H)&&(i.sun.length=S,i.directional.length=b,i.spot.length=R,i.rectArea.length=z,i.point.length=y,i.hemi.length=A,i.sunShadow.length=w,i.sunShadowMap.length=w,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.directionalShadowMatrix.length=L,i.pointShadow.length=D,i.pointShadowMap.length=D,i.pointShadowMatrix.length=D,i.spotShadow.length=V,i.spotShadowMap.length=V,i.spotLightMatrix.length=V+C-k,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=H,Y.sunLength=S,Y.directionalLength=b,Y.pointLength=y,Y.spotLength=R,Y.rectAreaLength=z,Y.hemiLength=A,Y.numSunShadows=w,Y.numDirectionalShadows=L,Y.numPointShadows=D,Y.numSpotShadows=V,Y.numSpotMaps=C,Y.numLightProbes=H,i.version=CM++)}function u(d,g){let v=0,_=0,S=0,w=0,E=0,b=0,y=g.matrixWorldInverse;for(let R=0,z=d.length;R<z;R++){let A=d[R];if(A.isSunLight){let L=i.sun[v];L.direction.setFromMatrixPosition(A.matrixWorld),L.direction.transformDirection(y),v++}else if(A.isDirectionalLight){let L=i.directional[_];L.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(y),_++}else if(A.isSpotLight){let L=i.spot[w];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(y),w++}else if(A.isRectAreaLight){let L=i.rectArea[E];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(y),l.identity(),o.copy(A.matrixWorld),o.premultiply(y),l.extractRotation(o),L.halfWidth.set(A.width*.5,0,0),L.halfHeight.set(0,A.height*.5,0),L.halfWidth.applyMatrix4(l),L.halfHeight.applyMatrix4(l),E++}else if(A.isPointLight){let L=i.point[S];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(y),S++}else if(A.isHemisphereLight){let L=i.hemi[b];L.direction.setFromMatrixPosition(A.matrixWorld),L.direction.transformDirection(y),b++}}}return{setup:h,setupView:u,state:i}}function rp(n){let t=new IM(n),e=[],i=[],r=[];function o(_){v.camera=_,e.length=0,i.length=0,r.length=0}function l(_){e.push(_)}function h(_){i.push(_)}function u(_){r.push(_)}function d(){t.setup(e)}function g(_){t.setupView(e,_)}let v={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:d,setupLightsView:g,pushLight:l,pushShadow:h,pushLightProbeGrid:u}}function RM(n){let t=new WeakMap;function e(r,o=0){let l=t.get(r),h;return l===void 0?(h=new rp(n),t.set(r,[h])):o>=l.length?(h=new rp(n),l.push(h)):h=l[o],h}function i(){t=new WeakMap}return{get:e,dispose:i}}function FM(n,t,e){let i=new Ss,r=new ce,o=new ce,l=new Ke,h=new nl,u=new il,d={},g=e.maxTextureSize,v={[dr]:In,[In]:dr,[wn]:wn},_=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:LM,fragmentShader:NM}),S=_.clone();S.defines.HORIZONTAL_PASS=1;let w=new Je;w.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Be(w,_),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let y=this.type;this.render=function(D,V,C){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||D.length===0)return;this.type===Qf&&(de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Io);let k=n.getRenderTarget(),H=n.getActiveCubeFace(),Y=n.getActiveMipmapLevel(),J=n.state;J.setBlending(wi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let q=y!==this.type;q&&V.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(K=>K.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,K=D.length;Z<K;Z++){let lt=D[Z],dt=lt.shadow;if(dt===void 0){de("WebGLShadowMap:",lt,"has no shadow.");continue}if(dt.autoUpdate===!1&&dt.needsUpdate===!1)continue;r.copy(dt.mapSize);let Tt=dt.getFrameExtents();r.multiply(Tt),o.copy(dt.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(o.x=Math.floor(g/Tt.x),r.x=o.x*Tt.x,dt.mapSize.x=o.x),r.y>g&&(o.y=Math.floor(g/Tt.y),r.y=o.y*Tt.y,dt.mapSize.y=o.y));let xt=n.state.buffers.depth.getReversed();if(dt.camera._reversedDepth=xt,dt.map===null||q===!0){if(dt.map!==null&&(dt.map.depthTexture!==null&&(dt.map.depthTexture.dispose(),dt.map.depthTexture=null),dt.map.dispose()),this.type===Ps){if(lt.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}dt.map=new Nn(r.x,r.y,{format:_r,type:di,minFilter:_n,magFilter:_n,generateMipmaps:!1}),dt.map.texture.name=lt.name+".shadowMap",dt.map.depthTexture=new sr(r.x,r.y,fi),dt.map.depthTexture.name=lt.name+".shadowMapDepth",dt.map.depthTexture.format=Mi,dt.map.depthTexture.compareFunction=null,dt.map.depthTexture.minFilter=dn,dt.map.depthTexture.magFilter=dn}else lt.isPointLight?(dt.map=new lc(r.x),dt.map.depthTexture=new tl(r.x,ui)):(dt.map=new Nn(r.x,r.y),dt.map.depthTexture=new sr(r.x,r.y,ui)),dt.map.depthTexture.name=lt.name+".shadowMap",dt.map.depthTexture.format=Mi,this.type===Io?(dt.map.depthTexture.compareFunction=xt?rc:ic,dt.map.depthTexture.minFilter=_n,dt.map.depthTexture.magFilter=_n):(dt.map.depthTexture.compareFunction=null,dt.map.depthTexture.minFilter=dn,dt.map.depthTexture.magFilter=dn);dt.camera.updateProjectionMatrix()}dt.map.isWebGLCubeRenderTarget!==!0&&(dt.map.width!==r.x||dt.map.height!==r.y)&&dt.map.setSize(r.x,r.y);let Ct=dt.map.isWebGLCubeRenderTarget?6:dt.getViewportCount();lt.isPointLight!==!0&&dt.updateMatrices(lt,C);for(let Nt=0;Nt<Ct;Nt++){let ct=dt.getCamera(Nt);if(lt.isPointLight){let It=dt.camera,Xt=dt.matrix,Gt=lt.distance||It.far;Gt!==It.far&&(It.far=Gt,It.updateProjectionMatrix()),zo.setFromMatrixPosition(lt.matrixWorld),It.position.copy(zo),ou.copy(It.position),ou.add(DM[Nt]),It.up.copy(OM[Nt]),It.lookAt(ou),It.updateMatrixWorld(),Xt.makeTranslation(-zo.x,-zo.y,-zo.z),sp.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),dt._frustum.setFromProjectionMatrix(sp,It.coordinateSystem,It.reversedDepth)}if(dt.map.isWebGLCubeRenderTarget)n.setRenderTarget(dt.map,Nt),n.clear();else{Nt===0&&(n.setRenderTarget(dt.map),n.clear());let It=dt.getViewport(Nt);l.set(o.x*It.x,o.y*It.y,o.x*It.z,o.y*It.w),J.viewport(l)}i=dt.getFrustum(Nt),A(V,C,ct,lt,this.type)}dt.isPointLightShadow!==!0&&this.type===Ps&&R(dt,C),dt.needsUpdate=!1}y=this.type,b.needsUpdate=!1,n.setRenderTarget(k,H,Y)};function R(D,V){let C=t.update(E);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null?D.mapPass=new Nn(r.x,r.y,{format:_r,type:di}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(V,null,C,_,E,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value.set(D.map.width,D.map.height),S.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(V,null,C,S,E,null)}function z(D,V,C,k){let H=null,Y=C.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(Y!==void 0)H=Y;else if(H=C.isPointLight===!0?u:h,n.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){let J=H.uuid,q=V.uuid,Z=d[J];Z===void 0&&(Z={},d[J]=Z);let K=Z[q];K===void 0&&(K=H.clone(),Z[q]=K,V.addEventListener("dispose",L)),H=K}if(H.visible=V.visible,H.wireframe=V.wireframe,k===Ps?H.side=V.shadowSide!==null?V.shadowSide:V.side:H.side=V.shadowSide!==null?V.shadowSide:v[V.side],H.alphaMap=V.alphaMap,H.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,H.map=V.map,H.clipShadows=V.clipShadows,H.clippingPlanes=V.clippingPlanes,H.clipIntersection=V.clipIntersection,H.displacementMap=V.displacementMap,H.displacementScale=V.displacementScale,H.displacementBias=V.displacementBias,H.wireframeLinewidth=V.wireframeLinewidth,H.linewidth=V.linewidth,C.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let J=n.properties.get(H);J.light=C}return H}function A(D,V,C,k,H){if(D.visible===!1)return;if(D.layers.test(V.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&H===Ps)&&(!D.frustumCulled||D.intersectsFrustum(i))){D.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,D.matrixWorld);let q=t.update(D),Z=D.material;if(Array.isArray(Z)){let K=q.groups;for(let lt=0,dt=K.length;lt<dt;lt++){let Tt=K[lt],xt=Z[Tt.materialIndex];if(xt&&xt.visible){let Ct=z(D,xt,k,H);D.onBeforeShadow(n,D,V,C,q,Ct,Tt),n.renderBufferDirect(C,null,q,Ct,D,Tt),D.onAfterShadow(n,D,V,C,q,Ct,Tt)}}}else if(Z.visible){let K=z(D,Z,k,H);D.onBeforeShadow(n,D,V,C,q,K,null),n.renderBufferDirect(C,null,q,K,D,null),D.onAfterShadow(n,D,V,C,q,K,null)}}let J=D.children;for(let q=0,Z=J.length;q<Z;q++)A(J[q],V,C,k,H)}function L(D){D.target.removeEventListener("dispose",L);for(let C in d){let k=d[C],H=D.target.uuid;H in k&&(k[H].dispose(),delete k[H])}}}function UM(n,t){function e(){let $=!1,St=new Ke,pt=null,ut=new Ke(0,0,0,0);return{setMask:function(Ut){pt!==Ut&&!$&&(n.colorMask(Ut,Ut,Ut,Ut),pt=Ut)},setLocked:function(Ut){$=Ut},setClear:function(Ut,wt,Ft,te,Pe){Pe===!0&&(Ut*=te,wt*=te,Ft*=te),St.set(Ut,wt,Ft,te),ut.equals(St)===!1&&(n.clearColor(Ut,wt,Ft,te),ut.copy(St))},reset:function(){$=!1,pt=null,ut.set(-1,0,0,0)}}}function i(){let $=!1,St=!1,pt=null,ut=null,Ut=null;return{setReversed:function(wt){if(St!==wt){let Ft=t.get("EXT_clip_control");wt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),St=wt;let te=Ut;Ut=null,this.setClear(te)}},getReversed:function(){return St},setTest:function(wt){wt?Et(n.DEPTH_TEST):Ot(n.DEPTH_TEST)},setMask:function(wt){pt!==wt&&!$&&(n.depthMask(wt),pt=wt)},setFunc:function(wt){if(St&&(wt=Nd[wt]),ut!==wt){switch(wt){case Ua:n.depthFunc(n.NEVER);break;case Ba:n.depthFunc(n.ALWAYS);break;case ka:n.depthFunc(n.LESS);break;case ms:n.depthFunc(n.LEQUAL);break;case za:n.depthFunc(n.EQUAL);break;case Va:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=wt}},setLocked:function(wt){$=wt},setClear:function(wt){Ut!==wt&&(Ut=wt,St&&(wt=1-wt),n.clearDepth(wt))},reset:function(){$=!1,pt=null,ut=null,Ut=null,St=!1}}}function r(){let $=!1,St=null,pt=null,ut=null,Ut=null,wt=null,Ft=null,te=null,Pe=null;return{setTest:function(De){$||(De?Et(n.STENCIL_TEST):Ot(n.STENCIL_TEST))},setMask:function(De){St!==De&&!$&&(n.stencilMask(De),St=De)},setFunc:function(De,Tn,Rn){(pt!==De||ut!==Tn||Ut!==Rn)&&(n.stencilFunc(De,Tn,Rn),pt=De,ut=Tn,Ut=Rn)},setOp:function(De,Tn,Rn){(wt!==De||Ft!==Tn||te!==Rn)&&(n.stencilOp(De,Tn,Rn),wt=De,Ft=Tn,te=Rn)},setLocked:function(De){$=De},setClear:function(De){Pe!==De&&(n.clearStencil(De),Pe=De)},reset:function(){$=!1,St=null,pt=null,ut=null,Ut=null,wt=null,Ft=null,te=null,Pe=null}}}let o=new e,l=new i,h=new r,u=new WeakMap,d=new WeakMap,g={},v={},_={},S=new WeakMap,w=[],E=null,b=!1,y=null,R=null,z=null,A=null,L=null,D=null,V=null,C=new Me(0,0,0),k=0,H=!1,Y=null,J=null,q=null,Z=null,K=null,lt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),dt=!1,Tt=0,xt=n.getParameter(n.VERSION);xt.indexOf("WebGL")!==-1?(Tt=parseFloat(/^WebGL (\d)/.exec(xt)[1]),dt=Tt>=1):xt.indexOf("OpenGL ES")!==-1&&(Tt=parseFloat(/^OpenGL ES (\d)/.exec(xt)[1]),dt=Tt>=2);let Ct=null,Nt={},ct=n.getParameter(n.SCISSOR_BOX),It=n.getParameter(n.VIEWPORT),Xt=new Ke().fromArray(ct),Gt=new Ke().fromArray(It);function Vt($,St,pt,ut){let Ut=new Uint8Array(4),wt=n.createTexture();n.bindTexture($,wt),n.texParameteri($,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri($,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<pt;Ft++)$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,ut,0,n.RGBA,n.UNSIGNED_BYTE,Ut):n.texImage2D(St+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ut);return wt}let _t={};_t[n.TEXTURE_2D]=Vt(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=Vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=Vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=Vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Et(n.DEPTH_TEST),l.setFunc(ms),fe(!1),Te(wh),Et(n.CULL_FACE),pe(wi);function Et($){g[$]!==!0&&(n.enable($),g[$]=!0)}function Ot($){g[$]!==!1&&(n.disable($),g[$]=!1)}function Qt($,St){return _[$]!==St?(n.bindFramebuffer($,St),_[$]=St,$===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=St),$===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=St),!0):!1}function et($,St){let pt=w,ut=!1;if($){pt=S.get(St),pt===void 0&&(pt=[],S.set(St,pt));let Ut=$.textures;if(pt.length!==Ut.length||pt[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Ft=Ut.length;wt<Ft;wt++)pt[wt]=n.COLOR_ATTACHMENT0+wt;pt.length=Ut.length,ut=!0}}else pt[0]!==n.BACK&&(pt[0]=n.BACK,ut=!0);ut&&n.drawBuffers(pt)}function oe($){return E!==$?(n.useProgram($),E=$,!0):!1}let Ue={[Ir]:n.FUNC_ADD,[ed]:n.FUNC_SUBTRACT,[nd]:n.FUNC_REVERSE_SUBTRACT};Ue[id]=n.MIN,Ue[rd]=n.MAX;let ue={[sd]:n.ZERO,[od]:n.ONE,[ad]:n.SRC_COLOR,[Ch]:n.SRC_ALPHA,[dd]:n.SRC_ALPHA_SATURATE,[ud]:n.DST_COLOR,[cd]:n.DST_ALPHA,[ld]:n.ONE_MINUS_SRC_COLOR,[Ph]:n.ONE_MINUS_SRC_ALPHA,[fd]:n.ONE_MINUS_DST_COLOR,[hd]:n.ONE_MINUS_DST_ALPHA,[pd]:n.CONSTANT_COLOR,[md]:n.ONE_MINUS_CONSTANT_COLOR,[gd]:n.CONSTANT_ALPHA,[_d]:n.ONE_MINUS_CONSTANT_ALPHA};function pe($,St,pt,ut,Ut,wt,Ft,te,Pe,De){if($===wi){b===!0&&(Ot(n.BLEND),b=!1);return}if(b===!1&&(Et(n.BLEND),b=!0),$!==td){if($!==y||De!==H){if((R!==Ir||L!==Ir)&&(n.blendEquation(n.FUNC_ADD),R=Ir,L=Ir),De)switch($){case Is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eh:n.blendFunc(n.ONE,n.ONE);break;case Th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ah:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_e("WebGLState: Invalid blending: ",$);break}else switch($){case Is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Th:_e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ah:_e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_e("WebGLState: Invalid blending: ",$);break}z=null,A=null,D=null,V=null,C.set(0,0,0),k=0,y=$,H=De}return}Ut=Ut||St,wt=wt||pt,Ft=Ft||ut,(St!==R||Ut!==L)&&(n.blendEquationSeparate(Ue[St],Ue[Ut]),R=St,L=Ut),(pt!==z||ut!==A||wt!==D||Ft!==V)&&(n.blendFuncSeparate(ue[pt],ue[ut],ue[wt],ue[Ft]),z=pt,A=ut,D=wt,V=Ft),(te.equals(C)===!1||Pe!==k)&&(n.blendColor(te.r,te.g,te.b,Pe),C.copy(te),k=Pe),y=$,H=!1}function me($,St){$.side===wn?Ot(n.CULL_FACE):Et(n.CULL_FACE);let pt=$.side===In;St&&(pt=!pt),fe(pt),$.blending===Is&&$.transparent===!1?pe(wi):pe($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),l.setFunc($.depthFunc),l.setTest($.depthTest),l.setMask($.depthWrite),o.setMask($.colorWrite);let ut=$.stencilWrite;h.setTest(ut),ut&&(h.setMask($.stencilWriteMask),h.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),h.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Ce($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Et(n.SAMPLE_ALPHA_TO_COVERAGE):Ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe($){Y!==$&&($?n.frontFace(n.CW):n.frontFace(n.CCW),Y=$)}function Te($){$!==Jf?(Et(n.CULL_FACE),$!==J&&($===wh?n.cullFace(n.BACK):$===Kf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ot(n.CULL_FACE),J=$}function ne($){$!==q&&(dt&&n.lineWidth($),q=$)}function Ce($,St,pt){$?(Et(n.POLYGON_OFFSET_FILL),(Z!==St||K!==pt)&&(Z=St,K=pt,l.getReversed()&&(St=-St),n.polygonOffset(St,pt))):Ot(n.POLYGON_OFFSET_FILL)}function ve($){$?Et(n.SCISSOR_TEST):Ot(n.SCISSOR_TEST)}function Ae($){$===void 0&&($=n.TEXTURE0+lt-1),Ct!==$&&(n.activeTexture($),Ct=$)}function at($,St,pt){pt===void 0&&(Ct===null?pt=n.TEXTURE0+lt-1:pt=Ct);let ut=Nt[pt];ut===void 0&&(ut={type:void 0,texture:void 0},Nt[pt]=ut),(ut.type!==$||ut.texture!==St)&&(Ct!==pt&&(n.activeTexture(pt),Ct=pt),n.bindTexture($,St||_t[$]),ut.type=$,ut.texture=St)}function ze(){let $=Nt[Ct];$!==void 0&&$.type!==void 0&&(n.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Se(){try{n.compressedTexImage2D(...arguments)}catch($){_e("WebGLState:",$)}}function X(){try{n.compressedTexImage3D(...arguments)}catch($){_e("WebGLState:",$)}}function P(){try{n.texSubImage2D(...arguments)}catch($){_e("WebGLState:",$)}}function it(){try{n.texSubImage3D(...arguments)}catch($){_e("WebGLState:",$)}}function mt(){try{n.compressedTexSubImage2D(...arguments)}catch($){_e("WebGLState:",$)}}function Pt(){try{n.compressedTexSubImage3D(...arguments)}catch($){_e("WebGLState:",$)}}function kt(){try{n.texStorage2D(...arguments)}catch($){_e("WebGLState:",$)}}function Wt(){try{n.texStorage3D(...arguments)}catch($){_e("WebGLState:",$)}}function Mt(){try{n.texImage2D(...arguments)}catch($){_e("WebGLState:",$)}}function Dt(){try{n.texImage3D(...arguments)}catch($){_e("WebGLState:",$)}}function Yt($){return v[$]!==void 0?v[$]:n.getParameter($)}function Kt($,St){v[$]!==St&&(n.pixelStorei($,St),v[$]=St)}function B($){Xt.equals($)===!1&&(n.scissor($.x,$.y,$.z,$.w),Xt.copy($))}function W($){Gt.equals($)===!1&&(n.viewport($.x,$.y,$.z,$.w),Gt.copy($))}function j($,St){let pt=d.get(St);pt===void 0&&(pt=new WeakMap,d.set(St,pt));let ut=pt.get($);ut===void 0&&(ut=n.getUniformBlockIndex(St,$.name),pt.set($,ut))}function st($,St){let ut=d.get(St).get($);u.get(St)!==ut&&(n.uniformBlockBinding(St,ut,$.__bindingPointIndex),u.set(St,ut))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},v={},Ct=null,Nt={},_={},S=new WeakMap,w=[],E=null,b=!1,y=null,R=null,z=null,A=null,L=null,D=null,V=null,C=new Me(0,0,0),k=0,H=!1,Y=null,J=null,q=null,Z=null,K=null,Xt.set(0,0,n.canvas.width,n.canvas.height),Gt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:Et,disable:Ot,bindFramebuffer:Qt,drawBuffers:et,useProgram:oe,setBlending:pe,setMaterial:me,setFlipSided:fe,setCullFace:Te,setLineWidth:ne,setPolygonOffset:Ce,setScissorTest:ve,activeTexture:Ae,bindTexture:at,unbindTexture:ze,compressedTexImage2D:Se,compressedTexImage3D:X,texImage2D:Mt,texImage3D:Dt,pixelStorei:Kt,getParameter:Yt,updateUBOMapping:j,uniformBlockBinding:st,texStorage2D:kt,texStorage3D:Wt,texSubImage2D:P,texSubImage3D:it,compressedTexSubImage2D:mt,compressedTexSubImage3D:Pt,scissor:B,viewport:W,reset:yt}}function BM(n,t,e,i,r,o,l){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ce,g=new WeakMap,v=new Set,_,S=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(X,P){return w?new OffscreenCanvas(X,P):lo("canvas")}function b(X,P,it){let mt=1,Pt=Se(X);if((Pt.width>it||Pt.height>it)&&(mt=it/Math.max(Pt.width,Pt.height)),mt<1)if(typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap||typeof VideoFrame<"u"&&X instanceof VideoFrame){let kt=Math.floor(mt*Pt.width),Wt=Math.floor(mt*Pt.height);_===void 0&&(_=E(kt,Wt));let Mt=P?E(kt,Wt):_;return Mt.width=kt,Mt.height=Wt,Mt.getContext("2d").drawImage(X,0,0,kt,Wt),de("WebGLRenderer: Texture has been resized from ("+Pt.width+"x"+Pt.height+") to ("+kt+"x"+Wt+")."),Mt}else return"data"in X&&de("WebGLRenderer: Image in DataTexture is too big ("+Pt.width+"x"+Pt.height+")."),X;return X}function y(X){return X.generateMipmaps}function R(X){n.generateMipmap(X)}function z(X){return X.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:X.isWebGL3DRenderTarget?n.TEXTURE_3D:X.isWebGLArrayRenderTarget||X.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(X,P,it,mt,Pt,kt=!1){if(X!==null){if(n[X]!==void 0)return n[X];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+X+"'")}let Wt;mt&&(Wt=t.get("EXT_texture_norm16"),Wt||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Mt=P;if(P===n.RED&&(it===n.FLOAT&&(Mt=n.R32F),it===n.HALF_FLOAT&&(Mt=n.R16F),it===n.UNSIGNED_BYTE&&(Mt=n.R8),it===n.UNSIGNED_SHORT&&Wt&&(Mt=Wt.R16_EXT),it===n.SHORT&&Wt&&(Mt=Wt.R16_SNORM_EXT)),P===n.RED_INTEGER&&(it===n.UNSIGNED_BYTE&&(Mt=n.R8UI),it===n.UNSIGNED_SHORT&&(Mt=n.R16UI),it===n.UNSIGNED_INT&&(Mt=n.R32UI),it===n.BYTE&&(Mt=n.R8I),it===n.SHORT&&(Mt=n.R16I),it===n.INT&&(Mt=n.R32I)),P===n.RG&&(it===n.FLOAT&&(Mt=n.RG32F),it===n.HALF_FLOAT&&(Mt=n.RG16F),it===n.UNSIGNED_BYTE&&(Mt=n.RG8),it===n.UNSIGNED_SHORT&&Wt&&(Mt=Wt.RG16_EXT),it===n.SHORT&&Wt&&(Mt=Wt.RG16_SNORM_EXT)),P===n.RG_INTEGER&&(it===n.UNSIGNED_BYTE&&(Mt=n.RG8UI),it===n.UNSIGNED_SHORT&&(Mt=n.RG16UI),it===n.UNSIGNED_INT&&(Mt=n.RG32UI),it===n.BYTE&&(Mt=n.RG8I),it===n.SHORT&&(Mt=n.RG16I),it===n.INT&&(Mt=n.RG32I)),P===n.RGB_INTEGER&&(it===n.UNSIGNED_BYTE&&(Mt=n.RGB8UI),it===n.UNSIGNED_SHORT&&(Mt=n.RGB16UI),it===n.UNSIGNED_INT&&(Mt=n.RGB32UI),it===n.BYTE&&(Mt=n.RGB8I),it===n.SHORT&&(Mt=n.RGB16I),it===n.INT&&(Mt=n.RGB32I)),P===n.RGBA_INTEGER&&(it===n.UNSIGNED_BYTE&&(Mt=n.RGBA8UI),it===n.UNSIGNED_SHORT&&(Mt=n.RGBA16UI),it===n.UNSIGNED_INT&&(Mt=n.RGBA32UI),it===n.BYTE&&(Mt=n.RGBA8I),it===n.SHORT&&(Mt=n.RGBA16I),it===n.INT&&(Mt=n.RGBA32I)),P===n.RGB&&(it===n.UNSIGNED_SHORT&&Wt&&(Mt=Wt.RGB16_EXT),it===n.SHORT&&Wt&&(Mt=Wt.RGB16_SNORM_EXT),it===n.UNSIGNED_INT_5_9_9_9_REV&&(Mt=n.RGB9_E5),it===n.UNSIGNED_INT_10F_11F_11F_REV&&(Mt=n.R11F_G11F_B10F)),P===n.RGBA){let Dt=kt?ao:Le.getTransfer(Pt);it===n.FLOAT&&(Mt=n.RGBA32F),it===n.HALF_FLOAT&&(Mt=n.RGBA16F),it===n.UNSIGNED_BYTE&&(Mt=Dt===Ve?n.SRGB8_ALPHA8:n.RGBA8),it===n.UNSIGNED_SHORT&&Wt&&(Mt=Wt.RGBA16_EXT),it===n.SHORT&&Wt&&(Mt=Wt.RGBA16_SNORM_EXT),it===n.UNSIGNED_SHORT_4_4_4_4&&(Mt=n.RGBA4),it===n.UNSIGNED_SHORT_5_5_5_1&&(Mt=n.RGB5_A1)}return(Mt===n.R16F||Mt===n.R32F||Mt===n.RG16F||Mt===n.RG32F||Mt===n.RGBA16F||Mt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Mt}function L(X,P){let it;return X?P===null||P===ui||P===Ls?it=n.DEPTH24_STENCIL8:P===fi?it=n.DEPTH32F_STENCIL8:P===Rs&&(it=n.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ui||P===Ls?it=n.DEPTH_COMPONENT24:P===fi?it=n.DEPTH_COMPONENT32F:P===Rs&&(it=n.DEPTH_COMPONENT16),it}function D(X,P){return y(X)===!0||X.isFramebufferTexture&&X.minFilter!==dn&&X.minFilter!==_n?Math.log2(Math.max(P.width,P.height))+1:X.mipmaps!==void 0&&X.mipmaps.length>0?X.mipmaps.length:X.isCompressedTexture&&Array.isArray(X.image)?P.mipmaps.length:1}function V(X){let P=X.target;P.removeEventListener("dispose",V),k(P),P.isVideoTexture&&g.delete(P),P.isHTMLTexture&&v.delete(P)}function C(X){let P=X.target;P.removeEventListener("dispose",C),Y(P)}function k(X){let P=i.get(X);if(P.__webglInit===void 0)return;let it=X.source,mt=S.get(it);if(mt){let Pt=mt[P.__cacheKey];Pt.usedTimes--,Pt.usedTimes===0&&H(X),Object.keys(mt).length===0&&S.delete(it)}i.remove(X)}function H(X){let P=i.get(X);n.deleteTexture(P.__webglTexture);let it=X.source,mt=S.get(it);delete mt[P.__cacheKey],l.memory.textures--}function Y(X){let P=i.get(X);if(X.depthTexture&&(X.depthTexture.dispose(),i.remove(X.depthTexture)),X.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(P.__webglFramebuffer[mt]))for(let Pt=0;Pt<P.__webglFramebuffer[mt].length;Pt++)n.deleteFramebuffer(P.__webglFramebuffer[mt][Pt]);else n.deleteFramebuffer(P.__webglFramebuffer[mt]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[mt])}else{if(Array.isArray(P.__webglFramebuffer))for(let mt=0;mt<P.__webglFramebuffer.length;mt++)n.deleteFramebuffer(P.__webglFramebuffer[mt]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let mt=0;mt<P.__webglColorRenderbuffer.length;mt++)P.__webglColorRenderbuffer[mt]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[mt]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let it=X.textures;for(let mt=0,Pt=it.length;mt<Pt;mt++){let kt=i.get(it[mt]);kt.__webglTexture&&(n.deleteTexture(kt.__webglTexture),l.memory.textures--),i.remove(it[mt])}i.remove(X)}let J=0;function q(){J=0}function Z(){return J}function K(X){J=X}function lt(){let X=J;return X>=r.maxTextures&&de("WebGLTextures: Trying to use "+(X+1)+" texture units while this GPU supports only "+r.maxTextures),J+=1,X}function dt(X){let P=[];return P.push(X.wrapS),P.push(X.wrapT),P.push(X.wrapR||0),P.push(X.magFilter),P.push(X.minFilter),P.push(X.anisotropy),P.push(X.internalFormat),P.push(X.format),P.push(X.type),P.push(X.generateMipmaps),P.push(X.premultiplyAlpha),P.push(X.flipY),P.push(X.unpackAlignment),P.push(X.colorSpace),P.join()}function Tt(X,P){let it=i.get(X);if(X.isVideoTexture&&at(X),X.isRenderTargetTexture===!1&&X.isExternalTexture!==!0&&X.version>0&&it.__version!==X.version){let mt=X.image;if(mt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(it,X,P);return}}else X.isExternalTexture&&(it.__webglTexture=X.sourceTexture?X.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,it.__webglTexture,n.TEXTURE0+P)}function xt(X,P){let it=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&it.__version!==X.version){Ot(it,X,P);return}else X.isExternalTexture&&(it.__webglTexture=X.sourceTexture?X.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,it.__webglTexture,n.TEXTURE0+P)}function Ct(X,P){let it=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&it.__version!==X.version){Ot(it,X,P);return}e.bindTexture(n.TEXTURE_3D,it.__webglTexture,n.TEXTURE0+P)}function Nt(X,P){let it=i.get(X);if(X.isCubeDepthTexture!==!0&&X.version>0&&it.__version!==X.version){Qt(it,X,P);return}e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture,n.TEXTURE0+P)}let ct={[Xa]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[Wa]:n.MIRRORED_REPEAT},It={[dn]:n.NEAREST,[xd]:n.NEAREST_MIPMAP_NEAREST,[Lo]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[yl]:n.LINEAR_MIPMAP_NEAREST,[mr]:n.LINEAR_MIPMAP_LINEAR},Xt={[wd]:n.NEVER,[Pd]:n.ALWAYS,[Ed]:n.LESS,[ic]:n.LEQUAL,[Td]:n.EQUAL,[rc]:n.GEQUAL,[Ad]:n.GREATER,[Cd]:n.NOTEQUAL};function Gt(X,P){if(P.type===fi&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===_n||P.magFilter===yl||P.magFilter===Lo||P.magFilter===mr||P.minFilter===_n||P.minFilter===yl||P.minFilter===Lo||P.minFilter===mr)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(X,n.TEXTURE_WRAP_S,ct[P.wrapS]),n.texParameteri(X,n.TEXTURE_WRAP_T,ct[P.wrapT]),(X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY)&&n.texParameteri(X,n.TEXTURE_WRAP_R,ct[P.wrapR]),n.texParameteri(X,n.TEXTURE_MAG_FILTER,It[P.magFilter]),n.texParameteri(X,n.TEXTURE_MIN_FILTER,It[P.minFilter]),P.compareFunction&&(n.texParameteri(X,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(X,n.TEXTURE_COMPARE_FUNC,Xt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===dn||P.minFilter!==Lo&&P.minFilter!==mr||P.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");n.texParameterf(X,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function Vt(X,P){let it=!1;X.__webglInit===void 0&&(X.__webglInit=!0,P.addEventListener("dispose",V));let mt=P.source,Pt=S.get(mt);Pt===void 0&&(Pt={},S.set(mt,Pt));let kt=dt(P);if(kt!==X.__cacheKey){Pt[kt]===void 0&&(Pt[kt]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,it=!0),Pt[kt].usedTimes++;let Wt=Pt[X.__cacheKey];Wt!==void 0&&(Pt[X.__cacheKey].usedTimes--,Wt.usedTimes===0&&H(P)),X.__cacheKey=kt,X.__webglTexture=Pt[kt].texture}return it}function _t(X,P,it){return Math.floor(Math.floor(X/it)/P)}function Et(X,P,it,mt){let kt=X.updateRanges;if(kt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,P.width,P.height,it,mt,P.data);else{kt.sort((Kt,B)=>Kt.start-B.start);let Wt=0;for(let Kt=1;Kt<kt.length;Kt++){let B=kt[Wt],W=kt[Kt],j=B.start+B.count,st=_t(W.start,P.width,4),yt=_t(B.start,P.width,4);W.start<=j+1&&st===yt&&_t(W.start+W.count-1,P.width,4)===st?B.count=Math.max(B.count,W.start+W.count-B.start):(++Wt,kt[Wt]=W)}kt.length=Wt+1;let Mt=e.getParameter(n.UNPACK_ROW_LENGTH),Dt=e.getParameter(n.UNPACK_SKIP_PIXELS),Yt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,P.width);for(let Kt=0,B=kt.length;Kt<B;Kt++){let W=kt[Kt],j=Math.floor(W.start/4),st=Math.ceil(W.count/4),yt=j%P.width,$=Math.floor(j/P.width),St=st,pt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(n.UNPACK_SKIP_ROWS,$),e.texSubImage2D(n.TEXTURE_2D,0,yt,$,St,pt,it,mt,P.data)}X.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Mt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Yt)}}function Ot(X,P,it){let mt=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(mt=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(mt=n.TEXTURE_3D);let Pt=Vt(X,P),kt=P.source;e.bindTexture(mt,X.__webglTexture,n.TEXTURE0+it);let Wt=i.get(kt);if(kt.version!==Wt.__version||Pt===!0){if(e.activeTexture(n.TEXTURE0+it),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let pt=Le.getPrimaries(Le.workingColorSpace),ut=P.colorSpace===Gi?null:Le.getPrimaries(P.colorSpace),Ut=P.colorSpace===Gi||pt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment);let Dt=b(P.image,!1,r.maxTextureSize);Dt=ze(P,Dt);let Yt=o.convert(P.format,P.colorSpace),Kt=o.convert(P.type),B=A(P.internalFormat,Yt,Kt,P.normalized,P.colorSpace,P.isVideoTexture);Gt(mt,P);let W,j=P.mipmaps,st=P.isVideoTexture!==!0,yt=Wt.__version===void 0||Pt===!0,$=kt.dataReady,St=D(P,Dt);if(P.isDepthTexture)B=L(P.format===gr,P.type),yt&&(st?e.texStorage2D(n.TEXTURE_2D,1,B,Dt.width,Dt.height):e.texImage2D(n.TEXTURE_2D,0,B,Dt.width,Dt.height,0,Yt,Kt,null));else if(P.isDataTexture)if(j.length>0){st&&yt&&e.texStorage2D(n.TEXTURE_2D,St,B,j[0].width,j[0].height);for(let pt=0,ut=j.length;pt<ut;pt++)W=j[pt],st?$&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,W.width,W.height,Yt,Kt,W.data):e.texImage2D(n.TEXTURE_2D,pt,B,W.width,W.height,0,Yt,Kt,W.data);P.generateMipmaps=!1}else st?(yt&&e.texStorage2D(n.TEXTURE_2D,St,B,Dt.width,Dt.height),$&&Et(P,Dt,Yt,Kt)):e.texImage2D(n.TEXTURE_2D,0,B,Dt.width,Dt.height,0,Yt,Kt,Dt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){st&&yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,B,j[0].width,j[0].height,Dt.depth);for(let pt=0,ut=j.length;pt<ut;pt++)if(W=j[pt],P.format!==Qn)if(Yt!==null)if(st){if($)if(P.layerUpdates.size>0){let Ut=Qh(W.width,W.height,P.format,P.type);for(let wt of P.layerUpdates){let Ft=W.data.subarray(wt*Ut/W.data.BYTES_PER_ELEMENT,(wt+1)*Ut/W.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,wt,W.width,W.height,1,Yt,Ft)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,W.width,W.height,Dt.depth,Yt,W.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pt,B,W.width,W.height,Dt.depth,0,W.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?$&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,W.width,W.height,Dt.depth,Yt,Kt,W.data):e.texImage3D(n.TEXTURE_2D_ARRAY,pt,B,W.width,W.height,Dt.depth,0,Yt,Kt,W.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{st&&yt&&e.texStorage2D(n.TEXTURE_2D,St,B,j[0].width,j[0].height);for(let pt=0,ut=j.length;pt<ut;pt++)W=j[pt],P.format!==Qn?Yt!==null?st?$&&e.compressedTexSubImage2D(n.TEXTURE_2D,pt,0,0,W.width,W.height,Yt,W.data):e.compressedTexImage2D(n.TEXTURE_2D,pt,B,W.width,W.height,0,W.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?$&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,W.width,W.height,Yt,Kt,W.data):e.texImage2D(n.TEXTURE_2D,pt,B,W.width,W.height,0,Yt,Kt,W.data)}else if(P.isDataArrayTexture)if(st){if(yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,B,Dt.width,Dt.height,Dt.depth),$)if(P.layerUpdates.size>0){let pt=Qh(Dt.width,Dt.height,P.format,P.type);for(let ut of P.layerUpdates){let Ut=Dt.data.subarray(ut*pt/Dt.data.BYTES_PER_ELEMENT,(ut+1)*pt/Dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ut,Dt.width,Dt.height,1,Yt,Kt,Ut)}P.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,Yt,Kt,Dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,B,Dt.width,Dt.height,Dt.depth,0,Yt,Kt,Dt.data);else if(P.isData3DTexture)st?(yt&&e.texStorage3D(n.TEXTURE_3D,St,B,Dt.width,Dt.height,Dt.depth),$&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,Yt,Kt,Dt.data)):e.texImage3D(n.TEXTURE_3D,0,B,Dt.width,Dt.height,Dt.depth,0,Yt,Kt,Dt.data);else if(P.isFramebufferTexture){if(yt)if(st)e.texStorage2D(n.TEXTURE_2D,St,B,Dt.width,Dt.height);else{let pt=Dt.width,ut=Dt.height;for(let Ut=0;Ut<St;Ut++)e.texImage2D(n.TEXTURE_2D,Ut,B,pt,ut,0,Yt,Kt,null),pt>>=1,ut>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in n){let pt=n.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),Dt.parentNode!==pt){pt.appendChild(Dt),v.add(P),pt.onpaint=ut=>{let Ut=ut.changedElements;for(let wt of v)Ut.includes(wt.image)&&(wt.needsUpdate=!0)},pt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Dt);else{let Ut=n.RGBA,wt=n.RGBA,Ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ut,wt,Ft,Dt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(j.length>0){if(st&&yt){let pt=Se(j[0]);e.texStorage2D(n.TEXTURE_2D,St,B,pt.width,pt.height)}for(let pt=0,ut=j.length;pt<ut;pt++)W=j[pt],st?$&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Yt,Kt,W):e.texImage2D(n.TEXTURE_2D,pt,B,Yt,Kt,W);P.generateMipmaps=!1}else if(st){if(yt){let pt=Se(Dt);e.texStorage2D(n.TEXTURE_2D,St,B,pt.width,pt.height)}$&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Yt,Kt,Dt)}else e.texImage2D(n.TEXTURE_2D,0,B,Yt,Kt,Dt);y(P)&&R(mt),Wt.__version=kt.version,P.onUpdate&&P.onUpdate(P)}X.__version=P.version}function Qt(X,P,it){if(P.image.length!==6)return;let mt=Vt(X,P),Pt=P.source;e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+it);let kt=i.get(Pt);if(Pt.version!==kt.__version||mt===!0){e.activeTexture(n.TEXTURE0+it);let Wt=Le.getPrimaries(Le.workingColorSpace),Mt=P.colorSpace===Gi?null:Le.getPrimaries(P.colorSpace),Dt=P.colorSpace===Gi||Wt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Yt=P.isCompressedTexture||P.image[0].isCompressedTexture,Kt=P.image[0]&&P.image[0].isDataTexture,B=[];for(let wt=0;wt<6;wt++)!Yt&&!Kt?B[wt]=b(P.image[wt],!0,r.maxCubemapSize):B[wt]=Kt?P.image[wt].image:P.image[wt],B[wt]=ze(P,B[wt]);let W=B[0],j=o.convert(P.format,P.colorSpace),st=o.convert(P.type),yt=A(P.internalFormat,j,st,P.normalized,P.colorSpace),$=P.isVideoTexture!==!0,St=kt.__version===void 0||mt===!0,pt=Pt.dataReady,ut=D(P,W);Gt(n.TEXTURE_CUBE_MAP,P);let Ut;if(Yt){$&&St&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,yt,W.width,W.height);for(let wt=0;wt<6;wt++){Ut=B[wt].mipmaps;for(let Ft=0;Ft<Ut.length;Ft++){let te=Ut[Ft];P.format!==Qn?j!==null?$?pt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ft,0,0,te.width,te.height,j,te.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ft,yt,te.width,te.height,0,te.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ft,0,0,te.width,te.height,j,st,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ft,yt,te.width,te.height,0,j,st,te.data)}}}else{if(Ut=P.mipmaps,$&&St){Ut.length>0&&ut++;let wt=Se(B[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,yt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(Kt){$?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,B[wt].width,B[wt].height,j,st,B[wt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,yt,B[wt].width,B[wt].height,0,j,st,B[wt].data);for(let Ft=0;Ft<Ut.length;Ft++){let Pe=Ut[Ft].image[wt].image;$?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ft+1,0,0,Pe.width,Pe.height,j,st,Pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ft+1,yt,Pe.width,Pe.height,0,j,st,Pe.data)}}else{$?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,j,st,B[wt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,yt,j,st,B[wt]);for(let Ft=0;Ft<Ut.length;Ft++){let te=Ut[Ft];$?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ft+1,0,0,j,st,te.image[wt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ft+1,yt,j,st,te.image[wt])}}}y(P)&&R(n.TEXTURE_CUBE_MAP),kt.__version=Pt.version,P.onUpdate&&P.onUpdate(P)}X.__version=P.version}function et(X,P,it,mt,Pt,kt){let Wt=o.convert(it.format,it.colorSpace),Mt=o.convert(it.type),Dt=A(it.internalFormat,Wt,Mt,it.normalized,it.colorSpace),Yt=i.get(P),Kt=i.get(it);if(Kt.__renderTarget=P,!Yt.__hasExternalTextures){let B=Math.max(1,P.width>>kt),W=Math.max(1,P.height>>kt);Pt===n.TEXTURE_3D||Pt===n.TEXTURE_2D_ARRAY?e.texImage3D(Pt,kt,Dt,B,W,P.depth,0,Wt,Mt,null):e.texImage2D(Pt,kt,Dt,B,W,0,Wt,Mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,X),Ae(P)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,Pt,Kt.__webglTexture,0,ve(P)):(Pt===n.TEXTURE_2D||Pt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Pt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,mt,Pt,Kt.__webglTexture,kt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(X,P,it){if(n.bindRenderbuffer(n.RENDERBUFFER,X),P.depthBuffer){let mt=P.depthTexture,Pt=mt&&mt.isDepthTexture?mt.type:null,kt=L(P.stencilBuffer,Pt),Wt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ae(P)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve(P),kt,P.width,P.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve(P),kt,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,kt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Wt,n.RENDERBUFFER,X)}else{let mt=P.textures;for(let Pt=0;Pt<mt.length;Pt++){let kt=mt[Pt],Wt=o.convert(kt.format,kt.colorSpace),Mt=o.convert(kt.type),Dt=A(kt.internalFormat,Wt,Mt,kt.normalized,kt.colorSpace);Ae(P)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve(P),Dt,P.width,P.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve(P),Dt,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Dt,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(X,P,it){let mt=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,X),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Pt=i.get(P.depthTexture);if(Pt.__renderTarget=P,(!Pt.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),mt){if(Pt.__webglInit===void 0&&(Pt.__webglInit=!0,P.depthTexture.addEventListener("dispose",V)),Pt.__webglTexture===void 0){Pt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Pt.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,P.depthTexture);let Yt=o.convert(P.depthTexture.format),Kt=o.convert(P.depthTexture.type),B;P.depthTexture.format===Mi?B=n.DEPTH_COMPONENT24:P.depthTexture.format===gr&&(B=n.DEPTH24_STENCIL8);for(let W=0;W<6;W++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,B,P.width,P.height,0,Yt,Kt,null)}}else Tt(P.depthTexture,0);let kt=Pt.__webglTexture,Wt=ve(P),Mt=mt?n.TEXTURE_CUBE_MAP_POSITIVE_X+it:n.TEXTURE_2D,Dt=P.depthTexture.format===gr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(P.depthTexture.format===Mi)Ae(P)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Dt,Mt,kt,0,Wt):n.framebufferTexture2D(n.FRAMEBUFFER,Dt,Mt,kt,0);else if(P.depthTexture.format===gr)Ae(P)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Dt,Mt,kt,0,Wt):n.framebufferTexture2D(n.FRAMEBUFFER,Dt,Mt,kt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(X){let P=i.get(X),it=X.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==X.depthTexture){let mt=X.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),mt){let Pt=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,mt.removeEventListener("dispose",Pt)};mt.addEventListener("dispose",Pt),P.__depthDisposeCallback=Pt}P.__boundDepthTexture=mt}if(X.depthTexture&&!P.__autoAllocateDepthBuffer)if(it)for(let mt=0;mt<6;mt++)Ue(P.__webglFramebuffer[mt],X,mt);else{let mt=X.texture.mipmaps;mt&&mt.length>0?Ue(P.__webglFramebuffer[0],X,0):Ue(P.__webglFramebuffer,X,0)}else if(it){P.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[mt]),P.__webglDepthbuffer[mt]===void 0)P.__webglDepthbuffer[mt]=n.createRenderbuffer(),oe(P.__webglDepthbuffer[mt],X,!1);else{let Pt=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,kt=P.__webglDepthbuffer[mt];n.bindRenderbuffer(n.RENDERBUFFER,kt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,kt)}}else{let mt=X.texture.mipmaps;if(mt&&mt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),oe(P.__webglDepthbuffer,X,!1);else{let Pt=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,kt=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,kt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,kt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(X,P,it){let mt=i.get(X);P!==void 0&&et(mt.__webglFramebuffer,X,X.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),it!==void 0&&ue(X)}function me(X){let P=X.texture,it=i.get(X),mt=i.get(P);X.addEventListener("dispose",C);let Pt=X.textures,kt=X.isWebGLCubeRenderTarget===!0,Wt=Pt.length>1;if(Wt||(mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture()),mt.__version=P.version,l.memory.textures++),kt){it.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(P.mipmaps&&P.mipmaps.length>0){it.__webglFramebuffer[Mt]=[];for(let Dt=0;Dt<P.mipmaps.length;Dt++)it.__webglFramebuffer[Mt][Dt]=n.createFramebuffer()}else it.__webglFramebuffer[Mt]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){it.__webglFramebuffer=[];for(let Mt=0;Mt<P.mipmaps.length;Mt++)it.__webglFramebuffer[Mt]=n.createFramebuffer()}else it.__webglFramebuffer=n.createFramebuffer();if(Wt)for(let Mt=0,Dt=Pt.length;Mt<Dt;Mt++){let Yt=i.get(Pt[Mt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),l.memory.textures++)}if(X.samples>0&&Ae(X)===!1){it.__webglMultisampledFramebuffer=n.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Mt=0;Mt<Pt.length;Mt++){let Dt=Pt[Mt];it.__webglColorRenderbuffer[Mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,it.__webglColorRenderbuffer[Mt]);let Yt=o.convert(Dt.format,Dt.colorSpace),Kt=o.convert(Dt.type),B=A(Dt.internalFormat,Yt,Kt,Dt.normalized,Dt.colorSpace,X.isXRRenderTarget===!0),W=ve(X);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,B,X.width,X.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,it.__webglColorRenderbuffer[Mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),X.depthBuffer&&(it.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(it.__webglDepthRenderbuffer,X,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(kt){e.bindTexture(n.TEXTURE_CUBE_MAP,mt.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,P);for(let Mt=0;Mt<6;Mt++)if(P.mipmaps&&P.mipmaps.length>0)for(let Dt=0;Dt<P.mipmaps.length;Dt++)et(it.__webglFramebuffer[Mt][Dt],X,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Dt);else et(it.__webglFramebuffer[Mt],X,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);y(P)&&R(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Wt){for(let Mt=0,Dt=Pt.length;Mt<Dt;Mt++){let Yt=Pt[Mt],Kt=i.get(Yt),B=n.TEXTURE_2D;(X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(B=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(B,Kt.__webglTexture),Gt(B,Yt),et(it.__webglFramebuffer,X,Yt,n.COLOR_ATTACHMENT0+Mt,B,0),y(Yt)&&R(B)}e.unbindTexture()}else{let Mt=n.TEXTURE_2D;if((X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(Mt=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Mt,mt.__webglTexture),Gt(Mt,P),P.mipmaps&&P.mipmaps.length>0)for(let Dt=0;Dt<P.mipmaps.length;Dt++)et(it.__webglFramebuffer[Dt],X,P,n.COLOR_ATTACHMENT0,Mt,Dt);else et(it.__webglFramebuffer,X,P,n.COLOR_ATTACHMENT0,Mt,0);y(P)&&R(Mt),e.unbindTexture()}X.depthBuffer&&ue(X)}function fe(X){let P=X.textures;for(let it=0,mt=P.length;it<mt;it++){let Pt=P[it];if(y(Pt)){let kt=z(X),Wt=i.get(Pt).__webglTexture;e.bindTexture(kt,Wt),R(kt),e.unbindTexture()}}}let Te=[],ne=[];function Ce(X){if(X.samples>0){if(Ae(X)===!1){let P=X.textures,it=X.width,mt=X.height,Pt=n.COLOR_BUFFER_BIT,kt=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Wt=i.get(X),Mt=P.length>1;if(Mt)for(let Yt=0;Yt<P.length;Yt++)e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);let Dt=X.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Yt=0;Yt<P.length;Yt++){if(X.resolveDepthBuffer&&(X.depthBuffer&&(Pt|=n.DEPTH_BUFFER_BIT),X.stencilBuffer&&X.resolveStencilBuffer&&(Pt|=n.STENCIL_BUFFER_BIT)),Mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Wt.__webglColorRenderbuffer[Yt]);let Kt=i.get(P[Yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Kt,0)}n.blitFramebuffer(0,0,it,mt,0,0,it,mt,Pt,n.NEAREST),u===!0&&(Te.length=0,ne.length=0,Te.push(n.COLOR_ATTACHMENT0+Yt),X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&(Te.push(kt),ne.push(kt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Mt)for(let Yt=0;Yt<P.length;Yt++){e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.RENDERBUFFER,Wt.__webglColorRenderbuffer[Yt]);let Kt=i.get(P[Yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.TEXTURE_2D,Kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&u){let P=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function ve(X){return Math.min(r.maxSamples,X.samples)}function Ae(X){let P=i.get(X);return X.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function at(X){let P=l.render.frame;g.get(X)!==P&&(g.set(X,P),X.update())}function ze(X,P){let it=X.colorSpace,mt=X.format,Pt=X.type;return X.isCompressedTexture===!0||X.isVideoTexture===!0||it!==oo&&it!==Gi&&(Le.getTransfer(it)===Ve?(mt!==Qn||Pt!==Dn)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_e("WebGLTextures: Unsupported texture color space:",it)),P}function Se(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement?(d.width=X.naturalWidth||X.width,d.height=X.naturalHeight||X.height):typeof VideoFrame<"u"&&X instanceof VideoFrame?(d.width=X.displayWidth,d.height=X.displayHeight):(d.width=X.width,d.height=X.height),d}this.allocateTextureUnit=lt,this.resetTextureUnits=q,this.getTextureUnits=Z,this.setTextureUnits=K,this.setTexture2D=Tt,this.setTexture2DArray=xt,this.setTexture3D=Ct,this.setTextureCube=Nt,this.rebindTextures=pe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function kM(n,t){function e(i,r=Gi){let o,l=Le.getTransfer(r);if(i===Dn)return n.UNSIGNED_BYTE;if(i===Ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kh)return n.BYTE;if(i===zh)return n.SHORT;if(i===Rs)return n.UNSIGNED_SHORT;if(i===xl)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===Gh)return n.ALPHA;if(i===Xh)return n.RGB;if(i===Qn)return n.RGBA;if(i===Mi)return n.DEPTH_COMPONENT;if(i===gr)return n.DEPTH_STENCIL;if(i===Wh)return n.RED;if(i===Sl)return n.RED_INTEGER;if(i===_r)return n.RG;if(i===wl)return n.RG_INTEGER;if(i===El)return n.RGBA_INTEGER;if(i===No||i===Do||i===Oo||i===Fo)if(l===Ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===No)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Do)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===No)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Do)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===Al||i===Cl||i===Pl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Tl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Rl||i===Ll||i===Nl||i===Dl||i===Uo||i===Ol)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Il||i===Rl)return l===Ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ll)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nl)return o.COMPRESSED_R11_EAC;if(i===Dl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Uo)return o.COMPRESSED_RG11_EAC;if(i===Ol)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fl||i===Ul||i===Bl||i===kl||i===zl||i===Vl||i===Hl||i===Gl||i===Xl||i===Wl||i===Yl||i===$l||i===ql||i===Zl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Fl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ul)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$l)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ql)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jl||i===Jl||i===Kl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===jl)return l===Ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ql||i===tc||i===Bo||i===ec)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ql)return o.COMPRESSED_RED_RGTC1_EXT;if(i===tc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ec)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function GM(n,t){function e(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function i(b,y){y.color.getRGB(b.fogColor.value,jh(n)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function r(b,y,R,z,A){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?o(b,y):y.isMeshLambertMaterial?(o(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(o(b,y),v(b,y)):y.isMeshPhongMaterial?(o(b,y),g(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(o(b,y),_(b,y),y.isMeshPhysicalMaterial&&S(b,y,A)):y.isMeshMatcapMaterial?(o(b,y),w(b,y)):y.isMeshDepthMaterial?o(b,y):y.isMeshDistanceMaterial?(o(b,y),E(b,y)):y.isMeshNormalMaterial?o(b,y):y.isLineBasicMaterial?(l(b,y),y.isLineDashedMaterial&&h(b,y)):y.isPointsMaterial?u(b,y,R,z):y.isSpriteMaterial?d(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,e(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,e(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,e(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===In&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,e(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===In&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,e(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,e(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);let R=t.get(y),z=R.envMap,A=R.envMapRotation;z&&(b.envMap.value=z,b.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(A)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(fp),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,b.aoMapTransform))}function l(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,e(y.map,b.mapTransform))}function h(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function u(b,y,R,z){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*R,b.scale.value=z*.5,y.map&&(b.map.value=y.map,e(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,e(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function d(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,e(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,e(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function g(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function v(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function _(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function S(b,y,R){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===In&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.retroreflectivity>0&&(b.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=R.texture,b.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,b.specularIntensityMapTransform))}function w(b,y){y.matcap&&(b.matcap.value=y.matcap)}function E(b,y){let R=t.get(y).light;b.referencePosition.value.setFromMatrixPosition(R.matrixWorld),b.nearDistance.value=R.shadow.camera.near,b.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XM(n,t,e,i){let r={},o={},l=[],h=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(A,L){let D=L.program;i.uniformBlockBinding(A,D)}function d(A,L){let D=r[A.id];D===void 0&&(b(A),D=g(A),r[A.id]=D,A.addEventListener("dispose",R));let V=L.program;i.updateUBOMapping(A,V);let C=t.render.frame;o[A.id]!==C&&(_(A),o[A.id]=C)}function g(A){let L=v();A.__bindingPointIndex=L;let D=n.createBuffer(),V=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,V,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,L,D),D}function v(){for(let A=0;A<h;A++)if(l.indexOf(A)===-1)return l.push(A),A;return _e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){let L=r[A.id],D=A.uniforms,V=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let C=0,k=D.length;C<k;C++){let H=D[C];if(Array.isArray(H))for(let Y=0,J=H.length;Y<J;Y++)S(H[Y],C,Y,V);else S(H,C,0,V)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(A,L,D,V){if(E(A,L,D,V)===!0){let C=A.__offset,k=A.value;if(Array.isArray(k)){let H=0;for(let Y=0;Y<k.length;Y++){let J=k[Y],q=y(J);w(J,A.__data,H),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(H+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(k,A.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,A.__data)}}function w(A,L,D){typeof A=="number"||typeof A=="boolean"?L[0]=A:A.isMatrix3?(L[0]=A.elements[0],L[1]=A.elements[1],L[2]=A.elements[2],L[3]=0,L[4]=A.elements[3],L[5]=A.elements[4],L[6]=A.elements[5],L[7]=0,L[8]=A.elements[6],L[9]=A.elements[7],L[10]=A.elements[8],L[11]=0):ArrayBuffer.isView(A)?L.set(new A.constructor(A.buffer,A.byteOffset,L.length)):A.toArray(L,D)}function E(A,L,D,V){let C=A.value,k=L+"_"+D;if(V[k]===void 0)return typeof C=="number"||typeof C=="boolean"?V[k]=C:ArrayBuffer.isView(C)?V[k]=C.slice():V[k]=C.clone(),!0;{let H=V[k];if(typeof C=="number"||typeof C=="boolean"){if(H!==C)return V[k]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(H.equals(C)===!1)return H.copy(C),!0}}return!1}function b(A){let L=A.uniforms,D=0,V=16;for(let k=0,H=L.length;k<H;k++){let Y=Array.isArray(L[k])?L[k]:[L[k]];for(let J=0,q=Y.length;J<q;J++){let Z=Y[J],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let lt=0,dt=K.length;lt<dt;lt++){let Tt=K[lt],xt=y(Tt),Ct=D%V,Nt=Ct%xt.boundary,ct=Ct+Nt;D+=Nt,ct!==0&&V-ct<xt.storage&&(D+=V-ct),Z.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=D,D+=xt.storage}}}let C=D%V;return C>0&&(D+=V-C),A.__size=D,A.__cache={},this}function y(A){let L={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(L.boundary=4,L.storage=4):A.isVector2?(L.boundary=8,L.storage=8):A.isVector3||A.isColor?(L.boundary=16,L.storage=12):A.isVector4?(L.boundary=16,L.storage=16):A.isMatrix3?(L.boundary=48,L.storage=48):A.isMatrix4?(L.boundary=64,L.storage=64):A.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(L.boundary=16,L.storage=A.byteLength):de("WebGLRenderer: Unsupported uniform value type.",A),L}function R(A){let L=A.target;L.removeEventListener("dispose",R);let D=l.indexOf(L.__bindingPointIndex);l.splice(D,1),n.deleteBuffer(r[L.id]),delete r[L.id],delete o[L.id]}function z(){for(let A in r)n.deleteBuffer(r[A]);l=[],r={},o={}}return{bind:u,update:d,dispose:z}}function YM(){return Ei===null&&(Ei=new Ja(WM,16,16,_r,di),Ei.name="DFG_LUT",Ei.minFilter=_n,Ei.magFilter=_n,Ei.wrapS=xi,Ei.wrapT=xi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var s_,o_,a_,l_,c_,h_,u_,f_,d_,p_,m_,g_,__,v_,y_,x_,M_,b_,S_,w_,E_,T_,A_,C_,P_,I_,R_,L_,N_,D_,O_,F_,U_,B_,k_,z_,V_,H_,G_,X_,W_,Y_,$_,q_,Z_,j_,J_,K_,Q_,tv,ev,nv,iv,rv,sv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,vv,yv,xv,Mv,bv,Sv,wv,Ev,Tv,Av,Cv,Pv,Iv,Rv,Lv,Nv,Dv,Ov,Fv,Uv,Bv,kv,zv,Vv,Hv,Gv,Xv,Wv,Yv,$v,qv,Zv,jv,Jv,Kv,Qv,ty,ey,ny,iy,ry,sy,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,_y,vy,yy,xy,My,by,Sy,wy,Ey,Ty,Ay,Cy,Py,Iy,Ry,Ly,Ny,Dy,Oy,Fy,Uy,By,Ee,Jt,Ti,sc,ky,ap,Ds,Wy,Yy,$y,ko,kd,eu,nu,iu,ru,qy,Dr,ac,lc,sx,lp,au,cp,hp,up,Gd,Xd,Wd,Yd,$d,lu,cu,hu,su,Os,qx,Zx,jd,Qx,oc,sM,oM,lM,hM,fM,pM,gM,xM,fu,du,CM,LM,NM,DM,OM,sp,zo,ou,zM,VM,pu,mu,HM,fp,WM,Ei,cc,fc=mn(()=>{tu();tu();s_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o_=`#ifdef USE_ALPHAHASH
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
#endif`,a_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u_=`#ifdef USE_AOMAP
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
#endif`,f_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d_=`#ifdef USE_BATCHING
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
#endif`,p_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,__=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v_=`#ifdef USE_IRIDESCENCE
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
#endif`,y_=`#ifdef USE_BUMPMAP
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
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,C_=`#define PI 3.141592653589793
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
} // validated`,P_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I_=`vec3 transformedNormal = objectNormal;
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
#endif`,R_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O_="gl_FragColor = linearToOutputTexel( gl_FragColor );",F_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U_=`#ifdef USE_ENVMAP
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
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,H_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y_=`#ifdef USE_GRADIENTMAP
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
}`,$_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,J_=`#ifdef USE_ENVMAP
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
#endif`,K_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nv=`PhysicalMaterial material;
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
#endif`,iv=`uniform sampler2D dfgLUT;
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
}`,rv=`
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
#endif`,sv=`#if defined( RE_IndirectDiffuse )
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
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,av=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mv=`#if defined( USE_POINTS_UV )
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
#endif`,gv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_v=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`#ifdef USE_MORPHTARGETS
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
#endif`,bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cv=`#ifdef USE_NORMALMAP
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
#endif`,Pv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xv=`float getShadowMask() {
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
}`,Wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yv=`#ifdef USE_SKINNING
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
#endif`,$v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qv=`#ifdef USE_SKINNING
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
#endif`,Zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qv=`#ifdef USE_TRANSMISSION
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
#endif`,ty=`#ifdef USE_TRANSMISSION
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oy=`uniform sampler2D t2D;
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`#include <common>
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
}`,fy=`#if DEPTH_PACKING == 3200
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
}`,dy=`#define DISTANCE
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
}`,py=`#define DISTANCE
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`uniform float scale;
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
}`,vy=`uniform vec3 diffuse;
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
}`,yy=`#include <common>
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
}`,xy=`uniform vec3 diffuse;
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
}`,My=`#define LAMBERT
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
}`,by=`#define LAMBERT
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
}`,Sy=`#define MATCAP
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
}`,wy=`#define MATCAP
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
}`,Ey=`#define NORMAL
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
}`,Ty=`#define NORMAL
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
}`,Ay=`#define PHONG
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
}`,Cy=`#define PHONG
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
}`,Py=`#define STANDARD
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
}`,Iy=`#define STANDARD
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
}`,Ry=`#define TOON
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
}`,Ly=`#define TOON
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
}`,Ny=`uniform float size;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,Fy=`uniform vec3 color;
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
}`,Uy=`uniform float rotation;
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
}`,By=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:s_,alphahash_pars_fragment:o_,alphamap_fragment:a_,alphamap_pars_fragment:l_,alphatest_fragment:c_,alphatest_pars_fragment:h_,aomap_fragment:u_,aomap_pars_fragment:f_,batching_pars_vertex:d_,batching_vertex:p_,begin_vertex:m_,beginnormal_vertex:g_,bsdfs:__,iridescence_fragment:v_,bumpmap_pars_fragment:y_,clipping_planes_fragment:x_,clipping_planes_pars_fragment:M_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:S_,color_fragment:w_,color_pars_fragment:E_,color_pars_vertex:T_,color_vertex:A_,common:C_,cube_uv_reflection_fragment:P_,defaultnormal_vertex:I_,displacementmap_pars_vertex:R_,displacementmap_vertex:L_,emissivemap_fragment:N_,emissivemap_pars_fragment:D_,colorspace_fragment:O_,colorspace_pars_fragment:F_,envmap_fragment:U_,envmap_common_pars_fragment:B_,envmap_pars_fragment:k_,envmap_pars_vertex:z_,envmap_physical_pars_fragment:J_,envmap_vertex:V_,fog_vertex:H_,fog_pars_vertex:G_,fog_fragment:X_,fog_pars_fragment:W_,gradientmap_pars_fragment:Y_,lightmap_pars_fragment:$_,lights_lambert_fragment:q_,lights_lambert_pars_fragment:Z_,lights_pars_begin:j_,lights_toon_fragment:K_,lights_toon_pars_fragment:Q_,lights_phong_fragment:tv,lights_phong_pars_fragment:ev,lights_physical_fragment:nv,lights_physical_pars_fragment:iv,lights_fragment_begin:rv,lights_fragment_maps:sv,lights_fragment_end:ov,lightprobes_pars_fragment:av,logdepthbuf_fragment:lv,logdepthbuf_pars_fragment:cv,logdepthbuf_pars_vertex:hv,logdepthbuf_vertex:uv,map_fragment:fv,map_pars_fragment:dv,map_particle_fragment:pv,map_particle_pars_fragment:mv,metalnessmap_fragment:gv,metalnessmap_pars_fragment:_v,morphinstance_vertex:vv,morphcolor_vertex:yv,morphnormal_vertex:xv,morphtarget_pars_vertex:Mv,morphtarget_vertex:bv,normal_fragment_begin:Sv,normal_fragment_maps:wv,normal_pars_fragment:Ev,normal_pars_vertex:Tv,normal_vertex:Av,normalmap_pars_fragment:Cv,clearcoat_normal_fragment_begin:Pv,clearcoat_normal_fragment_maps:Iv,clearcoat_pars_fragment:Rv,iridescence_pars_fragment:Lv,opaque_fragment:Nv,packing:Dv,premultiplied_alpha_fragment:Ov,project_vertex:Fv,dithering_fragment:Uv,dithering_pars_fragment:Bv,roughnessmap_fragment:kv,roughnessmap_pars_fragment:zv,shadowmap_pars_fragment:Vv,shadowmap_pars_vertex:Hv,shadowmap_vertex:Gv,shadowmask_pars_fragment:Xv,skinbase_vertex:Wv,skinning_pars_vertex:Yv,skinning_vertex:$v,skinnormal_vertex:qv,specularmap_fragment:Zv,specularmap_pars_fragment:jv,tonemapping_fragment:Jv,tonemapping_pars_fragment:Kv,transmission_fragment:Qv,transmission_pars_fragment:ty,uv_pars_fragment:ey,uv_pars_vertex:ny,uv_vertex:iy,worldpos_vertex:ry,background_vert:sy,background_frag:oy,backgroundCube_vert:ay,backgroundCube_frag:ly,cube_vert:cy,cube_frag:hy,depth_vert:uy,depth_frag:fy,distance_vert:dy,distance_frag:py,equirect_vert:my,equirect_frag:gy,linedashed_vert:_y,linedashed_frag:vy,meshbasic_vert:yy,meshbasic_frag:xy,meshlambert_vert:My,meshlambert_frag:by,meshmatcap_vert:Sy,meshmatcap_frag:wy,meshnormal_vert:Ey,meshnormal_frag:Ty,meshphong_vert:Ay,meshphong_frag:Cy,meshphysical_vert:Py,meshphysical_frag:Iy,meshtoon_vert:Ry,meshtoon_frag:Ly,points_vert:Ny,points_frag:Dy,shadow_vert:Oy,shadow_frag:Fy,sprite_vert:Uy,sprite_frag:By},Jt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ht},probesMax:{value:new ht},probesResolution:{value:new ht}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Ti={basic:{uniforms:En([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:En([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,Jt.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:En([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,Jt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:En([Jt.common,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.roughnessmap,Jt.metalnessmap,Jt.fog,Jt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:En([Jt.common,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.gradientmap,Jt.fog,Jt.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:En([Jt.common,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:En([Jt.points,Jt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:En([Jt.common,Jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:En([Jt.common,Jt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:En([Jt.common,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:En([Jt.sprite,Jt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:En([Jt.common,Jt.displacementmap,{referencePosition:{value:new ht},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:En([Jt.lights,Jt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Ti.physical={uniforms:En([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};sc={r:0,b:0,g:0},ky=new Xe,ap=new be;ap.set(-1,0,0,0,1,0,0,0,1);Ds=4,Wy=6,Yy=20,$y=256,ko=new Ts,kd=new Me,eu=null,nu=0,iu=0,ru=!1,qy=new ht,Dr=new ht,ac=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,o={}){let{size:l=256,position:h=qy}=o;eu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,r,u,h),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(eu,nu,iu),this._renderer.xr.enabled=ru,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pr||t.mapping===Rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:di,format:Qn,colorSpace:oo,depthBuffer:!1},r=zd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zy(o)),this._blurMaterial=Jy(o,t,e),this._ggxMaterial=jy(o,t,e)}return r}_compileMaterial(t){let e=new Be(new Je,t);this._renderer.compile(e,ko)}_sceneToCubeUV(t,e,i,r,o){let u=new Sn(90,1,e,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(kd),v.toneMapping=hi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(r),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new or,new Hn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,b=E.material,y=!1,R=t.background;R?R.isColor&&(b.color.copy(R),t.background=null,y=!0):(b.color.copy(kd),y=!0);for(let z=0;z<6;z++){let A=z%3;A===0?(u.up.set(0,d[z],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+g[z],o.y,o.z)):A===1?(u.up.set(0,0,d[z]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+g[z],o.z)):(u.up.set(0,d[z],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+g[z]));let L=this._cubeSize;Ns(r,A*L,z>2?L:0,L,L),v.setRenderTarget(r),y&&v.render(E,u),v.render(t,u)}v.toneMapping=S,v.autoClear=_,t.background=R}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===pr||t.mapping===Rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());let o=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;let h=o.uniforms;h.envMap.value=t;let u=this._cubeSize;Ns(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(l,ko)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,h=this._lodMeshes[i];h.material=l;let u=l.uniforms,d=i/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=d*1.25,S=v*_,{_lodMax:w}=this,E=this._sizeLods[i],b=3*E*(i>w-Ds?i-w+Ds:0),y=4*(this._cubeSize-E);u.envMap.value=t.texture,u.roughness.value=S,u.mipInt.value=w-e,Ns(o,b,y,3*E,2*E),r.setRenderTarget(o),r.render(h,ko),u.envMap.value=o.texture,u.roughness.value=0,u.mipInt.value=w-i,Ns(t,b,y,3*E,2*E),r.setRenderTarget(t),r.render(h,ko)}_blur(t,e,i,r){let o=this._pingPongRenderTarget,l=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,l),this._blurPass(o,t,i,i,l)}_blurPass(t,e,i,r,o){let l=this._renderer,h=this._blurMaterial,u=this._lodMeshes[r];u.material=h;let d=h.uniforms;d.envMap.value=t.texture,d.sigma.value=o,d.mipInt.value=this._lodMax-i;let g=this._sizeLods[r],v=3*g*(r>this._lodMax-Ds?r-this._lodMax+Ds:0),_=4*(this._cubeSize-g);Ns(e,v,_,3*g,2*g),l.setRenderTarget(e),l.render(u,ko)}};lc=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new _o(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new or(5,5,5),o=new Gn({name:"CubemapFromEquirect",uniforms:Nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:wi});o.uniforms.tEquirect.value=e;let l=new Be(r,o),h=e.minFilter;return e.minFilter===mr&&(e.minFilter=_n),new ml(1,10,this).update(t,l),e.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,r);t.setRenderTarget(o)}};sx={[Rh]:"LINEAR_TONE_MAPPING",[Lh]:"REINHARD_TONE_MAPPING",[Nh]:"CINEON_TONE_MAPPING",[Dh]:"ACES_FILMIC_TONE_MAPPING",[Fh]:"AGX_TONE_MAPPING",[Uh]:"NEUTRAL_TONE_MAPPING",[Oh]:"CUSTOM_TONE_MAPPING"};lp=new Pn,au=new sr(1,1),cp=new ho,hp=new Za,up=new _o,Gd=[],Xd=[],Wd=new Float32Array(16),Yd=new Float32Array(9),$d=new Float32Array(4);lu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Tx(e.type)}},cu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yx(e.type)}},hu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let o=0,l=r.length;o!==l;++o){let h=r[o];h.setValue(t,e[h.id],i)}}},su=/(\w+)(\])?(\[|\.)?/g;Os=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<i;++l){let h=t.getActiveUniform(e,l),u=t.getUniformLocation(e,h.name);$x(h,u,this)}let r=[],o=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(l):o.push(l);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,i,r){let o=this.map[e];o!==void 0&&o.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let o=0,l=e.length;o!==l;++o){let h=e[o],u=i[h.id];u.needsUpdate!==!1&&h.setValue(t,u.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,o=t.length;r!==o;++r){let l=t[r];l.id in e&&i.push(l)}return i}};qx=37297,Zx=0;jd=new be;Qx={[Rh]:"Linear",[Lh]:"Reinhard",[Nh]:"Cineon",[Dh]:"ACESFilmic",[Fh]:"AgX",[Uh]:"Neutral",[Oh]:"Custom"};oc=new ht;sM=/^[ \t]*#include +<([\w\d./]+)>/gm;oM=new Map;lM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;hM={[Io]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};fM={[pr]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE_UV"};pM={[Rr]:"ENVMAP_MODE_REFRACTION"};gM={[Ih]:"ENVMAP_BLENDING_MULTIPLY",[vd]:"ENVMAP_BLENDING_MIX",[yd]:"ENVMAP_BLENDING_ADD"};xM=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new du(t),e.set(t,i)),i}},du=class{constructor(t){this.id=xM++,this.code=t,this.usedTimes=0}};CM=0;LM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NM=`uniform sampler2D shadow_pass;
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
}`,DM=[new ht(1,0,0),new ht(-1,0,0),new ht(0,1,0),new ht(0,-1,0),new ht(0,0,1),new ht(0,0,-1)],OM=[new ht(0,-1,0),new ht(0,-1,0),new ht(0,0,1),new ht(0,0,-1),new ht(0,-1,0),new ht(0,-1,0)],sp=new Xe,zo=new ht,ou=new ht;zM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VM=`
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

}`,pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new yo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Gn({vertexShader:zM,fragmentShader:VM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mu=class extends li{constructor(t,e){super();let i=this,r=null,o=1,l=null,h="local-floor",u=1,d=null,g=null,v=null,_=null,S=null,w=null,E=typeof XRWebGLBinding<"u",b=new pu,y={},R=e.getContextAttributes(),z=null,A=null,L=[],D=[],V=new ce,C=null,k=null,H=new Sn;H.viewport=new Ke;let Y=new Sn;Y.viewport=new Ke;let J=[H,Y],q=new gl,Z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_t){let Et=L[_t];return Et===void 0&&(Et=new Ms,L[_t]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(_t){let Et=L[_t];return Et===void 0&&(Et=new Ms,L[_t]=Et),Et.getGripSpace()},this.getHand=function(_t){let Et=L[_t];return Et===void 0&&(Et=new Ms,L[_t]=Et),Et.getHandSpace()};function lt(_t){let Et=D.indexOf(_t.inputSource);if(Et===-1)return;let Ot=L[Et];Ot!==void 0&&(Ot.update(_t.inputSource,_t.frame,d||l),Ot.dispatchEvent({type:_t.type,data:_t.inputSource}))}function dt(){r.removeEventListener("select",lt),r.removeEventListener("selectstart",lt),r.removeEventListener("selectend",lt),r.removeEventListener("squeeze",lt),r.removeEventListener("squeezestart",lt),r.removeEventListener("squeezeend",lt),r.removeEventListener("end",dt),r.removeEventListener("inputsourceschange",Tt);for(let _t=0;_t<L.length;_t++){let Et=D[_t];Et!==null&&(D[_t]=null,L[_t].disconnect(Et))}Z=null,K=null,b.reset();for(let _t in y)delete y[_t];if(t.setRenderTarget(z),S=null,_=null,v=null,r=null,A=null,Vt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(V.width,V.height,!1),k!==null){let _t=k.camera;_t.fov=k.fov,_t.zoom=k.zoom,_t.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_t){o=_t,i.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_t){h=_t,i.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(_t){d=_t},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(r,e)),v},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(_t){if(r=_t,r!==null){if(z=t.getRenderTarget(),r.addEventListener("select",lt),r.addEventListener("selectstart",lt),r.addEventListener("selectend",lt),r.addEventListener("squeeze",lt),r.addEventListener("squeezestart",lt),r.addEventListener("squeezeend",lt),r.addEventListener("end",dt),r.addEventListener("inputsourceschange",Tt),R.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(V),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,Qt=null,et=null;R.depth&&(et=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ot=R.stencil?gr:Mi,Qt=R.stencil?Ls:ui);let oe={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:o};v=this.getBinding(),_=v.createProjectionLayer(oe),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),A=new Nn(_.textureWidth,_.textureHeight,{format:Qn,type:Dn,depthTexture:new sr(_.textureWidth,_.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let Ot={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:o};S=new XRWebGLLayer(r,e,Ot),r.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),A=new Nn(S.framebufferWidth,S.framebufferHeight,{format:Qn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(u),d=null,l=await r.requestReferenceSpace(h),Vt.setContext(r),Vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Tt(_t){for(let Et=0;Et<_t.removed.length;Et++){let Ot=_t.removed[Et],Qt=D.indexOf(Ot);Qt>=0&&(D[Qt]=null,L[Qt].disconnect(Ot))}for(let Et=0;Et<_t.added.length;Et++){let Ot=_t.added[Et],Qt=D.indexOf(Ot);if(Qt===-1){for(let oe=0;oe<L.length;oe++)if(oe>=D.length){D.push(Ot),Qt=oe;break}else if(D[oe]===null){D[oe]=Ot,Qt=oe;break}if(Qt===-1)break}let et=L[Qt];et&&et.connect(Ot)}}let xt=new ht,Ct=new ht;function Nt(_t,Et,Ot){xt.setFromMatrixPosition(Et.matrixWorld),Ct.setFromMatrixPosition(Ot.matrixWorld);let Qt=xt.distanceTo(Ct),et=Et.projectionMatrix.elements,oe=Ot.projectionMatrix.elements,Ue=et[14]/(et[10]-1),ue=et[14]/(et[10]+1),pe=(et[9]+1)/et[5],me=(et[9]-1)/et[5],fe=(et[8]-1)/et[0],Te=(oe[8]+1)/oe[0],ne=Ue*fe,Ce=Ue*Te,ve=Qt/(-fe+Te),Ae=ve*-fe;if(Et.matrixWorld.decompose(_t.position,_t.quaternion,_t.scale),_t.translateX(Ae),_t.translateZ(ve),_t.matrixWorld.compose(_t.position,_t.quaternion,_t.scale),_t.matrixWorldInverse.copy(_t.matrixWorld).invert(),et[10]===-1)_t.projectionMatrix.copy(Et.projectionMatrix),_t.projectionMatrixInverse.copy(Et.projectionMatrixInverse);else{let at=Ue+ve,ze=ue+ve,Se=ne-Ae,X=Ce+(Qt-Ae),P=pe*ue/ze*at,it=me*ue/ze*at;_t.projectionMatrix.makePerspective(Se,X,P,it,at,ze),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert()}}function ct(_t,Et){Et===null?_t.matrixWorld.copy(_t.matrix):_t.matrixWorld.multiplyMatrices(Et.matrixWorld,_t.matrix),_t.matrixWorldInverse.copy(_t.matrixWorld).invert()}this.updateCamera=function(_t){if(r===null)return;let Et=_t.near,Ot=_t.far;b.texture!==null&&(b.depthNear>0&&(Et=b.depthNear),b.depthFar>0&&(Ot=b.depthFar)),q.near=Y.near=H.near=Et,q.far=Y.far=H.far=Ot,(Z!==q.near||K!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),Z=q.near,K=q.far),q.layers.mask=_t.layers.mask|6,H.layers.mask=q.layers.mask&-5,Y.layers.mask=q.layers.mask&-3;let Qt=_t.parent,et=q.cameras;ct(q,Qt);for(let oe=0;oe<et.length;oe++)ct(et[oe],Qt);et.length===2?Nt(q,H,Y):q.projectionMatrix.copy(H.projectionMatrix),k===null&&_t.isPerspectiveCamera&&(k={camera:_t,fov:_t.fov,zoom:_t.zoom}),It(_t,q,Qt)};function It(_t,Et,Ot){Ot===null?_t.matrix.copy(Et.matrixWorld):(_t.matrix.copy(Ot.matrixWorld),_t.matrix.invert(),_t.matrix.multiply(Et.matrixWorld)),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.updateMatrixWorld(!0),_t.projectionMatrix.copy(Et.projectionMatrix),_t.projectionMatrixInverse.copy(Et.projectionMatrixInverse),_t.isPerspectiveCamera&&(_t.fov=vs*2*Math.atan(1/_t.projectionMatrix.elements[5]),_t.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(_===null&&S===null))return u},this.setFoveation=function(_t){u=_t,_!==null&&(_.fixedFoveation=_t),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=_t)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(q)},this.getCameraTexture=function(_t){return y[_t]};let Xt=null;function Gt(_t,Et){if(g=Et.getViewerPose(d||l),w=Et,g!==null){let Ot=g.views;S!==null&&(t.setRenderTargetFramebuffer(A,S.framebuffer),t.setRenderTarget(A));let Qt=!1;Ot.length!==q.cameras.length&&(q.cameras.length=0,Qt=!0);for(let ue=0;ue<Ot.length;ue++){let pe=Ot[ue],me=null;if(S!==null)me=S.getViewport(pe);else{let Te=v.getViewSubImage(_,pe);me=Te.viewport,ue===0&&(t.setRenderTargetTextures(A,Te.colorTexture,Te.depthStencilTexture),t.setRenderTarget(A))}let fe=J[ue];fe===void 0&&(fe=new Sn,fe.layers.enable(ue),fe.viewport=new Ke,J[ue]=fe),fe.matrix.fromArray(pe.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(pe.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(me.x,me.y,me.width,me.height),ue===0&&(q.matrix.copy(fe.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Qt===!0&&q.cameras.push(fe)}let et=r.enabledFeatures;if(et&&et.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){v=i.getBinding();let ue=v.getDepthInformation(Ot[0]);ue&&ue.isValid&&ue.texture&&b.init(ue,r.renderState)}if(et&&et.includes("camera-access")&&E){t.state.unbindTexture(),v=i.getBinding();for(let ue=0;ue<Ot.length;ue++){let pe=Ot[ue].camera;if(pe){let me=y[pe];me||(me=new yo,y[pe]=me);let fe=v.getCameraImage(pe);me.sourceTexture=fe}}}}for(let Ot=0;Ot<L.length;Ot++){let Qt=D[Ot],et=L[Ot];Qt!==null&&et!==void 0&&et.update(Qt,Et,d||l)}Xt&&Xt(_t,Et),Et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Et}),w=null}let Vt=new op;Vt.setAnimationLoop(Gt),this.setAnimationLoop=function(_t){Xt=_t},this.dispose=function(){}}},HM=new Xe,fp=new be;fp.set(-1,0,0,0,1,0,0,0,1);WM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;cc=class{constructor(t={}){let{canvas:e=Id(),context:i=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:h=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:S=Dn}=t;this.isWebGLRenderer=!0;let w;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=i.getContextAttributes().alpha}else w=l;let E=S,b=new Set([El,wl,Sl]),y=new Set([Dn,ui,Rs,Ls,Ml,bl]),R=new Uint32Array(4),z=new Int32Array(4),A=new ht,L=null,D=null,V=[],C=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,Y=!1,J=null,q=null,Z=null,K=null;this._outputColorSpace=Cn;let lt=0,dt=0,Tt=null,xt=-1,Ct=null,Nt=new Ke,ct=new Ke,It=null,Xt=new Me(0),Gt=0,Vt=e.width,_t=e.height,Et=1,Ot=null,Qt=null,et=new Ke(0,0,Vt,_t),oe=new Ke(0,0,Vt,_t),Ue=!1,ue=new Ss,pe=!1,me=!1,fe=new Xe,Te=new ht,ne=new Ke,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function Ae(){return Tt===null?Et:1}let at=i;function ze(F,rt){return e.getContext(F,rt)}let Se,X,P,it,mt,Pt,kt,Wt,Mt,Dt,Yt,Kt,B,W,j,st,yt,$,St,pt,ut,Ut,wt;try{let F={alpha:!0,depth:r,stencil:o,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",Tn,!1),at===null){let rt="webgl2";if(at=ze(rt,F),at===null)throw ze(rt)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(F){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),_e("WebGLRenderer: "+F.message),F}function Ft(){Se=new Qy(at),Se.init(),ut=new kM(at,Se),X=new Gy(at,Se,t,ut),P=new UM(at,Se),X.reversedDepthBuffer&&_&&P.buffers.depth.setReversed(!0),q=at.createFramebuffer(),Z=at.createFramebuffer(),K=at.createFramebuffer(),it=new nx(at),mt=new SM,Pt=new BM(at,Se,P,mt,X,ut,it),kt=new Ky(H),Wt=new r_(at),Ut=new Vy(at,Wt),Mt=new tx(at,Wt,it,Ut),Dt=new rx(at,Mt,Wt,Ut,it),$=new ix(at,X,Pt),j=new Xy(mt),Yt=new bM(H,kt,Se,X,Ut,j),Kt=new GM(H,mt),B=new EM,W=new RM(Se),yt=new zy(H,kt,P,Dt,w,u),st=new FM(H,Dt,X),wt=new XM(at,it,X,P),St=new Hy(at,Se,it),pt=new ex(at,Se,it),it.programs=Yt.programs,H.capabilities=X,H.extensions=Se,H.properties=mt,H.renderLists=B,H.shadowMap=st,H.state=P,H.info=it}E!==Dn&&(k=new ox(E,e.width,e.height,h,r,o));let te=new mu(H,at);this.xr=te,this.getContext=function(){return at},this.getContextAttributes=function(){return at.getContextAttributes()},this.forceContextLoss=function(){let F=Se.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=Se.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(F){F!==void 0&&(Et=F,this.setSize(Vt,_t,!1))},this.getSize=function(F){return F.set(Vt,_t)},this.setSize=function(F,rt,bt=!0){if(te.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=F,_t=rt,e.width=Math.floor(F*Et),e.height=Math.floor(rt*Et),bt===!0&&(e.style.width=F+"px",e.style.height=rt+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,F,rt)},this.getDrawingBufferSize=function(F){return F.set(Vt*Et,_t*Et).floor()},this.setDrawingBufferSize=function(F,rt,bt){Vt=F,_t=rt,Et=bt,e.width=Math.floor(F*bt),e.height=Math.floor(rt*bt),this.setViewport(0,0,F,rt)},this.setEffects=function(F){if(E===Dn){_e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let rt=0;rt<F.length;rt++)if(F[rt].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(Nt)},this.getViewport=function(F){return F.copy(et)},this.setViewport=function(F,rt,bt,gt){F.isVector4?et.set(F.x,F.y,F.z,F.w):et.set(F,rt,bt,gt),P.viewport(Nt.copy(et).multiplyScalar(Et).round())},this.getScissor=function(F){return F.copy(oe)},this.setScissor=function(F,rt,bt,gt){F.isVector4?oe.set(F.x,F.y,F.z,F.w):oe.set(F,rt,bt,gt),P.scissor(ct.copy(oe).multiplyScalar(Et).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(F){P.setScissorTest(Ue=F)},this.setOpaqueSort=function(F){Ot=F},this.setTransparentSort=function(F){Qt=F},this.getClearColor=function(F){return F.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(F=!0,rt=!0,bt=!0){let gt=0;if(F){let vt=!1;if(Tt!==null){let Zt=Tt.texture.format;vt=b.has(Zt)}if(vt){let Zt=Tt.texture.type,Ht=y.has(Zt),qt=yt.getClearColor(),ie=yt.getClearAlpha(),se=qt.r,$t=qt.g,ge=qt.b;Ht?(R[0]=se,R[1]=$t,R[2]=ge,R[3]=ie,at.clearBufferuiv(at.COLOR,0,R)):(z[0]=se,z[1]=$t,z[2]=ge,z[3]=ie,at.clearBufferiv(at.COLOR,0,z))}else gt|=at.COLOR_BUFFER_BIT}rt&&(gt|=at.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),bt&&(gt|=at.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),gt!==0&&at.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),J=F},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),yt.dispose(),B.dispose(),W.dispose(),mt.dispose(),kt.dispose(),Dt.dispose(),Ut.dispose(),wt.dispose(),Yt.dispose(),te.dispose(),te.removeEventListener("sessionstart",Or),te.removeEventListener("sessionend",Fr),Ln.stop()};function Pe(F){F.preventDefault(),co("WebGLRenderer: Context Lost."),Y=!0}function De(){co("WebGLRenderer: Context Restored."),Y=!1;let F=it.autoReset,rt=st.enabled,bt=st.autoUpdate,gt=st.needsUpdate,vt=st.type;Ft(),it.autoReset=F,st.enabled=rt,st.autoUpdate=bt,st.needsUpdate=gt,st.type=vt}function Tn(F){_e("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Rn(F){let rt=F.target;rt.removeEventListener("dispose",Rn),Bs(rt)}function Bs(F){vr(F),mt.remove(F)}function vr(F){let rt=mt.get(F).programs;rt!==void 0&&(rt.forEach(function(bt){Yt.releaseProgram(bt)}),F.isShaderMaterial&&Yt.releaseShaderCache(F))}this.renderBufferDirect=function(F,rt,bt,gt,vt,Zt){rt===null&&(rt=Ce);let Ht=vt.isMesh&&vt.matrixWorld.determinantAffine()<0,qt=mi(F,rt,bt,gt,vt);P.setMaterial(gt,Ht);let ie=bt.index,se=1;if(gt.wireframe===!0){if(ie=Mt.getWireframeAttribute(bt),ie===void 0)return;se=2}let $t=bt.drawRange,ge=bt.attributes.position,ee=$t.start*se,Oe=($t.start+$t.count)*se;Zt!==null&&(ee=Math.max(ee,Zt.start*se),Oe=Math.min(Oe,(Zt.start+Zt.count)*se)),ie!==null?(ee=Math.max(ee,0),Oe=Math.min(Oe,ie.count)):ge!=null&&(ee=Math.max(ee,0),Oe=Math.min(Oe,ge.count));let qe=Oe-ee;if(qe<0||qe===1/0)return;Ut.setup(vt,gt,qt,bt,ie);let Re,s=St;if(ie!==null&&(Re=Wt.get(ie),s=pt,s.setIndex(Re)),vt.isMesh)gt.wireframe===!0?(P.setLineWidth(gt.wireframeLinewidth*Ae()),s.setMode(at.LINES)):s.setMode(at.TRIANGLES);else if(vt.isLine){let a=gt.linewidth;a===void 0&&(a=1),P.setLineWidth(a*Ae()),vt.isLineSegments?s.setMode(at.LINES):vt.isLineLoop?s.setMode(at.LINE_LOOP):s.setMode(at.LINE_STRIP)}else vt.isPoints?s.setMode(at.POINTS):vt.isSprite&&s.setMode(at.TRIANGLES);if(vt.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))s.renderMultiDraw(vt._multiDrawStarts,vt._multiDrawCounts,vt._multiDrawCount);else{let a=vt._multiDrawStarts,c=vt._multiDrawCounts,p=vt._multiDrawCount,x=ie?Wt.get(ie).bytesPerElement:1,I=mt.get(gt).currentProgram.getUniforms();for(let U=0;U<p;U++)I.setValue(at,"_gl_DrawID",U),s.render(a[U]/x,c[U])}else if(vt.isInstancedMesh)s.renderInstances(ee,qe,vt.count);else if(bt.isInstancedBufferGeometry){let a=bt._maxInstanceCount!==void 0?bt._maxInstanceCount:1/0,c=Math.min(bt.instanceCount,a);s.renderInstances(ee,qe,c)}else s.render(ee,qe)};function N(F,rt,bt,gt){J!==null&&F.isNodeMaterial&&J.setObject(gt,F),pe===!0&&j.setState(F,bt,!1),F.transparent===!0&&F.side===wn&&F.forceSinglePass===!1?(F.side=In,F.needsUpdate=!0,Xi(F,rt,gt),F.side=dr,F.needsUpdate=!0,Xi(F,rt,gt),F.side=wn):Xi(F,rt,gt)}this.compile=function(F,rt,bt=null){bt===null&&(bt=F),J!==null&&J.renderStart(F,rt,bt),D=W.get(bt),D.init(rt),C.push(D),bt.traverseVisible(function(vt){vt.isLight&&vt.layers.test(rt.layers)&&(D.pushLight(vt),vt.castShadow&&D.pushShadow(vt))}),F!==bt&&F.traverseVisible(function(vt){vt.isLight&&vt.layers.test(rt.layers)&&(D.pushLight(vt),vt.castShadow&&D.pushShadow(vt))}),D.setupLights(),J!==null&&J.updateLights(D.state.lightsArray),me=this.localClippingEnabled,pe=j.init(this.clippingPlanes,me),pe===!0&&j.setGlobalState(this.clippingPlanes,rt),J!==null&&st.render(D.state.shadowsArray,bt,rt);let gt=new Set;return F.traverse(function(vt){if(!(vt.isMesh||vt.isPoints||vt.isLine||vt.isSprite))return;let Zt=vt.material;if(Zt)if(Array.isArray(Zt))for(let Ht=0;Ht<Zt.length;Ht++){let qt=Zt[Ht];N(qt,bt,rt,vt),gt.add(qt)}else N(Zt,bt,rt,vt),gt.add(Zt)}),D=C.pop(),J!==null&&J.renderEnd(),gt},this.compileAsync=function(F,rt,bt=null){let gt=this.compile(F,rt,bt);return new Promise(vt=>{function Zt(){if(gt.forEach(function(Ht){let ie=mt.get(Ht).currentProgram;(ie===void 0||ie.isReady())&&gt.delete(Ht)}),gt.size===0){vt(F);return}setTimeout(Zt,10)}Se.get("KHR_parallel_shader_compile")!==null?Zt():setTimeout(Zt,10)})};let Ai=null;function Ne(F){Ai&&Ai(F)}function Or(){Ln.stop()}function Fr(){Ln.start()}let Ln=new op;Ln.setAnimationLoop(Ne),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(F){Ai=F,te.setAnimationLoop(F),F===null?Ln.stop():Ln.start()},te.addEventListener("sessionstart",Or),te.addEventListener("sessionend",Fr),this.render=function(F,rt){if(rt!==void 0&&rt.isCamera!==!0){_e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;J!==null&&J.renderStart(F,rt);let bt=te.enabled===!0&&te.isPresenting===!0,gt=k!==null&&(Tt===null||bt)&&k.begin(H,Tt);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(rt),rt=te.getCamera()),F.isScene===!0&&F.onBeforeRender(H,F,rt,Tt),D=W.get(F,C.length),D.init(rt),D.state.textureUnits=Pt.getTextureUnits(),C.push(D),fe.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),ue.setFromProjectionMatrix(fe,ai,rt.reversedDepth),me=this.localClippingEnabled,pe=j.init(this.clippingPlanes,me),L=B.get(F,V.length),L.init(),V.push(L),te.enabled===!0&&te.isPresenting===!0){let Ht=H.xr.getDepthSensingMesh();Ht!==null&&Yn(Ht,rt,-1/0,H.sortObjects)}Yn(F,rt,0,H.sortObjects),L.finish(),J!==null&&J.updateLights(D.state.lightsArray),H.sortObjects===!0&&L.sort(Ot,Qt),ve=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ve&&yt.addToRenderList(L,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&j.beginShadows();let vt=D.state.shadowsArray;if(st.render(vt,F,rt),pe===!0&&j.endShadows(),(gt&&k.hasRenderPass())===!1){let Ht=L.opaque,qt=L.transmissive;if(D.setupLights(),rt.isArrayCamera){let ie=rt.cameras;if(qt.length>0)for(let se=0,$t=ie.length;se<$t;se++){let ge=ie[se];pi(Ht,qt,F,ge)}ve&&yt.render(F);for(let se=0,$t=ie.length;se<$t;se++){let ge=ie[se];Ur(L,F,ge,ge.viewport)}}else qt.length>0&&pi(Ht,qt,F,rt),ve&&yt.render(F),Ur(L,F,rt)}Tt!==null&&dt===0&&(Pt.updateMultisampleRenderTarget(Tt),Pt.updateRenderTargetMipmap(Tt)),gt&&k.end(H),F.isScene===!0&&F.onAfterRender(H,F,rt),Ut.resetDefaultState(),xt=-1,Ct=null,C.pop(),C.length>0?(D=C[C.length-1],Pt.setTextureUnits(D.state.textureUnits),pe===!0&&j.setGlobalState(H.clippingPlanes,D.state.camera)):D=null,V.pop(),V.length>0?L=V[V.length-1]:L=null,J!==null&&J.renderEnd()};function Yn(F,rt,bt,gt){if(F.visible===!1)return;if(F.layers.test(rt.layers)){if(F.isGroup)bt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(rt);else if(F.isLightProbeGrid)D.pushLightProbeGrid(F);else if(F.isLight)D.pushLight(F),F.castShadow&&D.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(ue)){gt&&ne.setFromMatrixPosition(F.matrixWorld).applyMatrix4(fe);let Ht=Dt.update(F),qt=F.material;qt.visible&&L.push(F,Ht,qt,bt,ne.z,null,rt)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(ue))){let Ht=Dt.update(F),qt=F.material;if(gt&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),ne.copy(F.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),ne.copy(Ht.boundingSphere.center)),ne.applyMatrix4(F.matrixWorld).applyMatrix4(fe)),Array.isArray(qt)){let ie=Ht.groups;for(let se=0,$t=ie.length;se<$t;se++){let ge=ie[se],ee=qt[ge.materialIndex];ee&&ee.visible&&L.push(F,Ht,ee,bt,ne.z,ge,rt)}}else qt.visible&&L.push(F,Ht,qt,bt,ne.z,null,rt)}}let Zt=F.children;for(let Ht=0,qt=Zt.length;Ht<qt;Ht++)Yn(Zt[Ht],rt,bt,gt)}function Ur(F,rt,bt,gt){let{opaque:vt,transmissive:Zt,transparent:Ht}=F;D.setupLightsView(bt),pe===!0&&j.setGlobalState(H.clippingPlanes,bt),gt&&P.viewport(Nt.copy(gt)),vt.length>0&&Ci(vt,rt,bt),Zt.length>0&&Ci(Zt,rt,bt),Ht.length>0&&Ci(Ht,rt,bt),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function pi(F,rt,bt,gt){if((bt.isScene===!0?bt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[gt.id]===void 0){let ee=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[gt.id]=new Nn(1,1,{generateMipmaps:!0,type:ee?di:Dn,minFilter:mr,samples:Math.max(4,X.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}let Zt=D.state.transmissionRenderTarget[gt.id],Ht=gt.viewport||Nt;Zt.setSize(Ht.z*H.transmissionResolutionScale,Ht.w*H.transmissionResolutionScale);let qt=H.getRenderTarget(),ie=H.getActiveCubeFace(),se=H.getActiveMipmapLevel();H.setRenderTarget(Zt),H.getClearColor(Xt),Gt=H.getClearAlpha(),Gt<1&&H.setClearColor(16777215,.5),H.clear(),ve&&yt.render(bt);let $t=H.toneMapping;H.toneMapping=hi;let ge=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),D.setupLightsView(gt),pe===!0&&j.setGlobalState(H.clippingPlanes,gt),Ci(F,bt,gt),Pt.updateMultisampleRenderTarget(Zt),Pt.updateRenderTargetMipmap(Zt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Oe=0,qe=rt.length;Oe<qe;Oe++){let Re=rt[Oe],{object:s,geometry:a,material:c,group:p}=Re;if(c.side===wn&&s.layers.test(gt.layers)){let x=c.side;c.side=In,c.needsUpdate=!0,Br(s,bt,gt,a,c,p),c.side=x,c.needsUpdate=!0,ee=!0}}ee===!0&&(Pt.updateMultisampleRenderTarget(Zt),Pt.updateRenderTargetMipmap(Zt))}H.setRenderTarget(qt,ie,se),H.setClearColor(Xt,Gt),ge!==void 0&&(gt.viewport=ge),H.toneMapping=$t}function Ci(F,rt,bt){let gt=rt.isScene===!0?rt.overrideMaterial:null;for(let vt=0,Zt=F.length;vt<Zt;vt++){let Ht=F[vt],{object:qt,geometry:ie,group:se}=Ht,$t=Ht.material;$t.allowOverride===!0&&gt!==null&&($t=gt),qt.layers.test(bt.layers)&&Br(qt,rt,bt,ie,$t,se)}}function Br(F,rt,bt,gt,vt,Zt){J!==null&&vt.isNodeMaterial&&J.setObject(F,vt),F.onBeforeRender(H,rt,bt,gt,vt,Zt),F.modelViewMatrix.multiplyMatrices(bt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),vt.onBeforeRender(H,rt,bt,gt,F,Zt),vt.transparent===!0&&vt.side===wn&&vt.forceSinglePass===!1?(vt.side=In,vt.needsUpdate=!0,H.renderBufferDirect(bt,rt,gt,vt,F,Zt),vt.side=dr,vt.needsUpdate=!0,H.renderBufferDirect(bt,rt,gt,vt,F,Zt),vt.side=wn):H.renderBufferDirect(bt,rt,gt,vt,F,Zt),F.onAfterRender(H,rt,bt,gt,vt,Zt)}function Xi(F,rt,bt){rt.isScene!==!0&&(rt=Ce);let gt=mt.get(F),vt=D.state.lights,Zt=D.state.shadowsArray,Ht=vt.state.version,qt=Yt.getParameters(F,vt.state,Zt,rt,bt,D.state.lightProbeGridArray),ie=Yt.getProgramCacheKey(qt),se=gt.programs;gt.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?rt.environment:null,gt.fog=rt.fog;let $t=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;gt.envMap=kt.get(F.envMap||gt.environment,$t),gt.envMapRotation=gt.environment!==null&&F.envMap===null?rt.environmentRotation:F.envMapRotation,se===void 0&&(F.addEventListener("dispose",Rn),se=new Map,gt.programs=se);let ge=se.get(ie);if(ge!==void 0){if(gt.currentProgram===ge&&gt.lightsStateVersion===Ht)return zr(F,qt),ge}else qt.uniforms=Yt.getUniforms(F),J!==null&&F.isNodeMaterial&&J.build(F,bt,qt),F.onBeforeCompile(qt,H),ge=Yt.acquireProgram(qt,ie),se.set(ie,ge),gt.uniforms=qt.uniforms;let ee=gt.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(ee.clippingPlanes=j.uniform),zr(F,qt),gt.needsLights=Vs(F),gt.lightsStateVersion=Ht,gt.needsLights&&(ee.ambientLightColor.value=vt.state.ambient,ee.lightProbe.value=vt.state.probe,ee.sunLights.value=vt.state.sun,ee.sunLightShadows.value=vt.state.sunShadow,ee.directionalLights.value=vt.state.directional,ee.directionalLightShadows.value=vt.state.directionalShadow,ee.spotLights.value=vt.state.spot,ee.spotLightShadows.value=vt.state.spotShadow,ee.rectAreaLights.value=vt.state.rectArea,ee.ltc_1.value=vt.state.rectAreaLTC1,ee.ltc_2.value=vt.state.rectAreaLTC2,ee.pointLights.value=vt.state.point,ee.pointLightShadows.value=vt.state.pointShadow,ee.hemisphereLights.value=vt.state.hemi,ee.sunShadowMatrix.value=vt.state.sunShadowMatrix,ee.sunShadowCascade.value=vt.state.sunShadowCascade,ee.directionalShadowMatrix.value=vt.state.directionalShadowMatrix,ee.spotLightMatrix.value=vt.state.spotLightMatrix,ee.spotLightMap.value=vt.state.spotLightMap,ee.pointShadowMatrix.value=vt.state.pointShadowMatrix),gt.lightProbeGrid=D.state.lightProbeGridArray.length>0,gt.currentProgram=ge,gt.uniformsList=null,ge}function kr(F){if(F.uniformsList===null){let rt=F.currentProgram.getUniforms();F.uniformsList=Os.seqWithValue(rt.seq,F.uniforms)}return F.uniformsList}function zr(F,rt){let bt=mt.get(F);bt.outputColorSpace=rt.outputColorSpace,bt.batching=rt.batching,bt.batchingColor=rt.batchingColor,bt.instancing=rt.instancing,bt.instancingColor=rt.instancingColor,bt.instancingMorph=rt.instancingMorph,bt.skinning=rt.skinning,bt.morphTargets=rt.morphTargets,bt.morphNormals=rt.morphNormals,bt.morphColors=rt.morphColors,bt.morphTargetsCount=rt.morphTargetsCount,bt.numClippingPlanes=rt.numClippingPlanes,bt.numIntersection=rt.numClipIntersection,bt.vertexAlphas=rt.vertexAlphas,bt.vertexTangents=rt.vertexTangents,bt.toneMapping=rt.toneMapping}function ks(F,rt){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;A.setFromMatrixPosition(rt.matrixWorld);for(let bt=0,gt=F.length;bt<gt;bt++){let vt=F[bt];if(vt.texture!==null&&vt.boundingBox.containsPoint(A))return vt}return null}function mi(F,rt,bt,gt,vt){rt.isScene!==!0&&(rt=Ce),Pt.resetTextureUnits();let Zt=rt.fog,Ht=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial?rt.environment:null,qt=Tt===null?H.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Le.workingColorSpace,ie=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial&&!gt.envMap||gt.isMeshPhongMaterial&&!gt.envMap,se=kt.get(gt.envMap||Ht,ie),$t=gt.vertexColors===!0&&!!bt.attributes.color&&bt.attributes.color.itemSize===4,ge=!!bt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),ee=!!bt.morphAttributes.position,Oe=!!bt.morphAttributes.normal,qe=!!bt.morphAttributes.color,Re=hi;gt.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Re=H.toneMapping);let s=bt.morphAttributes.position||bt.morphAttributes.normal||bt.morphAttributes.color,a=s!==void 0?s.length:0,c=mt.get(gt),p=D.state.lights;if(pe===!0&&(me===!0||F!==Ct)){let Bt=F===Ct&&gt.id===xt;j.setState(gt,F,Bt)}let x=!1;gt.version===c.__version?(c.needsLights&&c.lightsStateVersion!==p.state.version||c.outputColorSpace!==qt||vt.isBatchedMesh&&c.batching===!1||!vt.isBatchedMesh&&c.batching===!0||vt.isBatchedMesh&&c.batchingColor===!0&&vt._colorsTexture===null||vt.isBatchedMesh&&c.batchingColor===!1&&vt._colorsTexture!==null||vt.isInstancedMesh&&c.instancing===!1||!vt.isInstancedMesh&&c.instancing===!0||vt.isSkinnedMesh&&c.skinning===!1||!vt.isSkinnedMesh&&c.skinning===!0||vt.isInstancedMesh&&c.instancingColor===!0&&vt.instanceColor===null||vt.isInstancedMesh&&c.instancingColor===!1&&vt.instanceColor!==null||vt.isInstancedMesh&&c.instancingMorph===!0&&vt.morphTexture===null||vt.isInstancedMesh&&c.instancingMorph===!1&&vt.morphTexture!==null||c.envMap!==se||gt.fog===!0&&c.fog!==Zt||c.numClippingPlanes!==void 0&&(c.numClippingPlanes!==j.numPlanes||c.numIntersection!==j.numIntersection)||c.vertexAlphas!==$t||c.vertexTangents!==ge||c.morphTargets!==ee||c.morphNormals!==Oe||c.morphColors!==qe||c.toneMapping!==Re||c.morphTargetsCount!==a||!!c.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(x=!0):(x=!0,c.__version=gt.version);let I=c.currentProgram;x===!0&&(I=Xi(gt,rt,vt),J&&gt.isNodeMaterial&&J.onUpdateProgram(gt,I,c));let U=!1,Q=!1,nt=!1,ft=I.getUniforms(),Lt=c.uniforms;if(P.useProgram(I.program)&&(U=!0,Q=!0,nt=!0),gt.id!==xt&&(xt=gt.id,Q=!0),c.needsLights){let Bt=ks(D.state.lightProbeGridArray,vt);c.lightProbeGrid!==Bt&&(c.lightProbeGrid=Bt,Q=!0)}if(U||Ct!==F){P.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),ft.setValue(at,"projectionMatrix",F.projectionMatrix),ft.setValue(at,"viewMatrix",F.matrixWorldInverse);let ae=ft.map.cameraPosition;ae!==void 0&&ae.setValue(at,Te.setFromMatrixPosition(F.matrixWorld)),X.logarithmicDepthBuffer&&ft.setValue(at,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&ft.setValue(at,"isOrthographic",F.isOrthographicCamera===!0),Ct!==F&&(Ct=F,Q=!0,nt=!0)}if(c.needsLights&&(p.state.sunShadowMap.length>0&&ft.setValue(at,"sunShadowMap",p.state.sunShadowMap,Pt),p.state.directionalShadowMap.length>0&&ft.setValue(at,"directionalShadowMap",p.state.directionalShadowMap,Pt),p.state.spotShadowMap.length>0&&ft.setValue(at,"spotShadowMap",p.state.spotShadowMap,Pt),p.state.pointShadowMap.length>0&&ft.setValue(at,"pointShadowMap",p.state.pointShadowMap,Pt)),vt.isSkinnedMesh){ft.setOptional(at,vt,"bindMatrix"),ft.setOptional(at,vt,"bindMatrixInverse");let Bt=vt.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ft.setValue(at,"boneTexture",Bt.boneTexture,Pt))}vt.isBatchedMesh&&(ft.setOptional(at,vt,"batchingTexture"),ft.setValue(at,"batchingTexture",vt._matricesTexture,Pt),ft.setOptional(at,vt,"batchingIdTexture"),ft.setValue(at,"batchingIdTexture",vt._indirectTexture,Pt),ft.setOptional(at,vt,"batchingColorTexture"),vt._colorsTexture!==null&&ft.setValue(at,"batchingColorTexture",vt._colorsTexture,Pt));let Rt=bt.morphAttributes;if((Rt.position!==void 0||Rt.normal!==void 0||Rt.color!==void 0)&&$.update(vt,bt,I),(Q||c.receiveShadow!==vt.receiveShadow)&&(c.receiveShadow=vt.receiveShadow,ft.setValue(at,"receiveShadow",vt.receiveShadow)),(gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial)&&gt.envMap===null&&rt.environment!==null&&(Lt.envMapIntensity.value=rt.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=YM()),Q){if(ft.setValue(at,"toneMappingExposure",H.toneMappingExposure),c.needsLights&&zs(Lt,nt),Zt&&gt.fog===!0&&Kt.refreshFogUniforms(Lt,Zt),Kt.refreshMaterialUniforms(Lt,gt,Et,_t,D.state.transmissionRenderTarget[F.id]),c.needsLights&&c.lightProbeGrid){let Bt=c.lightProbeGrid;Lt.probesSH.value=Bt.texture,Lt.probesMin.value.copy(Bt.boundingBox.min),Lt.probesMax.value.copy(Bt.boundingBox.max),Lt.probesResolution.value.copy(Bt.resolution)}Os.upload(at,kr(c),Lt,Pt)}if(gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(Os.upload(at,kr(c),Lt,Pt),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&ft.setValue(at,"center",vt.center),ft.setValue(at,"modelViewMatrix",vt.modelViewMatrix),ft.setValue(at,"normalMatrix",vt.normalMatrix),ft.setValue(at,"modelMatrix",vt.matrixWorld),gt.uniformsGroups!==void 0){let Bt=gt.uniformsGroups;for(let ae=0,ye=Bt.length;ae<ye;ae++){let we=Bt[ae];wt.update(we,I),wt.bind(we,I)}}return I}function zs(F,rt){F.ambientLightColor.needsUpdate=rt,F.lightProbe.needsUpdate=rt,F.sunLights.needsUpdate=rt,F.sunLightShadows.needsUpdate=rt,F.directionalLights.needsUpdate=rt,F.directionalLightShadows.needsUpdate=rt,F.pointLights.needsUpdate=rt,F.pointLightShadows.needsUpdate=rt,F.spotLights.needsUpdate=rt,F.spotLightShadows.needsUpdate=rt,F.rectAreaLights.needsUpdate=rt,F.hemisphereLights.needsUpdate=rt}function Vs(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return dt},this.getRenderTarget=function(){return Tt},this.setRenderTargetTextures=function(F,rt,bt){let gt=mt.get(F);gt.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,gt.__autoAllocateDepthBuffer===!1&&(gt.__useRenderToTexture=!1),mt.get(F.texture).__webglTexture=rt,mt.get(F.depthTexture).__webglTexture=gt.__autoAllocateDepthBuffer?void 0:bt,gt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,rt){let bt=mt.get(F);bt.__webglFramebuffer=rt,bt.__useDefaultFramebuffer=rt===void 0},this.setRenderTarget=function(F,rt=0,bt=0){Tt=F,lt=rt,dt=bt;let gt=null,vt=!1,Zt=!1;if(F){let qt=mt.get(F);if(qt.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(at.FRAMEBUFFER,qt.__webglFramebuffer),Nt.copy(F.viewport),ct.copy(F.scissor),It=F.scissorTest,P.viewport(Nt),P.scissor(ct),P.setScissorTest(It),xt=-1;return}else if(qt.__webglFramebuffer===void 0)Pt.setupRenderTarget(F);else if(qt.__hasExternalTextures)Pt.rebindTextures(F,mt.get(F.texture).__webglTexture,mt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let $t=F.depthTexture;if(qt.__boundDepthTexture!==$t){if($t!==null&&mt.has($t)&&(F.width!==$t.image.width||F.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pt.setupDepthRenderbuffer(F)}}let ie=F.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Zt=!0);let se=mt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(se[rt])?gt=se[rt][bt]:gt=se[rt],vt=!0):F.samples>0&&Pt.useMultisampledRTT(F)===!1?gt=mt.get(F).__webglMultisampledFramebuffer:Array.isArray(se)?gt=se[bt]:gt=se,Nt.copy(F.viewport),ct.copy(F.scissor),It=F.scissorTest}else Nt.copy(et).multiplyScalar(Et).floor(),ct.copy(oe).multiplyScalar(Et).floor(),It=Ue;if(bt!==0&&(gt=q),P.bindFramebuffer(at.FRAMEBUFFER,gt)&&P.drawBuffers(F,gt),P.viewport(Nt),P.scissor(ct),P.setScissorTest(It),vt){let qt=mt.get(F.texture);at.framebufferTexture2D(at.FRAMEBUFFER,at.COLOR_ATTACHMENT0,at.TEXTURE_CUBE_MAP_POSITIVE_X+rt,qt.__webglTexture,bt)}else if(Zt){let qt=rt;for(let ie=0;ie<F.textures.length;ie++){let se=mt.get(F.textures[ie]);at.framebufferTextureLayer(at.FRAMEBUFFER,at.COLOR_ATTACHMENT0+ie,se.__webglTexture,bt,qt)}}else if(F!==null&&bt!==0){let qt=mt.get(F.texture);at.framebufferTexture2D(at.FRAMEBUFFER,at.COLOR_ATTACHMENT0,at.TEXTURE_2D,qt.__webglTexture,bt)}xt=-1};function Vr(F){let rt=mt.get(F);return(rt.__readFormat!==F.format||rt.__readType!==F.type)&&(rt.__readFormat=F.format,rt.__readType=F.type,rt.__formatReadable=X.textureFormatReadable(F.format),rt.__typeReadable=X.textureTypeReadable(F.type)),rt}this.readRenderTargetPixels=function(F,rt,bt,gt,vt,Zt,Ht,qt=0){if(!(F&&F.isWebGLRenderTarget)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=mt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ht!==void 0&&(ie=ie[Ht]),ie){P.bindFramebuffer(at.FRAMEBUFFER,ie);try{let se=F.textures[qt],$t=se.format,ge=se.type;F.textures.length>1&&at.readBuffer(at.COLOR_ATTACHMENT0+qt);let ee=Vr(se);if(ee.__formatReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ee.__typeReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=F.width-gt&&bt>=0&&bt<=F.height-vt&&at.readPixels(rt,bt,gt,vt,ut.convert($t),ut.convert(ge),Zt)}finally{let se=Tt!==null?mt.get(Tt).__webglFramebuffer:null;P.bindFramebuffer(at.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(F,rt,bt,gt,vt,Zt,Ht,qt=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ie=mt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ht!==void 0&&(ie=ie[Ht]),ie)if(rt>=0&&rt<=F.width-gt&&bt>=0&&bt<=F.height-vt){P.bindFramebuffer(at.FRAMEBUFFER,ie);let se=F.textures[qt],$t=se.format,ge=se.type;F.textures.length>1&&at.readBuffer(at.COLOR_ATTACHMENT0+qt);let ee=Vr(se);if(ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=at.createBuffer();at.bindBuffer(at.PIXEL_PACK_BUFFER,Oe),at.bufferData(at.PIXEL_PACK_BUFFER,Zt.byteLength,at.STREAM_READ),at.readPixels(rt,bt,gt,vt,ut.convert($t),ut.convert(ge),0),at.bindBuffer(at.PIXEL_PACK_BUFFER,null);let qe=Tt!==null?mt.get(Tt).__webglFramebuffer:null;P.bindFramebuffer(at.FRAMEBUFFER,qe);let Re=at.fenceSync(at.SYNC_GPU_COMMANDS_COMPLETE,0);return at.flush(),await Ld(at,Re,4),at.bindBuffer(at.PIXEL_PACK_BUFFER,Oe),at.getBufferSubData(at.PIXEL_PACK_BUFFER,0,Zt),at.bindBuffer(at.PIXEL_PACK_BUFFER,null),at.deleteBuffer(Oe),at.deleteSync(Re),Zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,rt=null,bt=0){let gt=Math.pow(2,-bt),vt=Math.floor(F.image.width*gt),Zt=Math.floor(F.image.height*gt),Ht=rt!==null?rt.x:0,qt=rt!==null?rt.y:0;Pt.setTexture2D(F,0),at.copyTexSubImage2D(at.TEXTURE_2D,bt,0,0,Ht,qt,vt,Zt),P.unbindTexture()},this.copyTextureToTexture=function(F,rt,bt=null,gt=null,vt=0,Zt=0){let Ht,qt,ie,se,$t,ge,ee,Oe,qe,Re=F.isCompressedTexture?F.mipmaps[Zt]:F.image;if(bt!==null)Ht=bt.max.x-bt.min.x,qt=bt.max.y-bt.min.y,ie=bt.isBox3?bt.max.z-bt.min.z:1,se=bt.min.x,$t=bt.min.y,ge=bt.isBox3?bt.min.z:0;else{let Lt=Math.pow(2,-vt);Ht=Math.floor(Re.width*Lt),qt=Math.floor(Re.height*Lt),F.isDataArrayTexture?ie=Re.depth:F.isData3DTexture?ie=Math.floor(Re.depth*Lt):ie=1,se=0,$t=0,ge=0}gt!==null?(ee=gt.x,Oe=gt.y,qe=gt.z):(ee=0,Oe=0,qe=0);let s=ut.convert(rt.format),a=ut.convert(rt.type),c;rt.isData3DTexture?(Pt.setTexture3D(rt,0),c=at.TEXTURE_3D):rt.isDataArrayTexture||rt.isCompressedArrayTexture?(Pt.setTexture2DArray(rt,0),c=at.TEXTURE_2D_ARRAY):(Pt.setTexture2D(rt,0),c=at.TEXTURE_2D),P.activeTexture(at.TEXTURE0),P.pixelStorei(at.UNPACK_FLIP_Y_WEBGL,rt.flipY),P.pixelStorei(at.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),P.pixelStorei(at.UNPACK_ALIGNMENT,rt.unpackAlignment);let p=P.getParameter(at.UNPACK_ROW_LENGTH),x=P.getParameter(at.UNPACK_IMAGE_HEIGHT),I=P.getParameter(at.UNPACK_SKIP_PIXELS),U=P.getParameter(at.UNPACK_SKIP_ROWS),Q=P.getParameter(at.UNPACK_SKIP_IMAGES);P.pixelStorei(at.UNPACK_ROW_LENGTH,Re.width),P.pixelStorei(at.UNPACK_IMAGE_HEIGHT,Re.height),P.pixelStorei(at.UNPACK_SKIP_PIXELS,se),P.pixelStorei(at.UNPACK_SKIP_ROWS,$t),P.pixelStorei(at.UNPACK_SKIP_IMAGES,ge);let nt=F.isDataArrayTexture||F.isData3DTexture,ft=rt.isDataArrayTexture||rt.isData3DTexture;if(F.isDepthTexture){let Lt=mt.get(F),Rt=mt.get(rt),Bt=mt.get(Lt.__renderTarget),ae=mt.get(Rt.__renderTarget);P.bindFramebuffer(at.READ_FRAMEBUFFER,Bt.__webglFramebuffer),P.bindFramebuffer(at.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ye=0;ye<ie;ye++)nt&&(at.framebufferTextureLayer(at.READ_FRAMEBUFFER,at.COLOR_ATTACHMENT0,mt.get(F).__webglTexture,vt,ge+ye),at.framebufferTextureLayer(at.DRAW_FRAMEBUFFER,at.COLOR_ATTACHMENT0,mt.get(rt).__webglTexture,Zt,qe+ye)),at.blitFramebuffer(se,$t,Ht,qt,ee,Oe,Ht,qt,at.DEPTH_BUFFER_BIT,at.NEAREST);P.bindFramebuffer(at.READ_FRAMEBUFFER,null),P.bindFramebuffer(at.DRAW_FRAMEBUFFER,null)}else if(vt!==0||F.isRenderTargetTexture||mt.has(F)){let Lt=mt.get(F),Rt=mt.get(rt);P.bindFramebuffer(at.READ_FRAMEBUFFER,Z),P.bindFramebuffer(at.DRAW_FRAMEBUFFER,K);for(let Bt=0;Bt<ie;Bt++)nt?at.framebufferTextureLayer(at.READ_FRAMEBUFFER,at.COLOR_ATTACHMENT0,Lt.__webglTexture,vt,ge+Bt):at.framebufferTexture2D(at.READ_FRAMEBUFFER,at.COLOR_ATTACHMENT0,at.TEXTURE_2D,Lt.__webglTexture,vt),ft?at.framebufferTextureLayer(at.DRAW_FRAMEBUFFER,at.COLOR_ATTACHMENT0,Rt.__webglTexture,Zt,qe+Bt):at.framebufferTexture2D(at.DRAW_FRAMEBUFFER,at.COLOR_ATTACHMENT0,at.TEXTURE_2D,Rt.__webglTexture,Zt),vt!==0?at.blitFramebuffer(se,$t,Ht,qt,ee,Oe,Ht,qt,at.COLOR_BUFFER_BIT,at.NEAREST):ft?at.copyTexSubImage3D(c,Zt,ee,Oe,qe+Bt,se,$t,Ht,qt):at.copyTexSubImage2D(c,Zt,ee,Oe,se,$t,Ht,qt);P.bindFramebuffer(at.READ_FRAMEBUFFER,null),P.bindFramebuffer(at.DRAW_FRAMEBUFFER,null)}else ft?F.isDataTexture||F.isData3DTexture?at.texSubImage3D(c,Zt,ee,Oe,qe,Ht,qt,ie,s,a,Re.data):rt.isCompressedArrayTexture?at.compressedTexSubImage3D(c,Zt,ee,Oe,qe,Ht,qt,ie,s,Re.data):at.texSubImage3D(c,Zt,ee,Oe,qe,Ht,qt,ie,s,a,Re):F.isDataTexture?at.texSubImage2D(at.TEXTURE_2D,Zt,ee,Oe,Ht,qt,s,a,Re.data):F.isCompressedTexture?at.compressedTexSubImage2D(at.TEXTURE_2D,Zt,ee,Oe,Re.width,Re.height,s,Re.data):at.texSubImage2D(at.TEXTURE_2D,Zt,ee,Oe,Ht,qt,s,a,Re);P.pixelStorei(at.UNPACK_ROW_LENGTH,p),P.pixelStorei(at.UNPACK_IMAGE_HEIGHT,x),P.pixelStorei(at.UNPACK_SKIP_PIXELS,I),P.pixelStorei(at.UNPACK_SKIP_ROWS,U),P.pixelStorei(at.UNPACK_SKIP_IMAGES,Q),Zt===0&&rt.generateMipmaps&&at.generateMipmap(c),P.unbindTexture()},this.initRenderTarget=function(F){mt.get(F).__webglFramebuffer===void 0&&Pt.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?Pt.setTextureCube(F,0):F.isData3DTexture?Pt.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?Pt.setTexture2DArray(F,0):Pt.setTexture2D(F,0),P.unbindTexture()},this.resetState=function(){lt=0,dt=0,Tt=null,P.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}}});function ZM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function jM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function JM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mp),this.state=We.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function KM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ur.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=We.DOLLY;break;case ur.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=We.ROTATE}break;case ur.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(_u)}function QM(n){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function tb(n){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(n.preventDefault(),this.dispatchEvent(_u),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(mp))}function eb(n){this.enabled!==!1&&this._handleKeyDown(n)}function nb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=We.TOUCH_ROTATE;break;case fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=We.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(_u)}function ib(n){switch(this._trackPointer(n),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=We.NONE}}function rb(n){this.enabled!==!1&&n.preventDefault()}function sb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ob(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var dp,_u,mp,dc,pp,qM,hn,On,We,gu,pc,gp=mn(()=>{fc();dp={type:"change"},_u={type:"start"},mp={type:"end"},dc=new rr,pp=new zn,qM=Math.cos(70*Zh.DEG2RAD),hn=new ht,On=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gu=1e-6,pc=class extends Po{constructor(t,e=null){super(t,e),this.state=We.NONE,this.target=new ht,this.cursor=new ht,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ur.ROTATE,MIDDLE:ur.DOLLY,RIGHT:ur.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ht,this._lastQuaternion=new Vn,this._lastTargetPosition=new ht,this._quat=new Vn().setFromUnitVectors(t.up,new ht(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cs,this._sphericalDelta=new Cs,this._scale=1,this._panOffset=new ht,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new ht,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jM.bind(this),this._onPointerDown=ZM.bind(this),this._onPointerUp=JM.bind(this),this._onContextMenu=rb.bind(this),this._onMouseWheel=tb.bind(this),this._onKeyDown=eb.bind(this),this._onTouchStart=nb.bind(this),this._onTouchMove=ib.bind(this),this._onMouseDown=KM.bind(this),this._onMouseMove=QM.bind(this),this._interceptControlDown=sb.bind(this),this._interceptControlUp=ob.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=We.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dp),this.update(),this.state=We.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;hn.copy(e).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=On:i>Math.PI&&(i-=On),r<-Math.PI?r+=On:r>Math.PI&&(r-=On),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),e.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let h=hn.length();l=this._clampDistance(h*this._scale);let u=h-l;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),o=!!u}else if(this.object.isOrthographicCamera){let h=new ht(this._mouse.x,this._mouse.y,0);h.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=u!==this.object.zoom;let d=new ht(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),l=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(dc.origin.copy(this.object.position),dc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dc.direction))<qM?this.object.lookAt(this.target):(pp.setFromNormalAndCoplanarPoint(this.object.up,this.target),dc.intersectPlane(pp,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>gu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gu||this._lastTargetPosition.distanceToSquared(this.target)>gu?(this.dispatchEvent(dp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?On/60*this.autoRotateSpeed*t:On/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){hn.setFromMatrixColumn(e,0),hn.multiplyScalar(-t),this._panOffset.add(hn)}_panUp(t,e){this.screenSpacePanning===!0?hn.setFromMatrixColumn(e,1):(hn.setFromMatrixColumn(e,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(t),this._panOffset.add(hn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;hn.copy(r).sub(this.target);let o=hn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,o=e-i.top,l=i.width,h=i.height;this._mouse.x=r/l*2-1,this._mouse.y=-(o/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(On*this._rotateDelta.x/e.clientHeight),this._rotateUp(On*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(On*this._rotateDelta.x/e.clientHeight),this._rotateUp(On*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(l,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ce,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function _p(n,t,e,i){n.onBeforeCompile=r=>{r.uniforms.uCut={value:t-.05},r.uniforms.uBase={value:i||new Me(1,1,1)},r.uniforms.uBottom={value:t},r.vertexShader=`varying float vZ;
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
diffuseColor.rgb = mix(diffuseColor.rgb, uBase, onWall);`).replace("#include <normal_fragment_begin>",Ee.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")+`
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function vp(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let r=i.getContext("2d");r.font="600 84px Inter, system-ui, sans-serif",r.fillStyle="#"+new Me(t).getHexString(),r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,64);let o=new vo(i);o.colorSpace=Cn;let l=new go(new bs({map:o,depthTest:!1,transparent:!0}));return l.scale.set(e*2,e,1),l.renderOrder=6,l}var Fn,Us,ab,mc,yp=mn(()=>{fc();gp();Fn={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa",rough3d:"#f5a524",rest3d:"#e3c341",finish3d:"#ff7a59"},Us={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};ab=(n,t)=>n.some(e=>e.key===t);mc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new cc({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new uo,this.camera=new Sn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new pc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new Eo(16777215,4478310,1.6));let t=new As(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new As(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new Kn,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=r=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&r-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=r,this.onFrame&&this.onFrame(r),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,r=new ht((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),l=new ht(-.45,-.8,.75).normalize(),h=[];for(let v of[t[0],e[0]])for(let _ of[t[1],e[1]])for(let S of[t[2],e[2]])h.push(new ht(v,_,S));let u=r.clone(),d=o*2,g=()=>{this.camera.position.copy(u).addScaledVector(l,d),this.camera.near=d/100,this.camera.far=d*100,this.camera.lookAt(u),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let v=0;v<8;v++){g();let _=1/0,S=-1/0,w=1/0,E=-1/0;for(let L of h){let D=L.clone().project(this.camera);_=Math.min(_,D.x),S=Math.max(S,D.x),w=Math.min(w,D.y),E=Math.max(E,D.y)}let b=Math.max((S-_)/2,(E-w)/2);if(!(b>0))break;let y=d*Math.tan(this.camera.fov*Math.PI/360),R=y*this.camera.aspect,z=new ht().setFromMatrixColumn(this.camera.matrixWorld,0),A=new ht().setFromMatrixColumn(this.camera.matrixWorld,1);u.addScaledVector(z,(_+S)/2*R).addScaledVector(A,(w+E)/2*y),d*=b/(1-i)}g(),this.controls.target.copy(u),this.controls.update()}showPart(t,e=[]){this.clear();let i=new Je;i.setAttribute("position",new Ye(t.positions,3)),i.setIndex(new Ye(t.indices,1)),i.computeVertexNormals();let r=new Be(i,new Xn({color:9348283,metalness:.15,roughness:.55,side:wn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(r),this.pickMesh=r;let o=new Pr(new Es(i,25),new ci({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let h of e)this.addLoops(h.loops,h.z,h.color,h.dashed,h.opacity);i.computeBoundingBox();let l=i.boundingBox;this.keepCamera||this.frame(l.min.toArray(),l.max.toArray())}addLoops(t,e,i,r,o=.95){for(let l of t){let h=l.map(([v,_])=>new ht(v,_,e)),u=new Je().setFromPoints([...h,h[0]]),d=r?new bo({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new ci({color:i,transparent:!0,opacity:o,depthTest:!1}),g=new Cr(u,d);r&&g.computeLineDistances(),g.renderOrder=2,this.content.add(g)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let r=t.getBoundingClientRect(),o=new Ao;if(o.setFromCamera(new ce((i.clientX-r.left)/r.width*2-1,-((i.clientY-r.top)/r.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let u=o.intersectObjects(this.markers)[0];if(u?.object.userData.axis){this.onAxis?.(u.object.userData.axis);return}if(u){this.onMarker(u.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let l=o.intersectObject(this.pickMesh)[0];if(!l||!l.face)return;let h=l.face.normal.clone();h.dot(o.ray.direction)>0&&h.negate(),this.onPick([h.x,h.y,h.z])})}showZero({stock:t,part:e,points:i,selected:r,zFace:o,color:l,accent:h="#4c6ef5"}){this.clear();let u=t.maxX-t.minX,d=t.maxY-t.minY,g=t.top-t.bottom,v=Math.max(u,d,g),_=new or(u,d,g);_.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let S=new Be(_,new Xn({color:l,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(S.renderOrder=2,this.content.add(S),this.content.add(new Pr(new Es(_),new ci({color:new Me(l).multiplyScalar(.6)}))),e){let y=new Je;y.setAttribute("position",new Ye(e.positions,3)),y.setIndex(new Ye(e.indices,1)),y.computeVertexNormals(),this.partMesh=new Be(y,new Xn({color:9348283,metalness:.15,roughness:.55})),this.content.add(this.partMesh)}else this.partMesh=null;let w=o==="bed"?t.bottom:t.top,E=v*.014;this.markers=[];for(let y of i){let R=y.key===r,z=new Be(new ar(R?E*1.3:E,24,16),new Hn({color:R?h:16777215}));if(z.position.set(y.x,y.y,w),z.userData.key=y.key,z.renderOrder=4,z.material.depthTest=!1,!R){let L=new Be(new ar(E*1.25,24,16),new Hn({color:6187893,depthTest:!1}));L.renderOrder=3,z.add(L)}let A=new Be(new ar(E*3.5,12,8),new Hn({visible:!1}));if(A.userData.key=y.key,z.add(A),this.markers.push(A),this.content.add(z),R){let L=new Be(new Mo(E*1.6,E*2,40),new Hn({color:h,transparent:!0,depthTest:!1,side:wn}));L.position.copy(z.position),L.renderOrder=4,this.content.add(L),this.pulse=L;let D=v*.24;for(let[V,C,k]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let H=new Co(new ht(...V),z.position,D,C,D*.15,D*.065);H.line.visible=!1;let Y=new Be(new Si(v*.0028,v*.0028,D*.86,12),new Hn({color:C,depthTest:!1}));Y.position.y=D*.43,Y.renderOrder=5,H.add(Y),H.cone.material.depthTest=!1,H.renderOrder=5,H.cone.renderOrder=5,this.content.add(H);let J=vp(k,C,v*.05);J.position.copy(z.position).add(new ht(...V).multiplyScalar(D*1.18)),this.content.add(J);let q=new Be(new Si(D*.1,D*.1,D*1.3,10),new Hn({visible:!1}));q.quaternion.setFromUnitVectors(new ht(0,1,0),new ht(...V)),q.position.copy(z.position).add(new ht(...V).multiplyScalar(D*.65)),q.userData.axis=k.toLowerCase(),this.content.add(q),this.markers.unshift(q)}}}let b=vp("Front",9675444,v*.04);b.position.set((t.minX+t.maxX)/2,t.minY-v*.08,t.bottom),this.content.add(b),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),ab(i,r)||(this.pulse=null),this.onFrame=y=>{if(!this.pulse)return;let R=y%1600/1600;this.pulse.scale.setScalar(1+R*1.6),this.pulse.material.opacity=.8*(1-R),this.pulse.lookAt(this.camera.position)}}spin(t,e=700){let i=this.partMesh;if(!i)return Promise.resolve();i.geometry.computeBoundingBox();let r=i.geometry.boundingBox.getCenter(new ht),o=t==="x"?new ht(1,0,0):new ht(0,0,1);i.matrixAutoUpdate=!1;let l=performance.now();return new Promise(h=>{let u=d=>{let g=Math.min(1,(d-l)/e),v=g<.5?2*g*g:1-(-2*g+2)**2/2;i.matrix.makeTranslation(r.x,r.y,r.z).multiply(new Xe().makeRotationAxis(o,Math.PI*v)).multiply(new Xe().makeTranslation(-r.x,-r.y,-r.z)),i.matrixWorldNeedsUpdate=!0,g<1&&i.parent?requestAnimationFrame(u):h()};requestAnimationFrame(u)})}showStock(t,e,i){this.clear(),this.keepCamera=!1;let r=t.nx,o=t.ny,l=r*o,h=new Float32Array(l*3),u=new Float32Array(l*3),d=new Me(e);for(let R=0;R<o;R++)for(let z=0;z<r;z++){let A=R*r+z;h[A*3]=t.x0+z*t.cell,h[A*3+1]=t.y0+R*t.cell,h[A*3+2]=t.h[A],u[A*3]=d.r,u[A*3+1]=d.g,u[A*3+2]=d.b}let g=new Uint32Array((r-1)*(o-1)*6),v=0;for(let R=0;R<o-1;R++)for(let z=0;z<r-1;z++){let A=R*r+z,L=A+1,D=A+r,V=D+1;g[v++]=A,g[v++]=L,g[v++]=V,g[v++]=A,g[v++]=V,g[v++]=D}let _=new Je;_.setAttribute("position",new Ye(h,3).setUsage(Lr)),_.setAttribute("color",new Ye(u,3).setUsage(Lr));let S=new Float32Array(l*3);for(let R=0;R<l;R++)S[R*3+2]=1;_.setAttribute("normal",new Ye(S,3).setUsage(Lr));let w=new Float32Array(l*4);for(let R=0;R<l;R++)w[R*4+2]=t.h[R],w[R*4+3]=t.h[R];_.setAttribute("wall",new Ye(w,4).setUsage(Lr)),_.setIndex(new Ye(g,1));let E=new Xn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Us.aluminum?.5:.05,side:wn});_p(E,t.bottom,!1,d);let b=new Be(_,E);this.content.add(b),this.stock={hm:t,geo:_,base:d,sides:this.makeSides(t,d)};let y=new Xn({color:d.clone().multiplyScalar(.7),roughness:.9,side:wn});if(_p(y,t.bottom,!0),this.content.add(new Be(_,y)),i){let R=new Je;R.setAttribute("position",new Ye(i.positions,3)),R.setIndex(new Ye(i.indices,1)),R.computeVertexNormals(),this.partGhost=new Be(R,new Xn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new Kn,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(r-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let v=0;v<t.nx;v++)i.push(v);for(let v=1;v<t.ny;v++)i.push(v*t.nx+t.nx-1);for(let v=t.nx-2;v>=0;v--)i.push((t.ny-1)*t.nx+v);for(let v=t.ny-2;v>=0;v--)i.push(v*t.nx);let r=new Float32Array(i.length*6),o=new Float32Array(i.length*6),l=[],h=[[0,-1],[1,0],[0,1],[-1,0]],u=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let v=0;v<i.length;v++){let _=i[v],S=t.x0+_%t.nx*t.cell,w=t.y0+Math.floor(_/t.nx)*t.cell;r.set([S,w,t.h[_],S,w,t.bottom],v*6);let[E,b]=h[v<u[0]?0:v<u[1]?1:v<u[2]?2:3];if(o.set([E,b,0,E,b,0],v*6),v<i.length-1){let y=v*2;l.push(y,y+1,y+3,y,y+3,y+2)}}let d=new Je;d.setAttribute("position",new Ye(r,3).setUsage(Lr)),d.setAttribute("normal",new Ye(o,3)),d.setIndex(l);let g=new Be(d,new Xn({color:e.clone().multiplyScalar(.85),roughness:.85,side:wn}));return this.content.add(g),{g:d,edge:i}}refreshStock(t,e,i){let r=this.stock;if(!r||e<t)return;let{hm:o,geo:l,base:h}=r,u=o.nx,d=o.ny,g=o.h,v=l.attributes.position,_=l.attributes.color,S=l.attributes.normal,w=l.attributes.wall,E=new Me,b=Math.max(0,t),y=Math.min(d-1,e),R=o.cell*1.5,z=(C,k,H)=>{let Y=g[k*u+C],J=0;for(let q=-1;q<=1;q++)for(let Z=-1;Z<=1;Z++){let K=C+Z,lt=k+q;(Z||q)&&K>=0&&lt>=0&&K<u&&lt<d&&(J=Math.max(J,H*(g[lt*u+K]-Y)))}return J};for(let C=b;C<=y;C++)for(let k=0;k<u;k++){let H=C*u+k;v.array[H*3]=o.x0+k*o.cell+(o.sx?o.sx[H]:0),v.array[H*3+1]=o.y0+C*o.cell+(o.sy?o.sy[H]:0),v.array[H*3+2]=g[H];let Y=o.op[H];Y?(E.copy(h).lerp(i[Y-1],.28),E.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(g[H]-o.bottom)/Math.max(1,o.top-o.bottom))))):E.copy(h),_.array[H*3]=E.r,_.array[H*3+1]=E.g,_.array[H*3+2]=E.b}let A=v.array,L=Math.max(0,b-1),D=Math.min(d-1,y+1);for(let C=L;C<=D;C++)for(let k=0;k<u;k++){let H=C*u+k,Y=w.array,J=z(k,C,1),q=z(k,C,-1);if(Y[H*4]=0,Y[H*4+1]=0,Y[H*4+2]=g[H],Y[H*4+3]=g[H],o.wx&&(o.wx[H]||o.wy[H])&&(J>R||q>R)){Y[H*4]=o.wx[H],Y[H*4+1]=o.wy[H],Y[H*4+2]=g[H]-q,Y[H*4+3]=g[H]+J,S.array[H*3]=0,S.array[H*3+1]=0,S.array[H*3+2]=1;continue}let Z=(C*u+Math.max(0,k-1))*3,K=(C*u+Math.min(u-1,k+1))*3,lt=(Math.max(0,C-1)*u+k)*3,dt=(Math.min(d-1,C+1)*u+k)*3,Tt=A[K]-A[Z],xt=A[K+1]-A[Z+1],Ct=A[K+2]-A[Z+2],Nt=A[dt]-A[lt],ct=A[dt+1]-A[lt+1],It=A[dt+2]-A[lt+2],Xt=xt*It-Ct*ct,Gt=Ct*Nt-Tt*It,Vt=Tt*ct-xt*Nt,_t=Math.hypot(Xt,Gt,Vt)||1;Vt<0&&(Xt=-Xt,Gt=-Gt,Vt=-Vt),S.array[H*3]=Xt/_t,S.array[H*3+1]=Gt/_t,S.array[H*3+2]=Vt/_t}v.addUpdateRange(b*u*3,(y-b+1)*u*3),_.addUpdateRange(b*u*3,(y-b+1)*u*3),S.addUpdateRange(L*u*3,(D-L+1)*u*3),w.addUpdateRange(L*u*4,(D-L+1)*u*4),v.needsUpdate=!0,_.needsUpdate=!0,S.needsUpdate=!0,w.needsUpdate=!0;let V=r.sides.g.attributes.position;r.sides.edge.forEach((C,k)=>{V.array[k*6+2]=g[C]}),V.needsUpdate=!0}setTool(t,e){for(let v of[...this.tool.children])this.tool.remove(v),v.traverse(_=>{_.geometry?.dispose(),_.material?.dispose()});let i=t.diameter/2,r=t.kind==="surfacing"||i>6.35,o=r?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),l=new Xn({color:14015457,metalness:.85,roughness:.3}),h;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let v=i/Math.tan((t.kind==="drill"?118:60)*Math.PI/360);h=new Be(new ws(i,v,48),l),h.rotation.x=-Math.PI/2,h.position.z=v/2}else if(t.kind==="ball"){h=new Kn;let v=new Be(new Si(i,i,o-i,64),l);v.rotation.x=Math.PI/2,v.position.z=i+(o-i)/2;let _=new Be(new ar(i,48,24,0,Math.PI*2,Math.PI/2,Math.PI/2),l);_.rotation.x=Math.PI/2,_.position.z=i,h.add(v,_)}else h=new Be(new Si(i,i,o,64),l),h.rotation.x=Math.PI/2,h.position.z=o/2;let u=r?3.175:Math.max(i,Math.min(3.175,i*1.5)),d=20,g=new Be(new Si(u,u,d,32),new Xn({color:11187132,metalness:.8,roughness:.35}));g.rotation.x=Math.PI/2,g.position.z=o+d/2,this.tool.add(h,g)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new Kn;for(let e of t){let i=e.track;if(!i)continue;let r=[],o=[];for(let h=4;h<i.length;h+=4)(i[h+3]>0?r:o).push(i[h-4],i[h-3],i[h-2]+.02,i[h],i[h+1],i[h+2]+.02);let l=(h,u,d)=>{if(!h.length)return;let g=new Je;g.setAttribute("position",new $e(h,3));let v=new Pr(g,new ci({color:u,transparent:!0,opacity:d}));v.renderOrder=3,this.paths.add(v)};l(r,Fn[e.kind]||"#1abc9c",.75),l(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function cb(){return new Promise((n,t)=>{let e=indexedDB.open(lb,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function xp(n,t){let e=await cb();return new Promise((i,r)=>{let o=e.transaction("kv",n),l=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(l?.result)},o.onerror=o.onabort=()=>{e.close(),r(o.error)}})}var lb,Mp,bp,Sp=mn(()=>{lb="nccam";Mp=n=>xp("readonly",t=>t.get(n)).catch(()=>null),bp=(n,t)=>xp("readwrite",e=>e.put(t,n)).catch(()=>{})});var Ep={};Lu(Ep,{mountApp:()=>pb});function pb(n,t,e){let i={get:async B=>{let W=await fetch(t.base+B);if(!W.ok)throw new Error(`${B}: ${W.status}`);return W.json()},post:(B,W)=>fetch(t.base+B,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)})},r={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,scale:[1,1,1],lock:!0,fileSize:null,meshKind:null,tools:[],numbering:"slot",safeZ:null,connected:!1,units:"mm",limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:""},o=new mc,l=B=>!!B.toolNumber&&(!r.slots||B.toolNumber<=r.slots),h=(B,W)=>Un.num(B,r.units,W),u=(B,W)=>Un.len(B,r.units,W),d=0;(async()=>{let[B,W,j,st]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);r.units=Un.unitsFrom(B?.unitsPreference),r.numbering=B?.tool?.numbering==="toolId"?"toolId":"slot",r.slots=Math.max(0,Number(B?.tool?.count)||0);let yt=B?.tool?.probe?Number(B?.tool?.probeToolNumber)||99:null,$=Number(B?.safeZHeight);r.safeZ=Number.isFinite($)?$:null,r.tools=ef(Array.isArray(W)?W:W?.tools),r.numbering=tf(r.numbering,r.tools,r.slots,yt);let St=j?.settings||{},pt=Ut=>{let wt=parseFloat(St[Ut]?.value);return Number.isFinite(wt)&&wt>0?wt:null};r.limits={maxRpm:pt("30")||void 0,minRpm:pt("31")||void 0,maxFeed:Math.min(pt("110")||1/0,pt("111")||1/0,1/0)},Number.isFinite(r.limits.maxFeed)||delete r.limits.maxFeed,r.maxRapid=Math.min(pt("110")||5e3,pt("111")||5e3),pt("130")&&pt("131")&&(r.travel={x:pt("130"),y:pt("131"),z:pt("132")}),r.connected=!!st?.machineState?.connected,L();let ut=await Mp("last");ut?.bytes&&!r.part&&!r.loading&&g(null,ut)})();async function g(B,W=null){if(!B&&!W)return;let j=W?W.name:B.name;r.fileName=j,r.loading=`Reading ${j}\u2026`,r.error="",r.plan=null,r.result=null,r.analysis=null,r.part=null,r.step=1,r.maxStep=1,L();try{let st=W?W.bytes:await B.arrayBuffer();r.bytes=st.slice(0),r.scale=W?.scale||[1,1,1],r.lock=W?.lock??!0;let yt=await e("load",{bytes:st,name:j,scale:r.scale},[st]);if(r.sides=yt.sides,r.fileSize=yt.fileSize,r.meshKind=yt.mesh||null,W?.upPath?.length){r.job=null;for(let $ of W.upPath)await w($,!0);r.job={...Zs(r.analysis),...W.job},await R()}else await w(yt.best);A()}catch(st){r.error=st.message||String(st),r.fileName=""}r.loading="",L()}let v=Promise.resolve();function _(B){return r.scale=B,v=v.then(async()=>{r.loading="Resizing the part\u2026",L();try{let W=await e("rescale",{scale:B});r.sides=W.sides;let j=r.job,st=r.upPath||[W.best];r.job=null;for(let yt of st)await w(yt,!0);r.job={...Zs(r.analysis),...j,stock:j.stock.fit?Zs(r.analysis).stock:j.stock},r.result=null,r.maxStep=Math.min(r.maxStep,3),await R(),A()}catch(W){r.error=W.message||String(W)}r.loading="",L()}),v}let S={top:"bottom",bottom:"top",front:"back",back:"front",left:"right",right:"left"};async function w(B,W=!1,j=!1){j||(r.loading="Turning the part\u2026",L());let yt=await(B&&!Array.isArray(B)&&typeof B=="object"?e("turn",{how:B.turn}):e(Array.isArray(B)?"tilt":"orient",Array.isArray(B)?{normal:B}:{up:B}));return E(B,yt,W)}function E(B,W,j){let st=B&&!Array.isArray(B)&&typeof B=="object";if(st?r.up=B.turn==="over"?S[r.up]||"custom":r.up:r.up=Array.isArray(B)?"custom":B,r.upPath=st||Array.isArray(B)?[...r.upPath||[],B]:[B],j){r.part={positions:W.positions,indices:W.indices},r.analysis=W.analysis,r.loading="";return}r.part={positions:W.positions,indices:W.indices},r.analysis=W.analysis;let yt=r.job;return r.job=Zs(W.analysis),yt&&Object.assign(r.job,{material:yt.material,finish:yt.finish,zero:yt.zero,tabs:yt.tabs,stock:{...r.job.stock,fit:yt.stock.fit,margin:yt.stock.margin,extraTop:yt.stock.extraTop}}),r.loading="",R()}let b=!1;async function y(B){if(b||!r.part)return;b=!0;let W={turn:B==="z"?"over":"around"};try{let[j]=await Promise.all([e("turn",{how:W.turn}),o.spin(B==="z"?"x":"z")]);await E(W,j,!1)}catch(j){r.error=j.message||String(j),L()}b=!1}async function R(B=!1){if(!r.part)return;let W=++d;r.planning=!0,B&&(r.result=null),L();try{let j=await e("plan",{tools:r.tools,job:{...r.job,units:r.units},limits:r.limits,paths:B,gcodeOptions:{name:r.fileName,numbering:r.numbering,safeZHeightMm:r.safeZ},timing:{maxRapid:r.maxRapid||5e3}});if(W!==d)return;r.plan=j.plan,A(),B&&(r.result=j,r.simChecks=null)}catch(j){W===d&&(r.error=j.message||String(j))}W===d&&(r.planning=!1,L())}let z=null;function A(){!r.bytes||!r.job||(clearTimeout(z),z=setTimeout(()=>bp("last",{name:r.fileName,bytes:r.bytes,upPath:r.upPath,job:r.job,scale:r.scale,lock:r.lock,savedAt:Date.now()}),400))}function L(){if(!n.isConnected)return;let B=n.querySelector("[data-keep-scroll]"),W=B?B.scrollTop:0,j=r.step,st=["Drop a STEP, STL or 3MF file. ncCAM finds the pockets, holes and outline for you.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][j-1],yt=[r.part?"Your part":"Open your part","What are you cutting it from?","Here\u2019s the plan",r.simChecks&&!r.simChecks.ok?"Check the warnings":"Ready to cut"][j-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCAM<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">STEP, STL or 3MF to G-code</div></div>
        <div class="ncc-steps">${ub.map((pt,ut)=>{let Ut=ut+1,wt=Ut===j?"on":Ut<r.maxStep||Ut<j?"done":"";return`<button class="ncc-step ${wt}" type="button" data-go="${Ut}" ${Ut<=r.maxStep?"":"disabled"}><span class="ncc-num">${wt==="done"?"\u2713":Ut}</span>${Ze(pt)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${Qe.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${Ze(yt)}</h1><p class="ncc-lede">${Ze(st)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${r.connected?"ok":""}"></span>${r.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${j===3?"fixed":""}">${[V,K,Xt,Et][j-1]()}</div>
        <div class="ncc-foot">${D()}</div>
      </section>
      ${r.toast?`<div class="ncc-toast" role="status">${Ze(r.toast)}</div>`:""}`;let $=n.querySelector("[data-keep-scroll]");$&&($.scrollTop=W);let St=n.querySelector("[data-viewer]");if(St){St.replaceWith(o.el);let pt=r.loading||j===4&&!r.result?`<div class="ncc-busy"><span class="ncc-spin"></span>${Ze(r.loading||"Making toolpaths\u2026")}</div>`:"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(ut=>ut.remove()),o.el.insertAdjacentHTML("beforeend",(j===1?J():j===4?Ue():"")+pt),o.fit(),j===1&&Z(),j===2&&It(),j===3&&Vt(),j===4&&r.result&&pe()}}function D(){let B=`<button class="ncc-back" type="button" data-go="${r.step-1}" ${r.step>1?"":"disabled"}>Back</button>`;if(r.step===1)return`${B}<button class="ncc-next" type="button" data-go="2" ${r.plan&&r.plan.ops.length&&!r.loading?"":"disabled"}>Next: Stock ${Qe.next}</button>`;if(r.step===2)return`${B}<button class="ncc-next" type="button" data-go="3">Next: Operations ${Qe.next}</button>`;if(r.step===3){let j=r.plan&&r.plan.ops.some(st=>st.enabled);return`${B}<button class="ncc-next" type="button" data-go="4" ${j&&!r.planning?"":"disabled"}>Make toolpaths ${Qe.next}</button>`}let W=r.simChecks&&!r.simChecks.ok;return`${B}${W?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${r.result&&r.simChecks&&!W?"":"disabled"}>${Qe.load}Load into ncSender</button>`}function V(){if(!r.part&&!r.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${Qe.upload}</div>
        <h2>Drop a STEP, STL or 3MF file here</h2>
        <p>Export your part from Fusion, Onshape, FreeCAD or SolidWorks as <strong>.step</strong>, or open a mesh: <strong>.stl</strong> or <strong>.3mf</strong> (from a 3D printing site or slicer). Millimetres or inches both work.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open file<input type="file" accept=".step,.stp,.stl,.3mf,.STEP,.STP,.STL,.3MF" data-file hidden></label>
        ${r.error?`<div class="ncc-hint bad" style="max-width: 520px">${Qe.warn}<span>${Ze(r.error)}</span></div>`:""}
        ${r.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${Qe.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCAM can pick them.</span></div>`}
      </div>`;let B=r.analysis;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${Qe.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${Ze(r.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${B?`${h(B.size[0])} \xD7 ${h(B.size[1])} \xD7 ${u(B.size[2])}`:"&nbsp;"}</div></div>
          </div>
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept=".step,.stp,.stl,.3mf,.STEP,.STP,.STL,.3MF" data-file hidden></label>
        </div>
        <div data-viewer></div>
      </div>
      <div class="ncc-col ncc-side">
        ${C()}
        <div class="ncc-card">
          <div class="ncc-label">Which side faces up?</div>
          <div class="ncc-picks">${fb.map(([W,j])=>{let st=!r.sides||r.sides[W].reachable;return`<button class="ncc-pick ${r.up===W?"sel":""}" type="button" data-up="${W}" ${st?"":"disabled"} ${st?"":`title="With the ${j.toLowerCase()} up, some faces point down and the tool can\u2019t reach them"`}>${sn(db[W],24,'stroke-width="1.8"')}${j}${st?"":"<small>Can\u2019t reach</small>"}</button>`}).join("")}</div>
          <div class="ncc-row-sub">Or click a flat face on the model to put it on top.</div>
        </div>
        ${k()}
        ${Y(!0)}
      </div>`}function C(){if(!r.fileSize)return"";let B=$=>{let St=r.fileSize[$]*r.scale[$];return r.units==="in"?Math.round(St/Un.INCH*1e3)/1e3:Math.round(St*100)/100},W=r.scale.map($=>`${Math.round($*1e3)/10}%`),j=r.scale.every($=>Math.abs($-r.scale[0])<1e-9),st=r.scale.some($=>Math.abs($-1)>1e-9),yt=r.meshKind==="stl"&&!st&&Math.max(...r.fileSize)<12;return`<div class="ncc-card">
        ${lt("lock","Keep the proportions",j?st?`Scaled to ${W[0]}`:"As in the file":`Scaled ${W.join(" \xD7 ")}`,r.lock)}
        <div class="ncc-fields">${["X","Y","Z"].map(($,St)=>`<div class="ncc-field"><label for="ncc-size${St}">${$} (${r.units})</label><input id="ncc-size${St}" class="ncc-input ncc-mono" inputmode="decimal" data-size="${St}" value="${B(St)}"></div>`).join("")}</div>
        <div class="ncc-row-sub">In the file\u2019s own X, Y and Z, before turning it.${st?' <button type="button" class="ncc-link" data-scale="reset">Back to the file\u2019s size</button>':""}</div>
        ${yt?`<div class="ncc-hint">${Qe.info}<span>Only ${h(Math.max(...r.fileSize))} across: STL files have no unit, so this may have been drawn in inches. <button type="button" class="ncc-link" data-scale="inch">Make it inches (\xD7 25.4)</button></span></div>`:""}
      </div>`}function k(){if(!r.plan)return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-row-sub">${r.planning?"Looking\u2026":""}</div></div>`;let B=new Map;for(let j of r.plan.ops.filter(st=>st.kind!=="face"&&st.kind!=="corners"&&st.kind!=="finish3d"&&st.kind!=="rest3d")){let st=H(j),yt=B.get(st)||{o:j,name:st,n:0};yt.n+=j.count||1,B.set(st,yt)}let W=j=>j.n<2?j.name:j.name.replace(/^(Pocket|Step), /,(st,yt)=>`${j.n} ${yt.toLowerCase()}s, `);return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-found">${[...B.values()].map(j=>`<div class="ncc-row"><span style="display: flex; align-items: center; gap: 8px"><span class="ncc-swatch" style="background: ${Fn[j.o.kind]}"></span>${Ze(W(j))}</span><span class="ncc-ok">\u2713</span></div>`).join("")||'<div class="ncc-row-sub">Nothing to cut from this side.</div>'}</div></div>`}function H(B){let W=B.detail.replace(/ · spiral$/,"");return B.kind==="cutout"?`Outline, ${u(B.zTop)} cut-out`:B.kind==="rough3d"?`3D surface, ${u(B.zTop)} tall`:B.kind==="hole"||B.kind==="drill"?`${B.centers.length>1?`${B.centers.length} holes`:"Hole"}, ${W}`:B.kind==="step"?`Step, ${W}`:`Pocket, ${W.split(" \xB7 ").pop()}`}function Y(B){if(!r.plan)return"";let W=r.plan.warnings.filter(j=>!B||j.kind==="undercut"||j.kind==="sloped"||j.kind==="edges"||j.kind==="surface3d");return!W.length&&B?`<div class="ncc-hint">${Qe.info}<span>Everything can be cut from the top in one setup.</span></div>`:W.map(j=>`<div class="ncc-hint ${j.kind==="notool"||j.kind==="noball"?"bad":""}">${j.kind==="notool"||j.kind==="noball"?Qe.warn:Qe.info}<span>${Ze(j.text)}</span></div>`).join("")}function J(){if(!r.plan)return"";let B=[...new Set(r.plan.ops.filter(j=>j.kind!=="face"&&j.kind!=="corners"&&j.kind!=="finish3d"&&j.kind!=="rest3d").map(j=>j.kind))],W={pocket:"Pockets",hole:"Holes",drill:"Holes",step:"Steps",cutout:"Outline",rough3d:"3D surface"};return`<div class="ncc-overlay tr">${B.map(j=>`<span class="ncc-chip"><span class="ncc-swatch" style="background: ${Fn[j]}"></span>${W[j]}</span>`).join("")}</div>
      <div class="ncc-overlay bl"><span class="ncc-chip">Drag to rotate</span><span class="ncc-chip">Scroll to zoom</span><span class="ncc-chip">Click a face to put it on top</span></div>`}let q=null;function Z(){if(!r.part)return;ue=null,ct=null;let B=r.part.positions,W=(r.plan?.ops||[]).filter(j=>j.kind!=="face"&&j.kind!=="corners").flatMap(j=>j.kind==="cutout"?[{loops:j.region,z:j.zTop+.05,color:Fn.cutout,dashed:!0}]:j.centers&&!j.region?[{loops:j.centers.map(st=>wp(st)),z:j.zTop+.05,color:Fn[j.kind]}]:[{loops:j.region,z:j.zTop+.05,color:Fn[j.kind]}]);o.keepCamera=q===B,o.showPart(r.part,W),q=B,o.onFrame=null,o.onPick=async j=>{if(r.loading)return;let st=r.up;try{await w(j),r.analysis.undercut&&st!=="custom"&&(!r.sides||r.sides[st]?.reachable)&&(await w(st),Wt("With that face up, some of the part can\u2019t be reached from the top."))}catch(yt){r.error=yt.message,L()}}}function K(){let B=r.job,W=r.plan?.stock||na(r.analysis,B),j=Object.entries(xr).map(([yt,$])=>`<button class="ncc-pick ncc-mat ${B.material===yt?"sel":""}" type="button" data-material="${yt}"><span class="ncc-mat-swatch" style="background: ${Us[yt]}"></span>${Ze($.name)}<small>${Ze($.note)}</small></button>`).join(""),st=(yt,$,St)=>`<div class="ncc-field"><label for="ncc-${yt}">${$}</label><input id="ncc-${yt}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${yt}" value="${r.units==="in"?Math.round(St/Un.INCH*1e3)/1e3:Math.round(St*100)/100}" ${B.stock.fit?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${j}</div></div>
        <div class="ncc-card">
          ${lt("fit","Size the stock to the part",`Adds ${u(B.stock.margin)} on every side and ${u(B.stock.extraTop)} on top`,B.stock.fit)}
          <div class="ncc-fields">${st("width",`Width X (${r.units})`,W.width)}${st("depth",`Depth Y (${r.units})`,W.depth)}${st("thickness",`Thickness Z (${r.units})`,W.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${lt("tabs","Leave tabs to hold the part",B.tabs.enabled?`${h(Tt().height)} \xD7 ${u(Tt().length)}, so the part stays put until you cut it free`:"The part comes loose at the end",B.tabs.enabled)}
          ${B.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${B.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${B.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${B.tabs.count>=12?"disabled":""}>+</button></div></div>
          ${Ct("height","Tab thickness","Thinner tabs","Thicker tabs")}
          ${Ct("length","Tab length","Shorter tabs","Longer tabs")}`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${Nt(W)}
          <div style="font-size: 14px">X Y zero: <strong>${Ze(dt(B.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${B.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${B.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let lt=(B,W,j,st)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${Ze(W)}</div><div class="ncc-row-sub">${Ze(j)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${st}" aria-label="${Ze(W)}" data-toggle="${B}"></button></div>`;function dt(B){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[B]}let Tt=()=>({...Zi(r.job.material),...Object.fromEntries(["height","length"].filter(B=>r.job.tabs[B]!=null).map(B=>[B,r.job.tabs[B]]))}),xt=()=>r.units==="in"?{min:.508,max:10.16,step:.508,grid:.254}:{min:.5,max:10,step:.5,grid:.1};function Ct(B,W,j,st){let yt=Tt()[B];return`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${W}</span><div class="ncc-stepper"><button type="button" data-tabsize="${B}" data-by="-1" aria-label="${j}" ${yt<=xt().min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${u(yt,r.units==="in"?2:1)}</span><button type="button" data-tabsize="${B}" data-by="1" aria-label="${st}" ${yt>=xt().max-1e-6?"disabled":""}>+</button></div></div>`}function Nt(B){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${h(B.width)} \xD7 ${h(B.depth)} \xD7 ${u(B.thickness)} stock \xB7 tap a point for zero, an arrow to turn the part</div>`}let ct=null;function It(){let B=r.plan?.stock||na(r.analysis,r.job),W=of.map(yt=>({key:yt,...zc(B,{xy:yt,z:"top"})})),j=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",st=`${r.part?.positions?.length}|${B.width}|${B.depth}|${B.thickness}`;o.keepCamera=ct===st,o.showZero({stock:B,part:r.part,points:W,selected:r.job.zero.xy,zFace:r.job.zero.z,color:Us[r.job.material],accent:j}),ct=st,q=null,ue=null,o.onPick=null,o.onMarker=yt=>{yt!==r.job.zero.xy&&(r.job.zero.xy=yt,kt())},o.onAxis=yt=>y(yt)}function Xt(){let B=r.plan;if(!B)return'<div class="ncc-busy" style="position: static; flex: 1"><span class="ncc-spin"></span>Planning\u2026</div>';let W=B.ops.map(ut=>{let Ut=_t(ut);return`<div class="ncc-op ${ut.enabled?"":"off"} ${r.focusOp===ut.id?"focus":""}" data-focus="${ut.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${Fn[ut.kind]} 16%, transparent); color: ${Fn[ut.kind]}">${Qe[ut.kind]||Qe.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${Ze(ut.label)}</div><div class="ncc-op-sub ncc-mono">${Ze(ut.detail)}</div></div>
        <select class="ncc-select" data-tool="${ut.id}" aria-label="Tool for ${Ze(ut.label)}">${Ut.map(wt=>`<option value="${wt.id}" ${wt.id===ut.tool.id?"selected":""}>T${Mr(wt,r.numbering)} \xB7 ${Ze(wt.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${ut.enabled}" aria-label="${Ze(ut.label)}" data-op="${ut.id}"></button>
      </div>`}).join(""),j=ia(B),st=new Map;for(let ut of B.ops)ut.enabled&&ut.kind!=="face"&&st.set(ut.tool.id,(st.get(ut.tool.id)||0)+1);let yt=[...st].sort((ut,Ut)=>Ut[1]-ut[1])[0]?.[0],$=B.ops.find(ut=>ut.enabled&&ut.tool.id===yt)||B.ops.find(ut=>ut.enabled),St=$?.feeds,pt=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(jn).map(([ut,Ut])=>`<button type="button" class="${r.job.finish===ut?"sel":""}" data-finish="${ut}">${Ut.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${B.ops.some(ut=>ut.kind==="finish3d")?`3D: passes spaced for ${u(ea[r.job.finish],r.units==="in"?4:2)} ridges${r.job.finish==="fast"?"; flat walls without a finishing pass":""}.`:""} ${{fast:"Bigger steps, no finishing pass.",balanced:`Leaves ${u(.2,r.units==="in"?3:1)} on the walls, then a clean finishing pass.`,smooth:"Lighter steps and a finishing pass, for the best walls."}[r.job.finish]}</div>
            ${St?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${Ze($.tool.name)}<br>${Ze(xr[r.job.material].name)} \xB7 ${St.rpm.toLocaleString()} RPM<br>${r.units==="in"?`${h(St.feed,1)} in/min`:`${St.feed.toLocaleString()} mm/min`} \xB7 ${u(St.stepdown,r.units==="in"?3:2)} per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${j.map(ut=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${Mr(ut,r.numbering)}</span> ${Ze(ut.name)}</span><span class="ncc-slot ${l(ut)?"":"hand"}">${l(ut)?`Slot ${ut.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${j.some(ut=>!ut.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops">${Gt()}<div class="ncc-ops">${W}</div>${Y(!1)}<div class="ncc-plan-pair-in">${pt}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${pt}</div>
      </div>`}function Gt(){let B=!!r.plan.mode3d,W=!!r.plan.did3d;return!B&&!r.plan.analysis.sloped?"":`<div class="ncc-op" style="margin-bottom: 10px">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${Fn.finish3d} 16%, transparent); color: ${Fn.finish3d}">${Qe.finish3d}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">Cut curved faces in 3D</div><div class="ncc-op-sub">${B?W?"Roughed in layers, then a ball end mill follows the surface.":"On, but no end mill is long enough: cut in 2.5D for now.":"Off: sloped and curved faces are left square."}</div></div>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${B}" aria-label="Cut curved faces in 3D" data-toggle="3d"></button>
      </div>`}function Vt(){let W=(r.plan?.ops||[]).filter(j=>j.enabled&&j.kind!=="face").map(j=>{let st=r.focusOp&&r.focusOp!==j.id;return{loops:j.region||(j.centers||[]).map($=>wp($)),z:j.kind==="cutout"?j.zTop+.05:Math.max(j.zBottom,0)+.05,color:Fn[j.kind],dashed:j.kind==="cutout",opacity:st?.2:1,top:j.zTop}});o.keepCamera=q===r.part?.positions,o.showPart(r.part,W),q=r.part?.positions,ue=null,ct=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function _t(B){let W=B.kind==="drill"?["drill"]:B.kind==="face"?["surfacing","flat"]:B.kind==="finish3d"?["ball","flat"]:["flat"],j=r.tools.filter(st=>W.includes(st.kind)).sort((st,yt)=>yt.diameter-st.diameter);return j.some(st=>st.id===B.tool.id)?j:[B.tool,...j]}function Et(){let B=r.result,W=B?.plan,j=W?ia(W):[],st=W?W.ops.filter(yt=>yt.enabled).reduce((yt,$,St,pt)=>yt+(St>0&&pt[St-1].tool.id!==$.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${oe()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${W?Math.max(1,Math.round(B.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${j.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${W?st:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${Qt()}</div>
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${Ze(Ot())}${B?` \xB7 ${(B.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${B?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let Ot=()=>`${(r.fileName||"part").replace(/\.(step|stp|stl|3mf)$/i,"")}.nc`;function Qt(){let B=r.simChecks;return B?B.items.map(W=>`<div class="ncc-check"><span class="ncc-ck ${W.state}">${W.state==="bad"?Qe.cross:W.state==="info"?"!":Qe.check}</span><span>${Ze(W.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${r.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}</div>`}let et={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null};function oe(){if(!r.result)return"";let W=r.result.plan.ops.filter(yt=>yt.enabled&&yt.track),j=et.total||1,st=W[Math.max(0,et.opIndexAt?.(et.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${et.playing?"Pause":"Play"}">${et.playing?Qe.pause:Qe.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(j)}" aria-valuenow="${Math.round(et.t)}">
          ${W.map(yt=>`<i style="width: ${(yt.seconds||0)/j*100}%; background: ${Fn[yt.kind]}"></i>`).join("")}
          <b style="width: ${et.t/j*100}%"></b><em style="left: ${et.t/j*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span data-pb="step">${P(W,st)}</span><span class="ncc-mono" data-pb="clock">${gc(et.t)} / ${gc(j)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([yt,$])=>`<button type="button" style="padding: 6px 8px" class="${et.speed===yt?"sel":""}" data-speed="${yt}">${$}</button>`).join("")}</div>`}function Ue(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&r.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${r.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let ue=null;function pe(){if(ue===r.result){me();return}ue=r.result,q=null,ct=null,o.onMarker=null,o.onPick=null;let B=r.result.plan,W=B.ops.filter(ut=>ut.enabled&&ut.track),j=qi.cellFor(B.stock,520*520);et.ops=W,et.hm=ju(new qi(B.stock,j)),et.colors=B.ops.map(ut=>new Me(Fn[ut.kind])),et.stamps=B.ops.map(ut=>Oc(ut.tool,j));let st=0;for(let ut of W)st+=ut.track.length/4;et.moves=new Float32Array(st*4),et.opOf=new Uint16Array(st),et.cum=new Float64Array(st);let yt=0,$=0,St=null,pt=r.maxRapid||5e3;for(let ut of W){let Ut=B.ops.indexOf(ut);for(let wt=0;wt<ut.track.length;wt+=4,yt++){if(et.moves.set(ut.track.subarray(wt,wt+4),yt*4),et.opOf[yt]=Ut,St){let Ft=Math.hypot(ut.track[wt]-St[0],ut.track[wt+1]-St[1],ut.track[wt+2]-St[2]);$+=Ft/(ut.track[wt+3]>0?ut.track[wt+3]:pt)*60}St=[ut.track[wt],ut.track[wt+1],ut.track[wt+2]],et.cum[yt]=$}}et.total=$,et.opIndexAt=ut=>{let Ut=Math.min(st-1,fe(et.cum,ut));return W.indexOf(B.ops[et.opOf[Ut]])},et.t=0,et.i=1,et.cursor=null,et.toolOp=-1,et.snaps=[],o.showStock(et.hm,Us[B.job.material]||Us.mdf,r.part);{let ut=et.hm,Ut=[ut.x0,ut.y0,ut.bottom],wt=[ut.x0+(ut.nx-1)*ut.cell,ut.y0+(ut.ny-1)*ut.cell,ut.top];for(let Ft of W){let te=Ft.tool.diameter/2;for(let Pe=0;Pe<Ft.track.length;Pe+=4)Ft.track[Pe+3]!==0&&(Ut[0]=Math.min(Ut[0],Ft.track[Pe]-te),wt[0]=Math.max(wt[0],Ft.track[Pe]+te),Ut[1]=Math.min(Ut[1],Ft.track[Pe+1]-te),wt[1]=Math.max(wt[1],Ft.track[Pe+1]+te))}o.frame(Ut,wt)}o.showPaths(W),r.showPaths=r.showPaths??!1,me(),Ce(0),et.speed=5,et.rate=Math.max(1,et.total/600/5),o.onFrame=at,mt(B),et.playing=!1,it()}function me(){o.paths&&(o.paths.visible=!!r.showPaths),o.partGhost&&(o.partGhost.visible=!!r.showPart)}function fe(B,W){let j=0,st=B.length;for(;j<st;){let yt=j+st>>1;B[yt]<W?j=yt+1:st=yt}return j}let Te=B=>({x:et.moves[B*4],y:et.moves[B*4+1],z:et.moves[B*4+2],r:et.moves[B*4+3]===0});function ne(B){let W=et.hm,j=et.cum.length,st=1/0,yt=-1,$=(St,pt,ut)=>{let Ut=r.result.plan.ops[ut].tool.diameter/2/W.cell+3,wt=Math.floor((Math.min(St.y,pt.y)-W.y0)/W.cell-Ut),Ft=Math.ceil((Math.max(St.y,pt.y)-W.y0)/W.cell+Ut);st=Math.min(st,Math.max(0,wt)),yt=Math.max(yt,Math.min(W.ny-1,Ft))};for(;et.i<j&&et.cum[et.i]<=B;){et.opOf[et.i]!==et.opOf[et.i-1]&&!et.cursor&&Se();let St=et.cursor||Te(et.i-1),pt=Te(et.i),ut=et.opOf[et.i];pt.r||(Fc(W,r.result.plan.ops[ut].tool,St,pt,ut),$(St,pt,ut)),et.cursor=null,et.i++}if(et.i<j&&B>et.cum[et.i-1]){let St=et.cursor||Te(et.i-1),pt=Te(et.i),ut=et.opOf[et.i],Ut=et.cum[et.i-1],wt=(B-Ut)/(et.cum[et.i]-Ut||1),Ft=Te(et.i-1),te={x:Ft.x+(pt.x-Ft.x)*wt,y:Ft.y+(pt.y-Ft.y)*wt,z:Ft.z+(pt.z-Ft.z)*wt};pt.r||(Fc(W,r.result.plan.ops[ut].tool,St,te,ut),$(St,te,ut)),et.cursor=te}return[st,yt]}function Ce(B){let W=et.cum.length;if(!W)return;let j=Math.min(W-1,fe(et.cum,B)),st=et.opOf[j];if(st!==et.toolOp){let $=r.result.plan.ops[st];o.setTool($.tool,$.zTop-$.zBottom),et.toolOp=st}let yt=et.cursor||Te(Math.max(0,et.i-1));o.moveTool(yt.x,yt.y,yt.z)}let ve=0,Ae=0;function at(B){let W=ve?Math.min(.1,(B-ve)/1e3):0;if(ve=B,!et.playing||!et.cum)return;et.t=Math.min(et.total,et.t+W*et.speed*et.rate);let[j,st]=ne(et.t);o.refreshStock(j,st,et.colors),Ce(et.t),et.t>=et.total?(et.playing=!1,it()):B-Ae>200&&(Ae=B,it())}let ze=["h","op","sx","sy","wx","wy","gap","deep"];function Se(){et.snaps.some(B=>B.i===et.i)||et.snaps.push({i:et.i,data:ze.map(B=>et.hm[B].slice())})}function X(B){if(B=Math.max(0,Math.min(et.total,B)),B<et.t){let W=et.snaps.filter(j=>et.cum[j.i-1]<=B).sort((j,st)=>st.i-j.i)[0];W?(ze.forEach((j,st)=>et.hm[j].set(W.data[st])),et.i=W.i):(et.hm.h.fill(et.hm.top),et.hm.op.fill(0),et.hm.sx.fill(0),et.hm.sy.fill(0),et.hm.wx.fill(0),et.hm.wy.fill(0),et.hm.gap.fill(1/0),et.hm.deep.fill(-1/0),et.i=1),et.cursor=null,ne(B),o.refreshStock(0,et.hm.ny-1,et.colors)}else{let[W,j]=ne(B);o.refreshStock(W,j,et.colors)}et.t=B,Ce(B),it()}let P=(B,W)=>W?`Step ${B.indexOf(W)+1} of ${B.length} \xB7 ${Ze(W.label)} \xB7 T${Mr(W.tool,r.numbering)}`:"";function it(){let B=n.querySelector("[data-playbar]");if(!B)return;if(B._result!==r.result||B._total!==et.total||!B.querySelector("[data-scrub]")){B.innerHTML=oe(),B._result=r.result,B._total=et.total;return}let W=r.result.plan.ops.filter(Ut=>Ut.enabled&&Ut.track),j=et.total||1,st=`${et.t/j*100}%`,yt=W[Math.max(0,et.opIndexAt?.(et.t)??0)],$=B.querySelector("[data-scrub]");$.querySelector("b").style.width=st,$.querySelector("em").style.left=st,$.setAttribute("aria-valuenow",String(Math.round(et.t)));let St=(Ut,wt)=>{Ut&&Ut.innerHTML!==wt&&(Ut.innerHTML=wt)};St(B.querySelector('[data-pb="step"]'),P(W,yt)),St(B.querySelector('[data-pb="clock"]'),`${gc(et.t)} / ${gc(j)}`);let pt=B.querySelector('[data-act="play"]'),ut=et.playing?"Pause":"Play";pt.getAttribute("aria-label")!==ut&&(pt.setAttribute("aria-label",ut),pt.innerHTML=et.playing?Qe.pause:Qe.play);for(let Ut of B.querySelectorAll("[data-speed]"))Ut.classList.toggle("sel",+Ut.dataset.speed===et.speed)}function mt(B){setTimeout(()=>{if(r.result?.plan!==B)return;let W=B.ops.map(St=>({...St,moves:St.track?Array.from({length:St.track.length/4},(pt,ut)=>({x:St.track[ut*4],y:St.track[ut*4+1],z:St.track[ut*4+2],r:St.track[ut*4+3]===0,f:St.track[ut*4+3]})):null})),{collisions:j}=Ju({...B,ops:W},qi.cellFor(B.stock,300*300)),st=[];if(st.push(j.length?{state:"bad",text:`${j.length} fast move${j.length>1?"s go":" goes"} into the material (${[...new Set(j.map(St=>B.ops.find(pt=>pt.id===St.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),r.travel){let St=B.stock.width<=r.travel.x&&B.stock.depth<=r.travel.y;st.push(St?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${h(r.travel.x)} \xD7 ${u(r.travel.y)}).`})}let yt=ia(B);st.push(yt.every(St=>St.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),B.ops.find(St=>St.kind==="cutout"&&St.enabled)&&st.push({state:"ok",text:`The cut-out goes ${u(B.job.throughDepth,r.units==="in"?3:1)} into the spoilboard${B.job.tabs.enabled?`, with ${B.job.tabs.count} tabs`:""}`}),B.warnings.some(St=>St.kind==="undercut")&&st.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side. Pins (the Spoilboard Toolbox plugin can set them up) put it back in the same place."}),r.simChecks={ok:!st.some(St=>St.state==="bad"),items:st},L()},50)}let Pt=B=>{if(!(B<1||B>4||B>r.maxStep+1)){if(B===4&&r.step!==4){et.playing=!1,r.step=4,r.maxStep=4,L(),R(!0);return}r.step=B,r.maxStep=Math.max(r.maxStep,B),B!==4&&(et.playing=!1),L()}},kt=()=>{r.maxStep=Math.min(r.maxStep,Math.max(r.step,3)),r.result=null,R(!1)};n.addEventListener("click",B=>{let W=B.target.closest("[data-focus]");if(W&&!B.target.closest("button, select")){r.focusOp=r.focusOp===W.dataset.focus?null:W.dataset.focus,L();return}let j=B.target.closest("button, [data-scrub]");if(!j||j.disabled)return;let st=j.dataset;if(st.go)return Pt(+st.go);if(st.up)return w(st.up).catch(yt=>{r.error=yt.message,L()});if(st.material)return r.job.material=st.material,Object.assign(r.job.tabs,Zi(st.material)),kt();if(st.tabsize){let yt=Tt(),$=xt();return r.job.tabs[st.tabsize]=Math.max($.min,Math.min($.max,Math.round((yt[st.tabsize]+ +st.by*$.step)/$.grid)*$.grid)),kt()}if(st.zero)return r.job.zero.xy=st.zero,kt();if(st.z)return r.job.zero.z=st.z,kt();if(st.finish)return r.job.finish=st.finish,kt();if(st.tabs)return r.job.tabs.count=Math.max(1,Math.min(12,r.job.tabs.count+ +st.tabs)),kt();if(st.toggle==="fit"){let yt=r.plan?.stock;return r.job.stock.fit=!r.job.stock.fit,!r.job.stock.fit&&yt&&Object.assign(r.job.stock,{width:yt.width,depth:yt.depth,thickness:yt.thickness}),kt()}if(st.toggle==="lock")return r.lock=!r.lock,r.lock&&!r.scale.every(yt=>yt===r.scale[0])?_([r.scale[0],r.scale[0],r.scale[0]]):(A(),L());if(st.scale==="reset")return _([1,1,1]);if(st.scale==="inch")return _([Un.INCH,Un.INCH,Un.INCH]);if(st.toggle==="tabs")return r.job.tabs.enabled=!r.job.tabs.enabled,kt();if(st.toggle==="3d")return r.job.surface3d=!r.plan?.mode3d,r.job.disabled={},r.job.toolOverride={},kt();if(st.op)return r.job.disabled[st.op]=!r.job.disabled[st.op],kt();if(st.speed)return et.speed=+st.speed,it();if(st.act==="play")return et.t>=et.total&&X(0),et.playing=!et.playing,ve=0,it();if(st.act==="paths"){r.showPaths=!r.showPaths,me(),j.classList.toggle("on",r.showPaths);return}if(st.act==="ghost"){r.showPart=!r.showPart,me(),j.classList.toggle("on",r.showPart);return}if(st.act==="close")return Kt();if(st.act==="load")return Mt(j);if(st.act==="save")return Dt(j)}),n.addEventListener("pointerdown",B=>{if(!B.target.closest("[data-scrub]")||!et.cum)return;let j=et.playing;et.playing=!1;let st=pt=>{let ut=n.querySelector("[data-scrub]").getBoundingClientRect();ut.width>0&&X((pt-ut.left)/ut.width*et.total)};st(B.clientX);let yt=null,$=pt=>{yt===null&&requestAnimationFrame(()=>{let ut=yt;yt=null,st(ut)}),yt=pt.clientX},St=()=>{window.removeEventListener("pointermove",$),window.removeEventListener("pointerup",St),et.playing=j&&et.t<et.total,ve=0,it()};window.addEventListener("pointermove",$),window.addEventListener("pointerup",St)}),n.addEventListener("change",B=>{let W=B.target;if(W.matches("[data-file]"))return g(W.files[0]);if(W.dataset.tool)return r.job.toolOverride[W.dataset.tool]=+W.value||W.value,kt();if(W.dataset.size){let j=+W.dataset.size,st=parseFloat(String(W.value).replace(",","."));if(!(Number.isFinite(st)&&st>0&&r.fileSize[j]>0))return L();let yt=Un.toMm(st,r.units)/r.fileSize[j];return _(r.lock?[yt,yt,yt]:r.scale.map(($,St)=>St===j?yt:$))}if(W.dataset.stock){let j=parseFloat(String(W.value).replace(",","."));return Number.isFinite(j)&&j>0&&(r.job.stock[W.dataset.stock]=Un.toMm(j,r.units)),kt()}}),n.addEventListener("dragover",B=>{let W=B.target.closest("[data-drop]");W&&(B.preventDefault(),W.classList.add("over"))}),n.addEventListener("dragleave",B=>{let W=B.target.closest("[data-drop]");W&&W.classList.remove("over")}),n.addEventListener("drop",B=>{B.target.closest("[data-drop]")&&(B.preventDefault(),g(B.dataTransfer.files[0]))});function Wt(B){r.toast=B,L(),setTimeout(()=>{r.toast===B&&(r.toast="",L())},2600)}async function Mt(B){B.disabled=!0;try{let W=await i.post("/api/gcode-files/load-temp",{filename:Ot(),content:r.result.gcode});if(!W.ok)throw new Error(`ncSender said ${W.status}`);Kt()}catch(W){B.disabled=!1,Wt(`Couldn\u2019t load the program: ${W.message}`)}}async function Dt(B){B.disabled=!0;try{let W=await Yt(Ot()),j=await i.post("/api/gcode-files/file/save",{path:W,content:r.result.gcode});if(!j.ok)throw new Error(`save failed (${j.status})`);Wt(`Saved to File Manager: ${W}`)}catch(W){Wt(`Couldn\u2019t save: ${W.message}`)}B.disabled=!1}async function Yt(B){let W=B.replace(/\.nc$/,""),j=new Set,st=yt=>{for(let $ of yt||[])$.type==="folder"?st($.children):j.add($.path)};st((await i.get("/api/gcode-files"))?.tree);for(let yt=1;yt<1e3;yt++){let $=`ncCAM/${yt<2?B:`${W} (${yt}).nc`}`;if(!j.has($))return $}throw new Error("too many saved copies")}function Kt(){et.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}L(),window.__nccam={S:r,PLAY:et,viewer:o,seek:B=>X(B)}}function wp(n,t=48){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}var ub,fb,Ze,gc,sn,Qe,db,Tp=mn(()=>{fc();Gc();yp();Sp();ub=["Model","Stock & Zero","Operations","Preview & Load"],fb=[["top","Top"],["bottom","Bottom"],["front","Front"],["back","Back"],["left","Left"],["right","Right"]],Ze=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),gc=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},sn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,Qe={close:sn('<path d="M6 6l12 12M18 6L6 18"/>'),next:sn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:sn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:sn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:sn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:sn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:sn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:sn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:sn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:sn('<path d="M3 9h18M3 15h18"/>'),pocket:sn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:sn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:sn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:sn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:sn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:sn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>'),rough3d:sn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/>'),finish3d:sn('<path d="M3 18c3 0 4-9 9-9s6 9 9 9"/>'),rest3d:sn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/><circle cx="12" cy="17" r="1.5"/>')},db={top:'<path d="M12 3l9 5-9 5-9-5z" fill="currentColor" fill-opacity=".35"/><path d="M3 8v8l9 5 9-5V8"/>',bottom:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M3 16l9-5 9 5" stroke-dasharray="2 2"/>',front:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".35"/><path d="M21 8v8l-9 5"/>',back:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 3v8" stroke-dasharray="2 2"/>',left:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".2"/><path d="M21 8v8l-9 5"/>',right:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5"/><path d="M21 8v8l-9 5V13z" fill="currentColor" fill-opacity=".35"/>'}});var yf=Nu(Fu(),1);Gc();var o0={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.02,angularDeflection:.1};function Xc(){let n=null,t=null,e=null,i=null,r=null,o=h=>(e=Gu(t,h),{solids:e.solids,size:Wr(e).size,fileSize:Wr(t).size,mesh:t.mesh,...Xu(e)}),l={async init({wasmBinary:h}){return r=h,!0},async load({bytes:h,name:u="",scale:d=[1,1,1]}){if(t=await qu(h,u),t?t.mesh=/\.stl$/i.test(u)?"stl":"3mf":t=Wu(new Uint8Array(h)),!t){n||=await(0,yf.default)({wasmBinary:r});let g=n.ReadStepFile(new Uint8Array(h),o0);if(!g.success||!g.meshes?.length)throw new Error("This file has no solid ncCAM can read. Export it again as STEP (AP214 or AP242), STL or 3MF.");t=Hu(g)}return o(d)},async rescale({scale:h}){return o(h)},async orient({up:h}){i=Jo(e,h);let u=yr(i);return{positions:Float32Array.from(i.positions),indices:i.indices.slice(),faces:i.faces,analysis:u}},async tilt({normal:h}){i=Jo(i,h);let u=yr(i);return{positions:Float32Array.from(i.positions),indices:i.indices.slice(),faces:i.faces,analysis:u}},async turn({how:h}){i=Ic(i,h==="over"?[1,0,0,0,-1,0,0,0,-1]:[-1,0,0,0,-1,0,0,0,1]);let u=yr(i);return{positions:Float32Array.from(i.positions),indices:i.indices.slice(),faces:i.faces,analysis:u}},async plan({tools:h,job:u,limits:d,paths:g,gcodeOptions:v,timing:_}){let S=af(i,h,u,d);g&&df(S);let w=g?gf(S,_):0,E=g?mf(S,v):"";for(let b of S.ops)delete b.surface;for(let b of S.ops){if(!b.moves)continue;let y=new Float32Array(b.moves.length*4);b.moves.forEach((R,z)=>{y[z*4]=R.x,y[z*4+1]=R.y,y[z*4+2]=R.z,y[z*4+3]=R.r?0:R.f}),b.track=y,delete b.moves}return{plan:S,gcode:E,seconds:w}}};return async function(u){let d=l[u.type];if(!d)throw new Error(`unknown request ${u.type}`);return d(u)}}var Ap="0.1.4-mvz9vvio";if(typeof document>"u"){let n=Xc();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e&&e.positions?[e.positions.buffer,e.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCam=window.NcCam||{};n.build!==Ap&&n.engine&&(n.engine.then(i=>i.worker?.terminate(),()=>{}),n.engine=null),n.build=Ap,n.mount=async(i,r)=>{let{mountApp:o}=await Promise.resolve().then(()=>(Tp(),Ep));try{o(i,r,await t(r))}catch(l){i.textContent=`ncCAM could not start: ${l.message||l}`}};let t=i=>n.engine||=e(i);async function e(i){let r=await fetch(i.file("lib/occt-import-js.wasm")).then(h=>{if(!h.ok)throw new Error(`lib/occt-import-js.wasm: ${h.status}`);return h.arrayBuffer()}),o=null;try{o=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{o=null}if(o){let h=0,u=new Map;o.onmessage=({data:v})=>{let _=u.get(v.id);_&&(u.delete(v.id),v.ok?_.resolve(v.result):_.reject(new Error(v.error)))};let d=(v,_={},S=[])=>new Promise((w,E)=>{let b=++h;u.set(b,{resolve:w,reject:E}),o.postMessage({..._,id:b,type:v},S)});if(await Promise.race([d("init",{wasmBinary:r}).then(()=>!0),new Promise(v=>setTimeout(()=>v(!1),5e3))]))return d.worker=o,d;o.terminate()}let l=Xc();return await l({type:"init",wasmBinary:r}),(h,u={})=>l({...u,type:h})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
