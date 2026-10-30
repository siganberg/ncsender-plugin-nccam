(()=>{var Sm=Object.create;var fc=Object.defineProperty;var bm=Object.getOwnPropertyDescriptor;var wm=Object.getOwnPropertyNames;var Em=Object.getPrototypeOf,Tm=Object.prototype.hasOwnProperty;var dc=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var Pn=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var mu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Am=(n,t)=>{for(var e in t)fc(n,e,{get:t[e],enumerable:!0})},Cm=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of wm(t))!Tm.call(n,r)&&r!==e&&fc(n,r,{get:()=>t[r],enumerable:!(i=bm(t,r))||i.enumerable});return n};var gu=(n,t,e)=>(e=n!=null?Sm(Em(n)):{},Cm(t||!n||!n.__esModule?fc(e,"default",{value:n,enumerable:!0}):e,n));var yu=mu((vu,pc)=>{var _u=(()=>{var n=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(t={}){var e,i=t,r,o,c=new Promise((h,m)=>{r=h,o=m}),u=typeof window=="object",f=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",g=Object.assign({},i),y=[],_="./this.program",b=(h,m)=>{throw m},E="";function P(h){return i.locateFile?i.locateFile(h,E):E+h}var S,M;if(d){var O=dc("fs"),G=dc("path");E=__dirname+"/",M=h=>{h=He(h)?new URL(h):G.normalize(h);var m=O.readFileSync(h);return m},S=(h,m=!0)=>(h=He(h)?new URL(h):G.normalize(h),new Promise((x,w)=>{O.readFile(h,m?void 0:"utf8",(L,H)=>{L?w(L):x(m?H.buffer:H)})})),!i.thisProgram&&process.argv.length>1&&(_=process.argv[1].replace(/\\/g,"/")),y=process.argv.slice(2),b=(h,m)=>{throw process.exitCode=h,m}}else(u||f)&&(f?E=self.location.href:typeof document<"u"&&document.currentScript&&(E=document.currentScript.src),n&&(E=n),E.startsWith("blob:")?E="":E=E.substr(0,E.replace(/[?#].*/,"").lastIndexOf("/")+1),f&&(M=h=>{var m=new XMLHttpRequest;return m.open("GET",h,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),S=h=>He(h)?new Promise((m,x)=>{var w=new XMLHttpRequest;w.open("GET",h,!0),w.responseType="arraybuffer",w.onload=()=>{if(w.status==200||w.status==0&&w.response){m(w.response);return}x(w.status)},w.onerror=x,w.send(null)}):fetch(h,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(new Error(m.status+" : "+m.url))));var R=i.print||console.log.bind(console),F=i.printErr||console.error.bind(console);Object.assign(i,g),g=null,i.arguments&&(y=i.arguments),i.thisProgram&&(_=i.thisProgram);var B=i.wasmBinary,Y,C=!1,V;function W(h,m){h||be(m)}var et,nt,Q,K,U,tt,ct,mt;function ht(){var h=Y.buffer;i.HEAP8=et=new Int8Array(h),i.HEAP16=Q=new Int16Array(h),i.HEAPU8=nt=new Uint8Array(h),i.HEAPU16=K=new Uint16Array(h),i.HEAP32=U=new Int32Array(h),i.HEAPU32=tt=new Uint32Array(h),i.HEAPF32=ct=new Float32Array(h),i.HEAPF64=mt=new Float64Array(h)}var yt=[],bt=[],Lt=[],zt=!1;function le(){var h=i.preRun;h&&(typeof h=="function"&&(h=[h]),h.forEach(wt)),z(yt)}function ae(){zt=!0,!i.noFSInit&&!I.initialized&&I.init(),I.ignorePermissions=!1,Et.init(),z(bt)}function dt(){var h=i.postRun;h&&(typeof h=="function"&&(h=[h]),h.forEach(Vt)),z(Lt)}function wt(h){yt.unshift(h)}function Pt(h){bt.unshift(h)}function Vt(h){Lt.unshift(h)}var re=0,Ht=null,fe=null;function Ue(h){return h}function de(h){re++,i.monitorRunDependencies?.(re)}function ye(h){if(re--,i.monitorRunDependencies?.(re),re==0&&(Ht!==null&&(clearInterval(Ht),Ht=null),fe)){var m=fe;fe=null,m()}}function be(h){i.onAbort?.(h),h="Aborted("+h+")",F(h),C=!0,h+=". Build with -sASSERTIONS for more info.",zt&&fu();var m=new WebAssembly.RuntimeError(h);throw o(m),m}var xe="data:application/octet-stream;base64,",Le=h=>h.startsWith(xe),He=h=>h.startsWith("file://");function Qe(){var h="occt-import-js.wasm";return Le(h)?h:P(h)}var Ie;function Re(h){if(h==Ie&&B)return new Uint8Array(B);if(M)return M(h);throw"both async and sync fetching of the wasm failed"}function lt(h){return B?Promise.resolve().then(()=>Re(h)):S(h).then(m=>new Uint8Array(m),()=>Re(h))}function Je(h,m,x){return lt(h).then(w=>WebAssembly.instantiate(w,m)).then(x,w=>{F(`failed to asynchronously prepare wasm: ${w}`),be(w)})}function _e(h,m,x,w){return!h&&typeof WebAssembly.instantiateStreaming=="function"&&!Le(m)&&!He(m)&&!d&&typeof fetch=="function"?fetch(m,{credentials:"same-origin"}).then(L=>{var H=WebAssembly.instantiateStreaming(L,x);return H.then(w,function(Z){return F(`wasm streaming compile failed: ${Z}`),F("falling back to ArrayBuffer instantiation"),Je(m,x,w)})}):Je(m,x,w)}function X(){return{a:pm}}function A(){var h=X();function m(w,L){return an=w.exports,Y=an._,ht(),ko=an.ba,Pt(an.$),ye("wasm-instantiate"),an}de("wasm-instantiate");function x(w){m(w.instance)}if(i.instantiateWasm)try{return i.instantiateWasm(h,m)}catch(w){F(`Module.instantiateWasm callback failed with error: ${w}`),o(w)}return Ie??=Qe(),_e(B,Ie,h,x).catch(o),{}}var rt,pt;function Tt(h){this.name="ExitStatus",this.message=`Program terminated with exit(${h})`,this.status=h}var z=h=>{h.forEach(m=>m(i))},J=i.noExitRuntime||!0,k={isAbs:h=>h.charAt(0)==="/",splitPath:h=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return m.exec(h).slice(1)},normalizeArray:(h,m)=>{for(var x=0,w=h.length-1;w>=0;w--){var L=h[w];L==="."?h.splice(w,1):L===".."?(h.splice(w,1),x++):x&&(h.splice(w,1),x--)}if(m)for(;x;x--)h.unshift("..");return h},normalize:h=>{var m=k.isAbs(h),x=h.substr(-1)==="/";return h=k.normalizeArray(h.split("/").filter(w=>!!w),!m).join("/"),!h&&!m&&(h="."),h&&x&&(h+="/"),(m?"/":"")+h},dirname:h=>{var m=k.splitPath(h),x=m[0],w=m[1];return!x&&!w?".":(w&&(w=w.substr(0,w.length-1)),x+w)},basename:h=>{if(h==="/")return"/";h=k.normalize(h),h=h.replace(/\/$/,"");var m=h.lastIndexOf("/");return m===-1?h:h.substr(m+1)},join:(...h)=>k.normalize(h.join("/")),join2:(h,m)=>k.normalize(h+"/"+m)},q=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return w=>crypto.getRandomValues(w);if(d)try{var h=dc("crypto"),m=h.randomFillSync;if(m)return w=>h.randomFillSync(w);var x=h.randomBytes;return w=>(w.set(x(w.byteLength)),w)}catch{}be("initRandomDevice")},ft=h=>(ft=q())(h),Dt={resolve:(...h)=>{for(var m="",x=!1,w=h.length-1;w>=-1&&!x;w--){var L=w>=0?h[w]:I.cwd();if(typeof L!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!L)return"";m=L+"/"+m,x=k.isAbs(L)}return m=k.normalizeArray(m.split("/").filter(H=>!!H),!x).join("/"),(x?"/":"")+m||"."},relative:(h,m)=>{h=Dt.resolve(h).substr(1),m=Dt.resolve(m).substr(1);function x(Ft){for(var Zt=0;Zt<Ft.length&&Ft[Zt]==="";Zt++);for(var Qt=Ft.length-1;Qt>=0&&Ft[Qt]==="";Qt--);return Zt>Qt?[]:Ft.slice(Zt,Qt-Zt+1)}for(var w=x(h.split("/")),L=x(m.split("/")),H=Math.min(w.length,L.length),Z=H,ot=0;ot<H;ot++)if(w[ot]!==L[ot]){Z=ot;break}for(var St=[],ot=Z;ot<w.length;ot++)St.push("..");return St=St.concat(L.slice(Z)),St.join("/")}},Mt=typeof TextDecoder<"u"?new TextDecoder:void 0,It=(h,m=0,x=NaN)=>{for(var w=m+x,L=m;h[L]&&!(L>=w);)++L;if(L-m>16&&h.buffer&&Mt)return Mt.decode(h.subarray(m,L));for(var H="";m<L;){var Z=h[m++];if(!(Z&128)){H+=String.fromCharCode(Z);continue}var ot=h[m++]&63;if((Z&224)==192){H+=String.fromCharCode((Z&31)<<6|ot);continue}var St=h[m++]&63;if((Z&240)==224?Z=(Z&15)<<12|ot<<6|St:Z=(Z&7)<<18|ot<<12|St<<6|h[m++]&63,Z<65536)H+=String.fromCharCode(Z);else{var Ft=Z-65536;H+=String.fromCharCode(55296|Ft>>10,56320|Ft&1023)}}return H},vt=[],Bt=h=>{for(var m=0,x=0;x<h.length;++x){var w=h.charCodeAt(x);w<=127?m++:w<=2047?m+=2:w>=55296&&w<=57343?(m+=4,++x):m+=3}return m},Gt=(h,m,x,w)=>{if(!(w>0))return 0;for(var L=x,H=x+w-1,Z=0;Z<h.length;++Z){var ot=h.charCodeAt(Z);if(ot>=55296&&ot<=57343){var St=h.charCodeAt(++Z);ot=65536+((ot&1023)<<10)|St&1023}if(ot<=127){if(x>=H)break;m[x++]=ot}else if(ot<=2047){if(x+1>=H)break;m[x++]=192|ot>>6,m[x++]=128|ot&63}else if(ot<=65535){if(x+2>=H)break;m[x++]=224|ot>>12,m[x++]=128|ot>>6&63,m[x++]=128|ot&63}else{if(x+3>=H)break;m[x++]=240|ot>>18,m[x++]=128|ot>>12&63,m[x++]=128|ot>>6&63,m[x++]=128|ot&63}}return m[x]=0,x-L};function it(h,m,x){var w=x>0?x:Bt(h)+1,L=new Array(w),H=Gt(h,L,0,L.length);return m&&(L.length=H),L}var kt=()=>{if(!vt.length){var h=null;if(d){var m=256,x=Buffer.alloc(m),w=0,L=process.stdin.fd;try{w=O.readSync(L,x,0,m)}catch(H){if(H.toString().includes("EOF"))w=0;else throw H}w>0&&(h=x.slice(0,w).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(h=window.prompt("Input: "),h!==null&&(h+=`
`));if(!h)return null;vt=it(h,!0)}return vt.shift()},Et={ttys:[],init(){},shutdown(){},register(h,m){Et.ttys[h]={input:[],output:[],ops:m},I.registerDevice(h,Et.stream_ops)},stream_ops:{open(h){var m=Et.ttys[h.node.rdev];if(!m)throw new I.ErrnoError(43);h.tty=m,h.seekable=!1},close(h){h.tty.ops.fsync(h.tty)},fsync(h){h.tty.ops.fsync(h.tty)},read(h,m,x,w,L){if(!h.tty||!h.tty.ops.get_char)throw new I.ErrnoError(60);for(var H=0,Z=0;Z<w;Z++){var ot;try{ot=h.tty.ops.get_char(h.tty)}catch{throw new I.ErrnoError(29)}if(ot===void 0&&H===0)throw new I.ErrnoError(6);if(ot==null)break;H++,m[x+Z]=ot}return H&&(h.node.timestamp=Date.now()),H},write(h,m,x,w,L){if(!h.tty||!h.tty.ops.put_char)throw new I.ErrnoError(60);try{for(var H=0;H<w;H++)h.tty.ops.put_char(h.tty,m[x+H])}catch{throw new I.ErrnoError(29)}return w&&(h.node.timestamp=Date.now()),H}},default_tty_ops:{get_char(h){return kt()},put_char(h,m){m===null||m===10?(R(It(h.output)),h.output=[]):m!=0&&h.output.push(m)},fsync(h){h.output&&h.output.length>0&&(R(It(h.output)),h.output=[])},ioctl_tcgets(h){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(h,m,x){return 0},ioctl_tiocgwinsz(h){return[24,80]}},default_tty1_ops:{put_char(h,m){m===null||m===10?(F(It(h.output)),h.output=[]):m!=0&&h.output.push(m)},fsync(h){h.output&&h.output.length>0&&(F(It(h.output)),h.output=[])}}},Xt=(h,m)=>{nt.fill(0,h,h+m)},$t=(h,m)=>Math.ceil(h/m)*m,Rt=h=>{h=$t(h,65536);var m=uu(65536,h);return m&&Xt(m,h),m},Ot={ops_table:null,mount(h){return Ot.createNode(null,"/",16895,0)},createNode(h,m,x,w){if(I.isBlkdev(x)||I.isFIFO(x))throw new I.ErrnoError(63);Ot.ops_table||={dir:{node:{getattr:Ot.node_ops.getattr,setattr:Ot.node_ops.setattr,lookup:Ot.node_ops.lookup,mknod:Ot.node_ops.mknod,rename:Ot.node_ops.rename,unlink:Ot.node_ops.unlink,rmdir:Ot.node_ops.rmdir,readdir:Ot.node_ops.readdir,symlink:Ot.node_ops.symlink},stream:{llseek:Ot.stream_ops.llseek}},file:{node:{getattr:Ot.node_ops.getattr,setattr:Ot.node_ops.setattr},stream:{llseek:Ot.stream_ops.llseek,read:Ot.stream_ops.read,write:Ot.stream_ops.write,allocate:Ot.stream_ops.allocate,mmap:Ot.stream_ops.mmap,msync:Ot.stream_ops.msync}},link:{node:{getattr:Ot.node_ops.getattr,setattr:Ot.node_ops.setattr,readlink:Ot.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Ot.node_ops.getattr,setattr:Ot.node_ops.setattr},stream:I.chrdev_stream_ops}};var L=I.createNode(h,m,x,w);return I.isDir(L.mode)?(L.node_ops=Ot.ops_table.dir.node,L.stream_ops=Ot.ops_table.dir.stream,L.contents={}):I.isFile(L.mode)?(L.node_ops=Ot.ops_table.file.node,L.stream_ops=Ot.ops_table.file.stream,L.usedBytes=0,L.contents=null):I.isLink(L.mode)?(L.node_ops=Ot.ops_table.link.node,L.stream_ops=Ot.ops_table.link.stream):I.isChrdev(L.mode)&&(L.node_ops=Ot.ops_table.chrdev.node,L.stream_ops=Ot.ops_table.chrdev.stream),L.timestamp=Date.now(),h&&(h.contents[m]=L,h.timestamp=L.timestamp),L},getFileDataAsTypedArray(h){return h.contents?h.contents.subarray?h.contents.subarray(0,h.usedBytes):new Uint8Array(h.contents):new Uint8Array(0)},expandFileStorage(h,m){var x=h.contents?h.contents.length:0;if(!(x>=m)){var w=1024*1024;m=Math.max(m,x*(x<w?2:1.125)>>>0),x!=0&&(m=Math.max(m,256));var L=h.contents;h.contents=new Uint8Array(m),h.usedBytes>0&&h.contents.set(L.subarray(0,h.usedBytes),0)}},resizeFileStorage(h,m){if(h.usedBytes!=m)if(m==0)h.contents=null,h.usedBytes=0;else{var x=h.contents;h.contents=new Uint8Array(m),x&&h.contents.set(x.subarray(0,Math.min(m,h.usedBytes))),h.usedBytes=m}},node_ops:{getattr(h){var m={};return m.dev=I.isChrdev(h.mode)?h.id:1,m.ino=h.id,m.mode=h.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=h.rdev,I.isDir(h.mode)?m.size=4096:I.isFile(h.mode)?m.size=h.usedBytes:I.isLink(h.mode)?m.size=h.link.length:m.size=0,m.atime=new Date(h.timestamp),m.mtime=new Date(h.timestamp),m.ctime=new Date(h.timestamp),m.blksize=4096,m.blocks=Math.ceil(m.size/m.blksize),m},setattr(h,m){m.mode!==void 0&&(h.mode=m.mode),m.timestamp!==void 0&&(h.timestamp=m.timestamp),m.size!==void 0&&Ot.resizeFileStorage(h,m.size)},lookup(h,m){throw I.genericErrors[44]},mknod(h,m,x,w){return Ot.createNode(h,m,x,w)},rename(h,m,x){if(I.isDir(h.mode)){var w;try{w=I.lookupNode(m,x)}catch{}if(w)for(var L in w.contents)throw new I.ErrnoError(55)}delete h.parent.contents[h.name],h.parent.timestamp=Date.now(),h.name=x,m.contents[x]=h,m.timestamp=h.parent.timestamp},unlink(h,m){delete h.contents[m],h.timestamp=Date.now()},rmdir(h,m){var x=I.lookupNode(h,m);for(var w in x.contents)throw new I.ErrnoError(55);delete h.contents[m],h.timestamp=Date.now()},readdir(h){var m=[".",".."];for(var x of Object.keys(h.contents))m.push(x);return m},symlink(h,m,x){var w=Ot.createNode(h,m,41471,0);return w.link=x,w},readlink(h){if(!I.isLink(h.mode))throw new I.ErrnoError(28);return h.link}},stream_ops:{read(h,m,x,w,L){var H=h.node.contents;if(L>=h.node.usedBytes)return 0;var Z=Math.min(h.node.usedBytes-L,w);if(Z>8&&H.subarray)m.set(H.subarray(L,L+Z),x);else for(var ot=0;ot<Z;ot++)m[x+ot]=H[L+ot];return Z},write(h,m,x,w,L,H){if(m.buffer===et.buffer&&(H=!1),!w)return 0;var Z=h.node;if(Z.timestamp=Date.now(),m.subarray&&(!Z.contents||Z.contents.subarray)){if(H)return Z.contents=m.subarray(x,x+w),Z.usedBytes=w,w;if(Z.usedBytes===0&&L===0)return Z.contents=m.slice(x,x+w),Z.usedBytes=w,w;if(L+w<=Z.usedBytes)return Z.contents.set(m.subarray(x,x+w),L),w}if(Ot.expandFileStorage(Z,L+w),Z.contents.subarray&&m.subarray)Z.contents.set(m.subarray(x,x+w),L);else for(var ot=0;ot<w;ot++)Z.contents[L+ot]=m[x+ot];return Z.usedBytes=Math.max(Z.usedBytes,L+w),w},llseek(h,m,x){var w=m;if(x===1?w+=h.position:x===2&&I.isFile(h.node.mode)&&(w+=h.node.usedBytes),w<0)throw new I.ErrnoError(28);return w},allocate(h,m,x){Ot.expandFileStorage(h.node,m+x),h.node.usedBytes=Math.max(h.node.usedBytes,m+x)},mmap(h,m,x,w,L){if(!I.isFile(h.node.mode))throw new I.ErrnoError(43);var H,Z,ot=h.node.contents;if(!(L&2)&&ot&&ot.buffer===et.buffer)Z=!1,H=ot.byteOffset;else{if(Z=!0,H=Rt(m),!H)throw new I.ErrnoError(48);ot&&((x>0||x+m<ot.length)&&(ot.subarray?ot=ot.subarray(x,x+m):ot=Array.prototype.slice.call(ot,x,x+m)),et.set(ot,H))}return{ptr:H,allocated:Z}},msync(h,m,x,w,L){return Ot.stream_ops.write(h,m,0,w,x,!1),0}}},te=(h,m,x,w)=>{var L=w?"":`al ${h}`;S(h).then(H=>{m(new Uint8Array(H)),L&&ye(L)},H=>{if(x)x();else throw`Loading data file "${h}" failed.`}),L&&de(L)},De=(h,m,x,w,L,H)=>{I.createDataFile(h,m,x,w,L,H)},Ce=i.preloadPlugins||[],Sn=(h,m,x,w)=>{typeof Browser<"u"&&Browser.init();var L=!1;return Ce.forEach(H=>{L||H.canHandle(m)&&(H.handle(h,m,x,w),L=!0)}),L},An=(h,m,x,w,L,H,Z,ot,St,Ft)=>{var Zt=m?Dt.resolve(k.join2(h,m)):h,Qt=`cp ${Zt}`;function oe(ie){function me(Ne){Ft?.(),ot||De(h,m,Ne,w,L,St),H?.(),ye(Qt)}Sn(ie,Zt,me,()=>{Z?.(),ye(Qt)})||me(ie)}de(Qt),typeof x=="string"?te(x,oe,Z):oe(x)},Ns=h=>{var m={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},x=m[h];if(typeof x>"u")throw new Error(`Unknown file open mode: ${h}`);return x},hr=(h,m)=>{var x=0;return h&&(x|=365),m&&(x|=146),x},I={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(h){this.name="ErrnoError",this.errno=h}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(h){this.node=h}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(h){this.shared.flags=h}get position(){return this.shared.position}set position(h){this.shared.position=h}},FSNode:class{constructor(h,m,x,w){h||(h=this),this.parent=h,this.mount=h.mount,this.mounted=null,this.id=I.nextInode++,this.name=m,this.mode=x,this.node_ops={},this.stream_ops={},this.rdev=w,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(h){h?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(h){h?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return I.isDir(this.mode)}get isDevice(){return I.isChrdev(this.mode)}},lookupPath(h,m={}){if(h=Dt.resolve(h),!h)return{path:"",node:null};var x={follow_mount:!0,recurse_count:0};if(m=Object.assign(x,m),m.recurse_count>8)throw new I.ErrnoError(32);for(var w=h.split("/").filter(Qt=>!!Qt),L=I.root,H="/",Z=0;Z<w.length;Z++){var ot=Z===w.length-1;if(ot&&m.parent)break;if(L=I.lookupNode(L,w[Z]),H=k.join2(H,w[Z]),I.isMountpoint(L)&&(!ot||ot&&m.follow_mount)&&(L=L.mounted.root),!ot||m.follow)for(var St=0;I.isLink(L.mode);){var Ft=I.readlink(H);H=Dt.resolve(k.dirname(H),Ft);var Zt=I.lookupPath(H,{recurse_count:m.recurse_count+1});if(L=Zt.node,St++>40)throw new I.ErrnoError(32)}}return{path:H,node:L}},getPath(h){for(var m;;){if(I.isRoot(h)){var x=h.mount.mountpoint;return m?x[x.length-1]!=="/"?`${x}/${m}`:x+m:x}m=m?`${h.name}/${m}`:h.name,h=h.parent}},hashName(h,m){for(var x=0,w=0;w<m.length;w++)x=(x<<5)-x+m.charCodeAt(w)|0;return(h+x>>>0)%I.nameTable.length},hashAddNode(h){var m=I.hashName(h.parent.id,h.name);h.name_next=I.nameTable[m],I.nameTable[m]=h},hashRemoveNode(h){var m=I.hashName(h.parent.id,h.name);if(I.nameTable[m]===h)I.nameTable[m]=h.name_next;else for(var x=I.nameTable[m];x;){if(x.name_next===h){x.name_next=h.name_next;break}x=x.name_next}},lookupNode(h,m){var x=I.mayLookup(h);if(x)throw new I.ErrnoError(x);for(var w=I.hashName(h.id,m),L=I.nameTable[w];L;L=L.name_next){var H=L.name;if(L.parent.id===h.id&&H===m)return L}return I.lookup(h,m)},createNode(h,m,x,w){var L=new I.FSNode(h,m,x,w);return I.hashAddNode(L),L},destroyNode(h){I.hashRemoveNode(h)},isRoot(h){return h===h.parent},isMountpoint(h){return!!h.mounted},isFile(h){return(h&61440)===32768},isDir(h){return(h&61440)===16384},isLink(h){return(h&61440)===40960},isChrdev(h){return(h&61440)===8192},isBlkdev(h){return(h&61440)===24576},isFIFO(h){return(h&61440)===4096},isSocket(h){return(h&49152)===49152},flagsToPermissionString(h){var m=["r","w","rw"][h&3];return h&512&&(m+="w"),m},nodePermissions(h,m){return I.ignorePermissions?0:m.includes("r")&&!(h.mode&292)||m.includes("w")&&!(h.mode&146)||m.includes("x")&&!(h.mode&73)?2:0},mayLookup(h){if(!I.isDir(h.mode))return 54;var m=I.nodePermissions(h,"x");return m||(h.node_ops.lookup?0:2)},mayCreate(h,m){try{var x=I.lookupNode(h,m);return 20}catch{}return I.nodePermissions(h,"wx")},mayDelete(h,m,x){var w;try{w=I.lookupNode(h,m)}catch(H){return H.errno}var L=I.nodePermissions(h,"wx");if(L)return L;if(x){if(!I.isDir(w.mode))return 54;if(I.isRoot(w)||I.getPath(w)===I.cwd())return 10}else if(I.isDir(w.mode))return 31;return 0},mayOpen(h,m){return h?I.isLink(h.mode)?32:I.isDir(h.mode)&&(I.flagsToPermissionString(m)!=="r"||m&512)?31:I.nodePermissions(h,I.flagsToPermissionString(m)):44},MAX_OPEN_FDS:4096,nextfd(){for(var h=0;h<=I.MAX_OPEN_FDS;h++)if(!I.streams[h])return h;throw new I.ErrnoError(33)},getStreamChecked(h){var m=I.getStream(h);if(!m)throw new I.ErrnoError(8);return m},getStream:h=>I.streams[h],createStream(h,m=-1){return h=Object.assign(new I.FSStream,h),m==-1&&(m=I.nextfd()),h.fd=m,I.streams[m]=h,h},closeStream(h){I.streams[h]=null},dupStream(h,m=-1){var x=I.createStream(h,m);return x.stream_ops?.dup?.(x),x},chrdev_stream_ops:{open(h){var m=I.getDevice(h.node.rdev);h.stream_ops=m.stream_ops,h.stream_ops.open?.(h)},llseek(){throw new I.ErrnoError(70)}},major:h=>h>>8,minor:h=>h&255,makedev:(h,m)=>h<<8|m,registerDevice(h,m){I.devices[h]={stream_ops:m}},getDevice:h=>I.devices[h],getMounts(h){for(var m=[],x=[h];x.length;){var w=x.pop();m.push(w),x.push(...w.mounts)}return m},syncfs(h,m){typeof h=="function"&&(m=h,h=!1),I.syncFSRequests++,I.syncFSRequests>1&&F(`warning: ${I.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var x=I.getMounts(I.root.mount),w=0;function L(Z){return I.syncFSRequests--,m(Z)}function H(Z){if(Z)return H.errored?void 0:(H.errored=!0,L(Z));++w>=x.length&&L(null)}x.forEach(Z=>{if(!Z.type.syncfs)return H(null);Z.type.syncfs(Z,h,H)})},mount(h,m,x){var w=x==="/",L=!x,H;if(w&&I.root)throw new I.ErrnoError(10);if(!w&&!L){var Z=I.lookupPath(x,{follow_mount:!1});if(x=Z.path,H=Z.node,I.isMountpoint(H))throw new I.ErrnoError(10);if(!I.isDir(H.mode))throw new I.ErrnoError(54)}var ot={type:h,opts:m,mountpoint:x,mounts:[]},St=h.mount(ot);return St.mount=ot,ot.root=St,w?I.root=St:H&&(H.mounted=ot,H.mount&&H.mount.mounts.push(ot)),St},unmount(h){var m=I.lookupPath(h,{follow_mount:!1});if(!I.isMountpoint(m.node))throw new I.ErrnoError(28);var x=m.node,w=x.mounted,L=I.getMounts(w);Object.keys(I.nameTable).forEach(Z=>{for(var ot=I.nameTable[Z];ot;){var St=ot.name_next;L.includes(ot.mount)&&I.destroyNode(ot),ot=St}}),x.mounted=null;var H=x.mount.mounts.indexOf(w);x.mount.mounts.splice(H,1)},lookup(h,m){return h.node_ops.lookup(h,m)},mknod(h,m,x){var w=I.lookupPath(h,{parent:!0}),L=w.node,H=k.basename(h);if(!H||H==="."||H==="..")throw new I.ErrnoError(28);var Z=I.mayCreate(L,H);if(Z)throw new I.ErrnoError(Z);if(!L.node_ops.mknod)throw new I.ErrnoError(63);return L.node_ops.mknod(L,H,m,x)},create(h,m){return m=m!==void 0?m:438,m&=4095,m|=32768,I.mknod(h,m,0)},mkdir(h,m){return m=m!==void 0?m:511,m&=1023,m|=16384,I.mknod(h,m,0)},mkdirTree(h,m){for(var x=h.split("/"),w="",L=0;L<x.length;++L)if(x[L]){w+="/"+x[L];try{I.mkdir(w,m)}catch(H){if(H.errno!=20)throw H}}},mkdev(h,m,x){return typeof x>"u"&&(x=m,m=438),m|=8192,I.mknod(h,m,x)},symlink(h,m){if(!Dt.resolve(h))throw new I.ErrnoError(44);var x=I.lookupPath(m,{parent:!0}),w=x.node;if(!w)throw new I.ErrnoError(44);var L=k.basename(m),H=I.mayCreate(w,L);if(H)throw new I.ErrnoError(H);if(!w.node_ops.symlink)throw new I.ErrnoError(63);return w.node_ops.symlink(w,L,h)},rename(h,m){var x=k.dirname(h),w=k.dirname(m),L=k.basename(h),H=k.basename(m),Z,ot,St;if(Z=I.lookupPath(h,{parent:!0}),ot=Z.node,Z=I.lookupPath(m,{parent:!0}),St=Z.node,!ot||!St)throw new I.ErrnoError(44);if(ot.mount!==St.mount)throw new I.ErrnoError(75);var Ft=I.lookupNode(ot,L),Zt=Dt.relative(h,w);if(Zt.charAt(0)!==".")throw new I.ErrnoError(28);if(Zt=Dt.relative(m,x),Zt.charAt(0)!==".")throw new I.ErrnoError(55);var Qt;try{Qt=I.lookupNode(St,H)}catch{}if(Ft!==Qt){var oe=I.isDir(Ft.mode),ie=I.mayDelete(ot,L,oe);if(ie)throw new I.ErrnoError(ie);if(ie=Qt?I.mayDelete(St,H,oe):I.mayCreate(St,H),ie)throw new I.ErrnoError(ie);if(!ot.node_ops.rename)throw new I.ErrnoError(63);if(I.isMountpoint(Ft)||Qt&&I.isMountpoint(Qt))throw new I.ErrnoError(10);if(St!==ot&&(ie=I.nodePermissions(ot,"w"),ie))throw new I.ErrnoError(ie);I.hashRemoveNode(Ft);try{ot.node_ops.rename(Ft,St,H),Ft.parent=St}catch(me){throw me}finally{I.hashAddNode(Ft)}}},rmdir(h){var m=I.lookupPath(h,{parent:!0}),x=m.node,w=k.basename(h),L=I.lookupNode(x,w),H=I.mayDelete(x,w,!0);if(H)throw new I.ErrnoError(H);if(!x.node_ops.rmdir)throw new I.ErrnoError(63);if(I.isMountpoint(L))throw new I.ErrnoError(10);x.node_ops.rmdir(x,w),I.destroyNode(L)},readdir(h){var m=I.lookupPath(h,{follow:!0}),x=m.node;if(!x.node_ops.readdir)throw new I.ErrnoError(54);return x.node_ops.readdir(x)},unlink(h){var m=I.lookupPath(h,{parent:!0}),x=m.node;if(!x)throw new I.ErrnoError(44);var w=k.basename(h),L=I.lookupNode(x,w),H=I.mayDelete(x,w,!1);if(H)throw new I.ErrnoError(H);if(!x.node_ops.unlink)throw new I.ErrnoError(63);if(I.isMountpoint(L))throw new I.ErrnoError(10);x.node_ops.unlink(x,w),I.destroyNode(L)},readlink(h){var m=I.lookupPath(h),x=m.node;if(!x)throw new I.ErrnoError(44);if(!x.node_ops.readlink)throw new I.ErrnoError(28);return Dt.resolve(I.getPath(x.parent),x.node_ops.readlink(x))},stat(h,m){var x=I.lookupPath(h,{follow:!m}),w=x.node;if(!w)throw new I.ErrnoError(44);if(!w.node_ops.getattr)throw new I.ErrnoError(63);return w.node_ops.getattr(w)},lstat(h){return I.stat(h,!0)},chmod(h,m,x){var w;if(typeof h=="string"){var L=I.lookupPath(h,{follow:!x});w=L.node}else w=h;if(!w.node_ops.setattr)throw new I.ErrnoError(63);w.node_ops.setattr(w,{mode:m&4095|w.mode&-4096,timestamp:Date.now()})},lchmod(h,m){I.chmod(h,m,!0)},fchmod(h,m){var x=I.getStreamChecked(h);I.chmod(x.node,m)},chown(h,m,x,w){var L;if(typeof h=="string"){var H=I.lookupPath(h,{follow:!w});L=H.node}else L=h;if(!L.node_ops.setattr)throw new I.ErrnoError(63);L.node_ops.setattr(L,{timestamp:Date.now()})},lchown(h,m,x){I.chown(h,m,x,!0)},fchown(h,m,x){var w=I.getStreamChecked(h);I.chown(w.node,m,x)},truncate(h,m){if(m<0)throw new I.ErrnoError(28);var x;if(typeof h=="string"){var w=I.lookupPath(h,{follow:!0});x=w.node}else x=h;if(!x.node_ops.setattr)throw new I.ErrnoError(63);if(I.isDir(x.mode))throw new I.ErrnoError(31);if(!I.isFile(x.mode))throw new I.ErrnoError(28);var L=I.nodePermissions(x,"w");if(L)throw new I.ErrnoError(L);x.node_ops.setattr(x,{size:m,timestamp:Date.now()})},ftruncate(h,m){var x=I.getStreamChecked(h);if((x.flags&2097155)===0)throw new I.ErrnoError(28);I.truncate(x.node,m)},utime(h,m,x){var w=I.lookupPath(h,{follow:!0}),L=w.node;L.node_ops.setattr(L,{timestamp:Math.max(m,x)})},open(h,m,x){if(h==="")throw new I.ErrnoError(44);m=typeof m=="string"?Ns(m):m,m&64?(x=typeof x>"u"?438:x,x=x&4095|32768):x=0;var w;if(typeof h=="object")w=h;else{h=k.normalize(h);try{var L=I.lookupPath(h,{follow:!(m&131072)});w=L.node}catch{}}var H=!1;if(m&64)if(w){if(m&128)throw new I.ErrnoError(20)}else w=I.mknod(h,x,0),H=!0;if(!w)throw new I.ErrnoError(44);if(I.isChrdev(w.mode)&&(m&=-513),m&65536&&!I.isDir(w.mode))throw new I.ErrnoError(54);if(!H){var Z=I.mayOpen(w,m);if(Z)throw new I.ErrnoError(Z)}m&512&&!H&&I.truncate(w,0),m&=-131713;var ot=I.createStream({node:w,path:I.getPath(w),flags:m,seekable:!0,position:0,stream_ops:w.stream_ops,ungotten:[],error:!1});return ot.stream_ops.open&&ot.stream_ops.open(ot),i.logReadFiles&&!(m&1)&&(h in I.readFiles||(I.readFiles[h]=1)),ot},close(h){if(I.isClosed(h))throw new I.ErrnoError(8);h.getdents&&(h.getdents=null);try{h.stream_ops.close&&h.stream_ops.close(h)}catch(m){throw m}finally{I.closeStream(h.fd)}h.fd=null},isClosed(h){return h.fd===null},llseek(h,m,x){if(I.isClosed(h))throw new I.ErrnoError(8);if(!h.seekable||!h.stream_ops.llseek)throw new I.ErrnoError(70);if(x!=0&&x!=1&&x!=2)throw new I.ErrnoError(28);return h.position=h.stream_ops.llseek(h,m,x),h.ungotten=[],h.position},read(h,m,x,w,L){if(w<0||L<0)throw new I.ErrnoError(28);if(I.isClosed(h))throw new I.ErrnoError(8);if((h.flags&2097155)===1)throw new I.ErrnoError(8);if(I.isDir(h.node.mode))throw new I.ErrnoError(31);if(!h.stream_ops.read)throw new I.ErrnoError(28);var H=typeof L<"u";if(!H)L=h.position;else if(!h.seekable)throw new I.ErrnoError(70);var Z=h.stream_ops.read(h,m,x,w,L);return H||(h.position+=Z),Z},write(h,m,x,w,L,H){if(w<0||L<0)throw new I.ErrnoError(28);if(I.isClosed(h))throw new I.ErrnoError(8);if((h.flags&2097155)===0)throw new I.ErrnoError(8);if(I.isDir(h.node.mode))throw new I.ErrnoError(31);if(!h.stream_ops.write)throw new I.ErrnoError(28);h.seekable&&h.flags&1024&&I.llseek(h,0,2);var Z=typeof L<"u";if(!Z)L=h.position;else if(!h.seekable)throw new I.ErrnoError(70);var ot=h.stream_ops.write(h,m,x,w,L,H);return Z||(h.position+=ot),ot},allocate(h,m,x){if(I.isClosed(h))throw new I.ErrnoError(8);if(m<0||x<=0)throw new I.ErrnoError(28);if((h.flags&2097155)===0)throw new I.ErrnoError(8);if(!I.isFile(h.node.mode)&&!I.isDir(h.node.mode))throw new I.ErrnoError(43);if(!h.stream_ops.allocate)throw new I.ErrnoError(138);h.stream_ops.allocate(h,m,x)},mmap(h,m,x,w,L){if((w&2)!==0&&(L&2)===0&&(h.flags&2097155)!==2)throw new I.ErrnoError(2);if((h.flags&2097155)===1)throw new I.ErrnoError(2);if(!h.stream_ops.mmap)throw new I.ErrnoError(43);if(!m)throw new I.ErrnoError(28);return h.stream_ops.mmap(h,m,x,w,L)},msync(h,m,x,w,L){return h.stream_ops.msync?h.stream_ops.msync(h,m,x,w,L):0},ioctl(h,m,x){if(!h.stream_ops.ioctl)throw new I.ErrnoError(59);return h.stream_ops.ioctl(h,m,x)},readFile(h,m={}){if(m.flags=m.flags||0,m.encoding=m.encoding||"binary",m.encoding!=="utf8"&&m.encoding!=="binary")throw new Error(`Invalid encoding type "${m.encoding}"`);var x,w=I.open(h,m.flags),L=I.stat(h),H=L.size,Z=new Uint8Array(H);return I.read(w,Z,0,H,0),m.encoding==="utf8"?x=It(Z):m.encoding==="binary"&&(x=Z),I.close(w),x},writeFile(h,m,x={}){x.flags=x.flags||577;var w=I.open(h,x.flags,x.mode);if(typeof m=="string"){var L=new Uint8Array(Bt(m)+1),H=Gt(m,L,0,L.length);I.write(w,L,0,H,void 0,x.canOwn)}else if(ArrayBuffer.isView(m))I.write(w,m,0,m.byteLength,void 0,x.canOwn);else throw new Error("Unsupported data type");I.close(w)},cwd:()=>I.currentPath,chdir(h){var m=I.lookupPath(h,{follow:!0});if(m.node===null)throw new I.ErrnoError(44);if(!I.isDir(m.node.mode))throw new I.ErrnoError(54);var x=I.nodePermissions(m.node,"x");if(x)throw new I.ErrnoError(x);I.currentPath=m.path},createDefaultDirectories(){I.mkdir("/tmp"),I.mkdir("/home"),I.mkdir("/home/web_user")},createDefaultDevices(){I.mkdir("/dev"),I.registerDevice(I.makedev(1,3),{read:()=>0,write:(w,L,H,Z,ot)=>Z}),I.mkdev("/dev/null",I.makedev(1,3)),Et.register(I.makedev(5,0),Et.default_tty_ops),Et.register(I.makedev(6,0),Et.default_tty1_ops),I.mkdev("/dev/tty",I.makedev(5,0)),I.mkdev("/dev/tty1",I.makedev(6,0));var h=new Uint8Array(1024),m=0,x=()=>(m===0&&(m=ft(h).byteLength),h[--m]);I.createDevice("/dev","random",x),I.createDevice("/dev","urandom",x),I.mkdir("/dev/shm"),I.mkdir("/dev/shm/tmp")},createSpecialDirectories(){I.mkdir("/proc");var h=I.mkdir("/proc/self");I.mkdir("/proc/self/fd"),I.mount({mount(){var m=I.createNode(h,"fd",16895,73);return m.node_ops={lookup(x,w){var L=+w,H=I.getStreamChecked(L),Z={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>H.path}};return Z.parent=Z,Z}},m}},{},"/proc/self/fd")},createStandardStreams(h,m,x){h?I.createDevice("/dev","stdin",h):I.symlink("/dev/tty","/dev/stdin"),m?I.createDevice("/dev","stdout",null,m):I.symlink("/dev/tty","/dev/stdout"),x?I.createDevice("/dev","stderr",null,x):I.symlink("/dev/tty1","/dev/stderr");var w=I.open("/dev/stdin",0),L=I.open("/dev/stdout",1),H=I.open("/dev/stderr",1)},staticInit(){[44].forEach(h=>{I.genericErrors[h]=new I.ErrnoError(h),I.genericErrors[h].stack="<generic error, no stack>"}),I.nameTable=new Array(4096),I.mount(Ot,{},"/"),I.createDefaultDirectories(),I.createDefaultDevices(),I.createSpecialDirectories(),I.filesystems={MEMFS:Ot}},init(h,m,x){I.initialized=!0,h??=i.stdin,m??=i.stdout,x??=i.stderr,I.createStandardStreams(h,m,x)},quit(){I.initialized=!1;for(var h=0;h<I.streams.length;h++){var m=I.streams[h];m&&I.close(m)}},findObject(h,m){var x=I.analyzePath(h,m);return x.exists?x.object:null},analyzePath(h,m){try{var x=I.lookupPath(h,{follow:!m});h=x.path}catch{}var w={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var x=I.lookupPath(h,{parent:!0});w.parentExists=!0,w.parentPath=x.path,w.parentObject=x.node,w.name=k.basename(h),x=I.lookupPath(h,{follow:!m}),w.exists=!0,w.path=x.path,w.object=x.node,w.name=x.node.name,w.isRoot=x.path==="/"}catch(L){w.error=L.errno}return w},createPath(h,m,x,w){h=typeof h=="string"?h:I.getPath(h);for(var L=m.split("/").reverse();L.length;){var H=L.pop();if(H){var Z=k.join2(h,H);try{I.mkdir(Z)}catch{}h=Z}}return Z},createFile(h,m,x,w,L){var H=k.join2(typeof h=="string"?h:I.getPath(h),m),Z=hr(w,L);return I.create(H,Z)},createDataFile(h,m,x,w,L,H){var Z=m;h&&(h=typeof h=="string"?h:I.getPath(h),Z=m?k.join2(h,m):h);var ot=hr(w,L),St=I.create(Z,ot);if(x){if(typeof x=="string"){for(var Ft=new Array(x.length),Zt=0,Qt=x.length;Zt<Qt;++Zt)Ft[Zt]=x.charCodeAt(Zt);x=Ft}I.chmod(St,ot|146);var oe=I.open(St,577);I.write(oe,x,0,x.length,0,H),I.close(oe),I.chmod(St,ot)}},createDevice(h,m,x,w){var L=k.join2(typeof h=="string"?h:I.getPath(h),m),H=hr(!!x,!!w);I.createDevice.major??=64;var Z=I.makedev(I.createDevice.major++,0);return I.registerDevice(Z,{open(ot){ot.seekable=!1},close(ot){w?.buffer?.length&&w(10)},read(ot,St,Ft,Zt,Qt){for(var oe=0,ie=0;ie<Zt;ie++){var me;try{me=x()}catch{throw new I.ErrnoError(29)}if(me===void 0&&oe===0)throw new I.ErrnoError(6);if(me==null)break;oe++,St[Ft+ie]=me}return oe&&(ot.node.timestamp=Date.now()),oe},write(ot,St,Ft,Zt,Qt){for(var oe=0;oe<Zt;oe++)try{w(St[Ft+oe])}catch{throw new I.ErrnoError(29)}return Zt&&(ot.node.timestamp=Date.now()),oe}}),I.mkdev(L,H,Z)},forceLoadFile(h){if(h.isDevice||h.isFolder||h.link||h.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{h.contents=M(h.url),h.usedBytes=h.contents.length}catch{throw new I.ErrnoError(29)}},createLazyFile(h,m,x,w,L){class H{constructor(){this.lengthKnown=!1,this.chunks=[]}get(ie){if(!(ie>this.length-1||ie<0)){var me=ie%this.chunkSize,Ne=ie/this.chunkSize|0;return this.getter(Ne)[me]}}setDataGetter(ie){this.getter=ie}cacheLength(){var ie=new XMLHttpRequest;if(ie.open("HEAD",x,!1),ie.send(null),!(ie.status>=200&&ie.status<300||ie.status===304))throw new Error("Couldn't load "+x+". Status: "+ie.status);var me=Number(ie.getResponseHeader("Content-length")),Ne,mn=(Ne=ie.getResponseHeader("Accept-Ranges"))&&Ne==="bytes",je=(Ne=ie.getResponseHeader("Content-Encoding"))&&Ne==="gzip",Zn=1024*1024;mn||(Zn=me);var Jn=(fi,kr)=>{if(fi>kr)throw new Error("invalid range ("+fi+", "+kr+") or no bytes requested!");if(kr>me-1)throw new Error("only "+me+" bytes available! programmer error!");var un=new XMLHttpRequest;if(un.open("GET",x,!1),me!==Zn&&un.setRequestHeader("Range","bytes="+fi+"-"+kr),un.responseType="arraybuffer",un.overrideMimeType&&un.overrideMimeType("text/plain; charset=x-user-defined"),un.send(null),!(un.status>=200&&un.status<300||un.status===304))throw new Error("Couldn't load "+x+". Status: "+un.status);return un.response!==void 0?new Uint8Array(un.response||[]):it(un.responseText||"",!0)},Bs=this;Bs.setDataGetter(fi=>{var kr=fi*Zn,un=(fi+1)*Zn-1;if(un=Math.min(un,me-1),typeof Bs.chunks[fi]>"u"&&(Bs.chunks[fi]=Jn(kr,un)),typeof Bs.chunks[fi]>"u")throw new Error("doXHR failed!");return Bs.chunks[fi]}),(je||!me)&&(Zn=me=1,me=this.getter(0).length,Zn=me,R("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=Zn,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!f)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var Z=new H,ot={isDevice:!1,contents:Z}}else var ot={isDevice:!1,url:x};var St=I.createFile(h,m,ot,w,L);ot.contents?St.contents=ot.contents:ot.url&&(St.contents=null,St.url=ot.url),Object.defineProperties(St,{usedBytes:{get:function(){return this.contents.length}}});var Ft={},Zt=Object.keys(St.stream_ops);Zt.forEach(oe=>{var ie=St.stream_ops[oe];Ft[oe]=(...me)=>(I.forceLoadFile(St),ie(...me))});function Qt(oe,ie,me,Ne,mn){var je=oe.node.contents;if(mn>=je.length)return 0;var Zn=Math.min(je.length-mn,Ne);if(je.slice)for(var Jn=0;Jn<Zn;Jn++)ie[me+Jn]=je[mn+Jn];else for(var Jn=0;Jn<Zn;Jn++)ie[me+Jn]=je.get(mn+Jn);return Zn}return Ft.read=(oe,ie,me,Ne,mn)=>(I.forceLoadFile(St),Qt(oe,ie,me,Ne,mn)),Ft.mmap=(oe,ie,me,Ne,mn)=>{I.forceLoadFile(St);var je=Rt(ie);if(!je)throw new I.ErrnoError(48);return Qt(oe,et,je,ie,me),{ptr:je,allocated:!0}},St.stream_ops=Ft,St}},Si=(h,m)=>h?It(nt,h,m):"",Ae={DEFAULT_POLLMASK:5,calculateAt(h,m,x){if(k.isAbs(m))return m;var w;if(h===-100)w=I.cwd();else{var L=Ae.getStreamFromFD(h);w=L.path}if(m.length==0){if(!x)throw new I.ErrnoError(44);return w}return k.join2(w,m)},doStat(h,m,x){var w=h(m);U[x>>2]=w.dev,U[x+4>>2]=w.mode,tt[x+8>>2]=w.nlink,U[x+12>>2]=w.uid,U[x+16>>2]=w.gid,U[x+20>>2]=w.rdev,pt=[w.size>>>0,(rt=w.size,+Math.abs(rt)>=1?rt>0?+Math.floor(rt/4294967296)>>>0:~~+Math.ceil((rt-+(~~rt>>>0))/4294967296)>>>0:0)],U[x+24>>2]=pt[0],U[x+28>>2]=pt[1],U[x+32>>2]=4096,U[x+36>>2]=w.blocks;var L=w.atime.getTime(),H=w.mtime.getTime(),Z=w.ctime.getTime();return pt=[Math.floor(L/1e3)>>>0,(rt=Math.floor(L/1e3),+Math.abs(rt)>=1?rt>0?+Math.floor(rt/4294967296)>>>0:~~+Math.ceil((rt-+(~~rt>>>0))/4294967296)>>>0:0)],U[x+40>>2]=pt[0],U[x+44>>2]=pt[1],tt[x+48>>2]=L%1e3*1e3*1e3,pt=[Math.floor(H/1e3)>>>0,(rt=Math.floor(H/1e3),+Math.abs(rt)>=1?rt>0?+Math.floor(rt/4294967296)>>>0:~~+Math.ceil((rt-+(~~rt>>>0))/4294967296)>>>0:0)],U[x+56>>2]=pt[0],U[x+60>>2]=pt[1],tt[x+64>>2]=H%1e3*1e3*1e3,pt=[Math.floor(Z/1e3)>>>0,(rt=Math.floor(Z/1e3),+Math.abs(rt)>=1?rt>0?+Math.floor(rt/4294967296)>>>0:~~+Math.ceil((rt-+(~~rt>>>0))/4294967296)>>>0:0)],U[x+72>>2]=pt[0],U[x+76>>2]=pt[1],tt[x+80>>2]=Z%1e3*1e3*1e3,pt=[w.ino>>>0,(rt=w.ino,+Math.abs(rt)>=1?rt>0?+Math.floor(rt/4294967296)>>>0:~~+Math.ceil((rt-+(~~rt>>>0))/4294967296)>>>0:0)],U[x+88>>2]=pt[0],U[x+92>>2]=pt[1],0},doMsync(h,m,x,w,L){if(!I.isFile(m.node.mode))throw new I.ErrnoError(43);if(w&2)return 0;var H=nt.slice(h,h+x);I.msync(m,H,L,x,w)},getStreamFromFD(h){var m=I.getStreamChecked(h);return m},varargs:void 0,getStr(h){var m=Si(h);return m}};function Ir(h,m){try{return h=Ae.getStr(h),I.chmod(h,m),0}catch(x){if(typeof I>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function Rr(h,m,x,w){try{if(m=Ae.getStr(m),m=Ae.calculateAt(h,m),x&-8)return-28;var L=I.lookupPath(m,{follow:!0}),H=L.node;if(!H)return-44;var Z="";return x&4&&(Z+="r"),x&2&&(Z+="w"),x&1&&(Z+="x"),Z&&I.nodePermissions(H,Z)?-2:0}catch(ot){if(typeof I>"u"||ot.name!=="ErrnoError")throw ot;return-ot.errno}}function Cn(){var h=U[+Ae.varargs>>2];return Ae.varargs+=4,h}var Hn=Cn;function Lr(h,m,x){Ae.varargs=x;try{var w=Ae.getStreamFromFD(h);switch(m){case 0:{var L=Cn();if(L<0)return-28;for(;I.streams[L];)L++;var H;return H=I.dupStream(w,L),H.fd}case 1:case 2:return 0;case 3:return w.flags;case 4:{var L=Cn();return w.flags|=L,0}case 12:{var L=Hn(),Z=0;return Q[L+Z>>1]=2,0}case 13:case 14:return 0}return-28}catch(ot){if(typeof I>"u"||ot.name!=="ErrnoError")throw ot;return-ot.errno}}function hi(h,m){try{var x=Ae.getStreamFromFD(h);return Ae.doStat(I.stat,x.path,m)}catch(w){if(typeof I>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function bi(h,m,x){Ae.varargs=x;try{var w=Ae.getStreamFromFD(h);switch(m){case 21509:return w.tty?0:-59;case 21505:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tcgets){var L=w.tty.ops.ioctl_tcgets(w),H=Hn();U[H>>2]=L.c_iflag||0,U[H+4>>2]=L.c_oflag||0,U[H+8>>2]=L.c_cflag||0,U[H+12>>2]=L.c_lflag||0;for(var Z=0;Z<32;Z++)et[H+Z+17]=L.c_cc[Z]||0;return 0}return 0}case 21510:case 21511:case 21512:return w.tty?0:-59;case 21506:case 21507:case 21508:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tcsets){for(var H=Hn(),ot=U[H>>2],St=U[H+4>>2],Ft=U[H+8>>2],Zt=U[H+12>>2],Qt=[],Z=0;Z<32;Z++)Qt.push(et[H+Z+17]);return w.tty.ops.ioctl_tcsets(w.tty,m,{c_iflag:ot,c_oflag:St,c_cflag:Ft,c_lflag:Zt,c_cc:Qt})}return 0}case 21519:{if(!w.tty)return-59;var H=Hn();return U[H>>2]=0,0}case 21520:return w.tty?-28:-59;case 21531:{var H=Hn();return I.ioctl(w,m,H)}case 21523:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tiocgwinsz){var oe=w.tty.ops.ioctl_tiocgwinsz(w.tty),H=Hn();Q[H>>1]=oe[0],Q[H+2>>1]=oe[1]}return 0}case 21524:return w.tty?0:-59;case 21515:return w.tty?0:-59;default:return-28}}catch(ie){if(typeof I>"u"||ie.name!=="ErrnoError")throw ie;return-ie.errno}}function Nr(h,m){try{return h=Ae.getStr(h),Ae.doStat(I.lstat,h,m)}catch(x){if(typeof I>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function Fi(h,m,x,w){try{m=Ae.getStr(m);var L=w&256,H=w&4096;return w=w&-6401,m=Ae.calculateAt(h,m,H),Ae.doStat(L?I.lstat:I.stat,m,x)}catch(Z){if(typeof I>"u"||Z.name!=="ErrnoError")throw Z;return-Z.errno}}function Dr(h,m,x,w){Ae.varargs=w;try{m=Ae.getStr(m),m=Ae.calculateAt(h,m);var L=w?Cn():0;return I.open(m,x,L).fd}catch(H){if(typeof I>"u"||H.name!=="ErrnoError")throw H;return-H.errno}}function Or(h){try{return h=Ae.getStr(h),I.rmdir(h),0}catch(m){if(typeof I>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}function Ds(h,m){try{return h=Ae.getStr(h),Ae.doStat(I.stat,h,m)}catch(x){if(typeof I>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function ui(h,m,x){try{return m=Ae.getStr(m),m=Ae.calculateAt(h,m),x===0?I.unlink(m):x===512?I.rmdir(m):be("Invalid flags passed to unlinkat"),0}catch(w){if(typeof I>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}var Os=()=>{be("")},Fs=(h,m,x,w,L)=>{},Fr=()=>{for(var h=new Array(256),m=0;m<256;++m)h[m]=String.fromCharCode(m);N=h},N,st=h=>{for(var m="",x=h;nt[x];)m+=N[nt[x++]];return m},xt={},gt={},_t={},qt,Ut=h=>{throw new qt(h)},Yt,Kt=h=>{throw new Yt(h)},ee=(h,m,x)=>{h.forEach(ot=>_t[ot]=m);function w(ot){var St=x(ot);St.length!==h.length&&Kt("Mismatched type converter count");for(var Ft=0;Ft<h.length;++Ft)he(h[Ft],St[Ft])}var L=new Array(m.length),H=[],Z=0;m.forEach((ot,St)=>{gt.hasOwnProperty(ot)?L[St]=gt[ot]:(H.push(ot),xt.hasOwnProperty(ot)||(xt[ot]=[]),xt[ot].push(()=>{L[St]=gt[ot],++Z,Z===H.length&&w(L)}))}),H.length===0&&w(L)};function Wt(h,m,x={}){var w=m.name;if(h||Ut(`type "${w}" must have a positive integer typeid pointer`),gt.hasOwnProperty(h)){if(x.ignoreDuplicateRegistrations)return;Ut(`Cannot register type '${w}' twice`)}if(gt[h]=m,delete _t[h],xt.hasOwnProperty(h)){var L=xt[h];delete xt[h],L.forEach(H=>H())}}function he(h,m,x={}){return Wt(h,m,x)}var jt=8,Pe=(h,m,x,w)=>{m=st(m),he(h,{name:m,fromWireType:function(L){return!!L},toWireType:function(L,H){return H?x:w},argPackAdvance:jt,readValueFromPointer:function(L){return this.fromWireType(nt[L])},destructorFunction:null})},We=[],Ee=[],s=h=>{h>9&&--Ee[h+1]===0&&(Ee[h]=void 0,We.push(h))},a=()=>Ee.length/2-5-We.length,l=()=>{Ee.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=a},p={toValue:h=>(h||Ut("Cannot use deleted val. handle = "+h),Ee[h]),toHandle:h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let m=We.pop()||Ee.length;return Ee[m]=h,Ee[m+1]=1,m}}}};function v(h){return this.fromWireType(tt[h>>2])}var T={name:"emscripten::val",fromWireType:h=>{var m=p.toValue(h);return s(h),m},toWireType:(h,m)=>p.toHandle(m),argPackAdvance:jt,readValueFromPointer:v,destructorFunction:null},D=h=>he(h,T),$=(h,m)=>{switch(m){case 4:return function(x){return this.fromWireType(ct[x>>2])};case 8:return function(x){return this.fromWireType(mt[x>>3])};default:throw new TypeError(`invalid float width (${m}): ${h}`)}},j=(h,m,x)=>{m=st(m),he(h,{name:m,fromWireType:w=>w,toWireType:(w,L)=>L,argPackAdvance:jt,readValueFromPointer:$(m,x),destructorFunction:null})},ut=(h,m)=>Object.defineProperty(m,"name",{value:h}),Ct=h=>{for(;h.length;){var m=h.pop(),x=h.pop();x(m)}};function At(h){for(var m=1;m<h.length;++m)if(h[m]!==null&&h[m].destructorFunction===void 0)return!0;return!1}function Nt(h,m){if(!(h instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof h} which is not a function`);var x=ut(h.name||"unknownFunctionName",function(){});x.prototype=h.prototype;var w=new x,L=h.apply(w,m);return L instanceof Object?L:w}function ne(h,m,x,w){var L=At(h),H=h.length-2,Z=[],ot=["fn"];m&&ot.push("thisWired");for(var St=0;St<H;++St)Z.push(`arg${St}`),ot.push(`arg${St}Wired`);Z=Z.join(","),ot=ot.join(",");var Ft=`return function (${Z}) {
`;L&&(Ft+=`var destructors = [];
`);var Zt=L?"destructors":"null",Qt=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];m&&(Ft+=`var thisWired = classParam['toWireType'](${Zt}, this);
`);for(var St=0;St<H;++St)Ft+=`var arg${St}Wired = argType${St}['toWireType'](${Zt}, arg${St});
`,Qt.push(`argType${St}`);if(Ft+=(x||w?"var rv = ":"")+`invoker(${ot});
`,L)Ft+=`runDestructors(destructors);
`;else for(var St=m?1:2;St<h.length;++St){var oe=St===1?"thisWired":"arg"+(St-2)+"Wired";h[St].destructorFunction!==null&&(Ft+=`${oe}_dtor(${oe});
`,Qt.push(`${oe}_dtor`))}return x&&(Ft+=`var ret = retType['fromWireType'](rv);
return ret;
`),Ft+=`}
`,[Qt,Ft]}function pe(h,m,x,w,L,H){var Z=m.length;Z<2&&Ut("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ot=m[1]!==null&&x!==null,St=At(m),Ft=m[0].name!=="void",Zt=[h,Ut,w,L,Ct,m[0],m[1]],Qt=0;Qt<Z-2;++Qt)Zt.push(m[Qt+2]);if(!St)for(var Qt=ot?1:2;Qt<m.length;++Qt)m[Qt].destructorFunction!==null&&Zt.push(m[Qt].destructorFunction);let[oe,ie]=ne(m,ot,Ft,H);oe.push(ie);var me=Nt(Function,oe)(...Zt);return ut(h,me)}var Me=(h,m,x)=>{if(h[m].overloadTable===void 0){var w=h[m];h[m]=function(...L){return h[m].overloadTable.hasOwnProperty(L.length)||Ut(`Function '${x}' called with an invalid number of arguments (${L.length}) - expects one of (${h[m].overloadTable})!`),h[m].overloadTable[L.length].apply(this,L)},h[m].overloadTable=[],h[m].overloadTable[w.argCount]=w}},Be=(h,m,x)=>{i.hasOwnProperty(h)?((x===void 0||i[h].overloadTable!==void 0&&i[h].overloadTable[x]!==void 0)&&Ut(`Cannot register public name '${h}' twice`),Me(i,h,h),i.hasOwnProperty(x)&&Ut(`Cannot register multiple overloads of a function with the same number of arguments (${x})!`),i[h].overloadTable[x]=m):(i[h]=m,x!==void 0&&(i[h].numArguments=x))},pn=(h,m)=>{for(var x=[],w=0;w<h;w++)x.push(tt[m+w*4>>2]);return x},Gn=(h,m,x)=>{i.hasOwnProperty(h)||Kt("Replacing nonexistent public symbol"),i[h].overloadTable!==void 0&&x!==void 0?i[h].overloadTable[x]=m:(i[h]=m,i[h].argCount=x)},Ui=(h,m,x)=>{h=h.replace(/p/g,"i");var w=i["dynCall_"+h];return w(m,...x)},Ur=[],ko,wi=h=>{var m=Ur[h];return m||(h>=Ur.length&&(Ur.length=h+1),Ur[h]=m=ko.get(h)),m},tp=(h,m,x=[])=>{if(h.includes("j"))return Ui(h,m,x);var w=wi(m)(...x);return w},ep=(h,m)=>(...x)=>tp(h,m,x),np=(h,m)=>{h=st(h);function x(){return h.includes("j")?ep(h,m):wi(m)}var w=x();return typeof w!="function"&&Ut(`unknown function pointer with signature ${h}: ${m}`),w},ip=(h,m)=>{var x=ut(m,function(w){this.name=m,this.message=w;var L=new Error(w).stack;L!==void 0&&(this.stack=this.toString()+`
`+L.replace(/^Error(:[^\n]*)?\n/,""))});return x.prototype=Object.create(h.prototype),x.prototype.constructor=x,x.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},x},nu,iu=h=>{var m=cu(h),x=st(m);return Ei(m),x},rp=(h,m)=>{var x=[],w={};function L(H){if(!w[H]&&!gt[H]){if(_t[H]){_t[H].forEach(L);return}x.push(H),w[H]=!0}}throw m.forEach(L),new nu(`${h}: `+x.map(iu).join([", "]))},sp=h=>{h=h.trim();let m=h.indexOf("(");return m!==-1?h.substr(0,m):h},op=(h,m,x,w,L,H,Z,ot)=>{var St=pn(m,x);h=st(h),h=sp(h),L=np(w,L),Be(h,function(){rp(`Cannot call ${h} due to unbound types`,St)},m-1),ee([],St,Ft=>{var Zt=[Ft[0],null].concat(Ft.slice(1));return Gn(h,pe(h,Zt,null,L,H,Z),m-1),[]})},ap=(h,m,x)=>{switch(m){case 1:return x?w=>et[w]:w=>nt[w];case 2:return x?w=>Q[w>>1]:w=>K[w>>1];case 4:return x?w=>U[w>>2]:w=>tt[w>>2];default:throw new TypeError(`invalid integer width (${m}): ${h}`)}},lp=(h,m,x,w,L)=>{m=st(m),L===-1&&(L=4294967295);var H=Zt=>Zt;if(w===0){var Z=32-8*x;H=Zt=>Zt<<Z>>>Z}var ot=m.includes("unsigned"),St=(Zt,Qt)=>{},Ft;ot?Ft=function(Zt,Qt){return St(Qt,this.name),Qt>>>0}:Ft=function(Zt,Qt){return St(Qt,this.name),Qt},he(h,{name:m,fromWireType:H,toWireType:Ft,argPackAdvance:jt,readValueFromPointer:ap(m,x,w!==0),destructorFunction:null})},cp=(h,m,x)=>{var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],L=w[m];function H(Z){var ot=tt[Z>>2],St=tt[Z+4>>2];return new L(et.buffer,St,ot)}x=st(x),he(h,{name:x,fromWireType:H,argPackAdvance:jt,readValueFromPointer:H},{ignoreDuplicateRegistrations:!0})},Br=(h,m,x)=>Gt(h,nt,m,x),hp=(h,m)=>{m=st(m);var x=m==="std::string";he(h,{name:m,fromWireType(w){var L=tt[w>>2],H=w+4,Z;if(x)for(var ot=H,St=0;St<=L;++St){var Ft=H+St;if(St==L||nt[Ft]==0){var Zt=Ft-ot,Qt=Si(ot,Zt);Z===void 0?Z=Qt:(Z+="\0",Z+=Qt),ot=Ft+1}}else{for(var oe=new Array(L),St=0;St<L;++St)oe[St]=String.fromCharCode(nt[H+St]);Z=oe.join("")}return Ei(w),Z},toWireType(w,L){L instanceof ArrayBuffer&&(L=new Uint8Array(L));var H,Z=typeof L=="string";Z||L instanceof Uint8Array||L instanceof Uint8ClampedArray||L instanceof Int8Array||Ut("Cannot pass non-string to std::string"),x&&Z?H=Bt(L):H=L.length;var ot=uc(4+H+1),St=ot+4;if(tt[ot>>2]=H,x&&Z)Br(L,St,H+1);else if(Z)for(var Ft=0;Ft<H;++Ft){var Zt=L.charCodeAt(Ft);Zt>255&&(Ei(St),Ut("String has UTF-16 code units that do not fit in 8 bits")),nt[St+Ft]=Zt}else for(var Ft=0;Ft<H;++Ft)nt[St+Ft]=L[Ft];return w!==null&&w.push(Ei,ot),ot},argPackAdvance:jt,readValueFromPointer:v,destructorFunction(w){Ei(w)}})},ru=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,up=(h,m)=>{for(var x=h,w=x>>1,L=w+m/2;!(w>=L)&&K[w];)++w;if(x=w<<1,x-h>32&&ru)return ru.decode(nt.subarray(h,x));for(var H="",Z=0;!(Z>=m/2);++Z){var ot=Q[h+Z*2>>1];if(ot==0)break;H+=String.fromCharCode(ot)}return H},fp=(h,m,x)=>{if(x??=2147483647,x<2)return 0;x-=2;for(var w=m,L=x<h.length*2?x/2:h.length,H=0;H<L;++H){var Z=h.charCodeAt(H);Q[m>>1]=Z,m+=2}return Q[m>>1]=0,m-w},dp=h=>h.length*2,pp=(h,m)=>{for(var x=0,w="";!(x>=m/4);){var L=U[h+x*4>>2];if(L==0)break;if(++x,L>=65536){var H=L-65536;w+=String.fromCharCode(55296|H>>10,56320|H&1023)}else w+=String.fromCharCode(L)}return w},mp=(h,m,x)=>{if(x??=2147483647,x<4)return 0;for(var w=m,L=w+x-4,H=0;H<h.length;++H){var Z=h.charCodeAt(H);if(Z>=55296&&Z<=57343){var ot=h.charCodeAt(++H);Z=65536+((Z&1023)<<10)|ot&1023}if(U[m>>2]=Z,m+=4,m+4>L)break}return U[m>>2]=0,m-w},gp=h=>{for(var m=0,x=0;x<h.length;++x){var w=h.charCodeAt(x);w>=55296&&w<=57343&&++x,m+=4}return m},_p=(h,m,x)=>{x=st(x);var w,L,H,Z;m===2?(w=up,L=fp,Z=dp,H=ot=>K[ot>>1]):m===4&&(w=pp,L=mp,Z=gp,H=ot=>tt[ot>>2]),he(h,{name:x,fromWireType:ot=>{for(var St=tt[ot>>2],Ft,Zt=ot+4,Qt=0;Qt<=St;++Qt){var oe=ot+4+Qt*m;if(Qt==St||H(oe)==0){var ie=oe-Zt,me=w(Zt,ie);Ft===void 0?Ft=me:(Ft+="\0",Ft+=me),Zt=oe+m}}return Ei(ot),Ft},toWireType:(ot,St)=>{typeof St!="string"&&Ut(`Cannot pass non-string to C++ string type ${x}`);var Ft=Z(St),Zt=uc(4+Ft+m);return tt[Zt>>2]=Ft/m,L(St,Zt+4,Ft+m),ot!==null&&ot.push(Ei,Zt),Zt},argPackAdvance:jt,readValueFromPointer:v,destructorFunction(ot){Ei(ot)}})},vp=(h,m)=>{m=st(m),he(h,{isVoid:!0,name:m,argPackAdvance:0,fromWireType:()=>{},toWireType:(x,w)=>{}})},yp=1,xp=()=>yp,su=h=>{for(var m=h.split("."),x=0;x<4;x++){var w=Number(m[x]);if(isNaN(w))return null;m[x]=w}return(m[0]|m[1]<<8|m[2]<<16|m[3]<<24)>>>0},zo=h=>parseInt(h),Mp=h=>{var m,x,w,L,H=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,Z=[];if(!H.test(h))return null;if(h==="::")return[0,0,0,0,0,0,0,0];for(h.startsWith("::")?h=h.replace("::","Z:"):h=h.replace("::",":Z:"),h.indexOf(".")>0?(h=h.replace(new RegExp("[.]","g"),":"),m=h.split(":"),m[m.length-4]=zo(m[m.length-4])+zo(m[m.length-3])*256,m[m.length-3]=zo(m[m.length-2])+zo(m[m.length-1])*256,m=m.slice(0,m.length-2)):m=h.split(":"),w=0,L=0,x=0;x<m.length;x++)if(typeof m[x]=="string")if(m[x]==="Z"){for(L=0;L<8-m.length+1;L++)Z[x+L]=0;w=L-1}else Z[x+w]=hu(parseInt(m[x],16));else Z[x+w]=m[x];return[Z[1]<<16|Z[0],Z[3]<<16|Z[2],Z[5]<<16|Z[4],Z[7]<<16|Z[6]]},Bi={address_map:{id:1,addrs:{},names:{}},lookup_name(h){var m=su(h);if(m!==null||(m=Mp(h),m!==null))return h;var x;if(Bi.address_map.addrs[h])x=Bi.address_map.addrs[h];else{var w=Bi.address_map.id++;W(w<65535,"exceeded max address mappings of 65535"),x="172.29."+(w&255)+"."+(w&65280),Bi.address_map.names[x]=h,Bi.address_map.addrs[h]=x}return x},lookup_addr(h){return Bi.address_map.names[h]?Bi.address_map.names[h]:null}},Sp=h=>{var m=Si(h);return su(Bi.lookup_name(m))},bp=(h,m,x)=>nt.copyWithin(h,m,m+x),oc=(h,m)=>{var x=gt[h];return x===void 0&&Ut(`${m} has unknown type ${iu(h)}`),x},ou=(h,m,x)=>{var w=[],L=h.toWireType(w,x);return w.length&&(tt[m>>2]=p.toHandle(w)),L},wp=(h,m,x)=>(h=p.toValue(h),m=oc(m,"emval::as"),ou(m,x,h)),Ep={},ac=h=>{var m=Ep[h];return m===void 0?st(h):m},lc=[],Tp=(h,m,x,w,L)=>(h=lc[h],m=p.toValue(m),x=ac(x),h(m,m[x],w,L)),au=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),Ap=h=>h===0?p.toHandle(au()):(h=ac(h),p.toHandle(au()[h])),Cp=h=>{var m=lc.length;return lc.push(h),m},Pp=(h,m)=>{for(var x=new Array(h),w=0;w<h;++w)x[w]=oc(tt[m+w*4>>2],"parameter "+w);return x},pM=Reflect.construct,Ip=(h,m,x)=>{var w=Pp(h,m),L=w.shift();h--;var H=`return function (obj, func, destructorsRef, args) {
`,Z=0,ot=[];x===0&&ot.push("obj");for(var St=["retType"],Ft=[L],Zt=0;Zt<h;++Zt)ot.push("arg"+Zt),St.push("argType"+Zt),Ft.push(w[Zt]),H+=`  var arg${Zt} = argType${Zt}.readValueFromPointer(args${Z?"+"+Z:""});
`,Z+=w[Zt].argPackAdvance;var Qt=x===1?"new func":"func.call";H+=`  var rv = ${Qt}(${ot.join(", ")});
`,L.isVoid||(St.push("emval_returnValue"),Ft.push(ou),H+=`  return emval_returnValue(retType, destructorsRef, rv);
`),H+=`};
`,St.push(H);var oe=Nt(Function,St)(...Ft),ie=`methodCaller<(${w.map(me=>me.name).join(", ")}) => ${L.name}>`;return Cp(ut(ie,oe))},Rp=(h,m)=>(h=p.toValue(h),m=p.toValue(m),p.toHandle(h[m])),Lp=h=>{h>9&&(Ee[h+1]+=1)},Np=()=>p.toHandle([]),Dp=h=>p.toHandle(ac(h)),Op=()=>p.toHandle({}),Fp=h=>{var m=p.toValue(h);Ct(m),s(h)},Up=(h,m,x)=>{h=p.toValue(h),m=p.toValue(m),x=p.toValue(x),h[m]=x},Bp=(h,m)=>{h=oc(h,"_emval_take_value");var x=h.readValueFromPointer(m);return p.toHandle(x)},kp=h=>h%4===0&&(h%100!==0||h%400===0),zp=[0,31,60,91,121,152,182,213,244,274,305,335],Vp=[0,31,59,90,120,151,181,212,243,273,304,334],Hp=h=>{var m=kp(h.getFullYear()),x=m?zp:Vp,w=x[h.getMonth()]+h.getDate()-1;return w},cc=(h,m)=>m+2097152>>>0<4194305-!!h?(h>>>0)+m*4294967296:NaN;function Gp(h,m,x){var w=cc(h,m),L=new Date(w*1e3);U[x>>2]=L.getSeconds(),U[x+4>>2]=L.getMinutes(),U[x+8>>2]=L.getHours(),U[x+12>>2]=L.getDate(),U[x+16>>2]=L.getMonth(),U[x+20>>2]=L.getFullYear()-1900,U[x+24>>2]=L.getDay();var H=Hp(L)|0;U[x+28>>2]=H,U[x+36>>2]=-(L.getTimezoneOffset()*60);var Z=new Date(L.getFullYear(),0,1),ot=new Date(L.getFullYear(),6,1).getTimezoneOffset(),St=Z.getTimezoneOffset(),Ft=(ot!=St&&L.getTimezoneOffset()==Math.min(St,ot))|0;U[x+32>>2]=Ft}function Xp(h,m,x,w,L,H,Z){var ot=cc(H,Z);try{var St=Ae.getStreamFromFD(L);x&2&&Ae.doMsync(h,St,m,w,ot)}catch(Ft){if(typeof I>"u"||Ft.name!=="ErrnoError")throw Ft;return-Ft.errno}}var Wp=(h,m,x,w)=>{var L=new Date().getFullYear(),H=new Date(L,0,1),Z=new Date(L,6,1),ot=H.getTimezoneOffset(),St=Z.getTimezoneOffset(),Ft=Math.max(ot,St);tt[h>>2]=Ft*60,U[m>>2]=+(ot!=St);var Zt=ie=>{var me=ie>=0?"-":"+",Ne=Math.abs(ie),mn=String(Math.floor(Ne/60)).padStart(2,"0"),je=String(Ne%60).padStart(2,"0");return`UTC${me}${mn}${je}`},Qt=Zt(ot),oe=Zt(St);St<ot?(Br(Qt,x,17),Br(oe,w,17)):(Br(Qt,w,17),Br(oe,x,17))},Yp=()=>Date.now();function qp(){return new Error().stack.toString()}var Vo=h=>{Vo.shown||={},Vo.shown[h]||(Vo.shown[h]=1,d&&(h="warning: "+h),F(h))};function $p(h){var m=qp(),x=m.lastIndexOf("_emscripten_log"),w=m.lastIndexOf("_emscripten_get_callstack"),L=m.indexOf(`
`,Math.max(x,w))+1;m=m.slice(L),h&8&&typeof emscripten_source_map>"u"&&(Vo('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),h^=8,h|=16);var H=m.split(`
`);m="";var Z=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),ot=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),St=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Ft in H){var Zt=H[Ft],Qt="",oe="",ie=0,me=0,Ne=St.exec(Zt);if(Ne&&Ne.length==5)Qt=Ne[1],oe=Ne[2],ie=Ne[3],me=Ne[4];else if(Ne=Z.exec(Zt)||ot.exec(Zt),Ne&&Ne.length>=4)Qt=Ne[1],oe=Ne[2],ie=Ne[3],me=Ne[4]|0;else{m+=Zt+`
`;continue}var mn=!1;if(h&8){var je=emscripten_source_map.originalPositionFor({line:ie,column:me});mn=je?.source,mn&&(h&64&&(je.source=je.source.substring(je.source.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=`    at ${Qt} (${je.source}:${je.line}:${je.column})
`)}(h&16||!mn)&&(h&64&&(oe=oe.substring(oe.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=(mn?`     = ${Qt}`:`    at ${Qt}`)+` (${oe}:${ie}:${me})
`)}return m=m.replace(/\s+$/,""),m}function Zp(h,m,x){var w=$p(h);if(!m||x<=0)return Bt(w)+1;var L=Br(w,m,x);return L+1}var lu=()=>2147483648,Jp=()=>lu(),jp=h=>{var m=Y.buffer,x=(h-m.byteLength+65535)/65536|0;try{return Y.grow(x),ht(),1}catch{}},Kp=h=>{var m=nt.length;h>>>=0;var x=lu();if(h>x)return!1;for(var w=1;w<=4;w*=2){var L=m*(1+.2/w);L=Math.min(L,h+100663296);var H=Math.min(x,$t(Math.max(h,L),65536)),Z=jp(H);if(Z)return!0}return!1},hc={},Qp=()=>_||"./this.program",Us=()=>{if(!Us.strings){var h=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",m={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:h,_:Qp()};for(var x in hc)hc[x]===void 0?delete m[x]:m[x]=hc[x];var w=[];for(var x in m)w.push(`${x}=${m[x]}`);Us.strings=w}return Us.strings},tm=(h,m)=>{for(var x=0;x<h.length;++x)et[m++]=h.charCodeAt(x);et[m]=0},em=(h,m)=>{var x=0;return Us().forEach((w,L)=>{var H=m+x;tt[h+L*4>>2]=H,tm(w,H),x+=w.length+1}),0},nm=(h,m)=>{var x=Us();tt[h>>2]=x.length;var w=0;return x.forEach(L=>w+=L.length+1),tt[m>>2]=w,0},im=0,rm=()=>J||im>0,sm=h=>{V=h,rm()||(i.onExit?.(h),C=!0),b(h,new Tt(h))},om=(h,m)=>{V=h,sm(h)},am=om;function lm(h){try{var m=Ae.getStreamFromFD(h);return I.close(m),0}catch(x){if(typeof I>"u"||x.name!=="ErrnoError")throw x;return x.errno}}var cm=(h,m,x,w)=>{for(var L=0,H=0;H<x;H++){var Z=tt[m>>2],ot=tt[m+4>>2];m+=8;var St=I.read(h,et,Z,ot,w);if(St<0)return-1;if(L+=St,St<ot)break;typeof w<"u"&&(w+=St)}return L};function hm(h,m,x,w){try{var L=Ae.getStreamFromFD(h),H=cm(L,m,x);return tt[w>>2]=H,0}catch(Z){if(typeof I>"u"||Z.name!=="ErrnoError")throw Z;return Z.errno}}function um(h,m,x,w,L){var H=cc(m,x);try{if(isNaN(H))return 61;var Z=Ae.getStreamFromFD(h);return I.llseek(Z,H,w),pt=[Z.position>>>0,(rt=Z.position,+Math.abs(rt)>=1?rt>0?+Math.floor(rt/4294967296)>>>0:~~+Math.ceil((rt-+(~~rt>>>0))/4294967296)>>>0:0)],U[L>>2]=pt[0],U[L+4>>2]=pt[1],Z.getdents&&H===0&&w===0&&(Z.getdents=null),0}catch(ot){if(typeof I>"u"||ot.name!=="ErrnoError")throw ot;return ot.errno}}var fm=(h,m,x,w)=>{for(var L=0,H=0;H<x;H++){var Z=tt[m>>2],ot=tt[m+4>>2];m+=8;var St=I.write(h,et,Z,ot,w);if(St<0)return-1;if(L+=St,St<ot)break;typeof w<"u"&&(w+=St)}return L};function dm(h,m,x,w){try{var L=Ae.getStreamFromFD(h),H=fm(L,m,x);return tt[w>>2]=H,0}catch(Z){if(typeof I>"u"||Z.name!=="ErrnoError")throw Z;return Z.errno}}I.createPreloadedFile=An,I.staticInit(),Fr(),qt=i.BindingError=class extends Error{constructor(m){super(m),this.name="BindingError"}},Yt=i.InternalError=class extends Error{constructor(m){super(m),this.name="InternalError"}},l(),nu=i.UnboundTypeError=ip(Error,"UnboundTypeError");var pm={M:Ir,N:Rr,h:Lr,I:hi,Q:bi,F:Nr,G:Fi,j:Dr,B:Or,H:Ds,C:ui,A:Os,w:Fs,V:Pe,U:D,n:j,f:op,b:lp,a:cp,m:hp,i:_p,W:vp,J:xp,x:Sp,L:bp,e:wp,q:Tp,T:s,u:Ap,p:Ip,k:Rp,Y:Lp,X:Np,r:Dp,Z:Op,o:Fp,c:Up,d:Bp,t:Gp,s:Xp,O:Wp,K:Yp,R:Zp,z:Jp,y:Kp,D:em,E:nm,S:am,g:lm,P:hm,v:um,l:dm},an=A(),mm=()=>(mm=an.$)(),cu=h=>(cu=an.aa)(h),uc=h=>(uc=an.ca)(h),Ei=h=>(Ei=an.da)(h),hu=h=>(hu=an.ea)(h),uu=(h,m)=>(uu=an.fa)(h,m),fu=()=>(fu=an.ga)(),gm=i.dynCall_viijii=(h,m,x,w,L,H,Z)=>(gm=i.dynCall_viijii=an.ha)(h,m,x,w,L,H,Z),_m=i.dynCall_viiiiji=(h,m,x,w,L,H,Z,ot)=>(_m=i.dynCall_viiiiji=an.ia)(h,m,x,w,L,H,Z,ot),vm=i.dynCall_jiji=(h,m,x,w,L)=>(vm=i.dynCall_jiji=an.ja)(h,m,x,w,L),ym=i.dynCall_iiiiij=(h,m,x,w,L,H,Z)=>(ym=i.dynCall_iiiiij=an.ka)(h,m,x,w,L,H,Z),xm=i.dynCall_iiiiijj=(h,m,x,w,L,H,Z,ot,St)=>(xm=i.dynCall_iiiiijj=an.la)(h,m,x,w,L,H,Z,ot,St),Mm=i.dynCall_iiiiiijj=(h,m,x,w,L,H,Z,ot,St,Ft)=>(Mm=i.dynCall_iiiiiijj=an.ma)(h,m,x,w,L,H,Z,ot,St,Ft),Ho,du;fe=function h(){Ho||pu(),Ho||(fe=h)};function pu(){if(re>0||!du&&(du=1,le(),re>0))return;function h(){Ho||(Ho=1,i.calledRun=1,!C&&(ae(),r(i),i.onRuntimeInitialized?.(),dt()))}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),h()},1)):h()}if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return pu(),e=c,e})})();typeof vu=="object"&&typeof pc=="object"?pc.exports=_u:typeof define=="function"&&define.amd&&define([],()=>_u)});var xu=mu((MM,Go)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof Go<"u"&&Go.exports?(Go.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var r={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?r.chrome=1:r.chrome=0,i.indexOf("chromium")!=-1?r.chromium=1:r.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?r.safari=1:r.safari=0,i.indexOf("firefox")!=-1?r.firefox=1:r.firefox=0,i.indexOf("firefox/17")!=-1?r.firefox17=1:r.firefox17=0,i.indexOf("firefox/15")!=-1?r.firefox15=1:r.firefox15=0,i.indexOf("firefox/3")!=-1?r.firefox3=1:r.firefox3=0,i.indexOf("opera")!=-1?r.opera=1:r.opera=0,i.indexOf("msie 10")!=-1?r.msie10=1:r.msie10=0,i.indexOf("msie 9")!=-1?r.msie9=1:r.msie9=0,i.indexOf("msie 8")!=-1?r.msie8=1:r.msie8=0,i.indexOf("msie 7")!=-1?r.msie7=1:r.msie7=0,i.indexOf("msie ")!=-1?r.msie=1:r.msie=0,n.biginteger_used=null;var o,c=0xdeadbeefcafe,u=(c&16777215)==15715070;function f(s,a,l){n.biginteger_used=1,s!=null&&(typeof s=="number"&&typeof a>"u"?this.fromInt(s):typeof s=="number"?this.fromNumber(s,a,l):a==null&&typeof s!="string"?this.fromString(s,256):this.fromString(s,a))}function d(){return new f(null,void 0,void 0)}function g(s,a,l,p,v,T){for(;--T>=0;){var D=a*this[s++]+l[p]+v;v=Math.floor(D/67108864),l[p++]=D&67108863}return v}function y(s,a,l,p,v,T){for(var D=a&32767,$=a>>15;--T>=0;){var j=this[s]&32767,ut=this[s++]>>15,Ct=$*j+ut*D;j=D*j+((Ct&32767)<<15)+l[p]+(v&1073741823),v=(j>>>30)+(Ct>>>15)+$*ut+(v>>>30),l[p++]=j&1073741823}return v}function _(s,a,l,p,v,T){for(var D=a&16383,$=a>>14;--T>=0;){var j=this[s]&16383,ut=this[s++]>>14,Ct=$*j+ut*D;j=D*j+((Ct&16383)<<14)+l[p]+v,v=(j>>28)+(Ct>>14)+$*ut,l[p++]=j&268435455}return v}u&&e=="Microsoft Internet Explorer"?(f.prototype.am=y,o=30):u&&e!="Netscape"?(f.prototype.am=g,o=26):(f.prototype.am=_,o=28),f.prototype.DB=o,f.prototype.DM=(1<<o)-1,f.prototype.DV=1<<o;var b=52;f.prototype.FV=Math.pow(2,b),f.prototype.F1=b-o,f.prototype.F2=2*o-b;var E="0123456789abcdefghijklmnopqrstuvwxyz",P=new Array,S,M;for(S=48,M=0;M<=9;++M)P[S++]=M;for(S=97,M=10;M<36;++M)P[S++]=M;for(S=65,M=10;M<36;++M)P[S++]=M;function O(s){return E.charAt(s)}function G(s,a){var l=P[s.charCodeAt(a)];return l??-1}function R(s){for(var a=this.t-1;a>=0;--a)s[a]=this[a];s.t=this.t,s.s=this.s}function F(s){this.t=1,this.s=s<0?-1:0,s>0?this[0]=s:s<-1?this[0]=s+this.DV:this.t=0}function B(s){var a=d();return a.fromInt(s),a}function Y(s,a){var l;if(a==16)l=4;else if(a==8)l=3;else if(a==256)l=8;else if(a==2)l=1;else if(a==32)l=5;else if(a==4)l=2;else{this.fromRadix(s,a);return}this.t=0,this.s=0;for(var p=s.length,v=!1,T=0;--p>=0;){var D=l==8?s[p]&255:G(s,p);if(D<0){s.charAt(p)=="-"&&(v=!0);continue}v=!1,T==0?this[this.t++]=D:T+l>this.DB?(this[this.t-1]|=(D&(1<<this.DB-T)-1)<<T,this[this.t++]=D>>this.DB-T):this[this.t-1]|=D<<T,T+=l,T>=this.DB&&(T-=this.DB)}l==8&&(s[0]&128)!=0&&(this.s=-1,T>0&&(this[this.t-1]|=(1<<this.DB-T)-1<<T)),this.clamp(),v&&f.ZERO.subTo(this,this)}function C(){for(var s=this.s&this.DM;this.t>0&&this[this.t-1]==s;)--this.t}function V(s){if(this.s<0)return"-"+this.negate().toString(s);var a;if(s==16)a=4;else if(s==8)a=3;else if(s==2)a=1;else if(s==32)a=5;else if(s==4)a=2;else return this.toRadix(s);var l=(1<<a)-1,p,v=!1,T="",D=this.t,$=this.DB-D*this.DB%a;if(D-- >0)for($<this.DB&&(p=this[D]>>$)>0&&(v=!0,T=O(p));D>=0;)$<a?(p=(this[D]&(1<<$)-1)<<a-$,p|=this[--D]>>($+=this.DB-a)):(p=this[D]>>($-=a)&l,$<=0&&($+=this.DB,--D)),p>0&&(v=!0),v&&(T+=O(p));return v?T:"0"}function W(){var s=d();return f.ZERO.subTo(this,s),s}function et(){return this.s<0?this.negate():this}function nt(s){var a=this.s-s.s;if(a!=0)return a;var l=this.t;if(a=l-s.t,a!=0)return this.s<0?-a:a;for(;--l>=0;)if((a=this[l]-s[l])!=0)return a;return 0}function Q(s){var a=1,l;return(l=s>>>16)!=0&&(s=l,a+=16),(l=s>>8)!=0&&(s=l,a+=8),(l=s>>4)!=0&&(s=l,a+=4),(l=s>>2)!=0&&(s=l,a+=2),(l=s>>1)!=0&&(s=l,a+=1),a}function K(){return this.t<=0?0:this.DB*(this.t-1)+Q(this[this.t-1]^this.s&this.DM)}function U(s,a){var l;for(l=this.t-1;l>=0;--l)a[l+s]=this[l];for(l=s-1;l>=0;--l)a[l]=0;a.t=this.t+s,a.s=this.s}function tt(s,a){for(var l=s;l<this.t;++l)a[l-s]=this[l];a.t=Math.max(this.t-s,0),a.s=this.s}function ct(s,a){var l=s%this.DB,p=this.DB-l,v=(1<<p)-1,T=Math.floor(s/this.DB),D=this.s<<l&this.DM,$;for($=this.t-1;$>=0;--$)a[$+T+1]=this[$]>>p|D,D=(this[$]&v)<<l;for($=T-1;$>=0;--$)a[$]=0;a[T]=D,a.t=this.t+T+1,a.s=this.s,a.clamp()}function mt(s,a){a.s=this.s;var l=Math.floor(s/this.DB);if(l>=this.t){a.t=0;return}var p=s%this.DB,v=this.DB-p,T=(1<<p)-1;a[0]=this[l]>>p;for(var D=l+1;D<this.t;++D)a[D-l-1]|=(this[D]&T)<<v,a[D-l]=this[D]>>p;p>0&&(a[this.t-l-1]|=(this.s&T)<<v),a.t=this.t-l,a.clamp()}function ht(s,a){for(var l=0,p=0,v=Math.min(s.t,this.t);l<v;)p+=this[l]-s[l],a[l++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p-=s.s;l<this.t;)p+=this[l],a[l++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;l<s.t;)p-=s[l],a[l++]=p&this.DM,p>>=this.DB;p-=s.s}a.s=p<0?-1:0,p<-1?a[l++]=this.DV+p:p>0&&(a[l++]=p),a.t=l,a.clamp()}function yt(s,a){var l=this.abs(),p=s.abs(),v=l.t;for(a.t=v+p.t;--v>=0;)a[v]=0;for(v=0;v<p.t;++v)a[v+l.t]=l.am(0,p[v],a,v,0,l.t);a.s=0,a.clamp(),this.s!=s.s&&f.ZERO.subTo(a,a)}function bt(s){for(var a=this.abs(),l=s.t=2*a.t;--l>=0;)s[l]=0;for(l=0;l<a.t-1;++l){var p=a.am(l,a[l],s,2*l,0,1);(s[l+a.t]+=a.am(l+1,2*a[l],s,2*l+1,p,a.t-l-1))>=a.DV&&(s[l+a.t]-=a.DV,s[l+a.t+1]=1)}s.t>0&&(s[s.t-1]+=a.am(l,a[l],s,2*l,0,1)),s.s=0,s.clamp()}function Lt(s,a,l){var p=s.abs();if(!(p.t<=0)){var v=this.abs();if(v.t<p.t){a?.fromInt(0),l!=null&&this.copyTo(l);return}l==null&&(l=d());var T=d(),D=this.s,$=s.s,j=this.DB-Q(p[p.t-1]);j>0?(p.lShiftTo(j,T),v.lShiftTo(j,l)):(p.copyTo(T),v.copyTo(l));var ut=T.t,Ct=T[ut-1];if(Ct!=0){var At=Ct*(1<<this.F1)+(ut>1?T[ut-2]>>this.F2:0),Nt=this.FV/At,ne=(1<<this.F1)/At,pe=1<<this.F2,Me=l.t,Be=Me-ut,pn=a??d();for(T.dlShiftTo(Be,pn),l.compareTo(pn)>=0&&(l[l.t++]=1,l.subTo(pn,l)),f.ONE.dlShiftTo(ut,pn),pn.subTo(T,T);T.t<ut;)T[T.t++]=0;for(;--Be>=0;){var Gn=l[--Me]==Ct?this.DM:Math.floor(l[Me]*Nt+(l[Me-1]+pe)*ne);if((l[Me]+=T.am(0,Gn,l,Be,0,ut))<Gn)for(T.dlShiftTo(Be,pn),l.subTo(pn,l);l[Me]<--Gn;)l.subTo(pn,l)}a!=null&&(l.drShiftTo(ut,a),D!=$&&f.ZERO.subTo(a,a)),l.t=ut,l.clamp(),j>0&&l.rShiftTo(j,l),D<0&&f.ZERO.subTo(l,l)}}}function zt(s){var a=d();return this.abs().divRemTo(s,null,a),this.s<0&&a.compareTo(f.ZERO)>0&&s.subTo(a,a),a}function le(s){this.m=s}function ae(s){return s.s<0||s.compareTo(this.m)>=0?s.mod(this.m):s}function dt(s){return s}function wt(s){s.divRemTo(this.m,null,s)}function Pt(s,a,l){s.multiplyTo(a,l),this.reduce(l)}function Vt(s,a){s.squareTo(a),this.reduce(a)}le.prototype.convert=ae,le.prototype.revert=dt,le.prototype.reduce=wt,le.prototype.mulTo=Pt,le.prototype.sqrTo=Vt;function re(){if(this.t<1)return 0;var s=this[0];if((s&1)==0)return 0;var a=s&3;return a=a*(2-(s&15)*a)&15,a=a*(2-(s&255)*a)&255,a=a*(2-((s&65535)*a&65535))&65535,a=a*(2-s*a%this.DV)%this.DV,a>0?this.DV-a:-a}function Ht(s){this.m=s,this.mp=s.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<s.DB-15)-1,this.mt2=2*s.t}function fe(s){var a=d();return s.abs().dlShiftTo(this.m.t,a),a.divRemTo(this.m,null,a),s.s<0&&a.compareTo(f.ZERO)>0&&this.m.subTo(a,a),a}function Ue(s){var a=d();return s.copyTo(a),this.reduce(a),a}function de(s){for(;s.t<=this.mt2;)s[s.t++]=0;for(var a=0;a<this.m.t;++a){var l=s[a]&32767,p=l*this.mpl+((l*this.mph+(s[a]>>15)*this.mpl&this.um)<<15)&s.DM;for(l=a+this.m.t,s[l]+=this.m.am(0,p,s,a,0,this.m.t);s[l]>=s.DV;)s[l]-=s.DV,s[++l]++}s.clamp(),s.drShiftTo(this.m.t,s),s.compareTo(this.m)>=0&&s.subTo(this.m,s)}function ye(s,a){s.squareTo(a),this.reduce(a)}function be(s,a,l){s.multiplyTo(a,l),this.reduce(l)}Ht.prototype.convert=fe,Ht.prototype.revert=Ue,Ht.prototype.reduce=de,Ht.prototype.mulTo=be,Ht.prototype.sqrTo=ye;function xe(){return(this.t>0?this[0]&1:this.s)==0}function Le(s,a){if(s>4294967295||s<1)return f.ONE;var l=d(),p=d(),v=a.convert(this),T=Q(s)-1;for(v.copyTo(l);--T>=0;)if(a.sqrTo(l,p),(s&1<<T)>0)a.mulTo(p,v,l);else{var D=l;l=p,p=D}return a.revert(l)}function He(s,a){var l;return s<256||a.isEven()?l=new le(a):l=new Ht(a),this.exp(s,l)}f.prototype.copyTo=R,f.prototype.fromInt=F,f.prototype.fromString=Y,f.prototype.clamp=C,f.prototype.dlShiftTo=U,f.prototype.drShiftTo=tt,f.prototype.lShiftTo=ct,f.prototype.rShiftTo=mt,f.prototype.subTo=ht,f.prototype.multiplyTo=yt,f.prototype.squareTo=bt,f.prototype.divRemTo=Lt,f.prototype.invDigit=re,f.prototype.isEven=xe,f.prototype.exp=Le,f.prototype.toString=V,f.prototype.negate=W,f.prototype.abs=et,f.prototype.compareTo=nt,f.prototype.bitLength=K,f.prototype.mod=zt,f.prototype.modPowInt=He,f.ZERO=B(0),f.ONE=B(1);function Qe(){var s=d();return this.copyTo(s),s}function Ie(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Re(){return this.t==0?this.s:this[0]<<24>>24}function lt(){return this.t==0?this.s:this[0]<<16>>16}function Je(s){return Math.floor(Math.LN2*this.DB/Math.log(s))}function _e(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function X(s){if(s==null&&(s=10),this.signum()==0||s<2||s>36)return"0";var a=this.chunkSize(s),l=Math.pow(s,a),p=B(l),v=d(),T=d(),D="";for(this.divRemTo(p,v,T);v.signum()>0;)D=(l+T.intValue()).toString(s).substr(1)+D,v.divRemTo(p,v,T);return T.intValue().toString(s)+D}function A(s,a){this.fromInt(0),a==null&&(a=10);for(var l=this.chunkSize(a),p=Math.pow(a,l),v=!1,T=0,D=0,$=0;$<s.length;++$){var j=G(s,$);if(j<0){s.charAt($)=="-"&&this.signum()==0&&(v=!0);continue}D=a*D+j,++T>=l&&(this.dMultiply(p),this.dAddOffset(D,0),T=0,D=0)}T>0&&(this.dMultiply(Math.pow(a,T)),this.dAddOffset(D,0)),v&&f.ZERO.subTo(this,this)}function rt(s,a,l){if(typeof a=="number")if(s<2)this.fromInt(1);else for(this.fromNumber(s,l),this.testBit(s-1)||this.bitwiseTo(f.ONE.shiftLeft(s-1),Dt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(a);)this.dAddOffset(2,0),this.bitLength()>s&&this.subTo(f.ONE.shiftLeft(s-1),this);else{var p=new Array,v=s&7;p.length=(s>>3)+1,a.nextBytes(p),v>0?p[0]&=(1<<v)-1:p[0]=0,this.fromString(p,256)}}function pt(){var s=this.t,a=new Array;a[0]=this.s;var l=this.DB-s*this.DB%8,p,v=0;if(s-- >0)for(l<this.DB&&(p=this[s]>>l)!=(this.s&this.DM)>>l&&(a[v++]=p|this.s<<this.DB-l);s>=0;)l<8?(p=(this[s]&(1<<l)-1)<<8-l,p|=this[--s]>>(l+=this.DB-8)):(p=this[s]>>(l-=8)&255,l<=0&&(l+=this.DB,--s)),(p&128)!=0&&(p|=-256),v==0&&(this.s&128)!=(p&128)&&++v,(v>0||p!=this.s)&&(a[v++]=p);return a}function Tt(s){return this.compareTo(s)==0}function z(s){return this.compareTo(s)<0?this:s}function J(s){return this.compareTo(s)>0?this:s}function k(s,a,l){var p,v,T=Math.min(s.t,this.t);for(p=0;p<T;++p)l[p]=a(this[p],s[p]);if(s.t<this.t){for(v=s.s&this.DM,p=T;p<this.t;++p)l[p]=a(this[p],v);l.t=this.t}else{for(v=this.s&this.DM,p=T;p<s.t;++p)l[p]=a(v,s[p]);l.t=s.t}l.s=a(this.s,s.s),l.clamp()}function q(s,a){return s&a}function ft(s){var a=d();return this.bitwiseTo(s,q,a),a}function Dt(s,a){return s|a}function Mt(s){var a=d();return this.bitwiseTo(s,Dt,a),a}function It(s,a){return s^a}function vt(s){var a=d();return this.bitwiseTo(s,It,a),a}function Bt(s,a){return s&~a}function Gt(s){var a=d();return this.bitwiseTo(s,Bt,a),a}function it(){for(var s=d(),a=0;a<this.t;++a)s[a]=this.DM&~this[a];return s.t=this.t,s.s=~this.s,s}function kt(s){var a=d();return s<0?this.rShiftTo(-s,a):this.lShiftTo(s,a),a}function Et(s){var a=d();return s<0?this.lShiftTo(-s,a):this.rShiftTo(s,a),a}function Xt(s){if(s==0)return-1;var a=0;return(s&65535)==0&&(s>>=16,a+=16),(s&255)==0&&(s>>=8,a+=8),(s&15)==0&&(s>>=4,a+=4),(s&3)==0&&(s>>=2,a+=2),(s&1)==0&&++a,a}function $t(){for(var s=0;s<this.t;++s)if(this[s]!=0)return s*this.DB+Xt(this[s]);return this.s<0?this.t*this.DB:-1}function Rt(s){for(var a=0;s!=0;)s&=s-1,++a;return a}function Ot(){for(var s=0,a=this.s&this.DM,l=0;l<this.t;++l)s+=Rt(this[l]^a);return s}function te(s){var a=Math.floor(s/this.DB);return a>=this.t?this.s!=0:(this[a]&1<<s%this.DB)!=0}function De(s,a){var l=f.ONE.shiftLeft(s);return this.bitwiseTo(l,a,l),l}function Ce(s){return this.changeBit(s,Dt)}function Sn(s){return this.changeBit(s,Bt)}function An(s){return this.changeBit(s,It)}function Ns(s,a){for(var l=0,p=0,v=Math.min(s.t,this.t);l<v;)p+=this[l]+s[l],a[l++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p+=s.s;l<this.t;)p+=this[l],a[l++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;l<s.t;)p+=s[l],a[l++]=p&this.DM,p>>=this.DB;p+=s.s}a.s=p<0?-1:0,p>0?a[l++]=p:p<-1&&(a[l++]=this.DV+p),a.t=l,a.clamp()}function hr(s){var a=d();return this.addTo(s,a),a}function I(s){var a=d();return this.subTo(s,a),a}function Si(s){var a=d();return this.multiplyTo(s,a),a}function Ae(){var s=d();return this.squareTo(s),s}function Ir(s){var a=d();return this.divRemTo(s,a,null),a}function Rr(s){var a=d();return this.divRemTo(s,null,a),a}function Cn(s){var a=d(),l=d();return this.divRemTo(s,a,l),new Array(a,l)}function Hn(s){this[this.t]=this.am(0,s-1,this,0,0,this.t),++this.t,this.clamp()}function Lr(s,a){if(s!=0){for(;this.t<=a;)this[this.t++]=0;for(this[a]+=s;this[a]>=this.DV;)this[a]-=this.DV,++a>=this.t&&(this[this.t++]=0),++this[a]}}function hi(){}function bi(s){return s}function Nr(s,a,l){s.multiplyTo(a,l)}function Fi(s,a){s.squareTo(a)}hi.prototype.convert=bi,hi.prototype.revert=bi,hi.prototype.mulTo=Nr,hi.prototype.sqrTo=Fi;function Dr(s){return this.exp(s,new hi)}function Or(s,a,l){var p=Math.min(this.t+s.t,a);for(l.s=0,l.t=p;p>0;)l[--p]=0;var v;for(v=l.t-this.t;p<v;++p)l[p+this.t]=this.am(0,s[p],l,p,0,this.t);for(v=Math.min(s.t,a);p<v;++p)this.am(0,s[p],l,p,0,a-p);l.clamp()}function Ds(s,a,l){--a;var p=l.t=this.t+s.t-a;for(l.s=0;--p>=0;)l[p]=0;for(p=Math.max(a-this.t,0);p<s.t;++p)l[this.t+p-a]=this.am(a-p,s[p],l,0,0,this.t+p-a);l.clamp(),l.drShiftTo(1,l)}function ui(s){this.r2=d(),this.q3=d(),f.ONE.dlShiftTo(2*s.t,this.r2),this.mu=this.r2.divide(s),this.m=s}function Os(s){if(s.s<0||s.t>2*this.m.t)return s.mod(this.m);if(s.compareTo(this.m)<0)return s;var a=d();return s.copyTo(a),this.reduce(a),a}function Fs(s){return s}function Fr(s){for(s.drShiftTo(this.m.t-1,this.r2),s.t>this.m.t+1&&(s.t=this.m.t+1,s.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);s.compareTo(this.r2)<0;)s.dAddOffset(1,this.m.t+1);for(s.subTo(this.r2,s);s.compareTo(this.m)>=0;)s.subTo(this.m,s)}function N(s,a){s.squareTo(a),this.reduce(a)}function st(s,a,l){s.multiplyTo(a,l),this.reduce(l)}ui.prototype.convert=Os,ui.prototype.revert=Fs,ui.prototype.reduce=Fr,ui.prototype.mulTo=st,ui.prototype.sqrTo=N;function xt(s,a){var l=s.bitLength(),p,v=B(1),T;if(l<=0)return v;l<18?p=1:l<48?p=3:l<144?p=4:l<768?p=5:p=6,l<8?T=new le(a):a.isEven()?T=new ui(a):T=new Ht(a);var D=new Array,$=3,j=p-1,ut=(1<<p)-1;if(D[1]=T.convert(this),p>1){var Ct=d();for(T.sqrTo(D[1],Ct);$<=ut;)D[$]=d(),T.mulTo(Ct,D[$-2],D[$]),$+=2}var At=s.t-1,Nt,ne=!0,pe=d(),Me;for(l=Q(s[At])-1;At>=0;){for(l>=j?Nt=s[At]>>l-j&ut:(Nt=(s[At]&(1<<l+1)-1)<<j-l,At>0&&(Nt|=s[At-1]>>this.DB+l-j)),$=p;(Nt&1)==0;)Nt>>=1,--$;if((l-=$)<0&&(l+=this.DB,--At),ne)D[Nt].copyTo(v),ne=!1;else{for(;$>1;)T.sqrTo(v,pe),T.sqrTo(pe,v),$-=2;$>0?T.sqrTo(v,pe):(Me=v,v=pe,pe=Me),T.mulTo(pe,D[Nt],v)}for(;At>=0&&(s[At]&1<<l)==0;)T.sqrTo(v,pe),Me=v,v=pe,pe=Me,--l<0&&(l=this.DB-1,--At)}return T.revert(v)}function gt(s){var a=this.s<0?this.negate():this.clone(),l=s.s<0?s.negate():s.clone();if(a.compareTo(l)<0){var p=a;a=l,l=p}var v=a.getLowestSetBit(),T=l.getLowestSetBit();if(T<0)return a;for(v<T&&(T=v),T>0&&(a.rShiftTo(T,a),l.rShiftTo(T,l));a.signum()>0;)(v=a.getLowestSetBit())>0&&a.rShiftTo(v,a),(v=l.getLowestSetBit())>0&&l.rShiftTo(v,l),a.compareTo(l)>=0?(a.subTo(l,a),a.rShiftTo(1,a)):(l.subTo(a,l),l.rShiftTo(1,l));return T>0&&l.lShiftTo(T,l),l}function _t(s){if(s<=0)return 0;var a=this.DV%s,l=this.s<0?s-1:0;if(this.t>0)if(a==0)l=this[0]%s;else for(var p=this.t-1;p>=0;--p)l=(a*l+this[p])%s;return l}function qt(s){var a=s.isEven();if(this.isEven()&&a||s.signum()==0)return f.ZERO;for(var l=s.clone(),p=this.clone(),v=B(1),T=B(0),D=B(0),$=B(1);l.signum()!=0;){for(;l.isEven();)l.rShiftTo(1,l),a?((!v.isEven()||!T.isEven())&&(v.addTo(this,v),T.subTo(s,T)),v.rShiftTo(1,v)):T.isEven()||T.subTo(s,T),T.rShiftTo(1,T);for(;p.isEven();)p.rShiftTo(1,p),a?((!D.isEven()||!$.isEven())&&(D.addTo(this,D),$.subTo(s,$)),D.rShiftTo(1,D)):$.isEven()||$.subTo(s,$),$.rShiftTo(1,$);l.compareTo(p)>=0?(l.subTo(p,l),a&&v.subTo(D,v),T.subTo($,T)):(p.subTo(l,p),a&&D.subTo(v,D),$.subTo(T,$))}if(p.compareTo(f.ONE)!=0)return f.ZERO;if($.compareTo(s)>=0)return $.subtract(s);if($.signum()<0)$.addTo(s,$);else return $;return $.signum()<0?$.add(s):$}var Ut=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Yt=(1<<26)/Ut[Ut.length-1];function Kt(s){var a,l=this.abs();if(l.t==1&&l[0]<=Ut[Ut.length-1]){for(a=0;a<Ut.length;++a)if(l[0]==Ut[a])return!0;return!1}if(l.isEven())return!1;for(a=1;a<Ut.length;){for(var p=Ut[a],v=a+1;v<Ut.length&&p<Yt;)p*=Ut[v++];for(p=l.modInt(p);a<v;)if(p%Ut[a++]==0)return!1}return l.millerRabin(s)}function ee(s){var a=this.subtract(f.ONE),l=a.getLowestSetBit();if(l<=0)return!1;var p=a.shiftRight(l);s=s+1>>1,s>Ut.length&&(s=Ut.length);for(var v=d(),T=0;T<s;++T){v.fromInt(Ut[Math.floor(Math.random()*Ut.length)]);var D=v.modPow(p,this);if(D.compareTo(f.ONE)!=0&&D.compareTo(a)!=0){for(var $=1;$++<l&&D.compareTo(a)!=0;)if(D=D.modPowInt(2,this),D.compareTo(f.ONE)==0)return!1;if(D.compareTo(a)!=0)return!1}}return!0}f.prototype.chunkSize=Je,f.prototype.toRadix=X,f.prototype.fromRadix=A,f.prototype.fromNumber=rt,f.prototype.bitwiseTo=k,f.prototype.changeBit=De,f.prototype.addTo=Ns,f.prototype.dMultiply=Hn,f.prototype.dAddOffset=Lr,f.prototype.multiplyLowerTo=Or,f.prototype.multiplyUpperTo=Ds,f.prototype.modInt=_t,f.prototype.millerRabin=ee,f.prototype.clone=Qe,f.prototype.intValue=Ie,f.prototype.byteValue=Re,f.prototype.shortValue=lt,f.prototype.signum=_e,f.prototype.toByteArray=pt,f.prototype.equals=Tt,f.prototype.min=z,f.prototype.max=J,f.prototype.and=ft,f.prototype.or=Mt,f.prototype.xor=vt,f.prototype.andNot=Gt,f.prototype.not=it,f.prototype.shiftLeft=kt,f.prototype.shiftRight=Et,f.prototype.getLowestSetBit=$t,f.prototype.bitCount=Ot,f.prototype.testBit=te,f.prototype.setBit=Ce,f.prototype.clearBit=Sn,f.prototype.flipBit=An,f.prototype.add=hr,f.prototype.subtract=I,f.prototype.multiply=Si,f.prototype.divide=Ir,f.prototype.remainder=Rr,f.prototype.divideAndRemainder=Cn,f.prototype.modPow=xt,f.prototype.modInverse=qt,f.prototype.pow=Dr,f.prototype.gcd=gt,f.prototype.isProbablePrime=Kt,f.prototype.square=Ae;var Wt=f;Wt.prototype.IsNegative=function(){return this.compareTo(Wt.ZERO)==-1},Wt.op_Equality=function(s,a){return s.compareTo(a)==0},Wt.op_Inequality=function(s,a){return s.compareTo(a)!=0},Wt.op_GreaterThan=function(s,a){return s.compareTo(a)>0},Wt.op_LessThan=function(s,a){return s.compareTo(a)<0},Wt.op_Addition=function(s,a){return new Wt(s,void 0,void 0).add(new Wt(a,void 0,void 0))},Wt.op_Subtraction=function(s,a){return new Wt(s,void 0,void 0).subtract(new Wt(a,void 0,void 0))},Wt.Int128Mul=function(s,a){return new Wt(s,void 0,void 0).multiply(new Wt(a,void 0,void 0))},Wt.op_Division=function(s,a){return s.divide(a)},Wt.prototype.ToDouble=function(){return parseFloat(this.toString())};var he=function(s,a){var l;if(typeof Object.getOwnPropertyNames>"u"){for(l in a.prototype)(typeof s.prototype[l]>"u"||s.prototype[l]===Object.prototype[l])&&(s.prototype[l]=a.prototype[l]);for(l in a)typeof s[l]>"u"&&(s[l]=a[l]);s.$baseCtor=a}else{for(var p=Object.getOwnPropertyNames(a.prototype),v=0;v<p.length;v++)typeof Object.getOwnPropertyDescriptor(s.prototype,p[v])>"u"&&Object.defineProperty(s.prototype,p[v],Object.getOwnPropertyDescriptor(a.prototype,p[v]));for(l in a)typeof s[l]>"u"&&(s[l]=a[l]);s.$baseCtor=a}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var s=arguments;this.X=0,this.Y=0,s.length===1?(this.X=s[0].X,this.Y=s[0].Y):s.length===2&&(this.X=s[0],this.Y=s[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(s){this.X=s.X,this.Y=s.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(s,a){this.X=s,this.Y=a},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var s=!0,a=this.m_Parent;a!==null;)s=!s,a=a.m_Parent;return s},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(s){var a=this.m_Childs.length;this.m_Childs.push(s),s.m_Parent=this,s.m_Index=a},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var s=0,a=this.m_AllPolys.length;s<a;s++)this.m_AllPolys[s]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var s=this.m_AllPolys.length;return s>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&s--,s},he(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(s){return Math.abs(s)},n.Math_Max_Int32_Int32=function(s,a){return Math.max(s,a)},r.msie||r.opera||r.safari?n.Cast_Int32=function(s){return s|0}:n.Cast_Int32=function(s){return~~s},typeof Number.toInteger>"u"&&(Number.toInteger=null),r.chrome?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):~~s}:r.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(s){return Number.toInteger(s)}:r.msie7||r.msie8?n.Cast_Int64=function(s){return parseInt(s,10)}:r.msie?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):s|0}:n.Cast_Int64=function(s){return s<0?Math.ceil(s):Math.floor(s)},n.Clear=function(s){s.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var s=arguments,a=s.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,a===3)this.X=s[0],this.Y=s[1],this.Z=s[2];else if(a===2)this.X=s[0],this.Y=s[1],this.Z=0;else if(a===1)if(s[0]instanceof n.DoublePoint){var l=s[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y),this.Z=0}else{var p=s[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(a===2)this.X=s[0],this.Y=s[1];else if(a===1)if(s[0]instanceof n.DoublePoint){var l=s[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y)}else{var p=s[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(s,a){return s.X===a.X&&s.Y===a.Y},n.IntPoint.op_Inequality=function(s,a){return s.X!==a.X||s.Y!==a.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(s){this.X=s.X,this.Y=s.Y,n.use_xyz&&(typeof s.Z>"u"?this.Z=0:this.Z=s.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(s){this.X=n.Clipper.Round(s.X),this.Y=n.Clipper.Round(s.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(s,a,l){this.X=s,this.Y=a,n.use_xyz&&(typeof l>"u"?this.Z=0:this.Z=l)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var s=arguments,a=s.length;if(a===4)this.left=s[0],this.top=s[1],this.right=s[2],this.bottom=s[3];else if(a===1){var l=s[0];this.left=l.left,this.top=l.top,this.right=l.right,this.bottom=l.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(s){this.left=s.left,this.top=s.top,this.right=s.right,this.bottom=s.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(s,a,l,p){this.left=s,this.top=a,this.right=l,this.bottom=p},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(s,a){var l=a.Pt.Y-s.Pt.Y;return l>0?1:l<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(s){return s>-n.ClipperBase.tolerance&&s<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(s){return s.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(s,a){var l=a;do{if(n.IntPoint.op_Equality(l.Pt,s))return!0;l=l.Next}while(l!==a);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(s,a,l,p){return p?s.X===a.X&&s.Y===a.Y||s.X===l.X&&s.Y===l.Y||s.X>a.X==s.X<l.X&&s.Y>a.Y==s.Y<l.Y&&Wt.op_Equality(Wt.Int128Mul(s.X-a.X,l.Y-a.Y),Wt.Int128Mul(l.X-a.X,s.Y-a.Y)):s.X===a.X&&s.Y===a.Y||s.X===l.X&&s.Y===l.Y||s.X>a.X==s.X<l.X&&s.Y>a.Y==s.Y<l.Y&&(s.X-a.X)*(l.Y-a.Y)===(l.X-a.X)*(s.Y-a.Y)},n.ClipperBase.prototype.PointOnPolygon=function(s,a,l){for(var p=a;;){if(this.PointOnLineSegment(s,p.Pt,p.Next.Pt,l))return!0;if(p=p.Next,p===a)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var s=arguments,a=s.length,l,p,v,T,D,$,j;return a===3?(l=s[0],p=s[1],j=s[2],j?Wt.op_Equality(Wt.Int128Mul(l.Delta.Y,p.Delta.X),Wt.Int128Mul(l.Delta.X,p.Delta.Y)):n.Cast_Int64(l.Delta.Y*p.Delta.X)===n.Cast_Int64(l.Delta.X*p.Delta.Y)):a===4?(v=s[0],T=s[1],D=s[2],j=s[3],j?Wt.op_Equality(Wt.Int128Mul(v.Y-T.Y,T.X-D.X),Wt.Int128Mul(v.X-T.X,T.Y-D.Y)):n.Cast_Int64((v.Y-T.Y)*(T.X-D.X))-n.Cast_Int64((v.X-T.X)*(T.Y-D.Y))===0):(v=s[0],T=s[1],D=s[2],$=s[3],j=s[4],j?Wt.op_Equality(Wt.Int128Mul(v.Y-T.Y,D.X-$.X),Wt.Int128Mul(v.X-T.X,D.Y-$.Y)):n.Cast_Int64((v.Y-T.Y)*(D.X-$.X))-n.Cast_Int64((v.X-T.X)*(D.Y-$.Y))===0)},n.ClipperBase.SlopesEqual3=function(s,a,l){return l?Wt.op_Equality(Wt.Int128Mul(s.Delta.Y,a.Delta.X),Wt.Int128Mul(s.Delta.X,a.Delta.Y)):n.Cast_Int64(s.Delta.Y*a.Delta.X)===n.Cast_Int64(s.Delta.X*a.Delta.Y)},n.ClipperBase.SlopesEqual4=function(s,a,l,p){return p?Wt.op_Equality(Wt.Int128Mul(s.Y-a.Y,a.X-l.X),Wt.Int128Mul(s.X-a.X,a.Y-l.Y)):n.Cast_Int64((s.Y-a.Y)*(a.X-l.X))-n.Cast_Int64((s.X-a.X)*(a.Y-l.Y))===0},n.ClipperBase.SlopesEqual5=function(s,a,l,p,v){return v?Wt.op_Equality(Wt.Int128Mul(s.Y-a.Y,l.X-p.X),Wt.Int128Mul(s.X-a.X,l.Y-p.Y)):n.Cast_Int64((s.Y-a.Y)*(l.X-p.X))-n.Cast_Int64((s.X-a.X)*(l.Y-p.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var s=0,a=this.m_edges.length;s<a;++s){for(var l=0,p=this.m_edges[s].length;l<p;++l)this.m_edges[s][l]=null;n.Clear(this.m_edges[s])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var s=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=s}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(s,a){a.Value?(s.X>n.ClipperBase.hiRange||s.Y>n.ClipperBase.hiRange||-s.X>n.ClipperBase.hiRange||-s.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(s.X>n.ClipperBase.loRange||s.Y>n.ClipperBase.loRange||-s.X>n.ClipperBase.loRange||-s.Y>n.ClipperBase.loRange)&&(a.Value=!0,this.RangeTest(s,a))},n.ClipperBase.prototype.InitEdge=function(s,a,l,p){s.Next=a,s.Prev=l,s.Curr.X=p.X,s.Curr.Y=p.Y,n.use_xyz&&(s.Curr.Z=p.Z),s.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(s,a){s.Curr.Y>=s.Next.Curr.Y?(s.Bot.X=s.Curr.X,s.Bot.Y=s.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Curr.Z),s.Top.X=s.Next.Curr.X,s.Top.Y=s.Next.Curr.Y,n.use_xyz&&(s.Top.Z=s.Next.Curr.Z)):(s.Top.X=s.Curr.X,s.Top.Y=s.Curr.Y,n.use_xyz&&(s.Top.Z=s.Curr.Z),s.Bot.X=s.Next.Curr.X,s.Bot.Y=s.Next.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Next.Curr.Z)),this.SetDx(s),s.PolyTyp=a},n.ClipperBase.prototype.FindNextLocMin=function(s){for(var a;;){for(;n.IntPoint.op_Inequality(s.Bot,s.Prev.Bot)||n.IntPoint.op_Equality(s.Curr,s.Top);)s=s.Next;if(s.Dx!==n.ClipperBase.horizontal&&s.Prev.Dx!==n.ClipperBase.horizontal)break;for(;s.Prev.Dx===n.ClipperBase.horizontal;)s=s.Prev;for(a=s;s.Dx===n.ClipperBase.horizontal;)s=s.Next;if(s.Top.Y!==s.Prev.Bot.Y){a.Prev.Bot.X<s.Bot.X&&(s=a);break}}return s},n.ClipperBase.prototype.ProcessBound=function(s,a){var l,p=s,v;if(p.OutIdx===n.ClipperBase.Skip){if(s=p,a){for(;s.Top.Y===s.Next.Bot.Y;)s=s.Next;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Prev}else{for(;s.Top.Y===s.Prev.Bot.Y;)s=s.Prev;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Next}if(s===p)a?p=s.Next:p=s.Prev;else{a?s=p.Next:s=p.Prev;var T=new n.LocalMinima;T.Next=null,T.Y=s.Bot.Y,T.LeftBound=null,T.RightBound=s,s.WindDelta=0,p=this.ProcessBound(s,a),this.InsertLocalMinima(T)}return p}if(s.Dx===n.ClipperBase.horizontal&&(a?l=s.Prev:l=s.Next,l.Dx===n.ClipperBase.horizontal?l.Bot.X!==s.Bot.X&&l.Top.X!==s.Bot.X&&this.ReverseHorizontal(s):l.Bot.X!==s.Bot.X&&this.ReverseHorizontal(s)),l=s,a){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==n.ClipperBase.Skip;)p=p.Next;if(p.Dx===n.ClipperBase.horizontal&&p.Next.OutIdx!==n.ClipperBase.Skip){for(v=p;v.Prev.Dx===n.ClipperBase.horizontal;)v=v.Prev;v.Prev.Top.X>p.Next.Top.X&&(p=v.Prev)}for(;s!==p;)s.NextInLML=s.Next,s.Dx===n.ClipperBase.horizontal&&s!==l&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),s=s.Next;s.Dx===n.ClipperBase.horizontal&&s!==l&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==n.ClipperBase.Skip;)p=p.Prev;if(p.Dx===n.ClipperBase.horizontal&&p.Prev.OutIdx!==n.ClipperBase.Skip){for(v=p;v.Next.Dx===n.ClipperBase.horizontal;)v=v.Next;(v.Next.Top.X===p.Prev.Top.X||v.Next.Top.X>p.Prev.Top.X)&&(p=v.Next)}for(;s!==p;)s.NextInLML=s.Prev,s.Dx===n.ClipperBase.horizontal&&s!==l&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),s=s.Prev;s.Dx===n.ClipperBase.horizontal&&s!==l&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),p=p.Prev}return p},n.ClipperBase.prototype.AddPath=function(s,a,l){n.use_lines?!l&&a===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):l||n.Error("AddPath: Open paths have been disabled.");var p=s.length-1;if(l)for(;p>0&&n.IntPoint.op_Equality(s[p],s[0]);)--p;for(;p>0&&n.IntPoint.op_Equality(s[p],s[p-1]);)--p;if(l&&p<2||!l&&p<1)return!1;for(var v=new Array,T=0;T<=p;T++)v.push(new n.TEdge);var D=!0;v[1].Curr.X=s[1].X,v[1].Curr.Y=s[1].Y,n.use_xyz&&(v[1].Curr.Z=s[1].Z);var $={Value:this.m_UseFullRange};this.RangeTest(s[0],$),this.m_UseFullRange=$.Value,$.Value=this.m_UseFullRange,this.RangeTest(s[p],$),this.m_UseFullRange=$.Value,this.InitEdge(v[0],v[1],v[p],s[0]),this.InitEdge(v[p],v[0],v[p-1],s[p]);for(var T=p-1;T>=1;--T)$.Value=this.m_UseFullRange,this.RangeTest(s[T],$),this.m_UseFullRange=$.Value,this.InitEdge(v[T],v[T+1],v[T-1],s[T]);for(var j=v[0],ut=j,Ct=j;;){if(ut.Curr===ut.Next.Curr&&(l||ut.Next!==j)){if(ut===ut.Next)break;ut===j&&(j=ut.Next),ut=this.RemoveEdge(ut),Ct=ut;continue}if(ut.Prev===ut.Next)break;if(l&&n.ClipperBase.SlopesEqual4(ut.Prev.Curr,ut.Curr,ut.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(ut.Prev.Curr,ut.Curr,ut.Next.Curr))){ut===j&&(j=ut.Next),ut=this.RemoveEdge(ut),ut=ut.Prev,Ct=ut;continue}if(ut=ut.Next,ut===Ct||!l&&ut.Next===j)break}if(!l&&ut===ut.Next||l&&ut.Prev===ut.Next)return!1;l||(this.m_HasOpenPaths=!0,j.Prev.OutIdx=n.ClipperBase.Skip),ut=j;do this.InitEdge2(ut,a),ut=ut.Next,D&&ut.Curr.Y!==j.Curr.Y&&(D=!1);while(ut!==j);if(D){if(l)return!1;ut.Prev.OutIdx=n.ClipperBase.Skip;var At=new n.LocalMinima;for(At.Next=null,At.Y=ut.Bot.Y,At.LeftBound=null,At.RightBound=ut,At.RightBound.Side=n.EdgeSide.esRight,At.RightBound.WindDelta=0;ut.Bot.X!==ut.Prev.Top.X&&this.ReverseHorizontal(ut),ut.Next.OutIdx!==n.ClipperBase.Skip;)ut.NextInLML=ut.Next,ut=ut.Next;return this.InsertLocalMinima(At),this.m_edges.push(v),!0}this.m_edges.push(v);var Nt,ne=null;for(n.IntPoint.op_Equality(ut.Prev.Bot,ut.Prev.Top)&&(ut=ut.Next);ut=this.FindNextLocMin(ut),ut!==ne;){ne===null&&(ne=ut);var At=new n.LocalMinima;At.Next=null,At.Y=ut.Bot.Y,ut.Dx<ut.Prev.Dx?(At.LeftBound=ut.Prev,At.RightBound=ut,Nt=!1):(At.LeftBound=ut,At.RightBound=ut.Prev,Nt=!0),At.LeftBound.Side=n.EdgeSide.esLeft,At.RightBound.Side=n.EdgeSide.esRight,l?At.LeftBound.Next===At.RightBound?At.LeftBound.WindDelta=-1:At.LeftBound.WindDelta=1:At.LeftBound.WindDelta=0,At.RightBound.WindDelta=-At.LeftBound.WindDelta,ut=this.ProcessBound(At.LeftBound,Nt),ut.OutIdx===n.ClipperBase.Skip&&(ut=this.ProcessBound(ut,Nt));var pe=this.ProcessBound(At.RightBound,!Nt);pe.OutIdx===n.ClipperBase.Skip&&(pe=this.ProcessBound(pe,!Nt)),At.LeftBound.OutIdx===n.ClipperBase.Skip?At.LeftBound=null:At.RightBound.OutIdx===n.ClipperBase.Skip&&(At.RightBound=null),this.InsertLocalMinima(At),Nt||(ut=pe)}return!0},n.ClipperBase.prototype.AddPaths=function(s,a,l){for(var p=!1,v=0,T=s.length;v<T;++v)this.AddPath(s[v],a,l)&&(p=!0);return p},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(s,a,l){return n.IntPoint.op_Equality(s,l)||n.IntPoint.op_Equality(s,a)||n.IntPoint.op_Equality(l,a)?!1:s.X!==l.X?a.X>s.X==a.X<l.X:a.Y>s.Y==a.Y<l.Y},n.ClipperBase.prototype.RemoveEdge=function(s){s.Prev.Next=s.Next,s.Next.Prev=s.Prev;var a=s.Next;return s.Prev=null,a},n.ClipperBase.prototype.SetDx=function(s){s.Delta.X=s.Top.X-s.Bot.X,s.Delta.Y=s.Top.Y-s.Bot.Y,s.Delta.Y===0?s.Dx=n.ClipperBase.horizontal:s.Dx=s.Delta.X/s.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(s){if(this.m_MinimaList===null)this.m_MinimaList=s;else if(s.Y>=this.m_MinimaList.Y)s.Next=this.m_MinimaList,this.m_MinimaList=s;else{for(var a=this.m_MinimaList;a.Next!==null&&s.Y<a.Next.Y;)a=a.Next;s.Next=a.Next,a.Next=s}},n.ClipperBase.prototype.PopLocalMinima=function(s,a){return a.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===s?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(s){var a=s.Top.X;s.Top.X=s.Bot.X,s.Bot.X=a,n.use_xyz&&(a=s.Top.Z,s.Top.Z=s.Bot.Z,s.Bot.Z=a)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var s=this.m_MinimaList;s!==null;){this.InsertScanbeam(s.Y);var a=s.LeftBound;a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),a=s.RightBound,a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),s=s.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(s){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=s;else if(s>this.m_Scanbeam.Y){var a=new n.Scanbeam;a.Y=s,a.Next=this.m_Scanbeam,this.m_Scanbeam=a}else{for(var l=this.m_Scanbeam;l.Next!==null&&s<=l.Next.Y;)l=l.Next;if(s===l.Y)return;var p=new n.Scanbeam;p.Y=s,p.Next=l.Next,l.Next=p}},n.ClipperBase.prototype.PopScanbeam=function(s){return this.m_Scanbeam===null?(s.v=0,!1):(s.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var s=new n.OutRec;return s.Idx=n.ClipperBase.Unassigned,s.IsHole=!1,s.IsOpen=!1,s.FirstLeft=null,s.Pts=null,s.BottomPt=null,s.PolyNode=null,this.m_PolyOuts.push(s),s.Idx=this.m_PolyOuts.length-1,s},n.ClipperBase.prototype.DisposeOutRec=function(s){var a=this.m_PolyOuts[s];a.Pts=null,a=null,this.m_PolyOuts[s]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(s){s.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var a=s.PrevInAEL,l=s.NextInAEL;return s.NextInLML.OutIdx=s.OutIdx,a!==null?a.NextInAEL=s.NextInLML:this.m_ActiveEdges=s.NextInLML,l!==null&&(l.PrevInAEL=s.NextInLML),s.NextInLML.Side=s.Side,s.NextInLML.WindDelta=s.WindDelta,s.NextInLML.WindCnt=s.WindCnt,s.NextInLML.WindCnt2=s.WindCnt2,s=s.NextInLML,s.Curr.X=s.Bot.X,s.Curr.Y=s.Bot.Y,s.PrevInAEL=a,s.NextInAEL=l,n.ClipperBase.IsHorizontal(s)||this.InsertScanbeam(s.Top.Y),s},n.ClipperBase.prototype.SwapPositionsInAEL=function(s,a){if(!(s.NextInAEL===s.PrevInAEL||a.NextInAEL===a.PrevInAEL)){if(s.NextInAEL===a){var l=a.NextInAEL;l!==null&&(l.PrevInAEL=s);var p=s.PrevInAEL;p!==null&&(p.NextInAEL=a),a.PrevInAEL=p,a.NextInAEL=s,s.PrevInAEL=a,s.NextInAEL=l}else if(a.NextInAEL===s){var v=s.NextInAEL;v!==null&&(v.PrevInAEL=a);var T=a.PrevInAEL;T!==null&&(T.NextInAEL=s),s.PrevInAEL=T,s.NextInAEL=a,a.PrevInAEL=s,a.NextInAEL=v}else{var D=s.NextInAEL,$=s.PrevInAEL;s.NextInAEL=a.NextInAEL,s.NextInAEL!==null&&(s.NextInAEL.PrevInAEL=s),s.PrevInAEL=a.PrevInAEL,s.PrevInAEL!==null&&(s.PrevInAEL.NextInAEL=s),a.NextInAEL=D,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=a),a.PrevInAEL=$,a.PrevInAEL!==null&&(a.PrevInAEL.NextInAEL=a)}s.PrevInAEL===null?this.m_ActiveEdges=s:a.PrevInAEL===null&&(this.m_ActiveEdges=a)}},n.ClipperBase.prototype.DeleteFromAEL=function(s){var a=s.PrevInAEL,l=s.NextInAEL;a===null&&l===null&&s!==this.m_ActiveEdges||(a!==null?a.NextInAEL=l:this.m_ActiveEdges=l,l!==null&&(l.PrevInAEL=a),s.NextInAEL=null,s.PrevInAEL=null)},n.Clipper=function(s){typeof s>"u"&&(s=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&s)!==0,this.StrictlySimple=(2&s)!==0,this.PreserveCollinear=(4&s)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(s){var a=new n.Maxima;if(a.X=s,this.m_Maxima===null)this.m_Maxima=a,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(s<this.m_Maxima.X)a.Next=this.m_Maxima,a.Prev=null,this.m_Maxima=a;else{for(var l=this.m_Maxima;l.Next!==null&&s>=l.Next.X;)l=l.Next;if(s===l.X)return;a.Next=l.Next,a.Prev=l,l.Next!==null&&(l.Next.Prev=a),l.Next=a}},n.Clipper.prototype.Execute=function(){var s=arguments,a=s.length,l=s[1]instanceof n.PolyTree;if(a===4&&!l){var p=s[0],v=s[1],T=s[2],D=s[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(v),this.m_SubjFillType=T,this.m_ClipFillType=D,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var $=this.ExecuteInternal();$&&this.BuildResult(v)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return $}else if(a===4&&l){var p=s[0],j=s[1],T=s[2],D=s[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=T,this.m_ClipFillType=D,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var $=this.ExecuteInternal();$&&this.BuildResult2(j)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return $}else if(a===2&&!l){var p=s[0],v=s[1];return this.Execute(p,v,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(a===2&&l){var p=s[0],j=s[1];return this.Execute(p,j,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(s){if(!(s.FirstLeft===null||s.IsHole!==s.FirstLeft.IsHole&&s.FirstLeft.Pts!==null)){for(var a=s.FirstLeft;a!==null&&(a.IsHole===s.IsHole||a.Pts===null);)a=a.FirstLeft;s.FirstLeft=a}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var s={},a={};if(!this.PopScanbeam(s))return!1;for(this.InsertLocalMinimaIntoAEL(s.v);this.PopScanbeam(a)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(a.v))return!1;this.ProcessEdgesAtTopOfScanbeam(a.v),s.v=a.v,this.InsertLocalMinimaIntoAEL(s.v)}var l,p,v;for(p=0,v=this.m_PolyOuts.length;p<v;p++)l=this.m_PolyOuts[p],!(l.Pts===null||l.IsOpen)&&(l.IsHole^this.ReverseSolution)==this.Area$1(l)>0&&this.ReversePolyPtLinks(l.Pts);for(this.JoinCommonEdges(),p=0,v=this.m_PolyOuts.length;p<v;p++)l=this.m_PolyOuts[p],l.Pts!==null&&(l.IsOpen?this.FixupOutPolyline(l):this.FixupOutPolygon(l));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var s=0,a=this.m_PolyOuts.length;s<a;++s)this.DisposeOutRec(s);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(s,a,l){var p=new n.Join;p.OutPt1=s,p.OutPt2=a,p.OffPt.X=l.X,p.OffPt.Y=l.Y,n.use_xyz&&(p.OffPt.Z=l.Z),this.m_Joins.push(p)},n.Clipper.prototype.AddGhostJoin=function(s,a){var l=new n.Join;l.OutPt1=s,l.OffPt.X=a.X,l.OffPt.Y=a.Y,n.use_xyz&&(l.OffPt.Z=a.Z),this.m_GhostJoins.push(l)},n.Clipper.prototype.SetZ=function(s,a,l){if(this.ZFillFunction!==null){if(s.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(s,a.Bot)?s.Z=a.Bot.Z:n.IntPoint.op_Equality(s,a.Top)?s.Z=a.Top.Z:n.IntPoint.op_Equality(s,l.Bot)?s.Z=l.Bot.Z:n.IntPoint.op_Equality(s,l.Top)?s.Z=l.Top.Z:this.ZFillFunction(a.Bot,a.Top,l.Bot,l.Top,s)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(s){for(var a={},l,p;this.PopLocalMinima(s,a);){l=a.v.LeftBound,p=a.v.RightBound;var v=null;if(l===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(v=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(l,null),this.SetWindingCount(l),this.IsContributing(l)&&(v=this.AddOutPt(l,l.Bot)),this.InsertScanbeam(l.Top.Y)):(this.InsertEdgeIntoAEL(l,null),this.InsertEdgeIntoAEL(p,l),this.SetWindingCount(l),p.WindCnt=l.WindCnt,p.WindCnt2=l.WindCnt2,this.IsContributing(l)&&(v=this.AddLocalMinPoly(l,p,l.Bot)),this.InsertScanbeam(l.Top.Y)),p!==null&&(n.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(l===null||p===null)){if(v!==null&&n.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var T=0,D=this.m_GhostJoins.length;T<D;T++){var $=this.m_GhostJoins[T];this.HorzSegmentsOverlap($.OutPt1.Pt.X,$.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin($.OutPt1,v,$.OffPt)}if(l.OutIdx>=0&&l.PrevInAEL!==null&&l.PrevInAEL.Curr.X===l.Bot.X&&l.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(l.PrevInAEL.Curr,l.PrevInAEL.Top,l.Curr,l.Top,this.m_UseFullRange)&&l.WindDelta!==0&&l.PrevInAEL.WindDelta!==0){var j=this.AddOutPt(l.PrevInAEL,l.Bot);this.AddJoin(v,j,l.Top)}if(l.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var j=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(v,j,p.Top)}var ut=l.NextInAEL;if(ut!==null)for(;ut!==p;)this.IntersectEdges(p,ut,l.Curr),ut=ut.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(s,a){if(this.m_ActiveEdges===null)s.PrevInAEL=null,s.NextInAEL=null,this.m_ActiveEdges=s;else if(a===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,s))s.PrevInAEL=null,s.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=s,this.m_ActiveEdges=s;else{for(a===null&&(a=this.m_ActiveEdges);a.NextInAEL!==null&&!this.E2InsertsBeforeE1(a.NextInAEL,s);)a=a.NextInAEL;s.NextInAEL=a.NextInAEL,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=s),s.PrevInAEL=a,a.NextInAEL=s}},n.Clipper.prototype.E2InsertsBeforeE1=function(s,a){return a.Curr.X===s.Curr.X?a.Top.Y>s.Top.Y?a.Top.X<n.Clipper.TopX(s,a.Top.Y):s.Top.X>n.Clipper.TopX(a,s.Top.Y):a.Curr.X<s.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(s){var a,l;switch(s.PolyTyp===n.PolyType.ptSubject?(a=this.m_SubjFillType,l=this.m_ClipFillType):(a=this.m_ClipFillType,l=this.m_SubjFillType),a){case n.PolyFillType.pftEvenOdd:if(s.WindDelta===0&&s.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(s.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(s.WindCnt!==1)return!1;break;default:if(s.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctUnion:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}case n.ClipType.ctDifference:if(s.PolyTyp===n.PolyType.ptSubject)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctXor:if(s.WindDelta===0)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(s){for(var a=s.PrevInAEL;a!==null&&(a.PolyTyp!==s.PolyTyp||a.WindDelta===0);)a=a.PrevInAEL;if(a===null){var l=s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;s.WindDelta===0?s.WindCnt=l===n.PolyFillType.pftNegative?-1:1:s.WindCnt=s.WindDelta,s.WindCnt2=0,a=this.m_ActiveEdges}else if(s.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)s.WindCnt=1,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;else if(this.IsEvenOddFillType(s)){if(s.WindDelta===0){for(var p=!0,v=a.PrevInAEL;v!==null;)v.PolyTyp===a.PolyTyp&&v.WindDelta!==0&&(p=!p),v=v.PrevInAEL;s.WindCnt=p?0:1}else s.WindCnt=s.WindDelta;s.WindCnt2=a.WindCnt2,a=a.NextInAEL}else a.WindCnt*a.WindDelta<0?Math.abs(a.WindCnt)>1?a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta:s.WindCnt=s.WindDelta===0?1:s.WindDelta:s.WindDelta===0?s.WindCnt=a.WindCnt<0?a.WindCnt-1:a.WindCnt+1:a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;if(this.IsEvenOddAltFillType(s))for(;a!==s;)a.WindDelta!==0&&(s.WindCnt2=s.WindCnt2===0?1:0),a=a.NextInAEL;else for(;a!==s;)s.WindCnt2+=a.WindDelta,a=a.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(s){this.m_SortedEdges===null?(this.m_SortedEdges=s,s.PrevInSEL=null,s.NextInSEL=null):(s.NextInSEL=this.m_SortedEdges,s.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=s,this.m_SortedEdges=s)},n.Clipper.prototype.PopEdgeFromSEL=function(s){if(s.v=this.m_SortedEdges,s.v===null)return!1;var a=s.v;return this.m_SortedEdges=s.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),a.NextInSEL=null,a.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var s=this.m_ActiveEdges;for(this.m_SortedEdges=s;s!==null;)s.PrevInSEL=s.PrevInAEL,s.NextInSEL=s.NextInAEL,s=s.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(s,a){if(!(s.NextInSEL===null&&s.PrevInSEL===null)&&!(a.NextInSEL===null&&a.PrevInSEL===null)){if(s.NextInSEL===a){var l=a.NextInSEL;l!==null&&(l.PrevInSEL=s);var p=s.PrevInSEL;p!==null&&(p.NextInSEL=a),a.PrevInSEL=p,a.NextInSEL=s,s.PrevInSEL=a,s.NextInSEL=l}else if(a.NextInSEL===s){var l=s.NextInSEL;l!==null&&(l.PrevInSEL=a);var p=a.PrevInSEL;p!==null&&(p.NextInSEL=s),s.PrevInSEL=p,s.NextInSEL=a,a.PrevInSEL=s,a.NextInSEL=l}else{var l=s.NextInSEL,p=s.PrevInSEL;s.NextInSEL=a.NextInSEL,s.NextInSEL!==null&&(s.NextInSEL.PrevInSEL=s),s.PrevInSEL=a.PrevInSEL,s.PrevInSEL!==null&&(s.PrevInSEL.NextInSEL=s),a.NextInSEL=l,a.NextInSEL!==null&&(a.NextInSEL.PrevInSEL=a),a.PrevInSEL=p,a.PrevInSEL!==null&&(a.PrevInSEL.NextInSEL=a)}s.PrevInSEL===null?this.m_SortedEdges=s:a.PrevInSEL===null&&(this.m_SortedEdges=a)}},n.Clipper.prototype.AddLocalMaxPoly=function(s,a,l){this.AddOutPt(s,l),a.WindDelta===0&&this.AddOutPt(a,l),s.OutIdx===a.OutIdx?(s.OutIdx=-1,a.OutIdx=-1):s.OutIdx<a.OutIdx?this.AppendPolygon(s,a):this.AppendPolygon(a,s)},n.Clipper.prototype.AddLocalMinPoly=function(s,a,l){var p,v,T;if(n.ClipperBase.IsHorizontal(a)||s.Dx>a.Dx?(p=this.AddOutPt(s,l),a.OutIdx=s.OutIdx,s.Side=n.EdgeSide.esLeft,a.Side=n.EdgeSide.esRight,v=s,v.PrevInAEL===a?T=a.PrevInAEL:T=v.PrevInAEL):(p=this.AddOutPt(a,l),s.OutIdx=a.OutIdx,s.Side=n.EdgeSide.esRight,a.Side=n.EdgeSide.esLeft,v=a,v.PrevInAEL===s?T=s.PrevInAEL:T=v.PrevInAEL),T!==null&&T.OutIdx>=0&&T.Top.Y<l.Y&&v.Top.Y<l.Y){var D=n.Clipper.TopX(T,l.Y),$=n.Clipper.TopX(v,l.Y);if(D===$&&v.WindDelta!==0&&T.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(D,l.Y),T.Top,new n.IntPoint2($,l.Y),v.Top,this.m_UseFullRange)){var j=this.AddOutPt(T,l);this.AddJoin(p,j,v.Top)}}return p},n.Clipper.prototype.AddOutPt=function(s,a){if(s.OutIdx<0){var l=this.CreateOutRec();l.IsOpen=s.WindDelta===0;var p=new n.OutPt;return l.Pts=p,p.Idx=l.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=p,p.Prev=p,l.IsOpen||this.SetHoleState(s,l),s.OutIdx=l.Idx,p}else{var l=this.m_PolyOuts[s.OutIdx],v=l.Pts,T=s.Side===n.EdgeSide.esLeft;if(T&&n.IntPoint.op_Equality(a,v.Pt))return v;if(!T&&n.IntPoint.op_Equality(a,v.Prev.Pt))return v.Prev;var p=new n.OutPt;return p.Idx=l.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=v,p.Prev=v.Prev,p.Prev.Next=p,v.Prev=p,T&&(l.Pts=p),p}},n.Clipper.prototype.GetLastOutPt=function(s){var a=this.m_PolyOuts[s.OutIdx];return s.Side===n.EdgeSide.esLeft?a.Pts:a.Pts.Prev},n.Clipper.prototype.SwapPoints=function(s,a){var l=new n.IntPoint1(s.Value);s.Value.X=a.Value.X,s.Value.Y=a.Value.Y,n.use_xyz&&(s.Value.Z=a.Value.Z),a.Value.X=l.X,a.Value.Y=l.Y,n.use_xyz&&(a.Value.Z=l.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(s,a,l,p){var v;return s>a&&(v=s,s=a,a=v),l>p&&(v=l,l=p,p=v),s<p&&l<a},n.Clipper.prototype.SetHoleState=function(s,a){for(var l=s.PrevInAEL,p=null;l!==null;)l.OutIdx>=0&&l.WindDelta!==0&&(p===null?p=l:p.OutIdx===l.OutIdx&&(p=null)),l=l.PrevInAEL;p===null?(a.FirstLeft=null,a.IsHole=!1):(a.FirstLeft=this.m_PolyOuts[p.OutIdx],a.IsHole=!a.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(s,a){return s.Y===a.Y?n.ClipperBase.horizontal:(a.X-s.X)/(a.Y-s.Y)},n.Clipper.prototype.FirstIsBottomPt=function(s,a){for(var l=s.Prev;n.IntPoint.op_Equality(l.Pt,s.Pt)&&l!==s;)l=l.Prev;var p=Math.abs(this.GetDx(s.Pt,l.Pt));for(l=s.Next;n.IntPoint.op_Equality(l.Pt,s.Pt)&&l!==s;)l=l.Next;var v=Math.abs(this.GetDx(s.Pt,l.Pt));for(l=a.Prev;n.IntPoint.op_Equality(l.Pt,a.Pt)&&l!==a;)l=l.Prev;var T=Math.abs(this.GetDx(a.Pt,l.Pt));for(l=a.Next;n.IntPoint.op_Equality(l.Pt,a.Pt)&&l!==a;)l=l.Next;var D=Math.abs(this.GetDx(a.Pt,l.Pt));return Math.max(p,v)===Math.max(T,D)&&Math.min(p,v)===Math.min(T,D)?this.Area(s)>0:p>=T&&p>=D||v>=T&&v>=D},n.Clipper.prototype.GetBottomPt=function(s){for(var a=null,l=s.Next;l!==s;)l.Pt.Y>s.Pt.Y?(s=l,a=null):l.Pt.Y===s.Pt.Y&&l.Pt.X<=s.Pt.X&&(l.Pt.X<s.Pt.X?(a=null,s=l):l.Next!==s&&l.Prev!==s&&(a=l)),l=l.Next;if(a!==null)for(;a!==l;)for(this.FirstIsBottomPt(l,a)||(s=a),a=a.Next;n.IntPoint.op_Inequality(a.Pt,s.Pt);)a=a.Next;return s},n.Clipper.prototype.GetLowermostRec=function(s,a){s.BottomPt===null&&(s.BottomPt=this.GetBottomPt(s.Pts)),a.BottomPt===null&&(a.BottomPt=this.GetBottomPt(a.Pts));var l=s.BottomPt,p=a.BottomPt;return l.Pt.Y>p.Pt.Y?s:l.Pt.Y<p.Pt.Y?a:l.Pt.X<p.Pt.X?s:l.Pt.X>p.Pt.X||l.Next===l?a:p.Next===p||this.FirstIsBottomPt(l,p)?s:a},n.Clipper.prototype.OutRec1RightOfOutRec2=function(s,a){do if(s=s.FirstLeft,s===a)return!0;while(s!==null);return!1},n.Clipper.prototype.GetOutRec=function(s){for(var a=this.m_PolyOuts[s];a!==this.m_PolyOuts[a.Idx];)a=this.m_PolyOuts[a.Idx];return a},n.Clipper.prototype.AppendPolygon=function(s,a){var l=this.m_PolyOuts[s.OutIdx],p=this.m_PolyOuts[a.OutIdx],v;this.OutRec1RightOfOutRec2(l,p)?v=p:this.OutRec1RightOfOutRec2(p,l)?v=l:v=this.GetLowermostRec(l,p);var T=l.Pts,D=T.Prev,$=p.Pts,j=$.Prev;s.Side===n.EdgeSide.esLeft?a.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks($),$.Next=T,T.Prev=$,D.Next=j,j.Prev=D,l.Pts=j):(j.Next=T,T.Prev=j,$.Prev=D,D.Next=$,l.Pts=$):a.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks($),D.Next=j,j.Prev=D,$.Next=T,T.Prev=$):(D.Next=$,$.Prev=D,T.Prev=j,j.Next=T),l.BottomPt=null,v===p&&(p.FirstLeft!==l&&(l.FirstLeft=p.FirstLeft),l.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=l;var ut=s.OutIdx,Ct=a.OutIdx;s.OutIdx=-1,a.OutIdx=-1;for(var At=this.m_ActiveEdges;At!==null;){if(At.OutIdx===Ct){At.OutIdx=ut,At.Side=s.Side;break}At=At.NextInAEL}p.Idx=l.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(s){if(s!==null){var a,l;a=s;do l=a.Next,a.Next=a.Prev,a.Prev=l,a=l;while(a!==s)}},n.Clipper.SwapSides=function(s,a){var l=s.Side;s.Side=a.Side,a.Side=l},n.Clipper.SwapPolyIndexes=function(s,a){var l=s.OutIdx;s.OutIdx=a.OutIdx,a.OutIdx=l},n.Clipper.prototype.IntersectEdges=function(s,a,l){var p=s.OutIdx>=0,v=a.OutIdx>=0;if(n.use_xyz&&this.SetZ(l,s,a),n.use_lines&&(s.WindDelta===0||a.WindDelta===0)){if(s.WindDelta===0&&a.WindDelta===0)return;s.PolyTyp===a.PolyTyp&&s.WindDelta!==a.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?s.WindDelta===0?v&&(this.AddOutPt(s,l),p&&(s.OutIdx=-1)):p&&(this.AddOutPt(a,l),v&&(a.OutIdx=-1)):s.PolyTyp!==a.PolyTyp&&(s.WindDelta===0&&Math.abs(a.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||a.WindCnt2===0)?(this.AddOutPt(s,l),p&&(s.OutIdx=-1)):a.WindDelta===0&&Math.abs(s.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||s.WindCnt2===0)&&(this.AddOutPt(a,l),v&&(a.OutIdx=-1)));return}if(s.PolyTyp===a.PolyTyp)if(this.IsEvenOddFillType(s)){var T=s.WindCnt;s.WindCnt=a.WindCnt,a.WindCnt=T}else s.WindCnt+a.WindDelta===0?s.WindCnt=-s.WindCnt:s.WindCnt+=a.WindDelta,a.WindCnt-s.WindDelta===0?a.WindCnt=-a.WindCnt:a.WindCnt-=s.WindDelta;else this.IsEvenOddFillType(a)?s.WindCnt2=s.WindCnt2===0?1:0:s.WindCnt2+=a.WindDelta,this.IsEvenOddFillType(s)?a.WindCnt2=a.WindCnt2===0?1:0:a.WindCnt2-=s.WindDelta;var D,$,j,ut;s.PolyTyp===n.PolyType.ptSubject?(D=this.m_SubjFillType,j=this.m_ClipFillType):(D=this.m_ClipFillType,j=this.m_SubjFillType),a.PolyTyp===n.PolyType.ptSubject?($=this.m_SubjFillType,ut=this.m_ClipFillType):($=this.m_ClipFillType,ut=this.m_SubjFillType);var Ct,At;switch(D){case n.PolyFillType.pftPositive:Ct=s.WindCnt;break;case n.PolyFillType.pftNegative:Ct=-s.WindCnt;break;default:Ct=Math.abs(s.WindCnt);break}switch($){case n.PolyFillType.pftPositive:At=a.WindCnt;break;case n.PolyFillType.pftNegative:At=-a.WindCnt;break;default:At=Math.abs(a.WindCnt);break}if(p&&v)Ct!==0&&Ct!==1||At!==0&&At!==1||s.PolyTyp!==a.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(s,a,l):(this.AddOutPt(s,l),this.AddOutPt(a,l),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(p)(At===0||At===1)&&(this.AddOutPt(s,l),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(v)(Ct===0||Ct===1)&&(this.AddOutPt(a,l),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if((Ct===0||Ct===1)&&(At===0||At===1)){var Nt,ne;switch(j){case n.PolyFillType.pftPositive:Nt=s.WindCnt2;break;case n.PolyFillType.pftNegative:Nt=-s.WindCnt2;break;default:Nt=Math.abs(s.WindCnt2);break}switch(ut){case n.PolyFillType.pftPositive:ne=a.WindCnt2;break;case n.PolyFillType.pftNegative:ne=-a.WindCnt2;break;default:ne=Math.abs(a.WindCnt2);break}if(s.PolyTyp!==a.PolyTyp)this.AddLocalMinPoly(s,a,l);else if(Ct===1&&At===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Nt>0&&ne>0&&this.AddLocalMinPoly(s,a,l);break;case n.ClipType.ctUnion:Nt<=0&&ne<=0&&this.AddLocalMinPoly(s,a,l);break;case n.ClipType.ctDifference:(s.PolyTyp===n.PolyType.ptClip&&Nt>0&&ne>0||s.PolyTyp===n.PolyType.ptSubject&&Nt<=0&&ne<=0)&&this.AddLocalMinPoly(s,a,l);break;case n.ClipType.ctXor:this.AddLocalMinPoly(s,a,l);break}else n.Clipper.SwapSides(s,a)}},n.Clipper.prototype.DeleteFromSEL=function(s){var a=s.PrevInSEL,l=s.NextInSEL;a===null&&l===null&&s!==this.m_SortedEdges||(a!==null?a.NextInSEL=l:this.m_SortedEdges=l,l!==null&&(l.PrevInSEL=a),s.NextInSEL=null,s.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var s={};this.PopEdgeFromSEL(s);)this.ProcessHorizontal(s.v)},n.Clipper.prototype.GetHorzDirection=function(s,a){s.Bot.X<s.Top.X?(a.Left=s.Bot.X,a.Right=s.Top.X,a.Dir=n.Direction.dLeftToRight):(a.Left=s.Top.X,a.Right=s.Bot.X,a.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(s){var a={Dir:null,Left:null,Right:null};this.GetHorzDirection(s,a);for(var l=a.Dir,p=a.Left,v=a.Right,T=s.WindDelta===0,D=s,$=null;D.NextInLML!==null&&n.ClipperBase.IsHorizontal(D.NextInLML);)D=D.NextInLML;D.NextInLML===null&&($=this.GetMaximaPair(D));var j=this.m_Maxima;if(j!==null)if(l===n.Direction.dLeftToRight){for(;j!==null&&j.X<=s.Bot.X;)j=j.Next;j!==null&&j.X>=D.Top.X&&(j=null)}else{for(;j.Next!==null&&j.Next.X<s.Bot.X;)j=j.Next;j.X<=D.Top.X&&(j=null)}for(var ut=null;;){for(var Ct=s===D,At=this.GetNextInAEL(s,l);At!==null;){if(j!==null)if(l===n.Direction.dLeftToRight)for(;j!==null&&j.X<At.Curr.X;)s.OutIdx>=0&&!T&&this.AddOutPt(s,new n.IntPoint2(j.X,s.Bot.Y)),j=j.Next;else for(;j!==null&&j.X>At.Curr.X;)s.OutIdx>=0&&!T&&this.AddOutPt(s,new n.IntPoint2(j.X,s.Bot.Y)),j=j.Prev;if(l===n.Direction.dLeftToRight&&At.Curr.X>v||l===n.Direction.dRightToLeft&&At.Curr.X<p||At.Curr.X===s.Top.X&&s.NextInLML!==null&&At.Dx<s.NextInLML.Dx)break;if(s.OutIdx>=0&&!T){n.use_xyz&&(l===n.Direction.dLeftToRight?this.SetZ(At.Curr,s,At):this.SetZ(At.Curr,At,s)),ut=this.AddOutPt(s,At.Curr);for(var Nt=this.m_SortedEdges;Nt!==null;){if(Nt.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,Nt.Bot.X,Nt.Top.X)){var ne=this.GetLastOutPt(Nt);this.AddJoin(ne,ut,Nt.Top)}Nt=Nt.NextInSEL}this.AddGhostJoin(ut,s.Bot)}if(At===$&&Ct){s.OutIdx>=0&&this.AddLocalMaxPoly(s,$,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL($);return}if(l===n.Direction.dLeftToRight){var pe=new n.IntPoint2(At.Curr.X,s.Curr.Y);this.IntersectEdges(s,At,pe)}else{var pe=new n.IntPoint2(At.Curr.X,s.Curr.Y);this.IntersectEdges(At,s,pe)}var Me=this.GetNextInAEL(At,l);this.SwapPositionsInAEL(s,At),At=Me}if(s.NextInLML===null||!n.ClipperBase.IsHorizontal(s.NextInLML))break;s=this.UpdateEdgeIntoAEL(s),s.OutIdx>=0&&this.AddOutPt(s,s.Bot),a={Dir:l,Left:p,Right:v},this.GetHorzDirection(s,a),l=a.Dir,p=a.Left,v=a.Right}if(s.OutIdx>=0&&ut===null){ut=this.GetLastOutPt(s);for(var Nt=this.m_SortedEdges;Nt!==null;){if(Nt.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,Nt.Bot.X,Nt.Top.X)){var ne=this.GetLastOutPt(Nt);this.AddJoin(ne,ut,Nt.Top)}Nt=Nt.NextInSEL}this.AddGhostJoin(ut,s.Top)}if(s.NextInLML!==null)if(s.OutIdx>=0){if(ut=this.AddOutPt(s,s.Top),s=this.UpdateEdgeIntoAEL(s),s.WindDelta===0)return;var Be=s.PrevInAEL,Me=s.NextInAEL;if(Be!==null&&Be.Curr.X===s.Bot.X&&Be.Curr.Y===s.Bot.Y&&Be.WindDelta===0&&Be.OutIdx>=0&&Be.Curr.Y>Be.Top.Y&&n.ClipperBase.SlopesEqual3(s,Be,this.m_UseFullRange)){var ne=this.AddOutPt(Be,s.Bot);this.AddJoin(ut,ne,s.Top)}else if(Me!==null&&Me.Curr.X===s.Bot.X&&Me.Curr.Y===s.Bot.Y&&Me.WindDelta!==0&&Me.OutIdx>=0&&Me.Curr.Y>Me.Top.Y&&n.ClipperBase.SlopesEqual3(s,Me,this.m_UseFullRange)){var ne=this.AddOutPt(Me,s.Bot);this.AddJoin(ut,ne,s.Top)}}else s=this.UpdateEdgeIntoAEL(s);else s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s)},n.Clipper.prototype.GetNextInAEL=function(s,a){return a===n.Direction.dLeftToRight?s.NextInAEL:s.PrevInAEL},n.Clipper.prototype.IsMinima=function(s){return s!==null&&s.Prev.NextInLML!==s&&s.Next.NextInLML!==s},n.Clipper.prototype.IsMaxima=function(s,a){return s!==null&&s.Top.Y===a&&s.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(s,a){return s.Top.Y===a&&s.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(s){return n.IntPoint.op_Equality(s.Next.Top,s.Top)&&s.Next.NextInLML===null?s.Next:n.IntPoint.op_Equality(s.Prev.Top,s.Top)&&s.Prev.NextInLML===null?s.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(s){var a=this.GetMaximaPair(s);return a===null||a.OutIdx===n.ClipperBase.Skip||a.NextInAEL===a.PrevInAEL&&!n.ClipperBase.IsHorizontal(a)?null:a},n.Clipper.prototype.ProcessIntersections=function(s){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(s),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(s){if(this.m_ActiveEdges!==null){var a=this.m_ActiveEdges;for(this.m_SortedEdges=a;a!==null;)a.PrevInSEL=a.PrevInAEL,a.NextInSEL=a.NextInAEL,a.Curr.X=n.Clipper.TopX(a,s),a=a.NextInAEL;for(var l=!0;l&&this.m_SortedEdges!==null;){for(l=!1,a=this.m_SortedEdges;a.NextInSEL!==null;){var p=a.NextInSEL,v=new n.IntPoint0;if(a.Curr.X>p.Curr.X){this.IntersectPoint(a,p,v),v.Y<s&&(v=new n.IntPoint2(n.Clipper.TopX(a,s),s));var T=new n.IntersectNode;T.Edge1=a,T.Edge2=p,T.Pt.X=v.X,T.Pt.Y=v.Y,n.use_xyz&&(T.Pt.Z=v.Z),this.m_IntersectList.push(T),this.SwapPositionsInSEL(a,p),l=!0}else a=p}if(a.PrevInSEL!==null)a.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(s){return s.Edge1.NextInSEL===s.Edge2||s.Edge1.PrevInSEL===s.Edge2},n.Clipper.IntersectNodeSort=function(s,a){return a.Pt.Y-s.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var s=this.m_IntersectList.length,a=0;a<s;a++){if(!this.EdgesAdjacent(this.m_IntersectList[a])){for(var l=a+1;l<s&&!this.EdgesAdjacent(this.m_IntersectList[l]);)l++;if(l===s)return!1;var p=this.m_IntersectList[a];this.m_IntersectList[a]=this.m_IntersectList[l],this.m_IntersectList[l]=p}this.SwapPositionsInSEL(this.m_IntersectList[a].Edge1,this.m_IntersectList[a].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var s=0,a=this.m_IntersectList.length;s<a;s++){var l=this.m_IntersectList[s];this.IntersectEdges(l.Edge1,l.Edge2,l.Pt),this.SwapPositionsInAEL(l.Edge1,l.Edge2)}this.m_IntersectList.length=0};var jt=function(s){return s<0?Math.ceil(s-.5):Math.round(s)},Pe=function(s){return s<0?Math.ceil(s-.5):Math.floor(s+.5)},We=function(s){return s<0?-Math.round(Math.abs(s)):Math.round(s)},Ee=function(s){return s<0?(s-=.5,s<-2147483648?Math.ceil(s):s|0):(s+=.5,s>2147483647?Math.floor(s):s|0)};r.msie?n.Clipper.Round=jt:r.chromium?n.Clipper.Round=We:r.safari?n.Clipper.Round=Ee:n.Clipper.Round=Pe,n.Clipper.TopX=function(s,a){return a===s.Top.Y?s.Top.X:s.Bot.X+n.Clipper.Round(s.Dx*(a-s.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(s,a,l){l.X=0,l.Y=0;var p,v;if(s.Dx===a.Dx){l.Y=s.Curr.Y,l.X=n.Clipper.TopX(s,l.Y);return}if(s.Delta.X===0)l.X=s.Bot.X,n.ClipperBase.IsHorizontal(a)?l.Y=a.Bot.Y:(v=a.Bot.Y-a.Bot.X/a.Dx,l.Y=n.Clipper.Round(l.X/a.Dx+v));else if(a.Delta.X===0)l.X=a.Bot.X,n.ClipperBase.IsHorizontal(s)?l.Y=s.Bot.Y:(p=s.Bot.Y-s.Bot.X/s.Dx,l.Y=n.Clipper.Round(l.X/s.Dx+p));else{p=s.Bot.X-s.Bot.Y*s.Dx,v=a.Bot.X-a.Bot.Y*a.Dx;var T=(v-p)/(s.Dx-a.Dx);l.Y=n.Clipper.Round(T),Math.abs(s.Dx)<Math.abs(a.Dx)?l.X=n.Clipper.Round(s.Dx*T+p):l.X=n.Clipper.Round(a.Dx*T+v)}if(l.Y<s.Top.Y||l.Y<a.Top.Y){if(s.Top.Y>a.Top.Y)return l.Y=s.Top.Y,l.X=n.Clipper.TopX(a,s.Top.Y),l.X<s.Top.X;l.Y=a.Top.Y,Math.abs(s.Dx)<Math.abs(a.Dx)?l.X=n.Clipper.TopX(s,l.Y):l.X=n.Clipper.TopX(a,l.Y)}l.Y>s.Curr.Y&&(l.Y=s.Curr.Y,Math.abs(s.Dx)>Math.abs(a.Dx)?l.X=n.Clipper.TopX(a,l.Y):l.X=n.Clipper.TopX(s,l.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(s){for(var a=this.m_ActiveEdges;a!==null;){var l=this.IsMaxima(a,s);if(l){var p=this.GetMaximaPairEx(a);l=p===null||!n.ClipperBase.IsHorizontal(p)}if(l){this.StrictlySimple&&this.InsertMaxima(a.Top.X);var v=a.PrevInAEL;this.DoMaxima(a),v===null?a=this.m_ActiveEdges:a=v.NextInAEL}else{if(this.IsIntermediate(a,s)&&n.ClipperBase.IsHorizontal(a.NextInLML)?(a=this.UpdateEdgeIntoAEL(a),a.OutIdx>=0&&this.AddOutPt(a,a.Bot),this.AddEdgeToSEL(a)):(a.Curr.X=n.Clipper.TopX(a,s),a.Curr.Y=s),n.use_xyz&&(a.Top.Y===s?a.Curr.Z=a.Top.Z:a.Bot.Y===s?a.Curr.Z=a.Bot.Z:a.Curr.Z=0),this.StrictlySimple){var v=a.PrevInAEL;if(a.OutIdx>=0&&a.WindDelta!==0&&v!==null&&v.OutIdx>=0&&v.Curr.X===a.Curr.X&&v.WindDelta!==0){var T=new n.IntPoint1(a.Curr);n.use_xyz&&this.SetZ(T,v,a);var D=this.AddOutPt(v,T),$=this.AddOutPt(a,T);this.AddJoin(D,$,T)}}a=a.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,a=this.m_ActiveEdges;a!==null;){if(this.IsIntermediate(a,s)){var D=null;a.OutIdx>=0&&(D=this.AddOutPt(a,a.Top)),a=this.UpdateEdgeIntoAEL(a);var v=a.PrevInAEL,j=a.NextInAEL;if(v!==null&&v.Curr.X===a.Bot.X&&v.Curr.Y===a.Bot.Y&&D!==null&&v.OutIdx>=0&&v.Curr.Y===v.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,v.Curr,v.Top,this.m_UseFullRange)&&a.WindDelta!==0&&v.WindDelta!==0){var $=this.AddOutPt(ePrev2,a.Bot);this.AddJoin(D,$,a.Top)}else if(j!==null&&j.Curr.X===a.Bot.X&&j.Curr.Y===a.Bot.Y&&D!==null&&j.OutIdx>=0&&j.Curr.Y===j.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,j.Curr,j.Top,this.m_UseFullRange)&&a.WindDelta!==0&&j.WindDelta!==0){var $=this.AddOutPt(j,a.Bot);this.AddJoin(D,$,a.Top)}}a=a.NextInAEL}},n.Clipper.prototype.DoMaxima=function(s){var a=this.GetMaximaPairEx(s);if(a===null){s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s);return}for(var l=s.NextInAEL;l!==null&&l!==a;)this.IntersectEdges(s,l,s.Top),this.SwapPositionsInAEL(s,l),l=s.NextInAEL;s.OutIdx===-1&&a.OutIdx===-1?(this.DeleteFromAEL(s),this.DeleteFromAEL(a)):s.OutIdx>=0&&a.OutIdx>=0?(s.OutIdx>=0&&this.AddLocalMaxPoly(s,a,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(a)):n.use_lines&&s.WindDelta===0?(s.OutIdx>=0&&(this.AddOutPt(s,s.Top),s.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(s),a.OutIdx>=0&&(this.AddOutPt(a,s.Top),a.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(a)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(s){for(var a=0,l=s.length;a<l;a++)s[a].reverse()},n.Clipper.Orientation=function(s){return n.Clipper.Area(s)>=0},n.Clipper.prototype.PointCount=function(s){if(s===null)return 0;var a=0,l=s;do a++,l=l.Next;while(l!==s);return a},n.Clipper.prototype.BuildResult=function(s){n.Clear(s);for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a];if(p.Pts!==null){var v=p.Pts.Prev,T=this.PointCount(v);if(!(T<2)){for(var D=new Array(T),$=0;$<T;$++)D[$]=v.Pt,v=v.Prev;s.push(D)}}}},n.Clipper.prototype.BuildResult2=function(s){s.Clear();for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a],v=this.PointCount(p.Pts);if(!(p.IsOpen&&v<2||!p.IsOpen&&v<3)){this.FixHoleLinkage(p);var T=new n.PolyNode;s.m_AllPolys.push(T),p.PolyNode=T,T.m_polygon.length=v;for(var D=p.Pts.Prev,$=0;$<v;$++)T.m_polygon[$]=D.Pt,D=D.Prev}}for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,s.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):s.AddChild(p.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(s){for(var a=s.Pts,l=a.Prev;a!==l;)if(a=a.Next,n.IntPoint.op_Equality(a.Pt,a.Prev.Pt)){a===l&&(l=a.Prev);var p=a.Prev;p.Next=a.Next,a.Next.Prev=p,a=p}a===a.Prev&&(s.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(s){var a=null;s.BottomPt=null;for(var l=s.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(l.Prev===l||l.Prev===l.Next){s.Pts=null;return}if(n.IntPoint.op_Equality(l.Pt,l.Next.Pt)||n.IntPoint.op_Equality(l.Pt,l.Prev.Pt)||n.ClipperBase.SlopesEqual4(l.Prev.Pt,l.Pt,l.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(l.Prev.Pt,l.Pt,l.Next.Pt)))a=null,l.Prev.Next=l.Next,l.Next.Prev=l.Prev,l=l.Prev;else{if(l===a)break;a===null&&(a=l),l=l.Next}}s.Pts=l},n.Clipper.prototype.DupOutPt=function(s,a){var l=new n.OutPt;return l.Pt.X=s.Pt.X,l.Pt.Y=s.Pt.Y,n.use_xyz&&(l.Pt.Z=s.Pt.Z),l.Idx=s.Idx,a?(l.Next=s.Next,l.Prev=s,s.Next.Prev=l,s.Next=l):(l.Prev=s.Prev,l.Next=s,s.Prev.Next=l,s.Prev=l),l},n.Clipper.prototype.GetOverlap=function(s,a,l,p,v){return s<a?l<p?(v.Left=Math.max(s,l),v.Right=Math.min(a,p)):(v.Left=Math.max(s,p),v.Right=Math.min(a,l)):l<p?(v.Left=Math.max(a,l),v.Right=Math.min(s,p)):(v.Left=Math.max(a,p),v.Right=Math.min(s,l)),v.Left<v.Right},n.Clipper.prototype.JoinHorz=function(s,a,l,p,v,T){var D=s.Pt.X>a.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,$=l.Pt.X>p.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(D===$)return!1;if(D===n.Direction.dLeftToRight){for(;s.Next.Pt.X<=v.X&&s.Next.Pt.X>=s.Pt.X&&s.Next.Pt.Y===v.Y;)s=s.Next;T&&s.Pt.X!==v.X&&(s=s.Next),a=this.DupOutPt(s,!T),n.IntPoint.op_Inequality(a.Pt,v)&&(s=a,s.Pt.X=v.X,s.Pt.Y=v.Y,n.use_xyz&&(s.Pt.Z=v.Z),a=this.DupOutPt(s,!T))}else{for(;s.Next.Pt.X>=v.X&&s.Next.Pt.X<=s.Pt.X&&s.Next.Pt.Y===v.Y;)s=s.Next;!T&&s.Pt.X!==v.X&&(s=s.Next),a=this.DupOutPt(s,T),n.IntPoint.op_Inequality(a.Pt,v)&&(s=a,s.Pt.X=v.X,s.Pt.Y=v.Y,n.use_xyz&&(s.Pt.Z=v.Z),a=this.DupOutPt(s,T))}if($===n.Direction.dLeftToRight){for(;l.Next.Pt.X<=v.X&&l.Next.Pt.X>=l.Pt.X&&l.Next.Pt.Y===v.Y;)l=l.Next;T&&l.Pt.X!==v.X&&(l=l.Next),p=this.DupOutPt(l,!T),n.IntPoint.op_Inequality(p.Pt,v)&&(l=p,l.Pt.X=v.X,l.Pt.Y=v.Y,n.use_xyz&&(l.Pt.Z=v.Z),p=this.DupOutPt(l,!T))}else{for(;l.Next.Pt.X>=v.X&&l.Next.Pt.X<=l.Pt.X&&l.Next.Pt.Y===v.Y;)l=l.Next;!T&&l.Pt.X!==v.X&&(l=l.Next),p=this.DupOutPt(l,T),n.IntPoint.op_Inequality(p.Pt,v)&&(l=p,l.Pt.X=v.X,l.Pt.Y=v.Y,n.use_xyz&&(l.Pt.Z=v.Z),p=this.DupOutPt(l,T))}return D===n.Direction.dLeftToRight===T?(s.Prev=l,l.Next=s,a.Next=p,p.Prev=a):(s.Next=l,l.Prev=s,a.Prev=p,p.Next=a),!0},n.Clipper.prototype.JoinPoints=function(s,a,l){var p=s.OutPt1,v=new n.OutPt,T=s.OutPt2,D=new n.OutPt,$=s.OutPt1.Pt.Y===s.OffPt.Y;if($&&n.IntPoint.op_Equality(s.OffPt,s.OutPt1.Pt)&&n.IntPoint.op_Equality(s.OffPt,s.OutPt2.Pt)){if(a!==l)return!1;for(v=s.OutPt1.Next;v!==p&&n.IntPoint.op_Equality(v.Pt,s.OffPt);)v=v.Next;var j=v.Pt.Y>s.OffPt.Y;for(D=s.OutPt2.Next;D!==T&&n.IntPoint.op_Equality(D.Pt,s.OffPt);)D=D.Next;var ut=D.Pt.Y>s.OffPt.Y;return j===ut?!1:j?(v=this.DupOutPt(p,!1),D=this.DupOutPt(T,!0),p.Prev=T,T.Next=p,v.Next=D,D.Prev=v,s.OutPt1=p,s.OutPt2=v,!0):(v=this.DupOutPt(p,!0),D=this.DupOutPt(T,!1),p.Next=T,T.Prev=p,v.Prev=D,D.Next=v,s.OutPt1=p,s.OutPt2=v,!0)}else if($){for(v=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==v&&p.Prev!==T;)p=p.Prev;for(;v.Next.Pt.Y===v.Pt.Y&&v.Next!==p&&v.Next!==T;)v=v.Next;if(v.Next===p||v.Next===T)return!1;for(D=T;T.Prev.Pt.Y===T.Pt.Y&&T.Prev!==D&&T.Prev!==v;)T=T.Prev;for(;D.Next.Pt.Y===D.Pt.Y&&D.Next!==T&&D.Next!==p;)D=D.Next;if(D.Next===T||D.Next===p)return!1;var Ct={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,v.Pt.X,T.Pt.X,D.Pt.X,Ct))return!1;var At=Ct.Left,Nt=Ct.Right,ne=new n.IntPoint0,pe;return p.Pt.X>=At&&p.Pt.X<=Nt?(ne.X=p.Pt.X,ne.Y=p.Pt.Y,n.use_xyz&&(ne.Z=p.Pt.Z),pe=p.Pt.X>v.Pt.X):T.Pt.X>=At&&T.Pt.X<=Nt?(ne.X=T.Pt.X,ne.Y=T.Pt.Y,n.use_xyz&&(ne.Z=T.Pt.Z),pe=T.Pt.X>D.Pt.X):v.Pt.X>=At&&v.Pt.X<=Nt?(ne.X=v.Pt.X,ne.Y=v.Pt.Y,n.use_xyz&&(ne.Z=v.Pt.Z),pe=v.Pt.X>p.Pt.X):(ne.X=D.Pt.X,ne.Y=D.Pt.Y,n.use_xyz&&(ne.Z=D.Pt.Z),pe=D.Pt.X>T.Pt.X),s.OutPt1=p,s.OutPt2=T,this.JoinHorz(p,v,T,D,ne,pe)}else{for(v=p.Next;n.IntPoint.op_Equality(v.Pt,p.Pt)&&v!==p;)v=v.Next;var Me=v.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,v.Pt,s.OffPt,this.m_UseFullRange);if(Me){for(v=p.Prev;n.IntPoint.op_Equality(v.Pt,p.Pt)&&v!==p;)v=v.Prev;if(v.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,v.Pt,s.OffPt,this.m_UseFullRange))return!1}for(D=T.Next;n.IntPoint.op_Equality(D.Pt,T.Pt)&&D!==T;)D=D.Next;var Be=D.Pt.Y>T.Pt.Y||!n.ClipperBase.SlopesEqual4(T.Pt,D.Pt,s.OffPt,this.m_UseFullRange);if(Be){for(D=T.Prev;n.IntPoint.op_Equality(D.Pt,T.Pt)&&D!==T;)D=D.Prev;if(D.Pt.Y>T.Pt.Y||!n.ClipperBase.SlopesEqual4(T.Pt,D.Pt,s.OffPt,this.m_UseFullRange))return!1}return v===p||D===T||v===D||a===l&&Me===Be?!1:Me?(v=this.DupOutPt(p,!1),D=this.DupOutPt(T,!0),p.Prev=T,T.Next=p,v.Next=D,D.Prev=v,s.OutPt1=p,s.OutPt2=v,!0):(v=this.DupOutPt(p,!0),D=this.DupOutPt(T,!1),p.Next=T,T.Prev=p,v.Prev=D,D.Next=v,s.OutPt1=p,s.OutPt2=v,!0)}},n.Clipper.GetBounds=function(s){for(var a=0,l=s.length;a<l&&s[a].length===0;)a++;if(a===l)return new n.IntRect(0,0,0,0);var p=new n.IntRect;for(p.left=s[a][0].X,p.right=p.left,p.top=s[a][0].Y,p.bottom=p.top;a<l;a++)for(var v=0,T=s[a].length;v<T;v++)s[a][v].X<p.left?p.left=s[a][v].X:s[a][v].X>p.right&&(p.right=s[a][v].X),s[a][v].Y<p.top?p.top=s[a][v].Y:s[a][v].Y>p.bottom&&(p.bottom=s[a][v].Y);return p},n.Clipper.prototype.GetBounds2=function(s){var a=s,l=new n.IntRect;for(l.left=s.Pt.X,l.right=s.Pt.X,l.top=s.Pt.Y,l.bottom=s.Pt.Y,s=s.Next;s!==a;)s.Pt.X<l.left&&(l.left=s.Pt.X),s.Pt.X>l.right&&(l.right=s.Pt.X),s.Pt.Y<l.top&&(l.top=s.Pt.Y),s.Pt.Y>l.bottom&&(l.bottom=s.Pt.Y),s=s.Next;return l},n.Clipper.PointInPolygon=function(s,a){var l=0,p=a.length;if(p<3)return 0;for(var v=a[0],T=1;T<=p;++T){var D=T===p?a[0]:a[T];if(D.Y===s.Y&&(D.X===s.X||v.Y===s.Y&&D.X>s.X==v.X<s.X))return-1;if(v.Y<s.Y!=D.Y<s.Y){if(v.X>=s.X)if(D.X>s.X)l=1-l;else{var $=(v.X-s.X)*(D.Y-s.Y)-(D.X-s.X)*(v.Y-s.Y);if($===0)return-1;$>0==D.Y>v.Y&&(l=1-l)}else if(D.X>s.X){var $=(v.X-s.X)*(D.Y-s.Y)-(D.X-s.X)*(v.Y-s.Y);if($===0)return-1;$>0==D.Y>v.Y&&(l=1-l)}}v=D}return l},n.Clipper.prototype.PointInPolygon=function(s,a){var l=0,p=a,v=s.X,T=s.Y,D=a.Pt.X,$=a.Pt.Y;do{a=a.Next;var j=a.Pt.X,ut=a.Pt.Y;if(ut===T&&(j===v||$===T&&j>v==D<v))return-1;if($<T!=ut<T){if(D>=v)if(j>v)l=1-l;else{var Ct=(D-v)*(ut-T)-(j-v)*($-T);if(Ct===0)return-1;Ct>0==ut>$&&(l=1-l)}else if(j>v){var Ct=(D-v)*(ut-T)-(j-v)*($-T);if(Ct===0)return-1;Ct>0==ut>$&&(l=1-l)}}D=j,$=ut}while(p!==a);return l},n.Clipper.prototype.Poly2ContainsPoly1=function(s,a){var l=s;do{var p=this.PointInPolygon(l.Pt,a);if(p>=0)return p>0;l=l.Next}while(l!==s);return!0},n.Clipper.prototype.FixupFirstLefts1=function(s,a){for(var l,p,v=0,T=this.m_PolyOuts.length;v<T;v++)l=this.m_PolyOuts[v],p=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&p===s&&this.Poly2ContainsPoly1(l.Pts,a.Pts)&&(l.FirstLeft=a)},n.Clipper.prototype.FixupFirstLefts2=function(s,a){for(var l=a.FirstLeft,p,v,T=0,D=this.m_PolyOuts.length;T<D;T++)p=this.m_PolyOuts[T],!(p.Pts===null||p===a||p===s)&&(v=n.Clipper.ParseFirstLeft(p.FirstLeft),!(v!==l&&v!==s&&v!==a)&&(this.Poly2ContainsPoly1(p.Pts,s.Pts)?p.FirstLeft=s:this.Poly2ContainsPoly1(p.Pts,a.Pts)?p.FirstLeft=a:(p.FirstLeft===s||p.FirstLeft===a)&&(p.FirstLeft=l)))},n.Clipper.prototype.FixupFirstLefts3=function(s,a){for(var l,p,v=0,T=this.m_PolyOuts.length;v<T;v++)l=this.m_PolyOuts[v],p=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&p===s&&(l.FirstLeft=a)},n.Clipper.ParseFirstLeft=function(s){for(;s!==null&&s.Pts===null;)s=s.FirstLeft;return s},n.Clipper.prototype.JoinCommonEdges=function(){for(var s=0,a=this.m_Joins.length;s<a;s++){var l=this.m_Joins[s],p=this.GetOutRec(l.OutPt1.Idx),v=this.GetOutRec(l.OutPt2.Idx);if(!(p.Pts===null||v.Pts===null)&&!(p.IsOpen||v.IsOpen)){var T;p===v?T=p:this.OutRec1RightOfOutRec2(p,v)?T=v:this.OutRec1RightOfOutRec2(v,p)?T=p:T=this.GetLowermostRec(p,v),this.JoinPoints(l,p,v)&&(p===v?(p.Pts=l.OutPt1,p.BottomPt=null,v=this.CreateOutRec(),v.Pts=l.OutPt2,this.UpdateOutPtIdxs(v),this.Poly2ContainsPoly1(v.Pts,p.Pts)?(v.IsHole=!p.IsHole,v.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(v,p),(v.IsHole^this.ReverseSolution)==this.Area$1(v)>0&&this.ReversePolyPtLinks(v.Pts)):this.Poly2ContainsPoly1(p.Pts,v.Pts)?(v.IsHole=p.IsHole,p.IsHole=!v.IsHole,v.FirstLeft=p.FirstLeft,p.FirstLeft=v,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,v),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(v.IsHole=p.IsHole,v.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,v))):(v.Pts=null,v.BottomPt=null,v.Idx=p.Idx,p.IsHole=T.IsHole,T===v&&(p.FirstLeft=v.FirstLeft),v.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(v,p)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(s){var a=s.Pts;do a.Idx=s.Idx,a=a.Prev;while(a!==s.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var s=0;s<this.m_PolyOuts.length;){var a=this.m_PolyOuts[s++],l=a.Pts;if(!(l===null||a.IsOpen))do{for(var p=l.Next;p!==a.Pts;){if(n.IntPoint.op_Equality(l.Pt,p.Pt)&&p.Next!==l&&p.Prev!==l){var v=l.Prev,T=p.Prev;l.Prev=T,T.Next=l,p.Prev=v,v.Next=p,a.Pts=l;var D=this.CreateOutRec();D.Pts=p,this.UpdateOutPtIdxs(D),this.Poly2ContainsPoly1(D.Pts,a.Pts)?(D.IsHole=!a.IsHole,D.FirstLeft=a,this.m_UsingPolyTree&&this.FixupFirstLefts2(D,a)):this.Poly2ContainsPoly1(a.Pts,D.Pts)?(D.IsHole=a.IsHole,a.IsHole=!D.IsHole,D.FirstLeft=a.FirstLeft,a.FirstLeft=D,this.m_UsingPolyTree&&this.FixupFirstLefts2(a,D)):(D.IsHole=a.IsHole,D.FirstLeft=a.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(a,D)),p=l}p=p.Next}l=l.Next}while(l!==a.Pts)}},n.Clipper.Area=function(s){if(!Array.isArray(s))return 0;var a=s.length;if(a<3)return 0;for(var l=0,p=0,v=a-1;p<a;++p)l+=(s[v].X+s[p].X)*(s[v].Y-s[p].Y),v=p;return-l*.5},n.Clipper.prototype.Area=function(s){var a=s;if(s===null)return 0;var l=0;do l=l+(s.Prev.Pt.X+s.Pt.X)*(s.Prev.Pt.Y-s.Pt.Y),s=s.Next;while(s!==a);return l*.5},n.Clipper.prototype.Area$1=function(s){return this.Area(s.Pts)},n.Clipper.SimplifyPolygon=function(s,a){var l=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPath(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,a,a),l},n.Clipper.SimplifyPolygons=function(s,a){typeof a>"u"&&(a=n.PolyFillType.pftEvenOdd);var l=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,a,a),l},n.Clipper.DistanceSqrd=function(s,a){var l=s.X-a.X,p=s.Y-a.Y;return l*l+p*p},n.Clipper.DistanceFromLineSqrd=function(s,a,l){var p=a.Y-l.Y,v=l.X-a.X,T=p*a.X+v*a.Y;return T=p*s.X+v*s.Y-T,T*T/(p*p+v*v)},n.Clipper.SlopesNearCollinear=function(s,a,l,p){return Math.abs(s.X-a.X)>Math.abs(s.Y-a.Y)?s.X>a.X==s.X<l.X?n.Clipper.DistanceFromLineSqrd(s,a,l)<p:a.X>s.X==a.X<l.X?n.Clipper.DistanceFromLineSqrd(a,s,l)<p:n.Clipper.DistanceFromLineSqrd(l,s,a)<p:s.Y>a.Y==s.Y<l.Y?n.Clipper.DistanceFromLineSqrd(s,a,l)<p:a.Y>s.Y==a.Y<l.Y?n.Clipper.DistanceFromLineSqrd(a,s,l)<p:n.Clipper.DistanceFromLineSqrd(l,s,a)<p},n.Clipper.PointsAreClose=function(s,a,l){var p=s.X-a.X,v=s.Y-a.Y;return p*p+v*v<=l},n.Clipper.ExcludeOp=function(s){var a=s.Prev;return a.Next=s.Next,s.Next.Prev=a,a.Idx=0,a},n.Clipper.CleanPolygon=function(s,a){typeof a>"u"&&(a=1.415);var l=s.length;if(l===0)return new Array;for(var p=new Array(l),v=0;v<l;++v)p[v]=new n.OutPt;for(var v=0;v<l;++v)p[v].Pt=s[v],p[v].Next=p[(v+1)%l],p[v].Next.Prev=p[v],p[v].Idx=0;for(var T=a*a,D=p[0];D.Idx===0&&D.Next!==D.Prev;)n.Clipper.PointsAreClose(D.Pt,D.Prev.Pt,T)?(D=n.Clipper.ExcludeOp(D),l--):n.Clipper.PointsAreClose(D.Prev.Pt,D.Next.Pt,T)?(n.Clipper.ExcludeOp(D.Next),D=n.Clipper.ExcludeOp(D),l-=2):n.Clipper.SlopesNearCollinear(D.Prev.Pt,D.Pt,D.Next.Pt,T)?(D=n.Clipper.ExcludeOp(D),l--):(D.Idx=1,D=D.Next);l<3&&(l=0);for(var $=new Array(l),v=0;v<l;++v)$[v]=new n.IntPoint1(D.Pt),D=D.Next;return p=null,$},n.Clipper.CleanPolygons=function(s,a){for(var l=new Array(s.length),p=0,v=s.length;p<v;p++)l[p]=n.Clipper.CleanPolygon(s[p],a);return l},n.Clipper.Minkowski=function(s,a,l,p){var v=p?1:0,T=s.length,D=a.length,$=new Array;if(l)for(var j=0;j<D;j++){for(var ut=new Array(T),Ct=0,At=s.length,Nt=s[Ct];Ct<At;Ct++,Nt=s[Ct])ut[Ct]=new n.IntPoint2(a[j].X+Nt.X,a[j].Y+Nt.Y);$.push(ut)}else for(var j=0;j<D;j++){for(var ut=new Array(T),Ct=0,At=s.length,Nt=s[Ct];Ct<At;Ct++,Nt=s[Ct])ut[Ct]=new n.IntPoint2(a[j].X-Nt.X,a[j].Y-Nt.Y);$.push(ut)}for(var ne=new Array,j=0;j<D-1+v;j++)for(var Ct=0;Ct<T;Ct++){var pe=new Array;pe.push($[j%D][Ct%T]),pe.push($[(j+1)%D][Ct%T]),pe.push($[(j+1)%D][(Ct+1)%T]),pe.push($[j%D][(Ct+1)%T]),n.Clipper.Orientation(pe)||pe.reverse(),ne.push(pe)}return ne},n.Clipper.MinkowskiSum=function(s,a,l){if(a[0]instanceof Array){for(var v=a,D=new n.Paths,T=new n.Clipper,$=0;$<v.length;++$){var j=n.Clipper.Minkowski(s,v[$],!0,l);if(T.AddPaths(j,n.PolyType.ptSubject,!0),l){var p=n.Clipper.TranslatePath(v[$],s[0]);T.AddPath(p,n.PolyType.ptClip,!0)}}return T.Execute(n.ClipType.ctUnion,D,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),D}else{var p=a,v=n.Clipper.Minkowski(s,p,!0,l),T=new n.Clipper;return T.AddPaths(v,n.PolyType.ptSubject,!0),T.Execute(n.ClipType.ctUnion,v,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),v}},n.Clipper.TranslatePath=function(s,a){for(var l=new n.Path,p=0;p<s.length;p++)l.push(new n.IntPoint2(s[p].X+a.X,s[p].Y+a.Y));return l},n.Clipper.MinkowskiDiff=function(s,a){var l=n.Clipper.Minkowski(s,a,!1,!0),p=new n.Clipper;return p.AddPaths(l,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),l},n.Clipper.PolyTreeToPaths=function(s){var a=new Array;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntAny,a),a},n.Clipper.AddPolyNodeToPaths=function(s,a,l){var p=!0;switch(a){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:p=!s.IsOpen;break;default:break}s.m_polygon.length>0&&p&&l.push(s.m_polygon);for(var v=0,T=s.Childs(),D=T.length,$=T[v];v<D;v++,$=T[v])n.Clipper.AddPolyNodeToPaths($,a,l)},n.Clipper.OpenPathsFromPolyTree=function(s){for(var a=new n.Paths,l=0,p=s.ChildCount();l<p;l++)s.Childs()[l].IsOpen&&a.push(s.Childs()[l].m_polygon);return a},n.Clipper.ClosedPathsFromPolyTree=function(s){var a=new n.Paths;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntClosed,a),a},he(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(s,a){typeof s>"u"&&(s=2),typeof a>"u"&&(a=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=s,this.ArcTolerance=a,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(s,a,l){var p=s.length-1;if(!(p<0)){var v=new n.PolyNode;if(v.m_jointype=a,v.m_endtype=l,l===n.EndType.etClosedLine||l===n.EndType.etClosedPolygon)for(;p>0&&n.IntPoint.op_Equality(s[0],s[p]);)p--;v.m_polygon.push(s[0]);for(var T=0,D=0,$=1;$<=p;$++)n.IntPoint.op_Inequality(v.m_polygon[T],s[$])&&(T++,v.m_polygon.push(s[$]),(s[$].Y>v.m_polygon[D].Y||s[$].Y===v.m_polygon[D].Y&&s[$].X<v.m_polygon[D].X)&&(D=T));if(!(l===n.EndType.etClosedPolygon&&T<2)&&(this.m_polyNodes.AddChild(v),l===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D);else{var j=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(v.m_polygon[D].Y>j.Y||v.m_polygon[D].Y===j.Y&&v.m_polygon[D].X<j.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D))}}},n.ClipperOffset.prototype.AddPaths=function(s,a,l){for(var p=0,v=s.length;p<v;p++)this.AddPath(s[p],a,l)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];(a.m_endtype===n.EndType.etClosedPolygon||a.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(a.m_polygon))&&a.m_polygon.reverse()}else for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];a.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(a.m_polygon)&&a.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(s,a){var l=a.X-s.X,p=a.Y-s.Y;if(l===0&&p===0)return new n.DoublePoint2(0,0);var v=1/Math.sqrt(l*l+p*p);return l*=v,p*=v,new n.DoublePoint2(p,-l)},n.ClipperOffset.prototype.DoOffset=function(s){if(this.m_destPolys=new Array,this.m_delta=s,n.ClipperBase.near_zero(s)){for(var a=0;a<this.m_polyNodes.ChildCount();a++){var l=this.m_polyNodes.Childs()[a];l.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(l.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(s)*n.ClipperOffset.def_arc_tolerance?p=Math.abs(s)*n.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var v=3.14159265358979/Math.acos(1-p/Math.abs(s));this.m_sin=Math.sin(n.ClipperOffset.two_pi/v),this.m_cos=Math.cos(n.ClipperOffset.two_pi/v),this.m_StepsPerRad=v/n.ClipperOffset.two_pi,s<0&&(this.m_sin=-this.m_sin);for(var a=0;a<this.m_polyNodes.ChildCount();a++){var l=this.m_polyNodes.Childs()[a];this.m_srcPoly=l.m_polygon;var T=this.m_srcPoly.length;if(!(T===0||s<=0&&(T<3||l.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,T===1){if(l.m_jointype===n.JoinType.jtRound)for(var D=1,$=0,j=1;j<=v;j++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+$*s)));var ut=D;D=D*this.m_cos-this.m_sin*$,$=ut*this.m_sin+$*this.m_cos}else for(var D=-1,$=-1,j=0;j<4;++j)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+$*s))),D<0?D=1:$<0?$=1:D=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var j=0;j<T-1;j++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[j],this.m_srcPoly[j+1]));if(l.m_endtype===n.EndType.etClosedLine||l.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[T-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[T-2])),l.m_endtype===n.EndType.etClosedPolygon){for(var Ct=T-1,j=0;j<T;j++)Ct=this.OffsetPoint(j,Ct,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(l.m_endtype===n.EndType.etClosedLine){for(var Ct=T-1,j=0;j<T;j++)Ct=this.OffsetPoint(j,Ct,l.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var At=this.m_normals[T-1],j=T-1;j>0;j--)this.m_normals[j]=new n.DoublePoint2(-this.m_normals[j-1].X,-this.m_normals[j-1].Y);this.m_normals[0]=new n.DoublePoint2(-At.X,-At.Y),Ct=0;for(var j=T-1;j>=0;j--)Ct=this.OffsetPoint(j,Ct,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var Ct=0,j=1;j<T-1;++j)Ct=this.OffsetPoint(j,Ct,l.m_jointype);var Nt;if(l.m_endtype===n.EndType.etOpenButt){var j=T-1;Nt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[j].X+this.m_normals[j].X*s),n.ClipperOffset.Round(this.m_srcPoly[j].Y+this.m_normals[j].Y*s)),this.m_destPoly.push(Nt),Nt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[j].X-this.m_normals[j].X*s),n.ClipperOffset.Round(this.m_srcPoly[j].Y-this.m_normals[j].Y*s)),this.m_destPoly.push(Nt)}else{var j=T-1;Ct=T-2,this.m_sinA=0,this.m_normals[j]=new n.DoublePoint2(-this.m_normals[j].X,-this.m_normals[j].Y),l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(j,Ct):this.DoRound(j,Ct)}for(var j=T-1;j>0;j--)this.m_normals[j]=new n.DoublePoint2(-this.m_normals[j-1].X,-this.m_normals[j-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),Ct=T-1;for(var j=Ct-1;j>0;--j)Ct=this.OffsetPoint(j,Ct,l.m_jointype);l.m_endtype===n.EndType.etOpenButt?(Nt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*s)),this.m_destPoly.push(Nt),Nt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*s)),this.m_destPoly.push(Nt)):(Ct=1,this.m_sinA=0,l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var s=arguments,a=s[0]instanceof n.PolyTree;if(a){var l=s[0],p=s[1];l.Clear(),this.FixOrientations(),this.DoOffset(p);var v=new n.Clipper(0);if(v.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)v.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var T=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;if(D.push(new n.IntPoint2(T.left-10,T.bottom+10)),D.push(new n.IntPoint2(T.right+10,T.bottom+10)),D.push(new n.IntPoint2(T.right+10,T.top-10)),D.push(new n.IntPoint2(T.left-10,T.top-10)),v.AddPath(D,n.PolyType.ptSubject,!0),v.ReverseSolution=!0,v.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.ChildCount()===1&&l.Childs()[0].ChildCount()>0){var $=l.Childs()[0];l.Childs()[0]=$.Childs()[0],l.Childs()[0].m_Parent=l;for(var j=1;j<$.ChildCount();j++)l.AddChild($.Childs()[j])}else l.Clear()}}else{var l=s[0],p=s[1];n.Clear(l),this.FixOrientations(),this.DoOffset(p);var v=new n.Clipper(0);if(v.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)v.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var T=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;D.push(new n.IntPoint2(T.left-10,T.bottom+10)),D.push(new n.IntPoint2(T.right+10,T.bottom+10)),D.push(new n.IntPoint2(T.right+10,T.top-10)),D.push(new n.IntPoint2(T.left-10,T.top-10)),v.AddPath(D,n.PolyType.ptSubject,!0),v.ReverseSolution=!0,v.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.length>0&&l.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(s,a,l){if(this.m_sinA=this.m_normals[a].X*this.m_normals[s].Y-this.m_normals[s].X*this.m_normals[a].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[a].X*this.m_normals[s].X+this.m_normals[s].Y*this.m_normals[a].Y;if(p>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),a}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[s])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)));else switch(l){case n.JoinType.jtMiter:{var v=1+(this.m_normals[s].X*this.m_normals[a].X+this.m_normals[s].Y*this.m_normals[a].Y);v>=this.m_miterLim?this.DoMiter(s,a,v):this.DoSquare(s,a);break}case n.JoinType.jtSquare:this.DoSquare(s,a);break;case n.JoinType.jtRound:this.DoRound(s,a);break}return a=s,a},n.ClipperOffset.prototype.DoSquare=function(s,a){var l=Math.tan(Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[a].X-this.m_normals[a].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[a].Y+this.m_normals[a].X*l)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[s].X+this.m_normals[s].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[s].Y-this.m_normals[s].X*l))))},n.ClipperOffset.prototype.DoMiter=function(s,a,l){var p=this.m_delta/l;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+(this.m_normals[a].X+this.m_normals[s].X)*p),n.ClipperOffset.Round(this.m_srcPoly[s].Y+(this.m_normals[a].Y+this.m_normals[s].Y)*p)))},n.ClipperOffset.prototype.DoRound=function(s,a){for(var l=Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y),p=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(l))),1),v=this.m_normals[a].X,T=this.m_normals[a].Y,D,$=0;$<p;++$)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+v*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+T*this.m_delta))),D=v,v=v*this.m_cos-this.m_sin*T,T=D*this.m_sin+T*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)))},n.Error=function(s){try{throw new Error(s)}catch(a){alert(a.message)}},n.JS={},n.JS.AreaOfPolygon=function(s,a){return a||(a=1),n.Clipper.Area(s)/(a*a)},n.JS.AreaOfPolygons=function(s,a){a||(a=1);for(var l=0,p=0;p<s.length;p++)l+=n.Clipper.Area(s[p]);return l/(a*a)},n.JS.BoundsOfPath=function(s,a){return n.JS.BoundsOfPaths([s],a)},n.JS.BoundsOfPaths=function(s,a){a||(a=1);var l=n.Clipper.GetBounds(s);return l.left/=a,l.bottom/=a,l.right/=a,l.top/=a,l},n.JS.Clean=function(p,a){if(!(p instanceof Array))return[];var l=p[0]instanceof Array,p=n.JS.Clone(p);if(typeof a!="number"||a===null)return n.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||a<0)return p;l||(p=[p]);for(var v=p.length,T,D,$,j,ut,Ct,At,Nt=[],ne=0;ne<v;ne++)if(D=p[ne],T=D.length,T!==0){if(T<3){$=D,Nt.push($);continue}for($=D,j=a*a,ut=D[0],Ct=1,At=1;At<T;At++)(D[At].X-ut.X)*(D[At].X-ut.X)+(D[At].Y-ut.Y)*(D[At].Y-ut.Y)<=j||($[Ct]=D[At],ut=D[At],Ct++);ut=D[Ct-1],(D[0].X-ut.X)*(D[0].X-ut.X)+(D[0].Y-ut.Y)*(D[0].Y-ut.Y)<=j&&Ct--,Ct<T&&$.splice(Ct,T-Ct),$.length&&Nt.push($)}return!l&&Nt.length?Nt=Nt[0]:!l&&Nt.length===0?Nt=[]:l&&Nt.length===0&&(Nt=[[]]),Nt},n.JS.Clone=function(s){if(!(s instanceof Array))return[];if(s.length===0)return[];if(s.length===1&&s[0].length===0)return[[]];var a=s[0]instanceof Array;a||(s=[s]);var l=s.length,p,v,T,D,$=new Array(l);for(v=0;v<l;v++){for(p=s[v].length,D=new Array(p),T=0;T<p;T++)D[T]={X:s[v][T].X,Y:s[v][T].Y};$[v]=D}return a||($=$[0]),$},n.JS.Lighten=function(s,a){if(!(s instanceof Array))return[];if(typeof a!="number"||a===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(s);if(s.length===0||s.length===1&&s[0].length===0||a<0)return n.JS.Clone(s);var l=s[0]instanceof Array;l||(s=[s]);var p,v,T,D,$,j,ut,Ct,At,Nt,ne,pe,Me,Be,pn,Gn,Ui,Ur=s.length,ko=a*a,wi=[];for(p=0;p<Ur;p++)if(T=s[p],j=T.length,j!==0){for(D=0;D<1e6;D++){for($=[],j=T.length,T[j-1].X!==T[0].X||T[j-1].Y!==T[0].Y?(pe=1,T.push({X:T[0].X,Y:T[0].Y}),j=T.length):pe=0,ne=[],v=0;v<j-2;v++)ut=T[v],At=T[v+1],Ct=T[v+2],Gn=ut.X,Ui=ut.Y,Me=Ct.X-Gn,Be=Ct.Y-Ui,(Me!==0||Be!==0)&&(pn=((At.X-Gn)*Me+(At.Y-Ui)*Be)/(Me*Me+Be*Be),pn>1?(Gn=Ct.X,Ui=Ct.Y):pn>0&&(Gn+=Me*pn,Ui+=Be*pn)),Me=At.X-Gn,Be=At.Y-Ui,Nt=Me*Me+Be*Be,Nt<=ko&&(ne[v+1]=1,v++);for($.push({X:T[0].X,Y:T[0].Y}),v=1;v<j-1;v++)ne[v]||$.push({X:T[v].X,Y:T[v].Y});if($.push({X:T[j-1].X,Y:T[j-1].Y}),pe&&T.pop(),ne.length)T=$;else break}j=$.length,$[j-1].X===$[0].X&&$[j-1].Y===$[0].Y&&$.pop(),$.length>2&&wi.push($)}return l||(wi=wi[0]),typeof wi>"u"&&(wi=[]),wi},n.JS.PerimeterOfPath=function(s,a,l){if(typeof s>"u")return 0;var p=Math.sqrt,v=0,T,D,$=0,j=0,ut=0,Ct=0,At=s.length;if(At<2)return 0;for(a&&(s[At]=s[0],At++);--At;)T=s[At],$=T.X,j=T.Y,D=s[At-1],ut=D.X,Ct=D.Y,v+=p(($-ut)*($-ut)+(j-Ct)*(j-Ct));return a&&s.pop(),v/l},n.JS.PerimeterOfPaths=function(s,a,l){l||(l=1);for(var p=0,v=0;v<s.length;v++)p+=n.JS.PerimeterOfPath(s[v],a,l);return p},n.JS.ScaleDownPath=function(s,a){var l,p;for(a||(a=1),l=s.length;l--;)p=s[l],p.X=p.X/a,p.Y=p.Y/a},n.JS.ScaleDownPaths=function(s,a){var l,p,v;for(a||(a=1),l=s.length;l--;)for(p=s[l].length;p--;)v=s[l][p],v.X=v.X/a,v.Y=v.Y/a},n.JS.ScaleUpPath=function(s,a){var l,p,v=Math.round;for(a||(a=1),l=s.length;l--;)p=s[l],p.X=v(p.X*a),p.Y=v(p.Y*a)},n.JS.ScaleUpPaths=function(s,a){var l,p,v,T=Math.round;for(a||(a=1),l=s.length;l--;)for(p=s[l].length;p--;)v=s[l][p],v.X=T(v.X*a),v.Y=T(v.Y*a)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(s,a){var l=new n.ExPolygon;l.outer=s.Contour();var p=s.Childs(),v=p.length;l.holes=new Array(v);var T,D,$,j,ut,Ct;for($=0;$<v;$++)for(T=p[$],l.holes[$]=T.Contour(),j=0,ut=T.Childs(),Ct=ut.length;j<Ct;j++)D=ut[j],n.JS.AddOuterPolyNodeToExPolygons(D,a);a.push(l)},n.JS.ExPolygonsToPaths=function(s){var a,l,p,v,T=new n.Paths;for(a=0,p=s.length;a<p;a++)for(T.push(s[a].outer),l=0,v=s[a].holes.length;l<v;l++)T.push(s[a].holes[l]);return T},n.JS.PolyTreeToExPolygons=function(s){var a=new n.ExPolygons,l,p,v,T;for(p=0,v=s.Childs(),T=v.length;p<T;p++)l=v[p],n.JS.AddOuterPolyNodeToExPolygons(l,a);return a}})()});function Wo(n,t,e,i=Ke.default.PolyFillType.pftNonZero){let r=new Ke.default.Clipper;r.AddPaths(Xo(t),Ke.default.PolyType.ptSubject,!0),e&&r.AddPaths(Xo(e),Ke.default.PolyType.ptClip,!0);let o=new Ke.default.Paths;return r.Execute(n,o,i,i),mc(o)}function Mu(n,t=256){let e=n;for(;e.length>t;){let i=[];for(let r=0;r<e.length;r+=t)i.push(ur(e.slice(r,r+t)));if(e=i.flat(),i.length===1)return e}return ur(e)}function tn(n,t){if(!n.length)return[];let e=new Ke.default.ClipperOffset(2,Pm);e.AddPaths(Xo(n),Ke.default.JoinType.jtRound,Ke.default.EndType.etClosedPolygon);let i=new Ke.default.Paths;return e.Execute(i,t*zr),mc(i)}function Xn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function ki(n){let t=1/0,e=1/0,i=-1/0,r=-1/0;for(let o of n)for(let[c,u]of o)c<t&&(t=c),c>i&&(i=c),u<e&&(e=u),u>r&&(r=u);return{minX:t,minY:e,maxX:i,maxY:r}}function zi(n){if(!n.length)return[];let t=new Ke.default.Clipper;t.AddPaths(Xo(n),Ke.default.PolyType.ptSubject,!0);let e=new Ke.default.PolyTree;t.Execute(Ke.default.ClipType.ctUnion,e,Ke.default.PolyFillType.pftNonZero,Ke.default.PolyFillType.pftNonZero);let i=[],r=o=>{for(let c of o.Childs()){if(c.IsHole()){r(c);continue}let u=c.Childs().map(f=>f.Contour());i.push(mc([c.Contour(),...u]));for(let f of c.Childs())r(f)}};return r(e),i}function zs([n,t],e){let i=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[c,u]=e[r],[f,d]=e[o];u>t!=d>t&&n<(f-c)*(t-u)/(d-u)+c&&(i=!i)}return i}function di(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(Xn(e))>t)}function Im(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let u=1;u<n.length;u++){let f=(n[u][0]-n[0][0])**2+(n[u][1]-n[0][1])**2;f>i&&(i=f,e=u)}let r=u=>{let f=new Uint8Array(u.length);f[0]=f[u.length-1]=1;let d=[[0,u.length-1]];for(;d.length;){let[g,y]=d.pop(),[_,b]=u[g],[E,P]=u[y],S=Math.hypot(E-_,P-b)||1e-12,M=-1,O=t;for(let G=g+1;G<y;G++){let R=Math.abs((E-_)*(b-u[G][1])-(_-u[G][0])*(P-b))/S;R>O&&(O=R,M=G)}M>0&&(f[M]=1,d.push([g,M],[M,y]))}return u.filter((g,y)=>f[y])},o=r(n.slice(0,e+1)),c=r([...n.slice(e),n[0]]);return[...o,...c.slice(1,-1)]}var Ke,zr,Pm,Xo,mc,Yo,ur,Vr,ks,jn,Vs,Hs=Pn(()=>{Ke=gu(xu(),1),zr=1e3,Pm=.01*zr,Xo=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*zr),Y:Math.round(i*zr)}))),mc=n=>n.map(t=>t.map(e=>[e.X/zr,e.Y/zr]));Yo=n=>Wo(Ke.default.ClipType.ctUnion,n,null,Ke.default.PolyFillType.pftEvenOdd),ur=n=>Wo(Ke.default.ClipType.ctUnion,n,null);Vr=(n,t)=>Wo(Ke.default.ClipType.ctDifference,n,t),ks=(n,t)=>Wo(Ke.default.ClipType.ctIntersection,n,t);jn=n=>n.reduce((t,e)=>t+Xn(e),0);Vs=(n,t)=>n.map(e=>Im(e,t)).filter(e=>e.length>=3)});function wu(n){let t=[],e=[],i=[],r=[];for(let o of n.meshes||[]){let c=t.length/3,u=e.length/3,f=o.attributes.position.array;for(let g=0;g<f.length;g++)t.push(f[g]);let d=o.index.array;for(let g=0;g<d.length;g++)e.push(d[g]+c);for(let g of o.brep_faces||[])i.push({first:g.first+u,last:g.last+u});o.name&&r.push(o.name)}return{positions:Float64Array.from(t),indices:Uint32Array.from(e),faces:i,solids:(n.meshes||[]).length,names:r}}function Gs(n){let t=n.positions,e=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]<e[o]&&(e[o]=t[r+o]),t[r+o]>i[o]&&(i[o]=t[r+o]);return{min:e,max:i,size:[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}}function _c(n,t){let e=n.positions,i=n.indices,r=i[t*3]*3,o=i[t*3+1]*3,c=i[t*3+2]*3,u=e[o]-e[r],f=e[o+1]-e[r+1],d=e[o+2]-e[r+2],g=e[c]-e[r],y=e[c+1]-e[r+1],_=e[c+2]-e[r+2],b=f*_-d*y,E=d*g-u*_,P=u*y-f*g,S=Math.hypot(b,E,P);return S>0?[b/S,E/S,P/S]:[0,0,0]}function Rm(n){let[t,e,i]=n;if(i>.999999)return[1,0,0,0,1,0,0,0,1];if(i<-.999999)return[1,0,0,0,-1,0,0,0,-1];let r=e,o=-t,c=Math.hypot(r,o);r/=c,o/=c;let u=i,f=c,d=1-u;return[d*r*r+u,d*r*o,o*f,d*r*o,d*o*o+u,-r*f,-o*f,r*f,u]}function vc(n,t){let e=n.positions,i=new Float64Array(e.length);for(let c=0;c<e.length;c+=3){let u=e[c],f=e[c+1],d=e[c+2];i[c]=t[0]*u+t[1]*f+t[2]*d,i[c+1]=t[3]*u+t[4]*f+t[5]*d,i[c+2]=t[6]*u+t[7]*f+t[8]*d}let r={positions:i,indices:n.indices,faces:n.faces},{min:o}=Gs(r);for(let c=0;c<i.length;c+=3)i[c]-=o[0],i[c+1]-=o[1],i[c+2]-=o[2];for(let c=0;c<i.length;c++)i[c]=Math.round(i[c]*1e6)/1e6;return r}function fr(n,t=.001){let{max:e,size:i}=Gs(n),r=e[2],o=new Set,c=0,u=0,f=0,d=n.positions,g=n.indices,y=g.length/3;for(let E=0;E<y;E++){let P=g[E*3]*3,S=g[E*3+1]*3,M=g[E*3+2]*3,O=_c(n,E),G=d[S]-d[P],R=d[S+1]-d[P+1],F=d[S+2]-d[P+2],B=d[M]-d[P],Y=d[M+1]-d[P+1],C=d[M+2]-d[P+2],V=Math.hypot(R*C-F*Y,F*B-G*C,G*Y-R*B)/2;f+=V;let W=(d[P+2]+d[S+2]+d[M+2])/3;O[2]>1-t?o.add(Math.round(W*1e3)/1e3):O[2]<-(1-t)?W>t&&(c+=V):Math.abs(O[2])>t&&(O[2]<0?c+=V:u+=V)}let _=c>.001*f,b=_?Nm(n):{inside:0,total:0};return{size:i,top:r,floors:[...o].sort((E,P)=>P-E),undercut:_&&b.inside>Su,squareEdges:_&&b.inside<=Su,sloped:u>.001*f,undercutArea:c,slopedArea:u,missed:b.inside,missedTotal:b.total}}function Lm(n){let t=n.positions,e=n.indices,i=0;for(let r=0;r<e.length;r+=3){let o=e[r]*3,c=e[r+1]*3,u=e[r+2]*3;i+=t[o]*(t[c+1]*t[u+2]-t[c+2]*t[u+1])-t[o+1]*(t[c]*t[u+2]-t[c+2]*t[u])+t[o+2]*(t[c]*t[u+1]-t[c+1]*t[u])}return Math.abs(i/6)}function Nm(n){let{min:t,max:e}=Gs(n),i=e[0]-t[0],r=e[1]-t[1],o=Math.max(.05,Math.sqrt(i*r/25e4)),c={x0:t[0],y0:t[1],cell:o,nx:Math.ceil(i/o)+1,ny:Math.ceil(r/o)+1},{h:u,mat:f}=Dm(n,c),d=ur(zi(Yo(yc(n,t[2]+.01))).map(S=>S[0])),g=bu(d,c),y=bu(tn(d,Math.min(3,.15*Math.min(i,r))),c),_=0,b=0;for(let S=0;S<u.length;S++){if(!(u[S]>t[2]))continue;let M=Math.max(0,u[S]-t[2]-f[S]);_+=M,(g[S]||!y[S])&&(b+=M)}let E=Lm(n),P=o*o;return E>0?{inside:b*P/E,total:_*P/E}:{inside:0,total:0}}function Dm(n,t){let e=t.nx*t.ny,i=new Float32Array(e).fill(-1/0),r=new Float32Array(e),o=n.positions,c=n.indices;for(let u=0;u<c.length;u+=3){let f=c[u]*3,d=c[u+1]*3,g=c[u+2]*3,y=o[f],_=o[f+1],b=o[f+2],E=o[d],P=o[d+1],S=o[d+2],M=o[g],O=o[g+1],G=o[g+2],R=(P-O)*(y-M)+(M-E)*(_-O);if(Math.abs(R)<1e-12)continue;let F=(E-y)*(O-_)-(P-_)*(M-y)>0?1:-1,B=Math.max(0,Math.ceil((Math.min(y,E,M)-t.x0)/t.cell)),Y=Math.min(t.nx-1,Math.floor((Math.max(y,E,M)-t.x0)/t.cell)),C=Math.max(0,Math.ceil((Math.min(_,P,O)-t.y0)/t.cell)),V=Math.min(t.ny-1,Math.floor((Math.max(_,P,O)-t.y0)/t.cell));for(let W=C;W<=V;W++)for(let et=B;et<=Y;et++){let nt=t.x0+(et+5e-4)*t.cell,Q=t.y0+(W+7e-4)*t.cell,K=((P-O)*(nt-M)+(M-E)*(Q-O))/R,U=((O-_)*(nt-M)+(y-M)*(Q-O))/R,tt=1-K-U;if(K<0||U<0||tt<0)continue;let ct=K*b+U*S+tt*G,mt=W*t.nx+et;ct>i[mt]&&(i[mt]=ct),r[mt]+=F*ct}}return{h:i,mat:r}}function bu(n,t){let e=new Uint8Array(t.nx*t.ny);for(let i=0;i<t.ny;i++){let r=t.y0+i*t.cell,o=[];for(let c of n)for(let u=0;u<c.length;u++){let[f,d]=c[u],[g,y]=c[(u+1)%c.length];d<=r!=y<=r&&o.push(f+(r-d)/(y-d)*(g-f))}o.sort((c,u)=>c-u);for(let c=0;c+1<o.length;c+=2){let u=Math.max(0,Math.ceil((o[c]-t.x0)/t.cell)),f=Math.min(t.nx-1,Math.floor((o[c+1]-t.x0)/t.cell));for(let d=u;d<=f;d++)e[i*t.nx+d]=1}}return e}function yc(n,t){let e=n.positions,i=n.indices,r=[],o=i.length/3;for(let c=0;c<o;c++){let u=[i[c*3]*3,i[c*3+1]*3,i[c*3+2]*3],f=[];for(let d=0;d<3;d++){let g=u[d],y=u[(d+1)%3],_=e[g+2]-t,b=e[y+2]-t;if(_<0!=b<0){let E=_/(_-b);f.push([e[g]+(e[y]-e[g])*E,e[g+1]+(e[y+1]-e[g+1])*E])}}f.length===2&&r.push(f)}return Om(r)}function Om(n){let t=([o,c])=>`${Math.round(o*1e4)},${Math.round(c*1e4)}`,e=new Map;n.forEach((o,c)=>{for(let u of[0,1]){let f=t(o[u]);e.has(f)||e.set(f,[]),e.get(f).push(c)}});let i=new Uint8Array(n.length),r=[];for(let o=0;o<n.length;o++){if(i[o])continue;i[o]=1;let c=[n[o][0],n[o][1]],u=t(n[o][0]),f=n[o][1];for(let d=0;d<n.length;d++){let g=t(f);if(g===u)break;let y=(e.get(g)||[]).find(b=>!i[b]);if(y===void 0)break;i[y]=1;let _=n[y];f=t(_[0])===g?_[1]:_[0],t(f)!==u&&c.push(f)}c.length>=3&&r.push(c)}return r}function Eu(n){let t={};for(let r of Object.keys(gc)){let o=fr($o(n,r));t[r]={reachable:!o.undercut,missed:o.missed,missedTotal:o.missedTotal,undercutArea:o.undercutArea,slopedArea:o.slopedArea,height:o.size[2]}}let e=Object.keys(gc),i=e.slice().sort((r,o)=>{let c=t[r],u=t[o];return(c.reachable===u.reachable?0:c.reachable?-1:1)||(Math.abs(c.missed-u.missed)>1e-4?c.missed-u.missed:0)||(Math.abs(c.missedTotal-u.missedTotal)>1e-4?c.missedTotal-u.missedTotal:0)||(Math.abs(c.slopedArea-u.slopedArea)>1e-6?c.slopedArea-u.slopedArea:0)||(Math.abs(c.height-u.height)>1e-6?c.height-u.height:0)||e.indexOf(r)-e.indexOf(o)});if(!i.some(r=>t[r].reachable))for(let r of e)t[r].reachable=!0;return{sides:t,best:i[0]}}var gc,$o,Su,xc=Pn(()=>{Hs();gc={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],left:[-1,0,0],right:[1,0,0]};$o=(n,t)=>vc(n,Rm(typeof t=="string"?gc[t]:t));Su=.05});function Tu(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return Fm.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t||"flat"}function pr(n,t){return t==="toolId"?n.toolId??n.id:n.toolNumber??n.toolId??n.id}function Au(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${Tu(t)}`,kind:Tu(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2}))}function Cu(n,t,e,i={}){let r=dr[t]||dr.mdf,o=Wn[e]||Wn.balanced,c=i.maxRpm||24e3,u=i.minRpm||0,f=Math.round(Math.min(c,Math.max(u,r.rpm))),d=Math.min(r.maxChip,r.chip*n.diameter),g=Math.min(i.maxFeed||4e3,4e3),y=Math.round(Math.min(g,Math.max(150,f*n.flutes*d*o.feed)));return{rpm:f,feed:y,plunge:Math.round(Math.max(60,y*.3)),stepdown:Math.max(.05,n.diameter*r.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,r.stepover*o.stepover)),rampAngle:r.ramp}}var dr,Wn,Fm,Vi,Xs=Pn(()=>{dr={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},Wn={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},Fm=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"]);Vi=n=>n==="aluminum"?{height:1,length:1}:{height:2,length:2}});function Sc(n){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:2,extraTop:1,width:n.size[0]+4,depth:n.size[1]+4,thickness:n.size[2]+1},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,...Vi("mdf")},throughDepth:.3,disabled:{},toolOverride:{}}}function Zo(n,t){let[e,i,r]=n.size,o=t.stock,c=o.fit?e+2*o.margin:Math.max(e,o.width),u=o.fit?i+2*o.margin:Math.max(i,o.depth),f=o.fit?r+o.extraTop:Math.max(r,o.thickness);return{minX:(e-c)/2,minY:(i-u)/2,maxX:(e+c)/2,maxY:(i+u)/2,bottom:0,top:f,width:c,depth:u,thickness:f}}function bc(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,r=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(r=n.minY),e.includes("back")&&(r=n.maxY),{x:i,y:r,z:t.z==="bed"?n.bottom:n.top}}function Um(n){let t=n.positions,e=n.indices,i=[];for(let r=0;r<e.length/3;r++){if(_c(n,r)[2]>-.001)continue;let c=[e[r*3]*3,e[r*3+1]*3,e[r*3+2]*3],u=c.map(f=>[t[f],t[f+1]]);Math.abs(Xn(u))<1e-6||i.push({loop:Xn(u)>0?u:u.reverse(),maxZ:Math.max(...c.map(f=>t[f+2]))})}return i}function km(n){if(n.length!==1)return null;let t=n[0];if(t.length<12)return null;let e=ki([t]),i=(e.minX+e.maxX)/2,r=(e.minY+e.maxY)/2,o=t.map(([u,f])=>Math.hypot(u-i,f-r)),c=o.reduce((u,f)=>u+f,0)/o.length;return o.every(u=>Math.abs(u-c)<Math.max(.03,c*.01))?{x:i,y:r,d:2*c}:null}function Ru(n,t,e,i={}){let r=fr(n),o=Zo(r,e),c=Wn[e.finish]||Wn.balanced,u=[];r.squareEdges&&u.push({kind:"edges",text:"Chamfers or rounded edges face down on this side, so they are left square."}),r.undercut&&u.push({kind:"undercut",text:"Some features face the other side, so they can\u2019t be reached from the top. Cut this side, then turn the part over for a second setup."}),r.sloped&&u.push({kind:"sloped",text:"Sloped or curved faces (chamfers, fillets) aren\u2019t cut in 3D yet, so they are left square."});let f=t.filter(U=>U.kind==="flat").sort((U,tt)=>tt.diameter-U.diameter),d=t.filter(U=>U.kind==="drill"),g=t.filter(U=>U.kind==="surfacing").sort((U,tt)=>tt.diameter-U.diameter),y=new Map,_=U=>(U&&y.set(U.id,(y.get(U.id)||0)+1),U),b=e.material==="aluminum"?8:12.8,E=r.undercutArea>0?Um(n):[],P=new Map,S=U=>{if(P.has(U))return P.get(U);let tt=Yo(yc(n,U+Hr)),ct=E.filter(ht=>ht.maxZ>U+Hr).map(ht=>ht.loop),mt=ct.length?tn(tn(ur([...tt,...Mu(ct)]),.002),-.002):tt;return P.set(U,mt),mt},M=S(0),O=ur(zi(M).map(U=>U[0])),G=[],R=1,F=U=>(U.id=U.id||`op${R++}`,G.push(U),U);function B(U,tt,ct){let mt=f.filter(Lt=>Lt.diameter<=b&&Ws(Lt,tt)&&tn(U,-(Lt.diameter/2+ct)).length);if(!mt.length)return null;let ht=mt.map(Lt=>({t:Lt,c:zm(U,Lt.diameter/2)})),yt=ht.find(Lt=>Lt.c>=.85)||ht.reduce((Lt,zt)=>zt.c>Lt.c?zt:Lt);return(ht.find(Lt=>y.has(Lt.t.id)&&Lt.c>=Math.min(.85,yt.c*.98))||yt).t}function Y(U,tt,ct){let mt=di(Vr(U,Mc(U,tt.diameter/2)),Hi);if(jn(mt)<Hi)return null;let ht=f.filter(Lt=>Lt.diameter<tt.diameter-1e-6&&Ws(Lt,ct));if(!ht.length)return{tool:null,left:mt};let yt=jn(mt);return{tool:ht.find(Lt=>jn(di(Vr(U,Mc(U,Lt.diameter/2)),Hi))<yt*.25)||ht[ht.length-1],left:mt}}let C=U=>Cu(U,e.material,e.finish,i);if(o.top>r.top+Hr){let U=g[0]||f[0];U&&F({id:"face",kind:"face",label:"Flatten the top",tool:_(U),zTop:o.top,zBottom:r.top,region:Pu(o),detail:`${In(o.top-r.top)} mm off the top`})}let V=[r.top,...r.floors.filter(U=>U<r.top-Hr&&U>Hr),0],W=[],et=(U,tt)=>{let ct=jn(U),mt=jn(tt);if(Math.abs(ct-mt)>Math.max(Hi,ct*.005))return!1;let ht=ki(U),yt=ki(tt);return Math.abs(ht.minX-yt.minX)<.01&&Math.abs(ht.maxX-yt.maxX)<.01&&Math.abs(ht.minY-yt.minY)<.01&&Math.abs(ht.maxY-yt.maxY)<.01};for(let U=1;U<V.length;U++){let tt=V[U-1],ct=V[U],mt=Vr(Pu(o),S(ct));for(let ht of zi(mt)){if(jn(ht)<Hi||!tn(ht,-.05).length)continue;let yt=ki([ht[0]]),bt=yt.minX<=o.minX+.001||yt.maxX>=o.maxX-.001||yt.minY<=o.minY+.001||yt.maxY>=o.maxY-.001,Lt=null;if(bt&&(ct===0||(Lt=di(ks(ht,O),Hi),jn(Lt)<Hi)))continue;let zt=bt?Lt:ht,le=W.find(ae=>ae.zFloor===tt&&ae.outer===bt&&et(ae.shape,zt));le?(le.zFloor=ct,le.region=ht):W.push({outer:bt,region:ht,over:Lt,shape:zt,zTop:tt,zFloor:ct})}}let nt=new Map;for(let{outer:U,region:tt,over:ct,zTop:mt,zFloor:ht}of W){let yt=ht===0,bt=yt?-e.throughDepth:ht,Lt=mt-bt;{if(U){let Vt=B(ks(tt,tn(ct,13)),Lt,c.allowance);if(!Vt){u.push({kind:"notool",text:`A step ${In(mt-ht)} mm deep has no end mill that fits.`});continue}let re=ks(tt,tn(ct,Vt.diameter+.5));F({kind:"step",label:"Cut the step",tool:_(Vt),zTop:mt,zBottom:bt,region:re,walls:tt,detail:`${In(mt-ht)} mm deep`});continue}let zt=km(tt);if(zt){let Vt=`${In(zt.d)}|${In(mt)}|${In(bt)}`;nt.has(Vt)||nt.set(Vt,{d:zt.d,zTop:mt,zBottom:bt,through:yt,centers:[],regions:[]}),nt.get(Vt).centers.push(zt),nt.get(Vt).regions.push(tt);continue}let le=ki([tt[0]]),ae=B(tt,Lt,c.allowance),dt=`${In(le.maxX-le.minX)} \xD7 ${In(le.maxY-le.minY)} mm \xB7 ${yt?"through":`${In(mt-ht)} mm deep`}`;if(!ae){u.push({kind:"notool",text:`No end mill fits the pocket ${dt}.`});continue}let wt=F({kind:"pocket",label:yt?"Cut the opening":"Clear the pocket",tool:_(ae),zTop:mt,zBottom:bt,region:tt,detail:dt}),Pt=Y(tt,ae,Lt);Pt&&Pt.tool?F({kind:"corners",label:"Clean the corners",tool:_(Pt.tool),zTop:mt,zBottom:bt,region:tt,after:wt.id,detail:`Corners too tight for ${ae.name}`}):Pt&&u.push({kind:"corners",text:`Pocket corners stay rounded to ${In(ae.diameter/2)} mm: no smaller end mill in your library.`})}}for(let U of nt.values()){let tt=U.centers.length,ct=U.zTop-U.zBottom,mt=`\xD8${In(U.d)} mm ${U.through?"through":`${In(U.zTop-U.zBottom)} mm deep`}`,ht=d.find(Lt=>Bm(Lt.diameter,U.d)&&Ws(Lt,ct));if(ht){F({kind:"drill",label:tt>1?`Drill ${tt} holes`:"Drill the hole",tool:_(ht),zTop:U.zTop,zBottom:U.zBottom,centers:U.centers,detail:mt});continue}let yt=U.regions.flat().length?U.regions.flatMap(Lt=>Lt):[],bt=B(yt,ct,0)||null;if(!bt||bt.diameter>U.d-.4){let Lt=f.find(zt=>zt.diameter<=U.d-.4&&Ws(zt,ct));if(!Lt){u.push({kind:"notool",text:`No drill or end mill fits the ${mt} hole${tt>1?"s":""}.`});continue}F({kind:"hole",label:tt>1?`Cut ${tt} holes`:"Cut the hole",tool:_(Lt),zTop:U.zTop,zBottom:U.zBottom,region:yt,centers:U.centers,detail:`${mt} \xB7 spiral`});continue}F({kind:"hole",label:tt>1?`Cut ${tt} holes`:"Cut the hole",tool:_(bt),zTop:U.zTop,zBottom:U.zBottom,region:yt,centers:U.centers,detail:`${mt} \xB7 spiral`})}if(O.length){let U=r.top+e.throughDepth,tt=f.filter(ht=>Ws(ht,U)&&ht.diameter<=b),ct=tt.find(ht=>y.has(ht.id))||tt.slice().sort((ht,yt)=>Math.abs(ht.diameter-6.35)-Math.abs(yt.diameter-6.35))[0],mt=e.tabs.enabled?`${e.tabs.count} tabs`:"no tabs";ct?F({id:"cutout",kind:"cutout",label:"Cut out the part",tool:_(ct),zTop:r.top,zBottom:-e.throughDepth,region:O,detail:`${In(r.top)} mm \xB7 ${mt}`}):u.push({kind:"notool",text:`No end mill is long enough to cut out the part (${In(U)} mm).`})}let Q=[],K=new Map;for(let U of G){if(U.kind!=="pocket"&&U.kind!=="corners"){Q.push(U);continue}let tt=U.after&&K.has(U.after)?K.get(U.after):U.after,ct=Q.find(mt=>mt.kind===U.kind&&mt.detail===U.detail&&mt.zTop===U.zTop&&mt.zBottom===U.zBottom&&mt.tool.id===U.tool.id&&(mt.after||null)===(tt||null));ct?(ct.region=[...ct.region,...U.region],ct.count=(ct.count||1)+1,K.set(U.id,ct.id)):Q.push({...U,after:tt})}for(let U of Q)U.count>1&&(U.kind==="pocket"&&(U.label=U.label==="Cut the opening"?`Cut ${U.count} openings`:`Clear ${U.count} pockets`),U.kind==="corners"&&(U.label=`Clean the corners of ${U.count} pockets`));G.length=0,G.push(...Q);for(let U of G){let tt=e.toolOverride?.[U.id];if(tt){let ct=t.find(mt=>mt.id===tt);ct&&(U.tool=ct)}U.enabled=!e.disabled?.[U.id],U.feeds=C(U.tool)}return{analysis:r,stock:o,zero:bc(o,e.zero),ops:Vm(G),warnings:u,job:e}}function Vm(n){let t=n.filter(d=>d.kind==="face"),e=n.filter(d=>d.kind==="cutout"),i=n.filter(d=>d.kind!=="face"&&d.kind!=="cutout"),r=d=>d.region||(d.centers||[]).map(g=>Hm(g)),o=new Map(i.map(d=>[d,i.filter(g=>g!==d&&(d.after===g.id||g.zTop>d.zTop+Hr&&jn(ks(r(d),r(g)))>Hi))])),c=new Set,u=[...t],f=t.length?t[t.length-1].tool:null;for(;c.size<i.length;){let d=i.filter(y=>!c.has(y)&&o.get(y).every(_=>c.has(_))),g=d.find(y=>f&&y.tool.id===f.id)||d[0];c.add(g),u.push(g),f=g.tool}return[...u,...e]}function Hm(n,t=32){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}function Jo(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var Hr,Hi,Iu,Pu,Bm,Mc,zm,Ws,In,Lu=Pn(()=>{xc();Hs();Xs();Hr=.01,Hi=.05,Iu=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"];Pu=n=>[[[n.minX,n.minY],[n.maxX,n.minY],[n.maxX,n.maxY],[n.minX,n.maxY]]],Bm=(n,t)=>Math.abs(n-t)<.05;Mc=(n,t)=>tn(tn(n,-t),t),zm=(n,t)=>{let e=jn(n);return e>0?jn(Mc(n,t))/e:0},Ws=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,In=n=>(Math.round(n*10)/10).toString()});function Gr(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(r,o)=>n-(o+1)*(n-t)/i)}function Ys(n,t,e,i,r,o,c){let u=[...t.breaks(e,i),i];if(c)for(let d of c.edges(e,i))u.push(d);u.sort((d,g)=>d-g);let f=e;for(let d of u){if(d-f<1e-9)continue;let g=(f+d)/2,y=c&&c.inside(g)?c.top:-1/0,[_,b]=t.at(f),E=Math.max(r(f),y);n.at&&Math.abs(n.at.z-E)>1e-6&&n.feed(_,b,E,o);let[P,S]=t.at(d);n.feed(P,S,Math.max(r(d),y),o),f=d}}function Nu(n,t,e,i,r,o,c){let u=Math.max(0,(i-r)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||u<1e-6){let[d,g]=t.at(e);return n.feed(d,g,c&&c.inside(e)?Math.max(r,c.top):r,o.plunge),Ys(n,t,e,e+t.length,()=>r,o.feed,c),e}let f=e+u;return Ys(n,t,e,f,d=>i-(d-e)/u*(i-r),Math.min(o.feed,o.plunge*2),c),Ys(n,t,f,f+t.length,()=>r,o.feed,c),f}function Xm(n,t,e){let i=[];for(let r=t,o=0;o<500;r+=e,o++){let c=Vs(di(tn(n,-r),.001),.005);if(!c.length)break;i.push(c)}return i}function Wm(n){let t=n.map((r,o)=>r.map(c=>({loop:c,depth:o,kids:[]})));for(let r=1;r<t.length;r++)for(let o of t[r])(t[r-1].find(u=>zs(o.loop[0],u.loop)&&Math.sign(Xn(u.loop))===Math.sign(Xn(o.loop)))||t[r-1].find(u=>zs(o.loop[0],u.loop))||t[0][0]).kids.push(o);let e=[],i=r=>{if(!r.kids.length){e.push([r.loop]);return}for(let o of r.kids)i(o);e[e.length-1].push(r.loop)};for(let r of t[0]||[])Xn(r.loop)>0&&i(r);for(let r of t[0]||[])Xn(r.loop)<=0&&!t[0].some(o=>o.kids.includes(r))&&i(r);return e}function Ym(n,t){let e=0;for(let i of t)zs(n,i)&&(e+=Xn(i)>0?1:-1);return e>0}function qm(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let r=1;r<i;r++){let o=r/i;if(!Ym([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function $m(n,t,e,i,r,o,c){let u=Math.min(i.stepover,e*.95),f=Xm(t,e+c,u);if(!f.length)return;let d=tn(t,-(e+c)+.01),g=Wm(f),y=r;for(let _ of Gr(r,o,i.stepdown)){for(let b of g){let E=new mr(b[0]),[P,S]=E.at(0);n.goTo(P,S,y),n.feed(P,S,y,i.plunge);let M=Nu(n,E,0,y,_,i);for(let O=1;O<b.length;O++){let G=E.at(M),R=new mr(b[O]),F=R.nearest(G);qm(G,R.at(F),d)||([P,S]=R.at(F),n.rapid(G[0],G[1],y+1),n.rapid(P,S,y+1),n.feed(P,S,_,i.plunge)),Ys(n,R,F,F+R.length,()=>_,i.feed),E=R,M=F}}y=_}n.retract()}function Du(n,t,e,i,r,o,c){let u=Vs(di(tn(t,-e),.001),.005);for(let f of u){let d=new mr(f),[g,y]=d.at(0);n.goTo(g,y,r);for(let _ of Gr(r,o,c))n.feed(g,y,_,i.plunge),Ys(n,d,0,d.length,()=>_,i.feed*.9);n.retract()}}function Zm(n,t,e,i,r,o,c){let u=di(Vr(t,tn(tn(t,-i),i)),.01);if(!u.length)return;let f=tn(u,e+.5);for(let d of Vs(di(tn(t,-e),.001),.005)){let g=new mr(d),y=Math.max(8,Math.ceil(g.length/.25)),_=Array.from({length:y},(E,P)=>f.some(S=>zs(g.at(P/y*g.length),S)));if(_.every(Boolean)){Du(n,t,e,r,o,c,r.stepdown);return}let b=_.indexOf(!1);for(let E=0;E<y;E++){let P=(b+E)%y;if(!_[P]||_[(P-1+y)%y])continue;let S=P;for(;_[(S+1)%y]&&S-P<y;)S++;let M=P/y*g.length,O=(S+1)/y*g.length,[G,R]=g.at(M);n.goTo(G,R,o);let F=!0;for(let B of Gr(o,c,r.stepdown)){let Y=[...g.breaks(M,O),O],C=F?Y:[...Y.slice(0,-1).reverse(),M],[V,W]=g.at(F?M:O);n.feed(V,W,B,r.plunge);for(let et of C){let[nt,Q]=g.at(et);n.feed(nt,Q,B,r.feed)}F=!F}n.retract()}}}function Jm(n,t,e,i,r,o){let c=Math.min(i.stepover,e*1.6),u=t.minX-e-2,f=t.maxX+e+2;for(let d of Gr(r,o,i.stepdown)){let g=t.minY+e*.6;n.goTo(u,g,r),n.feed(u,g,d,i.plunge);let y=1;for(;n.feed(y>0?f:u,g,d,i.feed),!(g>=t.maxY-e*.6-1e-6);)g=Math.min(g+c,t.maxY-e*.6),n.feed(y>0?f:u,g,d,i.feed),y=-y}n.retract()}function jm(n,t,e,i,r,o){let c=Math.max(.5,o*1.5);for(let u of t){n.goTo(u.x,u.y,i);let f=i;for(;f>r+1e-6;){let d=Math.max(r,f-c);f<i&&n.rapid(u.x,u.y,f+.5),n.feed(u.x,u.y,d,e.plunge),n.rapid(u.x,u.y,i+1),f=d}n.retract()}}function Km(n,t,e,i){let r=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!r)return null;let o=t.tabs.length??Vi(t.material).length,c=2*e+o,u=Array.from({length:r},(d,g)=>{let y=(g+.5)/r*n;return[y-c/2,y+c/2]}),f=n;return{top:i+(t.tabs.height??Vi(t.material).height),inside:d=>{let g=(d%f+f)%f;return u.some(([y,_])=>g>y&&g<_)},edges:(d,g)=>{let y=[];for(let _=Math.floor(d/f);_*f<=g;_++)for(let[b,E]of u)for(let P of[b,E]){let S=_*f+P;S>d&&S<g&&y.push(S)}return y}}}function Qm(n,t,e,i,r,o,c,u){let f=[{off:e+u,fd:i}];u>0&&f.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let d of f)for(let g of zi(t).map(y=>y[0])){let y=Vs(di(tn([g],d.off),.001),.005).filter(_=>Xn(_)>0);for(let _ of y){let b=new mr(_.slice().reverse()),E=Km(b.length,c,e,0),[P,S]=b.at(0);n.goTo(P,S,r),n.feed(P,S,r,i.plunge);let M=0,O=r,G=d.finish?Gr(r,o,Math.max(i.stepdown,Math.min(6*e,r-o))):Gr(r,o,i.stepdown);for(let R of G)M=Nu(n,b,M,O,R,d.fd,E),O=R;n.retract()}}}function tg(n,t){let e=c=>{let u=ki([c[0]]);return[(u.minX+u.maxX)/2,(u.minY+u.maxY)/2]},i=n.map(c=>({a:c,m:e(c)})),r=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let c=0;for(let f=1;f<i.length;f++)Math.hypot(i[f].m[0]-o[0],i[f].m[1]-o[1])<Math.hypot(i[c].m[0]-o[0],i[c].m[1]-o[1])&&(c=f);let[u]=i.splice(c,1);r.push(u.a),o=u.m}return r}function Ou(n){let t=n.stock.top+Gm,e=(Wn[n.job.finish]||Wn.balanced).allowance,r=n.ops.some(o=>o.kind==="face"&&o.enabled)?n.analysis.top:n.stock.top;for(let o of n.ops){let c=new wc(t),u=o.kind!=="face"&&o.zTop>=n.analysis.top-1e-6?Math.max(o.zTop,r):o.zTop,f=o.tool.diameter/2,d=o.feeds,g=Math.min(o.tool.fluteLength||1/0,3*o.tool.diameter);switch(o.kind){case"face":Jm(c,n.stock,f,d,u,o.zBottom);break;case"pocket":case"step":case"hole":for(let y of tg(zi(o.region),c.at))$m(c,y,f,d,u,o.zBottom,e),e>0&&Du(c,y,f,d,u,o.zBottom,g);break;case"corners":{let y=n.ops.find(_=>_.id===o.after);Zm(c,o.region,f,y?y.tool.diameter/2:f*2,d,u,o.zBottom);break}case"drill":jm(c,o.centers,d,u,o.zBottom,o.tool.diameter);break;case"cutout":Qm(c,o.region,f,d,u,o.zBottom,n.job,e);break}o.moves=c.moves}return n}var Gm,wc,mr,Fu=Pn(()=>{Hs();Xs();Gm=3;wc=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,r){this.push({x:t,y:e,z:i,f:r})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ),this.rapid(t,e,this.clearZ),this.rapid(t,e,i+1)}retract(){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ)}},mr=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],r=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(r[0]-i[0],r[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,r=1;for(;r<this.s.length-1&&this.s[r]<i;)r++;let o=this.p[r-1],c=this.p[r%this.p.length],u=this.s[r]-this.s[r-1]||1,f=(i-this.s[r-1])/u;return[o[0]+(c[0]-o[0])*f,o[1]+(c[1]-o[1])*f]}breaks(t,e){let i=[],r=this.length;for(let o=Math.floor(t/r);o*r<=e;o++)for(let c=0;c<this.p.length;c++){let u=o*r+this.s[c];u>t+1e-9&&u<e-1e-9&&i.push(u)}return i}nearest([t,e]){let i=0,r=1/0;for(let o=0;o<this.p.length;o++){let c=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;c<r&&(r=c,i=this.s[o])}return i}}});function Uu(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:r=null,spindleDelay:o=3}=t,c=Number.isFinite(r)?`G53 G0 Z${Gi(r)}`:"G53 G0 Z0",u=n.zero,f=n.stock,d=[Xr(`ncCAM: ${e}`),Xr(`Stock ${Gi(f.width)} x ${Gi(f.depth)} x ${Gi(f.thickness)} mm, ${(dr[n.job.material]||{}).name||n.job.material}, ${(Wn[n.job.finish]||{}).name||n.job.finish}`),Xr(`Zero: X Y at the ${ng[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],g=n.ops.filter(P=>P.enabled&&P.moves&&P.moves.length);for(let P of[...new Map(g.map(S=>[S.tool.id,S.tool])).values()])d.push(Xr(`T${pr(P,i)}: ${P.name}, ${Gi(P.diameter)} mm`));d.push("G21 G90 G94 G17");let y=null,_={},b=null,E=null;for(let P of g){(!y||P.tool.id!==y.id)&&(y&&d.push("M5"),d.push(c,`M6 T${pr(P.tool,i)}`,Xr(P.tool.name)),y=P.tool,d.push(`M3 S${P.feeds.rpm}`),o>0&&d.push(`G4 P${o}`),_={},b=null,E=null),d.push(Xr(`${P.label}${P.detail?": "+P.detail:""}`));for(let S of P.moves){let M=Gi(S.x-u.x),O=Gi(S.y-u.y),G=Gi(S.z-u.z);if(S.r&&(M!==_.x||O!==_.y)&&G!==_.z){let Y=_.z===void 0||+G<+_.z?[`X${M} Y${O}`,`Z${G}`]:[`Z${G}`,`X${M} Y${O}`];for(let C of Y)d.push(`${E==="G0"?"":"G0 "}${C}`),E="G0";_={x:M,y:O,z:G};continue}let R=S.r?"G0":"G1",F=R===E?"":R;M!==_.x&&(F+=` X${M}`),O!==_.y&&(F+=` Y${O}`),G!==_.z&&(F+=` Z${G}`),!S.r&&S.f!==b&&(F+=` F${Math.round(S.f)}`,b=S.f),F=F.trim(),!(!F||F===R)&&(d.push(F),E=R,_={x:M,y:O,z:G})}}return d.push("M5",c,"M30",""),d.join(`
`)}function Bu(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let r=0,o=null,c=null;for(let u of n.ops){if(!u.enabled||!u.moves)continue;(!c||u.tool.id!==c.id)&&(r+=e+(c?i:0),c=u.tool);let f=0;for(let d of u.moves){if(o){let g=Math.hypot(d.x-o.x,d.y-o.y,d.z-o.z);f+=g/(d.r?t:d.f)*60}o=d}u.seconds=f,r+=f}return r}var Gi,eg,Xr,ng,ku=Pn(()=>{Xs();Gi=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},eg={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Xr=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>eg[t]??"")})`,ng={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});function Ec(n,t){let e=n.diameter/2,i=Math.ceil(e/t),r=[];for(let o=-i;o<=i;o++)for(let c=-i;c<=i;c++){let u=Math.hypot(c,o)*t;if(u>e+1e-6)continue;let f=Math.min(u,e),d=0;if(n.kind==="ball")d=e-Math.sqrt(Math.max(0,e*e-f*f));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let g=(n.angle||(n.kind==="drill"?118:60))*Math.PI/360;d=f/Math.tan(g)}r.push(c,o,d)}return Float32Array.from(r)}function ig(n,t,e,i,r,o){let c=Math.hypot(i.x-e.x,i.y-e.y),u=Math.max(1,Math.ceil(c/(n.cell*.5))),f=!1;for(let d=r?0:1;d<=u;d++){let g=d/u,y=(e.x+(i.x-e.x)*g-n.x0)/n.cell,_=(e.y+(i.y-e.y)*g-n.y0)/n.cell,b=e.z+(i.z-e.z)*g;if(b>=n.top)continue;let E=Math.round(y),P=Math.round(_);for(let S=0;S<t.length;S+=3){let M=E+t[S],O=P+t[S+1];if(M<0||O<0||M>=n.nx||O>=n.ny)continue;let G=O*n.nx+M,R=b+t[S+2];if(n.h[G]>R+1e-4){if(r){n.h[G]>R+.05&&(f=!0);continue}n.h[G]=R,n.op[G]=o+1}}}return f}function zu(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function Tc(n,t,e,i,r){let o=t.diameter/2,c=n.cell,u=o/c,f=t.kind==="ball"?Q=>o-Math.sqrt(Math.max(0,o*o-Q*Q)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(Q=>K=>K/Q)(Math.tan((t.angle||(t.kind==="drill"?118:60))*Math.PI/360)):()=>0,d=!t.kind||t.kind==="flat"||t.kind==="surfacing",{h:g,sx:y,sy:_,wx:b,wy:E,gap:P,deep:S,nx:M,ny:O}=n,G=1.5*c,R=u+1.5,F=(Q,K,U,tt)=>{let ct=Math.hypot(K,U);if(ct>R)return;let mt=ct*c;if(mt<=o){let ht=tt+f(mt);if(g[Q]>ht+1e-4)g[Q]=ht,n.op[Q]=r+1,P[Q]=1/0,S[Q]=-1/0;else if(g[Q]<ht-1e-4)return;o-mt>S[Q]&&(S[Q]=o-mt,d&&o-mt<G&&ct>1e-6?(y[Q]=K/ct*(o-mt),_[Q]=U/ct*(o-mt),b[Q]=-K/ct,E[Q]=-U/ct):(y[Q]=0,_[Q]=0,b[Q]=0,E[Q]=0))}else d&&g[Q]>tt+1e-4&&mt-o<P[Q]&&(P[Q]=mt-o,y[Q]=K/ct*(o-mt),_[Q]=U/ct*(o-mt),b[Q]=-K/ct,E[Q]=-U/ct)},B=(e.x-n.x0)/c,Y=(e.y-n.y0)/c,C=(i.x-n.x0)/c,V=(i.y-n.y0)/c;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let Q=C-B,K=V-Y,U=Q*Q+K*K,tt=Math.max(0,Math.floor(Math.min(B,C)-R)),ct=Math.min(M-1,Math.ceil(Math.max(B,C)+R)),mt=Math.max(0,Math.floor(Math.min(Y,V)-R)),ht=Math.min(O-1,Math.ceil(Math.max(Y,V)+R));for(let yt=mt;yt<=ht;yt++)for(let bt=tt;bt<=ct;bt++){let Lt=U>0?Math.max(0,Math.min(1,((bt-B)*Q+(yt-Y)*K)/U)):0;F(yt*M+bt,bt-(B+Q*Lt),yt-(Y+K*Lt),e.z)}return}let W=Math.hypot(i.x-e.x,i.y-e.y),et=Math.max(1,Math.ceil(W/(c*.5))),nt=Math.ceil(R);for(let Q=1;Q<=et;Q++){let K=Q/et,U=B+(C-B)*K,tt=Y+(V-Y)*K,ct=e.z+(i.z-e.z)*K;if(ct>=n.top)continue;let mt=Math.max(0,Math.floor(U-nt)),ht=Math.min(M-1,Math.ceil(U+nt)),yt=Math.max(0,Math.floor(tt-nt)),bt=Math.min(O-1,Math.ceil(tt+nt));for(let Lt=yt;Lt<=bt;Lt++)for(let zt=mt;zt<=ht;zt++)F(Lt*M+zt,zt-U,Lt-tt,ct)}}function Vu(n,t){let e=new Xi(n.stock,t||Xi.cellFor(n.stock)),i=[];return n.ops.forEach((r,o)=>{if(!r.enabled||!r.moves)return;let c=Ec(r.tool,e.cell),u=null;for(let f of r.moves)u&&ig(e,c,u,f,!!f.r,o)&&i.push({op:r.id,at:f}),u=f}),{hm:e,collisions:i}}var Xi,Hu=Pn(()=>{Xi=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});var Ac=Pn(()=>{xc();Lu();Fu();ku();Hu();Xs();Hs()});function sg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function og(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function so(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nd(){let n=so("canvas");return n.style.display="block",n}function oo(...n){let t="THREE."+n.shift();fs?fs("log",t,...n):console.log(t,...n)}function id(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ce(...n){n=id(n);let t="THREE."+n.shift();if(fs)fs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ue(...n){n=id(n);let t="THREE."+n.shift();if(fs)fs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function xr(...n){let t=n.join(" ");t in Wu||(Wu[t]=!0,ce(...n))}function rd(n,t,e){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Ri(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function we(n,t,e){return Math.max(t,Math.min(e,n))}function Lh(n,t){return(n%t+t)%t}function ag(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function lg(n,t,e){return n!==t?(e-n)/(t-n):0}function eo(n,t,e){return(1-e)*n+e*t}function cg(n,t,e,i){return eo(n,t,1-Math.exp(-e*i))}function hg(n,t=1){return t-Math.abs(Lh(n,t*2)-t)}function ug(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function fg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function dg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function pg(n,t){return n+Math.random()*(t-n)}function mg(n){return n*(.5-Math.random())}function gg(n){n!==void 0&&(Yu=n);let t=Yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _g(n){return n*ls}function vg(n){return n*ds}function yg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function xg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Mg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sg(n,t,e,i,r){let o=Math.cos,c=Math.sin,u=o(e/2),f=c(e/2),d=o((t+i)/2),g=c((t+i)/2),y=o((t-i)/2),_=c((t-i)/2),b=o((i-t)/2),E=c((i-t)/2);switch(r){case"XYX":n.set(u*g,f*y,f*_,u*d);break;case"YZY":n.set(f*_,u*g,f*y,u*d);break;case"ZXZ":n.set(f*y,f*_,u*g,u*d);break;case"XZX":n.set(u*g,f*E,f*b,u*d);break;case"YXY":n.set(f*b,u*g,f*E,u*d);break;case"ZYZ":n.set(f*E,f*b,u*g,u*d);break;default:ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bg(){let n={enabled:!0,workingColorSpace:io,spaces:{},convert:function(r,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Oe&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Oe&&(r.r=cs(r.r),r.g=cs(r.g),r.b=cs(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Oi?ro:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,c){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[io]:{primaries:t,whitePoint:i,transfer:ro,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:t,whitePoint:i,transfer:Oe,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),n}function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Rc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ua.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}function Dc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function Hc(n,t,e,i,r){for(let o=0,c=n.length-3;o<=c;o+=3){_r.fromArray(n,o);let u=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),f=t.dot(_r),d=e.dot(_r),g=i.dot(_r);if(Math.max(-Math.max(f,d,g),Math.min(f,d,g))>u)return!1}return!0}function oa(n,t,e,i,r,o){rs.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Ks.x=o*rs.x-r*rs.y,Ks.y=r*rs.x+o*rs.y):Ks.copy(rs),n.copy(t),n.x+=Ks.x,n.y+=Ks.y,n.applyMatrix4(ad)}function kg(n,t,e,i,r,o,c,u){let f;if(t.side===Tn?f=i.intersectTriangle(c,o,r,!0,u):f=i.intersectTriangle(r,o,c,t.side===sr,u),f===null)return null;pa.copy(u),pa.applyMatrix4(n.matrixWorld);let d=e.ray.origin.distanceTo(pa);return d<e.near||d>e.far?null:{distance:d,point:pa.clone(),object:n}}function ma(n,t,e,i,r,o,c,u,f,d){n.getVertexPosition(u,ha),n.getVertexPosition(f,ua),n.getVertexPosition(d,fa);let g=kg(n,t,e,i,ha,ua,fa,cf);if(g){let y=new at;mi.getBarycoord(cf,ha,ua,fa,y),r&&(g.uv=mi.getInterpolatedAttribute(r,u,f,d,y,new se)),o&&(g.uv1=mi.getInterpolatedAttribute(o,u,f,d,y,new se)),c&&(g.normal=mi.getInterpolatedAttribute(c,u,f,d,y,new at),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));let _={a:u,b:f,c:d,normal:new at,materialIndex:0};mi.getNormal(ha,ua,fa,_.normal),g.face=_,g.barycoord=y}return g}function va(n,t,e,i,r,o,c){let u=n.geometry.attributes.position;if(Ha.fromBufferAttribute(u,r),Ga.fromBufferAttribute(u,o),e.distanceSqToSegment(Ha,Ga,Zc,uf)>i)return;Zc.applyMatrix4(n.matrixWorld);let d=t.ray.origin.distanceTo(Zc);if(!(d<t.near||d>t.far))return{distance:d,point:uf.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}function Cr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];if(pf(r))r.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(pf(r[0])){let o=[];for(let c=0,u=r.length;c<u;c++)o[c]=r[c].clone();t[e][i]=o}else t[e][i]=r.slice();else t[e][i]=r}}return t}function xn(n){let t={};for(let e=0;e<n.length;e++){let i=Cr(n[e]);for(let r in i)t[r]=i[r]}return t}function pf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Vg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}function ss(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function jc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function cd(n,t,e,i,r){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*r}function Xg(n,t,e,i,r){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(r-i)}function Wg(n,t,e,i,r){let o=(n-t)/(r-t);for(let c=0;c<8;c++){let u=cd(o,t,e,i,r)-n;if(Math.abs(u)<1e-10)break;let f=Xg(o,t,e,i,r);if(Math.abs(f)<1e-10)break;o=Math.max(0,Math.min(1,o-u/f))}return o}function mf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function Mf(n,t){return n.distance-t.distance}function oh(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let o=n.children;for(let c=0,u=o.length;c<u;c++)oh(o[c],t,e,!0)}}function Uh(n,t,e,i){let r=t0(i);switch(e){case Ah:return n*t;case Ph:return n*t/r.components*r.byteLength;case dl:return n*t/r.components*r.byteLength;case cr:return n*t*2/r.components*r.byteLength;case pl:return n*t*2/r.components*r.byteLength;case Ch:return n*t*3/r.components*r.byteLength;case qn:return n*t*4/r.components*r.byteLength;case ml:return n*t*4/r.components*r.byteLength;case Io:case Ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lo:case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:case yl:return Math.max(n,16)*Math.max(t,8)/4;case gl:case vl:return Math.max(n,8)*Math.max(t,8)/2;case xl:case Ml:case bl:case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sl:case Do:case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zl:case Vl:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Gl:case Xl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Oo:case Wl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function t0(n){switch(n){case Ln:case bh:return{byteLength:1,components:1};case Ts:case wh:case ci:return{byteLength:2,components:1};case ul:case fl:return{byteLength:2,components:4};case ai:case hl:case li:return{byteLength:4,components:1};case Eh:case Th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var ir,rr,bf,lh,wf,Ao,Ef,ws,sr,Tn,yn,yi,Es,ch,hh,uh,Tf,Er,Af,Cf,Pf,If,Rf,Lf,Nf,Df,fh,dh,Of,Ff,Uf,Bf,kf,zf,Vf,Hf,Gf,Aa,Ca,Pa,hs,Ia,Ra,La,Na,ph,Xf,Wf,oi,mh,gh,_h,vh,yh,xh,Mh,Sh,or,Tr,al,ll,Co,Da,gi,Oa,cn,Yf,Po,fn,cl,ar,Ln,bh,wh,Ts,hl,ai,li,ci,ul,fl,As,Eh,Th,Ah,Ch,qn,_i,lr,Ph,dl,cr,pl,ml,Io,Ro,Lo,No,gl,_l,vl,yl,xl,Ml,Sl,bl,wl,Do,El,Tl,Al,Cl,Pl,Il,Rl,Ll,Nl,Dl,Ol,Fl,Ul,Bl,kl,zl,Vl,Hl,Gl,Xl,Oo,Wl,no,Fa,Ea,th,eh,nh,ih,qf,Yl,$f,Oi,wn,io,ro,Oe,Ta,Zf,Jf,jf,Kf,ql,Qf,td,$l,ed,Ih,Ar,Rh,ni,us,Wu,fs,sd,ri,gn,Yu,ls,ds,Nh,se,Un,at,Pc,qu,ve,Ic,$u,Zu,Te,Wr,Ua,wg,ps,Eg,Lc,En,Ze,Ba,Rn,ao,ka,ze,Yr,Kn,Tg,Ag,Wi,jo,Dn,Ju,ju,Ni,ms,Cg,Ku,qr,Ti,Ko,qs,Pg,Ig,Qu,tf,ef,nf,Rg,$r,Nc,nn,ii,Lg,gs,od,Yi,Qo,ge,_n,lo,Qn,Ai,Oc,Ci,Zr,Jr,rf,Fc,Uc,Bc,kc,zc,Vc,mi,Ji,Pi,ti,ta,jr,Kr,Qr,qi,$i,gr,$s,ea,na,_r,en,ia,Ng,Ge,co,ho,Xe,Dg,Zs,Gc,Mr,Og,Yn,Xc,ts,On,Js,ln,$e,za,bn,uo,Wc,Fg,Ug,Fn,Bg,vi,_s,es,js,ns,is,rs,Ks,ad,ra,Qs,sa,sf,Yc,of,fo,Ii,qc,aa,la,ji,Bn,af,vr,ca,lf,ha,ua,fa,$c,da,cf,pa,Fe,Va,yr,zg,ga,vs,si,Ha,Ga,hf,to,_a,Zc,uf,Sr,ff,df,br,po,mo,Ki,Xa,go,Qi,Di,ys,ya,xa,Jc,Ma,xs,_o,vo,wr,ld,Hg,Gg,kn,Wa,zn,Ya,qa,yo,tr,$a,Za,Ja,ja,Vn,er,Ka,Qa,tl,xo,nr,el,nl,hd,il,Mo,So,Kc,gf,_f,rl,Sa,ba,pi,bo,Zi,vf,yf,vn,Ms,rh,Ss,os,as,sl,ol,Oh,Yg,Fh,qg,$g,Zg,Jg,jg,Kg,Qg,sh,qe,kM,xf,wo,bs,ah,Sf,wa,Qc,Eo,To,Bh=Pn(()=>{ir={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bf=0,lh=1,wf=2,Ao=1,Ef=2,ws=3,sr=0,Tn=1,yn=2,yi=0,Es=1,ch=2,hh=3,uh=4,Tf=5,Er=100,Af=101,Cf=102,Pf=103,If=104,Rf=200,Lf=201,Nf=202,Df=203,fh=204,dh=205,Of=206,Ff=207,Uf=208,Bf=209,kf=210,zf=211,Vf=212,Hf=213,Gf=214,Aa=0,Ca=1,Pa=2,hs=3,Ia=4,Ra=5,La=6,Na=7,ph=0,Xf=1,Wf=2,oi=0,mh=1,gh=2,_h=3,vh=4,yh=5,xh=6,Mh=7,Sh=300,or=301,Tr=302,al=303,ll=304,Co=306,Da=1e3,gi=1001,Oa=1002,cn=1003,Yf=1004,Po=1005,fn=1006,cl=1007,ar=1008,Ln=1009,bh=1010,wh=1011,Ts=1012,hl=1013,ai=1014,li=1015,ci=1016,ul=1017,fl=1018,As=1020,Eh=35902,Th=35899,Ah=1021,Ch=1022,qn=1023,_i=1026,lr=1027,Ph=1028,dl=1029,cr=1030,pl=1031,ml=1033,Io=33776,Ro=33777,Lo=33778,No=33779,gl=35840,_l=35841,vl=35842,yl=35843,xl=36196,Ml=37492,Sl=37496,bl=37488,wl=37489,Do=37490,El=37491,Tl=37808,Al=37809,Cl=37810,Pl=37811,Il=37812,Rl=37813,Ll=37814,Nl=37815,Dl=37816,Ol=37817,Fl=37818,Ul=37819,Bl=37820,kl=37821,zl=36492,Vl=36494,Hl=36495,Gl=36283,Xl=36284,Oo=36285,Wl=36286,no=2300,Fa=2301,Ea=2302,th=2303,eh=2400,nh=2401,ih=2402,qf=3200,Yl=0,$f=1,Oi="",wn="srgb",io="srgb-linear",ro="linear",Oe="srgb",Ta=7680,Zf=519,Jf=512,jf=513,Kf=514,ql=515,Qf=516,td=517,$l=518,ed=519,Ih=35044,Ar=35048,Rh="300 es",ni=2e3,us=2001;Wu={},fs=null;sd={[Aa]:Ca,[Pa]:La,[Ia]:Na,[hs]:Ra,[Ca]:Aa,[La]:Pa,[Na]:Ia,[Ra]:hs},ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let o=0,c=r.length;o<c;o++)r[o].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=1234567,ls=Math.PI/180,ds=180/Math.PI;Nh={DEG2RAD:ls,RAD2DEG:ds,generateUUID:Ri,clamp:we,euclideanModulo:Lh,mapLinear:ag,inverseLerp:lg,lerp:eo,damp:cg,pingpong:hg,smoothstep:ug,smootherstep:fg,randInt:dg,randFloat:pg,randFloatSpread:mg,seededRandom:gg,degToRad:_g,radToDeg:vg,isPowerOfTwo:yg,ceilPowerOfTwo:xg,floorPowerOfTwo:Mg,setQuaternionFromProperEuler:Sg,normalize:ke,denormalize:ei},se=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(we(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*r+t.x,this.y=o*r+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,o,c,u){let f=i[r+0],d=i[r+1],g=i[r+2],y=i[r+3],_=o[c+0],b=o[c+1],E=o[c+2],P=o[c+3];if(y!==P||f!==_||d!==b||g!==E){let S=f*_+d*b+g*E+y*P;S<0&&(_=-_,b=-b,E=-E,P=-P,S=-S);let M=1-u;if(S<.9995){let O=Math.acos(S),G=Math.sin(O);M=Math.sin(M*O)/G,u=Math.sin(u*O)/G,f=f*M+_*u,d=d*M+b*u,g=g*M+E*u,y=y*M+P*u}else{f=f*M+_*u,d=d*M+b*u,g=g*M+E*u,y=y*M+P*u;let O=1/Math.sqrt(f*f+d*d+g*g+y*y);f*=O,d*=O,g*=O,y*=O}}t[e]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y}static multiplyQuaternionsFlat(t,e,i,r,o,c){let u=i[r],f=i[r+1],d=i[r+2],g=i[r+3],y=o[c],_=o[c+1],b=o[c+2],E=o[c+3];return t[e]=u*E+g*y+f*b-d*_,t[e+1]=f*E+g*_+d*y-u*b,t[e+2]=d*E+g*b+u*_-f*y,t[e+3]=g*E-u*y-f*_-d*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,o=t._z,c=t._order,u=Math.cos,f=Math.sin,d=u(i/2),g=u(r/2),y=u(o/2),_=f(i/2),b=f(r/2),E=f(o/2);switch(c){case"XYZ":this._x=_*g*y+d*b*E,this._y=d*b*y-_*g*E,this._z=d*g*E+_*b*y,this._w=d*g*y-_*b*E;break;case"YXZ":this._x=_*g*y+d*b*E,this._y=d*b*y-_*g*E,this._z=d*g*E-_*b*y,this._w=d*g*y+_*b*E;break;case"ZXY":this._x=_*g*y-d*b*E,this._y=d*b*y+_*g*E,this._z=d*g*E+_*b*y,this._w=d*g*y-_*b*E;break;case"ZYX":this._x=_*g*y-d*b*E,this._y=d*b*y+_*g*E,this._z=d*g*E-_*b*y,this._w=d*g*y+_*b*E;break;case"YZX":this._x=_*g*y+d*b*E,this._y=d*b*y+_*g*E,this._z=d*g*E-_*b*y,this._w=d*g*y-_*b*E;break;case"XZY":this._x=_*g*y-d*b*E,this._y=d*b*y-_*g*E,this._z=d*g*E+_*b*y,this._w=d*g*y+_*b*E;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],f=e[9],d=e[2],g=e[6],y=e[10],_=i+u+y;if(_>0){let b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(g-f)*b,this._y=(o-d)*b,this._z=(c-r)*b}else if(i>u&&i>y){let b=2*Math.sqrt(1+i-u-y);this._w=(g-f)/b,this._x=.25*b,this._y=(r+c)/b,this._z=(o+d)/b}else if(u>y){let b=2*Math.sqrt(1+u-i-y);this._w=(o-d)/b,this._x=(r+c)/b,this._y=.25*b,this._z=(f+g)/b}else{let b=2*Math.sqrt(1+y-i-u);this._w=(c-r)/b,this._x=(o+d)/b,this._y=(f+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,o=t._z,c=t._w,u=e._x,f=e._y,d=e._z,g=e._w;return this._x=i*g+c*u+r*d-o*f,this._y=r*g+c*f+o*u-i*d,this._z=o*g+c*d+i*f-r*u,this._w=c*g-i*u-r*f-o*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,o=t._z,c=t._w,u=this.dot(t);u<0&&(i=-i,r=-r,o=-o,c=-c,u=-u);let f=1-e;if(u<.9995){let d=Math.acos(u),g=Math.sin(d);f=Math.sin(f*d)/g,e=Math.sin(e*d)/g,this._x=this._x*f+i*e,this._y=this._y*f+r*e,this._z=this._z*f+o*e,this._w=this._w*f+c*e,this._onChangeCallback()}else this._x=this._x*f+i*e,this._y=this._y*f+r*e,this._z=this._z*f+o*e,this._w=this._w*f+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},at=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*r,this.y=o[1]*e+o[4]*i+o[7]*r,this.z=o[2]*e+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=t.elements,c=1/(o[3]*e+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*r+o[12])*c,this.y=(o[1]*e+o[5]*i+o[9]*r+o[13])*c,this.z=(o[2]*e+o[6]*i+o[10]*r+o[14])*c,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,o=t.x,c=t.y,u=t.z,f=t.w,d=2*(c*r-u*i),g=2*(u*e-o*r),y=2*(o*i-c*e);return this.x=e+f*d+c*y-u*g,this.y=i+f*g+u*d-o*y,this.z=r+f*y+o*g-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r,this.y=o[1]*e+o[5]*i+o[9]*r,this.z=o[2]*e+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this.z=we(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this.z=we(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(we(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,o=t.z,c=e.x,u=e.y,f=e.z;return this.x=r*f-o*u,this.y=o*c-i*f,this.z=i*u-r*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Pc.copy(this).projectOnVector(t),this.sub(Pc)}reflect(t){return this.sub(Pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pc=new at,qu=new Un,ve=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,r,o,c,u,f,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,c,u,f,d)}set(t,e,i,r,o,c,u,f,d){let g=this.elements;return g[0]=t,g[1]=r,g[2]=u,g[3]=e,g[4]=o,g[5]=f,g[6]=i,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,c=i[0],u=i[3],f=i[6],d=i[1],g=i[4],y=i[7],_=i[2],b=i[5],E=i[8],P=r[0],S=r[3],M=r[6],O=r[1],G=r[4],R=r[7],F=r[2],B=r[5],Y=r[8];return o[0]=c*P+u*O+f*F,o[3]=c*S+u*G+f*B,o[6]=c*M+u*R+f*Y,o[1]=d*P+g*O+y*F,o[4]=d*S+g*G+y*B,o[7]=d*M+g*R+y*Y,o[2]=_*P+b*O+E*F,o[5]=_*S+b*G+E*B,o[8]=_*M+b*R+E*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],g=t[8];return e*c*g-e*u*d-i*o*g+i*u*f+r*o*d-r*c*f}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],g=t[8],y=g*c-u*d,_=u*f-g*o,b=d*o-c*f,E=e*y+i*_+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/E;return t[0]=y*P,t[1]=(r*d-g*i)*P,t[2]=(u*i-r*c)*P,t[3]=_*P,t[4]=(g*e-r*f)*P,t[5]=(r*o-u*e)*P,t[6]=b*P,t[7]=(i*f-d*e)*P,t[8]=(c*e-i*o)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,o,c,u){let f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*c+d*u)+c+t,-r*d,r*f,-r*(-d*c+f*u)+u+e,0,0,1),this}scale(t,e){return xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ic.makeScale(t,e)),this}rotate(t){return xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ic.makeRotation(-t)),this}translate(t,e){return xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ic=new ve,$u=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te=bg();Ua=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Wr===void 0&&(Wr=so("canvas")),Wr.width=t.width,Wr.height=t.height;let r=Wr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Wr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=so("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let c=0;c<o.length;c++)o[c]=Li(o[c]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wg=0,ps=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let c=0,u=r.length;c<u;c++)r[c].isDataTexture?o.push(Rc(r[c].image)):o.push(Rc(r[c]))}else o=Rc(r);i.url=o}return e||(t.images[this.uuid]=i),i}};Eg=0,Lc=new at,En=class n extends ri{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gi,r=gi,o=fn,c=ar,u=qn,f=Ln,d=n.DEFAULT_ANISOTROPY,g=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Ri(),this.name="",this.source=new ps(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lc).x}get height(){return this.source.getSize(Lc).y}get depth(){return this.source.getSize(Lc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ce(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){ce(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Da:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Da:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Sh;En.DEFAULT_ANISOTROPY=1;Ze=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*r+c[12]*o,this.y=c[1]*e+c[5]*i+c[9]*r+c[13]*o,this.z=c[2]*e+c[6]*i+c[10]*r+c[14]*o,this.w=c[3]*e+c[7]*i+c[11]*r+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,o,f=t.elements,d=f[0],g=f[4],y=f[8],_=f[1],b=f[5],E=f[9],P=f[2],S=f[6],M=f[10];if(Math.abs(g-_)<.01&&Math.abs(y-P)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(y+P)<.1&&Math.abs(E+S)<.1&&Math.abs(d+b+M-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let G=(d+1)/2,R=(b+1)/2,F=(M+1)/2,B=(g+_)/4,Y=(y+P)/4,C=(E+S)/4;return G>R&&G>F?G<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(G),r=B/i,o=Y/i):R>F?R<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(R),i=B/r,o=C/r):F<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(F),i=Y/o,r=C/o),this.set(i,r,o,e),this}let O=Math.sqrt((S-E)*(S-E)+(y-P)*(y-P)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(y-P)/O,this.z=(_-g)/O,this.w=Math.acos((d+b+M-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this.z=we(this.z,t.z,e.z),this.w=we(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this.z=we(this.z,t,e),this.w=we(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(we(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ba=class extends ri{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},o=new En(r),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new ps(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Ba{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ao=class extends En{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},ka=class extends En{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},ze=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,r,o,c,u,f,d,g,y,_,b,E,P,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,c,u,f,d,g,y,_,b,E,P,S)}set(t,e,i,r,o,c,u,f,d,g,y,_,b,E,P,S){let M=this.elements;return M[0]=t,M[4]=e,M[8]=i,M[12]=r,M[1]=o,M[5]=c,M[9]=u,M[13]=f,M[2]=d,M[6]=g,M[10]=y,M[14]=_,M[3]=b,M[7]=E,M[11]=P,M[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,r=1/Yr.setFromMatrixColumn(t,0).length(),o=1/Yr.setFromMatrixColumn(t,1).length(),c=1/Yr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,o=t.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(r),d=Math.sin(r),g=Math.cos(o),y=Math.sin(o);if(t.order==="XYZ"){let _=c*g,b=c*y,E=u*g,P=u*y;e[0]=f*g,e[4]=-f*y,e[8]=d,e[1]=b+E*d,e[5]=_-P*d,e[9]=-u*f,e[2]=P-_*d,e[6]=E+b*d,e[10]=c*f}else if(t.order==="YXZ"){let _=f*g,b=f*y,E=d*g,P=d*y;e[0]=_+P*u,e[4]=E*u-b,e[8]=c*d,e[1]=c*y,e[5]=c*g,e[9]=-u,e[2]=b*u-E,e[6]=P+_*u,e[10]=c*f}else if(t.order==="ZXY"){let _=f*g,b=f*y,E=d*g,P=d*y;e[0]=_-P*u,e[4]=-c*y,e[8]=E+b*u,e[1]=b+E*u,e[5]=c*g,e[9]=P-_*u,e[2]=-c*d,e[6]=u,e[10]=c*f}else if(t.order==="ZYX"){let _=c*g,b=c*y,E=u*g,P=u*y;e[0]=f*g,e[4]=E*d-b,e[8]=_*d+P,e[1]=f*y,e[5]=P*d+_,e[9]=b*d-E,e[2]=-d,e[6]=u*f,e[10]=c*f}else if(t.order==="YZX"){let _=c*f,b=c*d,E=u*f,P=u*d;e[0]=f*g,e[4]=P-_*y,e[8]=E*y+b,e[1]=y,e[5]=c*g,e[9]=-u*g,e[2]=-d*g,e[6]=b*y+E,e[10]=_-P*y}else if(t.order==="XZY"){let _=c*f,b=c*d,E=u*f,P=u*d;e[0]=f*g,e[4]=-y,e[8]=d*g,e[1]=_*y+P,e[5]=c*g,e[9]=b*y-E,e[2]=E*y-b,e[6]=u*g,e[10]=P*y+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tg,t,Ag)}lookAt(t,e,i){let r=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Wi.crossVectors(i,Dn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Wi.crossVectors(i,Dn)),Wi.normalize(),jo.crossVectors(Dn,Wi),r[0]=Wi.x,r[4]=jo.x,r[8]=Dn.x,r[1]=Wi.y,r[5]=jo.y,r[9]=Dn.y,r[2]=Wi.z,r[6]=jo.z,r[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,c=i[0],u=i[4],f=i[8],d=i[12],g=i[1],y=i[5],_=i[9],b=i[13],E=i[2],P=i[6],S=i[10],M=i[14],O=i[3],G=i[7],R=i[11],F=i[15],B=r[0],Y=r[4],C=r[8],V=r[12],W=r[1],et=r[5],nt=r[9],Q=r[13],K=r[2],U=r[6],tt=r[10],ct=r[14],mt=r[3],ht=r[7],yt=r[11],bt=r[15];return o[0]=c*B+u*W+f*K+d*mt,o[4]=c*Y+u*et+f*U+d*ht,o[8]=c*C+u*nt+f*tt+d*yt,o[12]=c*V+u*Q+f*ct+d*bt,o[1]=g*B+y*W+_*K+b*mt,o[5]=g*Y+y*et+_*U+b*ht,o[9]=g*C+y*nt+_*tt+b*yt,o[13]=g*V+y*Q+_*ct+b*bt,o[2]=E*B+P*W+S*K+M*mt,o[6]=E*Y+P*et+S*U+M*ht,o[10]=E*C+P*nt+S*tt+M*yt,o[14]=E*V+P*Q+S*ct+M*bt,o[3]=O*B+G*W+R*K+F*mt,o[7]=O*Y+G*et+R*U+F*ht,o[11]=O*C+G*nt+R*tt+F*yt,o[15]=O*V+G*Q+R*ct+F*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[12],c=t[1],u=t[5],f=t[9],d=t[13],g=t[2],y=t[6],_=t[10],b=t[14],E=t[3],P=t[7],S=t[11],M=t[15],O=f*b-d*_,G=u*b-d*y,R=u*_-f*y,F=c*b-d*g,B=c*_-f*g,Y=c*y-u*g;return e*(P*O-S*G+M*R)-i*(E*O-S*F+M*B)+r*(E*G-P*F+M*Y)-o*(E*R-P*B+S*Y)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[1],c=t[5],u=t[9],f=t[2],d=t[6],g=t[10];return e*(c*g-u*d)-i*(o*g-u*f)+r*(o*d-c*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],g=t[8],y=t[9],_=t[10],b=t[11],E=t[12],P=t[13],S=t[14],M=t[15],O=e*u-i*c,G=e*f-r*c,R=e*d-o*c,F=i*f-r*u,B=i*d-o*u,Y=r*d-o*f,C=g*P-y*E,V=g*S-_*E,W=g*M-b*E,et=y*S-_*P,nt=y*M-b*P,Q=_*M-b*S,K=O*Q-G*nt+R*et+F*W-B*V+Y*C;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/K;return t[0]=(u*Q-f*nt+d*et)*U,t[1]=(r*nt-i*Q-o*et)*U,t[2]=(P*Y-S*B+M*F)*U,t[3]=(_*B-y*Y-b*F)*U,t[4]=(f*W-c*Q-d*V)*U,t[5]=(e*Q-r*W+o*V)*U,t[6]=(S*R-E*Y-M*G)*U,t[7]=(g*Y-_*R+b*G)*U,t[8]=(c*nt-u*W+d*C)*U,t[9]=(i*W-e*nt-o*C)*U,t[10]=(E*B-P*R+M*O)*U,t[11]=(y*R-g*B-b*O)*U,t[12]=(u*V-c*et-f*C)*U,t[13]=(e*et-i*V+r*C)*U,t[14]=(P*G-E*F-S*O)*U,t[15]=(g*F-y*G+_*O)*U,this}scale(t){let e=this.elements,i=t.x,r=t.y,o=t.z;return e[0]*=i,e[4]*=r,e[8]*=o,e[1]*=i,e[5]*=r,e[9]*=o,e[2]*=i,e[6]*=r,e[10]*=o,e[3]*=i,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),o=1-i,c=t.x,u=t.y,f=t.z,d=o*c,g=o*u;return this.set(d*c+i,d*u-r*f,d*f+r*u,0,d*u+r*f,g*u+i,g*f-r*c,0,d*f-r*u,g*f+r*c,o*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,o,c){return this.set(1,i,o,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,o=e._x,c=e._y,u=e._z,f=e._w,d=o+o,g=c+c,y=u+u,_=o*d,b=o*g,E=o*y,P=c*g,S=c*y,M=u*y,O=f*d,G=f*g,R=f*y,F=i.x,B=i.y,Y=i.z;return r[0]=(1-(P+M))*F,r[1]=(b+R)*F,r[2]=(E-G)*F,r[3]=0,r[4]=(b-R)*B,r[5]=(1-(_+M))*B,r[6]=(S+O)*B,r[7]=0,r[8]=(E+G)*Y,r[9]=(S-O)*Y,r[10]=(1-(_+P))*Y,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let c=Yr.set(r[0],r[1],r[2]).length(),u=Yr.set(r[4],r[5],r[6]).length(),f=Yr.set(r[8],r[9],r[10]).length();o<0&&(c=-c),Kn.copy(this);let d=1/c,g=1/u,y=1/f;return Kn.elements[0]*=d,Kn.elements[1]*=d,Kn.elements[2]*=d,Kn.elements[4]*=g,Kn.elements[5]*=g,Kn.elements[6]*=g,Kn.elements[8]*=y,Kn.elements[9]*=y,Kn.elements[10]*=y,e.setFromRotationMatrix(Kn),i.x=c,i.y=u,i.z=f,this}makePerspective(t,e,i,r,o,c,u=ni,f=!1){let d=this.elements,g=2*o/(e-t),y=2*o/(i-r),_=(e+t)/(e-t),b=(i+r)/(i-r),E,P;if(f)E=o/(c-o),P=c*o/(c-o);else if(u===ni)E=-(c+o)/(c-o),P=-2*c*o/(c-o);else if(u===us)E=-c/(c-o),P=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=y,d[9]=b,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=P,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,o,c,u=ni,f=!1){let d=this.elements,g=2/(e-t),y=2/(i-r),_=-(e+t)/(e-t),b=-(i+r)/(i-r),E,P;if(f)E=1/(c-o),P=c/(c-o);else if(u===ni)E=-2/(c-o),P=-(c+o)/(c-o);else if(u===us)E=-1/(c-o),P=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=y,d[9]=0,d[13]=b,d[2]=0,d[6]=0,d[10]=E,d[14]=P,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Yr=new at,Kn=new ze,Tg=new at(0,0,0),Ag=new at(1,1,1),Wi=new at,jo=new at,Dn=new at,Ju=new ze,ju=new Un,Ni=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,o=r[0],c=r[4],u=r[8],f=r[1],d=r[5],g=r[9],y=r[2],_=r[6],b=r[10];switch(e){case"XYZ":this._y=Math.asin(we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-we(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,b),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-y,o),this._z=0);break;case"ZXY":this._x=Math.asin(we(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-y,b),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-we(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-y,o)):(this._x=0,this._y=Math.atan2(u,b));break;case"XZY":this._z=Math.asin(-we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-g,b),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ju,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ju.setFromEuler(this),this.setFromQuaternion(ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";ms=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cg=0,Ku=new at,qr=new Un,Ti=new ze,Ko=new at,qs=new at,Pg=new at,Ig=new Un,Qu=new at(1,0,0),tf=new at(0,1,0),ef=new at(0,0,1),nf={type:"added"},Rg={type:"removed"},$r={type:"childadded",child:null},Nc={type:"childremoved",child:null},nn=class n extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new at,e=new Ni,i=new Un,r=new at(1,1,1);function o(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ze},normalMatrix:{value:new ve}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.multiply(qr),this}rotateOnWorldAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.premultiply(qr),this}rotateX(t){return this.rotateOnAxis(Qu,t)}rotateY(t){return this.rotateOnAxis(tf,t)}rotateZ(t){return this.rotateOnAxis(ef,t)}translateOnAxis(t,e){return Ku.copy(t).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qu,t)}translateY(t){return this.translateOnAxis(tf,t)}translateZ(t){return this.translateOnAxis(ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ko.copy(t):Ko.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(qs,Ko,this.up):Ti.lookAt(Ko,qs,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(Ti),this.quaternion.premultiply(qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nf),$r.child=t,this.dispatchEvent($r),$r.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rg),Nc.child=t,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nf),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,Pg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*r,o[13]+=i-o[1]*e-o[5]*i-o[9]*r,o[14]+=r-o[2]*e-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(u=>({...u})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){let f=u.shapes;if(Array.isArray(f))for(let d=0,g=f.length;d<g;d++){let y=f[d];o(t.shapes,y)}else o(t.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(t.materials,this.material[f]));r.material=u}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){let f=this.animations[u];r.animations.push(o(t.animations,f))}}if(e){let u=c(t.geometries),f=c(t.materials),d=c(t.textures),g=c(t.images),y=c(t.shapes),_=c(t.skeletons),b=c(t.animations),E=c(t.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),y.length>0&&(i.shapes=y),_.length>0&&(i.skeletons=_),b.length>0&&(i.animations=b),E.length>0&&(i.nodes=E)}return i.object=r,i;function c(u){let f=[];for(let d in u){let g=u[d];delete g.metadata,f.push(g)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};nn.DEFAULT_UP=new at(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ii=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lg={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,o=null,c=null,u=this._targetRay,f=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(let P of t.hand.values()){let S=e.getJointPose(P,i),M=this._getHandJoint(d,P);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}let g=d.joints["index-finger-tip"],y=d.joints["thumb-tip"],_=g.position.distanceTo(y.position),b=.02,E=.005;d.inputState.pinching&&_>b+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=b-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:t,target:this})));u!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Lg)))}return u!==null&&(u.visible=r!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ii;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};ge=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Te.workingColorSpace){if(t=Lh(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,c=2*i-o;this.r=Dc(c,o,t+1/3),this.g=Dc(c,o,t),this.b=Dc(c,o,t-1/3)}return Te.colorSpaceToWorking(this,r),this}setStyle(t,e=wn){function i(o){o!==void 0&&parseFloat(o)<1&&ce("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,c=r[1],u=r[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:ce("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wn){let i=od[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return Te.workingToColorSpace(_n.copy(this),t),Math.round(we(_n.r*255,0,255))*65536+Math.round(we(_n.g*255,0,255))*256+Math.round(we(_n.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(_n.copy(this),e);let i=_n.r,r=_n.g,o=_n.b,c=Math.max(i,r,o),u=Math.min(i,r,o),f,d,g=(u+c)/2;if(u===c)f=0,d=0;else{let y=c-u;switch(d=g<=.5?y/(c+u):y/(2-c-u),c){case i:f=(r-o)/y+(r<o?6:0);break;case r:f=(o-i)/y+2;break;case o:f=(i-r)/y+4;break}f/=6}return t.h=f,t.s=d,t.l=g,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=wn){Te.workingToColorSpace(_n.copy(this),t);let e=_n.r,i=_n.g,r=_n.b;return t!==wn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Qo);let i=eo(Yi.h,Qo.h,e),r=eo(Yi.s,Qo.s,e),o=eo(Yi.l,Qo.l,e);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*r,this.g=o[1]*e+o[4]*i+o[7]*r,this.b=o[2]*e+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new ge;ge.NAMES=od;lo=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qn=new at,Ai=new at,Oc=new at,Ci=new at,Zr=new at,Jr=new at,rf=new at,Fc=new at,Uc=new at,Bc=new at,kc=new Ze,zc=new Ze,Vc=new Ze,mi=class n{constructor(t=new at,e=new at,i=new at){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Qn.subVectors(t,e),r.cross(Qn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,i,r,o){Qn.subVectors(r,e),Ai.subVectors(i,e),Oc.subVectors(t,e);let c=Qn.dot(Qn),u=Qn.dot(Ai),f=Qn.dot(Oc),d=Ai.dot(Ai),g=Ai.dot(Oc),y=c*d-u*u;if(y===0)return o.set(0,0,0),null;let _=1/y,b=(d*f-u*g)*_,E=(c*g-u*f)*_;return o.set(1-b-E,E,b)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,i,r,o,c,u,f){return this.getBarycoord(t,e,i,r,Ci)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Ci.x),f.addScaledVector(c,Ci.y),f.addScaledVector(u,Ci.z),f)}static getInterpolatedAttribute(t,e,i,r,o,c){return kc.setScalar(0),zc.setScalar(0),Vc.setScalar(0),kc.fromBufferAttribute(t,e),zc.fromBufferAttribute(t,i),Vc.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector(kc,o.x),c.addScaledVector(zc,o.y),c.addScaledVector(Vc,o.z),c}static isFrontFacing(t,e,i,r){return Qn.subVectors(i,e),Ai.subVectors(t,e),Qn.cross(Ai).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Qn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,o=this.c,c,u;Zr.subVectors(r,i),Jr.subVectors(o,i),Fc.subVectors(t,i);let f=Zr.dot(Fc),d=Jr.dot(Fc);if(f<=0&&d<=0)return e.copy(i);Uc.subVectors(t,r);let g=Zr.dot(Uc),y=Jr.dot(Uc);if(g>=0&&y<=g)return e.copy(r);let _=f*y-g*d;if(_<=0&&f>=0&&g<=0)return c=f/(f-g),e.copy(i).addScaledVector(Zr,c);Bc.subVectors(t,o);let b=Zr.dot(Bc),E=Jr.dot(Bc);if(E>=0&&b<=E)return e.copy(o);let P=b*d-f*E;if(P<=0&&d>=0&&E<=0)return u=d/(d-E),e.copy(i).addScaledVector(Jr,u);let S=g*E-b*y;if(S<=0&&y-g>=0&&b-E>=0)return rf.subVectors(o,r),u=(y-g)/(y-g+(b-E)),e.copy(r).addScaledVector(rf,u);let M=1/(S+P+_);return c=P*M,u=_*M,e.copy(i).addScaledVector(Zr,c).addScaledVector(Jr,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ji=class{constructor(t=new at(1/0,1/0,1/0),e=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,ti):ti.fromBufferAttribute(o,c),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}let r=t.children;for(let o=0,c=r.length;o<c;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),ea.subVectors(this.max,$s),jr.subVectors(t.a,$s),Kr.subVectors(t.b,$s),Qr.subVectors(t.c,$s),qi.subVectors(Kr,jr),$i.subVectors(Qr,Kr),gr.subVectors(jr,Qr);let e=[0,-qi.z,qi.y,0,-$i.z,$i.y,0,-gr.z,gr.y,qi.z,0,-qi.x,$i.z,0,-$i.x,gr.z,0,-gr.x,-qi.y,qi.x,0,-$i.y,$i.x,0,-gr.y,gr.x,0];return!Hc(e,jr,Kr,Qr,ea)||(e=[1,0,0,0,1,0,0,0,1],!Hc(e,jr,Kr,Qr,ea))?!1:(na.crossVectors(qi,$i),e=[na.x,na.y,na.z],Hc(e,jr,Kr,Qr,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pi=[new at,new at,new at,new at,new at,new at,new at,new at],ti=new at,ta=new Ji,jr=new at,Kr=new at,Qr=new at,qi=new at,$i=new at,gr=new at,$s=new at,ea=new at,na=new at,_r=new at;en=new at,ia=new se,Ng=0,Ge=class extends ri{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ng++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ih,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),r=ke(r,this.array),o=ke(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},co=class extends Ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}},ho=class extends Ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}},Xe=class extends Ge{constructor(t,e,i){super(new Float32Array(t),e,i)}},Dg=new Ji,Zs=new at,Gc=new at,Mr=class{constructor(t=new at,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Dg.setFromPoints(t).getCenter(i);let r=0;for(let o=0,c=t.length;o<c;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(Gc)),this.expandByPoint(Zs.copy(t.center).sub(Gc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Og=0,Yn=new ze,Xc=new nn,ts=new at,On=new Ji,Js=new Ji,ln=new at,$e=class n extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sg(t)?ho:co)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new ve().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,i){return Yn.makeTranslation(t,e,i),this.applyMatrix4(Yn),this}scale(t,e,i){return Yn.makeScale(t,e,i),this.applyMatrix4(Yn),this}lookAt(t){return Xc.lookAt(t),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,o=t.length;r<o;r++){let c=t[r];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Xe(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let o=e[i];On.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(t){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){let u=e[o];Js.setFromBufferAttribute(u),this.morphTargetsRelative?(ln.addVectors(On.min,Js.min),On.expandByPoint(ln),ln.addVectors(On.max,Js.max),On.expandByPoint(ln)):(On.expandByPoint(Js.min),On.expandByPoint(Js.max))}On.getCenter(i);let r=0;for(let o=0,c=t.count;o<c;o++)ln.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(ln));if(e)for(let o=0,c=e.length;o<c;o++){let u=e[o],f=this.morphTargetsRelative;for(let d=0,g=u.count;d<g;d++)ln.fromBufferAttribute(u,d),f&&(ts.fromBufferAttribute(t,d),ln.add(ts)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,o=e.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Ge(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));let u=[],f=[];for(let C=0;C<i.count;C++)u[C]=new at,f[C]=new at;let d=new at,g=new at,y=new at,_=new se,b=new se,E=new se,P=new at,S=new at;function M(C,V,W){d.fromBufferAttribute(i,C),g.fromBufferAttribute(i,V),y.fromBufferAttribute(i,W),_.fromBufferAttribute(o,C),b.fromBufferAttribute(o,V),E.fromBufferAttribute(o,W),g.sub(d),y.sub(d),b.sub(_),E.sub(_);let et=1/(b.x*E.y-E.x*b.y);isFinite(et)&&(P.copy(g).multiplyScalar(E.y).addScaledVector(y,-b.y).multiplyScalar(et),S.copy(y).multiplyScalar(b.x).addScaledVector(g,-E.x).multiplyScalar(et),u[C].add(P),u[V].add(P),u[W].add(P),f[C].add(S),f[V].add(S),f[W].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let C=0,V=O.length;C<V;++C){let W=O[C],et=W.start,nt=W.count;for(let Q=et,K=et+nt;Q<K;Q+=3)M(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let G=new at,R=new at,F=new at,B=new at;function Y(C){F.fromBufferAttribute(r,C),B.copy(F);let V=u[C];G.copy(V),G.sub(F.multiplyScalar(F.dot(V))).normalize(),R.crossVectors(B,V);let et=R.dot(f[C])<0?-1:1;c.setXYZW(C,G.x,G.y,G.z,et)}for(let C=0,V=O.length;C<V;++C){let W=O[C],et=W.start,nt=W.count;for(let Q=et,K=et+nt;Q<K;Q+=3)Y(t.getX(Q+0)),Y(t.getX(Q+1)),Y(t.getX(Q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,b=i.count;_<b;_++)i.setXYZ(_,0,0,0);let r=new at,o=new at,c=new at,u=new at,f=new at,d=new at,g=new at,y=new at;if(t)for(let _=0,b=t.count;_<b;_+=3){let E=t.getX(_+0),P=t.getX(_+1),S=t.getX(_+2);r.fromBufferAttribute(e,E),o.fromBufferAttribute(e,P),c.fromBufferAttribute(e,S),g.subVectors(c,o),y.subVectors(r,o),g.cross(y),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,P),d.fromBufferAttribute(i,S),u.add(g),f.add(g),d.add(g),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(P,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,b=e.count;_<b;_+=3)r.fromBufferAttribute(e,_+0),o.fromBufferAttribute(e,_+1),c.fromBufferAttribute(e,_+2),g.subVectors(c,o),y.subVectors(r,o),g.cross(y),i.setXYZ(_+0,g.x,g.y,g.z),i.setXYZ(_+1,g.x,g.y,g.z),i.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(u,f){let d=u.array,g=u.itemSize,y=u.normalized,_=new d.constructor(f.length*g),b=0,E=0;for(let P=0,S=f.length;P<S;P++){u.isInterleavedBufferAttribute?b=f[P]*u.data.stride+u.offset:b=f[P]*g;for(let M=0;M<g;M++)_[E++]=d[b++]}return new Ge(_,g,y)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let u in r){let f=r[u],d=t(f,i);e.setAttribute(u,d)}let o=this.morphAttributes;for(let u in o){let f=[],d=o[u];for(let g=0,y=d.length;g<y;g++){let _=d[g],b=t(_,i);f.push(b)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let u=0,f=c.length;u<f;u++){let d=c[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let f=this.parameters;for(let d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let f in i){let d=i[f];t.data.attributes[f]=d.toJSON(t.data)}let r={},o=!1;for(let f in this.morphAttributes){let d=this.morphAttributes[f],g=[];for(let y=0,_=d.length;y<_;y++){let b=d[y];g.push(b.toJSON(t.data))}g.length>0&&(r[f]=g,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let d in r){let g=r[d];this.setAttribute(d,g.clone(e))}let o=t.morphAttributes;for(let d in o){let g=[],y=o[d];for(let _=0,b=y.length;_<b;_++)g.push(y[_].clone(e));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let d=0,g=c.length;d<g;d++){let y=c[d];this.addGroup(y.start,y.count,y.materialIndex)}let u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());let f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},za=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ih,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},bn=new at,uo=class n{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),r=ke(r,this.array),o=ke(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){oo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){oo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wc=new at,Fg=new at,Ug=new ve,Fn=class{constructor(t=new at(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=Wc.subVectors(i,e).cross(Fg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(Wc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let c=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:e.copy(t.start).addScaledVector(r,c)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Ug.getNormalMatrix(t),r=this.coplanarPoint(Wc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Bg=0,vi=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Es,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ce(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){ce(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let c=[];for(let u in o){let f=o[u];delete f.metadata,c.push(f)}return c}if(e){let o=r(t.textures),c=r(t.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Fn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new se().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_s=class extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},js=new at,ns=new at,is=new at,rs=new se,Ks=new se,ad=new ze,ra=new at,Qs=new at,sa=new at,sf=new se,Yc=new se,of=new se,fo=class extends nn{constructor(t=new _s){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new $e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new za(e,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new uo(i,3,0,!1)),es.setAttribute("uv",new uo(i,2,3,!1))}this.geometry=es,this.material=t,this.center=new se(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),ad.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);let i=this.material.rotation,r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));let c=this.center;oa(ra.set(-.5,-.5,0),is,c,ns,r,o),oa(Qs.set(.5,-.5,0),is,c,ns,r,o),oa(sa.set(.5,.5,0),is,c,ns,r,o),sf.set(0,0),Yc.set(1,0),of.set(1,1);let u=t.ray.intersectTriangle(ra,Qs,sa,!1,js);if(u===null&&(oa(Qs.set(-.5,.5,0),is,c,ns,r,o),Yc.set(0,1),u=t.ray.intersectTriangle(ra,sa,Qs,!1,js),u===null))return;let f=t.ray.origin.distanceTo(js);f<t.near||f>t.far||e.push({distance:f,point:js.clone(),uv:mi.getInterpolation(js,ra,Qs,sa,sf,Yc,of,new se),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Ii=new at,qc=new at,aa=new at,la=new at,ji=class{constructor(t=new at,e=new at(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){qc.copy(t).add(e).multiplyScalar(.5),aa.copy(e).sub(t).normalize(),la.copy(this.origin).sub(qc);let o=t.distanceTo(e)*.5,c=-this.direction.dot(aa),u=la.dot(this.direction),f=-la.dot(aa),d=la.lengthSq(),g=Math.abs(1-c*c),y,_,b,E;if(g>0)if(y=c*f-u,_=c*u-f,E=o*g,y>=0)if(_>=-E)if(_<=E){let P=1/g;y*=P,_*=P,b=y*(y+c*_+2*u)+_*(c*y+_+2*f)+d}else _=o,y=Math.max(0,-(c*_+u)),b=-y*y+_*(_+2*f)+d;else _=-o,y=Math.max(0,-(c*_+u)),b=-y*y+_*(_+2*f)+d;else _<=-E?(y=Math.max(0,-(-c*o+u)),_=y>0?-o:Math.min(Math.max(-o,-f),o),b=-y*y+_*(_+2*f)+d):_<=E?(y=0,_=Math.min(Math.max(-o,-f),o),b=_*(_+2*f)+d):(y=Math.max(0,-(c*o+u)),_=y>0?o:Math.min(Math.max(-o,-f),o),b=-y*y+_*(_+2*f)+d);else _=c>0?-o:o,y=Math.max(0,-(c*_+u)),b=-y*y+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,y),r&&r.copy(qc).addScaledVector(aa,_),b}intersectSphere(t,e){if(t.radius<0)return null;Ii.subVectors(t.center,this.origin);let i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,o=t.radius*t.radius;if(r>o)return null;let c=Math.sqrt(o-r),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,o,c,u,f,d=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,_=this.origin;return d>=0?(i=(t.min.x-_.x)*d,r=(t.max.x-_.x)*d):(i=(t.max.x-_.x)*d,r=(t.min.x-_.x)*d),g>=0?(o=(t.min.y-_.y)*g,c=(t.max.y-_.y)*g):(o=(t.max.y-_.y)*g,c=(t.min.y-_.y)*g),i>c||o>r||((o>i||isNaN(i))&&(i=o),(c<r||isNaN(r))&&(r=c),y>=0?(u=(t.min.z-_.z)*y,f=(t.max.z-_.z)*y):(u=(t.max.z-_.z)*y,f=(t.min.z-_.z)*y),i>f||u>r)||((u>i||i!==i)&&(i=u),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,i,r,o){let c=this.origin,u=this.direction,f=u.x,d=u.y,g=u.z,y=t.x-c.x,_=t.y-c.y,b=t.z-c.z,E=e.x-c.x,P=e.y-c.y,S=e.z-c.z,M=i.x-c.x,O=i.y-c.y,G=i.z-c.z,R=Math.abs(f),F=Math.abs(d),B=Math.abs(g),Y,C,V,W,et,nt,Q,K,U,tt,ct,mt;if(R>=F&&R>=B?(V=f,nt=y,U=E,mt=M,f>=0?(Y=d,C=g,W=_,et=b,Q=P,K=S,tt=O,ct=G):(Y=g,C=d,W=b,et=_,Q=S,K=P,tt=G,ct=O)):F>=B?(V=d,nt=_,U=P,mt=O,d>=0?(Y=g,C=f,W=b,et=y,Q=S,K=E,tt=G,ct=M):(Y=f,C=g,W=y,et=b,Q=E,K=S,tt=M,ct=G)):(V=g,nt=b,U=S,mt=G,g>=0?(Y=f,C=d,W=y,et=_,Q=E,K=P,tt=M,ct=O):(Y=d,C=f,W=_,et=y,Q=P,K=E,tt=O,ct=M)),V===0)return null;let ht=Y/V,yt=C/V,bt=1/V,Lt=W-ht*nt,zt=et-yt*nt,le=Q-ht*U,ae=K-yt*U,dt=tt-ht*mt,wt=ct-yt*mt,Pt=dt*ae-wt*le,Vt=Lt*wt-zt*dt,re=le*zt-ae*Lt;if(r){if(Pt<0||Vt<0||re<0)return null}else if((Pt<0||Vt<0||re<0)&&(Pt>0||Vt>0||re>0))return null;let Ht=Pt+Vt+re;if(Ht===0)return null;let fe=bt*(Pt*nt+Vt*U+re*mt);return(Ht>0?fe<0:fe>0)?null:this.at(fe/Ht,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},af=new ze,vr=new ji,ca=new Mr,lf=new at,ha=new at,ua=new at,fa=new at,$c=new at,da=new at,cf=new at,pa=new at,Fe=class extends nn{constructor(t=new $e,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){let u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let u=this.morphTargetInfluences;if(o&&u){da.set(0,0,0);for(let f=0,d=o.length;f<d;f++){let g=u[f],y=o[f];g!==0&&($c.fromBufferAttribute(y,t),c?da.addScaledVector($c,g):da.addScaledVector($c.sub(e),g))}e.add(da)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(o),vr.copy(t.ray).recast(t.near),!(ca.containsPoint(vr.origin)===!1&&(vr.intersectSphere(ca,lf)===null||vr.origin.distanceToSquared(lf)>(t.far-t.near)**2))&&(af.copy(o).invert(),vr.copy(t.ray).applyMatrix4(af),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vr)))}_computeIntersections(t,e,i){let r,o=this.geometry,c=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,g=o.attributes.uv1,y=o.attributes.normal,_=o.groups,b=o.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,P=_.length;E<P;E++){let S=_[E],M=c[S.materialIndex],O=Math.max(S.start,b.start),G=Math.min(u.count,Math.min(S.start+S.count,b.start+b.count));for(let R=O,F=G;R<F;R+=3){let B=u.getX(R),Y=u.getX(R+1),C=u.getX(R+2);r=ma(this,M,t,i,d,g,y,B,Y,C),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{let E=Math.max(0,b.start),P=Math.min(u.count,b.start+b.count);for(let S=E,M=P;S<M;S+=3){let O=u.getX(S),G=u.getX(S+1),R=u.getX(S+2);r=ma(this,c,t,i,d,g,y,O,G,R),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,P=_.length;E<P;E++){let S=_[E],M=c[S.materialIndex],O=Math.max(S.start,b.start),G=Math.min(f.count,Math.min(S.start+S.count,b.start+b.count));for(let R=O,F=G;R<F;R+=3){let B=R,Y=R+1,C=R+2;r=ma(this,M,t,i,d,g,y,B,Y,C),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{let E=Math.max(0,b.start),P=Math.min(f.count,b.start+b.count);for(let S=E,M=P;S<M;S+=3){let O=S,G=S+1,R=S+2;r=ma(this,c,t,i,d,g,y,O,G,R),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}}};Va=class extends En{constructor(t=null,e=1,i=1,r,o,c,u,f,d=cn,g=cn,y,_){super(null,c,u,f,d,g,r,o,y,_),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yr=new Mr,zg=new se(.5,.5),ga=new at,vs=class{constructor(t=new Fn,e=new Fn,i=new Fn,r=new Fn,o=new Fn,c=new Fn){this.planes=[t,e,i,r,o,c]}set(t,e,i,r,o,c){let u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(r),u[4].copy(o),u[5].copy(c),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ni,i=!1){let r=this.planes,o=t.elements,c=o[0],u=o[1],f=o[2],d=o[3],g=o[4],y=o[5],_=o[6],b=o[7],E=o[8],P=o[9],S=o[10],M=o[11],O=o[12],G=o[13],R=o[14],F=o[15];if(r[0].setComponents(d-c,b-g,M-E,F-O).normalize(),r[1].setComponents(d+c,b+g,M+E,F+O).normalize(),r[2].setComponents(d+u,b+y,M+P,F+G).normalize(),r[3].setComponents(d-u,b-y,M-P,F-G).normalize(),i)r[4].setComponents(f,_,S,R).normalize(),r[5].setComponents(d-f,b-_,M-S,F-R).normalize();else if(r[4].setComponents(d-f,b-_,M-S,F-R).normalize(),e===ni)r[5].setComponents(d+f,b+_,M+S,F+R).normalize();else if(e===us)r[5].setComponents(f,_,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){yr.center.set(0,0,0);let e=zg.distanceTo(t.center);return yr.radius=.7071067811865476+e,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(ga.x=r.normal.x>0?t.max.x:t.min.x,ga.y=r.normal.y>0?t.max.y:t.min.y,ga.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},si=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ha=new at,Ga=new at,hf=new ze,to=new ji,_a=new Mr,Zc=new at,uf=new at,Sr=class extends nn{constructor(t=new $e,e=new si){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,o=e.count;r<o;r++)Ha.fromBufferAttribute(e,r-1),Ga.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ha.distanceTo(Ga);t.setAttribute("lineDistance",new Xe(i,1))}else ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(r),_a.radius+=o,t.ray.intersectsSphere(_a)===!1)return;hf.copy(r).invert(),to.copy(t.ray).applyMatrix4(hf);let u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){let b=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let P=b,S=E-1;P<S;P+=d){let M=g.getX(P),O=g.getX(P+1),G=va(this,t,to,f,M,O,P);G&&e.push(G)}if(this.isLineLoop){let P=g.getX(E-1),S=g.getX(b),M=va(this,t,to,f,P,S,E-1);M&&e.push(M)}}else{let b=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let P=b,S=E-1;P<S;P+=d){let M=va(this,t,to,f,P,P+1,P);M&&e.push(M)}if(this.isLineLoop){let P=va(this,t,to,f,E-1,b,E-1);P&&e.push(P)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){let u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}};ff=new at,df=new at,br=class extends Sr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,o=e.count;r<o;r+=2)ff.fromBufferAttribute(e,r),df.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ff.distanceTo(df);t.setAttribute("lineDistance",new Xe(i,1))}else ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},po=class extends En{constructor(t=[],e=or,i,r,o,c,u,f,d,g){super(t,e,i,r,o,c,u,f,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},mo=class extends En{constructor(t,e,i,r,o,c,u,f,d){super(t,e,i,r,o,c,u,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ki=class extends En{constructor(t,e,i=ai,r,o,c,u=cn,f=cn,d,g=_i,y=1){if(g!==_i&&g!==lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let _={width:t,height:e,depth:y};super(_,r,o,c,u,f,g,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Xa=class extends Ki{constructor(t,e=ai,i=or,r,o,c=cn,u=cn,f,d=_i){let g={width:t,height:t,depth:1},y=[g,g,g,g,g,g];super(t,t,e,i,r,o,c,u,f,d),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},go=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qi=class n extends $e{constructor(t=1,e=1,i=1,r=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:o,depthSegments:c};let u=this;r=Math.floor(r),o=Math.floor(o),c=Math.floor(c);let f=[],d=[],g=[],y=[],_=0,b=0;E("z","y","x",-1,-1,i,e,t,c,o,0),E("z","y","x",1,-1,i,e,-t,c,o,1),E("x","z","y",1,1,t,i,e,r,c,2),E("x","z","y",1,-1,t,i,-e,r,c,3),E("x","y","z",1,-1,t,e,i,r,o,4),E("x","y","z",-1,-1,t,e,-i,r,o,5),this.setIndex(f),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(g,3)),this.setAttribute("uv",new Xe(y,2));function E(P,S,M,O,G,R,F,B,Y,C,V){let W=R/Y,et=F/C,nt=R/2,Q=F/2,K=B/2,U=Y+1,tt=C+1,ct=0,mt=0,ht=new at;for(let yt=0;yt<tt;yt++){let bt=yt*et-Q;for(let Lt=0;Lt<U;Lt++){let zt=Lt*W-nt;ht[P]=zt*O,ht[S]=bt*G,ht[M]=K,d.push(ht.x,ht.y,ht.z),ht[P]=0,ht[S]=0,ht[M]=B>0?1:-1,g.push(ht.x,ht.y,ht.z),y.push(Lt/Y),y.push(1-yt/C),ct+=1}}for(let yt=0;yt<C;yt++)for(let bt=0;bt<Y;bt++){let Lt=_+bt+U*yt,zt=_+bt+U*(yt+1),le=_+(bt+1)+U*(yt+1),ae=_+(bt+1)+U*yt;f.push(Lt,zt,ae),f.push(zt,le,ae),mt+=6}u.addGroup(b,mt,V),b+=mt,_+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Di=class n extends $e{constructor(t=1,e=1,i=1,r=32,o=1,c=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:f};let d=this;r=Math.floor(r),o=Math.floor(o);let g=[],y=[],_=[],b=[],E=0,P=[],S=i/2,M=0;O(),c===!1&&(t>0&&G(!0),e>0&&G(!1)),this.setIndex(g),this.setAttribute("position",new Xe(y,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(b,2));function O(){let R=new at,F=new at,B=0,Y=(e-t)/i;for(let C=0;C<=o;C++){let V=[],W=C/o,et=W*(e-t)+t;for(let nt=0;nt<=r;nt++){let Q=nt/r,K=Q*f+u,U=Math.sin(K),tt=Math.cos(K);F.x=et*U,F.y=-W*i+S,F.z=et*tt,y.push(F.x,F.y,F.z),R.set(U,Y,tt).normalize(),_.push(R.x,R.y,R.z),b.push(Q,1-W),V.push(E++)}P.push(V)}for(let C=0;C<r;C++)for(let V=0;V<o;V++){let W=P[V][C],et=P[V+1][C],nt=P[V+1][C+1],Q=P[V][C+1];(t>0||V!==0)&&(g.push(W,et,Q),B+=3),(e>0||V!==o-1)&&(g.push(et,nt,Q),B+=3)}d.addGroup(M,B,0),M+=B}function G(R){let F=E,B=new se,Y=new at,C=0,V=R===!0?t:e,W=R===!0?1:-1;for(let nt=1;nt<=r;nt++)y.push(0,S*W,0),_.push(0,W,0),b.push(.5,.5),E++;let et=E;for(let nt=0;nt<=r;nt++){let K=nt/r*f+u,U=Math.cos(K),tt=Math.sin(K);Y.x=V*tt,Y.y=S*W,Y.z=V*U,y.push(Y.x,Y.y,Y.z),_.push(0,W,0),B.x=U*.5+.5,B.y=tt*.5*W+.5,b.push(B.x,B.y),E++}for(let nt=0;nt<r;nt++){let Q=F+nt,K=et+nt;R===!0?g.push(K,K+1,Q):g.push(K+1,K,Q),C+=3}d.addGroup(M,C,R===!0?1:2),M+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ys=class n extends Di{constructor(t=1,e=1,i=32,r=1,o=!1,c=0,u=Math.PI*2){super(0,t,e,i,r,o,c,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ya=new at,xa=new at,Jc=new at,Ma=new mi,xs=class extends $e{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),o=Math.cos(ls*e),c=t.getIndex(),u=t.getAttribute("position"),f=c?c.count:u.count,d=[0,0,0],g=["a","b","c"],y=new Array(3),_={},b=[];for(let E=0;E<f;E+=3){c?(d[0]=c.getX(E),d[1]=c.getX(E+1),d[2]=c.getX(E+2)):(d[0]=E,d[1]=E+1,d[2]=E+2);let{a:P,b:S,c:M}=Ma;if(P.fromBufferAttribute(u,d[0]),S.fromBufferAttribute(u,d[1]),M.fromBufferAttribute(u,d[2]),Ma.getNormal(Jc),y[0]=`${Math.round(P.x*r)},${Math.round(P.y*r)},${Math.round(P.z*r)}`,y[1]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,y[2]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,!(y[0]===y[1]||y[1]===y[2]||y[2]===y[0]))for(let O=0;O<3;O++){let G=(O+1)%3,R=y[O],F=y[G],B=Ma[g[O]],Y=Ma[g[G]],C=`${R}_${F}`,V=`${F}_${R}`;V in _&&_[V]?(Jc.dot(_[V].normal)<=o&&(b.push(B.x,B.y,B.z),b.push(Y.x,Y.y,Y.z)),_[V]=null):C in _||(_[C]={index0:d[O],index1:d[G],normal:Jc.clone()})}}for(let E in _)if(_[E]){let{index0:P,index1:S}=_[E];ya.fromBufferAttribute(u,P),xa.fromBufferAttribute(u,S),b.push(ya.x,ya.y,ya.z),b.push(xa.x,xa.y,xa.z)}this.setAttribute("position",new Xe(b,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},_o=class n extends $e{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let o=t/2,c=e/2,u=Math.floor(i),f=Math.floor(r),d=u+1,g=f+1,y=t/u,_=e/f,b=[],E=[],P=[],S=[];for(let M=0;M<g;M++){let O=M*_-c;for(let G=0;G<d;G++){let R=G*y-o;E.push(R,-O,0),P.push(0,0,1),S.push(G/u),S.push(1-M/f)}}for(let M=0;M<f;M++)for(let O=0;O<u;O++){let G=O+d*M,R=O+d*(M+1),F=O+1+d*(M+1),B=O+1+d*M;b.push(G,R,B),b.push(R,F,B)}this.setIndex(b),this.setAttribute("position",new Xe(E,3)),this.setAttribute("normal",new Xe(P,3)),this.setAttribute("uv",new Xe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},vo=class n extends $e{constructor(t=.5,e=1,i=32,r=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:c},i=Math.max(3,i),r=Math.max(1,r);let u=[],f=[],d=[],g=[],y=t,_=(e-t)/r,b=new at,E=new se;for(let P=0;P<=r;P++){for(let S=0;S<=i;S++){let M=o+S/i*c;b.x=y*Math.cos(M),b.y=y*Math.sin(M),f.push(b.x,b.y,b.z),d.push(0,0,1),E.x=(b.x/e+1)/2,E.y=(b.y/e+1)/2,g.push(E.x,E.y)}y+=_}for(let P=0;P<r;P++){let S=P*(i+1);for(let M=0;M<i;M++){let O=M+S,G=O,R=O+i+1,F=O+i+2,B=O+1;u.push(G,R,B),u.push(R,F,B)}}this.setIndex(u),this.setAttribute("position",new Xe(f,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},wr=class n extends $e{constructor(t=1,e=32,i=16,r=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:o,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let f=Math.min(c+u,Math.PI),d=0,g=[],y=new at,_=new at,b=[],E=[],P=[],S=[];for(let M=0;M<=i;M++){let O=[],G=M/i,R=c+G*u,F=t*Math.cos(R),B=Math.sqrt(t*t-F*F),Y=0;M===0&&c===0?Y=.5/e:M===i&&f===Math.PI&&(Y=-.5/e);for(let C=0;C<=e;C++){let V=C/e,W=r+V*o;y.x=-B*Math.cos(W),y.y=F,y.z=B*Math.sin(W),E.push(y.x,y.y,y.z),_.copy(y).normalize(),P.push(_.x,_.y,_.z),S.push(V+Y,1-G),O.push(d++)}g.push(O)}for(let M=0;M<i;M++)for(let O=0;O<e;O++){let G=g[M][O+1],R=g[M][O],F=g[M+1][O],B=g[M+1][O+1];(M!==0||c>0)&&b.push(G,R,B),(M!==i-1||f<Math.PI)&&b.push(R,F,B)}this.setIndex(b),this.setAttribute("position",new Xe(E,3)),this.setAttribute("normal",new Xe(P,3)),this.setAttribute("uv",new Xe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};ld={clone:Cr,merge:xn},Hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hg,this.fragmentShader=Gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=Vg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(r.value);break;case"v2":this.uniforms[i].value=new se().fromArray(r.value);break;case"v3":this.uniforms[i].value=new at().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ze().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wa=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zn=class extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ya=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yo=class extends si{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};tr=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],o=e[i-1];n:{t:{let c;e:{i:if(!(t<r)){for(let u=i+2;;){if(r===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(o=r,r=e[++i],t<r)break t}c=e.length;break e}if(!(t>=o)){let u=e[1];t<u&&(i=2,o=u);for(let f=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(r=o,o=e[--i-1],t>=o)break t}c=i,i=0;break e}break n}for(;i<c;){let u=i+c>>>1;t<e[u]?c=u:i=u+1}if(r=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r;for(let c=0;c!==r;++c)e[c]=i[o+c];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$a=class extends tr{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eh,endingEnd:eh}}intervalChanged_(t,e,i){let r=this.parameterPositions,o=t-2,c=t+1,u=r[o],f=r[c];if(u===void 0)switch(this.getSettings_().endingStart){case nh:o=t,u=2*e-i;break;case ih:o=r.length-2,u=e+r[o]-r[o+1];break;default:o=t,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case nh:c=t,f=2*i-e;break;case ih:c=1,f=i+r[1]-r[0];break;default:c=t-1,f=e}let d=(i-e)*.5,g=this.valueSize;this._weightPrev=d/(e-u),this._weightNext=d/(f-i),this._offsetPrev=o*g,this._offsetNext=c*g}interpolate_(t,e,i,r){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,g=this._offsetPrev,y=this._offsetNext,_=this._weightPrev,b=this._weightNext,E=(i-e)/(r-e),P=E*E,S=P*E,M=-_*S+2*_*P-_*E,O=(1+_)*S+(-1.5-2*_)*P+(-.5+_)*E+1,G=(-1-b)*S+(1.5+b)*P+.5*E,R=b*S-b*P;for(let F=0;F!==u;++F)o[F]=M*c[g+F]+O*c[d+F]+G*c[f+F]+R*c[y+F];return o}},Za=class extends tr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,g=(i-e)/(r-e),y=1-g;for(let _=0;_!==u;++_)o[_]=c[d+_]*y+c[f+_]*g;return o}},Ja=class extends tr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ja=class extends tr{interpolate_(t,e,i,r){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,g=this.inTangents,y=this.outTangents;if(!g||!y){let E=(i-e)/(r-e),P=1-E;for(let S=0;S!==u;++S)o[S]=c[d+S]*P+c[f+S]*E;return o}let _=u*2,b=t-1;for(let E=0;E!==u;++E){let P=c[d+E],S=c[f+E],M=b*_+E*2,O=y[M],G=y[M+1],R=t*_+E*2,F=g[R],B=g[R+1],Y=Wg(i,e,O,F,r);o[E]=cd(Y,P,G,B,S)}return o}};Vn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ss(e,this.TimeBufferType),this.values=ss(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ss(t.times,Array),values:ss(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),jc(t.settings)&&(i.settings={inTangents:ss(t.settings.inTangents,Array),outTangents:ss(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case no:e=this.InterpolantFactoryMethodDiscrete;break;case Fa:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case th:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ce("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return th}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;jc(this.settings)&&(mf(this.settings.inTangents,t),mf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,o=0,c=r-1;for(;o!==r&&i[o]<t;)++o;for(;c!==-1&&i[c]>e;)--c;if(++c,o!==0||c!==r){o>=c&&(c=Math.max(c,1),o=c-1);let u=this.getValueSize();this.times=i.slice(o,c),this.values=this.values.slice(o*u,c*u)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ue("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,o=i.length;o===0&&(ue("KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let u=0;u!==o;u++){let f=i[u];if(typeof f=="number"&&isNaN(f)){ue("KeyframeTrack: Time is not a valid number.",this,u,f),t=!1;break}if(c!==null&&c>f){ue("KeyframeTrack: Out of order keys.",this,u,f,c),t=!1;break}c=f}if(r!==void 0&&og(r))for(let u=0,f=r.length;u!==f;++u){let d=r[u];if(isNaN(d)){ue("KeyframeTrack: Value is not a valid number.",this,u,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ea,o=t.length-1,c=1;for(let u=1;u<o;++u){let f=!1,d=t[u],g=t[u+1];if(d!==g&&(u!==1||d!==t[0]))if(r)f=!0;else{let y=u*i,_=y-i,b=y+i;for(let E=0;E!==i;++E){let P=e[y+E];if(P!==e[_+E]||P!==e[b+E]){f=!0;break}}}if(f){if(u!==c){t[c]=t[u];let y=u*i,_=c*i;for(let b=0;b!==i;++b)e[_+b]=e[y+b]}++c}}if(o>0){t[c]=t[o];for(let u=o*i,f=c*i,d=0;d!==i;++d)e[f+d]=e[u+d];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,jc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Fa;er=class extends Vn{constructor(t,e,i){super(t,e,i)}};er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=no;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;Ka=class extends Vn{constructor(t,e,i,r){super(t,e,i,r)}};Ka.prototype.ValueTypeName="color";Qa=class extends Vn{constructor(t,e,i,r){super(t,e,i,r)}};Qa.prototype.ValueTypeName="number";tl=class extends tr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-e)/(r-e),d=t*u;for(let g=d+u;d!==g;d+=4)Un.slerpFlat(o,0,c,d-u,c,d,f);return o}},xo=class extends Vn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}};xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;nr=class extends Vn{constructor(t,e,i){super(t,e,i)}};nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=no;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;el=class extends Vn{constructor(t,e,i,r){super(t,e,i,r)}};el.prototype.ValueTypeName="vector";nl=class{constructor(t,e,i){let r=this,o=!1,c=0,u=0,f,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(g){u++,o===!1&&r.onStart!==void 0&&r.onStart(g,c,u),o=!0},this.itemEnd=function(g){c++,r.onProgress!==void 0&&r.onProgress(g,c,u),c===u&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),f?f(g):g},this.setURLModifier=function(g){return f=g,this},this.addHandler=function(g,y){return d.push(g,y),this},this.removeHandler=function(g){let y=d.indexOf(g);return y!==-1&&d.splice(y,2),this},this.getHandler=function(g){for(let y=0,_=d.length;y<_;y+=2){let b=d[y],E=d[y+1];if(b.global&&(b.lastIndex=0),b.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hd=new nl,il=class{constructor(t){this.manager=t!==void 0?t:hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,o){i.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};il.DEFAULT_MATERIAL_NAME="__DEFAULT";Mo=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},So=class extends Mo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Kc=new ze,gf=new at,_f=new at,rl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;gf.setFromMatrixPosition(t.matrixWorld),e.position.copy(gf),_f.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_f),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Kc,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,c=r?r.z/o.x:1,u=r?r.w/o.y:1,f=r?r.x/o.x:0,d=r?r.y/o.y:0;t.coordinateSystem===us||t.reversedDepth?e.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+d,0,0,1,0,0,0,0,1):e.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+d,0,0,.5,.5,0,0,0,1),e.multiply(Kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sa=new at,ba=new Un,pi=new at,bo=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sa,ba,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Sa,ba,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new at,vf=new se,yf=new se,vn=class extends bo{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,vf,yf),e.subVectors(yf,vf)}setViewOffset(t,e,i,r,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ls*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,o=-.5*r,c=this.view;if(this.view!==null&&this.view.enabled){let f=c.fullWidth,d=c.fullHeight;o+=c.offsetX*r/f,e-=c.offsetY*i/d,r*=c.width/f,i*=c.height/d}let u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ms=class extends bo{constructor(t=-1,e=1,i=1,r=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-t,c=i+t,u=r+e,f=r-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,u-=g*this.view.offsetY,f=u-g*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rh=class extends rl{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new rh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},os=-90,as=1,sl=class extends nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new vn(os,as,t,e);r.layers=this.layers,this.add(r);let o=new vn(os,as,t,e);o.layers=this.layers,this.add(o);let c=new vn(os,as,t,e);c.layers=this.layers,this.add(c);let u=new vn(os,as,t,e);u.layers=this.layers,this.add(u);let f=new vn(os,as,t,e);f.layers=this.layers,this.add(f);let d=new vn(os,as,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,o,c,u,f]=e;for(let d of e)this.remove(d);if(t===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===us)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,c,u,f,d,g]=this.children,y=t.getRenderTarget(),_=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;let P=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,2,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,3,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,4,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=P,t.setRenderTarget(i,5,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,g),t.setRenderTarget(y,_,b),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}},ol=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Oh="\\[\\]\\.:\\/",Yg=new RegExp("["+Oh+"]","g"),Fh="[^"+Oh+"]",qg="[^"+Oh.replace("\\.","")+"]",$g=/((?:WC+[\/:])*)/.source.replace("WC",Fh),Zg=/(WCOD+)?/.source.replace("WCOD",qg),Jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),Kg=new RegExp("^"+$g+Zg+Jg+jg+"$"),Qg=["material","materials","bones","map"],sh=class{constructor(t,e,i){let r=i||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},qe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yg,"")}static parseTrackName(t){let e=Kg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=i.nodeName.substring(r+1);Qg.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let c=0;c<o.length;c++){let u=o[c];if(u.name===e||u.uuid===e)return u;let f=i(u.children);if(f)return f}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===d){d=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let c=t[r];if(c===void 0){let d=e.nodeName;ue("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",t);return}let u=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?u=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=sh;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];kM=new Float32Array(1),xf=new ze,wo=class{constructor(t,e,i=0,r=1/0){this.ray=new ji(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xf),this}intersectObject(t,e=!0,i=[]){return oh(t,this,i,e),i.sort(Mf),i}intersectObjects(t,e=!0,i=[]){for(let r=0,o=t.length;r<o;r++)oh(t[r],this,i,e);return i.sort(Mf),i}};bs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=we(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},ah=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=r,this}},Sf=new at,Eo=class extends nn{constructor(t=new at(0,0,1),e=new at(0,0,0),i=1,r=16776960,o=i*.2,c=o*.2){super(),this.type="ArrowHelper",wa===void 0&&(wa=new $e,wa.setAttribute("position",new Xe([0,0,0,0,1,0],3)),Qc=new ys(.5,1,5,1),Qc.translate(0,-.5,0)),this.position.copy(e),this.line=new Sr(wa,new si({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Fe(Qc,new Bn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,c)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Sf.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Sf,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},To=class extends ri{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Ld(){let n=null,t=!1,e=null,i=null;function r(o,c){i=n.requestAnimationFrame(r),e(o,c)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function n0(n){let t=new WeakMap;function e(u,f){let d=u.array,g=u.usage,y=d.byteLength,_=n.createBuffer();n.bindBuffer(f,_),n.bufferData(f,d,g),u.onUploadCallback();let b;if(d instanceof Float32Array)b=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)b=n.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?b=n.HALF_FLOAT:b=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=n.SHORT;else if(d instanceof Uint32Array)b=n.UNSIGNED_INT;else if(d instanceof Int32Array)b=n.INT;else if(d instanceof Int8Array)b=n.BYTE;else if(d instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:y}}function i(u,f,d){let g=f.array,y=f.updateRanges;if(n.bindBuffer(d,u),y.length===0)n.bufferSubData(d,0,g);else{y.sort((b,E)=>b.start-E.start);let _=0;for(let b=1;b<y.length;b++){let E=y[_],P=y[b];P.start<=E.start+E.count+1?E.count=Math.max(E.count,P.start+P.count-E.start):(++_,y[_]=P)}y.length=_+1;for(let b=0,E=y.length;b<E;b++){let P=y[b];n.bufferSubData(d,P.start*g.BYTES_PER_ELEMENT,g,P.start,P.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);let f=t.get(u);f&&(n.deleteBuffer(f.buffer),t.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){let g=t.get(u);(!g||g.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}let d=t.get(u);if(d===void 0)t.set(u,e(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:r,remove:o,update:c}}function Bv(n,t,e,i,r,o){let c=new ge(0),u=r===!0?0:1,f,d,g=null,y=0,_=null;function b(O){let G=O.isScene===!0?O.background:null;if(G&&G.isTexture){let R=O.backgroundBlurriness>0;G=t.get(G,R)}return G}function E(O){let G=!1,R=b(O);R===null?S(c,u):R&&R.isColor&&(S(R,1),G=!0);let F=n.xr.getEnvironmentBlendMode();F==="additive"?e.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||G)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function P(O,G){let R=b(G);R&&(R.isCubeTexture||R.mapping===Co)?(d===void 0&&(d=new Fe(new Qi(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Cr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,B,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(G.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Nd),d.material.toneMapped=Te.getTransfer(R.colorSpace)!==Oe,(g!==R||y!==R.version||_!==n.toneMapping)&&(d.material.needsUpdate=!0,g=R,y=R.version,_=n.toneMapping),d.layers.enableAll(),O.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(f===void 0&&(f=new Fe(new _o(2,2),new kn({name:"BackgroundMaterial",uniforms:Cr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=R,f.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,f.material.toneMapped=Te.getTransfer(R.colorSpace)!==Oe,R.matrixAutoUpdate===!0&&R.updateMatrix(),f.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||y!==R.version||_!==n.toneMapping)&&(f.material.needsUpdate=!0,g=R,y=R.version,_=n.toneMapping),f.layers.enableAll(),O.unshift(f,f.geometry,f.material,0,0,null))}function S(O,G){O.getRGB(Zl,Dh(n)),e.buffers.color.setClear(Zl.r,Zl.g,Zl.b,G,o)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(O,G=1){c.set(O),u=G,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(O){u=O,S(c,u)},render:E,addToRenderList:P,dispose:M}}function kv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=_(null),o=r,c=!1;function u(et,nt,Q,K,U){let tt=!1,ct=y(et,K,Q,nt);o!==ct&&(o=ct,d(o.object)),tt=b(et,K,Q,U),tt&&E(et,K,Q,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(tt||c)&&(c=!1,R(et,nt,Q,K),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function f(){return n.createVertexArray()}function d(et){return n.bindVertexArray(et)}function g(et){return n.deleteVertexArray(et)}function y(et,nt,Q,K){let U=K.wireframe===!0,tt=i[nt.id];tt===void 0&&(tt={},i[nt.id]=tt);let ct=et.isInstancedMesh===!0?et.id:0,mt=tt[ct];mt===void 0&&(mt={},tt[ct]=mt);let ht=mt[Q.id];ht===void 0&&(ht={},mt[Q.id]=ht);let yt=ht[U];return yt===void 0&&(yt=_(f()),ht[U]=yt),yt}function _(et){let nt=[],Q=[],K=[];for(let U=0;U<e;U++)nt[U]=0,Q[U]=0,K[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:nt,enabledAttributes:Q,attributeDivisors:K,object:et,attributes:{},index:null}}function b(et,nt,Q,K){let U=o.attributes,tt=nt.attributes,ct=0,mt=Q.getAttributes();for(let ht in mt)if(mt[ht].location>=0){let bt=U[ht],Lt=tt[ht];if(Lt===void 0&&(ht==="instanceMatrix"&&et.instanceMatrix&&(Lt=et.instanceMatrix),ht==="instanceColor"&&et.instanceColor&&(Lt=et.instanceColor)),bt===void 0||bt.attribute!==Lt||Lt&&bt.data!==Lt.data)return!0;ct++}return o.attributesNum!==ct||o.index!==K}function E(et,nt,Q,K){let U={},tt=nt.attributes,ct=0,mt=Q.getAttributes();for(let ht in mt)if(mt[ht].location>=0){let bt=tt[ht];bt===void 0&&(ht==="instanceMatrix"&&et.instanceMatrix&&(bt=et.instanceMatrix),ht==="instanceColor"&&et.instanceColor&&(bt=et.instanceColor));let Lt={};Lt.attribute=bt,bt&&bt.data&&(Lt.data=bt.data),U[ht]=Lt,ct++}o.attributes=U,o.attributesNum=ct,o.index=K}function P(){let et=o.newAttributes;for(let nt=0,Q=et.length;nt<Q;nt++)et[nt]=0}function S(et){M(et,0)}function M(et,nt){let Q=o.newAttributes,K=o.enabledAttributes,U=o.attributeDivisors;Q[et]=1,K[et]===0&&(n.enableVertexAttribArray(et),K[et]=1),U[et]!==nt&&(n.vertexAttribDivisor(et,nt),U[et]=nt)}function O(){let et=o.newAttributes,nt=o.enabledAttributes;for(let Q=0,K=nt.length;Q<K;Q++)nt[Q]!==et[Q]&&(n.disableVertexAttribArray(Q),nt[Q]=0)}function G(et,nt,Q,K,U,tt,ct){ct===!0?n.vertexAttribIPointer(et,nt,Q,U,tt):n.vertexAttribPointer(et,nt,Q,K,U,tt)}function R(et,nt,Q,K){P();let U=K.attributes,tt=Q.getAttributes(),ct=nt.defaultAttributeValues;for(let mt in tt){let ht=tt[mt];if(ht.location>=0){let yt=U[mt];if(yt===void 0&&(mt==="instanceMatrix"&&et.instanceMatrix&&(yt=et.instanceMatrix),mt==="instanceColor"&&et.instanceColor&&(yt=et.instanceColor)),yt!==void 0){let bt=yt.normalized,Lt=yt.itemSize,zt=t.get(yt);if(zt===void 0)continue;let le=zt.buffer,ae=zt.type,dt=zt.bytesPerElement,wt=ae===n.INT||ae===n.UNSIGNED_INT||yt.gpuType===hl;if(yt.isInterleavedBufferAttribute){let Pt=yt.data,Vt=Pt.stride,re=yt.offset;if(Pt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<ht.locationSize;Ht++)M(ht.location+Ht,Pt.meshPerAttribute);et.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let Ht=0;Ht<ht.locationSize;Ht++)S(ht.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Ht=0;Ht<ht.locationSize;Ht++)G(ht.location+Ht,Lt/ht.locationSize,ae,bt,Vt*dt,(re+Lt/ht.locationSize*Ht)*dt,wt)}else{if(yt.isInstancedBufferAttribute){for(let Pt=0;Pt<ht.locationSize;Pt++)M(ht.location+Pt,yt.meshPerAttribute);et.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Pt=0;Pt<ht.locationSize;Pt++)S(ht.location+Pt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Pt=0;Pt<ht.locationSize;Pt++)G(ht.location+Pt,Lt/ht.locationSize,ae,bt,Lt*dt,Lt/ht.locationSize*Pt*dt,wt)}}else if(ct!==void 0){let bt=ct[mt];if(bt!==void 0)switch(bt.length){case 2:n.vertexAttrib2fv(ht.location,bt);break;case 3:n.vertexAttrib3fv(ht.location,bt);break;case 4:n.vertexAttrib4fv(ht.location,bt);break;default:n.vertexAttrib1fv(ht.location,bt)}}}}O()}function F(){V();for(let et in i){let nt=i[et];for(let Q in nt){let K=nt[Q];for(let U in K){let tt=K[U];for(let ct in tt)g(tt[ct].object),delete tt[ct];delete K[U]}}delete i[et]}}function B(et){if(i[et.id]===void 0)return;let nt=i[et.id];for(let Q in nt){let K=nt[Q];for(let U in K){let tt=K[U];for(let ct in tt)g(tt[ct].object),delete tt[ct];delete K[U]}}delete i[et.id]}function Y(et){for(let nt in i){let Q=i[nt];for(let K in Q){let U=Q[K];if(U[et.id]===void 0)continue;let tt=U[et.id];for(let ct in tt)g(tt[ct].object),delete tt[ct];delete U[et.id]}}}function C(et){for(let nt in i){let Q=i[nt],K=et.isInstancedMesh===!0?et.id:0,U=Q[K];if(U!==void 0){for(let tt in U){let ct=U[tt];for(let mt in ct)g(ct[mt].object),delete ct[mt];delete U[tt]}delete Q[K],Object.keys(Q).length===0&&delete i[nt]}}}function V(){W(),c=!0,o!==r&&(o=r,d(o.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:V,resetDefaultState:W,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfObject:C,releaseStatesOfProgram:Y,initAttributes:P,enableAttribute:S,disableUnusedAttributes:O}}function zv(n,t,e){let i;function r(f){i=f}function o(f,d){n.drawArrays(i,f,d),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawArraysInstanced(i,f,d,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,g);let _=0;for(let b=0;b<g;b++)_+=d[b];e.update(_,i,1)}this.setMode=r,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Vv(n,t,e,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let Y=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(Y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(Y){return!(Y!==qn&&i.convert(Y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(Y){let C=Y===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(Y!==Ln&&Y!==li&&!C&&i.convert(Y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(Y){if(Y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";Y="mediump"}return Y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",g=f(d);g!==d&&(ce("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);let y=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&_===!1&&ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let b=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),M=n.getParameter(n.MAX_VERTEX_ATTRIBS),O=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),G=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=n.getParameter(n.MAX_SAMPLES),B=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:y,reversedDepthBuffer:_,maxTextures:b,maxVertexTextures:E,maxTextureSize:P,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:O,maxVaryings:G,maxFragmentUniforms:R,maxSamples:F,samples:B}}function Hv(n){let t=this,e=null,i=0,r=!1,o=!1,c=new Fn,u=new ve,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(y,_){let b=y.length!==0||_||i!==0||r;return r=_,i=y.length,b},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(y,_){e=g(y,_,0)},this.setState=function(y,_,b){let E=y.clippingPlanes,P=y.clipIntersection,S=y.clipShadows,M=n.get(y);if(!r||E===null||E.length===0||o&&!S)o?g(null):d();else{let O=o?0:i,G=O*4,R=M.clippingState||null;f.value=R,R=g(E,_,G,b);for(let F=0;F!==G;++F)R[F]=e[F];M.clippingState=R,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=O}};function d(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function g(y,_,b,E){let P=y!==null?y.length:0,S=null;if(P!==0){if(S=f.value,E!==!0||S===null){let M=b+P*4,O=_.matrixWorldInverse;u.getNormalMatrix(O),(S===null||S.length<M)&&(S=new Float32Array(M));for(let G=0,R=b;G!==P;++G,R+=4)c.copy(y[G]).applyMatrix4(O,u),c.normal.toArray(S,R),S[R+3]=c.constant}f.value=S,f.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,S}}function qv(n){let t=[],e=[],i=n,r=n-Ps+1+Gv;for(let o=0;o<r;o++){let c=Math.pow(2,i);t.push(c);let u=1/(c-2),f=-u,d=1+u,g=[f,f,d,f,d,d,f,f,d,d,f,d],y=6,_=6,b=3,E=new Float32Array(b*_*y),P=new Float32Array(b*_*y);for(let M=0;M<y;M++){let O=M%3*2/3-1,G=M>2?0:-1,R=[O,G,0,O+2/3,G,0,O+2/3,G+1,0,O,G,0,O+2/3,G+1,0,O,G+1,0];E.set(R,b*_*M);for(let F=0;F<_;F++){let B=g[F*2]*2-1,Y=g[F*2+1]*2-1;M===0?Pr.set(1,Y,B):M===1?Pr.set(-B,1,-Y):M===2?Pr.set(-B,Y,1):M===3?Pr.set(-1,Y,-B):M===4?Pr.set(-B,-1,Y):Pr.set(B,Y,-1),Pr.toArray(P,(M*_+F)*b)}}let S=new $e;S.setAttribute("position",new Ge(E,b)),S.setAttribute("outputDirection",new Ge(P,b)),e.push(new Fe(S,null)),i>Ps&&i--}return{lodMeshes:e,sizeLods:t}}function fd(n,t,e){let i=new Rn(n,t,e);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function $v(n,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Zv(n,t,e){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:Xv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function dd(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function pd(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jv(n){let t=new WeakMap,e=new WeakMap,i=null;function r(_,b=!1){return _==null?null:b?c(_):o(_)}function o(_){if(_&&_.isTexture){let b=_.mapping;if(b===al||b===ll)if(t.has(_)){let E=t.get(_).texture;return u(E,_.mapping)}else{let E=_.image;if(E&&E.height>0){let P=new Kl(E.height);return P.fromEquirectangularTexture(n,_),t.set(_,P),_.addEventListener("dispose",d),u(P.texture,_.mapping)}else return null}}return _}function c(_){if(_&&_.isTexture){let b=_.mapping,E=b===al||b===ll,P=b===or||b===Tr;if(E||P){let S=e.get(_),M=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return i===null&&(i=new jl(n)),S=E?i.fromEquirectangular(_,S):i.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,e.set(_,S),S.texture;if(S!==void 0)return S.texture;{let O=_.image;return E&&O&&O.height>0||P&&O&&f(O)?(i===null&&(i=new jl(n)),S=E?i.fromEquirectangular(_):i.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,e.set(_,S),_.addEventListener("dispose",g),S.texture):null}}}return _}function u(_,b){return b===al?_.mapping=or:b===ll&&(_.mapping=Tr),_}function f(_){let b=0,E=6;for(let P=0;P<E;P++)_[P]!==void 0&&b++;return b===E}function d(_){let b=_.target;b.removeEventListener("dispose",d);let E=t.get(b);E!==void 0&&(t.delete(b),E.dispose())}function g(_){let b=_.target;b.removeEventListener("dispose",g);let E=e.get(b);E!==void 0&&(e.delete(b),E.dispose())}function y(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:y}}function jv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&xr("WebGLRenderer: "+i+" extension not supported."),r}}}function Kv(n,t,e,i){let r={},o=new WeakMap;function c(y){let _=y.target;_.index!==null&&t.remove(_.index);for(let E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete r[_.id];let b=o.get(_);b&&(t.remove(b),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function u(y,_){return r[_.id]===!0||(_.addEventListener("dispose",c),r[_.id]=!0,e.memory.geometries++),_}function f(y){let _=y.attributes;for(let b in _)t.update(_[b],n.ARRAY_BUFFER)}function d(y){let _=[],b=y.index,E=y.attributes.position,P=0;if(E===void 0)return;if(b!==null){let O=b.array;P=b.version;for(let G=0,R=O.length;G<R;G+=3){let F=O[G+0],B=O[G+1],Y=O[G+2];_.push(F,B,B,Y,Y,F)}}else{let O=E.array;P=E.version;for(let G=0,R=O.length/3-1;G<R;G+=3){let F=G+0,B=G+1,Y=G+2;_.push(F,B,B,Y,Y,F)}}let S=new(E.count>=65535?ho:co)(_,1);S.version=P;let M=o.get(y);M&&t.remove(M),o.set(y,S)}function g(y){let _=o.get(y);if(_){let b=y.index;b!==null&&_.version<b.version&&d(y)}else d(y);return o.get(y)}return{get:u,update:f,getWireframeAttribute:g}}function Qv(n,t,e){let i;function r(y){i=y}let o,c;function u(y){o=y.type,c=y.bytesPerElement}function f(y,_){n.drawElements(i,_,o,y*c),e.update(_,i,1)}function d(y,_,b){b!==0&&(n.drawElementsInstanced(i,_,o,y*c,b),e.update(_,i,b))}function g(y,_,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,o,y,0,b);let P=0;for(let S=0;S<b;S++)P+=_[S];e.update(P,i,1)}this.setMode=r,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=g}function ty(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(e.calls++,c){case n.TRIANGLES:e.triangles+=u*(o/3);break;case n.LINES:e.lines+=u*(o/2);break;case n.LINE_STRIP:e.lines+=u*(o-1);break;case n.LINE_LOOP:e.lines+=u*o;break;case n.POINTS:e.points+=u*o;break;default:ue("WebGLInfo: Unknown draw mode:",c);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function ey(n,t,e){let i=new WeakMap,r=new Ze;function o(c,u,f){let d=c.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0,_=i.get(u);if(_===void 0||_.count!==y){let V=function(){Y.dispose(),i.delete(u),u.removeEventListener("dispose",V)};_!==void 0&&_.texture.dispose();let b=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],O=u.morphAttributes.color||[],G=0;b===!0&&(G=1),E===!0&&(G=2),P===!0&&(G=3);let R=u.attributes.position.count*G,F=1;R>t.maxTextureSize&&(F=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let B=new Float32Array(R*F*4*y),Y=new ao(B,R,F,y);Y.type=li,Y.needsUpdate=!0;let C=G*4;for(let W=0;W<y;W++){let et=S[W],nt=M[W],Q=O[W],K=R*F*4*W;for(let U=0;U<et.count;U++){let tt=U*C;b===!0&&(r.fromBufferAttribute(et,U),B[K+tt+0]=r.x,B[K+tt+1]=r.y,B[K+tt+2]=r.z,B[K+tt+3]=0),E===!0&&(r.fromBufferAttribute(nt,U),B[K+tt+4]=r.x,B[K+tt+5]=r.y,B[K+tt+6]=r.z,B[K+tt+7]=0),P===!0&&(r.fromBufferAttribute(Q,U),B[K+tt+8]=r.x,B[K+tt+9]=r.y,B[K+tt+10]=r.z,B[K+tt+11]=Q.itemSize===4?r.w:1)}}_={count:y,texture:Y,size:new se(R,F)},i.set(u,_),u.addEventListener("dispose",V)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let b=0;for(let P=0;P<d.length;P++)b+=d[P];let E=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:o}}function ny(n,t,e,i,r){let o=new WeakMap;function c(d){let g=r.render.frame,y=d.geometry,_=t.get(d,y);if(o.get(_)!==g&&(t.update(_),o.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==g&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,g))),d.isSkinnedMesh){let b=d.skeleton;o.get(b)!==g&&(b.update(),o.set(b,g))}return _}function u(){o=new WeakMap}function f(d){let g=d.target;g.removeEventListener("dispose",f),i.releaseStatesOfObject(g),e.remove(g.instanceMatrix),g.instanceColor!==null&&e.remove(g.instanceColor)}return{update:c,dispose:u}}function ry(n,t,e,i,r,o){let c=new Rn(t,e,{type:n,depthBuffer:r,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),u=null,f=null,d=new $e;d.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Xe([0,2,0,0,2,0],2));let g=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new Fe(d,g),_=new Ms(-1,1,1,-1,0,1),b=null,E=null,P=!1,S,M=null,O=[],G=!1;this.setSize=function(R,F){c.setSize(R,F),u!==null&&u.setSize(R,F),f!==null&&f.setSize(R,F);for(let B=0;B<O.length;B++){let Y=O[B];Y.setSize&&Y.setSize(R,F)}},this.setEffects=function(R){O=R,G=O.length>0&&O[0].isRenderPass===!0;let F=c.width,B=c.height;O.length>0&&u===null&&(u=new Rn(F,B,{type:ci,depthBuffer:!1,stencilBuffer:!1}),f=new Rn(F,B,{type:ci,depthBuffer:!1,stencilBuffer:!1}));for(let Y=0;Y<O.length;Y++){let C=O[Y];C.setSize&&C.setSize(F,B)}},this.begin=function(R,F){if(P||R.toneMapping===oi&&O.length===0)return!1;if(M=F,F!==null){let B=F.width,Y=F.height;(c.width!==B||c.height!==Y)&&this.setSize(B,Y)}return G===!1&&R.setRenderTarget(c),S=R.toneMapping,R.toneMapping=oi,!0},this.hasRenderPass=function(){return G},this.end=function(R,F){R.toneMapping=S,P=!0;let B=c,Y=u;for(let C=0;C<O.length;C++){let V=O[C];V.enabled!==!1&&(V.render(R,Y,B,F),V.needsSwap!==!1&&(B=Y,Y=Y===u?f:u))}if(b!==R.outputColorSpace||E!==R.toneMapping){b=R.outputColorSpace,E=R.toneMapping,g.defines={},Te.getTransfer(b)===Oe&&(g.defines.SRGB_TRANSFER="");let C=iy[E];C&&(g.defines[C]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=B.texture,R.setRenderTarget(M),R.render(y,_),M=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),f!==null&&f.dispose(),d.dispose(),g.dispose()}}function Rs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,o=md[r];if(o===void 0&&(o=new Float32Array(r),md[r]=o),t!==0){i.toArray(o,0);for(let c=1,u=0;c!==t;++c)u+=e,n[c].toArray(o,u)}return o}function rn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function sn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ec(n,t){let e=gd[t];e===void 0&&(e=new Int32Array(t),gd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function oy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2fv(this.addr,t),sn(e,t)}}function ay(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;n.uniform3fv(this.addr,t),sn(e,t)}}function ly(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4fv(this.addr,t),sn(e,t)}}function cy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,i))return;yd.set(i),n.uniformMatrix2fv(this.addr,!1,yd),sn(e,i)}}function hy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,i))return;vd.set(i),n.uniformMatrix3fv(this.addr,!1,vd),sn(e,i)}}function uy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,i))return;_d.set(i),n.uniformMatrix4fv(this.addr,!1,_d),sn(e,i)}}function fy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2iv(this.addr,t),sn(e,t)}}function py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3iv(this.addr,t),sn(e,t)}}function my(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4iv(this.addr,t),sn(e,t)}}function gy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _y(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2uiv(this.addr,t),sn(e,t)}}function vy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3uiv(this.addr,t),sn(e,t)}}function yy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4uiv(this.addr,t),sn(e,t)}}function xy(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(Wh.compareFunction=e.isReversedDepthBuffer()?$l:ql,o=Wh):o=Dd,e.setTexture2D(t||o,r)}function My(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Fd,r)}function Sy(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ud,r)}function by(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Od,r)}function wy(n){switch(n){case 5126:return sy;case 35664:return oy;case 35665:return ay;case 35666:return ly;case 35674:return cy;case 35675:return hy;case 35676:return uy;case 5124:case 35670:return fy;case 35667:case 35671:return dy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return _y;case 36295:return vy;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return by}}function Ey(n,t){n.uniform1fv(this.addr,t)}function Ty(n,t){let e=Rs(t,this.size,2);n.uniform2fv(this.addr,e)}function Ay(n,t){let e=Rs(t,this.size,3);n.uniform3fv(this.addr,e)}function Cy(n,t){let e=Rs(t,this.size,4);n.uniform4fv(this.addr,e)}function Py(n,t){let e=Rs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Iy(n,t){let e=Rs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ry(n,t){let e=Rs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ly(n,t){n.uniform1iv(this.addr,t)}function Ny(n,t){n.uniform2iv(this.addr,t)}function Dy(n,t){n.uniform3iv(this.addr,t)}function Oy(n,t){n.uniform4iv(this.addr,t)}function Fy(n,t){n.uniform1uiv(this.addr,t)}function Uy(n,t){n.uniform2uiv(this.addr,t)}function By(n,t){n.uniform3uiv(this.addr,t)}function ky(n,t){n.uniform4uiv(this.addr,t)}function zy(n,t,e){let i=this.cache,r=t.length,o=ec(e,r);rn(i,o)||(n.uniform1iv(this.addr,o),sn(i,o));let c;this.type===n.SAMPLER_2D_SHADOW?c=Wh:c=Dd;for(let u=0;u!==r;++u)e.setTexture2D(t[u]||c,o[u])}function Vy(n,t,e){let i=this.cache,r=t.length,o=ec(e,r);rn(i,o)||(n.uniform1iv(this.addr,o),sn(i,o));for(let c=0;c!==r;++c)e.setTexture3D(t[c]||Fd,o[c])}function Hy(n,t,e){let i=this.cache,r=t.length,o=ec(e,r);rn(i,o)||(n.uniform1iv(this.addr,o),sn(i,o));for(let c=0;c!==r;++c)e.setTextureCube(t[c]||Ud,o[c])}function Gy(n,t,e){let i=this.cache,r=t.length,o=ec(e,r);rn(i,o)||(n.uniform1iv(this.addr,o),sn(i,o));for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||Od,o[c])}function Xy(n){switch(n){case 5126:return Ey;case 35664:return Ty;case 35665:return Ay;case 35666:return Cy;case 35674:return Py;case 35675:return Iy;case 35676:return Ry;case 5124:case 35670:return Ly;case 35667:case 35671:return Ny;case 35668:case 35672:return Dy;case 35669:case 35673:return Oy;case 5125:return Fy;case 36294:return Uy;case 36295:return By;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}function xd(n,t){n.seq.push(t),n.map[t.id]=t}function Wy(n,t,e){let i=n.name,r=i.length;for(Gh.lastIndex=0;;){let o=Gh.exec(i),c=Gh.lastIndex,u=o[1],f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===r){xd(e,d===void 0?new Yh(u,n,t):new qh(u,n,t));break}else{let y=e.map[u];y===void 0&&(y=new $h(u),xd(e,y)),e=y}}}function Md(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function $y(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=r;c<o;c++){let u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}function Zy(n){Te._getMatrix(Sd,Te.workingColorSpace,n);let t=`mat3( ${Sd.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case ro:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function bd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let c=/ERROR: 0:(\d+)/.exec(o);if(c){let u=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+$y(n.getShaderSource(t),u)}else return o}function Jy(n,t){let e=Zy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ky(n,t){let e=jy[t];return e===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Qy(){Te.getLuminanceCoefficients(Jl);let n=Jl.x.toFixed(4),t=Jl.y.toFixed(4),e=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function ex(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function nx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(t,r),c=o.name,u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),e[c]={type:o.type,location:n.getAttribLocation(t,c),locationSize:u}}return e}function Bo(n){return n!==""}function wd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ed(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Zh(n){return n.replace(ix,sx)}function sx(n,t){let e=Se[t];if(e===void 0){let i=rx.get(t);if(i!==void 0)e=Se[i],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zh(e)}function Td(n){return n.replace(ox,ax)}function ax(n,t,e,i){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ad(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function cx(n){return lx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function ux(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":hx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function dx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function mx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":px[n.combine]||"ENVMAP_BLENDING_NONE"}function gx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function _x(n,t,e,i){let r=n.getContext(),o=e.defines,c=e.vertexShader,u=e.fragmentShader,f=cx(e),d=ux(e),g=dx(e),y=mx(e),_=gx(e),b=tx(e),E=ex(o),P=r.createProgram(),S,M,O=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Bo).join(`
`),S.length>0&&(S+=`
`),M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Bo).join(`
`),M.length>0&&(M+=`
`)):(S=[Ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),M=[Ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",e.envMap?"#define "+y:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Se.tonemapping_pars_fragment:"",e.toneMapping!==oi?Ky("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,Jy("linearToOutputTexel",e.outputColorSpace),Qy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bo).join(`
`)),c=Zh(c),c=wd(c,e),c=Ed(c,e),u=Zh(u),u=wd(u,e),u=Ed(u,e),c=Td(c),u=Td(u),e.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,M=["#define varying in",e.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let G=O+S+c,R=O+M+u,F=Md(r,r.VERTEX_SHADER,G),B=Md(r,r.FRAGMENT_SHADER,R);r.attachShader(P,F),r.attachShader(P,B),e.index0AttributeName!==void 0?r.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(P,0,"position"),r.linkProgram(P);function Y(et){if(n.debug.checkShaderErrors){let nt=r.getProgramInfoLog(P)||"",Q=r.getShaderInfoLog(F)||"",K=r.getShaderInfoLog(B)||"",U=nt.trim(),tt=Q.trim(),ct=K.trim(),mt=!0,ht=!0;if(r.getProgramParameter(P,r.LINK_STATUS)===!1)if(mt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,P,F,B);else{let yt=bd(r,F,"vertex"),bt=bd(r,B,"fragment");ue("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(P,r.VALIDATE_STATUS)+`

Material Name: `+et.name+`
Material Type: `+et.type+`

Program Info Log: `+U+`
`+yt+`
`+bt)}else U!==""?ce("WebGLProgram: Program Info Log:",U):(tt===""||ct==="")&&(ht=!1);ht&&(et.diagnostics={runnable:mt,programLog:U,vertexShader:{log:tt,prefix:S},fragmentShader:{log:ct,prefix:M}})}r.deleteShader(F),r.deleteShader(B),C=new Is(r,P),V=nx(r,P)}let C;this.getUniforms=function(){return C===void 0&&Y(this),C};let V;this.getAttributes=function(){return V===void 0&&Y(this),V};let W=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(P,Yy)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qy++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=F,this.fragmentShader=B,this}function yx(n){return n===cr||n===Do||n===Oo}function xx(n,t,e,i,r,o){let c=new ms,u=new Jh,f=new Set,d=[],g=new Map,y=i.logarithmicDepthBuffer,_=i.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return f.add(C),C===0?"uv":`uv${C}`}function P(C,V,W,et,nt,Q){let K=et.fog,U=nt.geometry,tt=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?et.environment:null,ct=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,mt=t.get(C.envMap||tt,ct),ht=mt&&mt.mapping===Co?mt.image.height:null,yt=b[C.type];C.precision!==null&&(_=i.getMaxPrecision(C.precision),_!==C.precision&&ce("WebGLProgram.getParameters:",C.precision,"not supported, using",_,"instead."));let bt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Lt=bt!==void 0?bt.length:0,zt=0;U.morphAttributes.position!==void 0&&(zt=1),U.morphAttributes.normal!==void 0&&(zt=2),U.morphAttributes.color!==void 0&&(zt=3);let le,ae,dt,wt;if(yt){let De=Mi[yt];le=De.vertexShader,ae=De.fragmentShader}else{le=C.vertexShader,ae=C.fragmentShader;let De=u.getVertexShaderStage(C),Ce=u.getFragmentShaderStage(C);u.update(C,De,Ce),dt=De.id,wt=Ce.id}let Pt=n.getRenderTarget(),Vt=n.state.buffers.depth.getReversed(),re=nt.isInstancedMesh===!0,Ht=nt.isBatchedMesh===!0,fe=!!C.map,Ue=!!C.matcap,de=!!mt,ye=!!C.aoMap,be=!!C.lightMap,xe=!!C.bumpMap&&C.wireframe===!1,Le=!!C.normalMap,He=!!C.displacementMap,Qe=!!C.emissiveMap,Ie=!!C.metalnessMap,Re=!!C.roughnessMap,lt=C.anisotropy>0,Je=C.clearcoat>0,_e=C.dispersion>0,X=C.retroreflectivity>0,A=C.iridescence>0,rt=C.sheen>0,pt=C.transmission>0,Tt=lt&&!!C.anisotropyMap,z=Je&&!!C.clearcoatMap,J=Je&&!!C.clearcoatNormalMap,k=Je&&!!C.clearcoatRoughnessMap,q=A&&!!C.iridescenceMap,ft=A&&!!C.iridescenceThicknessMap,Dt=rt&&!!C.sheenColorMap,Mt=rt&&!!C.sheenRoughnessMap,It=!!C.specularMap,vt=!!C.specularColorMap,Bt=!!C.specularIntensityMap,Gt=pt&&!!C.transmissionMap,it=pt&&!!C.thicknessMap,kt=!!C.gradientMap,Et=!!C.alphaMap,Xt=C.alphaTest>0,$t=!!C.alphaHash,Rt=!!C.extensions,Ot=oi;C.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Ot=n.toneMapping);let te={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:le,fragmentShader:ae,defines:C.defines,customVertexShaderID:dt,customFragmentShaderID:wt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:_,batching:Ht,batchingColor:Ht&&nt._colorsTexture!==null,instancing:re,instancingColor:re&&nt.instanceColor!==null,instancingMorph:re&&nt.morphTexture!==null,outputColorSpace:Pt===null?n.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!C.alphaToCoverage,map:fe,matcap:Ue,envMap:de,envMapMode:de&&mt.mapping,envMapCubeUVHeight:ht,aoMap:ye,lightMap:be,bumpMap:xe,normalMap:Le,displacementMap:He,emissiveMap:Qe,normalMapObjectSpace:Le&&C.normalMapType===$f,normalMapTangentSpace:Le&&C.normalMapType===Yl,packedNormalMap:Le&&C.normalMapType===Yl&&yx(C.normalMap.format),metalnessMap:Ie,roughnessMap:Re,anisotropy:lt,anisotropyMap:Tt,clearcoat:Je,clearcoatMap:z,clearcoatNormalMap:J,clearcoatRoughnessMap:k,dispersion:_e,retroreflection:X,iridescence:A,iridescenceMap:q,iridescenceThicknessMap:ft,sheen:rt,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:It,specularColorMap:vt,specularIntensityMap:Bt,transmission:pt,transmissionMap:Gt,thicknessMap:it,gradientMap:kt,opaque:C.transparent===!1&&C.blending===Es&&C.alphaToCoverage===!1,alphaMap:Et,alphaTest:Xt,alphaHash:$t,combine:C.combine,mapUv:fe&&E(C.map.channel),aoMapUv:ye&&E(C.aoMap.channel),lightMapUv:be&&E(C.lightMap.channel),bumpMapUv:xe&&E(C.bumpMap.channel),normalMapUv:Le&&E(C.normalMap.channel),displacementMapUv:He&&E(C.displacementMap.channel),emissiveMapUv:Qe&&E(C.emissiveMap.channel),metalnessMapUv:Ie&&E(C.metalnessMap.channel),roughnessMapUv:Re&&E(C.roughnessMap.channel),anisotropyMapUv:Tt&&E(C.anisotropyMap.channel),clearcoatMapUv:z&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:J&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&E(C.sheenRoughnessMap.channel),specularMapUv:It&&E(C.specularMap.channel),specularColorMapUv:vt&&E(C.specularColorMap.channel),specularIntensityMapUv:Bt&&E(C.specularIntensityMap.channel),transmissionMapUv:Gt&&E(C.transmissionMap.channel),thicknessMapUv:it&&E(C.thicknessMap.channel),alphaMapUv:Et&&E(C.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Le||lt),vertexNormals:!!U.attributes.normal,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!U.attributes.uv&&(fe||Et),fog:!!K,useFog:C.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:C.wireframe===!1&&(C.flatShading===!0||U.attributes.normal===void 0&&Le===!1&&(C.isMeshLambertMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isMeshPhysicalMaterial)),sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Vt,skinning:nt.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:zt,numSunLights:V.sun.length,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numSunLightShadows:V.sunShadowMap.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:fe&&C.map.isVideoTexture===!0&&Te.getTransfer(C.map.colorSpace)===Oe,decodeVideoTextureEmissive:Qe&&C.emissiveMap.isVideoTexture===!0&&Te.getTransfer(C.emissiveMap.colorSpace)===Oe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===yn,flipSided:C.side===Tn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Rt&&C.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&C.extensions.multiDraw===!0||Ht)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return te.vertexUv1s=f.has(1),te.vertexUv2s=f.has(2),te.vertexUv3s=f.has(3),f.clear(),te}function S(C){let V=[];if(C.shaderID?V.push(C.shaderID):(V.push(C.customVertexShaderID),V.push(C.customFragmentShaderID)),C.defines!==void 0)for(let W in C.defines)V.push(W),V.push(C.defines[W]);return C.isRawShaderMaterial===!1&&(M(V,C),O(V,C),V.push(n.outputColorSpace)),V.push(C.customProgramCacheKey),V.join()}function M(C,V){C.push(V.precision),C.push(V.outputColorSpace),C.push(V.envMapMode),C.push(V.envMapCubeUVHeight),C.push(V.mapUv),C.push(V.alphaMapUv),C.push(V.lightMapUv),C.push(V.aoMapUv),C.push(V.bumpMapUv),C.push(V.normalMapUv),C.push(V.displacementMapUv),C.push(V.emissiveMapUv),C.push(V.metalnessMapUv),C.push(V.roughnessMapUv),C.push(V.anisotropyMapUv),C.push(V.clearcoatMapUv),C.push(V.clearcoatNormalMapUv),C.push(V.clearcoatRoughnessMapUv),C.push(V.iridescenceMapUv),C.push(V.iridescenceThicknessMapUv),C.push(V.sheenColorMapUv),C.push(V.sheenRoughnessMapUv),C.push(V.specularMapUv),C.push(V.specularColorMapUv),C.push(V.specularIntensityMapUv),C.push(V.transmissionMapUv),C.push(V.thicknessMapUv),C.push(V.combine),C.push(V.fogExp2),C.push(V.sizeAttenuation),C.push(V.morphTargetsCount),C.push(V.morphAttributeCount),C.push(V.numSunLights),C.push(V.numDirLights),C.push(V.numPointLights),C.push(V.numSpotLights),C.push(V.numSpotLightMaps),C.push(V.numHemiLights),C.push(V.numRectAreaLights),C.push(V.numSunLightShadows),C.push(V.numDirLightShadows),C.push(V.numPointLightShadows),C.push(V.numSpotLightShadows),C.push(V.numSpotLightShadowsWithMaps),C.push(V.numLightProbes),C.push(V.shadowMapType),C.push(V.toneMapping),C.push(V.numClippingPlanes),C.push(V.numClipIntersection),C.push(V.depthPacking)}function O(C,V){c.disableAll(),V.instancing&&c.enable(0),V.instancingColor&&c.enable(1),V.instancingMorph&&c.enable(2),V.matcap&&c.enable(3),V.envMap&&c.enable(4),V.normalMapObjectSpace&&c.enable(5),V.normalMapTangentSpace&&c.enable(6),V.clearcoat&&c.enable(7),V.iridescence&&c.enable(8),V.alphaTest&&c.enable(9),V.vertexColors&&c.enable(10),V.vertexAlphas&&c.enable(11),V.vertexUv1s&&c.enable(12),V.vertexUv2s&&c.enable(13),V.vertexUv3s&&c.enable(14),V.vertexTangents&&c.enable(15),V.anisotropy&&c.enable(16),V.alphaHash&&c.enable(17),V.batching&&c.enable(18),V.dispersion&&c.enable(19),V.retroreflection&&c.enable(24),V.batchingColor&&c.enable(20),V.gradientMap&&c.enable(21),V.packedNormalMap&&c.enable(22),V.vertexNormals&&c.enable(23),C.push(c.mask),c.disableAll(),V.fog&&c.enable(0),V.useFog&&c.enable(1),V.flatShading&&c.enable(2),V.logarithmicDepthBuffer&&c.enable(3),V.reversedDepthBuffer&&c.enable(4),V.skinning&&c.enable(5),V.morphTargets&&c.enable(6),V.morphNormals&&c.enable(7),V.morphColors&&c.enable(8),V.premultipliedAlpha&&c.enable(9),V.shadowMapEnabled&&c.enable(10),V.doubleSided&&c.enable(11),V.flipSided&&c.enable(12),V.useDepthPacking&&c.enable(13),V.dithering&&c.enable(14),V.transmission&&c.enable(15),V.sheen&&c.enable(16),V.opaque&&c.enable(17),V.pointsUvs&&c.enable(18),V.decodeVideoTexture&&c.enable(19),V.decodeVideoTextureEmissive&&c.enable(20),V.alphaToCoverage&&c.enable(21),V.numLightProbeGrids>0&&c.enable(22),V.hasPositionAttribute&&c.enable(23),C.push(c.mask)}function G(C){let V=b[C.type],W;if(V){let et=Mi[V];W=ld.clone(et.uniforms)}else W=C.uniforms;return W}function R(C,V){let W=g.get(V);return W!==void 0?++W.usedTimes:(W=new _x(n,V,C,r),d.push(W),g.set(V,W)),W}function F(C){if(--C.usedTimes===0){let V=d.indexOf(C);d[V]=d[d.length-1],d.pop(),g.delete(C.cacheKey),C.destroy()}}function B(C){u.remove(C)}function Y(){u.dispose()}return{getParameters:P,getProgramCacheKey:S,getUniforms:G,acquireProgram:R,releaseProgram:F,releaseShaderCache:B,programs:d,dispose:Y}}function Mx(){let n=new WeakMap;function t(c){return n.has(c)}function e(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function r(c,u,f){n.get(c)[u]=f}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:o}}function Sx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Cd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pd(){let n=[],t=0,e=[],i=[],r=[];function o(){t=0,e.length=0,i.length=0,r.length=0}function c(_){let b=0;return _.isInstancedMesh&&(b+=2),_.isSkinnedMesh&&(b+=1),b}function u(_,b,E,P,S,M){let O=n[t];return O===void 0?(O={id:_.id,object:_,geometry:b,material:E,materialVariant:c(_),groupOrder:P,renderOrder:_.renderOrder,z:S,group:M},n[t]=O):(O.id=_.id,O.object=_,O.geometry=b,O.material=E,O.materialVariant=c(_),O.groupOrder=P,O.renderOrder=_.renderOrder,O.z=S,O.group=M),t++,O}function f(_,b,E,P,S,M,O){O.reversedDepth===!0&&(S=-S);let G=u(_,b,E,P,S,M);E.transmission>0?i.push(G):E.transparent===!0?r.push(G):e.push(G)}function d(_,b,E,P,S,M){let O=u(_,b,E,P,S,M);E.transmission>0?i.unshift(O):E.transparent===!0?r.unshift(O):e.unshift(O)}function g(_,b){e.length>1&&e.sort(_||Sx),i.length>1&&i.sort(b||Cd),r.length>1&&r.sort(b||Cd)}function y(){for(let _=t,b=n.length;_<b;_++){let E=n[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:e,transmissive:i,transparent:r,init:o,push:f,unshift:d,finish:y,sort:g}}function bx(){let n=new WeakMap;function t(i,r){let o=n.get(i),c;return o===void 0?(c=new Pd,n.set(i,[c])):r>=o.length?(c=new Pd,o.push(c)):c=o[r],c}function e(){n=new WeakMap}return{get:t,dispose:e}}function wx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new at,color:new ge};break;case"SpotLight":e={position:new at,direction:new at,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new at,color:new ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new at,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":e={color:new ge,position:new at,halfWidth:new at,halfHeight:new at};break}return n[t.id]=e,e}}}function Ex(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function Ax(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Cx(n){let t=new wx,e=Ex(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new at);let r=new at,o=new ze,c=new ze;function u(d){let g=0,y=0,_=0;for(let nt=0;nt<9;nt++)i.probe[nt].set(0,0,0);let b=0,E=0,P=0,S=0,M=0,O=0,G=0,R=0,F=0,B=0,Y=0,C=0,V=0,W=0;d.sort(Ax);for(let nt=0,Q=d.length;nt<Q;nt++){let K=d[nt],U=K.color,tt=K.intensity,ct=K.distance,mt=null;if(K.shadow&&K.shadow.map&&(K.shadow.map.texture.format===cr?mt=K.shadow.map.texture:mt=K.shadow.map.depthTexture||K.shadow.map.texture),K.isAmbientLight)g+=U.r*tt,y+=U.g*tt,_+=U.b*tt;else if(K.isLightProbe){for(let ht=0;ht<9;ht++)i.probe[ht].addScaledVector(K.sh.coefficients[ht],tt);W++}else if(K.isSunLight){let ht=t.get(K);if(ht.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){let yt=K.shadow,bt=e.get(K);bt.shadowIntensity=yt.intensity,bt.shadowBias=yt.bias,bt.shadowNormalBias=yt.normalBias,bt.shadowRadius=yt.radius,bt.shadowMapSize.copy(yt.mapSize).multiply(yt.getFrameExtents()),i.sunShadow[E]=bt,i.sunShadowMap[E]=mt;let Lt=yt.getViewportCount();for(let zt=0;zt<Lt;zt++)i.sunShadowMatrix[P+zt]=yt.getMatrix(zt),i.sunShadowCascade[P+zt]=yt._cascadeData[zt];P+=Lt,E++}i.sun[b]=ht,b++}else if(K.isDirectionalLight){let ht=t.get(K);if(ht.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){let yt=K.shadow,bt=e.get(K);bt.shadowIntensity=yt.intensity,bt.shadowBias=yt.bias,bt.shadowNormalBias=yt.normalBias,bt.shadowRadius=yt.radius,bt.shadowMapSize=yt.mapSize,i.directionalShadow[S]=bt,i.directionalShadowMap[S]=mt,i.directionalShadowMatrix[S]=K.shadow.matrix,F++}i.directional[S]=ht,S++}else if(K.isSpotLight){let ht=t.get(K);ht.position.setFromMatrixPosition(K.matrixWorld),ht.color.copy(U).multiplyScalar(tt),ht.distance=ct,ht.coneCos=Math.cos(K.angle),ht.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),ht.decay=K.decay,i.spot[O]=ht;let yt=K.shadow;if(K.map&&(i.spotLightMap[C]=K.map,C++,yt.updateMatrices(K),K.castShadow&&V++),i.spotLightMatrix[O]=yt.matrix,K.castShadow){let bt=e.get(K);bt.shadowIntensity=yt.intensity,bt.shadowBias=yt.bias,bt.shadowNormalBias=yt.normalBias,bt.shadowRadius=yt.radius,bt.shadowMapSize=yt.mapSize,i.spotShadow[O]=bt,i.spotShadowMap[O]=mt,Y++}O++}else if(K.isRectAreaLight){let ht=t.get(K);ht.color.copy(U).multiplyScalar(tt),ht.halfWidth.set(K.width*.5,0,0),ht.halfHeight.set(0,K.height*.5,0),i.rectArea[G]=ht,G++}else if(K.isPointLight){let ht=t.get(K);if(ht.color.copy(K.color).multiplyScalar(K.intensity),ht.distance=K.distance,ht.decay=K.decay,K.castShadow){let yt=K.shadow,bt=e.get(K);bt.shadowIntensity=yt.intensity,bt.shadowBias=yt.bias,bt.shadowNormalBias=yt.normalBias,bt.shadowRadius=yt.radius,bt.shadowMapSize=yt.mapSize,bt.shadowCameraNear=yt.camera.near,bt.shadowCameraFar=yt.camera.far,i.pointShadow[M]=bt,i.pointShadowMap[M]=mt,i.pointShadowMatrix[M]=K.shadow.matrix,B++}i.point[M]=ht,M++}else if(K.isHemisphereLight){let ht=t.get(K);ht.skyColor.copy(K.color).multiplyScalar(tt),ht.groundColor.copy(K.groundColor).multiplyScalar(tt),i.hemi[R]=ht,R++}}G>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Jt.LTC_FLOAT_1,i.rectAreaLTC2=Jt.LTC_FLOAT_2):(i.rectAreaLTC1=Jt.LTC_HALF_1,i.rectAreaLTC2=Jt.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=y,i.ambient[2]=_;let et=i.hash;(et.sunLength!==b||et.directionalLength!==S||et.pointLength!==M||et.spotLength!==O||et.rectAreaLength!==G||et.hemiLength!==R||et.numSunShadows!==E||et.numDirectionalShadows!==F||et.numPointShadows!==B||et.numSpotShadows!==Y||et.numSpotMaps!==C||et.numLightProbes!==W)&&(i.sun.length=b,i.directional.length=S,i.spot.length=O,i.rectArea.length=G,i.point.length=M,i.hemi.length=R,i.sunShadow.length=E,i.sunShadowMap.length=E,i.sunShadowMatrix.length=P,i.sunShadowCascade.length=P,i.directionalShadow.length=F,i.directionalShadowMap.length=F,i.directionalShadowMatrix.length=F,i.pointShadow.length=B,i.pointShadowMap.length=B,i.pointShadowMatrix.length=B,i.spotShadow.length=Y,i.spotShadowMap.length=Y,i.spotLightMatrix.length=Y+C-V,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=W,et.sunLength=b,et.directionalLength=S,et.pointLength=M,et.spotLength=O,et.rectAreaLength=G,et.hemiLength=R,et.numSunShadows=E,et.numDirectionalShadows=F,et.numPointShadows=B,et.numSpotShadows=Y,et.numSpotMaps=C,et.numLightProbes=W,i.version=Tx++)}function f(d,g){let y=0,_=0,b=0,E=0,P=0,S=0,M=g.matrixWorldInverse;for(let O=0,G=d.length;O<G;O++){let R=d[O];if(R.isSunLight){let F=i.sun[y];F.direction.setFromMatrixPosition(R.matrixWorld),F.direction.transformDirection(M),y++}else if(R.isDirectionalLight){let F=i.directional[_];F.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(M),_++}else if(R.isSpotLight){let F=i.spot[E];F.position.setFromMatrixPosition(R.matrixWorld),F.position.applyMatrix4(M),F.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(M),E++}else if(R.isRectAreaLight){let F=i.rectArea[P];F.position.setFromMatrixPosition(R.matrixWorld),F.position.applyMatrix4(M),c.identity(),o.copy(R.matrixWorld),o.premultiply(M),c.extractRotation(o),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),F.halfWidth.applyMatrix4(c),F.halfHeight.applyMatrix4(c),P++}else if(R.isPointLight){let F=i.point[b];F.position.setFromMatrixPosition(R.matrixWorld),F.position.applyMatrix4(M),b++}else if(R.isHemisphereLight){let F=i.hemi[S];F.direction.setFromMatrixPosition(R.matrixWorld),F.direction.transformDirection(M),S++}}}return{setup:u,setupView:f,state:i}}function Id(n){let t=new Cx(n),e=[],i=[],r=[];function o(_){y.camera=_,e.length=0,i.length=0,r.length=0}function c(_){e.push(_)}function u(_){i.push(_)}function f(_){r.push(_)}function d(){t.setup(e)}function g(_){t.setupView(e,_)}let y={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:y,setupLights:d,setupLightsView:g,pushLight:c,pushShadow:u,pushLightProbeGrid:f}}function Px(n){let t=new WeakMap;function e(r,o=0){let c=t.get(r),u;return c===void 0?(u=new Id(n),t.set(r,[u])):o>=c.length?(u=new Id(n),c.push(u)):u=c[o],u}function i(){t=new WeakMap}return{get:e,dispose:i}}function Dx(n,t,e){let i=new vs,r=new se,o=new se,c=new Ze,u=new Ya,f=new qa,d={},g=e.maxTextureSize,y={[sr]:Tn,[Tn]:sr,[yn]:yn},_=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Ix,fragmentShader:Rx}),b=_.clone();b.defines.HORIZONTAL_PASS=1;let E=new $e;E.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new Fe(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let M=this.type;this.render=function(B,Y,C){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;this.type===Ef&&(ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ao);let V=n.getRenderTarget(),W=n.getActiveCubeFace(),et=n.getActiveMipmapLevel(),nt=n.state;nt.setBlending(yi),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);let Q=M!==this.type;Q&&Y.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(U=>U.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,U=B.length;K<U;K++){let tt=B[K],ct=tt.shadow;if(ct===void 0){ce("WebGLShadowMap:",tt,"has no shadow.");continue}if(ct.autoUpdate===!1&&ct.needsUpdate===!1)continue;r.copy(ct.mapSize);let mt=ct.getFrameExtents();r.multiply(mt),o.copy(ct.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(o.x=Math.floor(g/mt.x),r.x=o.x*mt.x,ct.mapSize.x=o.x),r.y>g&&(o.y=Math.floor(g/mt.y),r.y=o.y*mt.y,ct.mapSize.y=o.y));let ht=n.state.buffers.depth.getReversed();if(ct.camera._reversedDepth=ht,ct.map===null||Q===!0){if(ct.map!==null&&(ct.map.depthTexture!==null&&(ct.map.depthTexture.dispose(),ct.map.depthTexture=null),ct.map.dispose()),this.type===ws){if(tt.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ct.map=new Rn(r.x,r.y,{format:cr,type:ci,minFilter:fn,magFilter:fn,generateMipmaps:!1}),ct.map.texture.name=tt.name+".shadowMap",ct.map.depthTexture=new Ki(r.x,r.y,li),ct.map.depthTexture.name=tt.name+".shadowMapDepth",ct.map.depthTexture.format=_i,ct.map.depthTexture.compareFunction=null,ct.map.depthTexture.minFilter=cn,ct.map.depthTexture.magFilter=cn}else tt.isPointLight?(ct.map=new Kl(r.x),ct.map.depthTexture=new Xa(r.x,ai)):(ct.map=new Rn(r.x,r.y),ct.map.depthTexture=new Ki(r.x,r.y,ai)),ct.map.depthTexture.name=tt.name+".shadowMap",ct.map.depthTexture.format=_i,this.type===Ao?(ct.map.depthTexture.compareFunction=ht?$l:ql,ct.map.depthTexture.minFilter=fn,ct.map.depthTexture.magFilter=fn):(ct.map.depthTexture.compareFunction=null,ct.map.depthTexture.minFilter=cn,ct.map.depthTexture.magFilter=cn);ct.camera.updateProjectionMatrix()}ct.map.isWebGLCubeRenderTarget!==!0&&(ct.map.width!==r.x||ct.map.height!==r.y)&&ct.map.setSize(r.x,r.y);let yt=ct.map.isWebGLCubeRenderTarget?6:ct.getViewportCount();tt.isPointLight!==!0&&ct.updateMatrices(tt,C);for(let bt=0;bt<yt;bt++){let Lt=ct.getCamera(bt);if(tt.isPointLight){let zt=ct.camera,le=ct.matrix,ae=tt.distance||zt.far;ae!==zt.far&&(zt.far=ae,zt.updateProjectionMatrix()),Uo.setFromMatrixPosition(tt.matrixWorld),zt.position.copy(Uo),Xh.copy(zt.position),Xh.add(Lx[bt]),zt.up.copy(Nx[bt]),zt.lookAt(Xh),zt.updateMatrixWorld(),le.makeTranslation(-Uo.x,-Uo.y,-Uo.z),Rd.multiplyMatrices(zt.projectionMatrix,zt.matrixWorldInverse),ct._frustum.setFromProjectionMatrix(Rd,zt.coordinateSystem,zt.reversedDepth)}if(ct.map.isWebGLCubeRenderTarget)n.setRenderTarget(ct.map,bt),n.clear();else{bt===0&&(n.setRenderTarget(ct.map),n.clear());let zt=ct.getViewport(bt);c.set(o.x*zt.x,o.y*zt.y,o.x*zt.z,o.y*zt.w),nt.viewport(c)}i=ct.getFrustum(bt),R(Y,C,Lt,tt,this.type)}ct.isPointLightShadow!==!0&&this.type===ws&&O(ct,C),ct.needsUpdate=!1}M=this.type,S.needsUpdate=!1,n.setRenderTarget(V,W,et)};function O(B,Y){let C=t.update(P);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,b.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),B.mapPass===null?B.mapPass=new Rn(r.x,r.y,{format:cr,type:ci}):(B.mapPass.width!==B.map.width||B.mapPass.height!==B.map.height)&&B.mapPass.setSize(B.map.width,B.map.height),_.uniforms.shadow_pass.value=B.map.depthTexture,_.uniforms.resolution.value.set(B.map.width,B.map.height),_.uniforms.radius.value=B.radius,n.setRenderTarget(B.mapPass),n.clear(),n.renderBufferDirect(Y,null,C,_,P,null),b.uniforms.shadow_pass.value=B.mapPass.texture,b.uniforms.resolution.value.set(B.map.width,B.map.height),b.uniforms.radius.value=B.radius,n.setRenderTarget(B.map),n.clear(),n.renderBufferDirect(Y,null,C,b,P,null)}function G(B,Y,C,V){let W=null,et=C.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(et!==void 0)W=et;else if(W=C.isPointLight===!0?f:u,n.localClippingEnabled&&Y.clipShadows===!0&&Array.isArray(Y.clippingPlanes)&&Y.clippingPlanes.length!==0||Y.displacementMap&&Y.displacementScale!==0||Y.alphaMap&&Y.alphaTest>0||Y.map&&Y.alphaTest>0||Y.alphaToCoverage===!0){let nt=W.uuid,Q=Y.uuid,K=d[nt];K===void 0&&(K={},d[nt]=K);let U=K[Q];U===void 0&&(U=W.clone(),K[Q]=U,Y.addEventListener("dispose",F)),W=U}if(W.visible=Y.visible,W.wireframe=Y.wireframe,V===ws?W.side=Y.shadowSide!==null?Y.shadowSide:Y.side:W.side=Y.shadowSide!==null?Y.shadowSide:y[Y.side],W.alphaMap=Y.alphaMap,W.alphaTest=Y.alphaToCoverage===!0?.5:Y.alphaTest,W.map=Y.map,W.clipShadows=Y.clipShadows,W.clippingPlanes=Y.clippingPlanes,W.clipIntersection=Y.clipIntersection,W.displacementMap=Y.displacementMap,W.displacementScale=Y.displacementScale,W.displacementBias=Y.displacementBias,W.wireframeLinewidth=Y.wireframeLinewidth,W.linewidth=Y.linewidth,C.isPointLight===!0&&W.isMeshDistanceMaterial===!0){let nt=n.properties.get(W);nt.light=C}return W}function R(B,Y,C,V,W){if(B.visible===!1)return;if(B.layers.test(Y.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&W===ws)&&(!B.frustumCulled||B.intersectsFrustum(i))){B.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,B.matrixWorld);let Q=t.update(B),K=B.material;if(Array.isArray(K)){let U=Q.groups;for(let tt=0,ct=U.length;tt<ct;tt++){let mt=U[tt],ht=K[mt.materialIndex];if(ht&&ht.visible){let yt=G(B,ht,V,W);B.onBeforeShadow(n,B,Y,C,Q,yt,mt),n.renderBufferDirect(C,null,Q,yt,B,mt),B.onAfterShadow(n,B,Y,C,Q,yt,mt)}}}else if(K.visible){let U=G(B,K,V,W);B.onBeforeShadow(n,B,Y,C,Q,U,null),n.renderBufferDirect(C,null,Q,U,B,null),B.onAfterShadow(n,B,Y,C,Q,U,null)}}let nt=B.children;for(let Q=0,K=nt.length;Q<K;Q++)R(nt[Q],Y,C,V,W)}function F(B){B.target.removeEventListener("dispose",F);for(let C in d){let V=d[C],W=B.target.uuid;W in V&&(V[W].dispose(),delete V[W])}}}function Ox(n,t){function e(){let it=!1,kt=new Ze,Et=null,Xt=new Ze(0,0,0,0);return{setMask:function($t){Et!==$t&&!it&&(n.colorMask($t,$t,$t,$t),Et=$t)},setLocked:function($t){it=$t},setClear:function($t,Rt,Ot,te,De){De===!0&&($t*=te,Rt*=te,Ot*=te),kt.set($t,Rt,Ot,te),Xt.equals(kt)===!1&&(n.clearColor($t,Rt,Ot,te),Xt.copy(kt))},reset:function(){it=!1,Et=null,Xt.set(-1,0,0,0)}}}function i(){let it=!1,kt=!1,Et=null,Xt=null,$t=null;return{setReversed:function(Rt){if(kt!==Rt){let Ot=t.get("EXT_clip_control");Rt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),kt=Rt;let te=$t;$t=null,this.setClear(te)}},getReversed:function(){return kt},setTest:function(Rt){Rt?Pt(n.DEPTH_TEST):Vt(n.DEPTH_TEST)},setMask:function(Rt){Et!==Rt&&!it&&(n.depthMask(Rt),Et=Rt)},setFunc:function(Rt){if(kt&&(Rt=sd[Rt]),Xt!==Rt){switch(Rt){case Aa:n.depthFunc(n.NEVER);break;case Ca:n.depthFunc(n.ALWAYS);break;case Pa:n.depthFunc(n.LESS);break;case hs:n.depthFunc(n.LEQUAL);break;case Ia:n.depthFunc(n.EQUAL);break;case Ra:n.depthFunc(n.GEQUAL);break;case La:n.depthFunc(n.GREATER);break;case Na:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Xt=Rt}},setLocked:function(Rt){it=Rt},setClear:function(Rt){$t!==Rt&&($t=Rt,kt&&(Rt=1-Rt),n.clearDepth(Rt))},reset:function(){it=!1,Et=null,Xt=null,$t=null,kt=!1}}}function r(){let it=!1,kt=null,Et=null,Xt=null,$t=null,Rt=null,Ot=null,te=null,De=null;return{setTest:function(Ce){it||(Ce?Pt(n.STENCIL_TEST):Vt(n.STENCIL_TEST))},setMask:function(Ce){kt!==Ce&&!it&&(n.stencilMask(Ce),kt=Ce)},setFunc:function(Ce,Sn,An){(Et!==Ce||Xt!==Sn||$t!==An)&&(n.stencilFunc(Ce,Sn,An),Et=Ce,Xt=Sn,$t=An)},setOp:function(Ce,Sn,An){(Rt!==Ce||Ot!==Sn||te!==An)&&(n.stencilOp(Ce,Sn,An),Rt=Ce,Ot=Sn,te=An)},setLocked:function(Ce){it=Ce},setClear:function(Ce){De!==Ce&&(n.clearStencil(Ce),De=Ce)},reset:function(){it=!1,kt=null,Et=null,Xt=null,$t=null,Rt=null,Ot=null,te=null,De=null}}}let o=new e,c=new i,u=new r,f=new WeakMap,d=new WeakMap,g={},y={},_={},b=new WeakMap,E=[],P=null,S=!1,M=null,O=null,G=null,R=null,F=null,B=null,Y=null,C=new ge(0,0,0),V=0,W=!1,et=null,nt=null,Q=null,K=null,U=null,tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ct=!1,mt=0,ht=n.getParameter(n.VERSION);ht.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(ht)[1]),ct=mt>=1):ht.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),ct=mt>=2);let yt=null,bt={},Lt=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),le=new Ze().fromArray(Lt),ae=new Ze().fromArray(zt);function dt(it,kt,Et,Xt){let $t=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(it,Rt),n.texParameteri(it,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(it,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<Et;Ot++)it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?n.texImage3D(kt,0,n.RGBA,1,1,Xt,0,n.RGBA,n.UNSIGNED_BYTE,$t):n.texImage2D(kt+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,$t);return Rt}let wt={};wt[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Pt(n.DEPTH_TEST),c.setFunc(hs),xe(!1),Le(lh),Pt(n.CULL_FACE),ye(yi);function Pt(it){g[it]!==!0&&(n.enable(it),g[it]=!0)}function Vt(it){g[it]!==!1&&(n.disable(it),g[it]=!1)}function re(it,kt){return _[it]!==kt?(n.bindFramebuffer(it,kt),_[it]=kt,it===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=kt),it===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=kt),!0):!1}function Ht(it,kt){let Et=E,Xt=!1;if(it){Et=b.get(kt),Et===void 0&&(Et=[],b.set(kt,Et));let $t=it.textures;if(Et.length!==$t.length||Et[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,Ot=$t.length;Rt<Ot;Rt++)Et[Rt]=n.COLOR_ATTACHMENT0+Rt;Et.length=$t.length,Xt=!0}}else Et[0]!==n.BACK&&(Et[0]=n.BACK,Xt=!0);Xt&&n.drawBuffers(Et)}function fe(it){return P!==it?(n.useProgram(it),P=it,!0):!1}let Ue={[Er]:n.FUNC_ADD,[Af]:n.FUNC_SUBTRACT,[Cf]:n.FUNC_REVERSE_SUBTRACT};Ue[Pf]=n.MIN,Ue[If]=n.MAX;let de={[Rf]:n.ZERO,[Lf]:n.ONE,[Nf]:n.SRC_COLOR,[fh]:n.SRC_ALPHA,[kf]:n.SRC_ALPHA_SATURATE,[Uf]:n.DST_COLOR,[Of]:n.DST_ALPHA,[Df]:n.ONE_MINUS_SRC_COLOR,[dh]:n.ONE_MINUS_SRC_ALPHA,[Bf]:n.ONE_MINUS_DST_COLOR,[Ff]:n.ONE_MINUS_DST_ALPHA,[zf]:n.CONSTANT_COLOR,[Vf]:n.ONE_MINUS_CONSTANT_COLOR,[Hf]:n.CONSTANT_ALPHA,[Gf]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(it,kt,Et,Xt,$t,Rt,Ot,te,De,Ce){if(it===yi){S===!0&&(Vt(n.BLEND),S=!1);return}if(S===!1&&(Pt(n.BLEND),S=!0),it!==Tf){if(it!==M||Ce!==W){if((O!==Er||F!==Er)&&(n.blendEquation(n.FUNC_ADD),O=Er,F=Er),Ce)switch(it){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ch:n.blendFunc(n.ONE,n.ONE);break;case hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ue("WebGLState: Invalid blending: ",it);break}else switch(it){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ch:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hh:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",it);break}G=null,R=null,B=null,Y=null,C.set(0,0,0),V=0,M=it,W=Ce}return}$t=$t||kt,Rt=Rt||Et,Ot=Ot||Xt,(kt!==O||$t!==F)&&(n.blendEquationSeparate(Ue[kt],Ue[$t]),O=kt,F=$t),(Et!==G||Xt!==R||Rt!==B||Ot!==Y)&&(n.blendFuncSeparate(de[Et],de[Xt],de[Rt],de[Ot]),G=Et,R=Xt,B=Rt,Y=Ot),(te.equals(C)===!1||De!==V)&&(n.blendColor(te.r,te.g,te.b,De),C.copy(te),V=De),M=it,W=!1}function be(it,kt){it.side===yn?Vt(n.CULL_FACE):Pt(n.CULL_FACE);let Et=it.side===Tn;kt&&(Et=!Et),xe(Et),it.blending===Es&&it.transparent===!1?ye(yi):ye(it.blending,it.blendEquation,it.blendSrc,it.blendDst,it.blendEquationAlpha,it.blendSrcAlpha,it.blendDstAlpha,it.blendColor,it.blendAlpha,it.premultipliedAlpha),c.setFunc(it.depthFunc),c.setTest(it.depthTest),c.setMask(it.depthWrite),o.setMask(it.colorWrite);let Xt=it.stencilWrite;u.setTest(Xt),Xt&&(u.setMask(it.stencilWriteMask),u.setFunc(it.stencilFunc,it.stencilRef,it.stencilFuncMask),u.setOp(it.stencilFail,it.stencilZFail,it.stencilZPass)),Qe(it.polygonOffset,it.polygonOffsetFactor,it.polygonOffsetUnits),it.alphaToCoverage===!0?Pt(n.SAMPLE_ALPHA_TO_COVERAGE):Vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function xe(it){et!==it&&(it?n.frontFace(n.CW):n.frontFace(n.CCW),et=it)}function Le(it){it!==bf?(Pt(n.CULL_FACE),it!==nt&&(it===lh?n.cullFace(n.BACK):it===wf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Vt(n.CULL_FACE),nt=it}function He(it){it!==Q&&(ct&&n.lineWidth(it),Q=it)}function Qe(it,kt,Et){it?(Pt(n.POLYGON_OFFSET_FILL),(K!==kt||U!==Et)&&(K=kt,U=Et,c.getReversed()&&(kt=-kt),n.polygonOffset(kt,Et))):Vt(n.POLYGON_OFFSET_FILL)}function Ie(it){it?Pt(n.SCISSOR_TEST):Vt(n.SCISSOR_TEST)}function Re(it){it===void 0&&(it=n.TEXTURE0+tt-1),yt!==it&&(n.activeTexture(it),yt=it)}function lt(it,kt,Et){Et===void 0&&(yt===null?Et=n.TEXTURE0+tt-1:Et=yt);let Xt=bt[Et];Xt===void 0&&(Xt={type:void 0,texture:void 0},bt[Et]=Xt),(Xt.type!==it||Xt.texture!==kt)&&(yt!==Et&&(n.activeTexture(Et),yt=Et),n.bindTexture(it,kt||wt[it]),Xt.type=it,Xt.texture=kt)}function Je(){let it=bt[yt];it!==void 0&&it.type!==void 0&&(n.bindTexture(it.type,null),it.type=void 0,it.texture=void 0)}function _e(){try{n.compressedTexImage2D(...arguments)}catch(it){ue("WebGLState:",it)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(it){ue("WebGLState:",it)}}function A(){try{n.texSubImage2D(...arguments)}catch(it){ue("WebGLState:",it)}}function rt(){try{n.texSubImage3D(...arguments)}catch(it){ue("WebGLState:",it)}}function pt(){try{n.compressedTexSubImage2D(...arguments)}catch(it){ue("WebGLState:",it)}}function Tt(){try{n.compressedTexSubImage3D(...arguments)}catch(it){ue("WebGLState:",it)}}function z(){try{n.texStorage2D(...arguments)}catch(it){ue("WebGLState:",it)}}function J(){try{n.texStorage3D(...arguments)}catch(it){ue("WebGLState:",it)}}function k(){try{n.texImage2D(...arguments)}catch(it){ue("WebGLState:",it)}}function q(){try{n.texImage3D(...arguments)}catch(it){ue("WebGLState:",it)}}function ft(it){return y[it]!==void 0?y[it]:n.getParameter(it)}function Dt(it,kt){y[it]!==kt&&(n.pixelStorei(it,kt),y[it]=kt)}function Mt(it){le.equals(it)===!1&&(n.scissor(it.x,it.y,it.z,it.w),le.copy(it))}function It(it){ae.equals(it)===!1&&(n.viewport(it.x,it.y,it.z,it.w),ae.copy(it))}function vt(it,kt){let Et=d.get(kt);Et===void 0&&(Et=new WeakMap,d.set(kt,Et));let Xt=Et.get(it);Xt===void 0&&(Xt=n.getUniformBlockIndex(kt,it.name),Et.set(it,Xt))}function Bt(it,kt){let Xt=d.get(kt).get(it);f.get(kt)!==Xt&&(n.uniformBlockBinding(kt,Xt,it.__bindingPointIndex),f.set(kt,Xt))}function Gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},y={},yt=null,bt={},_={},b=new WeakMap,E=[],P=null,S=!1,M=null,O=null,G=null,R=null,F=null,B=null,Y=null,C=new ge(0,0,0),V=0,W=!1,et=null,nt=null,Q=null,K=null,U=null,le.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Pt,disable:Vt,bindFramebuffer:re,drawBuffers:Ht,useProgram:fe,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Le,setLineWidth:He,setPolygonOffset:Qe,setScissorTest:Ie,activeTexture:Re,bindTexture:lt,unbindTexture:Je,compressedTexImage2D:_e,compressedTexImage3D:X,texImage2D:k,texImage3D:q,pixelStorei:Dt,getParameter:ft,updateUBOMapping:vt,uniformBlockBinding:Bt,texStorage2D:z,texStorage3D:J,texSubImage2D:A,texSubImage3D:rt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Tt,scissor:Mt,viewport:It,reset:Gt}}function Fx(n,t,e,i,r,o,c){let u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new se,g=new WeakMap,y=new Set,_,b=new WeakMap,E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(X,A){return E?new OffscreenCanvas(X,A):so("canvas")}function S(X,A,rt){let pt=1,Tt=_e(X);if((Tt.width>rt||Tt.height>rt)&&(pt=rt/Math.max(Tt.width,Tt.height)),pt<1)if(typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap||typeof VideoFrame<"u"&&X instanceof VideoFrame){let z=Math.floor(pt*Tt.width),J=Math.floor(pt*Tt.height);_===void 0&&(_=P(z,J));let k=A?P(z,J):_;return k.width=z,k.height=J,k.getContext("2d").drawImage(X,0,0,z,J),ce("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+z+"x"+J+")."),k}else return"data"in X&&ce("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),X;return X}function M(X){return X.generateMipmaps}function O(X){n.generateMipmap(X)}function G(X){return X.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:X.isWebGL3DRenderTarget?n.TEXTURE_3D:X.isWebGLArrayRenderTarget||X.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(X,A,rt,pt,Tt,z=!1){if(X!==null){if(n[X]!==void 0)return n[X];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+X+"'")}let J;pt&&(J=t.get("EXT_texture_norm16"),J||ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=A;if(A===n.RED&&(rt===n.FLOAT&&(k=n.R32F),rt===n.HALF_FLOAT&&(k=n.R16F),rt===n.UNSIGNED_BYTE&&(k=n.R8),rt===n.UNSIGNED_SHORT&&J&&(k=J.R16_EXT),rt===n.SHORT&&J&&(k=J.R16_SNORM_EXT)),A===n.RED_INTEGER&&(rt===n.UNSIGNED_BYTE&&(k=n.R8UI),rt===n.UNSIGNED_SHORT&&(k=n.R16UI),rt===n.UNSIGNED_INT&&(k=n.R32UI),rt===n.BYTE&&(k=n.R8I),rt===n.SHORT&&(k=n.R16I),rt===n.INT&&(k=n.R32I)),A===n.RG&&(rt===n.FLOAT&&(k=n.RG32F),rt===n.HALF_FLOAT&&(k=n.RG16F),rt===n.UNSIGNED_BYTE&&(k=n.RG8),rt===n.UNSIGNED_SHORT&&J&&(k=J.RG16_EXT),rt===n.SHORT&&J&&(k=J.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(rt===n.UNSIGNED_BYTE&&(k=n.RG8UI),rt===n.UNSIGNED_SHORT&&(k=n.RG16UI),rt===n.UNSIGNED_INT&&(k=n.RG32UI),rt===n.BYTE&&(k=n.RG8I),rt===n.SHORT&&(k=n.RG16I),rt===n.INT&&(k=n.RG32I)),A===n.RGB_INTEGER&&(rt===n.UNSIGNED_BYTE&&(k=n.RGB8UI),rt===n.UNSIGNED_SHORT&&(k=n.RGB16UI),rt===n.UNSIGNED_INT&&(k=n.RGB32UI),rt===n.BYTE&&(k=n.RGB8I),rt===n.SHORT&&(k=n.RGB16I),rt===n.INT&&(k=n.RGB32I)),A===n.RGBA_INTEGER&&(rt===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),rt===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),rt===n.UNSIGNED_INT&&(k=n.RGBA32UI),rt===n.BYTE&&(k=n.RGBA8I),rt===n.SHORT&&(k=n.RGBA16I),rt===n.INT&&(k=n.RGBA32I)),A===n.RGB&&(rt===n.UNSIGNED_SHORT&&J&&(k=J.RGB16_EXT),rt===n.SHORT&&J&&(k=J.RGB16_SNORM_EXT),rt===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),rt===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),A===n.RGBA){let q=z?ro:Te.getTransfer(Tt);rt===n.FLOAT&&(k=n.RGBA32F),rt===n.HALF_FLOAT&&(k=n.RGBA16F),rt===n.UNSIGNED_BYTE&&(k=q===Oe?n.SRGB8_ALPHA8:n.RGBA8),rt===n.UNSIGNED_SHORT&&J&&(k=J.RGBA16_EXT),rt===n.SHORT&&J&&(k=J.RGBA16_SNORM_EXT),rt===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),rt===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function F(X,A){let rt;return X?A===null||A===ai||A===As?rt=n.DEPTH24_STENCIL8:A===li?rt=n.DEPTH32F_STENCIL8:A===Ts&&(rt=n.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ai||A===As?rt=n.DEPTH_COMPONENT24:A===li?rt=n.DEPTH_COMPONENT32F:A===Ts&&(rt=n.DEPTH_COMPONENT16),rt}function B(X,A){return M(X)===!0||X.isFramebufferTexture&&X.minFilter!==cn&&X.minFilter!==fn?Math.log2(Math.max(A.width,A.height))+1:X.mipmaps!==void 0&&X.mipmaps.length>0?X.mipmaps.length:X.isCompressedTexture&&Array.isArray(X.image)?A.mipmaps.length:1}function Y(X){let A=X.target;A.removeEventListener("dispose",Y),V(A),A.isVideoTexture&&g.delete(A),A.isHTMLTexture&&y.delete(A)}function C(X){let A=X.target;A.removeEventListener("dispose",C),et(A)}function V(X){let A=i.get(X);if(A.__webglInit===void 0)return;let rt=X.source,pt=b.get(rt);if(pt){let Tt=pt[A.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&W(X),Object.keys(pt).length===0&&b.delete(rt)}i.remove(X)}function W(X){let A=i.get(X);n.deleteTexture(A.__webglTexture);let rt=X.source,pt=b.get(rt);delete pt[A.__cacheKey],c.memory.textures--}function et(X){let A=i.get(X);if(X.depthTexture&&(X.depthTexture.dispose(),i.remove(X.depthTexture)),X.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let Tt=0;Tt<A.__webglFramebuffer[pt].length;Tt++)n.deleteFramebuffer(A.__webglFramebuffer[pt][Tt]);else n.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)n.deleteFramebuffer(A.__webglFramebuffer[pt]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let rt=X.textures;for(let pt=0,Tt=rt.length;pt<Tt;pt++){let z=i.get(rt[pt]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),c.memory.textures--),i.remove(rt[pt])}i.remove(X)}let nt=0;function Q(){nt=0}function K(){return nt}function U(X){nt=X}function tt(){let X=nt;return X>=r.maxTextures&&ce("WebGLTextures: Trying to use "+(X+1)+" texture units while this GPU supports only "+r.maxTextures),nt+=1,X}function ct(X){let A=[];return A.push(X.wrapS),A.push(X.wrapT),A.push(X.wrapR||0),A.push(X.magFilter),A.push(X.minFilter),A.push(X.anisotropy),A.push(X.internalFormat),A.push(X.format),A.push(X.type),A.push(X.generateMipmaps),A.push(X.premultiplyAlpha),A.push(X.flipY),A.push(X.unpackAlignment),A.push(X.colorSpace),A.join()}function mt(X,A){let rt=i.get(X);if(X.isVideoTexture&&lt(X),X.isRenderTargetTexture===!1&&X.isExternalTexture!==!0&&X.version>0&&rt.__version!==X.version){let pt=X.image;if(pt===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(rt,X,A);return}}else X.isExternalTexture&&(rt.__webglTexture=X.sourceTexture?X.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture,n.TEXTURE0+A)}function ht(X,A){let rt=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&rt.__version!==X.version){Vt(rt,X,A);return}else X.isExternalTexture&&(rt.__webglTexture=X.sourceTexture?X.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,rt.__webglTexture,n.TEXTURE0+A)}function yt(X,A){let rt=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&rt.__version!==X.version){Vt(rt,X,A);return}e.bindTexture(n.TEXTURE_3D,rt.__webglTexture,n.TEXTURE0+A)}function bt(X,A){let rt=i.get(X);if(X.isCubeDepthTexture!==!0&&X.version>0&&rt.__version!==X.version){re(rt,X,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture,n.TEXTURE0+A)}let Lt={[Da]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[Oa]:n.MIRRORED_REPEAT},zt={[cn]:n.NEAREST,[Yf]:n.NEAREST_MIPMAP_NEAREST,[Po]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[cl]:n.LINEAR_MIPMAP_NEAREST,[ar]:n.LINEAR_MIPMAP_LINEAR},le={[Jf]:n.NEVER,[ed]:n.ALWAYS,[jf]:n.LESS,[ql]:n.LEQUAL,[Kf]:n.EQUAL,[$l]:n.GEQUAL,[Qf]:n.GREATER,[td]:n.NOTEQUAL};function ae(X,A){if(A.type===li&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===fn||A.magFilter===cl||A.magFilter===Po||A.magFilter===ar||A.minFilter===fn||A.minFilter===cl||A.minFilter===Po||A.minFilter===ar)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(X,n.TEXTURE_WRAP_S,Lt[A.wrapS]),n.texParameteri(X,n.TEXTURE_WRAP_T,Lt[A.wrapT]),(X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY)&&n.texParameteri(X,n.TEXTURE_WRAP_R,Lt[A.wrapR]),n.texParameteri(X,n.TEXTURE_MAG_FILTER,zt[A.magFilter]),n.texParameteri(X,n.TEXTURE_MIN_FILTER,zt[A.minFilter]),A.compareFunction&&(n.texParameteri(X,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(X,n.TEXTURE_COMPARE_FUNC,le[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===cn||A.minFilter!==Po&&A.minFilter!==ar||A.type===li&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let rt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(X,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function dt(X,A){let rt=!1;X.__webglInit===void 0&&(X.__webglInit=!0,A.addEventListener("dispose",Y));let pt=A.source,Tt=b.get(pt);Tt===void 0&&(Tt={},b.set(pt,Tt));let z=ct(A);if(z!==X.__cacheKey){Tt[z]===void 0&&(Tt[z]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,rt=!0),Tt[z].usedTimes++;let J=Tt[X.__cacheKey];J!==void 0&&(Tt[X.__cacheKey].usedTimes--,J.usedTimes===0&&W(A)),X.__cacheKey=z,X.__webglTexture=Tt[z].texture}return rt}function wt(X,A,rt){return Math.floor(Math.floor(X/rt)/A)}function Pt(X,A,rt,pt){let z=X.updateRanges;if(z.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,rt,pt,A.data);else{z.sort((Dt,Mt)=>Dt.start-Mt.start);let J=0;for(let Dt=1;Dt<z.length;Dt++){let Mt=z[J],It=z[Dt],vt=Mt.start+Mt.count,Bt=wt(It.start,A.width,4),Gt=wt(Mt.start,A.width,4);It.start<=vt+1&&Bt===Gt&&wt(It.start+It.count-1,A.width,4)===Bt?Mt.count=Math.max(Mt.count,It.start+It.count-Mt.start):(++J,z[J]=It)}z.length=J+1;let k=e.getParameter(n.UNPACK_ROW_LENGTH),q=e.getParameter(n.UNPACK_SKIP_PIXELS),ft=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let Dt=0,Mt=z.length;Dt<Mt;Dt++){let It=z[Dt],vt=Math.floor(It.start/4),Bt=Math.ceil(It.count/4),Gt=vt%A.width,it=Math.floor(vt/A.width),kt=Bt,Et=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(n.UNPACK_SKIP_ROWS,it),e.texSubImage2D(n.TEXTURE_2D,0,Gt,it,kt,Et,rt,pt,A.data)}X.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,k),e.pixelStorei(n.UNPACK_SKIP_PIXELS,q),e.pixelStorei(n.UNPACK_SKIP_ROWS,ft)}}function Vt(X,A,rt){let pt=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=n.TEXTURE_3D);let Tt=dt(X,A),z=A.source;e.bindTexture(pt,X.__webglTexture,n.TEXTURE0+rt);let J=i.get(z);if(z.version!==J.__version||Tt===!0){if(e.activeTexture(n.TEXTURE0+rt),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let Et=Te.getPrimaries(Te.workingColorSpace),Xt=A.colorSpace===Oi?null:Te.getPrimaries(A.colorSpace),$t=A.colorSpace===Oi||Et===Xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t)}e.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let q=S(A.image,!1,r.maxTextureSize);q=Je(A,q);let ft=o.convert(A.format,A.colorSpace),Dt=o.convert(A.type),Mt=R(A.internalFormat,ft,Dt,A.normalized,A.colorSpace,A.isVideoTexture);ae(pt,A);let It,vt=A.mipmaps,Bt=A.isVideoTexture!==!0,Gt=J.__version===void 0||Tt===!0,it=z.dataReady,kt=B(A,q);if(A.isDepthTexture)Mt=F(A.format===lr,A.type),Gt&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,Mt,q.width,q.height):e.texImage2D(n.TEXTURE_2D,0,Mt,q.width,q.height,0,ft,Dt,null));else if(A.isDataTexture)if(vt.length>0){Bt&&Gt&&e.texStorage2D(n.TEXTURE_2D,kt,Mt,vt[0].width,vt[0].height);for(let Et=0,Xt=vt.length;Et<Xt;Et++)It=vt[Et],Bt?it&&e.texSubImage2D(n.TEXTURE_2D,Et,0,0,It.width,It.height,ft,Dt,It.data):e.texImage2D(n.TEXTURE_2D,Et,Mt,It.width,It.height,0,ft,Dt,It.data);A.generateMipmaps=!1}else Bt?(Gt&&e.texStorage2D(n.TEXTURE_2D,kt,Mt,q.width,q.height),it&&Pt(A,q,ft,Dt)):e.texImage2D(n.TEXTURE_2D,0,Mt,q.width,q.height,0,ft,Dt,q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Bt&&Gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,Mt,vt[0].width,vt[0].height,q.depth);for(let Et=0,Xt=vt.length;Et<Xt;Et++)if(It=vt[Et],A.format!==qn)if(ft!==null)if(Bt){if(it)if(A.layerUpdates.size>0){let $t=Uh(It.width,It.height,A.format,A.type);for(let Rt of A.layerUpdates){let Ot=It.data.subarray(Rt*$t/It.data.BYTES_PER_ELEMENT,(Rt+1)*$t/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Et,0,0,Rt,It.width,It.height,1,ft,Ot)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Et,0,0,0,It.width,It.height,q.depth,ft,It.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Et,Mt,It.width,It.height,q.depth,0,It.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?it&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Et,0,0,0,It.width,It.height,q.depth,ft,Dt,It.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Et,Mt,It.width,It.height,q.depth,0,ft,Dt,It.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Bt&&Gt&&e.texStorage2D(n.TEXTURE_2D,kt,Mt,vt[0].width,vt[0].height);for(let Et=0,Xt=vt.length;Et<Xt;Et++)It=vt[Et],A.format!==qn?ft!==null?Bt?it&&e.compressedTexSubImage2D(n.TEXTURE_2D,Et,0,0,It.width,It.height,ft,It.data):e.compressedTexImage2D(n.TEXTURE_2D,Et,Mt,It.width,It.height,0,It.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?it&&e.texSubImage2D(n.TEXTURE_2D,Et,0,0,It.width,It.height,ft,Dt,It.data):e.texImage2D(n.TEXTURE_2D,Et,Mt,It.width,It.height,0,ft,Dt,It.data)}else if(A.isDataArrayTexture)if(Bt){if(Gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,Mt,q.width,q.height,q.depth),it)if(A.layerUpdates.size>0){let Et=Uh(q.width,q.height,A.format,A.type);for(let Xt of A.layerUpdates){let $t=q.data.subarray(Xt*Et/q.data.BYTES_PER_ELEMENT,(Xt+1)*Et/q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Xt,q.width,q.height,1,ft,Dt,$t)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ft,Dt,q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Mt,q.width,q.height,q.depth,0,ft,Dt,q.data);else if(A.isData3DTexture)Bt?(Gt&&e.texStorage3D(n.TEXTURE_3D,kt,Mt,q.width,q.height,q.depth),it&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ft,Dt,q.data)):e.texImage3D(n.TEXTURE_3D,0,Mt,q.width,q.height,q.depth,0,ft,Dt,q.data);else if(A.isFramebufferTexture){if(Gt)if(Bt)e.texStorage2D(n.TEXTURE_2D,kt,Mt,q.width,q.height);else{let Et=q.width,Xt=q.height;for(let $t=0;$t<kt;$t++)e.texImage2D(n.TEXTURE_2D,$t,Mt,Et,Xt,0,ft,Dt,null),Et>>=1,Xt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){let Et=n.canvas;if(Et.hasAttribute("layoutsubtree")||Et.setAttribute("layoutsubtree","true"),q.parentNode!==Et){Et.appendChild(q),y.add(A),Et.onpaint=Xt=>{let $t=Xt.changedElements;for(let Rt of y)$t.includes(Rt.image)&&(Rt.needsUpdate=!0)},Et.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,q);else{let $t=n.RGBA,Rt=n.RGBA,Ot=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,$t,Rt,Ot,q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(vt.length>0){if(Bt&&Gt){let Et=_e(vt[0]);e.texStorage2D(n.TEXTURE_2D,kt,Mt,Et.width,Et.height)}for(let Et=0,Xt=vt.length;Et<Xt;Et++)It=vt[Et],Bt?it&&e.texSubImage2D(n.TEXTURE_2D,Et,0,0,ft,Dt,It):e.texImage2D(n.TEXTURE_2D,Et,Mt,ft,Dt,It);A.generateMipmaps=!1}else if(Bt){if(Gt){let Et=_e(q);e.texStorage2D(n.TEXTURE_2D,kt,Mt,Et.width,Et.height)}it&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,Dt,q)}else e.texImage2D(n.TEXTURE_2D,0,Mt,ft,Dt,q);M(A)&&O(pt),J.__version=z.version,A.onUpdate&&A.onUpdate(A)}X.__version=A.version}function re(X,A,rt){if(A.image.length!==6)return;let pt=dt(X,A),Tt=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+rt);let z=i.get(Tt);if(Tt.version!==z.__version||pt===!0){e.activeTexture(n.TEXTURE0+rt);let J=Te.getPrimaries(Te.workingColorSpace),k=A.colorSpace===Oi?null:Te.getPrimaries(A.colorSpace),q=A.colorSpace===Oi||J===k?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let ft=A.isCompressedTexture||A.image[0].isCompressedTexture,Dt=A.image[0]&&A.image[0].isDataTexture,Mt=[];for(let Rt=0;Rt<6;Rt++)!ft&&!Dt?Mt[Rt]=S(A.image[Rt],!0,r.maxCubemapSize):Mt[Rt]=Dt?A.image[Rt].image:A.image[Rt],Mt[Rt]=Je(A,Mt[Rt]);let It=Mt[0],vt=o.convert(A.format,A.colorSpace),Bt=o.convert(A.type),Gt=R(A.internalFormat,vt,Bt,A.normalized,A.colorSpace),it=A.isVideoTexture!==!0,kt=z.__version===void 0||pt===!0,Et=Tt.dataReady,Xt=B(A,It);ae(n.TEXTURE_CUBE_MAP,A);let $t;if(ft){it&&kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,Gt,It.width,It.height);for(let Rt=0;Rt<6;Rt++){$t=Mt[Rt].mipmaps;for(let Ot=0;Ot<$t.length;Ot++){let te=$t[Ot];A.format!==qn?vt!==null?it?Et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ot,0,0,te.width,te.height,vt,te.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ot,Gt,te.width,te.height,0,te.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ot,0,0,te.width,te.height,vt,Bt,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ot,Gt,te.width,te.height,0,vt,Bt,te.data)}}}else{if($t=A.mipmaps,it&&kt){$t.length>0&&Xt++;let Rt=_e(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,Gt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(Dt){it?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Mt[Rt].width,Mt[Rt].height,vt,Bt,Mt[Rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Gt,Mt[Rt].width,Mt[Rt].height,0,vt,Bt,Mt[Rt].data);for(let Ot=0;Ot<$t.length;Ot++){let De=$t[Ot].image[Rt].image;it?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ot+1,0,0,De.width,De.height,vt,Bt,De.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ot+1,Gt,De.width,De.height,0,vt,Bt,De.data)}}else{it?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,vt,Bt,Mt[Rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Gt,vt,Bt,Mt[Rt]);for(let Ot=0;Ot<$t.length;Ot++){let te=$t[Ot];it?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ot+1,0,0,vt,Bt,te.image[Rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ot+1,Gt,vt,Bt,te.image[Rt])}}}M(A)&&O(n.TEXTURE_CUBE_MAP),z.__version=Tt.version,A.onUpdate&&A.onUpdate(A)}X.__version=A.version}function Ht(X,A,rt,pt,Tt,z){let J=o.convert(rt.format,rt.colorSpace),k=o.convert(rt.type),q=R(rt.internalFormat,J,k,rt.normalized,rt.colorSpace),ft=i.get(A),Dt=i.get(rt);if(Dt.__renderTarget=A,!ft.__hasExternalTextures){let Mt=Math.max(1,A.width>>z),It=Math.max(1,A.height>>z);Tt===n.TEXTURE_3D||Tt===n.TEXTURE_2D_ARRAY?e.texImage3D(Tt,z,q,Mt,It,A.depth,0,J,k,null):e.texImage2D(Tt,z,q,Mt,It,0,J,k,null)}e.bindFramebuffer(n.FRAMEBUFFER,X),Re(A)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,Tt,Dt.__webglTexture,0,Ie(A)):(Tt===n.TEXTURE_2D||Tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pt,Tt,Dt.__webglTexture,z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(X,A,rt){if(n.bindRenderbuffer(n.RENDERBUFFER,X),A.depthBuffer){let pt=A.depthTexture,Tt=pt&&pt.isDepthTexture?pt.type:null,z=F(A.stencilBuffer,Tt),J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Re(A)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie(A),z,A.width,A.height):rt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie(A),z,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,z,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,X)}else{let pt=A.textures;for(let Tt=0;Tt<pt.length;Tt++){let z=pt[Tt],J=o.convert(z.format,z.colorSpace),k=o.convert(z.type),q=R(z.internalFormat,J,k,z.normalized,z.colorSpace);Re(A)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie(A),q,A.width,A.height):rt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie(A),q,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,q,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(X,A,rt){let pt=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,X),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Tt=i.get(A.depthTexture);if(Tt.__renderTarget=A,(!Tt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pt){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,A.depthTexture.addEventListener("dispose",Y)),Tt.__webglTexture===void 0){Tt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Tt.__webglTexture),ae(n.TEXTURE_CUBE_MAP,A.depthTexture);let ft=o.convert(A.depthTexture.format),Dt=o.convert(A.depthTexture.type),Mt;A.depthTexture.format===_i?Mt=n.DEPTH_COMPONENT24:A.depthTexture.format===lr&&(Mt=n.DEPTH24_STENCIL8);for(let It=0;It<6;It++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Mt,A.width,A.height,0,ft,Dt,null)}}else mt(A.depthTexture,0);let z=Tt.__webglTexture,J=Ie(A),k=pt?n.TEXTURE_CUBE_MAP_POSITIVE_X+rt:n.TEXTURE_2D,q=A.depthTexture.format===lr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===_i)Re(A)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,k,z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,q,k,z,0);else if(A.depthTexture.format===lr)Re(A)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,k,z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,q,k,z,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(X){let A=i.get(X),rt=X.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==X.depthTexture){let pt=X.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){let Tt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",Tt)};pt.addEventListener("dispose",Tt),A.__depthDisposeCallback=Tt}A.__boundDepthTexture=pt}if(X.depthTexture&&!A.__autoAllocateDepthBuffer)if(rt)for(let pt=0;pt<6;pt++)Ue(A.__webglFramebuffer[pt],X,pt);else{let pt=X.texture.mipmaps;pt&&pt.length>0?Ue(A.__webglFramebuffer[0],X,0):Ue(A.__webglFramebuffer,X,0)}else if(rt){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=n.createRenderbuffer(),fe(A.__webglDepthbuffer[pt],X,!1);else{let Tt=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=A.__webglDepthbuffer[pt];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,z)}}else{let pt=X.texture.mipmaps;if(pt&&pt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),fe(A.__webglDepthbuffer,X,!1);else{let Tt=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,z)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(X,A,rt){let pt=i.get(X);A!==void 0&&Ht(pt.__webglFramebuffer,X,X.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),rt!==void 0&&de(X)}function be(X){let A=X.texture,rt=i.get(X),pt=i.get(A);X.addEventListener("dispose",C);let Tt=X.textures,z=X.isWebGLCubeRenderTarget===!0,J=Tt.length>1;if(J||(pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture()),pt.__version=A.version,c.memory.textures++),z){rt.__webglFramebuffer=[];for(let k=0;k<6;k++)if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer[k]=[];for(let q=0;q<A.mipmaps.length;q++)rt.__webglFramebuffer[k][q]=n.createFramebuffer()}else rt.__webglFramebuffer[k]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer=[];for(let k=0;k<A.mipmaps.length;k++)rt.__webglFramebuffer[k]=n.createFramebuffer()}else rt.__webglFramebuffer=n.createFramebuffer();if(J)for(let k=0,q=Tt.length;k<q;k++){let ft=i.get(Tt[k]);ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture(),c.memory.textures++)}if(X.samples>0&&Re(X)===!1){rt.__webglMultisampledFramebuffer=n.createFramebuffer(),rt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let k=0;k<Tt.length;k++){let q=Tt[k];rt.__webglColorRenderbuffer[k]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,rt.__webglColorRenderbuffer[k]);let ft=o.convert(q.format,q.colorSpace),Dt=o.convert(q.type),Mt=R(q.internalFormat,ft,Dt,q.normalized,q.colorSpace,X.isXRRenderTarget===!0),It=Ie(X);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,Mt,X.width,X.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,rt.__webglColorRenderbuffer[k])}n.bindRenderbuffer(n.RENDERBUFFER,null),X.depthBuffer&&(rt.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(rt.__webglDepthRenderbuffer,X,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){e.bindTexture(n.TEXTURE_CUBE_MAP,pt.__webglTexture),ae(n.TEXTURE_CUBE_MAP,A);for(let k=0;k<6;k++)if(A.mipmaps&&A.mipmaps.length>0)for(let q=0;q<A.mipmaps.length;q++)Ht(rt.__webglFramebuffer[k][q],X,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,q);else Ht(rt.__webglFramebuffer[k],X,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);M(A)&&O(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){for(let k=0,q=Tt.length;k<q;k++){let ft=Tt[k],Dt=i.get(ft),Mt=n.TEXTURE_2D;(X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(Mt=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Dt.__webglTexture),ae(Mt,ft),Ht(rt.__webglFramebuffer,X,ft,n.COLOR_ATTACHMENT0+k,Mt,0),M(ft)&&O(Mt)}e.unbindTexture()}else{let k=n.TEXTURE_2D;if((X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(k=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(k,pt.__webglTexture),ae(k,A),A.mipmaps&&A.mipmaps.length>0)for(let q=0;q<A.mipmaps.length;q++)Ht(rt.__webglFramebuffer[q],X,A,n.COLOR_ATTACHMENT0,k,q);else Ht(rt.__webglFramebuffer,X,A,n.COLOR_ATTACHMENT0,k,0);M(A)&&O(k),e.unbindTexture()}X.depthBuffer&&de(X)}function xe(X){let A=X.textures;for(let rt=0,pt=A.length;rt<pt;rt++){let Tt=A[rt];if(M(Tt)){let z=G(X),J=i.get(Tt).__webglTexture;e.bindTexture(z,J),O(z),e.unbindTexture()}}}let Le=[],He=[];function Qe(X){if(X.samples>0){if(Re(X)===!1){let A=X.textures,rt=X.width,pt=X.height,Tt=n.COLOR_BUFFER_BIT,z=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=i.get(X),k=A.length>1;if(k)for(let ft=0;ft<A.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer);let q=X.texture.mipmaps;q&&q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let ft=0;ft<A.length;ft++){if(X.resolveDepthBuffer&&(X.depthBuffer&&(Tt|=n.DEPTH_BUFFER_BIT),X.stencilBuffer&&X.resolveStencilBuffer&&(Tt|=n.STENCIL_BUFFER_BIT)),k){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,J.__webglColorRenderbuffer[ft]);let Dt=i.get(A[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Dt,0)}n.blitFramebuffer(0,0,rt,pt,0,0,rt,pt,Tt,n.NEAREST),f===!0&&(Le.length=0,He.length=0,Le.push(n.COLOR_ATTACHMENT0+ft),X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&(Le.push(z),He.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Le))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),k)for(let ft=0;ft<A.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,J.__webglColorRenderbuffer[ft]);let Dt=i.get(A[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Dt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&f){let A=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Ie(X){return Math.min(r.maxSamples,X.samples)}function Re(X){let A=i.get(X);return X.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function lt(X){let A=c.render.frame;g.get(X)!==A&&(g.set(X,A),X.update())}function Je(X,A){let rt=X.colorSpace,pt=X.format,Tt=X.type;return X.isCompressedTexture===!0||X.isVideoTexture===!0||rt!==io&&rt!==Oi&&(Te.getTransfer(rt)===Oe?(pt!==qn||Tt!==Ln)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",rt)),A}function _e(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement?(d.width=X.naturalWidth||X.width,d.height=X.naturalHeight||X.height):typeof VideoFrame<"u"&&X instanceof VideoFrame?(d.width=X.displayWidth,d.height=X.displayHeight):(d.width=X.width,d.height=X.height),d}this.allocateTextureUnit=tt,this.resetTextureUnits=Q,this.getTextureUnits=K,this.setTextureUnits=U,this.setTexture2D=mt,this.setTexture2DArray=ht,this.setTexture3D=yt,this.setTextureCube=bt,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ux(n,t){function e(i,r=Oi){let o,c=Te.getTransfer(r);if(i===Ln)return n.UNSIGNED_BYTE;if(i===ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Th)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bh)return n.BYTE;if(i===wh)return n.SHORT;if(i===Ts)return n.UNSIGNED_SHORT;if(i===hl)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===Ah)return n.ALPHA;if(i===Ch)return n.RGB;if(i===qn)return n.RGBA;if(i===_i)return n.DEPTH_COMPONENT;if(i===lr)return n.DEPTH_STENCIL;if(i===Ph)return n.RED;if(i===dl)return n.RED_INTEGER;if(i===cr)return n.RG;if(i===pl)return n.RG_INTEGER;if(i===ml)return n.RGBA_INTEGER;if(i===Io||i===Ro||i===Lo||i===No)if(c===Oe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Io)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Io)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===No)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gl||i===_l||i===vl||i===yl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===gl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_l)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xl||i===Ml||i===Sl||i===bl||i===wl||i===Do||i===El)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===xl||i===Ml)return c===Oe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Sl)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===bl)return o.COMPRESSED_R11_EAC;if(i===wl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Do)return o.COMPRESSED_RG11_EAC;if(i===El)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tl||i===Al||i===Cl||i===Pl||i===Il||i===Rl||i===Ll||i===Nl||i===Dl||i===Ol||i===Fl||i===Ul||i===Bl||i===kl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Tl)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cl)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Il)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rl)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nl)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dl)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fl)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ul)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bl)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zl||i===Vl||i===Hl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===zl)return c===Oe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gl||i===Xl||i===Oo||i===Wl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Gl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Xl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function Vx(n,t){function e(S,M){S.matrixAutoUpdate===!0&&S.updateMatrix(),M.value.copy(S.matrix)}function i(S,M){M.color.getRGB(S.fogColor.value,Dh(n)),M.isFog?(S.fogNear.value=M.near,S.fogFar.value=M.far):M.isFogExp2&&(S.fogDensity.value=M.density)}function r(S,M,O,G,R){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?o(S,M):M.isMeshLambertMaterial?(o(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(o(S,M),y(S,M)):M.isMeshPhongMaterial?(o(S,M),g(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(o(S,M),_(S,M),M.isMeshPhysicalMaterial&&b(S,M,R)):M.isMeshMatcapMaterial?(o(S,M),E(S,M)):M.isMeshDepthMaterial?o(S,M):M.isMeshDistanceMaterial?(o(S,M),P(S,M)):M.isMeshNormalMaterial?o(S,M):M.isLineBasicMaterial?(c(S,M),M.isLineDashedMaterial&&u(S,M)):M.isPointsMaterial?f(S,M,O,G):M.isSpriteMaterial?d(S,M):M.isShadowMaterial?(S.color.value.copy(M.color),S.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function o(S,M){S.opacity.value=M.opacity,M.color&&S.diffuse.value.copy(M.color),M.emissive&&S.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(S.map.value=M.map,e(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.bumpMap&&(S.bumpMap.value=M.bumpMap,e(M.bumpMap,S.bumpMapTransform),S.bumpScale.value=M.bumpScale,M.side===Tn&&(S.bumpScale.value*=-1)),M.normalMap&&(S.normalMap.value=M.normalMap,e(M.normalMap,S.normalMapTransform),S.normalScale.value.copy(M.normalScale),M.side===Tn&&S.normalScale.value.negate()),M.displacementMap&&(S.displacementMap.value=M.displacementMap,e(M.displacementMap,S.displacementMapTransform),S.displacementScale.value=M.displacementScale,S.displacementBias.value=M.displacementBias),M.emissiveMap&&(S.emissiveMap.value=M.emissiveMap,e(M.emissiveMap,S.emissiveMapTransform)),M.specularMap&&(S.specularMap.value=M.specularMap,e(M.specularMap,S.specularMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest);let O=t.get(M),G=O.envMap,R=O.envMapRotation;G&&(S.envMap.value=G,S.envMapRotation.value.setFromMatrix4(zx.makeRotationFromEuler(R)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Bd),S.reflectivity.value=M.reflectivity,S.ior.value=M.ior,S.refractionRatio.value=M.refractionRatio),M.lightMap&&(S.lightMap.value=M.lightMap,S.lightMapIntensity.value=M.lightMapIntensity,e(M.lightMap,S.lightMapTransform)),M.aoMap&&(S.aoMap.value=M.aoMap,S.aoMapIntensity.value=M.aoMapIntensity,e(M.aoMap,S.aoMapTransform))}function c(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,M.map&&(S.map.value=M.map,e(M.map,S.mapTransform))}function u(S,M){S.dashSize.value=M.dashSize,S.totalSize.value=M.dashSize+M.gapSize,S.scale.value=M.scale}function f(S,M,O,G){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.size.value=M.size*O,S.scale.value=G*.5,M.map&&(S.map.value=M.map,e(M.map,S.uvTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function d(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.rotation.value=M.rotation,M.map&&(S.map.value=M.map,e(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function g(S,M){S.specular.value.copy(M.specular),S.shininess.value=Math.max(M.shininess,1e-4)}function y(S,M){M.gradientMap&&(S.gradientMap.value=M.gradientMap)}function _(S,M){S.metalness.value=M.metalness,M.metalnessMap&&(S.metalnessMap.value=M.metalnessMap,e(M.metalnessMap,S.metalnessMapTransform)),S.roughness.value=M.roughness,M.roughnessMap&&(S.roughnessMap.value=M.roughnessMap,e(M.roughnessMap,S.roughnessMapTransform)),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)}function b(S,M,O){S.ior.value=M.ior,M.sheen>0&&(S.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),S.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(S.sheenColorMap.value=M.sheenColorMap,e(M.sheenColorMap,S.sheenColorMapTransform)),M.sheenRoughnessMap&&(S.sheenRoughnessMap.value=M.sheenRoughnessMap,e(M.sheenRoughnessMap,S.sheenRoughnessMapTransform))),M.clearcoat>0&&(S.clearcoat.value=M.clearcoat,S.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(S.clearcoatMap.value=M.clearcoatMap,e(M.clearcoatMap,S.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,e(M.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(S.clearcoatNormalMap.value=M.clearcoatNormalMap,e(M.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Tn&&S.clearcoatNormalScale.value.negate())),M.dispersion>0&&(S.dispersion.value=M.dispersion),M.retroreflectivity>0&&(S.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(S.iridescence.value=M.iridescence,S.iridescenceIOR.value=M.iridescenceIOR,S.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(S.iridescenceMap.value=M.iridescenceMap,e(M.iridescenceMap,S.iridescenceMapTransform)),M.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=M.iridescenceThicknessMap,e(M.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),M.transmission>0&&(S.transmission.value=M.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),M.transmissionMap&&(S.transmissionMap.value=M.transmissionMap,e(M.transmissionMap,S.transmissionMapTransform)),S.thickness.value=M.thickness,M.thicknessMap&&(S.thicknessMap.value=M.thicknessMap,e(M.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=M.attenuationDistance,S.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(S.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(S.anisotropyMap.value=M.anisotropyMap,e(M.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=M.specularIntensity,S.specularColor.value.copy(M.specularColor),M.specularColorMap&&(S.specularColorMap.value=M.specularColorMap,e(M.specularColorMap,S.specularColorMapTransform)),M.specularIntensityMap&&(S.specularIntensityMap.value=M.specularIntensityMap,e(M.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,M){M.matcap&&(S.matcap.value=M.matcap)}function P(S,M){let O=t.get(M).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Hx(n,t,e,i){let r={},o={},c=[],u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,F){let B=F.program;i.uniformBlockBinding(R,B)}function d(R,F){let B=r[R.id];B===void 0&&(S(R),B=g(R),r[R.id]=B,R.addEventListener("dispose",O));let Y=F.program;i.updateUBOMapping(R,Y);let C=t.render.frame;o[R.id]!==C&&(_(R),o[R.id]=C)}function g(R){let F=y();R.__bindingPointIndex=F;let B=n.createBuffer(),Y=R.__size,C=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,B),n.bufferData(n.UNIFORM_BUFFER,Y,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,F,B),B}function y(){for(let R=0;R<u;R++)if(c.indexOf(R)===-1)return c.push(R),R;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){let F=r[R.id],B=R.uniforms,Y=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,F);for(let C=0,V=B.length;C<V;C++){let W=B[C];if(Array.isArray(W))for(let et=0,nt=W.length;et<nt;et++)b(W[et],C,et,Y);else b(W,C,0,Y)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function b(R,F,B,Y){if(P(R,F,B,Y)===!0){let C=R.__offset,V=R.value;if(Array.isArray(V)){let W=0;for(let et=0;et<V.length;et++){let nt=V[et],Q=M(nt);E(nt,R.__data,W),typeof nt!="number"&&typeof nt!="boolean"&&!nt.isMatrix3&&!ArrayBuffer.isView(nt)&&(W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(V,R.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,R.__data)}}function E(R,F,B){typeof R=="number"||typeof R=="boolean"?F[0]=R:R.isMatrix3?(F[0]=R.elements[0],F[1]=R.elements[1],F[2]=R.elements[2],F[3]=0,F[4]=R.elements[3],F[5]=R.elements[4],F[6]=R.elements[5],F[7]=0,F[8]=R.elements[6],F[9]=R.elements[7],F[10]=R.elements[8],F[11]=0):ArrayBuffer.isView(R)?F.set(new R.constructor(R.buffer,R.byteOffset,F.length)):R.toArray(F,B)}function P(R,F,B,Y){let C=R.value,V=F+"_"+B;if(Y[V]===void 0)return typeof C=="number"||typeof C=="boolean"?Y[V]=C:ArrayBuffer.isView(C)?Y[V]=C.slice():Y[V]=C.clone(),!0;{let W=Y[V];if(typeof C=="number"||typeof C=="boolean"){if(W!==C)return Y[V]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(W.equals(C)===!1)return W.copy(C),!0}}return!1}function S(R){let F=R.uniforms,B=0,Y=16;for(let V=0,W=F.length;V<W;V++){let et=Array.isArray(F[V])?F[V]:[F[V]];for(let nt=0,Q=et.length;nt<Q;nt++){let K=et[nt],U=Array.isArray(K.value)?K.value:[K.value];for(let tt=0,ct=U.length;tt<ct;tt++){let mt=U[tt],ht=M(mt),yt=B%Y,bt=yt%ht.boundary,Lt=yt+bt;B+=bt,Lt!==0&&Y-Lt<ht.storage&&(B+=Y-Lt),K.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=B,B+=ht.storage}}}let C=B%Y;return C>0&&(B+=Y-C),R.__size=B,R.__cache={},this}function M(R){let F={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(F.boundary=4,F.storage=4):R.isVector2?(F.boundary=8,F.storage=8):R.isVector3||R.isColor?(F.boundary=16,F.storage=12):R.isVector4?(F.boundary=16,F.storage=16):R.isMatrix3?(F.boundary=48,F.storage=48):R.isMatrix4?(F.boundary=64,F.storage=64):R.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(F.boundary=16,F.storage=R.byteLength):ce("WebGLRenderer: Unsupported uniform value type.",R),F}function O(R){let F=R.target;F.removeEventListener("dispose",O);let B=c.indexOf(F.__bindingPointIndex);c.splice(B,1),n.deleteBuffer(r[F.id]),delete r[F.id],delete o[F.id]}function G(){for(let R in r)n.deleteBuffer(r[R]);c=[],r={},o={}}return{bind:f,update:d,dispose:G}}function Xx(){return xi===null&&(xi=new Va(Gx,16,16,cr,ci),xi.name="DFG_LUT",xi.minFilter=fn,xi.magFilter=fn,xi.wrapS=gi,xi.wrapT=gi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var i0,r0,s0,o0,a0,l0,c0,h0,u0,f0,d0,p0,m0,g0,_0,v0,y0,x0,M0,S0,b0,w0,E0,T0,A0,C0,P0,I0,R0,L0,N0,D0,O0,F0,U0,B0,k0,z0,V0,H0,G0,X0,W0,Y0,q0,$0,Z0,J0,j0,K0,Q0,t_,e_,n_,i_,r_,s_,o_,a_,l_,c_,h_,u_,f_,d_,p_,m_,g_,__,v_,y_,x_,M_,S_,b_,w_,E_,T_,A_,C_,P_,I_,R_,L_,N_,D_,O_,F_,U_,B_,k_,z_,V_,H_,G_,X_,W_,Y_,q_,$_,Z_,J_,j_,K_,Q_,tv,ev,nv,iv,rv,sv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,vv,yv,xv,Mv,Sv,bv,wv,Ev,Tv,Av,Cv,Pv,Iv,Rv,Lv,Nv,Dv,Ov,Fv,Se,Jt,Mi,Zl,Uv,Nd,Ps,Gv,Xv,Wv,Fo,ud,kh,zh,Vh,Hh,Yv,Pr,jl,Kl,iy,Dd,Wh,Od,Fd,Ud,md,gd,_d,vd,yd,Yh,qh,$h,Gh,Is,Yy,qy,Sd,jy,Jl,ix,rx,ox,lx,hx,fx,px,vx,Jh,jh,Tx,Ix,Rx,Lx,Nx,Rd,Uo,Xh,Bx,kx,Kh,Qh,zx,Bd,Gx,xi,Ql,nc=Pn(()=>{Bh();Bh();i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
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
#endif`,h0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,f0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,T0=`#define PI 3.141592653589793
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
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C0=`vec3 transformedNormal = objectNormal;
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
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
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
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t_=`PhysicalMaterial material;
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
#endif`,e_=`uniform sampler2D dfgLUT;
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
}`,n_=`
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
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
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,o_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d_=`#if defined( USE_POINTS_UV )
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
#endif`,p_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,__=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`#ifdef USE_MORPHTARGETS
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
#endif`,x_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,T_=`#ifdef USE_NORMALMAP
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
#endif`,A_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H_=`float getShadowMask() {
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
}`,G_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X_=`#ifdef USE_SKINNING
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
#endif`,W_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j_=`#ifdef USE_TRANSMISSION
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
#endif`,K_=`#ifdef USE_TRANSMISSION
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rv=`uniform sampler2D t2D;
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
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`#ifdef ENVMAP_TYPE_CUBE
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`#include <common>
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
}`,hv=`#if DEPTH_PACKING == 3200
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
}`,uv=`#define DISTANCE
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
}`,fv=`#define DISTANCE
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
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`uniform float scale;
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
}`,gv=`uniform vec3 diffuse;
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
}`,_v=`#include <common>
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
}`,vv=`uniform vec3 diffuse;
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
}`,yv=`#define LAMBERT
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
}`,xv=`#define LAMBERT
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
}`,Mv=`#define MATCAP
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
}`,Sv=`#define MATCAP
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
}`,bv=`#define NORMAL
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
}`,wv=`#define NORMAL
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
}`,Ev=`#define PHONG
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
}`,Tv=`#define PHONG
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
}`,Av=`#define STANDARD
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
}`,Cv=`#define STANDARD
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
}`,Pv=`#define TOON
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
}`,Iv=`#define TOON
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
}`,Rv=`uniform float size;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Nv=`#include <common>
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
}`,Dv=`uniform vec3 color;
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
}`,Ov=`uniform float rotation;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:i0,alphahash_pars_fragment:r0,alphamap_fragment:s0,alphamap_pars_fragment:o0,alphatest_fragment:a0,alphatest_pars_fragment:l0,aomap_fragment:c0,aomap_pars_fragment:h0,batching_pars_vertex:u0,batching_vertex:f0,begin_vertex:d0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:_0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:M0,color_fragment:S0,color_pars_fragment:b0,color_pars_vertex:w0,color_vertex:E0,common:T0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:C0,displacementmap_pars_vertex:P0,displacementmap_vertex:I0,emissivemap_fragment:R0,emissivemap_pars_fragment:L0,colorspace_fragment:N0,colorspace_pars_fragment:D0,envmap_fragment:O0,envmap_common_pars_fragment:F0,envmap_pars_fragment:U0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:Z0,envmap_vertex:k0,fog_vertex:z0,fog_pars_vertex:V0,fog_fragment:H0,fog_pars_fragment:G0,gradientmap_pars_fragment:X0,lightmap_pars_fragment:W0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:q0,lights_pars_begin:$0,lights_toon_fragment:J0,lights_toon_pars_fragment:j0,lights_phong_fragment:K0,lights_phong_pars_fragment:Q0,lights_physical_fragment:t_,lights_physical_pars_fragment:e_,lights_fragment_begin:n_,lights_fragment_maps:i_,lights_fragment_end:r_,lightprobes_pars_fragment:s_,logdepthbuf_fragment:o_,logdepthbuf_pars_fragment:a_,logdepthbuf_pars_vertex:l_,logdepthbuf_vertex:c_,map_fragment:h_,map_pars_fragment:u_,map_particle_fragment:f_,map_particle_pars_fragment:d_,metalnessmap_fragment:p_,metalnessmap_pars_fragment:m_,morphinstance_vertex:g_,morphcolor_vertex:__,morphnormal_vertex:v_,morphtarget_pars_vertex:y_,morphtarget_vertex:x_,normal_fragment_begin:M_,normal_fragment_maps:S_,normal_pars_fragment:b_,normal_pars_vertex:w_,normal_vertex:E_,normalmap_pars_fragment:T_,clearcoat_normal_fragment_begin:A_,clearcoat_normal_fragment_maps:C_,clearcoat_pars_fragment:P_,iridescence_pars_fragment:I_,opaque_fragment:R_,packing:L_,premultiplied_alpha_fragment:N_,project_vertex:D_,dithering_fragment:O_,dithering_pars_fragment:F_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:B_,shadowmap_pars_fragment:k_,shadowmap_pars_vertex:z_,shadowmap_vertex:V_,shadowmask_pars_fragment:H_,skinbase_vertex:G_,skinning_pars_vertex:X_,skinning_vertex:W_,skinnormal_vertex:Y_,specularmap_fragment:q_,specularmap_pars_fragment:$_,tonemapping_fragment:Z_,tonemapping_pars_fragment:J_,transmission_fragment:j_,transmission_pars_fragment:K_,uv_pars_fragment:Q_,uv_pars_vertex:tv,uv_vertex:ev,worldpos_vertex:nv,background_vert:iv,background_frag:rv,backgroundCube_vert:sv,backgroundCube_frag:ov,cube_vert:av,cube_frag:lv,depth_vert:cv,depth_frag:hv,distance_vert:uv,distance_frag:fv,equirect_vert:dv,equirect_frag:pv,linedashed_vert:mv,linedashed_frag:gv,meshbasic_vert:_v,meshbasic_frag:vv,meshlambert_vert:yv,meshlambert_frag:xv,meshmatcap_vert:Mv,meshmatcap_frag:Sv,meshnormal_vert:bv,meshnormal_frag:wv,meshphong_vert:Ev,meshphong_frag:Tv,meshphysical_vert:Av,meshphysical_frag:Cv,meshtoon_vert:Pv,meshtoon_frag:Iv,points_vert:Rv,points_frag:Lv,shadow_vert:Nv,shadow_frag:Dv,sprite_vert:Ov,sprite_frag:Fv},Jt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new at},probesMax:{value:new at},probesResolution:{value:new at}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Mi={basic:{uniforms:xn([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:xn([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,Jt.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:xn([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,Jt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:xn([Jt.common,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.roughnessmap,Jt.metalnessmap,Jt.fog,Jt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:xn([Jt.common,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.gradientmap,Jt.fog,Jt.lights,{emissive:{value:new ge(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:xn([Jt.common,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:xn([Jt.points,Jt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:xn([Jt.common,Jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:xn([Jt.common,Jt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:xn([Jt.common,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:xn([Jt.sprite,Jt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:xn([Jt.common,Jt.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:xn([Jt.lights,Jt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Mi.physical={uniforms:xn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};Zl={r:0,b:0,g:0},Uv=new ze,Nd=new ve;Nd.set(-1,0,0,0,1,0,0,0,1);Ps=4,Gv=6,Xv=20,Wv=256,Fo=new Ms,ud=new ge,kh=null,zh=0,Vh=0,Hh=!1,Yv=new at,Pr=new at,jl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,o={}){let{size:c=256,position:u=Yv}=o;kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,i,r,f,u),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,zh,Vh),this._renderer.xr.enabled=Hh,t.scissorTest=!1,Cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ci,format:qn,colorSpace:io,depthBuffer:!1},r=fd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qv(o)),this._blurMaterial=Zv(o,t,e),this._ggxMaterial=$v(o,t,e)}return r}_compileMaterial(t){let e=new Fe(new $e,t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,i,r,o){let f=new vn(90,1,e,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],y=this._renderer,_=y.autoClear,b=y.toneMapping;y.getClearColor(ud),y.toneMapping=oi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(r),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new Qi,new Bn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,S=P.material,M=!1,O=t.background;O?O.isColor&&(S.color.copy(O),t.background=null,M=!0):(S.color.copy(ud),M=!0);for(let G=0;G<6;G++){let R=G%3;R===0?(f.up.set(0,d[G],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+g[G],o.y,o.z)):R===1?(f.up.set(0,0,d[G]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+g[G],o.z)):(f.up.set(0,d[G],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+g[G]));let F=this._cubeSize;Cs(r,R*F,G>2?F:0,F,F),y.setRenderTarget(r),M&&y.render(P,f),y.render(t,f)}y.toneMapping=b,y.autoClear=_,t.background=O}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===or||t.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());let o=r?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;let u=o.uniforms;u.envMap.value=t;let f=this._cubeSize;Cs(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(c,Fo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=i/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),y=Math.sqrt(d*d-g*g),_=d*1.25,b=y*_,{_lodMax:E}=this,P=this._sizeLods[i],S=3*P*(i>E-Ps?i-E+Ps:0),M=4*(this._cubeSize-P);f.envMap.value=t.texture,f.roughness.value=b,f.mipInt.value=E-e,Cs(o,S,M,3*P,2*P),r.setRenderTarget(o),r.render(u,Fo),f.envMap.value=o.texture,f.roughness.value=0,f.mipInt.value=E-i,Cs(t,S,M,3*P,2*P),r.setRenderTarget(t),r.render(u,Fo)}_blur(t,e,i,r){let o=this._pingPongRenderTarget,c=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,c),this._blurPass(o,t,i,i,c)}_blurPass(t,e,i,r,o){let c=this._renderer,u=this._blurMaterial,f=this._lodMeshes[r];f.material=u;let d=u.uniforms;d.envMap.value=t.texture,d.sigma.value=o,d.mipInt.value=this._lodMax-i;let g=this._sizeLods[r],y=3*g*(r>this._lodMax-Ps?r-this._lodMax+Ps:0),_=4*(this._cubeSize-g);Cs(e,y,_,3*g,2*g),c.setRenderTarget(e),c.render(f,Fo)}};Kl=class extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new po(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qi(5,5,5),o=new kn({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:yi});o.uniforms.tEquirect.value=e;let c=new Fe(r,o),u=e.minFilter;return e.minFilter===ar&&(e.minFilter=fn),new sl(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,r);t.setRenderTarget(o)}};iy={[mh]:"LINEAR_TONE_MAPPING",[gh]:"REINHARD_TONE_MAPPING",[_h]:"CINEON_TONE_MAPPING",[vh]:"ACES_FILMIC_TONE_MAPPING",[xh]:"AGX_TONE_MAPPING",[Mh]:"NEUTRAL_TONE_MAPPING",[yh]:"CUSTOM_TONE_MAPPING"};Dd=new En,Wh=new Ki(1,1),Od=new ao,Fd=new ka,Ud=new po,md=[],gd=[],_d=new Float32Array(16),vd=new Float32Array(9),yd=new Float32Array(4);Yh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wy(e.type)}},qh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xy(e.type)}},$h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let o=0,c=r.length;o!==c;++o){let u=r[o];u.setValue(t,e[u.id],i)}}},Gh=/(\w+)(\])?(\[|\.)?/g;Is=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){let u=t.getActiveUniform(e,c),f=t.getUniformLocation(e,u.name);Wy(u,f,this)}let r=[],o=[];for(let c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(c):o.push(c);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,i,r){let o=this.map[e];o!==void 0&&o.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let o=0,c=e.length;o!==c;++o){let u=e[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,o=t.length;r!==o;++r){let c=t[r];c.id in e&&i.push(c)}return i}};Yy=37297,qy=0;Sd=new ve;jy={[mh]:"Linear",[gh]:"Reinhard",[_h]:"Cineon",[vh]:"ACESFilmic",[xh]:"AgX",[Mh]:"Neutral",[yh]:"Custom"};Jl=new at;ix=/^[ \t]*#include +<([\w\d./]+)>/gm;rx=new Map;ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;lx={[Ao]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};hx={[or]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE_UV"};fx={[Tr]:"ENVMAP_MODE_REFRACTION"};px={[ph]:"ENVMAP_BLENDING_MULTIPLY",[Xf]:"ENVMAP_BLENDING_MIX",[Wf]:"ENVMAP_BLENDING_ADD"};vx=0,Jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new jh(t),e.set(t,i)),i}},jh=class{constructor(t){this.id=vx++,this.code=t,this.usedTimes=0}};Tx=0;Ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
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
}`,Lx=[new at(1,0,0),new at(-1,0,0),new at(0,1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1)],Nx=[new at(0,-1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1),new at(0,-1,0),new at(0,-1,0)],Rd=new ze,Uo=new at,Xh=new at;Bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
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

}`,Kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new go(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new kn({vertexShader:Bx,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new _o(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qh=class extends ri{constructor(t,e){super();let i=this,r=null,o=1,c=null,u="local-floor",f=1,d=null,g=null,y=null,_=null,b=null,E=null,P=typeof XRWebGLBinding<"u",S=new Kh,M={},O=e.getContextAttributes(),G=null,R=null,F=[],B=[],Y=new se,C=null,V=null,W=new vn;W.viewport=new Ze;let et=new vn;et.viewport=new Ze;let nt=[W,et],Q=new ol,K=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(wt){let Pt=F[wt];return Pt===void 0&&(Pt=new gs,F[wt]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(wt){let Pt=F[wt];return Pt===void 0&&(Pt=new gs,F[wt]=Pt),Pt.getGripSpace()},this.getHand=function(wt){let Pt=F[wt];return Pt===void 0&&(Pt=new gs,F[wt]=Pt),Pt.getHandSpace()};function tt(wt){let Pt=B.indexOf(wt.inputSource);if(Pt===-1)return;let Vt=F[Pt];Vt!==void 0&&(Vt.update(wt.inputSource,wt.frame,d||c),Vt.dispatchEvent({type:wt.type,data:wt.inputSource}))}function ct(){r.removeEventListener("select",tt),r.removeEventListener("selectstart",tt),r.removeEventListener("selectend",tt),r.removeEventListener("squeeze",tt),r.removeEventListener("squeezestart",tt),r.removeEventListener("squeezeend",tt),r.removeEventListener("end",ct),r.removeEventListener("inputsourceschange",mt);for(let wt=0;wt<F.length;wt++){let Pt=B[wt];Pt!==null&&(B[wt]=null,F[wt].disconnect(Pt))}K=null,U=null,S.reset();for(let wt in M)delete M[wt];if(t.setRenderTarget(G),b=null,_=null,y=null,r=null,R=null,dt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(Y.width,Y.height,!1),V!==null){let wt=V.camera;wt.fov=V.fov,wt.zoom=V.zoom,wt.updateProjectionMatrix(),V=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(wt){o=wt,i.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(wt){u=wt,i.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(wt){d=wt},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return y===null&&P&&(y=new XRWebGLBinding(r,e)),y},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(wt){if(r=wt,r!==null){if(G=t.getRenderTarget(),r.addEventListener("select",tt),r.addEventListener("selectstart",tt),r.addEventListener("selectend",tt),r.addEventListener("squeeze",tt),r.addEventListener("squeezestart",tt),r.addEventListener("squeezeend",tt),r.addEventListener("end",ct),r.addEventListener("inputsourceschange",mt),O.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(Y),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Vt=null,re=null,Ht=null;O.depth&&(Ht=O.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Vt=O.stencil?lr:_i,re=O.stencil?As:ai);let fe={colorFormat:e.RGBA8,depthFormat:Ht,scaleFactor:o};y=this.getBinding(),_=y.createProjectionLayer(fe),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),R=new Rn(_.textureWidth,_.textureHeight,{format:qn,type:Ln,depthTexture:new Ki(_.textureWidth,_.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Vt),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let Vt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:o};b=new XRWebGLLayer(r,e,Vt),r.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),R=new Rn(b.framebufferWidth,b.framebufferHeight,{format:qn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await r.requestReferenceSpace(u),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function mt(wt){for(let Pt=0;Pt<wt.removed.length;Pt++){let Vt=wt.removed[Pt],re=B.indexOf(Vt);re>=0&&(B[re]=null,F[re].disconnect(Vt))}for(let Pt=0;Pt<wt.added.length;Pt++){let Vt=wt.added[Pt],re=B.indexOf(Vt);if(re===-1){for(let fe=0;fe<F.length;fe++)if(fe>=B.length){B.push(Vt),re=fe;break}else if(B[fe]===null){B[fe]=Vt,re=fe;break}if(re===-1)break}let Ht=F[re];Ht&&Ht.connect(Vt)}}let ht=new at,yt=new at;function bt(wt,Pt,Vt){ht.setFromMatrixPosition(Pt.matrixWorld),yt.setFromMatrixPosition(Vt.matrixWorld);let re=ht.distanceTo(yt),Ht=Pt.projectionMatrix.elements,fe=Vt.projectionMatrix.elements,Ue=Ht[14]/(Ht[10]-1),de=Ht[14]/(Ht[10]+1),ye=(Ht[9]+1)/Ht[5],be=(Ht[9]-1)/Ht[5],xe=(Ht[8]-1)/Ht[0],Le=(fe[8]+1)/fe[0],He=Ue*xe,Qe=Ue*Le,Ie=re/(-xe+Le),Re=Ie*-xe;if(Pt.matrixWorld.decompose(wt.position,wt.quaternion,wt.scale),wt.translateX(Re),wt.translateZ(Ie),wt.matrixWorld.compose(wt.position,wt.quaternion,wt.scale),wt.matrixWorldInverse.copy(wt.matrixWorld).invert(),Ht[10]===-1)wt.projectionMatrix.copy(Pt.projectionMatrix),wt.projectionMatrixInverse.copy(Pt.projectionMatrixInverse);else{let lt=Ue+Ie,Je=de+Ie,_e=He-Re,X=Qe+(re-Re),A=ye*de/Je*lt,rt=be*de/Je*lt;wt.projectionMatrix.makePerspective(_e,X,A,rt,lt,Je),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert()}}function Lt(wt,Pt){Pt===null?wt.matrixWorld.copy(wt.matrix):wt.matrixWorld.multiplyMatrices(Pt.matrixWorld,wt.matrix),wt.matrixWorldInverse.copy(wt.matrixWorld).invert()}this.updateCamera=function(wt){if(r===null)return;let Pt=wt.near,Vt=wt.far;S.texture!==null&&(S.depthNear>0&&(Pt=S.depthNear),S.depthFar>0&&(Vt=S.depthFar)),Q.near=et.near=W.near=Pt,Q.far=et.far=W.far=Vt,(K!==Q.near||U!==Q.far)&&(r.updateRenderState({depthNear:Q.near,depthFar:Q.far}),K=Q.near,U=Q.far),Q.layers.mask=wt.layers.mask|6,W.layers.mask=Q.layers.mask&-5,et.layers.mask=Q.layers.mask&-3;let re=wt.parent,Ht=Q.cameras;Lt(Q,re);for(let fe=0;fe<Ht.length;fe++)Lt(Ht[fe],re);Ht.length===2?bt(Q,W,et):Q.projectionMatrix.copy(W.projectionMatrix),V===null&&wt.isPerspectiveCamera&&(V={camera:wt,fov:wt.fov,zoom:wt.zoom}),zt(wt,Q,re)};function zt(wt,Pt,Vt){Vt===null?wt.matrix.copy(Pt.matrixWorld):(wt.matrix.copy(Vt.matrixWorld),wt.matrix.invert(),wt.matrix.multiply(Pt.matrixWorld)),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.updateMatrixWorld(!0),wt.projectionMatrix.copy(Pt.projectionMatrix),wt.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),wt.isPerspectiveCamera&&(wt.fov=ds*2*Math.atan(1/wt.projectionMatrix.elements[5]),wt.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(_===null&&b===null))return f},this.setFoveation=function(wt){f=wt,_!==null&&(_.fixedFoveation=wt),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=wt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Q)},this.getCameraTexture=function(wt){return M[wt]};let le=null;function ae(wt,Pt){if(g=Pt.getViewerPose(d||c),E=Pt,g!==null){let Vt=g.views;b!==null&&(t.setRenderTargetFramebuffer(R,b.framebuffer),t.setRenderTarget(R));let re=!1;Vt.length!==Q.cameras.length&&(Q.cameras.length=0,re=!0);for(let de=0;de<Vt.length;de++){let ye=Vt[de],be=null;if(b!==null)be=b.getViewport(ye);else{let Le=y.getViewSubImage(_,ye);be=Le.viewport,de===0&&(t.setRenderTargetTextures(R,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(R))}let xe=nt[de];xe===void 0&&(xe=new vn,xe.layers.enable(de),xe.viewport=new Ze,nt[de]=xe),xe.matrix.fromArray(ye.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(ye.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(be.x,be.y,be.width,be.height),de===0&&(Q.matrix.copy(xe.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),re===!0&&Q.cameras.push(xe)}let Ht=r.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&P){y=i.getBinding();let de=y.getDepthInformation(Vt[0]);de&&de.isValid&&de.texture&&S.init(de,r.renderState)}if(Ht&&Ht.includes("camera-access")&&P){t.state.unbindTexture(),y=i.getBinding();for(let de=0;de<Vt.length;de++){let ye=Vt[de].camera;if(ye){let be=M[ye];be||(be=new go,M[ye]=be);let xe=y.getCameraImage(ye);be.sourceTexture=xe}}}}for(let Vt=0;Vt<F.length;Vt++){let re=B[Vt],Ht=F[Vt];re!==null&&Ht!==void 0&&Ht.update(re,Pt,d||c)}le&&le(wt,Pt),Pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Pt}),E=null}let dt=new Ld;dt.setAnimationLoop(ae),this.setAnimationLoop=function(wt){le=wt},this.dispose=function(){}}},zx=new ze,Bd=new ve;Bd.set(-1,0,0,0,1,0,0,0,1);Gx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;Ql=class{constructor(t={}){let{canvas:e=nd(),context:i=null,depth:r=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:_=!1,outputBufferType:b=Ln}=t;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=c;let P=b,S=new Set([ml,pl,dl]),M=new Set([Ln,ai,Ts,As,ul,fl]),O=new Uint32Array(4),G=new Int32Array(4),R=new at,F=null,B=null,Y=[],C=[],V=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let W=this,et=!1,nt=null,Q=null,K=null,U=null;this._outputColorSpace=wn;let tt=0,ct=0,mt=null,ht=-1,yt=null,bt=new Ze,Lt=new Ze,zt=null,le=new ge(0),ae=0,dt=e.width,wt=e.height,Pt=1,Vt=null,re=null,Ht=new Ze(0,0,dt,wt),fe=new Ze(0,0,dt,wt),Ue=!1,de=new vs,ye=!1,be=!1,xe=new ze,Le=new at,He=new Ze,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Re(){return mt===null?Pt:1}let lt=i;function Je(N,st){return e.getContext(N,st)}let _e,X,A,rt,pt,Tt,z,J,k,q,ft,Dt,Mt,It,vt,Bt,Gt,it,kt,Et,Xt,$t,Rt;try{let N={alpha:!0,depth:r,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",Ce,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),lt===null){let st="webgl2";if(lt=Je(st,N),lt===null)throw Je(st)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(N){throw e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",Ce,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),ue("WebGLRenderer: "+N.message),N}function Ot(){_e=new jv(lt),_e.init(),Xt=new Ux(lt,_e),X=new Vv(lt,_e,t,Xt),A=new Ox(lt,_e),X.reversedDepthBuffer&&_&&A.buffers.depth.setReversed(!0),Q=lt.createFramebuffer(),K=lt.createFramebuffer(),U=lt.createFramebuffer(),rt=new ty(lt),pt=new Mx,Tt=new Fx(lt,_e,A,pt,X,Xt,rt),z=new Jv(W),J=new n0(lt),$t=new kv(lt,J),k=new Kv(lt,J,rt,$t),q=new ny(lt,k,J,$t,rt),it=new ey(lt,X,Tt),vt=new Hv(pt),ft=new xx(W,z,_e,X,$t,vt),Dt=new Vx(W,pt),Mt=new bx,It=new Px(_e),Gt=new Bv(W,z,A,q,E,f),Bt=new Dx(W,q,X),Rt=new Hx(lt,rt,X,A),kt=new zv(lt,_e,rt),Et=new Qv(lt,_e,rt),rt.programs=ft.programs,W.capabilities=X,W.extensions=_e,W.properties=pt,W.renderLists=Mt,W.shadowMap=Bt,W.state=A,W.info=rt}P!==Ln&&(V=new ry(P,e.width,e.height,u,r,o));let te=new Qh(W,lt);this.xr=te,this.getContext=function(){return lt},this.getContextAttributes=function(){return lt.getContextAttributes()},this.forceContextLoss=function(){let N=_e.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=_e.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Pt},this.setPixelRatio=function(N){N!==void 0&&(Pt=N,this.setSize(dt,wt,!1))},this.getSize=function(N){return N.set(dt,wt)},this.setSize=function(N,st,xt=!0){if(te.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=N,wt=st,e.width=Math.floor(N*Pt),e.height=Math.floor(st*Pt),xt===!0&&(e.style.width=N+"px",e.style.height=st+"px"),V!==null&&V.setSize(e.width,e.height),this.setViewport(0,0,N,st)},this.getDrawingBufferSize=function(N){return N.set(dt*Pt,wt*Pt).floor()},this.setDrawingBufferSize=function(N,st,xt){dt=N,wt=st,Pt=xt,e.width=Math.floor(N*xt),e.height=Math.floor(st*xt),this.setViewport(0,0,N,st)},this.setEffects=function(N){if(P===Ln){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let st=0;st<N.length;st++)if(N[st].isOutputPass===!0){ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(bt)},this.getViewport=function(N){return N.copy(Ht)},this.setViewport=function(N,st,xt,gt){N.isVector4?Ht.set(N.x,N.y,N.z,N.w):Ht.set(N,st,xt,gt),A.viewport(bt.copy(Ht).multiplyScalar(Pt).round())},this.getScissor=function(N){return N.copy(fe)},this.setScissor=function(N,st,xt,gt){N.isVector4?fe.set(N.x,N.y,N.z,N.w):fe.set(N,st,xt,gt),A.scissor(Lt.copy(fe).multiplyScalar(Pt).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(N){A.setScissorTest(Ue=N)},this.setOpaqueSort=function(N){Vt=N},this.setTransparentSort=function(N){re=N},this.getClearColor=function(N){return N.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(N=!0,st=!0,xt=!0){let gt=0;if(N){let _t=!1;if(mt!==null){let qt=mt.texture.format;_t=S.has(qt)}if(_t){let qt=mt.texture.type,Ut=M.has(qt),Yt=Gt.getClearColor(),Kt=Gt.getClearAlpha(),ee=Yt.r,Wt=Yt.g,he=Yt.b;Ut?(O[0]=ee,O[1]=Wt,O[2]=he,O[3]=Kt,lt.clearBufferuiv(lt.COLOR,0,O)):(G[0]=ee,G[1]=Wt,G[2]=he,G[3]=Kt,lt.clearBufferiv(lt.COLOR,0,G))}else gt|=lt.COLOR_BUFFER_BIT}st&&(gt|=lt.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),xt&&(gt|=lt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),gt!==0&&lt.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),nt=N},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",Ce,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),Gt.dispose(),Mt.dispose(),It.dispose(),pt.dispose(),z.dispose(),q.dispose(),$t.dispose(),Rt.dispose(),ft.dispose(),te.dispose(),te.removeEventListener("sessionstart",Ir),te.removeEventListener("sessionend",Rr),Cn.stop()};function De(N){N.preventDefault(),oo("WebGLRenderer: Context Lost."),et=!0}function Ce(){oo("WebGLRenderer: Context Restored."),et=!1;let N=rt.autoReset,st=Bt.enabled,xt=Bt.autoUpdate,gt=Bt.needsUpdate,_t=Bt.type;Ot(),rt.autoReset=N,Bt.enabled=st,Bt.autoUpdate=xt,Bt.needsUpdate=gt,Bt.type=_t}function Sn(N){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function An(N){let st=N.target;st.removeEventListener("dispose",An),Ns(st)}function Ns(N){hr(N),pt.remove(N)}function hr(N){let st=pt.get(N).programs;st!==void 0&&(st.forEach(function(xt){ft.releaseProgram(xt)}),N.isShaderMaterial&&ft.releaseShaderCache(N))}this.renderBufferDirect=function(N,st,xt,gt,_t,qt){st===null&&(st=Qe);let Ut=_t.isMesh&&_t.matrixWorld.determinantAffine()<0,Yt=ui(N,st,xt,gt,_t);A.setMaterial(gt,Ut);let Kt=xt.index,ee=1;if(gt.wireframe===!0){if(Kt=k.getWireframeAttribute(xt),Kt===void 0)return;ee=2}let Wt=xt.drawRange,he=xt.attributes.position,jt=Wt.start*ee,Pe=(Wt.start+Wt.count)*ee;qt!==null&&(jt=Math.max(jt,qt.start*ee),Pe=Math.min(Pe,(qt.start+qt.count)*ee)),Kt!==null?(jt=Math.max(jt,0),Pe=Math.min(Pe,Kt.count)):he!=null&&(jt=Math.max(jt,0),Pe=Math.min(Pe,he.count));let We=Pe-jt;if(We<0||We===1/0)return;$t.setup(_t,gt,Yt,xt,Kt);let Ee,s=kt;if(Kt!==null&&(Ee=J.get(Kt),s=Et,s.setIndex(Ee)),_t.isMesh)gt.wireframe===!0?(A.setLineWidth(gt.wireframeLinewidth*Re()),s.setMode(lt.LINES)):s.setMode(lt.TRIANGLES);else if(_t.isLine){let a=gt.linewidth;a===void 0&&(a=1),A.setLineWidth(a*Re()),_t.isLineSegments?s.setMode(lt.LINES):_t.isLineLoop?s.setMode(lt.LINE_LOOP):s.setMode(lt.LINE_STRIP)}else _t.isPoints?s.setMode(lt.POINTS):_t.isSprite&&s.setMode(lt.TRIANGLES);if(_t.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))s.renderMultiDraw(_t._multiDrawStarts,_t._multiDrawCounts,_t._multiDrawCount);else{let a=_t._multiDrawStarts,l=_t._multiDrawCounts,p=_t._multiDrawCount,v=Kt?J.get(Kt).bytesPerElement:1,T=pt.get(gt).currentProgram.getUniforms();for(let D=0;D<p;D++)T.setValue(lt,"_gl_DrawID",D),s.render(a[D]/v,l[D])}else if(_t.isInstancedMesh)s.renderInstances(jt,We,_t.count);else if(xt.isInstancedBufferGeometry){let a=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,l=Math.min(xt.instanceCount,a);s.renderInstances(jt,We,l)}else s.render(jt,We)};function I(N,st,xt,gt){nt!==null&&N.isNodeMaterial&&nt.setObject(gt,N),ye===!0&&vt.setState(N,xt,!1),N.transparent===!0&&N.side===yn&&N.forceSinglePass===!1?(N.side=Tn,N.needsUpdate=!0,Fi(N,st,gt),N.side=sr,N.needsUpdate=!0,Fi(N,st,gt),N.side=yn):Fi(N,st,gt)}this.compile=function(N,st,xt=null){xt===null&&(xt=N),nt!==null&&nt.renderStart(N,st,xt),B=It.get(xt),B.init(st),C.push(B),xt.traverseVisible(function(_t){_t.isLight&&_t.layers.test(st.layers)&&(B.pushLight(_t),_t.castShadow&&B.pushShadow(_t))}),N!==xt&&N.traverseVisible(function(_t){_t.isLight&&_t.layers.test(st.layers)&&(B.pushLight(_t),_t.castShadow&&B.pushShadow(_t))}),B.setupLights(),nt!==null&&nt.updateLights(B.state.lightsArray),be=this.localClippingEnabled,ye=vt.init(this.clippingPlanes,be),ye===!0&&vt.setGlobalState(this.clippingPlanes,st),nt!==null&&Bt.render(B.state.shadowsArray,xt,st);let gt=new Set;return N.traverse(function(_t){if(!(_t.isMesh||_t.isPoints||_t.isLine||_t.isSprite))return;let qt=_t.material;if(qt)if(Array.isArray(qt))for(let Ut=0;Ut<qt.length;Ut++){let Yt=qt[Ut];I(Yt,xt,st,_t),gt.add(Yt)}else I(qt,xt,st,_t),gt.add(qt)}),B=C.pop(),nt!==null&&nt.renderEnd(),gt},this.compileAsync=function(N,st,xt=null){let gt=this.compile(N,st,xt);return new Promise(_t=>{function qt(){if(gt.forEach(function(Ut){let Kt=pt.get(Ut).currentProgram;(Kt===void 0||Kt.isReady())&&gt.delete(Ut)}),gt.size===0){_t(N);return}setTimeout(qt,10)}_e.get("KHR_parallel_shader_compile")!==null?qt():setTimeout(qt,10)})};let Si=null;function Ae(N){Si&&Si(N)}function Ir(){Cn.stop()}function Rr(){Cn.start()}let Cn=new Ld;Cn.setAnimationLoop(Ae),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(N){Si=N,te.setAnimationLoop(N),N===null?Cn.stop():Cn.start()},te.addEventListener("sessionstart",Ir),te.addEventListener("sessionend",Rr),this.render=function(N,st){if(st!==void 0&&st.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(et===!0)return;nt!==null&&nt.renderStart(N,st);let xt=te.enabled===!0&&te.isPresenting===!0,gt=V!==null&&(mt===null||xt)&&V.begin(W,mt);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(st),st=te.getCamera()),N.isScene===!0&&N.onBeforeRender(W,N,st,mt),B=It.get(N,C.length),B.init(st),B.state.textureUnits=Tt.getTextureUnits(),C.push(B),xe.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),de.setFromProjectionMatrix(xe,ni,st.reversedDepth),be=this.localClippingEnabled,ye=vt.init(this.clippingPlanes,be),F=Mt.get(N,Y.length),F.init(),Y.push(F),te.enabled===!0&&te.isPresenting===!0){let Ut=W.xr.getDepthSensingMesh();Ut!==null&&Hn(Ut,st,-1/0,W.sortObjects)}Hn(N,st,0,W.sortObjects),F.finish(),nt!==null&&nt.updateLights(B.state.lightsArray),W.sortObjects===!0&&F.sort(Vt,re),Ie=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ie&&Gt.addToRenderList(F,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&vt.beginShadows();let _t=B.state.shadowsArray;if(Bt.render(_t,N,st),ye===!0&&vt.endShadows(),(gt&&V.hasRenderPass())===!1){let Ut=F.opaque,Yt=F.transmissive;if(B.setupLights(),st.isArrayCamera){let Kt=st.cameras;if(Yt.length>0)for(let ee=0,Wt=Kt.length;ee<Wt;ee++){let he=Kt[ee];hi(Ut,Yt,N,he)}Ie&&Gt.render(N);for(let ee=0,Wt=Kt.length;ee<Wt;ee++){let he=Kt[ee];Lr(F,N,he,he.viewport)}}else Yt.length>0&&hi(Ut,Yt,N,st),Ie&&Gt.render(N),Lr(F,N,st)}mt!==null&&ct===0&&(Tt.updateMultisampleRenderTarget(mt),Tt.updateRenderTargetMipmap(mt)),gt&&V.end(W),N.isScene===!0&&N.onAfterRender(W,N,st),$t.resetDefaultState(),ht=-1,yt=null,C.pop(),C.length>0?(B=C[C.length-1],Tt.setTextureUnits(B.state.textureUnits),ye===!0&&vt.setGlobalState(W.clippingPlanes,B.state.camera)):B=null,Y.pop(),Y.length>0?F=Y[Y.length-1]:F=null,nt!==null&&nt.renderEnd()};function Hn(N,st,xt,gt){if(N.visible===!1)return;if(N.layers.test(st.layers)){if(N.isGroup)xt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(st);else if(N.isLightProbeGrid)B.pushLightProbeGrid(N);else if(N.isLight)B.pushLight(N),N.castShadow&&B.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(de)){gt&&He.setFromMatrixPosition(N.matrixWorld).applyMatrix4(xe);let Ut=q.update(N),Yt=N.material;Yt.visible&&F.push(N,Ut,Yt,xt,He.z,null,st)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(de))){let Ut=q.update(N),Yt=N.material;if(gt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),He.copy(N.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),He.copy(Ut.boundingSphere.center)),He.applyMatrix4(N.matrixWorld).applyMatrix4(xe)),Array.isArray(Yt)){let Kt=Ut.groups;for(let ee=0,Wt=Kt.length;ee<Wt;ee++){let he=Kt[ee],jt=Yt[he.materialIndex];jt&&jt.visible&&F.push(N,Ut,jt,xt,He.z,he,st)}}else Yt.visible&&F.push(N,Ut,Yt,xt,He.z,null,st)}}let qt=N.children;for(let Ut=0,Yt=qt.length;Ut<Yt;Ut++)Hn(qt[Ut],st,xt,gt)}function Lr(N,st,xt,gt){let{opaque:_t,transmissive:qt,transparent:Ut}=N;B.setupLightsView(xt),ye===!0&&vt.setGlobalState(W.clippingPlanes,xt),gt&&A.viewport(bt.copy(gt)),_t.length>0&&bi(_t,st,xt),qt.length>0&&bi(qt,st,xt),Ut.length>0&&bi(Ut,st,xt),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function hi(N,st,xt,gt){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[gt.id]===void 0){let jt=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[gt.id]=new Rn(1,1,{generateMipmaps:!0,type:jt?ci:Ln,minFilter:ar,samples:Math.max(4,X.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Te.workingColorSpace})}let qt=B.state.transmissionRenderTarget[gt.id],Ut=gt.viewport||bt;qt.setSize(Ut.z*W.transmissionResolutionScale,Ut.w*W.transmissionResolutionScale);let Yt=W.getRenderTarget(),Kt=W.getActiveCubeFace(),ee=W.getActiveMipmapLevel();W.setRenderTarget(qt),W.getClearColor(le),ae=W.getClearAlpha(),ae<1&&W.setClearColor(16777215,.5),W.clear(),Ie&&Gt.render(xt);let Wt=W.toneMapping;W.toneMapping=oi;let he=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),B.setupLightsView(gt),ye===!0&&vt.setGlobalState(W.clippingPlanes,gt),bi(N,xt,gt),Tt.updateMultisampleRenderTarget(qt),Tt.updateRenderTargetMipmap(qt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Pe=0,We=st.length;Pe<We;Pe++){let Ee=st[Pe],{object:s,geometry:a,material:l,group:p}=Ee;if(l.side===yn&&s.layers.test(gt.layers)){let v=l.side;l.side=Tn,l.needsUpdate=!0,Nr(s,xt,gt,a,l,p),l.side=v,l.needsUpdate=!0,jt=!0}}jt===!0&&(Tt.updateMultisampleRenderTarget(qt),Tt.updateRenderTargetMipmap(qt))}W.setRenderTarget(Yt,Kt,ee),W.setClearColor(le,ae),he!==void 0&&(gt.viewport=he),W.toneMapping=Wt}function bi(N,st,xt){let gt=st.isScene===!0?st.overrideMaterial:null;for(let _t=0,qt=N.length;_t<qt;_t++){let Ut=N[_t],{object:Yt,geometry:Kt,group:ee}=Ut,Wt=Ut.material;Wt.allowOverride===!0&&gt!==null&&(Wt=gt),Yt.layers.test(xt.layers)&&Nr(Yt,st,xt,Kt,Wt,ee)}}function Nr(N,st,xt,gt,_t,qt){nt!==null&&_t.isNodeMaterial&&nt.setObject(N,_t),N.onBeforeRender(W,st,xt,gt,_t,qt),N.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),_t.onBeforeRender(W,st,xt,gt,N,qt),_t.transparent===!0&&_t.side===yn&&_t.forceSinglePass===!1?(_t.side=Tn,_t.needsUpdate=!0,W.renderBufferDirect(xt,st,gt,_t,N,qt),_t.side=sr,_t.needsUpdate=!0,W.renderBufferDirect(xt,st,gt,_t,N,qt),_t.side=yn):W.renderBufferDirect(xt,st,gt,_t,N,qt),N.onAfterRender(W,st,xt,gt,_t,qt)}function Fi(N,st,xt){st.isScene!==!0&&(st=Qe);let gt=pt.get(N),_t=B.state.lights,qt=B.state.shadowsArray,Ut=_t.state.version,Yt=ft.getParameters(N,_t.state,qt,st,xt,B.state.lightProbeGridArray),Kt=ft.getProgramCacheKey(Yt),ee=gt.programs;gt.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?st.environment:null,gt.fog=st.fog;let Wt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;gt.envMap=z.get(N.envMap||gt.environment,Wt),gt.envMapRotation=gt.environment!==null&&N.envMap===null?st.environmentRotation:N.envMapRotation,ee===void 0&&(N.addEventListener("dispose",An),ee=new Map,gt.programs=ee);let he=ee.get(Kt);if(he!==void 0){if(gt.currentProgram===he&&gt.lightsStateVersion===Ut)return Or(N,Yt),he}else Yt.uniforms=ft.getUniforms(N),nt!==null&&N.isNodeMaterial&&nt.build(N,xt,Yt),N.onBeforeCompile(Yt,W),he=ft.acquireProgram(Yt,Kt),ee.set(Kt,he),gt.uniforms=Yt.uniforms;let jt=gt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(jt.clippingPlanes=vt.uniform),Or(N,Yt),gt.needsLights=Fs(N),gt.lightsStateVersion=Ut,gt.needsLights&&(jt.ambientLightColor.value=_t.state.ambient,jt.lightProbe.value=_t.state.probe,jt.sunLights.value=_t.state.sun,jt.sunLightShadows.value=_t.state.sunShadow,jt.directionalLights.value=_t.state.directional,jt.directionalLightShadows.value=_t.state.directionalShadow,jt.spotLights.value=_t.state.spot,jt.spotLightShadows.value=_t.state.spotShadow,jt.rectAreaLights.value=_t.state.rectArea,jt.ltc_1.value=_t.state.rectAreaLTC1,jt.ltc_2.value=_t.state.rectAreaLTC2,jt.pointLights.value=_t.state.point,jt.pointLightShadows.value=_t.state.pointShadow,jt.hemisphereLights.value=_t.state.hemi,jt.sunShadowMatrix.value=_t.state.sunShadowMatrix,jt.sunShadowCascade.value=_t.state.sunShadowCascade,jt.directionalShadowMatrix.value=_t.state.directionalShadowMatrix,jt.spotLightMatrix.value=_t.state.spotLightMatrix,jt.spotLightMap.value=_t.state.spotLightMap,jt.pointShadowMatrix.value=_t.state.pointShadowMatrix),gt.lightProbeGrid=B.state.lightProbeGridArray.length>0,gt.currentProgram=he,gt.uniformsList=null,he}function Dr(N){if(N.uniformsList===null){let st=N.currentProgram.getUniforms();N.uniformsList=Is.seqWithValue(st.seq,N.uniforms)}return N.uniformsList}function Or(N,st){let xt=pt.get(N);xt.outputColorSpace=st.outputColorSpace,xt.batching=st.batching,xt.batchingColor=st.batchingColor,xt.instancing=st.instancing,xt.instancingColor=st.instancingColor,xt.instancingMorph=st.instancingMorph,xt.skinning=st.skinning,xt.morphTargets=st.morphTargets,xt.morphNormals=st.morphNormals,xt.morphColors=st.morphColors,xt.morphTargetsCount=st.morphTargetsCount,xt.numClippingPlanes=st.numClippingPlanes,xt.numIntersection=st.numClipIntersection,xt.vertexAlphas=st.vertexAlphas,xt.vertexTangents=st.vertexTangents,xt.toneMapping=st.toneMapping}function Ds(N,st){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;R.setFromMatrixPosition(st.matrixWorld);for(let xt=0,gt=N.length;xt<gt;xt++){let _t=N[xt];if(_t.texture!==null&&_t.boundingBox.containsPoint(R))return _t}return null}function ui(N,st,xt,gt,_t){st.isScene!==!0&&(st=Qe),Tt.resetTextureUnits();let qt=st.fog,Ut=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial?st.environment:null,Yt=mt===null?W.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Te.workingColorSpace,Kt=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial&&!gt.envMap||gt.isMeshPhongMaterial&&!gt.envMap,ee=z.get(gt.envMap||Ut,Kt),Wt=gt.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,he=!!xt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),jt=!!xt.morphAttributes.position,Pe=!!xt.morphAttributes.normal,We=!!xt.morphAttributes.color,Ee=oi;gt.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Ee=W.toneMapping);let s=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,a=s!==void 0?s.length:0,l=pt.get(gt),p=B.state.lights;if(ye===!0&&(be===!0||N!==yt)){let Nt=N===yt&&gt.id===ht;vt.setState(gt,N,Nt)}let v=!1;gt.version===l.__version?(l.needsLights&&l.lightsStateVersion!==p.state.version||l.outputColorSpace!==Yt||_t.isBatchedMesh&&l.batching===!1||!_t.isBatchedMesh&&l.batching===!0||_t.isBatchedMesh&&l.batchingColor===!0&&_t._colorsTexture===null||_t.isBatchedMesh&&l.batchingColor===!1&&_t._colorsTexture!==null||_t.isInstancedMesh&&l.instancing===!1||!_t.isInstancedMesh&&l.instancing===!0||_t.isSkinnedMesh&&l.skinning===!1||!_t.isSkinnedMesh&&l.skinning===!0||_t.isInstancedMesh&&l.instancingColor===!0&&_t.instanceColor===null||_t.isInstancedMesh&&l.instancingColor===!1&&_t.instanceColor!==null||_t.isInstancedMesh&&l.instancingMorph===!0&&_t.morphTexture===null||_t.isInstancedMesh&&l.instancingMorph===!1&&_t.morphTexture!==null||l.envMap!==ee||gt.fog===!0&&l.fog!==qt||l.numClippingPlanes!==void 0&&(l.numClippingPlanes!==vt.numPlanes||l.numIntersection!==vt.numIntersection)||l.vertexAlphas!==Wt||l.vertexTangents!==he||l.morphTargets!==jt||l.morphNormals!==Pe||l.morphColors!==We||l.toneMapping!==Ee||l.morphTargetsCount!==a||!!l.lightProbeGrid!=B.state.lightProbeGridArray.length>0)&&(v=!0):(v=!0,l.__version=gt.version);let T=l.currentProgram;v===!0&&(T=Fi(gt,st,_t),nt&&gt.isNodeMaterial&&nt.onUpdateProgram(gt,T,l));let D=!1,$=!1,j=!1,ut=T.getUniforms(),Ct=l.uniforms;if(A.useProgram(T.program)&&(D=!0,$=!0,j=!0),gt.id!==ht&&(ht=gt.id,$=!0),l.needsLights){let Nt=Ds(B.state.lightProbeGridArray,_t);l.lightProbeGrid!==Nt&&(l.lightProbeGrid=Nt,$=!0)}if(D||yt!==N){A.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),ut.setValue(lt,"projectionMatrix",N.projectionMatrix),ut.setValue(lt,"viewMatrix",N.matrixWorldInverse);let ne=ut.map.cameraPosition;ne!==void 0&&ne.setValue(lt,Le.setFromMatrixPosition(N.matrixWorld)),X.logarithmicDepthBuffer&&ut.setValue(lt,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&ut.setValue(lt,"isOrthographic",N.isOrthographicCamera===!0),yt!==N&&(yt=N,$=!0,j=!0)}if(l.needsLights&&(p.state.sunShadowMap.length>0&&ut.setValue(lt,"sunShadowMap",p.state.sunShadowMap,Tt),p.state.directionalShadowMap.length>0&&ut.setValue(lt,"directionalShadowMap",p.state.directionalShadowMap,Tt),p.state.spotShadowMap.length>0&&ut.setValue(lt,"spotShadowMap",p.state.spotShadowMap,Tt),p.state.pointShadowMap.length>0&&ut.setValue(lt,"pointShadowMap",p.state.pointShadowMap,Tt)),_t.isSkinnedMesh){ut.setOptional(lt,_t,"bindMatrix"),ut.setOptional(lt,_t,"bindMatrixInverse");let Nt=_t.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ut.setValue(lt,"boneTexture",Nt.boneTexture,Tt))}_t.isBatchedMesh&&(ut.setOptional(lt,_t,"batchingTexture"),ut.setValue(lt,"batchingTexture",_t._matricesTexture,Tt),ut.setOptional(lt,_t,"batchingIdTexture"),ut.setValue(lt,"batchingIdTexture",_t._indirectTexture,Tt),ut.setOptional(lt,_t,"batchingColorTexture"),_t._colorsTexture!==null&&ut.setValue(lt,"batchingColorTexture",_t._colorsTexture,Tt));let At=xt.morphAttributes;if((At.position!==void 0||At.normal!==void 0||At.color!==void 0)&&it.update(_t,xt,T),($||l.receiveShadow!==_t.receiveShadow)&&(l.receiveShadow=_t.receiveShadow,ut.setValue(lt,"receiveShadow",_t.receiveShadow)),(gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial)&&gt.envMap===null&&st.environment!==null&&(Ct.envMapIntensity.value=st.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Xx()),$){if(ut.setValue(lt,"toneMappingExposure",W.toneMappingExposure),l.needsLights&&Os(Ct,j),qt&&gt.fog===!0&&Dt.refreshFogUniforms(Ct,qt),Dt.refreshMaterialUniforms(Ct,gt,Pt,wt,B.state.transmissionRenderTarget[N.id]),l.needsLights&&l.lightProbeGrid){let Nt=l.lightProbeGrid;Ct.probesSH.value=Nt.texture,Ct.probesMin.value.copy(Nt.boundingBox.min),Ct.probesMax.value.copy(Nt.boundingBox.max),Ct.probesResolution.value.copy(Nt.resolution)}Is.upload(lt,Dr(l),Ct,Tt)}if(gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(Is.upload(lt,Dr(l),Ct,Tt),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&ut.setValue(lt,"center",_t.center),ut.setValue(lt,"modelViewMatrix",_t.modelViewMatrix),ut.setValue(lt,"normalMatrix",_t.normalMatrix),ut.setValue(lt,"modelMatrix",_t.matrixWorld),gt.uniformsGroups!==void 0){let Nt=gt.uniformsGroups;for(let ne=0,pe=Nt.length;ne<pe;ne++){let Me=Nt[ne];Rt.update(Me,T),Rt.bind(Me,T)}}return T}function Os(N,st){N.ambientLightColor.needsUpdate=st,N.lightProbe.needsUpdate=st,N.sunLights.needsUpdate=st,N.sunLightShadows.needsUpdate=st,N.directionalLights.needsUpdate=st,N.directionalLightShadows.needsUpdate=st,N.pointLights.needsUpdate=st,N.pointLightShadows.needsUpdate=st,N.spotLights.needsUpdate=st,N.spotLightShadows.needsUpdate=st,N.rectAreaLights.needsUpdate=st,N.hemisphereLights.needsUpdate=st}function Fs(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return ct},this.getRenderTarget=function(){return mt},this.setRenderTargetTextures=function(N,st,xt){let gt=pt.get(N);gt.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,gt.__autoAllocateDepthBuffer===!1&&(gt.__useRenderToTexture=!1),pt.get(N.texture).__webglTexture=st,pt.get(N.depthTexture).__webglTexture=gt.__autoAllocateDepthBuffer?void 0:xt,gt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,st){let xt=pt.get(N);xt.__webglFramebuffer=st,xt.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(N,st=0,xt=0){mt=N,tt=st,ct=xt;let gt=null,_t=!1,qt=!1;if(N){let Yt=pt.get(N);if(Yt.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(lt.FRAMEBUFFER,Yt.__webglFramebuffer),bt.copy(N.viewport),Lt.copy(N.scissor),zt=N.scissorTest,A.viewport(bt),A.scissor(Lt),A.setScissorTest(zt),ht=-1;return}else if(Yt.__webglFramebuffer===void 0)Tt.setupRenderTarget(N);else if(Yt.__hasExternalTextures)Tt.rebindTextures(N,pt.get(N.texture).__webglTexture,pt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let Wt=N.depthTexture;if(Yt.__boundDepthTexture!==Wt){if(Wt!==null&&pt.has(Wt)&&(N.width!==Wt.image.width||N.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Tt.setupDepthRenderbuffer(N)}}let Kt=N.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(qt=!0);let ee=pt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ee[st])?gt=ee[st][xt]:gt=ee[st],_t=!0):N.samples>0&&Tt.useMultisampledRTT(N)===!1?gt=pt.get(N).__webglMultisampledFramebuffer:Array.isArray(ee)?gt=ee[xt]:gt=ee,bt.copy(N.viewport),Lt.copy(N.scissor),zt=N.scissorTest}else bt.copy(Ht).multiplyScalar(Pt).floor(),Lt.copy(fe).multiplyScalar(Pt).floor(),zt=Ue;if(xt!==0&&(gt=Q),A.bindFramebuffer(lt.FRAMEBUFFER,gt)&&A.drawBuffers(N,gt),A.viewport(bt),A.scissor(Lt),A.setScissorTest(zt),_t){let Yt=pt.get(N.texture);lt.framebufferTexture2D(lt.FRAMEBUFFER,lt.COLOR_ATTACHMENT0,lt.TEXTURE_CUBE_MAP_POSITIVE_X+st,Yt.__webglTexture,xt)}else if(qt){let Yt=st;for(let Kt=0;Kt<N.textures.length;Kt++){let ee=pt.get(N.textures[Kt]);lt.framebufferTextureLayer(lt.FRAMEBUFFER,lt.COLOR_ATTACHMENT0+Kt,ee.__webglTexture,xt,Yt)}}else if(N!==null&&xt!==0){let Yt=pt.get(N.texture);lt.framebufferTexture2D(lt.FRAMEBUFFER,lt.COLOR_ATTACHMENT0,lt.TEXTURE_2D,Yt.__webglTexture,xt)}ht=-1};function Fr(N){let st=pt.get(N);return(st.__readFormat!==N.format||st.__readType!==N.type)&&(st.__readFormat=N.format,st.__readType=N.type,st.__formatReadable=X.textureFormatReadable(N.format),st.__typeReadable=X.textureTypeReadable(N.type)),st}this.readRenderTargetPixels=function(N,st,xt,gt,_t,qt,Ut,Yt=0){if(!(N&&N.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=pt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ut!==void 0&&(Kt=Kt[Ut]),Kt){A.bindFramebuffer(lt.FRAMEBUFFER,Kt);try{let ee=N.textures[Yt],Wt=ee.format,he=ee.type;N.textures.length>1&&lt.readBuffer(lt.COLOR_ATTACHMENT0+Yt);let jt=Fr(ee);if(jt.__formatReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(jt.__typeReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=N.width-gt&&xt>=0&&xt<=N.height-_t&&lt.readPixels(st,xt,gt,_t,Xt.convert(Wt),Xt.convert(he),qt)}finally{let ee=mt!==null?pt.get(mt).__webglFramebuffer:null;A.bindFramebuffer(lt.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(N,st,xt,gt,_t,qt,Ut,Yt=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=pt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ut!==void 0&&(Kt=Kt[Ut]),Kt)if(st>=0&&st<=N.width-gt&&xt>=0&&xt<=N.height-_t){A.bindFramebuffer(lt.FRAMEBUFFER,Kt);let ee=N.textures[Yt],Wt=ee.format,he=ee.type;N.textures.length>1&&lt.readBuffer(lt.COLOR_ATTACHMENT0+Yt);let jt=Fr(ee);if(jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=lt.createBuffer();lt.bindBuffer(lt.PIXEL_PACK_BUFFER,Pe),lt.bufferData(lt.PIXEL_PACK_BUFFER,qt.byteLength,lt.STREAM_READ),lt.readPixels(st,xt,gt,_t,Xt.convert(Wt),Xt.convert(he),0),lt.bindBuffer(lt.PIXEL_PACK_BUFFER,null);let We=mt!==null?pt.get(mt).__webglFramebuffer:null;A.bindFramebuffer(lt.FRAMEBUFFER,We);let Ee=lt.fenceSync(lt.SYNC_GPU_COMMANDS_COMPLETE,0);return lt.flush(),await rd(lt,Ee,4),lt.bindBuffer(lt.PIXEL_PACK_BUFFER,Pe),lt.getBufferSubData(lt.PIXEL_PACK_BUFFER,0,qt),lt.bindBuffer(lt.PIXEL_PACK_BUFFER,null),lt.deleteBuffer(Pe),lt.deleteSync(Ee),qt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,st=null,xt=0){let gt=Math.pow(2,-xt),_t=Math.floor(N.image.width*gt),qt=Math.floor(N.image.height*gt),Ut=st!==null?st.x:0,Yt=st!==null?st.y:0;Tt.setTexture2D(N,0),lt.copyTexSubImage2D(lt.TEXTURE_2D,xt,0,0,Ut,Yt,_t,qt),A.unbindTexture()},this.copyTextureToTexture=function(N,st,xt=null,gt=null,_t=0,qt=0){let Ut,Yt,Kt,ee,Wt,he,jt,Pe,We,Ee=N.isCompressedTexture?N.mipmaps[qt]:N.image;if(xt!==null)Ut=xt.max.x-xt.min.x,Yt=xt.max.y-xt.min.y,Kt=xt.isBox3?xt.max.z-xt.min.z:1,ee=xt.min.x,Wt=xt.min.y,he=xt.isBox3?xt.min.z:0;else{let Ct=Math.pow(2,-_t);Ut=Math.floor(Ee.width*Ct),Yt=Math.floor(Ee.height*Ct),N.isDataArrayTexture?Kt=Ee.depth:N.isData3DTexture?Kt=Math.floor(Ee.depth*Ct):Kt=1,ee=0,Wt=0,he=0}gt!==null?(jt=gt.x,Pe=gt.y,We=gt.z):(jt=0,Pe=0,We=0);let s=Xt.convert(st.format),a=Xt.convert(st.type),l;st.isData3DTexture?(Tt.setTexture3D(st,0),l=lt.TEXTURE_3D):st.isDataArrayTexture||st.isCompressedArrayTexture?(Tt.setTexture2DArray(st,0),l=lt.TEXTURE_2D_ARRAY):(Tt.setTexture2D(st,0),l=lt.TEXTURE_2D),A.activeTexture(lt.TEXTURE0),A.pixelStorei(lt.UNPACK_FLIP_Y_WEBGL,st.flipY),A.pixelStorei(lt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),A.pixelStorei(lt.UNPACK_ALIGNMENT,st.unpackAlignment);let p=A.getParameter(lt.UNPACK_ROW_LENGTH),v=A.getParameter(lt.UNPACK_IMAGE_HEIGHT),T=A.getParameter(lt.UNPACK_SKIP_PIXELS),D=A.getParameter(lt.UNPACK_SKIP_ROWS),$=A.getParameter(lt.UNPACK_SKIP_IMAGES);A.pixelStorei(lt.UNPACK_ROW_LENGTH,Ee.width),A.pixelStorei(lt.UNPACK_IMAGE_HEIGHT,Ee.height),A.pixelStorei(lt.UNPACK_SKIP_PIXELS,ee),A.pixelStorei(lt.UNPACK_SKIP_ROWS,Wt),A.pixelStorei(lt.UNPACK_SKIP_IMAGES,he);let j=N.isDataArrayTexture||N.isData3DTexture,ut=st.isDataArrayTexture||st.isData3DTexture;if(N.isDepthTexture){let Ct=pt.get(N),At=pt.get(st),Nt=pt.get(Ct.__renderTarget),ne=pt.get(At.__renderTarget);A.bindFramebuffer(lt.READ_FRAMEBUFFER,Nt.__webglFramebuffer),A.bindFramebuffer(lt.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let pe=0;pe<Kt;pe++)j&&(lt.framebufferTextureLayer(lt.READ_FRAMEBUFFER,lt.COLOR_ATTACHMENT0,pt.get(N).__webglTexture,_t,he+pe),lt.framebufferTextureLayer(lt.DRAW_FRAMEBUFFER,lt.COLOR_ATTACHMENT0,pt.get(st).__webglTexture,qt,We+pe)),lt.blitFramebuffer(ee,Wt,Ut,Yt,jt,Pe,Ut,Yt,lt.DEPTH_BUFFER_BIT,lt.NEAREST);A.bindFramebuffer(lt.READ_FRAMEBUFFER,null),A.bindFramebuffer(lt.DRAW_FRAMEBUFFER,null)}else if(_t!==0||N.isRenderTargetTexture||pt.has(N)){let Ct=pt.get(N),At=pt.get(st);A.bindFramebuffer(lt.READ_FRAMEBUFFER,K),A.bindFramebuffer(lt.DRAW_FRAMEBUFFER,U);for(let Nt=0;Nt<Kt;Nt++)j?lt.framebufferTextureLayer(lt.READ_FRAMEBUFFER,lt.COLOR_ATTACHMENT0,Ct.__webglTexture,_t,he+Nt):lt.framebufferTexture2D(lt.READ_FRAMEBUFFER,lt.COLOR_ATTACHMENT0,lt.TEXTURE_2D,Ct.__webglTexture,_t),ut?lt.framebufferTextureLayer(lt.DRAW_FRAMEBUFFER,lt.COLOR_ATTACHMENT0,At.__webglTexture,qt,We+Nt):lt.framebufferTexture2D(lt.DRAW_FRAMEBUFFER,lt.COLOR_ATTACHMENT0,lt.TEXTURE_2D,At.__webglTexture,qt),_t!==0?lt.blitFramebuffer(ee,Wt,Ut,Yt,jt,Pe,Ut,Yt,lt.COLOR_BUFFER_BIT,lt.NEAREST):ut?lt.copyTexSubImage3D(l,qt,jt,Pe,We+Nt,ee,Wt,Ut,Yt):lt.copyTexSubImage2D(l,qt,jt,Pe,ee,Wt,Ut,Yt);A.bindFramebuffer(lt.READ_FRAMEBUFFER,null),A.bindFramebuffer(lt.DRAW_FRAMEBUFFER,null)}else ut?N.isDataTexture||N.isData3DTexture?lt.texSubImage3D(l,qt,jt,Pe,We,Ut,Yt,Kt,s,a,Ee.data):st.isCompressedArrayTexture?lt.compressedTexSubImage3D(l,qt,jt,Pe,We,Ut,Yt,Kt,s,Ee.data):lt.texSubImage3D(l,qt,jt,Pe,We,Ut,Yt,Kt,s,a,Ee):N.isDataTexture?lt.texSubImage2D(lt.TEXTURE_2D,qt,jt,Pe,Ut,Yt,s,a,Ee.data):N.isCompressedTexture?lt.compressedTexSubImage2D(lt.TEXTURE_2D,qt,jt,Pe,Ee.width,Ee.height,s,Ee.data):lt.texSubImage2D(lt.TEXTURE_2D,qt,jt,Pe,Ut,Yt,s,a,Ee);A.pixelStorei(lt.UNPACK_ROW_LENGTH,p),A.pixelStorei(lt.UNPACK_IMAGE_HEIGHT,v),A.pixelStorei(lt.UNPACK_SKIP_PIXELS,T),A.pixelStorei(lt.UNPACK_SKIP_ROWS,D),A.pixelStorei(lt.UNPACK_SKIP_IMAGES,$),qt===0&&st.generateMipmaps&&lt.generateMipmap(l),A.unbindTexture()},this.initRenderTarget=function(N){pt.get(N).__webglFramebuffer===void 0&&Tt.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Tt.setTextureCube(N,0):N.isData3DTexture?Tt.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Tt.setTexture2DArray(N,0):Tt.setTexture2D(N,0),A.unbindTexture()},this.resetState=function(){tt=0,ct=0,mt=null,A.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}}});function qx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $x(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Zx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vd),this.state=Ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Jx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ir.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ve.DOLLY;break;case ir.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}break;case ir.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(eu)}function jx(n){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Kx(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(n.preventDefault(),this.dispatchEvent(eu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Vd))}function Qx(n){this.enabled!==!1&&this._handleKeyDown(n)}function tM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case rr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ve.TOUCH_ROTATE;break;case rr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case rr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ve.TOUCH_DOLLY_PAN;break;case rr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(eu)}function eM(n){switch(this._trackPointer(n),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ve.NONE}}function nM(n){this.enabled!==!1&&n.preventDefault()}function iM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var kd,eu,Vd,ic,zd,Yx,on,Nn,Ve,tu,rc,Hd=Pn(()=>{nc();kd={type:"change"},eu={type:"start"},Vd={type:"end"},ic=new ji,zd=new Fn,Yx=Math.cos(70*Nh.DEG2RAD),on=new at,Nn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},tu=1e-6,rc=class extends To{constructor(t,e=null){super(t,e),this.state=Ve.NONE,this.target=new at,this.cursor=new at,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ir.ROTATE,MIDDLE:ir.DOLLY,RIGHT:ir.PAN},this.touches={ONE:rr.ROTATE,TWO:rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new at,this._lastQuaternion=new Un,this._lastTargetPosition=new at,this._quat=new Un().setFromUnitVectors(t.up,new at(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bs,this._sphericalDelta=new bs,this._scale=1,this._panOffset=new at,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new at,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$x.bind(this),this._onPointerDown=qx.bind(this),this._onPointerUp=Zx.bind(this),this._onContextMenu=nM.bind(this),this._onMouseWheel=Kx.bind(this),this._onKeyDown=Qx.bind(this),this._onTouchStart=tM.bind(this),this._onTouchMove=eM.bind(this),this._onMouseDown=Jx.bind(this),this._onMouseMove=jx.bind(this),this._interceptControlDown=iM.bind(this),this._interceptControlUp=rM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ve.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kd),this.update(),this.state=Ve.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;on.copy(e).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Nn:i>Math.PI&&(i-=Nn),r<-Math.PI?r+=Nn:r>Math.PI&&(r-=Nn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),e.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){let u=on.length();c=this._clampDistance(u*this._scale);let f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){let u=new at(this._mouse.x,this._mouse.y,0);u.unproject(this.object);let f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;let d=new at(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),c=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(ic.origin.copy(this.object.position),ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ic.direction))<Yx?this.object.lookAt(this.target):(zd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ic.intersectPlane(zd,this.target))))}else if(this.object.isOrthographicCamera){let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>tu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>tu||this._lastTargetPosition.distanceToSquared(this.target)>tu?(this.dispatchEvent(kd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Nn/60*this.autoRotateSpeed*t:Nn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){on.setFromMatrixColumn(e,0),on.multiplyScalar(-t),this._panOffset.add(on)}_panUp(t,e){this.screenSpacePanning===!0?on.setFromMatrixColumn(e,1):(on.setFromMatrixColumn(e,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(t),this._panOffset.add(on)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;on.copy(r).sub(this.target);let o=on.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,o=e-i.top,c=i.width,u=i.height;this._mouse.x=r/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let c=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new se,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function Gd(n,t,e,i){n.onBeforeCompile=r=>{r.uniforms.uCut={value:t-.05},r.uniforms.uBase={value:i||new ge(1,1,1)},r.uniforms.uBottom={value:t},r.vertexShader=`varying float vZ;
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
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function Xd(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let r=i.getContext("2d");r.font="600 84px Inter, system-ui, sans-serif",r.fillStyle="#"+new ge(t).getHexString(),r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,64);let o=new mo(i);o.colorSpace=wn;let c=new fo(new _s({map:o,depthTest:!1,transparent:!0}));return c.scale.set(e*2,e,1),c.renderOrder=6,c}var $n,Ls,sM,sc,Wd=Pn(()=>{nc();Hd();$n={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa"},Ls={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};sM=(n,t)=>n.some(e=>e.key===t);sc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new Ql({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new lo,this.camera=new vn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new rc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new So(16777215,4478310,1.6));let t=new Ss(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new Ss(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new ii,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=r=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&r-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=r,this.onFrame&&this.onFrame(r),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,r=new at((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),c=new at(-.45,-.8,.75).normalize(),u=[];for(let y of[t[0],e[0]])for(let _ of[t[1],e[1]])for(let b of[t[2],e[2]])u.push(new at(y,_,b));let f=r.clone(),d=o*2,g=()=>{this.camera.position.copy(f).addScaledVector(c,d),this.camera.near=d/100,this.camera.far=d*100,this.camera.lookAt(f),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let y=0;y<8;y++){g();let _=1/0,b=-1/0,E=1/0,P=-1/0;for(let F of u){let B=F.clone().project(this.camera);_=Math.min(_,B.x),b=Math.max(b,B.x),E=Math.min(E,B.y),P=Math.max(P,B.y)}let S=Math.max((b-_)/2,(P-E)/2);if(!(S>0))break;let M=d*Math.tan(this.camera.fov*Math.PI/360),O=M*this.camera.aspect,G=new at().setFromMatrixColumn(this.camera.matrixWorld,0),R=new at().setFromMatrixColumn(this.camera.matrixWorld,1);f.addScaledVector(G,(_+b)/2*O).addScaledVector(R,(E+P)/2*M),d*=S/(1-i)}g(),this.controls.target.copy(f),this.controls.update()}showPart(t,e=[]){this.clear();let i=new $e;i.setAttribute("position",new Ge(t.positions,3)),i.setIndex(new Ge(t.indices,1)),i.computeVertexNormals();let r=new Fe(i,new zn({color:9348283,metalness:.15,roughness:.55,side:yn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(r),this.pickMesh=r;let o=new br(new xs(i,25),new si({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let u of e)this.addLoops(u.loops,u.z,u.color,u.dashed,u.opacity);i.computeBoundingBox();let c=i.boundingBox;this.keepCamera||this.frame(c.min.toArray(),c.max.toArray())}addLoops(t,e,i,r,o=.95){for(let c of t){let u=c.map(([y,_])=>new at(y,_,e)),f=new $e().setFromPoints([...u,u[0]]),d=r?new yo({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new si({color:i,transparent:!0,opacity:o,depthTest:!1}),g=new Sr(f,d);r&&g.computeLineDistances(),g.renderOrder=2,this.content.add(g)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let r=t.getBoundingClientRect(),o=new wo;if(o.setFromCamera(new se((i.clientX-r.left)/r.width*2-1,-((i.clientY-r.top)/r.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let f=o.intersectObjects(this.markers)[0];if(f?.object.userData.axis){this.onAxis?.(f.object.userData.axis);return}if(f){this.onMarker(f.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let c=o.intersectObject(this.pickMesh)[0];if(!c||!c.face)return;let u=c.face.normal.clone();u.dot(o.ray.direction)>0&&u.negate(),this.onPick([u.x,u.y,u.z])})}showZero({stock:t,part:e,points:i,selected:r,zFace:o,color:c,accent:u="#4c6ef5"}){this.clear();let f=t.maxX-t.minX,d=t.maxY-t.minY,g=t.top-t.bottom,y=Math.max(f,d,g),_=new Qi(f,d,g);_.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let b=new Fe(_,new zn({color:c,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(b.renderOrder=2,this.content.add(b),this.content.add(new br(new xs(_),new si({color:new ge(c).multiplyScalar(.6)}))),e){let M=new $e;M.setAttribute("position",new Ge(e.positions,3)),M.setIndex(new Ge(e.indices,1)),M.computeVertexNormals(),this.partMesh=new Fe(M,new zn({color:9348283,metalness:.15,roughness:.55})),this.content.add(this.partMesh)}else this.partMesh=null;let E=o==="bed"?t.bottom:t.top,P=y*.014;this.markers=[];for(let M of i){let O=M.key===r,G=new Fe(new wr(O?P*1.3:P,24,16),new Bn({color:O?u:16777215}));if(G.position.set(M.x,M.y,E),G.userData.key=M.key,G.renderOrder=4,G.material.depthTest=!1,!O){let F=new Fe(new wr(P*1.25,24,16),new Bn({color:6187893,depthTest:!1}));F.renderOrder=3,G.add(F)}let R=new Fe(new wr(P*3.5,12,8),new Bn({visible:!1}));if(R.userData.key=M.key,G.add(R),this.markers.push(R),this.content.add(G),O){let F=new Fe(new vo(P*1.6,P*2,40),new Bn({color:u,transparent:!0,depthTest:!1,side:yn}));F.position.copy(G.position),F.renderOrder=4,this.content.add(F),this.pulse=F;let B=y*.24;for(let[Y,C,V]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let W=new Eo(new at(...Y),G.position,B,C,B*.15,B*.065);W.line.visible=!1;let et=new Fe(new Di(y*.0028,y*.0028,B*.86,12),new Bn({color:C,depthTest:!1}));et.position.y=B*.43,et.renderOrder=5,W.add(et),W.cone.material.depthTest=!1,W.renderOrder=5,W.cone.renderOrder=5,this.content.add(W);let nt=Xd(V,C,y*.05);nt.position.copy(G.position).add(new at(...Y).multiplyScalar(B*1.18)),this.content.add(nt);let Q=new Fe(new Di(B*.1,B*.1,B*1.3,10),new Bn({visible:!1}));Q.quaternion.setFromUnitVectors(new at(0,1,0),new at(...Y)),Q.position.copy(G.position).add(new at(...Y).multiplyScalar(B*.65)),Q.userData.axis=V.toLowerCase(),this.content.add(Q),this.markers.unshift(Q)}}}let S=Xd("Front",9675444,y*.04);S.position.set((t.minX+t.maxX)/2,t.minY-y*.08,t.bottom),this.content.add(S),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),sM(i,r)||(this.pulse=null),this.onFrame=M=>{if(!this.pulse)return;let O=M%1600/1600;this.pulse.scale.setScalar(1+O*1.6),this.pulse.material.opacity=.8*(1-O),this.pulse.lookAt(this.camera.position)}}spin(t,e=700){let i=this.partMesh;if(!i)return Promise.resolve();i.geometry.computeBoundingBox();let r=i.geometry.boundingBox.getCenter(new at),o=t==="x"?new at(1,0,0):new at(0,0,1);i.matrixAutoUpdate=!1;let c=performance.now();return new Promise(u=>{let f=d=>{let g=Math.min(1,(d-c)/e),y=g<.5?2*g*g:1-(-2*g+2)**2/2;i.matrix.makeTranslation(r.x,r.y,r.z).multiply(new ze().makeRotationAxis(o,Math.PI*y)).multiply(new ze().makeTranslation(-r.x,-r.y,-r.z)),i.matrixWorldNeedsUpdate=!0,g<1&&i.parent?requestAnimationFrame(f):u()};requestAnimationFrame(f)})}showStock(t,e,i){this.clear(),this.keepCamera=!1;let r=t.nx,o=t.ny,c=r*o,u=new Float32Array(c*3),f=new Float32Array(c*3),d=new ge(e);for(let O=0;O<o;O++)for(let G=0;G<r;G++){let R=O*r+G;u[R*3]=t.x0+G*t.cell,u[R*3+1]=t.y0+O*t.cell,u[R*3+2]=t.h[R],f[R*3]=d.r,f[R*3+1]=d.g,f[R*3+2]=d.b}let g=new Uint32Array((r-1)*(o-1)*6),y=0;for(let O=0;O<o-1;O++)for(let G=0;G<r-1;G++){let R=O*r+G,F=R+1,B=R+r,Y=B+1;g[y++]=R,g[y++]=F,g[y++]=Y,g[y++]=R,g[y++]=Y,g[y++]=B}let _=new $e;_.setAttribute("position",new Ge(u,3).setUsage(Ar)),_.setAttribute("color",new Ge(f,3).setUsage(Ar));let b=new Float32Array(c*3);for(let O=0;O<c;O++)b[O*3+2]=1;_.setAttribute("normal",new Ge(b,3).setUsage(Ar));let E=new Float32Array(c*4);for(let O=0;O<c;O++)E[O*4+2]=t.h[O],E[O*4+3]=t.h[O];_.setAttribute("wall",new Ge(E,4).setUsage(Ar)),_.setIndex(new Ge(g,1));let P=new zn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Ls.aluminum?.5:.05,side:yn});Gd(P,t.bottom,!1,d);let S=new Fe(_,P);this.content.add(S),this.stock={hm:t,geo:_,base:d,sides:this.makeSides(t,d)};let M=new zn({color:d.clone().multiplyScalar(.7),roughness:.9,side:yn});if(Gd(M,t.bottom,!0),this.content.add(new Fe(_,M)),i){let O=new $e;O.setAttribute("position",new Ge(i.positions,3)),O.setIndex(new Ge(i.indices,1)),O.computeVertexNormals(),this.partGhost=new Fe(O,new zn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new ii,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(r-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let y=0;y<t.nx;y++)i.push(y);for(let y=1;y<t.ny;y++)i.push(y*t.nx+t.nx-1);for(let y=t.nx-2;y>=0;y--)i.push((t.ny-1)*t.nx+y);for(let y=t.ny-2;y>=0;y--)i.push(y*t.nx);let r=new Float32Array(i.length*6),o=new Float32Array(i.length*6),c=[],u=[[0,-1],[1,0],[0,1],[-1,0]],f=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let y=0;y<i.length;y++){let _=i[y],b=t.x0+_%t.nx*t.cell,E=t.y0+Math.floor(_/t.nx)*t.cell;r.set([b,E,t.h[_],b,E,t.bottom],y*6);let[P,S]=u[y<f[0]?0:y<f[1]?1:y<f[2]?2:3];if(o.set([P,S,0,P,S,0],y*6),y<i.length-1){let M=y*2;c.push(M,M+1,M+3,M,M+3,M+2)}}let d=new $e;d.setAttribute("position",new Ge(r,3).setUsage(Ar)),d.setAttribute("normal",new Ge(o,3)),d.setIndex(c);let g=new Fe(d,new zn({color:e.clone().multiplyScalar(.85),roughness:.85,side:yn}));return this.content.add(g),{g:d,edge:i}}refreshStock(t,e,i){let r=this.stock;if(!r||e<t)return;let{hm:o,geo:c,base:u}=r,f=o.nx,d=o.ny,g=o.h,y=c.attributes.position,_=c.attributes.color,b=c.attributes.normal,E=c.attributes.wall,P=new ge,S=Math.max(0,t),M=Math.min(d-1,e),O=o.cell*1.5,G=(C,V,W)=>{let et=g[V*f+C],nt=0;for(let Q=-1;Q<=1;Q++)for(let K=-1;K<=1;K++){let U=C+K,tt=V+Q;(K||Q)&&U>=0&&tt>=0&&U<f&&tt<d&&(nt=Math.max(nt,W*(g[tt*f+U]-et)))}return nt};for(let C=S;C<=M;C++)for(let V=0;V<f;V++){let W=C*f+V;y.array[W*3]=o.x0+V*o.cell+(o.sx?o.sx[W]:0),y.array[W*3+1]=o.y0+C*o.cell+(o.sy?o.sy[W]:0),y.array[W*3+2]=g[W];let et=o.op[W];et?(P.copy(u).lerp(i[et-1],.28),P.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(g[W]-o.bottom)/Math.max(1,o.top-o.bottom))))):P.copy(u),_.array[W*3]=P.r,_.array[W*3+1]=P.g,_.array[W*3+2]=P.b}let R=y.array,F=Math.max(0,S-1),B=Math.min(d-1,M+1);for(let C=F;C<=B;C++)for(let V=0;V<f;V++){let W=C*f+V,et=E.array,nt=G(V,C,1),Q=G(V,C,-1);if(et[W*4]=0,et[W*4+1]=0,et[W*4+2]=g[W],et[W*4+3]=g[W],o.wx&&(o.wx[W]||o.wy[W])&&(nt>O||Q>O)){et[W*4]=o.wx[W],et[W*4+1]=o.wy[W],et[W*4+2]=g[W]-Q,et[W*4+3]=g[W]+nt,b.array[W*3]=0,b.array[W*3+1]=0,b.array[W*3+2]=1;continue}let K=(C*f+Math.max(0,V-1))*3,U=(C*f+Math.min(f-1,V+1))*3,tt=(Math.max(0,C-1)*f+V)*3,ct=(Math.min(d-1,C+1)*f+V)*3,mt=R[U]-R[K],ht=R[U+1]-R[K+1],yt=R[U+2]-R[K+2],bt=R[ct]-R[tt],Lt=R[ct+1]-R[tt+1],zt=R[ct+2]-R[tt+2],le=ht*zt-yt*Lt,ae=yt*bt-mt*zt,dt=mt*Lt-ht*bt,wt=Math.hypot(le,ae,dt)||1;dt<0&&(le=-le,ae=-ae,dt=-dt),b.array[W*3]=le/wt,b.array[W*3+1]=ae/wt,b.array[W*3+2]=dt/wt}y.addUpdateRange(S*f*3,(M-S+1)*f*3),_.addUpdateRange(S*f*3,(M-S+1)*f*3),b.addUpdateRange(F*f*3,(B-F+1)*f*3),E.addUpdateRange(F*f*4,(B-F+1)*f*4),y.needsUpdate=!0,_.needsUpdate=!0,b.needsUpdate=!0,E.needsUpdate=!0;let Y=r.sides.g.attributes.position;r.sides.edge.forEach((C,V)=>{Y.array[V*6+2]=g[C]}),Y.needsUpdate=!0}setTool(t,e){for(let y of[...this.tool.children])this.tool.remove(y),y.geometry.dispose(),y.material.dispose();let i=t.diameter/2,r=t.kind==="surfacing"||i>6.35,o=r?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),c=new zn({color:14015457,metalness:.85,roughness:.3}),u;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let y=i/Math.tan((t.kind==="drill"?118:60)*Math.PI/360);u=new Fe(new ys(i,y,48),c),u.rotation.x=-Math.PI/2,u.position.z=y/2}else u=new Fe(new Di(i,i,o,64),c),u.rotation.x=Math.PI/2,u.position.z=o/2;let f=r?3.175:Math.max(i,Math.min(3.175,i*1.5)),d=20,g=new Fe(new Di(f,f,d,32),new zn({color:11187132,metalness:.8,roughness:.35}));g.rotation.x=Math.PI/2,g.position.z=o+d/2,this.tool.add(u,g)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new ii;for(let e of t){let i=e.track;if(!i)continue;let r=[],o=[];for(let u=4;u<i.length;u+=4)(i[u+3]>0?r:o).push(i[u-4],i[u-3],i[u-2]+.02,i[u],i[u+1],i[u+2]+.02);let c=(u,f,d)=>{if(!u.length)return;let g=new $e;g.setAttribute("position",new Xe(u,3));let y=new br(g,new si({color:f,transparent:!0,opacity:d}));y.renderOrder=3,this.paths.add(y)};c(r,$n[e.kind]||"#1abc9c",.75),c(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function aM(){return new Promise((n,t)=>{let e=indexedDB.open(oM,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Yd(n,t){let e=await aM();return new Promise((i,r)=>{let o=e.transaction("kv",n),c=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(c?.result)},o.onerror=o.onabort=()=>{e.close(),r(o.error)}})}var oM,qd,$d,Zd=Pn(()=>{oM="nccam";qd=n=>Yd("readonly",t=>t.get(n)).catch(()=>null),$d=(n,t)=>Yd("readwrite",e=>e.put(t,n)).catch(()=>{})});var Kd={};Am(Kd,{mountApp:()=>fM});function fM(n,t,e){let i={get:async z=>{let J=await fetch(t.base+z);if(!J.ok)throw new Error(`${z}: ${J.status}`);return J.json()},post:(z,J)=>fetch(t.base+z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(J)})},r={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,tools:[],numbering:"slot",safeZ:null,connected:!1,limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:""},o=new sc,c=0;(async()=>{let[z,J,k,q]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);r.numbering=z?.tool?.numbering==="toolId"?"toolId":"slot";let ft=Number(z?.safeZHeight);r.safeZ=Number.isFinite(ft)?ft:null,r.tools=Au(Array.isArray(J)?J:J?.tools);let Dt=k?.settings||{},Mt=vt=>{let Bt=parseFloat(Dt[vt]?.value);return Number.isFinite(Bt)&&Bt>0?Bt:null};r.limits={maxRpm:Mt("30")||void 0,minRpm:Mt("31")||void 0,maxFeed:Math.min(Mt("110")||1/0,Mt("111")||1/0,1/0)},Number.isFinite(r.limits.maxFeed)||delete r.limits.maxFeed,r.maxRapid=Math.min(Mt("110")||5e3,Mt("111")||5e3),Mt("130")&&Mt("131")&&(r.travel={x:Mt("130"),y:Mt("131"),z:Mt("132")}),r.connected=!!q?.machineState?.connected,S();let It=await qd("last");It?.bytes&&!r.part&&!r.loading&&u(null,It)})();async function u(z,J=null){if(!z&&!J)return;let k=J?J.name:z.name;r.fileName=k,r.loading=`Reading ${k}\u2026`,r.error="",r.plan=null,r.result=null,r.analysis=null,r.part=null,r.step=1,r.maxStep=1,S();try{let q=J?J.bytes:await z.arrayBuffer();r.bytes=q.slice(0);let ft=await e("load",{bytes:q},[q]);if(r.sides=ft.sides,J?.upPath?.length){r.job=null;for(let Dt of J.upPath)await d(Dt,!0);r.job={...Sc(r.analysis),...J.job},await b()}else await d(ft.best);P()}catch(q){r.error=q.message||String(q),r.fileName=""}r.loading="",S()}let f={top:"bottom",bottom:"top",front:"back",back:"front",left:"right",right:"left"};async function d(z,J=!1,k=!1){k||(r.loading="Turning the part\u2026",S());let ft=await(z&&!Array.isArray(z)&&typeof z=="object"?e("turn",{how:z.turn}):e(Array.isArray(z)?"tilt":"orient",Array.isArray(z)?{normal:z}:{up:z}));return g(z,ft,J)}function g(z,J,k){let q=z&&!Array.isArray(z)&&typeof z=="object";if(q?r.up=z.turn==="over"?f[r.up]||"custom":r.up:r.up=Array.isArray(z)?"custom":z,r.upPath=q||Array.isArray(z)?[...r.upPath||[],z]:[z],k){r.part={positions:J.positions,indices:J.indices},r.analysis=J.analysis,r.loading="";return}r.part={positions:J.positions,indices:J.indices},r.analysis=J.analysis;let ft=r.job;return r.job=Sc(J.analysis),ft&&Object.assign(r.job,{material:ft.material,finish:ft.finish,zero:ft.zero,tabs:ft.tabs,stock:{...r.job.stock,fit:ft.stock.fit,margin:ft.stock.margin,extraTop:ft.stock.extraTop}}),r.loading="",b()}let y=!1;async function _(z){if(y||!r.part)return;y=!0;let J={turn:z==="z"?"over":"around"};try{let[k]=await Promise.all([e("turn",{how:J.turn}),o.spin(z==="z"?"x":"z")]);await g(J,k,!1)}catch(k){r.error=k.message||String(k),S()}y=!1}async function b(z=!1){if(!r.part)return;let J=++c;r.planning=!0,z&&(r.result=null),S();try{let k=await e("plan",{tools:r.tools,job:r.job,limits:r.limits,paths:z,gcodeOptions:{name:r.fileName,numbering:r.numbering,safeZHeightMm:r.safeZ},timing:{maxRapid:r.maxRapid||5e3}});if(J!==c)return;r.plan=k.plan,P(),z&&(r.result=k,r.simChecks=null)}catch(k){J===c&&(r.error=k.message||String(k))}J===c&&(r.planning=!1,S())}let E=null;function P(){!r.bytes||!r.job||(clearTimeout(E),E=setTimeout(()=>$d("last",{name:r.fileName,bytes:r.bytes,upPath:r.upPath,job:r.job,savedAt:Date.now()}),400))}function S(){if(!n.isConnected)return;let z=n.querySelector("[data-keep-scroll]"),J=z?z.scrollTop:0,k=r.step,q=["Drop a STEP file. ncCAM finds the pockets, holes and outline for you.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][k-1],ft=[r.part?"Your part":"Open your part","What are you cutting it from?","Here\u2019s the plan",r.simChecks&&!r.simChecks.ok?"Check the warnings":"Ready to cut"][k-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCAM<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">STEP file to G-code</div></div>
        <div class="ncc-steps">${cM.map((It,vt)=>{let Bt=vt+1,Gt=Bt===k?"on":Bt<r.maxStep||Bt<k?"done":"";return`<button class="ncc-step ${Gt}" type="button" data-go="${Bt}" ${Bt<=r.maxStep?"":"disabled"}><span class="ncc-num">${Gt==="done"?"\u2713":Bt}</span>${Ye(It)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${hn.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${Ye(ft)}</h1><p class="ncc-lede">${Ye(q)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${r.connected?"ok":""}"></span>${r.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${k===3?"fixed":""}">${[O,V,yt,zt][k-1]()}</div>
        <div class="ncc-foot">${M()}</div>
      </section>
      ${r.toast?`<div class="ncc-toast" role="status">${Ye(r.toast)}</div>`:""}`;let Dt=n.querySelector("[data-keep-scroll]");Dt&&(Dt.scrollTop=J);let Mt=n.querySelector("[data-viewer]");if(Mt){Mt.replaceWith(o.el);let It=r.loading||k===4&&!r.result?`<div class="ncc-busy"><span class="ncc-spin"></span>${Ye(r.loading||"Making toolpaths\u2026")}</div>`:"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(vt=>vt.remove()),o.el.insertAdjacentHTML("beforeend",(k===1?B():k===4?Pt():"")+It),o.fit(),k===1&&C(),k===2&&ht(),k===3&&bt(),k===4&&r.result&&re()}}function M(){let z=`<button class="ncc-back" type="button" data-go="${r.step-1}" ${r.step>1?"":"disabled"}>Back</button>`;if(r.step===1)return`${z}<button class="ncc-next" type="button" data-go="2" ${r.plan&&r.plan.ops.length&&!r.loading?"":"disabled"}>Next: Stock ${hn.next}</button>`;if(r.step===2)return`${z}<button class="ncc-next" type="button" data-go="3">Next: Operations ${hn.next}</button>`;if(r.step===3){let k=r.plan&&r.plan.ops.some(q=>q.enabled);return`${z}<button class="ncc-next" type="button" data-go="4" ${k&&!r.planning?"":"disabled"}>Make toolpaths ${hn.next}</button>`}let J=r.simChecks&&!r.simChecks.ok;return`${z}${J?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${r.result&&r.simChecks&&!J?"":"disabled"}>${hn.load}Load into ncSender</button>`}function O(){if(!r.part&&!r.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${hn.upload}</div>
        <h2>Drop a STEP file here</h2>
        <p>Export your part from Fusion, Onshape, FreeCAD or SolidWorks as <strong>.step</strong> or <strong>.stp</strong>. Millimetres or inches both work.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open STEP file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        ${r.error?`<div class="ncc-hint bad" style="max-width: 520px">${hn.warn}<span>${Ye(r.error)}</span></div>`:""}
        ${r.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${hn.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCAM can pick them.</span></div>`}
      </div>`;let z=r.analysis;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${hn.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${Ye(r.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${z?`${Mn(z.size[0])} \xD7 ${Mn(z.size[1])} \xD7 ${Mn(z.size[2])} mm`:"&nbsp;"}</div></div>
          </div>
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        </div>
        <div data-viewer></div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card">
          <div class="ncc-label">Which side faces up?</div>
          <div class="ncc-picks">${hM.map(([J,k])=>{let q=!r.sides||r.sides[J].reachable;return`<button class="ncc-pick ${r.up===J?"sel":""}" type="button" data-up="${J}" ${q?"":"disabled"} ${q?"":`title="With the ${k.toLowerCase()} up, some faces point down and the tool can\u2019t reach them"`}>${dn(uM[J],24,'stroke-width="1.8"')}${k}${q?"":"<small>Can\u2019t reach</small>"}</button>`}).join("")}</div>
          <div class="ncc-row-sub">Or click a flat face on the model to put it on top.</div>
        </div>
        ${G()}
        ${F(!0)}
      </div>`}function G(){if(!r.plan)return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-row-sub">${r.planning?"Looking\u2026":""}</div></div>`;let z=new Map;for(let k of r.plan.ops.filter(q=>q.kind!=="face"&&q.kind!=="corners")){let q=R(k),ft=z.get(q)||{o:k,name:q,n:0};ft.n+=k.count||1,z.set(q,ft)}let J=k=>k.n<2?k.name:k.name.replace(/^(Pocket|Step), /,(q,ft)=>`${k.n} ${ft.toLowerCase()}s, `);return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-found">${[...z.values()].map(k=>`<div class="ncc-row"><span style="display: flex; align-items: center; gap: 8px"><span class="ncc-swatch" style="background: ${$n[k.o.kind]}"></span>${Ye(J(k))}</span><span class="ncc-ok">\u2713</span></div>`).join("")||'<div class="ncc-row-sub">Nothing to cut from this side.</div>'}</div></div>`}function R(z){let J=z.detail.replace(/ · spiral$/,"");return z.kind==="cutout"?`Outline, ${Mn(z.zTop)} mm cut-out`:z.kind==="hole"||z.kind==="drill"?`${z.centers.length>1?`${z.centers.length} holes`:"Hole"}, ${J}`:z.kind==="step"?`Step, ${J}`:`Pocket, ${J.split(" \xB7 ").pop()}`}function F(z){if(!r.plan)return"";let J=r.plan.warnings.filter(k=>!z||k.kind==="undercut"||k.kind==="sloped"||k.kind==="edges");return!J.length&&z?`<div class="ncc-hint">${hn.info}<span>Everything can be cut from the top in one setup.</span></div>`:J.map(k=>`<div class="ncc-hint ${k.kind==="notool"?"bad":""}">${k.kind==="notool"?hn.warn:hn.info}<span>${Ye(k.text)}</span></div>`).join("")}function B(){if(!r.plan)return"";let z=[...new Set(r.plan.ops.filter(k=>k.kind!=="face"&&k.kind!=="corners").map(k=>k.kind))],J={pocket:"Pockets",hole:"Holes",drill:"Holes",step:"Steps",cutout:"Outline"};return`<div class="ncc-overlay tr">${z.map(k=>`<span class="ncc-chip"><span class="ncc-swatch" style="background: ${$n[k]}"></span>${J[k]}</span>`).join("")}</div>
      <div class="ncc-overlay bl"><span class="ncc-chip">Drag to rotate</span><span class="ncc-chip">Scroll to zoom</span><span class="ncc-chip">Click a face to put it on top</span></div>`}let Y=null;function C(){if(!r.part)return;Vt=null,mt=null;let z=r.part.positions,J=(r.plan?.ops||[]).filter(k=>k.kind!=="face"&&k.kind!=="corners").flatMap(k=>k.kind==="cutout"?[{loops:k.region,z:k.zTop+.05,color:$n.cutout,dashed:!0}]:k.centers&&!k.region?[{loops:k.centers.map(q=>jd(q)),z:k.zTop+.05,color:$n[k.kind]}]:[{loops:k.region,z:k.zTop+.05,color:$n[k.kind]}]);o.keepCamera=Y===z,o.showPart(r.part,J),Y=z,o.onFrame=null,o.onPick=async k=>{if(r.loading)return;let q=r.up;try{await d(k),r.analysis.undercut&&q!=="custom"&&(!r.sides||r.sides[q]?.reachable)&&(await d(q),X("With that face up, some of the part can\u2019t be reached from the top."))}catch(ft){r.error=ft.message,S()}}}function V(){let z=r.job,J=r.plan?.stock||Zo(r.analysis,z),k=Object.entries(dr).map(([ft,Dt])=>`<button class="ncc-pick ncc-mat ${z.material===ft?"sel":""}" type="button" data-material="${ft}"><span class="ncc-mat-swatch" style="background: ${Ls[ft]}"></span>${Ye(Dt.name)}<small>${Ye(Dt.note)}</small></button>`).join(""),q=(ft,Dt,Mt)=>`<div class="ncc-field"><label for="ncc-${ft}">${Dt}</label><input id="ncc-${ft}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${ft}" value="${Math.round(Mt*100)/100}" ${z.stock.fit?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${k}</div></div>
        <div class="ncc-card">
          ${W("fit","Size the stock to the part",`Adds ${Mn(z.stock.margin)} mm on every side and ${Mn(z.stock.extraTop)} mm on top`,z.stock.fit)}
          <div class="ncc-fields">${q("width","Width X (mm)",J.width)}${q("depth","Depth Y (mm)",J.depth)}${q("thickness","Thickness Z (mm)",J.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${W("tabs","Leave tabs to hold the part",z.tabs.enabled?`${Mn(nt().height)} \xD7 ${Mn(nt().length)} mm, so the part stays put until you cut it free`:"The part comes loose at the end",z.tabs.enabled)}
          ${z.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${z.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${z.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${z.tabs.count>=12?"disabled":""}>+</button></div></div>
          ${tt("height","Tab thickness","Thinner tabs","Thicker tabs")}
          ${tt("length","Tab length","Shorter tabs","Longer tabs")}`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${ct(J)}
          <div style="font-size: 14px">X Y zero: <strong>${Ye(et(z.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${z.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${z.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let W=(z,J,k,q)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${Ye(J)}</div><div class="ncc-row-sub">${Ye(k)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${q}" aria-label="${Ye(J)}" data-toggle="${z}"></button></div>`;function et(z){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[z]}let nt=()=>({...Vi(r.job.material),...Object.fromEntries(["height","length"].filter(z=>r.job.tabs[z]!=null).map(z=>[z,r.job.tabs[z]]))}),Q=.5,K=10,U=.5;function tt(z,J,k,q){let ft=nt()[z];return`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${J}</span><div class="ncc-stepper"><button type="button" data-tabsize="${z}" data-by="-1" aria-label="${k}" ${ft<=Q?"disabled":""}>\u2212</button><span class="ncc-mono">${Mn(ft)} mm</span><button type="button" data-tabsize="${z}" data-by="1" aria-label="${q}" ${ft>=K?"disabled":""}>+</button></div></div>`}function ct(z){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${Mn(z.width)} \xD7 ${Mn(z.depth)} \xD7 ${Mn(z.thickness)} mm stock \xB7 tap a point for zero, an arrow to turn the part</div>`}let mt=null;function ht(){let z=r.plan?.stock||Zo(r.analysis,r.job),J=Iu.map(ft=>({key:ft,...bc(z,{xy:ft,z:"top"})})),k=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",q=`${r.part?.positions?.length}|${z.width}|${z.depth}|${z.thickness}`;o.keepCamera=mt===q,o.showZero({stock:z,part:r.part,points:J,selected:r.job.zero.xy,zFace:r.job.zero.z,color:Ls[r.job.material],accent:k}),mt=q,Y=null,Vt=null,o.onPick=null,o.onMarker=ft=>{ft!==r.job.zero.xy&&(r.job.zero.xy=ft,_e())},o.onAxis=ft=>_(ft)}function yt(){let z=r.plan;if(!z)return'<div class="ncc-busy" style="position: static; flex: 1"><span class="ncc-spin"></span>Planning\u2026</div>';let J=z.ops.map(vt=>{let Bt=Lt(vt);return`<div class="ncc-op ${vt.enabled?"":"off"} ${r.focusOp===vt.id?"focus":""}" data-focus="${vt.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${$n[vt.kind]} 16%, transparent); color: ${$n[vt.kind]}">${hn[vt.kind]||hn.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${Ye(vt.label)}</div><div class="ncc-op-sub ncc-mono">${Ye(vt.detail)}</div></div>
        <select class="ncc-select" data-tool="${vt.id}" aria-label="Tool for ${Ye(vt.label)}">${Bt.map(Gt=>`<option value="${Gt.id}" ${Gt.id===vt.tool.id?"selected":""}>T${pr(Gt,r.numbering)} \xB7 ${Ye(Gt.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${vt.enabled}" aria-label="${Ye(vt.label)}" data-op="${vt.id}"></button>
      </div>`}).join(""),k=Jo(z),q=new Map;for(let vt of z.ops)vt.enabled&&vt.kind!=="face"&&q.set(vt.tool.id,(q.get(vt.tool.id)||0)+1);let ft=[...q].sort((vt,Bt)=>Bt[1]-vt[1])[0]?.[0],Dt=z.ops.find(vt=>vt.enabled&&vt.tool.id===ft)||z.ops.find(vt=>vt.enabled),Mt=Dt?.feeds,It=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(Wn).map(([vt,Bt])=>`<button type="button" class="${r.job.finish===vt?"sel":""}" data-finish="${vt}">${Bt.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${{fast:"Bigger steps, no finishing pass.",balanced:"Leaves 0.2 mm on the walls, then a clean finishing pass.",smooth:"Lighter steps and a finishing pass, for the best walls."}[r.job.finish]}</div>
            ${Mt?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${Ye(Dt.tool.name)}<br>${Ye(dr[r.job.material].name)} \xB7 ${Mt.rpm.toLocaleString()} RPM<br>${Mt.feed.toLocaleString()} mm/min \xB7 ${Mn(Mt.stepdown,2)} mm per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${k.map(vt=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${pr(vt,r.numbering)}</span> ${Ye(vt.name)}</span><span class="ncc-slot ${vt.toolNumber?"":"hand"}">${vt.toolNumber?`Slot ${vt.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${k.some(vt=>!vt.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops"><div class="ncc-ops">${J}</div>${F(!1)}<div class="ncc-plan-pair-in">${It}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${It}</div>
      </div>`}function bt(){let J=(r.plan?.ops||[]).filter(k=>k.enabled&&k.kind!=="face").map(k=>{let q=r.focusOp&&r.focusOp!==k.id;return{loops:k.region||(k.centers||[]).map(Dt=>jd(Dt)),z:k.kind==="cutout"?k.zTop+.05:Math.max(k.zBottom,0)+.05,color:$n[k.kind],dashed:k.kind==="cutout",opacity:q?.2:1,top:k.zTop}});o.keepCamera=Y===r.part?.positions,o.showPart(r.part,J),Y=r.part?.positions,Vt=null,mt=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function Lt(z){let J=z.kind==="drill"?["drill"]:z.kind==="face"?["surfacing","flat"]:["flat"],k=r.tools.filter(q=>J.includes(q.kind)).sort((q,ft)=>ft.diameter-q.diameter);return k.some(q=>q.id===z.tool.id)?k:[z.tool,...k]}function zt(){let z=r.result,J=z?.plan,k=J?Jo(J):[],q=J?J.ops.filter(ft=>ft.enabled).reduce((ft,Dt,Mt,It)=>ft+(Mt>0&&It[Mt-1].tool.id!==Dt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${wt()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${J?Math.max(1,Math.round(z.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${k.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${J?q:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${ae()}</div>
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${Ye(le())}${z?` \xB7 ${(z.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${z?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let le=()=>`${(r.fileName||"part").replace(/\.(step|stp)$/i,"")}.nc`;function ae(){let z=r.simChecks;return z?z.items.map(J=>`<div class="ncc-check"><span class="ncc-ck ${J.state}">${J.state==="bad"?hn.cross:J.state==="info"?"!":hn.check}</span><span>${Ye(J.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${r.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}</div>`}let dt={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null};function wt(){if(!r.result)return"";let J=r.result.plan.ops.filter(ft=>ft.enabled&&ft.track),k=dt.total||1,q=J[Math.max(0,dt.opIndexAt?.(dt.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${dt.playing?"Pause":"Play"}">${dt.playing?hn.pause:hn.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(k)}" aria-valuenow="${Math.round(dt.t)}">
          ${J.map(ft=>`<i style="width: ${(ft.seconds||0)/k*100}%; background: ${$n[ft.kind]}"></i>`).join("")}
          <b style="width: ${dt.t/k*100}%"></b><em style="left: ${dt.t/k*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span>${q?`Step ${J.indexOf(q)+1} of ${J.length} \xB7 ${Ye(q.label)} \xB7 T${pr(q.tool,r.numbering)}`:""}</span><span class="ncc-mono">${Jd(dt.t)} / ${Jd(k)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([ft,Dt])=>`<button type="button" style="padding: 6px 8px" class="${dt.speed===ft?"sel":""}" data-speed="${ft}">${Dt}</button>`).join("")}</div>`}function Pt(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&r.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${r.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let Vt=null;function re(){if(Vt===r.result){Ht();return}Vt=r.result,Y=null,mt=null,o.onMarker=null,o.onPick=null;let z=r.result.plan,J=z.ops.filter(vt=>vt.enabled&&vt.track),k=Xi.cellFor(z.stock,520*520);dt.ops=J,dt.hm=zu(new Xi(z.stock,k)),dt.colors=z.ops.map(vt=>new ge($n[vt.kind])),dt.stamps=z.ops.map(vt=>Ec(vt.tool,k));let q=0;for(let vt of J)q+=vt.track.length/4;dt.moves=new Float32Array(q*4),dt.opOf=new Uint16Array(q),dt.cum=new Float64Array(q);let ft=0,Dt=0,Mt=null,It=r.maxRapid||5e3;for(let vt of J){let Bt=z.ops.indexOf(vt);for(let Gt=0;Gt<vt.track.length;Gt+=4,ft++){if(dt.moves.set(vt.track.subarray(Gt,Gt+4),ft*4),dt.opOf[ft]=Bt,Mt){let it=Math.hypot(vt.track[Gt]-Mt[0],vt.track[Gt+1]-Mt[1],vt.track[Gt+2]-Mt[2]);Dt+=it/(vt.track[Gt+3]>0?vt.track[Gt+3]:It)*60}Mt=[vt.track[Gt],vt.track[Gt+1],vt.track[Gt+2]],dt.cum[ft]=Dt}}dt.total=Dt,dt.opIndexAt=vt=>{let Bt=Math.min(q-1,fe(dt.cum,vt));return J.indexOf(z.ops[dt.opOf[Bt]])},dt.t=0,dt.i=1,dt.cursor=null,dt.toolOp=-1,dt.snaps=[],o.showStock(dt.hm,Ls[z.job.material]||Ls.mdf,r.part);{let vt=dt.hm,Bt=[vt.x0,vt.y0,vt.bottom],Gt=[vt.x0+(vt.nx-1)*vt.cell,vt.y0+(vt.ny-1)*vt.cell,vt.top];for(let it of J){let kt=it.tool.diameter/2;for(let Et=0;Et<it.track.length;Et+=4)it.track[Et+3]!==0&&(Bt[0]=Math.min(Bt[0],it.track[Et]-kt),Gt[0]=Math.max(Gt[0],it.track[Et]+kt),Bt[1]=Math.min(Bt[1],it.track[Et+1]-kt),Gt[1]=Math.max(Gt[1],it.track[Et+1]+kt))}o.frame(Bt,Gt)}o.showPaths(J),r.showPaths=r.showPaths??!1,Ht(),ye(0),dt.speed=5,dt.rate=Math.max(1,dt.total/600/5),o.onFrame=Le,lt(z),dt.playing=!1,Re()}function Ht(){o.paths&&(o.paths.visible=!!r.showPaths),o.partGhost&&(o.partGhost.visible=!!r.showPart)}function fe(z,J){let k=0,q=z.length;for(;k<q;){let ft=k+q>>1;z[ft]<J?k=ft+1:q=ft}return k}let Ue=z=>({x:dt.moves[z*4],y:dt.moves[z*4+1],z:dt.moves[z*4+2],r:dt.moves[z*4+3]===0});function de(z){let J=dt.hm,k=dt.cum.length,q=1/0,ft=-1,Dt=(Mt,It,vt)=>{let Bt=r.result.plan.ops[vt].tool.diameter/2/J.cell+3,Gt=Math.floor((Math.min(Mt.y,It.y)-J.y0)/J.cell-Bt),it=Math.ceil((Math.max(Mt.y,It.y)-J.y0)/J.cell+Bt);q=Math.min(q,Math.max(0,Gt)),ft=Math.max(ft,Math.min(J.ny-1,it))};for(;dt.i<k&&dt.cum[dt.i]<=z;){dt.opOf[dt.i]!==dt.opOf[dt.i-1]&&!dt.cursor&&Qe();let Mt=dt.cursor||Ue(dt.i-1),It=Ue(dt.i),vt=dt.opOf[dt.i];It.r||(Tc(J,r.result.plan.ops[vt].tool,Mt,It,vt),Dt(Mt,It,vt)),dt.cursor=null,dt.i++}if(dt.i<k&&z>dt.cum[dt.i-1]){let Mt=dt.cursor||Ue(dt.i-1),It=Ue(dt.i),vt=dt.opOf[dt.i],Bt=dt.cum[dt.i-1],Gt=(z-Bt)/(dt.cum[dt.i]-Bt||1),it=Ue(dt.i-1),kt={x:it.x+(It.x-it.x)*Gt,y:it.y+(It.y-it.y)*Gt,z:it.z+(It.z-it.z)*Gt};It.r||(Tc(J,r.result.plan.ops[vt].tool,Mt,kt,vt),Dt(Mt,kt,vt)),dt.cursor=kt}return[q,ft]}function ye(z){let J=dt.cum.length;if(!J)return;let k=Math.min(J-1,fe(dt.cum,z)),q=dt.opOf[k];if(q!==dt.toolOp){let Dt=r.result.plan.ops[q];o.setTool(Dt.tool,Dt.zTop-Dt.zBottom),dt.toolOp=q}let ft=dt.cursor||Ue(Math.max(0,dt.i-1));o.moveTool(ft.x,ft.y,ft.z)}let be=0,xe=0;function Le(z){let J=be?Math.min(.1,(z-be)/1e3):0;if(be=z,!dt.playing||!dt.cum)return;dt.t=Math.min(dt.total,dt.t+J*dt.speed*dt.rate);let[k,q]=de(dt.t);o.refreshStock(k,q,dt.colors),ye(dt.t),dt.t>=dt.total?(dt.playing=!1,Re()):z-xe>200&&(xe=z,Re())}let He=["h","op","sx","sy","wx","wy","gap","deep"];function Qe(){dt.snaps.some(z=>z.i===dt.i)||dt.snaps.push({i:dt.i,data:He.map(z=>dt.hm[z].slice())})}function Ie(z){if(z=Math.max(0,Math.min(dt.total,z)),z<dt.t){let J=dt.snaps.filter(k=>dt.cum[k.i-1]<=z).sort((k,q)=>q.i-k.i)[0];J?(He.forEach((k,q)=>dt.hm[k].set(J.data[q])),dt.i=J.i):(dt.hm.h.fill(dt.hm.top),dt.hm.op.fill(0),dt.hm.sx.fill(0),dt.hm.sy.fill(0),dt.hm.wx.fill(0),dt.hm.wy.fill(0),dt.hm.gap.fill(1/0),dt.hm.deep.fill(-1/0),dt.i=1),dt.cursor=null,de(z),o.refreshStock(0,dt.hm.ny-1,dt.colors)}else{let[J,k]=de(z);o.refreshStock(J,k,dt.colors)}dt.t=z,ye(z),Re()}function Re(){let z=n.querySelector("[data-playbar]");z&&(z.innerHTML=wt())}function lt(z){setTimeout(()=>{if(r.result?.plan!==z)return;let J=z.ops.map(Mt=>({...Mt,moves:Mt.track?Array.from({length:Mt.track.length/4},(It,vt)=>({x:Mt.track[vt*4],y:Mt.track[vt*4+1],z:Mt.track[vt*4+2],r:Mt.track[vt*4+3]===0,f:Mt.track[vt*4+3]})):null})),{collisions:k}=Vu({...z,ops:J},Xi.cellFor(z.stock,300*300)),q=[];if(q.push(k.length?{state:"bad",text:`${k.length} fast move${k.length>1?"s go":" goes"} into the material (${[...new Set(k.map(Mt=>z.ops.find(It=>It.id===Mt.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),r.travel){let Mt=z.stock.width<=r.travel.x&&z.stock.depth<=r.travel.y;q.push(Mt?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${Mn(r.travel.x)} \xD7 ${Mn(r.travel.y)} mm).`})}let ft=Jo(z);q.push(ft.every(Mt=>Mt.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),z.ops.find(Mt=>Mt.kind==="cutout"&&Mt.enabled)&&q.push({state:"ok",text:`The cut-out goes ${Mn(z.job.throughDepth)} mm into the spoilboard${z.job.tabs.enabled?`, with ${z.job.tabs.count} tabs`:""}`}),z.warnings.some(Mt=>Mt.kind==="undercut")&&q.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side."}),r.simChecks={ok:!q.some(Mt=>Mt.state==="bad"),items:q},S()},50)}let Je=z=>{if(!(z<1||z>4||z>r.maxStep+1)){if(z===4&&r.step!==4){dt.playing=!1,r.step=4,r.maxStep=4,S(),b(!0);return}r.step=z,r.maxStep=Math.max(r.maxStep,z),z!==4&&(dt.playing=!1),S()}},_e=()=>{r.maxStep=Math.min(r.maxStep,Math.max(r.step,3)),r.result=null,b(!1)};n.addEventListener("click",z=>{let J=z.target.closest("[data-focus]");if(J&&!z.target.closest("button, select")){r.focusOp=r.focusOp===J.dataset.focus?null:J.dataset.focus,S();return}let k=z.target.closest("button, [data-scrub]");if(!k||k.disabled)return;let q=k.dataset;if(q.go)return Je(+q.go);if(q.up)return d(q.up).catch(ft=>{r.error=ft.message,S()});if(q.material)return r.job.material=q.material,Object.assign(r.job.tabs,Vi(q.material)),_e();if(q.tabsize){let ft=nt();return r.job.tabs[q.tabsize]=Math.max(Q,Math.min(K,Math.round((ft[q.tabsize]+ +q.by*U)*10)/10)),_e()}if(q.zero)return r.job.zero.xy=q.zero,_e();if(q.z)return r.job.zero.z=q.z,_e();if(q.finish)return r.job.finish=q.finish,_e();if(q.tabs)return r.job.tabs.count=Math.max(1,Math.min(12,r.job.tabs.count+ +q.tabs)),_e();if(q.toggle==="fit"){let ft=r.plan?.stock;return r.job.stock.fit=!r.job.stock.fit,!r.job.stock.fit&&ft&&Object.assign(r.job.stock,{width:ft.width,depth:ft.depth,thickness:ft.thickness}),_e()}if(q.toggle==="tabs")return r.job.tabs.enabled=!r.job.tabs.enabled,_e();if(q.op)return r.job.disabled[q.op]=!r.job.disabled[q.op],_e();if(q.speed)return dt.speed=+q.speed,Re();if(q.act==="play")return dt.t>=dt.total&&Ie(0),dt.playing=!dt.playing,be=0,Re();if(q.act==="paths"){r.showPaths=!r.showPaths,Ht(),k.classList.toggle("on",r.showPaths);return}if(q.act==="ghost"){r.showPart=!r.showPart,Ht(),k.classList.toggle("on",r.showPart);return}if(q.act==="close")return Tt();if(q.act==="load")return A(k);if(q.act==="save")return rt(k)}),n.addEventListener("pointerdown",z=>{if(!z.target.closest("[data-scrub]")||!dt.cum)return;let k=dt.playing;dt.playing=!1;let q=It=>{let vt=n.querySelector("[data-scrub]").getBoundingClientRect();vt.width>0&&Ie((It-vt.left)/vt.width*dt.total)};q(z.clientX);let ft=null,Dt=It=>{ft===null&&requestAnimationFrame(()=>{let vt=ft;ft=null,q(vt)}),ft=It.clientX},Mt=()=>{window.removeEventListener("pointermove",Dt),window.removeEventListener("pointerup",Mt),dt.playing=k&&dt.t<dt.total,be=0,Re()};window.addEventListener("pointermove",Dt),window.addEventListener("pointerup",Mt)}),n.addEventListener("change",z=>{let J=z.target;if(J.matches("[data-file]"))return u(J.files[0]);if(J.dataset.tool)return r.job.toolOverride[J.dataset.tool]=+J.value||J.value,_e();if(J.dataset.stock){let k=parseFloat(String(J.value).replace(",","."));return Number.isFinite(k)&&k>0&&(r.job.stock[J.dataset.stock]=k),_e()}}),n.addEventListener("dragover",z=>{let J=z.target.closest("[data-drop]");J&&(z.preventDefault(),J.classList.add("over"))}),n.addEventListener("dragleave",z=>{let J=z.target.closest("[data-drop]");J&&J.classList.remove("over")}),n.addEventListener("drop",z=>{z.target.closest("[data-drop]")&&(z.preventDefault(),u(z.dataTransfer.files[0]))});function X(z){r.toast=z,S(),setTimeout(()=>{r.toast===z&&(r.toast="",S())},2600)}async function A(z){z.disabled=!0;try{let J=await i.post("/api/gcode-files/load-temp",{filename:le(),content:r.result.gcode});if(!J.ok)throw new Error(`ncSender said ${J.status}`);Tt()}catch(J){z.disabled=!1,X(`Couldn\u2019t load the program: ${J.message}`)}}async function rt(z){z.disabled=!0;try{let J=await pt(le()),k=await i.post("/api/gcode-files/file/save",{path:J,content:r.result.gcode});if(!k.ok)throw new Error(`save failed (${k.status})`);X(`Saved to File Manager: ${J}`)}catch(J){X(`Couldn\u2019t save: ${J.message}`)}z.disabled=!1}async function pt(z){let J=z.replace(/\.nc$/,"");for(let k=1;k<1e3;k++){let q=`ncCAM/${k<2?z:`${J} (${k}).nc`}`,ft=await fetch(`${t.base}/api/gcode-files/file?path=${encodeURIComponent(q)}`);if(ft.status===404)return q;if(!ft.ok)throw new Error(`could not check File Manager (${ft.status})`)}throw new Error("too many saved copies")}function Tt(){dt.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}S(),window.__nccam={S:r,PLAY:dt,viewer:o,seek:z=>Ie(z)}}function jd(n,t=48){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}var cM,hM,Ye,Mn,Jd,dn,hn,uM,Qd=Pn(()=>{nc();Ac();Wd();Zd();cM=["Model","Stock & Zero","Operations","Preview & Load"],hM=[["top","Top"],["bottom","Bottom"],["front","Front"],["back","Back"],["left","Left"],["right","Right"]],Ye=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Mn=(n,t=1)=>`${(Math.round(n*10**t)/10**t).toLocaleString()}`,Jd=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},dn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,hn={close:dn('<path d="M6 6l12 12M18 6L6 18"/>'),next:dn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:dn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:dn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:dn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:dn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:dn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:dn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:dn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:dn('<path d="M3 9h18M3 15h18"/>'),pocket:dn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:dn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:dn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:dn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:dn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:dn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>')},uM={top:'<path d="M12 3l9 5-9 5-9-5z" fill="currentColor" fill-opacity=".35"/><path d="M3 8v8l9 5 9-5V8"/>',bottom:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M3 16l9-5 9 5" stroke-dasharray="2 2"/>',front:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".35"/><path d="M21 8v8l-9 5"/>',back:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 3v8" stroke-dasharray="2 2"/>',left:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".2"/><path d="M21 8v8l-9 5"/>',right:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5"/><path d="M21 8v8l-9 5V13z" fill="currentColor" fill-opacity=".35"/>'}});var Xu=gu(yu(),1);Ac();var rg={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.02,angularDeflection:.1};function Cc(){let n=null,t=null,e=null,i=null,r={async init({wasmBinary:o}){return i=o,!0},async load({bytes:o}){n||=await(0,Xu.default)({wasmBinary:i});let c=n.ReadStepFile(new Uint8Array(o),rg);if(!c.success||!c.meshes?.length)throw new Error("This file has no solid ncCAM can read. Export it again as STEP (AP214 or AP242).");return t=wu(c),{solids:t.solids,size:Gs(t).size,...Eu(t)}},async orient({up:o}){e=$o(t,o);let c=fr(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:c}},async tilt({normal:o}){e=$o(e,o);let c=fr(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:c}},async turn({how:o}){e=vc(e,o==="over"?[1,0,0,0,-1,0,0,0,-1]:[-1,0,0,0,-1,0,0,0,1]);let c=fr(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:c}},async plan({tools:o,job:c,limits:u,paths:f,gcodeOptions:d,timing:g}){let y=Ru(e,o,c,u);f&&Ou(y);let _=f?Bu(y,g):0,b=f?Uu(y,d):"";for(let E of y.ops){if(!E.moves)continue;let P=new Float32Array(E.moves.length*4);E.moves.forEach((S,M)=>{P[M*4]=S.x,P[M*4+1]=S.y,P[M*4+2]=S.z,P[M*4+3]=S.r?0:S.f}),E.track=P,delete E.moves}return{plan:y,gcode:b,seconds:_}}};return async function(c){let u=r[c.type];if(!u)throw new Error(`unknown request ${c.type}`);return u(c)}}var dM="0.1.2-mvu833yp";if(typeof document>"u"){let n=Cc();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e&&e.positions?[e.positions.buffer,e.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCam=window.NcCam||{};n.build=dM,n.mount=async(i,r)=>{let{mountApp:o}=await Promise.resolve().then(()=>(Qd(),Kd));try{o(i,r,await t(r))}catch(c){i.textContent=`ncCAM could not start: ${c.message||c}`}};let t=i=>n.engine||=e(i);async function e(i){let r=await fetch(i.file("lib/occt-import-js.wasm")).then(u=>{if(!u.ok)throw new Error(`lib/occt-import-js.wasm: ${u.status}`);return u.arrayBuffer()}),o=null;try{o=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{o=null}if(o){let u=0,f=new Map;o.onmessage=({data:y})=>{let _=f.get(y.id);_&&(f.delete(y.id),y.ok?_.resolve(y.result):_.reject(new Error(y.error)))};let d=(y,_={},b=[])=>new Promise((E,P)=>{let S=++u;f.set(S,{resolve:E,reject:P}),o.postMessage({..._,id:S,type:y},b)});if(await Promise.race([d("init",{wasmBinary:r}).then(()=>!0),new Promise(y=>setTimeout(()=>y(!1),5e3))]))return d;o.terminate()}let c=Cc();return await c({type:"init",wasmBinary:r}),(u,f={})=>c({...f,type:u})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
