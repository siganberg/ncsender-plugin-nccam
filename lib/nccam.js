(()=>{var rg=Object.create;var Nc=Object.defineProperty;var sg=Object.getOwnPropertyDescriptor;var og=Object.getOwnPropertyNames;var ag=Object.getPrototypeOf,lg=Object.prototype.hasOwnProperty;var Dc=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var _n=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var Bu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},ku=(n,t)=>{for(var e in t)Nc(n,e,{get:t[e],enumerable:!0})},cg=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of og(t))!lg.call(n,r)&&r!==e&&Nc(n,r,{get:()=>t[r],enumerable:!(i=sg(t,r))||i.enumerable});return n};var zu=(n,t,e)=>(e=n!=null?rg(ag(n)):{},cg(t||!n||!n.__esModule?Nc(e,"default",{value:n,enumerable:!0}):e,n));var Gu=Bu((Hu,Oc)=>{var Vu=(()=>{var n=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(t={}){var e,i=t,r,o,l=new Promise((f,m)=>{r=f,o=m}),h=typeof window=="object",u=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",g=Object.assign({},i),v=[],_="./this.program",x=(f,m)=>{throw m},w="";function E(f){return i.locateFile?i.locateFile(f,w):w+f}var b,y;if(d){var L=Dc("fs"),V=Dc("path");w=__dirname+"/",y=f=>{f=re(f)?new URL(f):V.normalize(f);var m=L.readFileSync(f);return m},b=(f,m=!0)=>(f=re(f)?new URL(f):V.normalize(f),new Promise((S,T)=>{L.readFile(f,m?void 0:"utf8",(F,W)=>{F?T(F):S(m?W.buffer:W)})})),!i.thisProgram&&process.argv.length>1&&(_=process.argv[1].replace(/\\/g,"/")),v=process.argv.slice(2),x=(f,m)=>{throw process.exitCode=f,m}}else(h||u)&&(u?w=self.location.href:typeof document<"u"&&document.currentScript&&(w=document.currentScript.src),n&&(w=n),w.startsWith("blob:")?w="":w=w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1),u&&(y=f=>{var m=new XMLHttpRequest;return m.open("GET",f,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),b=f=>re(f)?new Promise((m,S)=>{var T=new XMLHttpRequest;T.open("GET",f,!0),T.responseType="arraybuffer",T.onload=()=>{if(T.status==200||T.status==0&&T.response){m(T.response);return}S(T.status)},T.onerror=S,T.send(null)}):fetch(f,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(new Error(m.status+" : "+m.url))));var A=i.print||console.log.bind(console),R=i.printErr||console.error.bind(console);Object.assign(i,g),g=null,i.arguments&&(v=i.arguments),i.thisProgram&&(_=i.thisProgram);var D=i.wasmBinary,H,C=!1,k;function G(f,m){f||zt(m)}var Y,Z,J,j,K,lt,gt,Et;function yt(){var f=H.buffer;i.HEAP8=Y=new Int8Array(f),i.HEAP16=J=new Int16Array(f),i.HEAPU8=Z=new Uint8Array(f),i.HEAPU16=j=new Uint16Array(f),i.HEAP32=K=new Int32Array(f),i.HEAPU32=lt=new Uint32Array(f),i.HEAPF32=gt=new Float32Array(f),i.HEAPF64=Et=new Float64Array(f)}var It=[],Ot=[],jt=[],ne=!1;function Te(){var f=i.preRun;f&&(typeof f=="function"&&(f=[f]),f.forEach(Pt)),Tt(It)}function Me(){ne=!0,!i.noFSInit&&!N.initialized&&N.init(),N.ignorePermissions=!1,ft.init(),Tt(Ot)}function Ae(){var f=i.postRun;f&&(typeof f=="function"&&(f=[f]),f.forEach(ie)),Tt(jt)}function Pt(f){It.unshift(f)}function Ut(f){Ot.unshift(f)}function ie(f){jt.unshift(f)}var ue=0,Zt=null,ut=null;function Ve(f){return f}function at(f){ue++,i.monitorRunDependencies?.(ue)}function Nt(f){if(ue--,i.monitorRunDependencies?.(ue),ue==0&&(Zt!==null&&(clearInterval(Zt),Zt=null),ut)){var m=ut;ut=null,m()}}function zt(f){i.onAbort?.(f),f="Aborted("+f+")",R(f),C=!0,f+=". Build with -sASSERTIONS for more info.",ne&&Ou();var m=new WebAssembly.RuntimeError(f);throw o(m),m}var Bt="data:application/octet-stream;base64,",Vt=f=>f.startsWith(Bt),re=f=>f.startsWith("file://");function he(){var f="occt-import-js.wasm";return Vt(f)?f:E(f)}var Yt;function ae(f){if(f==Yt&&D)return new Uint8Array(D);if(y)return y(f);throw"both async and sync fetching of the wasm failed"}function it(f){return D?Promise.resolve().then(()=>ae(f)):b(f).then(m=>new Uint8Array(m),()=>ae(f))}function be(f,m,S){return it(f).then(T=>WebAssembly.instantiate(T,m)).then(S,T=>{R(`failed to asynchronously prepare wasm: ${T}`),zt(T)})}function oe(f,m,S,T){return!f&&typeof WebAssembly.instantiateStreaming=="function"&&!Vt(m)&&!re(m)&&!d&&typeof fetch=="function"?fetch(m,{credentials:"same-origin"}).then(F=>{var W=WebAssembly.instantiateStreaming(F,S);return W.then(T,function(tt){return R(`wasm streaming compile failed: ${tt}`),R("falling back to ArrayBuffer instantiation"),be(m,S,T)})}):be(m,S,T)}function X(){return{a:Jm}}function P(){var f=X();function m(T,F){return fn=T.exports,H=fn._,yt(),Qo=fn.ba,Ut(fn.$),Nt("wasm-instantiate"),fn}at("wasm-instantiate");function S(T){m(T.instance)}if(i.instantiateWasm)try{return i.instantiateWasm(f,m)}catch(T){R(`Module.instantiateWasm callback failed with error: ${T}`),o(T)}return Yt??=he(),oe(D,Yt,f,S).catch(o),{}}var nt,ct;function St(f){this.name="ExitStatus",this.message=`Program terminated with exit(${f})`,this.status=f}var Tt=f=>{f.forEach(m=>m(i))},Ft=i.noExitRuntime||!0,mt={isAbs:f=>f.charAt(0)==="/",splitPath:f=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return m.exec(f).slice(1)},normalizeArray:(f,m)=>{for(var S=0,T=f.length-1;T>=0;T--){var F=f[T];F==="."?f.splice(T,1):F===".."?(f.splice(T,1),S++):S&&(f.splice(T,1),S--)}if(m)for(;S;S--)f.unshift("..");return f},normalize:f=>{var m=mt.isAbs(f),S=f.substr(-1)==="/";return f=mt.normalizeArray(f.split("/").filter(T=>!!T),!m).join("/"),!f&&!m&&(f="."),f&&S&&(f+="/"),(m?"/":"")+f},dirname:f=>{var m=mt.splitPath(f),S=m[0],T=m[1];return!S&&!T?".":(T&&(T=T.substr(0,T.length-1)),S+T)},basename:f=>{if(f==="/")return"/";f=mt.normalize(f),f=f.replace(/\/$/,"");var m=f.lastIndexOf("/");return m===-1?f:f.substr(m+1)},join:(...f)=>mt.normalize(f.join("/")),join2:(f,m)=>mt.normalize(f+"/"+m)},Ct=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return T=>crypto.getRandomValues(T);if(d)try{var f=Dc("crypto"),m=f.randomFillSync;if(m)return T=>f.randomFillSync(T);var S=f.randomBytes;return T=>(T.set(S(T.byteLength)),T)}catch{}zt("initRandomDevice")},Gt=f=>(Gt=Ct())(f),qt={resolve:(...f)=>{for(var m="",S=!1,T=f.length-1;T>=-1&&!S;T--){var F=T>=0?f[T]:N.cwd();if(typeof F!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!F)return"";m=F+"/"+m,S=mt.isAbs(F)}return m=mt.normalizeArray(m.split("/").filter(W=>!!W),!S).join("/"),(S?"/":"")+m||"."},relative:(f,m)=>{f=qt.resolve(f).substr(1),m=qt.resolve(m).substr(1);function S(Ht){for(var te=0;te<Ht.length&&Ht[te]==="";te++);for(var ce=Ht.length-1;ce>=0&&Ht[ce]==="";ce--);return te>ce?[]:Ht.slice(te,ce-te+1)}for(var T=S(f.split("/")),F=S(m.split("/")),W=Math.min(T.length,F.length),tt=W,ot=0;ot<W;ot++)if(T[ot]!==F[ot]){tt=ot;break}for(var At=[],ot=tt;ot<T.length;ot++)At.push("..");return At=At.concat(F.slice(tt)),At.join("/")}},$t=typeof TextDecoder<"u"?new TextDecoder:void 0,O=(f,m=0,S=NaN)=>{for(var T=m+S,F=m;f[F]&&!(F>=T);)++F;if(F-m>16&&f.buffer&&$t)return $t.decode(f.subarray(m,F));for(var W="";m<F;){var tt=f[m++];if(!(tt&128)){W+=String.fromCharCode(tt);continue}var ot=f[m++]&63;if((tt&224)==192){W+=String.fromCharCode((tt&31)<<6|ot);continue}var At=f[m++]&63;if((tt&240)==224?tt=(tt&15)<<12|ot<<6|At:tt=(tt&7)<<18|ot<<12|At<<6|f[m++]&63,tt<65536)W+=String.fromCharCode(tt);else{var Ht=tt-65536;W+=String.fromCharCode(55296|Ht>>10,56320|Ht&1023)}}return W},$=[],q=f=>{for(var m=0,S=0;S<f.length;++S){var T=f.charCodeAt(S);T<=127?m++:T<=2047?m+=2:T>=55296&&T<=57343?(m+=4,++S):m+=3}return m},rt=(f,m,S,T)=>{if(!(T>0))return 0;for(var F=S,W=S+T-1,tt=0;tt<f.length;++tt){var ot=f.charCodeAt(tt);if(ot>=55296&&ot<=57343){var At=f.charCodeAt(++tt);ot=65536+((ot&1023)<<10)|At&1023}if(ot<=127){if(S>=W)break;m[S++]=ot}else if(ot<=2047){if(S+1>=W)break;m[S++]=192|ot>>6,m[S++]=128|ot&63}else if(ot<=65535){if(S+2>=W)break;m[S++]=224|ot>>12,m[S++]=128|ot>>6&63,m[S++]=128|ot&63}else{if(S+3>=W)break;m[S++]=240|ot>>18,m[S++]=128|ot>>12&63,m[S++]=128|ot>>6&63,m[S++]=128|ot&63}}return m[S]=0,S-F};function z(f,m,S){var T=S>0?S:q(f)+1,F=new Array(T),W=rt(f,F,0,F.length);return m&&(F.length=W),F}var wt=()=>{if(!$.length){var f=null;if(d){var m=256,S=Buffer.alloc(m),T=0,F=process.stdin.fd;try{T=L.readSync(F,S,0,m)}catch(W){if(W.toString().includes("EOF"))T=0;else throw W}T>0&&(f=S.slice(0,T).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(f=window.prompt("Input: "),f!==null&&(f+=`
`));if(!f)return null;$=z(f,!0)}return $.shift()},ft={ttys:[],init(){},shutdown(){},register(f,m){ft.ttys[f]={input:[],output:[],ops:m},N.registerDevice(f,ft.stream_ops)},stream_ops:{open(f){var m=ft.ttys[f.node.rdev];if(!m)throw new N.ErrnoError(43);f.tty=m,f.seekable=!1},close(f){f.tty.ops.fsync(f.tty)},fsync(f){f.tty.ops.fsync(f.tty)},read(f,m,S,T,F){if(!f.tty||!f.tty.ops.get_char)throw new N.ErrnoError(60);for(var W=0,tt=0;tt<T;tt++){var ot;try{ot=f.tty.ops.get_char(f.tty)}catch{throw new N.ErrnoError(29)}if(ot===void 0&&W===0)throw new N.ErrnoError(6);if(ot==null)break;W++,m[S+tt]=ot}return W&&(f.node.timestamp=Date.now()),W},write(f,m,S,T,F){if(!f.tty||!f.tty.ops.put_char)throw new N.ErrnoError(60);try{for(var W=0;W<T;W++)f.tty.ops.put_char(f.tty,m[S+W])}catch{throw new N.ErrnoError(29)}return T&&(f.node.timestamp=Date.now()),W}},default_tty_ops:{get_char(f){return wt()},put_char(f,m){m===null||m===10?(A(O(f.output)),f.output=[]):m!=0&&f.output.push(m)},fsync(f){f.output&&f.output.length>0&&(A(O(f.output)),f.output=[])},ioctl_tcgets(f){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(f,m,S){return 0},ioctl_tiocgwinsz(f){return[24,80]}},default_tty1_ops:{put_char(f,m){m===null||m===10?(R(O(f.output)),f.output=[]):m!=0&&f.output.push(m)},fsync(f){f.output&&f.output.length>0&&(R(O(f.output)),f.output=[])}}},Rt=(f,m)=>{Z.fill(0,f,f+m)},pt=(f,m)=>Math.ceil(f/m)*m,Mt=f=>{f=pt(f,65536);var m=Du(65536,f);return m&&Rt(m,f),m},bt={ops_table:null,mount(f){return bt.createNode(null,"/",16895,0)},createNode(f,m,S,T){if(N.isBlkdev(S)||N.isFIFO(S))throw new N.ErrnoError(63);bt.ops_table||={dir:{node:{getattr:bt.node_ops.getattr,setattr:bt.node_ops.setattr,lookup:bt.node_ops.lookup,mknod:bt.node_ops.mknod,rename:bt.node_ops.rename,unlink:bt.node_ops.unlink,rmdir:bt.node_ops.rmdir,readdir:bt.node_ops.readdir,symlink:bt.node_ops.symlink},stream:{llseek:bt.stream_ops.llseek}},file:{node:{getattr:bt.node_ops.getattr,setattr:bt.node_ops.setattr},stream:{llseek:bt.stream_ops.llseek,read:bt.stream_ops.read,write:bt.stream_ops.write,allocate:bt.stream_ops.allocate,mmap:bt.stream_ops.mmap,msync:bt.stream_ops.msync}},link:{node:{getattr:bt.node_ops.getattr,setattr:bt.node_ops.setattr,readlink:bt.node_ops.readlink},stream:{}},chrdev:{node:{getattr:bt.node_ops.getattr,setattr:bt.node_ops.setattr},stream:N.chrdev_stream_ops}};var F=N.createNode(f,m,S,T);return N.isDir(F.mode)?(F.node_ops=bt.ops_table.dir.node,F.stream_ops=bt.ops_table.dir.stream,F.contents={}):N.isFile(F.mode)?(F.node_ops=bt.ops_table.file.node,F.stream_ops=bt.ops_table.file.stream,F.usedBytes=0,F.contents=null):N.isLink(F.mode)?(F.node_ops=bt.ops_table.link.node,F.stream_ops=bt.ops_table.link.stream):N.isChrdev(F.mode)&&(F.node_ops=bt.ops_table.chrdev.node,F.stream_ops=bt.ops_table.chrdev.stream),F.timestamp=Date.now(),f&&(f.contents[m]=F,f.timestamp=F.timestamp),F},getFileDataAsTypedArray(f){return f.contents?f.contents.subarray?f.contents.subarray(0,f.usedBytes):new Uint8Array(f.contents):new Uint8Array(0)},expandFileStorage(f,m){var S=f.contents?f.contents.length:0;if(!(S>=m)){var T=1024*1024;m=Math.max(m,S*(S<T?2:1.125)>>>0),S!=0&&(m=Math.max(m,256));var F=f.contents;f.contents=new Uint8Array(m),f.usedBytes>0&&f.contents.set(F.subarray(0,f.usedBytes),0)}},resizeFileStorage(f,m){if(f.usedBytes!=m)if(m==0)f.contents=null,f.usedBytes=0;else{var S=f.contents;f.contents=new Uint8Array(m),S&&f.contents.set(S.subarray(0,Math.min(m,f.usedBytes))),f.usedBytes=m}},node_ops:{getattr(f){var m={};return m.dev=N.isChrdev(f.mode)?f.id:1,m.ino=f.id,m.mode=f.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=f.rdev,N.isDir(f.mode)?m.size=4096:N.isFile(f.mode)?m.size=f.usedBytes:N.isLink(f.mode)?m.size=f.link.length:m.size=0,m.atime=new Date(f.timestamp),m.mtime=new Date(f.timestamp),m.ctime=new Date(f.timestamp),m.blksize=4096,m.blocks=Math.ceil(m.size/m.blksize),m},setattr(f,m){m.mode!==void 0&&(f.mode=m.mode),m.timestamp!==void 0&&(f.timestamp=m.timestamp),m.size!==void 0&&bt.resizeFileStorage(f,m.size)},lookup(f,m){throw N.genericErrors[44]},mknod(f,m,S,T){return bt.createNode(f,m,S,T)},rename(f,m,S){if(N.isDir(f.mode)){var T;try{T=N.lookupNode(m,S)}catch{}if(T)for(var F in T.contents)throw new N.ErrnoError(55)}delete f.parent.contents[f.name],f.parent.timestamp=Date.now(),f.name=S,m.contents[S]=f,m.timestamp=f.parent.timestamp},unlink(f,m){delete f.contents[m],f.timestamp=Date.now()},rmdir(f,m){var S=N.lookupNode(f,m);for(var T in S.contents)throw new N.ErrnoError(55);delete f.contents[m],f.timestamp=Date.now()},readdir(f){var m=[".",".."];for(var S of Object.keys(f.contents))m.push(S);return m},symlink(f,m,S){var T=bt.createNode(f,m,41471,0);return T.link=S,T},readlink(f){if(!N.isLink(f.mode))throw new N.ErrnoError(28);return f.link}},stream_ops:{read(f,m,S,T,F){var W=f.node.contents;if(F>=f.node.usedBytes)return 0;var tt=Math.min(f.node.usedBytes-F,T);if(tt>8&&W.subarray)m.set(W.subarray(F,F+tt),S);else for(var ot=0;ot<tt;ot++)m[S+ot]=W[F+ot];return tt},write(f,m,S,T,F,W){if(m.buffer===Y.buffer&&(W=!1),!T)return 0;var tt=f.node;if(tt.timestamp=Date.now(),m.subarray&&(!tt.contents||tt.contents.subarray)){if(W)return tt.contents=m.subarray(S,S+T),tt.usedBytes=T,T;if(tt.usedBytes===0&&F===0)return tt.contents=m.slice(S,S+T),tt.usedBytes=T,T;if(F+T<=tt.usedBytes)return tt.contents.set(m.subarray(S,S+T),F),T}if(bt.expandFileStorage(tt,F+T),tt.contents.subarray&&m.subarray)tt.contents.set(m.subarray(S,S+T),F);else for(var ot=0;ot<T;ot++)tt.contents[F+ot]=m[S+ot];return tt.usedBytes=Math.max(tt.usedBytes,F+T),T},llseek(f,m,S){var T=m;if(S===1?T+=f.position:S===2&&N.isFile(f.node.mode)&&(T+=f.node.usedBytes),T<0)throw new N.ErrnoError(28);return T},allocate(f,m,S){bt.expandFileStorage(f.node,m+S),f.node.usedBytes=Math.max(f.node.usedBytes,m+S)},mmap(f,m,S,T,F){if(!N.isFile(f.node.mode))throw new N.ErrnoError(43);var W,tt,ot=f.node.contents;if(!(F&2)&&ot&&ot.buffer===Y.buffer)tt=!1,W=ot.byteOffset;else{if(tt=!0,W=Mt(m),!W)throw new N.ErrnoError(48);ot&&((S>0||S+m<ot.length)&&(ot.subarray?ot=ot.subarray(S,S+m):ot=Array.prototype.slice.call(ot,S,S+m)),Y.set(ot,W))}return{ptr:W,allocated:tt}},msync(f,m,S,T,F){return bt.stream_ops.write(f,m,0,T,S,!1),0}}},Wt=(f,m,S,T)=>{var F=T?"":`al ${f}`;b(f).then(W=>{m(new Uint8Array(W)),F&&Nt(F)},W=>{if(S)S();else throw`Loading data file "${f}" failed.`}),F&&at(F)},Le=(f,m,S,T,F,W)=>{N.createDataFile(f,m,S,T,F,W)},xe=i.preloadPlugins||[],Cn=(f,m,S,T)=>{typeof Browser<"u"&&Browser.init();var F=!1;return xe.forEach(W=>{F||W.canHandle(m)&&(W.handle(f,m,S,T),F=!0)}),F},Nn=(f,m,S,T,F,W,tt,ot,At,Ht)=>{var te=m?qt.resolve(mt.join2(f,m)):f,ce=`cp ${te}`;function ge(pe){function we(ke){Ht?.(),ot||Le(f,m,ke,T,F,At),W?.(),Nt(ce)}Cn(pe,te,we,()=>{tt?.(),Nt(ce)})||we(pe)}at(ce),typeof S=="string"?Wt(S,ge,tt):ge(S)},Hs=f=>{var m={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},S=m[f];if(typeof S>"u")throw new Error(`Unknown file open mode: ${f}`);return S},Mr=(f,m)=>{var S=0;return f&&(S|=365),m&&(S|=146),S},N={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(f){this.name="ErrnoError",this.errno=f}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(f){this.node=f}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(f){this.shared.flags=f}get position(){return this.shared.position}set position(f){this.shared.position=f}},FSNode:class{constructor(f,m,S,T){f||(f=this),this.parent=f,this.mount=f.mount,this.mounted=null,this.id=N.nextInode++,this.name=m,this.mode=S,this.node_ops={},this.stream_ops={},this.rdev=T,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(f){f?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(f){f?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return N.isDir(this.mode)}get isDevice(){return N.isChrdev(this.mode)}},lookupPath(f,m={}){if(f=qt.resolve(f),!f)return{path:"",node:null};var S={follow_mount:!0,recurse_count:0};if(m=Object.assign(S,m),m.recurse_count>8)throw new N.ErrnoError(32);for(var T=f.split("/").filter(ce=>!!ce),F=N.root,W="/",tt=0;tt<T.length;tt++){var ot=tt===T.length-1;if(ot&&m.parent)break;if(F=N.lookupNode(F,T[tt]),W=mt.join2(W,T[tt]),N.isMountpoint(F)&&(!ot||ot&&m.follow_mount)&&(F=F.mounted.root),!ot||m.follow)for(var At=0;N.isLink(F.mode);){var Ht=N.readlink(W);W=qt.resolve(mt.dirname(W),Ht);var te=N.lookupPath(W,{recurse_count:m.recurse_count+1});if(F=te.node,At++>40)throw new N.ErrnoError(32)}}return{path:W,node:F}},getPath(f){for(var m;;){if(N.isRoot(f)){var S=f.mount.mountpoint;return m?S[S.length-1]!=="/"?`${S}/${m}`:S+m:S}m=m?`${f.name}/${m}`:f.name,f=f.parent}},hashName(f,m){for(var S=0,T=0;T<m.length;T++)S=(S<<5)-S+m.charCodeAt(T)|0;return(f+S>>>0)%N.nameTable.length},hashAddNode(f){var m=N.hashName(f.parent.id,f.name);f.name_next=N.nameTable[m],N.nameTable[m]=f},hashRemoveNode(f){var m=N.hashName(f.parent.id,f.name);if(N.nameTable[m]===f)N.nameTable[m]=f.name_next;else for(var S=N.nameTable[m];S;){if(S.name_next===f){S.name_next=f.name_next;break}S=S.name_next}},lookupNode(f,m){var S=N.mayLookup(f);if(S)throw new N.ErrnoError(S);for(var T=N.hashName(f.id,m),F=N.nameTable[T];F;F=F.name_next){var W=F.name;if(F.parent.id===f.id&&W===m)return F}return N.lookup(f,m)},createNode(f,m,S,T){var F=new N.FSNode(f,m,S,T);return N.hashAddNode(F),F},destroyNode(f){N.hashRemoveNode(f)},isRoot(f){return f===f.parent},isMountpoint(f){return!!f.mounted},isFile(f){return(f&61440)===32768},isDir(f){return(f&61440)===16384},isLink(f){return(f&61440)===40960},isChrdev(f){return(f&61440)===8192},isBlkdev(f){return(f&61440)===24576},isFIFO(f){return(f&61440)===4096},isSocket(f){return(f&49152)===49152},flagsToPermissionString(f){var m=["r","w","rw"][f&3];return f&512&&(m+="w"),m},nodePermissions(f,m){return N.ignorePermissions?0:m.includes("r")&&!(f.mode&292)||m.includes("w")&&!(f.mode&146)||m.includes("x")&&!(f.mode&73)?2:0},mayLookup(f){if(!N.isDir(f.mode))return 54;var m=N.nodePermissions(f,"x");return m||(f.node_ops.lookup?0:2)},mayCreate(f,m){try{var S=N.lookupNode(f,m);return 20}catch{}return N.nodePermissions(f,"wx")},mayDelete(f,m,S){var T;try{T=N.lookupNode(f,m)}catch(W){return W.errno}var F=N.nodePermissions(f,"wx");if(F)return F;if(S){if(!N.isDir(T.mode))return 54;if(N.isRoot(T)||N.getPath(T)===N.cwd())return 10}else if(N.isDir(T.mode))return 31;return 0},mayOpen(f,m){return f?N.isLink(f.mode)?32:N.isDir(f.mode)&&(N.flagsToPermissionString(m)!=="r"||m&512)?31:N.nodePermissions(f,N.flagsToPermissionString(m)):44},MAX_OPEN_FDS:4096,nextfd(){for(var f=0;f<=N.MAX_OPEN_FDS;f++)if(!N.streams[f])return f;throw new N.ErrnoError(33)},getStreamChecked(f){var m=N.getStream(f);if(!m)throw new N.ErrnoError(8);return m},getStream:f=>N.streams[f],createStream(f,m=-1){return f=Object.assign(new N.FSStream,f),m==-1&&(m=N.nextfd()),f.fd=m,N.streams[m]=f,f},closeStream(f){N.streams[f]=null},dupStream(f,m=-1){var S=N.createStream(f,m);return S.stream_ops?.dup?.(S),S},chrdev_stream_ops:{open(f){var m=N.getDevice(f.node.rdev);f.stream_ops=m.stream_ops,f.stream_ops.open?.(f)},llseek(){throw new N.ErrnoError(70)}},major:f=>f>>8,minor:f=>f&255,makedev:(f,m)=>f<<8|m,registerDevice(f,m){N.devices[f]={stream_ops:m}},getDevice:f=>N.devices[f],getMounts(f){for(var m=[],S=[f];S.length;){var T=S.pop();m.push(T),S.push(...T.mounts)}return m},syncfs(f,m){typeof f=="function"&&(m=f,f=!1),N.syncFSRequests++,N.syncFSRequests>1&&R(`warning: ${N.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var S=N.getMounts(N.root.mount),T=0;function F(tt){return N.syncFSRequests--,m(tt)}function W(tt){if(tt)return W.errored?void 0:(W.errored=!0,F(tt));++T>=S.length&&F(null)}S.forEach(tt=>{if(!tt.type.syncfs)return W(null);tt.type.syncfs(tt,f,W)})},mount(f,m,S){var T=S==="/",F=!S,W;if(T&&N.root)throw new N.ErrnoError(10);if(!T&&!F){var tt=N.lookupPath(S,{follow_mount:!1});if(S=tt.path,W=tt.node,N.isMountpoint(W))throw new N.ErrnoError(10);if(!N.isDir(W.mode))throw new N.ErrnoError(54)}var ot={type:f,opts:m,mountpoint:S,mounts:[]},At=f.mount(ot);return At.mount=ot,ot.root=At,T?N.root=At:W&&(W.mounted=ot,W.mount&&W.mount.mounts.push(ot)),At},unmount(f){var m=N.lookupPath(f,{follow_mount:!1});if(!N.isMountpoint(m.node))throw new N.ErrnoError(28);var S=m.node,T=S.mounted,F=N.getMounts(T);Object.keys(N.nameTable).forEach(tt=>{for(var ot=N.nameTable[tt];ot;){var At=ot.name_next;F.includes(ot.mount)&&N.destroyNode(ot),ot=At}}),S.mounted=null;var W=S.mount.mounts.indexOf(T);S.mount.mounts.splice(W,1)},lookup(f,m){return f.node_ops.lookup(f,m)},mknod(f,m,S){var T=N.lookupPath(f,{parent:!0}),F=T.node,W=mt.basename(f);if(!W||W==="."||W==="..")throw new N.ErrnoError(28);var tt=N.mayCreate(F,W);if(tt)throw new N.ErrnoError(tt);if(!F.node_ops.mknod)throw new N.ErrnoError(63);return F.node_ops.mknod(F,W,m,S)},create(f,m){return m=m!==void 0?m:438,m&=4095,m|=32768,N.mknod(f,m,0)},mkdir(f,m){return m=m!==void 0?m:511,m&=1023,m|=16384,N.mknod(f,m,0)},mkdirTree(f,m){for(var S=f.split("/"),T="",F=0;F<S.length;++F)if(S[F]){T+="/"+S[F];try{N.mkdir(T,m)}catch(W){if(W.errno!=20)throw W}}},mkdev(f,m,S){return typeof S>"u"&&(S=m,m=438),m|=8192,N.mknod(f,m,S)},symlink(f,m){if(!qt.resolve(f))throw new N.ErrnoError(44);var S=N.lookupPath(m,{parent:!0}),T=S.node;if(!T)throw new N.ErrnoError(44);var F=mt.basename(m),W=N.mayCreate(T,F);if(W)throw new N.ErrnoError(W);if(!T.node_ops.symlink)throw new N.ErrnoError(63);return T.node_ops.symlink(T,F,f)},rename(f,m){var S=mt.dirname(f),T=mt.dirname(m),F=mt.basename(f),W=mt.basename(m),tt,ot,At;if(tt=N.lookupPath(f,{parent:!0}),ot=tt.node,tt=N.lookupPath(m,{parent:!0}),At=tt.node,!ot||!At)throw new N.ErrnoError(44);if(ot.mount!==At.mount)throw new N.ErrnoError(75);var Ht=N.lookupNode(ot,F),te=qt.relative(f,T);if(te.charAt(0)!==".")throw new N.ErrnoError(28);if(te=qt.relative(m,S),te.charAt(0)!==".")throw new N.ErrnoError(55);var ce;try{ce=N.lookupNode(At,W)}catch{}if(Ht!==ce){var ge=N.isDir(Ht.mode),pe=N.mayDelete(ot,F,ge);if(pe)throw new N.ErrnoError(pe);if(pe=ce?N.mayDelete(At,W,ge):N.mayCreate(At,W),pe)throw new N.ErrnoError(pe);if(!ot.node_ops.rename)throw new N.ErrnoError(63);if(N.isMountpoint(Ht)||ce&&N.isMountpoint(ce))throw new N.ErrnoError(10);if(At!==ot&&(pe=N.nodePermissions(ot,"w"),pe))throw new N.ErrnoError(pe);N.hashRemoveNode(Ht);try{ot.node_ops.rename(Ht,At,W),Ht.parent=At}catch(we){throw we}finally{N.hashAddNode(Ht)}}},rmdir(f){var m=N.lookupPath(f,{parent:!0}),S=m.node,T=mt.basename(f),F=N.lookupNode(S,T),W=N.mayDelete(S,T,!0);if(W)throw new N.ErrnoError(W);if(!S.node_ops.rmdir)throw new N.ErrnoError(63);if(N.isMountpoint(F))throw new N.ErrnoError(10);S.node_ops.rmdir(S,T),N.destroyNode(F)},readdir(f){var m=N.lookupPath(f,{follow:!0}),S=m.node;if(!S.node_ops.readdir)throw new N.ErrnoError(54);return S.node_ops.readdir(S)},unlink(f){var m=N.lookupPath(f,{parent:!0}),S=m.node;if(!S)throw new N.ErrnoError(44);var T=mt.basename(f),F=N.lookupNode(S,T),W=N.mayDelete(S,T,!1);if(W)throw new N.ErrnoError(W);if(!S.node_ops.unlink)throw new N.ErrnoError(63);if(N.isMountpoint(F))throw new N.ErrnoError(10);S.node_ops.unlink(S,T),N.destroyNode(F)},readlink(f){var m=N.lookupPath(f),S=m.node;if(!S)throw new N.ErrnoError(44);if(!S.node_ops.readlink)throw new N.ErrnoError(28);return qt.resolve(N.getPath(S.parent),S.node_ops.readlink(S))},stat(f,m){var S=N.lookupPath(f,{follow:!m}),T=S.node;if(!T)throw new N.ErrnoError(44);if(!T.node_ops.getattr)throw new N.ErrnoError(63);return T.node_ops.getattr(T)},lstat(f){return N.stat(f,!0)},chmod(f,m,S){var T;if(typeof f=="string"){var F=N.lookupPath(f,{follow:!S});T=F.node}else T=f;if(!T.node_ops.setattr)throw new N.ErrnoError(63);T.node_ops.setattr(T,{mode:m&4095|T.mode&-4096,timestamp:Date.now()})},lchmod(f,m){N.chmod(f,m,!0)},fchmod(f,m){var S=N.getStreamChecked(f);N.chmod(S.node,m)},chown(f,m,S,T){var F;if(typeof f=="string"){var W=N.lookupPath(f,{follow:!T});F=W.node}else F=f;if(!F.node_ops.setattr)throw new N.ErrnoError(63);F.node_ops.setattr(F,{timestamp:Date.now()})},lchown(f,m,S){N.chown(f,m,S,!0)},fchown(f,m,S){var T=N.getStreamChecked(f);N.chown(T.node,m,S)},truncate(f,m){if(m<0)throw new N.ErrnoError(28);var S;if(typeof f=="string"){var T=N.lookupPath(f,{follow:!0});S=T.node}else S=f;if(!S.node_ops.setattr)throw new N.ErrnoError(63);if(N.isDir(S.mode))throw new N.ErrnoError(31);if(!N.isFile(S.mode))throw new N.ErrnoError(28);var F=N.nodePermissions(S,"w");if(F)throw new N.ErrnoError(F);S.node_ops.setattr(S,{size:m,timestamp:Date.now()})},ftruncate(f,m){var S=N.getStreamChecked(f);if((S.flags&2097155)===0)throw new N.ErrnoError(28);N.truncate(S.node,m)},utime(f,m,S){var T=N.lookupPath(f,{follow:!0}),F=T.node;F.node_ops.setattr(F,{timestamp:Math.max(m,S)})},open(f,m,S){if(f==="")throw new N.ErrnoError(44);m=typeof m=="string"?Hs(m):m,m&64?(S=typeof S>"u"?438:S,S=S&4095|32768):S=0;var T;if(typeof f=="object")T=f;else{f=mt.normalize(f);try{var F=N.lookupPath(f,{follow:!(m&131072)});T=F.node}catch{}}var W=!1;if(m&64)if(T){if(m&128)throw new N.ErrnoError(20)}else T=N.mknod(f,S,0),W=!0;if(!T)throw new N.ErrnoError(44);if(N.isChrdev(T.mode)&&(m&=-513),m&65536&&!N.isDir(T.mode))throw new N.ErrnoError(54);if(!W){var tt=N.mayOpen(T,m);if(tt)throw new N.ErrnoError(tt)}m&512&&!W&&N.truncate(T,0),m&=-131713;var ot=N.createStream({node:T,path:N.getPath(T),flags:m,seekable:!0,position:0,stream_ops:T.stream_ops,ungotten:[],error:!1});return ot.stream_ops.open&&ot.stream_ops.open(ot),i.logReadFiles&&!(m&1)&&(f in N.readFiles||(N.readFiles[f]=1)),ot},close(f){if(N.isClosed(f))throw new N.ErrnoError(8);f.getdents&&(f.getdents=null);try{f.stream_ops.close&&f.stream_ops.close(f)}catch(m){throw m}finally{N.closeStream(f.fd)}f.fd=null},isClosed(f){return f.fd===null},llseek(f,m,S){if(N.isClosed(f))throw new N.ErrnoError(8);if(!f.seekable||!f.stream_ops.llseek)throw new N.ErrnoError(70);if(S!=0&&S!=1&&S!=2)throw new N.ErrnoError(28);return f.position=f.stream_ops.llseek(f,m,S),f.ungotten=[],f.position},read(f,m,S,T,F){if(T<0||F<0)throw new N.ErrnoError(28);if(N.isClosed(f))throw new N.ErrnoError(8);if((f.flags&2097155)===1)throw new N.ErrnoError(8);if(N.isDir(f.node.mode))throw new N.ErrnoError(31);if(!f.stream_ops.read)throw new N.ErrnoError(28);var W=typeof F<"u";if(!W)F=f.position;else if(!f.seekable)throw new N.ErrnoError(70);var tt=f.stream_ops.read(f,m,S,T,F);return W||(f.position+=tt),tt},write(f,m,S,T,F,W){if(T<0||F<0)throw new N.ErrnoError(28);if(N.isClosed(f))throw new N.ErrnoError(8);if((f.flags&2097155)===0)throw new N.ErrnoError(8);if(N.isDir(f.node.mode))throw new N.ErrnoError(31);if(!f.stream_ops.write)throw new N.ErrnoError(28);f.seekable&&f.flags&1024&&N.llseek(f,0,2);var tt=typeof F<"u";if(!tt)F=f.position;else if(!f.seekable)throw new N.ErrnoError(70);var ot=f.stream_ops.write(f,m,S,T,F,W);return tt||(f.position+=ot),ot},allocate(f,m,S){if(N.isClosed(f))throw new N.ErrnoError(8);if(m<0||S<=0)throw new N.ErrnoError(28);if((f.flags&2097155)===0)throw new N.ErrnoError(8);if(!N.isFile(f.node.mode)&&!N.isDir(f.node.mode))throw new N.ErrnoError(43);if(!f.stream_ops.allocate)throw new N.ErrnoError(138);f.stream_ops.allocate(f,m,S)},mmap(f,m,S,T,F){if((T&2)!==0&&(F&2)===0&&(f.flags&2097155)!==2)throw new N.ErrnoError(2);if((f.flags&2097155)===1)throw new N.ErrnoError(2);if(!f.stream_ops.mmap)throw new N.ErrnoError(43);if(!m)throw new N.ErrnoError(28);return f.stream_ops.mmap(f,m,S,T,F)},msync(f,m,S,T,F){return f.stream_ops.msync?f.stream_ops.msync(f,m,S,T,F):0},ioctl(f,m,S){if(!f.stream_ops.ioctl)throw new N.ErrnoError(59);return f.stream_ops.ioctl(f,m,S)},readFile(f,m={}){if(m.flags=m.flags||0,m.encoding=m.encoding||"binary",m.encoding!=="utf8"&&m.encoding!=="binary")throw new Error(`Invalid encoding type "${m.encoding}"`);var S,T=N.open(f,m.flags),F=N.stat(f),W=F.size,tt=new Uint8Array(W);return N.read(T,tt,0,W,0),m.encoding==="utf8"?S=O(tt):m.encoding==="binary"&&(S=tt),N.close(T),S},writeFile(f,m,S={}){S.flags=S.flags||577;var T=N.open(f,S.flags,S.mode);if(typeof m=="string"){var F=new Uint8Array(q(m)+1),W=rt(m,F,0,F.length);N.write(T,F,0,W,void 0,S.canOwn)}else if(ArrayBuffer.isView(m))N.write(T,m,0,m.byteLength,void 0,S.canOwn);else throw new Error("Unsupported data type");N.close(T)},cwd:()=>N.currentPath,chdir(f){var m=N.lookupPath(f,{follow:!0});if(m.node===null)throw new N.ErrnoError(44);if(!N.isDir(m.node.mode))throw new N.ErrnoError(54);var S=N.nodePermissions(m.node,"x");if(S)throw new N.ErrnoError(S);N.currentPath=m.path},createDefaultDirectories(){N.mkdir("/tmp"),N.mkdir("/home"),N.mkdir("/home/web_user")},createDefaultDevices(){N.mkdir("/dev"),N.registerDevice(N.makedev(1,3),{read:()=>0,write:(T,F,W,tt,ot)=>tt}),N.mkdev("/dev/null",N.makedev(1,3)),ft.register(N.makedev(5,0),ft.default_tty_ops),ft.register(N.makedev(6,0),ft.default_tty1_ops),N.mkdev("/dev/tty",N.makedev(5,0)),N.mkdev("/dev/tty1",N.makedev(6,0));var f=new Uint8Array(1024),m=0,S=()=>(m===0&&(m=Gt(f).byteLength),f[--m]);N.createDevice("/dev","random",S),N.createDevice("/dev","urandom",S),N.mkdir("/dev/shm"),N.mkdir("/dev/shm/tmp")},createSpecialDirectories(){N.mkdir("/proc");var f=N.mkdir("/proc/self");N.mkdir("/proc/self/fd"),N.mount({mount(){var m=N.createNode(f,"fd",16895,73);return m.node_ops={lookup(S,T){var F=+T,W=N.getStreamChecked(F),tt={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>W.path}};return tt.parent=tt,tt}},m}},{},"/proc/self/fd")},createStandardStreams(f,m,S){f?N.createDevice("/dev","stdin",f):N.symlink("/dev/tty","/dev/stdin"),m?N.createDevice("/dev","stdout",null,m):N.symlink("/dev/tty","/dev/stdout"),S?N.createDevice("/dev","stderr",null,S):N.symlink("/dev/tty1","/dev/stderr");var T=N.open("/dev/stdin",0),F=N.open("/dev/stdout",1),W=N.open("/dev/stderr",1)},staticInit(){[44].forEach(f=>{N.genericErrors[f]=new N.ErrnoError(f),N.genericErrors[f].stack="<generic error, no stack>"}),N.nameTable=new Array(4096),N.mount(bt,{},"/"),N.createDefaultDirectories(),N.createDefaultDevices(),N.createSpecialDirectories(),N.filesystems={MEMFS:bt}},init(f,m,S){N.initialized=!0,f??=i.stdin,m??=i.stdout,S??=i.stderr,N.createStandardStreams(f,m,S)},quit(){N.initialized=!1;for(var f=0;f<N.streams.length;f++){var m=N.streams[f];m&&N.close(m)}},findObject(f,m){var S=N.analyzePath(f,m);return S.exists?S.object:null},analyzePath(f,m){try{var S=N.lookupPath(f,{follow:!m});f=S.path}catch{}var T={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var S=N.lookupPath(f,{parent:!0});T.parentExists=!0,T.parentPath=S.path,T.parentObject=S.node,T.name=mt.basename(f),S=N.lookupPath(f,{follow:!m}),T.exists=!0,T.path=S.path,T.object=S.node,T.name=S.node.name,T.isRoot=S.path==="/"}catch(F){T.error=F.errno}return T},createPath(f,m,S,T){f=typeof f=="string"?f:N.getPath(f);for(var F=m.split("/").reverse();F.length;){var W=F.pop();if(W){var tt=mt.join2(f,W);try{N.mkdir(tt)}catch{}f=tt}}return tt},createFile(f,m,S,T,F){var W=mt.join2(typeof f=="string"?f:N.getPath(f),m),tt=Mr(T,F);return N.create(W,tt)},createDataFile(f,m,S,T,F,W){var tt=m;f&&(f=typeof f=="string"?f:N.getPath(f),tt=m?mt.join2(f,m):f);var ot=Mr(T,F),At=N.create(tt,ot);if(S){if(typeof S=="string"){for(var Ht=new Array(S.length),te=0,ce=S.length;te<ce;++te)Ht[te]=S.charCodeAt(te);S=Ht}N.chmod(At,ot|146);var ge=N.open(At,577);N.write(ge,S,0,S.length,0,W),N.close(ge),N.chmod(At,ot)}},createDevice(f,m,S,T){var F=mt.join2(typeof f=="string"?f:N.getPath(f),m),W=Mr(!!S,!!T);N.createDevice.major??=64;var tt=N.makedev(N.createDevice.major++,0);return N.registerDevice(tt,{open(ot){ot.seekable=!1},close(ot){T?.buffer?.length&&T(10)},read(ot,At,Ht,te,ce){for(var ge=0,pe=0;pe<te;pe++){var we;try{we=S()}catch{throw new N.ErrnoError(29)}if(we===void 0&&ge===0)throw new N.ErrnoError(6);if(we==null)break;ge++,At[Ht+pe]=we}return ge&&(ot.node.timestamp=Date.now()),ge},write(ot,At,Ht,te,ce){for(var ge=0;ge<te;ge++)try{T(At[Ht+ge])}catch{throw new N.ErrnoError(29)}return te&&(ot.node.timestamp=Date.now()),ge}}),N.mkdev(F,W,tt)},forceLoadFile(f){if(f.isDevice||f.isFolder||f.link||f.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{f.contents=y(f.url),f.usedBytes=f.contents.length}catch{throw new N.ErrnoError(29)}},createLazyFile(f,m,S,T,F){class W{constructor(){this.lengthKnown=!1,this.chunks=[]}get(pe){if(!(pe>this.length-1||pe<0)){var we=pe%this.chunkSize,ke=pe/this.chunkSize|0;return this.getter(ke)[we]}}setDataGetter(pe){this.getter=pe}cacheLength(){var pe=new XMLHttpRequest;if(pe.open("HEAD",S,!1),pe.send(null),!(pe.status>=200&&pe.status<300||pe.status===304))throw new Error("Couldn't load "+S+". Status: "+pe.status);var we=Number(pe.getResponseHeader("Content-length")),ke,Mn=(ke=pe.getResponseHeader("Accept-Ranges"))&&ke==="bytes",nn=(ke=pe.getResponseHeader("Content-Encoding"))&&ke==="gzip",ii=1024*1024;Mn||(ii=we);var ri=(vi,Zr)=>{if(vi>Zr)throw new Error("invalid range ("+vi+", "+Zr+") or no bytes requested!");if(Zr>we-1)throw new Error("only "+we+" bytes available! programmer error!");var gn=new XMLHttpRequest;if(gn.open("GET",S,!1),we!==ii&&gn.setRequestHeader("Range","bytes="+vi+"-"+Zr),gn.responseType="arraybuffer",gn.overrideMimeType&&gn.overrideMimeType("text/plain; charset=x-user-defined"),gn.send(null),!(gn.status>=200&&gn.status<300||gn.status===304))throw new Error("Couldn't load "+S+". Status: "+gn.status);return gn.response!==void 0?new Uint8Array(gn.response||[]):z(gn.responseText||"",!0)},$s=this;$s.setDataGetter(vi=>{var Zr=vi*ii,gn=(vi+1)*ii-1;if(gn=Math.min(gn,we-1),typeof $s.chunks[vi]>"u"&&($s.chunks[vi]=ri(Zr,gn)),typeof $s.chunks[vi]>"u")throw new Error("doXHR failed!");return $s.chunks[vi]}),(nn||!we)&&(ii=we=1,we=this.getter(0).length,ii=we,A("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=we,this._chunkSize=ii,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!u)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var tt=new W,ot={isDevice:!1,contents:tt}}else var ot={isDevice:!1,url:S};var At=N.createFile(f,m,ot,T,F);ot.contents?At.contents=ot.contents:ot.url&&(At.contents=null,At.url=ot.url),Object.defineProperties(At,{usedBytes:{get:function(){return this.contents.length}}});var Ht={},te=Object.keys(At.stream_ops);te.forEach(ge=>{var pe=At.stream_ops[ge];Ht[ge]=(...we)=>(N.forceLoadFile(At),pe(...we))});function ce(ge,pe,we,ke,Mn){var nn=ge.node.contents;if(Mn>=nn.length)return 0;var ii=Math.min(nn.length-Mn,ke);if(nn.slice)for(var ri=0;ri<ii;ri++)pe[we+ri]=nn[Mn+ri];else for(var ri=0;ri<ii;ri++)pe[we+ri]=nn.get(Mn+ri);return ii}return Ht.read=(ge,pe,we,ke,Mn)=>(N.forceLoadFile(At),ce(ge,pe,we,ke,Mn)),Ht.mmap=(ge,pe,we,ke,Mn)=>{N.forceLoadFile(At);var nn=Mt(pe);if(!nn)throw new N.ErrnoError(48);return ce(ge,Y,nn,pe,we),{ptr:nn,allocated:!0}},At.stream_ops=Ht,At}},Ci=(f,m)=>f?O(Z,f,m):"",Fe={DEFAULT_POLLMASK:5,calculateAt(f,m,S){if(mt.isAbs(m))return m;var T;if(f===-100)T=N.cwd();else{var F=Fe.getStreamFromFD(f);T=F.path}if(m.length==0){if(!S)throw new N.ErrnoError(44);return T}return mt.join2(T,m)},doStat(f,m,S){var T=f(m);K[S>>2]=T.dev,K[S+4>>2]=T.mode,lt[S+8>>2]=T.nlink,K[S+12>>2]=T.uid,K[S+16>>2]=T.gid,K[S+20>>2]=T.rdev,ct=[T.size>>>0,(nt=T.size,+Math.abs(nt)>=1?nt>0?+Math.floor(nt/4294967296)>>>0:~~+Math.ceil((nt-+(~~nt>>>0))/4294967296)>>>0:0)],K[S+24>>2]=ct[0],K[S+28>>2]=ct[1],K[S+32>>2]=4096,K[S+36>>2]=T.blocks;var F=T.atime.getTime(),W=T.mtime.getTime(),tt=T.ctime.getTime();return ct=[Math.floor(F/1e3)>>>0,(nt=Math.floor(F/1e3),+Math.abs(nt)>=1?nt>0?+Math.floor(nt/4294967296)>>>0:~~+Math.ceil((nt-+(~~nt>>>0))/4294967296)>>>0:0)],K[S+40>>2]=ct[0],K[S+44>>2]=ct[1],lt[S+48>>2]=F%1e3*1e3*1e3,ct=[Math.floor(W/1e3)>>>0,(nt=Math.floor(W/1e3),+Math.abs(nt)>=1?nt>0?+Math.floor(nt/4294967296)>>>0:~~+Math.ceil((nt-+(~~nt>>>0))/4294967296)>>>0:0)],K[S+56>>2]=ct[0],K[S+60>>2]=ct[1],lt[S+64>>2]=W%1e3*1e3*1e3,ct=[Math.floor(tt/1e3)>>>0,(nt=Math.floor(tt/1e3),+Math.abs(nt)>=1?nt>0?+Math.floor(nt/4294967296)>>>0:~~+Math.ceil((nt-+(~~nt>>>0))/4294967296)>>>0:0)],K[S+72>>2]=ct[0],K[S+76>>2]=ct[1],lt[S+80>>2]=tt%1e3*1e3*1e3,ct=[T.ino>>>0,(nt=T.ino,+Math.abs(nt)>=1?nt>0?+Math.floor(nt/4294967296)>>>0:~~+Math.ceil((nt-+(~~nt>>>0))/4294967296)>>>0:0)],K[S+88>>2]=ct[0],K[S+92>>2]=ct[1],0},doMsync(f,m,S,T,F){if(!N.isFile(m.node.mode))throw new N.ErrnoError(43);if(T&2)return 0;var W=Z.slice(f,f+S);N.msync(m,W,F,S,T)},getStreamFromFD(f){var m=N.getStreamChecked(f);return m},varargs:void 0,getStr(f){var m=Ci(f);return m}};function zr(f,m){try{return f=Fe.getStr(f),N.chmod(f,m),0}catch(S){if(typeof N>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function Vr(f,m,S,T){try{if(m=Fe.getStr(m),m=Fe.calculateAt(f,m),S&-8)return-28;var F=N.lookupPath(m,{follow:!0}),W=F.node;if(!W)return-44;var tt="";return S&4&&(tt+="r"),S&2&&(tt+="w"),S&1&&(tt+="x"),tt&&N.nodePermissions(W,tt)?-2:0}catch(ot){if(typeof N>"u"||ot.name!=="ErrnoError")throw ot;return-ot.errno}}function Dn(){var f=K[+Fe.varargs>>2];return Fe.varargs+=4,f}var Jn=Dn;function Hr(f,m,S){Fe.varargs=S;try{var T=Fe.getStreamFromFD(f);switch(m){case 0:{var F=Dn();if(F<0)return-28;for(;N.streams[F];)F++;var W;return W=N.dupStream(T,F),W.fd}case 1:case 2:return 0;case 3:return T.flags;case 4:{var F=Dn();return T.flags|=F,0}case 12:{var F=Jn(),tt=0;return J[F+tt>>1]=2,0}case 13:case 14:return 0}return-28}catch(ot){if(typeof N>"u"||ot.name!=="ErrnoError")throw ot;return-ot.errno}}function gi(f,m){try{var S=Fe.getStreamFromFD(f);return Fe.doStat(N.stat,S.path,m)}catch(T){if(typeof N>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function Pi(f,m,S){Fe.varargs=S;try{var T=Fe.getStreamFromFD(f);switch(m){case 21509:return T.tty?0:-59;case 21505:{if(!T.tty)return-59;if(T.tty.ops.ioctl_tcgets){var F=T.tty.ops.ioctl_tcgets(T),W=Jn();K[W>>2]=F.c_iflag||0,K[W+4>>2]=F.c_oflag||0,K[W+8>>2]=F.c_cflag||0,K[W+12>>2]=F.c_lflag||0;for(var tt=0;tt<32;tt++)Y[W+tt+17]=F.c_cc[tt]||0;return 0}return 0}case 21510:case 21511:case 21512:return T.tty?0:-59;case 21506:case 21507:case 21508:{if(!T.tty)return-59;if(T.tty.ops.ioctl_tcsets){for(var W=Jn(),ot=K[W>>2],At=K[W+4>>2],Ht=K[W+8>>2],te=K[W+12>>2],ce=[],tt=0;tt<32;tt++)ce.push(Y[W+tt+17]);return T.tty.ops.ioctl_tcsets(T.tty,m,{c_iflag:ot,c_oflag:At,c_cflag:Ht,c_lflag:te,c_cc:ce})}return 0}case 21519:{if(!T.tty)return-59;var W=Jn();return K[W>>2]=0,0}case 21520:return T.tty?-28:-59;case 21531:{var W=Jn();return N.ioctl(T,m,W)}case 21523:{if(!T.tty)return-59;if(T.tty.ops.ioctl_tiocgwinsz){var ge=T.tty.ops.ioctl_tiocgwinsz(T.tty),W=Jn();J[W>>1]=ge[0],J[W+2>>1]=ge[1]}return 0}case 21524:return T.tty?0:-59;case 21515:return T.tty?0:-59;default:return-28}}catch(pe){if(typeof N>"u"||pe.name!=="ErrnoError")throw pe;return-pe.errno}}function Gr(f,m){try{return f=Fe.getStr(f),Fe.doStat(N.lstat,f,m)}catch(S){if(typeof N>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function Zi(f,m,S,T){try{m=Fe.getStr(m);var F=T&256,W=T&4096;return T=T&-6401,m=Fe.calculateAt(f,m,W),Fe.doStat(F?N.lstat:N.stat,m,S)}catch(tt){if(typeof N>"u"||tt.name!=="ErrnoError")throw tt;return-tt.errno}}function Xr(f,m,S,T){Fe.varargs=T;try{m=Fe.getStr(m),m=Fe.calculateAt(f,m);var F=T?Dn():0;return N.open(m,S,F).fd}catch(W){if(typeof N>"u"||W.name!=="ErrnoError")throw W;return-W.errno}}function Wr(f){try{return f=Fe.getStr(f),N.rmdir(f),0}catch(m){if(typeof N>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}function Gs(f,m){try{return f=Fe.getStr(f),Fe.doStat(N.stat,f,m)}catch(S){if(typeof N>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function _i(f,m,S){try{return m=Fe.getStr(m),m=Fe.calculateAt(f,m),S===0?N.unlink(m):S===512?N.rmdir(m):zt("Invalid flags passed to unlinkat"),0}catch(T){if(typeof N>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}var Xs=()=>{zt("")},Ws=(f,m,S,T,F)=>{},Yr=()=>{for(var f=new Array(256),m=0;m<256;++m)f[m]=String.fromCharCode(m);U=f},U,st=f=>{for(var m="",S=f;Z[S];)m+=U[Z[S++]];return m},xt={},_t={},vt={},Qt,Xt=f=>{throw new Qt(f)},Kt,le=f=>{throw new Kt(f)},fe=(f,m,S)=>{f.forEach(ot=>vt[ot]=m);function T(ot){var At=S(ot);At.length!==f.length&&le("Mismatched type converter count");for(var Ht=0;Ht<f.length;++Ht)ve(f[Ht],At[Ht])}var F=new Array(m.length),W=[],tt=0;m.forEach((ot,At)=>{_t.hasOwnProperty(ot)?F[At]=_t[ot]:(W.push(ot),xt.hasOwnProperty(ot)||(xt[ot]=[]),xt[ot].push(()=>{F[At]=_t[ot],++tt,tt===W.length&&T(F)}))}),W.length===0&&T(F)};function Jt(f,m,S={}){var T=m.name;if(f||Xt(`type "${T}" must have a positive integer typeid pointer`),_t.hasOwnProperty(f)){if(S.ignoreDuplicateRegistrations)return;Xt(`Cannot register type '${T}' twice`)}if(_t[f]=m,delete vt[f],xt.hasOwnProperty(f)){var F=xt[f];delete xt[f],F.forEach(W=>W())}}function ve(f,m,S={}){return Jt(f,m,S)}var se=8,Ue=(f,m,S,T)=>{m=st(m),ve(f,{name:m,fromWireType:function(F){return!!F},toWireType:function(F,W){return W?S:T},argPackAdvance:se,readValueFromPointer:function(F){return this.fromWireType(Z[F])},destructorFunction:null})},Ze=[],De=[],s=f=>{f>9&&--De[f+1]===0&&(De[f]=void 0,Ze.push(f))},a=()=>De.length/2-5-Ze.length,c=()=>{De.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=a},p={toValue:f=>(f||Xt("Cannot use deleted val. handle = "+f),De[f]),toHandle:f=>{switch(f){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let m=Ze.pop()||De.length;return De[m]=f,De[m+1]=1,m}}}};function M(f){return this.fromWireType(lt[f>>2])}var I={name:"emscripten::val",fromWireType:f=>{var m=p.toValue(f);return s(f),m},toWireType:(f,m)=>p.toHandle(m),argPackAdvance:se,readValueFromPointer:M,destructorFunction:null},B=f=>ve(f,I),Q=(f,m)=>{switch(m){case 4:return function(S){return this.fromWireType(gt[S>>2])};case 8:return function(S){return this.fromWireType(Et[S>>3])};default:throw new TypeError(`invalid float width (${m}): ${f}`)}},et=(f,m,S)=>{m=st(m),ve(f,{name:m,fromWireType:T=>T,toWireType:(T,F)=>F,argPackAdvance:se,readValueFromPointer:Q(m,S),destructorFunction:null})},dt=(f,m)=>Object.defineProperty(m,"name",{value:f}),Dt=f=>{for(;f.length;){var m=f.pop(),S=f.pop();S(m)}};function Lt(f){for(var m=1;m<f.length;++m)if(f[m]!==null&&f[m].destructorFunction===void 0)return!0;return!1}function kt(f,m){if(!(f instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof f} which is not a function`);var S=dt(f.name||"unknownFunctionName",function(){});S.prototype=f.prototype;var T=new S,F=f.apply(T,m);return F instanceof Object?F:T}function de(f,m,S,T){var F=Lt(f),W=f.length-2,tt=[],ot=["fn"];m&&ot.push("thisWired");for(var At=0;At<W;++At)tt.push(`arg${At}`),ot.push(`arg${At}Wired`);tt=tt.join(","),ot=ot.join(",");var Ht=`return function (${tt}) {
`;F&&(Ht+=`var destructors = [];
`);var te=F?"destructors":"null",ce=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];m&&(Ht+=`var thisWired = classParam['toWireType'](${te}, this);
`);for(var At=0;At<W;++At)Ht+=`var arg${At}Wired = argType${At}['toWireType'](${te}, arg${At});
`,ce.push(`argType${At}`);if(Ht+=(S||T?"var rv = ":"")+`invoker(${ot});
`,F)Ht+=`runDestructors(destructors);
`;else for(var At=m?1:2;At<f.length;++At){var ge=At===1?"thisWired":"arg"+(At-2)+"Wired";f[At].destructorFunction!==null&&(Ht+=`${ge}_dtor(${ge});
`,ce.push(`${ge}_dtor`))}return S&&(Ht+=`var ret = retType['fromWireType'](rv);
return ret;
`),Ht+=`}
`,[ce,Ht]}function Se(f,m,S,T,F,W){var tt=m.length;tt<2&&Xt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ot=m[1]!==null&&S!==null,At=Lt(m),Ht=m[0].name!=="void",te=[f,Xt,T,F,Dt,m[0],m[1]],ce=0;ce<tt-2;++ce)te.push(m[ce+2]);if(!At)for(var ce=ot?1:2;ce<m.length;++ce)m[ce].destructorFunction!==null&&te.push(m[ce].destructorFunction);let[ge,pe]=de(m,ot,Ht,W);ge.push(pe);var we=kt(Function,ge)(...te);return dt(f,we)}var Pe=(f,m,S)=>{if(f[m].overloadTable===void 0){var T=f[m];f[m]=function(...F){return f[m].overloadTable.hasOwnProperty(F.length)||Xt(`Function '${S}' called with an invalid number of arguments (${F.length}) - expects one of (${f[m].overloadTable})!`),f[m].overloadTable[F.length].apply(this,F)},f[m].overloadTable=[],f[m].overloadTable[T.argCount]=T}},He=(f,m,S)=>{i.hasOwnProperty(f)?((S===void 0||i[f].overloadTable!==void 0&&i[f].overloadTable[S]!==void 0)&&Xt(`Cannot register public name '${f}' twice`),Pe(i,f,f),i.hasOwnProperty(S)&&Xt(`Cannot register multiple overloads of a function with the same number of arguments (${S})!`),i[f].overloadTable[S]=m):(i[f]=m,S!==void 0&&(i[f].numArguments=S))},xn=(f,m)=>{for(var S=[],T=0;T<f;T++)S.push(lt[m+T*4>>2]);return S},jn=(f,m,S)=>{i.hasOwnProperty(f)||le("Replacing nonexistent public symbol"),i[f].overloadTable!==void 0&&S!==void 0?i[f].overloadTable[S]=m:(i[f]=m,i[f].argCount=S)},Ji=(f,m,S)=>{f=f.replace(/p/g,"i");var T=i["dynCall_"+f];return T(m,...S)},$r=[],Qo,Ii=f=>{var m=$r[f];return m||(f>=$r.length&&($r.length=f+1),$r[f]=m=Qo.get(f)),m},Fp=(f,m,S=[])=>{if(f.includes("j"))return Ji(f,m,S);var T=Ii(m)(...S);return T},Up=(f,m)=>(...S)=>Fp(f,m,S),Bp=(f,m)=>{f=st(f);function S(){return f.includes("j")?Up(f,m):Ii(m)}var T=S();return typeof T!="function"&&Xt(`unknown function pointer with signature ${f}: ${m}`),T},kp=(f,m)=>{var S=dt(m,function(T){this.name=m,this.message=T;var F=new Error(T).stack;F!==void 0&&(this.stack=this.toString()+`
`+F.replace(/^Error(:[^\n]*)?\n/,""))});return S.prototype=Object.create(f.prototype),S.prototype.constructor=S,S.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},S},Eu,Tu=f=>{var m=Lu(f),S=st(m);return Ri(m),S},zp=(f,m)=>{var S=[],T={};function F(W){if(!T[W]&&!_t[W]){if(vt[W]){vt[W].forEach(F);return}S.push(W),T[W]=!0}}throw m.forEach(F),new Eu(`${f}: `+S.map(Tu).join([", "]))},Vp=f=>{f=f.trim();let m=f.indexOf("(");return m!==-1?f.substr(0,m):f},Hp=(f,m,S,T,F,W,tt,ot)=>{var At=xn(m,S);f=st(f),f=Vp(f),F=Bp(T,F),He(f,function(){zp(`Cannot call ${f} due to unbound types`,At)},m-1),fe([],At,Ht=>{var te=[Ht[0],null].concat(Ht.slice(1));return jn(f,Se(f,te,null,F,W,tt),m-1),[]})},Gp=(f,m,S)=>{switch(m){case 1:return S?T=>Y[T]:T=>Z[T];case 2:return S?T=>J[T>>1]:T=>j[T>>1];case 4:return S?T=>K[T>>2]:T=>lt[T>>2];default:throw new TypeError(`invalid integer width (${m}): ${f}`)}},Xp=(f,m,S,T,F)=>{m=st(m),F===-1&&(F=4294967295);var W=te=>te;if(T===0){var tt=32-8*S;W=te=>te<<tt>>>tt}var ot=m.includes("unsigned"),At=(te,ce)=>{},Ht;ot?Ht=function(te,ce){return At(ce,this.name),ce>>>0}:Ht=function(te,ce){return At(ce,this.name),ce},ve(f,{name:m,fromWireType:W,toWireType:Ht,argPackAdvance:se,readValueFromPointer:Gp(m,S,T!==0),destructorFunction:null})},Wp=(f,m,S)=>{var T=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],F=T[m];function W(tt){var ot=lt[tt>>2],At=lt[tt+4>>2];return new F(Y.buffer,At,ot)}S=st(S),ve(f,{name:S,fromWireType:W,argPackAdvance:se,readValueFromPointer:W},{ignoreDuplicateRegistrations:!0})},qr=(f,m,S)=>rt(f,Z,m,S),Yp=(f,m)=>{m=st(m);var S=m==="std::string";ve(f,{name:m,fromWireType(T){var F=lt[T>>2],W=T+4,tt;if(S)for(var ot=W,At=0;At<=F;++At){var Ht=W+At;if(At==F||Z[Ht]==0){var te=Ht-ot,ce=Ci(ot,te);tt===void 0?tt=ce:(tt+="\0",tt+=ce),ot=Ht+1}}else{for(var ge=new Array(F),At=0;At<F;++At)ge[At]=String.fromCharCode(Z[W+At]);tt=ge.join("")}return Ri(T),tt},toWireType(T,F){F instanceof ArrayBuffer&&(F=new Uint8Array(F));var W,tt=typeof F=="string";tt||F instanceof Uint8Array||F instanceof Uint8ClampedArray||F instanceof Int8Array||Xt("Cannot pass non-string to std::string"),S&&tt?W=q(F):W=F.length;var ot=Lc(4+W+1),At=ot+4;if(lt[ot>>2]=W,S&&tt)qr(F,At,W+1);else if(tt)for(var Ht=0;Ht<W;++Ht){var te=F.charCodeAt(Ht);te>255&&(Ri(At),Xt("String has UTF-16 code units that do not fit in 8 bits")),Z[At+Ht]=te}else for(var Ht=0;Ht<W;++Ht)Z[At+Ht]=F[Ht];return T!==null&&T.push(Ri,ot),ot},argPackAdvance:se,readValueFromPointer:M,destructorFunction(T){Ri(T)}})},Au=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,$p=(f,m)=>{for(var S=f,T=S>>1,F=T+m/2;!(T>=F)&&j[T];)++T;if(S=T<<1,S-f>32&&Au)return Au.decode(Z.subarray(f,S));for(var W="",tt=0;!(tt>=m/2);++tt){var ot=J[f+tt*2>>1];if(ot==0)break;W+=String.fromCharCode(ot)}return W},qp=(f,m,S)=>{if(S??=2147483647,S<2)return 0;S-=2;for(var T=m,F=S<f.length*2?S/2:f.length,W=0;W<F;++W){var tt=f.charCodeAt(W);J[m>>1]=tt,m+=2}return J[m>>1]=0,m-T},Zp=f=>f.length*2,Jp=(f,m)=>{for(var S=0,T="";!(S>=m/4);){var F=K[f+S*4>>2];if(F==0)break;if(++S,F>=65536){var W=F-65536;T+=String.fromCharCode(55296|W>>10,56320|W&1023)}else T+=String.fromCharCode(F)}return T},jp=(f,m,S)=>{if(S??=2147483647,S<4)return 0;for(var T=m,F=T+S-4,W=0;W<f.length;++W){var tt=f.charCodeAt(W);if(tt>=55296&&tt<=57343){var ot=f.charCodeAt(++W);tt=65536+((tt&1023)<<10)|ot&1023}if(K[m>>2]=tt,m+=4,m+4>F)break}return K[m>>2]=0,m-T},Kp=f=>{for(var m=0,S=0;S<f.length;++S){var T=f.charCodeAt(S);T>=55296&&T<=57343&&++S,m+=4}return m},Qp=(f,m,S)=>{S=st(S);var T,F,W,tt;m===2?(T=$p,F=qp,tt=Zp,W=ot=>j[ot>>1]):m===4&&(T=Jp,F=jp,tt=Kp,W=ot=>lt[ot>>2]),ve(f,{name:S,fromWireType:ot=>{for(var At=lt[ot>>2],Ht,te=ot+4,ce=0;ce<=At;++ce){var ge=ot+4+ce*m;if(ce==At||W(ge)==0){var pe=ge-te,we=T(te,pe);Ht===void 0?Ht=we:(Ht+="\0",Ht+=we),te=ge+m}}return Ri(ot),Ht},toWireType:(ot,At)=>{typeof At!="string"&&Xt(`Cannot pass non-string to C++ string type ${S}`);var Ht=tt(At),te=Lc(4+Ht+m);return lt[te>>2]=Ht/m,F(At,te+4,Ht+m),ot!==null&&ot.push(Ri,te),te},argPackAdvance:se,readValueFromPointer:M,destructorFunction(ot){Ri(ot)}})},tm=(f,m)=>{m=st(m),ve(f,{isVoid:!0,name:m,argPackAdvance:0,fromWireType:()=>{},toWireType:(S,T)=>{}})},em=1,nm=()=>em,Cu=f=>{for(var m=f.split("."),S=0;S<4;S++){var T=Number(m[S]);if(isNaN(T))return null;m[S]=T}return(m[0]|m[1]<<8|m[2]<<16|m[3]<<24)>>>0},ta=f=>parseInt(f),im=f=>{var m,S,T,F,W=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,tt=[];if(!W.test(f))return null;if(f==="::")return[0,0,0,0,0,0,0,0];for(f.startsWith("::")?f=f.replace("::","Z:"):f=f.replace("::",":Z:"),f.indexOf(".")>0?(f=f.replace(new RegExp("[.]","g"),":"),m=f.split(":"),m[m.length-4]=ta(m[m.length-4])+ta(m[m.length-3])*256,m[m.length-3]=ta(m[m.length-2])+ta(m[m.length-1])*256,m=m.slice(0,m.length-2)):m=f.split(":"),T=0,F=0,S=0;S<m.length;S++)if(typeof m[S]=="string")if(m[S]==="Z"){for(F=0;F<8-m.length+1;F++)tt[S+F]=0;T=F-1}else tt[S+T]=Nu(parseInt(m[S],16));else tt[S+T]=m[S];return[tt[1]<<16|tt[0],tt[3]<<16|tt[2],tt[5]<<16|tt[4],tt[7]<<16|tt[6]]},ji={address_map:{id:1,addrs:{},names:{}},lookup_name(f){var m=Cu(f);if(m!==null||(m=im(f),m!==null))return f;var S;if(ji.address_map.addrs[f])S=ji.address_map.addrs[f];else{var T=ji.address_map.id++;G(T<65535,"exceeded max address mappings of 65535"),S="172.29."+(T&255)+"."+(T&65280),ji.address_map.names[S]=f,ji.address_map.addrs[f]=S}return S},lookup_addr(f){return ji.address_map.names[f]?ji.address_map.names[f]:null}},rm=f=>{var m=Ci(f);return Cu(ji.lookup_name(m))},sm=(f,m,S)=>Z.copyWithin(f,m,m+S),Ac=(f,m)=>{var S=_t[f];return S===void 0&&Xt(`${m} has unknown type ${Tu(f)}`),S},Pu=(f,m,S)=>{var T=[],F=f.toWireType(T,S);return T.length&&(lt[m>>2]=p.toHandle(T)),F},om=(f,m,S)=>(f=p.toValue(f),m=Ac(m,"emval::as"),Pu(m,S,f)),am={},Cc=f=>{var m=am[f];return m===void 0?st(f):m},Pc=[],lm=(f,m,S,T,F)=>(f=Pc[f],m=p.toValue(m),S=Cc(S),f(m,m[S],T,F)),Iu=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),cm=f=>f===0?p.toHandle(Iu()):(f=Cc(f),p.toHandle(Iu()[f])),hm=f=>{var m=Pc.length;return Pc.push(f),m},um=(f,m)=>{for(var S=new Array(f),T=0;T<f;++T)S[T]=Ac(lt[m+T*4>>2],"parameter "+T);return S},Eb=Reflect.construct,fm=(f,m,S)=>{var T=um(f,m),F=T.shift();f--;var W=`return function (obj, func, destructorsRef, args) {
`,tt=0,ot=[];S===0&&ot.push("obj");for(var At=["retType"],Ht=[F],te=0;te<f;++te)ot.push("arg"+te),At.push("argType"+te),Ht.push(T[te]),W+=`  var arg${te} = argType${te}.readValueFromPointer(args${tt?"+"+tt:""});
`,tt+=T[te].argPackAdvance;var ce=S===1?"new func":"func.call";W+=`  var rv = ${ce}(${ot.join(", ")});
`,F.isVoid||(At.push("emval_returnValue"),Ht.push(Pu),W+=`  return emval_returnValue(retType, destructorsRef, rv);
`),W+=`};
`,At.push(W);var ge=kt(Function,At)(...Ht),pe=`methodCaller<(${T.map(we=>we.name).join(", ")}) => ${F.name}>`;return hm(dt(pe,ge))},dm=(f,m)=>(f=p.toValue(f),m=p.toValue(m),p.toHandle(f[m])),pm=f=>{f>9&&(De[f+1]+=1)},mm=()=>p.toHandle([]),gm=f=>p.toHandle(Cc(f)),_m=()=>p.toHandle({}),vm=f=>{var m=p.toValue(f);Dt(m),s(f)},ym=(f,m,S)=>{f=p.toValue(f),m=p.toValue(m),S=p.toValue(S),f[m]=S},xm=(f,m)=>{f=Ac(f,"_emval_take_value");var S=f.readValueFromPointer(m);return p.toHandle(S)},Mm=f=>f%4===0&&(f%100!==0||f%400===0),bm=[0,31,60,91,121,152,182,213,244,274,305,335],Sm=[0,31,59,90,120,151,181,212,243,273,304,334],wm=f=>{var m=Mm(f.getFullYear()),S=m?bm:Sm,T=S[f.getMonth()]+f.getDate()-1;return T},Ic=(f,m)=>m+2097152>>>0<4194305-!!f?(f>>>0)+m*4294967296:NaN;function Em(f,m,S){var T=Ic(f,m),F=new Date(T*1e3);K[S>>2]=F.getSeconds(),K[S+4>>2]=F.getMinutes(),K[S+8>>2]=F.getHours(),K[S+12>>2]=F.getDate(),K[S+16>>2]=F.getMonth(),K[S+20>>2]=F.getFullYear()-1900,K[S+24>>2]=F.getDay();var W=wm(F)|0;K[S+28>>2]=W,K[S+36>>2]=-(F.getTimezoneOffset()*60);var tt=new Date(F.getFullYear(),0,1),ot=new Date(F.getFullYear(),6,1).getTimezoneOffset(),At=tt.getTimezoneOffset(),Ht=(ot!=At&&F.getTimezoneOffset()==Math.min(At,ot))|0;K[S+32>>2]=Ht}function Tm(f,m,S,T,F,W,tt){var ot=Ic(W,tt);try{var At=Fe.getStreamFromFD(F);S&2&&Fe.doMsync(f,At,m,T,ot)}catch(Ht){if(typeof N>"u"||Ht.name!=="ErrnoError")throw Ht;return-Ht.errno}}var Am=(f,m,S,T)=>{var F=new Date().getFullYear(),W=new Date(F,0,1),tt=new Date(F,6,1),ot=W.getTimezoneOffset(),At=tt.getTimezoneOffset(),Ht=Math.max(ot,At);lt[f>>2]=Ht*60,K[m>>2]=+(ot!=At);var te=pe=>{var we=pe>=0?"-":"+",ke=Math.abs(pe),Mn=String(Math.floor(ke/60)).padStart(2,"0"),nn=String(ke%60).padStart(2,"0");return`UTC${we}${Mn}${nn}`},ce=te(ot),ge=te(At);At<ot?(qr(ce,S,17),qr(ge,T,17)):(qr(ce,T,17),qr(ge,S,17))},Cm=()=>Date.now();function Pm(){return new Error().stack.toString()}var ea=f=>{ea.shown||={},ea.shown[f]||(ea.shown[f]=1,d&&(f="warning: "+f),R(f))};function Im(f){var m=Pm(),S=m.lastIndexOf("_emscripten_log"),T=m.lastIndexOf("_emscripten_get_callstack"),F=m.indexOf(`
`,Math.max(S,T))+1;m=m.slice(F),f&8&&typeof emscripten_source_map>"u"&&(ea('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),f^=8,f|=16);var W=m.split(`
`);m="";var tt=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),ot=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),At=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Ht in W){var te=W[Ht],ce="",ge="",pe=0,we=0,ke=At.exec(te);if(ke&&ke.length==5)ce=ke[1],ge=ke[2],pe=ke[3],we=ke[4];else if(ke=tt.exec(te)||ot.exec(te),ke&&ke.length>=4)ce=ke[1],ge=ke[2],pe=ke[3],we=ke[4]|0;else{m+=te+`
`;continue}var Mn=!1;if(f&8){var nn=emscripten_source_map.originalPositionFor({line:pe,column:we});Mn=nn?.source,Mn&&(f&64&&(nn.source=nn.source.substring(nn.source.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=`    at ${ce} (${nn.source}:${nn.line}:${nn.column})
`)}(f&16||!Mn)&&(f&64&&(ge=ge.substring(ge.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=(Mn?`     = ${ce}`:`    at ${ce}`)+` (${ge}:${pe}:${we})
`)}return m=m.replace(/\s+$/,""),m}function Rm(f,m,S){var T=Im(f);if(!m||S<=0)return q(T)+1;var F=qr(T,m,S);return F+1}var Ru=()=>2147483648,Lm=()=>Ru(),Nm=f=>{var m=H.buffer,S=(f-m.byteLength+65535)/65536|0;try{return H.grow(S),yt(),1}catch{}},Dm=f=>{var m=Z.length;f>>>=0;var S=Ru();if(f>S)return!1;for(var T=1;T<=4;T*=2){var F=m*(1+.2/T);F=Math.min(F,f+100663296);var W=Math.min(S,pt(Math.max(f,F),65536)),tt=Nm(W);if(tt)return!0}return!1},Rc={},Om=()=>_||"./this.program",Ys=()=>{if(!Ys.strings){var f=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",m={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:f,_:Om()};for(var S in Rc)Rc[S]===void 0?delete m[S]:m[S]=Rc[S];var T=[];for(var S in m)T.push(`${S}=${m[S]}`);Ys.strings=T}return Ys.strings},Fm=(f,m)=>{for(var S=0;S<f.length;++S)Y[m++]=f.charCodeAt(S);Y[m]=0},Um=(f,m)=>{var S=0;return Ys().forEach((T,F)=>{var W=m+S;lt[f+F*4>>2]=W,Fm(T,W),S+=T.length+1}),0},Bm=(f,m)=>{var S=Ys();lt[f>>2]=S.length;var T=0;return S.forEach(F=>T+=F.length+1),lt[m>>2]=T,0},km=0,zm=()=>Ft||km>0,Vm=f=>{k=f,zm()||(i.onExit?.(f),C=!0),x(f,new St(f))},Hm=(f,m)=>{k=f,Vm(f)},Gm=Hm;function Xm(f){try{var m=Fe.getStreamFromFD(f);return N.close(m),0}catch(S){if(typeof N>"u"||S.name!=="ErrnoError")throw S;return S.errno}}var Wm=(f,m,S,T)=>{for(var F=0,W=0;W<S;W++){var tt=lt[m>>2],ot=lt[m+4>>2];m+=8;var At=N.read(f,Y,tt,ot,T);if(At<0)return-1;if(F+=At,At<ot)break;typeof T<"u"&&(T+=At)}return F};function Ym(f,m,S,T){try{var F=Fe.getStreamFromFD(f),W=Wm(F,m,S);return lt[T>>2]=W,0}catch(tt){if(typeof N>"u"||tt.name!=="ErrnoError")throw tt;return tt.errno}}function $m(f,m,S,T,F){var W=Ic(m,S);try{if(isNaN(W))return 61;var tt=Fe.getStreamFromFD(f);return N.llseek(tt,W,T),ct=[tt.position>>>0,(nt=tt.position,+Math.abs(nt)>=1?nt>0?+Math.floor(nt/4294967296)>>>0:~~+Math.ceil((nt-+(~~nt>>>0))/4294967296)>>>0:0)],K[F>>2]=ct[0],K[F+4>>2]=ct[1],tt.getdents&&W===0&&T===0&&(tt.getdents=null),0}catch(ot){if(typeof N>"u"||ot.name!=="ErrnoError")throw ot;return ot.errno}}var qm=(f,m,S,T)=>{for(var F=0,W=0;W<S;W++){var tt=lt[m>>2],ot=lt[m+4>>2];m+=8;var At=N.write(f,Y,tt,ot,T);if(At<0)return-1;if(F+=At,At<ot)break;typeof T<"u"&&(T+=At)}return F};function Zm(f,m,S,T){try{var F=Fe.getStreamFromFD(f),W=qm(F,m,S);return lt[T>>2]=W,0}catch(tt){if(typeof N>"u"||tt.name!=="ErrnoError")throw tt;return tt.errno}}N.createPreloadedFile=Nn,N.staticInit(),Yr(),Qt=i.BindingError=class extends Error{constructor(m){super(m),this.name="BindingError"}},Kt=i.InternalError=class extends Error{constructor(m){super(m),this.name="InternalError"}},c(),Eu=i.UnboundTypeError=kp(Error,"UnboundTypeError");var Jm={M:zr,N:Vr,h:Hr,I:gi,Q:Pi,F:Gr,G:Zi,j:Xr,B:Wr,H:Gs,C:_i,A:Xs,w:Ws,V:Ue,U:B,n:et,f:Hp,b:Xp,a:Wp,m:Yp,i:Qp,W:tm,J:nm,x:rm,L:sm,e:om,q:lm,T:s,u:cm,p:fm,k:dm,Y:pm,X:mm,r:gm,Z:_m,o:vm,c:ym,d:xm,t:Em,s:Tm,O:Am,K:Cm,R:Rm,z:Lm,y:Dm,D:Um,E:Bm,S:Gm,g:Xm,P:Ym,v:$m,l:Zm},fn=P(),jm=()=>(jm=fn.$)(),Lu=f=>(Lu=fn.aa)(f),Lc=f=>(Lc=fn.ca)(f),Ri=f=>(Ri=fn.da)(f),Nu=f=>(Nu=fn.ea)(f),Du=(f,m)=>(Du=fn.fa)(f,m),Ou=()=>(Ou=fn.ga)(),Km=i.dynCall_viijii=(f,m,S,T,F,W,tt)=>(Km=i.dynCall_viijii=fn.ha)(f,m,S,T,F,W,tt),Qm=i.dynCall_viiiiji=(f,m,S,T,F,W,tt,ot)=>(Qm=i.dynCall_viiiiji=fn.ia)(f,m,S,T,F,W,tt,ot),tg=i.dynCall_jiji=(f,m,S,T,F)=>(tg=i.dynCall_jiji=fn.ja)(f,m,S,T,F),eg=i.dynCall_iiiiij=(f,m,S,T,F,W,tt)=>(eg=i.dynCall_iiiiij=fn.ka)(f,m,S,T,F,W,tt),ng=i.dynCall_iiiiijj=(f,m,S,T,F,W,tt,ot,At)=>(ng=i.dynCall_iiiiijj=fn.la)(f,m,S,T,F,W,tt,ot,At),ig=i.dynCall_iiiiiijj=(f,m,S,T,F,W,tt,ot,At,Ht)=>(ig=i.dynCall_iiiiiijj=fn.ma)(f,m,S,T,F,W,tt,ot,At,Ht),na,Fu;ut=function f(){na||Uu(),na||(ut=f)};function Uu(){if(ue>0||!Fu&&(Fu=1,Te(),ue>0))return;function f(){na||(na=1,i.calledRun=1,!C&&(Me(),r(i),i.onRuntimeInitialized?.(),Ae()))}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),f()},1)):f()}if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Uu(),e=l,e})})();typeof Hu=="object"&&typeof Oc=="object"?Oc.exports=Vu:typeof define=="function"&&define.amd&&define([],()=>Vu)});var Xu=Bu((Lb,ia)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof ia<"u"&&ia.exports?(ia.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var r={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?r.chrome=1:r.chrome=0,i.indexOf("chromium")!=-1?r.chromium=1:r.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?r.safari=1:r.safari=0,i.indexOf("firefox")!=-1?r.firefox=1:r.firefox=0,i.indexOf("firefox/17")!=-1?r.firefox17=1:r.firefox17=0,i.indexOf("firefox/15")!=-1?r.firefox15=1:r.firefox15=0,i.indexOf("firefox/3")!=-1?r.firefox3=1:r.firefox3=0,i.indexOf("opera")!=-1?r.opera=1:r.opera=0,i.indexOf("msie 10")!=-1?r.msie10=1:r.msie10=0,i.indexOf("msie 9")!=-1?r.msie9=1:r.msie9=0,i.indexOf("msie 8")!=-1?r.msie8=1:r.msie8=0,i.indexOf("msie 7")!=-1?r.msie7=1:r.msie7=0,i.indexOf("msie ")!=-1?r.msie=1:r.msie=0,n.biginteger_used=null;var o,l=0xdeadbeefcafe,h=(l&16777215)==15715070;function u(s,a,c){n.biginteger_used=1,s!=null&&(typeof s=="number"&&typeof a>"u"?this.fromInt(s):typeof s=="number"?this.fromNumber(s,a,c):a==null&&typeof s!="string"?this.fromString(s,256):this.fromString(s,a))}function d(){return new u(null,void 0,void 0)}function g(s,a,c,p,M,I){for(;--I>=0;){var B=a*this[s++]+c[p]+M;M=Math.floor(B/67108864),c[p++]=B&67108863}return M}function v(s,a,c,p,M,I){for(var B=a&32767,Q=a>>15;--I>=0;){var et=this[s]&32767,dt=this[s++]>>15,Dt=Q*et+dt*B;et=B*et+((Dt&32767)<<15)+c[p]+(M&1073741823),M=(et>>>30)+(Dt>>>15)+Q*dt+(M>>>30),c[p++]=et&1073741823}return M}function _(s,a,c,p,M,I){for(var B=a&16383,Q=a>>14;--I>=0;){var et=this[s]&16383,dt=this[s++]>>14,Dt=Q*et+dt*B;et=B*et+((Dt&16383)<<14)+c[p]+M,M=(et>>28)+(Dt>>14)+Q*dt,c[p++]=et&268435455}return M}h&&e=="Microsoft Internet Explorer"?(u.prototype.am=v,o=30):h&&e!="Netscape"?(u.prototype.am=g,o=26):(u.prototype.am=_,o=28),u.prototype.DB=o,u.prototype.DM=(1<<o)-1,u.prototype.DV=1<<o;var x=52;u.prototype.FV=Math.pow(2,x),u.prototype.F1=x-o,u.prototype.F2=2*o-x;var w="0123456789abcdefghijklmnopqrstuvwxyz",E=new Array,b,y;for(b=48,y=0;y<=9;++y)E[b++]=y;for(b=97,y=10;y<36;++y)E[b++]=y;for(b=65,y=10;y<36;++y)E[b++]=y;function L(s){return w.charAt(s)}function V(s,a){var c=E[s.charCodeAt(a)];return c??-1}function A(s){for(var a=this.t-1;a>=0;--a)s[a]=this[a];s.t=this.t,s.s=this.s}function R(s){this.t=1,this.s=s<0?-1:0,s>0?this[0]=s:s<-1?this[0]=s+this.DV:this.t=0}function D(s){var a=d();return a.fromInt(s),a}function H(s,a){var c;if(a==16)c=4;else if(a==8)c=3;else if(a==256)c=8;else if(a==2)c=1;else if(a==32)c=5;else if(a==4)c=2;else{this.fromRadix(s,a);return}this.t=0,this.s=0;for(var p=s.length,M=!1,I=0;--p>=0;){var B=c==8?s[p]&255:V(s,p);if(B<0){s.charAt(p)=="-"&&(M=!0);continue}M=!1,I==0?this[this.t++]=B:I+c>this.DB?(this[this.t-1]|=(B&(1<<this.DB-I)-1)<<I,this[this.t++]=B>>this.DB-I):this[this.t-1]|=B<<I,I+=c,I>=this.DB&&(I-=this.DB)}c==8&&(s[0]&128)!=0&&(this.s=-1,I>0&&(this[this.t-1]|=(1<<this.DB-I)-1<<I)),this.clamp(),M&&u.ZERO.subTo(this,this)}function C(){for(var s=this.s&this.DM;this.t>0&&this[this.t-1]==s;)--this.t}function k(s){if(this.s<0)return"-"+this.negate().toString(s);var a;if(s==16)a=4;else if(s==8)a=3;else if(s==2)a=1;else if(s==32)a=5;else if(s==4)a=2;else return this.toRadix(s);var c=(1<<a)-1,p,M=!1,I="",B=this.t,Q=this.DB-B*this.DB%a;if(B-- >0)for(Q<this.DB&&(p=this[B]>>Q)>0&&(M=!0,I=L(p));B>=0;)Q<a?(p=(this[B]&(1<<Q)-1)<<a-Q,p|=this[--B]>>(Q+=this.DB-a)):(p=this[B]>>(Q-=a)&c,Q<=0&&(Q+=this.DB,--B)),p>0&&(M=!0),M&&(I+=L(p));return M?I:"0"}function G(){var s=d();return u.ZERO.subTo(this,s),s}function Y(){return this.s<0?this.negate():this}function Z(s){var a=this.s-s.s;if(a!=0)return a;var c=this.t;if(a=c-s.t,a!=0)return this.s<0?-a:a;for(;--c>=0;)if((a=this[c]-s[c])!=0)return a;return 0}function J(s){var a=1,c;return(c=s>>>16)!=0&&(s=c,a+=16),(c=s>>8)!=0&&(s=c,a+=8),(c=s>>4)!=0&&(s=c,a+=4),(c=s>>2)!=0&&(s=c,a+=2),(c=s>>1)!=0&&(s=c,a+=1),a}function j(){return this.t<=0?0:this.DB*(this.t-1)+J(this[this.t-1]^this.s&this.DM)}function K(s,a){var c;for(c=this.t-1;c>=0;--c)a[c+s]=this[c];for(c=s-1;c>=0;--c)a[c]=0;a.t=this.t+s,a.s=this.s}function lt(s,a){for(var c=s;c<this.t;++c)a[c-s]=this[c];a.t=Math.max(this.t-s,0),a.s=this.s}function gt(s,a){var c=s%this.DB,p=this.DB-c,M=(1<<p)-1,I=Math.floor(s/this.DB),B=this.s<<c&this.DM,Q;for(Q=this.t-1;Q>=0;--Q)a[Q+I+1]=this[Q]>>p|B,B=(this[Q]&M)<<c;for(Q=I-1;Q>=0;--Q)a[Q]=0;a[I]=B,a.t=this.t+I+1,a.s=this.s,a.clamp()}function Et(s,a){a.s=this.s;var c=Math.floor(s/this.DB);if(c>=this.t){a.t=0;return}var p=s%this.DB,M=this.DB-p,I=(1<<p)-1;a[0]=this[c]>>p;for(var B=c+1;B<this.t;++B)a[B-c-1]|=(this[B]&I)<<M,a[B-c]=this[B]>>p;p>0&&(a[this.t-c-1]|=(this.s&I)<<M),a.t=this.t-c,a.clamp()}function yt(s,a){for(var c=0,p=0,M=Math.min(s.t,this.t);c<M;)p+=this[c]-s[c],a[c++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p-=s.s;c<this.t;)p+=this[c],a[c++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;c<s.t;)p-=s[c],a[c++]=p&this.DM,p>>=this.DB;p-=s.s}a.s=p<0?-1:0,p<-1?a[c++]=this.DV+p:p>0&&(a[c++]=p),a.t=c,a.clamp()}function It(s,a){var c=this.abs(),p=s.abs(),M=c.t;for(a.t=M+p.t;--M>=0;)a[M]=0;for(M=0;M<p.t;++M)a[M+c.t]=c.am(0,p[M],a,M,0,c.t);a.s=0,a.clamp(),this.s!=s.s&&u.ZERO.subTo(a,a)}function Ot(s){for(var a=this.abs(),c=s.t=2*a.t;--c>=0;)s[c]=0;for(c=0;c<a.t-1;++c){var p=a.am(c,a[c],s,2*c,0,1);(s[c+a.t]+=a.am(c+1,2*a[c],s,2*c+1,p,a.t-c-1))>=a.DV&&(s[c+a.t]-=a.DV,s[c+a.t+1]=1)}s.t>0&&(s[s.t-1]+=a.am(c,a[c],s,2*c,0,1)),s.s=0,s.clamp()}function jt(s,a,c){var p=s.abs();if(!(p.t<=0)){var M=this.abs();if(M.t<p.t){a?.fromInt(0),c!=null&&this.copyTo(c);return}c==null&&(c=d());var I=d(),B=this.s,Q=s.s,et=this.DB-J(p[p.t-1]);et>0?(p.lShiftTo(et,I),M.lShiftTo(et,c)):(p.copyTo(I),M.copyTo(c));var dt=I.t,Dt=I[dt-1];if(Dt!=0){var Lt=Dt*(1<<this.F1)+(dt>1?I[dt-2]>>this.F2:0),kt=this.FV/Lt,de=(1<<this.F1)/Lt,Se=1<<this.F2,Pe=c.t,He=Pe-dt,xn=a??d();for(I.dlShiftTo(He,xn),c.compareTo(xn)>=0&&(c[c.t++]=1,c.subTo(xn,c)),u.ONE.dlShiftTo(dt,xn),xn.subTo(I,I);I.t<dt;)I[I.t++]=0;for(;--He>=0;){var jn=c[--Pe]==Dt?this.DM:Math.floor(c[Pe]*kt+(c[Pe-1]+Se)*de);if((c[Pe]+=I.am(0,jn,c,He,0,dt))<jn)for(I.dlShiftTo(He,xn),c.subTo(xn,c);c[Pe]<--jn;)c.subTo(xn,c)}a!=null&&(c.drShiftTo(dt,a),B!=Q&&u.ZERO.subTo(a,a)),c.t=dt,c.clamp(),et>0&&c.rShiftTo(et,c),B<0&&u.ZERO.subTo(c,c)}}}function ne(s){var a=d();return this.abs().divRemTo(s,null,a),this.s<0&&a.compareTo(u.ZERO)>0&&s.subTo(a,a),a}function Te(s){this.m=s}function Me(s){return s.s<0||s.compareTo(this.m)>=0?s.mod(this.m):s}function Ae(s){return s}function Pt(s){s.divRemTo(this.m,null,s)}function Ut(s,a,c){s.multiplyTo(a,c),this.reduce(c)}function ie(s,a){s.squareTo(a),this.reduce(a)}Te.prototype.convert=Me,Te.prototype.revert=Ae,Te.prototype.reduce=Pt,Te.prototype.mulTo=Ut,Te.prototype.sqrTo=ie;function ue(){if(this.t<1)return 0;var s=this[0];if((s&1)==0)return 0;var a=s&3;return a=a*(2-(s&15)*a)&15,a=a*(2-(s&255)*a)&255,a=a*(2-((s&65535)*a&65535))&65535,a=a*(2-s*a%this.DV)%this.DV,a>0?this.DV-a:-a}function Zt(s){this.m=s,this.mp=s.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<s.DB-15)-1,this.mt2=2*s.t}function ut(s){var a=d();return s.abs().dlShiftTo(this.m.t,a),a.divRemTo(this.m,null,a),s.s<0&&a.compareTo(u.ZERO)>0&&this.m.subTo(a,a),a}function Ve(s){var a=d();return s.copyTo(a),this.reduce(a),a}function at(s){for(;s.t<=this.mt2;)s[s.t++]=0;for(var a=0;a<this.m.t;++a){var c=s[a]&32767,p=c*this.mpl+((c*this.mph+(s[a]>>15)*this.mpl&this.um)<<15)&s.DM;for(c=a+this.m.t,s[c]+=this.m.am(0,p,s,a,0,this.m.t);s[c]>=s.DV;)s[c]-=s.DV,s[++c]++}s.clamp(),s.drShiftTo(this.m.t,s),s.compareTo(this.m)>=0&&s.subTo(this.m,s)}function Nt(s,a){s.squareTo(a),this.reduce(a)}function zt(s,a,c){s.multiplyTo(a,c),this.reduce(c)}Zt.prototype.convert=ut,Zt.prototype.revert=Ve,Zt.prototype.reduce=at,Zt.prototype.mulTo=zt,Zt.prototype.sqrTo=Nt;function Bt(){return(this.t>0?this[0]&1:this.s)==0}function Vt(s,a){if(s>4294967295||s<1)return u.ONE;var c=d(),p=d(),M=a.convert(this),I=J(s)-1;for(M.copyTo(c);--I>=0;)if(a.sqrTo(c,p),(s&1<<I)>0)a.mulTo(p,M,c);else{var B=c;c=p,p=B}return a.revert(c)}function re(s,a){var c;return s<256||a.isEven()?c=new Te(a):c=new Zt(a),this.exp(s,c)}u.prototype.copyTo=A,u.prototype.fromInt=R,u.prototype.fromString=H,u.prototype.clamp=C,u.prototype.dlShiftTo=K,u.prototype.drShiftTo=lt,u.prototype.lShiftTo=gt,u.prototype.rShiftTo=Et,u.prototype.subTo=yt,u.prototype.multiplyTo=It,u.prototype.squareTo=Ot,u.prototype.divRemTo=jt,u.prototype.invDigit=ue,u.prototype.isEven=Bt,u.prototype.exp=Vt,u.prototype.toString=k,u.prototype.negate=G,u.prototype.abs=Y,u.prototype.compareTo=Z,u.prototype.bitLength=j,u.prototype.mod=ne,u.prototype.modPowInt=re,u.ZERO=D(0),u.ONE=D(1);function he(){var s=d();return this.copyTo(s),s}function Yt(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function ae(){return this.t==0?this.s:this[0]<<24>>24}function it(){return this.t==0?this.s:this[0]<<16>>16}function be(s){return Math.floor(Math.LN2*this.DB/Math.log(s))}function oe(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function X(s){if(s==null&&(s=10),this.signum()==0||s<2||s>36)return"0";var a=this.chunkSize(s),c=Math.pow(s,a),p=D(c),M=d(),I=d(),B="";for(this.divRemTo(p,M,I);M.signum()>0;)B=(c+I.intValue()).toString(s).substr(1)+B,M.divRemTo(p,M,I);return I.intValue().toString(s)+B}function P(s,a){this.fromInt(0),a==null&&(a=10);for(var c=this.chunkSize(a),p=Math.pow(a,c),M=!1,I=0,B=0,Q=0;Q<s.length;++Q){var et=V(s,Q);if(et<0){s.charAt(Q)=="-"&&this.signum()==0&&(M=!0);continue}B=a*B+et,++I>=c&&(this.dMultiply(p),this.dAddOffset(B,0),I=0,B=0)}I>0&&(this.dMultiply(Math.pow(a,I)),this.dAddOffset(B,0)),M&&u.ZERO.subTo(this,this)}function nt(s,a,c){if(typeof a=="number")if(s<2)this.fromInt(1);else for(this.fromNumber(s,c),this.testBit(s-1)||this.bitwiseTo(u.ONE.shiftLeft(s-1),qt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(a);)this.dAddOffset(2,0),this.bitLength()>s&&this.subTo(u.ONE.shiftLeft(s-1),this);else{var p=new Array,M=s&7;p.length=(s>>3)+1,a.nextBytes(p),M>0?p[0]&=(1<<M)-1:p[0]=0,this.fromString(p,256)}}function ct(){var s=this.t,a=new Array;a[0]=this.s;var c=this.DB-s*this.DB%8,p,M=0;if(s-- >0)for(c<this.DB&&(p=this[s]>>c)!=(this.s&this.DM)>>c&&(a[M++]=p|this.s<<this.DB-c);s>=0;)c<8?(p=(this[s]&(1<<c)-1)<<8-c,p|=this[--s]>>(c+=this.DB-8)):(p=this[s]>>(c-=8)&255,c<=0&&(c+=this.DB,--s)),(p&128)!=0&&(p|=-256),M==0&&(this.s&128)!=(p&128)&&++M,(M>0||p!=this.s)&&(a[M++]=p);return a}function St(s){return this.compareTo(s)==0}function Tt(s){return this.compareTo(s)<0?this:s}function Ft(s){return this.compareTo(s)>0?this:s}function mt(s,a,c){var p,M,I=Math.min(s.t,this.t);for(p=0;p<I;++p)c[p]=a(this[p],s[p]);if(s.t<this.t){for(M=s.s&this.DM,p=I;p<this.t;++p)c[p]=a(this[p],M);c.t=this.t}else{for(M=this.s&this.DM,p=I;p<s.t;++p)c[p]=a(M,s[p]);c.t=s.t}c.s=a(this.s,s.s),c.clamp()}function Ct(s,a){return s&a}function Gt(s){var a=d();return this.bitwiseTo(s,Ct,a),a}function qt(s,a){return s|a}function $t(s){var a=d();return this.bitwiseTo(s,qt,a),a}function O(s,a){return s^a}function $(s){var a=d();return this.bitwiseTo(s,O,a),a}function q(s,a){return s&~a}function rt(s){var a=d();return this.bitwiseTo(s,q,a),a}function z(){for(var s=d(),a=0;a<this.t;++a)s[a]=this.DM&~this[a];return s.t=this.t,s.s=~this.s,s}function wt(s){var a=d();return s<0?this.rShiftTo(-s,a):this.lShiftTo(s,a),a}function ft(s){var a=d();return s<0?this.lShiftTo(-s,a):this.rShiftTo(s,a),a}function Rt(s){if(s==0)return-1;var a=0;return(s&65535)==0&&(s>>=16,a+=16),(s&255)==0&&(s>>=8,a+=8),(s&15)==0&&(s>>=4,a+=4),(s&3)==0&&(s>>=2,a+=2),(s&1)==0&&++a,a}function pt(){for(var s=0;s<this.t;++s)if(this[s]!=0)return s*this.DB+Rt(this[s]);return this.s<0?this.t*this.DB:-1}function Mt(s){for(var a=0;s!=0;)s&=s-1,++a;return a}function bt(){for(var s=0,a=this.s&this.DM,c=0;c<this.t;++c)s+=Mt(this[c]^a);return s}function Wt(s){var a=Math.floor(s/this.DB);return a>=this.t?this.s!=0:(this[a]&1<<s%this.DB)!=0}function Le(s,a){var c=u.ONE.shiftLeft(s);return this.bitwiseTo(c,a,c),c}function xe(s){return this.changeBit(s,qt)}function Cn(s){return this.changeBit(s,q)}function Nn(s){return this.changeBit(s,O)}function Hs(s,a){for(var c=0,p=0,M=Math.min(s.t,this.t);c<M;)p+=this[c]+s[c],a[c++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p+=s.s;c<this.t;)p+=this[c],a[c++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;c<s.t;)p+=s[c],a[c++]=p&this.DM,p>>=this.DB;p+=s.s}a.s=p<0?-1:0,p>0?a[c++]=p:p<-1&&(a[c++]=this.DV+p),a.t=c,a.clamp()}function Mr(s){var a=d();return this.addTo(s,a),a}function N(s){var a=d();return this.subTo(s,a),a}function Ci(s){var a=d();return this.multiplyTo(s,a),a}function Fe(){var s=d();return this.squareTo(s),s}function zr(s){var a=d();return this.divRemTo(s,a,null),a}function Vr(s){var a=d();return this.divRemTo(s,null,a),a}function Dn(s){var a=d(),c=d();return this.divRemTo(s,a,c),new Array(a,c)}function Jn(s){this[this.t]=this.am(0,s-1,this,0,0,this.t),++this.t,this.clamp()}function Hr(s,a){if(s!=0){for(;this.t<=a;)this[this.t++]=0;for(this[a]+=s;this[a]>=this.DV;)this[a]-=this.DV,++a>=this.t&&(this[this.t++]=0),++this[a]}}function gi(){}function Pi(s){return s}function Gr(s,a,c){s.multiplyTo(a,c)}function Zi(s,a){s.squareTo(a)}gi.prototype.convert=Pi,gi.prototype.revert=Pi,gi.prototype.mulTo=Gr,gi.prototype.sqrTo=Zi;function Xr(s){return this.exp(s,new gi)}function Wr(s,a,c){var p=Math.min(this.t+s.t,a);for(c.s=0,c.t=p;p>0;)c[--p]=0;var M;for(M=c.t-this.t;p<M;++p)c[p+this.t]=this.am(0,s[p],c,p,0,this.t);for(M=Math.min(s.t,a);p<M;++p)this.am(0,s[p],c,p,0,a-p);c.clamp()}function Gs(s,a,c){--a;var p=c.t=this.t+s.t-a;for(c.s=0;--p>=0;)c[p]=0;for(p=Math.max(a-this.t,0);p<s.t;++p)c[this.t+p-a]=this.am(a-p,s[p],c,0,0,this.t+p-a);c.clamp(),c.drShiftTo(1,c)}function _i(s){this.r2=d(),this.q3=d(),u.ONE.dlShiftTo(2*s.t,this.r2),this.mu=this.r2.divide(s),this.m=s}function Xs(s){if(s.s<0||s.t>2*this.m.t)return s.mod(this.m);if(s.compareTo(this.m)<0)return s;var a=d();return s.copyTo(a),this.reduce(a),a}function Ws(s){return s}function Yr(s){for(s.drShiftTo(this.m.t-1,this.r2),s.t>this.m.t+1&&(s.t=this.m.t+1,s.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);s.compareTo(this.r2)<0;)s.dAddOffset(1,this.m.t+1);for(s.subTo(this.r2,s);s.compareTo(this.m)>=0;)s.subTo(this.m,s)}function U(s,a){s.squareTo(a),this.reduce(a)}function st(s,a,c){s.multiplyTo(a,c),this.reduce(c)}_i.prototype.convert=Xs,_i.prototype.revert=Ws,_i.prototype.reduce=Yr,_i.prototype.mulTo=st,_i.prototype.sqrTo=U;function xt(s,a){var c=s.bitLength(),p,M=D(1),I;if(c<=0)return M;c<18?p=1:c<48?p=3:c<144?p=4:c<768?p=5:p=6,c<8?I=new Te(a):a.isEven()?I=new _i(a):I=new Zt(a);var B=new Array,Q=3,et=p-1,dt=(1<<p)-1;if(B[1]=I.convert(this),p>1){var Dt=d();for(I.sqrTo(B[1],Dt);Q<=dt;)B[Q]=d(),I.mulTo(Dt,B[Q-2],B[Q]),Q+=2}var Lt=s.t-1,kt,de=!0,Se=d(),Pe;for(c=J(s[Lt])-1;Lt>=0;){for(c>=et?kt=s[Lt]>>c-et&dt:(kt=(s[Lt]&(1<<c+1)-1)<<et-c,Lt>0&&(kt|=s[Lt-1]>>this.DB+c-et)),Q=p;(kt&1)==0;)kt>>=1,--Q;if((c-=Q)<0&&(c+=this.DB,--Lt),de)B[kt].copyTo(M),de=!1;else{for(;Q>1;)I.sqrTo(M,Se),I.sqrTo(Se,M),Q-=2;Q>0?I.sqrTo(M,Se):(Pe=M,M=Se,Se=Pe),I.mulTo(Se,B[kt],M)}for(;Lt>=0&&(s[Lt]&1<<c)==0;)I.sqrTo(M,Se),Pe=M,M=Se,Se=Pe,--c<0&&(c=this.DB-1,--Lt)}return I.revert(M)}function _t(s){var a=this.s<0?this.negate():this.clone(),c=s.s<0?s.negate():s.clone();if(a.compareTo(c)<0){var p=a;a=c,c=p}var M=a.getLowestSetBit(),I=c.getLowestSetBit();if(I<0)return a;for(M<I&&(I=M),I>0&&(a.rShiftTo(I,a),c.rShiftTo(I,c));a.signum()>0;)(M=a.getLowestSetBit())>0&&a.rShiftTo(M,a),(M=c.getLowestSetBit())>0&&c.rShiftTo(M,c),a.compareTo(c)>=0?(a.subTo(c,a),a.rShiftTo(1,a)):(c.subTo(a,c),c.rShiftTo(1,c));return I>0&&c.lShiftTo(I,c),c}function vt(s){if(s<=0)return 0;var a=this.DV%s,c=this.s<0?s-1:0;if(this.t>0)if(a==0)c=this[0]%s;else for(var p=this.t-1;p>=0;--p)c=(a*c+this[p])%s;return c}function Qt(s){var a=s.isEven();if(this.isEven()&&a||s.signum()==0)return u.ZERO;for(var c=s.clone(),p=this.clone(),M=D(1),I=D(0),B=D(0),Q=D(1);c.signum()!=0;){for(;c.isEven();)c.rShiftTo(1,c),a?((!M.isEven()||!I.isEven())&&(M.addTo(this,M),I.subTo(s,I)),M.rShiftTo(1,M)):I.isEven()||I.subTo(s,I),I.rShiftTo(1,I);for(;p.isEven();)p.rShiftTo(1,p),a?((!B.isEven()||!Q.isEven())&&(B.addTo(this,B),Q.subTo(s,Q)),B.rShiftTo(1,B)):Q.isEven()||Q.subTo(s,Q),Q.rShiftTo(1,Q);c.compareTo(p)>=0?(c.subTo(p,c),a&&M.subTo(B,M),I.subTo(Q,I)):(p.subTo(c,p),a&&B.subTo(M,B),Q.subTo(I,Q))}if(p.compareTo(u.ONE)!=0)return u.ZERO;if(Q.compareTo(s)>=0)return Q.subtract(s);if(Q.signum()<0)Q.addTo(s,Q);else return Q;return Q.signum()<0?Q.add(s):Q}var Xt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Kt=(1<<26)/Xt[Xt.length-1];function le(s){var a,c=this.abs();if(c.t==1&&c[0]<=Xt[Xt.length-1]){for(a=0;a<Xt.length;++a)if(c[0]==Xt[a])return!0;return!1}if(c.isEven())return!1;for(a=1;a<Xt.length;){for(var p=Xt[a],M=a+1;M<Xt.length&&p<Kt;)p*=Xt[M++];for(p=c.modInt(p);a<M;)if(p%Xt[a++]==0)return!1}return c.millerRabin(s)}function fe(s){var a=this.subtract(u.ONE),c=a.getLowestSetBit();if(c<=0)return!1;var p=a.shiftRight(c);s=s+1>>1,s>Xt.length&&(s=Xt.length);for(var M=d(),I=0;I<s;++I){M.fromInt(Xt[Math.floor(Math.random()*Xt.length)]);var B=M.modPow(p,this);if(B.compareTo(u.ONE)!=0&&B.compareTo(a)!=0){for(var Q=1;Q++<c&&B.compareTo(a)!=0;)if(B=B.modPowInt(2,this),B.compareTo(u.ONE)==0)return!1;if(B.compareTo(a)!=0)return!1}}return!0}u.prototype.chunkSize=be,u.prototype.toRadix=X,u.prototype.fromRadix=P,u.prototype.fromNumber=nt,u.prototype.bitwiseTo=mt,u.prototype.changeBit=Le,u.prototype.addTo=Hs,u.prototype.dMultiply=Jn,u.prototype.dAddOffset=Hr,u.prototype.multiplyLowerTo=Wr,u.prototype.multiplyUpperTo=Gs,u.prototype.modInt=vt,u.prototype.millerRabin=fe,u.prototype.clone=he,u.prototype.intValue=Yt,u.prototype.byteValue=ae,u.prototype.shortValue=it,u.prototype.signum=oe,u.prototype.toByteArray=ct,u.prototype.equals=St,u.prototype.min=Tt,u.prototype.max=Ft,u.prototype.and=Gt,u.prototype.or=$t,u.prototype.xor=$,u.prototype.andNot=rt,u.prototype.not=z,u.prototype.shiftLeft=wt,u.prototype.shiftRight=ft,u.prototype.getLowestSetBit=pt,u.prototype.bitCount=bt,u.prototype.testBit=Wt,u.prototype.setBit=xe,u.prototype.clearBit=Cn,u.prototype.flipBit=Nn,u.prototype.add=Mr,u.prototype.subtract=N,u.prototype.multiply=Ci,u.prototype.divide=zr,u.prototype.remainder=Vr,u.prototype.divideAndRemainder=Dn,u.prototype.modPow=xt,u.prototype.modInverse=Qt,u.prototype.pow=Xr,u.prototype.gcd=_t,u.prototype.isProbablePrime=le,u.prototype.square=Fe;var Jt=u;Jt.prototype.IsNegative=function(){return this.compareTo(Jt.ZERO)==-1},Jt.op_Equality=function(s,a){return s.compareTo(a)==0},Jt.op_Inequality=function(s,a){return s.compareTo(a)!=0},Jt.op_GreaterThan=function(s,a){return s.compareTo(a)>0},Jt.op_LessThan=function(s,a){return s.compareTo(a)<0},Jt.op_Addition=function(s,a){return new Jt(s,void 0,void 0).add(new Jt(a,void 0,void 0))},Jt.op_Subtraction=function(s,a){return new Jt(s,void 0,void 0).subtract(new Jt(a,void 0,void 0))},Jt.Int128Mul=function(s,a){return new Jt(s,void 0,void 0).multiply(new Jt(a,void 0,void 0))},Jt.op_Division=function(s,a){return s.divide(a)},Jt.prototype.ToDouble=function(){return parseFloat(this.toString())};var ve=function(s,a){var c;if(typeof Object.getOwnPropertyNames>"u"){for(c in a.prototype)(typeof s.prototype[c]>"u"||s.prototype[c]===Object.prototype[c])&&(s.prototype[c]=a.prototype[c]);for(c in a)typeof s[c]>"u"&&(s[c]=a[c]);s.$baseCtor=a}else{for(var p=Object.getOwnPropertyNames(a.prototype),M=0;M<p.length;M++)typeof Object.getOwnPropertyDescriptor(s.prototype,p[M])>"u"&&Object.defineProperty(s.prototype,p[M],Object.getOwnPropertyDescriptor(a.prototype,p[M]));for(c in a)typeof s[c]>"u"&&(s[c]=a[c]);s.$baseCtor=a}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var s=arguments;this.X=0,this.Y=0,s.length===1?(this.X=s[0].X,this.Y=s[0].Y):s.length===2&&(this.X=s[0],this.Y=s[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(s){this.X=s.X,this.Y=s.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(s,a){this.X=s,this.Y=a},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var s=!0,a=this.m_Parent;a!==null;)s=!s,a=a.m_Parent;return s},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(s){var a=this.m_Childs.length;this.m_Childs.push(s),s.m_Parent=this,s.m_Index=a},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var s=0,a=this.m_AllPolys.length;s<a;s++)this.m_AllPolys[s]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var s=this.m_AllPolys.length;return s>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&s--,s},ve(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(s){return Math.abs(s)},n.Math_Max_Int32_Int32=function(s,a){return Math.max(s,a)},r.msie||r.opera||r.safari?n.Cast_Int32=function(s){return s|0}:n.Cast_Int32=function(s){return~~s},typeof Number.toInteger>"u"&&(Number.toInteger=null),r.chrome?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):~~s}:r.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(s){return Number.toInteger(s)}:r.msie7||r.msie8?n.Cast_Int64=function(s){return parseInt(s,10)}:r.msie?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):s|0}:n.Cast_Int64=function(s){return s<0?Math.ceil(s):Math.floor(s)},n.Clear=function(s){s.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var s=arguments,a=s.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,a===3)this.X=s[0],this.Y=s[1],this.Z=s[2];else if(a===2)this.X=s[0],this.Y=s[1],this.Z=0;else if(a===1)if(s[0]instanceof n.DoublePoint){var c=s[0];this.X=n.Clipper.Round(c.X),this.Y=n.Clipper.Round(c.Y),this.Z=0}else{var p=s[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(a===2)this.X=s[0],this.Y=s[1];else if(a===1)if(s[0]instanceof n.DoublePoint){var c=s[0];this.X=n.Clipper.Round(c.X),this.Y=n.Clipper.Round(c.Y)}else{var p=s[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(s,a){return s.X===a.X&&s.Y===a.Y},n.IntPoint.op_Inequality=function(s,a){return s.X!==a.X||s.Y!==a.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(s){this.X=s.X,this.Y=s.Y,n.use_xyz&&(typeof s.Z>"u"?this.Z=0:this.Z=s.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(s){this.X=n.Clipper.Round(s.X),this.Y=n.Clipper.Round(s.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(s,a,c){this.X=s,this.Y=a,n.use_xyz&&(typeof c>"u"?this.Z=0:this.Z=c)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var s=arguments,a=s.length;if(a===4)this.left=s[0],this.top=s[1],this.right=s[2],this.bottom=s[3];else if(a===1){var c=s[0];this.left=c.left,this.top=c.top,this.right=c.right,this.bottom=c.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(s){this.left=s.left,this.top=s.top,this.right=s.right,this.bottom=s.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(s,a,c,p){this.left=s,this.top=a,this.right=c,this.bottom=p},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(s,a){var c=a.Pt.Y-s.Pt.Y;return c>0?1:c<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(s){return s>-n.ClipperBase.tolerance&&s<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(s){return s.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(s,a){var c=a;do{if(n.IntPoint.op_Equality(c.Pt,s))return!0;c=c.Next}while(c!==a);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(s,a,c,p){return p?s.X===a.X&&s.Y===a.Y||s.X===c.X&&s.Y===c.Y||s.X>a.X==s.X<c.X&&s.Y>a.Y==s.Y<c.Y&&Jt.op_Equality(Jt.Int128Mul(s.X-a.X,c.Y-a.Y),Jt.Int128Mul(c.X-a.X,s.Y-a.Y)):s.X===a.X&&s.Y===a.Y||s.X===c.X&&s.Y===c.Y||s.X>a.X==s.X<c.X&&s.Y>a.Y==s.Y<c.Y&&(s.X-a.X)*(c.Y-a.Y)===(c.X-a.X)*(s.Y-a.Y)},n.ClipperBase.prototype.PointOnPolygon=function(s,a,c){for(var p=a;;){if(this.PointOnLineSegment(s,p.Pt,p.Next.Pt,c))return!0;if(p=p.Next,p===a)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var s=arguments,a=s.length,c,p,M,I,B,Q,et;return a===3?(c=s[0],p=s[1],et=s[2],et?Jt.op_Equality(Jt.Int128Mul(c.Delta.Y,p.Delta.X),Jt.Int128Mul(c.Delta.X,p.Delta.Y)):n.Cast_Int64(c.Delta.Y*p.Delta.X)===n.Cast_Int64(c.Delta.X*p.Delta.Y)):a===4?(M=s[0],I=s[1],B=s[2],et=s[3],et?Jt.op_Equality(Jt.Int128Mul(M.Y-I.Y,I.X-B.X),Jt.Int128Mul(M.X-I.X,I.Y-B.Y)):n.Cast_Int64((M.Y-I.Y)*(I.X-B.X))-n.Cast_Int64((M.X-I.X)*(I.Y-B.Y))===0):(M=s[0],I=s[1],B=s[2],Q=s[3],et=s[4],et?Jt.op_Equality(Jt.Int128Mul(M.Y-I.Y,B.X-Q.X),Jt.Int128Mul(M.X-I.X,B.Y-Q.Y)):n.Cast_Int64((M.Y-I.Y)*(B.X-Q.X))-n.Cast_Int64((M.X-I.X)*(B.Y-Q.Y))===0)},n.ClipperBase.SlopesEqual3=function(s,a,c){return c?Jt.op_Equality(Jt.Int128Mul(s.Delta.Y,a.Delta.X),Jt.Int128Mul(s.Delta.X,a.Delta.Y)):n.Cast_Int64(s.Delta.Y*a.Delta.X)===n.Cast_Int64(s.Delta.X*a.Delta.Y)},n.ClipperBase.SlopesEqual4=function(s,a,c,p){return p?Jt.op_Equality(Jt.Int128Mul(s.Y-a.Y,a.X-c.X),Jt.Int128Mul(s.X-a.X,a.Y-c.Y)):n.Cast_Int64((s.Y-a.Y)*(a.X-c.X))-n.Cast_Int64((s.X-a.X)*(a.Y-c.Y))===0},n.ClipperBase.SlopesEqual5=function(s,a,c,p,M){return M?Jt.op_Equality(Jt.Int128Mul(s.Y-a.Y,c.X-p.X),Jt.Int128Mul(s.X-a.X,c.Y-p.Y)):n.Cast_Int64((s.Y-a.Y)*(c.X-p.X))-n.Cast_Int64((s.X-a.X)*(c.Y-p.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var s=0,a=this.m_edges.length;s<a;++s){for(var c=0,p=this.m_edges[s].length;c<p;++c)this.m_edges[s][c]=null;n.Clear(this.m_edges[s])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var s=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=s}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(s,a){a.Value?(s.X>n.ClipperBase.hiRange||s.Y>n.ClipperBase.hiRange||-s.X>n.ClipperBase.hiRange||-s.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(s.X>n.ClipperBase.loRange||s.Y>n.ClipperBase.loRange||-s.X>n.ClipperBase.loRange||-s.Y>n.ClipperBase.loRange)&&(a.Value=!0,this.RangeTest(s,a))},n.ClipperBase.prototype.InitEdge=function(s,a,c,p){s.Next=a,s.Prev=c,s.Curr.X=p.X,s.Curr.Y=p.Y,n.use_xyz&&(s.Curr.Z=p.Z),s.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(s,a){s.Curr.Y>=s.Next.Curr.Y?(s.Bot.X=s.Curr.X,s.Bot.Y=s.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Curr.Z),s.Top.X=s.Next.Curr.X,s.Top.Y=s.Next.Curr.Y,n.use_xyz&&(s.Top.Z=s.Next.Curr.Z)):(s.Top.X=s.Curr.X,s.Top.Y=s.Curr.Y,n.use_xyz&&(s.Top.Z=s.Curr.Z),s.Bot.X=s.Next.Curr.X,s.Bot.Y=s.Next.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Next.Curr.Z)),this.SetDx(s),s.PolyTyp=a},n.ClipperBase.prototype.FindNextLocMin=function(s){for(var a;;){for(;n.IntPoint.op_Inequality(s.Bot,s.Prev.Bot)||n.IntPoint.op_Equality(s.Curr,s.Top);)s=s.Next;if(s.Dx!==n.ClipperBase.horizontal&&s.Prev.Dx!==n.ClipperBase.horizontal)break;for(;s.Prev.Dx===n.ClipperBase.horizontal;)s=s.Prev;for(a=s;s.Dx===n.ClipperBase.horizontal;)s=s.Next;if(s.Top.Y!==s.Prev.Bot.Y){a.Prev.Bot.X<s.Bot.X&&(s=a);break}}return s},n.ClipperBase.prototype.ProcessBound=function(s,a){var c,p=s,M;if(p.OutIdx===n.ClipperBase.Skip){if(s=p,a){for(;s.Top.Y===s.Next.Bot.Y;)s=s.Next;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Prev}else{for(;s.Top.Y===s.Prev.Bot.Y;)s=s.Prev;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Next}if(s===p)a?p=s.Next:p=s.Prev;else{a?s=p.Next:s=p.Prev;var I=new n.LocalMinima;I.Next=null,I.Y=s.Bot.Y,I.LeftBound=null,I.RightBound=s,s.WindDelta=0,p=this.ProcessBound(s,a),this.InsertLocalMinima(I)}return p}if(s.Dx===n.ClipperBase.horizontal&&(a?c=s.Prev:c=s.Next,c.Dx===n.ClipperBase.horizontal?c.Bot.X!==s.Bot.X&&c.Top.X!==s.Bot.X&&this.ReverseHorizontal(s):c.Bot.X!==s.Bot.X&&this.ReverseHorizontal(s)),c=s,a){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==n.ClipperBase.Skip;)p=p.Next;if(p.Dx===n.ClipperBase.horizontal&&p.Next.OutIdx!==n.ClipperBase.Skip){for(M=p;M.Prev.Dx===n.ClipperBase.horizontal;)M=M.Prev;M.Prev.Top.X>p.Next.Top.X&&(p=M.Prev)}for(;s!==p;)s.NextInLML=s.Next,s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),s=s.Next;s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==n.ClipperBase.Skip;)p=p.Prev;if(p.Dx===n.ClipperBase.horizontal&&p.Prev.OutIdx!==n.ClipperBase.Skip){for(M=p;M.Next.Dx===n.ClipperBase.horizontal;)M=M.Next;(M.Next.Top.X===p.Prev.Top.X||M.Next.Top.X>p.Prev.Top.X)&&(p=M.Next)}for(;s!==p;)s.NextInLML=s.Prev,s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),s=s.Prev;s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),p=p.Prev}return p},n.ClipperBase.prototype.AddPath=function(s,a,c){n.use_lines?!c&&a===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):c||n.Error("AddPath: Open paths have been disabled.");var p=s.length-1;if(c)for(;p>0&&n.IntPoint.op_Equality(s[p],s[0]);)--p;for(;p>0&&n.IntPoint.op_Equality(s[p],s[p-1]);)--p;if(c&&p<2||!c&&p<1)return!1;for(var M=new Array,I=0;I<=p;I++)M.push(new n.TEdge);var B=!0;M[1].Curr.X=s[1].X,M[1].Curr.Y=s[1].Y,n.use_xyz&&(M[1].Curr.Z=s[1].Z);var Q={Value:this.m_UseFullRange};this.RangeTest(s[0],Q),this.m_UseFullRange=Q.Value,Q.Value=this.m_UseFullRange,this.RangeTest(s[p],Q),this.m_UseFullRange=Q.Value,this.InitEdge(M[0],M[1],M[p],s[0]),this.InitEdge(M[p],M[0],M[p-1],s[p]);for(var I=p-1;I>=1;--I)Q.Value=this.m_UseFullRange,this.RangeTest(s[I],Q),this.m_UseFullRange=Q.Value,this.InitEdge(M[I],M[I+1],M[I-1],s[I]);for(var et=M[0],dt=et,Dt=et;;){if(dt.Curr===dt.Next.Curr&&(c||dt.Next!==et)){if(dt===dt.Next)break;dt===et&&(et=dt.Next),dt=this.RemoveEdge(dt),Dt=dt;continue}if(dt.Prev===dt.Next)break;if(c&&n.ClipperBase.SlopesEqual4(dt.Prev.Curr,dt.Curr,dt.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(dt.Prev.Curr,dt.Curr,dt.Next.Curr))){dt===et&&(et=dt.Next),dt=this.RemoveEdge(dt),dt=dt.Prev,Dt=dt;continue}if(dt=dt.Next,dt===Dt||!c&&dt.Next===et)break}if(!c&&dt===dt.Next||c&&dt.Prev===dt.Next)return!1;c||(this.m_HasOpenPaths=!0,et.Prev.OutIdx=n.ClipperBase.Skip),dt=et;do this.InitEdge2(dt,a),dt=dt.Next,B&&dt.Curr.Y!==et.Curr.Y&&(B=!1);while(dt!==et);if(B){if(c)return!1;dt.Prev.OutIdx=n.ClipperBase.Skip;var Lt=new n.LocalMinima;for(Lt.Next=null,Lt.Y=dt.Bot.Y,Lt.LeftBound=null,Lt.RightBound=dt,Lt.RightBound.Side=n.EdgeSide.esRight,Lt.RightBound.WindDelta=0;dt.Bot.X!==dt.Prev.Top.X&&this.ReverseHorizontal(dt),dt.Next.OutIdx!==n.ClipperBase.Skip;)dt.NextInLML=dt.Next,dt=dt.Next;return this.InsertLocalMinima(Lt),this.m_edges.push(M),!0}this.m_edges.push(M);var kt,de=null;for(n.IntPoint.op_Equality(dt.Prev.Bot,dt.Prev.Top)&&(dt=dt.Next);dt=this.FindNextLocMin(dt),dt!==de;){de===null&&(de=dt);var Lt=new n.LocalMinima;Lt.Next=null,Lt.Y=dt.Bot.Y,dt.Dx<dt.Prev.Dx?(Lt.LeftBound=dt.Prev,Lt.RightBound=dt,kt=!1):(Lt.LeftBound=dt,Lt.RightBound=dt.Prev,kt=!0),Lt.LeftBound.Side=n.EdgeSide.esLeft,Lt.RightBound.Side=n.EdgeSide.esRight,c?Lt.LeftBound.Next===Lt.RightBound?Lt.LeftBound.WindDelta=-1:Lt.LeftBound.WindDelta=1:Lt.LeftBound.WindDelta=0,Lt.RightBound.WindDelta=-Lt.LeftBound.WindDelta,dt=this.ProcessBound(Lt.LeftBound,kt),dt.OutIdx===n.ClipperBase.Skip&&(dt=this.ProcessBound(dt,kt));var Se=this.ProcessBound(Lt.RightBound,!kt);Se.OutIdx===n.ClipperBase.Skip&&(Se=this.ProcessBound(Se,!kt)),Lt.LeftBound.OutIdx===n.ClipperBase.Skip?Lt.LeftBound=null:Lt.RightBound.OutIdx===n.ClipperBase.Skip&&(Lt.RightBound=null),this.InsertLocalMinima(Lt),kt||(dt=Se)}return!0},n.ClipperBase.prototype.AddPaths=function(s,a,c){for(var p=!1,M=0,I=s.length;M<I;++M)this.AddPath(s[M],a,c)&&(p=!0);return p},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(s,a,c){return n.IntPoint.op_Equality(s,c)||n.IntPoint.op_Equality(s,a)||n.IntPoint.op_Equality(c,a)?!1:s.X!==c.X?a.X>s.X==a.X<c.X:a.Y>s.Y==a.Y<c.Y},n.ClipperBase.prototype.RemoveEdge=function(s){s.Prev.Next=s.Next,s.Next.Prev=s.Prev;var a=s.Next;return s.Prev=null,a},n.ClipperBase.prototype.SetDx=function(s){s.Delta.X=s.Top.X-s.Bot.X,s.Delta.Y=s.Top.Y-s.Bot.Y,s.Delta.Y===0?s.Dx=n.ClipperBase.horizontal:s.Dx=s.Delta.X/s.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(s){if(this.m_MinimaList===null)this.m_MinimaList=s;else if(s.Y>=this.m_MinimaList.Y)s.Next=this.m_MinimaList,this.m_MinimaList=s;else{for(var a=this.m_MinimaList;a.Next!==null&&s.Y<a.Next.Y;)a=a.Next;s.Next=a.Next,a.Next=s}},n.ClipperBase.prototype.PopLocalMinima=function(s,a){return a.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===s?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(s){var a=s.Top.X;s.Top.X=s.Bot.X,s.Bot.X=a,n.use_xyz&&(a=s.Top.Z,s.Top.Z=s.Bot.Z,s.Bot.Z=a)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var s=this.m_MinimaList;s!==null;){this.InsertScanbeam(s.Y);var a=s.LeftBound;a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),a=s.RightBound,a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),s=s.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(s){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=s;else if(s>this.m_Scanbeam.Y){var a=new n.Scanbeam;a.Y=s,a.Next=this.m_Scanbeam,this.m_Scanbeam=a}else{for(var c=this.m_Scanbeam;c.Next!==null&&s<=c.Next.Y;)c=c.Next;if(s===c.Y)return;var p=new n.Scanbeam;p.Y=s,p.Next=c.Next,c.Next=p}},n.ClipperBase.prototype.PopScanbeam=function(s){return this.m_Scanbeam===null?(s.v=0,!1):(s.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var s=new n.OutRec;return s.Idx=n.ClipperBase.Unassigned,s.IsHole=!1,s.IsOpen=!1,s.FirstLeft=null,s.Pts=null,s.BottomPt=null,s.PolyNode=null,this.m_PolyOuts.push(s),s.Idx=this.m_PolyOuts.length-1,s},n.ClipperBase.prototype.DisposeOutRec=function(s){var a=this.m_PolyOuts[s];a.Pts=null,a=null,this.m_PolyOuts[s]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(s){s.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var a=s.PrevInAEL,c=s.NextInAEL;return s.NextInLML.OutIdx=s.OutIdx,a!==null?a.NextInAEL=s.NextInLML:this.m_ActiveEdges=s.NextInLML,c!==null&&(c.PrevInAEL=s.NextInLML),s.NextInLML.Side=s.Side,s.NextInLML.WindDelta=s.WindDelta,s.NextInLML.WindCnt=s.WindCnt,s.NextInLML.WindCnt2=s.WindCnt2,s=s.NextInLML,s.Curr.X=s.Bot.X,s.Curr.Y=s.Bot.Y,s.PrevInAEL=a,s.NextInAEL=c,n.ClipperBase.IsHorizontal(s)||this.InsertScanbeam(s.Top.Y),s},n.ClipperBase.prototype.SwapPositionsInAEL=function(s,a){if(!(s.NextInAEL===s.PrevInAEL||a.NextInAEL===a.PrevInAEL)){if(s.NextInAEL===a){var c=a.NextInAEL;c!==null&&(c.PrevInAEL=s);var p=s.PrevInAEL;p!==null&&(p.NextInAEL=a),a.PrevInAEL=p,a.NextInAEL=s,s.PrevInAEL=a,s.NextInAEL=c}else if(a.NextInAEL===s){var M=s.NextInAEL;M!==null&&(M.PrevInAEL=a);var I=a.PrevInAEL;I!==null&&(I.NextInAEL=s),s.PrevInAEL=I,s.NextInAEL=a,a.PrevInAEL=s,a.NextInAEL=M}else{var B=s.NextInAEL,Q=s.PrevInAEL;s.NextInAEL=a.NextInAEL,s.NextInAEL!==null&&(s.NextInAEL.PrevInAEL=s),s.PrevInAEL=a.PrevInAEL,s.PrevInAEL!==null&&(s.PrevInAEL.NextInAEL=s),a.NextInAEL=B,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=a),a.PrevInAEL=Q,a.PrevInAEL!==null&&(a.PrevInAEL.NextInAEL=a)}s.PrevInAEL===null?this.m_ActiveEdges=s:a.PrevInAEL===null&&(this.m_ActiveEdges=a)}},n.ClipperBase.prototype.DeleteFromAEL=function(s){var a=s.PrevInAEL,c=s.NextInAEL;a===null&&c===null&&s!==this.m_ActiveEdges||(a!==null?a.NextInAEL=c:this.m_ActiveEdges=c,c!==null&&(c.PrevInAEL=a),s.NextInAEL=null,s.PrevInAEL=null)},n.Clipper=function(s){typeof s>"u"&&(s=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&s)!==0,this.StrictlySimple=(2&s)!==0,this.PreserveCollinear=(4&s)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(s){var a=new n.Maxima;if(a.X=s,this.m_Maxima===null)this.m_Maxima=a,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(s<this.m_Maxima.X)a.Next=this.m_Maxima,a.Prev=null,this.m_Maxima=a;else{for(var c=this.m_Maxima;c.Next!==null&&s>=c.Next.X;)c=c.Next;if(s===c.X)return;a.Next=c.Next,a.Prev=c,c.Next!==null&&(c.Next.Prev=a),c.Next=a}},n.Clipper.prototype.Execute=function(){var s=arguments,a=s.length,c=s[1]instanceof n.PolyTree;if(a===4&&!c){var p=s[0],M=s[1],I=s[2],B=s[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(M),this.m_SubjFillType=I,this.m_ClipFillType=B,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var Q=this.ExecuteInternal();Q&&this.BuildResult(M)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Q}else if(a===4&&c){var p=s[0],et=s[1],I=s[2],B=s[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=I,this.m_ClipFillType=B,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var Q=this.ExecuteInternal();Q&&this.BuildResult2(et)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Q}else if(a===2&&!c){var p=s[0],M=s[1];return this.Execute(p,M,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(a===2&&c){var p=s[0],et=s[1];return this.Execute(p,et,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(s){if(!(s.FirstLeft===null||s.IsHole!==s.FirstLeft.IsHole&&s.FirstLeft.Pts!==null)){for(var a=s.FirstLeft;a!==null&&(a.IsHole===s.IsHole||a.Pts===null);)a=a.FirstLeft;s.FirstLeft=a}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var s={},a={};if(!this.PopScanbeam(s))return!1;for(this.InsertLocalMinimaIntoAEL(s.v);this.PopScanbeam(a)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(a.v))return!1;this.ProcessEdgesAtTopOfScanbeam(a.v),s.v=a.v,this.InsertLocalMinimaIntoAEL(s.v)}var c,p,M;for(p=0,M=this.m_PolyOuts.length;p<M;p++)c=this.m_PolyOuts[p],!(c.Pts===null||c.IsOpen)&&(c.IsHole^this.ReverseSolution)==this.Area$1(c)>0&&this.ReversePolyPtLinks(c.Pts);for(this.JoinCommonEdges(),p=0,M=this.m_PolyOuts.length;p<M;p++)c=this.m_PolyOuts[p],c.Pts!==null&&(c.IsOpen?this.FixupOutPolyline(c):this.FixupOutPolygon(c));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var s=0,a=this.m_PolyOuts.length;s<a;++s)this.DisposeOutRec(s);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(s,a,c){var p=new n.Join;p.OutPt1=s,p.OutPt2=a,p.OffPt.X=c.X,p.OffPt.Y=c.Y,n.use_xyz&&(p.OffPt.Z=c.Z),this.m_Joins.push(p)},n.Clipper.prototype.AddGhostJoin=function(s,a){var c=new n.Join;c.OutPt1=s,c.OffPt.X=a.X,c.OffPt.Y=a.Y,n.use_xyz&&(c.OffPt.Z=a.Z),this.m_GhostJoins.push(c)},n.Clipper.prototype.SetZ=function(s,a,c){if(this.ZFillFunction!==null){if(s.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(s,a.Bot)?s.Z=a.Bot.Z:n.IntPoint.op_Equality(s,a.Top)?s.Z=a.Top.Z:n.IntPoint.op_Equality(s,c.Bot)?s.Z=c.Bot.Z:n.IntPoint.op_Equality(s,c.Top)?s.Z=c.Top.Z:this.ZFillFunction(a.Bot,a.Top,c.Bot,c.Top,s)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(s){for(var a={},c,p;this.PopLocalMinima(s,a);){c=a.v.LeftBound,p=a.v.RightBound;var M=null;if(c===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(M=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(c,null),this.SetWindingCount(c),this.IsContributing(c)&&(M=this.AddOutPt(c,c.Bot)),this.InsertScanbeam(c.Top.Y)):(this.InsertEdgeIntoAEL(c,null),this.InsertEdgeIntoAEL(p,c),this.SetWindingCount(c),p.WindCnt=c.WindCnt,p.WindCnt2=c.WindCnt2,this.IsContributing(c)&&(M=this.AddLocalMinPoly(c,p,c.Bot)),this.InsertScanbeam(c.Top.Y)),p!==null&&(n.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(c===null||p===null)){if(M!==null&&n.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var I=0,B=this.m_GhostJoins.length;I<B;I++){var Q=this.m_GhostJoins[I];this.HorzSegmentsOverlap(Q.OutPt1.Pt.X,Q.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin(Q.OutPt1,M,Q.OffPt)}if(c.OutIdx>=0&&c.PrevInAEL!==null&&c.PrevInAEL.Curr.X===c.Bot.X&&c.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(c.PrevInAEL.Curr,c.PrevInAEL.Top,c.Curr,c.Top,this.m_UseFullRange)&&c.WindDelta!==0&&c.PrevInAEL.WindDelta!==0){var et=this.AddOutPt(c.PrevInAEL,c.Bot);this.AddJoin(M,et,c.Top)}if(c.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var et=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(M,et,p.Top)}var dt=c.NextInAEL;if(dt!==null)for(;dt!==p;)this.IntersectEdges(p,dt,c.Curr),dt=dt.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(s,a){if(this.m_ActiveEdges===null)s.PrevInAEL=null,s.NextInAEL=null,this.m_ActiveEdges=s;else if(a===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,s))s.PrevInAEL=null,s.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=s,this.m_ActiveEdges=s;else{for(a===null&&(a=this.m_ActiveEdges);a.NextInAEL!==null&&!this.E2InsertsBeforeE1(a.NextInAEL,s);)a=a.NextInAEL;s.NextInAEL=a.NextInAEL,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=s),s.PrevInAEL=a,a.NextInAEL=s}},n.Clipper.prototype.E2InsertsBeforeE1=function(s,a){return a.Curr.X===s.Curr.X?a.Top.Y>s.Top.Y?a.Top.X<n.Clipper.TopX(s,a.Top.Y):s.Top.X>n.Clipper.TopX(a,s.Top.Y):a.Curr.X<s.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(s){var a,c;switch(s.PolyTyp===n.PolyType.ptSubject?(a=this.m_SubjFillType,c=this.m_ClipFillType):(a=this.m_ClipFillType,c=this.m_SubjFillType),a){case n.PolyFillType.pftEvenOdd:if(s.WindDelta===0&&s.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(s.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(s.WindCnt!==1)return!1;break;default:if(s.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctUnion:switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}case n.ClipType.ctDifference:if(s.PolyTyp===n.PolyType.ptSubject)switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctXor:if(s.WindDelta===0)switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(s){for(var a=s.PrevInAEL;a!==null&&(a.PolyTyp!==s.PolyTyp||a.WindDelta===0);)a=a.PrevInAEL;if(a===null){var c=s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;s.WindDelta===0?s.WindCnt=c===n.PolyFillType.pftNegative?-1:1:s.WindCnt=s.WindDelta,s.WindCnt2=0,a=this.m_ActiveEdges}else if(s.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)s.WindCnt=1,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;else if(this.IsEvenOddFillType(s)){if(s.WindDelta===0){for(var p=!0,M=a.PrevInAEL;M!==null;)M.PolyTyp===a.PolyTyp&&M.WindDelta!==0&&(p=!p),M=M.PrevInAEL;s.WindCnt=p?0:1}else s.WindCnt=s.WindDelta;s.WindCnt2=a.WindCnt2,a=a.NextInAEL}else a.WindCnt*a.WindDelta<0?Math.abs(a.WindCnt)>1?a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta:s.WindCnt=s.WindDelta===0?1:s.WindDelta:s.WindDelta===0?s.WindCnt=a.WindCnt<0?a.WindCnt-1:a.WindCnt+1:a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;if(this.IsEvenOddAltFillType(s))for(;a!==s;)a.WindDelta!==0&&(s.WindCnt2=s.WindCnt2===0?1:0),a=a.NextInAEL;else for(;a!==s;)s.WindCnt2+=a.WindDelta,a=a.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(s){this.m_SortedEdges===null?(this.m_SortedEdges=s,s.PrevInSEL=null,s.NextInSEL=null):(s.NextInSEL=this.m_SortedEdges,s.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=s,this.m_SortedEdges=s)},n.Clipper.prototype.PopEdgeFromSEL=function(s){if(s.v=this.m_SortedEdges,s.v===null)return!1;var a=s.v;return this.m_SortedEdges=s.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),a.NextInSEL=null,a.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var s=this.m_ActiveEdges;for(this.m_SortedEdges=s;s!==null;)s.PrevInSEL=s.PrevInAEL,s.NextInSEL=s.NextInAEL,s=s.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(s,a){if(!(s.NextInSEL===null&&s.PrevInSEL===null)&&!(a.NextInSEL===null&&a.PrevInSEL===null)){if(s.NextInSEL===a){var c=a.NextInSEL;c!==null&&(c.PrevInSEL=s);var p=s.PrevInSEL;p!==null&&(p.NextInSEL=a),a.PrevInSEL=p,a.NextInSEL=s,s.PrevInSEL=a,s.NextInSEL=c}else if(a.NextInSEL===s){var c=s.NextInSEL;c!==null&&(c.PrevInSEL=a);var p=a.PrevInSEL;p!==null&&(p.NextInSEL=s),s.PrevInSEL=p,s.NextInSEL=a,a.PrevInSEL=s,a.NextInSEL=c}else{var c=s.NextInSEL,p=s.PrevInSEL;s.NextInSEL=a.NextInSEL,s.NextInSEL!==null&&(s.NextInSEL.PrevInSEL=s),s.PrevInSEL=a.PrevInSEL,s.PrevInSEL!==null&&(s.PrevInSEL.NextInSEL=s),a.NextInSEL=c,a.NextInSEL!==null&&(a.NextInSEL.PrevInSEL=a),a.PrevInSEL=p,a.PrevInSEL!==null&&(a.PrevInSEL.NextInSEL=a)}s.PrevInSEL===null?this.m_SortedEdges=s:a.PrevInSEL===null&&(this.m_SortedEdges=a)}},n.Clipper.prototype.AddLocalMaxPoly=function(s,a,c){this.AddOutPt(s,c),a.WindDelta===0&&this.AddOutPt(a,c),s.OutIdx===a.OutIdx?(s.OutIdx=-1,a.OutIdx=-1):s.OutIdx<a.OutIdx?this.AppendPolygon(s,a):this.AppendPolygon(a,s)},n.Clipper.prototype.AddLocalMinPoly=function(s,a,c){var p,M,I;if(n.ClipperBase.IsHorizontal(a)||s.Dx>a.Dx?(p=this.AddOutPt(s,c),a.OutIdx=s.OutIdx,s.Side=n.EdgeSide.esLeft,a.Side=n.EdgeSide.esRight,M=s,M.PrevInAEL===a?I=a.PrevInAEL:I=M.PrevInAEL):(p=this.AddOutPt(a,c),s.OutIdx=a.OutIdx,s.Side=n.EdgeSide.esRight,a.Side=n.EdgeSide.esLeft,M=a,M.PrevInAEL===s?I=s.PrevInAEL:I=M.PrevInAEL),I!==null&&I.OutIdx>=0&&I.Top.Y<c.Y&&M.Top.Y<c.Y){var B=n.Clipper.TopX(I,c.Y),Q=n.Clipper.TopX(M,c.Y);if(B===Q&&M.WindDelta!==0&&I.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(B,c.Y),I.Top,new n.IntPoint2(Q,c.Y),M.Top,this.m_UseFullRange)){var et=this.AddOutPt(I,c);this.AddJoin(p,et,M.Top)}}return p},n.Clipper.prototype.AddOutPt=function(s,a){if(s.OutIdx<0){var c=this.CreateOutRec();c.IsOpen=s.WindDelta===0;var p=new n.OutPt;return c.Pts=p,p.Idx=c.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=p,p.Prev=p,c.IsOpen||this.SetHoleState(s,c),s.OutIdx=c.Idx,p}else{var c=this.m_PolyOuts[s.OutIdx],M=c.Pts,I=s.Side===n.EdgeSide.esLeft;if(I&&n.IntPoint.op_Equality(a,M.Pt))return M;if(!I&&n.IntPoint.op_Equality(a,M.Prev.Pt))return M.Prev;var p=new n.OutPt;return p.Idx=c.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=M,p.Prev=M.Prev,p.Prev.Next=p,M.Prev=p,I&&(c.Pts=p),p}},n.Clipper.prototype.GetLastOutPt=function(s){var a=this.m_PolyOuts[s.OutIdx];return s.Side===n.EdgeSide.esLeft?a.Pts:a.Pts.Prev},n.Clipper.prototype.SwapPoints=function(s,a){var c=new n.IntPoint1(s.Value);s.Value.X=a.Value.X,s.Value.Y=a.Value.Y,n.use_xyz&&(s.Value.Z=a.Value.Z),a.Value.X=c.X,a.Value.Y=c.Y,n.use_xyz&&(a.Value.Z=c.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(s,a,c,p){var M;return s>a&&(M=s,s=a,a=M),c>p&&(M=c,c=p,p=M),s<p&&c<a},n.Clipper.prototype.SetHoleState=function(s,a){for(var c=s.PrevInAEL,p=null;c!==null;)c.OutIdx>=0&&c.WindDelta!==0&&(p===null?p=c:p.OutIdx===c.OutIdx&&(p=null)),c=c.PrevInAEL;p===null?(a.FirstLeft=null,a.IsHole=!1):(a.FirstLeft=this.m_PolyOuts[p.OutIdx],a.IsHole=!a.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(s,a){return s.Y===a.Y?n.ClipperBase.horizontal:(a.X-s.X)/(a.Y-s.Y)},n.Clipper.prototype.FirstIsBottomPt=function(s,a){for(var c=s.Prev;n.IntPoint.op_Equality(c.Pt,s.Pt)&&c!==s;)c=c.Prev;var p=Math.abs(this.GetDx(s.Pt,c.Pt));for(c=s.Next;n.IntPoint.op_Equality(c.Pt,s.Pt)&&c!==s;)c=c.Next;var M=Math.abs(this.GetDx(s.Pt,c.Pt));for(c=a.Prev;n.IntPoint.op_Equality(c.Pt,a.Pt)&&c!==a;)c=c.Prev;var I=Math.abs(this.GetDx(a.Pt,c.Pt));for(c=a.Next;n.IntPoint.op_Equality(c.Pt,a.Pt)&&c!==a;)c=c.Next;var B=Math.abs(this.GetDx(a.Pt,c.Pt));return Math.max(p,M)===Math.max(I,B)&&Math.min(p,M)===Math.min(I,B)?this.Area(s)>0:p>=I&&p>=B||M>=I&&M>=B},n.Clipper.prototype.GetBottomPt=function(s){for(var a=null,c=s.Next;c!==s;)c.Pt.Y>s.Pt.Y?(s=c,a=null):c.Pt.Y===s.Pt.Y&&c.Pt.X<=s.Pt.X&&(c.Pt.X<s.Pt.X?(a=null,s=c):c.Next!==s&&c.Prev!==s&&(a=c)),c=c.Next;if(a!==null)for(;a!==c;)for(this.FirstIsBottomPt(c,a)||(s=a),a=a.Next;n.IntPoint.op_Inequality(a.Pt,s.Pt);)a=a.Next;return s},n.Clipper.prototype.GetLowermostRec=function(s,a){s.BottomPt===null&&(s.BottomPt=this.GetBottomPt(s.Pts)),a.BottomPt===null&&(a.BottomPt=this.GetBottomPt(a.Pts));var c=s.BottomPt,p=a.BottomPt;return c.Pt.Y>p.Pt.Y?s:c.Pt.Y<p.Pt.Y?a:c.Pt.X<p.Pt.X?s:c.Pt.X>p.Pt.X||c.Next===c?a:p.Next===p||this.FirstIsBottomPt(c,p)?s:a},n.Clipper.prototype.OutRec1RightOfOutRec2=function(s,a){do if(s=s.FirstLeft,s===a)return!0;while(s!==null);return!1},n.Clipper.prototype.GetOutRec=function(s){for(var a=this.m_PolyOuts[s];a!==this.m_PolyOuts[a.Idx];)a=this.m_PolyOuts[a.Idx];return a},n.Clipper.prototype.AppendPolygon=function(s,a){var c=this.m_PolyOuts[s.OutIdx],p=this.m_PolyOuts[a.OutIdx],M;this.OutRec1RightOfOutRec2(c,p)?M=p:this.OutRec1RightOfOutRec2(p,c)?M=c:M=this.GetLowermostRec(c,p);var I=c.Pts,B=I.Prev,Q=p.Pts,et=Q.Prev;s.Side===n.EdgeSide.esLeft?a.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(Q),Q.Next=I,I.Prev=Q,B.Next=et,et.Prev=B,c.Pts=et):(et.Next=I,I.Prev=et,Q.Prev=B,B.Next=Q,c.Pts=Q):a.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(Q),B.Next=et,et.Prev=B,Q.Next=I,I.Prev=Q):(B.Next=Q,Q.Prev=B,I.Prev=et,et.Next=I),c.BottomPt=null,M===p&&(p.FirstLeft!==c&&(c.FirstLeft=p.FirstLeft),c.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=c;var dt=s.OutIdx,Dt=a.OutIdx;s.OutIdx=-1,a.OutIdx=-1;for(var Lt=this.m_ActiveEdges;Lt!==null;){if(Lt.OutIdx===Dt){Lt.OutIdx=dt,Lt.Side=s.Side;break}Lt=Lt.NextInAEL}p.Idx=c.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(s){if(s!==null){var a,c;a=s;do c=a.Next,a.Next=a.Prev,a.Prev=c,a=c;while(a!==s)}},n.Clipper.SwapSides=function(s,a){var c=s.Side;s.Side=a.Side,a.Side=c},n.Clipper.SwapPolyIndexes=function(s,a){var c=s.OutIdx;s.OutIdx=a.OutIdx,a.OutIdx=c},n.Clipper.prototype.IntersectEdges=function(s,a,c){var p=s.OutIdx>=0,M=a.OutIdx>=0;if(n.use_xyz&&this.SetZ(c,s,a),n.use_lines&&(s.WindDelta===0||a.WindDelta===0)){if(s.WindDelta===0&&a.WindDelta===0)return;s.PolyTyp===a.PolyTyp&&s.WindDelta!==a.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?s.WindDelta===0?M&&(this.AddOutPt(s,c),p&&(s.OutIdx=-1)):p&&(this.AddOutPt(a,c),M&&(a.OutIdx=-1)):s.PolyTyp!==a.PolyTyp&&(s.WindDelta===0&&Math.abs(a.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||a.WindCnt2===0)?(this.AddOutPt(s,c),p&&(s.OutIdx=-1)):a.WindDelta===0&&Math.abs(s.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||s.WindCnt2===0)&&(this.AddOutPt(a,c),M&&(a.OutIdx=-1)));return}if(s.PolyTyp===a.PolyTyp)if(this.IsEvenOddFillType(s)){var I=s.WindCnt;s.WindCnt=a.WindCnt,a.WindCnt=I}else s.WindCnt+a.WindDelta===0?s.WindCnt=-s.WindCnt:s.WindCnt+=a.WindDelta,a.WindCnt-s.WindDelta===0?a.WindCnt=-a.WindCnt:a.WindCnt-=s.WindDelta;else this.IsEvenOddFillType(a)?s.WindCnt2=s.WindCnt2===0?1:0:s.WindCnt2+=a.WindDelta,this.IsEvenOddFillType(s)?a.WindCnt2=a.WindCnt2===0?1:0:a.WindCnt2-=s.WindDelta;var B,Q,et,dt;s.PolyTyp===n.PolyType.ptSubject?(B=this.m_SubjFillType,et=this.m_ClipFillType):(B=this.m_ClipFillType,et=this.m_SubjFillType),a.PolyTyp===n.PolyType.ptSubject?(Q=this.m_SubjFillType,dt=this.m_ClipFillType):(Q=this.m_ClipFillType,dt=this.m_SubjFillType);var Dt,Lt;switch(B){case n.PolyFillType.pftPositive:Dt=s.WindCnt;break;case n.PolyFillType.pftNegative:Dt=-s.WindCnt;break;default:Dt=Math.abs(s.WindCnt);break}switch(Q){case n.PolyFillType.pftPositive:Lt=a.WindCnt;break;case n.PolyFillType.pftNegative:Lt=-a.WindCnt;break;default:Lt=Math.abs(a.WindCnt);break}if(p&&M)Dt!==0&&Dt!==1||Lt!==0&&Lt!==1||s.PolyTyp!==a.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(s,a,c):(this.AddOutPt(s,c),this.AddOutPt(a,c),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(p)(Lt===0||Lt===1)&&(this.AddOutPt(s,c),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(M)(Dt===0||Dt===1)&&(this.AddOutPt(a,c),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if((Dt===0||Dt===1)&&(Lt===0||Lt===1)){var kt,de;switch(et){case n.PolyFillType.pftPositive:kt=s.WindCnt2;break;case n.PolyFillType.pftNegative:kt=-s.WindCnt2;break;default:kt=Math.abs(s.WindCnt2);break}switch(dt){case n.PolyFillType.pftPositive:de=a.WindCnt2;break;case n.PolyFillType.pftNegative:de=-a.WindCnt2;break;default:de=Math.abs(a.WindCnt2);break}if(s.PolyTyp!==a.PolyTyp)this.AddLocalMinPoly(s,a,c);else if(Dt===1&&Lt===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:kt>0&&de>0&&this.AddLocalMinPoly(s,a,c);break;case n.ClipType.ctUnion:kt<=0&&de<=0&&this.AddLocalMinPoly(s,a,c);break;case n.ClipType.ctDifference:(s.PolyTyp===n.PolyType.ptClip&&kt>0&&de>0||s.PolyTyp===n.PolyType.ptSubject&&kt<=0&&de<=0)&&this.AddLocalMinPoly(s,a,c);break;case n.ClipType.ctXor:this.AddLocalMinPoly(s,a,c);break}else n.Clipper.SwapSides(s,a)}},n.Clipper.prototype.DeleteFromSEL=function(s){var a=s.PrevInSEL,c=s.NextInSEL;a===null&&c===null&&s!==this.m_SortedEdges||(a!==null?a.NextInSEL=c:this.m_SortedEdges=c,c!==null&&(c.PrevInSEL=a),s.NextInSEL=null,s.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var s={};this.PopEdgeFromSEL(s);)this.ProcessHorizontal(s.v)},n.Clipper.prototype.GetHorzDirection=function(s,a){s.Bot.X<s.Top.X?(a.Left=s.Bot.X,a.Right=s.Top.X,a.Dir=n.Direction.dLeftToRight):(a.Left=s.Top.X,a.Right=s.Bot.X,a.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(s){var a={Dir:null,Left:null,Right:null};this.GetHorzDirection(s,a);for(var c=a.Dir,p=a.Left,M=a.Right,I=s.WindDelta===0,B=s,Q=null;B.NextInLML!==null&&n.ClipperBase.IsHorizontal(B.NextInLML);)B=B.NextInLML;B.NextInLML===null&&(Q=this.GetMaximaPair(B));var et=this.m_Maxima;if(et!==null)if(c===n.Direction.dLeftToRight){for(;et!==null&&et.X<=s.Bot.X;)et=et.Next;et!==null&&et.X>=B.Top.X&&(et=null)}else{for(;et.Next!==null&&et.Next.X<s.Bot.X;)et=et.Next;et.X<=B.Top.X&&(et=null)}for(var dt=null;;){for(var Dt=s===B,Lt=this.GetNextInAEL(s,c);Lt!==null;){if(et!==null)if(c===n.Direction.dLeftToRight)for(;et!==null&&et.X<Lt.Curr.X;)s.OutIdx>=0&&!I&&this.AddOutPt(s,new n.IntPoint2(et.X,s.Bot.Y)),et=et.Next;else for(;et!==null&&et.X>Lt.Curr.X;)s.OutIdx>=0&&!I&&this.AddOutPt(s,new n.IntPoint2(et.X,s.Bot.Y)),et=et.Prev;if(c===n.Direction.dLeftToRight&&Lt.Curr.X>M||c===n.Direction.dRightToLeft&&Lt.Curr.X<p||Lt.Curr.X===s.Top.X&&s.NextInLML!==null&&Lt.Dx<s.NextInLML.Dx)break;if(s.OutIdx>=0&&!I){n.use_xyz&&(c===n.Direction.dLeftToRight?this.SetZ(Lt.Curr,s,Lt):this.SetZ(Lt.Curr,Lt,s)),dt=this.AddOutPt(s,Lt.Curr);for(var kt=this.m_SortedEdges;kt!==null;){if(kt.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,kt.Bot.X,kt.Top.X)){var de=this.GetLastOutPt(kt);this.AddJoin(de,dt,kt.Top)}kt=kt.NextInSEL}this.AddGhostJoin(dt,s.Bot)}if(Lt===Q&&Dt){s.OutIdx>=0&&this.AddLocalMaxPoly(s,Q,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(Q);return}if(c===n.Direction.dLeftToRight){var Se=new n.IntPoint2(Lt.Curr.X,s.Curr.Y);this.IntersectEdges(s,Lt,Se)}else{var Se=new n.IntPoint2(Lt.Curr.X,s.Curr.Y);this.IntersectEdges(Lt,s,Se)}var Pe=this.GetNextInAEL(Lt,c);this.SwapPositionsInAEL(s,Lt),Lt=Pe}if(s.NextInLML===null||!n.ClipperBase.IsHorizontal(s.NextInLML))break;s=this.UpdateEdgeIntoAEL(s),s.OutIdx>=0&&this.AddOutPt(s,s.Bot),a={Dir:c,Left:p,Right:M},this.GetHorzDirection(s,a),c=a.Dir,p=a.Left,M=a.Right}if(s.OutIdx>=0&&dt===null){dt=this.GetLastOutPt(s);for(var kt=this.m_SortedEdges;kt!==null;){if(kt.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,kt.Bot.X,kt.Top.X)){var de=this.GetLastOutPt(kt);this.AddJoin(de,dt,kt.Top)}kt=kt.NextInSEL}this.AddGhostJoin(dt,s.Top)}if(s.NextInLML!==null)if(s.OutIdx>=0){if(dt=this.AddOutPt(s,s.Top),s=this.UpdateEdgeIntoAEL(s),s.WindDelta===0)return;var He=s.PrevInAEL,Pe=s.NextInAEL;if(He!==null&&He.Curr.X===s.Bot.X&&He.Curr.Y===s.Bot.Y&&He.WindDelta===0&&He.OutIdx>=0&&He.Curr.Y>He.Top.Y&&n.ClipperBase.SlopesEqual3(s,He,this.m_UseFullRange)){var de=this.AddOutPt(He,s.Bot);this.AddJoin(dt,de,s.Top)}else if(Pe!==null&&Pe.Curr.X===s.Bot.X&&Pe.Curr.Y===s.Bot.Y&&Pe.WindDelta!==0&&Pe.OutIdx>=0&&Pe.Curr.Y>Pe.Top.Y&&n.ClipperBase.SlopesEqual3(s,Pe,this.m_UseFullRange)){var de=this.AddOutPt(Pe,s.Bot);this.AddJoin(dt,de,s.Top)}}else s=this.UpdateEdgeIntoAEL(s);else s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s)},n.Clipper.prototype.GetNextInAEL=function(s,a){return a===n.Direction.dLeftToRight?s.NextInAEL:s.PrevInAEL},n.Clipper.prototype.IsMinima=function(s){return s!==null&&s.Prev.NextInLML!==s&&s.Next.NextInLML!==s},n.Clipper.prototype.IsMaxima=function(s,a){return s!==null&&s.Top.Y===a&&s.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(s,a){return s.Top.Y===a&&s.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(s){return n.IntPoint.op_Equality(s.Next.Top,s.Top)&&s.Next.NextInLML===null?s.Next:n.IntPoint.op_Equality(s.Prev.Top,s.Top)&&s.Prev.NextInLML===null?s.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(s){var a=this.GetMaximaPair(s);return a===null||a.OutIdx===n.ClipperBase.Skip||a.NextInAEL===a.PrevInAEL&&!n.ClipperBase.IsHorizontal(a)?null:a},n.Clipper.prototype.ProcessIntersections=function(s){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(s),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(s){if(this.m_ActiveEdges!==null){var a=this.m_ActiveEdges;for(this.m_SortedEdges=a;a!==null;)a.PrevInSEL=a.PrevInAEL,a.NextInSEL=a.NextInAEL,a.Curr.X=n.Clipper.TopX(a,s),a=a.NextInAEL;for(var c=!0;c&&this.m_SortedEdges!==null;){for(c=!1,a=this.m_SortedEdges;a.NextInSEL!==null;){var p=a.NextInSEL,M=new n.IntPoint0;if(a.Curr.X>p.Curr.X){this.IntersectPoint(a,p,M),M.Y<s&&(M=new n.IntPoint2(n.Clipper.TopX(a,s),s));var I=new n.IntersectNode;I.Edge1=a,I.Edge2=p,I.Pt.X=M.X,I.Pt.Y=M.Y,n.use_xyz&&(I.Pt.Z=M.Z),this.m_IntersectList.push(I),this.SwapPositionsInSEL(a,p),c=!0}else a=p}if(a.PrevInSEL!==null)a.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(s){return s.Edge1.NextInSEL===s.Edge2||s.Edge1.PrevInSEL===s.Edge2},n.Clipper.IntersectNodeSort=function(s,a){return a.Pt.Y-s.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var s=this.m_IntersectList.length,a=0;a<s;a++){if(!this.EdgesAdjacent(this.m_IntersectList[a])){for(var c=a+1;c<s&&!this.EdgesAdjacent(this.m_IntersectList[c]);)c++;if(c===s)return!1;var p=this.m_IntersectList[a];this.m_IntersectList[a]=this.m_IntersectList[c],this.m_IntersectList[c]=p}this.SwapPositionsInSEL(this.m_IntersectList[a].Edge1,this.m_IntersectList[a].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var s=0,a=this.m_IntersectList.length;s<a;s++){var c=this.m_IntersectList[s];this.IntersectEdges(c.Edge1,c.Edge2,c.Pt),this.SwapPositionsInAEL(c.Edge1,c.Edge2)}this.m_IntersectList.length=0};var se=function(s){return s<0?Math.ceil(s-.5):Math.round(s)},Ue=function(s){return s<0?Math.ceil(s-.5):Math.floor(s+.5)},Ze=function(s){return s<0?-Math.round(Math.abs(s)):Math.round(s)},De=function(s){return s<0?(s-=.5,s<-2147483648?Math.ceil(s):s|0):(s+=.5,s>2147483647?Math.floor(s):s|0)};r.msie?n.Clipper.Round=se:r.chromium?n.Clipper.Round=Ze:r.safari?n.Clipper.Round=De:n.Clipper.Round=Ue,n.Clipper.TopX=function(s,a){return a===s.Top.Y?s.Top.X:s.Bot.X+n.Clipper.Round(s.Dx*(a-s.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(s,a,c){c.X=0,c.Y=0;var p,M;if(s.Dx===a.Dx){c.Y=s.Curr.Y,c.X=n.Clipper.TopX(s,c.Y);return}if(s.Delta.X===0)c.X=s.Bot.X,n.ClipperBase.IsHorizontal(a)?c.Y=a.Bot.Y:(M=a.Bot.Y-a.Bot.X/a.Dx,c.Y=n.Clipper.Round(c.X/a.Dx+M));else if(a.Delta.X===0)c.X=a.Bot.X,n.ClipperBase.IsHorizontal(s)?c.Y=s.Bot.Y:(p=s.Bot.Y-s.Bot.X/s.Dx,c.Y=n.Clipper.Round(c.X/s.Dx+p));else{p=s.Bot.X-s.Bot.Y*s.Dx,M=a.Bot.X-a.Bot.Y*a.Dx;var I=(M-p)/(s.Dx-a.Dx);c.Y=n.Clipper.Round(I),Math.abs(s.Dx)<Math.abs(a.Dx)?c.X=n.Clipper.Round(s.Dx*I+p):c.X=n.Clipper.Round(a.Dx*I+M)}if(c.Y<s.Top.Y||c.Y<a.Top.Y){if(s.Top.Y>a.Top.Y)return c.Y=s.Top.Y,c.X=n.Clipper.TopX(a,s.Top.Y),c.X<s.Top.X;c.Y=a.Top.Y,Math.abs(s.Dx)<Math.abs(a.Dx)?c.X=n.Clipper.TopX(s,c.Y):c.X=n.Clipper.TopX(a,c.Y)}c.Y>s.Curr.Y&&(c.Y=s.Curr.Y,Math.abs(s.Dx)>Math.abs(a.Dx)?c.X=n.Clipper.TopX(a,c.Y):c.X=n.Clipper.TopX(s,c.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(s){for(var a=this.m_ActiveEdges;a!==null;){var c=this.IsMaxima(a,s);if(c){var p=this.GetMaximaPairEx(a);c=p===null||!n.ClipperBase.IsHorizontal(p)}if(c){this.StrictlySimple&&this.InsertMaxima(a.Top.X);var M=a.PrevInAEL;this.DoMaxima(a),M===null?a=this.m_ActiveEdges:a=M.NextInAEL}else{if(this.IsIntermediate(a,s)&&n.ClipperBase.IsHorizontal(a.NextInLML)?(a=this.UpdateEdgeIntoAEL(a),a.OutIdx>=0&&this.AddOutPt(a,a.Bot),this.AddEdgeToSEL(a)):(a.Curr.X=n.Clipper.TopX(a,s),a.Curr.Y=s),n.use_xyz&&(a.Top.Y===s?a.Curr.Z=a.Top.Z:a.Bot.Y===s?a.Curr.Z=a.Bot.Z:a.Curr.Z=0),this.StrictlySimple){var M=a.PrevInAEL;if(a.OutIdx>=0&&a.WindDelta!==0&&M!==null&&M.OutIdx>=0&&M.Curr.X===a.Curr.X&&M.WindDelta!==0){var I=new n.IntPoint1(a.Curr);n.use_xyz&&this.SetZ(I,M,a);var B=this.AddOutPt(M,I),Q=this.AddOutPt(a,I);this.AddJoin(B,Q,I)}}a=a.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,a=this.m_ActiveEdges;a!==null;){if(this.IsIntermediate(a,s)){var B=null;a.OutIdx>=0&&(B=this.AddOutPt(a,a.Top)),a=this.UpdateEdgeIntoAEL(a);var M=a.PrevInAEL,et=a.NextInAEL;if(M!==null&&M.Curr.X===a.Bot.X&&M.Curr.Y===a.Bot.Y&&B!==null&&M.OutIdx>=0&&M.Curr.Y===M.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,M.Curr,M.Top,this.m_UseFullRange)&&a.WindDelta!==0&&M.WindDelta!==0){var Q=this.AddOutPt(ePrev2,a.Bot);this.AddJoin(B,Q,a.Top)}else if(et!==null&&et.Curr.X===a.Bot.X&&et.Curr.Y===a.Bot.Y&&B!==null&&et.OutIdx>=0&&et.Curr.Y===et.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,et.Curr,et.Top,this.m_UseFullRange)&&a.WindDelta!==0&&et.WindDelta!==0){var Q=this.AddOutPt(et,a.Bot);this.AddJoin(B,Q,a.Top)}}a=a.NextInAEL}},n.Clipper.prototype.DoMaxima=function(s){var a=this.GetMaximaPairEx(s);if(a===null){s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s);return}for(var c=s.NextInAEL;c!==null&&c!==a;)this.IntersectEdges(s,c,s.Top),this.SwapPositionsInAEL(s,c),c=s.NextInAEL;s.OutIdx===-1&&a.OutIdx===-1?(this.DeleteFromAEL(s),this.DeleteFromAEL(a)):s.OutIdx>=0&&a.OutIdx>=0?(s.OutIdx>=0&&this.AddLocalMaxPoly(s,a,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(a)):n.use_lines&&s.WindDelta===0?(s.OutIdx>=0&&(this.AddOutPt(s,s.Top),s.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(s),a.OutIdx>=0&&(this.AddOutPt(a,s.Top),a.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(a)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(s){for(var a=0,c=s.length;a<c;a++)s[a].reverse()},n.Clipper.Orientation=function(s){return n.Clipper.Area(s)>=0},n.Clipper.prototype.PointCount=function(s){if(s===null)return 0;var a=0,c=s;do a++,c=c.Next;while(c!==s);return a},n.Clipper.prototype.BuildResult=function(s){n.Clear(s);for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var p=this.m_PolyOuts[a];if(p.Pts!==null){var M=p.Pts.Prev,I=this.PointCount(M);if(!(I<2)){for(var B=new Array(I),Q=0;Q<I;Q++)B[Q]=M.Pt,M=M.Prev;s.push(B)}}}},n.Clipper.prototype.BuildResult2=function(s){s.Clear();for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var p=this.m_PolyOuts[a],M=this.PointCount(p.Pts);if(!(p.IsOpen&&M<2||!p.IsOpen&&M<3)){this.FixHoleLinkage(p);var I=new n.PolyNode;s.m_AllPolys.push(I),p.PolyNode=I,I.m_polygon.length=M;for(var B=p.Pts.Prev,Q=0;Q<M;Q++)I.m_polygon[Q]=B.Pt,B=B.Prev}}for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var p=this.m_PolyOuts[a];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,s.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):s.AddChild(p.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(s){for(var a=s.Pts,c=a.Prev;a!==c;)if(a=a.Next,n.IntPoint.op_Equality(a.Pt,a.Prev.Pt)){a===c&&(c=a.Prev);var p=a.Prev;p.Next=a.Next,a.Next.Prev=p,a=p}a===a.Prev&&(s.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(s){var a=null;s.BottomPt=null;for(var c=s.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(c.Prev===c||c.Prev===c.Next){s.Pts=null;return}if(n.IntPoint.op_Equality(c.Pt,c.Next.Pt)||n.IntPoint.op_Equality(c.Pt,c.Prev.Pt)||n.ClipperBase.SlopesEqual4(c.Prev.Pt,c.Pt,c.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(c.Prev.Pt,c.Pt,c.Next.Pt)))a=null,c.Prev.Next=c.Next,c.Next.Prev=c.Prev,c=c.Prev;else{if(c===a)break;a===null&&(a=c),c=c.Next}}s.Pts=c},n.Clipper.prototype.DupOutPt=function(s,a){var c=new n.OutPt;return c.Pt.X=s.Pt.X,c.Pt.Y=s.Pt.Y,n.use_xyz&&(c.Pt.Z=s.Pt.Z),c.Idx=s.Idx,a?(c.Next=s.Next,c.Prev=s,s.Next.Prev=c,s.Next=c):(c.Prev=s.Prev,c.Next=s,s.Prev.Next=c,s.Prev=c),c},n.Clipper.prototype.GetOverlap=function(s,a,c,p,M){return s<a?c<p?(M.Left=Math.max(s,c),M.Right=Math.min(a,p)):(M.Left=Math.max(s,p),M.Right=Math.min(a,c)):c<p?(M.Left=Math.max(a,c),M.Right=Math.min(s,p)):(M.Left=Math.max(a,p),M.Right=Math.min(s,c)),M.Left<M.Right},n.Clipper.prototype.JoinHorz=function(s,a,c,p,M,I){var B=s.Pt.X>a.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,Q=c.Pt.X>p.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(B===Q)return!1;if(B===n.Direction.dLeftToRight){for(;s.Next.Pt.X<=M.X&&s.Next.Pt.X>=s.Pt.X&&s.Next.Pt.Y===M.Y;)s=s.Next;I&&s.Pt.X!==M.X&&(s=s.Next),a=this.DupOutPt(s,!I),n.IntPoint.op_Inequality(a.Pt,M)&&(s=a,s.Pt.X=M.X,s.Pt.Y=M.Y,n.use_xyz&&(s.Pt.Z=M.Z),a=this.DupOutPt(s,!I))}else{for(;s.Next.Pt.X>=M.X&&s.Next.Pt.X<=s.Pt.X&&s.Next.Pt.Y===M.Y;)s=s.Next;!I&&s.Pt.X!==M.X&&(s=s.Next),a=this.DupOutPt(s,I),n.IntPoint.op_Inequality(a.Pt,M)&&(s=a,s.Pt.X=M.X,s.Pt.Y=M.Y,n.use_xyz&&(s.Pt.Z=M.Z),a=this.DupOutPt(s,I))}if(Q===n.Direction.dLeftToRight){for(;c.Next.Pt.X<=M.X&&c.Next.Pt.X>=c.Pt.X&&c.Next.Pt.Y===M.Y;)c=c.Next;I&&c.Pt.X!==M.X&&(c=c.Next),p=this.DupOutPt(c,!I),n.IntPoint.op_Inequality(p.Pt,M)&&(c=p,c.Pt.X=M.X,c.Pt.Y=M.Y,n.use_xyz&&(c.Pt.Z=M.Z),p=this.DupOutPt(c,!I))}else{for(;c.Next.Pt.X>=M.X&&c.Next.Pt.X<=c.Pt.X&&c.Next.Pt.Y===M.Y;)c=c.Next;!I&&c.Pt.X!==M.X&&(c=c.Next),p=this.DupOutPt(c,I),n.IntPoint.op_Inequality(p.Pt,M)&&(c=p,c.Pt.X=M.X,c.Pt.Y=M.Y,n.use_xyz&&(c.Pt.Z=M.Z),p=this.DupOutPt(c,I))}return B===n.Direction.dLeftToRight===I?(s.Prev=c,c.Next=s,a.Next=p,p.Prev=a):(s.Next=c,c.Prev=s,a.Prev=p,p.Next=a),!0},n.Clipper.prototype.JoinPoints=function(s,a,c){var p=s.OutPt1,M=new n.OutPt,I=s.OutPt2,B=new n.OutPt,Q=s.OutPt1.Pt.Y===s.OffPt.Y;if(Q&&n.IntPoint.op_Equality(s.OffPt,s.OutPt1.Pt)&&n.IntPoint.op_Equality(s.OffPt,s.OutPt2.Pt)){if(a!==c)return!1;for(M=s.OutPt1.Next;M!==p&&n.IntPoint.op_Equality(M.Pt,s.OffPt);)M=M.Next;var et=M.Pt.Y>s.OffPt.Y;for(B=s.OutPt2.Next;B!==I&&n.IntPoint.op_Equality(B.Pt,s.OffPt);)B=B.Next;var dt=B.Pt.Y>s.OffPt.Y;return et===dt?!1:et?(M=this.DupOutPt(p,!1),B=this.DupOutPt(I,!0),p.Prev=I,I.Next=p,M.Next=B,B.Prev=M,s.OutPt1=p,s.OutPt2=M,!0):(M=this.DupOutPt(p,!0),B=this.DupOutPt(I,!1),p.Next=I,I.Prev=p,M.Prev=B,B.Next=M,s.OutPt1=p,s.OutPt2=M,!0)}else if(Q){for(M=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==M&&p.Prev!==I;)p=p.Prev;for(;M.Next.Pt.Y===M.Pt.Y&&M.Next!==p&&M.Next!==I;)M=M.Next;if(M.Next===p||M.Next===I)return!1;for(B=I;I.Prev.Pt.Y===I.Pt.Y&&I.Prev!==B&&I.Prev!==M;)I=I.Prev;for(;B.Next.Pt.Y===B.Pt.Y&&B.Next!==I&&B.Next!==p;)B=B.Next;if(B.Next===I||B.Next===p)return!1;var Dt={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,M.Pt.X,I.Pt.X,B.Pt.X,Dt))return!1;var Lt=Dt.Left,kt=Dt.Right,de=new n.IntPoint0,Se;return p.Pt.X>=Lt&&p.Pt.X<=kt?(de.X=p.Pt.X,de.Y=p.Pt.Y,n.use_xyz&&(de.Z=p.Pt.Z),Se=p.Pt.X>M.Pt.X):I.Pt.X>=Lt&&I.Pt.X<=kt?(de.X=I.Pt.X,de.Y=I.Pt.Y,n.use_xyz&&(de.Z=I.Pt.Z),Se=I.Pt.X>B.Pt.X):M.Pt.X>=Lt&&M.Pt.X<=kt?(de.X=M.Pt.X,de.Y=M.Pt.Y,n.use_xyz&&(de.Z=M.Pt.Z),Se=M.Pt.X>p.Pt.X):(de.X=B.Pt.X,de.Y=B.Pt.Y,n.use_xyz&&(de.Z=B.Pt.Z),Se=B.Pt.X>I.Pt.X),s.OutPt1=p,s.OutPt2=I,this.JoinHorz(p,M,I,B,de,Se)}else{for(M=p.Next;n.IntPoint.op_Equality(M.Pt,p.Pt)&&M!==p;)M=M.Next;var Pe=M.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,M.Pt,s.OffPt,this.m_UseFullRange);if(Pe){for(M=p.Prev;n.IntPoint.op_Equality(M.Pt,p.Pt)&&M!==p;)M=M.Prev;if(M.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,M.Pt,s.OffPt,this.m_UseFullRange))return!1}for(B=I.Next;n.IntPoint.op_Equality(B.Pt,I.Pt)&&B!==I;)B=B.Next;var He=B.Pt.Y>I.Pt.Y||!n.ClipperBase.SlopesEqual4(I.Pt,B.Pt,s.OffPt,this.m_UseFullRange);if(He){for(B=I.Prev;n.IntPoint.op_Equality(B.Pt,I.Pt)&&B!==I;)B=B.Prev;if(B.Pt.Y>I.Pt.Y||!n.ClipperBase.SlopesEqual4(I.Pt,B.Pt,s.OffPt,this.m_UseFullRange))return!1}return M===p||B===I||M===B||a===c&&Pe===He?!1:Pe?(M=this.DupOutPt(p,!1),B=this.DupOutPt(I,!0),p.Prev=I,I.Next=p,M.Next=B,B.Prev=M,s.OutPt1=p,s.OutPt2=M,!0):(M=this.DupOutPt(p,!0),B=this.DupOutPt(I,!1),p.Next=I,I.Prev=p,M.Prev=B,B.Next=M,s.OutPt1=p,s.OutPt2=M,!0)}},n.Clipper.GetBounds=function(s){for(var a=0,c=s.length;a<c&&s[a].length===0;)a++;if(a===c)return new n.IntRect(0,0,0,0);var p=new n.IntRect;for(p.left=s[a][0].X,p.right=p.left,p.top=s[a][0].Y,p.bottom=p.top;a<c;a++)for(var M=0,I=s[a].length;M<I;M++)s[a][M].X<p.left?p.left=s[a][M].X:s[a][M].X>p.right&&(p.right=s[a][M].X),s[a][M].Y<p.top?p.top=s[a][M].Y:s[a][M].Y>p.bottom&&(p.bottom=s[a][M].Y);return p},n.Clipper.prototype.GetBounds2=function(s){var a=s,c=new n.IntRect;for(c.left=s.Pt.X,c.right=s.Pt.X,c.top=s.Pt.Y,c.bottom=s.Pt.Y,s=s.Next;s!==a;)s.Pt.X<c.left&&(c.left=s.Pt.X),s.Pt.X>c.right&&(c.right=s.Pt.X),s.Pt.Y<c.top&&(c.top=s.Pt.Y),s.Pt.Y>c.bottom&&(c.bottom=s.Pt.Y),s=s.Next;return c},n.Clipper.PointInPolygon=function(s,a){var c=0,p=a.length;if(p<3)return 0;for(var M=a[0],I=1;I<=p;++I){var B=I===p?a[0]:a[I];if(B.Y===s.Y&&(B.X===s.X||M.Y===s.Y&&B.X>s.X==M.X<s.X))return-1;if(M.Y<s.Y!=B.Y<s.Y){if(M.X>=s.X)if(B.X>s.X)c=1-c;else{var Q=(M.X-s.X)*(B.Y-s.Y)-(B.X-s.X)*(M.Y-s.Y);if(Q===0)return-1;Q>0==B.Y>M.Y&&(c=1-c)}else if(B.X>s.X){var Q=(M.X-s.X)*(B.Y-s.Y)-(B.X-s.X)*(M.Y-s.Y);if(Q===0)return-1;Q>0==B.Y>M.Y&&(c=1-c)}}M=B}return c},n.Clipper.prototype.PointInPolygon=function(s,a){var c=0,p=a,M=s.X,I=s.Y,B=a.Pt.X,Q=a.Pt.Y;do{a=a.Next;var et=a.Pt.X,dt=a.Pt.Y;if(dt===I&&(et===M||Q===I&&et>M==B<M))return-1;if(Q<I!=dt<I){if(B>=M)if(et>M)c=1-c;else{var Dt=(B-M)*(dt-I)-(et-M)*(Q-I);if(Dt===0)return-1;Dt>0==dt>Q&&(c=1-c)}else if(et>M){var Dt=(B-M)*(dt-I)-(et-M)*(Q-I);if(Dt===0)return-1;Dt>0==dt>Q&&(c=1-c)}}B=et,Q=dt}while(p!==a);return c},n.Clipper.prototype.Poly2ContainsPoly1=function(s,a){var c=s;do{var p=this.PointInPolygon(c.Pt,a);if(p>=0)return p>0;c=c.Next}while(c!==s);return!0},n.Clipper.prototype.FixupFirstLefts1=function(s,a){for(var c,p,M=0,I=this.m_PolyOuts.length;M<I;M++)c=this.m_PolyOuts[M],p=n.Clipper.ParseFirstLeft(c.FirstLeft),c.Pts!==null&&p===s&&this.Poly2ContainsPoly1(c.Pts,a.Pts)&&(c.FirstLeft=a)},n.Clipper.prototype.FixupFirstLefts2=function(s,a){for(var c=a.FirstLeft,p,M,I=0,B=this.m_PolyOuts.length;I<B;I++)p=this.m_PolyOuts[I],!(p.Pts===null||p===a||p===s)&&(M=n.Clipper.ParseFirstLeft(p.FirstLeft),!(M!==c&&M!==s&&M!==a)&&(this.Poly2ContainsPoly1(p.Pts,s.Pts)?p.FirstLeft=s:this.Poly2ContainsPoly1(p.Pts,a.Pts)?p.FirstLeft=a:(p.FirstLeft===s||p.FirstLeft===a)&&(p.FirstLeft=c)))},n.Clipper.prototype.FixupFirstLefts3=function(s,a){for(var c,p,M=0,I=this.m_PolyOuts.length;M<I;M++)c=this.m_PolyOuts[M],p=n.Clipper.ParseFirstLeft(c.FirstLeft),c.Pts!==null&&p===s&&(c.FirstLeft=a)},n.Clipper.ParseFirstLeft=function(s){for(;s!==null&&s.Pts===null;)s=s.FirstLeft;return s},n.Clipper.prototype.JoinCommonEdges=function(){for(var s=0,a=this.m_Joins.length;s<a;s++){var c=this.m_Joins[s],p=this.GetOutRec(c.OutPt1.Idx),M=this.GetOutRec(c.OutPt2.Idx);if(!(p.Pts===null||M.Pts===null)&&!(p.IsOpen||M.IsOpen)){var I;p===M?I=p:this.OutRec1RightOfOutRec2(p,M)?I=M:this.OutRec1RightOfOutRec2(M,p)?I=p:I=this.GetLowermostRec(p,M),this.JoinPoints(c,p,M)&&(p===M?(p.Pts=c.OutPt1,p.BottomPt=null,M=this.CreateOutRec(),M.Pts=c.OutPt2,this.UpdateOutPtIdxs(M),this.Poly2ContainsPoly1(M.Pts,p.Pts)?(M.IsHole=!p.IsHole,M.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(M,p),(M.IsHole^this.ReverseSolution)==this.Area$1(M)>0&&this.ReversePolyPtLinks(M.Pts)):this.Poly2ContainsPoly1(p.Pts,M.Pts)?(M.IsHole=p.IsHole,p.IsHole=!M.IsHole,M.FirstLeft=p.FirstLeft,p.FirstLeft=M,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,M),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(M.IsHole=p.IsHole,M.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,M))):(M.Pts=null,M.BottomPt=null,M.Idx=p.Idx,p.IsHole=I.IsHole,I===M&&(p.FirstLeft=M.FirstLeft),M.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(M,p)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(s){var a=s.Pts;do a.Idx=s.Idx,a=a.Prev;while(a!==s.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var s=0;s<this.m_PolyOuts.length;){var a=this.m_PolyOuts[s++],c=a.Pts;if(!(c===null||a.IsOpen))do{for(var p=c.Next;p!==a.Pts;){if(n.IntPoint.op_Equality(c.Pt,p.Pt)&&p.Next!==c&&p.Prev!==c){var M=c.Prev,I=p.Prev;c.Prev=I,I.Next=c,p.Prev=M,M.Next=p,a.Pts=c;var B=this.CreateOutRec();B.Pts=p,this.UpdateOutPtIdxs(B),this.Poly2ContainsPoly1(B.Pts,a.Pts)?(B.IsHole=!a.IsHole,B.FirstLeft=a,this.m_UsingPolyTree&&this.FixupFirstLefts2(B,a)):this.Poly2ContainsPoly1(a.Pts,B.Pts)?(B.IsHole=a.IsHole,a.IsHole=!B.IsHole,B.FirstLeft=a.FirstLeft,a.FirstLeft=B,this.m_UsingPolyTree&&this.FixupFirstLefts2(a,B)):(B.IsHole=a.IsHole,B.FirstLeft=a.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(a,B)),p=c}p=p.Next}c=c.Next}while(c!==a.Pts)}},n.Clipper.Area=function(s){if(!Array.isArray(s))return 0;var a=s.length;if(a<3)return 0;for(var c=0,p=0,M=a-1;p<a;++p)c+=(s[M].X+s[p].X)*(s[M].Y-s[p].Y),M=p;return-c*.5},n.Clipper.prototype.Area=function(s){var a=s;if(s===null)return 0;var c=0;do c=c+(s.Prev.Pt.X+s.Pt.X)*(s.Prev.Pt.Y-s.Pt.Y),s=s.Next;while(s!==a);return c*.5},n.Clipper.prototype.Area$1=function(s){return this.Area(s.Pts)},n.Clipper.SimplifyPolygon=function(s,a){var c=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPath(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,c,a,a),c},n.Clipper.SimplifyPolygons=function(s,a){typeof a>"u"&&(a=n.PolyFillType.pftEvenOdd);var c=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,c,a,a),c},n.Clipper.DistanceSqrd=function(s,a){var c=s.X-a.X,p=s.Y-a.Y;return c*c+p*p},n.Clipper.DistanceFromLineSqrd=function(s,a,c){var p=a.Y-c.Y,M=c.X-a.X,I=p*a.X+M*a.Y;return I=p*s.X+M*s.Y-I,I*I/(p*p+M*M)},n.Clipper.SlopesNearCollinear=function(s,a,c,p){return Math.abs(s.X-a.X)>Math.abs(s.Y-a.Y)?s.X>a.X==s.X<c.X?n.Clipper.DistanceFromLineSqrd(s,a,c)<p:a.X>s.X==a.X<c.X?n.Clipper.DistanceFromLineSqrd(a,s,c)<p:n.Clipper.DistanceFromLineSqrd(c,s,a)<p:s.Y>a.Y==s.Y<c.Y?n.Clipper.DistanceFromLineSqrd(s,a,c)<p:a.Y>s.Y==a.Y<c.Y?n.Clipper.DistanceFromLineSqrd(a,s,c)<p:n.Clipper.DistanceFromLineSqrd(c,s,a)<p},n.Clipper.PointsAreClose=function(s,a,c){var p=s.X-a.X,M=s.Y-a.Y;return p*p+M*M<=c},n.Clipper.ExcludeOp=function(s){var a=s.Prev;return a.Next=s.Next,s.Next.Prev=a,a.Idx=0,a},n.Clipper.CleanPolygon=function(s,a){typeof a>"u"&&(a=1.415);var c=s.length;if(c===0)return new Array;for(var p=new Array(c),M=0;M<c;++M)p[M]=new n.OutPt;for(var M=0;M<c;++M)p[M].Pt=s[M],p[M].Next=p[(M+1)%c],p[M].Next.Prev=p[M],p[M].Idx=0;for(var I=a*a,B=p[0];B.Idx===0&&B.Next!==B.Prev;)n.Clipper.PointsAreClose(B.Pt,B.Prev.Pt,I)?(B=n.Clipper.ExcludeOp(B),c--):n.Clipper.PointsAreClose(B.Prev.Pt,B.Next.Pt,I)?(n.Clipper.ExcludeOp(B.Next),B=n.Clipper.ExcludeOp(B),c-=2):n.Clipper.SlopesNearCollinear(B.Prev.Pt,B.Pt,B.Next.Pt,I)?(B=n.Clipper.ExcludeOp(B),c--):(B.Idx=1,B=B.Next);c<3&&(c=0);for(var Q=new Array(c),M=0;M<c;++M)Q[M]=new n.IntPoint1(B.Pt),B=B.Next;return p=null,Q},n.Clipper.CleanPolygons=function(s,a){for(var c=new Array(s.length),p=0,M=s.length;p<M;p++)c[p]=n.Clipper.CleanPolygon(s[p],a);return c},n.Clipper.Minkowski=function(s,a,c,p){var M=p?1:0,I=s.length,B=a.length,Q=new Array;if(c)for(var et=0;et<B;et++){for(var dt=new Array(I),Dt=0,Lt=s.length,kt=s[Dt];Dt<Lt;Dt++,kt=s[Dt])dt[Dt]=new n.IntPoint2(a[et].X+kt.X,a[et].Y+kt.Y);Q.push(dt)}else for(var et=0;et<B;et++){for(var dt=new Array(I),Dt=0,Lt=s.length,kt=s[Dt];Dt<Lt;Dt++,kt=s[Dt])dt[Dt]=new n.IntPoint2(a[et].X-kt.X,a[et].Y-kt.Y);Q.push(dt)}for(var de=new Array,et=0;et<B-1+M;et++)for(var Dt=0;Dt<I;Dt++){var Se=new Array;Se.push(Q[et%B][Dt%I]),Se.push(Q[(et+1)%B][Dt%I]),Se.push(Q[(et+1)%B][(Dt+1)%I]),Se.push(Q[et%B][(Dt+1)%I]),n.Clipper.Orientation(Se)||Se.reverse(),de.push(Se)}return de},n.Clipper.MinkowskiSum=function(s,a,c){if(a[0]instanceof Array){for(var M=a,B=new n.Paths,I=new n.Clipper,Q=0;Q<M.length;++Q){var et=n.Clipper.Minkowski(s,M[Q],!0,c);if(I.AddPaths(et,n.PolyType.ptSubject,!0),c){var p=n.Clipper.TranslatePath(M[Q],s[0]);I.AddPath(p,n.PolyType.ptClip,!0)}}return I.Execute(n.ClipType.ctUnion,B,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),B}else{var p=a,M=n.Clipper.Minkowski(s,p,!0,c),I=new n.Clipper;return I.AddPaths(M,n.PolyType.ptSubject,!0),I.Execute(n.ClipType.ctUnion,M,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),M}},n.Clipper.TranslatePath=function(s,a){for(var c=new n.Path,p=0;p<s.length;p++)c.push(new n.IntPoint2(s[p].X+a.X,s[p].Y+a.Y));return c},n.Clipper.MinkowskiDiff=function(s,a){var c=n.Clipper.Minkowski(s,a,!1,!0),p=new n.Clipper;return p.AddPaths(c,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),c},n.Clipper.PolyTreeToPaths=function(s){var a=new Array;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntAny,a),a},n.Clipper.AddPolyNodeToPaths=function(s,a,c){var p=!0;switch(a){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:p=!s.IsOpen;break;default:break}s.m_polygon.length>0&&p&&c.push(s.m_polygon);for(var M=0,I=s.Childs(),B=I.length,Q=I[M];M<B;M++,Q=I[M])n.Clipper.AddPolyNodeToPaths(Q,a,c)},n.Clipper.OpenPathsFromPolyTree=function(s){for(var a=new n.Paths,c=0,p=s.ChildCount();c<p;c++)s.Childs()[c].IsOpen&&a.push(s.Childs()[c].m_polygon);return a},n.Clipper.ClosedPathsFromPolyTree=function(s){var a=new n.Paths;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntClosed,a),a},ve(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(s,a){typeof s>"u"&&(s=2),typeof a>"u"&&(a=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=s,this.ArcTolerance=a,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(s,a,c){var p=s.length-1;if(!(p<0)){var M=new n.PolyNode;if(M.m_jointype=a,M.m_endtype=c,c===n.EndType.etClosedLine||c===n.EndType.etClosedPolygon)for(;p>0&&n.IntPoint.op_Equality(s[0],s[p]);)p--;M.m_polygon.push(s[0]);for(var I=0,B=0,Q=1;Q<=p;Q++)n.IntPoint.op_Inequality(M.m_polygon[I],s[Q])&&(I++,M.m_polygon.push(s[Q]),(s[Q].Y>M.m_polygon[B].Y||s[Q].Y===M.m_polygon[B].Y&&s[Q].X<M.m_polygon[B].X)&&(B=I));if(!(c===n.EndType.etClosedPolygon&&I<2)&&(this.m_polyNodes.AddChild(M),c===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,B);else{var et=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(M.m_polygon[B].Y>et.Y||M.m_polygon[B].Y===et.Y&&M.m_polygon[B].X<et.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,B))}}},n.ClipperOffset.prototype.AddPaths=function(s,a,c){for(var p=0,M=s.length;p<M;p++)this.AddPath(s[p],a,c)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];(a.m_endtype===n.EndType.etClosedPolygon||a.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(a.m_polygon))&&a.m_polygon.reverse()}else for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];a.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(a.m_polygon)&&a.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(s,a){var c=a.X-s.X,p=a.Y-s.Y;if(c===0&&p===0)return new n.DoublePoint2(0,0);var M=1/Math.sqrt(c*c+p*p);return c*=M,p*=M,new n.DoublePoint2(p,-c)},n.ClipperOffset.prototype.DoOffset=function(s){if(this.m_destPolys=new Array,this.m_delta=s,n.ClipperBase.near_zero(s)){for(var a=0;a<this.m_polyNodes.ChildCount();a++){var c=this.m_polyNodes.Childs()[a];c.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(c.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(s)*n.ClipperOffset.def_arc_tolerance?p=Math.abs(s)*n.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var M=3.14159265358979/Math.acos(1-p/Math.abs(s));this.m_sin=Math.sin(n.ClipperOffset.two_pi/M),this.m_cos=Math.cos(n.ClipperOffset.two_pi/M),this.m_StepsPerRad=M/n.ClipperOffset.two_pi,s<0&&(this.m_sin=-this.m_sin);for(var a=0;a<this.m_polyNodes.ChildCount();a++){var c=this.m_polyNodes.Childs()[a];this.m_srcPoly=c.m_polygon;var I=this.m_srcPoly.length;if(!(I===0||s<=0&&(I<3||c.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,I===1){if(c.m_jointype===n.JoinType.jtRound)for(var B=1,Q=0,et=1;et<=M;et++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+B*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Q*s)));var dt=B;B=B*this.m_cos-this.m_sin*Q,Q=dt*this.m_sin+Q*this.m_cos}else for(var B=-1,Q=-1,et=0;et<4;++et)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+B*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Q*s))),B<0?B=1:Q<0?Q=1:B=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var et=0;et<I-1;et++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[et],this.m_srcPoly[et+1]));if(c.m_endtype===n.EndType.etClosedLine||c.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[I-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[I-2])),c.m_endtype===n.EndType.etClosedPolygon){for(var Dt=I-1,et=0;et<I;et++)Dt=this.OffsetPoint(et,Dt,c.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(c.m_endtype===n.EndType.etClosedLine){for(var Dt=I-1,et=0;et<I;et++)Dt=this.OffsetPoint(et,Dt,c.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var Lt=this.m_normals[I-1],et=I-1;et>0;et--)this.m_normals[et]=new n.DoublePoint2(-this.m_normals[et-1].X,-this.m_normals[et-1].Y);this.m_normals[0]=new n.DoublePoint2(-Lt.X,-Lt.Y),Dt=0;for(var et=I-1;et>=0;et--)Dt=this.OffsetPoint(et,Dt,c.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var Dt=0,et=1;et<I-1;++et)Dt=this.OffsetPoint(et,Dt,c.m_jointype);var kt;if(c.m_endtype===n.EndType.etOpenButt){var et=I-1;kt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[et].X+this.m_normals[et].X*s),n.ClipperOffset.Round(this.m_srcPoly[et].Y+this.m_normals[et].Y*s)),this.m_destPoly.push(kt),kt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[et].X-this.m_normals[et].X*s),n.ClipperOffset.Round(this.m_srcPoly[et].Y-this.m_normals[et].Y*s)),this.m_destPoly.push(kt)}else{var et=I-1;Dt=I-2,this.m_sinA=0,this.m_normals[et]=new n.DoublePoint2(-this.m_normals[et].X,-this.m_normals[et].Y),c.m_endtype===n.EndType.etOpenSquare?this.DoSquare(et,Dt):this.DoRound(et,Dt)}for(var et=I-1;et>0;et--)this.m_normals[et]=new n.DoublePoint2(-this.m_normals[et-1].X,-this.m_normals[et-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),Dt=I-1;for(var et=Dt-1;et>0;--et)Dt=this.OffsetPoint(et,Dt,c.m_jointype);c.m_endtype===n.EndType.etOpenButt?(kt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*s)),this.m_destPoly.push(kt),kt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*s)),this.m_destPoly.push(kt)):(Dt=1,this.m_sinA=0,c.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var s=arguments,a=s[0]instanceof n.PolyTree;if(a){var c=s[0],p=s[1];c.Clear(),this.FixOrientations(),this.DoOffset(p);var M=new n.Clipper(0);if(M.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)M.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var I=n.Clipper.GetBounds(this.m_destPolys),B=new n.Path;if(B.push(new n.IntPoint2(I.left-10,I.bottom+10)),B.push(new n.IntPoint2(I.right+10,I.bottom+10)),B.push(new n.IntPoint2(I.right+10,I.top-10)),B.push(new n.IntPoint2(I.left-10,I.top-10)),M.AddPath(B,n.PolyType.ptSubject,!0),M.ReverseSolution=!0,M.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),c.ChildCount()===1&&c.Childs()[0].ChildCount()>0){var Q=c.Childs()[0];c.Childs()[0]=Q.Childs()[0],c.Childs()[0].m_Parent=c;for(var et=1;et<Q.ChildCount();et++)c.AddChild(Q.Childs()[et])}else c.Clear()}}else{var c=s[0],p=s[1];n.Clear(c),this.FixOrientations(),this.DoOffset(p);var M=new n.Clipper(0);if(M.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)M.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var I=n.Clipper.GetBounds(this.m_destPolys),B=new n.Path;B.push(new n.IntPoint2(I.left-10,I.bottom+10)),B.push(new n.IntPoint2(I.right+10,I.bottom+10)),B.push(new n.IntPoint2(I.right+10,I.top-10)),B.push(new n.IntPoint2(I.left-10,I.top-10)),M.AddPath(B,n.PolyType.ptSubject,!0),M.ReverseSolution=!0,M.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),c.length>0&&c.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(s,a,c){if(this.m_sinA=this.m_normals[a].X*this.m_normals[s].Y-this.m_normals[s].X*this.m_normals[a].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[a].X*this.m_normals[s].X+this.m_normals[s].Y*this.m_normals[a].Y;if(p>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),a}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[s])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)));else switch(c){case n.JoinType.jtMiter:{var M=1+(this.m_normals[s].X*this.m_normals[a].X+this.m_normals[s].Y*this.m_normals[a].Y);M>=this.m_miterLim?this.DoMiter(s,a,M):this.DoSquare(s,a);break}case n.JoinType.jtSquare:this.DoSquare(s,a);break;case n.JoinType.jtRound:this.DoRound(s,a);break}return a=s,a},n.ClipperOffset.prototype.DoSquare=function(s,a){var c=Math.tan(Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[a].X-this.m_normals[a].Y*c)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[a].Y+this.m_normals[a].X*c)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[s].X+this.m_normals[s].Y*c)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[s].Y-this.m_normals[s].X*c))))},n.ClipperOffset.prototype.DoMiter=function(s,a,c){var p=this.m_delta/c;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+(this.m_normals[a].X+this.m_normals[s].X)*p),n.ClipperOffset.Round(this.m_srcPoly[s].Y+(this.m_normals[a].Y+this.m_normals[s].Y)*p)))},n.ClipperOffset.prototype.DoRound=function(s,a){for(var c=Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y),p=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(c))),1),M=this.m_normals[a].X,I=this.m_normals[a].Y,B,Q=0;Q<p;++Q)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+M*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+I*this.m_delta))),B=M,M=M*this.m_cos-this.m_sin*I,I=B*this.m_sin+I*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)))},n.Error=function(s){try{throw new Error(s)}catch(a){alert(a.message)}},n.JS={},n.JS.AreaOfPolygon=function(s,a){return a||(a=1),n.Clipper.Area(s)/(a*a)},n.JS.AreaOfPolygons=function(s,a){a||(a=1);for(var c=0,p=0;p<s.length;p++)c+=n.Clipper.Area(s[p]);return c/(a*a)},n.JS.BoundsOfPath=function(s,a){return n.JS.BoundsOfPaths([s],a)},n.JS.BoundsOfPaths=function(s,a){a||(a=1);var c=n.Clipper.GetBounds(s);return c.left/=a,c.bottom/=a,c.right/=a,c.top/=a,c},n.JS.Clean=function(p,a){if(!(p instanceof Array))return[];var c=p[0]instanceof Array,p=n.JS.Clone(p);if(typeof a!="number"||a===null)return n.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||a<0)return p;c||(p=[p]);for(var M=p.length,I,B,Q,et,dt,Dt,Lt,kt=[],de=0;de<M;de++)if(B=p[de],I=B.length,I!==0){if(I<3){Q=B,kt.push(Q);continue}for(Q=B,et=a*a,dt=B[0],Dt=1,Lt=1;Lt<I;Lt++)(B[Lt].X-dt.X)*(B[Lt].X-dt.X)+(B[Lt].Y-dt.Y)*(B[Lt].Y-dt.Y)<=et||(Q[Dt]=B[Lt],dt=B[Lt],Dt++);dt=B[Dt-1],(B[0].X-dt.X)*(B[0].X-dt.X)+(B[0].Y-dt.Y)*(B[0].Y-dt.Y)<=et&&Dt--,Dt<I&&Q.splice(Dt,I-Dt),Q.length&&kt.push(Q)}return!c&&kt.length?kt=kt[0]:!c&&kt.length===0?kt=[]:c&&kt.length===0&&(kt=[[]]),kt},n.JS.Clone=function(s){if(!(s instanceof Array))return[];if(s.length===0)return[];if(s.length===1&&s[0].length===0)return[[]];var a=s[0]instanceof Array;a||(s=[s]);var c=s.length,p,M,I,B,Q=new Array(c);for(M=0;M<c;M++){for(p=s[M].length,B=new Array(p),I=0;I<p;I++)B[I]={X:s[M][I].X,Y:s[M][I].Y};Q[M]=B}return a||(Q=Q[0]),Q},n.JS.Lighten=function(s,a){if(!(s instanceof Array))return[];if(typeof a!="number"||a===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(s);if(s.length===0||s.length===1&&s[0].length===0||a<0)return n.JS.Clone(s);var c=s[0]instanceof Array;c||(s=[s]);var p,M,I,B,Q,et,dt,Dt,Lt,kt,de,Se,Pe,He,xn,jn,Ji,$r=s.length,Qo=a*a,Ii=[];for(p=0;p<$r;p++)if(I=s[p],et=I.length,et!==0){for(B=0;B<1e6;B++){for(Q=[],et=I.length,I[et-1].X!==I[0].X||I[et-1].Y!==I[0].Y?(Se=1,I.push({X:I[0].X,Y:I[0].Y}),et=I.length):Se=0,de=[],M=0;M<et-2;M++)dt=I[M],Lt=I[M+1],Dt=I[M+2],jn=dt.X,Ji=dt.Y,Pe=Dt.X-jn,He=Dt.Y-Ji,(Pe!==0||He!==0)&&(xn=((Lt.X-jn)*Pe+(Lt.Y-Ji)*He)/(Pe*Pe+He*He),xn>1?(jn=Dt.X,Ji=Dt.Y):xn>0&&(jn+=Pe*xn,Ji+=He*xn)),Pe=Lt.X-jn,He=Lt.Y-Ji,kt=Pe*Pe+He*He,kt<=Qo&&(de[M+1]=1,M++);for(Q.push({X:I[0].X,Y:I[0].Y}),M=1;M<et-1;M++)de[M]||Q.push({X:I[M].X,Y:I[M].Y});if(Q.push({X:I[et-1].X,Y:I[et-1].Y}),Se&&I.pop(),de.length)I=Q;else break}et=Q.length,Q[et-1].X===Q[0].X&&Q[et-1].Y===Q[0].Y&&Q.pop(),Q.length>2&&Ii.push(Q)}return c||(Ii=Ii[0]),typeof Ii>"u"&&(Ii=[]),Ii},n.JS.PerimeterOfPath=function(s,a,c){if(typeof s>"u")return 0;var p=Math.sqrt,M=0,I,B,Q=0,et=0,dt=0,Dt=0,Lt=s.length;if(Lt<2)return 0;for(a&&(s[Lt]=s[0],Lt++);--Lt;)I=s[Lt],Q=I.X,et=I.Y,B=s[Lt-1],dt=B.X,Dt=B.Y,M+=p((Q-dt)*(Q-dt)+(et-Dt)*(et-Dt));return a&&s.pop(),M/c},n.JS.PerimeterOfPaths=function(s,a,c){c||(c=1);for(var p=0,M=0;M<s.length;M++)p+=n.JS.PerimeterOfPath(s[M],a,c);return p},n.JS.ScaleDownPath=function(s,a){var c,p;for(a||(a=1),c=s.length;c--;)p=s[c],p.X=p.X/a,p.Y=p.Y/a},n.JS.ScaleDownPaths=function(s,a){var c,p,M;for(a||(a=1),c=s.length;c--;)for(p=s[c].length;p--;)M=s[c][p],M.X=M.X/a,M.Y=M.Y/a},n.JS.ScaleUpPath=function(s,a){var c,p,M=Math.round;for(a||(a=1),c=s.length;c--;)p=s[c],p.X=M(p.X*a),p.Y=M(p.Y*a)},n.JS.ScaleUpPaths=function(s,a){var c,p,M,I=Math.round;for(a||(a=1),c=s.length;c--;)for(p=s[c].length;p--;)M=s[c][p],M.X=I(M.X*a),M.Y=I(M.Y*a)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(s,a){var c=new n.ExPolygon;c.outer=s.Contour();var p=s.Childs(),M=p.length;c.holes=new Array(M);var I,B,Q,et,dt,Dt;for(Q=0;Q<M;Q++)for(I=p[Q],c.holes[Q]=I.Contour(),et=0,dt=I.Childs(),Dt=dt.length;et<Dt;et++)B=dt[et],n.JS.AddOuterPolyNodeToExPolygons(B,a);a.push(c)},n.JS.ExPolygonsToPaths=function(s){var a,c,p,M,I=new n.Paths;for(a=0,p=s.length;a<p;a++)for(I.push(s[a].outer),c=0,M=s[a].holes.length;c<M;c++)I.push(s[a].holes[c]);return I},n.JS.PolyTreeToExPolygons=function(s){var a=new n.ExPolygons,c,p,M,I;for(p=0,M=s.Childs(),I=M.length;p<I;p++)c=M[p],n.JS.AddOuterPolyNodeToExPolygons(c,a);return a}})()});function sa(n,t,e,i=Je.default.PolyFillType.pftNonZero){let r=new Je.default.Clipper;r.AddPaths(qs(t),Je.default.PolyType.ptSubject,!0),e&&r.AddPaths(qs(e),Je.default.PolyType.ptClip,!0);let o=new Je.default.Paths;return r.Execute(n,o,i,i),ra(o)}function Uc(n,t=256){let e=n.length>t?hg(n):n;for(;e.length>t;){let i=[];for(let o=0;o<e.length;o+=t)i.push(Kn(e.slice(o,o+t)));let r=i.flat();if(i.length===1)return r;if(r.length>e.length/2)return Kn(r);e=r}return Kn(e)}function hg(n){let t=1/0,e=1/0,i=-1/0,r=-1/0,o=n.map(d=>{let g=0,v=0;for(let[x,w]of d)g+=x,v+=w;let _=[g/d.length,v/d.length];return t=Math.min(t,_[0]),e=Math.min(e,_[1]),i=Math.max(i,_[0]),r=Math.max(r,_[1]),_}),l=65535/Math.max(i-t,r-e,1e-9),h=d=>(d=(d|d<<8)&16711935,d=(d|d<<4)&252645135,d=(d|d<<2)&858993459,(d|d<<1)&1431655765),u=o.map(([d,g])=>(h(Math.round((d-t)*l))|h(Math.round((g-e)*l))<<1)>>>0);return n.map((d,g)=>g).sort((d,g)=>u[d]-u[g]).map(d=>n[d])}function Re(n,t,e=Yu/Li){return n.length?(t<-2*Fc&&(n=Wu(n,-Fc,e),t+=Fc),Wu(n,t,e)):[]}function Wu(n,t,e){if(!n.length)return[];let i=new Je.default.ClipperOffset(2,e*Li);i.AddPaths(qs(n),Je.default.JoinType.jtRound,Je.default.EndType.etClosedPolygon);let r=new Je.default.Paths;return i.Execute(r,t*Li),ra(r)}function $u(n,t){if(!n.length)return[];let e=new Je.default.ClipperOffset(4,Yu);e.AddPaths(qs(n),Je.default.JoinType.jtMiter,Je.default.EndType.etClosedPolygon);let i=new Je.default.Paths;return e.Execute(i,t*Li),ra(i)}function On(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function Di(n){let t=1/0,e=1/0,i=-1/0,r=-1/0;for(let o of n)for(let[l,h]of o)l<t&&(t=l),l>i&&(i=l),h<e&&(e=h),h>r&&(r=h);return{minX:t,minY:e,maxX:i,maxY:r}}function zn(n){if(!n.length)return[];let t=new Je.default.Clipper;t.AddPaths(qs(n),Je.default.PolyType.ptSubject,!0);let e=new Je.default.PolyTree;t.Execute(Je.default.ClipType.ctUnion,e,Je.default.PolyFillType.pftNonZero,Je.default.PolyFillType.pftNonZero);let i=[],r=o=>{for(let l of o.Childs()){if(l.IsHole()){r(l);continue}let h=l.Childs().map(u=>u.Contour());i.push(ra([l.Contour(),...h]));for(let u of l.Childs())r(u)}};return r(e),i}function br([n,t],e){let i=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[l,h]=e[r],[u,d]=e[o];h>t!=d>t&&n<(u-l)*(t-h)/(d-h)+l&&(i=!i)}return i}function an(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(On(e))>t)}function ug(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let h=1;h<n.length;h++){let u=(n[h][0]-n[0][0])**2+(n[h][1]-n[0][1])**2;u>i&&(i=u,e=h)}let r=h=>{let u=new Uint8Array(h.length);u[0]=u[h.length-1]=1;let d=[[0,h.length-1]];for(;d.length;){let[g,v]=d.pop(),[_,x]=h[g],[w,E]=h[v],b=Math.hypot(w-_,E-x)||1e-12,y=-1,L=t;for(let V=g+1;V<v;V++){let A=Math.abs((w-_)*(x-h[V][1])-(_-h[V][0])*(E-x))/b;A>L&&(L=A,y=V)}y>0&&(u[y]=1,d.push([g,y],[y,v]))}return h.filter((g,v)=>u[v])},o=r(n.slice(0,e+1)),l=r([...n.slice(e),n[0]]);return[...o,...l.slice(1,-1)]}var Je,Li,Yu,qs,ra,Jr,Kn,kn,Ni,Fc,rn,Oi,Zs=_n(()=>{Je=zu(Xu(),1),Li=1e3,Yu=.01*Li,qs=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*Li),Y:Math.round(i*Li)}))),ra=n=>n.map(t=>t.map(e=>[e.X/Li,e.Y/Li]));Jr=n=>sa(Je.default.ClipType.ctUnion,n,null,Je.default.PolyFillType.pftEvenOdd),Kn=n=>sa(Je.default.ClipType.ctUnion,n,null);kn=(n,t)=>sa(Je.default.ClipType.ctDifference,n,t),Ni=(n,t)=>sa(Je.default.ClipType.ctIntersection,n,t);Fc=.005;rn=n=>n.reduce((t,e)=>t+On(e),0);Oi=(n,t)=>n.map(e=>ug(e,t)).filter(e=>e.length>=3)});function Ju(n){let t=[],e=[],i=[],r=[];for(let o of n.meshes||[]){let l=t.length/3,h=e.length/3,u=o.attributes.position.array;for(let g=0;g<u.length;g++)t.push(u[g]);let d=o.index.array;for(let g=0;g<d.length;g++)e.push(d[g]+l);for(let g of o.brep_faces||[])i.push({first:g.first+h,last:g.last+h});o.name&&r.push(o.name)}return{positions:Float64Array.from(t),indices:Uint32Array.from(e),faces:i,solids:(n.meshes||[]).length,names:r}}function jr(n){let t=n.positions,e=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]<e[o]&&(e[o]=t[r+o]),t[r+o]>i[o]&&(i[o]=t[r+o]);return{min:e,max:i,size:[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}}function Js(n,t){let e=n.positions,i=n.indices,r=i[t*3]*3,o=i[t*3+1]*3,l=i[t*3+2]*3,h=e[o]-e[r],u=e[o+1]-e[r+1],d=e[o+2]-e[r+2],g=e[l]-e[r],v=e[l+1]-e[r+1],_=e[l+2]-e[r+2],x=u*_-d*v,w=d*g-h*_,E=h*v-u*g,b=Math.hypot(x,w,E);return b>0?[x/b,w/b,E/b]:[0,0,0]}function aa(n){let[t,e,i]=n;if(i>.999999)return[1,0,0,0,1,0,0,0,1];if(i<-.999999)return[1,0,0,0,-1,0,0,0,-1];let r=e,o=-t,l=Math.hypot(r,o);r/=l,o/=l;let h=i,u=l,d=1-h;return[d*r*r+h,d*r*o,o*u,d*r*o,d*o*o+h,-r*u,-o*u,r*u,h]}function Ki(n,t){let e=n.positions,i=new Float64Array(e.length);for(let l=0;l<e.length;l+=3){let h=e[l],u=e[l+1],d=e[l+2];i[l]=t[0]*h+t[1]*u+t[2]*d,i[l+1]=t[3]*h+t[4]*u+t[5]*d,i[l+2]=t[6]*h+t[7]*u+t[8]*d}let r={positions:i,indices:n.indices,faces:n.faces},{min:o}=jr(r);for(let l=0;l<i.length;l+=3)i[l]-=o[0],i[l+1]-=o[1],i[l+2]-=o[2];for(let l=0;l<i.length;l++)i[l]=Math.round(i[l]*1e6)/1e6;return r}function Ks(n,t=.001){let{max:e,size:i}=jr(n),r=e[2],o=new Map,l=0,h=0,u=0,d=n.positions,g=n.indices,v=g.length/3;for(let w=0;w<v;w++){let E=g[w*3]*3,b=g[w*3+1]*3,y=g[w*3+2]*3,L=Js(n,w),V=d[b]-d[E],A=d[b+1]-d[E+1],R=d[b+2]-d[E+2],D=d[y]-d[E],H=d[y+1]-d[E+1],C=d[y+2]-d[E+2],k=Math.hypot(A*C-R*H,R*D-V*C,V*H-A*D)/2;u+=k;let G=(d[E+2]+d[b+2]+d[y+2])/3;if(L[2]>1-t){let Y=Math.round(G*1e3)/1e3;o.set(Y,(o.get(Y)||0)+k)}else L[2]<-(1-t)?G>t&&(l+=k):Math.abs(L[2])>t&&(L[2]<0?l+=k:h+=k)}let _=l>.001*u,x=_?mg(n):{inside:0,total:0};return{size:i,top:r,floors:[...o.keys()].sort((w,E)=>E-w),floorAreas:Object.fromEntries(o),undercut:_&&x.inside>qu,squareEdges:_&&x.inside<=qu,sloped:h>.001*u,undercutArea:l,slopedArea:h,slopedShare:u>0?h/u:0,missed:x.inside,missedTotal:x.total}}function ju(n){let t=n.positions,e=n.indices,i=e.length/3,r=new Float64Array(i).fill(NaN),o=Math.sin(1.5*Math.PI/180);for(let x=0;x<i;x++){let w=Js(n,x);w[2]>.17&&w[2]<.985&&(r[x]=w[2])}let l=Array.from({length:i},(x,w)=>w),h=x=>{for(;l[x]!==x;)x=l[x]=l[l[x]];return x},u=new Map,d=new Map,g=x=>`${Math.round(t[x]*1e4)},${Math.round(t[x+1]*1e4)},${Math.round(t[x+2]*1e4)}`;for(let x=0;x<i;x++)for(let w=0;w<3;w++){let E=g(e[x*3+w]*3),b=d.get(E);b?b.push(x):d.set(E,[x])}for(let x=0;x<i;x++)if(!Number.isNaN(r[x]))for(let w=0;w<3;w++){let E=e[x*3+w]*3,b=`${Math.round(t[E]*1e4)},${Math.round(t[E+1]*1e4)},${Math.round(t[E+2]*1e4)}`,y=u.get(b);y?y.push(x):u.set(b,[x])}for(let x of u.values()){x.sort((w,E)=>r[w]-r[E]);for(let w=1;w<x.length;w++)r[x[w]]-r[x[w-1]]<o&&(l[h(x[w])]=h(x[w-1]))}let v=new Map;for(let x=0;x<i;x++){if(Number.isNaN(r[x]))continue;let w=h(x);v.has(w)||v.set(w,[]),v.get(w).push(x)}let _=[];for(let x of v.values()){let w=1/0,E=-1/0,b=1/0,y=-1/0,L=0;for(let k of x){b=Math.min(b,r[k]),y=Math.max(y,r[k]);let G=e[k*3]*3,Y=e[k*3+1]*3,Z=e[k*3+2]*3;for(let J of[G,Y,Z])w=Math.min(w,t[J+2]),E=Math.max(E,t[J+2]);L+=Math.abs((t[Y]-t[G])*(t[Z+1]-t[G+1])-(t[Z]-t[G])*(t[Y+1]-t[G+1]))/2/r[k]}if(y-b>2*o)continue;let V=new Set(x),A=!0;for(let k of x){for(let G=0;G<3&&A;G++)for(let Y of d.get(g(e[k*3+G]*3))){if(V.has(Y))continue;let Z=Js(n,Y)[2];if(Math.abs(Z)<.985&&Math.abs(Z)>.03){A=!1;break}}if(!A)break}if(!A)continue;let R=(b+y)/2,D=Math.asin(R)*180/Math.PI,H=E-w,C=H*Math.tan(D*Math.PI/180);H<.1||C>dg||_.push({angle:D,zb:w,zt:E,h:H,w:C,tris:x,area:L})}return _}function pg(n){let t=n.positions,e=n.indices,i=0;for(let r=0;r<e.length;r+=3){let o=e[r]*3,l=e[r+1]*3,h=e[r+2]*3;i+=t[o]*(t[l+1]*t[h+2]-t[l+2]*t[h+1])-t[o+1]*(t[l]*t[h+2]-t[l+2]*t[h])+t[o+2]*(t[l]*t[h+1]-t[l+1]*t[h])}return Math.abs(i/6)}function mg(n){let{min:t,max:e}=jr(n),i=e[0]-t[0],r=e[1]-t[1],o=Math.max(.05,Math.sqrt(i*r/25e4)),l={x0:t[0],y0:t[1],cell:o,nx:Math.ceil(i/o)+1,ny:Math.ceil(r/o)+1},{h,mat:u}=gg(n,l),d=Kn(zn(Jr(Qs(n,t[2]+.01))).map(b=>b[0])),g=Zu(d,l),v=Zu(Re(d,Math.min(3,.15*Math.min(i,r))),l),_=0,x=0;for(let b=0;b<h.length;b++){if(!(h[b]>t[2]))continue;let y=Math.max(0,h[b]-t[2]-u[b]);_+=y,(g[b]||!v[b])&&(x+=y)}let w=pg(n),E=o*o;return w>0?{inside:x*E/w,total:_*E/w}:{inside:0,total:0}}function gg(n,t){let e=t.nx*t.ny,i=new Float32Array(e).fill(-1/0),r=new Float32Array(e),o=n.positions,l=n.indices;for(let h=0;h<l.length;h+=3){let u=l[h]*3,d=l[h+1]*3,g=l[h+2]*3,v=o[u],_=o[u+1],x=o[u+2],w=o[d],E=o[d+1],b=o[d+2],y=o[g],L=o[g+1],V=o[g+2],A=(E-L)*(v-y)+(y-w)*(_-L);if(Math.abs(A)<1e-12)continue;let R=(w-v)*(L-_)-(E-_)*(y-v)>0?1:-1,D=Math.max(0,Math.ceil((Math.min(v,w,y)-t.x0)/t.cell)),H=Math.min(t.nx-1,Math.floor((Math.max(v,w,y)-t.x0)/t.cell)),C=Math.max(0,Math.ceil((Math.min(_,E,L)-t.y0)/t.cell)),k=Math.min(t.ny-1,Math.floor((Math.max(_,E,L)-t.y0)/t.cell));for(let G=C;G<=k;G++)for(let Y=D;Y<=H;Y++){let Z=t.x0+(Y+5e-4)*t.cell,J=t.y0+(G+7e-4)*t.cell,j=((E-L)*(Z-y)+(y-w)*(J-L))/A,K=((L-_)*(Z-y)+(v-y)*(J-L))/A,lt=1-j-K;if(j<0||K<0||lt<0)continue;let gt=j*x+K*b+lt*V,Et=G*t.nx+Y;gt>i[Et]&&(i[Et]=gt),r[Et]+=R*gt}}return{h:i,mat:r}}function Zu(n,t){let e=new Uint8Array(t.nx*t.ny);for(let i=0;i<t.ny;i++){let r=t.y0+i*t.cell,o=[];for(let l of n)for(let h=0;h<l.length;h++){let[u,d]=l[h],[g,v]=l[(h+1)%l.length];d<=r!=v<=r&&o.push(u+(r-d)/(v-d)*(g-u))}o.sort((l,h)=>l-h);for(let l=0;l+1<o.length;l+=2){let h=Math.max(0,Math.ceil((o[l]-t.x0)/t.cell)),u=Math.min(t.nx-1,Math.floor((o[l+1]-t.x0)/t.cell));for(let d=h;d<=u;d++)e[i*t.nx+d]=1}}return e}function Qs(n,t){let e=n.positions,i=n.indices,r=[],o=i.length/3;for(let l=0;l<o;l++){let h=[i[l*3]*3,i[l*3+1]*3,i[l*3+2]*3],u=[];for(let d=0;d<3;d++){let g=h[d],v=h[(d+1)%3],_=e[g+2]-t,x=e[v+2]-t;if(_<0!=x<0){let w=_/(_-x);u.push([e[g]+(e[v]-e[g])*w,e[g+1]+(e[v+1]-e[g+1])*w])}}u.length===2&&r.push(u)}return _g(r)}function _g(n){let t=([o,l])=>`${Math.round(o*1e4)},${Math.round(l*1e4)}`,e=new Map;n.forEach((o,l)=>{for(let h of[0,1]){let u=t(o[h]);e.has(u)||e.set(u,[]),e.get(u).push(l)}});let i=new Uint8Array(n.length),r=[];for(let o=0;o<n.length;o++){if(i[o])continue;i[o]=1;let l=[n[o][0],n[o][1]],h=t(n[o][0]),u=n[o][1];for(let d=0;d<n.length;d++){let g=t(u);if(g===h)break;let v=(e.get(g)||[]).find(x=>!i[x]);if(v===void 0)break;i[v]=1;let _=n[v];u=t(_[0])===g?_[1]:_[0],t(u)!==h&&l.push(u)}l.length>=3&&r.push(l)}return r}function Ku(n){let t={};for(let o of Object.keys(js)){let l=Ks(fg(n,o));t[o]={reachable:!l.undercut,missed:l.missed,missedTotal:l.missedTotal,undercutArea:l.undercutArea,slopedArea:l.slopedArea,slopedShare:l.slopedShare,height:l.size[2]}}let e=Object.keys(js),i=e.some(o=>t[o].slopedShare>Bc),r=e.slice().sort((o,l)=>{let h=t[o],u=t[l];return(h.reachable===u.reachable?0:h.reachable?-1:1)||(i&&Math.abs(h.height-u.height)>1?h.height-u.height:0)||(Math.abs(h.missed-u.missed)>1e-4?h.missed-u.missed:0)||(Math.abs(h.missedTotal-u.missedTotal)>1e-4?h.missedTotal-u.missedTotal:0)||(Math.abs(h.slopedArea-u.slopedArea)>1e-6?h.slopedArea-u.slopedArea:0)||(Math.abs(h.height-u.height)>1e-6?h.height-u.height:0)||e.indexOf(o)-e.indexOf(l)});if(!r.some(o=>t[o].reachable))for(let o of e)t[o].reachable=!0;return{sides:t,best:r[0]}}var js,fg,qu,dg,Bc,kc=_n(()=>{Zs();js={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],left:[-1,0,0],right:[1,0,0]};fg=(n,t)=>Ki(n,aa(typeof t=="string"?js[t]:t));qu=.05,dg=12;Bc=.2});function bg(n){let t=new Set;for(let e of n){let i=e.match(/CONVERSION_BASED_UNIT\s*\(\s*'([^']*)'/);if(i){let l=Mg[i[1].trim().toUpperCase()];if(!l)return null;t.add(l);continue}let r=e.match(/SI_UNIT\s*\(\s*(\$|\.(\w+)\.)\s*,\s*\.METRE\.\s*\)/);if(!r)return null;let o=r[2]?xg[r[2]]:1e3;if(!o)return null;t.add(o)}return t.size===1?[...t][0]:null}function*Sg(n){let t=n.indexOf("DATA;");if(t<0)return;let e=t+5,i=e,r=!1;for(;e<n.length;e++){let o=n.charCodeAt(e);if(o===39)r=!r;else if(o===59&&!r){let l=n.slice(i,e).trim();if(i=e+1,l==="ENDSEC")return;let h=l.match(/^#(\d+)\s*=\s*([\s\S]*)$/);h&&(yield[+h[1],h[2]])}}}function wg(n){let t=[0,0,0];for(let e=0;e<n.length;e++){let i=n[e],r=n[(e+1)%n.length];t[0]+=(i[1]-r[1])*(i[2]+r[2]),t[1]+=(i[2]-r[2])*(i[0]+r[0]),t[2]+=(i[0]-r[0])*(i[1]+r[1])}for(let e=0;e<n.length;e++){let i=n[e],r=n[(e+1)%n.length],o=n[(e+2)%n.length],l=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],h=[o[0]-r[0],o[1]-r[1],o[2]-r[2]];if((l[1]*h[2]-l[2]*h[1])*t[0]+(l[2]*h[0]-l[0]*h[2])*t[1]+(l[0]*h[1]-l[1]*h[0])*t[2]<-1e-12)return!1}return!0}function Qu(n){let t=typeof n=="string"?n:new TextDecoder("latin1").decode(n);if(!t.startsWith("ISO-10303-21")||!t.includes("POLY_LOOP")||!t.includes("FACETED_BREP"))return null;let e=new Map,i=new Map,r=new Map,o=new Map,l=new Map,h=[],u=[];for(let[x,w]of Sg(t)){if(w.startsWith("(")){/\bLENGTH_UNIT\s*\(/.test(w)&&u.push(w);continue}let E=w.match(/^([A-Z0-9_]+)\s*\(/);if(!E)continue;let b=E[1];if(yg.test(b))return null;if(!vg.has(b))continue;let y=w.slice(E[0].length,w.lastIndexOf(")"));if(b==="CARTESIAN_POINT"){let L=y.match(/\(([^()]*)\)\s*$/),V=L?L[1].split(",").map(Number):[];if(V.length!==3||V.some(A=>!Number.isFinite(A)))return null;e.set(x,V)}else b==="POLY_LOOP"?i.set(x,to(y.slice(y.indexOf("(")))):b==="FACE_OUTER_BOUND"?r.set(x,{loop:to(y)[0],reversed:/\.F\.\s*$/.test(y)}):b==="FACE_SURFACE"||b==="FACE"?o.set(x,to(y.slice(y.indexOf("("),y.indexOf(")")+1))):b==="CLOSED_SHELL"||b==="OPEN_SHELL"?l.set(x,to(y)):b==="FACETED_BREP"&&h.push(to(y)[0])}let d=bg(u);if(!d||!h.length)return null;let g=[],v=[],_=[];for(let x of h){let w=l.get(x);if(!w)return null;for(let E of w){let b=o.get(E);if(!b||b.length!==1)return null;let y=r.get(b[0]),L=y&&i.get(y.loop);if(!L||L.length<3)return null;let V=y.reversed?L.slice().reverse():L,A=V.map(H=>e.get(H));if(A.some(H=>!H)||A.length>3&&!wg(A))return null;let R=g.length/3,D=v.length/3;for(let H of A)g.push(H[0]*d,H[1]*d,H[2]*d);for(let H=1;H+1<V.length;H++)v.push(R,R+H,R+H+1);_.push({first:D,last:v.length/3-1})}}return{positions:Float64Array.from(g),indices:Uint32Array.from(v),faces:_,solids:h.length,names:[]}}var vg,yg,xg,Mg,to,tf=_n(()=>{vg=new Set(["CARTESIAN_POINT","POLY_LOOP","FACE_OUTER_BOUND","FACE_SURFACE","FACE","PLANE","AXIS2_PLACEMENT_3D","DIRECTION","CLOSED_SHELL","OPEN_SHELL","FACETED_BREP","SHELL_BASED_SURFACE_MODEL"]),yg=/^(ADVANCED_FACE|EDGE_LOOP|FACE_BOUND|ORIENTED_FACE|ORIENTED_CLOSED_SHELL|BREP_WITH_VOIDS|MAPPED_ITEM|ITEM_DEFINED_TRANSFORMATION|NEXT_ASSEMBLY_USAGE_OCCURRENCE|MANIFOLD_SOLID_BREP)$/,xg={EXA:1e21,PETA:1e18,TERA:1e15,GIGA:1e12,MEGA:1e9,KILO:1e6,HECTO:1e5,DECA:1e4,DECI:100,CENTI:10,MILLI:1,MICRO:.001,NANO:1e-6},Mg={MILLIMETRE:1,MILLIMETER:1,MM:1,CENTIMETRE:10,CENTIMETER:10,METRE:1e3,METER:1e3,INCH:25.4,IN:25.4,FOOT:304.8,FT:304.8},to=n=>[...n.matchAll(/#(\d+)/g)].map(t=>+t[1])});async function nf(n,t=""){let e=n instanceof Uint8Array?n:new Uint8Array(n);return/\.stl$/i.test(t)?Tg(e):/\.3mf$/i.test(t)?Rg(e):null}function Tg(n){let t=new DataView(n.buffer,n.byteOffset,n.byteLength);if(n.byteLength>=84){let o=t.getUint32(80,!0);if(84+o*50===n.byteLength){let l=new Float64Array(o*9),h=new Uint32Array(o*3);for(let u=0;u<o;u++){let d=84+u*50+12;for(let g=0;g<9;g++)l[u*9+g]=t.getFloat32(d+g*4,!0);h[u*3]=u*3,h[u*3+1]=u*3+1,h[u*3+2]=u*3+2}if(!o)throw new Error("This STL file has no triangles.");return zc(l,h)}}let e=new TextDecoder().decode(n);if(!/^\s*solid/.test(e))throw new Error("This isn\u2019t an STL file ncCAM can read.");let i=[];for(let o of e.matchAll(/vertex\s+(\S+)\s+(\S+)\s+(\S+)/g))i.push(+o[1],+o[2],+o[3]);let r=Math.floor(i.length/9);if(!r||i.some(o=>!Number.isFinite(o)))throw new Error("This STL file has no triangles ncCAM can read.");return i.length=r*9,zc(i,Array.from({length:r*3},(o,l)=>l))}function Ag(n){let t=new DataView(n.buffer,n.byteOffset,n.byteLength),e=-1;for(let u=n.byteLength-22;u>=Math.max(0,n.byteLength-65557);u--)if(t.getUint32(u,!0)===101010256){e=u;break}if(e<0)throw new Error("This 3MF file is damaged (not a zip).");let i=u=>t.getUint32(u,!0)+t.getUint32(u+4,!0)*2**32,r=4294967295,o=t.getUint16(e+10,!0),l=t.getUint32(e+16,!0);if((l===r||o===65535)&&e>=20&&t.getUint32(e-20,!0)===117853008){let u=i(e-12);if(t.getUint32(u,!0)!==101075792)throw new Error("This 3MF file is damaged (zip64).");o=i(u+32),l=i(u+48)}let h=new Map;for(let u=0;u<o&&!(l+46>n.byteLength||t.getUint32(l,!0)!==33639248);u++){let d=t.getUint16(l+10,!0),g=t.getUint32(l+20,!0),v=t.getUint32(l+24,!0),_=t.getUint16(l+28,!0),x=t.getUint16(l+30,!0),w=t.getUint16(l+32,!0),E=t.getUint32(l+42,!0);for(let y=l+46+_;y+4<=l+46+_+x;){let L=t.getUint16(y,!0),V=t.getUint16(y+2,!0);if(L===1){let A=y+4;v===r&&(v=i(A),A+=8),g===r&&(g=i(A),A+=8),E===r&&(E=i(A),A+=8)}y+=4+V}let b=new TextDecoder().decode(n.subarray(l+46,l+46+_));h.set(b.replace(/^\//,""),{method:d,size:g,local:E}),l+=46+_+x+w}return{has:u=>h.has(u.replace(/^\//,"")),async text(u){let d=h.get(u.replace(/^\//,""));if(!d)throw new Error(`This 3MF file is missing ${u}.`);let g=d.local+30+t.getUint16(d.local+26,!0)+t.getUint16(d.local+28,!0),v=n.subarray(g,g+d.size),_=v;if(d.method===8)_=new Uint8Array(await new Response(new Blob([v]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).arrayBuffer());else if(d.method!==0)throw new Error("This 3MF file is compressed in a way ncCAM can\u2019t read.");return new TextDecoder().decode(_)}}}function Ig(n){let t=Eg[vn(n.slice(0,2e3).match(/<model\b[^>]*>/)?.[0]||"","unit")||"millimeter"]??1,e=new Map,i=new Set,r=/<object\b([^>]*)>([\s\S]*?)<\/object>/g;for(let l;l=r.exec(n);){let h=vn(l[1],"id"),u=l[2],d=vn(l[1],"type");if(d&&d!=="model"){i.add(h);continue}if(u.includes("<mesh")){let g=[],v=[];for(let _ of u.matchAll(/<vertex\b([^>]*)\/?>/g))g.push(+vn(_[1],"x"),+vn(_[1],"y"),+vn(_[1],"z"));for(let _ of u.matchAll(/<triangle\b([^>]*)\/?>/g))v.push(+vn(_[1],"v1"),+vn(_[1],"v2"),+vn(_[1],"v3"));e.set(h,{pos:g,tri:v})}else{let g=[...u.matchAll(/<component\b([^>]*)\/?>/g)].map(v=>({id:vn(v[1],"objectid"),path:vn(v[1],"p:path"),transform:ef(vn(v[1],"transform"))}));e.set(h,{components:g})}}let o=[...(n.match(/<build\b[\s\S]*?<\/build>/)?.[0]||"").matchAll(/<item\b([^>]*)\/?>/g)].map(l=>({id:vn(l[1],"objectid"),path:vn(l[1],"p:path"),transform:ef(vn(l[1],"transform"))}));return{unit:t,objects:e,skipped:i,build:o}}async function Rg(n){let t=Ag(n),e="3D/3dmodel.model";if(t.has("_rels/.rels")){let v=[...(await t.text("_rels/.rels")).matchAll(/<Relationship\b([^>]*)\/?>/g)].find(_=>/3dmodel/.test(vn(_[1],"Type")||""));v&&(e=vn(v[1],"Target").replace(/^\//,""))}let i=new Map,r=async g=>(i.has(g)||i.set(g,Ig(await t.text(g))),i.get(g)),o=await r(e),l=[],h=[],u=0,d=async(g,v,_,x=0)=>{if(x>16)throw new Error("This 3MF file nests objects too deeply.");let w=await r(g),E=w.objects.get(v);if(!E&&w.skipped.has(v))return;if(!E)throw new Error(`This 3MF file is missing object ${v}.`);if(E.components){for(let V of E.components)await d(V.path?V.path.replace(/^\//,""):g,V.id,Pg(V.transform,_),x+1);return}let b=w.unit,y=l.length/3;for(let V=0;V<E.pos.length;V+=3){let A=E.pos[V],R=E.pos[V+1],D=E.pos[V+2];l.push((A*_[0]+R*_[3]+D*_[6]+_[9])*b,(A*_[1]+R*_[4]+D*_[7]+_[10])*b,(A*_[2]+R*_[5]+D*_[8]+_[11])*b)}let L=_[0]*(_[4]*_[8]-_[5]*_[7])-_[1]*(_[3]*_[8]-_[5]*_[6])+_[2]*(_[3]*_[7]-_[4]*_[6]);for(let V=0;V<E.tri.length;V+=3)L<0?h.push(y+E.tri[V],y+E.tri[V+2],y+E.tri[V+1]):h.push(y+E.tri[V],y+E.tri[V+1],y+E.tri[V+2]);u++};for(let g of o.build)await d(g.path?g.path.replace(/^\//,""):e,g.id,g.transform);if(!h.length)throw new Error("This 3MF file has no objects to cut.");if(l.some(g=>!Number.isFinite(g))||h.some(g=>g>=l.length/3))throw new Error("This 3MF file is damaged (bad vertex numbers).");return zc(l,h,u)}var Eg,zc,vn,Cg,ef,Pg,rf=_n(()=>{Eg={micron:.001,millimeter:1,centimeter:10,inch:25.4,foot:304.8,meter:1e3};zc=(n,t,e=1)=>({positions:n instanceof Float64Array?n:Float64Array.from(n),indices:t instanceof Uint32Array?t:Uint32Array.from(t),faces:[],solids:e,names:[]});vn=(n,t)=>{let e=n.match(new RegExp(`(?:^|\\s)${t}\\s*=\\s*"([^"]*)"`));return e?e[1]:null},Cg=[1,0,0,0,1,0,0,0,1,0,0,0],ef=n=>{let t=(n||"").trim().split(/\s+/).map(Number);return t.length===12&&t.every(Number.isFinite)?t:Cg},Pg=(n,t)=>{let e=new Array(12);for(let i=0;i<4;i++)for(let r=0;r<3;r++)e[i*3+r]=(i<3?0:t[9+r])+n[i*3]*t[r]+n[i*3+1]*t[3+r]+n[i*3+2]*t[6+r];return e}});function Vc(n,t){let e=n.diameter/2,i=Math.ceil(e/t),r=[];for(let l=-i;l<=i;l++)for(let h=-i;h<=i;h++){let u=Math.hypot(h,l)*t;if(u>e+1e-6)continue;let d=Math.min(u,e),g=0;if(n.kind==="ball")g=e-Math.sqrt(Math.max(0,e*e-d*d));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let v=(n.angle||(n.kind==="drill"?118:90))*Math.PI/360;g=d/Math.tan(v)}r.push(h,l,g,u)}let o=Float32Array.from(r);return o.inner=Math.max(0,e-t*Math.SQRT1_2),o}function Lg(n,t,e,i,r,o){let l=Math.hypot(i.x-e.x,i.y-e.y),h=Math.max(1,Math.ceil(l/(n.cell*.5))),u=!1;for(let d=r?0:1;d<=h;d++){let g=d/h,v=(e.x+(i.x-e.x)*g-n.x0)/n.cell,_=(e.y+(i.y-e.y)*g-n.y0)/n.cell,x=e.z+(i.z-e.z)*g;if(x>=n.top)continue;let w=Math.round(v),E=Math.round(_);for(let b=0;b<t.length;b+=4){let y=w+t[b],L=E+t[b+1];if(y<0||L<0||y>=n.nx||L>=n.ny)continue;let V=L*n.nx+y,A=x+t[b+2];if(n.h[V]>A+1e-4){if(r){n.h[V]>A+.05&&t[b+3]<=t.inner&&(u=!0);continue}n.h[V]=A,n.op[V]=o+1}}}return u}function sf(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function Hc(n,t,e,i,r){let o=t.diameter/2,l=n.cell,h=o/l,u=t.kind==="ball"?J=>o-Math.sqrt(Math.max(0,o*o-J*J)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(J=>j=>j/J)(Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360)):()=>0,d=!t.kind||t.kind==="flat"||t.kind==="surfacing",{h:g,sx:v,sy:_,wx:x,wy:w,gap:E,deep:b,nx:y,ny:L}=n,V=1.5*l,A=h+1.5,R=(J,j,K,lt)=>{let gt=Math.hypot(j,K);if(gt>A)return;let Et=gt*l;if(Et<=o){let yt=lt+u(Et);if(g[J]>yt+1e-4)g[J]=yt,n.op[J]=r+1,E[J]=1/0,b[J]=-1/0;else if(g[J]<yt-1e-4)return;o-Et>b[J]&&(b[J]=o-Et,d&&o-Et<V&&gt>1e-6?(v[J]=j/gt*(o-Et),_[J]=K/gt*(o-Et),x[J]=-j/gt,w[J]=-K/gt):(v[J]=0,_[J]=0,x[J]=0,w[J]=0))}else d&&g[J]>lt+1e-4&&Et-o<E[J]&&(E[J]=Et-o,v[J]=j/gt*(o-Et),_[J]=K/gt*(o-Et),x[J]=-j/gt,w[J]=-K/gt)},D=(e.x-n.x0)/l,H=(e.y-n.y0)/l,C=(i.x-n.x0)/l,k=(i.y-n.y0)/l;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let J=C-D,j=k-H,K=J*J+j*j,lt=Math.max(0,Math.floor(Math.min(D,C)-A)),gt=Math.min(y-1,Math.ceil(Math.max(D,C)+A)),Et=Math.max(0,Math.floor(Math.min(H,k)-A)),yt=Math.min(L-1,Math.ceil(Math.max(H,k)+A));for(let It=Et;It<=yt;It++)for(let Ot=lt;Ot<=gt;Ot++){let jt=K>0?Math.max(0,Math.min(1,((Ot-D)*J+(It-H)*j)/K)):0;R(It*y+Ot,Ot-(D+J*jt),It-(H+j*jt),e.z)}return}let G=Math.hypot(i.x-e.x,i.y-e.y),Y=Math.max(1,Math.ceil(G/(l*.5))),Z=Math.ceil(A);for(let J=1;J<=Y;J++){let j=J/Y,K=D+(C-D)*j,lt=H+(k-H)*j,gt=e.z+(i.z-e.z)*j;if(gt>=n.top)continue;let Et=Math.max(0,Math.floor(K-Z)),yt=Math.min(y-1,Math.ceil(K+Z)),It=Math.max(0,Math.floor(lt-Z)),Ot=Math.min(L-1,Math.ceil(lt+Z));for(let jt=It;jt<=Ot;jt++)for(let ne=Et;ne<=yt;ne++)R(jt*y+ne,ne-K,jt-lt,gt)}}function of(n,t){let e=new Qi(n.stock,t||Qi.cellFor(n.stock)),i=[];return n.ops.forEach((r,o)=>{if(!r.enabled||!r.moves)return;let l=Vc(r.tool,e.cell),h=null;for(let u of r.moves)h&&Lg(e,l,h,u,!!u.r,o)&&i.push({op:r.id,at:u}),h=u}),{hm:e,collisions:i}}function af(n,t){let e=new Float32Array(t.nx*t.ny).fill(-1/0),i=n.positions,r=n.indices;for(let o=0;o<r.length;o+=3){let l=r[o]*3,h=r[o+1]*3,u=r[o+2]*3,d=i[l],g=i[l+1],v=i[l+2],_=i[h],x=i[h+1],w=i[h+2],E=i[u],b=i[u+1],y=i[u+2],L=(x-b)*(d-E)+(E-_)*(g-b);if(Math.abs(L)<1e-12)continue;let V=Math.max(0,Math.floor((Math.min(d,_,E)-t.x0)/t.cell)),A=Math.min(t.nx-1,Math.ceil((Math.max(d,_,E)-t.x0)/t.cell)),R=Math.max(0,Math.floor((Math.min(g,x,b)-t.y0)/t.cell)),D=Math.min(t.ny-1,Math.ceil((Math.max(g,x,b)-t.y0)/t.cell));for(let H=R;H<=D;H++)for(let C=V;C<=A;C++){let k=t.x0+C*t.cell,G=t.y0+H*t.cell,Y=((x-b)*(k-E)+(E-_)*(G-b))/L,Z=((b-g)*(k-E)+(d-E)*(G-b))/L,J=1-Y-Z;if(Y<-1e-9||Z<-1e-9||J<-1e-9)continue;let j=Y*v+Z*w+J*y,K=H*t.nx+C;j>e[K]&&(e[K]=j)}}return e}var Qi,Gc=_n(()=>{Qi=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});function Xc(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return Ng.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t||"flat"}function wr(n,t){return(typeof t=="string"?t:t?.mode)==="toolId"?n.toolId??n.id:n.toolNumber?n.toolNumber:t?.manual?.get(n.id)??n.toolId??n.id}function lf(n,t,e=0,i=null){if(n==="toolId")return{mode:n};let r=new Set(t.filter(u=>u.toolNumber).map(u=>u.toolNumber));for(let u=1;u<=e;u++)r.add(u);i&&r.add(i);let o=new Map,l=t.filter(u=>!u.toolNumber);for(let u of l){let d=u.toolId??u.id;d>e&&!r.has(d)&&(o.set(u.id,d),r.add(d))}let h=e+1;for(let u of l)if(!o.has(u.id)){for(;r.has(h);)h++;o.set(u.id,h),r.add(h)}return{mode:n,manual:o}}function cf(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${Xc(t)}`,kind:Xc(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2,.../^(vbit|chamfer)$/.test(Xc(t))?{angle:Dg(t)}:{}}))}function Dg(n){let t=Number(n.dimensions?.taper_angle);if(t>0&&t<90)return t*2;let e=String(n.name||"").match(/(\d{2,3}(?:\.\d+)?)\s*(?:°|º|deg\b|degrees?\b)/i),i=e?Number(e[1]):0;return i>0&&i<180?i:90}function hf(n,t,e,i={}){let r=Sr[t]||Sr.mdf,o=Qn[e]||Qn.balanced,l=i.maxRpm||24e3,h=i.minRpm||0,u=Math.round(Math.min(l,Math.max(h,r.rpm))),d=Math.min(r.maxChip,r.chip*n.diameter),g=Math.min(i.maxFeed||4e3,4e3),v=Math.round(Math.min(g,Math.max(150,u*n.flutes*d*o.feed)));return{rpm:u,feed:v,plunge:Math.round(Math.max(60,v*.3)),stepdown:Math.max(.05,n.diameter*r.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,r.stepover*o.stepover)),rampAngle:r.ramp}}var Sr,Qn,Ng,Fi,eo=_n(()=>{Sr={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},Qn={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},Ng=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"]);Fi=n=>n==="aluminum"?{height:1,length:1}:{height:2,length:2}});var Vn={};ku(Vn,{INCH:()=>Og,len:()=>ca,num:()=>la,toMm:()=>Ug,unitsFrom:()=>Fg});function la(n,t="mm",e=t==="in"?3:1){let i=t==="in"?n/25.4:n;return(Math.round(i*10**e)/10**e).toLocaleString("en-US",{maximumFractionDigits:e})}var Og,Fg,ca,Ug,Wc=_n(()=>{Og=25.4,Fg=n=>n==="imperial"?"in":"mm";ca=(n,t="mm",e)=>`${la(n,t,e)} ${t}`,Ug=(n,t="mm")=>t==="in"?n*25.4:n});function io(n){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:2,extraTop:1,width:n.size[0]+4,depth:n.size[1]+4,thickness:n.size[2]+1},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,...Fi("mdf")},throughDepth:.3,disabled:{},toolOverride:{}}}function da(n,t){let[e,i,r]=n.size,o=t.stock,l=o.fit?e+2*o.margin:Math.max(e,o.width),h=o.fit?i+2*o.margin:Math.max(i,o.depth),u=o.fit?r+o.extraTop:Math.max(r,o.thickness);return{minX:(e-l)/2,minY:(i-h)/2,maxX:(e+l)/2,maxY:(i+h)/2,bottom:0,top:u,width:l,depth:h,thickness:u}}function $c(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,r=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(r=n.minY),e.includes("back")&&(r=n.maxY),{x:i,y:r,z:t.z==="bed"?n.bottom:n.top}}function kg(n){let t=n.positions,e=n.indices,i=[];for(let r=0;r<e.length/3;r++){if(Js(n,r)[2]>-.001)continue;let l=[e[r*3]*3,e[r*3+1]*3,e[r*3+2]*3],h=l.map(u=>[t[u],t[u+1]]);Math.abs(On(h))<1e-6||i.push({loop:On(h)>0?h:h.reverse(),maxZ:Math.max(...l.map(u=>t[u+2]))})}return i}function Vg(n){if(n.length!==1)return null;let t=n[0];if(t.length<12)return null;let e=Di([t]),i=(e.minX+e.maxX)/2,r=(e.minY+e.maxY)/2,o=t.map(([h,u])=>Math.hypot(h-i,u-r)),l=o.reduce((h,u)=>h+u,0)/o.length;return o.every(h=>Math.abs(h-l)<Math.max(.03,l*.01))?{x:i,y:r,d:2*l}:null}function pf(n,t,e,i={}){let r=at=>ca(at,e.units),o=at=>la(at,e.units),l=Ks(n),h=da(l,e),u=Qn[e.finish]||Qn.balanced,d=[],g=e.surface3d??l.slopedShare>Bc;l.squareEdges&&d.push({kind:"edges",text:"Chamfers or rounded edges face down on this side, so they are left square."}),l.undercut&&d.push({kind:"undercut",text:"Some features face the other side, so they can\u2019t be reached from the top. Cut this side, then turn the part over for a second setup."});let v=t.filter(at=>at.kind==="flat").sort((at,Nt)=>Nt.diameter-at.diameter),_=t.filter(at=>at.kind==="drill"),x=t.filter(at=>at.kind==="surfacing").sort((at,Nt)=>Nt.diameter-at.diameter),w=new Map,E=at=>(at&&w.set(at.id,(w.get(at.id)||0)+1),at),b=e.material==="aluminum"?8:12.8,y=l.undercutArea>0?kg(n).sort((at,Nt)=>Nt.maxZ-at.maxZ):[],L=[],V=at=>{let Nt=0,zt=y.length;for(;Nt<zt;){let Yt=Nt+zt>>1;y[Yt].maxZ>at+dn?Nt=Yt+1:zt=Yt}let Bt=Nt;if(!Bt)return[];let Vt=null;for(let Yt of L)Yt.k<=Bt&&(!Vt||Yt.k>Vt.k)&&(Vt=Yt);if(Vt?.k===Bt)return Vt.loops;let re=y.slice(Vt?Vt.k:0,Bt).map(Yt=>Yt.loop),he=Uc(Vt?[...Vt.loops,...re]:re);return L.push({k:Bt,loops:he}),he},A=new Map,R=at=>{if(A.has(at))return A.get(at);let Nt=Jr(Qs(n,at+dn)),zt=V(at),Bt=zt.length?Re(Re(Kn([...Nt,...zt]),.002),-.002):Nt;return A.set(at,Bt),Bt},D=R(0),H=Kn(zn(D).map(at=>at[0])),C=[],k=1,G=at=>(at.id=at.id||`op${k++}`,C.push(at),at);function Y(at,Nt,zt){let Bt=v.filter(Yt=>Yt.diameter<=b&&Kr(Yt,Nt)&&Re(at,-(Yt.diameter/2+zt)).length);if(!Bt.length)return null;let Vt=Bt.map(Yt=>({t:Yt,c:Hg(at,Yt.diameter/2)})),re=Vt.find(Yt=>Yt.c>=.85)||Vt.reduce((Yt,ae)=>ae.c>Yt.c?ae:Yt);return(Vt.find(Yt=>w.has(Yt.t.id)&&Yt.c>=Math.min(.85,re.c*.98))||re).t}function Z(at,Nt,zt){let Bt=an(kn(at,no(at,Nt.diameter/2)),tn);if(rn(Bt)<tn)return null;let Vt=v.filter(Yt=>Yt.diameter<Nt.diameter-1e-6&&Kr(Yt,zt));if(!Vt.length)return{tool:null,left:Bt};let re=rn(Bt);return{tool:Vt.find(Yt=>rn(an(kn(at,no(at,Yt.diameter/2)),tn))<re*.25)||Vt[Vt.length-1],left:Bt}}let J=at=>hf(at,e.material,e.finish,i);if(h.top>l.top+dn){let at=x[0]||v[0];at&&G({id:"face",kind:"face",label:"Flatten the top",tool:E(at),zTop:h.top,zBottom:l.top,region:ua(h),detail:`${r(h.top-l.top)} off the top`})}let j=g&&K();function K(){let at=l.top+e.throughDepth,Nt=Tt=>Tt.diameter<=b&&Kr(Tt,at),zt=v.find(Tt=>w.has(Tt.id)&&Nt(Tt))||v.find(Nt);if(!zt)return d.push({kind:"notool",text:`No end mill is long enough to rough the 3D shape (${r(at)}), so it is cut in 2.5D.`}),!1;let Bt=t.filter(Tt=>Tt.kind==="ball"&&Nt(Tt)).sort((Tt,Ft)=>Math.abs(Tt.diameter-6.35)-Math.abs(Ft.diameter-6.35)),Vt=Bt[0]||zt;Bt.length||d.push({kind:"noball",text:`No ball end mill in your Tool Library is long enough, so ${zt.name} finishes the 3D surface. A ball end mill leaves it much smoother.`});let re=Math.min(J(zt).stepdown,J(Vt).stepdown),he=[l.top,...l.floors.filter(Tt=>Tt<l.top-dn&&Tt>dn&&(l.floorAreas[Tt]||0)>=uf),0],Yt=[];for(let Tt=1;Tt<he.length;Tt++){let Ft=Math.max(1,Math.ceil((he[Tt-1]-he[Tt])/re-1e-6));for(let mt=1;mt<=Ft;mt++)Yt.push(mt===Ft?he[Tt]:he[Tt-1]-mt*(he[Tt-1]-he[Tt])/Ft)}let ae=Re(H,Math.max(zt.diameter,Vt.diameter)+1),it=[],be=l.top,oe=null;for(let Tt of Yt){let Ft=Tt<=dn,mt=an(kn(Ft?H:ae,R(Ft?0:Tt)),tn),Ct=oe?an(Ni(mt,oe),tn):mt,Gt=oe?an(kn(mt,oe),tn):[],qt={zFrom:be,z:Ft?-e.throughDepth:Tt,exact:Ct,region:Oi(Ct,ff),fresh:rn(Gt)>=tn&&Re(Gt,-.5).length?Oi(Gt,ff):[]};(rn(Ct)>=tn||qt.fresh.length)&&it.push(qt),oe=mt,be=Tt}if(!it.length)return!1;let X=fa[e.finish]??fa.balanced,P=G({kind:"rough3d",label:"Rough the 3D shape",tool:E(zt),zTop:l.top,zBottom:it[it.length-1].z,region:ae,layers:it,allowance:ha,detail:`${it.length} layers \xB7 ${r(ha)} left`}),nt=(t.find(Tt=>Tt.id===e.toolOverride?.[P.id])||zt).diameter/2,ct=it.map(Tt=>{let Ft=Re(Tt.exact,-ha),mt=an(kn(Ft,no(Ft,nt)),tn);return zn(mt).filter(Ct=>Re(Ct,-Bg/2).length).flat()}),St=P.id;if(ct.some(Tt=>rn(Tt)>=tn)){let Tt=v.filter($t=>$t.diameter<zt.diameter-1e-6&&Nt($t)),Ft=$t=>it.map((O,$)=>rn(ct[$])>=tn?an(kn(ct[$],no(O.region,$t.diameter/2)),tn):[]).flat(),mt=rn(ct.flat()),Ct=Tt.find($t=>rn(Ft($t))<=mt*.25)||Tt[Tt.length-1];if(Ct){let $t=Ct.diameter/2,O=it.map(($,q)=>({zFrom:$.zFrom,z:$.z,region:rn(ct[q])>=tn?Ni($.exact,Re(ct[q],2*$t+.5)):[]})).filter($=>$.region.length);St=G({kind:"rest3d",label:"Clear where the big end mill can\u2019t reach",tool:E(Ct),zTop:l.top,zBottom:O[O.length-1].z,region:Kn(O.flatMap($=>$.region)),layers:O,after:P.id,detail:`${O.length} layers \xB7 holes, slots, corners`}).id}let Gt=Ct||zt,qt=Ft(Gt);Re(qt,-.25).length?d.push({kind:"notool",text:`Some holes or slots are narrower than ${Gt.name} and stay uncut: add a smaller end mill to the Tool Library.`}):rn(qt)>=tn&&d.push({kind:"corners",text:`Inside corners stay rounded to ${r(Gt.diameter/2)}: no smaller end mill in your library.`})}return G({kind:"finish3d",label:"Finish the 3D surface",tool:E(Vt),zTop:l.top,zBottom:0,region:H,after:St,ridge:X,detail:`Parallel passes${e.finish==="fast"?"":" and waterlines on steep walls"} \xB7 ${ca(X,e.units,e.units==="in"?4:2)} ridges`,steep:e.finish!=="fast",left:re+ha+1.2}),d.push({kind:"surface3d",text:`Curved faces are cut in 3D: roughed in ${it.length} layers, then ${Vt.name} follows the surface.`}),!0}let lt=j?[]:[l.top,...l.floors.filter(at=>at<l.top-dn&&at>dn),0],gt=[],Et=(at,Nt)=>{let zt=rn(at),Bt=rn(Nt);if(Math.abs(zt-Bt)>Math.max(tn,zt*.005))return!1;let Vt=Di(at),re=Di(Nt);return Math.abs(Vt.minX-re.minX)<.01&&Math.abs(Vt.maxX-re.maxX)<.01&&Math.abs(Vt.minY-re.minY)<.01&&Math.abs(Vt.maxY-re.maxY)<.01};for(let at=1;at<lt.length;at++){let Nt=lt[at-1],zt=lt[at],Bt=kn(ua(h),R(zt));for(let Vt of zn(Bt)){if(rn(Vt)<tn||!Re(Vt,-.05).length)continue;let re=Di([Vt[0]]),he=re.minX<=h.minX+.001||re.maxX>=h.maxX-.001||re.minY<=h.minY+.001||re.maxY>=h.maxY-.001,Yt=null;if(he&&(zt===0||(Yt=an(Ni(Vt,H),tn),rn(Yt)<tn)))continue;let ae=he?Yt:Vt,it=gt.find(be=>be.zFloor===Nt&&be.outer===he&&Et(be.shape,ae));it?(it.zFloor=zt,it.region=Vt):gt.push({outer:he,region:Vt,over:Yt,shape:ae,zTop:Nt,zFloor:zt})}}let yt=new Map;for(let{outer:at,region:Nt,over:zt,zTop:Bt,zFloor:Vt}of gt){let re=Vt===0,he=re?-e.throughDepth:Vt,Yt=Bt-he;{if(at){let nt=Y(Ni(Nt,Re(zt,13)),Yt,u.allowance);if(!nt){d.push({kind:"notool",text:`A step ${r(Bt-Vt)} deep has no end mill that fits.`});continue}let ct=Ni(Nt,Re(zt,nt.diameter+.5));G({kind:"step",label:"Cut the step",tool:E(nt),zTop:Bt,zBottom:he,region:ct,walls:Nt,detail:`${r(Bt-Vt)} deep`});continue}let ae=Vg(Nt);if(ae){let nt=`${Yc(ae.d)}|${Yc(Bt)}|${Yc(he)}`;yt.has(nt)||yt.set(nt,{d:ae.d,zTop:Bt,zBottom:he,through:re,centers:[],regions:[]}),yt.get(nt).centers.push(ae),yt.get(nt).regions.push(Nt);continue}let it=Di([Nt[0]]),be=Y(Nt,Yt,u.allowance),oe=`${o(it.maxX-it.minX)} \xD7 ${r(it.maxY-it.minY)} \xB7 ${re?"through":`${r(Bt-Vt)} deep`}`;if(!be){d.push({kind:"notool",text:`No end mill fits the pocket ${oe}.`});continue}let X=G({kind:"pocket",label:re?"Cut the opening":"Clear the pocket",tool:E(be),zTop:Bt,zBottom:he,region:Nt,detail:oe}),P=Z(Nt,be,Yt);P&&P.tool?G({kind:"corners",label:"Clean the corners",tool:E(P.tool),zTop:Bt,zBottom:he,region:Nt,after:X.id,detail:`Corners too tight for ${be.name}`}):P&&d.push({kind:"corners",text:`Pocket corners stay rounded to ${r(be.diameter/2)}: no smaller end mill in your library.`})}}for(let at of yt.values()){let Nt=at.centers.length,zt=at.zTop-at.zBottom,Bt=`\xD8${r(at.d)} ${at.through?"through":`${r(at.zTop-at.zBottom)} deep`}`,Vt=_.find(Yt=>zg(Yt.diameter,at.d)&&Kr(Yt,zt));if(Vt){G({kind:"drill",label:Nt>1?`Drill ${Nt} holes`:"Drill the hole",tool:E(Vt),zTop:at.zTop,zBottom:at.zBottom,centers:at.centers,detail:Bt});continue}let re=at.regions.flat().length?at.regions.flatMap(Yt=>Yt):[],he=Y(re,zt,0)||null;if(!he||he.diameter>at.d-.4){let Yt=v.find(ae=>ae.diameter<=at.d-.4&&Kr(ae,zt));if(!Yt){d.push({kind:"notool",text:`No drill or end mill fits the ${Bt} hole${Nt>1?"s":""}.`});continue}G({kind:"hole",label:Nt>1?`Cut ${Nt} holes`:"Cut the hole",tool:E(Yt),zTop:at.zTop,zBottom:at.zBottom,region:re,centers:at.centers,detail:`${Bt} \xB7 spiral`});continue}G({kind:"hole",label:Nt>1?`Cut ${Nt} holes`:"Cut the hole",tool:E(he),zTop:at.zTop,zBottom:at.zBottom,region:re,centers:at.centers,detail:`${Bt} \xB7 spiral`})}if(H.length){let at=l.top+e.throughDepth,Nt=v.filter(Vt=>Kr(Vt,at)&&Vt.diameter<=b),zt=Nt.find(Vt=>w.has(Vt.id))||Nt.slice().sort((Vt,re)=>Math.abs(Vt.diameter-6.35)-Math.abs(re.diameter-6.35))[0],Bt=e.tabs.enabled?`${e.tabs.count} tabs`:"no tabs";zt?G({id:"cutout",kind:"cutout",label:"Cut out the part",tool:E(zt),zTop:l.top,zBottom:-e.throughDepth,region:H,detail:`${r(l.top)} \xB7 ${Bt}`}):d.push({kind:"notool",text:`No end mill is long enough to cut out the part (${r(at)}).`})}let It=t.filter(at=>(at.kind==="vbit"||at.kind==="chamfer")&&at.angle>0&&at.angle<180),Ot=at=>at.angle*Math.PI/360,jt=at=>`${Math.round(at*10)/10}\xB0`,ne=(at,Nt)=>at.diameter/2>=Nt+Ui+.1&&(!at.fluteLength||at.fluteLength>=(Nt+Ui)/Math.tan(Ot(at))-1e-6),Te=C.find(at=>at.kind==="cutout"),Me=Te&&!e.disabled?.cutout?Te.tool.diameter:0,Ae=kn(ua(h),Re(H,Math.max(0,Me-.05))),Pt=e.tabs.enabled?e.tabs.height??Fi(e.material).height:0,Ut=Re(ua(h),50);function ie({lo:at,z:Nt,zTip:zt,R:Bt,tr:Vt,which:re="all",keep:he=null}){if(zt<-e.throughDepth+.1)return{skipped:!0};let Yt=Nt<l.top-dn?R(Nt+dn):[],ae=an(kn(R(Math.max(zt,dn)+dn),Re(at,.01)),tn),it=Kn([...Re(Yt,Vt+.1),...Re(Ae,Vt+.1),...Re(ae,Bt+.1),...he?kn(Ut,he):[]]),be=[],oe=!1,X=zt>Math.max(dn,Pt+.2)||!e.tabs.enabled&&zt>-e.throughDepth+.1;for(let[ct,...St]of zn($u(at,Ui)))re!=="inside"&&(X?be.push(ct):oe=!0),re!=="outside"&&be.push(...St);let P=ct=>{let St=0;for(let Tt of it)br(ct,Tt)&&(St+=On(Tt)>0?1:-1);return St>0},nt=be.filter(ct=>{let St=0;for(let Tt=0;Tt<ct.length;Tt++){let Ft=ct[Tt],mt=ct[(Tt+1)%ct.length],Ct=Math.hypot(mt[0]-Ft[0],mt[1]-Ft[1]),Gt=Math.max(1,Math.ceil(Ct/.25));for(let qt=0;qt<Gt;qt++)if(P([Ft[0]+(mt[0]-Ft[0])*qt/Gt,Ft[1]+(mt[1]-Ft[1])*qt/Gt]))St=0;else if((St+=Ct/Gt)>=.5)return!0}return!1});return nt.length?{pass:{z:Nt,depth:Nt-zt,loops:nt,bad:it},skipped:oe}:{skipped:oe}}let ue=0;if(!j&&l.sloped){let at=new Map;for(let Nt of ju(n)){ue+=Nt.area;let zt=Math.round(Nt.angle*2)/2;at.has(zt)||at.set(zt,[]),at.get(zt).push(Nt)}for(let[Nt,zt]of at){let Bt=Math.max(...zt.map(oe=>oe.w)),Vt=It.filter(oe=>Math.abs(oe.angle/2-Nt)<=1.5),he=t.find(oe=>oe.id===e.toolOverride?.[`chamfers${Nt}`]&&Vt.includes(oe))||Vt.filter(oe=>ne(oe,Bt)).sort((oe,X)=>oe.diameter-X.diameter)[0],Yt=`${jt(Nt)} chamfer${zt.length>1?"s":""}`;if(!he){d.push({kind:"chamfer",text:Vt.length?`The ${Yt} ${zt.length>1?"are":"is"} wider than any ${jt(Nt*2)} V-bit in your Tool Library can cut, so ${zt.length>1?"they stay":"it stays"} square.`:`The ${Yt} need${zt.length>1?"":"s"} a ${jt(Nt*2)} V-bit, so ${zt.length>1?"they stay":"it stays"} square. Add one to your Tool Library.`});continue}let ae=[],it=[],be=!1;for(let oe of zt){let X=[];for(let Tt of oe.tris){let Ft=[0,1,2].map(mt=>{let Ct=n.indices[Tt*3+mt]*3;return[n.positions[Ct],n.positions[Ct+1]]});X.push(On(Ft)<0?Ft.reverse():Ft)}let P=Uc(X),nt=Re(P,Ui+.3),ct=an(Jr(Qs(n,oe.zb+Math.min(dn,oe.h/4))),tn),St=ie({lo:ct,z:oe.zt,zTip:oe.zb-Ui/Math.tan(Ot(he)),R:oe.w+Ui,tr:he.diameter/2,keep:nt});be||=St.skipped,St.pass&&(ae.push(St.pass),it.push({z:oe.zt,loops:P}))}be&&d.push({kind:"chamfer",text:`Some ${Yt} are too low to cut without reaching the tabs or the spoilboard.`}),ae.length&&G({id:`chamfers${Nt}`,kind:"chamfer",label:"Cut the chamfers",tool:E(he),zTop:l.top,zBottom:Math.min(...ae.map(oe=>oe.z-oe.depth)),region:H,levels:ae,show:it,angle:Nt,count:zt.length,size:Bt,detail:`${zt.length} chamfer${zt.length>1?"s":""} \xB7 ${r(Bt)} wide \xB7 ${jt(Nt*2)} bit`})}}let Zt=l.sloped&&l.slopedArea-ue>.001*(l.slopedArea/Math.max(l.slopedShare,1e-9));if(Zt&&!j&&d.push({kind:"sloped",text:ue>0?"Other sloped or curved faces (fillets) aren\u2019t cut in 3D, so they are left square.":"Sloped or curved faces (chamfers, fillets) aren\u2019t cut in 3D yet, so they are left square."}),e.chamfer?.size>0){let at=e.chamfer.size,Nt=e.chamfer.edges||"all",Bt=t.find(Vt=>Vt.id===e.toolOverride?.chamfer&&It.includes(Vt))||It.filter(Vt=>ne(Vt,at)).sort((Vt,re)=>Math.abs(Vt.angle-90)-Math.abs(re.angle-90)||Vt.diameter-re.diameter)[0];if(!Bt)d.push({kind:"chamfer",text:It.length?`No V-bit in your Tool Library is wide enough for a ${r(at)} chamfer.`:"Chamfering the edges needs a V-bit in your Tool Library."});else{let Vt=(at+Ui)/Math.tan(Ot(Bt)),re=[l.top,...l.floors.filter(ae=>ae<l.top-dn&&ae>dn&&(!j||(l.floorAreas[ae]||0)>=uf))],he=[],Yt=!1;for(let ae of re){let it=an(Jr(Qs(n,ae-dn)),tn);if(!it.length)continue;let be=ie({lo:it,z:ae,zTip:ae-Vt,R:at+Ui,tr:Bt.diameter/2,which:Nt});Yt||=be.skipped,be.pass&&he.push(be.pass)}Yt&&d.push({kind:"chamfer",text:`Some edges are too low to chamfer ${r(at)} without cutting the tabs or the spoilboard.`}),he.length?G({id:"chamfer",kind:"chamfer",label:"Chamfer the edges",tool:E(Bt),zTop:l.top,zBottom:Math.min(...he.map(ae=>ae.z-ae.depth)),region:H,levels:he,show:he.map(ae=>({z:ae.z,loops:ae.loops})),size:at,detail:`${r(at)} wide \xB7 ${Math.round(Bt.angle)}\xB0 bit \xB7 ${{all:"all edges",outside:"outside edges",inside:"pockets and holes"}[Nt]}`}):d.push({kind:"chamfer",text:`No ${ue>0?"other ":""}edge can take a ${r(at)} chamfer with ${Bt.name}.`})}}let ut=[],Ve=new Map;for(let at of C){if(at.kind!=="pocket"&&at.kind!=="corners"){ut.push(at);continue}let Nt=at.after&&Ve.has(at.after)?Ve.get(at.after):at.after,zt=ut.find(Bt=>Bt.kind===at.kind&&Bt.detail===at.detail&&Bt.zTop===at.zTop&&Bt.zBottom===at.zBottom&&Bt.tool.id===at.tool.id&&(Bt.after||null)===(Nt||null));zt?(zt.region=[...zt.region,...at.region],zt.count=(zt.count||1)+1,Ve.set(at.id,zt.id)):ut.push({...at,after:Nt})}for(let at of ut)at.count>1&&(at.kind==="pocket"&&(at.label=at.label==="Cut the opening"?`Cut ${at.count} openings`:`Clear ${at.count} pockets`),at.kind==="corners"&&(at.label=`Clean the corners of ${at.count} pockets`));C.length=0,C.push(...ut);for(let at of C){let Nt=e.toolOverride?.[at.id];if(Nt){let zt=t.find(Bt=>Bt.id===Nt);zt&&(at.tool=zt)}at.enabled=!e.disabled?.[at.id],at.feeds=J(at.kind==="chamfer"?{...at.tool,diameter:Math.min(at.tool.diameter,2*(at.size+Ui))}:at.tool),at.kind==="finish3d"&&(at.surface=Xg(n,h,Math.min(.2,at.tool.diameter/16)))}return{analysis:l,stock:h,zero:$c(h,e.zero),ops:Gg(C),warnings:d,job:e,mode3d:g,did3d:j,curved:Zt}}function Gg(n){let t=n.filter(d=>d.kind==="face"),e=[...n.filter(d=>d.kind==="cutout"),...n.filter(d=>d.kind==="chamfer")],i=n.filter(d=>d.kind!=="face"&&d.kind!=="cutout"&&d.kind!=="chamfer"),r=d=>d.region||(d.centers||[]).map(g=>Wg(g)),o=new Map(i.map(d=>[d,i.filter(g=>g!==d&&(d.after===g.id||g.zTop>d.zTop+dn&&rn(Ni(r(d),r(g)))>tn))])),l=new Set,h=[...t],u=t.length?t[t.length-1].tool:null;for(;l.size<i.length;){let d=i.filter(v=>!l.has(v)&&o.get(v).every(_=>l.has(_))),g=d.find(v=>u&&v.tool.id===u.id)||d[0];l.add(g),h.push(g),u=g.tool}return[...h,...e]}function Xg(n,t,e){let i={x0:t.minX,y0:t.minY,cell:e,nx:Math.ceil((t.maxX-t.minX)/e)+1,ny:Math.ceil((t.maxY-t.minY)/e)+1};return i.h=af(n,i),i}function Wg(n,t=32){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}function pa(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var dn,tn,Ui,ha,uf,ff,Bg,fa,df,ua,zg,no,Hg,Kr,Yc,mf=_n(()=>{kc();Gc();Zs();eo();Wc();dn=.01,tn=.05,Ui=.25,ha=.3,uf=25,ff=.1,Bg=.5,fa={fast:.1,balanced:.05,smooth:.02},df=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"];ua=n=>[[[n.minX,n.minY],[n.maxX,n.minY],[n.maxX,n.maxY],[n.minX,n.maxY]]],zg=(n,t)=>Math.abs(n-t)<.05;no=(n,t)=>Re(Re(n,-t),t),Hg=(n,t)=>{let e=rn(n);return e>0?rn(no(n,t))/e:0},Kr=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,Yc=n=>(Math.round(n*10)/10).toString()});function Tr(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(r,o)=>n-(o+1)*(n-t)/i)}function Er(n,t,e,i,r,o,l){let h=[...t.breaks(e,i),i];if(l)for(let d of l.edges(e,i))h.push(d);h.sort((d,g)=>d-g);let u=e;for(let d of h){if(d-u<1e-9)continue;let g=(u+d)/2,v=l&&l.inside(g)?l.top:-1/0,[_,x]=t.at(u),w=Math.max(r(u),v),E=n.at;E&&(Math.abs(E.z-w)>1e-6||Math.abs(E.x-_)>1e-6||Math.abs(E.y-x)>1e-6)&&n.feed(_,x,w,o);let[b,y]=t.at(d);n.feed(b,y,Math.max(r(d),v),o),u=d}}function gf(n,t,e,i,r,o,l){let h=Math.max(0,(i-r)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||h<1e-6){let[d,g]=t.at(e);return n.feed(d,g,l&&l.inside(e)?Math.max(r,l.top):r,o.plunge),Er(n,t,e,e+t.length,()=>r,o.feed,l),e}let u=e+h;return Er(n,t,e,u,d=>i-(d-e)/h*(i-r),Math.min(o.feed,o.plunge*2),l),Er(n,t,u,u+t.length,()=>r,o.feed,l),u}function Zg(n,t,e,i){let r=[];for(let o=t,l=0;l<500;o+=e,l++){let h=Oi(an(Re(n,-o,i),.001),.005);if(!h.length)break;r.push(h)}return r}function Jg(n){let t=n.map((r,o)=>r.map(l=>({loop:l,depth:o,kids:[]})));for(let r=1;r<t.length;r++)for(let o of t[r])(t[r-1].find(h=>br(o.loop[0],h.loop)&&Math.sign(On(h.loop))===Math.sign(On(o.loop)))||t[r-1].find(h=>br(o.loop[0],h.loop))||t[0][0]).kids.push(o);let e=[],i=r=>{if(!r.kids.length){e.push([r.loop]);return}for(let o of r.kids)i(o);e[e.length-1].push(r.loop)};for(let r of t[0]||[])On(r.loop)>0&&i(r);for(let r of t[0]||[])On(r.loop)<=0&&!t[0].some(o=>o.kids.includes(r))&&i(r);return e}function so(n,t){let e=0;for(let i of t)br(n,i)&&(e+=On(i)>0?1:-1);return e>0}function jg(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let r=1;r<i;r++){let o=r/i;if(!so([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function ma(n,t,e,i,r,o,l,h=null,u=null){let d=Math.min(i.stepover,e*.95),g=Zg(t,e+l,d,l>=.2?.05:void 0);if(!g.length)return;let v=Re(t,-(e+l)+.01),_=Jg(g),x=r;for(let w of Tr(r,o,i.stepdown)){for(let E of _){let b=new Bi(E[0]),[y,L]=b.at(0);n.goTo(y,L,Math.max(x,u?u(y,L):x)),n.feed(y,L,x,i.plunge);let V=gf(n,b,0,x,w,i);for(let A=1;A<E.length;A++){let R=b.at(V),D=new Bi(E[A]),H=D.nearest(R);if(!jg(R,D.at(H),v)){[y,L]=D.at(H);let C=n.travel?Math.max(x+1,Math.min(h??1/0,n.travel({x:R[0],y:R[1]},{x:y,y:L}))):h??x+1;n.rapid(R[0],R[1],C),n.rapid(y,L,C);let k=Math.max(x,u?u(y,L):x)+1;C>k&&n.rapid(y,L,k),n.feed(y,L,w,i.plunge)}Er(n,D,H,H+D.length,()=>w,i.feed),b=D,V=H}}x=w}n.retract()}function _f(n,t,e,i,r,o,l){let h=Oi(an(Re(t,-e),.001),.005);for(let u of h){let d=new Bi(u),[g,v]=d.at(0);n.goTo(g,v,r);for(let _ of Tr(r,o,l))n.feed(g,v,_,i.plunge),Er(n,d,0,d.length,()=>_,i.feed*.9);n.retract()}}function Kg(n,t,e,i,r,o,l,h){let u=e?Re(e,-(i-.05)):null,d=e?Re(e,-(i+.05)):null,g=v=>!e||so(v,u)&&!so(v,d);for(let v of Oi(an(Re(t,-(i+.02)),.001),.005)){let _=new Bi(v),x=Math.max(8,Math.ceil(_.length/.5)),w=Array.from({length:x},(y,L)=>g(_.at(L/x*_.length)));if(!w.some(Boolean))continue;let E=w.every(Boolean),b=E?0:w.indexOf(!1);for(let y=0;y<x;y++){let L=(b+y)%x;if(!w[L]||!E&&w[(L-1+x)%x])continue;let V=L;for(;V-L<x-1&&w[(V+1)%x];)V++;let A=L/x*_.length,R=E?A+_.length:(V+1)/x*_.length,[D,H]=_.at(A);if(n.goTo(D,H,Math.max(o,h(D,H))),n.feed(D,H,l,r.plunge),Er(n,_,A,R,()=>l,r.feed*.9),n.retract(),E)break}}}function Qg(n,t,e){for(let i of t)for(let r of ro(i.loops.map(o=>[o]),n.at).map(o=>o[0])){let o=new Bi(r.slice().reverse()),l=Math.max(8,Math.ceil(o.length/.25)),h=Array.from({length:l},(g,v)=>!so(o.at(v/l*o.length),i.bad));if(!h.some(Boolean))continue;let u=h.every(Boolean),d=u?0:h.indexOf(!1);for(let g=0;g<l;g++){let v=(d+g)%l;if(!h[v]||!u&&h[(v-1+l)%l])continue;let _=v;for(;_-v<l-1&&h[(_+1)%l];)_++;let x=v/l*o.length,w=u?x+o.length:_/l*o.length;if(!u&&w-x<.5)continue;let[E,b]=o.at(x);for(let y of Tr(i.z,i.z-i.depth,e.stepdown))u?(!n.at||Math.hypot(n.at.x-E,n.at.y-b)>1e-6)&&n.goTo(E,b,i.z):n.goTo(E,b,i.z),n.feed(E,b,y,e.plunge),Er(n,o,x,w,()=>y,e.feed),u||n.retract();if(n.retract(),u)break}}}function t0(n,t,e,i,r,o,l){let h=an(kn(t,Re(Re(t,-i),i)),.01);if(!h.length)return;let u=Re(h,e+.5);for(let d of Oi(an(Re(t,-e),.001),.005)){let g=new Bi(d),v=Math.max(8,Math.ceil(g.length/.25)),_=Array.from({length:v},(w,E)=>u.some(b=>br(g.at(E/v*g.length),b)));if(_.every(Boolean)){_f(n,t,e,r,o,l,r.stepdown);return}let x=_.indexOf(!1);for(let w=0;w<v;w++){let E=(x+w)%v;if(!_[E]||_[(E-1+v)%v])continue;let b=E;for(;_[(b+1)%v]&&b-E<v;)b++;let y=E/v*g.length,L=(b+1)/v*g.length,[V,A]=g.at(y);n.goTo(V,A,o);let R=!0;for(let D of Tr(o,l,r.stepdown)){let H=[...g.breaks(y,L),L],C=R?H:[...H.slice(0,-1).reverse(),y],[k,G]=g.at(R?y:L);n.feed(k,G,D,r.plunge);for(let Y of C){let[Z,J]=g.at(Y);n.feed(Z,J,D,r.feed)}R=!R}n.retract()}}}function e0(n,t,e,i,r,o){let l=Math.min(i.stepover,e*1.6),h=t.minX-e-2,u=t.maxX+e+2;for(let d of Tr(r,o,i.stepdown)){let g=t.minY+e*.6;n.goTo(h,g,r),n.feed(h,g,d,i.plunge);let v=1;for(;n.feed(v>0?u:h,g,d,i.feed),!(g>=t.maxY-e*.6-1e-6);)g=Math.min(g+l,t.maxY-e*.6),n.feed(v>0?u:h,g,d,i.feed),v=-v}n.retract()}function n0(n,t,e,i,r,o){let l=Math.max(.5,o*1.5);for(let h of t){n.goTo(h.x,h.y,i);let u=i;for(;u>r+1e-6;){let d=Math.max(r,u-l);u<i&&n.rapid(h.x,h.y,u+.5),n.feed(h.x,h.y,d,e.plunge),n.rapid(h.x,h.y,i+1),u=d}n.retract()}}function i0(n,t,e,i){let r=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!r)return null;let o=t.tabs.length??Fi(t.material).length,l=2*e+o,h=Array.from({length:r},(d,g)=>{let v=(g+.5)/r*n;return[v-l/2,v+l/2]}),u=n;return{top:i+(t.tabs.height??Fi(t.material).height),inside:d=>{let g=(d%u+u)%u;return h.some(([v,_])=>g>v&&g<_)},edges:(d,g)=>{let v=[];for(let _=Math.floor(d/u);_*u<=g;_++)for(let[x,w]of h)for(let E of[x,w]){let b=_*u+E;b>d&&b<g&&v.push(b)}return v}}}function r0(n,t,e,i,r,o,l,h){let u=[{off:e+h,fd:i}];h>0&&u.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let d of u)for(let g of zn(t).map(v=>v[0])){let v=Oi(an(Re([g],d.off),.001),.005).filter(_=>On(_)>0);for(let _ of v){let x=new Bi(_.slice().reverse()),w=i0(x.length,l,e,0),[E,b]=x.at(0);n.goTo(E,b,r),n.feed(E,b,r,i.plunge);let y=0,L=r,V=d.finish?Tr(r,o,Math.max(i.stepdown,Math.min(6*e,r-o))):Tr(r,o,i.stepdown);for(let A of V)y=gf(n,x,y,L,A,d.fd,w),L=A;n.retract()}}}function s0(n,t,e){let i=t.diameter/2,r=n.cell,o=t.kind==="ball",l=r*Math.SQRT1_2,h=Math.ceil((i+l)/r),u=A=>o?i-Math.sqrt(Math.max(0,i*i-A*A)):0,d=[];for(let A=-h;A<=h;A++)for(let R=-h;R<=h;R++){let D=Math.max(0,Math.hypot(R,A)*r-l);D<=i+1e-9&&d.push(R,A,u(D))}let{nx:g,ny:v,h:_,x0:x,y0:w}=n,E={r:i,c:r,n:h,zFloor:e,x:A=>x+A*r,y:A=>w+A*r};E.drop=(A,R)=>{let D=-1/0;for(let H=0;H<d.length;H+=3){let C=A+d[H],k=R+d[H+1];if(C<0||k<0||C>=g||k>=v)continue;let G=_[k*g+C]-d[H+2];G>D&&(D=G)}return D===-1/0?null:Math.max(D,e)},E.dropAt=(A,R)=>{let D=(A-x)/r,H=(R-w)/r,C=(i+l)/r,k=-1/0;for(let G=Math.max(0,Math.ceil(H-C));G<=Math.min(v-1,Math.floor(H+C));G++)for(let Y=Math.max(0,Math.ceil(D-C));Y<=Math.min(g-1,Math.floor(D+C));Y++){let Z=Math.max(0,Math.hypot(Y-D,G-H)*r-l);if(Z>i)continue;let J=_[G*g+Y]-u(Z);J>k&&(k=J)}return k===-1/0?null:Math.max(k,e)},E.underAt=(A,R)=>{let D=(A-x)/r,H=(R-w)/r,C=(i+l)/r,k=e;for(let G=Math.max(0,Math.ceil(H-C));G<=Math.min(v-1,Math.floor(H+C));G++)for(let Y=Math.max(0,Math.ceil(D-C));Y<=Math.min(g-1,Math.floor(D+C));Y++)_[G*g+Y]>k&&(k=_[G*g+Y]);return k};let b=1/0,y=-1,L=1/0,V=-1;for(let A=0;A<v;A++)for(let R=0;R<g;R++)_[A*g+R]!==-1/0&&(R<b&&(b=R),R>y&&(y=R),A<L&&(L=A),A>V&&(V=A));return E.box=y<0?null:{i0:Math.max(0,b-h),i1:Math.min(g-1,y+h),j0:Math.max(0,L-h),j1:Math.min(v-1,V+h)},E}function vf(n,t,e,i,r,o){let l=e[0],h=n.at;if(h&&!h.r&&Math.hypot(l.x-h.x,l.y-h.y)<=r){let d=Math.max(1,Math.ceil(Math.hypot(l.x-h.x,l.y-h.y)/(t.c/2))),g=Math.max(h.z,l.z),v=!1;for(let _=1;_<d;_++){let x=_/d,w=t.dropAt(h.x+(l.x-h.x)*x,h.y+(l.y-h.y)*x)??t.zFloor;w>h.z+(l.z-h.z)*x+.001&&(v=!0,g=Math.max(g,w))}v&&(n.feed(h.x,h.y,g+.5,i.feed),n.feed(l.x,l.y,g+.5,i.feed)),n.feed(l.x,l.y,l.z,i.plunge)}else n.goTo(l.x,l.y,t.underAt(l.x,l.y)+o),n.feed(l.x,l.y,l.z,i.plunge);let u=l;for(let d of e.slice(1))n.feed(d.x,d.y,d.z,u.z-d.z>o0*Math.hypot(d.x-u.x,d.y-u.y)?i.plunge:i.feed),u=d}function l0(n,t,e,i,r,o,l,h=!0){let u=s0(t,e,o);if(!u.box)return;let{r:d,c:g}=u,{i0:v,i1:_,j0:x,j1:w}=u.box,E=e.kind==="ball"?2*Math.sqrt(Math.max(0,2*d*r-r*r)):i.stepover*.5,b=Math.max(1,Math.floor(Math.min(E,d)/g+1e-9)),y=3*b*g+1e-6,L=[];for(let V=x;V<=w;V+=b)L.push(V);L[L.length-1]!==w&&L.push(w),L.forEach((V,A)=>{let R=[],D=[];for(let H=v;H<=_;H++){let C=u.drop(H,V);if(C===null){D.length&&R.push(D),D=[];continue}D.push({x:u.x(H),y:u.y(V),z:C})}D.length&&R.push(D),A%2&&(R.reverse(),R.forEach(H=>H.reverse()));for(let H of R)vf(n,u,yf(H,.005),i,y,l)}),h&&c0(n,u,i,Math.min(E,d),y,l),n.retract()}function c0(n,t,e,i,r,o){let{i0:h,i1:u,j0:d,j1:g}=t.box,v=Math.floor((u-h)/2)+1,_=Math.floor((g-d)/2)+1,x=new Float32Array(v*_),w=-1/0;for(let A=0;A<_;A++)for(let R=0;R<v;R++){let D=t.drop(h+R*2,d+A*2);x[A*v+R]=D===null?NaN:D,D!==null&&D>w&&(w=D)}let E=2*t.c,b=a0*E,y=A=>t.x(h+A*2),L=A=>t.y(d+A*2),V=new Uint8Array(v*_);for(let A=0;A+1<_;A++)for(let R=0;R+1<v;R++){let D=x[A*v+R],H=x[A*v+R+1],C=x[(A+1)*v+R],k=x[(A+1)*v+R+1];[D,H,C,k].some(Number.isNaN)||(Math.abs(D-H)>b||Math.abs(C-k)>b||Math.abs(D-C)>b||Math.abs(H-k)>b)&&(V[A*v+R]=1)}for(let A=w-i/2;A>t.zFloor+.05;A-=i){let R=new Map,D=[],H=(Y,Z,J)=>{let j=J?`h${Y},${Z}`:`v${Y},${Z}`;if(!R.has(j)){let K=x[Z*v+Y],lt=J?x[Z*v+Y+1]:x[(Z+1)*v+Y],gt=(A-K)/(lt-K);R.set(j,{key:j,x:J?y(Y)+gt*E:y(Y),y:J?L(Z):L(Z)+gt*E,segs:[]})}return R.get(j)};for(let Y=0;Y+1<_;Y++)for(let Z=0;Z+1<v;Z++){if(!V[Y*v+Z])continue;let J=x[Y*v+Z]>A,j=x[Y*v+Z+1]>A,K=x[(Y+1)*v+Z]>A,lt=x[(Y+1)*v+Z+1]>A,gt=[];J!==j&&gt.push(H(Z,Y,!0)),j!==lt&&gt.push(H(Z+1,Y,!1)),K!==lt&&gt.push(H(Z,Y+1,!0)),J!==K&&gt.push(H(Z,Y,!1));for(let Et=0;Et+1<gt.length;Et+=2){let yt=[gt[Et],gt[Et+1]];D.push(yt),yt[0].segs.push(yt),yt[1].segs.push(yt)}}let C=new Set,k=[];for(let Y of D){if(C.has(Y))continue;C.add(Y);let Z=[Y[0],Y[1]];for(let J of[!1,!0])for(;;){let j=J?Z[0]:Z[Z.length-1],K=j.segs.find(gt=>!C.has(gt));if(!K)break;C.add(K);let lt=K[0]===j?K[1]:K[0];J?Z.unshift(lt):Z.push(lt)}Z.length>=3&&k.push(Z)}let G=n.at;for(;k.length;){let Y=0,Z=1/0,J=!1;k.forEach((lt,gt)=>{for(let[Et,yt]of[[lt[0],!1],[lt[lt.length-1],!0]]){let It=G?Math.hypot(Et.x-G.x,Et.y-G.y):0;It<Z&&(Z=It,Y=gt,J=yt)}});let[j]=k.splice(Y,1);J&&j.reverse();let K=j.map(lt=>({x:lt.x,y:lt.y,z:Math.max(A,t.dropAt(lt.x,lt.y)??A)}));vf(n,t,yf(K,.005),e,r,o),G=n.at}}}function yf(n,t){if(n.length<3)return n;let e=new Uint8Array(n.length);e[0]=e[n.length-1]=1;let i=[[0,n.length-1]];for(;i.length;){let[r,o]=i.pop(),l=n[r],h=n[o],u=h.x-l.x,d=h.y-l.y,g=h.z-l.z,v=u*u+d*d+g*g,_=-1,x=t;for(let w=r+1;w<o;w++){let E=n[w],b=v>0?((E.x-l.x)*u+(E.y-l.y)*d+(E.z-l.z)*g)/v:0,y=Math.hypot(l.x+u*b-E.x,l.y+d*b-E.y,l.z+g*b-E.z);y>x&&(x=y,_=w)}_>=0&&(e[_]=1,i.push([r,_],[_,o]))}return n.filter((r,o)=>e[o])}function h0(n){let t=[],e=[];return n.forEach((i,r)=>{let o=[];for(let l of zn(i.region)){let h=Di([l[0]]),u=t.find(g=>g.k===r-1&&g.b.minX<h.maxX&&h.minX<g.b.maxX&&g.b.minY<h.maxY&&h.minY<g.b.maxY&&rn(Ni(g.last,l))>0),d=u?u.spot:{parts:[]};u||e.push(d),d.parts.push({k:r,area:l}),o.push({k:r,b:h,last:l,spot:d})}t.length=0,t.push(...o)}),e.map(i=>Object.assign([...i.parts[0].area],{parts:i.parts}))}function ro(n,t){let e=l=>{let h=Di([l[0]]);return[(h.minX+h.maxX)/2,(h.minY+h.maxY)/2]},i=n.map(l=>({a:l,m:e(l)})),r=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let l=0;for(let u=1;u<i.length;u++)Math.hypot(i[u].m[0]-o[0],i[u].m[1]-o[1])<Math.hypot(i[l].m[0]-o[0],i[l].m[1]-o[1])&&(l=u);let[h]=i.splice(l,1);r.push(h.a),o=h.m}return r}function u0(n,t,e,i,r,o){let l=[...new Set(n.map(u=>u.z))].sort((u,d)=>d-u),h=o;for(let u of l){if(u<t-1e-6||!so([i,r],f0(n,u,e)))break;h=u}return Math.max(h,t)}function f0(n,t,e){let i=n.filter(h=>Math.abs(h.z-t)<1e-6);n.inner||=new Map;let r=`${t}|${e}`,o=n.inner.get(r);if(o&&o.n===i.length)return o.loops;let l=Re(Kn(i.flatMap(h=>h.area)),-e-qg);return n.inner.set(r,{n:i.length,loops:l}),l}function xf(n){let t=n.stock.top+Yg,e=[],i=null,r=(Qn[n.job.finish]||Qn.balanced).allowance,l=n.ops.some(h=>h.kind==="face"&&h.enabled)?n.analysis.top:n.stock.top;for(let h of n.ops){let u=new qc(t),d=h.kind!=="face"&&h.zTop>=n.analysis.top-1e-6?Math.max(h.zTop,l):h.zTop,g=h.tool.diameter/2,v=h.feeds,_=Math.min(h.tool.fluteLength||1/0,3*h.tool.diameter);switch(h.kind){case"face":e0(u,n.stock,g,v,d,h.zBottom);break;case"pocket":case"step":case"hole":for(let x of ro(zn(h.region),u.at))ma(u,x,g,v,d,h.zBottom,r),r>0&&_f(u,x,g,v,d,h.zBottom,_);break;case"corners":{let x=n.ops.find(w=>w.id===h.after);t0(u,h.region,g,x?x.tool.diameter/2:g*2,v,d,h.zBottom);break}case"rough3d":case"rest3d":{let x=h.kind==="rough3d"?h.allowance:0,w=E=>(b,y)=>u0(e,h.layers[E].zFrom,g,b,y,d);if(i||=new Zc(n.stock,l),u.travel=(E,b)=>i.over(E,b,g),h.kind==="rest3d"){for(let E of ro(h0(h.layers),u.at))for(let{k:b,area:y}of E.parts){let L=h.layers[b],V=L.zFrom>=n.analysis.top-1e-6?d:L.zFrom;ma(u,y,g,v,V,L.z,0,d+1,w(b));let A=Re(Re(y,-g),g);A.length&&h.enabled&&(e.push({zFrom:V,z:L.z,area:A}),i.layer(A,V,L.z))}u.travel=null,u.retract();break}h.layers.forEach((E,b)=>{let y=E.zFrom>=n.analysis.top-1e-6?d:E.zFrom;for(let V of ro(zn(E.region),u.at))ma(u,V,g,v,y,E.z,x,d+1,w(b));for(let V of ro(zn(E.fresh||[]),u.at))ma(u,V,g,v,d,E.z,x,d+1);x>0&&b&&Kg(u,E.exact||E.region,h.layers[b-1].exact||h.layers[b-1].region,g,v,y,E.z,w(b));let L=Re(Re([...E.region,...E.fresh||[]],-(g+x)),g);L.length&&h.enabled&&(e.push({zFrom:y,z:E.z,area:L}),i.layer(L,y,E.z))}),u.travel=null,u.retract();break}case"finish3d":l0(u,h.surface,h.tool,v,h.ridge,0,h.left??$g,h.steep!==!1);break;case"drill":n0(u,h.centers,v,d,h.zBottom,h.tool.diameter);break;case"cutout":r0(u,h.region,g,v,d,h.zBottom,n.job,r);break;case"chamfer":Qg(u,h.levels,v);break}h.moves=u.moves}return n}var Yg,$g,qg,qc,Bi,o0,a0,Zc,Mf=_n(()=>{Zs();eo();Yg=3,$g=3.5,qg=.02;qc=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null,this.travel=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,r){this.push({x:t,y:e,z:i,f:r})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){let r=this.at,o=this.clearZ;r&&this.travel&&(o=Math.min(o,Math.max(this.travel(r,{x:t,y:e}),r.z,i+1))),r&&this.rapid(r.x,r.y,o),this.rapid(t,e,o),this.rapid(t,e,i+1)}retract(){this.at&&!this.travel&&this.rapid(this.at.x,this.at.y,this.clearZ)}},Bi=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],r=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(r[0]-i[0],r[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,r=1;for(;r<this.s.length-1&&this.s[r]<i;)r++;let o=this.p[r-1],l=this.p[r%this.p.length],h=this.s[r]-this.s[r-1]||1,u=(i-this.s[r-1])/h;return[o[0]+(l[0]-o[0])*u,o[1]+(l[1]-o[1])*u]}breaks(t,e){let i=[],r=this.length;for(let o=Math.floor(t/r);o*r<=e;o++)for(let l=0;l<this.p.length;l++){let h=o*r+this.s[l];h>t+1e-9&&h<e-1e-9&&i.push(h)}return i}nearest([t,e]){let i=0,r=1/0;for(let o=0;o<this.p.length;o++){let l=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;l<r&&(r=l,i=this.s[o])}return i}};o0=Math.tan(70*Math.PI/180);a0=Math.tan(50*Math.PI/180);Zc=class{constructor(t,e){this.c=1,this.x0=t.minX,this.y0=t.minY,this.nx=Math.ceil((t.maxX-t.minX)/this.c)+1,this.ny=Math.ceil((t.maxY-t.minY)/this.c)+1,this.top=new Float32Array(this.nx*this.ny).fill(e)}layer(t,e,i){let{c:r,x0:o,y0:l,nx:h,ny:u,top:d}=this;for(let g=0;g<u;g++){let v=l+g*r,_=[];for(let x of t)for(let w=0;w<x.length;w++){let[E,b]=x[w],[y,L]=x[(w+1)%x.length];b<=v!=L<=v&&_.push(E+(v-b)/(L-b)*(y-E))}_.sort((x,w)=>x-w);for(let x=0;x+1<_.length;x+=2)for(let w=Math.max(0,Math.ceil((_[x]-o)/r));w<=Math.min(h-1,Math.floor((_[x+1]-o)/r));w++){let E=g*h+w;d[E]<=e+1e-6&&i<d[E]&&(d[E]=i)}}}over(t,e,i){let{c:r,x0:o,y0:l,nx:h,ny:u,top:d}=this,g=(i+1.5*r)/r,v=Math.max(1,Math.ceil(Math.hypot(e.x-t.x,e.y-t.y)/(r/2))),_=-1/0;for(let x=0;x<=v;x++){let w=(t.x+(e.x-t.x)*x/v-o)/r,E=(t.y+(e.y-t.y)*x/v-l)/r;for(let b=Math.max(0,Math.ceil(E-g));b<=Math.min(u-1,Math.floor(E+g));b++)for(let y=Math.max(0,Math.ceil(w-g));y<=Math.min(h-1,Math.floor(w+g));y++)(y-w)**2+(b-E)**2<=g*g&&d[b*h+y]>_&&(_=d[b*h+y])}return _+1}}});function bf(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:r=null,spindleDelay:o=3}=t,l=Number.isFinite(r)?`G53 G0 Z${tr(r)}`:"G53 G0 Z0",h=n.zero,u=n.stock,d=[Qr(`ncCAM: ${e}`),Qr(`Stock ${tr(u.width)} x ${tr(u.depth)} x ${tr(u.thickness)} mm, ${(Sr[n.job.material]||{}).name||n.job.material}, ${(Qn[n.job.finish]||{}).name||n.job.finish}`),Qr(`Zero: X Y at the ${p0[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],g=n.ops.filter(E=>E.enabled&&E.moves&&E.moves.length);for(let E of[...new Map(g.map(b=>[b.tool.id,b.tool])).values()])d.push(Qr(`T${wr(E,i)}: ${E.name}, ${tr(E.diameter)} mm`));d.push("G21 G90 G94 G17");let v=null,_={},x=null,w=null;for(let E of g){(!v||E.tool.id!==v.id)&&(v&&d.push("M5"),d.push(l,`M6 T${wr(E.tool,i)}`,Qr(E.tool.name)),v=E.tool,d.push(`M3 S${E.feeds.rpm}`),o>0&&d.push(`G4 P${o}`),_={},x=null,w=null),d.push(Qr(`${E.label}${E.detail?": "+E.detail:""}`));for(let b of E.moves){let y=tr(b.x-h.x),L=tr(b.y-h.y),V=tr(b.z-h.z);if(b.r&&(y!==_.x||L!==_.y)&&V!==_.z){let H=_.z===void 0||+V<+_.z?[`X${y} Y${L}`,`Z${V}`]:[`Z${V}`,`X${y} Y${L}`];for(let C of H)d.push(`${w==="G0"?"":"G0 "}${C}`),w="G0";_={x:y,y:L,z:V};continue}let A=b.r?"G0":"G1",R=A===w?"":A;y!==_.x&&(R+=` X${y}`),L!==_.y&&(R+=` Y${L}`),V!==_.z&&(R+=` Z${V}`),!b.r&&b.f!==x&&(R+=` F${Math.round(b.f)}`,x=b.f),R=R.trim(),!(!R||R===A)&&(d.push(R),w=A,_={x:y,y:L,z:V})}}return d.push("M5",l,"M30",""),d.join(`
`)}function Sf(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let r=0,o=null,l=null;for(let h of n.ops){if(!h.enabled||!h.moves)continue;(!l||h.tool.id!==l.id)&&(r+=e+(l?i:0),l=h.tool);let u=0;for(let d of h.moves){if(o){let g=Math.hypot(d.x-o.x,d.y-o.y,d.z-o.z);u+=g/(d.r?t:d.f)*60}o=d}h.seconds=u,r+=u}return r}var tr,d0,Qr,p0,wf=_n(()=>{eo();tr=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},d0={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Qr=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>d0[t]??"")})`,p0={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});var Jc=_n(()=>{kc();tf();rf();mf();Mf();wf();Gc();eo();Wc();Zs()});function _0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function v0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function xo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bd(){let n=xo("canvas");return n.style.display="block",n}function Mo(...n){let t="THREE."+n.shift();Ms?Ms("log",t,...n):console.log(t,...n)}function kd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function _e(...n){n=kd(n);let t="THREE."+n.shift();if(Ms)Ms("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ye(...n){n=kd(n);let t="THREE."+n.shift();if(Ms)Ms("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Rr(...n){let t=n.join(" ");t in Cf||(Cf[t]=!0,_e(...n))}function zd(n,t,e){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Xi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Ne(n,t,e){return Math.max(t,Math.min(e,n))}function eu(n,t){return(n%t+t)%t}function y0(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function x0(n,t,e){return n!==t?(e-n)/(t-n):0}function go(n,t,e){return(1-e)*n+e*t}function M0(n,t,e,i){return go(n,t,1-Math.exp(-e*i))}function b0(n,t=1){return t-Math.abs(eu(n,t*2)-t)}function S0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function w0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function E0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function T0(n,t){return n+Math.random()*(t-n)}function A0(n){return n*(.5-Math.random())}function C0(n){n!==void 0&&(Pf=n);let t=Pf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function P0(n){return n*_s}function I0(n){return n*bs}function R0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function L0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function N0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function D0(n,t,e,i,r){let o=Math.cos,l=Math.sin,h=o(e/2),u=l(e/2),d=o((t+i)/2),g=l((t+i)/2),v=o((t-i)/2),_=l((t-i)/2),x=o((i-t)/2),w=l((i-t)/2);switch(r){case"XYX":n.set(h*g,u*v,u*_,h*d);break;case"YZY":n.set(u*_,h*g,u*v,h*d);break;case"ZXZ":n.set(u*v,u*_,h*g,h*d);break;case"XZX":n.set(h*g,u*w,u*x,h*d);break;case"YXY":n.set(u*x,h*g,u*w,h*d);break;case"ZYZ":n.set(u*w,u*x,h*g,h*d);break;default:_e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function li(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function O0(){let n={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===ze&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===ze&&(r.r=vs(r.r),r.g=vs(r.g),r.b=vs(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?yo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vo]:{primaries:t,whitePoint:i,transfer:yo,toXYZ:Rf,fromXYZ:Lf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:t,whitePoint:i,transfer:ze,toXYZ:Rf,fromXYZ:Lf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),n}function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?il.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(_e("Texture: Unable to serialize Texture."),{})}function ih(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function uh(n,t,e,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){Cr.fromArray(n,o);let h=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),u=t.dot(Cr),d=e.dot(Cr),g=i.dot(Cr);if(Math.max(-Math.max(u,d,g),Math.min(u,d,g))>h)return!1}return!0}function Ta(n,t,e,i,r,o){ds.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(fo.x=o*ds.x-r*ds.y,fo.y=r*ds.x+o*ds.y):fo.copy(ds),n.copy(t),n.x+=fo.x,n.y+=fo.y,n.applyMatrix4(Gd)}function j0(n,t,e,i,r,o,l,h){let u;if(t.side===Ln?u=i.intersectTriangle(l,o,r,!0,h):u=i.intersectTriangle(r,o,l,t.side===gr,h),u===null)return null;Da.copy(h),Da.applyMatrix4(n.matrixWorld);let d=e.ray.origin.distanceTo(Da);return d<e.near||d>e.far?null:{distance:d,point:Da.clone(),object:n}}function Oa(n,t,e,i,r,o,l,h,u,d){n.getVertexPosition(h,Ia),n.getVertexPosition(u,Ra),n.getVertexPosition(d,La);let g=j0(n,t,e,i,Ia,Ra,La,Wf);if(g){let v=new ht;xi.getBarycoord(Wf,Ia,Ra,La,v),r&&(g.uv=xi.getInterpolatedAttribute(r,h,u,d,v,new me)),o&&(g.uv1=xi.getInterpolatedAttribute(o,h,u,d,v,new me)),l&&(g.normal=xi.getInterpolatedAttribute(l,h,u,d,v,new ht),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));let _={a:h,b:u,c:d,normal:new ht,materialIndex:0};xi.getNormal(Ia,Ra,La,_.normal),g.face=_,g.barycoord=v}return g}function Ba(n,t,e,i,r,o,l){let h=n.geometry.attributes.position;if(ll.fromBufferAttribute(h,r),cl.fromBufferAttribute(h,o),e.distanceSqToSegment(ll,cl,vh,$f)>i)return;vh.applyMatrix4(n.matrixWorld);let d=t.ray.origin.distanceTo(vh);if(!(d<t.near||d>t.far))return{distance:d,point:$f.clone().applyMatrix4(n.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:n}}function Br(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];if(Jf(r))r.isRenderTargetTexture?(_e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Jf(r[0])){let o=[];for(let l=0,h=r.length;l<h;l++)o[l]=r[l].clone();t[e][i]=o}else t[e][i]=r.slice();else t[e][i]=r}}return t}function Tn(n){let t={};for(let e=0;e<n.length;e++){let i=Br(n[e]);for(let r in i)t[r]=i[r]}return t}function Jf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Q0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function iu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}function ps(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function xh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Wd(n,t,e,i,r){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*r}function n_(n,t,e,i,r){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(r-i)}function i_(n,t,e,i,r){let o=(n-t)/(r-t);for(let l=0;l<8;l++){let h=Wd(o,t,e,i,r)-n;if(Math.abs(h)<1e-10)break;let u=n_(o,t,e,i,r);if(Math.abs(u)<1e-10)break;o=Math.max(0,Math.min(1,o-h/u))}return o}function jf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function id(n,t){return n.distance-t.distance}function Ph(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let o=n.children;for(let l=0,h=o.length;l<h;l++)Ph(o[l],t,e,!0)}}function ou(n,t,e,i){let r=f_(i);switch(e){case Jh:return n*t;case Kh:return n*t/r.components*r.byteLength;case Nl:return n*t/r.components*r.byteLength;case xr:return n*t*2/r.components*r.byteLength;case Dl:return n*t*2/r.components*r.byteLength;case jh:return n*t*3/r.components*r.byteLength;case ni:return n*t*4/r.components*r.byteLength;case Ol:return n*t*4/r.components*r.byteLength;case Xo:case Wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Yo:case $o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:case kl:return Math.max(n,16)*Math.max(t,8)/4;case Fl:case Bl:return Math.max(n,8)*Math.max(t,8)/2;case zl:case Vl:case Gl:case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Hl:case qo:case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case oc:case ac:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cc:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Zo:case uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f_(n){switch(n){case Un:case Yh:return{byteLength:1,components:1};case Os:case $h:case mi:return{byteLength:2,components:1};case Rl:case Ll:return{byteLength:2,components:4};case di:case Il:case pi:return{byteLength:4,components:1};case qh:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var pr,mr,sd,Rh,od,Vo,ad,Ns,gr,Ln,En,Ei,Ds,Lh,Nh,Dh,ld,Or,cd,hd,ud,fd,dd,pd,md,gd,Oh,Fh,_d,vd,yd,xd,Md,bd,Sd,wd,Ed,$a,qa,Za,ys,Ja,ja,Ka,Qa,Uh,Td,Ad,fi,Bh,kh,zh,Vh,Hh,Gh,Xh,Wh,_r,Fr,Al,Cl,Ho,tl,Mi,el,mn,Cd,Go,yn,Pl,vr,Un,Yh,$h,Os,Il,di,pi,mi,Rl,Ll,Fs,qh,Zh,Jh,jh,ni,bi,yr,Kh,Nl,xr,Dl,Ol,Xo,Wo,Yo,$o,Fl,Ul,Bl,kl,zl,Vl,Hl,Gl,Xl,qo,Wl,Yl,$l,ql,Zl,Jl,jl,Kl,Ql,tc,ec,nc,ic,rc,sc,oc,ac,lc,cc,hc,Zo,uc,_o,nl,Wa,Sh,wh,Eh,Th,Pd,fc,Id,$i,In,vo,yo,ze,Ya,Rd,Ld,Nd,Dd,dc,Od,Fd,pc,Ud,Qh,Ur,tu,ci,xs,Cf,Ms,Vd,hi,bn,Pf,_s,bs,nu,me,Wn,ht,Kc,If,Ce,Qc,Rf,Lf,Oe,ts,il,F0,Ss,U0,eh,Rn,Qe,rl,Fn,bo,sl,Xe,es,si,B0,k0,er,_a,Hn,Nf,Df,Yi,ws,z0,Of,ns,ki,va,ao,V0,H0,Ff,Uf,Bf,kf,G0,is,nh,ln,ei,X0,Es,Hd,nr,ya,Ee,Sn,So,oi,zi,rh,Vi,rs,ss,zf,sh,oh,ah,lh,ch,hh,xi,or,Hi,ai,xa,os,as,ls,ir,rr,Ar,lo,Ma,ba,Cr,on,Sa,W0,Ye,wo,Eo,$e,Y0,co,fh,Lr,$0,ti,dh,cs,Gn,ho,pn,Ke,ol,Pn,To,ph,q0,Z0,Xn,J0,Si,Ts,hs,uo,us,fs,ds,fo,Gd,wa,po,Ea,Vf,mh,Hf,Ao,Gi,gh,Aa,Ca,ar,Yn,Gf,Pr,Pa,Xf,Ia,Ra,La,_h,Na,Wf,Da,Be,al,Ir,K0,Fa,As,ui,ll,cl,Yf,mo,Ua,vh,$f,Nr,qf,Zf,Dr,Co,Po,lr,hl,Io,cr,wi,Cs,ka,za,yh,Va,Ps,Ro,Lo,hr,Xd,t_,e_,$n,ul,qn,fl,dl,No,ur,pl,ml,gl,_l,Zn,fr,vl,yl,xl,Do,dr,Ml,bl,Yd,Sl,Oo,Fo,Mh,Kf,Qf,wl,Ha,Ga,yi,Uo,sr,td,ed,wn,Is,Ah,Rs,ms,gs,El,Tl,ru,r_,su,s_,o_,a_,l_,c_,h_,u_,Ch,je,nS,nd,Bo,Ls,Ih,rd,Xa,bh,ko,zo,au=_n(()=>{pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sd=0,Rh=1,od=2,Vo=1,ad=2,Ns=3,gr=0,Ln=1,En=2,Ei=0,Ds=1,Lh=2,Nh=3,Dh=4,ld=5,Or=100,cd=101,hd=102,ud=103,fd=104,dd=200,pd=201,md=202,gd=203,Oh=204,Fh=205,_d=206,vd=207,yd=208,xd=209,Md=210,bd=211,Sd=212,wd=213,Ed=214,$a=0,qa=1,Za=2,ys=3,Ja=4,ja=5,Ka=6,Qa=7,Uh=0,Td=1,Ad=2,fi=0,Bh=1,kh=2,zh=3,Vh=4,Hh=5,Gh=6,Xh=7,Wh=300,_r=301,Fr=302,Al=303,Cl=304,Ho=306,tl=1e3,Mi=1001,el=1002,mn=1003,Cd=1004,Go=1005,yn=1006,Pl=1007,vr=1008,Un=1009,Yh=1010,$h=1011,Os=1012,Il=1013,di=1014,pi=1015,mi=1016,Rl=1017,Ll=1018,Fs=1020,qh=35902,Zh=35899,Jh=1021,jh=1022,ni=1023,bi=1026,yr=1027,Kh=1028,Nl=1029,xr=1030,Dl=1031,Ol=1033,Xo=33776,Wo=33777,Yo=33778,$o=33779,Fl=35840,Ul=35841,Bl=35842,kl=35843,zl=36196,Vl=37492,Hl=37496,Gl=37488,Xl=37489,qo=37490,Wl=37491,Yl=37808,$l=37809,ql=37810,Zl=37811,Jl=37812,jl=37813,Kl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,rc=37820,sc=37821,oc=36492,ac=36494,lc=36495,cc=36283,hc=36284,Zo=36285,uc=36286,_o=2300,nl=2301,Wa=2302,Sh=2303,wh=2400,Eh=2401,Th=2402,Pd=3200,fc=0,Id=1,$i="",In="srgb",vo="srgb-linear",yo="linear",ze="srgb",Ya=7680,Rd=519,Ld=512,Nd=513,Dd=514,dc=515,Od=516,Fd=517,pc=518,Ud=519,Qh=35044,Ur=35048,tu="300 es",ci=2e3,xs=2001;Cf={},Ms=null;Vd={[$a]:qa,[Za]:Ka,[Ja]:Qa,[ys]:ja,[qa]:$a,[Ka]:Za,[Qa]:Ja,[ja]:ys},hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pf=1234567,_s=Math.PI/180,bs=180/Math.PI;nu={DEG2RAD:_s,RAD2DEG:bs,generateUUID:Xi,clamp:Ne,euclideanModulo:eu,mapLinear:y0,inverseLerp:x0,lerp:go,damp:M0,pingpong:b0,smoothstep:S0,smootherstep:w0,randInt:E0,randFloat:T0,randFloatSpread:A0,seededRandom:C0,degToRad:P0,radToDeg:I0,isPowerOfTwo:R0,ceilPowerOfTwo:L0,floorPowerOfTwo:N0,setQuaternionFromProperEuler:D0,normalize:Ge,denormalize:li},me=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ne(this.x,t.x,e.x),this.y=Ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ne(this.x,t,e),this.y=Ne(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*i-l*r+t.x,this.y=o*r+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wn=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,o,l,h){let u=i[r+0],d=i[r+1],g=i[r+2],v=i[r+3],_=o[l+0],x=o[l+1],w=o[l+2],E=o[l+3];if(v!==E||u!==_||d!==x||g!==w){let b=u*_+d*x+g*w+v*E;b<0&&(_=-_,x=-x,w=-w,E=-E,b=-b);let y=1-h;if(b<.9995){let L=Math.acos(b),V=Math.sin(L);y=Math.sin(y*L)/V,h=Math.sin(h*L)/V,u=u*y+_*h,d=d*y+x*h,g=g*y+w*h,v=v*y+E*h}else{u=u*y+_*h,d=d*y+x*h,g=g*y+w*h,v=v*y+E*h;let L=1/Math.sqrt(u*u+d*d+g*g+v*v);u*=L,d*=L,g*=L,v*=L}}t[e]=u,t[e+1]=d,t[e+2]=g,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,r,o,l){let h=i[r],u=i[r+1],d=i[r+2],g=i[r+3],v=o[l],_=o[l+1],x=o[l+2],w=o[l+3];return t[e]=h*w+g*v+u*x-d*_,t[e+1]=u*w+g*_+d*v-h*x,t[e+2]=d*w+g*x+h*_-u*v,t[e+3]=g*w-h*v-u*_-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,o=t._z,l=t._order,h=Math.cos,u=Math.sin,d=h(i/2),g=h(r/2),v=h(o/2),_=u(i/2),x=u(r/2),w=u(o/2);switch(l){case"XYZ":this._x=_*g*v+d*x*w,this._y=d*x*v-_*g*w,this._z=d*g*w+_*x*v,this._w=d*g*v-_*x*w;break;case"YXZ":this._x=_*g*v+d*x*w,this._y=d*x*v-_*g*w,this._z=d*g*w-_*x*v,this._w=d*g*v+_*x*w;break;case"ZXY":this._x=_*g*v-d*x*w,this._y=d*x*v+_*g*w,this._z=d*g*w+_*x*v,this._w=d*g*v-_*x*w;break;case"ZYX":this._x=_*g*v-d*x*w,this._y=d*x*v+_*g*w,this._z=d*g*w-_*x*v,this._w=d*g*v+_*x*w;break;case"YZX":this._x=_*g*v+d*x*w,this._y=d*x*v+_*g*w,this._z=d*g*w-_*x*v,this._w=d*g*v-_*x*w;break;case"XZY":this._x=_*g*v-d*x*w,this._y=d*x*v-_*g*w,this._z=d*g*w+_*x*v,this._w=d*g*v+_*x*w;break;default:_e("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],o=e[8],l=e[1],h=e[5],u=e[9],d=e[2],g=e[6],v=e[10],_=i+h+v;if(_>0){let x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-u)*x,this._y=(o-d)*x,this._z=(l-r)*x}else if(i>h&&i>v){let x=2*Math.sqrt(1+i-h-v);this._w=(g-u)/x,this._x=.25*x,this._y=(r+l)/x,this._z=(o+d)/x}else if(h>v){let x=2*Math.sqrt(1+h-i-v);this._w=(o-d)/x,this._x=(r+l)/x,this._y=.25*x,this._z=(u+g)/x}else{let x=2*Math.sqrt(1+v-i-h);this._w=(l-r)/x,this._x=(o+d)/x,this._y=(u+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,o=t._z,l=t._w,h=e._x,u=e._y,d=e._z,g=e._w;return this._x=i*g+l*h+r*d-o*u,this._y=r*g+l*u+o*h-i*d,this._z=o*g+l*d+i*u-r*h,this._w=l*g-i*h-r*u-o*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,o=t._z,l=t._w,h=this.dot(t);h<0&&(i=-i,r=-r,o=-o,l=-l,h=-h);let u=1-e;if(h<.9995){let d=Math.acos(h),g=Math.sin(d);u=Math.sin(u*d)/g,e=Math.sin(e*d)/g,this._x=this._x*u+i*e,this._y=this._y*u+r*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+r*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ht=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(If.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(If.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*r,this.y=o[1]*e+o[4]*i+o[7]*r,this.z=o[2]*e+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=t.elements,l=1/(o[3]*e+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*e+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*e+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,o=t.x,l=t.y,h=t.z,u=t.w,d=2*(l*r-h*i),g=2*(h*e-o*r),v=2*(o*i-l*e);return this.x=e+u*d+l*v-h*g,this.y=i+u*g+h*d-o*v,this.z=r+u*v+o*g-l*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r,this.y=o[1]*e+o[5]*i+o[9]*r,this.z=o[2]*e+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ne(this.x,t.x,e.x),this.y=Ne(this.y,t.y,e.y),this.z=Ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ne(this.x,t,e),this.y=Ne(this.y,t,e),this.z=Ne(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,o=t.z,l=e.x,h=e.y,u=e.z;return this.x=r*u-o*h,this.y=o*l-i*u,this.z=i*h-r*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kc.copy(this).projectOnVector(t),this.sub(Kc)}reflect(t){return this.sub(Kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kc=new ht,If=new Wn,Ce=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,r,o,l,h,u,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,h,u,d)}set(t,e,i,r,o,l,h,u,d){let g=this.elements;return g[0]=t,g[1]=r,g[2]=h,g[3]=e,g[4]=o,g[5]=u,g[6]=i,g[7]=l,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,l=i[0],h=i[3],u=i[6],d=i[1],g=i[4],v=i[7],_=i[2],x=i[5],w=i[8],E=r[0],b=r[3],y=r[6],L=r[1],V=r[4],A=r[7],R=r[2],D=r[5],H=r[8];return o[0]=l*E+h*L+u*R,o[3]=l*b+h*V+u*D,o[6]=l*y+h*A+u*H,o[1]=d*E+g*L+v*R,o[4]=d*b+g*V+v*D,o[7]=d*y+g*A+v*H,o[2]=_*E+x*L+w*R,o[5]=_*b+x*V+w*D,o[8]=_*y+x*A+w*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],h=t[5],u=t[6],d=t[7],g=t[8];return e*l*g-e*h*d-i*o*g+i*h*u+r*o*d-r*l*u}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],h=t[5],u=t[6],d=t[7],g=t[8],v=g*l-h*d,_=h*u-g*o,x=d*o-l*u,w=e*v+i*_+r*x;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=v*E,t[1]=(r*d-g*i)*E,t[2]=(h*i-r*l)*E,t[3]=_*E,t[4]=(g*e-r*u)*E,t[5]=(r*o-h*e)*E,t[6]=x*E,t[7]=(i*u-d*e)*E,t[8]=(l*e-i*o)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,o,l,h){let u=Math.cos(o),d=Math.sin(o);return this.set(i*u,i*d,-i*(u*l+d*h)+l+t,-r*d,r*u,-r*(-d*l+u*h)+h+e,0,0,1),this}scale(t,e){return Rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qc.makeScale(t,e)),this}rotate(t){return Rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qc.makeRotation(-t)),this}translate(t,e){return Rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qc=new Ce,Rf=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lf=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Oe=O0();il=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ts===void 0&&(ts=xo("canvas")),ts.width=t.width,ts.height=t.height;let r=ts.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ts}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Wi(o[l]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Wi(e[i]/255)*255):e[i]=Wi(e[i]);return{data:e,width:t.width,height:t.height}}else return _e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},F0=0,Ss=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,h=r.length;l<h;l++)r[l].isDataTexture?o.push(th(r[l].image)):o.push(th(r[l]))}else o=th(r);i.url=o}return e||(t.images[this.uuid]=i),i}};U0=0,eh=new ht,Rn=class n extends hi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Mi,r=Mi,o=yn,l=vr,h=ni,u=Un,d=n.DEFAULT_ANISOTROPY,g=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Xi(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=u,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){_e(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){_e(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tl:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case el:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tl:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case el:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Wh;Rn.DEFAULT_ANISOTROPY=1;Qe=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*e+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*e+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*e+l[7]*i+l[11]*r+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,o,u=t.elements,d=u[0],g=u[4],v=u[8],_=u[1],x=u[5],w=u[9],E=u[2],b=u[6],y=u[10];if(Math.abs(g-_)<.01&&Math.abs(v-E)<.01&&Math.abs(w-b)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+E)<.1&&Math.abs(w+b)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let V=(d+1)/2,A=(x+1)/2,R=(y+1)/2,D=(g+_)/4,H=(v+E)/4,C=(w+b)/4;return V>A&&V>R?V<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(V),r=D/i,o=H/i):A>R?A<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(A),i=D/r,o=C/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=H/o,r=C/o),this.set(i,r,o,e),this}let L=Math.sqrt((b-w)*(b-w)+(v-E)*(v-E)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(b-w)/L,this.y=(v-E)/L,this.z=(_-g)/L,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ne(this.x,t.x,e.x),this.y=Ne(this.y,t.y,e.y),this.z=Ne(this.z,t.z,e.z),this.w=Ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ne(this.x,t,e),this.y=Ne(this.y,t,e),this.z=Ne(this.z,t,e),this.w=Ne(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rl=class extends hi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Qe(0,0,t,e),this.scissorTest=!1,this.viewport=new Qe(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},o=new Rn(r),l=i.count;for(let h=0;h<l;h++)this.textures[h]=o.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ss(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends rl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},bo=class extends Rn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},sl=class extends Rn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Xe=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,r,o,l,h,u,d,g,v,_,x,w,E,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,h,u,d,g,v,_,x,w,E,b)}set(t,e,i,r,o,l,h,u,d,g,v,_,x,w,E,b){let y=this.elements;return y[0]=t,y[4]=e,y[8]=i,y[12]=r,y[1]=o,y[5]=l,y[9]=h,y[13]=u,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=w,y[11]=E,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,r=1/es.setFromMatrixColumn(t,0).length(),o=1/es.setFromMatrixColumn(t,1).length(),l=1/es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,o=t.z,l=Math.cos(i),h=Math.sin(i),u=Math.cos(r),d=Math.sin(r),g=Math.cos(o),v=Math.sin(o);if(t.order==="XYZ"){let _=l*g,x=l*v,w=h*g,E=h*v;e[0]=u*g,e[4]=-u*v,e[8]=d,e[1]=x+w*d,e[5]=_-E*d,e[9]=-h*u,e[2]=E-_*d,e[6]=w+x*d,e[10]=l*u}else if(t.order==="YXZ"){let _=u*g,x=u*v,w=d*g,E=d*v;e[0]=_+E*h,e[4]=w*h-x,e[8]=l*d,e[1]=l*v,e[5]=l*g,e[9]=-h,e[2]=x*h-w,e[6]=E+_*h,e[10]=l*u}else if(t.order==="ZXY"){let _=u*g,x=u*v,w=d*g,E=d*v;e[0]=_-E*h,e[4]=-l*v,e[8]=w+x*h,e[1]=x+w*h,e[5]=l*g,e[9]=E-_*h,e[2]=-l*d,e[6]=h,e[10]=l*u}else if(t.order==="ZYX"){let _=l*g,x=l*v,w=h*g,E=h*v;e[0]=u*g,e[4]=w*d-x,e[8]=_*d+E,e[1]=u*v,e[5]=E*d+_,e[9]=x*d-w,e[2]=-d,e[6]=h*u,e[10]=l*u}else if(t.order==="YZX"){let _=l*u,x=l*d,w=h*u,E=h*d;e[0]=u*g,e[4]=E-_*v,e[8]=w*v+x,e[1]=v,e[5]=l*g,e[9]=-h*g,e[2]=-d*g,e[6]=x*v+w,e[10]=_-E*v}else if(t.order==="XZY"){let _=l*u,x=l*d,w=h*u,E=h*d;e[0]=u*g,e[4]=-v,e[8]=d*g,e[1]=_*v+E,e[5]=l*g,e[9]=x*v-w,e[2]=w*v-x,e[6]=h*g,e[10]=E*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(B0,t,k0)}lookAt(t,e,i){let r=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),er.crossVectors(i,Hn),er.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),er.crossVectors(i,Hn)),er.normalize(),_a.crossVectors(Hn,er),r[0]=er.x,r[4]=_a.x,r[8]=Hn.x,r[1]=er.y,r[5]=_a.y,r[9]=Hn.y,r[2]=er.z,r[6]=_a.z,r[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,l=i[0],h=i[4],u=i[8],d=i[12],g=i[1],v=i[5],_=i[9],x=i[13],w=i[2],E=i[6],b=i[10],y=i[14],L=i[3],V=i[7],A=i[11],R=i[15],D=r[0],H=r[4],C=r[8],k=r[12],G=r[1],Y=r[5],Z=r[9],J=r[13],j=r[2],K=r[6],lt=r[10],gt=r[14],Et=r[3],yt=r[7],It=r[11],Ot=r[15];return o[0]=l*D+h*G+u*j+d*Et,o[4]=l*H+h*Y+u*K+d*yt,o[8]=l*C+h*Z+u*lt+d*It,o[12]=l*k+h*J+u*gt+d*Ot,o[1]=g*D+v*G+_*j+x*Et,o[5]=g*H+v*Y+_*K+x*yt,o[9]=g*C+v*Z+_*lt+x*It,o[13]=g*k+v*J+_*gt+x*Ot,o[2]=w*D+E*G+b*j+y*Et,o[6]=w*H+E*Y+b*K+y*yt,o[10]=w*C+E*Z+b*lt+y*It,o[14]=w*k+E*J+b*gt+y*Ot,o[3]=L*D+V*G+A*j+R*Et,o[7]=L*H+V*Y+A*K+R*yt,o[11]=L*C+V*Z+A*lt+R*It,o[15]=L*k+V*J+A*gt+R*Ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[12],l=t[1],h=t[5],u=t[9],d=t[13],g=t[2],v=t[6],_=t[10],x=t[14],w=t[3],E=t[7],b=t[11],y=t[15],L=u*x-d*_,V=h*x-d*v,A=h*_-u*v,R=l*x-d*g,D=l*_-u*g,H=l*v-h*g;return e*(E*L-b*V+y*A)-i*(w*L-b*R+y*D)+r*(w*V-E*R+y*H)-o*(w*A-E*D+b*H)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[1],l=t[5],h=t[9],u=t[2],d=t[6],g=t[10];return e*(l*g-h*d)-i*(o*g-h*u)+r*(o*d-l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],h=t[5],u=t[6],d=t[7],g=t[8],v=t[9],_=t[10],x=t[11],w=t[12],E=t[13],b=t[14],y=t[15],L=e*h-i*l,V=e*u-r*l,A=e*d-o*l,R=i*u-r*h,D=i*d-o*h,H=r*d-o*u,C=g*E-v*w,k=g*b-_*w,G=g*y-x*w,Y=v*b-_*E,Z=v*y-x*E,J=_*y-x*b,j=L*J-V*Z+A*Y+R*G-D*k+H*C;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/j;return t[0]=(h*J-u*Z+d*Y)*K,t[1]=(r*Z-i*J-o*Y)*K,t[2]=(E*H-b*D+y*R)*K,t[3]=(_*D-v*H-x*R)*K,t[4]=(u*G-l*J-d*k)*K,t[5]=(e*J-r*G+o*k)*K,t[6]=(b*A-w*H-y*V)*K,t[7]=(g*H-_*A+x*V)*K,t[8]=(l*Z-h*G+d*C)*K,t[9]=(i*G-e*Z-o*C)*K,t[10]=(w*D-E*A+y*L)*K,t[11]=(v*A-g*D-x*L)*K,t[12]=(h*k-l*Y-u*C)*K,t[13]=(e*Y-i*k+r*C)*K,t[14]=(E*V-w*R-b*L)*K,t[15]=(g*R-v*V+_*L)*K,this}scale(t){let e=this.elements,i=t.x,r=t.y,o=t.z;return e[0]*=i,e[4]*=r,e[8]*=o,e[1]*=i,e[5]*=r,e[9]*=o,e[2]*=i,e[6]*=r,e[10]*=o,e[3]*=i,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),o=1-i,l=t.x,h=t.y,u=t.z,d=o*l,g=o*h;return this.set(d*l+i,d*h-r*u,d*u+r*h,0,d*h+r*u,g*h+i,g*u-r*l,0,d*u-r*h,g*u+r*l,o*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,o,l){return this.set(1,i,o,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,o=e._x,l=e._y,h=e._z,u=e._w,d=o+o,g=l+l,v=h+h,_=o*d,x=o*g,w=o*v,E=l*g,b=l*v,y=h*v,L=u*d,V=u*g,A=u*v,R=i.x,D=i.y,H=i.z;return r[0]=(1-(E+y))*R,r[1]=(x+A)*R,r[2]=(w-V)*R,r[3]=0,r[4]=(x-A)*D,r[5]=(1-(_+y))*D,r[6]=(b+L)*D,r[7]=0,r[8]=(w+V)*H,r[9]=(b-L)*H,r[10]=(1-(_+E))*H,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let l=es.set(r[0],r[1],r[2]).length(),h=es.set(r[4],r[5],r[6]).length(),u=es.set(r[8],r[9],r[10]).length();o<0&&(l=-l),si.copy(this);let d=1/l,g=1/h,v=1/u;return si.elements[0]*=d,si.elements[1]*=d,si.elements[2]*=d,si.elements[4]*=g,si.elements[5]*=g,si.elements[6]*=g,si.elements[8]*=v,si.elements[9]*=v,si.elements[10]*=v,e.setFromRotationMatrix(si),i.x=l,i.y=h,i.z=u,this}makePerspective(t,e,i,r,o,l,h=ci,u=!1){let d=this.elements,g=2*o/(e-t),v=2*o/(i-r),_=(e+t)/(e-t),x=(i+r)/(i-r),w,E;if(u)w=o/(l-o),E=l*o/(l-o);else if(h===ci)w=-(l+o)/(l-o),E=-2*l*o/(l-o);else if(h===xs)w=-l/(l-o),E=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=w,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,o,l,h=ci,u=!1){let d=this.elements,g=2/(e-t),v=2/(i-r),_=-(e+t)/(e-t),x=-(i+r)/(i-r),w,E;if(u)w=1/(l-o),E=l/(l-o);else if(h===ci)w=-2/(l-o),E=-(l+o)/(l-o);else if(h===xs)w=-1/(l-o),E=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=w,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},es=new ht,si=new Xe,B0=new ht(0,0,0),k0=new ht(1,1,1),er=new ht,_a=new ht,Hn=new ht,Nf=new Xe,Df=new Wn,Yi=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,o=r[0],l=r[4],h=r[8],u=r[1],d=r[5],g=r[9],v=r[2],_=r[6],x=r[10];switch(e){case"XYZ":this._y=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-Ne(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,o)):(this._x=Math.atan2(-g,x),this._y=0);break;default:_e("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Df.setFromEuler(this),this.setFromQuaternion(Df,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yi.DEFAULT_ORDER="XYZ";ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},z0=0,Of=new ht,ns=new Wn,ki=new Xe,va=new ht,ao=new ht,V0=new ht,H0=new Wn,Ff=new ht(1,0,0),Uf=new ht(0,1,0),Bf=new ht(0,0,1),kf={type:"added"},G0={type:"removed"},is={type:"childadded",child:null},nh={type:"childremoved",child:null},ln=class n extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new ht,e=new Yi,i=new Wn,r=new ht(1,1,1);function o(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ce}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(Ff,t)}rotateY(t){return this.rotateOnAxis(Uf,t)}rotateZ(t){return this.rotateOnAxis(Bf,t)}translateOnAxis(t,e){return Of.copy(t).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ff,t)}translateY(t){return this.translateOnAxis(Uf,t)}translateZ(t){return this.translateOnAxis(Bf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?va.copy(t):va.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ao,va,this.up):ki.lookAt(va,ao,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(ki),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kf),is.child=t,this.dispatchEvent(is),is.child=null):ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(G0),nh.child=t,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kf),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,t,V0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,H0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*r,o[13]+=i-o[1]*e-o[5]*i-o[9]*r,o[14]+=r-o[2]*e-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let u=h.shapes;if(Array.isArray(u))for(let d=0,g=u.length;d<g;d++){let v=u[d];o(t.shapes,v)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let u=0,d=this.material.length;u<d;u++)h.push(o(t.materials,this.material[u]));r.material=h}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){let u=this.animations[h];r.animations.push(o(t.animations,u))}}if(e){let h=l(t.geometries),u=l(t.materials),d=l(t.textures),g=l(t.images),v=l(t.shapes),_=l(t.skeletons),x=l(t.animations),w=l(t.nodes);h.length>0&&(i.geometries=h),u.length>0&&(i.materials=u),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),w.length>0&&(i.nodes=w)}return i.object=r,i;function l(h){let u=[];for(let d in h){let g=h[d];delete g.metadata,u.push(g)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ln.DEFAULT_UP=new ht(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ei=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},X0={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ht,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ht),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ht,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ht,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,o=null,l=null,h=this._targetRay,u=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){l=!0;for(let E of t.hand.values()){let b=e.getJointPose(E,i),y=this._getHandJoint(d,E);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}let g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,w=.005;d.inputState.pinching&&_>x+w?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=x-w&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(X0)))}return h!==null&&(h.visible=r!==null),u!==null&&(u.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ei;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},ya={h:0,s:0,l:0};Ee=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=In){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Oe.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Oe.workingColorSpace){if(t=eu(t,1),e=Ne(e,0,1),i=Ne(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,l=2*i-o;this.r=ih(l,o,t+1/3),this.g=ih(l,o,t),this.b=ih(l,o,t-1/3)}return Oe.colorSpaceToWorking(this,r),this}setStyle(t,e=In){function i(o){o!==void 0&&parseFloat(o)<1&&_e("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,l=r[1],h=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:_e("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);_e("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=In){let i=Hd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):_e("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=In){return Oe.workingToColorSpace(Sn.copy(this),t),Math.round(Ne(Sn.r*255,0,255))*65536+Math.round(Ne(Sn.g*255,0,255))*256+Math.round(Ne(Sn.b*255,0,255))}getHexString(t=In){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Oe.workingColorSpace){Oe.workingToColorSpace(Sn.copy(this),e);let i=Sn.r,r=Sn.g,o=Sn.b,l=Math.max(i,r,o),h=Math.min(i,r,o),u,d,g=(h+l)/2;if(h===l)u=0,d=0;else{let v=l-h;switch(d=g<=.5?v/(l+h):v/(2-l-h),l){case i:u=(r-o)/v+(r<o?6:0);break;case r:u=(o-i)/v+2;break;case o:u=(i-r)/v+4;break}u/=6}return t.h=u,t.s=d,t.l=g,t}getRGB(t,e=Oe.workingColorSpace){return Oe.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=In){Oe.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,i=Sn.g,r=Sn.b;return t!==In?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+e,nr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(nr),t.getHSL(ya);let i=go(nr.h,ya.h,e),r=go(nr.s,ya.s,e),o=go(nr.l,ya.l,e);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*r,this.g=o[1]*e+o[4]*i+o[7]*r,this.b=o[2]*e+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Ee;Ee.NAMES=Hd;So=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},oi=new ht,zi=new ht,rh=new ht,Vi=new ht,rs=new ht,ss=new ht,zf=new ht,sh=new ht,oh=new ht,ah=new ht,lh=new Qe,ch=new Qe,hh=new Qe,xi=class n{constructor(t=new ht,e=new ht,i=new ht){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),oi.subVectors(t,e),r.cross(oi);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,i,r,o){oi.subVectors(r,e),zi.subVectors(i,e),rh.subVectors(t,e);let l=oi.dot(oi),h=oi.dot(zi),u=oi.dot(rh),d=zi.dot(zi),g=zi.dot(rh),v=l*d-h*h;if(v===0)return o.set(0,0,0),null;let _=1/v,x=(d*u-h*g)*_,w=(l*g-h*u)*_;return o.set(1-x-w,w,x)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,i,r,o,l,h,u){return this.getBarycoord(t,e,i,r,Vi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,Vi.x),u.addScaledVector(l,Vi.y),u.addScaledVector(h,Vi.z),u)}static getInterpolatedAttribute(t,e,i,r,o,l){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(t,e),ch.fromBufferAttribute(t,i),hh.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(lh,o.x),l.addScaledVector(ch,o.y),l.addScaledVector(hh,o.z),l}static isFrontFacing(t,e,i,r){return oi.subVectors(i,e),zi.subVectors(t,e),oi.cross(zi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),oi.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,o=this.c,l,h;rs.subVectors(r,i),ss.subVectors(o,i),sh.subVectors(t,i);let u=rs.dot(sh),d=ss.dot(sh);if(u<=0&&d<=0)return e.copy(i);oh.subVectors(t,r);let g=rs.dot(oh),v=ss.dot(oh);if(g>=0&&v<=g)return e.copy(r);let _=u*v-g*d;if(_<=0&&u>=0&&g<=0)return l=u/(u-g),e.copy(i).addScaledVector(rs,l);ah.subVectors(t,o);let x=rs.dot(ah),w=ss.dot(ah);if(w>=0&&x<=w)return e.copy(o);let E=x*d-u*w;if(E<=0&&d>=0&&w<=0)return h=d/(d-w),e.copy(i).addScaledVector(ss,h);let b=g*w-x*v;if(b<=0&&v-g>=0&&x-w>=0)return zf.subVectors(o,r),h=(v-g)/(v-g+(x-w)),e.copy(r).addScaledVector(zf,h);let y=1/(b+E+_);return l=E*y,h=_*y,e.copy(i).addScaledVector(rs,l).addScaledVector(ss,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},or=class{constructor(t=new ht(1/0,1/0,1/0),e=new ht(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,h=o.count;l<h;l++)t.isMesh===!0?t.getVertexPosition(l,ai):ai.fromBufferAttribute(o,l),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(t.matrixWorld),this.union(xa)}let r=t.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lo),Ma.subVectors(this.max,lo),os.subVectors(t.a,lo),as.subVectors(t.b,lo),ls.subVectors(t.c,lo),ir.subVectors(as,os),rr.subVectors(ls,as),Ar.subVectors(os,ls);let e=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Ar.z,Ar.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Ar.z,0,-Ar.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Ar.y,Ar.x,0];return!uh(e,os,as,ls,Ma)||(e=[1,0,0,0,1,0,0,0,1],!uh(e,os,as,ls,Ma))?!1:(ba.crossVectors(ir,rr),e=[ba.x,ba.y,ba.z],uh(e,os,as,ls,Ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hi=[new ht,new ht,new ht,new ht,new ht,new ht,new ht,new ht],ai=new ht,xa=new or,os=new ht,as=new ht,ls=new ht,ir=new ht,rr=new ht,Ar=new ht,lo=new ht,Ma=new ht,ba=new ht,Cr=new ht;on=new ht,Sa=new me,W0=0,Ye=class extends hi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qh,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),o=Ge(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},wo=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}},Eo=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}},$e=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},Y0=new or,co=new ht,fh=new ht,Lr=class{constructor(t=new ht,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Y0.setFromPoints(t).getCenter(i);let r=0;for(let o=0,l=t.length;o<l;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;co.subVectors(t,this.center);let e=co.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(co,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(co.copy(t.center).add(fh)),this.expandByPoint(co.copy(t.center).sub(fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$0=0,ti=new Xe,dh=new ln,cs=new ht,Gn=new or,ho=new or,pn=new ht,Ke=class n extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_0(t)?Eo:wo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new Ce().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return dh.lookAt(t),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,o=t.length;r<o;r++){let l=t[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new $e(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&_e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ht(-1/0,-1/0,-1/0),new ht(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let o=e[i];Gn.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ht,1/0);return}if(t){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){let h=e[o];ho.setFromBufferAttribute(h),this.morphTargetsRelative?(pn.addVectors(Gn.min,ho.min),Gn.expandByPoint(pn),pn.addVectors(Gn.max,ho.max),Gn.expandByPoint(pn)):(Gn.expandByPoint(ho.min),Gn.expandByPoint(ho.max))}Gn.getCenter(i);let r=0;for(let o=0,l=t.count;o<l;o++)pn.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(pn));if(e)for(let o=0,l=e.length;o<l;o++){let h=e[o],u=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)pn.fromBufferAttribute(h,d),u&&(cs.fromBufferAttribute(t,d),pn.add(cs)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,o=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==i.count)&&(l=new Ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",l));let h=[],u=[];for(let C=0;C<i.count;C++)h[C]=new ht,u[C]=new ht;let d=new ht,g=new ht,v=new ht,_=new me,x=new me,w=new me,E=new ht,b=new ht;function y(C,k,G){d.fromBufferAttribute(i,C),g.fromBufferAttribute(i,k),v.fromBufferAttribute(i,G),_.fromBufferAttribute(o,C),x.fromBufferAttribute(o,k),w.fromBufferAttribute(o,G),g.sub(d),v.sub(d),x.sub(_),w.sub(_);let Y=1/(x.x*w.y-w.x*x.y);isFinite(Y)&&(E.copy(g).multiplyScalar(w.y).addScaledVector(v,-x.y).multiplyScalar(Y),b.copy(v).multiplyScalar(x.x).addScaledVector(g,-w.x).multiplyScalar(Y),h[C].add(E),h[k].add(E),h[G].add(E),u[C].add(b),u[k].add(b),u[G].add(b))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let C=0,k=L.length;C<k;++C){let G=L[C],Y=G.start,Z=G.count;for(let J=Y,j=Y+Z;J<j;J+=3)y(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let V=new ht,A=new ht,R=new ht,D=new ht;function H(C){R.fromBufferAttribute(r,C),D.copy(R);let k=h[C];V.copy(k),V.sub(R.multiplyScalar(R.dot(k))).normalize(),A.crossVectors(D,k);let Y=A.dot(u[C])<0?-1:1;l.setXYZW(C,V.x,V.y,V.z,Y)}for(let C=0,k=L.length;C<k;++C){let G=L[C],Y=G.start,Z=G.count;for(let J=Y,j=Y+Z;J<j;J+=3)H(t.getX(J+0)),H(t.getX(J+1)),H(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);let r=new ht,o=new ht,l=new ht,h=new ht,u=new ht,d=new ht,g=new ht,v=new ht;if(t)for(let _=0,x=t.count;_<x;_+=3){let w=t.getX(_+0),E=t.getX(_+1),b=t.getX(_+2);r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,E),l.fromBufferAttribute(e,b),g.subVectors(l,o),v.subVectors(r,o),g.cross(v),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,b),h.add(g),u.add(g),d.add(g),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(b,d.x,d.y,d.z)}else for(let _=0,x=e.count;_<x;_+=3)r.fromBufferAttribute(e,_+0),o.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),g.subVectors(l,o),v.subVectors(r,o),g.cross(v),i.setXYZ(_+0,g.x,g.y,g.z),i.setXYZ(_+1,g.x,g.y,g.z),i.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(h,u){let d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(u.length*g),x=0,w=0;for(let E=0,b=u.length;E<b;E++){h.isInterleavedBufferAttribute?x=u[E]*h.data.stride+h.offset:x=u[E]*g;for(let y=0;y<g;y++)_[w++]=d[x++]}return new Ye(_,g,v)}if(this.index===null)return _e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let h in r){let u=r[h],d=t(u,i);e.setAttribute(h,d)}let o=this.morphAttributes;for(let h in o){let u=[],d=o[h];for(let g=0,v=d.length;g<v;g++){let _=d[g],x=t(_,i);u.push(x)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let h=0,u=l.length;h<u;h++){let d=l[h];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let d in u)u[d]!==void 0&&(t[d]=u[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let d=i[u];t.data.attributes[u]=d.toJSON(t.data)}let r={},o=!1;for(let u in this.morphAttributes){let d=this.morphAttributes[u],g=[];for(let v=0,_=d.length;v<_;v++){let x=d[v];g.push(x.toJSON(t.data))}g.length>0&&(r[u]=g,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let d in r){let g=r[d];this.setAttribute(d,g.clone(e))}let o=t.morphAttributes;for(let d in o){let g=[],v=o[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(e));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let d=0,g=l.length;d<g;d++){let v=l[d];this.addGroup(v.start,v.count,v.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ol=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qh,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Pn=new ht,To=class n{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyMatrix4(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyNormalMatrix(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.transformDirection(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),o=Ge(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){Mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ph=new ht,q0=new ht,Z0=new Ce,Xn=class{constructor(t=new ht(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=ph.subVectors(i,e).cross(q0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(ph),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(r,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Z0.getNormalMatrix(t),r=this.coplanarPoint(ph).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},J0=0,Si=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Ds,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Fh,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){_e(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){_e(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}if(e){let o=r(t.textures),l=r(t.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Xn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new me().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ts=class extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uo=new ht,us=new ht,fs=new ht,ds=new me,fo=new me,Gd=new Xe,wa=new ht,po=new ht,Ea=new ht,Vf=new me,mh=new me,Hf=new me,Ao=class extends ln{constructor(t=new Ts){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new Ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ol(e,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new To(i,3,0,!1)),hs.setAttribute("uv",new To(i,2,3,!1))}this.geometry=hs,this.material=t,this.center=new me(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),Gd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-fs.z);let i=this.material.rotation,r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));let l=this.center;Ta(wa.set(-.5,-.5,0),fs,l,us,r,o),Ta(po.set(.5,-.5,0),fs,l,us,r,o),Ta(Ea.set(.5,.5,0),fs,l,us,r,o),Vf.set(0,0),mh.set(1,0),Hf.set(1,1);let h=t.ray.intersectTriangle(wa,po,Ea,!1,uo);if(h===null&&(Ta(po.set(-.5,.5,0),fs,l,us,r,o),mh.set(0,1),h=t.ray.intersectTriangle(wa,Ea,po,!1,uo),h===null))return;let u=t.ray.origin.distanceTo(uo);u<t.near||u>t.far||e.push({distance:u,point:uo.clone(),uv:xi.getInterpolation(uo,wa,po,Ea,Vf,mh,Hf,new me),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Gi=new ht,gh=new ht,Aa=new ht,Ca=new ht,ar=class{constructor(t=new ht,e=new ht(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gi.copy(this.origin).addScaledVector(this.direction,e),Gi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){gh.copy(t).add(e).multiplyScalar(.5),Aa.copy(e).sub(t).normalize(),Ca.copy(this.origin).sub(gh);let o=t.distanceTo(e)*.5,l=-this.direction.dot(Aa),h=Ca.dot(this.direction),u=-Ca.dot(Aa),d=Ca.lengthSq(),g=Math.abs(1-l*l),v,_,x,w;if(g>0)if(v=l*u-h,_=l*h-u,w=o*g,v>=0)if(_>=-w)if(_<=w){let E=1/g;v*=E,_*=E,x=v*(v+l*_+2*h)+_*(l*v+_+2*u)+d}else _=o,v=Math.max(0,-(l*_+h)),x=-v*v+_*(_+2*u)+d;else _=-o,v=Math.max(0,-(l*_+h)),x=-v*v+_*(_+2*u)+d;else _<=-w?(v=Math.max(0,-(-l*o+h)),_=v>0?-o:Math.min(Math.max(-o,-u),o),x=-v*v+_*(_+2*u)+d):_<=w?(v=0,_=Math.min(Math.max(-o,-u),o),x=_*(_+2*u)+d):(v=Math.max(0,-(l*o+h)),_=v>0?o:Math.min(Math.max(-o,-u),o),x=-v*v+_*(_+2*u)+d);else _=l>0?-o:o,v=Math.max(0,-(l*_+h)),x=-v*v+_*(_+2*u)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(gh).addScaledVector(Aa,_),x}intersectSphere(t,e){if(t.radius<0)return null;Gi.subVectors(t.center,this.origin);let i=Gi.dot(this.direction),r=Gi.dot(Gi)-i*i,o=t.radius*t.radius;if(r>o)return null;let l=Math.sqrt(o-r),h=i-l,u=i+l;return u<0?null:h<0?this.at(u,e):this.at(h,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,o,l,h,u,d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(i=(t.min.x-_.x)*d,r=(t.max.x-_.x)*d):(i=(t.max.x-_.x)*d,r=(t.min.x-_.x)*d),g>=0?(o=(t.min.y-_.y)*g,l=(t.max.y-_.y)*g):(o=(t.max.y-_.y)*g,l=(t.min.y-_.y)*g),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),v>=0?(h=(t.min.z-_.z)*v,u=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,u=(t.min.z-_.z)*v),i>u||h>r)||((h>i||i!==i)&&(i=h),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Gi)!==null}intersectTriangle(t,e,i,r,o){let l=this.origin,h=this.direction,u=h.x,d=h.y,g=h.z,v=t.x-l.x,_=t.y-l.y,x=t.z-l.z,w=e.x-l.x,E=e.y-l.y,b=e.z-l.z,y=i.x-l.x,L=i.y-l.y,V=i.z-l.z,A=Math.abs(u),R=Math.abs(d),D=Math.abs(g),H,C,k,G,Y,Z,J,j,K,lt,gt,Et;if(A>=R&&A>=D?(k=u,Z=v,K=w,Et=y,u>=0?(H=d,C=g,G=_,Y=x,J=E,j=b,lt=L,gt=V):(H=g,C=d,G=x,Y=_,J=b,j=E,lt=V,gt=L)):R>=D?(k=d,Z=_,K=E,Et=L,d>=0?(H=g,C=u,G=x,Y=v,J=b,j=w,lt=V,gt=y):(H=u,C=g,G=v,Y=x,J=w,j=b,lt=y,gt=V)):(k=g,Z=x,K=b,Et=V,g>=0?(H=u,C=d,G=v,Y=_,J=w,j=E,lt=y,gt=L):(H=d,C=u,G=_,Y=v,J=E,j=w,lt=L,gt=y)),k===0)return null;let yt=H/k,It=C/k,Ot=1/k,jt=G-yt*Z,ne=Y-It*Z,Te=J-yt*K,Me=j-It*K,Ae=lt-yt*Et,Pt=gt-It*Et,Ut=Ae*Me-Pt*Te,ie=jt*Pt-ne*Ae,ue=Te*ne-Me*jt;if(r){if(Ut<0||ie<0||ue<0)return null}else if((Ut<0||ie<0||ue<0)&&(Ut>0||ie>0||ue>0))return null;let Zt=Ut+ie+ue;if(Zt===0)return null;let ut=Ot*(Ut*Z+ie*K+ue*Et);return(Zt>0?ut<0:ut>0)?null:this.at(ut/Zt,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yn=class extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gf=new Xe,Pr=new ar,Pa=new Lr,Xf=new ht,Ia=new ht,Ra=new ht,La=new ht,_h=new ht,Na=new ht,Wf=new ht,Da=new ht,Be=class extends ln{constructor(t=new Ke,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){let h=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let h=this.morphTargetInfluences;if(o&&h){Na.set(0,0,0);for(let u=0,d=o.length;u<d;u++){let g=h[u],v=o[u];g!==0&&(_h.fromBufferAttribute(v,t),l?Na.addScaledVector(_h,g):Na.addScaledVector(_h.sub(e),g))}e.add(Na)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(o),Pr.copy(t.ray).recast(t.near),!(Pa.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Pa,Xf)===null||Pr.origin.distanceToSquared(Xf)>(t.far-t.near)**2))&&(Gf.copy(o).invert(),Pr.copy(t.ray).applyMatrix4(Gf),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,i){let r,o=this.geometry,l=this.material,h=o.index,u=o.attributes.position,d=o.attributes.uv,g=o.attributes.uv1,v=o.attributes.normal,_=o.groups,x=o.drawRange;if(h!==null)if(Array.isArray(l))for(let w=0,E=_.length;w<E;w++){let b=_[w],y=l[b.materialIndex],L=Math.max(b.start,x.start),V=Math.min(h.count,Math.min(b.start+b.count,x.start+x.count));for(let A=L,R=V;A<R;A+=3){let D=h.getX(A),H=h.getX(A+1),C=h.getX(A+2);r=Oa(this,y,t,i,d,g,v,D,H,C),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=b.materialIndex,e.push(r))}}else{let w=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let b=w,y=E;b<y;b+=3){let L=h.getX(b),V=h.getX(b+1),A=h.getX(b+2);r=Oa(this,l,t,i,d,g,v,L,V,A),r&&(r.faceIndex=Math.floor(b/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let w=0,E=_.length;w<E;w++){let b=_[w],y=l[b.materialIndex],L=Math.max(b.start,x.start),V=Math.min(u.count,Math.min(b.start+b.count,x.start+x.count));for(let A=L,R=V;A<R;A+=3){let D=A,H=A+1,C=A+2;r=Oa(this,y,t,i,d,g,v,D,H,C),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=b.materialIndex,e.push(r))}}else{let w=Math.max(0,x.start),E=Math.min(u.count,x.start+x.count);for(let b=w,y=E;b<y;b+=3){let L=b,V=b+1,A=b+2;r=Oa(this,l,t,i,d,g,v,L,V,A),r&&(r.faceIndex=Math.floor(b/3),e.push(r))}}}};al=class extends Rn{constructor(t=null,e=1,i=1,r,o,l,h,u,d=mn,g=mn,v,_){super(null,l,h,u,d,g,r,o,v,_),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ir=new Lr,K0=new me(.5,.5),Fa=new ht,As=class{constructor(t=new Xn,e=new Xn,i=new Xn,r=new Xn,o=new Xn,l=new Xn){this.planes=[t,e,i,r,o,l]}set(t,e,i,r,o,l){let h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(i),h[3].copy(r),h[4].copy(o),h[5].copy(l),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci,i=!1){let r=this.planes,o=t.elements,l=o[0],h=o[1],u=o[2],d=o[3],g=o[4],v=o[5],_=o[6],x=o[7],w=o[8],E=o[9],b=o[10],y=o[11],L=o[12],V=o[13],A=o[14],R=o[15];if(r[0].setComponents(d-l,x-g,y-w,R-L).normalize(),r[1].setComponents(d+l,x+g,y+w,R+L).normalize(),r[2].setComponents(d+h,x+v,y+E,R+V).normalize(),r[3].setComponents(d-h,x-v,y-E,R-V).normalize(),i)r[4].setComponents(u,_,b,A).normalize(),r[5].setComponents(d-u,x-_,y-b,R-A).normalize();else if(r[4].setComponents(d-u,x-_,y-b,R-A).normalize(),e===ci)r[5].setComponents(d+u,x+_,y+b,R+A).normalize();else if(e===xs)r[5].setComponents(u,_,b,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(t){Ir.center.set(0,0,0);let e=K0.distanceTo(t.center);return Ir.radius=.7071067811865476+e,Ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Fa.x=r.normal.x>0?t.max.x:t.min.x,Fa.y=r.normal.y>0?t.max.y:t.min.y,Fa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ui=class extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ll=new ht,cl=new ht,Yf=new Xe,mo=new ar,Ua=new Lr,vh=new ht,$f=new ht,Nr=class extends ln{constructor(t=new Ke,e=new ui){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,o=e.count;r<o;r++)ll.fromBufferAttribute(e,r-1),cl.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=ll.distanceTo(cl);t.setAttribute("lineDistance",new $e(i,1))}else _e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(r),Ua.radius+=o,t.ray.intersectsSphere(Ua)===!1)return;Yf.copy(r).invert(),mo.copy(t.ray).applyMatrix4(Yf);let h=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,d=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){let x=Math.max(0,l.start),w=Math.min(g.count,l.start+l.count);for(let E=x,b=w-1;E<b;E+=d){let y=g.getX(E),L=g.getX(E+1),V=Ba(this,t,mo,u,y,L,E);V&&e.push(V)}if(this.isLineLoop){let E=g.getX(w-1),b=g.getX(x),y=Ba(this,t,mo,u,E,b,w-1);y&&e.push(y)}}else{let x=Math.max(0,l.start),w=Math.min(_.count,l.start+l.count);for(let E=x,b=w-1;E<b;E+=d){let y=Ba(this,t,mo,u,E,E+1,E);y&&e.push(y)}if(this.isLineLoop){let E=Ba(this,t,mo,u,w-1,x,w-1);E&&e.push(E)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){let h=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}};qf=new ht,Zf=new ht,Dr=class extends Nr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,o=e.count;r<o;r+=2)qf.fromBufferAttribute(e,r),Zf.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+qf.distanceTo(Zf);t.setAttribute("lineDistance",new $e(i,1))}else _e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Co=class extends Rn{constructor(t=[],e=_r,i,r,o,l,h,u,d,g){super(t,e,i,r,o,l,h,u,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Po=class extends Rn{constructor(t,e,i,r,o,l,h,u,d){super(t,e,i,r,o,l,h,u,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},lr=class extends Rn{constructor(t,e,i=di,r,o,l,h=mn,u=mn,d,g=bi,v=1){if(g!==bi&&g!==yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let _={width:t,height:e,depth:v};super(_,r,o,l,h,u,g,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},hl=class extends lr{constructor(t,e=di,i=_r,r,o,l=mn,h=mn,u,d=bi){let g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,e,i,r,o,l,h,u,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Io=class extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},cr=class n extends Ke{constructor(t=1,e=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};let h=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);let u=[],d=[],g=[],v=[],_=0,x=0;w("z","y","x",-1,-1,i,e,t,l,o,0),w("z","y","x",1,-1,i,e,-t,l,o,1),w("x","z","y",1,1,t,i,e,r,l,2),w("x","z","y",1,-1,t,i,-e,r,l,3),w("x","y","z",1,-1,t,e,i,r,o,4),w("x","y","z",-1,-1,t,e,-i,r,o,5),this.setIndex(u),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(v,2));function w(E,b,y,L,V,A,R,D,H,C,k){let G=A/H,Y=R/C,Z=A/2,J=R/2,j=D/2,K=H+1,lt=C+1,gt=0,Et=0,yt=new ht;for(let It=0;It<lt;It++){let Ot=It*Y-J;for(let jt=0;jt<K;jt++){let ne=jt*G-Z;yt[E]=ne*L,yt[b]=Ot*V,yt[y]=j,d.push(yt.x,yt.y,yt.z),yt[E]=0,yt[b]=0,yt[y]=D>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(jt/H),v.push(1-It/C),gt+=1}}for(let It=0;It<C;It++)for(let Ot=0;Ot<H;Ot++){let jt=_+Ot+K*It,ne=_+Ot+K*(It+1),Te=_+(Ot+1)+K*(It+1),Me=_+(Ot+1)+K*It;u.push(jt,ne,Me),u.push(ne,Te,Me),Et+=6}h.addGroup(x,Et,k),x+=Et,_+=gt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wi=class n extends Ke{constructor(t=1,e=1,i=1,r=32,o=1,l=!1,h=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:h,thetaLength:u};let d=this;r=Math.floor(r),o=Math.floor(o);let g=[],v=[],_=[],x=[],w=0,E=[],b=i/2,y=0;L(),l===!1&&(t>0&&V(!0),e>0&&V(!1)),this.setIndex(g),this.setAttribute("position",new $e(v,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(x,2));function L(){let A=new ht,R=new ht,D=0,H=(e-t)/i;for(let C=0;C<=o;C++){let k=[],G=C/o,Y=G*(e-t)+t;for(let Z=0;Z<=r;Z++){let J=Z/r,j=J*u+h,K=Math.sin(j),lt=Math.cos(j);R.x=Y*K,R.y=-G*i+b,R.z=Y*lt,v.push(R.x,R.y,R.z),A.set(K,H,lt).normalize(),_.push(A.x,A.y,A.z),x.push(J,1-G),k.push(w++)}E.push(k)}for(let C=0;C<r;C++)for(let k=0;k<o;k++){let G=E[k][C],Y=E[k+1][C],Z=E[k+1][C+1],J=E[k][C+1];(t>0||k!==0)&&(g.push(G,Y,J),D+=3),(e>0||k!==o-1)&&(g.push(Y,Z,J),D+=3)}d.addGroup(y,D,0),y+=D}function V(A){let R=w,D=new me,H=new ht,C=0,k=A===!0?t:e,G=A===!0?1:-1;for(let Z=1;Z<=r;Z++)v.push(0,b*G,0),_.push(0,G,0),x.push(.5,.5),w++;let Y=w;for(let Z=0;Z<=r;Z++){let j=Z/r*u+h,K=Math.cos(j),lt=Math.sin(j);H.x=k*lt,H.y=b*G,H.z=k*K,v.push(H.x,H.y,H.z),_.push(0,G,0),D.x=K*.5+.5,D.y=lt*.5*G+.5,x.push(D.x,D.y),w++}for(let Z=0;Z<r;Z++){let J=R+Z,j=Y+Z;A===!0?g.push(j,j+1,J):g.push(j+1,j,J),C+=3}d.addGroup(y,C,A===!0?1:2),y+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cs=class n extends wi{constructor(t=1,e=1,i=32,r=1,o=!1,l=0,h=Math.PI*2){super(0,t,e,i,r,o,l,h),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:h}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ka=new ht,za=new ht,yh=new ht,Va=new xi,Ps=class extends Ke{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),o=Math.cos(_s*e),l=t.getIndex(),h=t.getAttribute("position"),u=l?l.count:h.count,d=[0,0,0],g=["a","b","c"],v=new Array(3),_={},x=[];for(let w=0;w<u;w+=3){l?(d[0]=l.getX(w),d[1]=l.getX(w+1),d[2]=l.getX(w+2)):(d[0]=w,d[1]=w+1,d[2]=w+2);let{a:E,b,c:y}=Va;if(E.fromBufferAttribute(h,d[0]),b.fromBufferAttribute(h,d[1]),y.fromBufferAttribute(h,d[2]),Va.getNormal(yh),v[0]=`${Math.round(E.x*r)},${Math.round(E.y*r)},${Math.round(E.z*r)}`,v[1]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,v[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let L=0;L<3;L++){let V=(L+1)%3,A=v[L],R=v[V],D=Va[g[L]],H=Va[g[V]],C=`${A}_${R}`,k=`${R}_${A}`;k in _&&_[k]?(yh.dot(_[k].normal)<=o&&(x.push(D.x,D.y,D.z),x.push(H.x,H.y,H.z)),_[k]=null):C in _||(_[C]={index0:d[L],index1:d[V],normal:yh.clone()})}}for(let w in _)if(_[w]){let{index0:E,index1:b}=_[w];ka.fromBufferAttribute(h,E),za.fromBufferAttribute(h,b),x.push(ka.x,ka.y,ka.z),x.push(za.x,za.y,za.z)}this.setAttribute("position",new $e(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Ro=class n extends Ke{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let o=t/2,l=e/2,h=Math.floor(i),u=Math.floor(r),d=h+1,g=u+1,v=t/h,_=e/u,x=[],w=[],E=[],b=[];for(let y=0;y<g;y++){let L=y*_-l;for(let V=0;V<d;V++){let A=V*v-o;w.push(A,-L,0),E.push(0,0,1),b.push(V/h),b.push(1-y/u)}}for(let y=0;y<u;y++)for(let L=0;L<h;L++){let V=L+d*y,A=L+d*(y+1),R=L+1+d*(y+1),D=L+1+d*y;x.push(V,A,D),x.push(A,R,D)}this.setIndex(x),this.setAttribute("position",new $e(w,3)),this.setAttribute("normal",new $e(E,3)),this.setAttribute("uv",new $e(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Lo=class n extends Ke{constructor(t=.5,e=1,i=32,r=1,o=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:l},i=Math.max(3,i),r=Math.max(1,r);let h=[],u=[],d=[],g=[],v=t,_=(e-t)/r,x=new ht,w=new me;for(let E=0;E<=r;E++){for(let b=0;b<=i;b++){let y=o+b/i*l;x.x=v*Math.cos(y),x.y=v*Math.sin(y),u.push(x.x,x.y,x.z),d.push(0,0,1),w.x=(x.x/e+1)/2,w.y=(x.y/e+1)/2,g.push(w.x,w.y)}v+=_}for(let E=0;E<r;E++){let b=E*(i+1);for(let y=0;y<i;y++){let L=y+b,V=L,A=L+i+1,R=L+i+2,D=L+1;h.push(V,A,D),h.push(A,R,D)}}this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},hr=class n extends Ke{constructor(t=1,e=32,i=16,r=0,o=Math.PI*2,l=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:h},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let u=Math.min(l+h,Math.PI),d=0,g=[],v=new ht,_=new ht,x=[],w=[],E=[],b=[];for(let y=0;y<=i;y++){let L=[],V=y/i,A=l+V*h,R=t*Math.cos(A),D=Math.sqrt(t*t-R*R),H=0;y===0&&l===0?H=.5/e:y===i&&u===Math.PI&&(H=-.5/e);for(let C=0;C<=e;C++){let k=C/e,G=r+k*o;v.x=-D*Math.cos(G),v.y=R,v.z=D*Math.sin(G),w.push(v.x,v.y,v.z),_.copy(v).normalize(),E.push(_.x,_.y,_.z),b.push(k+H,1-V),L.push(d++)}g.push(L)}for(let y=0;y<i;y++)for(let L=0;L<e;L++){let V=g[y][L+1],A=g[y][L],R=g[y+1][L],D=g[y+1][L+1];(y!==0||l>0)&&x.push(V,A,D),(y!==i-1||u<Math.PI)&&x.push(A,R,D)}this.setIndex(x),this.setAttribute("position",new $e(w,3)),this.setAttribute("normal",new $e(E,3)),this.setAttribute("uv",new $e(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};Xd={clone:Br,merge:Tn},t_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t_,this.fragmentShader=e_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=Q0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Ee().setHex(r.value);break;case"v2":this.uniforms[i].value=new me().fromArray(r.value);break;case"v3":this.uniforms[i].value=new ht().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ce().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Xe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ul=class extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qn=class extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fl=class extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dl=class extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},No=class extends ui{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};ur=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],o=e[i-1];n:{t:{let l;e:{i:if(!(t<r)){for(let h=i+2;;){if(r===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(o=r,r=e[++i],t<r)break t}l=e.length;break e}if(!(t>=o)){let h=e[1];t<h&&(i=2,o=h);for(let u=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(r=o,o=e[--i-1],t>=o)break t}l=i,i=0;break e}break n}for(;i<l;){let h=i+l>>>1;t<e[h]?l=h:i=h+1}if(r=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r;for(let l=0;l!==r;++l)e[l]=i[o+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pl=class extends ur{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(t,e,i){let r=this.parameterPositions,o=t-2,l=t+1,h=r[o],u=r[l];if(h===void 0)switch(this.getSettings_().endingStart){case Eh:o=t,h=2*e-i;break;case Th:o=r.length-2,h=e+r[o]-r[o+1];break;default:o=t,h=i}if(u===void 0)switch(this.getSettings_().endingEnd){case Eh:l=t,u=2*i-e;break;case Th:l=1,u=i+r[1]-r[0];break;default:l=t-1,u=e}let d=(i-e)*.5,g=this.valueSize;this._weightPrev=d/(e-h),this._weightNext=d/(u-i),this._offsetPrev=o*g,this._offsetNext=l*g}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,d=u-h,g=this._offsetPrev,v=this._offsetNext,_=this._weightPrev,x=this._weightNext,w=(i-e)/(r-e),E=w*w,b=E*w,y=-_*b+2*_*E-_*w,L=(1+_)*b+(-1.5-2*_)*E+(-.5+_)*w+1,V=(-1-x)*b+(1.5+x)*E+.5*w,A=x*b-x*E;for(let R=0;R!==h;++R)o[R]=y*l[g+R]+L*l[d+R]+V*l[u+R]+A*l[v+R];return o}},ml=class extends ur{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,d=u-h,g=(i-e)/(r-e),v=1-g;for(let _=0;_!==h;++_)o[_]=l[d+_]*v+l[u+_]*g;return o}},gl=class extends ur{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},_l=class extends ur{interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,d=u-h,g=this.inTangents,v=this.outTangents;if(!g||!v){let w=(i-e)/(r-e),E=1-w;for(let b=0;b!==h;++b)o[b]=l[d+b]*E+l[u+b]*w;return o}let _=h*2,x=t-1;for(let w=0;w!==h;++w){let E=l[d+w],b=l[u+w],y=x*_+w*2,L=v[y],V=v[y+1],A=t*_+w*2,R=g[A],D=g[A+1],H=i_(i,e,L,R,r);o[w]=Wd(H,E,V,D,b)}return o}};Zn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ps(e,this.TimeBufferType),this.values=ps(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ps(t.times,Array),values:ps(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),xh(t.settings)&&(i.settings={inTangents:ps(t.settings.inTangents,Array),outTangents:ps(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new _l(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _o:e=this.InterpolantFactoryMethodDiscrete;break;case nl:e=this.InterpolantFactoryMethodLinear;break;case Wa:e=this.InterpolantFactoryMethodSmooth;break;case Sh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return _e("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return nl;case this.InterpolantFactoryMethodSmooth:return Wa;case this.InterpolantFactoryMethodBezier:return Sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;xh(this.settings)&&(jf(this.settings.inTangents,t),jf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,o=0,l=r-1;for(;o!==r&&i[o]<t;)++o;for(;l!==-1&&i[l]>e;)--l;if(++l,o!==0||l!==r){o>=l&&(l=Math.max(l,1),o=l-1);let h=this.getValueSize();this.times=i.slice(o,l),this.values=this.values.slice(o*h,l*h)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ye("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,o=i.length;o===0&&(ye("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let h=0;h!==o;h++){let u=i[h];if(typeof u=="number"&&isNaN(u)){ye("KeyframeTrack: Time is not a valid number.",this,h,u),t=!1;break}if(l!==null&&l>u){ye("KeyframeTrack: Out of order keys.",this,h,u,l),t=!1;break}l=u}if(r!==void 0&&v0(r))for(let h=0,u=r.length;h!==u;++h){let d=r[h];if(isNaN(d)){ye("KeyframeTrack: Value is not a valid number.",this,h,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Wa,o=t.length-1,l=1;for(let h=1;h<o;++h){let u=!1,d=t[h],g=t[h+1];if(d!==g&&(h!==1||d!==t[0]))if(r)u=!0;else{let v=h*i,_=v-i,x=v+i;for(let w=0;w!==i;++w){let E=e[v+w];if(E!==e[_+w]||E!==e[x+w]){u=!0;break}}}if(u){if(h!==l){t[l]=t[h];let v=h*i,_=l*i;for(let x=0;x!==i;++x)e[_+x]=e[v+x]}++l}}if(o>0){t[l]=t[o];for(let h=o*i,u=l*i,d=0;d!==i;++d)e[u+d]=e[h+d];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,xh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=nl;fr=class extends Zn{constructor(t,e,i){super(t,e,i)}};fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=_o;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;vl=class extends Zn{constructor(t,e,i,r){super(t,e,i,r)}};vl.prototype.ValueTypeName="color";yl=class extends Zn{constructor(t,e,i,r){super(t,e,i,r)}};yl.prototype.ValueTypeName="number";xl=class extends ur{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=(i-e)/(r-e),d=t*h;for(let g=d+h;d!==g;d+=4)Wn.slerpFlat(o,0,l,d-h,l,d,u);return o}},Do=class extends Zn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new xl(this.times,this.values,this.getValueSize(),t)}};Do.prototype.ValueTypeName="quaternion";Do.prototype.InterpolantFactoryMethodSmooth=void 0;dr=class extends Zn{constructor(t,e,i){super(t,e,i)}};dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=_o;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;Ml=class extends Zn{constructor(t,e,i,r){super(t,e,i,r)}};Ml.prototype.ValueTypeName="vector";bl=class{constructor(t,e,i){let r=this,o=!1,l=0,h=0,u,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(g){h++,o===!1&&r.onStart!==void 0&&r.onStart(g,l,h),o=!0},this.itemEnd=function(g){l++,r.onProgress!==void 0&&r.onProgress(g,l,h),l===h&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),u?u(g):g},this.setURLModifier=function(g){return u=g,this},this.addHandler=function(g,v){return d.push(g,v),this},this.removeHandler=function(g){let v=d.indexOf(g);return v!==-1&&d.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=d.length;v<_;v+=2){let x=d[v],w=d[v+1];if(x.global&&(x.lastIndex=0),x.test(g))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yd=new bl,Sl=class{constructor(t){this.manager=t!==void 0?t:Yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,o){i.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";Oo=class extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Fo=class extends Oo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Mh=new Xe,Kf=new ht,Qf=new ht,wl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Kf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kf),Qf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){Mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Mh,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,l=r?r.z/o.x:1,h=r?r.w/o.y:1,u=r?r.x/o.x:0,d=r?r.y/o.y:0;t.coordinateSystem===xs||t.reversedDepth?e.set(.5*l,0,0,.5*l+u,0,.5*h,0,.5*h+d,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+u,0,.5*h,0,.5*h+d,0,0,.5,.5,0,0,0,1),e.multiply(Mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ha=new ht,Ga=new Wn,yi=new ht,Uo=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ha,Ga,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Ga,yi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ha,Ga,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Ga,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},sr=new ht,td=new me,ed=new me,wn=class extends Uo{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,e){return this.getViewBounds(t,td,ed),e.subVectors(ed,td)}setViewOffset(t,e,i,r,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_s*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,o=-.5*r,l=this.view;if(this.view!==null&&this.view.enabled){let u=l.fullWidth,d=l.fullHeight;o+=l.offsetX*r/u,e-=l.offsetY*i/d,r*=l.width/u,i*=l.height/d}let h=this.filmOffset;h!==0&&(o+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Is=class extends Uo{constructor(t=-1,e=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-t,l=i+t,h=r+e,u=r-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,h-=g*this.view.offsetY,u=h-g*this.view.height}this.projectionMatrix.makeOrthographic(o,l,h,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ah=class extends wl{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends Oo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Ah}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ms=-90,gs=1,El=class extends ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wn(ms,gs,t,e);r.layers=this.layers,this.add(r);let o=new wn(ms,gs,t,e);o.layers=this.layers,this.add(o);let l=new wn(ms,gs,t,e);l.layers=this.layers,this.add(l);let h=new wn(ms,gs,t,e);h.layers=this.layers,this.add(h);let u=new wn(ms,gs,t,e);u.layers=this.layers,this.add(u);let d=new wn(ms,gs,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,o,l,h,u]=e;for(let d of e)this.remove(d);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,l,h,u,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let b=!1;t.isWebGLRenderer===!0?b=t.state.buffers.depth.getReversed():b=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,2,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,3,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,4,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,g),t.setRenderTarget(v,_,x),t.xr.enabled=w,i.texture.needsPMREMUpdate=!0}},Tl=class extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ru="\\[\\]\\.:\\/",r_=new RegExp("["+ru+"]","g"),su="[^"+ru+"]",s_="[^"+ru.replace("\\.","")+"]",o_=/((?:WC+[\/:])*)/.source.replace("WC",su),a_=/(WCOD+)?/.source.replace("WCOD",s_),l_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",su),c_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",su),h_=new RegExp("^"+o_+a_+l_+c_+"$"),u_=["material","materials","bones","map"],Ch=class{constructor(t,e,i){let r=i||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},je=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(r_,"")}static parseTrackName(t){let e=h_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=i.nodeName.substring(r+1);u_.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let l=0;l<o.length;l++){let h=o[l];if(h.name===e||h.uuid===e)return h;let u=i(h.children);if(u)return u}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){_e("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===d){d=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let l=t[r];if(l===void 0){let d=e.nodeName;ye("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=Ch;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];nS=new Float32Array(1),nd=new Xe,Bo=class{constructor(t,e,i=0,r=1/0){this.ray=new ar(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ye("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nd),this}intersectObject(t,e=!0,i=[]){return Ph(t,this,i,e),i.sort(id),i}intersectObjects(t,e=!0,i=[]){for(let r=0,o=t.length;r<o;r++)Ph(t[r],this,i,e);return i.sort(id),i}};Ls=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Ih=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=r,this}},rd=new ht,ko=class extends ln{constructor(t=new ht(0,0,1),e=new ht(0,0,0),i=1,r=16776960,o=i*.2,l=o*.2){super(),this.type="ArrowHelper",Xa===void 0&&(Xa=new Ke,Xa.setAttribute("position",new $e([0,0,0,0,1,0],3)),bh=new Cs(.5,1,5,1),bh.translate(0,-.5,0)),this.position.copy(e),this.line=new Nr(Xa,new ui({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Be(bh,new Yn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,l)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{rd.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(rd,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},zo=class extends hi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?_e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function pp(){let n=null,t=!1,e=null,i=null;function r(o,l){i=n.requestAnimationFrame(r),e(o,l)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function p_(n){let t=new WeakMap;function e(h,u){let d=h.array,g=h.usage,v=d.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=n.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=n.SHORT;else if(d instanceof Uint32Array)x=n.UNSIGNED_INT;else if(d instanceof Int32Array)x=n.INT;else if(d instanceof Int8Array)x=n.BYTE;else if(d instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function i(h,u,d){let g=u.array,v=u.updateRanges;if(n.bindBuffer(d,h),v.length===0)n.bufferSubData(d,0,g);else{v.sort((x,w)=>x.start-w.start);let _=0;for(let x=1;x<v.length;x++){let w=v[_],E=v[x];E.start<=w.start+w.count+1?w.count=Math.max(w.count,E.start+E.count-w.start):(++_,v[_]=E)}v.length=_+1;for(let x=0,w=v.length;x<w;x++){let E=v[x];n.bufferSubData(d,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=t.get(h);u&&(n.deleteBuffer(u.buffer),t.delete(h))}function l(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let d=t.get(h);if(d===void 0)t.set(h,e(h,u));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,h,u),d.version=h.version}}return{get:r,remove:o,update:l}}function Jy(n,t,e,i,r,o){let l=new Ee(0),h=r===!0?0:1,u,d,g=null,v=0,_=null;function x(L){let V=L.isScene===!0?L.background:null;if(V&&V.isTexture){let A=L.backgroundBlurriness>0;V=t.get(V,A)}return V}function w(L){let V=!1,A=x(L);A===null?b(l,h):A&&A.isColor&&(b(A,1),V=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||V)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(L,V){let A=x(V);A&&(A.isCubeTexture||A.mapping===Ho)?(d===void 0&&(d=new Be(new cr(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Br(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,D,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=A,d.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(V.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(mp),d.material.toneMapped=Oe.getTransfer(A.colorSpace)!==ze,(g!==A||v!==A.version||_!==n.toneMapping)&&(d.material.needsUpdate=!0,g=A,v=A.version,_=n.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new Be(new Ro(2,2),new $n({name:"BackgroundMaterial",uniforms:Br(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,u.material.toneMapped=Oe.getTransfer(A.colorSpace)!==ze,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||v!==A.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,g=A,v=A.version,_=n.toneMapping),u.layers.enableAll(),L.unshift(u,u.geometry,u.material,0,0,null))}function b(L,V){L.getRGB(mc,iu(n)),e.buffers.color.setClear(mc.r,mc.g,mc.b,V,o)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(L,V=1){l.set(L),h=V,b(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,b(l,h)},render:w,addToRenderList:E,dispose:y}}function jy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=_(null),o=r,l=!1;function h(Y,Z,J,j,K){let lt=!1,gt=v(Y,j,J,Z);o!==gt&&(o=gt,d(o.object)),lt=x(Y,j,J,K),lt&&w(Y,j,J,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(lt||l)&&(l=!1,A(Y,Z,J,j),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function u(){return n.createVertexArray()}function d(Y){return n.bindVertexArray(Y)}function g(Y){return n.deleteVertexArray(Y)}function v(Y,Z,J,j){let K=j.wireframe===!0,lt=i[Z.id];lt===void 0&&(lt={},i[Z.id]=lt);let gt=Y.isInstancedMesh===!0?Y.id:0,Et=lt[gt];Et===void 0&&(Et={},lt[gt]=Et);let yt=Et[J.id];yt===void 0&&(yt={},Et[J.id]=yt);let It=yt[K];return It===void 0&&(It=_(u()),yt[K]=It),It}function _(Y){let Z=[],J=[],j=[];for(let K=0;K<e;K++)Z[K]=0,J[K]=0,j[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:J,attributeDivisors:j,object:Y,attributes:{},index:null}}function x(Y,Z,J,j){let K=o.attributes,lt=Z.attributes,gt=0,Et=J.getAttributes();for(let yt in Et)if(Et[yt].location>=0){let Ot=K[yt],jt=lt[yt];if(jt===void 0&&(yt==="instanceMatrix"&&Y.instanceMatrix&&(jt=Y.instanceMatrix),yt==="instanceColor"&&Y.instanceColor&&(jt=Y.instanceColor)),Ot===void 0||Ot.attribute!==jt||jt&&Ot.data!==jt.data)return!0;gt++}return o.attributesNum!==gt||o.index!==j}function w(Y,Z,J,j){let K={},lt=Z.attributes,gt=0,Et=J.getAttributes();for(let yt in Et)if(Et[yt].location>=0){let Ot=lt[yt];Ot===void 0&&(yt==="instanceMatrix"&&Y.instanceMatrix&&(Ot=Y.instanceMatrix),yt==="instanceColor"&&Y.instanceColor&&(Ot=Y.instanceColor));let jt={};jt.attribute=Ot,Ot&&Ot.data&&(jt.data=Ot.data),K[yt]=jt,gt++}o.attributes=K,o.attributesNum=gt,o.index=j}function E(){let Y=o.newAttributes;for(let Z=0,J=Y.length;Z<J;Z++)Y[Z]=0}function b(Y){y(Y,0)}function y(Y,Z){let J=o.newAttributes,j=o.enabledAttributes,K=o.attributeDivisors;J[Y]=1,j[Y]===0&&(n.enableVertexAttribArray(Y),j[Y]=1),K[Y]!==Z&&(n.vertexAttribDivisor(Y,Z),K[Y]=Z)}function L(){let Y=o.newAttributes,Z=o.enabledAttributes;for(let J=0,j=Z.length;J<j;J++)Z[J]!==Y[J]&&(n.disableVertexAttribArray(J),Z[J]=0)}function V(Y,Z,J,j,K,lt,gt){gt===!0?n.vertexAttribIPointer(Y,Z,J,K,lt):n.vertexAttribPointer(Y,Z,J,j,K,lt)}function A(Y,Z,J,j){E();let K=j.attributes,lt=J.getAttributes(),gt=Z.defaultAttributeValues;for(let Et in lt){let yt=lt[Et];if(yt.location>=0){let It=K[Et];if(It===void 0&&(Et==="instanceMatrix"&&Y.instanceMatrix&&(It=Y.instanceMatrix),Et==="instanceColor"&&Y.instanceColor&&(It=Y.instanceColor)),It!==void 0){let Ot=It.normalized,jt=It.itemSize,ne=t.get(It);if(ne===void 0)continue;let Te=ne.buffer,Me=ne.type,Ae=ne.bytesPerElement,Pt=Me===n.INT||Me===n.UNSIGNED_INT||It.gpuType===Il;if(It.isInterleavedBufferAttribute){let Ut=It.data,ie=Ut.stride,ue=It.offset;if(Ut.isInstancedInterleavedBuffer){for(let Zt=0;Zt<yt.locationSize;Zt++)y(yt.location+Zt,Ut.meshPerAttribute);Y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Zt=0;Zt<yt.locationSize;Zt++)b(yt.location+Zt);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let Zt=0;Zt<yt.locationSize;Zt++)V(yt.location+Zt,jt/yt.locationSize,Me,Ot,ie*Ae,(ue+jt/yt.locationSize*Zt)*Ae,Pt)}else{if(It.isInstancedBufferAttribute){for(let Ut=0;Ut<yt.locationSize;Ut++)y(yt.location+Ut,It.meshPerAttribute);Y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Ut=0;Ut<yt.locationSize;Ut++)b(yt.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let Ut=0;Ut<yt.locationSize;Ut++)V(yt.location+Ut,jt/yt.locationSize,Me,Ot,jt*Ae,jt/yt.locationSize*Ut*Ae,Pt)}}else if(gt!==void 0){let Ot=gt[Et];if(Ot!==void 0)switch(Ot.length){case 2:n.vertexAttrib2fv(yt.location,Ot);break;case 3:n.vertexAttrib3fv(yt.location,Ot);break;case 4:n.vertexAttrib4fv(yt.location,Ot);break;default:n.vertexAttrib1fv(yt.location,Ot)}}}}L()}function R(){k();for(let Y in i){let Z=i[Y];for(let J in Z){let j=Z[J];for(let K in j){let lt=j[K];for(let gt in lt)g(lt[gt].object),delete lt[gt];delete j[K]}}delete i[Y]}}function D(Y){if(i[Y.id]===void 0)return;let Z=i[Y.id];for(let J in Z){let j=Z[J];for(let K in j){let lt=j[K];for(let gt in lt)g(lt[gt].object),delete lt[gt];delete j[K]}}delete i[Y.id]}function H(Y){for(let Z in i){let J=i[Z];for(let j in J){let K=J[j];if(K[Y.id]===void 0)continue;let lt=K[Y.id];for(let gt in lt)g(lt[gt].object),delete lt[gt];delete K[Y.id]}}}function C(Y){for(let Z in i){let J=i[Z],j=Y.isInstancedMesh===!0?Y.id:0,K=J[j];if(K!==void 0){for(let lt in K){let gt=K[lt];for(let Et in gt)g(gt[Et].object),delete gt[Et];delete K[lt]}delete J[j],Object.keys(J).length===0&&delete i[Z]}}}function k(){G(),l=!0,o!==r&&(o=r,d(o.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:k,resetDefaultState:G,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfObject:C,releaseStatesOfProgram:H,initAttributes:E,enableAttribute:b,disableUnusedAttributes:L}}function Ky(n,t,e){let i;function r(u){i=u}function o(u,d){n.drawArrays(i,u,d),e.update(d,i,1)}function l(u,d,g){g!==0&&(n.drawArraysInstanced(i,u,d,g),e.update(d,i,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,g);let _=0;for(let x=0;x<g;x++)_+=d[x];e.update(_,i,1)}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}function Qy(n,t,e,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let H=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(H){return!(H!==ni&&i.convert(H)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){let C=H===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Un&&H!==pi&&!C&&i.convert(H)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(H){if(H==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",g=u(d);g!==d&&(_e("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);let v=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&_===!1&&_e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),b=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),L=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),V=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:w,maxTextureSize:E,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:L,maxVaryings:V,maxFragmentUniforms:A,maxSamples:R,samples:D}}function tx(n){let t=this,e=null,i=0,r=!1,o=!1,l=new Xn,h=new Ce,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){let x=v.length!==0||_||i!==0||r;return r=_,i=v.length,x},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,_){e=g(v,_,0)},this.setState=function(v,_,x){let w=v.clippingPlanes,E=v.clipIntersection,b=v.clipShadows,y=n.get(v);if(!r||w===null||w.length===0||o&&!b)o?g(null):d();else{let L=o?0:i,V=L*4,A=y.clippingState||null;u.value=A,A=g(w,_,V,x);for(let R=0;R!==V;++R)A[R]=e[R];y.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function d(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function g(v,_,x,w){let E=v!==null?v.length:0,b=null;if(E!==0){if(b=u.value,w!==!0||b===null){let y=x+E*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(b===null||b.length<y)&&(b=new Float32Array(y));for(let V=0,A=x;V!==E;++V,A+=4)l.copy(v[V]).applyMatrix4(L,h),l.normal.toArray(b,A),b[A+3]=l.constant}u.value=b,u.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,b}}function sx(n){let t=[],e=[],i=n,r=n-Bs+1+ex;for(let o=0;o<r;o++){let l=Math.pow(2,i);t.push(l);let h=1/(l-2),u=-h,d=1+h,g=[u,u,d,u,d,d,u,u,d,d,u,d],v=6,_=6,x=3,w=new Float32Array(x*_*v),E=new Float32Array(x*_*v);for(let y=0;y<v;y++){let L=y%3*2/3-1,V=y>2?0:-1,A=[L,V,0,L+2/3,V,0,L+2/3,V+1,0,L,V,0,L+2/3,V+1,0,L,V+1,0];w.set(A,x*_*y);for(let R=0;R<_;R++){let D=g[R*2]*2-1,H=g[R*2+1]*2-1;y===0?kr.set(1,H,D):y===1?kr.set(-D,1,-H):y===2?kr.set(-D,H,1):y===3?kr.set(-1,H,-D):y===4?kr.set(-D,-1,H):kr.set(D,H,-1),kr.toArray(E,(y*_+R)*x)}}let b=new Ke;b.setAttribute("position",new Ye(w,x)),b.setAttribute("outputDirection",new Ye(E,x)),e.push(new Be(b,null)),i>Bs&&i--}return{lodMeshes:e,sizeLods:t}}function qd(n,t,e){let i=new Fn(n,t,e);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function ox(n,t,e){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ix,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ax(n,t,e){return new $n({name:"SphericalGaussianBlur",defines:{SAMPLES:nx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Zd(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Jd(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function lx(n){let t=new WeakMap,e=new WeakMap,i=null;function r(_,x=!1){return _==null?null:x?l(_):o(_)}function o(_){if(_&&_.isTexture){let x=_.mapping;if(x===Al||x===Cl)if(t.has(_)){let w=t.get(_).texture;return h(w,_.mapping)}else{let w=_.image;if(w&&w.height>0){let E=new vc(w.height);return E.fromEquirectangularTexture(n,_),t.set(_,E),_.addEventListener("dispose",d),h(E.texture,_.mapping)}else return null}}return _}function l(_){if(_&&_.isTexture){let x=_.mapping,w=x===Al||x===Cl,E=x===_r||x===Fr;if(w||E){let b=e.get(_),y=b!==void 0?b.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return i===null&&(i=new _c(n)),b=w?i.fromEquirectangular(_,b):i.fromCubemap(_,b),b.texture.pmremVersion=_.pmremVersion,e.set(_,b),b.texture;if(b!==void 0)return b.texture;{let L=_.image;return w&&L&&L.height>0||E&&L&&u(L)?(i===null&&(i=new _c(n)),b=w?i.fromEquirectangular(_):i.fromCubemap(_),b.texture.pmremVersion=_.pmremVersion,e.set(_,b),_.addEventListener("dispose",g),b.texture):null}}}return _}function h(_,x){return x===Al?_.mapping=_r:x===Cl&&(_.mapping=Fr),_}function u(_){let x=0,w=6;for(let E=0;E<w;E++)_[E]!==void 0&&x++;return x===w}function d(_){let x=_.target;x.removeEventListener("dispose",d);let w=t.get(x);w!==void 0&&(t.delete(x),w.dispose())}function g(_){let x=_.target;x.removeEventListener("dispose",g);let w=e.get(x);w!==void 0&&(e.delete(x),w.dispose())}function v(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:v}}function cx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Rr("WebGLRenderer: "+i+" extension not supported."),r}}}function hx(n,t,e,i){let r={},o=new WeakMap;function l(v){let _=v.target;_.index!==null&&t.remove(_.index);for(let w in _.attributes)t.remove(_.attributes[w]);_.removeEventListener("dispose",l),delete r[_.id];let x=o.get(_);x&&(t.remove(x),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function h(v,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function u(v){let _=v.attributes;for(let x in _)t.update(_[x],n.ARRAY_BUFFER)}function d(v){let _=[],x=v.index,w=v.attributes.position,E=0;if(w===void 0)return;if(x!==null){let L=x.array;E=x.version;for(let V=0,A=L.length;V<A;V+=3){let R=L[V+0],D=L[V+1],H=L[V+2];_.push(R,D,D,H,H,R)}}else{let L=w.array;E=w.version;for(let V=0,A=L.length/3-1;V<A;V+=3){let R=V+0,D=V+1,H=V+2;_.push(R,D,D,H,H,R)}}let b=new(w.count>=65535?Eo:wo)(_,1);b.version=E;let y=o.get(v);y&&t.remove(y),o.set(v,b)}function g(v){let _=o.get(v);if(_){let x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return o.get(v)}return{get:h,update:u,getWireframeAttribute:g}}function ux(n,t,e){let i;function r(v){i=v}let o,l;function h(v){o=v.type,l=v.bytesPerElement}function u(v,_){n.drawElements(i,_,o,v*l),e.update(_,i,1)}function d(v,_,x){x!==0&&(n.drawElementsInstanced(i,_,o,v*l,x),e.update(_,i,x))}function g(v,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,o,v,0,x);let E=0;for(let b=0;b<x;b++)E+=_[b];e.update(E,i,1)}this.setMode=r,this.setIndex=h,this.render=u,this.renderInstances=d,this.renderMultiDraw=g}function fx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,h){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=h*(o/3);break;case n.LINES:e.lines+=h*(o/2);break;case n.LINE_STRIP:e.lines+=h*(o-1);break;case n.LINE_LOOP:e.lines+=h*o;break;case n.POINTS:e.points+=h*o;break;default:ye("WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function dx(n,t,e){let i=new WeakMap,r=new Qe;function o(l,h,u){let d=l.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0,_=i.get(h);if(_===void 0||_.count!==v){let k=function(){H.dispose(),i.delete(h),h.removeEventListener("dispose",k)};_!==void 0&&_.texture.dispose();let x=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],V=0;x===!0&&(V=1),w===!0&&(V=2),E===!0&&(V=3);let A=h.attributes.position.count*V,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let D=new Float32Array(A*R*4*v),H=new bo(D,A,R,v);H.type=pi,H.needsUpdate=!0;let C=V*4;for(let G=0;G<v;G++){let Y=b[G],Z=y[G],J=L[G],j=A*R*4*G;for(let K=0;K<Y.count;K++){let lt=K*C;x===!0&&(r.fromBufferAttribute(Y,K),D[j+lt+0]=r.x,D[j+lt+1]=r.y,D[j+lt+2]=r.z,D[j+lt+3]=0),w===!0&&(r.fromBufferAttribute(Z,K),D[j+lt+4]=r.x,D[j+lt+5]=r.y,D[j+lt+6]=r.z,D[j+lt+7]=0),E===!0&&(r.fromBufferAttribute(J,K),D[j+lt+8]=r.x,D[j+lt+9]=r.y,D[j+lt+10]=r.z,D[j+lt+11]=J.itemSize===4?r.w:1)}}_={count:v,texture:H,size:new me(A,R)},i.set(h,_),h.addEventListener("dispose",k)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let x=0;for(let E=0;E<d.length;E++)x+=d[E];let w=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(n,"morphTargetBaseInfluence",w),u.getUniforms().setValue(n,"morphTargetInfluences",d)}u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:o}}function px(n,t,e,i,r){let o=new WeakMap;function l(d){let g=r.render.frame,v=d.geometry,_=t.get(d,v);if(o.get(_)!==g&&(t.update(_),o.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),o.get(d)!==g&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,g))),d.isSkinnedMesh){let x=d.skeleton;o.get(x)!==g&&(x.update(),o.set(x,g))}return _}function h(){o=new WeakMap}function u(d){let g=d.target;g.removeEventListener("dispose",u),i.releaseStatesOfObject(g),e.remove(g.instanceMatrix),g.instanceColor!==null&&e.remove(g.instanceColor)}return{update:l,dispose:h}}function gx(n,t,e,i,r,o){let l=new Fn(t,e,{type:n,depthBuffer:r,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,u=null,d=new Ke;d.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new $e([0,2,0,0,2,0],2));let g=new ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Be(d,g),_=new Is(-1,1,1,-1,0,1),x=null,w=null,E=!1,b,y=null,L=[],V=!1;this.setSize=function(A,R){l.setSize(A,R),h!==null&&h.setSize(A,R),u!==null&&u.setSize(A,R);for(let D=0;D<L.length;D++){let H=L[D];H.setSize&&H.setSize(A,R)}},this.setEffects=function(A){L=A,V=L.length>0&&L[0].isRenderPass===!0;let R=l.width,D=l.height;L.length>0&&h===null&&(h=new Fn(R,D,{type:mi,depthBuffer:!1,stencilBuffer:!1}),u=new Fn(R,D,{type:mi,depthBuffer:!1,stencilBuffer:!1}));for(let H=0;H<L.length;H++){let C=L[H];C.setSize&&C.setSize(R,D)}},this.begin=function(A,R){if(E||A.toneMapping===fi&&L.length===0)return!1;if(y=R,R!==null){let D=R.width,H=R.height;(l.width!==D||l.height!==H)&&this.setSize(D,H)}return V===!1&&A.setRenderTarget(l),b=A.toneMapping,A.toneMapping=fi,!0},this.hasRenderPass=function(){return V},this.end=function(A,R){A.toneMapping=b,E=!0;let D=l,H=h;for(let C=0;C<L.length;C++){let k=L[C];k.enabled!==!1&&(k.render(A,H,D,R),k.needsSwap!==!1&&(D=H,H=H===h?u:h))}if(x!==A.outputColorSpace||w!==A.toneMapping){x=A.outputColorSpace,w=A.toneMapping,g.defines={},Oe.getTransfer(x)===ze&&(g.defines.SRGB_TRANSFER="");let C=mx[w];C&&(g.defines[C]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(y),A.render(v,_),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){l.dispose(),h!==null&&h.dispose(),u!==null&&u.dispose(),d.dispose(),g.dispose()}}function zs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,o=jd[r];if(o===void 0&&(o=new Float32Array(r),jd[r]=o),t!==0){i.toArray(o,0);for(let l=1,h=0;l!==t;++l)h+=e,n[l].toArray(o,h)}return o}function cn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function hn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Mc(n,t){let e=Kd[t];e===void 0&&(e=new Int32Array(t),Kd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _x(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2fv(this.addr,t),hn(e,t)}}function yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;n.uniform3fv(this.addr,t),hn(e,t)}}function xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4fv(this.addr,t),hn(e,t)}}function Mx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;ep.set(i),n.uniformMatrix2fv(this.addr,!1,ep),hn(e,i)}}function bx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;tp.set(i),n.uniformMatrix3fv(this.addr,!1,tp),hn(e,i)}}function Sx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;Qd.set(i),n.uniformMatrix4fv(this.addr,!1,Qd),hn(e,i)}}function wx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2iv(this.addr,t),hn(e,t)}}function Tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3iv(this.addr,t),hn(e,t)}}function Ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4iv(this.addr,t),hn(e,t)}}function Cx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2uiv(this.addr,t),hn(e,t)}}function Ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3uiv(this.addr,t),hn(e,t)}}function Rx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4uiv(this.addr,t),hn(e,t)}}function Lx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(pu.compareFunction=e.isReversedDepthBuffer()?pc:dc,o=pu):o=gp,e.setTexture2D(t||o,r)}function Nx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||vp,r)}function Dx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||yp,r)}function Ox(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||_p,r)}function Fx(n){switch(n){case 5126:return _x;case 35664:return vx;case 35665:return yx;case 35666:return xx;case 35674:return Mx;case 35675:return bx;case 35676:return Sx;case 5124:case 35670:return wx;case 35667:case 35671:return Ex;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Cx;case 36294:return Px;case 36295:return Ix;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ox}}function Ux(n,t){n.uniform1fv(this.addr,t)}function Bx(n,t){let e=zs(t,this.size,2);n.uniform2fv(this.addr,e)}function kx(n,t){let e=zs(t,this.size,3);n.uniform3fv(this.addr,e)}function zx(n,t){let e=zs(t,this.size,4);n.uniform4fv(this.addr,e)}function Vx(n,t){let e=zs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Hx(n,t){let e=zs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Gx(n,t){let e=zs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Xx(n,t){n.uniform1iv(this.addr,t)}function Wx(n,t){n.uniform2iv(this.addr,t)}function Yx(n,t){n.uniform3iv(this.addr,t)}function $x(n,t){n.uniform4iv(this.addr,t)}function qx(n,t){n.uniform1uiv(this.addr,t)}function Zx(n,t){n.uniform2uiv(this.addr,t)}function Jx(n,t){n.uniform3uiv(this.addr,t)}function jx(n,t){n.uniform4uiv(this.addr,t)}function Kx(n,t,e){let i=this.cache,r=t.length,o=Mc(e,r);cn(i,o)||(n.uniform1iv(this.addr,o),hn(i,o));let l;this.type===n.SAMPLER_2D_SHADOW?l=pu:l=gp;for(let h=0;h!==r;++h)e.setTexture2D(t[h]||l,o[h])}function Qx(n,t,e){let i=this.cache,r=t.length,o=Mc(e,r);cn(i,o)||(n.uniform1iv(this.addr,o),hn(i,o));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||vp,o[l])}function tM(n,t,e){let i=this.cache,r=t.length,o=Mc(e,r);cn(i,o)||(n.uniform1iv(this.addr,o),hn(i,o));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||yp,o[l])}function eM(n,t,e){let i=this.cache,r=t.length,o=Mc(e,r);cn(i,o)||(n.uniform1iv(this.addr,o),hn(i,o));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||_p,o[l])}function nM(n){switch(n){case 5126:return Ux;case 35664:return Bx;case 35665:return kx;case 35666:return zx;case 35674:return Vx;case 35675:return Hx;case 35676:return Gx;case 5124:case 35670:return Xx;case 35667:case 35671:return Wx;case 35668:case 35672:return Yx;case 35669:case 35673:return $x;case 5125:return qx;case 36294:return Zx;case 36295:return Jx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return eM}}function np(n,t){n.seq.push(t),n.map[t.id]=t}function iM(n,t,e){let i=n.name,r=i.length;for(fu.lastIndex=0;;){let o=fu.exec(i),l=fu.lastIndex,h=o[1],u=o[2]==="]",d=o[3];if(u&&(h=h|0),d===void 0||d==="["&&l+2===r){np(e,d===void 0?new mu(h,n,t):new gu(h,n,t));break}else{let v=e.map[h];v===void 0&&(v=new _u(h),np(e,v)),e=v}}}function ip(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function oM(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=r;l<o;l++){let h=l+1;i.push(`${h===t?">":" "} ${h}: ${e[l]}`)}return i.join(`
`)}function aM(n){Oe._getMatrix(rp,Oe.workingColorSpace,n);let t=`mat3( ${rp.elements.map(e=>e.toFixed(4))} )`;switch(Oe.getTransfer(n)){case yo:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return _e("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function sp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let l=/ERROR: 0:(\d+)/.exec(o);if(l){let h=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+oM(n.getShaderSource(t),h)}else return o}function lM(n,t){let e=aM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function hM(n,t){let e=cM[t];return e===void 0?(_e("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function uM(){Oe.getLuminanceCoefficients(gc);let n=gc.x.toFixed(4),t=gc.y.toFixed(4),e=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function dM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function pM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(t,r),l=o.name,h=1;o.type===n.FLOAT_MAT2&&(h=2),o.type===n.FLOAT_MAT3&&(h=3),o.type===n.FLOAT_MAT4&&(h=4),e[l]={type:o.type,location:n.getAttribLocation(t,l),locationSize:h}}return e}function Ko(n){return n!==""}function op(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ap(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function vu(n){return n.replace(mM,_M)}function _M(n,t){let e=Ie[t];if(e===void 0){let i=gM.get(t);if(i!==void 0)e=Ie[i],_e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vu(e)}function lp(n){return n.replace(vM,yM)}function yM(n,t,e,i){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function cp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function MM(n){return xM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function SM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":bM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function EM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":wM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function AM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":TM[n.combine]||"ENVMAP_BLENDING_NONE"}function CM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function PM(n,t,e,i){let r=n.getContext(),o=e.defines,l=e.vertexShader,h=e.fragmentShader,u=MM(e),d=SM(e),g=EM(e),v=AM(e),_=CM(e),x=fM(e),w=dM(o),E=r.createProgram(),b,y,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ko).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ko).join(`
`),y.length>0&&(y+=`
`)):(b=[cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),y=[cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Ie.tonemapping_pars_fragment:"",e.toneMapping!==fi?hM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,lM("linearToOutputTexel",e.outputColorSpace),uM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ko).join(`
`)),l=vu(l),l=op(l,e),l=ap(l,e),h=vu(h),h=op(h,e),h=ap(h,e),l=lp(l),h=lp(h),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,b=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",e.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let V=L+b+l,A=L+y+h,R=ip(r,r.VERTEX_SHADER,V),D=ip(r,r.FRAGMENT_SHADER,A);r.attachShader(E,R),r.attachShader(E,D),e.index0AttributeName!==void 0?r.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function H(Y){if(n.debug.checkShaderErrors){let Z=r.getProgramInfoLog(E)||"",J=r.getShaderInfoLog(R)||"",j=r.getShaderInfoLog(D)||"",K=Z.trim(),lt=J.trim(),gt=j.trim(),Et=!0,yt=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,R,D);else{let It=sp(r,R,"vertex"),Ot=sp(r,D,"fragment");ye("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+K+`
`+It+`
`+Ot)}else K!==""?_e("WebGLProgram: Program Info Log:",K):(lt===""||gt==="")&&(yt=!1);yt&&(Y.diagnostics={runnable:Et,programLog:K,vertexShader:{log:lt,prefix:b},fragmentShader:{log:gt,prefix:y}})}r.deleteShader(R),r.deleteShader(D),C=new ks(r,E),k=pM(r,E)}let C;this.getUniforms=function(){return C===void 0&&H(this),C};let k;this.getAttributes=function(){return k===void 0&&H(this),k};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(E,rM)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sM++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=D,this}function RM(n){return n===xr||n===qo||n===Zo}function LM(n,t,e,i,r,o){let l=new ws,h=new yu,u=new Set,d=[],g=new Map,v=i.logarithmicDepthBuffer,_=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return u.add(C),C===0?"uv":`uv${C}`}function E(C,k,G,Y,Z,J){let j=Y.fog,K=Z.geometry,lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,gt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,Et=t.get(C.envMap||lt,gt),yt=Et&&Et.mapping===Ho?Et.image.height:null,It=x[C.type];C.precision!==null&&(_=i.getMaxPrecision(C.precision),_!==C.precision&&_e("WebGLProgram.getParameters:",C.precision,"not supported, using",_,"instead."));let Ot=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,jt=Ot!==void 0?Ot.length:0,ne=0;K.morphAttributes.position!==void 0&&(ne=1),K.morphAttributes.normal!==void 0&&(ne=2),K.morphAttributes.color!==void 0&&(ne=3);let Te,Me,Ae,Pt;if(It){let Le=Ai[It];Te=Le.vertexShader,Me=Le.fragmentShader}else{Te=C.vertexShader,Me=C.fragmentShader;let Le=h.getVertexShaderStage(C),xe=h.getFragmentShaderStage(C);h.update(C,Le,xe),Ae=Le.id,Pt=xe.id}let Ut=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),ue=Z.isInstancedMesh===!0,Zt=Z.isBatchedMesh===!0,ut=!!C.map,Ve=!!C.matcap,at=!!Et,Nt=!!C.aoMap,zt=!!C.lightMap,Bt=!!C.bumpMap&&C.wireframe===!1,Vt=!!C.normalMap,re=!!C.displacementMap,he=!!C.emissiveMap,Yt=!!C.metalnessMap,ae=!!C.roughnessMap,it=C.anisotropy>0,be=C.clearcoat>0,oe=C.dispersion>0,X=C.retroreflectivity>0,P=C.iridescence>0,nt=C.sheen>0,ct=C.transmission>0,St=it&&!!C.anisotropyMap,Tt=be&&!!C.clearcoatMap,Ft=be&&!!C.clearcoatNormalMap,mt=be&&!!C.clearcoatRoughnessMap,Ct=P&&!!C.iridescenceMap,Gt=P&&!!C.iridescenceThicknessMap,qt=nt&&!!C.sheenColorMap,$t=nt&&!!C.sheenRoughnessMap,O=!!C.specularMap,$=!!C.specularColorMap,q=!!C.specularIntensityMap,rt=ct&&!!C.transmissionMap,z=ct&&!!C.thicknessMap,wt=!!C.gradientMap,ft=!!C.alphaMap,Rt=C.alphaTest>0,pt=!!C.alphaHash,Mt=!!C.extensions,bt=fi;C.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(bt=n.toneMapping);let Wt={shaderID:It,shaderType:C.type,shaderName:C.name,vertexShader:Te,fragmentShader:Me,defines:C.defines,customVertexShaderID:Ae,customFragmentShaderID:Pt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:_,batching:Zt,batchingColor:Zt&&Z._colorsTexture!==null,instancing:ue,instancingColor:ue&&Z.instanceColor!==null,instancingMorph:ue&&Z.morphTexture!==null,outputColorSpace:Ut===null?n.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:Oe.workingColorSpace,alphaToCoverage:!!C.alphaToCoverage,map:ut,matcap:Ve,envMap:at,envMapMode:at&&Et.mapping,envMapCubeUVHeight:yt,aoMap:Nt,lightMap:zt,bumpMap:Bt,normalMap:Vt,displacementMap:re,emissiveMap:he,normalMapObjectSpace:Vt&&C.normalMapType===Id,normalMapTangentSpace:Vt&&C.normalMapType===fc,packedNormalMap:Vt&&C.normalMapType===fc&&RM(C.normalMap.format),metalnessMap:Yt,roughnessMap:ae,anisotropy:it,anisotropyMap:St,clearcoat:be,clearcoatMap:Tt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:mt,dispersion:oe,retroreflection:X,iridescence:P,iridescenceMap:Ct,iridescenceThicknessMap:Gt,sheen:nt,sheenColorMap:qt,sheenRoughnessMap:$t,specularMap:O,specularColorMap:$,specularIntensityMap:q,transmission:ct,transmissionMap:rt,thicknessMap:z,gradientMap:wt,opaque:C.transparent===!1&&C.blending===Ds&&C.alphaToCoverage===!1,alphaMap:ft,alphaTest:Rt,alphaHash:pt,combine:C.combine,mapUv:ut&&w(C.map.channel),aoMapUv:Nt&&w(C.aoMap.channel),lightMapUv:zt&&w(C.lightMap.channel),bumpMapUv:Bt&&w(C.bumpMap.channel),normalMapUv:Vt&&w(C.normalMap.channel),displacementMapUv:re&&w(C.displacementMap.channel),emissiveMapUv:he&&w(C.emissiveMap.channel),metalnessMapUv:Yt&&w(C.metalnessMap.channel),roughnessMapUv:ae&&w(C.roughnessMap.channel),anisotropyMapUv:St&&w(C.anisotropyMap.channel),clearcoatMapUv:Tt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:$t&&w(C.sheenRoughnessMap.channel),specularMapUv:O&&w(C.specularMap.channel),specularColorMapUv:$&&w(C.specularColorMap.channel),specularIntensityMapUv:q&&w(C.specularIntensityMap.channel),transmissionMapUv:rt&&w(C.transmissionMap.channel),thicknessMapUv:z&&w(C.thicknessMap.channel),alphaMapUv:ft&&w(C.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Vt||it),vertexNormals:!!K.attributes.normal,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!K.attributes.uv&&(ut||ft),fog:!!j,useFog:C.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:C.wireframe===!1&&(C.flatShading===!0||K.attributes.normal===void 0&&Vt===!1&&(C.isMeshLambertMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isMeshPhysicalMaterial)),sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ie,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:jt,morphTextureStride:ne,numSunLights:k.sun.length,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numSunLightShadows:k.sunShadowMap.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:ut&&C.map.isVideoTexture===!0&&Oe.getTransfer(C.map.colorSpace)===ze,decodeVideoTextureEmissive:he&&C.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(C.emissiveMap.colorSpace)===ze,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===En,flipSided:C.side===Ln,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Mt&&C.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&C.extensions.multiDraw===!0||Zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Wt.vertexUv1s=u.has(1),Wt.vertexUv2s=u.has(2),Wt.vertexUv3s=u.has(3),u.clear(),Wt}function b(C){let k=[];if(C.shaderID?k.push(C.shaderID):(k.push(C.customVertexShaderID),k.push(C.customFragmentShaderID)),C.defines!==void 0)for(let G in C.defines)k.push(G),k.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(y(k,C),L(k,C),k.push(n.outputColorSpace)),k.push(C.customProgramCacheKey),k.join()}function y(C,k){C.push(k.precision),C.push(k.outputColorSpace),C.push(k.envMapMode),C.push(k.envMapCubeUVHeight),C.push(k.mapUv),C.push(k.alphaMapUv),C.push(k.lightMapUv),C.push(k.aoMapUv),C.push(k.bumpMapUv),C.push(k.normalMapUv),C.push(k.displacementMapUv),C.push(k.emissiveMapUv),C.push(k.metalnessMapUv),C.push(k.roughnessMapUv),C.push(k.anisotropyMapUv),C.push(k.clearcoatMapUv),C.push(k.clearcoatNormalMapUv),C.push(k.clearcoatRoughnessMapUv),C.push(k.iridescenceMapUv),C.push(k.iridescenceThicknessMapUv),C.push(k.sheenColorMapUv),C.push(k.sheenRoughnessMapUv),C.push(k.specularMapUv),C.push(k.specularColorMapUv),C.push(k.specularIntensityMapUv),C.push(k.transmissionMapUv),C.push(k.thicknessMapUv),C.push(k.combine),C.push(k.fogExp2),C.push(k.sizeAttenuation),C.push(k.morphTargetsCount),C.push(k.morphAttributeCount),C.push(k.numSunLights),C.push(k.numDirLights),C.push(k.numPointLights),C.push(k.numSpotLights),C.push(k.numSpotLightMaps),C.push(k.numHemiLights),C.push(k.numRectAreaLights),C.push(k.numSunLightShadows),C.push(k.numDirLightShadows),C.push(k.numPointLightShadows),C.push(k.numSpotLightShadows),C.push(k.numSpotLightShadowsWithMaps),C.push(k.numLightProbes),C.push(k.shadowMapType),C.push(k.toneMapping),C.push(k.numClippingPlanes),C.push(k.numClipIntersection),C.push(k.depthPacking)}function L(C,k){l.disableAll(),k.instancing&&l.enable(0),k.instancingColor&&l.enable(1),k.instancingMorph&&l.enable(2),k.matcap&&l.enable(3),k.envMap&&l.enable(4),k.normalMapObjectSpace&&l.enable(5),k.normalMapTangentSpace&&l.enable(6),k.clearcoat&&l.enable(7),k.iridescence&&l.enable(8),k.alphaTest&&l.enable(9),k.vertexColors&&l.enable(10),k.vertexAlphas&&l.enable(11),k.vertexUv1s&&l.enable(12),k.vertexUv2s&&l.enable(13),k.vertexUv3s&&l.enable(14),k.vertexTangents&&l.enable(15),k.anisotropy&&l.enable(16),k.alphaHash&&l.enable(17),k.batching&&l.enable(18),k.dispersion&&l.enable(19),k.retroreflection&&l.enable(24),k.batchingColor&&l.enable(20),k.gradientMap&&l.enable(21),k.packedNormalMap&&l.enable(22),k.vertexNormals&&l.enable(23),C.push(l.mask),l.disableAll(),k.fog&&l.enable(0),k.useFog&&l.enable(1),k.flatShading&&l.enable(2),k.logarithmicDepthBuffer&&l.enable(3),k.reversedDepthBuffer&&l.enable(4),k.skinning&&l.enable(5),k.morphTargets&&l.enable(6),k.morphNormals&&l.enable(7),k.morphColors&&l.enable(8),k.premultipliedAlpha&&l.enable(9),k.shadowMapEnabled&&l.enable(10),k.doubleSided&&l.enable(11),k.flipSided&&l.enable(12),k.useDepthPacking&&l.enable(13),k.dithering&&l.enable(14),k.transmission&&l.enable(15),k.sheen&&l.enable(16),k.opaque&&l.enable(17),k.pointsUvs&&l.enable(18),k.decodeVideoTexture&&l.enable(19),k.decodeVideoTextureEmissive&&l.enable(20),k.alphaToCoverage&&l.enable(21),k.numLightProbeGrids>0&&l.enable(22),k.hasPositionAttribute&&l.enable(23),C.push(l.mask)}function V(C){let k=x[C.type],G;if(k){let Y=Ai[k];G=Xd.clone(Y.uniforms)}else G=C.uniforms;return G}function A(C,k){let G=g.get(k);return G!==void 0?++G.usedTimes:(G=new PM(n,k,C,r),d.push(G),g.set(k,G)),G}function R(C){if(--C.usedTimes===0){let k=d.indexOf(C);d[k]=d[d.length-1],d.pop(),g.delete(C.cacheKey),C.destroy()}}function D(C){h.remove(C)}function H(){h.dispose()}return{getParameters:E,getProgramCacheKey:b,getUniforms:V,acquireProgram:A,releaseProgram:R,releaseShaderCache:D,programs:d,dispose:H}}function NM(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let h=n.get(l);return h===void 0&&(h={},n.set(l,h)),h}function i(l){n.delete(l)}function r(l,h,u){n.get(l)[h]=u}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:o}}function DM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function hp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function up(){let n=[],t=0,e=[],i=[],r=[];function o(){t=0,e.length=0,i.length=0,r.length=0}function l(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function h(_,x,w,E,b,y){let L=n[t];return L===void 0?(L={id:_.id,object:_,geometry:x,material:w,materialVariant:l(_),groupOrder:E,renderOrder:_.renderOrder,z:b,group:y},n[t]=L):(L.id=_.id,L.object=_,L.geometry=x,L.material=w,L.materialVariant=l(_),L.groupOrder=E,L.renderOrder=_.renderOrder,L.z=b,L.group=y),t++,L}function u(_,x,w,E,b,y,L){L.reversedDepth===!0&&(b=-b);let V=h(_,x,w,E,b,y);w.transmission>0?i.push(V):w.transparent===!0?r.push(V):e.push(V)}function d(_,x,w,E,b,y){let L=h(_,x,w,E,b,y);w.transmission>0?i.unshift(L):w.transparent===!0?r.unshift(L):e.unshift(L)}function g(_,x){e.length>1&&e.sort(_||DM),i.length>1&&i.sort(x||hp),r.length>1&&r.sort(x||hp)}function v(){for(let _=t,x=n.length;_<x;_++){let w=n[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:i,transparent:r,init:o,push:u,unshift:d,finish:v,sort:g}}function OM(){let n=new WeakMap;function t(i,r){let o=n.get(i),l;return o===void 0?(l=new up,n.set(i,[l])):r>=o.length?(l=new up,o.push(l)):l=o[r],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function FM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ht,color:new Ee};break;case"SpotLight":e={position:new ht,direction:new ht,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ht,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ht,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":e={color:new Ee,position:new ht,halfWidth:new ht,halfHeight:new ht};break}return n[t.id]=e,e}}}function UM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function kM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function zM(n){let t=new FM,e=UM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ht);let r=new ht,o=new Xe,l=new Xe;function h(d){let g=0,v=0,_=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let x=0,w=0,E=0,b=0,y=0,L=0,V=0,A=0,R=0,D=0,H=0,C=0,k=0,G=0;d.sort(kM);for(let Z=0,J=d.length;Z<J;Z++){let j=d[Z],K=j.color,lt=j.intensity,gt=j.distance,Et=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===xr?Et=j.shadow.map.texture:Et=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)g+=K.r*lt,v+=K.g*lt,_+=K.b*lt;else if(j.isLightProbe){for(let yt=0;yt<9;yt++)i.probe[yt].addScaledVector(j.sh.coefficients[yt],lt);G++}else if(j.isSunLight){let yt=t.get(j);if(yt.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let It=j.shadow,Ot=e.get(j);Ot.shadowIntensity=It.intensity,Ot.shadowBias=It.bias,Ot.shadowNormalBias=It.normalBias,Ot.shadowRadius=It.radius,Ot.shadowMapSize.copy(It.mapSize).multiply(It.getFrameExtents()),i.sunShadow[w]=Ot,i.sunShadowMap[w]=Et;let jt=It.getViewportCount();for(let ne=0;ne<jt;ne++)i.sunShadowMatrix[E+ne]=It.getMatrix(ne),i.sunShadowCascade[E+ne]=It._cascadeData[ne];E+=jt,w++}i.sun[x]=yt,x++}else if(j.isDirectionalLight){let yt=t.get(j);if(yt.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let It=j.shadow,Ot=e.get(j);Ot.shadowIntensity=It.intensity,Ot.shadowBias=It.bias,Ot.shadowNormalBias=It.normalBias,Ot.shadowRadius=It.radius,Ot.shadowMapSize=It.mapSize,i.directionalShadow[b]=Ot,i.directionalShadowMap[b]=Et,i.directionalShadowMatrix[b]=j.shadow.matrix,R++}i.directional[b]=yt,b++}else if(j.isSpotLight){let yt=t.get(j);yt.position.setFromMatrixPosition(j.matrixWorld),yt.color.copy(K).multiplyScalar(lt),yt.distance=gt,yt.coneCos=Math.cos(j.angle),yt.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),yt.decay=j.decay,i.spot[L]=yt;let It=j.shadow;if(j.map&&(i.spotLightMap[C]=j.map,C++,It.updateMatrices(j),j.castShadow&&k++),i.spotLightMatrix[L]=It.matrix,j.castShadow){let Ot=e.get(j);Ot.shadowIntensity=It.intensity,Ot.shadowBias=It.bias,Ot.shadowNormalBias=It.normalBias,Ot.shadowRadius=It.radius,Ot.shadowMapSize=It.mapSize,i.spotShadow[L]=Ot,i.spotShadowMap[L]=Et,H++}L++}else if(j.isRectAreaLight){let yt=t.get(j);yt.color.copy(K).multiplyScalar(lt),yt.halfWidth.set(j.width*.5,0,0),yt.halfHeight.set(0,j.height*.5,0),i.rectArea[V]=yt,V++}else if(j.isPointLight){let yt=t.get(j);if(yt.color.copy(j.color).multiplyScalar(j.intensity),yt.distance=j.distance,yt.decay=j.decay,j.castShadow){let It=j.shadow,Ot=e.get(j);Ot.shadowIntensity=It.intensity,Ot.shadowBias=It.bias,Ot.shadowNormalBias=It.normalBias,Ot.shadowRadius=It.radius,Ot.shadowMapSize=It.mapSize,Ot.shadowCameraNear=It.camera.near,Ot.shadowCameraFar=It.camera.far,i.pointShadow[y]=Ot,i.pointShadowMap[y]=Et,i.pointShadowMatrix[y]=j.shadow.matrix,D++}i.point[y]=yt,y++}else if(j.isHemisphereLight){let yt=t.get(j);yt.skyColor.copy(j.color).multiplyScalar(lt),yt.groundColor.copy(j.groundColor).multiplyScalar(lt),i.hemi[A]=yt,A++}}V>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=_;let Y=i.hash;(Y.sunLength!==x||Y.directionalLength!==b||Y.pointLength!==y||Y.spotLength!==L||Y.rectAreaLength!==V||Y.hemiLength!==A||Y.numSunShadows!==w||Y.numDirectionalShadows!==R||Y.numPointShadows!==D||Y.numSpotShadows!==H||Y.numSpotMaps!==C||Y.numLightProbes!==G)&&(i.sun.length=x,i.directional.length=b,i.spot.length=L,i.rectArea.length=V,i.point.length=y,i.hemi.length=A,i.sunShadow.length=w,i.sunShadowMap.length=w,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=D,i.pointShadowMap.length=D,i.pointShadowMatrix.length=D,i.spotShadow.length=H,i.spotShadowMap.length=H,i.spotLightMatrix.length=H+C-k,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=G,Y.sunLength=x,Y.directionalLength=b,Y.pointLength=y,Y.spotLength=L,Y.rectAreaLength=V,Y.hemiLength=A,Y.numSunShadows=w,Y.numDirectionalShadows=R,Y.numPointShadows=D,Y.numSpotShadows=H,Y.numSpotMaps=C,Y.numLightProbes=G,i.version=BM++)}function u(d,g){let v=0,_=0,x=0,w=0,E=0,b=0,y=g.matrixWorldInverse;for(let L=0,V=d.length;L<V;L++){let A=d[L];if(A.isSunLight){let R=i.sun[v];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(y),v++}else if(A.isDirectionalLight){let R=i.directional[_];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),_++}else if(A.isSpotLight){let R=i.spot[w];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),w++}else if(A.isRectAreaLight){let R=i.rectArea[E];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(y),l.identity(),o.copy(A.matrixWorld),o.premultiply(y),l.extractRotation(o),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),E++}else if(A.isPointLight){let R=i.point[x];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(y),x++}else if(A.isHemisphereLight){let R=i.hemi[b];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(y),b++}}}return{setup:h,setupView:u,state:i}}function fp(n){let t=new zM(n),e=[],i=[],r=[];function o(_){v.camera=_,e.length=0,i.length=0,r.length=0}function l(_){e.push(_)}function h(_){i.push(_)}function u(_){r.push(_)}function d(){t.setup(e)}function g(_){t.setupView(e,_)}let v={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:d,setupLightsView:g,pushLight:l,pushShadow:h,pushLightProbeGrid:u}}function VM(n){let t=new WeakMap;function e(r,o=0){let l=t.get(r),h;return l===void 0?(h=new fp(n),t.set(r,[h])):o>=l.length?(h=new fp(n),l.push(h)):h=l[o],h}function i(){t=new WeakMap}return{get:e,dispose:i}}function YM(n,t,e){let i=new As,r=new me,o=new me,l=new Qe,h=new fl,u=new dl,d={},g=e.maxTextureSize,v={[gr]:Ln,[Ln]:gr,[En]:En},_=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:HM,fragmentShader:GM}),x=_.clone();x.defines.HORIZONTAL_PASS=1;let w=new Ke;w.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Be(w,_),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let y=this.type;this.render=function(D,H,C){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||D.length===0)return;this.type===ad&&(_e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vo);let k=n.getRenderTarget(),G=n.getActiveCubeFace(),Y=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(Ei),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let J=y!==this.type;J&&H.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(K=>K.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,K=D.length;j<K;j++){let lt=D[j],gt=lt.shadow;if(gt===void 0){_e("WebGLShadowMap:",lt,"has no shadow.");continue}if(gt.autoUpdate===!1&&gt.needsUpdate===!1)continue;r.copy(gt.mapSize);let Et=gt.getFrameExtents();r.multiply(Et),o.copy(gt.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(o.x=Math.floor(g/Et.x),r.x=o.x*Et.x,gt.mapSize.x=o.x),r.y>g&&(o.y=Math.floor(g/Et.y),r.y=o.y*Et.y,gt.mapSize.y=o.y));let yt=n.state.buffers.depth.getReversed();if(gt.camera._reversedDepth=yt,gt.map===null||J===!0){if(gt.map!==null&&(gt.map.depthTexture!==null&&(gt.map.depthTexture.dispose(),gt.map.depthTexture=null),gt.map.dispose()),this.type===Ns){if(lt.isPointLight){_e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}gt.map=new Fn(r.x,r.y,{format:xr,type:mi,minFilter:yn,magFilter:yn,generateMipmaps:!1}),gt.map.texture.name=lt.name+".shadowMap",gt.map.depthTexture=new lr(r.x,r.y,pi),gt.map.depthTexture.name=lt.name+".shadowMapDepth",gt.map.depthTexture.format=bi,gt.map.depthTexture.compareFunction=null,gt.map.depthTexture.minFilter=mn,gt.map.depthTexture.magFilter=mn}else lt.isPointLight?(gt.map=new vc(r.x),gt.map.depthTexture=new hl(r.x,di)):(gt.map=new Fn(r.x,r.y),gt.map.depthTexture=new lr(r.x,r.y,di)),gt.map.depthTexture.name=lt.name+".shadowMap",gt.map.depthTexture.format=bi,this.type===Vo?(gt.map.depthTexture.compareFunction=yt?pc:dc,gt.map.depthTexture.minFilter=yn,gt.map.depthTexture.magFilter=yn):(gt.map.depthTexture.compareFunction=null,gt.map.depthTexture.minFilter=mn,gt.map.depthTexture.magFilter=mn);gt.camera.updateProjectionMatrix()}gt.map.isWebGLCubeRenderTarget!==!0&&(gt.map.width!==r.x||gt.map.height!==r.y)&&gt.map.setSize(r.x,r.y);let It=gt.map.isWebGLCubeRenderTarget?6:gt.getViewportCount();lt.isPointLight!==!0&&gt.updateMatrices(lt,C);for(let Ot=0;Ot<It;Ot++){let jt=gt.getCamera(Ot);if(lt.isPointLight){let ne=gt.camera,Te=gt.matrix,Me=lt.distance||ne.far;Me!==ne.far&&(ne.far=Me,ne.updateProjectionMatrix()),jo.setFromMatrixPosition(lt.matrixWorld),ne.position.copy(jo),du.copy(ne.position),du.add(XM[Ot]),ne.up.copy(WM[Ot]),ne.lookAt(du),ne.updateMatrixWorld(),Te.makeTranslation(-jo.x,-jo.y,-jo.z),dp.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),gt._frustum.setFromProjectionMatrix(dp,ne.coordinateSystem,ne.reversedDepth)}if(gt.map.isWebGLCubeRenderTarget)n.setRenderTarget(gt.map,Ot),n.clear();else{Ot===0&&(n.setRenderTarget(gt.map),n.clear());let ne=gt.getViewport(Ot);l.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),Z.viewport(l)}i=gt.getFrustum(Ot),A(H,C,jt,lt,this.type)}gt.isPointLightShadow!==!0&&this.type===Ns&&L(gt,C),gt.needsUpdate=!1}y=this.type,b.needsUpdate=!1,n.setRenderTarget(k,G,Y)};function L(D,H){let C=t.update(E);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new Fn(r.x,r.y,{format:xr,type:mi}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(H,null,C,_,E,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(H,null,C,x,E,null)}function V(D,H,C,k){let G=null,Y=C.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(Y!==void 0)G=Y;else if(G=C.isPointLight===!0?u:h,n.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){let Z=G.uuid,J=H.uuid,j=d[Z];j===void 0&&(j={},d[Z]=j);let K=j[J];K===void 0&&(K=G.clone(),j[J]=K,H.addEventListener("dispose",R)),G=K}if(G.visible=H.visible,G.wireframe=H.wireframe,k===Ns?G.side=H.shadowSide!==null?H.shadowSide:H.side:G.side=H.shadowSide!==null?H.shadowSide:v[H.side],G.alphaMap=H.alphaMap,G.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,G.map=H.map,G.clipShadows=H.clipShadows,G.clippingPlanes=H.clippingPlanes,G.clipIntersection=H.clipIntersection,G.displacementMap=H.displacementMap,G.displacementScale=H.displacementScale,G.displacementBias=H.displacementBias,G.wireframeLinewidth=H.wireframeLinewidth,G.linewidth=H.linewidth,C.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let Z=n.properties.get(G);Z.light=C}return G}function A(D,H,C,k,G){if(D.visible===!1)return;if(D.layers.test(H.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&G===Ns)&&(!D.frustumCulled||D.intersectsFrustum(i))){D.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,D.matrixWorld);let J=t.update(D),j=D.material;if(Array.isArray(j)){let K=J.groups;for(let lt=0,gt=K.length;lt<gt;lt++){let Et=K[lt],yt=j[Et.materialIndex];if(yt&&yt.visible){let It=V(D,yt,k,G);D.onBeforeShadow(n,D,H,C,J,It,Et),n.renderBufferDirect(C,null,J,It,D,Et),D.onAfterShadow(n,D,H,C,J,It,Et)}}}else if(j.visible){let K=V(D,j,k,G);D.onBeforeShadow(n,D,H,C,J,K,null),n.renderBufferDirect(C,null,J,K,D,null),D.onAfterShadow(n,D,H,C,J,K,null)}}let Z=D.children;for(let J=0,j=Z.length;J<j;J++)A(Z[J],H,C,k,G)}function R(D){D.target.removeEventListener("dispose",R);for(let C in d){let k=d[C],G=D.target.uuid;G in k&&(k[G].dispose(),delete k[G])}}}function $M(n,t){function e(){let z=!1,wt=new Qe,ft=null,Rt=new Qe(0,0,0,0);return{setMask:function(pt){ft!==pt&&!z&&(n.colorMask(pt,pt,pt,pt),ft=pt)},setLocked:function(pt){z=pt},setClear:function(pt,Mt,bt,Wt,Le){Le===!0&&(pt*=Wt,Mt*=Wt,bt*=Wt),wt.set(pt,Mt,bt,Wt),Rt.equals(wt)===!1&&(n.clearColor(pt,Mt,bt,Wt),Rt.copy(wt))},reset:function(){z=!1,ft=null,Rt.set(-1,0,0,0)}}}function i(){let z=!1,wt=!1,ft=null,Rt=null,pt=null;return{setReversed:function(Mt){if(wt!==Mt){let bt=t.get("EXT_clip_control");Mt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),wt=Mt;let Wt=pt;pt=null,this.setClear(Wt)}},getReversed:function(){return wt},setTest:function(Mt){Mt?Ut(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(Mt){ft!==Mt&&!z&&(n.depthMask(Mt),ft=Mt)},setFunc:function(Mt){if(wt&&(Mt=Vd[Mt]),Rt!==Mt){switch(Mt){case $a:n.depthFunc(n.NEVER);break;case qa:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case ys:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case ja:n.depthFunc(n.GEQUAL);break;case Ka:n.depthFunc(n.GREATER);break;case Qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Rt=Mt}},setLocked:function(Mt){z=Mt},setClear:function(Mt){pt!==Mt&&(pt=Mt,wt&&(Mt=1-Mt),n.clearDepth(Mt))},reset:function(){z=!1,ft=null,Rt=null,pt=null,wt=!1}}}function r(){let z=!1,wt=null,ft=null,Rt=null,pt=null,Mt=null,bt=null,Wt=null,Le=null;return{setTest:function(xe){z||(xe?Ut(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(xe){wt!==xe&&!z&&(n.stencilMask(xe),wt=xe)},setFunc:function(xe,Cn,Nn){(ft!==xe||Rt!==Cn||pt!==Nn)&&(n.stencilFunc(xe,Cn,Nn),ft=xe,Rt=Cn,pt=Nn)},setOp:function(xe,Cn,Nn){(Mt!==xe||bt!==Cn||Wt!==Nn)&&(n.stencilOp(xe,Cn,Nn),Mt=xe,bt=Cn,Wt=Nn)},setLocked:function(xe){z=xe},setClear:function(xe){Le!==xe&&(n.clearStencil(xe),Le=xe)},reset:function(){z=!1,wt=null,ft=null,Rt=null,pt=null,Mt=null,bt=null,Wt=null,Le=null}}}let o=new e,l=new i,h=new r,u=new WeakMap,d=new WeakMap,g={},v={},_={},x=new WeakMap,w=[],E=null,b=!1,y=null,L=null,V=null,A=null,R=null,D=null,H=null,C=new Ee(0,0,0),k=0,G=!1,Y=null,Z=null,J=null,j=null,K=null,lt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),gt=!1,Et=0,yt=n.getParameter(n.VERSION);yt.indexOf("WebGL")!==-1?(Et=parseFloat(/^WebGL (\d)/.exec(yt)[1]),gt=Et>=1):yt.indexOf("OpenGL ES")!==-1&&(Et=parseFloat(/^OpenGL ES (\d)/.exec(yt)[1]),gt=Et>=2);let It=null,Ot={},jt=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Te=new Qe().fromArray(jt),Me=new Qe().fromArray(ne);function Ae(z,wt,ft,Rt){let pt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(z,Mt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let bt=0;bt<ft;bt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,Rt,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(wt+bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return Mt}let Pt={};Pt[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Pt[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pt[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Ut(n.DEPTH_TEST),l.setFunc(ys),Bt(!1),Vt(Rh),Ut(n.CULL_FACE),Nt(Ei);function Ut(z){g[z]!==!0&&(n.enable(z),g[z]=!0)}function ie(z){g[z]!==!1&&(n.disable(z),g[z]=!1)}function ue(z,wt){return _[z]!==wt?(n.bindFramebuffer(z,wt),_[z]=wt,z===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=wt),z===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function Zt(z,wt){let ft=w,Rt=!1;if(z){ft=x.get(wt),ft===void 0&&(ft=[],x.set(wt,ft));let pt=z.textures;if(ft.length!==pt.length||ft[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,bt=pt.length;Mt<bt;Mt++)ft[Mt]=n.COLOR_ATTACHMENT0+Mt;ft.length=pt.length,Rt=!0}}else ft[0]!==n.BACK&&(ft[0]=n.BACK,Rt=!0);Rt&&n.drawBuffers(ft)}function ut(z){return E!==z?(n.useProgram(z),E=z,!0):!1}let Ve={[Or]:n.FUNC_ADD,[cd]:n.FUNC_SUBTRACT,[hd]:n.FUNC_REVERSE_SUBTRACT};Ve[ud]=n.MIN,Ve[fd]=n.MAX;let at={[dd]:n.ZERO,[pd]:n.ONE,[md]:n.SRC_COLOR,[Oh]:n.SRC_ALPHA,[Md]:n.SRC_ALPHA_SATURATE,[yd]:n.DST_COLOR,[_d]:n.DST_ALPHA,[gd]:n.ONE_MINUS_SRC_COLOR,[Fh]:n.ONE_MINUS_SRC_ALPHA,[xd]:n.ONE_MINUS_DST_COLOR,[vd]:n.ONE_MINUS_DST_ALPHA,[bd]:n.CONSTANT_COLOR,[Sd]:n.ONE_MINUS_CONSTANT_COLOR,[wd]:n.CONSTANT_ALPHA,[Ed]:n.ONE_MINUS_CONSTANT_ALPHA};function Nt(z,wt,ft,Rt,pt,Mt,bt,Wt,Le,xe){if(z===Ei){b===!0&&(ie(n.BLEND),b=!1);return}if(b===!1&&(Ut(n.BLEND),b=!0),z!==ld){if(z!==y||xe!==G){if((L!==Or||R!==Or)&&(n.blendEquation(n.FUNC_ADD),L=Or,R=Or),xe)switch(z){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lh:n.blendFunc(n.ONE,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ye("WebGLState: Invalid blending: ",z);break}else switch(z){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nh:ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dh:ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ye("WebGLState: Invalid blending: ",z);break}V=null,A=null,D=null,H=null,C.set(0,0,0),k=0,y=z,G=xe}return}pt=pt||wt,Mt=Mt||ft,bt=bt||Rt,(wt!==L||pt!==R)&&(n.blendEquationSeparate(Ve[wt],Ve[pt]),L=wt,R=pt),(ft!==V||Rt!==A||Mt!==D||bt!==H)&&(n.blendFuncSeparate(at[ft],at[Rt],at[Mt],at[bt]),V=ft,A=Rt,D=Mt,H=bt),(Wt.equals(C)===!1||Le!==k)&&(n.blendColor(Wt.r,Wt.g,Wt.b,Le),C.copy(Wt),k=Le),y=z,G=!1}function zt(z,wt){z.side===En?ie(n.CULL_FACE):Ut(n.CULL_FACE);let ft=z.side===Ln;wt&&(ft=!ft),Bt(ft),z.blending===Ds&&z.transparent===!1?Nt(Ei):Nt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),o.setMask(z.colorWrite);let Rt=z.stencilWrite;h.setTest(Rt),Rt&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),he(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ut(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(z){Y!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),Y=z)}function Vt(z){z!==sd?(Ut(n.CULL_FACE),z!==Z&&(z===Rh?n.cullFace(n.BACK):z===od?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),Z=z}function re(z){z!==J&&(gt&&n.lineWidth(z),J=z)}function he(z,wt,ft){z?(Ut(n.POLYGON_OFFSET_FILL),(j!==wt||K!==ft)&&(j=wt,K=ft,l.getReversed()&&(wt=-wt),n.polygonOffset(wt,ft))):ie(n.POLYGON_OFFSET_FILL)}function Yt(z){z?Ut(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function ae(z){z===void 0&&(z=n.TEXTURE0+lt-1),It!==z&&(n.activeTexture(z),It=z)}function it(z,wt,ft){ft===void 0&&(It===null?ft=n.TEXTURE0+lt-1:ft=It);let Rt=Ot[ft];Rt===void 0&&(Rt={type:void 0,texture:void 0},Ot[ft]=Rt),(Rt.type!==z||Rt.texture!==wt)&&(It!==ft&&(n.activeTexture(ft),It=ft),n.bindTexture(z,wt||Pt[z]),Rt.type=z,Rt.texture=wt)}function be(){let z=Ot[It];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(z){ye("WebGLState:",z)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(z){ye("WebGLState:",z)}}function P(){try{n.texSubImage2D(...arguments)}catch(z){ye("WebGLState:",z)}}function nt(){try{n.texSubImage3D(...arguments)}catch(z){ye("WebGLState:",z)}}function ct(){try{n.compressedTexSubImage2D(...arguments)}catch(z){ye("WebGLState:",z)}}function St(){try{n.compressedTexSubImage3D(...arguments)}catch(z){ye("WebGLState:",z)}}function Tt(){try{n.texStorage2D(...arguments)}catch(z){ye("WebGLState:",z)}}function Ft(){try{n.texStorage3D(...arguments)}catch(z){ye("WebGLState:",z)}}function mt(){try{n.texImage2D(...arguments)}catch(z){ye("WebGLState:",z)}}function Ct(){try{n.texImage3D(...arguments)}catch(z){ye("WebGLState:",z)}}function Gt(z){return v[z]!==void 0?v[z]:n.getParameter(z)}function qt(z,wt){v[z]!==wt&&(n.pixelStorei(z,wt),v[z]=wt)}function $t(z){Te.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Te.copy(z))}function O(z){Me.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Me.copy(z))}function $(z,wt){let ft=d.get(wt);ft===void 0&&(ft=new WeakMap,d.set(wt,ft));let Rt=ft.get(z);Rt===void 0&&(Rt=n.getUniformBlockIndex(wt,z.name),ft.set(z,Rt))}function q(z,wt){let Rt=d.get(wt).get(z);u.get(wt)!==Rt&&(n.uniformBlockBinding(wt,Rt,z.__bindingPointIndex),u.set(wt,Rt))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},v={},It=null,Ot={},_={},x=new WeakMap,w=[],E=null,b=!1,y=null,L=null,V=null,A=null,R=null,D=null,H=null,C=new Ee(0,0,0),k=0,G=!1,Y=null,Z=null,J=null,j=null,K=null,Te.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:Ut,disable:ie,bindFramebuffer:ue,drawBuffers:Zt,useProgram:ut,setBlending:Nt,setMaterial:zt,setFlipSided:Bt,setCullFace:Vt,setLineWidth:re,setPolygonOffset:he,setScissorTest:Yt,activeTexture:ae,bindTexture:it,unbindTexture:be,compressedTexImage2D:oe,compressedTexImage3D:X,texImage2D:mt,texImage3D:Ct,pixelStorei:qt,getParameter:Gt,updateUBOMapping:$,uniformBlockBinding:q,texStorage2D:Tt,texStorage3D:Ft,texSubImage2D:P,texSubImage3D:nt,compressedTexSubImage2D:ct,compressedTexSubImage3D:St,scissor:$t,viewport:O,reset:rt}}function qM(n,t,e,i,r,o,l){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new me,g=new WeakMap,v=new Set,_,x=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(X,P){return w?new OffscreenCanvas(X,P):xo("canvas")}function b(X,P,nt){let ct=1,St=oe(X);if((St.width>nt||St.height>nt)&&(ct=nt/Math.max(St.width,St.height)),ct<1)if(typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap||typeof VideoFrame<"u"&&X instanceof VideoFrame){let Tt=Math.floor(ct*St.width),Ft=Math.floor(ct*St.height);_===void 0&&(_=E(Tt,Ft));let mt=P?E(Tt,Ft):_;return mt.width=Tt,mt.height=Ft,mt.getContext("2d").drawImage(X,0,0,Tt,Ft),_e("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+Tt+"x"+Ft+")."),mt}else return"data"in X&&_e("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),X;return X}function y(X){return X.generateMipmaps}function L(X){n.generateMipmap(X)}function V(X){return X.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:X.isWebGL3DRenderTarget?n.TEXTURE_3D:X.isWebGLArrayRenderTarget||X.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(X,P,nt,ct,St,Tt=!1){if(X!==null){if(n[X]!==void 0)return n[X];_e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+X+"'")}let Ft;ct&&(Ft=t.get("EXT_texture_norm16"),Ft||_e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let mt=P;if(P===n.RED&&(nt===n.FLOAT&&(mt=n.R32F),nt===n.HALF_FLOAT&&(mt=n.R16F),nt===n.UNSIGNED_BYTE&&(mt=n.R8),nt===n.UNSIGNED_SHORT&&Ft&&(mt=Ft.R16_EXT),nt===n.SHORT&&Ft&&(mt=Ft.R16_SNORM_EXT)),P===n.RED_INTEGER&&(nt===n.UNSIGNED_BYTE&&(mt=n.R8UI),nt===n.UNSIGNED_SHORT&&(mt=n.R16UI),nt===n.UNSIGNED_INT&&(mt=n.R32UI),nt===n.BYTE&&(mt=n.R8I),nt===n.SHORT&&(mt=n.R16I),nt===n.INT&&(mt=n.R32I)),P===n.RG&&(nt===n.FLOAT&&(mt=n.RG32F),nt===n.HALF_FLOAT&&(mt=n.RG16F),nt===n.UNSIGNED_BYTE&&(mt=n.RG8),nt===n.UNSIGNED_SHORT&&Ft&&(mt=Ft.RG16_EXT),nt===n.SHORT&&Ft&&(mt=Ft.RG16_SNORM_EXT)),P===n.RG_INTEGER&&(nt===n.UNSIGNED_BYTE&&(mt=n.RG8UI),nt===n.UNSIGNED_SHORT&&(mt=n.RG16UI),nt===n.UNSIGNED_INT&&(mt=n.RG32UI),nt===n.BYTE&&(mt=n.RG8I),nt===n.SHORT&&(mt=n.RG16I),nt===n.INT&&(mt=n.RG32I)),P===n.RGB_INTEGER&&(nt===n.UNSIGNED_BYTE&&(mt=n.RGB8UI),nt===n.UNSIGNED_SHORT&&(mt=n.RGB16UI),nt===n.UNSIGNED_INT&&(mt=n.RGB32UI),nt===n.BYTE&&(mt=n.RGB8I),nt===n.SHORT&&(mt=n.RGB16I),nt===n.INT&&(mt=n.RGB32I)),P===n.RGBA_INTEGER&&(nt===n.UNSIGNED_BYTE&&(mt=n.RGBA8UI),nt===n.UNSIGNED_SHORT&&(mt=n.RGBA16UI),nt===n.UNSIGNED_INT&&(mt=n.RGBA32UI),nt===n.BYTE&&(mt=n.RGBA8I),nt===n.SHORT&&(mt=n.RGBA16I),nt===n.INT&&(mt=n.RGBA32I)),P===n.RGB&&(nt===n.UNSIGNED_SHORT&&Ft&&(mt=Ft.RGB16_EXT),nt===n.SHORT&&Ft&&(mt=Ft.RGB16_SNORM_EXT),nt===n.UNSIGNED_INT_5_9_9_9_REV&&(mt=n.RGB9_E5),nt===n.UNSIGNED_INT_10F_11F_11F_REV&&(mt=n.R11F_G11F_B10F)),P===n.RGBA){let Ct=Tt?yo:Oe.getTransfer(St);nt===n.FLOAT&&(mt=n.RGBA32F),nt===n.HALF_FLOAT&&(mt=n.RGBA16F),nt===n.UNSIGNED_BYTE&&(mt=Ct===ze?n.SRGB8_ALPHA8:n.RGBA8),nt===n.UNSIGNED_SHORT&&Ft&&(mt=Ft.RGBA16_EXT),nt===n.SHORT&&Ft&&(mt=Ft.RGBA16_SNORM_EXT),nt===n.UNSIGNED_SHORT_4_4_4_4&&(mt=n.RGBA4),nt===n.UNSIGNED_SHORT_5_5_5_1&&(mt=n.RGB5_A1)}return(mt===n.R16F||mt===n.R32F||mt===n.RG16F||mt===n.RG32F||mt===n.RGBA16F||mt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function R(X,P){let nt;return X?P===null||P===di||P===Fs?nt=n.DEPTH24_STENCIL8:P===pi?nt=n.DEPTH32F_STENCIL8:P===Os&&(nt=n.DEPTH24_STENCIL8,_e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===di||P===Fs?nt=n.DEPTH_COMPONENT24:P===pi?nt=n.DEPTH_COMPONENT32F:P===Os&&(nt=n.DEPTH_COMPONENT16),nt}function D(X,P){return y(X)===!0||X.isFramebufferTexture&&X.minFilter!==mn&&X.minFilter!==yn?Math.log2(Math.max(P.width,P.height))+1:X.mipmaps!==void 0&&X.mipmaps.length>0?X.mipmaps.length:X.isCompressedTexture&&Array.isArray(X.image)?P.mipmaps.length:1}function H(X){let P=X.target;P.removeEventListener("dispose",H),k(P),P.isVideoTexture&&g.delete(P),P.isHTMLTexture&&v.delete(P)}function C(X){let P=X.target;P.removeEventListener("dispose",C),Y(P)}function k(X){let P=i.get(X);if(P.__webglInit===void 0)return;let nt=X.source,ct=x.get(nt);if(ct){let St=ct[P.__cacheKey];St.usedTimes--,St.usedTimes===0&&G(X),Object.keys(ct).length===0&&x.delete(nt)}i.remove(X)}function G(X){let P=i.get(X);n.deleteTexture(P.__webglTexture);let nt=X.source,ct=x.get(nt);delete ct[P.__cacheKey],l.memory.textures--}function Y(X){let P=i.get(X);if(X.depthTexture&&(X.depthTexture.dispose(),i.remove(X.depthTexture)),X.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(P.__webglFramebuffer[ct]))for(let St=0;St<P.__webglFramebuffer[ct].length;St++)n.deleteFramebuffer(P.__webglFramebuffer[ct][St]);else n.deleteFramebuffer(P.__webglFramebuffer[ct]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[ct])}else{if(Array.isArray(P.__webglFramebuffer))for(let ct=0;ct<P.__webglFramebuffer.length;ct++)n.deleteFramebuffer(P.__webglFramebuffer[ct]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ct=0;ct<P.__webglColorRenderbuffer.length;ct++)P.__webglColorRenderbuffer[ct]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[ct]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let nt=X.textures;for(let ct=0,St=nt.length;ct<St;ct++){let Tt=i.get(nt[ct]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),l.memory.textures--),i.remove(nt[ct])}i.remove(X)}let Z=0;function J(){Z=0}function j(){return Z}function K(X){Z=X}function lt(){let X=Z;return X>=r.maxTextures&&_e("WebGLTextures: Trying to use "+(X+1)+" texture units while this GPU supports only "+r.maxTextures),Z+=1,X}function gt(X){let P=[];return P.push(X.wrapS),P.push(X.wrapT),P.push(X.wrapR||0),P.push(X.magFilter),P.push(X.minFilter),P.push(X.anisotropy),P.push(X.internalFormat),P.push(X.format),P.push(X.type),P.push(X.generateMipmaps),P.push(X.premultiplyAlpha),P.push(X.flipY),P.push(X.unpackAlignment),P.push(X.colorSpace),P.join()}function Et(X,P){let nt=i.get(X);if(X.isVideoTexture&&it(X),X.isRenderTargetTexture===!1&&X.isExternalTexture!==!0&&X.version>0&&nt.__version!==X.version){let ct=X.image;if(ct===null)_e("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)_e("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(nt,X,P);return}}else X.isExternalTexture&&(nt.__webglTexture=X.sourceTexture?X.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture,n.TEXTURE0+P)}function yt(X,P){let nt=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&nt.__version!==X.version){ie(nt,X,P);return}else X.isExternalTexture&&(nt.__webglTexture=X.sourceTexture?X.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,nt.__webglTexture,n.TEXTURE0+P)}function It(X,P){let nt=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&nt.__version!==X.version){ie(nt,X,P);return}e.bindTexture(n.TEXTURE_3D,nt.__webglTexture,n.TEXTURE0+P)}function Ot(X,P){let nt=i.get(X);if(X.isCubeDepthTexture!==!0&&X.version>0&&nt.__version!==X.version){ue(nt,X,P);return}e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture,n.TEXTURE0+P)}let jt={[tl]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},ne={[mn]:n.NEAREST,[Cd]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[Pl]:n.LINEAR_MIPMAP_NEAREST,[vr]:n.LINEAR_MIPMAP_LINEAR},Te={[Ld]:n.NEVER,[Ud]:n.ALWAYS,[Nd]:n.LESS,[dc]:n.LEQUAL,[Dd]:n.EQUAL,[pc]:n.GEQUAL,[Od]:n.GREATER,[Fd]:n.NOTEQUAL};function Me(X,P){if(P.type===pi&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===yn||P.magFilter===Pl||P.magFilter===Go||P.magFilter===vr||P.minFilter===yn||P.minFilter===Pl||P.minFilter===Go||P.minFilter===vr)&&_e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(X,n.TEXTURE_WRAP_S,jt[P.wrapS]),n.texParameteri(X,n.TEXTURE_WRAP_T,jt[P.wrapT]),(X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY)&&n.texParameteri(X,n.TEXTURE_WRAP_R,jt[P.wrapR]),n.texParameteri(X,n.TEXTURE_MAG_FILTER,ne[P.magFilter]),n.texParameteri(X,n.TEXTURE_MIN_FILTER,ne[P.minFilter]),P.compareFunction&&(n.texParameteri(X,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(X,n.TEXTURE_COMPARE_FUNC,Te[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===mn||P.minFilter!==Go&&P.minFilter!==vr||P.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(X,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function Ae(X,P){let nt=!1;X.__webglInit===void 0&&(X.__webglInit=!0,P.addEventListener("dispose",H));let ct=P.source,St=x.get(ct);St===void 0&&(St={},x.set(ct,St));let Tt=gt(P);if(Tt!==X.__cacheKey){St[Tt]===void 0&&(St[Tt]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,nt=!0),St[Tt].usedTimes++;let Ft=St[X.__cacheKey];Ft!==void 0&&(St[X.__cacheKey].usedTimes--,Ft.usedTimes===0&&G(P)),X.__cacheKey=Tt,X.__webglTexture=St[Tt].texture}return nt}function Pt(X,P,nt){return Math.floor(Math.floor(X/nt)/P)}function Ut(X,P,nt,ct){let Tt=X.updateRanges;if(Tt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,P.width,P.height,nt,ct,P.data);else{Tt.sort((qt,$t)=>qt.start-$t.start);let Ft=0;for(let qt=1;qt<Tt.length;qt++){let $t=Tt[Ft],O=Tt[qt],$=$t.start+$t.count,q=Pt(O.start,P.width,4),rt=Pt($t.start,P.width,4);O.start<=$+1&&q===rt&&Pt(O.start+O.count-1,P.width,4)===q?$t.count=Math.max($t.count,O.start+O.count-$t.start):(++Ft,Tt[Ft]=O)}Tt.length=Ft+1;let mt=e.getParameter(n.UNPACK_ROW_LENGTH),Ct=e.getParameter(n.UNPACK_SKIP_PIXELS),Gt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,P.width);for(let qt=0,$t=Tt.length;qt<$t;qt++){let O=Tt[qt],$=Math.floor(O.start/4),q=Math.ceil(O.count/4),rt=$%P.width,z=Math.floor($/P.width),wt=q,ft=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,rt,z,wt,ft,nt,ct,P.data)}X.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,mt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ct),e.pixelStorei(n.UNPACK_SKIP_ROWS,Gt)}}function ie(X,P,nt){let ct=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ct=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ct=n.TEXTURE_3D);let St=Ae(X,P),Tt=P.source;e.bindTexture(ct,X.__webglTexture,n.TEXTURE0+nt);let Ft=i.get(Tt);if(Tt.version!==Ft.__version||St===!0){if(e.activeTexture(n.TEXTURE0+nt),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let ft=Oe.getPrimaries(Oe.workingColorSpace),Rt=P.colorSpace===$i?null:Oe.getPrimaries(P.colorSpace),pt=P.colorSpace===$i||ft===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment);let Ct=b(P.image,!1,r.maxTextureSize);Ct=be(P,Ct);let Gt=o.convert(P.format,P.colorSpace),qt=o.convert(P.type),$t=A(P.internalFormat,Gt,qt,P.normalized,P.colorSpace,P.isVideoTexture);Me(ct,P);let O,$=P.mipmaps,q=P.isVideoTexture!==!0,rt=Ft.__version===void 0||St===!0,z=Tt.dataReady,wt=D(P,Ct);if(P.isDepthTexture)$t=R(P.format===yr,P.type),rt&&(q?e.texStorage2D(n.TEXTURE_2D,1,$t,Ct.width,Ct.height):e.texImage2D(n.TEXTURE_2D,0,$t,Ct.width,Ct.height,0,Gt,qt,null));else if(P.isDataTexture)if($.length>0){q&&rt&&e.texStorage2D(n.TEXTURE_2D,wt,$t,$[0].width,$[0].height);for(let ft=0,Rt=$.length;ft<Rt;ft++)O=$[ft],q?z&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,O.width,O.height,Gt,qt,O.data):e.texImage2D(n.TEXTURE_2D,ft,$t,O.width,O.height,0,Gt,qt,O.data);P.generateMipmaps=!1}else q?(rt&&e.texStorage2D(n.TEXTURE_2D,wt,$t,Ct.width,Ct.height),z&&Ut(P,Ct,Gt,qt)):e.texImage2D(n.TEXTURE_2D,0,$t,Ct.width,Ct.height,0,Gt,qt,Ct.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){q&&rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,$t,$[0].width,$[0].height,Ct.depth);for(let ft=0,Rt=$.length;ft<Rt;ft++)if(O=$[ft],P.format!==ni)if(Gt!==null)if(q){if(z)if(P.layerUpdates.size>0){let pt=ou(O.width,O.height,P.format,P.type);for(let Mt of P.layerUpdates){let bt=O.data.subarray(Mt*pt/O.data.BYTES_PER_ELEMENT,(Mt+1)*pt/O.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,Mt,O.width,O.height,1,Gt,bt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,O.width,O.height,Ct.depth,Gt,O.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,$t,O.width,O.height,Ct.depth,0,O.data,0,0);else _e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,O.width,O.height,Ct.depth,Gt,qt,O.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,$t,O.width,O.height,Ct.depth,0,Gt,qt,O.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{q&&rt&&e.texStorage2D(n.TEXTURE_2D,wt,$t,$[0].width,$[0].height);for(let ft=0,Rt=$.length;ft<Rt;ft++)O=$[ft],P.format!==ni?Gt!==null?q?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,O.width,O.height,Gt,O.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,$t,O.width,O.height,0,O.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?z&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,O.width,O.height,Gt,qt,O.data):e.texImage2D(n.TEXTURE_2D,ft,$t,O.width,O.height,0,Gt,qt,O.data)}else if(P.isDataArrayTexture)if(q){if(rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,$t,Ct.width,Ct.height,Ct.depth),z)if(P.layerUpdates.size>0){let ft=ou(Ct.width,Ct.height,P.format,P.type);for(let Rt of P.layerUpdates){let pt=Ct.data.subarray(Rt*ft/Ct.data.BYTES_PER_ELEMENT,(Rt+1)*ft/Ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Rt,Ct.width,Ct.height,1,Gt,qt,pt)}P.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Gt,qt,Ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,$t,Ct.width,Ct.height,Ct.depth,0,Gt,qt,Ct.data);else if(P.isData3DTexture)q?(rt&&e.texStorage3D(n.TEXTURE_3D,wt,$t,Ct.width,Ct.height,Ct.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Gt,qt,Ct.data)):e.texImage3D(n.TEXTURE_3D,0,$t,Ct.width,Ct.height,Ct.depth,0,Gt,qt,Ct.data);else if(P.isFramebufferTexture){if(rt)if(q)e.texStorage2D(n.TEXTURE_2D,wt,$t,Ct.width,Ct.height);else{let ft=Ct.width,Rt=Ct.height;for(let pt=0;pt<wt;pt++)e.texImage2D(n.TEXTURE_2D,pt,$t,ft,Rt,0,Gt,qt,null),ft>>=1,Rt>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in n){let ft=n.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),Ct.parentNode!==ft){ft.appendChild(Ct),v.add(P),ft.onpaint=Rt=>{let pt=Rt.changedElements;for(let Mt of v)pt.includes(Mt.image)&&(Mt.needsUpdate=!0)},ft.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Ct);else{let pt=n.RGBA,Mt=n.RGBA,bt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pt,Mt,bt,Ct)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($.length>0){if(q&&rt){let ft=oe($[0]);e.texStorage2D(n.TEXTURE_2D,wt,$t,ft.width,ft.height)}for(let ft=0,Rt=$.length;ft<Rt;ft++)O=$[ft],q?z&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Gt,qt,O):e.texImage2D(n.TEXTURE_2D,ft,$t,Gt,qt,O);P.generateMipmaps=!1}else if(q){if(rt){let ft=oe(Ct);e.texStorage2D(n.TEXTURE_2D,wt,$t,ft.width,ft.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Gt,qt,Ct)}else e.texImage2D(n.TEXTURE_2D,0,$t,Gt,qt,Ct);y(P)&&L(ct),Ft.__version=Tt.version,P.onUpdate&&P.onUpdate(P)}X.__version=P.version}function ue(X,P,nt){if(P.image.length!==6)return;let ct=Ae(X,P),St=P.source;e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+nt);let Tt=i.get(St);if(St.version!==Tt.__version||ct===!0){e.activeTexture(n.TEXTURE0+nt);let Ft=Oe.getPrimaries(Oe.workingColorSpace),mt=P.colorSpace===$i?null:Oe.getPrimaries(P.colorSpace),Ct=P.colorSpace===$i||Ft===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Gt=P.isCompressedTexture||P.image[0].isCompressedTexture,qt=P.image[0]&&P.image[0].isDataTexture,$t=[];for(let Mt=0;Mt<6;Mt++)!Gt&&!qt?$t[Mt]=b(P.image[Mt],!0,r.maxCubemapSize):$t[Mt]=qt?P.image[Mt].image:P.image[Mt],$t[Mt]=be(P,$t[Mt]);let O=$t[0],$=o.convert(P.format,P.colorSpace),q=o.convert(P.type),rt=A(P.internalFormat,$,q,P.normalized,P.colorSpace),z=P.isVideoTexture!==!0,wt=Tt.__version===void 0||ct===!0,ft=St.dataReady,Rt=D(P,O);Me(n.TEXTURE_CUBE_MAP,P);let pt;if(Gt){z&&wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,rt,O.width,O.height);for(let Mt=0;Mt<6;Mt++){pt=$t[Mt].mipmaps;for(let bt=0;bt<pt.length;bt++){let Wt=pt[bt];P.format!==ni?$!==null?z?ft&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,bt,0,0,Wt.width,Wt.height,$,Wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,bt,rt,Wt.width,Wt.height,0,Wt.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,bt,0,0,Wt.width,Wt.height,$,q,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,bt,rt,Wt.width,Wt.height,0,$,q,Wt.data)}}}else{if(pt=P.mipmaps,z&&wt){pt.length>0&&Rt++;let Mt=oe($t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,rt,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(qt){z?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,$t[Mt].width,$t[Mt].height,$,q,$t[Mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,rt,$t[Mt].width,$t[Mt].height,0,$,q,$t[Mt].data);for(let bt=0;bt<pt.length;bt++){let Le=pt[bt].image[Mt].image;z?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,bt+1,0,0,Le.width,Le.height,$,q,Le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,bt+1,rt,Le.width,Le.height,0,$,q,Le.data)}}else{z?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,$,q,$t[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,rt,$,q,$t[Mt]);for(let bt=0;bt<pt.length;bt++){let Wt=pt[bt];z?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,bt+1,0,0,$,q,Wt.image[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,bt+1,rt,$,q,Wt.image[Mt])}}}y(P)&&L(n.TEXTURE_CUBE_MAP),Tt.__version=St.version,P.onUpdate&&P.onUpdate(P)}X.__version=P.version}function Zt(X,P,nt,ct,St,Tt){let Ft=o.convert(nt.format,nt.colorSpace),mt=o.convert(nt.type),Ct=A(nt.internalFormat,Ft,mt,nt.normalized,nt.colorSpace),Gt=i.get(P),qt=i.get(nt);if(qt.__renderTarget=P,!Gt.__hasExternalTextures){let $t=Math.max(1,P.width>>Tt),O=Math.max(1,P.height>>Tt);St===n.TEXTURE_3D||St===n.TEXTURE_2D_ARRAY?e.texImage3D(St,Tt,Ct,$t,O,P.depth,0,Ft,mt,null):e.texImage2D(St,Tt,Ct,$t,O,0,Ft,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,X),ae(P)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,St,qt.__webglTexture,0,Yt(P)):(St===n.TEXTURE_2D||St>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ct,St,qt.__webglTexture,Tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(X,P,nt){if(n.bindRenderbuffer(n.RENDERBUFFER,X),P.depthBuffer){let ct=P.depthTexture,St=ct&&ct.isDepthTexture?ct.type:null,Tt=R(P.stencilBuffer,St),Ft=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ae(P)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt(P),Tt,P.width,P.height):nt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt(P),Tt,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ft,n.RENDERBUFFER,X)}else{let ct=P.textures;for(let St=0;St<ct.length;St++){let Tt=ct[St],Ft=o.convert(Tt.format,Tt.colorSpace),mt=o.convert(Tt.type),Ct=A(Tt.internalFormat,Ft,mt,Tt.normalized,Tt.colorSpace);ae(P)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt(P),Ct,P.width,P.height):nt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt(P),Ct,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Ct,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(X,P,nt){let ct=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,X),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let St=i.get(P.depthTexture);if(St.__renderTarget=P,(!St.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ct){if(St.__webglInit===void 0&&(St.__webglInit=!0,P.depthTexture.addEventListener("dispose",H)),St.__webglTexture===void 0){St.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,St.__webglTexture),Me(n.TEXTURE_CUBE_MAP,P.depthTexture);let Gt=o.convert(P.depthTexture.format),qt=o.convert(P.depthTexture.type),$t;P.depthTexture.format===bi?$t=n.DEPTH_COMPONENT24:P.depthTexture.format===yr&&($t=n.DEPTH24_STENCIL8);for(let O=0;O<6;O++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,$t,P.width,P.height,0,Gt,qt,null)}}else Et(P.depthTexture,0);let Tt=St.__webglTexture,Ft=Yt(P),mt=ct?n.TEXTURE_CUBE_MAP_POSITIVE_X+nt:n.TEXTURE_2D,Ct=P.depthTexture.format===yr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(P.depthTexture.format===bi)ae(P)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ct,mt,Tt,0,Ft):n.framebufferTexture2D(n.FRAMEBUFFER,Ct,mt,Tt,0);else if(P.depthTexture.format===yr)ae(P)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ct,mt,Tt,0,Ft):n.framebufferTexture2D(n.FRAMEBUFFER,Ct,mt,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(X){let P=i.get(X),nt=X.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==X.depthTexture){let ct=X.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),ct){let St=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,ct.removeEventListener("dispose",St)};ct.addEventListener("dispose",St),P.__depthDisposeCallback=St}P.__boundDepthTexture=ct}if(X.depthTexture&&!P.__autoAllocateDepthBuffer)if(nt)for(let ct=0;ct<6;ct++)Ve(P.__webglFramebuffer[ct],X,ct);else{let ct=X.texture.mipmaps;ct&&ct.length>0?Ve(P.__webglFramebuffer[0],X,0):Ve(P.__webglFramebuffer,X,0)}else if(nt){P.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[ct]),P.__webglDepthbuffer[ct]===void 0)P.__webglDepthbuffer[ct]=n.createRenderbuffer(),ut(P.__webglDepthbuffer[ct],X,!1);else{let St=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=P.__webglDepthbuffer[ct];n.bindRenderbuffer(n.RENDERBUFFER,Tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,Tt)}}else{let ct=X.texture.mipmaps;if(ct&&ct.length>0?e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),ut(P.__webglDepthbuffer,X,!1);else{let St=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,Tt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(X,P,nt){let ct=i.get(X);P!==void 0&&Zt(ct.__webglFramebuffer,X,X.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),nt!==void 0&&at(X)}function zt(X){let P=X.texture,nt=i.get(X),ct=i.get(P);X.addEventListener("dispose",C);let St=X.textures,Tt=X.isWebGLCubeRenderTarget===!0,Ft=St.length>1;if(Ft||(ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture()),ct.__version=P.version,l.memory.textures++),Tt){nt.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(P.mipmaps&&P.mipmaps.length>0){nt.__webglFramebuffer[mt]=[];for(let Ct=0;Ct<P.mipmaps.length;Ct++)nt.__webglFramebuffer[mt][Ct]=n.createFramebuffer()}else nt.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){nt.__webglFramebuffer=[];for(let mt=0;mt<P.mipmaps.length;mt++)nt.__webglFramebuffer[mt]=n.createFramebuffer()}else nt.__webglFramebuffer=n.createFramebuffer();if(Ft)for(let mt=0,Ct=St.length;mt<Ct;mt++){let Gt=i.get(St[mt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=n.createTexture(),l.memory.textures++)}if(X.samples>0&&ae(X)===!1){nt.__webglMultisampledFramebuffer=n.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let mt=0;mt<St.length;mt++){let Ct=St[mt];nt.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,nt.__webglColorRenderbuffer[mt]);let Gt=o.convert(Ct.format,Ct.colorSpace),qt=o.convert(Ct.type),$t=A(Ct.internalFormat,Gt,qt,Ct.normalized,Ct.colorSpace,X.isXRRenderTarget===!0),O=Yt(X);n.renderbufferStorageMultisample(n.RENDERBUFFER,O,$t,X.width,X.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,nt.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),X.depthBuffer&&(nt.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(nt.__webglDepthRenderbuffer,X,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Tt){e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),Me(n.TEXTURE_CUBE_MAP,P);for(let mt=0;mt<6;mt++)if(P.mipmaps&&P.mipmaps.length>0)for(let Ct=0;Ct<P.mipmaps.length;Ct++)Zt(nt.__webglFramebuffer[mt][Ct],X,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct);else Zt(nt.__webglFramebuffer[mt],X,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);y(P)&&L(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let mt=0,Ct=St.length;mt<Ct;mt++){let Gt=St[mt],qt=i.get(Gt),$t=n.TEXTURE_2D;(X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&($t=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture($t,qt.__webglTexture),Me($t,Gt),Zt(nt.__webglFramebuffer,X,Gt,n.COLOR_ATTACHMENT0+mt,$t,0),y(Gt)&&L($t)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(mt=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,ct.__webglTexture),Me(mt,P),P.mipmaps&&P.mipmaps.length>0)for(let Ct=0;Ct<P.mipmaps.length;Ct++)Zt(nt.__webglFramebuffer[Ct],X,P,n.COLOR_ATTACHMENT0,mt,Ct);else Zt(nt.__webglFramebuffer,X,P,n.COLOR_ATTACHMENT0,mt,0);y(P)&&L(mt),e.unbindTexture()}X.depthBuffer&&at(X)}function Bt(X){let P=X.textures;for(let nt=0,ct=P.length;nt<ct;nt++){let St=P[nt];if(y(St)){let Tt=V(X),Ft=i.get(St).__webglTexture;e.bindTexture(Tt,Ft),L(Tt),e.unbindTexture()}}}let Vt=[],re=[];function he(X){if(X.samples>0){if(ae(X)===!1){let P=X.textures,nt=X.width,ct=X.height,St=n.COLOR_BUFFER_BIT,Tt=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ft=i.get(X),mt=P.length>1;if(mt)for(let Gt=0;Gt<P.length;Gt++)e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);let Ct=X.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Gt=0;Gt<P.length;Gt++){if(X.resolveDepthBuffer&&(X.depthBuffer&&(St|=n.DEPTH_BUFFER_BIT),X.stencilBuffer&&X.resolveStencilBuffer&&(St|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[Gt]);let qt=i.get(P[Gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qt,0)}n.blitFramebuffer(0,0,nt,ct,0,0,nt,ct,St,n.NEAREST),u===!0&&(Vt.length=0,re.length=0,Vt.push(n.COLOR_ATTACHMENT0+Gt),X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&(Vt.push(Tt),re.push(Tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let Gt=0;Gt<P.length;Gt++){e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Gt,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[Gt]);let qt=i.get(P[Gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Gt,n.TEXTURE_2D,qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&u){let P=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function Yt(X){return Math.min(r.maxSamples,X.samples)}function ae(X){let P=i.get(X);return X.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function it(X){let P=l.render.frame;g.get(X)!==P&&(g.set(X,P),X.update())}function be(X,P){let nt=X.colorSpace,ct=X.format,St=X.type;return X.isCompressedTexture===!0||X.isVideoTexture===!0||nt!==vo&&nt!==$i&&(Oe.getTransfer(nt)===ze?(ct!==ni||St!==Un)&&_e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ye("WebGLTextures: Unsupported texture color space:",nt)),P}function oe(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement?(d.width=X.naturalWidth||X.width,d.height=X.naturalHeight||X.height):typeof VideoFrame<"u"&&X instanceof VideoFrame?(d.width=X.displayWidth,d.height=X.displayHeight):(d.width=X.width,d.height=X.height),d}this.allocateTextureUnit=lt,this.resetTextureUnits=J,this.getTextureUnits=j,this.setTextureUnits=K,this.setTexture2D=Et,this.setTexture2DArray=yt,this.setTexture3D=It,this.setTextureCube=Ot,this.rebindTextures=Nt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Zt,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ZM(n,t){function e(i,r=$i){let o,l=Oe.getTransfer(r);if(i===Un)return n.UNSIGNED_BYTE;if(i===Rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ll)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yh)return n.BYTE;if(i===$h)return n.SHORT;if(i===Os)return n.UNSIGNED_SHORT;if(i===Il)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===mi)return n.HALF_FLOAT;if(i===Jh)return n.ALPHA;if(i===jh)return n.RGB;if(i===ni)return n.RGBA;if(i===bi)return n.DEPTH_COMPONENT;if(i===yr)return n.DEPTH_STENCIL;if(i===Kh)return n.RED;if(i===Nl)return n.RED_INTEGER;if(i===xr)return n.RG;if(i===Dl)return n.RG_INTEGER;if(i===Ol)return n.RGBA_INTEGER;if(i===Xo||i===Wo||i===Yo||i===$o)if(l===ze)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Xo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Xo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fl||i===Ul||i===Bl||i===kl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Fl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zl||i===Vl||i===Hl||i===Gl||i===Xl||i===qo||i===Wl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===zl||i===Vl)return l===ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Hl)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gl)return o.COMPRESSED_R11_EAC;if(i===Xl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===qo)return o.COMPRESSED_RG11_EAC;if(i===Wl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yl||i===$l||i===ql||i===Zl||i===Jl||i===jl||i===Kl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===rc||i===sc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Yl)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$l)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ql)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zl)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jl)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rc)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sc)return l===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oc||i===ac||i===lc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===oc)return l===ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ac)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cc||i===hc||i===Zo||i===uc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===cc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function QM(n,t){function e(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function i(b,y){y.color.getRGB(b.fogColor.value,iu(n)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function r(b,y,L,V,A){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?o(b,y):y.isMeshLambertMaterial?(o(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(o(b,y),v(b,y)):y.isMeshPhongMaterial?(o(b,y),g(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(o(b,y),_(b,y),y.isMeshPhysicalMaterial&&x(b,y,A)):y.isMeshMatcapMaterial?(o(b,y),w(b,y)):y.isMeshDepthMaterial?o(b,y):y.isMeshDistanceMaterial?(o(b,y),E(b,y)):y.isMeshNormalMaterial?o(b,y):y.isLineBasicMaterial?(l(b,y),y.isLineDashedMaterial&&h(b,y)):y.isPointsMaterial?u(b,y,L,V):y.isSpriteMaterial?d(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,e(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,e(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,e(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===Ln&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,e(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===Ln&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,e(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,e(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);let L=t.get(y),V=L.envMap,A=L.envMapRotation;V&&(b.envMap.value=V,b.envMapRotation.value.setFromMatrix4(KM.makeRotationFromEuler(A)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(xp),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,b.aoMapTransform))}function l(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,e(y.map,b.mapTransform))}function h(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function u(b,y,L,V){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*L,b.scale.value=V*.5,y.map&&(b.map.value=y.map,e(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,e(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function d(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,e(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,e(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function g(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function v(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function _(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function x(b,y,L){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Ln&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.retroreflectivity>0&&(b.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=L.texture,b.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,b.specularIntensityMapTransform))}function w(b,y){y.matcap&&(b.matcap.value=y.matcap)}function E(b,y){let L=t.get(y).light;b.referencePosition.value.setFromMatrixPosition(L.matrixWorld),b.nearDistance.value=L.shadow.camera.near,b.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tb(n,t,e,i){let r={},o={},l=[],h=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(A,R){let D=R.program;i.uniformBlockBinding(A,D)}function d(A,R){let D=r[A.id];D===void 0&&(b(A),D=g(A),r[A.id]=D,A.addEventListener("dispose",L));let H=R.program;i.updateUBOMapping(A,H);let C=t.render.frame;o[A.id]!==C&&(_(A),o[A.id]=C)}function g(A){let R=v();A.__bindingPointIndex=R;let D=n.createBuffer(),H=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,H,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,D),D}function v(){for(let A=0;A<h;A++)if(l.indexOf(A)===-1)return l.push(A),A;return ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){let R=r[A.id],D=A.uniforms,H=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let C=0,k=D.length;C<k;C++){let G=D[C];if(Array.isArray(G))for(let Y=0,Z=G.length;Y<Z;Y++)x(G[Y],C,Y,H);else x(G,C,0,H)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(A,R,D,H){if(E(A,R,D,H)===!0){let C=A.__offset,k=A.value;if(Array.isArray(k)){let G=0;for(let Y=0;Y<k.length;Y++){let Z=k[Y],J=y(Z);w(Z,A.__data,G),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(k,A.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,A.__data)}}function w(A,R,D){typeof A=="number"||typeof A=="boolean"?R[0]=A:A.isMatrix3?(R[0]=A.elements[0],R[1]=A.elements[1],R[2]=A.elements[2],R[3]=0,R[4]=A.elements[3],R[5]=A.elements[4],R[6]=A.elements[5],R[7]=0,R[8]=A.elements[6],R[9]=A.elements[7],R[10]=A.elements[8],R[11]=0):ArrayBuffer.isView(A)?R.set(new A.constructor(A.buffer,A.byteOffset,R.length)):A.toArray(R,D)}function E(A,R,D,H){let C=A.value,k=R+"_"+D;if(H[k]===void 0)return typeof C=="number"||typeof C=="boolean"?H[k]=C:ArrayBuffer.isView(C)?H[k]=C.slice():H[k]=C.clone(),!0;{let G=H[k];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return H[k]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(G.equals(C)===!1)return G.copy(C),!0}}return!1}function b(A){let R=A.uniforms,D=0,H=16;for(let k=0,G=R.length;k<G;k++){let Y=Array.isArray(R[k])?R[k]:[R[k]];for(let Z=0,J=Y.length;Z<J;Z++){let j=Y[Z],K=Array.isArray(j.value)?j.value:[j.value];for(let lt=0,gt=K.length;lt<gt;lt++){let Et=K[lt],yt=y(Et),It=D%H,Ot=It%yt.boundary,jt=It+Ot;D+=Ot,jt!==0&&H-jt<yt.storage&&(D+=H-jt),j.__data=new Float32Array(yt.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=D,D+=yt.storage}}}let C=D%H;return C>0&&(D+=H-C),A.__size=D,A.__cache={},this}function y(A){let R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=48,R.storage=48):A.isMatrix4?(R.boundary=64,R.storage=64):A.isTexture?_e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(R.boundary=16,R.storage=A.byteLength):_e("WebGLRenderer: Unsupported uniform value type.",A),R}function L(A){let R=A.target;R.removeEventListener("dispose",L);let D=l.indexOf(R.__bindingPointIndex);l.splice(D,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete o[R.id]}function V(){for(let A in r)n.deleteBuffer(r[A]);l=[],r={},o={}}return{bind:u,update:d,dispose:V}}function nb(){return Ti===null&&(Ti=new al(eb,16,16,xr,mi),Ti.name="DFG_LUT",Ti.minFilter=yn,Ti.magFilter=yn,Ti.wrapS=Mi,Ti.wrapT=Mi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var m_,g_,__,v_,y_,x_,M_,b_,S_,w_,E_,T_,A_,C_,P_,I_,R_,L_,N_,D_,O_,F_,U_,B_,k_,z_,V_,H_,G_,X_,W_,Y_,$_,q_,Z_,J_,j_,K_,Q_,tv,ev,nv,iv,rv,sv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,vv,yv,xv,Mv,bv,Sv,wv,Ev,Tv,Av,Cv,Pv,Iv,Rv,Lv,Nv,Dv,Ov,Fv,Uv,Bv,kv,zv,Vv,Hv,Gv,Xv,Wv,Yv,$v,qv,Zv,Jv,jv,Kv,Qv,ty,ey,ny,iy,ry,sy,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,_y,vy,yy,xy,My,by,Sy,wy,Ey,Ty,Ay,Cy,Py,Iy,Ry,Ly,Ny,Dy,Oy,Fy,Uy,By,ky,zy,Vy,Hy,Gy,Xy,Wy,Yy,$y,qy,Ie,ee,Ai,mc,Zy,mp,Bs,ex,nx,ix,Jo,$d,lu,cu,hu,uu,rx,kr,_c,vc,mx,gp,pu,_p,vp,yp,jd,Kd,Qd,tp,ep,mu,gu,_u,fu,ks,rM,sM,rp,cM,gc,mM,gM,vM,xM,bM,wM,TM,IM,yu,xu,BM,HM,GM,XM,WM,dp,jo,du,JM,jM,Mu,bu,KM,xp,eb,Ti,yc,bc=_n(()=>{au();au();m_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g_=`#ifdef USE_ALPHAHASH
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
#endif`,__=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M_=`#ifdef USE_AOMAP
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
#endif`,b_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S_=`#ifdef USE_BATCHING
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
#endif`,w_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C_=`#ifdef USE_IRIDESCENCE
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
#endif`,P_=`#ifdef USE_BUMPMAP
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
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,U_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,B_=`#define PI 3.141592653589793
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
} // validated`,k_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z_=`vec3 transformedNormal = objectNormal;
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
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
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
#endif`,J_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
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
#endif`,K_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nv=`#ifdef USE_GRADIENTMAP
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
}`,iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ov=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fv=`PhysicalMaterial material;
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
#endif`,dv=`uniform sampler2D dfgLUT;
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
}`,pv=`
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ev=`#if defined( USE_POINTS_UV )
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
#endif`,Tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`#ifdef USE_MORPHTARGETS
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
#endif`,Lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bv=`#ifdef USE_NORMALMAP
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
#endif`,kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$v=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ty=`float getShadowMask() {
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
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gy=`uniform sampler2D t2D;
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`#include <common>
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
}`,by=`#if DEPTH_PACKING == 3200
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
}`,Sy=`#define DISTANCE
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
}`,wy=`#define DISTANCE
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`uniform float scale;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Ry=`#define LAMBERT
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
}`,Ly=`#define LAMBERT
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
}`,Ny=`#define MATCAP
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
}`,Dy=`#define MATCAP
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
}`,Oy=`#define NORMAL
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
}`,Fy=`#define NORMAL
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
}`,Uy=`#define PHONG
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
}`,By=`#define PHONG
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
}`,ky=`#define STANDARD
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
}`,zy=`#define STANDARD
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
}`,Vy=`#define TOON
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
}`,Hy=`#define TOON
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
}`,Gy=`uniform float size;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,Yy=`uniform vec3 color;
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
}`,$y=`uniform float rotation;
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
}`,qy=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:m_,alphahash_pars_fragment:g_,alphamap_fragment:__,alphamap_pars_fragment:v_,alphatest_fragment:y_,alphatest_pars_fragment:x_,aomap_fragment:M_,aomap_pars_fragment:b_,batching_pars_vertex:S_,batching_vertex:w_,begin_vertex:E_,beginnormal_vertex:T_,bsdfs:A_,iridescence_fragment:C_,bumpmap_pars_fragment:P_,clipping_planes_fragment:I_,clipping_planes_pars_fragment:R_,clipping_planes_pars_vertex:L_,clipping_planes_vertex:N_,color_fragment:D_,color_pars_fragment:O_,color_pars_vertex:F_,color_vertex:U_,common:B_,cube_uv_reflection_fragment:k_,defaultnormal_vertex:z_,displacementmap_pars_vertex:V_,displacementmap_vertex:H_,emissivemap_fragment:G_,emissivemap_pars_fragment:X_,colorspace_fragment:W_,colorspace_pars_fragment:Y_,envmap_fragment:$_,envmap_common_pars_fragment:q_,envmap_pars_fragment:Z_,envmap_pars_vertex:J_,envmap_physical_pars_fragment:av,envmap_vertex:j_,fog_vertex:K_,fog_pars_vertex:Q_,fog_fragment:tv,fog_pars_fragment:ev,gradientmap_pars_fragment:nv,lightmap_pars_fragment:iv,lights_lambert_fragment:rv,lights_lambert_pars_fragment:sv,lights_pars_begin:ov,lights_toon_fragment:lv,lights_toon_pars_fragment:cv,lights_phong_fragment:hv,lights_phong_pars_fragment:uv,lights_physical_fragment:fv,lights_physical_pars_fragment:dv,lights_fragment_begin:pv,lights_fragment_maps:mv,lights_fragment_end:gv,lightprobes_pars_fragment:_v,logdepthbuf_fragment:vv,logdepthbuf_pars_fragment:yv,logdepthbuf_pars_vertex:xv,logdepthbuf_vertex:Mv,map_fragment:bv,map_pars_fragment:Sv,map_particle_fragment:wv,map_particle_pars_fragment:Ev,metalnessmap_fragment:Tv,metalnessmap_pars_fragment:Av,morphinstance_vertex:Cv,morphcolor_vertex:Pv,morphnormal_vertex:Iv,morphtarget_pars_vertex:Rv,morphtarget_vertex:Lv,normal_fragment_begin:Nv,normal_fragment_maps:Dv,normal_pars_fragment:Ov,normal_pars_vertex:Fv,normal_vertex:Uv,normalmap_pars_fragment:Bv,clearcoat_normal_fragment_begin:kv,clearcoat_normal_fragment_maps:zv,clearcoat_pars_fragment:Vv,iridescence_pars_fragment:Hv,opaque_fragment:Gv,packing:Xv,premultiplied_alpha_fragment:Wv,project_vertex:Yv,dithering_fragment:$v,dithering_pars_fragment:qv,roughnessmap_fragment:Zv,roughnessmap_pars_fragment:Jv,shadowmap_pars_fragment:jv,shadowmap_pars_vertex:Kv,shadowmap_vertex:Qv,shadowmask_pars_fragment:ty,skinbase_vertex:ey,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:ry,specularmap_fragment:sy,specularmap_pars_fragment:oy,tonemapping_fragment:ay,tonemapping_pars_fragment:ly,transmission_fragment:cy,transmission_pars_fragment:hy,uv_pars_fragment:uy,uv_pars_vertex:fy,uv_vertex:dy,worldpos_vertex:py,background_vert:my,background_frag:gy,backgroundCube_vert:_y,backgroundCube_frag:vy,cube_vert:yy,cube_frag:xy,depth_vert:My,depth_frag:by,distance_vert:Sy,distance_frag:wy,equirect_vert:Ey,equirect_frag:Ty,linedashed_vert:Ay,linedashed_frag:Cy,meshbasic_vert:Py,meshbasic_frag:Iy,meshlambert_vert:Ry,meshlambert_frag:Ly,meshmatcap_vert:Ny,meshmatcap_frag:Dy,meshnormal_vert:Oy,meshnormal_frag:Fy,meshphong_vert:Uy,meshphong_frag:By,meshphysical_vert:ky,meshphysical_frag:zy,meshtoon_vert:Vy,meshtoon_frag:Hy,points_vert:Gy,points_frag:Xy,shadow_vert:Wy,shadow_frag:Yy,sprite_vert:$y,sprite_frag:qy},ee={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ht},probesMax:{value:new ht},probesResolution:{value:new ht}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Ai={basic:{uniforms:Tn([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Tn([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Tn([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Tn([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Tn([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Tn([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Tn([ee.points,ee.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Tn([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Tn([ee.common,ee.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Tn([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Tn([ee.sprite,ee.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distance:{uniforms:Tn([ee.common,ee.displacementmap,{referencePosition:{value:new ht},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distance_vert,fragmentShader:Ie.distance_frag},shadow:{uniforms:Tn([ee.lights,ee.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Ai.physical={uniforms:Tn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};mc={r:0,b:0,g:0},Zy=new Xe,mp=new Ce;mp.set(-1,0,0,0,1,0,0,0,1);Bs=4,ex=6,nx=20,ix=256,Jo=new Is,$d=new Ee,lu=null,cu=0,hu=0,uu=!1,rx=new ht,kr=new ht,_c=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,o={}){let{size:l=256,position:h=rx}=o;lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,r,u,h),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lu,cu,hu),this._renderer.xr.enabled=uu,t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_r||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:mi,format:ni,colorSpace:vo,depthBuffer:!1},r=qd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qd(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sx(o)),this._blurMaterial=ax(o,t,e),this._ggxMaterial=ox(o,t,e)}return r}_compileMaterial(t){let e=new Be(new Ke,t);this._renderer.compile(e,Jo)}_sceneToCubeUV(t,e,i,r,o){let u=new wn(90,1,e,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor($d),v.toneMapping=fi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(r),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new cr,new Yn({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,b=E.material,y=!1,L=t.background;L?L.isColor&&(b.color.copy(L),t.background=null,y=!0):(b.color.copy($d),y=!0);for(let V=0;V<6;V++){let A=V%3;A===0?(u.up.set(0,d[V],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+g[V],o.y,o.z)):A===1?(u.up.set(0,0,d[V]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+g[V],o.z)):(u.up.set(0,d[V],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+g[V]));let R=this._cubeSize;Us(r,A*R,V>2?R:0,R,R),v.setRenderTarget(r),y&&v.render(E,u),v.render(t,u)}v.toneMapping=x,v.autoClear=_,t.background=L}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===_r||t.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zd());let o=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;let h=o.uniforms;h.envMap.value=t;let u=this._cubeSize;Us(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(l,Jo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,h=this._lodMeshes[i];h.material=l;let u=l.uniforms,d=i/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=d*1.25,x=v*_,{_lodMax:w}=this,E=this._sizeLods[i],b=3*E*(i>w-Bs?i-w+Bs:0),y=4*(this._cubeSize-E);u.envMap.value=t.texture,u.roughness.value=x,u.mipInt.value=w-e,Us(o,b,y,3*E,2*E),r.setRenderTarget(o),r.render(h,Jo),u.envMap.value=o.texture,u.roughness.value=0,u.mipInt.value=w-i,Us(t,b,y,3*E,2*E),r.setRenderTarget(t),r.render(h,Jo)}_blur(t,e,i,r){let o=this._pingPongRenderTarget,l=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,l),this._blurPass(o,t,i,i,l)}_blurPass(t,e,i,r,o){let l=this._renderer,h=this._blurMaterial,u=this._lodMeshes[r];u.material=h;let d=h.uniforms;d.envMap.value=t.texture,d.sigma.value=o,d.mipInt.value=this._lodMax-i;let g=this._sizeLods[r],v=3*g*(r>this._lodMax-Bs?r-this._lodMax+Bs:0),_=4*(this._cubeSize-g);Us(e,v,_,3*g,2*g),l.setRenderTarget(e),l.render(u,Jo)}};vc=class extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Co(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cr(5,5,5),o=new $n({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:Ei});o.uniforms.tEquirect.value=e;let l=new Be(r,o),h=e.minFilter;return e.minFilter===vr&&(e.minFilter=yn),new El(1,10,this).update(t,l),e.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,r);t.setRenderTarget(o)}};mx={[Bh]:"LINEAR_TONE_MAPPING",[kh]:"REINHARD_TONE_MAPPING",[zh]:"CINEON_TONE_MAPPING",[Vh]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Xh]:"NEUTRAL_TONE_MAPPING",[Hh]:"CUSTOM_TONE_MAPPING"};gp=new Rn,pu=new lr(1,1),_p=new bo,vp=new sl,yp=new Co,jd=[],Kd=[],Qd=new Float32Array(16),tp=new Float32Array(9),ep=new Float32Array(4);mu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Fx(e.type)}},gu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nM(e.type)}},_u=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let o=0,l=r.length;o!==l;++o){let h=r[o];h.setValue(t,e[h.id],i)}}},fu=/(\w+)(\])?(\[|\.)?/g;ks=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<i;++l){let h=t.getActiveUniform(e,l),u=t.getUniformLocation(e,h.name);iM(h,u,this)}let r=[],o=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(l):o.push(l);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,i,r){let o=this.map[e];o!==void 0&&o.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let o=0,l=e.length;o!==l;++o){let h=e[o],u=i[h.id];u.needsUpdate!==!1&&h.setValue(t,u.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,o=t.length;r!==o;++r){let l=t[r];l.id in e&&i.push(l)}return i}};rM=37297,sM=0;rp=new Ce;cM={[Bh]:"Linear",[kh]:"Reinhard",[zh]:"Cineon",[Vh]:"ACESFilmic",[Gh]:"AgX",[Xh]:"Neutral",[Hh]:"Custom"};gc=new ht;mM=/^[ \t]*#include +<([\w\d./]+)>/gm;gM=new Map;vM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;xM={[Vo]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};bM={[_r]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[Ho]:"ENVMAP_TYPE_CUBE_UV"};wM={[Fr]:"ENVMAP_MODE_REFRACTION"};TM={[Uh]:"ENVMAP_BLENDING_MULTIPLY",[Td]:"ENVMAP_BLENDING_MIX",[Ad]:"ENVMAP_BLENDING_ADD"};IM=0,yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new xu(t),e.set(t,i)),i}},xu=class{constructor(t){this.id=IM++,this.code=t,this.usedTimes=0}};BM=0;HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GM=`uniform sampler2D shadow_pass;
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
}`,XM=[new ht(1,0,0),new ht(-1,0,0),new ht(0,1,0),new ht(0,-1,0),new ht(0,0,1),new ht(0,0,-1)],WM=[new ht(0,-1,0),new ht(0,-1,0),new ht(0,0,1),new ht(0,0,-1),new ht(0,-1,0),new ht(0,-1,0)],dp=new Xe,jo=new ht,du=new ht;JM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jM=`
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

}`,Mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new $n({vertexShader:JM,fragmentShader:jM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new Ro(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bu=class extends hi{constructor(t,e){super();let i=this,r=null,o=1,l=null,h="local-floor",u=1,d=null,g=null,v=null,_=null,x=null,w=null,E=typeof XRWebGLBinding<"u",b=new Mu,y={},L=e.getContextAttributes(),V=null,A=null,R=[],D=[],H=new me,C=null,k=null,G=new wn;G.viewport=new Qe;let Y=new wn;Y.viewport=new Qe;let Z=[G,Y],J=new Tl,j=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Pt){let Ut=R[Pt];return Ut===void 0&&(Ut=new Es,R[Pt]=Ut),Ut.getTargetRaySpace()},this.getControllerGrip=function(Pt){let Ut=R[Pt];return Ut===void 0&&(Ut=new Es,R[Pt]=Ut),Ut.getGripSpace()},this.getHand=function(Pt){let Ut=R[Pt];return Ut===void 0&&(Ut=new Es,R[Pt]=Ut),Ut.getHandSpace()};function lt(Pt){let Ut=D.indexOf(Pt.inputSource);if(Ut===-1)return;let ie=R[Ut];ie!==void 0&&(ie.update(Pt.inputSource,Pt.frame,d||l),ie.dispatchEvent({type:Pt.type,data:Pt.inputSource}))}function gt(){r.removeEventListener("select",lt),r.removeEventListener("selectstart",lt),r.removeEventListener("selectend",lt),r.removeEventListener("squeeze",lt),r.removeEventListener("squeezestart",lt),r.removeEventListener("squeezeend",lt),r.removeEventListener("end",gt),r.removeEventListener("inputsourceschange",Et);for(let Pt=0;Pt<R.length;Pt++){let Ut=D[Pt];Ut!==null&&(D[Pt]=null,R[Pt].disconnect(Ut))}j=null,K=null,b.reset();for(let Pt in y)delete y[Pt];if(t.setRenderTarget(V),x=null,_=null,v=null,r=null,A=null,Ae.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(H.width,H.height,!1),k!==null){let Pt=k.camera;Pt.fov=k.fov,Pt.zoom=k.zoom,Pt.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Pt){o=Pt,i.isPresenting===!0&&_e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Pt){h=Pt,i.isPresenting===!0&&_e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(Pt){d=Pt},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(r,e)),v},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(Pt){if(r=Pt,r!==null){if(V=t.getRenderTarget(),r.addEventListener("select",lt),r.addEventListener("selectstart",lt),r.addEventListener("selectend",lt),r.addEventListener("squeeze",lt),r.addEventListener("squeezestart",lt),r.addEventListener("squeezeend",lt),r.addEventListener("end",gt),r.addEventListener("inputsourceschange",Et),L.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(H),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ue=null,Zt=null;L.depth&&(Zt=L.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ie=L.stencil?yr:bi,ue=L.stencil?Fs:di);let ut={colorFormat:e.RGBA8,depthFormat:Zt,scaleFactor:o};v=this.getBinding(),_=v.createProjectionLayer(ut),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),A=new Fn(_.textureWidth,_.textureHeight,{format:ni,type:Un,depthTexture:new lr(_.textureWidth,_.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let ie={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(r,e,ie),r.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new Fn(x.framebufferWidth,x.framebufferHeight,{format:ni,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(u),d=null,l=await r.requestReferenceSpace(h),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Et(Pt){for(let Ut=0;Ut<Pt.removed.length;Ut++){let ie=Pt.removed[Ut],ue=D.indexOf(ie);ue>=0&&(D[ue]=null,R[ue].disconnect(ie))}for(let Ut=0;Ut<Pt.added.length;Ut++){let ie=Pt.added[Ut],ue=D.indexOf(ie);if(ue===-1){for(let ut=0;ut<R.length;ut++)if(ut>=D.length){D.push(ie),ue=ut;break}else if(D[ut]===null){D[ut]=ie,ue=ut;break}if(ue===-1)break}let Zt=R[ue];Zt&&Zt.connect(ie)}}let yt=new ht,It=new ht;function Ot(Pt,Ut,ie){yt.setFromMatrixPosition(Ut.matrixWorld),It.setFromMatrixPosition(ie.matrixWorld);let ue=yt.distanceTo(It),Zt=Ut.projectionMatrix.elements,ut=ie.projectionMatrix.elements,Ve=Zt[14]/(Zt[10]-1),at=Zt[14]/(Zt[10]+1),Nt=(Zt[9]+1)/Zt[5],zt=(Zt[9]-1)/Zt[5],Bt=(Zt[8]-1)/Zt[0],Vt=(ut[8]+1)/ut[0],re=Ve*Bt,he=Ve*Vt,Yt=ue/(-Bt+Vt),ae=Yt*-Bt;if(Ut.matrixWorld.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.translateX(ae),Pt.translateZ(Yt),Pt.matrixWorld.compose(Pt.position,Pt.quaternion,Pt.scale),Pt.matrixWorldInverse.copy(Pt.matrixWorld).invert(),Zt[10]===-1)Pt.projectionMatrix.copy(Ut.projectionMatrix),Pt.projectionMatrixInverse.copy(Ut.projectionMatrixInverse);else{let it=Ve+Yt,be=at+Yt,oe=re-ae,X=he+(ue-ae),P=Nt*at/be*it,nt=zt*at/be*it;Pt.projectionMatrix.makePerspective(oe,X,P,nt,it,be),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert()}}function jt(Pt,Ut){Ut===null?Pt.matrixWorld.copy(Pt.matrix):Pt.matrixWorld.multiplyMatrices(Ut.matrixWorld,Pt.matrix),Pt.matrixWorldInverse.copy(Pt.matrixWorld).invert()}this.updateCamera=function(Pt){if(r===null)return;let Ut=Pt.near,ie=Pt.far;b.texture!==null&&(b.depthNear>0&&(Ut=b.depthNear),b.depthFar>0&&(ie=b.depthFar)),J.near=Y.near=G.near=Ut,J.far=Y.far=G.far=ie,(j!==J.near||K!==J.far)&&(r.updateRenderState({depthNear:J.near,depthFar:J.far}),j=J.near,K=J.far),J.layers.mask=Pt.layers.mask|6,G.layers.mask=J.layers.mask&-5,Y.layers.mask=J.layers.mask&-3;let ue=Pt.parent,Zt=J.cameras;jt(J,ue);for(let ut=0;ut<Zt.length;ut++)jt(Zt[ut],ue);Zt.length===2?Ot(J,G,Y):J.projectionMatrix.copy(G.projectionMatrix),k===null&&Pt.isPerspectiveCamera&&(k={camera:Pt,fov:Pt.fov,zoom:Pt.zoom}),ne(Pt,J,ue)};function ne(Pt,Ut,ie){ie===null?Pt.matrix.copy(Ut.matrixWorld):(Pt.matrix.copy(ie.matrixWorld),Pt.matrix.invert(),Pt.matrix.multiply(Ut.matrixWorld)),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.updateMatrixWorld(!0),Pt.projectionMatrix.copy(Ut.projectionMatrix),Pt.projectionMatrixInverse.copy(Ut.projectionMatrixInverse),Pt.isPerspectiveCamera&&(Pt.fov=bs*2*Math.atan(1/Pt.projectionMatrix.elements[5]),Pt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&x===null))return u},this.setFoveation=function(Pt){u=Pt,_!==null&&(_.fixedFoveation=Pt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Pt)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(J)},this.getCameraTexture=function(Pt){return y[Pt]};let Te=null;function Me(Pt,Ut){if(g=Ut.getViewerPose(d||l),w=Ut,g!==null){let ie=g.views;x!==null&&(t.setRenderTargetFramebuffer(A,x.framebuffer),t.setRenderTarget(A));let ue=!1;ie.length!==J.cameras.length&&(J.cameras.length=0,ue=!0);for(let at=0;at<ie.length;at++){let Nt=ie[at],zt=null;if(x!==null)zt=x.getViewport(Nt);else{let Vt=v.getViewSubImage(_,Nt);zt=Vt.viewport,at===0&&(t.setRenderTargetTextures(A,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(A))}let Bt=Z[at];Bt===void 0&&(Bt=new wn,Bt.layers.enable(at),Bt.viewport=new Qe,Z[at]=Bt),Bt.matrix.fromArray(Nt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Nt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(zt.x,zt.y,zt.width,zt.height),at===0&&(J.matrix.copy(Bt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ue===!0&&J.cameras.push(Bt)}let Zt=r.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){v=i.getBinding();let at=v.getDepthInformation(ie[0]);at&&at.isValid&&at.texture&&b.init(at,r.renderState)}if(Zt&&Zt.includes("camera-access")&&E){t.state.unbindTexture(),v=i.getBinding();for(let at=0;at<ie.length;at++){let Nt=ie[at].camera;if(Nt){let zt=y[Nt];zt||(zt=new Io,y[Nt]=zt);let Bt=v.getCameraImage(Nt);zt.sourceTexture=Bt}}}}for(let ie=0;ie<R.length;ie++){let ue=D[ie],Zt=R[ie];ue!==null&&Zt!==void 0&&Zt.update(ue,Ut,d||l)}Te&&Te(Pt,Ut),Ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ut}),w=null}let Ae=new pp;Ae.setAnimationLoop(Me),this.setAnimationLoop=function(Pt){Te=Pt},this.dispose=function(){}}},KM=new Xe,xp=new Ce;xp.set(-1,0,0,0,1,0,0,0,1);eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;yc=class{constructor(t={}){let{canvas:e=Bd(),context:i=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:h=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=Un}=t;this.isWebGLRenderer=!0;let w;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=i.getContextAttributes().alpha}else w=l;let E=x,b=new Set([Ol,Dl,Nl]),y=new Set([Un,di,Os,Fs,Rl,Ll]),L=new Uint32Array(4),V=new Int32Array(4),A=new ht,R=null,D=null,H=[],C=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let G=this,Y=!1,Z=null,J=null,j=null,K=null;this._outputColorSpace=In;let lt=0,gt=0,Et=null,yt=-1,It=null,Ot=new Qe,jt=new Qe,ne=null,Te=new Ee(0),Me=0,Ae=e.width,Pt=e.height,Ut=1,ie=null,ue=null,Zt=new Qe(0,0,Ae,Pt),ut=new Qe(0,0,Ae,Pt),Ve=!1,at=new As,Nt=!1,zt=!1,Bt=new Xe,Vt=new ht,re=new Qe,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function ae(){return Et===null?Ut:1}let it=i;function be(U,st){return e.getContext(U,st)}let oe,X,P,nt,ct,St,Tt,Ft,mt,Ct,Gt,qt,$t,O,$,q,rt,z,wt,ft,Rt,pt,Mt;try{let U={alpha:!0,depth:r,stencil:o,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Cn,!1),it===null){let st="webgl2";if(it=be(st,U),it===null)throw be(st)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}bt()}catch(U){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),ye("WebGLRenderer: "+U.message),U}function bt(){oe=new cx(it),oe.init(),Rt=new ZM(it,oe),X=new Qy(it,oe,t,Rt),P=new $M(it,oe),X.reversedDepthBuffer&&_&&P.buffers.depth.setReversed(!0),J=it.createFramebuffer(),j=it.createFramebuffer(),K=it.createFramebuffer(),nt=new fx(it),ct=new NM,St=new qM(it,oe,P,ct,X,Rt,nt),Tt=new lx(G),Ft=new p_(it),pt=new jy(it,Ft),mt=new hx(it,Ft,nt,pt),Ct=new px(it,mt,Ft,pt,nt),z=new dx(it,X,St),$=new tx(ct),Gt=new LM(G,Tt,oe,X,pt,$),qt=new QM(G,ct),$t=new OM,O=new VM(oe),rt=new Jy(G,Tt,P,Ct,w,u),q=new YM(G,Ct,X),Mt=new tb(it,nt,X,P),wt=new Ky(it,oe,nt),ft=new ux(it,oe,nt),nt.programs=Gt.programs,G.capabilities=X,G.extensions=oe,G.properties=ct,G.renderLists=$t,G.shadowMap=q,G.state=P,G.info=nt}E!==Un&&(k=new gx(E,e.width,e.height,h,r,o));let Wt=new bu(G,it);this.xr=Wt,this.getContext=function(){return it},this.getContextAttributes=function(){return it.getContextAttributes()},this.forceContextLoss=function(){let U=oe.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=oe.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(U){U!==void 0&&(Ut=U,this.setSize(Ae,Pt,!1))},this.getSize=function(U){return U.set(Ae,Pt)},this.setSize=function(U,st,xt=!0){if(Wt.isPresenting){_e("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=U,Pt=st,e.width=Math.floor(U*Ut),e.height=Math.floor(st*Ut),xt===!0&&(e.style.width=U+"px",e.style.height=st+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,U,st)},this.getDrawingBufferSize=function(U){return U.set(Ae*Ut,Pt*Ut).floor()},this.setDrawingBufferSize=function(U,st,xt){Ae=U,Pt=st,Ut=xt,e.width=Math.floor(U*xt),e.height=Math.floor(st*xt),this.setViewport(0,0,U,st)},this.setEffects=function(U){if(E===Un){ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let st=0;st<U.length;st++)if(U[st].isOutputPass===!0){_e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(Ot)},this.getViewport=function(U){return U.copy(Zt)},this.setViewport=function(U,st,xt,_t){U.isVector4?Zt.set(U.x,U.y,U.z,U.w):Zt.set(U,st,xt,_t),P.viewport(Ot.copy(Zt).multiplyScalar(Ut).round())},this.getScissor=function(U){return U.copy(ut)},this.setScissor=function(U,st,xt,_t){U.isVector4?ut.set(U.x,U.y,U.z,U.w):ut.set(U,st,xt,_t),P.scissor(jt.copy(ut).multiplyScalar(Ut).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(U){P.setScissorTest(Ve=U)},this.setOpaqueSort=function(U){ie=U},this.setTransparentSort=function(U){ue=U},this.getClearColor=function(U){return U.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(U=!0,st=!0,xt=!0){let _t=0;if(U){let vt=!1;if(Et!==null){let Qt=Et.texture.format;vt=b.has(Qt)}if(vt){let Qt=Et.texture.type,Xt=y.has(Qt),Kt=rt.getClearColor(),le=rt.getClearAlpha(),fe=Kt.r,Jt=Kt.g,ve=Kt.b;Xt?(L[0]=fe,L[1]=Jt,L[2]=ve,L[3]=le,it.clearBufferuiv(it.COLOR,0,L)):(V[0]=fe,V[1]=Jt,V[2]=ve,V[3]=le,it.clearBufferiv(it.COLOR,0,V))}else _t|=it.COLOR_BUFFER_BIT}st&&(_t|=it.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),xt&&(_t|=it.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_t!==0&&it.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),Z=U},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),rt.dispose(),$t.dispose(),O.dispose(),ct.dispose(),Tt.dispose(),Ct.dispose(),pt.dispose(),Mt.dispose(),Gt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",zr),Wt.removeEventListener("sessionend",Vr),Dn.stop()};function Le(U){U.preventDefault(),Mo("WebGLRenderer: Context Lost."),Y=!0}function xe(){Mo("WebGLRenderer: Context Restored."),Y=!1;let U=nt.autoReset,st=q.enabled,xt=q.autoUpdate,_t=q.needsUpdate,vt=q.type;bt(),nt.autoReset=U,q.enabled=st,q.autoUpdate=xt,q.needsUpdate=_t,q.type=vt}function Cn(U){ye("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Nn(U){let st=U.target;st.removeEventListener("dispose",Nn),Hs(st)}function Hs(U){Mr(U),ct.remove(U)}function Mr(U){let st=ct.get(U).programs;st!==void 0&&(st.forEach(function(xt){Gt.releaseProgram(xt)}),U.isShaderMaterial&&Gt.releaseShaderCache(U))}this.renderBufferDirect=function(U,st,xt,_t,vt,Qt){st===null&&(st=he);let Xt=vt.isMesh&&vt.matrixWorld.determinantAffine()<0,Kt=_i(U,st,xt,_t,vt);P.setMaterial(_t,Xt);let le=xt.index,fe=1;if(_t.wireframe===!0){if(le=mt.getWireframeAttribute(xt),le===void 0)return;fe=2}let Jt=xt.drawRange,ve=xt.attributes.position,se=Jt.start*fe,Ue=(Jt.start+Jt.count)*fe;Qt!==null&&(se=Math.max(se,Qt.start*fe),Ue=Math.min(Ue,(Qt.start+Qt.count)*fe)),le!==null?(se=Math.max(se,0),Ue=Math.min(Ue,le.count)):ve!=null&&(se=Math.max(se,0),Ue=Math.min(Ue,ve.count));let Ze=Ue-se;if(Ze<0||Ze===1/0)return;pt.setup(vt,_t,Kt,xt,le);let De,s=wt;if(le!==null&&(De=Ft.get(le),s=ft,s.setIndex(De)),vt.isMesh)_t.wireframe===!0?(P.setLineWidth(_t.wireframeLinewidth*ae()),s.setMode(it.LINES)):s.setMode(it.TRIANGLES);else if(vt.isLine){let a=_t.linewidth;a===void 0&&(a=1),P.setLineWidth(a*ae()),vt.isLineSegments?s.setMode(it.LINES):vt.isLineLoop?s.setMode(it.LINE_LOOP):s.setMode(it.LINE_STRIP)}else vt.isPoints?s.setMode(it.POINTS):vt.isSprite&&s.setMode(it.TRIANGLES);if(vt.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))s.renderMultiDraw(vt._multiDrawStarts,vt._multiDrawCounts,vt._multiDrawCount);else{let a=vt._multiDrawStarts,c=vt._multiDrawCounts,p=vt._multiDrawCount,M=le?Ft.get(le).bytesPerElement:1,I=ct.get(_t).currentProgram.getUniforms();for(let B=0;B<p;B++)I.setValue(it,"_gl_DrawID",B),s.render(a[B]/M,c[B])}else if(vt.isInstancedMesh)s.renderInstances(se,Ze,vt.count);else if(xt.isInstancedBufferGeometry){let a=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,c=Math.min(xt.instanceCount,a);s.renderInstances(se,Ze,c)}else s.render(se,Ze)};function N(U,st,xt,_t){Z!==null&&U.isNodeMaterial&&Z.setObject(_t,U),Nt===!0&&$.setState(U,xt,!1),U.transparent===!0&&U.side===En&&U.forceSinglePass===!1?(U.side=Ln,U.needsUpdate=!0,Zi(U,st,_t),U.side=gr,U.needsUpdate=!0,Zi(U,st,_t),U.side=En):Zi(U,st,_t)}this.compile=function(U,st,xt=null){xt===null&&(xt=U),Z!==null&&Z.renderStart(U,st,xt),D=O.get(xt),D.init(st),C.push(D),xt.traverseVisible(function(vt){vt.isLight&&vt.layers.test(st.layers)&&(D.pushLight(vt),vt.castShadow&&D.pushShadow(vt))}),U!==xt&&U.traverseVisible(function(vt){vt.isLight&&vt.layers.test(st.layers)&&(D.pushLight(vt),vt.castShadow&&D.pushShadow(vt))}),D.setupLights(),Z!==null&&Z.updateLights(D.state.lightsArray),zt=this.localClippingEnabled,Nt=$.init(this.clippingPlanes,zt),Nt===!0&&$.setGlobalState(this.clippingPlanes,st),Z!==null&&q.render(D.state.shadowsArray,xt,st);let _t=new Set;return U.traverse(function(vt){if(!(vt.isMesh||vt.isPoints||vt.isLine||vt.isSprite))return;let Qt=vt.material;if(Qt)if(Array.isArray(Qt))for(let Xt=0;Xt<Qt.length;Xt++){let Kt=Qt[Xt];N(Kt,xt,st,vt),_t.add(Kt)}else N(Qt,xt,st,vt),_t.add(Qt)}),D=C.pop(),Z!==null&&Z.renderEnd(),_t},this.compileAsync=function(U,st,xt=null){let _t=this.compile(U,st,xt);return new Promise(vt=>{function Qt(){if(_t.forEach(function(Xt){let le=ct.get(Xt).currentProgram;(le===void 0||le.isReady())&&_t.delete(Xt)}),_t.size===0){vt(U);return}setTimeout(Qt,10)}oe.get("KHR_parallel_shader_compile")!==null?Qt():setTimeout(Qt,10)})};let Ci=null;function Fe(U){Ci&&Ci(U)}function zr(){Dn.stop()}function Vr(){Dn.start()}let Dn=new pp;Dn.setAnimationLoop(Fe),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(U){Ci=U,Wt.setAnimationLoop(U),U===null?Dn.stop():Dn.start()},Wt.addEventListener("sessionstart",zr),Wt.addEventListener("sessionend",Vr),this.render=function(U,st){if(st!==void 0&&st.isCamera!==!0){ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;Z!==null&&Z.renderStart(U,st);let xt=Wt.enabled===!0&&Wt.isPresenting===!0,_t=k!==null&&(Et===null||xt)&&k.begin(G,Et);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(st),st=Wt.getCamera()),U.isScene===!0&&U.onBeforeRender(G,U,st,Et),D=O.get(U,C.length),D.init(st),D.state.textureUnits=St.getTextureUnits(),C.push(D),Bt.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),at.setFromProjectionMatrix(Bt,ci,st.reversedDepth),zt=this.localClippingEnabled,Nt=$.init(this.clippingPlanes,zt),R=$t.get(U,H.length),R.init(),H.push(R),Wt.enabled===!0&&Wt.isPresenting===!0){let Xt=G.xr.getDepthSensingMesh();Xt!==null&&Jn(Xt,st,-1/0,G.sortObjects)}Jn(U,st,0,G.sortObjects),R.finish(),Z!==null&&Z.updateLights(D.state.lightsArray),G.sortObjects===!0&&R.sort(ie,ue),Yt=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,Yt&&rt.addToRenderList(R,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Nt===!0&&$.beginShadows();let vt=D.state.shadowsArray;if(q.render(vt,U,st),Nt===!0&&$.endShadows(),(_t&&k.hasRenderPass())===!1){let Xt=R.opaque,Kt=R.transmissive;if(D.setupLights(),st.isArrayCamera){let le=st.cameras;if(Kt.length>0)for(let fe=0,Jt=le.length;fe<Jt;fe++){let ve=le[fe];gi(Xt,Kt,U,ve)}Yt&&rt.render(U);for(let fe=0,Jt=le.length;fe<Jt;fe++){let ve=le[fe];Hr(R,U,ve,ve.viewport)}}else Kt.length>0&&gi(Xt,Kt,U,st),Yt&&rt.render(U),Hr(R,U,st)}Et!==null&&gt===0&&(St.updateMultisampleRenderTarget(Et),St.updateRenderTargetMipmap(Et)),_t&&k.end(G),U.isScene===!0&&U.onAfterRender(G,U,st),pt.resetDefaultState(),yt=-1,It=null,C.pop(),C.length>0?(D=C[C.length-1],St.setTextureUnits(D.state.textureUnits),Nt===!0&&$.setGlobalState(G.clippingPlanes,D.state.camera)):D=null,H.pop(),H.length>0?R=H[H.length-1]:R=null,Z!==null&&Z.renderEnd()};function Jn(U,st,xt,_t){if(U.visible===!1)return;if(U.layers.test(st.layers)){if(U.isGroup)xt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(st);else if(U.isLightProbeGrid)D.pushLightProbeGrid(U);else if(U.isLight)D.pushLight(U),U.castShadow&&D.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(at)){_t&&re.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Bt);let Xt=Ct.update(U),Kt=U.material;Kt.visible&&R.push(U,Xt,Kt,xt,re.z,null,st)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(at))){let Xt=Ct.update(U),Kt=U.material;if(_t&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),re.copy(U.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),re.copy(Xt.boundingSphere.center)),re.applyMatrix4(U.matrixWorld).applyMatrix4(Bt)),Array.isArray(Kt)){let le=Xt.groups;for(let fe=0,Jt=le.length;fe<Jt;fe++){let ve=le[fe],se=Kt[ve.materialIndex];se&&se.visible&&R.push(U,Xt,se,xt,re.z,ve,st)}}else Kt.visible&&R.push(U,Xt,Kt,xt,re.z,null,st)}}let Qt=U.children;for(let Xt=0,Kt=Qt.length;Xt<Kt;Xt++)Jn(Qt[Xt],st,xt,_t)}function Hr(U,st,xt,_t){let{opaque:vt,transmissive:Qt,transparent:Xt}=U;D.setupLightsView(xt),Nt===!0&&$.setGlobalState(G.clippingPlanes,xt),_t&&P.viewport(Ot.copy(_t)),vt.length>0&&Pi(vt,st,xt),Qt.length>0&&Pi(Qt,st,xt),Xt.length>0&&Pi(Xt,st,xt),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function gi(U,st,xt,_t){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[_t.id]===void 0){let se=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[_t.id]=new Fn(1,1,{generateMipmaps:!0,type:se?mi:Un,minFilter:vr,samples:Math.max(4,X.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Oe.workingColorSpace})}let Qt=D.state.transmissionRenderTarget[_t.id],Xt=_t.viewport||Ot;Qt.setSize(Xt.z*G.transmissionResolutionScale,Xt.w*G.transmissionResolutionScale);let Kt=G.getRenderTarget(),le=G.getActiveCubeFace(),fe=G.getActiveMipmapLevel();G.setRenderTarget(Qt),G.getClearColor(Te),Me=G.getClearAlpha(),Me<1&&G.setClearColor(16777215,.5),G.clear(),Yt&&rt.render(xt);let Jt=G.toneMapping;G.toneMapping=fi;let ve=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),D.setupLightsView(_t),Nt===!0&&$.setGlobalState(G.clippingPlanes,_t),Pi(U,xt,_t),St.updateMultisampleRenderTarget(Qt),St.updateRenderTargetMipmap(Qt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Ue=0,Ze=st.length;Ue<Ze;Ue++){let De=st[Ue],{object:s,geometry:a,material:c,group:p}=De;if(c.side===En&&s.layers.test(_t.layers)){let M=c.side;c.side=Ln,c.needsUpdate=!0,Gr(s,xt,_t,a,c,p),c.side=M,c.needsUpdate=!0,se=!0}}se===!0&&(St.updateMultisampleRenderTarget(Qt),St.updateRenderTargetMipmap(Qt))}G.setRenderTarget(Kt,le,fe),G.setClearColor(Te,Me),ve!==void 0&&(_t.viewport=ve),G.toneMapping=Jt}function Pi(U,st,xt){let _t=st.isScene===!0?st.overrideMaterial:null;for(let vt=0,Qt=U.length;vt<Qt;vt++){let Xt=U[vt],{object:Kt,geometry:le,group:fe}=Xt,Jt=Xt.material;Jt.allowOverride===!0&&_t!==null&&(Jt=_t),Kt.layers.test(xt.layers)&&Gr(Kt,st,xt,le,Jt,fe)}}function Gr(U,st,xt,_t,vt,Qt){Z!==null&&vt.isNodeMaterial&&Z.setObject(U,vt),U.onBeforeRender(G,st,xt,_t,vt,Qt),U.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),vt.onBeforeRender(G,st,xt,_t,U,Qt),vt.transparent===!0&&vt.side===En&&vt.forceSinglePass===!1?(vt.side=Ln,vt.needsUpdate=!0,G.renderBufferDirect(xt,st,_t,vt,U,Qt),vt.side=gr,vt.needsUpdate=!0,G.renderBufferDirect(xt,st,_t,vt,U,Qt),vt.side=En):G.renderBufferDirect(xt,st,_t,vt,U,Qt),U.onAfterRender(G,st,xt,_t,vt,Qt)}function Zi(U,st,xt){st.isScene!==!0&&(st=he);let _t=ct.get(U),vt=D.state.lights,Qt=D.state.shadowsArray,Xt=vt.state.version,Kt=Gt.getParameters(U,vt.state,Qt,st,xt,D.state.lightProbeGridArray),le=Gt.getProgramCacheKey(Kt),fe=_t.programs;_t.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?st.environment:null,_t.fog=st.fog;let Jt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;_t.envMap=Tt.get(U.envMap||_t.environment,Jt),_t.envMapRotation=_t.environment!==null&&U.envMap===null?st.environmentRotation:U.envMapRotation,fe===void 0&&(U.addEventListener("dispose",Nn),fe=new Map,_t.programs=fe);let ve=fe.get(le);if(ve!==void 0){if(_t.currentProgram===ve&&_t.lightsStateVersion===Xt)return Wr(U,Kt),ve}else Kt.uniforms=Gt.getUniforms(U),Z!==null&&U.isNodeMaterial&&Z.build(U,xt,Kt),U.onBeforeCompile(Kt,G),ve=Gt.acquireProgram(Kt,le),fe.set(le,ve),_t.uniforms=Kt.uniforms;let se=_t.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(se.clippingPlanes=$.uniform),Wr(U,Kt),_t.needsLights=Ws(U),_t.lightsStateVersion=Xt,_t.needsLights&&(se.ambientLightColor.value=vt.state.ambient,se.lightProbe.value=vt.state.probe,se.sunLights.value=vt.state.sun,se.sunLightShadows.value=vt.state.sunShadow,se.directionalLights.value=vt.state.directional,se.directionalLightShadows.value=vt.state.directionalShadow,se.spotLights.value=vt.state.spot,se.spotLightShadows.value=vt.state.spotShadow,se.rectAreaLights.value=vt.state.rectArea,se.ltc_1.value=vt.state.rectAreaLTC1,se.ltc_2.value=vt.state.rectAreaLTC2,se.pointLights.value=vt.state.point,se.pointLightShadows.value=vt.state.pointShadow,se.hemisphereLights.value=vt.state.hemi,se.sunShadowMatrix.value=vt.state.sunShadowMatrix,se.sunShadowCascade.value=vt.state.sunShadowCascade,se.directionalShadowMatrix.value=vt.state.directionalShadowMatrix,se.spotLightMatrix.value=vt.state.spotLightMatrix,se.spotLightMap.value=vt.state.spotLightMap,se.pointShadowMatrix.value=vt.state.pointShadowMatrix),_t.lightProbeGrid=D.state.lightProbeGridArray.length>0,_t.currentProgram=ve,_t.uniformsList=null,ve}function Xr(U){if(U.uniformsList===null){let st=U.currentProgram.getUniforms();U.uniformsList=ks.seqWithValue(st.seq,U.uniforms)}return U.uniformsList}function Wr(U,st){let xt=ct.get(U);xt.outputColorSpace=st.outputColorSpace,xt.batching=st.batching,xt.batchingColor=st.batchingColor,xt.instancing=st.instancing,xt.instancingColor=st.instancingColor,xt.instancingMorph=st.instancingMorph,xt.skinning=st.skinning,xt.morphTargets=st.morphTargets,xt.morphNormals=st.morphNormals,xt.morphColors=st.morphColors,xt.morphTargetsCount=st.morphTargetsCount,xt.numClippingPlanes=st.numClippingPlanes,xt.numIntersection=st.numClipIntersection,xt.vertexAlphas=st.vertexAlphas,xt.vertexTangents=st.vertexTangents,xt.toneMapping=st.toneMapping}function Gs(U,st){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;A.setFromMatrixPosition(st.matrixWorld);for(let xt=0,_t=U.length;xt<_t;xt++){let vt=U[xt];if(vt.texture!==null&&vt.boundingBox.containsPoint(A))return vt}return null}function _i(U,st,xt,_t,vt){st.isScene!==!0&&(st=he),St.resetTextureUnits();let Qt=st.fog,Xt=_t.isMeshStandardMaterial||_t.isMeshLambertMaterial||_t.isMeshPhongMaterial?st.environment:null,Kt=Et===null?G.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Oe.workingColorSpace,le=_t.isMeshStandardMaterial||_t.isMeshLambertMaterial&&!_t.envMap||_t.isMeshPhongMaterial&&!_t.envMap,fe=Tt.get(_t.envMap||Xt,le),Jt=_t.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,ve=!!xt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),se=!!xt.morphAttributes.position,Ue=!!xt.morphAttributes.normal,Ze=!!xt.morphAttributes.color,De=fi;_t.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(De=G.toneMapping);let s=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,a=s!==void 0?s.length:0,c=ct.get(_t),p=D.state.lights;if(Nt===!0&&(zt===!0||U!==It)){let kt=U===It&&_t.id===yt;$.setState(_t,U,kt)}let M=!1;_t.version===c.__version?(c.needsLights&&c.lightsStateVersion!==p.state.version||c.outputColorSpace!==Kt||vt.isBatchedMesh&&c.batching===!1||!vt.isBatchedMesh&&c.batching===!0||vt.isBatchedMesh&&c.batchingColor===!0&&vt._colorsTexture===null||vt.isBatchedMesh&&c.batchingColor===!1&&vt._colorsTexture!==null||vt.isInstancedMesh&&c.instancing===!1||!vt.isInstancedMesh&&c.instancing===!0||vt.isSkinnedMesh&&c.skinning===!1||!vt.isSkinnedMesh&&c.skinning===!0||vt.isInstancedMesh&&c.instancingColor===!0&&vt.instanceColor===null||vt.isInstancedMesh&&c.instancingColor===!1&&vt.instanceColor!==null||vt.isInstancedMesh&&c.instancingMorph===!0&&vt.morphTexture===null||vt.isInstancedMesh&&c.instancingMorph===!1&&vt.morphTexture!==null||c.envMap!==fe||_t.fog===!0&&c.fog!==Qt||c.numClippingPlanes!==void 0&&(c.numClippingPlanes!==$.numPlanes||c.numIntersection!==$.numIntersection)||c.vertexAlphas!==Jt||c.vertexTangents!==ve||c.morphTargets!==se||c.morphNormals!==Ue||c.morphColors!==Ze||c.toneMapping!==De||c.morphTargetsCount!==a||!!c.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(M=!0):(M=!0,c.__version=_t.version);let I=c.currentProgram;M===!0&&(I=Zi(_t,st,vt),Z&&_t.isNodeMaterial&&Z.onUpdateProgram(_t,I,c));let B=!1,Q=!1,et=!1,dt=I.getUniforms(),Dt=c.uniforms;if(P.useProgram(I.program)&&(B=!0,Q=!0,et=!0),_t.id!==yt&&(yt=_t.id,Q=!0),c.needsLights){let kt=Gs(D.state.lightProbeGridArray,vt);c.lightProbeGrid!==kt&&(c.lightProbeGrid=kt,Q=!0)}if(B||It!==U){P.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),dt.setValue(it,"projectionMatrix",U.projectionMatrix),dt.setValue(it,"viewMatrix",U.matrixWorldInverse);let de=dt.map.cameraPosition;de!==void 0&&de.setValue(it,Vt.setFromMatrixPosition(U.matrixWorld)),X.logarithmicDepthBuffer&&dt.setValue(it,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&dt.setValue(it,"isOrthographic",U.isOrthographicCamera===!0),It!==U&&(It=U,Q=!0,et=!0)}if(c.needsLights&&(p.state.sunShadowMap.length>0&&dt.setValue(it,"sunShadowMap",p.state.sunShadowMap,St),p.state.directionalShadowMap.length>0&&dt.setValue(it,"directionalShadowMap",p.state.directionalShadowMap,St),p.state.spotShadowMap.length>0&&dt.setValue(it,"spotShadowMap",p.state.spotShadowMap,St),p.state.pointShadowMap.length>0&&dt.setValue(it,"pointShadowMap",p.state.pointShadowMap,St)),vt.isSkinnedMesh){dt.setOptional(it,vt,"bindMatrix"),dt.setOptional(it,vt,"bindMatrixInverse");let kt=vt.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),dt.setValue(it,"boneTexture",kt.boneTexture,St))}vt.isBatchedMesh&&(dt.setOptional(it,vt,"batchingTexture"),dt.setValue(it,"batchingTexture",vt._matricesTexture,St),dt.setOptional(it,vt,"batchingIdTexture"),dt.setValue(it,"batchingIdTexture",vt._indirectTexture,St),dt.setOptional(it,vt,"batchingColorTexture"),vt._colorsTexture!==null&&dt.setValue(it,"batchingColorTexture",vt._colorsTexture,St));let Lt=xt.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&z.update(vt,xt,I),(Q||c.receiveShadow!==vt.receiveShadow)&&(c.receiveShadow=vt.receiveShadow,dt.setValue(it,"receiveShadow",vt.receiveShadow)),(_t.isMeshStandardMaterial||_t.isMeshLambertMaterial||_t.isMeshPhongMaterial)&&_t.envMap===null&&st.environment!==null&&(Dt.envMapIntensity.value=st.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=nb()),Q){if(dt.setValue(it,"toneMappingExposure",G.toneMappingExposure),c.needsLights&&Xs(Dt,et),Qt&&_t.fog===!0&&qt.refreshFogUniforms(Dt,Qt),qt.refreshMaterialUniforms(Dt,_t,Ut,Pt,D.state.transmissionRenderTarget[U.id]),c.needsLights&&c.lightProbeGrid){let kt=c.lightProbeGrid;Dt.probesSH.value=kt.texture,Dt.probesMin.value.copy(kt.boundingBox.min),Dt.probesMax.value.copy(kt.boundingBox.max),Dt.probesResolution.value.copy(kt.resolution)}ks.upload(it,Xr(c),Dt,St)}if(_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(ks.upload(it,Xr(c),Dt,St),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&dt.setValue(it,"center",vt.center),dt.setValue(it,"modelViewMatrix",vt.modelViewMatrix),dt.setValue(it,"normalMatrix",vt.normalMatrix),dt.setValue(it,"modelMatrix",vt.matrixWorld),_t.uniformsGroups!==void 0){let kt=_t.uniformsGroups;for(let de=0,Se=kt.length;de<Se;de++){let Pe=kt[de];Mt.update(Pe,I),Mt.bind(Pe,I)}}return I}function Xs(U,st){U.ambientLightColor.needsUpdate=st,U.lightProbe.needsUpdate=st,U.sunLights.needsUpdate=st,U.sunLightShadows.needsUpdate=st,U.directionalLights.needsUpdate=st,U.directionalLightShadows.needsUpdate=st,U.pointLights.needsUpdate=st,U.pointLightShadows.needsUpdate=st,U.spotLights.needsUpdate=st,U.spotLightShadows.needsUpdate=st,U.rectAreaLights.needsUpdate=st,U.hemisphereLights.needsUpdate=st}function Ws(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return gt},this.getRenderTarget=function(){return Et},this.setRenderTargetTextures=function(U,st,xt){let _t=ct.get(U);_t.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,_t.__autoAllocateDepthBuffer===!1&&(_t.__useRenderToTexture=!1),ct.get(U.texture).__webglTexture=st,ct.get(U.depthTexture).__webglTexture=_t.__autoAllocateDepthBuffer?void 0:xt,_t.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,st){let xt=ct.get(U);xt.__webglFramebuffer=st,xt.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(U,st=0,xt=0){Et=U,lt=st,gt=xt;let _t=null,vt=!1,Qt=!1;if(U){let Kt=ct.get(U);if(Kt.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(it.FRAMEBUFFER,Kt.__webglFramebuffer),Ot.copy(U.viewport),jt.copy(U.scissor),ne=U.scissorTest,P.viewport(Ot),P.scissor(jt),P.setScissorTest(ne),yt=-1;return}else if(Kt.__webglFramebuffer===void 0)St.setupRenderTarget(U);else if(Kt.__hasExternalTextures)St.rebindTextures(U,ct.get(U.texture).__webglTexture,ct.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let Jt=U.depthTexture;if(Kt.__boundDepthTexture!==Jt){if(Jt!==null&&ct.has(Jt)&&(U.width!==Jt.image.width||U.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");St.setupDepthRenderbuffer(U)}}let le=U.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(Qt=!0);let fe=ct.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(fe[st])?_t=fe[st][xt]:_t=fe[st],vt=!0):U.samples>0&&St.useMultisampledRTT(U)===!1?_t=ct.get(U).__webglMultisampledFramebuffer:Array.isArray(fe)?_t=fe[xt]:_t=fe,Ot.copy(U.viewport),jt.copy(U.scissor),ne=U.scissorTest}else Ot.copy(Zt).multiplyScalar(Ut).floor(),jt.copy(ut).multiplyScalar(Ut).floor(),ne=Ve;if(xt!==0&&(_t=J),P.bindFramebuffer(it.FRAMEBUFFER,_t)&&P.drawBuffers(U,_t),P.viewport(Ot),P.scissor(jt),P.setScissorTest(ne),vt){let Kt=ct.get(U.texture);it.framebufferTexture2D(it.FRAMEBUFFER,it.COLOR_ATTACHMENT0,it.TEXTURE_CUBE_MAP_POSITIVE_X+st,Kt.__webglTexture,xt)}else if(Qt){let Kt=st;for(let le=0;le<U.textures.length;le++){let fe=ct.get(U.textures[le]);it.framebufferTextureLayer(it.FRAMEBUFFER,it.COLOR_ATTACHMENT0+le,fe.__webglTexture,xt,Kt)}}else if(U!==null&&xt!==0){let Kt=ct.get(U.texture);it.framebufferTexture2D(it.FRAMEBUFFER,it.COLOR_ATTACHMENT0,it.TEXTURE_2D,Kt.__webglTexture,xt)}yt=-1};function Yr(U){let st=ct.get(U);return(st.__readFormat!==U.format||st.__readType!==U.type)&&(st.__readFormat=U.format,st.__readType=U.type,st.__formatReadable=X.textureFormatReadable(U.format),st.__typeReadable=X.textureTypeReadable(U.type)),st}this.readRenderTargetPixels=function(U,st,xt,_t,vt,Qt,Xt,Kt=0){if(!(U&&U.isWebGLRenderTarget)){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=ct.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Xt!==void 0&&(le=le[Xt]),le){P.bindFramebuffer(it.FRAMEBUFFER,le);try{let fe=U.textures[Kt],Jt=fe.format,ve=fe.type;U.textures.length>1&&it.readBuffer(it.COLOR_ATTACHMENT0+Kt);let se=Yr(fe);if(se.__formatReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(se.__typeReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=U.width-_t&&xt>=0&&xt<=U.height-vt&&it.readPixels(st,xt,_t,vt,Rt.convert(Jt),Rt.convert(ve),Qt)}finally{let fe=Et!==null?ct.get(Et).__webglFramebuffer:null;P.bindFramebuffer(it.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(U,st,xt,_t,vt,Qt,Xt,Kt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let le=ct.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Xt!==void 0&&(le=le[Xt]),le)if(st>=0&&st<=U.width-_t&&xt>=0&&xt<=U.height-vt){P.bindFramebuffer(it.FRAMEBUFFER,le);let fe=U.textures[Kt],Jt=fe.format,ve=fe.type;U.textures.length>1&&it.readBuffer(it.COLOR_ATTACHMENT0+Kt);let se=Yr(fe);if(se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ue=it.createBuffer();it.bindBuffer(it.PIXEL_PACK_BUFFER,Ue),it.bufferData(it.PIXEL_PACK_BUFFER,Qt.byteLength,it.STREAM_READ),it.readPixels(st,xt,_t,vt,Rt.convert(Jt),Rt.convert(ve),0),it.bindBuffer(it.PIXEL_PACK_BUFFER,null);let Ze=Et!==null?ct.get(Et).__webglFramebuffer:null;P.bindFramebuffer(it.FRAMEBUFFER,Ze);let De=it.fenceSync(it.SYNC_GPU_COMMANDS_COMPLETE,0);return it.flush(),await zd(it,De,4),it.bindBuffer(it.PIXEL_PACK_BUFFER,Ue),it.getBufferSubData(it.PIXEL_PACK_BUFFER,0,Qt),it.bindBuffer(it.PIXEL_PACK_BUFFER,null),it.deleteBuffer(Ue),it.deleteSync(De),Qt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,st=null,xt=0){let _t=Math.pow(2,-xt),vt=Math.floor(U.image.width*_t),Qt=Math.floor(U.image.height*_t),Xt=st!==null?st.x:0,Kt=st!==null?st.y:0;St.setTexture2D(U,0),it.copyTexSubImage2D(it.TEXTURE_2D,xt,0,0,Xt,Kt,vt,Qt),P.unbindTexture()},this.copyTextureToTexture=function(U,st,xt=null,_t=null,vt=0,Qt=0){let Xt,Kt,le,fe,Jt,ve,se,Ue,Ze,De=U.isCompressedTexture?U.mipmaps[Qt]:U.image;if(xt!==null)Xt=xt.max.x-xt.min.x,Kt=xt.max.y-xt.min.y,le=xt.isBox3?xt.max.z-xt.min.z:1,fe=xt.min.x,Jt=xt.min.y,ve=xt.isBox3?xt.min.z:0;else{let Dt=Math.pow(2,-vt);Xt=Math.floor(De.width*Dt),Kt=Math.floor(De.height*Dt),U.isDataArrayTexture?le=De.depth:U.isData3DTexture?le=Math.floor(De.depth*Dt):le=1,fe=0,Jt=0,ve=0}_t!==null?(se=_t.x,Ue=_t.y,Ze=_t.z):(se=0,Ue=0,Ze=0);let s=Rt.convert(st.format),a=Rt.convert(st.type),c;st.isData3DTexture?(St.setTexture3D(st,0),c=it.TEXTURE_3D):st.isDataArrayTexture||st.isCompressedArrayTexture?(St.setTexture2DArray(st,0),c=it.TEXTURE_2D_ARRAY):(St.setTexture2D(st,0),c=it.TEXTURE_2D),P.activeTexture(it.TEXTURE0),P.pixelStorei(it.UNPACK_FLIP_Y_WEBGL,st.flipY),P.pixelStorei(it.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),P.pixelStorei(it.UNPACK_ALIGNMENT,st.unpackAlignment);let p=P.getParameter(it.UNPACK_ROW_LENGTH),M=P.getParameter(it.UNPACK_IMAGE_HEIGHT),I=P.getParameter(it.UNPACK_SKIP_PIXELS),B=P.getParameter(it.UNPACK_SKIP_ROWS),Q=P.getParameter(it.UNPACK_SKIP_IMAGES);P.pixelStorei(it.UNPACK_ROW_LENGTH,De.width),P.pixelStorei(it.UNPACK_IMAGE_HEIGHT,De.height),P.pixelStorei(it.UNPACK_SKIP_PIXELS,fe),P.pixelStorei(it.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(it.UNPACK_SKIP_IMAGES,ve);let et=U.isDataArrayTexture||U.isData3DTexture,dt=st.isDataArrayTexture||st.isData3DTexture;if(U.isDepthTexture){let Dt=ct.get(U),Lt=ct.get(st),kt=ct.get(Dt.__renderTarget),de=ct.get(Lt.__renderTarget);P.bindFramebuffer(it.READ_FRAMEBUFFER,kt.__webglFramebuffer),P.bindFramebuffer(it.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Se=0;Se<le;Se++)et&&(it.framebufferTextureLayer(it.READ_FRAMEBUFFER,it.COLOR_ATTACHMENT0,ct.get(U).__webglTexture,vt,ve+Se),it.framebufferTextureLayer(it.DRAW_FRAMEBUFFER,it.COLOR_ATTACHMENT0,ct.get(st).__webglTexture,Qt,Ze+Se)),it.blitFramebuffer(fe,Jt,Xt,Kt,se,Ue,Xt,Kt,it.DEPTH_BUFFER_BIT,it.NEAREST);P.bindFramebuffer(it.READ_FRAMEBUFFER,null),P.bindFramebuffer(it.DRAW_FRAMEBUFFER,null)}else if(vt!==0||U.isRenderTargetTexture||ct.has(U)){let Dt=ct.get(U),Lt=ct.get(st);P.bindFramebuffer(it.READ_FRAMEBUFFER,j),P.bindFramebuffer(it.DRAW_FRAMEBUFFER,K);for(let kt=0;kt<le;kt++)et?it.framebufferTextureLayer(it.READ_FRAMEBUFFER,it.COLOR_ATTACHMENT0,Dt.__webglTexture,vt,ve+kt):it.framebufferTexture2D(it.READ_FRAMEBUFFER,it.COLOR_ATTACHMENT0,it.TEXTURE_2D,Dt.__webglTexture,vt),dt?it.framebufferTextureLayer(it.DRAW_FRAMEBUFFER,it.COLOR_ATTACHMENT0,Lt.__webglTexture,Qt,Ze+kt):it.framebufferTexture2D(it.DRAW_FRAMEBUFFER,it.COLOR_ATTACHMENT0,it.TEXTURE_2D,Lt.__webglTexture,Qt),vt!==0?it.blitFramebuffer(fe,Jt,Xt,Kt,se,Ue,Xt,Kt,it.COLOR_BUFFER_BIT,it.NEAREST):dt?it.copyTexSubImage3D(c,Qt,se,Ue,Ze+kt,fe,Jt,Xt,Kt):it.copyTexSubImage2D(c,Qt,se,Ue,fe,Jt,Xt,Kt);P.bindFramebuffer(it.READ_FRAMEBUFFER,null),P.bindFramebuffer(it.DRAW_FRAMEBUFFER,null)}else dt?U.isDataTexture||U.isData3DTexture?it.texSubImage3D(c,Qt,se,Ue,Ze,Xt,Kt,le,s,a,De.data):st.isCompressedArrayTexture?it.compressedTexSubImage3D(c,Qt,se,Ue,Ze,Xt,Kt,le,s,De.data):it.texSubImage3D(c,Qt,se,Ue,Ze,Xt,Kt,le,s,a,De):U.isDataTexture?it.texSubImage2D(it.TEXTURE_2D,Qt,se,Ue,Xt,Kt,s,a,De.data):U.isCompressedTexture?it.compressedTexSubImage2D(it.TEXTURE_2D,Qt,se,Ue,De.width,De.height,s,De.data):it.texSubImage2D(it.TEXTURE_2D,Qt,se,Ue,Xt,Kt,s,a,De);P.pixelStorei(it.UNPACK_ROW_LENGTH,p),P.pixelStorei(it.UNPACK_IMAGE_HEIGHT,M),P.pixelStorei(it.UNPACK_SKIP_PIXELS,I),P.pixelStorei(it.UNPACK_SKIP_ROWS,B),P.pixelStorei(it.UNPACK_SKIP_IMAGES,Q),Qt===0&&st.generateMipmaps&&it.generateMipmap(c),P.unbindTexture()},this.initRenderTarget=function(U){ct.get(U).__webglFramebuffer===void 0&&St.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?St.setTextureCube(U,0):U.isData3DTexture?St.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?St.setTexture2DArray(U,0):St.setTexture2D(U,0),P.unbindTexture()},this.resetState=function(){lt=0,gt=0,Et=null,P.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Oe._getUnpackColorSpace()}}});function sb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ob(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ab(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sp),this.state=We.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=We.DOLLY;break;case pr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=We.ROTATE}break;case pr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(wu)}function cb(n){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function hb(n){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(n.preventDefault(),this.dispatchEvent(wu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Sp))}function ub(n){this.enabled!==!1&&this._handleKeyDown(n)}function fb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=We.TOUCH_ROTATE;break;case mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=We.TOUCH_DOLLY_PAN;break;case mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(wu)}function db(n){switch(this._trackPointer(n),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=We.NONE}}function pb(n){this.enabled!==!1&&n.preventDefault()}function mb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Mp,wu,Sp,Sc,bp,rb,un,Bn,We,Su,wc,wp=_n(()=>{bc();Mp={type:"change"},wu={type:"start"},Sp={type:"end"},Sc=new ar,bp=new Xn,rb=Math.cos(70*nu.DEG2RAD),un=new ht,Bn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Su=1e-6,wc=class extends zo{constructor(t,e=null){super(t,e),this.state=We.NONE,this.target=new ht,this.cursor=new ht,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:mr.ROTATE,TWO:mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ht,this._lastQuaternion=new Wn,this._lastTargetPosition=new ht,this._quat=new Wn().setFromUnitVectors(t.up,new ht(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ls,this._sphericalDelta=new Ls,this._scale=1,this._panOffset=new ht,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new ht,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ob.bind(this),this._onPointerDown=sb.bind(this),this._onPointerUp=ab.bind(this),this._onContextMenu=pb.bind(this),this._onMouseWheel=hb.bind(this),this._onKeyDown=ub.bind(this),this._onTouchStart=fb.bind(this),this._onTouchMove=db.bind(this),this._onMouseDown=lb.bind(this),this._onMouseMove=cb.bind(this),this._interceptControlDown=mb.bind(this),this._interceptControlUp=gb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=We.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mp),this.update(),this.state=We.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;un.copy(e).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Bn:i>Math.PI&&(i-=Bn),r<-Math.PI?r+=Bn:r>Math.PI&&(r-=Bn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),e.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let h=un.length();l=this._clampDistance(h*this._scale);let u=h-l;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),o=!!u}else if(this.object.isOrthographicCamera){let h=new ht(this._mouse.x,this._mouse.y,0);h.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=u!==this.object.zoom;let d=new ht(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),l=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Sc.origin.copy(this.object.position),Sc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sc.direction))<rb?this.object.lookAt(this.target):(bp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sc.intersectPlane(bp,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Su||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Su||this._lastTargetPosition.distanceToSquared(this.target)>Su?(this.dispatchEvent(Mp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Bn/60*this.autoRotateSpeed*t:Bn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){un.setFromMatrixColumn(e,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,e){this.screenSpacePanning===!0?un.setFromMatrixColumn(e,1):(un.setFromMatrixColumn(e,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;un.copy(r).sub(this.target);let o=un.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,o=e-i.top,l=i.width,h=i.height;this._mouse.x=r/l*2-1,this._mouse.y=-(o/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(l,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new me,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function Ep(n,t,e,i){n.onBeforeCompile=r=>{r.uniforms.uCut={value:t-.05},r.uniforms.uBase={value:i||new Ee(1,1,1)},r.uniforms.uBottom={value:t},r.vertexShader=`varying float vZ;
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
diffuseColor.rgb = mix(diffuseColor.rgb, uBase, onWall);`).replace("#include <normal_fragment_begin>",Ie.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")+`
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function Tp(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let r=i.getContext("2d");r.font="600 84px Inter, system-ui, sans-serif",r.fillStyle="#"+new Ee(t).getHexString(),r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,64);let o=new Po(i);o.colorSpace=In;let l=new Ao(new Ts({map:o,depthTest:!1,transparent:!0}));return l.scale.set(e*2,e,1),l.renderOrder=6,l}var An,Vs,_b,Ec,Ap=_n(()=>{bc();wp();An={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa",rough3d:"#f5a524",rest3d:"#e3c341",finish3d:"#ff7a59",chamfer:"#f472b6"},Vs={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};_b=(n,t)=>n.some(e=>e.key===t);Ec=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new yc({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new So,this.camera=new wn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new wc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new Fo(16777215,4478310,1.6));let t=new Rs(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new Rs(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new ei,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=r=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&r-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=r,this.onFrame&&this.onFrame(r),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,r=new ht((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),l=new ht(-.45,-.8,.75).normalize(),h=[];for(let v of[t[0],e[0]])for(let _ of[t[1],e[1]])for(let x of[t[2],e[2]])h.push(new ht(v,_,x));let u=r.clone(),d=o*2,g=()=>{this.camera.position.copy(u).addScaledVector(l,d),this.camera.near=d/100,this.camera.far=d*100,this.camera.lookAt(u),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let v=0;v<8;v++){g();let _=1/0,x=-1/0,w=1/0,E=-1/0;for(let R of h){let D=R.clone().project(this.camera);_=Math.min(_,D.x),x=Math.max(x,D.x),w=Math.min(w,D.y),E=Math.max(E,D.y)}let b=Math.max((x-_)/2,(E-w)/2);if(!(b>0))break;let y=d*Math.tan(this.camera.fov*Math.PI/360),L=y*this.camera.aspect,V=new ht().setFromMatrixColumn(this.camera.matrixWorld,0),A=new ht().setFromMatrixColumn(this.camera.matrixWorld,1);u.addScaledVector(V,(_+x)/2*L).addScaledVector(A,(w+E)/2*y),d*=b/(1-i)}g(),this.controls.target.copy(u),this.controls.update()}showPart(t,e=[]){this.clear();let i=new Ke;i.setAttribute("position",new Ye(t.positions,3)),i.setIndex(new Ye(t.indices,1)),i.computeVertexNormals();let r=new Be(i,new qn({color:9348283,metalness:.15,roughness:.55,side:En,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(r),this.pickMesh=r;let o=new Dr(new Ps(i,25),new ui({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let h of e)this.addLoops(h.loops,h.z,h.color,h.dashed,h.opacity);i.computeBoundingBox();let l=i.boundingBox;this.keepCamera||this.frame(l.min.toArray(),l.max.toArray())}addLoops(t,e,i,r,o=.95){for(let l of t){let h=l.map(([v,_])=>new ht(v,_,e)),u=new Ke().setFromPoints([...h,h[0]]),d=r?new No({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new ui({color:i,transparent:!0,opacity:o,depthTest:!1}),g=new Nr(u,d);r&&g.computeLineDistances(),g.renderOrder=2,this.content.add(g)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let r=t.getBoundingClientRect(),o=new Bo;if(o.setFromCamera(new me((i.clientX-r.left)/r.width*2-1,-((i.clientY-r.top)/r.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let u=o.intersectObjects(this.markers)[0];if(u?.object.userData.axis){this.onAxis?.(u.object.userData.axis);return}if(u){this.onMarker(u.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let l=o.intersectObject(this.pickMesh)[0];if(!l||!l.face)return;let h=l.face.normal.clone();h.dot(o.ray.direction)>0&&h.negate(),this.onPick([h.x,h.y,h.z])})}showZero({stock:t,part:e,points:i,selected:r,zFace:o,color:l,accent:h="#4c6ef5"}){this.clear();let u=t.maxX-t.minX,d=t.maxY-t.minY,g=t.top-t.bottom,v=Math.max(u,d,g),_=new cr(u,d,g);_.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let x=new Be(_,new qn({color:l,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(x.renderOrder=2,this.content.add(x),this.content.add(new Dr(new Ps(_),new ui({color:new Ee(l).multiplyScalar(.6)}))),e){let y=new Ke;y.setAttribute("position",new Ye(e.positions,3)),y.setIndex(new Ye(e.indices,1)),y.computeVertexNormals(),this.partMesh=new Be(y,new qn({color:9348283,metalness:.15,roughness:.55})),this.content.add(this.partMesh)}else this.partMesh=null;let w=o==="bed"?t.bottom:t.top,E=v*.014;this.markers=[];for(let y of i){let L=y.key===r,V=new Be(new hr(L?E*1.3:E,24,16),new Yn({color:L?h:16777215}));if(V.position.set(y.x,y.y,w),V.userData.key=y.key,V.renderOrder=4,V.material.depthTest=!1,!L){let R=new Be(new hr(E*1.25,24,16),new Yn({color:6187893,depthTest:!1}));R.renderOrder=3,V.add(R)}let A=new Be(new hr(E*3.5,12,8),new Yn({visible:!1}));if(A.userData.key=y.key,V.add(A),this.markers.push(A),this.content.add(V),L){let R=new Be(new Lo(E*1.6,E*2,40),new Yn({color:h,transparent:!0,depthTest:!1,side:En}));R.position.copy(V.position),R.renderOrder=4,this.content.add(R),this.pulse=R;let D=v*.24;for(let[H,C,k]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let G=new ko(new ht(...H),V.position,D,C,D*.15,D*.065);G.line.visible=!1;let Y=new Be(new wi(v*.0028,v*.0028,D*.86,12),new Yn({color:C,depthTest:!1}));Y.position.y=D*.43,Y.renderOrder=5,G.add(Y),G.cone.material.depthTest=!1,G.renderOrder=5,G.cone.renderOrder=5,this.content.add(G);let Z=Tp(k,C,v*.05);Z.position.copy(V.position).add(new ht(...H).multiplyScalar(D*1.18)),this.content.add(Z);let J=new Be(new wi(D*.1,D*.1,D*1.3,10),new Yn({visible:!1}));J.quaternion.setFromUnitVectors(new ht(0,1,0),new ht(...H)),J.position.copy(V.position).add(new ht(...H).multiplyScalar(D*.65)),J.userData.axis=k.toLowerCase(),this.content.add(J),this.markers.unshift(J)}}}let b=Tp("Front",9675444,v*.04);b.position.set((t.minX+t.maxX)/2,t.minY-v*.08,t.bottom),this.content.add(b),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),_b(i,r)||(this.pulse=null),this.onFrame=y=>{if(!this.pulse)return;let L=y%1600/1600;this.pulse.scale.setScalar(1+L*1.6),this.pulse.material.opacity=.8*(1-L),this.pulse.lookAt(this.camera.position)}}spin(t,e=700){let i=this.partMesh;if(!i)return Promise.resolve();i.geometry.computeBoundingBox();let r=i.geometry.boundingBox.getCenter(new ht),o=t==="x"?new ht(1,0,0):new ht(0,0,1);i.matrixAutoUpdate=!1;let l=performance.now();return new Promise(h=>{let u=d=>{let g=Math.min(1,(d-l)/e),v=g<.5?2*g*g:1-(-2*g+2)**2/2;i.matrix.makeTranslation(r.x,r.y,r.z).multiply(new Xe().makeRotationAxis(o,Math.PI*v)).multiply(new Xe().makeTranslation(-r.x,-r.y,-r.z)),i.matrixWorldNeedsUpdate=!0,g<1&&i.parent?requestAnimationFrame(u):h()};requestAnimationFrame(u)})}showStock(t,e,i){this.clear(),this.keepCamera=!1;let r=t.nx,o=t.ny,l=r*o,h=new Float32Array(l*3),u=new Float32Array(l*3),d=new Ee(e);for(let L=0;L<o;L++)for(let V=0;V<r;V++){let A=L*r+V;h[A*3]=t.x0+V*t.cell,h[A*3+1]=t.y0+L*t.cell,h[A*3+2]=t.h[A],u[A*3]=d.r,u[A*3+1]=d.g,u[A*3+2]=d.b}let g=new Uint32Array((r-1)*(o-1)*6),v=0;for(let L=0;L<o-1;L++)for(let V=0;V<r-1;V++){let A=L*r+V,R=A+1,D=A+r,H=D+1;g[v++]=A,g[v++]=R,g[v++]=H,g[v++]=A,g[v++]=H,g[v++]=D}let _=new Ke;_.setAttribute("position",new Ye(h,3).setUsage(Ur)),_.setAttribute("color",new Ye(u,3).setUsage(Ur));let x=new Float32Array(l*3);for(let L=0;L<l;L++)x[L*3+2]=1;_.setAttribute("normal",new Ye(x,3).setUsage(Ur));let w=new Float32Array(l*4);for(let L=0;L<l;L++)w[L*4+2]=t.h[L],w[L*4+3]=t.h[L];_.setAttribute("wall",new Ye(w,4).setUsage(Ur)),_.setIndex(new Ye(g,1));let E=new qn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Vs.aluminum?.5:.05,side:En});Ep(E,t.bottom,!1,d);let b=new Be(_,E);this.content.add(b),this.stock={hm:t,geo:_,base:d,sides:this.makeSides(t,d)};let y=new qn({color:d.clone().multiplyScalar(.7),roughness:.9,side:En});if(Ep(y,t.bottom,!0),this.content.add(new Be(_,y)),i){let L=new Ke;L.setAttribute("position",new Ye(i.positions,3)),L.setIndex(new Ye(i.indices,1)),L.computeVertexNormals(),this.partGhost=new Be(L,new qn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new ei,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(r-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let v=0;v<t.nx;v++)i.push(v);for(let v=1;v<t.ny;v++)i.push(v*t.nx+t.nx-1);for(let v=t.nx-2;v>=0;v--)i.push((t.ny-1)*t.nx+v);for(let v=t.ny-2;v>=0;v--)i.push(v*t.nx);let r=new Float32Array(i.length*6),o=new Float32Array(i.length*6),l=[],h=[[0,-1],[1,0],[0,1],[-1,0]],u=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let v=0;v<i.length;v++){let _=i[v],x=t.x0+_%t.nx*t.cell,w=t.y0+Math.floor(_/t.nx)*t.cell;r.set([x,w,t.h[_],x,w,t.bottom],v*6);let[E,b]=h[v<u[0]?0:v<u[1]?1:v<u[2]?2:3];if(o.set([E,b,0,E,b,0],v*6),v<i.length-1){let y=v*2;l.push(y,y+1,y+3,y,y+3,y+2)}}let d=new Ke;d.setAttribute("position",new Ye(r,3).setUsage(Ur)),d.setAttribute("normal",new Ye(o,3)),d.setIndex(l);let g=new Be(d,new qn({color:e.clone().multiplyScalar(.85),roughness:.85,side:En}));return this.content.add(g),{g:d,edge:i}}refreshStock(t,e,i){let r=this.stock;if(!r||e<t)return;let{hm:o,geo:l,base:h}=r,u=o.nx,d=o.ny,g=o.h,v=l.attributes.position,_=l.attributes.color,x=l.attributes.normal,w=l.attributes.wall,E=new Ee,b=Math.max(0,t),y=Math.min(d-1,e),L=o.cell*1.5,V=(C,k,G)=>{let Y=g[k*u+C],Z=0;for(let J=-1;J<=1;J++)for(let j=-1;j<=1;j++){let K=C+j,lt=k+J;(j||J)&&K>=0&&lt>=0&&K<u&&lt<d&&(Z=Math.max(Z,G*(g[lt*u+K]-Y)))}return Z};for(let C=b;C<=y;C++)for(let k=0;k<u;k++){let G=C*u+k;v.array[G*3]=o.x0+k*o.cell+(o.sx?o.sx[G]:0),v.array[G*3+1]=o.y0+C*o.cell+(o.sy?o.sy[G]:0),v.array[G*3+2]=g[G];let Y=o.op[G];Y?(E.copy(h).lerp(i[Y-1],.28),E.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(g[G]-o.bottom)/Math.max(1,o.top-o.bottom))))):E.copy(h),_.array[G*3]=E.r,_.array[G*3+1]=E.g,_.array[G*3+2]=E.b}let A=v.array,R=Math.max(0,b-1),D=Math.min(d-1,y+1);for(let C=R;C<=D;C++)for(let k=0;k<u;k++){let G=C*u+k,Y=w.array,Z=V(k,C,1),J=V(k,C,-1);if(Y[G*4]=0,Y[G*4+1]=0,Y[G*4+2]=g[G],Y[G*4+3]=g[G],o.wx&&(o.wx[G]||o.wy[G])&&(Z>L||J>L)){Y[G*4]=o.wx[G],Y[G*4+1]=o.wy[G],Y[G*4+2]=g[G]-J,Y[G*4+3]=g[G]+Z,x.array[G*3]=0,x.array[G*3+1]=0,x.array[G*3+2]=1;continue}let j=(C*u+Math.max(0,k-1))*3,K=(C*u+Math.min(u-1,k+1))*3,lt=(Math.max(0,C-1)*u+k)*3,gt=(Math.min(d-1,C+1)*u+k)*3,Et=A[K]-A[j],yt=A[K+1]-A[j+1],It=A[K+2]-A[j+2],Ot=A[gt]-A[lt],jt=A[gt+1]-A[lt+1],ne=A[gt+2]-A[lt+2],Te=yt*ne-It*jt,Me=It*Ot-Et*ne,Ae=Et*jt-yt*Ot,Pt=Math.hypot(Te,Me,Ae)||1;Ae<0&&(Te=-Te,Me=-Me,Ae=-Ae),x.array[G*3]=Te/Pt,x.array[G*3+1]=Me/Pt,x.array[G*3+2]=Ae/Pt}v.addUpdateRange(b*u*3,(y-b+1)*u*3),_.addUpdateRange(b*u*3,(y-b+1)*u*3),x.addUpdateRange(R*u*3,(D-R+1)*u*3),w.addUpdateRange(R*u*4,(D-R+1)*u*4),v.needsUpdate=!0,_.needsUpdate=!0,x.needsUpdate=!0,w.needsUpdate=!0;let H=r.sides.g.attributes.position;r.sides.edge.forEach((C,k)=>{H.array[k*6+2]=g[C]}),H.needsUpdate=!0}setTool(t,e){for(let v of[...this.tool.children])this.tool.remove(v),v.traverse(_=>{_.geometry?.dispose(),_.material?.dispose()});let i=t.diameter/2,r=t.kind==="surfacing"||i>6.35,o=r?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),l=new qn({color:14015457,metalness:.85,roughness:.3}),h;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let v=i/Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360);h=new Be(new Cs(i,v,48),l),h.rotation.x=-Math.PI/2,h.position.z=v/2}else if(t.kind==="ball"){h=new ei;let v=new Be(new wi(i,i,o-i,64),l);v.rotation.x=Math.PI/2,v.position.z=i+(o-i)/2;let _=new Be(new hr(i,48,24,0,Math.PI*2,Math.PI/2,Math.PI/2),l);_.rotation.x=Math.PI/2,_.position.z=i,h.add(v,_)}else h=new Be(new wi(i,i,o,64),l),h.rotation.x=Math.PI/2,h.position.z=o/2;let u=r?3.175:Math.max(i,Math.min(3.175,i*1.5)),d=20,g=new Be(new wi(u,u,d,32),new qn({color:11187132,metalness:.8,roughness:.35}));g.rotation.x=Math.PI/2,g.position.z=o+d/2,this.tool.add(h,g)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new ei;for(let e of t){let i=e.track;if(!i)continue;let r=[],o=[];for(let h=4;h<i.length;h+=4)(i[h+3]>0?r:o).push(i[h-4],i[h-3],i[h-2]+.02,i[h],i[h+1],i[h+2]+.02);let l=(h,u,d)=>{if(!h.length)return;let g=new Ke;g.setAttribute("position",new $e(h,3));let v=new Dr(g,new ui({color:u,transparent:!0,opacity:d}));v.renderOrder=3,this.paths.add(v)};l(r,An[e.kind]||"#1abc9c",.75),l(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function yb(){return new Promise((n,t)=>{let e=indexedDB.open(vb,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Cp(n,t){let e=await yb();return new Promise((i,r)=>{let o=e.transaction("kv",n),l=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(l?.result)},o.onerror=o.onabort=()=>{e.close(),r(o.error)}})}var vb,Pp,Ip,Rp=_n(()=>{vb="nccam";Pp=n=>Cp("readonly",t=>t.get(n)).catch(()=>null),Ip=(n,t)=>Cp("readwrite",e=>e.put(t,n)).catch(()=>{})});var Np={};ku(Np,{mountApp:()=>wb});function wb(n,t,e){let i={get:async O=>{let $=await fetch(t.base+O);if(!$.ok)throw new Error(`${O}: ${$.status}`);return $.json()},post:(O,$)=>fetch(t.base+O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($)})},r={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,scale:null,rot:null,lock:!0,fileSize:null,meshKind:null,tools:[],numbering:"slot",safeZ:null,connected:!1,units:"mm",limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:""},o=new Ec,l=O=>!!O.toolNumber&&(!r.slots||O.toolNumber<=r.slots),h=(O,$)=>Vn.num(O,r.units,$),u=(O,$)=>Vn.len(O,r.units,$),d=0;(async()=>{let[O,$,q,rt]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);r.units=Vn.unitsFrom(O?.unitsPreference),r.numbering=O?.tool?.numbering==="toolId"?"toolId":"slot",r.slots=Math.max(0,Number(O?.tool?.count)||0);let z=O?.tool?.probe?Number(O?.tool?.probeToolNumber)||99:null,wt=Number(O?.safeZHeight);r.safeZ=Number.isFinite(wt)?wt:null,r.tools=cf(Array.isArray($)?$:$?.tools),r.numbering=lf(r.numbering,r.tools,r.slots,z);let ft=q?.settings||{},Rt=Mt=>{let bt=parseFloat(ft[Mt]?.value);return Number.isFinite(bt)&&bt>0?bt:null};r.limits={maxRpm:Rt("30")||void 0,minRpm:Rt("31")||void 0,maxFeed:Math.min(Rt("110")||1/0,Rt("111")||1/0,1/0)},Number.isFinite(r.limits.maxFeed)||delete r.limits.maxFeed,r.maxRapid=Math.min(Rt("110")||5e3,Rt("111")||5e3),Rt("130")&&Rt("131")&&(r.travel={x:Rt("130"),y:Rt("131"),z:Rt("132")}),r.connected=!!rt?.machineState?.connected,R();let pt=await Pp("last");pt?.bytes&&!r.part&&!r.loading&&g(null,pt)})();async function g(O,$=null){if(!O&&!$)return;let q=$?$.name:O.name;r.fileName=q,r.loading=`Reading ${q}\u2026`,r.error="",r.plan=null,r.result=null,r.analysis=null,r.part=null,r.step=1,r.maxStep=1,R();try{let rt=$?$.bytes:await O.arrayBuffer();r.bytes=rt.slice(0),r.lock=$?.lock??!0;let z=await e("load",{bytes:rt,name:q,scale:$?.scale},[rt]);if(r.sides=z.sides,r.fileSize=z.fileSize,r.meshKind=z.mesh||null,r.scale=z.scale,$?.upPath?.length){r.job=null;for(let wt of $.upPath)await w(wt,!0);r.job={...io(r.analysis),...$.job},await L()}else await w(z.best);A()}catch(rt){r.error=rt.message||String(rt),r.fileName=""}r.loading="",R()}let v=Promise.resolve();function _(O){return v=v.then(async()=>{r.loading="Resizing the part\u2026",R();try{let $=await e("rescale",O);r.sides=$.sides,r.scale=$.scale,r.rot=$.rot,r.part={positions:$.positions,indices:$.indices},r.analysis=$.analysis,(r.upPath||[]).some(rt=>Array.isArray(rt)||rt?.rot)&&(r.upPath=[{rot:$.rot}]);let q=r.job;r.job={...io(r.analysis),...q,stock:q.stock.fit?io(r.analysis).stock:q.stock},r.result=null,r.maxStep=Math.min(r.maxStep,3),await L(),A()}catch($){r.error=$.message||String($)}r.loading="",R()}),v}let x={top:"bottom",bottom:"top",front:"back",back:"front",left:"right",right:"left"};async function w(O,$=!1,q=!1){q||(r.loading="Turning the part\u2026",R());let z=await(O&&!Array.isArray(O)&&typeof O=="object"&&!O.rot?e("turn",{how:O.turn}):e(Array.isArray(O)?"tilt":"orient",Array.isArray(O)?{normal:O}:{up:O}));return E(O,z,$)}function E(O,$,q){let rt=O&&!Array.isArray(O)&&typeof O=="object"&&!O.rot;if(r.rot=$.rot,rt?r.up=O.turn==="over"?x[r.up]||"custom":r.up:O?.rot?r.up=r.up||"custom":r.up=Array.isArray(O)?"custom":O,r.upPath=rt||Array.isArray(O)?[...r.upPath||[],O]:[O],q){r.part={positions:$.positions,indices:$.indices},r.analysis=$.analysis,r.loading="";return}r.part={positions:$.positions,indices:$.indices},r.analysis=$.analysis;let z=r.job;return r.job=io($.analysis),z&&Object.assign(r.job,{material:z.material,finish:z.finish,zero:z.zero,tabs:z.tabs,chamfer:z.chamfer,stock:{...r.job.stock,fit:z.stock.fit,margin:z.stock.margin,extraTop:z.stock.extraTop}}),r.loading="",L()}let b=!1;async function y(O){if(b||!r.part)return;b=!0;let $={turn:O==="z"?"over":"around"};try{let[q]=await Promise.all([e("turn",{how:$.turn}),o.spin(O==="z"?"x":"z")]);await E($,q,!1)}catch(q){r.error=q.message||String(q),R()}b=!1}async function L(O=!1){if(!r.part)return;let $=++d;r.planning=!0,O&&(r.result=null),R();try{let q=await e("plan",{tools:r.tools,job:{...r.job,units:r.units},limits:r.limits,paths:O,gcodeOptions:{name:r.fileName,numbering:r.numbering,safeZHeightMm:r.safeZ},timing:{maxRapid:r.maxRapid||5e3}});if($!==d)return;r.plan=q.plan,A(),O&&(r.result=q,r.simChecks=null)}catch(q){$===d&&(r.error=q.message||String(q))}$===d&&(r.planning=!1,R())}let V=null;function A(){!r.bytes||!r.job||(clearTimeout(V),V=setTimeout(()=>Ip("last",{name:r.fileName,bytes:r.bytes,upPath:r.upPath,job:r.job,scale:r.scale,lock:r.lock,savedAt:Date.now()}),400))}function R(){if(!n.isConnected)return;let O=n.querySelector("[data-keep-scroll]"),$=O?O.scrollTop:0,q=r.step,rt=["Drop a STEP, STL or 3MF file. ncCAM finds the pockets, holes and outline for you.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][q-1],z=[r.part?"Your part":"Open your part","What are you cutting it from?","Here\u2019s the plan",r.simChecks&&!r.simChecks.ok?"Check the warnings":"Ready to cut"][q-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCAM<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">STEP, STL or 3MF to G-code</div></div>
        <div class="ncc-steps">${Mb.map((Rt,pt)=>{let Mt=pt+1,bt=Mt===q?"on":Mt<r.maxStep||Mt<q?"done":"";return`<button class="ncc-step ${bt}" type="button" data-go="${Mt}" ${Mt<=r.maxStep?"":"disabled"}><span class="ncc-num">${bt==="done"?"\u2713":Mt}</span>${qe(Rt)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${en.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${qe(z)}</h1><p class="ncc-lede">${qe(rt)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${r.connected?"ok":""}"></span>${r.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${q===3?"fixed":""}">${[H,K,Te,ie][q-1]()}</div>
        <div class="ncc-foot">${D()}</div>
      </section>
      ${r.toast?`<div class="ncc-toast" role="status">${qe(r.toast)}</div>`:""}`;let wt=n.querySelector("[data-keep-scroll]");wt&&(wt.scrollTop=$);let ft=n.querySelector("[data-viewer]");if(ft){ft.replaceWith(o.el);let Rt=r.loading||q===4&&!r.result?`<div class="ncc-busy"><span class="ncc-spin"></span>${qe(r.loading||"Making toolpaths\u2026")}</div>`:"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(pt=>pt.remove()),o.el.insertAdjacentHTML("beforeend",(q===1?Z():q===4?at():"")+Rt),o.fit(),q===1&&j(),q===2&&ne(),q===3&&Pt(),q===4&&r.result&&zt()}}function D(){let O=`<button class="ncc-back" type="button" data-go="${r.step-1}" ${r.step>1?"":"disabled"}>Back</button>`;if(r.step===1)return`${O}<button class="ncc-next" type="button" data-go="2" ${r.plan&&r.plan.ops.length&&!r.loading?"":"disabled"}>Next: Stock ${en.next}</button>`;if(r.step===2)return`${O}<button class="ncc-next" type="button" data-go="3">Next: Operations ${en.next}</button>`;if(r.step===3){let q=r.plan&&r.plan.ops.some(rt=>rt.enabled);return`${O}<button class="ncc-next" type="button" data-go="4" ${q&&!r.planning?"":"disabled"}>Make toolpaths ${en.next}</button>`}let $=r.simChecks&&!r.simChecks.ok;return`${O}${$?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${r.result&&r.simChecks&&!$?"":"disabled"}>${en.load}Load into ncSender</button>`}function H(){if(!r.part&&!r.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${en.upload}</div>
        <h2>Drop a STEP, STL or 3MF file here</h2>
        <p>Export your part from Fusion, Onshape, FreeCAD or SolidWorks as <strong>.step</strong>, or open a mesh: <strong>.stl</strong> or <strong>.3mf</strong> (from a 3D printing site or slicer). Millimetres or inches both work.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open file<input type="file" accept=".step,.stp,.stl,.3mf,.STEP,.STP,.STL,.3MF" data-file hidden></label>
        ${r.error?`<div class="ncc-hint bad" style="max-width: 520px">${en.warn}<span>${qe(r.error)}</span></div>`:""}
        ${r.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${en.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCAM can pick them.</span></div>`}
      </div>`;let O=r.analysis;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${en.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${qe(r.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${O?`${h(O.size[0])} \xD7 ${h(O.size[1])} \xD7 ${u(O.size[2])}`:"&nbsp;"}</div></div>
          </div>
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept=".step,.stp,.stl,.3mf,.STEP,.STP,.STL,.3MF" data-file hidden></label>
        </div>
        <div data-viewer></div>
      </div>
      <div class="ncc-col ncc-side">
        ${C()}
        <div class="ncc-card">
          <div class="ncc-label">Which side faces up?</div>
          <div class="ncc-picks">${bb.map(([$,q])=>{let rt=!r.sides||r.sides[$].reachable;return`<button class="ncc-pick ${r.up===$?"sel":""}" type="button" data-up="${$}" ${rt?"":"disabled"} ${rt?"":`title="With the ${q.toLowerCase()} up, some faces point down and the tool can\u2019t reach them"`}>${sn(Sb[$],24,'stroke-width="1.8"')}${q}${rt?"":"<small>Can\u2019t reach</small>"}</button>`}).join("")}</div>
          <div class="ncc-row-sub">Or click a flat face on the model to put it on top.</div>
        </div>
        ${k()}
        ${Y(!0)}
      </div>`}function C(){if(!r.fileSize||!r.analysis)return"";let O=bt=>{let Wt=r.analysis.size[bt];return r.units==="in"?Math.round(Wt/Vn.INCH*1e3)/1e3:Math.round(Wt*100)/100},$=r.scale||[1,0,0,0,1,0,0,0,1],q=r.rot||[1,0,0,0,1,0,0,0,1],rt=(bt,Wt)=>Array.from({length:9},(Le,xe)=>bt[(xe/3|0)*3]*Wt[xe%3]+bt[(xe/3|0)*3+1]*Wt[3+xe%3]+bt[(xe/3|0)*3+2]*Wt[6+xe%3]),z=rt(rt(q,$),[q[0],q[3],q[6],q[1],q[4],q[7],q[2],q[5],q[8]]),wt=[1,2,3,5,6,7].every(bt=>Math.abs(z[bt])<1e-6),ft=[z[0],z[4],z[8]].map(bt=>`${Math.round(bt*1e3)/10}%`),Rt=wt&&Math.abs(z[0]-z[4])<1e-9&&Math.abs(z[0]-z[8])<1e-9,pt=!(Rt&&Math.abs(z[0]-1)<1e-9),Mt=r.meshKind==="stl"&&!pt&&Math.max(...r.fileSize)<12;return`<div class="ncc-card">
        ${lt("lock","Keep the proportions",pt?Rt?`Scaled to ${ft[0]}`:wt?`Scaled ${ft.join(" \xD7 ")}`:"Stretched":"As in the file",r.lock)}
        <div class="ncc-fields">${["X","Y","Z"].map((bt,Wt)=>`<div class="ncc-field"><label for="ncc-size${Wt}">${bt} (${r.units})</label><input id="ncc-size${Wt}" class="ncc-input ncc-mono" inputmode="decimal" data-size="${Wt}" value="${O(Wt)}"></div>`).join("")}</div>
        <div class="ncc-row-sub">The part as it sits now, side up chosen: Z is its height.${pt?' <button type="button" class="ncc-link" data-scale="reset">Back to the file\u2019s size</button>':""}</div>
        ${Mt?`<div class="ncc-hint">${en.info}<span>Only ${h(Math.max(...r.fileSize))} across: STL files have no unit, so this may have been drawn in inches. <button type="button" class="ncc-link" data-scale="inch">Make it inches (\xD7 25.4)</button></span></div>`:""}
      </div>`}function k(){if(!r.plan)return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-row-sub">${r.planning?"Looking\u2026":""}</div></div>`;let O=new Map;for(let q of r.plan.ops.filter(rt=>rt.kind!=="face"&&rt.kind!=="corners"&&rt.kind!=="finish3d"&&rt.kind!=="rest3d"&&rt.id!=="chamfer")){let rt=G(q),z=O.get(rt)||{o:q,name:rt,n:0};z.n+=q.count||1,O.set(rt,z)}let $=q=>q.n<2?q.name:q.name.replace(/^(Pocket|Step), /,(rt,z)=>`${q.n} ${z.toLowerCase()}s, `);return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-found">${[...O.values()].map(q=>`<div class="ncc-row"><span style="display: flex; align-items: center; gap: 8px"><span class="ncc-swatch" style="background: ${An[q.o.kind]}"></span>${qe($(q))}</span><span class="ncc-ok">\u2713</span></div>`).join("")||'<div class="ncc-row-sub">Nothing to cut from this side.</div>'}</div></div>`}function G(O){let $=O.detail.replace(/ · spiral$/,"");return O.kind==="cutout"?`Outline, ${u(O.zTop)} cut-out`:O.kind==="rough3d"?`3D surface, ${u(O.zTop)} tall`:O.kind==="hole"||O.kind==="drill"?`${O.centers.length>1?`${O.centers.length} holes`:"Hole"}, ${$}`:O.kind==="step"?`Step, ${$}`:O.kind==="chamfer"?`${O.count>1?`${O.count} chamfers`:"Chamfer"}, ${u(O.size)} \xD7 ${Math.round(O.angle*10)/10}\xB0`:`Pocket, ${$.split(" \xB7 ").pop()}`}function Y(O){if(!r.plan)return"";let $=r.plan.warnings.filter(q=>!O||q.kind==="undercut"||q.kind==="sloped"||q.kind==="edges"||q.kind==="surface3d");return!$.length&&O?`<div class="ncc-hint">${en.info}<span>Everything can be cut from the top in one setup.</span></div>`:$.map(q=>`<div class="ncc-hint ${q.kind==="notool"||q.kind==="noball"?"bad":""}">${q.kind==="notool"||q.kind==="noball"?en.warn:en.info}<span>${qe(q.text)}</span></div>`).join("")}function Z(){if(!r.plan)return"";let O=[...new Set(r.plan.ops.filter(q=>q.kind!=="face"&&q.kind!=="corners"&&q.kind!=="finish3d"&&q.kind!=="rest3d"&&q.id!=="chamfer").map(q=>q.kind))],$={pocket:"Pockets",hole:"Holes",drill:"Holes",step:"Steps",cutout:"Outline",rough3d:"3D surface",chamfer:"Chamfers"};return`<div class="ncc-overlay tr">${O.map(q=>`<span class="ncc-chip"><span class="ncc-swatch" style="background: ${An[q]}"></span>${$[q]}</span>`).join("")}</div>
      <div class="ncc-overlay bl"><span class="ncc-chip">Drag to rotate</span><span class="ncc-chip">Scroll to zoom</span><span class="ncc-chip">Click a face to put it on top</span></div>`}let J=null;function j(){if(!r.part)return;Nt=null,jt=null;let O=r.part.positions,$=(r.plan?.ops||[]).filter(q=>q.kind!=="face"&&q.kind!=="corners").flatMap(q=>q.kind==="cutout"?[{loops:q.region,z:q.zTop+.05,color:An.cutout,dashed:!0}]:q.kind==="chamfer"?q.id==="chamfer"?[]:q.show.map(rt=>({loops:rt.loops,z:rt.z+.05,color:An.chamfer})):q.centers&&!q.region?[{loops:q.centers.map(rt=>Lp(rt)),z:q.zTop+.05,color:An[q.kind]}]:[{loops:q.region,z:q.zTop+.05,color:An[q.kind]}]);o.keepCamera=J===O,o.showPart(r.part,$),J=O,o.onFrame=null,o.onPick=async q=>{if(r.loading)return;let rt=r.up;try{await w(q),r.analysis.undercut&&rt!=="custom"&&(!r.sides||r.sides[rt]?.reachable)&&(await w(rt),mt("With that face up, some of the part can\u2019t be reached from the top."))}catch(z){r.error=z.message,R()}}}function K(){let O=r.job,$=r.plan?.stock||da(r.analysis,O),q=Object.entries(Sr).map(([z,wt])=>`<button class="ncc-pick ncc-mat ${O.material===z?"sel":""}" type="button" data-material="${z}"><span class="ncc-mat-swatch" style="background: ${Vs[z]}"></span>${qe(wt.name)}<small>${qe(wt.note)}</small></button>`).join(""),rt=(z,wt,ft)=>`<div class="ncc-field"><label for="ncc-${z}">${wt}</label><input id="ncc-${z}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${z}" value="${r.units==="in"?Math.round(ft/Vn.INCH*1e3)/1e3:Math.round(ft*100)/100}" ${O.stock.fit?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${q}</div></div>
        <div class="ncc-card">
          ${lt("fit","Size the stock to the part",`Adds ${u(O.stock.margin)} on every side and ${u(O.stock.extraTop)} on top`,O.stock.fit)}
          <div class="ncc-fields">${rt("width",`Width X (${r.units})`,$.width)}${rt("depth",`Depth Y (${r.units})`,$.depth)}${rt("thickness",`Thickness Z (${r.units})`,$.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${lt("tabs","Leave tabs to hold the part",O.tabs.enabled?`${h(Et().height)} \xD7 ${u(Et().length)}, so the part stays put until you cut it free`:"The part comes loose at the end",O.tabs.enabled)}
          ${O.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${O.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${O.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${O.tabs.count>=12?"disabled":""}>+</button></div></div>
          ${It("height","Tab thickness","Thinner tabs","Thicker tabs")}
          ${It("length","Tab length","Shorter tabs","Longer tabs")}`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${Ot($)}
          <div style="font-size: 14px">X Y zero: <strong>${qe(gt(O.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${O.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${O.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let lt=(O,$,q,rt)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${qe($)}</div><div class="ncc-row-sub">${qe(q)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${rt}" aria-label="${qe($)}" data-toggle="${O}"></button></div>`;function gt(O){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[O]}let Et=()=>({...Fi(r.job.material),...Object.fromEntries(["height","length"].filter(O=>r.job.tabs[O]!=null).map(O=>[O,r.job.tabs[O]]))}),yt=()=>r.units==="in"?{min:.508,max:10.16,step:.508,grid:.254}:{min:.5,max:10,step:.5,grid:.1};function It(O,$,q,rt){let z=Et()[O];return`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${$}</span><div class="ncc-stepper"><button type="button" data-tabsize="${O}" data-by="-1" aria-label="${q}" ${z<=yt().min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${u(z,r.units==="in"?2:1)}</span><button type="button" data-tabsize="${O}" data-by="1" aria-label="${rt}" ${z>=yt().max-1e-6?"disabled":""}>+</button></div></div>`}function Ot(O){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${h(O.width)} \xD7 ${h(O.depth)} \xD7 ${u(O.thickness)} stock \xB7 tap a point for zero, an arrow to turn the part</div>`}let jt=null;function ne(){let O=r.plan?.stock||da(r.analysis,r.job),$=df.map(z=>({key:z,...$c(O,{xy:z,z:"top"})})),q=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",rt=`${r.part?.positions?.length}|${O.width}|${O.depth}|${O.thickness}`;o.keepCamera=jt===rt,o.showZero({stock:O,part:r.part,points:$,selected:r.job.zero.xy,zFace:r.job.zero.z,color:Vs[r.job.material],accent:q}),jt=rt,J=null,Nt=null,o.onPick=null,o.onMarker=z=>{z!==r.job.zero.xy&&(r.job.zero.xy=z,Ft())},o.onAxis=z=>y(z)}function Te(){let O=r.plan;if(!O)return'<div class="ncc-busy" style="position: static; flex: 1"><span class="ncc-spin"></span>Planning\u2026</div>';let $=O.ops.map(pt=>{let Mt=Ut(pt);return`<div class="ncc-op ${pt.enabled?"":"off"} ${r.focusOp===pt.id?"focus":""}" data-focus="${pt.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${An[pt.kind]} 16%, transparent); color: ${An[pt.kind]}">${en[pt.kind]||en.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${qe(pt.label)}</div><div class="ncc-op-sub ncc-mono">${qe(pt.detail)}</div></div>
        <select class="ncc-select" data-tool="${pt.id}" aria-label="Tool for ${qe(pt.label)}">${Mt.map(bt=>`<option value="${bt.id}" ${bt.id===pt.tool.id?"selected":""}>T${wr(bt,r.numbering)} \xB7 ${qe(bt.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${pt.enabled}" aria-label="${qe(pt.label)}" data-op="${pt.id}"></button>
      </div>`}).join(""),q=pa(O),rt=new Map;for(let pt of O.ops)pt.enabled&&pt.kind!=="face"&&rt.set(pt.tool.id,(rt.get(pt.tool.id)||0)+1);let z=[...rt].sort((pt,Mt)=>Mt[1]-pt[1])[0]?.[0],wt=O.ops.find(pt=>pt.enabled&&pt.tool.id===z)||O.ops.find(pt=>pt.enabled),ft=wt?.feeds,Rt=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(Qn).map(([pt,Mt])=>`<button type="button" class="${r.job.finish===pt?"sel":""}" data-finish="${pt}">${Mt.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${O.ops.some(pt=>pt.kind==="finish3d")?`3D: passes spaced for ${u(fa[r.job.finish],r.units==="in"?4:2)} ridges${r.job.finish==="fast"?"; flat walls without a finishing pass":""}.`:""} ${{fast:"Bigger steps, no finishing pass.",balanced:`Leaves ${u(.2,r.units==="in"?3:1)} on the walls, then a clean finishing pass.`,smooth:"Lighter steps and a finishing pass, for the best walls."}[r.job.finish]}</div>
            ${ft?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${qe(wt.tool.name)}<br>${qe(Sr[r.job.material].name)} \xB7 ${ft.rpm.toLocaleString()} RPM<br>${r.units==="in"?`${h(ft.feed,1)} in/min`:`${ft.feed.toLocaleString()} mm/min`} \xB7 ${u(ft.stepdown,r.units==="in"?3:2)} per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${q.map(pt=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${wr(pt,r.numbering)}</span> ${qe(pt.name)}</span><span class="ncc-slot ${l(pt)?"":"hand"}">${l(pt)?`Slot ${pt.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${q.some(pt=>!pt.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops">${Ae()}<div class="ncc-ops">${$}</div>${Me()}${Y(!1)}<div class="ncc-plan-pair-in">${Rt}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${Rt}</div>
      </div>`}function Me(){let O=r.job.chamfer,$=O?.size>0,q=$?O.size:qi.size,rt=O?.edges||"all",z=$?r.plan.ops.some(wt=>wt.kind==="chamfer")?"A V-bit runs along each top edge of a flat face, after the cut-out.":"No edge can be chamfered: see the notes below.":"Off: edges stay sharp.";return`<div class="ncc-card" style="margin-top: 10px">
        <div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">Chamfer the edges</div><div class="ncc-row-sub">${qe(z)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${$}" aria-label="Chamfer the edges" data-toggle="chamfer"></button></div>
        ${$?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Width</span><div class="ncc-stepper"><button type="button" data-chamfer="-1" aria-label="Narrower chamfer" ${q<=qi.min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${u(q,r.units==="in"?3:1)}</span><button type="button" data-chamfer="1" aria-label="Wider chamfer" ${q>=qi.max-1e-6?"disabled":""}>+</button></div></div>
        <div class="ncc-seg" role="group" aria-label="Which edges">${Object.entries({all:"All edges",outside:"Outside",inside:"Pockets & holes"}).map(([wt,ft])=>`<button type="button" class="${rt===wt?"sel":""}" data-chamfer-edges="${wt}">${ft}</button>`).join("")}</div>`:""}
      </div>`}function Ae(){let O=!!r.plan.mode3d,$=!!r.plan.did3d;return!O&&!(r.plan.curved??r.plan.analysis.sloped)?"":`<div class="ncc-op" style="margin-bottom: 10px">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${An.finish3d} 16%, transparent); color: ${An.finish3d}">${en.finish3d}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">Cut curved faces in 3D</div><div class="ncc-op-sub">${O?$?"Roughed in layers, then a ball end mill follows the surface.":"On, but no end mill is long enough: cut in 2.5D for now.":"Off: sloped and curved faces are left square."}</div></div>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${O}" aria-label="Cut curved faces in 3D" data-toggle="3d"></button>
      </div>`}function Pt(){let $=(r.plan?.ops||[]).filter(q=>q.enabled&&q.kind!=="face").flatMap(q=>{let rt=r.focusOp&&r.focusOp!==q.id;return q.kind==="chamfer"?q.show.map(wt=>({loops:wt.loops,z:wt.z+.05,color:An.chamfer,opacity:rt?.2:1,top:wt.z})):{loops:q.region||(q.centers||[]).map(wt=>Lp(wt)),z:q.kind==="cutout"?q.zTop+.05:Math.max(q.zBottom,0)+.05,color:An[q.kind],dashed:q.kind==="cutout",opacity:rt?.2:1,top:q.zTop}});o.keepCamera=J===r.part?.positions,o.showPart(r.part,$),J=r.part?.positions,Nt=null,jt=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function Ut(O){let $=O.kind==="drill"?["drill"]:O.kind==="face"?["surfacing","flat"]:O.kind==="finish3d"?["ball","flat"]:O.kind==="chamfer"?["vbit","chamfer"]:["flat"],q=r.tools.filter(rt=>$.includes(rt.kind)&&(O.angle==null||Math.abs(rt.angle/2-O.angle)<=1.5)).sort((rt,z)=>z.diameter-rt.diameter);return q.some(rt=>rt.id===O.tool.id)?q:[O.tool,...q]}function ie(){let O=r.result,$=O?.plan,q=$?pa($):[],rt=$?$.ops.filter(z=>z.enabled).reduce((z,wt,ft,Rt)=>z+(ft>0&&Rt[ft-1].tool.id!==wt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${Ve()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${$?Math.max(1,Math.round(O.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${q.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${$?rt:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${Zt()}</div>
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${qe(ue())}${O?` \xB7 ${(O.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${O?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let ue=()=>`${(r.fileName||"part").replace(/\.(step|stp|stl|3mf)$/i,"")}.nc`;function Zt(){let O=r.simChecks;return O?O.items.map($=>`<div class="ncc-check"><span class="ncc-ck ${$.state}">${$.state==="bad"?en.cross:$.state==="info"?"!":en.check}</span><span>${qe($.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${r.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}</div>`}let ut={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null};function Ve(){if(!r.result)return"";let $=r.result.plan.ops.filter(z=>z.enabled&&z.track),q=ut.total||1,rt=$[Math.max(0,ut.opIndexAt?.(ut.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${ut.playing?"Pause":"Play"}">${ut.playing?en.pause:en.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(q)}" aria-valuenow="${Math.round(ut.t)}">
          ${$.map(z=>`<i style="width: ${(z.seconds||0)/q*100}%; background: ${An[z.kind]}"></i>`).join("")}
          <b style="width: ${ut.t/q*100}%"></b><em style="left: ${ut.t/q*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span data-pb="step">${nt($,rt)}</span><span class="ncc-mono" data-pb="clock">${Tc(ut.t)} / ${Tc(q)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([z,wt])=>`<button type="button" style="padding: 6px 8px" class="${ut.speed===z?"sel":""}" data-speed="${z}">${wt}</button>`).join("")}</div>`}function at(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&r.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${r.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let Nt=null;function zt(){if(Nt===r.result){Bt();return}Nt=r.result,J=null,jt=null,o.onMarker=null,o.onPick=null;let O=r.result.plan,$=O.ops.filter(pt=>pt.enabled&&pt.track),q=Qi.cellFor(O.stock,520*520);ut.ops=$,ut.hm=sf(new Qi(O.stock,q)),ut.colors=O.ops.map(pt=>new Ee(An[pt.kind])),ut.stamps=O.ops.map(pt=>Vc(pt.tool,q));let rt=0;for(let pt of $)rt+=pt.track.length/4;ut.moves=new Float32Array(rt*4),ut.opOf=new Uint16Array(rt),ut.cum=new Float64Array(rt);let z=0,wt=0,ft=null,Rt=r.maxRapid||5e3;for(let pt of $){let Mt=O.ops.indexOf(pt);for(let bt=0;bt<pt.track.length;bt+=4,z++){if(ut.moves.set(pt.track.subarray(bt,bt+4),z*4),ut.opOf[z]=Mt,ft){let Wt=Math.hypot(pt.track[bt]-ft[0],pt.track[bt+1]-ft[1],pt.track[bt+2]-ft[2]);wt+=Wt/(pt.track[bt+3]>0?pt.track[bt+3]:Rt)*60}ft=[pt.track[bt],pt.track[bt+1],pt.track[bt+2]],ut.cum[z]=wt}}ut.total=wt,ut.opIndexAt=pt=>{let Mt=Math.min(rt-1,Vt(ut.cum,pt));return $.indexOf(O.ops[ut.opOf[Mt]])},ut.t=0,ut.i=1,ut.cursor=null,ut.toolOp=-1,ut.snaps=[],o.showStock(ut.hm,Vs[O.job.material]||Vs.mdf,r.part);{let pt=ut.hm,Mt=[pt.x0,pt.y0,pt.bottom],bt=[pt.x0+(pt.nx-1)*pt.cell,pt.y0+(pt.ny-1)*pt.cell,pt.top];for(let Wt of $){let Le=Wt.tool.diameter/2;for(let xe=0;xe<Wt.track.length;xe+=4)Wt.track[xe+3]!==0&&(Mt[0]=Math.min(Mt[0],Wt.track[xe]-Le),bt[0]=Math.max(bt[0],Wt.track[xe]+Le),Mt[1]=Math.min(Mt[1],Wt.track[xe+1]-Le),bt[1]=Math.max(bt[1],Wt.track[xe+1]+Le))}o.frame(Mt,bt)}o.showPaths($),r.showPaths=r.showPaths??!1,Bt(),Yt(0),ut.speed=5,ut.rate=Math.max(1,ut.total/600/5),o.onFrame=be,St(O),ut.playing=!1,ct()}function Bt(){o.paths&&(o.paths.visible=!!r.showPaths),o.partGhost&&(o.partGhost.visible=!!r.showPart)}function Vt(O,$){let q=0,rt=O.length;for(;q<rt;){let z=q+rt>>1;O[z]<$?q=z+1:rt=z}return q}let re=O=>({x:ut.moves[O*4],y:ut.moves[O*4+1],z:ut.moves[O*4+2],r:ut.moves[O*4+3]===0});function he(O){let $=ut.hm,q=ut.cum.length,rt=1/0,z=-1,wt=(ft,Rt,pt)=>{let Mt=r.result.plan.ops[pt].tool.diameter/2/$.cell+3,bt=Math.floor((Math.min(ft.y,Rt.y)-$.y0)/$.cell-Mt),Wt=Math.ceil((Math.max(ft.y,Rt.y)-$.y0)/$.cell+Mt);rt=Math.min(rt,Math.max(0,bt)),z=Math.max(z,Math.min($.ny-1,Wt))};for(;ut.i<q&&ut.cum[ut.i]<=O;){ut.opOf[ut.i]!==ut.opOf[ut.i-1]&&!ut.cursor&&X();let ft=ut.cursor||re(ut.i-1),Rt=re(ut.i),pt=ut.opOf[ut.i];Rt.r||(Hc($,r.result.plan.ops[pt].tool,ft,Rt,pt),wt(ft,Rt,pt)),ut.cursor=null,ut.i++}if(ut.i<q&&O>ut.cum[ut.i-1]){let ft=ut.cursor||re(ut.i-1),Rt=re(ut.i),pt=ut.opOf[ut.i],Mt=ut.cum[ut.i-1],bt=(O-Mt)/(ut.cum[ut.i]-Mt||1),Wt=re(ut.i-1),Le={x:Wt.x+(Rt.x-Wt.x)*bt,y:Wt.y+(Rt.y-Wt.y)*bt,z:Wt.z+(Rt.z-Wt.z)*bt};Rt.r||(Hc($,r.result.plan.ops[pt].tool,ft,Le,pt),wt(ft,Le,pt)),ut.cursor=Le}return[rt,z]}function Yt(O){let $=ut.cum.length;if(!$)return;let q=Math.min($-1,Vt(ut.cum,O)),rt=ut.opOf[q];if(rt!==ut.toolOp){let wt=r.result.plan.ops[rt];o.setTool(wt.tool,wt.zTop-wt.zBottom),ut.toolOp=rt}let z=ut.cursor||re(Math.max(0,ut.i-1));o.moveTool(z.x,z.y,z.z)}let ae=0,it=0;function be(O){let $=ae?Math.min(.1,(O-ae)/1e3):0;if(ae=O,!ut.playing||!ut.cum)return;ut.t=Math.min(ut.total,ut.t+$*ut.speed*ut.rate);let[q,rt]=he(ut.t);o.refreshStock(q,rt,ut.colors),Yt(ut.t),ut.t>=ut.total?(ut.playing=!1,ct()):O-it>200&&(it=O,ct())}let oe=["h","op","sx","sy","wx","wy","gap","deep"];function X(){ut.snaps.some(O=>O.i===ut.i)||ut.snaps.push({i:ut.i,data:oe.map(O=>ut.hm[O].slice())})}function P(O){if(O=Math.max(0,Math.min(ut.total,O)),O<ut.t){let $=ut.snaps.filter(q=>ut.cum[q.i-1]<=O).sort((q,rt)=>rt.i-q.i)[0];$?(oe.forEach((q,rt)=>ut.hm[q].set($.data[rt])),ut.i=$.i):(ut.hm.h.fill(ut.hm.top),ut.hm.op.fill(0),ut.hm.sx.fill(0),ut.hm.sy.fill(0),ut.hm.wx.fill(0),ut.hm.wy.fill(0),ut.hm.gap.fill(1/0),ut.hm.deep.fill(-1/0),ut.i=1),ut.cursor=null,he(O),o.refreshStock(0,ut.hm.ny-1,ut.colors)}else{let[$,q]=he(O);o.refreshStock($,q,ut.colors)}ut.t=O,Yt(O),ct()}let nt=(O,$)=>$?`Step ${O.indexOf($)+1} of ${O.length} \xB7 ${qe($.label)} \xB7 T${wr($.tool,r.numbering)}`:"";function ct(){let O=n.querySelector("[data-playbar]");if(!O)return;if(O._result!==r.result||O._total!==ut.total||!O.querySelector("[data-scrub]")){O.innerHTML=Ve(),O._result=r.result,O._total=ut.total;return}let $=r.result.plan.ops.filter(Mt=>Mt.enabled&&Mt.track),q=ut.total||1,rt=`${ut.t/q*100}%`,z=$[Math.max(0,ut.opIndexAt?.(ut.t)??0)],wt=O.querySelector("[data-scrub]");wt.querySelector("b").style.width=rt,wt.querySelector("em").style.left=rt,wt.setAttribute("aria-valuenow",String(Math.round(ut.t)));let ft=(Mt,bt)=>{Mt&&Mt.innerHTML!==bt&&(Mt.innerHTML=bt)};ft(O.querySelector('[data-pb="step"]'),nt($,z)),ft(O.querySelector('[data-pb="clock"]'),`${Tc(ut.t)} / ${Tc(q)}`);let Rt=O.querySelector('[data-act="play"]'),pt=ut.playing?"Pause":"Play";Rt.getAttribute("aria-label")!==pt&&(Rt.setAttribute("aria-label",pt),Rt.innerHTML=ut.playing?en.pause:en.play);for(let Mt of O.querySelectorAll("[data-speed]"))Mt.classList.toggle("sel",+Mt.dataset.speed===ut.speed)}function St(O){setTimeout(()=>{if(r.result?.plan!==O)return;let $=O.ops.map(ft=>({...ft,moves:ft.track?Array.from({length:ft.track.length/4},(Rt,pt)=>({x:ft.track[pt*4],y:ft.track[pt*4+1],z:ft.track[pt*4+2],r:ft.track[pt*4+3]===0,f:ft.track[pt*4+3]})):null})),{collisions:q}=of({...O,ops:$},Qi.cellFor(O.stock,300*300)),rt=[];if(rt.push(q.length?{state:"bad",text:`${q.length} fast move${q.length>1?"s go":" goes"} into the material (${[...new Set(q.map(ft=>O.ops.find(Rt=>Rt.id===ft.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),r.travel){let ft=O.stock.width<=r.travel.x&&O.stock.depth<=r.travel.y;rt.push(ft?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${h(r.travel.x)} \xD7 ${u(r.travel.y)}).`})}let z=pa(O);rt.push(z.every(ft=>ft.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),O.ops.find(ft=>ft.kind==="cutout"&&ft.enabled)&&rt.push({state:"ok",text:`The cut-out goes ${u(O.job.throughDepth,r.units==="in"?3:1)} into the spoilboard${O.job.tabs.enabled?`, with ${O.job.tabs.count} tabs`:""}`}),O.warnings.some(ft=>ft.kind==="undercut")&&rt.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side. Pins (the Spoilboard Toolbox plugin can set them up) put it back in the same place."}),r.simChecks={ok:!rt.some(ft=>ft.state==="bad"),items:rt},R()},50)}let Tt=O=>{if(!(O<1||O>4||O>r.maxStep+1)){if(O===4&&r.step!==4){ut.playing=!1,r.step=4,r.maxStep=4,R(),L(!0);return}r.step=O,r.maxStep=Math.max(r.maxStep,O),O!==4&&(ut.playing=!1),R()}},Ft=()=>{r.maxStep=Math.min(r.maxStep,Math.max(r.step,3)),r.result=null,L(!1)};n.addEventListener("click",O=>{let $=O.target.closest("[data-focus]");if($&&!O.target.closest("button, select")){r.focusOp=r.focusOp===$.dataset.focus?null:$.dataset.focus,R();return}let q=O.target.closest("button, [data-scrub]");if(!q||q.disabled)return;let rt=q.dataset;if(rt.go)return Tt(+rt.go);if(rt.up)return w(rt.up).catch(z=>{r.error=z.message,R()});if(rt.material)return r.job.material=rt.material,Object.assign(r.job.tabs,Fi(rt.material)),Ft();if(rt.tabsize){let z=Et(),wt=yt();return r.job.tabs[rt.tabsize]=Math.max(wt.min,Math.min(wt.max,Math.round((z[rt.tabsize]+ +rt.by*wt.step)/wt.grid)*wt.grid)),Ft()}if(rt.zero)return r.job.zero.xy=rt.zero,Ft();if(rt.z)return r.job.zero.z=rt.z,Ft();if(rt.finish)return r.job.finish=rt.finish,Ft();if(rt.tabs)return r.job.tabs.count=Math.max(1,Math.min(12,r.job.tabs.count+ +rt.tabs)),Ft();if(rt.toggle==="fit"){let z=r.plan?.stock;return r.job.stock.fit=!r.job.stock.fit,!r.job.stock.fit&&z&&Object.assign(r.job.stock,{width:z.width,depth:z.depth,thickness:z.thickness}),Ft()}if(rt.toggle==="lock")return r.lock=!r.lock,A(),R();if(rt.scale==="reset")return _({scale:[1,1,1]});if(rt.scale==="inch")return _({scale:[Vn.INCH,Vn.INCH,Vn.INCH]});if(rt.toggle==="tabs")return r.job.tabs.enabled=!r.job.tabs.enabled,Ft();if(rt.toggle==="chamfer"){let z=r.job.chamfer||{};return r.job.chamfer=z.size>0?{...z,last:z.size,size:0}:{edges:"all",...z,size:z.last||qi.size},Ft()}if(rt.chamfer){let z=r.job.chamfer;return z.size=Math.max(qi.min,Math.min(qi.max,Math.round((z.size+ +rt.chamfer*qi.step)/qi.step)*qi.step)),z.last=z.size,Ft()}if(rt.chamferEdges)return r.job.chamfer.edges=rt.chamferEdges,Ft();if(rt.toggle==="3d")return r.job.surface3d=!r.plan?.mode3d,r.job.disabled={},r.job.toolOverride={},Ft();if(rt.op)return r.job.disabled[rt.op]=!r.job.disabled[rt.op],Ft();if(rt.speed)return ut.speed=+rt.speed,ct();if(rt.act==="play")return ut.t>=ut.total&&P(0),ut.playing=!ut.playing,ae=0,ct();if(rt.act==="paths"){r.showPaths=!r.showPaths,Bt(),q.classList.toggle("on",r.showPaths);return}if(rt.act==="ghost"){r.showPart=!r.showPart,Bt(),q.classList.toggle("on",r.showPart);return}if(rt.act==="close")return $t();if(rt.act==="load")return Ct(q);if(rt.act==="save")return Gt(q)}),n.addEventListener("pointerdown",O=>{if(!O.target.closest("[data-scrub]")||!ut.cum)return;let q=ut.playing;ut.playing=!1;let rt=Rt=>{let pt=n.querySelector("[data-scrub]").getBoundingClientRect();pt.width>0&&P((Rt-pt.left)/pt.width*ut.total)};rt(O.clientX);let z=null,wt=Rt=>{z===null&&requestAnimationFrame(()=>{let pt=z;z=null,rt(pt)}),z=Rt.clientX},ft=()=>{window.removeEventListener("pointermove",wt),window.removeEventListener("pointerup",ft),ut.playing=q&&ut.t<ut.total,ae=0,ct()};window.addEventListener("pointermove",wt),window.addEventListener("pointerup",ft)}),n.addEventListener("change",O=>{let $=O.target;if($.matches("[data-file]"))return g($.files[0]);if($.dataset.tool)return r.job.toolOverride[$.dataset.tool]=+$.value||$.value,Ft();if($.dataset.size){let q=+$.dataset.size,rt=parseFloat(String($.value).replace(",","."));if(!(Number.isFinite(rt)&&rt>0&&r.analysis?.size[q]>0))return R();let z=Vn.toMm(rt,r.units)/r.analysis.size[q];return Math.abs(z-1)<1e-9?R():_({by:r.lock?[z,z,z]:[0,1,2].map(wt=>wt===q?z:1)})}if($.dataset.stock){let q=parseFloat(String($.value).replace(",","."));return Number.isFinite(q)&&q>0&&(r.job.stock[$.dataset.stock]=Vn.toMm(q,r.units)),Ft()}}),n.addEventListener("dragover",O=>{let $=O.target.closest("[data-drop]");$&&(O.preventDefault(),$.classList.add("over"))}),n.addEventListener("dragleave",O=>{let $=O.target.closest("[data-drop]");$&&$.classList.remove("over")}),n.addEventListener("drop",O=>{O.target.closest("[data-drop]")&&(O.preventDefault(),g(O.dataTransfer.files[0]))});function mt(O){r.toast=O,R(),setTimeout(()=>{r.toast===O&&(r.toast="",R())},2600)}async function Ct(O){O.disabled=!0;try{let $=await i.post("/api/gcode-files/load-temp",{filename:ue(),content:r.result.gcode});if(!$.ok)throw new Error(`ncSender said ${$.status}`);$t()}catch($){O.disabled=!1,mt(`Couldn\u2019t load the program: ${$.message}`)}}async function Gt(O){O.disabled=!0;try{let $=await qt(ue()),q=await i.post("/api/gcode-files/file/save",{path:$,content:r.result.gcode});if(!q.ok)throw new Error(`save failed (${q.status})`);mt(`Saved to File Manager: ${$}`)}catch($){mt(`Couldn\u2019t save: ${$.message}`)}O.disabled=!1}async function qt(O){let $=O.replace(/\.nc$/,""),q=new Set,rt=z=>{for(let wt of z||[])wt.type==="folder"?rt(wt.children):q.add(wt.path)};rt((await i.get("/api/gcode-files"))?.tree);for(let z=1;z<1e3;z++){let wt=`ncCAM/${z<2?O:`${$} (${z}).nc`}`;if(!q.has(wt))return wt}throw new Error("too many saved copies")}function $t(){ut.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}R(),window.__nccam={S:r,PLAY:ut,viewer:o,seek:O=>P(O)}}function Lp(n,t=48){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}var Mb,bb,qe,Tc,sn,qi,en,Sb,Dp=_n(()=>{bc();Jc();Ap();Rp();Mb=["Model","Stock & Zero","Operations","Preview & Load"],bb=[["top","Top"],["bottom","Bottom"],["front","Front"],["back","Back"],["left","Left"],["right","Right"]],qe=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Tc=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},sn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,qi={size:1,min:.5,max:6,step:.5},en={close:sn('<path d="M6 6l12 12M18 6L6 18"/>'),next:sn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:sn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:sn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:sn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:sn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:sn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:sn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:sn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:sn('<path d="M3 9h18M3 15h18"/>'),pocket:sn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:sn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:sn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:sn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:sn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:sn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>'),rough3d:sn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/>'),finish3d:sn('<path d="M3 18c3 0 4-9 9-9s6 9 9 9"/>'),chamfer:sn('<path d="M4 20V9l5-5h11v16z"/><path d="M9 4v5H4" stroke-dasharray="2 2"/>'),rest3d:sn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/><circle cx="12" cy="17" r="1.5"/>')},Sb={top:'<path d="M12 3l9 5-9 5-9-5z" fill="currentColor" fill-opacity=".35"/><path d="M3 8v8l9 5 9-5V8"/>',bottom:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M3 16l9-5 9 5" stroke-dasharray="2 2"/>',front:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".35"/><path d="M21 8v8l-9 5"/>',back:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 3v8" stroke-dasharray="2 2"/>',left:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".2"/><path d="M21 8v8l-9 5"/>',right:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5"/><path d="M21 8v8l-9 5V13z" fill="currentColor" fill-opacity=".35"/>'}});var Af=zu(Gu(),1);Jc();var m0={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.02,angularDeflection:.1},ga=[1,0,0,0,1,0,0,0,1],oo=(n,t)=>Array.from({length:9},(e,i)=>n[(i/3|0)*3]*t[i%3]+n[(i/3|0)*3+1]*t[3+i%3]+n[(i/3|0)*3+2]*t[6+i%3]),g0=n=>[n[0],n[3],n[6],n[1],n[4],n[7],n[2],n[5],n[8]],Tf=n=>n?.length===9?n.slice():n?.length===3?[n[0],0,0,0,n[1],0,0,0,n[2]]:ga.slice();function jc(){let n=null,t=null,e=null,i=null,r=null,o=ga.slice(),l=ga.slice(),h=()=>{e=o.every((v,_)=>Math.abs(v-ga[_])<1e-12)?t:{...t,...Ki(t,o)}},u=()=>({solids:e.solids,size:jr(e).size,fileSize:jr(t).size,mesh:t.mesh,scale:o,...Ku(e)}),d=()=>({positions:Float32Array.from(i.positions),indices:i.indices.slice(),faces:i.faces,analysis:Ks(i),rot:l,scale:o}),g={async init({wasmBinary:v}){return r=v,!0},async load({bytes:v,name:_="",scale:x}){if(t=await nf(v,_),t?t.mesh=/\.stl$/i.test(_)?"stl":"3mf":t=Qu(new Uint8Array(v)),!t){n||=await(0,Af.default)({wasmBinary:r});let w=n.ReadStepFile(new Uint8Array(v),m0);if(!w.success||!w.meshes?.length)throw new Error("This file has no solid ncCAM can read. Export it again as STEP (AP214 or AP242), STL or 3MF.");t=Ju(w)}return o=Tf(x),h(),u()},async rescale({by:v,scale:_}){if(v){if(!v.every(x=>x>0))throw new Error("A size must be more than 0.");o=oo(oo(g0(l),oo([v[0],0,0,0,v[1],0,0,0,v[2]],l)),o)}else o=Tf(_);return h(),i&&(i=Ki(e,l)),{...u(),...i?d():{}}},async orient({up:v}){return v?.rot?(l=v.rot.slice(),i=Ki(e,l)):(l=aa(typeof v=="string"?js[v]:v),i=Ki(e,l)),d()},async tilt({normal:v}){let _=aa(v);return l=oo(_,l),i=Ki(i,_),d()},async turn({how:v}){let _=v==="over"?[1,0,0,0,-1,0,0,0,-1]:[-1,0,0,0,-1,0,0,0,1];return l=oo(_,l),i=Ki(i,_),d()},async plan({tools:v,job:_,limits:x,paths:w,gcodeOptions:E,timing:b}){let y=pf(i,v,_,x);w&&xf(y);let L=w?Sf(y,b):0,V=w?bf(y,E):"";for(let A of y.ops)delete A.surface;for(let A of y.ops){if(!A.moves)continue;let R=new Float32Array(A.moves.length*4);A.moves.forEach((D,H)=>{R[H*4]=D.x,R[H*4+1]=D.y,R[H*4+2]=D.z,R[H*4+3]=D.r?0:D.f}),A.track=R,delete A.moves}return{plan:y,gcode:V,seconds:L}}};return async function(_){let x=g[_.type];if(!x)throw new Error(`unknown request ${_.type}`);return x(_)}}var Op="0.1.4-mw06c83j";if(typeof document>"u"){let n=jc();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e&&e.positions?[e.positions.buffer,e.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCam=window.NcCam||{};n.build!==Op&&n.engine&&(n.engine.then(i=>i.worker?.terminate(),()=>{}),n.engine=null),n.build=Op,n.mount=async(i,r)=>{let{mountApp:o}=await Promise.resolve().then(()=>(Dp(),Np));try{o(i,r,await t(r))}catch(l){i.textContent=`ncCAM could not start: ${l.message||l}`}};let t=i=>n.engine||=e(i);async function e(i){let r=await fetch(i.file("lib/occt-import-js.wasm")).then(h=>{if(!h.ok)throw new Error(`lib/occt-import-js.wasm: ${h.status}`);return h.arrayBuffer()}),o=null;try{o=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{o=null}if(o){let h=0,u=new Map;o.onmessage=({data:v})=>{let _=u.get(v.id);_&&(u.delete(v.id),v.ok?_.resolve(v.result):_.reject(new Error(v.error)))};let d=(v,_={},x=[])=>new Promise((w,E)=>{let b=++h;u.set(b,{resolve:w,reject:E}),o.postMessage({..._,id:b,type:v},x)});if(await Promise.race([d("init",{wasmBinary:r}).then(()=>!0),new Promise(v=>setTimeout(()=>v(!1),5e3))]))return d.worker=o,d;o.terminate()}let l=jc();return await l({type:"init",wasmBinary:r}),(h,u={})=>l({...u,type:h})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
