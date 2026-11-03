(()=>{var eg=Object.create;var Ac=Object.defineProperty;var ng=Object.getOwnPropertyDescriptor;var ig=Object.getOwnPropertyNames;var rg=Object.getPrototypeOf,sg=Object.prototype.hasOwnProperty;var Cc=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var gn=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var Ou=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Fu=(n,t)=>{for(var e in t)Ac(n,e,{get:t[e],enumerable:!0})},og=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ig(t))!sg.call(n,r)&&r!==e&&Ac(n,r,{get:()=>t[r],enumerable:!(i=ng(t,r))||i.enumerable});return n};var Uu=(n,t,e)=>(e=n!=null?eg(rg(n)):{},og(t||!n||!n.__esModule?Ac(e,"default",{value:n,enumerable:!0}):e,n));var zu=Ou((ku,Pc)=>{var Bu=(()=>{var n=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(t={}){var e,i=t,r,o,l=new Promise((f,m)=>{r=f,o=m}),c=typeof window=="object",u=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",g=Object.assign({},i),v=[],_="./this.program",b=(f,m)=>{throw m},w="";function E(f){return i.locateFile?i.locateFile(f,w):w+f}var M,y;if(d){var L=Cc("fs"),z=Cc("path");w=__dirname+"/",y=f=>{f=Ne(f)?new URL(f):z.normalize(f);var m=L.readFileSync(f);return m},M=(f,m=!0)=>(f=Ne(f)?new URL(f):z.normalize(f),new Promise((S,T)=>{L.readFile(f,m?void 0:"utf8",(O,W)=>{O?T(O):S(m?W.buffer:W)})})),!i.thisProgram&&process.argv.length>1&&(_=process.argv[1].replace(/\\/g,"/")),v=process.argv.slice(2),b=(f,m)=>{throw process.exitCode=f,m}}else(c||u)&&(u?w=self.location.href:typeof document<"u"&&document.currentScript&&(w=document.currentScript.src),n&&(w=n),w.startsWith("blob:")?w="":w=w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1),u&&(y=f=>{var m=new XMLHttpRequest;return m.open("GET",f,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),M=f=>Ne(f)?new Promise((m,S)=>{var T=new XMLHttpRequest;T.open("GET",f,!0),T.responseType="arraybuffer",T.onload=()=>{if(T.status==200||T.status==0&&T.response){m(T.response);return}S(T.status)},T.onerror=S,T.send(null)}):fetch(f,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(new Error(m.status+" : "+m.url))));var A=i.print||console.log.bind(console),R=i.printErr||console.error.bind(console);Object.assign(i,g),g=null,i.arguments&&(v=i.arguments),i.thisProgram&&(_=i.thisProgram);var D=i.wasmBinary,H,C=!1,k;function G(f,m){f||ye(m)}var Y,j,q,Z,K,ht,gt,Et;function yt(){var f=H.buffer;i.HEAP8=Y=new Int8Array(f),i.HEAP16=q=new Int16Array(f),i.HEAPU8=j=new Uint8Array(f),i.HEAPU16=Z=new Uint16Array(f),i.HEAP32=K=new Int32Array(f),i.HEAPU32=ht=new Uint32Array(f),i.HEAPF32=gt=new Float32Array(f),i.HEAPF64=Et=new Float64Array(f)}var Pt=[],Rt=[],jt=[],at=!1;function Bt(){var f=i.preRun;f&&(typeof f=="function"&&(f=[f]),f.forEach(ft)),Wt(Pt)}function Vt(){at=!0,!i.noFSInit&&!N.initialized&&N.init(),N.ignorePermissions=!1,ct.init(),Wt(Rt)}function Gt(){var f=i.postRun;f&&(typeof f=="function"&&(f=[f]),f.forEach(Ut)),Wt(jt)}function ft(f){Pt.unshift(f)}function St(f){Rt.unshift(f)}function Ut(f){jt.unshift(f)}var Ot=0,zt=null,it=null;function Pe(f){return f}function de(f){Ot++,i.monitorRunDependencies?.(Ot)}function me(f){if(Ot--,i.monitorRunDependencies?.(Ot),Ot==0&&(zt!==null&&(clearInterval(zt),zt=null),it)){var m=it;it=null,m()}}function ye(f){i.onAbort?.(f),f="Aborted("+f+")",R(f),C=!0,f+=". Build with -sASSERTIONS for more info.",at&&Lu();var m=new WebAssembly.RuntimeError(f);throw o(m),m}var he="data:application/octet-stream;base64,",Se=f=>f.startsWith(he),Ne=f=>f.startsWith("file://");function oe(){var f="occt-import-js.wasm";return Se(f)?f:E(f)}var Zt;function pe(f){if(f==Zt&&D)return new Uint8Array(D);if(y)return y(f);throw"both async and sync fetching of the wasm failed"}function rt(f){return D?Promise.resolve().then(()=>pe(f)):M(f).then(m=>new Uint8Array(m),()=>pe(f))}function Be(f,m,S){return rt(f).then(T=>WebAssembly.instantiate(T,m)).then(S,T=>{R(`failed to asynchronously prepare wasm: ${T}`),ye(T)})}function Ee(f,m,S,T){return!f&&typeof WebAssembly.instantiateStreaming=="function"&&!Se(m)&&!Ne(m)&&!d&&typeof fetch=="function"?fetch(m,{credentials:"same-origin"}).then(O=>{var W=WebAssembly.instantiateStreaming(O,S);return W.then(T,function(tt){return R(`wasm streaming compile failed: ${tt}`),R("falling back to ArrayBuffer instantiation"),Be(m,S,T)})}):Be(m,S,T)}function X(){return{a:$m}}function P(){var f=X();function m(T,O){return un=T.exports,H=un._,yt(),qo=un.ba,St(un.$),me("wasm-instantiate"),un}de("wasm-instantiate");function S(T){m(T.instance)}if(i.instantiateWasm)try{return i.instantiateWasm(f,m)}catch(T){R(`Module.instantiateWasm callback failed with error: ${T}`),o(T)}return Zt??=oe(),Ee(D,Zt,f,S).catch(o),{}}var nt,dt;function Ct(f){this.name="ExitStatus",this.message=`Program terminated with exit(${f})`,this.status=f}var Wt=f=>{f.forEach(m=>m(i))},kt=i.noExitRuntime||!0,xt={isAbs:f=>f.charAt(0)==="/",splitPath:f=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return m.exec(f).slice(1)},normalizeArray:(f,m)=>{for(var S=0,T=f.length-1;T>=0;T--){var O=f[T];O==="."?f.splice(T,1):O===".."?(f.splice(T,1),S++):S&&(f.splice(T,1),S--)}if(m)for(;S;S--)f.unshift("..");return f},normalize:f=>{var m=xt.isAbs(f),S=f.substr(-1)==="/";return f=xt.normalizeArray(f.split("/").filter(T=>!!T),!m).join("/"),!f&&!m&&(f="."),f&&S&&(f+="/"),(m?"/":"")+f},dirname:f=>{var m=xt.splitPath(f),S=m[0],T=m[1];return!S&&!T?".":(T&&(T=T.substr(0,T.length-1)),S+T)},basename:f=>{if(f==="/")return"/";f=xt.normalize(f),f=f.replace(/\/$/,"");var m=f.lastIndexOf("/");return m===-1?f:f.substr(m+1)},join:(...f)=>xt.normalize(f.join("/")),join2:(f,m)=>xt.normalize(f+"/"+m)},Dt=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return T=>crypto.getRandomValues(T);if(d)try{var f=Cc("crypto"),m=f.randomFillSync;if(m)return T=>f.randomFillSync(T);var S=f.randomBytes;return T=>(T.set(S(T.byteLength)),T)}catch{}ye("initRandomDevice")},Yt=f=>(Yt=Dt())(f),ne={resolve:(...f)=>{for(var m="",S=!1,T=f.length-1;T>=-1&&!S;T--){var O=T>=0?f[T]:N.cwd();if(typeof O!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!O)return"";m=O+"/"+m,S=xt.isAbs(O)}return m=xt.normalizeArray(m.split("/").filter(W=>!!W),!S).join("/"),(S?"/":"")+m||"."},relative:(f,m)=>{f=ne.resolve(f).substr(1),m=ne.resolve(m).substr(1);function S(Ht){for(var te=0;te<Ht.length&&Ht[te]==="";te++);for(var se=Ht.length-1;se>=0&&Ht[se]==="";se--);return te>se?[]:Ht.slice(te,se-te+1)}for(var T=S(f.split("/")),O=S(m.split("/")),W=Math.min(T.length,O.length),tt=W,ot=0;ot<W;ot++)if(T[ot]!==O[ot]){tt=ot;break}for(var Tt=[],ot=tt;ot<T.length;ot++)Tt.push("..");return Tt=Tt.concat(O.slice(tt)),Tt.join("/")}},$t=typeof TextDecoder<"u"?new TextDecoder:void 0,U=(f,m=0,S=NaN)=>{for(var T=m+S,O=m;f[O]&&!(O>=T);)++O;if(O-m>16&&f.buffer&&$t)return $t.decode(f.subarray(m,O));for(var W="";m<O;){var tt=f[m++];if(!(tt&128)){W+=String.fromCharCode(tt);continue}var ot=f[m++]&63;if((tt&224)==192){W+=String.fromCharCode((tt&31)<<6|ot);continue}var Tt=f[m++]&63;if((tt&240)==224?tt=(tt&15)<<12|ot<<6|Tt:tt=(tt&7)<<18|ot<<12|Tt<<6|f[m++]&63,tt<65536)W+=String.fromCharCode(tt);else{var Ht=tt-65536;W+=String.fromCharCode(55296|Ht>>10,56320|Ht&1023)}}return W},$=[],J=f=>{for(var m=0,S=0;S<f.length;++S){var T=f.charCodeAt(S);T<=127?m++:T<=2047?m+=2:T>=55296&&T<=57343?(m+=4,++S):m+=3}return m},lt=(f,m,S,T)=>{if(!(T>0))return 0;for(var O=S,W=S+T-1,tt=0;tt<f.length;++tt){var ot=f.charCodeAt(tt);if(ot>=55296&&ot<=57343){var Tt=f.charCodeAt(++tt);ot=65536+((ot&1023)<<10)|Tt&1023}if(ot<=127){if(S>=W)break;m[S++]=ot}else if(ot<=2047){if(S+1>=W)break;m[S++]=192|ot>>6,m[S++]=128|ot&63}else if(ot<=65535){if(S+2>=W)break;m[S++]=224|ot>>12,m[S++]=128|ot>>6&63,m[S++]=128|ot&63}else{if(S+3>=W)break;m[S++]=240|ot>>18,m[S++]=128|ot>>12&63,m[S++]=128|ot>>6&63,m[S++]=128|ot&63}}return m[S]=0,S-O};function V(f,m,S){var T=S>0?S:J(f)+1,O=new Array(T),W=lt(f,O,0,O.length);return m&&(O.length=W),O}var bt=()=>{if(!$.length){var f=null;if(d){var m=256,S=Buffer.alloc(m),T=0,O=process.stdin.fd;try{T=L.readSync(O,S,0,m)}catch(W){if(W.toString().includes("EOF"))T=0;else throw W}T>0&&(f=S.slice(0,T).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(f=window.prompt("Input: "),f!==null&&(f+=`
`));if(!f)return null;$=V(f,!0)}return $.shift()},ct={ttys:[],init(){},shutdown(){},register(f,m){ct.ttys[f]={input:[],output:[],ops:m},N.registerDevice(f,ct.stream_ops)},stream_ops:{open(f){var m=ct.ttys[f.node.rdev];if(!m)throw new N.ErrnoError(43);f.tty=m,f.seekable=!1},close(f){f.tty.ops.fsync(f.tty)},fsync(f){f.tty.ops.fsync(f.tty)},read(f,m,S,T,O){if(!f.tty||!f.tty.ops.get_char)throw new N.ErrnoError(60);for(var W=0,tt=0;tt<T;tt++){var ot;try{ot=f.tty.ops.get_char(f.tty)}catch{throw new N.ErrnoError(29)}if(ot===void 0&&W===0)throw new N.ErrnoError(6);if(ot==null)break;W++,m[S+tt]=ot}return W&&(f.node.timestamp=Date.now()),W},write(f,m,S,T,O){if(!f.tty||!f.tty.ops.put_char)throw new N.ErrnoError(60);try{for(var W=0;W<T;W++)f.tty.ops.put_char(f.tty,m[S+W])}catch{throw new N.ErrnoError(29)}return T&&(f.node.timestamp=Date.now()),W}},default_tty_ops:{get_char(f){return bt()},put_char(f,m){m===null||m===10?(A(U(f.output)),f.output=[]):m!=0&&f.output.push(m)},fsync(f){f.output&&f.output.length>0&&(A(U(f.output)),f.output=[])},ioctl_tcgets(f){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(f,m,S){return 0},ioctl_tiocgwinsz(f){return[24,80]}},default_tty1_ops:{put_char(f,m){m===null||m===10?(R(U(f.output)),f.output=[]):m!=0&&f.output.push(m)},fsync(f){f.output&&f.output.length>0&&(R(U(f.output)),f.output=[])}}},Lt=(f,m)=>{j.fill(0,f,f+m)},mt=(f,m)=>Math.ceil(f/m)*m,wt=f=>{f=mt(f,65536);var m=Ru(65536,f);return m&&Lt(m,f),m},At={ops_table:null,mount(f){return At.createNode(null,"/",16895,0)},createNode(f,m,S,T){if(N.isBlkdev(S)||N.isFIFO(S))throw new N.ErrnoError(63);At.ops_table||={dir:{node:{getattr:At.node_ops.getattr,setattr:At.node_ops.setattr,lookup:At.node_ops.lookup,mknod:At.node_ops.mknod,rename:At.node_ops.rename,unlink:At.node_ops.unlink,rmdir:At.node_ops.rmdir,readdir:At.node_ops.readdir,symlink:At.node_ops.symlink},stream:{llseek:At.stream_ops.llseek}},file:{node:{getattr:At.node_ops.getattr,setattr:At.node_ops.setattr},stream:{llseek:At.stream_ops.llseek,read:At.stream_ops.read,write:At.stream_ops.write,allocate:At.stream_ops.allocate,mmap:At.stream_ops.mmap,msync:At.stream_ops.msync}},link:{node:{getattr:At.node_ops.getattr,setattr:At.node_ops.setattr,readlink:At.node_ops.readlink},stream:{}},chrdev:{node:{getattr:At.node_ops.getattr,setattr:At.node_ops.setattr},stream:N.chrdev_stream_ops}};var O=N.createNode(f,m,S,T);return N.isDir(O.mode)?(O.node_ops=At.ops_table.dir.node,O.stream_ops=At.ops_table.dir.stream,O.contents={}):N.isFile(O.mode)?(O.node_ops=At.ops_table.file.node,O.stream_ops=At.ops_table.file.stream,O.usedBytes=0,O.contents=null):N.isLink(O.mode)?(O.node_ops=At.ops_table.link.node,O.stream_ops=At.ops_table.link.stream):N.isChrdev(O.mode)&&(O.node_ops=At.ops_table.chrdev.node,O.stream_ops=At.ops_table.chrdev.stream),O.timestamp=Date.now(),f&&(f.contents[m]=O,f.timestamp=O.timestamp),O},getFileDataAsTypedArray(f){return f.contents?f.contents.subarray?f.contents.subarray(0,f.usedBytes):new Uint8Array(f.contents):new Uint8Array(0)},expandFileStorage(f,m){var S=f.contents?f.contents.length:0;if(!(S>=m)){var T=1024*1024;m=Math.max(m,S*(S<T?2:1.125)>>>0),S!=0&&(m=Math.max(m,256));var O=f.contents;f.contents=new Uint8Array(m),f.usedBytes>0&&f.contents.set(O.subarray(0,f.usedBytes),0)}},resizeFileStorage(f,m){if(f.usedBytes!=m)if(m==0)f.contents=null,f.usedBytes=0;else{var S=f.contents;f.contents=new Uint8Array(m),S&&f.contents.set(S.subarray(0,Math.min(m,f.usedBytes))),f.usedBytes=m}},node_ops:{getattr(f){var m={};return m.dev=N.isChrdev(f.mode)?f.id:1,m.ino=f.id,m.mode=f.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=f.rdev,N.isDir(f.mode)?m.size=4096:N.isFile(f.mode)?m.size=f.usedBytes:N.isLink(f.mode)?m.size=f.link.length:m.size=0,m.atime=new Date(f.timestamp),m.mtime=new Date(f.timestamp),m.ctime=new Date(f.timestamp),m.blksize=4096,m.blocks=Math.ceil(m.size/m.blksize),m},setattr(f,m){m.mode!==void 0&&(f.mode=m.mode),m.timestamp!==void 0&&(f.timestamp=m.timestamp),m.size!==void 0&&At.resizeFileStorage(f,m.size)},lookup(f,m){throw N.genericErrors[44]},mknod(f,m,S,T){return At.createNode(f,m,S,T)},rename(f,m,S){if(N.isDir(f.mode)){var T;try{T=N.lookupNode(m,S)}catch{}if(T)for(var O in T.contents)throw new N.ErrnoError(55)}delete f.parent.contents[f.name],f.parent.timestamp=Date.now(),f.name=S,m.contents[S]=f,m.timestamp=f.parent.timestamp},unlink(f,m){delete f.contents[m],f.timestamp=Date.now()},rmdir(f,m){var S=N.lookupNode(f,m);for(var T in S.contents)throw new N.ErrnoError(55);delete f.contents[m],f.timestamp=Date.now()},readdir(f){var m=[".",".."];for(var S of Object.keys(f.contents))m.push(S);return m},symlink(f,m,S){var T=At.createNode(f,m,41471,0);return T.link=S,T},readlink(f){if(!N.isLink(f.mode))throw new N.ErrnoError(28);return f.link}},stream_ops:{read(f,m,S,T,O){var W=f.node.contents;if(O>=f.node.usedBytes)return 0;var tt=Math.min(f.node.usedBytes-O,T);if(tt>8&&W.subarray)m.set(W.subarray(O,O+tt),S);else for(var ot=0;ot<tt;ot++)m[S+ot]=W[O+ot];return tt},write(f,m,S,T,O,W){if(m.buffer===Y.buffer&&(W=!1),!T)return 0;var tt=f.node;if(tt.timestamp=Date.now(),m.subarray&&(!tt.contents||tt.contents.subarray)){if(W)return tt.contents=m.subarray(S,S+T),tt.usedBytes=T,T;if(tt.usedBytes===0&&O===0)return tt.contents=m.slice(S,S+T),tt.usedBytes=T,T;if(O+T<=tt.usedBytes)return tt.contents.set(m.subarray(S,S+T),O),T}if(At.expandFileStorage(tt,O+T),tt.contents.subarray&&m.subarray)tt.contents.set(m.subarray(S,S+T),O);else for(var ot=0;ot<T;ot++)tt.contents[O+ot]=m[S+ot];return tt.usedBytes=Math.max(tt.usedBytes,O+T),T},llseek(f,m,S){var T=m;if(S===1?T+=f.position:S===2&&N.isFile(f.node.mode)&&(T+=f.node.usedBytes),T<0)throw new N.ErrnoError(28);return T},allocate(f,m,S){At.expandFileStorage(f.node,m+S),f.node.usedBytes=Math.max(f.node.usedBytes,m+S)},mmap(f,m,S,T,O){if(!N.isFile(f.node.mode))throw new N.ErrnoError(43);var W,tt,ot=f.node.contents;if(!(O&2)&&ot&&ot.buffer===Y.buffer)tt=!1,W=ot.byteOffset;else{if(tt=!0,W=wt(m),!W)throw new N.ErrnoError(48);ot&&((S>0||S+m<ot.length)&&(ot.subarray?ot=ot.subarray(S,S+m):ot=Array.prototype.slice.call(ot,S,S+m)),Y.set(ot,W))}return{ptr:W,allocated:tt}},msync(f,m,S,T,O){return At.stream_ops.write(f,m,0,T,S,!1),0}}},qt=(f,m,S,T)=>{var O=T?"":`al ${f}`;M(f).then(W=>{m(new Uint8Array(W)),O&&me(O)},W=>{if(S)S();else throw`Loading data file "${f}" failed.`}),O&&de(O)},Ie=(f,m,S,T,O,W)=>{N.createDataFile(f,m,S,T,O,W)},Te=i.preloadPlugins||[],An=(f,m,S,T)=>{typeof Browser<"u"&&Browser.init();var O=!1;return Te.forEach(W=>{O||W.canHandle(m)&&(W.handle(f,m,S,T),O=!0)}),O},Ln=(f,m,S,T,O,W,tt,ot,Tt,Ht)=>{var te=m?ne.resolve(xt.join2(f,m)):f,se=`cp ${te}`;function fe(ce){function Me(ze){Ht?.(),ot||Ie(f,m,ze,T,O,Tt),W?.(),me(se)}An(ce,te,Me,()=>{tt?.(),me(se)})||Me(ce)}de(se),typeof S=="string"?qt(S,fe,tt):fe(S)},ks=f=>{var m={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},S=m[f];if(typeof S>"u")throw new Error(`Unknown file open mode: ${f}`);return S},yr=(f,m)=>{var S=0;return f&&(S|=365),m&&(S|=146),S},N={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(f){this.name="ErrnoError",this.errno=f}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(f){this.node=f}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(f){this.shared.flags=f}get position(){return this.shared.position}set position(f){this.shared.position=f}},FSNode:class{constructor(f,m,S,T){f||(f=this),this.parent=f,this.mount=f.mount,this.mounted=null,this.id=N.nextInode++,this.name=m,this.mode=S,this.node_ops={},this.stream_ops={},this.rdev=T,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(f){f?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(f){f?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return N.isDir(this.mode)}get isDevice(){return N.isChrdev(this.mode)}},lookupPath(f,m={}){if(f=ne.resolve(f),!f)return{path:"",node:null};var S={follow_mount:!0,recurse_count:0};if(m=Object.assign(S,m),m.recurse_count>8)throw new N.ErrnoError(32);for(var T=f.split("/").filter(se=>!!se),O=N.root,W="/",tt=0;tt<T.length;tt++){var ot=tt===T.length-1;if(ot&&m.parent)break;if(O=N.lookupNode(O,T[tt]),W=xt.join2(W,T[tt]),N.isMountpoint(O)&&(!ot||ot&&m.follow_mount)&&(O=O.mounted.root),!ot||m.follow)for(var Tt=0;N.isLink(O.mode);){var Ht=N.readlink(W);W=ne.resolve(xt.dirname(W),Ht);var te=N.lookupPath(W,{recurse_count:m.recurse_count+1});if(O=te.node,Tt++>40)throw new N.ErrnoError(32)}}return{path:W,node:O}},getPath(f){for(var m;;){if(N.isRoot(f)){var S=f.mount.mountpoint;return m?S[S.length-1]!=="/"?`${S}/${m}`:S+m:S}m=m?`${f.name}/${m}`:f.name,f=f.parent}},hashName(f,m){for(var S=0,T=0;T<m.length;T++)S=(S<<5)-S+m.charCodeAt(T)|0;return(f+S>>>0)%N.nameTable.length},hashAddNode(f){var m=N.hashName(f.parent.id,f.name);f.name_next=N.nameTable[m],N.nameTable[m]=f},hashRemoveNode(f){var m=N.hashName(f.parent.id,f.name);if(N.nameTable[m]===f)N.nameTable[m]=f.name_next;else for(var S=N.nameTable[m];S;){if(S.name_next===f){S.name_next=f.name_next;break}S=S.name_next}},lookupNode(f,m){var S=N.mayLookup(f);if(S)throw new N.ErrnoError(S);for(var T=N.hashName(f.id,m),O=N.nameTable[T];O;O=O.name_next){var W=O.name;if(O.parent.id===f.id&&W===m)return O}return N.lookup(f,m)},createNode(f,m,S,T){var O=new N.FSNode(f,m,S,T);return N.hashAddNode(O),O},destroyNode(f){N.hashRemoveNode(f)},isRoot(f){return f===f.parent},isMountpoint(f){return!!f.mounted},isFile(f){return(f&61440)===32768},isDir(f){return(f&61440)===16384},isLink(f){return(f&61440)===40960},isChrdev(f){return(f&61440)===8192},isBlkdev(f){return(f&61440)===24576},isFIFO(f){return(f&61440)===4096},isSocket(f){return(f&49152)===49152},flagsToPermissionString(f){var m=["r","w","rw"][f&3];return f&512&&(m+="w"),m},nodePermissions(f,m){return N.ignorePermissions?0:m.includes("r")&&!(f.mode&292)||m.includes("w")&&!(f.mode&146)||m.includes("x")&&!(f.mode&73)?2:0},mayLookup(f){if(!N.isDir(f.mode))return 54;var m=N.nodePermissions(f,"x");return m||(f.node_ops.lookup?0:2)},mayCreate(f,m){try{var S=N.lookupNode(f,m);return 20}catch{}return N.nodePermissions(f,"wx")},mayDelete(f,m,S){var T;try{T=N.lookupNode(f,m)}catch(W){return W.errno}var O=N.nodePermissions(f,"wx");if(O)return O;if(S){if(!N.isDir(T.mode))return 54;if(N.isRoot(T)||N.getPath(T)===N.cwd())return 10}else if(N.isDir(T.mode))return 31;return 0},mayOpen(f,m){return f?N.isLink(f.mode)?32:N.isDir(f.mode)&&(N.flagsToPermissionString(m)!=="r"||m&512)?31:N.nodePermissions(f,N.flagsToPermissionString(m)):44},MAX_OPEN_FDS:4096,nextfd(){for(var f=0;f<=N.MAX_OPEN_FDS;f++)if(!N.streams[f])return f;throw new N.ErrnoError(33)},getStreamChecked(f){var m=N.getStream(f);if(!m)throw new N.ErrnoError(8);return m},getStream:f=>N.streams[f],createStream(f,m=-1){return f=Object.assign(new N.FSStream,f),m==-1&&(m=N.nextfd()),f.fd=m,N.streams[m]=f,f},closeStream(f){N.streams[f]=null},dupStream(f,m=-1){var S=N.createStream(f,m);return S.stream_ops?.dup?.(S),S},chrdev_stream_ops:{open(f){var m=N.getDevice(f.node.rdev);f.stream_ops=m.stream_ops,f.stream_ops.open?.(f)},llseek(){throw new N.ErrnoError(70)}},major:f=>f>>8,minor:f=>f&255,makedev:(f,m)=>f<<8|m,registerDevice(f,m){N.devices[f]={stream_ops:m}},getDevice:f=>N.devices[f],getMounts(f){for(var m=[],S=[f];S.length;){var T=S.pop();m.push(T),S.push(...T.mounts)}return m},syncfs(f,m){typeof f=="function"&&(m=f,f=!1),N.syncFSRequests++,N.syncFSRequests>1&&R(`warning: ${N.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var S=N.getMounts(N.root.mount),T=0;function O(tt){return N.syncFSRequests--,m(tt)}function W(tt){if(tt)return W.errored?void 0:(W.errored=!0,O(tt));++T>=S.length&&O(null)}S.forEach(tt=>{if(!tt.type.syncfs)return W(null);tt.type.syncfs(tt,f,W)})},mount(f,m,S){var T=S==="/",O=!S,W;if(T&&N.root)throw new N.ErrnoError(10);if(!T&&!O){var tt=N.lookupPath(S,{follow_mount:!1});if(S=tt.path,W=tt.node,N.isMountpoint(W))throw new N.ErrnoError(10);if(!N.isDir(W.mode))throw new N.ErrnoError(54)}var ot={type:f,opts:m,mountpoint:S,mounts:[]},Tt=f.mount(ot);return Tt.mount=ot,ot.root=Tt,T?N.root=Tt:W&&(W.mounted=ot,W.mount&&W.mount.mounts.push(ot)),Tt},unmount(f){var m=N.lookupPath(f,{follow_mount:!1});if(!N.isMountpoint(m.node))throw new N.ErrnoError(28);var S=m.node,T=S.mounted,O=N.getMounts(T);Object.keys(N.nameTable).forEach(tt=>{for(var ot=N.nameTable[tt];ot;){var Tt=ot.name_next;O.includes(ot.mount)&&N.destroyNode(ot),ot=Tt}}),S.mounted=null;var W=S.mount.mounts.indexOf(T);S.mount.mounts.splice(W,1)},lookup(f,m){return f.node_ops.lookup(f,m)},mknod(f,m,S){var T=N.lookupPath(f,{parent:!0}),O=T.node,W=xt.basename(f);if(!W||W==="."||W==="..")throw new N.ErrnoError(28);var tt=N.mayCreate(O,W);if(tt)throw new N.ErrnoError(tt);if(!O.node_ops.mknod)throw new N.ErrnoError(63);return O.node_ops.mknod(O,W,m,S)},create(f,m){return m=m!==void 0?m:438,m&=4095,m|=32768,N.mknod(f,m,0)},mkdir(f,m){return m=m!==void 0?m:511,m&=1023,m|=16384,N.mknod(f,m,0)},mkdirTree(f,m){for(var S=f.split("/"),T="",O=0;O<S.length;++O)if(S[O]){T+="/"+S[O];try{N.mkdir(T,m)}catch(W){if(W.errno!=20)throw W}}},mkdev(f,m,S){return typeof S>"u"&&(S=m,m=438),m|=8192,N.mknod(f,m,S)},symlink(f,m){if(!ne.resolve(f))throw new N.ErrnoError(44);var S=N.lookupPath(m,{parent:!0}),T=S.node;if(!T)throw new N.ErrnoError(44);var O=xt.basename(m),W=N.mayCreate(T,O);if(W)throw new N.ErrnoError(W);if(!T.node_ops.symlink)throw new N.ErrnoError(63);return T.node_ops.symlink(T,O,f)},rename(f,m){var S=xt.dirname(f),T=xt.dirname(m),O=xt.basename(f),W=xt.basename(m),tt,ot,Tt;if(tt=N.lookupPath(f,{parent:!0}),ot=tt.node,tt=N.lookupPath(m,{parent:!0}),Tt=tt.node,!ot||!Tt)throw new N.ErrnoError(44);if(ot.mount!==Tt.mount)throw new N.ErrnoError(75);var Ht=N.lookupNode(ot,O),te=ne.relative(f,T);if(te.charAt(0)!==".")throw new N.ErrnoError(28);if(te=ne.relative(m,S),te.charAt(0)!==".")throw new N.ErrnoError(55);var se;try{se=N.lookupNode(Tt,W)}catch{}if(Ht!==se){var fe=N.isDir(Ht.mode),ce=N.mayDelete(ot,O,fe);if(ce)throw new N.ErrnoError(ce);if(ce=se?N.mayDelete(Tt,W,fe):N.mayCreate(Tt,W),ce)throw new N.ErrnoError(ce);if(!ot.node_ops.rename)throw new N.ErrnoError(63);if(N.isMountpoint(Ht)||se&&N.isMountpoint(se))throw new N.ErrnoError(10);if(Tt!==ot&&(ce=N.nodePermissions(ot,"w"),ce))throw new N.ErrnoError(ce);N.hashRemoveNode(Ht);try{ot.node_ops.rename(Ht,Tt,W),Ht.parent=Tt}catch(Me){throw Me}finally{N.hashAddNode(Ht)}}},rmdir(f){var m=N.lookupPath(f,{parent:!0}),S=m.node,T=xt.basename(f),O=N.lookupNode(S,T),W=N.mayDelete(S,T,!0);if(W)throw new N.ErrnoError(W);if(!S.node_ops.rmdir)throw new N.ErrnoError(63);if(N.isMountpoint(O))throw new N.ErrnoError(10);S.node_ops.rmdir(S,T),N.destroyNode(O)},readdir(f){var m=N.lookupPath(f,{follow:!0}),S=m.node;if(!S.node_ops.readdir)throw new N.ErrnoError(54);return S.node_ops.readdir(S)},unlink(f){var m=N.lookupPath(f,{parent:!0}),S=m.node;if(!S)throw new N.ErrnoError(44);var T=xt.basename(f),O=N.lookupNode(S,T),W=N.mayDelete(S,T,!1);if(W)throw new N.ErrnoError(W);if(!S.node_ops.unlink)throw new N.ErrnoError(63);if(N.isMountpoint(O))throw new N.ErrnoError(10);S.node_ops.unlink(S,T),N.destroyNode(O)},readlink(f){var m=N.lookupPath(f),S=m.node;if(!S)throw new N.ErrnoError(44);if(!S.node_ops.readlink)throw new N.ErrnoError(28);return ne.resolve(N.getPath(S.parent),S.node_ops.readlink(S))},stat(f,m){var S=N.lookupPath(f,{follow:!m}),T=S.node;if(!T)throw new N.ErrnoError(44);if(!T.node_ops.getattr)throw new N.ErrnoError(63);return T.node_ops.getattr(T)},lstat(f){return N.stat(f,!0)},chmod(f,m,S){var T;if(typeof f=="string"){var O=N.lookupPath(f,{follow:!S});T=O.node}else T=f;if(!T.node_ops.setattr)throw new N.ErrnoError(63);T.node_ops.setattr(T,{mode:m&4095|T.mode&-4096,timestamp:Date.now()})},lchmod(f,m){N.chmod(f,m,!0)},fchmod(f,m){var S=N.getStreamChecked(f);N.chmod(S.node,m)},chown(f,m,S,T){var O;if(typeof f=="string"){var W=N.lookupPath(f,{follow:!T});O=W.node}else O=f;if(!O.node_ops.setattr)throw new N.ErrnoError(63);O.node_ops.setattr(O,{timestamp:Date.now()})},lchown(f,m,S){N.chown(f,m,S,!0)},fchown(f,m,S){var T=N.getStreamChecked(f);N.chown(T.node,m,S)},truncate(f,m){if(m<0)throw new N.ErrnoError(28);var S;if(typeof f=="string"){var T=N.lookupPath(f,{follow:!0});S=T.node}else S=f;if(!S.node_ops.setattr)throw new N.ErrnoError(63);if(N.isDir(S.mode))throw new N.ErrnoError(31);if(!N.isFile(S.mode))throw new N.ErrnoError(28);var O=N.nodePermissions(S,"w");if(O)throw new N.ErrnoError(O);S.node_ops.setattr(S,{size:m,timestamp:Date.now()})},ftruncate(f,m){var S=N.getStreamChecked(f);if((S.flags&2097155)===0)throw new N.ErrnoError(28);N.truncate(S.node,m)},utime(f,m,S){var T=N.lookupPath(f,{follow:!0}),O=T.node;O.node_ops.setattr(O,{timestamp:Math.max(m,S)})},open(f,m,S){if(f==="")throw new N.ErrnoError(44);m=typeof m=="string"?ks(m):m,m&64?(S=typeof S>"u"?438:S,S=S&4095|32768):S=0;var T;if(typeof f=="object")T=f;else{f=xt.normalize(f);try{var O=N.lookupPath(f,{follow:!(m&131072)});T=O.node}catch{}}var W=!1;if(m&64)if(T){if(m&128)throw new N.ErrnoError(20)}else T=N.mknod(f,S,0),W=!0;if(!T)throw new N.ErrnoError(44);if(N.isChrdev(T.mode)&&(m&=-513),m&65536&&!N.isDir(T.mode))throw new N.ErrnoError(54);if(!W){var tt=N.mayOpen(T,m);if(tt)throw new N.ErrnoError(tt)}m&512&&!W&&N.truncate(T,0),m&=-131713;var ot=N.createStream({node:T,path:N.getPath(T),flags:m,seekable:!0,position:0,stream_ops:T.stream_ops,ungotten:[],error:!1});return ot.stream_ops.open&&ot.stream_ops.open(ot),i.logReadFiles&&!(m&1)&&(f in N.readFiles||(N.readFiles[f]=1)),ot},close(f){if(N.isClosed(f))throw new N.ErrnoError(8);f.getdents&&(f.getdents=null);try{f.stream_ops.close&&f.stream_ops.close(f)}catch(m){throw m}finally{N.closeStream(f.fd)}f.fd=null},isClosed(f){return f.fd===null},llseek(f,m,S){if(N.isClosed(f))throw new N.ErrnoError(8);if(!f.seekable||!f.stream_ops.llseek)throw new N.ErrnoError(70);if(S!=0&&S!=1&&S!=2)throw new N.ErrnoError(28);return f.position=f.stream_ops.llseek(f,m,S),f.ungotten=[],f.position},read(f,m,S,T,O){if(T<0||O<0)throw new N.ErrnoError(28);if(N.isClosed(f))throw new N.ErrnoError(8);if((f.flags&2097155)===1)throw new N.ErrnoError(8);if(N.isDir(f.node.mode))throw new N.ErrnoError(31);if(!f.stream_ops.read)throw new N.ErrnoError(28);var W=typeof O<"u";if(!W)O=f.position;else if(!f.seekable)throw new N.ErrnoError(70);var tt=f.stream_ops.read(f,m,S,T,O);return W||(f.position+=tt),tt},write(f,m,S,T,O,W){if(T<0||O<0)throw new N.ErrnoError(28);if(N.isClosed(f))throw new N.ErrnoError(8);if((f.flags&2097155)===0)throw new N.ErrnoError(8);if(N.isDir(f.node.mode))throw new N.ErrnoError(31);if(!f.stream_ops.write)throw new N.ErrnoError(28);f.seekable&&f.flags&1024&&N.llseek(f,0,2);var tt=typeof O<"u";if(!tt)O=f.position;else if(!f.seekable)throw new N.ErrnoError(70);var ot=f.stream_ops.write(f,m,S,T,O,W);return tt||(f.position+=ot),ot},allocate(f,m,S){if(N.isClosed(f))throw new N.ErrnoError(8);if(m<0||S<=0)throw new N.ErrnoError(28);if((f.flags&2097155)===0)throw new N.ErrnoError(8);if(!N.isFile(f.node.mode)&&!N.isDir(f.node.mode))throw new N.ErrnoError(43);if(!f.stream_ops.allocate)throw new N.ErrnoError(138);f.stream_ops.allocate(f,m,S)},mmap(f,m,S,T,O){if((T&2)!==0&&(O&2)===0&&(f.flags&2097155)!==2)throw new N.ErrnoError(2);if((f.flags&2097155)===1)throw new N.ErrnoError(2);if(!f.stream_ops.mmap)throw new N.ErrnoError(43);if(!m)throw new N.ErrnoError(28);return f.stream_ops.mmap(f,m,S,T,O)},msync(f,m,S,T,O){return f.stream_ops.msync?f.stream_ops.msync(f,m,S,T,O):0},ioctl(f,m,S){if(!f.stream_ops.ioctl)throw new N.ErrnoError(59);return f.stream_ops.ioctl(f,m,S)},readFile(f,m={}){if(m.flags=m.flags||0,m.encoding=m.encoding||"binary",m.encoding!=="utf8"&&m.encoding!=="binary")throw new Error(`Invalid encoding type "${m.encoding}"`);var S,T=N.open(f,m.flags),O=N.stat(f),W=O.size,tt=new Uint8Array(W);return N.read(T,tt,0,W,0),m.encoding==="utf8"?S=U(tt):m.encoding==="binary"&&(S=tt),N.close(T),S},writeFile(f,m,S={}){S.flags=S.flags||577;var T=N.open(f,S.flags,S.mode);if(typeof m=="string"){var O=new Uint8Array(J(m)+1),W=lt(m,O,0,O.length);N.write(T,O,0,W,void 0,S.canOwn)}else if(ArrayBuffer.isView(m))N.write(T,m,0,m.byteLength,void 0,S.canOwn);else throw new Error("Unsupported data type");N.close(T)},cwd:()=>N.currentPath,chdir(f){var m=N.lookupPath(f,{follow:!0});if(m.node===null)throw new N.ErrnoError(44);if(!N.isDir(m.node.mode))throw new N.ErrnoError(54);var S=N.nodePermissions(m.node,"x");if(S)throw new N.ErrnoError(S);N.currentPath=m.path},createDefaultDirectories(){N.mkdir("/tmp"),N.mkdir("/home"),N.mkdir("/home/web_user")},createDefaultDevices(){N.mkdir("/dev"),N.registerDevice(N.makedev(1,3),{read:()=>0,write:(T,O,W,tt,ot)=>tt}),N.mkdev("/dev/null",N.makedev(1,3)),ct.register(N.makedev(5,0),ct.default_tty_ops),ct.register(N.makedev(6,0),ct.default_tty1_ops),N.mkdev("/dev/tty",N.makedev(5,0)),N.mkdev("/dev/tty1",N.makedev(6,0));var f=new Uint8Array(1024),m=0,S=()=>(m===0&&(m=Yt(f).byteLength),f[--m]);N.createDevice("/dev","random",S),N.createDevice("/dev","urandom",S),N.mkdir("/dev/shm"),N.mkdir("/dev/shm/tmp")},createSpecialDirectories(){N.mkdir("/proc");var f=N.mkdir("/proc/self");N.mkdir("/proc/self/fd"),N.mount({mount(){var m=N.createNode(f,"fd",16895,73);return m.node_ops={lookup(S,T){var O=+T,W=N.getStreamChecked(O),tt={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>W.path}};return tt.parent=tt,tt}},m}},{},"/proc/self/fd")},createStandardStreams(f,m,S){f?N.createDevice("/dev","stdin",f):N.symlink("/dev/tty","/dev/stdin"),m?N.createDevice("/dev","stdout",null,m):N.symlink("/dev/tty","/dev/stdout"),S?N.createDevice("/dev","stderr",null,S):N.symlink("/dev/tty1","/dev/stderr");var T=N.open("/dev/stdin",0),O=N.open("/dev/stdout",1),W=N.open("/dev/stderr",1)},staticInit(){[44].forEach(f=>{N.genericErrors[f]=new N.ErrnoError(f),N.genericErrors[f].stack="<generic error, no stack>"}),N.nameTable=new Array(4096),N.mount(At,{},"/"),N.createDefaultDirectories(),N.createDefaultDevices(),N.createSpecialDirectories(),N.filesystems={MEMFS:At}},init(f,m,S){N.initialized=!0,f??=i.stdin,m??=i.stdout,S??=i.stderr,N.createStandardStreams(f,m,S)},quit(){N.initialized=!1;for(var f=0;f<N.streams.length;f++){var m=N.streams[f];m&&N.close(m)}},findObject(f,m){var S=N.analyzePath(f,m);return S.exists?S.object:null},analyzePath(f,m){try{var S=N.lookupPath(f,{follow:!m});f=S.path}catch{}var T={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var S=N.lookupPath(f,{parent:!0});T.parentExists=!0,T.parentPath=S.path,T.parentObject=S.node,T.name=xt.basename(f),S=N.lookupPath(f,{follow:!m}),T.exists=!0,T.path=S.path,T.object=S.node,T.name=S.node.name,T.isRoot=S.path==="/"}catch(O){T.error=O.errno}return T},createPath(f,m,S,T){f=typeof f=="string"?f:N.getPath(f);for(var O=m.split("/").reverse();O.length;){var W=O.pop();if(W){var tt=xt.join2(f,W);try{N.mkdir(tt)}catch{}f=tt}}return tt},createFile(f,m,S,T,O){var W=xt.join2(typeof f=="string"?f:N.getPath(f),m),tt=yr(T,O);return N.create(W,tt)},createDataFile(f,m,S,T,O,W){var tt=m;f&&(f=typeof f=="string"?f:N.getPath(f),tt=m?xt.join2(f,m):f);var ot=yr(T,O),Tt=N.create(tt,ot);if(S){if(typeof S=="string"){for(var Ht=new Array(S.length),te=0,se=S.length;te<se;++te)Ht[te]=S.charCodeAt(te);S=Ht}N.chmod(Tt,ot|146);var fe=N.open(Tt,577);N.write(fe,S,0,S.length,0,W),N.close(fe),N.chmod(Tt,ot)}},createDevice(f,m,S,T){var O=xt.join2(typeof f=="string"?f:N.getPath(f),m),W=yr(!!S,!!T);N.createDevice.major??=64;var tt=N.makedev(N.createDevice.major++,0);return N.registerDevice(tt,{open(ot){ot.seekable=!1},close(ot){T?.buffer?.length&&T(10)},read(ot,Tt,Ht,te,se){for(var fe=0,ce=0;ce<te;ce++){var Me;try{Me=S()}catch{throw new N.ErrnoError(29)}if(Me===void 0&&fe===0)throw new N.ErrnoError(6);if(Me==null)break;fe++,Tt[Ht+ce]=Me}return fe&&(ot.node.timestamp=Date.now()),fe},write(ot,Tt,Ht,te,se){for(var fe=0;fe<te;fe++)try{T(Tt[Ht+fe])}catch{throw new N.ErrnoError(29)}return te&&(ot.node.timestamp=Date.now()),fe}}),N.mkdev(O,W,tt)},forceLoadFile(f){if(f.isDevice||f.isFolder||f.link||f.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{f.contents=y(f.url),f.usedBytes=f.contents.length}catch{throw new N.ErrnoError(29)}},createLazyFile(f,m,S,T,O){class W{constructor(){this.lengthKnown=!1,this.chunks=[]}get(ce){if(!(ce>this.length-1||ce<0)){var Me=ce%this.chunkSize,ze=ce/this.chunkSize|0;return this.getter(ze)[Me]}}setDataGetter(ce){this.getter=ce}cacheLength(){var ce=new XMLHttpRequest;if(ce.open("HEAD",S,!1),ce.send(null),!(ce.status>=200&&ce.status<300||ce.status===304))throw new Error("Couldn't load "+S+". Status: "+ce.status);var Me=Number(ce.getResponseHeader("Content-length")),ze,Mn=(ze=ce.getResponseHeader("Accept-Ranges"))&&ze==="bytes",en=(ze=ce.getResponseHeader("Content-Encoding"))&&ze==="gzip",ii=1024*1024;Mn||(ii=Me);var ri=(vi,$r)=>{if(vi>$r)throw new Error("invalid range ("+vi+", "+$r+") or no bytes requested!");if($r>Me-1)throw new Error("only "+Me+" bytes available! programmer error!");var mn=new XMLHttpRequest;if(mn.open("GET",S,!1),Me!==ii&&mn.setRequestHeader("Range","bytes="+vi+"-"+$r),mn.responseType="arraybuffer",mn.overrideMimeType&&mn.overrideMimeType("text/plain; charset=x-user-defined"),mn.send(null),!(mn.status>=200&&mn.status<300||mn.status===304))throw new Error("Couldn't load "+S+". Status: "+mn.status);return mn.response!==void 0?new Uint8Array(mn.response||[]):V(mn.responseText||"",!0)},Xs=this;Xs.setDataGetter(vi=>{var $r=vi*ii,mn=(vi+1)*ii-1;if(mn=Math.min(mn,Me-1),typeof Xs.chunks[vi]>"u"&&(Xs.chunks[vi]=ri($r,mn)),typeof Xs.chunks[vi]>"u")throw new Error("doXHR failed!");return Xs.chunks[vi]}),(en||!Me)&&(ii=Me=1,Me=this.getter(0).length,ii=Me,A("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Me,this._chunkSize=ii,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!u)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var tt=new W,ot={isDevice:!1,contents:tt}}else var ot={isDevice:!1,url:S};var Tt=N.createFile(f,m,ot,T,O);ot.contents?Tt.contents=ot.contents:ot.url&&(Tt.contents=null,Tt.url=ot.url),Object.defineProperties(Tt,{usedBytes:{get:function(){return this.contents.length}}});var Ht={},te=Object.keys(Tt.stream_ops);te.forEach(fe=>{var ce=Tt.stream_ops[fe];Ht[fe]=(...Me)=>(N.forceLoadFile(Tt),ce(...Me))});function se(fe,ce,Me,ze,Mn){var en=fe.node.contents;if(Mn>=en.length)return 0;var ii=Math.min(en.length-Mn,ze);if(en.slice)for(var ri=0;ri<ii;ri++)ce[Me+ri]=en[Mn+ri];else for(var ri=0;ri<ii;ri++)ce[Me+ri]=en.get(Mn+ri);return ii}return Ht.read=(fe,ce,Me,ze,Mn)=>(N.forceLoadFile(Tt),se(fe,ce,Me,ze,Mn)),Ht.mmap=(fe,ce,Me,ze,Mn)=>{N.forceLoadFile(Tt);var en=wt(ce);if(!en)throw new N.ErrnoError(48);return se(fe,Y,en,ce,Me),{ptr:en,allocated:!0}},Tt.stream_ops=Ht,Tt}},Ci=(f,m)=>f?U(j,f,m):"",Fe={DEFAULT_POLLMASK:5,calculateAt(f,m,S){if(xt.isAbs(m))return m;var T;if(f===-100)T=N.cwd();else{var O=Fe.getStreamFromFD(f);T=O.path}if(m.length==0){if(!S)throw new N.ErrnoError(44);return T}return xt.join2(T,m)},doStat(f,m,S){var T=f(m);K[S>>2]=T.dev,K[S+4>>2]=T.mode,ht[S+8>>2]=T.nlink,K[S+12>>2]=T.uid,K[S+16>>2]=T.gid,K[S+20>>2]=T.rdev,dt=[T.size>>>0,(nt=T.size,+Math.abs(nt)>=1?nt>0?+Math.floor(nt/4294967296)>>>0:~~+Math.ceil((nt-+(~~nt>>>0))/4294967296)>>>0:0)],K[S+24>>2]=dt[0],K[S+28>>2]=dt[1],K[S+32>>2]=4096,K[S+36>>2]=T.blocks;var O=T.atime.getTime(),W=T.mtime.getTime(),tt=T.ctime.getTime();return dt=[Math.floor(O/1e3)>>>0,(nt=Math.floor(O/1e3),+Math.abs(nt)>=1?nt>0?+Math.floor(nt/4294967296)>>>0:~~+Math.ceil((nt-+(~~nt>>>0))/4294967296)>>>0:0)],K[S+40>>2]=dt[0],K[S+44>>2]=dt[1],ht[S+48>>2]=O%1e3*1e3*1e3,dt=[Math.floor(W/1e3)>>>0,(nt=Math.floor(W/1e3),+Math.abs(nt)>=1?nt>0?+Math.floor(nt/4294967296)>>>0:~~+Math.ceil((nt-+(~~nt>>>0))/4294967296)>>>0:0)],K[S+56>>2]=dt[0],K[S+60>>2]=dt[1],ht[S+64>>2]=W%1e3*1e3*1e3,dt=[Math.floor(tt/1e3)>>>0,(nt=Math.floor(tt/1e3),+Math.abs(nt)>=1?nt>0?+Math.floor(nt/4294967296)>>>0:~~+Math.ceil((nt-+(~~nt>>>0))/4294967296)>>>0:0)],K[S+72>>2]=dt[0],K[S+76>>2]=dt[1],ht[S+80>>2]=tt%1e3*1e3*1e3,dt=[T.ino>>>0,(nt=T.ino,+Math.abs(nt)>=1?nt>0?+Math.floor(nt/4294967296)>>>0:~~+Math.ceil((nt-+(~~nt>>>0))/4294967296)>>>0:0)],K[S+88>>2]=dt[0],K[S+92>>2]=dt[1],0},doMsync(f,m,S,T,O){if(!N.isFile(m.node.mode))throw new N.ErrnoError(43);if(T&2)return 0;var W=j.slice(f,f+S);N.msync(m,W,O,S,T)},getStreamFromFD(f){var m=N.getStreamChecked(f);return m},varargs:void 0,getStr(f){var m=Ci(f);return m}};function Br(f,m){try{return f=Fe.getStr(f),N.chmod(f,m),0}catch(S){if(typeof N>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function kr(f,m,S,T){try{if(m=Fe.getStr(m),m=Fe.calculateAt(f,m),S&-8)return-28;var O=N.lookupPath(m,{follow:!0}),W=O.node;if(!W)return-44;var tt="";return S&4&&(tt+="r"),S&2&&(tt+="w"),S&1&&(tt+="x"),tt&&N.nodePermissions(W,tt)?-2:0}catch(ot){if(typeof N>"u"||ot.name!=="ErrnoError")throw ot;return-ot.errno}}function Nn(){var f=K[+Fe.varargs>>2];return Fe.varargs+=4,f}var qn=Nn;function zr(f,m,S){Fe.varargs=S;try{var T=Fe.getStreamFromFD(f);switch(m){case 0:{var O=Nn();if(O<0)return-28;for(;N.streams[O];)O++;var W;return W=N.dupStream(T,O),W.fd}case 1:case 2:return 0;case 3:return T.flags;case 4:{var O=Nn();return T.flags|=O,0}case 12:{var O=qn(),tt=0;return q[O+tt>>1]=2,0}case 13:case 14:return 0}return-28}catch(ot){if(typeof N>"u"||ot.name!=="ErrnoError")throw ot;return-ot.errno}}function gi(f,m){try{var S=Fe.getStreamFromFD(f);return Fe.doStat(N.stat,S.path,m)}catch(T){if(typeof N>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function Pi(f,m,S){Fe.varargs=S;try{var T=Fe.getStreamFromFD(f);switch(m){case 21509:return T.tty?0:-59;case 21505:{if(!T.tty)return-59;if(T.tty.ops.ioctl_tcgets){var O=T.tty.ops.ioctl_tcgets(T),W=qn();K[W>>2]=O.c_iflag||0,K[W+4>>2]=O.c_oflag||0,K[W+8>>2]=O.c_cflag||0,K[W+12>>2]=O.c_lflag||0;for(var tt=0;tt<32;tt++)Y[W+tt+17]=O.c_cc[tt]||0;return 0}return 0}case 21510:case 21511:case 21512:return T.tty?0:-59;case 21506:case 21507:case 21508:{if(!T.tty)return-59;if(T.tty.ops.ioctl_tcsets){for(var W=qn(),ot=K[W>>2],Tt=K[W+4>>2],Ht=K[W+8>>2],te=K[W+12>>2],se=[],tt=0;tt<32;tt++)se.push(Y[W+tt+17]);return T.tty.ops.ioctl_tcsets(T.tty,m,{c_iflag:ot,c_oflag:Tt,c_cflag:Ht,c_lflag:te,c_cc:se})}return 0}case 21519:{if(!T.tty)return-59;var W=qn();return K[W>>2]=0,0}case 21520:return T.tty?-28:-59;case 21531:{var W=qn();return N.ioctl(T,m,W)}case 21523:{if(!T.tty)return-59;if(T.tty.ops.ioctl_tiocgwinsz){var fe=T.tty.ops.ioctl_tiocgwinsz(T.tty),W=qn();q[W>>1]=fe[0],q[W+2>>1]=fe[1]}return 0}case 21524:return T.tty?0:-59;case 21515:return T.tty?0:-59;default:return-28}}catch(ce){if(typeof N>"u"||ce.name!=="ErrnoError")throw ce;return-ce.errno}}function Vr(f,m){try{return f=Fe.getStr(f),Fe.doStat(N.lstat,f,m)}catch(S){if(typeof N>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function qi(f,m,S,T){try{m=Fe.getStr(m);var O=T&256,W=T&4096;return T=T&-6401,m=Fe.calculateAt(f,m,W),Fe.doStat(O?N.lstat:N.stat,m,S)}catch(tt){if(typeof N>"u"||tt.name!=="ErrnoError")throw tt;return-tt.errno}}function Hr(f,m,S,T){Fe.varargs=T;try{m=Fe.getStr(m),m=Fe.calculateAt(f,m);var O=T?Nn():0;return N.open(m,S,O).fd}catch(W){if(typeof N>"u"||W.name!=="ErrnoError")throw W;return-W.errno}}function Gr(f){try{return f=Fe.getStr(f),N.rmdir(f),0}catch(m){if(typeof N>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}function zs(f,m){try{return f=Fe.getStr(f),Fe.doStat(N.stat,f,m)}catch(S){if(typeof N>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function _i(f,m,S){try{return m=Fe.getStr(m),m=Fe.calculateAt(f,m),S===0?N.unlink(m):S===512?N.rmdir(m):ye("Invalid flags passed to unlinkat"),0}catch(T){if(typeof N>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}var Vs=()=>{ye("")},Hs=(f,m,S,T,O)=>{},Xr=()=>{for(var f=new Array(256),m=0;m<256;++m)f[m]=String.fromCharCode(m);F=f},F,st=f=>{for(var m="",S=f;j[S];)m+=F[j[S++]];return m},Mt={},_t={},vt={},Qt,Xt=f=>{throw new Qt(f)},Kt,re=f=>{throw new Kt(f)},ae=(f,m,S)=>{f.forEach(ot=>vt[ot]=m);function T(ot){var Tt=S(ot);Tt.length!==f.length&&re("Mismatched type converter count");for(var Ht=0;Ht<f.length;++Ht)_e(f[Ht],Tt[Ht])}var O=new Array(m.length),W=[],tt=0;m.forEach((ot,Tt)=>{_t.hasOwnProperty(ot)?O[Tt]=_t[ot]:(W.push(ot),Mt.hasOwnProperty(ot)||(Mt[ot]=[]),Mt[ot].push(()=>{O[Tt]=_t[ot],++tt,tt===W.length&&T(O)}))}),W.length===0&&T(O)};function Jt(f,m,S={}){var T=m.name;if(f||Xt(`type "${T}" must have a positive integer typeid pointer`),_t.hasOwnProperty(f)){if(S.ignoreDuplicateRegistrations)return;Xt(`Cannot register type '${T}' twice`)}if(_t[f]=m,delete vt[f],Mt.hasOwnProperty(f)){var O=Mt[f];delete Mt[f],O.forEach(W=>W())}}function _e(f,m,S={}){return Jt(f,m,S)}var ie=8,Ue=(f,m,S,T)=>{m=st(m),_e(f,{name:m,fromWireType:function(O){return!!O},toWireType:function(O,W){return W?S:T},argPackAdvance:ie,readValueFromPointer:function(O){return this.fromWireType(j[O])},destructorFunction:null})},Ze=[],De=[],s=f=>{f>9&&--De[f+1]===0&&(De[f]=void 0,Ze.push(f))},a=()=>De.length/2-5-Ze.length,h=()=>{De.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=a},p={toValue:f=>(f||Xt("Cannot use deleted val. handle = "+f),De[f]),toHandle:f=>{switch(f){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let m=Ze.pop()||De.length;return De[m]=f,De[m+1]=1,m}}}};function x(f){return this.fromWireType(ht[f>>2])}var I={name:"emscripten::val",fromWireType:f=>{var m=p.toValue(f);return s(f),m},toWireType:(f,m)=>p.toHandle(m),argPackAdvance:ie,readValueFromPointer:x,destructorFunction:null},B=f=>_e(f,I),Q=(f,m)=>{switch(m){case 4:return function(S){return this.fromWireType(gt[S>>2])};case 8:return function(S){return this.fromWireType(Et[S>>3])};default:throw new TypeError(`invalid float width (${m}): ${f}`)}},et=(f,m,S)=>{m=st(m),_e(f,{name:m,fromWireType:T=>T,toWireType:(T,O)=>O,argPackAdvance:ie,readValueFromPointer:Q(m,S),destructorFunction:null})},pt=(f,m)=>Object.defineProperty(m,"name",{value:f}),Nt=f=>{for(;f.length;){var m=f.pop(),S=f.pop();S(m)}};function It(f){for(var m=1;m<f.length;++m)if(f[m]!==null&&f[m].destructorFunction===void 0)return!0;return!1}function Ft(f,m){if(!(f instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof f} which is not a function`);var S=pt(f.name||"unknownFunctionName",function(){});S.prototype=f.prototype;var T=new S,O=f.apply(T,m);return O instanceof Object?O:T}function le(f,m,S,T){var O=It(f),W=f.length-2,tt=[],ot=["fn"];m&&ot.push("thisWired");for(var Tt=0;Tt<W;++Tt)tt.push(`arg${Tt}`),ot.push(`arg${Tt}Wired`);tt=tt.join(","),ot=ot.join(",");var Ht=`return function (${tt}) {
`;O&&(Ht+=`var destructors = [];
`);var te=O?"destructors":"null",se=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];m&&(Ht+=`var thisWired = classParam['toWireType'](${te}, this);
`);for(var Tt=0;Tt<W;++Tt)Ht+=`var arg${Tt}Wired = argType${Tt}['toWireType'](${te}, arg${Tt});
`,se.push(`argType${Tt}`);if(Ht+=(S||T?"var rv = ":"")+`invoker(${ot});
`,O)Ht+=`runDestructors(destructors);
`;else for(var Tt=m?1:2;Tt<f.length;++Tt){var fe=Tt===1?"thisWired":"arg"+(Tt-2)+"Wired";f[Tt].destructorFunction!==null&&(Ht+=`${fe}_dtor(${fe});
`,se.push(`${fe}_dtor`))}return S&&(Ht+=`var ret = retType['fromWireType'](rv);
return ret;
`),Ht+=`}
`,[se,Ht]}function xe(f,m,S,T,O,W){var tt=m.length;tt<2&&Xt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ot=m[1]!==null&&S!==null,Tt=It(m),Ht=m[0].name!=="void",te=[f,Xt,T,O,Nt,m[0],m[1]],se=0;se<tt-2;++se)te.push(m[se+2]);if(!Tt)for(var se=ot?1:2;se<m.length;++se)m[se].destructorFunction!==null&&te.push(m[se].destructorFunction);let[fe,ce]=le(m,ot,Ht,W);fe.push(ce);var Me=Ft(Function,fe)(...te);return pt(f,Me)}var Ae=(f,m,S)=>{if(f[m].overloadTable===void 0){var T=f[m];f[m]=function(...O){return f[m].overloadTable.hasOwnProperty(O.length)||Xt(`Function '${S}' called with an invalid number of arguments (${O.length}) - expects one of (${f[m].overloadTable})!`),f[m].overloadTable[O.length].apply(this,O)},f[m].overloadTable=[],f[m].overloadTable[T.argCount]=T}},He=(f,m,S)=>{i.hasOwnProperty(f)?((S===void 0||i[f].overloadTable!==void 0&&i[f].overloadTable[S]!==void 0)&&Xt(`Cannot register public name '${f}' twice`),Ae(i,f,f),i.hasOwnProperty(S)&&Xt(`Cannot register multiple overloads of a function with the same number of arguments (${S})!`),i[f].overloadTable[S]=m):(i[f]=m,S!==void 0&&(i[f].numArguments=S))},xn=(f,m)=>{for(var S=[],T=0;T<f;T++)S.push(ht[m+T*4>>2]);return S},Zn=(f,m,S)=>{i.hasOwnProperty(f)||re("Replacing nonexistent public symbol"),i[f].overloadTable!==void 0&&S!==void 0?i[f].overloadTable[S]=m:(i[f]=m,i[f].argCount=S)},Zi=(f,m,S)=>{f=f.replace(/p/g,"i");var T=i["dynCall_"+f];return T(m,...S)},Wr=[],qo,Ii=f=>{var m=Wr[f];return m||(f>=Wr.length&&(Wr.length=f+1),Wr[f]=m=qo.get(f)),m},Np=(f,m,S=[])=>{if(f.includes("j"))return Zi(f,m,S);var T=Ii(m)(...S);return T},Dp=(f,m)=>(...S)=>Np(f,m,S),Op=(f,m)=>{f=st(f);function S(){return f.includes("j")?Dp(f,m):Ii(m)}var T=S();return typeof T!="function"&&Xt(`unknown function pointer with signature ${f}: ${m}`),T},Fp=(f,m)=>{var S=pt(m,function(T){this.name=m,this.message=T;var O=new Error(T).stack;O!==void 0&&(this.stack=this.toString()+`
`+O.replace(/^Error(:[^\n]*)?\n/,""))});return S.prototype=Object.create(f.prototype),S.prototype.constructor=S,S.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},S},bu,Su=f=>{var m=Pu(f),S=st(m);return Ri(m),S},Up=(f,m)=>{var S=[],T={};function O(W){if(!T[W]&&!_t[W]){if(vt[W]){vt[W].forEach(O);return}S.push(W),T[W]=!0}}throw m.forEach(O),new bu(`${f}: `+S.map(Su).join([", "]))},Bp=f=>{f=f.trim();let m=f.indexOf("(");return m!==-1?f.substr(0,m):f},kp=(f,m,S,T,O,W,tt,ot)=>{var Tt=xn(m,S);f=st(f),f=Bp(f),O=Op(T,O),He(f,function(){Up(`Cannot call ${f} due to unbound types`,Tt)},m-1),ae([],Tt,Ht=>{var te=[Ht[0],null].concat(Ht.slice(1));return Zn(f,xe(f,te,null,O,W,tt),m-1),[]})},zp=(f,m,S)=>{switch(m){case 1:return S?T=>Y[T]:T=>j[T];case 2:return S?T=>q[T>>1]:T=>Z[T>>1];case 4:return S?T=>K[T>>2]:T=>ht[T>>2];default:throw new TypeError(`invalid integer width (${m}): ${f}`)}},Vp=(f,m,S,T,O)=>{m=st(m),O===-1&&(O=4294967295);var W=te=>te;if(T===0){var tt=32-8*S;W=te=>te<<tt>>>tt}var ot=m.includes("unsigned"),Tt=(te,se)=>{},Ht;ot?Ht=function(te,se){return Tt(se,this.name),se>>>0}:Ht=function(te,se){return Tt(se,this.name),se},_e(f,{name:m,fromWireType:W,toWireType:Ht,argPackAdvance:ie,readValueFromPointer:zp(m,S,T!==0),destructorFunction:null})},Hp=(f,m,S)=>{var T=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],O=T[m];function W(tt){var ot=ht[tt>>2],Tt=ht[tt+4>>2];return new O(Y.buffer,Tt,ot)}S=st(S),_e(f,{name:S,fromWireType:W,argPackAdvance:ie,readValueFromPointer:W},{ignoreDuplicateRegistrations:!0})},Yr=(f,m,S)=>lt(f,j,m,S),Gp=(f,m)=>{m=st(m);var S=m==="std::string";_e(f,{name:m,fromWireType(T){var O=ht[T>>2],W=T+4,tt;if(S)for(var ot=W,Tt=0;Tt<=O;++Tt){var Ht=W+Tt;if(Tt==O||j[Ht]==0){var te=Ht-ot,se=Ci(ot,te);tt===void 0?tt=se:(tt+="\0",tt+=se),ot=Ht+1}}else{for(var fe=new Array(O),Tt=0;Tt<O;++Tt)fe[Tt]=String.fromCharCode(j[W+Tt]);tt=fe.join("")}return Ri(T),tt},toWireType(T,O){O instanceof ArrayBuffer&&(O=new Uint8Array(O));var W,tt=typeof O=="string";tt||O instanceof Uint8Array||O instanceof Uint8ClampedArray||O instanceof Int8Array||Xt("Cannot pass non-string to std::string"),S&&tt?W=J(O):W=O.length;var ot=Tc(4+W+1),Tt=ot+4;if(ht[ot>>2]=W,S&&tt)Yr(O,Tt,W+1);else if(tt)for(var Ht=0;Ht<W;++Ht){var te=O.charCodeAt(Ht);te>255&&(Ri(Tt),Xt("String has UTF-16 code units that do not fit in 8 bits")),j[Tt+Ht]=te}else for(var Ht=0;Ht<W;++Ht)j[Tt+Ht]=O[Ht];return T!==null&&T.push(Ri,ot),ot},argPackAdvance:ie,readValueFromPointer:x,destructorFunction(T){Ri(T)}})},wu=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Xp=(f,m)=>{for(var S=f,T=S>>1,O=T+m/2;!(T>=O)&&Z[T];)++T;if(S=T<<1,S-f>32&&wu)return wu.decode(j.subarray(f,S));for(var W="",tt=0;!(tt>=m/2);++tt){var ot=q[f+tt*2>>1];if(ot==0)break;W+=String.fromCharCode(ot)}return W},Wp=(f,m,S)=>{if(S??=2147483647,S<2)return 0;S-=2;for(var T=m,O=S<f.length*2?S/2:f.length,W=0;W<O;++W){var tt=f.charCodeAt(W);q[m>>1]=tt,m+=2}return q[m>>1]=0,m-T},Yp=f=>f.length*2,$p=(f,m)=>{for(var S=0,T="";!(S>=m/4);){var O=K[f+S*4>>2];if(O==0)break;if(++S,O>=65536){var W=O-65536;T+=String.fromCharCode(55296|W>>10,56320|W&1023)}else T+=String.fromCharCode(O)}return T},qp=(f,m,S)=>{if(S??=2147483647,S<4)return 0;for(var T=m,O=T+S-4,W=0;W<f.length;++W){var tt=f.charCodeAt(W);if(tt>=55296&&tt<=57343){var ot=f.charCodeAt(++W);tt=65536+((tt&1023)<<10)|ot&1023}if(K[m>>2]=tt,m+=4,m+4>O)break}return K[m>>2]=0,m-T},Zp=f=>{for(var m=0,S=0;S<f.length;++S){var T=f.charCodeAt(S);T>=55296&&T<=57343&&++S,m+=4}return m},Jp=(f,m,S)=>{S=st(S);var T,O,W,tt;m===2?(T=Xp,O=Wp,tt=Yp,W=ot=>Z[ot>>1]):m===4&&(T=$p,O=qp,tt=Zp,W=ot=>ht[ot>>2]),_e(f,{name:S,fromWireType:ot=>{for(var Tt=ht[ot>>2],Ht,te=ot+4,se=0;se<=Tt;++se){var fe=ot+4+se*m;if(se==Tt||W(fe)==0){var ce=fe-te,Me=T(te,ce);Ht===void 0?Ht=Me:(Ht+="\0",Ht+=Me),te=fe+m}}return Ri(ot),Ht},toWireType:(ot,Tt)=>{typeof Tt!="string"&&Xt(`Cannot pass non-string to C++ string type ${S}`);var Ht=tt(Tt),te=Tc(4+Ht+m);return ht[te>>2]=Ht/m,O(Tt,te+4,Ht+m),ot!==null&&ot.push(Ri,te),te},argPackAdvance:ie,readValueFromPointer:x,destructorFunction(ot){Ri(ot)}})},jp=(f,m)=>{m=st(m),_e(f,{isVoid:!0,name:m,argPackAdvance:0,fromWireType:()=>{},toWireType:(S,T)=>{}})},Kp=1,Qp=()=>Kp,Eu=f=>{for(var m=f.split("."),S=0;S<4;S++){var T=Number(m[S]);if(isNaN(T))return null;m[S]=T}return(m[0]|m[1]<<8|m[2]<<16|m[3]<<24)>>>0},Zo=f=>parseInt(f),tm=f=>{var m,S,T,O,W=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,tt=[];if(!W.test(f))return null;if(f==="::")return[0,0,0,0,0,0,0,0];for(f.startsWith("::")?f=f.replace("::","Z:"):f=f.replace("::",":Z:"),f.indexOf(".")>0?(f=f.replace(new RegExp("[.]","g"),":"),m=f.split(":"),m[m.length-4]=Zo(m[m.length-4])+Zo(m[m.length-3])*256,m[m.length-3]=Zo(m[m.length-2])+Zo(m[m.length-1])*256,m=m.slice(0,m.length-2)):m=f.split(":"),T=0,O=0,S=0;S<m.length;S++)if(typeof m[S]=="string")if(m[S]==="Z"){for(O=0;O<8-m.length+1;O++)tt[S+O]=0;T=O-1}else tt[S+T]=Iu(parseInt(m[S],16));else tt[S+T]=m[S];return[tt[1]<<16|tt[0],tt[3]<<16|tt[2],tt[5]<<16|tt[4],tt[7]<<16|tt[6]]},Ji={address_map:{id:1,addrs:{},names:{}},lookup_name(f){var m=Eu(f);if(m!==null||(m=tm(f),m!==null))return f;var S;if(Ji.address_map.addrs[f])S=Ji.address_map.addrs[f];else{var T=Ji.address_map.id++;G(T<65535,"exceeded max address mappings of 65535"),S="172.29."+(T&255)+"."+(T&65280),Ji.address_map.names[S]=f,Ji.address_map.addrs[f]=S}return S},lookup_addr(f){return Ji.address_map.names[f]?Ji.address_map.names[f]:null}},em=f=>{var m=Ci(f);return Eu(Ji.lookup_name(m))},nm=(f,m,S)=>j.copyWithin(f,m,m+S),Mc=(f,m)=>{var S=_t[f];return S===void 0&&Xt(`${m} has unknown type ${Su(f)}`),S},Tu=(f,m,S)=>{var T=[],O=f.toWireType(T,S);return T.length&&(ht[m>>2]=p.toHandle(T)),O},im=(f,m,S)=>(f=p.toValue(f),m=Mc(m,"emval::as"),Tu(m,S,f)),rm={},bc=f=>{var m=rm[f];return m===void 0?st(f):m},Sc=[],sm=(f,m,S,T,O)=>(f=Sc[f],m=p.toValue(m),S=bc(S),f(m,m[S],T,O)),Au=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),om=f=>f===0?p.toHandle(Au()):(f=bc(f),p.toHandle(Au()[f])),am=f=>{var m=Sc.length;return Sc.push(f),m},lm=(f,m)=>{for(var S=new Array(f),T=0;T<f;++T)S[T]=Mc(ht[m+T*4>>2],"parameter "+T);return S},Mb=Reflect.construct,cm=(f,m,S)=>{var T=lm(f,m),O=T.shift();f--;var W=`return function (obj, func, destructorsRef, args) {
`,tt=0,ot=[];S===0&&ot.push("obj");for(var Tt=["retType"],Ht=[O],te=0;te<f;++te)ot.push("arg"+te),Tt.push("argType"+te),Ht.push(T[te]),W+=`  var arg${te} = argType${te}.readValueFromPointer(args${tt?"+"+tt:""});
`,tt+=T[te].argPackAdvance;var se=S===1?"new func":"func.call";W+=`  var rv = ${se}(${ot.join(", ")});
`,O.isVoid||(Tt.push("emval_returnValue"),Ht.push(Tu),W+=`  return emval_returnValue(retType, destructorsRef, rv);
`),W+=`};
`,Tt.push(W);var fe=Ft(Function,Tt)(...Ht),ce=`methodCaller<(${T.map(Me=>Me.name).join(", ")}) => ${O.name}>`;return am(pt(ce,fe))},hm=(f,m)=>(f=p.toValue(f),m=p.toValue(m),p.toHandle(f[m])),um=f=>{f>9&&(De[f+1]+=1)},fm=()=>p.toHandle([]),dm=f=>p.toHandle(bc(f)),pm=()=>p.toHandle({}),mm=f=>{var m=p.toValue(f);Nt(m),s(f)},gm=(f,m,S)=>{f=p.toValue(f),m=p.toValue(m),S=p.toValue(S),f[m]=S},_m=(f,m)=>{f=Mc(f,"_emval_take_value");var S=f.readValueFromPointer(m);return p.toHandle(S)},vm=f=>f%4===0&&(f%100!==0||f%400===0),ym=[0,31,60,91,121,152,182,213,244,274,305,335],xm=[0,31,59,90,120,151,181,212,243,273,304,334],Mm=f=>{var m=vm(f.getFullYear()),S=m?ym:xm,T=S[f.getMonth()]+f.getDate()-1;return T},wc=(f,m)=>m+2097152>>>0<4194305-!!f?(f>>>0)+m*4294967296:NaN;function bm(f,m,S){var T=wc(f,m),O=new Date(T*1e3);K[S>>2]=O.getSeconds(),K[S+4>>2]=O.getMinutes(),K[S+8>>2]=O.getHours(),K[S+12>>2]=O.getDate(),K[S+16>>2]=O.getMonth(),K[S+20>>2]=O.getFullYear()-1900,K[S+24>>2]=O.getDay();var W=Mm(O)|0;K[S+28>>2]=W,K[S+36>>2]=-(O.getTimezoneOffset()*60);var tt=new Date(O.getFullYear(),0,1),ot=new Date(O.getFullYear(),6,1).getTimezoneOffset(),Tt=tt.getTimezoneOffset(),Ht=(ot!=Tt&&O.getTimezoneOffset()==Math.min(Tt,ot))|0;K[S+32>>2]=Ht}function Sm(f,m,S,T,O,W,tt){var ot=wc(W,tt);try{var Tt=Fe.getStreamFromFD(O);S&2&&Fe.doMsync(f,Tt,m,T,ot)}catch(Ht){if(typeof N>"u"||Ht.name!=="ErrnoError")throw Ht;return-Ht.errno}}var wm=(f,m,S,T)=>{var O=new Date().getFullYear(),W=new Date(O,0,1),tt=new Date(O,6,1),ot=W.getTimezoneOffset(),Tt=tt.getTimezoneOffset(),Ht=Math.max(ot,Tt);ht[f>>2]=Ht*60,K[m>>2]=+(ot!=Tt);var te=ce=>{var Me=ce>=0?"-":"+",ze=Math.abs(ce),Mn=String(Math.floor(ze/60)).padStart(2,"0"),en=String(ze%60).padStart(2,"0");return`UTC${Me}${Mn}${en}`},se=te(ot),fe=te(Tt);Tt<ot?(Yr(se,S,17),Yr(fe,T,17)):(Yr(se,T,17),Yr(fe,S,17))},Em=()=>Date.now();function Tm(){return new Error().stack.toString()}var Jo=f=>{Jo.shown||={},Jo.shown[f]||(Jo.shown[f]=1,d&&(f="warning: "+f),R(f))};function Am(f){var m=Tm(),S=m.lastIndexOf("_emscripten_log"),T=m.lastIndexOf("_emscripten_get_callstack"),O=m.indexOf(`
`,Math.max(S,T))+1;m=m.slice(O),f&8&&typeof emscripten_source_map>"u"&&(Jo('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),f^=8,f|=16);var W=m.split(`
`);m="";var tt=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),ot=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),Tt=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Ht in W){var te=W[Ht],se="",fe="",ce=0,Me=0,ze=Tt.exec(te);if(ze&&ze.length==5)se=ze[1],fe=ze[2],ce=ze[3],Me=ze[4];else if(ze=tt.exec(te)||ot.exec(te),ze&&ze.length>=4)se=ze[1],fe=ze[2],ce=ze[3],Me=ze[4]|0;else{m+=te+`
`;continue}var Mn=!1;if(f&8){var en=emscripten_source_map.originalPositionFor({line:ce,column:Me});Mn=en?.source,Mn&&(f&64&&(en.source=en.source.substring(en.source.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=`    at ${se} (${en.source}:${en.line}:${en.column})
`)}(f&16||!Mn)&&(f&64&&(fe=fe.substring(fe.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=(Mn?`     = ${se}`:`    at ${se}`)+` (${fe}:${ce}:${Me})
`)}return m=m.replace(/\s+$/,""),m}function Cm(f,m,S){var T=Am(f);if(!m||S<=0)return J(T)+1;var O=Yr(T,m,S);return O+1}var Cu=()=>2147483648,Pm=()=>Cu(),Im=f=>{var m=H.buffer,S=(f-m.byteLength+65535)/65536|0;try{return H.grow(S),yt(),1}catch{}},Rm=f=>{var m=j.length;f>>>=0;var S=Cu();if(f>S)return!1;for(var T=1;T<=4;T*=2){var O=m*(1+.2/T);O=Math.min(O,f+100663296);var W=Math.min(S,mt(Math.max(f,O),65536)),tt=Im(W);if(tt)return!0}return!1},Ec={},Lm=()=>_||"./this.program",Gs=()=>{if(!Gs.strings){var f=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",m={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:f,_:Lm()};for(var S in Ec)Ec[S]===void 0?delete m[S]:m[S]=Ec[S];var T=[];for(var S in m)T.push(`${S}=${m[S]}`);Gs.strings=T}return Gs.strings},Nm=(f,m)=>{for(var S=0;S<f.length;++S)Y[m++]=f.charCodeAt(S);Y[m]=0},Dm=(f,m)=>{var S=0;return Gs().forEach((T,O)=>{var W=m+S;ht[f+O*4>>2]=W,Nm(T,W),S+=T.length+1}),0},Om=(f,m)=>{var S=Gs();ht[f>>2]=S.length;var T=0;return S.forEach(O=>T+=O.length+1),ht[m>>2]=T,0},Fm=0,Um=()=>kt||Fm>0,Bm=f=>{k=f,Um()||(i.onExit?.(f),C=!0),b(f,new Ct(f))},km=(f,m)=>{k=f,Bm(f)},zm=km;function Vm(f){try{var m=Fe.getStreamFromFD(f);return N.close(m),0}catch(S){if(typeof N>"u"||S.name!=="ErrnoError")throw S;return S.errno}}var Hm=(f,m,S,T)=>{for(var O=0,W=0;W<S;W++){var tt=ht[m>>2],ot=ht[m+4>>2];m+=8;var Tt=N.read(f,Y,tt,ot,T);if(Tt<0)return-1;if(O+=Tt,Tt<ot)break;typeof T<"u"&&(T+=Tt)}return O};function Gm(f,m,S,T){try{var O=Fe.getStreamFromFD(f),W=Hm(O,m,S);return ht[T>>2]=W,0}catch(tt){if(typeof N>"u"||tt.name!=="ErrnoError")throw tt;return tt.errno}}function Xm(f,m,S,T,O){var W=wc(m,S);try{if(isNaN(W))return 61;var tt=Fe.getStreamFromFD(f);return N.llseek(tt,W,T),dt=[tt.position>>>0,(nt=tt.position,+Math.abs(nt)>=1?nt>0?+Math.floor(nt/4294967296)>>>0:~~+Math.ceil((nt-+(~~nt>>>0))/4294967296)>>>0:0)],K[O>>2]=dt[0],K[O+4>>2]=dt[1],tt.getdents&&W===0&&T===0&&(tt.getdents=null),0}catch(ot){if(typeof N>"u"||ot.name!=="ErrnoError")throw ot;return ot.errno}}var Wm=(f,m,S,T)=>{for(var O=0,W=0;W<S;W++){var tt=ht[m>>2],ot=ht[m+4>>2];m+=8;var Tt=N.write(f,Y,tt,ot,T);if(Tt<0)return-1;if(O+=Tt,Tt<ot)break;typeof T<"u"&&(T+=Tt)}return O};function Ym(f,m,S,T){try{var O=Fe.getStreamFromFD(f),W=Wm(O,m,S);return ht[T>>2]=W,0}catch(tt){if(typeof N>"u"||tt.name!=="ErrnoError")throw tt;return tt.errno}}N.createPreloadedFile=Ln,N.staticInit(),Xr(),Qt=i.BindingError=class extends Error{constructor(m){super(m),this.name="BindingError"}},Kt=i.InternalError=class extends Error{constructor(m){super(m),this.name="InternalError"}},h(),bu=i.UnboundTypeError=Fp(Error,"UnboundTypeError");var $m={M:Br,N:kr,h:zr,I:gi,Q:Pi,F:Vr,G:qi,j:Hr,B:Gr,H:zs,C:_i,A:Vs,w:Hs,V:Ue,U:B,n:et,f:kp,b:Vp,a:Hp,m:Gp,i:Jp,W:jp,J:Qp,x:em,L:nm,e:im,q:sm,T:s,u:om,p:cm,k:hm,Y:um,X:fm,r:dm,Z:pm,o:mm,c:gm,d:_m,t:bm,s:Sm,O:wm,K:Em,R:Cm,z:Pm,y:Rm,D:Dm,E:Om,S:zm,g:Vm,P:Gm,v:Xm,l:Ym},un=P(),qm=()=>(qm=un.$)(),Pu=f=>(Pu=un.aa)(f),Tc=f=>(Tc=un.ca)(f),Ri=f=>(Ri=un.da)(f),Iu=f=>(Iu=un.ea)(f),Ru=(f,m)=>(Ru=un.fa)(f,m),Lu=()=>(Lu=un.ga)(),Zm=i.dynCall_viijii=(f,m,S,T,O,W,tt)=>(Zm=i.dynCall_viijii=un.ha)(f,m,S,T,O,W,tt),Jm=i.dynCall_viiiiji=(f,m,S,T,O,W,tt,ot)=>(Jm=i.dynCall_viiiiji=un.ia)(f,m,S,T,O,W,tt,ot),jm=i.dynCall_jiji=(f,m,S,T,O)=>(jm=i.dynCall_jiji=un.ja)(f,m,S,T,O),Km=i.dynCall_iiiiij=(f,m,S,T,O,W,tt)=>(Km=i.dynCall_iiiiij=un.ka)(f,m,S,T,O,W,tt),Qm=i.dynCall_iiiiijj=(f,m,S,T,O,W,tt,ot,Tt)=>(Qm=i.dynCall_iiiiijj=un.la)(f,m,S,T,O,W,tt,ot,Tt),tg=i.dynCall_iiiiiijj=(f,m,S,T,O,W,tt,ot,Tt,Ht)=>(tg=i.dynCall_iiiiiijj=un.ma)(f,m,S,T,O,W,tt,ot,Tt,Ht),jo,Nu;it=function f(){jo||Du(),jo||(it=f)};function Du(){if(Ot>0||!Nu&&(Nu=1,Bt(),Ot>0))return;function f(){jo||(jo=1,i.calledRun=1,!C&&(Vt(),r(i),i.onRuntimeInitialized?.(),Gt()))}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),f()},1)):f()}if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Du(),e=l,e})})();typeof ku=="object"&&typeof Pc=="object"?Pc.exports=Bu:typeof define=="function"&&define.amd&&define([],()=>Bu)});var Vu=Ou((Cb,Ko)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof Ko<"u"&&Ko.exports?(Ko.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var r={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?r.chrome=1:r.chrome=0,i.indexOf("chromium")!=-1?r.chromium=1:r.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?r.safari=1:r.safari=0,i.indexOf("firefox")!=-1?r.firefox=1:r.firefox=0,i.indexOf("firefox/17")!=-1?r.firefox17=1:r.firefox17=0,i.indexOf("firefox/15")!=-1?r.firefox15=1:r.firefox15=0,i.indexOf("firefox/3")!=-1?r.firefox3=1:r.firefox3=0,i.indexOf("opera")!=-1?r.opera=1:r.opera=0,i.indexOf("msie 10")!=-1?r.msie10=1:r.msie10=0,i.indexOf("msie 9")!=-1?r.msie9=1:r.msie9=0,i.indexOf("msie 8")!=-1?r.msie8=1:r.msie8=0,i.indexOf("msie 7")!=-1?r.msie7=1:r.msie7=0,i.indexOf("msie ")!=-1?r.msie=1:r.msie=0,n.biginteger_used=null;var o,l=0xdeadbeefcafe,c=(l&16777215)==15715070;function u(s,a,h){n.biginteger_used=1,s!=null&&(typeof s=="number"&&typeof a>"u"?this.fromInt(s):typeof s=="number"?this.fromNumber(s,a,h):a==null&&typeof s!="string"?this.fromString(s,256):this.fromString(s,a))}function d(){return new u(null,void 0,void 0)}function g(s,a,h,p,x,I){for(;--I>=0;){var B=a*this[s++]+h[p]+x;x=Math.floor(B/67108864),h[p++]=B&67108863}return x}function v(s,a,h,p,x,I){for(var B=a&32767,Q=a>>15;--I>=0;){var et=this[s]&32767,pt=this[s++]>>15,Nt=Q*et+pt*B;et=B*et+((Nt&32767)<<15)+h[p]+(x&1073741823),x=(et>>>30)+(Nt>>>15)+Q*pt+(x>>>30),h[p++]=et&1073741823}return x}function _(s,a,h,p,x,I){for(var B=a&16383,Q=a>>14;--I>=0;){var et=this[s]&16383,pt=this[s++]>>14,Nt=Q*et+pt*B;et=B*et+((Nt&16383)<<14)+h[p]+x,x=(et>>28)+(Nt>>14)+Q*pt,h[p++]=et&268435455}return x}c&&e=="Microsoft Internet Explorer"?(u.prototype.am=v,o=30):c&&e!="Netscape"?(u.prototype.am=g,o=26):(u.prototype.am=_,o=28),u.prototype.DB=o,u.prototype.DM=(1<<o)-1,u.prototype.DV=1<<o;var b=52;u.prototype.FV=Math.pow(2,b),u.prototype.F1=b-o,u.prototype.F2=2*o-b;var w="0123456789abcdefghijklmnopqrstuvwxyz",E=new Array,M,y;for(M=48,y=0;y<=9;++y)E[M++]=y;for(M=97,y=10;y<36;++y)E[M++]=y;for(M=65,y=10;y<36;++y)E[M++]=y;function L(s){return w.charAt(s)}function z(s,a){var h=E[s.charCodeAt(a)];return h??-1}function A(s){for(var a=this.t-1;a>=0;--a)s[a]=this[a];s.t=this.t,s.s=this.s}function R(s){this.t=1,this.s=s<0?-1:0,s>0?this[0]=s:s<-1?this[0]=s+this.DV:this.t=0}function D(s){var a=d();return a.fromInt(s),a}function H(s,a){var h;if(a==16)h=4;else if(a==8)h=3;else if(a==256)h=8;else if(a==2)h=1;else if(a==32)h=5;else if(a==4)h=2;else{this.fromRadix(s,a);return}this.t=0,this.s=0;for(var p=s.length,x=!1,I=0;--p>=0;){var B=h==8?s[p]&255:z(s,p);if(B<0){s.charAt(p)=="-"&&(x=!0);continue}x=!1,I==0?this[this.t++]=B:I+h>this.DB?(this[this.t-1]|=(B&(1<<this.DB-I)-1)<<I,this[this.t++]=B>>this.DB-I):this[this.t-1]|=B<<I,I+=h,I>=this.DB&&(I-=this.DB)}h==8&&(s[0]&128)!=0&&(this.s=-1,I>0&&(this[this.t-1]|=(1<<this.DB-I)-1<<I)),this.clamp(),x&&u.ZERO.subTo(this,this)}function C(){for(var s=this.s&this.DM;this.t>0&&this[this.t-1]==s;)--this.t}function k(s){if(this.s<0)return"-"+this.negate().toString(s);var a;if(s==16)a=4;else if(s==8)a=3;else if(s==2)a=1;else if(s==32)a=5;else if(s==4)a=2;else return this.toRadix(s);var h=(1<<a)-1,p,x=!1,I="",B=this.t,Q=this.DB-B*this.DB%a;if(B-- >0)for(Q<this.DB&&(p=this[B]>>Q)>0&&(x=!0,I=L(p));B>=0;)Q<a?(p=(this[B]&(1<<Q)-1)<<a-Q,p|=this[--B]>>(Q+=this.DB-a)):(p=this[B]>>(Q-=a)&h,Q<=0&&(Q+=this.DB,--B)),p>0&&(x=!0),x&&(I+=L(p));return x?I:"0"}function G(){var s=d();return u.ZERO.subTo(this,s),s}function Y(){return this.s<0?this.negate():this}function j(s){var a=this.s-s.s;if(a!=0)return a;var h=this.t;if(a=h-s.t,a!=0)return this.s<0?-a:a;for(;--h>=0;)if((a=this[h]-s[h])!=0)return a;return 0}function q(s){var a=1,h;return(h=s>>>16)!=0&&(s=h,a+=16),(h=s>>8)!=0&&(s=h,a+=8),(h=s>>4)!=0&&(s=h,a+=4),(h=s>>2)!=0&&(s=h,a+=2),(h=s>>1)!=0&&(s=h,a+=1),a}function Z(){return this.t<=0?0:this.DB*(this.t-1)+q(this[this.t-1]^this.s&this.DM)}function K(s,a){var h;for(h=this.t-1;h>=0;--h)a[h+s]=this[h];for(h=s-1;h>=0;--h)a[h]=0;a.t=this.t+s,a.s=this.s}function ht(s,a){for(var h=s;h<this.t;++h)a[h-s]=this[h];a.t=Math.max(this.t-s,0),a.s=this.s}function gt(s,a){var h=s%this.DB,p=this.DB-h,x=(1<<p)-1,I=Math.floor(s/this.DB),B=this.s<<h&this.DM,Q;for(Q=this.t-1;Q>=0;--Q)a[Q+I+1]=this[Q]>>p|B,B=(this[Q]&x)<<h;for(Q=I-1;Q>=0;--Q)a[Q]=0;a[I]=B,a.t=this.t+I+1,a.s=this.s,a.clamp()}function Et(s,a){a.s=this.s;var h=Math.floor(s/this.DB);if(h>=this.t){a.t=0;return}var p=s%this.DB,x=this.DB-p,I=(1<<p)-1;a[0]=this[h]>>p;for(var B=h+1;B<this.t;++B)a[B-h-1]|=(this[B]&I)<<x,a[B-h]=this[B]>>p;p>0&&(a[this.t-h-1]|=(this.s&I)<<x),a.t=this.t-h,a.clamp()}function yt(s,a){for(var h=0,p=0,x=Math.min(s.t,this.t);h<x;)p+=this[h]-s[h],a[h++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p-=s.s;h<this.t;)p+=this[h],a[h++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;h<s.t;)p-=s[h],a[h++]=p&this.DM,p>>=this.DB;p-=s.s}a.s=p<0?-1:0,p<-1?a[h++]=this.DV+p:p>0&&(a[h++]=p),a.t=h,a.clamp()}function Pt(s,a){var h=this.abs(),p=s.abs(),x=h.t;for(a.t=x+p.t;--x>=0;)a[x]=0;for(x=0;x<p.t;++x)a[x+h.t]=h.am(0,p[x],a,x,0,h.t);a.s=0,a.clamp(),this.s!=s.s&&u.ZERO.subTo(a,a)}function Rt(s){for(var a=this.abs(),h=s.t=2*a.t;--h>=0;)s[h]=0;for(h=0;h<a.t-1;++h){var p=a.am(h,a[h],s,2*h,0,1);(s[h+a.t]+=a.am(h+1,2*a[h],s,2*h+1,p,a.t-h-1))>=a.DV&&(s[h+a.t]-=a.DV,s[h+a.t+1]=1)}s.t>0&&(s[s.t-1]+=a.am(h,a[h],s,2*h,0,1)),s.s=0,s.clamp()}function jt(s,a,h){var p=s.abs();if(!(p.t<=0)){var x=this.abs();if(x.t<p.t){a?.fromInt(0),h!=null&&this.copyTo(h);return}h==null&&(h=d());var I=d(),B=this.s,Q=s.s,et=this.DB-q(p[p.t-1]);et>0?(p.lShiftTo(et,I),x.lShiftTo(et,h)):(p.copyTo(I),x.copyTo(h));var pt=I.t,Nt=I[pt-1];if(Nt!=0){var It=Nt*(1<<this.F1)+(pt>1?I[pt-2]>>this.F2:0),Ft=this.FV/It,le=(1<<this.F1)/It,xe=1<<this.F2,Ae=h.t,He=Ae-pt,xn=a??d();for(I.dlShiftTo(He,xn),h.compareTo(xn)>=0&&(h[h.t++]=1,h.subTo(xn,h)),u.ONE.dlShiftTo(pt,xn),xn.subTo(I,I);I.t<pt;)I[I.t++]=0;for(;--He>=0;){var Zn=h[--Ae]==Nt?this.DM:Math.floor(h[Ae]*Ft+(h[Ae-1]+xe)*le);if((h[Ae]+=I.am(0,Zn,h,He,0,pt))<Zn)for(I.dlShiftTo(He,xn),h.subTo(xn,h);h[Ae]<--Zn;)h.subTo(xn,h)}a!=null&&(h.drShiftTo(pt,a),B!=Q&&u.ZERO.subTo(a,a)),h.t=pt,h.clamp(),et>0&&h.rShiftTo(et,h),B<0&&u.ZERO.subTo(h,h)}}}function at(s){var a=d();return this.abs().divRemTo(s,null,a),this.s<0&&a.compareTo(u.ZERO)>0&&s.subTo(a,a),a}function Bt(s){this.m=s}function Vt(s){return s.s<0||s.compareTo(this.m)>=0?s.mod(this.m):s}function Gt(s){return s}function ft(s){s.divRemTo(this.m,null,s)}function St(s,a,h){s.multiplyTo(a,h),this.reduce(h)}function Ut(s,a){s.squareTo(a),this.reduce(a)}Bt.prototype.convert=Vt,Bt.prototype.revert=Gt,Bt.prototype.reduce=ft,Bt.prototype.mulTo=St,Bt.prototype.sqrTo=Ut;function Ot(){if(this.t<1)return 0;var s=this[0];if((s&1)==0)return 0;var a=s&3;return a=a*(2-(s&15)*a)&15,a=a*(2-(s&255)*a)&255,a=a*(2-((s&65535)*a&65535))&65535,a=a*(2-s*a%this.DV)%this.DV,a>0?this.DV-a:-a}function zt(s){this.m=s,this.mp=s.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<s.DB-15)-1,this.mt2=2*s.t}function it(s){var a=d();return s.abs().dlShiftTo(this.m.t,a),a.divRemTo(this.m,null,a),s.s<0&&a.compareTo(u.ZERO)>0&&this.m.subTo(a,a),a}function Pe(s){var a=d();return s.copyTo(a),this.reduce(a),a}function de(s){for(;s.t<=this.mt2;)s[s.t++]=0;for(var a=0;a<this.m.t;++a){var h=s[a]&32767,p=h*this.mpl+((h*this.mph+(s[a]>>15)*this.mpl&this.um)<<15)&s.DM;for(h=a+this.m.t,s[h]+=this.m.am(0,p,s,a,0,this.m.t);s[h]>=s.DV;)s[h]-=s.DV,s[++h]++}s.clamp(),s.drShiftTo(this.m.t,s),s.compareTo(this.m)>=0&&s.subTo(this.m,s)}function me(s,a){s.squareTo(a),this.reduce(a)}function ye(s,a,h){s.multiplyTo(a,h),this.reduce(h)}zt.prototype.convert=it,zt.prototype.revert=Pe,zt.prototype.reduce=de,zt.prototype.mulTo=ye,zt.prototype.sqrTo=me;function he(){return(this.t>0?this[0]&1:this.s)==0}function Se(s,a){if(s>4294967295||s<1)return u.ONE;var h=d(),p=d(),x=a.convert(this),I=q(s)-1;for(x.copyTo(h);--I>=0;)if(a.sqrTo(h,p),(s&1<<I)>0)a.mulTo(p,x,h);else{var B=h;h=p,p=B}return a.revert(h)}function Ne(s,a){var h;return s<256||a.isEven()?h=new Bt(a):h=new zt(a),this.exp(s,h)}u.prototype.copyTo=A,u.prototype.fromInt=R,u.prototype.fromString=H,u.prototype.clamp=C,u.prototype.dlShiftTo=K,u.prototype.drShiftTo=ht,u.prototype.lShiftTo=gt,u.prototype.rShiftTo=Et,u.prototype.subTo=yt,u.prototype.multiplyTo=Pt,u.prototype.squareTo=Rt,u.prototype.divRemTo=jt,u.prototype.invDigit=Ot,u.prototype.isEven=he,u.prototype.exp=Se,u.prototype.toString=k,u.prototype.negate=G,u.prototype.abs=Y,u.prototype.compareTo=j,u.prototype.bitLength=Z,u.prototype.mod=at,u.prototype.modPowInt=Ne,u.ZERO=D(0),u.ONE=D(1);function oe(){var s=d();return this.copyTo(s),s}function Zt(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function pe(){return this.t==0?this.s:this[0]<<24>>24}function rt(){return this.t==0?this.s:this[0]<<16>>16}function Be(s){return Math.floor(Math.LN2*this.DB/Math.log(s))}function Ee(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function X(s){if(s==null&&(s=10),this.signum()==0||s<2||s>36)return"0";var a=this.chunkSize(s),h=Math.pow(s,a),p=D(h),x=d(),I=d(),B="";for(this.divRemTo(p,x,I);x.signum()>0;)B=(h+I.intValue()).toString(s).substr(1)+B,x.divRemTo(p,x,I);return I.intValue().toString(s)+B}function P(s,a){this.fromInt(0),a==null&&(a=10);for(var h=this.chunkSize(a),p=Math.pow(a,h),x=!1,I=0,B=0,Q=0;Q<s.length;++Q){var et=z(s,Q);if(et<0){s.charAt(Q)=="-"&&this.signum()==0&&(x=!0);continue}B=a*B+et,++I>=h&&(this.dMultiply(p),this.dAddOffset(B,0),I=0,B=0)}I>0&&(this.dMultiply(Math.pow(a,I)),this.dAddOffset(B,0)),x&&u.ZERO.subTo(this,this)}function nt(s,a,h){if(typeof a=="number")if(s<2)this.fromInt(1);else for(this.fromNumber(s,h),this.testBit(s-1)||this.bitwiseTo(u.ONE.shiftLeft(s-1),ne,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(a);)this.dAddOffset(2,0),this.bitLength()>s&&this.subTo(u.ONE.shiftLeft(s-1),this);else{var p=new Array,x=s&7;p.length=(s>>3)+1,a.nextBytes(p),x>0?p[0]&=(1<<x)-1:p[0]=0,this.fromString(p,256)}}function dt(){var s=this.t,a=new Array;a[0]=this.s;var h=this.DB-s*this.DB%8,p,x=0;if(s-- >0)for(h<this.DB&&(p=this[s]>>h)!=(this.s&this.DM)>>h&&(a[x++]=p|this.s<<this.DB-h);s>=0;)h<8?(p=(this[s]&(1<<h)-1)<<8-h,p|=this[--s]>>(h+=this.DB-8)):(p=this[s]>>(h-=8)&255,h<=0&&(h+=this.DB,--s)),(p&128)!=0&&(p|=-256),x==0&&(this.s&128)!=(p&128)&&++x,(x>0||p!=this.s)&&(a[x++]=p);return a}function Ct(s){return this.compareTo(s)==0}function Wt(s){return this.compareTo(s)<0?this:s}function kt(s){return this.compareTo(s)>0?this:s}function xt(s,a,h){var p,x,I=Math.min(s.t,this.t);for(p=0;p<I;++p)h[p]=a(this[p],s[p]);if(s.t<this.t){for(x=s.s&this.DM,p=I;p<this.t;++p)h[p]=a(this[p],x);h.t=this.t}else{for(x=this.s&this.DM,p=I;p<s.t;++p)h[p]=a(x,s[p]);h.t=s.t}h.s=a(this.s,s.s),h.clamp()}function Dt(s,a){return s&a}function Yt(s){var a=d();return this.bitwiseTo(s,Dt,a),a}function ne(s,a){return s|a}function $t(s){var a=d();return this.bitwiseTo(s,ne,a),a}function U(s,a){return s^a}function $(s){var a=d();return this.bitwiseTo(s,U,a),a}function J(s,a){return s&~a}function lt(s){var a=d();return this.bitwiseTo(s,J,a),a}function V(){for(var s=d(),a=0;a<this.t;++a)s[a]=this.DM&~this[a];return s.t=this.t,s.s=~this.s,s}function bt(s){var a=d();return s<0?this.rShiftTo(-s,a):this.lShiftTo(s,a),a}function ct(s){var a=d();return s<0?this.lShiftTo(-s,a):this.rShiftTo(s,a),a}function Lt(s){if(s==0)return-1;var a=0;return(s&65535)==0&&(s>>=16,a+=16),(s&255)==0&&(s>>=8,a+=8),(s&15)==0&&(s>>=4,a+=4),(s&3)==0&&(s>>=2,a+=2),(s&1)==0&&++a,a}function mt(){for(var s=0;s<this.t;++s)if(this[s]!=0)return s*this.DB+Lt(this[s]);return this.s<0?this.t*this.DB:-1}function wt(s){for(var a=0;s!=0;)s&=s-1,++a;return a}function At(){for(var s=0,a=this.s&this.DM,h=0;h<this.t;++h)s+=wt(this[h]^a);return s}function qt(s){var a=Math.floor(s/this.DB);return a>=this.t?this.s!=0:(this[a]&1<<s%this.DB)!=0}function Ie(s,a){var h=u.ONE.shiftLeft(s);return this.bitwiseTo(h,a,h),h}function Te(s){return this.changeBit(s,ne)}function An(s){return this.changeBit(s,J)}function Ln(s){return this.changeBit(s,U)}function ks(s,a){for(var h=0,p=0,x=Math.min(s.t,this.t);h<x;)p+=this[h]+s[h],a[h++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p+=s.s;h<this.t;)p+=this[h],a[h++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;h<s.t;)p+=s[h],a[h++]=p&this.DM,p>>=this.DB;p+=s.s}a.s=p<0?-1:0,p>0?a[h++]=p:p<-1&&(a[h++]=this.DV+p),a.t=h,a.clamp()}function yr(s){var a=d();return this.addTo(s,a),a}function N(s){var a=d();return this.subTo(s,a),a}function Ci(s){var a=d();return this.multiplyTo(s,a),a}function Fe(){var s=d();return this.squareTo(s),s}function Br(s){var a=d();return this.divRemTo(s,a,null),a}function kr(s){var a=d();return this.divRemTo(s,null,a),a}function Nn(s){var a=d(),h=d();return this.divRemTo(s,a,h),new Array(a,h)}function qn(s){this[this.t]=this.am(0,s-1,this,0,0,this.t),++this.t,this.clamp()}function zr(s,a){if(s!=0){for(;this.t<=a;)this[this.t++]=0;for(this[a]+=s;this[a]>=this.DV;)this[a]-=this.DV,++a>=this.t&&(this[this.t++]=0),++this[a]}}function gi(){}function Pi(s){return s}function Vr(s,a,h){s.multiplyTo(a,h)}function qi(s,a){s.squareTo(a)}gi.prototype.convert=Pi,gi.prototype.revert=Pi,gi.prototype.mulTo=Vr,gi.prototype.sqrTo=qi;function Hr(s){return this.exp(s,new gi)}function Gr(s,a,h){var p=Math.min(this.t+s.t,a);for(h.s=0,h.t=p;p>0;)h[--p]=0;var x;for(x=h.t-this.t;p<x;++p)h[p+this.t]=this.am(0,s[p],h,p,0,this.t);for(x=Math.min(s.t,a);p<x;++p)this.am(0,s[p],h,p,0,a-p);h.clamp()}function zs(s,a,h){--a;var p=h.t=this.t+s.t-a;for(h.s=0;--p>=0;)h[p]=0;for(p=Math.max(a-this.t,0);p<s.t;++p)h[this.t+p-a]=this.am(a-p,s[p],h,0,0,this.t+p-a);h.clamp(),h.drShiftTo(1,h)}function _i(s){this.r2=d(),this.q3=d(),u.ONE.dlShiftTo(2*s.t,this.r2),this.mu=this.r2.divide(s),this.m=s}function Vs(s){if(s.s<0||s.t>2*this.m.t)return s.mod(this.m);if(s.compareTo(this.m)<0)return s;var a=d();return s.copyTo(a),this.reduce(a),a}function Hs(s){return s}function Xr(s){for(s.drShiftTo(this.m.t-1,this.r2),s.t>this.m.t+1&&(s.t=this.m.t+1,s.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);s.compareTo(this.r2)<0;)s.dAddOffset(1,this.m.t+1);for(s.subTo(this.r2,s);s.compareTo(this.m)>=0;)s.subTo(this.m,s)}function F(s,a){s.squareTo(a),this.reduce(a)}function st(s,a,h){s.multiplyTo(a,h),this.reduce(h)}_i.prototype.convert=Vs,_i.prototype.revert=Hs,_i.prototype.reduce=Xr,_i.prototype.mulTo=st,_i.prototype.sqrTo=F;function Mt(s,a){var h=s.bitLength(),p,x=D(1),I;if(h<=0)return x;h<18?p=1:h<48?p=3:h<144?p=4:h<768?p=5:p=6,h<8?I=new Bt(a):a.isEven()?I=new _i(a):I=new zt(a);var B=new Array,Q=3,et=p-1,pt=(1<<p)-1;if(B[1]=I.convert(this),p>1){var Nt=d();for(I.sqrTo(B[1],Nt);Q<=pt;)B[Q]=d(),I.mulTo(Nt,B[Q-2],B[Q]),Q+=2}var It=s.t-1,Ft,le=!0,xe=d(),Ae;for(h=q(s[It])-1;It>=0;){for(h>=et?Ft=s[It]>>h-et&pt:(Ft=(s[It]&(1<<h+1)-1)<<et-h,It>0&&(Ft|=s[It-1]>>this.DB+h-et)),Q=p;(Ft&1)==0;)Ft>>=1,--Q;if((h-=Q)<0&&(h+=this.DB,--It),le)B[Ft].copyTo(x),le=!1;else{for(;Q>1;)I.sqrTo(x,xe),I.sqrTo(xe,x),Q-=2;Q>0?I.sqrTo(x,xe):(Ae=x,x=xe,xe=Ae),I.mulTo(xe,B[Ft],x)}for(;It>=0&&(s[It]&1<<h)==0;)I.sqrTo(x,xe),Ae=x,x=xe,xe=Ae,--h<0&&(h=this.DB-1,--It)}return I.revert(x)}function _t(s){var a=this.s<0?this.negate():this.clone(),h=s.s<0?s.negate():s.clone();if(a.compareTo(h)<0){var p=a;a=h,h=p}var x=a.getLowestSetBit(),I=h.getLowestSetBit();if(I<0)return a;for(x<I&&(I=x),I>0&&(a.rShiftTo(I,a),h.rShiftTo(I,h));a.signum()>0;)(x=a.getLowestSetBit())>0&&a.rShiftTo(x,a),(x=h.getLowestSetBit())>0&&h.rShiftTo(x,h),a.compareTo(h)>=0?(a.subTo(h,a),a.rShiftTo(1,a)):(h.subTo(a,h),h.rShiftTo(1,h));return I>0&&h.lShiftTo(I,h),h}function vt(s){if(s<=0)return 0;var a=this.DV%s,h=this.s<0?s-1:0;if(this.t>0)if(a==0)h=this[0]%s;else for(var p=this.t-1;p>=0;--p)h=(a*h+this[p])%s;return h}function Qt(s){var a=s.isEven();if(this.isEven()&&a||s.signum()==0)return u.ZERO;for(var h=s.clone(),p=this.clone(),x=D(1),I=D(0),B=D(0),Q=D(1);h.signum()!=0;){for(;h.isEven();)h.rShiftTo(1,h),a?((!x.isEven()||!I.isEven())&&(x.addTo(this,x),I.subTo(s,I)),x.rShiftTo(1,x)):I.isEven()||I.subTo(s,I),I.rShiftTo(1,I);for(;p.isEven();)p.rShiftTo(1,p),a?((!B.isEven()||!Q.isEven())&&(B.addTo(this,B),Q.subTo(s,Q)),B.rShiftTo(1,B)):Q.isEven()||Q.subTo(s,Q),Q.rShiftTo(1,Q);h.compareTo(p)>=0?(h.subTo(p,h),a&&x.subTo(B,x),I.subTo(Q,I)):(p.subTo(h,p),a&&B.subTo(x,B),Q.subTo(I,Q))}if(p.compareTo(u.ONE)!=0)return u.ZERO;if(Q.compareTo(s)>=0)return Q.subtract(s);if(Q.signum()<0)Q.addTo(s,Q);else return Q;return Q.signum()<0?Q.add(s):Q}var Xt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Kt=(1<<26)/Xt[Xt.length-1];function re(s){var a,h=this.abs();if(h.t==1&&h[0]<=Xt[Xt.length-1]){for(a=0;a<Xt.length;++a)if(h[0]==Xt[a])return!0;return!1}if(h.isEven())return!1;for(a=1;a<Xt.length;){for(var p=Xt[a],x=a+1;x<Xt.length&&p<Kt;)p*=Xt[x++];for(p=h.modInt(p);a<x;)if(p%Xt[a++]==0)return!1}return h.millerRabin(s)}function ae(s){var a=this.subtract(u.ONE),h=a.getLowestSetBit();if(h<=0)return!1;var p=a.shiftRight(h);s=s+1>>1,s>Xt.length&&(s=Xt.length);for(var x=d(),I=0;I<s;++I){x.fromInt(Xt[Math.floor(Math.random()*Xt.length)]);var B=x.modPow(p,this);if(B.compareTo(u.ONE)!=0&&B.compareTo(a)!=0){for(var Q=1;Q++<h&&B.compareTo(a)!=0;)if(B=B.modPowInt(2,this),B.compareTo(u.ONE)==0)return!1;if(B.compareTo(a)!=0)return!1}}return!0}u.prototype.chunkSize=Be,u.prototype.toRadix=X,u.prototype.fromRadix=P,u.prototype.fromNumber=nt,u.prototype.bitwiseTo=xt,u.prototype.changeBit=Ie,u.prototype.addTo=ks,u.prototype.dMultiply=qn,u.prototype.dAddOffset=zr,u.prototype.multiplyLowerTo=Gr,u.prototype.multiplyUpperTo=zs,u.prototype.modInt=vt,u.prototype.millerRabin=ae,u.prototype.clone=oe,u.prototype.intValue=Zt,u.prototype.byteValue=pe,u.prototype.shortValue=rt,u.prototype.signum=Ee,u.prototype.toByteArray=dt,u.prototype.equals=Ct,u.prototype.min=Wt,u.prototype.max=kt,u.prototype.and=Yt,u.prototype.or=$t,u.prototype.xor=$,u.prototype.andNot=lt,u.prototype.not=V,u.prototype.shiftLeft=bt,u.prototype.shiftRight=ct,u.prototype.getLowestSetBit=mt,u.prototype.bitCount=At,u.prototype.testBit=qt,u.prototype.setBit=Te,u.prototype.clearBit=An,u.prototype.flipBit=Ln,u.prototype.add=yr,u.prototype.subtract=N,u.prototype.multiply=Ci,u.prototype.divide=Br,u.prototype.remainder=kr,u.prototype.divideAndRemainder=Nn,u.prototype.modPow=Mt,u.prototype.modInverse=Qt,u.prototype.pow=Hr,u.prototype.gcd=_t,u.prototype.isProbablePrime=re,u.prototype.square=Fe;var Jt=u;Jt.prototype.IsNegative=function(){return this.compareTo(Jt.ZERO)==-1},Jt.op_Equality=function(s,a){return s.compareTo(a)==0},Jt.op_Inequality=function(s,a){return s.compareTo(a)!=0},Jt.op_GreaterThan=function(s,a){return s.compareTo(a)>0},Jt.op_LessThan=function(s,a){return s.compareTo(a)<0},Jt.op_Addition=function(s,a){return new Jt(s,void 0,void 0).add(new Jt(a,void 0,void 0))},Jt.op_Subtraction=function(s,a){return new Jt(s,void 0,void 0).subtract(new Jt(a,void 0,void 0))},Jt.Int128Mul=function(s,a){return new Jt(s,void 0,void 0).multiply(new Jt(a,void 0,void 0))},Jt.op_Division=function(s,a){return s.divide(a)},Jt.prototype.ToDouble=function(){return parseFloat(this.toString())};var _e=function(s,a){var h;if(typeof Object.getOwnPropertyNames>"u"){for(h in a.prototype)(typeof s.prototype[h]>"u"||s.prototype[h]===Object.prototype[h])&&(s.prototype[h]=a.prototype[h]);for(h in a)typeof s[h]>"u"&&(s[h]=a[h]);s.$baseCtor=a}else{for(var p=Object.getOwnPropertyNames(a.prototype),x=0;x<p.length;x++)typeof Object.getOwnPropertyDescriptor(s.prototype,p[x])>"u"&&Object.defineProperty(s.prototype,p[x],Object.getOwnPropertyDescriptor(a.prototype,p[x]));for(h in a)typeof s[h]>"u"&&(s[h]=a[h]);s.$baseCtor=a}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var s=arguments;this.X=0,this.Y=0,s.length===1?(this.X=s[0].X,this.Y=s[0].Y):s.length===2&&(this.X=s[0],this.Y=s[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(s){this.X=s.X,this.Y=s.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(s,a){this.X=s,this.Y=a},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var s=!0,a=this.m_Parent;a!==null;)s=!s,a=a.m_Parent;return s},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(s){var a=this.m_Childs.length;this.m_Childs.push(s),s.m_Parent=this,s.m_Index=a},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var s=0,a=this.m_AllPolys.length;s<a;s++)this.m_AllPolys[s]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var s=this.m_AllPolys.length;return s>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&s--,s},_e(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(s){return Math.abs(s)},n.Math_Max_Int32_Int32=function(s,a){return Math.max(s,a)},r.msie||r.opera||r.safari?n.Cast_Int32=function(s){return s|0}:n.Cast_Int32=function(s){return~~s},typeof Number.toInteger>"u"&&(Number.toInteger=null),r.chrome?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):~~s}:r.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(s){return Number.toInteger(s)}:r.msie7||r.msie8?n.Cast_Int64=function(s){return parseInt(s,10)}:r.msie?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):s|0}:n.Cast_Int64=function(s){return s<0?Math.ceil(s):Math.floor(s)},n.Clear=function(s){s.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var s=arguments,a=s.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,a===3)this.X=s[0],this.Y=s[1],this.Z=s[2];else if(a===2)this.X=s[0],this.Y=s[1],this.Z=0;else if(a===1)if(s[0]instanceof n.DoublePoint){var h=s[0];this.X=n.Clipper.Round(h.X),this.Y=n.Clipper.Round(h.Y),this.Z=0}else{var p=s[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(a===2)this.X=s[0],this.Y=s[1];else if(a===1)if(s[0]instanceof n.DoublePoint){var h=s[0];this.X=n.Clipper.Round(h.X),this.Y=n.Clipper.Round(h.Y)}else{var p=s[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(s,a){return s.X===a.X&&s.Y===a.Y},n.IntPoint.op_Inequality=function(s,a){return s.X!==a.X||s.Y!==a.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(s){this.X=s.X,this.Y=s.Y,n.use_xyz&&(typeof s.Z>"u"?this.Z=0:this.Z=s.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(s){this.X=n.Clipper.Round(s.X),this.Y=n.Clipper.Round(s.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(s,a,h){this.X=s,this.Y=a,n.use_xyz&&(typeof h>"u"?this.Z=0:this.Z=h)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var s=arguments,a=s.length;if(a===4)this.left=s[0],this.top=s[1],this.right=s[2],this.bottom=s[3];else if(a===1){var h=s[0];this.left=h.left,this.top=h.top,this.right=h.right,this.bottom=h.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(s){this.left=s.left,this.top=s.top,this.right=s.right,this.bottom=s.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(s,a,h,p){this.left=s,this.top=a,this.right=h,this.bottom=p},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(s,a){var h=a.Pt.Y-s.Pt.Y;return h>0?1:h<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(s){return s>-n.ClipperBase.tolerance&&s<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(s){return s.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(s,a){var h=a;do{if(n.IntPoint.op_Equality(h.Pt,s))return!0;h=h.Next}while(h!==a);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(s,a,h,p){return p?s.X===a.X&&s.Y===a.Y||s.X===h.X&&s.Y===h.Y||s.X>a.X==s.X<h.X&&s.Y>a.Y==s.Y<h.Y&&Jt.op_Equality(Jt.Int128Mul(s.X-a.X,h.Y-a.Y),Jt.Int128Mul(h.X-a.X,s.Y-a.Y)):s.X===a.X&&s.Y===a.Y||s.X===h.X&&s.Y===h.Y||s.X>a.X==s.X<h.X&&s.Y>a.Y==s.Y<h.Y&&(s.X-a.X)*(h.Y-a.Y)===(h.X-a.X)*(s.Y-a.Y)},n.ClipperBase.prototype.PointOnPolygon=function(s,a,h){for(var p=a;;){if(this.PointOnLineSegment(s,p.Pt,p.Next.Pt,h))return!0;if(p=p.Next,p===a)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var s=arguments,a=s.length,h,p,x,I,B,Q,et;return a===3?(h=s[0],p=s[1],et=s[2],et?Jt.op_Equality(Jt.Int128Mul(h.Delta.Y,p.Delta.X),Jt.Int128Mul(h.Delta.X,p.Delta.Y)):n.Cast_Int64(h.Delta.Y*p.Delta.X)===n.Cast_Int64(h.Delta.X*p.Delta.Y)):a===4?(x=s[0],I=s[1],B=s[2],et=s[3],et?Jt.op_Equality(Jt.Int128Mul(x.Y-I.Y,I.X-B.X),Jt.Int128Mul(x.X-I.X,I.Y-B.Y)):n.Cast_Int64((x.Y-I.Y)*(I.X-B.X))-n.Cast_Int64((x.X-I.X)*(I.Y-B.Y))===0):(x=s[0],I=s[1],B=s[2],Q=s[3],et=s[4],et?Jt.op_Equality(Jt.Int128Mul(x.Y-I.Y,B.X-Q.X),Jt.Int128Mul(x.X-I.X,B.Y-Q.Y)):n.Cast_Int64((x.Y-I.Y)*(B.X-Q.X))-n.Cast_Int64((x.X-I.X)*(B.Y-Q.Y))===0)},n.ClipperBase.SlopesEqual3=function(s,a,h){return h?Jt.op_Equality(Jt.Int128Mul(s.Delta.Y,a.Delta.X),Jt.Int128Mul(s.Delta.X,a.Delta.Y)):n.Cast_Int64(s.Delta.Y*a.Delta.X)===n.Cast_Int64(s.Delta.X*a.Delta.Y)},n.ClipperBase.SlopesEqual4=function(s,a,h,p){return p?Jt.op_Equality(Jt.Int128Mul(s.Y-a.Y,a.X-h.X),Jt.Int128Mul(s.X-a.X,a.Y-h.Y)):n.Cast_Int64((s.Y-a.Y)*(a.X-h.X))-n.Cast_Int64((s.X-a.X)*(a.Y-h.Y))===0},n.ClipperBase.SlopesEqual5=function(s,a,h,p,x){return x?Jt.op_Equality(Jt.Int128Mul(s.Y-a.Y,h.X-p.X),Jt.Int128Mul(s.X-a.X,h.Y-p.Y)):n.Cast_Int64((s.Y-a.Y)*(h.X-p.X))-n.Cast_Int64((s.X-a.X)*(h.Y-p.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var s=0,a=this.m_edges.length;s<a;++s){for(var h=0,p=this.m_edges[s].length;h<p;++h)this.m_edges[s][h]=null;n.Clear(this.m_edges[s])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var s=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=s}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(s,a){a.Value?(s.X>n.ClipperBase.hiRange||s.Y>n.ClipperBase.hiRange||-s.X>n.ClipperBase.hiRange||-s.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(s.X>n.ClipperBase.loRange||s.Y>n.ClipperBase.loRange||-s.X>n.ClipperBase.loRange||-s.Y>n.ClipperBase.loRange)&&(a.Value=!0,this.RangeTest(s,a))},n.ClipperBase.prototype.InitEdge=function(s,a,h,p){s.Next=a,s.Prev=h,s.Curr.X=p.X,s.Curr.Y=p.Y,n.use_xyz&&(s.Curr.Z=p.Z),s.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(s,a){s.Curr.Y>=s.Next.Curr.Y?(s.Bot.X=s.Curr.X,s.Bot.Y=s.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Curr.Z),s.Top.X=s.Next.Curr.X,s.Top.Y=s.Next.Curr.Y,n.use_xyz&&(s.Top.Z=s.Next.Curr.Z)):(s.Top.X=s.Curr.X,s.Top.Y=s.Curr.Y,n.use_xyz&&(s.Top.Z=s.Curr.Z),s.Bot.X=s.Next.Curr.X,s.Bot.Y=s.Next.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Next.Curr.Z)),this.SetDx(s),s.PolyTyp=a},n.ClipperBase.prototype.FindNextLocMin=function(s){for(var a;;){for(;n.IntPoint.op_Inequality(s.Bot,s.Prev.Bot)||n.IntPoint.op_Equality(s.Curr,s.Top);)s=s.Next;if(s.Dx!==n.ClipperBase.horizontal&&s.Prev.Dx!==n.ClipperBase.horizontal)break;for(;s.Prev.Dx===n.ClipperBase.horizontal;)s=s.Prev;for(a=s;s.Dx===n.ClipperBase.horizontal;)s=s.Next;if(s.Top.Y!==s.Prev.Bot.Y){a.Prev.Bot.X<s.Bot.X&&(s=a);break}}return s},n.ClipperBase.prototype.ProcessBound=function(s,a){var h,p=s,x;if(p.OutIdx===n.ClipperBase.Skip){if(s=p,a){for(;s.Top.Y===s.Next.Bot.Y;)s=s.Next;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Prev}else{for(;s.Top.Y===s.Prev.Bot.Y;)s=s.Prev;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Next}if(s===p)a?p=s.Next:p=s.Prev;else{a?s=p.Next:s=p.Prev;var I=new n.LocalMinima;I.Next=null,I.Y=s.Bot.Y,I.LeftBound=null,I.RightBound=s,s.WindDelta=0,p=this.ProcessBound(s,a),this.InsertLocalMinima(I)}return p}if(s.Dx===n.ClipperBase.horizontal&&(a?h=s.Prev:h=s.Next,h.Dx===n.ClipperBase.horizontal?h.Bot.X!==s.Bot.X&&h.Top.X!==s.Bot.X&&this.ReverseHorizontal(s):h.Bot.X!==s.Bot.X&&this.ReverseHorizontal(s)),h=s,a){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==n.ClipperBase.Skip;)p=p.Next;if(p.Dx===n.ClipperBase.horizontal&&p.Next.OutIdx!==n.ClipperBase.Skip){for(x=p;x.Prev.Dx===n.ClipperBase.horizontal;)x=x.Prev;x.Prev.Top.X>p.Next.Top.X&&(p=x.Prev)}for(;s!==p;)s.NextInLML=s.Next,s.Dx===n.ClipperBase.horizontal&&s!==h&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),s=s.Next;s.Dx===n.ClipperBase.horizontal&&s!==h&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==n.ClipperBase.Skip;)p=p.Prev;if(p.Dx===n.ClipperBase.horizontal&&p.Prev.OutIdx!==n.ClipperBase.Skip){for(x=p;x.Next.Dx===n.ClipperBase.horizontal;)x=x.Next;(x.Next.Top.X===p.Prev.Top.X||x.Next.Top.X>p.Prev.Top.X)&&(p=x.Next)}for(;s!==p;)s.NextInLML=s.Prev,s.Dx===n.ClipperBase.horizontal&&s!==h&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),s=s.Prev;s.Dx===n.ClipperBase.horizontal&&s!==h&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),p=p.Prev}return p},n.ClipperBase.prototype.AddPath=function(s,a,h){n.use_lines?!h&&a===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):h||n.Error("AddPath: Open paths have been disabled.");var p=s.length-1;if(h)for(;p>0&&n.IntPoint.op_Equality(s[p],s[0]);)--p;for(;p>0&&n.IntPoint.op_Equality(s[p],s[p-1]);)--p;if(h&&p<2||!h&&p<1)return!1;for(var x=new Array,I=0;I<=p;I++)x.push(new n.TEdge);var B=!0;x[1].Curr.X=s[1].X,x[1].Curr.Y=s[1].Y,n.use_xyz&&(x[1].Curr.Z=s[1].Z);var Q={Value:this.m_UseFullRange};this.RangeTest(s[0],Q),this.m_UseFullRange=Q.Value,Q.Value=this.m_UseFullRange,this.RangeTest(s[p],Q),this.m_UseFullRange=Q.Value,this.InitEdge(x[0],x[1],x[p],s[0]),this.InitEdge(x[p],x[0],x[p-1],s[p]);for(var I=p-1;I>=1;--I)Q.Value=this.m_UseFullRange,this.RangeTest(s[I],Q),this.m_UseFullRange=Q.Value,this.InitEdge(x[I],x[I+1],x[I-1],s[I]);for(var et=x[0],pt=et,Nt=et;;){if(pt.Curr===pt.Next.Curr&&(h||pt.Next!==et)){if(pt===pt.Next)break;pt===et&&(et=pt.Next),pt=this.RemoveEdge(pt),Nt=pt;continue}if(pt.Prev===pt.Next)break;if(h&&n.ClipperBase.SlopesEqual4(pt.Prev.Curr,pt.Curr,pt.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(pt.Prev.Curr,pt.Curr,pt.Next.Curr))){pt===et&&(et=pt.Next),pt=this.RemoveEdge(pt),pt=pt.Prev,Nt=pt;continue}if(pt=pt.Next,pt===Nt||!h&&pt.Next===et)break}if(!h&&pt===pt.Next||h&&pt.Prev===pt.Next)return!1;h||(this.m_HasOpenPaths=!0,et.Prev.OutIdx=n.ClipperBase.Skip),pt=et;do this.InitEdge2(pt,a),pt=pt.Next,B&&pt.Curr.Y!==et.Curr.Y&&(B=!1);while(pt!==et);if(B){if(h)return!1;pt.Prev.OutIdx=n.ClipperBase.Skip;var It=new n.LocalMinima;for(It.Next=null,It.Y=pt.Bot.Y,It.LeftBound=null,It.RightBound=pt,It.RightBound.Side=n.EdgeSide.esRight,It.RightBound.WindDelta=0;pt.Bot.X!==pt.Prev.Top.X&&this.ReverseHorizontal(pt),pt.Next.OutIdx!==n.ClipperBase.Skip;)pt.NextInLML=pt.Next,pt=pt.Next;return this.InsertLocalMinima(It),this.m_edges.push(x),!0}this.m_edges.push(x);var Ft,le=null;for(n.IntPoint.op_Equality(pt.Prev.Bot,pt.Prev.Top)&&(pt=pt.Next);pt=this.FindNextLocMin(pt),pt!==le;){le===null&&(le=pt);var It=new n.LocalMinima;It.Next=null,It.Y=pt.Bot.Y,pt.Dx<pt.Prev.Dx?(It.LeftBound=pt.Prev,It.RightBound=pt,Ft=!1):(It.LeftBound=pt,It.RightBound=pt.Prev,Ft=!0),It.LeftBound.Side=n.EdgeSide.esLeft,It.RightBound.Side=n.EdgeSide.esRight,h?It.LeftBound.Next===It.RightBound?It.LeftBound.WindDelta=-1:It.LeftBound.WindDelta=1:It.LeftBound.WindDelta=0,It.RightBound.WindDelta=-It.LeftBound.WindDelta,pt=this.ProcessBound(It.LeftBound,Ft),pt.OutIdx===n.ClipperBase.Skip&&(pt=this.ProcessBound(pt,Ft));var xe=this.ProcessBound(It.RightBound,!Ft);xe.OutIdx===n.ClipperBase.Skip&&(xe=this.ProcessBound(xe,!Ft)),It.LeftBound.OutIdx===n.ClipperBase.Skip?It.LeftBound=null:It.RightBound.OutIdx===n.ClipperBase.Skip&&(It.RightBound=null),this.InsertLocalMinima(It),Ft||(pt=xe)}return!0},n.ClipperBase.prototype.AddPaths=function(s,a,h){for(var p=!1,x=0,I=s.length;x<I;++x)this.AddPath(s[x],a,h)&&(p=!0);return p},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(s,a,h){return n.IntPoint.op_Equality(s,h)||n.IntPoint.op_Equality(s,a)||n.IntPoint.op_Equality(h,a)?!1:s.X!==h.X?a.X>s.X==a.X<h.X:a.Y>s.Y==a.Y<h.Y},n.ClipperBase.prototype.RemoveEdge=function(s){s.Prev.Next=s.Next,s.Next.Prev=s.Prev;var a=s.Next;return s.Prev=null,a},n.ClipperBase.prototype.SetDx=function(s){s.Delta.X=s.Top.X-s.Bot.X,s.Delta.Y=s.Top.Y-s.Bot.Y,s.Delta.Y===0?s.Dx=n.ClipperBase.horizontal:s.Dx=s.Delta.X/s.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(s){if(this.m_MinimaList===null)this.m_MinimaList=s;else if(s.Y>=this.m_MinimaList.Y)s.Next=this.m_MinimaList,this.m_MinimaList=s;else{for(var a=this.m_MinimaList;a.Next!==null&&s.Y<a.Next.Y;)a=a.Next;s.Next=a.Next,a.Next=s}},n.ClipperBase.prototype.PopLocalMinima=function(s,a){return a.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===s?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(s){var a=s.Top.X;s.Top.X=s.Bot.X,s.Bot.X=a,n.use_xyz&&(a=s.Top.Z,s.Top.Z=s.Bot.Z,s.Bot.Z=a)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var s=this.m_MinimaList;s!==null;){this.InsertScanbeam(s.Y);var a=s.LeftBound;a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),a=s.RightBound,a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),s=s.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(s){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=s;else if(s>this.m_Scanbeam.Y){var a=new n.Scanbeam;a.Y=s,a.Next=this.m_Scanbeam,this.m_Scanbeam=a}else{for(var h=this.m_Scanbeam;h.Next!==null&&s<=h.Next.Y;)h=h.Next;if(s===h.Y)return;var p=new n.Scanbeam;p.Y=s,p.Next=h.Next,h.Next=p}},n.ClipperBase.prototype.PopScanbeam=function(s){return this.m_Scanbeam===null?(s.v=0,!1):(s.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var s=new n.OutRec;return s.Idx=n.ClipperBase.Unassigned,s.IsHole=!1,s.IsOpen=!1,s.FirstLeft=null,s.Pts=null,s.BottomPt=null,s.PolyNode=null,this.m_PolyOuts.push(s),s.Idx=this.m_PolyOuts.length-1,s},n.ClipperBase.prototype.DisposeOutRec=function(s){var a=this.m_PolyOuts[s];a.Pts=null,a=null,this.m_PolyOuts[s]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(s){s.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var a=s.PrevInAEL,h=s.NextInAEL;return s.NextInLML.OutIdx=s.OutIdx,a!==null?a.NextInAEL=s.NextInLML:this.m_ActiveEdges=s.NextInLML,h!==null&&(h.PrevInAEL=s.NextInLML),s.NextInLML.Side=s.Side,s.NextInLML.WindDelta=s.WindDelta,s.NextInLML.WindCnt=s.WindCnt,s.NextInLML.WindCnt2=s.WindCnt2,s=s.NextInLML,s.Curr.X=s.Bot.X,s.Curr.Y=s.Bot.Y,s.PrevInAEL=a,s.NextInAEL=h,n.ClipperBase.IsHorizontal(s)||this.InsertScanbeam(s.Top.Y),s},n.ClipperBase.prototype.SwapPositionsInAEL=function(s,a){if(!(s.NextInAEL===s.PrevInAEL||a.NextInAEL===a.PrevInAEL)){if(s.NextInAEL===a){var h=a.NextInAEL;h!==null&&(h.PrevInAEL=s);var p=s.PrevInAEL;p!==null&&(p.NextInAEL=a),a.PrevInAEL=p,a.NextInAEL=s,s.PrevInAEL=a,s.NextInAEL=h}else if(a.NextInAEL===s){var x=s.NextInAEL;x!==null&&(x.PrevInAEL=a);var I=a.PrevInAEL;I!==null&&(I.NextInAEL=s),s.PrevInAEL=I,s.NextInAEL=a,a.PrevInAEL=s,a.NextInAEL=x}else{var B=s.NextInAEL,Q=s.PrevInAEL;s.NextInAEL=a.NextInAEL,s.NextInAEL!==null&&(s.NextInAEL.PrevInAEL=s),s.PrevInAEL=a.PrevInAEL,s.PrevInAEL!==null&&(s.PrevInAEL.NextInAEL=s),a.NextInAEL=B,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=a),a.PrevInAEL=Q,a.PrevInAEL!==null&&(a.PrevInAEL.NextInAEL=a)}s.PrevInAEL===null?this.m_ActiveEdges=s:a.PrevInAEL===null&&(this.m_ActiveEdges=a)}},n.ClipperBase.prototype.DeleteFromAEL=function(s){var a=s.PrevInAEL,h=s.NextInAEL;a===null&&h===null&&s!==this.m_ActiveEdges||(a!==null?a.NextInAEL=h:this.m_ActiveEdges=h,h!==null&&(h.PrevInAEL=a),s.NextInAEL=null,s.PrevInAEL=null)},n.Clipper=function(s){typeof s>"u"&&(s=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&s)!==0,this.StrictlySimple=(2&s)!==0,this.PreserveCollinear=(4&s)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(s){var a=new n.Maxima;if(a.X=s,this.m_Maxima===null)this.m_Maxima=a,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(s<this.m_Maxima.X)a.Next=this.m_Maxima,a.Prev=null,this.m_Maxima=a;else{for(var h=this.m_Maxima;h.Next!==null&&s>=h.Next.X;)h=h.Next;if(s===h.X)return;a.Next=h.Next,a.Prev=h,h.Next!==null&&(h.Next.Prev=a),h.Next=a}},n.Clipper.prototype.Execute=function(){var s=arguments,a=s.length,h=s[1]instanceof n.PolyTree;if(a===4&&!h){var p=s[0],x=s[1],I=s[2],B=s[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(x),this.m_SubjFillType=I,this.m_ClipFillType=B,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var Q=this.ExecuteInternal();Q&&this.BuildResult(x)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Q}else if(a===4&&h){var p=s[0],et=s[1],I=s[2],B=s[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=I,this.m_ClipFillType=B,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var Q=this.ExecuteInternal();Q&&this.BuildResult2(et)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Q}else if(a===2&&!h){var p=s[0],x=s[1];return this.Execute(p,x,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(a===2&&h){var p=s[0],et=s[1];return this.Execute(p,et,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(s){if(!(s.FirstLeft===null||s.IsHole!==s.FirstLeft.IsHole&&s.FirstLeft.Pts!==null)){for(var a=s.FirstLeft;a!==null&&(a.IsHole===s.IsHole||a.Pts===null);)a=a.FirstLeft;s.FirstLeft=a}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var s={},a={};if(!this.PopScanbeam(s))return!1;for(this.InsertLocalMinimaIntoAEL(s.v);this.PopScanbeam(a)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(a.v))return!1;this.ProcessEdgesAtTopOfScanbeam(a.v),s.v=a.v,this.InsertLocalMinimaIntoAEL(s.v)}var h,p,x;for(p=0,x=this.m_PolyOuts.length;p<x;p++)h=this.m_PolyOuts[p],!(h.Pts===null||h.IsOpen)&&(h.IsHole^this.ReverseSolution)==this.Area$1(h)>0&&this.ReversePolyPtLinks(h.Pts);for(this.JoinCommonEdges(),p=0,x=this.m_PolyOuts.length;p<x;p++)h=this.m_PolyOuts[p],h.Pts!==null&&(h.IsOpen?this.FixupOutPolyline(h):this.FixupOutPolygon(h));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var s=0,a=this.m_PolyOuts.length;s<a;++s)this.DisposeOutRec(s);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(s,a,h){var p=new n.Join;p.OutPt1=s,p.OutPt2=a,p.OffPt.X=h.X,p.OffPt.Y=h.Y,n.use_xyz&&(p.OffPt.Z=h.Z),this.m_Joins.push(p)},n.Clipper.prototype.AddGhostJoin=function(s,a){var h=new n.Join;h.OutPt1=s,h.OffPt.X=a.X,h.OffPt.Y=a.Y,n.use_xyz&&(h.OffPt.Z=a.Z),this.m_GhostJoins.push(h)},n.Clipper.prototype.SetZ=function(s,a,h){if(this.ZFillFunction!==null){if(s.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(s,a.Bot)?s.Z=a.Bot.Z:n.IntPoint.op_Equality(s,a.Top)?s.Z=a.Top.Z:n.IntPoint.op_Equality(s,h.Bot)?s.Z=h.Bot.Z:n.IntPoint.op_Equality(s,h.Top)?s.Z=h.Top.Z:this.ZFillFunction(a.Bot,a.Top,h.Bot,h.Top,s)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(s){for(var a={},h,p;this.PopLocalMinima(s,a);){h=a.v.LeftBound,p=a.v.RightBound;var x=null;if(h===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(x=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(h,null),this.SetWindingCount(h),this.IsContributing(h)&&(x=this.AddOutPt(h,h.Bot)),this.InsertScanbeam(h.Top.Y)):(this.InsertEdgeIntoAEL(h,null),this.InsertEdgeIntoAEL(p,h),this.SetWindingCount(h),p.WindCnt=h.WindCnt,p.WindCnt2=h.WindCnt2,this.IsContributing(h)&&(x=this.AddLocalMinPoly(h,p,h.Bot)),this.InsertScanbeam(h.Top.Y)),p!==null&&(n.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(h===null||p===null)){if(x!==null&&n.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var I=0,B=this.m_GhostJoins.length;I<B;I++){var Q=this.m_GhostJoins[I];this.HorzSegmentsOverlap(Q.OutPt1.Pt.X,Q.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin(Q.OutPt1,x,Q.OffPt)}if(h.OutIdx>=0&&h.PrevInAEL!==null&&h.PrevInAEL.Curr.X===h.Bot.X&&h.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(h.PrevInAEL.Curr,h.PrevInAEL.Top,h.Curr,h.Top,this.m_UseFullRange)&&h.WindDelta!==0&&h.PrevInAEL.WindDelta!==0){var et=this.AddOutPt(h.PrevInAEL,h.Bot);this.AddJoin(x,et,h.Top)}if(h.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var et=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(x,et,p.Top)}var pt=h.NextInAEL;if(pt!==null)for(;pt!==p;)this.IntersectEdges(p,pt,h.Curr),pt=pt.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(s,a){if(this.m_ActiveEdges===null)s.PrevInAEL=null,s.NextInAEL=null,this.m_ActiveEdges=s;else if(a===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,s))s.PrevInAEL=null,s.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=s,this.m_ActiveEdges=s;else{for(a===null&&(a=this.m_ActiveEdges);a.NextInAEL!==null&&!this.E2InsertsBeforeE1(a.NextInAEL,s);)a=a.NextInAEL;s.NextInAEL=a.NextInAEL,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=s),s.PrevInAEL=a,a.NextInAEL=s}},n.Clipper.prototype.E2InsertsBeforeE1=function(s,a){return a.Curr.X===s.Curr.X?a.Top.Y>s.Top.Y?a.Top.X<n.Clipper.TopX(s,a.Top.Y):s.Top.X>n.Clipper.TopX(a,s.Top.Y):a.Curr.X<s.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(s){var a,h;switch(s.PolyTyp===n.PolyType.ptSubject?(a=this.m_SubjFillType,h=this.m_ClipFillType):(a=this.m_ClipFillType,h=this.m_SubjFillType),a){case n.PolyFillType.pftEvenOdd:if(s.WindDelta===0&&s.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(s.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(s.WindCnt!==1)return!1;break;default:if(s.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctUnion:switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}case n.ClipType.ctDifference:if(s.PolyTyp===n.PolyType.ptSubject)switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctXor:if(s.WindDelta===0)switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(s){for(var a=s.PrevInAEL;a!==null&&(a.PolyTyp!==s.PolyTyp||a.WindDelta===0);)a=a.PrevInAEL;if(a===null){var h=s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;s.WindDelta===0?s.WindCnt=h===n.PolyFillType.pftNegative?-1:1:s.WindCnt=s.WindDelta,s.WindCnt2=0,a=this.m_ActiveEdges}else if(s.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)s.WindCnt=1,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;else if(this.IsEvenOddFillType(s)){if(s.WindDelta===0){for(var p=!0,x=a.PrevInAEL;x!==null;)x.PolyTyp===a.PolyTyp&&x.WindDelta!==0&&(p=!p),x=x.PrevInAEL;s.WindCnt=p?0:1}else s.WindCnt=s.WindDelta;s.WindCnt2=a.WindCnt2,a=a.NextInAEL}else a.WindCnt*a.WindDelta<0?Math.abs(a.WindCnt)>1?a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta:s.WindCnt=s.WindDelta===0?1:s.WindDelta:s.WindDelta===0?s.WindCnt=a.WindCnt<0?a.WindCnt-1:a.WindCnt+1:a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;if(this.IsEvenOddAltFillType(s))for(;a!==s;)a.WindDelta!==0&&(s.WindCnt2=s.WindCnt2===0?1:0),a=a.NextInAEL;else for(;a!==s;)s.WindCnt2+=a.WindDelta,a=a.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(s){this.m_SortedEdges===null?(this.m_SortedEdges=s,s.PrevInSEL=null,s.NextInSEL=null):(s.NextInSEL=this.m_SortedEdges,s.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=s,this.m_SortedEdges=s)},n.Clipper.prototype.PopEdgeFromSEL=function(s){if(s.v=this.m_SortedEdges,s.v===null)return!1;var a=s.v;return this.m_SortedEdges=s.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),a.NextInSEL=null,a.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var s=this.m_ActiveEdges;for(this.m_SortedEdges=s;s!==null;)s.PrevInSEL=s.PrevInAEL,s.NextInSEL=s.NextInAEL,s=s.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(s,a){if(!(s.NextInSEL===null&&s.PrevInSEL===null)&&!(a.NextInSEL===null&&a.PrevInSEL===null)){if(s.NextInSEL===a){var h=a.NextInSEL;h!==null&&(h.PrevInSEL=s);var p=s.PrevInSEL;p!==null&&(p.NextInSEL=a),a.PrevInSEL=p,a.NextInSEL=s,s.PrevInSEL=a,s.NextInSEL=h}else if(a.NextInSEL===s){var h=s.NextInSEL;h!==null&&(h.PrevInSEL=a);var p=a.PrevInSEL;p!==null&&(p.NextInSEL=s),s.PrevInSEL=p,s.NextInSEL=a,a.PrevInSEL=s,a.NextInSEL=h}else{var h=s.NextInSEL,p=s.PrevInSEL;s.NextInSEL=a.NextInSEL,s.NextInSEL!==null&&(s.NextInSEL.PrevInSEL=s),s.PrevInSEL=a.PrevInSEL,s.PrevInSEL!==null&&(s.PrevInSEL.NextInSEL=s),a.NextInSEL=h,a.NextInSEL!==null&&(a.NextInSEL.PrevInSEL=a),a.PrevInSEL=p,a.PrevInSEL!==null&&(a.PrevInSEL.NextInSEL=a)}s.PrevInSEL===null?this.m_SortedEdges=s:a.PrevInSEL===null&&(this.m_SortedEdges=a)}},n.Clipper.prototype.AddLocalMaxPoly=function(s,a,h){this.AddOutPt(s,h),a.WindDelta===0&&this.AddOutPt(a,h),s.OutIdx===a.OutIdx?(s.OutIdx=-1,a.OutIdx=-1):s.OutIdx<a.OutIdx?this.AppendPolygon(s,a):this.AppendPolygon(a,s)},n.Clipper.prototype.AddLocalMinPoly=function(s,a,h){var p,x,I;if(n.ClipperBase.IsHorizontal(a)||s.Dx>a.Dx?(p=this.AddOutPt(s,h),a.OutIdx=s.OutIdx,s.Side=n.EdgeSide.esLeft,a.Side=n.EdgeSide.esRight,x=s,x.PrevInAEL===a?I=a.PrevInAEL:I=x.PrevInAEL):(p=this.AddOutPt(a,h),s.OutIdx=a.OutIdx,s.Side=n.EdgeSide.esRight,a.Side=n.EdgeSide.esLeft,x=a,x.PrevInAEL===s?I=s.PrevInAEL:I=x.PrevInAEL),I!==null&&I.OutIdx>=0&&I.Top.Y<h.Y&&x.Top.Y<h.Y){var B=n.Clipper.TopX(I,h.Y),Q=n.Clipper.TopX(x,h.Y);if(B===Q&&x.WindDelta!==0&&I.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(B,h.Y),I.Top,new n.IntPoint2(Q,h.Y),x.Top,this.m_UseFullRange)){var et=this.AddOutPt(I,h);this.AddJoin(p,et,x.Top)}}return p},n.Clipper.prototype.AddOutPt=function(s,a){if(s.OutIdx<0){var h=this.CreateOutRec();h.IsOpen=s.WindDelta===0;var p=new n.OutPt;return h.Pts=p,p.Idx=h.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=p,p.Prev=p,h.IsOpen||this.SetHoleState(s,h),s.OutIdx=h.Idx,p}else{var h=this.m_PolyOuts[s.OutIdx],x=h.Pts,I=s.Side===n.EdgeSide.esLeft;if(I&&n.IntPoint.op_Equality(a,x.Pt))return x;if(!I&&n.IntPoint.op_Equality(a,x.Prev.Pt))return x.Prev;var p=new n.OutPt;return p.Idx=h.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=x,p.Prev=x.Prev,p.Prev.Next=p,x.Prev=p,I&&(h.Pts=p),p}},n.Clipper.prototype.GetLastOutPt=function(s){var a=this.m_PolyOuts[s.OutIdx];return s.Side===n.EdgeSide.esLeft?a.Pts:a.Pts.Prev},n.Clipper.prototype.SwapPoints=function(s,a){var h=new n.IntPoint1(s.Value);s.Value.X=a.Value.X,s.Value.Y=a.Value.Y,n.use_xyz&&(s.Value.Z=a.Value.Z),a.Value.X=h.X,a.Value.Y=h.Y,n.use_xyz&&(a.Value.Z=h.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(s,a,h,p){var x;return s>a&&(x=s,s=a,a=x),h>p&&(x=h,h=p,p=x),s<p&&h<a},n.Clipper.prototype.SetHoleState=function(s,a){for(var h=s.PrevInAEL,p=null;h!==null;)h.OutIdx>=0&&h.WindDelta!==0&&(p===null?p=h:p.OutIdx===h.OutIdx&&(p=null)),h=h.PrevInAEL;p===null?(a.FirstLeft=null,a.IsHole=!1):(a.FirstLeft=this.m_PolyOuts[p.OutIdx],a.IsHole=!a.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(s,a){return s.Y===a.Y?n.ClipperBase.horizontal:(a.X-s.X)/(a.Y-s.Y)},n.Clipper.prototype.FirstIsBottomPt=function(s,a){for(var h=s.Prev;n.IntPoint.op_Equality(h.Pt,s.Pt)&&h!==s;)h=h.Prev;var p=Math.abs(this.GetDx(s.Pt,h.Pt));for(h=s.Next;n.IntPoint.op_Equality(h.Pt,s.Pt)&&h!==s;)h=h.Next;var x=Math.abs(this.GetDx(s.Pt,h.Pt));for(h=a.Prev;n.IntPoint.op_Equality(h.Pt,a.Pt)&&h!==a;)h=h.Prev;var I=Math.abs(this.GetDx(a.Pt,h.Pt));for(h=a.Next;n.IntPoint.op_Equality(h.Pt,a.Pt)&&h!==a;)h=h.Next;var B=Math.abs(this.GetDx(a.Pt,h.Pt));return Math.max(p,x)===Math.max(I,B)&&Math.min(p,x)===Math.min(I,B)?this.Area(s)>0:p>=I&&p>=B||x>=I&&x>=B},n.Clipper.prototype.GetBottomPt=function(s){for(var a=null,h=s.Next;h!==s;)h.Pt.Y>s.Pt.Y?(s=h,a=null):h.Pt.Y===s.Pt.Y&&h.Pt.X<=s.Pt.X&&(h.Pt.X<s.Pt.X?(a=null,s=h):h.Next!==s&&h.Prev!==s&&(a=h)),h=h.Next;if(a!==null)for(;a!==h;)for(this.FirstIsBottomPt(h,a)||(s=a),a=a.Next;n.IntPoint.op_Inequality(a.Pt,s.Pt);)a=a.Next;return s},n.Clipper.prototype.GetLowermostRec=function(s,a){s.BottomPt===null&&(s.BottomPt=this.GetBottomPt(s.Pts)),a.BottomPt===null&&(a.BottomPt=this.GetBottomPt(a.Pts));var h=s.BottomPt,p=a.BottomPt;return h.Pt.Y>p.Pt.Y?s:h.Pt.Y<p.Pt.Y?a:h.Pt.X<p.Pt.X?s:h.Pt.X>p.Pt.X||h.Next===h?a:p.Next===p||this.FirstIsBottomPt(h,p)?s:a},n.Clipper.prototype.OutRec1RightOfOutRec2=function(s,a){do if(s=s.FirstLeft,s===a)return!0;while(s!==null);return!1},n.Clipper.prototype.GetOutRec=function(s){for(var a=this.m_PolyOuts[s];a!==this.m_PolyOuts[a.Idx];)a=this.m_PolyOuts[a.Idx];return a},n.Clipper.prototype.AppendPolygon=function(s,a){var h=this.m_PolyOuts[s.OutIdx],p=this.m_PolyOuts[a.OutIdx],x;this.OutRec1RightOfOutRec2(h,p)?x=p:this.OutRec1RightOfOutRec2(p,h)?x=h:x=this.GetLowermostRec(h,p);var I=h.Pts,B=I.Prev,Q=p.Pts,et=Q.Prev;s.Side===n.EdgeSide.esLeft?a.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(Q),Q.Next=I,I.Prev=Q,B.Next=et,et.Prev=B,h.Pts=et):(et.Next=I,I.Prev=et,Q.Prev=B,B.Next=Q,h.Pts=Q):a.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(Q),B.Next=et,et.Prev=B,Q.Next=I,I.Prev=Q):(B.Next=Q,Q.Prev=B,I.Prev=et,et.Next=I),h.BottomPt=null,x===p&&(p.FirstLeft!==h&&(h.FirstLeft=p.FirstLeft),h.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=h;var pt=s.OutIdx,Nt=a.OutIdx;s.OutIdx=-1,a.OutIdx=-1;for(var It=this.m_ActiveEdges;It!==null;){if(It.OutIdx===Nt){It.OutIdx=pt,It.Side=s.Side;break}It=It.NextInAEL}p.Idx=h.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(s){if(s!==null){var a,h;a=s;do h=a.Next,a.Next=a.Prev,a.Prev=h,a=h;while(a!==s)}},n.Clipper.SwapSides=function(s,a){var h=s.Side;s.Side=a.Side,a.Side=h},n.Clipper.SwapPolyIndexes=function(s,a){var h=s.OutIdx;s.OutIdx=a.OutIdx,a.OutIdx=h},n.Clipper.prototype.IntersectEdges=function(s,a,h){var p=s.OutIdx>=0,x=a.OutIdx>=0;if(n.use_xyz&&this.SetZ(h,s,a),n.use_lines&&(s.WindDelta===0||a.WindDelta===0)){if(s.WindDelta===0&&a.WindDelta===0)return;s.PolyTyp===a.PolyTyp&&s.WindDelta!==a.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?s.WindDelta===0?x&&(this.AddOutPt(s,h),p&&(s.OutIdx=-1)):p&&(this.AddOutPt(a,h),x&&(a.OutIdx=-1)):s.PolyTyp!==a.PolyTyp&&(s.WindDelta===0&&Math.abs(a.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||a.WindCnt2===0)?(this.AddOutPt(s,h),p&&(s.OutIdx=-1)):a.WindDelta===0&&Math.abs(s.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||s.WindCnt2===0)&&(this.AddOutPt(a,h),x&&(a.OutIdx=-1)));return}if(s.PolyTyp===a.PolyTyp)if(this.IsEvenOddFillType(s)){var I=s.WindCnt;s.WindCnt=a.WindCnt,a.WindCnt=I}else s.WindCnt+a.WindDelta===0?s.WindCnt=-s.WindCnt:s.WindCnt+=a.WindDelta,a.WindCnt-s.WindDelta===0?a.WindCnt=-a.WindCnt:a.WindCnt-=s.WindDelta;else this.IsEvenOddFillType(a)?s.WindCnt2=s.WindCnt2===0?1:0:s.WindCnt2+=a.WindDelta,this.IsEvenOddFillType(s)?a.WindCnt2=a.WindCnt2===0?1:0:a.WindCnt2-=s.WindDelta;var B,Q,et,pt;s.PolyTyp===n.PolyType.ptSubject?(B=this.m_SubjFillType,et=this.m_ClipFillType):(B=this.m_ClipFillType,et=this.m_SubjFillType),a.PolyTyp===n.PolyType.ptSubject?(Q=this.m_SubjFillType,pt=this.m_ClipFillType):(Q=this.m_ClipFillType,pt=this.m_SubjFillType);var Nt,It;switch(B){case n.PolyFillType.pftPositive:Nt=s.WindCnt;break;case n.PolyFillType.pftNegative:Nt=-s.WindCnt;break;default:Nt=Math.abs(s.WindCnt);break}switch(Q){case n.PolyFillType.pftPositive:It=a.WindCnt;break;case n.PolyFillType.pftNegative:It=-a.WindCnt;break;default:It=Math.abs(a.WindCnt);break}if(p&&x)Nt!==0&&Nt!==1||It!==0&&It!==1||s.PolyTyp!==a.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(s,a,h):(this.AddOutPt(s,h),this.AddOutPt(a,h),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(p)(It===0||It===1)&&(this.AddOutPt(s,h),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(x)(Nt===0||Nt===1)&&(this.AddOutPt(a,h),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if((Nt===0||Nt===1)&&(It===0||It===1)){var Ft,le;switch(et){case n.PolyFillType.pftPositive:Ft=s.WindCnt2;break;case n.PolyFillType.pftNegative:Ft=-s.WindCnt2;break;default:Ft=Math.abs(s.WindCnt2);break}switch(pt){case n.PolyFillType.pftPositive:le=a.WindCnt2;break;case n.PolyFillType.pftNegative:le=-a.WindCnt2;break;default:le=Math.abs(a.WindCnt2);break}if(s.PolyTyp!==a.PolyTyp)this.AddLocalMinPoly(s,a,h);else if(Nt===1&&It===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Ft>0&&le>0&&this.AddLocalMinPoly(s,a,h);break;case n.ClipType.ctUnion:Ft<=0&&le<=0&&this.AddLocalMinPoly(s,a,h);break;case n.ClipType.ctDifference:(s.PolyTyp===n.PolyType.ptClip&&Ft>0&&le>0||s.PolyTyp===n.PolyType.ptSubject&&Ft<=0&&le<=0)&&this.AddLocalMinPoly(s,a,h);break;case n.ClipType.ctXor:this.AddLocalMinPoly(s,a,h);break}else n.Clipper.SwapSides(s,a)}},n.Clipper.prototype.DeleteFromSEL=function(s){var a=s.PrevInSEL,h=s.NextInSEL;a===null&&h===null&&s!==this.m_SortedEdges||(a!==null?a.NextInSEL=h:this.m_SortedEdges=h,h!==null&&(h.PrevInSEL=a),s.NextInSEL=null,s.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var s={};this.PopEdgeFromSEL(s);)this.ProcessHorizontal(s.v)},n.Clipper.prototype.GetHorzDirection=function(s,a){s.Bot.X<s.Top.X?(a.Left=s.Bot.X,a.Right=s.Top.X,a.Dir=n.Direction.dLeftToRight):(a.Left=s.Top.X,a.Right=s.Bot.X,a.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(s){var a={Dir:null,Left:null,Right:null};this.GetHorzDirection(s,a);for(var h=a.Dir,p=a.Left,x=a.Right,I=s.WindDelta===0,B=s,Q=null;B.NextInLML!==null&&n.ClipperBase.IsHorizontal(B.NextInLML);)B=B.NextInLML;B.NextInLML===null&&(Q=this.GetMaximaPair(B));var et=this.m_Maxima;if(et!==null)if(h===n.Direction.dLeftToRight){for(;et!==null&&et.X<=s.Bot.X;)et=et.Next;et!==null&&et.X>=B.Top.X&&(et=null)}else{for(;et.Next!==null&&et.Next.X<s.Bot.X;)et=et.Next;et.X<=B.Top.X&&(et=null)}for(var pt=null;;){for(var Nt=s===B,It=this.GetNextInAEL(s,h);It!==null;){if(et!==null)if(h===n.Direction.dLeftToRight)for(;et!==null&&et.X<It.Curr.X;)s.OutIdx>=0&&!I&&this.AddOutPt(s,new n.IntPoint2(et.X,s.Bot.Y)),et=et.Next;else for(;et!==null&&et.X>It.Curr.X;)s.OutIdx>=0&&!I&&this.AddOutPt(s,new n.IntPoint2(et.X,s.Bot.Y)),et=et.Prev;if(h===n.Direction.dLeftToRight&&It.Curr.X>x||h===n.Direction.dRightToLeft&&It.Curr.X<p||It.Curr.X===s.Top.X&&s.NextInLML!==null&&It.Dx<s.NextInLML.Dx)break;if(s.OutIdx>=0&&!I){n.use_xyz&&(h===n.Direction.dLeftToRight?this.SetZ(It.Curr,s,It):this.SetZ(It.Curr,It,s)),pt=this.AddOutPt(s,It.Curr);for(var Ft=this.m_SortedEdges;Ft!==null;){if(Ft.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,Ft.Bot.X,Ft.Top.X)){var le=this.GetLastOutPt(Ft);this.AddJoin(le,pt,Ft.Top)}Ft=Ft.NextInSEL}this.AddGhostJoin(pt,s.Bot)}if(It===Q&&Nt){s.OutIdx>=0&&this.AddLocalMaxPoly(s,Q,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(Q);return}if(h===n.Direction.dLeftToRight){var xe=new n.IntPoint2(It.Curr.X,s.Curr.Y);this.IntersectEdges(s,It,xe)}else{var xe=new n.IntPoint2(It.Curr.X,s.Curr.Y);this.IntersectEdges(It,s,xe)}var Ae=this.GetNextInAEL(It,h);this.SwapPositionsInAEL(s,It),It=Ae}if(s.NextInLML===null||!n.ClipperBase.IsHorizontal(s.NextInLML))break;s=this.UpdateEdgeIntoAEL(s),s.OutIdx>=0&&this.AddOutPt(s,s.Bot),a={Dir:h,Left:p,Right:x},this.GetHorzDirection(s,a),h=a.Dir,p=a.Left,x=a.Right}if(s.OutIdx>=0&&pt===null){pt=this.GetLastOutPt(s);for(var Ft=this.m_SortedEdges;Ft!==null;){if(Ft.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,Ft.Bot.X,Ft.Top.X)){var le=this.GetLastOutPt(Ft);this.AddJoin(le,pt,Ft.Top)}Ft=Ft.NextInSEL}this.AddGhostJoin(pt,s.Top)}if(s.NextInLML!==null)if(s.OutIdx>=0){if(pt=this.AddOutPt(s,s.Top),s=this.UpdateEdgeIntoAEL(s),s.WindDelta===0)return;var He=s.PrevInAEL,Ae=s.NextInAEL;if(He!==null&&He.Curr.X===s.Bot.X&&He.Curr.Y===s.Bot.Y&&He.WindDelta===0&&He.OutIdx>=0&&He.Curr.Y>He.Top.Y&&n.ClipperBase.SlopesEqual3(s,He,this.m_UseFullRange)){var le=this.AddOutPt(He,s.Bot);this.AddJoin(pt,le,s.Top)}else if(Ae!==null&&Ae.Curr.X===s.Bot.X&&Ae.Curr.Y===s.Bot.Y&&Ae.WindDelta!==0&&Ae.OutIdx>=0&&Ae.Curr.Y>Ae.Top.Y&&n.ClipperBase.SlopesEqual3(s,Ae,this.m_UseFullRange)){var le=this.AddOutPt(Ae,s.Bot);this.AddJoin(pt,le,s.Top)}}else s=this.UpdateEdgeIntoAEL(s);else s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s)},n.Clipper.prototype.GetNextInAEL=function(s,a){return a===n.Direction.dLeftToRight?s.NextInAEL:s.PrevInAEL},n.Clipper.prototype.IsMinima=function(s){return s!==null&&s.Prev.NextInLML!==s&&s.Next.NextInLML!==s},n.Clipper.prototype.IsMaxima=function(s,a){return s!==null&&s.Top.Y===a&&s.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(s,a){return s.Top.Y===a&&s.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(s){return n.IntPoint.op_Equality(s.Next.Top,s.Top)&&s.Next.NextInLML===null?s.Next:n.IntPoint.op_Equality(s.Prev.Top,s.Top)&&s.Prev.NextInLML===null?s.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(s){var a=this.GetMaximaPair(s);return a===null||a.OutIdx===n.ClipperBase.Skip||a.NextInAEL===a.PrevInAEL&&!n.ClipperBase.IsHorizontal(a)?null:a},n.Clipper.prototype.ProcessIntersections=function(s){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(s),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(s){if(this.m_ActiveEdges!==null){var a=this.m_ActiveEdges;for(this.m_SortedEdges=a;a!==null;)a.PrevInSEL=a.PrevInAEL,a.NextInSEL=a.NextInAEL,a.Curr.X=n.Clipper.TopX(a,s),a=a.NextInAEL;for(var h=!0;h&&this.m_SortedEdges!==null;){for(h=!1,a=this.m_SortedEdges;a.NextInSEL!==null;){var p=a.NextInSEL,x=new n.IntPoint0;if(a.Curr.X>p.Curr.X){this.IntersectPoint(a,p,x),x.Y<s&&(x=new n.IntPoint2(n.Clipper.TopX(a,s),s));var I=new n.IntersectNode;I.Edge1=a,I.Edge2=p,I.Pt.X=x.X,I.Pt.Y=x.Y,n.use_xyz&&(I.Pt.Z=x.Z),this.m_IntersectList.push(I),this.SwapPositionsInSEL(a,p),h=!0}else a=p}if(a.PrevInSEL!==null)a.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(s){return s.Edge1.NextInSEL===s.Edge2||s.Edge1.PrevInSEL===s.Edge2},n.Clipper.IntersectNodeSort=function(s,a){return a.Pt.Y-s.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var s=this.m_IntersectList.length,a=0;a<s;a++){if(!this.EdgesAdjacent(this.m_IntersectList[a])){for(var h=a+1;h<s&&!this.EdgesAdjacent(this.m_IntersectList[h]);)h++;if(h===s)return!1;var p=this.m_IntersectList[a];this.m_IntersectList[a]=this.m_IntersectList[h],this.m_IntersectList[h]=p}this.SwapPositionsInSEL(this.m_IntersectList[a].Edge1,this.m_IntersectList[a].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var s=0,a=this.m_IntersectList.length;s<a;s++){var h=this.m_IntersectList[s];this.IntersectEdges(h.Edge1,h.Edge2,h.Pt),this.SwapPositionsInAEL(h.Edge1,h.Edge2)}this.m_IntersectList.length=0};var ie=function(s){return s<0?Math.ceil(s-.5):Math.round(s)},Ue=function(s){return s<0?Math.ceil(s-.5):Math.floor(s+.5)},Ze=function(s){return s<0?-Math.round(Math.abs(s)):Math.round(s)},De=function(s){return s<0?(s-=.5,s<-2147483648?Math.ceil(s):s|0):(s+=.5,s>2147483647?Math.floor(s):s|0)};r.msie?n.Clipper.Round=ie:r.chromium?n.Clipper.Round=Ze:r.safari?n.Clipper.Round=De:n.Clipper.Round=Ue,n.Clipper.TopX=function(s,a){return a===s.Top.Y?s.Top.X:s.Bot.X+n.Clipper.Round(s.Dx*(a-s.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(s,a,h){h.X=0,h.Y=0;var p,x;if(s.Dx===a.Dx){h.Y=s.Curr.Y,h.X=n.Clipper.TopX(s,h.Y);return}if(s.Delta.X===0)h.X=s.Bot.X,n.ClipperBase.IsHorizontal(a)?h.Y=a.Bot.Y:(x=a.Bot.Y-a.Bot.X/a.Dx,h.Y=n.Clipper.Round(h.X/a.Dx+x));else if(a.Delta.X===0)h.X=a.Bot.X,n.ClipperBase.IsHorizontal(s)?h.Y=s.Bot.Y:(p=s.Bot.Y-s.Bot.X/s.Dx,h.Y=n.Clipper.Round(h.X/s.Dx+p));else{p=s.Bot.X-s.Bot.Y*s.Dx,x=a.Bot.X-a.Bot.Y*a.Dx;var I=(x-p)/(s.Dx-a.Dx);h.Y=n.Clipper.Round(I),Math.abs(s.Dx)<Math.abs(a.Dx)?h.X=n.Clipper.Round(s.Dx*I+p):h.X=n.Clipper.Round(a.Dx*I+x)}if(h.Y<s.Top.Y||h.Y<a.Top.Y){if(s.Top.Y>a.Top.Y)return h.Y=s.Top.Y,h.X=n.Clipper.TopX(a,s.Top.Y),h.X<s.Top.X;h.Y=a.Top.Y,Math.abs(s.Dx)<Math.abs(a.Dx)?h.X=n.Clipper.TopX(s,h.Y):h.X=n.Clipper.TopX(a,h.Y)}h.Y>s.Curr.Y&&(h.Y=s.Curr.Y,Math.abs(s.Dx)>Math.abs(a.Dx)?h.X=n.Clipper.TopX(a,h.Y):h.X=n.Clipper.TopX(s,h.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(s){for(var a=this.m_ActiveEdges;a!==null;){var h=this.IsMaxima(a,s);if(h){var p=this.GetMaximaPairEx(a);h=p===null||!n.ClipperBase.IsHorizontal(p)}if(h){this.StrictlySimple&&this.InsertMaxima(a.Top.X);var x=a.PrevInAEL;this.DoMaxima(a),x===null?a=this.m_ActiveEdges:a=x.NextInAEL}else{if(this.IsIntermediate(a,s)&&n.ClipperBase.IsHorizontal(a.NextInLML)?(a=this.UpdateEdgeIntoAEL(a),a.OutIdx>=0&&this.AddOutPt(a,a.Bot),this.AddEdgeToSEL(a)):(a.Curr.X=n.Clipper.TopX(a,s),a.Curr.Y=s),n.use_xyz&&(a.Top.Y===s?a.Curr.Z=a.Top.Z:a.Bot.Y===s?a.Curr.Z=a.Bot.Z:a.Curr.Z=0),this.StrictlySimple){var x=a.PrevInAEL;if(a.OutIdx>=0&&a.WindDelta!==0&&x!==null&&x.OutIdx>=0&&x.Curr.X===a.Curr.X&&x.WindDelta!==0){var I=new n.IntPoint1(a.Curr);n.use_xyz&&this.SetZ(I,x,a);var B=this.AddOutPt(x,I),Q=this.AddOutPt(a,I);this.AddJoin(B,Q,I)}}a=a.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,a=this.m_ActiveEdges;a!==null;){if(this.IsIntermediate(a,s)){var B=null;a.OutIdx>=0&&(B=this.AddOutPt(a,a.Top)),a=this.UpdateEdgeIntoAEL(a);var x=a.PrevInAEL,et=a.NextInAEL;if(x!==null&&x.Curr.X===a.Bot.X&&x.Curr.Y===a.Bot.Y&&B!==null&&x.OutIdx>=0&&x.Curr.Y===x.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,x.Curr,x.Top,this.m_UseFullRange)&&a.WindDelta!==0&&x.WindDelta!==0){var Q=this.AddOutPt(ePrev2,a.Bot);this.AddJoin(B,Q,a.Top)}else if(et!==null&&et.Curr.X===a.Bot.X&&et.Curr.Y===a.Bot.Y&&B!==null&&et.OutIdx>=0&&et.Curr.Y===et.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,et.Curr,et.Top,this.m_UseFullRange)&&a.WindDelta!==0&&et.WindDelta!==0){var Q=this.AddOutPt(et,a.Bot);this.AddJoin(B,Q,a.Top)}}a=a.NextInAEL}},n.Clipper.prototype.DoMaxima=function(s){var a=this.GetMaximaPairEx(s);if(a===null){s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s);return}for(var h=s.NextInAEL;h!==null&&h!==a;)this.IntersectEdges(s,h,s.Top),this.SwapPositionsInAEL(s,h),h=s.NextInAEL;s.OutIdx===-1&&a.OutIdx===-1?(this.DeleteFromAEL(s),this.DeleteFromAEL(a)):s.OutIdx>=0&&a.OutIdx>=0?(s.OutIdx>=0&&this.AddLocalMaxPoly(s,a,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(a)):n.use_lines&&s.WindDelta===0?(s.OutIdx>=0&&(this.AddOutPt(s,s.Top),s.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(s),a.OutIdx>=0&&(this.AddOutPt(a,s.Top),a.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(a)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(s){for(var a=0,h=s.length;a<h;a++)s[a].reverse()},n.Clipper.Orientation=function(s){return n.Clipper.Area(s)>=0},n.Clipper.prototype.PointCount=function(s){if(s===null)return 0;var a=0,h=s;do a++,h=h.Next;while(h!==s);return a},n.Clipper.prototype.BuildResult=function(s){n.Clear(s);for(var a=0,h=this.m_PolyOuts.length;a<h;a++){var p=this.m_PolyOuts[a];if(p.Pts!==null){var x=p.Pts.Prev,I=this.PointCount(x);if(!(I<2)){for(var B=new Array(I),Q=0;Q<I;Q++)B[Q]=x.Pt,x=x.Prev;s.push(B)}}}},n.Clipper.prototype.BuildResult2=function(s){s.Clear();for(var a=0,h=this.m_PolyOuts.length;a<h;a++){var p=this.m_PolyOuts[a],x=this.PointCount(p.Pts);if(!(p.IsOpen&&x<2||!p.IsOpen&&x<3)){this.FixHoleLinkage(p);var I=new n.PolyNode;s.m_AllPolys.push(I),p.PolyNode=I,I.m_polygon.length=x;for(var B=p.Pts.Prev,Q=0;Q<x;Q++)I.m_polygon[Q]=B.Pt,B=B.Prev}}for(var a=0,h=this.m_PolyOuts.length;a<h;a++){var p=this.m_PolyOuts[a];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,s.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):s.AddChild(p.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(s){for(var a=s.Pts,h=a.Prev;a!==h;)if(a=a.Next,n.IntPoint.op_Equality(a.Pt,a.Prev.Pt)){a===h&&(h=a.Prev);var p=a.Prev;p.Next=a.Next,a.Next.Prev=p,a=p}a===a.Prev&&(s.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(s){var a=null;s.BottomPt=null;for(var h=s.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(h.Prev===h||h.Prev===h.Next){s.Pts=null;return}if(n.IntPoint.op_Equality(h.Pt,h.Next.Pt)||n.IntPoint.op_Equality(h.Pt,h.Prev.Pt)||n.ClipperBase.SlopesEqual4(h.Prev.Pt,h.Pt,h.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(h.Prev.Pt,h.Pt,h.Next.Pt)))a=null,h.Prev.Next=h.Next,h.Next.Prev=h.Prev,h=h.Prev;else{if(h===a)break;a===null&&(a=h),h=h.Next}}s.Pts=h},n.Clipper.prototype.DupOutPt=function(s,a){var h=new n.OutPt;return h.Pt.X=s.Pt.X,h.Pt.Y=s.Pt.Y,n.use_xyz&&(h.Pt.Z=s.Pt.Z),h.Idx=s.Idx,a?(h.Next=s.Next,h.Prev=s,s.Next.Prev=h,s.Next=h):(h.Prev=s.Prev,h.Next=s,s.Prev.Next=h,s.Prev=h),h},n.Clipper.prototype.GetOverlap=function(s,a,h,p,x){return s<a?h<p?(x.Left=Math.max(s,h),x.Right=Math.min(a,p)):(x.Left=Math.max(s,p),x.Right=Math.min(a,h)):h<p?(x.Left=Math.max(a,h),x.Right=Math.min(s,p)):(x.Left=Math.max(a,p),x.Right=Math.min(s,h)),x.Left<x.Right},n.Clipper.prototype.JoinHorz=function(s,a,h,p,x,I){var B=s.Pt.X>a.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,Q=h.Pt.X>p.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(B===Q)return!1;if(B===n.Direction.dLeftToRight){for(;s.Next.Pt.X<=x.X&&s.Next.Pt.X>=s.Pt.X&&s.Next.Pt.Y===x.Y;)s=s.Next;I&&s.Pt.X!==x.X&&(s=s.Next),a=this.DupOutPt(s,!I),n.IntPoint.op_Inequality(a.Pt,x)&&(s=a,s.Pt.X=x.X,s.Pt.Y=x.Y,n.use_xyz&&(s.Pt.Z=x.Z),a=this.DupOutPt(s,!I))}else{for(;s.Next.Pt.X>=x.X&&s.Next.Pt.X<=s.Pt.X&&s.Next.Pt.Y===x.Y;)s=s.Next;!I&&s.Pt.X!==x.X&&(s=s.Next),a=this.DupOutPt(s,I),n.IntPoint.op_Inequality(a.Pt,x)&&(s=a,s.Pt.X=x.X,s.Pt.Y=x.Y,n.use_xyz&&(s.Pt.Z=x.Z),a=this.DupOutPt(s,I))}if(Q===n.Direction.dLeftToRight){for(;h.Next.Pt.X<=x.X&&h.Next.Pt.X>=h.Pt.X&&h.Next.Pt.Y===x.Y;)h=h.Next;I&&h.Pt.X!==x.X&&(h=h.Next),p=this.DupOutPt(h,!I),n.IntPoint.op_Inequality(p.Pt,x)&&(h=p,h.Pt.X=x.X,h.Pt.Y=x.Y,n.use_xyz&&(h.Pt.Z=x.Z),p=this.DupOutPt(h,!I))}else{for(;h.Next.Pt.X>=x.X&&h.Next.Pt.X<=h.Pt.X&&h.Next.Pt.Y===x.Y;)h=h.Next;!I&&h.Pt.X!==x.X&&(h=h.Next),p=this.DupOutPt(h,I),n.IntPoint.op_Inequality(p.Pt,x)&&(h=p,h.Pt.X=x.X,h.Pt.Y=x.Y,n.use_xyz&&(h.Pt.Z=x.Z),p=this.DupOutPt(h,I))}return B===n.Direction.dLeftToRight===I?(s.Prev=h,h.Next=s,a.Next=p,p.Prev=a):(s.Next=h,h.Prev=s,a.Prev=p,p.Next=a),!0},n.Clipper.prototype.JoinPoints=function(s,a,h){var p=s.OutPt1,x=new n.OutPt,I=s.OutPt2,B=new n.OutPt,Q=s.OutPt1.Pt.Y===s.OffPt.Y;if(Q&&n.IntPoint.op_Equality(s.OffPt,s.OutPt1.Pt)&&n.IntPoint.op_Equality(s.OffPt,s.OutPt2.Pt)){if(a!==h)return!1;for(x=s.OutPt1.Next;x!==p&&n.IntPoint.op_Equality(x.Pt,s.OffPt);)x=x.Next;var et=x.Pt.Y>s.OffPt.Y;for(B=s.OutPt2.Next;B!==I&&n.IntPoint.op_Equality(B.Pt,s.OffPt);)B=B.Next;var pt=B.Pt.Y>s.OffPt.Y;return et===pt?!1:et?(x=this.DupOutPt(p,!1),B=this.DupOutPt(I,!0),p.Prev=I,I.Next=p,x.Next=B,B.Prev=x,s.OutPt1=p,s.OutPt2=x,!0):(x=this.DupOutPt(p,!0),B=this.DupOutPt(I,!1),p.Next=I,I.Prev=p,x.Prev=B,B.Next=x,s.OutPt1=p,s.OutPt2=x,!0)}else if(Q){for(x=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==x&&p.Prev!==I;)p=p.Prev;for(;x.Next.Pt.Y===x.Pt.Y&&x.Next!==p&&x.Next!==I;)x=x.Next;if(x.Next===p||x.Next===I)return!1;for(B=I;I.Prev.Pt.Y===I.Pt.Y&&I.Prev!==B&&I.Prev!==x;)I=I.Prev;for(;B.Next.Pt.Y===B.Pt.Y&&B.Next!==I&&B.Next!==p;)B=B.Next;if(B.Next===I||B.Next===p)return!1;var Nt={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,x.Pt.X,I.Pt.X,B.Pt.X,Nt))return!1;var It=Nt.Left,Ft=Nt.Right,le=new n.IntPoint0,xe;return p.Pt.X>=It&&p.Pt.X<=Ft?(le.X=p.Pt.X,le.Y=p.Pt.Y,n.use_xyz&&(le.Z=p.Pt.Z),xe=p.Pt.X>x.Pt.X):I.Pt.X>=It&&I.Pt.X<=Ft?(le.X=I.Pt.X,le.Y=I.Pt.Y,n.use_xyz&&(le.Z=I.Pt.Z),xe=I.Pt.X>B.Pt.X):x.Pt.X>=It&&x.Pt.X<=Ft?(le.X=x.Pt.X,le.Y=x.Pt.Y,n.use_xyz&&(le.Z=x.Pt.Z),xe=x.Pt.X>p.Pt.X):(le.X=B.Pt.X,le.Y=B.Pt.Y,n.use_xyz&&(le.Z=B.Pt.Z),xe=B.Pt.X>I.Pt.X),s.OutPt1=p,s.OutPt2=I,this.JoinHorz(p,x,I,B,le,xe)}else{for(x=p.Next;n.IntPoint.op_Equality(x.Pt,p.Pt)&&x!==p;)x=x.Next;var Ae=x.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,x.Pt,s.OffPt,this.m_UseFullRange);if(Ae){for(x=p.Prev;n.IntPoint.op_Equality(x.Pt,p.Pt)&&x!==p;)x=x.Prev;if(x.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,x.Pt,s.OffPt,this.m_UseFullRange))return!1}for(B=I.Next;n.IntPoint.op_Equality(B.Pt,I.Pt)&&B!==I;)B=B.Next;var He=B.Pt.Y>I.Pt.Y||!n.ClipperBase.SlopesEqual4(I.Pt,B.Pt,s.OffPt,this.m_UseFullRange);if(He){for(B=I.Prev;n.IntPoint.op_Equality(B.Pt,I.Pt)&&B!==I;)B=B.Prev;if(B.Pt.Y>I.Pt.Y||!n.ClipperBase.SlopesEqual4(I.Pt,B.Pt,s.OffPt,this.m_UseFullRange))return!1}return x===p||B===I||x===B||a===h&&Ae===He?!1:Ae?(x=this.DupOutPt(p,!1),B=this.DupOutPt(I,!0),p.Prev=I,I.Next=p,x.Next=B,B.Prev=x,s.OutPt1=p,s.OutPt2=x,!0):(x=this.DupOutPt(p,!0),B=this.DupOutPt(I,!1),p.Next=I,I.Prev=p,x.Prev=B,B.Next=x,s.OutPt1=p,s.OutPt2=x,!0)}},n.Clipper.GetBounds=function(s){for(var a=0,h=s.length;a<h&&s[a].length===0;)a++;if(a===h)return new n.IntRect(0,0,0,0);var p=new n.IntRect;for(p.left=s[a][0].X,p.right=p.left,p.top=s[a][0].Y,p.bottom=p.top;a<h;a++)for(var x=0,I=s[a].length;x<I;x++)s[a][x].X<p.left?p.left=s[a][x].X:s[a][x].X>p.right&&(p.right=s[a][x].X),s[a][x].Y<p.top?p.top=s[a][x].Y:s[a][x].Y>p.bottom&&(p.bottom=s[a][x].Y);return p},n.Clipper.prototype.GetBounds2=function(s){var a=s,h=new n.IntRect;for(h.left=s.Pt.X,h.right=s.Pt.X,h.top=s.Pt.Y,h.bottom=s.Pt.Y,s=s.Next;s!==a;)s.Pt.X<h.left&&(h.left=s.Pt.X),s.Pt.X>h.right&&(h.right=s.Pt.X),s.Pt.Y<h.top&&(h.top=s.Pt.Y),s.Pt.Y>h.bottom&&(h.bottom=s.Pt.Y),s=s.Next;return h},n.Clipper.PointInPolygon=function(s,a){var h=0,p=a.length;if(p<3)return 0;for(var x=a[0],I=1;I<=p;++I){var B=I===p?a[0]:a[I];if(B.Y===s.Y&&(B.X===s.X||x.Y===s.Y&&B.X>s.X==x.X<s.X))return-1;if(x.Y<s.Y!=B.Y<s.Y){if(x.X>=s.X)if(B.X>s.X)h=1-h;else{var Q=(x.X-s.X)*(B.Y-s.Y)-(B.X-s.X)*(x.Y-s.Y);if(Q===0)return-1;Q>0==B.Y>x.Y&&(h=1-h)}else if(B.X>s.X){var Q=(x.X-s.X)*(B.Y-s.Y)-(B.X-s.X)*(x.Y-s.Y);if(Q===0)return-1;Q>0==B.Y>x.Y&&(h=1-h)}}x=B}return h},n.Clipper.prototype.PointInPolygon=function(s,a){var h=0,p=a,x=s.X,I=s.Y,B=a.Pt.X,Q=a.Pt.Y;do{a=a.Next;var et=a.Pt.X,pt=a.Pt.Y;if(pt===I&&(et===x||Q===I&&et>x==B<x))return-1;if(Q<I!=pt<I){if(B>=x)if(et>x)h=1-h;else{var Nt=(B-x)*(pt-I)-(et-x)*(Q-I);if(Nt===0)return-1;Nt>0==pt>Q&&(h=1-h)}else if(et>x){var Nt=(B-x)*(pt-I)-(et-x)*(Q-I);if(Nt===0)return-1;Nt>0==pt>Q&&(h=1-h)}}B=et,Q=pt}while(p!==a);return h},n.Clipper.prototype.Poly2ContainsPoly1=function(s,a){var h=s;do{var p=this.PointInPolygon(h.Pt,a);if(p>=0)return p>0;h=h.Next}while(h!==s);return!0},n.Clipper.prototype.FixupFirstLefts1=function(s,a){for(var h,p,x=0,I=this.m_PolyOuts.length;x<I;x++)h=this.m_PolyOuts[x],p=n.Clipper.ParseFirstLeft(h.FirstLeft),h.Pts!==null&&p===s&&this.Poly2ContainsPoly1(h.Pts,a.Pts)&&(h.FirstLeft=a)},n.Clipper.prototype.FixupFirstLefts2=function(s,a){for(var h=a.FirstLeft,p,x,I=0,B=this.m_PolyOuts.length;I<B;I++)p=this.m_PolyOuts[I],!(p.Pts===null||p===a||p===s)&&(x=n.Clipper.ParseFirstLeft(p.FirstLeft),!(x!==h&&x!==s&&x!==a)&&(this.Poly2ContainsPoly1(p.Pts,s.Pts)?p.FirstLeft=s:this.Poly2ContainsPoly1(p.Pts,a.Pts)?p.FirstLeft=a:(p.FirstLeft===s||p.FirstLeft===a)&&(p.FirstLeft=h)))},n.Clipper.prototype.FixupFirstLefts3=function(s,a){for(var h,p,x=0,I=this.m_PolyOuts.length;x<I;x++)h=this.m_PolyOuts[x],p=n.Clipper.ParseFirstLeft(h.FirstLeft),h.Pts!==null&&p===s&&(h.FirstLeft=a)},n.Clipper.ParseFirstLeft=function(s){for(;s!==null&&s.Pts===null;)s=s.FirstLeft;return s},n.Clipper.prototype.JoinCommonEdges=function(){for(var s=0,a=this.m_Joins.length;s<a;s++){var h=this.m_Joins[s],p=this.GetOutRec(h.OutPt1.Idx),x=this.GetOutRec(h.OutPt2.Idx);if(!(p.Pts===null||x.Pts===null)&&!(p.IsOpen||x.IsOpen)){var I;p===x?I=p:this.OutRec1RightOfOutRec2(p,x)?I=x:this.OutRec1RightOfOutRec2(x,p)?I=p:I=this.GetLowermostRec(p,x),this.JoinPoints(h,p,x)&&(p===x?(p.Pts=h.OutPt1,p.BottomPt=null,x=this.CreateOutRec(),x.Pts=h.OutPt2,this.UpdateOutPtIdxs(x),this.Poly2ContainsPoly1(x.Pts,p.Pts)?(x.IsHole=!p.IsHole,x.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(x,p),(x.IsHole^this.ReverseSolution)==this.Area$1(x)>0&&this.ReversePolyPtLinks(x.Pts)):this.Poly2ContainsPoly1(p.Pts,x.Pts)?(x.IsHole=p.IsHole,p.IsHole=!x.IsHole,x.FirstLeft=p.FirstLeft,p.FirstLeft=x,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,x),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(x.IsHole=p.IsHole,x.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,x))):(x.Pts=null,x.BottomPt=null,x.Idx=p.Idx,p.IsHole=I.IsHole,I===x&&(p.FirstLeft=x.FirstLeft),x.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(x,p)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(s){var a=s.Pts;do a.Idx=s.Idx,a=a.Prev;while(a!==s.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var s=0;s<this.m_PolyOuts.length;){var a=this.m_PolyOuts[s++],h=a.Pts;if(!(h===null||a.IsOpen))do{for(var p=h.Next;p!==a.Pts;){if(n.IntPoint.op_Equality(h.Pt,p.Pt)&&p.Next!==h&&p.Prev!==h){var x=h.Prev,I=p.Prev;h.Prev=I,I.Next=h,p.Prev=x,x.Next=p,a.Pts=h;var B=this.CreateOutRec();B.Pts=p,this.UpdateOutPtIdxs(B),this.Poly2ContainsPoly1(B.Pts,a.Pts)?(B.IsHole=!a.IsHole,B.FirstLeft=a,this.m_UsingPolyTree&&this.FixupFirstLefts2(B,a)):this.Poly2ContainsPoly1(a.Pts,B.Pts)?(B.IsHole=a.IsHole,a.IsHole=!B.IsHole,B.FirstLeft=a.FirstLeft,a.FirstLeft=B,this.m_UsingPolyTree&&this.FixupFirstLefts2(a,B)):(B.IsHole=a.IsHole,B.FirstLeft=a.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(a,B)),p=h}p=p.Next}h=h.Next}while(h!==a.Pts)}},n.Clipper.Area=function(s){if(!Array.isArray(s))return 0;var a=s.length;if(a<3)return 0;for(var h=0,p=0,x=a-1;p<a;++p)h+=(s[x].X+s[p].X)*(s[x].Y-s[p].Y),x=p;return-h*.5},n.Clipper.prototype.Area=function(s){var a=s;if(s===null)return 0;var h=0;do h=h+(s.Prev.Pt.X+s.Pt.X)*(s.Prev.Pt.Y-s.Pt.Y),s=s.Next;while(s!==a);return h*.5},n.Clipper.prototype.Area$1=function(s){return this.Area(s.Pts)},n.Clipper.SimplifyPolygon=function(s,a){var h=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPath(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,h,a,a),h},n.Clipper.SimplifyPolygons=function(s,a){typeof a>"u"&&(a=n.PolyFillType.pftEvenOdd);var h=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,h,a,a),h},n.Clipper.DistanceSqrd=function(s,a){var h=s.X-a.X,p=s.Y-a.Y;return h*h+p*p},n.Clipper.DistanceFromLineSqrd=function(s,a,h){var p=a.Y-h.Y,x=h.X-a.X,I=p*a.X+x*a.Y;return I=p*s.X+x*s.Y-I,I*I/(p*p+x*x)},n.Clipper.SlopesNearCollinear=function(s,a,h,p){return Math.abs(s.X-a.X)>Math.abs(s.Y-a.Y)?s.X>a.X==s.X<h.X?n.Clipper.DistanceFromLineSqrd(s,a,h)<p:a.X>s.X==a.X<h.X?n.Clipper.DistanceFromLineSqrd(a,s,h)<p:n.Clipper.DistanceFromLineSqrd(h,s,a)<p:s.Y>a.Y==s.Y<h.Y?n.Clipper.DistanceFromLineSqrd(s,a,h)<p:a.Y>s.Y==a.Y<h.Y?n.Clipper.DistanceFromLineSqrd(a,s,h)<p:n.Clipper.DistanceFromLineSqrd(h,s,a)<p},n.Clipper.PointsAreClose=function(s,a,h){var p=s.X-a.X,x=s.Y-a.Y;return p*p+x*x<=h},n.Clipper.ExcludeOp=function(s){var a=s.Prev;return a.Next=s.Next,s.Next.Prev=a,a.Idx=0,a},n.Clipper.CleanPolygon=function(s,a){typeof a>"u"&&(a=1.415);var h=s.length;if(h===0)return new Array;for(var p=new Array(h),x=0;x<h;++x)p[x]=new n.OutPt;for(var x=0;x<h;++x)p[x].Pt=s[x],p[x].Next=p[(x+1)%h],p[x].Next.Prev=p[x],p[x].Idx=0;for(var I=a*a,B=p[0];B.Idx===0&&B.Next!==B.Prev;)n.Clipper.PointsAreClose(B.Pt,B.Prev.Pt,I)?(B=n.Clipper.ExcludeOp(B),h--):n.Clipper.PointsAreClose(B.Prev.Pt,B.Next.Pt,I)?(n.Clipper.ExcludeOp(B.Next),B=n.Clipper.ExcludeOp(B),h-=2):n.Clipper.SlopesNearCollinear(B.Prev.Pt,B.Pt,B.Next.Pt,I)?(B=n.Clipper.ExcludeOp(B),h--):(B.Idx=1,B=B.Next);h<3&&(h=0);for(var Q=new Array(h),x=0;x<h;++x)Q[x]=new n.IntPoint1(B.Pt),B=B.Next;return p=null,Q},n.Clipper.CleanPolygons=function(s,a){for(var h=new Array(s.length),p=0,x=s.length;p<x;p++)h[p]=n.Clipper.CleanPolygon(s[p],a);return h},n.Clipper.Minkowski=function(s,a,h,p){var x=p?1:0,I=s.length,B=a.length,Q=new Array;if(h)for(var et=0;et<B;et++){for(var pt=new Array(I),Nt=0,It=s.length,Ft=s[Nt];Nt<It;Nt++,Ft=s[Nt])pt[Nt]=new n.IntPoint2(a[et].X+Ft.X,a[et].Y+Ft.Y);Q.push(pt)}else for(var et=0;et<B;et++){for(var pt=new Array(I),Nt=0,It=s.length,Ft=s[Nt];Nt<It;Nt++,Ft=s[Nt])pt[Nt]=new n.IntPoint2(a[et].X-Ft.X,a[et].Y-Ft.Y);Q.push(pt)}for(var le=new Array,et=0;et<B-1+x;et++)for(var Nt=0;Nt<I;Nt++){var xe=new Array;xe.push(Q[et%B][Nt%I]),xe.push(Q[(et+1)%B][Nt%I]),xe.push(Q[(et+1)%B][(Nt+1)%I]),xe.push(Q[et%B][(Nt+1)%I]),n.Clipper.Orientation(xe)||xe.reverse(),le.push(xe)}return le},n.Clipper.MinkowskiSum=function(s,a,h){if(a[0]instanceof Array){for(var x=a,B=new n.Paths,I=new n.Clipper,Q=0;Q<x.length;++Q){var et=n.Clipper.Minkowski(s,x[Q],!0,h);if(I.AddPaths(et,n.PolyType.ptSubject,!0),h){var p=n.Clipper.TranslatePath(x[Q],s[0]);I.AddPath(p,n.PolyType.ptClip,!0)}}return I.Execute(n.ClipType.ctUnion,B,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),B}else{var p=a,x=n.Clipper.Minkowski(s,p,!0,h),I=new n.Clipper;return I.AddPaths(x,n.PolyType.ptSubject,!0),I.Execute(n.ClipType.ctUnion,x,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),x}},n.Clipper.TranslatePath=function(s,a){for(var h=new n.Path,p=0;p<s.length;p++)h.push(new n.IntPoint2(s[p].X+a.X,s[p].Y+a.Y));return h},n.Clipper.MinkowskiDiff=function(s,a){var h=n.Clipper.Minkowski(s,a,!1,!0),p=new n.Clipper;return p.AddPaths(h,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),h},n.Clipper.PolyTreeToPaths=function(s){var a=new Array;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntAny,a),a},n.Clipper.AddPolyNodeToPaths=function(s,a,h){var p=!0;switch(a){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:p=!s.IsOpen;break;default:break}s.m_polygon.length>0&&p&&h.push(s.m_polygon);for(var x=0,I=s.Childs(),B=I.length,Q=I[x];x<B;x++,Q=I[x])n.Clipper.AddPolyNodeToPaths(Q,a,h)},n.Clipper.OpenPathsFromPolyTree=function(s){for(var a=new n.Paths,h=0,p=s.ChildCount();h<p;h++)s.Childs()[h].IsOpen&&a.push(s.Childs()[h].m_polygon);return a},n.Clipper.ClosedPathsFromPolyTree=function(s){var a=new n.Paths;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntClosed,a),a},_e(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(s,a){typeof s>"u"&&(s=2),typeof a>"u"&&(a=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=s,this.ArcTolerance=a,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(s,a,h){var p=s.length-1;if(!(p<0)){var x=new n.PolyNode;if(x.m_jointype=a,x.m_endtype=h,h===n.EndType.etClosedLine||h===n.EndType.etClosedPolygon)for(;p>0&&n.IntPoint.op_Equality(s[0],s[p]);)p--;x.m_polygon.push(s[0]);for(var I=0,B=0,Q=1;Q<=p;Q++)n.IntPoint.op_Inequality(x.m_polygon[I],s[Q])&&(I++,x.m_polygon.push(s[Q]),(s[Q].Y>x.m_polygon[B].Y||s[Q].Y===x.m_polygon[B].Y&&s[Q].X<x.m_polygon[B].X)&&(B=I));if(!(h===n.EndType.etClosedPolygon&&I<2)&&(this.m_polyNodes.AddChild(x),h===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,B);else{var et=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(x.m_polygon[B].Y>et.Y||x.m_polygon[B].Y===et.Y&&x.m_polygon[B].X<et.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,B))}}},n.ClipperOffset.prototype.AddPaths=function(s,a,h){for(var p=0,x=s.length;p<x;p++)this.AddPath(s[p],a,h)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];(a.m_endtype===n.EndType.etClosedPolygon||a.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(a.m_polygon))&&a.m_polygon.reverse()}else for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];a.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(a.m_polygon)&&a.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(s,a){var h=a.X-s.X,p=a.Y-s.Y;if(h===0&&p===0)return new n.DoublePoint2(0,0);var x=1/Math.sqrt(h*h+p*p);return h*=x,p*=x,new n.DoublePoint2(p,-h)},n.ClipperOffset.prototype.DoOffset=function(s){if(this.m_destPolys=new Array,this.m_delta=s,n.ClipperBase.near_zero(s)){for(var a=0;a<this.m_polyNodes.ChildCount();a++){var h=this.m_polyNodes.Childs()[a];h.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(h.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(s)*n.ClipperOffset.def_arc_tolerance?p=Math.abs(s)*n.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var x=3.14159265358979/Math.acos(1-p/Math.abs(s));this.m_sin=Math.sin(n.ClipperOffset.two_pi/x),this.m_cos=Math.cos(n.ClipperOffset.two_pi/x),this.m_StepsPerRad=x/n.ClipperOffset.two_pi,s<0&&(this.m_sin=-this.m_sin);for(var a=0;a<this.m_polyNodes.ChildCount();a++){var h=this.m_polyNodes.Childs()[a];this.m_srcPoly=h.m_polygon;var I=this.m_srcPoly.length;if(!(I===0||s<=0&&(I<3||h.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,I===1){if(h.m_jointype===n.JoinType.jtRound)for(var B=1,Q=0,et=1;et<=x;et++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+B*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Q*s)));var pt=B;B=B*this.m_cos-this.m_sin*Q,Q=pt*this.m_sin+Q*this.m_cos}else for(var B=-1,Q=-1,et=0;et<4;++et)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+B*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Q*s))),B<0?B=1:Q<0?Q=1:B=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var et=0;et<I-1;et++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[et],this.m_srcPoly[et+1]));if(h.m_endtype===n.EndType.etClosedLine||h.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[I-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[I-2])),h.m_endtype===n.EndType.etClosedPolygon){for(var Nt=I-1,et=0;et<I;et++)Nt=this.OffsetPoint(et,Nt,h.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(h.m_endtype===n.EndType.etClosedLine){for(var Nt=I-1,et=0;et<I;et++)Nt=this.OffsetPoint(et,Nt,h.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var It=this.m_normals[I-1],et=I-1;et>0;et--)this.m_normals[et]=new n.DoublePoint2(-this.m_normals[et-1].X,-this.m_normals[et-1].Y);this.m_normals[0]=new n.DoublePoint2(-It.X,-It.Y),Nt=0;for(var et=I-1;et>=0;et--)Nt=this.OffsetPoint(et,Nt,h.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var Nt=0,et=1;et<I-1;++et)Nt=this.OffsetPoint(et,Nt,h.m_jointype);var Ft;if(h.m_endtype===n.EndType.etOpenButt){var et=I-1;Ft=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[et].X+this.m_normals[et].X*s),n.ClipperOffset.Round(this.m_srcPoly[et].Y+this.m_normals[et].Y*s)),this.m_destPoly.push(Ft),Ft=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[et].X-this.m_normals[et].X*s),n.ClipperOffset.Round(this.m_srcPoly[et].Y-this.m_normals[et].Y*s)),this.m_destPoly.push(Ft)}else{var et=I-1;Nt=I-2,this.m_sinA=0,this.m_normals[et]=new n.DoublePoint2(-this.m_normals[et].X,-this.m_normals[et].Y),h.m_endtype===n.EndType.etOpenSquare?this.DoSquare(et,Nt):this.DoRound(et,Nt)}for(var et=I-1;et>0;et--)this.m_normals[et]=new n.DoublePoint2(-this.m_normals[et-1].X,-this.m_normals[et-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),Nt=I-1;for(var et=Nt-1;et>0;--et)Nt=this.OffsetPoint(et,Nt,h.m_jointype);h.m_endtype===n.EndType.etOpenButt?(Ft=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*s)),this.m_destPoly.push(Ft),Ft=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*s)),this.m_destPoly.push(Ft)):(Nt=1,this.m_sinA=0,h.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var s=arguments,a=s[0]instanceof n.PolyTree;if(a){var h=s[0],p=s[1];h.Clear(),this.FixOrientations(),this.DoOffset(p);var x=new n.Clipper(0);if(x.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)x.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var I=n.Clipper.GetBounds(this.m_destPolys),B=new n.Path;if(B.push(new n.IntPoint2(I.left-10,I.bottom+10)),B.push(new n.IntPoint2(I.right+10,I.bottom+10)),B.push(new n.IntPoint2(I.right+10,I.top-10)),B.push(new n.IntPoint2(I.left-10,I.top-10)),x.AddPath(B,n.PolyType.ptSubject,!0),x.ReverseSolution=!0,x.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),h.ChildCount()===1&&h.Childs()[0].ChildCount()>0){var Q=h.Childs()[0];h.Childs()[0]=Q.Childs()[0],h.Childs()[0].m_Parent=h;for(var et=1;et<Q.ChildCount();et++)h.AddChild(Q.Childs()[et])}else h.Clear()}}else{var h=s[0],p=s[1];n.Clear(h),this.FixOrientations(),this.DoOffset(p);var x=new n.Clipper(0);if(x.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)x.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var I=n.Clipper.GetBounds(this.m_destPolys),B=new n.Path;B.push(new n.IntPoint2(I.left-10,I.bottom+10)),B.push(new n.IntPoint2(I.right+10,I.bottom+10)),B.push(new n.IntPoint2(I.right+10,I.top-10)),B.push(new n.IntPoint2(I.left-10,I.top-10)),x.AddPath(B,n.PolyType.ptSubject,!0),x.ReverseSolution=!0,x.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),h.length>0&&h.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(s,a,h){if(this.m_sinA=this.m_normals[a].X*this.m_normals[s].Y-this.m_normals[s].X*this.m_normals[a].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[a].X*this.m_normals[s].X+this.m_normals[s].Y*this.m_normals[a].Y;if(p>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),a}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[s])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)));else switch(h){case n.JoinType.jtMiter:{var x=1+(this.m_normals[s].X*this.m_normals[a].X+this.m_normals[s].Y*this.m_normals[a].Y);x>=this.m_miterLim?this.DoMiter(s,a,x):this.DoSquare(s,a);break}case n.JoinType.jtSquare:this.DoSquare(s,a);break;case n.JoinType.jtRound:this.DoRound(s,a);break}return a=s,a},n.ClipperOffset.prototype.DoSquare=function(s,a){var h=Math.tan(Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[a].X-this.m_normals[a].Y*h)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[a].Y+this.m_normals[a].X*h)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[s].X+this.m_normals[s].Y*h)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[s].Y-this.m_normals[s].X*h))))},n.ClipperOffset.prototype.DoMiter=function(s,a,h){var p=this.m_delta/h;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+(this.m_normals[a].X+this.m_normals[s].X)*p),n.ClipperOffset.Round(this.m_srcPoly[s].Y+(this.m_normals[a].Y+this.m_normals[s].Y)*p)))},n.ClipperOffset.prototype.DoRound=function(s,a){for(var h=Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y),p=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(h))),1),x=this.m_normals[a].X,I=this.m_normals[a].Y,B,Q=0;Q<p;++Q)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+x*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+I*this.m_delta))),B=x,x=x*this.m_cos-this.m_sin*I,I=B*this.m_sin+I*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)))},n.Error=function(s){try{throw new Error(s)}catch(a){alert(a.message)}},n.JS={},n.JS.AreaOfPolygon=function(s,a){return a||(a=1),n.Clipper.Area(s)/(a*a)},n.JS.AreaOfPolygons=function(s,a){a||(a=1);for(var h=0,p=0;p<s.length;p++)h+=n.Clipper.Area(s[p]);return h/(a*a)},n.JS.BoundsOfPath=function(s,a){return n.JS.BoundsOfPaths([s],a)},n.JS.BoundsOfPaths=function(s,a){a||(a=1);var h=n.Clipper.GetBounds(s);return h.left/=a,h.bottom/=a,h.right/=a,h.top/=a,h},n.JS.Clean=function(p,a){if(!(p instanceof Array))return[];var h=p[0]instanceof Array,p=n.JS.Clone(p);if(typeof a!="number"||a===null)return n.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||a<0)return p;h||(p=[p]);for(var x=p.length,I,B,Q,et,pt,Nt,It,Ft=[],le=0;le<x;le++)if(B=p[le],I=B.length,I!==0){if(I<3){Q=B,Ft.push(Q);continue}for(Q=B,et=a*a,pt=B[0],Nt=1,It=1;It<I;It++)(B[It].X-pt.X)*(B[It].X-pt.X)+(B[It].Y-pt.Y)*(B[It].Y-pt.Y)<=et||(Q[Nt]=B[It],pt=B[It],Nt++);pt=B[Nt-1],(B[0].X-pt.X)*(B[0].X-pt.X)+(B[0].Y-pt.Y)*(B[0].Y-pt.Y)<=et&&Nt--,Nt<I&&Q.splice(Nt,I-Nt),Q.length&&Ft.push(Q)}return!h&&Ft.length?Ft=Ft[0]:!h&&Ft.length===0?Ft=[]:h&&Ft.length===0&&(Ft=[[]]),Ft},n.JS.Clone=function(s){if(!(s instanceof Array))return[];if(s.length===0)return[];if(s.length===1&&s[0].length===0)return[[]];var a=s[0]instanceof Array;a||(s=[s]);var h=s.length,p,x,I,B,Q=new Array(h);for(x=0;x<h;x++){for(p=s[x].length,B=new Array(p),I=0;I<p;I++)B[I]={X:s[x][I].X,Y:s[x][I].Y};Q[x]=B}return a||(Q=Q[0]),Q},n.JS.Lighten=function(s,a){if(!(s instanceof Array))return[];if(typeof a!="number"||a===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(s);if(s.length===0||s.length===1&&s[0].length===0||a<0)return n.JS.Clone(s);var h=s[0]instanceof Array;h||(s=[s]);var p,x,I,B,Q,et,pt,Nt,It,Ft,le,xe,Ae,He,xn,Zn,Zi,Wr=s.length,qo=a*a,Ii=[];for(p=0;p<Wr;p++)if(I=s[p],et=I.length,et!==0){for(B=0;B<1e6;B++){for(Q=[],et=I.length,I[et-1].X!==I[0].X||I[et-1].Y!==I[0].Y?(xe=1,I.push({X:I[0].X,Y:I[0].Y}),et=I.length):xe=0,le=[],x=0;x<et-2;x++)pt=I[x],It=I[x+1],Nt=I[x+2],Zn=pt.X,Zi=pt.Y,Ae=Nt.X-Zn,He=Nt.Y-Zi,(Ae!==0||He!==0)&&(xn=((It.X-Zn)*Ae+(It.Y-Zi)*He)/(Ae*Ae+He*He),xn>1?(Zn=Nt.X,Zi=Nt.Y):xn>0&&(Zn+=Ae*xn,Zi+=He*xn)),Ae=It.X-Zn,He=It.Y-Zi,Ft=Ae*Ae+He*He,Ft<=qo&&(le[x+1]=1,x++);for(Q.push({X:I[0].X,Y:I[0].Y}),x=1;x<et-1;x++)le[x]||Q.push({X:I[x].X,Y:I[x].Y});if(Q.push({X:I[et-1].X,Y:I[et-1].Y}),xe&&I.pop(),le.length)I=Q;else break}et=Q.length,Q[et-1].X===Q[0].X&&Q[et-1].Y===Q[0].Y&&Q.pop(),Q.length>2&&Ii.push(Q)}return h||(Ii=Ii[0]),typeof Ii>"u"&&(Ii=[]),Ii},n.JS.PerimeterOfPath=function(s,a,h){if(typeof s>"u")return 0;var p=Math.sqrt,x=0,I,B,Q=0,et=0,pt=0,Nt=0,It=s.length;if(It<2)return 0;for(a&&(s[It]=s[0],It++);--It;)I=s[It],Q=I.X,et=I.Y,B=s[It-1],pt=B.X,Nt=B.Y,x+=p((Q-pt)*(Q-pt)+(et-Nt)*(et-Nt));return a&&s.pop(),x/h},n.JS.PerimeterOfPaths=function(s,a,h){h||(h=1);for(var p=0,x=0;x<s.length;x++)p+=n.JS.PerimeterOfPath(s[x],a,h);return p},n.JS.ScaleDownPath=function(s,a){var h,p;for(a||(a=1),h=s.length;h--;)p=s[h],p.X=p.X/a,p.Y=p.Y/a},n.JS.ScaleDownPaths=function(s,a){var h,p,x;for(a||(a=1),h=s.length;h--;)for(p=s[h].length;p--;)x=s[h][p],x.X=x.X/a,x.Y=x.Y/a},n.JS.ScaleUpPath=function(s,a){var h,p,x=Math.round;for(a||(a=1),h=s.length;h--;)p=s[h],p.X=x(p.X*a),p.Y=x(p.Y*a)},n.JS.ScaleUpPaths=function(s,a){var h,p,x,I=Math.round;for(a||(a=1),h=s.length;h--;)for(p=s[h].length;p--;)x=s[h][p],x.X=I(x.X*a),x.Y=I(x.Y*a)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(s,a){var h=new n.ExPolygon;h.outer=s.Contour();var p=s.Childs(),x=p.length;h.holes=new Array(x);var I,B,Q,et,pt,Nt;for(Q=0;Q<x;Q++)for(I=p[Q],h.holes[Q]=I.Contour(),et=0,pt=I.Childs(),Nt=pt.length;et<Nt;et++)B=pt[et],n.JS.AddOuterPolyNodeToExPolygons(B,a);a.push(h)},n.JS.ExPolygonsToPaths=function(s){var a,h,p,x,I=new n.Paths;for(a=0,p=s.length;a<p;a++)for(I.push(s[a].outer),h=0,x=s[a].holes.length;h<x;h++)I.push(s[a].holes[h]);return I},n.JS.PolyTreeToExPolygons=function(s){var a=new n.ExPolygons,h,p,x,I;for(p=0,x=s.Childs(),I=x.length;p<I;p++)h=x[p],n.JS.AddOuterPolyNodeToExPolygons(h,a);return a}})()});function ta(n,t,e,i=Je.default.PolyFillType.pftNonZero){let r=new Je.default.Clipper;r.AddPaths(Ws(t),Je.default.PolyType.ptSubject,!0),e&&r.AddPaths(Ws(e),Je.default.PolyType.ptClip,!0);let o=new Je.default.Paths;return r.Execute(n,o,i,i),Qo(o)}function Xu(n,t=256){let e=n.length>t?ag(n):n;for(;e.length>t;){let i=[];for(let o=0;o<e.length;o+=t)i.push(Jn(e.slice(o,o+t)));let r=i.flat();if(i.length===1)return r;if(r.length>e.length/2)return Jn(r);e=r}return Jn(e)}function ag(n){let t=1/0,e=1/0,i=-1/0,r=-1/0,o=n.map(d=>{let g=0,v=0;for(let[b,w]of d)g+=b,v+=w;let _=[g/d.length,v/d.length];return t=Math.min(t,_[0]),e=Math.min(e,_[1]),i=Math.max(i,_[0]),r=Math.max(r,_[1]),_}),l=65535/Math.max(i-t,r-e,1e-9),c=d=>(d=(d|d<<8)&16711935,d=(d|d<<4)&252645135,d=(d|d<<2)&858993459,(d|d<<1)&1431655765),u=o.map(([d,g])=>(c(Math.round((d-t)*l))|c(Math.round((g-e)*l))<<1)>>>0);return n.map((d,g)=>g).sort((d,g)=>u[d]-u[g]).map(d=>n[d])}function Re(n,t,e=Gu/Li){return n.length?(t<-2*Ic&&(n=Hu(n,-Ic,e),t+=Ic),Hu(n,t,e)):[]}function Hu(n,t,e){if(!n.length)return[];let i=new Je.default.ClipperOffset(2,e*Li);i.AddPaths(Ws(n),Je.default.JoinType.jtRound,Je.default.EndType.etClosedPolygon);let r=new Je.default.Paths;return i.Execute(r,t*Li),Qo(r)}function Wu(n,t){if(!n.length)return[];let e=new Je.default.ClipperOffset(4,Gu);e.AddPaths(Ws(n),Je.default.JoinType.jtMiter,Je.default.EndType.etClosedPolygon);let i=new Je.default.Paths;return e.Execute(i,t*Li),Qo(i)}function Kn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function Yu(n){let t=0;for(let e=0;e<n.length;e++){let i=n[e],r=n[(e+1)%n.length];t+=Math.hypot(r[0]-i[0],r[1]-i[1])}return t}function Di(n){let t=1/0,e=1/0,i=-1/0,r=-1/0;for(let o of n)for(let[l,c]of o)l<t&&(t=l),l>i&&(i=l),c<e&&(e=c),c>r&&(r=c);return{minX:t,minY:e,maxX:i,maxY:r}}function Bn(n){if(!n.length)return[];let t=new Je.default.Clipper;t.AddPaths(Ws(n),Je.default.PolyType.ptSubject,!0);let e=new Je.default.PolyTree;t.Execute(Je.default.ClipType.ctUnion,e,Je.default.PolyFillType.pftNonZero,Je.default.PolyFillType.pftNonZero);let i=[],r=o=>{for(let l of o.Childs()){if(l.IsHole()){r(l);continue}let c=l.Childs().map(u=>u.Contour());i.push(Qo([l.Contour(),...c]));for(let u of l.Childs())r(u)}};return r(e),i}function $s([n,t],e){let i=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[l,c]=e[r],[u,d]=e[o];c>t!=d>t&&n<(u-l)*(t-c)/(d-c)+l&&(i=!i)}return i}function fn(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(Kn(e))>t)}function lg(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let c=1;c<n.length;c++){let u=(n[c][0]-n[0][0])**2+(n[c][1]-n[0][1])**2;u>i&&(i=u,e=c)}let r=c=>{let u=new Uint8Array(c.length);u[0]=u[c.length-1]=1;let d=[[0,c.length-1]];for(;d.length;){let[g,v]=d.pop(),[_,b]=c[g],[w,E]=c[v],M=Math.hypot(w-_,E-b)||1e-12,y=-1,L=t;for(let z=g+1;z<v;z++){let A=Math.abs((w-_)*(b-c[z][1])-(_-c[z][0])*(E-b))/M;A>L&&(L=A,y=z)}y>0&&(u[y]=1,d.push([g,y],[y,v]))}return c.filter((g,v)=>u[v])},o=r(n.slice(0,e+1)),l=r([...n.slice(e),n[0]]);return[...o,...l.slice(1,-1)]}var Je,Li,Gu,Ws,Qo,Ys,Jn,jn,Ni,Ic,nn,Oi,qs=gn(()=>{Je=Uu(Vu(),1),Li=1e3,Gu=.01*Li,Ws=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*Li),Y:Math.round(i*Li)}))),Qo=n=>n.map(t=>t.map(e=>[e.X/Li,e.Y/Li]));Ys=n=>ta(Je.default.ClipType.ctUnion,n,null,Je.default.PolyFillType.pftEvenOdd),Jn=n=>ta(Je.default.ClipType.ctUnion,n,null);jn=(n,t)=>ta(Je.default.ClipType.ctDifference,n,t),Ni=(n,t)=>ta(Je.default.ClipType.ctIntersection,n,t);Ic=.005;nn=n=>n.reduce((t,e)=>t+Kn(e),0);Oi=(n,t)=>n.map(e=>lg(e,t)).filter(e=>e.length>=3)});function Zu(n){let t=[],e=[],i=[],r=[];for(let o of n.meshes||[]){let l=t.length/3,c=e.length/3,u=o.attributes.position.array;for(let g=0;g<u.length;g++)t.push(u[g]);let d=o.index.array;for(let g=0;g<d.length;g++)e.push(d[g]+l);for(let g of o.brep_faces||[])i.push({first:g.first+c,last:g.last+c});o.name&&r.push(o.name)}return{positions:Float64Array.from(t),indices:Uint32Array.from(e),faces:i,solids:(n.meshes||[]).length,names:r}}function qr(n){let t=n.positions,e=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]<e[o]&&(e[o]=t[r+o]),t[r+o]>i[o]&&(i[o]=t[r+o]);return{min:e,max:i,size:[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}}function Lc(n,t){let e=n.positions,i=n.indices,r=i[t*3]*3,o=i[t*3+1]*3,l=i[t*3+2]*3,c=e[o]-e[r],u=e[o+1]-e[r+1],d=e[o+2]-e[r+2],g=e[l]-e[r],v=e[l+1]-e[r+1],_=e[l+2]-e[r+2],b=u*_-d*v,w=d*g-c*_,E=c*v-u*g,M=Math.hypot(b,w,E);return M>0?[b/M,w/M,E/M]:[0,0,0]}function cg(n){let[t,e,i]=n;if(i>.999999)return[1,0,0,0,1,0,0,0,1];if(i<-.999999)return[1,0,0,0,-1,0,0,0,-1];let r=e,o=-t,l=Math.hypot(r,o);r/=l,o/=l;let c=i,u=l,d=1-c;return[d*r*r+c,d*r*o,o*u,d*r*o,d*o*o+c,-r*u,-o*u,r*u,c]}function Nc(n,t){let e=n.positions,i=new Float64Array(e.length);for(let l=0;l<e.length;l+=3){let c=e[l],u=e[l+1],d=e[l+2];i[l]=t[0]*c+t[1]*u+t[2]*d,i[l+1]=t[3]*c+t[4]*u+t[5]*d,i[l+2]=t[6]*c+t[7]*u+t[8]*d}let r={positions:i,indices:n.indices,faces:n.faces},{min:o}=qr(r);for(let l=0;l<i.length;l+=3)i[l]-=o[0],i[l+1]-=o[1],i[l+2]-=o[2];for(let l=0;l<i.length;l++)i[l]=Math.round(i[l]*1e6)/1e6;return r}function Ju(n,[t,e,i]){if(t===1&&e===1&&i===1)return n;if(!(t>0&&e>0&&i>0))throw new Error("A size must be more than 0.");let r=n.positions,o=new Float64Array(r.length);for(let l=0;l<r.length;l+=3)o[l]=r[l]*t,o[l+1]=r[l+1]*e,o[l+2]=r[l+2]*i;return{...n,positions:o}}function xr(n,t=.001){let{max:e,size:i}=qr(n),r=e[2],o=new Map,l=0,c=0,u=0,d=n.positions,g=n.indices,v=g.length/3;for(let w=0;w<v;w++){let E=g[w*3]*3,M=g[w*3+1]*3,y=g[w*3+2]*3,L=Lc(n,w),z=d[M]-d[E],A=d[M+1]-d[E+1],R=d[M+2]-d[E+2],D=d[y]-d[E],H=d[y+1]-d[E+1],C=d[y+2]-d[E+2],k=Math.hypot(A*C-R*H,R*D-z*C,z*H-A*D)/2;u+=k;let G=(d[E+2]+d[M+2]+d[y+2])/3;if(L[2]>1-t){let Y=Math.round(G*1e3)/1e3;o.set(Y,(o.get(Y)||0)+k)}else L[2]<-(1-t)?G>t&&(l+=k):Math.abs(L[2])>t&&(L[2]<0?l+=k:c+=k)}let _=l>.001*u,b=_?ug(n):{inside:0,total:0};return{size:i,top:r,floors:[...o.keys()].sort((w,E)=>E-w),floorAreas:Object.fromEntries(o),undercut:_&&b.inside>$u,squareEdges:_&&b.inside<=$u,sloped:c>.001*u,undercutArea:l,slopedArea:c,slopedShare:u>0?c/u:0,missed:b.inside,missedTotal:b.total}}function hg(n){let t=n.positions,e=n.indices,i=0;for(let r=0;r<e.length;r+=3){let o=e[r]*3,l=e[r+1]*3,c=e[r+2]*3;i+=t[o]*(t[l+1]*t[c+2]-t[l+2]*t[c+1])-t[o+1]*(t[l]*t[c+2]-t[l+2]*t[c])+t[o+2]*(t[l]*t[c+1]-t[l+1]*t[c])}return Math.abs(i/6)}function ug(n){let{min:t,max:e}=qr(n),i=e[0]-t[0],r=e[1]-t[1],o=Math.max(.05,Math.sqrt(i*r/25e4)),l={x0:t[0],y0:t[1],cell:o,nx:Math.ceil(i/o)+1,ny:Math.ceil(r/o)+1},{h:c,mat:u}=fg(n,l),d=Jn(Bn(Ys(ia(n,t[2]+.01))).map(M=>M[0])),g=qu(d,l),v=qu(Re(d,Math.min(3,.15*Math.min(i,r))),l),_=0,b=0;for(let M=0;M<c.length;M++){if(!(c[M]>t[2]))continue;let y=Math.max(0,c[M]-t[2]-u[M]);_+=y,(g[M]||!v[M])&&(b+=y)}let w=hg(n),E=o*o;return w>0?{inside:b*E/w,total:_*E/w}:{inside:0,total:0}}function fg(n,t){let e=t.nx*t.ny,i=new Float32Array(e).fill(-1/0),r=new Float32Array(e),o=n.positions,l=n.indices;for(let c=0;c<l.length;c+=3){let u=l[c]*3,d=l[c+1]*3,g=l[c+2]*3,v=o[u],_=o[u+1],b=o[u+2],w=o[d],E=o[d+1],M=o[d+2],y=o[g],L=o[g+1],z=o[g+2],A=(E-L)*(v-y)+(y-w)*(_-L);if(Math.abs(A)<1e-12)continue;let R=(w-v)*(L-_)-(E-_)*(y-v)>0?1:-1,D=Math.max(0,Math.ceil((Math.min(v,w,y)-t.x0)/t.cell)),H=Math.min(t.nx-1,Math.floor((Math.max(v,w,y)-t.x0)/t.cell)),C=Math.max(0,Math.ceil((Math.min(_,E,L)-t.y0)/t.cell)),k=Math.min(t.ny-1,Math.floor((Math.max(_,E,L)-t.y0)/t.cell));for(let G=C;G<=k;G++)for(let Y=D;Y<=H;Y++){let j=t.x0+(Y+5e-4)*t.cell,q=t.y0+(G+7e-4)*t.cell,Z=((E-L)*(j-y)+(y-w)*(q-L))/A,K=((L-_)*(j-y)+(v-y)*(q-L))/A,ht=1-Z-K;if(Z<0||K<0||ht<0)continue;let gt=Z*b+K*M+ht*z,Et=G*t.nx+Y;gt>i[Et]&&(i[Et]=gt),r[Et]+=R*gt}}return{h:i,mat:r}}function qu(n,t){let e=new Uint8Array(t.nx*t.ny);for(let i=0;i<t.ny;i++){let r=t.y0+i*t.cell,o=[];for(let l of n)for(let c=0;c<l.length;c++){let[u,d]=l[c],[g,v]=l[(c+1)%l.length];d<=r!=v<=r&&o.push(u+(r-d)/(v-d)*(g-u))}o.sort((l,c)=>l-c);for(let l=0;l+1<o.length;l+=2){let c=Math.max(0,Math.ceil((o[l]-t.x0)/t.cell)),u=Math.min(t.nx-1,Math.floor((o[l+1]-t.x0)/t.cell));for(let d=c;d<=u;d++)e[i*t.nx+d]=1}}return e}function ia(n,t){let e=n.positions,i=n.indices,r=[],o=i.length/3;for(let l=0;l<o;l++){let c=[i[l*3]*3,i[l*3+1]*3,i[l*3+2]*3],u=[];for(let d=0;d<3;d++){let g=c[d],v=c[(d+1)%3],_=e[g+2]-t,b=e[v+2]-t;if(_<0!=b<0){let w=_/(_-b);u.push([e[g]+(e[v]-e[g])*w,e[g+1]+(e[v+1]-e[g+1])*w])}}u.length===2&&r.push(u)}return dg(r)}function dg(n){let t=([o,l])=>`${Math.round(o*1e4)},${Math.round(l*1e4)}`,e=new Map;n.forEach((o,l)=>{for(let c of[0,1]){let u=t(o[c]);e.has(u)||e.set(u,[]),e.get(u).push(l)}});let i=new Uint8Array(n.length),r=[];for(let o=0;o<n.length;o++){if(i[o])continue;i[o]=1;let l=[n[o][0],n[o][1]],c=t(n[o][0]),u=n[o][1];for(let d=0;d<n.length;d++){let g=t(u);if(g===c)break;let v=(e.get(g)||[]).find(b=>!i[b]);if(v===void 0)break;i[v]=1;let _=n[v];u=t(_[0])===g?_[1]:_[0],t(u)!==c&&l.push(u)}l.length>=3&&r.push(l)}return r}function ju(n){let t={};for(let o of Object.keys(Rc)){let l=xr(na(n,o));t[o]={reachable:!l.undercut,missed:l.missed,missedTotal:l.missedTotal,undercutArea:l.undercutArea,slopedArea:l.slopedArea,slopedShare:l.slopedShare,height:l.size[2]}}let e=Object.keys(Rc),i=e.some(o=>t[o].slopedShare>Dc),r=e.slice().sort((o,l)=>{let c=t[o],u=t[l];return(c.reachable===u.reachable?0:c.reachable?-1:1)||(i&&Math.abs(c.height-u.height)>1?c.height-u.height:0)||(Math.abs(c.missed-u.missed)>1e-4?c.missed-u.missed:0)||(Math.abs(c.missedTotal-u.missedTotal)>1e-4?c.missedTotal-u.missedTotal:0)||(Math.abs(c.slopedArea-u.slopedArea)>1e-6?c.slopedArea-u.slopedArea:0)||(Math.abs(c.height-u.height)>1e-6?c.height-u.height:0)||e.indexOf(o)-e.indexOf(l)});if(!r.some(o=>t[o].reachable))for(let o of e)t[o].reachable=!0;return{sides:t,best:r[0]}}var Rc,na,$u,Dc,Oc=gn(()=>{qs();Rc={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],left:[-1,0,0],right:[1,0,0]};na=(n,t)=>Nc(n,cg(typeof t=="string"?Rc[t]:t));$u=.05;Dc=.2});function vg(n){let t=new Set;for(let e of n){let i=e.match(/CONVERSION_BASED_UNIT\s*\(\s*'([^']*)'/);if(i){let l=_g[i[1].trim().toUpperCase()];if(!l)return null;t.add(l);continue}let r=e.match(/SI_UNIT\s*\(\s*(\$|\.(\w+)\.)\s*,\s*\.METRE\.\s*\)/);if(!r)return null;let o=r[2]?gg[r[2]]:1e3;if(!o)return null;t.add(o)}return t.size===1?[...t][0]:null}function*yg(n){let t=n.indexOf("DATA;");if(t<0)return;let e=t+5,i=e,r=!1;for(;e<n.length;e++){let o=n.charCodeAt(e);if(o===39)r=!r;else if(o===59&&!r){let l=n.slice(i,e).trim();if(i=e+1,l==="ENDSEC")return;let c=l.match(/^#(\d+)\s*=\s*([\s\S]*)$/);c&&(yield[+c[1],c[2]])}}}function xg(n){let t=[0,0,0];for(let e=0;e<n.length;e++){let i=n[e],r=n[(e+1)%n.length];t[0]+=(i[1]-r[1])*(i[2]+r[2]),t[1]+=(i[2]-r[2])*(i[0]+r[0]),t[2]+=(i[0]-r[0])*(i[1]+r[1])}for(let e=0;e<n.length;e++){let i=n[e],r=n[(e+1)%n.length],o=n[(e+2)%n.length],l=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],c=[o[0]-r[0],o[1]-r[1],o[2]-r[2]];if((l[1]*c[2]-l[2]*c[1])*t[0]+(l[2]*c[0]-l[0]*c[2])*t[1]+(l[0]*c[1]-l[1]*c[0])*t[2]<-1e-12)return!1}return!0}function Ku(n){let t=typeof n=="string"?n:new TextDecoder("latin1").decode(n);if(!t.startsWith("ISO-10303-21")||!t.includes("POLY_LOOP")||!t.includes("FACETED_BREP"))return null;let e=new Map,i=new Map,r=new Map,o=new Map,l=new Map,c=[],u=[];for(let[b,w]of yg(t)){if(w.startsWith("(")){/\bLENGTH_UNIT\s*\(/.test(w)&&u.push(w);continue}let E=w.match(/^([A-Z0-9_]+)\s*\(/);if(!E)continue;let M=E[1];if(mg.test(M))return null;if(!pg.has(M))continue;let y=w.slice(E[0].length,w.lastIndexOf(")"));if(M==="CARTESIAN_POINT"){let L=y.match(/\(([^()]*)\)\s*$/),z=L?L[1].split(",").map(Number):[];if(z.length!==3||z.some(A=>!Number.isFinite(A)))return null;e.set(b,z)}else M==="POLY_LOOP"?i.set(b,Zs(y.slice(y.indexOf("(")))):M==="FACE_OUTER_BOUND"?r.set(b,{loop:Zs(y)[0],reversed:/\.F\.\s*$/.test(y)}):M==="FACE_SURFACE"||M==="FACE"?o.set(b,Zs(y.slice(y.indexOf("("),y.indexOf(")")+1))):M==="CLOSED_SHELL"||M==="OPEN_SHELL"?l.set(b,Zs(y)):M==="FACETED_BREP"&&c.push(Zs(y)[0])}let d=vg(u);if(!d||!c.length)return null;let g=[],v=[],_=[];for(let b of c){let w=l.get(b);if(!w)return null;for(let E of w){let M=o.get(E);if(!M||M.length!==1)return null;let y=r.get(M[0]),L=y&&i.get(y.loop);if(!L||L.length<3)return null;let z=y.reversed?L.slice().reverse():L,A=z.map(H=>e.get(H));if(A.some(H=>!H)||A.length>3&&!xg(A))return null;let R=g.length/3,D=v.length/3;for(let H of A)g.push(H[0]*d,H[1]*d,H[2]*d);for(let H=1;H+1<z.length;H++)v.push(R,R+H,R+H+1);_.push({first:D,last:v.length/3-1})}}return{positions:Float64Array.from(g),indices:Uint32Array.from(v),faces:_,solids:c.length,names:[]}}var pg,mg,gg,_g,Zs,Qu=gn(()=>{pg=new Set(["CARTESIAN_POINT","POLY_LOOP","FACE_OUTER_BOUND","FACE_SURFACE","FACE","PLANE","AXIS2_PLACEMENT_3D","DIRECTION","CLOSED_SHELL","OPEN_SHELL","FACETED_BREP","SHELL_BASED_SURFACE_MODEL"]),mg=/^(ADVANCED_FACE|EDGE_LOOP|FACE_BOUND|ORIENTED_FACE|ORIENTED_CLOSED_SHELL|BREP_WITH_VOIDS|MAPPED_ITEM|ITEM_DEFINED_TRANSFORMATION|NEXT_ASSEMBLY_USAGE_OCCURRENCE|MANIFOLD_SOLID_BREP)$/,gg={EXA:1e21,PETA:1e18,TERA:1e15,GIGA:1e12,MEGA:1e9,KILO:1e6,HECTO:1e5,DECA:1e4,DECI:100,CENTI:10,MILLI:1,MICRO:.001,NANO:1e-6},_g={MILLIMETRE:1,MILLIMETER:1,MM:1,CENTIMETRE:10,CENTIMETER:10,METRE:1e3,METER:1e3,INCH:25.4,IN:25.4,FOOT:304.8,FT:304.8},Zs=n=>[...n.matchAll(/#(\d+)/g)].map(t=>+t[1])});async function ef(n,t=""){let e=n instanceof Uint8Array?n:new Uint8Array(n);return/\.stl$/i.test(t)?bg(e):/\.3mf$/i.test(t)?Ag(e):null}function bg(n){let t=new DataView(n.buffer,n.byteOffset,n.byteLength);if(n.byteLength>=84){let o=t.getUint32(80,!0);if(84+o*50===n.byteLength){let l=new Float64Array(o*9),c=new Uint32Array(o*3);for(let u=0;u<o;u++){let d=84+u*50+12;for(let g=0;g<9;g++)l[u*9+g]=t.getFloat32(d+g*4,!0);c[u*3]=u*3,c[u*3+1]=u*3+1,c[u*3+2]=u*3+2}if(!o)throw new Error("This STL file has no triangles.");return Fc(l,c)}}let e=new TextDecoder().decode(n);if(!/^\s*solid/.test(e))throw new Error("This isn\u2019t an STL file ncCAM can read.");let i=[];for(let o of e.matchAll(/vertex\s+(\S+)\s+(\S+)\s+(\S+)/g))i.push(+o[1],+o[2],+o[3]);let r=Math.floor(i.length/9);if(!r||i.some(o=>!Number.isFinite(o)))throw new Error("This STL file has no triangles ncCAM can read.");return i.length=r*9,Fc(i,Array.from({length:r*3},(o,l)=>l))}function Sg(n){let t=new DataView(n.buffer,n.byteOffset,n.byteLength),e=-1;for(let u=n.byteLength-22;u>=Math.max(0,n.byteLength-65557);u--)if(t.getUint32(u,!0)===101010256){e=u;break}if(e<0)throw new Error("This 3MF file is damaged (not a zip).");let i=u=>t.getUint32(u,!0)+t.getUint32(u+4,!0)*2**32,r=4294967295,o=t.getUint16(e+10,!0),l=t.getUint32(e+16,!0);if((l===r||o===65535)&&e>=20&&t.getUint32(e-20,!0)===117853008){let u=i(e-12);if(t.getUint32(u,!0)!==101075792)throw new Error("This 3MF file is damaged (zip64).");o=i(u+32),l=i(u+48)}let c=new Map;for(let u=0;u<o&&!(l+46>n.byteLength||t.getUint32(l,!0)!==33639248);u++){let d=t.getUint16(l+10,!0),g=t.getUint32(l+20,!0),v=t.getUint32(l+24,!0),_=t.getUint16(l+28,!0),b=t.getUint16(l+30,!0),w=t.getUint16(l+32,!0),E=t.getUint32(l+42,!0);for(let y=l+46+_;y+4<=l+46+_+b;){let L=t.getUint16(y,!0),z=t.getUint16(y+2,!0);if(L===1){let A=y+4;v===r&&(v=i(A),A+=8),g===r&&(g=i(A),A+=8),E===r&&(E=i(A),A+=8)}y+=4+z}let M=new TextDecoder().decode(n.subarray(l+46,l+46+_));c.set(M.replace(/^\//,""),{method:d,size:g,local:E}),l+=46+_+b+w}return{has:u=>c.has(u.replace(/^\//,"")),async text(u){let d=c.get(u.replace(/^\//,""));if(!d)throw new Error(`This 3MF file is missing ${u}.`);let g=d.local+30+t.getUint16(d.local+26,!0)+t.getUint16(d.local+28,!0),v=n.subarray(g,g+d.size),_=v;if(d.method===8)_=new Uint8Array(await new Response(new Blob([v]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).arrayBuffer());else if(d.method!==0)throw new Error("This 3MF file is compressed in a way ncCAM can\u2019t read.");return new TextDecoder().decode(_)}}}function Tg(n){let t=Mg[_n(n.slice(0,2e3).match(/<model\b[^>]*>/)?.[0]||"","unit")||"millimeter"]??1,e=new Map,i=new Set,r=/<object\b([^>]*)>([\s\S]*?)<\/object>/g;for(let l;l=r.exec(n);){let c=_n(l[1],"id"),u=l[2],d=_n(l[1],"type");if(d&&d!=="model"){i.add(c);continue}if(u.includes("<mesh")){let g=[],v=[];for(let _ of u.matchAll(/<vertex\b([^>]*)\/?>/g))g.push(+_n(_[1],"x"),+_n(_[1],"y"),+_n(_[1],"z"));for(let _ of u.matchAll(/<triangle\b([^>]*)\/?>/g))v.push(+_n(_[1],"v1"),+_n(_[1],"v2"),+_n(_[1],"v3"));e.set(c,{pos:g,tri:v})}else{let g=[...u.matchAll(/<component\b([^>]*)\/?>/g)].map(v=>({id:_n(v[1],"objectid"),path:_n(v[1],"p:path"),transform:tf(_n(v[1],"transform"))}));e.set(c,{components:g})}}let o=[...(n.match(/<build\b[\s\S]*?<\/build>/)?.[0]||"").matchAll(/<item\b([^>]*)\/?>/g)].map(l=>({id:_n(l[1],"objectid"),path:_n(l[1],"p:path"),transform:tf(_n(l[1],"transform"))}));return{unit:t,objects:e,skipped:i,build:o}}async function Ag(n){let t=Sg(n),e="3D/3dmodel.model";if(t.has("_rels/.rels")){let v=[...(await t.text("_rels/.rels")).matchAll(/<Relationship\b([^>]*)\/?>/g)].find(_=>/3dmodel/.test(_n(_[1],"Type")||""));v&&(e=_n(v[1],"Target").replace(/^\//,""))}let i=new Map,r=async g=>(i.has(g)||i.set(g,Tg(await t.text(g))),i.get(g)),o=await r(e),l=[],c=[],u=0,d=async(g,v,_,b=0)=>{if(b>16)throw new Error("This 3MF file nests objects too deeply.");let w=await r(g),E=w.objects.get(v);if(!E&&w.skipped.has(v))return;if(!E)throw new Error(`This 3MF file is missing object ${v}.`);if(E.components){for(let z of E.components)await d(z.path?z.path.replace(/^\//,""):g,z.id,Eg(z.transform,_),b+1);return}let M=w.unit,y=l.length/3;for(let z=0;z<E.pos.length;z+=3){let A=E.pos[z],R=E.pos[z+1],D=E.pos[z+2];l.push((A*_[0]+R*_[3]+D*_[6]+_[9])*M,(A*_[1]+R*_[4]+D*_[7]+_[10])*M,(A*_[2]+R*_[5]+D*_[8]+_[11])*M)}let L=_[0]*(_[4]*_[8]-_[5]*_[7])-_[1]*(_[3]*_[8]-_[5]*_[6])+_[2]*(_[3]*_[7]-_[4]*_[6]);for(let z=0;z<E.tri.length;z+=3)L<0?c.push(y+E.tri[z],y+E.tri[z+2],y+E.tri[z+1]):c.push(y+E.tri[z],y+E.tri[z+1],y+E.tri[z+2]);u++};for(let g of o.build)await d(g.path?g.path.replace(/^\//,""):e,g.id,g.transform);if(!c.length)throw new Error("This 3MF file has no objects to cut.");if(l.some(g=>!Number.isFinite(g))||c.some(g=>g>=l.length/3))throw new Error("This 3MF file is damaged (bad vertex numbers).");return Fc(l,c,u)}var Mg,Fc,_n,wg,tf,Eg,nf=gn(()=>{Mg={micron:.001,millimeter:1,centimeter:10,inch:25.4,foot:304.8,meter:1e3};Fc=(n,t,e=1)=>({positions:n instanceof Float64Array?n:Float64Array.from(n),indices:t instanceof Uint32Array?t:Uint32Array.from(t),faces:[],solids:e,names:[]});_n=(n,t)=>{let e=n.match(new RegExp(`(?:^|\\s)${t}\\s*=\\s*"([^"]*)"`));return e?e[1]:null},wg=[1,0,0,0,1,0,0,0,1,0,0,0],tf=n=>{let t=(n||"").trim().split(/\s+/).map(Number);return t.length===12&&t.every(Number.isFinite)?t:wg},Eg=(n,t)=>{let e=new Array(12);for(let i=0;i<4;i++)for(let r=0;r<3;r++)e[i*3+r]=(i<3?0:t[9+r])+n[i*3]*t[r]+n[i*3+1]*t[3+r]+n[i*3+2]*t[6+r];return e}});function Uc(n,t){let e=n.diameter/2,i=Math.ceil(e/t),r=[];for(let l=-i;l<=i;l++)for(let c=-i;c<=i;c++){let u=Math.hypot(c,l)*t;if(u>e+1e-6)continue;let d=Math.min(u,e),g=0;if(n.kind==="ball")g=e-Math.sqrt(Math.max(0,e*e-d*d));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let v=(n.angle||(n.kind==="drill"?118:90))*Math.PI/360;g=d/Math.tan(v)}r.push(c,l,g,u)}let o=Float32Array.from(r);return o.inner=Math.max(0,e-t*Math.SQRT1_2),o}function Cg(n,t,e,i,r,o){let l=Math.hypot(i.x-e.x,i.y-e.y),c=Math.max(1,Math.ceil(l/(n.cell*.5))),u=!1;for(let d=r?0:1;d<=c;d++){let g=d/c,v=(e.x+(i.x-e.x)*g-n.x0)/n.cell,_=(e.y+(i.y-e.y)*g-n.y0)/n.cell,b=e.z+(i.z-e.z)*g;if(b>=n.top)continue;let w=Math.round(v),E=Math.round(_);for(let M=0;M<t.length;M+=4){let y=w+t[M],L=E+t[M+1];if(y<0||L<0||y>=n.nx||L>=n.ny)continue;let z=L*n.nx+y,A=b+t[M+2];if(n.h[z]>A+1e-4){if(r){n.h[z]>A+.05&&t[M+3]<=t.inner&&(u=!0);continue}n.h[z]=A,n.op[z]=o+1}}}return u}function rf(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function Bc(n,t,e,i,r){let o=t.diameter/2,l=n.cell,c=o/l,u=t.kind==="ball"?q=>o-Math.sqrt(Math.max(0,o*o-q*q)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(q=>Z=>Z/q)(Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360)):()=>0,d=!t.kind||t.kind==="flat"||t.kind==="surfacing",{h:g,sx:v,sy:_,wx:b,wy:w,gap:E,deep:M,nx:y,ny:L}=n,z=1.5*l,A=c+1.5,R=(q,Z,K,ht)=>{let gt=Math.hypot(Z,K);if(gt>A)return;let Et=gt*l;if(Et<=o){let yt=ht+u(Et);if(g[q]>yt+1e-4)g[q]=yt,n.op[q]=r+1,E[q]=1/0,M[q]=-1/0;else if(g[q]<yt-1e-4)return;o-Et>M[q]&&(M[q]=o-Et,d&&o-Et<z&&gt>1e-6?(v[q]=Z/gt*(o-Et),_[q]=K/gt*(o-Et),b[q]=-Z/gt,w[q]=-K/gt):(v[q]=0,_[q]=0,b[q]=0,w[q]=0))}else d&&g[q]>ht+1e-4&&Et-o<E[q]&&(E[q]=Et-o,v[q]=Z/gt*(o-Et),_[q]=K/gt*(o-Et),b[q]=-Z/gt,w[q]=-K/gt)},D=(e.x-n.x0)/l,H=(e.y-n.y0)/l,C=(i.x-n.x0)/l,k=(i.y-n.y0)/l;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let q=C-D,Z=k-H,K=q*q+Z*Z,ht=Math.max(0,Math.floor(Math.min(D,C)-A)),gt=Math.min(y-1,Math.ceil(Math.max(D,C)+A)),Et=Math.max(0,Math.floor(Math.min(H,k)-A)),yt=Math.min(L-1,Math.ceil(Math.max(H,k)+A));for(let Pt=Et;Pt<=yt;Pt++)for(let Rt=ht;Rt<=gt;Rt++){let jt=K>0?Math.max(0,Math.min(1,((Rt-D)*q+(Pt-H)*Z)/K)):0;R(Pt*y+Rt,Rt-(D+q*jt),Pt-(H+Z*jt),e.z)}return}let G=Math.hypot(i.x-e.x,i.y-e.y),Y=Math.max(1,Math.ceil(G/(l*.5))),j=Math.ceil(A);for(let q=1;q<=Y;q++){let Z=q/Y,K=D+(C-D)*Z,ht=H+(k-H)*Z,gt=e.z+(i.z-e.z)*Z;if(gt>=n.top)continue;let Et=Math.max(0,Math.floor(K-j)),yt=Math.min(y-1,Math.ceil(K+j)),Pt=Math.max(0,Math.floor(ht-j)),Rt=Math.min(L-1,Math.ceil(ht+j));for(let jt=Pt;jt<=Rt;jt++)for(let at=Et;at<=yt;at++)R(jt*y+at,at-K,jt-ht,gt)}}function sf(n,t){let e=new ji(n.stock,t||ji.cellFor(n.stock)),i=[];return n.ops.forEach((r,o)=>{if(!r.enabled||!r.moves)return;let l=Uc(r.tool,e.cell),c=null;for(let u of r.moves)c&&Cg(e,l,c,u,!!u.r,o)&&i.push({op:r.id,at:u}),c=u}),{hm:e,collisions:i}}function of(n,t){let e=new Float32Array(t.nx*t.ny).fill(-1/0),i=n.positions,r=n.indices;for(let o=0;o<r.length;o+=3){let l=r[o]*3,c=r[o+1]*3,u=r[o+2]*3,d=i[l],g=i[l+1],v=i[l+2],_=i[c],b=i[c+1],w=i[c+2],E=i[u],M=i[u+1],y=i[u+2],L=(b-M)*(d-E)+(E-_)*(g-M);if(Math.abs(L)<1e-12)continue;let z=Math.max(0,Math.floor((Math.min(d,_,E)-t.x0)/t.cell)),A=Math.min(t.nx-1,Math.ceil((Math.max(d,_,E)-t.x0)/t.cell)),R=Math.max(0,Math.floor((Math.min(g,b,M)-t.y0)/t.cell)),D=Math.min(t.ny-1,Math.ceil((Math.max(g,b,M)-t.y0)/t.cell));for(let H=R;H<=D;H++)for(let C=z;C<=A;C++){let k=t.x0+C*t.cell,G=t.y0+H*t.cell,Y=((b-M)*(k-E)+(E-_)*(G-M))/L,j=((M-g)*(k-E)+(d-E)*(G-M))/L,q=1-Y-j;if(Y<-1e-9||j<-1e-9||q<-1e-9)continue;let Z=Y*v+j*w+q*y,K=H*t.nx+C;Z>e[K]&&(e[K]=Z)}}return e}var ji,kc=gn(()=>{ji=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});function zc(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return Pg.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t||"flat"}function br(n,t){return(typeof t=="string"?t:t?.mode)==="toolId"?n.toolId??n.id:n.toolNumber?n.toolNumber:t?.manual?.get(n.id)??n.toolId??n.id}function af(n,t,e=0,i=null){if(n==="toolId")return{mode:n};let r=new Set(t.filter(u=>u.toolNumber).map(u=>u.toolNumber));for(let u=1;u<=e;u++)r.add(u);i&&r.add(i);let o=new Map,l=t.filter(u=>!u.toolNumber);for(let u of l){let d=u.toolId??u.id;d>e&&!r.has(d)&&(o.set(u.id,d),r.add(d))}let c=e+1;for(let u of l)if(!o.has(u.id)){for(;r.has(c);)c++;o.set(u.id,c),r.add(c)}return{mode:n,manual:o}}function lf(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${zc(t)}`,kind:zc(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2,.../^(vbit|chamfer)$/.test(zc(t))?{angle:Ig(t)}:{}}))}function Ig(n){let t=Number(n.dimensions?.taper_angle);if(t>0&&t<90)return t*2;let e=String(n.name||"").match(/(\d{2,3}(?:\.\d+)?)\s*(?:°|º|deg\b|degrees?\b)/i),i=e?Number(e[1]):0;return i>0&&i<180?i:90}function cf(n,t,e,i={}){let r=Mr[t]||Mr.mdf,o=Qn[e]||Qn.balanced,l=i.maxRpm||24e3,c=i.minRpm||0,u=Math.round(Math.min(l,Math.max(c,r.rpm))),d=Math.min(r.maxChip,r.chip*n.diameter),g=Math.min(i.maxFeed||4e3,4e3),v=Math.round(Math.min(g,Math.max(150,u*n.flutes*d*o.feed)));return{rpm:u,feed:v,plunge:Math.round(Math.max(60,v*.3)),stepdown:Math.max(.05,n.diameter*r.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,r.stepover*o.stepover)),rampAngle:r.ramp}}var Mr,Qn,Pg,Fi,Js=gn(()=>{Mr={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},Qn={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},Pg=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"]);Fi=n=>n==="aluminum"?{height:1,length:1}:{height:2,length:2}});var kn={};Fu(kn,{INCH:()=>Rg,len:()=>sa,num:()=>ra,toMm:()=>Ng,unitsFrom:()=>Lg});function ra(n,t="mm",e=t==="in"?3:1){let i=t==="in"?n/25.4:n;return(Math.round(i*10**e)/10**e).toLocaleString("en-US",{maximumFractionDigits:e})}var Rg,Lg,sa,Ng,Vc=gn(()=>{Rg=25.4,Lg=n=>n==="imperial"?"in":"mm";sa=(n,t="mm",e)=>`${ra(n,t,e)} ${t}`,Ng=(n,t="mm")=>t==="in"?n*25.4:n});function Qs(n){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:2,extraTop:1,width:n.size[0]+4,depth:n.size[1]+4,thickness:n.size[2]+1},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,...Fi("mdf")},throughDepth:.3,disabled:{},toolOverride:{}}}function la(n,t){let[e,i,r]=n.size,o=t.stock,l=o.fit?e+2*o.margin:Math.max(e,o.width),c=o.fit?i+2*o.margin:Math.max(i,o.depth),u=o.fit?r+o.extraTop:Math.max(r,o.thickness);return{minX:(e-l)/2,minY:(i-c)/2,maxX:(e+l)/2,maxY:(i+c)/2,bottom:0,top:u,width:l,depth:c,thickness:u}}function Xc(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,r=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(r=n.minY),e.includes("back")&&(r=n.maxY),{x:i,y:r,z:t.z==="bed"?n.bottom:n.top}}function Fg(n){let t=n.positions,e=n.indices,i=[];for(let r=0;r<e.length/3;r++){if(Lc(n,r)[2]>-.001)continue;let l=[e[r*3]*3,e[r*3+1]*3,e[r*3+2]*3],c=l.map(u=>[t[u],t[u+1]]);Math.abs(Kn(c))<1e-6||i.push({loop:Kn(c)>0?c:c.reverse(),maxZ:Math.max(...l.map(u=>t[u+2]))})}return i}function Bg(n){if(n.length!==1)return null;let t=n[0];if(t.length<12)return null;let e=Di([t]),i=(e.minX+e.maxX)/2,r=(e.minY+e.maxY)/2,o=t.map(([c,u])=>Math.hypot(c-i,u-r)),l=o.reduce((c,u)=>c+u,0)/o.length;return o.every(c=>Math.abs(c-l)<Math.max(.03,l*.01))?{x:i,y:r,d:2*l}:null}function ff(n,t,e,i={}){let r=at=>sa(at,e.units),o=at=>ra(at,e.units),l=xr(n),c=la(l,e),u=Qn[e.finish]||Qn.balanced,d=[],g=e.surface3d??l.slopedShare>Dc;l.squareEdges&&d.push({kind:"edges",text:"Chamfers or rounded edges face down on this side, so they are left square."}),l.undercut&&d.push({kind:"undercut",text:"Some features face the other side, so they can\u2019t be reached from the top. Cut this side, then turn the part over for a second setup."});let v=t.filter(at=>at.kind==="flat").sort((at,Bt)=>Bt.diameter-at.diameter),_=t.filter(at=>at.kind==="drill"),b=t.filter(at=>at.kind==="surfacing").sort((at,Bt)=>Bt.diameter-at.diameter),w=new Map,E=at=>(at&&w.set(at.id,(w.get(at.id)||0)+1),at),M=e.material==="aluminum"?8:12.8,y=l.undercutArea>0?Fg(n).sort((at,Bt)=>Bt.maxZ-at.maxZ):[],L=[],z=at=>{let Bt=0,Vt=y.length;for(;Bt<Vt;){let Ot=Bt+Vt>>1;y[Ot].maxZ>at+vn?Bt=Ot+1:Vt=Ot}let Gt=Bt;if(!Gt)return[];let ft=null;for(let Ot of L)Ot.k<=Gt&&(!ft||Ot.k>ft.k)&&(ft=Ot);if(ft?.k===Gt)return ft.loops;let St=y.slice(ft?ft.k:0,Gt).map(Ot=>Ot.loop),Ut=Xu(ft?[...ft.loops,...St]:St);return L.push({k:Gt,loops:Ut}),Ut},A=new Map,R=at=>{if(A.has(at))return A.get(at);let Bt=Ys(ia(n,at+vn)),Vt=z(at),Gt=Vt.length?Re(Re(Jn([...Bt,...Vt]),.002),-.002):Bt;return A.set(at,Gt),Gt},D=R(0),H=Jn(Bn(D).map(at=>at[0])),C=[],k=1,G=at=>(at.id=at.id||`op${k++}`,C.push(at),at);function Y(at,Bt,Vt){let Gt=v.filter(Ot=>Ot.diameter<=M&&Zr(Ot,Bt)&&Re(at,-(Ot.diameter/2+Vt)).length);if(!Gt.length)return null;let ft=Gt.map(Ot=>({t:Ot,c:kg(at,Ot.diameter/2)})),St=ft.find(Ot=>Ot.c>=.85)||ft.reduce((Ot,zt)=>zt.c>Ot.c?zt:Ot);return(ft.find(Ot=>w.has(Ot.t.id)&&Ot.c>=Math.min(.85,St.c*.98))||St).t}function j(at,Bt,Vt){let Gt=fn(jn(at,Ks(at,Bt.diameter/2)),rn);if(nn(Gt)<rn)return null;let ft=v.filter(Ot=>Ot.diameter<Bt.diameter-1e-6&&Zr(Ot,Vt));if(!ft.length)return{tool:null,left:Gt};let St=nn(Gt);return{tool:ft.find(Ot=>nn(fn(jn(at,Ks(at,Ot.diameter/2)),rn))<St*.25)||ft[ft.length-1],left:Gt}}let q=at=>cf(at,e.material,e.finish,i);if(c.top>l.top+vn){let at=b[0]||v[0];at&&G({id:"face",kind:"face",label:"Flatten the top",tool:E(at),zTop:c.top,zBottom:l.top,region:Hc(c),detail:`${r(c.top-l.top)} off the top`})}let Z=g&&K();function K(){let at=l.top+e.throughDepth,Bt=oe=>oe.diameter<=M&&Zr(oe,at),Vt=v.find(oe=>w.has(oe.id)&&Bt(oe))||v.find(Bt);if(!Vt)return d.push({kind:"notool",text:`No end mill is long enough to rough the 3D shape (${r(at)}), so it is cut in 2.5D.`}),!1;let Gt=t.filter(oe=>oe.kind==="ball"&&Bt(oe)).sort((oe,Zt)=>Math.abs(oe.diameter-6.35)-Math.abs(Zt.diameter-6.35)),ft=Gt[0]||Vt;Gt.length||d.push({kind:"noball",text:`No ball end mill in your Tool Library is long enough, so ${Vt.name} finishes the 3D surface. A ball end mill leaves it much smoother.`});let St=Math.min(q(Vt).stepdown,q(ft).stepdown),Ut=[l.top,...l.floors.filter(oe=>oe<l.top-vn&&oe>vn&&(l.floorAreas[oe]||0)>=Dg),0],Ot=[];for(let oe=1;oe<Ut.length;oe++){let Zt=Math.max(1,Math.ceil((Ut[oe-1]-Ut[oe])/St-1e-6));for(let pe=1;pe<=Zt;pe++)Ot.push(pe===Zt?Ut[oe]:Ut[oe-1]-pe*(Ut[oe-1]-Ut[oe])/Zt)}let zt=Re(H,Math.max(Vt.diameter,ft.diameter)+1),it=[],Pe=l.top,de=null;for(let oe of Ot){let Zt=oe<=vn,pe=fn(jn(Zt?H:zt,R(Zt?0:oe)),rn),rt=de?fn(Ni(pe,de),rn):pe,Be=de?fn(jn(pe,de),rn):[],Ee={zFrom:Pe,z:Zt?-e.throughDepth:oe,exact:rt,region:Oi(rt,hf),fresh:nn(Be)>=rn&&Re(Be,-.5).length?Oi(Be,hf):[]};(nn(rt)>=rn||Ee.fresh.length)&&it.push(Ee),de=pe,Pe=oe}if(!it.length)return!1;let me=aa[e.finish]??aa.balanced,ye=G({kind:"rough3d",label:"Rough the 3D shape",tool:E(Vt),zTop:l.top,zBottom:it[it.length-1].z,region:zt,layers:it,allowance:oa,detail:`${it.length} layers \xB7 ${r(oa)} left`}),he=(t.find(oe=>oe.id===e.toolOverride?.[ye.id])||Vt).diameter/2,Se=it.map(oe=>{let Zt=Re(oe.exact,-oa),pe=fn(jn(Zt,Ks(Zt,he)),rn);return Bn(pe).filter(rt=>Re(rt,-Og/2).length).flat()}),Ne=ye.id;if(Se.some(oe=>nn(oe)>=rn)){let oe=v.filter(X=>X.diameter<Vt.diameter-1e-6&&Bt(X)),Zt=X=>it.map((P,nt)=>nn(Se[nt])>=rn?fn(jn(Se[nt],Ks(P.region,X.diameter/2)),rn):[]).flat(),pe=nn(Se.flat()),rt=oe.find(X=>nn(Zt(X))<=pe*.25)||oe[oe.length-1];if(rt){let X=rt.diameter/2,P=it.map((nt,dt)=>({zFrom:nt.zFrom,z:nt.z,region:nn(Se[dt])>=rn?Ni(nt.exact,Re(Se[dt],2*X+.5)):[]})).filter(nt=>nt.region.length);Ne=G({kind:"rest3d",label:"Clear where the big end mill can\u2019t reach",tool:E(rt),zTop:l.top,zBottom:P[P.length-1].z,region:Jn(P.flatMap(nt=>nt.region)),layers:P,after:ye.id,detail:`${P.length} layers \xB7 holes, slots, corners`}).id}let Be=rt||Vt,Ee=Zt(Be);Re(Ee,-.25).length?d.push({kind:"notool",text:`Some holes or slots are narrower than ${Be.name} and stay uncut: add a smaller end mill to the Tool Library.`}):nn(Ee)>=rn&&d.push({kind:"corners",text:`Inside corners stay rounded to ${r(Be.diameter/2)}: no smaller end mill in your library.`})}return G({kind:"finish3d",label:"Finish the 3D surface",tool:E(ft),zTop:l.top,zBottom:0,region:H,after:Ne,ridge:me,detail:`Parallel passes${e.finish==="fast"?"":" and waterlines on steep walls"} \xB7 ${sa(me,e.units,e.units==="in"?4:2)} ridges`,steep:e.finish!=="fast",left:St+oa+1.2}),d.push({kind:"surface3d",text:`Curved faces are cut in 3D: roughed in ${it.length} layers, then ${ft.name} follows the surface.`}),!0}l.sloped&&!Z&&d.push({kind:"sloped",text:"Sloped or curved faces (chamfers, fillets) aren\u2019t cut in 3D yet, so they are left square."});let ht=Z?[]:[l.top,...l.floors.filter(at=>at<l.top-vn&&at>vn),0],gt=[],Et=(at,Bt)=>{let Vt=nn(at),Gt=nn(Bt);if(Math.abs(Vt-Gt)>Math.max(rn,Vt*.005))return!1;let ft=Di(at),St=Di(Bt);return Math.abs(ft.minX-St.minX)<.01&&Math.abs(ft.maxX-St.maxX)<.01&&Math.abs(ft.minY-St.minY)<.01&&Math.abs(ft.maxY-St.maxY)<.01};for(let at=1;at<ht.length;at++){let Bt=ht[at-1],Vt=ht[at],Gt=jn(Hc(c),R(Vt));for(let ft of Bn(Gt)){if(nn(ft)<rn||!Re(ft,-.05).length)continue;let St=Di([ft[0]]),Ut=St.minX<=c.minX+.001||St.maxX>=c.maxX-.001||St.minY<=c.minY+.001||St.maxY>=c.maxY-.001,Ot=null;if(Ut&&(Vt===0||(Ot=fn(Ni(ft,H),rn),nn(Ot)<rn)))continue;let zt=Ut?Ot:ft,it=gt.find(Pe=>Pe.zFloor===Bt&&Pe.outer===Ut&&Et(Pe.shape,zt));it?(it.zFloor=Vt,it.region=ft):gt.push({outer:Ut,region:ft,over:Ot,shape:zt,zTop:Bt,zFloor:Vt})}}let yt=new Map;for(let{outer:at,region:Bt,over:Vt,zTop:Gt,zFloor:ft}of gt){let St=ft===0,Ut=St?-e.throughDepth:ft,Ot=Gt-Ut;{if(at){let he=Y(Ni(Bt,Re(Vt,13)),Ot,u.allowance);if(!he){d.push({kind:"notool",text:`A step ${r(Gt-ft)} deep has no end mill that fits.`});continue}let Se=Ni(Bt,Re(Vt,he.diameter+.5));G({kind:"step",label:"Cut the step",tool:E(he),zTop:Gt,zBottom:Ut,region:Se,walls:Bt,detail:`${r(Gt-ft)} deep`});continue}let zt=Bg(Bt);if(zt){let he=`${Gc(zt.d)}|${Gc(Gt)}|${Gc(Ut)}`;yt.has(he)||yt.set(he,{d:zt.d,zTop:Gt,zBottom:Ut,through:St,centers:[],regions:[]}),yt.get(he).centers.push(zt),yt.get(he).regions.push(Bt);continue}let it=Di([Bt[0]]),Pe=Y(Bt,Ot,u.allowance),de=`${o(it.maxX-it.minX)} \xD7 ${r(it.maxY-it.minY)} \xB7 ${St?"through":`${r(Gt-ft)} deep`}`;if(!Pe){d.push({kind:"notool",text:`No end mill fits the pocket ${de}.`});continue}let me=G({kind:"pocket",label:St?"Cut the opening":"Clear the pocket",tool:E(Pe),zTop:Gt,zBottom:Ut,region:Bt,detail:de}),ye=j(Bt,Pe,Ot);ye&&ye.tool?G({kind:"corners",label:"Clean the corners",tool:E(ye.tool),zTop:Gt,zBottom:Ut,region:Bt,after:me.id,detail:`Corners too tight for ${Pe.name}`}):ye&&d.push({kind:"corners",text:`Pocket corners stay rounded to ${r(Pe.diameter/2)}: no smaller end mill in your library.`})}}for(let at of yt.values()){let Bt=at.centers.length,Vt=at.zTop-at.zBottom,Gt=`\xD8${r(at.d)} ${at.through?"through":`${r(at.zTop-at.zBottom)} deep`}`,ft=_.find(Ot=>Ug(Ot.diameter,at.d)&&Zr(Ot,Vt));if(ft){G({kind:"drill",label:Bt>1?`Drill ${Bt} holes`:"Drill the hole",tool:E(ft),zTop:at.zTop,zBottom:at.zBottom,centers:at.centers,detail:Gt});continue}let St=at.regions.flat().length?at.regions.flatMap(Ot=>Ot):[],Ut=Y(St,Vt,0)||null;if(!Ut||Ut.diameter>at.d-.4){let Ot=v.find(zt=>zt.diameter<=at.d-.4&&Zr(zt,Vt));if(!Ot){d.push({kind:"notool",text:`No drill or end mill fits the ${Gt} hole${Bt>1?"s":""}.`});continue}G({kind:"hole",label:Bt>1?`Cut ${Bt} holes`:"Cut the hole",tool:E(Ot),zTop:at.zTop,zBottom:at.zBottom,region:St,centers:at.centers,detail:`${Gt} \xB7 spiral`});continue}G({kind:"hole",label:Bt>1?`Cut ${Bt} holes`:"Cut the hole",tool:E(Ut),zTop:at.zTop,zBottom:at.zBottom,region:St,centers:at.centers,detail:`${Gt} \xB7 spiral`})}if(H.length){let at=l.top+e.throughDepth,Bt=v.filter(ft=>Zr(ft,at)&&ft.diameter<=M),Vt=Bt.find(ft=>w.has(ft.id))||Bt.slice().sort((ft,St)=>Math.abs(ft.diameter-6.35)-Math.abs(St.diameter-6.35))[0],Gt=e.tabs.enabled?`${e.tabs.count} tabs`:"no tabs";Vt?G({id:"cutout",kind:"cutout",label:"Cut out the part",tool:E(Vt),zTop:l.top,zBottom:-e.throughDepth,region:H,detail:`${r(l.top)} \xB7 ${Gt}`}):d.push({kind:"notool",text:`No end mill is long enough to cut out the part (${r(at)}).`})}e.chamfer?.size>0&&Pt();function Pt(){let at=e.chamfer.size,Bt=e.chamfer.edges||"all";if(Z){d.push({kind:"chamfer",text:"Edges aren\u2019t chamfered on parts cut in 3D."});return}let Vt=t.filter(Zt=>(Zt.kind==="vbit"||Zt.kind==="chamfer")&&Zt.angle>0&&Zt.angle<180),Gt=Zt=>(at+js)/Math.tan(Zt.angle*Math.PI/360),ft=Zt=>Zt.diameter/2>=at+js+.1&&(!Zt.fluteLength||Zt.fluteLength>=Gt(Zt)-1e-6),Ut=t.find(Zt=>Zt.id===e.toolOverride?.chamfer&&Vt.includes(Zt))||Vt.filter(ft).sort((Zt,pe)=>Math.abs(Zt.angle-90)-Math.abs(pe.angle-90)||Zt.diameter-pe.diameter)[0];if(!Ut){d.push({kind:"chamfer",text:Vt.length?`No V-bit in your Tool Library is wide enough for a ${r(at)} chamfer.`:"Chamfering the edges needs a V-bit in your Tool Library."});return}let Ot=Gt(Ut),zt=at+js,it=Ut.diameter/2,Pe=C.find(Zt=>Zt.kind==="cutout"),de=Pe&&!e.disabled?.cutout?Pe.tool.diameter:0,me=jn(Hc(c),Re(H,Math.max(0,de-.05))),ye=e.tabs.enabled?e.tabs.height??Fi(e.material).height:0,he=[l.top,...l.floors.filter(Zt=>Zt<l.top-vn&&Zt>vn)],Se=[],Ne=0,oe=0;for(let Zt of he){let pe=Zt-Ot,rt=fn(Ys(ia(n,Zt-vn)),rn),Be=Zt<l.top-vn?R(Zt+vn):[];if(!rt.length)continue;if(pe<-e.throughDepth+.1){oe++;continue}let Ee=fn(jn(R(Math.max(pe,vn)+vn),Re(rt,.01)),rn),X=Jn([...Re(Be,it+.1),...Re(me,it+.1),...Re(Ee,zt+.1)]),P=[];for(let nt of Bn(Wu(rt,js))){let[dt,...Ct]=nt,Wt=pe>Math.max(vn,ye+.2)||pe>-e.throughDepth+.2&&!e.tabs.enabled;if(Bt!=="inside"&&(Wt?P.push(dt):oe++),Bt!=="outside")for(let kt of Ct)P.push(kt)}P.length&&(Se.push({z:Zt,depth:Ot,loops:P,bad:X}),Ne+=P.reduce((nt,dt)=>nt+Yu(dt),0))}if(oe&&d.push({kind:"chamfer",text:`Some edges are too low to chamfer ${r(at)} without cutting the tabs or the spoilboard.`}),!Se.length){d.push({kind:"chamfer",text:`No edge can take a ${r(at)} chamfer with ${Ut.name}.`});return}G({id:"chamfer",kind:"chamfer",label:"Chamfer the edges",tool:E(Ut),zTop:l.top,zBottom:Math.min(...Se.map(Zt=>Zt.z-Zt.depth)),region:H,levels:Se,size:at,detail:`${r(at)} wide \xB7 ${Math.round(Ut.angle)}\xB0 bit \xB7 ${{all:"all edges",outside:"outside edges",inside:"pockets and holes"}[Bt]}`})}let Rt=[],jt=new Map;for(let at of C){if(at.kind!=="pocket"&&at.kind!=="corners"){Rt.push(at);continue}let Bt=at.after&&jt.has(at.after)?jt.get(at.after):at.after,Vt=Rt.find(Gt=>Gt.kind===at.kind&&Gt.detail===at.detail&&Gt.zTop===at.zTop&&Gt.zBottom===at.zBottom&&Gt.tool.id===at.tool.id&&(Gt.after||null)===(Bt||null));Vt?(Vt.region=[...Vt.region,...at.region],Vt.count=(Vt.count||1)+1,jt.set(at.id,Vt.id)):Rt.push({...at,after:Bt})}for(let at of Rt)at.count>1&&(at.kind==="pocket"&&(at.label=at.label==="Cut the opening"?`Cut ${at.count} openings`:`Clear ${at.count} pockets`),at.kind==="corners"&&(at.label=`Clean the corners of ${at.count} pockets`));C.length=0,C.push(...Rt);for(let at of C){let Bt=e.toolOverride?.[at.id];if(Bt){let Vt=t.find(Gt=>Gt.id===Bt);Vt&&(at.tool=Vt)}at.enabled=!e.disabled?.[at.id],at.feeds=q(at.kind==="chamfer"?{...at.tool,diameter:Math.min(at.tool.diameter,2*(at.size+js))}:at.tool),at.kind==="finish3d"&&(at.surface=Vg(n,c,Math.min(.2,at.tool.diameter/16)))}return{analysis:l,stock:c,zero:Xc(c,e.zero),ops:zg(C),warnings:d,job:e,mode3d:g,did3d:Z}}function zg(n){let t=n.filter(d=>d.kind==="face"),e=[...n.filter(d=>d.kind==="cutout"),...n.filter(d=>d.kind==="chamfer")],i=n.filter(d=>d.kind!=="face"&&d.kind!=="cutout"&&d.kind!=="chamfer"),r=d=>d.region||(d.centers||[]).map(g=>Hg(g)),o=new Map(i.map(d=>[d,i.filter(g=>g!==d&&(d.after===g.id||g.zTop>d.zTop+vn&&nn(Ni(r(d),r(g)))>rn))])),l=new Set,c=[...t],u=t.length?t[t.length-1].tool:null;for(;l.size<i.length;){let d=i.filter(v=>!l.has(v)&&o.get(v).every(_=>l.has(_))),g=d.find(v=>u&&v.tool.id===u.id)||d[0];l.add(g),c.push(g),u=g.tool}return[...c,...e]}function Vg(n,t,e){let i={x0:t.minX,y0:t.minY,cell:e,nx:Math.ceil((t.maxX-t.minX)/e)+1,ny:Math.ceil((t.maxY-t.minY)/e)+1};return i.h=of(n,i),i}function Hg(n,t=32){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}function ca(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var vn,rn,js,oa,Dg,hf,Og,aa,uf,Hc,Ug,Ks,kg,Zr,Gc,df=gn(()=>{Oc();kc();qs();Js();Vc();vn=.01,rn=.05,js=.25,oa=.3,Dg=25,hf=.1,Og=.5,aa={fast:.1,balanced:.05,smooth:.02},uf=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"];Hc=n=>[[[n.minX,n.minY],[n.maxX,n.minY],[n.maxX,n.maxY],[n.minX,n.maxY]]],Ug=(n,t)=>Math.abs(n-t)<.05;Ks=(n,t)=>Re(Re(n,-t),t),kg=(n,t)=>{let e=nn(n);return e>0?nn(Ks(n,t))/e:0},Zr=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,Gc=n=>(Math.round(n*10)/10).toString()});function wr(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(r,o)=>n-(o+1)*(n-t)/i)}function Sr(n,t,e,i,r,o,l){let c=[...t.breaks(e,i),i];if(l)for(let d of l.edges(e,i))c.push(d);c.sort((d,g)=>d-g);let u=e;for(let d of c){if(d-u<1e-9)continue;let g=(u+d)/2,v=l&&l.inside(g)?l.top:-1/0,[_,b]=t.at(u),w=Math.max(r(u),v),E=n.at;E&&(Math.abs(E.z-w)>1e-6||Math.abs(E.x-_)>1e-6||Math.abs(E.y-b)>1e-6)&&n.feed(_,b,w,o);let[M,y]=t.at(d);n.feed(M,y,Math.max(r(d),v),o),u=d}}function pf(n,t,e,i,r,o,l){let c=Math.max(0,(i-r)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||c<1e-6){let[d,g]=t.at(e);return n.feed(d,g,l&&l.inside(e)?Math.max(r,l.top):r,o.plunge),Sr(n,t,e,e+t.length,()=>r,o.feed,l),e}let u=e+c;return Sr(n,t,e,u,d=>i-(d-e)/c*(i-r),Math.min(o.feed,o.plunge*2),l),Sr(n,t,u,u+t.length,()=>r,o.feed,l),u}function Yg(n,t,e,i){let r=[];for(let o=t,l=0;l<500;o+=e,l++){let c=Oi(fn(Re(n,-o,i),.001),.005);if(!c.length)break;r.push(c)}return r}function $g(n){let t=n.map((r,o)=>r.map(l=>({loop:l,depth:o,kids:[]})));for(let r=1;r<t.length;r++)for(let o of t[r])(t[r-1].find(c=>$s(o.loop[0],c.loop)&&Math.sign(Kn(c.loop))===Math.sign(Kn(o.loop)))||t[r-1].find(c=>$s(o.loop[0],c.loop))||t[0][0]).kids.push(o);let e=[],i=r=>{if(!r.kids.length){e.push([r.loop]);return}for(let o of r.kids)i(o);e[e.length-1].push(r.loop)};for(let r of t[0]||[])Kn(r.loop)>0&&i(r);for(let r of t[0]||[])Kn(r.loop)<=0&&!t[0].some(o=>o.kids.includes(r))&&i(r);return e}function eo(n,t){let e=0;for(let i of t)$s(n,i)&&(e+=Kn(i)>0?1:-1);return e>0}function qg(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let r=1;r<i;r++){let o=r/i;if(!eo([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function ha(n,t,e,i,r,o,l,c=null,u=null){let d=Math.min(i.stepover,e*.95),g=Yg(t,e+l,d,l>=.2?.05:void 0);if(!g.length)return;let v=Re(t,-(e+l)+.01),_=$g(g),b=r;for(let w of wr(r,o,i.stepdown)){for(let E of _){let M=new Ui(E[0]),[y,L]=M.at(0);n.goTo(y,L,Math.max(b,u?u(y,L):b)),n.feed(y,L,b,i.plunge);let z=pf(n,M,0,b,w,i);for(let A=1;A<E.length;A++){let R=M.at(z),D=new Ui(E[A]),H=D.nearest(R);if(!qg(R,D.at(H),v)){[y,L]=D.at(H);let C=n.travel?Math.max(b+1,Math.min(c??1/0,n.travel({x:R[0],y:R[1]},{x:y,y:L}))):c??b+1;n.rapid(R[0],R[1],C),n.rapid(y,L,C);let k=Math.max(b,u?u(y,L):b)+1;C>k&&n.rapid(y,L,k),n.feed(y,L,w,i.plunge)}Sr(n,D,H,H+D.length,()=>w,i.feed),M=D,z=H}}b=w}n.retract()}function mf(n,t,e,i,r,o,l){let c=Oi(fn(Re(t,-e),.001),.005);for(let u of c){let d=new Ui(u),[g,v]=d.at(0);n.goTo(g,v,r);for(let _ of wr(r,o,l))n.feed(g,v,_,i.plunge),Sr(n,d,0,d.length,()=>_,i.feed*.9);n.retract()}}function Zg(n,t,e,i,r,o,l,c){let u=e?Re(e,-(i-.05)):null,d=e?Re(e,-(i+.05)):null,g=v=>!e||eo(v,u)&&!eo(v,d);for(let v of Oi(fn(Re(t,-(i+.02)),.001),.005)){let _=new Ui(v),b=Math.max(8,Math.ceil(_.length/.5)),w=Array.from({length:b},(y,L)=>g(_.at(L/b*_.length)));if(!w.some(Boolean))continue;let E=w.every(Boolean),M=E?0:w.indexOf(!1);for(let y=0;y<b;y++){let L=(M+y)%b;if(!w[L]||!E&&w[(L-1+b)%b])continue;let z=L;for(;z-L<b-1&&w[(z+1)%b];)z++;let A=L/b*_.length,R=E?A+_.length:(z+1)/b*_.length,[D,H]=_.at(A);if(n.goTo(D,H,Math.max(o,c(D,H))),n.feed(D,H,l,r.plunge),Sr(n,_,A,R,()=>l,r.feed*.9),n.retract(),E)break}}}function Jg(n,t,e){for(let i of t)for(let r of to(i.loops.map(o=>[o]),n.at).map(o=>o[0])){let o=new Ui(r.slice().reverse()),l=Math.max(8,Math.ceil(o.length/.25)),c=Array.from({length:l},(g,v)=>!eo(o.at(v/l*o.length),i.bad));if(!c.some(Boolean))continue;let u=c.every(Boolean),d=u?0:c.indexOf(!1);for(let g=0;g<l;g++){let v=(d+g)%l;if(!c[v]||!u&&c[(v-1+l)%l])continue;let _=v;for(;_-v<l-1&&c[(_+1)%l];)_++;let b=v/l*o.length,w=u?b+o.length:_/l*o.length;if(!u&&w-b<.5)continue;let[E,M]=o.at(b);for(let y of wr(i.z,i.z-i.depth,e.stepdown))u?(!n.at||Math.hypot(n.at.x-E,n.at.y-M)>1e-6)&&n.goTo(E,M,i.z):n.goTo(E,M,i.z),n.feed(E,M,y,e.plunge),Sr(n,o,b,w,()=>y,e.feed),u||n.retract();if(n.retract(),u)break}}}function jg(n,t,e,i,r,o,l){let c=fn(jn(t,Re(Re(t,-i),i)),.01);if(!c.length)return;let u=Re(c,e+.5);for(let d of Oi(fn(Re(t,-e),.001),.005)){let g=new Ui(d),v=Math.max(8,Math.ceil(g.length/.25)),_=Array.from({length:v},(w,E)=>u.some(M=>$s(g.at(E/v*g.length),M)));if(_.every(Boolean)){mf(n,t,e,r,o,l,r.stepdown);return}let b=_.indexOf(!1);for(let w=0;w<v;w++){let E=(b+w)%v;if(!_[E]||_[(E-1+v)%v])continue;let M=E;for(;_[(M+1)%v]&&M-E<v;)M++;let y=E/v*g.length,L=(M+1)/v*g.length,[z,A]=g.at(y);n.goTo(z,A,o);let R=!0;for(let D of wr(o,l,r.stepdown)){let H=[...g.breaks(y,L),L],C=R?H:[...H.slice(0,-1).reverse(),y],[k,G]=g.at(R?y:L);n.feed(k,G,D,r.plunge);for(let Y of C){let[j,q]=g.at(Y);n.feed(j,q,D,r.feed)}R=!R}n.retract()}}}function Kg(n,t,e,i,r,o){let l=Math.min(i.stepover,e*1.6),c=t.minX-e-2,u=t.maxX+e+2;for(let d of wr(r,o,i.stepdown)){let g=t.minY+e*.6;n.goTo(c,g,r),n.feed(c,g,d,i.plunge);let v=1;for(;n.feed(v>0?u:c,g,d,i.feed),!(g>=t.maxY-e*.6-1e-6);)g=Math.min(g+l,t.maxY-e*.6),n.feed(v>0?u:c,g,d,i.feed),v=-v}n.retract()}function Qg(n,t,e,i,r,o){let l=Math.max(.5,o*1.5);for(let c of t){n.goTo(c.x,c.y,i);let u=i;for(;u>r+1e-6;){let d=Math.max(r,u-l);u<i&&n.rapid(c.x,c.y,u+.5),n.feed(c.x,c.y,d,e.plunge),n.rapid(c.x,c.y,i+1),u=d}n.retract()}}function t0(n,t,e,i){let r=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!r)return null;let o=t.tabs.length??Fi(t.material).length,l=2*e+o,c=Array.from({length:r},(d,g)=>{let v=(g+.5)/r*n;return[v-l/2,v+l/2]}),u=n;return{top:i+(t.tabs.height??Fi(t.material).height),inside:d=>{let g=(d%u+u)%u;return c.some(([v,_])=>g>v&&g<_)},edges:(d,g)=>{let v=[];for(let _=Math.floor(d/u);_*u<=g;_++)for(let[b,w]of c)for(let E of[b,w]){let M=_*u+E;M>d&&M<g&&v.push(M)}return v}}}function e0(n,t,e,i,r,o,l,c){let u=[{off:e+c,fd:i}];c>0&&u.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let d of u)for(let g of Bn(t).map(v=>v[0])){let v=Oi(fn(Re([g],d.off),.001),.005).filter(_=>Kn(_)>0);for(let _ of v){let b=new Ui(_.slice().reverse()),w=t0(b.length,l,e,0),[E,M]=b.at(0);n.goTo(E,M,r),n.feed(E,M,r,i.plunge);let y=0,L=r,z=d.finish?wr(r,o,Math.max(i.stepdown,Math.min(6*e,r-o))):wr(r,o,i.stepdown);for(let A of z)y=pf(n,b,y,L,A,d.fd,w),L=A;n.retract()}}}function n0(n,t,e){let i=t.diameter/2,r=n.cell,o=t.kind==="ball",l=r*Math.SQRT1_2,c=Math.ceil((i+l)/r),u=A=>o?i-Math.sqrt(Math.max(0,i*i-A*A)):0,d=[];for(let A=-c;A<=c;A++)for(let R=-c;R<=c;R++){let D=Math.max(0,Math.hypot(R,A)*r-l);D<=i+1e-9&&d.push(R,A,u(D))}let{nx:g,ny:v,h:_,x0:b,y0:w}=n,E={r:i,c:r,n:c,zFloor:e,x:A=>b+A*r,y:A=>w+A*r};E.drop=(A,R)=>{let D=-1/0;for(let H=0;H<d.length;H+=3){let C=A+d[H],k=R+d[H+1];if(C<0||k<0||C>=g||k>=v)continue;let G=_[k*g+C]-d[H+2];G>D&&(D=G)}return D===-1/0?null:Math.max(D,e)},E.dropAt=(A,R)=>{let D=(A-b)/r,H=(R-w)/r,C=(i+l)/r,k=-1/0;for(let G=Math.max(0,Math.ceil(H-C));G<=Math.min(v-1,Math.floor(H+C));G++)for(let Y=Math.max(0,Math.ceil(D-C));Y<=Math.min(g-1,Math.floor(D+C));Y++){let j=Math.max(0,Math.hypot(Y-D,G-H)*r-l);if(j>i)continue;let q=_[G*g+Y]-u(j);q>k&&(k=q)}return k===-1/0?null:Math.max(k,e)},E.underAt=(A,R)=>{let D=(A-b)/r,H=(R-w)/r,C=(i+l)/r,k=e;for(let G=Math.max(0,Math.ceil(H-C));G<=Math.min(v-1,Math.floor(H+C));G++)for(let Y=Math.max(0,Math.ceil(D-C));Y<=Math.min(g-1,Math.floor(D+C));Y++)_[G*g+Y]>k&&(k=_[G*g+Y]);return k};let M=1/0,y=-1,L=1/0,z=-1;for(let A=0;A<v;A++)for(let R=0;R<g;R++)_[A*g+R]!==-1/0&&(R<M&&(M=R),R>y&&(y=R),A<L&&(L=A),A>z&&(z=A));return E.box=y<0?null:{i0:Math.max(0,M-c),i1:Math.min(g-1,y+c),j0:Math.max(0,L-c),j1:Math.min(v-1,z+c)},E}function gf(n,t,e,i,r,o){let l=e[0],c=n.at;if(c&&!c.r&&Math.hypot(l.x-c.x,l.y-c.y)<=r){let d=Math.max(1,Math.ceil(Math.hypot(l.x-c.x,l.y-c.y)/(t.c/2))),g=Math.max(c.z,l.z),v=!1;for(let _=1;_<d;_++){let b=_/d,w=t.dropAt(c.x+(l.x-c.x)*b,c.y+(l.y-c.y)*b)??t.zFloor;w>c.z+(l.z-c.z)*b+.001&&(v=!0,g=Math.max(g,w))}v&&(n.feed(c.x,c.y,g+.5,i.feed),n.feed(l.x,l.y,g+.5,i.feed)),n.feed(l.x,l.y,l.z,i.plunge)}else n.goTo(l.x,l.y,t.underAt(l.x,l.y)+o),n.feed(l.x,l.y,l.z,i.plunge);let u=l;for(let d of e.slice(1))n.feed(d.x,d.y,d.z,u.z-d.z>i0*Math.hypot(d.x-u.x,d.y-u.y)?i.plunge:i.feed),u=d}function s0(n,t,e,i,r,o,l,c=!0){let u=n0(t,e,o);if(!u.box)return;let{r:d,c:g}=u,{i0:v,i1:_,j0:b,j1:w}=u.box,E=e.kind==="ball"?2*Math.sqrt(Math.max(0,2*d*r-r*r)):i.stepover*.5,M=Math.max(1,Math.floor(Math.min(E,d)/g+1e-9)),y=3*M*g+1e-6,L=[];for(let z=b;z<=w;z+=M)L.push(z);L[L.length-1]!==w&&L.push(w),L.forEach((z,A)=>{let R=[],D=[];for(let H=v;H<=_;H++){let C=u.drop(H,z);if(C===null){D.length&&R.push(D),D=[];continue}D.push({x:u.x(H),y:u.y(z),z:C})}D.length&&R.push(D),A%2&&(R.reverse(),R.forEach(H=>H.reverse()));for(let H of R)gf(n,u,_f(H,.005),i,y,l)}),c&&o0(n,u,i,Math.min(E,d),y,l),n.retract()}function o0(n,t,e,i,r,o){let{i0:c,i1:u,j0:d,j1:g}=t.box,v=Math.floor((u-c)/2)+1,_=Math.floor((g-d)/2)+1,b=new Float32Array(v*_),w=-1/0;for(let A=0;A<_;A++)for(let R=0;R<v;R++){let D=t.drop(c+R*2,d+A*2);b[A*v+R]=D===null?NaN:D,D!==null&&D>w&&(w=D)}let E=2*t.c,M=r0*E,y=A=>t.x(c+A*2),L=A=>t.y(d+A*2),z=new Uint8Array(v*_);for(let A=0;A+1<_;A++)for(let R=0;R+1<v;R++){let D=b[A*v+R],H=b[A*v+R+1],C=b[(A+1)*v+R],k=b[(A+1)*v+R+1];[D,H,C,k].some(Number.isNaN)||(Math.abs(D-H)>M||Math.abs(C-k)>M||Math.abs(D-C)>M||Math.abs(H-k)>M)&&(z[A*v+R]=1)}for(let A=w-i/2;A>t.zFloor+.05;A-=i){let R=new Map,D=[],H=(Y,j,q)=>{let Z=q?`h${Y},${j}`:`v${Y},${j}`;if(!R.has(Z)){let K=b[j*v+Y],ht=q?b[j*v+Y+1]:b[(j+1)*v+Y],gt=(A-K)/(ht-K);R.set(Z,{key:Z,x:q?y(Y)+gt*E:y(Y),y:q?L(j):L(j)+gt*E,segs:[]})}return R.get(Z)};for(let Y=0;Y+1<_;Y++)for(let j=0;j+1<v;j++){if(!z[Y*v+j])continue;let q=b[Y*v+j]>A,Z=b[Y*v+j+1]>A,K=b[(Y+1)*v+j]>A,ht=b[(Y+1)*v+j+1]>A,gt=[];q!==Z&&gt.push(H(j,Y,!0)),Z!==ht&&gt.push(H(j+1,Y,!1)),K!==ht&&gt.push(H(j,Y+1,!0)),q!==K&&gt.push(H(j,Y,!1));for(let Et=0;Et+1<gt.length;Et+=2){let yt=[gt[Et],gt[Et+1]];D.push(yt),yt[0].segs.push(yt),yt[1].segs.push(yt)}}let C=new Set,k=[];for(let Y of D){if(C.has(Y))continue;C.add(Y);let j=[Y[0],Y[1]];for(let q of[!1,!0])for(;;){let Z=q?j[0]:j[j.length-1],K=Z.segs.find(gt=>!C.has(gt));if(!K)break;C.add(K);let ht=K[0]===Z?K[1]:K[0];q?j.unshift(ht):j.push(ht)}j.length>=3&&k.push(j)}let G=n.at;for(;k.length;){let Y=0,j=1/0,q=!1;k.forEach((ht,gt)=>{for(let[Et,yt]of[[ht[0],!1],[ht[ht.length-1],!0]]){let Pt=G?Math.hypot(Et.x-G.x,Et.y-G.y):0;Pt<j&&(j=Pt,Y=gt,q=yt)}});let[Z]=k.splice(Y,1);q&&Z.reverse();let K=Z.map(ht=>({x:ht.x,y:ht.y,z:Math.max(A,t.dropAt(ht.x,ht.y)??A)}));gf(n,t,_f(K,.005),e,r,o),G=n.at}}}function _f(n,t){if(n.length<3)return n;let e=new Uint8Array(n.length);e[0]=e[n.length-1]=1;let i=[[0,n.length-1]];for(;i.length;){let[r,o]=i.pop(),l=n[r],c=n[o],u=c.x-l.x,d=c.y-l.y,g=c.z-l.z,v=u*u+d*d+g*g,_=-1,b=t;for(let w=r+1;w<o;w++){let E=n[w],M=v>0?((E.x-l.x)*u+(E.y-l.y)*d+(E.z-l.z)*g)/v:0,y=Math.hypot(l.x+u*M-E.x,l.y+d*M-E.y,l.z+g*M-E.z);y>b&&(b=y,_=w)}_>=0&&(e[_]=1,i.push([r,_],[_,o]))}return n.filter((r,o)=>e[o])}function a0(n){let t=[],e=[];return n.forEach((i,r)=>{let o=[];for(let l of Bn(i.region)){let c=Di([l[0]]),u=t.find(g=>g.k===r-1&&g.b.minX<c.maxX&&c.minX<g.b.maxX&&g.b.minY<c.maxY&&c.minY<g.b.maxY&&nn(Ni(g.last,l))>0),d=u?u.spot:{parts:[]};u||e.push(d),d.parts.push({k:r,area:l}),o.push({k:r,b:c,last:l,spot:d})}t.length=0,t.push(...o)}),e.map(i=>Object.assign([...i.parts[0].area],{parts:i.parts}))}function to(n,t){let e=l=>{let c=Di([l[0]]);return[(c.minX+c.maxX)/2,(c.minY+c.maxY)/2]},i=n.map(l=>({a:l,m:e(l)})),r=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let l=0;for(let u=1;u<i.length;u++)Math.hypot(i[u].m[0]-o[0],i[u].m[1]-o[1])<Math.hypot(i[l].m[0]-o[0],i[l].m[1]-o[1])&&(l=u);let[c]=i.splice(l,1);r.push(c.a),o=c.m}return r}function l0(n,t,e,i,r,o){let l=[...new Set(n.map(u=>u.z))].sort((u,d)=>d-u),c=o;for(let u of l){if(u<t-1e-6||!eo([i,r],c0(n,u,e)))break;c=u}return Math.max(c,t)}function c0(n,t,e){let i=n.filter(c=>Math.abs(c.z-t)<1e-6);n.inner||=new Map;let r=`${t}|${e}`,o=n.inner.get(r);if(o&&o.n===i.length)return o.loops;let l=Re(Jn(i.flatMap(c=>c.area)),-e-Wg);return n.inner.set(r,{n:i.length,loops:l}),l}function vf(n){let t=n.stock.top+Gg,e=[],i=null,r=(Qn[n.job.finish]||Qn.balanced).allowance,l=n.ops.some(c=>c.kind==="face"&&c.enabled)?n.analysis.top:n.stock.top;for(let c of n.ops){let u=new Wc(t),d=c.kind!=="face"&&c.zTop>=n.analysis.top-1e-6?Math.max(c.zTop,l):c.zTop,g=c.tool.diameter/2,v=c.feeds,_=Math.min(c.tool.fluteLength||1/0,3*c.tool.diameter);switch(c.kind){case"face":Kg(u,n.stock,g,v,d,c.zBottom);break;case"pocket":case"step":case"hole":for(let b of to(Bn(c.region),u.at))ha(u,b,g,v,d,c.zBottom,r),r>0&&mf(u,b,g,v,d,c.zBottom,_);break;case"corners":{let b=n.ops.find(w=>w.id===c.after);jg(u,c.region,g,b?b.tool.diameter/2:g*2,v,d,c.zBottom);break}case"rough3d":case"rest3d":{let b=c.kind==="rough3d"?c.allowance:0,w=E=>(M,y)=>l0(e,c.layers[E].zFrom,g,M,y,d);if(i||=new Yc(n.stock,l),u.travel=(E,M)=>i.over(E,M,g),c.kind==="rest3d"){for(let E of to(a0(c.layers),u.at))for(let{k:M,area:y}of E.parts){let L=c.layers[M],z=L.zFrom>=n.analysis.top-1e-6?d:L.zFrom;ha(u,y,g,v,z,L.z,0,d+1,w(M));let A=Re(Re(y,-g),g);A.length&&c.enabled&&(e.push({zFrom:z,z:L.z,area:A}),i.layer(A,z,L.z))}u.travel=null,u.retract();break}c.layers.forEach((E,M)=>{let y=E.zFrom>=n.analysis.top-1e-6?d:E.zFrom;for(let z of to(Bn(E.region),u.at))ha(u,z,g,v,y,E.z,b,d+1,w(M));for(let z of to(Bn(E.fresh||[]),u.at))ha(u,z,g,v,d,E.z,b,d+1);b>0&&M&&Zg(u,E.exact||E.region,c.layers[M-1].exact||c.layers[M-1].region,g,v,y,E.z,w(M));let L=Re(Re([...E.region,...E.fresh||[]],-(g+b)),g);L.length&&c.enabled&&(e.push({zFrom:y,z:E.z,area:L}),i.layer(L,y,E.z))}),u.travel=null,u.retract();break}case"finish3d":s0(u,c.surface,c.tool,v,c.ridge,0,c.left??Xg,c.steep!==!1);break;case"drill":Qg(u,c.centers,v,d,c.zBottom,c.tool.diameter);break;case"cutout":e0(u,c.region,g,v,d,c.zBottom,n.job,r);break;case"chamfer":Jg(u,c.levels,v);break}c.moves=u.moves}return n}var Gg,Xg,Wg,Wc,Ui,i0,r0,Yc,yf=gn(()=>{qs();Js();Gg=3,Xg=3.5,Wg=.02;Wc=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null,this.travel=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,r){this.push({x:t,y:e,z:i,f:r})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){let r=this.at,o=this.clearZ;r&&this.travel&&(o=Math.min(o,Math.max(this.travel(r,{x:t,y:e}),r.z,i+1))),r&&this.rapid(r.x,r.y,o),this.rapid(t,e,o),this.rapid(t,e,i+1)}retract(){this.at&&!this.travel&&this.rapid(this.at.x,this.at.y,this.clearZ)}},Ui=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],r=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(r[0]-i[0],r[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,r=1;for(;r<this.s.length-1&&this.s[r]<i;)r++;let o=this.p[r-1],l=this.p[r%this.p.length],c=this.s[r]-this.s[r-1]||1,u=(i-this.s[r-1])/c;return[o[0]+(l[0]-o[0])*u,o[1]+(l[1]-o[1])*u]}breaks(t,e){let i=[],r=this.length;for(let o=Math.floor(t/r);o*r<=e;o++)for(let l=0;l<this.p.length;l++){let c=o*r+this.s[l];c>t+1e-9&&c<e-1e-9&&i.push(c)}return i}nearest([t,e]){let i=0,r=1/0;for(let o=0;o<this.p.length;o++){let l=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;l<r&&(r=l,i=this.s[o])}return i}};i0=Math.tan(70*Math.PI/180);r0=Math.tan(50*Math.PI/180);Yc=class{constructor(t,e){this.c=1,this.x0=t.minX,this.y0=t.minY,this.nx=Math.ceil((t.maxX-t.minX)/this.c)+1,this.ny=Math.ceil((t.maxY-t.minY)/this.c)+1,this.top=new Float32Array(this.nx*this.ny).fill(e)}layer(t,e,i){let{c:r,x0:o,y0:l,nx:c,ny:u,top:d}=this;for(let g=0;g<u;g++){let v=l+g*r,_=[];for(let b of t)for(let w=0;w<b.length;w++){let[E,M]=b[w],[y,L]=b[(w+1)%b.length];M<=v!=L<=v&&_.push(E+(v-M)/(L-M)*(y-E))}_.sort((b,w)=>b-w);for(let b=0;b+1<_.length;b+=2)for(let w=Math.max(0,Math.ceil((_[b]-o)/r));w<=Math.min(c-1,Math.floor((_[b+1]-o)/r));w++){let E=g*c+w;d[E]<=e+1e-6&&i<d[E]&&(d[E]=i)}}}over(t,e,i){let{c:r,x0:o,y0:l,nx:c,ny:u,top:d}=this,g=(i+1.5*r)/r,v=Math.max(1,Math.ceil(Math.hypot(e.x-t.x,e.y-t.y)/(r/2))),_=-1/0;for(let b=0;b<=v;b++){let w=(t.x+(e.x-t.x)*b/v-o)/r,E=(t.y+(e.y-t.y)*b/v-l)/r;for(let M=Math.max(0,Math.ceil(E-g));M<=Math.min(u-1,Math.floor(E+g));M++)for(let y=Math.max(0,Math.ceil(w-g));y<=Math.min(c-1,Math.floor(w+g));y++)(y-w)**2+(M-E)**2<=g*g&&d[M*c+y]>_&&(_=d[M*c+y])}return _+1}}});function xf(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:r=null,spindleDelay:o=3}=t,l=Number.isFinite(r)?`G53 G0 Z${Ki(r)}`:"G53 G0 Z0",c=n.zero,u=n.stock,d=[Jr(`ncCAM: ${e}`),Jr(`Stock ${Ki(u.width)} x ${Ki(u.depth)} x ${Ki(u.thickness)} mm, ${(Mr[n.job.material]||{}).name||n.job.material}, ${(Qn[n.job.finish]||{}).name||n.job.finish}`),Jr(`Zero: X Y at the ${u0[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],g=n.ops.filter(E=>E.enabled&&E.moves&&E.moves.length);for(let E of[...new Map(g.map(M=>[M.tool.id,M.tool])).values()])d.push(Jr(`T${br(E,i)}: ${E.name}, ${Ki(E.diameter)} mm`));d.push("G21 G90 G94 G17");let v=null,_={},b=null,w=null;for(let E of g){(!v||E.tool.id!==v.id)&&(v&&d.push("M5"),d.push(l,`M6 T${br(E.tool,i)}`,Jr(E.tool.name)),v=E.tool,d.push(`M3 S${E.feeds.rpm}`),o>0&&d.push(`G4 P${o}`),_={},b=null,w=null),d.push(Jr(`${E.label}${E.detail?": "+E.detail:""}`));for(let M of E.moves){let y=Ki(M.x-c.x),L=Ki(M.y-c.y),z=Ki(M.z-c.z);if(M.r&&(y!==_.x||L!==_.y)&&z!==_.z){let H=_.z===void 0||+z<+_.z?[`X${y} Y${L}`,`Z${z}`]:[`Z${z}`,`X${y} Y${L}`];for(let C of H)d.push(`${w==="G0"?"":"G0 "}${C}`),w="G0";_={x:y,y:L,z};continue}let A=M.r?"G0":"G1",R=A===w?"":A;y!==_.x&&(R+=` X${y}`),L!==_.y&&(R+=` Y${L}`),z!==_.z&&(R+=` Z${z}`),!M.r&&M.f!==b&&(R+=` F${Math.round(M.f)}`,b=M.f),R=R.trim(),!(!R||R===A)&&(d.push(R),w=A,_={x:y,y:L,z})}}return d.push("M5",l,"M30",""),d.join(`
`)}function Mf(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let r=0,o=null,l=null;for(let c of n.ops){if(!c.enabled||!c.moves)continue;(!l||c.tool.id!==l.id)&&(r+=e+(l?i:0),l=c.tool);let u=0;for(let d of c.moves){if(o){let g=Math.hypot(d.x-o.x,d.y-o.y,d.z-o.z);u+=g/(d.r?t:d.f)*60}o=d}c.seconds=u,r+=u}return r}var Ki,h0,Jr,u0,bf=gn(()=>{Js();Ki=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},h0={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Jr=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>h0[t]??"")})`,u0={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});var $c=gn(()=>{Oc();Qu();nf();df();yf();bf();kc();Js();Vc();qs()});function d0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function p0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Od(){let n=mo("canvas");return n.style.display="block",n}function go(...n){let t="THREE."+n.shift();vs?vs("log",t,...n):console.log(t,...n)}function Fd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ge(...n){n=Fd(n);let t="THREE."+n.shift();if(vs)vs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ve(...n){n=Fd(n);let t="THREE."+n.shift();if(vs)vs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Pr(...n){let t=n.join(" ");t in Ef||(Ef[t]=!0,ge(...n))}function Ud(n,t,e){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Gi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Le(n,t,e){return Math.max(t,Math.min(e,n))}function Kh(n,t){return(n%t+t)%t}function m0(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function g0(n,t,e){return n!==t?(e-n)/(t-n):0}function ho(n,t,e){return(1-e)*n+e*t}function _0(n,t,e,i){return ho(n,t,1-Math.exp(-e*i))}function v0(n,t=1){return t-Math.abs(Kh(n,t*2)-t)}function y0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function x0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function M0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function b0(n,t){return n+Math.random()*(t-n)}function S0(n){return n*(.5-Math.random())}function w0(n){n!==void 0&&(Tf=n);let t=Tf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function E0(n){return n*ps}function T0(n){return n*ys}function A0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function C0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function P0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function I0(n,t,e,i,r){let o=Math.cos,l=Math.sin,c=o(e/2),u=l(e/2),d=o((t+i)/2),g=l((t+i)/2),v=o((t-i)/2),_=l((t-i)/2),b=o((i-t)/2),w=l((i-t)/2);switch(r){case"XYX":n.set(c*g,u*v,u*_,c*d);break;case"YZY":n.set(u*_,c*g,u*v,c*d);break;case"ZXZ":n.set(u*v,u*_,c*g,c*d);break;case"XZX":n.set(c*g,u*w,u*b,c*d);break;case"YXY":n.set(u*b,c*g,u*w,c*d);break;case"ZYZ":n.set(u*w,u*b,c*g,c*d);break;default:ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function li(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function R0(){let n={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Ve&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ve&&(r.r=ms(r.r),r.g=ms(r.g),r.b=ms(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?po:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fo]:{primaries:t,whitePoint:i,transfer:po,toXYZ:Cf,fromXYZ:Pf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:i,transfer:Ve,toXYZ:Cf,fromXYZ:Pf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),n}function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ja.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ge("Texture: Unable to serialize Texture."),{})}function th(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function lh(n,t,e,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){Tr.fromArray(n,o);let c=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),u=t.dot(Tr),d=e.dot(Tr),g=i.dot(Tr);if(Math.max(-Math.max(u,d,g),Math.min(u,d,g))>c)return!1}return!0}function xa(n,t,e,i,r,o){hs.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(ao.x=o*hs.x-r*hs.y,ao.y=r*hs.x+o*hs.y):ao.copy(hs),n.copy(t),n.x+=ao.x,n.y+=ao.y,n.applyMatrix4(zd)}function $0(n,t,e,i,r,o,l,c){let u;if(t.side===Rn?u=i.intersectTriangle(l,o,r,!0,c):u=i.intersectTriangle(r,o,l,t.side===pr,c),u===null)return null;Ca.copy(c),Ca.applyMatrix4(n.matrixWorld);let d=e.ray.origin.distanceTo(Ca);return d<e.near||d>e.far?null:{distance:d,point:Ca.clone(),object:n}}function Pa(n,t,e,i,r,o,l,c,u,d){n.getVertexPosition(c,wa),n.getVertexPosition(u,Ea),n.getVertexPosition(d,Ta);let g=$0(n,t,e,i,wa,Ea,Ta,Hf);if(g){let v=new ut;xi.getBarycoord(Hf,wa,Ea,Ta,v),r&&(g.uv=xi.getInterpolatedAttribute(r,c,u,d,v,new ue)),o&&(g.uv1=xi.getInterpolatedAttribute(o,c,u,d,v,new ue)),l&&(g.normal=xi.getInterpolatedAttribute(l,c,u,d,v,new ut),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));let _={a:c,b:u,c:d,normal:new ut,materialIndex:0};xi.getNormal(wa,Ea,Ta,_.normal),g.face=_,g.barycoord=v}return g}function La(n,t,e,i,r,o,l){let c=n.geometry.attributes.position;if(nl.fromBufferAttribute(c,r),il.fromBufferAttribute(c,o),e.distanceSqToSegment(nl,il,mh,Xf)>i)return;mh.applyMatrix4(n.matrixWorld);let d=t.ray.origin.distanceTo(mh);if(!(d<t.near||d>t.far))return{distance:d,point:Xf.clone().applyMatrix4(n.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:n}}function Fr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];if($f(r))r.isRenderTargetTexture?(ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if($f(r[0])){let o=[];for(let l=0,c=r.length;l<c;l++)o[l]=r[l].clone();t[e][i]=o}else t[e][i]=r.slice();else t[e][i]=r}}return t}function Tn(n){let t={};for(let e=0;e<n.length;e++){let i=Fr(n[e]);for(let r in i)t[r]=i[r]}return t}function $f(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Z0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function tu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}function us(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function _h(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Hd(n,t,e,i,r){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*r}function K0(n,t,e,i,r){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(r-i)}function Q0(n,t,e,i,r){let o=(n-t)/(r-t);for(let l=0;l<8;l++){let c=Hd(o,t,e,i,r)-n;if(Math.abs(c)<1e-10)break;let u=K0(o,t,e,i,r);if(Math.abs(u)<1e-10)break;o=Math.max(0,Math.min(1,o-c/u))}return o}function qf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function td(n,t){return n.distance-t.distance}function Th(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let o=n.children;for(let l=0,c=o.length;l<c;l++)Th(o[l],t,e,!0)}}function iu(n,t,e,i){let r=l_(i);switch(e){case $h:return n*t;case Zh:return n*t/r.components*r.byteLength;case Al:return n*t/r.components*r.byteLength;case vr:return n*t*2/r.components*r.byteLength;case Cl:return n*t*2/r.components*r.byteLength;case qh:return n*t*3/r.components*r.byteLength;case ni:return n*t*4/r.components*r.byteLength;case Pl:return n*t*4/r.components*r.byteLength;case ko:case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vo:case Ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Nl:return Math.max(n,16)*Math.max(t,8)/4;case Il:case Ll:return Math.max(n,8)*Math.max(t,8)/2;case Dl:case Ol:case Ul:case Bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fl:case Go:case kl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case tc:case ec:case nc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ic:case rc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xo:case sc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l_(n){switch(n){case On:case Gh:return{byteLength:1,components:1};case Ls:case Xh:case mi:return{byteLength:2,components:1};case El:case Tl:return{byteLength:2,components:4};case di:case wl:case pi:return{byteLength:4,components:1};case Wh:case Yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var fr,dr,nd,Ch,id,Fo,rd,Is,pr,Rn,En,Ei,Rs,Ph,Ih,Rh,sd,Nr,od,ad,ld,cd,hd,ud,fd,dd,Lh,Nh,pd,md,gd,_d,vd,yd,xd,Md,bd,Va,Ha,Ga,gs,Xa,Wa,Ya,$a,Dh,Sd,wd,fi,Oh,Fh,Uh,Bh,kh,zh,Vh,Hh,mr,Dr,Ml,bl,Uo,qa,Mi,Za,pn,Ed,Bo,yn,Sl,gr,On,Gh,Xh,Ls,wl,di,pi,mi,El,Tl,Ns,Wh,Yh,$h,qh,ni,bi,_r,Zh,Al,vr,Cl,Pl,ko,zo,Vo,Ho,Il,Rl,Ll,Nl,Dl,Ol,Fl,Ul,Bl,Go,kl,zl,Vl,Hl,Gl,Xl,Wl,Yl,$l,ql,Zl,Jl,jl,Kl,Ql,tc,ec,nc,ic,rc,Xo,sc,uo,Ja,ka,xh,Mh,bh,Sh,Td,oc,Ad,Yi,Pn,fo,po,Ve,za,Cd,Pd,Id,Rd,ac,Ld,Nd,lc,Dd,Jh,Or,jh,ci,_s,Ef,vs,Bd,hi,bn,Tf,ps,ys,Qh,ue,Gn,ut,Zc,Af,we,Jc,Cf,Pf,Oe,jr,ja,L0,xs,N0,Kc,In,Qe,Ka,Dn,_o,Qa,Xe,Kr,si,D0,O0,Qi,ua,zn,If,Rf,Wi,Ms,F0,Lf,Qr,Bi,fa,no,U0,B0,Nf,Df,Of,Ff,k0,ts,Qc,an,ei,z0,bs,kd,tr,da,be,Sn,vo,oi,ki,eh,zi,es,ns,Uf,nh,ih,rh,sh,oh,ah,xi,rr,Vi,ai,pa,is,rs,ss,er,nr,Er,io,ma,ga,Tr,on,_a,V0,Ye,yo,xo,$e,H0,ro,ch,Ir,G0,ti,hh,os,Vn,so,dn,Ke,tl,Cn,Mo,uh,X0,W0,Hn,Y0,Si,Ss,as,oo,ls,cs,hs,ao,zd,va,lo,ya,Bf,fh,kf,bo,Hi,dh,Ma,ba,sr,Xn,zf,Ar,Sa,Vf,wa,Ea,Ta,ph,Aa,Hf,Ca,ke,el,Cr,q0,Ia,ws,ui,nl,il,Gf,co,Ra,mh,Xf,Rr,Wf,Yf,Lr,So,wo,or,rl,Eo,ar,wi,Es,Na,Da,gh,Oa,Ts,To,Ao,lr,Vd,J0,j0,Wn,sl,Yn,ol,al,Co,cr,ll,cl,hl,ul,$n,hr,fl,dl,pl,Po,ur,ml,gl,Gd,_l,Io,Ro,vh,Zf,Jf,vl,Fa,Ua,yi,Lo,ir,jf,Kf,wn,As,wh,Cs,fs,ds,yl,xl,eu,t_,nu,e_,n_,i_,r_,s_,o_,a_,Eh,je,Kb,Qf,No,Ps,Ah,ed,Ba,yh,Do,Oo,ru=gn(()=>{fr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nd=0,Ch=1,id=2,Fo=1,rd=2,Is=3,pr=0,Rn=1,En=2,Ei=0,Rs=1,Ph=2,Ih=3,Rh=4,sd=5,Nr=100,od=101,ad=102,ld=103,cd=104,hd=200,ud=201,fd=202,dd=203,Lh=204,Nh=205,pd=206,md=207,gd=208,_d=209,vd=210,yd=211,xd=212,Md=213,bd=214,Va=0,Ha=1,Ga=2,gs=3,Xa=4,Wa=5,Ya=6,$a=7,Dh=0,Sd=1,wd=2,fi=0,Oh=1,Fh=2,Uh=3,Bh=4,kh=5,zh=6,Vh=7,Hh=300,mr=301,Dr=302,Ml=303,bl=304,Uo=306,qa=1e3,Mi=1001,Za=1002,pn=1003,Ed=1004,Bo=1005,yn=1006,Sl=1007,gr=1008,On=1009,Gh=1010,Xh=1011,Ls=1012,wl=1013,di=1014,pi=1015,mi=1016,El=1017,Tl=1018,Ns=1020,Wh=35902,Yh=35899,$h=1021,qh=1022,ni=1023,bi=1026,_r=1027,Zh=1028,Al=1029,vr=1030,Cl=1031,Pl=1033,ko=33776,zo=33777,Vo=33778,Ho=33779,Il=35840,Rl=35841,Ll=35842,Nl=35843,Dl=36196,Ol=37492,Fl=37496,Ul=37488,Bl=37489,Go=37490,kl=37491,zl=37808,Vl=37809,Hl=37810,Gl=37811,Xl=37812,Wl=37813,Yl=37814,$l=37815,ql=37816,Zl=37817,Jl=37818,jl=37819,Kl=37820,Ql=37821,tc=36492,ec=36494,nc=36495,ic=36283,rc=36284,Xo=36285,sc=36286,uo=2300,Ja=2301,ka=2302,xh=2303,Mh=2400,bh=2401,Sh=2402,Td=3200,oc=0,Ad=1,Yi="",Pn="srgb",fo="srgb-linear",po="linear",Ve="srgb",za=7680,Cd=519,Pd=512,Id=513,Rd=514,ac=515,Ld=516,Nd=517,lc=518,Dd=519,Jh=35044,Or=35048,jh="300 es",ci=2e3,_s=2001;Ef={},vs=null;Bd={[Va]:Ha,[Ga]:Ya,[Xa]:$a,[gs]:Wa,[Ha]:Va,[Ya]:Ga,[$a]:Xa,[Wa]:gs},hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tf=1234567,ps=Math.PI/180,ys=180/Math.PI;Qh={DEG2RAD:ps,RAD2DEG:ys,generateUUID:Gi,clamp:Le,euclideanModulo:Kh,mapLinear:m0,inverseLerp:g0,lerp:ho,damp:_0,pingpong:v0,smoothstep:y0,smootherstep:x0,randInt:M0,randFloat:b0,randFloatSpread:S0,seededRandom:w0,degToRad:E0,radToDeg:T0,isPowerOfTwo:A0,ceilPowerOfTwo:C0,floorPowerOfTwo:P0,setQuaternionFromProperEuler:I0,normalize:Ge,denormalize:li},ue=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Le(this.x,t.x,e.x),this.y=Le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Le(this.x,t,e),this.y=Le(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*i-l*r+t.x,this.y=o*r+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gn=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,o,l,c){let u=i[r+0],d=i[r+1],g=i[r+2],v=i[r+3],_=o[l+0],b=o[l+1],w=o[l+2],E=o[l+3];if(v!==E||u!==_||d!==b||g!==w){let M=u*_+d*b+g*w+v*E;M<0&&(_=-_,b=-b,w=-w,E=-E,M=-M);let y=1-c;if(M<.9995){let L=Math.acos(M),z=Math.sin(L);y=Math.sin(y*L)/z,c=Math.sin(c*L)/z,u=u*y+_*c,d=d*y+b*c,g=g*y+w*c,v=v*y+E*c}else{u=u*y+_*c,d=d*y+b*c,g=g*y+w*c,v=v*y+E*c;let L=1/Math.sqrt(u*u+d*d+g*g+v*v);u*=L,d*=L,g*=L,v*=L}}t[e]=u,t[e+1]=d,t[e+2]=g,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,r,o,l){let c=i[r],u=i[r+1],d=i[r+2],g=i[r+3],v=o[l],_=o[l+1],b=o[l+2],w=o[l+3];return t[e]=c*w+g*v+u*b-d*_,t[e+1]=u*w+g*_+d*v-c*b,t[e+2]=d*w+g*b+c*_-u*v,t[e+3]=g*w-c*v-u*_-d*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,o=t._z,l=t._order,c=Math.cos,u=Math.sin,d=c(i/2),g=c(r/2),v=c(o/2),_=u(i/2),b=u(r/2),w=u(o/2);switch(l){case"XYZ":this._x=_*g*v+d*b*w,this._y=d*b*v-_*g*w,this._z=d*g*w+_*b*v,this._w=d*g*v-_*b*w;break;case"YXZ":this._x=_*g*v+d*b*w,this._y=d*b*v-_*g*w,this._z=d*g*w-_*b*v,this._w=d*g*v+_*b*w;break;case"ZXY":this._x=_*g*v-d*b*w,this._y=d*b*v+_*g*w,this._z=d*g*w+_*b*v,this._w=d*g*v-_*b*w;break;case"ZYX":this._x=_*g*v-d*b*w,this._y=d*b*v+_*g*w,this._z=d*g*w-_*b*v,this._w=d*g*v+_*b*w;break;case"YZX":this._x=_*g*v+d*b*w,this._y=d*b*v+_*g*w,this._z=d*g*w-_*b*v,this._w=d*g*v-_*b*w;break;case"XZY":this._x=_*g*v-d*b*w,this._y=d*b*v-_*g*w,this._z=d*g*w+_*b*v,this._w=d*g*v+_*b*w;break;default:ge("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],o=e[8],l=e[1],c=e[5],u=e[9],d=e[2],g=e[6],v=e[10],_=i+c+v;if(_>0){let b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(g-u)*b,this._y=(o-d)*b,this._z=(l-r)*b}else if(i>c&&i>v){let b=2*Math.sqrt(1+i-c-v);this._w=(g-u)/b,this._x=.25*b,this._y=(r+l)/b,this._z=(o+d)/b}else if(c>v){let b=2*Math.sqrt(1+c-i-v);this._w=(o-d)/b,this._x=(r+l)/b,this._y=.25*b,this._z=(u+g)/b}else{let b=2*Math.sqrt(1+v-i-c);this._w=(l-r)/b,this._x=(o+d)/b,this._y=(u+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,o=t._z,l=t._w,c=e._x,u=e._y,d=e._z,g=e._w;return this._x=i*g+l*c+r*d-o*u,this._y=r*g+l*u+o*c-i*d,this._z=o*g+l*d+i*u-r*c,this._w=l*g-i*c-r*u-o*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,o=t._z,l=t._w,c=this.dot(t);c<0&&(i=-i,r=-r,o=-o,l=-l,c=-c);let u=1-e;if(c<.9995){let d=Math.acos(c),g=Math.sin(d);u=Math.sin(u*d)/g,e=Math.sin(e*d)/g,this._x=this._x*u+i*e,this._y=this._y*u+r*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+r*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ut=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Af.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Af.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*r,this.y=o[1]*e+o[4]*i+o[7]*r,this.z=o[2]*e+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=t.elements,l=1/(o[3]*e+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*e+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*e+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,o=t.x,l=t.y,c=t.z,u=t.w,d=2*(l*r-c*i),g=2*(c*e-o*r),v=2*(o*i-l*e);return this.x=e+u*d+l*v-c*g,this.y=i+u*g+c*d-o*v,this.z=r+u*v+o*g-l*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r,this.y=o[1]*e+o[5]*i+o[9]*r,this.z=o[2]*e+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Le(this.x,t.x,e.x),this.y=Le(this.y,t.y,e.y),this.z=Le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Le(this.x,t,e),this.y=Le(this.y,t,e),this.z=Le(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,o=t.z,l=e.x,c=e.y,u=e.z;return this.x=r*u-o*c,this.y=o*l-i*u,this.z=i*c-r*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zc.copy(this).projectOnVector(t),this.sub(Zc)}reflect(t){return this.sub(Zc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zc=new ut,Af=new Gn,we=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,r,o,l,c,u,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,c,u,d)}set(t,e,i,r,o,l,c,u,d){let g=this.elements;return g[0]=t,g[1]=r,g[2]=c,g[3]=e,g[4]=o,g[5]=u,g[6]=i,g[7]=l,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,l=i[0],c=i[3],u=i[6],d=i[1],g=i[4],v=i[7],_=i[2],b=i[5],w=i[8],E=r[0],M=r[3],y=r[6],L=r[1],z=r[4],A=r[7],R=r[2],D=r[5],H=r[8];return o[0]=l*E+c*L+u*R,o[3]=l*M+c*z+u*D,o[6]=l*y+c*A+u*H,o[1]=d*E+g*L+v*R,o[4]=d*M+g*z+v*D,o[7]=d*y+g*A+v*H,o[2]=_*E+b*L+w*R,o[5]=_*M+b*z+w*D,o[8]=_*y+b*A+w*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],c=t[5],u=t[6],d=t[7],g=t[8];return e*l*g-e*c*d-i*o*g+i*c*u+r*o*d-r*l*u}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],c=t[5],u=t[6],d=t[7],g=t[8],v=g*l-c*d,_=c*u-g*o,b=d*o-l*u,w=e*v+i*_+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=v*E,t[1]=(r*d-g*i)*E,t[2]=(c*i-r*l)*E,t[3]=_*E,t[4]=(g*e-r*u)*E,t[5]=(r*o-c*e)*E,t[6]=b*E,t[7]=(i*u-d*e)*E,t[8]=(l*e-i*o)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,o,l,c){let u=Math.cos(o),d=Math.sin(o);return this.set(i*u,i*d,-i*(u*l+d*c)+l+t,-r*d,r*u,-r*(-d*l+u*c)+c+e,0,0,1),this}scale(t,e){return Pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jc.makeScale(t,e)),this}rotate(t){return Pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jc.makeRotation(-t)),this}translate(t,e){return Pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jc=new we,Cf=new we().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pf=new we().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Oe=R0();ja=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{jr===void 0&&(jr=mo("canvas")),jr.width=t.width,jr.height=t.height;let r=jr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=jr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=mo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Xi(o[l]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xi(e[i]/255)*255):e[i]=Xi(e[i]);return{data:e,width:t.width,height:t.height}}else return ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},L0=0,xs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?o.push(jc(r[l].image)):o.push(jc(r[l]))}else o=jc(r);i.url=o}return e||(t.images[this.uuid]=i),i}};N0=0,Kc=new ut,In=class n extends hi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Mi,r=Mi,o=yn,l=gr,c=ni,u=On,d=n.DEFAULT_ANISOTROPY,g=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Gi(),this.name="",this.source=new xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=u,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ge(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){ge(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qa:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qa:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Hh;In.DEFAULT_ANISOTROPY=1;Qe=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*e+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*e+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*e+l[7]*i+l[11]*r+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,o,u=t.elements,d=u[0],g=u[4],v=u[8],_=u[1],b=u[5],w=u[9],E=u[2],M=u[6],y=u[10];if(Math.abs(g-_)<.01&&Math.abs(v-E)<.01&&Math.abs(w-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+E)<.1&&Math.abs(w+M)<.1&&Math.abs(d+b+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let z=(d+1)/2,A=(b+1)/2,R=(y+1)/2,D=(g+_)/4,H=(v+E)/4,C=(w+M)/4;return z>A&&z>R?z<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(z),r=D/i,o=H/i):A>R?A<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(A),i=D/r,o=C/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=H/o,r=C/o),this.set(i,r,o,e),this}let L=Math.sqrt((M-w)*(M-w)+(v-E)*(v-E)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(M-w)/L,this.y=(v-E)/L,this.z=(_-g)/L,this.w=Math.acos((d+b+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Le(this.x,t.x,e.x),this.y=Le(this.y,t.y,e.y),this.z=Le(this.z,t.z,e.z),this.w=Le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Le(this.x,t,e),this.y=Le(this.y,t,e),this.z=Le(this.z,t,e),this.w=Le(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends hi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Qe(0,0,t,e),this.scissorTest=!1,this.viewport=new Qe(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},o=new In(r),l=i.count;for(let c=0;c<l;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new xs(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Ka{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},_o=class extends In{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Qa=class extends In{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Xe=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,r,o,l,c,u,d,g,v,_,b,w,E,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,c,u,d,g,v,_,b,w,E,M)}set(t,e,i,r,o,l,c,u,d,g,v,_,b,w,E,M){let y=this.elements;return y[0]=t,y[4]=e,y[8]=i,y[12]=r,y[1]=o,y[5]=l,y[9]=c,y[13]=u,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=b,y[7]=w,y[11]=E,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,r=1/Kr.setFromMatrixColumn(t,0).length(),o=1/Kr.setFromMatrixColumn(t,1).length(),l=1/Kr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,o=t.z,l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r),g=Math.cos(o),v=Math.sin(o);if(t.order==="XYZ"){let _=l*g,b=l*v,w=c*g,E=c*v;e[0]=u*g,e[4]=-u*v,e[8]=d,e[1]=b+w*d,e[5]=_-E*d,e[9]=-c*u,e[2]=E-_*d,e[6]=w+b*d,e[10]=l*u}else if(t.order==="YXZ"){let _=u*g,b=u*v,w=d*g,E=d*v;e[0]=_+E*c,e[4]=w*c-b,e[8]=l*d,e[1]=l*v,e[5]=l*g,e[9]=-c,e[2]=b*c-w,e[6]=E+_*c,e[10]=l*u}else if(t.order==="ZXY"){let _=u*g,b=u*v,w=d*g,E=d*v;e[0]=_-E*c,e[4]=-l*v,e[8]=w+b*c,e[1]=b+w*c,e[5]=l*g,e[9]=E-_*c,e[2]=-l*d,e[6]=c,e[10]=l*u}else if(t.order==="ZYX"){let _=l*g,b=l*v,w=c*g,E=c*v;e[0]=u*g,e[4]=w*d-b,e[8]=_*d+E,e[1]=u*v,e[5]=E*d+_,e[9]=b*d-w,e[2]=-d,e[6]=c*u,e[10]=l*u}else if(t.order==="YZX"){let _=l*u,b=l*d,w=c*u,E=c*d;e[0]=u*g,e[4]=E-_*v,e[8]=w*v+b,e[1]=v,e[5]=l*g,e[9]=-c*g,e[2]=-d*g,e[6]=b*v+w,e[10]=_-E*v}else if(t.order==="XZY"){let _=l*u,b=l*d,w=c*u,E=c*d;e[0]=u*g,e[4]=-v,e[8]=d*g,e[1]=_*v+E,e[5]=l*g,e[9]=b*v-w,e[2]=w*v-b,e[6]=c*g,e[10]=E*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(D0,t,O0)}lookAt(t,e,i){let r=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Qi.crossVectors(i,zn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Qi.crossVectors(i,zn)),Qi.normalize(),ua.crossVectors(zn,Qi),r[0]=Qi.x,r[4]=ua.x,r[8]=zn.x,r[1]=Qi.y,r[5]=ua.y,r[9]=zn.y,r[2]=Qi.z,r[6]=ua.z,r[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,l=i[0],c=i[4],u=i[8],d=i[12],g=i[1],v=i[5],_=i[9],b=i[13],w=i[2],E=i[6],M=i[10],y=i[14],L=i[3],z=i[7],A=i[11],R=i[15],D=r[0],H=r[4],C=r[8],k=r[12],G=r[1],Y=r[5],j=r[9],q=r[13],Z=r[2],K=r[6],ht=r[10],gt=r[14],Et=r[3],yt=r[7],Pt=r[11],Rt=r[15];return o[0]=l*D+c*G+u*Z+d*Et,o[4]=l*H+c*Y+u*K+d*yt,o[8]=l*C+c*j+u*ht+d*Pt,o[12]=l*k+c*q+u*gt+d*Rt,o[1]=g*D+v*G+_*Z+b*Et,o[5]=g*H+v*Y+_*K+b*yt,o[9]=g*C+v*j+_*ht+b*Pt,o[13]=g*k+v*q+_*gt+b*Rt,o[2]=w*D+E*G+M*Z+y*Et,o[6]=w*H+E*Y+M*K+y*yt,o[10]=w*C+E*j+M*ht+y*Pt,o[14]=w*k+E*q+M*gt+y*Rt,o[3]=L*D+z*G+A*Z+R*Et,o[7]=L*H+z*Y+A*K+R*yt,o[11]=L*C+z*j+A*ht+R*Pt,o[15]=L*k+z*q+A*gt+R*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[12],l=t[1],c=t[5],u=t[9],d=t[13],g=t[2],v=t[6],_=t[10],b=t[14],w=t[3],E=t[7],M=t[11],y=t[15],L=u*b-d*_,z=c*b-d*v,A=c*_-u*v,R=l*b-d*g,D=l*_-u*g,H=l*v-c*g;return e*(E*L-M*z+y*A)-i*(w*L-M*R+y*D)+r*(w*z-E*R+y*H)-o*(w*A-E*D+M*H)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[1],l=t[5],c=t[9],u=t[2],d=t[6],g=t[10];return e*(l*g-c*d)-i*(o*g-c*u)+r*(o*d-l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],c=t[5],u=t[6],d=t[7],g=t[8],v=t[9],_=t[10],b=t[11],w=t[12],E=t[13],M=t[14],y=t[15],L=e*c-i*l,z=e*u-r*l,A=e*d-o*l,R=i*u-r*c,D=i*d-o*c,H=r*d-o*u,C=g*E-v*w,k=g*M-_*w,G=g*y-b*w,Y=v*M-_*E,j=v*y-b*E,q=_*y-b*M,Z=L*q-z*j+A*Y+R*G-D*k+H*C;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/Z;return t[0]=(c*q-u*j+d*Y)*K,t[1]=(r*j-i*q-o*Y)*K,t[2]=(E*H-M*D+y*R)*K,t[3]=(_*D-v*H-b*R)*K,t[4]=(u*G-l*q-d*k)*K,t[5]=(e*q-r*G+o*k)*K,t[6]=(M*A-w*H-y*z)*K,t[7]=(g*H-_*A+b*z)*K,t[8]=(l*j-c*G+d*C)*K,t[9]=(i*G-e*j-o*C)*K,t[10]=(w*D-E*A+y*L)*K,t[11]=(v*A-g*D-b*L)*K,t[12]=(c*k-l*Y-u*C)*K,t[13]=(e*Y-i*k+r*C)*K,t[14]=(E*z-w*R-M*L)*K,t[15]=(g*R-v*z+_*L)*K,this}scale(t){let e=this.elements,i=t.x,r=t.y,o=t.z;return e[0]*=i,e[4]*=r,e[8]*=o,e[1]*=i,e[5]*=r,e[9]*=o,e[2]*=i,e[6]*=r,e[10]*=o,e[3]*=i,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),o=1-i,l=t.x,c=t.y,u=t.z,d=o*l,g=o*c;return this.set(d*l+i,d*c-r*u,d*u+r*c,0,d*c+r*u,g*c+i,g*u-r*l,0,d*u-r*c,g*u+r*l,o*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,o,l){return this.set(1,i,o,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,o=e._x,l=e._y,c=e._z,u=e._w,d=o+o,g=l+l,v=c+c,_=o*d,b=o*g,w=o*v,E=l*g,M=l*v,y=c*v,L=u*d,z=u*g,A=u*v,R=i.x,D=i.y,H=i.z;return r[0]=(1-(E+y))*R,r[1]=(b+A)*R,r[2]=(w-z)*R,r[3]=0,r[4]=(b-A)*D,r[5]=(1-(_+y))*D,r[6]=(M+L)*D,r[7]=0,r[8]=(w+z)*H,r[9]=(M-L)*H,r[10]=(1-(_+E))*H,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let l=Kr.set(r[0],r[1],r[2]).length(),c=Kr.set(r[4],r[5],r[6]).length(),u=Kr.set(r[8],r[9],r[10]).length();o<0&&(l=-l),si.copy(this);let d=1/l,g=1/c,v=1/u;return si.elements[0]*=d,si.elements[1]*=d,si.elements[2]*=d,si.elements[4]*=g,si.elements[5]*=g,si.elements[6]*=g,si.elements[8]*=v,si.elements[9]*=v,si.elements[10]*=v,e.setFromRotationMatrix(si),i.x=l,i.y=c,i.z=u,this}makePerspective(t,e,i,r,o,l,c=ci,u=!1){let d=this.elements,g=2*o/(e-t),v=2*o/(i-r),_=(e+t)/(e-t),b=(i+r)/(i-r),w,E;if(u)w=o/(l-o),E=l*o/(l-o);else if(c===ci)w=-(l+o)/(l-o),E=-2*l*o/(l-o);else if(c===_s)w=-l/(l-o),E=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=b,d[13]=0,d[2]=0,d[6]=0,d[10]=w,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,o,l,c=ci,u=!1){let d=this.elements,g=2/(e-t),v=2/(i-r),_=-(e+t)/(e-t),b=-(i+r)/(i-r),w,E;if(u)w=1/(l-o),E=l/(l-o);else if(c===ci)w=-2/(l-o),E=-(l+o)/(l-o);else if(c===_s)w=-1/(l-o),E=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=b,d[2]=0,d[6]=0,d[10]=w,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Kr=new ut,si=new Xe,D0=new ut(0,0,0),O0=new ut(1,1,1),Qi=new ut,ua=new ut,zn=new ut,If=new Xe,Rf=new Gn,Wi=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,o=r[0],l=r[4],c=r[8],u=r[1],d=r[5],g=r[9],v=r[2],_=r[6],b=r[10];switch(e){case"XYZ":this._y=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,b),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(Le(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-Le(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(c,b));break;case"XZY":this._z=Math.asin(-Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-g,b),this._y=0);break;default:ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return If.makeRotationFromQuaternion(t),this.setFromRotationMatrix(If,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rf.setFromEuler(this),this.setFromQuaternion(Rf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";Ms=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},F0=0,Lf=new ut,Qr=new Gn,Bi=new Xe,fa=new ut,no=new ut,U0=new ut,B0=new Gn,Nf=new ut(1,0,0),Df=new ut(0,1,0),Of=new ut(0,0,1),Ff={type:"added"},k0={type:"removed"},ts={type:"childadded",child:null},Qc={type:"childremoved",child:null},an=class n extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new ut,e=new Wi,i=new Gn,r=new ut(1,1,1);function o(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new we}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qr.setFromAxisAngle(t,e),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(t,e){return Qr.setFromAxisAngle(t,e),this.quaternion.premultiply(Qr),this}rotateX(t){return this.rotateOnAxis(Nf,t)}rotateY(t){return this.rotateOnAxis(Df,t)}rotateZ(t){return this.rotateOnAxis(Of,t)}translateOnAxis(t,e){return Lf.copy(t).applyQuaternion(this.quaternion),this.position.add(Lf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nf,t)}translateY(t){return this.translateOnAxis(Df,t)}translateZ(t){return this.translateOnAxis(Of,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?fa.copy(t):fa.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(no,fa,this.up):Bi.lookAt(fa,no,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(Bi),this.quaternion.premultiply(Qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ff),ts.child=t,this.dispatchEvent(ts),ts.child=null):ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(k0),Qc.child=t,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ff),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,U0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,B0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*r,o[13]+=i-o[1]*e-o[5]*i-o[9]*r,o[14]+=r-o[2]*e-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let u=c.shapes;if(Array.isArray(u))for(let d=0,g=u.length;d<g;d++){let v=u[d];o(t.shapes,v)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let u=0,d=this.material.length;u<d;u++)c.push(o(t.materials,this.material[u]));r.material=c}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){let u=this.animations[c];r.animations.push(o(t.animations,u))}}if(e){let c=l(t.geometries),u=l(t.materials),d=l(t.textures),g=l(t.images),v=l(t.shapes),_=l(t.skeletons),b=l(t.animations),w=l(t.nodes);c.length>0&&(i.geometries=c),u.length>0&&(i.materials=u),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),b.length>0&&(i.animations=b),w.length>0&&(i.nodes=w)}return i.object=r,i;function l(c){let u=[];for(let d in c){let g=c[d];delete g.metadata,u.push(g)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new ut(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ei=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},z0={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,o=null,l=null,c=this._targetRay,u=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){l=!0;for(let E of t.hand.values()){let M=e.getJointPose(E,i),y=this._getHandJoint(d,E);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}let g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),b=.02,w=.005;d.inputState.pinching&&_>b+w?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=b-w&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ei;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},da={h:0,s:0,l:0};be=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Oe.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Oe.workingColorSpace){if(t=Kh(t,1),e=Le(e,0,1),i=Le(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,l=2*i-o;this.r=th(l,o,t+1/3),this.g=th(l,o,t),this.b=th(l,o,t-1/3)}return Oe.colorSpaceToWorking(this,r),this}setStyle(t,e=Pn){function i(o){o!==void 0&&parseFloat(o)<1&&ge("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:ge("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);ge("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){let i=kd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ge("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return Oe.workingToColorSpace(Sn.copy(this),t),Math.round(Le(Sn.r*255,0,255))*65536+Math.round(Le(Sn.g*255,0,255))*256+Math.round(Le(Sn.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Oe.workingColorSpace){Oe.workingToColorSpace(Sn.copy(this),e);let i=Sn.r,r=Sn.g,o=Sn.b,l=Math.max(i,r,o),c=Math.min(i,r,o),u,d,g=(c+l)/2;if(c===l)u=0,d=0;else{let v=l-c;switch(d=g<=.5?v/(l+c):v/(2-l-c),l){case i:u=(r-o)/v+(r<o?6:0);break;case r:u=(o-i)/v+2;break;case o:u=(i-r)/v+4;break}u/=6}return t.h=u,t.s=d,t.l=g,t}getRGB(t,e=Oe.workingColorSpace){return Oe.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=Pn){Oe.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,i=Sn.g,r=Sn.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(tr),this.setHSL(tr.h+t,tr.s+e,tr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(tr),t.getHSL(da);let i=ho(tr.h,da.h,e),r=ho(tr.s,da.s,e),o=ho(tr.l,da.l,e);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*r,this.g=o[1]*e+o[4]*i+o[7]*r,this.b=o[2]*e+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new be;be.NAMES=kd;vo=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},oi=new ut,ki=new ut,eh=new ut,zi=new ut,es=new ut,ns=new ut,Uf=new ut,nh=new ut,ih=new ut,rh=new ut,sh=new Qe,oh=new Qe,ah=new Qe,xi=class n{constructor(t=new ut,e=new ut,i=new ut){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),oi.subVectors(t,e),r.cross(oi);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,i,r,o){oi.subVectors(r,e),ki.subVectors(i,e),eh.subVectors(t,e);let l=oi.dot(oi),c=oi.dot(ki),u=oi.dot(eh),d=ki.dot(ki),g=ki.dot(eh),v=l*d-c*c;if(v===0)return o.set(0,0,0),null;let _=1/v,b=(d*u-c*g)*_,w=(l*g-c*u)*_;return o.set(1-b-w,w,b)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(t,e,i,r,o,l,c,u){return this.getBarycoord(t,e,i,r,zi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,zi.x),u.addScaledVector(l,zi.y),u.addScaledVector(c,zi.z),u)}static getInterpolatedAttribute(t,e,i,r,o,l){return sh.setScalar(0),oh.setScalar(0),ah.setScalar(0),sh.fromBufferAttribute(t,e),oh.fromBufferAttribute(t,i),ah.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(sh,o.x),l.addScaledVector(oh,o.y),l.addScaledVector(ah,o.z),l}static isFrontFacing(t,e,i,r){return oi.subVectors(i,e),ki.subVectors(t,e),oi.cross(ki).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),oi.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,o=this.c,l,c;es.subVectors(r,i),ns.subVectors(o,i),nh.subVectors(t,i);let u=es.dot(nh),d=ns.dot(nh);if(u<=0&&d<=0)return e.copy(i);ih.subVectors(t,r);let g=es.dot(ih),v=ns.dot(ih);if(g>=0&&v<=g)return e.copy(r);let _=u*v-g*d;if(_<=0&&u>=0&&g<=0)return l=u/(u-g),e.copy(i).addScaledVector(es,l);rh.subVectors(t,o);let b=es.dot(rh),w=ns.dot(rh);if(w>=0&&b<=w)return e.copy(o);let E=b*d-u*w;if(E<=0&&d>=0&&w<=0)return c=d/(d-w),e.copy(i).addScaledVector(ns,c);let M=g*w-b*v;if(M<=0&&v-g>=0&&b-w>=0)return Uf.subVectors(o,r),c=(v-g)/(v-g+(b-w)),e.copy(r).addScaledVector(Uf,c);let y=1/(M+E+_);return l=E*y,c=_*y,e.copy(i).addScaledVector(es,l).addScaledVector(ns,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rr=class{constructor(t=new ut(1/0,1/0,1/0),e=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=o.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,ai):ai.fromBufferAttribute(o,l),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let r=t.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),ma.subVectors(this.max,io),is.subVectors(t.a,io),rs.subVectors(t.b,io),ss.subVectors(t.c,io),er.subVectors(rs,is),nr.subVectors(ss,rs),Er.subVectors(is,ss);let e=[0,-er.z,er.y,0,-nr.z,nr.y,0,-Er.z,Er.y,er.z,0,-er.x,nr.z,0,-nr.x,Er.z,0,-Er.x,-er.y,er.x,0,-nr.y,nr.x,0,-Er.y,Er.x,0];return!lh(e,is,rs,ss,ma)||(e=[1,0,0,0,1,0,0,0,1],!lh(e,is,rs,ss,ma))?!1:(ga.crossVectors(er,nr),e=[ga.x,ga.y,ga.z],lh(e,is,rs,ss,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Vi=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],ai=new ut,pa=new rr,is=new ut,rs=new ut,ss=new ut,er=new ut,nr=new ut,Er=new ut,io=new ut,ma=new ut,ga=new ut,Tr=new ut;on=new ut,_a=new ue,V0=0,Ye=class extends hi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Jh,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_a.fromBufferAttribute(this,e),_a.applyMatrix3(t),this.setXY(e,_a.x,_a.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),o=Ge(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},yo=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}},xo=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}},$e=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},H0=new rr,ro=new ut,ch=new ut,Ir=class{constructor(t=new ut,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):H0.setFromPoints(t).getCenter(i);let r=0;for(let o=0,l=t.length;o<l;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);let e=ro.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ro,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(ch)),this.expandByPoint(ro.copy(t.center).sub(ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},G0=0,ti=new Xe,hh=new an,os=new ut,Vn=new rr,so=new rr,dn=new ut,Ke=class n extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(d0(t)?xo:yo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new we().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return hh.lookAt(t),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,o=t.length;r<o;r++){let l=t[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new $e(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let o=e[i];Vn.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){let i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){let c=e[o];so.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(Vn.min,so.min),Vn.expandByPoint(dn),dn.addVectors(Vn.max,so.max),Vn.expandByPoint(dn)):(Vn.expandByPoint(so.min),Vn.expandByPoint(so.max))}Vn.getCenter(i);let r=0;for(let o=0,l=t.count;o<l;o++)dn.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(dn));if(e)for(let o=0,l=e.length;o<l;o++){let c=e[o],u=this.morphTargetsRelative;for(let d=0,g=c.count;d<g;d++)dn.fromBufferAttribute(c,d),u&&(os.fromBufferAttribute(t,d),dn.add(os)),r=Math.max(r,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,o=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==i.count)&&(l=new Ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",l));let c=[],u=[];for(let C=0;C<i.count;C++)c[C]=new ut,u[C]=new ut;let d=new ut,g=new ut,v=new ut,_=new ue,b=new ue,w=new ue,E=new ut,M=new ut;function y(C,k,G){d.fromBufferAttribute(i,C),g.fromBufferAttribute(i,k),v.fromBufferAttribute(i,G),_.fromBufferAttribute(o,C),b.fromBufferAttribute(o,k),w.fromBufferAttribute(o,G),g.sub(d),v.sub(d),b.sub(_),w.sub(_);let Y=1/(b.x*w.y-w.x*b.y);isFinite(Y)&&(E.copy(g).multiplyScalar(w.y).addScaledVector(v,-b.y).multiplyScalar(Y),M.copy(v).multiplyScalar(b.x).addScaledVector(g,-w.x).multiplyScalar(Y),c[C].add(E),c[k].add(E),c[G].add(E),u[C].add(M),u[k].add(M),u[G].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let C=0,k=L.length;C<k;++C){let G=L[C],Y=G.start,j=G.count;for(let q=Y,Z=Y+j;q<Z;q+=3)y(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let z=new ut,A=new ut,R=new ut,D=new ut;function H(C){R.fromBufferAttribute(r,C),D.copy(R);let k=c[C];z.copy(k),z.sub(R.multiplyScalar(R.dot(k))).normalize(),A.crossVectors(D,k);let Y=A.dot(u[C])<0?-1:1;l.setXYZW(C,z.x,z.y,z.z,Y)}for(let C=0,k=L.length;C<k;++C){let G=L[C],Y=G.start,j=G.count;for(let q=Y,Z=Y+j;q<Z;q+=3)H(t.getX(q+0)),H(t.getX(q+1)),H(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,b=i.count;_<b;_++)i.setXYZ(_,0,0,0);let r=new ut,o=new ut,l=new ut,c=new ut,u=new ut,d=new ut,g=new ut,v=new ut;if(t)for(let _=0,b=t.count;_<b;_+=3){let w=t.getX(_+0),E=t.getX(_+1),M=t.getX(_+2);r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,E),l.fromBufferAttribute(e,M),g.subVectors(l,o),v.subVectors(r,o),g.cross(v),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),c.add(g),u.add(g),d.add(g),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,b=e.count;_<b;_+=3)r.fromBufferAttribute(e,_+0),o.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),g.subVectors(l,o),v.subVectors(r,o),g.cross(v),i.setXYZ(_+0,g.x,g.y,g.z),i.setXYZ(_+1,g.x,g.y,g.z),i.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(c,u){let d=c.array,g=c.itemSize,v=c.normalized,_=new d.constructor(u.length*g),b=0,w=0;for(let E=0,M=u.length;E<M;E++){c.isInterleavedBufferAttribute?b=u[E]*c.data.stride+c.offset:b=u[E]*g;for(let y=0;y<g;y++)_[w++]=d[b++]}return new Ye(_,g,v)}if(this.index===null)return ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let c in r){let u=r[c],d=t(u,i);e.setAttribute(c,d)}let o=this.morphAttributes;for(let c in o){let u=[],d=o[c];for(let g=0,v=d.length;g<v;g++){let _=d[g],b=t(_,i);u.push(b)}e.morphAttributes[c]=u}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let c=0,u=l.length;c<u;c++){let d=l[c];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let d in u)u[d]!==void 0&&(t[d]=u[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let d=i[u];t.data.attributes[u]=d.toJSON(t.data)}let r={},o=!1;for(let u in this.morphAttributes){let d=this.morphAttributes[u],g=[];for(let v=0,_=d.length;v<_;v++){let b=d[v];g.push(b.toJSON(t.data))}g.length>0&&(r[u]=g,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let d in r){let g=r[d];this.setAttribute(d,g.clone(e))}let o=t.morphAttributes;for(let d in o){let g=[],v=o[d];for(let _=0,b=v.length;_<b;_++)g.push(v[_].clone(e));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let d=0,g=l.length;d<g;d++){let v=l[d];this.addGroup(v.start,v.count,v.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},tl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jh,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Cn=new ut,Mo=class n{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),o=Ge(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},uh=new ut,X0=new ut,W0=new we,Hn=class{constructor(t=new ut(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=uh.subVectors(i,e).cross(X0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(uh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(r,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||W0.getNormalMatrix(t),r=this.coplanarPoint(uh).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Y0=0,Si=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Rs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ge(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){ge(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}if(e){let o=r(t.textures),l=r(t.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new be().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Hn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ue().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ss=class extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},oo=new ut,ls=new ut,cs=new ut,hs=new ue,ao=new ue,zd=new Xe,va=new ut,lo=new ut,ya=new ut,Bf=new ue,fh=new ue,kf=new ue,bo=class extends an{constructor(t=new Ss){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new tl(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new Mo(i,3,0,!1)),as.setAttribute("uv",new Mo(i,2,3,!1))}this.geometry=as,this.material=t,this.center=new ue(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),zd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-cs.z);let i=this.material.rotation,r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));let l=this.center;xa(va.set(-.5,-.5,0),cs,l,ls,r,o),xa(lo.set(.5,-.5,0),cs,l,ls,r,o),xa(ya.set(.5,.5,0),cs,l,ls,r,o),Bf.set(0,0),fh.set(1,0),kf.set(1,1);let c=t.ray.intersectTriangle(va,lo,ya,!1,oo);if(c===null&&(xa(lo.set(-.5,.5,0),cs,l,ls,r,o),fh.set(0,1),c=t.ray.intersectTriangle(va,ya,lo,!1,oo),c===null))return;let u=t.ray.origin.distanceTo(oo);u<t.near||u>t.far||e.push({distance:u,point:oo.clone(),uv:xi.getInterpolation(oo,va,lo,ya,Bf,fh,kf,new ue),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Hi=new ut,dh=new ut,Ma=new ut,ba=new ut,sr=class{constructor(t=new ut,e=new ut(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){dh.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),ba.copy(this.origin).sub(dh);let o=t.distanceTo(e)*.5,l=-this.direction.dot(Ma),c=ba.dot(this.direction),u=-ba.dot(Ma),d=ba.lengthSq(),g=Math.abs(1-l*l),v,_,b,w;if(g>0)if(v=l*u-c,_=l*c-u,w=o*g,v>=0)if(_>=-w)if(_<=w){let E=1/g;v*=E,_*=E,b=v*(v+l*_+2*c)+_*(l*v+_+2*u)+d}else _=o,v=Math.max(0,-(l*_+c)),b=-v*v+_*(_+2*u)+d;else _=-o,v=Math.max(0,-(l*_+c)),b=-v*v+_*(_+2*u)+d;else _<=-w?(v=Math.max(0,-(-l*o+c)),_=v>0?-o:Math.min(Math.max(-o,-u),o),b=-v*v+_*(_+2*u)+d):_<=w?(v=0,_=Math.min(Math.max(-o,-u),o),b=_*(_+2*u)+d):(v=Math.max(0,-(l*o+c)),_=v>0?o:Math.min(Math.max(-o,-u),o),b=-v*v+_*(_+2*u)+d);else _=l>0?-o:o,v=Math.max(0,-(l*_+c)),b=-v*v+_*(_+2*u)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(dh).addScaledVector(Ma,_),b}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);let i=Hi.dot(this.direction),r=Hi.dot(Hi)-i*i,o=t.radius*t.radius;if(r>o)return null;let l=Math.sqrt(o-r),c=i-l,u=i+l;return u<0?null:c<0?this.at(u,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,o,l,c,u,d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(i=(t.min.x-_.x)*d,r=(t.max.x-_.x)*d):(i=(t.max.x-_.x)*d,r=(t.min.x-_.x)*d),g>=0?(o=(t.min.y-_.y)*g,l=(t.max.y-_.y)*g):(o=(t.max.y-_.y)*g,l=(t.min.y-_.y)*g),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),v>=0?(c=(t.min.z-_.z)*v,u=(t.max.z-_.z)*v):(c=(t.max.z-_.z)*v,u=(t.min.z-_.z)*v),i>u||c>r)||((c>i||i!==i)&&(i=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,r,o){let l=this.origin,c=this.direction,u=c.x,d=c.y,g=c.z,v=t.x-l.x,_=t.y-l.y,b=t.z-l.z,w=e.x-l.x,E=e.y-l.y,M=e.z-l.z,y=i.x-l.x,L=i.y-l.y,z=i.z-l.z,A=Math.abs(u),R=Math.abs(d),D=Math.abs(g),H,C,k,G,Y,j,q,Z,K,ht,gt,Et;if(A>=R&&A>=D?(k=u,j=v,K=w,Et=y,u>=0?(H=d,C=g,G=_,Y=b,q=E,Z=M,ht=L,gt=z):(H=g,C=d,G=b,Y=_,q=M,Z=E,ht=z,gt=L)):R>=D?(k=d,j=_,K=E,Et=L,d>=0?(H=g,C=u,G=b,Y=v,q=M,Z=w,ht=z,gt=y):(H=u,C=g,G=v,Y=b,q=w,Z=M,ht=y,gt=z)):(k=g,j=b,K=M,Et=z,g>=0?(H=u,C=d,G=v,Y=_,q=w,Z=E,ht=y,gt=L):(H=d,C=u,G=_,Y=v,q=E,Z=w,ht=L,gt=y)),k===0)return null;let yt=H/k,Pt=C/k,Rt=1/k,jt=G-yt*j,at=Y-Pt*j,Bt=q-yt*K,Vt=Z-Pt*K,Gt=ht-yt*Et,ft=gt-Pt*Et,St=Gt*Vt-ft*Bt,Ut=jt*ft-at*Gt,Ot=Bt*at-Vt*jt;if(r){if(St<0||Ut<0||Ot<0)return null}else if((St<0||Ut<0||Ot<0)&&(St>0||Ut>0||Ot>0))return null;let zt=St+Ut+Ot;if(zt===0)return null;let it=Rt*(St*j+Ut*K+Ot*Et);return(zt>0?it<0:it>0)?null:this.at(it/zt,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xn=class extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},zf=new Xe,Ar=new sr,Sa=new Ir,Vf=new ut,wa=new ut,Ea=new ut,Ta=new ut,ph=new ut,Aa=new ut,Hf=new ut,Ca=new ut,ke=class extends an{constructor(t=new Ke,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){let c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let c=this.morphTargetInfluences;if(o&&c){Aa.set(0,0,0);for(let u=0,d=o.length;u<d;u++){let g=c[u],v=o[u];g!==0&&(ph.fromBufferAttribute(v,t),l?Aa.addScaledVector(ph,g):Aa.addScaledVector(ph.sub(e),g))}e.add(Aa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(o),Ar.copy(t.ray).recast(t.near),!(Sa.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Sa,Vf)===null||Ar.origin.distanceToSquared(Vf)>(t.far-t.near)**2))&&(zf.copy(o).invert(),Ar.copy(t.ray).applyMatrix4(zf),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ar)))}_computeIntersections(t,e,i){let r,o=this.geometry,l=this.material,c=o.index,u=o.attributes.position,d=o.attributes.uv,g=o.attributes.uv1,v=o.attributes.normal,_=o.groups,b=o.drawRange;if(c!==null)if(Array.isArray(l))for(let w=0,E=_.length;w<E;w++){let M=_[w],y=l[M.materialIndex],L=Math.max(M.start,b.start),z=Math.min(c.count,Math.min(M.start+M.count,b.start+b.count));for(let A=L,R=z;A<R;A+=3){let D=c.getX(A),H=c.getX(A+1),C=c.getX(A+2);r=Pa(this,y,t,i,d,g,v,D,H,C),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=M.materialIndex,e.push(r))}}else{let w=Math.max(0,b.start),E=Math.min(c.count,b.start+b.count);for(let M=w,y=E;M<y;M+=3){let L=c.getX(M),z=c.getX(M+1),A=c.getX(M+2);r=Pa(this,l,t,i,d,g,v,L,z,A),r&&(r.faceIndex=Math.floor(M/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let w=0,E=_.length;w<E;w++){let M=_[w],y=l[M.materialIndex],L=Math.max(M.start,b.start),z=Math.min(u.count,Math.min(M.start+M.count,b.start+b.count));for(let A=L,R=z;A<R;A+=3){let D=A,H=A+1,C=A+2;r=Pa(this,y,t,i,d,g,v,D,H,C),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=M.materialIndex,e.push(r))}}else{let w=Math.max(0,b.start),E=Math.min(u.count,b.start+b.count);for(let M=w,y=E;M<y;M+=3){let L=M,z=M+1,A=M+2;r=Pa(this,l,t,i,d,g,v,L,z,A),r&&(r.faceIndex=Math.floor(M/3),e.push(r))}}}};el=class extends In{constructor(t=null,e=1,i=1,r,o,l,c,u,d=pn,g=pn,v,_){super(null,l,c,u,d,g,r,o,v,_),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Cr=new Ir,q0=new ue(.5,.5),Ia=new ut,ws=class{constructor(t=new Hn,e=new Hn,i=new Hn,r=new Hn,o=new Hn,l=new Hn){this.planes=[t,e,i,r,o,l]}set(t,e,i,r,o,l){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(r),c[4].copy(o),c[5].copy(l),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci,i=!1){let r=this.planes,o=t.elements,l=o[0],c=o[1],u=o[2],d=o[3],g=o[4],v=o[5],_=o[6],b=o[7],w=o[8],E=o[9],M=o[10],y=o[11],L=o[12],z=o[13],A=o[14],R=o[15];if(r[0].setComponents(d-l,b-g,y-w,R-L).normalize(),r[1].setComponents(d+l,b+g,y+w,R+L).normalize(),r[2].setComponents(d+c,b+v,y+E,R+z).normalize(),r[3].setComponents(d-c,b-v,y-E,R-z).normalize(),i)r[4].setComponents(u,_,M,A).normalize(),r[5].setComponents(d-u,b-_,y-M,R-A).normalize();else if(r[4].setComponents(d-u,b-_,y-M,R-A).normalize(),e===ci)r[5].setComponents(d+u,b+_,y+M,R+A).normalize();else if(e===_s)r[5].setComponents(u,_,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(t){Cr.center.set(0,0,0);let e=q0.distanceTo(t.center);return Cr.radius=.7071067811865476+e,Cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Ia.x=r.normal.x>0?t.max.x:t.min.x,Ia.y=r.normal.y>0?t.max.y:t.min.y,Ia.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ui=class extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},nl=new ut,il=new ut,Gf=new Xe,co=new sr,Ra=new Ir,mh=new ut,Xf=new ut,Rr=class extends an{constructor(t=new Ke,e=new ui){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,o=e.count;r<o;r++)nl.fromBufferAttribute(e,r-1),il.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=nl.distanceTo(il);t.setAttribute("lineDistance",new $e(i,1))}else ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=o,t.ray.intersectsSphere(Ra)===!1)return;Gf.copy(r).invert(),co.copy(t.ray).applyMatrix4(Gf);let c=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,d=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){let b=Math.max(0,l.start),w=Math.min(g.count,l.start+l.count);for(let E=b,M=w-1;E<M;E+=d){let y=g.getX(E),L=g.getX(E+1),z=La(this,t,co,u,y,L,E);z&&e.push(z)}if(this.isLineLoop){let E=g.getX(w-1),M=g.getX(b),y=La(this,t,co,u,E,M,w-1);y&&e.push(y)}}else{let b=Math.max(0,l.start),w=Math.min(_.count,l.start+l.count);for(let E=b,M=w-1;E<M;E+=d){let y=La(this,t,co,u,E,E+1,E);y&&e.push(y)}if(this.isLineLoop){let E=La(this,t,co,u,w-1,b,w-1);E&&e.push(E)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){let c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}};Wf=new ut,Yf=new ut,Lr=class extends Rr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,o=e.count;r<o;r+=2)Wf.fromBufferAttribute(e,r),Yf.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Wf.distanceTo(Yf);t.setAttribute("lineDistance",new $e(i,1))}else ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},So=class extends In{constructor(t=[],e=mr,i,r,o,l,c,u,d,g){super(t,e,i,r,o,l,c,u,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wo=class extends In{constructor(t,e,i,r,o,l,c,u,d){super(t,e,i,r,o,l,c,u,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},or=class extends In{constructor(t,e,i=di,r,o,l,c=pn,u=pn,d,g=bi,v=1){if(g!==bi&&g!==_r)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let _={width:t,height:e,depth:v};super(_,r,o,l,c,u,g,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},rl=class extends or{constructor(t,e=di,i=mr,r,o,l=pn,c=pn,u,d=bi){let g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,e,i,r,o,l,c,u,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Eo=class extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ar=class n extends Ke{constructor(t=1,e=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};let c=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);let u=[],d=[],g=[],v=[],_=0,b=0;w("z","y","x",-1,-1,i,e,t,l,o,0),w("z","y","x",1,-1,i,e,-t,l,o,1),w("x","z","y",1,1,t,i,e,r,l,2),w("x","z","y",1,-1,t,i,-e,r,l,3),w("x","y","z",1,-1,t,e,i,r,o,4),w("x","y","z",-1,-1,t,e,-i,r,o,5),this.setIndex(u),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(v,2));function w(E,M,y,L,z,A,R,D,H,C,k){let G=A/H,Y=R/C,j=A/2,q=R/2,Z=D/2,K=H+1,ht=C+1,gt=0,Et=0,yt=new ut;for(let Pt=0;Pt<ht;Pt++){let Rt=Pt*Y-q;for(let jt=0;jt<K;jt++){let at=jt*G-j;yt[E]=at*L,yt[M]=Rt*z,yt[y]=Z,d.push(yt.x,yt.y,yt.z),yt[E]=0,yt[M]=0,yt[y]=D>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(jt/H),v.push(1-Pt/C),gt+=1}}for(let Pt=0;Pt<C;Pt++)for(let Rt=0;Rt<H;Rt++){let jt=_+Rt+K*Pt,at=_+Rt+K*(Pt+1),Bt=_+(Rt+1)+K*(Pt+1),Vt=_+(Rt+1)+K*Pt;u.push(jt,at,Vt),u.push(at,Bt,Vt),Et+=6}c.addGroup(b,Et,k),b+=Et,_+=gt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wi=class n extends Ke{constructor(t=1,e=1,i=1,r=32,o=1,l=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:c,thetaLength:u};let d=this;r=Math.floor(r),o=Math.floor(o);let g=[],v=[],_=[],b=[],w=0,E=[],M=i/2,y=0;L(),l===!1&&(t>0&&z(!0),e>0&&z(!1)),this.setIndex(g),this.setAttribute("position",new $e(v,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(b,2));function L(){let A=new ut,R=new ut,D=0,H=(e-t)/i;for(let C=0;C<=o;C++){let k=[],G=C/o,Y=G*(e-t)+t;for(let j=0;j<=r;j++){let q=j/r,Z=q*u+c,K=Math.sin(Z),ht=Math.cos(Z);R.x=Y*K,R.y=-G*i+M,R.z=Y*ht,v.push(R.x,R.y,R.z),A.set(K,H,ht).normalize(),_.push(A.x,A.y,A.z),b.push(q,1-G),k.push(w++)}E.push(k)}for(let C=0;C<r;C++)for(let k=0;k<o;k++){let G=E[k][C],Y=E[k+1][C],j=E[k+1][C+1],q=E[k][C+1];(t>0||k!==0)&&(g.push(G,Y,q),D+=3),(e>0||k!==o-1)&&(g.push(Y,j,q),D+=3)}d.addGroup(y,D,0),y+=D}function z(A){let R=w,D=new ue,H=new ut,C=0,k=A===!0?t:e,G=A===!0?1:-1;for(let j=1;j<=r;j++)v.push(0,M*G,0),_.push(0,G,0),b.push(.5,.5),w++;let Y=w;for(let j=0;j<=r;j++){let Z=j/r*u+c,K=Math.cos(Z),ht=Math.sin(Z);H.x=k*ht,H.y=M*G,H.z=k*K,v.push(H.x,H.y,H.z),_.push(0,G,0),D.x=K*.5+.5,D.y=ht*.5*G+.5,b.push(D.x,D.y),w++}for(let j=0;j<r;j++){let q=R+j,Z=Y+j;A===!0?g.push(Z,Z+1,q):g.push(Z+1,Z,q),C+=3}d.addGroup(y,C,A===!0?1:2),y+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Es=class n extends wi{constructor(t=1,e=1,i=32,r=1,o=!1,l=0,c=Math.PI*2){super(0,t,e,i,r,o,l,c),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Na=new ut,Da=new ut,gh=new ut,Oa=new xi,Ts=class extends Ke{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),o=Math.cos(ps*e),l=t.getIndex(),c=t.getAttribute("position"),u=l?l.count:c.count,d=[0,0,0],g=["a","b","c"],v=new Array(3),_={},b=[];for(let w=0;w<u;w+=3){l?(d[0]=l.getX(w),d[1]=l.getX(w+1),d[2]=l.getX(w+2)):(d[0]=w,d[1]=w+1,d[2]=w+2);let{a:E,b:M,c:y}=Oa;if(E.fromBufferAttribute(c,d[0]),M.fromBufferAttribute(c,d[1]),y.fromBufferAttribute(c,d[2]),Oa.getNormal(gh),v[0]=`${Math.round(E.x*r)},${Math.round(E.y*r)},${Math.round(E.z*r)}`,v[1]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,v[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let L=0;L<3;L++){let z=(L+1)%3,A=v[L],R=v[z],D=Oa[g[L]],H=Oa[g[z]],C=`${A}_${R}`,k=`${R}_${A}`;k in _&&_[k]?(gh.dot(_[k].normal)<=o&&(b.push(D.x,D.y,D.z),b.push(H.x,H.y,H.z)),_[k]=null):C in _||(_[C]={index0:d[L],index1:d[z],normal:gh.clone()})}}for(let w in _)if(_[w]){let{index0:E,index1:M}=_[w];Na.fromBufferAttribute(c,E),Da.fromBufferAttribute(c,M),b.push(Na.x,Na.y,Na.z),b.push(Da.x,Da.y,Da.z)}this.setAttribute("position",new $e(b,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},To=class n extends Ke{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let o=t/2,l=e/2,c=Math.floor(i),u=Math.floor(r),d=c+1,g=u+1,v=t/c,_=e/u,b=[],w=[],E=[],M=[];for(let y=0;y<g;y++){let L=y*_-l;for(let z=0;z<d;z++){let A=z*v-o;w.push(A,-L,0),E.push(0,0,1),M.push(z/c),M.push(1-y/u)}}for(let y=0;y<u;y++)for(let L=0;L<c;L++){let z=L+d*y,A=L+d*(y+1),R=L+1+d*(y+1),D=L+1+d*y;b.push(z,A,D),b.push(A,R,D)}this.setIndex(b),this.setAttribute("position",new $e(w,3)),this.setAttribute("normal",new $e(E,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ao=class n extends Ke{constructor(t=.5,e=1,i=32,r=1,o=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:l},i=Math.max(3,i),r=Math.max(1,r);let c=[],u=[],d=[],g=[],v=t,_=(e-t)/r,b=new ut,w=new ue;for(let E=0;E<=r;E++){for(let M=0;M<=i;M++){let y=o+M/i*l;b.x=v*Math.cos(y),b.y=v*Math.sin(y),u.push(b.x,b.y,b.z),d.push(0,0,1),w.x=(b.x/e+1)/2,w.y=(b.y/e+1)/2,g.push(w.x,w.y)}v+=_}for(let E=0;E<r;E++){let M=E*(i+1);for(let y=0;y<i;y++){let L=y+M,z=L,A=L+i+1,R=L+i+2,D=L+1;c.push(z,A,D),c.push(A,R,D)}}this.setIndex(c),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},lr=class n extends Ke{constructor(t=1,e=32,i=16,r=0,o=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:c},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let u=Math.min(l+c,Math.PI),d=0,g=[],v=new ut,_=new ut,b=[],w=[],E=[],M=[];for(let y=0;y<=i;y++){let L=[],z=y/i,A=l+z*c,R=t*Math.cos(A),D=Math.sqrt(t*t-R*R),H=0;y===0&&l===0?H=.5/e:y===i&&u===Math.PI&&(H=-.5/e);for(let C=0;C<=e;C++){let k=C/e,G=r+k*o;v.x=-D*Math.cos(G),v.y=R,v.z=D*Math.sin(G),w.push(v.x,v.y,v.z),_.copy(v).normalize(),E.push(_.x,_.y,_.z),M.push(k+H,1-z),L.push(d++)}g.push(L)}for(let y=0;y<i;y++)for(let L=0;L<e;L++){let z=g[y][L+1],A=g[y][L],R=g[y+1][L],D=g[y+1][L+1];(y!==0||l>0)&&b.push(z,A,D),(y!==i-1||u<Math.PI)&&b.push(A,R,D)}this.setIndex(b),this.setAttribute("position",new $e(w,3)),this.setAttribute("normal",new $e(E,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};Vd={clone:Fr,merge:Tn},J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wn=class extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=j0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=Z0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new be().setHex(r.value);break;case"v2":this.uniforms[i].value=new ue().fromArray(r.value);break;case"v3":this.uniforms[i].value=new ut().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"m3":this.uniforms[i].value=new we().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Xe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},sl=class extends Wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yn=class extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ol=class extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},al=class extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Co=class extends ui{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};cr=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],o=e[i-1];n:{t:{let l;e:{i:if(!(t<r)){for(let c=i+2;;){if(r===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(o=r,r=e[++i],t<r)break t}l=e.length;break e}if(!(t>=o)){let c=e[1];t<c&&(i=2,o=c);for(let u=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(r=o,o=e[--i-1],t>=o)break t}l=i,i=0;break e}break n}for(;i<l;){let c=i+l>>>1;t<e[c]?l=c:i=c+1}if(r=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r;for(let l=0;l!==r;++l)e[l]=i[o+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ll=class extends cr{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(t,e,i){let r=this.parameterPositions,o=t-2,l=t+1,c=r[o],u=r[l];if(c===void 0)switch(this.getSettings_().endingStart){case bh:o=t,c=2*e-i;break;case Sh:o=r.length-2,c=e+r[o]-r[o+1];break;default:o=t,c=i}if(u===void 0)switch(this.getSettings_().endingEnd){case bh:l=t,u=2*i-e;break;case Sh:l=1,u=i+r[1]-r[0];break;default:l=t-1,u=e}let d=(i-e)*.5,g=this.valueSize;this._weightPrev=d/(e-c),this._weightNext=d/(u-i),this._offsetPrev=o*g,this._offsetNext=l*g}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=t*c,d=u-c,g=this._offsetPrev,v=this._offsetNext,_=this._weightPrev,b=this._weightNext,w=(i-e)/(r-e),E=w*w,M=E*w,y=-_*M+2*_*E-_*w,L=(1+_)*M+(-1.5-2*_)*E+(-.5+_)*w+1,z=(-1-b)*M+(1.5+b)*E+.5*w,A=b*M-b*E;for(let R=0;R!==c;++R)o[R]=y*l[g+R]+L*l[d+R]+z*l[u+R]+A*l[v+R];return o}},cl=class extends cr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=t*c,d=u-c,g=(i-e)/(r-e),v=1-g;for(let _=0;_!==c;++_)o[_]=l[d+_]*v+l[u+_]*g;return o}},hl=class extends cr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ul=class extends cr{interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=t*c,d=u-c,g=this.inTangents,v=this.outTangents;if(!g||!v){let w=(i-e)/(r-e),E=1-w;for(let M=0;M!==c;++M)o[M]=l[d+M]*E+l[u+M]*w;return o}let _=c*2,b=t-1;for(let w=0;w!==c;++w){let E=l[d+w],M=l[u+w],y=b*_+w*2,L=v[y],z=v[y+1],A=t*_+w*2,R=g[A],D=g[A+1],H=Q0(i,e,L,R,r);o[w]=Hd(H,E,z,D,M)}return o}};$n=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=us(e,this.TimeBufferType),this.values=us(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:us(t.times,Array),values:us(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),_h(t.settings)&&(i.settings={inTangents:us(t.settings.inTangents,Array),outTangents:us(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ul(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case uo:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break;case xh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ge("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return uo;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return ka;case this.InterpolantFactoryMethodBezier:return xh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;_h(this.settings)&&(qf(this.settings.inTangents,t),qf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,o=0,l=r-1;for(;o!==r&&i[o]<t;)++o;for(;l!==-1&&i[l]>e;)--l;if(++l,o!==0||l!==r){o>=l&&(l=Math.max(l,1),o=l-1);let c=this.getValueSize();this.times=i.slice(o,l),this.values=this.values.slice(o*c,l*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ve("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,o=i.length;o===0&&(ve("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let c=0;c!==o;c++){let u=i[c];if(typeof u=="number"&&isNaN(u)){ve("KeyframeTrack: Time is not a valid number.",this,c,u),t=!1;break}if(l!==null&&l>u){ve("KeyframeTrack: Out of order keys.",this,c,u,l),t=!1;break}l=u}if(r!==void 0&&p0(r))for(let c=0,u=r.length;c!==u;++c){let d=r[c];if(isNaN(d)){ve("KeyframeTrack: Value is not a valid number.",this,c,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ka,o=t.length-1,l=1;for(let c=1;c<o;++c){let u=!1,d=t[c],g=t[c+1];if(d!==g&&(c!==1||d!==t[0]))if(r)u=!0;else{let v=c*i,_=v-i,b=v+i;for(let w=0;w!==i;++w){let E=e[v+w];if(E!==e[_+w]||E!==e[b+w]){u=!0;break}}}if(u){if(c!==l){t[l]=t[c];let v=c*i,_=l*i;for(let b=0;b!==i;++b)e[_+b]=e[v+b]}++l}}if(o>0){t[l]=t[o];for(let c=o*i,u=l*i,d=0;d!==i;++d)e[u+d]=e[c+d];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,_h(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Ja;hr=class extends $n{constructor(t,e,i){super(t,e,i)}};hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=uo;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;fl=class extends $n{constructor(t,e,i,r){super(t,e,i,r)}};fl.prototype.ValueTypeName="color";dl=class extends $n{constructor(t,e,i,r){super(t,e,i,r)}};dl.prototype.ValueTypeName="number";pl=class extends cr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=(i-e)/(r-e),d=t*c;for(let g=d+c;d!==g;d+=4)Gn.slerpFlat(o,0,l,d-c,l,d,u);return o}},Po=class extends $n{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}};Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;ur=class extends $n{constructor(t,e,i){super(t,e,i)}};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=uo;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;ml=class extends $n{constructor(t,e,i,r){super(t,e,i,r)}};ml.prototype.ValueTypeName="vector";gl=class{constructor(t,e,i){let r=this,o=!1,l=0,c=0,u,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(g){c++,o===!1&&r.onStart!==void 0&&r.onStart(g,l,c),o=!0},this.itemEnd=function(g){l++,r.onProgress!==void 0&&r.onProgress(g,l,c),l===c&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),u?u(g):g},this.setURLModifier=function(g){return u=g,this},this.addHandler=function(g,v){return d.push(g,v),this},this.removeHandler=function(g){let v=d.indexOf(g);return v!==-1&&d.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=d.length;v<_;v+=2){let b=d[v],w=d[v+1];if(b.global&&(b.lastIndex=0),b.test(g))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gd=new gl,_l=class{constructor(t){this.manager=t!==void 0?t:Gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,o){i.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_l.DEFAULT_MATERIAL_NAME="__DEFAULT";Io=class extends an{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ro=class extends Io{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},vh=new Xe,Zf=new ut,Jf=new ut,vl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zf),Jf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(vh,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,l=r?r.z/o.x:1,c=r?r.w/o.y:1,u=r?r.x/o.x:0,d=r?r.y/o.y:0;t.coordinateSystem===_s||t.reversedDepth?e.set(.5*l,0,0,.5*l+u,0,.5*c,0,.5*c+d,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+u,0,.5*c,0,.5*c+d,0,0,.5,.5,0,0,0,1),e.multiply(vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fa=new ut,Ua=new Gn,yi=new ut,Lo=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fa,Ua,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ua,yi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Fa,Ua,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ua,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ir=new ut,jf=new ue,Kf=new ue,wn=class extends Lo{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ir.x,ir.y).multiplyScalar(-t/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-t/ir.z)}getViewSize(t,e){return this.getViewBounds(t,jf,Kf),e.subVectors(Kf,jf)}setViewOffset(t,e,i,r,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ps*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,o=-.5*r,l=this.view;if(this.view!==null&&this.view.enabled){let u=l.fullWidth,d=l.fullHeight;o+=l.offsetX*r/u,e-=l.offsetY*i/d,r*=l.width/u,i*=l.height/d}let c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},As=class extends Lo{constructor(t=-1,e=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-t,l=i+t,c=r+e,u=r-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,c-=g*this.view.offsetY,u=c-g*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wh=class extends vl{constructor(){super(new As(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cs=class extends Io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new wh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},fs=-90,ds=1,yl=class extends an{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wn(fs,ds,t,e);r.layers=this.layers,this.add(r);let o=new wn(fs,ds,t,e);o.layers=this.layers,this.add(o);let l=new wn(fs,ds,t,e);l.layers=this.layers,this.add(l);let c=new wn(fs,ds,t,e);c.layers=this.layers,this.add(c);let u=new wn(fs,ds,t,e);u.layers=this.layers,this.add(u);let d=new wn(fs,ds,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,o,l,c,u]=e;for(let d of e)this.remove(d);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===_s)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,l,c,u,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,r),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,2,r),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,3,r),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,4,r),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,r),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,g),t.setRenderTarget(v,_,b),t.xr.enabled=w,i.texture.needsPMREMUpdate=!0}},xl=class extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},eu="\\[\\]\\.:\\/",t_=new RegExp("["+eu+"]","g"),nu="[^"+eu+"]",e_="[^"+eu.replace("\\.","")+"]",n_=/((?:WC+[\/:])*)/.source.replace("WC",nu),i_=/(WCOD+)?/.source.replace("WCOD",e_),r_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),s_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),o_=new RegExp("^"+n_+i_+r_+s_+"$"),a_=["material","materials","bones","map"],Eh=class{constructor(t,e,i){let r=i||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},je=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(t_,"")}static parseTrackName(t){let e=o_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=i.nodeName.substring(r+1);a_.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let l=0;l<o.length;l++){let c=o[l];if(c.name===e||c.uuid===e)return c;let u=i(c.children);if(u)return u}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===d){d=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let l=t[r];if(l===void 0){let d=e.nodeName;ve("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=Eh;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Kb=new Float32Array(1),Qf=new Xe,No=class{constructor(t,e,i=0,r=1/0){this.ray=new sr(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ve("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qf),this}intersectObject(t,e=!0,i=[]){return Th(t,this,i,e),i.sort(td),i}intersectObjects(t,e=!0,i=[]){for(let r=0,o=t.length;r<o;r++)Th(t[r],this,i,e);return i.sort(td),i}};Ps=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Ah=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=r,this}},ed=new ut,Do=class extends an{constructor(t=new ut(0,0,1),e=new ut(0,0,0),i=1,r=16776960,o=i*.2,l=o*.2){super(),this.type="ArrowHelper",Ba===void 0&&(Ba=new Ke,Ba.setAttribute("position",new $e([0,0,0,0,1,0],3)),yh=new Es(.5,1,5,1),yh.translate(0,-.5,0)),this.position.copy(e),this.line=new Rr(Ba,new ui({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ke(yh,new Xn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,l)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{ed.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(ed,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Oo=class extends hi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function up(){let n=null,t=!1,e=null,i=null;function r(o,l){i=n.requestAnimationFrame(r),e(o,l)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function h_(n){let t=new WeakMap;function e(c,u){let d=c.array,g=c.usage,v=d.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,d,g),c.onUploadCallback();let b;if(d instanceof Float32Array)b=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)b=n.HALF_FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?b=n.HALF_FLOAT:b=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=n.SHORT;else if(d instanceof Uint32Array)b=n.UNSIGNED_INT;else if(d instanceof Int32Array)b=n.INT;else if(d instanceof Int8Array)b=n.BYTE;else if(d instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:v}}function i(c,u,d){let g=u.array,v=u.updateRanges;if(n.bindBuffer(d,c),v.length===0)n.bufferSubData(d,0,g);else{v.sort((b,w)=>b.start-w.start);let _=0;for(let b=1;b<v.length;b++){let w=v[_],E=v[b];E.start<=w.start+w.count+1?w.count=Math.max(w.count,E.start+E.count-w.start):(++_,v[_]=E)}v.length=_+1;for(let b=0,w=v.length;b<w;b++){let E=v[b];n.bufferSubData(d,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=t.get(c);u&&(n.deleteBuffer(u.buffer),t.delete(c))}function l(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let g=t.get(c);(!g||g.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let d=t.get(c);if(d===void 0)t.set(c,e(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,c,u),d.version=c.version}}return{get:r,remove:o,update:l}}function Yy(n,t,e,i,r,o){let l=new be(0),c=r===!0?0:1,u,d,g=null,v=0,_=null;function b(L){let z=L.isScene===!0?L.background:null;if(z&&z.isTexture){let A=L.backgroundBlurriness>0;z=t.get(z,A)}return z}function w(L){let z=!1,A=b(L);A===null?M(l,c):A&&A.isColor&&(M(A,1),z=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||z)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(L,z){let A=b(z);A&&(A.isCubeTexture||A.mapping===Uo)?(d===void 0&&(d=new ke(new ar(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Fr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,D,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=A,d.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(z.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(fp),d.material.toneMapped=Oe.getTransfer(A.colorSpace)!==Ve,(g!==A||v!==A.version||_!==n.toneMapping)&&(d.material.needsUpdate=!0,g=A,v=A.version,_=n.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new ke(new To(2,2),new Wn({name:"BackgroundMaterial",uniforms:Fr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,u.material.toneMapped=Oe.getTransfer(A.colorSpace)!==Ve,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||v!==A.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,g=A,v=A.version,_=n.toneMapping),u.layers.enableAll(),L.unshift(u,u.geometry,u.material,0,0,null))}function M(L,z){L.getRGB(cc,tu(n)),e.buffers.color.setClear(cc.r,cc.g,cc.b,z,o)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(L,z=1){l.set(L),c=z,M(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(L){c=L,M(l,c)},render:w,addToRenderList:E,dispose:y}}function $y(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=_(null),o=r,l=!1;function c(Y,j,q,Z,K){let ht=!1,gt=v(Y,Z,q,j);o!==gt&&(o=gt,d(o.object)),ht=b(Y,Z,q,K),ht&&w(Y,Z,q,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(ht||l)&&(l=!1,A(Y,j,q,Z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function u(){return n.createVertexArray()}function d(Y){return n.bindVertexArray(Y)}function g(Y){return n.deleteVertexArray(Y)}function v(Y,j,q,Z){let K=Z.wireframe===!0,ht=i[j.id];ht===void 0&&(ht={},i[j.id]=ht);let gt=Y.isInstancedMesh===!0?Y.id:0,Et=ht[gt];Et===void 0&&(Et={},ht[gt]=Et);let yt=Et[q.id];yt===void 0&&(yt={},Et[q.id]=yt);let Pt=yt[K];return Pt===void 0&&(Pt=_(u()),yt[K]=Pt),Pt}function _(Y){let j=[],q=[],Z=[];for(let K=0;K<e;K++)j[K]=0,q[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:q,attributeDivisors:Z,object:Y,attributes:{},index:null}}function b(Y,j,q,Z){let K=o.attributes,ht=j.attributes,gt=0,Et=q.getAttributes();for(let yt in Et)if(Et[yt].location>=0){let Rt=K[yt],jt=ht[yt];if(jt===void 0&&(yt==="instanceMatrix"&&Y.instanceMatrix&&(jt=Y.instanceMatrix),yt==="instanceColor"&&Y.instanceColor&&(jt=Y.instanceColor)),Rt===void 0||Rt.attribute!==jt||jt&&Rt.data!==jt.data)return!0;gt++}return o.attributesNum!==gt||o.index!==Z}function w(Y,j,q,Z){let K={},ht=j.attributes,gt=0,Et=q.getAttributes();for(let yt in Et)if(Et[yt].location>=0){let Rt=ht[yt];Rt===void 0&&(yt==="instanceMatrix"&&Y.instanceMatrix&&(Rt=Y.instanceMatrix),yt==="instanceColor"&&Y.instanceColor&&(Rt=Y.instanceColor));let jt={};jt.attribute=Rt,Rt&&Rt.data&&(jt.data=Rt.data),K[yt]=jt,gt++}o.attributes=K,o.attributesNum=gt,o.index=Z}function E(){let Y=o.newAttributes;for(let j=0,q=Y.length;j<q;j++)Y[j]=0}function M(Y){y(Y,0)}function y(Y,j){let q=o.newAttributes,Z=o.enabledAttributes,K=o.attributeDivisors;q[Y]=1,Z[Y]===0&&(n.enableVertexAttribArray(Y),Z[Y]=1),K[Y]!==j&&(n.vertexAttribDivisor(Y,j),K[Y]=j)}function L(){let Y=o.newAttributes,j=o.enabledAttributes;for(let q=0,Z=j.length;q<Z;q++)j[q]!==Y[q]&&(n.disableVertexAttribArray(q),j[q]=0)}function z(Y,j,q,Z,K,ht,gt){gt===!0?n.vertexAttribIPointer(Y,j,q,K,ht):n.vertexAttribPointer(Y,j,q,Z,K,ht)}function A(Y,j,q,Z){E();let K=Z.attributes,ht=q.getAttributes(),gt=j.defaultAttributeValues;for(let Et in ht){let yt=ht[Et];if(yt.location>=0){let Pt=K[Et];if(Pt===void 0&&(Et==="instanceMatrix"&&Y.instanceMatrix&&(Pt=Y.instanceMatrix),Et==="instanceColor"&&Y.instanceColor&&(Pt=Y.instanceColor)),Pt!==void 0){let Rt=Pt.normalized,jt=Pt.itemSize,at=t.get(Pt);if(at===void 0)continue;let Bt=at.buffer,Vt=at.type,Gt=at.bytesPerElement,ft=Vt===n.INT||Vt===n.UNSIGNED_INT||Pt.gpuType===wl;if(Pt.isInterleavedBufferAttribute){let St=Pt.data,Ut=St.stride,Ot=Pt.offset;if(St.isInstancedInterleavedBuffer){for(let zt=0;zt<yt.locationSize;zt++)y(yt.location+zt,St.meshPerAttribute);Y.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let zt=0;zt<yt.locationSize;zt++)M(yt.location+zt);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let zt=0;zt<yt.locationSize;zt++)z(yt.location+zt,jt/yt.locationSize,Vt,Rt,Ut*Gt,(Ot+jt/yt.locationSize*zt)*Gt,ft)}else{if(Pt.isInstancedBufferAttribute){for(let St=0;St<yt.locationSize;St++)y(yt.location+St,Pt.meshPerAttribute);Y.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let St=0;St<yt.locationSize;St++)M(yt.location+St);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let St=0;St<yt.locationSize;St++)z(yt.location+St,jt/yt.locationSize,Vt,Rt,jt*Gt,jt/yt.locationSize*St*Gt,ft)}}else if(gt!==void 0){let Rt=gt[Et];if(Rt!==void 0)switch(Rt.length){case 2:n.vertexAttrib2fv(yt.location,Rt);break;case 3:n.vertexAttrib3fv(yt.location,Rt);break;case 4:n.vertexAttrib4fv(yt.location,Rt);break;default:n.vertexAttrib1fv(yt.location,Rt)}}}}L()}function R(){k();for(let Y in i){let j=i[Y];for(let q in j){let Z=j[q];for(let K in Z){let ht=Z[K];for(let gt in ht)g(ht[gt].object),delete ht[gt];delete Z[K]}}delete i[Y]}}function D(Y){if(i[Y.id]===void 0)return;let j=i[Y.id];for(let q in j){let Z=j[q];for(let K in Z){let ht=Z[K];for(let gt in ht)g(ht[gt].object),delete ht[gt];delete Z[K]}}delete i[Y.id]}function H(Y){for(let j in i){let q=i[j];for(let Z in q){let K=q[Z];if(K[Y.id]===void 0)continue;let ht=K[Y.id];for(let gt in ht)g(ht[gt].object),delete ht[gt];delete K[Y.id]}}}function C(Y){for(let j in i){let q=i[j],Z=Y.isInstancedMesh===!0?Y.id:0,K=q[Z];if(K!==void 0){for(let ht in K){let gt=K[ht];for(let Et in gt)g(gt[Et].object),delete gt[Et];delete K[ht]}delete q[Z],Object.keys(q).length===0&&delete i[j]}}}function k(){G(),l=!0,o!==r&&(o=r,d(o.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:k,resetDefaultState:G,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfObject:C,releaseStatesOfProgram:H,initAttributes:E,enableAttribute:M,disableUnusedAttributes:L}}function qy(n,t,e){let i;function r(u){i=u}function o(u,d){n.drawArrays(i,u,d),e.update(d,i,1)}function l(u,d,g){g!==0&&(n.drawArraysInstanced(i,u,d,g),e.update(d,i,g))}function c(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,g);let _=0;for(let b=0;b<g;b++)_+=d[b];e.update(_,i,1)}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Zy(n,t,e,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let H=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(H){return!(H!==ni&&i.convert(H)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(H){let C=H===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==On&&H!==pi&&!C&&i.convert(H)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(H){if(H==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",g=u(d);g!==d&&(ge("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);let v=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&_===!1&&ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let b=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),L=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),z=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:b,maxVertexTextures:w,maxTextureSize:E,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:L,maxVaryings:z,maxFragmentUniforms:A,maxSamples:R,samples:D}}function Jy(n){let t=this,e=null,i=0,r=!1,o=!1,l=new Hn,c=new we,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){let b=v.length!==0||_||i!==0||r;return r=_,i=v.length,b},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,_){e=g(v,_,0)},this.setState=function(v,_,b){let w=v.clippingPlanes,E=v.clipIntersection,M=v.clipShadows,y=n.get(v);if(!r||w===null||w.length===0||o&&!M)o?g(null):d();else{let L=o?0:i,z=L*4,A=y.clippingState||null;u.value=A,A=g(w,_,z,b);for(let R=0;R!==z;++R)A[R]=e[R];y.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function d(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function g(v,_,b,w){let E=v!==null?v.length:0,M=null;if(E!==0){if(M=u.value,w!==!0||M===null){let y=b+E*4,L=_.matrixWorldInverse;c.getNormalMatrix(L),(M===null||M.length<y)&&(M=new Float32Array(y));for(let z=0,A=b;z!==E;++z,A+=4)l.copy(v[z]).applyMatrix4(L,c),l.normal.toArray(M,A),M[A+3]=l.constant}u.value=M,u.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,M}}function ex(n){let t=[],e=[],i=n,r=n-Os+1+jy;for(let o=0;o<r;o++){let l=Math.pow(2,i);t.push(l);let c=1/(l-2),u=-c,d=1+c,g=[u,u,d,u,d,d,u,u,d,d,u,d],v=6,_=6,b=3,w=new Float32Array(b*_*v),E=new Float32Array(b*_*v);for(let y=0;y<v;y++){let L=y%3*2/3-1,z=y>2?0:-1,A=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];w.set(A,b*_*y);for(let R=0;R<_;R++){let D=g[R*2]*2-1,H=g[R*2+1]*2-1;y===0?Ur.set(1,H,D):y===1?Ur.set(-D,1,-H):y===2?Ur.set(-D,H,1):y===3?Ur.set(-1,H,-D):y===4?Ur.set(-D,-1,H):Ur.set(D,H,-1),Ur.toArray(E,(y*_+R)*b)}}let M=new Ke;M.setAttribute("position",new Ye(w,b)),M.setAttribute("outputDirection",new Ye(E,b)),e.push(new ke(M,null)),i>Os&&i--}return{lodMeshes:e,sizeLods:t}}function Wd(n,t,e){let i=new Dn(n,t,e);return i.texture.mapping=Uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function nx(n,t,e){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ix(n,t,e){return new Wn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ky,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Yd(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function $d(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function rx(n){let t=new WeakMap,e=new WeakMap,i=null;function r(_,b=!1){return _==null?null:b?l(_):o(_)}function o(_){if(_&&_.isTexture){let b=_.mapping;if(b===Ml||b===bl)if(t.has(_)){let w=t.get(_).texture;return c(w,_.mapping)}else{let w=_.image;if(w&&w.height>0){let E=new fc(w.height);return E.fromEquirectangularTexture(n,_),t.set(_,E),_.addEventListener("dispose",d),c(E.texture,_.mapping)}else return null}}return _}function l(_){if(_&&_.isTexture){let b=_.mapping,w=b===Ml||b===bl,E=b===mr||b===Dr;if(w||E){let M=e.get(_),y=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return i===null&&(i=new uc(n)),M=w?i.fromEquirectangular(_,M):i.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,e.set(_,M),M.texture;if(M!==void 0)return M.texture;{let L=_.image;return w&&L&&L.height>0||E&&L&&u(L)?(i===null&&(i=new uc(n)),M=w?i.fromEquirectangular(_):i.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,e.set(_,M),_.addEventListener("dispose",g),M.texture):null}}}return _}function c(_,b){return b===Ml?_.mapping=mr:b===bl&&(_.mapping=Dr),_}function u(_){let b=0,w=6;for(let E=0;E<w;E++)_[E]!==void 0&&b++;return b===w}function d(_){let b=_.target;b.removeEventListener("dispose",d);let w=t.get(b);w!==void 0&&(t.delete(b),w.dispose())}function g(_){let b=_.target;b.removeEventListener("dispose",g);let w=e.get(b);w!==void 0&&(e.delete(b),w.dispose())}function v(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:v}}function sx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Pr("WebGLRenderer: "+i+" extension not supported."),r}}}function ox(n,t,e,i){let r={},o=new WeakMap;function l(v){let _=v.target;_.index!==null&&t.remove(_.index);for(let w in _.attributes)t.remove(_.attributes[w]);_.removeEventListener("dispose",l),delete r[_.id];let b=o.get(_);b&&(t.remove(b),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(v,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function u(v){let _=v.attributes;for(let b in _)t.update(_[b],n.ARRAY_BUFFER)}function d(v){let _=[],b=v.index,w=v.attributes.position,E=0;if(w===void 0)return;if(b!==null){let L=b.array;E=b.version;for(let z=0,A=L.length;z<A;z+=3){let R=L[z+0],D=L[z+1],H=L[z+2];_.push(R,D,D,H,H,R)}}else{let L=w.array;E=w.version;for(let z=0,A=L.length/3-1;z<A;z+=3){let R=z+0,D=z+1,H=z+2;_.push(R,D,D,H,H,R)}}let M=new(w.count>=65535?xo:yo)(_,1);M.version=E;let y=o.get(v);y&&t.remove(y),o.set(v,M)}function g(v){let _=o.get(v);if(_){let b=v.index;b!==null&&_.version<b.version&&d(v)}else d(v);return o.get(v)}return{get:c,update:u,getWireframeAttribute:g}}function ax(n,t,e){let i;function r(v){i=v}let o,l;function c(v){o=v.type,l=v.bytesPerElement}function u(v,_){n.drawElements(i,_,o,v*l),e.update(_,i,1)}function d(v,_,b){b!==0&&(n.drawElementsInstanced(i,_,o,v*l,b),e.update(_,i,b))}function g(v,_,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,o,v,0,b);let E=0;for(let M=0;M<b;M++)E+=_[M];e.update(E,i,1)}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=g}function lx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,c){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=c*(o/3);break;case n.LINES:e.lines+=c*(o/2);break;case n.LINE_STRIP:e.lines+=c*(o-1);break;case n.LINE_LOOP:e.lines+=c*o;break;case n.POINTS:e.points+=c*o;break;default:ve("WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function cx(n,t,e){let i=new WeakMap,r=new Qe;function o(l,c,u){let d=l.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0,_=i.get(c);if(_===void 0||_.count!==v){let k=function(){H.dispose(),i.delete(c),c.removeEventListener("dispose",k)};_!==void 0&&_.texture.dispose();let b=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],L=c.morphAttributes.color||[],z=0;b===!0&&(z=1),w===!0&&(z=2),E===!0&&(z=3);let A=c.attributes.position.count*z,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let D=new Float32Array(A*R*4*v),H=new _o(D,A,R,v);H.type=pi,H.needsUpdate=!0;let C=z*4;for(let G=0;G<v;G++){let Y=M[G],j=y[G],q=L[G],Z=A*R*4*G;for(let K=0;K<Y.count;K++){let ht=K*C;b===!0&&(r.fromBufferAttribute(Y,K),D[Z+ht+0]=r.x,D[Z+ht+1]=r.y,D[Z+ht+2]=r.z,D[Z+ht+3]=0),w===!0&&(r.fromBufferAttribute(j,K),D[Z+ht+4]=r.x,D[Z+ht+5]=r.y,D[Z+ht+6]=r.z,D[Z+ht+7]=0),E===!0&&(r.fromBufferAttribute(q,K),D[Z+ht+8]=r.x,D[Z+ht+9]=r.y,D[Z+ht+10]=r.z,D[Z+ht+11]=q.itemSize===4?r.w:1)}}_={count:v,texture:H,size:new ue(A,R)},i.set(c,_),c.addEventListener("dispose",k)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let b=0;for(let E=0;E<d.length;E++)b+=d[E];let w=c.morphTargetsRelative?1:1-b;u.getUniforms().setValue(n,"morphTargetBaseInfluence",w),u.getUniforms().setValue(n,"morphTargetInfluences",d)}u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:o}}function hx(n,t,e,i,r){let o=new WeakMap;function l(d){let g=r.render.frame,v=d.geometry,_=t.get(d,v);if(o.get(_)!==g&&(t.update(_),o.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),o.get(d)!==g&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,g))),d.isSkinnedMesh){let b=d.skeleton;o.get(b)!==g&&(b.update(),o.set(b,g))}return _}function c(){o=new WeakMap}function u(d){let g=d.target;g.removeEventListener("dispose",u),i.releaseStatesOfObject(g),e.remove(g.instanceMatrix),g.instanceColor!==null&&e.remove(g.instanceColor)}return{update:l,dispose:c}}function fx(n,t,e,i,r,o){let l=new Dn(t,e,{type:n,depthBuffer:r,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,u=null,d=new Ke;d.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new $e([0,2,0,0,2,0],2));let g=new sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new ke(d,g),_=new As(-1,1,1,-1,0,1),b=null,w=null,E=!1,M,y=null,L=[],z=!1;this.setSize=function(A,R){l.setSize(A,R),c!==null&&c.setSize(A,R),u!==null&&u.setSize(A,R);for(let D=0;D<L.length;D++){let H=L[D];H.setSize&&H.setSize(A,R)}},this.setEffects=function(A){L=A,z=L.length>0&&L[0].isRenderPass===!0;let R=l.width,D=l.height;L.length>0&&c===null&&(c=new Dn(R,D,{type:mi,depthBuffer:!1,stencilBuffer:!1}),u=new Dn(R,D,{type:mi,depthBuffer:!1,stencilBuffer:!1}));for(let H=0;H<L.length;H++){let C=L[H];C.setSize&&C.setSize(R,D)}},this.begin=function(A,R){if(E||A.toneMapping===fi&&L.length===0)return!1;if(y=R,R!==null){let D=R.width,H=R.height;(l.width!==D||l.height!==H)&&this.setSize(D,H)}return z===!1&&A.setRenderTarget(l),M=A.toneMapping,A.toneMapping=fi,!0},this.hasRenderPass=function(){return z},this.end=function(A,R){A.toneMapping=M,E=!0;let D=l,H=c;for(let C=0;C<L.length;C++){let k=L[C];k.enabled!==!1&&(k.render(A,H,D,R),k.needsSwap!==!1&&(D=H,H=H===c?u:c))}if(b!==A.outputColorSpace||w!==A.toneMapping){b=A.outputColorSpace,w=A.toneMapping,g.defines={},Oe.getTransfer(b)===Ve&&(g.defines.SRGB_TRANSFER="");let C=ux[w];C&&(g.defines[C]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(y),A.render(v,_),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){l.dispose(),c!==null&&c.dispose(),u!==null&&u.dispose(),d.dispose(),g.dispose()}}function Us(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,o=qd[r];if(o===void 0&&(o=new Float32Array(r),qd[r]=o),t!==0){i.toArray(o,0);for(let l=1,c=0;l!==t;++l)c+=e,n[l].toArray(o,c)}return o}function ln(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function cn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function mc(n,t){let e=Zd[t];e===void 0&&(e=new Int32Array(t),Zd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function dx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2fv(this.addr,t),cn(e,t)}}function mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;n.uniform3fv(this.addr,t),cn(e,t)}}function gx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4fv(this.addr,t),cn(e,t)}}function _x(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;Kd.set(i),n.uniformMatrix2fv(this.addr,!1,Kd),cn(e,i)}}function vx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;jd.set(i),n.uniformMatrix3fv(this.addr,!1,jd),cn(e,i)}}function yx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;Jd.set(i),n.uniformMatrix4fv(this.addr,!1,Jd),cn(e,i)}}function xx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2iv(this.addr,t),cn(e,t)}}function bx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;n.uniform3iv(this.addr,t),cn(e,t)}}function Sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4iv(this.addr,t),cn(e,t)}}function wx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2uiv(this.addr,t),cn(e,t)}}function Tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;n.uniform3uiv(this.addr,t),cn(e,t)}}function Ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4uiv(this.addr,t),cn(e,t)}}function Cx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(uu.compareFunction=e.isReversedDepthBuffer()?lc:ac,o=uu):o=dp,e.setTexture2D(t||o,r)}function Px(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||mp,r)}function Ix(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||gp,r)}function Rx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||pp,r)}function Lx(n){switch(n){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return _x;case 35675:return vx;case 35676:return yx;case 5124:case 35670:return xx;case 35667:case 35671:return Mx;case 35668:case 35672:return bx;case 35669:case 35673:return Sx;case 5125:return wx;case 36294:return Ex;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Rx}}function Nx(n,t){n.uniform1fv(this.addr,t)}function Dx(n,t){let e=Us(t,this.size,2);n.uniform2fv(this.addr,e)}function Ox(n,t){let e=Us(t,this.size,3);n.uniform3fv(this.addr,e)}function Fx(n,t){let e=Us(t,this.size,4);n.uniform4fv(this.addr,e)}function Ux(n,t){let e=Us(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Bx(n,t){let e=Us(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function kx(n,t){let e=Us(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function zx(n,t){n.uniform1iv(this.addr,t)}function Vx(n,t){n.uniform2iv(this.addr,t)}function Hx(n,t){n.uniform3iv(this.addr,t)}function Gx(n,t){n.uniform4iv(this.addr,t)}function Xx(n,t){n.uniform1uiv(this.addr,t)}function Wx(n,t){n.uniform2uiv(this.addr,t)}function Yx(n,t){n.uniform3uiv(this.addr,t)}function $x(n,t){n.uniform4uiv(this.addr,t)}function qx(n,t,e){let i=this.cache,r=t.length,o=mc(e,r);ln(i,o)||(n.uniform1iv(this.addr,o),cn(i,o));let l;this.type===n.SAMPLER_2D_SHADOW?l=uu:l=dp;for(let c=0;c!==r;++c)e.setTexture2D(t[c]||l,o[c])}function Zx(n,t,e){let i=this.cache,r=t.length,o=mc(e,r);ln(i,o)||(n.uniform1iv(this.addr,o),cn(i,o));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||mp,o[l])}function Jx(n,t,e){let i=this.cache,r=t.length,o=mc(e,r);ln(i,o)||(n.uniform1iv(this.addr,o),cn(i,o));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||gp,o[l])}function jx(n,t,e){let i=this.cache,r=t.length,o=mc(e,r);ln(i,o)||(n.uniform1iv(this.addr,o),cn(i,o));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||pp,o[l])}function Kx(n){switch(n){case 5126:return Nx;case 35664:return Dx;case 35665:return Ox;case 35666:return Fx;case 35674:return Ux;case 35675:return Bx;case 35676:return kx;case 5124:case 35670:return zx;case 35667:case 35671:return Vx;case 35668:case 35672:return Hx;case 35669:case 35673:return Gx;case 5125:return Xx;case 36294:return Wx;case 36295:return Yx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return jx}}function Qd(n,t){n.seq.push(t),n.map[t.id]=t}function Qx(n,t,e){let i=n.name,r=i.length;for(cu.lastIndex=0;;){let o=cu.exec(i),l=cu.lastIndex,c=o[1],u=o[2]==="]",d=o[3];if(u&&(c=c|0),d===void 0||d==="["&&l+2===r){Qd(e,d===void 0?new fu(c,n,t):new du(c,n,t));break}else{let v=e.map[c];v===void 0&&(v=new pu(c),Qd(e,v)),e=v}}}function tp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function nM(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=r;l<o;l++){let c=l+1;i.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return i.join(`
`)}function iM(n){Oe._getMatrix(ep,Oe.workingColorSpace,n);let t=`mat3( ${ep.elements.map(e=>e.toFixed(4))} )`;switch(Oe.getTransfer(n)){case po:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return ge("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function np(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let l=/ERROR: 0:(\d+)/.exec(o);if(l){let c=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+nM(n.getShaderSource(t),c)}else return o}function rM(n,t){let e=iM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function oM(n,t){let e=sM[t];return e===void 0?(ge("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function aM(){Oe.getLuminanceCoefficients(hc);let n=hc.x.toFixed(4),t=hc.y.toFixed(4),e=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function cM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(t,r),l=o.name,c=1;o.type===n.FLOAT_MAT2&&(c=2),o.type===n.FLOAT_MAT3&&(c=3),o.type===n.FLOAT_MAT4&&(c=4),e[l]={type:o.type,location:n.getAttribLocation(t,l),locationSize:c}}return e}function $o(n){return n!==""}function ip(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function mu(n){return n.replace(uM,dM)}function dM(n,t){let e=Ce[t];if(e===void 0){let i=fM.get(t);if(i!==void 0)e=Ce[i],ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mu(e)}function sp(n){return n.replace(pM,mM)}function mM(n,t,e,i){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function op(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function _M(n){return gM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function yM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":vM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function MM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":xM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function SM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":bM[n.combine]||"ENVMAP_BLENDING_NONE"}function wM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function EM(n,t,e,i){let r=n.getContext(),o=e.defines,l=e.vertexShader,c=e.fragmentShader,u=_M(e),d=yM(e),g=MM(e),v=SM(e),_=wM(e),b=lM(e),w=cM(o),E=r.createProgram(),M,y,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter($o).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter($o).join(`
`),y.length>0&&(y+=`
`)):(M=[op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),y=[op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Ce.tonemapping_pars_fragment:"",e.toneMapping!==fi?oM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,rM("linearToOutputTexel",e.outputColorSpace),aM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($o).join(`
`)),l=mu(l),l=ip(l,e),l=rp(l,e),c=mu(c),c=ip(c,e),c=rp(c,e),l=sp(l),c=sp(c),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",e.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let z=L+M+l,A=L+y+c,R=tp(r,r.VERTEX_SHADER,z),D=tp(r,r.FRAGMENT_SHADER,A);r.attachShader(E,R),r.attachShader(E,D),e.index0AttributeName!==void 0?r.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function H(Y){if(n.debug.checkShaderErrors){let j=r.getProgramInfoLog(E)||"",q=r.getShaderInfoLog(R)||"",Z=r.getShaderInfoLog(D)||"",K=j.trim(),ht=q.trim(),gt=Z.trim(),Et=!0,yt=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,R,D);else{let Pt=np(r,R,"vertex"),Rt=np(r,D,"fragment");ve("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+K+`
`+Pt+`
`+Rt)}else K!==""?ge("WebGLProgram: Program Info Log:",K):(ht===""||gt==="")&&(yt=!1);yt&&(Y.diagnostics={runnable:Et,programLog:K,vertexShader:{log:ht,prefix:M},fragmentShader:{log:gt,prefix:y}})}r.deleteShader(R),r.deleteShader(D),C=new Fs(r,E),k=hM(r,E)}let C;this.getUniforms=function(){return C===void 0&&H(this),C};let k;this.getAttributes=function(){return k===void 0&&H(this),k};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(E,tM)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eM++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=D,this}function AM(n){return n===vr||n===Go||n===Xo}function CM(n,t,e,i,r,o){let l=new Ms,c=new gu,u=new Set,d=[],g=new Map,v=i.logarithmicDepthBuffer,_=i.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return u.add(C),C===0?"uv":`uv${C}`}function E(C,k,G,Y,j,q){let Z=Y.fog,K=j.geometry,ht=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,gt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,Et=t.get(C.envMap||ht,gt),yt=Et&&Et.mapping===Uo?Et.image.height:null,Pt=b[C.type];C.precision!==null&&(_=i.getMaxPrecision(C.precision),_!==C.precision&&ge("WebGLProgram.getParameters:",C.precision,"not supported, using",_,"instead."));let Rt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,jt=Rt!==void 0?Rt.length:0,at=0;K.morphAttributes.position!==void 0&&(at=1),K.morphAttributes.normal!==void 0&&(at=2),K.morphAttributes.color!==void 0&&(at=3);let Bt,Vt,Gt,ft;if(Pt){let Ie=Ai[Pt];Bt=Ie.vertexShader,Vt=Ie.fragmentShader}else{Bt=C.vertexShader,Vt=C.fragmentShader;let Ie=c.getVertexShaderStage(C),Te=c.getFragmentShaderStage(C);c.update(C,Ie,Te),Gt=Ie.id,ft=Te.id}let St=n.getRenderTarget(),Ut=n.state.buffers.depth.getReversed(),Ot=j.isInstancedMesh===!0,zt=j.isBatchedMesh===!0,it=!!C.map,Pe=!!C.matcap,de=!!Et,me=!!C.aoMap,ye=!!C.lightMap,he=!!C.bumpMap&&C.wireframe===!1,Se=!!C.normalMap,Ne=!!C.displacementMap,oe=!!C.emissiveMap,Zt=!!C.metalnessMap,pe=!!C.roughnessMap,rt=C.anisotropy>0,Be=C.clearcoat>0,Ee=C.dispersion>0,X=C.retroreflectivity>0,P=C.iridescence>0,nt=C.sheen>0,dt=C.transmission>0,Ct=rt&&!!C.anisotropyMap,Wt=Be&&!!C.clearcoatMap,kt=Be&&!!C.clearcoatNormalMap,xt=Be&&!!C.clearcoatRoughnessMap,Dt=P&&!!C.iridescenceMap,Yt=P&&!!C.iridescenceThicknessMap,ne=nt&&!!C.sheenColorMap,$t=nt&&!!C.sheenRoughnessMap,U=!!C.specularMap,$=!!C.specularColorMap,J=!!C.specularIntensityMap,lt=dt&&!!C.transmissionMap,V=dt&&!!C.thicknessMap,bt=!!C.gradientMap,ct=!!C.alphaMap,Lt=C.alphaTest>0,mt=!!C.alphaHash,wt=!!C.extensions,At=fi;C.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(At=n.toneMapping);let qt={shaderID:Pt,shaderType:C.type,shaderName:C.name,vertexShader:Bt,fragmentShader:Vt,defines:C.defines,customVertexShaderID:Gt,customFragmentShaderID:ft,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:_,batching:zt,batchingColor:zt&&j._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&j.instanceColor!==null,instancingMorph:Ot&&j.morphTexture!==null,outputColorSpace:St===null?n.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Oe.workingColorSpace,alphaToCoverage:!!C.alphaToCoverage,map:it,matcap:Pe,envMap:de,envMapMode:de&&Et.mapping,envMapCubeUVHeight:yt,aoMap:me,lightMap:ye,bumpMap:he,normalMap:Se,displacementMap:Ne,emissiveMap:oe,normalMapObjectSpace:Se&&C.normalMapType===Ad,normalMapTangentSpace:Se&&C.normalMapType===oc,packedNormalMap:Se&&C.normalMapType===oc&&AM(C.normalMap.format),metalnessMap:Zt,roughnessMap:pe,anisotropy:rt,anisotropyMap:Ct,clearcoat:Be,clearcoatMap:Wt,clearcoatNormalMap:kt,clearcoatRoughnessMap:xt,dispersion:Ee,retroreflection:X,iridescence:P,iridescenceMap:Dt,iridescenceThicknessMap:Yt,sheen:nt,sheenColorMap:ne,sheenRoughnessMap:$t,specularMap:U,specularColorMap:$,specularIntensityMap:J,transmission:dt,transmissionMap:lt,thicknessMap:V,gradientMap:bt,opaque:C.transparent===!1&&C.blending===Rs&&C.alphaToCoverage===!1,alphaMap:ct,alphaTest:Lt,alphaHash:mt,combine:C.combine,mapUv:it&&w(C.map.channel),aoMapUv:me&&w(C.aoMap.channel),lightMapUv:ye&&w(C.lightMap.channel),bumpMapUv:he&&w(C.bumpMap.channel),normalMapUv:Se&&w(C.normalMap.channel),displacementMapUv:Ne&&w(C.displacementMap.channel),emissiveMapUv:oe&&w(C.emissiveMap.channel),metalnessMapUv:Zt&&w(C.metalnessMap.channel),roughnessMapUv:pe&&w(C.roughnessMap.channel),anisotropyMapUv:Ct&&w(C.anisotropyMap.channel),clearcoatMapUv:Wt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:kt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:$t&&w(C.sheenRoughnessMap.channel),specularMapUv:U&&w(C.specularMap.channel),specularColorMapUv:$&&w(C.specularColorMap.channel),specularIntensityMapUv:J&&w(C.specularIntensityMap.channel),transmissionMapUv:lt&&w(C.transmissionMap.channel),thicknessMapUv:V&&w(C.thicknessMap.channel),alphaMapUv:ct&&w(C.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Se||rt),vertexNormals:!!K.attributes.normal,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!K.attributes.uv&&(it||ct),fog:!!Z,useFog:C.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:C.wireframe===!1&&(C.flatShading===!0||K.attributes.normal===void 0&&Se===!1&&(C.isMeshLambertMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isMeshPhysicalMaterial)),sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ut,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:jt,morphTextureStride:at,numSunLights:k.sun.length,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numSunLightShadows:k.sunShadowMap.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:it&&C.map.isVideoTexture===!0&&Oe.getTransfer(C.map.colorSpace)===Ve,decodeVideoTextureEmissive:oe&&C.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(C.emissiveMap.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===En,flipSided:C.side===Rn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:wt&&C.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&C.extensions.multiDraw===!0||zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return qt.vertexUv1s=u.has(1),qt.vertexUv2s=u.has(2),qt.vertexUv3s=u.has(3),u.clear(),qt}function M(C){let k=[];if(C.shaderID?k.push(C.shaderID):(k.push(C.customVertexShaderID),k.push(C.customFragmentShaderID)),C.defines!==void 0)for(let G in C.defines)k.push(G),k.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(y(k,C),L(k,C),k.push(n.outputColorSpace)),k.push(C.customProgramCacheKey),k.join()}function y(C,k){C.push(k.precision),C.push(k.outputColorSpace),C.push(k.envMapMode),C.push(k.envMapCubeUVHeight),C.push(k.mapUv),C.push(k.alphaMapUv),C.push(k.lightMapUv),C.push(k.aoMapUv),C.push(k.bumpMapUv),C.push(k.normalMapUv),C.push(k.displacementMapUv),C.push(k.emissiveMapUv),C.push(k.metalnessMapUv),C.push(k.roughnessMapUv),C.push(k.anisotropyMapUv),C.push(k.clearcoatMapUv),C.push(k.clearcoatNormalMapUv),C.push(k.clearcoatRoughnessMapUv),C.push(k.iridescenceMapUv),C.push(k.iridescenceThicknessMapUv),C.push(k.sheenColorMapUv),C.push(k.sheenRoughnessMapUv),C.push(k.specularMapUv),C.push(k.specularColorMapUv),C.push(k.specularIntensityMapUv),C.push(k.transmissionMapUv),C.push(k.thicknessMapUv),C.push(k.combine),C.push(k.fogExp2),C.push(k.sizeAttenuation),C.push(k.morphTargetsCount),C.push(k.morphAttributeCount),C.push(k.numSunLights),C.push(k.numDirLights),C.push(k.numPointLights),C.push(k.numSpotLights),C.push(k.numSpotLightMaps),C.push(k.numHemiLights),C.push(k.numRectAreaLights),C.push(k.numSunLightShadows),C.push(k.numDirLightShadows),C.push(k.numPointLightShadows),C.push(k.numSpotLightShadows),C.push(k.numSpotLightShadowsWithMaps),C.push(k.numLightProbes),C.push(k.shadowMapType),C.push(k.toneMapping),C.push(k.numClippingPlanes),C.push(k.numClipIntersection),C.push(k.depthPacking)}function L(C,k){l.disableAll(),k.instancing&&l.enable(0),k.instancingColor&&l.enable(1),k.instancingMorph&&l.enable(2),k.matcap&&l.enable(3),k.envMap&&l.enable(4),k.normalMapObjectSpace&&l.enable(5),k.normalMapTangentSpace&&l.enable(6),k.clearcoat&&l.enable(7),k.iridescence&&l.enable(8),k.alphaTest&&l.enable(9),k.vertexColors&&l.enable(10),k.vertexAlphas&&l.enable(11),k.vertexUv1s&&l.enable(12),k.vertexUv2s&&l.enable(13),k.vertexUv3s&&l.enable(14),k.vertexTangents&&l.enable(15),k.anisotropy&&l.enable(16),k.alphaHash&&l.enable(17),k.batching&&l.enable(18),k.dispersion&&l.enable(19),k.retroreflection&&l.enable(24),k.batchingColor&&l.enable(20),k.gradientMap&&l.enable(21),k.packedNormalMap&&l.enable(22),k.vertexNormals&&l.enable(23),C.push(l.mask),l.disableAll(),k.fog&&l.enable(0),k.useFog&&l.enable(1),k.flatShading&&l.enable(2),k.logarithmicDepthBuffer&&l.enable(3),k.reversedDepthBuffer&&l.enable(4),k.skinning&&l.enable(5),k.morphTargets&&l.enable(6),k.morphNormals&&l.enable(7),k.morphColors&&l.enable(8),k.premultipliedAlpha&&l.enable(9),k.shadowMapEnabled&&l.enable(10),k.doubleSided&&l.enable(11),k.flipSided&&l.enable(12),k.useDepthPacking&&l.enable(13),k.dithering&&l.enable(14),k.transmission&&l.enable(15),k.sheen&&l.enable(16),k.opaque&&l.enable(17),k.pointsUvs&&l.enable(18),k.decodeVideoTexture&&l.enable(19),k.decodeVideoTextureEmissive&&l.enable(20),k.alphaToCoverage&&l.enable(21),k.numLightProbeGrids>0&&l.enable(22),k.hasPositionAttribute&&l.enable(23),C.push(l.mask)}function z(C){let k=b[C.type],G;if(k){let Y=Ai[k];G=Vd.clone(Y.uniforms)}else G=C.uniforms;return G}function A(C,k){let G=g.get(k);return G!==void 0?++G.usedTimes:(G=new EM(n,k,C,r),d.push(G),g.set(k,G)),G}function R(C){if(--C.usedTimes===0){let k=d.indexOf(C);d[k]=d[d.length-1],d.pop(),g.delete(C.cacheKey),C.destroy()}}function D(C){c.remove(C)}function H(){c.dispose()}return{getParameters:E,getProgramCacheKey:M,getUniforms:z,acquireProgram:A,releaseProgram:R,releaseShaderCache:D,programs:d,dispose:H}}function PM(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let c=n.get(l);return c===void 0&&(c={},n.set(l,c)),c}function i(l){n.delete(l)}function r(l,c,u){n.get(l)[c]=u}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:o}}function IM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function ap(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function lp(){let n=[],t=0,e=[],i=[],r=[];function o(){t=0,e.length=0,i.length=0,r.length=0}function l(_){let b=0;return _.isInstancedMesh&&(b+=2),_.isSkinnedMesh&&(b+=1),b}function c(_,b,w,E,M,y){let L=n[t];return L===void 0?(L={id:_.id,object:_,geometry:b,material:w,materialVariant:l(_),groupOrder:E,renderOrder:_.renderOrder,z:M,group:y},n[t]=L):(L.id=_.id,L.object=_,L.geometry=b,L.material=w,L.materialVariant=l(_),L.groupOrder=E,L.renderOrder=_.renderOrder,L.z=M,L.group=y),t++,L}function u(_,b,w,E,M,y,L){L.reversedDepth===!0&&(M=-M);let z=c(_,b,w,E,M,y);w.transmission>0?i.push(z):w.transparent===!0?r.push(z):e.push(z)}function d(_,b,w,E,M,y){let L=c(_,b,w,E,M,y);w.transmission>0?i.unshift(L):w.transparent===!0?r.unshift(L):e.unshift(L)}function g(_,b){e.length>1&&e.sort(_||IM),i.length>1&&i.sort(b||ap),r.length>1&&r.sort(b||ap)}function v(){for(let _=t,b=n.length;_<b;_++){let w=n[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:i,transparent:r,init:o,push:u,unshift:d,finish:v,sort:g}}function RM(){let n=new WeakMap;function t(i,r){let o=n.get(i),l;return o===void 0?(l=new lp,n.set(i,[l])):r>=o.length?(l=new lp,o.push(l)):l=o[r],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function LM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ut,color:new be};break;case"SpotLight":e={position:new ut,direction:new ut,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ut,color:new be,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ut,skyColor:new be,groundColor:new be};break;case"RectAreaLight":e={color:new be,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return n[t.id]=e,e}}}function NM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function OM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function FM(n){let t=new LM,e=NM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ut);let r=new ut,o=new Xe,l=new Xe;function c(d){let g=0,v=0,_=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let b=0,w=0,E=0,M=0,y=0,L=0,z=0,A=0,R=0,D=0,H=0,C=0,k=0,G=0;d.sort(OM);for(let j=0,q=d.length;j<q;j++){let Z=d[j],K=Z.color,ht=Z.intensity,gt=Z.distance,Et=null;if(Z.shadow&&Z.shadow.map&&(Z.shadow.map.texture.format===vr?Et=Z.shadow.map.texture:Et=Z.shadow.map.depthTexture||Z.shadow.map.texture),Z.isAmbientLight)g+=K.r*ht,v+=K.g*ht,_+=K.b*ht;else if(Z.isLightProbe){for(let yt=0;yt<9;yt++)i.probe[yt].addScaledVector(Z.sh.coefficients[yt],ht);G++}else if(Z.isSunLight){let yt=t.get(Z);if(yt.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let Pt=Z.shadow,Rt=e.get(Z);Rt.shadowIntensity=Pt.intensity,Rt.shadowBias=Pt.bias,Rt.shadowNormalBias=Pt.normalBias,Rt.shadowRadius=Pt.radius,Rt.shadowMapSize.copy(Pt.mapSize).multiply(Pt.getFrameExtents()),i.sunShadow[w]=Rt,i.sunShadowMap[w]=Et;let jt=Pt.getViewportCount();for(let at=0;at<jt;at++)i.sunShadowMatrix[E+at]=Pt.getMatrix(at),i.sunShadowCascade[E+at]=Pt._cascadeData[at];E+=jt,w++}i.sun[b]=yt,b++}else if(Z.isDirectionalLight){let yt=t.get(Z);if(yt.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let Pt=Z.shadow,Rt=e.get(Z);Rt.shadowIntensity=Pt.intensity,Rt.shadowBias=Pt.bias,Rt.shadowNormalBias=Pt.normalBias,Rt.shadowRadius=Pt.radius,Rt.shadowMapSize=Pt.mapSize,i.directionalShadow[M]=Rt,i.directionalShadowMap[M]=Et,i.directionalShadowMatrix[M]=Z.shadow.matrix,R++}i.directional[M]=yt,M++}else if(Z.isSpotLight){let yt=t.get(Z);yt.position.setFromMatrixPosition(Z.matrixWorld),yt.color.copy(K).multiplyScalar(ht),yt.distance=gt,yt.coneCos=Math.cos(Z.angle),yt.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),yt.decay=Z.decay,i.spot[L]=yt;let Pt=Z.shadow;if(Z.map&&(i.spotLightMap[C]=Z.map,C++,Pt.updateMatrices(Z),Z.castShadow&&k++),i.spotLightMatrix[L]=Pt.matrix,Z.castShadow){let Rt=e.get(Z);Rt.shadowIntensity=Pt.intensity,Rt.shadowBias=Pt.bias,Rt.shadowNormalBias=Pt.normalBias,Rt.shadowRadius=Pt.radius,Rt.shadowMapSize=Pt.mapSize,i.spotShadow[L]=Rt,i.spotShadowMap[L]=Et,H++}L++}else if(Z.isRectAreaLight){let yt=t.get(Z);yt.color.copy(K).multiplyScalar(ht),yt.halfWidth.set(Z.width*.5,0,0),yt.halfHeight.set(0,Z.height*.5,0),i.rectArea[z]=yt,z++}else if(Z.isPointLight){let yt=t.get(Z);if(yt.color.copy(Z.color).multiplyScalar(Z.intensity),yt.distance=Z.distance,yt.decay=Z.decay,Z.castShadow){let Pt=Z.shadow,Rt=e.get(Z);Rt.shadowIntensity=Pt.intensity,Rt.shadowBias=Pt.bias,Rt.shadowNormalBias=Pt.normalBias,Rt.shadowRadius=Pt.radius,Rt.shadowMapSize=Pt.mapSize,Rt.shadowCameraNear=Pt.camera.near,Rt.shadowCameraFar=Pt.camera.far,i.pointShadow[y]=Rt,i.pointShadowMap[y]=Et,i.pointShadowMatrix[y]=Z.shadow.matrix,D++}i.point[y]=yt,y++}else if(Z.isHemisphereLight){let yt=t.get(Z);yt.skyColor.copy(Z.color).multiplyScalar(ht),yt.groundColor.copy(Z.groundColor).multiplyScalar(ht),i.hemi[A]=yt,A++}}z>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=_;let Y=i.hash;(Y.sunLength!==b||Y.directionalLength!==M||Y.pointLength!==y||Y.spotLength!==L||Y.rectAreaLength!==z||Y.hemiLength!==A||Y.numSunShadows!==w||Y.numDirectionalShadows!==R||Y.numPointShadows!==D||Y.numSpotShadows!==H||Y.numSpotMaps!==C||Y.numLightProbes!==G)&&(i.sun.length=b,i.directional.length=M,i.spot.length=L,i.rectArea.length=z,i.point.length=y,i.hemi.length=A,i.sunShadow.length=w,i.sunShadowMap.length=w,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=D,i.pointShadowMap.length=D,i.pointShadowMatrix.length=D,i.spotShadow.length=H,i.spotShadowMap.length=H,i.spotLightMatrix.length=H+C-k,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=G,Y.sunLength=b,Y.directionalLength=M,Y.pointLength=y,Y.spotLength=L,Y.rectAreaLength=z,Y.hemiLength=A,Y.numSunShadows=w,Y.numDirectionalShadows=R,Y.numPointShadows=D,Y.numSpotShadows=H,Y.numSpotMaps=C,Y.numLightProbes=G,i.version=DM++)}function u(d,g){let v=0,_=0,b=0,w=0,E=0,M=0,y=g.matrixWorldInverse;for(let L=0,z=d.length;L<z;L++){let A=d[L];if(A.isSunLight){let R=i.sun[v];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(y),v++}else if(A.isDirectionalLight){let R=i.directional[_];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),_++}else if(A.isSpotLight){let R=i.spot[w];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),w++}else if(A.isRectAreaLight){let R=i.rectArea[E];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(y),l.identity(),o.copy(A.matrixWorld),o.premultiply(y),l.extractRotation(o),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),E++}else if(A.isPointLight){let R=i.point[b];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(y),b++}else if(A.isHemisphereLight){let R=i.hemi[M];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(y),M++}}}return{setup:c,setupView:u,state:i}}function cp(n){let t=new FM(n),e=[],i=[],r=[];function o(_){v.camera=_,e.length=0,i.length=0,r.length=0}function l(_){e.push(_)}function c(_){i.push(_)}function u(_){r.push(_)}function d(){t.setup(e)}function g(_){t.setupView(e,_)}let v={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:d,setupLightsView:g,pushLight:l,pushShadow:c,pushLightProbeGrid:u}}function UM(n){let t=new WeakMap;function e(r,o=0){let l=t.get(r),c;return l===void 0?(c=new cp(n),t.set(r,[c])):o>=l.length?(c=new cp(n),l.push(c)):c=l[o],c}function i(){t=new WeakMap}return{get:e,dispose:i}}function HM(n,t,e){let i=new ws,r=new ue,o=new ue,l=new Qe,c=new ol,u=new al,d={},g=e.maxTextureSize,v={[pr]:Rn,[Rn]:pr,[En]:En},_=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:BM,fragmentShader:kM}),b=_.clone();b.defines.HORIZONTAL_PASS=1;let w=new Ke;w.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new ke(w,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let y=this.type;this.render=function(D,H,C){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===rd&&(ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fo);let k=n.getRenderTarget(),G=n.getActiveCubeFace(),Y=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Ei),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let q=y!==this.type;q&&H.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(K=>K.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,K=D.length;Z<K;Z++){let ht=D[Z],gt=ht.shadow;if(gt===void 0){ge("WebGLShadowMap:",ht,"has no shadow.");continue}if(gt.autoUpdate===!1&&gt.needsUpdate===!1)continue;r.copy(gt.mapSize);let Et=gt.getFrameExtents();r.multiply(Et),o.copy(gt.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(o.x=Math.floor(g/Et.x),r.x=o.x*Et.x,gt.mapSize.x=o.x),r.y>g&&(o.y=Math.floor(g/Et.y),r.y=o.y*Et.y,gt.mapSize.y=o.y));let yt=n.state.buffers.depth.getReversed();if(gt.camera._reversedDepth=yt,gt.map===null||q===!0){if(gt.map!==null&&(gt.map.depthTexture!==null&&(gt.map.depthTexture.dispose(),gt.map.depthTexture=null),gt.map.dispose()),this.type===Is){if(ht.isPointLight){ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}gt.map=new Dn(r.x,r.y,{format:vr,type:mi,minFilter:yn,magFilter:yn,generateMipmaps:!1}),gt.map.texture.name=ht.name+".shadowMap",gt.map.depthTexture=new or(r.x,r.y,pi),gt.map.depthTexture.name=ht.name+".shadowMapDepth",gt.map.depthTexture.format=bi,gt.map.depthTexture.compareFunction=null,gt.map.depthTexture.minFilter=pn,gt.map.depthTexture.magFilter=pn}else ht.isPointLight?(gt.map=new fc(r.x),gt.map.depthTexture=new rl(r.x,di)):(gt.map=new Dn(r.x,r.y),gt.map.depthTexture=new or(r.x,r.y,di)),gt.map.depthTexture.name=ht.name+".shadowMap",gt.map.depthTexture.format=bi,this.type===Fo?(gt.map.depthTexture.compareFunction=yt?lc:ac,gt.map.depthTexture.minFilter=yn,gt.map.depthTexture.magFilter=yn):(gt.map.depthTexture.compareFunction=null,gt.map.depthTexture.minFilter=pn,gt.map.depthTexture.magFilter=pn);gt.camera.updateProjectionMatrix()}gt.map.isWebGLCubeRenderTarget!==!0&&(gt.map.width!==r.x||gt.map.height!==r.y)&&gt.map.setSize(r.x,r.y);let Pt=gt.map.isWebGLCubeRenderTarget?6:gt.getViewportCount();ht.isPointLight!==!0&&gt.updateMatrices(ht,C);for(let Rt=0;Rt<Pt;Rt++){let jt=gt.getCamera(Rt);if(ht.isPointLight){let at=gt.camera,Bt=gt.matrix,Vt=ht.distance||at.far;Vt!==at.far&&(at.far=Vt,at.updateProjectionMatrix()),Yo.setFromMatrixPosition(ht.matrixWorld),at.position.copy(Yo),hu.copy(at.position),hu.add(zM[Rt]),at.up.copy(VM[Rt]),at.lookAt(hu),at.updateMatrixWorld(),Bt.makeTranslation(-Yo.x,-Yo.y,-Yo.z),hp.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),gt._frustum.setFromProjectionMatrix(hp,at.coordinateSystem,at.reversedDepth)}if(gt.map.isWebGLCubeRenderTarget)n.setRenderTarget(gt.map,Rt),n.clear();else{Rt===0&&(n.setRenderTarget(gt.map),n.clear());let at=gt.getViewport(Rt);l.set(o.x*at.x,o.y*at.y,o.x*at.z,o.y*at.w),j.viewport(l)}i=gt.getFrustum(Rt),A(H,C,jt,ht,this.type)}gt.isPointLightShadow!==!0&&this.type===Is&&L(gt,C),gt.needsUpdate=!1}y=this.type,M.needsUpdate=!1,n.setRenderTarget(k,G,Y)};function L(D,H){let C=t.update(E);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,b.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),D.mapPass===null?D.mapPass=new Dn(r.x,r.y,{format:vr,type:mi}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(H,null,C,_,E,null),b.uniforms.shadow_pass.value=D.mapPass.texture,b.uniforms.resolution.value.set(D.map.width,D.map.height),b.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(H,null,C,b,E,null)}function z(D,H,C,k){let G=null,Y=C.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(Y!==void 0)G=Y;else if(G=C.isPointLight===!0?u:c,n.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){let j=G.uuid,q=H.uuid,Z=d[j];Z===void 0&&(Z={},d[j]=Z);let K=Z[q];K===void 0&&(K=G.clone(),Z[q]=K,H.addEventListener("dispose",R)),G=K}if(G.visible=H.visible,G.wireframe=H.wireframe,k===Is?G.side=H.shadowSide!==null?H.shadowSide:H.side:G.side=H.shadowSide!==null?H.shadowSide:v[H.side],G.alphaMap=H.alphaMap,G.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,G.map=H.map,G.clipShadows=H.clipShadows,G.clippingPlanes=H.clippingPlanes,G.clipIntersection=H.clipIntersection,G.displacementMap=H.displacementMap,G.displacementScale=H.displacementScale,G.displacementBias=H.displacementBias,G.wireframeLinewidth=H.wireframeLinewidth,G.linewidth=H.linewidth,C.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let j=n.properties.get(G);j.light=C}return G}function A(D,H,C,k,G){if(D.visible===!1)return;if(D.layers.test(H.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&G===Is)&&(!D.frustumCulled||D.intersectsFrustum(i))){D.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,D.matrixWorld);let q=t.update(D),Z=D.material;if(Array.isArray(Z)){let K=q.groups;for(let ht=0,gt=K.length;ht<gt;ht++){let Et=K[ht],yt=Z[Et.materialIndex];if(yt&&yt.visible){let Pt=z(D,yt,k,G);D.onBeforeShadow(n,D,H,C,q,Pt,Et),n.renderBufferDirect(C,null,q,Pt,D,Et),D.onAfterShadow(n,D,H,C,q,Pt,Et)}}}else if(Z.visible){let K=z(D,Z,k,G);D.onBeforeShadow(n,D,H,C,q,K,null),n.renderBufferDirect(C,null,q,K,D,null),D.onAfterShadow(n,D,H,C,q,K,null)}}let j=D.children;for(let q=0,Z=j.length;q<Z;q++)A(j[q],H,C,k,G)}function R(D){D.target.removeEventListener("dispose",R);for(let C in d){let k=d[C],G=D.target.uuid;G in k&&(k[G].dispose(),delete k[G])}}}function GM(n,t){function e(){let V=!1,bt=new Qe,ct=null,Lt=new Qe(0,0,0,0);return{setMask:function(mt){ct!==mt&&!V&&(n.colorMask(mt,mt,mt,mt),ct=mt)},setLocked:function(mt){V=mt},setClear:function(mt,wt,At,qt,Ie){Ie===!0&&(mt*=qt,wt*=qt,At*=qt),bt.set(mt,wt,At,qt),Lt.equals(bt)===!1&&(n.clearColor(mt,wt,At,qt),Lt.copy(bt))},reset:function(){V=!1,ct=null,Lt.set(-1,0,0,0)}}}function i(){let V=!1,bt=!1,ct=null,Lt=null,mt=null;return{setReversed:function(wt){if(bt!==wt){let At=t.get("EXT_clip_control");wt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),bt=wt;let qt=mt;mt=null,this.setClear(qt)}},getReversed:function(){return bt},setTest:function(wt){wt?St(n.DEPTH_TEST):Ut(n.DEPTH_TEST)},setMask:function(wt){ct!==wt&&!V&&(n.depthMask(wt),ct=wt)},setFunc:function(wt){if(bt&&(wt=Bd[wt]),Lt!==wt){switch(wt){case Va:n.depthFunc(n.NEVER);break;case Ha:n.depthFunc(n.ALWAYS);break;case Ga:n.depthFunc(n.LESS);break;case gs:n.depthFunc(n.LEQUAL);break;case Xa:n.depthFunc(n.EQUAL);break;case Wa:n.depthFunc(n.GEQUAL);break;case Ya:n.depthFunc(n.GREATER);break;case $a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Lt=wt}},setLocked:function(wt){V=wt},setClear:function(wt){mt!==wt&&(mt=wt,bt&&(wt=1-wt),n.clearDepth(wt))},reset:function(){V=!1,ct=null,Lt=null,mt=null,bt=!1}}}function r(){let V=!1,bt=null,ct=null,Lt=null,mt=null,wt=null,At=null,qt=null,Ie=null;return{setTest:function(Te){V||(Te?St(n.STENCIL_TEST):Ut(n.STENCIL_TEST))},setMask:function(Te){bt!==Te&&!V&&(n.stencilMask(Te),bt=Te)},setFunc:function(Te,An,Ln){(ct!==Te||Lt!==An||mt!==Ln)&&(n.stencilFunc(Te,An,Ln),ct=Te,Lt=An,mt=Ln)},setOp:function(Te,An,Ln){(wt!==Te||At!==An||qt!==Ln)&&(n.stencilOp(Te,An,Ln),wt=Te,At=An,qt=Ln)},setLocked:function(Te){V=Te},setClear:function(Te){Ie!==Te&&(n.clearStencil(Te),Ie=Te)},reset:function(){V=!1,bt=null,ct=null,Lt=null,mt=null,wt=null,At=null,qt=null,Ie=null}}}let o=new e,l=new i,c=new r,u=new WeakMap,d=new WeakMap,g={},v={},_={},b=new WeakMap,w=[],E=null,M=!1,y=null,L=null,z=null,A=null,R=null,D=null,H=null,C=new be(0,0,0),k=0,G=!1,Y=null,j=null,q=null,Z=null,K=null,ht=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),gt=!1,Et=0,yt=n.getParameter(n.VERSION);yt.indexOf("WebGL")!==-1?(Et=parseFloat(/^WebGL (\d)/.exec(yt)[1]),gt=Et>=1):yt.indexOf("OpenGL ES")!==-1&&(Et=parseFloat(/^OpenGL ES (\d)/.exec(yt)[1]),gt=Et>=2);let Pt=null,Rt={},jt=n.getParameter(n.SCISSOR_BOX),at=n.getParameter(n.VIEWPORT),Bt=new Qe().fromArray(jt),Vt=new Qe().fromArray(at);function Gt(V,bt,ct,Lt){let mt=new Uint8Array(4),wt=n.createTexture();n.bindTexture(V,wt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<ct;At++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(bt,0,n.RGBA,1,1,Lt,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(bt+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return wt}let ft={};ft[n.TEXTURE_2D]=Gt(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=Gt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=Gt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=Gt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),St(n.DEPTH_TEST),l.setFunc(gs),he(!1),Se(Ch),St(n.CULL_FACE),me(Ei);function St(V){g[V]!==!0&&(n.enable(V),g[V]=!0)}function Ut(V){g[V]!==!1&&(n.disable(V),g[V]=!1)}function Ot(V,bt){return _[V]!==bt?(n.bindFramebuffer(V,bt),_[V]=bt,V===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=bt),V===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=bt),!0):!1}function zt(V,bt){let ct=w,Lt=!1;if(V){ct=b.get(bt),ct===void 0&&(ct=[],b.set(bt,ct));let mt=V.textures;if(ct.length!==mt.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,At=mt.length;wt<At;wt++)ct[wt]=n.COLOR_ATTACHMENT0+wt;ct.length=mt.length,Lt=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,Lt=!0);Lt&&n.drawBuffers(ct)}function it(V){return E!==V?(n.useProgram(V),E=V,!0):!1}let Pe={[Nr]:n.FUNC_ADD,[od]:n.FUNC_SUBTRACT,[ad]:n.FUNC_REVERSE_SUBTRACT};Pe[ld]=n.MIN,Pe[cd]=n.MAX;let de={[hd]:n.ZERO,[ud]:n.ONE,[fd]:n.SRC_COLOR,[Lh]:n.SRC_ALPHA,[vd]:n.SRC_ALPHA_SATURATE,[gd]:n.DST_COLOR,[pd]:n.DST_ALPHA,[dd]:n.ONE_MINUS_SRC_COLOR,[Nh]:n.ONE_MINUS_SRC_ALPHA,[_d]:n.ONE_MINUS_DST_COLOR,[md]:n.ONE_MINUS_DST_ALPHA,[yd]:n.CONSTANT_COLOR,[xd]:n.ONE_MINUS_CONSTANT_COLOR,[Md]:n.CONSTANT_ALPHA,[bd]:n.ONE_MINUS_CONSTANT_ALPHA};function me(V,bt,ct,Lt,mt,wt,At,qt,Ie,Te){if(V===Ei){M===!0&&(Ut(n.BLEND),M=!1);return}if(M===!1&&(St(n.BLEND),M=!0),V!==sd){if(V!==y||Te!==G){if((L!==Nr||R!==Nr)&&(n.blendEquation(n.FUNC_ADD),L=Nr,R=Nr),Te)switch(V){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ph:n.blendFunc(n.ONE,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ve("WebGLState: Invalid blending: ",V);break}else switch(V){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ph:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ih:ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ve("WebGLState: Invalid blending: ",V);break}z=null,A=null,D=null,H=null,C.set(0,0,0),k=0,y=V,G=Te}return}mt=mt||bt,wt=wt||ct,At=At||Lt,(bt!==L||mt!==R)&&(n.blendEquationSeparate(Pe[bt],Pe[mt]),L=bt,R=mt),(ct!==z||Lt!==A||wt!==D||At!==H)&&(n.blendFuncSeparate(de[ct],de[Lt],de[wt],de[At]),z=ct,A=Lt,D=wt,H=At),(qt.equals(C)===!1||Ie!==k)&&(n.blendColor(qt.r,qt.g,qt.b,Ie),C.copy(qt),k=Ie),y=V,G=!1}function ye(V,bt){V.side===En?Ut(n.CULL_FACE):St(n.CULL_FACE);let ct=V.side===Rn;bt&&(ct=!ct),he(ct),V.blending===Rs&&V.transparent===!1?me(Ei):me(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);let Lt=V.stencilWrite;c.setTest(Lt),Lt&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),oe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?St(n.SAMPLE_ALPHA_TO_COVERAGE):Ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(V){Y!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),Y=V)}function Se(V){V!==nd?(St(n.CULL_FACE),V!==j&&(V===Ch?n.cullFace(n.BACK):V===id?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ut(n.CULL_FACE),j=V}function Ne(V){V!==q&&(gt&&n.lineWidth(V),q=V)}function oe(V,bt,ct){V?(St(n.POLYGON_OFFSET_FILL),(Z!==bt||K!==ct)&&(Z=bt,K=ct,l.getReversed()&&(bt=-bt),n.polygonOffset(bt,ct))):Ut(n.POLYGON_OFFSET_FILL)}function Zt(V){V?St(n.SCISSOR_TEST):Ut(n.SCISSOR_TEST)}function pe(V){V===void 0&&(V=n.TEXTURE0+ht-1),Pt!==V&&(n.activeTexture(V),Pt=V)}function rt(V,bt,ct){ct===void 0&&(Pt===null?ct=n.TEXTURE0+ht-1:ct=Pt);let Lt=Rt[ct];Lt===void 0&&(Lt={type:void 0,texture:void 0},Rt[ct]=Lt),(Lt.type!==V||Lt.texture!==bt)&&(Pt!==ct&&(n.activeTexture(ct),Pt=ct),n.bindTexture(V,bt||ft[V]),Lt.type=V,Lt.texture=bt)}function Be(){let V=Rt[Pt];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ee(){try{n.compressedTexImage2D(...arguments)}catch(V){ve("WebGLState:",V)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(V){ve("WebGLState:",V)}}function P(){try{n.texSubImage2D(...arguments)}catch(V){ve("WebGLState:",V)}}function nt(){try{n.texSubImage3D(...arguments)}catch(V){ve("WebGLState:",V)}}function dt(){try{n.compressedTexSubImage2D(...arguments)}catch(V){ve("WebGLState:",V)}}function Ct(){try{n.compressedTexSubImage3D(...arguments)}catch(V){ve("WebGLState:",V)}}function Wt(){try{n.texStorage2D(...arguments)}catch(V){ve("WebGLState:",V)}}function kt(){try{n.texStorage3D(...arguments)}catch(V){ve("WebGLState:",V)}}function xt(){try{n.texImage2D(...arguments)}catch(V){ve("WebGLState:",V)}}function Dt(){try{n.texImage3D(...arguments)}catch(V){ve("WebGLState:",V)}}function Yt(V){return v[V]!==void 0?v[V]:n.getParameter(V)}function ne(V,bt){v[V]!==bt&&(n.pixelStorei(V,bt),v[V]=bt)}function $t(V){Bt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Bt.copy(V))}function U(V){Vt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Vt.copy(V))}function $(V,bt){let ct=d.get(bt);ct===void 0&&(ct=new WeakMap,d.set(bt,ct));let Lt=ct.get(V);Lt===void 0&&(Lt=n.getUniformBlockIndex(bt,V.name),ct.set(V,Lt))}function J(V,bt){let Lt=d.get(bt).get(V);u.get(bt)!==Lt&&(n.uniformBlockBinding(bt,Lt,V.__bindingPointIndex),u.set(bt,Lt))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},v={},Pt=null,Rt={},_={},b=new WeakMap,w=[],E=null,M=!1,y=null,L=null,z=null,A=null,R=null,D=null,H=null,C=new be(0,0,0),k=0,G=!1,Y=null,j=null,q=null,Z=null,K=null,Bt.set(0,0,n.canvas.width,n.canvas.height),Vt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:St,disable:Ut,bindFramebuffer:Ot,drawBuffers:zt,useProgram:it,setBlending:me,setMaterial:ye,setFlipSided:he,setCullFace:Se,setLineWidth:Ne,setPolygonOffset:oe,setScissorTest:Zt,activeTexture:pe,bindTexture:rt,unbindTexture:Be,compressedTexImage2D:Ee,compressedTexImage3D:X,texImage2D:xt,texImage3D:Dt,pixelStorei:ne,getParameter:Yt,updateUBOMapping:$,uniformBlockBinding:J,texStorage2D:Wt,texStorage3D:kt,texSubImage2D:P,texSubImage3D:nt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Ct,scissor:$t,viewport:U,reset:lt}}function XM(n,t,e,i,r,o,l){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ue,g=new WeakMap,v=new Set,_,b=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(X,P){return w?new OffscreenCanvas(X,P):mo("canvas")}function M(X,P,nt){let dt=1,Ct=Ee(X);if((Ct.width>nt||Ct.height>nt)&&(dt=nt/Math.max(Ct.width,Ct.height)),dt<1)if(typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap||typeof VideoFrame<"u"&&X instanceof VideoFrame){let Wt=Math.floor(dt*Ct.width),kt=Math.floor(dt*Ct.height);_===void 0&&(_=E(Wt,kt));let xt=P?E(Wt,kt):_;return xt.width=Wt,xt.height=kt,xt.getContext("2d").drawImage(X,0,0,Wt,kt),ge("WebGLRenderer: Texture has been resized from ("+Ct.width+"x"+Ct.height+") to ("+Wt+"x"+kt+")."),xt}else return"data"in X&&ge("WebGLRenderer: Image in DataTexture is too big ("+Ct.width+"x"+Ct.height+")."),X;return X}function y(X){return X.generateMipmaps}function L(X){n.generateMipmap(X)}function z(X){return X.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:X.isWebGL3DRenderTarget?n.TEXTURE_3D:X.isWebGLArrayRenderTarget||X.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(X,P,nt,dt,Ct,Wt=!1){if(X!==null){if(n[X]!==void 0)return n[X];ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+X+"'")}let kt;dt&&(kt=t.get("EXT_texture_norm16"),kt||ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xt=P;if(P===n.RED&&(nt===n.FLOAT&&(xt=n.R32F),nt===n.HALF_FLOAT&&(xt=n.R16F),nt===n.UNSIGNED_BYTE&&(xt=n.R8),nt===n.UNSIGNED_SHORT&&kt&&(xt=kt.R16_EXT),nt===n.SHORT&&kt&&(xt=kt.R16_SNORM_EXT)),P===n.RED_INTEGER&&(nt===n.UNSIGNED_BYTE&&(xt=n.R8UI),nt===n.UNSIGNED_SHORT&&(xt=n.R16UI),nt===n.UNSIGNED_INT&&(xt=n.R32UI),nt===n.BYTE&&(xt=n.R8I),nt===n.SHORT&&(xt=n.R16I),nt===n.INT&&(xt=n.R32I)),P===n.RG&&(nt===n.FLOAT&&(xt=n.RG32F),nt===n.HALF_FLOAT&&(xt=n.RG16F),nt===n.UNSIGNED_BYTE&&(xt=n.RG8),nt===n.UNSIGNED_SHORT&&kt&&(xt=kt.RG16_EXT),nt===n.SHORT&&kt&&(xt=kt.RG16_SNORM_EXT)),P===n.RG_INTEGER&&(nt===n.UNSIGNED_BYTE&&(xt=n.RG8UI),nt===n.UNSIGNED_SHORT&&(xt=n.RG16UI),nt===n.UNSIGNED_INT&&(xt=n.RG32UI),nt===n.BYTE&&(xt=n.RG8I),nt===n.SHORT&&(xt=n.RG16I),nt===n.INT&&(xt=n.RG32I)),P===n.RGB_INTEGER&&(nt===n.UNSIGNED_BYTE&&(xt=n.RGB8UI),nt===n.UNSIGNED_SHORT&&(xt=n.RGB16UI),nt===n.UNSIGNED_INT&&(xt=n.RGB32UI),nt===n.BYTE&&(xt=n.RGB8I),nt===n.SHORT&&(xt=n.RGB16I),nt===n.INT&&(xt=n.RGB32I)),P===n.RGBA_INTEGER&&(nt===n.UNSIGNED_BYTE&&(xt=n.RGBA8UI),nt===n.UNSIGNED_SHORT&&(xt=n.RGBA16UI),nt===n.UNSIGNED_INT&&(xt=n.RGBA32UI),nt===n.BYTE&&(xt=n.RGBA8I),nt===n.SHORT&&(xt=n.RGBA16I),nt===n.INT&&(xt=n.RGBA32I)),P===n.RGB&&(nt===n.UNSIGNED_SHORT&&kt&&(xt=kt.RGB16_EXT),nt===n.SHORT&&kt&&(xt=kt.RGB16_SNORM_EXT),nt===n.UNSIGNED_INT_5_9_9_9_REV&&(xt=n.RGB9_E5),nt===n.UNSIGNED_INT_10F_11F_11F_REV&&(xt=n.R11F_G11F_B10F)),P===n.RGBA){let Dt=Wt?po:Oe.getTransfer(Ct);nt===n.FLOAT&&(xt=n.RGBA32F),nt===n.HALF_FLOAT&&(xt=n.RGBA16F),nt===n.UNSIGNED_BYTE&&(xt=Dt===Ve?n.SRGB8_ALPHA8:n.RGBA8),nt===n.UNSIGNED_SHORT&&kt&&(xt=kt.RGBA16_EXT),nt===n.SHORT&&kt&&(xt=kt.RGBA16_SNORM_EXT),nt===n.UNSIGNED_SHORT_4_4_4_4&&(xt=n.RGBA4),nt===n.UNSIGNED_SHORT_5_5_5_1&&(xt=n.RGB5_A1)}return(xt===n.R16F||xt===n.R32F||xt===n.RG16F||xt===n.RG32F||xt===n.RGBA16F||xt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function R(X,P){let nt;return X?P===null||P===di||P===Ns?nt=n.DEPTH24_STENCIL8:P===pi?nt=n.DEPTH32F_STENCIL8:P===Ls&&(nt=n.DEPTH24_STENCIL8,ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===di||P===Ns?nt=n.DEPTH_COMPONENT24:P===pi?nt=n.DEPTH_COMPONENT32F:P===Ls&&(nt=n.DEPTH_COMPONENT16),nt}function D(X,P){return y(X)===!0||X.isFramebufferTexture&&X.minFilter!==pn&&X.minFilter!==yn?Math.log2(Math.max(P.width,P.height))+1:X.mipmaps!==void 0&&X.mipmaps.length>0?X.mipmaps.length:X.isCompressedTexture&&Array.isArray(X.image)?P.mipmaps.length:1}function H(X){let P=X.target;P.removeEventListener("dispose",H),k(P),P.isVideoTexture&&g.delete(P),P.isHTMLTexture&&v.delete(P)}function C(X){let P=X.target;P.removeEventListener("dispose",C),Y(P)}function k(X){let P=i.get(X);if(P.__webglInit===void 0)return;let nt=X.source,dt=b.get(nt);if(dt){let Ct=dt[P.__cacheKey];Ct.usedTimes--,Ct.usedTimes===0&&G(X),Object.keys(dt).length===0&&b.delete(nt)}i.remove(X)}function G(X){let P=i.get(X);n.deleteTexture(P.__webglTexture);let nt=X.source,dt=b.get(nt);delete dt[P.__cacheKey],l.memory.textures--}function Y(X){let P=i.get(X);if(X.depthTexture&&(X.depthTexture.dispose(),i.remove(X.depthTexture)),X.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(P.__webglFramebuffer[dt]))for(let Ct=0;Ct<P.__webglFramebuffer[dt].length;Ct++)n.deleteFramebuffer(P.__webglFramebuffer[dt][Ct]);else n.deleteFramebuffer(P.__webglFramebuffer[dt]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[dt])}else{if(Array.isArray(P.__webglFramebuffer))for(let dt=0;dt<P.__webglFramebuffer.length;dt++)n.deleteFramebuffer(P.__webglFramebuffer[dt]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let dt=0;dt<P.__webglColorRenderbuffer.length;dt++)P.__webglColorRenderbuffer[dt]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[dt]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let nt=X.textures;for(let dt=0,Ct=nt.length;dt<Ct;dt++){let Wt=i.get(nt[dt]);Wt.__webglTexture&&(n.deleteTexture(Wt.__webglTexture),l.memory.textures--),i.remove(nt[dt])}i.remove(X)}let j=0;function q(){j=0}function Z(){return j}function K(X){j=X}function ht(){let X=j;return X>=r.maxTextures&&ge("WebGLTextures: Trying to use "+(X+1)+" texture units while this GPU supports only "+r.maxTextures),j+=1,X}function gt(X){let P=[];return P.push(X.wrapS),P.push(X.wrapT),P.push(X.wrapR||0),P.push(X.magFilter),P.push(X.minFilter),P.push(X.anisotropy),P.push(X.internalFormat),P.push(X.format),P.push(X.type),P.push(X.generateMipmaps),P.push(X.premultiplyAlpha),P.push(X.flipY),P.push(X.unpackAlignment),P.push(X.colorSpace),P.join()}function Et(X,P){let nt=i.get(X);if(X.isVideoTexture&&rt(X),X.isRenderTargetTexture===!1&&X.isExternalTexture!==!0&&X.version>0&&nt.__version!==X.version){let dt=X.image;if(dt===null)ge("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(nt,X,P);return}}else X.isExternalTexture&&(nt.__webglTexture=X.sourceTexture?X.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture,n.TEXTURE0+P)}function yt(X,P){let nt=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&nt.__version!==X.version){Ut(nt,X,P);return}else X.isExternalTexture&&(nt.__webglTexture=X.sourceTexture?X.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,nt.__webglTexture,n.TEXTURE0+P)}function Pt(X,P){let nt=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&nt.__version!==X.version){Ut(nt,X,P);return}e.bindTexture(n.TEXTURE_3D,nt.__webglTexture,n.TEXTURE0+P)}function Rt(X,P){let nt=i.get(X);if(X.isCubeDepthTexture!==!0&&X.version>0&&nt.__version!==X.version){Ot(nt,X,P);return}e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture,n.TEXTURE0+P)}let jt={[qa]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},at={[pn]:n.NEAREST,[Ed]:n.NEAREST_MIPMAP_NEAREST,[Bo]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[Sl]:n.LINEAR_MIPMAP_NEAREST,[gr]:n.LINEAR_MIPMAP_LINEAR},Bt={[Pd]:n.NEVER,[Dd]:n.ALWAYS,[Id]:n.LESS,[ac]:n.LEQUAL,[Rd]:n.EQUAL,[lc]:n.GEQUAL,[Ld]:n.GREATER,[Nd]:n.NOTEQUAL};function Vt(X,P){if(P.type===pi&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===yn||P.magFilter===Sl||P.magFilter===Bo||P.magFilter===gr||P.minFilter===yn||P.minFilter===Sl||P.minFilter===Bo||P.minFilter===gr)&&ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(X,n.TEXTURE_WRAP_S,jt[P.wrapS]),n.texParameteri(X,n.TEXTURE_WRAP_T,jt[P.wrapT]),(X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY)&&n.texParameteri(X,n.TEXTURE_WRAP_R,jt[P.wrapR]),n.texParameteri(X,n.TEXTURE_MAG_FILTER,at[P.magFilter]),n.texParameteri(X,n.TEXTURE_MIN_FILTER,at[P.minFilter]),P.compareFunction&&(n.texParameteri(X,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(X,n.TEXTURE_COMPARE_FUNC,Bt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===pn||P.minFilter!==Bo&&P.minFilter!==gr||P.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(X,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function Gt(X,P){let nt=!1;X.__webglInit===void 0&&(X.__webglInit=!0,P.addEventListener("dispose",H));let dt=P.source,Ct=b.get(dt);Ct===void 0&&(Ct={},b.set(dt,Ct));let Wt=gt(P);if(Wt!==X.__cacheKey){Ct[Wt]===void 0&&(Ct[Wt]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,nt=!0),Ct[Wt].usedTimes++;let kt=Ct[X.__cacheKey];kt!==void 0&&(Ct[X.__cacheKey].usedTimes--,kt.usedTimes===0&&G(P)),X.__cacheKey=Wt,X.__webglTexture=Ct[Wt].texture}return nt}function ft(X,P,nt){return Math.floor(Math.floor(X/nt)/P)}function St(X,P,nt,dt){let Wt=X.updateRanges;if(Wt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,P.width,P.height,nt,dt,P.data);else{Wt.sort((ne,$t)=>ne.start-$t.start);let kt=0;for(let ne=1;ne<Wt.length;ne++){let $t=Wt[kt],U=Wt[ne],$=$t.start+$t.count,J=ft(U.start,P.width,4),lt=ft($t.start,P.width,4);U.start<=$+1&&J===lt&&ft(U.start+U.count-1,P.width,4)===J?$t.count=Math.max($t.count,U.start+U.count-$t.start):(++kt,Wt[kt]=U)}Wt.length=kt+1;let xt=e.getParameter(n.UNPACK_ROW_LENGTH),Dt=e.getParameter(n.UNPACK_SKIP_PIXELS),Yt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,P.width);for(let ne=0,$t=Wt.length;ne<$t;ne++){let U=Wt[ne],$=Math.floor(U.start/4),J=Math.ceil(U.count/4),lt=$%P.width,V=Math.floor($/P.width),bt=J,ct=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,lt,V,bt,ct,nt,dt,P.data)}X.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,xt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Yt)}}function Ut(X,P,nt){let dt=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(dt=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(dt=n.TEXTURE_3D);let Ct=Gt(X,P),Wt=P.source;e.bindTexture(dt,X.__webglTexture,n.TEXTURE0+nt);let kt=i.get(Wt);if(Wt.version!==kt.__version||Ct===!0){if(e.activeTexture(n.TEXTURE0+nt),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let ct=Oe.getPrimaries(Oe.workingColorSpace),Lt=P.colorSpace===Yi?null:Oe.getPrimaries(P.colorSpace),mt=P.colorSpace===Yi||ct===Lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment);let Dt=M(P.image,!1,r.maxTextureSize);Dt=Be(P,Dt);let Yt=o.convert(P.format,P.colorSpace),ne=o.convert(P.type),$t=A(P.internalFormat,Yt,ne,P.normalized,P.colorSpace,P.isVideoTexture);Vt(dt,P);let U,$=P.mipmaps,J=P.isVideoTexture!==!0,lt=kt.__version===void 0||Ct===!0,V=Wt.dataReady,bt=D(P,Dt);if(P.isDepthTexture)$t=R(P.format===_r,P.type),lt&&(J?e.texStorage2D(n.TEXTURE_2D,1,$t,Dt.width,Dt.height):e.texImage2D(n.TEXTURE_2D,0,$t,Dt.width,Dt.height,0,Yt,ne,null));else if(P.isDataTexture)if($.length>0){J&&lt&&e.texStorage2D(n.TEXTURE_2D,bt,$t,$[0].width,$[0].height);for(let ct=0,Lt=$.length;ct<Lt;ct++)U=$[ct],J?V&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,U.width,U.height,Yt,ne,U.data):e.texImage2D(n.TEXTURE_2D,ct,$t,U.width,U.height,0,Yt,ne,U.data);P.generateMipmaps=!1}else J?(lt&&e.texStorage2D(n.TEXTURE_2D,bt,$t,Dt.width,Dt.height),V&&St(P,Dt,Yt,ne)):e.texImage2D(n.TEXTURE_2D,0,$t,Dt.width,Dt.height,0,Yt,ne,Dt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){J&&lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,$t,$[0].width,$[0].height,Dt.depth);for(let ct=0,Lt=$.length;ct<Lt;ct++)if(U=$[ct],P.format!==ni)if(Yt!==null)if(J){if(V)if(P.layerUpdates.size>0){let mt=iu(U.width,U.height,P.format,P.type);for(let wt of P.layerUpdates){let At=U.data.subarray(wt*mt/U.data.BYTES_PER_ELEMENT,(wt+1)*mt/U.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,wt,U.width,U.height,1,Yt,At)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,U.width,U.height,Dt.depth,Yt,U.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,$t,U.width,U.height,Dt.depth,0,U.data,0,0);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,U.width,U.height,Dt.depth,Yt,ne,U.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,$t,U.width,U.height,Dt.depth,0,Yt,ne,U.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{J&&lt&&e.texStorage2D(n.TEXTURE_2D,bt,$t,$[0].width,$[0].height);for(let ct=0,Lt=$.length;ct<Lt;ct++)U=$[ct],P.format!==ni?Yt!==null?J?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,U.width,U.height,Yt,U.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,$t,U.width,U.height,0,U.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?V&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,U.width,U.height,Yt,ne,U.data):e.texImage2D(n.TEXTURE_2D,ct,$t,U.width,U.height,0,Yt,ne,U.data)}else if(P.isDataArrayTexture)if(J){if(lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,$t,Dt.width,Dt.height,Dt.depth),V)if(P.layerUpdates.size>0){let ct=iu(Dt.width,Dt.height,P.format,P.type);for(let Lt of P.layerUpdates){let mt=Dt.data.subarray(Lt*ct/Dt.data.BYTES_PER_ELEMENT,(Lt+1)*ct/Dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Lt,Dt.width,Dt.height,1,Yt,ne,mt)}P.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,Yt,ne,Dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,$t,Dt.width,Dt.height,Dt.depth,0,Yt,ne,Dt.data);else if(P.isData3DTexture)J?(lt&&e.texStorage3D(n.TEXTURE_3D,bt,$t,Dt.width,Dt.height,Dt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,Yt,ne,Dt.data)):e.texImage3D(n.TEXTURE_3D,0,$t,Dt.width,Dt.height,Dt.depth,0,Yt,ne,Dt.data);else if(P.isFramebufferTexture){if(lt)if(J)e.texStorage2D(n.TEXTURE_2D,bt,$t,Dt.width,Dt.height);else{let ct=Dt.width,Lt=Dt.height;for(let mt=0;mt<bt;mt++)e.texImage2D(n.TEXTURE_2D,mt,$t,ct,Lt,0,Yt,ne,null),ct>>=1,Lt>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in n){let ct=n.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),Dt.parentNode!==ct){ct.appendChild(Dt),v.add(P),ct.onpaint=Lt=>{let mt=Lt.changedElements;for(let wt of v)mt.includes(wt.image)&&(wt.needsUpdate=!0)},ct.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Dt);else{let mt=n.RGBA,wt=n.RGBA,At=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,mt,wt,At,Dt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($.length>0){if(J&&lt){let ct=Ee($[0]);e.texStorage2D(n.TEXTURE_2D,bt,$t,ct.width,ct.height)}for(let ct=0,Lt=$.length;ct<Lt;ct++)U=$[ct],J?V&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Yt,ne,U):e.texImage2D(n.TEXTURE_2D,ct,$t,Yt,ne,U);P.generateMipmaps=!1}else if(J){if(lt){let ct=Ee(Dt);e.texStorage2D(n.TEXTURE_2D,bt,$t,ct.width,ct.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Yt,ne,Dt)}else e.texImage2D(n.TEXTURE_2D,0,$t,Yt,ne,Dt);y(P)&&L(dt),kt.__version=Wt.version,P.onUpdate&&P.onUpdate(P)}X.__version=P.version}function Ot(X,P,nt){if(P.image.length!==6)return;let dt=Gt(X,P),Ct=P.source;e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+nt);let Wt=i.get(Ct);if(Ct.version!==Wt.__version||dt===!0){e.activeTexture(n.TEXTURE0+nt);let kt=Oe.getPrimaries(Oe.workingColorSpace),xt=P.colorSpace===Yi?null:Oe.getPrimaries(P.colorSpace),Dt=P.colorSpace===Yi||kt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Yt=P.isCompressedTexture||P.image[0].isCompressedTexture,ne=P.image[0]&&P.image[0].isDataTexture,$t=[];for(let wt=0;wt<6;wt++)!Yt&&!ne?$t[wt]=M(P.image[wt],!0,r.maxCubemapSize):$t[wt]=ne?P.image[wt].image:P.image[wt],$t[wt]=Be(P,$t[wt]);let U=$t[0],$=o.convert(P.format,P.colorSpace),J=o.convert(P.type),lt=A(P.internalFormat,$,J,P.normalized,P.colorSpace),V=P.isVideoTexture!==!0,bt=Wt.__version===void 0||dt===!0,ct=Ct.dataReady,Lt=D(P,U);Vt(n.TEXTURE_CUBE_MAP,P);let mt;if(Yt){V&&bt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,lt,U.width,U.height);for(let wt=0;wt<6;wt++){mt=$t[wt].mipmaps;for(let At=0;At<mt.length;At++){let qt=mt[At];P.format!==ni?$!==null?V?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,At,0,0,qt.width,qt.height,$,qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,At,lt,qt.width,qt.height,0,qt.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,At,0,0,qt.width,qt.height,$,J,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,At,lt,qt.width,qt.height,0,$,J,qt.data)}}}else{if(mt=P.mipmaps,V&&bt){mt.length>0&&Lt++;let wt=Ee($t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,lt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(ne){V?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,$t[wt].width,$t[wt].height,$,J,$t[wt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,lt,$t[wt].width,$t[wt].height,0,$,J,$t[wt].data);for(let At=0;At<mt.length;At++){let Ie=mt[At].image[wt].image;V?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,At+1,0,0,Ie.width,Ie.height,$,J,Ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,At+1,lt,Ie.width,Ie.height,0,$,J,Ie.data)}}else{V?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,$,J,$t[wt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,lt,$,J,$t[wt]);for(let At=0;At<mt.length;At++){let qt=mt[At];V?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,At+1,0,0,$,J,qt.image[wt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,At+1,lt,$,J,qt.image[wt])}}}y(P)&&L(n.TEXTURE_CUBE_MAP),Wt.__version=Ct.version,P.onUpdate&&P.onUpdate(P)}X.__version=P.version}function zt(X,P,nt,dt,Ct,Wt){let kt=o.convert(nt.format,nt.colorSpace),xt=o.convert(nt.type),Dt=A(nt.internalFormat,kt,xt,nt.normalized,nt.colorSpace),Yt=i.get(P),ne=i.get(nt);if(ne.__renderTarget=P,!Yt.__hasExternalTextures){let $t=Math.max(1,P.width>>Wt),U=Math.max(1,P.height>>Wt);Ct===n.TEXTURE_3D||Ct===n.TEXTURE_2D_ARRAY?e.texImage3D(Ct,Wt,Dt,$t,U,P.depth,0,kt,xt,null):e.texImage2D(Ct,Wt,Dt,$t,U,0,kt,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,X),pe(P)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,Ct,ne.__webglTexture,0,Zt(P)):(Ct===n.TEXTURE_2D||Ct>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Ct<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,dt,Ct,ne.__webglTexture,Wt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(X,P,nt){if(n.bindRenderbuffer(n.RENDERBUFFER,X),P.depthBuffer){let dt=P.depthTexture,Ct=dt&&dt.isDepthTexture?dt.type:null,Wt=R(P.stencilBuffer,Ct),kt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(P)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt(P),Wt,P.width,P.height):nt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt(P),Wt,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Wt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,kt,n.RENDERBUFFER,X)}else{let dt=P.textures;for(let Ct=0;Ct<dt.length;Ct++){let Wt=dt[Ct],kt=o.convert(Wt.format,Wt.colorSpace),xt=o.convert(Wt.type),Dt=A(Wt.internalFormat,kt,xt,Wt.normalized,Wt.colorSpace);pe(P)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt(P),Dt,P.width,P.height):nt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt(P),Dt,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Dt,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(X,P,nt){let dt=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,X),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Ct=i.get(P.depthTexture);if(Ct.__renderTarget=P,(!Ct.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),dt){if(Ct.__webglInit===void 0&&(Ct.__webglInit=!0,P.depthTexture.addEventListener("dispose",H)),Ct.__webglTexture===void 0){Ct.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Ct.__webglTexture),Vt(n.TEXTURE_CUBE_MAP,P.depthTexture);let Yt=o.convert(P.depthTexture.format),ne=o.convert(P.depthTexture.type),$t;P.depthTexture.format===bi?$t=n.DEPTH_COMPONENT24:P.depthTexture.format===_r&&($t=n.DEPTH24_STENCIL8);for(let U=0;U<6;U++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,$t,P.width,P.height,0,Yt,ne,null)}}else Et(P.depthTexture,0);let Wt=Ct.__webglTexture,kt=Zt(P),xt=dt?n.TEXTURE_CUBE_MAP_POSITIVE_X+nt:n.TEXTURE_2D,Dt=P.depthTexture.format===_r?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(P.depthTexture.format===bi)pe(P)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Dt,xt,Wt,0,kt):n.framebufferTexture2D(n.FRAMEBUFFER,Dt,xt,Wt,0);else if(P.depthTexture.format===_r)pe(P)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Dt,xt,Wt,0,kt):n.framebufferTexture2D(n.FRAMEBUFFER,Dt,xt,Wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(X){let P=i.get(X),nt=X.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==X.depthTexture){let dt=X.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),dt){let Ct=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,dt.removeEventListener("dispose",Ct)};dt.addEventListener("dispose",Ct),P.__depthDisposeCallback=Ct}P.__boundDepthTexture=dt}if(X.depthTexture&&!P.__autoAllocateDepthBuffer)if(nt)for(let dt=0;dt<6;dt++)Pe(P.__webglFramebuffer[dt],X,dt);else{let dt=X.texture.mipmaps;dt&&dt.length>0?Pe(P.__webglFramebuffer[0],X,0):Pe(P.__webglFramebuffer,X,0)}else if(nt){P.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[dt]),P.__webglDepthbuffer[dt]===void 0)P.__webglDepthbuffer[dt]=n.createRenderbuffer(),it(P.__webglDepthbuffer[dt],X,!1);else{let Ct=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Wt=P.__webglDepthbuffer[dt];n.bindRenderbuffer(n.RENDERBUFFER,Wt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,Wt)}}else{let dt=X.texture.mipmaps;if(dt&&dt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),it(P.__webglDepthbuffer,X,!1);else{let Ct=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Wt=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Wt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,Wt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function me(X,P,nt){let dt=i.get(X);P!==void 0&&zt(dt.__webglFramebuffer,X,X.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),nt!==void 0&&de(X)}function ye(X){let P=X.texture,nt=i.get(X),dt=i.get(P);X.addEventListener("dispose",C);let Ct=X.textures,Wt=X.isWebGLCubeRenderTarget===!0,kt=Ct.length>1;if(kt||(dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture()),dt.__version=P.version,l.memory.textures++),Wt){nt.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(P.mipmaps&&P.mipmaps.length>0){nt.__webglFramebuffer[xt]=[];for(let Dt=0;Dt<P.mipmaps.length;Dt++)nt.__webglFramebuffer[xt][Dt]=n.createFramebuffer()}else nt.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){nt.__webglFramebuffer=[];for(let xt=0;xt<P.mipmaps.length;xt++)nt.__webglFramebuffer[xt]=n.createFramebuffer()}else nt.__webglFramebuffer=n.createFramebuffer();if(kt)for(let xt=0,Dt=Ct.length;xt<Dt;xt++){let Yt=i.get(Ct[xt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),l.memory.textures++)}if(X.samples>0&&pe(X)===!1){nt.__webglMultisampledFramebuffer=n.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let xt=0;xt<Ct.length;xt++){let Dt=Ct[xt];nt.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,nt.__webglColorRenderbuffer[xt]);let Yt=o.convert(Dt.format,Dt.colorSpace),ne=o.convert(Dt.type),$t=A(Dt.internalFormat,Yt,ne,Dt.normalized,Dt.colorSpace,X.isXRRenderTarget===!0),U=Zt(X);n.renderbufferStorageMultisample(n.RENDERBUFFER,U,$t,X.width,X.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,nt.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),X.depthBuffer&&(nt.__webglDepthRenderbuffer=n.createRenderbuffer(),it(nt.__webglDepthRenderbuffer,X,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Wt){e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture),Vt(n.TEXTURE_CUBE_MAP,P);for(let xt=0;xt<6;xt++)if(P.mipmaps&&P.mipmaps.length>0)for(let Dt=0;Dt<P.mipmaps.length;Dt++)zt(nt.__webglFramebuffer[xt][Dt],X,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt);else zt(nt.__webglFramebuffer[xt],X,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);y(P)&&L(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let xt=0,Dt=Ct.length;xt<Dt;xt++){let Yt=Ct[xt],ne=i.get(Yt),$t=n.TEXTURE_2D;(X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&($t=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture($t,ne.__webglTexture),Vt($t,Yt),zt(nt.__webglFramebuffer,X,Yt,n.COLOR_ATTACHMENT0+xt,$t,0),y(Yt)&&L($t)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(xt=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,dt.__webglTexture),Vt(xt,P),P.mipmaps&&P.mipmaps.length>0)for(let Dt=0;Dt<P.mipmaps.length;Dt++)zt(nt.__webglFramebuffer[Dt],X,P,n.COLOR_ATTACHMENT0,xt,Dt);else zt(nt.__webglFramebuffer,X,P,n.COLOR_ATTACHMENT0,xt,0);y(P)&&L(xt),e.unbindTexture()}X.depthBuffer&&de(X)}function he(X){let P=X.textures;for(let nt=0,dt=P.length;nt<dt;nt++){let Ct=P[nt];if(y(Ct)){let Wt=z(X),kt=i.get(Ct).__webglTexture;e.bindTexture(Wt,kt),L(Wt),e.unbindTexture()}}}let Se=[],Ne=[];function oe(X){if(X.samples>0){if(pe(X)===!1){let P=X.textures,nt=X.width,dt=X.height,Ct=n.COLOR_BUFFER_BIT,Wt=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,kt=i.get(X),xt=P.length>1;if(xt)for(let Yt=0;Yt<P.length;Yt++)e.bindFramebuffer(n.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,kt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);let Dt=X.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Yt=0;Yt<P.length;Yt++){if(X.resolveDepthBuffer&&(X.depthBuffer&&(Ct|=n.DEPTH_BUFFER_BIT),X.stencilBuffer&&X.resolveStencilBuffer&&(Ct|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,kt.__webglColorRenderbuffer[Yt]);let ne=i.get(P[Yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,Ct,n.NEAREST),u===!0&&(Se.length=0,Ne.length=0,Se.push(n.COLOR_ATTACHMENT0+Yt),X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&(Se.push(Wt),Ne.push(Wt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Yt=0;Yt<P.length;Yt++){e.bindFramebuffer(n.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.RENDERBUFFER,kt.__webglColorRenderbuffer[Yt]);let ne=i.get(P[Yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,kt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.TEXTURE_2D,ne,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&u){let P=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function Zt(X){return Math.min(r.maxSamples,X.samples)}function pe(X){let P=i.get(X);return X.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function rt(X){let P=l.render.frame;g.get(X)!==P&&(g.set(X,P),X.update())}function Be(X,P){let nt=X.colorSpace,dt=X.format,Ct=X.type;return X.isCompressedTexture===!0||X.isVideoTexture===!0||nt!==fo&&nt!==Yi&&(Oe.getTransfer(nt)===Ve?(dt!==ni||Ct!==On)&&ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ve("WebGLTextures: Unsupported texture color space:",nt)),P}function Ee(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement?(d.width=X.naturalWidth||X.width,d.height=X.naturalHeight||X.height):typeof VideoFrame<"u"&&X instanceof VideoFrame?(d.width=X.displayWidth,d.height=X.displayHeight):(d.width=X.width,d.height=X.height),d}this.allocateTextureUnit=ht,this.resetTextureUnits=q,this.getTextureUnits=Z,this.setTextureUnits=K,this.setTexture2D=Et,this.setTexture2DArray=yt,this.setTexture3D=Pt,this.setTextureCube=Rt,this.rebindTextures=me,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function WM(n,t){function e(i,r=Yi){let o,l=Oe.getTransfer(r);if(i===On)return n.UNSIGNED_BYTE;if(i===El)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gh)return n.BYTE;if(i===Xh)return n.SHORT;if(i===Ls)return n.UNSIGNED_SHORT;if(i===wl)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===mi)return n.HALF_FLOAT;if(i===$h)return n.ALPHA;if(i===qh)return n.RGB;if(i===ni)return n.RGBA;if(i===bi)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===Zh)return n.RED;if(i===Al)return n.RED_INTEGER;if(i===vr)return n.RG;if(i===Cl)return n.RG_INTEGER;if(i===Pl)return n.RGBA_INTEGER;if(i===ko||i===zo||i===Vo||i===Ho)if(l===Ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ho)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Il||i===Rl||i===Ll||i===Nl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Il)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ll)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Ol||i===Fl||i===Ul||i===Bl||i===Go||i===kl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Dl||i===Ol)return l===Ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Fl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ul)return o.COMPRESSED_R11_EAC;if(i===Bl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Go)return o.COMPRESSED_RG11_EAC;if(i===kl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zl||i===Vl||i===Hl||i===Gl||i===Xl||i===Wl||i===Yl||i===$l||i===ql||i===Zl||i===Jl||i===jl||i===Kl||i===Ql)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===zl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$l)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ql)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tc||i===ec||i===nc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===tc)return l===Ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ic||i===rc||i===Xo||i===sc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===ic)return o.COMPRESSED_RED_RGTC1_EXT;if(i===rc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function ZM(n,t){function e(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function i(M,y){y.color.getRGB(M.fogColor.value,tu(n)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function r(M,y,L,z,A){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?o(M,y):y.isMeshLambertMaterial?(o(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(o(M,y),v(M,y)):y.isMeshPhongMaterial?(o(M,y),g(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(o(M,y),_(M,y),y.isMeshPhysicalMaterial&&b(M,y,A)):y.isMeshMatcapMaterial?(o(M,y),w(M,y)):y.isMeshDepthMaterial?o(M,y):y.isMeshDistanceMaterial?(o(M,y),E(M,y)):y.isMeshNormalMaterial?o(M,y):y.isLineBasicMaterial?(l(M,y),y.isLineDashedMaterial&&c(M,y)):y.isPointsMaterial?u(M,y,L,z):y.isSpriteMaterial?d(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,e(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,e(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,e(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Rn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,e(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Rn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,e(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,e(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);let L=t.get(y),z=L.envMap,A=L.envMapRotation;z&&(M.envMap.value=z,M.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(A)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(_p),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,M.aoMapTransform))}function l(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,e(y.map,M.mapTransform))}function c(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function u(M,y,L,z){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*L,M.scale.value=z*.5,y.map&&(M.map.value=y.map,e(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,e(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,e(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,e(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function b(M,y,L){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Rn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.retroreflectivity>0&&(M.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,M.specularIntensityMapTransform))}function w(M,y){y.matcap&&(M.matcap.value=y.matcap)}function E(M,y){let L=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function JM(n,t,e,i){let r={},o={},l=[],c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(A,R){let D=R.program;i.uniformBlockBinding(A,D)}function d(A,R){let D=r[A.id];D===void 0&&(M(A),D=g(A),r[A.id]=D,A.addEventListener("dispose",L));let H=R.program;i.updateUBOMapping(A,H);let C=t.render.frame;o[A.id]!==C&&(_(A),o[A.id]=C)}function g(A){let R=v();A.__bindingPointIndex=R;let D=n.createBuffer(),H=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,H,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,D),D}function v(){for(let A=0;A<c;A++)if(l.indexOf(A)===-1)return l.push(A),A;return ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){let R=r[A.id],D=A.uniforms,H=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let C=0,k=D.length;C<k;C++){let G=D[C];if(Array.isArray(G))for(let Y=0,j=G.length;Y<j;Y++)b(G[Y],C,Y,H);else b(G,C,0,H)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function b(A,R,D,H){if(E(A,R,D,H)===!0){let C=A.__offset,k=A.value;if(Array.isArray(k)){let G=0;for(let Y=0;Y<k.length;Y++){let j=k[Y],q=y(j);w(j,A.__data,G),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(k,A.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,A.__data)}}function w(A,R,D){typeof A=="number"||typeof A=="boolean"?R[0]=A:A.isMatrix3?(R[0]=A.elements[0],R[1]=A.elements[1],R[2]=A.elements[2],R[3]=0,R[4]=A.elements[3],R[5]=A.elements[4],R[6]=A.elements[5],R[7]=0,R[8]=A.elements[6],R[9]=A.elements[7],R[10]=A.elements[8],R[11]=0):ArrayBuffer.isView(A)?R.set(new A.constructor(A.buffer,A.byteOffset,R.length)):A.toArray(R,D)}function E(A,R,D,H){let C=A.value,k=R+"_"+D;if(H[k]===void 0)return typeof C=="number"||typeof C=="boolean"?H[k]=C:ArrayBuffer.isView(C)?H[k]=C.slice():H[k]=C.clone(),!0;{let G=H[k];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return H[k]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(G.equals(C)===!1)return G.copy(C),!0}}return!1}function M(A){let R=A.uniforms,D=0,H=16;for(let k=0,G=R.length;k<G;k++){let Y=Array.isArray(R[k])?R[k]:[R[k]];for(let j=0,q=Y.length;j<q;j++){let Z=Y[j],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let ht=0,gt=K.length;ht<gt;ht++){let Et=K[ht],yt=y(Et),Pt=D%H,Rt=Pt%yt.boundary,jt=Pt+Rt;D+=Rt,jt!==0&&H-jt<yt.storage&&(D+=H-jt),Z.__data=new Float32Array(yt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=D,D+=yt.storage}}}let C=D%H;return C>0&&(D+=H-C),A.__size=D,A.__cache={},this}function y(A){let R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=48,R.storage=48):A.isMatrix4?(R.boundary=64,R.storage=64):A.isTexture?ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(R.boundary=16,R.storage=A.byteLength):ge("WebGLRenderer: Unsupported uniform value type.",A),R}function L(A){let R=A.target;R.removeEventListener("dispose",L);let D=l.indexOf(R.__bindingPointIndex);l.splice(D,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete o[R.id]}function z(){for(let A in r)n.deleteBuffer(r[A]);l=[],r={},o={}}return{bind:u,update:d,dispose:z}}function KM(){return Ti===null&&(Ti=new el(jM,16,16,vr,mi),Ti.name="DFG_LUT",Ti.minFilter=yn,Ti.magFilter=yn,Ti.wrapS=Mi,Ti.wrapT=Mi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var u_,f_,d_,p_,m_,g_,__,v_,y_,x_,M_,b_,S_,w_,E_,T_,A_,C_,P_,I_,R_,L_,N_,D_,O_,F_,U_,B_,k_,z_,V_,H_,G_,X_,W_,Y_,$_,q_,Z_,J_,j_,K_,Q_,tv,ev,nv,iv,rv,sv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,vv,yv,xv,Mv,bv,Sv,wv,Ev,Tv,Av,Cv,Pv,Iv,Rv,Lv,Nv,Dv,Ov,Fv,Uv,Bv,kv,zv,Vv,Hv,Gv,Xv,Wv,Yv,$v,qv,Zv,Jv,jv,Kv,Qv,ty,ey,ny,iy,ry,sy,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,_y,vy,yy,xy,My,by,Sy,wy,Ey,Ty,Ay,Cy,Py,Iy,Ry,Ly,Ny,Dy,Oy,Fy,Uy,By,ky,zy,Vy,Hy,Gy,Xy,Ce,ee,Ai,cc,Wy,fp,Os,jy,Ky,Qy,Wo,Xd,su,ou,au,lu,tx,Ur,uc,fc,ux,dp,uu,pp,mp,gp,qd,Zd,Jd,jd,Kd,fu,du,pu,cu,Fs,tM,eM,ep,sM,hc,uM,fM,pM,gM,vM,xM,bM,TM,gu,_u,DM,BM,kM,zM,VM,hp,Yo,hu,YM,$M,vu,yu,qM,_p,jM,Ti,dc,gc=gn(()=>{ru();ru();u_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f_=`#ifdef USE_ALPHAHASH
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
#endif`,d_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,__=`#ifdef USE_AOMAP
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
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y_=`#ifdef USE_BATCHING
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
#endif`,x_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w_=`#ifdef USE_IRIDESCENCE
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
#endif`,E_=`#ifdef USE_BUMPMAP
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
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,D_=`#define PI 3.141592653589793
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
} // validated`,O_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F_=`vec3 transformedNormal = objectNormal;
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
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V_="gl_FragColor = linearToOutputTexel( gl_FragColor );",H_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G_=`#ifdef USE_ENVMAP
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
#endif`,X_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
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
}`,Q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,iv=`#ifdef USE_ENVMAP
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
#endif`,rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lv=`PhysicalMaterial material;
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
#endif`,cv=`uniform sampler2D dfgLUT;
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
}`,hv=`
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
#endif`,uv=`#if defined( RE_IndirectDiffuse )
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
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mv=`#if defined( USE_POINTS_UV )
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
#endif`,bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`#ifdef USE_MORPHTARGETS
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
#endif`,Cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dv=`#ifdef USE_NORMALMAP
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
#endif`,Ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jv=`float getShadowMask() {
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
}`,jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kv=`#ifdef USE_SKINNING
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
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ty=`#ifdef USE_SKINNING
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
#endif`,ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sy=`#ifdef USE_TRANSMISSION
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
#endif`,oy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fy=`uniform sampler2D t2D;
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`#ifdef ENVMAP_TYPE_CUBE
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`#include <common>
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
}`,vy=`#if DEPTH_PACKING == 3200
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
}`,yy=`#define DISTANCE
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
}`,xy=`#define DISTANCE
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
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,by=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`uniform float scale;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ey=`#include <common>
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
}`,Ty=`uniform vec3 diffuse;
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
}`,Ay=`#define LAMBERT
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
}`,Cy=`#define LAMBERT
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
}`,Py=`#define MATCAP
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
}`,Iy=`#define MATCAP
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
}`,Ry=`#define NORMAL
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
}`,Ly=`#define NORMAL
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
}`,Ny=`#define PHONG
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
}`,Dy=`#define PHONG
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
}`,Oy=`#define STANDARD
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
}`,Fy=`#define STANDARD
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
}`,Uy=`#define TOON
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
}`,By=`#define TOON
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
}`,ky=`uniform float size;
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
}`,zy=`uniform vec3 diffuse;
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
}`,Vy=`#include <common>
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
}`,Hy=`uniform vec3 color;
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
}`,Gy=`uniform float rotation;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:u_,alphahash_pars_fragment:f_,alphamap_fragment:d_,alphamap_pars_fragment:p_,alphatest_fragment:m_,alphatest_pars_fragment:g_,aomap_fragment:__,aomap_pars_fragment:v_,batching_pars_vertex:y_,batching_vertex:x_,begin_vertex:M_,beginnormal_vertex:b_,bsdfs:S_,iridescence_fragment:w_,bumpmap_pars_fragment:E_,clipping_planes_fragment:T_,clipping_planes_pars_fragment:A_,clipping_planes_pars_vertex:C_,clipping_planes_vertex:P_,color_fragment:I_,color_pars_fragment:R_,color_pars_vertex:L_,color_vertex:N_,common:D_,cube_uv_reflection_fragment:O_,defaultnormal_vertex:F_,displacementmap_pars_vertex:U_,displacementmap_vertex:B_,emissivemap_fragment:k_,emissivemap_pars_fragment:z_,colorspace_fragment:V_,colorspace_pars_fragment:H_,envmap_fragment:G_,envmap_common_pars_fragment:X_,envmap_pars_fragment:W_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:iv,envmap_vertex:$_,fog_vertex:q_,fog_pars_vertex:Z_,fog_fragment:J_,fog_pars_fragment:j_,gradientmap_pars_fragment:K_,lightmap_pars_fragment:Q_,lights_lambert_fragment:tv,lights_lambert_pars_fragment:ev,lights_pars_begin:nv,lights_toon_fragment:rv,lights_toon_pars_fragment:sv,lights_phong_fragment:ov,lights_phong_pars_fragment:av,lights_physical_fragment:lv,lights_physical_pars_fragment:cv,lights_fragment_begin:hv,lights_fragment_maps:uv,lights_fragment_end:fv,lightprobes_pars_fragment:dv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:gv,logdepthbuf_vertex:_v,map_fragment:vv,map_pars_fragment:yv,map_particle_fragment:xv,map_particle_pars_fragment:Mv,metalnessmap_fragment:bv,metalnessmap_pars_fragment:Sv,morphinstance_vertex:wv,morphcolor_vertex:Ev,morphnormal_vertex:Tv,morphtarget_pars_vertex:Av,morphtarget_vertex:Cv,normal_fragment_begin:Pv,normal_fragment_maps:Iv,normal_pars_fragment:Rv,normal_pars_vertex:Lv,normal_vertex:Nv,normalmap_pars_fragment:Dv,clearcoat_normal_fragment_begin:Ov,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Uv,iridescence_pars_fragment:Bv,opaque_fragment:kv,packing:zv,premultiplied_alpha_fragment:Vv,project_vertex:Hv,dithering_fragment:Gv,dithering_pars_fragment:Xv,roughnessmap_fragment:Wv,roughnessmap_pars_fragment:Yv,shadowmap_pars_fragment:$v,shadowmap_pars_vertex:qv,shadowmap_vertex:Zv,shadowmask_pars_fragment:Jv,skinbase_vertex:jv,skinning_pars_vertex:Kv,skinning_vertex:Qv,skinnormal_vertex:ty,specularmap_fragment:ey,specularmap_pars_fragment:ny,tonemapping_fragment:iy,tonemapping_pars_fragment:ry,transmission_fragment:sy,transmission_pars_fragment:oy,uv_pars_fragment:ay,uv_pars_vertex:ly,uv_vertex:cy,worldpos_vertex:hy,background_vert:uy,background_frag:fy,backgroundCube_vert:dy,backgroundCube_frag:py,cube_vert:my,cube_frag:gy,depth_vert:_y,depth_frag:vy,distance_vert:yy,distance_frag:xy,equirect_vert:My,equirect_frag:by,linedashed_vert:Sy,linedashed_frag:wy,meshbasic_vert:Ey,meshbasic_frag:Ty,meshlambert_vert:Ay,meshlambert_frag:Cy,meshmatcap_vert:Py,meshmatcap_frag:Iy,meshnormal_vert:Ry,meshnormal_frag:Ly,meshphong_vert:Ny,meshphong_frag:Dy,meshphysical_vert:Oy,meshphysical_frag:Fy,meshtoon_vert:Uy,meshtoon_frag:By,points_vert:ky,points_frag:zy,shadow_vert:Vy,shadow_frag:Hy,sprite_vert:Gy,sprite_frag:Xy},ee={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},envMapRotation:{value:new we},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ut},probesMax:{value:new ut},probesResolution:{value:new ut}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}},Ai={basic:{uniforms:Tn([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Tn([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Tn([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Tn([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Tn([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new be(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Tn([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Tn([ee.points,ee.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Tn([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Tn([ee.common,ee.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Tn([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Tn([ee.sprite,ee.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new we}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distance:{uniforms:Tn([ee.common,ee.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distance_vert,fragmentShader:Ce.distance_frag},shadow:{uniforms:Tn([ee.lights,ee.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Ai.physical={uniforms:Tn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};cc={r:0,b:0,g:0},Wy=new Xe,fp=new we;fp.set(-1,0,0,0,1,0,0,0,1);Os=4,jy=6,Ky=20,Qy=256,Wo=new As,Xd=new be,su=null,ou=0,au=0,lu=!1,tx=new ut,Ur=new ut,uc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,o={}){let{size:l=256,position:c=tx}=o;su=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,r,u,c),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(su,ou,au),this._renderer.xr.enabled=lu,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mr||t.mapping===Dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),su=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:mi,format:ni,colorSpace:fo,depthBuffer:!1},r=Wd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wd(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ex(o)),this._blurMaterial=ix(o,t,e),this._ggxMaterial=nx(o,t,e)}return r}_compileMaterial(t){let e=new ke(new Ke,t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,i,r,o){let u=new wn(90,1,e,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,b=v.toneMapping;v.getClearColor(Xd),v.toneMapping=fi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(r),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new ar,new Xn({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,M=E.material,y=!1,L=t.background;L?L.isColor&&(M.color.copy(L),t.background=null,y=!0):(M.color.copy(Xd),y=!0);for(let z=0;z<6;z++){let A=z%3;A===0?(u.up.set(0,d[z],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+g[z],o.y,o.z)):A===1?(u.up.set(0,0,d[z]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+g[z],o.z)):(u.up.set(0,d[z],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+g[z]));let R=this._cubeSize;Ds(r,A*R,z>2?R:0,R,R),v.setRenderTarget(r),y&&v.render(E,u),v.render(t,u)}v.toneMapping=b,v.autoClear=_,t.background=L}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===mr||t.mapping===Dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yd());let o=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;let c=o.uniforms;c.envMap.value=t;let u=this._cubeSize;Ds(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(l,Wo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[i];c.material=l;let u=l.uniforms,d=i/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=d*1.25,b=v*_,{_lodMax:w}=this,E=this._sizeLods[i],M=3*E*(i>w-Os?i-w+Os:0),y=4*(this._cubeSize-E);u.envMap.value=t.texture,u.roughness.value=b,u.mipInt.value=w-e,Ds(o,M,y,3*E,2*E),r.setRenderTarget(o),r.render(c,Wo),u.envMap.value=o.texture,u.roughness.value=0,u.mipInt.value=w-i,Ds(t,M,y,3*E,2*E),r.setRenderTarget(t),r.render(c,Wo)}_blur(t,e,i,r){let o=this._pingPongRenderTarget,l=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,l),this._blurPass(o,t,i,i,l)}_blurPass(t,e,i,r,o){let l=this._renderer,c=this._blurMaterial,u=this._lodMeshes[r];u.material=c;let d=c.uniforms;d.envMap.value=t.texture,d.sigma.value=o,d.mipInt.value=this._lodMax-i;let g=this._sizeLods[r],v=3*g*(r>this._lodMax-Os?r-this._lodMax+Os:0),_=4*(this._cubeSize-g);Ds(e,v,_,3*g,2*g),l.setRenderTarget(e),l.render(u,Wo)}};fc=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new So(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ar(5,5,5),o=new Wn({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Ei});o.uniforms.tEquirect.value=e;let l=new ke(r,o),c=e.minFilter;return e.minFilter===gr&&(e.minFilter=yn),new yl(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,r);t.setRenderTarget(o)}};ux={[Oh]:"LINEAR_TONE_MAPPING",[Fh]:"REINHARD_TONE_MAPPING",[Uh]:"CINEON_TONE_MAPPING",[Bh]:"ACES_FILMIC_TONE_MAPPING",[zh]:"AGX_TONE_MAPPING",[Vh]:"NEUTRAL_TONE_MAPPING",[kh]:"CUSTOM_TONE_MAPPING"};dp=new In,uu=new or(1,1),pp=new _o,mp=new Qa,gp=new So,qd=[],Zd=[],Jd=new Float32Array(16),jd=new Float32Array(9),Kd=new Float32Array(4);fu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Lx(e.type)}},du=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kx(e.type)}},pu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let o=0,l=r.length;o!==l;++o){let c=r[o];c.setValue(t,e[c.id],i)}}},cu=/(\w+)(\])?(\[|\.)?/g;Fs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<i;++l){let c=t.getActiveUniform(e,l),u=t.getUniformLocation(e,c.name);Qx(c,u,this)}let r=[],o=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(l):o.push(l);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,i,r){let o=this.map[e];o!==void 0&&o.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let o=0,l=e.length;o!==l;++o){let c=e[o],u=i[c.id];u.needsUpdate!==!1&&c.setValue(t,u.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,o=t.length;r!==o;++r){let l=t[r];l.id in e&&i.push(l)}return i}};tM=37297,eM=0;ep=new we;sM={[Oh]:"Linear",[Fh]:"Reinhard",[Uh]:"Cineon",[Bh]:"ACESFilmic",[zh]:"AgX",[Vh]:"Neutral",[kh]:"Custom"};hc=new ut;uM=/^[ \t]*#include +<([\w\d./]+)>/gm;fM=new Map;pM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;gM={[Fo]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};vM={[mr]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE_UV"};xM={[Dr]:"ENVMAP_MODE_REFRACTION"};bM={[Dh]:"ENVMAP_BLENDING_MULTIPLY",[Sd]:"ENVMAP_BLENDING_MIX",[wd]:"ENVMAP_BLENDING_ADD"};TM=0,gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new _u(t),e.set(t,i)),i}},_u=class{constructor(t){this.id=TM++,this.code=t,this.usedTimes=0}};DM=0;BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kM=`uniform sampler2D shadow_pass;
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
}`,zM=[new ut(1,0,0),new ut(-1,0,0),new ut(0,1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1)],VM=[new ut(0,-1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1),new ut(0,-1,0),new ut(0,-1,0)],hp=new Xe,Yo=new ut,hu=new ut;YM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$M=`
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

}`,vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Eo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Wn({vertexShader:YM,fragmentShader:$M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new To(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends hi{constructor(t,e){super();let i=this,r=null,o=1,l=null,c="local-floor",u=1,d=null,g=null,v=null,_=null,b=null,w=null,E=typeof XRWebGLBinding<"u",M=new vu,y={},L=e.getContextAttributes(),z=null,A=null,R=[],D=[],H=new ue,C=null,k=null,G=new wn;G.viewport=new Qe;let Y=new wn;Y.viewport=new Qe;let j=[G,Y],q=new xl,Z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let St=R[ft];return St===void 0&&(St=new bs,R[ft]=St),St.getTargetRaySpace()},this.getControllerGrip=function(ft){let St=R[ft];return St===void 0&&(St=new bs,R[ft]=St),St.getGripSpace()},this.getHand=function(ft){let St=R[ft];return St===void 0&&(St=new bs,R[ft]=St),St.getHandSpace()};function ht(ft){let St=D.indexOf(ft.inputSource);if(St===-1)return;let Ut=R[St];Ut!==void 0&&(Ut.update(ft.inputSource,ft.frame,d||l),Ut.dispatchEvent({type:ft.type,data:ft.inputSource}))}function gt(){r.removeEventListener("select",ht),r.removeEventListener("selectstart",ht),r.removeEventListener("selectend",ht),r.removeEventListener("squeeze",ht),r.removeEventListener("squeezestart",ht),r.removeEventListener("squeezeend",ht),r.removeEventListener("end",gt),r.removeEventListener("inputsourceschange",Et);for(let ft=0;ft<R.length;ft++){let St=D[ft];St!==null&&(D[ft]=null,R[ft].disconnect(St))}Z=null,K=null,M.reset();for(let ft in y)delete y[ft];if(t.setRenderTarget(z),b=null,_=null,v=null,r=null,A=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(H.width,H.height,!1),k!==null){let ft=k.camera;ft.fov=k.fov,ft.zoom=k.zoom,ft.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){o=ft,i.isPresenting===!0&&ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){c=ft,i.isPresenting===!0&&ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(ft){d=ft},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(r,e)),v},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(ft){if(r=ft,r!==null){if(z=t.getRenderTarget(),r.addEventListener("select",ht),r.addEventListener("selectstart",ht),r.addEventListener("selectend",ht),r.addEventListener("squeeze",ht),r.addEventListener("squeezestart",ht),r.addEventListener("squeezeend",ht),r.addEventListener("end",gt),r.addEventListener("inputsourceschange",Et),L.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(H),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Ot=null,zt=null;L.depth&&(zt=L.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=L.stencil?_r:bi,Ot=L.stencil?Ns:di);let it={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:o};v=this.getBinding(),_=v.createProjectionLayer(it),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),A=new Dn(_.textureWidth,_.textureHeight,{format:ni,type:On,depthTexture:new or(_.textureWidth,_.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let Ut={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o};b=new XRWebGLLayer(r,e,Ut),r.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),A=new Dn(b.framebufferWidth,b.framebufferHeight,{format:ni,type:On,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(u),d=null,l=await r.requestReferenceSpace(c),Gt.setContext(r),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Et(ft){for(let St=0;St<ft.removed.length;St++){let Ut=ft.removed[St],Ot=D.indexOf(Ut);Ot>=0&&(D[Ot]=null,R[Ot].disconnect(Ut))}for(let St=0;St<ft.added.length;St++){let Ut=ft.added[St],Ot=D.indexOf(Ut);if(Ot===-1){for(let it=0;it<R.length;it++)if(it>=D.length){D.push(Ut),Ot=it;break}else if(D[it]===null){D[it]=Ut,Ot=it;break}if(Ot===-1)break}let zt=R[Ot];zt&&zt.connect(Ut)}}let yt=new ut,Pt=new ut;function Rt(ft,St,Ut){yt.setFromMatrixPosition(St.matrixWorld),Pt.setFromMatrixPosition(Ut.matrixWorld);let Ot=yt.distanceTo(Pt),zt=St.projectionMatrix.elements,it=Ut.projectionMatrix.elements,Pe=zt[14]/(zt[10]-1),de=zt[14]/(zt[10]+1),me=(zt[9]+1)/zt[5],ye=(zt[9]-1)/zt[5],he=(zt[8]-1)/zt[0],Se=(it[8]+1)/it[0],Ne=Pe*he,oe=Pe*Se,Zt=Ot/(-he+Se),pe=Zt*-he;if(St.matrixWorld.decompose(ft.position,ft.quaternion,ft.scale),ft.translateX(pe),ft.translateZ(Zt),ft.matrixWorld.compose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldInverse.copy(ft.matrixWorld).invert(),zt[10]===-1)ft.projectionMatrix.copy(St.projectionMatrix),ft.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{let rt=Pe+Zt,Be=de+Zt,Ee=Ne-pe,X=oe+(Ot-pe),P=me*de/Be*rt,nt=ye*de/Be*rt;ft.projectionMatrix.makePerspective(Ee,X,P,nt,rt,Be),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert()}}function jt(ft,St){St===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(St.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(r===null)return;let St=ft.near,Ut=ft.far;M.texture!==null&&(M.depthNear>0&&(St=M.depthNear),M.depthFar>0&&(Ut=M.depthFar)),q.near=Y.near=G.near=St,q.far=Y.far=G.far=Ut,(Z!==q.near||K!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),Z=q.near,K=q.far),q.layers.mask=ft.layers.mask|6,G.layers.mask=q.layers.mask&-5,Y.layers.mask=q.layers.mask&-3;let Ot=ft.parent,zt=q.cameras;jt(q,Ot);for(let it=0;it<zt.length;it++)jt(zt[it],Ot);zt.length===2?Rt(q,G,Y):q.projectionMatrix.copy(G.projectionMatrix),k===null&&ft.isPerspectiveCamera&&(k={camera:ft,fov:ft.fov,zoom:ft.zoom}),at(ft,q,Ot)};function at(ft,St,Ut){Ut===null?ft.matrix.copy(St.matrixWorld):(ft.matrix.copy(Ut.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(St.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(St.projectionMatrix),ft.projectionMatrixInverse.copy(St.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=ys*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(_===null&&b===null))return u},this.setFoveation=function(ft){u=ft,_!==null&&(_.fixedFoveation=ft),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ft)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(ft){return y[ft]};let Bt=null;function Vt(ft,St){if(g=St.getViewerPose(d||l),w=St,g!==null){let Ut=g.views;b!==null&&(t.setRenderTargetFramebuffer(A,b.framebuffer),t.setRenderTarget(A));let Ot=!1;Ut.length!==q.cameras.length&&(q.cameras.length=0,Ot=!0);for(let de=0;de<Ut.length;de++){let me=Ut[de],ye=null;if(b!==null)ye=b.getViewport(me);else{let Se=v.getViewSubImage(_,me);ye=Se.viewport,de===0&&(t.setRenderTargetTextures(A,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(A))}let he=j[de];he===void 0&&(he=new wn,he.layers.enable(de),he.viewport=new Qe,j[de]=he),he.matrix.fromArray(me.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(me.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ye.x,ye.y,ye.width,ye.height),de===0&&(q.matrix.copy(he.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ot===!0&&q.cameras.push(he)}let zt=r.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){v=i.getBinding();let de=v.getDepthInformation(Ut[0]);de&&de.isValid&&de.texture&&M.init(de,r.renderState)}if(zt&&zt.includes("camera-access")&&E){t.state.unbindTexture(),v=i.getBinding();for(let de=0;de<Ut.length;de++){let me=Ut[de].camera;if(me){let ye=y[me];ye||(ye=new Eo,y[me]=ye);let he=v.getCameraImage(me);ye.sourceTexture=he}}}}for(let Ut=0;Ut<R.length;Ut++){let Ot=D[Ut],zt=R[Ut];Ot!==null&&zt!==void 0&&zt.update(Ot,St,d||l)}Bt&&Bt(ft,St),St.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:St}),w=null}let Gt=new up;Gt.setAnimationLoop(Vt),this.setAnimationLoop=function(ft){Bt=ft},this.dispose=function(){}}},qM=new Xe,_p=new we;_p.set(-1,0,0,0,1,0,0,0,1);jM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;dc=class{constructor(t={}){let{canvas:e=Od(),context:i=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:b=On}=t;this.isWebGLRenderer=!0;let w;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=i.getContextAttributes().alpha}else w=l;let E=b,M=new Set([Pl,Cl,Al]),y=new Set([On,di,Ls,Ns,El,Tl]),L=new Uint32Array(4),z=new Int32Array(4),A=new ut,R=null,D=null,H=[],C=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let G=this,Y=!1,j=null,q=null,Z=null,K=null;this._outputColorSpace=Pn;let ht=0,gt=0,Et=null,yt=-1,Pt=null,Rt=new Qe,jt=new Qe,at=null,Bt=new be(0),Vt=0,Gt=e.width,ft=e.height,St=1,Ut=null,Ot=null,zt=new Qe(0,0,Gt,ft),it=new Qe(0,0,Gt,ft),Pe=!1,de=new ws,me=!1,ye=!1,he=new Xe,Se=new ut,Ne=new Qe,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function pe(){return Et===null?St:1}let rt=i;function Be(F,st){return e.getContext(F,st)}let Ee,X,P,nt,dt,Ct,Wt,kt,xt,Dt,Yt,ne,$t,U,$,J,lt,V,bt,ct,Lt,mt,wt;try{let F={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",An,!1),rt===null){let st="webgl2";if(rt=Be(st,F),rt===null)throw Be(st)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(F){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",An,!1),ve("WebGLRenderer: "+F.message),F}function At(){Ee=new sx(rt),Ee.init(),Lt=new WM(rt,Ee),X=new Zy(rt,Ee,t,Lt),P=new GM(rt,Ee),X.reversedDepthBuffer&&_&&P.buffers.depth.setReversed(!0),q=rt.createFramebuffer(),Z=rt.createFramebuffer(),K=rt.createFramebuffer(),nt=new lx(rt),dt=new PM,Ct=new XM(rt,Ee,P,dt,X,Lt,nt),Wt=new rx(G),kt=new h_(rt),mt=new $y(rt,kt),xt=new ox(rt,kt,nt,mt),Dt=new hx(rt,xt,kt,mt,nt),V=new cx(rt,X,Ct),$=new Jy(dt),Yt=new CM(G,Wt,Ee,X,mt,$),ne=new ZM(G,dt),$t=new RM,U=new UM(Ee),lt=new Yy(G,Wt,P,Dt,w,u),J=new HM(G,Dt,X),wt=new JM(rt,nt,X,P),bt=new qy(rt,Ee,nt),ct=new ax(rt,Ee,nt),nt.programs=Yt.programs,G.capabilities=X,G.extensions=Ee,G.properties=dt,G.renderLists=$t,G.shadowMap=J,G.state=P,G.info=nt}E!==On&&(k=new fx(E,e.width,e.height,c,r,o));let qt=new yu(G,rt);this.xr=qt,this.getContext=function(){return rt},this.getContextAttributes=function(){return rt.getContextAttributes()},this.forceContextLoss=function(){let F=Ee.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=Ee.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(F){F!==void 0&&(St=F,this.setSize(Gt,ft,!1))},this.getSize=function(F){return F.set(Gt,ft)},this.setSize=function(F,st,Mt=!0){if(qt.isPresenting){ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=F,ft=st,e.width=Math.floor(F*St),e.height=Math.floor(st*St),Mt===!0&&(e.style.width=F+"px",e.style.height=st+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,F,st)},this.getDrawingBufferSize=function(F){return F.set(Gt*St,ft*St).floor()},this.setDrawingBufferSize=function(F,st,Mt){Gt=F,ft=st,St=Mt,e.width=Math.floor(F*Mt),e.height=Math.floor(st*Mt),this.setViewport(0,0,F,st)},this.setEffects=function(F){if(E===On){ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let st=0;st<F.length;st++)if(F[st].isOutputPass===!0){ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(Rt)},this.getViewport=function(F){return F.copy(zt)},this.setViewport=function(F,st,Mt,_t){F.isVector4?zt.set(F.x,F.y,F.z,F.w):zt.set(F,st,Mt,_t),P.viewport(Rt.copy(zt).multiplyScalar(St).round())},this.getScissor=function(F){return F.copy(it)},this.setScissor=function(F,st,Mt,_t){F.isVector4?it.set(F.x,F.y,F.z,F.w):it.set(F,st,Mt,_t),P.scissor(jt.copy(it).multiplyScalar(St).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(F){P.setScissorTest(Pe=F)},this.setOpaqueSort=function(F){Ut=F},this.setTransparentSort=function(F){Ot=F},this.getClearColor=function(F){return F.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(F=!0,st=!0,Mt=!0){let _t=0;if(F){let vt=!1;if(Et!==null){let Qt=Et.texture.format;vt=M.has(Qt)}if(vt){let Qt=Et.texture.type,Xt=y.has(Qt),Kt=lt.getClearColor(),re=lt.getClearAlpha(),ae=Kt.r,Jt=Kt.g,_e=Kt.b;Xt?(L[0]=ae,L[1]=Jt,L[2]=_e,L[3]=re,rt.clearBufferuiv(rt.COLOR,0,L)):(z[0]=ae,z[1]=Jt,z[2]=_e,z[3]=re,rt.clearBufferiv(rt.COLOR,0,z))}else _t|=rt.COLOR_BUFFER_BIT}st&&(_t|=rt.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Mt&&(_t|=rt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_t!==0&&rt.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),j=F},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",An,!1),lt.dispose(),$t.dispose(),U.dispose(),dt.dispose(),Wt.dispose(),Dt.dispose(),mt.dispose(),wt.dispose(),Yt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Br),qt.removeEventListener("sessionend",kr),Nn.stop()};function Ie(F){F.preventDefault(),go("WebGLRenderer: Context Lost."),Y=!0}function Te(){go("WebGLRenderer: Context Restored."),Y=!1;let F=nt.autoReset,st=J.enabled,Mt=J.autoUpdate,_t=J.needsUpdate,vt=J.type;At(),nt.autoReset=F,J.enabled=st,J.autoUpdate=Mt,J.needsUpdate=_t,J.type=vt}function An(F){ve("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Ln(F){let st=F.target;st.removeEventListener("dispose",Ln),ks(st)}function ks(F){yr(F),dt.remove(F)}function yr(F){let st=dt.get(F).programs;st!==void 0&&(st.forEach(function(Mt){Yt.releaseProgram(Mt)}),F.isShaderMaterial&&Yt.releaseShaderCache(F))}this.renderBufferDirect=function(F,st,Mt,_t,vt,Qt){st===null&&(st=oe);let Xt=vt.isMesh&&vt.matrixWorld.determinantAffine()<0,Kt=_i(F,st,Mt,_t,vt);P.setMaterial(_t,Xt);let re=Mt.index,ae=1;if(_t.wireframe===!0){if(re=xt.getWireframeAttribute(Mt),re===void 0)return;ae=2}let Jt=Mt.drawRange,_e=Mt.attributes.position,ie=Jt.start*ae,Ue=(Jt.start+Jt.count)*ae;Qt!==null&&(ie=Math.max(ie,Qt.start*ae),Ue=Math.min(Ue,(Qt.start+Qt.count)*ae)),re!==null?(ie=Math.max(ie,0),Ue=Math.min(Ue,re.count)):_e!=null&&(ie=Math.max(ie,0),Ue=Math.min(Ue,_e.count));let Ze=Ue-ie;if(Ze<0||Ze===1/0)return;mt.setup(vt,_t,Kt,Mt,re);let De,s=bt;if(re!==null&&(De=kt.get(re),s=ct,s.setIndex(De)),vt.isMesh)_t.wireframe===!0?(P.setLineWidth(_t.wireframeLinewidth*pe()),s.setMode(rt.LINES)):s.setMode(rt.TRIANGLES);else if(vt.isLine){let a=_t.linewidth;a===void 0&&(a=1),P.setLineWidth(a*pe()),vt.isLineSegments?s.setMode(rt.LINES):vt.isLineLoop?s.setMode(rt.LINE_LOOP):s.setMode(rt.LINE_STRIP)}else vt.isPoints?s.setMode(rt.POINTS):vt.isSprite&&s.setMode(rt.TRIANGLES);if(vt.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))s.renderMultiDraw(vt._multiDrawStarts,vt._multiDrawCounts,vt._multiDrawCount);else{let a=vt._multiDrawStarts,h=vt._multiDrawCounts,p=vt._multiDrawCount,x=re?kt.get(re).bytesPerElement:1,I=dt.get(_t).currentProgram.getUniforms();for(let B=0;B<p;B++)I.setValue(rt,"_gl_DrawID",B),s.render(a[B]/x,h[B])}else if(vt.isInstancedMesh)s.renderInstances(ie,Ze,vt.count);else if(Mt.isInstancedBufferGeometry){let a=Mt._maxInstanceCount!==void 0?Mt._maxInstanceCount:1/0,h=Math.min(Mt.instanceCount,a);s.renderInstances(ie,Ze,h)}else s.render(ie,Ze)};function N(F,st,Mt,_t){j!==null&&F.isNodeMaterial&&j.setObject(_t,F),me===!0&&$.setState(F,Mt,!1),F.transparent===!0&&F.side===En&&F.forceSinglePass===!1?(F.side=Rn,F.needsUpdate=!0,qi(F,st,_t),F.side=pr,F.needsUpdate=!0,qi(F,st,_t),F.side=En):qi(F,st,_t)}this.compile=function(F,st,Mt=null){Mt===null&&(Mt=F),j!==null&&j.renderStart(F,st,Mt),D=U.get(Mt),D.init(st),C.push(D),Mt.traverseVisible(function(vt){vt.isLight&&vt.layers.test(st.layers)&&(D.pushLight(vt),vt.castShadow&&D.pushShadow(vt))}),F!==Mt&&F.traverseVisible(function(vt){vt.isLight&&vt.layers.test(st.layers)&&(D.pushLight(vt),vt.castShadow&&D.pushShadow(vt))}),D.setupLights(),j!==null&&j.updateLights(D.state.lightsArray),ye=this.localClippingEnabled,me=$.init(this.clippingPlanes,ye),me===!0&&$.setGlobalState(this.clippingPlanes,st),j!==null&&J.render(D.state.shadowsArray,Mt,st);let _t=new Set;return F.traverse(function(vt){if(!(vt.isMesh||vt.isPoints||vt.isLine||vt.isSprite))return;let Qt=vt.material;if(Qt)if(Array.isArray(Qt))for(let Xt=0;Xt<Qt.length;Xt++){let Kt=Qt[Xt];N(Kt,Mt,st,vt),_t.add(Kt)}else N(Qt,Mt,st,vt),_t.add(Qt)}),D=C.pop(),j!==null&&j.renderEnd(),_t},this.compileAsync=function(F,st,Mt=null){let _t=this.compile(F,st,Mt);return new Promise(vt=>{function Qt(){if(_t.forEach(function(Xt){let re=dt.get(Xt).currentProgram;(re===void 0||re.isReady())&&_t.delete(Xt)}),_t.size===0){vt(F);return}setTimeout(Qt,10)}Ee.get("KHR_parallel_shader_compile")!==null?Qt():setTimeout(Qt,10)})};let Ci=null;function Fe(F){Ci&&Ci(F)}function Br(){Nn.stop()}function kr(){Nn.start()}let Nn=new up;Nn.setAnimationLoop(Fe),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(F){Ci=F,qt.setAnimationLoop(F),F===null?Nn.stop():Nn.start()},qt.addEventListener("sessionstart",Br),qt.addEventListener("sessionend",kr),this.render=function(F,st){if(st!==void 0&&st.isCamera!==!0){ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;j!==null&&j.renderStart(F,st);let Mt=qt.enabled===!0&&qt.isPresenting===!0,_t=k!==null&&(Et===null||Mt)&&k.begin(G,Et);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(st),st=qt.getCamera()),F.isScene===!0&&F.onBeforeRender(G,F,st,Et),D=U.get(F,C.length),D.init(st),D.state.textureUnits=Ct.getTextureUnits(),C.push(D),he.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),de.setFromProjectionMatrix(he,ci,st.reversedDepth),ye=this.localClippingEnabled,me=$.init(this.clippingPlanes,ye),R=$t.get(F,H.length),R.init(),H.push(R),qt.enabled===!0&&qt.isPresenting===!0){let Xt=G.xr.getDepthSensingMesh();Xt!==null&&qn(Xt,st,-1/0,G.sortObjects)}qn(F,st,0,G.sortObjects),R.finish(),j!==null&&j.updateLights(D.state.lightsArray),G.sortObjects===!0&&R.sort(Ut,Ot),Zt=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,Zt&&lt.addToRenderList(R,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&$.beginShadows();let vt=D.state.shadowsArray;if(J.render(vt,F,st),me===!0&&$.endShadows(),(_t&&k.hasRenderPass())===!1){let Xt=R.opaque,Kt=R.transmissive;if(D.setupLights(),st.isArrayCamera){let re=st.cameras;if(Kt.length>0)for(let ae=0,Jt=re.length;ae<Jt;ae++){let _e=re[ae];gi(Xt,Kt,F,_e)}Zt&&lt.render(F);for(let ae=0,Jt=re.length;ae<Jt;ae++){let _e=re[ae];zr(R,F,_e,_e.viewport)}}else Kt.length>0&&gi(Xt,Kt,F,st),Zt&&lt.render(F),zr(R,F,st)}Et!==null&&gt===0&&(Ct.updateMultisampleRenderTarget(Et),Ct.updateRenderTargetMipmap(Et)),_t&&k.end(G),F.isScene===!0&&F.onAfterRender(G,F,st),mt.resetDefaultState(),yt=-1,Pt=null,C.pop(),C.length>0?(D=C[C.length-1],Ct.setTextureUnits(D.state.textureUnits),me===!0&&$.setGlobalState(G.clippingPlanes,D.state.camera)):D=null,H.pop(),H.length>0?R=H[H.length-1]:R=null,j!==null&&j.renderEnd()};function qn(F,st,Mt,_t){if(F.visible===!1)return;if(F.layers.test(st.layers)){if(F.isGroup)Mt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(st);else if(F.isLightProbeGrid)D.pushLightProbeGrid(F);else if(F.isLight)D.pushLight(F),F.castShadow&&D.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(de)){_t&&Ne.setFromMatrixPosition(F.matrixWorld).applyMatrix4(he);let Xt=Dt.update(F),Kt=F.material;Kt.visible&&R.push(F,Xt,Kt,Mt,Ne.z,null,st)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(de))){let Xt=Dt.update(F),Kt=F.material;if(_t&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Ne.copy(F.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Ne.copy(Xt.boundingSphere.center)),Ne.applyMatrix4(F.matrixWorld).applyMatrix4(he)),Array.isArray(Kt)){let re=Xt.groups;for(let ae=0,Jt=re.length;ae<Jt;ae++){let _e=re[ae],ie=Kt[_e.materialIndex];ie&&ie.visible&&R.push(F,Xt,ie,Mt,Ne.z,_e,st)}}else Kt.visible&&R.push(F,Xt,Kt,Mt,Ne.z,null,st)}}let Qt=F.children;for(let Xt=0,Kt=Qt.length;Xt<Kt;Xt++)qn(Qt[Xt],st,Mt,_t)}function zr(F,st,Mt,_t){let{opaque:vt,transmissive:Qt,transparent:Xt}=F;D.setupLightsView(Mt),me===!0&&$.setGlobalState(G.clippingPlanes,Mt),_t&&P.viewport(Rt.copy(_t)),vt.length>0&&Pi(vt,st,Mt),Qt.length>0&&Pi(Qt,st,Mt),Xt.length>0&&Pi(Xt,st,Mt),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function gi(F,st,Mt,_t){if((Mt.isScene===!0?Mt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[_t.id]===void 0){let ie=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[_t.id]=new Dn(1,1,{generateMipmaps:!0,type:ie?mi:On,minFilter:gr,samples:Math.max(4,X.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Oe.workingColorSpace})}let Qt=D.state.transmissionRenderTarget[_t.id],Xt=_t.viewport||Rt;Qt.setSize(Xt.z*G.transmissionResolutionScale,Xt.w*G.transmissionResolutionScale);let Kt=G.getRenderTarget(),re=G.getActiveCubeFace(),ae=G.getActiveMipmapLevel();G.setRenderTarget(Qt),G.getClearColor(Bt),Vt=G.getClearAlpha(),Vt<1&&G.setClearColor(16777215,.5),G.clear(),Zt&&lt.render(Mt);let Jt=G.toneMapping;G.toneMapping=fi;let _e=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),D.setupLightsView(_t),me===!0&&$.setGlobalState(G.clippingPlanes,_t),Pi(F,Mt,_t),Ct.updateMultisampleRenderTarget(Qt),Ct.updateRenderTargetMipmap(Qt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Ue=0,Ze=st.length;Ue<Ze;Ue++){let De=st[Ue],{object:s,geometry:a,material:h,group:p}=De;if(h.side===En&&s.layers.test(_t.layers)){let x=h.side;h.side=Rn,h.needsUpdate=!0,Vr(s,Mt,_t,a,h,p),h.side=x,h.needsUpdate=!0,ie=!0}}ie===!0&&(Ct.updateMultisampleRenderTarget(Qt),Ct.updateRenderTargetMipmap(Qt))}G.setRenderTarget(Kt,re,ae),G.setClearColor(Bt,Vt),_e!==void 0&&(_t.viewport=_e),G.toneMapping=Jt}function Pi(F,st,Mt){let _t=st.isScene===!0?st.overrideMaterial:null;for(let vt=0,Qt=F.length;vt<Qt;vt++){let Xt=F[vt],{object:Kt,geometry:re,group:ae}=Xt,Jt=Xt.material;Jt.allowOverride===!0&&_t!==null&&(Jt=_t),Kt.layers.test(Mt.layers)&&Vr(Kt,st,Mt,re,Jt,ae)}}function Vr(F,st,Mt,_t,vt,Qt){j!==null&&vt.isNodeMaterial&&j.setObject(F,vt),F.onBeforeRender(G,st,Mt,_t,vt,Qt),F.modelViewMatrix.multiplyMatrices(Mt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),vt.onBeforeRender(G,st,Mt,_t,F,Qt),vt.transparent===!0&&vt.side===En&&vt.forceSinglePass===!1?(vt.side=Rn,vt.needsUpdate=!0,G.renderBufferDirect(Mt,st,_t,vt,F,Qt),vt.side=pr,vt.needsUpdate=!0,G.renderBufferDirect(Mt,st,_t,vt,F,Qt),vt.side=En):G.renderBufferDirect(Mt,st,_t,vt,F,Qt),F.onAfterRender(G,st,Mt,_t,vt,Qt)}function qi(F,st,Mt){st.isScene!==!0&&(st=oe);let _t=dt.get(F),vt=D.state.lights,Qt=D.state.shadowsArray,Xt=vt.state.version,Kt=Yt.getParameters(F,vt.state,Qt,st,Mt,D.state.lightProbeGridArray),re=Yt.getProgramCacheKey(Kt),ae=_t.programs;_t.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?st.environment:null,_t.fog=st.fog;let Jt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;_t.envMap=Wt.get(F.envMap||_t.environment,Jt),_t.envMapRotation=_t.environment!==null&&F.envMap===null?st.environmentRotation:F.envMapRotation,ae===void 0&&(F.addEventListener("dispose",Ln),ae=new Map,_t.programs=ae);let _e=ae.get(re);if(_e!==void 0){if(_t.currentProgram===_e&&_t.lightsStateVersion===Xt)return Gr(F,Kt),_e}else Kt.uniforms=Yt.getUniforms(F),j!==null&&F.isNodeMaterial&&j.build(F,Mt,Kt),F.onBeforeCompile(Kt,G),_e=Yt.acquireProgram(Kt,re),ae.set(re,_e),_t.uniforms=Kt.uniforms;let ie=_t.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(ie.clippingPlanes=$.uniform),Gr(F,Kt),_t.needsLights=Hs(F),_t.lightsStateVersion=Xt,_t.needsLights&&(ie.ambientLightColor.value=vt.state.ambient,ie.lightProbe.value=vt.state.probe,ie.sunLights.value=vt.state.sun,ie.sunLightShadows.value=vt.state.sunShadow,ie.directionalLights.value=vt.state.directional,ie.directionalLightShadows.value=vt.state.directionalShadow,ie.spotLights.value=vt.state.spot,ie.spotLightShadows.value=vt.state.spotShadow,ie.rectAreaLights.value=vt.state.rectArea,ie.ltc_1.value=vt.state.rectAreaLTC1,ie.ltc_2.value=vt.state.rectAreaLTC2,ie.pointLights.value=vt.state.point,ie.pointLightShadows.value=vt.state.pointShadow,ie.hemisphereLights.value=vt.state.hemi,ie.sunShadowMatrix.value=vt.state.sunShadowMatrix,ie.sunShadowCascade.value=vt.state.sunShadowCascade,ie.directionalShadowMatrix.value=vt.state.directionalShadowMatrix,ie.spotLightMatrix.value=vt.state.spotLightMatrix,ie.spotLightMap.value=vt.state.spotLightMap,ie.pointShadowMatrix.value=vt.state.pointShadowMatrix),_t.lightProbeGrid=D.state.lightProbeGridArray.length>0,_t.currentProgram=_e,_t.uniformsList=null,_e}function Hr(F){if(F.uniformsList===null){let st=F.currentProgram.getUniforms();F.uniformsList=Fs.seqWithValue(st.seq,F.uniforms)}return F.uniformsList}function Gr(F,st){let Mt=dt.get(F);Mt.outputColorSpace=st.outputColorSpace,Mt.batching=st.batching,Mt.batchingColor=st.batchingColor,Mt.instancing=st.instancing,Mt.instancingColor=st.instancingColor,Mt.instancingMorph=st.instancingMorph,Mt.skinning=st.skinning,Mt.morphTargets=st.morphTargets,Mt.morphNormals=st.morphNormals,Mt.morphColors=st.morphColors,Mt.morphTargetsCount=st.morphTargetsCount,Mt.numClippingPlanes=st.numClippingPlanes,Mt.numIntersection=st.numClipIntersection,Mt.vertexAlphas=st.vertexAlphas,Mt.vertexTangents=st.vertexTangents,Mt.toneMapping=st.toneMapping}function zs(F,st){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;A.setFromMatrixPosition(st.matrixWorld);for(let Mt=0,_t=F.length;Mt<_t;Mt++){let vt=F[Mt];if(vt.texture!==null&&vt.boundingBox.containsPoint(A))return vt}return null}function _i(F,st,Mt,_t,vt){st.isScene!==!0&&(st=oe),Ct.resetTextureUnits();let Qt=st.fog,Xt=_t.isMeshStandardMaterial||_t.isMeshLambertMaterial||_t.isMeshPhongMaterial?st.environment:null,Kt=Et===null?G.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Oe.workingColorSpace,re=_t.isMeshStandardMaterial||_t.isMeshLambertMaterial&&!_t.envMap||_t.isMeshPhongMaterial&&!_t.envMap,ae=Wt.get(_t.envMap||Xt,re),Jt=_t.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,_e=!!Mt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),ie=!!Mt.morphAttributes.position,Ue=!!Mt.morphAttributes.normal,Ze=!!Mt.morphAttributes.color,De=fi;_t.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(De=G.toneMapping);let s=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,a=s!==void 0?s.length:0,h=dt.get(_t),p=D.state.lights;if(me===!0&&(ye===!0||F!==Pt)){let Ft=F===Pt&&_t.id===yt;$.setState(_t,F,Ft)}let x=!1;_t.version===h.__version?(h.needsLights&&h.lightsStateVersion!==p.state.version||h.outputColorSpace!==Kt||vt.isBatchedMesh&&h.batching===!1||!vt.isBatchedMesh&&h.batching===!0||vt.isBatchedMesh&&h.batchingColor===!0&&vt._colorsTexture===null||vt.isBatchedMesh&&h.batchingColor===!1&&vt._colorsTexture!==null||vt.isInstancedMesh&&h.instancing===!1||!vt.isInstancedMesh&&h.instancing===!0||vt.isSkinnedMesh&&h.skinning===!1||!vt.isSkinnedMesh&&h.skinning===!0||vt.isInstancedMesh&&h.instancingColor===!0&&vt.instanceColor===null||vt.isInstancedMesh&&h.instancingColor===!1&&vt.instanceColor!==null||vt.isInstancedMesh&&h.instancingMorph===!0&&vt.morphTexture===null||vt.isInstancedMesh&&h.instancingMorph===!1&&vt.morphTexture!==null||h.envMap!==ae||_t.fog===!0&&h.fog!==Qt||h.numClippingPlanes!==void 0&&(h.numClippingPlanes!==$.numPlanes||h.numIntersection!==$.numIntersection)||h.vertexAlphas!==Jt||h.vertexTangents!==_e||h.morphTargets!==ie||h.morphNormals!==Ue||h.morphColors!==Ze||h.toneMapping!==De||h.morphTargetsCount!==a||!!h.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(x=!0):(x=!0,h.__version=_t.version);let I=h.currentProgram;x===!0&&(I=qi(_t,st,vt),j&&_t.isNodeMaterial&&j.onUpdateProgram(_t,I,h));let B=!1,Q=!1,et=!1,pt=I.getUniforms(),Nt=h.uniforms;if(P.useProgram(I.program)&&(B=!0,Q=!0,et=!0),_t.id!==yt&&(yt=_t.id,Q=!0),h.needsLights){let Ft=zs(D.state.lightProbeGridArray,vt);h.lightProbeGrid!==Ft&&(h.lightProbeGrid=Ft,Q=!0)}if(B||Pt!==F){P.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),pt.setValue(rt,"projectionMatrix",F.projectionMatrix),pt.setValue(rt,"viewMatrix",F.matrixWorldInverse);let le=pt.map.cameraPosition;le!==void 0&&le.setValue(rt,Se.setFromMatrixPosition(F.matrixWorld)),X.logarithmicDepthBuffer&&pt.setValue(rt,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&pt.setValue(rt,"isOrthographic",F.isOrthographicCamera===!0),Pt!==F&&(Pt=F,Q=!0,et=!0)}if(h.needsLights&&(p.state.sunShadowMap.length>0&&pt.setValue(rt,"sunShadowMap",p.state.sunShadowMap,Ct),p.state.directionalShadowMap.length>0&&pt.setValue(rt,"directionalShadowMap",p.state.directionalShadowMap,Ct),p.state.spotShadowMap.length>0&&pt.setValue(rt,"spotShadowMap",p.state.spotShadowMap,Ct),p.state.pointShadowMap.length>0&&pt.setValue(rt,"pointShadowMap",p.state.pointShadowMap,Ct)),vt.isSkinnedMesh){pt.setOptional(rt,vt,"bindMatrix"),pt.setOptional(rt,vt,"bindMatrixInverse");let Ft=vt.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),pt.setValue(rt,"boneTexture",Ft.boneTexture,Ct))}vt.isBatchedMesh&&(pt.setOptional(rt,vt,"batchingTexture"),pt.setValue(rt,"batchingTexture",vt._matricesTexture,Ct),pt.setOptional(rt,vt,"batchingIdTexture"),pt.setValue(rt,"batchingIdTexture",vt._indirectTexture,Ct),pt.setOptional(rt,vt,"batchingColorTexture"),vt._colorsTexture!==null&&pt.setValue(rt,"batchingColorTexture",vt._colorsTexture,Ct));let It=Mt.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&V.update(vt,Mt,I),(Q||h.receiveShadow!==vt.receiveShadow)&&(h.receiveShadow=vt.receiveShadow,pt.setValue(rt,"receiveShadow",vt.receiveShadow)),(_t.isMeshStandardMaterial||_t.isMeshLambertMaterial||_t.isMeshPhongMaterial)&&_t.envMap===null&&st.environment!==null&&(Nt.envMapIntensity.value=st.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=KM()),Q){if(pt.setValue(rt,"toneMappingExposure",G.toneMappingExposure),h.needsLights&&Vs(Nt,et),Qt&&_t.fog===!0&&ne.refreshFogUniforms(Nt,Qt),ne.refreshMaterialUniforms(Nt,_t,St,ft,D.state.transmissionRenderTarget[F.id]),h.needsLights&&h.lightProbeGrid){let Ft=h.lightProbeGrid;Nt.probesSH.value=Ft.texture,Nt.probesMin.value.copy(Ft.boundingBox.min),Nt.probesMax.value.copy(Ft.boundingBox.max),Nt.probesResolution.value.copy(Ft.resolution)}Fs.upload(rt,Hr(h),Nt,Ct)}if(_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(Fs.upload(rt,Hr(h),Nt,Ct),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&pt.setValue(rt,"center",vt.center),pt.setValue(rt,"modelViewMatrix",vt.modelViewMatrix),pt.setValue(rt,"normalMatrix",vt.normalMatrix),pt.setValue(rt,"modelMatrix",vt.matrixWorld),_t.uniformsGroups!==void 0){let Ft=_t.uniformsGroups;for(let le=0,xe=Ft.length;le<xe;le++){let Ae=Ft[le];wt.update(Ae,I),wt.bind(Ae,I)}}return I}function Vs(F,st){F.ambientLightColor.needsUpdate=st,F.lightProbe.needsUpdate=st,F.sunLights.needsUpdate=st,F.sunLightShadows.needsUpdate=st,F.directionalLights.needsUpdate=st,F.directionalLightShadows.needsUpdate=st,F.pointLights.needsUpdate=st,F.pointLightShadows.needsUpdate=st,F.spotLights.needsUpdate=st,F.spotLightShadows.needsUpdate=st,F.rectAreaLights.needsUpdate=st,F.hemisphereLights.needsUpdate=st}function Hs(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return ht},this.getActiveMipmapLevel=function(){return gt},this.getRenderTarget=function(){return Et},this.setRenderTargetTextures=function(F,st,Mt){let _t=dt.get(F);_t.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,_t.__autoAllocateDepthBuffer===!1&&(_t.__useRenderToTexture=!1),dt.get(F.texture).__webglTexture=st,dt.get(F.depthTexture).__webglTexture=_t.__autoAllocateDepthBuffer?void 0:Mt,_t.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,st){let Mt=dt.get(F);Mt.__webglFramebuffer=st,Mt.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(F,st=0,Mt=0){Et=F,ht=st,gt=Mt;let _t=null,vt=!1,Qt=!1;if(F){let Kt=dt.get(F);if(Kt.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(rt.FRAMEBUFFER,Kt.__webglFramebuffer),Rt.copy(F.viewport),jt.copy(F.scissor),at=F.scissorTest,P.viewport(Rt),P.scissor(jt),P.setScissorTest(at),yt=-1;return}else if(Kt.__webglFramebuffer===void 0)Ct.setupRenderTarget(F);else if(Kt.__hasExternalTextures)Ct.rebindTextures(F,dt.get(F.texture).__webglTexture,dt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let Jt=F.depthTexture;if(Kt.__boundDepthTexture!==Jt){if(Jt!==null&&dt.has(Jt)&&(F.width!==Jt.image.width||F.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ct.setupDepthRenderbuffer(F)}}let re=F.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Qt=!0);let ae=dt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(ae[st])?_t=ae[st][Mt]:_t=ae[st],vt=!0):F.samples>0&&Ct.useMultisampledRTT(F)===!1?_t=dt.get(F).__webglMultisampledFramebuffer:Array.isArray(ae)?_t=ae[Mt]:_t=ae,Rt.copy(F.viewport),jt.copy(F.scissor),at=F.scissorTest}else Rt.copy(zt).multiplyScalar(St).floor(),jt.copy(it).multiplyScalar(St).floor(),at=Pe;if(Mt!==0&&(_t=q),P.bindFramebuffer(rt.FRAMEBUFFER,_t)&&P.drawBuffers(F,_t),P.viewport(Rt),P.scissor(jt),P.setScissorTest(at),vt){let Kt=dt.get(F.texture);rt.framebufferTexture2D(rt.FRAMEBUFFER,rt.COLOR_ATTACHMENT0,rt.TEXTURE_CUBE_MAP_POSITIVE_X+st,Kt.__webglTexture,Mt)}else if(Qt){let Kt=st;for(let re=0;re<F.textures.length;re++){let ae=dt.get(F.textures[re]);rt.framebufferTextureLayer(rt.FRAMEBUFFER,rt.COLOR_ATTACHMENT0+re,ae.__webglTexture,Mt,Kt)}}else if(F!==null&&Mt!==0){let Kt=dt.get(F.texture);rt.framebufferTexture2D(rt.FRAMEBUFFER,rt.COLOR_ATTACHMENT0,rt.TEXTURE_2D,Kt.__webglTexture,Mt)}yt=-1};function Xr(F){let st=dt.get(F);return(st.__readFormat!==F.format||st.__readType!==F.type)&&(st.__readFormat=F.format,st.__readType=F.type,st.__formatReadable=X.textureFormatReadable(F.format),st.__typeReadable=X.textureTypeReadable(F.type)),st}this.readRenderTargetPixels=function(F,st,Mt,_t,vt,Qt,Xt,Kt=0){if(!(F&&F.isWebGLRenderTarget)){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let re=dt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Xt!==void 0&&(re=re[Xt]),re){P.bindFramebuffer(rt.FRAMEBUFFER,re);try{let ae=F.textures[Kt],Jt=ae.format,_e=ae.type;F.textures.length>1&&rt.readBuffer(rt.COLOR_ATTACHMENT0+Kt);let ie=Xr(ae);if(ie.__formatReadable===!1){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ie.__typeReadable===!1){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=F.width-_t&&Mt>=0&&Mt<=F.height-vt&&rt.readPixels(st,Mt,_t,vt,Lt.convert(Jt),Lt.convert(_e),Qt)}finally{let ae=Et!==null?dt.get(Et).__webglFramebuffer:null;P.bindFramebuffer(rt.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(F,st,Mt,_t,vt,Qt,Xt,Kt=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let re=dt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Xt!==void 0&&(re=re[Xt]),re)if(st>=0&&st<=F.width-_t&&Mt>=0&&Mt<=F.height-vt){P.bindFramebuffer(rt.FRAMEBUFFER,re);let ae=F.textures[Kt],Jt=ae.format,_e=ae.type;F.textures.length>1&&rt.readBuffer(rt.COLOR_ATTACHMENT0+Kt);let ie=Xr(ae);if(ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ue=rt.createBuffer();rt.bindBuffer(rt.PIXEL_PACK_BUFFER,Ue),rt.bufferData(rt.PIXEL_PACK_BUFFER,Qt.byteLength,rt.STREAM_READ),rt.readPixels(st,Mt,_t,vt,Lt.convert(Jt),Lt.convert(_e),0),rt.bindBuffer(rt.PIXEL_PACK_BUFFER,null);let Ze=Et!==null?dt.get(Et).__webglFramebuffer:null;P.bindFramebuffer(rt.FRAMEBUFFER,Ze);let De=rt.fenceSync(rt.SYNC_GPU_COMMANDS_COMPLETE,0);return rt.flush(),await Ud(rt,De,4),rt.bindBuffer(rt.PIXEL_PACK_BUFFER,Ue),rt.getBufferSubData(rt.PIXEL_PACK_BUFFER,0,Qt),rt.bindBuffer(rt.PIXEL_PACK_BUFFER,null),rt.deleteBuffer(Ue),rt.deleteSync(De),Qt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,st=null,Mt=0){let _t=Math.pow(2,-Mt),vt=Math.floor(F.image.width*_t),Qt=Math.floor(F.image.height*_t),Xt=st!==null?st.x:0,Kt=st!==null?st.y:0;Ct.setTexture2D(F,0),rt.copyTexSubImage2D(rt.TEXTURE_2D,Mt,0,0,Xt,Kt,vt,Qt),P.unbindTexture()},this.copyTextureToTexture=function(F,st,Mt=null,_t=null,vt=0,Qt=0){let Xt,Kt,re,ae,Jt,_e,ie,Ue,Ze,De=F.isCompressedTexture?F.mipmaps[Qt]:F.image;if(Mt!==null)Xt=Mt.max.x-Mt.min.x,Kt=Mt.max.y-Mt.min.y,re=Mt.isBox3?Mt.max.z-Mt.min.z:1,ae=Mt.min.x,Jt=Mt.min.y,_e=Mt.isBox3?Mt.min.z:0;else{let Nt=Math.pow(2,-vt);Xt=Math.floor(De.width*Nt),Kt=Math.floor(De.height*Nt),F.isDataArrayTexture?re=De.depth:F.isData3DTexture?re=Math.floor(De.depth*Nt):re=1,ae=0,Jt=0,_e=0}_t!==null?(ie=_t.x,Ue=_t.y,Ze=_t.z):(ie=0,Ue=0,Ze=0);let s=Lt.convert(st.format),a=Lt.convert(st.type),h;st.isData3DTexture?(Ct.setTexture3D(st,0),h=rt.TEXTURE_3D):st.isDataArrayTexture||st.isCompressedArrayTexture?(Ct.setTexture2DArray(st,0),h=rt.TEXTURE_2D_ARRAY):(Ct.setTexture2D(st,0),h=rt.TEXTURE_2D),P.activeTexture(rt.TEXTURE0),P.pixelStorei(rt.UNPACK_FLIP_Y_WEBGL,st.flipY),P.pixelStorei(rt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),P.pixelStorei(rt.UNPACK_ALIGNMENT,st.unpackAlignment);let p=P.getParameter(rt.UNPACK_ROW_LENGTH),x=P.getParameter(rt.UNPACK_IMAGE_HEIGHT),I=P.getParameter(rt.UNPACK_SKIP_PIXELS),B=P.getParameter(rt.UNPACK_SKIP_ROWS),Q=P.getParameter(rt.UNPACK_SKIP_IMAGES);P.pixelStorei(rt.UNPACK_ROW_LENGTH,De.width),P.pixelStorei(rt.UNPACK_IMAGE_HEIGHT,De.height),P.pixelStorei(rt.UNPACK_SKIP_PIXELS,ae),P.pixelStorei(rt.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(rt.UNPACK_SKIP_IMAGES,_e);let et=F.isDataArrayTexture||F.isData3DTexture,pt=st.isDataArrayTexture||st.isData3DTexture;if(F.isDepthTexture){let Nt=dt.get(F),It=dt.get(st),Ft=dt.get(Nt.__renderTarget),le=dt.get(It.__renderTarget);P.bindFramebuffer(rt.READ_FRAMEBUFFER,Ft.__webglFramebuffer),P.bindFramebuffer(rt.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let xe=0;xe<re;xe++)et&&(rt.framebufferTextureLayer(rt.READ_FRAMEBUFFER,rt.COLOR_ATTACHMENT0,dt.get(F).__webglTexture,vt,_e+xe),rt.framebufferTextureLayer(rt.DRAW_FRAMEBUFFER,rt.COLOR_ATTACHMENT0,dt.get(st).__webglTexture,Qt,Ze+xe)),rt.blitFramebuffer(ae,Jt,Xt,Kt,ie,Ue,Xt,Kt,rt.DEPTH_BUFFER_BIT,rt.NEAREST);P.bindFramebuffer(rt.READ_FRAMEBUFFER,null),P.bindFramebuffer(rt.DRAW_FRAMEBUFFER,null)}else if(vt!==0||F.isRenderTargetTexture||dt.has(F)){let Nt=dt.get(F),It=dt.get(st);P.bindFramebuffer(rt.READ_FRAMEBUFFER,Z),P.bindFramebuffer(rt.DRAW_FRAMEBUFFER,K);for(let Ft=0;Ft<re;Ft++)et?rt.framebufferTextureLayer(rt.READ_FRAMEBUFFER,rt.COLOR_ATTACHMENT0,Nt.__webglTexture,vt,_e+Ft):rt.framebufferTexture2D(rt.READ_FRAMEBUFFER,rt.COLOR_ATTACHMENT0,rt.TEXTURE_2D,Nt.__webglTexture,vt),pt?rt.framebufferTextureLayer(rt.DRAW_FRAMEBUFFER,rt.COLOR_ATTACHMENT0,It.__webglTexture,Qt,Ze+Ft):rt.framebufferTexture2D(rt.DRAW_FRAMEBUFFER,rt.COLOR_ATTACHMENT0,rt.TEXTURE_2D,It.__webglTexture,Qt),vt!==0?rt.blitFramebuffer(ae,Jt,Xt,Kt,ie,Ue,Xt,Kt,rt.COLOR_BUFFER_BIT,rt.NEAREST):pt?rt.copyTexSubImage3D(h,Qt,ie,Ue,Ze+Ft,ae,Jt,Xt,Kt):rt.copyTexSubImage2D(h,Qt,ie,Ue,ae,Jt,Xt,Kt);P.bindFramebuffer(rt.READ_FRAMEBUFFER,null),P.bindFramebuffer(rt.DRAW_FRAMEBUFFER,null)}else pt?F.isDataTexture||F.isData3DTexture?rt.texSubImage3D(h,Qt,ie,Ue,Ze,Xt,Kt,re,s,a,De.data):st.isCompressedArrayTexture?rt.compressedTexSubImage3D(h,Qt,ie,Ue,Ze,Xt,Kt,re,s,De.data):rt.texSubImage3D(h,Qt,ie,Ue,Ze,Xt,Kt,re,s,a,De):F.isDataTexture?rt.texSubImage2D(rt.TEXTURE_2D,Qt,ie,Ue,Xt,Kt,s,a,De.data):F.isCompressedTexture?rt.compressedTexSubImage2D(rt.TEXTURE_2D,Qt,ie,Ue,De.width,De.height,s,De.data):rt.texSubImage2D(rt.TEXTURE_2D,Qt,ie,Ue,Xt,Kt,s,a,De);P.pixelStorei(rt.UNPACK_ROW_LENGTH,p),P.pixelStorei(rt.UNPACK_IMAGE_HEIGHT,x),P.pixelStorei(rt.UNPACK_SKIP_PIXELS,I),P.pixelStorei(rt.UNPACK_SKIP_ROWS,B),P.pixelStorei(rt.UNPACK_SKIP_IMAGES,Q),Qt===0&&st.generateMipmaps&&rt.generateMipmap(h),P.unbindTexture()},this.initRenderTarget=function(F){dt.get(F).__webglFramebuffer===void 0&&Ct.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?Ct.setTextureCube(F,0):F.isData3DTexture?Ct.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?Ct.setTexture2DArray(F,0):Ct.setTexture2D(F,0),P.unbindTexture()},this.resetState=function(){ht=0,gt=0,Et=null,P.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Oe._getUnpackColorSpace()}}});function eb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function nb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ib(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xp),this.state=We.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function rb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=We.DOLLY;break;case fr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=We.ROTATE}break;case fr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(Mu)}function sb(n){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ob(n){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(n.preventDefault(),this.dispatchEvent(Mu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(xp))}function ab(n){this.enabled!==!1&&this._handleKeyDown(n)}function lb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case dr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=We.TOUCH_ROTATE;break;case dr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case dr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=We.TOUCH_DOLLY_PAN;break;case dr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(Mu)}function cb(n){switch(this._trackPointer(n),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=We.NONE}}function hb(n){this.enabled!==!1&&n.preventDefault()}function ub(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var vp,Mu,xp,_c,yp,tb,hn,Fn,We,xu,vc,Mp=gn(()=>{gc();vp={type:"change"},Mu={type:"start"},xp={type:"end"},_c=new sr,yp=new Hn,tb=Math.cos(70*Qh.DEG2RAD),hn=new ut,Fn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xu=1e-6,vc=class extends Oo{constructor(t,e=null){super(t,e),this.state=We.NONE,this.target=new ut,this.cursor=new ut,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fr.ROTATE,MIDDLE:fr.DOLLY,RIGHT:fr.PAN},this.touches={ONE:dr.ROTATE,TWO:dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ut,this._lastQuaternion=new Gn,this._lastTargetPosition=new ut,this._quat=new Gn().setFromUnitVectors(t.up,new ut(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ps,this._sphericalDelta=new Ps,this._scale=1,this._panOffset=new ut,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new ut,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nb.bind(this),this._onPointerDown=eb.bind(this),this._onPointerUp=ib.bind(this),this._onContextMenu=hb.bind(this),this._onMouseWheel=ob.bind(this),this._onKeyDown=ab.bind(this),this._onTouchStart=lb.bind(this),this._onTouchMove=cb.bind(this),this._onMouseDown=rb.bind(this),this._onMouseMove=sb.bind(this),this._interceptControlDown=ub.bind(this),this._interceptControlUp=fb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=We.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vp),this.update(),this.state=We.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;hn.copy(e).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Fn:i>Math.PI&&(i-=Fn),r<-Math.PI?r+=Fn:r>Math.PI&&(r-=Fn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),e.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let c=hn.length();l=this._clampDistance(c*this._scale);let u=c-l;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),o=!!u}else if(this.object.isOrthographicCamera){let c=new ut(this._mouse.x,this._mouse.y,0);c.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=u!==this.object.zoom;let d=new ut(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),l=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(_c.origin.copy(this.object.position),_c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_c.direction))<tb?this.object.lookAt(this.target):(yp.setFromNormalAndCoplanarPoint(this.object.up,this.target),_c.intersectPlane(yp,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>xu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xu||this._lastTargetPosition.distanceToSquared(this.target)>xu?(this.dispatchEvent(vp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fn/60*this.autoRotateSpeed*t:Fn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){hn.setFromMatrixColumn(e,0),hn.multiplyScalar(-t),this._panOffset.add(hn)}_panUp(t,e){this.screenSpacePanning===!0?hn.setFromMatrixColumn(e,1):(hn.setFromMatrixColumn(e,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(t),this._panOffset.add(hn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;hn.copy(r).sub(this.target);let o=hn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,o=e-i.top,l=i.width,c=i.height;this._mouse.x=r/l*2-1,this._mouse.y=-(o/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,c=(t.pageY+e.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ue,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function bp(n,t,e,i){n.onBeforeCompile=r=>{r.uniforms.uCut={value:t-.05},r.uniforms.uBase={value:i||new be(1,1,1)},r.uniforms.uBottom={value:t},r.vertexShader=`varying float vZ;
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
diffuseColor.rgb = mix(diffuseColor.rgb, uBase, onWall);`).replace("#include <normal_fragment_begin>",Ce.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")+`
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function Sp(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let r=i.getContext("2d");r.font="600 84px Inter, system-ui, sans-serif",r.fillStyle="#"+new be(t).getHexString(),r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,64);let o=new wo(i);o.colorSpace=Pn;let l=new bo(new Ss({map:o,depthTest:!1,transparent:!0}));return l.scale.set(e*2,e,1),l.renderOrder=6,l}var Un,Bs,db,yc,wp=gn(()=>{gc();Mp();Un={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa",rough3d:"#f5a524",rest3d:"#e3c341",finish3d:"#ff7a59",chamfer:"#f472b6"},Bs={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};db=(n,t)=>n.some(e=>e.key===t);yc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new dc({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new vo,this.camera=new wn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new vc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new Ro(16777215,4478310,1.6));let t=new Cs(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new Cs(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new ei,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=r=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&r-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=r,this.onFrame&&this.onFrame(r),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,r=new ut((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),l=new ut(-.45,-.8,.75).normalize(),c=[];for(let v of[t[0],e[0]])for(let _ of[t[1],e[1]])for(let b of[t[2],e[2]])c.push(new ut(v,_,b));let u=r.clone(),d=o*2,g=()=>{this.camera.position.copy(u).addScaledVector(l,d),this.camera.near=d/100,this.camera.far=d*100,this.camera.lookAt(u),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let v=0;v<8;v++){g();let _=1/0,b=-1/0,w=1/0,E=-1/0;for(let R of c){let D=R.clone().project(this.camera);_=Math.min(_,D.x),b=Math.max(b,D.x),w=Math.min(w,D.y),E=Math.max(E,D.y)}let M=Math.max((b-_)/2,(E-w)/2);if(!(M>0))break;let y=d*Math.tan(this.camera.fov*Math.PI/360),L=y*this.camera.aspect,z=new ut().setFromMatrixColumn(this.camera.matrixWorld,0),A=new ut().setFromMatrixColumn(this.camera.matrixWorld,1);u.addScaledVector(z,(_+b)/2*L).addScaledVector(A,(w+E)/2*y),d*=M/(1-i)}g(),this.controls.target.copy(u),this.controls.update()}showPart(t,e=[]){this.clear();let i=new Ke;i.setAttribute("position",new Ye(t.positions,3)),i.setIndex(new Ye(t.indices,1)),i.computeVertexNormals();let r=new ke(i,new Yn({color:9348283,metalness:.15,roughness:.55,side:En,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(r),this.pickMesh=r;let o=new Lr(new Ts(i,25),new ui({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let c of e)this.addLoops(c.loops,c.z,c.color,c.dashed,c.opacity);i.computeBoundingBox();let l=i.boundingBox;this.keepCamera||this.frame(l.min.toArray(),l.max.toArray())}addLoops(t,e,i,r,o=.95){for(let l of t){let c=l.map(([v,_])=>new ut(v,_,e)),u=new Ke().setFromPoints([...c,c[0]]),d=r?new Co({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new ui({color:i,transparent:!0,opacity:o,depthTest:!1}),g=new Rr(u,d);r&&g.computeLineDistances(),g.renderOrder=2,this.content.add(g)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let r=t.getBoundingClientRect(),o=new No;if(o.setFromCamera(new ue((i.clientX-r.left)/r.width*2-1,-((i.clientY-r.top)/r.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let u=o.intersectObjects(this.markers)[0];if(u?.object.userData.axis){this.onAxis?.(u.object.userData.axis);return}if(u){this.onMarker(u.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let l=o.intersectObject(this.pickMesh)[0];if(!l||!l.face)return;let c=l.face.normal.clone();c.dot(o.ray.direction)>0&&c.negate(),this.onPick([c.x,c.y,c.z])})}showZero({stock:t,part:e,points:i,selected:r,zFace:o,color:l,accent:c="#4c6ef5"}){this.clear();let u=t.maxX-t.minX,d=t.maxY-t.minY,g=t.top-t.bottom,v=Math.max(u,d,g),_=new ar(u,d,g);_.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let b=new ke(_,new Yn({color:l,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(b.renderOrder=2,this.content.add(b),this.content.add(new Lr(new Ts(_),new ui({color:new be(l).multiplyScalar(.6)}))),e){let y=new Ke;y.setAttribute("position",new Ye(e.positions,3)),y.setIndex(new Ye(e.indices,1)),y.computeVertexNormals(),this.partMesh=new ke(y,new Yn({color:9348283,metalness:.15,roughness:.55})),this.content.add(this.partMesh)}else this.partMesh=null;let w=o==="bed"?t.bottom:t.top,E=v*.014;this.markers=[];for(let y of i){let L=y.key===r,z=new ke(new lr(L?E*1.3:E,24,16),new Xn({color:L?c:16777215}));if(z.position.set(y.x,y.y,w),z.userData.key=y.key,z.renderOrder=4,z.material.depthTest=!1,!L){let R=new ke(new lr(E*1.25,24,16),new Xn({color:6187893,depthTest:!1}));R.renderOrder=3,z.add(R)}let A=new ke(new lr(E*3.5,12,8),new Xn({visible:!1}));if(A.userData.key=y.key,z.add(A),this.markers.push(A),this.content.add(z),L){let R=new ke(new Ao(E*1.6,E*2,40),new Xn({color:c,transparent:!0,depthTest:!1,side:En}));R.position.copy(z.position),R.renderOrder=4,this.content.add(R),this.pulse=R;let D=v*.24;for(let[H,C,k]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let G=new Do(new ut(...H),z.position,D,C,D*.15,D*.065);G.line.visible=!1;let Y=new ke(new wi(v*.0028,v*.0028,D*.86,12),new Xn({color:C,depthTest:!1}));Y.position.y=D*.43,Y.renderOrder=5,G.add(Y),G.cone.material.depthTest=!1,G.renderOrder=5,G.cone.renderOrder=5,this.content.add(G);let j=Sp(k,C,v*.05);j.position.copy(z.position).add(new ut(...H).multiplyScalar(D*1.18)),this.content.add(j);let q=new ke(new wi(D*.1,D*.1,D*1.3,10),new Xn({visible:!1}));q.quaternion.setFromUnitVectors(new ut(0,1,0),new ut(...H)),q.position.copy(z.position).add(new ut(...H).multiplyScalar(D*.65)),q.userData.axis=k.toLowerCase(),this.content.add(q),this.markers.unshift(q)}}}let M=Sp("Front",9675444,v*.04);M.position.set((t.minX+t.maxX)/2,t.minY-v*.08,t.bottom),this.content.add(M),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),db(i,r)||(this.pulse=null),this.onFrame=y=>{if(!this.pulse)return;let L=y%1600/1600;this.pulse.scale.setScalar(1+L*1.6),this.pulse.material.opacity=.8*(1-L),this.pulse.lookAt(this.camera.position)}}spin(t,e=700){let i=this.partMesh;if(!i)return Promise.resolve();i.geometry.computeBoundingBox();let r=i.geometry.boundingBox.getCenter(new ut),o=t==="x"?new ut(1,0,0):new ut(0,0,1);i.matrixAutoUpdate=!1;let l=performance.now();return new Promise(c=>{let u=d=>{let g=Math.min(1,(d-l)/e),v=g<.5?2*g*g:1-(-2*g+2)**2/2;i.matrix.makeTranslation(r.x,r.y,r.z).multiply(new Xe().makeRotationAxis(o,Math.PI*v)).multiply(new Xe().makeTranslation(-r.x,-r.y,-r.z)),i.matrixWorldNeedsUpdate=!0,g<1&&i.parent?requestAnimationFrame(u):c()};requestAnimationFrame(u)})}showStock(t,e,i){this.clear(),this.keepCamera=!1;let r=t.nx,o=t.ny,l=r*o,c=new Float32Array(l*3),u=new Float32Array(l*3),d=new be(e);for(let L=0;L<o;L++)for(let z=0;z<r;z++){let A=L*r+z;c[A*3]=t.x0+z*t.cell,c[A*3+1]=t.y0+L*t.cell,c[A*3+2]=t.h[A],u[A*3]=d.r,u[A*3+1]=d.g,u[A*3+2]=d.b}let g=new Uint32Array((r-1)*(o-1)*6),v=0;for(let L=0;L<o-1;L++)for(let z=0;z<r-1;z++){let A=L*r+z,R=A+1,D=A+r,H=D+1;g[v++]=A,g[v++]=R,g[v++]=H,g[v++]=A,g[v++]=H,g[v++]=D}let _=new Ke;_.setAttribute("position",new Ye(c,3).setUsage(Or)),_.setAttribute("color",new Ye(u,3).setUsage(Or));let b=new Float32Array(l*3);for(let L=0;L<l;L++)b[L*3+2]=1;_.setAttribute("normal",new Ye(b,3).setUsage(Or));let w=new Float32Array(l*4);for(let L=0;L<l;L++)w[L*4+2]=t.h[L],w[L*4+3]=t.h[L];_.setAttribute("wall",new Ye(w,4).setUsage(Or)),_.setIndex(new Ye(g,1));let E=new Yn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Bs.aluminum?.5:.05,side:En});bp(E,t.bottom,!1,d);let M=new ke(_,E);this.content.add(M),this.stock={hm:t,geo:_,base:d,sides:this.makeSides(t,d)};let y=new Yn({color:d.clone().multiplyScalar(.7),roughness:.9,side:En});if(bp(y,t.bottom,!0),this.content.add(new ke(_,y)),i){let L=new Ke;L.setAttribute("position",new Ye(i.positions,3)),L.setIndex(new Ye(i.indices,1)),L.computeVertexNormals(),this.partGhost=new ke(L,new Yn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new ei,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(r-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let v=0;v<t.nx;v++)i.push(v);for(let v=1;v<t.ny;v++)i.push(v*t.nx+t.nx-1);for(let v=t.nx-2;v>=0;v--)i.push((t.ny-1)*t.nx+v);for(let v=t.ny-2;v>=0;v--)i.push(v*t.nx);let r=new Float32Array(i.length*6),o=new Float32Array(i.length*6),l=[],c=[[0,-1],[1,0],[0,1],[-1,0]],u=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let v=0;v<i.length;v++){let _=i[v],b=t.x0+_%t.nx*t.cell,w=t.y0+Math.floor(_/t.nx)*t.cell;r.set([b,w,t.h[_],b,w,t.bottom],v*6);let[E,M]=c[v<u[0]?0:v<u[1]?1:v<u[2]?2:3];if(o.set([E,M,0,E,M,0],v*6),v<i.length-1){let y=v*2;l.push(y,y+1,y+3,y,y+3,y+2)}}let d=new Ke;d.setAttribute("position",new Ye(r,3).setUsage(Or)),d.setAttribute("normal",new Ye(o,3)),d.setIndex(l);let g=new ke(d,new Yn({color:e.clone().multiplyScalar(.85),roughness:.85,side:En}));return this.content.add(g),{g:d,edge:i}}refreshStock(t,e,i){let r=this.stock;if(!r||e<t)return;let{hm:o,geo:l,base:c}=r,u=o.nx,d=o.ny,g=o.h,v=l.attributes.position,_=l.attributes.color,b=l.attributes.normal,w=l.attributes.wall,E=new be,M=Math.max(0,t),y=Math.min(d-1,e),L=o.cell*1.5,z=(C,k,G)=>{let Y=g[k*u+C],j=0;for(let q=-1;q<=1;q++)for(let Z=-1;Z<=1;Z++){let K=C+Z,ht=k+q;(Z||q)&&K>=0&&ht>=0&&K<u&&ht<d&&(j=Math.max(j,G*(g[ht*u+K]-Y)))}return j};for(let C=M;C<=y;C++)for(let k=0;k<u;k++){let G=C*u+k;v.array[G*3]=o.x0+k*o.cell+(o.sx?o.sx[G]:0),v.array[G*3+1]=o.y0+C*o.cell+(o.sy?o.sy[G]:0),v.array[G*3+2]=g[G];let Y=o.op[G];Y?(E.copy(c).lerp(i[Y-1],.28),E.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(g[G]-o.bottom)/Math.max(1,o.top-o.bottom))))):E.copy(c),_.array[G*3]=E.r,_.array[G*3+1]=E.g,_.array[G*3+2]=E.b}let A=v.array,R=Math.max(0,M-1),D=Math.min(d-1,y+1);for(let C=R;C<=D;C++)for(let k=0;k<u;k++){let G=C*u+k,Y=w.array,j=z(k,C,1),q=z(k,C,-1);if(Y[G*4]=0,Y[G*4+1]=0,Y[G*4+2]=g[G],Y[G*4+3]=g[G],o.wx&&(o.wx[G]||o.wy[G])&&(j>L||q>L)){Y[G*4]=o.wx[G],Y[G*4+1]=o.wy[G],Y[G*4+2]=g[G]-q,Y[G*4+3]=g[G]+j,b.array[G*3]=0,b.array[G*3+1]=0,b.array[G*3+2]=1;continue}let Z=(C*u+Math.max(0,k-1))*3,K=(C*u+Math.min(u-1,k+1))*3,ht=(Math.max(0,C-1)*u+k)*3,gt=(Math.min(d-1,C+1)*u+k)*3,Et=A[K]-A[Z],yt=A[K+1]-A[Z+1],Pt=A[K+2]-A[Z+2],Rt=A[gt]-A[ht],jt=A[gt+1]-A[ht+1],at=A[gt+2]-A[ht+2],Bt=yt*at-Pt*jt,Vt=Pt*Rt-Et*at,Gt=Et*jt-yt*Rt,ft=Math.hypot(Bt,Vt,Gt)||1;Gt<0&&(Bt=-Bt,Vt=-Vt,Gt=-Gt),b.array[G*3]=Bt/ft,b.array[G*3+1]=Vt/ft,b.array[G*3+2]=Gt/ft}v.addUpdateRange(M*u*3,(y-M+1)*u*3),_.addUpdateRange(M*u*3,(y-M+1)*u*3),b.addUpdateRange(R*u*3,(D-R+1)*u*3),w.addUpdateRange(R*u*4,(D-R+1)*u*4),v.needsUpdate=!0,_.needsUpdate=!0,b.needsUpdate=!0,w.needsUpdate=!0;let H=r.sides.g.attributes.position;r.sides.edge.forEach((C,k)=>{H.array[k*6+2]=g[C]}),H.needsUpdate=!0}setTool(t,e){for(let v of[...this.tool.children])this.tool.remove(v),v.traverse(_=>{_.geometry?.dispose(),_.material?.dispose()});let i=t.diameter/2,r=t.kind==="surfacing"||i>6.35,o=r?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),l=new Yn({color:14015457,metalness:.85,roughness:.3}),c;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let v=i/Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360);c=new ke(new Es(i,v,48),l),c.rotation.x=-Math.PI/2,c.position.z=v/2}else if(t.kind==="ball"){c=new ei;let v=new ke(new wi(i,i,o-i,64),l);v.rotation.x=Math.PI/2,v.position.z=i+(o-i)/2;let _=new ke(new lr(i,48,24,0,Math.PI*2,Math.PI/2,Math.PI/2),l);_.rotation.x=Math.PI/2,_.position.z=i,c.add(v,_)}else c=new ke(new wi(i,i,o,64),l),c.rotation.x=Math.PI/2,c.position.z=o/2;let u=r?3.175:Math.max(i,Math.min(3.175,i*1.5)),d=20,g=new ke(new wi(u,u,d,32),new Yn({color:11187132,metalness:.8,roughness:.35}));g.rotation.x=Math.PI/2,g.position.z=o+d/2,this.tool.add(c,g)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new ei;for(let e of t){let i=e.track;if(!i)continue;let r=[],o=[];for(let c=4;c<i.length;c+=4)(i[c+3]>0?r:o).push(i[c-4],i[c-3],i[c-2]+.02,i[c],i[c+1],i[c+2]+.02);let l=(c,u,d)=>{if(!c.length)return;let g=new Ke;g.setAttribute("position",new $e(c,3));let v=new Lr(g,new ui({color:u,transparent:!0,opacity:d}));v.renderOrder=3,this.paths.add(v)};l(r,Un[e.kind]||"#1abc9c",.75),l(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function mb(){return new Promise((n,t)=>{let e=indexedDB.open(pb,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Ep(n,t){let e=await mb();return new Promise((i,r)=>{let o=e.transaction("kv",n),l=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(l?.result)},o.onerror=o.onabort=()=>{e.close(),r(o.error)}})}var pb,Tp,Ap,Cp=gn(()=>{pb="nccam";Tp=n=>Ep("readonly",t=>t.get(n)).catch(()=>null),Ap=(n,t)=>Ep("readwrite",e=>e.put(t,n)).catch(()=>{})});var Ip={};Fu(Ip,{mountApp:()=>xb});function xb(n,t,e){let i={get:async U=>{let $=await fetch(t.base+U);if(!$.ok)throw new Error(`${U}: ${$.status}`);return $.json()},post:(U,$)=>fetch(t.base+U,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($)})},r={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,scale:[1,1,1],lock:!0,fileSize:null,meshKind:null,tools:[],numbering:"slot",safeZ:null,connected:!1,units:"mm",limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:""},o=new yc,l=U=>!!U.toolNumber&&(!r.slots||U.toolNumber<=r.slots),c=(U,$)=>kn.num(U,r.units,$),u=(U,$)=>kn.len(U,r.units,$),d=0;(async()=>{let[U,$,J,lt]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);r.units=kn.unitsFrom(U?.unitsPreference),r.numbering=U?.tool?.numbering==="toolId"?"toolId":"slot",r.slots=Math.max(0,Number(U?.tool?.count)||0);let V=U?.tool?.probe?Number(U?.tool?.probeToolNumber)||99:null,bt=Number(U?.safeZHeight);r.safeZ=Number.isFinite(bt)?bt:null,r.tools=lf(Array.isArray($)?$:$?.tools),r.numbering=af(r.numbering,r.tools,r.slots,V);let ct=J?.settings||{},Lt=wt=>{let At=parseFloat(ct[wt]?.value);return Number.isFinite(At)&&At>0?At:null};r.limits={maxRpm:Lt("30")||void 0,minRpm:Lt("31")||void 0,maxFeed:Math.min(Lt("110")||1/0,Lt("111")||1/0,1/0)},Number.isFinite(r.limits.maxFeed)||delete r.limits.maxFeed,r.maxRapid=Math.min(Lt("110")||5e3,Lt("111")||5e3),Lt("130")&&Lt("131")&&(r.travel={x:Lt("130"),y:Lt("131"),z:Lt("132")}),r.connected=!!lt?.machineState?.connected,R();let mt=await Tp("last");mt?.bytes&&!r.part&&!r.loading&&g(null,mt)})();async function g(U,$=null){if(!U&&!$)return;let J=$?$.name:U.name;r.fileName=J,r.loading=`Reading ${J}\u2026`,r.error="",r.plan=null,r.result=null,r.analysis=null,r.part=null,r.step=1,r.maxStep=1,R();try{let lt=$?$.bytes:await U.arrayBuffer();r.bytes=lt.slice(0),r.scale=$?.scale||[1,1,1],r.lock=$?.lock??!0;let V=await e("load",{bytes:lt,name:J,scale:r.scale},[lt]);if(r.sides=V.sides,r.fileSize=V.fileSize,r.meshKind=V.mesh||null,$?.upPath?.length){r.job=null;for(let bt of $.upPath)await w(bt,!0);r.job={...Qs(r.analysis),...$.job},await L()}else await w(V.best);A()}catch(lt){r.error=lt.message||String(lt),r.fileName=""}r.loading="",R()}let v=Promise.resolve();function _(U){return r.scale=U,v=v.then(async()=>{r.loading="Resizing the part\u2026",R();try{let $=await e("rescale",{scale:U});r.sides=$.sides;let J=r.job,lt=r.upPath||[$.best];r.job=null;for(let V of lt)await w(V,!0);r.job={...Qs(r.analysis),...J,stock:J.stock.fit?Qs(r.analysis).stock:J.stock},r.result=null,r.maxStep=Math.min(r.maxStep,3),await L(),A()}catch($){r.error=$.message||String($)}r.loading="",R()}),v}let b={top:"bottom",bottom:"top",front:"back",back:"front",left:"right",right:"left"};async function w(U,$=!1,J=!1){J||(r.loading="Turning the part\u2026",R());let V=await(U&&!Array.isArray(U)&&typeof U=="object"?e("turn",{how:U.turn}):e(Array.isArray(U)?"tilt":"orient",Array.isArray(U)?{normal:U}:{up:U}));return E(U,V,$)}function E(U,$,J){let lt=U&&!Array.isArray(U)&&typeof U=="object";if(lt?r.up=U.turn==="over"?b[r.up]||"custom":r.up:r.up=Array.isArray(U)?"custom":U,r.upPath=lt||Array.isArray(U)?[...r.upPath||[],U]:[U],J){r.part={positions:$.positions,indices:$.indices},r.analysis=$.analysis,r.loading="";return}r.part={positions:$.positions,indices:$.indices},r.analysis=$.analysis;let V=r.job;return r.job=Qs($.analysis),V&&Object.assign(r.job,{material:V.material,finish:V.finish,zero:V.zero,tabs:V.tabs,chamfer:V.chamfer,stock:{...r.job.stock,fit:V.stock.fit,margin:V.stock.margin,extraTop:V.stock.extraTop}}),r.loading="",L()}let M=!1;async function y(U){if(M||!r.part)return;M=!0;let $={turn:U==="z"?"over":"around"};try{let[J]=await Promise.all([e("turn",{how:$.turn}),o.spin(U==="z"?"x":"z")]);await E($,J,!1)}catch(J){r.error=J.message||String(J),R()}M=!1}async function L(U=!1){if(!r.part)return;let $=++d;r.planning=!0,U&&(r.result=null),R();try{let J=await e("plan",{tools:r.tools,job:{...r.job,units:r.units},limits:r.limits,paths:U,gcodeOptions:{name:r.fileName,numbering:r.numbering,safeZHeightMm:r.safeZ},timing:{maxRapid:r.maxRapid||5e3}});if($!==d)return;r.plan=J.plan,A(),U&&(r.result=J,r.simChecks=null)}catch(J){$===d&&(r.error=J.message||String(J))}$===d&&(r.planning=!1,R())}let z=null;function A(){!r.bytes||!r.job||(clearTimeout(z),z=setTimeout(()=>Ap("last",{name:r.fileName,bytes:r.bytes,upPath:r.upPath,job:r.job,scale:r.scale,lock:r.lock,savedAt:Date.now()}),400))}function R(){if(!n.isConnected)return;let U=n.querySelector("[data-keep-scroll]"),$=U?U.scrollTop:0,J=r.step,lt=["Drop a STEP, STL or 3MF file. ncCAM finds the pockets, holes and outline for you.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][J-1],V=[r.part?"Your part":"Open your part","What are you cutting it from?","Here\u2019s the plan",r.simChecks&&!r.simChecks.ok?"Check the warnings":"Ready to cut"][J-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCAM<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">STEP, STL or 3MF to G-code</div></div>
        <div class="ncc-steps">${_b.map((Lt,mt)=>{let wt=mt+1,At=wt===J?"on":wt<r.maxStep||wt<J?"done":"";return`<button class="ncc-step ${At}" type="button" data-go="${wt}" ${wt<=r.maxStep?"":"disabled"}><span class="ncc-num">${At==="done"?"\u2713":wt}</span>${qe(Lt)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${tn.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${qe(V)}</h1><p class="ncc-lede">${qe(lt)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${r.connected?"ok":""}"></span>${r.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${J===3?"fixed":""}">${[H,K,Bt,Ut][J-1]()}</div>
        <div class="ncc-foot">${D()}</div>
      </section>
      ${r.toast?`<div class="ncc-toast" role="status">${qe(r.toast)}</div>`:""}`;let bt=n.querySelector("[data-keep-scroll]");bt&&(bt.scrollTop=$);let ct=n.querySelector("[data-viewer]");if(ct){ct.replaceWith(o.el);let Lt=r.loading||J===4&&!r.result?`<div class="ncc-busy"><span class="ncc-spin"></span>${qe(r.loading||"Making toolpaths\u2026")}</div>`:"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(mt=>mt.remove()),o.el.insertAdjacentHTML("beforeend",(J===1?j():J===4?de():"")+Lt),o.fit(),J===1&&Z(),J===2&&at(),J===3&&ft(),J===4&&r.result&&ye()}}function D(){let U=`<button class="ncc-back" type="button" data-go="${r.step-1}" ${r.step>1?"":"disabled"}>Back</button>`;if(r.step===1)return`${U}<button class="ncc-next" type="button" data-go="2" ${r.plan&&r.plan.ops.length&&!r.loading?"":"disabled"}>Next: Stock ${tn.next}</button>`;if(r.step===2)return`${U}<button class="ncc-next" type="button" data-go="3">Next: Operations ${tn.next}</button>`;if(r.step===3){let J=r.plan&&r.plan.ops.some(lt=>lt.enabled);return`${U}<button class="ncc-next" type="button" data-go="4" ${J&&!r.planning?"":"disabled"}>Make toolpaths ${tn.next}</button>`}let $=r.simChecks&&!r.simChecks.ok;return`${U}${$?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${r.result&&r.simChecks&&!$?"":"disabled"}>${tn.load}Load into ncSender</button>`}function H(){if(!r.part&&!r.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${tn.upload}</div>
        <h2>Drop a STEP, STL or 3MF file here</h2>
        <p>Export your part from Fusion, Onshape, FreeCAD or SolidWorks as <strong>.step</strong>, or open a mesh: <strong>.stl</strong> or <strong>.3mf</strong> (from a 3D printing site or slicer). Millimetres or inches both work.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open file<input type="file" accept=".step,.stp,.stl,.3mf,.STEP,.STP,.STL,.3MF" data-file hidden></label>
        ${r.error?`<div class="ncc-hint bad" style="max-width: 520px">${tn.warn}<span>${qe(r.error)}</span></div>`:""}
        ${r.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${tn.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCAM can pick them.</span></div>`}
      </div>`;let U=r.analysis;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${tn.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${qe(r.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${U?`${c(U.size[0])} \xD7 ${c(U.size[1])} \xD7 ${u(U.size[2])}`:"&nbsp;"}</div></div>
          </div>
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept=".step,.stp,.stl,.3mf,.STEP,.STP,.STL,.3MF" data-file hidden></label>
        </div>
        <div data-viewer></div>
      </div>
      <div class="ncc-col ncc-side">
        ${C()}
        <div class="ncc-card">
          <div class="ncc-label">Which side faces up?</div>
          <div class="ncc-picks">${vb.map(([$,J])=>{let lt=!r.sides||r.sides[$].reachable;return`<button class="ncc-pick ${r.up===$?"sel":""}" type="button" data-up="${$}" ${lt?"":"disabled"} ${lt?"":`title="With the ${J.toLowerCase()} up, some faces point down and the tool can\u2019t reach them"`}>${sn(yb[$],24,'stroke-width="1.8"')}${J}${lt?"":"<small>Can\u2019t reach</small>"}</button>`}).join("")}</div>
          <div class="ncc-row-sub">Or click a flat face on the model to put it on top.</div>
        </div>
        ${k()}
        ${Y(!0)}
      </div>`}function C(){if(!r.fileSize)return"";let U=bt=>{let ct=r.fileSize[bt]*r.scale[bt];return r.units==="in"?Math.round(ct/kn.INCH*1e3)/1e3:Math.round(ct*100)/100},$=r.scale.map(bt=>`${Math.round(bt*1e3)/10}%`),J=r.scale.every(bt=>Math.abs(bt-r.scale[0])<1e-9),lt=r.scale.some(bt=>Math.abs(bt-1)>1e-9),V=r.meshKind==="stl"&&!lt&&Math.max(...r.fileSize)<12;return`<div class="ncc-card">
        ${ht("lock","Keep the proportions",J?lt?`Scaled to ${$[0]}`:"As in the file":`Scaled ${$.join(" \xD7 ")}`,r.lock)}
        <div class="ncc-fields">${["X","Y","Z"].map((bt,ct)=>`<div class="ncc-field"><label for="ncc-size${ct}">${bt} (${r.units})</label><input id="ncc-size${ct}" class="ncc-input ncc-mono" inputmode="decimal" data-size="${ct}" value="${U(ct)}"></div>`).join("")}</div>
        <div class="ncc-row-sub">In the file\u2019s own X, Y and Z, before turning it.${lt?' <button type="button" class="ncc-link" data-scale="reset">Back to the file\u2019s size</button>':""}</div>
        ${V?`<div class="ncc-hint">${tn.info}<span>Only ${c(Math.max(...r.fileSize))} across: STL files have no unit, so this may have been drawn in inches. <button type="button" class="ncc-link" data-scale="inch">Make it inches (\xD7 25.4)</button></span></div>`:""}
      </div>`}function k(){if(!r.plan)return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-row-sub">${r.planning?"Looking\u2026":""}</div></div>`;let U=new Map;for(let J of r.plan.ops.filter(lt=>lt.kind!=="face"&&lt.kind!=="corners"&&lt.kind!=="finish3d"&&lt.kind!=="rest3d")){let lt=G(J),V=U.get(lt)||{o:J,name:lt,n:0};V.n+=J.count||1,U.set(lt,V)}let $=J=>J.n<2?J.name:J.name.replace(/^(Pocket|Step), /,(lt,V)=>`${J.n} ${V.toLowerCase()}s, `);return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-found">${[...U.values()].map(J=>`<div class="ncc-row"><span style="display: flex; align-items: center; gap: 8px"><span class="ncc-swatch" style="background: ${Un[J.o.kind]}"></span>${qe($(J))}</span><span class="ncc-ok">\u2713</span></div>`).join("")||'<div class="ncc-row-sub">Nothing to cut from this side.</div>'}</div></div>`}function G(U){let $=U.detail.replace(/ · spiral$/,"");return U.kind==="cutout"?`Outline, ${u(U.zTop)} cut-out`:U.kind==="rough3d"?`3D surface, ${u(U.zTop)} tall`:U.kind==="hole"||U.kind==="drill"?`${U.centers.length>1?`${U.centers.length} holes`:"Hole"}, ${$}`:U.kind==="step"?`Step, ${$}`:`Pocket, ${$.split(" \xB7 ").pop()}`}function Y(U){if(!r.plan)return"";let $=r.plan.warnings.filter(J=>!U||J.kind==="undercut"||J.kind==="sloped"||J.kind==="edges"||J.kind==="surface3d");return!$.length&&U?`<div class="ncc-hint">${tn.info}<span>Everything can be cut from the top in one setup.</span></div>`:$.map(J=>`<div class="ncc-hint ${J.kind==="notool"||J.kind==="noball"?"bad":""}">${J.kind==="notool"||J.kind==="noball"?tn.warn:tn.info}<span>${qe(J.text)}</span></div>`).join("")}function j(){if(!r.plan)return"";let U=[...new Set(r.plan.ops.filter(J=>J.kind!=="face"&&J.kind!=="corners"&&J.kind!=="finish3d"&&J.kind!=="rest3d").map(J=>J.kind))],$={pocket:"Pockets",hole:"Holes",drill:"Holes",step:"Steps",cutout:"Outline",rough3d:"3D surface",chamfer:"Chamfers"};return`<div class="ncc-overlay tr">${U.map(J=>`<span class="ncc-chip"><span class="ncc-swatch" style="background: ${Un[J]}"></span>${$[J]}</span>`).join("")}</div>
      <div class="ncc-overlay bl"><span class="ncc-chip">Drag to rotate</span><span class="ncc-chip">Scroll to zoom</span><span class="ncc-chip">Click a face to put it on top</span></div>`}let q=null;function Z(){if(!r.part)return;me=null,jt=null;let U=r.part.positions,$=(r.plan?.ops||[]).filter(J=>J.kind!=="face"&&J.kind!=="corners").flatMap(J=>J.kind==="cutout"?[{loops:J.region,z:J.zTop+.05,color:Un.cutout,dashed:!0}]:J.centers&&!J.region?[{loops:J.centers.map(lt=>Pp(lt)),z:J.zTop+.05,color:Un[J.kind]}]:[{loops:J.region,z:J.zTop+.05,color:Un[J.kind]}]);o.keepCamera=q===U,o.showPart(r.part,$),q=U,o.onFrame=null,o.onPick=async J=>{if(r.loading)return;let lt=r.up;try{await w(J),r.analysis.undercut&&lt!=="custom"&&(!r.sides||r.sides[lt]?.reachable)&&(await w(lt),xt("With that face up, some of the part can\u2019t be reached from the top."))}catch(V){r.error=V.message,R()}}}function K(){let U=r.job,$=r.plan?.stock||la(r.analysis,U),J=Object.entries(Mr).map(([V,bt])=>`<button class="ncc-pick ncc-mat ${U.material===V?"sel":""}" type="button" data-material="${V}"><span class="ncc-mat-swatch" style="background: ${Bs[V]}"></span>${qe(bt.name)}<small>${qe(bt.note)}</small></button>`).join(""),lt=(V,bt,ct)=>`<div class="ncc-field"><label for="ncc-${V}">${bt}</label><input id="ncc-${V}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${V}" value="${r.units==="in"?Math.round(ct/kn.INCH*1e3)/1e3:Math.round(ct*100)/100}" ${U.stock.fit?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${J}</div></div>
        <div class="ncc-card">
          ${ht("fit","Size the stock to the part",`Adds ${u(U.stock.margin)} on every side and ${u(U.stock.extraTop)} on top`,U.stock.fit)}
          <div class="ncc-fields">${lt("width",`Width X (${r.units})`,$.width)}${lt("depth",`Depth Y (${r.units})`,$.depth)}${lt("thickness",`Thickness Z (${r.units})`,$.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${ht("tabs","Leave tabs to hold the part",U.tabs.enabled?`${c(Et().height)} \xD7 ${u(Et().length)}, so the part stays put until you cut it free`:"The part comes loose at the end",U.tabs.enabled)}
          ${U.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${U.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${U.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${U.tabs.count>=12?"disabled":""}>+</button></div></div>
          ${Pt("height","Tab thickness","Thinner tabs","Thicker tabs")}
          ${Pt("length","Tab length","Shorter tabs","Longer tabs")}`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${Rt($)}
          <div style="font-size: 14px">X Y zero: <strong>${qe(gt(U.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${U.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${U.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let ht=(U,$,J,lt)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${qe($)}</div><div class="ncc-row-sub">${qe(J)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${lt}" aria-label="${qe($)}" data-toggle="${U}"></button></div>`;function gt(U){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[U]}let Et=()=>({...Fi(r.job.material),...Object.fromEntries(["height","length"].filter(U=>r.job.tabs[U]!=null).map(U=>[U,r.job.tabs[U]]))}),yt=()=>r.units==="in"?{min:.508,max:10.16,step:.508,grid:.254}:{min:.5,max:10,step:.5,grid:.1};function Pt(U,$,J,lt){let V=Et()[U];return`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${$}</span><div class="ncc-stepper"><button type="button" data-tabsize="${U}" data-by="-1" aria-label="${J}" ${V<=yt().min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${u(V,r.units==="in"?2:1)}</span><button type="button" data-tabsize="${U}" data-by="1" aria-label="${lt}" ${V>=yt().max-1e-6?"disabled":""}>+</button></div></div>`}function Rt(U){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${c(U.width)} \xD7 ${c(U.depth)} \xD7 ${u(U.thickness)} stock \xB7 tap a point for zero, an arrow to turn the part</div>`}let jt=null;function at(){let U=r.plan?.stock||la(r.analysis,r.job),$=uf.map(V=>({key:V,...Xc(U,{xy:V,z:"top"})})),J=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",lt=`${r.part?.positions?.length}|${U.width}|${U.depth}|${U.thickness}`;o.keepCamera=jt===lt,o.showZero({stock:U,part:r.part,points:$,selected:r.job.zero.xy,zFace:r.job.zero.z,color:Bs[r.job.material],accent:J}),jt=lt,q=null,me=null,o.onPick=null,o.onMarker=V=>{V!==r.job.zero.xy&&(r.job.zero.xy=V,kt())},o.onAxis=V=>y(V)}function Bt(){let U=r.plan;if(!U)return'<div class="ncc-busy" style="position: static; flex: 1"><span class="ncc-spin"></span>Planning\u2026</div>';let $=U.ops.map(mt=>{let wt=St(mt);return`<div class="ncc-op ${mt.enabled?"":"off"} ${r.focusOp===mt.id?"focus":""}" data-focus="${mt.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${Un[mt.kind]} 16%, transparent); color: ${Un[mt.kind]}">${tn[mt.kind]||tn.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${qe(mt.label)}</div><div class="ncc-op-sub ncc-mono">${qe(mt.detail)}</div></div>
        <select class="ncc-select" data-tool="${mt.id}" aria-label="Tool for ${qe(mt.label)}">${wt.map(At=>`<option value="${At.id}" ${At.id===mt.tool.id?"selected":""}>T${br(At,r.numbering)} \xB7 ${qe(At.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${mt.enabled}" aria-label="${qe(mt.label)}" data-op="${mt.id}"></button>
      </div>`}).join(""),J=ca(U),lt=new Map;for(let mt of U.ops)mt.enabled&&mt.kind!=="face"&&lt.set(mt.tool.id,(lt.get(mt.tool.id)||0)+1);let V=[...lt].sort((mt,wt)=>wt[1]-mt[1])[0]?.[0],bt=U.ops.find(mt=>mt.enabled&&mt.tool.id===V)||U.ops.find(mt=>mt.enabled),ct=bt?.feeds,Lt=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(Qn).map(([mt,wt])=>`<button type="button" class="${r.job.finish===mt?"sel":""}" data-finish="${mt}">${wt.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${U.ops.some(mt=>mt.kind==="finish3d")?`3D: passes spaced for ${u(aa[r.job.finish],r.units==="in"?4:2)} ridges${r.job.finish==="fast"?"; flat walls without a finishing pass":""}.`:""} ${{fast:"Bigger steps, no finishing pass.",balanced:`Leaves ${u(.2,r.units==="in"?3:1)} on the walls, then a clean finishing pass.`,smooth:"Lighter steps and a finishing pass, for the best walls."}[r.job.finish]}</div>
            ${ct?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${qe(bt.tool.name)}<br>${qe(Mr[r.job.material].name)} \xB7 ${ct.rpm.toLocaleString()} RPM<br>${r.units==="in"?`${c(ct.feed,1)} in/min`:`${ct.feed.toLocaleString()} mm/min`} \xB7 ${u(ct.stepdown,r.units==="in"?3:2)} per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${J.map(mt=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${br(mt,r.numbering)}</span> ${qe(mt.name)}</span><span class="ncc-slot ${l(mt)?"":"hand"}">${l(mt)?`Slot ${mt.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${J.some(mt=>!mt.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops">${Gt()}<div class="ncc-ops">${$}</div>${Vt()}${Y(!1)}<div class="ncc-plan-pair-in">${Lt}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${Lt}</div>
      </div>`}function Vt(){if(r.plan.did3d)return"";let U=r.job.chamfer,$=U?.size>0,J=$?U.size:$i.size,lt=U?.edges||"all",V=$?r.plan.ops.some(bt=>bt.kind==="chamfer")?"A V-bit runs along each edge after the cut-out.":"No edge can be chamfered: see the notes below.":"Off: edges stay sharp.";return`<div class="ncc-card" style="margin-top: 10px">
        <div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">Chamfer the edges</div><div class="ncc-row-sub">${qe(V)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${$}" aria-label="Chamfer the edges" data-toggle="chamfer"></button></div>
        ${$?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Width</span><div class="ncc-stepper"><button type="button" data-chamfer="-1" aria-label="Narrower chamfer" ${J<=$i.min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${u(J,r.units==="in"?3:1)}</span><button type="button" data-chamfer="1" aria-label="Wider chamfer" ${J>=$i.max-1e-6?"disabled":""}>+</button></div></div>
        <div class="ncc-seg" role="group" aria-label="Which edges">${Object.entries({all:"All edges",outside:"Outside",inside:"Pockets & holes"}).map(([bt,ct])=>`<button type="button" class="${lt===bt?"sel":""}" data-chamfer-edges="${bt}">${ct}</button>`).join("")}</div>`:""}
      </div>`}function Gt(){let U=!!r.plan.mode3d,$=!!r.plan.did3d;return!U&&!r.plan.analysis.sloped?"":`<div class="ncc-op" style="margin-bottom: 10px">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${Un.finish3d} 16%, transparent); color: ${Un.finish3d}">${tn.finish3d}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">Cut curved faces in 3D</div><div class="ncc-op-sub">${U?$?"Roughed in layers, then a ball end mill follows the surface.":"On, but no end mill is long enough: cut in 2.5D for now.":"Off: sloped and curved faces are left square."}</div></div>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${U}" aria-label="Cut curved faces in 3D" data-toggle="3d"></button>
      </div>`}function ft(){let $=(r.plan?.ops||[]).filter(J=>J.enabled&&J.kind!=="face").map(J=>{let lt=r.focusOp&&r.focusOp!==J.id;return{loops:J.region||(J.centers||[]).map(bt=>Pp(bt)),z:J.kind==="cutout"?J.zTop+.05:Math.max(J.zBottom,0)+.05,color:Un[J.kind],dashed:J.kind==="cutout",opacity:lt?.2:1,top:J.zTop}});o.keepCamera=q===r.part?.positions,o.showPart(r.part,$),q=r.part?.positions,me=null,jt=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function St(U){let $=U.kind==="drill"?["drill"]:U.kind==="face"?["surfacing","flat"]:U.kind==="finish3d"?["ball","flat"]:U.kind==="chamfer"?["vbit","chamfer"]:["flat"],J=r.tools.filter(lt=>$.includes(lt.kind)).sort((lt,V)=>V.diameter-lt.diameter);return J.some(lt=>lt.id===U.tool.id)?J:[U.tool,...J]}function Ut(){let U=r.result,$=U?.plan,J=$?ca($):[],lt=$?$.ops.filter(V=>V.enabled).reduce((V,bt,ct,Lt)=>V+(ct>0&&Lt[ct-1].tool.id!==bt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${Pe()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${$?Math.max(1,Math.round(U.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${J.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${$?lt:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${zt()}</div>
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${qe(Ot())}${U?` \xB7 ${(U.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${U?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let Ot=()=>`${(r.fileName||"part").replace(/\.(step|stp|stl|3mf)$/i,"")}.nc`;function zt(){let U=r.simChecks;return U?U.items.map($=>`<div class="ncc-check"><span class="ncc-ck ${$.state}">${$.state==="bad"?tn.cross:$.state==="info"?"!":tn.check}</span><span>${qe($.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${r.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}</div>`}let it={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null};function Pe(){if(!r.result)return"";let $=r.result.plan.ops.filter(V=>V.enabled&&V.track),J=it.total||1,lt=$[Math.max(0,it.opIndexAt?.(it.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${it.playing?"Pause":"Play"}">${it.playing?tn.pause:tn.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(J)}" aria-valuenow="${Math.round(it.t)}">
          ${$.map(V=>`<i style="width: ${(V.seconds||0)/J*100}%; background: ${Un[V.kind]}"></i>`).join("")}
          <b style="width: ${it.t/J*100}%"></b><em style="left: ${it.t/J*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span data-pb="step">${nt($,lt)}</span><span class="ncc-mono" data-pb="clock">${xc(it.t)} / ${xc(J)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([V,bt])=>`<button type="button" style="padding: 6px 8px" class="${it.speed===V?"sel":""}" data-speed="${V}">${bt}</button>`).join("")}</div>`}function de(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&r.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${r.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let me=null;function ye(){if(me===r.result){he();return}me=r.result,q=null,jt=null,o.onMarker=null,o.onPick=null;let U=r.result.plan,$=U.ops.filter(mt=>mt.enabled&&mt.track),J=ji.cellFor(U.stock,520*520);it.ops=$,it.hm=rf(new ji(U.stock,J)),it.colors=U.ops.map(mt=>new be(Un[mt.kind])),it.stamps=U.ops.map(mt=>Uc(mt.tool,J));let lt=0;for(let mt of $)lt+=mt.track.length/4;it.moves=new Float32Array(lt*4),it.opOf=new Uint16Array(lt),it.cum=new Float64Array(lt);let V=0,bt=0,ct=null,Lt=r.maxRapid||5e3;for(let mt of $){let wt=U.ops.indexOf(mt);for(let At=0;At<mt.track.length;At+=4,V++){if(it.moves.set(mt.track.subarray(At,At+4),V*4),it.opOf[V]=wt,ct){let qt=Math.hypot(mt.track[At]-ct[0],mt.track[At+1]-ct[1],mt.track[At+2]-ct[2]);bt+=qt/(mt.track[At+3]>0?mt.track[At+3]:Lt)*60}ct=[mt.track[At],mt.track[At+1],mt.track[At+2]],it.cum[V]=bt}}it.total=bt,it.opIndexAt=mt=>{let wt=Math.min(lt-1,Se(it.cum,mt));return $.indexOf(U.ops[it.opOf[wt]])},it.t=0,it.i=1,it.cursor=null,it.toolOp=-1,it.snaps=[],o.showStock(it.hm,Bs[U.job.material]||Bs.mdf,r.part);{let mt=it.hm,wt=[mt.x0,mt.y0,mt.bottom],At=[mt.x0+(mt.nx-1)*mt.cell,mt.y0+(mt.ny-1)*mt.cell,mt.top];for(let qt of $){let Ie=qt.tool.diameter/2;for(let Te=0;Te<qt.track.length;Te+=4)qt.track[Te+3]!==0&&(wt[0]=Math.min(wt[0],qt.track[Te]-Ie),At[0]=Math.max(At[0],qt.track[Te]+Ie),wt[1]=Math.min(wt[1],qt.track[Te+1]-Ie),At[1]=Math.max(At[1],qt.track[Te+1]+Ie))}o.frame(wt,At)}o.showPaths($),r.showPaths=r.showPaths??!1,he(),Zt(0),it.speed=5,it.rate=Math.max(1,it.total/600/5),o.onFrame=Be,Ct(U),it.playing=!1,dt()}function he(){o.paths&&(o.paths.visible=!!r.showPaths),o.partGhost&&(o.partGhost.visible=!!r.showPart)}function Se(U,$){let J=0,lt=U.length;for(;J<lt;){let V=J+lt>>1;U[V]<$?J=V+1:lt=V}return J}let Ne=U=>({x:it.moves[U*4],y:it.moves[U*4+1],z:it.moves[U*4+2],r:it.moves[U*4+3]===0});function oe(U){let $=it.hm,J=it.cum.length,lt=1/0,V=-1,bt=(ct,Lt,mt)=>{let wt=r.result.plan.ops[mt].tool.diameter/2/$.cell+3,At=Math.floor((Math.min(ct.y,Lt.y)-$.y0)/$.cell-wt),qt=Math.ceil((Math.max(ct.y,Lt.y)-$.y0)/$.cell+wt);lt=Math.min(lt,Math.max(0,At)),V=Math.max(V,Math.min($.ny-1,qt))};for(;it.i<J&&it.cum[it.i]<=U;){it.opOf[it.i]!==it.opOf[it.i-1]&&!it.cursor&&X();let ct=it.cursor||Ne(it.i-1),Lt=Ne(it.i),mt=it.opOf[it.i];Lt.r||(Bc($,r.result.plan.ops[mt].tool,ct,Lt,mt),bt(ct,Lt,mt)),it.cursor=null,it.i++}if(it.i<J&&U>it.cum[it.i-1]){let ct=it.cursor||Ne(it.i-1),Lt=Ne(it.i),mt=it.opOf[it.i],wt=it.cum[it.i-1],At=(U-wt)/(it.cum[it.i]-wt||1),qt=Ne(it.i-1),Ie={x:qt.x+(Lt.x-qt.x)*At,y:qt.y+(Lt.y-qt.y)*At,z:qt.z+(Lt.z-qt.z)*At};Lt.r||(Bc($,r.result.plan.ops[mt].tool,ct,Ie,mt),bt(ct,Ie,mt)),it.cursor=Ie}return[lt,V]}function Zt(U){let $=it.cum.length;if(!$)return;let J=Math.min($-1,Se(it.cum,U)),lt=it.opOf[J];if(lt!==it.toolOp){let bt=r.result.plan.ops[lt];o.setTool(bt.tool,bt.zTop-bt.zBottom),it.toolOp=lt}let V=it.cursor||Ne(Math.max(0,it.i-1));o.moveTool(V.x,V.y,V.z)}let pe=0,rt=0;function Be(U){let $=pe?Math.min(.1,(U-pe)/1e3):0;if(pe=U,!it.playing||!it.cum)return;it.t=Math.min(it.total,it.t+$*it.speed*it.rate);let[J,lt]=oe(it.t);o.refreshStock(J,lt,it.colors),Zt(it.t),it.t>=it.total?(it.playing=!1,dt()):U-rt>200&&(rt=U,dt())}let Ee=["h","op","sx","sy","wx","wy","gap","deep"];function X(){it.snaps.some(U=>U.i===it.i)||it.snaps.push({i:it.i,data:Ee.map(U=>it.hm[U].slice())})}function P(U){if(U=Math.max(0,Math.min(it.total,U)),U<it.t){let $=it.snaps.filter(J=>it.cum[J.i-1]<=U).sort((J,lt)=>lt.i-J.i)[0];$?(Ee.forEach((J,lt)=>it.hm[J].set($.data[lt])),it.i=$.i):(it.hm.h.fill(it.hm.top),it.hm.op.fill(0),it.hm.sx.fill(0),it.hm.sy.fill(0),it.hm.wx.fill(0),it.hm.wy.fill(0),it.hm.gap.fill(1/0),it.hm.deep.fill(-1/0),it.i=1),it.cursor=null,oe(U),o.refreshStock(0,it.hm.ny-1,it.colors)}else{let[$,J]=oe(U);o.refreshStock($,J,it.colors)}it.t=U,Zt(U),dt()}let nt=(U,$)=>$?`Step ${U.indexOf($)+1} of ${U.length} \xB7 ${qe($.label)} \xB7 T${br($.tool,r.numbering)}`:"";function dt(){let U=n.querySelector("[data-playbar]");if(!U)return;if(U._result!==r.result||U._total!==it.total||!U.querySelector("[data-scrub]")){U.innerHTML=Pe(),U._result=r.result,U._total=it.total;return}let $=r.result.plan.ops.filter(wt=>wt.enabled&&wt.track),J=it.total||1,lt=`${it.t/J*100}%`,V=$[Math.max(0,it.opIndexAt?.(it.t)??0)],bt=U.querySelector("[data-scrub]");bt.querySelector("b").style.width=lt,bt.querySelector("em").style.left=lt,bt.setAttribute("aria-valuenow",String(Math.round(it.t)));let ct=(wt,At)=>{wt&&wt.innerHTML!==At&&(wt.innerHTML=At)};ct(U.querySelector('[data-pb="step"]'),nt($,V)),ct(U.querySelector('[data-pb="clock"]'),`${xc(it.t)} / ${xc(J)}`);let Lt=U.querySelector('[data-act="play"]'),mt=it.playing?"Pause":"Play";Lt.getAttribute("aria-label")!==mt&&(Lt.setAttribute("aria-label",mt),Lt.innerHTML=it.playing?tn.pause:tn.play);for(let wt of U.querySelectorAll("[data-speed]"))wt.classList.toggle("sel",+wt.dataset.speed===it.speed)}function Ct(U){setTimeout(()=>{if(r.result?.plan!==U)return;let $=U.ops.map(ct=>({...ct,moves:ct.track?Array.from({length:ct.track.length/4},(Lt,mt)=>({x:ct.track[mt*4],y:ct.track[mt*4+1],z:ct.track[mt*4+2],r:ct.track[mt*4+3]===0,f:ct.track[mt*4+3]})):null})),{collisions:J}=sf({...U,ops:$},ji.cellFor(U.stock,300*300)),lt=[];if(lt.push(J.length?{state:"bad",text:`${J.length} fast move${J.length>1?"s go":" goes"} into the material (${[...new Set(J.map(ct=>U.ops.find(Lt=>Lt.id===ct.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),r.travel){let ct=U.stock.width<=r.travel.x&&U.stock.depth<=r.travel.y;lt.push(ct?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${c(r.travel.x)} \xD7 ${u(r.travel.y)}).`})}let V=ca(U);lt.push(V.every(ct=>ct.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),U.ops.find(ct=>ct.kind==="cutout"&&ct.enabled)&&lt.push({state:"ok",text:`The cut-out goes ${u(U.job.throughDepth,r.units==="in"?3:1)} into the spoilboard${U.job.tabs.enabled?`, with ${U.job.tabs.count} tabs`:""}`}),U.warnings.some(ct=>ct.kind==="undercut")&&lt.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side. Pins (the Spoilboard Toolbox plugin can set them up) put it back in the same place."}),r.simChecks={ok:!lt.some(ct=>ct.state==="bad"),items:lt},R()},50)}let Wt=U=>{if(!(U<1||U>4||U>r.maxStep+1)){if(U===4&&r.step!==4){it.playing=!1,r.step=4,r.maxStep=4,R(),L(!0);return}r.step=U,r.maxStep=Math.max(r.maxStep,U),U!==4&&(it.playing=!1),R()}},kt=()=>{r.maxStep=Math.min(r.maxStep,Math.max(r.step,3)),r.result=null,L(!1)};n.addEventListener("click",U=>{let $=U.target.closest("[data-focus]");if($&&!U.target.closest("button, select")){r.focusOp=r.focusOp===$.dataset.focus?null:$.dataset.focus,R();return}let J=U.target.closest("button, [data-scrub]");if(!J||J.disabled)return;let lt=J.dataset;if(lt.go)return Wt(+lt.go);if(lt.up)return w(lt.up).catch(V=>{r.error=V.message,R()});if(lt.material)return r.job.material=lt.material,Object.assign(r.job.tabs,Fi(lt.material)),kt();if(lt.tabsize){let V=Et(),bt=yt();return r.job.tabs[lt.tabsize]=Math.max(bt.min,Math.min(bt.max,Math.round((V[lt.tabsize]+ +lt.by*bt.step)/bt.grid)*bt.grid)),kt()}if(lt.zero)return r.job.zero.xy=lt.zero,kt();if(lt.z)return r.job.zero.z=lt.z,kt();if(lt.finish)return r.job.finish=lt.finish,kt();if(lt.tabs)return r.job.tabs.count=Math.max(1,Math.min(12,r.job.tabs.count+ +lt.tabs)),kt();if(lt.toggle==="fit"){let V=r.plan?.stock;return r.job.stock.fit=!r.job.stock.fit,!r.job.stock.fit&&V&&Object.assign(r.job.stock,{width:V.width,depth:V.depth,thickness:V.thickness}),kt()}if(lt.toggle==="lock")return r.lock=!r.lock,r.lock&&!r.scale.every(V=>V===r.scale[0])?_([r.scale[0],r.scale[0],r.scale[0]]):(A(),R());if(lt.scale==="reset")return _([1,1,1]);if(lt.scale==="inch")return _([kn.INCH,kn.INCH,kn.INCH]);if(lt.toggle==="tabs")return r.job.tabs.enabled=!r.job.tabs.enabled,kt();if(lt.toggle==="chamfer"){let V=r.job.chamfer||{};return r.job.chamfer=V.size>0?{...V,last:V.size,size:0}:{edges:"all",...V,size:V.last||$i.size},kt()}if(lt.chamfer){let V=r.job.chamfer;return V.size=Math.max($i.min,Math.min($i.max,Math.round((V.size+ +lt.chamfer*$i.step)/$i.step)*$i.step)),V.last=V.size,kt()}if(lt.chamferEdges)return r.job.chamfer.edges=lt.chamferEdges,kt();if(lt.toggle==="3d")return r.job.surface3d=!r.plan?.mode3d,r.job.disabled={},r.job.toolOverride={},kt();if(lt.op)return r.job.disabled[lt.op]=!r.job.disabled[lt.op],kt();if(lt.speed)return it.speed=+lt.speed,dt();if(lt.act==="play")return it.t>=it.total&&P(0),it.playing=!it.playing,pe=0,dt();if(lt.act==="paths"){r.showPaths=!r.showPaths,he(),J.classList.toggle("on",r.showPaths);return}if(lt.act==="ghost"){r.showPart=!r.showPart,he(),J.classList.toggle("on",r.showPart);return}if(lt.act==="close")return $t();if(lt.act==="load")return Dt(J);if(lt.act==="save")return Yt(J)}),n.addEventListener("pointerdown",U=>{if(!U.target.closest("[data-scrub]")||!it.cum)return;let J=it.playing;it.playing=!1;let lt=Lt=>{let mt=n.querySelector("[data-scrub]").getBoundingClientRect();mt.width>0&&P((Lt-mt.left)/mt.width*it.total)};lt(U.clientX);let V=null,bt=Lt=>{V===null&&requestAnimationFrame(()=>{let mt=V;V=null,lt(mt)}),V=Lt.clientX},ct=()=>{window.removeEventListener("pointermove",bt),window.removeEventListener("pointerup",ct),it.playing=J&&it.t<it.total,pe=0,dt()};window.addEventListener("pointermove",bt),window.addEventListener("pointerup",ct)}),n.addEventListener("change",U=>{let $=U.target;if($.matches("[data-file]"))return g($.files[0]);if($.dataset.tool)return r.job.toolOverride[$.dataset.tool]=+$.value||$.value,kt();if($.dataset.size){let J=+$.dataset.size,lt=parseFloat(String($.value).replace(",","."));if(!(Number.isFinite(lt)&&lt>0&&r.fileSize[J]>0))return R();let V=kn.toMm(lt,r.units)/r.fileSize[J];return _(r.lock?[V,V,V]:r.scale.map((bt,ct)=>ct===J?V:bt))}if($.dataset.stock){let J=parseFloat(String($.value).replace(",","."));return Number.isFinite(J)&&J>0&&(r.job.stock[$.dataset.stock]=kn.toMm(J,r.units)),kt()}}),n.addEventListener("dragover",U=>{let $=U.target.closest("[data-drop]");$&&(U.preventDefault(),$.classList.add("over"))}),n.addEventListener("dragleave",U=>{let $=U.target.closest("[data-drop]");$&&$.classList.remove("over")}),n.addEventListener("drop",U=>{U.target.closest("[data-drop]")&&(U.preventDefault(),g(U.dataTransfer.files[0]))});function xt(U){r.toast=U,R(),setTimeout(()=>{r.toast===U&&(r.toast="",R())},2600)}async function Dt(U){U.disabled=!0;try{let $=await i.post("/api/gcode-files/load-temp",{filename:Ot(),content:r.result.gcode});if(!$.ok)throw new Error(`ncSender said ${$.status}`);$t()}catch($){U.disabled=!1,xt(`Couldn\u2019t load the program: ${$.message}`)}}async function Yt(U){U.disabled=!0;try{let $=await ne(Ot()),J=await i.post("/api/gcode-files/file/save",{path:$,content:r.result.gcode});if(!J.ok)throw new Error(`save failed (${J.status})`);xt(`Saved to File Manager: ${$}`)}catch($){xt(`Couldn\u2019t save: ${$.message}`)}U.disabled=!1}async function ne(U){let $=U.replace(/\.nc$/,""),J=new Set,lt=V=>{for(let bt of V||[])bt.type==="folder"?lt(bt.children):J.add(bt.path)};lt((await i.get("/api/gcode-files"))?.tree);for(let V=1;V<1e3;V++){let bt=`ncCAM/${V<2?U:`${$} (${V}).nc`}`;if(!J.has(bt))return bt}throw new Error("too many saved copies")}function $t(){it.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}R(),window.__nccam={S:r,PLAY:it,viewer:o,seek:U=>P(U)}}function Pp(n,t=48){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}var _b,vb,qe,xc,sn,$i,tn,yb,Rp=gn(()=>{gc();$c();wp();Cp();_b=["Model","Stock & Zero","Operations","Preview & Load"],vb=[["top","Top"],["bottom","Bottom"],["front","Front"],["back","Back"],["left","Left"],["right","Right"]],qe=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),xc=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},sn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,$i={size:1,min:.5,max:6,step:.5},tn={close:sn('<path d="M6 6l12 12M18 6L6 18"/>'),next:sn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:sn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:sn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:sn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:sn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:sn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:sn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:sn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:sn('<path d="M3 9h18M3 15h18"/>'),pocket:sn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:sn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:sn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:sn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:sn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:sn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>'),rough3d:sn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/>'),finish3d:sn('<path d="M3 18c3 0 4-9 9-9s6 9 9 9"/>'),chamfer:sn('<path d="M4 20V9l5-5h11v16z"/><path d="M9 4v5H4" stroke-dasharray="2 2"/>'),rest3d:sn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/><circle cx="12" cy="17" r="1.5"/>')},yb={top:'<path d="M12 3l9 5-9 5-9-5z" fill="currentColor" fill-opacity=".35"/><path d="M3 8v8l9 5 9-5V8"/>',bottom:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M3 16l9-5 9 5" stroke-dasharray="2 2"/>',front:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".35"/><path d="M21 8v8l-9 5"/>',back:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 3v8" stroke-dasharray="2 2"/>',left:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".2"/><path d="M21 8v8l-9 5"/>',right:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5"/><path d="M21 8v8l-9 5V13z" fill="currentColor" fill-opacity=".35"/>'}});var wf=Uu(zu(),1);$c();var f0={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.02,angularDeflection:.1};function qc(){let n=null,t=null,e=null,i=null,r=null,o=c=>(e=Ju(t,c),{solids:e.solids,size:qr(e).size,fileSize:qr(t).size,mesh:t.mesh,...ju(e)}),l={async init({wasmBinary:c}){return r=c,!0},async load({bytes:c,name:u="",scale:d=[1,1,1]}){if(t=await ef(c,u),t?t.mesh=/\.stl$/i.test(u)?"stl":"3mf":t=Ku(new Uint8Array(c)),!t){n||=await(0,wf.default)({wasmBinary:r});let g=n.ReadStepFile(new Uint8Array(c),f0);if(!g.success||!g.meshes?.length)throw new Error("This file has no solid ncCAM can read. Export it again as STEP (AP214 or AP242), STL or 3MF.");t=Zu(g)}return o(d)},async rescale({scale:c}){return o(c)},async orient({up:c}){i=na(e,c);let u=xr(i);return{positions:Float32Array.from(i.positions),indices:i.indices.slice(),faces:i.faces,analysis:u}},async tilt({normal:c}){i=na(i,c);let u=xr(i);return{positions:Float32Array.from(i.positions),indices:i.indices.slice(),faces:i.faces,analysis:u}},async turn({how:c}){i=Nc(i,c==="over"?[1,0,0,0,-1,0,0,0,-1]:[-1,0,0,0,-1,0,0,0,1]);let u=xr(i);return{positions:Float32Array.from(i.positions),indices:i.indices.slice(),faces:i.faces,analysis:u}},async plan({tools:c,job:u,limits:d,paths:g,gcodeOptions:v,timing:_}){let b=ff(i,c,u,d);g&&vf(b);let w=g?Mf(b,_):0,E=g?xf(b,v):"";for(let M of b.ops)delete M.surface;for(let M of b.ops){if(!M.moves)continue;let y=new Float32Array(M.moves.length*4);M.moves.forEach((L,z)=>{y[z*4]=L.x,y[z*4+1]=L.y,y[z*4+2]=L.z,y[z*4+3]=L.r?0:L.f}),M.track=y,delete M.moves}return{plan:b,gcode:E,seconds:w}}};return async function(u){let d=l[u.type];if(!d)throw new Error(`unknown request ${u.type}`);return d(u)}}var Lp="0.1.4-mw04i7ly";if(typeof document>"u"){let n=qc();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e&&e.positions?[e.positions.buffer,e.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCam=window.NcCam||{};n.build!==Lp&&n.engine&&(n.engine.then(i=>i.worker?.terminate(),()=>{}),n.engine=null),n.build=Lp,n.mount=async(i,r)=>{let{mountApp:o}=await Promise.resolve().then(()=>(Rp(),Ip));try{o(i,r,await t(r))}catch(l){i.textContent=`ncCAM could not start: ${l.message||l}`}};let t=i=>n.engine||=e(i);async function e(i){let r=await fetch(i.file("lib/occt-import-js.wasm")).then(c=>{if(!c.ok)throw new Error(`lib/occt-import-js.wasm: ${c.status}`);return c.arrayBuffer()}),o=null;try{o=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{o=null}if(o){let c=0,u=new Map;o.onmessage=({data:v})=>{let _=u.get(v.id);_&&(u.delete(v.id),v.ok?_.resolve(v.result):_.reject(new Error(v.error)))};let d=(v,_={},b=[])=>new Promise((w,E)=>{let M=++c;u.set(M,{resolve:w,reject:E}),o.postMessage({..._,id:M,type:v},b)});if(await Promise.race([d("init",{wasmBinary:r}).then(()=>!0),new Promise(v=>setTimeout(()=>v(!1),5e3))]))return d.worker=o,d;o.terminate()}let l=qc();return await l({type:"init",wasmBinary:r}),(c,u={})=>l({...u,type:c})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
