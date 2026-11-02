(()=>{var Vm=Object.create;var vc=Object.defineProperty;var Hm=Object.getOwnPropertyDescriptor;var Gm=Object.getOwnPropertyNames;var Xm=Object.getPrototypeOf,Wm=Object.prototype.hasOwnProperty;var yc=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var vn=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var Cu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Pu=(n,t)=>{for(var e in t)vc(n,e,{get:t[e],enumerable:!0})},Ym=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Gm(t))!Wm.call(n,r)&&r!==e&&vc(n,r,{get:()=>t[r],enumerable:!(i=Hm(t,r))||i.enumerable});return n};var Iu=(n,t,e)=>(e=n!=null?Vm(Xm(n)):{},Ym(t||!n||!n.__esModule?vc(e,"default",{value:n,enumerable:!0}):e,n));var Nu=Cu((Lu,xc)=>{var Ru=(()=>{var n=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(t={}){var e,i=t,r,o,l=new Promise((u,m)=>{r=u,o=m}),h=typeof window=="object",f=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",g=Object.assign({},i),v=[],_="./this.program",b=(u,m)=>{throw m},w="";function T(u){return i.locateFile?i.locateFile(u,w):w+u}var S,x;if(d){var L=yc("fs"),V=yc("path");w=__dirname+"/",x=u=>{u=ie(u)?new URL(u):V.normalize(u);var m=L.readFileSync(u);return m},S=(u,m=!0)=>(u=ie(u)?new URL(u):V.normalize(u),new Promise((M,E)=>{L.readFile(u,m?void 0:"utf8",(F,W)=>{F?E(F):M(m?W.buffer:W)})})),!i.thisProgram&&process.argv.length>1&&(_=process.argv[1].replace(/\\/g,"/")),v=process.argv.slice(2),b=(u,m)=>{throw process.exitCode=u,m}}else(h||f)&&(f?w=self.location.href:typeof document<"u"&&document.currentScript&&(w=document.currentScript.src),n&&(w=n),w.startsWith("blob:")?w="":w=w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1),f&&(x=u=>{var m=new XMLHttpRequest;return m.open("GET",u,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),S=u=>ie(u)?new Promise((m,M)=>{var E=new XMLHttpRequest;E.open("GET",u,!0),E.responseType="arraybuffer",E.onload=()=>{if(E.status==200||E.status==0&&E.response){m(E.response);return}M(E.status)},E.onerror=M,E.send(null)}):fetch(u,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(new Error(m.status+" : "+m.url))));var C=i.print||console.log.bind(console),N=i.printErr||console.error.bind(console);Object.assign(i,g),g=null,i.arguments&&(v=i.arguments),i.thisProgram&&(_=i.thisProgram);var O=i.wasmBinary,z,A=!1,k;function G(u,m){u||ve(m)}var $,J,j,Z,K,lt,dt,bt;function yt(){var u=z.buffer;i.HEAP8=$=new Int8Array(u),i.HEAP16=j=new Int16Array(u),i.HEAPU8=J=new Uint8Array(u),i.HEAPU16=Z=new Uint16Array(u),i.HEAP32=K=new Int32Array(u),i.HEAPU32=lt=new Uint32Array(u),i.HEAPF32=dt=new Float32Array(u),i.HEAPF64=bt=new Float64Array(u)}var wt=[],Pt=[],ht=[],Tt=!1;function Wt(){var u=i.preRun;u&&(typeof u=="function"&&(u=[u]),u.forEach(_t)),Xt(wt)}function Ht(){Tt=!0,!i.noFSInit&&!R.initialized&&R.init(),R.ignorePermissions=!1,mt.init(),Xt(Pt)}function zt(){var u=i.postRun;u&&(typeof u=="function"&&(u=[u]),u.forEach(Rt)),Xt(ht)}function _t(u){wt.unshift(u)}function X(u){Pt.unshift(u)}function Rt(u){ht.unshift(u)}var Qt=0,Ft=null,oe=null;function Ie(u){return u}function pe(u){Qt++,i.monitorRunDependencies?.(Qt)}function ue(u){if(Qt--,i.monitorRunDependencies?.(Qt),Qt==0&&(Ft!==null&&(clearInterval(Ft),Ft=null),oe)){var m=oe;oe=null,m()}}function ve(u){i.onAbort?.(u),u="Aborted("+u+")",N(u),A=!0,u+=". Build with -sASSERTIONS for more info.",Tt&&Eu();var m=new WebAssembly.RuntimeError(u);throw o(m),m}var fe="data:application/octet-stream;base64,",Te=u=>u.startsWith(fe),ie=u=>u.startsWith("file://");function Re(){var u="occt-import-js.wasm";return Te(u)?u:T(u)}var Se;function Ce(u){if(u==Se&&O)return new Uint8Array(O);if(x)return x(u);throw"both async and sync fetching of the wasm failed"}function at(u){return O?Promise.resolve().then(()=>Ce(u)):S(u).then(m=>new Uint8Array(m),()=>Ce(u))}function ke(u,m,M){return at(u).then(E=>WebAssembly.instantiate(E,m)).then(M,E=>{N(`failed to asynchronously prepare wasm: ${E}`),ve(E)})}function me(u,m,M,E){return!u&&typeof WebAssembly.instantiateStreaming=="function"&&!Te(m)&&!ie(m)&&!d&&typeof fetch=="function"?fetch(m,{credentials:"same-origin"}).then(F=>{var W=WebAssembly.instantiateStreaming(F,M);return W.then(E,function(et){return N(`wasm streaming compile failed: ${et}`),N("falling back to ArrayBuffer instantiation"),ke(m,M,E)})}):ke(m,M,E)}function Y(){return{a:Nm}}function P(){var u=Y();function m(E,F){return un=E.exports,z=un._,yt(),zo=un.ba,X(un.$),ue("wasm-instantiate"),un}pe("wasm-instantiate");function M(E){m(E.instance)}if(i.instantiateWasm)try{return i.instantiateWasm(u,m)}catch(E){N(`Module.instantiateWasm callback failed with error: ${E}`),o(E)}return Se??=Re(),me(O,Se,u,M).catch(o),{}}var it,pt;function Et(u){this.name="ExitStatus",this.message=`Program terminated with exit(${u})`,this.status=u}var Xt=u=>{u.forEach(m=>m(i))},$t=i.noExitRuntime||!0,xt={isAbs:u=>u.charAt(0)==="/",splitPath:u=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return m.exec(u).slice(1)},normalizeArray:(u,m)=>{for(var M=0,E=u.length-1;E>=0;E--){var F=u[E];F==="."?u.splice(E,1):F===".."?(u.splice(E,1),M++):M&&(u.splice(E,1),M--)}if(m)for(;M;M--)u.unshift("..");return u},normalize:u=>{var m=xt.isAbs(u),M=u.substr(-1)==="/";return u=xt.normalizeArray(u.split("/").filter(E=>!!E),!m).join("/"),!u&&!m&&(u="."),u&&M&&(u+="/"),(m?"/":"")+u},dirname:u=>{var m=xt.splitPath(u),M=m[0],E=m[1];return!M&&!E?".":(E&&(E=E.substr(0,E.length-1)),M+E)},basename:u=>{if(u==="/")return"/";u=xt.normalize(u),u=u.replace(/\/$/,"");var m=u.lastIndexOf("/");return m===-1?u:u.substr(m+1)},join:(...u)=>xt.normalize(u.join("/")),join2:(u,m)=>xt.normalize(u+"/"+m)},D=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return E=>crypto.getRandomValues(E);if(d)try{var u=yc("crypto"),m=u.randomFillSync;if(m)return E=>u.randomFillSync(E);var M=u.randomBytes;return E=>(E.set(M(E.byteLength)),E)}catch{}ve("initRandomDevice")},q=u=>(q=D())(u),Q={resolve:(...u)=>{for(var m="",M=!1,E=u.length-1;E>=-1&&!M;E--){var F=E>=0?u[E]:R.cwd();if(typeof F!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!F)return"";m=F+"/"+m,M=xt.isAbs(F)}return m=xt.normalizeArray(m.split("/").filter(W=>!!W),!M).join("/"),(M?"/":"")+m||"."},relative:(u,m)=>{u=Q.resolve(u).substr(1),m=Q.resolve(m).substr(1);function M(kt){for(var jt=0;jt<kt.length&&kt[jt]==="";jt++);for(var ne=kt.length-1;ne>=0&&kt[ne]==="";ne--);return jt>ne?[]:kt.slice(jt,ne-jt+1)}for(var E=M(u.split("/")),F=M(m.split("/")),W=Math.min(E.length,F.length),et=W,ot=0;ot<W;ot++)if(E[ot]!==F[ot]){et=ot;break}for(var St=[],ot=et;ot<E.length;ot++)St.push("..");return St=St.concat(F.slice(et)),St.join("/")}},rt=typeof TextDecoder<"u"?new TextDecoder:void 0,ut=(u,m=0,M=NaN)=>{for(var E=m+M,F=m;u[F]&&!(F>=E);)++F;if(F-m>16&&u.buffer&&rt)return rt.decode(u.subarray(m,F));for(var W="";m<F;){var et=u[m++];if(!(et&128)){W+=String.fromCharCode(et);continue}var ot=u[m++]&63;if((et&224)==192){W+=String.fromCharCode((et&31)<<6|ot);continue}var St=u[m++]&63;if((et&240)==224?et=(et&15)<<12|ot<<6|St:et=(et&7)<<18|ot<<12|St<<6|u[m++]&63,et<65536)W+=String.fromCharCode(et);else{var kt=et-65536;W+=String.fromCharCode(55296|kt>>10,56320|kt&1023)}}return W},Dt=[],Lt=u=>{for(var m=0,M=0;M<u.length;++M){var E=u.charCodeAt(M);E<=127?m++:E<=2047?m+=2:E>=55296&&E<=57343?(m+=4,++M):m+=3}return m},Gt=(u,m,M,E)=>{if(!(E>0))return 0;for(var F=M,W=M+E-1,et=0;et<u.length;++et){var ot=u.charCodeAt(et);if(ot>=55296&&ot<=57343){var St=u.charCodeAt(++et);ot=65536+((ot&1023)<<10)|St&1023}if(ot<=127){if(M>=W)break;m[M++]=ot}else if(ot<=2047){if(M+1>=W)break;m[M++]=192|ot>>6,m[M++]=128|ot&63}else if(ot<=65535){if(M+2>=W)break;m[M++]=224|ot>>12,m[M++]=128|ot>>6&63,m[M++]=128|ot&63}else{if(M+3>=W)break;m[M++]=240|ot>>18,m[M++]=128|ot>>12&63,m[M++]=128|ot>>6&63,m[M++]=128|ot&63}}return m[M]=0,M-F};function H(u,m,M){var E=M>0?M:Lt(u)+1,F=new Array(E),W=Gt(u,F,0,F.length);return m&&(F.length=W),F}var It=()=>{if(!Dt.length){var u=null;if(d){var m=256,M=Buffer.alloc(m),E=0,F=process.stdin.fd;try{E=L.readSync(F,M,0,m)}catch(W){if(W.toString().includes("EOF"))E=0;else throw W}E>0&&(u=M.slice(0,E).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(u=window.prompt("Input: "),u!==null&&(u+=`
`));if(!u)return null;Dt=H(u,!0)}return Dt.shift()},mt={ttys:[],init(){},shutdown(){},register(u,m){mt.ttys[u]={input:[],output:[],ops:m},R.registerDevice(u,mt.stream_ops)},stream_ops:{open(u){var m=mt.ttys[u.node.rdev];if(!m)throw new R.ErrnoError(43);u.tty=m,u.seekable=!1},close(u){u.tty.ops.fsync(u.tty)},fsync(u){u.tty.ops.fsync(u.tty)},read(u,m,M,E,F){if(!u.tty||!u.tty.ops.get_char)throw new R.ErrnoError(60);for(var W=0,et=0;et<E;et++){var ot;try{ot=u.tty.ops.get_char(u.tty)}catch{throw new R.ErrnoError(29)}if(ot===void 0&&W===0)throw new R.ErrnoError(6);if(ot==null)break;W++,m[M+et]=ot}return W&&(u.node.timestamp=Date.now()),W},write(u,m,M,E,F){if(!u.tty||!u.tty.ops.put_char)throw new R.ErrnoError(60);try{for(var W=0;W<E;W++)u.tty.ops.put_char(u.tty,m[M+W])}catch{throw new R.ErrnoError(29)}return E&&(u.node.timestamp=Date.now()),W}},default_tty_ops:{get_char(u){return It()},put_char(u,m){m===null||m===10?(C(ut(u.output)),u.output=[]):m!=0&&u.output.push(m)},fsync(u){u.output&&u.output.length>0&&(C(ut(u.output)),u.output=[])},ioctl_tcgets(u){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(u,m,M){return 0},ioctl_tiocgwinsz(u){return[24,80]}},default_tty1_ops:{put_char(u,m){m===null||m===10?(N(ut(u.output)),u.output=[]):m!=0&&u.output.push(m)},fsync(u){u.output&&u.output.length>0&&(N(ut(u.output)),u.output=[])}}},Ut=(u,m)=>{J.fill(0,u,u+m)},Yt=(u,m)=>Math.ceil(u/m)*m,Nt=u=>{u=Yt(u,65536);var m=wu(65536,u);return m&&Ut(m,u),m},Bt={ops_table:null,mount(u){return Bt.createNode(null,"/",16895,0)},createNode(u,m,M,E){if(R.isBlkdev(M)||R.isFIFO(M))throw new R.ErrnoError(63);Bt.ops_table||={dir:{node:{getattr:Bt.node_ops.getattr,setattr:Bt.node_ops.setattr,lookup:Bt.node_ops.lookup,mknod:Bt.node_ops.mknod,rename:Bt.node_ops.rename,unlink:Bt.node_ops.unlink,rmdir:Bt.node_ops.rmdir,readdir:Bt.node_ops.readdir,symlink:Bt.node_ops.symlink},stream:{llseek:Bt.stream_ops.llseek}},file:{node:{getattr:Bt.node_ops.getattr,setattr:Bt.node_ops.setattr},stream:{llseek:Bt.stream_ops.llseek,read:Bt.stream_ops.read,write:Bt.stream_ops.write,allocate:Bt.stream_ops.allocate,mmap:Bt.stream_ops.mmap,msync:Bt.stream_ops.msync}},link:{node:{getattr:Bt.node_ops.getattr,setattr:Bt.node_ops.setattr,readlink:Bt.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Bt.node_ops.getattr,setattr:Bt.node_ops.setattr},stream:R.chrdev_stream_ops}};var F=R.createNode(u,m,M,E);return R.isDir(F.mode)?(F.node_ops=Bt.ops_table.dir.node,F.stream_ops=Bt.ops_table.dir.stream,F.contents={}):R.isFile(F.mode)?(F.node_ops=Bt.ops_table.file.node,F.stream_ops=Bt.ops_table.file.stream,F.usedBytes=0,F.contents=null):R.isLink(F.mode)?(F.node_ops=Bt.ops_table.link.node,F.stream_ops=Bt.ops_table.link.stream):R.isChrdev(F.mode)&&(F.node_ops=Bt.ops_table.chrdev.node,F.stream_ops=Bt.ops_table.chrdev.stream),F.timestamp=Date.now(),u&&(u.contents[m]=F,u.timestamp=F.timestamp),F},getFileDataAsTypedArray(u){return u.contents?u.contents.subarray?u.contents.subarray(0,u.usedBytes):new Uint8Array(u.contents):new Uint8Array(0)},expandFileStorage(u,m){var M=u.contents?u.contents.length:0;if(!(M>=m)){var E=1024*1024;m=Math.max(m,M*(M<E?2:1.125)>>>0),M!=0&&(m=Math.max(m,256));var F=u.contents;u.contents=new Uint8Array(m),u.usedBytes>0&&u.contents.set(F.subarray(0,u.usedBytes),0)}},resizeFileStorage(u,m){if(u.usedBytes!=m)if(m==0)u.contents=null,u.usedBytes=0;else{var M=u.contents;u.contents=new Uint8Array(m),M&&u.contents.set(M.subarray(0,Math.min(m,u.usedBytes))),u.usedBytes=m}},node_ops:{getattr(u){var m={};return m.dev=R.isChrdev(u.mode)?u.id:1,m.ino=u.id,m.mode=u.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=u.rdev,R.isDir(u.mode)?m.size=4096:R.isFile(u.mode)?m.size=u.usedBytes:R.isLink(u.mode)?m.size=u.link.length:m.size=0,m.atime=new Date(u.timestamp),m.mtime=new Date(u.timestamp),m.ctime=new Date(u.timestamp),m.blksize=4096,m.blocks=Math.ceil(m.size/m.blksize),m},setattr(u,m){m.mode!==void 0&&(u.mode=m.mode),m.timestamp!==void 0&&(u.timestamp=m.timestamp),m.size!==void 0&&Bt.resizeFileStorage(u,m.size)},lookup(u,m){throw R.genericErrors[44]},mknod(u,m,M,E){return Bt.createNode(u,m,M,E)},rename(u,m,M){if(R.isDir(u.mode)){var E;try{E=R.lookupNode(m,M)}catch{}if(E)for(var F in E.contents)throw new R.ErrnoError(55)}delete u.parent.contents[u.name],u.parent.timestamp=Date.now(),u.name=M,m.contents[M]=u,m.timestamp=u.parent.timestamp},unlink(u,m){delete u.contents[m],u.timestamp=Date.now()},rmdir(u,m){var M=R.lookupNode(u,m);for(var E in M.contents)throw new R.ErrnoError(55);delete u.contents[m],u.timestamp=Date.now()},readdir(u){var m=[".",".."];for(var M of Object.keys(u.contents))m.push(M);return m},symlink(u,m,M){var E=Bt.createNode(u,m,41471,0);return E.link=M,E},readlink(u){if(!R.isLink(u.mode))throw new R.ErrnoError(28);return u.link}},stream_ops:{read(u,m,M,E,F){var W=u.node.contents;if(F>=u.node.usedBytes)return 0;var et=Math.min(u.node.usedBytes-F,E);if(et>8&&W.subarray)m.set(W.subarray(F,F+et),M);else for(var ot=0;ot<et;ot++)m[M+ot]=W[F+ot];return et},write(u,m,M,E,F,W){if(m.buffer===$.buffer&&(W=!1),!E)return 0;var et=u.node;if(et.timestamp=Date.now(),m.subarray&&(!et.contents||et.contents.subarray)){if(W)return et.contents=m.subarray(M,M+E),et.usedBytes=E,E;if(et.usedBytes===0&&F===0)return et.contents=m.slice(M,M+E),et.usedBytes=E,E;if(F+E<=et.usedBytes)return et.contents.set(m.subarray(M,M+E),F),E}if(Bt.expandFileStorage(et,F+E),et.contents.subarray&&m.subarray)et.contents.set(m.subarray(M,M+E),F);else for(var ot=0;ot<E;ot++)et.contents[F+ot]=m[M+ot];return et.usedBytes=Math.max(et.usedBytes,F+E),E},llseek(u,m,M){var E=m;if(M===1?E+=u.position:M===2&&R.isFile(u.node.mode)&&(E+=u.node.usedBytes),E<0)throw new R.ErrnoError(28);return E},allocate(u,m,M){Bt.expandFileStorage(u.node,m+M),u.node.usedBytes=Math.max(u.node.usedBytes,m+M)},mmap(u,m,M,E,F){if(!R.isFile(u.node.mode))throw new R.ErrnoError(43);var W,et,ot=u.node.contents;if(!(F&2)&&ot&&ot.buffer===$.buffer)et=!1,W=ot.byteOffset;else{if(et=!0,W=Nt(m),!W)throw new R.ErrnoError(48);ot&&((M>0||M+m<ot.length)&&(ot.subarray?ot=ot.subarray(M,M+m):ot=Array.prototype.slice.call(ot,M,M+m)),$.set(ot,W))}return{ptr:W,allocated:et}},msync(u,m,M,E,F){return Bt.stream_ops.write(u,m,0,E,M,!1),0}}},re=(u,m,M,E)=>{var F=E?"":`al ${u}`;S(u).then(W=>{m(new Uint8Array(W)),F&&ue(F)},W=>{if(M)M();else throw`Loading data file "${u}" failed.`}),F&&pe(F)},ze=(u,m,M,E,F,W)=>{R.createDataFile(u,m,M,E,F,W)},De=i.preloadPlugins||[],En=(u,m,M,E)=>{typeof Browser<"u"&&Browser.init();var F=!1;return De.forEach(W=>{F||W.canHandle(m)&&(W.handle(u,m,M,E),F=!0)}),F},In=(u,m,M,E,F,W,et,ot,St,kt)=>{var jt=m?Q.resolve(xt.join2(u,m)):u,ne=`cp ${jt}`;function he(le){function xe(Be){kt?.(),ot||ze(u,m,Be,E,F,St),W?.(),ue(ne)}En(le,jt,xe,()=>{et?.(),ue(ne)})||xe(le)}pe(ne),typeof M=="string"?re(M,he,et):he(M)},Fs=u=>{var m={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},M=m[u];if(typeof M>"u")throw new Error(`Unknown file open mode: ${u}`);return M},gr=(u,m)=>{var M=0;return u&&(M|=365),m&&(M|=146),M},R={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(u){this.name="ErrnoError",this.errno=u}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(u){this.node=u}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(u){this.shared.flags=u}get position(){return this.shared.position}set position(u){this.shared.position=u}},FSNode:class{constructor(u,m,M,E){u||(u=this),this.parent=u,this.mount=u.mount,this.mounted=null,this.id=R.nextInode++,this.name=m,this.mode=M,this.node_ops={},this.stream_ops={},this.rdev=E,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(u){u?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(u){u?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return R.isDir(this.mode)}get isDevice(){return R.isChrdev(this.mode)}},lookupPath(u,m={}){if(u=Q.resolve(u),!u)return{path:"",node:null};var M={follow_mount:!0,recurse_count:0};if(m=Object.assign(M,m),m.recurse_count>8)throw new R.ErrnoError(32);for(var E=u.split("/").filter(ne=>!!ne),F=R.root,W="/",et=0;et<E.length;et++){var ot=et===E.length-1;if(ot&&m.parent)break;if(F=R.lookupNode(F,E[et]),W=xt.join2(W,E[et]),R.isMountpoint(F)&&(!ot||ot&&m.follow_mount)&&(F=F.mounted.root),!ot||m.follow)for(var St=0;R.isLink(F.mode);){var kt=R.readlink(W);W=Q.resolve(xt.dirname(W),kt);var jt=R.lookupPath(W,{recurse_count:m.recurse_count+1});if(F=jt.node,St++>40)throw new R.ErrnoError(32)}}return{path:W,node:F}},getPath(u){for(var m;;){if(R.isRoot(u)){var M=u.mount.mountpoint;return m?M[M.length-1]!=="/"?`${M}/${m}`:M+m:M}m=m?`${u.name}/${m}`:u.name,u=u.parent}},hashName(u,m){for(var M=0,E=0;E<m.length;E++)M=(M<<5)-M+m.charCodeAt(E)|0;return(u+M>>>0)%R.nameTable.length},hashAddNode(u){var m=R.hashName(u.parent.id,u.name);u.name_next=R.nameTable[m],R.nameTable[m]=u},hashRemoveNode(u){var m=R.hashName(u.parent.id,u.name);if(R.nameTable[m]===u)R.nameTable[m]=u.name_next;else for(var M=R.nameTable[m];M;){if(M.name_next===u){M.name_next=u.name_next;break}M=M.name_next}},lookupNode(u,m){var M=R.mayLookup(u);if(M)throw new R.ErrnoError(M);for(var E=R.hashName(u.id,m),F=R.nameTable[E];F;F=F.name_next){var W=F.name;if(F.parent.id===u.id&&W===m)return F}return R.lookup(u,m)},createNode(u,m,M,E){var F=new R.FSNode(u,m,M,E);return R.hashAddNode(F),F},destroyNode(u){R.hashRemoveNode(u)},isRoot(u){return u===u.parent},isMountpoint(u){return!!u.mounted},isFile(u){return(u&61440)===32768},isDir(u){return(u&61440)===16384},isLink(u){return(u&61440)===40960},isChrdev(u){return(u&61440)===8192},isBlkdev(u){return(u&61440)===24576},isFIFO(u){return(u&61440)===4096},isSocket(u){return(u&49152)===49152},flagsToPermissionString(u){var m=["r","w","rw"][u&3];return u&512&&(m+="w"),m},nodePermissions(u,m){return R.ignorePermissions?0:m.includes("r")&&!(u.mode&292)||m.includes("w")&&!(u.mode&146)||m.includes("x")&&!(u.mode&73)?2:0},mayLookup(u){if(!R.isDir(u.mode))return 54;var m=R.nodePermissions(u,"x");return m||(u.node_ops.lookup?0:2)},mayCreate(u,m){try{var M=R.lookupNode(u,m);return 20}catch{}return R.nodePermissions(u,"wx")},mayDelete(u,m,M){var E;try{E=R.lookupNode(u,m)}catch(W){return W.errno}var F=R.nodePermissions(u,"wx");if(F)return F;if(M){if(!R.isDir(E.mode))return 54;if(R.isRoot(E)||R.getPath(E)===R.cwd())return 10}else if(R.isDir(E.mode))return 31;return 0},mayOpen(u,m){return u?R.isLink(u.mode)?32:R.isDir(u.mode)&&(R.flagsToPermissionString(m)!=="r"||m&512)?31:R.nodePermissions(u,R.flagsToPermissionString(m)):44},MAX_OPEN_FDS:4096,nextfd(){for(var u=0;u<=R.MAX_OPEN_FDS;u++)if(!R.streams[u])return u;throw new R.ErrnoError(33)},getStreamChecked(u){var m=R.getStream(u);if(!m)throw new R.ErrnoError(8);return m},getStream:u=>R.streams[u],createStream(u,m=-1){return u=Object.assign(new R.FSStream,u),m==-1&&(m=R.nextfd()),u.fd=m,R.streams[m]=u,u},closeStream(u){R.streams[u]=null},dupStream(u,m=-1){var M=R.createStream(u,m);return M.stream_ops?.dup?.(M),M},chrdev_stream_ops:{open(u){var m=R.getDevice(u.node.rdev);u.stream_ops=m.stream_ops,u.stream_ops.open?.(u)},llseek(){throw new R.ErrnoError(70)}},major:u=>u>>8,minor:u=>u&255,makedev:(u,m)=>u<<8|m,registerDevice(u,m){R.devices[u]={stream_ops:m}},getDevice:u=>R.devices[u],getMounts(u){for(var m=[],M=[u];M.length;){var E=M.pop();m.push(E),M.push(...E.mounts)}return m},syncfs(u,m){typeof u=="function"&&(m=u,u=!1),R.syncFSRequests++,R.syncFSRequests>1&&N(`warning: ${R.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var M=R.getMounts(R.root.mount),E=0;function F(et){return R.syncFSRequests--,m(et)}function W(et){if(et)return W.errored?void 0:(W.errored=!0,F(et));++E>=M.length&&F(null)}M.forEach(et=>{if(!et.type.syncfs)return W(null);et.type.syncfs(et,u,W)})},mount(u,m,M){var E=M==="/",F=!M,W;if(E&&R.root)throw new R.ErrnoError(10);if(!E&&!F){var et=R.lookupPath(M,{follow_mount:!1});if(M=et.path,W=et.node,R.isMountpoint(W))throw new R.ErrnoError(10);if(!R.isDir(W.mode))throw new R.ErrnoError(54)}var ot={type:u,opts:m,mountpoint:M,mounts:[]},St=u.mount(ot);return St.mount=ot,ot.root=St,E?R.root=St:W&&(W.mounted=ot,W.mount&&W.mount.mounts.push(ot)),St},unmount(u){var m=R.lookupPath(u,{follow_mount:!1});if(!R.isMountpoint(m.node))throw new R.ErrnoError(28);var M=m.node,E=M.mounted,F=R.getMounts(E);Object.keys(R.nameTable).forEach(et=>{for(var ot=R.nameTable[et];ot;){var St=ot.name_next;F.includes(ot.mount)&&R.destroyNode(ot),ot=St}}),M.mounted=null;var W=M.mount.mounts.indexOf(E);M.mount.mounts.splice(W,1)},lookup(u,m){return u.node_ops.lookup(u,m)},mknod(u,m,M){var E=R.lookupPath(u,{parent:!0}),F=E.node,W=xt.basename(u);if(!W||W==="."||W==="..")throw new R.ErrnoError(28);var et=R.mayCreate(F,W);if(et)throw new R.ErrnoError(et);if(!F.node_ops.mknod)throw new R.ErrnoError(63);return F.node_ops.mknod(F,W,m,M)},create(u,m){return m=m!==void 0?m:438,m&=4095,m|=32768,R.mknod(u,m,0)},mkdir(u,m){return m=m!==void 0?m:511,m&=1023,m|=16384,R.mknod(u,m,0)},mkdirTree(u,m){for(var M=u.split("/"),E="",F=0;F<M.length;++F)if(M[F]){E+="/"+M[F];try{R.mkdir(E,m)}catch(W){if(W.errno!=20)throw W}}},mkdev(u,m,M){return typeof M>"u"&&(M=m,m=438),m|=8192,R.mknod(u,m,M)},symlink(u,m){if(!Q.resolve(u))throw new R.ErrnoError(44);var M=R.lookupPath(m,{parent:!0}),E=M.node;if(!E)throw new R.ErrnoError(44);var F=xt.basename(m),W=R.mayCreate(E,F);if(W)throw new R.ErrnoError(W);if(!E.node_ops.symlink)throw new R.ErrnoError(63);return E.node_ops.symlink(E,F,u)},rename(u,m){var M=xt.dirname(u),E=xt.dirname(m),F=xt.basename(u),W=xt.basename(m),et,ot,St;if(et=R.lookupPath(u,{parent:!0}),ot=et.node,et=R.lookupPath(m,{parent:!0}),St=et.node,!ot||!St)throw new R.ErrnoError(44);if(ot.mount!==St.mount)throw new R.ErrnoError(75);var kt=R.lookupNode(ot,F),jt=Q.relative(u,E);if(jt.charAt(0)!==".")throw new R.ErrnoError(28);if(jt=Q.relative(m,M),jt.charAt(0)!==".")throw new R.ErrnoError(55);var ne;try{ne=R.lookupNode(St,W)}catch{}if(kt!==ne){var he=R.isDir(kt.mode),le=R.mayDelete(ot,F,he);if(le)throw new R.ErrnoError(le);if(le=ne?R.mayDelete(St,W,he):R.mayCreate(St,W),le)throw new R.ErrnoError(le);if(!ot.node_ops.rename)throw new R.ErrnoError(63);if(R.isMountpoint(kt)||ne&&R.isMountpoint(ne))throw new R.ErrnoError(10);if(St!==ot&&(le=R.nodePermissions(ot,"w"),le))throw new R.ErrnoError(le);R.hashRemoveNode(kt);try{ot.node_ops.rename(kt,St,W),kt.parent=St}catch(xe){throw xe}finally{R.hashAddNode(kt)}}},rmdir(u){var m=R.lookupPath(u,{parent:!0}),M=m.node,E=xt.basename(u),F=R.lookupNode(M,E),W=R.mayDelete(M,E,!0);if(W)throw new R.ErrnoError(W);if(!M.node_ops.rmdir)throw new R.ErrnoError(63);if(R.isMountpoint(F))throw new R.ErrnoError(10);M.node_ops.rmdir(M,E),R.destroyNode(F)},readdir(u){var m=R.lookupPath(u,{follow:!0}),M=m.node;if(!M.node_ops.readdir)throw new R.ErrnoError(54);return M.node_ops.readdir(M)},unlink(u){var m=R.lookupPath(u,{parent:!0}),M=m.node;if(!M)throw new R.ErrnoError(44);var E=xt.basename(u),F=R.lookupNode(M,E),W=R.mayDelete(M,E,!1);if(W)throw new R.ErrnoError(W);if(!M.node_ops.unlink)throw new R.ErrnoError(63);if(R.isMountpoint(F))throw new R.ErrnoError(10);M.node_ops.unlink(M,E),R.destroyNode(F)},readlink(u){var m=R.lookupPath(u),M=m.node;if(!M)throw new R.ErrnoError(44);if(!M.node_ops.readlink)throw new R.ErrnoError(28);return Q.resolve(R.getPath(M.parent),M.node_ops.readlink(M))},stat(u,m){var M=R.lookupPath(u,{follow:!m}),E=M.node;if(!E)throw new R.ErrnoError(44);if(!E.node_ops.getattr)throw new R.ErrnoError(63);return E.node_ops.getattr(E)},lstat(u){return R.stat(u,!0)},chmod(u,m,M){var E;if(typeof u=="string"){var F=R.lookupPath(u,{follow:!M});E=F.node}else E=u;if(!E.node_ops.setattr)throw new R.ErrnoError(63);E.node_ops.setattr(E,{mode:m&4095|E.mode&-4096,timestamp:Date.now()})},lchmod(u,m){R.chmod(u,m,!0)},fchmod(u,m){var M=R.getStreamChecked(u);R.chmod(M.node,m)},chown(u,m,M,E){var F;if(typeof u=="string"){var W=R.lookupPath(u,{follow:!E});F=W.node}else F=u;if(!F.node_ops.setattr)throw new R.ErrnoError(63);F.node_ops.setattr(F,{timestamp:Date.now()})},lchown(u,m,M){R.chown(u,m,M,!0)},fchown(u,m,M){var E=R.getStreamChecked(u);R.chown(E.node,m,M)},truncate(u,m){if(m<0)throw new R.ErrnoError(28);var M;if(typeof u=="string"){var E=R.lookupPath(u,{follow:!0});M=E.node}else M=u;if(!M.node_ops.setattr)throw new R.ErrnoError(63);if(R.isDir(M.mode))throw new R.ErrnoError(31);if(!R.isFile(M.mode))throw new R.ErrnoError(28);var F=R.nodePermissions(M,"w");if(F)throw new R.ErrnoError(F);M.node_ops.setattr(M,{size:m,timestamp:Date.now()})},ftruncate(u,m){var M=R.getStreamChecked(u);if((M.flags&2097155)===0)throw new R.ErrnoError(28);R.truncate(M.node,m)},utime(u,m,M){var E=R.lookupPath(u,{follow:!0}),F=E.node;F.node_ops.setattr(F,{timestamp:Math.max(m,M)})},open(u,m,M){if(u==="")throw new R.ErrnoError(44);m=typeof m=="string"?Fs(m):m,m&64?(M=typeof M>"u"?438:M,M=M&4095|32768):M=0;var E;if(typeof u=="object")E=u;else{u=xt.normalize(u);try{var F=R.lookupPath(u,{follow:!(m&131072)});E=F.node}catch{}}var W=!1;if(m&64)if(E){if(m&128)throw new R.ErrnoError(20)}else E=R.mknod(u,M,0),W=!0;if(!E)throw new R.ErrnoError(44);if(R.isChrdev(E.mode)&&(m&=-513),m&65536&&!R.isDir(E.mode))throw new R.ErrnoError(54);if(!W){var et=R.mayOpen(E,m);if(et)throw new R.ErrnoError(et)}m&512&&!W&&R.truncate(E,0),m&=-131713;var ot=R.createStream({node:E,path:R.getPath(E),flags:m,seekable:!0,position:0,stream_ops:E.stream_ops,ungotten:[],error:!1});return ot.stream_ops.open&&ot.stream_ops.open(ot),i.logReadFiles&&!(m&1)&&(u in R.readFiles||(R.readFiles[u]=1)),ot},close(u){if(R.isClosed(u))throw new R.ErrnoError(8);u.getdents&&(u.getdents=null);try{u.stream_ops.close&&u.stream_ops.close(u)}catch(m){throw m}finally{R.closeStream(u.fd)}u.fd=null},isClosed(u){return u.fd===null},llseek(u,m,M){if(R.isClosed(u))throw new R.ErrnoError(8);if(!u.seekable||!u.stream_ops.llseek)throw new R.ErrnoError(70);if(M!=0&&M!=1&&M!=2)throw new R.ErrnoError(28);return u.position=u.stream_ops.llseek(u,m,M),u.ungotten=[],u.position},read(u,m,M,E,F){if(E<0||F<0)throw new R.ErrnoError(28);if(R.isClosed(u))throw new R.ErrnoError(8);if((u.flags&2097155)===1)throw new R.ErrnoError(8);if(R.isDir(u.node.mode))throw new R.ErrnoError(31);if(!u.stream_ops.read)throw new R.ErrnoError(28);var W=typeof F<"u";if(!W)F=u.position;else if(!u.seekable)throw new R.ErrnoError(70);var et=u.stream_ops.read(u,m,M,E,F);return W||(u.position+=et),et},write(u,m,M,E,F,W){if(E<0||F<0)throw new R.ErrnoError(28);if(R.isClosed(u))throw new R.ErrnoError(8);if((u.flags&2097155)===0)throw new R.ErrnoError(8);if(R.isDir(u.node.mode))throw new R.ErrnoError(31);if(!u.stream_ops.write)throw new R.ErrnoError(28);u.seekable&&u.flags&1024&&R.llseek(u,0,2);var et=typeof F<"u";if(!et)F=u.position;else if(!u.seekable)throw new R.ErrnoError(70);var ot=u.stream_ops.write(u,m,M,E,F,W);return et||(u.position+=ot),ot},allocate(u,m,M){if(R.isClosed(u))throw new R.ErrnoError(8);if(m<0||M<=0)throw new R.ErrnoError(28);if((u.flags&2097155)===0)throw new R.ErrnoError(8);if(!R.isFile(u.node.mode)&&!R.isDir(u.node.mode))throw new R.ErrnoError(43);if(!u.stream_ops.allocate)throw new R.ErrnoError(138);u.stream_ops.allocate(u,m,M)},mmap(u,m,M,E,F){if((E&2)!==0&&(F&2)===0&&(u.flags&2097155)!==2)throw new R.ErrnoError(2);if((u.flags&2097155)===1)throw new R.ErrnoError(2);if(!u.stream_ops.mmap)throw new R.ErrnoError(43);if(!m)throw new R.ErrnoError(28);return u.stream_ops.mmap(u,m,M,E,F)},msync(u,m,M,E,F){return u.stream_ops.msync?u.stream_ops.msync(u,m,M,E,F):0},ioctl(u,m,M){if(!u.stream_ops.ioctl)throw new R.ErrnoError(59);return u.stream_ops.ioctl(u,m,M)},readFile(u,m={}){if(m.flags=m.flags||0,m.encoding=m.encoding||"binary",m.encoding!=="utf8"&&m.encoding!=="binary")throw new Error(`Invalid encoding type "${m.encoding}"`);var M,E=R.open(u,m.flags),F=R.stat(u),W=F.size,et=new Uint8Array(W);return R.read(E,et,0,W,0),m.encoding==="utf8"?M=ut(et):m.encoding==="binary"&&(M=et),R.close(E),M},writeFile(u,m,M={}){M.flags=M.flags||577;var E=R.open(u,M.flags,M.mode);if(typeof m=="string"){var F=new Uint8Array(Lt(m)+1),W=Gt(m,F,0,F.length);R.write(E,F,0,W,void 0,M.canOwn)}else if(ArrayBuffer.isView(m))R.write(E,m,0,m.byteLength,void 0,M.canOwn);else throw new Error("Unsupported data type");R.close(E)},cwd:()=>R.currentPath,chdir(u){var m=R.lookupPath(u,{follow:!0});if(m.node===null)throw new R.ErrnoError(44);if(!R.isDir(m.node.mode))throw new R.ErrnoError(54);var M=R.nodePermissions(m.node,"x");if(M)throw new R.ErrnoError(M);R.currentPath=m.path},createDefaultDirectories(){R.mkdir("/tmp"),R.mkdir("/home"),R.mkdir("/home/web_user")},createDefaultDevices(){R.mkdir("/dev"),R.registerDevice(R.makedev(1,3),{read:()=>0,write:(E,F,W,et,ot)=>et}),R.mkdev("/dev/null",R.makedev(1,3)),mt.register(R.makedev(5,0),mt.default_tty_ops),mt.register(R.makedev(6,0),mt.default_tty1_ops),R.mkdev("/dev/tty",R.makedev(5,0)),R.mkdev("/dev/tty1",R.makedev(6,0));var u=new Uint8Array(1024),m=0,M=()=>(m===0&&(m=q(u).byteLength),u[--m]);R.createDevice("/dev","random",M),R.createDevice("/dev","urandom",M),R.mkdir("/dev/shm"),R.mkdir("/dev/shm/tmp")},createSpecialDirectories(){R.mkdir("/proc");var u=R.mkdir("/proc/self");R.mkdir("/proc/self/fd"),R.mount({mount(){var m=R.createNode(u,"fd",16895,73);return m.node_ops={lookup(M,E){var F=+E,W=R.getStreamChecked(F),et={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>W.path}};return et.parent=et,et}},m}},{},"/proc/self/fd")},createStandardStreams(u,m,M){u?R.createDevice("/dev","stdin",u):R.symlink("/dev/tty","/dev/stdin"),m?R.createDevice("/dev","stdout",null,m):R.symlink("/dev/tty","/dev/stdout"),M?R.createDevice("/dev","stderr",null,M):R.symlink("/dev/tty1","/dev/stderr");var E=R.open("/dev/stdin",0),F=R.open("/dev/stdout",1),W=R.open("/dev/stderr",1)},staticInit(){[44].forEach(u=>{R.genericErrors[u]=new R.ErrnoError(u),R.genericErrors[u].stack="<generic error, no stack>"}),R.nameTable=new Array(4096),R.mount(Bt,{},"/"),R.createDefaultDirectories(),R.createDefaultDevices(),R.createSpecialDirectories(),R.filesystems={MEMFS:Bt}},init(u,m,M){R.initialized=!0,u??=i.stdin,m??=i.stdout,M??=i.stderr,R.createStandardStreams(u,m,M)},quit(){R.initialized=!1;for(var u=0;u<R.streams.length;u++){var m=R.streams[u];m&&R.close(m)}},findObject(u,m){var M=R.analyzePath(u,m);return M.exists?M.object:null},analyzePath(u,m){try{var M=R.lookupPath(u,{follow:!m});u=M.path}catch{}var E={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var M=R.lookupPath(u,{parent:!0});E.parentExists=!0,E.parentPath=M.path,E.parentObject=M.node,E.name=xt.basename(u),M=R.lookupPath(u,{follow:!m}),E.exists=!0,E.path=M.path,E.object=M.node,E.name=M.node.name,E.isRoot=M.path==="/"}catch(F){E.error=F.errno}return E},createPath(u,m,M,E){u=typeof u=="string"?u:R.getPath(u);for(var F=m.split("/").reverse();F.length;){var W=F.pop();if(W){var et=xt.join2(u,W);try{R.mkdir(et)}catch{}u=et}}return et},createFile(u,m,M,E,F){var W=xt.join2(typeof u=="string"?u:R.getPath(u),m),et=gr(E,F);return R.create(W,et)},createDataFile(u,m,M,E,F,W){var et=m;u&&(u=typeof u=="string"?u:R.getPath(u),et=m?xt.join2(u,m):u);var ot=gr(E,F),St=R.create(et,ot);if(M){if(typeof M=="string"){for(var kt=new Array(M.length),jt=0,ne=M.length;jt<ne;++jt)kt[jt]=M.charCodeAt(jt);M=kt}R.chmod(St,ot|146);var he=R.open(St,577);R.write(he,M,0,M.length,0,W),R.close(he),R.chmod(St,ot)}},createDevice(u,m,M,E){var F=xt.join2(typeof u=="string"?u:R.getPath(u),m),W=gr(!!M,!!E);R.createDevice.major??=64;var et=R.makedev(R.createDevice.major++,0);return R.registerDevice(et,{open(ot){ot.seekable=!1},close(ot){E?.buffer?.length&&E(10)},read(ot,St,kt,jt,ne){for(var he=0,le=0;le<jt;le++){var xe;try{xe=M()}catch{throw new R.ErrnoError(29)}if(xe===void 0&&he===0)throw new R.ErrnoError(6);if(xe==null)break;he++,St[kt+le]=xe}return he&&(ot.node.timestamp=Date.now()),he},write(ot,St,kt,jt,ne){for(var he=0;he<jt;he++)try{E(St[kt+he])}catch{throw new R.ErrnoError(29)}return jt&&(ot.node.timestamp=Date.now()),he}}),R.mkdev(F,W,et)},forceLoadFile(u){if(u.isDevice||u.isFolder||u.link||u.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{u.contents=x(u.url),u.usedBytes=u.contents.length}catch{throw new R.ErrnoError(29)}},createLazyFile(u,m,M,E,F){class W{constructor(){this.lengthKnown=!1,this.chunks=[]}get(le){if(!(le>this.length-1||le<0)){var xe=le%this.chunkSize,Be=le/this.chunkSize|0;return this.getter(Be)[xe]}}setDataGetter(le){this.getter=le}cacheLength(){var le=new XMLHttpRequest;if(le.open("HEAD",M,!1),le.send(null),!(le.status>=200&&le.status<300||le.status===304))throw new Error("Couldn't load "+M+". Status: "+le.status);var xe=Number(le.getResponseHeader("Content-length")),Be,_n=(Be=le.getResponseHeader("Accept-Ranges"))&&Be==="bytes",Qe=(Be=le.getResponseHeader("Content-Encoding"))&&Be==="gzip",jn=1024*1024;_n||(jn=xe);var Kn=(di,Gr)=>{if(di>Gr)throw new Error("invalid range ("+di+", "+Gr+") or no bytes requested!");if(Gr>xe-1)throw new Error("only "+xe+" bytes available! programmer error!");var pn=new XMLHttpRequest;if(pn.open("GET",M,!1),xe!==jn&&pn.setRequestHeader("Range","bytes="+di+"-"+Gr),pn.responseType="arraybuffer",pn.overrideMimeType&&pn.overrideMimeType("text/plain; charset=x-user-defined"),pn.send(null),!(pn.status>=200&&pn.status<300||pn.status===304))throw new Error("Couldn't load "+M+". Status: "+pn.status);return pn.response!==void 0?new Uint8Array(pn.response||[]):H(pn.responseText||"",!0)},Vs=this;Vs.setDataGetter(di=>{var Gr=di*jn,pn=(di+1)*jn-1;if(pn=Math.min(pn,xe-1),typeof Vs.chunks[di]>"u"&&(Vs.chunks[di]=Kn(Gr,pn)),typeof Vs.chunks[di]>"u")throw new Error("doXHR failed!");return Vs.chunks[di]}),(Qe||!xe)&&(jn=xe=1,xe=this.getter(0).length,jn=xe,C("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=xe,this._chunkSize=jn,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!f)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var et=new W,ot={isDevice:!1,contents:et}}else var ot={isDevice:!1,url:M};var St=R.createFile(u,m,ot,E,F);ot.contents?St.contents=ot.contents:ot.url&&(St.contents=null,St.url=ot.url),Object.defineProperties(St,{usedBytes:{get:function(){return this.contents.length}}});var kt={},jt=Object.keys(St.stream_ops);jt.forEach(he=>{var le=St.stream_ops[he];kt[he]=(...xe)=>(R.forceLoadFile(St),le(...xe))});function ne(he,le,xe,Be,_n){var Qe=he.node.contents;if(_n>=Qe.length)return 0;var jn=Math.min(Qe.length-_n,Be);if(Qe.slice)for(var Kn=0;Kn<jn;Kn++)le[xe+Kn]=Qe[_n+Kn];else for(var Kn=0;Kn<jn;Kn++)le[xe+Kn]=Qe.get(_n+Kn);return jn}return kt.read=(he,le,xe,Be,_n)=>(R.forceLoadFile(St),ne(he,le,xe,Be,_n)),kt.mmap=(he,le,xe,Be,_n)=>{R.forceLoadFile(St);var Qe=Nt(le);if(!Qe)throw new R.ErrnoError(48);return ne(he,$,Qe,le,xe),{ptr:Qe,allocated:!0}},St.stream_ops=kt,St}},Ei=(u,m)=>u?ut(J,u,m):"",Ne={DEFAULT_POLLMASK:5,calculateAt(u,m,M){if(xt.isAbs(m))return m;var E;if(u===-100)E=R.cwd();else{var F=Ne.getStreamFromFD(u);E=F.path}if(m.length==0){if(!M)throw new R.ErrnoError(44);return E}return xt.join2(E,m)},doStat(u,m,M){var E=u(m);K[M>>2]=E.dev,K[M+4>>2]=E.mode,lt[M+8>>2]=E.nlink,K[M+12>>2]=E.uid,K[M+16>>2]=E.gid,K[M+20>>2]=E.rdev,pt=[E.size>>>0,(it=E.size,+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],K[M+24>>2]=pt[0],K[M+28>>2]=pt[1],K[M+32>>2]=4096,K[M+36>>2]=E.blocks;var F=E.atime.getTime(),W=E.mtime.getTime(),et=E.ctime.getTime();return pt=[Math.floor(F/1e3)>>>0,(it=Math.floor(F/1e3),+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],K[M+40>>2]=pt[0],K[M+44>>2]=pt[1],lt[M+48>>2]=F%1e3*1e3*1e3,pt=[Math.floor(W/1e3)>>>0,(it=Math.floor(W/1e3),+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],K[M+56>>2]=pt[0],K[M+60>>2]=pt[1],lt[M+64>>2]=W%1e3*1e3*1e3,pt=[Math.floor(et/1e3)>>>0,(it=Math.floor(et/1e3),+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],K[M+72>>2]=pt[0],K[M+76>>2]=pt[1],lt[M+80>>2]=et%1e3*1e3*1e3,pt=[E.ino>>>0,(it=E.ino,+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],K[M+88>>2]=pt[0],K[M+92>>2]=pt[1],0},doMsync(u,m,M,E,F){if(!R.isFile(m.node.mode))throw new R.ErrnoError(43);if(E&2)return 0;var W=J.slice(u,u+M);R.msync(m,W,F,M,E)},getStreamFromFD(u){var m=R.getStreamChecked(u);return m},varargs:void 0,getStr(u){var m=Ei(u);return m}};function Dr(u,m){try{return u=Ne.getStr(u),R.chmod(u,m),0}catch(M){if(typeof R>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function Or(u,m,M,E){try{if(m=Ne.getStr(m),m=Ne.calculateAt(u,m),M&-8)return-28;var F=R.lookupPath(m,{follow:!0}),W=F.node;if(!W)return-44;var et="";return M&4&&(et+="r"),M&2&&(et+="w"),M&1&&(et+="x"),et&&R.nodePermissions(W,et)?-2:0}catch(ot){if(typeof R>"u"||ot.name!=="ErrnoError")throw ot;return-ot.errno}}function Rn(){var u=K[+Ne.varargs>>2];return Ne.varargs+=4,u}var Xn=Rn;function Fr(u,m,M){Ne.varargs=M;try{var E=Ne.getStreamFromFD(u);switch(m){case 0:{var F=Rn();if(F<0)return-28;for(;R.streams[F];)F++;var W;return W=R.dupStream(E,F),W.fd}case 1:case 2:return 0;case 3:return E.flags;case 4:{var F=Rn();return E.flags|=F,0}case 12:{var F=Xn(),et=0;return j[F+et>>1]=2,0}case 13:case 14:return 0}return-28}catch(ot){if(typeof R>"u"||ot.name!=="ErrnoError")throw ot;return-ot.errno}}function ui(u,m){try{var M=Ne.getStreamFromFD(u);return Ne.doStat(R.stat,M.path,m)}catch(E){if(typeof R>"u"||E.name!=="ErrnoError")throw E;return-E.errno}}function Ti(u,m,M){Ne.varargs=M;try{var E=Ne.getStreamFromFD(u);switch(m){case 21509:return E.tty?0:-59;case 21505:{if(!E.tty)return-59;if(E.tty.ops.ioctl_tcgets){var F=E.tty.ops.ioctl_tcgets(E),W=Xn();K[W>>2]=F.c_iflag||0,K[W+4>>2]=F.c_oflag||0,K[W+8>>2]=F.c_cflag||0,K[W+12>>2]=F.c_lflag||0;for(var et=0;et<32;et++)$[W+et+17]=F.c_cc[et]||0;return 0}return 0}case 21510:case 21511:case 21512:return E.tty?0:-59;case 21506:case 21507:case 21508:{if(!E.tty)return-59;if(E.tty.ops.ioctl_tcsets){for(var W=Xn(),ot=K[W>>2],St=K[W+4>>2],kt=K[W+8>>2],jt=K[W+12>>2],ne=[],et=0;et<32;et++)ne.push($[W+et+17]);return E.tty.ops.ioctl_tcsets(E.tty,m,{c_iflag:ot,c_oflag:St,c_cflag:kt,c_lflag:jt,c_cc:ne})}return 0}case 21519:{if(!E.tty)return-59;var W=Xn();return K[W>>2]=0,0}case 21520:return E.tty?-28:-59;case 21531:{var W=Xn();return R.ioctl(E,m,W)}case 21523:{if(!E.tty)return-59;if(E.tty.ops.ioctl_tiocgwinsz){var he=E.tty.ops.ioctl_tiocgwinsz(E.tty),W=Xn();j[W>>1]=he[0],j[W+2>>1]=he[1]}return 0}case 21524:return E.tty?0:-59;case 21515:return E.tty?0:-59;default:return-28}}catch(le){if(typeof R>"u"||le.name!=="ErrnoError")throw le;return-le.errno}}function Ur(u,m){try{return u=Ne.getStr(u),Ne.doStat(R.lstat,u,m)}catch(M){if(typeof R>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function zi(u,m,M,E){try{m=Ne.getStr(m);var F=E&256,W=E&4096;return E=E&-6401,m=Ne.calculateAt(u,m,W),Ne.doStat(F?R.lstat:R.stat,m,M)}catch(et){if(typeof R>"u"||et.name!=="ErrnoError")throw et;return-et.errno}}function Br(u,m,M,E){Ne.varargs=E;try{m=Ne.getStr(m),m=Ne.calculateAt(u,m);var F=E?Rn():0;return R.open(m,M,F).fd}catch(W){if(typeof R>"u"||W.name!=="ErrnoError")throw W;return-W.errno}}function kr(u){try{return u=Ne.getStr(u),R.rmdir(u),0}catch(m){if(typeof R>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}function Us(u,m){try{return u=Ne.getStr(u),Ne.doStat(R.stat,u,m)}catch(M){if(typeof R>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function fi(u,m,M){try{return m=Ne.getStr(m),m=Ne.calculateAt(u,m),M===0?R.unlink(m):M===512?R.rmdir(m):ve("Invalid flags passed to unlinkat"),0}catch(E){if(typeof R>"u"||E.name!=="ErrnoError")throw E;return-E.errno}}var Bs=()=>{ve("")},ks=(u,m,M,E,F)=>{},zr=()=>{for(var u=new Array(256),m=0;m<256;++m)u[m]=String.fromCharCode(m);U=u},U,st=u=>{for(var m="",M=u;J[M];)m+=U[J[M++]];return m},Mt={},gt={},vt={},Jt,Vt=u=>{throw new Jt(u)},Zt,ee=u=>{throw new Zt(u)},se=(u,m,M)=>{u.forEach(ot=>vt[ot]=m);function E(ot){var St=M(ot);St.length!==u.length&&ee("Mismatched type converter count");for(var kt=0;kt<u.length;++kt)ge(u[kt],St[kt])}var F=new Array(m.length),W=[],et=0;m.forEach((ot,St)=>{gt.hasOwnProperty(ot)?F[St]=gt[ot]:(W.push(ot),Mt.hasOwnProperty(ot)||(Mt[ot]=[]),Mt[ot].push(()=>{F[St]=gt[ot],++et,et===W.length&&E(F)}))}),W.length===0&&E(F)};function qt(u,m,M={}){var E=m.name;if(u||Vt(`type "${E}" must have a positive integer typeid pointer`),gt.hasOwnProperty(u)){if(M.ignoreDuplicateRegistrations)return;Vt(`Cannot register type '${E}' twice`)}if(gt[u]=m,delete vt[u],Mt.hasOwnProperty(u)){var F=Mt[u];delete Mt[u],F.forEach(W=>W())}}function ge(u,m,M={}){return qt(u,m,M)}var te=8,Oe=(u,m,M,E)=>{m=st(m),ge(u,{name:m,fromWireType:function(F){return!!F},toWireType:function(F,W){return W?M:E},argPackAdvance:te,readValueFromPointer:function(F){return this.fromWireType(J[F])},destructorFunction:null})},qe=[],Pe=[],s=u=>{u>9&&--Pe[u+1]===0&&(Pe[u]=void 0,qe.push(u))},a=()=>Pe.length/2-5-qe.length,c=()=>{Pe.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=a},p={toValue:u=>(u||Vt("Cannot use deleted val. handle = "+u),Pe[u]),toHandle:u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let m=qe.pop()||Pe.length;return Pe[m]=u,Pe[m+1]=1,m}}}};function y(u){return this.fromWireType(lt[u>>2])}var I={name:"emscripten::val",fromWireType:u=>{var m=p.toValue(u);return s(u),m},toWireType:(u,m)=>p.toHandle(m),argPackAdvance:te,readValueFromPointer:y,destructorFunction:null},B=u=>ge(u,I),tt=(u,m)=>{switch(m){case 4:return function(M){return this.fromWireType(dt[M>>2])};case 8:return function(M){return this.fromWireType(bt[M>>3])};default:throw new TypeError(`invalid float width (${m}): ${u}`)}},nt=(u,m,M)=>{m=st(m),ge(u,{name:m,fromWireType:E=>E,toWireType:(E,F)=>F,argPackAdvance:te,readValueFromPointer:tt(m,M),destructorFunction:null})},ft=(u,m)=>Object.defineProperty(m,"name",{value:u}),Ct=u=>{for(;u.length;){var m=u.pop(),M=u.pop();M(m)}};function At(u){for(var m=1;m<u.length;++m)if(u[m]!==null&&u[m].destructorFunction===void 0)return!0;return!1}function Ot(u,m){if(!(u instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof u} which is not a function`);var M=ft(u.name||"unknownFunctionName",function(){});M.prototype=u.prototype;var E=new M,F=u.apply(E,m);return F instanceof Object?F:E}function ae(u,m,M,E){var F=At(u),W=u.length-2,et=[],ot=["fn"];m&&ot.push("thisWired");for(var St=0;St<W;++St)et.push(`arg${St}`),ot.push(`arg${St}Wired`);et=et.join(","),ot=ot.join(",");var kt=`return function (${et}) {
`;F&&(kt+=`var destructors = [];
`);var jt=F?"destructors":"null",ne=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];m&&(kt+=`var thisWired = classParam['toWireType'](${jt}, this);
`);for(var St=0;St<W;++St)kt+=`var arg${St}Wired = argType${St}['toWireType'](${jt}, arg${St});
`,ne.push(`argType${St}`);if(kt+=(M||E?"var rv = ":"")+`invoker(${ot});
`,F)kt+=`runDestructors(destructors);
`;else for(var St=m?1:2;St<u.length;++St){var he=St===1?"thisWired":"arg"+(St-2)+"Wired";u[St].destructorFunction!==null&&(kt+=`${he}_dtor(${he});
`,ne.push(`${he}_dtor`))}return M&&(kt+=`var ret = retType['fromWireType'](rv);
return ret;
`),kt+=`}
`,[ne,kt]}function ye(u,m,M,E,F,W){var et=m.length;et<2&&Vt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ot=m[1]!==null&&M!==null,St=At(m),kt=m[0].name!=="void",jt=[u,Vt,E,F,Ct,m[0],m[1]],ne=0;ne<et-2;++ne)jt.push(m[ne+2]);if(!St)for(var ne=ot?1:2;ne<m.length;++ne)m[ne].destructorFunction!==null&&jt.push(m[ne].destructorFunction);let[he,le]=ae(m,ot,kt,W);he.push(le);var xe=Ot(Function,he)(...jt);return ft(u,xe)}var we=(u,m,M)=>{if(u[m].overloadTable===void 0){var E=u[m];u[m]=function(...F){return u[m].overloadTable.hasOwnProperty(F.length)||Vt(`Function '${M}' called with an invalid number of arguments (${F.length}) - expects one of (${u[m].overloadTable})!`),u[m].overloadTable[F.length].apply(this,F)},u[m].overloadTable=[],u[m].overloadTable[E.argCount]=E}},He=(u,m,M)=>{i.hasOwnProperty(u)?((M===void 0||i[u].overloadTable!==void 0&&i[u].overloadTable[M]!==void 0)&&Vt(`Cannot register public name '${u}' twice`),we(i,u,u),i.hasOwnProperty(M)&&Vt(`Cannot register multiple overloads of a function with the same number of arguments (${M})!`),i[u].overloadTable[M]=m):(i[u]=m,M!==void 0&&(i[u].numArguments=M))},gn=(u,m)=>{for(var M=[],E=0;E<u;E++)M.push(lt[m+E*4>>2]);return M},Wn=(u,m,M)=>{i.hasOwnProperty(u)||ee("Replacing nonexistent public symbol"),i[u].overloadTable!==void 0&&M!==void 0?i[u].overloadTable[M]=m:(i[u]=m,i[u].argCount=M)},Vi=(u,m,M)=>{u=u.replace(/p/g,"i");var E=i["dynCall_"+u];return E(m,...M)},Vr=[],zo,Ai=u=>{var m=Vr[u];return m||(u>=Vr.length&&(Vr.length=u+1),Vr[u]=m=zo.get(u)),m},yp=(u,m,M=[])=>{if(u.includes("j"))return Vi(u,m,M);var E=Ai(m)(...M);return E},xp=(u,m)=>(...M)=>yp(u,m,M),Mp=(u,m)=>{u=st(u);function M(){return u.includes("j")?xp(u,m):Ai(m)}var E=M();return typeof E!="function"&&Vt(`unknown function pointer with signature ${u}: ${m}`),E},Sp=(u,m)=>{var M=ft(m,function(E){this.name=m,this.message=E;var F=new Error(E).stack;F!==void 0&&(this.stack=this.toString()+`
`+F.replace(/^Error(:[^\n]*)?\n/,""))});return M.prototype=Object.create(u.prototype),M.prototype.constructor=M,M.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},M},mu,gu=u=>{var m=Su(u),M=st(m);return Ci(m),M},bp=(u,m)=>{var M=[],E={};function F(W){if(!E[W]&&!gt[W]){if(vt[W]){vt[W].forEach(F);return}M.push(W),E[W]=!0}}throw m.forEach(F),new mu(`${u}: `+M.map(gu).join([", "]))},wp=u=>{u=u.trim();let m=u.indexOf("(");return m!==-1?u.substr(0,m):u},Ep=(u,m,M,E,F,W,et,ot)=>{var St=gn(m,M);u=st(u),u=wp(u),F=Mp(E,F),He(u,function(){bp(`Cannot call ${u} due to unbound types`,St)},m-1),se([],St,kt=>{var jt=[kt[0],null].concat(kt.slice(1));return Wn(u,ye(u,jt,null,F,W,et),m-1),[]})},Tp=(u,m,M)=>{switch(m){case 1:return M?E=>$[E]:E=>J[E];case 2:return M?E=>j[E>>1]:E=>Z[E>>1];case 4:return M?E=>K[E>>2]:E=>lt[E>>2];default:throw new TypeError(`invalid integer width (${m}): ${u}`)}},Ap=(u,m,M,E,F)=>{m=st(m),F===-1&&(F=4294967295);var W=jt=>jt;if(E===0){var et=32-8*M;W=jt=>jt<<et>>>et}var ot=m.includes("unsigned"),St=(jt,ne)=>{},kt;ot?kt=function(jt,ne){return St(ne,this.name),ne>>>0}:kt=function(jt,ne){return St(ne,this.name),ne},ge(u,{name:m,fromWireType:W,toWireType:kt,argPackAdvance:te,readValueFromPointer:Tp(m,M,E!==0),destructorFunction:null})},Cp=(u,m,M)=>{var E=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],F=E[m];function W(et){var ot=lt[et>>2],St=lt[et+4>>2];return new F($.buffer,St,ot)}M=st(M),ge(u,{name:M,fromWireType:W,argPackAdvance:te,readValueFromPointer:W},{ignoreDuplicateRegistrations:!0})},Hr=(u,m,M)=>Gt(u,J,m,M),Pp=(u,m)=>{m=st(m);var M=m==="std::string";ge(u,{name:m,fromWireType(E){var F=lt[E>>2],W=E+4,et;if(M)for(var ot=W,St=0;St<=F;++St){var kt=W+St;if(St==F||J[kt]==0){var jt=kt-ot,ne=Ei(ot,jt);et===void 0?et=ne:(et+="\0",et+=ne),ot=kt+1}}else{for(var he=new Array(F),St=0;St<F;++St)he[St]=String.fromCharCode(J[W+St]);et=he.join("")}return Ci(E),et},toWireType(E,F){F instanceof ArrayBuffer&&(F=new Uint8Array(F));var W,et=typeof F=="string";et||F instanceof Uint8Array||F instanceof Uint8ClampedArray||F instanceof Int8Array||Vt("Cannot pass non-string to std::string"),M&&et?W=Lt(F):W=F.length;var ot=_c(4+W+1),St=ot+4;if(lt[ot>>2]=W,M&&et)Hr(F,St,W+1);else if(et)for(var kt=0;kt<W;++kt){var jt=F.charCodeAt(kt);jt>255&&(Ci(St),Vt("String has UTF-16 code units that do not fit in 8 bits")),J[St+kt]=jt}else for(var kt=0;kt<W;++kt)J[St+kt]=F[kt];return E!==null&&E.push(Ci,ot),ot},argPackAdvance:te,readValueFromPointer:y,destructorFunction(E){Ci(E)}})},_u=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Ip=(u,m)=>{for(var M=u,E=M>>1,F=E+m/2;!(E>=F)&&Z[E];)++E;if(M=E<<1,M-u>32&&_u)return _u.decode(J.subarray(u,M));for(var W="",et=0;!(et>=m/2);++et){var ot=j[u+et*2>>1];if(ot==0)break;W+=String.fromCharCode(ot)}return W},Rp=(u,m,M)=>{if(M??=2147483647,M<2)return 0;M-=2;for(var E=m,F=M<u.length*2?M/2:u.length,W=0;W<F;++W){var et=u.charCodeAt(W);j[m>>1]=et,m+=2}return j[m>>1]=0,m-E},Lp=u=>u.length*2,Np=(u,m)=>{for(var M=0,E="";!(M>=m/4);){var F=K[u+M*4>>2];if(F==0)break;if(++M,F>=65536){var W=F-65536;E+=String.fromCharCode(55296|W>>10,56320|W&1023)}else E+=String.fromCharCode(F)}return E},Dp=(u,m,M)=>{if(M??=2147483647,M<4)return 0;for(var E=m,F=E+M-4,W=0;W<u.length;++W){var et=u.charCodeAt(W);if(et>=55296&&et<=57343){var ot=u.charCodeAt(++W);et=65536+((et&1023)<<10)|ot&1023}if(K[m>>2]=et,m+=4,m+4>F)break}return K[m>>2]=0,m-E},Op=u=>{for(var m=0,M=0;M<u.length;++M){var E=u.charCodeAt(M);E>=55296&&E<=57343&&++M,m+=4}return m},Fp=(u,m,M)=>{M=st(M);var E,F,W,et;m===2?(E=Ip,F=Rp,et=Lp,W=ot=>Z[ot>>1]):m===4&&(E=Np,F=Dp,et=Op,W=ot=>lt[ot>>2]),ge(u,{name:M,fromWireType:ot=>{for(var St=lt[ot>>2],kt,jt=ot+4,ne=0;ne<=St;++ne){var he=ot+4+ne*m;if(ne==St||W(he)==0){var le=he-jt,xe=E(jt,le);kt===void 0?kt=xe:(kt+="\0",kt+=xe),jt=he+m}}return Ci(ot),kt},toWireType:(ot,St)=>{typeof St!="string"&&Vt(`Cannot pass non-string to C++ string type ${M}`);var kt=et(St),jt=_c(4+kt+m);return lt[jt>>2]=kt/m,F(St,jt+4,kt+m),ot!==null&&ot.push(Ci,jt),jt},argPackAdvance:te,readValueFromPointer:y,destructorFunction(ot){Ci(ot)}})},Up=(u,m)=>{m=st(m),ge(u,{isVoid:!0,name:m,argPackAdvance:0,fromWireType:()=>{},toWireType:(M,E)=>{}})},Bp=1,kp=()=>Bp,vu=u=>{for(var m=u.split("."),M=0;M<4;M++){var E=Number(m[M]);if(isNaN(E))return null;m[M]=E}return(m[0]|m[1]<<8|m[2]<<16|m[3]<<24)>>>0},Vo=u=>parseInt(u),zp=u=>{var m,M,E,F,W=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,et=[];if(!W.test(u))return null;if(u==="::")return[0,0,0,0,0,0,0,0];for(u.startsWith("::")?u=u.replace("::","Z:"):u=u.replace("::",":Z:"),u.indexOf(".")>0?(u=u.replace(new RegExp("[.]","g"),":"),m=u.split(":"),m[m.length-4]=Vo(m[m.length-4])+Vo(m[m.length-3])*256,m[m.length-3]=Vo(m[m.length-2])+Vo(m[m.length-1])*256,m=m.slice(0,m.length-2)):m=u.split(":"),E=0,F=0,M=0;M<m.length;M++)if(typeof m[M]=="string")if(m[M]==="Z"){for(F=0;F<8-m.length+1;F++)et[M+F]=0;E=F-1}else et[M+E]=bu(parseInt(m[M],16));else et[M+E]=m[M];return[et[1]<<16|et[0],et[3]<<16|et[2],et[5]<<16|et[4],et[7]<<16|et[6]]},Hi={address_map:{id:1,addrs:{},names:{}},lookup_name(u){var m=vu(u);if(m!==null||(m=zp(u),m!==null))return u;var M;if(Hi.address_map.addrs[u])M=Hi.address_map.addrs[u];else{var E=Hi.address_map.id++;G(E<65535,"exceeded max address mappings of 65535"),M="172.29."+(E&255)+"."+(E&65280),Hi.address_map.names[M]=u,Hi.address_map.addrs[u]=M}return M},lookup_addr(u){return Hi.address_map.names[u]?Hi.address_map.names[u]:null}},Vp=u=>{var m=Ei(u);return vu(Hi.lookup_name(m))},Hp=(u,m,M)=>J.copyWithin(u,m,m+M),fc=(u,m)=>{var M=gt[u];return M===void 0&&Vt(`${m} has unknown type ${gu(u)}`),M},yu=(u,m,M)=>{var E=[],F=u.toWireType(E,M);return E.length&&(lt[m>>2]=p.toHandle(E)),F},Gp=(u,m,M)=>(u=p.toValue(u),m=fc(m,"emval::as"),yu(m,M,u)),Xp={},dc=u=>{var m=Xp[u];return m===void 0?st(u):m},pc=[],Wp=(u,m,M,E,F)=>(u=pc[u],m=p.toValue(m),M=dc(M),u(m,m[M],E,F)),xu=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),Yp=u=>u===0?p.toHandle(xu()):(u=dc(u),p.toHandle(xu()[u])),$p=u=>{var m=pc.length;return pc.push(u),m},qp=(u,m)=>{for(var M=new Array(u),E=0;E<u;++E)M[E]=fc(lt[m+E*4>>2],"parameter "+E);return M},jM=Reflect.construct,Zp=(u,m,M)=>{var E=qp(u,m),F=E.shift();u--;var W=`return function (obj, func, destructorsRef, args) {
`,et=0,ot=[];M===0&&ot.push("obj");for(var St=["retType"],kt=[F],jt=0;jt<u;++jt)ot.push("arg"+jt),St.push("argType"+jt),kt.push(E[jt]),W+=`  var arg${jt} = argType${jt}.readValueFromPointer(args${et?"+"+et:""});
`,et+=E[jt].argPackAdvance;var ne=M===1?"new func":"func.call";W+=`  var rv = ${ne}(${ot.join(", ")});
`,F.isVoid||(St.push("emval_returnValue"),kt.push(yu),W+=`  return emval_returnValue(retType, destructorsRef, rv);
`),W+=`};
`,St.push(W);var he=Ot(Function,St)(...kt),le=`methodCaller<(${E.map(xe=>xe.name).join(", ")}) => ${F.name}>`;return $p(ft(le,he))},Jp=(u,m)=>(u=p.toValue(u),m=p.toValue(m),p.toHandle(u[m])),jp=u=>{u>9&&(Pe[u+1]+=1)},Kp=()=>p.toHandle([]),Qp=u=>p.toHandle(dc(u)),tm=()=>p.toHandle({}),em=u=>{var m=p.toValue(u);Ct(m),s(u)},nm=(u,m,M)=>{u=p.toValue(u),m=p.toValue(m),M=p.toValue(M),u[m]=M},im=(u,m)=>{u=fc(u,"_emval_take_value");var M=u.readValueFromPointer(m);return p.toHandle(M)},rm=u=>u%4===0&&(u%100!==0||u%400===0),sm=[0,31,60,91,121,152,182,213,244,274,305,335],om=[0,31,59,90,120,151,181,212,243,273,304,334],am=u=>{var m=rm(u.getFullYear()),M=m?sm:om,E=M[u.getMonth()]+u.getDate()-1;return E},mc=(u,m)=>m+2097152>>>0<4194305-!!u?(u>>>0)+m*4294967296:NaN;function lm(u,m,M){var E=mc(u,m),F=new Date(E*1e3);K[M>>2]=F.getSeconds(),K[M+4>>2]=F.getMinutes(),K[M+8>>2]=F.getHours(),K[M+12>>2]=F.getDate(),K[M+16>>2]=F.getMonth(),K[M+20>>2]=F.getFullYear()-1900,K[M+24>>2]=F.getDay();var W=am(F)|0;K[M+28>>2]=W,K[M+36>>2]=-(F.getTimezoneOffset()*60);var et=new Date(F.getFullYear(),0,1),ot=new Date(F.getFullYear(),6,1).getTimezoneOffset(),St=et.getTimezoneOffset(),kt=(ot!=St&&F.getTimezoneOffset()==Math.min(St,ot))|0;K[M+32>>2]=kt}function cm(u,m,M,E,F,W,et){var ot=mc(W,et);try{var St=Ne.getStreamFromFD(F);M&2&&Ne.doMsync(u,St,m,E,ot)}catch(kt){if(typeof R>"u"||kt.name!=="ErrnoError")throw kt;return-kt.errno}}var hm=(u,m,M,E)=>{var F=new Date().getFullYear(),W=new Date(F,0,1),et=new Date(F,6,1),ot=W.getTimezoneOffset(),St=et.getTimezoneOffset(),kt=Math.max(ot,St);lt[u>>2]=kt*60,K[m>>2]=+(ot!=St);var jt=le=>{var xe=le>=0?"-":"+",Be=Math.abs(le),_n=String(Math.floor(Be/60)).padStart(2,"0"),Qe=String(Be%60).padStart(2,"0");return`UTC${xe}${_n}${Qe}`},ne=jt(ot),he=jt(St);St<ot?(Hr(ne,M,17),Hr(he,E,17)):(Hr(ne,E,17),Hr(he,M,17))},um=()=>Date.now();function fm(){return new Error().stack.toString()}var Ho=u=>{Ho.shown||={},Ho.shown[u]||(Ho.shown[u]=1,d&&(u="warning: "+u),N(u))};function dm(u){var m=fm(),M=m.lastIndexOf("_emscripten_log"),E=m.lastIndexOf("_emscripten_get_callstack"),F=m.indexOf(`
`,Math.max(M,E))+1;m=m.slice(F),u&8&&typeof emscripten_source_map>"u"&&(Ho('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),u^=8,u|=16);var W=m.split(`
`);m="";var et=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),ot=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),St=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var kt in W){var jt=W[kt],ne="",he="",le=0,xe=0,Be=St.exec(jt);if(Be&&Be.length==5)ne=Be[1],he=Be[2],le=Be[3],xe=Be[4];else if(Be=et.exec(jt)||ot.exec(jt),Be&&Be.length>=4)ne=Be[1],he=Be[2],le=Be[3],xe=Be[4]|0;else{m+=jt+`
`;continue}var _n=!1;if(u&8){var Qe=emscripten_source_map.originalPositionFor({line:le,column:xe});_n=Qe?.source,_n&&(u&64&&(Qe.source=Qe.source.substring(Qe.source.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=`    at ${ne} (${Qe.source}:${Qe.line}:${Qe.column})
`)}(u&16||!_n)&&(u&64&&(he=he.substring(he.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=(_n?`     = ${ne}`:`    at ${ne}`)+` (${he}:${le}:${xe})
`)}return m=m.replace(/\s+$/,""),m}function pm(u,m,M){var E=dm(u);if(!m||M<=0)return Lt(E)+1;var F=Hr(E,m,M);return F+1}var Mu=()=>2147483648,mm=()=>Mu(),gm=u=>{var m=z.buffer,M=(u-m.byteLength+65535)/65536|0;try{return z.grow(M),yt(),1}catch{}},_m=u=>{var m=J.length;u>>>=0;var M=Mu();if(u>M)return!1;for(var E=1;E<=4;E*=2){var F=m*(1+.2/E);F=Math.min(F,u+100663296);var W=Math.min(M,Yt(Math.max(u,F),65536)),et=gm(W);if(et)return!0}return!1},gc={},vm=()=>_||"./this.program",zs=()=>{if(!zs.strings){var u=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",m={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:u,_:vm()};for(var M in gc)gc[M]===void 0?delete m[M]:m[M]=gc[M];var E=[];for(var M in m)E.push(`${M}=${m[M]}`);zs.strings=E}return zs.strings},ym=(u,m)=>{for(var M=0;M<u.length;++M)$[m++]=u.charCodeAt(M);$[m]=0},xm=(u,m)=>{var M=0;return zs().forEach((E,F)=>{var W=m+M;lt[u+F*4>>2]=W,ym(E,W),M+=E.length+1}),0},Mm=(u,m)=>{var M=zs();lt[u>>2]=M.length;var E=0;return M.forEach(F=>E+=F.length+1),lt[m>>2]=E,0},Sm=0,bm=()=>$t||Sm>0,wm=u=>{k=u,bm()||(i.onExit?.(u),A=!0),b(u,new Et(u))},Em=(u,m)=>{k=u,wm(u)},Tm=Em;function Am(u){try{var m=Ne.getStreamFromFD(u);return R.close(m),0}catch(M){if(typeof R>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var Cm=(u,m,M,E)=>{for(var F=0,W=0;W<M;W++){var et=lt[m>>2],ot=lt[m+4>>2];m+=8;var St=R.read(u,$,et,ot,E);if(St<0)return-1;if(F+=St,St<ot)break;typeof E<"u"&&(E+=St)}return F};function Pm(u,m,M,E){try{var F=Ne.getStreamFromFD(u),W=Cm(F,m,M);return lt[E>>2]=W,0}catch(et){if(typeof R>"u"||et.name!=="ErrnoError")throw et;return et.errno}}function Im(u,m,M,E,F){var W=mc(m,M);try{if(isNaN(W))return 61;var et=Ne.getStreamFromFD(u);return R.llseek(et,W,E),pt=[et.position>>>0,(it=et.position,+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],K[F>>2]=pt[0],K[F+4>>2]=pt[1],et.getdents&&W===0&&E===0&&(et.getdents=null),0}catch(ot){if(typeof R>"u"||ot.name!=="ErrnoError")throw ot;return ot.errno}}var Rm=(u,m,M,E)=>{for(var F=0,W=0;W<M;W++){var et=lt[m>>2],ot=lt[m+4>>2];m+=8;var St=R.write(u,$,et,ot,E);if(St<0)return-1;if(F+=St,St<ot)break;typeof E<"u"&&(E+=St)}return F};function Lm(u,m,M,E){try{var F=Ne.getStreamFromFD(u),W=Rm(F,m,M);return lt[E>>2]=W,0}catch(et){if(typeof R>"u"||et.name!=="ErrnoError")throw et;return et.errno}}R.createPreloadedFile=In,R.staticInit(),zr(),Jt=i.BindingError=class extends Error{constructor(m){super(m),this.name="BindingError"}},Zt=i.InternalError=class extends Error{constructor(m){super(m),this.name="InternalError"}},c(),mu=i.UnboundTypeError=Sp(Error,"UnboundTypeError");var Nm={M:Dr,N:Or,h:Fr,I:ui,Q:Ti,F:Ur,G:zi,j:Br,B:kr,H:Us,C:fi,A:Bs,w:ks,V:Oe,U:B,n:nt,f:Ep,b:Ap,a:Cp,m:Pp,i:Fp,W:Up,J:kp,x:Vp,L:Hp,e:Gp,q:Wp,T:s,u:Yp,p:Zp,k:Jp,Y:jp,X:Kp,r:Qp,Z:tm,o:em,c:nm,d:im,t:lm,s:cm,O:hm,K:um,R:pm,z:mm,y:_m,D:xm,E:Mm,S:Tm,g:Am,P:Pm,v:Im,l:Lm},un=P(),Dm=()=>(Dm=un.$)(),Su=u=>(Su=un.aa)(u),_c=u=>(_c=un.ca)(u),Ci=u=>(Ci=un.da)(u),bu=u=>(bu=un.ea)(u),wu=(u,m)=>(wu=un.fa)(u,m),Eu=()=>(Eu=un.ga)(),Om=i.dynCall_viijii=(u,m,M,E,F,W,et)=>(Om=i.dynCall_viijii=un.ha)(u,m,M,E,F,W,et),Fm=i.dynCall_viiiiji=(u,m,M,E,F,W,et,ot)=>(Fm=i.dynCall_viiiiji=un.ia)(u,m,M,E,F,W,et,ot),Um=i.dynCall_jiji=(u,m,M,E,F)=>(Um=i.dynCall_jiji=un.ja)(u,m,M,E,F),Bm=i.dynCall_iiiiij=(u,m,M,E,F,W,et)=>(Bm=i.dynCall_iiiiij=un.ka)(u,m,M,E,F,W,et),km=i.dynCall_iiiiijj=(u,m,M,E,F,W,et,ot,St)=>(km=i.dynCall_iiiiijj=un.la)(u,m,M,E,F,W,et,ot,St),zm=i.dynCall_iiiiiijj=(u,m,M,E,F,W,et,ot,St,kt)=>(zm=i.dynCall_iiiiiijj=un.ma)(u,m,M,E,F,W,et,ot,St,kt),Go,Tu;oe=function u(){Go||Au(),Go||(oe=u)};function Au(){if(Qt>0||!Tu&&(Tu=1,Wt(),Qt>0))return;function u(){Go||(Go=1,i.calledRun=1,!A&&(Ht(),r(i),i.onRuntimeInitialized?.(),zt()))}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),u()},1)):u()}if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Au(),e=l,e})})();typeof Lu=="object"&&typeof xc=="object"?xc.exports=Ru:typeof define=="function"&&define.amd&&define([],()=>Ru)});var Du=Cu((rS,Xo)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof Xo<"u"&&Xo.exports?(Xo.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var r={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?r.chrome=1:r.chrome=0,i.indexOf("chromium")!=-1?r.chromium=1:r.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?r.safari=1:r.safari=0,i.indexOf("firefox")!=-1?r.firefox=1:r.firefox=0,i.indexOf("firefox/17")!=-1?r.firefox17=1:r.firefox17=0,i.indexOf("firefox/15")!=-1?r.firefox15=1:r.firefox15=0,i.indexOf("firefox/3")!=-1?r.firefox3=1:r.firefox3=0,i.indexOf("opera")!=-1?r.opera=1:r.opera=0,i.indexOf("msie 10")!=-1?r.msie10=1:r.msie10=0,i.indexOf("msie 9")!=-1?r.msie9=1:r.msie9=0,i.indexOf("msie 8")!=-1?r.msie8=1:r.msie8=0,i.indexOf("msie 7")!=-1?r.msie7=1:r.msie7=0,i.indexOf("msie ")!=-1?r.msie=1:r.msie=0,n.biginteger_used=null;var o,l=0xdeadbeefcafe,h=(l&16777215)==15715070;function f(s,a,c){n.biginteger_used=1,s!=null&&(typeof s=="number"&&typeof a>"u"?this.fromInt(s):typeof s=="number"?this.fromNumber(s,a,c):a==null&&typeof s!="string"?this.fromString(s,256):this.fromString(s,a))}function d(){return new f(null,void 0,void 0)}function g(s,a,c,p,y,I){for(;--I>=0;){var B=a*this[s++]+c[p]+y;y=Math.floor(B/67108864),c[p++]=B&67108863}return y}function v(s,a,c,p,y,I){for(var B=a&32767,tt=a>>15;--I>=0;){var nt=this[s]&32767,ft=this[s++]>>15,Ct=tt*nt+ft*B;nt=B*nt+((Ct&32767)<<15)+c[p]+(y&1073741823),y=(nt>>>30)+(Ct>>>15)+tt*ft+(y>>>30),c[p++]=nt&1073741823}return y}function _(s,a,c,p,y,I){for(var B=a&16383,tt=a>>14;--I>=0;){var nt=this[s]&16383,ft=this[s++]>>14,Ct=tt*nt+ft*B;nt=B*nt+((Ct&16383)<<14)+c[p]+y,y=(nt>>28)+(Ct>>14)+tt*ft,c[p++]=nt&268435455}return y}h&&e=="Microsoft Internet Explorer"?(f.prototype.am=v,o=30):h&&e!="Netscape"?(f.prototype.am=g,o=26):(f.prototype.am=_,o=28),f.prototype.DB=o,f.prototype.DM=(1<<o)-1,f.prototype.DV=1<<o;var b=52;f.prototype.FV=Math.pow(2,b),f.prototype.F1=b-o,f.prototype.F2=2*o-b;var w="0123456789abcdefghijklmnopqrstuvwxyz",T=new Array,S,x;for(S=48,x=0;x<=9;++x)T[S++]=x;for(S=97,x=10;x<36;++x)T[S++]=x;for(S=65,x=10;x<36;++x)T[S++]=x;function L(s){return w.charAt(s)}function V(s,a){var c=T[s.charCodeAt(a)];return c??-1}function C(s){for(var a=this.t-1;a>=0;--a)s[a]=this[a];s.t=this.t,s.s=this.s}function N(s){this.t=1,this.s=s<0?-1:0,s>0?this[0]=s:s<-1?this[0]=s+this.DV:this.t=0}function O(s){var a=d();return a.fromInt(s),a}function z(s,a){var c;if(a==16)c=4;else if(a==8)c=3;else if(a==256)c=8;else if(a==2)c=1;else if(a==32)c=5;else if(a==4)c=2;else{this.fromRadix(s,a);return}this.t=0,this.s=0;for(var p=s.length,y=!1,I=0;--p>=0;){var B=c==8?s[p]&255:V(s,p);if(B<0){s.charAt(p)=="-"&&(y=!0);continue}y=!1,I==0?this[this.t++]=B:I+c>this.DB?(this[this.t-1]|=(B&(1<<this.DB-I)-1)<<I,this[this.t++]=B>>this.DB-I):this[this.t-1]|=B<<I,I+=c,I>=this.DB&&(I-=this.DB)}c==8&&(s[0]&128)!=0&&(this.s=-1,I>0&&(this[this.t-1]|=(1<<this.DB-I)-1<<I)),this.clamp(),y&&f.ZERO.subTo(this,this)}function A(){for(var s=this.s&this.DM;this.t>0&&this[this.t-1]==s;)--this.t}function k(s){if(this.s<0)return"-"+this.negate().toString(s);var a;if(s==16)a=4;else if(s==8)a=3;else if(s==2)a=1;else if(s==32)a=5;else if(s==4)a=2;else return this.toRadix(s);var c=(1<<a)-1,p,y=!1,I="",B=this.t,tt=this.DB-B*this.DB%a;if(B-- >0)for(tt<this.DB&&(p=this[B]>>tt)>0&&(y=!0,I=L(p));B>=0;)tt<a?(p=(this[B]&(1<<tt)-1)<<a-tt,p|=this[--B]>>(tt+=this.DB-a)):(p=this[B]>>(tt-=a)&c,tt<=0&&(tt+=this.DB,--B)),p>0&&(y=!0),y&&(I+=L(p));return y?I:"0"}function G(){var s=d();return f.ZERO.subTo(this,s),s}function $(){return this.s<0?this.negate():this}function J(s){var a=this.s-s.s;if(a!=0)return a;var c=this.t;if(a=c-s.t,a!=0)return this.s<0?-a:a;for(;--c>=0;)if((a=this[c]-s[c])!=0)return a;return 0}function j(s){var a=1,c;return(c=s>>>16)!=0&&(s=c,a+=16),(c=s>>8)!=0&&(s=c,a+=8),(c=s>>4)!=0&&(s=c,a+=4),(c=s>>2)!=0&&(s=c,a+=2),(c=s>>1)!=0&&(s=c,a+=1),a}function Z(){return this.t<=0?0:this.DB*(this.t-1)+j(this[this.t-1]^this.s&this.DM)}function K(s,a){var c;for(c=this.t-1;c>=0;--c)a[c+s]=this[c];for(c=s-1;c>=0;--c)a[c]=0;a.t=this.t+s,a.s=this.s}function lt(s,a){for(var c=s;c<this.t;++c)a[c-s]=this[c];a.t=Math.max(this.t-s,0),a.s=this.s}function dt(s,a){var c=s%this.DB,p=this.DB-c,y=(1<<p)-1,I=Math.floor(s/this.DB),B=this.s<<c&this.DM,tt;for(tt=this.t-1;tt>=0;--tt)a[tt+I+1]=this[tt]>>p|B,B=(this[tt]&y)<<c;for(tt=I-1;tt>=0;--tt)a[tt]=0;a[I]=B,a.t=this.t+I+1,a.s=this.s,a.clamp()}function bt(s,a){a.s=this.s;var c=Math.floor(s/this.DB);if(c>=this.t){a.t=0;return}var p=s%this.DB,y=this.DB-p,I=(1<<p)-1;a[0]=this[c]>>p;for(var B=c+1;B<this.t;++B)a[B-c-1]|=(this[B]&I)<<y,a[B-c]=this[B]>>p;p>0&&(a[this.t-c-1]|=(this.s&I)<<y),a.t=this.t-c,a.clamp()}function yt(s,a){for(var c=0,p=0,y=Math.min(s.t,this.t);c<y;)p+=this[c]-s[c],a[c++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p-=s.s;c<this.t;)p+=this[c],a[c++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;c<s.t;)p-=s[c],a[c++]=p&this.DM,p>>=this.DB;p-=s.s}a.s=p<0?-1:0,p<-1?a[c++]=this.DV+p:p>0&&(a[c++]=p),a.t=c,a.clamp()}function wt(s,a){var c=this.abs(),p=s.abs(),y=c.t;for(a.t=y+p.t;--y>=0;)a[y]=0;for(y=0;y<p.t;++y)a[y+c.t]=c.am(0,p[y],a,y,0,c.t);a.s=0,a.clamp(),this.s!=s.s&&f.ZERO.subTo(a,a)}function Pt(s){for(var a=this.abs(),c=s.t=2*a.t;--c>=0;)s[c]=0;for(c=0;c<a.t-1;++c){var p=a.am(c,a[c],s,2*c,0,1);(s[c+a.t]+=a.am(c+1,2*a[c],s,2*c+1,p,a.t-c-1))>=a.DV&&(s[c+a.t]-=a.DV,s[c+a.t+1]=1)}s.t>0&&(s[s.t-1]+=a.am(c,a[c],s,2*c,0,1)),s.s=0,s.clamp()}function ht(s,a,c){var p=s.abs();if(!(p.t<=0)){var y=this.abs();if(y.t<p.t){a?.fromInt(0),c!=null&&this.copyTo(c);return}c==null&&(c=d());var I=d(),B=this.s,tt=s.s,nt=this.DB-j(p[p.t-1]);nt>0?(p.lShiftTo(nt,I),y.lShiftTo(nt,c)):(p.copyTo(I),y.copyTo(c));var ft=I.t,Ct=I[ft-1];if(Ct!=0){var At=Ct*(1<<this.F1)+(ft>1?I[ft-2]>>this.F2:0),Ot=this.FV/At,ae=(1<<this.F1)/At,ye=1<<this.F2,we=c.t,He=we-ft,gn=a??d();for(I.dlShiftTo(He,gn),c.compareTo(gn)>=0&&(c[c.t++]=1,c.subTo(gn,c)),f.ONE.dlShiftTo(ft,gn),gn.subTo(I,I);I.t<ft;)I[I.t++]=0;for(;--He>=0;){var Wn=c[--we]==Ct?this.DM:Math.floor(c[we]*Ot+(c[we-1]+ye)*ae);if((c[we]+=I.am(0,Wn,c,He,0,ft))<Wn)for(I.dlShiftTo(He,gn),c.subTo(gn,c);c[we]<--Wn;)c.subTo(gn,c)}a!=null&&(c.drShiftTo(ft,a),B!=tt&&f.ZERO.subTo(a,a)),c.t=ft,c.clamp(),nt>0&&c.rShiftTo(nt,c),B<0&&f.ZERO.subTo(c,c)}}}function Tt(s){var a=d();return this.abs().divRemTo(s,null,a),this.s<0&&a.compareTo(f.ZERO)>0&&s.subTo(a,a),a}function Wt(s){this.m=s}function Ht(s){return s.s<0||s.compareTo(this.m)>=0?s.mod(this.m):s}function zt(s){return s}function _t(s){s.divRemTo(this.m,null,s)}function X(s,a,c){s.multiplyTo(a,c),this.reduce(c)}function Rt(s,a){s.squareTo(a),this.reduce(a)}Wt.prototype.convert=Ht,Wt.prototype.revert=zt,Wt.prototype.reduce=_t,Wt.prototype.mulTo=X,Wt.prototype.sqrTo=Rt;function Qt(){if(this.t<1)return 0;var s=this[0];if((s&1)==0)return 0;var a=s&3;return a=a*(2-(s&15)*a)&15,a=a*(2-(s&255)*a)&255,a=a*(2-((s&65535)*a&65535))&65535,a=a*(2-s*a%this.DV)%this.DV,a>0?this.DV-a:-a}function Ft(s){this.m=s,this.mp=s.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<s.DB-15)-1,this.mt2=2*s.t}function oe(s){var a=d();return s.abs().dlShiftTo(this.m.t,a),a.divRemTo(this.m,null,a),s.s<0&&a.compareTo(f.ZERO)>0&&this.m.subTo(a,a),a}function Ie(s){var a=d();return s.copyTo(a),this.reduce(a),a}function pe(s){for(;s.t<=this.mt2;)s[s.t++]=0;for(var a=0;a<this.m.t;++a){var c=s[a]&32767,p=c*this.mpl+((c*this.mph+(s[a]>>15)*this.mpl&this.um)<<15)&s.DM;for(c=a+this.m.t,s[c]+=this.m.am(0,p,s,a,0,this.m.t);s[c]>=s.DV;)s[c]-=s.DV,s[++c]++}s.clamp(),s.drShiftTo(this.m.t,s),s.compareTo(this.m)>=0&&s.subTo(this.m,s)}function ue(s,a){s.squareTo(a),this.reduce(a)}function ve(s,a,c){s.multiplyTo(a,c),this.reduce(c)}Ft.prototype.convert=oe,Ft.prototype.revert=Ie,Ft.prototype.reduce=pe,Ft.prototype.mulTo=ve,Ft.prototype.sqrTo=ue;function fe(){return(this.t>0?this[0]&1:this.s)==0}function Te(s,a){if(s>4294967295||s<1)return f.ONE;var c=d(),p=d(),y=a.convert(this),I=j(s)-1;for(y.copyTo(c);--I>=0;)if(a.sqrTo(c,p),(s&1<<I)>0)a.mulTo(p,y,c);else{var B=c;c=p,p=B}return a.revert(c)}function ie(s,a){var c;return s<256||a.isEven()?c=new Wt(a):c=new Ft(a),this.exp(s,c)}f.prototype.copyTo=C,f.prototype.fromInt=N,f.prototype.fromString=z,f.prototype.clamp=A,f.prototype.dlShiftTo=K,f.prototype.drShiftTo=lt,f.prototype.lShiftTo=dt,f.prototype.rShiftTo=bt,f.prototype.subTo=yt,f.prototype.multiplyTo=wt,f.prototype.squareTo=Pt,f.prototype.divRemTo=ht,f.prototype.invDigit=Qt,f.prototype.isEven=fe,f.prototype.exp=Te,f.prototype.toString=k,f.prototype.negate=G,f.prototype.abs=$,f.prototype.compareTo=J,f.prototype.bitLength=Z,f.prototype.mod=Tt,f.prototype.modPowInt=ie,f.ZERO=O(0),f.ONE=O(1);function Re(){var s=d();return this.copyTo(s),s}function Se(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Ce(){return this.t==0?this.s:this[0]<<24>>24}function at(){return this.t==0?this.s:this[0]<<16>>16}function ke(s){return Math.floor(Math.LN2*this.DB/Math.log(s))}function me(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function Y(s){if(s==null&&(s=10),this.signum()==0||s<2||s>36)return"0";var a=this.chunkSize(s),c=Math.pow(s,a),p=O(c),y=d(),I=d(),B="";for(this.divRemTo(p,y,I);y.signum()>0;)B=(c+I.intValue()).toString(s).substr(1)+B,y.divRemTo(p,y,I);return I.intValue().toString(s)+B}function P(s,a){this.fromInt(0),a==null&&(a=10);for(var c=this.chunkSize(a),p=Math.pow(a,c),y=!1,I=0,B=0,tt=0;tt<s.length;++tt){var nt=V(s,tt);if(nt<0){s.charAt(tt)=="-"&&this.signum()==0&&(y=!0);continue}B=a*B+nt,++I>=c&&(this.dMultiply(p),this.dAddOffset(B,0),I=0,B=0)}I>0&&(this.dMultiply(Math.pow(a,I)),this.dAddOffset(B,0)),y&&f.ZERO.subTo(this,this)}function it(s,a,c){if(typeof a=="number")if(s<2)this.fromInt(1);else for(this.fromNumber(s,c),this.testBit(s-1)||this.bitwiseTo(f.ONE.shiftLeft(s-1),Q,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(a);)this.dAddOffset(2,0),this.bitLength()>s&&this.subTo(f.ONE.shiftLeft(s-1),this);else{var p=new Array,y=s&7;p.length=(s>>3)+1,a.nextBytes(p),y>0?p[0]&=(1<<y)-1:p[0]=0,this.fromString(p,256)}}function pt(){var s=this.t,a=new Array;a[0]=this.s;var c=this.DB-s*this.DB%8,p,y=0;if(s-- >0)for(c<this.DB&&(p=this[s]>>c)!=(this.s&this.DM)>>c&&(a[y++]=p|this.s<<this.DB-c);s>=0;)c<8?(p=(this[s]&(1<<c)-1)<<8-c,p|=this[--s]>>(c+=this.DB-8)):(p=this[s]>>(c-=8)&255,c<=0&&(c+=this.DB,--s)),(p&128)!=0&&(p|=-256),y==0&&(this.s&128)!=(p&128)&&++y,(y>0||p!=this.s)&&(a[y++]=p);return a}function Et(s){return this.compareTo(s)==0}function Xt(s){return this.compareTo(s)<0?this:s}function $t(s){return this.compareTo(s)>0?this:s}function xt(s,a,c){var p,y,I=Math.min(s.t,this.t);for(p=0;p<I;++p)c[p]=a(this[p],s[p]);if(s.t<this.t){for(y=s.s&this.DM,p=I;p<this.t;++p)c[p]=a(this[p],y);c.t=this.t}else{for(y=this.s&this.DM,p=I;p<s.t;++p)c[p]=a(y,s[p]);c.t=s.t}c.s=a(this.s,s.s),c.clamp()}function D(s,a){return s&a}function q(s){var a=d();return this.bitwiseTo(s,D,a),a}function Q(s,a){return s|a}function rt(s){var a=d();return this.bitwiseTo(s,Q,a),a}function ut(s,a){return s^a}function Dt(s){var a=d();return this.bitwiseTo(s,ut,a),a}function Lt(s,a){return s&~a}function Gt(s){var a=d();return this.bitwiseTo(s,Lt,a),a}function H(){for(var s=d(),a=0;a<this.t;++a)s[a]=this.DM&~this[a];return s.t=this.t,s.s=~this.s,s}function It(s){var a=d();return s<0?this.rShiftTo(-s,a):this.lShiftTo(s,a),a}function mt(s){var a=d();return s<0?this.lShiftTo(-s,a):this.rShiftTo(s,a),a}function Ut(s){if(s==0)return-1;var a=0;return(s&65535)==0&&(s>>=16,a+=16),(s&255)==0&&(s>>=8,a+=8),(s&15)==0&&(s>>=4,a+=4),(s&3)==0&&(s>>=2,a+=2),(s&1)==0&&++a,a}function Yt(){for(var s=0;s<this.t;++s)if(this[s]!=0)return s*this.DB+Ut(this[s]);return this.s<0?this.t*this.DB:-1}function Nt(s){for(var a=0;s!=0;)s&=s-1,++a;return a}function Bt(){for(var s=0,a=this.s&this.DM,c=0;c<this.t;++c)s+=Nt(this[c]^a);return s}function re(s){var a=Math.floor(s/this.DB);return a>=this.t?this.s!=0:(this[a]&1<<s%this.DB)!=0}function ze(s,a){var c=f.ONE.shiftLeft(s);return this.bitwiseTo(c,a,c),c}function De(s){return this.changeBit(s,Q)}function En(s){return this.changeBit(s,Lt)}function In(s){return this.changeBit(s,ut)}function Fs(s,a){for(var c=0,p=0,y=Math.min(s.t,this.t);c<y;)p+=this[c]+s[c],a[c++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p+=s.s;c<this.t;)p+=this[c],a[c++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;c<s.t;)p+=s[c],a[c++]=p&this.DM,p>>=this.DB;p+=s.s}a.s=p<0?-1:0,p>0?a[c++]=p:p<-1&&(a[c++]=this.DV+p),a.t=c,a.clamp()}function gr(s){var a=d();return this.addTo(s,a),a}function R(s){var a=d();return this.subTo(s,a),a}function Ei(s){var a=d();return this.multiplyTo(s,a),a}function Ne(){var s=d();return this.squareTo(s),s}function Dr(s){var a=d();return this.divRemTo(s,a,null),a}function Or(s){var a=d();return this.divRemTo(s,null,a),a}function Rn(s){var a=d(),c=d();return this.divRemTo(s,a,c),new Array(a,c)}function Xn(s){this[this.t]=this.am(0,s-1,this,0,0,this.t),++this.t,this.clamp()}function Fr(s,a){if(s!=0){for(;this.t<=a;)this[this.t++]=0;for(this[a]+=s;this[a]>=this.DV;)this[a]-=this.DV,++a>=this.t&&(this[this.t++]=0),++this[a]}}function ui(){}function Ti(s){return s}function Ur(s,a,c){s.multiplyTo(a,c)}function zi(s,a){s.squareTo(a)}ui.prototype.convert=Ti,ui.prototype.revert=Ti,ui.prototype.mulTo=Ur,ui.prototype.sqrTo=zi;function Br(s){return this.exp(s,new ui)}function kr(s,a,c){var p=Math.min(this.t+s.t,a);for(c.s=0,c.t=p;p>0;)c[--p]=0;var y;for(y=c.t-this.t;p<y;++p)c[p+this.t]=this.am(0,s[p],c,p,0,this.t);for(y=Math.min(s.t,a);p<y;++p)this.am(0,s[p],c,p,0,a-p);c.clamp()}function Us(s,a,c){--a;var p=c.t=this.t+s.t-a;for(c.s=0;--p>=0;)c[p]=0;for(p=Math.max(a-this.t,0);p<s.t;++p)c[this.t+p-a]=this.am(a-p,s[p],c,0,0,this.t+p-a);c.clamp(),c.drShiftTo(1,c)}function fi(s){this.r2=d(),this.q3=d(),f.ONE.dlShiftTo(2*s.t,this.r2),this.mu=this.r2.divide(s),this.m=s}function Bs(s){if(s.s<0||s.t>2*this.m.t)return s.mod(this.m);if(s.compareTo(this.m)<0)return s;var a=d();return s.copyTo(a),this.reduce(a),a}function ks(s){return s}function zr(s){for(s.drShiftTo(this.m.t-1,this.r2),s.t>this.m.t+1&&(s.t=this.m.t+1,s.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);s.compareTo(this.r2)<0;)s.dAddOffset(1,this.m.t+1);for(s.subTo(this.r2,s);s.compareTo(this.m)>=0;)s.subTo(this.m,s)}function U(s,a){s.squareTo(a),this.reduce(a)}function st(s,a,c){s.multiplyTo(a,c),this.reduce(c)}fi.prototype.convert=Bs,fi.prototype.revert=ks,fi.prototype.reduce=zr,fi.prototype.mulTo=st,fi.prototype.sqrTo=U;function Mt(s,a){var c=s.bitLength(),p,y=O(1),I;if(c<=0)return y;c<18?p=1:c<48?p=3:c<144?p=4:c<768?p=5:p=6,c<8?I=new Wt(a):a.isEven()?I=new fi(a):I=new Ft(a);var B=new Array,tt=3,nt=p-1,ft=(1<<p)-1;if(B[1]=I.convert(this),p>1){var Ct=d();for(I.sqrTo(B[1],Ct);tt<=ft;)B[tt]=d(),I.mulTo(Ct,B[tt-2],B[tt]),tt+=2}var At=s.t-1,Ot,ae=!0,ye=d(),we;for(c=j(s[At])-1;At>=0;){for(c>=nt?Ot=s[At]>>c-nt&ft:(Ot=(s[At]&(1<<c+1)-1)<<nt-c,At>0&&(Ot|=s[At-1]>>this.DB+c-nt)),tt=p;(Ot&1)==0;)Ot>>=1,--tt;if((c-=tt)<0&&(c+=this.DB,--At),ae)B[Ot].copyTo(y),ae=!1;else{for(;tt>1;)I.sqrTo(y,ye),I.sqrTo(ye,y),tt-=2;tt>0?I.sqrTo(y,ye):(we=y,y=ye,ye=we),I.mulTo(ye,B[Ot],y)}for(;At>=0&&(s[At]&1<<c)==0;)I.sqrTo(y,ye),we=y,y=ye,ye=we,--c<0&&(c=this.DB-1,--At)}return I.revert(y)}function gt(s){var a=this.s<0?this.negate():this.clone(),c=s.s<0?s.negate():s.clone();if(a.compareTo(c)<0){var p=a;a=c,c=p}var y=a.getLowestSetBit(),I=c.getLowestSetBit();if(I<0)return a;for(y<I&&(I=y),I>0&&(a.rShiftTo(I,a),c.rShiftTo(I,c));a.signum()>0;)(y=a.getLowestSetBit())>0&&a.rShiftTo(y,a),(y=c.getLowestSetBit())>0&&c.rShiftTo(y,c),a.compareTo(c)>=0?(a.subTo(c,a),a.rShiftTo(1,a)):(c.subTo(a,c),c.rShiftTo(1,c));return I>0&&c.lShiftTo(I,c),c}function vt(s){if(s<=0)return 0;var a=this.DV%s,c=this.s<0?s-1:0;if(this.t>0)if(a==0)c=this[0]%s;else for(var p=this.t-1;p>=0;--p)c=(a*c+this[p])%s;return c}function Jt(s){var a=s.isEven();if(this.isEven()&&a||s.signum()==0)return f.ZERO;for(var c=s.clone(),p=this.clone(),y=O(1),I=O(0),B=O(0),tt=O(1);c.signum()!=0;){for(;c.isEven();)c.rShiftTo(1,c),a?((!y.isEven()||!I.isEven())&&(y.addTo(this,y),I.subTo(s,I)),y.rShiftTo(1,y)):I.isEven()||I.subTo(s,I),I.rShiftTo(1,I);for(;p.isEven();)p.rShiftTo(1,p),a?((!B.isEven()||!tt.isEven())&&(B.addTo(this,B),tt.subTo(s,tt)),B.rShiftTo(1,B)):tt.isEven()||tt.subTo(s,tt),tt.rShiftTo(1,tt);c.compareTo(p)>=0?(c.subTo(p,c),a&&y.subTo(B,y),I.subTo(tt,I)):(p.subTo(c,p),a&&B.subTo(y,B),tt.subTo(I,tt))}if(p.compareTo(f.ONE)!=0)return f.ZERO;if(tt.compareTo(s)>=0)return tt.subtract(s);if(tt.signum()<0)tt.addTo(s,tt);else return tt;return tt.signum()<0?tt.add(s):tt}var Vt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Zt=(1<<26)/Vt[Vt.length-1];function ee(s){var a,c=this.abs();if(c.t==1&&c[0]<=Vt[Vt.length-1]){for(a=0;a<Vt.length;++a)if(c[0]==Vt[a])return!0;return!1}if(c.isEven())return!1;for(a=1;a<Vt.length;){for(var p=Vt[a],y=a+1;y<Vt.length&&p<Zt;)p*=Vt[y++];for(p=c.modInt(p);a<y;)if(p%Vt[a++]==0)return!1}return c.millerRabin(s)}function se(s){var a=this.subtract(f.ONE),c=a.getLowestSetBit();if(c<=0)return!1;var p=a.shiftRight(c);s=s+1>>1,s>Vt.length&&(s=Vt.length);for(var y=d(),I=0;I<s;++I){y.fromInt(Vt[Math.floor(Math.random()*Vt.length)]);var B=y.modPow(p,this);if(B.compareTo(f.ONE)!=0&&B.compareTo(a)!=0){for(var tt=1;tt++<c&&B.compareTo(a)!=0;)if(B=B.modPowInt(2,this),B.compareTo(f.ONE)==0)return!1;if(B.compareTo(a)!=0)return!1}}return!0}f.prototype.chunkSize=ke,f.prototype.toRadix=Y,f.prototype.fromRadix=P,f.prototype.fromNumber=it,f.prototype.bitwiseTo=xt,f.prototype.changeBit=ze,f.prototype.addTo=Fs,f.prototype.dMultiply=Xn,f.prototype.dAddOffset=Fr,f.prototype.multiplyLowerTo=kr,f.prototype.multiplyUpperTo=Us,f.prototype.modInt=vt,f.prototype.millerRabin=se,f.prototype.clone=Re,f.prototype.intValue=Se,f.prototype.byteValue=Ce,f.prototype.shortValue=at,f.prototype.signum=me,f.prototype.toByteArray=pt,f.prototype.equals=Et,f.prototype.min=Xt,f.prototype.max=$t,f.prototype.and=q,f.prototype.or=rt,f.prototype.xor=Dt,f.prototype.andNot=Gt,f.prototype.not=H,f.prototype.shiftLeft=It,f.prototype.shiftRight=mt,f.prototype.getLowestSetBit=Yt,f.prototype.bitCount=Bt,f.prototype.testBit=re,f.prototype.setBit=De,f.prototype.clearBit=En,f.prototype.flipBit=In,f.prototype.add=gr,f.prototype.subtract=R,f.prototype.multiply=Ei,f.prototype.divide=Dr,f.prototype.remainder=Or,f.prototype.divideAndRemainder=Rn,f.prototype.modPow=Mt,f.prototype.modInverse=Jt,f.prototype.pow=Br,f.prototype.gcd=gt,f.prototype.isProbablePrime=ee,f.prototype.square=Ne;var qt=f;qt.prototype.IsNegative=function(){return this.compareTo(qt.ZERO)==-1},qt.op_Equality=function(s,a){return s.compareTo(a)==0},qt.op_Inequality=function(s,a){return s.compareTo(a)!=0},qt.op_GreaterThan=function(s,a){return s.compareTo(a)>0},qt.op_LessThan=function(s,a){return s.compareTo(a)<0},qt.op_Addition=function(s,a){return new qt(s,void 0,void 0).add(new qt(a,void 0,void 0))},qt.op_Subtraction=function(s,a){return new qt(s,void 0,void 0).subtract(new qt(a,void 0,void 0))},qt.Int128Mul=function(s,a){return new qt(s,void 0,void 0).multiply(new qt(a,void 0,void 0))},qt.op_Division=function(s,a){return s.divide(a)},qt.prototype.ToDouble=function(){return parseFloat(this.toString())};var ge=function(s,a){var c;if(typeof Object.getOwnPropertyNames>"u"){for(c in a.prototype)(typeof s.prototype[c]>"u"||s.prototype[c]===Object.prototype[c])&&(s.prototype[c]=a.prototype[c]);for(c in a)typeof s[c]>"u"&&(s[c]=a[c]);s.$baseCtor=a}else{for(var p=Object.getOwnPropertyNames(a.prototype),y=0;y<p.length;y++)typeof Object.getOwnPropertyDescriptor(s.prototype,p[y])>"u"&&Object.defineProperty(s.prototype,p[y],Object.getOwnPropertyDescriptor(a.prototype,p[y]));for(c in a)typeof s[c]>"u"&&(s[c]=a[c]);s.$baseCtor=a}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var s=arguments;this.X=0,this.Y=0,s.length===1?(this.X=s[0].X,this.Y=s[0].Y):s.length===2&&(this.X=s[0],this.Y=s[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(s){this.X=s.X,this.Y=s.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(s,a){this.X=s,this.Y=a},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var s=!0,a=this.m_Parent;a!==null;)s=!s,a=a.m_Parent;return s},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(s){var a=this.m_Childs.length;this.m_Childs.push(s),s.m_Parent=this,s.m_Index=a},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var s=0,a=this.m_AllPolys.length;s<a;s++)this.m_AllPolys[s]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var s=this.m_AllPolys.length;return s>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&s--,s},ge(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(s){return Math.abs(s)},n.Math_Max_Int32_Int32=function(s,a){return Math.max(s,a)},r.msie||r.opera||r.safari?n.Cast_Int32=function(s){return s|0}:n.Cast_Int32=function(s){return~~s},typeof Number.toInteger>"u"&&(Number.toInteger=null),r.chrome?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):~~s}:r.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(s){return Number.toInteger(s)}:r.msie7||r.msie8?n.Cast_Int64=function(s){return parseInt(s,10)}:r.msie?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):s|0}:n.Cast_Int64=function(s){return s<0?Math.ceil(s):Math.floor(s)},n.Clear=function(s){s.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var s=arguments,a=s.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,a===3)this.X=s[0],this.Y=s[1],this.Z=s[2];else if(a===2)this.X=s[0],this.Y=s[1],this.Z=0;else if(a===1)if(s[0]instanceof n.DoublePoint){var c=s[0];this.X=n.Clipper.Round(c.X),this.Y=n.Clipper.Round(c.Y),this.Z=0}else{var p=s[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(a===2)this.X=s[0],this.Y=s[1];else if(a===1)if(s[0]instanceof n.DoublePoint){var c=s[0];this.X=n.Clipper.Round(c.X),this.Y=n.Clipper.Round(c.Y)}else{var p=s[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(s,a){return s.X===a.X&&s.Y===a.Y},n.IntPoint.op_Inequality=function(s,a){return s.X!==a.X||s.Y!==a.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(s){this.X=s.X,this.Y=s.Y,n.use_xyz&&(typeof s.Z>"u"?this.Z=0:this.Z=s.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(s){this.X=n.Clipper.Round(s.X),this.Y=n.Clipper.Round(s.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(s,a,c){this.X=s,this.Y=a,n.use_xyz&&(typeof c>"u"?this.Z=0:this.Z=c)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var s=arguments,a=s.length;if(a===4)this.left=s[0],this.top=s[1],this.right=s[2],this.bottom=s[3];else if(a===1){var c=s[0];this.left=c.left,this.top=c.top,this.right=c.right,this.bottom=c.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(s){this.left=s.left,this.top=s.top,this.right=s.right,this.bottom=s.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(s,a,c,p){this.left=s,this.top=a,this.right=c,this.bottom=p},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(s,a){var c=a.Pt.Y-s.Pt.Y;return c>0?1:c<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(s){return s>-n.ClipperBase.tolerance&&s<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(s){return s.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(s,a){var c=a;do{if(n.IntPoint.op_Equality(c.Pt,s))return!0;c=c.Next}while(c!==a);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(s,a,c,p){return p?s.X===a.X&&s.Y===a.Y||s.X===c.X&&s.Y===c.Y||s.X>a.X==s.X<c.X&&s.Y>a.Y==s.Y<c.Y&&qt.op_Equality(qt.Int128Mul(s.X-a.X,c.Y-a.Y),qt.Int128Mul(c.X-a.X,s.Y-a.Y)):s.X===a.X&&s.Y===a.Y||s.X===c.X&&s.Y===c.Y||s.X>a.X==s.X<c.X&&s.Y>a.Y==s.Y<c.Y&&(s.X-a.X)*(c.Y-a.Y)===(c.X-a.X)*(s.Y-a.Y)},n.ClipperBase.prototype.PointOnPolygon=function(s,a,c){for(var p=a;;){if(this.PointOnLineSegment(s,p.Pt,p.Next.Pt,c))return!0;if(p=p.Next,p===a)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var s=arguments,a=s.length,c,p,y,I,B,tt,nt;return a===3?(c=s[0],p=s[1],nt=s[2],nt?qt.op_Equality(qt.Int128Mul(c.Delta.Y,p.Delta.X),qt.Int128Mul(c.Delta.X,p.Delta.Y)):n.Cast_Int64(c.Delta.Y*p.Delta.X)===n.Cast_Int64(c.Delta.X*p.Delta.Y)):a===4?(y=s[0],I=s[1],B=s[2],nt=s[3],nt?qt.op_Equality(qt.Int128Mul(y.Y-I.Y,I.X-B.X),qt.Int128Mul(y.X-I.X,I.Y-B.Y)):n.Cast_Int64((y.Y-I.Y)*(I.X-B.X))-n.Cast_Int64((y.X-I.X)*(I.Y-B.Y))===0):(y=s[0],I=s[1],B=s[2],tt=s[3],nt=s[4],nt?qt.op_Equality(qt.Int128Mul(y.Y-I.Y,B.X-tt.X),qt.Int128Mul(y.X-I.X,B.Y-tt.Y)):n.Cast_Int64((y.Y-I.Y)*(B.X-tt.X))-n.Cast_Int64((y.X-I.X)*(B.Y-tt.Y))===0)},n.ClipperBase.SlopesEqual3=function(s,a,c){return c?qt.op_Equality(qt.Int128Mul(s.Delta.Y,a.Delta.X),qt.Int128Mul(s.Delta.X,a.Delta.Y)):n.Cast_Int64(s.Delta.Y*a.Delta.X)===n.Cast_Int64(s.Delta.X*a.Delta.Y)},n.ClipperBase.SlopesEqual4=function(s,a,c,p){return p?qt.op_Equality(qt.Int128Mul(s.Y-a.Y,a.X-c.X),qt.Int128Mul(s.X-a.X,a.Y-c.Y)):n.Cast_Int64((s.Y-a.Y)*(a.X-c.X))-n.Cast_Int64((s.X-a.X)*(a.Y-c.Y))===0},n.ClipperBase.SlopesEqual5=function(s,a,c,p,y){return y?qt.op_Equality(qt.Int128Mul(s.Y-a.Y,c.X-p.X),qt.Int128Mul(s.X-a.X,c.Y-p.Y)):n.Cast_Int64((s.Y-a.Y)*(c.X-p.X))-n.Cast_Int64((s.X-a.X)*(c.Y-p.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var s=0,a=this.m_edges.length;s<a;++s){for(var c=0,p=this.m_edges[s].length;c<p;++c)this.m_edges[s][c]=null;n.Clear(this.m_edges[s])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var s=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=s}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(s,a){a.Value?(s.X>n.ClipperBase.hiRange||s.Y>n.ClipperBase.hiRange||-s.X>n.ClipperBase.hiRange||-s.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(s.X>n.ClipperBase.loRange||s.Y>n.ClipperBase.loRange||-s.X>n.ClipperBase.loRange||-s.Y>n.ClipperBase.loRange)&&(a.Value=!0,this.RangeTest(s,a))},n.ClipperBase.prototype.InitEdge=function(s,a,c,p){s.Next=a,s.Prev=c,s.Curr.X=p.X,s.Curr.Y=p.Y,n.use_xyz&&(s.Curr.Z=p.Z),s.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(s,a){s.Curr.Y>=s.Next.Curr.Y?(s.Bot.X=s.Curr.X,s.Bot.Y=s.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Curr.Z),s.Top.X=s.Next.Curr.X,s.Top.Y=s.Next.Curr.Y,n.use_xyz&&(s.Top.Z=s.Next.Curr.Z)):(s.Top.X=s.Curr.X,s.Top.Y=s.Curr.Y,n.use_xyz&&(s.Top.Z=s.Curr.Z),s.Bot.X=s.Next.Curr.X,s.Bot.Y=s.Next.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Next.Curr.Z)),this.SetDx(s),s.PolyTyp=a},n.ClipperBase.prototype.FindNextLocMin=function(s){for(var a;;){for(;n.IntPoint.op_Inequality(s.Bot,s.Prev.Bot)||n.IntPoint.op_Equality(s.Curr,s.Top);)s=s.Next;if(s.Dx!==n.ClipperBase.horizontal&&s.Prev.Dx!==n.ClipperBase.horizontal)break;for(;s.Prev.Dx===n.ClipperBase.horizontal;)s=s.Prev;for(a=s;s.Dx===n.ClipperBase.horizontal;)s=s.Next;if(s.Top.Y!==s.Prev.Bot.Y){a.Prev.Bot.X<s.Bot.X&&(s=a);break}}return s},n.ClipperBase.prototype.ProcessBound=function(s,a){var c,p=s,y;if(p.OutIdx===n.ClipperBase.Skip){if(s=p,a){for(;s.Top.Y===s.Next.Bot.Y;)s=s.Next;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Prev}else{for(;s.Top.Y===s.Prev.Bot.Y;)s=s.Prev;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Next}if(s===p)a?p=s.Next:p=s.Prev;else{a?s=p.Next:s=p.Prev;var I=new n.LocalMinima;I.Next=null,I.Y=s.Bot.Y,I.LeftBound=null,I.RightBound=s,s.WindDelta=0,p=this.ProcessBound(s,a),this.InsertLocalMinima(I)}return p}if(s.Dx===n.ClipperBase.horizontal&&(a?c=s.Prev:c=s.Next,c.Dx===n.ClipperBase.horizontal?c.Bot.X!==s.Bot.X&&c.Top.X!==s.Bot.X&&this.ReverseHorizontal(s):c.Bot.X!==s.Bot.X&&this.ReverseHorizontal(s)),c=s,a){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==n.ClipperBase.Skip;)p=p.Next;if(p.Dx===n.ClipperBase.horizontal&&p.Next.OutIdx!==n.ClipperBase.Skip){for(y=p;y.Prev.Dx===n.ClipperBase.horizontal;)y=y.Prev;y.Prev.Top.X>p.Next.Top.X&&(p=y.Prev)}for(;s!==p;)s.NextInLML=s.Next,s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),s=s.Next;s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==n.ClipperBase.Skip;)p=p.Prev;if(p.Dx===n.ClipperBase.horizontal&&p.Prev.OutIdx!==n.ClipperBase.Skip){for(y=p;y.Next.Dx===n.ClipperBase.horizontal;)y=y.Next;(y.Next.Top.X===p.Prev.Top.X||y.Next.Top.X>p.Prev.Top.X)&&(p=y.Next)}for(;s!==p;)s.NextInLML=s.Prev,s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),s=s.Prev;s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),p=p.Prev}return p},n.ClipperBase.prototype.AddPath=function(s,a,c){n.use_lines?!c&&a===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):c||n.Error("AddPath: Open paths have been disabled.");var p=s.length-1;if(c)for(;p>0&&n.IntPoint.op_Equality(s[p],s[0]);)--p;for(;p>0&&n.IntPoint.op_Equality(s[p],s[p-1]);)--p;if(c&&p<2||!c&&p<1)return!1;for(var y=new Array,I=0;I<=p;I++)y.push(new n.TEdge);var B=!0;y[1].Curr.X=s[1].X,y[1].Curr.Y=s[1].Y,n.use_xyz&&(y[1].Curr.Z=s[1].Z);var tt={Value:this.m_UseFullRange};this.RangeTest(s[0],tt),this.m_UseFullRange=tt.Value,tt.Value=this.m_UseFullRange,this.RangeTest(s[p],tt),this.m_UseFullRange=tt.Value,this.InitEdge(y[0],y[1],y[p],s[0]),this.InitEdge(y[p],y[0],y[p-1],s[p]);for(var I=p-1;I>=1;--I)tt.Value=this.m_UseFullRange,this.RangeTest(s[I],tt),this.m_UseFullRange=tt.Value,this.InitEdge(y[I],y[I+1],y[I-1],s[I]);for(var nt=y[0],ft=nt,Ct=nt;;){if(ft.Curr===ft.Next.Curr&&(c||ft.Next!==nt)){if(ft===ft.Next)break;ft===nt&&(nt=ft.Next),ft=this.RemoveEdge(ft),Ct=ft;continue}if(ft.Prev===ft.Next)break;if(c&&n.ClipperBase.SlopesEqual4(ft.Prev.Curr,ft.Curr,ft.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(ft.Prev.Curr,ft.Curr,ft.Next.Curr))){ft===nt&&(nt=ft.Next),ft=this.RemoveEdge(ft),ft=ft.Prev,Ct=ft;continue}if(ft=ft.Next,ft===Ct||!c&&ft.Next===nt)break}if(!c&&ft===ft.Next||c&&ft.Prev===ft.Next)return!1;c||(this.m_HasOpenPaths=!0,nt.Prev.OutIdx=n.ClipperBase.Skip),ft=nt;do this.InitEdge2(ft,a),ft=ft.Next,B&&ft.Curr.Y!==nt.Curr.Y&&(B=!1);while(ft!==nt);if(B){if(c)return!1;ft.Prev.OutIdx=n.ClipperBase.Skip;var At=new n.LocalMinima;for(At.Next=null,At.Y=ft.Bot.Y,At.LeftBound=null,At.RightBound=ft,At.RightBound.Side=n.EdgeSide.esRight,At.RightBound.WindDelta=0;ft.Bot.X!==ft.Prev.Top.X&&this.ReverseHorizontal(ft),ft.Next.OutIdx!==n.ClipperBase.Skip;)ft.NextInLML=ft.Next,ft=ft.Next;return this.InsertLocalMinima(At),this.m_edges.push(y),!0}this.m_edges.push(y);var Ot,ae=null;for(n.IntPoint.op_Equality(ft.Prev.Bot,ft.Prev.Top)&&(ft=ft.Next);ft=this.FindNextLocMin(ft),ft!==ae;){ae===null&&(ae=ft);var At=new n.LocalMinima;At.Next=null,At.Y=ft.Bot.Y,ft.Dx<ft.Prev.Dx?(At.LeftBound=ft.Prev,At.RightBound=ft,Ot=!1):(At.LeftBound=ft,At.RightBound=ft.Prev,Ot=!0),At.LeftBound.Side=n.EdgeSide.esLeft,At.RightBound.Side=n.EdgeSide.esRight,c?At.LeftBound.Next===At.RightBound?At.LeftBound.WindDelta=-1:At.LeftBound.WindDelta=1:At.LeftBound.WindDelta=0,At.RightBound.WindDelta=-At.LeftBound.WindDelta,ft=this.ProcessBound(At.LeftBound,Ot),ft.OutIdx===n.ClipperBase.Skip&&(ft=this.ProcessBound(ft,Ot));var ye=this.ProcessBound(At.RightBound,!Ot);ye.OutIdx===n.ClipperBase.Skip&&(ye=this.ProcessBound(ye,!Ot)),At.LeftBound.OutIdx===n.ClipperBase.Skip?At.LeftBound=null:At.RightBound.OutIdx===n.ClipperBase.Skip&&(At.RightBound=null),this.InsertLocalMinima(At),Ot||(ft=ye)}return!0},n.ClipperBase.prototype.AddPaths=function(s,a,c){for(var p=!1,y=0,I=s.length;y<I;++y)this.AddPath(s[y],a,c)&&(p=!0);return p},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(s,a,c){return n.IntPoint.op_Equality(s,c)||n.IntPoint.op_Equality(s,a)||n.IntPoint.op_Equality(c,a)?!1:s.X!==c.X?a.X>s.X==a.X<c.X:a.Y>s.Y==a.Y<c.Y},n.ClipperBase.prototype.RemoveEdge=function(s){s.Prev.Next=s.Next,s.Next.Prev=s.Prev;var a=s.Next;return s.Prev=null,a},n.ClipperBase.prototype.SetDx=function(s){s.Delta.X=s.Top.X-s.Bot.X,s.Delta.Y=s.Top.Y-s.Bot.Y,s.Delta.Y===0?s.Dx=n.ClipperBase.horizontal:s.Dx=s.Delta.X/s.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(s){if(this.m_MinimaList===null)this.m_MinimaList=s;else if(s.Y>=this.m_MinimaList.Y)s.Next=this.m_MinimaList,this.m_MinimaList=s;else{for(var a=this.m_MinimaList;a.Next!==null&&s.Y<a.Next.Y;)a=a.Next;s.Next=a.Next,a.Next=s}},n.ClipperBase.prototype.PopLocalMinima=function(s,a){return a.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===s?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(s){var a=s.Top.X;s.Top.X=s.Bot.X,s.Bot.X=a,n.use_xyz&&(a=s.Top.Z,s.Top.Z=s.Bot.Z,s.Bot.Z=a)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var s=this.m_MinimaList;s!==null;){this.InsertScanbeam(s.Y);var a=s.LeftBound;a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),a=s.RightBound,a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),s=s.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(s){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=s;else if(s>this.m_Scanbeam.Y){var a=new n.Scanbeam;a.Y=s,a.Next=this.m_Scanbeam,this.m_Scanbeam=a}else{for(var c=this.m_Scanbeam;c.Next!==null&&s<=c.Next.Y;)c=c.Next;if(s===c.Y)return;var p=new n.Scanbeam;p.Y=s,p.Next=c.Next,c.Next=p}},n.ClipperBase.prototype.PopScanbeam=function(s){return this.m_Scanbeam===null?(s.v=0,!1):(s.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var s=new n.OutRec;return s.Idx=n.ClipperBase.Unassigned,s.IsHole=!1,s.IsOpen=!1,s.FirstLeft=null,s.Pts=null,s.BottomPt=null,s.PolyNode=null,this.m_PolyOuts.push(s),s.Idx=this.m_PolyOuts.length-1,s},n.ClipperBase.prototype.DisposeOutRec=function(s){var a=this.m_PolyOuts[s];a.Pts=null,a=null,this.m_PolyOuts[s]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(s){s.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var a=s.PrevInAEL,c=s.NextInAEL;return s.NextInLML.OutIdx=s.OutIdx,a!==null?a.NextInAEL=s.NextInLML:this.m_ActiveEdges=s.NextInLML,c!==null&&(c.PrevInAEL=s.NextInLML),s.NextInLML.Side=s.Side,s.NextInLML.WindDelta=s.WindDelta,s.NextInLML.WindCnt=s.WindCnt,s.NextInLML.WindCnt2=s.WindCnt2,s=s.NextInLML,s.Curr.X=s.Bot.X,s.Curr.Y=s.Bot.Y,s.PrevInAEL=a,s.NextInAEL=c,n.ClipperBase.IsHorizontal(s)||this.InsertScanbeam(s.Top.Y),s},n.ClipperBase.prototype.SwapPositionsInAEL=function(s,a){if(!(s.NextInAEL===s.PrevInAEL||a.NextInAEL===a.PrevInAEL)){if(s.NextInAEL===a){var c=a.NextInAEL;c!==null&&(c.PrevInAEL=s);var p=s.PrevInAEL;p!==null&&(p.NextInAEL=a),a.PrevInAEL=p,a.NextInAEL=s,s.PrevInAEL=a,s.NextInAEL=c}else if(a.NextInAEL===s){var y=s.NextInAEL;y!==null&&(y.PrevInAEL=a);var I=a.PrevInAEL;I!==null&&(I.NextInAEL=s),s.PrevInAEL=I,s.NextInAEL=a,a.PrevInAEL=s,a.NextInAEL=y}else{var B=s.NextInAEL,tt=s.PrevInAEL;s.NextInAEL=a.NextInAEL,s.NextInAEL!==null&&(s.NextInAEL.PrevInAEL=s),s.PrevInAEL=a.PrevInAEL,s.PrevInAEL!==null&&(s.PrevInAEL.NextInAEL=s),a.NextInAEL=B,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=a),a.PrevInAEL=tt,a.PrevInAEL!==null&&(a.PrevInAEL.NextInAEL=a)}s.PrevInAEL===null?this.m_ActiveEdges=s:a.PrevInAEL===null&&(this.m_ActiveEdges=a)}},n.ClipperBase.prototype.DeleteFromAEL=function(s){var a=s.PrevInAEL,c=s.NextInAEL;a===null&&c===null&&s!==this.m_ActiveEdges||(a!==null?a.NextInAEL=c:this.m_ActiveEdges=c,c!==null&&(c.PrevInAEL=a),s.NextInAEL=null,s.PrevInAEL=null)},n.Clipper=function(s){typeof s>"u"&&(s=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&s)!==0,this.StrictlySimple=(2&s)!==0,this.PreserveCollinear=(4&s)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(s){var a=new n.Maxima;if(a.X=s,this.m_Maxima===null)this.m_Maxima=a,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(s<this.m_Maxima.X)a.Next=this.m_Maxima,a.Prev=null,this.m_Maxima=a;else{for(var c=this.m_Maxima;c.Next!==null&&s>=c.Next.X;)c=c.Next;if(s===c.X)return;a.Next=c.Next,a.Prev=c,c.Next!==null&&(c.Next.Prev=a),c.Next=a}},n.Clipper.prototype.Execute=function(){var s=arguments,a=s.length,c=s[1]instanceof n.PolyTree;if(a===4&&!c){var p=s[0],y=s[1],I=s[2],B=s[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(y),this.m_SubjFillType=I,this.m_ClipFillType=B,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var tt=this.ExecuteInternal();tt&&this.BuildResult(y)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return tt}else if(a===4&&c){var p=s[0],nt=s[1],I=s[2],B=s[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=I,this.m_ClipFillType=B,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var tt=this.ExecuteInternal();tt&&this.BuildResult2(nt)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return tt}else if(a===2&&!c){var p=s[0],y=s[1];return this.Execute(p,y,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(a===2&&c){var p=s[0],nt=s[1];return this.Execute(p,nt,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(s){if(!(s.FirstLeft===null||s.IsHole!==s.FirstLeft.IsHole&&s.FirstLeft.Pts!==null)){for(var a=s.FirstLeft;a!==null&&(a.IsHole===s.IsHole||a.Pts===null);)a=a.FirstLeft;s.FirstLeft=a}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var s={},a={};if(!this.PopScanbeam(s))return!1;for(this.InsertLocalMinimaIntoAEL(s.v);this.PopScanbeam(a)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(a.v))return!1;this.ProcessEdgesAtTopOfScanbeam(a.v),s.v=a.v,this.InsertLocalMinimaIntoAEL(s.v)}var c,p,y;for(p=0,y=this.m_PolyOuts.length;p<y;p++)c=this.m_PolyOuts[p],!(c.Pts===null||c.IsOpen)&&(c.IsHole^this.ReverseSolution)==this.Area$1(c)>0&&this.ReversePolyPtLinks(c.Pts);for(this.JoinCommonEdges(),p=0,y=this.m_PolyOuts.length;p<y;p++)c=this.m_PolyOuts[p],c.Pts!==null&&(c.IsOpen?this.FixupOutPolyline(c):this.FixupOutPolygon(c));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var s=0,a=this.m_PolyOuts.length;s<a;++s)this.DisposeOutRec(s);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(s,a,c){var p=new n.Join;p.OutPt1=s,p.OutPt2=a,p.OffPt.X=c.X,p.OffPt.Y=c.Y,n.use_xyz&&(p.OffPt.Z=c.Z),this.m_Joins.push(p)},n.Clipper.prototype.AddGhostJoin=function(s,a){var c=new n.Join;c.OutPt1=s,c.OffPt.X=a.X,c.OffPt.Y=a.Y,n.use_xyz&&(c.OffPt.Z=a.Z),this.m_GhostJoins.push(c)},n.Clipper.prototype.SetZ=function(s,a,c){if(this.ZFillFunction!==null){if(s.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(s,a.Bot)?s.Z=a.Bot.Z:n.IntPoint.op_Equality(s,a.Top)?s.Z=a.Top.Z:n.IntPoint.op_Equality(s,c.Bot)?s.Z=c.Bot.Z:n.IntPoint.op_Equality(s,c.Top)?s.Z=c.Top.Z:this.ZFillFunction(a.Bot,a.Top,c.Bot,c.Top,s)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(s){for(var a={},c,p;this.PopLocalMinima(s,a);){c=a.v.LeftBound,p=a.v.RightBound;var y=null;if(c===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(y=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(c,null),this.SetWindingCount(c),this.IsContributing(c)&&(y=this.AddOutPt(c,c.Bot)),this.InsertScanbeam(c.Top.Y)):(this.InsertEdgeIntoAEL(c,null),this.InsertEdgeIntoAEL(p,c),this.SetWindingCount(c),p.WindCnt=c.WindCnt,p.WindCnt2=c.WindCnt2,this.IsContributing(c)&&(y=this.AddLocalMinPoly(c,p,c.Bot)),this.InsertScanbeam(c.Top.Y)),p!==null&&(n.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(c===null||p===null)){if(y!==null&&n.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var I=0,B=this.m_GhostJoins.length;I<B;I++){var tt=this.m_GhostJoins[I];this.HorzSegmentsOverlap(tt.OutPt1.Pt.X,tt.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin(tt.OutPt1,y,tt.OffPt)}if(c.OutIdx>=0&&c.PrevInAEL!==null&&c.PrevInAEL.Curr.X===c.Bot.X&&c.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(c.PrevInAEL.Curr,c.PrevInAEL.Top,c.Curr,c.Top,this.m_UseFullRange)&&c.WindDelta!==0&&c.PrevInAEL.WindDelta!==0){var nt=this.AddOutPt(c.PrevInAEL,c.Bot);this.AddJoin(y,nt,c.Top)}if(c.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var nt=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(y,nt,p.Top)}var ft=c.NextInAEL;if(ft!==null)for(;ft!==p;)this.IntersectEdges(p,ft,c.Curr),ft=ft.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(s,a){if(this.m_ActiveEdges===null)s.PrevInAEL=null,s.NextInAEL=null,this.m_ActiveEdges=s;else if(a===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,s))s.PrevInAEL=null,s.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=s,this.m_ActiveEdges=s;else{for(a===null&&(a=this.m_ActiveEdges);a.NextInAEL!==null&&!this.E2InsertsBeforeE1(a.NextInAEL,s);)a=a.NextInAEL;s.NextInAEL=a.NextInAEL,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=s),s.PrevInAEL=a,a.NextInAEL=s}},n.Clipper.prototype.E2InsertsBeforeE1=function(s,a){return a.Curr.X===s.Curr.X?a.Top.Y>s.Top.Y?a.Top.X<n.Clipper.TopX(s,a.Top.Y):s.Top.X>n.Clipper.TopX(a,s.Top.Y):a.Curr.X<s.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(s){var a,c;switch(s.PolyTyp===n.PolyType.ptSubject?(a=this.m_SubjFillType,c=this.m_ClipFillType):(a=this.m_ClipFillType,c=this.m_SubjFillType),a){case n.PolyFillType.pftEvenOdd:if(s.WindDelta===0&&s.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(s.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(s.WindCnt!==1)return!1;break;default:if(s.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctUnion:switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}case n.ClipType.ctDifference:if(s.PolyTyp===n.PolyType.ptSubject)switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctXor:if(s.WindDelta===0)switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(s){for(var a=s.PrevInAEL;a!==null&&(a.PolyTyp!==s.PolyTyp||a.WindDelta===0);)a=a.PrevInAEL;if(a===null){var c=s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;s.WindDelta===0?s.WindCnt=c===n.PolyFillType.pftNegative?-1:1:s.WindCnt=s.WindDelta,s.WindCnt2=0,a=this.m_ActiveEdges}else if(s.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)s.WindCnt=1,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;else if(this.IsEvenOddFillType(s)){if(s.WindDelta===0){for(var p=!0,y=a.PrevInAEL;y!==null;)y.PolyTyp===a.PolyTyp&&y.WindDelta!==0&&(p=!p),y=y.PrevInAEL;s.WindCnt=p?0:1}else s.WindCnt=s.WindDelta;s.WindCnt2=a.WindCnt2,a=a.NextInAEL}else a.WindCnt*a.WindDelta<0?Math.abs(a.WindCnt)>1?a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta:s.WindCnt=s.WindDelta===0?1:s.WindDelta:s.WindDelta===0?s.WindCnt=a.WindCnt<0?a.WindCnt-1:a.WindCnt+1:a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;if(this.IsEvenOddAltFillType(s))for(;a!==s;)a.WindDelta!==0&&(s.WindCnt2=s.WindCnt2===0?1:0),a=a.NextInAEL;else for(;a!==s;)s.WindCnt2+=a.WindDelta,a=a.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(s){this.m_SortedEdges===null?(this.m_SortedEdges=s,s.PrevInSEL=null,s.NextInSEL=null):(s.NextInSEL=this.m_SortedEdges,s.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=s,this.m_SortedEdges=s)},n.Clipper.prototype.PopEdgeFromSEL=function(s){if(s.v=this.m_SortedEdges,s.v===null)return!1;var a=s.v;return this.m_SortedEdges=s.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),a.NextInSEL=null,a.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var s=this.m_ActiveEdges;for(this.m_SortedEdges=s;s!==null;)s.PrevInSEL=s.PrevInAEL,s.NextInSEL=s.NextInAEL,s=s.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(s,a){if(!(s.NextInSEL===null&&s.PrevInSEL===null)&&!(a.NextInSEL===null&&a.PrevInSEL===null)){if(s.NextInSEL===a){var c=a.NextInSEL;c!==null&&(c.PrevInSEL=s);var p=s.PrevInSEL;p!==null&&(p.NextInSEL=a),a.PrevInSEL=p,a.NextInSEL=s,s.PrevInSEL=a,s.NextInSEL=c}else if(a.NextInSEL===s){var c=s.NextInSEL;c!==null&&(c.PrevInSEL=a);var p=a.PrevInSEL;p!==null&&(p.NextInSEL=s),s.PrevInSEL=p,s.NextInSEL=a,a.PrevInSEL=s,a.NextInSEL=c}else{var c=s.NextInSEL,p=s.PrevInSEL;s.NextInSEL=a.NextInSEL,s.NextInSEL!==null&&(s.NextInSEL.PrevInSEL=s),s.PrevInSEL=a.PrevInSEL,s.PrevInSEL!==null&&(s.PrevInSEL.NextInSEL=s),a.NextInSEL=c,a.NextInSEL!==null&&(a.NextInSEL.PrevInSEL=a),a.PrevInSEL=p,a.PrevInSEL!==null&&(a.PrevInSEL.NextInSEL=a)}s.PrevInSEL===null?this.m_SortedEdges=s:a.PrevInSEL===null&&(this.m_SortedEdges=a)}},n.Clipper.prototype.AddLocalMaxPoly=function(s,a,c){this.AddOutPt(s,c),a.WindDelta===0&&this.AddOutPt(a,c),s.OutIdx===a.OutIdx?(s.OutIdx=-1,a.OutIdx=-1):s.OutIdx<a.OutIdx?this.AppendPolygon(s,a):this.AppendPolygon(a,s)},n.Clipper.prototype.AddLocalMinPoly=function(s,a,c){var p,y,I;if(n.ClipperBase.IsHorizontal(a)||s.Dx>a.Dx?(p=this.AddOutPt(s,c),a.OutIdx=s.OutIdx,s.Side=n.EdgeSide.esLeft,a.Side=n.EdgeSide.esRight,y=s,y.PrevInAEL===a?I=a.PrevInAEL:I=y.PrevInAEL):(p=this.AddOutPt(a,c),s.OutIdx=a.OutIdx,s.Side=n.EdgeSide.esRight,a.Side=n.EdgeSide.esLeft,y=a,y.PrevInAEL===s?I=s.PrevInAEL:I=y.PrevInAEL),I!==null&&I.OutIdx>=0&&I.Top.Y<c.Y&&y.Top.Y<c.Y){var B=n.Clipper.TopX(I,c.Y),tt=n.Clipper.TopX(y,c.Y);if(B===tt&&y.WindDelta!==0&&I.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(B,c.Y),I.Top,new n.IntPoint2(tt,c.Y),y.Top,this.m_UseFullRange)){var nt=this.AddOutPt(I,c);this.AddJoin(p,nt,y.Top)}}return p},n.Clipper.prototype.AddOutPt=function(s,a){if(s.OutIdx<0){var c=this.CreateOutRec();c.IsOpen=s.WindDelta===0;var p=new n.OutPt;return c.Pts=p,p.Idx=c.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=p,p.Prev=p,c.IsOpen||this.SetHoleState(s,c),s.OutIdx=c.Idx,p}else{var c=this.m_PolyOuts[s.OutIdx],y=c.Pts,I=s.Side===n.EdgeSide.esLeft;if(I&&n.IntPoint.op_Equality(a,y.Pt))return y;if(!I&&n.IntPoint.op_Equality(a,y.Prev.Pt))return y.Prev;var p=new n.OutPt;return p.Idx=c.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=y,p.Prev=y.Prev,p.Prev.Next=p,y.Prev=p,I&&(c.Pts=p),p}},n.Clipper.prototype.GetLastOutPt=function(s){var a=this.m_PolyOuts[s.OutIdx];return s.Side===n.EdgeSide.esLeft?a.Pts:a.Pts.Prev},n.Clipper.prototype.SwapPoints=function(s,a){var c=new n.IntPoint1(s.Value);s.Value.X=a.Value.X,s.Value.Y=a.Value.Y,n.use_xyz&&(s.Value.Z=a.Value.Z),a.Value.X=c.X,a.Value.Y=c.Y,n.use_xyz&&(a.Value.Z=c.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(s,a,c,p){var y;return s>a&&(y=s,s=a,a=y),c>p&&(y=c,c=p,p=y),s<p&&c<a},n.Clipper.prototype.SetHoleState=function(s,a){for(var c=s.PrevInAEL,p=null;c!==null;)c.OutIdx>=0&&c.WindDelta!==0&&(p===null?p=c:p.OutIdx===c.OutIdx&&(p=null)),c=c.PrevInAEL;p===null?(a.FirstLeft=null,a.IsHole=!1):(a.FirstLeft=this.m_PolyOuts[p.OutIdx],a.IsHole=!a.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(s,a){return s.Y===a.Y?n.ClipperBase.horizontal:(a.X-s.X)/(a.Y-s.Y)},n.Clipper.prototype.FirstIsBottomPt=function(s,a){for(var c=s.Prev;n.IntPoint.op_Equality(c.Pt,s.Pt)&&c!==s;)c=c.Prev;var p=Math.abs(this.GetDx(s.Pt,c.Pt));for(c=s.Next;n.IntPoint.op_Equality(c.Pt,s.Pt)&&c!==s;)c=c.Next;var y=Math.abs(this.GetDx(s.Pt,c.Pt));for(c=a.Prev;n.IntPoint.op_Equality(c.Pt,a.Pt)&&c!==a;)c=c.Prev;var I=Math.abs(this.GetDx(a.Pt,c.Pt));for(c=a.Next;n.IntPoint.op_Equality(c.Pt,a.Pt)&&c!==a;)c=c.Next;var B=Math.abs(this.GetDx(a.Pt,c.Pt));return Math.max(p,y)===Math.max(I,B)&&Math.min(p,y)===Math.min(I,B)?this.Area(s)>0:p>=I&&p>=B||y>=I&&y>=B},n.Clipper.prototype.GetBottomPt=function(s){for(var a=null,c=s.Next;c!==s;)c.Pt.Y>s.Pt.Y?(s=c,a=null):c.Pt.Y===s.Pt.Y&&c.Pt.X<=s.Pt.X&&(c.Pt.X<s.Pt.X?(a=null,s=c):c.Next!==s&&c.Prev!==s&&(a=c)),c=c.Next;if(a!==null)for(;a!==c;)for(this.FirstIsBottomPt(c,a)||(s=a),a=a.Next;n.IntPoint.op_Inequality(a.Pt,s.Pt);)a=a.Next;return s},n.Clipper.prototype.GetLowermostRec=function(s,a){s.BottomPt===null&&(s.BottomPt=this.GetBottomPt(s.Pts)),a.BottomPt===null&&(a.BottomPt=this.GetBottomPt(a.Pts));var c=s.BottomPt,p=a.BottomPt;return c.Pt.Y>p.Pt.Y?s:c.Pt.Y<p.Pt.Y?a:c.Pt.X<p.Pt.X?s:c.Pt.X>p.Pt.X||c.Next===c?a:p.Next===p||this.FirstIsBottomPt(c,p)?s:a},n.Clipper.prototype.OutRec1RightOfOutRec2=function(s,a){do if(s=s.FirstLeft,s===a)return!0;while(s!==null);return!1},n.Clipper.prototype.GetOutRec=function(s){for(var a=this.m_PolyOuts[s];a!==this.m_PolyOuts[a.Idx];)a=this.m_PolyOuts[a.Idx];return a},n.Clipper.prototype.AppendPolygon=function(s,a){var c=this.m_PolyOuts[s.OutIdx],p=this.m_PolyOuts[a.OutIdx],y;this.OutRec1RightOfOutRec2(c,p)?y=p:this.OutRec1RightOfOutRec2(p,c)?y=c:y=this.GetLowermostRec(c,p);var I=c.Pts,B=I.Prev,tt=p.Pts,nt=tt.Prev;s.Side===n.EdgeSide.esLeft?a.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(tt),tt.Next=I,I.Prev=tt,B.Next=nt,nt.Prev=B,c.Pts=nt):(nt.Next=I,I.Prev=nt,tt.Prev=B,B.Next=tt,c.Pts=tt):a.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(tt),B.Next=nt,nt.Prev=B,tt.Next=I,I.Prev=tt):(B.Next=tt,tt.Prev=B,I.Prev=nt,nt.Next=I),c.BottomPt=null,y===p&&(p.FirstLeft!==c&&(c.FirstLeft=p.FirstLeft),c.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=c;var ft=s.OutIdx,Ct=a.OutIdx;s.OutIdx=-1,a.OutIdx=-1;for(var At=this.m_ActiveEdges;At!==null;){if(At.OutIdx===Ct){At.OutIdx=ft,At.Side=s.Side;break}At=At.NextInAEL}p.Idx=c.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(s){if(s!==null){var a,c;a=s;do c=a.Next,a.Next=a.Prev,a.Prev=c,a=c;while(a!==s)}},n.Clipper.SwapSides=function(s,a){var c=s.Side;s.Side=a.Side,a.Side=c},n.Clipper.SwapPolyIndexes=function(s,a){var c=s.OutIdx;s.OutIdx=a.OutIdx,a.OutIdx=c},n.Clipper.prototype.IntersectEdges=function(s,a,c){var p=s.OutIdx>=0,y=a.OutIdx>=0;if(n.use_xyz&&this.SetZ(c,s,a),n.use_lines&&(s.WindDelta===0||a.WindDelta===0)){if(s.WindDelta===0&&a.WindDelta===0)return;s.PolyTyp===a.PolyTyp&&s.WindDelta!==a.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?s.WindDelta===0?y&&(this.AddOutPt(s,c),p&&(s.OutIdx=-1)):p&&(this.AddOutPt(a,c),y&&(a.OutIdx=-1)):s.PolyTyp!==a.PolyTyp&&(s.WindDelta===0&&Math.abs(a.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||a.WindCnt2===0)?(this.AddOutPt(s,c),p&&(s.OutIdx=-1)):a.WindDelta===0&&Math.abs(s.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||s.WindCnt2===0)&&(this.AddOutPt(a,c),y&&(a.OutIdx=-1)));return}if(s.PolyTyp===a.PolyTyp)if(this.IsEvenOddFillType(s)){var I=s.WindCnt;s.WindCnt=a.WindCnt,a.WindCnt=I}else s.WindCnt+a.WindDelta===0?s.WindCnt=-s.WindCnt:s.WindCnt+=a.WindDelta,a.WindCnt-s.WindDelta===0?a.WindCnt=-a.WindCnt:a.WindCnt-=s.WindDelta;else this.IsEvenOddFillType(a)?s.WindCnt2=s.WindCnt2===0?1:0:s.WindCnt2+=a.WindDelta,this.IsEvenOddFillType(s)?a.WindCnt2=a.WindCnt2===0?1:0:a.WindCnt2-=s.WindDelta;var B,tt,nt,ft;s.PolyTyp===n.PolyType.ptSubject?(B=this.m_SubjFillType,nt=this.m_ClipFillType):(B=this.m_ClipFillType,nt=this.m_SubjFillType),a.PolyTyp===n.PolyType.ptSubject?(tt=this.m_SubjFillType,ft=this.m_ClipFillType):(tt=this.m_ClipFillType,ft=this.m_SubjFillType);var Ct,At;switch(B){case n.PolyFillType.pftPositive:Ct=s.WindCnt;break;case n.PolyFillType.pftNegative:Ct=-s.WindCnt;break;default:Ct=Math.abs(s.WindCnt);break}switch(tt){case n.PolyFillType.pftPositive:At=a.WindCnt;break;case n.PolyFillType.pftNegative:At=-a.WindCnt;break;default:At=Math.abs(a.WindCnt);break}if(p&&y)Ct!==0&&Ct!==1||At!==0&&At!==1||s.PolyTyp!==a.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(s,a,c):(this.AddOutPt(s,c),this.AddOutPt(a,c),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(p)(At===0||At===1)&&(this.AddOutPt(s,c),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(y)(Ct===0||Ct===1)&&(this.AddOutPt(a,c),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if((Ct===0||Ct===1)&&(At===0||At===1)){var Ot,ae;switch(nt){case n.PolyFillType.pftPositive:Ot=s.WindCnt2;break;case n.PolyFillType.pftNegative:Ot=-s.WindCnt2;break;default:Ot=Math.abs(s.WindCnt2);break}switch(ft){case n.PolyFillType.pftPositive:ae=a.WindCnt2;break;case n.PolyFillType.pftNegative:ae=-a.WindCnt2;break;default:ae=Math.abs(a.WindCnt2);break}if(s.PolyTyp!==a.PolyTyp)this.AddLocalMinPoly(s,a,c);else if(Ct===1&&At===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Ot>0&&ae>0&&this.AddLocalMinPoly(s,a,c);break;case n.ClipType.ctUnion:Ot<=0&&ae<=0&&this.AddLocalMinPoly(s,a,c);break;case n.ClipType.ctDifference:(s.PolyTyp===n.PolyType.ptClip&&Ot>0&&ae>0||s.PolyTyp===n.PolyType.ptSubject&&Ot<=0&&ae<=0)&&this.AddLocalMinPoly(s,a,c);break;case n.ClipType.ctXor:this.AddLocalMinPoly(s,a,c);break}else n.Clipper.SwapSides(s,a)}},n.Clipper.prototype.DeleteFromSEL=function(s){var a=s.PrevInSEL,c=s.NextInSEL;a===null&&c===null&&s!==this.m_SortedEdges||(a!==null?a.NextInSEL=c:this.m_SortedEdges=c,c!==null&&(c.PrevInSEL=a),s.NextInSEL=null,s.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var s={};this.PopEdgeFromSEL(s);)this.ProcessHorizontal(s.v)},n.Clipper.prototype.GetHorzDirection=function(s,a){s.Bot.X<s.Top.X?(a.Left=s.Bot.X,a.Right=s.Top.X,a.Dir=n.Direction.dLeftToRight):(a.Left=s.Top.X,a.Right=s.Bot.X,a.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(s){var a={Dir:null,Left:null,Right:null};this.GetHorzDirection(s,a);for(var c=a.Dir,p=a.Left,y=a.Right,I=s.WindDelta===0,B=s,tt=null;B.NextInLML!==null&&n.ClipperBase.IsHorizontal(B.NextInLML);)B=B.NextInLML;B.NextInLML===null&&(tt=this.GetMaximaPair(B));var nt=this.m_Maxima;if(nt!==null)if(c===n.Direction.dLeftToRight){for(;nt!==null&&nt.X<=s.Bot.X;)nt=nt.Next;nt!==null&&nt.X>=B.Top.X&&(nt=null)}else{for(;nt.Next!==null&&nt.Next.X<s.Bot.X;)nt=nt.Next;nt.X<=B.Top.X&&(nt=null)}for(var ft=null;;){for(var Ct=s===B,At=this.GetNextInAEL(s,c);At!==null;){if(nt!==null)if(c===n.Direction.dLeftToRight)for(;nt!==null&&nt.X<At.Curr.X;)s.OutIdx>=0&&!I&&this.AddOutPt(s,new n.IntPoint2(nt.X,s.Bot.Y)),nt=nt.Next;else for(;nt!==null&&nt.X>At.Curr.X;)s.OutIdx>=0&&!I&&this.AddOutPt(s,new n.IntPoint2(nt.X,s.Bot.Y)),nt=nt.Prev;if(c===n.Direction.dLeftToRight&&At.Curr.X>y||c===n.Direction.dRightToLeft&&At.Curr.X<p||At.Curr.X===s.Top.X&&s.NextInLML!==null&&At.Dx<s.NextInLML.Dx)break;if(s.OutIdx>=0&&!I){n.use_xyz&&(c===n.Direction.dLeftToRight?this.SetZ(At.Curr,s,At):this.SetZ(At.Curr,At,s)),ft=this.AddOutPt(s,At.Curr);for(var Ot=this.m_SortedEdges;Ot!==null;){if(Ot.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,Ot.Bot.X,Ot.Top.X)){var ae=this.GetLastOutPt(Ot);this.AddJoin(ae,ft,Ot.Top)}Ot=Ot.NextInSEL}this.AddGhostJoin(ft,s.Bot)}if(At===tt&&Ct){s.OutIdx>=0&&this.AddLocalMaxPoly(s,tt,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(tt);return}if(c===n.Direction.dLeftToRight){var ye=new n.IntPoint2(At.Curr.X,s.Curr.Y);this.IntersectEdges(s,At,ye)}else{var ye=new n.IntPoint2(At.Curr.X,s.Curr.Y);this.IntersectEdges(At,s,ye)}var we=this.GetNextInAEL(At,c);this.SwapPositionsInAEL(s,At),At=we}if(s.NextInLML===null||!n.ClipperBase.IsHorizontal(s.NextInLML))break;s=this.UpdateEdgeIntoAEL(s),s.OutIdx>=0&&this.AddOutPt(s,s.Bot),a={Dir:c,Left:p,Right:y},this.GetHorzDirection(s,a),c=a.Dir,p=a.Left,y=a.Right}if(s.OutIdx>=0&&ft===null){ft=this.GetLastOutPt(s);for(var Ot=this.m_SortedEdges;Ot!==null;){if(Ot.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,Ot.Bot.X,Ot.Top.X)){var ae=this.GetLastOutPt(Ot);this.AddJoin(ae,ft,Ot.Top)}Ot=Ot.NextInSEL}this.AddGhostJoin(ft,s.Top)}if(s.NextInLML!==null)if(s.OutIdx>=0){if(ft=this.AddOutPt(s,s.Top),s=this.UpdateEdgeIntoAEL(s),s.WindDelta===0)return;var He=s.PrevInAEL,we=s.NextInAEL;if(He!==null&&He.Curr.X===s.Bot.X&&He.Curr.Y===s.Bot.Y&&He.WindDelta===0&&He.OutIdx>=0&&He.Curr.Y>He.Top.Y&&n.ClipperBase.SlopesEqual3(s,He,this.m_UseFullRange)){var ae=this.AddOutPt(He,s.Bot);this.AddJoin(ft,ae,s.Top)}else if(we!==null&&we.Curr.X===s.Bot.X&&we.Curr.Y===s.Bot.Y&&we.WindDelta!==0&&we.OutIdx>=0&&we.Curr.Y>we.Top.Y&&n.ClipperBase.SlopesEqual3(s,we,this.m_UseFullRange)){var ae=this.AddOutPt(we,s.Bot);this.AddJoin(ft,ae,s.Top)}}else s=this.UpdateEdgeIntoAEL(s);else s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s)},n.Clipper.prototype.GetNextInAEL=function(s,a){return a===n.Direction.dLeftToRight?s.NextInAEL:s.PrevInAEL},n.Clipper.prototype.IsMinima=function(s){return s!==null&&s.Prev.NextInLML!==s&&s.Next.NextInLML!==s},n.Clipper.prototype.IsMaxima=function(s,a){return s!==null&&s.Top.Y===a&&s.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(s,a){return s.Top.Y===a&&s.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(s){return n.IntPoint.op_Equality(s.Next.Top,s.Top)&&s.Next.NextInLML===null?s.Next:n.IntPoint.op_Equality(s.Prev.Top,s.Top)&&s.Prev.NextInLML===null?s.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(s){var a=this.GetMaximaPair(s);return a===null||a.OutIdx===n.ClipperBase.Skip||a.NextInAEL===a.PrevInAEL&&!n.ClipperBase.IsHorizontal(a)?null:a},n.Clipper.prototype.ProcessIntersections=function(s){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(s),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(s){if(this.m_ActiveEdges!==null){var a=this.m_ActiveEdges;for(this.m_SortedEdges=a;a!==null;)a.PrevInSEL=a.PrevInAEL,a.NextInSEL=a.NextInAEL,a.Curr.X=n.Clipper.TopX(a,s),a=a.NextInAEL;for(var c=!0;c&&this.m_SortedEdges!==null;){for(c=!1,a=this.m_SortedEdges;a.NextInSEL!==null;){var p=a.NextInSEL,y=new n.IntPoint0;if(a.Curr.X>p.Curr.X){this.IntersectPoint(a,p,y),y.Y<s&&(y=new n.IntPoint2(n.Clipper.TopX(a,s),s));var I=new n.IntersectNode;I.Edge1=a,I.Edge2=p,I.Pt.X=y.X,I.Pt.Y=y.Y,n.use_xyz&&(I.Pt.Z=y.Z),this.m_IntersectList.push(I),this.SwapPositionsInSEL(a,p),c=!0}else a=p}if(a.PrevInSEL!==null)a.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(s){return s.Edge1.NextInSEL===s.Edge2||s.Edge1.PrevInSEL===s.Edge2},n.Clipper.IntersectNodeSort=function(s,a){return a.Pt.Y-s.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var s=this.m_IntersectList.length,a=0;a<s;a++){if(!this.EdgesAdjacent(this.m_IntersectList[a])){for(var c=a+1;c<s&&!this.EdgesAdjacent(this.m_IntersectList[c]);)c++;if(c===s)return!1;var p=this.m_IntersectList[a];this.m_IntersectList[a]=this.m_IntersectList[c],this.m_IntersectList[c]=p}this.SwapPositionsInSEL(this.m_IntersectList[a].Edge1,this.m_IntersectList[a].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var s=0,a=this.m_IntersectList.length;s<a;s++){var c=this.m_IntersectList[s];this.IntersectEdges(c.Edge1,c.Edge2,c.Pt),this.SwapPositionsInAEL(c.Edge1,c.Edge2)}this.m_IntersectList.length=0};var te=function(s){return s<0?Math.ceil(s-.5):Math.round(s)},Oe=function(s){return s<0?Math.ceil(s-.5):Math.floor(s+.5)},qe=function(s){return s<0?-Math.round(Math.abs(s)):Math.round(s)},Pe=function(s){return s<0?(s-=.5,s<-2147483648?Math.ceil(s):s|0):(s+=.5,s>2147483647?Math.floor(s):s|0)};r.msie?n.Clipper.Round=te:r.chromium?n.Clipper.Round=qe:r.safari?n.Clipper.Round=Pe:n.Clipper.Round=Oe,n.Clipper.TopX=function(s,a){return a===s.Top.Y?s.Top.X:s.Bot.X+n.Clipper.Round(s.Dx*(a-s.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(s,a,c){c.X=0,c.Y=0;var p,y;if(s.Dx===a.Dx){c.Y=s.Curr.Y,c.X=n.Clipper.TopX(s,c.Y);return}if(s.Delta.X===0)c.X=s.Bot.X,n.ClipperBase.IsHorizontal(a)?c.Y=a.Bot.Y:(y=a.Bot.Y-a.Bot.X/a.Dx,c.Y=n.Clipper.Round(c.X/a.Dx+y));else if(a.Delta.X===0)c.X=a.Bot.X,n.ClipperBase.IsHorizontal(s)?c.Y=s.Bot.Y:(p=s.Bot.Y-s.Bot.X/s.Dx,c.Y=n.Clipper.Round(c.X/s.Dx+p));else{p=s.Bot.X-s.Bot.Y*s.Dx,y=a.Bot.X-a.Bot.Y*a.Dx;var I=(y-p)/(s.Dx-a.Dx);c.Y=n.Clipper.Round(I),Math.abs(s.Dx)<Math.abs(a.Dx)?c.X=n.Clipper.Round(s.Dx*I+p):c.X=n.Clipper.Round(a.Dx*I+y)}if(c.Y<s.Top.Y||c.Y<a.Top.Y){if(s.Top.Y>a.Top.Y)return c.Y=s.Top.Y,c.X=n.Clipper.TopX(a,s.Top.Y),c.X<s.Top.X;c.Y=a.Top.Y,Math.abs(s.Dx)<Math.abs(a.Dx)?c.X=n.Clipper.TopX(s,c.Y):c.X=n.Clipper.TopX(a,c.Y)}c.Y>s.Curr.Y&&(c.Y=s.Curr.Y,Math.abs(s.Dx)>Math.abs(a.Dx)?c.X=n.Clipper.TopX(a,c.Y):c.X=n.Clipper.TopX(s,c.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(s){for(var a=this.m_ActiveEdges;a!==null;){var c=this.IsMaxima(a,s);if(c){var p=this.GetMaximaPairEx(a);c=p===null||!n.ClipperBase.IsHorizontal(p)}if(c){this.StrictlySimple&&this.InsertMaxima(a.Top.X);var y=a.PrevInAEL;this.DoMaxima(a),y===null?a=this.m_ActiveEdges:a=y.NextInAEL}else{if(this.IsIntermediate(a,s)&&n.ClipperBase.IsHorizontal(a.NextInLML)?(a=this.UpdateEdgeIntoAEL(a),a.OutIdx>=0&&this.AddOutPt(a,a.Bot),this.AddEdgeToSEL(a)):(a.Curr.X=n.Clipper.TopX(a,s),a.Curr.Y=s),n.use_xyz&&(a.Top.Y===s?a.Curr.Z=a.Top.Z:a.Bot.Y===s?a.Curr.Z=a.Bot.Z:a.Curr.Z=0),this.StrictlySimple){var y=a.PrevInAEL;if(a.OutIdx>=0&&a.WindDelta!==0&&y!==null&&y.OutIdx>=0&&y.Curr.X===a.Curr.X&&y.WindDelta!==0){var I=new n.IntPoint1(a.Curr);n.use_xyz&&this.SetZ(I,y,a);var B=this.AddOutPt(y,I),tt=this.AddOutPt(a,I);this.AddJoin(B,tt,I)}}a=a.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,a=this.m_ActiveEdges;a!==null;){if(this.IsIntermediate(a,s)){var B=null;a.OutIdx>=0&&(B=this.AddOutPt(a,a.Top)),a=this.UpdateEdgeIntoAEL(a);var y=a.PrevInAEL,nt=a.NextInAEL;if(y!==null&&y.Curr.X===a.Bot.X&&y.Curr.Y===a.Bot.Y&&B!==null&&y.OutIdx>=0&&y.Curr.Y===y.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,y.Curr,y.Top,this.m_UseFullRange)&&a.WindDelta!==0&&y.WindDelta!==0){var tt=this.AddOutPt(ePrev2,a.Bot);this.AddJoin(B,tt,a.Top)}else if(nt!==null&&nt.Curr.X===a.Bot.X&&nt.Curr.Y===a.Bot.Y&&B!==null&&nt.OutIdx>=0&&nt.Curr.Y===nt.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,nt.Curr,nt.Top,this.m_UseFullRange)&&a.WindDelta!==0&&nt.WindDelta!==0){var tt=this.AddOutPt(nt,a.Bot);this.AddJoin(B,tt,a.Top)}}a=a.NextInAEL}},n.Clipper.prototype.DoMaxima=function(s){var a=this.GetMaximaPairEx(s);if(a===null){s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s);return}for(var c=s.NextInAEL;c!==null&&c!==a;)this.IntersectEdges(s,c,s.Top),this.SwapPositionsInAEL(s,c),c=s.NextInAEL;s.OutIdx===-1&&a.OutIdx===-1?(this.DeleteFromAEL(s),this.DeleteFromAEL(a)):s.OutIdx>=0&&a.OutIdx>=0?(s.OutIdx>=0&&this.AddLocalMaxPoly(s,a,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(a)):n.use_lines&&s.WindDelta===0?(s.OutIdx>=0&&(this.AddOutPt(s,s.Top),s.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(s),a.OutIdx>=0&&(this.AddOutPt(a,s.Top),a.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(a)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(s){for(var a=0,c=s.length;a<c;a++)s[a].reverse()},n.Clipper.Orientation=function(s){return n.Clipper.Area(s)>=0},n.Clipper.prototype.PointCount=function(s){if(s===null)return 0;var a=0,c=s;do a++,c=c.Next;while(c!==s);return a},n.Clipper.prototype.BuildResult=function(s){n.Clear(s);for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var p=this.m_PolyOuts[a];if(p.Pts!==null){var y=p.Pts.Prev,I=this.PointCount(y);if(!(I<2)){for(var B=new Array(I),tt=0;tt<I;tt++)B[tt]=y.Pt,y=y.Prev;s.push(B)}}}},n.Clipper.prototype.BuildResult2=function(s){s.Clear();for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var p=this.m_PolyOuts[a],y=this.PointCount(p.Pts);if(!(p.IsOpen&&y<2||!p.IsOpen&&y<3)){this.FixHoleLinkage(p);var I=new n.PolyNode;s.m_AllPolys.push(I),p.PolyNode=I,I.m_polygon.length=y;for(var B=p.Pts.Prev,tt=0;tt<y;tt++)I.m_polygon[tt]=B.Pt,B=B.Prev}}for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var p=this.m_PolyOuts[a];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,s.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):s.AddChild(p.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(s){for(var a=s.Pts,c=a.Prev;a!==c;)if(a=a.Next,n.IntPoint.op_Equality(a.Pt,a.Prev.Pt)){a===c&&(c=a.Prev);var p=a.Prev;p.Next=a.Next,a.Next.Prev=p,a=p}a===a.Prev&&(s.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(s){var a=null;s.BottomPt=null;for(var c=s.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(c.Prev===c||c.Prev===c.Next){s.Pts=null;return}if(n.IntPoint.op_Equality(c.Pt,c.Next.Pt)||n.IntPoint.op_Equality(c.Pt,c.Prev.Pt)||n.ClipperBase.SlopesEqual4(c.Prev.Pt,c.Pt,c.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(c.Prev.Pt,c.Pt,c.Next.Pt)))a=null,c.Prev.Next=c.Next,c.Next.Prev=c.Prev,c=c.Prev;else{if(c===a)break;a===null&&(a=c),c=c.Next}}s.Pts=c},n.Clipper.prototype.DupOutPt=function(s,a){var c=new n.OutPt;return c.Pt.X=s.Pt.X,c.Pt.Y=s.Pt.Y,n.use_xyz&&(c.Pt.Z=s.Pt.Z),c.Idx=s.Idx,a?(c.Next=s.Next,c.Prev=s,s.Next.Prev=c,s.Next=c):(c.Prev=s.Prev,c.Next=s,s.Prev.Next=c,s.Prev=c),c},n.Clipper.prototype.GetOverlap=function(s,a,c,p,y){return s<a?c<p?(y.Left=Math.max(s,c),y.Right=Math.min(a,p)):(y.Left=Math.max(s,p),y.Right=Math.min(a,c)):c<p?(y.Left=Math.max(a,c),y.Right=Math.min(s,p)):(y.Left=Math.max(a,p),y.Right=Math.min(s,c)),y.Left<y.Right},n.Clipper.prototype.JoinHorz=function(s,a,c,p,y,I){var B=s.Pt.X>a.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,tt=c.Pt.X>p.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(B===tt)return!1;if(B===n.Direction.dLeftToRight){for(;s.Next.Pt.X<=y.X&&s.Next.Pt.X>=s.Pt.X&&s.Next.Pt.Y===y.Y;)s=s.Next;I&&s.Pt.X!==y.X&&(s=s.Next),a=this.DupOutPt(s,!I),n.IntPoint.op_Inequality(a.Pt,y)&&(s=a,s.Pt.X=y.X,s.Pt.Y=y.Y,n.use_xyz&&(s.Pt.Z=y.Z),a=this.DupOutPt(s,!I))}else{for(;s.Next.Pt.X>=y.X&&s.Next.Pt.X<=s.Pt.X&&s.Next.Pt.Y===y.Y;)s=s.Next;!I&&s.Pt.X!==y.X&&(s=s.Next),a=this.DupOutPt(s,I),n.IntPoint.op_Inequality(a.Pt,y)&&(s=a,s.Pt.X=y.X,s.Pt.Y=y.Y,n.use_xyz&&(s.Pt.Z=y.Z),a=this.DupOutPt(s,I))}if(tt===n.Direction.dLeftToRight){for(;c.Next.Pt.X<=y.X&&c.Next.Pt.X>=c.Pt.X&&c.Next.Pt.Y===y.Y;)c=c.Next;I&&c.Pt.X!==y.X&&(c=c.Next),p=this.DupOutPt(c,!I),n.IntPoint.op_Inequality(p.Pt,y)&&(c=p,c.Pt.X=y.X,c.Pt.Y=y.Y,n.use_xyz&&(c.Pt.Z=y.Z),p=this.DupOutPt(c,!I))}else{for(;c.Next.Pt.X>=y.X&&c.Next.Pt.X<=c.Pt.X&&c.Next.Pt.Y===y.Y;)c=c.Next;!I&&c.Pt.X!==y.X&&(c=c.Next),p=this.DupOutPt(c,I),n.IntPoint.op_Inequality(p.Pt,y)&&(c=p,c.Pt.X=y.X,c.Pt.Y=y.Y,n.use_xyz&&(c.Pt.Z=y.Z),p=this.DupOutPt(c,I))}return B===n.Direction.dLeftToRight===I?(s.Prev=c,c.Next=s,a.Next=p,p.Prev=a):(s.Next=c,c.Prev=s,a.Prev=p,p.Next=a),!0},n.Clipper.prototype.JoinPoints=function(s,a,c){var p=s.OutPt1,y=new n.OutPt,I=s.OutPt2,B=new n.OutPt,tt=s.OutPt1.Pt.Y===s.OffPt.Y;if(tt&&n.IntPoint.op_Equality(s.OffPt,s.OutPt1.Pt)&&n.IntPoint.op_Equality(s.OffPt,s.OutPt2.Pt)){if(a!==c)return!1;for(y=s.OutPt1.Next;y!==p&&n.IntPoint.op_Equality(y.Pt,s.OffPt);)y=y.Next;var nt=y.Pt.Y>s.OffPt.Y;for(B=s.OutPt2.Next;B!==I&&n.IntPoint.op_Equality(B.Pt,s.OffPt);)B=B.Next;var ft=B.Pt.Y>s.OffPt.Y;return nt===ft?!1:nt?(y=this.DupOutPt(p,!1),B=this.DupOutPt(I,!0),p.Prev=I,I.Next=p,y.Next=B,B.Prev=y,s.OutPt1=p,s.OutPt2=y,!0):(y=this.DupOutPt(p,!0),B=this.DupOutPt(I,!1),p.Next=I,I.Prev=p,y.Prev=B,B.Next=y,s.OutPt1=p,s.OutPt2=y,!0)}else if(tt){for(y=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==y&&p.Prev!==I;)p=p.Prev;for(;y.Next.Pt.Y===y.Pt.Y&&y.Next!==p&&y.Next!==I;)y=y.Next;if(y.Next===p||y.Next===I)return!1;for(B=I;I.Prev.Pt.Y===I.Pt.Y&&I.Prev!==B&&I.Prev!==y;)I=I.Prev;for(;B.Next.Pt.Y===B.Pt.Y&&B.Next!==I&&B.Next!==p;)B=B.Next;if(B.Next===I||B.Next===p)return!1;var Ct={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,y.Pt.X,I.Pt.X,B.Pt.X,Ct))return!1;var At=Ct.Left,Ot=Ct.Right,ae=new n.IntPoint0,ye;return p.Pt.X>=At&&p.Pt.X<=Ot?(ae.X=p.Pt.X,ae.Y=p.Pt.Y,n.use_xyz&&(ae.Z=p.Pt.Z),ye=p.Pt.X>y.Pt.X):I.Pt.X>=At&&I.Pt.X<=Ot?(ae.X=I.Pt.X,ae.Y=I.Pt.Y,n.use_xyz&&(ae.Z=I.Pt.Z),ye=I.Pt.X>B.Pt.X):y.Pt.X>=At&&y.Pt.X<=Ot?(ae.X=y.Pt.X,ae.Y=y.Pt.Y,n.use_xyz&&(ae.Z=y.Pt.Z),ye=y.Pt.X>p.Pt.X):(ae.X=B.Pt.X,ae.Y=B.Pt.Y,n.use_xyz&&(ae.Z=B.Pt.Z),ye=B.Pt.X>I.Pt.X),s.OutPt1=p,s.OutPt2=I,this.JoinHorz(p,y,I,B,ae,ye)}else{for(y=p.Next;n.IntPoint.op_Equality(y.Pt,p.Pt)&&y!==p;)y=y.Next;var we=y.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,y.Pt,s.OffPt,this.m_UseFullRange);if(we){for(y=p.Prev;n.IntPoint.op_Equality(y.Pt,p.Pt)&&y!==p;)y=y.Prev;if(y.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,y.Pt,s.OffPt,this.m_UseFullRange))return!1}for(B=I.Next;n.IntPoint.op_Equality(B.Pt,I.Pt)&&B!==I;)B=B.Next;var He=B.Pt.Y>I.Pt.Y||!n.ClipperBase.SlopesEqual4(I.Pt,B.Pt,s.OffPt,this.m_UseFullRange);if(He){for(B=I.Prev;n.IntPoint.op_Equality(B.Pt,I.Pt)&&B!==I;)B=B.Prev;if(B.Pt.Y>I.Pt.Y||!n.ClipperBase.SlopesEqual4(I.Pt,B.Pt,s.OffPt,this.m_UseFullRange))return!1}return y===p||B===I||y===B||a===c&&we===He?!1:we?(y=this.DupOutPt(p,!1),B=this.DupOutPt(I,!0),p.Prev=I,I.Next=p,y.Next=B,B.Prev=y,s.OutPt1=p,s.OutPt2=y,!0):(y=this.DupOutPt(p,!0),B=this.DupOutPt(I,!1),p.Next=I,I.Prev=p,y.Prev=B,B.Next=y,s.OutPt1=p,s.OutPt2=y,!0)}},n.Clipper.GetBounds=function(s){for(var a=0,c=s.length;a<c&&s[a].length===0;)a++;if(a===c)return new n.IntRect(0,0,0,0);var p=new n.IntRect;for(p.left=s[a][0].X,p.right=p.left,p.top=s[a][0].Y,p.bottom=p.top;a<c;a++)for(var y=0,I=s[a].length;y<I;y++)s[a][y].X<p.left?p.left=s[a][y].X:s[a][y].X>p.right&&(p.right=s[a][y].X),s[a][y].Y<p.top?p.top=s[a][y].Y:s[a][y].Y>p.bottom&&(p.bottom=s[a][y].Y);return p},n.Clipper.prototype.GetBounds2=function(s){var a=s,c=new n.IntRect;for(c.left=s.Pt.X,c.right=s.Pt.X,c.top=s.Pt.Y,c.bottom=s.Pt.Y,s=s.Next;s!==a;)s.Pt.X<c.left&&(c.left=s.Pt.X),s.Pt.X>c.right&&(c.right=s.Pt.X),s.Pt.Y<c.top&&(c.top=s.Pt.Y),s.Pt.Y>c.bottom&&(c.bottom=s.Pt.Y),s=s.Next;return c},n.Clipper.PointInPolygon=function(s,a){var c=0,p=a.length;if(p<3)return 0;for(var y=a[0],I=1;I<=p;++I){var B=I===p?a[0]:a[I];if(B.Y===s.Y&&(B.X===s.X||y.Y===s.Y&&B.X>s.X==y.X<s.X))return-1;if(y.Y<s.Y!=B.Y<s.Y){if(y.X>=s.X)if(B.X>s.X)c=1-c;else{var tt=(y.X-s.X)*(B.Y-s.Y)-(B.X-s.X)*(y.Y-s.Y);if(tt===0)return-1;tt>0==B.Y>y.Y&&(c=1-c)}else if(B.X>s.X){var tt=(y.X-s.X)*(B.Y-s.Y)-(B.X-s.X)*(y.Y-s.Y);if(tt===0)return-1;tt>0==B.Y>y.Y&&(c=1-c)}}y=B}return c},n.Clipper.prototype.PointInPolygon=function(s,a){var c=0,p=a,y=s.X,I=s.Y,B=a.Pt.X,tt=a.Pt.Y;do{a=a.Next;var nt=a.Pt.X,ft=a.Pt.Y;if(ft===I&&(nt===y||tt===I&&nt>y==B<y))return-1;if(tt<I!=ft<I){if(B>=y)if(nt>y)c=1-c;else{var Ct=(B-y)*(ft-I)-(nt-y)*(tt-I);if(Ct===0)return-1;Ct>0==ft>tt&&(c=1-c)}else if(nt>y){var Ct=(B-y)*(ft-I)-(nt-y)*(tt-I);if(Ct===0)return-1;Ct>0==ft>tt&&(c=1-c)}}B=nt,tt=ft}while(p!==a);return c},n.Clipper.prototype.Poly2ContainsPoly1=function(s,a){var c=s;do{var p=this.PointInPolygon(c.Pt,a);if(p>=0)return p>0;c=c.Next}while(c!==s);return!0},n.Clipper.prototype.FixupFirstLefts1=function(s,a){for(var c,p,y=0,I=this.m_PolyOuts.length;y<I;y++)c=this.m_PolyOuts[y],p=n.Clipper.ParseFirstLeft(c.FirstLeft),c.Pts!==null&&p===s&&this.Poly2ContainsPoly1(c.Pts,a.Pts)&&(c.FirstLeft=a)},n.Clipper.prototype.FixupFirstLefts2=function(s,a){for(var c=a.FirstLeft,p,y,I=0,B=this.m_PolyOuts.length;I<B;I++)p=this.m_PolyOuts[I],!(p.Pts===null||p===a||p===s)&&(y=n.Clipper.ParseFirstLeft(p.FirstLeft),!(y!==c&&y!==s&&y!==a)&&(this.Poly2ContainsPoly1(p.Pts,s.Pts)?p.FirstLeft=s:this.Poly2ContainsPoly1(p.Pts,a.Pts)?p.FirstLeft=a:(p.FirstLeft===s||p.FirstLeft===a)&&(p.FirstLeft=c)))},n.Clipper.prototype.FixupFirstLefts3=function(s,a){for(var c,p,y=0,I=this.m_PolyOuts.length;y<I;y++)c=this.m_PolyOuts[y],p=n.Clipper.ParseFirstLeft(c.FirstLeft),c.Pts!==null&&p===s&&(c.FirstLeft=a)},n.Clipper.ParseFirstLeft=function(s){for(;s!==null&&s.Pts===null;)s=s.FirstLeft;return s},n.Clipper.prototype.JoinCommonEdges=function(){for(var s=0,a=this.m_Joins.length;s<a;s++){var c=this.m_Joins[s],p=this.GetOutRec(c.OutPt1.Idx),y=this.GetOutRec(c.OutPt2.Idx);if(!(p.Pts===null||y.Pts===null)&&!(p.IsOpen||y.IsOpen)){var I;p===y?I=p:this.OutRec1RightOfOutRec2(p,y)?I=y:this.OutRec1RightOfOutRec2(y,p)?I=p:I=this.GetLowermostRec(p,y),this.JoinPoints(c,p,y)&&(p===y?(p.Pts=c.OutPt1,p.BottomPt=null,y=this.CreateOutRec(),y.Pts=c.OutPt2,this.UpdateOutPtIdxs(y),this.Poly2ContainsPoly1(y.Pts,p.Pts)?(y.IsHole=!p.IsHole,y.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(y,p),(y.IsHole^this.ReverseSolution)==this.Area$1(y)>0&&this.ReversePolyPtLinks(y.Pts)):this.Poly2ContainsPoly1(p.Pts,y.Pts)?(y.IsHole=p.IsHole,p.IsHole=!y.IsHole,y.FirstLeft=p.FirstLeft,p.FirstLeft=y,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,y),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(y.IsHole=p.IsHole,y.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,y))):(y.Pts=null,y.BottomPt=null,y.Idx=p.Idx,p.IsHole=I.IsHole,I===y&&(p.FirstLeft=y.FirstLeft),y.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(y,p)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(s){var a=s.Pts;do a.Idx=s.Idx,a=a.Prev;while(a!==s.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var s=0;s<this.m_PolyOuts.length;){var a=this.m_PolyOuts[s++],c=a.Pts;if(!(c===null||a.IsOpen))do{for(var p=c.Next;p!==a.Pts;){if(n.IntPoint.op_Equality(c.Pt,p.Pt)&&p.Next!==c&&p.Prev!==c){var y=c.Prev,I=p.Prev;c.Prev=I,I.Next=c,p.Prev=y,y.Next=p,a.Pts=c;var B=this.CreateOutRec();B.Pts=p,this.UpdateOutPtIdxs(B),this.Poly2ContainsPoly1(B.Pts,a.Pts)?(B.IsHole=!a.IsHole,B.FirstLeft=a,this.m_UsingPolyTree&&this.FixupFirstLefts2(B,a)):this.Poly2ContainsPoly1(a.Pts,B.Pts)?(B.IsHole=a.IsHole,a.IsHole=!B.IsHole,B.FirstLeft=a.FirstLeft,a.FirstLeft=B,this.m_UsingPolyTree&&this.FixupFirstLefts2(a,B)):(B.IsHole=a.IsHole,B.FirstLeft=a.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(a,B)),p=c}p=p.Next}c=c.Next}while(c!==a.Pts)}},n.Clipper.Area=function(s){if(!Array.isArray(s))return 0;var a=s.length;if(a<3)return 0;for(var c=0,p=0,y=a-1;p<a;++p)c+=(s[y].X+s[p].X)*(s[y].Y-s[p].Y),y=p;return-c*.5},n.Clipper.prototype.Area=function(s){var a=s;if(s===null)return 0;var c=0;do c=c+(s.Prev.Pt.X+s.Pt.X)*(s.Prev.Pt.Y-s.Pt.Y),s=s.Next;while(s!==a);return c*.5},n.Clipper.prototype.Area$1=function(s){return this.Area(s.Pts)},n.Clipper.SimplifyPolygon=function(s,a){var c=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPath(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,c,a,a),c},n.Clipper.SimplifyPolygons=function(s,a){typeof a>"u"&&(a=n.PolyFillType.pftEvenOdd);var c=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,c,a,a),c},n.Clipper.DistanceSqrd=function(s,a){var c=s.X-a.X,p=s.Y-a.Y;return c*c+p*p},n.Clipper.DistanceFromLineSqrd=function(s,a,c){var p=a.Y-c.Y,y=c.X-a.X,I=p*a.X+y*a.Y;return I=p*s.X+y*s.Y-I,I*I/(p*p+y*y)},n.Clipper.SlopesNearCollinear=function(s,a,c,p){return Math.abs(s.X-a.X)>Math.abs(s.Y-a.Y)?s.X>a.X==s.X<c.X?n.Clipper.DistanceFromLineSqrd(s,a,c)<p:a.X>s.X==a.X<c.X?n.Clipper.DistanceFromLineSqrd(a,s,c)<p:n.Clipper.DistanceFromLineSqrd(c,s,a)<p:s.Y>a.Y==s.Y<c.Y?n.Clipper.DistanceFromLineSqrd(s,a,c)<p:a.Y>s.Y==a.Y<c.Y?n.Clipper.DistanceFromLineSqrd(a,s,c)<p:n.Clipper.DistanceFromLineSqrd(c,s,a)<p},n.Clipper.PointsAreClose=function(s,a,c){var p=s.X-a.X,y=s.Y-a.Y;return p*p+y*y<=c},n.Clipper.ExcludeOp=function(s){var a=s.Prev;return a.Next=s.Next,s.Next.Prev=a,a.Idx=0,a},n.Clipper.CleanPolygon=function(s,a){typeof a>"u"&&(a=1.415);var c=s.length;if(c===0)return new Array;for(var p=new Array(c),y=0;y<c;++y)p[y]=new n.OutPt;for(var y=0;y<c;++y)p[y].Pt=s[y],p[y].Next=p[(y+1)%c],p[y].Next.Prev=p[y],p[y].Idx=0;for(var I=a*a,B=p[0];B.Idx===0&&B.Next!==B.Prev;)n.Clipper.PointsAreClose(B.Pt,B.Prev.Pt,I)?(B=n.Clipper.ExcludeOp(B),c--):n.Clipper.PointsAreClose(B.Prev.Pt,B.Next.Pt,I)?(n.Clipper.ExcludeOp(B.Next),B=n.Clipper.ExcludeOp(B),c-=2):n.Clipper.SlopesNearCollinear(B.Prev.Pt,B.Pt,B.Next.Pt,I)?(B=n.Clipper.ExcludeOp(B),c--):(B.Idx=1,B=B.Next);c<3&&(c=0);for(var tt=new Array(c),y=0;y<c;++y)tt[y]=new n.IntPoint1(B.Pt),B=B.Next;return p=null,tt},n.Clipper.CleanPolygons=function(s,a){for(var c=new Array(s.length),p=0,y=s.length;p<y;p++)c[p]=n.Clipper.CleanPolygon(s[p],a);return c},n.Clipper.Minkowski=function(s,a,c,p){var y=p?1:0,I=s.length,B=a.length,tt=new Array;if(c)for(var nt=0;nt<B;nt++){for(var ft=new Array(I),Ct=0,At=s.length,Ot=s[Ct];Ct<At;Ct++,Ot=s[Ct])ft[Ct]=new n.IntPoint2(a[nt].X+Ot.X,a[nt].Y+Ot.Y);tt.push(ft)}else for(var nt=0;nt<B;nt++){for(var ft=new Array(I),Ct=0,At=s.length,Ot=s[Ct];Ct<At;Ct++,Ot=s[Ct])ft[Ct]=new n.IntPoint2(a[nt].X-Ot.X,a[nt].Y-Ot.Y);tt.push(ft)}for(var ae=new Array,nt=0;nt<B-1+y;nt++)for(var Ct=0;Ct<I;Ct++){var ye=new Array;ye.push(tt[nt%B][Ct%I]),ye.push(tt[(nt+1)%B][Ct%I]),ye.push(tt[(nt+1)%B][(Ct+1)%I]),ye.push(tt[nt%B][(Ct+1)%I]),n.Clipper.Orientation(ye)||ye.reverse(),ae.push(ye)}return ae},n.Clipper.MinkowskiSum=function(s,a,c){if(a[0]instanceof Array){for(var y=a,B=new n.Paths,I=new n.Clipper,tt=0;tt<y.length;++tt){var nt=n.Clipper.Minkowski(s,y[tt],!0,c);if(I.AddPaths(nt,n.PolyType.ptSubject,!0),c){var p=n.Clipper.TranslatePath(y[tt],s[0]);I.AddPath(p,n.PolyType.ptClip,!0)}}return I.Execute(n.ClipType.ctUnion,B,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),B}else{var p=a,y=n.Clipper.Minkowski(s,p,!0,c),I=new n.Clipper;return I.AddPaths(y,n.PolyType.ptSubject,!0),I.Execute(n.ClipType.ctUnion,y,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),y}},n.Clipper.TranslatePath=function(s,a){for(var c=new n.Path,p=0;p<s.length;p++)c.push(new n.IntPoint2(s[p].X+a.X,s[p].Y+a.Y));return c},n.Clipper.MinkowskiDiff=function(s,a){var c=n.Clipper.Minkowski(s,a,!1,!0),p=new n.Clipper;return p.AddPaths(c,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),c},n.Clipper.PolyTreeToPaths=function(s){var a=new Array;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntAny,a),a},n.Clipper.AddPolyNodeToPaths=function(s,a,c){var p=!0;switch(a){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:p=!s.IsOpen;break;default:break}s.m_polygon.length>0&&p&&c.push(s.m_polygon);for(var y=0,I=s.Childs(),B=I.length,tt=I[y];y<B;y++,tt=I[y])n.Clipper.AddPolyNodeToPaths(tt,a,c)},n.Clipper.OpenPathsFromPolyTree=function(s){for(var a=new n.Paths,c=0,p=s.ChildCount();c<p;c++)s.Childs()[c].IsOpen&&a.push(s.Childs()[c].m_polygon);return a},n.Clipper.ClosedPathsFromPolyTree=function(s){var a=new n.Paths;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntClosed,a),a},ge(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(s,a){typeof s>"u"&&(s=2),typeof a>"u"&&(a=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=s,this.ArcTolerance=a,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(s,a,c){var p=s.length-1;if(!(p<0)){var y=new n.PolyNode;if(y.m_jointype=a,y.m_endtype=c,c===n.EndType.etClosedLine||c===n.EndType.etClosedPolygon)for(;p>0&&n.IntPoint.op_Equality(s[0],s[p]);)p--;y.m_polygon.push(s[0]);for(var I=0,B=0,tt=1;tt<=p;tt++)n.IntPoint.op_Inequality(y.m_polygon[I],s[tt])&&(I++,y.m_polygon.push(s[tt]),(s[tt].Y>y.m_polygon[B].Y||s[tt].Y===y.m_polygon[B].Y&&s[tt].X<y.m_polygon[B].X)&&(B=I));if(!(c===n.EndType.etClosedPolygon&&I<2)&&(this.m_polyNodes.AddChild(y),c===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,B);else{var nt=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(y.m_polygon[B].Y>nt.Y||y.m_polygon[B].Y===nt.Y&&y.m_polygon[B].X<nt.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,B))}}},n.ClipperOffset.prototype.AddPaths=function(s,a,c){for(var p=0,y=s.length;p<y;p++)this.AddPath(s[p],a,c)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];(a.m_endtype===n.EndType.etClosedPolygon||a.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(a.m_polygon))&&a.m_polygon.reverse()}else for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];a.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(a.m_polygon)&&a.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(s,a){var c=a.X-s.X,p=a.Y-s.Y;if(c===0&&p===0)return new n.DoublePoint2(0,0);var y=1/Math.sqrt(c*c+p*p);return c*=y,p*=y,new n.DoublePoint2(p,-c)},n.ClipperOffset.prototype.DoOffset=function(s){if(this.m_destPolys=new Array,this.m_delta=s,n.ClipperBase.near_zero(s)){for(var a=0;a<this.m_polyNodes.ChildCount();a++){var c=this.m_polyNodes.Childs()[a];c.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(c.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(s)*n.ClipperOffset.def_arc_tolerance?p=Math.abs(s)*n.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var y=3.14159265358979/Math.acos(1-p/Math.abs(s));this.m_sin=Math.sin(n.ClipperOffset.two_pi/y),this.m_cos=Math.cos(n.ClipperOffset.two_pi/y),this.m_StepsPerRad=y/n.ClipperOffset.two_pi,s<0&&(this.m_sin=-this.m_sin);for(var a=0;a<this.m_polyNodes.ChildCount();a++){var c=this.m_polyNodes.Childs()[a];this.m_srcPoly=c.m_polygon;var I=this.m_srcPoly.length;if(!(I===0||s<=0&&(I<3||c.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,I===1){if(c.m_jointype===n.JoinType.jtRound)for(var B=1,tt=0,nt=1;nt<=y;nt++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+B*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+tt*s)));var ft=B;B=B*this.m_cos-this.m_sin*tt,tt=ft*this.m_sin+tt*this.m_cos}else for(var B=-1,tt=-1,nt=0;nt<4;++nt)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+B*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+tt*s))),B<0?B=1:tt<0?tt=1:B=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var nt=0;nt<I-1;nt++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[nt],this.m_srcPoly[nt+1]));if(c.m_endtype===n.EndType.etClosedLine||c.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[I-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[I-2])),c.m_endtype===n.EndType.etClosedPolygon){for(var Ct=I-1,nt=0;nt<I;nt++)Ct=this.OffsetPoint(nt,Ct,c.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(c.m_endtype===n.EndType.etClosedLine){for(var Ct=I-1,nt=0;nt<I;nt++)Ct=this.OffsetPoint(nt,Ct,c.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var At=this.m_normals[I-1],nt=I-1;nt>0;nt--)this.m_normals[nt]=new n.DoublePoint2(-this.m_normals[nt-1].X,-this.m_normals[nt-1].Y);this.m_normals[0]=new n.DoublePoint2(-At.X,-At.Y),Ct=0;for(var nt=I-1;nt>=0;nt--)Ct=this.OffsetPoint(nt,Ct,c.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var Ct=0,nt=1;nt<I-1;++nt)Ct=this.OffsetPoint(nt,Ct,c.m_jointype);var Ot;if(c.m_endtype===n.EndType.etOpenButt){var nt=I-1;Ot=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[nt].X+this.m_normals[nt].X*s),n.ClipperOffset.Round(this.m_srcPoly[nt].Y+this.m_normals[nt].Y*s)),this.m_destPoly.push(Ot),Ot=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[nt].X-this.m_normals[nt].X*s),n.ClipperOffset.Round(this.m_srcPoly[nt].Y-this.m_normals[nt].Y*s)),this.m_destPoly.push(Ot)}else{var nt=I-1;Ct=I-2,this.m_sinA=0,this.m_normals[nt]=new n.DoublePoint2(-this.m_normals[nt].X,-this.m_normals[nt].Y),c.m_endtype===n.EndType.etOpenSquare?this.DoSquare(nt,Ct):this.DoRound(nt,Ct)}for(var nt=I-1;nt>0;nt--)this.m_normals[nt]=new n.DoublePoint2(-this.m_normals[nt-1].X,-this.m_normals[nt-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),Ct=I-1;for(var nt=Ct-1;nt>0;--nt)Ct=this.OffsetPoint(nt,Ct,c.m_jointype);c.m_endtype===n.EndType.etOpenButt?(Ot=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*s)),this.m_destPoly.push(Ot),Ot=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*s)),this.m_destPoly.push(Ot)):(Ct=1,this.m_sinA=0,c.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var s=arguments,a=s[0]instanceof n.PolyTree;if(a){var c=s[0],p=s[1];c.Clear(),this.FixOrientations(),this.DoOffset(p);var y=new n.Clipper(0);if(y.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)y.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var I=n.Clipper.GetBounds(this.m_destPolys),B=new n.Path;if(B.push(new n.IntPoint2(I.left-10,I.bottom+10)),B.push(new n.IntPoint2(I.right+10,I.bottom+10)),B.push(new n.IntPoint2(I.right+10,I.top-10)),B.push(new n.IntPoint2(I.left-10,I.top-10)),y.AddPath(B,n.PolyType.ptSubject,!0),y.ReverseSolution=!0,y.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),c.ChildCount()===1&&c.Childs()[0].ChildCount()>0){var tt=c.Childs()[0];c.Childs()[0]=tt.Childs()[0],c.Childs()[0].m_Parent=c;for(var nt=1;nt<tt.ChildCount();nt++)c.AddChild(tt.Childs()[nt])}else c.Clear()}}else{var c=s[0],p=s[1];n.Clear(c),this.FixOrientations(),this.DoOffset(p);var y=new n.Clipper(0);if(y.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)y.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var I=n.Clipper.GetBounds(this.m_destPolys),B=new n.Path;B.push(new n.IntPoint2(I.left-10,I.bottom+10)),B.push(new n.IntPoint2(I.right+10,I.bottom+10)),B.push(new n.IntPoint2(I.right+10,I.top-10)),B.push(new n.IntPoint2(I.left-10,I.top-10)),y.AddPath(B,n.PolyType.ptSubject,!0),y.ReverseSolution=!0,y.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),c.length>0&&c.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(s,a,c){if(this.m_sinA=this.m_normals[a].X*this.m_normals[s].Y-this.m_normals[s].X*this.m_normals[a].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[a].X*this.m_normals[s].X+this.m_normals[s].Y*this.m_normals[a].Y;if(p>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),a}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[s])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)));else switch(c){case n.JoinType.jtMiter:{var y=1+(this.m_normals[s].X*this.m_normals[a].X+this.m_normals[s].Y*this.m_normals[a].Y);y>=this.m_miterLim?this.DoMiter(s,a,y):this.DoSquare(s,a);break}case n.JoinType.jtSquare:this.DoSquare(s,a);break;case n.JoinType.jtRound:this.DoRound(s,a);break}return a=s,a},n.ClipperOffset.prototype.DoSquare=function(s,a){var c=Math.tan(Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[a].X-this.m_normals[a].Y*c)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[a].Y+this.m_normals[a].X*c)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[s].X+this.m_normals[s].Y*c)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[s].Y-this.m_normals[s].X*c))))},n.ClipperOffset.prototype.DoMiter=function(s,a,c){var p=this.m_delta/c;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+(this.m_normals[a].X+this.m_normals[s].X)*p),n.ClipperOffset.Round(this.m_srcPoly[s].Y+(this.m_normals[a].Y+this.m_normals[s].Y)*p)))},n.ClipperOffset.prototype.DoRound=function(s,a){for(var c=Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y),p=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(c))),1),y=this.m_normals[a].X,I=this.m_normals[a].Y,B,tt=0;tt<p;++tt)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+y*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+I*this.m_delta))),B=y,y=y*this.m_cos-this.m_sin*I,I=B*this.m_sin+I*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)))},n.Error=function(s){try{throw new Error(s)}catch(a){alert(a.message)}},n.JS={},n.JS.AreaOfPolygon=function(s,a){return a||(a=1),n.Clipper.Area(s)/(a*a)},n.JS.AreaOfPolygons=function(s,a){a||(a=1);for(var c=0,p=0;p<s.length;p++)c+=n.Clipper.Area(s[p]);return c/(a*a)},n.JS.BoundsOfPath=function(s,a){return n.JS.BoundsOfPaths([s],a)},n.JS.BoundsOfPaths=function(s,a){a||(a=1);var c=n.Clipper.GetBounds(s);return c.left/=a,c.bottom/=a,c.right/=a,c.top/=a,c},n.JS.Clean=function(p,a){if(!(p instanceof Array))return[];var c=p[0]instanceof Array,p=n.JS.Clone(p);if(typeof a!="number"||a===null)return n.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||a<0)return p;c||(p=[p]);for(var y=p.length,I,B,tt,nt,ft,Ct,At,Ot=[],ae=0;ae<y;ae++)if(B=p[ae],I=B.length,I!==0){if(I<3){tt=B,Ot.push(tt);continue}for(tt=B,nt=a*a,ft=B[0],Ct=1,At=1;At<I;At++)(B[At].X-ft.X)*(B[At].X-ft.X)+(B[At].Y-ft.Y)*(B[At].Y-ft.Y)<=nt||(tt[Ct]=B[At],ft=B[At],Ct++);ft=B[Ct-1],(B[0].X-ft.X)*(B[0].X-ft.X)+(B[0].Y-ft.Y)*(B[0].Y-ft.Y)<=nt&&Ct--,Ct<I&&tt.splice(Ct,I-Ct),tt.length&&Ot.push(tt)}return!c&&Ot.length?Ot=Ot[0]:!c&&Ot.length===0?Ot=[]:c&&Ot.length===0&&(Ot=[[]]),Ot},n.JS.Clone=function(s){if(!(s instanceof Array))return[];if(s.length===0)return[];if(s.length===1&&s[0].length===0)return[[]];var a=s[0]instanceof Array;a||(s=[s]);var c=s.length,p,y,I,B,tt=new Array(c);for(y=0;y<c;y++){for(p=s[y].length,B=new Array(p),I=0;I<p;I++)B[I]={X:s[y][I].X,Y:s[y][I].Y};tt[y]=B}return a||(tt=tt[0]),tt},n.JS.Lighten=function(s,a){if(!(s instanceof Array))return[];if(typeof a!="number"||a===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(s);if(s.length===0||s.length===1&&s[0].length===0||a<0)return n.JS.Clone(s);var c=s[0]instanceof Array;c||(s=[s]);var p,y,I,B,tt,nt,ft,Ct,At,Ot,ae,ye,we,He,gn,Wn,Vi,Vr=s.length,zo=a*a,Ai=[];for(p=0;p<Vr;p++)if(I=s[p],nt=I.length,nt!==0){for(B=0;B<1e6;B++){for(tt=[],nt=I.length,I[nt-1].X!==I[0].X||I[nt-1].Y!==I[0].Y?(ye=1,I.push({X:I[0].X,Y:I[0].Y}),nt=I.length):ye=0,ae=[],y=0;y<nt-2;y++)ft=I[y],At=I[y+1],Ct=I[y+2],Wn=ft.X,Vi=ft.Y,we=Ct.X-Wn,He=Ct.Y-Vi,(we!==0||He!==0)&&(gn=((At.X-Wn)*we+(At.Y-Vi)*He)/(we*we+He*He),gn>1?(Wn=Ct.X,Vi=Ct.Y):gn>0&&(Wn+=we*gn,Vi+=He*gn)),we=At.X-Wn,He=At.Y-Vi,Ot=we*we+He*He,Ot<=zo&&(ae[y+1]=1,y++);for(tt.push({X:I[0].X,Y:I[0].Y}),y=1;y<nt-1;y++)ae[y]||tt.push({X:I[y].X,Y:I[y].Y});if(tt.push({X:I[nt-1].X,Y:I[nt-1].Y}),ye&&I.pop(),ae.length)I=tt;else break}nt=tt.length,tt[nt-1].X===tt[0].X&&tt[nt-1].Y===tt[0].Y&&tt.pop(),tt.length>2&&Ai.push(tt)}return c||(Ai=Ai[0]),typeof Ai>"u"&&(Ai=[]),Ai},n.JS.PerimeterOfPath=function(s,a,c){if(typeof s>"u")return 0;var p=Math.sqrt,y=0,I,B,tt=0,nt=0,ft=0,Ct=0,At=s.length;if(At<2)return 0;for(a&&(s[At]=s[0],At++);--At;)I=s[At],tt=I.X,nt=I.Y,B=s[At-1],ft=B.X,Ct=B.Y,y+=p((tt-ft)*(tt-ft)+(nt-Ct)*(nt-Ct));return a&&s.pop(),y/c},n.JS.PerimeterOfPaths=function(s,a,c){c||(c=1);for(var p=0,y=0;y<s.length;y++)p+=n.JS.PerimeterOfPath(s[y],a,c);return p},n.JS.ScaleDownPath=function(s,a){var c,p;for(a||(a=1),c=s.length;c--;)p=s[c],p.X=p.X/a,p.Y=p.Y/a},n.JS.ScaleDownPaths=function(s,a){var c,p,y;for(a||(a=1),c=s.length;c--;)for(p=s[c].length;p--;)y=s[c][p],y.X=y.X/a,y.Y=y.Y/a},n.JS.ScaleUpPath=function(s,a){var c,p,y=Math.round;for(a||(a=1),c=s.length;c--;)p=s[c],p.X=y(p.X*a),p.Y=y(p.Y*a)},n.JS.ScaleUpPaths=function(s,a){var c,p,y,I=Math.round;for(a||(a=1),c=s.length;c--;)for(p=s[c].length;p--;)y=s[c][p],y.X=I(y.X*a),y.Y=I(y.Y*a)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(s,a){var c=new n.ExPolygon;c.outer=s.Contour();var p=s.Childs(),y=p.length;c.holes=new Array(y);var I,B,tt,nt,ft,Ct;for(tt=0;tt<y;tt++)for(I=p[tt],c.holes[tt]=I.Contour(),nt=0,ft=I.Childs(),Ct=ft.length;nt<Ct;nt++)B=ft[nt],n.JS.AddOuterPolyNodeToExPolygons(B,a);a.push(c)},n.JS.ExPolygonsToPaths=function(s){var a,c,p,y,I=new n.Paths;for(a=0,p=s.length;a<p;a++)for(I.push(s[a].outer),c=0,y=s[a].holes.length;c<y;c++)I.push(s[a].holes[c]);return I},n.JS.PolyTreeToExPolygons=function(s){var a=new n.ExPolygons,c,p,y,I;for(p=0,y=s.Childs(),I=y.length;p<I;p++)c=y[p],n.JS.AddOuterPolyNodeToExPolygons(c,a);return a}})()});function Yo(n,t,e,i=tn.default.PolyFillType.pftNonZero){let r=new tn.default.Clipper;r.AddPaths(Wo(t),tn.default.PolyType.ptSubject,!0),e&&r.AddPaths(Wo(e),tn.default.PolyType.ptClip,!0);let o=new tn.default.Paths;return r.Execute(n,o,i,i),Mc(o)}function Ou(n,t=256){let e=n.length>t?qm(n):n;for(;e.length>t;){let i=[];for(let o=0;o<e.length;o+=t)i.push(Pi(e.slice(o,o+t)));let r=i.flat();if(i.length===1)return r;if(r.length>e.length/2)return Pi(r);e=r}return Pi(e)}function qm(n){let t=1/0,e=1/0,i=-1/0,r=-1/0,o=n.map(d=>{let g=0,v=0;for(let[b,w]of d)g+=b,v+=w;let _=[g/d.length,v/d.length];return t=Math.min(t,_[0]),e=Math.min(e,_[1]),i=Math.max(i,_[0]),r=Math.max(r,_[1]),_}),l=65535/Math.max(i-t,r-e,1e-9),h=d=>(d=(d|d<<8)&16711935,d=(d|d<<4)&252645135,d=(d|d<<2)&858993459,(d|d<<1)&1431655765),f=o.map(([d,g])=>(h(Math.round((d-t)*l))|h(Math.round((g-e)*l))<<1)>>>0);return n.map((d,g)=>g).sort((d,g)=>f[d]-f[g]).map(d=>n[d])}function Fe(n,t,e=$m/Gi){if(!n.length)return[];let i=new tn.default.ClipperOffset(2,e*Gi);i.AddPaths(Wo(n),tn.default.JoinType.jtRound,tn.default.EndType.etClosedPolygon);let r=new tn.default.Paths;return i.Execute(r,t*Gi),Mc(r)}function Yn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function Xi(n){let t=1/0,e=1/0,i=-1/0,r=-1/0;for(let o of n)for(let[l,h]of o)l<t&&(t=l),l>i&&(i=l),h<e&&(e=h),h>r&&(r=h);return{minX:t,minY:e,maxX:i,maxY:r}}function Qn(n){if(!n.length)return[];let t=new tn.default.Clipper;t.AddPaths(Wo(n),tn.default.PolyType.ptSubject,!0);let e=new tn.default.PolyTree;t.Execute(tn.default.ClipType.ctUnion,e,tn.default.PolyFillType.pftNonZero,tn.default.PolyFillType.pftNonZero);let i=[],r=o=>{for(let l of o.Childs()){if(l.IsHole()){r(l);continue}let h=l.Childs().map(f=>f.Contour());i.push(Mc([l.Contour(),...h]));for(let f of l.Childs())r(f)}};return r(e),i}function Hs([n,t],e){let i=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[l,h]=e[r],[f,d]=e[o];h>t!=d>t&&n<(f-l)*(t-h)/(d-h)+l&&(i=!i)}return i}function yn(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(Yn(e))>t)}function Zm(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let h=1;h<n.length;h++){let f=(n[h][0]-n[0][0])**2+(n[h][1]-n[0][1])**2;f>i&&(i=f,e=h)}let r=h=>{let f=new Uint8Array(h.length);f[0]=f[h.length-1]=1;let d=[[0,h.length-1]];for(;d.length;){let[g,v]=d.pop(),[_,b]=h[g],[w,T]=h[v],S=Math.hypot(w-_,T-b)||1e-12,x=-1,L=t;for(let V=g+1;V<v;V++){let C=Math.abs((w-_)*(b-h[V][1])-(_-h[V][0])*(T-b))/S;C>L&&(L=C,x=V)}x>0&&(f[x]=1,d.push([g,x],[x,v]))}return h.filter((g,v)=>f[v])},o=r(n.slice(0,e+1)),l=r([...n.slice(e),n[0]]);return[...o,...l.slice(1,-1)]}var tn,Gi,$m,Wo,Mc,$o,Pi,pi,_r,sn,mi,Gs=vn(()=>{tn=Iu(Du(),1),Gi=1e3,$m=.01*Gi,Wo=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*Gi),Y:Math.round(i*Gi)}))),Mc=n=>n.map(t=>t.map(e=>[e.X/Gi,e.Y/Gi]));$o=n=>Yo(tn.default.ClipType.ctUnion,n,null,tn.default.PolyFillType.pftEvenOdd),Pi=n=>Yo(tn.default.ClipType.ctUnion,n,null);pi=(n,t)=>Yo(tn.default.ClipType.ctDifference,n,t),_r=(n,t)=>Yo(tn.default.ClipType.ctIntersection,n,t);sn=n=>n.reduce((t,e)=>t+Yn(e),0);mi=(n,t)=>n.map(e=>Zm(e,t)).filter(e=>e.length>=3)});function Bu(n){let t=[],e=[],i=[],r=[];for(let o of n.meshes||[]){let l=t.length/3,h=e.length/3,f=o.attributes.position.array;for(let g=0;g<f.length;g++)t.push(f[g]);let d=o.index.array;for(let g=0;g<d.length;g++)e.push(d[g]+l);for(let g of o.brep_faces||[])i.push({first:g.first+h,last:g.last+h});o.name&&r.push(o.name)}return{positions:Float64Array.from(t),indices:Uint32Array.from(e),faces:i,solids:(n.meshes||[]).length,names:r}}function Xs(n){let t=n.positions,e=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]<e[o]&&(e[o]=t[r+o]),t[r+o]>i[o]&&(i[o]=t[r+o]);return{min:e,max:i,size:[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}}function bc(n,t){let e=n.positions,i=n.indices,r=i[t*3]*3,o=i[t*3+1]*3,l=i[t*3+2]*3,h=e[o]-e[r],f=e[o+1]-e[r+1],d=e[o+2]-e[r+2],g=e[l]-e[r],v=e[l+1]-e[r+1],_=e[l+2]-e[r+2],b=f*_-d*v,w=d*g-h*_,T=h*v-f*g,S=Math.hypot(b,w,T);return S>0?[b/S,w/S,T/S]:[0,0,0]}function Jm(n){let[t,e,i]=n;if(i>.999999)return[1,0,0,0,1,0,0,0,1];if(i<-.999999)return[1,0,0,0,-1,0,0,0,-1];let r=e,o=-t,l=Math.hypot(r,o);r/=l,o/=l;let h=i,f=l,d=1-h;return[d*r*r+h,d*r*o,o*f,d*r*o,d*o*o+h,-r*f,-o*f,r*f,h]}function wc(n,t){let e=n.positions,i=new Float64Array(e.length);for(let l=0;l<e.length;l+=3){let h=e[l],f=e[l+1],d=e[l+2];i[l]=t[0]*h+t[1]*f+t[2]*d,i[l+1]=t[3]*h+t[4]*f+t[5]*d,i[l+2]=t[6]*h+t[7]*f+t[8]*d}let r={positions:i,indices:n.indices,faces:n.faces},{min:o}=Xs(r);for(let l=0;l<i.length;l+=3)i[l]-=o[0],i[l+1]-=o[1],i[l+2]-=o[2];for(let l=0;l<i.length;l++)i[l]=Math.round(i[l]*1e6)/1e6;return r}function vr(n,t=.001){let{max:e,size:i}=Xs(n),r=e[2],o=new Map,l=0,h=0,f=0,d=n.positions,g=n.indices,v=g.length/3;for(let w=0;w<v;w++){let T=g[w*3]*3,S=g[w*3+1]*3,x=g[w*3+2]*3,L=bc(n,w),V=d[S]-d[T],C=d[S+1]-d[T+1],N=d[S+2]-d[T+2],O=d[x]-d[T],z=d[x+1]-d[T+1],A=d[x+2]-d[T+2],k=Math.hypot(C*A-N*z,N*O-V*A,V*z-C*O)/2;f+=k;let G=(d[T+2]+d[S+2]+d[x+2])/3;if(L[2]>1-t){let $=Math.round(G*1e3)/1e3;o.set($,(o.get($)||0)+k)}else L[2]<-(1-t)?G>t&&(l+=k):Math.abs(L[2])>t&&(L[2]<0?l+=k:h+=k)}let _=l>.001*f,b=_?Km(n):{inside:0,total:0};return{size:i,top:r,floors:[...o.keys()].sort((w,T)=>T-w),floorAreas:Object.fromEntries(o),undercut:_&&b.inside>Fu,squareEdges:_&&b.inside<=Fu,sloped:h>.001*f,undercutArea:l,slopedArea:h,slopedShare:f>0?h/f:0,missed:b.inside,missedTotal:b.total}}function jm(n){let t=n.positions,e=n.indices,i=0;for(let r=0;r<e.length;r+=3){let o=e[r]*3,l=e[r+1]*3,h=e[r+2]*3;i+=t[o]*(t[l+1]*t[h+2]-t[l+2]*t[h+1])-t[o+1]*(t[l]*t[h+2]-t[l+2]*t[h])+t[o+2]*(t[l]*t[h+1]-t[l+1]*t[h])}return Math.abs(i/6)}function Km(n){let{min:t,max:e}=Xs(n),i=e[0]-t[0],r=e[1]-t[1],o=Math.max(.05,Math.sqrt(i*r/25e4)),l={x0:t[0],y0:t[1],cell:o,nx:Math.ceil(i/o)+1,ny:Math.ceil(r/o)+1},{h,mat:f}=Qm(n,l),d=Pi(Qn($o(Ec(n,t[2]+.01))).map(S=>S[0])),g=Uu(d,l),v=Uu(Fe(d,Math.min(3,.15*Math.min(i,r))),l),_=0,b=0;for(let S=0;S<h.length;S++){if(!(h[S]>t[2]))continue;let x=Math.max(0,h[S]-t[2]-f[S]);_+=x,(g[S]||!v[S])&&(b+=x)}let w=jm(n),T=o*o;return w>0?{inside:b*T/w,total:_*T/w}:{inside:0,total:0}}function Qm(n,t){let e=t.nx*t.ny,i=new Float32Array(e).fill(-1/0),r=new Float32Array(e),o=n.positions,l=n.indices;for(let h=0;h<l.length;h+=3){let f=l[h]*3,d=l[h+1]*3,g=l[h+2]*3,v=o[f],_=o[f+1],b=o[f+2],w=o[d],T=o[d+1],S=o[d+2],x=o[g],L=o[g+1],V=o[g+2],C=(T-L)*(v-x)+(x-w)*(_-L);if(Math.abs(C)<1e-12)continue;let N=(w-v)*(L-_)-(T-_)*(x-v)>0?1:-1,O=Math.max(0,Math.ceil((Math.min(v,w,x)-t.x0)/t.cell)),z=Math.min(t.nx-1,Math.floor((Math.max(v,w,x)-t.x0)/t.cell)),A=Math.max(0,Math.ceil((Math.min(_,T,L)-t.y0)/t.cell)),k=Math.min(t.ny-1,Math.floor((Math.max(_,T,L)-t.y0)/t.cell));for(let G=A;G<=k;G++)for(let $=O;$<=z;$++){let J=t.x0+($+5e-4)*t.cell,j=t.y0+(G+7e-4)*t.cell,Z=((T-L)*(J-x)+(x-w)*(j-L))/C,K=((L-_)*(J-x)+(v-x)*(j-L))/C,lt=1-Z-K;if(Z<0||K<0||lt<0)continue;let dt=Z*b+K*S+lt*V,bt=G*t.nx+$;dt>i[bt]&&(i[bt]=dt),r[bt]+=N*dt}}return{h:i,mat:r}}function Uu(n,t){let e=new Uint8Array(t.nx*t.ny);for(let i=0;i<t.ny;i++){let r=t.y0+i*t.cell,o=[];for(let l of n)for(let h=0;h<l.length;h++){let[f,d]=l[h],[g,v]=l[(h+1)%l.length];d<=r!=v<=r&&o.push(f+(r-d)/(v-d)*(g-f))}o.sort((l,h)=>l-h);for(let l=0;l+1<o.length;l+=2){let h=Math.max(0,Math.ceil((o[l]-t.x0)/t.cell)),f=Math.min(t.nx-1,Math.floor((o[l+1]-t.x0)/t.cell));for(let d=h;d<=f;d++)e[i*t.nx+d]=1}}return e}function Ec(n,t){let e=n.positions,i=n.indices,r=[],o=i.length/3;for(let l=0;l<o;l++){let h=[i[l*3]*3,i[l*3+1]*3,i[l*3+2]*3],f=[];for(let d=0;d<3;d++){let g=h[d],v=h[(d+1)%3],_=e[g+2]-t,b=e[v+2]-t;if(_<0!=b<0){let w=_/(_-b);f.push([e[g]+(e[v]-e[g])*w,e[g+1]+(e[v+1]-e[g+1])*w])}}f.length===2&&r.push(f)}return tg(r)}function tg(n){let t=([o,l])=>`${Math.round(o*1e4)},${Math.round(l*1e4)}`,e=new Map;n.forEach((o,l)=>{for(let h of[0,1]){let f=t(o[h]);e.has(f)||e.set(f,[]),e.get(f).push(l)}});let i=new Uint8Array(n.length),r=[];for(let o=0;o<n.length;o++){if(i[o])continue;i[o]=1;let l=[n[o][0],n[o][1]],h=t(n[o][0]),f=n[o][1];for(let d=0;d<n.length;d++){let g=t(f);if(g===h)break;let v=(e.get(g)||[]).find(b=>!i[b]);if(v===void 0)break;i[v]=1;let _=n[v];f=t(_[0])===g?_[1]:_[0],t(f)!==h&&l.push(f)}l.length>=3&&r.push(l)}return r}function ku(n){let t={};for(let o of Object.keys(Sc)){let l=vr(Zo(n,o));t[o]={reachable:!l.undercut,missed:l.missed,missedTotal:l.missedTotal,undercutArea:l.undercutArea,slopedArea:l.slopedArea,slopedShare:l.slopedShare,height:l.size[2]}}let e=Object.keys(Sc),i=e.some(o=>t[o].slopedShare>Tc),r=e.slice().sort((o,l)=>{let h=t[o],f=t[l];return(h.reachable===f.reachable?0:h.reachable?-1:1)||(i&&Math.abs(h.height-f.height)>1?h.height-f.height:0)||(Math.abs(h.missed-f.missed)>1e-4?h.missed-f.missed:0)||(Math.abs(h.missedTotal-f.missedTotal)>1e-4?h.missedTotal-f.missedTotal:0)||(Math.abs(h.slopedArea-f.slopedArea)>1e-6?h.slopedArea-f.slopedArea:0)||(Math.abs(h.height-f.height)>1e-6?h.height-f.height:0)||e.indexOf(o)-e.indexOf(l)});if(!r.some(o=>t[o].reachable))for(let o of e)t[o].reachable=!0;return{sides:t,best:r[0]}}var Sc,Zo,Fu,Tc,Ac=vn(()=>{Gs();Sc={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],left:[-1,0,0],right:[1,0,0]};Zo=(n,t)=>wc(n,Jm(typeof t=="string"?Sc[t]:t));Fu=.05;Tc=.2});function sg(n){let t=new Set;for(let e of n){let i=e.match(/CONVERSION_BASED_UNIT\s*\(\s*'([^']*)'/);if(i){let l=rg[i[1].trim().toUpperCase()];if(!l)return null;t.add(l);continue}let r=e.match(/SI_UNIT\s*\(\s*(\$|\.(\w+)\.)\s*,\s*\.METRE\.\s*\)/);if(!r)return null;let o=r[2]?ig[r[2]]:1e3;if(!o)return null;t.add(o)}return t.size===1?[...t][0]:null}function*og(n){let t=n.indexOf("DATA;");if(t<0)return;let e=t+5,i=e,r=!1;for(;e<n.length;e++){let o=n.charCodeAt(e);if(o===39)r=!r;else if(o===59&&!r){let l=n.slice(i,e).trim();if(i=e+1,l==="ENDSEC")return;let h=l.match(/^#(\d+)\s*=\s*([\s\S]*)$/);h&&(yield[+h[1],h[2]])}}}function ag(n){let t=[0,0,0];for(let e=0;e<n.length;e++){let i=n[e],r=n[(e+1)%n.length];t[0]+=(i[1]-r[1])*(i[2]+r[2]),t[1]+=(i[2]-r[2])*(i[0]+r[0]),t[2]+=(i[0]-r[0])*(i[1]+r[1])}for(let e=0;e<n.length;e++){let i=n[e],r=n[(e+1)%n.length],o=n[(e+2)%n.length],l=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],h=[o[0]-r[0],o[1]-r[1],o[2]-r[2]];if((l[1]*h[2]-l[2]*h[1])*t[0]+(l[2]*h[0]-l[0]*h[2])*t[1]+(l[0]*h[1]-l[1]*h[0])*t[2]<-1e-12)return!1}return!0}function zu(n){let t=typeof n=="string"?n:new TextDecoder("latin1").decode(n);if(!t.startsWith("ISO-10303-21")||!t.includes("POLY_LOOP")||!t.includes("FACETED_BREP"))return null;let e=new Map,i=new Map,r=new Map,o=new Map,l=new Map,h=[],f=[];for(let[b,w]of og(t)){if(w.startsWith("(")){/\bLENGTH_UNIT\s*\(/.test(w)&&f.push(w);continue}let T=w.match(/^([A-Z0-9_]+)\s*\(/);if(!T)continue;let S=T[1];if(ng.test(S))return null;if(!eg.has(S))continue;let x=w.slice(T[0].length,w.lastIndexOf(")"));if(S==="CARTESIAN_POINT"){let L=x.match(/\(([^()]*)\)\s*$/),V=L?L[1].split(",").map(Number):[];if(V.length!==3||V.some(C=>!Number.isFinite(C)))return null;e.set(b,V)}else S==="POLY_LOOP"?i.set(b,Ws(x.slice(x.indexOf("(")))):S==="FACE_OUTER_BOUND"?r.set(b,{loop:Ws(x)[0],reversed:/\.F\.\s*$/.test(x)}):S==="FACE_SURFACE"||S==="FACE"?o.set(b,Ws(x.slice(x.indexOf("("),x.indexOf(")")+1))):S==="CLOSED_SHELL"||S==="OPEN_SHELL"?l.set(b,Ws(x)):S==="FACETED_BREP"&&h.push(Ws(x)[0])}let d=sg(f);if(!d||!h.length)return null;let g=[],v=[],_=[];for(let b of h){let w=l.get(b);if(!w)return null;for(let T of w){let S=o.get(T);if(!S||S.length!==1)return null;let x=r.get(S[0]),L=x&&i.get(x.loop);if(!L||L.length<3)return null;let V=x.reversed?L.slice().reverse():L,C=V.map(z=>e.get(z));if(C.some(z=>!z)||C.length>3&&!ag(C))return null;let N=g.length/3,O=v.length/3;for(let z of C)g.push(z[0]*d,z[1]*d,z[2]*d);for(let z=1;z+1<V.length;z++)v.push(N,N+z,N+z+1);_.push({first:O,last:v.length/3-1})}}return{positions:Float64Array.from(g),indices:Uint32Array.from(v),faces:_,solids:h.length,names:[]}}var eg,ng,ig,rg,Ws,Vu=vn(()=>{eg=new Set(["CARTESIAN_POINT","POLY_LOOP","FACE_OUTER_BOUND","FACE_SURFACE","FACE","PLANE","AXIS2_PLACEMENT_3D","DIRECTION","CLOSED_SHELL","OPEN_SHELL","FACETED_BREP","SHELL_BASED_SURFACE_MODEL"]),ng=/^(ADVANCED_FACE|EDGE_LOOP|FACE_BOUND|ORIENTED_FACE|ORIENTED_CLOSED_SHELL|BREP_WITH_VOIDS|MAPPED_ITEM|ITEM_DEFINED_TRANSFORMATION|NEXT_ASSEMBLY_USAGE_OCCURRENCE|MANIFOLD_SOLID_BREP)$/,ig={EXA:1e21,PETA:1e18,TERA:1e15,GIGA:1e12,MEGA:1e9,KILO:1e6,HECTO:1e5,DECA:1e4,DECI:100,CENTI:10,MILLI:1,MICRO:.001,NANO:1e-6},rg={MILLIMETRE:1,MILLIMETER:1,MM:1,CENTIMETRE:10,CENTIMETER:10,METRE:1e3,METER:1e3,INCH:25.4,IN:25.4,FOOT:304.8,FT:304.8},Ws=n=>[...n.matchAll(/#(\d+)/g)].map(t=>+t[1])});function Cc(n,t){let e=n.diameter/2,i=Math.ceil(e/t),r=[];for(let o=-i;o<=i;o++)for(let l=-i;l<=i;l++){let h=Math.hypot(l,o)*t;if(h>e+1e-6)continue;let f=Math.min(h,e),d=0;if(n.kind==="ball")d=e-Math.sqrt(Math.max(0,e*e-f*f));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let g=(n.angle||(n.kind==="drill"?118:60))*Math.PI/360;d=f/Math.tan(g)}r.push(l,o,d)}return Float32Array.from(r)}function lg(n,t,e,i,r,o){let l=Math.hypot(i.x-e.x,i.y-e.y),h=Math.max(1,Math.ceil(l/(n.cell*.5))),f=!1;for(let d=r?0:1;d<=h;d++){let g=d/h,v=(e.x+(i.x-e.x)*g-n.x0)/n.cell,_=(e.y+(i.y-e.y)*g-n.y0)/n.cell,b=e.z+(i.z-e.z)*g;if(b>=n.top)continue;let w=Math.round(v),T=Math.round(_);for(let S=0;S<t.length;S+=3){let x=w+t[S],L=T+t[S+1];if(x<0||L<0||x>=n.nx||L>=n.ny)continue;let V=L*n.nx+x,C=b+t[S+2];if(n.h[V]>C+1e-4){if(r){n.h[V]>C+.05&&(f=!0);continue}n.h[V]=C,n.op[V]=o+1}}}return f}function Hu(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function Pc(n,t,e,i,r){let o=t.diameter/2,l=n.cell,h=o/l,f=t.kind==="ball"?j=>o-Math.sqrt(Math.max(0,o*o-j*j)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(j=>Z=>Z/j)(Math.tan((t.angle||(t.kind==="drill"?118:60))*Math.PI/360)):()=>0,d=!t.kind||t.kind==="flat"||t.kind==="surfacing",{h:g,sx:v,sy:_,wx:b,wy:w,gap:T,deep:S,nx:x,ny:L}=n,V=1.5*l,C=h+1.5,N=(j,Z,K,lt)=>{let dt=Math.hypot(Z,K);if(dt>C)return;let bt=dt*l;if(bt<=o){let yt=lt+f(bt);if(g[j]>yt+1e-4)g[j]=yt,n.op[j]=r+1,T[j]=1/0,S[j]=-1/0;else if(g[j]<yt-1e-4)return;o-bt>S[j]&&(S[j]=o-bt,d&&o-bt<V&&dt>1e-6?(v[j]=Z/dt*(o-bt),_[j]=K/dt*(o-bt),b[j]=-Z/dt,w[j]=-K/dt):(v[j]=0,_[j]=0,b[j]=0,w[j]=0))}else d&&g[j]>lt+1e-4&&bt-o<T[j]&&(T[j]=bt-o,v[j]=Z/dt*(o-bt),_[j]=K/dt*(o-bt),b[j]=-Z/dt,w[j]=-K/dt)},O=(e.x-n.x0)/l,z=(e.y-n.y0)/l,A=(i.x-n.x0)/l,k=(i.y-n.y0)/l;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let j=A-O,Z=k-z,K=j*j+Z*Z,lt=Math.max(0,Math.floor(Math.min(O,A)-C)),dt=Math.min(x-1,Math.ceil(Math.max(O,A)+C)),bt=Math.max(0,Math.floor(Math.min(z,k)-C)),yt=Math.min(L-1,Math.ceil(Math.max(z,k)+C));for(let wt=bt;wt<=yt;wt++)for(let Pt=lt;Pt<=dt;Pt++){let ht=K>0?Math.max(0,Math.min(1,((Pt-O)*j+(wt-z)*Z)/K)):0;N(wt*x+Pt,Pt-(O+j*ht),wt-(z+Z*ht),e.z)}return}let G=Math.hypot(i.x-e.x,i.y-e.y),$=Math.max(1,Math.ceil(G/(l*.5))),J=Math.ceil(C);for(let j=1;j<=$;j++){let Z=j/$,K=O+(A-O)*Z,lt=z+(k-z)*Z,dt=e.z+(i.z-e.z)*Z;if(dt>=n.top)continue;let bt=Math.max(0,Math.floor(K-J)),yt=Math.min(x-1,Math.ceil(K+J)),wt=Math.max(0,Math.floor(lt-J)),Pt=Math.min(L-1,Math.ceil(lt+J));for(let ht=wt;ht<=Pt;ht++)for(let Tt=bt;Tt<=yt;Tt++)N(ht*x+Tt,Tt-K,ht-lt,dt)}}function Gu(n,t){let e=new Wi(n.stock,t||Wi.cellFor(n.stock)),i=[];return n.ops.forEach((r,o)=>{if(!r.enabled||!r.moves)return;let l=Cc(r.tool,e.cell),h=null;for(let f of r.moves)h&&lg(e,l,h,f,!!f.r,o)&&i.push({op:r.id,at:f}),h=f}),{hm:e,collisions:i}}function Xu(n,t){let e=new Float32Array(t.nx*t.ny).fill(-1/0),i=n.positions,r=n.indices;for(let o=0;o<r.length;o+=3){let l=r[o]*3,h=r[o+1]*3,f=r[o+2]*3,d=i[l],g=i[l+1],v=i[l+2],_=i[h],b=i[h+1],w=i[h+2],T=i[f],S=i[f+1],x=i[f+2],L=(b-S)*(d-T)+(T-_)*(g-S);if(Math.abs(L)<1e-12)continue;let V=Math.max(0,Math.floor((Math.min(d,_,T)-t.x0)/t.cell)),C=Math.min(t.nx-1,Math.ceil((Math.max(d,_,T)-t.x0)/t.cell)),N=Math.max(0,Math.floor((Math.min(g,b,S)-t.y0)/t.cell)),O=Math.min(t.ny-1,Math.ceil((Math.max(g,b,S)-t.y0)/t.cell));for(let z=N;z<=O;z++)for(let A=V;A<=C;A++){let k=t.x0+A*t.cell,G=t.y0+z*t.cell,$=((b-S)*(k-T)+(T-_)*(G-S))/L,J=((S-g)*(k-T)+(d-T)*(G-S))/L,j=1-$-J;if($<-1e-9||J<-1e-9||j<-1e-9)continue;let Z=$*v+J*w+j*x,K=z*t.nx+A;Z>e[K]&&(e[K]=Z)}}return e}var Wi,Ic=vn(()=>{Wi=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});function Wu(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return cg.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t||"flat"}function xr(n,t){return(typeof t=="string"?t:t?.mode)==="toolId"?n.toolId??n.id:n.toolNumber?n.toolNumber:t?.manual?.get(n.id)??n.toolId??n.id}function Yu(n,t,e=0,i=null){if(n==="toolId")return{mode:n};let r=new Set(t.filter(f=>f.toolNumber).map(f=>f.toolNumber));for(let f=1;f<=e;f++)r.add(f);i&&r.add(i);let o=new Map,l=t.filter(f=>!f.toolNumber);for(let f of l){let d=f.toolId??f.id;d>e&&!r.has(d)&&(o.set(f.id,d),r.add(d))}let h=e+1;for(let f of l)if(!o.has(f.id)){for(;r.has(h);)h++;o.set(f.id,h),r.add(h)}return{mode:n,manual:o}}function $u(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${Wu(t)}`,kind:Wu(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2}))}function qu(n,t,e,i={}){let r=yr[t]||yr.mdf,o=$n[e]||$n.balanced,l=i.maxRpm||24e3,h=i.minRpm||0,f=Math.round(Math.min(l,Math.max(h,r.rpm))),d=Math.min(r.maxChip,r.chip*n.diameter),g=Math.min(i.maxFeed||4e3,4e3),v=Math.round(Math.min(g,Math.max(150,f*n.flutes*d*o.feed)));return{rpm:f,feed:v,plunge:Math.round(Math.max(60,v*.3)),stepdown:Math.max(.05,n.diameter*r.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,r.stepover*o.stepover)),rampAngle:r.ramp}}var yr,$n,cg,Yi,Ys=vn(()=>{yr={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},$n={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},cg=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"]);Yi=n=>n==="aluminum"?{height:1,length:1}:{height:2,length:2}});var $i={};Pu($i,{INCH:()=>hg,len:()=>jo,num:()=>Jo,toMm:()=>fg,unitsFrom:()=>ug});function Jo(n,t="mm",e=t==="in"?3:1){let i=t==="in"?n/25.4:n;return(Math.round(i*10**e)/10**e).toLocaleString("en-US",{maximumFractionDigits:e})}var hg,ug,jo,fg,Rc=vn(()=>{hg=25.4,ug=n=>n==="imperial"?"in":"mm";jo=(n,t="mm",e)=>`${Jo(n,t,e)} ${t}`,fg=(n,t="mm")=>t==="in"?n*25.4:n});function Oc(n){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:2,extraTop:1,width:n.size[0]+4,depth:n.size[1]+4,thickness:n.size[2]+1},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,...Yi("mdf")},throughDepth:.3,disabled:{},toolOverride:{}}}function Qo(n,t){let[e,i,r]=n.size,o=t.stock,l=o.fit?e+2*o.margin:Math.max(e,o.width),h=o.fit?i+2*o.margin:Math.max(i,o.depth),f=o.fit?r+o.extraTop:Math.max(r,o.thickness);return{minX:(e-l)/2,minY:(i-h)/2,maxX:(e+l)/2,maxY:(i+h)/2,bottom:0,top:f,width:l,depth:h,thickness:f}}function Fc(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,r=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(r=n.minY),e.includes("back")&&(r=n.maxY),{x:i,y:r,z:t.z==="bed"?n.bottom:n.top}}function gg(n){let t=n.positions,e=n.indices,i=[];for(let r=0;r<e.length/3;r++){if(bc(n,r)[2]>-.001)continue;let l=[e[r*3]*3,e[r*3+1]*3,e[r*3+2]*3],h=l.map(f=>[t[f],t[f+1]]);Math.abs(Yn(h))<1e-6||i.push({loop:Yn(h)>0?h:h.reverse(),maxZ:Math.max(...l.map(f=>t[f+2]))})}return i}function vg(n){if(n.length!==1)return null;let t=n[0];if(t.length<12)return null;let e=Xi([t]),i=(e.minX+e.maxX)/2,r=(e.minY+e.maxY)/2,o=t.map(([h,f])=>Math.hypot(h-i,f-r)),l=o.reduce((h,f)=>h+f,0)/o.length;return o.every(h=>Math.abs(h-l)<Math.max(.03,l*.01))?{x:i,y:r,d:2*l}:null}function ju(n,t,e,i={}){let r=ht=>jo(ht,e.units),o=ht=>Jo(ht,e.units),l=vr(n),h=Qo(l,e),f=$n[e.finish]||$n.balanced,d=[],g=e.surface3d??l.slopedShare>Tc;l.squareEdges&&d.push({kind:"edges",text:"Chamfers or rounded edges face down on this side, so they are left square."}),l.undercut&&d.push({kind:"undercut",text:"Some features face the other side, so they can\u2019t be reached from the top. Cut this side, then turn the part over for a second setup."});let v=t.filter(ht=>ht.kind==="flat").sort((ht,Tt)=>Tt.diameter-ht.diameter),_=t.filter(ht=>ht.kind==="drill"),b=t.filter(ht=>ht.kind==="surfacing").sort((ht,Tt)=>Tt.diameter-ht.diameter),w=new Map,T=ht=>(ht&&w.set(ht.id,(w.get(ht.id)||0)+1),ht),S=e.material==="aluminum"?8:12.8,x=l.undercutArea>0?gg(n).sort((ht,Tt)=>Tt.maxZ-ht.maxZ):[],L=[],V=ht=>{let Tt=0,Wt=x.length;for(;Tt<Wt;){let Rt=Tt+Wt>>1;x[Rt].maxZ>ht+Ii?Tt=Rt+1:Wt=Rt}let Ht=Tt;if(!Ht)return[];let zt=null;for(let Rt of L)Rt.k<=Ht&&(!zt||Rt.k>zt.k)&&(zt=Rt);if(zt?.k===Ht)return zt.loops;let _t=x.slice(zt?zt.k:0,Ht).map(Rt=>Rt.loop),X=Ou(zt?[...zt.loops,..._t]:_t);return L.push({k:Ht,loops:X}),X},C=new Map,N=ht=>{if(C.has(ht))return C.get(ht);let Tt=$o(Ec(n,ht+Ii)),Wt=V(ht),Ht=Wt.length?Fe(Fe(Pi([...Tt,...Wt]),.002),-.002):Tt;return C.set(ht,Ht),Ht},O=N(0),z=Pi(Qn(O).map(ht=>ht[0])),A=[],k=1,G=ht=>(ht.id=ht.id||`op${k++}`,A.push(ht),ht);function $(ht,Tt,Wt){let Ht=v.filter(Rt=>Rt.diameter<=S&&Xr(Rt,Tt)&&Fe(ht,-(Rt.diameter/2+Wt)).length);if(!Ht.length)return null;let zt=Ht.map(Rt=>({t:Rt,c:yg(ht,Rt.diameter/2)})),_t=zt.find(Rt=>Rt.c>=.85)||zt.reduce((Rt,Qt)=>Qt.c>Rt.c?Qt:Rt);return(zt.find(Rt=>w.has(Rt.t.id)&&Rt.c>=Math.min(.85,_t.c*.98))||_t).t}function J(ht,Tt,Wt){let Ht=yn(pi(ht,$s(ht,Tt.diameter/2)),on);if(sn(Ht)<on)return null;let zt=v.filter(Rt=>Rt.diameter<Tt.diameter-1e-6&&Xr(Rt,Wt));if(!zt.length)return{tool:null,left:Ht};let _t=sn(Ht);return{tool:zt.find(Rt=>sn(yn(pi(ht,$s(ht,Rt.diameter/2)),on))<_t*.25)||zt[zt.length-1],left:Ht}}let j=ht=>qu(ht,e.material,e.finish,i);if(h.top>l.top+Ii){let ht=b[0]||v[0];ht&&G({id:"face",kind:"face",label:"Flatten the top",tool:T(ht),zTop:h.top,zBottom:l.top,region:Zu(h),detail:`${r(h.top-l.top)} off the top`})}let Z=g&&K();function K(){let ht=l.top+e.throughDepth,Tt=ie=>ie.diameter<=S&&Xr(ie,ht),Wt=v.find(ie=>w.has(ie.id)&&Tt(ie))||v.find(Tt);if(!Wt)return d.push({kind:"notool",text:`No end mill is long enough to rough the 3D shape (${r(ht)}), so it is cut in 2.5D.`}),!1;let Ht=t.filter(ie=>ie.kind==="ball"&&Tt(ie)).sort((ie,Re)=>Math.abs(ie.diameter-6.35)-Math.abs(Re.diameter-6.35)),zt=Ht[0]||Wt;Ht.length||d.push({kind:"noball",text:`No ball end mill in your Tool Library is long enough, so ${Wt.name} finishes the 3D surface. A ball end mill leaves it much smoother.`});let _t=Math.min(j(Wt).stepdown,dg),X=[l.top,...l.floors.filter(ie=>ie<l.top-Ii&&ie>Ii&&(l.floorAreas[ie]||0)>=pg),0],Rt=[];for(let ie=1;ie<X.length;ie++){let Re=Math.max(1,Math.ceil((X[ie-1]-X[ie])/_t-1e-6));for(let Se=1;Se<=Re;Se++)Rt.push(Se===Re?X[ie]:X[ie-1]-Se*(X[ie-1]-X[ie])/Re)}let Qt=Fe(z,Math.max(Wt.diameter,zt.diameter)+1),Ft=[],oe=l.top,Ie=null;for(let ie of Rt){let Re=ie<=Ii,Se=yn(pi(Re?z:Qt,N(Re?0:ie)),on),Ce=Ie?yn(_r(Se,Ie),on):Se,at=Ie?yn(pi(Se,Ie),on):[],ke={zFrom:oe,z:Re?-e.throughDepth:ie,region:mi(Ce,Nc),fresh:sn(at)>=on&&Fe(at,-.5).length?mi(at,Nc):[]};(sn(Ce)>=on||ke.fresh.length)&&Ft.push(ke),Ie=Se,oe=ie}if(!Ft.length)return!1;let pe=Ko[e.finish]??Ko.balanced,ue=G({kind:"rough3d",label:"Rough the 3D shape",tool:T(Wt),zTop:l.top,zBottom:Ft[Ft.length-1].z,region:Qt,layers:Ft,allowance:Lc,detail:`${Ft.length} layers \xB7 ${r(Lc)} left`}),ve=Wt.diameter/2,fe=Ft.map(ie=>{let Re=Fe(ie.region,-Lc),Se=yn(pi(Re,$s(Re,ve)),on);return Qn(Se).filter(Ce=>Fe(Ce,-mg/2).length).flat()}),Te=ue.id;if(fe.some(ie=>sn(ie)>=on)){let ie=v.filter(me=>me.diameter<Wt.diameter-1e-6&&Tt(me)),Re=me=>Ft.map((Y,P)=>sn(fe[P])>=on?yn(pi(fe[P],$s(Y.region,me.diameter/2)),on):[]).flat(),Se=sn(fe.flat()),Ce=ie.find(me=>sn(Re(me))<=Se*.25)||ie[ie.length-1];if(Ce){let me=Ce.diameter/2,Y=Ft.map((P,it)=>({zFrom:P.zFrom,z:P.z,region:sn(fe[it])>=on?mi(_r(P.region,Fe(fe[it],2*me+.5)),Nc):[]})).filter(P=>P.region.length);Te=G({kind:"rest3d",label:"Clear where the big end mill can\u2019t reach",tool:T(Ce),zTop:l.top,zBottom:Y[Y.length-1].z,region:Pi(Y.flatMap(P=>P.region)),layers:Y,after:ue.id,detail:`${Y.length} layers \xB7 holes, slots, corners`}).id}let at=Ce||Wt,ke=Re(at);Fe(ke,-.25).length?d.push({kind:"notool",text:`Some holes or slots are narrower than ${at.name} and stay uncut: add a smaller end mill to the Tool Library.`}):sn(ke)>=on&&d.push({kind:"corners",text:`Inside corners stay rounded to ${r(at.diameter/2)}: no smaller end mill in your library.`})}return G({kind:"finish3d",label:"Finish the 3D surface",tool:T(zt),zTop:l.top,zBottom:0,region:z,after:Te,ridge:pe,detail:`Parallel passes${e.finish==="fast"?"":" and waterlines on steep walls"} \xB7 ${jo(pe,e.units,e.units==="in"?4:2)} ridges`,steep:e.finish!=="fast"}),d.push({kind:"surface3d",text:`Curved faces are cut in 3D: roughed in ${Ft.length} layers, then ${zt.name} follows the surface.`}),!0}l.sloped&&!Z&&d.push({kind:"sloped",text:"Sloped or curved faces (chamfers, fillets) aren\u2019t cut in 3D yet, so they are left square."});let lt=Z?[]:[l.top,...l.floors.filter(ht=>ht<l.top-Ii&&ht>Ii),0],dt=[],bt=(ht,Tt)=>{let Wt=sn(ht),Ht=sn(Tt);if(Math.abs(Wt-Ht)>Math.max(on,Wt*.005))return!1;let zt=Xi(ht),_t=Xi(Tt);return Math.abs(zt.minX-_t.minX)<.01&&Math.abs(zt.maxX-_t.maxX)<.01&&Math.abs(zt.minY-_t.minY)<.01&&Math.abs(zt.maxY-_t.maxY)<.01};for(let ht=1;ht<lt.length;ht++){let Tt=lt[ht-1],Wt=lt[ht],Ht=pi(Zu(h),N(Wt));for(let zt of Qn(Ht)){if(sn(zt)<on||!Fe(zt,-.05).length)continue;let _t=Xi([zt[0]]),X=_t.minX<=h.minX+.001||_t.maxX>=h.maxX-.001||_t.minY<=h.minY+.001||_t.maxY>=h.maxY-.001,Rt=null;if(X&&(Wt===0||(Rt=yn(_r(zt,z),on),sn(Rt)<on)))continue;let Qt=X?Rt:zt,Ft=dt.find(oe=>oe.zFloor===Tt&&oe.outer===X&&bt(oe.shape,Qt));Ft?(Ft.zFloor=Wt,Ft.region=zt):dt.push({outer:X,region:zt,over:Rt,shape:Qt,zTop:Tt,zFloor:Wt})}}let yt=new Map;for(let{outer:ht,region:Tt,over:Wt,zTop:Ht,zFloor:zt}of dt){let _t=zt===0,X=_t?-e.throughDepth:zt,Rt=Ht-X;{if(ht){let ve=$(_r(Tt,Fe(Wt,13)),Rt,f.allowance);if(!ve){d.push({kind:"notool",text:`A step ${r(Ht-zt)} deep has no end mill that fits.`});continue}let fe=_r(Tt,Fe(Wt,ve.diameter+.5));G({kind:"step",label:"Cut the step",tool:T(ve),zTop:Ht,zBottom:X,region:fe,walls:Tt,detail:`${r(Ht-zt)} deep`});continue}let Qt=vg(Tt);if(Qt){let ve=`${Dc(Qt.d)}|${Dc(Ht)}|${Dc(X)}`;yt.has(ve)||yt.set(ve,{d:Qt.d,zTop:Ht,zBottom:X,through:_t,centers:[],regions:[]}),yt.get(ve).centers.push(Qt),yt.get(ve).regions.push(Tt);continue}let Ft=Xi([Tt[0]]),oe=$(Tt,Rt,f.allowance),Ie=`${o(Ft.maxX-Ft.minX)} \xD7 ${r(Ft.maxY-Ft.minY)} \xB7 ${_t?"through":`${r(Ht-zt)} deep`}`;if(!oe){d.push({kind:"notool",text:`No end mill fits the pocket ${Ie}.`});continue}let pe=G({kind:"pocket",label:_t?"Cut the opening":"Clear the pocket",tool:T(oe),zTop:Ht,zBottom:X,region:Tt,detail:Ie}),ue=J(Tt,oe,Rt);ue&&ue.tool?G({kind:"corners",label:"Clean the corners",tool:T(ue.tool),zTop:Ht,zBottom:X,region:Tt,after:pe.id,detail:`Corners too tight for ${oe.name}`}):ue&&d.push({kind:"corners",text:`Pocket corners stay rounded to ${r(oe.diameter/2)}: no smaller end mill in your library.`})}}for(let ht of yt.values()){let Tt=ht.centers.length,Wt=ht.zTop-ht.zBottom,Ht=`\xD8${r(ht.d)} ${ht.through?"through":`${r(ht.zTop-ht.zBottom)} deep`}`,zt=_.find(Rt=>_g(Rt.diameter,ht.d)&&Xr(Rt,Wt));if(zt){G({kind:"drill",label:Tt>1?`Drill ${Tt} holes`:"Drill the hole",tool:T(zt),zTop:ht.zTop,zBottom:ht.zBottom,centers:ht.centers,detail:Ht});continue}let _t=ht.regions.flat().length?ht.regions.flatMap(Rt=>Rt):[],X=$(_t,Wt,0)||null;if(!X||X.diameter>ht.d-.4){let Rt=v.find(Qt=>Qt.diameter<=ht.d-.4&&Xr(Qt,Wt));if(!Rt){d.push({kind:"notool",text:`No drill or end mill fits the ${Ht} hole${Tt>1?"s":""}.`});continue}G({kind:"hole",label:Tt>1?`Cut ${Tt} holes`:"Cut the hole",tool:T(Rt),zTop:ht.zTop,zBottom:ht.zBottom,region:_t,centers:ht.centers,detail:`${Ht} \xB7 spiral`});continue}G({kind:"hole",label:Tt>1?`Cut ${Tt} holes`:"Cut the hole",tool:T(X),zTop:ht.zTop,zBottom:ht.zBottom,region:_t,centers:ht.centers,detail:`${Ht} \xB7 spiral`})}if(z.length){let ht=l.top+e.throughDepth,Tt=v.filter(zt=>Xr(zt,ht)&&zt.diameter<=S),Wt=Tt.find(zt=>w.has(zt.id))||Tt.slice().sort((zt,_t)=>Math.abs(zt.diameter-6.35)-Math.abs(_t.diameter-6.35))[0],Ht=e.tabs.enabled?`${e.tabs.count} tabs`:"no tabs";Wt?G({id:"cutout",kind:"cutout",label:"Cut out the part",tool:T(Wt),zTop:l.top,zBottom:-e.throughDepth,region:z,detail:`${r(l.top)} \xB7 ${Ht}`}):d.push({kind:"notool",text:`No end mill is long enough to cut out the part (${r(ht)}).`})}let wt=[],Pt=new Map;for(let ht of A){if(ht.kind!=="pocket"&&ht.kind!=="corners"){wt.push(ht);continue}let Tt=ht.after&&Pt.has(ht.after)?Pt.get(ht.after):ht.after,Wt=wt.find(Ht=>Ht.kind===ht.kind&&Ht.detail===ht.detail&&Ht.zTop===ht.zTop&&Ht.zBottom===ht.zBottom&&Ht.tool.id===ht.tool.id&&(Ht.after||null)===(Tt||null));Wt?(Wt.region=[...Wt.region,...ht.region],Wt.count=(Wt.count||1)+1,Pt.set(ht.id,Wt.id)):wt.push({...ht,after:Tt})}for(let ht of wt)ht.count>1&&(ht.kind==="pocket"&&(ht.label=ht.label==="Cut the opening"?`Cut ${ht.count} openings`:`Clear ${ht.count} pockets`),ht.kind==="corners"&&(ht.label=`Clean the corners of ${ht.count} pockets`));A.length=0,A.push(...wt);for(let ht of A){let Tt=e.toolOverride?.[ht.id];if(Tt){let Wt=t.find(Ht=>Ht.id===Tt);Wt&&(ht.tool=Wt)}ht.enabled=!e.disabled?.[ht.id],ht.feeds=j(ht.tool),ht.kind==="finish3d"&&(ht.surface=Mg(n,h,Math.min(.2,ht.tool.diameter/16)))}return{analysis:l,stock:h,zero:Fc(h,e.zero),ops:xg(A),warnings:d,job:e,mode3d:g,did3d:Z}}function xg(n){let t=n.filter(d=>d.kind==="face"),e=n.filter(d=>d.kind==="cutout"),i=n.filter(d=>d.kind!=="face"&&d.kind!=="cutout"),r=d=>d.region||(d.centers||[]).map(g=>Sg(g)),o=new Map(i.map(d=>[d,i.filter(g=>g!==d&&(d.after===g.id||g.zTop>d.zTop+Ii&&sn(_r(r(d),r(g)))>on))])),l=new Set,h=[...t],f=t.length?t[t.length-1].tool:null;for(;l.size<i.length;){let d=i.filter(v=>!l.has(v)&&o.get(v).every(_=>l.has(_))),g=d.find(v=>f&&v.tool.id===f.id)||d[0];l.add(g),h.push(g),f=g.tool}return[...h,...e]}function Mg(n,t,e){let i={x0:t.minX,y0:t.minY,cell:e,nx:Math.ceil((t.maxX-t.minX)/e)+1,ny:Math.ceil((t.maxY-t.minY)/e)+1};return i.h=Xu(n,i),i}function Sg(n,t=32){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}function ta(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var Ii,on,dg,Lc,pg,Nc,mg,Ko,Ju,Zu,_g,$s,yg,Xr,Dc,Ku=vn(()=>{Ac();Ic();Gs();Ys();Rc();Ii=.01,on=.05,dg=2,Lc=.3,pg=25,Nc=.1,mg=.5,Ko={fast:.1,balanced:.05,smooth:.02},Ju=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"];Zu=n=>[[[n.minX,n.minY],[n.maxX,n.minY],[n.maxX,n.maxY],[n.minX,n.maxY]]],_g=(n,t)=>Math.abs(n-t)<.05;$s=(n,t)=>Fe(Fe(n,-t),t),yg=(n,t)=>{let e=sn(n);return e>0?sn($s(n,t))/e:0},Xr=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,Dc=n=>(Math.round(n*10)/10).toString()});function Yr(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(r,o)=>n-(o+1)*(n-t)/i)}function Wr(n,t,e,i,r,o,l){let h=[...t.breaks(e,i),i];if(l)for(let d of l.edges(e,i))h.push(d);h.sort((d,g)=>d-g);let f=e;for(let d of h){if(d-f<1e-9)continue;let g=(f+d)/2,v=l&&l.inside(g)?l.top:-1/0,[_,b]=t.at(f),w=Math.max(r(f),v),T=n.at;T&&(Math.abs(T.z-w)>1e-6||Math.abs(T.x-_)>1e-6||Math.abs(T.y-b)>1e-6)&&n.feed(_,b,w,o);let[S,x]=t.at(d);n.feed(S,x,Math.max(r(d),v),o),f=d}}function Qu(n,t,e,i,r,o,l){let h=Math.max(0,(i-r)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||h<1e-6){let[d,g]=t.at(e);return n.feed(d,g,l&&l.inside(e)?Math.max(r,l.top):r,o.plunge),Wr(n,t,e,e+t.length,()=>r,o.feed,l),e}let f=e+h;return Wr(n,t,e,f,d=>i-(d-e)/h*(i-r),Math.min(o.feed,o.plunge*2),l),Wr(n,t,f,f+t.length,()=>r,o.feed,l),f}function Tg(n,t,e,i){let r=[];for(let o=t,l=0;l<500;o+=e,l++){let h=mi(yn(Fe(n,-o,i),.001),.005);if(!h.length)break;r.push(h)}return r}function Ag(n){let t=n.map((r,o)=>r.map(l=>({loop:l,depth:o,kids:[]})));for(let r=1;r<t.length;r++)for(let o of t[r])(t[r-1].find(h=>Hs(o.loop[0],h.loop)&&Math.sign(Yn(h.loop))===Math.sign(Yn(o.loop)))||t[r-1].find(h=>Hs(o.loop[0],h.loop))||t[0][0]).kids.push(o);let e=[],i=r=>{if(!r.kids.length){e.push([r.loop]);return}for(let o of r.kids)i(o);e[e.length-1].push(r.loop)};for(let r of t[0]||[])Yn(r.loop)>0&&i(r);for(let r of t[0]||[])Yn(r.loop)<=0&&!t[0].some(o=>o.kids.includes(r))&&i(r);return e}function ea(n,t){let e=0;for(let i of t)Hs(n,i)&&(e+=Yn(i)>0?1:-1);return e>0}function Cg(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let r=1;r<i;r++){let o=r/i;if(!ea([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function Uc(n,t,e,i,r,o,l,h=null,f=null){let d=Math.min(i.stepover,e*.95),g=Tg(t,e+l,d,l>=.2?.05:void 0);if(!g.length)return;let v=Fe(t,-(e+l)+.01),_=Ag(g),b=r;for(let w of Yr(r,o,i.stepdown)){for(let T of _){let S=new qi(T[0]),[x,L]=S.at(0);n.goTo(x,L,Math.max(b,f?f(x,L):b)),n.feed(x,L,b,i.plunge);let V=Qu(n,S,0,b,w,i);for(let C=1;C<T.length;C++){let N=S.at(V),O=new qi(T[C]),z=O.nearest(N);if(!Cg(N,O.at(z),v)){[x,L]=O.at(z);let A=h??b+1;n.rapid(N[0],N[1],A),n.rapid(x,L,A);let k=Math.max(b,f?f(x,L):b)+1;A>k&&n.rapid(x,L,k),n.feed(x,L,w,i.plunge)}Wr(n,O,z,z+O.length,()=>w,i.feed),S=O,V=z}}b=w}n.retract()}function tf(n,t,e,i,r,o,l){let h=mi(yn(Fe(t,-e),.001),.005);for(let f of h){let d=new qi(f),[g,v]=d.at(0);n.goTo(g,v,r);for(let _ of Yr(r,o,l))n.feed(g,v,_,i.plunge),Wr(n,d,0,d.length,()=>_,i.feed*.9);n.retract()}}function Pg(n,t,e,i,r,o,l,h){let f=e?Fe(e,-(i-.05)):null,d=e?Fe(e,-(i+.05)):null,g=v=>!e||ea(v,f)&&!ea(v,d);for(let v of mi(yn(Fe(t,-i),.001),.005)){let _=new qi(v),b=Math.max(8,Math.ceil(_.length/.5)),w=Array.from({length:b},(x,L)=>g(_.at(L/b*_.length)));if(!w.some(Boolean))continue;let T=w.every(Boolean),S=T?0:w.indexOf(!1);for(let x=0;x<b;x++){let L=(S+x)%b;if(!w[L]||!T&&w[(L-1+b)%b])continue;let V=L;for(;V-L<b-1&&w[(V+1)%b];)V++;let C=L/b*_.length,N=T?C+_.length:(V+1)/b*_.length,[O,z]=_.at(C);if(n.goTo(O,z,Math.max(o,h(O,z))),n.feed(O,z,l,r.plunge),Wr(n,_,C,N,()=>l,r.feed*.9),n.retract(),T)break}}}function Ig(n,t,e,i,r,o,l){let h=yn(pi(t,Fe(Fe(t,-i),i)),.01);if(!h.length)return;let f=Fe(h,e+.5);for(let d of mi(yn(Fe(t,-e),.001),.005)){let g=new qi(d),v=Math.max(8,Math.ceil(g.length/.25)),_=Array.from({length:v},(w,T)=>f.some(S=>Hs(g.at(T/v*g.length),S)));if(_.every(Boolean)){tf(n,t,e,r,o,l,r.stepdown);return}let b=_.indexOf(!1);for(let w=0;w<v;w++){let T=(b+w)%v;if(!_[T]||_[(T-1+v)%v])continue;let S=T;for(;_[(S+1)%v]&&S-T<v;)S++;let x=T/v*g.length,L=(S+1)/v*g.length,[V,C]=g.at(x);n.goTo(V,C,o);let N=!0;for(let O of Yr(o,l,r.stepdown)){let z=[...g.breaks(x,L),L],A=N?z:[...z.slice(0,-1).reverse(),x],[k,G]=g.at(N?x:L);n.feed(k,G,O,r.plunge);for(let $ of A){let[J,j]=g.at($);n.feed(J,j,O,r.feed)}N=!N}n.retract()}}}function Rg(n,t,e,i,r,o){let l=Math.min(i.stepover,e*1.6),h=t.minX-e-2,f=t.maxX+e+2;for(let d of Yr(r,o,i.stepdown)){let g=t.minY+e*.6;n.goTo(h,g,r),n.feed(h,g,d,i.plunge);let v=1;for(;n.feed(v>0?f:h,g,d,i.feed),!(g>=t.maxY-e*.6-1e-6);)g=Math.min(g+l,t.maxY-e*.6),n.feed(v>0?f:h,g,d,i.feed),v=-v}n.retract()}function Lg(n,t,e,i,r,o){let l=Math.max(.5,o*1.5);for(let h of t){n.goTo(h.x,h.y,i);let f=i;for(;f>r+1e-6;){let d=Math.max(r,f-l);f<i&&n.rapid(h.x,h.y,f+.5),n.feed(h.x,h.y,d,e.plunge),n.rapid(h.x,h.y,i+1),f=d}n.retract()}}function Ng(n,t,e,i){let r=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!r)return null;let o=t.tabs.length??Yi(t.material).length,l=2*e+o,h=Array.from({length:r},(d,g)=>{let v=(g+.5)/r*n;return[v-l/2,v+l/2]}),f=n;return{top:i+(t.tabs.height??Yi(t.material).height),inside:d=>{let g=(d%f+f)%f;return h.some(([v,_])=>g>v&&g<_)},edges:(d,g)=>{let v=[];for(let _=Math.floor(d/f);_*f<=g;_++)for(let[b,w]of h)for(let T of[b,w]){let S=_*f+T;S>d&&S<g&&v.push(S)}return v}}}function Dg(n,t,e,i,r,o,l,h){let f=[{off:e+h,fd:i}];h>0&&f.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let d of f)for(let g of Qn(t).map(v=>v[0])){let v=mi(yn(Fe([g],d.off),.001),.005).filter(_=>Yn(_)>0);for(let _ of v){let b=new qi(_.slice().reverse()),w=Ng(b.length,l,e,0),[T,S]=b.at(0);n.goTo(T,S,r),n.feed(T,S,r,i.plunge);let x=0,L=r,V=d.finish?Yr(r,o,Math.max(i.stepdown,Math.min(6*e,r-o))):Yr(r,o,i.stepdown);for(let C of V)x=Qu(n,b,x,L,C,d.fd,w),L=C;n.retract()}}}function Og(n,t,e){let i=t.diameter/2,r=n.cell,o=t.kind==="ball",l=r*Math.SQRT1_2,h=Math.ceil((i+l)/r),f=C=>o?i-Math.sqrt(Math.max(0,i*i-C*C)):0,d=[];for(let C=-h;C<=h;C++)for(let N=-h;N<=h;N++){let O=Math.max(0,Math.hypot(N,C)*r-l);O<=i+1e-9&&d.push(N,C,f(O))}let{nx:g,ny:v,h:_,x0:b,y0:w}=n,T={r:i,c:r,n:h,zFloor:e,x:C=>b+C*r,y:C=>w+C*r};T.drop=(C,N)=>{let O=-1/0;for(let z=0;z<d.length;z+=3){let A=C+d[z],k=N+d[z+1];if(A<0||k<0||A>=g||k>=v)continue;let G=_[k*g+A]-d[z+2];G>O&&(O=G)}return O===-1/0?null:Math.max(O,e)},T.dropAt=(C,N)=>{let O=(C-b)/r,z=(N-w)/r,A=(i+l)/r,k=-1/0;for(let G=Math.max(0,Math.ceil(z-A));G<=Math.min(v-1,Math.floor(z+A));G++)for(let $=Math.max(0,Math.ceil(O-A));$<=Math.min(g-1,Math.floor(O+A));$++){let J=Math.max(0,Math.hypot($-O,G-z)*r-l);if(J>i)continue;let j=_[G*g+$]-f(J);j>k&&(k=j)}return k===-1/0?null:Math.max(k,e)},T.underAt=(C,N)=>{let O=(C-b)/r,z=(N-w)/r,A=(i+l)/r,k=e;for(let G=Math.max(0,Math.ceil(z-A));G<=Math.min(v-1,Math.floor(z+A));G++)for(let $=Math.max(0,Math.ceil(O-A));$<=Math.min(g-1,Math.floor(O+A));$++)_[G*g+$]>k&&(k=_[G*g+$]);return k};let S=1/0,x=-1,L=1/0,V=-1;for(let C=0;C<v;C++)for(let N=0;N<g;N++)_[C*g+N]!==-1/0&&(N<S&&(S=N),N>x&&(x=N),C<L&&(L=C),C>V&&(V=C));return T.box=x<0?null:{i0:Math.max(0,S-h),i1:Math.min(g-1,x+h),j0:Math.max(0,L-h),j1:Math.min(v-1,V+h)},T}function ef(n,t,e,i,r,o){let l=e[0],h=n.at;if(h&&!h.r&&Math.hypot(l.x-h.x,l.y-h.y)<=r){let d=Math.max(1,Math.ceil(Math.hypot(l.x-h.x,l.y-h.y)/(t.c/2))),g=Math.max(h.z,l.z);for(let v=1;v<d;v++){let _=v/d,b=t.dropAt(h.x+(l.x-h.x)*_,h.y+(l.y-h.y)*_)??t.zFloor;b>h.z+(l.z-h.z)*_+.001&&(g=Math.max(g,b))}g>Math.max(h.z,l.z)+1e-6&&(n.feed(h.x,h.y,g+.5,i.feed),n.feed(l.x,l.y,g+.5,i.feed)),n.feed(l.x,l.y,l.z,i.plunge)}else n.goTo(l.x,l.y,t.underAt(l.x,l.y)+o),n.feed(l.x,l.y,l.z,i.plunge);let f=l;for(let d of e.slice(1))n.feed(d.x,d.y,d.z,f.z-d.z>Math.hypot(d.x-f.x,d.y-f.y)?i.plunge:i.feed),f=d}function Ug(n,t,e,i,r,o,l,h=!0){let f=Og(t,e,o);if(!f.box)return;let{r:d,c:g}=f,{i0:v,i1:_,j0:b,j1:w}=f.box,T=e.kind==="ball"?2*Math.sqrt(Math.max(0,2*d*r-r*r)):i.stepover*.5,S=Math.max(1,Math.floor(Math.min(T,d)/g+1e-9)),x=3*S*g+1e-6,L=[];for(let V=b;V<=w;V+=S)L.push(V);L[L.length-1]!==w&&L.push(w),L.forEach((V,C)=>{let N=[],O=[];for(let z=v;z<=_;z++){let A=f.drop(z,V);if(A===null){O.length&&N.push(O),O=[];continue}O.push({x:f.x(z),y:f.y(V),z:A})}O.length&&N.push(O),C%2&&(N.reverse(),N.forEach(z=>z.reverse()));for(let z of N)ef(n,f,nf(z,.005),i,x,l)}),h&&Bg(n,f,i,Math.min(T,d),x,l),n.retract()}function Bg(n,t,e,i,r,o){let{i0:h,i1:f,j0:d,j1:g}=t.box,v=Math.floor((f-h)/2)+1,_=Math.floor((g-d)/2)+1,b=new Float32Array(v*_),w=-1/0;for(let C=0;C<_;C++)for(let N=0;N<v;N++){let O=t.drop(h+N*2,d+C*2);b[C*v+N]=O===null?NaN:O,O!==null&&O>w&&(w=O)}let T=2*t.c,S=Fg*T,x=C=>t.x(h+C*2),L=C=>t.y(d+C*2),V=new Uint8Array(v*_);for(let C=0;C+1<_;C++)for(let N=0;N+1<v;N++){let O=b[C*v+N],z=b[C*v+N+1],A=b[(C+1)*v+N],k=b[(C+1)*v+N+1];[O,z,A,k].some(Number.isNaN)||(Math.abs(O-z)>S||Math.abs(A-k)>S||Math.abs(O-A)>S||Math.abs(z-k)>S)&&(V[C*v+N]=1)}for(let C=w-i/2;C>t.zFloor+.05;C-=i){let N=new Map,O=[],z=($,J,j)=>{let Z=j?`h${$},${J}`:`v${$},${J}`;if(!N.has(Z)){let K=b[J*v+$],lt=j?b[J*v+$+1]:b[(J+1)*v+$],dt=(C-K)/(lt-K);N.set(Z,{key:Z,x:j?x($)+dt*T:x($),y:j?L(J):L(J)+dt*T,segs:[]})}return N.get(Z)};for(let $=0;$+1<_;$++)for(let J=0;J+1<v;J++){if(!V[$*v+J])continue;let j=b[$*v+J]>C,Z=b[$*v+J+1]>C,K=b[($+1)*v+J]>C,lt=b[($+1)*v+J+1]>C,dt=[];j!==Z&&dt.push(z(J,$,!0)),Z!==lt&&dt.push(z(J+1,$,!1)),K!==lt&&dt.push(z(J,$+1,!0)),j!==K&&dt.push(z(J,$,!1));for(let bt=0;bt+1<dt.length;bt+=2){let yt=[dt[bt],dt[bt+1]];O.push(yt),yt[0].segs.push(yt),yt[1].segs.push(yt)}}let A=new Set,k=[];for(let $ of O){if(A.has($))continue;A.add($);let J=[$[0],$[1]];for(let j of[!1,!0])for(;;){let Z=j?J[0]:J[J.length-1],K=Z.segs.find(dt=>!A.has(dt));if(!K)break;A.add(K);let lt=K[0]===Z?K[1]:K[0];j?J.unshift(lt):J.push(lt)}J.length>=3&&k.push(J)}let G=n.at;for(;k.length;){let $=0,J=1/0,j=!1;k.forEach((lt,dt)=>{for(let[bt,yt]of[[lt[0],!1],[lt[lt.length-1],!0]]){let wt=G?Math.hypot(bt.x-G.x,bt.y-G.y):0;wt<J&&(J=wt,$=dt,j=yt)}});let[Z]=k.splice($,1);j&&Z.reverse();let K=Z.map(lt=>({x:lt.x,y:lt.y,z:Math.max(C,t.dropAt(lt.x,lt.y)??C)}));ef(n,t,nf(K,.005),e,r,o),G=n.at}}}function nf(n,t){if(n.length<3)return n;let e=new Uint8Array(n.length);e[0]=e[n.length-1]=1;let i=[[0,n.length-1]];for(;i.length;){let[r,o]=i.pop(),l=n[r],h=n[o],f=h.x-l.x,d=h.y-l.y,g=h.z-l.z,v=f*f+d*d+g*g,_=-1,b=t;for(let w=r+1;w<o;w++){let T=n[w],S=v>0?((T.x-l.x)*f+(T.y-l.y)*d+(T.z-l.z)*g)/v:0,x=Math.hypot(l.x+f*S-T.x,l.y+d*S-T.y,l.z+g*S-T.z);x>b&&(b=x,_=w)}_>=0&&(e[_]=1,i.push([r,_],[_,o]))}return n.filter((r,o)=>e[o])}function Bc(n,t){let e=l=>{let h=Xi([l[0]]);return[(h.minX+h.maxX)/2,(h.minY+h.maxY)/2]},i=n.map(l=>({a:l,m:e(l)})),r=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let l=0;for(let f=1;f<i.length;f++)Math.hypot(i[f].m[0]-o[0],i[f].m[1]-o[1])<Math.hypot(i[l].m[0]-o[0],i[l].m[1]-o[1])&&(l=f);let[h]=i.splice(l,1);r.push(h.a),o=h.m}return r}function kg(n,t,e,i,r,o){let l=[...new Set(n.map(f=>f.z))].sort((f,d)=>d-f),h=o;for(let f of l){if(f<t-1e-6||!n.some(g=>Math.abs(g.z-f)>1e-6?!1:(g.inner||=new Map,g.inner.has(e)||g.inner.set(e,Fe(g.area,-e-Eg)),ea([i,r],g.inner.get(e)))))break;h=f}return Math.max(h,t)}function rf(n){let t=n.stock.top+bg,e=[],i=($n[n.job.finish]||$n.balanced).allowance,o=n.ops.some(l=>l.kind==="face"&&l.enabled)?n.analysis.top:n.stock.top;for(let l of n.ops){let h=new kc(t),f=l.kind!=="face"&&l.zTop>=n.analysis.top-1e-6?Math.max(l.zTop,o):l.zTop,d=l.tool.diameter/2,g=l.feeds,v=Math.min(l.tool.fluteLength||1/0,3*l.tool.diameter);switch(l.kind){case"face":Rg(h,n.stock,d,g,f,l.zBottom);break;case"pocket":case"step":case"hole":for(let _ of Bc(Qn(l.region),h.at))Uc(h,_,d,g,f,l.zBottom,i),i>0&&tf(h,_,d,g,f,l.zBottom,v);break;case"corners":{let _=n.ops.find(b=>b.id===l.after);Ig(h,l.region,d,_?_.tool.diameter/2:d*2,g,f,l.zBottom);break}case"rough3d":case"rest3d":{let _=l.kind==="rough3d"?l.allowance:0,b=w=>(T,S)=>kg(e,l.layers[w].zFrom,d,T,S,f);l.layers.forEach((w,T)=>{let S=w.zFrom>=n.analysis.top-1e-6?f:w.zFrom;for(let L of Bc(Qn(w.region),h.at))Uc(h,L,d,g,S,w.z,_,f+1,b(T));for(let L of Bc(Qn(w.fresh||[]),h.at))Uc(h,L,d,g,f,w.z,_,f+1);_>0&&Pg(h,w.region,T?l.layers[T-1].region:null,d,g,S,w.z,b(T));let x=Fe(Fe([...w.region,...w.fresh||[]],-(d+_)),d);x.length&&e.push({zFrom:S,z:w.z,area:x})});break}case"finish3d":Ug(h,l.surface,l.tool,g,l.ridge,0,wg,l.steep!==!1);break;case"drill":Lg(h,l.centers,g,f,l.zBottom,l.tool.diameter);break;case"cutout":Dg(h,l.region,d,g,f,l.zBottom,n.job,i);break}l.moves=h.moves}return n}var bg,wg,Eg,kc,qi,Fg,sf=vn(()=>{Gs();Ys();bg=3,wg=3.5,Eg=.5;kc=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,r){this.push({x:t,y:e,z:i,f:r})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ),this.rapid(t,e,this.clearZ),this.rapid(t,e,i+1)}retract(){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ)}},qi=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],r=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(r[0]-i[0],r[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,r=1;for(;r<this.s.length-1&&this.s[r]<i;)r++;let o=this.p[r-1],l=this.p[r%this.p.length],h=this.s[r]-this.s[r-1]||1,f=(i-this.s[r-1])/h;return[o[0]+(l[0]-o[0])*f,o[1]+(l[1]-o[1])*f]}breaks(t,e){let i=[],r=this.length;for(let o=Math.floor(t/r);o*r<=e;o++)for(let l=0;l<this.p.length;l++){let h=o*r+this.s[l];h>t+1e-9&&h<e-1e-9&&i.push(h)}return i}nearest([t,e]){let i=0,r=1/0;for(let o=0;o<this.p.length;o++){let l=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;l<r&&(r=l,i=this.s[o])}return i}};Fg=Math.tan(50*Math.PI/180)});function of(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:r=null,spindleDelay:o=3}=t,l=Number.isFinite(r)?`G53 G0 Z${Zi(r)}`:"G53 G0 Z0",h=n.zero,f=n.stock,d=[$r(`ncCAM: ${e}`),$r(`Stock ${Zi(f.width)} x ${Zi(f.depth)} x ${Zi(f.thickness)} mm, ${(yr[n.job.material]||{}).name||n.job.material}, ${($n[n.job.finish]||{}).name||n.job.finish}`),$r(`Zero: X Y at the ${Vg[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],g=n.ops.filter(T=>T.enabled&&T.moves&&T.moves.length);for(let T of[...new Map(g.map(S=>[S.tool.id,S.tool])).values()])d.push($r(`T${xr(T,i)}: ${T.name}, ${Zi(T.diameter)} mm`));d.push("G21 G90 G94 G17");let v=null,_={},b=null,w=null;for(let T of g){(!v||T.tool.id!==v.id)&&(v&&d.push("M5"),d.push(l,`M6 T${xr(T.tool,i)}`,$r(T.tool.name)),v=T.tool,d.push(`M3 S${T.feeds.rpm}`),o>0&&d.push(`G4 P${o}`),_={},b=null,w=null),d.push($r(`${T.label}${T.detail?": "+T.detail:""}`));for(let S of T.moves){let x=Zi(S.x-h.x),L=Zi(S.y-h.y),V=Zi(S.z-h.z);if(S.r&&(x!==_.x||L!==_.y)&&V!==_.z){let z=_.z===void 0||+V<+_.z?[`X${x} Y${L}`,`Z${V}`]:[`Z${V}`,`X${x} Y${L}`];for(let A of z)d.push(`${w==="G0"?"":"G0 "}${A}`),w="G0";_={x,y:L,z:V};continue}let C=S.r?"G0":"G1",N=C===w?"":C;x!==_.x&&(N+=` X${x}`),L!==_.y&&(N+=` Y${L}`),V!==_.z&&(N+=` Z${V}`),!S.r&&S.f!==b&&(N+=` F${Math.round(S.f)}`,b=S.f),N=N.trim(),!(!N||N===C)&&(d.push(N),w=C,_={x,y:L,z:V})}}return d.push("M5",l,"M30",""),d.join(`
`)}function af(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let r=0,o=null,l=null;for(let h of n.ops){if(!h.enabled||!h.moves)continue;(!l||h.tool.id!==l.id)&&(r+=e+(l?i:0),l=h.tool);let f=0;for(let d of h.moves){if(o){let g=Math.hypot(d.x-o.x,d.y-o.y,d.z-o.z);f+=g/(d.r?t:d.f)*60}o=d}h.seconds=f,r+=f}return r}var Zi,zg,$r,Vg,lf=vn(()=>{Ys();Zi=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},zg={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},$r=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>zg[t]??"")})`,Vg={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});var zc=vn(()=>{Ac();Vu();Ku();sf();lf();Ic();Ys();Rc();Gs()});function Gg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Xg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Md(){let n=oo("canvas");return n.style.display="block",n}function ao(...n){let t="THREE."+n.shift();ms?ms("log",t,...n):console.log(t,...n)}function Sd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function de(...n){n=Sd(n);let t="THREE."+n.shift();if(ms)ms("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function _e(...n){n=Sd(n);let t="THREE."+n.shift();if(ms)ms("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Er(...n){let t=n.join(" ");t in uf||(uf[t]=!0,de(...n))}function bd(n,t,e){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Fi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Ae(n,t,e){return Math.max(t,Math.min(e,n))}function Wh(n,t){return(n%t+t)%t}function Wg(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Yg(n,t,e){return n!==t?(e-n)/(t-n):0}function no(n,t,e){return(1-e)*n+e*t}function $g(n,t,e,i){return no(n,t,1-Math.exp(-e*i))}function qg(n,t=1){return t-Math.abs(Wh(n,t*2)-t)}function Zg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Jg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function jg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Kg(n,t){return n+Math.random()*(t-n)}function Qg(n){return n*(.5-Math.random())}function t0(n){n!==void 0&&(ff=n);let t=ff+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function e0(n){return n*us}function n0(n){return n*gs}function i0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function r0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function s0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function o0(n,t,e,i,r){let o=Math.cos,l=Math.sin,h=o(e/2),f=l(e/2),d=o((t+i)/2),g=l((t+i)/2),v=o((t-i)/2),_=l((t-i)/2),b=o((i-t)/2),w=l((i-t)/2);switch(r){case"XYX":n.set(h*g,f*v,f*_,h*d);break;case"YZY":n.set(f*_,h*g,f*v,h*d);break;case"ZXZ":n.set(f*v,f*_,h*g,h*d);break;case"XZX":n.set(h*g,f*w,f*b,h*d);break;case"YXY":n.set(f*b,h*g,f*w,h*d);break;case"ZYZ":n.set(f*w,f*b,h*g,h*d);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ii(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function a0(){let n={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Ve&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ve&&(r.r=fs(r.r),r.g=fs(r.g),r.b=fs(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ki?so:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ro]:{primaries:t,whitePoint:i,transfer:so,toXYZ:pf,fromXYZ:mf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:i,transfer:Ve,toXYZ:pf,fromXYZ:mf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),n}function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Xc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ha.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}function $c(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function eh(n,t,e,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){Sr.fromArray(n,o);let h=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),f=t.dot(Sr),d=e.dot(Sr),g=i.dot(Sr);if(Math.max(-Math.max(f,d,g),Math.min(f,d,g))>h)return!1}return!0}function ua(n,t,e,i,r,o){as.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Qs.x=o*as.x-r*as.y,Qs.y=r*as.x+o*as.y):Qs.copy(as),n.copy(t),n.x+=Qs.x,n.y+=Qs.y,n.applyMatrix4(Td)}function b0(n,t,e,i,r,o,l,h){let f;if(t.side===Pn?f=i.intersectTriangle(l,o,r,!0,h):f=i.intersectTriangle(r,o,l,t.side===ur,h),f===null)return null;ya.copy(h),ya.applyMatrix4(n.matrixWorld);let d=e.ray.origin.distanceTo(ya);return d<e.near||d>e.far?null:{distance:d,point:ya.clone(),object:n}}function xa(n,t,e,i,r,o,l,h,f,d){n.getVertexPosition(h,ma),n.getVertexPosition(f,ga),n.getVertexPosition(d,_a);let g=b0(n,t,e,i,ma,ga,_a,Cf);if(g){let v=new ct;_i.getBarycoord(Cf,ma,ga,_a,v),r&&(g.uv=_i.getInterpolatedAttribute(r,h,f,d,v,new ce)),o&&(g.uv1=_i.getInterpolatedAttribute(o,h,f,d,v,new ce)),l&&(g.normal=_i.getInterpolatedAttribute(l,h,f,d,v,new ct),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));let _={a:h,b:f,c:d,normal:new ct,materialIndex:0};_i.getNormal(ma,ga,_a,_.normal),g.face=_,g.barycoord=v}return g}function ba(n,t,e,i,r,o,l){let h=n.geometry.attributes.position;if($a.fromBufferAttribute(h,r),qa.fromBufferAttribute(h,o),e.distanceSqToSegment($a,qa,lh,If)>i)return;lh.applyMatrix4(n.matrixWorld);let d=t.ray.origin.distanceTo(lh);if(!(d<t.near||d>t.far))return{distance:d,point:If.clone().applyMatrix4(n.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:n}}function Lr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];if(Nf(r))r.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Nf(r[0])){let o=[];for(let l=0,h=r.length;l<h;l++)o[l]=r[l].clone();t[e][i]=o}else t[e][i]=r.slice();else t[e][i]=r}}return t}function wn(n){let t={};for(let e=0;e<n.length;e++){let i=Lr(n[e]);for(let r in i)t[r]=i[r]}return t}function Nf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function E0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $h(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}function ls(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function hh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Cd(n,t,e,i,r){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*r}function C0(n,t,e,i,r){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(r-i)}function P0(n,t,e,i,r){let o=(n-t)/(r-t);for(let l=0;l<8;l++){let h=Cd(o,t,e,i,r)-n;if(Math.abs(h)<1e-10)break;let f=C0(o,t,e,i,r);if(Math.abs(f)<1e-10)break;o=Math.max(0,Math.min(1,o-h/f))}return o}function Df(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function zf(n,t){return n.distance-t.distance}function yh(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let o=n.children;for(let l=0,h=o.length;l<h;l++)yh(o[l],t,e,!0)}}function Jh(n,t,e,i){let r=B0(i);switch(e){case zh:return n*t;case Hh:return n*t/r.components*r.byteLength;case vl:return n*t/r.components*r.byteLength;case mr:return n*t*2/r.components*r.byteLength;case yl:return n*t*2/r.components*r.byteLength;case Vh:return n*t*3/r.components*r.byteLength;case Jn:return n*t*4/r.components*r.byteLength;case xl:return n*t*4/r.components*r.byteLength;case Ro:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case No:case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sl:case wl:return Math.max(n,16)*Math.max(t,8)/4;case Ml:case bl:return Math.max(n,8)*Math.max(t,8)/2;case El:case Tl:case Cl:case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Al:case Oo:case Il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Wl:case Yl:case $l:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ql:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fo:case Jl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B0(n){switch(n){case Nn:case Fh:return{byteLength:1,components:1};case Ps:case Uh:case hi:return{byteLength:2,components:1};case gl:case _l:return{byteLength:2,components:4};case li:case ml:case ci:return{byteLength:4,components:1};case Bh:case kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var cr,hr,Hf,Mh,Gf,Co,Xf,As,ur,Pn,bn,Si,Cs,Sh,bh,wh,Wf,Pr,Yf,$f,qf,Zf,Jf,jf,Kf,Qf,Eh,Th,td,ed,nd,id,rd,sd,od,ad,ld,La,Na,Da,ds,Oa,Fa,Ua,Ba,Ah,cd,hd,ai,Ch,Ph,Ih,Rh,Lh,Nh,Dh,Oh,fr,Ir,fl,dl,Po,ka,vi,za,dn,ud,Io,mn,pl,dr,Nn,Fh,Uh,Ps,ml,li,ci,hi,gl,_l,Is,Bh,kh,zh,Vh,Jn,yi,pr,Hh,vl,mr,yl,xl,Ro,Lo,No,Do,Ml,Sl,bl,wl,El,Tl,Al,Cl,Pl,Oo,Il,Rl,Ll,Nl,Dl,Ol,Fl,Ul,Bl,kl,zl,Vl,Hl,Gl,Xl,Wl,Yl,$l,ql,Zl,Fo,Jl,io,Va,Ia,dh,ph,mh,gh,fd,jl,dd,ki,An,ro,so,Ve,Ra,pd,md,gd,_d,Kl,vd,yd,Ql,xd,Gh,Rr,Xh,ri,ps,uf,ms,wd,si,xn,ff,us,gs,Yh,ce,kn,ct,Hc,df,be,Gc,pf,mf,Le,qr,Ha,l0,_s,c0,Wc,Cn,Ke,Ga,Ln,lo,Xa,Xe,Zr,ti,h0,u0,Ji,na,Fn,gf,_f,Bi,vs,f0,vf,Jr,Ri,ia,qs,d0,p0,yf,xf,Mf,Sf,m0,jr,Yc,an,Zn,g0,ys,Ed,ji,ra,Me,Mn,co,ei,Li,qc,Ni,Kr,Qr,bf,Zc,Jc,jc,Kc,Qc,th,_i,er,Di,ni,sa,ts,es,ns,Ki,Qi,Mr,Zs,oa,aa,Sr,nn,la,_0,Ye,ho,uo,$e,v0,Js,nh,Tr,y0,qn,ih,is,Un,js,fn,je,Wa,Tn,fo,rh,x0,M0,Bn,S0,xi,xs,rs,Ks,ss,os,as,Qs,Td,ca,to,ha,wf,sh,Ef,po,Oi,oh,fa,da,nr,zn,Tf,br,pa,Af,ma,ga,_a,ah,va,Cf,ya,Ue,Ya,wr,w0,Ma,Ms,oi,$a,qa,Pf,eo,Sa,lh,If,Ar,Rf,Lf,Cr,mo,go,ir,Za,_o,rr,Mi,Ss,wa,Ea,ch,Ta,bs,vo,yo,sr,Ad,T0,A0,Vn,Ja,Hn,ja,Ka,xo,or,Qa,tl,el,nl,Gn,ar,il,rl,sl,Mo,lr,ol,al,Pd,ll,So,bo,uh,Of,Ff,cl,Aa,Ca,gi,wo,tr,Uf,Bf,Sn,ws,_h,Es,cs,hs,hl,ul,qh,I0,Zh,R0,L0,N0,D0,O0,F0,U0,vh,Je,TS,kf,Eo,Ts,xh,Vf,Pa,fh,To,Ao,jh=vn(()=>{cr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hf=0,Mh=1,Gf=2,Co=1,Xf=2,As=3,ur=0,Pn=1,bn=2,Si=0,Cs=1,Sh=2,bh=3,wh=4,Wf=5,Pr=100,Yf=101,$f=102,qf=103,Zf=104,Jf=200,jf=201,Kf=202,Qf=203,Eh=204,Th=205,td=206,ed=207,nd=208,id=209,rd=210,sd=211,od=212,ad=213,ld=214,La=0,Na=1,Da=2,ds=3,Oa=4,Fa=5,Ua=6,Ba=7,Ah=0,cd=1,hd=2,ai=0,Ch=1,Ph=2,Ih=3,Rh=4,Lh=5,Nh=6,Dh=7,Oh=300,fr=301,Ir=302,fl=303,dl=304,Po=306,ka=1e3,vi=1001,za=1002,dn=1003,ud=1004,Io=1005,mn=1006,pl=1007,dr=1008,Nn=1009,Fh=1010,Uh=1011,Ps=1012,ml=1013,li=1014,ci=1015,hi=1016,gl=1017,_l=1018,Is=1020,Bh=35902,kh=35899,zh=1021,Vh=1022,Jn=1023,yi=1026,pr=1027,Hh=1028,vl=1029,mr=1030,yl=1031,xl=1033,Ro=33776,Lo=33777,No=33778,Do=33779,Ml=35840,Sl=35841,bl=35842,wl=35843,El=36196,Tl=37492,Al=37496,Cl=37488,Pl=37489,Oo=37490,Il=37491,Rl=37808,Ll=37809,Nl=37810,Dl=37811,Ol=37812,Fl=37813,Ul=37814,Bl=37815,kl=37816,zl=37817,Vl=37818,Hl=37819,Gl=37820,Xl=37821,Wl=36492,Yl=36494,$l=36495,ql=36283,Zl=36284,Fo=36285,Jl=36286,io=2300,Va=2301,Ia=2302,dh=2303,ph=2400,mh=2401,gh=2402,fd=3200,jl=0,dd=1,ki="",An="srgb",ro="srgb-linear",so="linear",Ve="srgb",Ra=7680,pd=519,md=512,gd=513,_d=514,Kl=515,vd=516,yd=517,Ql=518,xd=519,Gh=35044,Rr=35048,Xh="300 es",ri=2e3,ps=2001;uf={},ms=null;wd={[La]:Na,[Da]:Ua,[Oa]:Ba,[ds]:Fa,[Na]:La,[Ua]:Da,[Ba]:Oa,[Fa]:ds},si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ff=1234567,us=Math.PI/180,gs=180/Math.PI;Yh={DEG2RAD:us,RAD2DEG:gs,generateUUID:Fi,clamp:Ae,euclideanModulo:Wh,mapLinear:Wg,inverseLerp:Yg,lerp:no,damp:$g,pingpong:qg,smoothstep:Zg,smootherstep:Jg,randInt:jg,randFloat:Kg,randFloatSpread:Qg,seededRandom:t0,degToRad:e0,radToDeg:n0,isPowerOfTwo:i0,ceilPowerOfTwo:r0,floorPowerOfTwo:s0,setQuaternionFromProperEuler:o0,normalize:Ge,denormalize:ii},ce=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*i-l*r+t.x,this.y=o*r+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kn=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,o,l,h){let f=i[r+0],d=i[r+1],g=i[r+2],v=i[r+3],_=o[l+0],b=o[l+1],w=o[l+2],T=o[l+3];if(v!==T||f!==_||d!==b||g!==w){let S=f*_+d*b+g*w+v*T;S<0&&(_=-_,b=-b,w=-w,T=-T,S=-S);let x=1-h;if(S<.9995){let L=Math.acos(S),V=Math.sin(L);x=Math.sin(x*L)/V,h=Math.sin(h*L)/V,f=f*x+_*h,d=d*x+b*h,g=g*x+w*h,v=v*x+T*h}else{f=f*x+_*h,d=d*x+b*h,g=g*x+w*h,v=v*x+T*h;let L=1/Math.sqrt(f*f+d*d+g*g+v*v);f*=L,d*=L,g*=L,v*=L}}t[e]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,r,o,l){let h=i[r],f=i[r+1],d=i[r+2],g=i[r+3],v=o[l],_=o[l+1],b=o[l+2],w=o[l+3];return t[e]=h*w+g*v+f*b-d*_,t[e+1]=f*w+g*_+d*v-h*b,t[e+2]=d*w+g*b+h*_-f*v,t[e+3]=g*w-h*v-f*_-d*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,o=t._z,l=t._order,h=Math.cos,f=Math.sin,d=h(i/2),g=h(r/2),v=h(o/2),_=f(i/2),b=f(r/2),w=f(o/2);switch(l){case"XYZ":this._x=_*g*v+d*b*w,this._y=d*b*v-_*g*w,this._z=d*g*w+_*b*v,this._w=d*g*v-_*b*w;break;case"YXZ":this._x=_*g*v+d*b*w,this._y=d*b*v-_*g*w,this._z=d*g*w-_*b*v,this._w=d*g*v+_*b*w;break;case"ZXY":this._x=_*g*v-d*b*w,this._y=d*b*v+_*g*w,this._z=d*g*w+_*b*v,this._w=d*g*v-_*b*w;break;case"ZYX":this._x=_*g*v-d*b*w,this._y=d*b*v+_*g*w,this._z=d*g*w-_*b*v,this._w=d*g*v+_*b*w;break;case"YZX":this._x=_*g*v+d*b*w,this._y=d*b*v+_*g*w,this._z=d*g*w-_*b*v,this._w=d*g*v-_*b*w;break;case"XZY":this._x=_*g*v-d*b*w,this._y=d*b*v-_*g*w,this._z=d*g*w+_*b*v,this._w=d*g*v+_*b*w;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],o=e[8],l=e[1],h=e[5],f=e[9],d=e[2],g=e[6],v=e[10],_=i+h+v;if(_>0){let b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(g-f)*b,this._y=(o-d)*b,this._z=(l-r)*b}else if(i>h&&i>v){let b=2*Math.sqrt(1+i-h-v);this._w=(g-f)/b,this._x=.25*b,this._y=(r+l)/b,this._z=(o+d)/b}else if(h>v){let b=2*Math.sqrt(1+h-i-v);this._w=(o-d)/b,this._x=(r+l)/b,this._y=.25*b,this._z=(f+g)/b}else{let b=2*Math.sqrt(1+v-i-h);this._w=(l-r)/b,this._x=(o+d)/b,this._y=(f+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,o=t._z,l=t._w,h=e._x,f=e._y,d=e._z,g=e._w;return this._x=i*g+l*h+r*d-o*f,this._y=r*g+l*f+o*h-i*d,this._z=o*g+l*d+i*f-r*h,this._w=l*g-i*h-r*f-o*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,o=t._z,l=t._w,h=this.dot(t);h<0&&(i=-i,r=-r,o=-o,l=-l,h=-h);let f=1-e;if(h<.9995){let d=Math.acos(h),g=Math.sin(d);f=Math.sin(f*d)/g,e=Math.sin(e*d)/g,this._x=this._x*f+i*e,this._y=this._y*f+r*e,this._z=this._z*f+o*e,this._w=this._w*f+l*e,this._onChangeCallback()}else this._x=this._x*f+i*e,this._y=this._y*f+r*e,this._z=this._z*f+o*e,this._w=this._w*f+l*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ct=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(df.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(df.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*r,this.y=o[1]*e+o[4]*i+o[7]*r,this.z=o[2]*e+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=t.elements,l=1/(o[3]*e+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*e+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*e+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,o=t.x,l=t.y,h=t.z,f=t.w,d=2*(l*r-h*i),g=2*(h*e-o*r),v=2*(o*i-l*e);return this.x=e+f*d+l*v-h*g,this.y=i+f*g+h*d-o*v,this.z=r+f*v+o*g-l*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r,this.y=o[1]*e+o[5]*i+o[9]*r,this.z=o[2]*e+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,o=t.z,l=e.x,h=e.y,f=e.z;return this.x=r*f-o*h,this.y=o*l-i*f,this.z=i*h-r*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Hc.copy(this).projectOnVector(t),this.sub(Hc)}reflect(t){return this.sub(Hc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hc=new ct,df=new kn,be=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,r,o,l,h,f,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,h,f,d)}set(t,e,i,r,o,l,h,f,d){let g=this.elements;return g[0]=t,g[1]=r,g[2]=h,g[3]=e,g[4]=o,g[5]=f,g[6]=i,g[7]=l,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,l=i[0],h=i[3],f=i[6],d=i[1],g=i[4],v=i[7],_=i[2],b=i[5],w=i[8],T=r[0],S=r[3],x=r[6],L=r[1],V=r[4],C=r[7],N=r[2],O=r[5],z=r[8];return o[0]=l*T+h*L+f*N,o[3]=l*S+h*V+f*O,o[6]=l*x+h*C+f*z,o[1]=d*T+g*L+v*N,o[4]=d*S+g*V+v*O,o[7]=d*x+g*C+v*z,o[2]=_*T+b*L+w*N,o[5]=_*S+b*V+w*O,o[8]=_*x+b*C+w*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],h=t[5],f=t[6],d=t[7],g=t[8];return e*l*g-e*h*d-i*o*g+i*h*f+r*o*d-r*l*f}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],h=t[5],f=t[6],d=t[7],g=t[8],v=g*l-h*d,_=h*f-g*o,b=d*o-l*f,w=e*v+i*_+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=v*T,t[1]=(r*d-g*i)*T,t[2]=(h*i-r*l)*T,t[3]=_*T,t[4]=(g*e-r*f)*T,t[5]=(r*o-h*e)*T,t[6]=b*T,t[7]=(i*f-d*e)*T,t[8]=(l*e-i*o)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,o,l,h){let f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*l+d*h)+l+t,-r*d,r*f,-r*(-d*l+f*h)+h+e,0,0,1),this}scale(t,e){return Er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gc.makeScale(t,e)),this}rotate(t){return Er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gc.makeRotation(-t)),this}translate(t,e){return Er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gc=new be,pf=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mf=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Le=a0();Ha=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{qr===void 0&&(qr=oo("canvas")),qr.width=t.width,qr.height=t.height;let r=qr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=qr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=oo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Ui(o[l]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ui(e[i]/255)*255):e[i]=Ui(e[i]);return{data:e,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},l0=0,_s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,h=r.length;l<h;l++)r[l].isDataTexture?o.push(Xc(r[l].image)):o.push(Xc(r[l]))}else o=Xc(r);i.url=o}return e||(t.images[this.uuid]=i),i}};c0=0,Wc=new ct,Cn=class n extends si{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=vi,r=vi,o=mn,l=dr,h=Jn,f=Nn,d=n.DEFAULT_ANISOTROPY,g=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Fi(),this.name="",this.source=new _s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=f,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){de(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){de(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ka:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ka:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Oh;Cn.DEFAULT_ANISOTROPY=1;Ke=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*e+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*e+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*e+l[7]*i+l[11]*r+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,o,f=t.elements,d=f[0],g=f[4],v=f[8],_=f[1],b=f[5],w=f[9],T=f[2],S=f[6],x=f[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(w-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(w+S)<.1&&Math.abs(d+b+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let V=(d+1)/2,C=(b+1)/2,N=(x+1)/2,O=(g+_)/4,z=(v+T)/4,A=(w+S)/4;return V>C&&V>N?V<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(V),r=O/i,o=z/i):C>N?C<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(C),i=O/r,o=A/r):N<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(N),i=z/o,r=A/o),this.set(i,r,o,e),this}let L=Math.sqrt((S-w)*(S-w)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(S-w)/L,this.y=(v-T)/L,this.z=(_-g)/L,this.w=Math.acos((d+b+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this.w=Ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this.w=Ae(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ga=class extends si{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},o=new Cn(r),l=i.count;for(let h=0;h<l;h++)this.textures[h]=o.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new _s(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Ga{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},lo=class extends Cn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Xa=class extends Cn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Xe=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,r,o,l,h,f,d,g,v,_,b,w,T,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,h,f,d,g,v,_,b,w,T,S)}set(t,e,i,r,o,l,h,f,d,g,v,_,b,w,T,S){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=r,x[1]=o,x[5]=l,x[9]=h,x[13]=f,x[2]=d,x[6]=g,x[10]=v,x[14]=_,x[3]=b,x[7]=w,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,r=1/Zr.setFromMatrixColumn(t,0).length(),o=1/Zr.setFromMatrixColumn(t,1).length(),l=1/Zr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,o=t.z,l=Math.cos(i),h=Math.sin(i),f=Math.cos(r),d=Math.sin(r),g=Math.cos(o),v=Math.sin(o);if(t.order==="XYZ"){let _=l*g,b=l*v,w=h*g,T=h*v;e[0]=f*g,e[4]=-f*v,e[8]=d,e[1]=b+w*d,e[5]=_-T*d,e[9]=-h*f,e[2]=T-_*d,e[6]=w+b*d,e[10]=l*f}else if(t.order==="YXZ"){let _=f*g,b=f*v,w=d*g,T=d*v;e[0]=_+T*h,e[4]=w*h-b,e[8]=l*d,e[1]=l*v,e[5]=l*g,e[9]=-h,e[2]=b*h-w,e[6]=T+_*h,e[10]=l*f}else if(t.order==="ZXY"){let _=f*g,b=f*v,w=d*g,T=d*v;e[0]=_-T*h,e[4]=-l*v,e[8]=w+b*h,e[1]=b+w*h,e[5]=l*g,e[9]=T-_*h,e[2]=-l*d,e[6]=h,e[10]=l*f}else if(t.order==="ZYX"){let _=l*g,b=l*v,w=h*g,T=h*v;e[0]=f*g,e[4]=w*d-b,e[8]=_*d+T,e[1]=f*v,e[5]=T*d+_,e[9]=b*d-w,e[2]=-d,e[6]=h*f,e[10]=l*f}else if(t.order==="YZX"){let _=l*f,b=l*d,w=h*f,T=h*d;e[0]=f*g,e[4]=T-_*v,e[8]=w*v+b,e[1]=v,e[5]=l*g,e[9]=-h*g,e[2]=-d*g,e[6]=b*v+w,e[10]=_-T*v}else if(t.order==="XZY"){let _=l*f,b=l*d,w=h*f,T=h*d;e[0]=f*g,e[4]=-v,e[8]=d*g,e[1]=_*v+T,e[5]=l*g,e[9]=b*v-w,e[2]=w*v-b,e[6]=h*g,e[10]=T*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(h0,t,u0)}lookAt(t,e,i){let r=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Ji.crossVectors(i,Fn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Ji.crossVectors(i,Fn)),Ji.normalize(),na.crossVectors(Fn,Ji),r[0]=Ji.x,r[4]=na.x,r[8]=Fn.x,r[1]=Ji.y,r[5]=na.y,r[9]=Fn.y,r[2]=Ji.z,r[6]=na.z,r[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,l=i[0],h=i[4],f=i[8],d=i[12],g=i[1],v=i[5],_=i[9],b=i[13],w=i[2],T=i[6],S=i[10],x=i[14],L=i[3],V=i[7],C=i[11],N=i[15],O=r[0],z=r[4],A=r[8],k=r[12],G=r[1],$=r[5],J=r[9],j=r[13],Z=r[2],K=r[6],lt=r[10],dt=r[14],bt=r[3],yt=r[7],wt=r[11],Pt=r[15];return o[0]=l*O+h*G+f*Z+d*bt,o[4]=l*z+h*$+f*K+d*yt,o[8]=l*A+h*J+f*lt+d*wt,o[12]=l*k+h*j+f*dt+d*Pt,o[1]=g*O+v*G+_*Z+b*bt,o[5]=g*z+v*$+_*K+b*yt,o[9]=g*A+v*J+_*lt+b*wt,o[13]=g*k+v*j+_*dt+b*Pt,o[2]=w*O+T*G+S*Z+x*bt,o[6]=w*z+T*$+S*K+x*yt,o[10]=w*A+T*J+S*lt+x*wt,o[14]=w*k+T*j+S*dt+x*Pt,o[3]=L*O+V*G+C*Z+N*bt,o[7]=L*z+V*$+C*K+N*yt,o[11]=L*A+V*J+C*lt+N*wt,o[15]=L*k+V*j+C*dt+N*Pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[12],l=t[1],h=t[5],f=t[9],d=t[13],g=t[2],v=t[6],_=t[10],b=t[14],w=t[3],T=t[7],S=t[11],x=t[15],L=f*b-d*_,V=h*b-d*v,C=h*_-f*v,N=l*b-d*g,O=l*_-f*g,z=l*v-h*g;return e*(T*L-S*V+x*C)-i*(w*L-S*N+x*O)+r*(w*V-T*N+x*z)-o*(w*C-T*O+S*z)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[1],l=t[5],h=t[9],f=t[2],d=t[6],g=t[10];return e*(l*g-h*d)-i*(o*g-h*f)+r*(o*d-l*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],h=t[5],f=t[6],d=t[7],g=t[8],v=t[9],_=t[10],b=t[11],w=t[12],T=t[13],S=t[14],x=t[15],L=e*h-i*l,V=e*f-r*l,C=e*d-o*l,N=i*f-r*h,O=i*d-o*h,z=r*d-o*f,A=g*T-v*w,k=g*S-_*w,G=g*x-b*w,$=v*S-_*T,J=v*x-b*T,j=_*x-b*S,Z=L*j-V*J+C*$+N*G-O*k+z*A;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/Z;return t[0]=(h*j-f*J+d*$)*K,t[1]=(r*J-i*j-o*$)*K,t[2]=(T*z-S*O+x*N)*K,t[3]=(_*O-v*z-b*N)*K,t[4]=(f*G-l*j-d*k)*K,t[5]=(e*j-r*G+o*k)*K,t[6]=(S*C-w*z-x*V)*K,t[7]=(g*z-_*C+b*V)*K,t[8]=(l*J-h*G+d*A)*K,t[9]=(i*G-e*J-o*A)*K,t[10]=(w*O-T*C+x*L)*K,t[11]=(v*C-g*O-b*L)*K,t[12]=(h*k-l*$-f*A)*K,t[13]=(e*$-i*k+r*A)*K,t[14]=(T*V-w*N-S*L)*K,t[15]=(g*N-v*V+_*L)*K,this}scale(t){let e=this.elements,i=t.x,r=t.y,o=t.z;return e[0]*=i,e[4]*=r,e[8]*=o,e[1]*=i,e[5]*=r,e[9]*=o,e[2]*=i,e[6]*=r,e[10]*=o,e[3]*=i,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),o=1-i,l=t.x,h=t.y,f=t.z,d=o*l,g=o*h;return this.set(d*l+i,d*h-r*f,d*f+r*h,0,d*h+r*f,g*h+i,g*f-r*l,0,d*f-r*h,g*f+r*l,o*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,o,l){return this.set(1,i,o,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,o=e._x,l=e._y,h=e._z,f=e._w,d=o+o,g=l+l,v=h+h,_=o*d,b=o*g,w=o*v,T=l*g,S=l*v,x=h*v,L=f*d,V=f*g,C=f*v,N=i.x,O=i.y,z=i.z;return r[0]=(1-(T+x))*N,r[1]=(b+C)*N,r[2]=(w-V)*N,r[3]=0,r[4]=(b-C)*O,r[5]=(1-(_+x))*O,r[6]=(S+L)*O,r[7]=0,r[8]=(w+V)*z,r[9]=(S-L)*z,r[10]=(1-(_+T))*z,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let l=Zr.set(r[0],r[1],r[2]).length(),h=Zr.set(r[4],r[5],r[6]).length(),f=Zr.set(r[8],r[9],r[10]).length();o<0&&(l=-l),ti.copy(this);let d=1/l,g=1/h,v=1/f;return ti.elements[0]*=d,ti.elements[1]*=d,ti.elements[2]*=d,ti.elements[4]*=g,ti.elements[5]*=g,ti.elements[6]*=g,ti.elements[8]*=v,ti.elements[9]*=v,ti.elements[10]*=v,e.setFromRotationMatrix(ti),i.x=l,i.y=h,i.z=f,this}makePerspective(t,e,i,r,o,l,h=ri,f=!1){let d=this.elements,g=2*o/(e-t),v=2*o/(i-r),_=(e+t)/(e-t),b=(i+r)/(i-r),w,T;if(f)w=o/(l-o),T=l*o/(l-o);else if(h===ri)w=-(l+o)/(l-o),T=-2*l*o/(l-o);else if(h===ps)w=-l/(l-o),T=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=b,d[13]=0,d[2]=0,d[6]=0,d[10]=w,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,o,l,h=ri,f=!1){let d=this.elements,g=2/(e-t),v=2/(i-r),_=-(e+t)/(e-t),b=-(i+r)/(i-r),w,T;if(f)w=1/(l-o),T=l/(l-o);else if(h===ri)w=-2/(l-o),T=-(l+o)/(l-o);else if(h===ps)w=-1/(l-o),T=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=b,d[2]=0,d[6]=0,d[10]=w,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Zr=new ct,ti=new Xe,h0=new ct(0,0,0),u0=new ct(1,1,1),Ji=new ct,na=new ct,Fn=new ct,gf=new Xe,_f=new kn,Bi=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,o=r[0],l=r[4],h=r[8],f=r[1],d=r[5],g=r[9],v=r[2],_=r[6],b=r[10];switch(e){case"XYZ":this._y=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,o)):(this._x=Math.atan2(-g,b),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _f.setFromEuler(this),this.setFromQuaternion(_f,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},f0=0,vf=new ct,Jr=new kn,Ri=new Xe,ia=new ct,qs=new ct,d0=new ct,p0=new kn,yf=new ct(1,0,0),xf=new ct(0,1,0),Mf=new ct(0,0,1),Sf={type:"added"},m0={type:"removed"},jr={type:"childadded",child:null},Yc={type:"childremoved",child:null},an=class n extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new ct,e=new Bi,i=new kn,r=new ct(1,1,1);function o(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new be}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jr.setFromAxisAngle(t,e),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,e){return Jr.setFromAxisAngle(t,e),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(yf,t)}rotateY(t){return this.rotateOnAxis(xf,t)}rotateZ(t){return this.rotateOnAxis(Mf,t)}translateOnAxis(t,e){return vf.copy(t).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yf,t)}translateY(t){return this.translateOnAxis(xf,t)}translateZ(t){return this.translateOnAxis(Mf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ia.copy(t):ia.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(qs,ia,this.up):Ri.lookAt(ia,qs,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(Ri),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(_e("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sf),jr.child=t,this.dispatchEvent(jr),jr.child=null):_e("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(m0),Yc.child=t,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sf),jr.child=t,this.dispatchEvent(jr),jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,d0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,p0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*r,o[13]+=i-o[1]*e-o[5]*i-o[9]*r,o[14]+=r-o[2]*e-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let f=h.shapes;if(Array.isArray(f))for(let d=0,g=f.length;d<g;d++){let v=f[d];o(t.shapes,v)}else o(t.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let f=0,d=this.material.length;f<d;f++)h.push(o(t.materials,this.material[f]));r.material=h}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){let f=this.animations[h];r.animations.push(o(t.animations,f))}}if(e){let h=l(t.geometries),f=l(t.materials),d=l(t.textures),g=l(t.images),v=l(t.shapes),_=l(t.skeletons),b=l(t.animations),w=l(t.nodes);h.length>0&&(i.geometries=h),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),b.length>0&&(i.animations=b),w.length>0&&(i.nodes=w)}return i.object=r,i;function l(h){let f=[];for(let d in h){let g=h[d];delete g.metadata,f.push(g)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new ct(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Zn=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},g0={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,o=null,l=null,h=this._targetRay,f=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){l=!0;for(let T of t.hand.values()){let S=e.getJointPose(T,i),x=this._getHandJoint(d,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}let g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),b=.02,w=.005;d.inputState.pinching&&_>b+w?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=b-w&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(g0)))}return h!==null&&(h.visible=r!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Zn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ra={h:0,s:0,l:0};Me=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Le.workingColorSpace){return this.r=t,this.g=e,this.b=i,Le.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Le.workingColorSpace){if(t=Wh(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,l=2*i-o;this.r=$c(l,o,t+1/3),this.g=$c(l,o,t),this.b=$c(l,o,t-1/3)}return Le.colorSpaceToWorking(this,r),this}setStyle(t,e=An){function i(o){o!==void 0&&parseFloat(o)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,l=r[1],h=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:de("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){let i=Ed[t.toLowerCase()];return i!==void 0?this.setHex(i,e):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return Le.workingToColorSpace(Mn.copy(this),t),Math.round(Ae(Mn.r*255,0,255))*65536+Math.round(Ae(Mn.g*255,0,255))*256+Math.round(Ae(Mn.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.workingToColorSpace(Mn.copy(this),e);let i=Mn.r,r=Mn.g,o=Mn.b,l=Math.max(i,r,o),h=Math.min(i,r,o),f,d,g=(h+l)/2;if(h===l)f=0,d=0;else{let v=l-h;switch(d=g<=.5?v/(l+h):v/(2-l-h),l){case i:f=(r-o)/v+(r<o?6:0);break;case r:f=(o-i)/v+2;break;case o:f=(i-r)/v+4;break}f/=6}return t.h=f,t.s=d,t.l=g,t}getRGB(t,e=Le.workingColorSpace){return Le.workingToColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=An){Le.workingToColorSpace(Mn.copy(this),t);let e=Mn.r,i=Mn.g,r=Mn.b;return t!==An?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(ra);let i=no(ji.h,ra.h,e),r=no(ji.s,ra.s,e),o=no(ji.l,ra.l,e);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*r,this.g=o[1]*e+o[4]*i+o[7]*r,this.b=o[2]*e+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Me;Me.NAMES=Ed;co=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new ct,Li=new ct,qc=new ct,Ni=new ct,Kr=new ct,Qr=new ct,bf=new ct,Zc=new ct,Jc=new ct,jc=new ct,Kc=new Ke,Qc=new Ke,th=new Ke,_i=class n{constructor(t=new ct,e=new ct,i=new ct){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ei.subVectors(t,e),r.cross(ei);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,i,r,o){ei.subVectors(r,e),Li.subVectors(i,e),qc.subVectors(t,e);let l=ei.dot(ei),h=ei.dot(Li),f=ei.dot(qc),d=Li.dot(Li),g=Li.dot(qc),v=l*d-h*h;if(v===0)return o.set(0,0,0),null;let _=1/v,b=(d*f-h*g)*_,w=(l*g-h*f)*_;return o.set(1-b-w,w,b)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,i,r,o,l,h,f){return this.getBarycoord(t,e,i,r,Ni)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Ni.x),f.addScaledVector(l,Ni.y),f.addScaledVector(h,Ni.z),f)}static getInterpolatedAttribute(t,e,i,r,o,l){return Kc.setScalar(0),Qc.setScalar(0),th.setScalar(0),Kc.fromBufferAttribute(t,e),Qc.fromBufferAttribute(t,i),th.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(Kc,o.x),l.addScaledVector(Qc,o.y),l.addScaledVector(th,o.z),l}static isFrontFacing(t,e,i,r){return ei.subVectors(i,e),Li.subVectors(t,e),ei.cross(Li).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ei.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,o=this.c,l,h;Kr.subVectors(r,i),Qr.subVectors(o,i),Zc.subVectors(t,i);let f=Kr.dot(Zc),d=Qr.dot(Zc);if(f<=0&&d<=0)return e.copy(i);Jc.subVectors(t,r);let g=Kr.dot(Jc),v=Qr.dot(Jc);if(g>=0&&v<=g)return e.copy(r);let _=f*v-g*d;if(_<=0&&f>=0&&g<=0)return l=f/(f-g),e.copy(i).addScaledVector(Kr,l);jc.subVectors(t,o);let b=Kr.dot(jc),w=Qr.dot(jc);if(w>=0&&b<=w)return e.copy(o);let T=b*d-f*w;if(T<=0&&d>=0&&w<=0)return h=d/(d-w),e.copy(i).addScaledVector(Qr,h);let S=g*w-b*v;if(S<=0&&v-g>=0&&b-w>=0)return bf.subVectors(o,r),h=(v-g)/(v-g+(b-w)),e.copy(r).addScaledVector(bf,h);let x=1/(S+T+_);return l=T*x,h=_*x,e.copy(i).addScaledVector(Kr,l).addScaledVector(Qr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},er=class{constructor(t=new ct(1/0,1/0,1/0),e=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,h=o.count;l<h;l++)t.isMesh===!0?t.getVertexPosition(l,ni):ni.fromBufferAttribute(o,l),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sa.copy(i.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}let r=t.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),oa.subVectors(this.max,Zs),ts.subVectors(t.a,Zs),es.subVectors(t.b,Zs),ns.subVectors(t.c,Zs),Ki.subVectors(es,ts),Qi.subVectors(ns,es),Mr.subVectors(ts,ns);let e=[0,-Ki.z,Ki.y,0,-Qi.z,Qi.y,0,-Mr.z,Mr.y,Ki.z,0,-Ki.x,Qi.z,0,-Qi.x,Mr.z,0,-Mr.x,-Ki.y,Ki.x,0,-Qi.y,Qi.x,0,-Mr.y,Mr.x,0];return!eh(e,ts,es,ns,oa)||(e=[1,0,0,0,1,0,0,0,1],!eh(e,ts,es,ns,oa))?!1:(aa.crossVectors(Ki,Qi),e=[aa.x,aa.y,aa.z],eh(e,ts,es,ns,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Di=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],ni=new ct,sa=new er,ts=new ct,es=new ct,ns=new ct,Ki=new ct,Qi=new ct,Mr=new ct,Zs=new ct,oa=new ct,aa=new ct,Sr=new ct;nn=new ct,la=new ce,_0=0,Ye=class extends si{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gh,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),o=Ge(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},ho=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}},uo=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}},$e=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},v0=new er,Js=new ct,nh=new ct,Tr=class{constructor(t=new ct,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):v0.setFromPoints(t).getCenter(i);let r=0;for(let o=0,l=t.length;o<l;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(nh)),this.expandByPoint(Js.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},y0=0,qn=new Xe,ih=new an,is=new ct,Un=new er,js=new er,fn=new ct,je=class n extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gg(t)?uo:ho)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new be().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,i){return qn.makeTranslation(t,e,i),this.applyMatrix4(qn),this}scale(t,e,i){return qn.makeScale(t,e,i),this.applyMatrix4(qn),this}lookAt(t){return ih.lookAt(t),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,o=t.length;r<o;r++){let l=t[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new $e(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let o=e[i];Un.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(t){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){let h=e[o];js.setFromBufferAttribute(h),this.morphTargetsRelative?(fn.addVectors(Un.min,js.min),Un.expandByPoint(fn),fn.addVectors(Un.max,js.max),Un.expandByPoint(fn)):(Un.expandByPoint(js.min),Un.expandByPoint(js.max))}Un.getCenter(i);let r=0;for(let o=0,l=t.count;o<l;o++)fn.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(fn));if(e)for(let o=0,l=e.length;o<l;o++){let h=e[o],f=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)fn.fromBufferAttribute(h,d),f&&(is.fromBufferAttribute(t,d),fn.add(is)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){_e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,o=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==i.count)&&(l=new Ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",l));let h=[],f=[];for(let A=0;A<i.count;A++)h[A]=new ct,f[A]=new ct;let d=new ct,g=new ct,v=new ct,_=new ce,b=new ce,w=new ce,T=new ct,S=new ct;function x(A,k,G){d.fromBufferAttribute(i,A),g.fromBufferAttribute(i,k),v.fromBufferAttribute(i,G),_.fromBufferAttribute(o,A),b.fromBufferAttribute(o,k),w.fromBufferAttribute(o,G),g.sub(d),v.sub(d),b.sub(_),w.sub(_);let $=1/(b.x*w.y-w.x*b.y);isFinite($)&&(T.copy(g).multiplyScalar(w.y).addScaledVector(v,-b.y).multiplyScalar($),S.copy(v).multiplyScalar(b.x).addScaledVector(g,-w.x).multiplyScalar($),h[A].add(T),h[k].add(T),h[G].add(T),f[A].add(S),f[k].add(S),f[G].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let A=0,k=L.length;A<k;++A){let G=L[A],$=G.start,J=G.count;for(let j=$,Z=$+J;j<Z;j+=3)x(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let V=new ct,C=new ct,N=new ct,O=new ct;function z(A){N.fromBufferAttribute(r,A),O.copy(N);let k=h[A];V.copy(k),V.sub(N.multiplyScalar(N.dot(k))).normalize(),C.crossVectors(O,k);let $=C.dot(f[A])<0?-1:1;l.setXYZW(A,V.x,V.y,V.z,$)}for(let A=0,k=L.length;A<k;++A){let G=L[A],$=G.start,J=G.count;for(let j=$,Z=$+J;j<Z;j+=3)z(t.getX(j+0)),z(t.getX(j+1)),z(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,b=i.count;_<b;_++)i.setXYZ(_,0,0,0);let r=new ct,o=new ct,l=new ct,h=new ct,f=new ct,d=new ct,g=new ct,v=new ct;if(t)for(let _=0,b=t.count;_<b;_+=3){let w=t.getX(_+0),T=t.getX(_+1),S=t.getX(_+2);r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,T),l.fromBufferAttribute(e,S),g.subVectors(l,o),v.subVectors(r,o),g.cross(v),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),h.add(g),f.add(g),d.add(g),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,b=e.count;_<b;_+=3)r.fromBufferAttribute(e,_+0),o.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),g.subVectors(l,o),v.subVectors(r,o),g.cross(v),i.setXYZ(_+0,g.x,g.y,g.z),i.setXYZ(_+1,g.x,g.y,g.z),i.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(h,f){let d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(f.length*g),b=0,w=0;for(let T=0,S=f.length;T<S;T++){h.isInterleavedBufferAttribute?b=f[T]*h.data.stride+h.offset:b=f[T]*g;for(let x=0;x<g;x++)_[w++]=d[b++]}return new Ye(_,g,v)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let h in r){let f=r[h],d=t(f,i);e.setAttribute(h,d)}let o=this.morphAttributes;for(let h in o){let f=[],d=o[h];for(let g=0,v=d.length;g<v;g++){let _=d[g],b=t(_,i);f.push(b)}e.morphAttributes[h]=f}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let h=0,f=l.length;h<f;h++){let d=l[h];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let f=this.parameters;for(let d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let f in i){let d=i[f];t.data.attributes[f]=d.toJSON(t.data)}let r={},o=!1;for(let f in this.morphAttributes){let d=this.morphAttributes[f],g=[];for(let v=0,_=d.length;v<_;v++){let b=d[v];g.push(b.toJSON(t.data))}g.length>0&&(r[f]=g,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let d in r){let g=r[d];this.setAttribute(d,g.clone(e))}let o=t.morphAttributes;for(let d in o){let g=[],v=o[d];for(let _=0,b=v.length;_<b;_++)g.push(v[_].clone(e));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let d=0,g=l.length;d<g;d++){let v=l[d];this.addGroup(v.start,v.count,v.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gh,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Tn=new ct,fo=class n{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),o=Ge(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rh=new ct,x0=new ct,M0=new be,Bn=class{constructor(t=new ct(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=rh.subVectors(i,e).cross(x0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(rh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(r,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||M0.getNormalMatrix(t),r=this.coplanarPoint(rh).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},S0=0,xi=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Cs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){de(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){de(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let l=[];for(let h in o){let f=o[h];delete f.metadata,l.push(f)}return l}if(e){let o=r(t.textures),l=r(t.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Bn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xs=class extends xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ks=new ct,ss=new ct,os=new ct,as=new ce,Qs=new ce,Td=new Xe,ca=new ct,to=new ct,ha=new ct,wf=new ce,sh=new ce,Ef=new ce,po=class extends an{constructor(t=new xs){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new je;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Wa(e,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new fo(i,3,0,!1)),rs.setAttribute("uv",new fo(i,2,3,!1))}this.geometry=rs,this.material=t,this.center=new ce(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&_e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Td.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-os.z);let i=this.material.rotation,r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));let l=this.center;ua(ca.set(-.5,-.5,0),os,l,ss,r,o),ua(to.set(.5,-.5,0),os,l,ss,r,o),ua(ha.set(.5,.5,0),os,l,ss,r,o),wf.set(0,0),sh.set(1,0),Ef.set(1,1);let h=t.ray.intersectTriangle(ca,to,ha,!1,Ks);if(h===null&&(ua(to.set(-.5,.5,0),os,l,ss,r,o),sh.set(0,1),h=t.ray.intersectTriangle(ca,ha,to,!1,Ks),h===null))return;let f=t.ray.origin.distanceTo(Ks);f<t.near||f>t.far||e.push({distance:f,point:Ks.clone(),uv:_i.getInterpolation(Ks,ca,to,ha,wf,sh,Ef,new ce),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Oi=new ct,oh=new ct,fa=new ct,da=new ct,nr=class{constructor(t=new ct,e=new ct(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){oh.copy(t).add(e).multiplyScalar(.5),fa.copy(e).sub(t).normalize(),da.copy(this.origin).sub(oh);let o=t.distanceTo(e)*.5,l=-this.direction.dot(fa),h=da.dot(this.direction),f=-da.dot(fa),d=da.lengthSq(),g=Math.abs(1-l*l),v,_,b,w;if(g>0)if(v=l*f-h,_=l*h-f,w=o*g,v>=0)if(_>=-w)if(_<=w){let T=1/g;v*=T,_*=T,b=v*(v+l*_+2*h)+_*(l*v+_+2*f)+d}else _=o,v=Math.max(0,-(l*_+h)),b=-v*v+_*(_+2*f)+d;else _=-o,v=Math.max(0,-(l*_+h)),b=-v*v+_*(_+2*f)+d;else _<=-w?(v=Math.max(0,-(-l*o+h)),_=v>0?-o:Math.min(Math.max(-o,-f),o),b=-v*v+_*(_+2*f)+d):_<=w?(v=0,_=Math.min(Math.max(-o,-f),o),b=_*(_+2*f)+d):(v=Math.max(0,-(l*o+h)),_=v>0?o:Math.min(Math.max(-o,-f),o),b=-v*v+_*(_+2*f)+d);else _=l>0?-o:o,v=Math.max(0,-(l*_+h)),b=-v*v+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(oh).addScaledVector(fa,_),b}intersectSphere(t,e){if(t.radius<0)return null;Oi.subVectors(t.center,this.origin);let i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,o=t.radius*t.radius;if(r>o)return null;let l=Math.sqrt(o-r),h=i-l,f=i+l;return f<0?null:h<0?this.at(f,e):this.at(h,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,o,l,h,f,d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(i=(t.min.x-_.x)*d,r=(t.max.x-_.x)*d):(i=(t.max.x-_.x)*d,r=(t.min.x-_.x)*d),g>=0?(o=(t.min.y-_.y)*g,l=(t.max.y-_.y)*g):(o=(t.max.y-_.y)*g,l=(t.min.y-_.y)*g),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),v>=0?(h=(t.min.z-_.z)*v,f=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,f=(t.min.z-_.z)*v),i>f||h>r)||((h>i||i!==i)&&(i=h),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,i,r,o){let l=this.origin,h=this.direction,f=h.x,d=h.y,g=h.z,v=t.x-l.x,_=t.y-l.y,b=t.z-l.z,w=e.x-l.x,T=e.y-l.y,S=e.z-l.z,x=i.x-l.x,L=i.y-l.y,V=i.z-l.z,C=Math.abs(f),N=Math.abs(d),O=Math.abs(g),z,A,k,G,$,J,j,Z,K,lt,dt,bt;if(C>=N&&C>=O?(k=f,J=v,K=w,bt=x,f>=0?(z=d,A=g,G=_,$=b,j=T,Z=S,lt=L,dt=V):(z=g,A=d,G=b,$=_,j=S,Z=T,lt=V,dt=L)):N>=O?(k=d,J=_,K=T,bt=L,d>=0?(z=g,A=f,G=b,$=v,j=S,Z=w,lt=V,dt=x):(z=f,A=g,G=v,$=b,j=w,Z=S,lt=x,dt=V)):(k=g,J=b,K=S,bt=V,g>=0?(z=f,A=d,G=v,$=_,j=w,Z=T,lt=x,dt=L):(z=d,A=f,G=_,$=v,j=T,Z=w,lt=L,dt=x)),k===0)return null;let yt=z/k,wt=A/k,Pt=1/k,ht=G-yt*J,Tt=$-wt*J,Wt=j-yt*K,Ht=Z-wt*K,zt=lt-yt*bt,_t=dt-wt*bt,X=zt*Ht-_t*Wt,Rt=ht*_t-Tt*zt,Qt=Wt*Tt-Ht*ht;if(r){if(X<0||Rt<0||Qt<0)return null}else if((X<0||Rt<0||Qt<0)&&(X>0||Rt>0||Qt>0))return null;let Ft=X+Rt+Qt;if(Ft===0)return null;let oe=Pt*(X*J+Rt*K+Qt*bt);return(Ft>0?oe<0:oe>0)?null:this.at(oe/Ft,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zn=class extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Tf=new Xe,br=new nr,pa=new Tr,Af=new ct,ma=new ct,ga=new ct,_a=new ct,ah=new ct,va=new ct,Cf=new ct,ya=new ct,Ue=class extends an{constructor(t=new je,e=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){let h=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let h=this.morphTargetInfluences;if(o&&h){va.set(0,0,0);for(let f=0,d=o.length;f<d;f++){let g=h[f],v=o[f];g!==0&&(ah.fromBufferAttribute(v,t),l?va.addScaledVector(ah,g):va.addScaledVector(ah.sub(e),g))}e.add(va)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(o),br.copy(t.ray).recast(t.near),!(pa.containsPoint(br.origin)===!1&&(br.intersectSphere(pa,Af)===null||br.origin.distanceToSquared(Af)>(t.far-t.near)**2))&&(Tf.copy(o).invert(),br.copy(t.ray).applyMatrix4(Tf),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,br)))}_computeIntersections(t,e,i){let r,o=this.geometry,l=this.material,h=o.index,f=o.attributes.position,d=o.attributes.uv,g=o.attributes.uv1,v=o.attributes.normal,_=o.groups,b=o.drawRange;if(h!==null)if(Array.isArray(l))for(let w=0,T=_.length;w<T;w++){let S=_[w],x=l[S.materialIndex],L=Math.max(S.start,b.start),V=Math.min(h.count,Math.min(S.start+S.count,b.start+b.count));for(let C=L,N=V;C<N;C+=3){let O=h.getX(C),z=h.getX(C+1),A=h.getX(C+2);r=xa(this,x,t,i,d,g,v,O,z,A),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{let w=Math.max(0,b.start),T=Math.min(h.count,b.start+b.count);for(let S=w,x=T;S<x;S+=3){let L=h.getX(S),V=h.getX(S+1),C=h.getX(S+2);r=xa(this,l,t,i,d,g,v,L,V,C),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let w=0,T=_.length;w<T;w++){let S=_[w],x=l[S.materialIndex],L=Math.max(S.start,b.start),V=Math.min(f.count,Math.min(S.start+S.count,b.start+b.count));for(let C=L,N=V;C<N;C+=3){let O=C,z=C+1,A=C+2;r=xa(this,x,t,i,d,g,v,O,z,A),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{let w=Math.max(0,b.start),T=Math.min(f.count,b.start+b.count);for(let S=w,x=T;S<x;S+=3){let L=S,V=S+1,C=S+2;r=xa(this,l,t,i,d,g,v,L,V,C),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}}};Ya=class extends Cn{constructor(t=null,e=1,i=1,r,o,l,h,f,d=dn,g=dn,v,_){super(null,l,h,f,d,g,r,o,v,_),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wr=new Tr,w0=new ce(.5,.5),Ma=new ct,Ms=class{constructor(t=new Bn,e=new Bn,i=new Bn,r=new Bn,o=new Bn,l=new Bn){this.planes=[t,e,i,r,o,l]}set(t,e,i,r,o,l){let h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(i),h[3].copy(r),h[4].copy(o),h[5].copy(l),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ri,i=!1){let r=this.planes,o=t.elements,l=o[0],h=o[1],f=o[2],d=o[3],g=o[4],v=o[5],_=o[6],b=o[7],w=o[8],T=o[9],S=o[10],x=o[11],L=o[12],V=o[13],C=o[14],N=o[15];if(r[0].setComponents(d-l,b-g,x-w,N-L).normalize(),r[1].setComponents(d+l,b+g,x+w,N+L).normalize(),r[2].setComponents(d+h,b+v,x+T,N+V).normalize(),r[3].setComponents(d-h,b-v,x-T,N-V).normalize(),i)r[4].setComponents(f,_,S,C).normalize(),r[5].setComponents(d-f,b-_,x-S,N-C).normalize();else if(r[4].setComponents(d-f,b-_,x-S,N-C).normalize(),e===ri)r[5].setComponents(d+f,b+_,x+S,N+C).normalize();else if(e===ps)r[5].setComponents(f,_,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(t){wr.center.set(0,0,0);let e=w0.distanceTo(t.center);return wr.radius=.7071067811865476+e,wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Ma.x=r.normal.x>0?t.max.x:t.min.x,Ma.y=r.normal.y>0?t.max.y:t.min.y,Ma.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},oi=class extends xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$a=new ct,qa=new ct,Pf=new Xe,eo=new nr,Sa=new Tr,lh=new ct,If=new ct,Ar=class extends an{constructor(t=new je,e=new oi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,o=e.count;r<o;r++)$a.fromBufferAttribute(e,r-1),qa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=$a.distanceTo(qa);t.setAttribute("lineDistance",new $e(i,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),Sa.radius+=o,t.ray.intersectsSphere(Sa)===!1)return;Pf.copy(r).invert(),eo.copy(t.ray).applyMatrix4(Pf);let h=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,d=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){let b=Math.max(0,l.start),w=Math.min(g.count,l.start+l.count);for(let T=b,S=w-1;T<S;T+=d){let x=g.getX(T),L=g.getX(T+1),V=ba(this,t,eo,f,x,L,T);V&&e.push(V)}if(this.isLineLoop){let T=g.getX(w-1),S=g.getX(b),x=ba(this,t,eo,f,T,S,w-1);x&&e.push(x)}}else{let b=Math.max(0,l.start),w=Math.min(_.count,l.start+l.count);for(let T=b,S=w-1;T<S;T+=d){let x=ba(this,t,eo,f,T,T+1,T);x&&e.push(x)}if(this.isLineLoop){let T=ba(this,t,eo,f,w-1,b,w-1);T&&e.push(T)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){let h=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}};Rf=new ct,Lf=new ct,Cr=class extends Ar{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,o=e.count;r<o;r+=2)Rf.fromBufferAttribute(e,r),Lf.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Rf.distanceTo(Lf);t.setAttribute("lineDistance",new $e(i,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},mo=class extends Cn{constructor(t=[],e=fr,i,r,o,l,h,f,d,g){super(t,e,i,r,o,l,h,f,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},go=class extends Cn{constructor(t,e,i,r,o,l,h,f,d){super(t,e,i,r,o,l,h,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},ir=class extends Cn{constructor(t,e,i=li,r,o,l,h=dn,f=dn,d,g=yi,v=1){if(g!==yi&&g!==pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let _={width:t,height:e,depth:v};super(_,r,o,l,h,f,g,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Za=class extends ir{constructor(t,e=li,i=fr,r,o,l=dn,h=dn,f,d=yi){let g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,e,i,r,o,l,h,f,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},_o=class extends Cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},rr=class n extends je{constructor(t=1,e=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};let h=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);let f=[],d=[],g=[],v=[],_=0,b=0;w("z","y","x",-1,-1,i,e,t,l,o,0),w("z","y","x",1,-1,i,e,-t,l,o,1),w("x","z","y",1,1,t,i,e,r,l,2),w("x","z","y",1,-1,t,i,-e,r,l,3),w("x","y","z",1,-1,t,e,i,r,o,4),w("x","y","z",-1,-1,t,e,-i,r,o,5),this.setIndex(f),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(v,2));function w(T,S,x,L,V,C,N,O,z,A,k){let G=C/z,$=N/A,J=C/2,j=N/2,Z=O/2,K=z+1,lt=A+1,dt=0,bt=0,yt=new ct;for(let wt=0;wt<lt;wt++){let Pt=wt*$-j;for(let ht=0;ht<K;ht++){let Tt=ht*G-J;yt[T]=Tt*L,yt[S]=Pt*V,yt[x]=Z,d.push(yt.x,yt.y,yt.z),yt[T]=0,yt[S]=0,yt[x]=O>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(ht/z),v.push(1-wt/A),dt+=1}}for(let wt=0;wt<A;wt++)for(let Pt=0;Pt<z;Pt++){let ht=_+Pt+K*wt,Tt=_+Pt+K*(wt+1),Wt=_+(Pt+1)+K*(wt+1),Ht=_+(Pt+1)+K*wt;f.push(ht,Tt,Ht),f.push(Tt,Wt,Ht),bt+=6}h.addGroup(b,bt,k),b+=bt,_+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Mi=class n extends je{constructor(t=1,e=1,i=1,r=32,o=1,l=!1,h=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:h,thetaLength:f};let d=this;r=Math.floor(r),o=Math.floor(o);let g=[],v=[],_=[],b=[],w=0,T=[],S=i/2,x=0;L(),l===!1&&(t>0&&V(!0),e>0&&V(!1)),this.setIndex(g),this.setAttribute("position",new $e(v,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(b,2));function L(){let C=new ct,N=new ct,O=0,z=(e-t)/i;for(let A=0;A<=o;A++){let k=[],G=A/o,$=G*(e-t)+t;for(let J=0;J<=r;J++){let j=J/r,Z=j*f+h,K=Math.sin(Z),lt=Math.cos(Z);N.x=$*K,N.y=-G*i+S,N.z=$*lt,v.push(N.x,N.y,N.z),C.set(K,z,lt).normalize(),_.push(C.x,C.y,C.z),b.push(j,1-G),k.push(w++)}T.push(k)}for(let A=0;A<r;A++)for(let k=0;k<o;k++){let G=T[k][A],$=T[k+1][A],J=T[k+1][A+1],j=T[k][A+1];(t>0||k!==0)&&(g.push(G,$,j),O+=3),(e>0||k!==o-1)&&(g.push($,J,j),O+=3)}d.addGroup(x,O,0),x+=O}function V(C){let N=w,O=new ce,z=new ct,A=0,k=C===!0?t:e,G=C===!0?1:-1;for(let J=1;J<=r;J++)v.push(0,S*G,0),_.push(0,G,0),b.push(.5,.5),w++;let $=w;for(let J=0;J<=r;J++){let Z=J/r*f+h,K=Math.cos(Z),lt=Math.sin(Z);z.x=k*lt,z.y=S*G,z.z=k*K,v.push(z.x,z.y,z.z),_.push(0,G,0),O.x=K*.5+.5,O.y=lt*.5*G+.5,b.push(O.x,O.y),w++}for(let J=0;J<r;J++){let j=N+J,Z=$+J;C===!0?g.push(Z,Z+1,j):g.push(Z+1,Z,j),A+=3}d.addGroup(x,A,C===!0?1:2),x+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ss=class n extends Mi{constructor(t=1,e=1,i=32,r=1,o=!1,l=0,h=Math.PI*2){super(0,t,e,i,r,o,l,h),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:h}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wa=new ct,Ea=new ct,ch=new ct,Ta=new _i,bs=class extends je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),o=Math.cos(us*e),l=t.getIndex(),h=t.getAttribute("position"),f=l?l.count:h.count,d=[0,0,0],g=["a","b","c"],v=new Array(3),_={},b=[];for(let w=0;w<f;w+=3){l?(d[0]=l.getX(w),d[1]=l.getX(w+1),d[2]=l.getX(w+2)):(d[0]=w,d[1]=w+1,d[2]=w+2);let{a:T,b:S,c:x}=Ta;if(T.fromBufferAttribute(h,d[0]),S.fromBufferAttribute(h,d[1]),x.fromBufferAttribute(h,d[2]),Ta.getNormal(ch),v[0]=`${Math.round(T.x*r)},${Math.round(T.y*r)},${Math.round(T.z*r)}`,v[1]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,v[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let L=0;L<3;L++){let V=(L+1)%3,C=v[L],N=v[V],O=Ta[g[L]],z=Ta[g[V]],A=`${C}_${N}`,k=`${N}_${C}`;k in _&&_[k]?(ch.dot(_[k].normal)<=o&&(b.push(O.x,O.y,O.z),b.push(z.x,z.y,z.z)),_[k]=null):A in _||(_[A]={index0:d[L],index1:d[V],normal:ch.clone()})}}for(let w in _)if(_[w]){let{index0:T,index1:S}=_[w];wa.fromBufferAttribute(h,T),Ea.fromBufferAttribute(h,S),b.push(wa.x,wa.y,wa.z),b.push(Ea.x,Ea.y,Ea.z)}this.setAttribute("position",new $e(b,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},vo=class n extends je{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let o=t/2,l=e/2,h=Math.floor(i),f=Math.floor(r),d=h+1,g=f+1,v=t/h,_=e/f,b=[],w=[],T=[],S=[];for(let x=0;x<g;x++){let L=x*_-l;for(let V=0;V<d;V++){let C=V*v-o;w.push(C,-L,0),T.push(0,0,1),S.push(V/h),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let L=0;L<h;L++){let V=L+d*x,C=L+d*(x+1),N=L+1+d*(x+1),O=L+1+d*x;b.push(V,C,O),b.push(C,N,O)}this.setIndex(b),this.setAttribute("position",new $e(w,3)),this.setAttribute("normal",new $e(T,3)),this.setAttribute("uv",new $e(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},yo=class n extends je{constructor(t=.5,e=1,i=32,r=1,o=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:l},i=Math.max(3,i),r=Math.max(1,r);let h=[],f=[],d=[],g=[],v=t,_=(e-t)/r,b=new ct,w=new ce;for(let T=0;T<=r;T++){for(let S=0;S<=i;S++){let x=o+S/i*l;b.x=v*Math.cos(x),b.y=v*Math.sin(x),f.push(b.x,b.y,b.z),d.push(0,0,1),w.x=(b.x/e+1)/2,w.y=(b.y/e+1)/2,g.push(w.x,w.y)}v+=_}for(let T=0;T<r;T++){let S=T*(i+1);for(let x=0;x<i;x++){let L=x+S,V=L,C=L+i+1,N=L+i+2,O=L+1;h.push(V,C,O),h.push(C,N,O)}}this.setIndex(h),this.setAttribute("position",new $e(f,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},sr=class n extends je{constructor(t=1,e=32,i=16,r=0,o=Math.PI*2,l=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:h},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let f=Math.min(l+h,Math.PI),d=0,g=[],v=new ct,_=new ct,b=[],w=[],T=[],S=[];for(let x=0;x<=i;x++){let L=[],V=x/i,C=l+V*h,N=t*Math.cos(C),O=Math.sqrt(t*t-N*N),z=0;x===0&&l===0?z=.5/e:x===i&&f===Math.PI&&(z=-.5/e);for(let A=0;A<=e;A++){let k=A/e,G=r+k*o;v.x=-O*Math.cos(G),v.y=N,v.z=O*Math.sin(G),w.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),S.push(k+z,1-V),L.push(d++)}g.push(L)}for(let x=0;x<i;x++)for(let L=0;L<e;L++){let V=g[x][L+1],C=g[x][L],N=g[x+1][L],O=g[x+1][L+1];(x!==0||l>0)&&b.push(V,C,O),(x!==i-1||f<Math.PI)&&b.push(C,N,O)}this.setIndex(b),this.setAttribute("position",new $e(w,3)),this.setAttribute("normal",new $e(T,3)),this.setAttribute("uv",new $e(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};Ad={clone:Lr,merge:wn},T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=E0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Me().setHex(r.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(r.value);break;case"v3":this.uniforms[i].value=new ct().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ke().fromArray(r.value);break;case"m3":this.uniforms[i].value=new be().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Xe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ja=class extends Vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hn=class extends xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ja=class extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ka=class extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},xo=class extends oi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};or=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],o=e[i-1];n:{t:{let l;e:{i:if(!(t<r)){for(let h=i+2;;){if(r===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(o=r,r=e[++i],t<r)break t}l=e.length;break e}if(!(t>=o)){let h=e[1];t<h&&(i=2,o=h);for(let f=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(r=o,o=e[--i-1],t>=o)break t}l=i,i=0;break e}break n}for(;i<l;){let h=i+l>>>1;t<e[h]?l=h:i=h+1}if(r=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r;for(let l=0;l!==r;++l)e[l]=i[o+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends or{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ph,endingEnd:ph}}intervalChanged_(t,e,i){let r=this.parameterPositions,o=t-2,l=t+1,h=r[o],f=r[l];if(h===void 0)switch(this.getSettings_().endingStart){case mh:o=t,h=2*e-i;break;case gh:o=r.length-2,h=e+r[o]-r[o+1];break;default:o=t,h=i}if(f===void 0)switch(this.getSettings_().endingEnd){case mh:l=t,f=2*i-e;break;case gh:l=1,f=i+r[1]-r[0];break;default:l=t-1,f=e}let d=(i-e)*.5,g=this.valueSize;this._weightPrev=d/(e-h),this._weightNext=d/(f-i),this._offsetPrev=o*g,this._offsetNext=l*g}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,f=t*h,d=f-h,g=this._offsetPrev,v=this._offsetNext,_=this._weightPrev,b=this._weightNext,w=(i-e)/(r-e),T=w*w,S=T*w,x=-_*S+2*_*T-_*w,L=(1+_)*S+(-1.5-2*_)*T+(-.5+_)*w+1,V=(-1-b)*S+(1.5+b)*T+.5*w,C=b*S-b*T;for(let N=0;N!==h;++N)o[N]=x*l[g+N]+L*l[d+N]+V*l[f+N]+C*l[v+N];return o}},tl=class extends or{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,f=t*h,d=f-h,g=(i-e)/(r-e),v=1-g;for(let _=0;_!==h;++_)o[_]=l[d+_]*v+l[f+_]*g;return o}},el=class extends or{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},nl=class extends or{interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,f=t*h,d=f-h,g=this.inTangents,v=this.outTangents;if(!g||!v){let w=(i-e)/(r-e),T=1-w;for(let S=0;S!==h;++S)o[S]=l[d+S]*T+l[f+S]*w;return o}let _=h*2,b=t-1;for(let w=0;w!==h;++w){let T=l[d+w],S=l[f+w],x=b*_+w*2,L=v[x],V=v[x+1],C=t*_+w*2,N=g[C],O=g[C+1],z=P0(i,e,L,N,r);o[w]=Cd(z,T,V,O,S)}return o}};Gn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ls(e,this.TimeBufferType),this.values=ls(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ls(t.times,Array),values:ls(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),hh(t.settings)&&(i.settings={inTangents:ls(t.settings.inTangents,Array),outTangents:ls(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new nl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case io:e=this.InterpolantFactoryMethodDiscrete;break;case Va:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break;case dh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return de("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return io;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return Ia;case this.InterpolantFactoryMethodBezier:return dh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;hh(this.settings)&&(Df(this.settings.inTangents,t),Df(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,o=0,l=r-1;for(;o!==r&&i[o]<t;)++o;for(;l!==-1&&i[l]>e;)--l;if(++l,o!==0||l!==r){o>=l&&(l=Math.max(l,1),o=l-1);let h=this.getValueSize();this.times=i.slice(o,l),this.values=this.values.slice(o*h,l*h)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(_e("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,o=i.length;o===0&&(_e("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let h=0;h!==o;h++){let f=i[h];if(typeof f=="number"&&isNaN(f)){_e("KeyframeTrack: Time is not a valid number.",this,h,f),t=!1;break}if(l!==null&&l>f){_e("KeyframeTrack: Out of order keys.",this,h,f,l),t=!1;break}l=f}if(r!==void 0&&Xg(r))for(let h=0,f=r.length;h!==f;++h){let d=r[h];if(isNaN(d)){_e("KeyframeTrack: Value is not a valid number.",this,h,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ia,o=t.length-1,l=1;for(let h=1;h<o;++h){let f=!1,d=t[h],g=t[h+1];if(d!==g&&(h!==1||d!==t[0]))if(r)f=!0;else{let v=h*i,_=v-i,b=v+i;for(let w=0;w!==i;++w){let T=e[v+w];if(T!==e[_+w]||T!==e[b+w]){f=!0;break}}}if(f){if(h!==l){t[l]=t[h];let v=h*i,_=l*i;for(let b=0;b!==i;++b)e[_+b]=e[v+b]}++l}}if(o>0){t[l]=t[o];for(let h=o*i,f=l*i,d=0;d!==i;++d)e[f+d]=e[h+d];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,hh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Va;ar=class extends Gn{constructor(t,e,i){super(t,e,i)}};ar.prototype.ValueTypeName="bool";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=io;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;il=class extends Gn{constructor(t,e,i,r){super(t,e,i,r)}};il.prototype.ValueTypeName="color";rl=class extends Gn{constructor(t,e,i,r){super(t,e,i,r)}};rl.prototype.ValueTypeName="number";sl=class extends or{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,h=this.valueSize,f=(i-e)/(r-e),d=t*h;for(let g=d+h;d!==g;d+=4)kn.slerpFlat(o,0,l,d-h,l,d,f);return o}},Mo=class extends Gn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}};Mo.prototype.ValueTypeName="quaternion";Mo.prototype.InterpolantFactoryMethodSmooth=void 0;lr=class extends Gn{constructor(t,e,i){super(t,e,i)}};lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=io;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;ol=class extends Gn{constructor(t,e,i,r){super(t,e,i,r)}};ol.prototype.ValueTypeName="vector";al=class{constructor(t,e,i){let r=this,o=!1,l=0,h=0,f,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(g){h++,o===!1&&r.onStart!==void 0&&r.onStart(g,l,h),o=!0},this.itemEnd=function(g){l++,r.onProgress!==void 0&&r.onProgress(g,l,h),l===h&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),f?f(g):g},this.setURLModifier=function(g){return f=g,this},this.addHandler=function(g,v){return d.push(g,v),this},this.removeHandler=function(g){let v=d.indexOf(g);return v!==-1&&d.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=d.length;v<_;v+=2){let b=d[v],w=d[v+1];if(b.global&&(b.lastIndex=0),b.test(g))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pd=new al,ll=class{constructor(t){this.manager=t!==void 0?t:Pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,o){i.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ll.DEFAULT_MATERIAL_NAME="__DEFAULT";So=class extends an{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},bo=class extends So{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},uh=new Xe,Of=new ct,Ff=new ct,cl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Of.setFromMatrixPosition(t.matrixWorld),e.position.copy(Of),Ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ff),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(uh,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,l=r?r.z/o.x:1,h=r?r.w/o.y:1,f=r?r.x/o.x:0,d=r?r.y/o.y:0;t.coordinateSystem===ps||t.reversedDepth?e.set(.5*l,0,0,.5*l+f,0,.5*h,0,.5*h+d,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+f,0,.5*h,0,.5*h+d,0,0,.5,.5,0,0,0,1),e.multiply(uh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Aa=new ct,Ca=new kn,gi=new ct,wo=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Aa,Ca,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ca,gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Aa,Ca,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ca,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tr=new ct,Uf=new ce,Bf=new ce,Sn=class extends wo{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(tr.x,tr.y).multiplyScalar(-t/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-t/tr.z)}getViewSize(t,e){return this.getViewBounds(t,Uf,Bf),e.subVectors(Bf,Uf)}setViewOffset(t,e,i,r,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(us*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,o=-.5*r,l=this.view;if(this.view!==null&&this.view.enabled){let f=l.fullWidth,d=l.fullHeight;o+=l.offsetX*r/f,e-=l.offsetY*i/d,r*=l.width/f,i*=l.height/d}let h=this.filmOffset;h!==0&&(o+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ws=class extends wo{constructor(t=-1,e=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-t,l=i+t,h=r+e,f=r-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,h-=g*this.view.offsetY,f=h-g*this.view.height}this.projectionMatrix.makeOrthographic(o,l,h,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_h=class extends cl{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Es=class extends So{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new _h}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},cs=-90,hs=1,hl=class extends an{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Sn(cs,hs,t,e);r.layers=this.layers,this.add(r);let o=new Sn(cs,hs,t,e);o.layers=this.layers,this.add(o);let l=new Sn(cs,hs,t,e);l.layers=this.layers,this.add(l);let h=new Sn(cs,hs,t,e);h.layers=this.layers,this.add(h);let f=new Sn(cs,hs,t,e);f.layers=this.layers,this.add(f);let d=new Sn(cs,hs,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,o,l,h,f]=e;for(let d of e)this.remove(d);if(t===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,l,h,f,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,2,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,3,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,4,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=T,t.setRenderTarget(i,5,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,g),t.setRenderTarget(v,_,b),t.xr.enabled=w,i.texture.needsPMREMUpdate=!0}},ul=class extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},qh="\\[\\]\\.:\\/",I0=new RegExp("["+qh+"]","g"),Zh="[^"+qh+"]",R0="[^"+qh.replace("\\.","")+"]",L0=/((?:WC+[\/:])*)/.source.replace("WC",Zh),N0=/(WCOD+)?/.source.replace("WCOD",R0),D0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zh),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zh),F0=new RegExp("^"+L0+N0+D0+O0+"$"),U0=["material","materials","bones","map"],vh=class{constructor(t,e,i){let r=i||Je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Je=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(I0,"")}static parseTrackName(t){let e=F0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=i.nodeName.substring(r+1);U0.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let l=0;l<o.length;l++){let h=o[l];if(h.name===e||h.uuid===e)return h;let f=i(h.children);if(f)return f}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){_e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){_e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){_e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===d){d=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){_e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){_e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){_e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){_e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let l=t[r];if(l===void 0){let d=e.nodeName;_e("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){_e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){_e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(f=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Je.Composite=vh;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];TS=new Float32Array(1),kf=new Xe,Eo=class{constructor(t,e,i=0,r=1/0){this.ray=new nr(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):_e("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kf),this}intersectObject(t,e=!0,i=[]){return yh(t,this,i,e),i.sort(zf),i}intersectObjects(t,e=!0,i=[]){for(let r=0,o=t.length;r<o;r++)yh(t[r],this,i,e);return i.sort(zf),i}};Ts=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},xh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=r,this}},Vf=new ct,To=class extends an{constructor(t=new ct(0,0,1),e=new ct(0,0,0),i=1,r=16776960,o=i*.2,l=o*.2){super(),this.type="ArrowHelper",Pa===void 0&&(Pa=new je,Pa.setAttribute("position",new $e([0,0,0,0,1,0],3)),fh=new Ss(.5,1,5,1),fh.translate(0,-.5,0)),this.position.copy(e),this.line=new Ar(Pa,new oi({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ue(fh,new zn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,l)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Vf.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Vf,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Ao=class extends si{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function jd(){let n=null,t=!1,e=null,i=null;function r(o,l){i=n.requestAnimationFrame(r),e(o,l)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function z0(n){let t=new WeakMap;function e(h,f){let d=h.array,g=h.usage,v=d.byteLength,_=n.createBuffer();n.bindBuffer(f,_),n.bufferData(f,d,g),h.onUploadCallback();let b;if(d instanceof Float32Array)b=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)b=n.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?b=n.HALF_FLOAT:b=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=n.SHORT;else if(d instanceof Uint32Array)b=n.UNSIGNED_INT;else if(d instanceof Int32Array)b=n.INT;else if(d instanceof Int8Array)b=n.BYTE;else if(d instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function i(h,f,d){let g=f.array,v=f.updateRanges;if(n.bindBuffer(d,h),v.length===0)n.bufferSubData(d,0,g);else{v.sort((b,w)=>b.start-w.start);let _=0;for(let b=1;b<v.length;b++){let w=v[_],T=v[b];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++_,v[_]=T)}v.length=_+1;for(let b=0,w=v.length;b<w;b++){let T=v[b];n.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let f=t.get(h);f&&(n.deleteBuffer(f.buffer),t.delete(h))}function l(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let d=t.get(h);if(d===void 0)t.set(h,e(h,f));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,h,f),d.version=h.version}}return{get:r,remove:o,update:l}}function Sy(n,t,e,i,r,o){let l=new Me(0),h=r===!0?0:1,f,d,g=null,v=0,_=null;function b(L){let V=L.isScene===!0?L.background:null;if(V&&V.isTexture){let C=L.backgroundBlurriness>0;V=t.get(V,C)}return V}function w(L){let V=!1,C=b(L);C===null?S(l,h):C&&C.isColor&&(S(C,1),V=!0);let N=n.xr.getEnvironmentBlendMode();N==="additive"?e.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||V)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(L,V){let C=b(V);C&&(C.isCubeTexture||C.mapping===Po)?(d===void 0&&(d=new Ue(new rr(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Lr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(My.makeRotationFromEuler(V.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Kd),d.material.toneMapped=Le.getTransfer(C.colorSpace)!==Ve,(g!==C||v!==C.version||_!==n.toneMapping)&&(d.material.needsUpdate=!0,g=C,v=C.version,_=n.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(f===void 0&&(f=new Ue(new vo(2,2),new Vn({name:"BackgroundMaterial",uniforms:Lr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=C,f.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,f.material.toneMapped=Le.getTransfer(C.colorSpace)!==Ve,C.matrixAutoUpdate===!0&&C.updateMatrix(),f.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||_!==n.toneMapping)&&(f.material.needsUpdate=!0,g=C,v=C.version,_=n.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null))}function S(L,V){L.getRGB(tc,$h(n)),e.buffers.color.setClear(tc.r,tc.g,tc.b,V,o)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return l},setClearColor:function(L,V=1){l.set(L),h=V,S(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,S(l,h)},render:w,addToRenderList:T,dispose:x}}function by(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=_(null),o=r,l=!1;function h($,J,j,Z,K){let lt=!1,dt=v($,Z,j,J);o!==dt&&(o=dt,d(o.object)),lt=b($,Z,j,K),lt&&w($,Z,j,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(lt||l)&&(l=!1,C($,J,j,Z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return n.createVertexArray()}function d($){return n.bindVertexArray($)}function g($){return n.deleteVertexArray($)}function v($,J,j,Z){let K=Z.wireframe===!0,lt=i[J.id];lt===void 0&&(lt={},i[J.id]=lt);let dt=$.isInstancedMesh===!0?$.id:0,bt=lt[dt];bt===void 0&&(bt={},lt[dt]=bt);let yt=bt[j.id];yt===void 0&&(yt={},bt[j.id]=yt);let wt=yt[K];return wt===void 0&&(wt=_(f()),yt[K]=wt),wt}function _($){let J=[],j=[],Z=[];for(let K=0;K<e;K++)J[K]=0,j[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:j,attributeDivisors:Z,object:$,attributes:{},index:null}}function b($,J,j,Z){let K=o.attributes,lt=J.attributes,dt=0,bt=j.getAttributes();for(let yt in bt)if(bt[yt].location>=0){let Pt=K[yt],ht=lt[yt];if(ht===void 0&&(yt==="instanceMatrix"&&$.instanceMatrix&&(ht=$.instanceMatrix),yt==="instanceColor"&&$.instanceColor&&(ht=$.instanceColor)),Pt===void 0||Pt.attribute!==ht||ht&&Pt.data!==ht.data)return!0;dt++}return o.attributesNum!==dt||o.index!==Z}function w($,J,j,Z){let K={},lt=J.attributes,dt=0,bt=j.getAttributes();for(let yt in bt)if(bt[yt].location>=0){let Pt=lt[yt];Pt===void 0&&(yt==="instanceMatrix"&&$.instanceMatrix&&(Pt=$.instanceMatrix),yt==="instanceColor"&&$.instanceColor&&(Pt=$.instanceColor));let ht={};ht.attribute=Pt,Pt&&Pt.data&&(ht.data=Pt.data),K[yt]=ht,dt++}o.attributes=K,o.attributesNum=dt,o.index=Z}function T(){let $=o.newAttributes;for(let J=0,j=$.length;J<j;J++)$[J]=0}function S($){x($,0)}function x($,J){let j=o.newAttributes,Z=o.enabledAttributes,K=o.attributeDivisors;j[$]=1,Z[$]===0&&(n.enableVertexAttribArray($),Z[$]=1),K[$]!==J&&(n.vertexAttribDivisor($,J),K[$]=J)}function L(){let $=o.newAttributes,J=o.enabledAttributes;for(let j=0,Z=J.length;j<Z;j++)J[j]!==$[j]&&(n.disableVertexAttribArray(j),J[j]=0)}function V($,J,j,Z,K,lt,dt){dt===!0?n.vertexAttribIPointer($,J,j,K,lt):n.vertexAttribPointer($,J,j,Z,K,lt)}function C($,J,j,Z){T();let K=Z.attributes,lt=j.getAttributes(),dt=J.defaultAttributeValues;for(let bt in lt){let yt=lt[bt];if(yt.location>=0){let wt=K[bt];if(wt===void 0&&(bt==="instanceMatrix"&&$.instanceMatrix&&(wt=$.instanceMatrix),bt==="instanceColor"&&$.instanceColor&&(wt=$.instanceColor)),wt!==void 0){let Pt=wt.normalized,ht=wt.itemSize,Tt=t.get(wt);if(Tt===void 0)continue;let Wt=Tt.buffer,Ht=Tt.type,zt=Tt.bytesPerElement,_t=Ht===n.INT||Ht===n.UNSIGNED_INT||wt.gpuType===ml;if(wt.isInterleavedBufferAttribute){let X=wt.data,Rt=X.stride,Qt=wt.offset;if(X.isInstancedInterleavedBuffer){for(let Ft=0;Ft<yt.locationSize;Ft++)x(yt.location+Ft,X.meshPerAttribute);$.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ft=0;Ft<yt.locationSize;Ft++)S(yt.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let Ft=0;Ft<yt.locationSize;Ft++)V(yt.location+Ft,ht/yt.locationSize,Ht,Pt,Rt*zt,(Qt+ht/yt.locationSize*Ft)*zt,_t)}else{if(wt.isInstancedBufferAttribute){for(let X=0;X<yt.locationSize;X++)x(yt.location+X,wt.meshPerAttribute);$.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let X=0;X<yt.locationSize;X++)S(yt.location+X);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let X=0;X<yt.locationSize;X++)V(yt.location+X,ht/yt.locationSize,Ht,Pt,ht*zt,ht/yt.locationSize*X*zt,_t)}}else if(dt!==void 0){let Pt=dt[bt];if(Pt!==void 0)switch(Pt.length){case 2:n.vertexAttrib2fv(yt.location,Pt);break;case 3:n.vertexAttrib3fv(yt.location,Pt);break;case 4:n.vertexAttrib4fv(yt.location,Pt);break;default:n.vertexAttrib1fv(yt.location,Pt)}}}}L()}function N(){k();for(let $ in i){let J=i[$];for(let j in J){let Z=J[j];for(let K in Z){let lt=Z[K];for(let dt in lt)g(lt[dt].object),delete lt[dt];delete Z[K]}}delete i[$]}}function O($){if(i[$.id]===void 0)return;let J=i[$.id];for(let j in J){let Z=J[j];for(let K in Z){let lt=Z[K];for(let dt in lt)g(lt[dt].object),delete lt[dt];delete Z[K]}}delete i[$.id]}function z($){for(let J in i){let j=i[J];for(let Z in j){let K=j[Z];if(K[$.id]===void 0)continue;let lt=K[$.id];for(let dt in lt)g(lt[dt].object),delete lt[dt];delete K[$.id]}}}function A($){for(let J in i){let j=i[J],Z=$.isInstancedMesh===!0?$.id:0,K=j[Z];if(K!==void 0){for(let lt in K){let dt=K[lt];for(let bt in dt)g(dt[bt].object),delete dt[bt];delete K[lt]}delete j[Z],Object.keys(j).length===0&&delete i[J]}}}function k(){G(),l=!0,o!==r&&(o=r,d(o.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:k,resetDefaultState:G,dispose:N,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function wy(n,t,e){let i;function r(f){i=f}function o(f,d){n.drawArrays(i,f,d),e.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawArraysInstanced(i,f,d,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,g);let _=0;for(let b=0;b<g;b++)_+=d[b];e.update(_,i,1)}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}function Ey(n,t,e,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let z=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(z){return!(z!==Jn&&i.convert(z)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){let A=z===hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Nn&&z!==ci&&!A&&i.convert(z)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(z){if(z==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",g=f(d);g!==d&&(de("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);let v=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&_===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let b=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),L=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),V=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),O=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:b,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:V,maxFragmentUniforms:C,maxSamples:N,samples:O}}function Ty(n){let t=this,e=null,i=0,r=!1,o=!1,l=new Bn,h=new be,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){let b=v.length!==0||_||i!==0||r;return r=_,i=v.length,b},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,_){e=g(v,_,0)},this.setState=function(v,_,b){let w=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,x=n.get(v);if(!r||w===null||w.length===0||o&&!S)o?g(null):d();else{let L=o?0:i,V=L*4,C=x.clippingState||null;f.value=C,C=g(w,_,V,b);for(let N=0;N!==V;++N)C[N]=e[N];x.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function d(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function g(v,_,b,w){let T=v!==null?v.length:0,S=null;if(T!==0){if(S=f.value,w!==!0||S===null){let x=b+T*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let V=0,C=b;V!==T;++V,C+=4)l.copy(v[V]).applyMatrix4(L,h),l.normal.toArray(S,C),S[C+3]=l.constant}f.value=S,f.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function Ry(n){let t=[],e=[],i=n,r=n-Ls+1+Ay;for(let o=0;o<r;o++){let l=Math.pow(2,i);t.push(l);let h=1/(l-2),f=-h,d=1+h,g=[f,f,d,f,d,d,f,f,d,d,f,d],v=6,_=6,b=3,w=new Float32Array(b*_*v),T=new Float32Array(b*_*v);for(let x=0;x<v;x++){let L=x%3*2/3-1,V=x>2?0:-1,C=[L,V,0,L+2/3,V,0,L+2/3,V+1,0,L,V,0,L+2/3,V+1,0,L,V+1,0];w.set(C,b*_*x);for(let N=0;N<_;N++){let O=g[N*2]*2-1,z=g[N*2+1]*2-1;x===0?Nr.set(1,z,O):x===1?Nr.set(-O,1,-z):x===2?Nr.set(-O,z,1):x===3?Nr.set(-1,z,-O):x===4?Nr.set(-O,-1,z):Nr.set(O,z,-1),Nr.toArray(T,(x*_+N)*b)}}let S=new je;S.setAttribute("position",new Ye(w,b)),S.setAttribute("outputDirection",new Ye(T,b)),e.push(new Ue(S,null)),i>Ls&&i--}return{lodMeshes:e,sizeLods:t}}function Rd(n,t,e){let i=new Ln(n,t,e);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Ly(n,t,e){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Py,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ny(n,t,e){return new Vn({name:"SphericalGaussianBlur",defines:{SAMPLES:Cy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ld(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Nd(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dy(n){let t=new WeakMap,e=new WeakMap,i=null;function r(_,b=!1){return _==null?null:b?l(_):o(_)}function o(_){if(_&&_.isTexture){let b=_.mapping;if(b===fl||b===dl)if(t.has(_)){let w=t.get(_).texture;return h(w,_.mapping)}else{let w=_.image;if(w&&w.height>0){let T=new ic(w.height);return T.fromEquirectangularTexture(n,_),t.set(_,T),_.addEventListener("dispose",d),h(T.texture,_.mapping)}else return null}}return _}function l(_){if(_&&_.isTexture){let b=_.mapping,w=b===fl||b===dl,T=b===fr||b===Ir;if(w||T){let S=e.get(_),x=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return i===null&&(i=new nc(n)),S=w?i.fromEquirectangular(_,S):i.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,e.set(_,S),S.texture;if(S!==void 0)return S.texture;{let L=_.image;return w&&L&&L.height>0||T&&L&&f(L)?(i===null&&(i=new nc(n)),S=w?i.fromEquirectangular(_):i.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,e.set(_,S),_.addEventListener("dispose",g),S.texture):null}}}return _}function h(_,b){return b===fl?_.mapping=fr:b===dl&&(_.mapping=Ir),_}function f(_){let b=0,w=6;for(let T=0;T<w;T++)_[T]!==void 0&&b++;return b===w}function d(_){let b=_.target;b.removeEventListener("dispose",d);let w=t.get(b);w!==void 0&&(t.delete(b),w.dispose())}function g(_){let b=_.target;b.removeEventListener("dispose",g);let w=e.get(b);w!==void 0&&(e.delete(b),w.dispose())}function v(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:v}}function Oy(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Er("WebGLRenderer: "+i+" extension not supported."),r}}}function Fy(n,t,e,i){let r={},o=new WeakMap;function l(v){let _=v.target;_.index!==null&&t.remove(_.index);for(let w in _.attributes)t.remove(_.attributes[w]);_.removeEventListener("dispose",l),delete r[_.id];let b=o.get(_);b&&(t.remove(b),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function h(v,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function f(v){let _=v.attributes;for(let b in _)t.update(_[b],n.ARRAY_BUFFER)}function d(v){let _=[],b=v.index,w=v.attributes.position,T=0;if(w===void 0)return;if(b!==null){let L=b.array;T=b.version;for(let V=0,C=L.length;V<C;V+=3){let N=L[V+0],O=L[V+1],z=L[V+2];_.push(N,O,O,z,z,N)}}else{let L=w.array;T=w.version;for(let V=0,C=L.length/3-1;V<C;V+=3){let N=V+0,O=V+1,z=V+2;_.push(N,O,O,z,z,N)}}let S=new(w.count>=65535?uo:ho)(_,1);S.version=T;let x=o.get(v);x&&t.remove(x),o.set(v,S)}function g(v){let _=o.get(v);if(_){let b=v.index;b!==null&&_.version<b.version&&d(v)}else d(v);return o.get(v)}return{get:h,update:f,getWireframeAttribute:g}}function Uy(n,t,e){let i;function r(v){i=v}let o,l;function h(v){o=v.type,l=v.bytesPerElement}function f(v,_){n.drawElements(i,_,o,v*l),e.update(_,i,1)}function d(v,_,b){b!==0&&(n.drawElementsInstanced(i,_,o,v*l,b),e.update(_,i,b))}function g(v,_,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,o,v,0,b);let T=0;for(let S=0;S<b;S++)T+=_[S];e.update(T,i,1)}this.setMode=r,this.setIndex=h,this.render=f,this.renderInstances=d,this.renderMultiDraw=g}function By(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,h){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=h*(o/3);break;case n.LINES:e.lines+=h*(o/2);break;case n.LINE_STRIP:e.lines+=h*(o-1);break;case n.LINE_LOOP:e.lines+=h*o;break;case n.POINTS:e.points+=h*o;break;default:_e("WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function ky(n,t,e){let i=new WeakMap,r=new Ke;function o(l,h,f){let d=l.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0,_=i.get(h);if(_===void 0||_.count!==v){let k=function(){z.dispose(),i.delete(h),h.removeEventListener("dispose",k)};_!==void 0&&_.texture.dispose();let b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],V=0;b===!0&&(V=1),w===!0&&(V=2),T===!0&&(V=3);let C=h.attributes.position.count*V,N=1;C>t.maxTextureSize&&(N=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let O=new Float32Array(C*N*4*v),z=new lo(O,C,N,v);z.type=ci,z.needsUpdate=!0;let A=V*4;for(let G=0;G<v;G++){let $=S[G],J=x[G],j=L[G],Z=C*N*4*G;for(let K=0;K<$.count;K++){let lt=K*A;b===!0&&(r.fromBufferAttribute($,K),O[Z+lt+0]=r.x,O[Z+lt+1]=r.y,O[Z+lt+2]=r.z,O[Z+lt+3]=0),w===!0&&(r.fromBufferAttribute(J,K),O[Z+lt+4]=r.x,O[Z+lt+5]=r.y,O[Z+lt+6]=r.z,O[Z+lt+7]=0),T===!0&&(r.fromBufferAttribute(j,K),O[Z+lt+8]=r.x,O[Z+lt+9]=r.y,O[Z+lt+10]=r.z,O[Z+lt+11]=j.itemSize===4?r.w:1)}}_={count:v,texture:z,size:new ce(C,N)},i.set(h,_),h.addEventListener("dispose",k)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let b=0;for(let T=0;T<d.length;T++)b+=d[T];let w=h.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",w),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:o}}function zy(n,t,e,i,r){let o=new WeakMap;function l(d){let g=r.render.frame,v=d.geometry,_=t.get(d,v);if(o.get(_)!==g&&(t.update(_),o.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==g&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,g))),d.isSkinnedMesh){let b=d.skeleton;o.get(b)!==g&&(b.update(),o.set(b,g))}return _}function h(){o=new WeakMap}function f(d){let g=d.target;g.removeEventListener("dispose",f),i.releaseStatesOfObject(g),e.remove(g.instanceMatrix),g.instanceColor!==null&&e.remove(g.instanceColor)}return{update:l,dispose:h}}function Hy(n,t,e,i,r,o){let l=new Ln(t,e,{type:n,depthBuffer:r,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,f=null,d=new je;d.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new $e([0,2,0,0,2,0],2));let g=new Ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Ue(d,g),_=new ws(-1,1,1,-1,0,1),b=null,w=null,T=!1,S,x=null,L=[],V=!1;this.setSize=function(C,N){l.setSize(C,N),h!==null&&h.setSize(C,N),f!==null&&f.setSize(C,N);for(let O=0;O<L.length;O++){let z=L[O];z.setSize&&z.setSize(C,N)}},this.setEffects=function(C){L=C,V=L.length>0&&L[0].isRenderPass===!0;let N=l.width,O=l.height;L.length>0&&h===null&&(h=new Ln(N,O,{type:hi,depthBuffer:!1,stencilBuffer:!1}),f=new Ln(N,O,{type:hi,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<L.length;z++){let A=L[z];A.setSize&&A.setSize(N,O)}},this.begin=function(C,N){if(T||C.toneMapping===ai&&L.length===0)return!1;if(x=N,N!==null){let O=N.width,z=N.height;(l.width!==O||l.height!==z)&&this.setSize(O,z)}return V===!1&&C.setRenderTarget(l),S=C.toneMapping,C.toneMapping=ai,!0},this.hasRenderPass=function(){return V},this.end=function(C,N){C.toneMapping=S,T=!0;let O=l,z=h;for(let A=0;A<L.length;A++){let k=L[A];k.enabled!==!1&&(k.render(C,z,O,N),k.needsSwap!==!1&&(O=z,z=z===h?f:h))}if(b!==C.outputColorSpace||w!==C.toneMapping){b=C.outputColorSpace,w=C.toneMapping,g.defines={},Le.getTransfer(b)===Ve&&(g.defines.SRGB_TRANSFER="");let A=Vy[w];A&&(g.defines[A]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=O.texture,C.setRenderTarget(x),C.render(v,_),x=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){l.dispose(),h!==null&&h.dispose(),f!==null&&f.dispose(),d.dispose(),g.dispose()}}function Ds(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,o=Dd[r];if(o===void 0&&(o=new Float32Array(r),Dd[r]=o),t!==0){i.toArray(o,0);for(let l=1,h=0;l!==t;++l)h+=e,n[l].toArray(o,h)}return o}function ln(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function cn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function oc(n,t){let e=Od[t];e===void 0&&(e=new Int32Array(t),Od[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Gy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Xy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2fv(this.addr,t),cn(e,t)}}function Wy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;n.uniform3fv(this.addr,t),cn(e,t)}}function Yy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4fv(this.addr,t),cn(e,t)}}function $y(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;Bd.set(i),n.uniformMatrix2fv(this.addr,!1,Bd),cn(e,i)}}function qy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;Ud.set(i),n.uniformMatrix3fv(this.addr,!1,Ud),cn(e,i)}}function Zy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;Fd.set(i),n.uniformMatrix4fv(this.addr,!1,Fd),cn(e,i)}}function Jy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function jy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2iv(this.addr,t),cn(e,t)}}function Ky(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;n.uniform3iv(this.addr,t),cn(e,t)}}function Qy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4iv(this.addr,t),cn(e,t)}}function tx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2uiv(this.addr,t),cn(e,t)}}function nx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;n.uniform3uiv(this.addr,t),cn(e,t)}}function ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4uiv(this.addr,t),cn(e,t)}}function rx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(ru.compareFunction=e.isReversedDepthBuffer()?Ql:Kl,o=ru):o=Qd,e.setTexture2D(t||o,r)}function sx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ep,r)}function ox(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||np,r)}function ax(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||tp,r)}function lx(n){switch(n){case 5126:return Gy;case 35664:return Xy;case 35665:return Wy;case 35666:return Yy;case 35674:return $y;case 35675:return qy;case 35676:return Zy;case 5124:case 35670:return Jy;case 35667:case 35671:return jy;case 35668:case 35672:return Ky;case 35669:case 35673:return Qy;case 5125:return tx;case 36294:return ex;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}function cx(n,t){n.uniform1fv(this.addr,t)}function hx(n,t){let e=Ds(t,this.size,2);n.uniform2fv(this.addr,e)}function ux(n,t){let e=Ds(t,this.size,3);n.uniform3fv(this.addr,e)}function fx(n,t){let e=Ds(t,this.size,4);n.uniform4fv(this.addr,e)}function dx(n,t){let e=Ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function px(n,t){let e=Ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function mx(n,t){let e=Ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function gx(n,t){n.uniform1iv(this.addr,t)}function _x(n,t){n.uniform2iv(this.addr,t)}function vx(n,t){n.uniform3iv(this.addr,t)}function yx(n,t){n.uniform4iv(this.addr,t)}function xx(n,t){n.uniform1uiv(this.addr,t)}function Mx(n,t){n.uniform2uiv(this.addr,t)}function Sx(n,t){n.uniform3uiv(this.addr,t)}function bx(n,t){n.uniform4uiv(this.addr,t)}function wx(n,t,e){let i=this.cache,r=t.length,o=oc(e,r);ln(i,o)||(n.uniform1iv(this.addr,o),cn(i,o));let l;this.type===n.SAMPLER_2D_SHADOW?l=ru:l=Qd;for(let h=0;h!==r;++h)e.setTexture2D(t[h]||l,o[h])}function Ex(n,t,e){let i=this.cache,r=t.length,o=oc(e,r);ln(i,o)||(n.uniform1iv(this.addr,o),cn(i,o));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||ep,o[l])}function Tx(n,t,e){let i=this.cache,r=t.length,o=oc(e,r);ln(i,o)||(n.uniform1iv(this.addr,o),cn(i,o));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||np,o[l])}function Ax(n,t,e){let i=this.cache,r=t.length,o=oc(e,r);ln(i,o)||(n.uniform1iv(this.addr,o),cn(i,o));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||tp,o[l])}function Cx(n){switch(n){case 5126:return cx;case 35664:return hx;case 35665:return ux;case 35666:return fx;case 35674:return dx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return vx;case 35669:case 35673:return yx;case 5125:return xx;case 36294:return Mx;case 36295:return Sx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ax}}function kd(n,t){n.seq.push(t),n.map[t.id]=t}function Px(n,t,e){let i=n.name,r=i.length;for(nu.lastIndex=0;;){let o=nu.exec(i),l=nu.lastIndex,h=o[1],f=o[2]==="]",d=o[3];if(f&&(h=h|0),d===void 0||d==="["&&l+2===r){kd(e,d===void 0?new su(h,n,t):new ou(h,n,t));break}else{let v=e.map[h];v===void 0&&(v=new au(h),kd(e,v)),e=v}}}function zd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function Lx(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=r;l<o;l++){let h=l+1;i.push(`${h===t?">":" "} ${h}: ${e[l]}`)}return i.join(`
`)}function Nx(n){Le._getMatrix(Vd,Le.workingColorSpace,n);let t=`mat3( ${Vd.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(n)){case so:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Hd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let l=/ERROR: 0:(\d+)/.exec(o);if(l){let h=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+Lx(n.getShaderSource(t),h)}else return o}function Dx(n,t){let e=Nx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fx(n,t){let e=Ox[t];return e===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ux(){Le.getLuminanceCoefficients(ec);let n=ec.x.toFixed(4),t=ec.y.toFixed(4),e=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function kx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function zx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(t,r),l=o.name,h=1;o.type===n.FLOAT_MAT2&&(h=2),o.type===n.FLOAT_MAT3&&(h=3),o.type===n.FLOAT_MAT4&&(h=4),e[l]={type:o.type,location:n.getAttribLocation(t,l),locationSize:h}}return e}function ko(n){return n!==""}function Gd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function lu(n){return n.replace(Vx,Gx)}function Gx(n,t){let e=Ee[t];if(e===void 0){let i=Hx.get(t);if(i!==void 0)e=Ee[i],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return lu(e)}function Wd(n){return n.replace(Xx,Wx)}function Wx(n,t,e,i){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Yd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function $x(n){return Yx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Zx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":qx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function jx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Jx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Qx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Kx[n.combine]||"ENVMAP_BLENDING_NONE"}function tM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function eM(n,t,e,i){let r=n.getContext(),o=e.defines,l=e.vertexShader,h=e.fragmentShader,f=$x(e),d=Zx(e),g=jx(e),v=Qx(e),_=tM(e),b=Bx(e),w=kx(o),T=r.createProgram(),S,x,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(ko).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(ko).join(`
`),x.length>0&&(x+=`
`)):(S=[Yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),x=[Yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Ee.tonemapping_pars_fragment:"",e.toneMapping!==ai?Fx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Ux(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ko).join(`
`)),l=lu(l),l=Gd(l,e),l=Xd(l,e),h=lu(h),h=Gd(h,e),h=Xd(h,e),l=Wd(l),h=Wd(h),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let V=L+S+l,C=L+x+h,N=zd(r,r.VERTEX_SHADER,V),O=zd(r,r.FRAGMENT_SHADER,C);r.attachShader(T,N),r.attachShader(T,O),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function z($){if(n.debug.checkShaderErrors){let J=r.getProgramInfoLog(T)||"",j=r.getShaderInfoLog(N)||"",Z=r.getShaderInfoLog(O)||"",K=J.trim(),lt=j.trim(),dt=Z.trim(),bt=!0,yt=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(bt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,T,N,O);else{let wt=Hd(r,N,"vertex"),Pt=Hd(r,O,"fragment");_e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+K+`
`+wt+`
`+Pt)}else K!==""?de("WebGLProgram: Program Info Log:",K):(lt===""||dt==="")&&(yt=!1);yt&&($.diagnostics={runnable:bt,programLog:K,vertexShader:{log:lt,prefix:S},fragmentShader:{log:dt,prefix:x}})}r.deleteShader(N),r.deleteShader(O),A=new Ns(r,T),k=zx(r,T)}let A;this.getUniforms=function(){return A===void 0&&z(this),A};let k;this.getAttributes=function(){return k===void 0&&z(this),k};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(T,Ix)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rx++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=O,this}function iM(n){return n===mr||n===Oo||n===Fo}function rM(n,t,e,i,r,o){let l=new vs,h=new cu,f=new Set,d=[],g=new Map,v=i.logarithmicDepthBuffer,_=i.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return f.add(A),A===0?"uv":`uv${A}`}function T(A,k,G,$,J,j){let Z=$.fog,K=J.geometry,lt=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?$.environment:null,dt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,bt=t.get(A.envMap||lt,dt),yt=bt&&bt.mapping===Po?bt.image.height:null,wt=b[A.type];A.precision!==null&&(_=i.getMaxPrecision(A.precision),_!==A.precision&&de("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));let Pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ht=Pt!==void 0?Pt.length:0,Tt=0;K.morphAttributes.position!==void 0&&(Tt=1),K.morphAttributes.normal!==void 0&&(Tt=2),K.morphAttributes.color!==void 0&&(Tt=3);let Wt,Ht,zt,_t;if(wt){let ze=wi[wt];Wt=ze.vertexShader,Ht=ze.fragmentShader}else{Wt=A.vertexShader,Ht=A.fragmentShader;let ze=h.getVertexShaderStage(A),De=h.getFragmentShaderStage(A);h.update(A,ze,De),zt=ze.id,_t=De.id}let X=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),Qt=J.isInstancedMesh===!0,Ft=J.isBatchedMesh===!0,oe=!!A.map,Ie=!!A.matcap,pe=!!bt,ue=!!A.aoMap,ve=!!A.lightMap,fe=!!A.bumpMap&&A.wireframe===!1,Te=!!A.normalMap,ie=!!A.displacementMap,Re=!!A.emissiveMap,Se=!!A.metalnessMap,Ce=!!A.roughnessMap,at=A.anisotropy>0,ke=A.clearcoat>0,me=A.dispersion>0,Y=A.retroreflectivity>0,P=A.iridescence>0,it=A.sheen>0,pt=A.transmission>0,Et=at&&!!A.anisotropyMap,Xt=ke&&!!A.clearcoatMap,$t=ke&&!!A.clearcoatNormalMap,xt=ke&&!!A.clearcoatRoughnessMap,D=P&&!!A.iridescenceMap,q=P&&!!A.iridescenceThicknessMap,Q=it&&!!A.sheenColorMap,rt=it&&!!A.sheenRoughnessMap,ut=!!A.specularMap,Dt=!!A.specularColorMap,Lt=!!A.specularIntensityMap,Gt=pt&&!!A.transmissionMap,H=pt&&!!A.thicknessMap,It=!!A.gradientMap,mt=!!A.alphaMap,Ut=A.alphaTest>0,Yt=!!A.alphaHash,Nt=!!A.extensions,Bt=ai;A.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Bt=n.toneMapping);let re={shaderID:wt,shaderType:A.type,shaderName:A.name,vertexShader:Wt,fragmentShader:Ht,defines:A.defines,customVertexShaderID:zt,customFragmentShaderID:_t,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Ft,batchingColor:Ft&&J._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&J.instanceColor!==null,instancingMorph:Qt&&J.morphTexture!==null,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:oe,matcap:Ie,envMap:pe,envMapMode:pe&&bt.mapping,envMapCubeUVHeight:yt,aoMap:ue,lightMap:ve,bumpMap:fe,normalMap:Te,displacementMap:ie,emissiveMap:Re,normalMapObjectSpace:Te&&A.normalMapType===dd,normalMapTangentSpace:Te&&A.normalMapType===jl,packedNormalMap:Te&&A.normalMapType===jl&&iM(A.normalMap.format),metalnessMap:Se,roughnessMap:Ce,anisotropy:at,anisotropyMap:Et,clearcoat:ke,clearcoatMap:Xt,clearcoatNormalMap:$t,clearcoatRoughnessMap:xt,dispersion:me,retroreflection:Y,iridescence:P,iridescenceMap:D,iridescenceThicknessMap:q,sheen:it,sheenColorMap:Q,sheenRoughnessMap:rt,specularMap:ut,specularColorMap:Dt,specularIntensityMap:Lt,transmission:pt,transmissionMap:Gt,thicknessMap:H,gradientMap:It,opaque:A.transparent===!1&&A.blending===Cs&&A.alphaToCoverage===!1,alphaMap:mt,alphaTest:Ut,alphaHash:Yt,combine:A.combine,mapUv:oe&&w(A.map.channel),aoMapUv:ue&&w(A.aoMap.channel),lightMapUv:ve&&w(A.lightMap.channel),bumpMapUv:fe&&w(A.bumpMap.channel),normalMapUv:Te&&w(A.normalMap.channel),displacementMapUv:ie&&w(A.displacementMap.channel),emissiveMapUv:Re&&w(A.emissiveMap.channel),metalnessMapUv:Se&&w(A.metalnessMap.channel),roughnessMapUv:Ce&&w(A.roughnessMap.channel),anisotropyMapUv:Et&&w(A.anisotropyMap.channel),clearcoatMapUv:Xt&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:$t&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:D&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:q&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:rt&&w(A.sheenRoughnessMap.channel),specularMapUv:ut&&w(A.specularMap.channel),specularColorMapUv:Dt&&w(A.specularColorMap.channel),specularIntensityMapUv:Lt&&w(A.specularIntensityMap.channel),transmissionMapUv:Gt&&w(A.transmissionMap.channel),thicknessMapUv:H&&w(A.thicknessMap.channel),alphaMapUv:mt&&w(A.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Te||at),vertexNormals:!!K.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!K.attributes.uv&&(oe||mt),fog:!!Z,useFog:A.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||K.attributes.normal===void 0&&Te===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Rt,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Tt,numSunLights:k.sun.length,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numSunLightShadows:k.sunShadowMap.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,decodeVideoTexture:oe&&A.map.isVideoTexture===!0&&Le.getTransfer(A.map.colorSpace)===Ve,decodeVideoTextureEmissive:Re&&A.emissiveMap.isVideoTexture===!0&&Le.getTransfer(A.emissiveMap.colorSpace)===Ve,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===bn,flipSided:A.side===Pn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Nt&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&A.extensions.multiDraw===!0||Ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return re.vertexUv1s=f.has(1),re.vertexUv2s=f.has(2),re.vertexUv3s=f.has(3),f.clear(),re}function S(A){let k=[];if(A.shaderID?k.push(A.shaderID):(k.push(A.customVertexShaderID),k.push(A.customFragmentShaderID)),A.defines!==void 0)for(let G in A.defines)k.push(G),k.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(x(k,A),L(k,A),k.push(n.outputColorSpace)),k.push(A.customProgramCacheKey),k.join()}function x(A,k){A.push(k.precision),A.push(k.outputColorSpace),A.push(k.envMapMode),A.push(k.envMapCubeUVHeight),A.push(k.mapUv),A.push(k.alphaMapUv),A.push(k.lightMapUv),A.push(k.aoMapUv),A.push(k.bumpMapUv),A.push(k.normalMapUv),A.push(k.displacementMapUv),A.push(k.emissiveMapUv),A.push(k.metalnessMapUv),A.push(k.roughnessMapUv),A.push(k.anisotropyMapUv),A.push(k.clearcoatMapUv),A.push(k.clearcoatNormalMapUv),A.push(k.clearcoatRoughnessMapUv),A.push(k.iridescenceMapUv),A.push(k.iridescenceThicknessMapUv),A.push(k.sheenColorMapUv),A.push(k.sheenRoughnessMapUv),A.push(k.specularMapUv),A.push(k.specularColorMapUv),A.push(k.specularIntensityMapUv),A.push(k.transmissionMapUv),A.push(k.thicknessMapUv),A.push(k.combine),A.push(k.fogExp2),A.push(k.sizeAttenuation),A.push(k.morphTargetsCount),A.push(k.morphAttributeCount),A.push(k.numSunLights),A.push(k.numDirLights),A.push(k.numPointLights),A.push(k.numSpotLights),A.push(k.numSpotLightMaps),A.push(k.numHemiLights),A.push(k.numRectAreaLights),A.push(k.numSunLightShadows),A.push(k.numDirLightShadows),A.push(k.numPointLightShadows),A.push(k.numSpotLightShadows),A.push(k.numSpotLightShadowsWithMaps),A.push(k.numLightProbes),A.push(k.shadowMapType),A.push(k.toneMapping),A.push(k.numClippingPlanes),A.push(k.numClipIntersection),A.push(k.depthPacking)}function L(A,k){l.disableAll(),k.instancing&&l.enable(0),k.instancingColor&&l.enable(1),k.instancingMorph&&l.enable(2),k.matcap&&l.enable(3),k.envMap&&l.enable(4),k.normalMapObjectSpace&&l.enable(5),k.normalMapTangentSpace&&l.enable(6),k.clearcoat&&l.enable(7),k.iridescence&&l.enable(8),k.alphaTest&&l.enable(9),k.vertexColors&&l.enable(10),k.vertexAlphas&&l.enable(11),k.vertexUv1s&&l.enable(12),k.vertexUv2s&&l.enable(13),k.vertexUv3s&&l.enable(14),k.vertexTangents&&l.enable(15),k.anisotropy&&l.enable(16),k.alphaHash&&l.enable(17),k.batching&&l.enable(18),k.dispersion&&l.enable(19),k.retroreflection&&l.enable(24),k.batchingColor&&l.enable(20),k.gradientMap&&l.enable(21),k.packedNormalMap&&l.enable(22),k.vertexNormals&&l.enable(23),A.push(l.mask),l.disableAll(),k.fog&&l.enable(0),k.useFog&&l.enable(1),k.flatShading&&l.enable(2),k.logarithmicDepthBuffer&&l.enable(3),k.reversedDepthBuffer&&l.enable(4),k.skinning&&l.enable(5),k.morphTargets&&l.enable(6),k.morphNormals&&l.enable(7),k.morphColors&&l.enable(8),k.premultipliedAlpha&&l.enable(9),k.shadowMapEnabled&&l.enable(10),k.doubleSided&&l.enable(11),k.flipSided&&l.enable(12),k.useDepthPacking&&l.enable(13),k.dithering&&l.enable(14),k.transmission&&l.enable(15),k.sheen&&l.enable(16),k.opaque&&l.enable(17),k.pointsUvs&&l.enable(18),k.decodeVideoTexture&&l.enable(19),k.decodeVideoTextureEmissive&&l.enable(20),k.alphaToCoverage&&l.enable(21),k.numLightProbeGrids>0&&l.enable(22),k.hasPositionAttribute&&l.enable(23),A.push(l.mask)}function V(A){let k=b[A.type],G;if(k){let $=wi[k];G=Ad.clone($.uniforms)}else G=A.uniforms;return G}function C(A,k){let G=g.get(k);return G!==void 0?++G.usedTimes:(G=new eM(n,k,A,r),d.push(G),g.set(k,G)),G}function N(A){if(--A.usedTimes===0){let k=d.indexOf(A);d[k]=d[d.length-1],d.pop(),g.delete(A.cacheKey),A.destroy()}}function O(A){h.remove(A)}function z(){h.dispose()}return{getParameters:T,getProgramCacheKey:S,getUniforms:V,acquireProgram:C,releaseProgram:N,releaseShaderCache:O,programs:d,dispose:z}}function sM(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let h=n.get(l);return h===void 0&&(h={},n.set(l,h)),h}function i(l){n.delete(l)}function r(l,h,f){n.get(l)[h]=f}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:o}}function oM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function $d(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function qd(){let n=[],t=0,e=[],i=[],r=[];function o(){t=0,e.length=0,i.length=0,r.length=0}function l(_){let b=0;return _.isInstancedMesh&&(b+=2),_.isSkinnedMesh&&(b+=1),b}function h(_,b,w,T,S,x){let L=n[t];return L===void 0?(L={id:_.id,object:_,geometry:b,material:w,materialVariant:l(_),groupOrder:T,renderOrder:_.renderOrder,z:S,group:x},n[t]=L):(L.id=_.id,L.object=_,L.geometry=b,L.material=w,L.materialVariant=l(_),L.groupOrder=T,L.renderOrder=_.renderOrder,L.z=S,L.group=x),t++,L}function f(_,b,w,T,S,x,L){L.reversedDepth===!0&&(S=-S);let V=h(_,b,w,T,S,x);w.transmission>0?i.push(V):w.transparent===!0?r.push(V):e.push(V)}function d(_,b,w,T,S,x){let L=h(_,b,w,T,S,x);w.transmission>0?i.unshift(L):w.transparent===!0?r.unshift(L):e.unshift(L)}function g(_,b){e.length>1&&e.sort(_||oM),i.length>1&&i.sort(b||$d),r.length>1&&r.sort(b||$d)}function v(){for(let _=t,b=n.length;_<b;_++){let w=n[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:i,transparent:r,init:o,push:f,unshift:d,finish:v,sort:g}}function aM(){let n=new WeakMap;function t(i,r){let o=n.get(i),l;return o===void 0?(l=new qd,n.set(i,[l])):r>=o.length?(l=new qd,o.push(l)):l=o[r],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function lM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ct,color:new Me};break;case"SpotLight":e={position:new ct,direction:new ct,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ct,color:new Me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ct,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":e={color:new Me,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return n[t.id]=e,e}}}function cM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function uM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function fM(n){let t=new lM,e=cM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ct);let r=new ct,o=new Xe,l=new Xe;function h(d){let g=0,v=0,_=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let b=0,w=0,T=0,S=0,x=0,L=0,V=0,C=0,N=0,O=0,z=0,A=0,k=0,G=0;d.sort(uM);for(let J=0,j=d.length;J<j;J++){let Z=d[J],K=Z.color,lt=Z.intensity,dt=Z.distance,bt=null;if(Z.shadow&&Z.shadow.map&&(Z.shadow.map.texture.format===mr?bt=Z.shadow.map.texture:bt=Z.shadow.map.depthTexture||Z.shadow.map.texture),Z.isAmbientLight)g+=K.r*lt,v+=K.g*lt,_+=K.b*lt;else if(Z.isLightProbe){for(let yt=0;yt<9;yt++)i.probe[yt].addScaledVector(Z.sh.coefficients[yt],lt);G++}else if(Z.isSunLight){let yt=t.get(Z);if(yt.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let wt=Z.shadow,Pt=e.get(Z);Pt.shadowIntensity=wt.intensity,Pt.shadowBias=wt.bias,Pt.shadowNormalBias=wt.normalBias,Pt.shadowRadius=wt.radius,Pt.shadowMapSize.copy(wt.mapSize).multiply(wt.getFrameExtents()),i.sunShadow[w]=Pt,i.sunShadowMap[w]=bt;let ht=wt.getViewportCount();for(let Tt=0;Tt<ht;Tt++)i.sunShadowMatrix[T+Tt]=wt.getMatrix(Tt),i.sunShadowCascade[T+Tt]=wt._cascadeData[Tt];T+=ht,w++}i.sun[b]=yt,b++}else if(Z.isDirectionalLight){let yt=t.get(Z);if(yt.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let wt=Z.shadow,Pt=e.get(Z);Pt.shadowIntensity=wt.intensity,Pt.shadowBias=wt.bias,Pt.shadowNormalBias=wt.normalBias,Pt.shadowRadius=wt.radius,Pt.shadowMapSize=wt.mapSize,i.directionalShadow[S]=Pt,i.directionalShadowMap[S]=bt,i.directionalShadowMatrix[S]=Z.shadow.matrix,N++}i.directional[S]=yt,S++}else if(Z.isSpotLight){let yt=t.get(Z);yt.position.setFromMatrixPosition(Z.matrixWorld),yt.color.copy(K).multiplyScalar(lt),yt.distance=dt,yt.coneCos=Math.cos(Z.angle),yt.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),yt.decay=Z.decay,i.spot[L]=yt;let wt=Z.shadow;if(Z.map&&(i.spotLightMap[A]=Z.map,A++,wt.updateMatrices(Z),Z.castShadow&&k++),i.spotLightMatrix[L]=wt.matrix,Z.castShadow){let Pt=e.get(Z);Pt.shadowIntensity=wt.intensity,Pt.shadowBias=wt.bias,Pt.shadowNormalBias=wt.normalBias,Pt.shadowRadius=wt.radius,Pt.shadowMapSize=wt.mapSize,i.spotShadow[L]=Pt,i.spotShadowMap[L]=bt,z++}L++}else if(Z.isRectAreaLight){let yt=t.get(Z);yt.color.copy(K).multiplyScalar(lt),yt.halfWidth.set(Z.width*.5,0,0),yt.halfHeight.set(0,Z.height*.5,0),i.rectArea[V]=yt,V++}else if(Z.isPointLight){let yt=t.get(Z);if(yt.color.copy(Z.color).multiplyScalar(Z.intensity),yt.distance=Z.distance,yt.decay=Z.decay,Z.castShadow){let wt=Z.shadow,Pt=e.get(Z);Pt.shadowIntensity=wt.intensity,Pt.shadowBias=wt.bias,Pt.shadowNormalBias=wt.normalBias,Pt.shadowRadius=wt.radius,Pt.shadowMapSize=wt.mapSize,Pt.shadowCameraNear=wt.camera.near,Pt.shadowCameraFar=wt.camera.far,i.pointShadow[x]=Pt,i.pointShadowMap[x]=bt,i.pointShadowMatrix[x]=Z.shadow.matrix,O++}i.point[x]=yt,x++}else if(Z.isHemisphereLight){let yt=t.get(Z);yt.skyColor.copy(Z.color).multiplyScalar(lt),yt.groundColor.copy(Z.groundColor).multiplyScalar(lt),i.hemi[C]=yt,C++}}V>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Kt.LTC_FLOAT_1,i.rectAreaLTC2=Kt.LTC_FLOAT_2):(i.rectAreaLTC1=Kt.LTC_HALF_1,i.rectAreaLTC2=Kt.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=_;let $=i.hash;($.sunLength!==b||$.directionalLength!==S||$.pointLength!==x||$.spotLength!==L||$.rectAreaLength!==V||$.hemiLength!==C||$.numSunShadows!==w||$.numDirectionalShadows!==N||$.numPointShadows!==O||$.numSpotShadows!==z||$.numSpotMaps!==A||$.numLightProbes!==G)&&(i.sun.length=b,i.directional.length=S,i.spot.length=L,i.rectArea.length=V,i.point.length=x,i.hemi.length=C,i.sunShadow.length=w,i.sunShadowMap.length=w,i.sunShadowMatrix.length=T,i.sunShadowCascade.length=T,i.directionalShadow.length=N,i.directionalShadowMap.length=N,i.directionalShadowMatrix.length=N,i.pointShadow.length=O,i.pointShadowMap.length=O,i.pointShadowMatrix.length=O,i.spotShadow.length=z,i.spotShadowMap.length=z,i.spotLightMatrix.length=z+A-k,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=G,$.sunLength=b,$.directionalLength=S,$.pointLength=x,$.spotLength=L,$.rectAreaLength=V,$.hemiLength=C,$.numSunShadows=w,$.numDirectionalShadows=N,$.numPointShadows=O,$.numSpotShadows=z,$.numSpotMaps=A,$.numLightProbes=G,i.version=hM++)}function f(d,g){let v=0,_=0,b=0,w=0,T=0,S=0,x=g.matrixWorldInverse;for(let L=0,V=d.length;L<V;L++){let C=d[L];if(C.isSunLight){let N=i.sun[v];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(x),v++}else if(C.isDirectionalLight){let N=i.directional[_];N.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(x),_++}else if(C.isSpotLight){let N=i.spot[w];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(x),w++}else if(C.isRectAreaLight){let N=i.rectArea[T];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),l.identity(),o.copy(C.matrixWorld),o.premultiply(x),l.extractRotation(o),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(l),N.halfHeight.applyMatrix4(l),T++}else if(C.isPointLight){let N=i.point[b];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),b++}else if(C.isHemisphereLight){let N=i.hemi[S];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(x),S++}}}return{setup:h,setupView:f,state:i}}function Zd(n){let t=new fM(n),e=[],i=[],r=[];function o(_){v.camera=_,e.length=0,i.length=0,r.length=0}function l(_){e.push(_)}function h(_){i.push(_)}function f(_){r.push(_)}function d(){t.setup(e)}function g(_){t.setupView(e,_)}let v={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:d,setupLightsView:g,pushLight:l,pushShadow:h,pushLightProbeGrid:f}}function dM(n){let t=new WeakMap;function e(r,o=0){let l=t.get(r),h;return l===void 0?(h=new Zd(n),t.set(r,[h])):o>=l.length?(h=new Zd(n),l.push(h)):h=l[o],h}function i(){t=new WeakMap}return{get:e,dispose:i}}function vM(n,t,e){let i=new Ms,r=new ce,o=new ce,l=new Ke,h=new ja,f=new Ka,d={},g=e.maxTextureSize,v={[ur]:Pn,[Pn]:ur,[bn]:bn},_=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:pM,fragmentShader:mM}),b=_.clone();b.defines.HORIZONTAL_PASS=1;let w=new je;w.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new Ue(w,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let x=this.type;this.render=function(O,z,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;this.type===Xf&&(de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Co);let k=n.getRenderTarget(),G=n.getActiveCubeFace(),$=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Si),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let j=x!==this.type;j&&z.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(K=>K.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,K=O.length;Z<K;Z++){let lt=O[Z],dt=lt.shadow;if(dt===void 0){de("WebGLShadowMap:",lt,"has no shadow.");continue}if(dt.autoUpdate===!1&&dt.needsUpdate===!1)continue;r.copy(dt.mapSize);let bt=dt.getFrameExtents();r.multiply(bt),o.copy(dt.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(o.x=Math.floor(g/bt.x),r.x=o.x*bt.x,dt.mapSize.x=o.x),r.y>g&&(o.y=Math.floor(g/bt.y),r.y=o.y*bt.y,dt.mapSize.y=o.y));let yt=n.state.buffers.depth.getReversed();if(dt.camera._reversedDepth=yt,dt.map===null||j===!0){if(dt.map!==null&&(dt.map.depthTexture!==null&&(dt.map.depthTexture.dispose(),dt.map.depthTexture=null),dt.map.dispose()),this.type===As){if(lt.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}dt.map=new Ln(r.x,r.y,{format:mr,type:hi,minFilter:mn,magFilter:mn,generateMipmaps:!1}),dt.map.texture.name=lt.name+".shadowMap",dt.map.depthTexture=new ir(r.x,r.y,ci),dt.map.depthTexture.name=lt.name+".shadowMapDepth",dt.map.depthTexture.format=yi,dt.map.depthTexture.compareFunction=null,dt.map.depthTexture.minFilter=dn,dt.map.depthTexture.magFilter=dn}else lt.isPointLight?(dt.map=new ic(r.x),dt.map.depthTexture=new Za(r.x,li)):(dt.map=new Ln(r.x,r.y),dt.map.depthTexture=new ir(r.x,r.y,li)),dt.map.depthTexture.name=lt.name+".shadowMap",dt.map.depthTexture.format=yi,this.type===Co?(dt.map.depthTexture.compareFunction=yt?Ql:Kl,dt.map.depthTexture.minFilter=mn,dt.map.depthTexture.magFilter=mn):(dt.map.depthTexture.compareFunction=null,dt.map.depthTexture.minFilter=dn,dt.map.depthTexture.magFilter=dn);dt.camera.updateProjectionMatrix()}dt.map.isWebGLCubeRenderTarget!==!0&&(dt.map.width!==r.x||dt.map.height!==r.y)&&dt.map.setSize(r.x,r.y);let wt=dt.map.isWebGLCubeRenderTarget?6:dt.getViewportCount();lt.isPointLight!==!0&&dt.updateMatrices(lt,A);for(let Pt=0;Pt<wt;Pt++){let ht=dt.getCamera(Pt);if(lt.isPointLight){let Tt=dt.camera,Wt=dt.matrix,Ht=lt.distance||Tt.far;Ht!==Tt.far&&(Tt.far=Ht,Tt.updateProjectionMatrix()),Bo.setFromMatrixPosition(lt.matrixWorld),Tt.position.copy(Bo),iu.copy(Tt.position),iu.add(gM[Pt]),Tt.up.copy(_M[Pt]),Tt.lookAt(iu),Tt.updateMatrixWorld(),Wt.makeTranslation(-Bo.x,-Bo.y,-Bo.z),Jd.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),dt._frustum.setFromProjectionMatrix(Jd,Tt.coordinateSystem,Tt.reversedDepth)}if(dt.map.isWebGLCubeRenderTarget)n.setRenderTarget(dt.map,Pt),n.clear();else{Pt===0&&(n.setRenderTarget(dt.map),n.clear());let Tt=dt.getViewport(Pt);l.set(o.x*Tt.x,o.y*Tt.y,o.x*Tt.z,o.y*Tt.w),J.viewport(l)}i=dt.getFrustum(Pt),C(z,A,ht,lt,this.type)}dt.isPointLightShadow!==!0&&this.type===As&&L(dt,A),dt.needsUpdate=!1}x=this.type,S.needsUpdate=!1,n.setRenderTarget(k,G,$)};function L(O,z){let A=t.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,b.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),O.mapPass===null?O.mapPass=new Ln(r.x,r.y,{format:mr,type:hi}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),_.uniforms.shadow_pass.value=O.map.depthTexture,_.uniforms.resolution.value.set(O.map.width,O.map.height),_.uniforms.radius.value=O.radius,n.setRenderTarget(O.mapPass),n.clear(),n.renderBufferDirect(z,null,A,_,T,null),b.uniforms.shadow_pass.value=O.mapPass.texture,b.uniforms.resolution.value.set(O.map.width,O.map.height),b.uniforms.radius.value=O.radius,n.setRenderTarget(O.map),n.clear(),n.renderBufferDirect(z,null,A,b,T,null)}function V(O,z,A,k){let G=null,$=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if($!==void 0)G=$;else if(G=A.isPointLight===!0?f:h,n.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){let J=G.uuid,j=z.uuid,Z=d[J];Z===void 0&&(Z={},d[J]=Z);let K=Z[j];K===void 0&&(K=G.clone(),Z[j]=K,z.addEventListener("dispose",N)),G=K}if(G.visible=z.visible,G.wireframe=z.wireframe,k===As?G.side=z.shadowSide!==null?z.shadowSide:z.side:G.side=z.shadowSide!==null?z.shadowSide:v[z.side],G.alphaMap=z.alphaMap,G.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,G.map=z.map,G.clipShadows=z.clipShadows,G.clippingPlanes=z.clippingPlanes,G.clipIntersection=z.clipIntersection,G.displacementMap=z.displacementMap,G.displacementScale=z.displacementScale,G.displacementBias=z.displacementBias,G.wireframeLinewidth=z.wireframeLinewidth,G.linewidth=z.linewidth,A.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let J=n.properties.get(G);J.light=A}return G}function C(O,z,A,k,G){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&G===As)&&(!O.frustumCulled||O.intersectsFrustum(i))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);let j=t.update(O),Z=O.material;if(Array.isArray(Z)){let K=j.groups;for(let lt=0,dt=K.length;lt<dt;lt++){let bt=K[lt],yt=Z[bt.materialIndex];if(yt&&yt.visible){let wt=V(O,yt,k,G);O.onBeforeShadow(n,O,z,A,j,wt,bt),n.renderBufferDirect(A,null,j,wt,O,bt),O.onAfterShadow(n,O,z,A,j,wt,bt)}}}else if(Z.visible){let K=V(O,Z,k,G);O.onBeforeShadow(n,O,z,A,j,K,null),n.renderBufferDirect(A,null,j,K,O,null),O.onAfterShadow(n,O,z,A,j,K,null)}}let J=O.children;for(let j=0,Z=J.length;j<Z;j++)C(J[j],z,A,k,G)}function N(O){O.target.removeEventListener("dispose",N);for(let A in d){let k=d[A],G=O.target.uuid;G in k&&(k[G].dispose(),delete k[G])}}}function yM(n,t){function e(){let H=!1,It=new Ke,mt=null,Ut=new Ke(0,0,0,0);return{setMask:function(Yt){mt!==Yt&&!H&&(n.colorMask(Yt,Yt,Yt,Yt),mt=Yt)},setLocked:function(Yt){H=Yt},setClear:function(Yt,Nt,Bt,re,ze){ze===!0&&(Yt*=re,Nt*=re,Bt*=re),It.set(Yt,Nt,Bt,re),Ut.equals(It)===!1&&(n.clearColor(Yt,Nt,Bt,re),Ut.copy(It))},reset:function(){H=!1,mt=null,Ut.set(-1,0,0,0)}}}function i(){let H=!1,It=!1,mt=null,Ut=null,Yt=null;return{setReversed:function(Nt){if(It!==Nt){let Bt=t.get("EXT_clip_control");Nt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),It=Nt;let re=Yt;Yt=null,this.setClear(re)}},getReversed:function(){return It},setTest:function(Nt){Nt?X(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(Nt){mt!==Nt&&!H&&(n.depthMask(Nt),mt=Nt)},setFunc:function(Nt){if(It&&(Nt=wd[Nt]),Ut!==Nt){switch(Nt){case La:n.depthFunc(n.NEVER);break;case Na:n.depthFunc(n.ALWAYS);break;case Da:n.depthFunc(n.LESS);break;case ds:n.depthFunc(n.LEQUAL);break;case Oa:n.depthFunc(n.EQUAL);break;case Fa:n.depthFunc(n.GEQUAL);break;case Ua:n.depthFunc(n.GREATER);break;case Ba:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ut=Nt}},setLocked:function(Nt){H=Nt},setClear:function(Nt){Yt!==Nt&&(Yt=Nt,It&&(Nt=1-Nt),n.clearDepth(Nt))},reset:function(){H=!1,mt=null,Ut=null,Yt=null,It=!1}}}function r(){let H=!1,It=null,mt=null,Ut=null,Yt=null,Nt=null,Bt=null,re=null,ze=null;return{setTest:function(De){H||(De?X(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(De){It!==De&&!H&&(n.stencilMask(De),It=De)},setFunc:function(De,En,In){(mt!==De||Ut!==En||Yt!==In)&&(n.stencilFunc(De,En,In),mt=De,Ut=En,Yt=In)},setOp:function(De,En,In){(Nt!==De||Bt!==En||re!==In)&&(n.stencilOp(De,En,In),Nt=De,Bt=En,re=In)},setLocked:function(De){H=De},setClear:function(De){ze!==De&&(n.clearStencil(De),ze=De)},reset:function(){H=!1,It=null,mt=null,Ut=null,Yt=null,Nt=null,Bt=null,re=null,ze=null}}}let o=new e,l=new i,h=new r,f=new WeakMap,d=new WeakMap,g={},v={},_={},b=new WeakMap,w=[],T=null,S=!1,x=null,L=null,V=null,C=null,N=null,O=null,z=null,A=new Me(0,0,0),k=0,G=!1,$=null,J=null,j=null,Z=null,K=null,lt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),dt=!1,bt=0,yt=n.getParameter(n.VERSION);yt.indexOf("WebGL")!==-1?(bt=parseFloat(/^WebGL (\d)/.exec(yt)[1]),dt=bt>=1):yt.indexOf("OpenGL ES")!==-1&&(bt=parseFloat(/^OpenGL ES (\d)/.exec(yt)[1]),dt=bt>=2);let wt=null,Pt={},ht=n.getParameter(n.SCISSOR_BOX),Tt=n.getParameter(n.VIEWPORT),Wt=new Ke().fromArray(ht),Ht=new Ke().fromArray(Tt);function zt(H,It,mt,Ut){let Yt=new Uint8Array(4),Nt=n.createTexture();n.bindTexture(H,Nt),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<mt;Bt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(It,0,n.RGBA,1,1,Ut,0,n.RGBA,n.UNSIGNED_BYTE,Yt):n.texImage2D(It+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Yt);return Nt}let _t={};_t[n.TEXTURE_2D]=zt(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=zt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=zt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=zt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),X(n.DEPTH_TEST),l.setFunc(ds),fe(!1),Te(Mh),X(n.CULL_FACE),ue(Si);function X(H){g[H]!==!0&&(n.enable(H),g[H]=!0)}function Rt(H){g[H]!==!1&&(n.disable(H),g[H]=!1)}function Qt(H,It){return _[H]!==It?(n.bindFramebuffer(H,It),_[H]=It,H===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=It),H===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=It),!0):!1}function Ft(H,It){let mt=w,Ut=!1;if(H){mt=b.get(It),mt===void 0&&(mt=[],b.set(It,mt));let Yt=H.textures;if(mt.length!==Yt.length||mt[0]!==n.COLOR_ATTACHMENT0){for(let Nt=0,Bt=Yt.length;Nt<Bt;Nt++)mt[Nt]=n.COLOR_ATTACHMENT0+Nt;mt.length=Yt.length,Ut=!0}}else mt[0]!==n.BACK&&(mt[0]=n.BACK,Ut=!0);Ut&&n.drawBuffers(mt)}function oe(H){return T!==H?(n.useProgram(H),T=H,!0):!1}let Ie={[Pr]:n.FUNC_ADD,[Yf]:n.FUNC_SUBTRACT,[$f]:n.FUNC_REVERSE_SUBTRACT};Ie[qf]=n.MIN,Ie[Zf]=n.MAX;let pe={[Jf]:n.ZERO,[jf]:n.ONE,[Kf]:n.SRC_COLOR,[Eh]:n.SRC_ALPHA,[rd]:n.SRC_ALPHA_SATURATE,[nd]:n.DST_COLOR,[td]:n.DST_ALPHA,[Qf]:n.ONE_MINUS_SRC_COLOR,[Th]:n.ONE_MINUS_SRC_ALPHA,[id]:n.ONE_MINUS_DST_COLOR,[ed]:n.ONE_MINUS_DST_ALPHA,[sd]:n.CONSTANT_COLOR,[od]:n.ONE_MINUS_CONSTANT_COLOR,[ad]:n.CONSTANT_ALPHA,[ld]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(H,It,mt,Ut,Yt,Nt,Bt,re,ze,De){if(H===Si){S===!0&&(Rt(n.BLEND),S=!1);return}if(S===!1&&(X(n.BLEND),S=!0),H!==Wf){if(H!==x||De!==G){if((L!==Pr||N!==Pr)&&(n.blendEquation(n.FUNC_ADD),L=Pr,N=Pr),De)switch(H){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sh:n.blendFunc(n.ONE,n.ONE);break;case bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_e("WebGLState: Invalid blending: ",H);break}else switch(H){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bh:_e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:_e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_e("WebGLState: Invalid blending: ",H);break}V=null,C=null,O=null,z=null,A.set(0,0,0),k=0,x=H,G=De}return}Yt=Yt||It,Nt=Nt||mt,Bt=Bt||Ut,(It!==L||Yt!==N)&&(n.blendEquationSeparate(Ie[It],Ie[Yt]),L=It,N=Yt),(mt!==V||Ut!==C||Nt!==O||Bt!==z)&&(n.blendFuncSeparate(pe[mt],pe[Ut],pe[Nt],pe[Bt]),V=mt,C=Ut,O=Nt,z=Bt),(re.equals(A)===!1||ze!==k)&&(n.blendColor(re.r,re.g,re.b,ze),A.copy(re),k=ze),x=H,G=!1}function ve(H,It){H.side===bn?Rt(n.CULL_FACE):X(n.CULL_FACE);let mt=H.side===Pn;It&&(mt=!mt),fe(mt),H.blending===Cs&&H.transparent===!1?ue(Si):ue(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),o.setMask(H.colorWrite);let Ut=H.stencilWrite;h.setTest(Ut),Ut&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Re(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(H){$!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),$=H)}function Te(H){H!==Hf?(X(n.CULL_FACE),H!==J&&(H===Mh?n.cullFace(n.BACK):H===Gf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),J=H}function ie(H){H!==j&&(dt&&n.lineWidth(H),j=H)}function Re(H,It,mt){H?(X(n.POLYGON_OFFSET_FILL),(Z!==It||K!==mt)&&(Z=It,K=mt,l.getReversed()&&(It=-It),n.polygonOffset(It,mt))):Rt(n.POLYGON_OFFSET_FILL)}function Se(H){H?X(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function Ce(H){H===void 0&&(H=n.TEXTURE0+lt-1),wt!==H&&(n.activeTexture(H),wt=H)}function at(H,It,mt){mt===void 0&&(wt===null?mt=n.TEXTURE0+lt-1:mt=wt);let Ut=Pt[mt];Ut===void 0&&(Ut={type:void 0,texture:void 0},Pt[mt]=Ut),(Ut.type!==H||Ut.texture!==It)&&(wt!==mt&&(n.activeTexture(mt),wt=mt),n.bindTexture(H,It||_t[H]),Ut.type=H,Ut.texture=It)}function ke(){let H=Pt[wt];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function me(){try{n.compressedTexImage2D(...arguments)}catch(H){_e("WebGLState:",H)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(H){_e("WebGLState:",H)}}function P(){try{n.texSubImage2D(...arguments)}catch(H){_e("WebGLState:",H)}}function it(){try{n.texSubImage3D(...arguments)}catch(H){_e("WebGLState:",H)}}function pt(){try{n.compressedTexSubImage2D(...arguments)}catch(H){_e("WebGLState:",H)}}function Et(){try{n.compressedTexSubImage3D(...arguments)}catch(H){_e("WebGLState:",H)}}function Xt(){try{n.texStorage2D(...arguments)}catch(H){_e("WebGLState:",H)}}function $t(){try{n.texStorage3D(...arguments)}catch(H){_e("WebGLState:",H)}}function xt(){try{n.texImage2D(...arguments)}catch(H){_e("WebGLState:",H)}}function D(){try{n.texImage3D(...arguments)}catch(H){_e("WebGLState:",H)}}function q(H){return v[H]!==void 0?v[H]:n.getParameter(H)}function Q(H,It){v[H]!==It&&(n.pixelStorei(H,It),v[H]=It)}function rt(H){Wt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Wt.copy(H))}function ut(H){Ht.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ht.copy(H))}function Dt(H,It){let mt=d.get(It);mt===void 0&&(mt=new WeakMap,d.set(It,mt));let Ut=mt.get(H);Ut===void 0&&(Ut=n.getUniformBlockIndex(It,H.name),mt.set(H,Ut))}function Lt(H,It){let Ut=d.get(It).get(H);f.get(It)!==Ut&&(n.uniformBlockBinding(It,Ut,H.__bindingPointIndex),f.set(It,Ut))}function Gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},v={},wt=null,Pt={},_={},b=new WeakMap,w=[],T=null,S=!1,x=null,L=null,V=null,C=null,N=null,O=null,z=null,A=new Me(0,0,0),k=0,G=!1,$=null,J=null,j=null,Z=null,K=null,Wt.set(0,0,n.canvas.width,n.canvas.height),Ht.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:X,disable:Rt,bindFramebuffer:Qt,drawBuffers:Ft,useProgram:oe,setBlending:ue,setMaterial:ve,setFlipSided:fe,setCullFace:Te,setLineWidth:ie,setPolygonOffset:Re,setScissorTest:Se,activeTexture:Ce,bindTexture:at,unbindTexture:ke,compressedTexImage2D:me,compressedTexImage3D:Y,texImage2D:xt,texImage3D:D,pixelStorei:Q,getParameter:q,updateUBOMapping:Dt,uniformBlockBinding:Lt,texStorage2D:Xt,texStorage3D:$t,texSubImage2D:P,texSubImage3D:it,compressedTexSubImage2D:pt,compressedTexSubImage3D:Et,scissor:rt,viewport:ut,reset:Gt}}function xM(n,t,e,i,r,o,l){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ce,g=new WeakMap,v=new Set,_,b=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(Y,P){return w?new OffscreenCanvas(Y,P):oo("canvas")}function S(Y,P,it){let pt=1,Et=me(Y);if((Et.width>it||Et.height>it)&&(pt=it/Math.max(Et.width,Et.height)),pt<1)if(typeof HTMLImageElement<"u"&&Y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Y instanceof ImageBitmap||typeof VideoFrame<"u"&&Y instanceof VideoFrame){let Xt=Math.floor(pt*Et.width),$t=Math.floor(pt*Et.height);_===void 0&&(_=T(Xt,$t));let xt=P?T(Xt,$t):_;return xt.width=Xt,xt.height=$t,xt.getContext("2d").drawImage(Y,0,0,Xt,$t),de("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+Xt+"x"+$t+")."),xt}else return"data"in Y&&de("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),Y;return Y}function x(Y){return Y.generateMipmaps}function L(Y){n.generateMipmap(Y)}function V(Y){return Y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:Y.isWebGL3DRenderTarget?n.TEXTURE_3D:Y.isWebGLArrayRenderTarget||Y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(Y,P,it,pt,Et,Xt=!1){if(Y!==null){if(n[Y]!==void 0)return n[Y];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Y+"'")}let $t;pt&&($t=t.get("EXT_texture_norm16"),$t||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xt=P;if(P===n.RED&&(it===n.FLOAT&&(xt=n.R32F),it===n.HALF_FLOAT&&(xt=n.R16F),it===n.UNSIGNED_BYTE&&(xt=n.R8),it===n.UNSIGNED_SHORT&&$t&&(xt=$t.R16_EXT),it===n.SHORT&&$t&&(xt=$t.R16_SNORM_EXT)),P===n.RED_INTEGER&&(it===n.UNSIGNED_BYTE&&(xt=n.R8UI),it===n.UNSIGNED_SHORT&&(xt=n.R16UI),it===n.UNSIGNED_INT&&(xt=n.R32UI),it===n.BYTE&&(xt=n.R8I),it===n.SHORT&&(xt=n.R16I),it===n.INT&&(xt=n.R32I)),P===n.RG&&(it===n.FLOAT&&(xt=n.RG32F),it===n.HALF_FLOAT&&(xt=n.RG16F),it===n.UNSIGNED_BYTE&&(xt=n.RG8),it===n.UNSIGNED_SHORT&&$t&&(xt=$t.RG16_EXT),it===n.SHORT&&$t&&(xt=$t.RG16_SNORM_EXT)),P===n.RG_INTEGER&&(it===n.UNSIGNED_BYTE&&(xt=n.RG8UI),it===n.UNSIGNED_SHORT&&(xt=n.RG16UI),it===n.UNSIGNED_INT&&(xt=n.RG32UI),it===n.BYTE&&(xt=n.RG8I),it===n.SHORT&&(xt=n.RG16I),it===n.INT&&(xt=n.RG32I)),P===n.RGB_INTEGER&&(it===n.UNSIGNED_BYTE&&(xt=n.RGB8UI),it===n.UNSIGNED_SHORT&&(xt=n.RGB16UI),it===n.UNSIGNED_INT&&(xt=n.RGB32UI),it===n.BYTE&&(xt=n.RGB8I),it===n.SHORT&&(xt=n.RGB16I),it===n.INT&&(xt=n.RGB32I)),P===n.RGBA_INTEGER&&(it===n.UNSIGNED_BYTE&&(xt=n.RGBA8UI),it===n.UNSIGNED_SHORT&&(xt=n.RGBA16UI),it===n.UNSIGNED_INT&&(xt=n.RGBA32UI),it===n.BYTE&&(xt=n.RGBA8I),it===n.SHORT&&(xt=n.RGBA16I),it===n.INT&&(xt=n.RGBA32I)),P===n.RGB&&(it===n.UNSIGNED_SHORT&&$t&&(xt=$t.RGB16_EXT),it===n.SHORT&&$t&&(xt=$t.RGB16_SNORM_EXT),it===n.UNSIGNED_INT_5_9_9_9_REV&&(xt=n.RGB9_E5),it===n.UNSIGNED_INT_10F_11F_11F_REV&&(xt=n.R11F_G11F_B10F)),P===n.RGBA){let D=Xt?so:Le.getTransfer(Et);it===n.FLOAT&&(xt=n.RGBA32F),it===n.HALF_FLOAT&&(xt=n.RGBA16F),it===n.UNSIGNED_BYTE&&(xt=D===Ve?n.SRGB8_ALPHA8:n.RGBA8),it===n.UNSIGNED_SHORT&&$t&&(xt=$t.RGBA16_EXT),it===n.SHORT&&$t&&(xt=$t.RGBA16_SNORM_EXT),it===n.UNSIGNED_SHORT_4_4_4_4&&(xt=n.RGBA4),it===n.UNSIGNED_SHORT_5_5_5_1&&(xt=n.RGB5_A1)}return(xt===n.R16F||xt===n.R32F||xt===n.RG16F||xt===n.RG32F||xt===n.RGBA16F||xt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function N(Y,P){let it;return Y?P===null||P===li||P===Is?it=n.DEPTH24_STENCIL8:P===ci?it=n.DEPTH32F_STENCIL8:P===Ps&&(it=n.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===li||P===Is?it=n.DEPTH_COMPONENT24:P===ci?it=n.DEPTH_COMPONENT32F:P===Ps&&(it=n.DEPTH_COMPONENT16),it}function O(Y,P){return x(Y)===!0||Y.isFramebufferTexture&&Y.minFilter!==dn&&Y.minFilter!==mn?Math.log2(Math.max(P.width,P.height))+1:Y.mipmaps!==void 0&&Y.mipmaps.length>0?Y.mipmaps.length:Y.isCompressedTexture&&Array.isArray(Y.image)?P.mipmaps.length:1}function z(Y){let P=Y.target;P.removeEventListener("dispose",z),k(P),P.isVideoTexture&&g.delete(P),P.isHTMLTexture&&v.delete(P)}function A(Y){let P=Y.target;P.removeEventListener("dispose",A),$(P)}function k(Y){let P=i.get(Y);if(P.__webglInit===void 0)return;let it=Y.source,pt=b.get(it);if(pt){let Et=pt[P.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&G(Y),Object.keys(pt).length===0&&b.delete(it)}i.remove(Y)}function G(Y){let P=i.get(Y);n.deleteTexture(P.__webglTexture);let it=Y.source,pt=b.get(it);delete pt[P.__cacheKey],l.memory.textures--}function $(Y){let P=i.get(Y);if(Y.depthTexture&&(Y.depthTexture.dispose(),i.remove(Y.depthTexture)),Y.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(P.__webglFramebuffer[pt]))for(let Et=0;Et<P.__webglFramebuffer[pt].length;Et++)n.deleteFramebuffer(P.__webglFramebuffer[pt][Et]);else n.deleteFramebuffer(P.__webglFramebuffer[pt]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[pt])}else{if(Array.isArray(P.__webglFramebuffer))for(let pt=0;pt<P.__webglFramebuffer.length;pt++)n.deleteFramebuffer(P.__webglFramebuffer[pt]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let pt=0;pt<P.__webglColorRenderbuffer.length;pt++)P.__webglColorRenderbuffer[pt]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[pt]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let it=Y.textures;for(let pt=0,Et=it.length;pt<Et;pt++){let Xt=i.get(it[pt]);Xt.__webglTexture&&(n.deleteTexture(Xt.__webglTexture),l.memory.textures--),i.remove(it[pt])}i.remove(Y)}let J=0;function j(){J=0}function Z(){return J}function K(Y){J=Y}function lt(){let Y=J;return Y>=r.maxTextures&&de("WebGLTextures: Trying to use "+(Y+1)+" texture units while this GPU supports only "+r.maxTextures),J+=1,Y}function dt(Y){let P=[];return P.push(Y.wrapS),P.push(Y.wrapT),P.push(Y.wrapR||0),P.push(Y.magFilter),P.push(Y.minFilter),P.push(Y.anisotropy),P.push(Y.internalFormat),P.push(Y.format),P.push(Y.type),P.push(Y.generateMipmaps),P.push(Y.premultiplyAlpha),P.push(Y.flipY),P.push(Y.unpackAlignment),P.push(Y.colorSpace),P.join()}function bt(Y,P){let it=i.get(Y);if(Y.isVideoTexture&&at(Y),Y.isRenderTargetTexture===!1&&Y.isExternalTexture!==!0&&Y.version>0&&it.__version!==Y.version){let pt=Y.image;if(pt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(it,Y,P);return}}else Y.isExternalTexture&&(it.__webglTexture=Y.sourceTexture?Y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,it.__webglTexture,n.TEXTURE0+P)}function yt(Y,P){let it=i.get(Y);if(Y.isRenderTargetTexture===!1&&Y.version>0&&it.__version!==Y.version){Rt(it,Y,P);return}else Y.isExternalTexture&&(it.__webglTexture=Y.sourceTexture?Y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,it.__webglTexture,n.TEXTURE0+P)}function wt(Y,P){let it=i.get(Y);if(Y.isRenderTargetTexture===!1&&Y.version>0&&it.__version!==Y.version){Rt(it,Y,P);return}e.bindTexture(n.TEXTURE_3D,it.__webglTexture,n.TEXTURE0+P)}function Pt(Y,P){let it=i.get(Y);if(Y.isCubeDepthTexture!==!0&&Y.version>0&&it.__version!==Y.version){Qt(it,Y,P);return}e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture,n.TEXTURE0+P)}let ht={[ka]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},Tt={[dn]:n.NEAREST,[ud]:n.NEAREST_MIPMAP_NEAREST,[Io]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[pl]:n.LINEAR_MIPMAP_NEAREST,[dr]:n.LINEAR_MIPMAP_LINEAR},Wt={[md]:n.NEVER,[xd]:n.ALWAYS,[gd]:n.LESS,[Kl]:n.LEQUAL,[_d]:n.EQUAL,[Ql]:n.GEQUAL,[vd]:n.GREATER,[yd]:n.NOTEQUAL};function Ht(Y,P){if(P.type===ci&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===mn||P.magFilter===pl||P.magFilter===Io||P.magFilter===dr||P.minFilter===mn||P.minFilter===pl||P.minFilter===Io||P.minFilter===dr)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(Y,n.TEXTURE_WRAP_S,ht[P.wrapS]),n.texParameteri(Y,n.TEXTURE_WRAP_T,ht[P.wrapT]),(Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(Y,n.TEXTURE_WRAP_R,ht[P.wrapR]),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,Tt[P.magFilter]),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,Tt[P.minFilter]),P.compareFunction&&(n.texParameteri(Y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(Y,n.TEXTURE_COMPARE_FUNC,Wt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===dn||P.minFilter!==Io&&P.minFilter!==dr||P.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");n.texParameterf(Y,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function zt(Y,P){let it=!1;Y.__webglInit===void 0&&(Y.__webglInit=!0,P.addEventListener("dispose",z));let pt=P.source,Et=b.get(pt);Et===void 0&&(Et={},b.set(pt,Et));let Xt=dt(P);if(Xt!==Y.__cacheKey){Et[Xt]===void 0&&(Et[Xt]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,it=!0),Et[Xt].usedTimes++;let $t=Et[Y.__cacheKey];$t!==void 0&&(Et[Y.__cacheKey].usedTimes--,$t.usedTimes===0&&G(P)),Y.__cacheKey=Xt,Y.__webglTexture=Et[Xt].texture}return it}function _t(Y,P,it){return Math.floor(Math.floor(Y/it)/P)}function X(Y,P,it,pt){let Xt=Y.updateRanges;if(Xt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,P.width,P.height,it,pt,P.data);else{Xt.sort((Q,rt)=>Q.start-rt.start);let $t=0;for(let Q=1;Q<Xt.length;Q++){let rt=Xt[$t],ut=Xt[Q],Dt=rt.start+rt.count,Lt=_t(ut.start,P.width,4),Gt=_t(rt.start,P.width,4);ut.start<=Dt+1&&Lt===Gt&&_t(ut.start+ut.count-1,P.width,4)===Lt?rt.count=Math.max(rt.count,ut.start+ut.count-rt.start):(++$t,Xt[$t]=ut)}Xt.length=$t+1;let xt=e.getParameter(n.UNPACK_ROW_LENGTH),D=e.getParameter(n.UNPACK_SKIP_PIXELS),q=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,P.width);for(let Q=0,rt=Xt.length;Q<rt;Q++){let ut=Xt[Q],Dt=Math.floor(ut.start/4),Lt=Math.ceil(ut.count/4),Gt=Dt%P.width,H=Math.floor(Dt/P.width),It=Lt,mt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(n.UNPACK_SKIP_ROWS,H),e.texSubImage2D(n.TEXTURE_2D,0,Gt,H,It,mt,it,pt,P.data)}Y.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,xt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,D),e.pixelStorei(n.UNPACK_SKIP_ROWS,q)}}function Rt(Y,P,it){let pt=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(pt=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(pt=n.TEXTURE_3D);let Et=zt(Y,P),Xt=P.source;e.bindTexture(pt,Y.__webglTexture,n.TEXTURE0+it);let $t=i.get(Xt);if(Xt.version!==$t.__version||Et===!0){if(e.activeTexture(n.TEXTURE0+it),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let mt=Le.getPrimaries(Le.workingColorSpace),Ut=P.colorSpace===ki?null:Le.getPrimaries(P.colorSpace),Yt=P.colorSpace===ki||mt===Ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment);let D=S(P.image,!1,r.maxTextureSize);D=ke(P,D);let q=o.convert(P.format,P.colorSpace),Q=o.convert(P.type),rt=C(P.internalFormat,q,Q,P.normalized,P.colorSpace,P.isVideoTexture);Ht(pt,P);let ut,Dt=P.mipmaps,Lt=P.isVideoTexture!==!0,Gt=$t.__version===void 0||Et===!0,H=Xt.dataReady,It=O(P,D);if(P.isDepthTexture)rt=N(P.format===pr,P.type),Gt&&(Lt?e.texStorage2D(n.TEXTURE_2D,1,rt,D.width,D.height):e.texImage2D(n.TEXTURE_2D,0,rt,D.width,D.height,0,q,Q,null));else if(P.isDataTexture)if(Dt.length>0){Lt&&Gt&&e.texStorage2D(n.TEXTURE_2D,It,rt,Dt[0].width,Dt[0].height);for(let mt=0,Ut=Dt.length;mt<Ut;mt++)ut=Dt[mt],Lt?H&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,ut.width,ut.height,q,Q,ut.data):e.texImage2D(n.TEXTURE_2D,mt,rt,ut.width,ut.height,0,q,Q,ut.data);P.generateMipmaps=!1}else Lt?(Gt&&e.texStorage2D(n.TEXTURE_2D,It,rt,D.width,D.height),H&&X(P,D,q,Q)):e.texImage2D(n.TEXTURE_2D,0,rt,D.width,D.height,0,q,Q,D.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Lt&&Gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,rt,Dt[0].width,Dt[0].height,D.depth);for(let mt=0,Ut=Dt.length;mt<Ut;mt++)if(ut=Dt[mt],P.format!==Jn)if(q!==null)if(Lt){if(H)if(P.layerUpdates.size>0){let Yt=Jh(ut.width,ut.height,P.format,P.type);for(let Nt of P.layerUpdates){let Bt=ut.data.subarray(Nt*Yt/ut.data.BYTES_PER_ELEMENT,(Nt+1)*Yt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,Nt,ut.width,ut.height,1,q,Bt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,ut.width,ut.height,D.depth,q,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,mt,rt,ut.width,ut.height,D.depth,0,ut.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,ut.width,ut.height,D.depth,q,Q,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,mt,rt,ut.width,ut.height,D.depth,0,q,Q,ut.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{Lt&&Gt&&e.texStorage2D(n.TEXTURE_2D,It,rt,Dt[0].width,Dt[0].height);for(let mt=0,Ut=Dt.length;mt<Ut;mt++)ut=Dt[mt],P.format!==Jn?q!==null?Lt?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,mt,0,0,ut.width,ut.height,q,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,mt,rt,ut.width,ut.height,0,ut.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?H&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,ut.width,ut.height,q,Q,ut.data):e.texImage2D(n.TEXTURE_2D,mt,rt,ut.width,ut.height,0,q,Q,ut.data)}else if(P.isDataArrayTexture)if(Lt){if(Gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,rt,D.width,D.height,D.depth),H)if(P.layerUpdates.size>0){let mt=Jh(D.width,D.height,P.format,P.type);for(let Ut of P.layerUpdates){let Yt=D.data.subarray(Ut*mt/D.data.BYTES_PER_ELEMENT,(Ut+1)*mt/D.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ut,D.width,D.height,1,q,Q,Yt)}P.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,q,Q,D.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,D.width,D.height,D.depth,0,q,Q,D.data);else if(P.isData3DTexture)Lt?(Gt&&e.texStorage3D(n.TEXTURE_3D,It,rt,D.width,D.height,D.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,q,Q,D.data)):e.texImage3D(n.TEXTURE_3D,0,rt,D.width,D.height,D.depth,0,q,Q,D.data);else if(P.isFramebufferTexture){if(Gt)if(Lt)e.texStorage2D(n.TEXTURE_2D,It,rt,D.width,D.height);else{let mt=D.width,Ut=D.height;for(let Yt=0;Yt<It;Yt++)e.texImage2D(n.TEXTURE_2D,Yt,rt,mt,Ut,0,q,Q,null),mt>>=1,Ut>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in n){let mt=n.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),D.parentNode!==mt){mt.appendChild(D),v.add(P),mt.onpaint=Ut=>{let Yt=Ut.changedElements;for(let Nt of v)Yt.includes(Nt.image)&&(Nt.needsUpdate=!0)},mt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,D);else{let Yt=n.RGBA,Nt=n.RGBA,Bt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Yt,Nt,Bt,D)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Lt&&Gt){let mt=me(Dt[0]);e.texStorage2D(n.TEXTURE_2D,It,rt,mt.width,mt.height)}for(let mt=0,Ut=Dt.length;mt<Ut;mt++)ut=Dt[mt],Lt?H&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,q,Q,ut):e.texImage2D(n.TEXTURE_2D,mt,rt,q,Q,ut);P.generateMipmaps=!1}else if(Lt){if(Gt){let mt=me(D);e.texStorage2D(n.TEXTURE_2D,It,rt,mt.width,mt.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,q,Q,D)}else e.texImage2D(n.TEXTURE_2D,0,rt,q,Q,D);x(P)&&L(pt),$t.__version=Xt.version,P.onUpdate&&P.onUpdate(P)}Y.__version=P.version}function Qt(Y,P,it){if(P.image.length!==6)return;let pt=zt(Y,P),Et=P.source;e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+it);let Xt=i.get(Et);if(Et.version!==Xt.__version||pt===!0){e.activeTexture(n.TEXTURE0+it);let $t=Le.getPrimaries(Le.workingColorSpace),xt=P.colorSpace===ki?null:Le.getPrimaries(P.colorSpace),D=P.colorSpace===ki||$t===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);let q=P.isCompressedTexture||P.image[0].isCompressedTexture,Q=P.image[0]&&P.image[0].isDataTexture,rt=[];for(let Nt=0;Nt<6;Nt++)!q&&!Q?rt[Nt]=S(P.image[Nt],!0,r.maxCubemapSize):rt[Nt]=Q?P.image[Nt].image:P.image[Nt],rt[Nt]=ke(P,rt[Nt]);let ut=rt[0],Dt=o.convert(P.format,P.colorSpace),Lt=o.convert(P.type),Gt=C(P.internalFormat,Dt,Lt,P.normalized,P.colorSpace),H=P.isVideoTexture!==!0,It=Xt.__version===void 0||pt===!0,mt=Et.dataReady,Ut=O(P,ut);Ht(n.TEXTURE_CUBE_MAP,P);let Yt;if(q){H&&It&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,Gt,ut.width,ut.height);for(let Nt=0;Nt<6;Nt++){Yt=rt[Nt].mipmaps;for(let Bt=0;Bt<Yt.length;Bt++){let re=Yt[Bt];P.format!==Jn?Dt!==null?H?mt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Bt,0,0,re.width,re.height,Dt,re.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Bt,Gt,re.width,re.height,0,re.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Bt,0,0,re.width,re.height,Dt,Lt,re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Bt,Gt,re.width,re.height,0,Dt,Lt,re.data)}}}else{if(Yt=P.mipmaps,H&&It){Yt.length>0&&Ut++;let Nt=me(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,Gt,Nt.width,Nt.height)}for(let Nt=0;Nt<6;Nt++)if(Q){H?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,rt[Nt].width,rt[Nt].height,Dt,Lt,rt[Nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Gt,rt[Nt].width,rt[Nt].height,0,Dt,Lt,rt[Nt].data);for(let Bt=0;Bt<Yt.length;Bt++){let ze=Yt[Bt].image[Nt].image;H?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Bt+1,0,0,ze.width,ze.height,Dt,Lt,ze.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Bt+1,Gt,ze.width,ze.height,0,Dt,Lt,ze.data)}}else{H?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,Dt,Lt,rt[Nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Gt,Dt,Lt,rt[Nt]);for(let Bt=0;Bt<Yt.length;Bt++){let re=Yt[Bt];H?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Bt+1,0,0,Dt,Lt,re.image[Nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Bt+1,Gt,Dt,Lt,re.image[Nt])}}}x(P)&&L(n.TEXTURE_CUBE_MAP),Xt.__version=Et.version,P.onUpdate&&P.onUpdate(P)}Y.__version=P.version}function Ft(Y,P,it,pt,Et,Xt){let $t=o.convert(it.format,it.colorSpace),xt=o.convert(it.type),D=C(it.internalFormat,$t,xt,it.normalized,it.colorSpace),q=i.get(P),Q=i.get(it);if(Q.__renderTarget=P,!q.__hasExternalTextures){let rt=Math.max(1,P.width>>Xt),ut=Math.max(1,P.height>>Xt);Et===n.TEXTURE_3D||Et===n.TEXTURE_2D_ARRAY?e.texImage3D(Et,Xt,D,rt,ut,P.depth,0,$t,xt,null):e.texImage2D(Et,Xt,D,rt,ut,0,$t,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,Y),Ce(P)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,Et,Q.__webglTexture,0,Se(P)):(Et===n.TEXTURE_2D||Et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pt,Et,Q.__webglTexture,Xt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(Y,P,it){if(n.bindRenderbuffer(n.RENDERBUFFER,Y),P.depthBuffer){let pt=P.depthTexture,Et=pt&&pt.isDepthTexture?pt.type:null,Xt=N(P.stencilBuffer,Et),$t=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ce(P)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se(P),Xt,P.width,P.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se(P),Xt,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Xt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$t,n.RENDERBUFFER,Y)}else{let pt=P.textures;for(let Et=0;Et<pt.length;Et++){let Xt=pt[Et],$t=o.convert(Xt.format,Xt.colorSpace),xt=o.convert(Xt.type),D=C(Xt.internalFormat,$t,xt,Xt.normalized,Xt.colorSpace);Ce(P)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se(P),D,P.width,P.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se(P),D,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,D,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(Y,P,it){let pt=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,Y),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Et=i.get(P.depthTexture);if(Et.__renderTarget=P,(!Et.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),pt){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,P.depthTexture.addEventListener("dispose",z)),Et.__webglTexture===void 0){Et.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Et.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,P.depthTexture);let q=o.convert(P.depthTexture.format),Q=o.convert(P.depthTexture.type),rt;P.depthTexture.format===yi?rt=n.DEPTH_COMPONENT24:P.depthTexture.format===pr&&(rt=n.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,rt,P.width,P.height,0,q,Q,null)}}else bt(P.depthTexture,0);let Xt=Et.__webglTexture,$t=Se(P),xt=pt?n.TEXTURE_CUBE_MAP_POSITIVE_X+it:n.TEXTURE_2D,D=P.depthTexture.format===pr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(P.depthTexture.format===yi)Ce(P)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,xt,Xt,0,$t):n.framebufferTexture2D(n.FRAMEBUFFER,D,xt,Xt,0);else if(P.depthTexture.format===pr)Ce(P)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,xt,Xt,0,$t):n.framebufferTexture2D(n.FRAMEBUFFER,D,xt,Xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(Y){let P=i.get(Y),it=Y.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==Y.depthTexture){let pt=Y.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),pt){let Et=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,pt.removeEventListener("dispose",Et)};pt.addEventListener("dispose",Et),P.__depthDisposeCallback=Et}P.__boundDepthTexture=pt}if(Y.depthTexture&&!P.__autoAllocateDepthBuffer)if(it)for(let pt=0;pt<6;pt++)Ie(P.__webglFramebuffer[pt],Y,pt);else{let pt=Y.texture.mipmaps;pt&&pt.length>0?Ie(P.__webglFramebuffer[0],Y,0):Ie(P.__webglFramebuffer,Y,0)}else if(it){P.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[pt]),P.__webglDepthbuffer[pt]===void 0)P.__webglDepthbuffer[pt]=n.createRenderbuffer(),oe(P.__webglDepthbuffer[pt],Y,!1);else{let Et=Y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Xt=P.__webglDepthbuffer[pt];n.bindRenderbuffer(n.RENDERBUFFER,Xt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,Xt)}}else{let pt=Y.texture.mipmaps;if(pt&&pt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),oe(P.__webglDepthbuffer,Y,!1);else{let Et=Y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Xt=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Xt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,Xt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(Y,P,it){let pt=i.get(Y);P!==void 0&&Ft(pt.__webglFramebuffer,Y,Y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),it!==void 0&&pe(Y)}function ve(Y){let P=Y.texture,it=i.get(Y),pt=i.get(P);Y.addEventListener("dispose",A);let Et=Y.textures,Xt=Y.isWebGLCubeRenderTarget===!0,$t=Et.length>1;if($t||(pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture()),pt.__version=P.version,l.memory.textures++),Xt){it.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(P.mipmaps&&P.mipmaps.length>0){it.__webglFramebuffer[xt]=[];for(let D=0;D<P.mipmaps.length;D++)it.__webglFramebuffer[xt][D]=n.createFramebuffer()}else it.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){it.__webglFramebuffer=[];for(let xt=0;xt<P.mipmaps.length;xt++)it.__webglFramebuffer[xt]=n.createFramebuffer()}else it.__webglFramebuffer=n.createFramebuffer();if($t)for(let xt=0,D=Et.length;xt<D;xt++){let q=i.get(Et[xt]);q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture(),l.memory.textures++)}if(Y.samples>0&&Ce(Y)===!1){it.__webglMultisampledFramebuffer=n.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let xt=0;xt<Et.length;xt++){let D=Et[xt];it.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,it.__webglColorRenderbuffer[xt]);let q=o.convert(D.format,D.colorSpace),Q=o.convert(D.type),rt=C(D.internalFormat,q,Q,D.normalized,D.colorSpace,Y.isXRRenderTarget===!0),ut=Se(Y);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,rt,Y.width,Y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,it.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),Y.depthBuffer&&(it.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(it.__webglDepthRenderbuffer,Y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Xt){e.bindTexture(n.TEXTURE_CUBE_MAP,pt.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,P);for(let xt=0;xt<6;xt++)if(P.mipmaps&&P.mipmaps.length>0)for(let D=0;D<P.mipmaps.length;D++)Ft(it.__webglFramebuffer[xt][D],Y,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,D);else Ft(it.__webglFramebuffer[xt],Y,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);x(P)&&L(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($t){for(let xt=0,D=Et.length;xt<D;xt++){let q=Et[xt],Q=i.get(q),rt=n.TEXTURE_2D;(Y.isWebGL3DRenderTarget||Y.isWebGLArrayRenderTarget)&&(rt=Y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,Q.__webglTexture),Ht(rt,q),Ft(it.__webglFramebuffer,Y,q,n.COLOR_ATTACHMENT0+xt,rt,0),x(q)&&L(rt)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((Y.isWebGL3DRenderTarget||Y.isWebGLArrayRenderTarget)&&(xt=Y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,pt.__webglTexture),Ht(xt,P),P.mipmaps&&P.mipmaps.length>0)for(let D=0;D<P.mipmaps.length;D++)Ft(it.__webglFramebuffer[D],Y,P,n.COLOR_ATTACHMENT0,xt,D);else Ft(it.__webglFramebuffer,Y,P,n.COLOR_ATTACHMENT0,xt,0);x(P)&&L(xt),e.unbindTexture()}Y.depthBuffer&&pe(Y)}function fe(Y){let P=Y.textures;for(let it=0,pt=P.length;it<pt;it++){let Et=P[it];if(x(Et)){let Xt=V(Y),$t=i.get(Et).__webglTexture;e.bindTexture(Xt,$t),L(Xt),e.unbindTexture()}}}let Te=[],ie=[];function Re(Y){if(Y.samples>0){if(Ce(Y)===!1){let P=Y.textures,it=Y.width,pt=Y.height,Et=n.COLOR_BUFFER_BIT,Xt=Y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$t=i.get(Y),xt=P.length>1;if(xt)for(let q=0;q<P.length;q++)e.bindFramebuffer(n.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,$t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer);let D=Y.texture.mipmaps;D&&D.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let q=0;q<P.length;q++){if(Y.resolveDepthBuffer&&(Y.depthBuffer&&(Et|=n.DEPTH_BUFFER_BIT),Y.stencilBuffer&&Y.resolveStencilBuffer&&(Et|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$t.__webglColorRenderbuffer[q]);let Q=i.get(P[q]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,it,pt,0,0,it,pt,Et,n.NEAREST),f===!0&&(Te.length=0,ie.length=0,Te.push(n.COLOR_ATTACHMENT0+q),Y.depthBuffer&&Y.storeMultisampledDepthBuffer===!1&&(Te.push(Xt),ie.push(Xt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ie)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let q=0;q<P.length;q++){e.bindFramebuffer(n.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,$t.__webglColorRenderbuffer[q]);let Q=i.get(P[q]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,$t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.TEXTURE_2D,Q,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(Y.depthBuffer&&Y.storeMultisampledDepthBuffer===!1&&f){let P=Y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function Se(Y){return Math.min(r.maxSamples,Y.samples)}function Ce(Y){let P=i.get(Y);return Y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function at(Y){let P=l.render.frame;g.get(Y)!==P&&(g.set(Y,P),Y.update())}function ke(Y,P){let it=Y.colorSpace,pt=Y.format,Et=Y.type;return Y.isCompressedTexture===!0||Y.isVideoTexture===!0||it!==ro&&it!==ki&&(Le.getTransfer(it)===Ve?(pt!==Jn||Et!==Nn)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_e("WebGLTextures: Unsupported texture color space:",it)),P}function me(Y){return typeof HTMLImageElement<"u"&&Y instanceof HTMLImageElement?(d.width=Y.naturalWidth||Y.width,d.height=Y.naturalHeight||Y.height):typeof VideoFrame<"u"&&Y instanceof VideoFrame?(d.width=Y.displayWidth,d.height=Y.displayHeight):(d.width=Y.width,d.height=Y.height),d}this.allocateTextureUnit=lt,this.resetTextureUnits=j,this.getTextureUnits=Z,this.setTextureUnits=K,this.setTexture2D=bt,this.setTexture2DArray=yt,this.setTexture3D=wt,this.setTextureCube=Pt,this.rebindTextures=ue,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function MM(n,t){function e(i,r=ki){let o,l=Le.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_l)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fh)return n.BYTE;if(i===Uh)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===ml)return n.INT;if(i===li)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===hi)return n.HALF_FLOAT;if(i===zh)return n.ALPHA;if(i===Vh)return n.RGB;if(i===Jn)return n.RGBA;if(i===yi)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===Hh)return n.RED;if(i===vl)return n.RED_INTEGER;if(i===mr)return n.RG;if(i===yl)return n.RG_INTEGER;if(i===xl)return n.RGBA_INTEGER;if(i===Ro||i===Lo||i===No||i===Do)if(l===Ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ro)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ro)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===No)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===Sl||i===bl||i===wl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ml)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===El||i===Tl||i===Al||i===Cl||i===Pl||i===Oo||i===Il)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===El||i===Tl)return l===Ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Al)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cl)return o.COMPRESSED_R11_EAC;if(i===Pl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Oo)return o.COMPRESSED_RG11_EAC;if(i===Il)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rl||i===Ll||i===Nl||i===Dl||i===Ol||i===Fl||i===Ul||i===Bl||i===kl||i===zl||i===Vl||i===Hl||i===Gl||i===Xl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Rl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ll)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ul)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wl||i===Yl||i===$l)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Wl)return l===Ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ql||i===Zl||i===Fo||i===Jl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===ql)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Zl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function EM(n,t){function e(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,$h(n)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,L,V,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?o(S,x):x.isMeshLambertMaterial?(o(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(o(S,x),v(S,x)):x.isMeshPhongMaterial?(o(S,x),g(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(o(S,x),_(S,x),x.isMeshPhysicalMaterial&&b(S,x,C)):x.isMeshMatcapMaterial?(o(S,x),w(S,x)):x.isMeshDepthMaterial?o(S,x):x.isMeshDistanceMaterial?(o(S,x),T(S,x)):x.isMeshNormalMaterial?o(S,x):x.isLineBasicMaterial?(l(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?f(S,x,L,V):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,e(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,e(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Pn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,e(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Pn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,e(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,e(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);let L=t.get(x),V=L.envMap,C=L.envMapRotation;V&&(S.envMap.value=V,S.envMapRotation.value.setFromMatrix4(wM.makeRotationFromEuler(C)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(ip),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,S.aoMapTransform))}function l(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,e(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,L,V){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=V*.5,x.map&&(S.map.value=x.map,e(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,e(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function b(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Pn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.retroreflectivity>0&&(S.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){let L=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function TM(n,t,e,i){let r={},o={},l=[],h=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(C,N){let O=N.program;i.uniformBlockBinding(C,O)}function d(C,N){let O=r[C.id];O===void 0&&(S(C),O=g(C),r[C.id]=O,C.addEventListener("dispose",L));let z=N.program;i.updateUBOMapping(C,z);let A=t.render.frame;o[C.id]!==A&&(_(C),o[C.id]=A)}function g(C){let N=v();C.__bindingPointIndex=N;let O=n.createBuffer(),z=C.__size,A=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,O),n.bufferData(n.UNIFORM_BUFFER,z,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,N,O),O}function v(){for(let C=0;C<h;C++)if(l.indexOf(C)===-1)return l.push(C),C;return _e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){let N=r[C.id],O=C.uniforms,z=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,N);for(let A=0,k=O.length;A<k;A++){let G=O[A];if(Array.isArray(G))for(let $=0,J=G.length;$<J;$++)b(G[$],A,$,z);else b(G,A,0,z)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function b(C,N,O,z){if(T(C,N,O,z)===!0){let A=C.__offset,k=C.value;if(Array.isArray(k)){let G=0;for(let $=0;$<k.length;$++){let J=k[$],j=x(J);w(J,C.__data,G),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(k,C.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,C.__data)}}function w(C,N,O){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,O)}function T(C,N,O,z){let A=C.value,k=N+"_"+O;if(z[k]===void 0)return typeof A=="number"||typeof A=="boolean"?z[k]=A:ArrayBuffer.isView(A)?z[k]=A.slice():z[k]=A.clone(),!0;{let G=z[k];if(typeof A=="number"||typeof A=="boolean"){if(G!==A)return z[k]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(G.equals(A)===!1)return G.copy(A),!0}}return!1}function S(C){let N=C.uniforms,O=0,z=16;for(let k=0,G=N.length;k<G;k++){let $=Array.isArray(N[k])?N[k]:[N[k]];for(let J=0,j=$.length;J<j;J++){let Z=$[J],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let lt=0,dt=K.length;lt<dt;lt++){let bt=K[lt],yt=x(bt),wt=O%z,Pt=wt%yt.boundary,ht=wt+Pt;O+=Pt,ht!==0&&z-ht<yt.storage&&(O+=z-ht),Z.__data=new Float32Array(yt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=O,O+=yt.storage}}}let A=O%z;return A>0&&(O+=z-A),C.__size=O,C.__cache={},this}function x(C){let N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):de("WebGLRenderer: Unsupported uniform value type.",C),N}function L(C){let N=C.target;N.removeEventListener("dispose",L);let O=l.indexOf(N.__bindingPointIndex);l.splice(O,1),n.deleteBuffer(r[N.id]),delete r[N.id],delete o[N.id]}function V(){for(let C in r)n.deleteBuffer(r[C]);l=[],r={},o={}}return{bind:f,update:d,dispose:V}}function CM(){return bi===null&&(bi=new Ya(AM,16,16,mr,hi),bi.name="DFG_LUT",bi.minFilter=mn,bi.magFilter=mn,bi.wrapS=vi,bi.wrapT=vi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var V0,H0,G0,X0,W0,Y0,$0,q0,Z0,J0,j0,K0,Q0,t_,e_,n_,i_,r_,s_,o_,a_,l_,c_,h_,u_,f_,d_,p_,m_,g_,__,v_,y_,x_,M_,S_,b_,w_,E_,T_,A_,C_,P_,I_,R_,L_,N_,D_,O_,F_,U_,B_,k_,z_,V_,H_,G_,X_,W_,Y_,$_,q_,Z_,J_,j_,K_,Q_,tv,ev,nv,iv,rv,sv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,vv,yv,xv,Mv,Sv,bv,wv,Ev,Tv,Av,Cv,Pv,Iv,Rv,Lv,Nv,Dv,Ov,Fv,Uv,Bv,kv,zv,Vv,Hv,Gv,Xv,Wv,Yv,$v,qv,Zv,Jv,jv,Kv,Qv,ty,ey,ny,iy,ry,sy,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,_y,vy,yy,xy,Ee,Kt,wi,tc,My,Kd,Ls,Ay,Cy,Py,Uo,Id,Kh,Qh,tu,eu,Iy,Nr,nc,ic,Vy,Qd,ru,tp,ep,np,Dd,Od,Fd,Ud,Bd,su,ou,au,nu,Ns,Ix,Rx,Vd,Ox,ec,Vx,Hx,Xx,Yx,qx,Jx,Kx,nM,cu,hu,hM,pM,mM,gM,_M,Jd,Bo,iu,SM,bM,uu,fu,wM,ip,AM,bi,rc,ac=vn(()=>{jh();jh();V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
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
#endif`,G0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
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
#endif`,q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
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
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t_=`#ifdef USE_IRIDESCENCE
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
#endif`,e_=`#ifdef USE_BUMPMAP
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
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,l_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,h_=`#define PI 3.141592653589793
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
} // validated`,u_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f_=`vec3 transformedNormal = objectNormal;
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
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y_=`#ifdef USE_ENVMAP
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
#endif`,x_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C_=`#ifdef USE_GRADIENTMAP
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
}`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,N_=`#ifdef USE_ENVMAP
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
#endif`,D_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B_=`PhysicalMaterial material;
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
#endif`,k_=`uniform sampler2D dfgLUT;
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
}`,z_=`
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
#endif`,V_=`#if defined( RE_IndirectDiffuse )
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
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,X_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j_=`#if defined( USE_POINTS_UV )
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
#endif`,K_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iv=`#ifdef USE_MORPHTARGETS
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
#endif`,rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hv=`#ifdef USE_NORMALMAP
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
#endif`,uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_v=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tv=`float getShadowMask() {
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
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cv=`#ifdef USE_SKINNING
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
#endif`,Pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iv=`#ifdef USE_SKINNING
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
#endif`,Rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ov=`#ifdef USE_TRANSMISSION
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
#endif`,Fv=`#ifdef USE_TRANSMISSION
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
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hv=`uniform sampler2D t2D;
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`#include <common>
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
}`,qv=`#if DEPTH_PACKING == 3200
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
}`,Zv=`#define DISTANCE
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
}`,Jv=`#define DISTANCE
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`uniform float scale;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#define LAMBERT
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
}`,ry=`#define LAMBERT
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
}`,sy=`#define MATCAP
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
}`,oy=`#define MATCAP
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
}`,ay=`#define NORMAL
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
}`,ly=`#define NORMAL
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
}`,cy=`#define PHONG
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
}`,hy=`#define PHONG
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
}`,uy=`#define STANDARD
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
}`,fy=`#define STANDARD
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
}`,dy=`#define TOON
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
}`,py=`#define TOON
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
}`,my=`uniform float size;
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
}`,gy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,vy=`uniform vec3 color;
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
}`,yy=`uniform float rotation;
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
}`,xy=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:V0,alphahash_pars_fragment:H0,alphamap_fragment:G0,alphamap_pars_fragment:X0,alphatest_fragment:W0,alphatest_pars_fragment:Y0,aomap_fragment:$0,aomap_pars_fragment:q0,batching_pars_vertex:Z0,batching_vertex:J0,begin_vertex:j0,beginnormal_vertex:K0,bsdfs:Q0,iridescence_fragment:t_,bumpmap_pars_fragment:e_,clipping_planes_fragment:n_,clipping_planes_pars_fragment:i_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:s_,color_fragment:o_,color_pars_fragment:a_,color_pars_vertex:l_,color_vertex:c_,common:h_,cube_uv_reflection_fragment:u_,defaultnormal_vertex:f_,displacementmap_pars_vertex:d_,displacementmap_vertex:p_,emissivemap_fragment:m_,emissivemap_pars_fragment:g_,colorspace_fragment:__,colorspace_pars_fragment:v_,envmap_fragment:y_,envmap_common_pars_fragment:x_,envmap_pars_fragment:M_,envmap_pars_vertex:S_,envmap_physical_pars_fragment:N_,envmap_vertex:b_,fog_vertex:w_,fog_pars_vertex:E_,fog_fragment:T_,fog_pars_fragment:A_,gradientmap_pars_fragment:C_,lightmap_pars_fragment:P_,lights_lambert_fragment:I_,lights_lambert_pars_fragment:R_,lights_pars_begin:L_,lights_toon_fragment:D_,lights_toon_pars_fragment:O_,lights_phong_fragment:F_,lights_phong_pars_fragment:U_,lights_physical_fragment:B_,lights_physical_pars_fragment:k_,lights_fragment_begin:z_,lights_fragment_maps:V_,lights_fragment_end:H_,lightprobes_pars_fragment:G_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:W_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:$_,map_fragment:q_,map_pars_fragment:Z_,map_particle_fragment:J_,map_particle_pars_fragment:j_,metalnessmap_fragment:K_,metalnessmap_pars_fragment:Q_,morphinstance_vertex:tv,morphcolor_vertex:ev,morphnormal_vertex:nv,morphtarget_pars_vertex:iv,morphtarget_vertex:rv,normal_fragment_begin:sv,normal_fragment_maps:ov,normal_pars_fragment:av,normal_pars_vertex:lv,normal_vertex:cv,normalmap_pars_fragment:hv,clearcoat_normal_fragment_begin:uv,clearcoat_normal_fragment_maps:fv,clearcoat_pars_fragment:dv,iridescence_pars_fragment:pv,opaque_fragment:mv,packing:gv,premultiplied_alpha_fragment:_v,project_vertex:vv,dithering_fragment:yv,dithering_pars_fragment:xv,roughnessmap_fragment:Mv,roughnessmap_pars_fragment:Sv,shadowmap_pars_fragment:bv,shadowmap_pars_vertex:wv,shadowmap_vertex:Ev,shadowmask_pars_fragment:Tv,skinbase_vertex:Av,skinning_pars_vertex:Cv,skinning_vertex:Pv,skinnormal_vertex:Iv,specularmap_fragment:Rv,specularmap_pars_fragment:Lv,tonemapping_fragment:Nv,tonemapping_pars_fragment:Dv,transmission_fragment:Ov,transmission_pars_fragment:Fv,uv_pars_fragment:Uv,uv_pars_vertex:Bv,uv_vertex:kv,worldpos_vertex:zv,background_vert:Vv,background_frag:Hv,backgroundCube_vert:Gv,backgroundCube_frag:Xv,cube_vert:Wv,cube_frag:Yv,depth_vert:$v,depth_frag:qv,distance_vert:Zv,distance_frag:Jv,equirect_vert:jv,equirect_frag:Kv,linedashed_vert:Qv,linedashed_frag:ty,meshbasic_vert:ey,meshbasic_frag:ny,meshlambert_vert:iy,meshlambert_frag:ry,meshmatcap_vert:sy,meshmatcap_frag:oy,meshnormal_vert:ay,meshnormal_frag:ly,meshphong_vert:cy,meshphong_frag:hy,meshphysical_vert:uy,meshphysical_frag:fy,meshtoon_vert:dy,meshtoon_frag:py,points_vert:my,points_frag:gy,shadow_vert:_y,shadow_frag:vy,sprite_vert:yy,sprite_frag:xy},Kt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ct},probesMax:{value:new ct},probesResolution:{value:new ct}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},wi={basic:{uniforms:wn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:wn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:wn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:wn([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:wn([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:wn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:wn([Kt.points,Kt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:wn([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:wn([Kt.common,Kt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:wn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:wn([Kt.sprite,Kt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:wn([Kt.common,Kt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:wn([Kt.lights,Kt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};wi.physical={uniforms:wn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};tc={r:0,b:0,g:0},My=new Xe,Kd=new be;Kd.set(-1,0,0,0,1,0,0,0,1);Ls=4,Ay=6,Cy=20,Py=256,Uo=new ws,Id=new Me,Kh=null,Qh=0,tu=0,eu=!1,Iy=new ct,Nr=new ct,nc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,o={}){let{size:l=256,position:h=Iy}=o;Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,i,r,f,h),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kh,Qh,tu),this._renderer.xr.enabled=eu,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:hi,format:Jn,colorSpace:ro,depthBuffer:!1},r=Rd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ry(o)),this._blurMaterial=Ny(o,t,e),this._ggxMaterial=Ly(o,t,e)}return r}_compileMaterial(t){let e=new Ue(new je,t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,i,r,o){let f=new Sn(90,1,e,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,b=v.toneMapping;v.getClearColor(Id),v.toneMapping=ai,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(r),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new rr,new zn({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let T=this._backgroundBox,S=T.material,x=!1,L=t.background;L?L.isColor&&(S.color.copy(L),t.background=null,x=!0):(S.color.copy(Id),x=!0);for(let V=0;V<6;V++){let C=V%3;C===0?(f.up.set(0,d[V],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+g[V],o.y,o.z)):C===1?(f.up.set(0,0,d[V]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+g[V],o.z)):(f.up.set(0,d[V],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+g[V]));let N=this._cubeSize;Rs(r,C*N,V>2?N:0,N,N),v.setRenderTarget(r),x&&v.render(T,f),v.render(t,f)}v.toneMapping=b,v.autoClear=_,t.background=L}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===fr||t.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());let o=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;let h=o.uniforms;h.envMap.value=t;let f=this._cubeSize;Rs(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(l,Uo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,h=this._lodMeshes[i];h.material=l;let f=l.uniforms,d=i/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=d*1.25,b=v*_,{_lodMax:w}=this,T=this._sizeLods[i],S=3*T*(i>w-Ls?i-w+Ls:0),x=4*(this._cubeSize-T);f.envMap.value=t.texture,f.roughness.value=b,f.mipInt.value=w-e,Rs(o,S,x,3*T,2*T),r.setRenderTarget(o),r.render(h,Uo),f.envMap.value=o.texture,f.roughness.value=0,f.mipInt.value=w-i,Rs(t,S,x,3*T,2*T),r.setRenderTarget(t),r.render(h,Uo)}_blur(t,e,i,r){let o=this._pingPongRenderTarget,l=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,l),this._blurPass(o,t,i,i,l)}_blurPass(t,e,i,r,o){let l=this._renderer,h=this._blurMaterial,f=this._lodMeshes[r];f.material=h;let d=h.uniforms;d.envMap.value=t.texture,d.sigma.value=o,d.mipInt.value=this._lodMax-i;let g=this._sizeLods[r],v=3*g*(r>this._lodMax-Ls?r-this._lodMax+Ls:0),_=4*(this._cubeSize-g);Rs(e,v,_,3*g,2*g),l.setRenderTarget(e),l.render(f,Uo)}};ic=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new mo(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rr(5,5,5),o=new Vn({name:"CubemapFromEquirect",uniforms:Lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:Si});o.uniforms.tEquirect.value=e;let l=new Ue(r,o),h=e.minFilter;return e.minFilter===dr&&(e.minFilter=mn),new hl(1,10,this).update(t,l),e.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,r);t.setRenderTarget(o)}};Vy={[Ch]:"LINEAR_TONE_MAPPING",[Ph]:"REINHARD_TONE_MAPPING",[Ih]:"CINEON_TONE_MAPPING",[Rh]:"ACES_FILMIC_TONE_MAPPING",[Nh]:"AGX_TONE_MAPPING",[Dh]:"NEUTRAL_TONE_MAPPING",[Lh]:"CUSTOM_TONE_MAPPING"};Qd=new Cn,ru=new ir(1,1),tp=new lo,ep=new Xa,np=new mo,Dd=[],Od=[],Fd=new Float32Array(16),Ud=new Float32Array(9),Bd=new Float32Array(4);su=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=lx(e.type)}},ou=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cx(e.type)}},au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let o=0,l=r.length;o!==l;++o){let h=r[o];h.setValue(t,e[h.id],i)}}},nu=/(\w+)(\])?(\[|\.)?/g;Ns=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<i;++l){let h=t.getActiveUniform(e,l),f=t.getUniformLocation(e,h.name);Px(h,f,this)}let r=[],o=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(l):o.push(l);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,i,r){let o=this.map[e];o!==void 0&&o.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let o=0,l=e.length;o!==l;++o){let h=e[o],f=i[h.id];f.needsUpdate!==!1&&h.setValue(t,f.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,o=t.length;r!==o;++r){let l=t[r];l.id in e&&i.push(l)}return i}};Ix=37297,Rx=0;Vd=new be;Ox={[Ch]:"Linear",[Ph]:"Reinhard",[Ih]:"Cineon",[Rh]:"ACESFilmic",[Nh]:"AgX",[Dh]:"Neutral",[Lh]:"Custom"};ec=new ct;Vx=/^[ \t]*#include +<([\w\d./]+)>/gm;Hx=new Map;Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Yx={[Co]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};qx={[fr]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE_UV"};Jx={[Ir]:"ENVMAP_MODE_REFRACTION"};Kx={[Ah]:"ENVMAP_BLENDING_MULTIPLY",[cd]:"ENVMAP_BLENDING_MIX",[hd]:"ENVMAP_BLENDING_ADD"};nM=0,cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new hu(t),e.set(t,i)),i}},hu=class{constructor(t){this.id=nM++,this.code=t,this.usedTimes=0}};hM=0;pM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mM=`uniform sampler2D shadow_pass;
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
}`,gM=[new ct(1,0,0),new ct(-1,0,0),new ct(0,1,0),new ct(0,-1,0),new ct(0,0,1),new ct(0,0,-1)],_M=[new ct(0,-1,0),new ct(0,-1,0),new ct(0,0,1),new ct(0,0,-1),new ct(0,-1,0),new ct(0,-1,0)],Jd=new Xe,Bo=new ct,iu=new ct;SM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bM=`
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

}`,uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new _o(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Vn({vertexShader:SM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ue(new vo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends si{constructor(t,e){super();let i=this,r=null,o=1,l=null,h="local-floor",f=1,d=null,g=null,v=null,_=null,b=null,w=null,T=typeof XRWebGLBinding<"u",S=new uu,x={},L=e.getContextAttributes(),V=null,C=null,N=[],O=[],z=new ce,A=null,k=null,G=new Sn;G.viewport=new Ke;let $=new Sn;$.viewport=new Ke;let J=[G,$],j=new ul,Z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_t){let X=N[_t];return X===void 0&&(X=new ys,N[_t]=X),X.getTargetRaySpace()},this.getControllerGrip=function(_t){let X=N[_t];return X===void 0&&(X=new ys,N[_t]=X),X.getGripSpace()},this.getHand=function(_t){let X=N[_t];return X===void 0&&(X=new ys,N[_t]=X),X.getHandSpace()};function lt(_t){let X=O.indexOf(_t.inputSource);if(X===-1)return;let Rt=N[X];Rt!==void 0&&(Rt.update(_t.inputSource,_t.frame,d||l),Rt.dispatchEvent({type:_t.type,data:_t.inputSource}))}function dt(){r.removeEventListener("select",lt),r.removeEventListener("selectstart",lt),r.removeEventListener("selectend",lt),r.removeEventListener("squeeze",lt),r.removeEventListener("squeezestart",lt),r.removeEventListener("squeezeend",lt),r.removeEventListener("end",dt),r.removeEventListener("inputsourceschange",bt);for(let _t=0;_t<N.length;_t++){let X=O[_t];X!==null&&(O[_t]=null,N[_t].disconnect(X))}Z=null,K=null,S.reset();for(let _t in x)delete x[_t];if(t.setRenderTarget(V),b=null,_=null,v=null,r=null,C=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(z.width,z.height,!1),k!==null){let _t=k.camera;_t.fov=k.fov,_t.zoom=k.zoom,_t.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_t){o=_t,i.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_t){h=_t,i.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(_t){d=_t},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(r,e)),v},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(_t){if(r=_t,r!==null){if(V=t.getRenderTarget(),r.addEventListener("select",lt),r.addEventListener("selectstart",lt),r.addEventListener("selectend",lt),r.addEventListener("squeeze",lt),r.addEventListener("squeezestart",lt),r.addEventListener("squeezeend",lt),r.addEventListener("end",dt),r.addEventListener("inputsourceschange",bt),L.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Qt=null,Ft=null;L.depth&&(Ft=L.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=L.stencil?pr:yi,Qt=L.stencil?Is:li);let oe={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:o};v=this.getBinding(),_=v.createProjectionLayer(oe),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new Ln(_.textureWidth,_.textureHeight,{format:Jn,type:Nn,depthTexture:new ir(_.textureWidth,_.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let Rt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o};b=new XRWebGLLayer(r,e,Rt),r.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),C=new Ln(b.framebufferWidth,b.framebufferHeight,{format:Jn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await r.requestReferenceSpace(h),zt.setContext(r),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function bt(_t){for(let X=0;X<_t.removed.length;X++){let Rt=_t.removed[X],Qt=O.indexOf(Rt);Qt>=0&&(O[Qt]=null,N[Qt].disconnect(Rt))}for(let X=0;X<_t.added.length;X++){let Rt=_t.added[X],Qt=O.indexOf(Rt);if(Qt===-1){for(let oe=0;oe<N.length;oe++)if(oe>=O.length){O.push(Rt),Qt=oe;break}else if(O[oe]===null){O[oe]=Rt,Qt=oe;break}if(Qt===-1)break}let Ft=N[Qt];Ft&&Ft.connect(Rt)}}let yt=new ct,wt=new ct;function Pt(_t,X,Rt){yt.setFromMatrixPosition(X.matrixWorld),wt.setFromMatrixPosition(Rt.matrixWorld);let Qt=yt.distanceTo(wt),Ft=X.projectionMatrix.elements,oe=Rt.projectionMatrix.elements,Ie=Ft[14]/(Ft[10]-1),pe=Ft[14]/(Ft[10]+1),ue=(Ft[9]+1)/Ft[5],ve=(Ft[9]-1)/Ft[5],fe=(Ft[8]-1)/Ft[0],Te=(oe[8]+1)/oe[0],ie=Ie*fe,Re=Ie*Te,Se=Qt/(-fe+Te),Ce=Se*-fe;if(X.matrixWorld.decompose(_t.position,_t.quaternion,_t.scale),_t.translateX(Ce),_t.translateZ(Se),_t.matrixWorld.compose(_t.position,_t.quaternion,_t.scale),_t.matrixWorldInverse.copy(_t.matrixWorld).invert(),Ft[10]===-1)_t.projectionMatrix.copy(X.projectionMatrix),_t.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let at=Ie+Se,ke=pe+Se,me=ie-Ce,Y=Re+(Qt-Ce),P=ue*pe/ke*at,it=ve*pe/ke*at;_t.projectionMatrix.makePerspective(me,Y,P,it,at,ke),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert()}}function ht(_t,X){X===null?_t.matrixWorld.copy(_t.matrix):_t.matrixWorld.multiplyMatrices(X.matrixWorld,_t.matrix),_t.matrixWorldInverse.copy(_t.matrixWorld).invert()}this.updateCamera=function(_t){if(r===null)return;let X=_t.near,Rt=_t.far;S.texture!==null&&(S.depthNear>0&&(X=S.depthNear),S.depthFar>0&&(Rt=S.depthFar)),j.near=$.near=G.near=X,j.far=$.far=G.far=Rt,(Z!==j.near||K!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),Z=j.near,K=j.far),j.layers.mask=_t.layers.mask|6,G.layers.mask=j.layers.mask&-5,$.layers.mask=j.layers.mask&-3;let Qt=_t.parent,Ft=j.cameras;ht(j,Qt);for(let oe=0;oe<Ft.length;oe++)ht(Ft[oe],Qt);Ft.length===2?Pt(j,G,$):j.projectionMatrix.copy(G.projectionMatrix),k===null&&_t.isPerspectiveCamera&&(k={camera:_t,fov:_t.fov,zoom:_t.zoom}),Tt(_t,j,Qt)};function Tt(_t,X,Rt){Rt===null?_t.matrix.copy(X.matrixWorld):(_t.matrix.copy(Rt.matrixWorld),_t.matrix.invert(),_t.matrix.multiply(X.matrixWorld)),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.updateMatrixWorld(!0),_t.projectionMatrix.copy(X.projectionMatrix),_t.projectionMatrixInverse.copy(X.projectionMatrixInverse),_t.isPerspectiveCamera&&(_t.fov=gs*2*Math.atan(1/_t.projectionMatrix.elements[5]),_t.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(_===null&&b===null))return f},this.setFoveation=function(_t){f=_t,_!==null&&(_.fixedFoveation=_t),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=_t)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(_t){return x[_t]};let Wt=null;function Ht(_t,X){if(g=X.getViewerPose(d||l),w=X,g!==null){let Rt=g.views;b!==null&&(t.setRenderTargetFramebuffer(C,b.framebuffer),t.setRenderTarget(C));let Qt=!1;Rt.length!==j.cameras.length&&(j.cameras.length=0,Qt=!0);for(let pe=0;pe<Rt.length;pe++){let ue=Rt[pe],ve=null;if(b!==null)ve=b.getViewport(ue);else{let Te=v.getViewSubImage(_,ue);ve=Te.viewport,pe===0&&(t.setRenderTargetTextures(C,Te.colorTexture,Te.depthStencilTexture),t.setRenderTarget(C))}let fe=J[pe];fe===void 0&&(fe=new Sn,fe.layers.enable(pe),fe.viewport=new Ke,J[pe]=fe),fe.matrix.fromArray(ue.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ue.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(ve.x,ve.y,ve.width,ve.height),pe===0&&(j.matrix.copy(fe.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Qt===!0&&j.cameras.push(fe)}let Ft=r.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){v=i.getBinding();let pe=v.getDepthInformation(Rt[0]);pe&&pe.isValid&&pe.texture&&S.init(pe,r.renderState)}if(Ft&&Ft.includes("camera-access")&&T){t.state.unbindTexture(),v=i.getBinding();for(let pe=0;pe<Rt.length;pe++){let ue=Rt[pe].camera;if(ue){let ve=x[ue];ve||(ve=new _o,x[ue]=ve);let fe=v.getCameraImage(ue);ve.sourceTexture=fe}}}}for(let Rt=0;Rt<N.length;Rt++){let Qt=O[Rt],Ft=N[Rt];Qt!==null&&Ft!==void 0&&Ft.update(Qt,X,d||l)}Wt&&Wt(_t,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),w=null}let zt=new jd;zt.setAnimationLoop(Ht),this.setAnimationLoop=function(_t){Wt=_t},this.dispose=function(){}}},wM=new Xe,ip=new be;ip.set(-1,0,0,0,1,0,0,0,1);AM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;rc=class{constructor(t={}){let{canvas:e=Md(),context:i=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:b=Nn}=t;this.isWebGLRenderer=!0;let w;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=i.getContextAttributes().alpha}else w=l;let T=b,S=new Set([xl,yl,vl]),x=new Set([Nn,li,Ps,Is,gl,_l]),L=new Uint32Array(4),V=new Int32Array(4),C=new ct,N=null,O=null,z=[],A=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let G=this,$=!1,J=null,j=null,Z=null,K=null;this._outputColorSpace=An;let lt=0,dt=0,bt=null,yt=-1,wt=null,Pt=new Ke,ht=new Ke,Tt=null,Wt=new Me(0),Ht=0,zt=e.width,_t=e.height,X=1,Rt=null,Qt=null,Ft=new Ke(0,0,zt,_t),oe=new Ke(0,0,zt,_t),Ie=!1,pe=new Ms,ue=!1,ve=!1,fe=new Xe,Te=new ct,ie=new Ke,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ce(){return bt===null?X:1}let at=i;function ke(U,st){return e.getContext(U,st)}let me,Y,P,it,pt,Et,Xt,$t,xt,D,q,Q,rt,ut,Dt,Lt,Gt,H,It,mt,Ut,Yt,Nt;try{let U={alpha:!0,depth:r,stencil:o,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",En,!1),at===null){let st="webgl2";if(at=ke(st,U),at===null)throw ke(st)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(U){throw e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",En,!1),_e("WebGLRenderer: "+U.message),U}function Bt(){me=new Oy(at),me.init(),Ut=new MM(at,me),Y=new Ey(at,me,t,Ut),P=new yM(at,me),Y.reversedDepthBuffer&&_&&P.buffers.depth.setReversed(!0),j=at.createFramebuffer(),Z=at.createFramebuffer(),K=at.createFramebuffer(),it=new By(at),pt=new sM,Et=new xM(at,me,P,pt,Y,Ut,it),Xt=new Dy(G),$t=new z0(at),Yt=new by(at,$t),xt=new Fy(at,$t,it,Yt),D=new zy(at,xt,$t,Yt,it),H=new ky(at,Y,Et),Dt=new Ty(pt),q=new rM(G,Xt,me,Y,Yt,Dt),Q=new EM(G,pt),rt=new aM,ut=new dM(me),Gt=new Sy(G,Xt,P,D,w,f),Lt=new vM(G,D,Y),Nt=new TM(at,it,Y,P),It=new wy(at,me,it),mt=new Uy(at,me,it),it.programs=q.programs,G.capabilities=Y,G.extensions=me,G.properties=pt,G.renderLists=rt,G.shadowMap=Lt,G.state=P,G.info=it}T!==Nn&&(k=new Hy(T,e.width,e.height,h,r,o));let re=new fu(G,at);this.xr=re,this.getContext=function(){return at},this.getContextAttributes=function(){return at.getContextAttributes()},this.forceContextLoss=function(){let U=me.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=me.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(U){U!==void 0&&(X=U,this.setSize(zt,_t,!1))},this.getSize=function(U){return U.set(zt,_t)},this.setSize=function(U,st,Mt=!0){if(re.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}zt=U,_t=st,e.width=Math.floor(U*X),e.height=Math.floor(st*X),Mt===!0&&(e.style.width=U+"px",e.style.height=st+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,U,st)},this.getDrawingBufferSize=function(U){return U.set(zt*X,_t*X).floor()},this.setDrawingBufferSize=function(U,st,Mt){zt=U,_t=st,X=Mt,e.width=Math.floor(U*Mt),e.height=Math.floor(st*Mt),this.setViewport(0,0,U,st)},this.setEffects=function(U){if(T===Nn){_e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let st=0;st<U.length;st++)if(U[st].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(Pt)},this.getViewport=function(U){return U.copy(Ft)},this.setViewport=function(U,st,Mt,gt){U.isVector4?Ft.set(U.x,U.y,U.z,U.w):Ft.set(U,st,Mt,gt),P.viewport(Pt.copy(Ft).multiplyScalar(X).round())},this.getScissor=function(U){return U.copy(oe)},this.setScissor=function(U,st,Mt,gt){U.isVector4?oe.set(U.x,U.y,U.z,U.w):oe.set(U,st,Mt,gt),P.scissor(ht.copy(oe).multiplyScalar(X).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(U){P.setScissorTest(Ie=U)},this.setOpaqueSort=function(U){Rt=U},this.setTransparentSort=function(U){Qt=U},this.getClearColor=function(U){return U.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(U=!0,st=!0,Mt=!0){let gt=0;if(U){let vt=!1;if(bt!==null){let Jt=bt.texture.format;vt=S.has(Jt)}if(vt){let Jt=bt.texture.type,Vt=x.has(Jt),Zt=Gt.getClearColor(),ee=Gt.getClearAlpha(),se=Zt.r,qt=Zt.g,ge=Zt.b;Vt?(L[0]=se,L[1]=qt,L[2]=ge,L[3]=ee,at.clearBufferuiv(at.COLOR,0,L)):(V[0]=se,V[1]=qt,V[2]=ge,V[3]=ee,at.clearBufferiv(at.COLOR,0,V))}else gt|=at.COLOR_BUFFER_BIT}st&&(gt|=at.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Mt&&(gt|=at.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),gt!==0&&at.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),J=U},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Gt.dispose(),rt.dispose(),ut.dispose(),pt.dispose(),Xt.dispose(),D.dispose(),Yt.dispose(),Nt.dispose(),q.dispose(),re.dispose(),re.removeEventListener("sessionstart",Dr),re.removeEventListener("sessionend",Or),Rn.stop()};function ze(U){U.preventDefault(),ao("WebGLRenderer: Context Lost."),$=!0}function De(){ao("WebGLRenderer: Context Restored."),$=!1;let U=it.autoReset,st=Lt.enabled,Mt=Lt.autoUpdate,gt=Lt.needsUpdate,vt=Lt.type;Bt(),it.autoReset=U,Lt.enabled=st,Lt.autoUpdate=Mt,Lt.needsUpdate=gt,Lt.type=vt}function En(U){_e("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function In(U){let st=U.target;st.removeEventListener("dispose",In),Fs(st)}function Fs(U){gr(U),pt.remove(U)}function gr(U){let st=pt.get(U).programs;st!==void 0&&(st.forEach(function(Mt){q.releaseProgram(Mt)}),U.isShaderMaterial&&q.releaseShaderCache(U))}this.renderBufferDirect=function(U,st,Mt,gt,vt,Jt){st===null&&(st=Re);let Vt=vt.isMesh&&vt.matrixWorld.determinantAffine()<0,Zt=fi(U,st,Mt,gt,vt);P.setMaterial(gt,Vt);let ee=Mt.index,se=1;if(gt.wireframe===!0){if(ee=xt.getWireframeAttribute(Mt),ee===void 0)return;se=2}let qt=Mt.drawRange,ge=Mt.attributes.position,te=qt.start*se,Oe=(qt.start+qt.count)*se;Jt!==null&&(te=Math.max(te,Jt.start*se),Oe=Math.min(Oe,(Jt.start+Jt.count)*se)),ee!==null?(te=Math.max(te,0),Oe=Math.min(Oe,ee.count)):ge!=null&&(te=Math.max(te,0),Oe=Math.min(Oe,ge.count));let qe=Oe-te;if(qe<0||qe===1/0)return;Yt.setup(vt,gt,Zt,Mt,ee);let Pe,s=It;if(ee!==null&&(Pe=$t.get(ee),s=mt,s.setIndex(Pe)),vt.isMesh)gt.wireframe===!0?(P.setLineWidth(gt.wireframeLinewidth*Ce()),s.setMode(at.LINES)):s.setMode(at.TRIANGLES);else if(vt.isLine){let a=gt.linewidth;a===void 0&&(a=1),P.setLineWidth(a*Ce()),vt.isLineSegments?s.setMode(at.LINES):vt.isLineLoop?s.setMode(at.LINE_LOOP):s.setMode(at.LINE_STRIP)}else vt.isPoints?s.setMode(at.POINTS):vt.isSprite&&s.setMode(at.TRIANGLES);if(vt.isBatchedMesh)if(me.get("WEBGL_multi_draw"))s.renderMultiDraw(vt._multiDrawStarts,vt._multiDrawCounts,vt._multiDrawCount);else{let a=vt._multiDrawStarts,c=vt._multiDrawCounts,p=vt._multiDrawCount,y=ee?$t.get(ee).bytesPerElement:1,I=pt.get(gt).currentProgram.getUniforms();for(let B=0;B<p;B++)I.setValue(at,"_gl_DrawID",B),s.render(a[B]/y,c[B])}else if(vt.isInstancedMesh)s.renderInstances(te,qe,vt.count);else if(Mt.isInstancedBufferGeometry){let a=Mt._maxInstanceCount!==void 0?Mt._maxInstanceCount:1/0,c=Math.min(Mt.instanceCount,a);s.renderInstances(te,qe,c)}else s.render(te,qe)};function R(U,st,Mt,gt){J!==null&&U.isNodeMaterial&&J.setObject(gt,U),ue===!0&&Dt.setState(U,Mt,!1),U.transparent===!0&&U.side===bn&&U.forceSinglePass===!1?(U.side=Pn,U.needsUpdate=!0,zi(U,st,gt),U.side=ur,U.needsUpdate=!0,zi(U,st,gt),U.side=bn):zi(U,st,gt)}this.compile=function(U,st,Mt=null){Mt===null&&(Mt=U),J!==null&&J.renderStart(U,st,Mt),O=ut.get(Mt),O.init(st),A.push(O),Mt.traverseVisible(function(vt){vt.isLight&&vt.layers.test(st.layers)&&(O.pushLight(vt),vt.castShadow&&O.pushShadow(vt))}),U!==Mt&&U.traverseVisible(function(vt){vt.isLight&&vt.layers.test(st.layers)&&(O.pushLight(vt),vt.castShadow&&O.pushShadow(vt))}),O.setupLights(),J!==null&&J.updateLights(O.state.lightsArray),ve=this.localClippingEnabled,ue=Dt.init(this.clippingPlanes,ve),ue===!0&&Dt.setGlobalState(this.clippingPlanes,st),J!==null&&Lt.render(O.state.shadowsArray,Mt,st);let gt=new Set;return U.traverse(function(vt){if(!(vt.isMesh||vt.isPoints||vt.isLine||vt.isSprite))return;let Jt=vt.material;if(Jt)if(Array.isArray(Jt))for(let Vt=0;Vt<Jt.length;Vt++){let Zt=Jt[Vt];R(Zt,Mt,st,vt),gt.add(Zt)}else R(Jt,Mt,st,vt),gt.add(Jt)}),O=A.pop(),J!==null&&J.renderEnd(),gt},this.compileAsync=function(U,st,Mt=null){let gt=this.compile(U,st,Mt);return new Promise(vt=>{function Jt(){if(gt.forEach(function(Vt){let ee=pt.get(Vt).currentProgram;(ee===void 0||ee.isReady())&&gt.delete(Vt)}),gt.size===0){vt(U);return}setTimeout(Jt,10)}me.get("KHR_parallel_shader_compile")!==null?Jt():setTimeout(Jt,10)})};let Ei=null;function Ne(U){Ei&&Ei(U)}function Dr(){Rn.stop()}function Or(){Rn.start()}let Rn=new jd;Rn.setAnimationLoop(Ne),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(U){Ei=U,re.setAnimationLoop(U),U===null?Rn.stop():Rn.start()},re.addEventListener("sessionstart",Dr),re.addEventListener("sessionend",Or),this.render=function(U,st){if(st!==void 0&&st.isCamera!==!0){_e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;J!==null&&J.renderStart(U,st);let Mt=re.enabled===!0&&re.isPresenting===!0,gt=k!==null&&(bt===null||Mt)&&k.begin(G,bt);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(st),st=re.getCamera()),U.isScene===!0&&U.onBeforeRender(G,U,st,bt),O=ut.get(U,A.length),O.init(st),O.state.textureUnits=Et.getTextureUnits(),A.push(O),fe.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),pe.setFromProjectionMatrix(fe,ri,st.reversedDepth),ve=this.localClippingEnabled,ue=Dt.init(this.clippingPlanes,ve),N=rt.get(U,z.length),N.init(),z.push(N),re.enabled===!0&&re.isPresenting===!0){let Vt=G.xr.getDepthSensingMesh();Vt!==null&&Xn(Vt,st,-1/0,G.sortObjects)}Xn(U,st,0,G.sortObjects),N.finish(),J!==null&&J.updateLights(O.state.lightsArray),G.sortObjects===!0&&N.sort(Rt,Qt),Se=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Se&&Gt.addToRenderList(N,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&Dt.beginShadows();let vt=O.state.shadowsArray;if(Lt.render(vt,U,st),ue===!0&&Dt.endShadows(),(gt&&k.hasRenderPass())===!1){let Vt=N.opaque,Zt=N.transmissive;if(O.setupLights(),st.isArrayCamera){let ee=st.cameras;if(Zt.length>0)for(let se=0,qt=ee.length;se<qt;se++){let ge=ee[se];ui(Vt,Zt,U,ge)}Se&&Gt.render(U);for(let se=0,qt=ee.length;se<qt;se++){let ge=ee[se];Fr(N,U,ge,ge.viewport)}}else Zt.length>0&&ui(Vt,Zt,U,st),Se&&Gt.render(U),Fr(N,U,st)}bt!==null&&dt===0&&(Et.updateMultisampleRenderTarget(bt),Et.updateRenderTargetMipmap(bt)),gt&&k.end(G),U.isScene===!0&&U.onAfterRender(G,U,st),Yt.resetDefaultState(),yt=-1,wt=null,A.pop(),A.length>0?(O=A[A.length-1],Et.setTextureUnits(O.state.textureUnits),ue===!0&&Dt.setGlobalState(G.clippingPlanes,O.state.camera)):O=null,z.pop(),z.length>0?N=z[z.length-1]:N=null,J!==null&&J.renderEnd()};function Xn(U,st,Mt,gt){if(U.visible===!1)return;if(U.layers.test(st.layers)){if(U.isGroup)Mt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(st);else if(U.isLightProbeGrid)O.pushLightProbeGrid(U);else if(U.isLight)O.pushLight(U),U.castShadow&&O.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(pe)){gt&&ie.setFromMatrixPosition(U.matrixWorld).applyMatrix4(fe);let Vt=D.update(U),Zt=U.material;Zt.visible&&N.push(U,Vt,Zt,Mt,ie.z,null,st)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(pe))){let Vt=D.update(U),Zt=U.material;if(gt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ie.copy(U.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ie.copy(Vt.boundingSphere.center)),ie.applyMatrix4(U.matrixWorld).applyMatrix4(fe)),Array.isArray(Zt)){let ee=Vt.groups;for(let se=0,qt=ee.length;se<qt;se++){let ge=ee[se],te=Zt[ge.materialIndex];te&&te.visible&&N.push(U,Vt,te,Mt,ie.z,ge,st)}}else Zt.visible&&N.push(U,Vt,Zt,Mt,ie.z,null,st)}}let Jt=U.children;for(let Vt=0,Zt=Jt.length;Vt<Zt;Vt++)Xn(Jt[Vt],st,Mt,gt)}function Fr(U,st,Mt,gt){let{opaque:vt,transmissive:Jt,transparent:Vt}=U;O.setupLightsView(Mt),ue===!0&&Dt.setGlobalState(G.clippingPlanes,Mt),gt&&P.viewport(Pt.copy(gt)),vt.length>0&&Ti(vt,st,Mt),Jt.length>0&&Ti(Jt,st,Mt),Vt.length>0&&Ti(Vt,st,Mt),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function ui(U,st,Mt,gt){if((Mt.isScene===!0?Mt.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[gt.id]===void 0){let te=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[gt.id]=new Ln(1,1,{generateMipmaps:!0,type:te?hi:Nn,minFilter:dr,samples:Math.max(4,Y.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}let Jt=O.state.transmissionRenderTarget[gt.id],Vt=gt.viewport||Pt;Jt.setSize(Vt.z*G.transmissionResolutionScale,Vt.w*G.transmissionResolutionScale);let Zt=G.getRenderTarget(),ee=G.getActiveCubeFace(),se=G.getActiveMipmapLevel();G.setRenderTarget(Jt),G.getClearColor(Wt),Ht=G.getClearAlpha(),Ht<1&&G.setClearColor(16777215,.5),G.clear(),Se&&Gt.render(Mt);let qt=G.toneMapping;G.toneMapping=ai;let ge=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),O.setupLightsView(gt),ue===!0&&Dt.setGlobalState(G.clippingPlanes,gt),Ti(U,Mt,gt),Et.updateMultisampleRenderTarget(Jt),Et.updateRenderTargetMipmap(Jt),me.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Oe=0,qe=st.length;Oe<qe;Oe++){let Pe=st[Oe],{object:s,geometry:a,material:c,group:p}=Pe;if(c.side===bn&&s.layers.test(gt.layers)){let y=c.side;c.side=Pn,c.needsUpdate=!0,Ur(s,Mt,gt,a,c,p),c.side=y,c.needsUpdate=!0,te=!0}}te===!0&&(Et.updateMultisampleRenderTarget(Jt),Et.updateRenderTargetMipmap(Jt))}G.setRenderTarget(Zt,ee,se),G.setClearColor(Wt,Ht),ge!==void 0&&(gt.viewport=ge),G.toneMapping=qt}function Ti(U,st,Mt){let gt=st.isScene===!0?st.overrideMaterial:null;for(let vt=0,Jt=U.length;vt<Jt;vt++){let Vt=U[vt],{object:Zt,geometry:ee,group:se}=Vt,qt=Vt.material;qt.allowOverride===!0&&gt!==null&&(qt=gt),Zt.layers.test(Mt.layers)&&Ur(Zt,st,Mt,ee,qt,se)}}function Ur(U,st,Mt,gt,vt,Jt){J!==null&&vt.isNodeMaterial&&J.setObject(U,vt),U.onBeforeRender(G,st,Mt,gt,vt,Jt),U.modelViewMatrix.multiplyMatrices(Mt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),vt.onBeforeRender(G,st,Mt,gt,U,Jt),vt.transparent===!0&&vt.side===bn&&vt.forceSinglePass===!1?(vt.side=Pn,vt.needsUpdate=!0,G.renderBufferDirect(Mt,st,gt,vt,U,Jt),vt.side=ur,vt.needsUpdate=!0,G.renderBufferDirect(Mt,st,gt,vt,U,Jt),vt.side=bn):G.renderBufferDirect(Mt,st,gt,vt,U,Jt),U.onAfterRender(G,st,Mt,gt,vt,Jt)}function zi(U,st,Mt){st.isScene!==!0&&(st=Re);let gt=pt.get(U),vt=O.state.lights,Jt=O.state.shadowsArray,Vt=vt.state.version,Zt=q.getParameters(U,vt.state,Jt,st,Mt,O.state.lightProbeGridArray),ee=q.getProgramCacheKey(Zt),se=gt.programs;gt.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?st.environment:null,gt.fog=st.fog;let qt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;gt.envMap=Xt.get(U.envMap||gt.environment,qt),gt.envMapRotation=gt.environment!==null&&U.envMap===null?st.environmentRotation:U.envMapRotation,se===void 0&&(U.addEventListener("dispose",In),se=new Map,gt.programs=se);let ge=se.get(ee);if(ge!==void 0){if(gt.currentProgram===ge&&gt.lightsStateVersion===Vt)return kr(U,Zt),ge}else Zt.uniforms=q.getUniforms(U),J!==null&&U.isNodeMaterial&&J.build(U,Mt,Zt),U.onBeforeCompile(Zt,G),ge=q.acquireProgram(Zt,ee),se.set(ee,ge),gt.uniforms=Zt.uniforms;let te=gt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(te.clippingPlanes=Dt.uniform),kr(U,Zt),gt.needsLights=ks(U),gt.lightsStateVersion=Vt,gt.needsLights&&(te.ambientLightColor.value=vt.state.ambient,te.lightProbe.value=vt.state.probe,te.sunLights.value=vt.state.sun,te.sunLightShadows.value=vt.state.sunShadow,te.directionalLights.value=vt.state.directional,te.directionalLightShadows.value=vt.state.directionalShadow,te.spotLights.value=vt.state.spot,te.spotLightShadows.value=vt.state.spotShadow,te.rectAreaLights.value=vt.state.rectArea,te.ltc_1.value=vt.state.rectAreaLTC1,te.ltc_2.value=vt.state.rectAreaLTC2,te.pointLights.value=vt.state.point,te.pointLightShadows.value=vt.state.pointShadow,te.hemisphereLights.value=vt.state.hemi,te.sunShadowMatrix.value=vt.state.sunShadowMatrix,te.sunShadowCascade.value=vt.state.sunShadowCascade,te.directionalShadowMatrix.value=vt.state.directionalShadowMatrix,te.spotLightMatrix.value=vt.state.spotLightMatrix,te.spotLightMap.value=vt.state.spotLightMap,te.pointShadowMatrix.value=vt.state.pointShadowMatrix),gt.lightProbeGrid=O.state.lightProbeGridArray.length>0,gt.currentProgram=ge,gt.uniformsList=null,ge}function Br(U){if(U.uniformsList===null){let st=U.currentProgram.getUniforms();U.uniformsList=Ns.seqWithValue(st.seq,U.uniforms)}return U.uniformsList}function kr(U,st){let Mt=pt.get(U);Mt.outputColorSpace=st.outputColorSpace,Mt.batching=st.batching,Mt.batchingColor=st.batchingColor,Mt.instancing=st.instancing,Mt.instancingColor=st.instancingColor,Mt.instancingMorph=st.instancingMorph,Mt.skinning=st.skinning,Mt.morphTargets=st.morphTargets,Mt.morphNormals=st.morphNormals,Mt.morphColors=st.morphColors,Mt.morphTargetsCount=st.morphTargetsCount,Mt.numClippingPlanes=st.numClippingPlanes,Mt.numIntersection=st.numClipIntersection,Mt.vertexAlphas=st.vertexAlphas,Mt.vertexTangents=st.vertexTangents,Mt.toneMapping=st.toneMapping}function Us(U,st){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;C.setFromMatrixPosition(st.matrixWorld);for(let Mt=0,gt=U.length;Mt<gt;Mt++){let vt=U[Mt];if(vt.texture!==null&&vt.boundingBox.containsPoint(C))return vt}return null}function fi(U,st,Mt,gt,vt){st.isScene!==!0&&(st=Re),Et.resetTextureUnits();let Jt=st.fog,Vt=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial?st.environment:null,Zt=bt===null?G.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Le.workingColorSpace,ee=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial&&!gt.envMap||gt.isMeshPhongMaterial&&!gt.envMap,se=Xt.get(gt.envMap||Vt,ee),qt=gt.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,ge=!!Mt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),te=!!Mt.morphAttributes.position,Oe=!!Mt.morphAttributes.normal,qe=!!Mt.morphAttributes.color,Pe=ai;gt.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Pe=G.toneMapping);let s=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,a=s!==void 0?s.length:0,c=pt.get(gt),p=O.state.lights;if(ue===!0&&(ve===!0||U!==wt)){let Ot=U===wt&&gt.id===yt;Dt.setState(gt,U,Ot)}let y=!1;gt.version===c.__version?(c.needsLights&&c.lightsStateVersion!==p.state.version||c.outputColorSpace!==Zt||vt.isBatchedMesh&&c.batching===!1||!vt.isBatchedMesh&&c.batching===!0||vt.isBatchedMesh&&c.batchingColor===!0&&vt._colorsTexture===null||vt.isBatchedMesh&&c.batchingColor===!1&&vt._colorsTexture!==null||vt.isInstancedMesh&&c.instancing===!1||!vt.isInstancedMesh&&c.instancing===!0||vt.isSkinnedMesh&&c.skinning===!1||!vt.isSkinnedMesh&&c.skinning===!0||vt.isInstancedMesh&&c.instancingColor===!0&&vt.instanceColor===null||vt.isInstancedMesh&&c.instancingColor===!1&&vt.instanceColor!==null||vt.isInstancedMesh&&c.instancingMorph===!0&&vt.morphTexture===null||vt.isInstancedMesh&&c.instancingMorph===!1&&vt.morphTexture!==null||c.envMap!==se||gt.fog===!0&&c.fog!==Jt||c.numClippingPlanes!==void 0&&(c.numClippingPlanes!==Dt.numPlanes||c.numIntersection!==Dt.numIntersection)||c.vertexAlphas!==qt||c.vertexTangents!==ge||c.morphTargets!==te||c.morphNormals!==Oe||c.morphColors!==qe||c.toneMapping!==Pe||c.morphTargetsCount!==a||!!c.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(y=!0):(y=!0,c.__version=gt.version);let I=c.currentProgram;y===!0&&(I=zi(gt,st,vt),J&&gt.isNodeMaterial&&J.onUpdateProgram(gt,I,c));let B=!1,tt=!1,nt=!1,ft=I.getUniforms(),Ct=c.uniforms;if(P.useProgram(I.program)&&(B=!0,tt=!0,nt=!0),gt.id!==yt&&(yt=gt.id,tt=!0),c.needsLights){let Ot=Us(O.state.lightProbeGridArray,vt);c.lightProbeGrid!==Ot&&(c.lightProbeGrid=Ot,tt=!0)}if(B||wt!==U){P.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),ft.setValue(at,"projectionMatrix",U.projectionMatrix),ft.setValue(at,"viewMatrix",U.matrixWorldInverse);let ae=ft.map.cameraPosition;ae!==void 0&&ae.setValue(at,Te.setFromMatrixPosition(U.matrixWorld)),Y.logarithmicDepthBuffer&&ft.setValue(at,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&ft.setValue(at,"isOrthographic",U.isOrthographicCamera===!0),wt!==U&&(wt=U,tt=!0,nt=!0)}if(c.needsLights&&(p.state.sunShadowMap.length>0&&ft.setValue(at,"sunShadowMap",p.state.sunShadowMap,Et),p.state.directionalShadowMap.length>0&&ft.setValue(at,"directionalShadowMap",p.state.directionalShadowMap,Et),p.state.spotShadowMap.length>0&&ft.setValue(at,"spotShadowMap",p.state.spotShadowMap,Et),p.state.pointShadowMap.length>0&&ft.setValue(at,"pointShadowMap",p.state.pointShadowMap,Et)),vt.isSkinnedMesh){ft.setOptional(at,vt,"bindMatrix"),ft.setOptional(at,vt,"bindMatrixInverse");let Ot=vt.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),ft.setValue(at,"boneTexture",Ot.boneTexture,Et))}vt.isBatchedMesh&&(ft.setOptional(at,vt,"batchingTexture"),ft.setValue(at,"batchingTexture",vt._matricesTexture,Et),ft.setOptional(at,vt,"batchingIdTexture"),ft.setValue(at,"batchingIdTexture",vt._indirectTexture,Et),ft.setOptional(at,vt,"batchingColorTexture"),vt._colorsTexture!==null&&ft.setValue(at,"batchingColorTexture",vt._colorsTexture,Et));let At=Mt.morphAttributes;if((At.position!==void 0||At.normal!==void 0||At.color!==void 0)&&H.update(vt,Mt,I),(tt||c.receiveShadow!==vt.receiveShadow)&&(c.receiveShadow=vt.receiveShadow,ft.setValue(at,"receiveShadow",vt.receiveShadow)),(gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial)&&gt.envMap===null&&st.environment!==null&&(Ct.envMapIntensity.value=st.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=CM()),tt){if(ft.setValue(at,"toneMappingExposure",G.toneMappingExposure),c.needsLights&&Bs(Ct,nt),Jt&&gt.fog===!0&&Q.refreshFogUniforms(Ct,Jt),Q.refreshMaterialUniforms(Ct,gt,X,_t,O.state.transmissionRenderTarget[U.id]),c.needsLights&&c.lightProbeGrid){let Ot=c.lightProbeGrid;Ct.probesSH.value=Ot.texture,Ct.probesMin.value.copy(Ot.boundingBox.min),Ct.probesMax.value.copy(Ot.boundingBox.max),Ct.probesResolution.value.copy(Ot.resolution)}Ns.upload(at,Br(c),Ct,Et)}if(gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(Ns.upload(at,Br(c),Ct,Et),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&ft.setValue(at,"center",vt.center),ft.setValue(at,"modelViewMatrix",vt.modelViewMatrix),ft.setValue(at,"normalMatrix",vt.normalMatrix),ft.setValue(at,"modelMatrix",vt.matrixWorld),gt.uniformsGroups!==void 0){let Ot=gt.uniformsGroups;for(let ae=0,ye=Ot.length;ae<ye;ae++){let we=Ot[ae];Nt.update(we,I),Nt.bind(we,I)}}return I}function Bs(U,st){U.ambientLightColor.needsUpdate=st,U.lightProbe.needsUpdate=st,U.sunLights.needsUpdate=st,U.sunLightShadows.needsUpdate=st,U.directionalLights.needsUpdate=st,U.directionalLightShadows.needsUpdate=st,U.pointLights.needsUpdate=st,U.pointLightShadows.needsUpdate=st,U.spotLights.needsUpdate=st,U.spotLightShadows.needsUpdate=st,U.rectAreaLights.needsUpdate=st,U.hemisphereLights.needsUpdate=st}function ks(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return dt},this.getRenderTarget=function(){return bt},this.setRenderTargetTextures=function(U,st,Mt){let gt=pt.get(U);gt.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,gt.__autoAllocateDepthBuffer===!1&&(gt.__useRenderToTexture=!1),pt.get(U.texture).__webglTexture=st,pt.get(U.depthTexture).__webglTexture=gt.__autoAllocateDepthBuffer?void 0:Mt,gt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,st){let Mt=pt.get(U);Mt.__webglFramebuffer=st,Mt.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(U,st=0,Mt=0){bt=U,lt=st,dt=Mt;let gt=null,vt=!1,Jt=!1;if(U){let Zt=pt.get(U);if(Zt.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(at.FRAMEBUFFER,Zt.__webglFramebuffer),Pt.copy(U.viewport),ht.copy(U.scissor),Tt=U.scissorTest,P.viewport(Pt),P.scissor(ht),P.setScissorTest(Tt),yt=-1;return}else if(Zt.__webglFramebuffer===void 0)Et.setupRenderTarget(U);else if(Zt.__hasExternalTextures)Et.rebindTextures(U,pt.get(U.texture).__webglTexture,pt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let qt=U.depthTexture;if(Zt.__boundDepthTexture!==qt){if(qt!==null&&pt.has(qt)&&(U.width!==qt.image.width||U.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Et.setupDepthRenderbuffer(U)}}let ee=U.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Jt=!0);let se=pt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(se[st])?gt=se[st][Mt]:gt=se[st],vt=!0):U.samples>0&&Et.useMultisampledRTT(U)===!1?gt=pt.get(U).__webglMultisampledFramebuffer:Array.isArray(se)?gt=se[Mt]:gt=se,Pt.copy(U.viewport),ht.copy(U.scissor),Tt=U.scissorTest}else Pt.copy(Ft).multiplyScalar(X).floor(),ht.copy(oe).multiplyScalar(X).floor(),Tt=Ie;if(Mt!==0&&(gt=j),P.bindFramebuffer(at.FRAMEBUFFER,gt)&&P.drawBuffers(U,gt),P.viewport(Pt),P.scissor(ht),P.setScissorTest(Tt),vt){let Zt=pt.get(U.texture);at.framebufferTexture2D(at.FRAMEBUFFER,at.COLOR_ATTACHMENT0,at.TEXTURE_CUBE_MAP_POSITIVE_X+st,Zt.__webglTexture,Mt)}else if(Jt){let Zt=st;for(let ee=0;ee<U.textures.length;ee++){let se=pt.get(U.textures[ee]);at.framebufferTextureLayer(at.FRAMEBUFFER,at.COLOR_ATTACHMENT0+ee,se.__webglTexture,Mt,Zt)}}else if(U!==null&&Mt!==0){let Zt=pt.get(U.texture);at.framebufferTexture2D(at.FRAMEBUFFER,at.COLOR_ATTACHMENT0,at.TEXTURE_2D,Zt.__webglTexture,Mt)}yt=-1};function zr(U){let st=pt.get(U);return(st.__readFormat!==U.format||st.__readType!==U.type)&&(st.__readFormat=U.format,st.__readType=U.type,st.__formatReadable=Y.textureFormatReadable(U.format),st.__typeReadable=Y.textureTypeReadable(U.type)),st}this.readRenderTargetPixels=function(U,st,Mt,gt,vt,Jt,Vt,Zt=0){if(!(U&&U.isWebGLRenderTarget)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=pt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Vt!==void 0&&(ee=ee[Vt]),ee){P.bindFramebuffer(at.FRAMEBUFFER,ee);try{let se=U.textures[Zt],qt=se.format,ge=se.type;U.textures.length>1&&at.readBuffer(at.COLOR_ATTACHMENT0+Zt);let te=zr(se);if(te.__formatReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(te.__typeReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=U.width-gt&&Mt>=0&&Mt<=U.height-vt&&at.readPixels(st,Mt,gt,vt,Ut.convert(qt),Ut.convert(ge),Jt)}finally{let se=bt!==null?pt.get(bt).__webglFramebuffer:null;P.bindFramebuffer(at.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(U,st,Mt,gt,vt,Jt,Vt,Zt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=pt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Vt!==void 0&&(ee=ee[Vt]),ee)if(st>=0&&st<=U.width-gt&&Mt>=0&&Mt<=U.height-vt){P.bindFramebuffer(at.FRAMEBUFFER,ee);let se=U.textures[Zt],qt=se.format,ge=se.type;U.textures.length>1&&at.readBuffer(at.COLOR_ATTACHMENT0+Zt);let te=zr(se);if(te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=at.createBuffer();at.bindBuffer(at.PIXEL_PACK_BUFFER,Oe),at.bufferData(at.PIXEL_PACK_BUFFER,Jt.byteLength,at.STREAM_READ),at.readPixels(st,Mt,gt,vt,Ut.convert(qt),Ut.convert(ge),0),at.bindBuffer(at.PIXEL_PACK_BUFFER,null);let qe=bt!==null?pt.get(bt).__webglFramebuffer:null;P.bindFramebuffer(at.FRAMEBUFFER,qe);let Pe=at.fenceSync(at.SYNC_GPU_COMMANDS_COMPLETE,0);return at.flush(),await bd(at,Pe,4),at.bindBuffer(at.PIXEL_PACK_BUFFER,Oe),at.getBufferSubData(at.PIXEL_PACK_BUFFER,0,Jt),at.bindBuffer(at.PIXEL_PACK_BUFFER,null),at.deleteBuffer(Oe),at.deleteSync(Pe),Jt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,st=null,Mt=0){let gt=Math.pow(2,-Mt),vt=Math.floor(U.image.width*gt),Jt=Math.floor(U.image.height*gt),Vt=st!==null?st.x:0,Zt=st!==null?st.y:0;Et.setTexture2D(U,0),at.copyTexSubImage2D(at.TEXTURE_2D,Mt,0,0,Vt,Zt,vt,Jt),P.unbindTexture()},this.copyTextureToTexture=function(U,st,Mt=null,gt=null,vt=0,Jt=0){let Vt,Zt,ee,se,qt,ge,te,Oe,qe,Pe=U.isCompressedTexture?U.mipmaps[Jt]:U.image;if(Mt!==null)Vt=Mt.max.x-Mt.min.x,Zt=Mt.max.y-Mt.min.y,ee=Mt.isBox3?Mt.max.z-Mt.min.z:1,se=Mt.min.x,qt=Mt.min.y,ge=Mt.isBox3?Mt.min.z:0;else{let Ct=Math.pow(2,-vt);Vt=Math.floor(Pe.width*Ct),Zt=Math.floor(Pe.height*Ct),U.isDataArrayTexture?ee=Pe.depth:U.isData3DTexture?ee=Math.floor(Pe.depth*Ct):ee=1,se=0,qt=0,ge=0}gt!==null?(te=gt.x,Oe=gt.y,qe=gt.z):(te=0,Oe=0,qe=0);let s=Ut.convert(st.format),a=Ut.convert(st.type),c;st.isData3DTexture?(Et.setTexture3D(st,0),c=at.TEXTURE_3D):st.isDataArrayTexture||st.isCompressedArrayTexture?(Et.setTexture2DArray(st,0),c=at.TEXTURE_2D_ARRAY):(Et.setTexture2D(st,0),c=at.TEXTURE_2D),P.activeTexture(at.TEXTURE0),P.pixelStorei(at.UNPACK_FLIP_Y_WEBGL,st.flipY),P.pixelStorei(at.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),P.pixelStorei(at.UNPACK_ALIGNMENT,st.unpackAlignment);let p=P.getParameter(at.UNPACK_ROW_LENGTH),y=P.getParameter(at.UNPACK_IMAGE_HEIGHT),I=P.getParameter(at.UNPACK_SKIP_PIXELS),B=P.getParameter(at.UNPACK_SKIP_ROWS),tt=P.getParameter(at.UNPACK_SKIP_IMAGES);P.pixelStorei(at.UNPACK_ROW_LENGTH,Pe.width),P.pixelStorei(at.UNPACK_IMAGE_HEIGHT,Pe.height),P.pixelStorei(at.UNPACK_SKIP_PIXELS,se),P.pixelStorei(at.UNPACK_SKIP_ROWS,qt),P.pixelStorei(at.UNPACK_SKIP_IMAGES,ge);let nt=U.isDataArrayTexture||U.isData3DTexture,ft=st.isDataArrayTexture||st.isData3DTexture;if(U.isDepthTexture){let Ct=pt.get(U),At=pt.get(st),Ot=pt.get(Ct.__renderTarget),ae=pt.get(At.__renderTarget);P.bindFramebuffer(at.READ_FRAMEBUFFER,Ot.__webglFramebuffer),P.bindFramebuffer(at.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ye=0;ye<ee;ye++)nt&&(at.framebufferTextureLayer(at.READ_FRAMEBUFFER,at.COLOR_ATTACHMENT0,pt.get(U).__webglTexture,vt,ge+ye),at.framebufferTextureLayer(at.DRAW_FRAMEBUFFER,at.COLOR_ATTACHMENT0,pt.get(st).__webglTexture,Jt,qe+ye)),at.blitFramebuffer(se,qt,Vt,Zt,te,Oe,Vt,Zt,at.DEPTH_BUFFER_BIT,at.NEAREST);P.bindFramebuffer(at.READ_FRAMEBUFFER,null),P.bindFramebuffer(at.DRAW_FRAMEBUFFER,null)}else if(vt!==0||U.isRenderTargetTexture||pt.has(U)){let Ct=pt.get(U),At=pt.get(st);P.bindFramebuffer(at.READ_FRAMEBUFFER,Z),P.bindFramebuffer(at.DRAW_FRAMEBUFFER,K);for(let Ot=0;Ot<ee;Ot++)nt?at.framebufferTextureLayer(at.READ_FRAMEBUFFER,at.COLOR_ATTACHMENT0,Ct.__webglTexture,vt,ge+Ot):at.framebufferTexture2D(at.READ_FRAMEBUFFER,at.COLOR_ATTACHMENT0,at.TEXTURE_2D,Ct.__webglTexture,vt),ft?at.framebufferTextureLayer(at.DRAW_FRAMEBUFFER,at.COLOR_ATTACHMENT0,At.__webglTexture,Jt,qe+Ot):at.framebufferTexture2D(at.DRAW_FRAMEBUFFER,at.COLOR_ATTACHMENT0,at.TEXTURE_2D,At.__webglTexture,Jt),vt!==0?at.blitFramebuffer(se,qt,Vt,Zt,te,Oe,Vt,Zt,at.COLOR_BUFFER_BIT,at.NEAREST):ft?at.copyTexSubImage3D(c,Jt,te,Oe,qe+Ot,se,qt,Vt,Zt):at.copyTexSubImage2D(c,Jt,te,Oe,se,qt,Vt,Zt);P.bindFramebuffer(at.READ_FRAMEBUFFER,null),P.bindFramebuffer(at.DRAW_FRAMEBUFFER,null)}else ft?U.isDataTexture||U.isData3DTexture?at.texSubImage3D(c,Jt,te,Oe,qe,Vt,Zt,ee,s,a,Pe.data):st.isCompressedArrayTexture?at.compressedTexSubImage3D(c,Jt,te,Oe,qe,Vt,Zt,ee,s,Pe.data):at.texSubImage3D(c,Jt,te,Oe,qe,Vt,Zt,ee,s,a,Pe):U.isDataTexture?at.texSubImage2D(at.TEXTURE_2D,Jt,te,Oe,Vt,Zt,s,a,Pe.data):U.isCompressedTexture?at.compressedTexSubImage2D(at.TEXTURE_2D,Jt,te,Oe,Pe.width,Pe.height,s,Pe.data):at.texSubImage2D(at.TEXTURE_2D,Jt,te,Oe,Vt,Zt,s,a,Pe);P.pixelStorei(at.UNPACK_ROW_LENGTH,p),P.pixelStorei(at.UNPACK_IMAGE_HEIGHT,y),P.pixelStorei(at.UNPACK_SKIP_PIXELS,I),P.pixelStorei(at.UNPACK_SKIP_ROWS,B),P.pixelStorei(at.UNPACK_SKIP_IMAGES,tt),Jt===0&&st.generateMipmaps&&at.generateMipmap(c),P.unbindTexture()},this.initRenderTarget=function(U){pt.get(U).__webglFramebuffer===void 0&&Et.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?Et.setTextureCube(U,0):U.isData3DTexture?Et.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Et.setTexture2DArray(U,0):Et.setTexture2D(U,0),P.unbindTexture()},this.resetState=function(){lt=0,dt=0,bt=null,P.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}}});function RM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function LM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function NM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(op),this.state=We.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function DM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=We.DOLLY;break;case cr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=We.ROTATE}break;case cr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(pu)}function OM(n){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function FM(n){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(n.preventDefault(),this.dispatchEvent(pu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(op))}function UM(n){this.enabled!==!1&&this._handleKeyDown(n)}function BM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=We.TOUCH_ROTATE;break;case hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=We.TOUCH_DOLLY_PAN;break;case hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(pu)}function kM(n){switch(this._trackPointer(n),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=We.NONE}}function zM(n){this.enabled!==!1&&n.preventDefault()}function VM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function HM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var rp,pu,op,lc,sp,IM,hn,Dn,We,du,cc,ap=vn(()=>{ac();rp={type:"change"},pu={type:"start"},op={type:"end"},lc=new nr,sp=new Bn,IM=Math.cos(70*Yh.DEG2RAD),hn=new ct,Dn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},du=1e-6,cc=class extends Ao{constructor(t,e=null){super(t,e),this.state=We.NONE,this.target=new ct,this.cursor=new ct,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cr.ROTATE,MIDDLE:cr.DOLLY,RIGHT:cr.PAN},this.touches={ONE:hr.ROTATE,TWO:hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ct,this._lastQuaternion=new kn,this._lastTargetPosition=new ct,this._quat=new kn().setFromUnitVectors(t.up,new ct(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ts,this._sphericalDelta=new Ts,this._scale=1,this._panOffset=new ct,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new ct,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=LM.bind(this),this._onPointerDown=RM.bind(this),this._onPointerUp=NM.bind(this),this._onContextMenu=zM.bind(this),this._onMouseWheel=FM.bind(this),this._onKeyDown=UM.bind(this),this._onTouchStart=BM.bind(this),this._onTouchMove=kM.bind(this),this._onMouseDown=DM.bind(this),this._onMouseMove=OM.bind(this),this._interceptControlDown=VM.bind(this),this._interceptControlUp=HM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=We.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rp),this.update(),this.state=We.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;hn.copy(e).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Dn:i>Math.PI&&(i-=Dn),r<-Math.PI?r+=Dn:r>Math.PI&&(r-=Dn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),e.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let h=hn.length();l=this._clampDistance(h*this._scale);let f=h-l;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){let h=new ct(this._mouse.x,this._mouse.y,0);h.unproject(this.object);let f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;let d=new ct(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),l=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(lc.origin.copy(this.object.position),lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lc.direction))<IM?this.object.lookAt(this.target):(sp.setFromNormalAndCoplanarPoint(this.object.up,this.target),lc.intersectPlane(sp,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>du||8*(1-this._lastQuaternion.dot(this.object.quaternion))>du||this._lastTargetPosition.distanceToSquared(this.target)>du?(this.dispatchEvent(rp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Dn/60*this.autoRotateSpeed*t:Dn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){hn.setFromMatrixColumn(e,0),hn.multiplyScalar(-t),this._panOffset.add(hn)}_panUp(t,e){this.screenSpacePanning===!0?hn.setFromMatrixColumn(e,1):(hn.setFromMatrixColumn(e,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(t),this._panOffset.add(hn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;hn.copy(r).sub(this.target);let o=hn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,o=e-i.top,l=i.width,h=i.height;this._mouse.x=r/l*2-1,this._mouse.y=-(o/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(l,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ce,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function lp(n,t,e,i){n.onBeforeCompile=r=>{r.uniforms.uCut={value:t-.05},r.uniforms.uBase={value:i||new Me(1,1,1)},r.uniforms.uBottom={value:t},r.vertexShader=`varying float vZ;
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
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function cp(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let r=i.getContext("2d");r.font="600 84px Inter, system-ui, sans-serif",r.fillStyle="#"+new Me(t).getHexString(),r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,64);let o=new go(i);o.colorSpace=An;let l=new po(new xs({map:o,depthTest:!1,transparent:!0}));return l.scale.set(e*2,e,1),l.renderOrder=6,l}var On,Os,GM,hc,hp=vn(()=>{ac();ap();On={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa",rough3d:"#f5a524",rest3d:"#e3c341",finish3d:"#ff7a59"},Os={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};GM=(n,t)=>n.some(e=>e.key===t);hc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new rc({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new co,this.camera=new Sn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new cc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new bo(16777215,4478310,1.6));let t=new Es(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new Es(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new Zn,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=r=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&r-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=r,this.onFrame&&this.onFrame(r),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,r=new ct((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),l=new ct(-.45,-.8,.75).normalize(),h=[];for(let v of[t[0],e[0]])for(let _ of[t[1],e[1]])for(let b of[t[2],e[2]])h.push(new ct(v,_,b));let f=r.clone(),d=o*2,g=()=>{this.camera.position.copy(f).addScaledVector(l,d),this.camera.near=d/100,this.camera.far=d*100,this.camera.lookAt(f),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let v=0;v<8;v++){g();let _=1/0,b=-1/0,w=1/0,T=-1/0;for(let N of h){let O=N.clone().project(this.camera);_=Math.min(_,O.x),b=Math.max(b,O.x),w=Math.min(w,O.y),T=Math.max(T,O.y)}let S=Math.max((b-_)/2,(T-w)/2);if(!(S>0))break;let x=d*Math.tan(this.camera.fov*Math.PI/360),L=x*this.camera.aspect,V=new ct().setFromMatrixColumn(this.camera.matrixWorld,0),C=new ct().setFromMatrixColumn(this.camera.matrixWorld,1);f.addScaledVector(V,(_+b)/2*L).addScaledVector(C,(w+T)/2*x),d*=S/(1-i)}g(),this.controls.target.copy(f),this.controls.update()}showPart(t,e=[]){this.clear();let i=new je;i.setAttribute("position",new Ye(t.positions,3)),i.setIndex(new Ye(t.indices,1)),i.computeVertexNormals();let r=new Ue(i,new Hn({color:9348283,metalness:.15,roughness:.55,side:bn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(r),this.pickMesh=r;let o=new Cr(new bs(i,25),new oi({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let h of e)this.addLoops(h.loops,h.z,h.color,h.dashed,h.opacity);i.computeBoundingBox();let l=i.boundingBox;this.keepCamera||this.frame(l.min.toArray(),l.max.toArray())}addLoops(t,e,i,r,o=.95){for(let l of t){let h=l.map(([v,_])=>new ct(v,_,e)),f=new je().setFromPoints([...h,h[0]]),d=r?new xo({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new oi({color:i,transparent:!0,opacity:o,depthTest:!1}),g=new Ar(f,d);r&&g.computeLineDistances(),g.renderOrder=2,this.content.add(g)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let r=t.getBoundingClientRect(),o=new Eo;if(o.setFromCamera(new ce((i.clientX-r.left)/r.width*2-1,-((i.clientY-r.top)/r.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let f=o.intersectObjects(this.markers)[0];if(f?.object.userData.axis){this.onAxis?.(f.object.userData.axis);return}if(f){this.onMarker(f.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let l=o.intersectObject(this.pickMesh)[0];if(!l||!l.face)return;let h=l.face.normal.clone();h.dot(o.ray.direction)>0&&h.negate(),this.onPick([h.x,h.y,h.z])})}showZero({stock:t,part:e,points:i,selected:r,zFace:o,color:l,accent:h="#4c6ef5"}){this.clear();let f=t.maxX-t.minX,d=t.maxY-t.minY,g=t.top-t.bottom,v=Math.max(f,d,g),_=new rr(f,d,g);_.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let b=new Ue(_,new Hn({color:l,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(b.renderOrder=2,this.content.add(b),this.content.add(new Cr(new bs(_),new oi({color:new Me(l).multiplyScalar(.6)}))),e){let x=new je;x.setAttribute("position",new Ye(e.positions,3)),x.setIndex(new Ye(e.indices,1)),x.computeVertexNormals(),this.partMesh=new Ue(x,new Hn({color:9348283,metalness:.15,roughness:.55})),this.content.add(this.partMesh)}else this.partMesh=null;let w=o==="bed"?t.bottom:t.top,T=v*.014;this.markers=[];for(let x of i){let L=x.key===r,V=new Ue(new sr(L?T*1.3:T,24,16),new zn({color:L?h:16777215}));if(V.position.set(x.x,x.y,w),V.userData.key=x.key,V.renderOrder=4,V.material.depthTest=!1,!L){let N=new Ue(new sr(T*1.25,24,16),new zn({color:6187893,depthTest:!1}));N.renderOrder=3,V.add(N)}let C=new Ue(new sr(T*3.5,12,8),new zn({visible:!1}));if(C.userData.key=x.key,V.add(C),this.markers.push(C),this.content.add(V),L){let N=new Ue(new yo(T*1.6,T*2,40),new zn({color:h,transparent:!0,depthTest:!1,side:bn}));N.position.copy(V.position),N.renderOrder=4,this.content.add(N),this.pulse=N;let O=v*.24;for(let[z,A,k]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let G=new To(new ct(...z),V.position,O,A,O*.15,O*.065);G.line.visible=!1;let $=new Ue(new Mi(v*.0028,v*.0028,O*.86,12),new zn({color:A,depthTest:!1}));$.position.y=O*.43,$.renderOrder=5,G.add($),G.cone.material.depthTest=!1,G.renderOrder=5,G.cone.renderOrder=5,this.content.add(G);let J=cp(k,A,v*.05);J.position.copy(V.position).add(new ct(...z).multiplyScalar(O*1.18)),this.content.add(J);let j=new Ue(new Mi(O*.1,O*.1,O*1.3,10),new zn({visible:!1}));j.quaternion.setFromUnitVectors(new ct(0,1,0),new ct(...z)),j.position.copy(V.position).add(new ct(...z).multiplyScalar(O*.65)),j.userData.axis=k.toLowerCase(),this.content.add(j),this.markers.unshift(j)}}}let S=cp("Front",9675444,v*.04);S.position.set((t.minX+t.maxX)/2,t.minY-v*.08,t.bottom),this.content.add(S),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),GM(i,r)||(this.pulse=null),this.onFrame=x=>{if(!this.pulse)return;let L=x%1600/1600;this.pulse.scale.setScalar(1+L*1.6),this.pulse.material.opacity=.8*(1-L),this.pulse.lookAt(this.camera.position)}}spin(t,e=700){let i=this.partMesh;if(!i)return Promise.resolve();i.geometry.computeBoundingBox();let r=i.geometry.boundingBox.getCenter(new ct),o=t==="x"?new ct(1,0,0):new ct(0,0,1);i.matrixAutoUpdate=!1;let l=performance.now();return new Promise(h=>{let f=d=>{let g=Math.min(1,(d-l)/e),v=g<.5?2*g*g:1-(-2*g+2)**2/2;i.matrix.makeTranslation(r.x,r.y,r.z).multiply(new Xe().makeRotationAxis(o,Math.PI*v)).multiply(new Xe().makeTranslation(-r.x,-r.y,-r.z)),i.matrixWorldNeedsUpdate=!0,g<1&&i.parent?requestAnimationFrame(f):h()};requestAnimationFrame(f)})}showStock(t,e,i){this.clear(),this.keepCamera=!1;let r=t.nx,o=t.ny,l=r*o,h=new Float32Array(l*3),f=new Float32Array(l*3),d=new Me(e);for(let L=0;L<o;L++)for(let V=0;V<r;V++){let C=L*r+V;h[C*3]=t.x0+V*t.cell,h[C*3+1]=t.y0+L*t.cell,h[C*3+2]=t.h[C],f[C*3]=d.r,f[C*3+1]=d.g,f[C*3+2]=d.b}let g=new Uint32Array((r-1)*(o-1)*6),v=0;for(let L=0;L<o-1;L++)for(let V=0;V<r-1;V++){let C=L*r+V,N=C+1,O=C+r,z=O+1;g[v++]=C,g[v++]=N,g[v++]=z,g[v++]=C,g[v++]=z,g[v++]=O}let _=new je;_.setAttribute("position",new Ye(h,3).setUsage(Rr)),_.setAttribute("color",new Ye(f,3).setUsage(Rr));let b=new Float32Array(l*3);for(let L=0;L<l;L++)b[L*3+2]=1;_.setAttribute("normal",new Ye(b,3).setUsage(Rr));let w=new Float32Array(l*4);for(let L=0;L<l;L++)w[L*4+2]=t.h[L],w[L*4+3]=t.h[L];_.setAttribute("wall",new Ye(w,4).setUsage(Rr)),_.setIndex(new Ye(g,1));let T=new Hn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Os.aluminum?.5:.05,side:bn});lp(T,t.bottom,!1,d);let S=new Ue(_,T);this.content.add(S),this.stock={hm:t,geo:_,base:d,sides:this.makeSides(t,d)};let x=new Hn({color:d.clone().multiplyScalar(.7),roughness:.9,side:bn});if(lp(x,t.bottom,!0),this.content.add(new Ue(_,x)),i){let L=new je;L.setAttribute("position",new Ye(i.positions,3)),L.setIndex(new Ye(i.indices,1)),L.computeVertexNormals(),this.partGhost=new Ue(L,new Hn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new Zn,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(r-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let v=0;v<t.nx;v++)i.push(v);for(let v=1;v<t.ny;v++)i.push(v*t.nx+t.nx-1);for(let v=t.nx-2;v>=0;v--)i.push((t.ny-1)*t.nx+v);for(let v=t.ny-2;v>=0;v--)i.push(v*t.nx);let r=new Float32Array(i.length*6),o=new Float32Array(i.length*6),l=[],h=[[0,-1],[1,0],[0,1],[-1,0]],f=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let v=0;v<i.length;v++){let _=i[v],b=t.x0+_%t.nx*t.cell,w=t.y0+Math.floor(_/t.nx)*t.cell;r.set([b,w,t.h[_],b,w,t.bottom],v*6);let[T,S]=h[v<f[0]?0:v<f[1]?1:v<f[2]?2:3];if(o.set([T,S,0,T,S,0],v*6),v<i.length-1){let x=v*2;l.push(x,x+1,x+3,x,x+3,x+2)}}let d=new je;d.setAttribute("position",new Ye(r,3).setUsage(Rr)),d.setAttribute("normal",new Ye(o,3)),d.setIndex(l);let g=new Ue(d,new Hn({color:e.clone().multiplyScalar(.85),roughness:.85,side:bn}));return this.content.add(g),{g:d,edge:i}}refreshStock(t,e,i){let r=this.stock;if(!r||e<t)return;let{hm:o,geo:l,base:h}=r,f=o.nx,d=o.ny,g=o.h,v=l.attributes.position,_=l.attributes.color,b=l.attributes.normal,w=l.attributes.wall,T=new Me,S=Math.max(0,t),x=Math.min(d-1,e),L=o.cell*1.5,V=(A,k,G)=>{let $=g[k*f+A],J=0;for(let j=-1;j<=1;j++)for(let Z=-1;Z<=1;Z++){let K=A+Z,lt=k+j;(Z||j)&&K>=0&&lt>=0&&K<f&&lt<d&&(J=Math.max(J,G*(g[lt*f+K]-$)))}return J};for(let A=S;A<=x;A++)for(let k=0;k<f;k++){let G=A*f+k;v.array[G*3]=o.x0+k*o.cell+(o.sx?o.sx[G]:0),v.array[G*3+1]=o.y0+A*o.cell+(o.sy?o.sy[G]:0),v.array[G*3+2]=g[G];let $=o.op[G];$?(T.copy(h).lerp(i[$-1],.28),T.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(g[G]-o.bottom)/Math.max(1,o.top-o.bottom))))):T.copy(h),_.array[G*3]=T.r,_.array[G*3+1]=T.g,_.array[G*3+2]=T.b}let C=v.array,N=Math.max(0,S-1),O=Math.min(d-1,x+1);for(let A=N;A<=O;A++)for(let k=0;k<f;k++){let G=A*f+k,$=w.array,J=V(k,A,1),j=V(k,A,-1);if($[G*4]=0,$[G*4+1]=0,$[G*4+2]=g[G],$[G*4+3]=g[G],o.wx&&(o.wx[G]||o.wy[G])&&(J>L||j>L)){$[G*4]=o.wx[G],$[G*4+1]=o.wy[G],$[G*4+2]=g[G]-j,$[G*4+3]=g[G]+J,b.array[G*3]=0,b.array[G*3+1]=0,b.array[G*3+2]=1;continue}let Z=(A*f+Math.max(0,k-1))*3,K=(A*f+Math.min(f-1,k+1))*3,lt=(Math.max(0,A-1)*f+k)*3,dt=(Math.min(d-1,A+1)*f+k)*3,bt=C[K]-C[Z],yt=C[K+1]-C[Z+1],wt=C[K+2]-C[Z+2],Pt=C[dt]-C[lt],ht=C[dt+1]-C[lt+1],Tt=C[dt+2]-C[lt+2],Wt=yt*Tt-wt*ht,Ht=wt*Pt-bt*Tt,zt=bt*ht-yt*Pt,_t=Math.hypot(Wt,Ht,zt)||1;zt<0&&(Wt=-Wt,Ht=-Ht,zt=-zt),b.array[G*3]=Wt/_t,b.array[G*3+1]=Ht/_t,b.array[G*3+2]=zt/_t}v.addUpdateRange(S*f*3,(x-S+1)*f*3),_.addUpdateRange(S*f*3,(x-S+1)*f*3),b.addUpdateRange(N*f*3,(O-N+1)*f*3),w.addUpdateRange(N*f*4,(O-N+1)*f*4),v.needsUpdate=!0,_.needsUpdate=!0,b.needsUpdate=!0,w.needsUpdate=!0;let z=r.sides.g.attributes.position;r.sides.edge.forEach((A,k)=>{z.array[k*6+2]=g[A]}),z.needsUpdate=!0}setTool(t,e){for(let v of[...this.tool.children])this.tool.remove(v),v.traverse(_=>{_.geometry?.dispose(),_.material?.dispose()});let i=t.diameter/2,r=t.kind==="surfacing"||i>6.35,o=r?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),l=new Hn({color:14015457,metalness:.85,roughness:.3}),h;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let v=i/Math.tan((t.kind==="drill"?118:60)*Math.PI/360);h=new Ue(new Ss(i,v,48),l),h.rotation.x=-Math.PI/2,h.position.z=v/2}else if(t.kind==="ball"){h=new Zn;let v=new Ue(new Mi(i,i,o-i,64),l);v.rotation.x=Math.PI/2,v.position.z=i+(o-i)/2;let _=new Ue(new sr(i,48,24,0,Math.PI*2,Math.PI/2,Math.PI/2),l);_.rotation.x=Math.PI/2,_.position.z=i,h.add(v,_)}else h=new Ue(new Mi(i,i,o,64),l),h.rotation.x=Math.PI/2,h.position.z=o/2;let f=r?3.175:Math.max(i,Math.min(3.175,i*1.5)),d=20,g=new Ue(new Mi(f,f,d,32),new Hn({color:11187132,metalness:.8,roughness:.35}));g.rotation.x=Math.PI/2,g.position.z=o+d/2,this.tool.add(h,g)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new Zn;for(let e of t){let i=e.track;if(!i)continue;let r=[],o=[];for(let h=4;h<i.length;h+=4)(i[h+3]>0?r:o).push(i[h-4],i[h-3],i[h-2]+.02,i[h],i[h+1],i[h+2]+.02);let l=(h,f,d)=>{if(!h.length)return;let g=new je;g.setAttribute("position",new $e(h,3));let v=new Cr(g,new oi({color:f,transparent:!0,opacity:d}));v.renderOrder=3,this.paths.add(v)};l(r,On[e.kind]||"#1abc9c",.75),l(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function WM(){return new Promise((n,t)=>{let e=indexedDB.open(XM,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function up(n,t){let e=await WM();return new Promise((i,r)=>{let o=e.transaction("kv",n),l=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(l?.result)},o.onerror=o.onabort=()=>{e.close(),r(o.error)}})}var XM,fp,dp,pp=vn(()=>{XM="nccam";fp=n=>up("readonly",t=>t.get(n)).catch(()=>null),dp=(n,t)=>up("readwrite",e=>e.put(t,n)).catch(()=>{})});var gp={};Pu(gp,{mountApp:()=>JM});function JM(n,t,e){let i={get:async D=>{let q=await fetch(t.base+D);if(!q.ok)throw new Error(`${D}: ${q.status}`);return q.json()},post:(D,q)=>fetch(t.base+D,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)})},r={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,tools:[],numbering:"slot",safeZ:null,connected:!1,units:"mm",limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:""},o=new hc,l=D=>!!D.toolNumber&&(!r.slots||D.toolNumber<=r.slots),h=(D,q)=>$i.num(D,r.units,q),f=(D,q)=>$i.len(D,r.units,q),d=0;(async()=>{let[D,q,Q,rt]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);r.units=$i.unitsFrom(D?.unitsPreference),r.numbering=D?.tool?.numbering==="toolId"?"toolId":"slot",r.slots=Math.max(0,Number(D?.tool?.count)||0);let ut=D?.tool?.probe?Number(D?.tool?.probeToolNumber)||99:null,Dt=Number(D?.safeZHeight);r.safeZ=Number.isFinite(Dt)?Dt:null,r.tools=$u(Array.isArray(q)?q:q?.tools),r.numbering=Yu(r.numbering,r.tools,r.slots,ut);let Lt=Q?.settings||{},Gt=It=>{let mt=parseFloat(Lt[It]?.value);return Number.isFinite(mt)&&mt>0?mt:null};r.limits={maxRpm:Gt("30")||void 0,minRpm:Gt("31")||void 0,maxFeed:Math.min(Gt("110")||1/0,Gt("111")||1/0,1/0)},Number.isFinite(r.limits.maxFeed)||delete r.limits.maxFeed,r.maxRapid=Math.min(Gt("110")||5e3,Gt("111")||5e3),Gt("130")&&Gt("131")&&(r.travel={x:Gt("130"),y:Gt("131"),z:Gt("132")}),r.connected=!!rt?.machineState?.connected,V();let H=await fp("last");H?.bytes&&!r.part&&!r.loading&&g(null,H)})();async function g(D,q=null){if(!D&&!q)return;let Q=q?q.name:D.name;r.fileName=Q,r.loading=`Reading ${Q}\u2026`,r.error="",r.plan=null,r.result=null,r.analysis=null,r.part=null,r.step=1,r.maxStep=1,V();try{let rt=q?q.bytes:await D.arrayBuffer();r.bytes=rt.slice(0);let ut=await e("load",{bytes:rt},[rt]);if(r.sides=ut.sides,q?.upPath?.length){r.job=null;for(let Dt of q.upPath)await _(Dt,!0);r.job={...Oc(r.analysis),...q.job},await S()}else await _(ut.best);L()}catch(rt){r.error=rt.message||String(rt),r.fileName=""}r.loading="",V()}let v={top:"bottom",bottom:"top",front:"back",back:"front",left:"right",right:"left"};async function _(D,q=!1,Q=!1){Q||(r.loading="Turning the part\u2026",V());let ut=await(D&&!Array.isArray(D)&&typeof D=="object"?e("turn",{how:D.turn}):e(Array.isArray(D)?"tilt":"orient",Array.isArray(D)?{normal:D}:{up:D}));return b(D,ut,q)}function b(D,q,Q){let rt=D&&!Array.isArray(D)&&typeof D=="object";if(rt?r.up=D.turn==="over"?v[r.up]||"custom":r.up:r.up=Array.isArray(D)?"custom":D,r.upPath=rt||Array.isArray(D)?[...r.upPath||[],D]:[D],Q){r.part={positions:q.positions,indices:q.indices},r.analysis=q.analysis,r.loading="";return}r.part={positions:q.positions,indices:q.indices},r.analysis=q.analysis;let ut=r.job;return r.job=Oc(q.analysis),ut&&Object.assign(r.job,{material:ut.material,finish:ut.finish,zero:ut.zero,tabs:ut.tabs,stock:{...r.job.stock,fit:ut.stock.fit,margin:ut.stock.margin,extraTop:ut.stock.extraTop}}),r.loading="",S()}let w=!1;async function T(D){if(w||!r.part)return;w=!0;let q={turn:D==="z"?"over":"around"};try{let[Q]=await Promise.all([e("turn",{how:q.turn}),o.spin(D==="z"?"x":"z")]);await b(q,Q,!1)}catch(Q){r.error=Q.message||String(Q),V()}w=!1}async function S(D=!1){if(!r.part)return;let q=++d;r.planning=!0,D&&(r.result=null),V();try{let Q=await e("plan",{tools:r.tools,job:{...r.job,units:r.units},limits:r.limits,paths:D,gcodeOptions:{name:r.fileName,numbering:r.numbering,safeZHeightMm:r.safeZ},timing:{maxRapid:r.maxRapid||5e3}});if(q!==d)return;r.plan=Q.plan,L(),D&&(r.result=Q,r.simChecks=null)}catch(Q){q===d&&(r.error=Q.message||String(Q))}q===d&&(r.planning=!1,V())}let x=null;function L(){!r.bytes||!r.job||(clearTimeout(x),x=setTimeout(()=>dp("last",{name:r.fileName,bytes:r.bytes,upPath:r.upPath,job:r.job,savedAt:Date.now()}),400))}function V(){if(!n.isConnected)return;let D=n.querySelector("[data-keep-scroll]"),q=D?D.scrollTop:0,Q=r.step,rt=["Drop a STEP file. ncCAM finds the pockets, holes and outline for you.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][Q-1],ut=[r.part?"Your part":"Open your part","What are you cutting it from?","Here\u2019s the plan",r.simChecks&&!r.simChecks.ok?"Check the warnings":"Ready to cut"][Q-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCAM<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">STEP file to G-code</div></div>
        <div class="ncc-steps">${$M.map((Gt,H)=>{let It=H+1,mt=It===Q?"on":It<r.maxStep||It<Q?"done":"";return`<button class="ncc-step ${mt}" type="button" data-go="${It}" ${It<=r.maxStep?"":"disabled"}><span class="ncc-num">${mt==="done"?"\u2713":It}</span>${Ze(Gt)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${en.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${Ze(ut)}</h1><p class="ncc-lede">${Ze(rt)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${r.connected?"ok":""}"></span>${r.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${Q===3?"fixed":""}">${[N,J,Pt,Ht][Q-1]()}</div>
        <div class="ncc-foot">${C()}</div>
      </section>
      ${r.toast?`<div class="ncc-toast" role="status">${Ze(r.toast)}</div>`:""}`;let Dt=n.querySelector("[data-keep-scroll]");Dt&&(Dt.scrollTop=q);let Lt=n.querySelector("[data-viewer]");if(Lt){Lt.replaceWith(o.el);let Gt=r.loading||Q===4&&!r.result?`<div class="ncc-busy"><span class="ncc-spin"></span>${Ze(r.loading||"Making toolpaths\u2026")}</div>`:"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(H=>H.remove()),o.el.insertAdjacentHTML("beforeend",(Q===1?k():Q===4?Qt():"")+Gt),o.fit(),Q===1&&$(),Q===2&&wt(),Q===3&&Tt(),Q===4&&r.result&&oe()}}function C(){let D=`<button class="ncc-back" type="button" data-go="${r.step-1}" ${r.step>1?"":"disabled"}>Back</button>`;if(r.step===1)return`${D}<button class="ncc-next" type="button" data-go="2" ${r.plan&&r.plan.ops.length&&!r.loading?"":"disabled"}>Next: Stock ${en.next}</button>`;if(r.step===2)return`${D}<button class="ncc-next" type="button" data-go="3">Next: Operations ${en.next}</button>`;if(r.step===3){let Q=r.plan&&r.plan.ops.some(rt=>rt.enabled);return`${D}<button class="ncc-next" type="button" data-go="4" ${Q&&!r.planning?"":"disabled"}>Make toolpaths ${en.next}</button>`}let q=r.simChecks&&!r.simChecks.ok;return`${D}${q?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${r.result&&r.simChecks&&!q?"":"disabled"}>${en.load}Load into ncSender</button>`}function N(){if(!r.part&&!r.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${en.upload}</div>
        <h2>Drop a STEP file here</h2>
        <p>Export your part from Fusion, Onshape, FreeCAD or SolidWorks as <strong>.step</strong> or <strong>.stp</strong>. Millimetres or inches both work.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open STEP file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        ${r.error?`<div class="ncc-hint bad" style="max-width: 520px">${en.warn}<span>${Ze(r.error)}</span></div>`:""}
        ${r.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${en.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCAM can pick them.</span></div>`}
      </div>`;let D=r.analysis;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${en.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${Ze(r.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${D?`${h(D.size[0])} \xD7 ${h(D.size[1])} \xD7 ${f(D.size[2])}`:"&nbsp;"}</div></div>
          </div>
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        </div>
        <div data-viewer></div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card">
          <div class="ncc-label">Which side faces up?</div>
          <div class="ncc-picks">${qM.map(([q,Q])=>{let rt=!r.sides||r.sides[q].reachable;return`<button class="ncc-pick ${r.up===q?"sel":""}" type="button" data-up="${q}" ${rt?"":"disabled"} ${rt?"":`title="With the ${Q.toLowerCase()} up, some faces point down and the tool can\u2019t reach them"`}>${rn(ZM[q],24,'stroke-width="1.8"')}${Q}${rt?"":"<small>Can\u2019t reach</small>"}</button>`}).join("")}</div>
          <div class="ncc-row-sub">Or click a flat face on the model to put it on top.</div>
        </div>
        ${O()}
        ${A(!0)}
      </div>`}function O(){if(!r.plan)return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-row-sub">${r.planning?"Looking\u2026":""}</div></div>`;let D=new Map;for(let Q of r.plan.ops.filter(rt=>rt.kind!=="face"&&rt.kind!=="corners"&&rt.kind!=="finish3d"&&rt.kind!=="rest3d")){let rt=z(Q),ut=D.get(rt)||{o:Q,name:rt,n:0};ut.n+=Q.count||1,D.set(rt,ut)}let q=Q=>Q.n<2?Q.name:Q.name.replace(/^(Pocket|Step), /,(rt,ut)=>`${Q.n} ${ut.toLowerCase()}s, `);return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-found">${[...D.values()].map(Q=>`<div class="ncc-row"><span style="display: flex; align-items: center; gap: 8px"><span class="ncc-swatch" style="background: ${On[Q.o.kind]}"></span>${Ze(q(Q))}</span><span class="ncc-ok">\u2713</span></div>`).join("")||'<div class="ncc-row-sub">Nothing to cut from this side.</div>'}</div></div>`}function z(D){let q=D.detail.replace(/ · spiral$/,"");return D.kind==="cutout"?`Outline, ${f(D.zTop)} cut-out`:D.kind==="rough3d"?`3D surface, ${f(D.zTop)} tall`:D.kind==="hole"||D.kind==="drill"?`${D.centers.length>1?`${D.centers.length} holes`:"Hole"}, ${q}`:D.kind==="step"?`Step, ${q}`:`Pocket, ${q.split(" \xB7 ").pop()}`}function A(D){if(!r.plan)return"";let q=r.plan.warnings.filter(Q=>!D||Q.kind==="undercut"||Q.kind==="sloped"||Q.kind==="edges"||Q.kind==="surface3d");return!q.length&&D?`<div class="ncc-hint">${en.info}<span>Everything can be cut from the top in one setup.</span></div>`:q.map(Q=>`<div class="ncc-hint ${Q.kind==="notool"||Q.kind==="noball"?"bad":""}">${Q.kind==="notool"||Q.kind==="noball"?en.warn:en.info}<span>${Ze(Q.text)}</span></div>`).join("")}function k(){if(!r.plan)return"";let D=[...new Set(r.plan.ops.filter(Q=>Q.kind!=="face"&&Q.kind!=="corners"&&Q.kind!=="finish3d"&&Q.kind!=="rest3d").map(Q=>Q.kind))],q={pocket:"Pockets",hole:"Holes",drill:"Holes",step:"Steps",cutout:"Outline",rough3d:"3D surface"};return`<div class="ncc-overlay tr">${D.map(Q=>`<span class="ncc-chip"><span class="ncc-swatch" style="background: ${On[Q]}"></span>${q[Q]}</span>`).join("")}</div>
      <div class="ncc-overlay bl"><span class="ncc-chip">Drag to rotate</span><span class="ncc-chip">Scroll to zoom</span><span class="ncc-chip">Click a face to put it on top</span></div>`}let G=null;function $(){if(!r.part)return;Ft=null,yt=null;let D=r.part.positions,q=(r.plan?.ops||[]).filter(Q=>Q.kind!=="face"&&Q.kind!=="corners").flatMap(Q=>Q.kind==="cutout"?[{loops:Q.region,z:Q.zTop+.05,color:On.cutout,dashed:!0}]:Q.centers&&!Q.region?[{loops:Q.centers.map(rt=>mp(rt)),z:Q.zTop+.05,color:On[Q.kind]}]:[{loops:Q.region,z:Q.zTop+.05,color:On[Q.kind]}]);o.keepCamera=G===D,o.showPart(r.part,q),G=D,o.onFrame=null,o.onPick=async Q=>{if(r.loading)return;let rt=r.up;try{await _(Q),r.analysis.undercut&&rt!=="custom"&&(!r.sides||r.sides[rt]?.reachable)&&(await _(rt),pt("With that face up, some of the part can\u2019t be reached from the top."))}catch(ut){r.error=ut.message,V()}}}function J(){let D=r.job,q=r.plan?.stock||Qo(r.analysis,D),Q=Object.entries(yr).map(([ut,Dt])=>`<button class="ncc-pick ncc-mat ${D.material===ut?"sel":""}" type="button" data-material="${ut}"><span class="ncc-mat-swatch" style="background: ${Os[ut]}"></span>${Ze(Dt.name)}<small>${Ze(Dt.note)}</small></button>`).join(""),rt=(ut,Dt,Lt)=>`<div class="ncc-field"><label for="ncc-${ut}">${Dt}</label><input id="ncc-${ut}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${ut}" value="${r.units==="in"?Math.round(Lt/$i.INCH*1e3)/1e3:Math.round(Lt*100)/100}" ${D.stock.fit?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${Q}</div></div>
        <div class="ncc-card">
          ${j("fit","Size the stock to the part",`Adds ${f(D.stock.margin)} on every side and ${f(D.stock.extraTop)} on top`,D.stock.fit)}
          <div class="ncc-fields">${rt("width",`Width X (${r.units})`,q.width)}${rt("depth",`Depth Y (${r.units})`,q.depth)}${rt("thickness",`Thickness Z (${r.units})`,q.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${j("tabs","Leave tabs to hold the part",D.tabs.enabled?`${h(K().height)} \xD7 ${f(K().length)}, so the part stays put until you cut it free`:"The part comes loose at the end",D.tabs.enabled)}
          ${D.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${D.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${D.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${D.tabs.count>=12?"disabled":""}>+</button></div></div>
          ${dt("height","Tab thickness","Thinner tabs","Thicker tabs")}
          ${dt("length","Tab length","Shorter tabs","Longer tabs")}`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${bt(q)}
          <div style="font-size: 14px">X Y zero: <strong>${Ze(Z(D.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${D.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${D.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let j=(D,q,Q,rt)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${Ze(q)}</div><div class="ncc-row-sub">${Ze(Q)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${rt}" aria-label="${Ze(q)}" data-toggle="${D}"></button></div>`;function Z(D){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[D]}let K=()=>({...Yi(r.job.material),...Object.fromEntries(["height","length"].filter(D=>r.job.tabs[D]!=null).map(D=>[D,r.job.tabs[D]]))}),lt=()=>r.units==="in"?{min:.508,max:10.16,step:.508,grid:.254}:{min:.5,max:10,step:.5,grid:.1};function dt(D,q,Q,rt){let ut=K()[D];return`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${q}</span><div class="ncc-stepper"><button type="button" data-tabsize="${D}" data-by="-1" aria-label="${Q}" ${ut<=lt().min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${f(ut,r.units==="in"?2:1)}</span><button type="button" data-tabsize="${D}" data-by="1" aria-label="${rt}" ${ut>=lt().max-1e-6?"disabled":""}>+</button></div></div>`}function bt(D){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${h(D.width)} \xD7 ${h(D.depth)} \xD7 ${f(D.thickness)} stock \xB7 tap a point for zero, an arrow to turn the part</div>`}let yt=null;function wt(){let D=r.plan?.stock||Qo(r.analysis,r.job),q=Ju.map(ut=>({key:ut,...Fc(D,{xy:ut,z:"top"})})),Q=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",rt=`${r.part?.positions?.length}|${D.width}|${D.depth}|${D.thickness}`;o.keepCamera=yt===rt,o.showZero({stock:D,part:r.part,points:q,selected:r.job.zero.xy,zFace:r.job.zero.z,color:Os[r.job.material],accent:Q}),yt=rt,G=null,Ft=null,o.onPick=null,o.onMarker=ut=>{ut!==r.job.zero.xy&&(r.job.zero.xy=ut,it())},o.onAxis=ut=>T(ut)}function Pt(){let D=r.plan;if(!D)return'<div class="ncc-busy" style="position: static; flex: 1"><span class="ncc-spin"></span>Planning\u2026</div>';let q=D.ops.map(H=>{let It=Wt(H);return`<div class="ncc-op ${H.enabled?"":"off"} ${r.focusOp===H.id?"focus":""}" data-focus="${H.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${On[H.kind]} 16%, transparent); color: ${On[H.kind]}">${en[H.kind]||en.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${Ze(H.label)}</div><div class="ncc-op-sub ncc-mono">${Ze(H.detail)}</div></div>
        <select class="ncc-select" data-tool="${H.id}" aria-label="Tool for ${Ze(H.label)}">${It.map(mt=>`<option value="${mt.id}" ${mt.id===H.tool.id?"selected":""}>T${xr(mt,r.numbering)} \xB7 ${Ze(mt.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${H.enabled}" aria-label="${Ze(H.label)}" data-op="${H.id}"></button>
      </div>`}).join(""),Q=ta(D),rt=new Map;for(let H of D.ops)H.enabled&&H.kind!=="face"&&rt.set(H.tool.id,(rt.get(H.tool.id)||0)+1);let ut=[...rt].sort((H,It)=>It[1]-H[1])[0]?.[0],Dt=D.ops.find(H=>H.enabled&&H.tool.id===ut)||D.ops.find(H=>H.enabled),Lt=Dt?.feeds,Gt=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries($n).map(([H,It])=>`<button type="button" class="${r.job.finish===H?"sel":""}" data-finish="${H}">${It.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${D.ops.some(H=>H.kind==="finish3d")?`3D: passes spaced for ${f(Ko[r.job.finish],r.units==="in"?4:2)} ridges${r.job.finish==="fast"?"; flat walls without a finishing pass":""}.`:""} ${{fast:"Bigger steps, no finishing pass.",balanced:`Leaves ${f(.2,r.units==="in"?3:1)} on the walls, then a clean finishing pass.`,smooth:"Lighter steps and a finishing pass, for the best walls."}[r.job.finish]}</div>
            ${Lt?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${Ze(Dt.tool.name)}<br>${Ze(yr[r.job.material].name)} \xB7 ${Lt.rpm.toLocaleString()} RPM<br>${r.units==="in"?`${h(Lt.feed,1)} in/min`:`${Lt.feed.toLocaleString()} mm/min`} \xB7 ${f(Lt.stepdown,r.units==="in"?3:2)} per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${Q.map(H=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${xr(H,r.numbering)}</span> ${Ze(H.name)}</span><span class="ncc-slot ${l(H)?"":"hand"}">${l(H)?`Slot ${H.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${Q.some(H=>!H.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops">${ht()}<div class="ncc-ops">${q}</div>${A(!1)}<div class="ncc-plan-pair-in">${Gt}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${Gt}</div>
      </div>`}function ht(){let D=!!r.plan.mode3d,q=!!r.plan.did3d;return!D&&!r.plan.analysis.sloped?"":`<div class="ncc-op" style="margin-bottom: 10px">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${On.finish3d} 16%, transparent); color: ${On.finish3d}">${en.finish3d}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">Cut curved faces in 3D</div><div class="ncc-op-sub">${D?q?"Roughed in layers, then a ball end mill follows the surface.":"On, but no end mill is long enough: cut in 2.5D for now.":"Off: sloped and curved faces are left square."}</div></div>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${D}" aria-label="Cut curved faces in 3D" data-toggle="3d"></button>
      </div>`}function Tt(){let q=(r.plan?.ops||[]).filter(Q=>Q.enabled&&Q.kind!=="face").map(Q=>{let rt=r.focusOp&&r.focusOp!==Q.id;return{loops:Q.region||(Q.centers||[]).map(Dt=>mp(Dt)),z:Q.kind==="cutout"?Q.zTop+.05:Math.max(Q.zBottom,0)+.05,color:On[Q.kind],dashed:Q.kind==="cutout",opacity:rt?.2:1,top:Q.zTop}});o.keepCamera=G===r.part?.positions,o.showPart(r.part,q),G=r.part?.positions,Ft=null,yt=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function Wt(D){let q=D.kind==="drill"?["drill"]:D.kind==="face"?["surfacing","flat"]:D.kind==="finish3d"?["ball","flat"]:["flat"],Q=r.tools.filter(rt=>q.includes(rt.kind)).sort((rt,ut)=>ut.diameter-rt.diameter);return Q.some(rt=>rt.id===D.tool.id)?Q:[D.tool,...Q]}function Ht(){let D=r.result,q=D?.plan,Q=q?ta(q):[],rt=q?q.ops.filter(ut=>ut.enabled).reduce((ut,Dt,Lt,Gt)=>ut+(Lt>0&&Gt[Lt-1].tool.id!==Dt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${Rt()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${q?Math.max(1,Math.round(D.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${Q.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${q?rt:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${_t()}</div>
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${Ze(zt())}${D?` \xB7 ${(D.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${D?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let zt=()=>`${(r.fileName||"part").replace(/\.(step|stp)$/i,"")}.nc`;function _t(){let D=r.simChecks;return D?D.items.map(q=>`<div class="ncc-check"><span class="ncc-ck ${q.state}">${q.state==="bad"?en.cross:q.state==="info"?"!":en.check}</span><span>${Ze(q.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${r.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}</div>`}let X={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null};function Rt(){if(!r.result)return"";let q=r.result.plan.ops.filter(ut=>ut.enabled&&ut.track),Q=X.total||1,rt=q[Math.max(0,X.opIndexAt?.(X.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${X.playing?"Pause":"Play"}">${X.playing?en.pause:en.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(Q)}" aria-valuenow="${Math.round(X.t)}">
          ${q.map(ut=>`<i style="width: ${(ut.seconds||0)/Q*100}%; background: ${On[ut.kind]}"></i>`).join("")}
          <b style="width: ${X.t/Q*100}%"></b><em style="left: ${X.t/Q*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span data-pb="step">${ke(q,rt)}</span><span class="ncc-mono" data-pb="clock">${uc(X.t)} / ${uc(Q)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([ut,Dt])=>`<button type="button" style="padding: 6px 8px" class="${X.speed===ut?"sel":""}" data-speed="${ut}">${Dt}</button>`).join("")}</div>`}function Qt(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&r.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${r.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let Ft=null;function oe(){if(Ft===r.result){Ie();return}Ft=r.result,G=null,yt=null,o.onMarker=null,o.onPick=null;let D=r.result.plan,q=D.ops.filter(H=>H.enabled&&H.track),Q=Wi.cellFor(D.stock,520*520);X.ops=q,X.hm=Hu(new Wi(D.stock,Q)),X.colors=D.ops.map(H=>new Me(On[H.kind])),X.stamps=D.ops.map(H=>Cc(H.tool,Q));let rt=0;for(let H of q)rt+=H.track.length/4;X.moves=new Float32Array(rt*4),X.opOf=new Uint16Array(rt),X.cum=new Float64Array(rt);let ut=0,Dt=0,Lt=null,Gt=r.maxRapid||5e3;for(let H of q){let It=D.ops.indexOf(H);for(let mt=0;mt<H.track.length;mt+=4,ut++){if(X.moves.set(H.track.subarray(mt,mt+4),ut*4),X.opOf[ut]=It,Lt){let Ut=Math.hypot(H.track[mt]-Lt[0],H.track[mt+1]-Lt[1],H.track[mt+2]-Lt[2]);Dt+=Ut/(H.track[mt+3]>0?H.track[mt+3]:Gt)*60}Lt=[H.track[mt],H.track[mt+1],H.track[mt+2]],X.cum[ut]=Dt}}X.total=Dt,X.opIndexAt=H=>{let It=Math.min(rt-1,pe(X.cum,H));return q.indexOf(D.ops[X.opOf[It]])},X.t=0,X.i=1,X.cursor=null,X.toolOp=-1,X.snaps=[],o.showStock(X.hm,Os[D.job.material]||Os.mdf,r.part);{let H=X.hm,It=[H.x0,H.y0,H.bottom],mt=[H.x0+(H.nx-1)*H.cell,H.y0+(H.ny-1)*H.cell,H.top];for(let Ut of q){let Yt=Ut.tool.diameter/2;for(let Nt=0;Nt<Ut.track.length;Nt+=4)Ut.track[Nt+3]!==0&&(It[0]=Math.min(It[0],Ut.track[Nt]-Yt),mt[0]=Math.max(mt[0],Ut.track[Nt]+Yt),It[1]=Math.min(It[1],Ut.track[Nt+1]-Yt),mt[1]=Math.max(mt[1],Ut.track[Nt+1]+Yt))}o.frame(It,mt)}o.showPaths(q),r.showPaths=r.showPaths??!1,Ie(),fe(0),X.speed=5,X.rate=Math.max(1,X.total/600/5),o.onFrame=Re,Y(D),X.playing=!1,me()}function Ie(){o.paths&&(o.paths.visible=!!r.showPaths),o.partGhost&&(o.partGhost.visible=!!r.showPart)}function pe(D,q){let Q=0,rt=D.length;for(;Q<rt;){let ut=Q+rt>>1;D[ut]<q?Q=ut+1:rt=ut}return Q}let ue=D=>({x:X.moves[D*4],y:X.moves[D*4+1],z:X.moves[D*4+2],r:X.moves[D*4+3]===0});function ve(D){let q=X.hm,Q=X.cum.length,rt=1/0,ut=-1,Dt=(Lt,Gt,H)=>{let It=r.result.plan.ops[H].tool.diameter/2/q.cell+3,mt=Math.floor((Math.min(Lt.y,Gt.y)-q.y0)/q.cell-It),Ut=Math.ceil((Math.max(Lt.y,Gt.y)-q.y0)/q.cell+It);rt=Math.min(rt,Math.max(0,mt)),ut=Math.max(ut,Math.min(q.ny-1,Ut))};for(;X.i<Q&&X.cum[X.i]<=D;){X.opOf[X.i]!==X.opOf[X.i-1]&&!X.cursor&&Ce();let Lt=X.cursor||ue(X.i-1),Gt=ue(X.i),H=X.opOf[X.i];Gt.r||(Pc(q,r.result.plan.ops[H].tool,Lt,Gt,H),Dt(Lt,Gt,H)),X.cursor=null,X.i++}if(X.i<Q&&D>X.cum[X.i-1]){let Lt=X.cursor||ue(X.i-1),Gt=ue(X.i),H=X.opOf[X.i],It=X.cum[X.i-1],mt=(D-It)/(X.cum[X.i]-It||1),Ut=ue(X.i-1),Yt={x:Ut.x+(Gt.x-Ut.x)*mt,y:Ut.y+(Gt.y-Ut.y)*mt,z:Ut.z+(Gt.z-Ut.z)*mt};Gt.r||(Pc(q,r.result.plan.ops[H].tool,Lt,Yt,H),Dt(Lt,Yt,H)),X.cursor=Yt}return[rt,ut]}function fe(D){let q=X.cum.length;if(!q)return;let Q=Math.min(q-1,pe(X.cum,D)),rt=X.opOf[Q];if(rt!==X.toolOp){let Dt=r.result.plan.ops[rt];o.setTool(Dt.tool,Dt.zTop-Dt.zBottom),X.toolOp=rt}let ut=X.cursor||ue(Math.max(0,X.i-1));o.moveTool(ut.x,ut.y,ut.z)}let Te=0,ie=0;function Re(D){let q=Te?Math.min(.1,(D-Te)/1e3):0;if(Te=D,!X.playing||!X.cum)return;X.t=Math.min(X.total,X.t+q*X.speed*X.rate);let[Q,rt]=ve(X.t);o.refreshStock(Q,rt,X.colors),fe(X.t),X.t>=X.total?(X.playing=!1,me()):D-ie>200&&(ie=D,me())}let Se=["h","op","sx","sy","wx","wy","gap","deep"];function Ce(){X.snaps.some(D=>D.i===X.i)||X.snaps.push({i:X.i,data:Se.map(D=>X.hm[D].slice())})}function at(D){if(D=Math.max(0,Math.min(X.total,D)),D<X.t){let q=X.snaps.filter(Q=>X.cum[Q.i-1]<=D).sort((Q,rt)=>rt.i-Q.i)[0];q?(Se.forEach((Q,rt)=>X.hm[Q].set(q.data[rt])),X.i=q.i):(X.hm.h.fill(X.hm.top),X.hm.op.fill(0),X.hm.sx.fill(0),X.hm.sy.fill(0),X.hm.wx.fill(0),X.hm.wy.fill(0),X.hm.gap.fill(1/0),X.hm.deep.fill(-1/0),X.i=1),X.cursor=null,ve(D),o.refreshStock(0,X.hm.ny-1,X.colors)}else{let[q,Q]=ve(D);o.refreshStock(q,Q,X.colors)}X.t=D,fe(D),me()}let ke=(D,q)=>q?`Step ${D.indexOf(q)+1} of ${D.length} \xB7 ${Ze(q.label)} \xB7 T${xr(q.tool,r.numbering)}`:"";function me(){let D=n.querySelector("[data-playbar]");if(!D)return;if(D._result!==r.result||D._total!==X.total||!D.querySelector("[data-scrub]")){D.innerHTML=Rt(),D._result=r.result,D._total=X.total;return}let q=r.result.plan.ops.filter(It=>It.enabled&&It.track),Q=X.total||1,rt=`${X.t/Q*100}%`,ut=q[Math.max(0,X.opIndexAt?.(X.t)??0)],Dt=D.querySelector("[data-scrub]");Dt.querySelector("b").style.width=rt,Dt.querySelector("em").style.left=rt,Dt.setAttribute("aria-valuenow",String(Math.round(X.t)));let Lt=(It,mt)=>{It&&It.innerHTML!==mt&&(It.innerHTML=mt)};Lt(D.querySelector('[data-pb="step"]'),ke(q,ut)),Lt(D.querySelector('[data-pb="clock"]'),`${uc(X.t)} / ${uc(Q)}`);let Gt=D.querySelector('[data-act="play"]'),H=X.playing?"Pause":"Play";Gt.getAttribute("aria-label")!==H&&(Gt.setAttribute("aria-label",H),Gt.innerHTML=X.playing?en.pause:en.play);for(let It of D.querySelectorAll("[data-speed]"))It.classList.toggle("sel",+It.dataset.speed===X.speed)}function Y(D){setTimeout(()=>{if(r.result?.plan!==D)return;let q=D.ops.map(Lt=>({...Lt,moves:Lt.track?Array.from({length:Lt.track.length/4},(Gt,H)=>({x:Lt.track[H*4],y:Lt.track[H*4+1],z:Lt.track[H*4+2],r:Lt.track[H*4+3]===0,f:Lt.track[H*4+3]})):null})),{collisions:Q}=Gu({...D,ops:q},Wi.cellFor(D.stock,300*300)),rt=[];if(rt.push(Q.length?{state:"bad",text:`${Q.length} fast move${Q.length>1?"s go":" goes"} into the material (${[...new Set(Q.map(Lt=>D.ops.find(Gt=>Gt.id===Lt.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),r.travel){let Lt=D.stock.width<=r.travel.x&&D.stock.depth<=r.travel.y;rt.push(Lt?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${h(r.travel.x)} \xD7 ${f(r.travel.y)}).`})}let ut=ta(D);rt.push(ut.every(Lt=>Lt.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),D.ops.find(Lt=>Lt.kind==="cutout"&&Lt.enabled)&&rt.push({state:"ok",text:`The cut-out goes ${f(D.job.throughDepth,r.units==="in"?3:1)} into the spoilboard${D.job.tabs.enabled?`, with ${D.job.tabs.count} tabs`:""}`}),D.warnings.some(Lt=>Lt.kind==="undercut")&&rt.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side. Pins (the Spoilboard Toolbox plugin can set them up) put it back in the same place."}),r.simChecks={ok:!rt.some(Lt=>Lt.state==="bad"),items:rt},V()},50)}let P=D=>{if(!(D<1||D>4||D>r.maxStep+1)){if(D===4&&r.step!==4){X.playing=!1,r.step=4,r.maxStep=4,V(),S(!0);return}r.step=D,r.maxStep=Math.max(r.maxStep,D),D!==4&&(X.playing=!1),V()}},it=()=>{r.maxStep=Math.min(r.maxStep,Math.max(r.step,3)),r.result=null,S(!1)};n.addEventListener("click",D=>{let q=D.target.closest("[data-focus]");if(q&&!D.target.closest("button, select")){r.focusOp=r.focusOp===q.dataset.focus?null:q.dataset.focus,V();return}let Q=D.target.closest("button, [data-scrub]");if(!Q||Q.disabled)return;let rt=Q.dataset;if(rt.go)return P(+rt.go);if(rt.up)return _(rt.up).catch(ut=>{r.error=ut.message,V()});if(rt.material)return r.job.material=rt.material,Object.assign(r.job.tabs,Yi(rt.material)),it();if(rt.tabsize){let ut=K(),Dt=lt();return r.job.tabs[rt.tabsize]=Math.max(Dt.min,Math.min(Dt.max,Math.round((ut[rt.tabsize]+ +rt.by*Dt.step)/Dt.grid)*Dt.grid)),it()}if(rt.zero)return r.job.zero.xy=rt.zero,it();if(rt.z)return r.job.zero.z=rt.z,it();if(rt.finish)return r.job.finish=rt.finish,it();if(rt.tabs)return r.job.tabs.count=Math.max(1,Math.min(12,r.job.tabs.count+ +rt.tabs)),it();if(rt.toggle==="fit"){let ut=r.plan?.stock;return r.job.stock.fit=!r.job.stock.fit,!r.job.stock.fit&&ut&&Object.assign(r.job.stock,{width:ut.width,depth:ut.depth,thickness:ut.thickness}),it()}if(rt.toggle==="tabs")return r.job.tabs.enabled=!r.job.tabs.enabled,it();if(rt.toggle==="3d")return r.job.surface3d=!r.plan?.mode3d,r.job.disabled={},r.job.toolOverride={},it();if(rt.op)return r.job.disabled[rt.op]=!r.job.disabled[rt.op],it();if(rt.speed)return X.speed=+rt.speed,me();if(rt.act==="play")return X.t>=X.total&&at(0),X.playing=!X.playing,Te=0,me();if(rt.act==="paths"){r.showPaths=!r.showPaths,Ie(),Q.classList.toggle("on",r.showPaths);return}if(rt.act==="ghost"){r.showPart=!r.showPart,Ie(),Q.classList.toggle("on",r.showPart);return}if(rt.act==="close")return xt();if(rt.act==="load")return Et(Q);if(rt.act==="save")return Xt(Q)}),n.addEventListener("pointerdown",D=>{if(!D.target.closest("[data-scrub]")||!X.cum)return;let Q=X.playing;X.playing=!1;let rt=Gt=>{let H=n.querySelector("[data-scrub]").getBoundingClientRect();H.width>0&&at((Gt-H.left)/H.width*X.total)};rt(D.clientX);let ut=null,Dt=Gt=>{ut===null&&requestAnimationFrame(()=>{let H=ut;ut=null,rt(H)}),ut=Gt.clientX},Lt=()=>{window.removeEventListener("pointermove",Dt),window.removeEventListener("pointerup",Lt),X.playing=Q&&X.t<X.total,Te=0,me()};window.addEventListener("pointermove",Dt),window.addEventListener("pointerup",Lt)}),n.addEventListener("change",D=>{let q=D.target;if(q.matches("[data-file]"))return g(q.files[0]);if(q.dataset.tool)return r.job.toolOverride[q.dataset.tool]=+q.value||q.value,it();if(q.dataset.stock){let Q=parseFloat(String(q.value).replace(",","."));return Number.isFinite(Q)&&Q>0&&(r.job.stock[q.dataset.stock]=$i.toMm(Q,r.units)),it()}}),n.addEventListener("dragover",D=>{let q=D.target.closest("[data-drop]");q&&(D.preventDefault(),q.classList.add("over"))}),n.addEventListener("dragleave",D=>{let q=D.target.closest("[data-drop]");q&&q.classList.remove("over")}),n.addEventListener("drop",D=>{D.target.closest("[data-drop]")&&(D.preventDefault(),g(D.dataTransfer.files[0]))});function pt(D){r.toast=D,V(),setTimeout(()=>{r.toast===D&&(r.toast="",V())},2600)}async function Et(D){D.disabled=!0;try{let q=await i.post("/api/gcode-files/load-temp",{filename:zt(),content:r.result.gcode});if(!q.ok)throw new Error(`ncSender said ${q.status}`);xt()}catch(q){D.disabled=!1,pt(`Couldn\u2019t load the program: ${q.message}`)}}async function Xt(D){D.disabled=!0;try{let q=await $t(zt()),Q=await i.post("/api/gcode-files/file/save",{path:q,content:r.result.gcode});if(!Q.ok)throw new Error(`save failed (${Q.status})`);pt(`Saved to File Manager: ${q}`)}catch(q){pt(`Couldn\u2019t save: ${q.message}`)}D.disabled=!1}async function $t(D){let q=D.replace(/\.nc$/,""),Q=new Set,rt=ut=>{for(let Dt of ut||[])Dt.type==="folder"?rt(Dt.children):Q.add(Dt.path)};rt((await i.get("/api/gcode-files"))?.tree);for(let ut=1;ut<1e3;ut++){let Dt=`ncCAM/${ut<2?D:`${q} (${ut}).nc`}`;if(!Q.has(Dt))return Dt}throw new Error("too many saved copies")}function xt(){X.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}V(),window.__nccam={S:r,PLAY:X,viewer:o,seek:D=>at(D)}}function mp(n,t=48){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}var $M,qM,Ze,uc,rn,en,ZM,_p=vn(()=>{ac();zc();hp();pp();$M=["Model","Stock & Zero","Operations","Preview & Load"],qM=[["top","Top"],["bottom","Bottom"],["front","Front"],["back","Back"],["left","Left"],["right","Right"]],Ze=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),uc=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},rn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,en={close:rn('<path d="M6 6l12 12M18 6L6 18"/>'),next:rn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:rn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:rn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:rn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:rn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:rn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:rn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:rn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:rn('<path d="M3 9h18M3 15h18"/>'),pocket:rn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:rn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:rn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:rn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:rn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:rn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>'),rough3d:rn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/>'),finish3d:rn('<path d="M3 18c3 0 4-9 9-9s6 9 9 9"/>'),rest3d:rn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/><circle cx="12" cy="17" r="1.5"/>')},ZM={top:'<path d="M12 3l9 5-9 5-9-5z" fill="currentColor" fill-opacity=".35"/><path d="M3 8v8l9 5 9-5V8"/>',bottom:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M3 16l9-5 9 5" stroke-dasharray="2 2"/>',front:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".35"/><path d="M21 8v8l-9 5"/>',back:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 3v8" stroke-dasharray="2 2"/>',left:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".2"/><path d="M21 8v8l-9 5"/>',right:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5"/><path d="M21 8v8l-9 5V13z" fill="currentColor" fill-opacity=".35"/>'}});var hf=Iu(Nu(),1);zc();var Hg={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.02,angularDeflection:.1};function Vc(){let n=null,t=null,e=null,i=null,r={async init({wasmBinary:o}){return i=o,!0},async load({bytes:o}){if(t=zu(new Uint8Array(o)),!t){n||=await(0,hf.default)({wasmBinary:i});let l=n.ReadStepFile(new Uint8Array(o),Hg);if(!l.success||!l.meshes?.length)throw new Error("This file has no solid ncCAM can read. Export it again as STEP (AP214 or AP242).");t=Bu(l)}return{solids:t.solids,size:Xs(t).size,...ku(t)}},async orient({up:o}){e=Zo(t,o);let l=vr(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:l}},async tilt({normal:o}){e=Zo(e,o);let l=vr(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:l}},async turn({how:o}){e=wc(e,o==="over"?[1,0,0,0,-1,0,0,0,-1]:[-1,0,0,0,-1,0,0,0,1]);let l=vr(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:l}},async plan({tools:o,job:l,limits:h,paths:f,gcodeOptions:d,timing:g}){let v=ju(e,o,l,h);f&&rf(v);let _=f?af(v,g):0,b=f?of(v,d):"";for(let w of v.ops)delete w.surface;for(let w of v.ops){if(!w.moves)continue;let T=new Float32Array(w.moves.length*4);w.moves.forEach((S,x)=>{T[x*4]=S.x,T[x*4+1]=S.y,T[x*4+2]=S.z,T[x*4+3]=S.r?0:S.f}),w.track=T,delete w.moves}return{plan:v,gcode:b,seconds:_}}};return async function(l){let h=r[l.type];if(!h)throw new Error(`unknown request ${l.type}`);return h(l)}}var vp="0.1.4-mvysny3y";if(typeof document>"u"){let n=Vc();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e&&e.positions?[e.positions.buffer,e.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCam=window.NcCam||{};n.build!==vp&&n.engine&&(n.engine.then(i=>i.worker?.terminate(),()=>{}),n.engine=null),n.build=vp,n.mount=async(i,r)=>{let{mountApp:o}=await Promise.resolve().then(()=>(_p(),gp));try{o(i,r,await t(r))}catch(l){i.textContent=`ncCAM could not start: ${l.message||l}`}};let t=i=>n.engine||=e(i);async function e(i){let r=await fetch(i.file("lib/occt-import-js.wasm")).then(h=>{if(!h.ok)throw new Error(`lib/occt-import-js.wasm: ${h.status}`);return h.arrayBuffer()}),o=null;try{o=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{o=null}if(o){let h=0,f=new Map;o.onmessage=({data:v})=>{let _=f.get(v.id);_&&(f.delete(v.id),v.ok?_.resolve(v.result):_.reject(new Error(v.error)))};let d=(v,_={},b=[])=>new Promise((w,T)=>{let S=++h;f.set(S,{resolve:w,reject:T}),o.postMessage({..._,id:S,type:v},b)});if(await Promise.race([d("init",{wasmBinary:r}).then(()=>!0),new Promise(v=>setTimeout(()=>v(!1),5e3))]))return d.worker=o,d;o.terminate()}let l=Vc();return await l({type:"init",wasmBinary:r}),(h,f={})=>l({...f,type:h})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
