(()=>{var xm=Object.create;var uc=Object.defineProperty;var Mm=Object.getOwnPropertyDescriptor;var Sm=Object.getOwnPropertyNames;var bm=Object.getPrototypeOf,wm=Object.prototype.hasOwnProperty;var fc=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var Cn=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var du=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Em=(n,t)=>{for(var e in t)uc(n,e,{get:t[e],enumerable:!0})},Tm=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Sm(t))!wm.call(n,s)&&s!==e&&uc(n,s,{get:()=>t[s],enumerable:!(i=Mm(t,s))||i.enumerable});return n};var pu=(n,t,e)=>(e=n!=null?xm(bm(n)):{},Tm(t||!n||!n.__esModule?uc(e,"default",{value:n,enumerable:!0}):e,n));var _u=du((gu,dc)=>{var mu=(()=>{var n=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(t={}){var e,i=t,s,o,c=new Promise((h,m)=>{s=h,o=m}),u=typeof window=="object",f=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",_=Object.assign({},i),y=[],g="./this.program",b=(h,m)=>{throw m},E="";function P(h){return i.locateFile?i.locateFile(h,E):E+h}var S,M;if(d){var F=fc("fs"),X=fc("path");E=__dirname+"/",M=h=>{h=He(h)?new URL(h):X.normalize(h);var m=F.readFileSync(h);return m},S=(h,m=!0)=>(h=He(h)?new URL(h):X.normalize(h),new Promise((x,w)=>{F.readFile(h,m?void 0:"utf8",(L,G)=>{L?w(L):x(m?G.buffer:G)})})),!i.thisProgram&&process.argv.length>1&&(g=process.argv[1].replace(/\\/g,"/")),y=process.argv.slice(2),b=(h,m)=>{throw process.exitCode=h,m}}else(u||f)&&(f?E=self.location.href:typeof document<"u"&&document.currentScript&&(E=document.currentScript.src),n&&(E=n),E.startsWith("blob:")?E="":E=E.substr(0,E.replace(/[?#].*/,"").lastIndexOf("/")+1),f&&(M=h=>{var m=new XMLHttpRequest;return m.open("GET",h,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),S=h=>He(h)?new Promise((m,x)=>{var w=new XMLHttpRequest;w.open("GET",h,!0),w.responseType="arraybuffer",w.onload=()=>{if(w.status==200||w.status==0&&w.response){m(w.response);return}x(w.status)},w.onerror=x,w.send(null)}):fetch(h,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(new Error(m.status+" : "+m.url))));var R=i.print||console.log.bind(console),U=i.printErr||console.error.bind(console);Object.assign(i,_),_=null,i.arguments&&(y=i.arguments),i.thisProgram&&(g=i.thisProgram);var z=i.wasmBinary,q,C=!1,H;function Y(h,m){h||ye(m)}var nt,it,tt,K,B,et,V,dt;function ct(){var h=q.buffer;i.HEAP8=nt=new Int8Array(h),i.HEAP16=tt=new Int16Array(h),i.HEAPU8=it=new Uint8Array(h),i.HEAPU16=K=new Uint16Array(h),i.HEAP32=B=new Int32Array(h),i.HEAPU32=et=new Uint32Array(h),i.HEAPF32=V=new Float32Array(h),i.HEAPF64=dt=new Float64Array(h)}var _t=[],Mt=[],Pt=[],Ut=!1;function ae(){var h=i.preRun;h&&(typeof h=="function"&&(h=[h]),h.forEach(yt)),At(_t)}function le(){Ut=!0,!i.noFSInit&&!I.initialized&&I.init(),I.ignorePermissions=!1,St.init(),At(Mt)}function pe(){var h=i.postRun;h&&(typeof h=="function"&&(h=[h]),h.forEach(Gt)),At(Pt)}function yt(h){_t.unshift(h)}function Tt(h){Mt.unshift(h)}function Gt(h){Pt.unshift(h)}var re=0,Vt=null,ue=null;function Oe(h){return h}function xe(h){re++,i.monitorRunDependencies?.(re)}function Ee(h){if(re--,i.monitorRunDependencies?.(re),re==0&&(Vt!==null&&(clearInterval(Vt),Vt=null),ue)){var m=ue;ue=null,m()}}function ye(h){i.onAbort?.(h),h="Aborted("+h+")",U(h),C=!0,h+=". Build with -sASSERTIONS for more info.",Ut&&hu();var m=new WebAssembly.RuntimeError(h);throw o(m),m}var Me="data:application/octet-stream;base64,",Ne=h=>h.startsWith(Me),He=h=>h.startsWith("file://");function Qe(){var h="occt-import-js.wasm";return Ne(h)?h:P(h)}var Le;function J(h){if(h==Le&&z)return new Uint8Array(z);if(M)return M(h);throw"both async and sync fetching of the wasm failed"}function k(h){return z?Promise.resolve().then(()=>J(h)):S(h).then(m=>new Uint8Array(m),()=>J(h))}function ht(h,m,x){return k(h).then(w=>WebAssembly.instantiate(w,m)).then(x,w=>{U(`failed to asynchronously prepare wasm: ${w}`),ye(w)})}function mt(h,m,x,w){return!h&&typeof WebAssembly.instantiateStreaming=="function"&&!Ne(m)&&!He(m)&&!d&&typeof fetch=="function"?fetch(m,{credentials:"same-origin"}).then(L=>{var G=WebAssembly.instantiateStreaming(L,x);return G.then(w,function(Z){return U(`wasm streaming compile failed: ${Z}`),U("falling back to ArrayBuffer instantiation"),ht(m,x,w)})}):ht(m,x,w)}function O(){return{a:fm}}function T(){var h=O();function m(w,L){return an=w.exports,q=an._,ct(),Bo=an.ba,Tt(an.$),Ee("wasm-instantiate"),an}xe("wasm-instantiate");function x(w){m(w.instance)}if(i.instantiateWasm)try{return i.instantiateWasm(h,m)}catch(w){U(`Module.instantiateWasm callback failed with error: ${w}`),o(w)}return Le??=Qe(),mt(z,Le,h,x).catch(o),{}}var W,ot;function Q(h){this.name="ExitStatus",this.message=`Program terminated with exit(${h})`,this.status=h}var At=h=>{h.forEach(m=>m(i))},Ct=i.noExitRuntime||!0,ft={isAbs:h=>h.charAt(0)==="/",splitPath:h=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return m.exec(h).slice(1)},normalizeArray:(h,m)=>{for(var x=0,w=h.length-1;w>=0;w--){var L=h[w];L==="."?h.splice(w,1):L===".."?(h.splice(w,1),x++):x&&(h.splice(w,1),x--)}if(m)for(;x;x--)h.unshift("..");return h},normalize:h=>{var m=ft.isAbs(h),x=h.substr(-1)==="/";return h=ft.normalizeArray(h.split("/").filter(w=>!!w),!m).join("/"),!h&&!m&&(h="."),h&&x&&(h+="/"),(m?"/":"")+h},dirname:h=>{var m=ft.splitPath(h),x=m[0],w=m[1];return!x&&!w?".":(w&&(w=w.substr(0,w.length-1)),x+w)},basename:h=>{if(h==="/")return"/";h=ft.normalize(h),h=h.replace(/\/$/,"");var m=h.lastIndexOf("/");return m===-1?h:h.substr(m+1)},join:(...h)=>ft.normalize(h.join("/")),join2:(h,m)=>ft.normalize(h+"/"+m)},bt=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return w=>crypto.getRandomValues(w);if(d)try{var h=fc("crypto"),m=h.randomFillSync;if(m)return w=>h.randomFillSync(w);var x=h.randomBytes;return w=>(w.set(x(w.byteLength)),w)}catch{}ye("initRandomDevice")},Ot=h=>(Ot=bt())(h),Jt={resolve:(...h)=>{for(var m="",x=!1,w=h.length-1;w>=-1&&!x;w--){var L=w>=0?h[w]:I.cwd();if(typeof L!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!L)return"";m=L+"/"+m,x=ft.isAbs(L)}return m=ft.normalizeArray(m.split("/").filter(G=>!!G),!x).join("/"),(x?"/":"")+m||"."},relative:(h,m)=>{h=Jt.resolve(h).substr(1),m=Jt.resolve(m).substr(1);function x(Nt){for(var qt=0;qt<Nt.length&&Nt[qt]==="";qt++);for(var Kt=Nt.length-1;Kt>=0&&Nt[Kt]==="";Kt--);return qt>Kt?[]:Nt.slice(qt,Kt-qt+1)}for(var w=x(h.split("/")),L=x(m.split("/")),G=Math.min(w.length,L.length),Z=G,st=0;st<G;st++)if(w[st]!==L[st]){Z=st;break}for(var xt=[],st=Z;st<w.length;st++)xt.push("..");return xt=xt.concat(L.slice(Z)),xt.join("/")}},Ht=typeof TextDecoder<"u"?new TextDecoder:void 0,Ft=(h,m=0,x=NaN)=>{for(var w=m+x,L=m;h[L]&&!(L>=w);)++L;if(L-m>16&&h.buffer&&Ht)return Ht.decode(h.subarray(m,L));for(var G="";m<L;){var Z=h[m++];if(!(Z&128)){G+=String.fromCharCode(Z);continue}var st=h[m++]&63;if((Z&224)==192){G+=String.fromCharCode((Z&31)<<6|st);continue}var xt=h[m++]&63;if((Z&240)==224?Z=(Z&15)<<12|st<<6|xt:Z=(Z&7)<<18|st<<12|xt<<6|h[m++]&63,Z<65536)G+=String.fromCharCode(Z);else{var Nt=Z-65536;G+=String.fromCharCode(55296|Nt>>10,56320|Nt&1023)}}return G},te=[],se=h=>{for(var m=0,x=0;x<h.length;++x){var w=h.charCodeAt(x);w<=127?m++:w<=2047?m+=2:w>=55296&&w<=57343?(m+=4,++x):m+=3}return m},me=(h,m,x,w)=>{if(!(w>0))return 0;for(var L=x,G=x+w-1,Z=0;Z<h.length;++Z){var st=h.charCodeAt(Z);if(st>=55296&&st<=57343){var xt=h.charCodeAt(++Z);st=65536+((st&1023)<<10)|xt&1023}if(st<=127){if(x>=G)break;m[x++]=st}else if(st<=2047){if(x+1>=G)break;m[x++]=192|st>>6,m[x++]=128|st&63}else if(st<=65535){if(x+2>=G)break;m[x++]=224|st>>12,m[x++]=128|st>>6&63,m[x++]=128|st&63}else{if(x+3>=G)break;m[x++]=240|st>>18,m[x++]=128|st>>12&63,m[x++]=128|st>>6&63,m[x++]=128|st&63}}return m[x]=0,x-L};function at(h,m,x){var w=x>0?x:se(h)+1,L=new Array(w),G=me(h,L,0,L.length);return m&&(L.length=G),L}var Bt=()=>{if(!te.length){var h=null;if(d){var m=256,x=Buffer.alloc(m),w=0,L=process.stdin.fd;try{w=F.readSync(L,x,0,m)}catch(G){if(G.toString().includes("EOF"))w=0;else throw G}w>0&&(h=x.slice(0,w).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(h=window.prompt("Input: "),h!==null&&(h+=`
`));if(!h)return null;te=at(h,!0)}return te.shift()},St={ttys:[],init(){},shutdown(){},register(h,m){St.ttys[h]={input:[],output:[],ops:m},I.registerDevice(h,St.stream_ops)},stream_ops:{open(h){var m=St.ttys[h.node.rdev];if(!m)throw new I.ErrnoError(43);h.tty=m,h.seekable=!1},close(h){h.tty.ops.fsync(h.tty)},fsync(h){h.tty.ops.fsync(h.tty)},read(h,m,x,w,L){if(!h.tty||!h.tty.ops.get_char)throw new I.ErrnoError(60);for(var G=0,Z=0;Z<w;Z++){var st;try{st=h.tty.ops.get_char(h.tty)}catch{throw new I.ErrnoError(29)}if(st===void 0&&G===0)throw new I.ErrnoError(6);if(st==null)break;G++,m[x+Z]=st}return G&&(h.node.timestamp=Date.now()),G},write(h,m,x,w,L){if(!h.tty||!h.tty.ops.put_char)throw new I.ErrnoError(60);try{for(var G=0;G<w;G++)h.tty.ops.put_char(h.tty,m[x+G])}catch{throw new I.ErrnoError(29)}return w&&(h.node.timestamp=Date.now()),G}},default_tty_ops:{get_char(h){return Bt()},put_char(h,m){m===null||m===10?(R(Ft(h.output)),h.output=[]):m!=0&&h.output.push(m)},fsync(h){h.output&&h.output.length>0&&(R(Ft(h.output)),h.output=[])},ioctl_tcgets(h){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(h,m,x){return 0},ioctl_tiocgwinsz(h){return[24,80]}},default_tty1_ops:{put_char(h,m){m===null||m===10?(U(Ft(h.output)),h.output=[]):m!=0&&h.output.push(m)},fsync(h){h.output&&h.output.length>0&&(U(Ft(h.output)),h.output=[])}}},kt=(h,m)=>{it.fill(0,h,h+m)},Yt=(h,m)=>Math.ceil(h/m)*m,It=h=>{h=Yt(h,65536);var m=cu(65536,h);return m&&kt(m,h),m},Lt={ops_table:null,mount(h){return Lt.createNode(null,"/",16895,0)},createNode(h,m,x,w){if(I.isBlkdev(x)||I.isFIFO(x))throw new I.ErrnoError(63);Lt.ops_table||={dir:{node:{getattr:Lt.node_ops.getattr,setattr:Lt.node_ops.setattr,lookup:Lt.node_ops.lookup,mknod:Lt.node_ops.mknod,rename:Lt.node_ops.rename,unlink:Lt.node_ops.unlink,rmdir:Lt.node_ops.rmdir,readdir:Lt.node_ops.readdir,symlink:Lt.node_ops.symlink},stream:{llseek:Lt.stream_ops.llseek}},file:{node:{getattr:Lt.node_ops.getattr,setattr:Lt.node_ops.setattr},stream:{llseek:Lt.stream_ops.llseek,read:Lt.stream_ops.read,write:Lt.stream_ops.write,allocate:Lt.stream_ops.allocate,mmap:Lt.stream_ops.mmap,msync:Lt.stream_ops.msync}},link:{node:{getattr:Lt.node_ops.getattr,setattr:Lt.node_ops.setattr,readlink:Lt.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Lt.node_ops.getattr,setattr:Lt.node_ops.setattr},stream:I.chrdev_stream_ops}};var L=I.createNode(h,m,x,w);return I.isDir(L.mode)?(L.node_ops=Lt.ops_table.dir.node,L.stream_ops=Lt.ops_table.dir.stream,L.contents={}):I.isFile(L.mode)?(L.node_ops=Lt.ops_table.file.node,L.stream_ops=Lt.ops_table.file.stream,L.usedBytes=0,L.contents=null):I.isLink(L.mode)?(L.node_ops=Lt.ops_table.link.node,L.stream_ops=Lt.ops_table.link.stream):I.isChrdev(L.mode)&&(L.node_ops=Lt.ops_table.chrdev.node,L.stream_ops=Lt.ops_table.chrdev.stream),L.timestamp=Date.now(),h&&(h.contents[m]=L,h.timestamp=L.timestamp),L},getFileDataAsTypedArray(h){return h.contents?h.contents.subarray?h.contents.subarray(0,h.usedBytes):new Uint8Array(h.contents):new Uint8Array(0)},expandFileStorage(h,m){var x=h.contents?h.contents.length:0;if(!(x>=m)){var w=1024*1024;m=Math.max(m,x*(x<w?2:1.125)>>>0),x!=0&&(m=Math.max(m,256));var L=h.contents;h.contents=new Uint8Array(m),h.usedBytes>0&&h.contents.set(L.subarray(0,h.usedBytes),0)}},resizeFileStorage(h,m){if(h.usedBytes!=m)if(m==0)h.contents=null,h.usedBytes=0;else{var x=h.contents;h.contents=new Uint8Array(m),x&&h.contents.set(x.subarray(0,Math.min(m,h.usedBytes))),h.usedBytes=m}},node_ops:{getattr(h){var m={};return m.dev=I.isChrdev(h.mode)?h.id:1,m.ino=h.id,m.mode=h.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=h.rdev,I.isDir(h.mode)?m.size=4096:I.isFile(h.mode)?m.size=h.usedBytes:I.isLink(h.mode)?m.size=h.link.length:m.size=0,m.atime=new Date(h.timestamp),m.mtime=new Date(h.timestamp),m.ctime=new Date(h.timestamp),m.blksize=4096,m.blocks=Math.ceil(m.size/m.blksize),m},setattr(h,m){m.mode!==void 0&&(h.mode=m.mode),m.timestamp!==void 0&&(h.timestamp=m.timestamp),m.size!==void 0&&Lt.resizeFileStorage(h,m.size)},lookup(h,m){throw I.genericErrors[44]},mknod(h,m,x,w){return Lt.createNode(h,m,x,w)},rename(h,m,x){if(I.isDir(h.mode)){var w;try{w=I.lookupNode(m,x)}catch{}if(w)for(var L in w.contents)throw new I.ErrnoError(55)}delete h.parent.contents[h.name],h.parent.timestamp=Date.now(),h.name=x,m.contents[x]=h,m.timestamp=h.parent.timestamp},unlink(h,m){delete h.contents[m],h.timestamp=Date.now()},rmdir(h,m){var x=I.lookupNode(h,m);for(var w in x.contents)throw new I.ErrnoError(55);delete h.contents[m],h.timestamp=Date.now()},readdir(h){var m=[".",".."];for(var x of Object.keys(h.contents))m.push(x);return m},symlink(h,m,x){var w=Lt.createNode(h,m,41471,0);return w.link=x,w},readlink(h){if(!I.isLink(h.mode))throw new I.ErrnoError(28);return h.link}},stream_ops:{read(h,m,x,w,L){var G=h.node.contents;if(L>=h.node.usedBytes)return 0;var Z=Math.min(h.node.usedBytes-L,w);if(Z>8&&G.subarray)m.set(G.subarray(L,L+Z),x);else for(var st=0;st<Z;st++)m[x+st]=G[L+st];return Z},write(h,m,x,w,L,G){if(m.buffer===nt.buffer&&(G=!1),!w)return 0;var Z=h.node;if(Z.timestamp=Date.now(),m.subarray&&(!Z.contents||Z.contents.subarray)){if(G)return Z.contents=m.subarray(x,x+w),Z.usedBytes=w,w;if(Z.usedBytes===0&&L===0)return Z.contents=m.slice(x,x+w),Z.usedBytes=w,w;if(L+w<=Z.usedBytes)return Z.contents.set(m.subarray(x,x+w),L),w}if(Lt.expandFileStorage(Z,L+w),Z.contents.subarray&&m.subarray)Z.contents.set(m.subarray(x,x+w),L);else for(var st=0;st<w;st++)Z.contents[L+st]=m[x+st];return Z.usedBytes=Math.max(Z.usedBytes,L+w),w},llseek(h,m,x){var w=m;if(x===1?w+=h.position:x===2&&I.isFile(h.node.mode)&&(w+=h.node.usedBytes),w<0)throw new I.ErrnoError(28);return w},allocate(h,m,x){Lt.expandFileStorage(h.node,m+x),h.node.usedBytes=Math.max(h.node.usedBytes,m+x)},mmap(h,m,x,w,L){if(!I.isFile(h.node.mode))throw new I.ErrnoError(43);var G,Z,st=h.node.contents;if(!(L&2)&&st&&st.buffer===nt.buffer)Z=!1,G=st.byteOffset;else{if(Z=!0,G=It(m),!G)throw new I.ErrnoError(48);st&&((x>0||x+m<st.length)&&(st.subarray?st=st.subarray(x,x+m):st=Array.prototype.slice.call(st,x,x+m)),nt.set(st,G))}return{ptr:G,allocated:Z}},msync(h,m,x,w,L){return Lt.stream_ops.write(h,m,0,w,x,!1),0}}},Qt=(h,m,x,w)=>{var L=w?"":`al ${h}`;S(h).then(G=>{m(new Uint8Array(G)),L&&Ee(L)},G=>{if(x)x();else throw`Loading data file "${h}" failed.`}),L&&xe(L)},Fe=(h,m,x,w,L,G)=>{I.createDataFile(h,m,x,w,L,G)},Ie=i.preloadPlugins||[],Mn=(h,m,x,w)=>{typeof Browser<"u"&&Browser.init();var L=!1;return Ie.forEach(G=>{L||G.canHandle(m)&&(G.handle(h,m,x,w),L=!0)}),L},Tn=(h,m,x,w,L,G,Z,st,xt,Nt)=>{var qt=m?Jt.resolve(ft.join2(h,m)):h,Kt=`cp ${qt}`;function ce(ie){function _e(De){Nt?.(),st||Fe(h,m,De,w,L,xt),G?.(),Ee(Kt)}Mn(ie,qt,_e,()=>{Z?.(),Ee(Kt)})||_e(ie)}xe(Kt),typeof x=="string"?Qt(x,ce,Z):ce(x)},Ls=h=>{var m={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},x=m[h];if(typeof x>"u")throw new Error(`Unknown file open mode: ${h}`);return x},lr=(h,m)=>{var x=0;return h&&(x|=365),m&&(x|=146),x},I={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(h){this.name="ErrnoError",this.errno=h}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(h){this.node=h}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(h){this.shared.flags=h}get position(){return this.shared.position}set position(h){this.shared.position=h}},FSNode:class{constructor(h,m,x,w){h||(h=this),this.parent=h,this.mount=h.mount,this.mounted=null,this.id=I.nextInode++,this.name=m,this.mode=x,this.node_ops={},this.stream_ops={},this.rdev=w,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(h){h?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(h){h?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return I.isDir(this.mode)}get isDevice(){return I.isChrdev(this.mode)}},lookupPath(h,m={}){if(h=Jt.resolve(h),!h)return{path:"",node:null};var x={follow_mount:!0,recurse_count:0};if(m=Object.assign(x,m),m.recurse_count>8)throw new I.ErrnoError(32);for(var w=h.split("/").filter(Kt=>!!Kt),L=I.root,G="/",Z=0;Z<w.length;Z++){var st=Z===w.length-1;if(st&&m.parent)break;if(L=I.lookupNode(L,w[Z]),G=ft.join2(G,w[Z]),I.isMountpoint(L)&&(!st||st&&m.follow_mount)&&(L=L.mounted.root),!st||m.follow)for(var xt=0;I.isLink(L.mode);){var Nt=I.readlink(G);G=Jt.resolve(ft.dirname(G),Nt);var qt=I.lookupPath(G,{recurse_count:m.recurse_count+1});if(L=qt.node,xt++>40)throw new I.ErrnoError(32)}}return{path:G,node:L}},getPath(h){for(var m;;){if(I.isRoot(h)){var x=h.mount.mountpoint;return m?x[x.length-1]!=="/"?`${x}/${m}`:x+m:x}m=m?`${h.name}/${m}`:h.name,h=h.parent}},hashName(h,m){for(var x=0,w=0;w<m.length;w++)x=(x<<5)-x+m.charCodeAt(w)|0;return(h+x>>>0)%I.nameTable.length},hashAddNode(h){var m=I.hashName(h.parent.id,h.name);h.name_next=I.nameTable[m],I.nameTable[m]=h},hashRemoveNode(h){var m=I.hashName(h.parent.id,h.name);if(I.nameTable[m]===h)I.nameTable[m]=h.name_next;else for(var x=I.nameTable[m];x;){if(x.name_next===h){x.name_next=h.name_next;break}x=x.name_next}},lookupNode(h,m){var x=I.mayLookup(h);if(x)throw new I.ErrnoError(x);for(var w=I.hashName(h.id,m),L=I.nameTable[w];L;L=L.name_next){var G=L.name;if(L.parent.id===h.id&&G===m)return L}return I.lookup(h,m)},createNode(h,m,x,w){var L=new I.FSNode(h,m,x,w);return I.hashAddNode(L),L},destroyNode(h){I.hashRemoveNode(h)},isRoot(h){return h===h.parent},isMountpoint(h){return!!h.mounted},isFile(h){return(h&61440)===32768},isDir(h){return(h&61440)===16384},isLink(h){return(h&61440)===40960},isChrdev(h){return(h&61440)===8192},isBlkdev(h){return(h&61440)===24576},isFIFO(h){return(h&61440)===4096},isSocket(h){return(h&49152)===49152},flagsToPermissionString(h){var m=["r","w","rw"][h&3];return h&512&&(m+="w"),m},nodePermissions(h,m){return I.ignorePermissions?0:m.includes("r")&&!(h.mode&292)||m.includes("w")&&!(h.mode&146)||m.includes("x")&&!(h.mode&73)?2:0},mayLookup(h){if(!I.isDir(h.mode))return 54;var m=I.nodePermissions(h,"x");return m||(h.node_ops.lookup?0:2)},mayCreate(h,m){try{var x=I.lookupNode(h,m);return 20}catch{}return I.nodePermissions(h,"wx")},mayDelete(h,m,x){var w;try{w=I.lookupNode(h,m)}catch(G){return G.errno}var L=I.nodePermissions(h,"wx");if(L)return L;if(x){if(!I.isDir(w.mode))return 54;if(I.isRoot(w)||I.getPath(w)===I.cwd())return 10}else if(I.isDir(w.mode))return 31;return 0},mayOpen(h,m){return h?I.isLink(h.mode)?32:I.isDir(h.mode)&&(I.flagsToPermissionString(m)!=="r"||m&512)?31:I.nodePermissions(h,I.flagsToPermissionString(m)):44},MAX_OPEN_FDS:4096,nextfd(){for(var h=0;h<=I.MAX_OPEN_FDS;h++)if(!I.streams[h])return h;throw new I.ErrnoError(33)},getStreamChecked(h){var m=I.getStream(h);if(!m)throw new I.ErrnoError(8);return m},getStream:h=>I.streams[h],createStream(h,m=-1){return h=Object.assign(new I.FSStream,h),m==-1&&(m=I.nextfd()),h.fd=m,I.streams[m]=h,h},closeStream(h){I.streams[h]=null},dupStream(h,m=-1){var x=I.createStream(h,m);return x.stream_ops?.dup?.(x),x},chrdev_stream_ops:{open(h){var m=I.getDevice(h.node.rdev);h.stream_ops=m.stream_ops,h.stream_ops.open?.(h)},llseek(){throw new I.ErrnoError(70)}},major:h=>h>>8,minor:h=>h&255,makedev:(h,m)=>h<<8|m,registerDevice(h,m){I.devices[h]={stream_ops:m}},getDevice:h=>I.devices[h],getMounts(h){for(var m=[],x=[h];x.length;){var w=x.pop();m.push(w),x.push(...w.mounts)}return m},syncfs(h,m){typeof h=="function"&&(m=h,h=!1),I.syncFSRequests++,I.syncFSRequests>1&&U(`warning: ${I.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var x=I.getMounts(I.root.mount),w=0;function L(Z){return I.syncFSRequests--,m(Z)}function G(Z){if(Z)return G.errored?void 0:(G.errored=!0,L(Z));++w>=x.length&&L(null)}x.forEach(Z=>{if(!Z.type.syncfs)return G(null);Z.type.syncfs(Z,h,G)})},mount(h,m,x){var w=x==="/",L=!x,G;if(w&&I.root)throw new I.ErrnoError(10);if(!w&&!L){var Z=I.lookupPath(x,{follow_mount:!1});if(x=Z.path,G=Z.node,I.isMountpoint(G))throw new I.ErrnoError(10);if(!I.isDir(G.mode))throw new I.ErrnoError(54)}var st={type:h,opts:m,mountpoint:x,mounts:[]},xt=h.mount(st);return xt.mount=st,st.root=xt,w?I.root=xt:G&&(G.mounted=st,G.mount&&G.mount.mounts.push(st)),xt},unmount(h){var m=I.lookupPath(h,{follow_mount:!1});if(!I.isMountpoint(m.node))throw new I.ErrnoError(28);var x=m.node,w=x.mounted,L=I.getMounts(w);Object.keys(I.nameTable).forEach(Z=>{for(var st=I.nameTable[Z];st;){var xt=st.name_next;L.includes(st.mount)&&I.destroyNode(st),st=xt}}),x.mounted=null;var G=x.mount.mounts.indexOf(w);x.mount.mounts.splice(G,1)},lookup(h,m){return h.node_ops.lookup(h,m)},mknod(h,m,x){var w=I.lookupPath(h,{parent:!0}),L=w.node,G=ft.basename(h);if(!G||G==="."||G==="..")throw new I.ErrnoError(28);var Z=I.mayCreate(L,G);if(Z)throw new I.ErrnoError(Z);if(!L.node_ops.mknod)throw new I.ErrnoError(63);return L.node_ops.mknod(L,G,m,x)},create(h,m){return m=m!==void 0?m:438,m&=4095,m|=32768,I.mknod(h,m,0)},mkdir(h,m){return m=m!==void 0?m:511,m&=1023,m|=16384,I.mknod(h,m,0)},mkdirTree(h,m){for(var x=h.split("/"),w="",L=0;L<x.length;++L)if(x[L]){w+="/"+x[L];try{I.mkdir(w,m)}catch(G){if(G.errno!=20)throw G}}},mkdev(h,m,x){return typeof x>"u"&&(x=m,m=438),m|=8192,I.mknod(h,m,x)},symlink(h,m){if(!Jt.resolve(h))throw new I.ErrnoError(44);var x=I.lookupPath(m,{parent:!0}),w=x.node;if(!w)throw new I.ErrnoError(44);var L=ft.basename(m),G=I.mayCreate(w,L);if(G)throw new I.ErrnoError(G);if(!w.node_ops.symlink)throw new I.ErrnoError(63);return w.node_ops.symlink(w,L,h)},rename(h,m){var x=ft.dirname(h),w=ft.dirname(m),L=ft.basename(h),G=ft.basename(m),Z,st,xt;if(Z=I.lookupPath(h,{parent:!0}),st=Z.node,Z=I.lookupPath(m,{parent:!0}),xt=Z.node,!st||!xt)throw new I.ErrnoError(44);if(st.mount!==xt.mount)throw new I.ErrnoError(75);var Nt=I.lookupNode(st,L),qt=Jt.relative(h,w);if(qt.charAt(0)!==".")throw new I.ErrnoError(28);if(qt=Jt.relative(m,x),qt.charAt(0)!==".")throw new I.ErrnoError(55);var Kt;try{Kt=I.lookupNode(xt,G)}catch{}if(Nt!==Kt){var ce=I.isDir(Nt.mode),ie=I.mayDelete(st,L,ce);if(ie)throw new I.ErrnoError(ie);if(ie=Kt?I.mayDelete(xt,G,ce):I.mayCreate(xt,G),ie)throw new I.ErrnoError(ie);if(!st.node_ops.rename)throw new I.ErrnoError(63);if(I.isMountpoint(Nt)||Kt&&I.isMountpoint(Kt))throw new I.ErrnoError(10);if(xt!==st&&(ie=I.nodePermissions(st,"w"),ie))throw new I.ErrnoError(ie);I.hashRemoveNode(Nt);try{st.node_ops.rename(Nt,xt,G),Nt.parent=xt}catch(_e){throw _e}finally{I.hashAddNode(Nt)}}},rmdir(h){var m=I.lookupPath(h,{parent:!0}),x=m.node,w=ft.basename(h),L=I.lookupNode(x,w),G=I.mayDelete(x,w,!0);if(G)throw new I.ErrnoError(G);if(!x.node_ops.rmdir)throw new I.ErrnoError(63);if(I.isMountpoint(L))throw new I.ErrnoError(10);x.node_ops.rmdir(x,w),I.destroyNode(L)},readdir(h){var m=I.lookupPath(h,{follow:!0}),x=m.node;if(!x.node_ops.readdir)throw new I.ErrnoError(54);return x.node_ops.readdir(x)},unlink(h){var m=I.lookupPath(h,{parent:!0}),x=m.node;if(!x)throw new I.ErrnoError(44);var w=ft.basename(h),L=I.lookupNode(x,w),G=I.mayDelete(x,w,!1);if(G)throw new I.ErrnoError(G);if(!x.node_ops.unlink)throw new I.ErrnoError(63);if(I.isMountpoint(L))throw new I.ErrnoError(10);x.node_ops.unlink(x,w),I.destroyNode(L)},readlink(h){var m=I.lookupPath(h),x=m.node;if(!x)throw new I.ErrnoError(44);if(!x.node_ops.readlink)throw new I.ErrnoError(28);return Jt.resolve(I.getPath(x.parent),x.node_ops.readlink(x))},stat(h,m){var x=I.lookupPath(h,{follow:!m}),w=x.node;if(!w)throw new I.ErrnoError(44);if(!w.node_ops.getattr)throw new I.ErrnoError(63);return w.node_ops.getattr(w)},lstat(h){return I.stat(h,!0)},chmod(h,m,x){var w;if(typeof h=="string"){var L=I.lookupPath(h,{follow:!x});w=L.node}else w=h;if(!w.node_ops.setattr)throw new I.ErrnoError(63);w.node_ops.setattr(w,{mode:m&4095|w.mode&-4096,timestamp:Date.now()})},lchmod(h,m){I.chmod(h,m,!0)},fchmod(h,m){var x=I.getStreamChecked(h);I.chmod(x.node,m)},chown(h,m,x,w){var L;if(typeof h=="string"){var G=I.lookupPath(h,{follow:!w});L=G.node}else L=h;if(!L.node_ops.setattr)throw new I.ErrnoError(63);L.node_ops.setattr(L,{timestamp:Date.now()})},lchown(h,m,x){I.chown(h,m,x,!0)},fchown(h,m,x){var w=I.getStreamChecked(h);I.chown(w.node,m,x)},truncate(h,m){if(m<0)throw new I.ErrnoError(28);var x;if(typeof h=="string"){var w=I.lookupPath(h,{follow:!0});x=w.node}else x=h;if(!x.node_ops.setattr)throw new I.ErrnoError(63);if(I.isDir(x.mode))throw new I.ErrnoError(31);if(!I.isFile(x.mode))throw new I.ErrnoError(28);var L=I.nodePermissions(x,"w");if(L)throw new I.ErrnoError(L);x.node_ops.setattr(x,{size:m,timestamp:Date.now()})},ftruncate(h,m){var x=I.getStreamChecked(h);if((x.flags&2097155)===0)throw new I.ErrnoError(28);I.truncate(x.node,m)},utime(h,m,x){var w=I.lookupPath(h,{follow:!0}),L=w.node;L.node_ops.setattr(L,{timestamp:Math.max(m,x)})},open(h,m,x){if(h==="")throw new I.ErrnoError(44);m=typeof m=="string"?Ls(m):m,m&64?(x=typeof x>"u"?438:x,x=x&4095|32768):x=0;var w;if(typeof h=="object")w=h;else{h=ft.normalize(h);try{var L=I.lookupPath(h,{follow:!(m&131072)});w=L.node}catch{}}var G=!1;if(m&64)if(w){if(m&128)throw new I.ErrnoError(20)}else w=I.mknod(h,x,0),G=!0;if(!w)throw new I.ErrnoError(44);if(I.isChrdev(w.mode)&&(m&=-513),m&65536&&!I.isDir(w.mode))throw new I.ErrnoError(54);if(!G){var Z=I.mayOpen(w,m);if(Z)throw new I.ErrnoError(Z)}m&512&&!G&&I.truncate(w,0),m&=-131713;var st=I.createStream({node:w,path:I.getPath(w),flags:m,seekable:!0,position:0,stream_ops:w.stream_ops,ungotten:[],error:!1});return st.stream_ops.open&&st.stream_ops.open(st),i.logReadFiles&&!(m&1)&&(h in I.readFiles||(I.readFiles[h]=1)),st},close(h){if(I.isClosed(h))throw new I.ErrnoError(8);h.getdents&&(h.getdents=null);try{h.stream_ops.close&&h.stream_ops.close(h)}catch(m){throw m}finally{I.closeStream(h.fd)}h.fd=null},isClosed(h){return h.fd===null},llseek(h,m,x){if(I.isClosed(h))throw new I.ErrnoError(8);if(!h.seekable||!h.stream_ops.llseek)throw new I.ErrnoError(70);if(x!=0&&x!=1&&x!=2)throw new I.ErrnoError(28);return h.position=h.stream_ops.llseek(h,m,x),h.ungotten=[],h.position},read(h,m,x,w,L){if(w<0||L<0)throw new I.ErrnoError(28);if(I.isClosed(h))throw new I.ErrnoError(8);if((h.flags&2097155)===1)throw new I.ErrnoError(8);if(I.isDir(h.node.mode))throw new I.ErrnoError(31);if(!h.stream_ops.read)throw new I.ErrnoError(28);var G=typeof L<"u";if(!G)L=h.position;else if(!h.seekable)throw new I.ErrnoError(70);var Z=h.stream_ops.read(h,m,x,w,L);return G||(h.position+=Z),Z},write(h,m,x,w,L,G){if(w<0||L<0)throw new I.ErrnoError(28);if(I.isClosed(h))throw new I.ErrnoError(8);if((h.flags&2097155)===0)throw new I.ErrnoError(8);if(I.isDir(h.node.mode))throw new I.ErrnoError(31);if(!h.stream_ops.write)throw new I.ErrnoError(28);h.seekable&&h.flags&1024&&I.llseek(h,0,2);var Z=typeof L<"u";if(!Z)L=h.position;else if(!h.seekable)throw new I.ErrnoError(70);var st=h.stream_ops.write(h,m,x,w,L,G);return Z||(h.position+=st),st},allocate(h,m,x){if(I.isClosed(h))throw new I.ErrnoError(8);if(m<0||x<=0)throw new I.ErrnoError(28);if((h.flags&2097155)===0)throw new I.ErrnoError(8);if(!I.isFile(h.node.mode)&&!I.isDir(h.node.mode))throw new I.ErrnoError(43);if(!h.stream_ops.allocate)throw new I.ErrnoError(138);h.stream_ops.allocate(h,m,x)},mmap(h,m,x,w,L){if((w&2)!==0&&(L&2)===0&&(h.flags&2097155)!==2)throw new I.ErrnoError(2);if((h.flags&2097155)===1)throw new I.ErrnoError(2);if(!h.stream_ops.mmap)throw new I.ErrnoError(43);if(!m)throw new I.ErrnoError(28);return h.stream_ops.mmap(h,m,x,w,L)},msync(h,m,x,w,L){return h.stream_ops.msync?h.stream_ops.msync(h,m,x,w,L):0},ioctl(h,m,x){if(!h.stream_ops.ioctl)throw new I.ErrnoError(59);return h.stream_ops.ioctl(h,m,x)},readFile(h,m={}){if(m.flags=m.flags||0,m.encoding=m.encoding||"binary",m.encoding!=="utf8"&&m.encoding!=="binary")throw new Error(`Invalid encoding type "${m.encoding}"`);var x,w=I.open(h,m.flags),L=I.stat(h),G=L.size,Z=new Uint8Array(G);return I.read(w,Z,0,G,0),m.encoding==="utf8"?x=Ft(Z):m.encoding==="binary"&&(x=Z),I.close(w),x},writeFile(h,m,x={}){x.flags=x.flags||577;var w=I.open(h,x.flags,x.mode);if(typeof m=="string"){var L=new Uint8Array(se(m)+1),G=me(m,L,0,L.length);I.write(w,L,0,G,void 0,x.canOwn)}else if(ArrayBuffer.isView(m))I.write(w,m,0,m.byteLength,void 0,x.canOwn);else throw new Error("Unsupported data type");I.close(w)},cwd:()=>I.currentPath,chdir(h){var m=I.lookupPath(h,{follow:!0});if(m.node===null)throw new I.ErrnoError(44);if(!I.isDir(m.node.mode))throw new I.ErrnoError(54);var x=I.nodePermissions(m.node,"x");if(x)throw new I.ErrnoError(x);I.currentPath=m.path},createDefaultDirectories(){I.mkdir("/tmp"),I.mkdir("/home"),I.mkdir("/home/web_user")},createDefaultDevices(){I.mkdir("/dev"),I.registerDevice(I.makedev(1,3),{read:()=>0,write:(w,L,G,Z,st)=>Z}),I.mkdev("/dev/null",I.makedev(1,3)),St.register(I.makedev(5,0),St.default_tty_ops),St.register(I.makedev(6,0),St.default_tty1_ops),I.mkdev("/dev/tty",I.makedev(5,0)),I.mkdev("/dev/tty1",I.makedev(6,0));var h=new Uint8Array(1024),m=0,x=()=>(m===0&&(m=Ot(h).byteLength),h[--m]);I.createDevice("/dev","random",x),I.createDevice("/dev","urandom",x),I.mkdir("/dev/shm"),I.mkdir("/dev/shm/tmp")},createSpecialDirectories(){I.mkdir("/proc");var h=I.mkdir("/proc/self");I.mkdir("/proc/self/fd"),I.mount({mount(){var m=I.createNode(h,"fd",16895,73);return m.node_ops={lookup(x,w){var L=+w,G=I.getStreamChecked(L),Z={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>G.path}};return Z.parent=Z,Z}},m}},{},"/proc/self/fd")},createStandardStreams(h,m,x){h?I.createDevice("/dev","stdin",h):I.symlink("/dev/tty","/dev/stdin"),m?I.createDevice("/dev","stdout",null,m):I.symlink("/dev/tty","/dev/stdout"),x?I.createDevice("/dev","stderr",null,x):I.symlink("/dev/tty1","/dev/stderr");var w=I.open("/dev/stdin",0),L=I.open("/dev/stdout",1),G=I.open("/dev/stderr",1)},staticInit(){[44].forEach(h=>{I.genericErrors[h]=new I.ErrnoError(h),I.genericErrors[h].stack="<generic error, no stack>"}),I.nameTable=new Array(4096),I.mount(Lt,{},"/"),I.createDefaultDirectories(),I.createDefaultDevices(),I.createSpecialDirectories(),I.filesystems={MEMFS:Lt}},init(h,m,x){I.initialized=!0,h??=i.stdin,m??=i.stdout,x??=i.stderr,I.createStandardStreams(h,m,x)},quit(){I.initialized=!1;for(var h=0;h<I.streams.length;h++){var m=I.streams[h];m&&I.close(m)}},findObject(h,m){var x=I.analyzePath(h,m);return x.exists?x.object:null},analyzePath(h,m){try{var x=I.lookupPath(h,{follow:!m});h=x.path}catch{}var w={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var x=I.lookupPath(h,{parent:!0});w.parentExists=!0,w.parentPath=x.path,w.parentObject=x.node,w.name=ft.basename(h),x=I.lookupPath(h,{follow:!m}),w.exists=!0,w.path=x.path,w.object=x.node,w.name=x.node.name,w.isRoot=x.path==="/"}catch(L){w.error=L.errno}return w},createPath(h,m,x,w){h=typeof h=="string"?h:I.getPath(h);for(var L=m.split("/").reverse();L.length;){var G=L.pop();if(G){var Z=ft.join2(h,G);try{I.mkdir(Z)}catch{}h=Z}}return Z},createFile(h,m,x,w,L){var G=ft.join2(typeof h=="string"?h:I.getPath(h),m),Z=lr(w,L);return I.create(G,Z)},createDataFile(h,m,x,w,L,G){var Z=m;h&&(h=typeof h=="string"?h:I.getPath(h),Z=m?ft.join2(h,m):h);var st=lr(w,L),xt=I.create(Z,st);if(x){if(typeof x=="string"){for(var Nt=new Array(x.length),qt=0,Kt=x.length;qt<Kt;++qt)Nt[qt]=x.charCodeAt(qt);x=Nt}I.chmod(xt,st|146);var ce=I.open(xt,577);I.write(ce,x,0,x.length,0,G),I.close(ce),I.chmod(xt,st)}},createDevice(h,m,x,w){var L=ft.join2(typeof h=="string"?h:I.getPath(h),m),G=lr(!!x,!!w);I.createDevice.major??=64;var Z=I.makedev(I.createDevice.major++,0);return I.registerDevice(Z,{open(st){st.seekable=!1},close(st){w?.buffer?.length&&w(10)},read(st,xt,Nt,qt,Kt){for(var ce=0,ie=0;ie<qt;ie++){var _e;try{_e=x()}catch{throw new I.ErrnoError(29)}if(_e===void 0&&ce===0)throw new I.ErrnoError(6);if(_e==null)break;ce++,xt[Nt+ie]=_e}return ce&&(st.node.timestamp=Date.now()),ce},write(st,xt,Nt,qt,Kt){for(var ce=0;ce<qt;ce++)try{w(xt[Nt+ce])}catch{throw new I.ErrnoError(29)}return qt&&(st.node.timestamp=Date.now()),ce}}),I.mkdev(L,G,Z)},forceLoadFile(h){if(h.isDevice||h.isFolder||h.link||h.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{h.contents=M(h.url),h.usedBytes=h.contents.length}catch{throw new I.ErrnoError(29)}},createLazyFile(h,m,x,w,L){class G{constructor(){this.lengthKnown=!1,this.chunks=[]}get(ie){if(!(ie>this.length-1||ie<0)){var _e=ie%this.chunkSize,De=ie/this.chunkSize|0;return this.getter(De)[_e]}}setDataGetter(ie){this.getter=ie}cacheLength(){var ie=new XMLHttpRequest;if(ie.open("HEAD",x,!1),ie.send(null),!(ie.status>=200&&ie.status<300||ie.status===304))throw new Error("Couldn't load "+x+". Status: "+ie.status);var _e=Number(ie.getResponseHeader("Content-length")),De,mn=(De=ie.getResponseHeader("Accept-Ranges"))&&De==="bytes",je=(De=ie.getResponseHeader("Content-Encoding"))&&De==="gzip",$n=1024*1024;mn||($n=_e);var Zn=(fi,Ur)=>{if(fi>Ur)throw new Error("invalid range ("+fi+", "+Ur+") or no bytes requested!");if(Ur>_e-1)throw new Error("only "+_e+" bytes available! programmer error!");var un=new XMLHttpRequest;if(un.open("GET",x,!1),_e!==$n&&un.setRequestHeader("Range","bytes="+fi+"-"+Ur),un.responseType="arraybuffer",un.overrideMimeType&&un.overrideMimeType("text/plain; charset=x-user-defined"),un.send(null),!(un.status>=200&&un.status<300||un.status===304))throw new Error("Couldn't load "+x+". Status: "+un.status);return un.response!==void 0?new Uint8Array(un.response||[]):at(un.responseText||"",!0)},Us=this;Us.setDataGetter(fi=>{var Ur=fi*$n,un=(fi+1)*$n-1;if(un=Math.min(un,_e-1),typeof Us.chunks[fi]>"u"&&(Us.chunks[fi]=Zn(Ur,un)),typeof Us.chunks[fi]>"u")throw new Error("doXHR failed!");return Us.chunks[fi]}),(je||!_e)&&($n=_e=1,_e=this.getter(0).length,$n=_e,R("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=_e,this._chunkSize=$n,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!f)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var Z=new G,st={isDevice:!1,contents:Z}}else var st={isDevice:!1,url:x};var xt=I.createFile(h,m,st,w,L);st.contents?xt.contents=st.contents:st.url&&(xt.contents=null,xt.url=st.url),Object.defineProperties(xt,{usedBytes:{get:function(){return this.contents.length}}});var Nt={},qt=Object.keys(xt.stream_ops);qt.forEach(ce=>{var ie=xt.stream_ops[ce];Nt[ce]=(..._e)=>(I.forceLoadFile(xt),ie(..._e))});function Kt(ce,ie,_e,De,mn){var je=ce.node.contents;if(mn>=je.length)return 0;var $n=Math.min(je.length-mn,De);if(je.slice)for(var Zn=0;Zn<$n;Zn++)ie[_e+Zn]=je[mn+Zn];else for(var Zn=0;Zn<$n;Zn++)ie[_e+Zn]=je.get(mn+Zn);return $n}return Nt.read=(ce,ie,_e,De,mn)=>(I.forceLoadFile(xt),Kt(ce,ie,_e,De,mn)),Nt.mmap=(ce,ie,_e,De,mn)=>{I.forceLoadFile(xt);var je=It(ie);if(!je)throw new I.ErrnoError(48);return Kt(ce,nt,je,ie,_e),{ptr:je,allocated:!0}},xt.stream_ops=Nt,xt}},Si=(h,m)=>h?Ft(it,h,m):"",Pe={DEFAULT_POLLMASK:5,calculateAt(h,m,x){if(ft.isAbs(m))return m;var w;if(h===-100)w=I.cwd();else{var L=Pe.getStreamFromFD(h);w=L.path}if(m.length==0){if(!x)throw new I.ErrnoError(44);return w}return ft.join2(w,m)},doStat(h,m,x){var w=h(m);B[x>>2]=w.dev,B[x+4>>2]=w.mode,et[x+8>>2]=w.nlink,B[x+12>>2]=w.uid,B[x+16>>2]=w.gid,B[x+20>>2]=w.rdev,ot=[w.size>>>0,(W=w.size,+Math.abs(W)>=1?W>0?+Math.floor(W/4294967296)>>>0:~~+Math.ceil((W-+(~~W>>>0))/4294967296)>>>0:0)],B[x+24>>2]=ot[0],B[x+28>>2]=ot[1],B[x+32>>2]=4096,B[x+36>>2]=w.blocks;var L=w.atime.getTime(),G=w.mtime.getTime(),Z=w.ctime.getTime();return ot=[Math.floor(L/1e3)>>>0,(W=Math.floor(L/1e3),+Math.abs(W)>=1?W>0?+Math.floor(W/4294967296)>>>0:~~+Math.ceil((W-+(~~W>>>0))/4294967296)>>>0:0)],B[x+40>>2]=ot[0],B[x+44>>2]=ot[1],et[x+48>>2]=L%1e3*1e3*1e3,ot=[Math.floor(G/1e3)>>>0,(W=Math.floor(G/1e3),+Math.abs(W)>=1?W>0?+Math.floor(W/4294967296)>>>0:~~+Math.ceil((W-+(~~W>>>0))/4294967296)>>>0:0)],B[x+56>>2]=ot[0],B[x+60>>2]=ot[1],et[x+64>>2]=G%1e3*1e3*1e3,ot=[Math.floor(Z/1e3)>>>0,(W=Math.floor(Z/1e3),+Math.abs(W)>=1?W>0?+Math.floor(W/4294967296)>>>0:~~+Math.ceil((W-+(~~W>>>0))/4294967296)>>>0:0)],B[x+72>>2]=ot[0],B[x+76>>2]=ot[1],et[x+80>>2]=Z%1e3*1e3*1e3,ot=[w.ino>>>0,(W=w.ino,+Math.abs(W)>=1?W>0?+Math.floor(W/4294967296)>>>0:~~+Math.ceil((W-+(~~W>>>0))/4294967296)>>>0:0)],B[x+88>>2]=ot[0],B[x+92>>2]=ot[1],0},doMsync(h,m,x,w,L){if(!I.isFile(m.node.mode))throw new I.ErrnoError(43);if(w&2)return 0;var G=it.slice(h,h+x);I.msync(m,G,L,x,w)},getStreamFromFD(h){var m=I.getStreamChecked(h);return m},varargs:void 0,getStr(h){var m=Si(h);return m}};function Cr(h,m){try{return h=Pe.getStr(h),I.chmod(h,m),0}catch(x){if(typeof I>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function Pr(h,m,x,w){try{if(m=Pe.getStr(m),m=Pe.calculateAt(h,m),x&-8)return-28;var L=I.lookupPath(m,{follow:!0}),G=L.node;if(!G)return-44;var Z="";return x&4&&(Z+="r"),x&2&&(Z+="w"),x&1&&(Z+="x"),Z&&I.nodePermissions(G,Z)?-2:0}catch(st){if(typeof I>"u"||st.name!=="ErrnoError")throw st;return-st.errno}}function An(){var h=B[+Pe.varargs>>2];return Pe.varargs+=4,h}var Vn=An;function Ir(h,m,x){Pe.varargs=x;try{var w=Pe.getStreamFromFD(h);switch(m){case 0:{var L=An();if(L<0)return-28;for(;I.streams[L];)L++;var G;return G=I.dupStream(w,L),G.fd}case 1:case 2:return 0;case 3:return w.flags;case 4:{var L=An();return w.flags|=L,0}case 12:{var L=Vn(),Z=0;return tt[L+Z>>1]=2,0}case 13:case 14:return 0}return-28}catch(st){if(typeof I>"u"||st.name!=="ErrnoError")throw st;return-st.errno}}function hi(h,m){try{var x=Pe.getStreamFromFD(h);return Pe.doStat(I.stat,x.path,m)}catch(w){if(typeof I>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function bi(h,m,x){Pe.varargs=x;try{var w=Pe.getStreamFromFD(h);switch(m){case 21509:return w.tty?0:-59;case 21505:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tcgets){var L=w.tty.ops.ioctl_tcgets(w),G=Vn();B[G>>2]=L.c_iflag||0,B[G+4>>2]=L.c_oflag||0,B[G+8>>2]=L.c_cflag||0,B[G+12>>2]=L.c_lflag||0;for(var Z=0;Z<32;Z++)nt[G+Z+17]=L.c_cc[Z]||0;return 0}return 0}case 21510:case 21511:case 21512:return w.tty?0:-59;case 21506:case 21507:case 21508:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tcsets){for(var G=Vn(),st=B[G>>2],xt=B[G+4>>2],Nt=B[G+8>>2],qt=B[G+12>>2],Kt=[],Z=0;Z<32;Z++)Kt.push(nt[G+Z+17]);return w.tty.ops.ioctl_tcsets(w.tty,m,{c_iflag:st,c_oflag:xt,c_cflag:Nt,c_lflag:qt,c_cc:Kt})}return 0}case 21519:{if(!w.tty)return-59;var G=Vn();return B[G>>2]=0,0}case 21520:return w.tty?-28:-59;case 21531:{var G=Vn();return I.ioctl(w,m,G)}case 21523:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tiocgwinsz){var ce=w.tty.ops.ioctl_tiocgwinsz(w.tty),G=Vn();tt[G>>1]=ce[0],tt[G+2>>1]=ce[1]}return 0}case 21524:return w.tty?0:-59;case 21515:return w.tty?0:-59;default:return-28}}catch(ie){if(typeof I>"u"||ie.name!=="ErrnoError")throw ie;return-ie.errno}}function Rr(h,m){try{return h=Pe.getStr(h),Pe.doStat(I.lstat,h,m)}catch(x){if(typeof I>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function Oi(h,m,x,w){try{m=Pe.getStr(m);var L=w&256,G=w&4096;return w=w&-6401,m=Pe.calculateAt(h,m,G),Pe.doStat(L?I.lstat:I.stat,m,x)}catch(Z){if(typeof I>"u"||Z.name!=="ErrnoError")throw Z;return-Z.errno}}function Lr(h,m,x,w){Pe.varargs=w;try{m=Pe.getStr(m),m=Pe.calculateAt(h,m);var L=w?An():0;return I.open(m,x,L).fd}catch(G){if(typeof I>"u"||G.name!=="ErrnoError")throw G;return-G.errno}}function Nr(h){try{return h=Pe.getStr(h),I.rmdir(h),0}catch(m){if(typeof I>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}function Ns(h,m){try{return h=Pe.getStr(h),Pe.doStat(I.stat,h,m)}catch(x){if(typeof I>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function ui(h,m,x){try{return m=Pe.getStr(m),m=Pe.calculateAt(h,m),x===0?I.unlink(m):x===512?I.rmdir(m):ye("Invalid flags passed to unlinkat"),0}catch(w){if(typeof I>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}var Ds=()=>{ye("")},Os=(h,m,x,w,L)=>{},Dr=()=>{for(var h=new Array(256),m=0;m<256;++m)h[m]=String.fromCharCode(m);N=h},N,rt=h=>{for(var m="",x=h;it[x];)m+=N[it[x++]];return m},vt={},pt={},gt={},Wt,Dt=h=>{throw new Wt(h)},Xt,jt=h=>{throw new Xt(h)},ee=(h,m,x)=>{h.forEach(st=>gt[st]=m);function w(st){var xt=x(st);xt.length!==h.length&&jt("Mismatched type converter count");for(var Nt=0;Nt<h.length;++Nt)fe(h[Nt],xt[Nt])}var L=new Array(m.length),G=[],Z=0;m.forEach((st,xt)=>{pt.hasOwnProperty(st)?L[xt]=pt[st]:(G.push(st),vt.hasOwnProperty(st)||(vt[st]=[]),vt[st].push(()=>{L[xt]=pt[st],++Z,Z===G.length&&w(L)}))}),G.length===0&&w(L)};function zt(h,m,x={}){var w=m.name;if(h||Dt(`type "${w}" must have a positive integer typeid pointer`),pt.hasOwnProperty(h)){if(x.ignoreDuplicateRegistrations)return;Dt(`Cannot register type '${w}' twice`)}if(pt[h]=m,delete gt[h],vt.hasOwnProperty(h)){var L=vt[h];delete vt[h],L.forEach(G=>G())}}function fe(h,m,x={}){return zt(h,m,x)}var Zt=8,Re=(h,m,x,w)=>{m=rt(m),fe(h,{name:m,fromWireType:function(L){return!!L},toWireType:function(L,G){return G?x:w},argPackAdvance:Zt,readValueFromPointer:function(L){return this.fromWireType(it[L])},destructorFunction:null})},We=[],Ae=[],r=h=>{h>9&&--Ae[h+1]===0&&(Ae[h]=void 0,We.push(h))},a=()=>Ae.length/2-5-We.length,l=()=>{Ae.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=a},p={toValue:h=>(h||Dt("Cannot use deleted val. handle = "+h),Ae[h]),toHandle:h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let m=We.pop()||Ae.length;return Ae[m]=h,Ae[m+1]=1,m}}}};function v(h){return this.fromWireType(et[h>>2])}var A={name:"emscripten::val",fromWireType:h=>{var m=p.toValue(h);return r(h),m},toWireType:(h,m)=>p.toHandle(m),argPackAdvance:Zt,readValueFromPointer:v,destructorFunction:null},D=h=>fe(h,A),$=(h,m)=>{switch(m){case 4:return function(x){return this.fromWireType(V[x>>2])};case 8:return function(x){return this.fromWireType(dt[x>>3])};default:throw new TypeError(`invalid float width (${m}): ${h}`)}},j=(h,m,x)=>{m=rt(m),fe(h,{name:m,fromWireType:w=>w,toWireType:(w,L)=>L,argPackAdvance:Zt,readValueFromPointer:$(m,x),destructorFunction:null})},ut=(h,m)=>Object.defineProperty(m,"name",{value:h}),Et=h=>{for(;h.length;){var m=h.pop(),x=h.pop();x(m)}};function wt(h){for(var m=1;m<h.length;++m)if(h[m]!==null&&h[m].destructorFunction===void 0)return!0;return!1}function Rt(h,m){if(!(h instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof h} which is not a function`);var x=ut(h.name||"unknownFunctionName",function(){});x.prototype=h.prototype;var w=new x,L=h.apply(w,m);return L instanceof Object?L:w}function ne(h,m,x,w){var L=wt(h),G=h.length-2,Z=[],st=["fn"];m&&st.push("thisWired");for(var xt=0;xt<G;++xt)Z.push(`arg${xt}`),st.push(`arg${xt}Wired`);Z=Z.join(","),st=st.join(",");var Nt=`return function (${Z}) {
`;L&&(Nt+=`var destructors = [];
`);var qt=L?"destructors":"null",Kt=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];m&&(Nt+=`var thisWired = classParam['toWireType'](${qt}, this);
`);for(var xt=0;xt<G;++xt)Nt+=`var arg${xt}Wired = argType${xt}['toWireType'](${qt}, arg${xt});
`,Kt.push(`argType${xt}`);if(Nt+=(x||w?"var rv = ":"")+`invoker(${st});
`,L)Nt+=`runDestructors(destructors);
`;else for(var xt=m?1:2;xt<h.length;++xt){var ce=xt===1?"thisWired":"arg"+(xt-2)+"Wired";h[xt].destructorFunction!==null&&(Nt+=`${ce}_dtor(${ce});
`,Kt.push(`${ce}_dtor`))}return x&&(Nt+=`var ret = retType['fromWireType'](rv);
return ret;
`),Nt+=`}
`,[Kt,Nt]}function ge(h,m,x,w,L,G){var Z=m.length;Z<2&&Dt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var st=m[1]!==null&&x!==null,xt=wt(m),Nt=m[0].name!=="void",qt=[h,Dt,w,L,Et,m[0],m[1]],Kt=0;Kt<Z-2;++Kt)qt.push(m[Kt+2]);if(!xt)for(var Kt=st?1:2;Kt<m.length;++Kt)m[Kt].destructorFunction!==null&&qt.push(m[Kt].destructorFunction);let[ce,ie]=ne(m,st,Nt,G);ce.push(ie);var _e=Rt(Function,ce)(...qt);return ut(h,_e)}var be=(h,m,x)=>{if(h[m].overloadTable===void 0){var w=h[m];h[m]=function(...L){return h[m].overloadTable.hasOwnProperty(L.length)||Dt(`Function '${x}' called with an invalid number of arguments (${L.length}) - expects one of (${h[m].overloadTable})!`),h[m].overloadTable[L.length].apply(this,L)},h[m].overloadTable=[],h[m].overloadTable[w.argCount]=w}},Be=(h,m,x)=>{i.hasOwnProperty(h)?((x===void 0||i[h].overloadTable!==void 0&&i[h].overloadTable[x]!==void 0)&&Dt(`Cannot register public name '${h}' twice`),be(i,h,h),i.hasOwnProperty(x)&&Dt(`Cannot register multiple overloads of a function with the same number of arguments (${x})!`),i[h].overloadTable[x]=m):(i[h]=m,x!==void 0&&(i[h].numArguments=x))},pn=(h,m)=>{for(var x=[],w=0;w<h;w++)x.push(et[m+w*4>>2]);return x},Hn=(h,m,x)=>{i.hasOwnProperty(h)||jt("Replacing nonexistent public symbol"),i[h].overloadTable!==void 0&&x!==void 0?i[h].overloadTable[x]=m:(i[h]=m,i[h].argCount=x)},Fi=(h,m,x)=>{h=h.replace(/p/g,"i");var w=i["dynCall_"+h];return w(m,...x)},Or=[],Bo,wi=h=>{var m=Or[h];return m||(h>=Or.length&&(Or.length=h+1),Or[h]=m=Bo.get(h)),m},Kd=(h,m,x=[])=>{if(h.includes("j"))return Fi(h,m,x);var w=wi(m)(...x);return w},Qd=(h,m)=>(...x)=>Kd(h,m,x),tp=(h,m)=>{h=rt(h);function x(){return h.includes("j")?Qd(h,m):wi(m)}var w=x();return typeof w!="function"&&Dt(`unknown function pointer with signature ${h}: ${m}`),w},ep=(h,m)=>{var x=ut(m,function(w){this.name=m,this.message=w;var L=new Error(w).stack;L!==void 0&&(this.stack=this.toString()+`
`+L.replace(/^Error(:[^\n]*)?\n/,""))});return x.prototype=Object.create(h.prototype),x.prototype.constructor=x,x.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},x},tu,eu=h=>{var m=au(h),x=rt(m);return Ei(m),x},np=(h,m)=>{var x=[],w={};function L(G){if(!w[G]&&!pt[G]){if(gt[G]){gt[G].forEach(L);return}x.push(G),w[G]=!0}}throw m.forEach(L),new tu(`${h}: `+x.map(eu).join([", "]))},ip=h=>{h=h.trim();let m=h.indexOf("(");return m!==-1?h.substr(0,m):h},rp=(h,m,x,w,L,G,Z,st)=>{var xt=pn(m,x);h=rt(h),h=ip(h),L=tp(w,L),Be(h,function(){np(`Cannot call ${h} due to unbound types`,xt)},m-1),ee([],xt,Nt=>{var qt=[Nt[0],null].concat(Nt.slice(1));return Hn(h,ge(h,qt,null,L,G,Z),m-1),[]})},sp=(h,m,x)=>{switch(m){case 1:return x?w=>nt[w]:w=>it[w];case 2:return x?w=>tt[w>>1]:w=>K[w>>1];case 4:return x?w=>B[w>>2]:w=>et[w>>2];default:throw new TypeError(`invalid integer width (${m}): ${h}`)}},op=(h,m,x,w,L)=>{m=rt(m),L===-1&&(L=4294967295);var G=qt=>qt;if(w===0){var Z=32-8*x;G=qt=>qt<<Z>>>Z}var st=m.includes("unsigned"),xt=(qt,Kt)=>{},Nt;st?Nt=function(qt,Kt){return xt(Kt,this.name),Kt>>>0}:Nt=function(qt,Kt){return xt(Kt,this.name),Kt},fe(h,{name:m,fromWireType:G,toWireType:Nt,argPackAdvance:Zt,readValueFromPointer:sp(m,x,w!==0),destructorFunction:null})},ap=(h,m,x)=>{var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],L=w[m];function G(Z){var st=et[Z>>2],xt=et[Z+4>>2];return new L(nt.buffer,xt,st)}x=rt(x),fe(h,{name:x,fromWireType:G,argPackAdvance:Zt,readValueFromPointer:G},{ignoreDuplicateRegistrations:!0})},Fr=(h,m,x)=>me(h,it,m,x),lp=(h,m)=>{m=rt(m);var x=m==="std::string";fe(h,{name:m,fromWireType(w){var L=et[w>>2],G=w+4,Z;if(x)for(var st=G,xt=0;xt<=L;++xt){var Nt=G+xt;if(xt==L||it[Nt]==0){var qt=Nt-st,Kt=Si(st,qt);Z===void 0?Z=Kt:(Z+="\0",Z+=Kt),st=Nt+1}}else{for(var ce=new Array(L),xt=0;xt<L;++xt)ce[xt]=String.fromCharCode(it[G+xt]);Z=ce.join("")}return Ei(w),Z},toWireType(w,L){L instanceof ArrayBuffer&&(L=new Uint8Array(L));var G,Z=typeof L=="string";Z||L instanceof Uint8Array||L instanceof Uint8ClampedArray||L instanceof Int8Array||Dt("Cannot pass non-string to std::string"),x&&Z?G=se(L):G=L.length;var st=hc(4+G+1),xt=st+4;if(et[st>>2]=G,x&&Z)Fr(L,xt,G+1);else if(Z)for(var Nt=0;Nt<G;++Nt){var qt=L.charCodeAt(Nt);qt>255&&(Ei(xt),Dt("String has UTF-16 code units that do not fit in 8 bits")),it[xt+Nt]=qt}else for(var Nt=0;Nt<G;++Nt)it[xt+Nt]=L[Nt];return w!==null&&w.push(Ei,st),st},argPackAdvance:Zt,readValueFromPointer:v,destructorFunction(w){Ei(w)}})},nu=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,cp=(h,m)=>{for(var x=h,w=x>>1,L=w+m/2;!(w>=L)&&K[w];)++w;if(x=w<<1,x-h>32&&nu)return nu.decode(it.subarray(h,x));for(var G="",Z=0;!(Z>=m/2);++Z){var st=tt[h+Z*2>>1];if(st==0)break;G+=String.fromCharCode(st)}return G},hp=(h,m,x)=>{if(x??=2147483647,x<2)return 0;x-=2;for(var w=m,L=x<h.length*2?x/2:h.length,G=0;G<L;++G){var Z=h.charCodeAt(G);tt[m>>1]=Z,m+=2}return tt[m>>1]=0,m-w},up=h=>h.length*2,fp=(h,m)=>{for(var x=0,w="";!(x>=m/4);){var L=B[h+x*4>>2];if(L==0)break;if(++x,L>=65536){var G=L-65536;w+=String.fromCharCode(55296|G>>10,56320|G&1023)}else w+=String.fromCharCode(L)}return w},dp=(h,m,x)=>{if(x??=2147483647,x<4)return 0;for(var w=m,L=w+x-4,G=0;G<h.length;++G){var Z=h.charCodeAt(G);if(Z>=55296&&Z<=57343){var st=h.charCodeAt(++G);Z=65536+((Z&1023)<<10)|st&1023}if(B[m>>2]=Z,m+=4,m+4>L)break}return B[m>>2]=0,m-w},pp=h=>{for(var m=0,x=0;x<h.length;++x){var w=h.charCodeAt(x);w>=55296&&w<=57343&&++x,m+=4}return m},mp=(h,m,x)=>{x=rt(x);var w,L,G,Z;m===2?(w=cp,L=hp,Z=up,G=st=>K[st>>1]):m===4&&(w=fp,L=dp,Z=pp,G=st=>et[st>>2]),fe(h,{name:x,fromWireType:st=>{for(var xt=et[st>>2],Nt,qt=st+4,Kt=0;Kt<=xt;++Kt){var ce=st+4+Kt*m;if(Kt==xt||G(ce)==0){var ie=ce-qt,_e=w(qt,ie);Nt===void 0?Nt=_e:(Nt+="\0",Nt+=_e),qt=ce+m}}return Ei(st),Nt},toWireType:(st,xt)=>{typeof xt!="string"&&Dt(`Cannot pass non-string to C++ string type ${x}`);var Nt=Z(xt),qt=hc(4+Nt+m);return et[qt>>2]=Nt/m,L(xt,qt+4,Nt+m),st!==null&&st.push(Ei,qt),qt},argPackAdvance:Zt,readValueFromPointer:v,destructorFunction(st){Ei(st)}})},gp=(h,m)=>{m=rt(m),fe(h,{isVoid:!0,name:m,argPackAdvance:0,fromWireType:()=>{},toWireType:(x,w)=>{}})},_p=1,vp=()=>_p,iu=h=>{for(var m=h.split("."),x=0;x<4;x++){var w=Number(m[x]);if(isNaN(w))return null;m[x]=w}return(m[0]|m[1]<<8|m[2]<<16|m[3]<<24)>>>0},ko=h=>parseInt(h),yp=h=>{var m,x,w,L,G=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,Z=[];if(!G.test(h))return null;if(h==="::")return[0,0,0,0,0,0,0,0];for(h.startsWith("::")?h=h.replace("::","Z:"):h=h.replace("::",":Z:"),h.indexOf(".")>0?(h=h.replace(new RegExp("[.]","g"),":"),m=h.split(":"),m[m.length-4]=ko(m[m.length-4])+ko(m[m.length-3])*256,m[m.length-3]=ko(m[m.length-2])+ko(m[m.length-1])*256,m=m.slice(0,m.length-2)):m=h.split(":"),w=0,L=0,x=0;x<m.length;x++)if(typeof m[x]=="string")if(m[x]==="Z"){for(L=0;L<8-m.length+1;L++)Z[x+L]=0;w=L-1}else Z[x+w]=lu(parseInt(m[x],16));else Z[x+w]=m[x];return[Z[1]<<16|Z[0],Z[3]<<16|Z[2],Z[5]<<16|Z[4],Z[7]<<16|Z[6]]},Ui={address_map:{id:1,addrs:{},names:{}},lookup_name(h){var m=iu(h);if(m!==null||(m=yp(h),m!==null))return h;var x;if(Ui.address_map.addrs[h])x=Ui.address_map.addrs[h];else{var w=Ui.address_map.id++;Y(w<65535,"exceeded max address mappings of 65535"),x="172.29."+(w&255)+"."+(w&65280),Ui.address_map.names[x]=h,Ui.address_map.addrs[h]=x}return x},lookup_addr(h){return Ui.address_map.names[h]?Ui.address_map.names[h]:null}},xp=h=>{var m=Si(h);return iu(Ui.lookup_name(m))},Mp=(h,m,x)=>it.copyWithin(h,m,m+x),sc=(h,m)=>{var x=pt[h];return x===void 0&&Dt(`${m} has unknown type ${eu(h)}`),x},ru=(h,m,x)=>{var w=[],L=h.toWireType(w,x);return w.length&&(et[m>>2]=p.toHandle(w)),L},Sp=(h,m,x)=>(h=p.toValue(h),m=sc(m,"emval::as"),ru(m,x,h)),bp={},oc=h=>{var m=bp[h];return m===void 0?rt(h):m},ac=[],wp=(h,m,x,w,L)=>(h=ac[h],m=p.toValue(m),x=oc(x),h(m,m[x],w,L)),su=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),Ep=h=>h===0?p.toHandle(su()):(h=oc(h),p.toHandle(su()[h])),Tp=h=>{var m=ac.length;return ac.push(h),m},Ap=(h,m)=>{for(var x=new Array(h),w=0;w<h;++w)x[w]=sc(et[m+w*4>>2],"parameter "+w);return x},dM=Reflect.construct,Cp=(h,m,x)=>{var w=Ap(h,m),L=w.shift();h--;var G=`return function (obj, func, destructorsRef, args) {
`,Z=0,st=[];x===0&&st.push("obj");for(var xt=["retType"],Nt=[L],qt=0;qt<h;++qt)st.push("arg"+qt),xt.push("argType"+qt),Nt.push(w[qt]),G+=`  var arg${qt} = argType${qt}.readValueFromPointer(args${Z?"+"+Z:""});
`,Z+=w[qt].argPackAdvance;var Kt=x===1?"new func":"func.call";G+=`  var rv = ${Kt}(${st.join(", ")});
`,L.isVoid||(xt.push("emval_returnValue"),Nt.push(ru),G+=`  return emval_returnValue(retType, destructorsRef, rv);
`),G+=`};
`,xt.push(G);var ce=Rt(Function,xt)(...Nt),ie=`methodCaller<(${w.map(_e=>_e.name).join(", ")}) => ${L.name}>`;return Tp(ut(ie,ce))},Pp=(h,m)=>(h=p.toValue(h),m=p.toValue(m),p.toHandle(h[m])),Ip=h=>{h>9&&(Ae[h+1]+=1)},Rp=()=>p.toHandle([]),Lp=h=>p.toHandle(oc(h)),Np=()=>p.toHandle({}),Dp=h=>{var m=p.toValue(h);Et(m),r(h)},Op=(h,m,x)=>{h=p.toValue(h),m=p.toValue(m),x=p.toValue(x),h[m]=x},Fp=(h,m)=>{h=sc(h,"_emval_take_value");var x=h.readValueFromPointer(m);return p.toHandle(x)},Up=h=>h%4===0&&(h%100!==0||h%400===0),Bp=[0,31,60,91,121,152,182,213,244,274,305,335],kp=[0,31,59,90,120,151,181,212,243,273,304,334],zp=h=>{var m=Up(h.getFullYear()),x=m?Bp:kp,w=x[h.getMonth()]+h.getDate()-1;return w},lc=(h,m)=>m+2097152>>>0<4194305-!!h?(h>>>0)+m*4294967296:NaN;function Vp(h,m,x){var w=lc(h,m),L=new Date(w*1e3);B[x>>2]=L.getSeconds(),B[x+4>>2]=L.getMinutes(),B[x+8>>2]=L.getHours(),B[x+12>>2]=L.getDate(),B[x+16>>2]=L.getMonth(),B[x+20>>2]=L.getFullYear()-1900,B[x+24>>2]=L.getDay();var G=zp(L)|0;B[x+28>>2]=G,B[x+36>>2]=-(L.getTimezoneOffset()*60);var Z=new Date(L.getFullYear(),0,1),st=new Date(L.getFullYear(),6,1).getTimezoneOffset(),xt=Z.getTimezoneOffset(),Nt=(st!=xt&&L.getTimezoneOffset()==Math.min(xt,st))|0;B[x+32>>2]=Nt}function Hp(h,m,x,w,L,G,Z){var st=lc(G,Z);try{var xt=Pe.getStreamFromFD(L);x&2&&Pe.doMsync(h,xt,m,w,st)}catch(Nt){if(typeof I>"u"||Nt.name!=="ErrnoError")throw Nt;return-Nt.errno}}var Gp=(h,m,x,w)=>{var L=new Date().getFullYear(),G=new Date(L,0,1),Z=new Date(L,6,1),st=G.getTimezoneOffset(),xt=Z.getTimezoneOffset(),Nt=Math.max(st,xt);et[h>>2]=Nt*60,B[m>>2]=+(st!=xt);var qt=ie=>{var _e=ie>=0?"-":"+",De=Math.abs(ie),mn=String(Math.floor(De/60)).padStart(2,"0"),je=String(De%60).padStart(2,"0");return`UTC${_e}${mn}${je}`},Kt=qt(st),ce=qt(xt);xt<st?(Fr(Kt,x,17),Fr(ce,w,17)):(Fr(Kt,w,17),Fr(ce,x,17))},Xp=()=>Date.now();function Wp(){return new Error().stack.toString()}var zo=h=>{zo.shown||={},zo.shown[h]||(zo.shown[h]=1,d&&(h="warning: "+h),U(h))};function Yp(h){var m=Wp(),x=m.lastIndexOf("_emscripten_log"),w=m.lastIndexOf("_emscripten_get_callstack"),L=m.indexOf(`
`,Math.max(x,w))+1;m=m.slice(L),h&8&&typeof emscripten_source_map>"u"&&(zo('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),h^=8,h|=16);var G=m.split(`
`);m="";var Z=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),st=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),xt=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Nt in G){var qt=G[Nt],Kt="",ce="",ie=0,_e=0,De=xt.exec(qt);if(De&&De.length==5)Kt=De[1],ce=De[2],ie=De[3],_e=De[4];else if(De=Z.exec(qt)||st.exec(qt),De&&De.length>=4)Kt=De[1],ce=De[2],ie=De[3],_e=De[4]|0;else{m+=qt+`
`;continue}var mn=!1;if(h&8){var je=emscripten_source_map.originalPositionFor({line:ie,column:_e});mn=je?.source,mn&&(h&64&&(je.source=je.source.substring(je.source.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=`    at ${Kt} (${je.source}:${je.line}:${je.column})
`)}(h&16||!mn)&&(h&64&&(ce=ce.substring(ce.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=(mn?`     = ${Kt}`:`    at ${Kt}`)+` (${ce}:${ie}:${_e})
`)}return m=m.replace(/\s+$/,""),m}function qp(h,m,x){var w=Yp(h);if(!m||x<=0)return se(w)+1;var L=Fr(w,m,x);return L+1}var ou=()=>2147483648,$p=()=>ou(),Zp=h=>{var m=q.buffer,x=(h-m.byteLength+65535)/65536|0;try{return q.grow(x),ct(),1}catch{}},Jp=h=>{var m=it.length;h>>>=0;var x=ou();if(h>x)return!1;for(var w=1;w<=4;w*=2){var L=m*(1+.2/w);L=Math.min(L,h+100663296);var G=Math.min(x,Yt(Math.max(h,L),65536)),Z=Zp(G);if(Z)return!0}return!1},cc={},jp=()=>g||"./this.program",Fs=()=>{if(!Fs.strings){var h=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",m={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:h,_:jp()};for(var x in cc)cc[x]===void 0?delete m[x]:m[x]=cc[x];var w=[];for(var x in m)w.push(`${x}=${m[x]}`);Fs.strings=w}return Fs.strings},Kp=(h,m)=>{for(var x=0;x<h.length;++x)nt[m++]=h.charCodeAt(x);nt[m]=0},Qp=(h,m)=>{var x=0;return Fs().forEach((w,L)=>{var G=m+x;et[h+L*4>>2]=G,Kp(w,G),x+=w.length+1}),0},tm=(h,m)=>{var x=Fs();et[h>>2]=x.length;var w=0;return x.forEach(L=>w+=L.length+1),et[m>>2]=w,0},em=0,nm=()=>Ct||em>0,im=h=>{H=h,nm()||(i.onExit?.(h),C=!0),b(h,new Q(h))},rm=(h,m)=>{H=h,im(h)},sm=rm;function om(h){try{var m=Pe.getStreamFromFD(h);return I.close(m),0}catch(x){if(typeof I>"u"||x.name!=="ErrnoError")throw x;return x.errno}}var am=(h,m,x,w)=>{for(var L=0,G=0;G<x;G++){var Z=et[m>>2],st=et[m+4>>2];m+=8;var xt=I.read(h,nt,Z,st,w);if(xt<0)return-1;if(L+=xt,xt<st)break;typeof w<"u"&&(w+=xt)}return L};function lm(h,m,x,w){try{var L=Pe.getStreamFromFD(h),G=am(L,m,x);return et[w>>2]=G,0}catch(Z){if(typeof I>"u"||Z.name!=="ErrnoError")throw Z;return Z.errno}}function cm(h,m,x,w,L){var G=lc(m,x);try{if(isNaN(G))return 61;var Z=Pe.getStreamFromFD(h);return I.llseek(Z,G,w),ot=[Z.position>>>0,(W=Z.position,+Math.abs(W)>=1?W>0?+Math.floor(W/4294967296)>>>0:~~+Math.ceil((W-+(~~W>>>0))/4294967296)>>>0:0)],B[L>>2]=ot[0],B[L+4>>2]=ot[1],Z.getdents&&G===0&&w===0&&(Z.getdents=null),0}catch(st){if(typeof I>"u"||st.name!=="ErrnoError")throw st;return st.errno}}var hm=(h,m,x,w)=>{for(var L=0,G=0;G<x;G++){var Z=et[m>>2],st=et[m+4>>2];m+=8;var xt=I.write(h,nt,Z,st,w);if(xt<0)return-1;if(L+=xt,xt<st)break;typeof w<"u"&&(w+=xt)}return L};function um(h,m,x,w){try{var L=Pe.getStreamFromFD(h),G=hm(L,m,x);return et[w>>2]=G,0}catch(Z){if(typeof I>"u"||Z.name!=="ErrnoError")throw Z;return Z.errno}}I.createPreloadedFile=Tn,I.staticInit(),Dr(),Wt=i.BindingError=class extends Error{constructor(m){super(m),this.name="BindingError"}},Xt=i.InternalError=class extends Error{constructor(m){super(m),this.name="InternalError"}},l(),tu=i.UnboundTypeError=ep(Error,"UnboundTypeError");var fm={M:Cr,N:Pr,h:Ir,I:hi,Q:bi,F:Rr,G:Oi,j:Lr,B:Nr,H:Ns,C:ui,A:Ds,w:Os,V:Re,U:D,n:j,f:rp,b:op,a:ap,m:lp,i:mp,W:gp,J:vp,x:xp,L:Mp,e:Sp,q:wp,T:r,u:Ep,p:Cp,k:Pp,Y:Ip,X:Rp,r:Lp,Z:Np,o:Dp,c:Op,d:Fp,t:Vp,s:Hp,O:Gp,K:Xp,R:qp,z:$p,y:Jp,D:Qp,E:tm,S:sm,g:om,P:lm,v:cm,l:um},an=T(),dm=()=>(dm=an.$)(),au=h=>(au=an.aa)(h),hc=h=>(hc=an.ca)(h),Ei=h=>(Ei=an.da)(h),lu=h=>(lu=an.ea)(h),cu=(h,m)=>(cu=an.fa)(h,m),hu=()=>(hu=an.ga)(),pm=i.dynCall_viijii=(h,m,x,w,L,G,Z)=>(pm=i.dynCall_viijii=an.ha)(h,m,x,w,L,G,Z),mm=i.dynCall_viiiiji=(h,m,x,w,L,G,Z,st)=>(mm=i.dynCall_viiiiji=an.ia)(h,m,x,w,L,G,Z,st),gm=i.dynCall_jiji=(h,m,x,w,L)=>(gm=i.dynCall_jiji=an.ja)(h,m,x,w,L),_m=i.dynCall_iiiiij=(h,m,x,w,L,G,Z)=>(_m=i.dynCall_iiiiij=an.ka)(h,m,x,w,L,G,Z),vm=i.dynCall_iiiiijj=(h,m,x,w,L,G,Z,st,xt)=>(vm=i.dynCall_iiiiijj=an.la)(h,m,x,w,L,G,Z,st,xt),ym=i.dynCall_iiiiiijj=(h,m,x,w,L,G,Z,st,xt,Nt)=>(ym=i.dynCall_iiiiiijj=an.ma)(h,m,x,w,L,G,Z,st,xt,Nt),Vo,uu;ue=function h(){Vo||fu(),Vo||(ue=h)};function fu(){if(re>0||!uu&&(uu=1,ae(),re>0))return;function h(){Vo||(Vo=1,i.calledRun=1,!C&&(le(),s(i),i.onRuntimeInitialized?.(),pe()))}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),h()},1)):h()}if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return fu(),e=c,e})})();typeof gu=="object"&&typeof dc=="object"?dc.exports=mu:typeof define=="function"&&define.amd&&define([],()=>mu)});var vu=du((xM,Ho)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof Ho<"u"&&Ho.exports?(Ho.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,i.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?s.safari=1:s.safari=0,i.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,i.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,i.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,i.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,i.indexOf("opera")!=-1?s.opera=1:s.opera=0,i.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,i.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,i.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,i.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,i.indexOf("msie ")!=-1?s.msie=1:s.msie=0,n.biginteger_used=null;var o,c=0xdeadbeefcafe,u=(c&16777215)==15715070;function f(r,a,l){n.biginteger_used=1,r!=null&&(typeof r=="number"&&typeof a>"u"?this.fromInt(r):typeof r=="number"?this.fromNumber(r,a,l):a==null&&typeof r!="string"?this.fromString(r,256):this.fromString(r,a))}function d(){return new f(null,void 0,void 0)}function _(r,a,l,p,v,A){for(;--A>=0;){var D=a*this[r++]+l[p]+v;v=Math.floor(D/67108864),l[p++]=D&67108863}return v}function y(r,a,l,p,v,A){for(var D=a&32767,$=a>>15;--A>=0;){var j=this[r]&32767,ut=this[r++]>>15,Et=$*j+ut*D;j=D*j+((Et&32767)<<15)+l[p]+(v&1073741823),v=(j>>>30)+(Et>>>15)+$*ut+(v>>>30),l[p++]=j&1073741823}return v}function g(r,a,l,p,v,A){for(var D=a&16383,$=a>>14;--A>=0;){var j=this[r]&16383,ut=this[r++]>>14,Et=$*j+ut*D;j=D*j+((Et&16383)<<14)+l[p]+v,v=(j>>28)+(Et>>14)+$*ut,l[p++]=j&268435455}return v}u&&e=="Microsoft Internet Explorer"?(f.prototype.am=y,o=30):u&&e!="Netscape"?(f.prototype.am=_,o=26):(f.prototype.am=g,o=28),f.prototype.DB=o,f.prototype.DM=(1<<o)-1,f.prototype.DV=1<<o;var b=52;f.prototype.FV=Math.pow(2,b),f.prototype.F1=b-o,f.prototype.F2=2*o-b;var E="0123456789abcdefghijklmnopqrstuvwxyz",P=new Array,S,M;for(S=48,M=0;M<=9;++M)P[S++]=M;for(S=97,M=10;M<36;++M)P[S++]=M;for(S=65,M=10;M<36;++M)P[S++]=M;function F(r){return E.charAt(r)}function X(r,a){var l=P[r.charCodeAt(a)];return l??-1}function R(r){for(var a=this.t-1;a>=0;--a)r[a]=this[a];r.t=this.t,r.s=this.s}function U(r){this.t=1,this.s=r<0?-1:0,r>0?this[0]=r:r<-1?this[0]=r+this.DV:this.t=0}function z(r){var a=d();return a.fromInt(r),a}function q(r,a){var l;if(a==16)l=4;else if(a==8)l=3;else if(a==256)l=8;else if(a==2)l=1;else if(a==32)l=5;else if(a==4)l=2;else{this.fromRadix(r,a);return}this.t=0,this.s=0;for(var p=r.length,v=!1,A=0;--p>=0;){var D=l==8?r[p]&255:X(r,p);if(D<0){r.charAt(p)=="-"&&(v=!0);continue}v=!1,A==0?this[this.t++]=D:A+l>this.DB?(this[this.t-1]|=(D&(1<<this.DB-A)-1)<<A,this[this.t++]=D>>this.DB-A):this[this.t-1]|=D<<A,A+=l,A>=this.DB&&(A-=this.DB)}l==8&&(r[0]&128)!=0&&(this.s=-1,A>0&&(this[this.t-1]|=(1<<this.DB-A)-1<<A)),this.clamp(),v&&f.ZERO.subTo(this,this)}function C(){for(var r=this.s&this.DM;this.t>0&&this[this.t-1]==r;)--this.t}function H(r){if(this.s<0)return"-"+this.negate().toString(r);var a;if(r==16)a=4;else if(r==8)a=3;else if(r==2)a=1;else if(r==32)a=5;else if(r==4)a=2;else return this.toRadix(r);var l=(1<<a)-1,p,v=!1,A="",D=this.t,$=this.DB-D*this.DB%a;if(D-- >0)for($<this.DB&&(p=this[D]>>$)>0&&(v=!0,A=F(p));D>=0;)$<a?(p=(this[D]&(1<<$)-1)<<a-$,p|=this[--D]>>($+=this.DB-a)):(p=this[D]>>($-=a)&l,$<=0&&($+=this.DB,--D)),p>0&&(v=!0),v&&(A+=F(p));return v?A:"0"}function Y(){var r=d();return f.ZERO.subTo(this,r),r}function nt(){return this.s<0?this.negate():this}function it(r){var a=this.s-r.s;if(a!=0)return a;var l=this.t;if(a=l-r.t,a!=0)return this.s<0?-a:a;for(;--l>=0;)if((a=this[l]-r[l])!=0)return a;return 0}function tt(r){var a=1,l;return(l=r>>>16)!=0&&(r=l,a+=16),(l=r>>8)!=0&&(r=l,a+=8),(l=r>>4)!=0&&(r=l,a+=4),(l=r>>2)!=0&&(r=l,a+=2),(l=r>>1)!=0&&(r=l,a+=1),a}function K(){return this.t<=0?0:this.DB*(this.t-1)+tt(this[this.t-1]^this.s&this.DM)}function B(r,a){var l;for(l=this.t-1;l>=0;--l)a[l+r]=this[l];for(l=r-1;l>=0;--l)a[l]=0;a.t=this.t+r,a.s=this.s}function et(r,a){for(var l=r;l<this.t;++l)a[l-r]=this[l];a.t=Math.max(this.t-r,0),a.s=this.s}function V(r,a){var l=r%this.DB,p=this.DB-l,v=(1<<p)-1,A=Math.floor(r/this.DB),D=this.s<<l&this.DM,$;for($=this.t-1;$>=0;--$)a[$+A+1]=this[$]>>p|D,D=(this[$]&v)<<l;for($=A-1;$>=0;--$)a[$]=0;a[A]=D,a.t=this.t+A+1,a.s=this.s,a.clamp()}function dt(r,a){a.s=this.s;var l=Math.floor(r/this.DB);if(l>=this.t){a.t=0;return}var p=r%this.DB,v=this.DB-p,A=(1<<p)-1;a[0]=this[l]>>p;for(var D=l+1;D<this.t;++D)a[D-l-1]|=(this[D]&A)<<v,a[D-l]=this[D]>>p;p>0&&(a[this.t-l-1]|=(this.s&A)<<v),a.t=this.t-l,a.clamp()}function ct(r,a){for(var l=0,p=0,v=Math.min(r.t,this.t);l<v;)p+=this[l]-r[l],a[l++]=p&this.DM,p>>=this.DB;if(r.t<this.t){for(p-=r.s;l<this.t;)p+=this[l],a[l++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;l<r.t;)p-=r[l],a[l++]=p&this.DM,p>>=this.DB;p-=r.s}a.s=p<0?-1:0,p<-1?a[l++]=this.DV+p:p>0&&(a[l++]=p),a.t=l,a.clamp()}function _t(r,a){var l=this.abs(),p=r.abs(),v=l.t;for(a.t=v+p.t;--v>=0;)a[v]=0;for(v=0;v<p.t;++v)a[v+l.t]=l.am(0,p[v],a,v,0,l.t);a.s=0,a.clamp(),this.s!=r.s&&f.ZERO.subTo(a,a)}function Mt(r){for(var a=this.abs(),l=r.t=2*a.t;--l>=0;)r[l]=0;for(l=0;l<a.t-1;++l){var p=a.am(l,a[l],r,2*l,0,1);(r[l+a.t]+=a.am(l+1,2*a[l],r,2*l+1,p,a.t-l-1))>=a.DV&&(r[l+a.t]-=a.DV,r[l+a.t+1]=1)}r.t>0&&(r[r.t-1]+=a.am(l,a[l],r,2*l,0,1)),r.s=0,r.clamp()}function Pt(r,a,l){var p=r.abs();if(!(p.t<=0)){var v=this.abs();if(v.t<p.t){a?.fromInt(0),l!=null&&this.copyTo(l);return}l==null&&(l=d());var A=d(),D=this.s,$=r.s,j=this.DB-tt(p[p.t-1]);j>0?(p.lShiftTo(j,A),v.lShiftTo(j,l)):(p.copyTo(A),v.copyTo(l));var ut=A.t,Et=A[ut-1];if(Et!=0){var wt=Et*(1<<this.F1)+(ut>1?A[ut-2]>>this.F2:0),Rt=this.FV/wt,ne=(1<<this.F1)/wt,ge=1<<this.F2,be=l.t,Be=be-ut,pn=a??d();for(A.dlShiftTo(Be,pn),l.compareTo(pn)>=0&&(l[l.t++]=1,l.subTo(pn,l)),f.ONE.dlShiftTo(ut,pn),pn.subTo(A,A);A.t<ut;)A[A.t++]=0;for(;--Be>=0;){var Hn=l[--be]==Et?this.DM:Math.floor(l[be]*Rt+(l[be-1]+ge)*ne);if((l[be]+=A.am(0,Hn,l,Be,0,ut))<Hn)for(A.dlShiftTo(Be,pn),l.subTo(pn,l);l[be]<--Hn;)l.subTo(pn,l)}a!=null&&(l.drShiftTo(ut,a),D!=$&&f.ZERO.subTo(a,a)),l.t=ut,l.clamp(),j>0&&l.rShiftTo(j,l),D<0&&f.ZERO.subTo(l,l)}}}function Ut(r){var a=d();return this.abs().divRemTo(r,null,a),this.s<0&&a.compareTo(f.ZERO)>0&&r.subTo(a,a),a}function ae(r){this.m=r}function le(r){return r.s<0||r.compareTo(this.m)>=0?r.mod(this.m):r}function pe(r){return r}function yt(r){r.divRemTo(this.m,null,r)}function Tt(r,a,l){r.multiplyTo(a,l),this.reduce(l)}function Gt(r,a){r.squareTo(a),this.reduce(a)}ae.prototype.convert=le,ae.prototype.revert=pe,ae.prototype.reduce=yt,ae.prototype.mulTo=Tt,ae.prototype.sqrTo=Gt;function re(){if(this.t<1)return 0;var r=this[0];if((r&1)==0)return 0;var a=r&3;return a=a*(2-(r&15)*a)&15,a=a*(2-(r&255)*a)&255,a=a*(2-((r&65535)*a&65535))&65535,a=a*(2-r*a%this.DV)%this.DV,a>0?this.DV-a:-a}function Vt(r){this.m=r,this.mp=r.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<r.DB-15)-1,this.mt2=2*r.t}function ue(r){var a=d();return r.abs().dlShiftTo(this.m.t,a),a.divRemTo(this.m,null,a),r.s<0&&a.compareTo(f.ZERO)>0&&this.m.subTo(a,a),a}function Oe(r){var a=d();return r.copyTo(a),this.reduce(a),a}function xe(r){for(;r.t<=this.mt2;)r[r.t++]=0;for(var a=0;a<this.m.t;++a){var l=r[a]&32767,p=l*this.mpl+((l*this.mph+(r[a]>>15)*this.mpl&this.um)<<15)&r.DM;for(l=a+this.m.t,r[l]+=this.m.am(0,p,r,a,0,this.m.t);r[l]>=r.DV;)r[l]-=r.DV,r[++l]++}r.clamp(),r.drShiftTo(this.m.t,r),r.compareTo(this.m)>=0&&r.subTo(this.m,r)}function Ee(r,a){r.squareTo(a),this.reduce(a)}function ye(r,a,l){r.multiplyTo(a,l),this.reduce(l)}Vt.prototype.convert=ue,Vt.prototype.revert=Oe,Vt.prototype.reduce=xe,Vt.prototype.mulTo=ye,Vt.prototype.sqrTo=Ee;function Me(){return(this.t>0?this[0]&1:this.s)==0}function Ne(r,a){if(r>4294967295||r<1)return f.ONE;var l=d(),p=d(),v=a.convert(this),A=tt(r)-1;for(v.copyTo(l);--A>=0;)if(a.sqrTo(l,p),(r&1<<A)>0)a.mulTo(p,v,l);else{var D=l;l=p,p=D}return a.revert(l)}function He(r,a){var l;return r<256||a.isEven()?l=new ae(a):l=new Vt(a),this.exp(r,l)}f.prototype.copyTo=R,f.prototype.fromInt=U,f.prototype.fromString=q,f.prototype.clamp=C,f.prototype.dlShiftTo=B,f.prototype.drShiftTo=et,f.prototype.lShiftTo=V,f.prototype.rShiftTo=dt,f.prototype.subTo=ct,f.prototype.multiplyTo=_t,f.prototype.squareTo=Mt,f.prototype.divRemTo=Pt,f.prototype.invDigit=re,f.prototype.isEven=Me,f.prototype.exp=Ne,f.prototype.toString=H,f.prototype.negate=Y,f.prototype.abs=nt,f.prototype.compareTo=it,f.prototype.bitLength=K,f.prototype.mod=Ut,f.prototype.modPowInt=He,f.ZERO=z(0),f.ONE=z(1);function Qe(){var r=d();return this.copyTo(r),r}function Le(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function J(){return this.t==0?this.s:this[0]<<24>>24}function k(){return this.t==0?this.s:this[0]<<16>>16}function ht(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function mt(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function O(r){if(r==null&&(r=10),this.signum()==0||r<2||r>36)return"0";var a=this.chunkSize(r),l=Math.pow(r,a),p=z(l),v=d(),A=d(),D="";for(this.divRemTo(p,v,A);v.signum()>0;)D=(l+A.intValue()).toString(r).substr(1)+D,v.divRemTo(p,v,A);return A.intValue().toString(r)+D}function T(r,a){this.fromInt(0),a==null&&(a=10);for(var l=this.chunkSize(a),p=Math.pow(a,l),v=!1,A=0,D=0,$=0;$<r.length;++$){var j=X(r,$);if(j<0){r.charAt($)=="-"&&this.signum()==0&&(v=!0);continue}D=a*D+j,++A>=l&&(this.dMultiply(p),this.dAddOffset(D,0),A=0,D=0)}A>0&&(this.dMultiply(Math.pow(a,A)),this.dAddOffset(D,0)),v&&f.ZERO.subTo(this,this)}function W(r,a,l){if(typeof a=="number")if(r<2)this.fromInt(1);else for(this.fromNumber(r,l),this.testBit(r-1)||this.bitwiseTo(f.ONE.shiftLeft(r-1),Jt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(a);)this.dAddOffset(2,0),this.bitLength()>r&&this.subTo(f.ONE.shiftLeft(r-1),this);else{var p=new Array,v=r&7;p.length=(r>>3)+1,a.nextBytes(p),v>0?p[0]&=(1<<v)-1:p[0]=0,this.fromString(p,256)}}function ot(){var r=this.t,a=new Array;a[0]=this.s;var l=this.DB-r*this.DB%8,p,v=0;if(r-- >0)for(l<this.DB&&(p=this[r]>>l)!=(this.s&this.DM)>>l&&(a[v++]=p|this.s<<this.DB-l);r>=0;)l<8?(p=(this[r]&(1<<l)-1)<<8-l,p|=this[--r]>>(l+=this.DB-8)):(p=this[r]>>(l-=8)&255,l<=0&&(l+=this.DB,--r)),(p&128)!=0&&(p|=-256),v==0&&(this.s&128)!=(p&128)&&++v,(v>0||p!=this.s)&&(a[v++]=p);return a}function Q(r){return this.compareTo(r)==0}function At(r){return this.compareTo(r)<0?this:r}function Ct(r){return this.compareTo(r)>0?this:r}function ft(r,a,l){var p,v,A=Math.min(r.t,this.t);for(p=0;p<A;++p)l[p]=a(this[p],r[p]);if(r.t<this.t){for(v=r.s&this.DM,p=A;p<this.t;++p)l[p]=a(this[p],v);l.t=this.t}else{for(v=this.s&this.DM,p=A;p<r.t;++p)l[p]=a(v,r[p]);l.t=r.t}l.s=a(this.s,r.s),l.clamp()}function bt(r,a){return r&a}function Ot(r){var a=d();return this.bitwiseTo(r,bt,a),a}function Jt(r,a){return r|a}function Ht(r){var a=d();return this.bitwiseTo(r,Jt,a),a}function Ft(r,a){return r^a}function te(r){var a=d();return this.bitwiseTo(r,Ft,a),a}function se(r,a){return r&~a}function me(r){var a=d();return this.bitwiseTo(r,se,a),a}function at(){for(var r=d(),a=0;a<this.t;++a)r[a]=this.DM&~this[a];return r.t=this.t,r.s=~this.s,r}function Bt(r){var a=d();return r<0?this.rShiftTo(-r,a):this.lShiftTo(r,a),a}function St(r){var a=d();return r<0?this.lShiftTo(-r,a):this.rShiftTo(r,a),a}function kt(r){if(r==0)return-1;var a=0;return(r&65535)==0&&(r>>=16,a+=16),(r&255)==0&&(r>>=8,a+=8),(r&15)==0&&(r>>=4,a+=4),(r&3)==0&&(r>>=2,a+=2),(r&1)==0&&++a,a}function Yt(){for(var r=0;r<this.t;++r)if(this[r]!=0)return r*this.DB+kt(this[r]);return this.s<0?this.t*this.DB:-1}function It(r){for(var a=0;r!=0;)r&=r-1,++a;return a}function Lt(){for(var r=0,a=this.s&this.DM,l=0;l<this.t;++l)r+=It(this[l]^a);return r}function Qt(r){var a=Math.floor(r/this.DB);return a>=this.t?this.s!=0:(this[a]&1<<r%this.DB)!=0}function Fe(r,a){var l=f.ONE.shiftLeft(r);return this.bitwiseTo(l,a,l),l}function Ie(r){return this.changeBit(r,Jt)}function Mn(r){return this.changeBit(r,se)}function Tn(r){return this.changeBit(r,Ft)}function Ls(r,a){for(var l=0,p=0,v=Math.min(r.t,this.t);l<v;)p+=this[l]+r[l],a[l++]=p&this.DM,p>>=this.DB;if(r.t<this.t){for(p+=r.s;l<this.t;)p+=this[l],a[l++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;l<r.t;)p+=r[l],a[l++]=p&this.DM,p>>=this.DB;p+=r.s}a.s=p<0?-1:0,p>0?a[l++]=p:p<-1&&(a[l++]=this.DV+p),a.t=l,a.clamp()}function lr(r){var a=d();return this.addTo(r,a),a}function I(r){var a=d();return this.subTo(r,a),a}function Si(r){var a=d();return this.multiplyTo(r,a),a}function Pe(){var r=d();return this.squareTo(r),r}function Cr(r){var a=d();return this.divRemTo(r,a,null),a}function Pr(r){var a=d();return this.divRemTo(r,null,a),a}function An(r){var a=d(),l=d();return this.divRemTo(r,a,l),new Array(a,l)}function Vn(r){this[this.t]=this.am(0,r-1,this,0,0,this.t),++this.t,this.clamp()}function Ir(r,a){if(r!=0){for(;this.t<=a;)this[this.t++]=0;for(this[a]+=r;this[a]>=this.DV;)this[a]-=this.DV,++a>=this.t&&(this[this.t++]=0),++this[a]}}function hi(){}function bi(r){return r}function Rr(r,a,l){r.multiplyTo(a,l)}function Oi(r,a){r.squareTo(a)}hi.prototype.convert=bi,hi.prototype.revert=bi,hi.prototype.mulTo=Rr,hi.prototype.sqrTo=Oi;function Lr(r){return this.exp(r,new hi)}function Nr(r,a,l){var p=Math.min(this.t+r.t,a);for(l.s=0,l.t=p;p>0;)l[--p]=0;var v;for(v=l.t-this.t;p<v;++p)l[p+this.t]=this.am(0,r[p],l,p,0,this.t);for(v=Math.min(r.t,a);p<v;++p)this.am(0,r[p],l,p,0,a-p);l.clamp()}function Ns(r,a,l){--a;var p=l.t=this.t+r.t-a;for(l.s=0;--p>=0;)l[p]=0;for(p=Math.max(a-this.t,0);p<r.t;++p)l[this.t+p-a]=this.am(a-p,r[p],l,0,0,this.t+p-a);l.clamp(),l.drShiftTo(1,l)}function ui(r){this.r2=d(),this.q3=d(),f.ONE.dlShiftTo(2*r.t,this.r2),this.mu=this.r2.divide(r),this.m=r}function Ds(r){if(r.s<0||r.t>2*this.m.t)return r.mod(this.m);if(r.compareTo(this.m)<0)return r;var a=d();return r.copyTo(a),this.reduce(a),a}function Os(r){return r}function Dr(r){for(r.drShiftTo(this.m.t-1,this.r2),r.t>this.m.t+1&&(r.t=this.m.t+1,r.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);r.compareTo(this.r2)<0;)r.dAddOffset(1,this.m.t+1);for(r.subTo(this.r2,r);r.compareTo(this.m)>=0;)r.subTo(this.m,r)}function N(r,a){r.squareTo(a),this.reduce(a)}function rt(r,a,l){r.multiplyTo(a,l),this.reduce(l)}ui.prototype.convert=Ds,ui.prototype.revert=Os,ui.prototype.reduce=Dr,ui.prototype.mulTo=rt,ui.prototype.sqrTo=N;function vt(r,a){var l=r.bitLength(),p,v=z(1),A;if(l<=0)return v;l<18?p=1:l<48?p=3:l<144?p=4:l<768?p=5:p=6,l<8?A=new ae(a):a.isEven()?A=new ui(a):A=new Vt(a);var D=new Array,$=3,j=p-1,ut=(1<<p)-1;if(D[1]=A.convert(this),p>1){var Et=d();for(A.sqrTo(D[1],Et);$<=ut;)D[$]=d(),A.mulTo(Et,D[$-2],D[$]),$+=2}var wt=r.t-1,Rt,ne=!0,ge=d(),be;for(l=tt(r[wt])-1;wt>=0;){for(l>=j?Rt=r[wt]>>l-j&ut:(Rt=(r[wt]&(1<<l+1)-1)<<j-l,wt>0&&(Rt|=r[wt-1]>>this.DB+l-j)),$=p;(Rt&1)==0;)Rt>>=1,--$;if((l-=$)<0&&(l+=this.DB,--wt),ne)D[Rt].copyTo(v),ne=!1;else{for(;$>1;)A.sqrTo(v,ge),A.sqrTo(ge,v),$-=2;$>0?A.sqrTo(v,ge):(be=v,v=ge,ge=be),A.mulTo(ge,D[Rt],v)}for(;wt>=0&&(r[wt]&1<<l)==0;)A.sqrTo(v,ge),be=v,v=ge,ge=be,--l<0&&(l=this.DB-1,--wt)}return A.revert(v)}function pt(r){var a=this.s<0?this.negate():this.clone(),l=r.s<0?r.negate():r.clone();if(a.compareTo(l)<0){var p=a;a=l,l=p}var v=a.getLowestSetBit(),A=l.getLowestSetBit();if(A<0)return a;for(v<A&&(A=v),A>0&&(a.rShiftTo(A,a),l.rShiftTo(A,l));a.signum()>0;)(v=a.getLowestSetBit())>0&&a.rShiftTo(v,a),(v=l.getLowestSetBit())>0&&l.rShiftTo(v,l),a.compareTo(l)>=0?(a.subTo(l,a),a.rShiftTo(1,a)):(l.subTo(a,l),l.rShiftTo(1,l));return A>0&&l.lShiftTo(A,l),l}function gt(r){if(r<=0)return 0;var a=this.DV%r,l=this.s<0?r-1:0;if(this.t>0)if(a==0)l=this[0]%r;else for(var p=this.t-1;p>=0;--p)l=(a*l+this[p])%r;return l}function Wt(r){var a=r.isEven();if(this.isEven()&&a||r.signum()==0)return f.ZERO;for(var l=r.clone(),p=this.clone(),v=z(1),A=z(0),D=z(0),$=z(1);l.signum()!=0;){for(;l.isEven();)l.rShiftTo(1,l),a?((!v.isEven()||!A.isEven())&&(v.addTo(this,v),A.subTo(r,A)),v.rShiftTo(1,v)):A.isEven()||A.subTo(r,A),A.rShiftTo(1,A);for(;p.isEven();)p.rShiftTo(1,p),a?((!D.isEven()||!$.isEven())&&(D.addTo(this,D),$.subTo(r,$)),D.rShiftTo(1,D)):$.isEven()||$.subTo(r,$),$.rShiftTo(1,$);l.compareTo(p)>=0?(l.subTo(p,l),a&&v.subTo(D,v),A.subTo($,A)):(p.subTo(l,p),a&&D.subTo(v,D),$.subTo(A,$))}if(p.compareTo(f.ONE)!=0)return f.ZERO;if($.compareTo(r)>=0)return $.subtract(r);if($.signum()<0)$.addTo(r,$);else return $;return $.signum()<0?$.add(r):$}var Dt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Xt=(1<<26)/Dt[Dt.length-1];function jt(r){var a,l=this.abs();if(l.t==1&&l[0]<=Dt[Dt.length-1]){for(a=0;a<Dt.length;++a)if(l[0]==Dt[a])return!0;return!1}if(l.isEven())return!1;for(a=1;a<Dt.length;){for(var p=Dt[a],v=a+1;v<Dt.length&&p<Xt;)p*=Dt[v++];for(p=l.modInt(p);a<v;)if(p%Dt[a++]==0)return!1}return l.millerRabin(r)}function ee(r){var a=this.subtract(f.ONE),l=a.getLowestSetBit();if(l<=0)return!1;var p=a.shiftRight(l);r=r+1>>1,r>Dt.length&&(r=Dt.length);for(var v=d(),A=0;A<r;++A){v.fromInt(Dt[Math.floor(Math.random()*Dt.length)]);var D=v.modPow(p,this);if(D.compareTo(f.ONE)!=0&&D.compareTo(a)!=0){for(var $=1;$++<l&&D.compareTo(a)!=0;)if(D=D.modPowInt(2,this),D.compareTo(f.ONE)==0)return!1;if(D.compareTo(a)!=0)return!1}}return!0}f.prototype.chunkSize=ht,f.prototype.toRadix=O,f.prototype.fromRadix=T,f.prototype.fromNumber=W,f.prototype.bitwiseTo=ft,f.prototype.changeBit=Fe,f.prototype.addTo=Ls,f.prototype.dMultiply=Vn,f.prototype.dAddOffset=Ir,f.prototype.multiplyLowerTo=Nr,f.prototype.multiplyUpperTo=Ns,f.prototype.modInt=gt,f.prototype.millerRabin=ee,f.prototype.clone=Qe,f.prototype.intValue=Le,f.prototype.byteValue=J,f.prototype.shortValue=k,f.prototype.signum=mt,f.prototype.toByteArray=ot,f.prototype.equals=Q,f.prototype.min=At,f.prototype.max=Ct,f.prototype.and=Ot,f.prototype.or=Ht,f.prototype.xor=te,f.prototype.andNot=me,f.prototype.not=at,f.prototype.shiftLeft=Bt,f.prototype.shiftRight=St,f.prototype.getLowestSetBit=Yt,f.prototype.bitCount=Lt,f.prototype.testBit=Qt,f.prototype.setBit=Ie,f.prototype.clearBit=Mn,f.prototype.flipBit=Tn,f.prototype.add=lr,f.prototype.subtract=I,f.prototype.multiply=Si,f.prototype.divide=Cr,f.prototype.remainder=Pr,f.prototype.divideAndRemainder=An,f.prototype.modPow=vt,f.prototype.modInverse=Wt,f.prototype.pow=Lr,f.prototype.gcd=pt,f.prototype.isProbablePrime=jt,f.prototype.square=Pe;var zt=f;zt.prototype.IsNegative=function(){return this.compareTo(zt.ZERO)==-1},zt.op_Equality=function(r,a){return r.compareTo(a)==0},zt.op_Inequality=function(r,a){return r.compareTo(a)!=0},zt.op_GreaterThan=function(r,a){return r.compareTo(a)>0},zt.op_LessThan=function(r,a){return r.compareTo(a)<0},zt.op_Addition=function(r,a){return new zt(r,void 0,void 0).add(new zt(a,void 0,void 0))},zt.op_Subtraction=function(r,a){return new zt(r,void 0,void 0).subtract(new zt(a,void 0,void 0))},zt.Int128Mul=function(r,a){return new zt(r,void 0,void 0).multiply(new zt(a,void 0,void 0))},zt.op_Division=function(r,a){return r.divide(a)},zt.prototype.ToDouble=function(){return parseFloat(this.toString())};var fe=function(r,a){var l;if(typeof Object.getOwnPropertyNames>"u"){for(l in a.prototype)(typeof r.prototype[l]>"u"||r.prototype[l]===Object.prototype[l])&&(r.prototype[l]=a.prototype[l]);for(l in a)typeof r[l]>"u"&&(r[l]=a[l]);r.$baseCtor=a}else{for(var p=Object.getOwnPropertyNames(a.prototype),v=0;v<p.length;v++)typeof Object.getOwnPropertyDescriptor(r.prototype,p[v])>"u"&&Object.defineProperty(r.prototype,p[v],Object.getOwnPropertyDescriptor(a.prototype,p[v]));for(l in a)typeof r[l]>"u"&&(r[l]=a[l]);r.$baseCtor=a}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var r=arguments;this.X=0,this.Y=0,r.length===1?(this.X=r[0].X,this.Y=r[0].Y):r.length===2&&(this.X=r[0],this.Y=r[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(r){this.X=r.X,this.Y=r.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(r,a){this.X=r,this.Y=a},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var r=!0,a=this.m_Parent;a!==null;)r=!r,a=a.m_Parent;return r},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(r){var a=this.m_Childs.length;this.m_Childs.push(r),r.m_Parent=this,r.m_Index=a},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var r=0,a=this.m_AllPolys.length;r<a;r++)this.m_AllPolys[r]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var r=this.m_AllPolys.length;return r>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&r--,r},fe(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(r){return Math.abs(r)},n.Math_Max_Int32_Int32=function(r,a){return Math.max(r,a)},s.msie||s.opera||s.safari?n.Cast_Int32=function(r){return r|0}:n.Cast_Int32=function(r){return~~r},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):~~r}:s.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(r){return Number.toInteger(r)}:s.msie7||s.msie8?n.Cast_Int64=function(r){return parseInt(r,10)}:s.msie?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):r|0}:n.Cast_Int64=function(r){return r<0?Math.ceil(r):Math.floor(r)},n.Clear=function(r){r.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var r=arguments,a=r.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,a===3)this.X=r[0],this.Y=r[1],this.Z=r[2];else if(a===2)this.X=r[0],this.Y=r[1],this.Z=0;else if(a===1)if(r[0]instanceof n.DoublePoint){var l=r[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y),this.Z=0}else{var p=r[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(a===2)this.X=r[0],this.Y=r[1];else if(a===1)if(r[0]instanceof n.DoublePoint){var l=r[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y)}else{var p=r[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(r,a){return r.X===a.X&&r.Y===a.Y},n.IntPoint.op_Inequality=function(r,a){return r.X!==a.X||r.Y!==a.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(r){this.X=r.X,this.Y=r.Y,n.use_xyz&&(typeof r.Z>"u"?this.Z=0:this.Z=r.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(r){this.X=n.Clipper.Round(r.X),this.Y=n.Clipper.Round(r.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(r,a,l){this.X=r,this.Y=a,n.use_xyz&&(typeof l>"u"?this.Z=0:this.Z=l)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var r=arguments,a=r.length;if(a===4)this.left=r[0],this.top=r[1],this.right=r[2],this.bottom=r[3];else if(a===1){var l=r[0];this.left=l.left,this.top=l.top,this.right=l.right,this.bottom=l.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(r){this.left=r.left,this.top=r.top,this.right=r.right,this.bottom=r.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(r,a,l,p){this.left=r,this.top=a,this.right=l,this.bottom=p},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(r,a){var l=a.Pt.Y-r.Pt.Y;return l>0?1:l<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(r){return r>-n.ClipperBase.tolerance&&r<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(r){return r.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(r,a){var l=a;do{if(n.IntPoint.op_Equality(l.Pt,r))return!0;l=l.Next}while(l!==a);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(r,a,l,p){return p?r.X===a.X&&r.Y===a.Y||r.X===l.X&&r.Y===l.Y||r.X>a.X==r.X<l.X&&r.Y>a.Y==r.Y<l.Y&&zt.op_Equality(zt.Int128Mul(r.X-a.X,l.Y-a.Y),zt.Int128Mul(l.X-a.X,r.Y-a.Y)):r.X===a.X&&r.Y===a.Y||r.X===l.X&&r.Y===l.Y||r.X>a.X==r.X<l.X&&r.Y>a.Y==r.Y<l.Y&&(r.X-a.X)*(l.Y-a.Y)===(l.X-a.X)*(r.Y-a.Y)},n.ClipperBase.prototype.PointOnPolygon=function(r,a,l){for(var p=a;;){if(this.PointOnLineSegment(r,p.Pt,p.Next.Pt,l))return!0;if(p=p.Next,p===a)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var r=arguments,a=r.length,l,p,v,A,D,$,j;return a===3?(l=r[0],p=r[1],j=r[2],j?zt.op_Equality(zt.Int128Mul(l.Delta.Y,p.Delta.X),zt.Int128Mul(l.Delta.X,p.Delta.Y)):n.Cast_Int64(l.Delta.Y*p.Delta.X)===n.Cast_Int64(l.Delta.X*p.Delta.Y)):a===4?(v=r[0],A=r[1],D=r[2],j=r[3],j?zt.op_Equality(zt.Int128Mul(v.Y-A.Y,A.X-D.X),zt.Int128Mul(v.X-A.X,A.Y-D.Y)):n.Cast_Int64((v.Y-A.Y)*(A.X-D.X))-n.Cast_Int64((v.X-A.X)*(A.Y-D.Y))===0):(v=r[0],A=r[1],D=r[2],$=r[3],j=r[4],j?zt.op_Equality(zt.Int128Mul(v.Y-A.Y,D.X-$.X),zt.Int128Mul(v.X-A.X,D.Y-$.Y)):n.Cast_Int64((v.Y-A.Y)*(D.X-$.X))-n.Cast_Int64((v.X-A.X)*(D.Y-$.Y))===0)},n.ClipperBase.SlopesEqual3=function(r,a,l){return l?zt.op_Equality(zt.Int128Mul(r.Delta.Y,a.Delta.X),zt.Int128Mul(r.Delta.X,a.Delta.Y)):n.Cast_Int64(r.Delta.Y*a.Delta.X)===n.Cast_Int64(r.Delta.X*a.Delta.Y)},n.ClipperBase.SlopesEqual4=function(r,a,l,p){return p?zt.op_Equality(zt.Int128Mul(r.Y-a.Y,a.X-l.X),zt.Int128Mul(r.X-a.X,a.Y-l.Y)):n.Cast_Int64((r.Y-a.Y)*(a.X-l.X))-n.Cast_Int64((r.X-a.X)*(a.Y-l.Y))===0},n.ClipperBase.SlopesEqual5=function(r,a,l,p,v){return v?zt.op_Equality(zt.Int128Mul(r.Y-a.Y,l.X-p.X),zt.Int128Mul(r.X-a.X,l.Y-p.Y)):n.Cast_Int64((r.Y-a.Y)*(l.X-p.X))-n.Cast_Int64((r.X-a.X)*(l.Y-p.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var r=0,a=this.m_edges.length;r<a;++r){for(var l=0,p=this.m_edges[r].length;l<p;++l)this.m_edges[r][l]=null;n.Clear(this.m_edges[r])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var r=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=r}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(r,a){a.Value?(r.X>n.ClipperBase.hiRange||r.Y>n.ClipperBase.hiRange||-r.X>n.ClipperBase.hiRange||-r.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(r.X>n.ClipperBase.loRange||r.Y>n.ClipperBase.loRange||-r.X>n.ClipperBase.loRange||-r.Y>n.ClipperBase.loRange)&&(a.Value=!0,this.RangeTest(r,a))},n.ClipperBase.prototype.InitEdge=function(r,a,l,p){r.Next=a,r.Prev=l,r.Curr.X=p.X,r.Curr.Y=p.Y,n.use_xyz&&(r.Curr.Z=p.Z),r.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(r,a){r.Curr.Y>=r.Next.Curr.Y?(r.Bot.X=r.Curr.X,r.Bot.Y=r.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Curr.Z),r.Top.X=r.Next.Curr.X,r.Top.Y=r.Next.Curr.Y,n.use_xyz&&(r.Top.Z=r.Next.Curr.Z)):(r.Top.X=r.Curr.X,r.Top.Y=r.Curr.Y,n.use_xyz&&(r.Top.Z=r.Curr.Z),r.Bot.X=r.Next.Curr.X,r.Bot.Y=r.Next.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Next.Curr.Z)),this.SetDx(r),r.PolyTyp=a},n.ClipperBase.prototype.FindNextLocMin=function(r){for(var a;;){for(;n.IntPoint.op_Inequality(r.Bot,r.Prev.Bot)||n.IntPoint.op_Equality(r.Curr,r.Top);)r=r.Next;if(r.Dx!==n.ClipperBase.horizontal&&r.Prev.Dx!==n.ClipperBase.horizontal)break;for(;r.Prev.Dx===n.ClipperBase.horizontal;)r=r.Prev;for(a=r;r.Dx===n.ClipperBase.horizontal;)r=r.Next;if(r.Top.Y!==r.Prev.Bot.Y){a.Prev.Bot.X<r.Bot.X&&(r=a);break}}return r},n.ClipperBase.prototype.ProcessBound=function(r,a){var l,p=r,v;if(p.OutIdx===n.ClipperBase.Skip){if(r=p,a){for(;r.Top.Y===r.Next.Bot.Y;)r=r.Next;for(;r!==p&&r.Dx===n.ClipperBase.horizontal;)r=r.Prev}else{for(;r.Top.Y===r.Prev.Bot.Y;)r=r.Prev;for(;r!==p&&r.Dx===n.ClipperBase.horizontal;)r=r.Next}if(r===p)a?p=r.Next:p=r.Prev;else{a?r=p.Next:r=p.Prev;var A=new n.LocalMinima;A.Next=null,A.Y=r.Bot.Y,A.LeftBound=null,A.RightBound=r,r.WindDelta=0,p=this.ProcessBound(r,a),this.InsertLocalMinima(A)}return p}if(r.Dx===n.ClipperBase.horizontal&&(a?l=r.Prev:l=r.Next,l.Dx===n.ClipperBase.horizontal?l.Bot.X!==r.Bot.X&&l.Top.X!==r.Bot.X&&this.ReverseHorizontal(r):l.Bot.X!==r.Bot.X&&this.ReverseHorizontal(r)),l=r,a){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==n.ClipperBase.Skip;)p=p.Next;if(p.Dx===n.ClipperBase.horizontal&&p.Next.OutIdx!==n.ClipperBase.Skip){for(v=p;v.Prev.Dx===n.ClipperBase.horizontal;)v=v.Prev;v.Prev.Top.X>p.Next.Top.X&&(p=v.Prev)}for(;r!==p;)r.NextInLML=r.Next,r.Dx===n.ClipperBase.horizontal&&r!==l&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),r=r.Next;r.Dx===n.ClipperBase.horizontal&&r!==l&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==n.ClipperBase.Skip;)p=p.Prev;if(p.Dx===n.ClipperBase.horizontal&&p.Prev.OutIdx!==n.ClipperBase.Skip){for(v=p;v.Next.Dx===n.ClipperBase.horizontal;)v=v.Next;(v.Next.Top.X===p.Prev.Top.X||v.Next.Top.X>p.Prev.Top.X)&&(p=v.Next)}for(;r!==p;)r.NextInLML=r.Prev,r.Dx===n.ClipperBase.horizontal&&r!==l&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),r=r.Prev;r.Dx===n.ClipperBase.horizontal&&r!==l&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),p=p.Prev}return p},n.ClipperBase.prototype.AddPath=function(r,a,l){n.use_lines?!l&&a===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):l||n.Error("AddPath: Open paths have been disabled.");var p=r.length-1;if(l)for(;p>0&&n.IntPoint.op_Equality(r[p],r[0]);)--p;for(;p>0&&n.IntPoint.op_Equality(r[p],r[p-1]);)--p;if(l&&p<2||!l&&p<1)return!1;for(var v=new Array,A=0;A<=p;A++)v.push(new n.TEdge);var D=!0;v[1].Curr.X=r[1].X,v[1].Curr.Y=r[1].Y,n.use_xyz&&(v[1].Curr.Z=r[1].Z);var $={Value:this.m_UseFullRange};this.RangeTest(r[0],$),this.m_UseFullRange=$.Value,$.Value=this.m_UseFullRange,this.RangeTest(r[p],$),this.m_UseFullRange=$.Value,this.InitEdge(v[0],v[1],v[p],r[0]),this.InitEdge(v[p],v[0],v[p-1],r[p]);for(var A=p-1;A>=1;--A)$.Value=this.m_UseFullRange,this.RangeTest(r[A],$),this.m_UseFullRange=$.Value,this.InitEdge(v[A],v[A+1],v[A-1],r[A]);for(var j=v[0],ut=j,Et=j;;){if(ut.Curr===ut.Next.Curr&&(l||ut.Next!==j)){if(ut===ut.Next)break;ut===j&&(j=ut.Next),ut=this.RemoveEdge(ut),Et=ut;continue}if(ut.Prev===ut.Next)break;if(l&&n.ClipperBase.SlopesEqual4(ut.Prev.Curr,ut.Curr,ut.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(ut.Prev.Curr,ut.Curr,ut.Next.Curr))){ut===j&&(j=ut.Next),ut=this.RemoveEdge(ut),ut=ut.Prev,Et=ut;continue}if(ut=ut.Next,ut===Et||!l&&ut.Next===j)break}if(!l&&ut===ut.Next||l&&ut.Prev===ut.Next)return!1;l||(this.m_HasOpenPaths=!0,j.Prev.OutIdx=n.ClipperBase.Skip),ut=j;do this.InitEdge2(ut,a),ut=ut.Next,D&&ut.Curr.Y!==j.Curr.Y&&(D=!1);while(ut!==j);if(D){if(l)return!1;ut.Prev.OutIdx=n.ClipperBase.Skip;var wt=new n.LocalMinima;for(wt.Next=null,wt.Y=ut.Bot.Y,wt.LeftBound=null,wt.RightBound=ut,wt.RightBound.Side=n.EdgeSide.esRight,wt.RightBound.WindDelta=0;ut.Bot.X!==ut.Prev.Top.X&&this.ReverseHorizontal(ut),ut.Next.OutIdx!==n.ClipperBase.Skip;)ut.NextInLML=ut.Next,ut=ut.Next;return this.InsertLocalMinima(wt),this.m_edges.push(v),!0}this.m_edges.push(v);var Rt,ne=null;for(n.IntPoint.op_Equality(ut.Prev.Bot,ut.Prev.Top)&&(ut=ut.Next);ut=this.FindNextLocMin(ut),ut!==ne;){ne===null&&(ne=ut);var wt=new n.LocalMinima;wt.Next=null,wt.Y=ut.Bot.Y,ut.Dx<ut.Prev.Dx?(wt.LeftBound=ut.Prev,wt.RightBound=ut,Rt=!1):(wt.LeftBound=ut,wt.RightBound=ut.Prev,Rt=!0),wt.LeftBound.Side=n.EdgeSide.esLeft,wt.RightBound.Side=n.EdgeSide.esRight,l?wt.LeftBound.Next===wt.RightBound?wt.LeftBound.WindDelta=-1:wt.LeftBound.WindDelta=1:wt.LeftBound.WindDelta=0,wt.RightBound.WindDelta=-wt.LeftBound.WindDelta,ut=this.ProcessBound(wt.LeftBound,Rt),ut.OutIdx===n.ClipperBase.Skip&&(ut=this.ProcessBound(ut,Rt));var ge=this.ProcessBound(wt.RightBound,!Rt);ge.OutIdx===n.ClipperBase.Skip&&(ge=this.ProcessBound(ge,!Rt)),wt.LeftBound.OutIdx===n.ClipperBase.Skip?wt.LeftBound=null:wt.RightBound.OutIdx===n.ClipperBase.Skip&&(wt.RightBound=null),this.InsertLocalMinima(wt),Rt||(ut=ge)}return!0},n.ClipperBase.prototype.AddPaths=function(r,a,l){for(var p=!1,v=0,A=r.length;v<A;++v)this.AddPath(r[v],a,l)&&(p=!0);return p},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(r,a,l){return n.IntPoint.op_Equality(r,l)||n.IntPoint.op_Equality(r,a)||n.IntPoint.op_Equality(l,a)?!1:r.X!==l.X?a.X>r.X==a.X<l.X:a.Y>r.Y==a.Y<l.Y},n.ClipperBase.prototype.RemoveEdge=function(r){r.Prev.Next=r.Next,r.Next.Prev=r.Prev;var a=r.Next;return r.Prev=null,a},n.ClipperBase.prototype.SetDx=function(r){r.Delta.X=r.Top.X-r.Bot.X,r.Delta.Y=r.Top.Y-r.Bot.Y,r.Delta.Y===0?r.Dx=n.ClipperBase.horizontal:r.Dx=r.Delta.X/r.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(r){if(this.m_MinimaList===null)this.m_MinimaList=r;else if(r.Y>=this.m_MinimaList.Y)r.Next=this.m_MinimaList,this.m_MinimaList=r;else{for(var a=this.m_MinimaList;a.Next!==null&&r.Y<a.Next.Y;)a=a.Next;r.Next=a.Next,a.Next=r}},n.ClipperBase.prototype.PopLocalMinima=function(r,a){return a.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===r?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(r){var a=r.Top.X;r.Top.X=r.Bot.X,r.Bot.X=a,n.use_xyz&&(a=r.Top.Z,r.Top.Z=r.Bot.Z,r.Bot.Z=a)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var r=this.m_MinimaList;r!==null;){this.InsertScanbeam(r.Y);var a=r.LeftBound;a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),a=r.RightBound,a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),r=r.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(r){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=r;else if(r>this.m_Scanbeam.Y){var a=new n.Scanbeam;a.Y=r,a.Next=this.m_Scanbeam,this.m_Scanbeam=a}else{for(var l=this.m_Scanbeam;l.Next!==null&&r<=l.Next.Y;)l=l.Next;if(r===l.Y)return;var p=new n.Scanbeam;p.Y=r,p.Next=l.Next,l.Next=p}},n.ClipperBase.prototype.PopScanbeam=function(r){return this.m_Scanbeam===null?(r.v=0,!1):(r.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var r=new n.OutRec;return r.Idx=n.ClipperBase.Unassigned,r.IsHole=!1,r.IsOpen=!1,r.FirstLeft=null,r.Pts=null,r.BottomPt=null,r.PolyNode=null,this.m_PolyOuts.push(r),r.Idx=this.m_PolyOuts.length-1,r},n.ClipperBase.prototype.DisposeOutRec=function(r){var a=this.m_PolyOuts[r];a.Pts=null,a=null,this.m_PolyOuts[r]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(r){r.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var a=r.PrevInAEL,l=r.NextInAEL;return r.NextInLML.OutIdx=r.OutIdx,a!==null?a.NextInAEL=r.NextInLML:this.m_ActiveEdges=r.NextInLML,l!==null&&(l.PrevInAEL=r.NextInLML),r.NextInLML.Side=r.Side,r.NextInLML.WindDelta=r.WindDelta,r.NextInLML.WindCnt=r.WindCnt,r.NextInLML.WindCnt2=r.WindCnt2,r=r.NextInLML,r.Curr.X=r.Bot.X,r.Curr.Y=r.Bot.Y,r.PrevInAEL=a,r.NextInAEL=l,n.ClipperBase.IsHorizontal(r)||this.InsertScanbeam(r.Top.Y),r},n.ClipperBase.prototype.SwapPositionsInAEL=function(r,a){if(!(r.NextInAEL===r.PrevInAEL||a.NextInAEL===a.PrevInAEL)){if(r.NextInAEL===a){var l=a.NextInAEL;l!==null&&(l.PrevInAEL=r);var p=r.PrevInAEL;p!==null&&(p.NextInAEL=a),a.PrevInAEL=p,a.NextInAEL=r,r.PrevInAEL=a,r.NextInAEL=l}else if(a.NextInAEL===r){var v=r.NextInAEL;v!==null&&(v.PrevInAEL=a);var A=a.PrevInAEL;A!==null&&(A.NextInAEL=r),r.PrevInAEL=A,r.NextInAEL=a,a.PrevInAEL=r,a.NextInAEL=v}else{var D=r.NextInAEL,$=r.PrevInAEL;r.NextInAEL=a.NextInAEL,r.NextInAEL!==null&&(r.NextInAEL.PrevInAEL=r),r.PrevInAEL=a.PrevInAEL,r.PrevInAEL!==null&&(r.PrevInAEL.NextInAEL=r),a.NextInAEL=D,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=a),a.PrevInAEL=$,a.PrevInAEL!==null&&(a.PrevInAEL.NextInAEL=a)}r.PrevInAEL===null?this.m_ActiveEdges=r:a.PrevInAEL===null&&(this.m_ActiveEdges=a)}},n.ClipperBase.prototype.DeleteFromAEL=function(r){var a=r.PrevInAEL,l=r.NextInAEL;a===null&&l===null&&r!==this.m_ActiveEdges||(a!==null?a.NextInAEL=l:this.m_ActiveEdges=l,l!==null&&(l.PrevInAEL=a),r.NextInAEL=null,r.PrevInAEL=null)},n.Clipper=function(r){typeof r>"u"&&(r=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&r)!==0,this.StrictlySimple=(2&r)!==0,this.PreserveCollinear=(4&r)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(r){var a=new n.Maxima;if(a.X=r,this.m_Maxima===null)this.m_Maxima=a,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(r<this.m_Maxima.X)a.Next=this.m_Maxima,a.Prev=null,this.m_Maxima=a;else{for(var l=this.m_Maxima;l.Next!==null&&r>=l.Next.X;)l=l.Next;if(r===l.X)return;a.Next=l.Next,a.Prev=l,l.Next!==null&&(l.Next.Prev=a),l.Next=a}},n.Clipper.prototype.Execute=function(){var r=arguments,a=r.length,l=r[1]instanceof n.PolyTree;if(a===4&&!l){var p=r[0],v=r[1],A=r[2],D=r[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(v),this.m_SubjFillType=A,this.m_ClipFillType=D,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var $=this.ExecuteInternal();$&&this.BuildResult(v)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return $}else if(a===4&&l){var p=r[0],j=r[1],A=r[2],D=r[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=A,this.m_ClipFillType=D,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var $=this.ExecuteInternal();$&&this.BuildResult2(j)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return $}else if(a===2&&!l){var p=r[0],v=r[1];return this.Execute(p,v,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(a===2&&l){var p=r[0],j=r[1];return this.Execute(p,j,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(r){if(!(r.FirstLeft===null||r.IsHole!==r.FirstLeft.IsHole&&r.FirstLeft.Pts!==null)){for(var a=r.FirstLeft;a!==null&&(a.IsHole===r.IsHole||a.Pts===null);)a=a.FirstLeft;r.FirstLeft=a}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var r={},a={};if(!this.PopScanbeam(r))return!1;for(this.InsertLocalMinimaIntoAEL(r.v);this.PopScanbeam(a)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(a.v))return!1;this.ProcessEdgesAtTopOfScanbeam(a.v),r.v=a.v,this.InsertLocalMinimaIntoAEL(r.v)}var l,p,v;for(p=0,v=this.m_PolyOuts.length;p<v;p++)l=this.m_PolyOuts[p],!(l.Pts===null||l.IsOpen)&&(l.IsHole^this.ReverseSolution)==this.Area$1(l)>0&&this.ReversePolyPtLinks(l.Pts);for(this.JoinCommonEdges(),p=0,v=this.m_PolyOuts.length;p<v;p++)l=this.m_PolyOuts[p],l.Pts!==null&&(l.IsOpen?this.FixupOutPolyline(l):this.FixupOutPolygon(l));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var r=0,a=this.m_PolyOuts.length;r<a;++r)this.DisposeOutRec(r);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(r,a,l){var p=new n.Join;p.OutPt1=r,p.OutPt2=a,p.OffPt.X=l.X,p.OffPt.Y=l.Y,n.use_xyz&&(p.OffPt.Z=l.Z),this.m_Joins.push(p)},n.Clipper.prototype.AddGhostJoin=function(r,a){var l=new n.Join;l.OutPt1=r,l.OffPt.X=a.X,l.OffPt.Y=a.Y,n.use_xyz&&(l.OffPt.Z=a.Z),this.m_GhostJoins.push(l)},n.Clipper.prototype.SetZ=function(r,a,l){if(this.ZFillFunction!==null){if(r.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(r,a.Bot)?r.Z=a.Bot.Z:n.IntPoint.op_Equality(r,a.Top)?r.Z=a.Top.Z:n.IntPoint.op_Equality(r,l.Bot)?r.Z=l.Bot.Z:n.IntPoint.op_Equality(r,l.Top)?r.Z=l.Top.Z:this.ZFillFunction(a.Bot,a.Top,l.Bot,l.Top,r)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(r){for(var a={},l,p;this.PopLocalMinima(r,a);){l=a.v.LeftBound,p=a.v.RightBound;var v=null;if(l===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(v=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(l,null),this.SetWindingCount(l),this.IsContributing(l)&&(v=this.AddOutPt(l,l.Bot)),this.InsertScanbeam(l.Top.Y)):(this.InsertEdgeIntoAEL(l,null),this.InsertEdgeIntoAEL(p,l),this.SetWindingCount(l),p.WindCnt=l.WindCnt,p.WindCnt2=l.WindCnt2,this.IsContributing(l)&&(v=this.AddLocalMinPoly(l,p,l.Bot)),this.InsertScanbeam(l.Top.Y)),p!==null&&(n.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(l===null||p===null)){if(v!==null&&n.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var A=0,D=this.m_GhostJoins.length;A<D;A++){var $=this.m_GhostJoins[A];this.HorzSegmentsOverlap($.OutPt1.Pt.X,$.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin($.OutPt1,v,$.OffPt)}if(l.OutIdx>=0&&l.PrevInAEL!==null&&l.PrevInAEL.Curr.X===l.Bot.X&&l.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(l.PrevInAEL.Curr,l.PrevInAEL.Top,l.Curr,l.Top,this.m_UseFullRange)&&l.WindDelta!==0&&l.PrevInAEL.WindDelta!==0){var j=this.AddOutPt(l.PrevInAEL,l.Bot);this.AddJoin(v,j,l.Top)}if(l.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var j=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(v,j,p.Top)}var ut=l.NextInAEL;if(ut!==null)for(;ut!==p;)this.IntersectEdges(p,ut,l.Curr),ut=ut.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(r,a){if(this.m_ActiveEdges===null)r.PrevInAEL=null,r.NextInAEL=null,this.m_ActiveEdges=r;else if(a===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,r))r.PrevInAEL=null,r.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=r,this.m_ActiveEdges=r;else{for(a===null&&(a=this.m_ActiveEdges);a.NextInAEL!==null&&!this.E2InsertsBeforeE1(a.NextInAEL,r);)a=a.NextInAEL;r.NextInAEL=a.NextInAEL,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=r),r.PrevInAEL=a,a.NextInAEL=r}},n.Clipper.prototype.E2InsertsBeforeE1=function(r,a){return a.Curr.X===r.Curr.X?a.Top.Y>r.Top.Y?a.Top.X<n.Clipper.TopX(r,a.Top.Y):r.Top.X>n.Clipper.TopX(a,r.Top.Y):a.Curr.X<r.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(r){var a,l;switch(r.PolyTyp===n.PolyType.ptSubject?(a=this.m_SubjFillType,l=this.m_ClipFillType):(a=this.m_ClipFillType,l=this.m_SubjFillType),a){case n.PolyFillType.pftEvenOdd:if(r.WindDelta===0&&r.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(r.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(r.WindCnt!==1)return!1;break;default:if(r.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctUnion:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}case n.ClipType.ctDifference:if(r.PolyTyp===n.PolyType.ptSubject)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctXor:if(r.WindDelta===0)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(r){for(var a=r.PrevInAEL;a!==null&&(a.PolyTyp!==r.PolyTyp||a.WindDelta===0);)a=a.PrevInAEL;if(a===null){var l=r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;r.WindDelta===0?r.WindCnt=l===n.PolyFillType.pftNegative?-1:1:r.WindCnt=r.WindDelta,r.WindCnt2=0,a=this.m_ActiveEdges}else if(r.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)r.WindCnt=1,r.WindCnt2=a.WindCnt2,a=a.NextInAEL;else if(this.IsEvenOddFillType(r)){if(r.WindDelta===0){for(var p=!0,v=a.PrevInAEL;v!==null;)v.PolyTyp===a.PolyTyp&&v.WindDelta!==0&&(p=!p),v=v.PrevInAEL;r.WindCnt=p?0:1}else r.WindCnt=r.WindDelta;r.WindCnt2=a.WindCnt2,a=a.NextInAEL}else a.WindCnt*a.WindDelta<0?Math.abs(a.WindCnt)>1?a.WindDelta*r.WindDelta<0?r.WindCnt=a.WindCnt:r.WindCnt=a.WindCnt+r.WindDelta:r.WindCnt=r.WindDelta===0?1:r.WindDelta:r.WindDelta===0?r.WindCnt=a.WindCnt<0?a.WindCnt-1:a.WindCnt+1:a.WindDelta*r.WindDelta<0?r.WindCnt=a.WindCnt:r.WindCnt=a.WindCnt+r.WindDelta,r.WindCnt2=a.WindCnt2,a=a.NextInAEL;if(this.IsEvenOddAltFillType(r))for(;a!==r;)a.WindDelta!==0&&(r.WindCnt2=r.WindCnt2===0?1:0),a=a.NextInAEL;else for(;a!==r;)r.WindCnt2+=a.WindDelta,a=a.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(r){this.m_SortedEdges===null?(this.m_SortedEdges=r,r.PrevInSEL=null,r.NextInSEL=null):(r.NextInSEL=this.m_SortedEdges,r.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=r,this.m_SortedEdges=r)},n.Clipper.prototype.PopEdgeFromSEL=function(r){if(r.v=this.m_SortedEdges,r.v===null)return!1;var a=r.v;return this.m_SortedEdges=r.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),a.NextInSEL=null,a.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var r=this.m_ActiveEdges;for(this.m_SortedEdges=r;r!==null;)r.PrevInSEL=r.PrevInAEL,r.NextInSEL=r.NextInAEL,r=r.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(r,a){if(!(r.NextInSEL===null&&r.PrevInSEL===null)&&!(a.NextInSEL===null&&a.PrevInSEL===null)){if(r.NextInSEL===a){var l=a.NextInSEL;l!==null&&(l.PrevInSEL=r);var p=r.PrevInSEL;p!==null&&(p.NextInSEL=a),a.PrevInSEL=p,a.NextInSEL=r,r.PrevInSEL=a,r.NextInSEL=l}else if(a.NextInSEL===r){var l=r.NextInSEL;l!==null&&(l.PrevInSEL=a);var p=a.PrevInSEL;p!==null&&(p.NextInSEL=r),r.PrevInSEL=p,r.NextInSEL=a,a.PrevInSEL=r,a.NextInSEL=l}else{var l=r.NextInSEL,p=r.PrevInSEL;r.NextInSEL=a.NextInSEL,r.NextInSEL!==null&&(r.NextInSEL.PrevInSEL=r),r.PrevInSEL=a.PrevInSEL,r.PrevInSEL!==null&&(r.PrevInSEL.NextInSEL=r),a.NextInSEL=l,a.NextInSEL!==null&&(a.NextInSEL.PrevInSEL=a),a.PrevInSEL=p,a.PrevInSEL!==null&&(a.PrevInSEL.NextInSEL=a)}r.PrevInSEL===null?this.m_SortedEdges=r:a.PrevInSEL===null&&(this.m_SortedEdges=a)}},n.Clipper.prototype.AddLocalMaxPoly=function(r,a,l){this.AddOutPt(r,l),a.WindDelta===0&&this.AddOutPt(a,l),r.OutIdx===a.OutIdx?(r.OutIdx=-1,a.OutIdx=-1):r.OutIdx<a.OutIdx?this.AppendPolygon(r,a):this.AppendPolygon(a,r)},n.Clipper.prototype.AddLocalMinPoly=function(r,a,l){var p,v,A;if(n.ClipperBase.IsHorizontal(a)||r.Dx>a.Dx?(p=this.AddOutPt(r,l),a.OutIdx=r.OutIdx,r.Side=n.EdgeSide.esLeft,a.Side=n.EdgeSide.esRight,v=r,v.PrevInAEL===a?A=a.PrevInAEL:A=v.PrevInAEL):(p=this.AddOutPt(a,l),r.OutIdx=a.OutIdx,r.Side=n.EdgeSide.esRight,a.Side=n.EdgeSide.esLeft,v=a,v.PrevInAEL===r?A=r.PrevInAEL:A=v.PrevInAEL),A!==null&&A.OutIdx>=0&&A.Top.Y<l.Y&&v.Top.Y<l.Y){var D=n.Clipper.TopX(A,l.Y),$=n.Clipper.TopX(v,l.Y);if(D===$&&v.WindDelta!==0&&A.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(D,l.Y),A.Top,new n.IntPoint2($,l.Y),v.Top,this.m_UseFullRange)){var j=this.AddOutPt(A,l);this.AddJoin(p,j,v.Top)}}return p},n.Clipper.prototype.AddOutPt=function(r,a){if(r.OutIdx<0){var l=this.CreateOutRec();l.IsOpen=r.WindDelta===0;var p=new n.OutPt;return l.Pts=p,p.Idx=l.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=p,p.Prev=p,l.IsOpen||this.SetHoleState(r,l),r.OutIdx=l.Idx,p}else{var l=this.m_PolyOuts[r.OutIdx],v=l.Pts,A=r.Side===n.EdgeSide.esLeft;if(A&&n.IntPoint.op_Equality(a,v.Pt))return v;if(!A&&n.IntPoint.op_Equality(a,v.Prev.Pt))return v.Prev;var p=new n.OutPt;return p.Idx=l.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=v,p.Prev=v.Prev,p.Prev.Next=p,v.Prev=p,A&&(l.Pts=p),p}},n.Clipper.prototype.GetLastOutPt=function(r){var a=this.m_PolyOuts[r.OutIdx];return r.Side===n.EdgeSide.esLeft?a.Pts:a.Pts.Prev},n.Clipper.prototype.SwapPoints=function(r,a){var l=new n.IntPoint1(r.Value);r.Value.X=a.Value.X,r.Value.Y=a.Value.Y,n.use_xyz&&(r.Value.Z=a.Value.Z),a.Value.X=l.X,a.Value.Y=l.Y,n.use_xyz&&(a.Value.Z=l.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(r,a,l,p){var v;return r>a&&(v=r,r=a,a=v),l>p&&(v=l,l=p,p=v),r<p&&l<a},n.Clipper.prototype.SetHoleState=function(r,a){for(var l=r.PrevInAEL,p=null;l!==null;)l.OutIdx>=0&&l.WindDelta!==0&&(p===null?p=l:p.OutIdx===l.OutIdx&&(p=null)),l=l.PrevInAEL;p===null?(a.FirstLeft=null,a.IsHole=!1):(a.FirstLeft=this.m_PolyOuts[p.OutIdx],a.IsHole=!a.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(r,a){return r.Y===a.Y?n.ClipperBase.horizontal:(a.X-r.X)/(a.Y-r.Y)},n.Clipper.prototype.FirstIsBottomPt=function(r,a){for(var l=r.Prev;n.IntPoint.op_Equality(l.Pt,r.Pt)&&l!==r;)l=l.Prev;var p=Math.abs(this.GetDx(r.Pt,l.Pt));for(l=r.Next;n.IntPoint.op_Equality(l.Pt,r.Pt)&&l!==r;)l=l.Next;var v=Math.abs(this.GetDx(r.Pt,l.Pt));for(l=a.Prev;n.IntPoint.op_Equality(l.Pt,a.Pt)&&l!==a;)l=l.Prev;var A=Math.abs(this.GetDx(a.Pt,l.Pt));for(l=a.Next;n.IntPoint.op_Equality(l.Pt,a.Pt)&&l!==a;)l=l.Next;var D=Math.abs(this.GetDx(a.Pt,l.Pt));return Math.max(p,v)===Math.max(A,D)&&Math.min(p,v)===Math.min(A,D)?this.Area(r)>0:p>=A&&p>=D||v>=A&&v>=D},n.Clipper.prototype.GetBottomPt=function(r){for(var a=null,l=r.Next;l!==r;)l.Pt.Y>r.Pt.Y?(r=l,a=null):l.Pt.Y===r.Pt.Y&&l.Pt.X<=r.Pt.X&&(l.Pt.X<r.Pt.X?(a=null,r=l):l.Next!==r&&l.Prev!==r&&(a=l)),l=l.Next;if(a!==null)for(;a!==l;)for(this.FirstIsBottomPt(l,a)||(r=a),a=a.Next;n.IntPoint.op_Inequality(a.Pt,r.Pt);)a=a.Next;return r},n.Clipper.prototype.GetLowermostRec=function(r,a){r.BottomPt===null&&(r.BottomPt=this.GetBottomPt(r.Pts)),a.BottomPt===null&&(a.BottomPt=this.GetBottomPt(a.Pts));var l=r.BottomPt,p=a.BottomPt;return l.Pt.Y>p.Pt.Y?r:l.Pt.Y<p.Pt.Y?a:l.Pt.X<p.Pt.X?r:l.Pt.X>p.Pt.X||l.Next===l?a:p.Next===p||this.FirstIsBottomPt(l,p)?r:a},n.Clipper.prototype.OutRec1RightOfOutRec2=function(r,a){do if(r=r.FirstLeft,r===a)return!0;while(r!==null);return!1},n.Clipper.prototype.GetOutRec=function(r){for(var a=this.m_PolyOuts[r];a!==this.m_PolyOuts[a.Idx];)a=this.m_PolyOuts[a.Idx];return a},n.Clipper.prototype.AppendPolygon=function(r,a){var l=this.m_PolyOuts[r.OutIdx],p=this.m_PolyOuts[a.OutIdx],v;this.OutRec1RightOfOutRec2(l,p)?v=p:this.OutRec1RightOfOutRec2(p,l)?v=l:v=this.GetLowermostRec(l,p);var A=l.Pts,D=A.Prev,$=p.Pts,j=$.Prev;r.Side===n.EdgeSide.esLeft?a.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks($),$.Next=A,A.Prev=$,D.Next=j,j.Prev=D,l.Pts=j):(j.Next=A,A.Prev=j,$.Prev=D,D.Next=$,l.Pts=$):a.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks($),D.Next=j,j.Prev=D,$.Next=A,A.Prev=$):(D.Next=$,$.Prev=D,A.Prev=j,j.Next=A),l.BottomPt=null,v===p&&(p.FirstLeft!==l&&(l.FirstLeft=p.FirstLeft),l.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=l;var ut=r.OutIdx,Et=a.OutIdx;r.OutIdx=-1,a.OutIdx=-1;for(var wt=this.m_ActiveEdges;wt!==null;){if(wt.OutIdx===Et){wt.OutIdx=ut,wt.Side=r.Side;break}wt=wt.NextInAEL}p.Idx=l.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(r){if(r!==null){var a,l;a=r;do l=a.Next,a.Next=a.Prev,a.Prev=l,a=l;while(a!==r)}},n.Clipper.SwapSides=function(r,a){var l=r.Side;r.Side=a.Side,a.Side=l},n.Clipper.SwapPolyIndexes=function(r,a){var l=r.OutIdx;r.OutIdx=a.OutIdx,a.OutIdx=l},n.Clipper.prototype.IntersectEdges=function(r,a,l){var p=r.OutIdx>=0,v=a.OutIdx>=0;if(n.use_xyz&&this.SetZ(l,r,a),n.use_lines&&(r.WindDelta===0||a.WindDelta===0)){if(r.WindDelta===0&&a.WindDelta===0)return;r.PolyTyp===a.PolyTyp&&r.WindDelta!==a.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?r.WindDelta===0?v&&(this.AddOutPt(r,l),p&&(r.OutIdx=-1)):p&&(this.AddOutPt(a,l),v&&(a.OutIdx=-1)):r.PolyTyp!==a.PolyTyp&&(r.WindDelta===0&&Math.abs(a.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||a.WindCnt2===0)?(this.AddOutPt(r,l),p&&(r.OutIdx=-1)):a.WindDelta===0&&Math.abs(r.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||r.WindCnt2===0)&&(this.AddOutPt(a,l),v&&(a.OutIdx=-1)));return}if(r.PolyTyp===a.PolyTyp)if(this.IsEvenOddFillType(r)){var A=r.WindCnt;r.WindCnt=a.WindCnt,a.WindCnt=A}else r.WindCnt+a.WindDelta===0?r.WindCnt=-r.WindCnt:r.WindCnt+=a.WindDelta,a.WindCnt-r.WindDelta===0?a.WindCnt=-a.WindCnt:a.WindCnt-=r.WindDelta;else this.IsEvenOddFillType(a)?r.WindCnt2=r.WindCnt2===0?1:0:r.WindCnt2+=a.WindDelta,this.IsEvenOddFillType(r)?a.WindCnt2=a.WindCnt2===0?1:0:a.WindCnt2-=r.WindDelta;var D,$,j,ut;r.PolyTyp===n.PolyType.ptSubject?(D=this.m_SubjFillType,j=this.m_ClipFillType):(D=this.m_ClipFillType,j=this.m_SubjFillType),a.PolyTyp===n.PolyType.ptSubject?($=this.m_SubjFillType,ut=this.m_ClipFillType):($=this.m_ClipFillType,ut=this.m_SubjFillType);var Et,wt;switch(D){case n.PolyFillType.pftPositive:Et=r.WindCnt;break;case n.PolyFillType.pftNegative:Et=-r.WindCnt;break;default:Et=Math.abs(r.WindCnt);break}switch($){case n.PolyFillType.pftPositive:wt=a.WindCnt;break;case n.PolyFillType.pftNegative:wt=-a.WindCnt;break;default:wt=Math.abs(a.WindCnt);break}if(p&&v)Et!==0&&Et!==1||wt!==0&&wt!==1||r.PolyTyp!==a.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(r,a,l):(this.AddOutPt(r,l),this.AddOutPt(a,l),n.Clipper.SwapSides(r,a),n.Clipper.SwapPolyIndexes(r,a));else if(p)(wt===0||wt===1)&&(this.AddOutPt(r,l),n.Clipper.SwapSides(r,a),n.Clipper.SwapPolyIndexes(r,a));else if(v)(Et===0||Et===1)&&(this.AddOutPt(a,l),n.Clipper.SwapSides(r,a),n.Clipper.SwapPolyIndexes(r,a));else if((Et===0||Et===1)&&(wt===0||wt===1)){var Rt,ne;switch(j){case n.PolyFillType.pftPositive:Rt=r.WindCnt2;break;case n.PolyFillType.pftNegative:Rt=-r.WindCnt2;break;default:Rt=Math.abs(r.WindCnt2);break}switch(ut){case n.PolyFillType.pftPositive:ne=a.WindCnt2;break;case n.PolyFillType.pftNegative:ne=-a.WindCnt2;break;default:ne=Math.abs(a.WindCnt2);break}if(r.PolyTyp!==a.PolyTyp)this.AddLocalMinPoly(r,a,l);else if(Et===1&&wt===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Rt>0&&ne>0&&this.AddLocalMinPoly(r,a,l);break;case n.ClipType.ctUnion:Rt<=0&&ne<=0&&this.AddLocalMinPoly(r,a,l);break;case n.ClipType.ctDifference:(r.PolyTyp===n.PolyType.ptClip&&Rt>0&&ne>0||r.PolyTyp===n.PolyType.ptSubject&&Rt<=0&&ne<=0)&&this.AddLocalMinPoly(r,a,l);break;case n.ClipType.ctXor:this.AddLocalMinPoly(r,a,l);break}else n.Clipper.SwapSides(r,a)}},n.Clipper.prototype.DeleteFromSEL=function(r){var a=r.PrevInSEL,l=r.NextInSEL;a===null&&l===null&&r!==this.m_SortedEdges||(a!==null?a.NextInSEL=l:this.m_SortedEdges=l,l!==null&&(l.PrevInSEL=a),r.NextInSEL=null,r.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var r={};this.PopEdgeFromSEL(r);)this.ProcessHorizontal(r.v)},n.Clipper.prototype.GetHorzDirection=function(r,a){r.Bot.X<r.Top.X?(a.Left=r.Bot.X,a.Right=r.Top.X,a.Dir=n.Direction.dLeftToRight):(a.Left=r.Top.X,a.Right=r.Bot.X,a.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(r){var a={Dir:null,Left:null,Right:null};this.GetHorzDirection(r,a);for(var l=a.Dir,p=a.Left,v=a.Right,A=r.WindDelta===0,D=r,$=null;D.NextInLML!==null&&n.ClipperBase.IsHorizontal(D.NextInLML);)D=D.NextInLML;D.NextInLML===null&&($=this.GetMaximaPair(D));var j=this.m_Maxima;if(j!==null)if(l===n.Direction.dLeftToRight){for(;j!==null&&j.X<=r.Bot.X;)j=j.Next;j!==null&&j.X>=D.Top.X&&(j=null)}else{for(;j.Next!==null&&j.Next.X<r.Bot.X;)j=j.Next;j.X<=D.Top.X&&(j=null)}for(var ut=null;;){for(var Et=r===D,wt=this.GetNextInAEL(r,l);wt!==null;){if(j!==null)if(l===n.Direction.dLeftToRight)for(;j!==null&&j.X<wt.Curr.X;)r.OutIdx>=0&&!A&&this.AddOutPt(r,new n.IntPoint2(j.X,r.Bot.Y)),j=j.Next;else for(;j!==null&&j.X>wt.Curr.X;)r.OutIdx>=0&&!A&&this.AddOutPt(r,new n.IntPoint2(j.X,r.Bot.Y)),j=j.Prev;if(l===n.Direction.dLeftToRight&&wt.Curr.X>v||l===n.Direction.dRightToLeft&&wt.Curr.X<p||wt.Curr.X===r.Top.X&&r.NextInLML!==null&&wt.Dx<r.NextInLML.Dx)break;if(r.OutIdx>=0&&!A){n.use_xyz&&(l===n.Direction.dLeftToRight?this.SetZ(wt.Curr,r,wt):this.SetZ(wt.Curr,wt,r)),ut=this.AddOutPt(r,wt.Curr);for(var Rt=this.m_SortedEdges;Rt!==null;){if(Rt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Rt.Bot.X,Rt.Top.X)){var ne=this.GetLastOutPt(Rt);this.AddJoin(ne,ut,Rt.Top)}Rt=Rt.NextInSEL}this.AddGhostJoin(ut,r.Bot)}if(wt===$&&Et){r.OutIdx>=0&&this.AddLocalMaxPoly(r,$,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL($);return}if(l===n.Direction.dLeftToRight){var ge=new n.IntPoint2(wt.Curr.X,r.Curr.Y);this.IntersectEdges(r,wt,ge)}else{var ge=new n.IntPoint2(wt.Curr.X,r.Curr.Y);this.IntersectEdges(wt,r,ge)}var be=this.GetNextInAEL(wt,l);this.SwapPositionsInAEL(r,wt),wt=be}if(r.NextInLML===null||!n.ClipperBase.IsHorizontal(r.NextInLML))break;r=this.UpdateEdgeIntoAEL(r),r.OutIdx>=0&&this.AddOutPt(r,r.Bot),a={Dir:l,Left:p,Right:v},this.GetHorzDirection(r,a),l=a.Dir,p=a.Left,v=a.Right}if(r.OutIdx>=0&&ut===null){ut=this.GetLastOutPt(r);for(var Rt=this.m_SortedEdges;Rt!==null;){if(Rt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Rt.Bot.X,Rt.Top.X)){var ne=this.GetLastOutPt(Rt);this.AddJoin(ne,ut,Rt.Top)}Rt=Rt.NextInSEL}this.AddGhostJoin(ut,r.Top)}if(r.NextInLML!==null)if(r.OutIdx>=0){if(ut=this.AddOutPt(r,r.Top),r=this.UpdateEdgeIntoAEL(r),r.WindDelta===0)return;var Be=r.PrevInAEL,be=r.NextInAEL;if(Be!==null&&Be.Curr.X===r.Bot.X&&Be.Curr.Y===r.Bot.Y&&Be.WindDelta===0&&Be.OutIdx>=0&&Be.Curr.Y>Be.Top.Y&&n.ClipperBase.SlopesEqual3(r,Be,this.m_UseFullRange)){var ne=this.AddOutPt(Be,r.Bot);this.AddJoin(ut,ne,r.Top)}else if(be!==null&&be.Curr.X===r.Bot.X&&be.Curr.Y===r.Bot.Y&&be.WindDelta!==0&&be.OutIdx>=0&&be.Curr.Y>be.Top.Y&&n.ClipperBase.SlopesEqual3(r,be,this.m_UseFullRange)){var ne=this.AddOutPt(be,r.Bot);this.AddJoin(ut,ne,r.Top)}}else r=this.UpdateEdgeIntoAEL(r);else r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r)},n.Clipper.prototype.GetNextInAEL=function(r,a){return a===n.Direction.dLeftToRight?r.NextInAEL:r.PrevInAEL},n.Clipper.prototype.IsMinima=function(r){return r!==null&&r.Prev.NextInLML!==r&&r.Next.NextInLML!==r},n.Clipper.prototype.IsMaxima=function(r,a){return r!==null&&r.Top.Y===a&&r.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(r,a){return r.Top.Y===a&&r.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(r){return n.IntPoint.op_Equality(r.Next.Top,r.Top)&&r.Next.NextInLML===null?r.Next:n.IntPoint.op_Equality(r.Prev.Top,r.Top)&&r.Prev.NextInLML===null?r.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(r){var a=this.GetMaximaPair(r);return a===null||a.OutIdx===n.ClipperBase.Skip||a.NextInAEL===a.PrevInAEL&&!n.ClipperBase.IsHorizontal(a)?null:a},n.Clipper.prototype.ProcessIntersections=function(r){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(r),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(r){if(this.m_ActiveEdges!==null){var a=this.m_ActiveEdges;for(this.m_SortedEdges=a;a!==null;)a.PrevInSEL=a.PrevInAEL,a.NextInSEL=a.NextInAEL,a.Curr.X=n.Clipper.TopX(a,r),a=a.NextInAEL;for(var l=!0;l&&this.m_SortedEdges!==null;){for(l=!1,a=this.m_SortedEdges;a.NextInSEL!==null;){var p=a.NextInSEL,v=new n.IntPoint0;if(a.Curr.X>p.Curr.X){this.IntersectPoint(a,p,v),v.Y<r&&(v=new n.IntPoint2(n.Clipper.TopX(a,r),r));var A=new n.IntersectNode;A.Edge1=a,A.Edge2=p,A.Pt.X=v.X,A.Pt.Y=v.Y,n.use_xyz&&(A.Pt.Z=v.Z),this.m_IntersectList.push(A),this.SwapPositionsInSEL(a,p),l=!0}else a=p}if(a.PrevInSEL!==null)a.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(r){return r.Edge1.NextInSEL===r.Edge2||r.Edge1.PrevInSEL===r.Edge2},n.Clipper.IntersectNodeSort=function(r,a){return a.Pt.Y-r.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var r=this.m_IntersectList.length,a=0;a<r;a++){if(!this.EdgesAdjacent(this.m_IntersectList[a])){for(var l=a+1;l<r&&!this.EdgesAdjacent(this.m_IntersectList[l]);)l++;if(l===r)return!1;var p=this.m_IntersectList[a];this.m_IntersectList[a]=this.m_IntersectList[l],this.m_IntersectList[l]=p}this.SwapPositionsInSEL(this.m_IntersectList[a].Edge1,this.m_IntersectList[a].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var r=0,a=this.m_IntersectList.length;r<a;r++){var l=this.m_IntersectList[r];this.IntersectEdges(l.Edge1,l.Edge2,l.Pt),this.SwapPositionsInAEL(l.Edge1,l.Edge2)}this.m_IntersectList.length=0};var Zt=function(r){return r<0?Math.ceil(r-.5):Math.round(r)},Re=function(r){return r<0?Math.ceil(r-.5):Math.floor(r+.5)},We=function(r){return r<0?-Math.round(Math.abs(r)):Math.round(r)},Ae=function(r){return r<0?(r-=.5,r<-2147483648?Math.ceil(r):r|0):(r+=.5,r>2147483647?Math.floor(r):r|0)};s.msie?n.Clipper.Round=Zt:s.chromium?n.Clipper.Round=We:s.safari?n.Clipper.Round=Ae:n.Clipper.Round=Re,n.Clipper.TopX=function(r,a){return a===r.Top.Y?r.Top.X:r.Bot.X+n.Clipper.Round(r.Dx*(a-r.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(r,a,l){l.X=0,l.Y=0;var p,v;if(r.Dx===a.Dx){l.Y=r.Curr.Y,l.X=n.Clipper.TopX(r,l.Y);return}if(r.Delta.X===0)l.X=r.Bot.X,n.ClipperBase.IsHorizontal(a)?l.Y=a.Bot.Y:(v=a.Bot.Y-a.Bot.X/a.Dx,l.Y=n.Clipper.Round(l.X/a.Dx+v));else if(a.Delta.X===0)l.X=a.Bot.X,n.ClipperBase.IsHorizontal(r)?l.Y=r.Bot.Y:(p=r.Bot.Y-r.Bot.X/r.Dx,l.Y=n.Clipper.Round(l.X/r.Dx+p));else{p=r.Bot.X-r.Bot.Y*r.Dx,v=a.Bot.X-a.Bot.Y*a.Dx;var A=(v-p)/(r.Dx-a.Dx);l.Y=n.Clipper.Round(A),Math.abs(r.Dx)<Math.abs(a.Dx)?l.X=n.Clipper.Round(r.Dx*A+p):l.X=n.Clipper.Round(a.Dx*A+v)}if(l.Y<r.Top.Y||l.Y<a.Top.Y){if(r.Top.Y>a.Top.Y)return l.Y=r.Top.Y,l.X=n.Clipper.TopX(a,r.Top.Y),l.X<r.Top.X;l.Y=a.Top.Y,Math.abs(r.Dx)<Math.abs(a.Dx)?l.X=n.Clipper.TopX(r,l.Y):l.X=n.Clipper.TopX(a,l.Y)}l.Y>r.Curr.Y&&(l.Y=r.Curr.Y,Math.abs(r.Dx)>Math.abs(a.Dx)?l.X=n.Clipper.TopX(a,l.Y):l.X=n.Clipper.TopX(r,l.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(r){for(var a=this.m_ActiveEdges;a!==null;){var l=this.IsMaxima(a,r);if(l){var p=this.GetMaximaPairEx(a);l=p===null||!n.ClipperBase.IsHorizontal(p)}if(l){this.StrictlySimple&&this.InsertMaxima(a.Top.X);var v=a.PrevInAEL;this.DoMaxima(a),v===null?a=this.m_ActiveEdges:a=v.NextInAEL}else{if(this.IsIntermediate(a,r)&&n.ClipperBase.IsHorizontal(a.NextInLML)?(a=this.UpdateEdgeIntoAEL(a),a.OutIdx>=0&&this.AddOutPt(a,a.Bot),this.AddEdgeToSEL(a)):(a.Curr.X=n.Clipper.TopX(a,r),a.Curr.Y=r),n.use_xyz&&(a.Top.Y===r?a.Curr.Z=a.Top.Z:a.Bot.Y===r?a.Curr.Z=a.Bot.Z:a.Curr.Z=0),this.StrictlySimple){var v=a.PrevInAEL;if(a.OutIdx>=0&&a.WindDelta!==0&&v!==null&&v.OutIdx>=0&&v.Curr.X===a.Curr.X&&v.WindDelta!==0){var A=new n.IntPoint1(a.Curr);n.use_xyz&&this.SetZ(A,v,a);var D=this.AddOutPt(v,A),$=this.AddOutPt(a,A);this.AddJoin(D,$,A)}}a=a.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,a=this.m_ActiveEdges;a!==null;){if(this.IsIntermediate(a,r)){var D=null;a.OutIdx>=0&&(D=this.AddOutPt(a,a.Top)),a=this.UpdateEdgeIntoAEL(a);var v=a.PrevInAEL,j=a.NextInAEL;if(v!==null&&v.Curr.X===a.Bot.X&&v.Curr.Y===a.Bot.Y&&D!==null&&v.OutIdx>=0&&v.Curr.Y===v.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,v.Curr,v.Top,this.m_UseFullRange)&&a.WindDelta!==0&&v.WindDelta!==0){var $=this.AddOutPt(ePrev2,a.Bot);this.AddJoin(D,$,a.Top)}else if(j!==null&&j.Curr.X===a.Bot.X&&j.Curr.Y===a.Bot.Y&&D!==null&&j.OutIdx>=0&&j.Curr.Y===j.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,j.Curr,j.Top,this.m_UseFullRange)&&a.WindDelta!==0&&j.WindDelta!==0){var $=this.AddOutPt(j,a.Bot);this.AddJoin(D,$,a.Top)}}a=a.NextInAEL}},n.Clipper.prototype.DoMaxima=function(r){var a=this.GetMaximaPairEx(r);if(a===null){r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r);return}for(var l=r.NextInAEL;l!==null&&l!==a;)this.IntersectEdges(r,l,r.Top),this.SwapPositionsInAEL(r,l),l=r.NextInAEL;r.OutIdx===-1&&a.OutIdx===-1?(this.DeleteFromAEL(r),this.DeleteFromAEL(a)):r.OutIdx>=0&&a.OutIdx>=0?(r.OutIdx>=0&&this.AddLocalMaxPoly(r,a,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(a)):n.use_lines&&r.WindDelta===0?(r.OutIdx>=0&&(this.AddOutPt(r,r.Top),r.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(r),a.OutIdx>=0&&(this.AddOutPt(a,r.Top),a.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(a)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(r){for(var a=0,l=r.length;a<l;a++)r[a].reverse()},n.Clipper.Orientation=function(r){return n.Clipper.Area(r)>=0},n.Clipper.prototype.PointCount=function(r){if(r===null)return 0;var a=0,l=r;do a++,l=l.Next;while(l!==r);return a},n.Clipper.prototype.BuildResult=function(r){n.Clear(r);for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a];if(p.Pts!==null){var v=p.Pts.Prev,A=this.PointCount(v);if(!(A<2)){for(var D=new Array(A),$=0;$<A;$++)D[$]=v.Pt,v=v.Prev;r.push(D)}}}},n.Clipper.prototype.BuildResult2=function(r){r.Clear();for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a],v=this.PointCount(p.Pts);if(!(p.IsOpen&&v<2||!p.IsOpen&&v<3)){this.FixHoleLinkage(p);var A=new n.PolyNode;r.m_AllPolys.push(A),p.PolyNode=A,A.m_polygon.length=v;for(var D=p.Pts.Prev,$=0;$<v;$++)A.m_polygon[$]=D.Pt,D=D.Prev}}for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,r.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):r.AddChild(p.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(r){for(var a=r.Pts,l=a.Prev;a!==l;)if(a=a.Next,n.IntPoint.op_Equality(a.Pt,a.Prev.Pt)){a===l&&(l=a.Prev);var p=a.Prev;p.Next=a.Next,a.Next.Prev=p,a=p}a===a.Prev&&(r.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(r){var a=null;r.BottomPt=null;for(var l=r.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(l.Prev===l||l.Prev===l.Next){r.Pts=null;return}if(n.IntPoint.op_Equality(l.Pt,l.Next.Pt)||n.IntPoint.op_Equality(l.Pt,l.Prev.Pt)||n.ClipperBase.SlopesEqual4(l.Prev.Pt,l.Pt,l.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(l.Prev.Pt,l.Pt,l.Next.Pt)))a=null,l.Prev.Next=l.Next,l.Next.Prev=l.Prev,l=l.Prev;else{if(l===a)break;a===null&&(a=l),l=l.Next}}r.Pts=l},n.Clipper.prototype.DupOutPt=function(r,a){var l=new n.OutPt;return l.Pt.X=r.Pt.X,l.Pt.Y=r.Pt.Y,n.use_xyz&&(l.Pt.Z=r.Pt.Z),l.Idx=r.Idx,a?(l.Next=r.Next,l.Prev=r,r.Next.Prev=l,r.Next=l):(l.Prev=r.Prev,l.Next=r,r.Prev.Next=l,r.Prev=l),l},n.Clipper.prototype.GetOverlap=function(r,a,l,p,v){return r<a?l<p?(v.Left=Math.max(r,l),v.Right=Math.min(a,p)):(v.Left=Math.max(r,p),v.Right=Math.min(a,l)):l<p?(v.Left=Math.max(a,l),v.Right=Math.min(r,p)):(v.Left=Math.max(a,p),v.Right=Math.min(r,l)),v.Left<v.Right},n.Clipper.prototype.JoinHorz=function(r,a,l,p,v,A){var D=r.Pt.X>a.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,$=l.Pt.X>p.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(D===$)return!1;if(D===n.Direction.dLeftToRight){for(;r.Next.Pt.X<=v.X&&r.Next.Pt.X>=r.Pt.X&&r.Next.Pt.Y===v.Y;)r=r.Next;A&&r.Pt.X!==v.X&&(r=r.Next),a=this.DupOutPt(r,!A),n.IntPoint.op_Inequality(a.Pt,v)&&(r=a,r.Pt.X=v.X,r.Pt.Y=v.Y,n.use_xyz&&(r.Pt.Z=v.Z),a=this.DupOutPt(r,!A))}else{for(;r.Next.Pt.X>=v.X&&r.Next.Pt.X<=r.Pt.X&&r.Next.Pt.Y===v.Y;)r=r.Next;!A&&r.Pt.X!==v.X&&(r=r.Next),a=this.DupOutPt(r,A),n.IntPoint.op_Inequality(a.Pt,v)&&(r=a,r.Pt.X=v.X,r.Pt.Y=v.Y,n.use_xyz&&(r.Pt.Z=v.Z),a=this.DupOutPt(r,A))}if($===n.Direction.dLeftToRight){for(;l.Next.Pt.X<=v.X&&l.Next.Pt.X>=l.Pt.X&&l.Next.Pt.Y===v.Y;)l=l.Next;A&&l.Pt.X!==v.X&&(l=l.Next),p=this.DupOutPt(l,!A),n.IntPoint.op_Inequality(p.Pt,v)&&(l=p,l.Pt.X=v.X,l.Pt.Y=v.Y,n.use_xyz&&(l.Pt.Z=v.Z),p=this.DupOutPt(l,!A))}else{for(;l.Next.Pt.X>=v.X&&l.Next.Pt.X<=l.Pt.X&&l.Next.Pt.Y===v.Y;)l=l.Next;!A&&l.Pt.X!==v.X&&(l=l.Next),p=this.DupOutPt(l,A),n.IntPoint.op_Inequality(p.Pt,v)&&(l=p,l.Pt.X=v.X,l.Pt.Y=v.Y,n.use_xyz&&(l.Pt.Z=v.Z),p=this.DupOutPt(l,A))}return D===n.Direction.dLeftToRight===A?(r.Prev=l,l.Next=r,a.Next=p,p.Prev=a):(r.Next=l,l.Prev=r,a.Prev=p,p.Next=a),!0},n.Clipper.prototype.JoinPoints=function(r,a,l){var p=r.OutPt1,v=new n.OutPt,A=r.OutPt2,D=new n.OutPt,$=r.OutPt1.Pt.Y===r.OffPt.Y;if($&&n.IntPoint.op_Equality(r.OffPt,r.OutPt1.Pt)&&n.IntPoint.op_Equality(r.OffPt,r.OutPt2.Pt)){if(a!==l)return!1;for(v=r.OutPt1.Next;v!==p&&n.IntPoint.op_Equality(v.Pt,r.OffPt);)v=v.Next;var j=v.Pt.Y>r.OffPt.Y;for(D=r.OutPt2.Next;D!==A&&n.IntPoint.op_Equality(D.Pt,r.OffPt);)D=D.Next;var ut=D.Pt.Y>r.OffPt.Y;return j===ut?!1:j?(v=this.DupOutPt(p,!1),D=this.DupOutPt(A,!0),p.Prev=A,A.Next=p,v.Next=D,D.Prev=v,r.OutPt1=p,r.OutPt2=v,!0):(v=this.DupOutPt(p,!0),D=this.DupOutPt(A,!1),p.Next=A,A.Prev=p,v.Prev=D,D.Next=v,r.OutPt1=p,r.OutPt2=v,!0)}else if($){for(v=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==v&&p.Prev!==A;)p=p.Prev;for(;v.Next.Pt.Y===v.Pt.Y&&v.Next!==p&&v.Next!==A;)v=v.Next;if(v.Next===p||v.Next===A)return!1;for(D=A;A.Prev.Pt.Y===A.Pt.Y&&A.Prev!==D&&A.Prev!==v;)A=A.Prev;for(;D.Next.Pt.Y===D.Pt.Y&&D.Next!==A&&D.Next!==p;)D=D.Next;if(D.Next===A||D.Next===p)return!1;var Et={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,v.Pt.X,A.Pt.X,D.Pt.X,Et))return!1;var wt=Et.Left,Rt=Et.Right,ne=new n.IntPoint0,ge;return p.Pt.X>=wt&&p.Pt.X<=Rt?(ne.X=p.Pt.X,ne.Y=p.Pt.Y,n.use_xyz&&(ne.Z=p.Pt.Z),ge=p.Pt.X>v.Pt.X):A.Pt.X>=wt&&A.Pt.X<=Rt?(ne.X=A.Pt.X,ne.Y=A.Pt.Y,n.use_xyz&&(ne.Z=A.Pt.Z),ge=A.Pt.X>D.Pt.X):v.Pt.X>=wt&&v.Pt.X<=Rt?(ne.X=v.Pt.X,ne.Y=v.Pt.Y,n.use_xyz&&(ne.Z=v.Pt.Z),ge=v.Pt.X>p.Pt.X):(ne.X=D.Pt.X,ne.Y=D.Pt.Y,n.use_xyz&&(ne.Z=D.Pt.Z),ge=D.Pt.X>A.Pt.X),r.OutPt1=p,r.OutPt2=A,this.JoinHorz(p,v,A,D,ne,ge)}else{for(v=p.Next;n.IntPoint.op_Equality(v.Pt,p.Pt)&&v!==p;)v=v.Next;var be=v.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,v.Pt,r.OffPt,this.m_UseFullRange);if(be){for(v=p.Prev;n.IntPoint.op_Equality(v.Pt,p.Pt)&&v!==p;)v=v.Prev;if(v.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,v.Pt,r.OffPt,this.m_UseFullRange))return!1}for(D=A.Next;n.IntPoint.op_Equality(D.Pt,A.Pt)&&D!==A;)D=D.Next;var Be=D.Pt.Y>A.Pt.Y||!n.ClipperBase.SlopesEqual4(A.Pt,D.Pt,r.OffPt,this.m_UseFullRange);if(Be){for(D=A.Prev;n.IntPoint.op_Equality(D.Pt,A.Pt)&&D!==A;)D=D.Prev;if(D.Pt.Y>A.Pt.Y||!n.ClipperBase.SlopesEqual4(A.Pt,D.Pt,r.OffPt,this.m_UseFullRange))return!1}return v===p||D===A||v===D||a===l&&be===Be?!1:be?(v=this.DupOutPt(p,!1),D=this.DupOutPt(A,!0),p.Prev=A,A.Next=p,v.Next=D,D.Prev=v,r.OutPt1=p,r.OutPt2=v,!0):(v=this.DupOutPt(p,!0),D=this.DupOutPt(A,!1),p.Next=A,A.Prev=p,v.Prev=D,D.Next=v,r.OutPt1=p,r.OutPt2=v,!0)}},n.Clipper.GetBounds=function(r){for(var a=0,l=r.length;a<l&&r[a].length===0;)a++;if(a===l)return new n.IntRect(0,0,0,0);var p=new n.IntRect;for(p.left=r[a][0].X,p.right=p.left,p.top=r[a][0].Y,p.bottom=p.top;a<l;a++)for(var v=0,A=r[a].length;v<A;v++)r[a][v].X<p.left?p.left=r[a][v].X:r[a][v].X>p.right&&(p.right=r[a][v].X),r[a][v].Y<p.top?p.top=r[a][v].Y:r[a][v].Y>p.bottom&&(p.bottom=r[a][v].Y);return p},n.Clipper.prototype.GetBounds2=function(r){var a=r,l=new n.IntRect;for(l.left=r.Pt.X,l.right=r.Pt.X,l.top=r.Pt.Y,l.bottom=r.Pt.Y,r=r.Next;r!==a;)r.Pt.X<l.left&&(l.left=r.Pt.X),r.Pt.X>l.right&&(l.right=r.Pt.X),r.Pt.Y<l.top&&(l.top=r.Pt.Y),r.Pt.Y>l.bottom&&(l.bottom=r.Pt.Y),r=r.Next;return l},n.Clipper.PointInPolygon=function(r,a){var l=0,p=a.length;if(p<3)return 0;for(var v=a[0],A=1;A<=p;++A){var D=A===p?a[0]:a[A];if(D.Y===r.Y&&(D.X===r.X||v.Y===r.Y&&D.X>r.X==v.X<r.X))return-1;if(v.Y<r.Y!=D.Y<r.Y){if(v.X>=r.X)if(D.X>r.X)l=1-l;else{var $=(v.X-r.X)*(D.Y-r.Y)-(D.X-r.X)*(v.Y-r.Y);if($===0)return-1;$>0==D.Y>v.Y&&(l=1-l)}else if(D.X>r.X){var $=(v.X-r.X)*(D.Y-r.Y)-(D.X-r.X)*(v.Y-r.Y);if($===0)return-1;$>0==D.Y>v.Y&&(l=1-l)}}v=D}return l},n.Clipper.prototype.PointInPolygon=function(r,a){var l=0,p=a,v=r.X,A=r.Y,D=a.Pt.X,$=a.Pt.Y;do{a=a.Next;var j=a.Pt.X,ut=a.Pt.Y;if(ut===A&&(j===v||$===A&&j>v==D<v))return-1;if($<A!=ut<A){if(D>=v)if(j>v)l=1-l;else{var Et=(D-v)*(ut-A)-(j-v)*($-A);if(Et===0)return-1;Et>0==ut>$&&(l=1-l)}else if(j>v){var Et=(D-v)*(ut-A)-(j-v)*($-A);if(Et===0)return-1;Et>0==ut>$&&(l=1-l)}}D=j,$=ut}while(p!==a);return l},n.Clipper.prototype.Poly2ContainsPoly1=function(r,a){var l=r;do{var p=this.PointInPolygon(l.Pt,a);if(p>=0)return p>0;l=l.Next}while(l!==r);return!0},n.Clipper.prototype.FixupFirstLefts1=function(r,a){for(var l,p,v=0,A=this.m_PolyOuts.length;v<A;v++)l=this.m_PolyOuts[v],p=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&p===r&&this.Poly2ContainsPoly1(l.Pts,a.Pts)&&(l.FirstLeft=a)},n.Clipper.prototype.FixupFirstLefts2=function(r,a){for(var l=a.FirstLeft,p,v,A=0,D=this.m_PolyOuts.length;A<D;A++)p=this.m_PolyOuts[A],!(p.Pts===null||p===a||p===r)&&(v=n.Clipper.ParseFirstLeft(p.FirstLeft),!(v!==l&&v!==r&&v!==a)&&(this.Poly2ContainsPoly1(p.Pts,r.Pts)?p.FirstLeft=r:this.Poly2ContainsPoly1(p.Pts,a.Pts)?p.FirstLeft=a:(p.FirstLeft===r||p.FirstLeft===a)&&(p.FirstLeft=l)))},n.Clipper.prototype.FixupFirstLefts3=function(r,a){for(var l,p,v=0,A=this.m_PolyOuts.length;v<A;v++)l=this.m_PolyOuts[v],p=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&p===r&&(l.FirstLeft=a)},n.Clipper.ParseFirstLeft=function(r){for(;r!==null&&r.Pts===null;)r=r.FirstLeft;return r},n.Clipper.prototype.JoinCommonEdges=function(){for(var r=0,a=this.m_Joins.length;r<a;r++){var l=this.m_Joins[r],p=this.GetOutRec(l.OutPt1.Idx),v=this.GetOutRec(l.OutPt2.Idx);if(!(p.Pts===null||v.Pts===null)&&!(p.IsOpen||v.IsOpen)){var A;p===v?A=p:this.OutRec1RightOfOutRec2(p,v)?A=v:this.OutRec1RightOfOutRec2(v,p)?A=p:A=this.GetLowermostRec(p,v),this.JoinPoints(l,p,v)&&(p===v?(p.Pts=l.OutPt1,p.BottomPt=null,v=this.CreateOutRec(),v.Pts=l.OutPt2,this.UpdateOutPtIdxs(v),this.Poly2ContainsPoly1(v.Pts,p.Pts)?(v.IsHole=!p.IsHole,v.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(v,p),(v.IsHole^this.ReverseSolution)==this.Area$1(v)>0&&this.ReversePolyPtLinks(v.Pts)):this.Poly2ContainsPoly1(p.Pts,v.Pts)?(v.IsHole=p.IsHole,p.IsHole=!v.IsHole,v.FirstLeft=p.FirstLeft,p.FirstLeft=v,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,v),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(v.IsHole=p.IsHole,v.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,v))):(v.Pts=null,v.BottomPt=null,v.Idx=p.Idx,p.IsHole=A.IsHole,A===v&&(p.FirstLeft=v.FirstLeft),v.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(v,p)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(r){var a=r.Pts;do a.Idx=r.Idx,a=a.Prev;while(a!==r.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var r=0;r<this.m_PolyOuts.length;){var a=this.m_PolyOuts[r++],l=a.Pts;if(!(l===null||a.IsOpen))do{for(var p=l.Next;p!==a.Pts;){if(n.IntPoint.op_Equality(l.Pt,p.Pt)&&p.Next!==l&&p.Prev!==l){var v=l.Prev,A=p.Prev;l.Prev=A,A.Next=l,p.Prev=v,v.Next=p,a.Pts=l;var D=this.CreateOutRec();D.Pts=p,this.UpdateOutPtIdxs(D),this.Poly2ContainsPoly1(D.Pts,a.Pts)?(D.IsHole=!a.IsHole,D.FirstLeft=a,this.m_UsingPolyTree&&this.FixupFirstLefts2(D,a)):this.Poly2ContainsPoly1(a.Pts,D.Pts)?(D.IsHole=a.IsHole,a.IsHole=!D.IsHole,D.FirstLeft=a.FirstLeft,a.FirstLeft=D,this.m_UsingPolyTree&&this.FixupFirstLefts2(a,D)):(D.IsHole=a.IsHole,D.FirstLeft=a.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(a,D)),p=l}p=p.Next}l=l.Next}while(l!==a.Pts)}},n.Clipper.Area=function(r){if(!Array.isArray(r))return 0;var a=r.length;if(a<3)return 0;for(var l=0,p=0,v=a-1;p<a;++p)l+=(r[v].X+r[p].X)*(r[v].Y-r[p].Y),v=p;return-l*.5},n.Clipper.prototype.Area=function(r){var a=r;if(r===null)return 0;var l=0;do l=l+(r.Prev.Pt.X+r.Pt.X)*(r.Prev.Pt.Y-r.Pt.Y),r=r.Next;while(r!==a);return l*.5},n.Clipper.prototype.Area$1=function(r){return this.Area(r.Pts)},n.Clipper.SimplifyPolygon=function(r,a){var l=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPath(r,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,a,a),l},n.Clipper.SimplifyPolygons=function(r,a){typeof a>"u"&&(a=n.PolyFillType.pftEvenOdd);var l=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(r,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,a,a),l},n.Clipper.DistanceSqrd=function(r,a){var l=r.X-a.X,p=r.Y-a.Y;return l*l+p*p},n.Clipper.DistanceFromLineSqrd=function(r,a,l){var p=a.Y-l.Y,v=l.X-a.X,A=p*a.X+v*a.Y;return A=p*r.X+v*r.Y-A,A*A/(p*p+v*v)},n.Clipper.SlopesNearCollinear=function(r,a,l,p){return Math.abs(r.X-a.X)>Math.abs(r.Y-a.Y)?r.X>a.X==r.X<l.X?n.Clipper.DistanceFromLineSqrd(r,a,l)<p:a.X>r.X==a.X<l.X?n.Clipper.DistanceFromLineSqrd(a,r,l)<p:n.Clipper.DistanceFromLineSqrd(l,r,a)<p:r.Y>a.Y==r.Y<l.Y?n.Clipper.DistanceFromLineSqrd(r,a,l)<p:a.Y>r.Y==a.Y<l.Y?n.Clipper.DistanceFromLineSqrd(a,r,l)<p:n.Clipper.DistanceFromLineSqrd(l,r,a)<p},n.Clipper.PointsAreClose=function(r,a,l){var p=r.X-a.X,v=r.Y-a.Y;return p*p+v*v<=l},n.Clipper.ExcludeOp=function(r){var a=r.Prev;return a.Next=r.Next,r.Next.Prev=a,a.Idx=0,a},n.Clipper.CleanPolygon=function(r,a){typeof a>"u"&&(a=1.415);var l=r.length;if(l===0)return new Array;for(var p=new Array(l),v=0;v<l;++v)p[v]=new n.OutPt;for(var v=0;v<l;++v)p[v].Pt=r[v],p[v].Next=p[(v+1)%l],p[v].Next.Prev=p[v],p[v].Idx=0;for(var A=a*a,D=p[0];D.Idx===0&&D.Next!==D.Prev;)n.Clipper.PointsAreClose(D.Pt,D.Prev.Pt,A)?(D=n.Clipper.ExcludeOp(D),l--):n.Clipper.PointsAreClose(D.Prev.Pt,D.Next.Pt,A)?(n.Clipper.ExcludeOp(D.Next),D=n.Clipper.ExcludeOp(D),l-=2):n.Clipper.SlopesNearCollinear(D.Prev.Pt,D.Pt,D.Next.Pt,A)?(D=n.Clipper.ExcludeOp(D),l--):(D.Idx=1,D=D.Next);l<3&&(l=0);for(var $=new Array(l),v=0;v<l;++v)$[v]=new n.IntPoint1(D.Pt),D=D.Next;return p=null,$},n.Clipper.CleanPolygons=function(r,a){for(var l=new Array(r.length),p=0,v=r.length;p<v;p++)l[p]=n.Clipper.CleanPolygon(r[p],a);return l},n.Clipper.Minkowski=function(r,a,l,p){var v=p?1:0,A=r.length,D=a.length,$=new Array;if(l)for(var j=0;j<D;j++){for(var ut=new Array(A),Et=0,wt=r.length,Rt=r[Et];Et<wt;Et++,Rt=r[Et])ut[Et]=new n.IntPoint2(a[j].X+Rt.X,a[j].Y+Rt.Y);$.push(ut)}else for(var j=0;j<D;j++){for(var ut=new Array(A),Et=0,wt=r.length,Rt=r[Et];Et<wt;Et++,Rt=r[Et])ut[Et]=new n.IntPoint2(a[j].X-Rt.X,a[j].Y-Rt.Y);$.push(ut)}for(var ne=new Array,j=0;j<D-1+v;j++)for(var Et=0;Et<A;Et++){var ge=new Array;ge.push($[j%D][Et%A]),ge.push($[(j+1)%D][Et%A]),ge.push($[(j+1)%D][(Et+1)%A]),ge.push($[j%D][(Et+1)%A]),n.Clipper.Orientation(ge)||ge.reverse(),ne.push(ge)}return ne},n.Clipper.MinkowskiSum=function(r,a,l){if(a[0]instanceof Array){for(var v=a,D=new n.Paths,A=new n.Clipper,$=0;$<v.length;++$){var j=n.Clipper.Minkowski(r,v[$],!0,l);if(A.AddPaths(j,n.PolyType.ptSubject,!0),l){var p=n.Clipper.TranslatePath(v[$],r[0]);A.AddPath(p,n.PolyType.ptClip,!0)}}return A.Execute(n.ClipType.ctUnion,D,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),D}else{var p=a,v=n.Clipper.Minkowski(r,p,!0,l),A=new n.Clipper;return A.AddPaths(v,n.PolyType.ptSubject,!0),A.Execute(n.ClipType.ctUnion,v,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),v}},n.Clipper.TranslatePath=function(r,a){for(var l=new n.Path,p=0;p<r.length;p++)l.push(new n.IntPoint2(r[p].X+a.X,r[p].Y+a.Y));return l},n.Clipper.MinkowskiDiff=function(r,a){var l=n.Clipper.Minkowski(r,a,!1,!0),p=new n.Clipper;return p.AddPaths(l,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),l},n.Clipper.PolyTreeToPaths=function(r){var a=new Array;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntAny,a),a},n.Clipper.AddPolyNodeToPaths=function(r,a,l){var p=!0;switch(a){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:p=!r.IsOpen;break;default:break}r.m_polygon.length>0&&p&&l.push(r.m_polygon);for(var v=0,A=r.Childs(),D=A.length,$=A[v];v<D;v++,$=A[v])n.Clipper.AddPolyNodeToPaths($,a,l)},n.Clipper.OpenPathsFromPolyTree=function(r){for(var a=new n.Paths,l=0,p=r.ChildCount();l<p;l++)r.Childs()[l].IsOpen&&a.push(r.Childs()[l].m_polygon);return a},n.Clipper.ClosedPathsFromPolyTree=function(r){var a=new n.Paths;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntClosed,a),a},fe(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(r,a){typeof r>"u"&&(r=2),typeof a>"u"&&(a=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=r,this.ArcTolerance=a,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(r,a,l){var p=r.length-1;if(!(p<0)){var v=new n.PolyNode;if(v.m_jointype=a,v.m_endtype=l,l===n.EndType.etClosedLine||l===n.EndType.etClosedPolygon)for(;p>0&&n.IntPoint.op_Equality(r[0],r[p]);)p--;v.m_polygon.push(r[0]);for(var A=0,D=0,$=1;$<=p;$++)n.IntPoint.op_Inequality(v.m_polygon[A],r[$])&&(A++,v.m_polygon.push(r[$]),(r[$].Y>v.m_polygon[D].Y||r[$].Y===v.m_polygon[D].Y&&r[$].X<v.m_polygon[D].X)&&(D=A));if(!(l===n.EndType.etClosedPolygon&&A<2)&&(this.m_polyNodes.AddChild(v),l===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D);else{var j=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(v.m_polygon[D].Y>j.Y||v.m_polygon[D].Y===j.Y&&v.m_polygon[D].X<j.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D))}}},n.ClipperOffset.prototype.AddPaths=function(r,a,l){for(var p=0,v=r.length;p<v;p++)this.AddPath(r[p],a,l)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var r=0;r<this.m_polyNodes.ChildCount();r++){var a=this.m_polyNodes.Childs()[r];(a.m_endtype===n.EndType.etClosedPolygon||a.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(a.m_polygon))&&a.m_polygon.reverse()}else for(var r=0;r<this.m_polyNodes.ChildCount();r++){var a=this.m_polyNodes.Childs()[r];a.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(a.m_polygon)&&a.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(r,a){var l=a.X-r.X,p=a.Y-r.Y;if(l===0&&p===0)return new n.DoublePoint2(0,0);var v=1/Math.sqrt(l*l+p*p);return l*=v,p*=v,new n.DoublePoint2(p,-l)},n.ClipperOffset.prototype.DoOffset=function(r){if(this.m_destPolys=new Array,this.m_delta=r,n.ClipperBase.near_zero(r)){for(var a=0;a<this.m_polyNodes.ChildCount();a++){var l=this.m_polyNodes.Childs()[a];l.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(l.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(r)*n.ClipperOffset.def_arc_tolerance?p=Math.abs(r)*n.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var v=3.14159265358979/Math.acos(1-p/Math.abs(r));this.m_sin=Math.sin(n.ClipperOffset.two_pi/v),this.m_cos=Math.cos(n.ClipperOffset.two_pi/v),this.m_StepsPerRad=v/n.ClipperOffset.two_pi,r<0&&(this.m_sin=-this.m_sin);for(var a=0;a<this.m_polyNodes.ChildCount();a++){var l=this.m_polyNodes.Childs()[a];this.m_srcPoly=l.m_polygon;var A=this.m_srcPoly.length;if(!(A===0||r<=0&&(A<3||l.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,A===1){if(l.m_jointype===n.JoinType.jtRound)for(var D=1,$=0,j=1;j<=v;j++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+$*r)));var ut=D;D=D*this.m_cos-this.m_sin*$,$=ut*this.m_sin+$*this.m_cos}else for(var D=-1,$=-1,j=0;j<4;++j)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+$*r))),D<0?D=1:$<0?$=1:D=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var j=0;j<A-1;j++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[j],this.m_srcPoly[j+1]));if(l.m_endtype===n.EndType.etClosedLine||l.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[A-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[A-2])),l.m_endtype===n.EndType.etClosedPolygon){for(var Et=A-1,j=0;j<A;j++)Et=this.OffsetPoint(j,Et,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(l.m_endtype===n.EndType.etClosedLine){for(var Et=A-1,j=0;j<A;j++)Et=this.OffsetPoint(j,Et,l.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var wt=this.m_normals[A-1],j=A-1;j>0;j--)this.m_normals[j]=new n.DoublePoint2(-this.m_normals[j-1].X,-this.m_normals[j-1].Y);this.m_normals[0]=new n.DoublePoint2(-wt.X,-wt.Y),Et=0;for(var j=A-1;j>=0;j--)Et=this.OffsetPoint(j,Et,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var Et=0,j=1;j<A-1;++j)Et=this.OffsetPoint(j,Et,l.m_jointype);var Rt;if(l.m_endtype===n.EndType.etOpenButt){var j=A-1;Rt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[j].X+this.m_normals[j].X*r),n.ClipperOffset.Round(this.m_srcPoly[j].Y+this.m_normals[j].Y*r)),this.m_destPoly.push(Rt),Rt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[j].X-this.m_normals[j].X*r),n.ClipperOffset.Round(this.m_srcPoly[j].Y-this.m_normals[j].Y*r)),this.m_destPoly.push(Rt)}else{var j=A-1;Et=A-2,this.m_sinA=0,this.m_normals[j]=new n.DoublePoint2(-this.m_normals[j].X,-this.m_normals[j].Y),l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(j,Et):this.DoRound(j,Et)}for(var j=A-1;j>0;j--)this.m_normals[j]=new n.DoublePoint2(-this.m_normals[j-1].X,-this.m_normals[j-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),Et=A-1;for(var j=Et-1;j>0;--j)Et=this.OffsetPoint(j,Et,l.m_jointype);l.m_endtype===n.EndType.etOpenButt?(Rt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*r)),this.m_destPoly.push(Rt),Rt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*r)),this.m_destPoly.push(Rt)):(Et=1,this.m_sinA=0,l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var r=arguments,a=r[0]instanceof n.PolyTree;if(a){var l=r[0],p=r[1];l.Clear(),this.FixOrientations(),this.DoOffset(p);var v=new n.Clipper(0);if(v.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)v.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var A=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;if(D.push(new n.IntPoint2(A.left-10,A.bottom+10)),D.push(new n.IntPoint2(A.right+10,A.bottom+10)),D.push(new n.IntPoint2(A.right+10,A.top-10)),D.push(new n.IntPoint2(A.left-10,A.top-10)),v.AddPath(D,n.PolyType.ptSubject,!0),v.ReverseSolution=!0,v.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.ChildCount()===1&&l.Childs()[0].ChildCount()>0){var $=l.Childs()[0];l.Childs()[0]=$.Childs()[0],l.Childs()[0].m_Parent=l;for(var j=1;j<$.ChildCount();j++)l.AddChild($.Childs()[j])}else l.Clear()}}else{var l=r[0],p=r[1];n.Clear(l),this.FixOrientations(),this.DoOffset(p);var v=new n.Clipper(0);if(v.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)v.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var A=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;D.push(new n.IntPoint2(A.left-10,A.bottom+10)),D.push(new n.IntPoint2(A.right+10,A.bottom+10)),D.push(new n.IntPoint2(A.right+10,A.top-10)),D.push(new n.IntPoint2(A.left-10,A.top-10)),v.AddPath(D,n.PolyType.ptSubject,!0),v.ReverseSolution=!0,v.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.length>0&&l.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(r,a,l){if(this.m_sinA=this.m_normals[a].X*this.m_normals[r].Y-this.m_normals[r].X*this.m_normals[a].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[a].X*this.m_normals[r].X+this.m_normals[r].Y*this.m_normals[a].Y;if(p>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[a].Y*this.m_delta))),a}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[a].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[r])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)));else switch(l){case n.JoinType.jtMiter:{var v=1+(this.m_normals[r].X*this.m_normals[a].X+this.m_normals[r].Y*this.m_normals[a].Y);v>=this.m_miterLim?this.DoMiter(r,a,v):this.DoSquare(r,a);break}case n.JoinType.jtSquare:this.DoSquare(r,a);break;case n.JoinType.jtRound:this.DoRound(r,a);break}return a=r,a},n.ClipperOffset.prototype.DoSquare=function(r,a){var l=Math.tan(Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[r].X+this.m_normals[a].Y*this.m_normals[r].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[a].X-this.m_normals[a].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[a].Y+this.m_normals[a].X*l)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[r].X+this.m_normals[r].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[r].Y-this.m_normals[r].X*l))))},n.ClipperOffset.prototype.DoMiter=function(r,a,l){var p=this.m_delta/l;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+(this.m_normals[a].X+this.m_normals[r].X)*p),n.ClipperOffset.Round(this.m_srcPoly[r].Y+(this.m_normals[a].Y+this.m_normals[r].Y)*p)))},n.ClipperOffset.prototype.DoRound=function(r,a){for(var l=Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[r].X+this.m_normals[a].Y*this.m_normals[r].Y),p=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(l))),1),v=this.m_normals[a].X,A=this.m_normals[a].Y,D,$=0;$<p;++$)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+v*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+A*this.m_delta))),D=v,v=v*this.m_cos-this.m_sin*A,A=D*this.m_sin+A*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)))},n.Error=function(r){try{throw new Error(r)}catch(a){alert(a.message)}},n.JS={},n.JS.AreaOfPolygon=function(r,a){return a||(a=1),n.Clipper.Area(r)/(a*a)},n.JS.AreaOfPolygons=function(r,a){a||(a=1);for(var l=0,p=0;p<r.length;p++)l+=n.Clipper.Area(r[p]);return l/(a*a)},n.JS.BoundsOfPath=function(r,a){return n.JS.BoundsOfPaths([r],a)},n.JS.BoundsOfPaths=function(r,a){a||(a=1);var l=n.Clipper.GetBounds(r);return l.left/=a,l.bottom/=a,l.right/=a,l.top/=a,l},n.JS.Clean=function(p,a){if(!(p instanceof Array))return[];var l=p[0]instanceof Array,p=n.JS.Clone(p);if(typeof a!="number"||a===null)return n.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||a<0)return p;l||(p=[p]);for(var v=p.length,A,D,$,j,ut,Et,wt,Rt=[],ne=0;ne<v;ne++)if(D=p[ne],A=D.length,A!==0){if(A<3){$=D,Rt.push($);continue}for($=D,j=a*a,ut=D[0],Et=1,wt=1;wt<A;wt++)(D[wt].X-ut.X)*(D[wt].X-ut.X)+(D[wt].Y-ut.Y)*(D[wt].Y-ut.Y)<=j||($[Et]=D[wt],ut=D[wt],Et++);ut=D[Et-1],(D[0].X-ut.X)*(D[0].X-ut.X)+(D[0].Y-ut.Y)*(D[0].Y-ut.Y)<=j&&Et--,Et<A&&$.splice(Et,A-Et),$.length&&Rt.push($)}return!l&&Rt.length?Rt=Rt[0]:!l&&Rt.length===0?Rt=[]:l&&Rt.length===0&&(Rt=[[]]),Rt},n.JS.Clone=function(r){if(!(r instanceof Array))return[];if(r.length===0)return[];if(r.length===1&&r[0].length===0)return[[]];var a=r[0]instanceof Array;a||(r=[r]);var l=r.length,p,v,A,D,$=new Array(l);for(v=0;v<l;v++){for(p=r[v].length,D=new Array(p),A=0;A<p;A++)D[A]={X:r[v][A].X,Y:r[v][A].Y};$[v]=D}return a||($=$[0]),$},n.JS.Lighten=function(r,a){if(!(r instanceof Array))return[];if(typeof a!="number"||a===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(r);if(r.length===0||r.length===1&&r[0].length===0||a<0)return n.JS.Clone(r);var l=r[0]instanceof Array;l||(r=[r]);var p,v,A,D,$,j,ut,Et,wt,Rt,ne,ge,be,Be,pn,Hn,Fi,Or=r.length,Bo=a*a,wi=[];for(p=0;p<Or;p++)if(A=r[p],j=A.length,j!==0){for(D=0;D<1e6;D++){for($=[],j=A.length,A[j-1].X!==A[0].X||A[j-1].Y!==A[0].Y?(ge=1,A.push({X:A[0].X,Y:A[0].Y}),j=A.length):ge=0,ne=[],v=0;v<j-2;v++)ut=A[v],wt=A[v+1],Et=A[v+2],Hn=ut.X,Fi=ut.Y,be=Et.X-Hn,Be=Et.Y-Fi,(be!==0||Be!==0)&&(pn=((wt.X-Hn)*be+(wt.Y-Fi)*Be)/(be*be+Be*Be),pn>1?(Hn=Et.X,Fi=Et.Y):pn>0&&(Hn+=be*pn,Fi+=Be*pn)),be=wt.X-Hn,Be=wt.Y-Fi,Rt=be*be+Be*Be,Rt<=Bo&&(ne[v+1]=1,v++);for($.push({X:A[0].X,Y:A[0].Y}),v=1;v<j-1;v++)ne[v]||$.push({X:A[v].X,Y:A[v].Y});if($.push({X:A[j-1].X,Y:A[j-1].Y}),ge&&A.pop(),ne.length)A=$;else break}j=$.length,$[j-1].X===$[0].X&&$[j-1].Y===$[0].Y&&$.pop(),$.length>2&&wi.push($)}return l||(wi=wi[0]),typeof wi>"u"&&(wi=[]),wi},n.JS.PerimeterOfPath=function(r,a,l){if(typeof r>"u")return 0;var p=Math.sqrt,v=0,A,D,$=0,j=0,ut=0,Et=0,wt=r.length;if(wt<2)return 0;for(a&&(r[wt]=r[0],wt++);--wt;)A=r[wt],$=A.X,j=A.Y,D=r[wt-1],ut=D.X,Et=D.Y,v+=p(($-ut)*($-ut)+(j-Et)*(j-Et));return a&&r.pop(),v/l},n.JS.PerimeterOfPaths=function(r,a,l){l||(l=1);for(var p=0,v=0;v<r.length;v++)p+=n.JS.PerimeterOfPath(r[v],a,l);return p},n.JS.ScaleDownPath=function(r,a){var l,p;for(a||(a=1),l=r.length;l--;)p=r[l],p.X=p.X/a,p.Y=p.Y/a},n.JS.ScaleDownPaths=function(r,a){var l,p,v;for(a||(a=1),l=r.length;l--;)for(p=r[l].length;p--;)v=r[l][p],v.X=v.X/a,v.Y=v.Y/a},n.JS.ScaleUpPath=function(r,a){var l,p,v=Math.round;for(a||(a=1),l=r.length;l--;)p=r[l],p.X=v(p.X*a),p.Y=v(p.Y*a)},n.JS.ScaleUpPaths=function(r,a){var l,p,v,A=Math.round;for(a||(a=1),l=r.length;l--;)for(p=r[l].length;p--;)v=r[l][p],v.X=A(v.X*a),v.Y=A(v.Y*a)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(r,a){var l=new n.ExPolygon;l.outer=r.Contour();var p=r.Childs(),v=p.length;l.holes=new Array(v);var A,D,$,j,ut,Et;for($=0;$<v;$++)for(A=p[$],l.holes[$]=A.Contour(),j=0,ut=A.Childs(),Et=ut.length;j<Et;j++)D=ut[j],n.JS.AddOuterPolyNodeToExPolygons(D,a);a.push(l)},n.JS.ExPolygonsToPaths=function(r){var a,l,p,v,A=new n.Paths;for(a=0,p=r.length;a<p;a++)for(A.push(r[a].outer),l=0,v=r[a].holes.length;l<v;l++)A.push(r[a].holes[l]);return A},n.JS.PolyTreeToExPolygons=function(r){var a=new n.ExPolygons,l,p,v,A;for(p=0,v=r.Childs(),A=v.length;p<A;p++)l=v[p],n.JS.AddOuterPolyNodeToExPolygons(l,a);return a}})()});function Xo(n,t,e,i=Ke.default.PolyFillType.pftNonZero){let s=new Ke.default.Clipper;s.AddPaths(Go(t),Ke.default.PolyType.ptSubject,!0),e&&s.AddPaths(Go(e),Ke.default.PolyType.ptClip,!0);let o=new Ke.default.Paths;return s.Execute(n,o,i,i),pc(o)}function yu(n,t=256){let e=n;for(;e.length>t;){let i=[];for(let s=0;s<e.length;s+=t)i.push(cr(e.slice(s,s+t)));if(e=i.flat(),i.length===1)return e}return cr(e)}function tn(n,t){if(!n.length)return[];let e=new Ke.default.ClipperOffset(2,Am);e.AddPaths(Go(n),Ke.default.JoinType.jtRound,Ke.default.EndType.etClosedPolygon);let i=new Ke.default.Paths;return e.Execute(i,t*Br),pc(i)}function Gn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function Bi(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let o of n)for(let[c,u]of o)c<t&&(t=c),c>i&&(i=c),u<e&&(e=u),u>s&&(s=u);return{minX:t,minY:e,maxX:i,maxY:s}}function ki(n){if(!n.length)return[];let t=new Ke.default.Clipper;t.AddPaths(Go(n),Ke.default.PolyType.ptSubject,!0);let e=new Ke.default.PolyTree;t.Execute(Ke.default.ClipType.ctUnion,e,Ke.default.PolyFillType.pftNonZero,Ke.default.PolyFillType.pftNonZero);let i=[],s=o=>{for(let c of o.Childs()){if(c.IsHole()){s(c);continue}let u=c.Childs().map(f=>f.Contour());i.push(pc([c.Contour(),...u]));for(let f of c.Childs())s(f)}};return s(e),i}function ks([n,t],e){let i=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){let[c,u]=e[s],[f,d]=e[o];u>t!=d>t&&n<(f-c)*(t-u)/(d-u)+c&&(i=!i)}return i}function di(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(Gn(e))>t)}function Cm(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let u=1;u<n.length;u++){let f=(n[u][0]-n[0][0])**2+(n[u][1]-n[0][1])**2;f>i&&(i=f,e=u)}let s=u=>{let f=new Uint8Array(u.length);f[0]=f[u.length-1]=1;let d=[[0,u.length-1]];for(;d.length;){let[_,y]=d.pop(),[g,b]=u[_],[E,P]=u[y],S=Math.hypot(E-g,P-b)||1e-12,M=-1,F=t;for(let X=_+1;X<y;X++){let R=Math.abs((E-g)*(b-u[X][1])-(g-u[X][0])*(P-b))/S;R>F&&(F=R,M=X)}M>0&&(f[M]=1,d.push([_,M],[M,y]))}return u.filter((_,y)=>f[y])},o=s(n.slice(0,e+1)),c=s([...n.slice(e),n[0]]);return[...o,...c.slice(1,-1)]}var Ke,Br,Am,Go,pc,Wo,cr,kr,Bs,Jn,zs,Vs=Cn(()=>{Ke=pu(vu(),1),Br=1e3,Am=.01*Br,Go=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*Br),Y:Math.round(i*Br)}))),pc=n=>n.map(t=>t.map(e=>[e.X/Br,e.Y/Br]));Wo=n=>Xo(Ke.default.ClipType.ctUnion,n,null,Ke.default.PolyFillType.pftEvenOdd),cr=n=>Xo(Ke.default.ClipType.ctUnion,n,null);kr=(n,t)=>Xo(Ke.default.ClipType.ctDifference,n,t),Bs=(n,t)=>Xo(Ke.default.ClipType.ctIntersection,n,t);Jn=n=>n.reduce((t,e)=>t+Gn(e),0);zs=(n,t)=>n.map(e=>Cm(e,t)).filter(e=>e.length>=3)});function Su(n){let t=[],e=[],i=[],s=[];for(let o of n.meshes||[]){let c=t.length/3,u=e.length/3,f=o.attributes.position.array;for(let _=0;_<f.length;_++)t.push(f[_]);let d=o.index.array;for(let _=0;_<d.length;_++)e.push(d[_]+c);for(let _ of o.brep_faces||[])i.push({first:_.first+u,last:_.last+u});o.name&&s.push(o.name)}return{positions:Float64Array.from(t),indices:Uint32Array.from(e),faces:i,solids:(n.meshes||[]).length,names:s}}function Hs(n){let t=n.positions,e=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(let s=0;s<t.length;s+=3)for(let o=0;o<3;o++)t[s+o]<e[o]&&(e[o]=t[s+o]),t[s+o]>i[o]&&(i[o]=t[s+o]);return{min:e,max:i,size:[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}}function gc(n,t){let e=n.positions,i=n.indices,s=i[t*3]*3,o=i[t*3+1]*3,c=i[t*3+2]*3,u=e[o]-e[s],f=e[o+1]-e[s+1],d=e[o+2]-e[s+2],_=e[c]-e[s],y=e[c+1]-e[s+1],g=e[c+2]-e[s+2],b=f*g-d*y,E=d*_-u*g,P=u*y-f*_,S=Math.hypot(b,E,P);return S>0?[b/S,E/S,P/S]:[0,0,0]}function Pm(n){let[t,e,i]=n;if(i>.999999)return[1,0,0,0,1,0,0,0,1];if(i<-.999999)return[1,0,0,0,-1,0,0,0,-1];let s=e,o=-t,c=Math.hypot(s,o);s/=c,o/=c;let u=i,f=c,d=1-u;return[d*s*s+u,d*s*o,o*f,d*s*o,d*o*o+u,-s*f,-o*f,s*f,u]}function Im(n,t){let e=n.positions,i=new Float64Array(e.length);for(let c=0;c<e.length;c+=3){let u=e[c],f=e[c+1],d=e[c+2];i[c]=t[0]*u+t[1]*f+t[2]*d,i[c+1]=t[3]*u+t[4]*f+t[5]*d,i[c+2]=t[6]*u+t[7]*f+t[8]*d}let s={positions:i,indices:n.indices,faces:n.faces},{min:o}=Hs(s);for(let c=0;c<i.length;c+=3)i[c]-=o[0],i[c+1]-=o[1],i[c+2]-=o[2];for(let c=0;c<i.length;c++)i[c]=Math.round(i[c]*1e6)/1e6;return s}function zr(n,t=.001){let{max:e,size:i}=Hs(n),s=e[2],o=new Set,c=0,u=0,f=0,d=n.positions,_=n.indices,y=_.length/3;for(let E=0;E<y;E++){let P=_[E*3]*3,S=_[E*3+1]*3,M=_[E*3+2]*3,F=gc(n,E),X=d[S]-d[P],R=d[S+1]-d[P+1],U=d[S+2]-d[P+2],z=d[M]-d[P],q=d[M+1]-d[P+1],C=d[M+2]-d[P+2],H=Math.hypot(R*C-U*q,U*z-X*C,X*q-R*z)/2;f+=H;let Y=(d[P+2]+d[S+2]+d[M+2])/3;F[2]>1-t?o.add(Math.round(Y*1e3)/1e3):F[2]<-(1-t)?Y>t&&(c+=H):Math.abs(F[2])>t&&(F[2]<0?c+=H:u+=H)}let g=c>.001*f,b=g?Lm(n):{inside:0,total:0};return{size:i,top:s,floors:[...o].sort((E,P)=>P-E),undercut:g&&b.inside>xu,squareEdges:g&&b.inside<=xu,sloped:u>.001*f,undercutArea:c,slopedArea:u,missed:b.inside,missedTotal:b.total}}function Rm(n){let t=n.positions,e=n.indices,i=0;for(let s=0;s<e.length;s+=3){let o=e[s]*3,c=e[s+1]*3,u=e[s+2]*3;i+=t[o]*(t[c+1]*t[u+2]-t[c+2]*t[u+1])-t[o+1]*(t[c]*t[u+2]-t[c+2]*t[u])+t[o+2]*(t[c]*t[u+1]-t[c+1]*t[u])}return Math.abs(i/6)}function Lm(n){let{min:t,max:e}=Hs(n),i=e[0]-t[0],s=e[1]-t[1],o=Math.max(.05,Math.sqrt(i*s/25e4)),c={x0:t[0],y0:t[1],cell:o,nx:Math.ceil(i/o)+1,ny:Math.ceil(s/o)+1},{h:u,mat:f}=Nm(n,c),d=cr(ki(Wo(_c(n,t[2]+.01))).map(S=>S[0])),_=Mu(d,c),y=Mu(tn(d,Math.min(3,.15*Math.min(i,s))),c),g=0,b=0;for(let S=0;S<u.length;S++){if(!(u[S]>t[2]))continue;let M=Math.max(0,u[S]-t[2]-f[S]);g+=M,(_[S]||!y[S])&&(b+=M)}let E=Rm(n),P=o*o;return E>0?{inside:b*P/E,total:g*P/E}:{inside:0,total:0}}function Nm(n,t){let e=t.nx*t.ny,i=new Float32Array(e).fill(-1/0),s=new Float32Array(e),o=n.positions,c=n.indices;for(let u=0;u<c.length;u+=3){let f=c[u]*3,d=c[u+1]*3,_=c[u+2]*3,y=o[f],g=o[f+1],b=o[f+2],E=o[d],P=o[d+1],S=o[d+2],M=o[_],F=o[_+1],X=o[_+2],R=(P-F)*(y-M)+(M-E)*(g-F);if(Math.abs(R)<1e-12)continue;let U=(E-y)*(F-g)-(P-g)*(M-y)>0?1:-1,z=Math.max(0,Math.ceil((Math.min(y,E,M)-t.x0)/t.cell)),q=Math.min(t.nx-1,Math.floor((Math.max(y,E,M)-t.x0)/t.cell)),C=Math.max(0,Math.ceil((Math.min(g,P,F)-t.y0)/t.cell)),H=Math.min(t.ny-1,Math.floor((Math.max(g,P,F)-t.y0)/t.cell));for(let Y=C;Y<=H;Y++)for(let nt=z;nt<=q;nt++){let it=t.x0+(nt+5e-4)*t.cell,tt=t.y0+(Y+7e-4)*t.cell,K=((P-F)*(it-M)+(M-E)*(tt-F))/R,B=((F-g)*(it-M)+(y-M)*(tt-F))/R,et=1-K-B;if(K<0||B<0||et<0)continue;let V=K*b+B*S+et*X,dt=Y*t.nx+nt;V>i[dt]&&(i[dt]=V),s[dt]+=U*V}}return{h:i,mat:s}}function Mu(n,t){let e=new Uint8Array(t.nx*t.ny);for(let i=0;i<t.ny;i++){let s=t.y0+i*t.cell,o=[];for(let c of n)for(let u=0;u<c.length;u++){let[f,d]=c[u],[_,y]=c[(u+1)%c.length];d<=s!=y<=s&&o.push(f+(s-d)/(y-d)*(_-f))}o.sort((c,u)=>c-u);for(let c=0;c+1<o.length;c+=2){let u=Math.max(0,Math.ceil((o[c]-t.x0)/t.cell)),f=Math.min(t.nx-1,Math.floor((o[c+1]-t.x0)/t.cell));for(let d=u;d<=f;d++)e[i*t.nx+d]=1}}return e}function _c(n,t){let e=n.positions,i=n.indices,s=[],o=i.length/3;for(let c=0;c<o;c++){let u=[i[c*3]*3,i[c*3+1]*3,i[c*3+2]*3],f=[];for(let d=0;d<3;d++){let _=u[d],y=u[(d+1)%3],g=e[_+2]-t,b=e[y+2]-t;if(g<0!=b<0){let E=g/(g-b);f.push([e[_]+(e[y]-e[_])*E,e[_+1]+(e[y+1]-e[_+1])*E])}}f.length===2&&s.push(f)}return Dm(s)}function Dm(n){let t=([o,c])=>`${Math.round(o*1e4)},${Math.round(c*1e4)}`,e=new Map;n.forEach((o,c)=>{for(let u of[0,1]){let f=t(o[u]);e.has(f)||e.set(f,[]),e.get(f).push(c)}});let i=new Uint8Array(n.length),s=[];for(let o=0;o<n.length;o++){if(i[o])continue;i[o]=1;let c=[n[o][0],n[o][1]],u=t(n[o][0]),f=n[o][1];for(let d=0;d<n.length;d++){let _=t(f);if(_===u)break;let y=(e.get(_)||[]).find(b=>!i[b]);if(y===void 0)break;i[y]=1;let g=n[y];f=t(g[0])===_?g[1]:g[0],t(f)!==u&&c.push(f)}c.length>=3&&s.push(c)}return s}function bu(n){let t={};for(let s of Object.keys(mc)){let o=zr(qo(n,s));t[s]={reachable:!o.undercut,missed:o.missed,missedTotal:o.missedTotal,undercutArea:o.undercutArea,slopedArea:o.slopedArea,height:o.size[2]}}let e=Object.keys(mc),i=e.slice().sort((s,o)=>{let c=t[s],u=t[o];return(c.reachable===u.reachable?0:c.reachable?-1:1)||(Math.abs(c.missed-u.missed)>1e-4?c.missed-u.missed:0)||(Math.abs(c.missedTotal-u.missedTotal)>1e-4?c.missedTotal-u.missedTotal:0)||(Math.abs(c.slopedArea-u.slopedArea)>1e-6?c.slopedArea-u.slopedArea:0)||(Math.abs(c.height-u.height)>1e-6?c.height-u.height:0)||e.indexOf(s)-e.indexOf(o)});if(!i.some(s=>t[s].reachable))for(let s of e)t[s].reachable=!0;return{sides:t,best:i[0]}}var mc,qo,xu,vc=Cn(()=>{Vs();mc={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],left:[-1,0,0],right:[1,0,0]};qo=(n,t)=>Im(n,Pm(typeof t=="string"?mc[t]:t));xu=.05});function wu(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return Om.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t||"flat"}function ur(n,t){return t==="toolId"?n.toolId??n.id:n.toolNumber??n.toolId??n.id}function Eu(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${wu(t)}`,kind:wu(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2}))}function Tu(n,t,e,i={}){let s=hr[t]||hr.mdf,o=Xn[e]||Xn.balanced,c=i.maxRpm||24e3,u=i.minRpm||0,f=Math.round(Math.min(c,Math.max(u,s.rpm))),d=Math.min(s.maxChip,s.chip*n.diameter),_=Math.min(i.maxFeed||4e3,4e3),y=Math.round(Math.min(_,Math.max(150,f*n.flutes*d*o.feed)));return{rpm:f,feed:y,plunge:Math.round(Math.max(60,y*.3)),stepdown:Math.max(.05,n.diameter*s.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,s.stepover*o.stepover)),rampAngle:s.ramp}}var hr,Xn,Om,Gs=Cn(()=>{hr={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},Xn={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},Om=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"])});function xc(n){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:2,extraTop:1,width:n.size[0]+4,depth:n.size[1]+4,thickness:n.size[2]+1},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,height:3},throughDepth:.3,disabled:{},toolOverride:{}}}function $o(n,t){let[e,i,s]=n.size,o=t.stock,c=o.fit?e+2*o.margin:Math.max(e,o.width),u=o.fit?i+2*o.margin:Math.max(i,o.depth),f=o.fit?s+o.extraTop:Math.max(s,o.thickness);return{minX:(e-c)/2,minY:(i-u)/2,maxX:(e+c)/2,maxY:(i+u)/2,bottom:0,top:f,width:c,depth:u,thickness:f}}function Mc(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,s=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(s=n.minY),e.includes("back")&&(s=n.maxY),{x:i,y:s,z:t.z==="bed"?n.bottom:n.top}}function Fm(n){let t=n.positions,e=n.indices,i=[];for(let s=0;s<e.length/3;s++){if(gc(n,s)[2]>-.001)continue;let c=[e[s*3]*3,e[s*3+1]*3,e[s*3+2]*3],u=c.map(f=>[t[f],t[f+1]]);Math.abs(Gn(u))<1e-6||i.push({loop:Gn(u)>0?u:u.reverse(),maxZ:Math.max(...c.map(f=>t[f+2]))})}return i}function Bm(n){if(n.length!==1)return null;let t=n[0];if(t.length<12)return null;let e=Bi([t]),i=(e.minX+e.maxX)/2,s=(e.minY+e.maxY)/2,o=t.map(([u,f])=>Math.hypot(u-i,f-s)),c=o.reduce((u,f)=>u+f,0)/o.length;return o.every(u=>Math.abs(u-c)<Math.max(.03,c*.01))?{x:i,y:s,d:2*c}:null}function Pu(n,t,e,i={}){let s=zr(n),o=$o(s,e),c=Xn[e.finish]||Xn.balanced,u=[];s.squareEdges&&u.push({kind:"edges",text:"Chamfers or rounded edges face down on this side, so they are left square."}),s.undercut&&u.push({kind:"undercut",text:"Some features face the other side, so they can\u2019t be reached from the top. Cut this side, then turn the part over for a second setup."}),s.sloped&&u.push({kind:"sloped",text:"Sloped or curved faces (chamfers, fillets) aren\u2019t cut in 3D yet, so they are left square."});let f=t.filter(B=>B.kind==="flat").sort((B,et)=>et.diameter-B.diameter),d=t.filter(B=>B.kind==="drill"),_=t.filter(B=>B.kind==="surfacing").sort((B,et)=>et.diameter-B.diameter),y=new Map,g=B=>(B&&y.set(B.id,(y.get(B.id)||0)+1),B),b=e.material==="aluminum"?8:12.8,E=s.undercutArea>0?Fm(n):[],P=new Map,S=B=>{if(P.has(B))return P.get(B);let et=Wo(_c(n,B+Vr)),V=E.filter(ct=>ct.maxZ>B+Vr).map(ct=>ct.loop),dt=V.length?tn(tn(cr([...et,...yu(V)]),.002),-.002):et;return P.set(B,dt),dt},M=S(0),F=cr(ki(M).map(B=>B[0])),X=[],R=1,U=B=>(B.id=B.id||`op${R++}`,X.push(B),B);function z(B,et,V){let dt=f.filter(Pt=>Pt.diameter<=b&&Xs(Pt,et)&&tn(B,-(Pt.diameter/2+V)).length);if(!dt.length)return null;let ct=dt.map(Pt=>({t:Pt,c:km(B,Pt.diameter/2)})),_t=ct.find(Pt=>Pt.c>=.85)||ct.reduce((Pt,Ut)=>Ut.c>Pt.c?Ut:Pt);return(ct.find(Pt=>y.has(Pt.t.id)&&Pt.c>=Math.min(.85,_t.c*.98))||_t).t}function q(B,et,V){let dt=di(kr(B,yc(B,et.diameter/2)),zi);if(Jn(dt)<zi)return null;let ct=f.filter(Pt=>Pt.diameter<et.diameter-1e-6&&Xs(Pt,V));if(!ct.length)return{tool:null,left:dt};let _t=Jn(dt);return{tool:ct.find(Pt=>Jn(di(kr(B,yc(B,Pt.diameter/2)),zi))<_t*.25)||ct[ct.length-1],left:dt}}let C=B=>Tu(B,e.material,e.finish,i);if(o.top>s.top+Vr){let B=_[0]||f[0];B&&U({id:"face",kind:"face",label:"Flatten the top",tool:g(B),zTop:o.top,zBottom:s.top,region:Au(o),detail:`${Pn(o.top-s.top)} mm off the top`})}let H=[s.top,...s.floors.filter(B=>B<s.top-Vr&&B>Vr),0],Y=[],nt=(B,et)=>{let V=Jn(B),dt=Jn(et);if(Math.abs(V-dt)>Math.max(zi,V*.005))return!1;let ct=Bi(B),_t=Bi(et);return Math.abs(ct.minX-_t.minX)<.01&&Math.abs(ct.maxX-_t.maxX)<.01&&Math.abs(ct.minY-_t.minY)<.01&&Math.abs(ct.maxY-_t.maxY)<.01};for(let B=1;B<H.length;B++){let et=H[B-1],V=H[B],dt=kr(Au(o),S(V));for(let ct of ki(dt)){if(Jn(ct)<zi||!tn(ct,-.05).length)continue;let _t=Bi([ct[0]]),Mt=_t.minX<=o.minX+.001||_t.maxX>=o.maxX-.001||_t.minY<=o.minY+.001||_t.maxY>=o.maxY-.001,Pt=null;if(Mt&&(V===0||(Pt=di(Bs(ct,F),zi),Jn(Pt)<zi)))continue;let Ut=Mt?Pt:ct,ae=Y.find(le=>le.zFloor===et&&le.outer===Mt&&nt(le.shape,Ut));ae?(ae.zFloor=V,ae.region=ct):Y.push({outer:Mt,region:ct,over:Pt,shape:Ut,zTop:et,zFloor:V})}}let it=new Map;for(let{outer:B,region:et,over:V,zTop:dt,zFloor:ct}of Y){let _t=ct===0,Mt=_t?-e.throughDepth:ct,Pt=dt-Mt;{if(B){let Gt=z(Bs(et,tn(V,13)),Pt,c.allowance);if(!Gt){u.push({kind:"notool",text:`A step ${Pn(dt-ct)} mm deep has no end mill that fits.`});continue}let re=Bs(et,tn(V,Gt.diameter+.5));U({kind:"step",label:"Cut the step",tool:g(Gt),zTop:dt,zBottom:Mt,region:re,walls:et,detail:`${Pn(dt-ct)} mm deep`});continue}let Ut=Bm(et);if(Ut){let Gt=`${Pn(Ut.d)}|${Pn(dt)}|${Pn(Mt)}`;it.has(Gt)||it.set(Gt,{d:Ut.d,zTop:dt,zBottom:Mt,through:_t,centers:[],regions:[]}),it.get(Gt).centers.push(Ut),it.get(Gt).regions.push(et);continue}let ae=Bi([et[0]]),le=z(et,Pt,c.allowance),pe=`${Pn(ae.maxX-ae.minX)} \xD7 ${Pn(ae.maxY-ae.minY)} mm \xB7 ${_t?"through":`${Pn(dt-ct)} mm deep`}`;if(!le){u.push({kind:"notool",text:`No end mill fits the pocket ${pe}.`});continue}let yt=U({kind:"pocket",label:_t?"Cut the opening":"Clear the pocket",tool:g(le),zTop:dt,zBottom:Mt,region:et,detail:pe}),Tt=q(et,le,Pt);Tt&&Tt.tool?U({kind:"corners",label:"Clean the corners",tool:g(Tt.tool),zTop:dt,zBottom:Mt,region:et,after:yt.id,detail:`Corners too tight for ${le.name}`}):Tt&&u.push({kind:"corners",text:`Pocket corners stay rounded to ${Pn(le.diameter/2)} mm: no smaller end mill in your library.`})}}for(let B of it.values()){let et=B.centers.length,V=B.zTop-B.zBottom,dt=`\xD8${Pn(B.d)} mm ${B.through?"through":`${Pn(B.zTop-B.zBottom)} mm deep`}`,ct=d.find(Pt=>Um(Pt.diameter,B.d)&&Xs(Pt,V));if(ct){U({kind:"drill",label:et>1?`Drill ${et} holes`:"Drill the hole",tool:g(ct),zTop:B.zTop,zBottom:B.zBottom,centers:B.centers,detail:dt});continue}let _t=B.regions.flat().length?B.regions.flatMap(Pt=>Pt):[],Mt=z(_t,V,0)||null;if(!Mt||Mt.diameter>B.d-.4){let Pt=f.find(Ut=>Ut.diameter<=B.d-.4&&Xs(Ut,V));if(!Pt){u.push({kind:"notool",text:`No drill or end mill fits the ${dt} hole${et>1?"s":""}.`});continue}U({kind:"hole",label:et>1?`Cut ${et} holes`:"Cut the hole",tool:g(Pt),zTop:B.zTop,zBottom:B.zBottom,region:_t,centers:B.centers,detail:`${dt} \xB7 spiral`});continue}U({kind:"hole",label:et>1?`Cut ${et} holes`:"Cut the hole",tool:g(Mt),zTop:B.zTop,zBottom:B.zBottom,region:_t,centers:B.centers,detail:`${dt} \xB7 spiral`})}if(F.length){let B=s.top+e.throughDepth,et=f.filter(ct=>Xs(ct,B)&&ct.diameter<=b),V=et.find(ct=>y.has(ct.id))||et.slice().sort((ct,_t)=>Math.abs(ct.diameter-6.35)-Math.abs(_t.diameter-6.35))[0],dt=e.tabs.enabled?`${e.tabs.count} tabs`:"no tabs";V?U({id:"cutout",kind:"cutout",label:"Cut out the part",tool:g(V),zTop:s.top,zBottom:-e.throughDepth,region:F,detail:`${Pn(s.top)} mm \xB7 ${dt}`}):u.push({kind:"notool",text:`No end mill is long enough to cut out the part (${Pn(B)} mm).`})}let tt=[],K=new Map;for(let B of X){if(B.kind!=="pocket"&&B.kind!=="corners"){tt.push(B);continue}let et=B.after&&K.has(B.after)?K.get(B.after):B.after,V=tt.find(dt=>dt.kind===B.kind&&dt.detail===B.detail&&dt.zTop===B.zTop&&dt.zBottom===B.zBottom&&dt.tool.id===B.tool.id&&(dt.after||null)===(et||null));V?(V.region=[...V.region,...B.region],V.count=(V.count||1)+1,K.set(B.id,V.id)):tt.push({...B,after:et})}for(let B of tt)B.count>1&&(B.kind==="pocket"&&(B.label=B.label==="Cut the opening"?`Cut ${B.count} openings`:`Clear ${B.count} pockets`),B.kind==="corners"&&(B.label=`Clean the corners of ${B.count} pockets`));X.length=0,X.push(...tt);for(let B of X){let et=e.toolOverride?.[B.id];if(et){let V=t.find(dt=>dt.id===et);V&&(B.tool=V)}B.enabled=!e.disabled?.[B.id],B.feeds=C(B.tool)}return{analysis:s,stock:o,zero:Mc(o,e.zero),ops:zm(X),warnings:u,job:e}}function zm(n){let t=n.filter(d=>d.kind==="face"),e=n.filter(d=>d.kind==="cutout"),i=n.filter(d=>d.kind!=="face"&&d.kind!=="cutout"),s=d=>d.region||(d.centers||[]).map(_=>Vm(_)),o=new Map(i.map(d=>[d,i.filter(_=>_!==d&&(d.after===_.id||_.zTop>d.zTop+Vr&&Jn(Bs(s(d),s(_)))>zi))])),c=new Set,u=[...t],f=t.length?t[t.length-1].tool:null;for(;c.size<i.length;){let d=i.filter(y=>!c.has(y)&&o.get(y).every(g=>c.has(g))),_=d.find(y=>f&&y.tool.id===f.id)||d[0];c.add(_),u.push(_),f=_.tool}return[...u,...e]}function Vm(n,t=32){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}function Zo(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var Vr,zi,Cu,Au,Um,yc,km,Xs,Pn,Iu=Cn(()=>{vc();Vs();Gs();Vr=.01,zi=.05,Cu=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"];Au=n=>[[[n.minX,n.minY],[n.maxX,n.minY],[n.maxX,n.maxY],[n.minX,n.maxY]]],Um=(n,t)=>Math.abs(n-t)<.05;yc=(n,t)=>tn(tn(n,-t),t),km=(n,t)=>{let e=Jn(n);return e>0?Jn(yc(n,t))/e:0},Xs=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,Pn=n=>(Math.round(n*10)/10).toString()});function Hr(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(s,o)=>n-(o+1)*(n-t)/i)}function Ws(n,t,e,i,s,o,c){let u=[...t.breaks(e,i),i];if(c)for(let d of c.edges(e,i))u.push(d);u.sort((d,_)=>d-_);let f=e;for(let d of u){if(d-f<1e-9)continue;let _=(f+d)/2,y=c&&c.inside(_)?c.top:-1/0,[g,b]=t.at(f),E=Math.max(s(f),y);n.at&&Math.abs(n.at.z-E)>1e-6&&n.feed(g,b,E,o);let[P,S]=t.at(d);n.feed(P,S,Math.max(s(d),y),o),f=d}}function Ru(n,t,e,i,s,o,c){let u=Math.max(0,(i-s)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||u<1e-6){let[d,_]=t.at(e);return n.feed(d,_,c&&c.inside(e)?Math.max(s,c.top):s,o.plunge),Ws(n,t,e,e+t.length,()=>s,o.feed,c),e}let f=e+u;return Ws(n,t,e,f,d=>i-(d-e)/u*(i-s),Math.min(o.feed,o.plunge*2),c),Ws(n,t,f,f+t.length,()=>s,o.feed,c),f}function Gm(n,t,e){let i=[];for(let s=t,o=0;o<500;s+=e,o++){let c=zs(di(tn(n,-s),.001),.005);if(!c.length)break;i.push(c)}return i}function Xm(n){let t=n.map((s,o)=>s.map(c=>({loop:c,depth:o,kids:[]})));for(let s=1;s<t.length;s++)for(let o of t[s])(t[s-1].find(u=>ks(o.loop[0],u.loop)&&Math.sign(Gn(u.loop))===Math.sign(Gn(o.loop)))||t[s-1].find(u=>ks(o.loop[0],u.loop))||t[0][0]).kids.push(o);let e=[],i=s=>{if(!s.kids.length){e.push([s.loop]);return}for(let o of s.kids)i(o);e[e.length-1].push(s.loop)};for(let s of t[0]||[])Gn(s.loop)>0&&i(s);for(let s of t[0]||[])Gn(s.loop)<=0&&!t[0].some(o=>o.kids.includes(s))&&i(s);return e}function Wm(n,t){let e=0;for(let i of t)ks(n,i)&&(e+=Gn(i)>0?1:-1);return e>0}function Ym(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let s=1;s<i;s++){let o=s/i;if(!Wm([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function qm(n,t,e,i,s,o,c){let u=Math.min(i.stepover,e*.95),f=Gm(t,e+c,u);if(!f.length)return;let d=tn(t,-(e+c)+.01),_=Xm(f),y=s;for(let g of Hr(s,o,i.stepdown)){for(let b of _){let E=new fr(b[0]),[P,S]=E.at(0);n.goTo(P,S,y),n.feed(P,S,y,i.plunge);let M=Ru(n,E,0,y,g,i);for(let F=1;F<b.length;F++){let X=E.at(M),R=new fr(b[F]),U=R.nearest(X);Ym(X,R.at(U),d)||([P,S]=R.at(U),n.rapid(X[0],X[1],y+1),n.rapid(P,S,y+1),n.feed(P,S,g,i.plunge)),Ws(n,R,U,U+R.length,()=>g,i.feed),E=R,M=U}}y=g}n.retract()}function Lu(n,t,e,i,s,o,c){let u=zs(di(tn(t,-e),.001),.005);for(let f of u){let d=new fr(f),[_,y]=d.at(0);n.goTo(_,y,s);for(let g of Hr(s,o,c))n.feed(_,y,g,i.plunge),Ws(n,d,0,d.length,()=>g,i.feed*.9);n.retract()}}function $m(n,t,e,i,s,o,c){let u=di(kr(t,tn(tn(t,-i),i)),.01);if(!u.length)return;let f=tn(u,e+.5);for(let d of zs(di(tn(t,-e),.001),.005)){let _=new fr(d),y=Math.max(8,Math.ceil(_.length/.25)),g=Array.from({length:y},(E,P)=>f.some(S=>ks(_.at(P/y*_.length),S)));if(g.every(Boolean)){Lu(n,t,e,s,o,c,s.stepdown);return}let b=g.indexOf(!1);for(let E=0;E<y;E++){let P=(b+E)%y;if(!g[P]||g[(P-1+y)%y])continue;let S=P;for(;g[(S+1)%y]&&S-P<y;)S++;let M=P/y*_.length,F=(S+1)/y*_.length,[X,R]=_.at(M);n.goTo(X,R,o);let U=!0;for(let z of Hr(o,c,s.stepdown)){let q=[..._.breaks(M,F),F],C=U?q:[...q.slice(0,-1).reverse(),M],[H,Y]=_.at(U?M:F);n.feed(H,Y,z,s.plunge);for(let nt of C){let[it,tt]=_.at(nt);n.feed(it,tt,z,s.feed)}U=!U}n.retract()}}}function Zm(n,t,e,i,s,o){let c=Math.min(i.stepover,e*1.6),u=t.minX-e-2,f=t.maxX+e+2;for(let d of Hr(s,o,i.stepdown)){let _=t.minY+e*.6;n.goTo(u,_,s),n.feed(u,_,d,i.plunge);let y=1;for(;n.feed(y>0?f:u,_,d,i.feed),!(_>=t.maxY-e*.6-1e-6);)_=Math.min(_+c,t.maxY-e*.6),n.feed(y>0?f:u,_,d,i.feed),y=-y}n.retract()}function Jm(n,t,e,i,s,o){let c=Math.max(.5,o*1.5);for(let u of t){n.goTo(u.x,u.y,i);let f=i;for(;f>s+1e-6;){let d=Math.max(s,f-c);f<i&&n.rapid(u.x,u.y,f+.5),n.feed(u.x,u.y,d,e.plunge),n.rapid(u.x,u.y,i+1),f=d}n.retract()}}function jm(n,t,e,i){let s=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!s)return null;let o=2*e+4,c=Array.from({length:s},(f,d)=>{let _=(d+.5)/s*n;return[_-o/2,_+o/2]}),u=n;return{top:i+t.tabs.height,inside:f=>{let d=(f%u+u)%u;return c.some(([_,y])=>d>_&&d<y)},edges:(f,d)=>{let _=[];for(let y=Math.floor(f/u);y*u<=d;y++)for(let[g,b]of c)for(let E of[g,b]){let P=y*u+E;P>f&&P<d&&_.push(P)}return _}}}function Km(n,t,e,i,s,o,c,u){let f=[{off:e+u,fd:i}];u>0&&f.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let d of f)for(let _ of ki(t).map(y=>y[0])){let y=zs(di(tn([_],d.off),.001),.005).filter(g=>Gn(g)>0);for(let g of y){let b=new fr(g.slice().reverse()),E=jm(b.length,c,e,0),[P,S]=b.at(0);n.goTo(P,S,s),n.feed(P,S,s,i.plunge);let M=0,F=s,X=d.finish?Hr(s,o,Math.max(i.stepdown,Math.min(6*e,s-o))):Hr(s,o,i.stepdown);for(let R of X)M=Ru(n,b,M,F,R,d.fd,E),F=R;n.retract()}}}function Qm(n,t){let e=c=>{let u=Bi([c[0]]);return[(u.minX+u.maxX)/2,(u.minY+u.maxY)/2]},i=n.map(c=>({a:c,m:e(c)})),s=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let c=0;for(let f=1;f<i.length;f++)Math.hypot(i[f].m[0]-o[0],i[f].m[1]-o[1])<Math.hypot(i[c].m[0]-o[0],i[c].m[1]-o[1])&&(c=f);let[u]=i.splice(c,1);s.push(u.a),o=u.m}return s}function Nu(n){let t=n.stock.top+Hm,e=(Xn[n.job.finish]||Xn.balanced).allowance,s=n.ops.some(o=>o.kind==="face"&&o.enabled)?n.analysis.top:n.stock.top;for(let o of n.ops){let c=new Sc(t),u=o.kind!=="face"&&o.zTop>=n.analysis.top-1e-6?Math.max(o.zTop,s):o.zTop,f=o.tool.diameter/2,d=o.feeds,_=Math.min(o.tool.fluteLength||1/0,3*o.tool.diameter);switch(o.kind){case"face":Zm(c,n.stock,f,d,u,o.zBottom);break;case"pocket":case"step":case"hole":for(let y of Qm(ki(o.region),c.at))qm(c,y,f,d,u,o.zBottom,e),e>0&&Lu(c,y,f,d,u,o.zBottom,_);break;case"corners":{let y=n.ops.find(g=>g.id===o.after);$m(c,o.region,f,y?y.tool.diameter/2:f*2,d,u,o.zBottom);break}case"drill":Jm(c,o.centers,d,u,o.zBottom,o.tool.diameter);break;case"cutout":Km(c,o.region,f,d,u,o.zBottom,n.job,e);break}o.moves=c.moves}return n}var Hm,Sc,fr,Du=Cn(()=>{Vs();Gs();Hm=3;Sc=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,s){this.push({x:t,y:e,z:i,f:s})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ),this.rapid(t,e,this.clearZ),this.rapid(t,e,i+1)}retract(){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ)}},fr=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],s=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(s[0]-i[0],s[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,s=1;for(;s<this.s.length-1&&this.s[s]<i;)s++;let o=this.p[s-1],c=this.p[s%this.p.length],u=this.s[s]-this.s[s-1]||1,f=(i-this.s[s-1])/u;return[o[0]+(c[0]-o[0])*f,o[1]+(c[1]-o[1])*f]}breaks(t,e){let i=[],s=this.length;for(let o=Math.floor(t/s);o*s<=e;o++)for(let c=0;c<this.p.length;c++){let u=o*s+this.s[c];u>t+1e-9&&u<e-1e-9&&i.push(u)}return i}nearest([t,e]){let i=0,s=1/0;for(let o=0;o<this.p.length;o++){let c=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;c<s&&(s=c,i=this.s[o])}return i}}});function Ou(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:s=null,spindleDelay:o=3}=t,c=Number.isFinite(s)?`G53 G0 Z${Vi(s)}`:"G53 G0 Z0",u=n.zero,f=n.stock,d=[Gr(`ncCAM: ${e}`),Gr(`Stock ${Vi(f.width)} x ${Vi(f.depth)} x ${Vi(f.thickness)} mm, ${(hr[n.job.material]||{}).name||n.job.material}, ${(Xn[n.job.finish]||{}).name||n.job.finish}`),Gr(`Zero: X Y at the ${eg[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],_=n.ops.filter(P=>P.enabled&&P.moves&&P.moves.length);for(let P of[...new Map(_.map(S=>[S.tool.id,S.tool])).values()])d.push(Gr(`T${ur(P,i)}: ${P.name}, ${Vi(P.diameter)} mm`));d.push("G21 G90 G94 G17");let y=null,g={},b=null,E=null;for(let P of _){(!y||P.tool.id!==y.id)&&(y&&d.push("M5"),d.push(c,`M6 T${ur(P.tool,i)}`,Gr(P.tool.name)),y=P.tool,d.push(`M3 S${P.feeds.rpm}`),o>0&&d.push(`G4 P${o}`),g={},b=null,E=null),d.push(Gr(`${P.label}${P.detail?": "+P.detail:""}`));for(let S of P.moves){let M=Vi(S.x-u.x),F=Vi(S.y-u.y),X=Vi(S.z-u.z);if(S.r&&(M!==g.x||F!==g.y)&&X!==g.z){let q=g.z===void 0||+X<+g.z?[`X${M} Y${F}`,`Z${X}`]:[`Z${X}`,`X${M} Y${F}`];for(let C of q)d.push(`${E==="G0"?"":"G0 "}${C}`),E="G0";g={x:M,y:F,z:X};continue}let R=S.r?"G0":"G1",U=R===E?"":R;M!==g.x&&(U+=` X${M}`),F!==g.y&&(U+=` Y${F}`),X!==g.z&&(U+=` Z${X}`),!S.r&&S.f!==b&&(U+=` F${Math.round(S.f)}`,b=S.f),U=U.trim(),!(!U||U===R)&&(d.push(U),E=R,g={x:M,y:F,z:X})}}return d.push("M5",c,"M30",""),d.join(`
`)}function Fu(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let s=0,o=null,c=null;for(let u of n.ops){if(!u.enabled||!u.moves)continue;(!c||u.tool.id!==c.id)&&(s+=e+(c?i:0),c=u.tool);let f=0;for(let d of u.moves){if(o){let _=Math.hypot(d.x-o.x,d.y-o.y,d.z-o.z);f+=_/(d.r?t:d.f)*60}o=d}u.seconds=f,s+=f}return s}var Vi,tg,Gr,eg,Uu=Cn(()=>{Gs();Vi=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},tg={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Gr=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>tg[t]??"")})`,eg={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});function bc(n,t){let e=n.diameter/2,i=Math.ceil(e/t),s=[];for(let o=-i;o<=i;o++)for(let c=-i;c<=i;c++){let u=Math.hypot(c,o)*t;if(u>e+1e-6)continue;let f=Math.min(u,e),d=0;if(n.kind==="ball")d=e-Math.sqrt(Math.max(0,e*e-f*f));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let _=(n.angle||(n.kind==="drill"?118:60))*Math.PI/360;d=f/Math.tan(_)}s.push(c,o,d)}return Float32Array.from(s)}function ng(n,t,e,i,s,o){let c=Math.hypot(i.x-e.x,i.y-e.y),u=Math.max(1,Math.ceil(c/(n.cell*.5))),f=!1;for(let d=s?0:1;d<=u;d++){let _=d/u,y=(e.x+(i.x-e.x)*_-n.x0)/n.cell,g=(e.y+(i.y-e.y)*_-n.y0)/n.cell,b=e.z+(i.z-e.z)*_;if(b>=n.top)continue;let E=Math.round(y),P=Math.round(g);for(let S=0;S<t.length;S+=3){let M=E+t[S],F=P+t[S+1];if(M<0||F<0||M>=n.nx||F>=n.ny)continue;let X=F*n.nx+M,R=b+t[S+2];if(n.h[X]>R+1e-4){if(s){n.h[X]>R+.05&&(f=!0);continue}n.h[X]=R,n.op[X]=o+1}}}return f}function Bu(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function wc(n,t,e,i,s){let o=t.diameter/2,c=n.cell,u=o/c,f=t.kind==="ball"?tt=>o-Math.sqrt(Math.max(0,o*o-tt*tt)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(tt=>K=>K/tt)(Math.tan((t.angle||(t.kind==="drill"?118:60))*Math.PI/360)):()=>0,d=!t.kind||t.kind==="flat"||t.kind==="surfacing",{h:_,sx:y,sy:g,wx:b,wy:E,gap:P,deep:S,nx:M,ny:F}=n,X=1.5*c,R=u+1.5,U=(tt,K,B,et)=>{let V=Math.hypot(K,B);if(V>R)return;let dt=V*c;if(dt<=o){let ct=et+f(dt);if(_[tt]>ct+1e-4)_[tt]=ct,n.op[tt]=s+1,P[tt]=1/0,S[tt]=-1/0;else if(_[tt]<ct-1e-4)return;o-dt>S[tt]&&(S[tt]=o-dt,d&&o-dt<X&&V>1e-6?(y[tt]=K/V*(o-dt),g[tt]=B/V*(o-dt),b[tt]=-K/V,E[tt]=-B/V):(y[tt]=0,g[tt]=0,b[tt]=0,E[tt]=0))}else d&&_[tt]>et+1e-4&&dt-o<P[tt]&&(P[tt]=dt-o,y[tt]=K/V*(o-dt),g[tt]=B/V*(o-dt),b[tt]=-K/V,E[tt]=-B/V)},z=(e.x-n.x0)/c,q=(e.y-n.y0)/c,C=(i.x-n.x0)/c,H=(i.y-n.y0)/c;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let tt=C-z,K=H-q,B=tt*tt+K*K,et=Math.max(0,Math.floor(Math.min(z,C)-R)),V=Math.min(M-1,Math.ceil(Math.max(z,C)+R)),dt=Math.max(0,Math.floor(Math.min(q,H)-R)),ct=Math.min(F-1,Math.ceil(Math.max(q,H)+R));for(let _t=dt;_t<=ct;_t++)for(let Mt=et;Mt<=V;Mt++){let Pt=B>0?Math.max(0,Math.min(1,((Mt-z)*tt+(_t-q)*K)/B)):0;U(_t*M+Mt,Mt-(z+tt*Pt),_t-(q+K*Pt),e.z)}return}let Y=Math.hypot(i.x-e.x,i.y-e.y),nt=Math.max(1,Math.ceil(Y/(c*.5))),it=Math.ceil(R);for(let tt=1;tt<=nt;tt++){let K=tt/nt,B=z+(C-z)*K,et=q+(H-q)*K,V=e.z+(i.z-e.z)*K;if(V>=n.top)continue;let dt=Math.max(0,Math.floor(B-it)),ct=Math.min(M-1,Math.ceil(B+it)),_t=Math.max(0,Math.floor(et-it)),Mt=Math.min(F-1,Math.ceil(et+it));for(let Pt=_t;Pt<=Mt;Pt++)for(let Ut=dt;Ut<=ct;Ut++)U(Pt*M+Ut,Ut-B,Pt-et,V)}}function ku(n,t){let e=new Hi(n.stock,t||Hi.cellFor(n.stock)),i=[];return n.ops.forEach((s,o)=>{if(!s.enabled||!s.moves)return;let c=bc(s.tool,e.cell),u=null;for(let f of s.moves)u&&ng(e,c,u,f,!!f.r,o)&&i.push({op:s.id,at:f}),u=f}),{hm:e,collisions:i}}var Hi,zu=Cn(()=>{Hi=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});var Ec=Cn(()=>{vc();Iu();Du();Uu();zu();Gs();Vs()});function rg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function sg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function td(){let n=ro("canvas");return n.style.display="block",n}function so(...n){let t="THREE."+n.shift();us?us("log",t,...n):console.log(t,...n)}function ed(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function he(...n){n=ed(n);let t="THREE."+n.shift();if(us)us("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function de(...n){n=ed(n);let t="THREE."+n.shift();if(us)us("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function _r(...n){let t=n.join(" ");t in Gu||(Gu[t]=!0,he(...n))}function nd(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Ri(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function Ih(n,t){return(n%t+t)%t}function og(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function ag(n,t,e){return n!==t?(e-n)/(t-n):0}function to(n,t,e){return(1-e)*n+e*t}function lg(n,t,e,i){return to(n,t,1-Math.exp(-e*i))}function cg(n,t=1){return t-Math.abs(Ih(n,t*2)-t)}function hg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ug(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function fg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function dg(n,t){return n+Math.random()*(t-n)}function pg(n){return n*(.5-Math.random())}function mg(n){n!==void 0&&(Xu=n);let t=Xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gg(n){return n*as}function _g(n){return n*fs}function vg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function yg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mg(n,t,e,i,s){let o=Math.cos,c=Math.sin,u=o(e/2),f=c(e/2),d=o((t+i)/2),_=c((t+i)/2),y=o((t-i)/2),g=c((t-i)/2),b=o((i-t)/2),E=c((i-t)/2);switch(s){case"XYX":n.set(u*_,f*y,f*g,u*d);break;case"YZY":n.set(f*g,u*_,f*y,u*d);break;case"ZXZ":n.set(f*y,f*g,u*_,u*d);break;case"XZX":n.set(u*_,f*E,f*b,u*d);break;case"YXY":n.set(f*b,u*_,f*E,u*d);break;case"ZYZ":n.set(f*E,f*b,u*_,u*d);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sg(){let n={enabled:!0,workingColorSpace:no,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ue&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ue&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return _r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return _r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[no]:{primaries:t,whitePoint:i,transfer:io,toXYZ:Yu,fromXYZ:qu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:Yu,fromXYZ:qu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),n}function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}function Lc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function zc(n,t,e,i,s){for(let o=0,c=n.length-3;o<=c;o+=3){pr.fromArray(n,o);let u=s.x*Math.abs(pr.x)+s.y*Math.abs(pr.y)+s.z*Math.abs(pr.z),f=t.dot(pr),d=e.dot(pr),_=i.dot(pr);if(Math.max(-Math.max(f,d,_),Math.min(f,d,_))>u)return!1}return!0}function sa(n,t,e,i,s,o){is.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(js.x=o*is.x-s*is.y,js.y=s*is.x+o*is.y):js.copy(is),n.copy(t),n.x+=js.x,n.y+=js.y,n.applyMatrix4(sd)}function Bg(n,t,e,i,s,o,c,u){let f;if(t.side===En?f=i.intersectTriangle(c,o,s,!0,u):f=i.intersectTriangle(s,o,c,t.side===ir,u),f===null)return null;da.copy(u),da.applyMatrix4(n.matrixWorld);let d=e.ray.origin.distanceTo(da);return d<e.near||d>e.far?null:{distance:d,point:da.clone(),object:n}}function pa(n,t,e,i,s,o,c,u,f,d){n.getVertexPosition(u,ca),n.getVertexPosition(f,ha),n.getVertexPosition(d,ua);let _=Bg(n,t,e,i,ca,ha,ua,af);if(_){let y=new lt;mi.getBarycoord(af,ca,ha,ua,y),s&&(_.uv=mi.getInterpolatedAttribute(s,u,f,d,y,new oe)),o&&(_.uv1=mi.getInterpolatedAttribute(o,u,f,d,y,new oe)),c&&(_.normal=mi.getInterpolatedAttribute(c,u,f,d,y,new lt),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));let g={a:u,b:f,c:d,normal:new lt,materialIndex:0};mi.getNormal(ca,ha,ua,g.normal),_.face=g,_.barycoord=y}return _}function _a(n,t,e,i,s,o,c){let u=n.geometry.attributes.position;if(Va.fromBufferAttribute(u,s),Ha.fromBufferAttribute(u,o),e.distanceSqToSegment(Va,Ha,qc,cf)>i)return;qc.applyMatrix4(n.matrixWorld);let d=t.ray.origin.distanceTo(qc);if(!(d<t.near||d>t.far))return{distance:d,point:cf.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}function Tr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(ff(s))s.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ff(s[0])){let o=[];for(let c=0,u=s.length;c<u;c++)o[c]=s[c].clone();t[e][i]=o}else t[e][i]=s.slice();else t[e][i]=s}}return t}function xn(n){let t={};for(let e=0;e<n.length;e++){let i=Tr(n[e]);for(let s in i)t[s]=i[s]}return t}function ff(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function zg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Lh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}function rs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Zc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function ad(n,t,e,i,s){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*s}function Gg(n,t,e,i,s){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(s-i)}function Xg(n,t,e,i,s){let o=(n-t)/(s-t);for(let c=0;c<8;c++){let u=ad(o,t,e,i,s)-n;if(Math.abs(u)<1e-10)break;let f=Gg(o,t,e,i,s);if(Math.abs(f)<1e-10)break;o=Math.max(0,Math.min(1,o-u/f))}return o}function df(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function yf(n,t){return n.distance-t.distance}function rh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let o=n.children;for(let c=0,u=o.length;c<u;c++)rh(o[c],t,e,!0)}}function Oh(n,t,e,i){let s=Qg(i);switch(e){case Eh:return n*t;case Ah:return n*t/s.components*s.byteLength;case fl:return n*t/s.components*s.byteLength;case ar:return n*t*2/s.components*s.byteLength;case dl:return n*t*2/s.components*s.byteLength;case Th:return n*t*3/s.components*s.byteLength;case Yn:return n*t*4/s.components*s.byteLength;case pl:return n*t*4/s.components*s.byteLength;case Po:case Io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gl:case vl:return Math.max(n,16)*Math.max(t,8)/4;case ml:case _l:return Math.max(n,8)*Math.max(t,8)/2;case yl:case xl:case Sl:case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ml:case No:case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case kl:case zl:case Vl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Hl:case Gl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Do:case Xl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qg(n){switch(n){case Rn:case Mh:return{byteLength:1,components:1};case Es:case Sh:case ci:return{byteLength:2,components:1};case hl:case ul:return{byteLength:2,components:4};case ai:case cl:case li:return{byteLength:4,components:1};case bh:case wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var er,nr,Mf,oh,Sf,To,bf,bs,ir,En,yn,yi,ws,ah,lh,ch,wf,br,Ef,Tf,Af,Cf,Pf,If,Rf,Lf,hh,uh,Nf,Df,Of,Ff,Uf,Bf,kf,zf,Vf,Ta,Aa,Ca,cs,Pa,Ia,Ra,La,fh,Hf,Gf,oi,dh,ph,mh,gh,_h,vh,yh,xh,rr,wr,ol,al,Ao,Na,gi,Da,cn,Xf,Co,fn,ll,sr,Rn,Mh,Sh,Es,cl,ai,li,ci,hl,ul,Ts,bh,wh,Eh,Th,Yn,_i,or,Ah,fl,ar,dl,pl,Po,Io,Ro,Lo,ml,gl,_l,vl,yl,xl,Ml,Sl,bl,No,wl,El,Tl,Al,Cl,Pl,Il,Rl,Ll,Nl,Dl,Ol,Fl,Ul,Bl,kl,zl,Vl,Hl,Gl,Do,Xl,eo,Oa,wa,Kc,Qc,th,eh,Wf,Wl,Yf,Di,bn,no,io,Ue,Ea,qf,$f,Zf,Jf,Yl,jf,Kf,ql,Qf,Ch,Er,Ph,ei,hs,Gu,us,id,ii,gn,Xu,as,fs,Rh,oe,Un,lt,Ac,Wu,Se,Cc,Yu,qu,Ce,Xr,Fa,bg,ds,wg,Ic,wn,Je,Ua,In,oo,Ba,Ye,Wr,jn,Eg,Tg,Gi,Jo,Dn,$u,Zu,Ni,ps,Ag,Ju,Yr,Ti,jo,Ys,Cg,Pg,ju,Ku,Qu,tf,Ig,qr,Rc,nn,ni,Rg,ms,rd,Xi,Ko,ve,_n,ao,Kn,Ai,Nc,Ci,$r,Zr,ef,Dc,Oc,Fc,Uc,Bc,kc,mi,$i,Pi,Qn,Qo,Jr,jr,Kr,Wi,Yi,dr,qs,ta,ea,pr,en,na,Lg,Ge,lo,co,Xe,Ng,$s,Vc,vr,Dg,Wn,Hc,Qr,On,Zs,ln,Ze,ka,Sn,ho,Gc,Og,Fg,Fn,Ug,vi,gs,ts,Js,es,ns,is,js,sd,ia,Ks,ra,nf,Xc,rf,uo,Ii,Wc,oa,aa,Zi,ri,sf,mr,la,of,ca,ha,ua,Yc,fa,af,da,Ve,za,gr,kg,ma,_s,si,Va,Ha,lf,Qs,ga,qc,cf,yr,hf,uf,xr,fo,po,Ji,Ga,mo,ji,Mr,vs,va,ya,$c,xa,ys,go,_o,Sr,od,Vg,Hg,Bn,Xa,kn,Wa,Ya,vo,Ki,qa,$a,Za,Ja,zn,Qi,ja,Ka,Qa,yo,tr,tl,el,ld,nl,xo,Mo,Jc,pf,mf,il,Ma,Sa,pi,So,qi,gf,_f,vn,xs,nh,Ms,ss,os,rl,sl,Nh,Wg,Dh,Yg,qg,$g,Zg,Jg,jg,Kg,ih,$e,BM,vf,bo,Ss,sh,xf,ba,jc,wo,Eo,Fh=Cn(()=>{er={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mf=0,oh=1,Sf=2,To=1,bf=2,bs=3,ir=0,En=1,yn=2,yi=0,ws=1,ah=2,lh=3,ch=4,wf=5,br=100,Ef=101,Tf=102,Af=103,Cf=104,Pf=200,If=201,Rf=202,Lf=203,hh=204,uh=205,Nf=206,Df=207,Of=208,Ff=209,Uf=210,Bf=211,kf=212,zf=213,Vf=214,Ta=0,Aa=1,Ca=2,cs=3,Pa=4,Ia=5,Ra=6,La=7,fh=0,Hf=1,Gf=2,oi=0,dh=1,ph=2,mh=3,gh=4,_h=5,vh=6,yh=7,xh=300,rr=301,wr=302,ol=303,al=304,Ao=306,Na=1e3,gi=1001,Da=1002,cn=1003,Xf=1004,Co=1005,fn=1006,ll=1007,sr=1008,Rn=1009,Mh=1010,Sh=1011,Es=1012,cl=1013,ai=1014,li=1015,ci=1016,hl=1017,ul=1018,Ts=1020,bh=35902,wh=35899,Eh=1021,Th=1022,Yn=1023,_i=1026,or=1027,Ah=1028,fl=1029,ar=1030,dl=1031,pl=1033,Po=33776,Io=33777,Ro=33778,Lo=33779,ml=35840,gl=35841,_l=35842,vl=35843,yl=36196,xl=37492,Ml=37496,Sl=37488,bl=37489,No=37490,wl=37491,El=37808,Tl=37809,Al=37810,Cl=37811,Pl=37812,Il=37813,Rl=37814,Ll=37815,Nl=37816,Dl=37817,Ol=37818,Fl=37819,Ul=37820,Bl=37821,kl=36492,zl=36494,Vl=36495,Hl=36283,Gl=36284,Do=36285,Xl=36286,eo=2300,Oa=2301,wa=2302,Kc=2303,Qc=2400,th=2401,eh=2402,Wf=3200,Wl=0,Yf=1,Di="",bn="srgb",no="srgb-linear",io="linear",Ue="srgb",Ea=7680,qf=519,$f=512,Zf=513,Jf=514,Yl=515,jf=516,Kf=517,ql=518,Qf=519,Ch=35044,Er=35048,Ph="300 es",ei=2e3,hs=2001;Gu={},us=null;id={[Ta]:Aa,[Ca]:Ra,[Pa]:La,[cs]:Ia,[Aa]:Ta,[Ra]:Ca,[La]:Pa,[Ia]:cs},ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=1234567,as=Math.PI/180,fs=180/Math.PI;Rh={DEG2RAD:as,RAD2DEG:fs,generateUUID:Ri,clamp:Te,euclideanModulo:Ih,mapLinear:og,inverseLerp:ag,lerp:to,damp:lg,pingpong:cg,smoothstep:hg,smootherstep:ug,randInt:fg,randFloat:dg,randFloatSpread:pg,seededRandom:mg,degToRad:gg,radToDeg:_g,isPowerOfTwo:vg,ceilPowerOfTwo:yg,floorPowerOfTwo:xg,setQuaternionFromProperEuler:Mg,normalize:ke,denormalize:ti},oe=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*s+t.x,this.y=o*s+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,c,u){let f=i[s+0],d=i[s+1],_=i[s+2],y=i[s+3],g=o[c+0],b=o[c+1],E=o[c+2],P=o[c+3];if(y!==P||f!==g||d!==b||_!==E){let S=f*g+d*b+_*E+y*P;S<0&&(g=-g,b=-b,E=-E,P=-P,S=-S);let M=1-u;if(S<.9995){let F=Math.acos(S),X=Math.sin(F);M=Math.sin(M*F)/X,u=Math.sin(u*F)/X,f=f*M+g*u,d=d*M+b*u,_=_*M+E*u,y=y*M+P*u}else{f=f*M+g*u,d=d*M+b*u,_=_*M+E*u,y=y*M+P*u;let F=1/Math.sqrt(f*f+d*d+_*_+y*y);f*=F,d*=F,_*=F,y*=F}}t[e]=f,t[e+1]=d,t[e+2]=_,t[e+3]=y}static multiplyQuaternionsFlat(t,e,i,s,o,c){let u=i[s],f=i[s+1],d=i[s+2],_=i[s+3],y=o[c],g=o[c+1],b=o[c+2],E=o[c+3];return t[e]=u*E+_*y+f*b-d*g,t[e+1]=f*E+_*g+d*y-u*b,t[e+2]=d*E+_*b+u*g-f*y,t[e+3]=_*E-u*y-f*g-d*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,c=t._order,u=Math.cos,f=Math.sin,d=u(i/2),_=u(s/2),y=u(o/2),g=f(i/2),b=f(s/2),E=f(o/2);switch(c){case"XYZ":this._x=g*_*y+d*b*E,this._y=d*b*y-g*_*E,this._z=d*_*E+g*b*y,this._w=d*_*y-g*b*E;break;case"YXZ":this._x=g*_*y+d*b*E,this._y=d*b*y-g*_*E,this._z=d*_*E-g*b*y,this._w=d*_*y+g*b*E;break;case"ZXY":this._x=g*_*y-d*b*E,this._y=d*b*y+g*_*E,this._z=d*_*E+g*b*y,this._w=d*_*y-g*b*E;break;case"ZYX":this._x=g*_*y-d*b*E,this._y=d*b*y+g*_*E,this._z=d*_*E-g*b*y,this._w=d*_*y+g*b*E;break;case"YZX":this._x=g*_*y+d*b*E,this._y=d*b*y+g*_*E,this._z=d*_*E-g*b*y,this._w=d*_*y-g*b*E;break;case"XZY":this._x=g*_*y-d*b*E,this._y=d*b*y-g*_*E,this._z=d*_*E+g*b*y,this._w=d*_*y+g*b*E;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],c=e[1],u=e[5],f=e[9],d=e[2],_=e[6],y=e[10],g=i+u+y;if(g>0){let b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(_-f)*b,this._y=(o-d)*b,this._z=(c-s)*b}else if(i>u&&i>y){let b=2*Math.sqrt(1+i-u-y);this._w=(_-f)/b,this._x=.25*b,this._y=(s+c)/b,this._z=(o+d)/b}else if(u>y){let b=2*Math.sqrt(1+u-i-y);this._w=(o-d)/b,this._x=(s+c)/b,this._y=.25*b,this._z=(f+_)/b}else{let b=2*Math.sqrt(1+y-i-u);this._w=(c-s)/b,this._x=(o+d)/b,this._y=(f+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,c=t._w,u=e._x,f=e._y,d=e._z,_=e._w;return this._x=i*_+c*u+s*d-o*f,this._y=s*_+c*f+o*u-i*d,this._z=o*_+c*d+i*f-s*u,this._w=c*_-i*u-s*f-o*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,o=t._z,c=t._w,u=this.dot(t);u<0&&(i=-i,s=-s,o=-o,c=-c,u=-u);let f=1-e;if(u<.9995){let d=Math.acos(u),_=Math.sin(d);f=Math.sin(f*d)/_,e=Math.sin(e*d)/_,this._x=this._x*f+i*e,this._y=this._y*f+s*e,this._z=this._z*f+o*e,this._w=this._w*f+c*e,this._onChangeCallback()}else this._x=this._x*f+i*e,this._y=this._y*f+s*e,this._z=this._z*f+o*e,this._w=this._w*f+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lt=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,c=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,c=t.y,u=t.z,f=t.w,d=2*(c*s-u*i),_=2*(u*e-o*s),y=2*(o*i-c*e);return this.x=e+f*d+c*y-u*_,this.y=i+f*_+u*d-o*y,this.z=s+f*y+o*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,c=e.x,u=e.y,f=e.z;return this.x=s*f-o*u,this.y=o*c-i*f,this.z=i*u-s*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ac.copy(this).projectOnVector(t),this.sub(Ac)}reflect(t){return this.sub(Ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ac=new lt,Wu=new Un,Se=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,o,c,u,f,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,c,u,f,d)}set(t,e,i,s,o,c,u,f,d){let _=this.elements;return _[0]=t,_[1]=s,_[2]=u,_[3]=e,_[4]=o,_[5]=f,_[6]=i,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,c=i[0],u=i[3],f=i[6],d=i[1],_=i[4],y=i[7],g=i[2],b=i[5],E=i[8],P=s[0],S=s[3],M=s[6],F=s[1],X=s[4],R=s[7],U=s[2],z=s[5],q=s[8];return o[0]=c*P+u*F+f*U,o[3]=c*S+u*X+f*z,o[6]=c*M+u*R+f*q,o[1]=d*P+_*F+y*U,o[4]=d*S+_*X+y*z,o[7]=d*M+_*R+y*q,o[2]=g*P+b*F+E*U,o[5]=g*S+b*X+E*z,o[8]=g*M+b*R+E*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],_=t[8];return e*c*_-e*u*d-i*o*_+i*u*f+s*o*d-s*c*f}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],_=t[8],y=_*c-u*d,g=u*f-_*o,b=d*o-c*f,E=e*y+i*g+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/E;return t[0]=y*P,t[1]=(s*d-_*i)*P,t[2]=(u*i-s*c)*P,t[3]=g*P,t[4]=(_*e-s*f)*P,t[5]=(s*o-u*e)*P,t[6]=b*P,t[7]=(i*f-d*e)*P,t[8]=(c*e-i*o)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,c,u){let f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*c+d*u)+c+t,-s*d,s*f,-s*(-d*c+f*u)+u+e,0,0,1),this}scale(t,e){return _r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cc.makeScale(t,e)),this}rotate(t){return _r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cc.makeRotation(-t)),this}translate(t,e){return _r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Cc=new Se,Yu=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qu=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ce=Sg();Fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xr===void 0&&(Xr=ro("canvas")),Xr.width=t.width,Xr.height=t.height;let s=Xr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Xr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ro("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=Li(o[c]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bg=0,ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?o.push(Pc(s[c].image)):o.push(Pc(s[c]))}else o=Pc(s);i.url=o}return e||(t.images[this.uuid]=i),i}};wg=0,Ic=new lt,wn=class n extends ii{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gi,s=gi,o=fn,c=sr,u=Yn,f=Rn,d=n.DEFAULT_ANISOTROPY,_=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Ri(),this.name="",this.source=new ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ic).x}get height(){return this.source.getSize(Ic).y}get depth(){return this.source.getSize(Ic).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){he(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){he(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Na:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Na:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=xh;wn.DEFAULT_ANISOTROPY=1;Je=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*e+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*e+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*e+c[7]*i+c[11]*s+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,f=t.elements,d=f[0],_=f[4],y=f[8],g=f[1],b=f[5],E=f[9],P=f[2],S=f[6],M=f[10];if(Math.abs(_-g)<.01&&Math.abs(y-P)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(y+P)<.1&&Math.abs(E+S)<.1&&Math.abs(d+b+M-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let X=(d+1)/2,R=(b+1)/2,U=(M+1)/2,z=(_+g)/4,q=(y+P)/4,C=(E+S)/4;return X>R&&X>U?X<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(X),s=z/i,o=q/i):R>U?R<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(R),i=z/s,o=C/s):U<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(U),i=q/o,s=C/o),this.set(i,s,o,e),this}let F=Math.sqrt((S-E)*(S-E)+(y-P)*(y-P)+(g-_)*(g-_));return Math.abs(F)<.001&&(F=1),this.x=(S-E)/F,this.y=(y-P)/F,this.z=(g-_)/F,this.w=Math.acos((d+b+M-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ua=class extends ii{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},o=new wn(s),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Ua{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},oo=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Ba=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Ye=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,o,c,u,f,d,_,y,g,b,E,P,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,c,u,f,d,_,y,g,b,E,P,S)}set(t,e,i,s,o,c,u,f,d,_,y,g,b,E,P,S){let M=this.elements;return M[0]=t,M[4]=e,M[8]=i,M[12]=s,M[1]=o,M[5]=c,M[9]=u,M[13]=f,M[2]=d,M[6]=_,M[10]=y,M[14]=g,M[3]=b,M[7]=E,M[11]=P,M[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Wr.setFromMatrixColumn(t,0).length(),o=1/Wr.setFromMatrixColumn(t,1).length(),c=1/Wr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),_=Math.cos(o),y=Math.sin(o);if(t.order==="XYZ"){let g=c*_,b=c*y,E=u*_,P=u*y;e[0]=f*_,e[4]=-f*y,e[8]=d,e[1]=b+E*d,e[5]=g-P*d,e[9]=-u*f,e[2]=P-g*d,e[6]=E+b*d,e[10]=c*f}else if(t.order==="YXZ"){let g=f*_,b=f*y,E=d*_,P=d*y;e[0]=g+P*u,e[4]=E*u-b,e[8]=c*d,e[1]=c*y,e[5]=c*_,e[9]=-u,e[2]=b*u-E,e[6]=P+g*u,e[10]=c*f}else if(t.order==="ZXY"){let g=f*_,b=f*y,E=d*_,P=d*y;e[0]=g-P*u,e[4]=-c*y,e[8]=E+b*u,e[1]=b+E*u,e[5]=c*_,e[9]=P-g*u,e[2]=-c*d,e[6]=u,e[10]=c*f}else if(t.order==="ZYX"){let g=c*_,b=c*y,E=u*_,P=u*y;e[0]=f*_,e[4]=E*d-b,e[8]=g*d+P,e[1]=f*y,e[5]=P*d+g,e[9]=b*d-E,e[2]=-d,e[6]=u*f,e[10]=c*f}else if(t.order==="YZX"){let g=c*f,b=c*d,E=u*f,P=u*d;e[0]=f*_,e[4]=P-g*y,e[8]=E*y+b,e[1]=y,e[5]=c*_,e[9]=-u*_,e[2]=-d*_,e[6]=b*y+E,e[10]=g-P*y}else if(t.order==="XZY"){let g=c*f,b=c*d,E=u*f,P=u*d;e[0]=f*_,e[4]=-y,e[8]=d*_,e[1]=g*y+P,e[5]=c*_,e[9]=b*y-E,e[2]=E*y-b,e[6]=u*_,e[10]=P*y+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Eg,t,Tg)}lookAt(t,e,i){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Gi.crossVectors(i,Dn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Gi.crossVectors(i,Dn)),Gi.normalize(),Jo.crossVectors(Dn,Gi),s[0]=Gi.x,s[4]=Jo.x,s[8]=Dn.x,s[1]=Gi.y,s[5]=Jo.y,s[9]=Dn.y,s[2]=Gi.z,s[6]=Jo.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,c=i[0],u=i[4],f=i[8],d=i[12],_=i[1],y=i[5],g=i[9],b=i[13],E=i[2],P=i[6],S=i[10],M=i[14],F=i[3],X=i[7],R=i[11],U=i[15],z=s[0],q=s[4],C=s[8],H=s[12],Y=s[1],nt=s[5],it=s[9],tt=s[13],K=s[2],B=s[6],et=s[10],V=s[14],dt=s[3],ct=s[7],_t=s[11],Mt=s[15];return o[0]=c*z+u*Y+f*K+d*dt,o[4]=c*q+u*nt+f*B+d*ct,o[8]=c*C+u*it+f*et+d*_t,o[12]=c*H+u*tt+f*V+d*Mt,o[1]=_*z+y*Y+g*K+b*dt,o[5]=_*q+y*nt+g*B+b*ct,o[9]=_*C+y*it+g*et+b*_t,o[13]=_*H+y*tt+g*V+b*Mt,o[2]=E*z+P*Y+S*K+M*dt,o[6]=E*q+P*nt+S*B+M*ct,o[10]=E*C+P*it+S*et+M*_t,o[14]=E*H+P*tt+S*V+M*Mt,o[3]=F*z+X*Y+R*K+U*dt,o[7]=F*q+X*nt+R*B+U*ct,o[11]=F*C+X*it+R*et+U*_t,o[15]=F*H+X*tt+R*V+U*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],c=t[1],u=t[5],f=t[9],d=t[13],_=t[2],y=t[6],g=t[10],b=t[14],E=t[3],P=t[7],S=t[11],M=t[15],F=f*b-d*g,X=u*b-d*y,R=u*g-f*y,U=c*b-d*_,z=c*g-f*_,q=c*y-u*_;return e*(P*F-S*X+M*R)-i*(E*F-S*U+M*z)+s*(E*X-P*U+M*q)-o*(E*R-P*z+S*q)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[1],c=t[5],u=t[9],f=t[2],d=t[6],_=t[10];return e*(c*_-u*d)-i*(o*_-u*f)+s*(o*d-c*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],_=t[8],y=t[9],g=t[10],b=t[11],E=t[12],P=t[13],S=t[14],M=t[15],F=e*u-i*c,X=e*f-s*c,R=e*d-o*c,U=i*f-s*u,z=i*d-o*u,q=s*d-o*f,C=_*P-y*E,H=_*S-g*E,Y=_*M-b*E,nt=y*S-g*P,it=y*M-b*P,tt=g*M-b*S,K=F*tt-X*it+R*nt+U*Y-z*H+q*C;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/K;return t[0]=(u*tt-f*it+d*nt)*B,t[1]=(s*it-i*tt-o*nt)*B,t[2]=(P*q-S*z+M*U)*B,t[3]=(g*z-y*q-b*U)*B,t[4]=(f*Y-c*tt-d*H)*B,t[5]=(e*tt-s*Y+o*H)*B,t[6]=(S*R-E*q-M*X)*B,t[7]=(_*q-g*R+b*X)*B,t[8]=(c*it-u*Y+d*C)*B,t[9]=(i*Y-e*it-o*C)*B,t[10]=(E*z-P*R+M*F)*B,t[11]=(y*R-_*z-b*F)*B,t[12]=(u*H-c*nt-f*C)*B,t[13]=(e*nt-i*H+s*C)*B,t[14]=(P*X-E*U-S*F)*B,t[15]=(_*U-y*X+g*F)*B,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,c=t.x,u=t.y,f=t.z,d=o*c,_=o*u;return this.set(d*c+i,d*u-s*f,d*f+s*u,0,d*u+s*f,_*u+i,_*f-s*c,0,d*f-s*u,_*f+s*c,o*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,c){return this.set(1,i,o,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,c=e._y,u=e._z,f=e._w,d=o+o,_=c+c,y=u+u,g=o*d,b=o*_,E=o*y,P=c*_,S=c*y,M=u*y,F=f*d,X=f*_,R=f*y,U=i.x,z=i.y,q=i.z;return s[0]=(1-(P+M))*U,s[1]=(b+R)*U,s[2]=(E-X)*U,s[3]=0,s[4]=(b-R)*z,s[5]=(1-(g+M))*z,s[6]=(S+F)*z,s[7]=0,s[8]=(E+X)*q,s[9]=(S-F)*q,s[10]=(1-(g+P))*q,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let c=Wr.set(s[0],s[1],s[2]).length(),u=Wr.set(s[4],s[5],s[6]).length(),f=Wr.set(s[8],s[9],s[10]).length();o<0&&(c=-c),jn.copy(this);let d=1/c,_=1/u,y=1/f;return jn.elements[0]*=d,jn.elements[1]*=d,jn.elements[2]*=d,jn.elements[4]*=_,jn.elements[5]*=_,jn.elements[6]*=_,jn.elements[8]*=y,jn.elements[9]*=y,jn.elements[10]*=y,e.setFromRotationMatrix(jn),i.x=c,i.y=u,i.z=f,this}makePerspective(t,e,i,s,o,c,u=ei,f=!1){let d=this.elements,_=2*o/(e-t),y=2*o/(i-s),g=(e+t)/(e-t),b=(i+s)/(i-s),E,P;if(f)E=o/(c-o),P=c*o/(c-o);else if(u===ei)E=-(c+o)/(c-o),P=-2*c*o/(c-o);else if(u===hs)E=-c/(c-o),P=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=y,d[9]=b,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=P,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,s,o,c,u=ei,f=!1){let d=this.elements,_=2/(e-t),y=2/(i-s),g=-(e+t)/(e-t),b=-(i+s)/(i-s),E,P;if(f)E=1/(c-o),P=c/(c-o);else if(u===ei)E=-2/(c-o),P=-(c+o)/(c-o);else if(u===hs)E=-1/(c-o),P=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=y,d[9]=0,d[13]=b,d[2]=0,d[6]=0,d[10]=E,d[14]=P,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Wr=new lt,jn=new Ye,Eg=new lt(0,0,0),Tg=new lt(1,1,1),Gi=new lt,Jo=new lt,Dn=new lt,$u=new Ye,Zu=new Un,Ni=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],c=s[4],u=s[8],f=s[1],d=s[5],_=s[9],y=s[2],g=s[6],b=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(u,b),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-y,o),this._z=0);break;case"ZXY":this._x=Math.asin(Te(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,b),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Te(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-y,o)):(this._x=0,this._y=Math.atan2(u,b));break;case"XZY":this._z=Math.asin(-Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-_,b),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $u.makeRotationFromQuaternion(t),this.setFromRotationMatrix($u,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";ps=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ag=0,Ju=new lt,Yr=new Un,Ti=new Ye,jo=new lt,Ys=new lt,Cg=new lt,Pg=new Un,ju=new lt(1,0,0),Ku=new lt(0,1,0),Qu=new lt(0,0,1),tf={type:"added"},Ig={type:"removed"},qr={type:"childadded",child:null},Rc={type:"childremoved",child:null},nn=class n extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new lt,e=new Ni,i=new Un,s=new lt(1,1,1);function o(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Se}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.premultiply(Yr),this}rotateX(t){return this.rotateOnAxis(ju,t)}rotateY(t){return this.rotateOnAxis(Ku,t)}rotateZ(t){return this.rotateOnAxis(Qu,t)}translateOnAxis(t,e){return Ju.copy(t).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ju,t)}translateY(t){return this.translateOnAxis(Ku,t)}translateZ(t){return this.translateOnAxis(Qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?jo.copy(t):jo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Ys,jo,this.up):Ti.lookAt(jo,Ys,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Yr.setFromRotationMatrix(Ti),this.quaternion.premultiply(Yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(de("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tf),qr.child=t,this.dispatchEvent(qr),qr.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ig),Rc.child=t,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tf),qr.child=t,this.dispatchEvent(qr),qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,Cg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Pg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*s,o[13]+=i-o[1]*e-o[5]*i-o[9]*s,o[14]+=s-o[2]*e-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){let f=u.shapes;if(Array.isArray(f))for(let d=0,_=f.length;d<_;d++){let y=f[d];o(t.shapes,y)}else o(t.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(t.materials,this.material[f]));s.material=u}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){let f=this.animations[u];s.animations.push(o(t.animations,f))}}if(e){let u=c(t.geometries),f=c(t.materials),d=c(t.textures),_=c(t.images),y=c(t.shapes),g=c(t.skeletons),b=c(t.animations),E=c(t.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),_.length>0&&(i.images=_),y.length>0&&(i.shapes=y),g.length>0&&(i.skeletons=g),b.length>0&&(i.animations=b),E.length>0&&(i.nodes=E)}return i.object=s,i;function c(u){let f=[];for(let d in u){let _=u[d];delete _.metadata,f.push(_)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};nn.DEFAULT_UP=new lt(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ni=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,c=null,u=this._targetRay,f=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(let P of t.hand.values()){let S=e.getJointPose(P,i),M=this._getHandJoint(d,P);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}let _=d.joints["index-finger-tip"],y=d.joints["thumb-tip"],g=_.position.distanceTo(y.position),b=.02,E=.005;d.inputState.pinching&&g>b+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=b-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:t,target:this})));u!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ni;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Ko={h:0,s:0,l:0};ve=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ce.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ce.workingColorSpace){if(t=Ih(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,c=2*i-o;this.r=Lc(c,o,t+1/3),this.g=Lc(c,o,t),this.b=Lc(c,o,t-1/3)}return Ce.colorSpaceToWorking(this,s),this}setStyle(t,e=bn){function i(o){o!==void 0&&parseFloat(o)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:he("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){let i=rd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return Ce.workingToColorSpace(_n.copy(this),t),Math.round(Te(_n.r*255,0,255))*65536+Math.round(Te(_n.g*255,0,255))*256+Math.round(Te(_n.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.workingToColorSpace(_n.copy(this),e);let i=_n.r,s=_n.g,o=_n.b,c=Math.max(i,s,o),u=Math.min(i,s,o),f,d,_=(u+c)/2;if(u===c)f=0,d=0;else{let y=c-u;switch(d=_<=.5?y/(c+u):y/(2-c-u),c){case i:f=(s-o)/y+(s<o?6:0);break;case s:f=(o-i)/y+2;break;case o:f=(i-s)/y+4;break}f/=6}return t.h=f,t.s=d,t.l=_,t}getRGB(t,e=Ce.workingColorSpace){return Ce.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=bn){Ce.workingToColorSpace(_n.copy(this),t);let e=_n.r,i=_n.g,s=_n.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(Ko);let i=to(Xi.h,Ko.h,e),s=to(Xi.s,Ko.s,e),o=to(Xi.l,Ko.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new ve;ve.NAMES=rd;ao=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Kn=new lt,Ai=new lt,Nc=new lt,Ci=new lt,$r=new lt,Zr=new lt,ef=new lt,Dc=new lt,Oc=new lt,Fc=new lt,Uc=new Je,Bc=new Je,kc=new Je,mi=class n{constructor(t=new lt,e=new lt,i=new lt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Kn.subVectors(t,e),s.cross(Kn);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Kn.subVectors(s,e),Ai.subVectors(i,e),Nc.subVectors(t,e);let c=Kn.dot(Kn),u=Kn.dot(Ai),f=Kn.dot(Nc),d=Ai.dot(Ai),_=Ai.dot(Nc),y=c*d-u*u;if(y===0)return o.set(0,0,0),null;let g=1/y,b=(d*f-u*_)*g,E=(c*_-u*f)*g;return o.set(1-b-E,E,b)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,i,s,o,c,u,f){return this.getBarycoord(t,e,i,s,Ci)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Ci.x),f.addScaledVector(c,Ci.y),f.addScaledVector(u,Ci.z),f)}static getInterpolatedAttribute(t,e,i,s,o,c){return Uc.setScalar(0),Bc.setScalar(0),kc.setScalar(0),Uc.fromBufferAttribute(t,e),Bc.fromBufferAttribute(t,i),kc.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Uc,o.x),c.addScaledVector(Bc,o.y),c.addScaledVector(kc,o.z),c}static isFrontFacing(t,e,i,s){return Kn.subVectors(i,e),Ai.subVectors(t,e),Kn.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Kn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,c,u;$r.subVectors(s,i),Zr.subVectors(o,i),Dc.subVectors(t,i);let f=$r.dot(Dc),d=Zr.dot(Dc);if(f<=0&&d<=0)return e.copy(i);Oc.subVectors(t,s);let _=$r.dot(Oc),y=Zr.dot(Oc);if(_>=0&&y<=_)return e.copy(s);let g=f*y-_*d;if(g<=0&&f>=0&&_<=0)return c=f/(f-_),e.copy(i).addScaledVector($r,c);Fc.subVectors(t,o);let b=$r.dot(Fc),E=Zr.dot(Fc);if(E>=0&&b<=E)return e.copy(o);let P=b*d-f*E;if(P<=0&&d>=0&&E<=0)return u=d/(d-E),e.copy(i).addScaledVector(Zr,u);let S=_*E-b*y;if(S<=0&&y-_>=0&&b-E>=0)return ef.subVectors(o,s),u=(y-_)/(y-_+(b-E)),e.copy(s).addScaledVector(ef,u);let M=1/(S+P+g);return c=P*M,u=g*M,e.copy(i).addScaledVector($r,c).addScaledVector(Zr,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$i=class{constructor(t=new lt(1/0,1/0,1/0),e=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,Qn):Qn.fromBufferAttribute(o,c),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(t.matrixWorld),this.union(Qo)}let s=t.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),ta.subVectors(this.max,qs),Jr.subVectors(t.a,qs),jr.subVectors(t.b,qs),Kr.subVectors(t.c,qs),Wi.subVectors(jr,Jr),Yi.subVectors(Kr,jr),dr.subVectors(Jr,Kr);let e=[0,-Wi.z,Wi.y,0,-Yi.z,Yi.y,0,-dr.z,dr.y,Wi.z,0,-Wi.x,Yi.z,0,-Yi.x,dr.z,0,-dr.x,-Wi.y,Wi.x,0,-Yi.y,Yi.x,0,-dr.y,dr.x,0];return!zc(e,Jr,jr,Kr,ta)||(e=[1,0,0,0,1,0,0,0,1],!zc(e,Jr,jr,Kr,ta))?!1:(ea.crossVectors(Wi,Yi),e=[ea.x,ea.y,ea.z],zc(e,Jr,jr,Kr,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pi=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Qn=new lt,Qo=new $i,Jr=new lt,jr=new lt,Kr=new lt,Wi=new lt,Yi=new lt,dr=new lt,qs=new lt,ta=new lt,ea=new lt,pr=new lt;en=new lt,na=new oe,Lg=0,Ge=class extends ii{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ch,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),o=ke(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},lo=class extends Ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}},co=class extends Ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}},Xe=class extends Ge{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ng=new $i,$s=new lt,Vc=new lt,vr=class{constructor(t=new lt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ng.setFromPoints(t).getCenter(i);let s=0;for(let o=0,c=t.length;o<c;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector($s,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(Vc)),this.expandByPoint($s.copy(t.center).sub(Vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Dg=0,Wn=new Ye,Hc=new nn,Qr=new lt,On=new $i,Zs=new $i,ln=new lt,Ze=class n extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rg(t)?co:lo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new Se().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,i){return Wn.makeTranslation(t,e,i),this.applyMatrix4(Wn),this}scale(t,e,i){return Wn.makeScale(t,e,i),this.applyMatrix4(Wn),this}lookAt(t){return Hc.lookAt(t),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,o=t.length;s<o;s++){let c=t[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Xe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];On.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){let u=e[o];Zs.setFromBufferAttribute(u),this.morphTargetsRelative?(ln.addVectors(On.min,Zs.min),On.expandByPoint(ln),ln.addVectors(On.max,Zs.max),On.expandByPoint(ln)):(On.expandByPoint(Zs.min),On.expandByPoint(Zs.max))}On.getCenter(i);let s=0;for(let o=0,c=t.count;o<c;o++)ln.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(ln));if(e)for(let o=0,c=e.length;o<c;o++){let u=e[o],f=this.morphTargetsRelative;for(let d=0,_=u.count;d<_;d++)ln.fromBufferAttribute(u,d),f&&(Qr.fromBufferAttribute(t,d),ln.add(Qr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,o=e.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Ge(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));let u=[],f=[];for(let C=0;C<i.count;C++)u[C]=new lt,f[C]=new lt;let d=new lt,_=new lt,y=new lt,g=new oe,b=new oe,E=new oe,P=new lt,S=new lt;function M(C,H,Y){d.fromBufferAttribute(i,C),_.fromBufferAttribute(i,H),y.fromBufferAttribute(i,Y),g.fromBufferAttribute(o,C),b.fromBufferAttribute(o,H),E.fromBufferAttribute(o,Y),_.sub(d),y.sub(d),b.sub(g),E.sub(g);let nt=1/(b.x*E.y-E.x*b.y);isFinite(nt)&&(P.copy(_).multiplyScalar(E.y).addScaledVector(y,-b.y).multiplyScalar(nt),S.copy(y).multiplyScalar(b.x).addScaledVector(_,-E.x).multiplyScalar(nt),u[C].add(P),u[H].add(P),u[Y].add(P),f[C].add(S),f[H].add(S),f[Y].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let C=0,H=F.length;C<H;++C){let Y=F[C],nt=Y.start,it=Y.count;for(let tt=nt,K=nt+it;tt<K;tt+=3)M(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}let X=new lt,R=new lt,U=new lt,z=new lt;function q(C){U.fromBufferAttribute(s,C),z.copy(U);let H=u[C];X.copy(H),X.sub(U.multiplyScalar(U.dot(H))).normalize(),R.crossVectors(z,H);let nt=R.dot(f[C])<0?-1:1;c.setXYZW(C,X.x,X.y,X.z,nt)}for(let C=0,H=F.length;C<H;++C){let Y=F[C],nt=Y.start,it=Y.count;for(let tt=nt,K=nt+it;tt<K;tt+=3)q(t.getX(tt+0)),q(t.getX(tt+1)),q(t.getX(tt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,b=i.count;g<b;g++)i.setXYZ(g,0,0,0);let s=new lt,o=new lt,c=new lt,u=new lt,f=new lt,d=new lt,_=new lt,y=new lt;if(t)for(let g=0,b=t.count;g<b;g+=3){let E=t.getX(g+0),P=t.getX(g+1),S=t.getX(g+2);s.fromBufferAttribute(e,E),o.fromBufferAttribute(e,P),c.fromBufferAttribute(e,S),_.subVectors(c,o),y.subVectors(s,o),_.cross(y),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,P),d.fromBufferAttribute(i,S),u.add(_),f.add(_),d.add(_),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(P,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,b=e.count;g<b;g+=3)s.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),_.subVectors(c,o),y.subVectors(s,o),_.cross(y),i.setXYZ(g+0,_.x,_.y,_.z),i.setXYZ(g+1,_.x,_.y,_.z),i.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(u,f){let d=u.array,_=u.itemSize,y=u.normalized,g=new d.constructor(f.length*_),b=0,E=0;for(let P=0,S=f.length;P<S;P++){u.isInterleavedBufferAttribute?b=f[P]*u.data.stride+u.offset:b=f[P]*_;for(let M=0;M<_;M++)g[E++]=d[b++]}return new Ge(g,_,y)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let u in s){let f=s[u],d=t(f,i);e.setAttribute(u,d)}let o=this.morphAttributes;for(let u in o){let f=[],d=o[u];for(let _=0,y=d.length;_<y;_++){let g=d[_],b=t(g,i);f.push(b)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let u=0,f=c.length;u<f;u++){let d=c[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let f=this.parameters;for(let d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let f in i){let d=i[f];t.data.attributes[f]=d.toJSON(t.data)}let s={},o=!1;for(let f in this.morphAttributes){let d=this.morphAttributes[f],_=[];for(let y=0,g=d.length;y<g;y++){let b=d[y];_.push(b.toJSON(t.data))}_.length>0&&(s[f]=_,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let d in s){let _=s[d];this.setAttribute(d,_.clone(e))}let o=t.morphAttributes;for(let d in o){let _=[],y=o[d];for(let g=0,b=y.length;g<b;g++)_.push(y[g].clone(e));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let d=0,_=c.length;d<_;d++){let y=c[d];this.addGroup(y.start,y.count,y.materialIndex)}let u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());let f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ka=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ch,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Sn=new lt,ho=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),o=ke(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){so("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){so("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gc=new lt,Og=new lt,Fg=new Se,Fn=class{constructor(t=new lt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Gc.subVectors(i,e).cross(Og.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Gc),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let c=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:e.copy(t.start).addScaledVector(s,c)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Fg.getNormalMatrix(t),s=this.coplanarPoint(Gc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ug=0,vi=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=ws,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=uh,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ea,this.stencilZFail=Ea,this.stencilZPass=Ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){he(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){he(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let c=[];for(let u in o){let f=o[u];delete f.metadata,c.push(f)}return c}if(e){let o=s(t.textures),c=s(t.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Fn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new oe().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},gs=class extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Js=new lt,es=new lt,ns=new lt,is=new oe,js=new oe,sd=new Ye,ia=new lt,Ks=new lt,ra=new lt,nf=new oe,Xc=new oe,rf=new oe,uo=class extends nn{constructor(t=new gs){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new Ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ka(e,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new ho(i,3,0,!1)),ts.setAttribute("uv",new ho(i,2,3,!1))}this.geometry=ts,this.material=t,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&de('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),sd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ns.z);let i=this.material.rotation,s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));let c=this.center;sa(ia.set(-.5,-.5,0),ns,c,es,s,o),sa(Ks.set(.5,-.5,0),ns,c,es,s,o),sa(ra.set(.5,.5,0),ns,c,es,s,o),nf.set(0,0),Xc.set(1,0),rf.set(1,1);let u=t.ray.intersectTriangle(ia,Ks,ra,!1,Js);if(u===null&&(sa(Ks.set(-.5,.5,0),ns,c,es,s,o),Xc.set(0,1),u=t.ray.intersectTriangle(ia,ra,Ks,!1,Js),u===null))return;let f=t.ray.origin.distanceTo(Js);f<t.near||f>t.far||e.push({distance:f,point:Js.clone(),uv:mi.getInterpolation(Js,ia,Ks,ra,nf,Xc,rf,new oe),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Ii=new lt,Wc=new lt,oa=new lt,aa=new lt,Zi=class{constructor(t=new lt,e=new lt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Wc.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),aa.copy(this.origin).sub(Wc);let o=t.distanceTo(e)*.5,c=-this.direction.dot(oa),u=aa.dot(this.direction),f=-aa.dot(oa),d=aa.lengthSq(),_=Math.abs(1-c*c),y,g,b,E;if(_>0)if(y=c*f-u,g=c*u-f,E=o*_,y>=0)if(g>=-E)if(g<=E){let P=1/_;y*=P,g*=P,b=y*(y+c*g+2*u)+g*(c*y+g+2*f)+d}else g=o,y=Math.max(0,-(c*g+u)),b=-y*y+g*(g+2*f)+d;else g=-o,y=Math.max(0,-(c*g+u)),b=-y*y+g*(g+2*f)+d;else g<=-E?(y=Math.max(0,-(-c*o+u)),g=y>0?-o:Math.min(Math.max(-o,-f),o),b=-y*y+g*(g+2*f)+d):g<=E?(y=0,g=Math.min(Math.max(-o,-f),o),b=g*(g+2*f)+d):(y=Math.max(0,-(c*o+u)),g=y>0?o:Math.min(Math.max(-o,-f),o),b=-y*y+g*(g+2*f)+d);else g=c>0?-o:o,y=Math.max(0,-(c*g+u)),b=-y*y+g*(g+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,y),s&&s.copy(Wc).addScaledVector(oa,g),b}intersectSphere(t,e){if(t.radius<0)return null;Ii.subVectors(t.center,this.origin);let i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,o=t.radius*t.radius;if(s>o)return null;let c=Math.sqrt(o-s),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,c,u,f,d=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,g=this.origin;return d>=0?(i=(t.min.x-g.x)*d,s=(t.max.x-g.x)*d):(i=(t.max.x-g.x)*d,s=(t.min.x-g.x)*d),_>=0?(o=(t.min.y-g.y)*_,c=(t.max.y-g.y)*_):(o=(t.max.y-g.y)*_,c=(t.min.y-g.y)*_),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),y>=0?(u=(t.min.z-g.z)*y,f=(t.max.z-g.z)*y):(u=(t.max.z-g.z)*y,f=(t.min.z-g.z)*y),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,i,s,o){let c=this.origin,u=this.direction,f=u.x,d=u.y,_=u.z,y=t.x-c.x,g=t.y-c.y,b=t.z-c.z,E=e.x-c.x,P=e.y-c.y,S=e.z-c.z,M=i.x-c.x,F=i.y-c.y,X=i.z-c.z,R=Math.abs(f),U=Math.abs(d),z=Math.abs(_),q,C,H,Y,nt,it,tt,K,B,et,V,dt;if(R>=U&&R>=z?(H=f,it=y,B=E,dt=M,f>=0?(q=d,C=_,Y=g,nt=b,tt=P,K=S,et=F,V=X):(q=_,C=d,Y=b,nt=g,tt=S,K=P,et=X,V=F)):U>=z?(H=d,it=g,B=P,dt=F,d>=0?(q=_,C=f,Y=b,nt=y,tt=S,K=E,et=X,V=M):(q=f,C=_,Y=y,nt=b,tt=E,K=S,et=M,V=X)):(H=_,it=b,B=S,dt=X,_>=0?(q=f,C=d,Y=y,nt=g,tt=E,K=P,et=M,V=F):(q=d,C=f,Y=g,nt=y,tt=P,K=E,et=F,V=M)),H===0)return null;let ct=q/H,_t=C/H,Mt=1/H,Pt=Y-ct*it,Ut=nt-_t*it,ae=tt-ct*B,le=K-_t*B,pe=et-ct*dt,yt=V-_t*dt,Tt=pe*le-yt*ae,Gt=Pt*yt-Ut*pe,re=ae*Ut-le*Pt;if(s){if(Tt<0||Gt<0||re<0)return null}else if((Tt<0||Gt<0||re<0)&&(Tt>0||Gt>0||re>0))return null;let Vt=Tt+Gt+re;if(Vt===0)return null;let ue=Mt*(Tt*it+Gt*B+re*dt);return(Vt>0?ue<0:ue>0)?null:this.at(ue/Vt,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ri=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},sf=new Ye,mr=new Zi,la=new vr,of=new lt,ca=new lt,ha=new lt,ua=new lt,Yc=new lt,fa=new lt,af=new lt,da=new lt,Ve=class extends nn{constructor(t=new Ze,e=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let u=this.morphTargetInfluences;if(o&&u){fa.set(0,0,0);for(let f=0,d=o.length;f<d;f++){let _=u[f],y=o[f];_!==0&&(Yc.fromBufferAttribute(y,t),c?fa.addScaledVector(Yc,_):fa.addScaledVector(Yc.sub(e),_))}e.add(fa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(o),mr.copy(t.ray).recast(t.near),!(la.containsPoint(mr.origin)===!1&&(mr.intersectSphere(la,of)===null||mr.origin.distanceToSquared(of)>(t.far-t.near)**2))&&(sf.copy(o).invert(),mr.copy(t.ray).applyMatrix4(sf),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mr)))}_computeIntersections(t,e,i){let s,o=this.geometry,c=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,_=o.attributes.uv1,y=o.attributes.normal,g=o.groups,b=o.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,P=g.length;E<P;E++){let S=g[E],M=c[S.materialIndex],F=Math.max(S.start,b.start),X=Math.min(u.count,Math.min(S.start+S.count,b.start+b.count));for(let R=F,U=X;R<U;R+=3){let z=u.getX(R),q=u.getX(R+1),C=u.getX(R+2);s=pa(this,M,t,i,d,_,y,z,q,C),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,e.push(s))}}else{let E=Math.max(0,b.start),P=Math.min(u.count,b.start+b.count);for(let S=E,M=P;S<M;S+=3){let F=u.getX(S),X=u.getX(S+1),R=u.getX(S+2);s=pa(this,c,t,i,d,_,y,F,X,R),s&&(s.faceIndex=Math.floor(S/3),e.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,P=g.length;E<P;E++){let S=g[E],M=c[S.materialIndex],F=Math.max(S.start,b.start),X=Math.min(f.count,Math.min(S.start+S.count,b.start+b.count));for(let R=F,U=X;R<U;R+=3){let z=R,q=R+1,C=R+2;s=pa(this,M,t,i,d,_,y,z,q,C),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,e.push(s))}}else{let E=Math.max(0,b.start),P=Math.min(f.count,b.start+b.count);for(let S=E,M=P;S<M;S+=3){let F=S,X=S+1,R=S+2;s=pa(this,c,t,i,d,_,y,F,X,R),s&&(s.faceIndex=Math.floor(S/3),e.push(s))}}}};za=class extends wn{constructor(t=null,e=1,i=1,s,o,c,u,f,d=cn,_=cn,y,g){super(null,c,u,f,d,_,s,o,y,g),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gr=new vr,kg=new oe(.5,.5),ma=new lt,_s=class{constructor(t=new Fn,e=new Fn,i=new Fn,s=new Fn,o=new Fn,c=new Fn){this.planes=[t,e,i,s,o,c]}set(t,e,i,s,o,c){let u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(c),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ei,i=!1){let s=this.planes,o=t.elements,c=o[0],u=o[1],f=o[2],d=o[3],_=o[4],y=o[5],g=o[6],b=o[7],E=o[8],P=o[9],S=o[10],M=o[11],F=o[12],X=o[13],R=o[14],U=o[15];if(s[0].setComponents(d-c,b-_,M-E,U-F).normalize(),s[1].setComponents(d+c,b+_,M+E,U+F).normalize(),s[2].setComponents(d+u,b+y,M+P,U+X).normalize(),s[3].setComponents(d-u,b-y,M-P,U-X).normalize(),i)s[4].setComponents(f,g,S,R).normalize(),s[5].setComponents(d-f,b-g,M-S,U-R).normalize();else if(s[4].setComponents(d-f,b-g,M-S,U-R).normalize(),e===ei)s[5].setComponents(d+f,b+g,M+S,U+R).normalize();else if(e===hs)s[5].setComponents(f,g,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(t){gr.center.set(0,0,0);let e=kg.distanceTo(t.center);return gr.radius=.7071067811865476+e,gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ma.x=s.normal.x>0?t.max.x:t.min.x,ma.y=s.normal.y>0?t.max.y:t.min.y,ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},si=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Va=new lt,Ha=new lt,lf=new Ye,Qs=new Zi,ga=new vr,qc=new lt,cf=new lt,yr=class extends nn{constructor(t=new Ze,e=new si){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)Va.fromBufferAttribute(e,s-1),Ha.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Va.distanceTo(Ha);t.setAttribute("lineDistance",new Xe(i,1))}else he("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=o,t.ray.intersectsSphere(ga)===!1)return;lf.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(lf);let u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,_=i.index,g=i.attributes.position;if(_!==null){let b=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let P=b,S=E-1;P<S;P+=d){let M=_.getX(P),F=_.getX(P+1),X=_a(this,t,Qs,f,M,F,P);X&&e.push(X)}if(this.isLineLoop){let P=_.getX(E-1),S=_.getX(b),M=_a(this,t,Qs,f,P,S,E-1);M&&e.push(M)}}else{let b=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let P=b,S=E-1;P<S;P+=d){let M=_a(this,t,Qs,f,P,P+1,P);M&&e.push(M)}if(this.isLineLoop){let P=_a(this,t,Qs,f,E-1,b,E-1);P&&e.push(P)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}};hf=new lt,uf=new lt,xr=class extends yr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)hf.fromBufferAttribute(e,s),uf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+hf.distanceTo(uf);t.setAttribute("lineDistance",new Xe(i,1))}else he("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fo=class extends wn{constructor(t=[],e=rr,i,s,o,c,u,f,d,_){super(t,e,i,s,o,c,u,f,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},po=class extends wn{constructor(t,e,i,s,o,c,u,f,d){super(t,e,i,s,o,c,u,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ji=class extends wn{constructor(t,e,i=ai,s,o,c,u=cn,f=cn,d,_=_i,y=1){if(_!==_i&&_!==or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:y};super(g,s,o,c,u,f,_,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ga=class extends Ji{constructor(t,e=ai,i=rr,s,o,c=cn,u=cn,f,d=_i){let _={width:t,height:t,depth:1},y=[_,_,_,_,_,_];super(t,t,e,i,s,o,c,u,f,d),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mo=class extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ji=class n extends Ze{constructor(t=1,e=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};let u=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);let f=[],d=[],_=[],y=[],g=0,b=0;E("z","y","x",-1,-1,i,e,t,c,o,0),E("z","y","x",1,-1,i,e,-t,c,o,1),E("x","z","y",1,1,t,i,e,s,c,2),E("x","z","y",1,-1,t,i,-e,s,c,3),E("x","y","z",1,-1,t,e,i,s,o,4),E("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(f),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(y,2));function E(P,S,M,F,X,R,U,z,q,C,H){let Y=R/q,nt=U/C,it=R/2,tt=U/2,K=z/2,B=q+1,et=C+1,V=0,dt=0,ct=new lt;for(let _t=0;_t<et;_t++){let Mt=_t*nt-tt;for(let Pt=0;Pt<B;Pt++){let Ut=Pt*Y-it;ct[P]=Ut*F,ct[S]=Mt*X,ct[M]=K,d.push(ct.x,ct.y,ct.z),ct[P]=0,ct[S]=0,ct[M]=z>0?1:-1,_.push(ct.x,ct.y,ct.z),y.push(Pt/q),y.push(1-_t/C),V+=1}}for(let _t=0;_t<C;_t++)for(let Mt=0;Mt<q;Mt++){let Pt=g+Mt+B*_t,Ut=g+Mt+B*(_t+1),ae=g+(Mt+1)+B*(_t+1),le=g+(Mt+1)+B*_t;f.push(Pt,Ut,le),f.push(Ut,ae,le),dt+=6}u.addGroup(b,dt,H),b+=dt,g+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Mr=class n extends Ze{constructor(t=1,e=1,i=1,s=32,o=1,c=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:f};let d=this;s=Math.floor(s),o=Math.floor(o);let _=[],y=[],g=[],b=[],E=0,P=[],S=i/2,M=0;F(),c===!1&&(t>0&&X(!0),e>0&&X(!1)),this.setIndex(_),this.setAttribute("position",new Xe(y,3)),this.setAttribute("normal",new Xe(g,3)),this.setAttribute("uv",new Xe(b,2));function F(){let R=new lt,U=new lt,z=0,q=(e-t)/i;for(let C=0;C<=o;C++){let H=[],Y=C/o,nt=Y*(e-t)+t;for(let it=0;it<=s;it++){let tt=it/s,K=tt*f+u,B=Math.sin(K),et=Math.cos(K);U.x=nt*B,U.y=-Y*i+S,U.z=nt*et,y.push(U.x,U.y,U.z),R.set(B,q,et).normalize(),g.push(R.x,R.y,R.z),b.push(tt,1-Y),H.push(E++)}P.push(H)}for(let C=0;C<s;C++)for(let H=0;H<o;H++){let Y=P[H][C],nt=P[H+1][C],it=P[H+1][C+1],tt=P[H][C+1];(t>0||H!==0)&&(_.push(Y,nt,tt),z+=3),(e>0||H!==o-1)&&(_.push(nt,it,tt),z+=3)}d.addGroup(M,z,0),M+=z}function X(R){let U=E,z=new oe,q=new lt,C=0,H=R===!0?t:e,Y=R===!0?1:-1;for(let it=1;it<=s;it++)y.push(0,S*Y,0),g.push(0,Y,0),b.push(.5,.5),E++;let nt=E;for(let it=0;it<=s;it++){let K=it/s*f+u,B=Math.cos(K),et=Math.sin(K);q.x=H*et,q.y=S*Y,q.z=H*B,y.push(q.x,q.y,q.z),g.push(0,Y,0),z.x=B*.5+.5,z.y=et*.5*Y+.5,b.push(z.x,z.y),E++}for(let it=0;it<s;it++){let tt=U+it,K=nt+it;R===!0?_.push(K,K+1,tt):_.push(K+1,K,tt),C+=3}d.addGroup(M,C,R===!0?1:2),M+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vs=class n extends Mr{constructor(t=1,e=1,i=32,s=1,o=!1,c=0,u=Math.PI*2){super(0,t,e,i,s,o,c,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},va=new lt,ya=new lt,$c=new lt,xa=new mi,ys=class extends Ze{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),o=Math.cos(as*e),c=t.getIndex(),u=t.getAttribute("position"),f=c?c.count:u.count,d=[0,0,0],_=["a","b","c"],y=new Array(3),g={},b=[];for(let E=0;E<f;E+=3){c?(d[0]=c.getX(E),d[1]=c.getX(E+1),d[2]=c.getX(E+2)):(d[0]=E,d[1]=E+1,d[2]=E+2);let{a:P,b:S,c:M}=xa;if(P.fromBufferAttribute(u,d[0]),S.fromBufferAttribute(u,d[1]),M.fromBufferAttribute(u,d[2]),xa.getNormal($c),y[0]=`${Math.round(P.x*s)},${Math.round(P.y*s)},${Math.round(P.z*s)}`,y[1]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,y[2]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,!(y[0]===y[1]||y[1]===y[2]||y[2]===y[0]))for(let F=0;F<3;F++){let X=(F+1)%3,R=y[F],U=y[X],z=xa[_[F]],q=xa[_[X]],C=`${R}_${U}`,H=`${U}_${R}`;H in g&&g[H]?($c.dot(g[H].normal)<=o&&(b.push(z.x,z.y,z.z),b.push(q.x,q.y,q.z)),g[H]=null):C in g||(g[C]={index0:d[F],index1:d[X],normal:$c.clone()})}}for(let E in g)if(g[E]){let{index0:P,index1:S}=g[E];va.fromBufferAttribute(u,P),ya.fromBufferAttribute(u,S),b.push(va.x,va.y,va.z),b.push(ya.x,ya.y,ya.z)}this.setAttribute("position",new Xe(b,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},go=class n extends Ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,c=e/2,u=Math.floor(i),f=Math.floor(s),d=u+1,_=f+1,y=t/u,g=e/f,b=[],E=[],P=[],S=[];for(let M=0;M<_;M++){let F=M*g-c;for(let X=0;X<d;X++){let R=X*y-o;E.push(R,-F,0),P.push(0,0,1),S.push(X/u),S.push(1-M/f)}}for(let M=0;M<f;M++)for(let F=0;F<u;F++){let X=F+d*M,R=F+d*(M+1),U=F+1+d*(M+1),z=F+1+d*M;b.push(X,R,z),b.push(R,U,z)}this.setIndex(b),this.setAttribute("position",new Xe(E,3)),this.setAttribute("normal",new Xe(P,3)),this.setAttribute("uv",new Xe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},_o=class n extends Ze{constructor(t=.5,e=1,i=32,s=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:c},i=Math.max(3,i),s=Math.max(1,s);let u=[],f=[],d=[],_=[],y=t,g=(e-t)/s,b=new lt,E=new oe;for(let P=0;P<=s;P++){for(let S=0;S<=i;S++){let M=o+S/i*c;b.x=y*Math.cos(M),b.y=y*Math.sin(M),f.push(b.x,b.y,b.z),d.push(0,0,1),E.x=(b.x/e+1)/2,E.y=(b.y/e+1)/2,_.push(E.x,E.y)}y+=g}for(let P=0;P<s;P++){let S=P*(i+1);for(let M=0;M<i;M++){let F=M+S,X=F,R=F+i+1,U=F+i+2,z=F+1;u.push(X,R,z),u.push(R,U,z)}}this.setIndex(u),this.setAttribute("position",new Xe(f,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Sr=class n extends Ze{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let f=Math.min(c+u,Math.PI),d=0,_=[],y=new lt,g=new lt,b=[],E=[],P=[],S=[];for(let M=0;M<=i;M++){let F=[],X=M/i,R=c+X*u,U=t*Math.cos(R),z=Math.sqrt(t*t-U*U),q=0;M===0&&c===0?q=.5/e:M===i&&f===Math.PI&&(q=-.5/e);for(let C=0;C<=e;C++){let H=C/e,Y=s+H*o;y.x=-z*Math.cos(Y),y.y=U,y.z=z*Math.sin(Y),E.push(y.x,y.y,y.z),g.copy(y).normalize(),P.push(g.x,g.y,g.z),S.push(H+q,1-X),F.push(d++)}_.push(F)}for(let M=0;M<i;M++)for(let F=0;F<e;F++){let X=_[M][F+1],R=_[M][F],U=_[M+1][F],z=_[M+1][F+1];(M!==0||c>0)&&b.push(X,R,z),(M!==i-1||f<Math.PI)&&b.push(R,U,z)}this.setIndex(b),this.setAttribute("position",new Xe(E,3)),this.setAttribute("normal",new Xe(P,3)),this.setAttribute("uv",new Xe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};od={clone:Tr,merge:xn},Vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=zg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let c=this.uniforms[s].value;c&&c.isTexture?e.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[s]={type:"m4",value:c.toArray()}:e.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ve().setHex(s.value);break;case"v2":this.uniforms[i].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new lt().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Se().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xa=class extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kn=class extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wa=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ya=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},vo=class extends si{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};Ki=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let c;e:{i:if(!(t<s)){for(let u=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(o=s,s=e[++i],t<s)break t}c=e.length;break e}if(!(t>=o)){let u=e[1];t<u&&(i=2,o=u);for(let f=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(s=o,o=e[--i-1],t>=o)break t}c=i,i=0;break e}break n}for(;i<c;){let u=i+c>>>1;t<e[u]?c=u:i=u+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let c=0;c!==s;++c)e[c]=i[o+c];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qa=class extends Ki{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,c=t+1,u=s[o],f=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case th:o=t,u=2*e-i;break;case eh:o=s.length-2,u=e+s[o]-s[o+1];break;default:o=t,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case th:c=t,f=2*i-e;break;case eh:c=1,f=i+s[1]-s[0];break;default:c=t-1,f=e}let d=(i-e)*.5,_=this.valueSize;this._weightPrev=d/(e-u),this._weightNext=d/(f-i),this._offsetPrev=o*_,this._offsetNext=c*_}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,_=this._offsetPrev,y=this._offsetNext,g=this._weightPrev,b=this._weightNext,E=(i-e)/(s-e),P=E*E,S=P*E,M=-g*S+2*g*P-g*E,F=(1+g)*S+(-1.5-2*g)*P+(-.5+g)*E+1,X=(-1-b)*S+(1.5+b)*P+.5*E,R=b*S-b*P;for(let U=0;U!==u;++U)o[U]=M*c[_+U]+F*c[d+U]+X*c[f+U]+R*c[y+U];return o}},$a=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,_=(i-e)/(s-e),y=1-_;for(let g=0;g!==u;++g)o[g]=c[d+g]*y+c[f+g]*_;return o}},Za=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ja=class extends Ki{interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,_=this.inTangents,y=this.outTangents;if(!_||!y){let E=(i-e)/(s-e),P=1-E;for(let S=0;S!==u;++S)o[S]=c[d+S]*P+c[f+S]*E;return o}let g=u*2,b=t-1;for(let E=0;E!==u;++E){let P=c[d+E],S=c[f+E],M=b*g+E*2,F=y[M],X=y[M+1],R=t*g+E*2,U=_[R],z=_[R+1],q=Xg(i,e,F,U,s);o[E]=ad(q,P,X,z,S)}return o}};zn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Zc(t.settings)&&(i.settings={inTangents:rs(t.settings.inTangents,Array),outTangents:rs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case eo:e=this.InterpolantFactoryMethodDiscrete;break;case Oa:e=this.InterpolantFactoryMethodLinear;break;case wa:e=this.InterpolantFactoryMethodSmooth;break;case Kc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return he("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return wa;case this.InterpolantFactoryMethodBezier:return Kc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Zc(this.settings)&&(df(this.settings.inTangents,t),df(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,o=0,c=s-1;for(;o!==s&&i[o]<t;)++o;for(;c!==-1&&i[c]>e;)--c;if(++c,o!==0||c!==s){o>=c&&(c=Math.max(c,1),o=c-1);let u=this.getValueSize();this.times=i.slice(o,c),this.values=this.values.slice(o*u,c*u)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(de("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(de("KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let u=0;u!==o;u++){let f=i[u];if(typeof f=="number"&&isNaN(f)){de("KeyframeTrack: Time is not a valid number.",this,u,f),t=!1;break}if(c!==null&&c>f){de("KeyframeTrack: Out of order keys.",this,u,f,c),t=!1;break}c=f}if(s!==void 0&&sg(s))for(let u=0,f=s.length;u!==f;++u){let d=s[u];if(isNaN(d)){de("KeyframeTrack: Value is not a valid number.",this,u,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wa,o=t.length-1,c=1;for(let u=1;u<o;++u){let f=!1,d=t[u],_=t[u+1];if(d!==_&&(u!==1||d!==t[0]))if(s)f=!0;else{let y=u*i,g=y-i,b=y+i;for(let E=0;E!==i;++E){let P=e[y+E];if(P!==e[g+E]||P!==e[b+E]){f=!0;break}}}if(f){if(u!==c){t[c]=t[u];let y=u*i,g=c*i;for(let b=0;b!==i;++b)e[g+b]=e[y+b]}++c}}if(o>0){t[c]=t[o];for(let u=o*i,f=c*i,d=0;d!==i;++d)e[f+d]=e[u+d];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Zc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Oa;Qi=class extends zn{constructor(t,e,i){super(t,e,i)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=eo;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;ja=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};ja.prototype.ValueTypeName="color";Ka=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};Ka.prototype.ValueTypeName="number";Qa=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-e)/(s-e),d=t*u;for(let _=d+u;d!==_;d+=4)Un.slerpFlat(o,0,c,d-u,c,d,f);return o}},yo=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;tr=class extends zn{constructor(t,e,i){super(t,e,i)}};tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=eo;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;tl=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};tl.prototype.ValueTypeName="vector";el=class{constructor(t,e,i){let s=this,o=!1,c=0,u=0,f,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(_){u++,o===!1&&s.onStart!==void 0&&s.onStart(_,c,u),o=!0},this.itemEnd=function(_){c++,s.onProgress!==void 0&&s.onProgress(_,c,u),c===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(_){s.onError!==void 0&&s.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),f?f(_):_},this.setURLModifier=function(_){return f=_,this},this.addHandler=function(_,y){return d.push(_,y),this},this.removeHandler=function(_){let y=d.indexOf(_);return y!==-1&&d.splice(y,2),this},this.getHandler=function(_){for(let y=0,g=d.length;y<g;y+=2){let b=d[y],E=d[y+1];if(b.global&&(b.lastIndex=0),b.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ld=new el,nl=class{constructor(t){this.manager=t!==void 0?t:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";xo=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Mo=class extends xo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Jc=new Ye,pf=new lt,mf=new lt,il=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(pf),mf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Jc,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,c=s?s.z/o.x:1,u=s?s.w/o.y:1,f=s?s.x/o.x:0,d=s?s.y/o.y:0;t.coordinateSystem===hs||t.reversedDepth?e.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+d,0,0,1,0,0,0,0,1):e.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+d,0,0,.5,.5,0,0,0,1),e.multiply(Jc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ma=new lt,Sa=new Un,pi=new lt,So=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ma,Sa,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ma,Sa,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new lt,gf=new oe,_f=new oe,vn=class extends So{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,gf,_f),e.subVectors(_f,gf)}setViewOffset(t,e,i,s,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(as*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,c=this.view;if(this.view!==null&&this.view.enabled){let f=c.fullWidth,d=c.fullHeight;o+=c.offsetX*s/f,e-=c.offsetY*i/d,s*=c.width/f,i*=c.height/d}let u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xs=class extends So{constructor(t=-1,e=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,c=i+t,u=s+e,f=s-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,u-=_*this.view.offsetY,f=u-_*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nh=class extends il{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ms=class extends xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new nh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ss=-90,os=1,rl=class extends nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(ss,os,t,e);s.layers=this.layers,this.add(s);let o=new vn(ss,os,t,e);o.layers=this.layers,this.add(o);let c=new vn(ss,os,t,e);c.layers=this.layers,this.add(c);let u=new vn(ss,os,t,e);u.layers=this.layers,this.add(u);let f=new vn(ss,os,t,e);f.layers=this.layers,this.add(f);let d=new vn(ss,os,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,c,u,f]=e;for(let d of e)this.remove(d);if(t===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,c,u,f,d,_]=this.children,y=t.getRenderTarget(),g=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;let P=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,2,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,3,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,4,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=P,t.setRenderTarget(i,5,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,_),t.setRenderTarget(y,g,b),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}},sl=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Nh="\\[\\]\\.:\\/",Wg=new RegExp("["+Nh+"]","g"),Dh="[^"+Nh+"]",Yg="[^"+Nh.replace("\\.","")+"]",qg=/((?:WC+[\/:])*)/.source.replace("WC",Dh),$g=/(WCOD+)?/.source.replace("WCOD",Yg),Zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),jg=new RegExp("^"+qg+$g+Zg+Jg+"$"),Kg=["material","materials","bones","map"],ih=class{constructor(t,e,i){let s=i||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},$e=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wg,"")}static parseTrackName(t){let e=jg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);Kg.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let c=0;c<o.length;c++){let u=o[c];if(u.name===e||u.uuid===e)return u;let f=i(u.children);if(f)return f}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){he("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){de("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){de("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){de("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let _=0;_<t.length;_++)if(t[_].name===d){d=_;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){de("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){de("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){de("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){de("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let c=t[s];if(c===void 0){let d=e.nodeName;de("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",t);return}let u=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?u=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){de("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){de("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=ih;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];BM=new Float32Array(1),vf=new Ye,bo=class{constructor(t,e,i=0,s=1/0){this.ray=new Zi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):de("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vf),this}intersectObject(t,e=!0,i=[]){return rh(t,this,i,e),i.sort(yf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,o=t.length;s<o;s++)rh(t[s],this,i,e);return i.sort(yf),i}};Ss=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},sh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=s,this}},xf=new lt,wo=class extends nn{constructor(t=new lt(0,0,1),e=new lt(0,0,0),i=1,s=16776960,o=i*.2,c=o*.2){super(),this.type="ArrowHelper",ba===void 0&&(ba=new Ze,ba.setAttribute("position",new Xe([0,0,0,0,1,0],3)),jc=new vs(.5,1,5,1),jc.translate(0,-.5,0)),this.position.copy(e),this.line=new yr(ba,new si({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ve(jc,new ri({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,c)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{xf.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(xf,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Eo=class extends ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Id(){let n=null,t=!1,e=null,i=null;function s(o,c){i=n.requestAnimationFrame(s),e(o,c)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function e0(n){let t=new WeakMap;function e(u,f){let d=u.array,_=u.usage,y=d.byteLength,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,d,_),u.onUploadCallback();let b;if(d instanceof Float32Array)b=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)b=n.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?b=n.HALF_FLOAT:b=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=n.SHORT;else if(d instanceof Uint32Array)b=n.UNSIGNED_INT;else if(d instanceof Int32Array)b=n.INT;else if(d instanceof Int8Array)b=n.BYTE;else if(d instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:y}}function i(u,f,d){let _=f.array,y=f.updateRanges;if(n.bindBuffer(d,u),y.length===0)n.bufferSubData(d,0,_);else{y.sort((b,E)=>b.start-E.start);let g=0;for(let b=1;b<y.length;b++){let E=y[g],P=y[b];P.start<=E.start+E.count+1?E.count=Math.max(E.count,P.start+P.count-E.start):(++g,y[g]=P)}y.length=g+1;for(let b=0,E=y.length;b<E;b++){let P=y[b];n.bufferSubData(d,P.start*_.BYTES_PER_ELEMENT,_,P.start,P.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);let f=t.get(u);f&&(n.deleteBuffer(f.buffer),t.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){let _=t.get(u);(!_||_.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}let d=t.get(u);if(d===void 0)t.set(u,e(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:s,remove:o,update:c}}function Uv(n,t,e,i,s,o){let c=new ve(0),u=s===!0?0:1,f,d,_=null,y=0,g=null;function b(F){let X=F.isScene===!0?F.background:null;if(X&&X.isTexture){let R=F.backgroundBlurriness>0;X=t.get(X,R)}return X}function E(F){let X=!1,R=b(F);R===null?S(c,u):R&&R.isColor&&(S(R,1),X=!0);let U=n.xr.getEnvironmentBlendMode();U==="additive"?e.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||X)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function P(F,X){let R=b(X);R&&(R.isCubeTexture||R.mapping===Ao)?(d===void 0&&(d=new Ve(new ji(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Tr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=X.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(X.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Rd),d.material.toneMapped=Ce.getTransfer(R.colorSpace)!==Ue,(_!==R||y!==R.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,_=R,y=R.version,g=n.toneMapping),d.layers.enableAll(),F.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(f===void 0&&(f=new Ve(new go(2,2),new Bn({name:"BackgroundMaterial",uniforms:Tr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=R,f.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,f.material.toneMapped=Ce.getTransfer(R.colorSpace)!==Ue,R.matrixAutoUpdate===!0&&R.updateMatrix(),f.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||y!==R.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,_=R,y=R.version,g=n.toneMapping),f.layers.enableAll(),F.unshift(f,f.geometry,f.material,0,0,null))}function S(F,X){F.getRGB($l,Lh(n)),e.buffers.color.setClear($l.r,$l.g,$l.b,X,o)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(F,X=1){c.set(F),u=X,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(F){u=F,S(c,u)},render:E,addToRenderList:P,dispose:M}}function Bv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=g(null),o=s,c=!1;function u(nt,it,tt,K,B){let et=!1,V=y(nt,K,tt,it);o!==V&&(o=V,d(o.object)),et=b(nt,K,tt,B),et&&E(nt,K,tt,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(et||c)&&(c=!1,R(nt,it,tt,K),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function f(){return n.createVertexArray()}function d(nt){return n.bindVertexArray(nt)}function _(nt){return n.deleteVertexArray(nt)}function y(nt,it,tt,K){let B=K.wireframe===!0,et=i[it.id];et===void 0&&(et={},i[it.id]=et);let V=nt.isInstancedMesh===!0?nt.id:0,dt=et[V];dt===void 0&&(dt={},et[V]=dt);let ct=dt[tt.id];ct===void 0&&(ct={},dt[tt.id]=ct);let _t=ct[B];return _t===void 0&&(_t=g(f()),ct[B]=_t),_t}function g(nt){let it=[],tt=[],K=[];for(let B=0;B<e;B++)it[B]=0,tt[B]=0,K[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:it,enabledAttributes:tt,attributeDivisors:K,object:nt,attributes:{},index:null}}function b(nt,it,tt,K){let B=o.attributes,et=it.attributes,V=0,dt=tt.getAttributes();for(let ct in dt)if(dt[ct].location>=0){let Mt=B[ct],Pt=et[ct];if(Pt===void 0&&(ct==="instanceMatrix"&&nt.instanceMatrix&&(Pt=nt.instanceMatrix),ct==="instanceColor"&&nt.instanceColor&&(Pt=nt.instanceColor)),Mt===void 0||Mt.attribute!==Pt||Pt&&Mt.data!==Pt.data)return!0;V++}return o.attributesNum!==V||o.index!==K}function E(nt,it,tt,K){let B={},et=it.attributes,V=0,dt=tt.getAttributes();for(let ct in dt)if(dt[ct].location>=0){let Mt=et[ct];Mt===void 0&&(ct==="instanceMatrix"&&nt.instanceMatrix&&(Mt=nt.instanceMatrix),ct==="instanceColor"&&nt.instanceColor&&(Mt=nt.instanceColor));let Pt={};Pt.attribute=Mt,Mt&&Mt.data&&(Pt.data=Mt.data),B[ct]=Pt,V++}o.attributes=B,o.attributesNum=V,o.index=K}function P(){let nt=o.newAttributes;for(let it=0,tt=nt.length;it<tt;it++)nt[it]=0}function S(nt){M(nt,0)}function M(nt,it){let tt=o.newAttributes,K=o.enabledAttributes,B=o.attributeDivisors;tt[nt]=1,K[nt]===0&&(n.enableVertexAttribArray(nt),K[nt]=1),B[nt]!==it&&(n.vertexAttribDivisor(nt,it),B[nt]=it)}function F(){let nt=o.newAttributes,it=o.enabledAttributes;for(let tt=0,K=it.length;tt<K;tt++)it[tt]!==nt[tt]&&(n.disableVertexAttribArray(tt),it[tt]=0)}function X(nt,it,tt,K,B,et,V){V===!0?n.vertexAttribIPointer(nt,it,tt,B,et):n.vertexAttribPointer(nt,it,tt,K,B,et)}function R(nt,it,tt,K){P();let B=K.attributes,et=tt.getAttributes(),V=it.defaultAttributeValues;for(let dt in et){let ct=et[dt];if(ct.location>=0){let _t=B[dt];if(_t===void 0&&(dt==="instanceMatrix"&&nt.instanceMatrix&&(_t=nt.instanceMatrix),dt==="instanceColor"&&nt.instanceColor&&(_t=nt.instanceColor)),_t!==void 0){let Mt=_t.normalized,Pt=_t.itemSize,Ut=t.get(_t);if(Ut===void 0)continue;let ae=Ut.buffer,le=Ut.type,pe=Ut.bytesPerElement,yt=le===n.INT||le===n.UNSIGNED_INT||_t.gpuType===cl;if(_t.isInterleavedBufferAttribute){let Tt=_t.data,Gt=Tt.stride,re=_t.offset;if(Tt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<ct.locationSize;Vt++)M(ct.location+Vt,Tt.meshPerAttribute);nt.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Vt=0;Vt<ct.locationSize;Vt++)S(ct.location+Vt);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let Vt=0;Vt<ct.locationSize;Vt++)X(ct.location+Vt,Pt/ct.locationSize,le,Mt,Gt*pe,(re+Pt/ct.locationSize*Vt)*pe,yt)}else{if(_t.isInstancedBufferAttribute){for(let Tt=0;Tt<ct.locationSize;Tt++)M(ct.location+Tt,_t.meshPerAttribute);nt.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Tt=0;Tt<ct.locationSize;Tt++)S(ct.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let Tt=0;Tt<ct.locationSize;Tt++)X(ct.location+Tt,Pt/ct.locationSize,le,Mt,Pt*pe,Pt/ct.locationSize*Tt*pe,yt)}}else if(V!==void 0){let Mt=V[dt];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(ct.location,Mt);break;case 3:n.vertexAttrib3fv(ct.location,Mt);break;case 4:n.vertexAttrib4fv(ct.location,Mt);break;default:n.vertexAttrib1fv(ct.location,Mt)}}}}F()}function U(){H();for(let nt in i){let it=i[nt];for(let tt in it){let K=it[tt];for(let B in K){let et=K[B];for(let V in et)_(et[V].object),delete et[V];delete K[B]}}delete i[nt]}}function z(nt){if(i[nt.id]===void 0)return;let it=i[nt.id];for(let tt in it){let K=it[tt];for(let B in K){let et=K[B];for(let V in et)_(et[V].object),delete et[V];delete K[B]}}delete i[nt.id]}function q(nt){for(let it in i){let tt=i[it];for(let K in tt){let B=tt[K];if(B[nt.id]===void 0)continue;let et=B[nt.id];for(let V in et)_(et[V].object),delete et[V];delete B[nt.id]}}}function C(nt){for(let it in i){let tt=i[it],K=nt.isInstancedMesh===!0?nt.id:0,B=tt[K];if(B!==void 0){for(let et in B){let V=B[et];for(let dt in V)_(V[dt].object),delete V[dt];delete B[et]}delete tt[K],Object.keys(tt).length===0&&delete i[it]}}}function H(){Y(),c=!0,o!==s&&(o=s,d(o.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:H,resetDefaultState:Y,dispose:U,releaseStatesOfGeometry:z,releaseStatesOfObject:C,releaseStatesOfProgram:q,initAttributes:P,enableAttribute:S,disableUnusedAttributes:F}}function kv(n,t,e){let i;function s(f){i=f}function o(f,d){n.drawArrays(i,f,d),e.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawArraysInstanced(i,f,d,_),e.update(d,i,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,_);let g=0;for(let b=0;b<_;b++)g+=d[b];e.update(g,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function zv(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let q=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(q){return!(q!==Yn&&i.convert(q)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(q){let C=q===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(q!==Rn&&q!==li&&!C&&i.convert(q)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(q){if(q==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";q="mediump"}return q==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",_=f(d);_!==d&&(he("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);let y=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&he("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let b=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),M=n.getParameter(n.MAX_VERTEX_ATTRIBS),F=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),X=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=n.getParameter(n.MAX_SAMPLES),z=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:E,maxTextureSize:P,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:F,maxVaryings:X,maxFragmentUniforms:R,maxSamples:U,samples:z}}function Vv(n){let t=this,e=null,i=0,s=!1,o=!1,c=new Fn,u=new Se,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){let b=y.length!==0||g||i!==0||s;return s=g,i=y.length,b},this.beginShadows=function(){o=!0,_(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(y,g){e=_(y,g,0)},this.setState=function(y,g,b){let E=y.clippingPlanes,P=y.clipIntersection,S=y.clipShadows,M=n.get(y);if(!s||E===null||E.length===0||o&&!S)o?_(null):d();else{let F=o?0:i,X=F*4,R=M.clippingState||null;f.value=R,R=_(E,g,X,b);for(let U=0;U!==X;++U)R[U]=e[U];M.clippingState=R,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=F}};function d(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function _(y,g,b,E){let P=y!==null?y.length:0,S=null;if(P!==0){if(S=f.value,E!==!0||S===null){let M=b+P*4,F=g.matrixWorldInverse;u.getNormalMatrix(F),(S===null||S.length<M)&&(S=new Float32Array(M));for(let X=0,R=b;X!==P;++X,R+=4)c.copy(y[X]).applyMatrix4(F,u),c.normal.toArray(S,R),S[R+3]=c.constant}f.value=S,f.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,S}}function Yv(n){let t=[],e=[],i=n,s=n-Cs+1+Hv;for(let o=0;o<s;o++){let c=Math.pow(2,i);t.push(c);let u=1/(c-2),f=-u,d=1+u,_=[f,f,d,f,d,d,f,f,d,d,f,d],y=6,g=6,b=3,E=new Float32Array(b*g*y),P=new Float32Array(b*g*y);for(let M=0;M<y;M++){let F=M%3*2/3-1,X=M>2?0:-1,R=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];E.set(R,b*g*M);for(let U=0;U<g;U++){let z=_[U*2]*2-1,q=_[U*2+1]*2-1;M===0?Ar.set(1,q,z):M===1?Ar.set(-z,1,-q):M===2?Ar.set(-z,q,1):M===3?Ar.set(-1,q,-z):M===4?Ar.set(-z,-1,q):Ar.set(z,q,-1),Ar.toArray(P,(M*g+U)*b)}}let S=new Ze;S.setAttribute("position",new Ge(E,b)),S.setAttribute("outputDirection",new Ge(P,b)),e.push(new Ve(S,null)),i>Cs&&i--}return{lodMeshes:e,sizeLods:t}}function hd(n,t,e){let i=new In(n,t,e);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function qv(n,t,e){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function $v(n,t,e){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:Gv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ud(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function fd(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ql(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zv(n){let t=new WeakMap,e=new WeakMap,i=null;function s(g,b=!1){return g==null?null:b?c(g):o(g)}function o(g){if(g&&g.isTexture){let b=g.mapping;if(b===ol||b===al)if(t.has(g)){let E=t.get(g).texture;return u(E,g.mapping)}else{let E=g.image;if(E&&E.height>0){let P=new jl(E.height);return P.fromEquirectangularTexture(n,g),t.set(g,P),g.addEventListener("dispose",d),u(P.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){let b=g.mapping,E=b===ol||b===al,P=b===rr||b===wr;if(E||P){let S=e.get(g),M=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==M)return i===null&&(i=new Jl(n)),S=E?i.fromEquirectangular(g,S):i.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,e.set(g,S),S.texture;if(S!==void 0)return S.texture;{let F=g.image;return E&&F&&F.height>0||P&&F&&f(F)?(i===null&&(i=new Jl(n)),S=E?i.fromEquirectangular(g):i.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,e.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function u(g,b){return b===ol?g.mapping=rr:b===al&&(g.mapping=wr),g}function f(g){let b=0,E=6;for(let P=0;P<E;P++)g[P]!==void 0&&b++;return b===E}function d(g){let b=g.target;b.removeEventListener("dispose",d);let E=t.get(b);E!==void 0&&(t.delete(b),E.dispose())}function _(g){let b=g.target;b.removeEventListener("dispose",_);let E=e.get(b);E!==void 0&&(e.delete(b),E.dispose())}function y(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:y}}function Jv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&_r("WebGLRenderer: "+i+" extension not supported."),s}}}function jv(n,t,e,i){let s={},o=new WeakMap;function c(y){let g=y.target;g.index!==null&&t.remove(g.index);for(let E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",c),delete s[g.id];let b=o.get(g);b&&(t.remove(b),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(y,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,e.memory.geometries++),g}function f(y){let g=y.attributes;for(let b in g)t.update(g[b],n.ARRAY_BUFFER)}function d(y){let g=[],b=y.index,E=y.attributes.position,P=0;if(E===void 0)return;if(b!==null){let F=b.array;P=b.version;for(let X=0,R=F.length;X<R;X+=3){let U=F[X+0],z=F[X+1],q=F[X+2];g.push(U,z,z,q,q,U)}}else{let F=E.array;P=E.version;for(let X=0,R=F.length/3-1;X<R;X+=3){let U=X+0,z=X+1,q=X+2;g.push(U,z,z,q,q,U)}}let S=new(E.count>=65535?co:lo)(g,1);S.version=P;let M=o.get(y);M&&t.remove(M),o.set(y,S)}function _(y){let g=o.get(y);if(g){let b=y.index;b!==null&&g.version<b.version&&d(y)}else d(y);return o.get(y)}return{get:u,update:f,getWireframeAttribute:_}}function Kv(n,t,e){let i;function s(y){i=y}let o,c;function u(y){o=y.type,c=y.bytesPerElement}function f(y,g){n.drawElements(i,g,o,y*c),e.update(g,i,1)}function d(y,g,b){b!==0&&(n.drawElementsInstanced(i,g,o,y*c,b),e.update(g,i,b))}function _(y,g,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,o,y,0,b);let P=0;for(let S=0;S<b;S++)P+=g[S];e.update(P,i,1)}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=_}function Qv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(e.calls++,c){case n.TRIANGLES:e.triangles+=u*(o/3);break;case n.LINES:e.lines+=u*(o/2);break;case n.LINE_STRIP:e.lines+=u*(o-1);break;case n.LINE_LOOP:e.lines+=u*o;break;case n.POINTS:e.points+=u*o;break;default:de("WebGLInfo: Unknown draw mode:",c);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ty(n,t,e){let i=new WeakMap,s=new Je;function o(c,u,f){let d=c.morphTargetInfluences,_=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=_!==void 0?_.length:0,g=i.get(u);if(g===void 0||g.count!==y){let H=function(){q.dispose(),i.delete(u),u.removeEventListener("dispose",H)};g!==void 0&&g.texture.dispose();let b=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],F=u.morphAttributes.color||[],X=0;b===!0&&(X=1),E===!0&&(X=2),P===!0&&(X=3);let R=u.attributes.position.count*X,U=1;R>t.maxTextureSize&&(U=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let z=new Float32Array(R*U*4*y),q=new oo(z,R,U,y);q.type=li,q.needsUpdate=!0;let C=X*4;for(let Y=0;Y<y;Y++){let nt=S[Y],it=M[Y],tt=F[Y],K=R*U*4*Y;for(let B=0;B<nt.count;B++){let et=B*C;b===!0&&(s.fromBufferAttribute(nt,B),z[K+et+0]=s.x,z[K+et+1]=s.y,z[K+et+2]=s.z,z[K+et+3]=0),E===!0&&(s.fromBufferAttribute(it,B),z[K+et+4]=s.x,z[K+et+5]=s.y,z[K+et+6]=s.z,z[K+et+7]=0),P===!0&&(s.fromBufferAttribute(tt,B),z[K+et+8]=s.x,z[K+et+9]=s.y,z[K+et+10]=s.z,z[K+et+11]=tt.itemSize===4?s.w:1)}}g={count:y,texture:q,size:new oe(R,U)},i.set(u,g),u.addEventListener("dispose",H)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let b=0;for(let P=0;P<d.length;P++)b+=d[P];let E=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:o}}function ey(n,t,e,i,s){let o=new WeakMap;function c(d){let _=s.render.frame,y=d.geometry,g=t.get(d,y);if(o.get(g)!==_&&(t.update(g),o.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==_&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,_))),d.isSkinnedMesh){let b=d.skeleton;o.get(b)!==_&&(b.update(),o.set(b,_))}return g}function u(){o=new WeakMap}function f(d){let _=d.target;_.removeEventListener("dispose",f),i.releaseStatesOfObject(_),e.remove(_.instanceMatrix),_.instanceColor!==null&&e.remove(_.instanceColor)}return{update:c,dispose:u}}function iy(n,t,e,i,s,o){let c=new In(t,e,{type:n,depthBuffer:s,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),u=null,f=null,d=new Ze;d.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Xe([0,2,0,0,2,0],2));let _=new Xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new Ve(d,_),g=new xs(-1,1,1,-1,0,1),b=null,E=null,P=!1,S,M=null,F=[],X=!1;this.setSize=function(R,U){c.setSize(R,U),u!==null&&u.setSize(R,U),f!==null&&f.setSize(R,U);for(let z=0;z<F.length;z++){let q=F[z];q.setSize&&q.setSize(R,U)}},this.setEffects=function(R){F=R,X=F.length>0&&F[0].isRenderPass===!0;let U=c.width,z=c.height;F.length>0&&u===null&&(u=new In(U,z,{type:ci,depthBuffer:!1,stencilBuffer:!1}),f=new In(U,z,{type:ci,depthBuffer:!1,stencilBuffer:!1}));for(let q=0;q<F.length;q++){let C=F[q];C.setSize&&C.setSize(U,z)}},this.begin=function(R,U){if(P||R.toneMapping===oi&&F.length===0)return!1;if(M=U,U!==null){let z=U.width,q=U.height;(c.width!==z||c.height!==q)&&this.setSize(z,q)}return X===!1&&R.setRenderTarget(c),S=R.toneMapping,R.toneMapping=oi,!0},this.hasRenderPass=function(){return X},this.end=function(R,U){R.toneMapping=S,P=!0;let z=c,q=u;for(let C=0;C<F.length;C++){let H=F[C];H.enabled!==!1&&(H.render(R,q,z,U),H.needsSwap!==!1&&(z=q,q=q===u?f:u))}if(b!==R.outputColorSpace||E!==R.toneMapping){b=R.outputColorSpace,E=R.toneMapping,_.defines={},Ce.getTransfer(b)===Ue&&(_.defines.SRGB_TRANSFER="");let C=ny[E];C&&(_.defines[C]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=z.texture,R.setRenderTarget(M),R.render(y,g),M=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),f!==null&&f.dispose(),d.dispose(),_.dispose()}}function Is(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=dd[s];if(o===void 0&&(o=new Float32Array(s),dd[s]=o),t!==0){i.toArray(o,0);for(let c=1,u=0;c!==t;++c)u+=e,n[c].toArray(o,u)}return o}function rn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function sn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function tc(n,t){let e=pd[t];e===void 0&&(e=new Int32Array(t),pd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ry(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2fv(this.addr,t),sn(e,t)}}function oy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;n.uniform3fv(this.addr,t),sn(e,t)}}function ay(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4fv(this.addr,t),sn(e,t)}}function ly(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,i))return;_d.set(i),n.uniformMatrix2fv(this.addr,!1,_d),sn(e,i)}}function cy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,i))return;gd.set(i),n.uniformMatrix3fv(this.addr,!1,gd),sn(e,i)}}function hy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,i))return;md.set(i),n.uniformMatrix4fv(this.addr,!1,md),sn(e,i)}}function uy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function fy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2iv(this.addr,t),sn(e,t)}}function dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3iv(this.addr,t),sn(e,t)}}function py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4iv(this.addr,t),sn(e,t)}}function my(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2uiv(this.addr,t),sn(e,t)}}function _y(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3uiv(this.addr,t),sn(e,t)}}function vy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4uiv(this.addr,t),sn(e,t)}}function yy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Gh.compareFunction=e.isReversedDepthBuffer()?ql:Yl,o=Gh):o=Ld,e.setTexture2D(t||o,s)}function xy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Dd,s)}function My(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Od,s)}function Sy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Nd,s)}function by(n){switch(n){case 5126:return ry;case 35664:return sy;case 35665:return oy;case 35666:return ay;case 35674:return ly;case 35675:return cy;case 35676:return hy;case 5124:case 35670:return uy;case 35667:case 35671:return fy;case 35668:case 35672:return dy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return _y;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return xy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return Sy}}function wy(n,t){n.uniform1fv(this.addr,t)}function Ey(n,t){let e=Is(t,this.size,2);n.uniform2fv(this.addr,e)}function Ty(n,t){let e=Is(t,this.size,3);n.uniform3fv(this.addr,e)}function Ay(n,t){let e=Is(t,this.size,4);n.uniform4fv(this.addr,e)}function Cy(n,t){let e=Is(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Py(n,t){let e=Is(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Iy(n,t){let e=Is(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ry(n,t){n.uniform1iv(this.addr,t)}function Ly(n,t){n.uniform2iv(this.addr,t)}function Ny(n,t){n.uniform3iv(this.addr,t)}function Dy(n,t){n.uniform4iv(this.addr,t)}function Oy(n,t){n.uniform1uiv(this.addr,t)}function Fy(n,t){n.uniform2uiv(this.addr,t)}function Uy(n,t){n.uniform3uiv(this.addr,t)}function By(n,t){n.uniform4uiv(this.addr,t)}function ky(n,t,e){let i=this.cache,s=t.length,o=tc(e,s);rn(i,o)||(n.uniform1iv(this.addr,o),sn(i,o));let c;this.type===n.SAMPLER_2D_SHADOW?c=Gh:c=Ld;for(let u=0;u!==s;++u)e.setTexture2D(t[u]||c,o[u])}function zy(n,t,e){let i=this.cache,s=t.length,o=tc(e,s);rn(i,o)||(n.uniform1iv(this.addr,o),sn(i,o));for(let c=0;c!==s;++c)e.setTexture3D(t[c]||Dd,o[c])}function Vy(n,t,e){let i=this.cache,s=t.length,o=tc(e,s);rn(i,o)||(n.uniform1iv(this.addr,o),sn(i,o));for(let c=0;c!==s;++c)e.setTextureCube(t[c]||Od,o[c])}function Hy(n,t,e){let i=this.cache,s=t.length,o=tc(e,s);rn(i,o)||(n.uniform1iv(this.addr,o),sn(i,o));for(let c=0;c!==s;++c)e.setTexture2DArray(t[c]||Nd,o[c])}function Gy(n){switch(n){case 5126:return wy;case 35664:return Ey;case 35665:return Ty;case 35666:return Ay;case 35674:return Cy;case 35675:return Py;case 35676:return Iy;case 5124:case 35670:return Ry;case 35667:case 35671:return Ly;case 35668:case 35672:return Ny;case 35669:case 35673:return Dy;case 5125:return Oy;case 36294:return Fy;case 36295:return Uy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Hy}}function vd(n,t){n.seq.push(t),n.map[t.id]=t}function Xy(n,t,e){let i=n.name,s=i.length;for(Vh.lastIndex=0;;){let o=Vh.exec(i),c=Vh.lastIndex,u=o[1],f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===s){vd(e,d===void 0?new Xh(u,n,t):new Wh(u,n,t));break}else{let y=e.map[u];y===void 0&&(y=new Yh(u),vd(e,y)),e=y}}}function yd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function qy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=s;c<o;c++){let u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}function $y(n){Ce._getMatrix(xd,Ce.workingColorSpace,n);let t=`mat3( ${xd.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(n)){case io:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Md(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let c=/ERROR: 0:(\d+)/.exec(o);if(c){let u=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+qy(n.getShaderSource(t),u)}else return o}function Zy(n,t){let e=$y(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jy(n,t){let e=Jy[t];return e===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ky(){Ce.getLuminanceCoefficients(Zl);let n=Zl.x.toFixed(4),t=Zl.y.toFixed(4),e=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function tx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ex(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),c=o.name,u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),e[c]={type:o.type,location:n.getAttribLocation(t,c),locationSize:u}}return e}function Uo(n){return n!==""}function Sd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function qh(n){return n.replace(nx,rx)}function rx(n,t){let e=we[t];if(e===void 0){let i=ix.get(t);if(i!==void 0)e=we[i],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return qh(e)}function wd(n){return n.replace(sx,ox)}function ox(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ed(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function lx(n){return ax[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function hx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function fx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ux[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function px(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":dx[n.combine]||"ENVMAP_BLENDING_NONE"}function mx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function gx(n,t,e,i){let s=n.getContext(),o=e.defines,c=e.vertexShader,u=e.fragmentShader,f=lx(e),d=hx(e),_=fx(e),y=px(e),g=mx(e),b=Qy(e),E=tx(o),P=s.createProgram(),S,M,F=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Uo).join(`
`),S.length>0&&(S+=`
`),M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Uo).join(`
`),M.length>0&&(M+=`
`)):(S=[Ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+_:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),M=[Ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+_:"",e.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?we.tonemapping_pars_fragment:"",e.toneMapping!==oi?jy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,Zy("linearToOutputTexel",e.outputColorSpace),Ky(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Uo).join(`
`)),c=qh(c),c=Sd(c,e),c=bd(c,e),u=qh(u),u=Sd(u,e),u=bd(u,e),c=wd(c),u=wd(u),e.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,M=["#define varying in",e.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let X=F+S+c,R=F+M+u,U=yd(s,s.VERTEX_SHADER,X),z=yd(s,s.FRAGMENT_SHADER,R);s.attachShader(P,U),s.attachShader(P,z),e.index0AttributeName!==void 0?s.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function q(nt){if(n.debug.checkShaderErrors){let it=s.getProgramInfoLog(P)||"",tt=s.getShaderInfoLog(U)||"",K=s.getShaderInfoLog(z)||"",B=it.trim(),et=tt.trim(),V=K.trim(),dt=!0,ct=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(dt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,P,U,z);else{let _t=Md(s,U,"vertex"),Mt=Md(s,z,"fragment");de("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+nt.name+`
Material Type: `+nt.type+`

Program Info Log: `+B+`
`+_t+`
`+Mt)}else B!==""?he("WebGLProgram: Program Info Log:",B):(et===""||V==="")&&(ct=!1);ct&&(nt.diagnostics={runnable:dt,programLog:B,vertexShader:{log:et,prefix:S},fragmentShader:{log:V,prefix:M}})}s.deleteShader(U),s.deleteShader(z),C=new Ps(s,P),H=ex(s,P)}let C;this.getUniforms=function(){return C===void 0&&q(this),C};let H;this.getAttributes=function(){return H===void 0&&q(this),H};let Y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=s.getProgramParameter(P,Wy)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yy++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=U,this.fragmentShader=z,this}function vx(n){return n===ar||n===No||n===Do}function yx(n,t,e,i,s,o){let c=new ps,u=new $h,f=new Set,d=[],_=new Map,y=i.logarithmicDepthBuffer,g=i.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return f.add(C),C===0?"uv":`uv${C}`}function P(C,H,Y,nt,it,tt){let K=nt.fog,B=it.geometry,et=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?nt.environment:null,V=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,dt=t.get(C.envMap||et,V),ct=dt&&dt.mapping===Ao?dt.image.height:null,_t=b[C.type];C.precision!==null&&(g=i.getMaxPrecision(C.precision),g!==C.precision&&he("WebGLProgram.getParameters:",C.precision,"not supported, using",g,"instead."));let Mt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Pt=Mt!==void 0?Mt.length:0,Ut=0;B.morphAttributes.position!==void 0&&(Ut=1),B.morphAttributes.normal!==void 0&&(Ut=2),B.morphAttributes.color!==void 0&&(Ut=3);let ae,le,pe,yt;if(_t){let Fe=Mi[_t];ae=Fe.vertexShader,le=Fe.fragmentShader}else{ae=C.vertexShader,le=C.fragmentShader;let Fe=u.getVertexShaderStage(C),Ie=u.getFragmentShaderStage(C);u.update(C,Fe,Ie),pe=Fe.id,yt=Ie.id}let Tt=n.getRenderTarget(),Gt=n.state.buffers.depth.getReversed(),re=it.isInstancedMesh===!0,Vt=it.isBatchedMesh===!0,ue=!!C.map,Oe=!!C.matcap,xe=!!dt,Ee=!!C.aoMap,ye=!!C.lightMap,Me=!!C.bumpMap&&C.wireframe===!1,Ne=!!C.normalMap,He=!!C.displacementMap,Qe=!!C.emissiveMap,Le=!!C.metalnessMap,J=!!C.roughnessMap,k=C.anisotropy>0,ht=C.clearcoat>0,mt=C.dispersion>0,O=C.retroreflectivity>0,T=C.iridescence>0,W=C.sheen>0,ot=C.transmission>0,Q=k&&!!C.anisotropyMap,At=ht&&!!C.clearcoatMap,Ct=ht&&!!C.clearcoatNormalMap,ft=ht&&!!C.clearcoatRoughnessMap,bt=T&&!!C.iridescenceMap,Ot=T&&!!C.iridescenceThicknessMap,Jt=W&&!!C.sheenColorMap,Ht=W&&!!C.sheenRoughnessMap,Ft=!!C.specularMap,te=!!C.specularColorMap,se=!!C.specularIntensityMap,me=ot&&!!C.transmissionMap,at=ot&&!!C.thicknessMap,Bt=!!C.gradientMap,St=!!C.alphaMap,kt=C.alphaTest>0,Yt=!!C.alphaHash,It=!!C.extensions,Lt=oi;C.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Lt=n.toneMapping);let Qt={shaderID:_t,shaderType:C.type,shaderName:C.name,vertexShader:ae,fragmentShader:le,defines:C.defines,customVertexShaderID:pe,customFragmentShaderID:yt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:g,batching:Vt,batchingColor:Vt&&it._colorsTexture!==null,instancing:re,instancingColor:re&&it.instanceColor!==null,instancingMorph:re&&it.morphTexture!==null,outputColorSpace:Tt===null?n.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!C.alphaToCoverage,map:ue,matcap:Oe,envMap:xe,envMapMode:xe&&dt.mapping,envMapCubeUVHeight:ct,aoMap:Ee,lightMap:ye,bumpMap:Me,normalMap:Ne,displacementMap:He,emissiveMap:Qe,normalMapObjectSpace:Ne&&C.normalMapType===Yf,normalMapTangentSpace:Ne&&C.normalMapType===Wl,packedNormalMap:Ne&&C.normalMapType===Wl&&vx(C.normalMap.format),metalnessMap:Le,roughnessMap:J,anisotropy:k,anisotropyMap:Q,clearcoat:ht,clearcoatMap:At,clearcoatNormalMap:Ct,clearcoatRoughnessMap:ft,dispersion:mt,retroreflection:O,iridescence:T,iridescenceMap:bt,iridescenceThicknessMap:Ot,sheen:W,sheenColorMap:Jt,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:te,specularIntensityMap:se,transmission:ot,transmissionMap:me,thicknessMap:at,gradientMap:Bt,opaque:C.transparent===!1&&C.blending===ws&&C.alphaToCoverage===!1,alphaMap:St,alphaTest:kt,alphaHash:Yt,combine:C.combine,mapUv:ue&&E(C.map.channel),aoMapUv:Ee&&E(C.aoMap.channel),lightMapUv:ye&&E(C.lightMap.channel),bumpMapUv:Me&&E(C.bumpMap.channel),normalMapUv:Ne&&E(C.normalMap.channel),displacementMapUv:He&&E(C.displacementMap.channel),emissiveMapUv:Qe&&E(C.emissiveMap.channel),metalnessMapUv:Le&&E(C.metalnessMap.channel),roughnessMapUv:J&&E(C.roughnessMap.channel),anisotropyMapUv:Q&&E(C.anisotropyMap.channel),clearcoatMapUv:At&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&E(C.sheenRoughnessMap.channel),specularMapUv:Ft&&E(C.specularMap.channel),specularColorMapUv:te&&E(C.specularColorMap.channel),specularIntensityMapUv:se&&E(C.specularIntensityMap.channel),transmissionMapUv:me&&E(C.transmissionMap.channel),thicknessMapUv:at&&E(C.thicknessMap.channel),alphaMapUv:St&&E(C.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ne||k),vertexNormals:!!B.attributes.normal,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!B.attributes.uv&&(ue||St),fog:!!K,useFog:C.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:C.wireframe===!1&&(C.flatShading===!0||B.attributes.normal===void 0&&Ne===!1&&(C.isMeshLambertMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isMeshPhysicalMaterial)),sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Gt,skinning:it.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Ut,numSunLights:H.sun.length,numDirLights:H.directional.length,numPointLights:H.point.length,numSpotLights:H.spot.length,numSpotLightMaps:H.spotLightMap.length,numRectAreaLights:H.rectArea.length,numHemiLights:H.hemi.length,numSunLightShadows:H.sunShadowMap.length,numDirLightShadows:H.directionalShadowMap.length,numPointLightShadows:H.pointShadowMap.length,numSpotLightShadows:H.spotShadowMap.length,numSpotLightShadowsWithMaps:H.numSpotLightShadowsWithMaps,numLightProbes:H.numLightProbes,numLightProbeGrids:tt.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,decodeVideoTexture:ue&&C.map.isVideoTexture===!0&&Ce.getTransfer(C.map.colorSpace)===Ue,decodeVideoTextureEmissive:Qe&&C.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(C.emissiveMap.colorSpace)===Ue,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===yn,flipSided:C.side===En,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:It&&C.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&C.extensions.multiDraw===!0||Vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Qt.vertexUv1s=f.has(1),Qt.vertexUv2s=f.has(2),Qt.vertexUv3s=f.has(3),f.clear(),Qt}function S(C){let H=[];if(C.shaderID?H.push(C.shaderID):(H.push(C.customVertexShaderID),H.push(C.customFragmentShaderID)),C.defines!==void 0)for(let Y in C.defines)H.push(Y),H.push(C.defines[Y]);return C.isRawShaderMaterial===!1&&(M(H,C),F(H,C),H.push(n.outputColorSpace)),H.push(C.customProgramCacheKey),H.join()}function M(C,H){C.push(H.precision),C.push(H.outputColorSpace),C.push(H.envMapMode),C.push(H.envMapCubeUVHeight),C.push(H.mapUv),C.push(H.alphaMapUv),C.push(H.lightMapUv),C.push(H.aoMapUv),C.push(H.bumpMapUv),C.push(H.normalMapUv),C.push(H.displacementMapUv),C.push(H.emissiveMapUv),C.push(H.metalnessMapUv),C.push(H.roughnessMapUv),C.push(H.anisotropyMapUv),C.push(H.clearcoatMapUv),C.push(H.clearcoatNormalMapUv),C.push(H.clearcoatRoughnessMapUv),C.push(H.iridescenceMapUv),C.push(H.iridescenceThicknessMapUv),C.push(H.sheenColorMapUv),C.push(H.sheenRoughnessMapUv),C.push(H.specularMapUv),C.push(H.specularColorMapUv),C.push(H.specularIntensityMapUv),C.push(H.transmissionMapUv),C.push(H.thicknessMapUv),C.push(H.combine),C.push(H.fogExp2),C.push(H.sizeAttenuation),C.push(H.morphTargetsCount),C.push(H.morphAttributeCount),C.push(H.numSunLights),C.push(H.numDirLights),C.push(H.numPointLights),C.push(H.numSpotLights),C.push(H.numSpotLightMaps),C.push(H.numHemiLights),C.push(H.numRectAreaLights),C.push(H.numSunLightShadows),C.push(H.numDirLightShadows),C.push(H.numPointLightShadows),C.push(H.numSpotLightShadows),C.push(H.numSpotLightShadowsWithMaps),C.push(H.numLightProbes),C.push(H.shadowMapType),C.push(H.toneMapping),C.push(H.numClippingPlanes),C.push(H.numClipIntersection),C.push(H.depthPacking)}function F(C,H){c.disableAll(),H.instancing&&c.enable(0),H.instancingColor&&c.enable(1),H.instancingMorph&&c.enable(2),H.matcap&&c.enable(3),H.envMap&&c.enable(4),H.normalMapObjectSpace&&c.enable(5),H.normalMapTangentSpace&&c.enable(6),H.clearcoat&&c.enable(7),H.iridescence&&c.enable(8),H.alphaTest&&c.enable(9),H.vertexColors&&c.enable(10),H.vertexAlphas&&c.enable(11),H.vertexUv1s&&c.enable(12),H.vertexUv2s&&c.enable(13),H.vertexUv3s&&c.enable(14),H.vertexTangents&&c.enable(15),H.anisotropy&&c.enable(16),H.alphaHash&&c.enable(17),H.batching&&c.enable(18),H.dispersion&&c.enable(19),H.retroreflection&&c.enable(24),H.batchingColor&&c.enable(20),H.gradientMap&&c.enable(21),H.packedNormalMap&&c.enable(22),H.vertexNormals&&c.enable(23),C.push(c.mask),c.disableAll(),H.fog&&c.enable(0),H.useFog&&c.enable(1),H.flatShading&&c.enable(2),H.logarithmicDepthBuffer&&c.enable(3),H.reversedDepthBuffer&&c.enable(4),H.skinning&&c.enable(5),H.morphTargets&&c.enable(6),H.morphNormals&&c.enable(7),H.morphColors&&c.enable(8),H.premultipliedAlpha&&c.enable(9),H.shadowMapEnabled&&c.enable(10),H.doubleSided&&c.enable(11),H.flipSided&&c.enable(12),H.useDepthPacking&&c.enable(13),H.dithering&&c.enable(14),H.transmission&&c.enable(15),H.sheen&&c.enable(16),H.opaque&&c.enable(17),H.pointsUvs&&c.enable(18),H.decodeVideoTexture&&c.enable(19),H.decodeVideoTextureEmissive&&c.enable(20),H.alphaToCoverage&&c.enable(21),H.numLightProbeGrids>0&&c.enable(22),H.hasPositionAttribute&&c.enable(23),C.push(c.mask)}function X(C){let H=b[C.type],Y;if(H){let nt=Mi[H];Y=od.clone(nt.uniforms)}else Y=C.uniforms;return Y}function R(C,H){let Y=_.get(H);return Y!==void 0?++Y.usedTimes:(Y=new gx(n,H,C,s),d.push(Y),_.set(H,Y)),Y}function U(C){if(--C.usedTimes===0){let H=d.indexOf(C);d[H]=d[d.length-1],d.pop(),_.delete(C.cacheKey),C.destroy()}}function z(C){u.remove(C)}function q(){u.dispose()}return{getParameters:P,getProgramCacheKey:S,getUniforms:X,acquireProgram:R,releaseProgram:U,releaseShaderCache:z,programs:d,dispose:q}}function xx(){let n=new WeakMap;function t(c){return n.has(c)}function e(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function s(c,u,f){n.get(c)[u]=f}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Mx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Td(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ad(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function c(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function u(g,b,E,P,S,M){let F=n[t];return F===void 0?(F={id:g.id,object:g,geometry:b,material:E,materialVariant:c(g),groupOrder:P,renderOrder:g.renderOrder,z:S,group:M},n[t]=F):(F.id=g.id,F.object=g,F.geometry=b,F.material=E,F.materialVariant=c(g),F.groupOrder=P,F.renderOrder=g.renderOrder,F.z=S,F.group=M),t++,F}function f(g,b,E,P,S,M,F){F.reversedDepth===!0&&(S=-S);let X=u(g,b,E,P,S,M);E.transmission>0?i.push(X):E.transparent===!0?s.push(X):e.push(X)}function d(g,b,E,P,S,M){let F=u(g,b,E,P,S,M);E.transmission>0?i.unshift(F):E.transparent===!0?s.unshift(F):e.unshift(F)}function _(g,b){e.length>1&&e.sort(g||Mx),i.length>1&&i.sort(b||Td),s.length>1&&s.sort(b||Td)}function y(){for(let g=t,b=n.length;g<b;g++){let E=n[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:f,unshift:d,finish:y,sort:_}}function Sx(){let n=new WeakMap;function t(i,s){let o=n.get(i),c;return o===void 0?(c=new Ad,n.set(i,[c])):s>=o.length?(c=new Ad,o.push(c)):c=o[s],c}function e(){n=new WeakMap}return{get:t,dispose:e}}function bx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new lt,color:new ve};break;case"SpotLight":e={position:new lt,direction:new lt,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new lt,color:new ve,distance:0,decay:0};break;case"HemisphereLight":e={direction:new lt,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":e={color:new ve,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return n[t.id]=e,e}}}function wx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function Tx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ax(n){let t=new bx,e=wx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new lt);let s=new lt,o=new Ye,c=new Ye;function u(d){let _=0,y=0,g=0;for(let it=0;it<9;it++)i.probe[it].set(0,0,0);let b=0,E=0,P=0,S=0,M=0,F=0,X=0,R=0,U=0,z=0,q=0,C=0,H=0,Y=0;d.sort(Tx);for(let it=0,tt=d.length;it<tt;it++){let K=d[it],B=K.color,et=K.intensity,V=K.distance,dt=null;if(K.shadow&&K.shadow.map&&(K.shadow.map.texture.format===ar?dt=K.shadow.map.texture:dt=K.shadow.map.depthTexture||K.shadow.map.texture),K.isAmbientLight)_+=B.r*et,y+=B.g*et,g+=B.b*et;else if(K.isLightProbe){for(let ct=0;ct<9;ct++)i.probe[ct].addScaledVector(K.sh.coefficients[ct],et);Y++}else if(K.isSunLight){let ct=t.get(K);if(ct.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){let _t=K.shadow,Mt=e.get(K);Mt.shadowIntensity=_t.intensity,Mt.shadowBias=_t.bias,Mt.shadowNormalBias=_t.normalBias,Mt.shadowRadius=_t.radius,Mt.shadowMapSize.copy(_t.mapSize).multiply(_t.getFrameExtents()),i.sunShadow[E]=Mt,i.sunShadowMap[E]=dt;let Pt=_t.getViewportCount();for(let Ut=0;Ut<Pt;Ut++)i.sunShadowMatrix[P+Ut]=_t.getMatrix(Ut),i.sunShadowCascade[P+Ut]=_t._cascadeData[Ut];P+=Pt,E++}i.sun[b]=ct,b++}else if(K.isDirectionalLight){let ct=t.get(K);if(ct.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){let _t=K.shadow,Mt=e.get(K);Mt.shadowIntensity=_t.intensity,Mt.shadowBias=_t.bias,Mt.shadowNormalBias=_t.normalBias,Mt.shadowRadius=_t.radius,Mt.shadowMapSize=_t.mapSize,i.directionalShadow[S]=Mt,i.directionalShadowMap[S]=dt,i.directionalShadowMatrix[S]=K.shadow.matrix,U++}i.directional[S]=ct,S++}else if(K.isSpotLight){let ct=t.get(K);ct.position.setFromMatrixPosition(K.matrixWorld),ct.color.copy(B).multiplyScalar(et),ct.distance=V,ct.coneCos=Math.cos(K.angle),ct.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),ct.decay=K.decay,i.spot[F]=ct;let _t=K.shadow;if(K.map&&(i.spotLightMap[C]=K.map,C++,_t.updateMatrices(K),K.castShadow&&H++),i.spotLightMatrix[F]=_t.matrix,K.castShadow){let Mt=e.get(K);Mt.shadowIntensity=_t.intensity,Mt.shadowBias=_t.bias,Mt.shadowNormalBias=_t.normalBias,Mt.shadowRadius=_t.radius,Mt.shadowMapSize=_t.mapSize,i.spotShadow[F]=Mt,i.spotShadowMap[F]=dt,q++}F++}else if(K.isRectAreaLight){let ct=t.get(K);ct.color.copy(B).multiplyScalar(et),ct.halfWidth.set(K.width*.5,0,0),ct.halfHeight.set(0,K.height*.5,0),i.rectArea[X]=ct,X++}else if(K.isPointLight){let ct=t.get(K);if(ct.color.copy(K.color).multiplyScalar(K.intensity),ct.distance=K.distance,ct.decay=K.decay,K.castShadow){let _t=K.shadow,Mt=e.get(K);Mt.shadowIntensity=_t.intensity,Mt.shadowBias=_t.bias,Mt.shadowNormalBias=_t.normalBias,Mt.shadowRadius=_t.radius,Mt.shadowMapSize=_t.mapSize,Mt.shadowCameraNear=_t.camera.near,Mt.shadowCameraFar=_t.camera.far,i.pointShadow[M]=Mt,i.pointShadowMap[M]=dt,i.pointShadowMatrix[M]=K.shadow.matrix,z++}i.point[M]=ct,M++}else if(K.isHemisphereLight){let ct=t.get(K);ct.skyColor.copy(K.color).multiplyScalar(et),ct.groundColor.copy(K.groundColor).multiplyScalar(et),i.hemi[R]=ct,R++}}X>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=$t.LTC_FLOAT_1,i.rectAreaLTC2=$t.LTC_FLOAT_2):(i.rectAreaLTC1=$t.LTC_HALF_1,i.rectAreaLTC2=$t.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=y,i.ambient[2]=g;let nt=i.hash;(nt.sunLength!==b||nt.directionalLength!==S||nt.pointLength!==M||nt.spotLength!==F||nt.rectAreaLength!==X||nt.hemiLength!==R||nt.numSunShadows!==E||nt.numDirectionalShadows!==U||nt.numPointShadows!==z||nt.numSpotShadows!==q||nt.numSpotMaps!==C||nt.numLightProbes!==Y)&&(i.sun.length=b,i.directional.length=S,i.spot.length=F,i.rectArea.length=X,i.point.length=M,i.hemi.length=R,i.sunShadow.length=E,i.sunShadowMap.length=E,i.sunShadowMatrix.length=P,i.sunShadowCascade.length=P,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.directionalShadowMatrix.length=U,i.pointShadow.length=z,i.pointShadowMap.length=z,i.pointShadowMatrix.length=z,i.spotShadow.length=q,i.spotShadowMap.length=q,i.spotLightMatrix.length=q+C-H,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=H,i.numLightProbes=Y,nt.sunLength=b,nt.directionalLength=S,nt.pointLength=M,nt.spotLength=F,nt.rectAreaLength=X,nt.hemiLength=R,nt.numSunShadows=E,nt.numDirectionalShadows=U,nt.numPointShadows=z,nt.numSpotShadows=q,nt.numSpotMaps=C,nt.numLightProbes=Y,i.version=Ex++)}function f(d,_){let y=0,g=0,b=0,E=0,P=0,S=0,M=_.matrixWorldInverse;for(let F=0,X=d.length;F<X;F++){let R=d[F];if(R.isSunLight){let U=i.sun[y];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(M),y++}else if(R.isDirectionalLight){let U=i.directional[g];U.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(M),g++}else if(R.isSpotLight){let U=i.spot[E];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(M),E++}else if(R.isRectAreaLight){let U=i.rectArea[P];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(M),c.identity(),o.copy(R.matrixWorld),o.premultiply(M),c.extractRotation(o),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),U.halfWidth.applyMatrix4(c),U.halfHeight.applyMatrix4(c),P++}else if(R.isPointLight){let U=i.point[b];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(M),b++}else if(R.isHemisphereLight){let U=i.hemi[S];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(M),S++}}}return{setup:u,setupView:f,state:i}}function Cd(n){let t=new Ax(n),e=[],i=[],s=[];function o(g){y.camera=g,e.length=0,i.length=0,s.length=0}function c(g){e.push(g)}function u(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(e)}function _(g){t.setupView(e,g)}let y={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:y,setupLights:d,setupLightsView:_,pushLight:c,pushShadow:u,pushLightProbeGrid:f}}function Cx(n){let t=new WeakMap;function e(s,o=0){let c=t.get(s),u;return c===void 0?(u=new Cd(n),t.set(s,[u])):o>=c.length?(u=new Cd(n),c.push(u)):u=c[o],u}function i(){t=new WeakMap}return{get:e,dispose:i}}function Nx(n,t,e){let i=new _s,s=new oe,o=new oe,c=new Je,u=new Wa,f=new Ya,d={},_=e.maxTextureSize,y={[ir]:En,[En]:ir,[yn]:yn},g=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Px,fragmentShader:Ix}),b=g.clone();b.defines.HORIZONTAL_PASS=1;let E=new Ze;E.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new Ve(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let M=this.type;this.render=function(z,q,C){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;this.type===bf&&(he("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=To);let H=n.getRenderTarget(),Y=n.getActiveCubeFace(),nt=n.getActiveMipmapLevel(),it=n.state;it.setBlending(yi),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);let tt=M!==this.type;tt&&q.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(B=>B.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,B=z.length;K<B;K++){let et=z[K],V=et.shadow;if(V===void 0){he("WebGLShadowMap:",et,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let dt=V.getFrameExtents();s.multiply(dt),o.copy(V.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(o.x=Math.floor(_/dt.x),s.x=o.x*dt.x,V.mapSize.x=o.x),s.y>_&&(o.y=Math.floor(_/dt.y),s.y=o.y*dt.y,V.mapSize.y=o.y));let ct=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ct,V.map===null||tt===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===bs){if(et.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new In(s.x,s.y,{format:ar,type:ci,minFilter:fn,magFilter:fn,generateMipmaps:!1}),V.map.texture.name=et.name+".shadowMap",V.map.depthTexture=new Ji(s.x,s.y,li),V.map.depthTexture.name=et.name+".shadowMapDepth",V.map.depthTexture.format=_i,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=cn,V.map.depthTexture.magFilter=cn}else et.isPointLight?(V.map=new jl(s.x),V.map.depthTexture=new Ga(s.x,ai)):(V.map=new In(s.x,s.y),V.map.depthTexture=new Ji(s.x,s.y,ai)),V.map.depthTexture.name=et.name+".shadowMap",V.map.depthTexture.format=_i,this.type===To?(V.map.depthTexture.compareFunction=ct?ql:Yl,V.map.depthTexture.minFilter=fn,V.map.depthTexture.magFilter=fn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=cn,V.map.depthTexture.magFilter=cn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let _t=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();et.isPointLight!==!0&&V.updateMatrices(et,C);for(let Mt=0;Mt<_t;Mt++){let Pt=V.getCamera(Mt);if(et.isPointLight){let Ut=V.camera,ae=V.matrix,le=et.distance||Ut.far;le!==Ut.far&&(Ut.far=le,Ut.updateProjectionMatrix()),Fo.setFromMatrixPosition(et.matrixWorld),Ut.position.copy(Fo),Hh.copy(Ut.position),Hh.add(Rx[Mt]),Ut.up.copy(Lx[Mt]),Ut.lookAt(Hh),Ut.updateMatrixWorld(),ae.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Pd.multiplyMatrices(Ut.projectionMatrix,Ut.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Pd,Ut.coordinateSystem,Ut.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Mt),n.clear();else{Mt===0&&(n.setRenderTarget(V.map),n.clear());let Ut=V.getViewport(Mt);c.set(o.x*Ut.x,o.y*Ut.y,o.x*Ut.z,o.y*Ut.w),it.viewport(c)}i=V.getFrustum(Mt),R(q,C,Pt,et,this.type)}V.isPointLightShadow!==!0&&this.type===bs&&F(V,C),V.needsUpdate=!1}M=this.type,S.needsUpdate=!1,n.setRenderTarget(H,Y,nt)};function F(z,q){let C=t.update(P);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,b.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),z.mapPass===null?z.mapPass=new In(s.x,s.y,{format:ar,type:ci}):(z.mapPass.width!==z.map.width||z.mapPass.height!==z.map.height)&&z.mapPass.setSize(z.map.width,z.map.height),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value.set(z.map.width,z.map.height),g.uniforms.radius.value=z.radius,n.setRenderTarget(z.mapPass),n.clear(),n.renderBufferDirect(q,null,C,g,P,null),b.uniforms.shadow_pass.value=z.mapPass.texture,b.uniforms.resolution.value.set(z.map.width,z.map.height),b.uniforms.radius.value=z.radius,n.setRenderTarget(z.map),n.clear(),n.renderBufferDirect(q,null,C,b,P,null)}function X(z,q,C,H){let Y=null,nt=C.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(nt!==void 0)Y=nt;else if(Y=C.isPointLight===!0?f:u,n.localClippingEnabled&&q.clipShadows===!0&&Array.isArray(q.clippingPlanes)&&q.clippingPlanes.length!==0||q.displacementMap&&q.displacementScale!==0||q.alphaMap&&q.alphaTest>0||q.map&&q.alphaTest>0||q.alphaToCoverage===!0){let it=Y.uuid,tt=q.uuid,K=d[it];K===void 0&&(K={},d[it]=K);let B=K[tt];B===void 0&&(B=Y.clone(),K[tt]=B,q.addEventListener("dispose",U)),Y=B}if(Y.visible=q.visible,Y.wireframe=q.wireframe,H===bs?Y.side=q.shadowSide!==null?q.shadowSide:q.side:Y.side=q.shadowSide!==null?q.shadowSide:y[q.side],Y.alphaMap=q.alphaMap,Y.alphaTest=q.alphaToCoverage===!0?.5:q.alphaTest,Y.map=q.map,Y.clipShadows=q.clipShadows,Y.clippingPlanes=q.clippingPlanes,Y.clipIntersection=q.clipIntersection,Y.displacementMap=q.displacementMap,Y.displacementScale=q.displacementScale,Y.displacementBias=q.displacementBias,Y.wireframeLinewidth=q.wireframeLinewidth,Y.linewidth=q.linewidth,C.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){let it=n.properties.get(Y);it.light=C}return Y}function R(z,q,C,H,Y){if(z.visible===!1)return;if(z.layers.test(q.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&Y===bs)&&(!z.frustumCulled||z.intersectsFrustum(i))){z.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,z.matrixWorld);let tt=t.update(z),K=z.material;if(Array.isArray(K)){let B=tt.groups;for(let et=0,V=B.length;et<V;et++){let dt=B[et],ct=K[dt.materialIndex];if(ct&&ct.visible){let _t=X(z,ct,H,Y);z.onBeforeShadow(n,z,q,C,tt,_t,dt),n.renderBufferDirect(C,null,tt,_t,z,dt),z.onAfterShadow(n,z,q,C,tt,_t,dt)}}}else if(K.visible){let B=X(z,K,H,Y);z.onBeforeShadow(n,z,q,C,tt,B,null),n.renderBufferDirect(C,null,tt,B,z,null),z.onAfterShadow(n,z,q,C,tt,B,null)}}let it=z.children;for(let tt=0,K=it.length;tt<K;tt++)R(it[tt],q,C,H,Y)}function U(z){z.target.removeEventListener("dispose",U);for(let C in d){let H=d[C],Y=z.target.uuid;Y in H&&(H[Y].dispose(),delete H[Y])}}}function Dx(n,t){function e(){let at=!1,Bt=new Je,St=null,kt=new Je(0,0,0,0);return{setMask:function(Yt){St!==Yt&&!at&&(n.colorMask(Yt,Yt,Yt,Yt),St=Yt)},setLocked:function(Yt){at=Yt},setClear:function(Yt,It,Lt,Qt,Fe){Fe===!0&&(Yt*=Qt,It*=Qt,Lt*=Qt),Bt.set(Yt,It,Lt,Qt),kt.equals(Bt)===!1&&(n.clearColor(Yt,It,Lt,Qt),kt.copy(Bt))},reset:function(){at=!1,St=null,kt.set(-1,0,0,0)}}}function i(){let at=!1,Bt=!1,St=null,kt=null,Yt=null;return{setReversed:function(It){if(Bt!==It){let Lt=t.get("EXT_clip_control");It?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),Bt=It;let Qt=Yt;Yt=null,this.setClear(Qt)}},getReversed:function(){return Bt},setTest:function(It){It?Tt(n.DEPTH_TEST):Gt(n.DEPTH_TEST)},setMask:function(It){St!==It&&!at&&(n.depthMask(It),St=It)},setFunc:function(It){if(Bt&&(It=id[It]),kt!==It){switch(It){case Ta:n.depthFunc(n.NEVER);break;case Aa:n.depthFunc(n.ALWAYS);break;case Ca:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case Pa:n.depthFunc(n.EQUAL);break;case Ia:n.depthFunc(n.GEQUAL);break;case Ra:n.depthFunc(n.GREATER);break;case La:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}kt=It}},setLocked:function(It){at=It},setClear:function(It){Yt!==It&&(Yt=It,Bt&&(It=1-It),n.clearDepth(It))},reset:function(){at=!1,St=null,kt=null,Yt=null,Bt=!1}}}function s(){let at=!1,Bt=null,St=null,kt=null,Yt=null,It=null,Lt=null,Qt=null,Fe=null;return{setTest:function(Ie){at||(Ie?Tt(n.STENCIL_TEST):Gt(n.STENCIL_TEST))},setMask:function(Ie){Bt!==Ie&&!at&&(n.stencilMask(Ie),Bt=Ie)},setFunc:function(Ie,Mn,Tn){(St!==Ie||kt!==Mn||Yt!==Tn)&&(n.stencilFunc(Ie,Mn,Tn),St=Ie,kt=Mn,Yt=Tn)},setOp:function(Ie,Mn,Tn){(It!==Ie||Lt!==Mn||Qt!==Tn)&&(n.stencilOp(Ie,Mn,Tn),It=Ie,Lt=Mn,Qt=Tn)},setLocked:function(Ie){at=Ie},setClear:function(Ie){Fe!==Ie&&(n.clearStencil(Ie),Fe=Ie)},reset:function(){at=!1,Bt=null,St=null,kt=null,Yt=null,It=null,Lt=null,Qt=null,Fe=null}}}let o=new e,c=new i,u=new s,f=new WeakMap,d=new WeakMap,_={},y={},g={},b=new WeakMap,E=[],P=null,S=!1,M=null,F=null,X=null,R=null,U=null,z=null,q=null,C=new ve(0,0,0),H=0,Y=!1,nt=null,it=null,tt=null,K=null,B=null,et=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,dt=0,ct=n.getParameter(n.VERSION);ct.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(ct)[1]),V=dt>=1):ct.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),V=dt>=2);let _t=null,Mt={},Pt=n.getParameter(n.SCISSOR_BOX),Ut=n.getParameter(n.VIEWPORT),ae=new Je().fromArray(Pt),le=new Je().fromArray(Ut);function pe(at,Bt,St,kt){let Yt=new Uint8Array(4),It=n.createTexture();n.bindTexture(at,It),n.texParameteri(at,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(at,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<St;Lt++)at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?n.texImage3D(Bt,0,n.RGBA,1,1,kt,0,n.RGBA,n.UNSIGNED_BYTE,Yt):n.texImage2D(Bt+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Yt);return It}let yt={};yt[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),yt[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),yt[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Tt(n.DEPTH_TEST),c.setFunc(cs),Me(!1),Ne(oh),Tt(n.CULL_FACE),Ee(yi);function Tt(at){_[at]!==!0&&(n.enable(at),_[at]=!0)}function Gt(at){_[at]!==!1&&(n.disable(at),_[at]=!1)}function re(at,Bt){return g[at]!==Bt?(n.bindFramebuffer(at,Bt),g[at]=Bt,at===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Bt),at===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Bt),!0):!1}function Vt(at,Bt){let St=E,kt=!1;if(at){St=b.get(Bt),St===void 0&&(St=[],b.set(Bt,St));let Yt=at.textures;if(St.length!==Yt.length||St[0]!==n.COLOR_ATTACHMENT0){for(let It=0,Lt=Yt.length;It<Lt;It++)St[It]=n.COLOR_ATTACHMENT0+It;St.length=Yt.length,kt=!0}}else St[0]!==n.BACK&&(St[0]=n.BACK,kt=!0);kt&&n.drawBuffers(St)}function ue(at){return P!==at?(n.useProgram(at),P=at,!0):!1}let Oe={[br]:n.FUNC_ADD,[Ef]:n.FUNC_SUBTRACT,[Tf]:n.FUNC_REVERSE_SUBTRACT};Oe[Af]=n.MIN,Oe[Cf]=n.MAX;let xe={[Pf]:n.ZERO,[If]:n.ONE,[Rf]:n.SRC_COLOR,[hh]:n.SRC_ALPHA,[Uf]:n.SRC_ALPHA_SATURATE,[Of]:n.DST_COLOR,[Nf]:n.DST_ALPHA,[Lf]:n.ONE_MINUS_SRC_COLOR,[uh]:n.ONE_MINUS_SRC_ALPHA,[Ff]:n.ONE_MINUS_DST_COLOR,[Df]:n.ONE_MINUS_DST_ALPHA,[Bf]:n.CONSTANT_COLOR,[kf]:n.ONE_MINUS_CONSTANT_COLOR,[zf]:n.CONSTANT_ALPHA,[Vf]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(at,Bt,St,kt,Yt,It,Lt,Qt,Fe,Ie){if(at===yi){S===!0&&(Gt(n.BLEND),S=!1);return}if(S===!1&&(Tt(n.BLEND),S=!0),at!==wf){if(at!==M||Ie!==Y){if((F!==br||U!==br)&&(n.blendEquation(n.FUNC_ADD),F=br,U=br),Ie)switch(at){case ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ah:n.blendFunc(n.ONE,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ch:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:de("WebGLState: Invalid blending: ",at);break}else switch(at){case ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ah:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case lh:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ch:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",at);break}X=null,R=null,z=null,q=null,C.set(0,0,0),H=0,M=at,Y=Ie}return}Yt=Yt||Bt,It=It||St,Lt=Lt||kt,(Bt!==F||Yt!==U)&&(n.blendEquationSeparate(Oe[Bt],Oe[Yt]),F=Bt,U=Yt),(St!==X||kt!==R||It!==z||Lt!==q)&&(n.blendFuncSeparate(xe[St],xe[kt],xe[It],xe[Lt]),X=St,R=kt,z=It,q=Lt),(Qt.equals(C)===!1||Fe!==H)&&(n.blendColor(Qt.r,Qt.g,Qt.b,Fe),C.copy(Qt),H=Fe),M=at,Y=!1}function ye(at,Bt){at.side===yn?Gt(n.CULL_FACE):Tt(n.CULL_FACE);let St=at.side===En;Bt&&(St=!St),Me(St),at.blending===ws&&at.transparent===!1?Ee(yi):Ee(at.blending,at.blendEquation,at.blendSrc,at.blendDst,at.blendEquationAlpha,at.blendSrcAlpha,at.blendDstAlpha,at.blendColor,at.blendAlpha,at.premultipliedAlpha),c.setFunc(at.depthFunc),c.setTest(at.depthTest),c.setMask(at.depthWrite),o.setMask(at.colorWrite);let kt=at.stencilWrite;u.setTest(kt),kt&&(u.setMask(at.stencilWriteMask),u.setFunc(at.stencilFunc,at.stencilRef,at.stencilFuncMask),u.setOp(at.stencilFail,at.stencilZFail,at.stencilZPass)),Qe(at.polygonOffset,at.polygonOffsetFactor,at.polygonOffsetUnits),at.alphaToCoverage===!0?Tt(n.SAMPLE_ALPHA_TO_COVERAGE):Gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Me(at){nt!==at&&(at?n.frontFace(n.CW):n.frontFace(n.CCW),nt=at)}function Ne(at){at!==Mf?(Tt(n.CULL_FACE),at!==it&&(at===oh?n.cullFace(n.BACK):at===Sf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Gt(n.CULL_FACE),it=at}function He(at){at!==tt&&(V&&n.lineWidth(at),tt=at)}function Qe(at,Bt,St){at?(Tt(n.POLYGON_OFFSET_FILL),(K!==Bt||B!==St)&&(K=Bt,B=St,c.getReversed()&&(Bt=-Bt),n.polygonOffset(Bt,St))):Gt(n.POLYGON_OFFSET_FILL)}function Le(at){at?Tt(n.SCISSOR_TEST):Gt(n.SCISSOR_TEST)}function J(at){at===void 0&&(at=n.TEXTURE0+et-1),_t!==at&&(n.activeTexture(at),_t=at)}function k(at,Bt,St){St===void 0&&(_t===null?St=n.TEXTURE0+et-1:St=_t);let kt=Mt[St];kt===void 0&&(kt={type:void 0,texture:void 0},Mt[St]=kt),(kt.type!==at||kt.texture!==Bt)&&(_t!==St&&(n.activeTexture(St),_t=St),n.bindTexture(at,Bt||yt[at]),kt.type=at,kt.texture=Bt)}function ht(){let at=Mt[_t];at!==void 0&&at.type!==void 0&&(n.bindTexture(at.type,null),at.type=void 0,at.texture=void 0)}function mt(){try{n.compressedTexImage2D(...arguments)}catch(at){de("WebGLState:",at)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(at){de("WebGLState:",at)}}function T(){try{n.texSubImage2D(...arguments)}catch(at){de("WebGLState:",at)}}function W(){try{n.texSubImage3D(...arguments)}catch(at){de("WebGLState:",at)}}function ot(){try{n.compressedTexSubImage2D(...arguments)}catch(at){de("WebGLState:",at)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(at){de("WebGLState:",at)}}function At(){try{n.texStorage2D(...arguments)}catch(at){de("WebGLState:",at)}}function Ct(){try{n.texStorage3D(...arguments)}catch(at){de("WebGLState:",at)}}function ft(){try{n.texImage2D(...arguments)}catch(at){de("WebGLState:",at)}}function bt(){try{n.texImage3D(...arguments)}catch(at){de("WebGLState:",at)}}function Ot(at){return y[at]!==void 0?y[at]:n.getParameter(at)}function Jt(at,Bt){y[at]!==Bt&&(n.pixelStorei(at,Bt),y[at]=Bt)}function Ht(at){ae.equals(at)===!1&&(n.scissor(at.x,at.y,at.z,at.w),ae.copy(at))}function Ft(at){le.equals(at)===!1&&(n.viewport(at.x,at.y,at.z,at.w),le.copy(at))}function te(at,Bt){let St=d.get(Bt);St===void 0&&(St=new WeakMap,d.set(Bt,St));let kt=St.get(at);kt===void 0&&(kt=n.getUniformBlockIndex(Bt,at.name),St.set(at,kt))}function se(at,Bt){let kt=d.get(Bt).get(at);f.get(Bt)!==kt&&(n.uniformBlockBinding(Bt,kt,at.__bindingPointIndex),f.set(Bt,kt))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),_={},y={},_t=null,Mt={},g={},b=new WeakMap,E=[],P=null,S=!1,M=null,F=null,X=null,R=null,U=null,z=null,q=null,C=new ve(0,0,0),H=0,Y=!1,nt=null,it=null,tt=null,K=null,B=null,ae.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Tt,disable:Gt,bindFramebuffer:re,drawBuffers:Vt,useProgram:ue,setBlending:Ee,setMaterial:ye,setFlipSided:Me,setCullFace:Ne,setLineWidth:He,setPolygonOffset:Qe,setScissorTest:Le,activeTexture:J,bindTexture:k,unbindTexture:ht,compressedTexImage2D:mt,compressedTexImage3D:O,texImage2D:ft,texImage3D:bt,pixelStorei:Jt,getParameter:Ot,updateUBOMapping:te,uniformBlockBinding:se,texStorage2D:At,texStorage3D:Ct,texSubImage2D:T,texSubImage3D:W,compressedTexSubImage2D:ot,compressedTexSubImage3D:Q,scissor:Ht,viewport:Ft,reset:me}}function Ox(n,t,e,i,s,o,c){let u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new oe,_=new WeakMap,y=new Set,g,b=new WeakMap,E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(O,T){return E?new OffscreenCanvas(O,T):ro("canvas")}function S(O,T,W){let ot=1,Q=mt(O);if((Q.width>W||Q.height>W)&&(ot=W/Math.max(Q.width,Q.height)),ot<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let At=Math.floor(ot*Q.width),Ct=Math.floor(ot*Q.height);g===void 0&&(g=P(At,Ct));let ft=T?P(At,Ct):g;return ft.width=At,ft.height=Ct,ft.getContext("2d").drawImage(O,0,0,At,Ct),he("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+At+"x"+Ct+")."),ft}else return"data"in O&&he("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),O;return O}function M(O){return O.generateMipmaps}function F(O){n.generateMipmap(O)}function X(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(O,T,W,ot,Q,At=!1){if(O!==null){if(n[O]!==void 0)return n[O];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ct;ot&&(Ct=t.get("EXT_texture_norm16"),Ct||he("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=T;if(T===n.RED&&(W===n.FLOAT&&(ft=n.R32F),W===n.HALF_FLOAT&&(ft=n.R16F),W===n.UNSIGNED_BYTE&&(ft=n.R8),W===n.UNSIGNED_SHORT&&Ct&&(ft=Ct.R16_EXT),W===n.SHORT&&Ct&&(ft=Ct.R16_SNORM_EXT)),T===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ft=n.R8UI),W===n.UNSIGNED_SHORT&&(ft=n.R16UI),W===n.UNSIGNED_INT&&(ft=n.R32UI),W===n.BYTE&&(ft=n.R8I),W===n.SHORT&&(ft=n.R16I),W===n.INT&&(ft=n.R32I)),T===n.RG&&(W===n.FLOAT&&(ft=n.RG32F),W===n.HALF_FLOAT&&(ft=n.RG16F),W===n.UNSIGNED_BYTE&&(ft=n.RG8),W===n.UNSIGNED_SHORT&&Ct&&(ft=Ct.RG16_EXT),W===n.SHORT&&Ct&&(ft=Ct.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ft=n.RG8UI),W===n.UNSIGNED_SHORT&&(ft=n.RG16UI),W===n.UNSIGNED_INT&&(ft=n.RG32UI),W===n.BYTE&&(ft=n.RG8I),W===n.SHORT&&(ft=n.RG16I),W===n.INT&&(ft=n.RG32I)),T===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ft=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ft=n.RGB16UI),W===n.UNSIGNED_INT&&(ft=n.RGB32UI),W===n.BYTE&&(ft=n.RGB8I),W===n.SHORT&&(ft=n.RGB16I),W===n.INT&&(ft=n.RGB32I)),T===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ft=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ft=n.RGBA16UI),W===n.UNSIGNED_INT&&(ft=n.RGBA32UI),W===n.BYTE&&(ft=n.RGBA8I),W===n.SHORT&&(ft=n.RGBA16I),W===n.INT&&(ft=n.RGBA32I)),T===n.RGB&&(W===n.UNSIGNED_SHORT&&Ct&&(ft=Ct.RGB16_EXT),W===n.SHORT&&Ct&&(ft=Ct.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(ft=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(ft=n.R11F_G11F_B10F)),T===n.RGBA){let bt=At?io:Ce.getTransfer(Q);W===n.FLOAT&&(ft=n.RGBA32F),W===n.HALF_FLOAT&&(ft=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ft=bt===Ue?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&Ct&&(ft=Ct.RGBA16_EXT),W===n.SHORT&&Ct&&(ft=Ct.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(ft=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ft=n.RGB5_A1)}return(ft===n.R16F||ft===n.R32F||ft===n.RG16F||ft===n.RG32F||ft===n.RGBA16F||ft===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function U(O,T){let W;return O?T===null||T===ai||T===Ts?W=n.DEPTH24_STENCIL8:T===li?W=n.DEPTH32F_STENCIL8:T===Es&&(W=n.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ai||T===Ts?W=n.DEPTH_COMPONENT24:T===li?W=n.DEPTH_COMPONENT32F:T===Es&&(W=n.DEPTH_COMPONENT16),W}function z(O,T){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==cn&&O.minFilter!==fn?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function q(O){let T=O.target;T.removeEventListener("dispose",q),H(T),T.isVideoTexture&&_.delete(T),T.isHTMLTexture&&y.delete(T)}function C(O){let T=O.target;T.removeEventListener("dispose",C),nt(T)}function H(O){let T=i.get(O);if(T.__webglInit===void 0)return;let W=O.source,ot=b.get(W);if(ot){let Q=ot[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&Y(O),Object.keys(ot).length===0&&b.delete(W)}i.remove(O)}function Y(O){let T=i.get(O);n.deleteTexture(T.__webglTexture);let W=O.source,ot=b.get(W);delete ot[T.__cacheKey],c.memory.textures--}function nt(O){let T=i.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),i.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(T.__webglFramebuffer[ot]))for(let Q=0;Q<T.__webglFramebuffer[ot].length;Q++)n.deleteFramebuffer(T.__webglFramebuffer[ot][Q]);else n.deleteFramebuffer(T.__webglFramebuffer[ot]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ot])}else{if(Array.isArray(T.__webglFramebuffer))for(let ot=0;ot<T.__webglFramebuffer.length;ot++)n.deleteFramebuffer(T.__webglFramebuffer[ot]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ot=0;ot<T.__webglColorRenderbuffer.length;ot++)T.__webglColorRenderbuffer[ot]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ot]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let W=O.textures;for(let ot=0,Q=W.length;ot<Q;ot++){let At=i.get(W[ot]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),c.memory.textures--),i.remove(W[ot])}i.remove(O)}let it=0;function tt(){it=0}function K(){return it}function B(O){it=O}function et(){let O=it;return O>=s.maxTextures&&he("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),it+=1,O}function V(O){let T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function dt(O,T){let W=i.get(O);if(O.isVideoTexture&&k(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&W.__version!==O.version){let ot=O.image;if(ot===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(W,O,T);return}}else O.isExternalTexture&&(W.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+T)}function ct(O,T){let W=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&W.__version!==O.version){Gt(W,O,T);return}else O.isExternalTexture&&(W.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+T)}function _t(O,T){let W=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&W.__version!==O.version){Gt(W,O,T);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+T)}function Mt(O,T){let W=i.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&W.__version!==O.version){re(W,O,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+T)}let Pt={[Na]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[Da]:n.MIRRORED_REPEAT},Ut={[cn]:n.NEAREST,[Xf]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[ll]:n.LINEAR_MIPMAP_NEAREST,[sr]:n.LINEAR_MIPMAP_LINEAR},ae={[$f]:n.NEVER,[Qf]:n.ALWAYS,[Zf]:n.LESS,[Yl]:n.LEQUAL,[Jf]:n.EQUAL,[ql]:n.GEQUAL,[jf]:n.GREATER,[Kf]:n.NOTEQUAL};function le(O,T){if(T.type===li&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===fn||T.magFilter===ll||T.magFilter===Co||T.magFilter===sr||T.minFilter===fn||T.minFilter===ll||T.minFilter===Co||T.minFilter===sr)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,Pt[T.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,Pt[T.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,Pt[T.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,Ut[T.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,Ut[T.minFilter]),T.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,ae[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===cn||T.minFilter!==Co&&T.minFilter!==sr||T.type===li&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(O,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function pe(O,T){let W=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",q));let ot=T.source,Q=b.get(ot);Q===void 0&&(Q={},b.set(ot,Q));let At=V(T);if(At!==O.__cacheKey){Q[At]===void 0&&(Q[At]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,W=!0),Q[At].usedTimes++;let Ct=Q[O.__cacheKey];Ct!==void 0&&(Q[O.__cacheKey].usedTimes--,Ct.usedTimes===0&&Y(T)),O.__cacheKey=At,O.__webglTexture=Q[At].texture}return W}function yt(O,T,W){return Math.floor(Math.floor(O/W)/T)}function Tt(O,T,W,ot){let At=O.updateRanges;if(At.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,W,ot,T.data);else{At.sort((Jt,Ht)=>Jt.start-Ht.start);let Ct=0;for(let Jt=1;Jt<At.length;Jt++){let Ht=At[Ct],Ft=At[Jt],te=Ht.start+Ht.count,se=yt(Ft.start,T.width,4),me=yt(Ht.start,T.width,4);Ft.start<=te+1&&se===me&&yt(Ft.start+Ft.count-1,T.width,4)===se?Ht.count=Math.max(Ht.count,Ft.start+Ft.count-Ht.start):(++Ct,At[Ct]=Ft)}At.length=Ct+1;let ft=e.getParameter(n.UNPACK_ROW_LENGTH),bt=e.getParameter(n.UNPACK_SKIP_PIXELS),Ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let Jt=0,Ht=At.length;Jt<Ht;Jt++){let Ft=At[Jt],te=Math.floor(Ft.start/4),se=Math.ceil(Ft.count/4),me=te%T.width,at=Math.floor(te/T.width),Bt=se,St=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,me),e.pixelStorei(n.UNPACK_SKIP_ROWS,at),e.texSubImage2D(n.TEXTURE_2D,0,me,at,Bt,St,W,ot,T.data)}O.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ft),e.pixelStorei(n.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ot)}}function Gt(O,T,W){let ot=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ot=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ot=n.TEXTURE_3D);let Q=pe(O,T),At=T.source;e.bindTexture(ot,O.__webglTexture,n.TEXTURE0+W);let Ct=i.get(At);if(At.version!==Ct.__version||Q===!0){if(e.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let St=Ce.getPrimaries(Ce.workingColorSpace),kt=T.colorSpace===Di?null:Ce.getPrimaries(T.colorSpace),Yt=T.colorSpace===Di||St===kt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let bt=S(T.image,!1,s.maxTextureSize);bt=ht(T,bt);let Ot=o.convert(T.format,T.colorSpace),Jt=o.convert(T.type),Ht=R(T.internalFormat,Ot,Jt,T.normalized,T.colorSpace,T.isVideoTexture);le(ot,T);let Ft,te=T.mipmaps,se=T.isVideoTexture!==!0,me=Ct.__version===void 0||Q===!0,at=At.dataReady,Bt=z(T,bt);if(T.isDepthTexture)Ht=U(T.format===or,T.type),me&&(se?e.texStorage2D(n.TEXTURE_2D,1,Ht,bt.width,bt.height):e.texImage2D(n.TEXTURE_2D,0,Ht,bt.width,bt.height,0,Ot,Jt,null));else if(T.isDataTexture)if(te.length>0){se&&me&&e.texStorage2D(n.TEXTURE_2D,Bt,Ht,te[0].width,te[0].height);for(let St=0,kt=te.length;St<kt;St++)Ft=te[St],se?at&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,Ft.width,Ft.height,Ot,Jt,Ft.data):e.texImage2D(n.TEXTURE_2D,St,Ht,Ft.width,Ft.height,0,Ot,Jt,Ft.data);T.generateMipmaps=!1}else se?(me&&e.texStorage2D(n.TEXTURE_2D,Bt,Ht,bt.width,bt.height),at&&Tt(T,bt,Ot,Jt)):e.texImage2D(n.TEXTURE_2D,0,Ht,bt.width,bt.height,0,Ot,Jt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){se&&me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,Ht,te[0].width,te[0].height,bt.depth);for(let St=0,kt=te.length;St<kt;St++)if(Ft=te[St],T.format!==Yn)if(Ot!==null)if(se){if(at)if(T.layerUpdates.size>0){let Yt=Oh(Ft.width,Ft.height,T.format,T.type);for(let It of T.layerUpdates){let Lt=Ft.data.subarray(It*Yt/Ft.data.BYTES_PER_ELEMENT,(It+1)*Yt/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,It,Ft.width,Ft.height,1,Ot,Lt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,0,Ft.width,Ft.height,bt.depth,Ot,Ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,St,Ht,Ft.width,Ft.height,bt.depth,0,Ft.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,0,Ft.width,Ft.height,bt.depth,Ot,Jt,Ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,St,Ht,Ft.width,Ft.height,bt.depth,0,Ot,Jt,Ft.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{se&&me&&e.texStorage2D(n.TEXTURE_2D,Bt,Ht,te[0].width,te[0].height);for(let St=0,kt=te.length;St<kt;St++)Ft=te[St],T.format!==Yn?Ot!==null?se?at&&e.compressedTexSubImage2D(n.TEXTURE_2D,St,0,0,Ft.width,Ft.height,Ot,Ft.data):e.compressedTexImage2D(n.TEXTURE_2D,St,Ht,Ft.width,Ft.height,0,Ft.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?at&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,Ft.width,Ft.height,Ot,Jt,Ft.data):e.texImage2D(n.TEXTURE_2D,St,Ht,Ft.width,Ft.height,0,Ot,Jt,Ft.data)}else if(T.isDataArrayTexture)if(se){if(me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,Ht,bt.width,bt.height,bt.depth),at)if(T.layerUpdates.size>0){let St=Oh(bt.width,bt.height,T.format,T.type);for(let kt of T.layerUpdates){let Yt=bt.data.subarray(kt*St/bt.data.BYTES_PER_ELEMENT,(kt+1)*St/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,kt,bt.width,bt.height,1,Ot,Jt,Yt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ot,Jt,bt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,bt.width,bt.height,bt.depth,0,Ot,Jt,bt.data);else if(T.isData3DTexture)se?(me&&e.texStorage3D(n.TEXTURE_3D,Bt,Ht,bt.width,bt.height,bt.depth),at&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ot,Jt,bt.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,bt.width,bt.height,bt.depth,0,Ot,Jt,bt.data);else if(T.isFramebufferTexture){if(me)if(se)e.texStorage2D(n.TEXTURE_2D,Bt,Ht,bt.width,bt.height);else{let St=bt.width,kt=bt.height;for(let Yt=0;Yt<Bt;Yt++)e.texImage2D(n.TEXTURE_2D,Yt,Ht,St,kt,0,Ot,Jt,null),St>>=1,kt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let St=n.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),bt.parentNode!==St){St.appendChild(bt),y.add(T),St.onpaint=kt=>{let Yt=kt.changedElements;for(let It of y)Yt.includes(It.image)&&(It.needsUpdate=!0)},St.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,bt);else{let Yt=n.RGBA,It=n.RGBA,Lt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Yt,It,Lt,bt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(te.length>0){if(se&&me){let St=mt(te[0]);e.texStorage2D(n.TEXTURE_2D,Bt,Ht,St.width,St.height)}for(let St=0,kt=te.length;St<kt;St++)Ft=te[St],se?at&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,Ot,Jt,Ft):e.texImage2D(n.TEXTURE_2D,St,Ht,Ot,Jt,Ft);T.generateMipmaps=!1}else if(se){if(me){let St=mt(bt);e.texStorage2D(n.TEXTURE_2D,Bt,Ht,St.width,St.height)}at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ot,Jt,bt)}else e.texImage2D(n.TEXTURE_2D,0,Ht,Ot,Jt,bt);M(T)&&F(ot),Ct.__version=At.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function re(O,T,W){if(T.image.length!==6)return;let ot=pe(O,T),Q=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+W);let At=i.get(Q);if(Q.version!==At.__version||ot===!0){e.activeTexture(n.TEXTURE0+W);let Ct=Ce.getPrimaries(Ce.workingColorSpace),ft=T.colorSpace===Di?null:Ce.getPrimaries(T.colorSpace),bt=T.colorSpace===Di||Ct===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Ot=T.isCompressedTexture||T.image[0].isCompressedTexture,Jt=T.image[0]&&T.image[0].isDataTexture,Ht=[];for(let It=0;It<6;It++)!Ot&&!Jt?Ht[It]=S(T.image[It],!0,s.maxCubemapSize):Ht[It]=Jt?T.image[It].image:T.image[It],Ht[It]=ht(T,Ht[It]);let Ft=Ht[0],te=o.convert(T.format,T.colorSpace),se=o.convert(T.type),me=R(T.internalFormat,te,se,T.normalized,T.colorSpace),at=T.isVideoTexture!==!0,Bt=At.__version===void 0||ot===!0,St=Q.dataReady,kt=z(T,Ft);le(n.TEXTURE_CUBE_MAP,T);let Yt;if(Ot){at&&Bt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,me,Ft.width,Ft.height);for(let It=0;It<6;It++){Yt=Ht[It].mipmaps;for(let Lt=0;Lt<Yt.length;Lt++){let Qt=Yt[Lt];T.format!==Yn?te!==null?at?St&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Lt,0,0,Qt.width,Qt.height,te,Qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Lt,me,Qt.width,Qt.height,0,Qt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Lt,0,0,Qt.width,Qt.height,te,se,Qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Lt,me,Qt.width,Qt.height,0,te,se,Qt.data)}}}else{if(Yt=T.mipmaps,at&&Bt){Yt.length>0&&kt++;let It=mt(Ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,me,It.width,It.height)}for(let It=0;It<6;It++)if(Jt){at?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,Ht[It].width,Ht[It].height,te,se,Ht[It].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,me,Ht[It].width,Ht[It].height,0,te,se,Ht[It].data);for(let Lt=0;Lt<Yt.length;Lt++){let Fe=Yt[Lt].image[It].image;at?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Lt+1,0,0,Fe.width,Fe.height,te,se,Fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Lt+1,me,Fe.width,Fe.height,0,te,se,Fe.data)}}else{at?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,te,se,Ht[It]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,me,te,se,Ht[It]);for(let Lt=0;Lt<Yt.length;Lt++){let Qt=Yt[Lt];at?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Lt+1,0,0,te,se,Qt.image[It]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,Lt+1,me,te,se,Qt.image[It])}}}M(T)&&F(n.TEXTURE_CUBE_MAP),At.__version=Q.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Vt(O,T,W,ot,Q,At){let Ct=o.convert(W.format,W.colorSpace),ft=o.convert(W.type),bt=R(W.internalFormat,Ct,ft,W.normalized,W.colorSpace),Ot=i.get(T),Jt=i.get(W);if(Jt.__renderTarget=T,!Ot.__hasExternalTextures){let Ht=Math.max(1,T.width>>At),Ft=Math.max(1,T.height>>At);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,At,bt,Ht,Ft,T.depth,0,Ct,ft,null):e.texImage2D(Q,At,bt,Ht,Ft,0,Ct,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,O),J(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,Q,Jt.__webglTexture,0,Le(T)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ot,Q,Jt.__webglTexture,At),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(O,T,W){if(n.bindRenderbuffer(n.RENDERBUFFER,O),T.depthBuffer){let ot=T.depthTexture,Q=ot&&ot.isDepthTexture?ot.type:null,At=U(T.stencilBuffer,Q),Ct=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;J(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le(T),At,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le(T),At,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,At,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,O)}else{let ot=T.textures;for(let Q=0;Q<ot.length;Q++){let At=ot[Q],Ct=o.convert(At.format,At.colorSpace),ft=o.convert(At.type),bt=R(At.internalFormat,Ct,ft,At.normalized,At.colorSpace);J(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le(T),bt,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le(T),bt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,bt,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(O,T,W){let ot=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(T.depthTexture);if(Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ot){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,T.depthTexture.addEventListener("dispose",q)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),le(n.TEXTURE_CUBE_MAP,T.depthTexture);let Ot=o.convert(T.depthTexture.format),Jt=o.convert(T.depthTexture.type),Ht;T.depthTexture.format===_i?Ht=n.DEPTH_COMPONENT24:T.depthTexture.format===or&&(Ht=n.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Ht,T.width,T.height,0,Ot,Jt,null)}}else dt(T.depthTexture,0);let At=Q.__webglTexture,Ct=Le(T),ft=ot?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,bt=T.depthTexture.format===or?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===_i)J(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,bt,ft,At,0,Ct):n.framebufferTexture2D(n.FRAMEBUFFER,bt,ft,At,0);else if(T.depthTexture.format===or)J(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,bt,ft,At,0,Ct):n.framebufferTexture2D(n.FRAMEBUFFER,bt,ft,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xe(O){let T=i.get(O),W=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){let ot=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ot){let Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ot.removeEventListener("dispose",Q)};ot.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=ot}if(O.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let ot=0;ot<6;ot++)Oe(T.__webglFramebuffer[ot],O,ot);else{let ot=O.texture.mipmaps;ot&&ot.length>0?Oe(T.__webglFramebuffer[0],O,0):Oe(T.__webglFramebuffer,O,0)}else if(W){T.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ot]),T.__webglDepthbuffer[ot]===void 0)T.__webglDepthbuffer[ot]=n.createRenderbuffer(),ue(T.__webglDepthbuffer[ot],O,!1);else{let Q=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=T.__webglDepthbuffer[ot];n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,At)}}else{let ot=O.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ue(T.__webglDepthbuffer,O,!1);else{let Q=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,At)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(O,T,W){let ot=i.get(O);T!==void 0&&Vt(ot.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&xe(O)}function ye(O){let T=O.texture,W=i.get(O),ot=i.get(T);O.addEventListener("dispose",C);let Q=O.textures,At=O.isWebGLCubeRenderTarget===!0,Ct=Q.length>1;if(Ct||(ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture()),ot.__version=T.version,c.memory.textures++),At){W.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[ft]=[];for(let bt=0;bt<T.mipmaps.length;bt++)W.__webglFramebuffer[ft][bt]=n.createFramebuffer()}else W.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let ft=0;ft<T.mipmaps.length;ft++)W.__webglFramebuffer[ft]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let ft=0,bt=Q.length;ft<bt;ft++){let Ot=i.get(Q[ft]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),c.memory.textures++)}if(O.samples>0&&J(O)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ft=0;ft<Q.length;ft++){let bt=Q[ft];W.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ft]);let Ot=o.convert(bt.format,bt.colorSpace),Jt=o.convert(bt.type),Ht=R(bt.internalFormat,Ot,Jt,bt.normalized,bt.colorSpace,O.isXRRenderTarget===!0),Ft=Le(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,Ht,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,W.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(W.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(At){e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),le(n.TEXTURE_CUBE_MAP,T);for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0)for(let bt=0;bt<T.mipmaps.length;bt++)Vt(W.__webglFramebuffer[ft][bt],O,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,bt);else Vt(W.__webglFramebuffer[ft],O,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);M(T)&&F(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ft=0,bt=Q.length;ft<bt;ft++){let Ot=Q[ft],Jt=i.get(Ot),Ht=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ht=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ht,Jt.__webglTexture),le(Ht,Ot),Vt(W.__webglFramebuffer,O,Ot,n.COLOR_ATTACHMENT0+ft,Ht,0),M(Ot)&&F(Ht)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ft=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,ot.__webglTexture),le(ft,T),T.mipmaps&&T.mipmaps.length>0)for(let bt=0;bt<T.mipmaps.length;bt++)Vt(W.__webglFramebuffer[bt],O,T,n.COLOR_ATTACHMENT0,ft,bt);else Vt(W.__webglFramebuffer,O,T,n.COLOR_ATTACHMENT0,ft,0);M(T)&&F(ft),e.unbindTexture()}O.depthBuffer&&xe(O)}function Me(O){let T=O.textures;for(let W=0,ot=T.length;W<ot;W++){let Q=T[W];if(M(Q)){let At=X(O),Ct=i.get(Q).__webglTexture;e.bindTexture(At,Ct),F(At),e.unbindTexture()}}}let Ne=[],He=[];function Qe(O){if(O.samples>0){if(J(O)===!1){let T=O.textures,W=O.width,ot=O.height,Q=n.COLOR_BUFFER_BIT,At=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(O),ft=T.length>1;if(ft)for(let Ot=0;Ot<T.length;Ot++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let bt=O.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Ot=0;Ot<T.length;Ot++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Ot]);let Jt=i.get(T[Ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Jt,0)}n.blitFramebuffer(0,0,W,ot,0,0,W,ot,Q,n.NEAREST),f===!0&&(Ne.length=0,He.length=0,Ne.push(n.COLOR_ATTACHMENT0+Ot),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Ne.push(At),He.push(At),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let Ot=0;Ot<T.length;Ot++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Ot]);let Jt=i.get(T[Ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,Jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&f){let T=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Le(O){return Math.min(s.maxSamples,O.samples)}function J(O){let T=i.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function k(O){let T=c.render.frame;_.get(O)!==T&&(_.set(O,T),O.update())}function ht(O,T){let W=O.colorSpace,ot=O.format,Q=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||W!==no&&W!==Di&&(Ce.getTransfer(W)===Ue?(ot!==Yn||Q!==Rn)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",W)),T}function mt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=et,this.resetTextureUnits=tt,this.getTextureUnits=K,this.setTextureUnits=B,this.setTexture2D=dt,this.setTexture2DArray=ct,this.setTexture3D=_t,this.setTextureCube=Mt,this.rebindTextures=Ee,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=J,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Fx(n,t){function e(i,s=Di){let o,c=Ce.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===hl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ul)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mh)return n.BYTE;if(i===Sh)return n.SHORT;if(i===Es)return n.UNSIGNED_SHORT;if(i===cl)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===Eh)return n.ALPHA;if(i===Th)return n.RGB;if(i===Yn)return n.RGBA;if(i===_i)return n.DEPTH_COMPONENT;if(i===or)return n.DEPTH_STENCIL;if(i===Ah)return n.RED;if(i===fl)return n.RED_INTEGER;if(i===ar)return n.RG;if(i===dl)return n.RG_INTEGER;if(i===pl)return n.RGBA_INTEGER;if(i===Po||i===Io||i===Ro||i===Lo)if(c===Ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Po)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Po)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Io)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ml||i===gl||i===_l||i===vl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ml)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_l)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yl||i===xl||i===Ml||i===Sl||i===bl||i===No||i===wl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===yl||i===xl)return c===Ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ml)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sl)return o.COMPRESSED_R11_EAC;if(i===bl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===No)return o.COMPRESSED_RG11_EAC;if(i===wl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===El||i===Tl||i===Al||i===Cl||i===Pl||i===Il||i===Rl||i===Ll||i===Nl||i===Dl||i===Ol||i===Fl||i===Ul||i===Bl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===El)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Al)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Il)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ll)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kl||i===zl||i===Vl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===kl)return c===Ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hl||i===Gl||i===Do||i===Xl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Hl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Gl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Do)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function zx(n,t){function e(S,M){S.matrixAutoUpdate===!0&&S.updateMatrix(),M.value.copy(S.matrix)}function i(S,M){M.color.getRGB(S.fogColor.value,Lh(n)),M.isFog?(S.fogNear.value=M.near,S.fogFar.value=M.far):M.isFogExp2&&(S.fogDensity.value=M.density)}function s(S,M,F,X,R){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?o(S,M):M.isMeshLambertMaterial?(o(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(o(S,M),y(S,M)):M.isMeshPhongMaterial?(o(S,M),_(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(o(S,M),g(S,M),M.isMeshPhysicalMaterial&&b(S,M,R)):M.isMeshMatcapMaterial?(o(S,M),E(S,M)):M.isMeshDepthMaterial?o(S,M):M.isMeshDistanceMaterial?(o(S,M),P(S,M)):M.isMeshNormalMaterial?o(S,M):M.isLineBasicMaterial?(c(S,M),M.isLineDashedMaterial&&u(S,M)):M.isPointsMaterial?f(S,M,F,X):M.isSpriteMaterial?d(S,M):M.isShadowMaterial?(S.color.value.copy(M.color),S.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function o(S,M){S.opacity.value=M.opacity,M.color&&S.diffuse.value.copy(M.color),M.emissive&&S.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(S.map.value=M.map,e(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.bumpMap&&(S.bumpMap.value=M.bumpMap,e(M.bumpMap,S.bumpMapTransform),S.bumpScale.value=M.bumpScale,M.side===En&&(S.bumpScale.value*=-1)),M.normalMap&&(S.normalMap.value=M.normalMap,e(M.normalMap,S.normalMapTransform),S.normalScale.value.copy(M.normalScale),M.side===En&&S.normalScale.value.negate()),M.displacementMap&&(S.displacementMap.value=M.displacementMap,e(M.displacementMap,S.displacementMapTransform),S.displacementScale.value=M.displacementScale,S.displacementBias.value=M.displacementBias),M.emissiveMap&&(S.emissiveMap.value=M.emissiveMap,e(M.emissiveMap,S.emissiveMapTransform)),M.specularMap&&(S.specularMap.value=M.specularMap,e(M.specularMap,S.specularMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest);let F=t.get(M),X=F.envMap,R=F.envMapRotation;X&&(S.envMap.value=X,S.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(R)).transpose(),X.isCubeTexture&&X.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Fd),S.reflectivity.value=M.reflectivity,S.ior.value=M.ior,S.refractionRatio.value=M.refractionRatio),M.lightMap&&(S.lightMap.value=M.lightMap,S.lightMapIntensity.value=M.lightMapIntensity,e(M.lightMap,S.lightMapTransform)),M.aoMap&&(S.aoMap.value=M.aoMap,S.aoMapIntensity.value=M.aoMapIntensity,e(M.aoMap,S.aoMapTransform))}function c(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,M.map&&(S.map.value=M.map,e(M.map,S.mapTransform))}function u(S,M){S.dashSize.value=M.dashSize,S.totalSize.value=M.dashSize+M.gapSize,S.scale.value=M.scale}function f(S,M,F,X){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.size.value=M.size*F,S.scale.value=X*.5,M.map&&(S.map.value=M.map,e(M.map,S.uvTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function d(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.rotation.value=M.rotation,M.map&&(S.map.value=M.map,e(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function _(S,M){S.specular.value.copy(M.specular),S.shininess.value=Math.max(M.shininess,1e-4)}function y(S,M){M.gradientMap&&(S.gradientMap.value=M.gradientMap)}function g(S,M){S.metalness.value=M.metalness,M.metalnessMap&&(S.metalnessMap.value=M.metalnessMap,e(M.metalnessMap,S.metalnessMapTransform)),S.roughness.value=M.roughness,M.roughnessMap&&(S.roughnessMap.value=M.roughnessMap,e(M.roughnessMap,S.roughnessMapTransform)),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)}function b(S,M,F){S.ior.value=M.ior,M.sheen>0&&(S.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),S.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(S.sheenColorMap.value=M.sheenColorMap,e(M.sheenColorMap,S.sheenColorMapTransform)),M.sheenRoughnessMap&&(S.sheenRoughnessMap.value=M.sheenRoughnessMap,e(M.sheenRoughnessMap,S.sheenRoughnessMapTransform))),M.clearcoat>0&&(S.clearcoat.value=M.clearcoat,S.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(S.clearcoatMap.value=M.clearcoatMap,e(M.clearcoatMap,S.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,e(M.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(S.clearcoatNormalMap.value=M.clearcoatNormalMap,e(M.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===En&&S.clearcoatNormalScale.value.negate())),M.dispersion>0&&(S.dispersion.value=M.dispersion),M.retroreflectivity>0&&(S.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(S.iridescence.value=M.iridescence,S.iridescenceIOR.value=M.iridescenceIOR,S.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(S.iridescenceMap.value=M.iridescenceMap,e(M.iridescenceMap,S.iridescenceMapTransform)),M.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=M.iridescenceThicknessMap,e(M.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),M.transmission>0&&(S.transmission.value=M.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),M.transmissionMap&&(S.transmissionMap.value=M.transmissionMap,e(M.transmissionMap,S.transmissionMapTransform)),S.thickness.value=M.thickness,M.thicknessMap&&(S.thicknessMap.value=M.thicknessMap,e(M.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=M.attenuationDistance,S.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(S.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(S.anisotropyMap.value=M.anisotropyMap,e(M.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=M.specularIntensity,S.specularColor.value.copy(M.specularColor),M.specularColorMap&&(S.specularColorMap.value=M.specularColorMap,e(M.specularColorMap,S.specularColorMapTransform)),M.specularIntensityMap&&(S.specularIntensityMap.value=M.specularIntensityMap,e(M.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,M){M.matcap&&(S.matcap.value=M.matcap)}function P(S,M){let F=t.get(M).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vx(n,t,e,i){let s={},o={},c=[],u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,U){let z=U.program;i.uniformBlockBinding(R,z)}function d(R,U){let z=s[R.id];z===void 0&&(S(R),z=_(R),s[R.id]=z,R.addEventListener("dispose",F));let q=U.program;i.updateUBOMapping(R,q);let C=t.render.frame;o[R.id]!==C&&(g(R),o[R.id]=C)}function _(R){let U=y();R.__bindingPointIndex=U;let z=n.createBuffer(),q=R.__size,C=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,z),n.bufferData(n.UNIFORM_BUFFER,q,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,U,z),z}function y(){for(let R=0;R<u;R++)if(c.indexOf(R)===-1)return c.push(R),R;return de("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){let U=s[R.id],z=R.uniforms,q=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,U);for(let C=0,H=z.length;C<H;C++){let Y=z[C];if(Array.isArray(Y))for(let nt=0,it=Y.length;nt<it;nt++)b(Y[nt],C,nt,q);else b(Y,C,0,q)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function b(R,U,z,q){if(P(R,U,z,q)===!0){let C=R.__offset,H=R.value;if(Array.isArray(H)){let Y=0;for(let nt=0;nt<H.length;nt++){let it=H[nt],tt=M(it);E(it,R.__data,Y),typeof it!="number"&&typeof it!="boolean"&&!it.isMatrix3&&!ArrayBuffer.isView(it)&&(Y+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(H,R.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,R.__data)}}function E(R,U,z){typeof R=="number"||typeof R=="boolean"?U[0]=R:R.isMatrix3?(U[0]=R.elements[0],U[1]=R.elements[1],U[2]=R.elements[2],U[3]=0,U[4]=R.elements[3],U[5]=R.elements[4],U[6]=R.elements[5],U[7]=0,U[8]=R.elements[6],U[9]=R.elements[7],U[10]=R.elements[8],U[11]=0):ArrayBuffer.isView(R)?U.set(new R.constructor(R.buffer,R.byteOffset,U.length)):R.toArray(U,z)}function P(R,U,z,q){let C=R.value,H=U+"_"+z;if(q[H]===void 0)return typeof C=="number"||typeof C=="boolean"?q[H]=C:ArrayBuffer.isView(C)?q[H]=C.slice():q[H]=C.clone(),!0;{let Y=q[H];if(typeof C=="number"||typeof C=="boolean"){if(Y!==C)return q[H]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(Y.equals(C)===!1)return Y.copy(C),!0}}return!1}function S(R){let U=R.uniforms,z=0,q=16;for(let H=0,Y=U.length;H<Y;H++){let nt=Array.isArray(U[H])?U[H]:[U[H]];for(let it=0,tt=nt.length;it<tt;it++){let K=nt[it],B=Array.isArray(K.value)?K.value:[K.value];for(let et=0,V=B.length;et<V;et++){let dt=B[et],ct=M(dt),_t=z%q,Mt=_t%ct.boundary,Pt=_t+Mt;z+=Mt,Pt!==0&&q-Pt<ct.storage&&(z+=q-Pt),K.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=z,z+=ct.storage}}}let C=z%q;return C>0&&(z+=q-C),R.__size=z,R.__cache={},this}function M(R){let U={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(U.boundary=4,U.storage=4):R.isVector2?(U.boundary=8,U.storage=8):R.isVector3||R.isColor?(U.boundary=16,U.storage=12):R.isVector4?(U.boundary=16,U.storage=16):R.isMatrix3?(U.boundary=48,U.storage=48):R.isMatrix4?(U.boundary=64,U.storage=64):R.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(U.boundary=16,U.storage=R.byteLength):he("WebGLRenderer: Unsupported uniform value type.",R),U}function F(R){let U=R.target;U.removeEventListener("dispose",F);let z=c.indexOf(U.__bindingPointIndex);c.splice(z,1),n.deleteBuffer(s[U.id]),delete s[U.id],delete o[U.id]}function X(){for(let R in s)n.deleteBuffer(s[R]);c=[],s={},o={}}return{bind:f,update:d,dispose:X}}function Gx(){return xi===null&&(xi=new za(Hx,16,16,ar,ci),xi.name="DFG_LUT",xi.minFilter=fn,xi.magFilter=fn,xi.wrapS=gi,xi.wrapT=gi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var n0,i0,r0,s0,o0,a0,l0,c0,h0,u0,f0,d0,p0,m0,g0,_0,v0,y0,x0,M0,S0,b0,w0,E0,T0,A0,C0,P0,I0,R0,L0,N0,D0,O0,F0,U0,B0,k0,z0,V0,H0,G0,X0,W0,Y0,q0,$0,Z0,J0,j0,K0,Q0,t_,e_,n_,i_,r_,s_,o_,a_,l_,c_,h_,u_,f_,d_,p_,m_,g_,__,v_,y_,x_,M_,S_,b_,w_,E_,T_,A_,C_,P_,I_,R_,L_,N_,D_,O_,F_,U_,B_,k_,z_,V_,H_,G_,X_,W_,Y_,q_,$_,Z_,J_,j_,K_,Q_,tv,ev,nv,iv,rv,sv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,vv,yv,xv,Mv,Sv,bv,wv,Ev,Tv,Av,Cv,Pv,Iv,Rv,Lv,Nv,Dv,Ov,we,$t,Mi,$l,Fv,Rd,Cs,Hv,Gv,Xv,Oo,cd,Uh,Bh,kh,zh,Wv,Ar,Jl,jl,ny,Ld,Gh,Nd,Dd,Od,dd,pd,md,gd,_d,Xh,Wh,Yh,Vh,Ps,Wy,Yy,xd,Jy,Zl,nx,ix,sx,ax,cx,ux,dx,_x,$h,Zh,Ex,Px,Ix,Rx,Lx,Pd,Fo,Hh,Ux,Bx,Jh,jh,kx,Fd,Hx,xi,Kl,ec=Cn(()=>{Fh();Fh();n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
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
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
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
#endif`,u0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,E0=`#define PI 3.141592653589793
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
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A0=`vec3 transformedNormal = objectNormal;
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
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
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
}`,X0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
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
#endif`,t_=`uniform sampler2D dfgLUT;
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
}`,e_=`
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
#endif`,n_=`#if defined( RE_IndirectDiffuse )
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,s_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f_=`#if defined( USE_POINTS_UV )
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
#endif`,d_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,__=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`#ifdef USE_MORPHTARGETS
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
#endif`,y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
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
#endif`,T_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V_=`float getShadowMask() {
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
}`,H_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G_=`#ifdef USE_SKINNING
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
#endif`,X_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,Y_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,j_=`#ifdef USE_TRANSMISSION
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
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ev=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iv=`uniform sampler2D t2D;
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
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,av=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`#include <common>
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
}`,cv=`#if DEPTH_PACKING == 3200
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
}`,hv=`#define DISTANCE
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
}`,uv=`#define DISTANCE
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
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`uniform float scale;
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
}`,mv=`uniform vec3 diffuse;
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
}`,gv=`#include <common>
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
}`,_v=`uniform vec3 diffuse;
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
}`,vv=`#define LAMBERT
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
}`,yv=`#define LAMBERT
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
}`,xv=`#define MATCAP
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
}`,Mv=`#define MATCAP
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
}`,Sv=`#define NORMAL
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
}`,bv=`#define NORMAL
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
}`,wv=`#define PHONG
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
}`,Ev=`#define PHONG
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
}`,Tv=`#define STANDARD
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
}`,Av=`#define STANDARD
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
}`,Cv=`#define TOON
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
}`,Pv=`#define TOON
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
}`,Iv=`uniform float size;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Lv=`#include <common>
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
}`,Nv=`uniform vec3 color;
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
}`,Dv=`uniform float rotation;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:r0,alphamap_pars_fragment:s0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:h0,batching_vertex:u0,begin_vertex:f0,beginnormal_vertex:d0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:x0,color_fragment:M0,color_pars_fragment:S0,color_pars_vertex:b0,color_vertex:w0,common:E0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:A0,displacementmap_pars_vertex:C0,displacementmap_vertex:P0,emissivemap_fragment:I0,emissivemap_pars_fragment:R0,colorspace_fragment:L0,colorspace_pars_fragment:N0,envmap_fragment:D0,envmap_common_pars_fragment:O0,envmap_pars_fragment:F0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:$0,envmap_vertex:B0,fog_vertex:k0,fog_pars_vertex:z0,fog_fragment:V0,fog_pars_fragment:H0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:X0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:Y0,lights_pars_begin:q0,lights_toon_fragment:Z0,lights_toon_pars_fragment:J0,lights_phong_fragment:j0,lights_phong_pars_fragment:K0,lights_physical_fragment:Q0,lights_physical_pars_fragment:t_,lights_fragment_begin:e_,lights_fragment_maps:n_,lights_fragment_end:i_,lightprobes_pars_fragment:r_,logdepthbuf_fragment:s_,logdepthbuf_pars_fragment:o_,logdepthbuf_pars_vertex:a_,logdepthbuf_vertex:l_,map_fragment:c_,map_pars_fragment:h_,map_particle_fragment:u_,map_particle_pars_fragment:f_,metalnessmap_fragment:d_,metalnessmap_pars_fragment:p_,morphinstance_vertex:m_,morphcolor_vertex:g_,morphnormal_vertex:__,morphtarget_pars_vertex:v_,morphtarget_vertex:y_,normal_fragment_begin:x_,normal_fragment_maps:M_,normal_pars_fragment:S_,normal_pars_vertex:b_,normal_vertex:w_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:T_,clearcoat_normal_fragment_maps:A_,clearcoat_pars_fragment:C_,iridescence_pars_fragment:P_,opaque_fragment:I_,packing:R_,premultiplied_alpha_fragment:L_,project_vertex:N_,dithering_fragment:D_,dithering_pars_fragment:O_,roughnessmap_fragment:F_,roughnessmap_pars_fragment:U_,shadowmap_pars_fragment:B_,shadowmap_pars_vertex:k_,shadowmap_vertex:z_,shadowmask_pars_fragment:V_,skinbase_vertex:H_,skinning_pars_vertex:G_,skinning_vertex:X_,skinnormal_vertex:W_,specularmap_fragment:Y_,specularmap_pars_fragment:q_,tonemapping_fragment:$_,tonemapping_pars_fragment:Z_,transmission_fragment:J_,transmission_pars_fragment:j_,uv_pars_fragment:K_,uv_pars_vertex:Q_,uv_vertex:tv,worldpos_vertex:ev,background_vert:nv,background_frag:iv,backgroundCube_vert:rv,backgroundCube_frag:sv,cube_vert:ov,cube_frag:av,depth_vert:lv,depth_frag:cv,distance_vert:hv,distance_frag:uv,equirect_vert:fv,equirect_frag:dv,linedashed_vert:pv,linedashed_frag:mv,meshbasic_vert:gv,meshbasic_frag:_v,meshlambert_vert:vv,meshlambert_frag:yv,meshmatcap_vert:xv,meshmatcap_frag:Mv,meshnormal_vert:Sv,meshnormal_frag:bv,meshphong_vert:wv,meshphong_frag:Ev,meshphysical_vert:Tv,meshphysical_frag:Av,meshtoon_vert:Cv,meshtoon_frag:Pv,points_vert:Iv,points_frag:Rv,shadow_vert:Lv,shadow_frag:Nv,sprite_vert:Dv,sprite_frag:Ov},$t={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new lt},probesMax:{value:new lt},probesResolution:{value:new lt}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Mi={basic:{uniforms:xn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:xn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:xn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:xn([$t.common,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.roughnessmap,$t.metalnessmap,$t.fog,$t.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:xn([$t.common,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.gradientmap,$t.fog,$t.lights,{emissive:{value:new ve(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:xn([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:xn([$t.points,$t.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:xn([$t.common,$t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:xn([$t.common,$t.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:xn([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:xn([$t.sprite,$t.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distance:{uniforms:xn([$t.common,$t.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distance_vert,fragmentShader:we.distance_frag},shadow:{uniforms:xn([$t.lights,$t.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Mi.physical={uniforms:xn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};$l={r:0,b:0,g:0},Fv=new Ye,Rd=new Se;Rd.set(-1,0,0,0,1,0,0,0,1);Cs=4,Hv=6,Gv=20,Xv=256,Oo=new xs,cd=new ve,Uh=null,Bh=0,kh=0,zh=!1,Wv=new lt,Ar=new lt,Jl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,o={}){let{size:c=256,position:u=Wv}=o;Uh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,i,s,f,u),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Uh,Bh,kh),this._renderer.xr.enabled=zh,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ci,format:Yn,colorSpace:no,depthBuffer:!1},s=hd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yv(o)),this._blurMaterial=$v(o,t,e),this._ggxMaterial=qv(o,t,e)}return s}_compileMaterial(t){let e=new Ve(new Ze,t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,i,s,o){let f=new vn(90,1,e,i),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,b=y.toneMapping;y.getClearColor(cd),y.toneMapping=oi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(s),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new ji,new ri({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,S=P.material,M=!1,F=t.background;F?F.isColor&&(S.color.copy(F),t.background=null,M=!0):(S.color.copy(cd),M=!0);for(let X=0;X<6;X++){let R=X%3;R===0?(f.up.set(0,d[X],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+_[X],o.y,o.z)):R===1?(f.up.set(0,0,d[X]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+_[X],o.z)):(f.up.set(0,d[X],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+_[X]));let U=this._cubeSize;As(s,R*U,X>2?U:0,U,U),y.setRenderTarget(s),M&&y.render(P,f),y.render(t,f)}y.toneMapping=b,y.autoClear=g,t.background=F}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===rr||t.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());let o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;let u=o.uniforms;u.envMap.value=t;let f=this._cubeSize;As(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(c,Oo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=i/(this._lodMeshes.length-1),_=e/(this._lodMeshes.length-1),y=Math.sqrt(d*d-_*_),g=d*1.25,b=y*g,{_lodMax:E}=this,P=this._sizeLods[i],S=3*P*(i>E-Cs?i-E+Cs:0),M=4*(this._cubeSize-P);f.envMap.value=t.texture,f.roughness.value=b,f.mipInt.value=E-e,As(o,S,M,3*P,2*P),s.setRenderTarget(o),s.render(u,Oo),f.envMap.value=o.texture,f.roughness.value=0,f.mipInt.value=E-i,As(t,S,M,3*P,2*P),s.setRenderTarget(t),s.render(u,Oo)}_blur(t,e,i,s){let o=this._pingPongRenderTarget,c=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,c),this._blurPass(o,t,i,i,c)}_blurPass(t,e,i,s,o){let c=this._renderer,u=this._blurMaterial,f=this._lodMeshes[s];f.material=u;let d=u.uniforms;d.envMap.value=t.texture,d.sigma.value=o,d.mipInt.value=this._lodMax-i;let _=this._sizeLods[s],y=3*_*(s>this._lodMax-Cs?s-this._lodMax+Cs:0),g=4*(this._cubeSize-_);As(e,y,g,3*_,2*_),c.setRenderTarget(e),c.render(f,Oo)}};jl=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new fo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ji(5,5,5),o=new Bn({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:yi});o.uniforms.tEquirect.value=e;let c=new Ve(s,o),u=e.minFilter;return e.minFilter===sr&&(e.minFilter=fn),new rl(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,s);t.setRenderTarget(o)}};ny={[dh]:"LINEAR_TONE_MAPPING",[ph]:"REINHARD_TONE_MAPPING",[mh]:"CINEON_TONE_MAPPING",[gh]:"ACES_FILMIC_TONE_MAPPING",[vh]:"AGX_TONE_MAPPING",[yh]:"NEUTRAL_TONE_MAPPING",[_h]:"CUSTOM_TONE_MAPPING"};Ld=new wn,Gh=new Ji(1,1),Nd=new oo,Dd=new Ba,Od=new fo,dd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);Xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=by(e.type)}},Wh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gy(e.type)}},Yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,c=s.length;o!==c;++o){let u=s[o];u.setValue(t,e[u.id],i)}}},Vh=/(\w+)(\])?(\[|\.)?/g;Ps=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){let u=t.getActiveUniform(e,c),f=t.getUniformLocation(e,u.name);Xy(u,f,this)}let s=[],o=[];for(let c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,c=e.length;o!==c;++o){let u=e[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let c=t[s];c.id in e&&i.push(c)}return i}};Wy=37297,Yy=0;xd=new Se;Jy={[dh]:"Linear",[ph]:"Reinhard",[mh]:"Cineon",[gh]:"ACESFilmic",[vh]:"AgX",[yh]:"Neutral",[_h]:"Custom"};Zl=new lt;nx=/^[ \t]*#include +<([\w\d./]+)>/gm;ix=new Map;sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;ax={[To]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};cx={[rr]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE_UV"};ux={[wr]:"ENVMAP_MODE_REFRACTION"};dx={[fh]:"ENVMAP_BLENDING_MULTIPLY",[Hf]:"ENVMAP_BLENDING_MIX",[Gf]:"ENVMAP_BLENDING_ADD"};_x=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Zh(t),e.set(t,i)),i}},Zh=class{constructor(t){this.id=_x++,this.code=t,this.usedTimes=0}};Ex=0;Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
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
}`,Rx=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],Lx=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],Pd=new Ye,Fo=new lt,Hh=new lt;Ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bx=`
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

}`,Jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new mo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Bn({vertexShader:Ux,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new go(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jh=class extends ii{constructor(t,e){super();let i=this,s=null,o=1,c=null,u="local-floor",f=1,d=null,_=null,y=null,g=null,b=null,E=null,P=typeof XRWebGLBinding<"u",S=new Jh,M={},F=e.getContextAttributes(),X=null,R=null,U=[],z=[],q=new oe,C=null,H=null,Y=new vn;Y.viewport=new Je;let nt=new vn;nt.viewport=new Je;let it=[Y,nt],tt=new sl,K=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(yt){let Tt=U[yt];return Tt===void 0&&(Tt=new ms,U[yt]=Tt),Tt.getTargetRaySpace()},this.getControllerGrip=function(yt){let Tt=U[yt];return Tt===void 0&&(Tt=new ms,U[yt]=Tt),Tt.getGripSpace()},this.getHand=function(yt){let Tt=U[yt];return Tt===void 0&&(Tt=new ms,U[yt]=Tt),Tt.getHandSpace()};function et(yt){let Tt=z.indexOf(yt.inputSource);if(Tt===-1)return;let Gt=U[Tt];Gt!==void 0&&(Gt.update(yt.inputSource,yt.frame,d||c),Gt.dispatchEvent({type:yt.type,data:yt.inputSource}))}function V(){s.removeEventListener("select",et),s.removeEventListener("selectstart",et),s.removeEventListener("selectend",et),s.removeEventListener("squeeze",et),s.removeEventListener("squeezestart",et),s.removeEventListener("squeezeend",et),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",dt);for(let yt=0;yt<U.length;yt++){let Tt=z[yt];Tt!==null&&(z[yt]=null,U[yt].disconnect(Tt))}K=null,B=null,S.reset();for(let yt in M)delete M[yt];if(t.setRenderTarget(X),b=null,g=null,y=null,s=null,R=null,pe.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(q.width,q.height,!1),H!==null){let yt=H.camera;yt.fov=H.fov,yt.zoom=H.zoom,yt.updateProjectionMatrix(),H=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(yt){o=yt,i.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(yt){u=yt,i.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(yt){d=yt},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return y===null&&P&&(y=new XRWebGLBinding(s,e)),y},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(yt){if(s=yt,s!==null){if(X=t.getRenderTarget(),s.addEventListener("select",et),s.addEventListener("selectstart",et),s.addEventListener("selectend",et),s.addEventListener("squeeze",et),s.addEventListener("squeezestart",et),s.addEventListener("squeezeend",et),s.addEventListener("end",V),s.addEventListener("inputsourceschange",dt),F.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(q),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Gt=null,re=null,Vt=null;F.depth&&(Vt=F.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Gt=F.stencil?or:_i,re=F.stencil?Ts:ai);let ue={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:o};y=this.getBinding(),g=y.createProjectionLayer(ue),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),R=new In(g.textureWidth,g.textureHeight,{format:Yn,type:Rn,depthTexture:new Ji(g.textureWidth,g.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Gt),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Gt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:o};b=new XRWebGLLayer(s,e,Gt),s.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),R=new In(b.framebufferWidth,b.framebufferHeight,{format:Yn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await s.requestReferenceSpace(u),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function dt(yt){for(let Tt=0;Tt<yt.removed.length;Tt++){let Gt=yt.removed[Tt],re=z.indexOf(Gt);re>=0&&(z[re]=null,U[re].disconnect(Gt))}for(let Tt=0;Tt<yt.added.length;Tt++){let Gt=yt.added[Tt],re=z.indexOf(Gt);if(re===-1){for(let ue=0;ue<U.length;ue++)if(ue>=z.length){z.push(Gt),re=ue;break}else if(z[ue]===null){z[ue]=Gt,re=ue;break}if(re===-1)break}let Vt=U[re];Vt&&Vt.connect(Gt)}}let ct=new lt,_t=new lt;function Mt(yt,Tt,Gt){ct.setFromMatrixPosition(Tt.matrixWorld),_t.setFromMatrixPosition(Gt.matrixWorld);let re=ct.distanceTo(_t),Vt=Tt.projectionMatrix.elements,ue=Gt.projectionMatrix.elements,Oe=Vt[14]/(Vt[10]-1),xe=Vt[14]/(Vt[10]+1),Ee=(Vt[9]+1)/Vt[5],ye=(Vt[9]-1)/Vt[5],Me=(Vt[8]-1)/Vt[0],Ne=(ue[8]+1)/ue[0],He=Oe*Me,Qe=Oe*Ne,Le=re/(-Me+Ne),J=Le*-Me;if(Tt.matrixWorld.decompose(yt.position,yt.quaternion,yt.scale),yt.translateX(J),yt.translateZ(Le),yt.matrixWorld.compose(yt.position,yt.quaternion,yt.scale),yt.matrixWorldInverse.copy(yt.matrixWorld).invert(),Vt[10]===-1)yt.projectionMatrix.copy(Tt.projectionMatrix),yt.projectionMatrixInverse.copy(Tt.projectionMatrixInverse);else{let k=Oe+Le,ht=xe+Le,mt=He-J,O=Qe+(re-J),T=Ee*xe/ht*k,W=ye*xe/ht*k;yt.projectionMatrix.makePerspective(mt,O,T,W,k,ht),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert()}}function Pt(yt,Tt){Tt===null?yt.matrixWorld.copy(yt.matrix):yt.matrixWorld.multiplyMatrices(Tt.matrixWorld,yt.matrix),yt.matrixWorldInverse.copy(yt.matrixWorld).invert()}this.updateCamera=function(yt){if(s===null)return;let Tt=yt.near,Gt=yt.far;S.texture!==null&&(S.depthNear>0&&(Tt=S.depthNear),S.depthFar>0&&(Gt=S.depthFar)),tt.near=nt.near=Y.near=Tt,tt.far=nt.far=Y.far=Gt,(K!==tt.near||B!==tt.far)&&(s.updateRenderState({depthNear:tt.near,depthFar:tt.far}),K=tt.near,B=tt.far),tt.layers.mask=yt.layers.mask|6,Y.layers.mask=tt.layers.mask&-5,nt.layers.mask=tt.layers.mask&-3;let re=yt.parent,Vt=tt.cameras;Pt(tt,re);for(let ue=0;ue<Vt.length;ue++)Pt(Vt[ue],re);Vt.length===2?Mt(tt,Y,nt):tt.projectionMatrix.copy(Y.projectionMatrix),H===null&&yt.isPerspectiveCamera&&(H={camera:yt,fov:yt.fov,zoom:yt.zoom}),Ut(yt,tt,re)};function Ut(yt,Tt,Gt){Gt===null?yt.matrix.copy(Tt.matrixWorld):(yt.matrix.copy(Gt.matrixWorld),yt.matrix.invert(),yt.matrix.multiply(Tt.matrixWorld)),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.updateMatrixWorld(!0),yt.projectionMatrix.copy(Tt.projectionMatrix),yt.projectionMatrixInverse.copy(Tt.projectionMatrixInverse),yt.isPerspectiveCamera&&(yt.fov=fs*2*Math.atan(1/yt.projectionMatrix.elements[5]),yt.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(g===null&&b===null))return f},this.setFoveation=function(yt){f=yt,g!==null&&(g.fixedFoveation=yt),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=yt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(tt)},this.getCameraTexture=function(yt){return M[yt]};let ae=null;function le(yt,Tt){if(_=Tt.getViewerPose(d||c),E=Tt,_!==null){let Gt=_.views;b!==null&&(t.setRenderTargetFramebuffer(R,b.framebuffer),t.setRenderTarget(R));let re=!1;Gt.length!==tt.cameras.length&&(tt.cameras.length=0,re=!0);for(let xe=0;xe<Gt.length;xe++){let Ee=Gt[xe],ye=null;if(b!==null)ye=b.getViewport(Ee);else{let Ne=y.getViewSubImage(g,Ee);ye=Ne.viewport,xe===0&&(t.setRenderTargetTextures(R,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(R))}let Me=it[xe];Me===void 0&&(Me=new vn,Me.layers.enable(xe),Me.viewport=new Je,it[xe]=Me),Me.matrix.fromArray(Ee.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Ee.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(ye.x,ye.y,ye.width,ye.height),xe===0&&(tt.matrix.copy(Me.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),re===!0&&tt.cameras.push(Me)}let Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&P){y=i.getBinding();let xe=y.getDepthInformation(Gt[0]);xe&&xe.isValid&&xe.texture&&S.init(xe,s.renderState)}if(Vt&&Vt.includes("camera-access")&&P){t.state.unbindTexture(),y=i.getBinding();for(let xe=0;xe<Gt.length;xe++){let Ee=Gt[xe].camera;if(Ee){let ye=M[Ee];ye||(ye=new mo,M[Ee]=ye);let Me=y.getCameraImage(Ee);ye.sourceTexture=Me}}}}for(let Gt=0;Gt<U.length;Gt++){let re=z[Gt],Vt=U[Gt];re!==null&&Vt!==void 0&&Vt.update(re,Tt,d||c)}ae&&ae(yt,Tt),Tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Tt}),E=null}let pe=new Id;pe.setAnimationLoop(le),this.setAnimationLoop=function(yt){ae=yt},this.dispose=function(){}}},kx=new Ye,Fd=new Se;Fd.set(-1,0,0,0,1,0,0,0,1);Hx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;Kl=class{constructor(t={}){let{canvas:e=td(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:b=Rn}=t;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=c;let P=b,S=new Set([pl,dl,fl]),M=new Set([Rn,ai,Es,Ts,hl,ul]),F=new Uint32Array(4),X=new Int32Array(4),R=new lt,U=null,z=null,q=[],C=[],H=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let Y=this,nt=!1,it=null,tt=null,K=null,B=null;this._outputColorSpace=bn;let et=0,V=0,dt=null,ct=-1,_t=null,Mt=new Je,Pt=new Je,Ut=null,ae=new ve(0),le=0,pe=e.width,yt=e.height,Tt=1,Gt=null,re=null,Vt=new Je(0,0,pe,yt),ue=new Je(0,0,pe,yt),Oe=!1,xe=new _s,Ee=!1,ye=!1,Me=new Ye,Ne=new lt,He=new Je,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function J(){return dt===null?Tt:1}let k=i;function ht(N,rt){return e.getContext(N,rt)}let mt,O,T,W,ot,Q,At,Ct,ft,bt,Ot,Jt,Ht,Ft,te,se,me,at,Bt,St,kt,Yt,It;try{let N={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Ie,!1),e.addEventListener("webglcontextcreationerror",Mn,!1),k===null){let rt="webgl2";if(k=ht(rt,N),k===null)throw ht(rt)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(N){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Ie,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),de("WebGLRenderer: "+N.message),N}function Lt(){mt=new Jv(k),mt.init(),kt=new Fx(k,mt),O=new zv(k,mt,t,kt),T=new Dx(k,mt),O.reversedDepthBuffer&&g&&T.buffers.depth.setReversed(!0),tt=k.createFramebuffer(),K=k.createFramebuffer(),B=k.createFramebuffer(),W=new Qv(k),ot=new xx,Q=new Ox(k,mt,T,ot,O,kt,W),At=new Zv(Y),Ct=new e0(k),Yt=new Bv(k,Ct),ft=new jv(k,Ct,W,Yt),bt=new ey(k,ft,Ct,Yt,W),at=new ty(k,O,Q),te=new Vv(ot),Ot=new yx(Y,At,mt,O,Yt,te),Jt=new zx(Y,ot),Ht=new Sx,Ft=new Cx(mt),me=new Uv(Y,At,T,bt,E,f),se=new Nx(Y,bt,O),It=new Vx(k,W,O,T),Bt=new kv(k,mt,W),St=new Kv(k,mt,W),W.programs=Ot.programs,Y.capabilities=O,Y.extensions=mt,Y.properties=ot,Y.renderLists=Ht,Y.shadowMap=se,Y.state=T,Y.info=W}P!==Rn&&(H=new iy(P,e.width,e.height,u,s,o));let Qt=new jh(Y,k);this.xr=Qt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let N=mt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=mt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Tt},this.setPixelRatio=function(N){N!==void 0&&(Tt=N,this.setSize(pe,yt,!1))},this.getSize=function(N){return N.set(pe,yt)},this.setSize=function(N,rt,vt=!0){if(Qt.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=N,yt=rt,e.width=Math.floor(N*Tt),e.height=Math.floor(rt*Tt),vt===!0&&(e.style.width=N+"px",e.style.height=rt+"px"),H!==null&&H.setSize(e.width,e.height),this.setViewport(0,0,N,rt)},this.getDrawingBufferSize=function(N){return N.set(pe*Tt,yt*Tt).floor()},this.setDrawingBufferSize=function(N,rt,vt){pe=N,yt=rt,Tt=vt,e.width=Math.floor(N*vt),e.height=Math.floor(rt*vt),this.setViewport(0,0,N,rt)},this.setEffects=function(N){if(P===Rn){de("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let rt=0;rt<N.length;rt++)if(N[rt].isOutputPass===!0){he("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(Mt)},this.getViewport=function(N){return N.copy(Vt)},this.setViewport=function(N,rt,vt,pt){N.isVector4?Vt.set(N.x,N.y,N.z,N.w):Vt.set(N,rt,vt,pt),T.viewport(Mt.copy(Vt).multiplyScalar(Tt).round())},this.getScissor=function(N){return N.copy(ue)},this.setScissor=function(N,rt,vt,pt){N.isVector4?ue.set(N.x,N.y,N.z,N.w):ue.set(N,rt,vt,pt),T.scissor(Pt.copy(ue).multiplyScalar(Tt).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(N){T.setScissorTest(Oe=N)},this.setOpaqueSort=function(N){Gt=N},this.setTransparentSort=function(N){re=N},this.getClearColor=function(N){return N.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(N=!0,rt=!0,vt=!0){let pt=0;if(N){let gt=!1;if(dt!==null){let Wt=dt.texture.format;gt=S.has(Wt)}if(gt){let Wt=dt.texture.type,Dt=M.has(Wt),Xt=me.getClearColor(),jt=me.getClearAlpha(),ee=Xt.r,zt=Xt.g,fe=Xt.b;Dt?(F[0]=ee,F[1]=zt,F[2]=fe,F[3]=jt,k.clearBufferuiv(k.COLOR,0,F)):(X[0]=ee,X[1]=zt,X[2]=fe,X[3]=jt,k.clearBufferiv(k.COLOR,0,X))}else pt|=k.COLOR_BUFFER_BIT}rt&&(pt|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),vt&&(pt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pt!==0&&k.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),it=N},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Ie,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),me.dispose(),Ht.dispose(),Ft.dispose(),ot.dispose(),At.dispose(),bt.dispose(),Yt.dispose(),It.dispose(),Ot.dispose(),Qt.dispose(),Qt.removeEventListener("sessionstart",Cr),Qt.removeEventListener("sessionend",Pr),An.stop()};function Fe(N){N.preventDefault(),so("WebGLRenderer: Context Lost."),nt=!0}function Ie(){so("WebGLRenderer: Context Restored."),nt=!1;let N=W.autoReset,rt=se.enabled,vt=se.autoUpdate,pt=se.needsUpdate,gt=se.type;Lt(),W.autoReset=N,se.enabled=rt,se.autoUpdate=vt,se.needsUpdate=pt,se.type=gt}function Mn(N){de("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Tn(N){let rt=N.target;rt.removeEventListener("dispose",Tn),Ls(rt)}function Ls(N){lr(N),ot.remove(N)}function lr(N){let rt=ot.get(N).programs;rt!==void 0&&(rt.forEach(function(vt){Ot.releaseProgram(vt)}),N.isShaderMaterial&&Ot.releaseShaderCache(N))}this.renderBufferDirect=function(N,rt,vt,pt,gt,Wt){rt===null&&(rt=Qe);let Dt=gt.isMesh&&gt.matrixWorld.determinantAffine()<0,Xt=ui(N,rt,vt,pt,gt);T.setMaterial(pt,Dt);let jt=vt.index,ee=1;if(pt.wireframe===!0){if(jt=ft.getWireframeAttribute(vt),jt===void 0)return;ee=2}let zt=vt.drawRange,fe=vt.attributes.position,Zt=zt.start*ee,Re=(zt.start+zt.count)*ee;Wt!==null&&(Zt=Math.max(Zt,Wt.start*ee),Re=Math.min(Re,(Wt.start+Wt.count)*ee)),jt!==null?(Zt=Math.max(Zt,0),Re=Math.min(Re,jt.count)):fe!=null&&(Zt=Math.max(Zt,0),Re=Math.min(Re,fe.count));let We=Re-Zt;if(We<0||We===1/0)return;Yt.setup(gt,pt,Xt,vt,jt);let Ae,r=Bt;if(jt!==null&&(Ae=Ct.get(jt),r=St,r.setIndex(Ae)),gt.isMesh)pt.wireframe===!0?(T.setLineWidth(pt.wireframeLinewidth*J()),r.setMode(k.LINES)):r.setMode(k.TRIANGLES);else if(gt.isLine){let a=pt.linewidth;a===void 0&&(a=1),T.setLineWidth(a*J()),gt.isLineSegments?r.setMode(k.LINES):gt.isLineLoop?r.setMode(k.LINE_LOOP):r.setMode(k.LINE_STRIP)}else gt.isPoints?r.setMode(k.POINTS):gt.isSprite&&r.setMode(k.TRIANGLES);if(gt.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))r.renderMultiDraw(gt._multiDrawStarts,gt._multiDrawCounts,gt._multiDrawCount);else{let a=gt._multiDrawStarts,l=gt._multiDrawCounts,p=gt._multiDrawCount,v=jt?Ct.get(jt).bytesPerElement:1,A=ot.get(pt).currentProgram.getUniforms();for(let D=0;D<p;D++)A.setValue(k,"_gl_DrawID",D),r.render(a[D]/v,l[D])}else if(gt.isInstancedMesh)r.renderInstances(Zt,We,gt.count);else if(vt.isInstancedBufferGeometry){let a=vt._maxInstanceCount!==void 0?vt._maxInstanceCount:1/0,l=Math.min(vt.instanceCount,a);r.renderInstances(Zt,We,l)}else r.render(Zt,We)};function I(N,rt,vt,pt){it!==null&&N.isNodeMaterial&&it.setObject(pt,N),Ee===!0&&te.setState(N,vt,!1),N.transparent===!0&&N.side===yn&&N.forceSinglePass===!1?(N.side=En,N.needsUpdate=!0,Oi(N,rt,pt),N.side=ir,N.needsUpdate=!0,Oi(N,rt,pt),N.side=yn):Oi(N,rt,pt)}this.compile=function(N,rt,vt=null){vt===null&&(vt=N),it!==null&&it.renderStart(N,rt,vt),z=Ft.get(vt),z.init(rt),C.push(z),vt.traverseVisible(function(gt){gt.isLight&&gt.layers.test(rt.layers)&&(z.pushLight(gt),gt.castShadow&&z.pushShadow(gt))}),N!==vt&&N.traverseVisible(function(gt){gt.isLight&&gt.layers.test(rt.layers)&&(z.pushLight(gt),gt.castShadow&&z.pushShadow(gt))}),z.setupLights(),it!==null&&it.updateLights(z.state.lightsArray),ye=this.localClippingEnabled,Ee=te.init(this.clippingPlanes,ye),Ee===!0&&te.setGlobalState(this.clippingPlanes,rt),it!==null&&se.render(z.state.shadowsArray,vt,rt);let pt=new Set;return N.traverse(function(gt){if(!(gt.isMesh||gt.isPoints||gt.isLine||gt.isSprite))return;let Wt=gt.material;if(Wt)if(Array.isArray(Wt))for(let Dt=0;Dt<Wt.length;Dt++){let Xt=Wt[Dt];I(Xt,vt,rt,gt),pt.add(Xt)}else I(Wt,vt,rt,gt),pt.add(Wt)}),z=C.pop(),it!==null&&it.renderEnd(),pt},this.compileAsync=function(N,rt,vt=null){let pt=this.compile(N,rt,vt);return new Promise(gt=>{function Wt(){if(pt.forEach(function(Dt){let jt=ot.get(Dt).currentProgram;(jt===void 0||jt.isReady())&&pt.delete(Dt)}),pt.size===0){gt(N);return}setTimeout(Wt,10)}mt.get("KHR_parallel_shader_compile")!==null?Wt():setTimeout(Wt,10)})};let Si=null;function Pe(N){Si&&Si(N)}function Cr(){An.stop()}function Pr(){An.start()}let An=new Id;An.setAnimationLoop(Pe),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(N){Si=N,Qt.setAnimationLoop(N),N===null?An.stop():An.start()},Qt.addEventListener("sessionstart",Cr),Qt.addEventListener("sessionend",Pr),this.render=function(N,rt){if(rt!==void 0&&rt.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(nt===!0)return;it!==null&&it.renderStart(N,rt);let vt=Qt.enabled===!0&&Qt.isPresenting===!0,pt=H!==null&&(dt===null||vt)&&H.begin(Y,dt);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),Qt.enabled===!0&&Qt.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(Qt.cameraAutoUpdate===!0&&Qt.updateCamera(rt),rt=Qt.getCamera()),N.isScene===!0&&N.onBeforeRender(Y,N,rt,dt),z=Ft.get(N,C.length),z.init(rt),z.state.textureUnits=Q.getTextureUnits(),C.push(z),Me.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),xe.setFromProjectionMatrix(Me,ei,rt.reversedDepth),ye=this.localClippingEnabled,Ee=te.init(this.clippingPlanes,ye),U=Ht.get(N,q.length),U.init(),q.push(U),Qt.enabled===!0&&Qt.isPresenting===!0){let Dt=Y.xr.getDepthSensingMesh();Dt!==null&&Vn(Dt,rt,-1/0,Y.sortObjects)}Vn(N,rt,0,Y.sortObjects),U.finish(),it!==null&&it.updateLights(z.state.lightsArray),Y.sortObjects===!0&&U.sort(Gt,re),Le=Qt.enabled===!1||Qt.isPresenting===!1||Qt.hasDepthSensing()===!1,Le&&me.addToRenderList(U,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&te.beginShadows();let gt=z.state.shadowsArray;if(se.render(gt,N,rt),Ee===!0&&te.endShadows(),(pt&&H.hasRenderPass())===!1){let Dt=U.opaque,Xt=U.transmissive;if(z.setupLights(),rt.isArrayCamera){let jt=rt.cameras;if(Xt.length>0)for(let ee=0,zt=jt.length;ee<zt;ee++){let fe=jt[ee];hi(Dt,Xt,N,fe)}Le&&me.render(N);for(let ee=0,zt=jt.length;ee<zt;ee++){let fe=jt[ee];Ir(U,N,fe,fe.viewport)}}else Xt.length>0&&hi(Dt,Xt,N,rt),Le&&me.render(N),Ir(U,N,rt)}dt!==null&&V===0&&(Q.updateMultisampleRenderTarget(dt),Q.updateRenderTargetMipmap(dt)),pt&&H.end(Y),N.isScene===!0&&N.onAfterRender(Y,N,rt),Yt.resetDefaultState(),ct=-1,_t=null,C.pop(),C.length>0?(z=C[C.length-1],Q.setTextureUnits(z.state.textureUnits),Ee===!0&&te.setGlobalState(Y.clippingPlanes,z.state.camera)):z=null,q.pop(),q.length>0?U=q[q.length-1]:U=null,it!==null&&it.renderEnd()};function Vn(N,rt,vt,pt){if(N.visible===!1)return;if(N.layers.test(rt.layers)){if(N.isGroup)vt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(rt);else if(N.isLightProbeGrid)z.pushLightProbeGrid(N);else if(N.isLight)z.pushLight(N),N.castShadow&&z.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(xe)){pt&&He.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Me);let Dt=bt.update(N),Xt=N.material;Xt.visible&&U.push(N,Dt,Xt,vt,He.z,null,rt)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(xe))){let Dt=bt.update(N),Xt=N.material;if(pt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),He.copy(N.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),He.copy(Dt.boundingSphere.center)),He.applyMatrix4(N.matrixWorld).applyMatrix4(Me)),Array.isArray(Xt)){let jt=Dt.groups;for(let ee=0,zt=jt.length;ee<zt;ee++){let fe=jt[ee],Zt=Xt[fe.materialIndex];Zt&&Zt.visible&&U.push(N,Dt,Zt,vt,He.z,fe,rt)}}else Xt.visible&&U.push(N,Dt,Xt,vt,He.z,null,rt)}}let Wt=N.children;for(let Dt=0,Xt=Wt.length;Dt<Xt;Dt++)Vn(Wt[Dt],rt,vt,pt)}function Ir(N,rt,vt,pt){let{opaque:gt,transmissive:Wt,transparent:Dt}=N;z.setupLightsView(vt),Ee===!0&&te.setGlobalState(Y.clippingPlanes,vt),pt&&T.viewport(Mt.copy(pt)),gt.length>0&&bi(gt,rt,vt),Wt.length>0&&bi(Wt,rt,vt),Dt.length>0&&bi(Dt,rt,vt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function hi(N,rt,vt,pt){if((vt.isScene===!0?vt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[pt.id]===void 0){let Zt=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[pt.id]=new In(1,1,{generateMipmaps:!0,type:Zt?ci:Rn,minFilter:sr,samples:Math.max(4,O.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}let Wt=z.state.transmissionRenderTarget[pt.id],Dt=pt.viewport||Mt;Wt.setSize(Dt.z*Y.transmissionResolutionScale,Dt.w*Y.transmissionResolutionScale);let Xt=Y.getRenderTarget(),jt=Y.getActiveCubeFace(),ee=Y.getActiveMipmapLevel();Y.setRenderTarget(Wt),Y.getClearColor(ae),le=Y.getClearAlpha(),le<1&&Y.setClearColor(16777215,.5),Y.clear(),Le&&me.render(vt);let zt=Y.toneMapping;Y.toneMapping=oi;let fe=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),z.setupLightsView(pt),Ee===!0&&te.setGlobalState(Y.clippingPlanes,pt),bi(N,vt,pt),Q.updateMultisampleRenderTarget(Wt),Q.updateRenderTargetMipmap(Wt),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Re=0,We=rt.length;Re<We;Re++){let Ae=rt[Re],{object:r,geometry:a,material:l,group:p}=Ae;if(l.side===yn&&r.layers.test(pt.layers)){let v=l.side;l.side=En,l.needsUpdate=!0,Rr(r,vt,pt,a,l,p),l.side=v,l.needsUpdate=!0,Zt=!0}}Zt===!0&&(Q.updateMultisampleRenderTarget(Wt),Q.updateRenderTargetMipmap(Wt))}Y.setRenderTarget(Xt,jt,ee),Y.setClearColor(ae,le),fe!==void 0&&(pt.viewport=fe),Y.toneMapping=zt}function bi(N,rt,vt){let pt=rt.isScene===!0?rt.overrideMaterial:null;for(let gt=0,Wt=N.length;gt<Wt;gt++){let Dt=N[gt],{object:Xt,geometry:jt,group:ee}=Dt,zt=Dt.material;zt.allowOverride===!0&&pt!==null&&(zt=pt),Xt.layers.test(vt.layers)&&Rr(Xt,rt,vt,jt,zt,ee)}}function Rr(N,rt,vt,pt,gt,Wt){it!==null&&gt.isNodeMaterial&&it.setObject(N,gt),N.onBeforeRender(Y,rt,vt,pt,gt,Wt),N.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),gt.onBeforeRender(Y,rt,vt,pt,N,Wt),gt.transparent===!0&&gt.side===yn&&gt.forceSinglePass===!1?(gt.side=En,gt.needsUpdate=!0,Y.renderBufferDirect(vt,rt,pt,gt,N,Wt),gt.side=ir,gt.needsUpdate=!0,Y.renderBufferDirect(vt,rt,pt,gt,N,Wt),gt.side=yn):Y.renderBufferDirect(vt,rt,pt,gt,N,Wt),N.onAfterRender(Y,rt,vt,pt,gt,Wt)}function Oi(N,rt,vt){rt.isScene!==!0&&(rt=Qe);let pt=ot.get(N),gt=z.state.lights,Wt=z.state.shadowsArray,Dt=gt.state.version,Xt=Ot.getParameters(N,gt.state,Wt,rt,vt,z.state.lightProbeGridArray),jt=Ot.getProgramCacheKey(Xt),ee=pt.programs;pt.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?rt.environment:null,pt.fog=rt.fog;let zt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;pt.envMap=At.get(N.envMap||pt.environment,zt),pt.envMapRotation=pt.environment!==null&&N.envMap===null?rt.environmentRotation:N.envMapRotation,ee===void 0&&(N.addEventListener("dispose",Tn),ee=new Map,pt.programs=ee);let fe=ee.get(jt);if(fe!==void 0){if(pt.currentProgram===fe&&pt.lightsStateVersion===Dt)return Nr(N,Xt),fe}else Xt.uniforms=Ot.getUniforms(N),it!==null&&N.isNodeMaterial&&it.build(N,vt,Xt),N.onBeforeCompile(Xt,Y),fe=Ot.acquireProgram(Xt,jt),ee.set(jt,fe),pt.uniforms=Xt.uniforms;let Zt=pt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Zt.clippingPlanes=te.uniform),Nr(N,Xt),pt.needsLights=Os(N),pt.lightsStateVersion=Dt,pt.needsLights&&(Zt.ambientLightColor.value=gt.state.ambient,Zt.lightProbe.value=gt.state.probe,Zt.sunLights.value=gt.state.sun,Zt.sunLightShadows.value=gt.state.sunShadow,Zt.directionalLights.value=gt.state.directional,Zt.directionalLightShadows.value=gt.state.directionalShadow,Zt.spotLights.value=gt.state.spot,Zt.spotLightShadows.value=gt.state.spotShadow,Zt.rectAreaLights.value=gt.state.rectArea,Zt.ltc_1.value=gt.state.rectAreaLTC1,Zt.ltc_2.value=gt.state.rectAreaLTC2,Zt.pointLights.value=gt.state.point,Zt.pointLightShadows.value=gt.state.pointShadow,Zt.hemisphereLights.value=gt.state.hemi,Zt.sunShadowMatrix.value=gt.state.sunShadowMatrix,Zt.sunShadowCascade.value=gt.state.sunShadowCascade,Zt.directionalShadowMatrix.value=gt.state.directionalShadowMatrix,Zt.spotLightMatrix.value=gt.state.spotLightMatrix,Zt.spotLightMap.value=gt.state.spotLightMap,Zt.pointShadowMatrix.value=gt.state.pointShadowMatrix),pt.lightProbeGrid=z.state.lightProbeGridArray.length>0,pt.currentProgram=fe,pt.uniformsList=null,fe}function Lr(N){if(N.uniformsList===null){let rt=N.currentProgram.getUniforms();N.uniformsList=Ps.seqWithValue(rt.seq,N.uniforms)}return N.uniformsList}function Nr(N,rt){let vt=ot.get(N);vt.outputColorSpace=rt.outputColorSpace,vt.batching=rt.batching,vt.batchingColor=rt.batchingColor,vt.instancing=rt.instancing,vt.instancingColor=rt.instancingColor,vt.instancingMorph=rt.instancingMorph,vt.skinning=rt.skinning,vt.morphTargets=rt.morphTargets,vt.morphNormals=rt.morphNormals,vt.morphColors=rt.morphColors,vt.morphTargetsCount=rt.morphTargetsCount,vt.numClippingPlanes=rt.numClippingPlanes,vt.numIntersection=rt.numClipIntersection,vt.vertexAlphas=rt.vertexAlphas,vt.vertexTangents=rt.vertexTangents,vt.toneMapping=rt.toneMapping}function Ns(N,rt){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;R.setFromMatrixPosition(rt.matrixWorld);for(let vt=0,pt=N.length;vt<pt;vt++){let gt=N[vt];if(gt.texture!==null&&gt.boundingBox.containsPoint(R))return gt}return null}function ui(N,rt,vt,pt,gt){rt.isScene!==!0&&(rt=Qe),Q.resetTextureUnits();let Wt=rt.fog,Dt=pt.isMeshStandardMaterial||pt.isMeshLambertMaterial||pt.isMeshPhongMaterial?rt.environment:null,Xt=dt===null?Y.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Ce.workingColorSpace,jt=pt.isMeshStandardMaterial||pt.isMeshLambertMaterial&&!pt.envMap||pt.isMeshPhongMaterial&&!pt.envMap,ee=At.get(pt.envMap||Dt,jt),zt=pt.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,fe=!!vt.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),Zt=!!vt.morphAttributes.position,Re=!!vt.morphAttributes.normal,We=!!vt.morphAttributes.color,Ae=oi;pt.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Ae=Y.toneMapping);let r=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,a=r!==void 0?r.length:0,l=ot.get(pt),p=z.state.lights;if(Ee===!0&&(ye===!0||N!==_t)){let Rt=N===_t&&pt.id===ct;te.setState(pt,N,Rt)}let v=!1;pt.version===l.__version?(l.needsLights&&l.lightsStateVersion!==p.state.version||l.outputColorSpace!==Xt||gt.isBatchedMesh&&l.batching===!1||!gt.isBatchedMesh&&l.batching===!0||gt.isBatchedMesh&&l.batchingColor===!0&&gt._colorsTexture===null||gt.isBatchedMesh&&l.batchingColor===!1&&gt._colorsTexture!==null||gt.isInstancedMesh&&l.instancing===!1||!gt.isInstancedMesh&&l.instancing===!0||gt.isSkinnedMesh&&l.skinning===!1||!gt.isSkinnedMesh&&l.skinning===!0||gt.isInstancedMesh&&l.instancingColor===!0&&gt.instanceColor===null||gt.isInstancedMesh&&l.instancingColor===!1&&gt.instanceColor!==null||gt.isInstancedMesh&&l.instancingMorph===!0&&gt.morphTexture===null||gt.isInstancedMesh&&l.instancingMorph===!1&&gt.morphTexture!==null||l.envMap!==ee||pt.fog===!0&&l.fog!==Wt||l.numClippingPlanes!==void 0&&(l.numClippingPlanes!==te.numPlanes||l.numIntersection!==te.numIntersection)||l.vertexAlphas!==zt||l.vertexTangents!==fe||l.morphTargets!==Zt||l.morphNormals!==Re||l.morphColors!==We||l.toneMapping!==Ae||l.morphTargetsCount!==a||!!l.lightProbeGrid!=z.state.lightProbeGridArray.length>0)&&(v=!0):(v=!0,l.__version=pt.version);let A=l.currentProgram;v===!0&&(A=Oi(pt,rt,gt),it&&pt.isNodeMaterial&&it.onUpdateProgram(pt,A,l));let D=!1,$=!1,j=!1,ut=A.getUniforms(),Et=l.uniforms;if(T.useProgram(A.program)&&(D=!0,$=!0,j=!0),pt.id!==ct&&(ct=pt.id,$=!0),l.needsLights){let Rt=Ns(z.state.lightProbeGridArray,gt);l.lightProbeGrid!==Rt&&(l.lightProbeGrid=Rt,$=!0)}if(D||_t!==N){T.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),ut.setValue(k,"projectionMatrix",N.projectionMatrix),ut.setValue(k,"viewMatrix",N.matrixWorldInverse);let ne=ut.map.cameraPosition;ne!==void 0&&ne.setValue(k,Ne.setFromMatrixPosition(N.matrixWorld)),O.logarithmicDepthBuffer&&ut.setValue(k,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&ut.setValue(k,"isOrthographic",N.isOrthographicCamera===!0),_t!==N&&(_t=N,$=!0,j=!0)}if(l.needsLights&&(p.state.sunShadowMap.length>0&&ut.setValue(k,"sunShadowMap",p.state.sunShadowMap,Q),p.state.directionalShadowMap.length>0&&ut.setValue(k,"directionalShadowMap",p.state.directionalShadowMap,Q),p.state.spotShadowMap.length>0&&ut.setValue(k,"spotShadowMap",p.state.spotShadowMap,Q),p.state.pointShadowMap.length>0&&ut.setValue(k,"pointShadowMap",p.state.pointShadowMap,Q)),gt.isSkinnedMesh){ut.setOptional(k,gt,"bindMatrix"),ut.setOptional(k,gt,"bindMatrixInverse");let Rt=gt.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ut.setValue(k,"boneTexture",Rt.boneTexture,Q))}gt.isBatchedMesh&&(ut.setOptional(k,gt,"batchingTexture"),ut.setValue(k,"batchingTexture",gt._matricesTexture,Q),ut.setOptional(k,gt,"batchingIdTexture"),ut.setValue(k,"batchingIdTexture",gt._indirectTexture,Q),ut.setOptional(k,gt,"batchingColorTexture"),gt._colorsTexture!==null&&ut.setValue(k,"batchingColorTexture",gt._colorsTexture,Q));let wt=vt.morphAttributes;if((wt.position!==void 0||wt.normal!==void 0||wt.color!==void 0)&&at.update(gt,vt,A),($||l.receiveShadow!==gt.receiveShadow)&&(l.receiveShadow=gt.receiveShadow,ut.setValue(k,"receiveShadow",gt.receiveShadow)),(pt.isMeshStandardMaterial||pt.isMeshLambertMaterial||pt.isMeshPhongMaterial)&&pt.envMap===null&&rt.environment!==null&&(Et.envMapIntensity.value=rt.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=Gx()),$){if(ut.setValue(k,"toneMappingExposure",Y.toneMappingExposure),l.needsLights&&Ds(Et,j),Wt&&pt.fog===!0&&Jt.refreshFogUniforms(Et,Wt),Jt.refreshMaterialUniforms(Et,pt,Tt,yt,z.state.transmissionRenderTarget[N.id]),l.needsLights&&l.lightProbeGrid){let Rt=l.lightProbeGrid;Et.probesSH.value=Rt.texture,Et.probesMin.value.copy(Rt.boundingBox.min),Et.probesMax.value.copy(Rt.boundingBox.max),Et.probesResolution.value.copy(Rt.resolution)}Ps.upload(k,Lr(l),Et,Q)}if(pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(Ps.upload(k,Lr(l),Et,Q),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&ut.setValue(k,"center",gt.center),ut.setValue(k,"modelViewMatrix",gt.modelViewMatrix),ut.setValue(k,"normalMatrix",gt.normalMatrix),ut.setValue(k,"modelMatrix",gt.matrixWorld),pt.uniformsGroups!==void 0){let Rt=pt.uniformsGroups;for(let ne=0,ge=Rt.length;ne<ge;ne++){let be=Rt[ne];It.update(be,A),It.bind(be,A)}}return A}function Ds(N,rt){N.ambientLightColor.needsUpdate=rt,N.lightProbe.needsUpdate=rt,N.sunLights.needsUpdate=rt,N.sunLightShadows.needsUpdate=rt,N.directionalLights.needsUpdate=rt,N.directionalLightShadows.needsUpdate=rt,N.pointLights.needsUpdate=rt,N.pointLightShadows.needsUpdate=rt,N.spotLights.needsUpdate=rt,N.spotLightShadows.needsUpdate=rt,N.rectAreaLights.needsUpdate=rt,N.hemisphereLights.needsUpdate=rt}function Os(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return et},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return dt},this.setRenderTargetTextures=function(N,rt,vt){let pt=ot.get(N);pt.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,pt.__autoAllocateDepthBuffer===!1&&(pt.__useRenderToTexture=!1),ot.get(N.texture).__webglTexture=rt,ot.get(N.depthTexture).__webglTexture=pt.__autoAllocateDepthBuffer?void 0:vt,pt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,rt){let vt=ot.get(N);vt.__webglFramebuffer=rt,vt.__useDefaultFramebuffer=rt===void 0},this.setRenderTarget=function(N,rt=0,vt=0){dt=N,et=rt,V=vt;let pt=null,gt=!1,Wt=!1;if(N){let Xt=ot.get(N);if(Xt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(k.FRAMEBUFFER,Xt.__webglFramebuffer),Mt.copy(N.viewport),Pt.copy(N.scissor),Ut=N.scissorTest,T.viewport(Mt),T.scissor(Pt),T.setScissorTest(Ut),ct=-1;return}else if(Xt.__webglFramebuffer===void 0)Q.setupRenderTarget(N);else if(Xt.__hasExternalTextures)Q.rebindTextures(N,ot.get(N.texture).__webglTexture,ot.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let zt=N.depthTexture;if(Xt.__boundDepthTexture!==zt){if(zt!==null&&ot.has(zt)&&(N.width!==zt.image.width||N.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(N)}}let jt=N.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Wt=!0);let ee=ot.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ee[rt])?pt=ee[rt][vt]:pt=ee[rt],gt=!0):N.samples>0&&Q.useMultisampledRTT(N)===!1?pt=ot.get(N).__webglMultisampledFramebuffer:Array.isArray(ee)?pt=ee[vt]:pt=ee,Mt.copy(N.viewport),Pt.copy(N.scissor),Ut=N.scissorTest}else Mt.copy(Vt).multiplyScalar(Tt).floor(),Pt.copy(ue).multiplyScalar(Tt).floor(),Ut=Oe;if(vt!==0&&(pt=tt),T.bindFramebuffer(k.FRAMEBUFFER,pt)&&T.drawBuffers(N,pt),T.viewport(Mt),T.scissor(Pt),T.setScissorTest(Ut),gt){let Xt=ot.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Xt.__webglTexture,vt)}else if(Wt){let Xt=rt;for(let jt=0;jt<N.textures.length;jt++){let ee=ot.get(N.textures[jt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+jt,ee.__webglTexture,vt,Xt)}}else if(N!==null&&vt!==0){let Xt=ot.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Xt.__webglTexture,vt)}ct=-1};function Dr(N){let rt=ot.get(N);return(rt.__readFormat!==N.format||rt.__readType!==N.type)&&(rt.__readFormat=N.format,rt.__readType=N.type,rt.__formatReadable=O.textureFormatReadable(N.format),rt.__typeReadable=O.textureTypeReadable(N.type)),rt}this.readRenderTargetPixels=function(N,rt,vt,pt,gt,Wt,Dt,Xt=0){if(!(N&&N.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=ot.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Dt!==void 0&&(jt=jt[Dt]),jt){T.bindFramebuffer(k.FRAMEBUFFER,jt);try{let ee=N.textures[Xt],zt=ee.format,fe=ee.type;N.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Xt);let Zt=Dr(ee);if(Zt.__formatReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=N.width-pt&&vt>=0&&vt<=N.height-gt&&k.readPixels(rt,vt,pt,gt,kt.convert(zt),kt.convert(fe),Wt)}finally{let ee=dt!==null?ot.get(dt).__webglFramebuffer:null;T.bindFramebuffer(k.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(N,rt,vt,pt,gt,Wt,Dt,Xt=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=ot.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Dt!==void 0&&(jt=jt[Dt]),jt)if(rt>=0&&rt<=N.width-pt&&vt>=0&&vt<=N.height-gt){T.bindFramebuffer(k.FRAMEBUFFER,jt);let ee=N.textures[Xt],zt=ee.format,fe=ee.type;N.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Xt);let Zt=Dr(ee);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Re),k.bufferData(k.PIXEL_PACK_BUFFER,Wt.byteLength,k.STREAM_READ),k.readPixels(rt,vt,pt,gt,kt.convert(zt),kt.convert(fe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let We=dt!==null?ot.get(dt).__webglFramebuffer:null;T.bindFramebuffer(k.FRAMEBUFFER,We);let Ae=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await nd(k,Ae,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Re),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Wt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Re),k.deleteSync(Ae),Wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,rt=null,vt=0){let pt=Math.pow(2,-vt),gt=Math.floor(N.image.width*pt),Wt=Math.floor(N.image.height*pt),Dt=rt!==null?rt.x:0,Xt=rt!==null?rt.y:0;Q.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,vt,0,0,Dt,Xt,gt,Wt),T.unbindTexture()},this.copyTextureToTexture=function(N,rt,vt=null,pt=null,gt=0,Wt=0){let Dt,Xt,jt,ee,zt,fe,Zt,Re,We,Ae=N.isCompressedTexture?N.mipmaps[Wt]:N.image;if(vt!==null)Dt=vt.max.x-vt.min.x,Xt=vt.max.y-vt.min.y,jt=vt.isBox3?vt.max.z-vt.min.z:1,ee=vt.min.x,zt=vt.min.y,fe=vt.isBox3?vt.min.z:0;else{let Et=Math.pow(2,-gt);Dt=Math.floor(Ae.width*Et),Xt=Math.floor(Ae.height*Et),N.isDataArrayTexture?jt=Ae.depth:N.isData3DTexture?jt=Math.floor(Ae.depth*Et):jt=1,ee=0,zt=0,fe=0}pt!==null?(Zt=pt.x,Re=pt.y,We=pt.z):(Zt=0,Re=0,We=0);let r=kt.convert(rt.format),a=kt.convert(rt.type),l;rt.isData3DTexture?(Q.setTexture3D(rt,0),l=k.TEXTURE_3D):rt.isDataArrayTexture||rt.isCompressedArrayTexture?(Q.setTexture2DArray(rt,0),l=k.TEXTURE_2D_ARRAY):(Q.setTexture2D(rt,0),l=k.TEXTURE_2D),T.activeTexture(k.TEXTURE0),T.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,rt.flipY),T.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),T.pixelStorei(k.UNPACK_ALIGNMENT,rt.unpackAlignment);let p=T.getParameter(k.UNPACK_ROW_LENGTH),v=T.getParameter(k.UNPACK_IMAGE_HEIGHT),A=T.getParameter(k.UNPACK_SKIP_PIXELS),D=T.getParameter(k.UNPACK_SKIP_ROWS),$=T.getParameter(k.UNPACK_SKIP_IMAGES);T.pixelStorei(k.UNPACK_ROW_LENGTH,Ae.width),T.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ae.height),T.pixelStorei(k.UNPACK_SKIP_PIXELS,ee),T.pixelStorei(k.UNPACK_SKIP_ROWS,zt),T.pixelStorei(k.UNPACK_SKIP_IMAGES,fe);let j=N.isDataArrayTexture||N.isData3DTexture,ut=rt.isDataArrayTexture||rt.isData3DTexture;if(N.isDepthTexture){let Et=ot.get(N),wt=ot.get(rt),Rt=ot.get(Et.__renderTarget),ne=ot.get(wt.__renderTarget);T.bindFramebuffer(k.READ_FRAMEBUFFER,Rt.__webglFramebuffer),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let ge=0;ge<jt;ge++)j&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ot.get(N).__webglTexture,gt,fe+ge),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ot.get(rt).__webglTexture,Wt,We+ge)),k.blitFramebuffer(ee,zt,Dt,Xt,Zt,Re,Dt,Xt,k.DEPTH_BUFFER_BIT,k.NEAREST);T.bindFramebuffer(k.READ_FRAMEBUFFER,null),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(gt!==0||N.isRenderTargetTexture||ot.has(N)){let Et=ot.get(N),wt=ot.get(rt);T.bindFramebuffer(k.READ_FRAMEBUFFER,K),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,B);for(let Rt=0;Rt<jt;Rt++)j?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Et.__webglTexture,gt,fe+Rt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Et.__webglTexture,gt),ut?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wt.__webglTexture,Wt,We+Rt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,wt.__webglTexture,Wt),gt!==0?k.blitFramebuffer(ee,zt,Dt,Xt,Zt,Re,Dt,Xt,k.COLOR_BUFFER_BIT,k.NEAREST):ut?k.copyTexSubImage3D(l,Wt,Zt,Re,We+Rt,ee,zt,Dt,Xt):k.copyTexSubImage2D(l,Wt,Zt,Re,ee,zt,Dt,Xt);T.bindFramebuffer(k.READ_FRAMEBUFFER,null),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ut?N.isDataTexture||N.isData3DTexture?k.texSubImage3D(l,Wt,Zt,Re,We,Dt,Xt,jt,r,a,Ae.data):rt.isCompressedArrayTexture?k.compressedTexSubImage3D(l,Wt,Zt,Re,We,Dt,Xt,jt,r,Ae.data):k.texSubImage3D(l,Wt,Zt,Re,We,Dt,Xt,jt,r,a,Ae):N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Wt,Zt,Re,Dt,Xt,r,a,Ae.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Wt,Zt,Re,Ae.width,Ae.height,r,Ae.data):k.texSubImage2D(k.TEXTURE_2D,Wt,Zt,Re,Dt,Xt,r,a,Ae);T.pixelStorei(k.UNPACK_ROW_LENGTH,p),T.pixelStorei(k.UNPACK_IMAGE_HEIGHT,v),T.pixelStorei(k.UNPACK_SKIP_PIXELS,A),T.pixelStorei(k.UNPACK_SKIP_ROWS,D),T.pixelStorei(k.UNPACK_SKIP_IMAGES,$),Wt===0&&rt.generateMipmaps&&k.generateMipmap(l),T.unbindTexture()},this.initRenderTarget=function(N){ot.get(N).__webglFramebuffer===void 0&&Q.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Q.setTextureCube(N,0):N.isData3DTexture?Q.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Q.setTexture2DArray(N,0):Q.setTexture2D(N,0),T.unbindTexture()},this.resetState=function(){et=0,V=0,dt=null,T.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}}});function Yx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function qx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function $x(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kd),this.state=ze.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Zx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ze.DOLLY;break;case er.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ze.ROTATE}break;case er.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Qh)}function Jx(n){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function jx(n){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(n.preventDefault(),this.dispatchEvent(Qh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(kd))}function Kx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Qx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ze.TOUCH_ROTATE;break;case nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ze.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Qh)}function tM(n){switch(this._trackPointer(n),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ze.NONE}}function eM(n){this.enabled!==!1&&n.preventDefault()}function nM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ud,Qh,kd,nc,Bd,Wx,on,Ln,ze,Kh,ic,zd=Cn(()=>{ec();Ud={type:"change"},Qh={type:"start"},kd={type:"end"},nc=new Zi,Bd=new Fn,Wx=Math.cos(70*Rh.DEG2RAD),on=new lt,Ln=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kh=1e-6,ic=class extends Eo{constructor(t,e=null){super(t,e),this.state=ze.NONE,this.target=new lt,this.cursor=new lt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:er.ROTATE,MIDDLE:er.DOLLY,RIGHT:er.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new lt,this._lastQuaternion=new Un,this._lastTargetPosition=new lt,this._quat=new Un().setFromUnitVectors(t.up,new lt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ss,this._sphericalDelta=new Ss,this._scale=1,this._panOffset=new lt,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new lt,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qx.bind(this),this._onPointerDown=Yx.bind(this),this._onPointerUp=$x.bind(this),this._onContextMenu=eM.bind(this),this._onMouseWheel=jx.bind(this),this._onKeyDown=Kx.bind(this),this._onTouchStart=Qx.bind(this),this._onTouchMove=tM.bind(this),this._onMouseDown=Zx.bind(this),this._onMouseMove=Jx.bind(this),this._interceptControlDown=nM.bind(this),this._interceptControlUp=iM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ze.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ud),this.update(),this.state=ze.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;on.copy(e).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),e.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){let u=on.length();c=this._clampDistance(u*this._scale);let f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){let u=new lt(this._mouse.x,this._mouse.y,0);u.unproject(this.object);let f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;let d=new lt(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),c=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(nc.origin.copy(this.object.position),nc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nc.direction))<Wx?this.object.lookAt(this.target):(Bd.setFromNormalAndCoplanarPoint(this.object.up,this.target),nc.intersectPlane(Bd,this.target))))}else if(this.object.isOrthographicCamera){let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Kh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kh||this._lastTargetPosition.distanceToSquared(this.target)>Kh?(this.dispatchEvent(Ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){on.setFromMatrixColumn(e,0),on.multiplyScalar(-t),this._panOffset.add(on)}_panUp(t,e){this.screenSpacePanning===!0?on.setFromMatrixColumn(e,1):(on.setFromMatrixColumn(e,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(t),this._panOffset.add(on)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;on.copy(s).sub(this.target);let o=on.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,c=i.width,u=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let c=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new oe,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function Vd(n,t,e,i){n.onBeforeCompile=s=>{s.uniforms.uCut={value:t-.05},s.uniforms.uBase={value:i||new ve(1,1,1)},s.uniforms.uBottom={value:t},s.vertexShader=`varying float vZ;
uniform float uBottom;
`+(e?"":`attribute vec4 wall;
varying vec4 vWall;
`)+s.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
`+(e?"objectNormal = vec3(0.0, 0.0, -1.0);":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vZ = transformed.z;
`+(e?"transformed.z = uBottom;":"vWall = wall;")),s.fragmentShader=`varying float vZ;
uniform float uCut;
`+s.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (vZ < uCut) discard;`),e||(s.fragmentShader=`varying vec4 vWall;
uniform vec3 uBase;
`+s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float onWall = dot(vWall.xy, vWall.xy) > 1e-6 ? smoothstep(0.0, 0.03, vZ - vWall.z) * smoothstep(0.0, 0.03, vWall.w - vZ) : 0.0;
diffuseColor.rgb = mix(diffuseColor.rgb, uBase, onWall);`).replace("#include <normal_fragment_begin>",we.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")+`
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function Hd(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let s=i.getContext("2d");s.font="600 84px Inter, system-ui, sans-serif",s.fillStyle="#"+new ve(t).getHexString(),s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,64);let o=new po(i);o.colorSpace=bn;let c=new uo(new gs({map:o,depthTest:!1,transparent:!0}));return c.scale.set(e*2,e,1),c.renderOrder=6,c}var qn,Rs,rM,rc,Gd=Cn(()=>{ec();zd();qn={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa"},Rs={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};rM=(n,t)=>n.some(e=>e.key===t);rc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new Kl({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new ao,this.camera=new vn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new ic(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new Mo(16777215,4478310,1.6));let t=new Ms(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new Ms(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new ni,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=s=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&s-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=s,this.onFrame&&this.onFrame(s),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,s=new lt((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),c=new lt(-.45,-.8,.75).normalize(),u=[];for(let y of[t[0],e[0]])for(let g of[t[1],e[1]])for(let b of[t[2],e[2]])u.push(new lt(y,g,b));let f=s.clone(),d=o*2,_=()=>{this.camera.position.copy(f).addScaledVector(c,d),this.camera.near=d/100,this.camera.far=d*100,this.camera.lookAt(f),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let y=0;y<8;y++){_();let g=1/0,b=-1/0,E=1/0,P=-1/0;for(let U of u){let z=U.clone().project(this.camera);g=Math.min(g,z.x),b=Math.max(b,z.x),E=Math.min(E,z.y),P=Math.max(P,z.y)}let S=Math.max((b-g)/2,(P-E)/2);if(!(S>0))break;let M=d*Math.tan(this.camera.fov*Math.PI/360),F=M*this.camera.aspect,X=new lt().setFromMatrixColumn(this.camera.matrixWorld,0),R=new lt().setFromMatrixColumn(this.camera.matrixWorld,1);f.addScaledVector(X,(g+b)/2*F).addScaledVector(R,(E+P)/2*M),d*=S/(1-i)}_(),this.controls.target.copy(f),this.controls.update()}showPart(t,e=[]){this.clear();let i=new Ze;i.setAttribute("position",new Ge(t.positions,3)),i.setIndex(new Ge(t.indices,1)),i.computeVertexNormals();let s=new Ve(i,new kn({color:9348283,metalness:.15,roughness:.55,side:yn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(s),this.pickMesh=s;let o=new xr(new ys(i,25),new si({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let u of e)this.addLoops(u.loops,u.z,u.color,u.dashed,u.opacity);i.computeBoundingBox();let c=i.boundingBox;this.keepCamera||this.frame(c.min.toArray(),c.max.toArray())}addLoops(t,e,i,s,o=.95){for(let c of t){let u=c.map(([y,g])=>new lt(y,g,e)),f=new Ze().setFromPoints([...u,u[0]]),d=s?new vo({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new si({color:i,transparent:!0,opacity:o,depthTest:!1}),_=new yr(f,d);s&&_.computeLineDistances(),_.renderOrder=2,this.content.add(_)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let s=t.getBoundingClientRect(),o=new bo;if(o.setFromCamera(new oe((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let f=o.intersectObjects(this.markers)[0];if(f){this.onMarker(f.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let c=o.intersectObject(this.pickMesh)[0];if(!c||!c.face)return;let u=c.face.normal.clone();u.dot(o.ray.direction)>0&&u.negate(),this.onPick([u.x,u.y,u.z])})}showZero({stock:t,part:e,points:i,selected:s,zFace:o,color:c,accent:u="#4c6ef5"}){this.clear();let f=t.maxX-t.minX,d=t.maxY-t.minY,_=t.top-t.bottom,y=Math.max(f,d,_),g=new ji(f,d,_);g.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let b=new Ve(g,new kn({color:c,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(b.renderOrder=2,this.content.add(b),this.content.add(new xr(new ys(g),new si({color:new ve(c).multiplyScalar(.6)}))),e){let M=new Ze;M.setAttribute("position",new Ge(e.positions,3)),M.setIndex(new Ge(e.indices,1)),M.computeVertexNormals(),this.content.add(new Ve(M,new kn({color:9348283,metalness:.15,roughness:.55})))}let E=o==="bed"?t.bottom:t.top,P=y*.014;this.markers=[];for(let M of i){let F=M.key===s,X=new Ve(new Sr(F?P*1.3:P,24,16),new ri({color:F?u:16777215}));if(X.position.set(M.x,M.y,E),X.userData.key=M.key,X.renderOrder=4,X.material.depthTest=!1,!F){let U=new Ve(new Sr(P*1.25,24,16),new ri({color:6187893,depthTest:!1}));U.renderOrder=3,X.add(U)}let R=new Ve(new Sr(P*3.5,12,8),new ri({visible:!1}));if(R.userData.key=M.key,X.add(R),this.markers.push(R),this.content.add(X),F){let U=new Ve(new _o(P*1.6,P*2,40),new ri({color:u,transparent:!0,depthTest:!1,side:yn}));U.position.copy(X.position),U.renderOrder=4,this.content.add(U),this.pulse=U;let z=y*.3;for(let[q,C,H]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let Y=new wo(new lt(...q),X.position,z,C,z*.13,z*.055);Y.line.material.depthTest=!1,Y.cone.material.depthTest=!1,Y.renderOrder=5,Y.line.renderOrder=5,Y.cone.renderOrder=5,this.content.add(Y);let nt=Hd(H,C,y*.05);nt.position.copy(X.position).add(new lt(...q).multiplyScalar(z*1.18)),this.content.add(nt)}}}let S=Hd("Front",9675444,y*.04);S.position.set((t.minX+t.maxX)/2,t.minY-y*.08,t.bottom),this.content.add(S),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),rM(i,s)||(this.pulse=null),this.onFrame=M=>{if(!this.pulse)return;let F=M%1600/1600;this.pulse.scale.setScalar(1+F*1.6),this.pulse.material.opacity=.8*(1-F),this.pulse.lookAt(this.camera.position)}}showStock(t,e,i){this.clear(),this.keepCamera=!1;let s=t.nx,o=t.ny,c=s*o,u=new Float32Array(c*3),f=new Float32Array(c*3),d=new ve(e);for(let F=0;F<o;F++)for(let X=0;X<s;X++){let R=F*s+X;u[R*3]=t.x0+X*t.cell,u[R*3+1]=t.y0+F*t.cell,u[R*3+2]=t.h[R],f[R*3]=d.r,f[R*3+1]=d.g,f[R*3+2]=d.b}let _=new Uint32Array((s-1)*(o-1)*6),y=0;for(let F=0;F<o-1;F++)for(let X=0;X<s-1;X++){let R=F*s+X,U=R+1,z=R+s,q=z+1;_[y++]=R,_[y++]=U,_[y++]=q,_[y++]=R,_[y++]=q,_[y++]=z}let g=new Ze;g.setAttribute("position",new Ge(u,3).setUsage(Er)),g.setAttribute("color",new Ge(f,3).setUsage(Er));let b=new Float32Array(c*3);for(let F=0;F<c;F++)b[F*3+2]=1;g.setAttribute("normal",new Ge(b,3).setUsage(Er));let E=new Float32Array(c*4);for(let F=0;F<c;F++)E[F*4+2]=t.h[F],E[F*4+3]=t.h[F];g.setAttribute("wall",new Ge(E,4).setUsage(Er)),g.setIndex(new Ge(_,1));let P=new kn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Rs.aluminum?.5:.05,side:yn});Vd(P,t.bottom,!1,d);let S=new Ve(g,P);this.content.add(S),this.stock={hm:t,geo:g,base:d,sides:this.makeSides(t,d)};let M=new kn({color:d.clone().multiplyScalar(.7),roughness:.9,side:yn});if(Vd(M,t.bottom,!0),this.content.add(new Ve(g,M)),i){let F=new Ze;F.setAttribute("position",new Ge(i.positions,3)),F.setIndex(new Ge(i.indices,1)),F.computeVertexNormals(),this.partGhost=new Ve(F,new kn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new ni,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(s-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let y=0;y<t.nx;y++)i.push(y);for(let y=1;y<t.ny;y++)i.push(y*t.nx+t.nx-1);for(let y=t.nx-2;y>=0;y--)i.push((t.ny-1)*t.nx+y);for(let y=t.ny-2;y>=0;y--)i.push(y*t.nx);let s=new Float32Array(i.length*6),o=new Float32Array(i.length*6),c=[],u=[[0,-1],[1,0],[0,1],[-1,0]],f=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let y=0;y<i.length;y++){let g=i[y],b=t.x0+g%t.nx*t.cell,E=t.y0+Math.floor(g/t.nx)*t.cell;s.set([b,E,t.h[g],b,E,t.bottom],y*6);let[P,S]=u[y<f[0]?0:y<f[1]?1:y<f[2]?2:3];if(o.set([P,S,0,P,S,0],y*6),y<i.length-1){let M=y*2;c.push(M,M+1,M+3,M,M+3,M+2)}}let d=new Ze;d.setAttribute("position",new Ge(s,3).setUsage(Er)),d.setAttribute("normal",new Ge(o,3)),d.setIndex(c);let _=new Ve(d,new kn({color:e.clone().multiplyScalar(.85),roughness:.85,side:yn}));return this.content.add(_),{g:d,edge:i}}refreshStock(t,e,i){let s=this.stock;if(!s||e<t)return;let{hm:o,geo:c,base:u}=s,f=o.nx,d=o.ny,_=o.h,y=c.attributes.position,g=c.attributes.color,b=c.attributes.normal,E=c.attributes.wall,P=new ve,S=Math.max(0,t),M=Math.min(d-1,e),F=o.cell*1.5,X=(C,H,Y)=>{let nt=_[H*f+C],it=0;for(let tt=-1;tt<=1;tt++)for(let K=-1;K<=1;K++){let B=C+K,et=H+tt;(K||tt)&&B>=0&&et>=0&&B<f&&et<d&&(it=Math.max(it,Y*(_[et*f+B]-nt)))}return it};for(let C=S;C<=M;C++)for(let H=0;H<f;H++){let Y=C*f+H;y.array[Y*3]=o.x0+H*o.cell+(o.sx?o.sx[Y]:0),y.array[Y*3+1]=o.y0+C*o.cell+(o.sy?o.sy[Y]:0),y.array[Y*3+2]=_[Y];let nt=o.op[Y];nt?(P.copy(u).lerp(i[nt-1],.28),P.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(_[Y]-o.bottom)/Math.max(1,o.top-o.bottom))))):P.copy(u),g.array[Y*3]=P.r,g.array[Y*3+1]=P.g,g.array[Y*3+2]=P.b}let R=y.array,U=Math.max(0,S-1),z=Math.min(d-1,M+1);for(let C=U;C<=z;C++)for(let H=0;H<f;H++){let Y=C*f+H,nt=E.array,it=X(H,C,1),tt=X(H,C,-1);if(nt[Y*4]=0,nt[Y*4+1]=0,nt[Y*4+2]=_[Y],nt[Y*4+3]=_[Y],o.wx&&(o.wx[Y]||o.wy[Y])&&(it>F||tt>F)){nt[Y*4]=o.wx[Y],nt[Y*4+1]=o.wy[Y],nt[Y*4+2]=_[Y]-tt,nt[Y*4+3]=_[Y]+it,b.array[Y*3]=0,b.array[Y*3+1]=0,b.array[Y*3+2]=1;continue}let K=(C*f+Math.max(0,H-1))*3,B=(C*f+Math.min(f-1,H+1))*3,et=(Math.max(0,C-1)*f+H)*3,V=(Math.min(d-1,C+1)*f+H)*3,dt=R[B]-R[K],ct=R[B+1]-R[K+1],_t=R[B+2]-R[K+2],Mt=R[V]-R[et],Pt=R[V+1]-R[et+1],Ut=R[V+2]-R[et+2],ae=ct*Ut-_t*Pt,le=_t*Mt-dt*Ut,pe=dt*Pt-ct*Mt,yt=Math.hypot(ae,le,pe)||1;pe<0&&(ae=-ae,le=-le,pe=-pe),b.array[Y*3]=ae/yt,b.array[Y*3+1]=le/yt,b.array[Y*3+2]=pe/yt}y.addUpdateRange(S*f*3,(M-S+1)*f*3),g.addUpdateRange(S*f*3,(M-S+1)*f*3),b.addUpdateRange(U*f*3,(z-U+1)*f*3),E.addUpdateRange(U*f*4,(z-U+1)*f*4),y.needsUpdate=!0,g.needsUpdate=!0,b.needsUpdate=!0,E.needsUpdate=!0;let q=s.sides.g.attributes.position;s.sides.edge.forEach((C,H)=>{q.array[H*6+2]=_[C]}),q.needsUpdate=!0}setTool(t,e){for(let y of[...this.tool.children])this.tool.remove(y),y.geometry.dispose(),y.material.dispose();let i=t.diameter/2,s=t.kind==="surfacing"||i>6.35,o=s?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),c=new kn({color:14015457,metalness:.85,roughness:.3}),u;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let y=i/Math.tan((t.kind==="drill"?118:60)*Math.PI/360);u=new Ve(new vs(i,y,48),c),u.rotation.x=-Math.PI/2,u.position.z=y/2}else u=new Ve(new Mr(i,i,o,64),c),u.rotation.x=Math.PI/2,u.position.z=o/2;let f=s?3.175:Math.max(i,Math.min(3.175,i*1.5)),d=20,_=new Ve(new Mr(f,f,d,32),new kn({color:11187132,metalness:.8,roughness:.35}));_.rotation.x=Math.PI/2,_.position.z=o+d/2,this.tool.add(u,_)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new ni;for(let e of t){let i=e.track;if(!i)continue;let s=[],o=[];for(let u=4;u<i.length;u+=4)(i[u+3]>0?s:o).push(i[u-4],i[u-3],i[u-2]+.02,i[u],i[u+1],i[u+2]+.02);let c=(u,f,d)=>{if(!u.length)return;let _=new Ze;_.setAttribute("position",new Xe(u,3));let y=new xr(_,new si({color:f,transparent:!0,opacity:d}));y.renderOrder=3,this.paths.add(y)};c(s,qn[e.kind]||"#1abc9c",.75),c(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function oM(){return new Promise((n,t)=>{let e=indexedDB.open(sM,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Xd(n,t){let e=await oM();return new Promise((i,s)=>{let o=e.transaction("kv",n),c=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(c?.result)},o.onerror=o.onabort=()=>{e.close(),s(o.error)}})}var sM,Wd,Yd,qd=Cn(()=>{sM="nccam";Wd=n=>Xd("readonly",t=>t.get(n)).catch(()=>null),Yd=(n,t)=>Xd("readwrite",e=>e.put(t,n)).catch(()=>{})});var Jd={};Em(Jd,{mountApp:()=>uM});function uM(n,t,e){let i={get:async J=>{let k=await fetch(t.base+J);if(!k.ok)throw new Error(`${J}: ${k.status}`);return k.json()},post:(J,k)=>fetch(t.base+J,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})},s={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,tools:[],numbering:"slot",safeZ:null,connected:!1,limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:""},o=new rc,c=0;(async()=>{let[J,k,ht,mt]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);s.numbering=J?.tool?.numbering==="toolId"?"toolId":"slot";let O=Number(J?.safeZHeight);s.safeZ=Number.isFinite(O)?O:null,s.tools=Eu(Array.isArray(k)?k:k?.tools);let T=ht?.settings||{},W=Q=>{let At=parseFloat(T[Q]?.value);return Number.isFinite(At)&&At>0?At:null};s.limits={maxRpm:W("30")||void 0,minRpm:W("31")||void 0,maxFeed:Math.min(W("110")||1/0,W("111")||1/0,1/0)},Number.isFinite(s.limits.maxFeed)||delete s.limits.maxFeed,s.maxRapid=Math.min(W("110")||5e3,W("111")||5e3),W("130")&&W("131")&&(s.travel={x:W("130"),y:W("131"),z:W("132")}),s.connected=!!mt?.machineState?.connected,g();let ot=await Wd("last");ot?.bytes&&!s.part&&!s.loading&&u(null,ot)})();async function u(J,k=null){if(!J&&!k)return;let ht=k?k.name:J.name;s.fileName=ht,s.loading=`Reading ${ht}\u2026`,s.error="",s.plan=null,s.result=null,s.analysis=null,s.part=null,s.step=1,s.maxStep=1,g();try{let mt=k?k.bytes:await J.arrayBuffer();s.bytes=mt.slice(0);let O=await e("load",{bytes:mt},[mt]);if(s.sides=O.sides,k?.upPath?.length){s.job=null;for(let T of k.upPath)await f(T,!0);s.job={...xc(s.analysis),...k.job},await d()}else await f(O.best);y()}catch(mt){s.error=mt.message||String(mt),s.fileName=""}s.loading="",g()}async function f(J,k=!1){s.loading="Turning the part\u2026",g();let ht=await e(Array.isArray(J)?"tilt":"orient",Array.isArray(J)?{normal:J}:{up:J});if(s.up=Array.isArray(J)?"custom":J,s.upPath=Array.isArray(J)?[...s.upPath||[],J]:[J],k){s.part={positions:ht.positions,indices:ht.indices},s.analysis=ht.analysis,s.loading="";return}s.part={positions:ht.positions,indices:ht.indices},s.analysis=ht.analysis;let mt=s.job;s.job=xc(ht.analysis),mt&&Object.assign(s.job,{material:mt.material,finish:mt.finish,zero:mt.zero,tabs:mt.tabs,stock:{...s.job.stock,fit:mt.stock.fit,margin:mt.stock.margin,extraTop:mt.stock.extraTop}}),s.loading="",await d()}async function d(J=!1){if(!s.part)return;let k=++c;s.planning=!0,J&&(s.result=null),g();try{let ht=await e("plan",{tools:s.tools,job:s.job,limits:s.limits,paths:J,gcodeOptions:{name:s.fileName,numbering:s.numbering,safeZHeightMm:s.safeZ},timing:{maxRapid:s.maxRapid||5e3}});if(k!==c)return;s.plan=ht.plan,y(),J&&(s.result=ht,s.simChecks=null)}catch(ht){k===c&&(s.error=ht.message||String(ht))}k===c&&(s.planning=!1,g())}let _=null;function y(){!s.bytes||!s.job||(clearTimeout(_),_=setTimeout(()=>Yd("last",{name:s.fileName,bytes:s.bytes,upPath:s.upPath,job:s.job,savedAt:Date.now()}),400))}function g(){if(!n.isConnected)return;let J=n.querySelector("[data-keep-scroll]"),k=J?J.scrollTop:0,ht=s.step,mt=["Drop a STEP file. ncCAM finds the pockets, holes and outline for you.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][ht-1],O=[s.part?"Your part":"Open your part","What are you cutting it from?","Here\u2019s the plan",s.simChecks&&!s.simChecks.ok?"Check the warnings":"Ready to cut"][ht-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCAM<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">STEP file to G-code</div></div>
        <div class="ncc-steps">${lM.map((ot,Q)=>{let At=Q+1,Ct=At===ht?"on":At<s.maxStep||At<ht?"done":"";return`<button class="ncc-step ${Ct}" type="button" data-go="${At}" ${At<=s.maxStep?"":"disabled"}><span class="ncc-num">${Ct==="done"?"\u2713":At}</span>${qe(ot)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${hn.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${qe(O)}</h1><p class="ncc-lede">${qe(mt)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${s.connected?"ok":""}"></span>${s.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${ht===3?"fixed":""}">${[E,U,nt,K][ht-1]()}</div>
        <div class="ncc-foot">${b()}</div>
      </section>
      ${s.toast?`<div class="ncc-toast" role="status">${qe(s.toast)}</div>`:""}`;let T=n.querySelector("[data-keep-scroll]");T&&(T.scrollTop=k);let W=n.querySelector("[data-viewer]");if(W){W.replaceWith(o.el);let ot=s.loading||ht===4&&!s.result?`<div class="ncc-busy"><span class="ncc-spin"></span>${qe(s.loading||"Making toolpaths\u2026")}</div>`:"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(Q=>Q.remove()),o.el.insertAdjacentHTML("beforeend",(ht===1?F():ht===4?ct():"")+ot),o.fit(),ht===1&&R(),ht===2&&Y(),ht===3&&it(),ht===4&&s.result&&Mt()}}function b(){let J=`<button class="ncc-back" type="button" data-go="${s.step-1}" ${s.step>1?"":"disabled"}>Back</button>`;if(s.step===1)return`${J}<button class="ncc-next" type="button" data-go="2" ${s.plan&&s.plan.ops.length&&!s.loading?"":"disabled"}>Next: Stock ${hn.next}</button>`;if(s.step===2)return`${J}<button class="ncc-next" type="button" data-go="3">Next: Operations ${hn.next}</button>`;if(s.step===3){let ht=s.plan&&s.plan.ops.some(mt=>mt.enabled);return`${J}<button class="ncc-next" type="button" data-go="4" ${ht&&!s.planning?"":"disabled"}>Make toolpaths ${hn.next}</button>`}let k=s.simChecks&&!s.simChecks.ok;return`${J}${k?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${s.result&&s.simChecks&&!k?"":"disabled"}>${hn.load}Load into ncSender</button>`}function E(){if(!s.part&&!s.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${hn.upload}</div>
        <h2>Drop a STEP file here</h2>
        <p>Export your part from Fusion, Onshape, FreeCAD or SolidWorks as <strong>.step</strong> or <strong>.stp</strong>. Millimetres or inches both work.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open STEP file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        ${s.error?`<div class="ncc-hint bad" style="max-width: 520px">${hn.warn}<span>${qe(s.error)}</span></div>`:""}
        ${s.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${hn.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCAM can pick them.</span></div>`}
      </div>`;let J=s.analysis;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${hn.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${qe(s.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${J?`${Nn(J.size[0])} \xD7 ${Nn(J.size[1])} \xD7 ${Nn(J.size[2])} mm`:"&nbsp;"}</div></div>
          </div>
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        </div>
        <div data-viewer></div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card">
          <div class="ncc-label">Which side faces up?</div>
          <div class="ncc-picks">${cM.map(([k,ht])=>{let mt=!s.sides||s.sides[k].reachable;return`<button class="ncc-pick ${s.up===k?"sel":""}" type="button" data-up="${k}" ${mt?"":"disabled"} ${mt?"":`title="With the ${ht.toLowerCase()} up, some faces point down and the tool can\u2019t reach them"`}>${dn(hM[k],24,'stroke-width="1.8"')}${ht}${mt?"":"<small>Can\u2019t reach</small>"}</button>`}).join("")}</div>
          <div class="ncc-row-sub">Or click a flat face on the model to put it on top.</div>
        </div>
        ${P()}
        ${M(!0)}
      </div>`}function P(){if(!s.plan)return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-row-sub">${s.planning?"Looking\u2026":""}</div></div>`;let J=new Map;for(let ht of s.plan.ops.filter(mt=>mt.kind!=="face"&&mt.kind!=="corners")){let mt=S(ht),O=J.get(mt)||{o:ht,name:mt,n:0};O.n+=ht.count||1,J.set(mt,O)}let k=ht=>ht.n<2?ht.name:ht.name.replace(/^(Pocket|Step), /,(mt,O)=>`${ht.n} ${O.toLowerCase()}s, `);return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-found">${[...J.values()].map(ht=>`<div class="ncc-row"><span style="display: flex; align-items: center; gap: 8px"><span class="ncc-swatch" style="background: ${qn[ht.o.kind]}"></span>${qe(k(ht))}</span><span class="ncc-ok">\u2713</span></div>`).join("")||'<div class="ncc-row-sub">Nothing to cut from this side.</div>'}</div></div>`}function S(J){let k=J.detail.replace(/ · spiral$/,"");return J.kind==="cutout"?`Outline, ${Nn(J.zTop)} mm cut-out`:J.kind==="hole"||J.kind==="drill"?`${J.centers.length>1?`${J.centers.length} holes`:"Hole"}, ${k}`:J.kind==="step"?`Step, ${k}`:`Pocket, ${k.split(" \xB7 ").pop()}`}function M(J){if(!s.plan)return"";let k=s.plan.warnings.filter(ht=>!J||ht.kind==="undercut"||ht.kind==="sloped"||ht.kind==="edges");return!k.length&&J?`<div class="ncc-hint">${hn.info}<span>Everything can be cut from the top in one setup.</span></div>`:k.map(ht=>`<div class="ncc-hint ${ht.kind==="notool"?"bad":""}">${ht.kind==="notool"?hn.warn:hn.info}<span>${qe(ht.text)}</span></div>`).join("")}function F(){if(!s.plan)return"";let J=[...new Set(s.plan.ops.filter(ht=>ht.kind!=="face"&&ht.kind!=="corners").map(ht=>ht.kind))],k={pocket:"Pockets",hole:"Holes",drill:"Holes",step:"Steps",cutout:"Outline"};return`<div class="ncc-overlay tr">${J.map(ht=>`<span class="ncc-chip"><span class="ncc-swatch" style="background: ${qn[ht]}"></span>${k[ht]}</span>`).join("")}</div>
      <div class="ncc-overlay bl"><span class="ncc-chip">Drag to rotate</span><span class="ncc-chip">Scroll to zoom</span><span class="ncc-chip">Click a face to put it on top</span></div>`}let X=null;function R(){if(!s.part)return;_t=null,H=null;let J=s.part.positions,k=(s.plan?.ops||[]).filter(ht=>ht.kind!=="face"&&ht.kind!=="corners").flatMap(ht=>ht.kind==="cutout"?[{loops:ht.region,z:ht.zTop+.05,color:qn.cutout,dashed:!0}]:ht.centers&&!ht.region?[{loops:ht.centers.map(mt=>Zd(mt)),z:ht.zTop+.05,color:qn[ht.kind]}]:[{loops:ht.region,z:ht.zTop+.05,color:qn[ht.kind]}]);o.keepCamera=X===J,o.showPart(s.part,k),X=J,o.onFrame=null,o.onPick=async ht=>{if(s.loading)return;let mt=s.up;try{await f(ht),s.analysis.undercut&&mt!=="custom"&&(!s.sides||s.sides[mt]?.reachable)&&(await f(mt),Me("With that face up, some of the part can\u2019t be reached from the top."))}catch(O){s.error=O.message,g()}}}function U(){let J=s.job,k=s.plan?.stock||$o(s.analysis,J),ht=Object.entries(hr).map(([O,T])=>`<button class="ncc-pick ncc-mat ${J.material===O?"sel":""}" type="button" data-material="${O}"><span class="ncc-mat-swatch" style="background: ${Rs[O]}"></span>${qe(T.name)}<small>${qe(T.note)}</small></button>`).join(""),mt=(O,T,W)=>`<div class="ncc-field"><label for="ncc-${O}">${T}</label><input id="ncc-${O}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${O}" value="${Math.round(W*100)/100}" ${J.stock.fit?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${ht}</div></div>
        <div class="ncc-card">
          ${z("fit","Size the stock to the part",`Adds ${Nn(J.stock.margin)} mm on every side and ${Nn(J.stock.extraTop)} mm on top`,J.stock.fit)}
          <div class="ncc-fields">${mt("width","Width X (mm)",k.width)}${mt("depth","Depth Y (mm)",k.depth)}${mt("thickness","Thickness Z (mm)",k.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${z("tabs","Leave tabs to hold the part",J.tabs.enabled?`${Nn(J.tabs.height)} mm tall, so the part stays put until you cut it free`:"The part comes loose at the end",J.tabs.enabled)}
          ${J.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${J.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${J.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${J.tabs.count>=12?"disabled":""}>+</button></div></div>`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${C(k)}
          <div style="font-size: 14px">X Y zero: <strong>${qe(q(J.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${J.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${J.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let z=(J,k,ht,mt)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${qe(k)}</div><div class="ncc-row-sub">${qe(ht)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${mt}" aria-label="${qe(k)}" data-toggle="${J}"></button></div>`;function q(J){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[J]}function C(J){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${Nn(J.width)} \xD7 ${Nn(J.depth)} \xD7 ${Nn(J.thickness)} mm stock \xB7 tap a point, drag to turn</div>`}let H=null;function Y(){let J=s.plan?.stock||$o(s.analysis,s.job),k=Cu.map(O=>({key:O,...Mc(J,{xy:O,z:"top"})})),ht=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",mt=`${s.part?.positions?.length}|${J.width}|${J.depth}|${J.thickness}`;o.keepCamera=H===mt,o.showZero({stock:J,part:s.part,points:k,selected:s.job.zero.xy,zFace:s.job.zero.z,color:Rs[s.job.material],accent:ht}),H=mt,X=null,_t=null,o.onPick=null,o.onMarker=O=>{O!==s.job.zero.xy&&(s.job.zero.xy=O,ye())}}function nt(){let J=s.plan;if(!J)return'<div class="ncc-busy" style="position: static; flex: 1"><span class="ncc-spin"></span>Planning\u2026</div>';let k=J.ops.map(Q=>{let At=tt(Q);return`<div class="ncc-op ${Q.enabled?"":"off"} ${s.focusOp===Q.id?"focus":""}" data-focus="${Q.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${qn[Q.kind]} 16%, transparent); color: ${qn[Q.kind]}">${hn[Q.kind]||hn.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${qe(Q.label)}</div><div class="ncc-op-sub ncc-mono">${qe(Q.detail)}</div></div>
        <select class="ncc-select" data-tool="${Q.id}" aria-label="Tool for ${qe(Q.label)}">${At.map(Ct=>`<option value="${Ct.id}" ${Ct.id===Q.tool.id?"selected":""}>T${ur(Ct,s.numbering)} \xB7 ${qe(Ct.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${Q.enabled}" aria-label="${qe(Q.label)}" data-op="${Q.id}"></button>
      </div>`}).join(""),ht=Zo(J),mt=new Map;for(let Q of J.ops)Q.enabled&&Q.kind!=="face"&&mt.set(Q.tool.id,(mt.get(Q.tool.id)||0)+1);let O=[...mt].sort((Q,At)=>At[1]-Q[1])[0]?.[0],T=J.ops.find(Q=>Q.enabled&&Q.tool.id===O)||J.ops.find(Q=>Q.enabled),W=T?.feeds,ot=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(Xn).map(([Q,At])=>`<button type="button" class="${s.job.finish===Q?"sel":""}" data-finish="${Q}">${At.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${{fast:"Bigger steps, no finishing pass.",balanced:"Leaves 0.2 mm on the walls, then a clean finishing pass.",smooth:"Lighter steps and a finishing pass, for the best walls."}[s.job.finish]}</div>
            ${W?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${qe(T.tool.name)}<br>${qe(hr[s.job.material].name)} \xB7 ${W.rpm.toLocaleString()} RPM<br>${W.feed.toLocaleString()} mm/min \xB7 ${Nn(W.stepdown,2)} mm per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${ht.map(Q=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${ur(Q,s.numbering)}</span> ${qe(Q.name)}</span><span class="ncc-slot ${Q.toolNumber?"":"hand"}">${Q.toolNumber?`Slot ${Q.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${ht.some(Q=>!Q.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops"><div class="ncc-ops">${k}</div>${M(!1)}<div class="ncc-plan-pair-in">${ot}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${ot}</div>
      </div>`}function it(){let k=(s.plan?.ops||[]).filter(ht=>ht.enabled&&ht.kind!=="face").map(ht=>{let mt=s.focusOp&&s.focusOp!==ht.id;return{loops:ht.region||(ht.centers||[]).map(T=>Zd(T)),z:ht.kind==="cutout"?ht.zTop+.05:Math.max(ht.zBottom,0)+.05,color:qn[ht.kind],dashed:ht.kind==="cutout",opacity:mt?.2:1,top:ht.zTop}});o.keepCamera=X===s.part?.positions,o.showPart(s.part,k),X=s.part?.positions,_t=null,H=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function tt(J){let k=J.kind==="drill"?["drill"]:J.kind==="face"?["surfacing","flat"]:["flat"],ht=s.tools.filter(mt=>k.includes(mt.kind)).sort((mt,O)=>O.diameter-mt.diameter);return ht.some(mt=>mt.id===J.tool.id)?ht:[J.tool,...ht]}function K(){let J=s.result,k=J?.plan,ht=k?Zo(k):[],mt=k?k.ops.filter(O=>O.enabled).reduce((O,T,W,ot)=>O+(W>0&&ot[W-1].tool.id!==T.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${dt()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${k?Math.max(1,Math.round(J.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${ht.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${k?mt:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${et()}</div>
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${qe(B())}${J?` \xB7 ${(J.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${J?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let B=()=>`${(s.fileName||"part").replace(/\.(step|stp)$/i,"")}.nc`;function et(){let J=s.simChecks;return J?J.items.map(k=>`<div class="ncc-check"><span class="ncc-ck ${k.state}">${k.state==="bad"?hn.cross:k.state==="info"?"!":hn.check}</span><span>${qe(k.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${s.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}</div>`}let V={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null};function dt(){if(!s.result)return"";let k=s.result.plan.ops.filter(O=>O.enabled&&O.track),ht=V.total||1,mt=k[Math.max(0,V.opIndexAt?.(V.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${V.playing?"Pause":"Play"}">${V.playing?hn.pause:hn.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(ht)}" aria-valuenow="${Math.round(V.t)}">
          ${k.map(O=>`<i style="width: ${(O.seconds||0)/ht*100}%; background: ${qn[O.kind]}"></i>`).join("")}
          <b style="width: ${V.t/ht*100}%"></b><em style="left: ${V.t/ht*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span>${mt?`Step ${k.indexOf(mt)+1} of ${k.length} \xB7 ${qe(mt.label)} \xB7 T${ur(mt.tool,s.numbering)}`:""}</span><span class="ncc-mono">${$d(V.t)} / ${$d(ht)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([O,T])=>`<button type="button" style="padding: 6px 8px" class="${V.speed===O?"sel":""}" data-speed="${O}">${T}</button>`).join("")}</div>`}function ct(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&s.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${s.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let _t=null;function Mt(){if(_t===s.result){Pt();return}_t=s.result,X=null,H=null,o.onMarker=null,o.onPick=null;let J=s.result.plan,k=J.ops.filter(Q=>Q.enabled&&Q.track),ht=Hi.cellFor(J.stock,520*520);V.ops=k,V.hm=Bu(new Hi(J.stock,ht)),V.colors=J.ops.map(Q=>new ve(qn[Q.kind])),V.stamps=J.ops.map(Q=>bc(Q.tool,ht));let mt=0;for(let Q of k)mt+=Q.track.length/4;V.moves=new Float32Array(mt*4),V.opOf=new Uint16Array(mt),V.cum=new Float64Array(mt);let O=0,T=0,W=null,ot=s.maxRapid||5e3;for(let Q of k){let At=J.ops.indexOf(Q);for(let Ct=0;Ct<Q.track.length;Ct+=4,O++){if(V.moves.set(Q.track.subarray(Ct,Ct+4),O*4),V.opOf[O]=At,W){let ft=Math.hypot(Q.track[Ct]-W[0],Q.track[Ct+1]-W[1],Q.track[Ct+2]-W[2]);T+=ft/(Q.track[Ct+3]>0?Q.track[Ct+3]:ot)*60}W=[Q.track[Ct],Q.track[Ct+1],Q.track[Ct+2]],V.cum[O]=T}}V.total=T,V.opIndexAt=Q=>{let At=Math.min(mt-1,Ut(V.cum,Q));return k.indexOf(J.ops[V.opOf[At]])},V.t=0,V.i=1,V.cursor=null,V.toolOp=-1,V.snaps=[],o.showStock(V.hm,Rs[J.job.material]||Rs.mdf,s.part);{let Q=V.hm,At=[Q.x0,Q.y0,Q.bottom],Ct=[Q.x0+(Q.nx-1)*Q.cell,Q.y0+(Q.ny-1)*Q.cell,Q.top];for(let ft of k){let bt=ft.tool.diameter/2;for(let Ot=0;Ot<ft.track.length;Ot+=4)ft.track[Ot+3]!==0&&(At[0]=Math.min(At[0],ft.track[Ot]-bt),Ct[0]=Math.max(Ct[0],ft.track[Ot]+bt),At[1]=Math.min(At[1],ft.track[Ot+1]-bt),Ct[1]=Math.max(Ct[1],ft.track[Ot+1]+bt))}o.frame(At,Ct)}o.showPaths(k),s.showPaths=s.showPaths??!1,Pt(),pe(0),V.speed=5,V.rate=Math.max(1,V.total/600/5),o.onFrame=Gt,xe(J),V.playing=!1,Oe()}function Pt(){o.paths&&(o.paths.visible=!!s.showPaths),o.partGhost&&(o.partGhost.visible=!!s.showPart)}function Ut(J,k){let ht=0,mt=J.length;for(;ht<mt;){let O=ht+mt>>1;J[O]<k?ht=O+1:mt=O}return ht}let ae=J=>({x:V.moves[J*4],y:V.moves[J*4+1],z:V.moves[J*4+2],r:V.moves[J*4+3]===0});function le(J){let k=V.hm,ht=V.cum.length,mt=1/0,O=-1,T=(W,ot,Q)=>{let At=s.result.plan.ops[Q].tool.diameter/2/k.cell+3,Ct=Math.floor((Math.min(W.y,ot.y)-k.y0)/k.cell-At),ft=Math.ceil((Math.max(W.y,ot.y)-k.y0)/k.cell+At);mt=Math.min(mt,Math.max(0,Ct)),O=Math.max(O,Math.min(k.ny-1,ft))};for(;V.i<ht&&V.cum[V.i]<=J;){V.opOf[V.i]!==V.opOf[V.i-1]&&!V.cursor&&Vt();let W=V.cursor||ae(V.i-1),ot=ae(V.i),Q=V.opOf[V.i];ot.r||(wc(k,s.result.plan.ops[Q].tool,W,ot,Q),T(W,ot,Q)),V.cursor=null,V.i++}if(V.i<ht&&J>V.cum[V.i-1]){let W=V.cursor||ae(V.i-1),ot=ae(V.i),Q=V.opOf[V.i],At=V.cum[V.i-1],Ct=(J-At)/(V.cum[V.i]-At||1),ft=ae(V.i-1),bt={x:ft.x+(ot.x-ft.x)*Ct,y:ft.y+(ot.y-ft.y)*Ct,z:ft.z+(ot.z-ft.z)*Ct};ot.r||(wc(k,s.result.plan.ops[Q].tool,W,bt,Q),T(W,bt,Q)),V.cursor=bt}return[mt,O]}function pe(J){let k=V.cum.length;if(!k)return;let ht=Math.min(k-1,Ut(V.cum,J)),mt=V.opOf[ht];if(mt!==V.toolOp){let T=s.result.plan.ops[mt];o.setTool(T.tool,T.zTop-T.zBottom),V.toolOp=mt}let O=V.cursor||ae(Math.max(0,V.i-1));o.moveTool(O.x,O.y,O.z)}let yt=0,Tt=0;function Gt(J){let k=yt?Math.min(.1,(J-yt)/1e3):0;if(yt=J,!V.playing||!V.cum)return;V.t=Math.min(V.total,V.t+k*V.speed*V.rate);let[ht,mt]=le(V.t);o.refreshStock(ht,mt,V.colors),pe(V.t),V.t>=V.total?(V.playing=!1,Oe()):J-Tt>200&&(Tt=J,Oe())}let re=["h","op","sx","sy","wx","wy","gap","deep"];function Vt(){V.snaps.some(J=>J.i===V.i)||V.snaps.push({i:V.i,data:re.map(J=>V.hm[J].slice())})}function ue(J){if(J=Math.max(0,Math.min(V.total,J)),J<V.t){let k=V.snaps.filter(ht=>V.cum[ht.i-1]<=J).sort((ht,mt)=>mt.i-ht.i)[0];k?(re.forEach((ht,mt)=>V.hm[ht].set(k.data[mt])),V.i=k.i):(V.hm.h.fill(V.hm.top),V.hm.op.fill(0),V.hm.sx.fill(0),V.hm.sy.fill(0),V.hm.wx.fill(0),V.hm.wy.fill(0),V.hm.gap.fill(1/0),V.hm.deep.fill(-1/0),V.i=1),V.cursor=null,le(J),o.refreshStock(0,V.hm.ny-1,V.colors)}else{let[k,ht]=le(J);o.refreshStock(k,ht,V.colors)}V.t=J,pe(J),Oe()}function Oe(){let J=n.querySelector("[data-playbar]");J&&(J.innerHTML=dt())}function xe(J){setTimeout(()=>{if(s.result?.plan!==J)return;let k=J.ops.map(W=>({...W,moves:W.track?Array.from({length:W.track.length/4},(ot,Q)=>({x:W.track[Q*4],y:W.track[Q*4+1],z:W.track[Q*4+2],r:W.track[Q*4+3]===0,f:W.track[Q*4+3]})):null})),{collisions:ht}=ku({...J,ops:k},Hi.cellFor(J.stock,300*300)),mt=[];if(mt.push(ht.length?{state:"bad",text:`${ht.length} fast move${ht.length>1?"s go":" goes"} into the material (${[...new Set(ht.map(W=>J.ops.find(ot=>ot.id===W.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),s.travel){let W=J.stock.width<=s.travel.x&&J.stock.depth<=s.travel.y;mt.push(W?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${Nn(s.travel.x)} \xD7 ${Nn(s.travel.y)} mm).`})}let O=Zo(J);mt.push(O.every(W=>W.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),J.ops.find(W=>W.kind==="cutout"&&W.enabled)&&mt.push({state:"ok",text:`The cut-out goes ${Nn(J.job.throughDepth)} mm into the spoilboard${J.job.tabs.enabled?`, with ${J.job.tabs.count} tabs`:""}`}),J.warnings.some(W=>W.kind==="undercut")&&mt.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side."}),s.simChecks={ok:!mt.some(W=>W.state==="bad"),items:mt},g()},50)}let Ee=J=>{if(!(J<1||J>4||J>s.maxStep+1)){if(J===4&&s.step!==4){V.playing=!1,s.step=4,s.maxStep=4,g(),d(!0);return}s.step=J,s.maxStep=Math.max(s.maxStep,J),J!==4&&(V.playing=!1),g()}},ye=()=>{s.maxStep=Math.min(s.maxStep,Math.max(s.step,3)),s.result=null,d(!1)};n.addEventListener("click",J=>{let k=J.target.closest("[data-focus]");if(k&&!J.target.closest("button, select")){s.focusOp=s.focusOp===k.dataset.focus?null:k.dataset.focus,g();return}let ht=J.target.closest("button, [data-scrub]");if(!ht||ht.disabled)return;let mt=ht.dataset;if(mt.go)return Ee(+mt.go);if(mt.up)return f(mt.up).catch(O=>{s.error=O.message,g()});if(mt.material)return s.job.material=mt.material,ye();if(mt.zero)return s.job.zero.xy=mt.zero,ye();if(mt.z)return s.job.zero.z=mt.z,ye();if(mt.finish)return s.job.finish=mt.finish,ye();if(mt.tabs)return s.job.tabs.count=Math.max(1,Math.min(12,s.job.tabs.count+ +mt.tabs)),ye();if(mt.toggle==="fit"){let O=s.plan?.stock;return s.job.stock.fit=!s.job.stock.fit,!s.job.stock.fit&&O&&Object.assign(s.job.stock,{width:O.width,depth:O.depth,thickness:O.thickness}),ye()}if(mt.toggle==="tabs")return s.job.tabs.enabled=!s.job.tabs.enabled,ye();if(mt.op)return s.job.disabled[mt.op]=!s.job.disabled[mt.op],ye();if(mt.speed)return V.speed=+mt.speed,Oe();if(mt.act==="play")return V.t>=V.total&&ue(0),V.playing=!V.playing,yt=0,Oe();if(mt.act==="paths"){s.showPaths=!s.showPaths,Pt(),ht.classList.toggle("on",s.showPaths);return}if(mt.act==="ghost"){s.showPart=!s.showPart,Pt(),ht.classList.toggle("on",s.showPart);return}if(mt.act==="close")return Le();if(mt.act==="load")return Ne(ht);if(mt.act==="save")return He(ht)}),n.addEventListener("pointerdown",J=>{if(!J.target.closest("[data-scrub]")||!V.cum)return;let ht=V.playing;V.playing=!1;let mt=ot=>{let Q=n.querySelector("[data-scrub]").getBoundingClientRect();Q.width>0&&ue((ot-Q.left)/Q.width*V.total)};mt(J.clientX);let O=null,T=ot=>{O===null&&requestAnimationFrame(()=>{let Q=O;O=null,mt(Q)}),O=ot.clientX},W=()=>{window.removeEventListener("pointermove",T),window.removeEventListener("pointerup",W),V.playing=ht&&V.t<V.total,yt=0,Oe()};window.addEventListener("pointermove",T),window.addEventListener("pointerup",W)}),n.addEventListener("change",J=>{let k=J.target;if(k.matches("[data-file]"))return u(k.files[0]);if(k.dataset.tool)return s.job.toolOverride[k.dataset.tool]=+k.value||k.value,ye();if(k.dataset.stock){let ht=parseFloat(String(k.value).replace(",","."));return Number.isFinite(ht)&&ht>0&&(s.job.stock[k.dataset.stock]=ht),ye()}}),n.addEventListener("dragover",J=>{let k=J.target.closest("[data-drop]");k&&(J.preventDefault(),k.classList.add("over"))}),n.addEventListener("dragleave",J=>{let k=J.target.closest("[data-drop]");k&&k.classList.remove("over")}),n.addEventListener("drop",J=>{J.target.closest("[data-drop]")&&(J.preventDefault(),u(J.dataTransfer.files[0]))});function Me(J){s.toast=J,g(),setTimeout(()=>{s.toast===J&&(s.toast="",g())},2600)}async function Ne(J){J.disabled=!0;try{let k=await i.post("/api/gcode-files/load-temp",{filename:B(),content:s.result.gcode});if(!k.ok)throw new Error(`ncSender said ${k.status}`);Le()}catch(k){J.disabled=!1,Me(`Couldn\u2019t load the program: ${k.message}`)}}async function He(J){J.disabled=!0;try{let k=await Qe(B()),ht=await i.post("/api/gcode-files/file/save",{path:k,content:s.result.gcode});if(!ht.ok)throw new Error(`save failed (${ht.status})`);Me(`Saved to File Manager: ${k}`)}catch(k){Me(`Couldn\u2019t save: ${k.message}`)}J.disabled=!1}async function Qe(J){let k=J.replace(/\.nc$/,"");for(let ht=1;ht<1e3;ht++){let mt=`ncCAM/${ht<2?J:`${k} (${ht}).nc`}`,O=await fetch(`${t.base}/api/gcode-files/file?path=${encodeURIComponent(mt)}`);if(O.status===404)return mt;if(!O.ok)throw new Error(`could not check File Manager (${O.status})`)}throw new Error("too many saved copies")}function Le(){V.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}g(),window.__nccam={S:s,PLAY:V,viewer:o,seek:J=>ue(J)}}function Zd(n,t=48){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}var lM,cM,qe,Nn,$d,dn,hn,hM,jd=Cn(()=>{ec();Ec();Gd();qd();lM=["Model","Stock & Zero","Operations","Preview & Load"],cM=[["top","Top"],["bottom","Bottom"],["front","Front"],["back","Back"],["left","Left"],["right","Right"]],qe=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Nn=(n,t=1)=>`${(Math.round(n*10**t)/10**t).toLocaleString()}`,$d=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},dn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,hn={close:dn('<path d="M6 6l12 12M18 6L6 18"/>'),next:dn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:dn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:dn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:dn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:dn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:dn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:dn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:dn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:dn('<path d="M3 9h18M3 15h18"/>'),pocket:dn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:dn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:dn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:dn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:dn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:dn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>')},hM={top:'<path d="M12 3l9 5-9 5-9-5z" fill="currentColor" fill-opacity=".35"/><path d="M3 8v8l9 5 9-5V8"/>',bottom:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M3 16l9-5 9 5" stroke-dasharray="2 2"/>',front:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".35"/><path d="M21 8v8l-9 5"/>',back:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 3v8" stroke-dasharray="2 2"/>',left:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".2"/><path d="M21 8v8l-9 5"/>',right:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5"/><path d="M21 8v8l-9 5V13z" fill="currentColor" fill-opacity=".35"/>'}});var Hu=pu(_u(),1);Ec();var ig={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.02,angularDeflection:.1};function Tc(){let n=null,t=null,e=null,i=null,s={async init({wasmBinary:o}){return i=o,!0},async load({bytes:o}){n||=await(0,Hu.default)({wasmBinary:i});let c=n.ReadStepFile(new Uint8Array(o),ig);if(!c.success||!c.meshes?.length)throw new Error("This file has no solid ncCAM can read. Export it again as STEP (AP214 or AP242).");return t=Su(c),{solids:t.solids,size:Hs(t).size,...bu(t)}},async orient({up:o}){e=qo(t,o);let c=zr(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:c}},async tilt({normal:o}){e=qo(e,o);let c=zr(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:c}},async plan({tools:o,job:c,limits:u,paths:f,gcodeOptions:d,timing:_}){let y=Pu(e,o,c,u);f&&Nu(y);let g=f?Fu(y,_):0,b=f?Ou(y,d):"";for(let E of y.ops){if(!E.moves)continue;let P=new Float32Array(E.moves.length*4);E.moves.forEach((S,M)=>{P[M*4]=S.x,P[M*4+1]=S.y,P[M*4+2]=S.z,P[M*4+3]=S.r?0:S.f}),E.track=P,delete E.moves}return{plan:y,gcode:b,seconds:g}}};return async function(c){let u=s[c.type];if(!u)throw new Error(`unknown request ${c.type}`);return u(c)}}var fM="0.1.1-mvu75z7m";if(typeof document>"u"){let n=Tc();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e&&e.positions?[e.positions.buffer,e.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCam=window.NcCam||{};n.build=fM,n.mount=async(i,s)=>{let{mountApp:o}=await Promise.resolve().then(()=>(jd(),Jd));try{o(i,s,await t(s))}catch(c){i.textContent=`ncCAM could not start: ${c.message||c}`}};let t=i=>n.engine||=e(i);async function e(i){let s=await fetch(i.file("lib/occt-import-js.wasm")).then(u=>{if(!u.ok)throw new Error(`lib/occt-import-js.wasm: ${u.status}`);return u.arrayBuffer()}),o=null;try{o=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{o=null}if(o){let u=0,f=new Map;o.onmessage=({data:y})=>{let g=f.get(y.id);g&&(f.delete(y.id),y.ok?g.resolve(y.result):g.reject(new Error(y.error)))};let d=(y,g={},b=[])=>new Promise((E,P)=>{let S=++u;f.set(S,{resolve:E,reject:P}),o.postMessage({...g,id:S,type:y},b)});if(await Promise.race([d("init",{wasmBinary:s}).then(()=>!0),new Promise(y=>setTimeout(()=>y(!1),5e3))]))return d;o.terminate()}let c=Tc();return await c({type:"init",wasmBinary:s}),(u,f={})=>c({...f,type:u})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
