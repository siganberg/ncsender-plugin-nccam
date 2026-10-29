(()=>{var xm=Object.create;var cc=Object.defineProperty;var Sm=Object.getOwnPropertyDescriptor;var Mm=Object.getOwnPropertyNames;var bm=Object.getPrototypeOf,wm=Object.prototype.hasOwnProperty;var hc=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var Pn=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var fu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Em=(n,t)=>{for(var e in t)cc(n,e,{get:t[e],enumerable:!0})},Tm=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Mm(t))!wm.call(n,s)&&s!==e&&cc(n,s,{get:()=>t[s],enumerable:!(i=Sm(t,s))||i.enumerable});return n};var du=(n,t,e)=>(e=n!=null?xm(bm(n)):{},Tm(t||!n||!n.__esModule?cc(e,"default",{value:n,enumerable:!0}):e,n));var gu=fu((mu,uc)=>{var pu=(()=>{var n=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(t={}){var e,i=t,s,o,c=new Promise((h,m)=>{s=h,o=m}),u=typeof window=="object",f=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",_=Object.assign({},i),S=[],g="./this.program",b=(h,m)=>{throw m},E="";function C(h){return i.locateFile?i.locateFile(h,E):E+h}var M,x;if(d){var U=hc("fs"),X=hc("path");E=__dirname+"/",x=h=>{h=He(h)?new URL(h):X.normalize(h);var m=U.readFileSync(h);return m},M=(h,m=!0)=>(h=He(h)?new URL(h):X.normalize(h),new Promise((y,w)=>{U.readFile(h,m?void 0:"utf8",(R,W)=>{R?w(R):y(m?W.buffer:W)})})),!i.thisProgram&&process.argv.length>1&&(g=process.argv[1].replace(/\\/g,"/")),S=process.argv.slice(2),b=(h,m)=>{throw process.exitCode=h,m}}else(u||f)&&(f?E=self.location.href:typeof document<"u"&&document.currentScript&&(E=document.currentScript.src),n&&(E=n),E.startsWith("blob:")?E="":E=E.substr(0,E.replace(/[?#].*/,"").lastIndexOf("/")+1),f&&(x=h=>{var m=new XMLHttpRequest;return m.open("GET",h,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),M=h=>He(h)?new Promise((m,y)=>{var w=new XMLHttpRequest;w.open("GET",h,!0),w.responseType="arraybuffer",w.onload=()=>{if(w.status==200||w.status==0&&w.response){m(w.response);return}y(w.status)},w.onerror=y,w.send(null)}):fetch(h,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(new Error(m.status+" : "+m.url))));var N=i.print||console.log.bind(console),O=i.printErr||console.error.bind(console);Object.assign(i,_),_=null,i.arguments&&(S=i.arguments),i.thisProgram&&(g=i.thisProgram);var F=i.wasmBinary,Y,P=!1,V;function J(h,m){h||Ce(m)}var K,it,ht,Q,z,tt,H,_t;function at(){var h=Y.buffer;i.HEAP8=K=new Int8Array(h),i.HEAP16=ht=new Int16Array(h),i.HEAPU8=it=new Uint8Array(h),i.HEAPU16=Q=new Uint16Array(h),i.HEAP32=z=new Int32Array(h),i.HEAPU32=tt=new Uint32Array(h),i.HEAPF32=H=new Float32Array(h),i.HEAPF64=_t=new Float64Array(h)}var pt=[],gt=[],At=[],Ot=!1;function ue(){var h=i.preRun;h&&(typeof h=="function"&&(h=[h]),h.forEach(St)),It(pt)}function fe(){Ot=!0,!i.noFSInit&&!I.initialized&&I.init(),I.ignorePermissions=!1,Mt.init(),It(gt)}function be(){var h=i.postRun;h&&(typeof h=="function"&&(h=[h]),h.forEach(Xt)),It(At)}function St(h){pt.unshift(h)}function Et(h){gt.unshift(h)}function Xt(h){At.unshift(h)}var oe=0,Ut=null,ge=null;function Je(h){return h}function he(h){oe++,i.monitorRunDependencies?.(oe)}function Me(h){if(oe--,i.monitorRunDependencies?.(oe),oe==0&&(Ut!==null&&(clearInterval(Ut),Ut=null),ge)){var m=ge;ge=null,m()}}function Ce(h){i.onAbort?.(h),h="Aborted("+h+")",O(h),P=!0,h+=". Build with -sASSERTIONS for more info.",Ot&&cu();var m=new WebAssembly.RuntimeError(h);throw o(m),m}var we="data:application/octet-stream;base64,",De=h=>h.startsWith(we),He=h=>h.startsWith("file://");function j(){var h="occt-import-js.wasm";return De(h)?h:C(h)}var ut;function lt(h){if(h==ut&&F)return new Uint8Array(F);if(x)return x(h);throw"both async and sync fetching of the wasm failed"}function k(h){return F?Promise.resolve().then(()=>lt(h)):M(h).then(m=>new Uint8Array(m),()=>lt(h))}function Rt(h,m,y){return k(h).then(w=>WebAssembly.instantiate(w,m)).then(y,w=>{O(`failed to asynchronously prepare wasm: ${w}`),Ce(w)})}function Kt(h,m,y,w){return!h&&typeof WebAssembly.instantiateStreaming=="function"&&!De(m)&&!He(m)&&!d&&typeof fetch=="function"?fetch(m,{credentials:"same-origin"}).then(R=>{var W=WebAssembly.instantiateStreaming(R,y);return W.then(w,function($){return O(`wasm streaming compile failed: ${$}`),O("falling back to ArrayBuffer instantiation"),Rt(m,y,w)})}):Rt(m,y,w)}function B(){return{a:fm}}function T(){var h=B();function m(w,R){return on=w.exports,Y=on._,at(),Uo=on.ba,Et(on.$),Me("wasm-instantiate"),on}he("wasm-instantiate");function y(w){m(w.instance)}if(i.instantiateWasm)try{return i.instantiateWasm(h,m)}catch(w){O(`Module.instantiateWasm callback failed with error: ${w}`),o(w)}return ut??=j(),Kt(F,ut,h,y).catch(o),{}}var G,rt;function mt(h){this.name="ExitStatus",this.message=`Program terminated with exit(${h})`,this.status=h}var It=h=>{h.forEach(m=>m(i))},Bt=i.noExitRuntime||!0,vt={isAbs:h=>h.charAt(0)==="/",splitPath:h=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return m.exec(h).slice(1)},normalizeArray:(h,m)=>{for(var y=0,w=h.length-1;w>=0;w--){var R=h[w];R==="."?h.splice(w,1):R===".."?(h.splice(w,1),y++):y&&(h.splice(w,1),y--)}if(m)for(;y;y--)h.unshift("..");return h},normalize:h=>{var m=vt.isAbs(h),y=h.substr(-1)==="/";return h=vt.normalizeArray(h.split("/").filter(w=>!!w),!m).join("/"),!h&&!m&&(h="."),h&&y&&(h+="/"),(m?"/":"")+h},dirname:h=>{var m=vt.splitPath(h),y=m[0],w=m[1];return!y&&!w?".":(w&&(w=w.substr(0,w.length-1)),y+w)},basename:h=>{if(h==="/")return"/";h=vt.normalize(h),h=h.replace(/\/$/,"");var m=h.lastIndexOf("/");return m===-1?h:h.substr(m+1)},join:(...h)=>vt.normalize(h.join("/")),join2:(h,m)=>vt.normalize(h+"/"+m)},Tt=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return w=>crypto.getRandomValues(w);if(d)try{var h=hc("crypto"),m=h.randomFillSync;if(m)return w=>h.randomFillSync(w);var y=h.randomBytes;return w=>(w.set(y(w.byteLength)),w)}catch{}Ce("initRandomDevice")},kt=h=>(kt=Tt())(h),jt={resolve:(...h)=>{for(var m="",y=!1,w=h.length-1;w>=-1&&!y;w--){var R=w>=0?h[w]:I.cwd();if(typeof R!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!R)return"";m=R+"/"+m,y=vt.isAbs(R)}return m=vt.normalizeArray(m.split("/").filter(W=>!!W),!y).join("/"),(y?"/":"")+m||"."},relative:(h,m)=>{h=jt.resolve(h).substr(1),m=jt.resolve(m).substr(1);function y(Nt){for(var $t=0;$t<Nt.length&&Nt[$t]==="";$t++);for(var te=Nt.length-1;te>=0&&Nt[te]==="";te--);return $t>te?[]:Nt.slice($t,te-$t+1)}for(var w=y(h.split("/")),R=y(m.split("/")),W=Math.min(w.length,R.length),$=W,nt=0;nt<W;nt++)if(w[nt]!==R[nt]){$=nt;break}for(var xt=[],nt=$;nt<w.length;nt++)xt.push("..");return xt=xt.concat(R.slice($)),xt.join("/")}},Gt=typeof TextDecoder<"u"?new TextDecoder:void 0,Ft=(h,m=0,y=NaN)=>{for(var w=m+y,R=m;h[R]&&!(R>=w);)++R;if(R-m>16&&h.buffer&&Gt)return Gt.decode(h.subarray(m,R));for(var W="";m<R;){var $=h[m++];if(!($&128)){W+=String.fromCharCode($);continue}var nt=h[m++]&63;if(($&224)==192){W+=String.fromCharCode(($&31)<<6|nt);continue}var xt=h[m++]&63;if(($&240)==224?$=($&15)<<12|nt<<6|xt:$=($&7)<<18|nt<<12|xt<<6|h[m++]&63,$<65536)W+=String.fromCharCode($);else{var Nt=$-65536;W+=String.fromCharCode(55296|Nt>>10,56320|Nt&1023)}}return W},ne=[],ae=h=>{for(var m=0,y=0;y<h.length;++y){var w=h.charCodeAt(y);w<=127?m++:w<=2047?m+=2:w>=55296&&w<=57343?(m+=4,++y):m+=3}return m},_e=(h,m,y,w)=>{if(!(w>0))return 0;for(var R=y,W=y+w-1,$=0;$<h.length;++$){var nt=h.charCodeAt($);if(nt>=55296&&nt<=57343){var xt=h.charCodeAt(++$);nt=65536+((nt&1023)<<10)|xt&1023}if(nt<=127){if(y>=W)break;m[y++]=nt}else if(nt<=2047){if(y+1>=W)break;m[y++]=192|nt>>6,m[y++]=128|nt&63}else if(nt<=65535){if(y+2>=W)break;m[y++]=224|nt>>12,m[y++]=128|nt>>6&63,m[y++]=128|nt&63}else{if(y+3>=W)break;m[y++]=240|nt>>18,m[y++]=128|nt>>12&63,m[y++]=128|nt>>6&63,m[y++]=128|nt&63}}return m[y]=0,y-R};function st(h,m,y){var w=y>0?y:ae(h)+1,R=new Array(w),W=_e(h,R,0,R.length);return m&&(R.length=W),R}var zt=()=>{if(!ne.length){var h=null;if(d){var m=256,y=Buffer.alloc(m),w=0,R=process.stdin.fd;try{w=U.readSync(R,y,0,m)}catch(W){if(W.toString().includes("EOF"))w=0;else throw W}w>0&&(h=y.slice(0,w).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(h=window.prompt("Input: "),h!==null&&(h+=`
`));if(!h)return null;ne=st(h,!0)}return ne.shift()},Mt={ttys:[],init(){},shutdown(){},register(h,m){Mt.ttys[h]={input:[],output:[],ops:m},I.registerDevice(h,Mt.stream_ops)},stream_ops:{open(h){var m=Mt.ttys[h.node.rdev];if(!m)throw new I.ErrnoError(43);h.tty=m,h.seekable=!1},close(h){h.tty.ops.fsync(h.tty)},fsync(h){h.tty.ops.fsync(h.tty)},read(h,m,y,w,R){if(!h.tty||!h.tty.ops.get_char)throw new I.ErrnoError(60);for(var W=0,$=0;$<w;$++){var nt;try{nt=h.tty.ops.get_char(h.tty)}catch{throw new I.ErrnoError(29)}if(nt===void 0&&W===0)throw new I.ErrnoError(6);if(nt==null)break;W++,m[y+$]=nt}return W&&(h.node.timestamp=Date.now()),W},write(h,m,y,w,R){if(!h.tty||!h.tty.ops.put_char)throw new I.ErrnoError(60);try{for(var W=0;W<w;W++)h.tty.ops.put_char(h.tty,m[y+W])}catch{throw new I.ErrnoError(29)}return w&&(h.node.timestamp=Date.now()),W}},default_tty_ops:{get_char(h){return zt()},put_char(h,m){m===null||m===10?(N(Ft(h.output)),h.output=[]):m!=0&&h.output.push(m)},fsync(h){h.output&&h.output.length>0&&(N(Ft(h.output)),h.output=[])},ioctl_tcgets(h){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(h,m,y){return 0},ioctl_tiocgwinsz(h){return[24,80]}},default_tty1_ops:{put_char(h,m){m===null||m===10?(O(Ft(h.output)),h.output=[]):m!=0&&h.output.push(m)},fsync(h){h.output&&h.output.length>0&&(O(Ft(h.output)),h.output=[])}}},Vt=(h,m)=>{it.fill(0,h,h+m)},qt=(h,m)=>Math.ceil(h/m)*m,Pt=h=>{h=qt(h,65536);var m=lu(65536,h);return m&&Vt(m,h),m},Lt={ops_table:null,mount(h){return Lt.createNode(null,"/",16895,0)},createNode(h,m,y,w){if(I.isBlkdev(y)||I.isFIFO(y))throw new I.ErrnoError(63);Lt.ops_table||={dir:{node:{getattr:Lt.node_ops.getattr,setattr:Lt.node_ops.setattr,lookup:Lt.node_ops.lookup,mknod:Lt.node_ops.mknod,rename:Lt.node_ops.rename,unlink:Lt.node_ops.unlink,rmdir:Lt.node_ops.rmdir,readdir:Lt.node_ops.readdir,symlink:Lt.node_ops.symlink},stream:{llseek:Lt.stream_ops.llseek}},file:{node:{getattr:Lt.node_ops.getattr,setattr:Lt.node_ops.setattr},stream:{llseek:Lt.stream_ops.llseek,read:Lt.stream_ops.read,write:Lt.stream_ops.write,allocate:Lt.stream_ops.allocate,mmap:Lt.stream_ops.mmap,msync:Lt.stream_ops.msync}},link:{node:{getattr:Lt.node_ops.getattr,setattr:Lt.node_ops.setattr,readlink:Lt.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Lt.node_ops.getattr,setattr:Lt.node_ops.setattr},stream:I.chrdev_stream_ops}};var R=I.createNode(h,m,y,w);return I.isDir(R.mode)?(R.node_ops=Lt.ops_table.dir.node,R.stream_ops=Lt.ops_table.dir.stream,R.contents={}):I.isFile(R.mode)?(R.node_ops=Lt.ops_table.file.node,R.stream_ops=Lt.ops_table.file.stream,R.usedBytes=0,R.contents=null):I.isLink(R.mode)?(R.node_ops=Lt.ops_table.link.node,R.stream_ops=Lt.ops_table.link.stream):I.isChrdev(R.mode)&&(R.node_ops=Lt.ops_table.chrdev.node,R.stream_ops=Lt.ops_table.chrdev.stream),R.timestamp=Date.now(),h&&(h.contents[m]=R,h.timestamp=R.timestamp),R},getFileDataAsTypedArray(h){return h.contents?h.contents.subarray?h.contents.subarray(0,h.usedBytes):new Uint8Array(h.contents):new Uint8Array(0)},expandFileStorage(h,m){var y=h.contents?h.contents.length:0;if(!(y>=m)){var w=1024*1024;m=Math.max(m,y*(y<w?2:1.125)>>>0),y!=0&&(m=Math.max(m,256));var R=h.contents;h.contents=new Uint8Array(m),h.usedBytes>0&&h.contents.set(R.subarray(0,h.usedBytes),0)}},resizeFileStorage(h,m){if(h.usedBytes!=m)if(m==0)h.contents=null,h.usedBytes=0;else{var y=h.contents;h.contents=new Uint8Array(m),y&&h.contents.set(y.subarray(0,Math.min(m,h.usedBytes))),h.usedBytes=m}},node_ops:{getattr(h){var m={};return m.dev=I.isChrdev(h.mode)?h.id:1,m.ino=h.id,m.mode=h.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=h.rdev,I.isDir(h.mode)?m.size=4096:I.isFile(h.mode)?m.size=h.usedBytes:I.isLink(h.mode)?m.size=h.link.length:m.size=0,m.atime=new Date(h.timestamp),m.mtime=new Date(h.timestamp),m.ctime=new Date(h.timestamp),m.blksize=4096,m.blocks=Math.ceil(m.size/m.blksize),m},setattr(h,m){m.mode!==void 0&&(h.mode=m.mode),m.timestamp!==void 0&&(h.timestamp=m.timestamp),m.size!==void 0&&Lt.resizeFileStorage(h,m.size)},lookup(h,m){throw I.genericErrors[44]},mknod(h,m,y,w){return Lt.createNode(h,m,y,w)},rename(h,m,y){if(I.isDir(h.mode)){var w;try{w=I.lookupNode(m,y)}catch{}if(w)for(var R in w.contents)throw new I.ErrnoError(55)}delete h.parent.contents[h.name],h.parent.timestamp=Date.now(),h.name=y,m.contents[y]=h,m.timestamp=h.parent.timestamp},unlink(h,m){delete h.contents[m],h.timestamp=Date.now()},rmdir(h,m){var y=I.lookupNode(h,m);for(var w in y.contents)throw new I.ErrnoError(55);delete h.contents[m],h.timestamp=Date.now()},readdir(h){var m=[".",".."];for(var y of Object.keys(h.contents))m.push(y);return m},symlink(h,m,y){var w=Lt.createNode(h,m,41471,0);return w.link=y,w},readlink(h){if(!I.isLink(h.mode))throw new I.ErrnoError(28);return h.link}},stream_ops:{read(h,m,y,w,R){var W=h.node.contents;if(R>=h.node.usedBytes)return 0;var $=Math.min(h.node.usedBytes-R,w);if($>8&&W.subarray)m.set(W.subarray(R,R+$),y);else for(var nt=0;nt<$;nt++)m[y+nt]=W[R+nt];return $},write(h,m,y,w,R,W){if(m.buffer===K.buffer&&(W=!1),!w)return 0;var $=h.node;if($.timestamp=Date.now(),m.subarray&&(!$.contents||$.contents.subarray)){if(W)return $.contents=m.subarray(y,y+w),$.usedBytes=w,w;if($.usedBytes===0&&R===0)return $.contents=m.slice(y,y+w),$.usedBytes=w,w;if(R+w<=$.usedBytes)return $.contents.set(m.subarray(y,y+w),R),w}if(Lt.expandFileStorage($,R+w),$.contents.subarray&&m.subarray)$.contents.set(m.subarray(y,y+w),R);else for(var nt=0;nt<w;nt++)$.contents[R+nt]=m[y+nt];return $.usedBytes=Math.max($.usedBytes,R+w),w},llseek(h,m,y){var w=m;if(y===1?w+=h.position:y===2&&I.isFile(h.node.mode)&&(w+=h.node.usedBytes),w<0)throw new I.ErrnoError(28);return w},allocate(h,m,y){Lt.expandFileStorage(h.node,m+y),h.node.usedBytes=Math.max(h.node.usedBytes,m+y)},mmap(h,m,y,w,R){if(!I.isFile(h.node.mode))throw new I.ErrnoError(43);var W,$,nt=h.node.contents;if(!(R&2)&&nt&&nt.buffer===K.buffer)$=!1,W=nt.byteOffset;else{if($=!0,W=Pt(m),!W)throw new I.ErrnoError(48);nt&&((y>0||y+m<nt.length)&&(nt.subarray?nt=nt.subarray(y,y+m):nt=Array.prototype.slice.call(nt,y,y+m)),K.set(nt,W))}return{ptr:W,allocated:$}},msync(h,m,y,w,R){return Lt.stream_ops.write(h,m,0,w,y,!1),0}}},ee=(h,m,y,w)=>{var R=w?"":`al ${h}`;M(h).then(W=>{m(new Uint8Array(W)),R&&Me(R)},W=>{if(y)y();else throw`Loading data file "${h}" failed.`}),R&&he(R)},Fe=(h,m,y,w,R,W)=>{I.createDataFile(h,m,y,w,R,W)},Le=i.preloadPlugins||[],Sn=(h,m,y,w)=>{typeof Browser<"u"&&Browser.init();var R=!1;return Le.forEach(W=>{R||W.canHandle(m)&&(W.handle(h,m,y,w),R=!0)}),R},Tn=(h,m,y,w,R,W,$,nt,xt,Nt)=>{var $t=m?jt.resolve(vt.join2(h,m)):h,te=`cp ${$t}`;function ce(se){function ye(Oe){Nt?.(),nt||Fe(h,m,Oe,w,R,xt),W?.(),Me(te)}Sn(se,$t,ye,()=>{$?.(),Me(te)})||ye(se)}he(te),typeof y=="string"?ee(y,ce,$):ce(y)},Rs=h=>{var m={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},y=m[h];if(typeof y>"u")throw new Error(`Unknown file open mode: ${h}`);return y},lr=(h,m)=>{var y=0;return h&&(y|=365),m&&(y|=146),y},I={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(h){this.name="ErrnoError",this.errno=h}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(h){this.node=h}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(h){this.shared.flags=h}get position(){return this.shared.position}set position(h){this.shared.position=h}},FSNode:class{constructor(h,m,y,w){h||(h=this),this.parent=h,this.mount=h.mount,this.mounted=null,this.id=I.nextInode++,this.name=m,this.mode=y,this.node_ops={},this.stream_ops={},this.rdev=w,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(h){h?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(h){h?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return I.isDir(this.mode)}get isDevice(){return I.isChrdev(this.mode)}},lookupPath(h,m={}){if(h=jt.resolve(h),!h)return{path:"",node:null};var y={follow_mount:!0,recurse_count:0};if(m=Object.assign(y,m),m.recurse_count>8)throw new I.ErrnoError(32);for(var w=h.split("/").filter(te=>!!te),R=I.root,W="/",$=0;$<w.length;$++){var nt=$===w.length-1;if(nt&&m.parent)break;if(R=I.lookupNode(R,w[$]),W=vt.join2(W,w[$]),I.isMountpoint(R)&&(!nt||nt&&m.follow_mount)&&(R=R.mounted.root),!nt||m.follow)for(var xt=0;I.isLink(R.mode);){var Nt=I.readlink(W);W=jt.resolve(vt.dirname(W),Nt);var $t=I.lookupPath(W,{recurse_count:m.recurse_count+1});if(R=$t.node,xt++>40)throw new I.ErrnoError(32)}}return{path:W,node:R}},getPath(h){for(var m;;){if(I.isRoot(h)){var y=h.mount.mountpoint;return m?y[y.length-1]!=="/"?`${y}/${m}`:y+m:y}m=m?`${h.name}/${m}`:h.name,h=h.parent}},hashName(h,m){for(var y=0,w=0;w<m.length;w++)y=(y<<5)-y+m.charCodeAt(w)|0;return(h+y>>>0)%I.nameTable.length},hashAddNode(h){var m=I.hashName(h.parent.id,h.name);h.name_next=I.nameTable[m],I.nameTable[m]=h},hashRemoveNode(h){var m=I.hashName(h.parent.id,h.name);if(I.nameTable[m]===h)I.nameTable[m]=h.name_next;else for(var y=I.nameTable[m];y;){if(y.name_next===h){y.name_next=h.name_next;break}y=y.name_next}},lookupNode(h,m){var y=I.mayLookup(h);if(y)throw new I.ErrnoError(y);for(var w=I.hashName(h.id,m),R=I.nameTable[w];R;R=R.name_next){var W=R.name;if(R.parent.id===h.id&&W===m)return R}return I.lookup(h,m)},createNode(h,m,y,w){var R=new I.FSNode(h,m,y,w);return I.hashAddNode(R),R},destroyNode(h){I.hashRemoveNode(h)},isRoot(h){return h===h.parent},isMountpoint(h){return!!h.mounted},isFile(h){return(h&61440)===32768},isDir(h){return(h&61440)===16384},isLink(h){return(h&61440)===40960},isChrdev(h){return(h&61440)===8192},isBlkdev(h){return(h&61440)===24576},isFIFO(h){return(h&61440)===4096},isSocket(h){return(h&49152)===49152},flagsToPermissionString(h){var m=["r","w","rw"][h&3];return h&512&&(m+="w"),m},nodePermissions(h,m){return I.ignorePermissions?0:m.includes("r")&&!(h.mode&292)||m.includes("w")&&!(h.mode&146)||m.includes("x")&&!(h.mode&73)?2:0},mayLookup(h){if(!I.isDir(h.mode))return 54;var m=I.nodePermissions(h,"x");return m||(h.node_ops.lookup?0:2)},mayCreate(h,m){try{var y=I.lookupNode(h,m);return 20}catch{}return I.nodePermissions(h,"wx")},mayDelete(h,m,y){var w;try{w=I.lookupNode(h,m)}catch(W){return W.errno}var R=I.nodePermissions(h,"wx");if(R)return R;if(y){if(!I.isDir(w.mode))return 54;if(I.isRoot(w)||I.getPath(w)===I.cwd())return 10}else if(I.isDir(w.mode))return 31;return 0},mayOpen(h,m){return h?I.isLink(h.mode)?32:I.isDir(h.mode)&&(I.flagsToPermissionString(m)!=="r"||m&512)?31:I.nodePermissions(h,I.flagsToPermissionString(m)):44},MAX_OPEN_FDS:4096,nextfd(){for(var h=0;h<=I.MAX_OPEN_FDS;h++)if(!I.streams[h])return h;throw new I.ErrnoError(33)},getStreamChecked(h){var m=I.getStream(h);if(!m)throw new I.ErrnoError(8);return m},getStream:h=>I.streams[h],createStream(h,m=-1){return h=Object.assign(new I.FSStream,h),m==-1&&(m=I.nextfd()),h.fd=m,I.streams[m]=h,h},closeStream(h){I.streams[h]=null},dupStream(h,m=-1){var y=I.createStream(h,m);return y.stream_ops?.dup?.(y),y},chrdev_stream_ops:{open(h){var m=I.getDevice(h.node.rdev);h.stream_ops=m.stream_ops,h.stream_ops.open?.(h)},llseek(){throw new I.ErrnoError(70)}},major:h=>h>>8,minor:h=>h&255,makedev:(h,m)=>h<<8|m,registerDevice(h,m){I.devices[h]={stream_ops:m}},getDevice:h=>I.devices[h],getMounts(h){for(var m=[],y=[h];y.length;){var w=y.pop();m.push(w),y.push(...w.mounts)}return m},syncfs(h,m){typeof h=="function"&&(m=h,h=!1),I.syncFSRequests++,I.syncFSRequests>1&&O(`warning: ${I.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var y=I.getMounts(I.root.mount),w=0;function R($){return I.syncFSRequests--,m($)}function W($){if($)return W.errored?void 0:(W.errored=!0,R($));++w>=y.length&&R(null)}y.forEach($=>{if(!$.type.syncfs)return W(null);$.type.syncfs($,h,W)})},mount(h,m,y){var w=y==="/",R=!y,W;if(w&&I.root)throw new I.ErrnoError(10);if(!w&&!R){var $=I.lookupPath(y,{follow_mount:!1});if(y=$.path,W=$.node,I.isMountpoint(W))throw new I.ErrnoError(10);if(!I.isDir(W.mode))throw new I.ErrnoError(54)}var nt={type:h,opts:m,mountpoint:y,mounts:[]},xt=h.mount(nt);return xt.mount=nt,nt.root=xt,w?I.root=xt:W&&(W.mounted=nt,W.mount&&W.mount.mounts.push(nt)),xt},unmount(h){var m=I.lookupPath(h,{follow_mount:!1});if(!I.isMountpoint(m.node))throw new I.ErrnoError(28);var y=m.node,w=y.mounted,R=I.getMounts(w);Object.keys(I.nameTable).forEach($=>{for(var nt=I.nameTable[$];nt;){var xt=nt.name_next;R.includes(nt.mount)&&I.destroyNode(nt),nt=xt}}),y.mounted=null;var W=y.mount.mounts.indexOf(w);y.mount.mounts.splice(W,1)},lookup(h,m){return h.node_ops.lookup(h,m)},mknod(h,m,y){var w=I.lookupPath(h,{parent:!0}),R=w.node,W=vt.basename(h);if(!W||W==="."||W==="..")throw new I.ErrnoError(28);var $=I.mayCreate(R,W);if($)throw new I.ErrnoError($);if(!R.node_ops.mknod)throw new I.ErrnoError(63);return R.node_ops.mknod(R,W,m,y)},create(h,m){return m=m!==void 0?m:438,m&=4095,m|=32768,I.mknod(h,m,0)},mkdir(h,m){return m=m!==void 0?m:511,m&=1023,m|=16384,I.mknod(h,m,0)},mkdirTree(h,m){for(var y=h.split("/"),w="",R=0;R<y.length;++R)if(y[R]){w+="/"+y[R];try{I.mkdir(w,m)}catch(W){if(W.errno!=20)throw W}}},mkdev(h,m,y){return typeof y>"u"&&(y=m,m=438),m|=8192,I.mknod(h,m,y)},symlink(h,m){if(!jt.resolve(h))throw new I.ErrnoError(44);var y=I.lookupPath(m,{parent:!0}),w=y.node;if(!w)throw new I.ErrnoError(44);var R=vt.basename(m),W=I.mayCreate(w,R);if(W)throw new I.ErrnoError(W);if(!w.node_ops.symlink)throw new I.ErrnoError(63);return w.node_ops.symlink(w,R,h)},rename(h,m){var y=vt.dirname(h),w=vt.dirname(m),R=vt.basename(h),W=vt.basename(m),$,nt,xt;if($=I.lookupPath(h,{parent:!0}),nt=$.node,$=I.lookupPath(m,{parent:!0}),xt=$.node,!nt||!xt)throw new I.ErrnoError(44);if(nt.mount!==xt.mount)throw new I.ErrnoError(75);var Nt=I.lookupNode(nt,R),$t=jt.relative(h,w);if($t.charAt(0)!==".")throw new I.ErrnoError(28);if($t=jt.relative(m,y),$t.charAt(0)!==".")throw new I.ErrnoError(55);var te;try{te=I.lookupNode(xt,W)}catch{}if(Nt!==te){var ce=I.isDir(Nt.mode),se=I.mayDelete(nt,R,ce);if(se)throw new I.ErrnoError(se);if(se=te?I.mayDelete(xt,W,ce):I.mayCreate(xt,W),se)throw new I.ErrnoError(se);if(!nt.node_ops.rename)throw new I.ErrnoError(63);if(I.isMountpoint(Nt)||te&&I.isMountpoint(te))throw new I.ErrnoError(10);if(xt!==nt&&(se=I.nodePermissions(nt,"w"),se))throw new I.ErrnoError(se);I.hashRemoveNode(Nt);try{nt.node_ops.rename(Nt,xt,W),Nt.parent=xt}catch(ye){throw ye}finally{I.hashAddNode(Nt)}}},rmdir(h){var m=I.lookupPath(h,{parent:!0}),y=m.node,w=vt.basename(h),R=I.lookupNode(y,w),W=I.mayDelete(y,w,!0);if(W)throw new I.ErrnoError(W);if(!y.node_ops.rmdir)throw new I.ErrnoError(63);if(I.isMountpoint(R))throw new I.ErrnoError(10);y.node_ops.rmdir(y,w),I.destroyNode(R)},readdir(h){var m=I.lookupPath(h,{follow:!0}),y=m.node;if(!y.node_ops.readdir)throw new I.ErrnoError(54);return y.node_ops.readdir(y)},unlink(h){var m=I.lookupPath(h,{parent:!0}),y=m.node;if(!y)throw new I.ErrnoError(44);var w=vt.basename(h),R=I.lookupNode(y,w),W=I.mayDelete(y,w,!1);if(W)throw new I.ErrnoError(W);if(!y.node_ops.unlink)throw new I.ErrnoError(63);if(I.isMountpoint(R))throw new I.ErrnoError(10);y.node_ops.unlink(y,w),I.destroyNode(R)},readlink(h){var m=I.lookupPath(h),y=m.node;if(!y)throw new I.ErrnoError(44);if(!y.node_ops.readlink)throw new I.ErrnoError(28);return jt.resolve(I.getPath(y.parent),y.node_ops.readlink(y))},stat(h,m){var y=I.lookupPath(h,{follow:!m}),w=y.node;if(!w)throw new I.ErrnoError(44);if(!w.node_ops.getattr)throw new I.ErrnoError(63);return w.node_ops.getattr(w)},lstat(h){return I.stat(h,!0)},chmod(h,m,y){var w;if(typeof h=="string"){var R=I.lookupPath(h,{follow:!y});w=R.node}else w=h;if(!w.node_ops.setattr)throw new I.ErrnoError(63);w.node_ops.setattr(w,{mode:m&4095|w.mode&-4096,timestamp:Date.now()})},lchmod(h,m){I.chmod(h,m,!0)},fchmod(h,m){var y=I.getStreamChecked(h);I.chmod(y.node,m)},chown(h,m,y,w){var R;if(typeof h=="string"){var W=I.lookupPath(h,{follow:!w});R=W.node}else R=h;if(!R.node_ops.setattr)throw new I.ErrnoError(63);R.node_ops.setattr(R,{timestamp:Date.now()})},lchown(h,m,y){I.chown(h,m,y,!0)},fchown(h,m,y){var w=I.getStreamChecked(h);I.chown(w.node,m,y)},truncate(h,m){if(m<0)throw new I.ErrnoError(28);var y;if(typeof h=="string"){var w=I.lookupPath(h,{follow:!0});y=w.node}else y=h;if(!y.node_ops.setattr)throw new I.ErrnoError(63);if(I.isDir(y.mode))throw new I.ErrnoError(31);if(!I.isFile(y.mode))throw new I.ErrnoError(28);var R=I.nodePermissions(y,"w");if(R)throw new I.ErrnoError(R);y.node_ops.setattr(y,{size:m,timestamp:Date.now()})},ftruncate(h,m){var y=I.getStreamChecked(h);if((y.flags&2097155)===0)throw new I.ErrnoError(28);I.truncate(y.node,m)},utime(h,m,y){var w=I.lookupPath(h,{follow:!0}),R=w.node;R.node_ops.setattr(R,{timestamp:Math.max(m,y)})},open(h,m,y){if(h==="")throw new I.ErrnoError(44);m=typeof m=="string"?Rs(m):m,m&64?(y=typeof y>"u"?438:y,y=y&4095|32768):y=0;var w;if(typeof h=="object")w=h;else{h=vt.normalize(h);try{var R=I.lookupPath(h,{follow:!(m&131072)});w=R.node}catch{}}var W=!1;if(m&64)if(w){if(m&128)throw new I.ErrnoError(20)}else w=I.mknod(h,y,0),W=!0;if(!w)throw new I.ErrnoError(44);if(I.isChrdev(w.mode)&&(m&=-513),m&65536&&!I.isDir(w.mode))throw new I.ErrnoError(54);if(!W){var $=I.mayOpen(w,m);if($)throw new I.ErrnoError($)}m&512&&!W&&I.truncate(w,0),m&=-131713;var nt=I.createStream({node:w,path:I.getPath(w),flags:m,seekable:!0,position:0,stream_ops:w.stream_ops,ungotten:[],error:!1});return nt.stream_ops.open&&nt.stream_ops.open(nt),i.logReadFiles&&!(m&1)&&(h in I.readFiles||(I.readFiles[h]=1)),nt},close(h){if(I.isClosed(h))throw new I.ErrnoError(8);h.getdents&&(h.getdents=null);try{h.stream_ops.close&&h.stream_ops.close(h)}catch(m){throw m}finally{I.closeStream(h.fd)}h.fd=null},isClosed(h){return h.fd===null},llseek(h,m,y){if(I.isClosed(h))throw new I.ErrnoError(8);if(!h.seekable||!h.stream_ops.llseek)throw new I.ErrnoError(70);if(y!=0&&y!=1&&y!=2)throw new I.ErrnoError(28);return h.position=h.stream_ops.llseek(h,m,y),h.ungotten=[],h.position},read(h,m,y,w,R){if(w<0||R<0)throw new I.ErrnoError(28);if(I.isClosed(h))throw new I.ErrnoError(8);if((h.flags&2097155)===1)throw new I.ErrnoError(8);if(I.isDir(h.node.mode))throw new I.ErrnoError(31);if(!h.stream_ops.read)throw new I.ErrnoError(28);var W=typeof R<"u";if(!W)R=h.position;else if(!h.seekable)throw new I.ErrnoError(70);var $=h.stream_ops.read(h,m,y,w,R);return W||(h.position+=$),$},write(h,m,y,w,R,W){if(w<0||R<0)throw new I.ErrnoError(28);if(I.isClosed(h))throw new I.ErrnoError(8);if((h.flags&2097155)===0)throw new I.ErrnoError(8);if(I.isDir(h.node.mode))throw new I.ErrnoError(31);if(!h.stream_ops.write)throw new I.ErrnoError(28);h.seekable&&h.flags&1024&&I.llseek(h,0,2);var $=typeof R<"u";if(!$)R=h.position;else if(!h.seekable)throw new I.ErrnoError(70);var nt=h.stream_ops.write(h,m,y,w,R,W);return $||(h.position+=nt),nt},allocate(h,m,y){if(I.isClosed(h))throw new I.ErrnoError(8);if(m<0||y<=0)throw new I.ErrnoError(28);if((h.flags&2097155)===0)throw new I.ErrnoError(8);if(!I.isFile(h.node.mode)&&!I.isDir(h.node.mode))throw new I.ErrnoError(43);if(!h.stream_ops.allocate)throw new I.ErrnoError(138);h.stream_ops.allocate(h,m,y)},mmap(h,m,y,w,R){if((w&2)!==0&&(R&2)===0&&(h.flags&2097155)!==2)throw new I.ErrnoError(2);if((h.flags&2097155)===1)throw new I.ErrnoError(2);if(!h.stream_ops.mmap)throw new I.ErrnoError(43);if(!m)throw new I.ErrnoError(28);return h.stream_ops.mmap(h,m,y,w,R)},msync(h,m,y,w,R){return h.stream_ops.msync?h.stream_ops.msync(h,m,y,w,R):0},ioctl(h,m,y){if(!h.stream_ops.ioctl)throw new I.ErrnoError(59);return h.stream_ops.ioctl(h,m,y)},readFile(h,m={}){if(m.flags=m.flags||0,m.encoding=m.encoding||"binary",m.encoding!=="utf8"&&m.encoding!=="binary")throw new Error(`Invalid encoding type "${m.encoding}"`);var y,w=I.open(h,m.flags),R=I.stat(h),W=R.size,$=new Uint8Array(W);return I.read(w,$,0,W,0),m.encoding==="utf8"?y=Ft($):m.encoding==="binary"&&(y=$),I.close(w),y},writeFile(h,m,y={}){y.flags=y.flags||577;var w=I.open(h,y.flags,y.mode);if(typeof m=="string"){var R=new Uint8Array(ae(m)+1),W=_e(m,R,0,R.length);I.write(w,R,0,W,void 0,y.canOwn)}else if(ArrayBuffer.isView(m))I.write(w,m,0,m.byteLength,void 0,y.canOwn);else throw new Error("Unsupported data type");I.close(w)},cwd:()=>I.currentPath,chdir(h){var m=I.lookupPath(h,{follow:!0});if(m.node===null)throw new I.ErrnoError(44);if(!I.isDir(m.node.mode))throw new I.ErrnoError(54);var y=I.nodePermissions(m.node,"x");if(y)throw new I.ErrnoError(y);I.currentPath=m.path},createDefaultDirectories(){I.mkdir("/tmp"),I.mkdir("/home"),I.mkdir("/home/web_user")},createDefaultDevices(){I.mkdir("/dev"),I.registerDevice(I.makedev(1,3),{read:()=>0,write:(w,R,W,$,nt)=>$}),I.mkdev("/dev/null",I.makedev(1,3)),Mt.register(I.makedev(5,0),Mt.default_tty_ops),Mt.register(I.makedev(6,0),Mt.default_tty1_ops),I.mkdev("/dev/tty",I.makedev(5,0)),I.mkdev("/dev/tty1",I.makedev(6,0));var h=new Uint8Array(1024),m=0,y=()=>(m===0&&(m=kt(h).byteLength),h[--m]);I.createDevice("/dev","random",y),I.createDevice("/dev","urandom",y),I.mkdir("/dev/shm"),I.mkdir("/dev/shm/tmp")},createSpecialDirectories(){I.mkdir("/proc");var h=I.mkdir("/proc/self");I.mkdir("/proc/self/fd"),I.mount({mount(){var m=I.createNode(h,"fd",16895,73);return m.node_ops={lookup(y,w){var R=+w,W=I.getStreamChecked(R),$={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>W.path}};return $.parent=$,$}},m}},{},"/proc/self/fd")},createStandardStreams(h,m,y){h?I.createDevice("/dev","stdin",h):I.symlink("/dev/tty","/dev/stdin"),m?I.createDevice("/dev","stdout",null,m):I.symlink("/dev/tty","/dev/stdout"),y?I.createDevice("/dev","stderr",null,y):I.symlink("/dev/tty1","/dev/stderr");var w=I.open("/dev/stdin",0),R=I.open("/dev/stdout",1),W=I.open("/dev/stderr",1)},staticInit(){[44].forEach(h=>{I.genericErrors[h]=new I.ErrnoError(h),I.genericErrors[h].stack="<generic error, no stack>"}),I.nameTable=new Array(4096),I.mount(Lt,{},"/"),I.createDefaultDirectories(),I.createDefaultDevices(),I.createSpecialDirectories(),I.filesystems={MEMFS:Lt}},init(h,m,y){I.initialized=!0,h??=i.stdin,m??=i.stdout,y??=i.stderr,I.createStandardStreams(h,m,y)},quit(){I.initialized=!1;for(var h=0;h<I.streams.length;h++){var m=I.streams[h];m&&I.close(m)}},findObject(h,m){var y=I.analyzePath(h,m);return y.exists?y.object:null},analyzePath(h,m){try{var y=I.lookupPath(h,{follow:!m});h=y.path}catch{}var w={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var y=I.lookupPath(h,{parent:!0});w.parentExists=!0,w.parentPath=y.path,w.parentObject=y.node,w.name=vt.basename(h),y=I.lookupPath(h,{follow:!m}),w.exists=!0,w.path=y.path,w.object=y.node,w.name=y.node.name,w.isRoot=y.path==="/"}catch(R){w.error=R.errno}return w},createPath(h,m,y,w){h=typeof h=="string"?h:I.getPath(h);for(var R=m.split("/").reverse();R.length;){var W=R.pop();if(W){var $=vt.join2(h,W);try{I.mkdir($)}catch{}h=$}}return $},createFile(h,m,y,w,R){var W=vt.join2(typeof h=="string"?h:I.getPath(h),m),$=lr(w,R);return I.create(W,$)},createDataFile(h,m,y,w,R,W){var $=m;h&&(h=typeof h=="string"?h:I.getPath(h),$=m?vt.join2(h,m):h);var nt=lr(w,R),xt=I.create($,nt);if(y){if(typeof y=="string"){for(var Nt=new Array(y.length),$t=0,te=y.length;$t<te;++$t)Nt[$t]=y.charCodeAt($t);y=Nt}I.chmod(xt,nt|146);var ce=I.open(xt,577);I.write(ce,y,0,y.length,0,W),I.close(ce),I.chmod(xt,nt)}},createDevice(h,m,y,w){var R=vt.join2(typeof h=="string"?h:I.getPath(h),m),W=lr(!!y,!!w);I.createDevice.major??=64;var $=I.makedev(I.createDevice.major++,0);return I.registerDevice($,{open(nt){nt.seekable=!1},close(nt){w?.buffer?.length&&w(10)},read(nt,xt,Nt,$t,te){for(var ce=0,se=0;se<$t;se++){var ye;try{ye=y()}catch{throw new I.ErrnoError(29)}if(ye===void 0&&ce===0)throw new I.ErrnoError(6);if(ye==null)break;ce++,xt[Nt+se]=ye}return ce&&(nt.node.timestamp=Date.now()),ce},write(nt,xt,Nt,$t,te){for(var ce=0;ce<$t;ce++)try{w(xt[Nt+ce])}catch{throw new I.ErrnoError(29)}return $t&&(nt.node.timestamp=Date.now()),ce}}),I.mkdev(R,W,$)},forceLoadFile(h){if(h.isDevice||h.isFolder||h.link||h.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{h.contents=x(h.url),h.usedBytes=h.contents.length}catch{throw new I.ErrnoError(29)}},createLazyFile(h,m,y,w,R){class W{constructor(){this.lengthKnown=!1,this.chunks=[]}get(se){if(!(se>this.length-1||se<0)){var ye=se%this.chunkSize,Oe=se/this.chunkSize|0;return this.getter(Oe)[ye]}}setDataGetter(se){this.getter=se}cacheLength(){var se=new XMLHttpRequest;if(se.open("HEAD",y,!1),se.send(null),!(se.status>=200&&se.status<300||se.status===304))throw new Error("Couldn't load "+y+". Status: "+se.status);var ye=Number(se.getResponseHeader("Content-length")),Oe,mn=(Oe=se.getResponseHeader("Accept-Ranges"))&&Oe==="bytes",Ke=(Oe=se.getResponseHeader("Content-Encoding"))&&Oe==="gzip",$n=1024*1024;mn||($n=ye);var Zn=(fi,Dr)=>{if(fi>Dr)throw new Error("invalid range ("+fi+", "+Dr+") or no bytes requested!");if(Dr>ye-1)throw new Error("only "+ye+" bytes available! programmer error!");var un=new XMLHttpRequest;if(un.open("GET",y,!1),ye!==$n&&un.setRequestHeader("Range","bytes="+fi+"-"+Dr),un.responseType="arraybuffer",un.overrideMimeType&&un.overrideMimeType("text/plain; charset=x-user-defined"),un.send(null),!(un.status>=200&&un.status<300||un.status===304))throw new Error("Couldn't load "+y+". Status: "+un.status);return un.response!==void 0?new Uint8Array(un.response||[]):st(un.responseText||"",!0)},Fs=this;Fs.setDataGetter(fi=>{var Dr=fi*$n,un=(fi+1)*$n-1;if(un=Math.min(un,ye-1),typeof Fs.chunks[fi]>"u"&&(Fs.chunks[fi]=Zn(Dr,un)),typeof Fs.chunks[fi]>"u")throw new Error("doXHR failed!");return Fs.chunks[fi]}),(Ke||!ye)&&($n=ye=1,ye=this.getter(0).length,$n=ye,N("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ye,this._chunkSize=$n,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!f)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var $=new W,nt={isDevice:!1,contents:$}}else var nt={isDevice:!1,url:y};var xt=I.createFile(h,m,nt,w,R);nt.contents?xt.contents=nt.contents:nt.url&&(xt.contents=null,xt.url=nt.url),Object.defineProperties(xt,{usedBytes:{get:function(){return this.contents.length}}});var Nt={},$t=Object.keys(xt.stream_ops);$t.forEach(ce=>{var se=xt.stream_ops[ce];Nt[ce]=(...ye)=>(I.forceLoadFile(xt),se(...ye))});function te(ce,se,ye,Oe,mn){var Ke=ce.node.contents;if(mn>=Ke.length)return 0;var $n=Math.min(Ke.length-mn,Oe);if(Ke.slice)for(var Zn=0;Zn<$n;Zn++)se[ye+Zn]=Ke[mn+Zn];else for(var Zn=0;Zn<$n;Zn++)se[ye+Zn]=Ke.get(mn+Zn);return $n}return Nt.read=(ce,se,ye,Oe,mn)=>(I.forceLoadFile(xt),te(ce,se,ye,Oe,mn)),Nt.mmap=(ce,se,ye,Oe,mn)=>{I.forceLoadFile(xt);var Ke=Pt(se);if(!Ke)throw new I.ErrnoError(48);return te(ce,K,Ke,se,ye),{ptr:Ke,allocated:!0}},xt.stream_ops=Nt,xt}},Mi=(h,m)=>h?Ft(it,h,m):"",Re={DEFAULT_POLLMASK:5,calculateAt(h,m,y){if(vt.isAbs(m))return m;var w;if(h===-100)w=I.cwd();else{var R=Re.getStreamFromFD(h);w=R.path}if(m.length==0){if(!y)throw new I.ErrnoError(44);return w}return vt.join2(w,m)},doStat(h,m,y){var w=h(m);z[y>>2]=w.dev,z[y+4>>2]=w.mode,tt[y+8>>2]=w.nlink,z[y+12>>2]=w.uid,z[y+16>>2]=w.gid,z[y+20>>2]=w.rdev,rt=[w.size>>>0,(G=w.size,+Math.abs(G)>=1?G>0?+Math.floor(G/4294967296)>>>0:~~+Math.ceil((G-+(~~G>>>0))/4294967296)>>>0:0)],z[y+24>>2]=rt[0],z[y+28>>2]=rt[1],z[y+32>>2]=4096,z[y+36>>2]=w.blocks;var R=w.atime.getTime(),W=w.mtime.getTime(),$=w.ctime.getTime();return rt=[Math.floor(R/1e3)>>>0,(G=Math.floor(R/1e3),+Math.abs(G)>=1?G>0?+Math.floor(G/4294967296)>>>0:~~+Math.ceil((G-+(~~G>>>0))/4294967296)>>>0:0)],z[y+40>>2]=rt[0],z[y+44>>2]=rt[1],tt[y+48>>2]=R%1e3*1e3*1e3,rt=[Math.floor(W/1e3)>>>0,(G=Math.floor(W/1e3),+Math.abs(G)>=1?G>0?+Math.floor(G/4294967296)>>>0:~~+Math.ceil((G-+(~~G>>>0))/4294967296)>>>0:0)],z[y+56>>2]=rt[0],z[y+60>>2]=rt[1],tt[y+64>>2]=W%1e3*1e3*1e3,rt=[Math.floor($/1e3)>>>0,(G=Math.floor($/1e3),+Math.abs(G)>=1?G>0?+Math.floor(G/4294967296)>>>0:~~+Math.ceil((G-+(~~G>>>0))/4294967296)>>>0:0)],z[y+72>>2]=rt[0],z[y+76>>2]=rt[1],tt[y+80>>2]=$%1e3*1e3*1e3,rt=[w.ino>>>0,(G=w.ino,+Math.abs(G)>=1?G>0?+Math.floor(G/4294967296)>>>0:~~+Math.ceil((G-+(~~G>>>0))/4294967296)>>>0:0)],z[y+88>>2]=rt[0],z[y+92>>2]=rt[1],0},doMsync(h,m,y,w,R){if(!I.isFile(m.node.mode))throw new I.ErrnoError(43);if(w&2)return 0;var W=it.slice(h,h+y);I.msync(m,W,R,y,w)},getStreamFromFD(h){var m=I.getStreamChecked(h);return m},varargs:void 0,getStr(h){var m=Mi(h);return m}};function Er(h,m){try{return h=Re.getStr(h),I.chmod(h,m),0}catch(y){if(typeof I>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}function Tr(h,m,y,w){try{if(m=Re.getStr(m),m=Re.calculateAt(h,m),y&-8)return-28;var R=I.lookupPath(m,{follow:!0}),W=R.node;if(!W)return-44;var $="";return y&4&&($+="r"),y&2&&($+="w"),y&1&&($+="x"),$&&I.nodePermissions(W,$)?-2:0}catch(nt){if(typeof I>"u"||nt.name!=="ErrnoError")throw nt;return-nt.errno}}function An(){var h=z[+Re.varargs>>2];return Re.varargs+=4,h}var Vn=An;function Ar(h,m,y){Re.varargs=y;try{var w=Re.getStreamFromFD(h);switch(m){case 0:{var R=An();if(R<0)return-28;for(;I.streams[R];)R++;var W;return W=I.dupStream(w,R),W.fd}case 1:case 2:return 0;case 3:return w.flags;case 4:{var R=An();return w.flags|=R,0}case 12:{var R=Vn(),$=0;return ht[R+$>>1]=2,0}case 13:case 14:return 0}return-28}catch(nt){if(typeof I>"u"||nt.name!=="ErrnoError")throw nt;return-nt.errno}}function hi(h,m){try{var y=Re.getStreamFromFD(h);return Re.doStat(I.stat,y.path,m)}catch(w){if(typeof I>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function bi(h,m,y){Re.varargs=y;try{var w=Re.getStreamFromFD(h);switch(m){case 21509:return w.tty?0:-59;case 21505:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tcgets){var R=w.tty.ops.ioctl_tcgets(w),W=Vn();z[W>>2]=R.c_iflag||0,z[W+4>>2]=R.c_oflag||0,z[W+8>>2]=R.c_cflag||0,z[W+12>>2]=R.c_lflag||0;for(var $=0;$<32;$++)K[W+$+17]=R.c_cc[$]||0;return 0}return 0}case 21510:case 21511:case 21512:return w.tty?0:-59;case 21506:case 21507:case 21508:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tcsets){for(var W=Vn(),nt=z[W>>2],xt=z[W+4>>2],Nt=z[W+8>>2],$t=z[W+12>>2],te=[],$=0;$<32;$++)te.push(K[W+$+17]);return w.tty.ops.ioctl_tcsets(w.tty,m,{c_iflag:nt,c_oflag:xt,c_cflag:Nt,c_lflag:$t,c_cc:te})}return 0}case 21519:{if(!w.tty)return-59;var W=Vn();return z[W>>2]=0,0}case 21520:return w.tty?-28:-59;case 21531:{var W=Vn();return I.ioctl(w,m,W)}case 21523:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tiocgwinsz){var ce=w.tty.ops.ioctl_tiocgwinsz(w.tty),W=Vn();ht[W>>1]=ce[0],ht[W+2>>1]=ce[1]}return 0}case 21524:return w.tty?0:-59;case 21515:return w.tty?0:-59;default:return-28}}catch(se){if(typeof I>"u"||se.name!=="ErrnoError")throw se;return-se.errno}}function Pr(h,m){try{return h=Re.getStr(h),Re.doStat(I.lstat,h,m)}catch(y){if(typeof I>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}function Oi(h,m,y,w){try{m=Re.getStr(m);var R=w&256,W=w&4096;return w=w&-6401,m=Re.calculateAt(h,m,W),Re.doStat(R?I.lstat:I.stat,m,y)}catch($){if(typeof I>"u"||$.name!=="ErrnoError")throw $;return-$.errno}}function Cr(h,m,y,w){Re.varargs=w;try{m=Re.getStr(m),m=Re.calculateAt(h,m);var R=w?An():0;return I.open(m,y,R).fd}catch(W){if(typeof I>"u"||W.name!=="ErrnoError")throw W;return-W.errno}}function Ir(h){try{return h=Re.getStr(h),I.rmdir(h),0}catch(m){if(typeof I>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}function Ls(h,m){try{return h=Re.getStr(h),Re.doStat(I.stat,h,m)}catch(y){if(typeof I>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}function ui(h,m,y){try{return m=Re.getStr(m),m=Re.calculateAt(h,m),y===0?I.unlink(m):y===512?I.rmdir(m):Ce("Invalid flags passed to unlinkat"),0}catch(w){if(typeof I>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}var Ns=()=>{Ce("")},Ds=(h,m,y,w,R)=>{},Rr=()=>{for(var h=new Array(256),m=0;m<256;++m)h[m]=String.fromCharCode(m);L=h},L,et=h=>{for(var m="",y=h;it[y];)m+=L[it[y++]];return m},yt={},ft={},dt={},Yt,Dt=h=>{throw new Yt(h)},Wt,Qt=h=>{throw new Wt(h)},ie=(h,m,y)=>{h.forEach(nt=>dt[nt]=m);function w(nt){var xt=y(nt);xt.length!==h.length&&Qt("Mismatched type converter count");for(var Nt=0;Nt<h.length;++Nt)pe(h[Nt],xt[Nt])}var R=new Array(m.length),W=[],$=0;m.forEach((nt,xt)=>{ft.hasOwnProperty(nt)?R[xt]=ft[nt]:(W.push(nt),yt.hasOwnProperty(nt)||(yt[nt]=[]),yt[nt].push(()=>{R[xt]=ft[nt],++$,$===W.length&&w(R)}))}),W.length===0&&w(R)};function Ht(h,m,y={}){var w=m.name;if(h||Dt(`type "${w}" must have a positive integer typeid pointer`),ft.hasOwnProperty(h)){if(y.ignoreDuplicateRegistrations)return;Dt(`Cannot register type '${w}' twice`)}if(ft[h]=m,delete dt[h],yt.hasOwnProperty(h)){var R=yt[h];delete yt[h],R.forEach(W=>W())}}function pe(h,m,y={}){return Ht(h,m,y)}var Jt=8,Ne=(h,m,y,w)=>{m=et(m),pe(h,{name:m,fromWireType:function(R){return!!R},toWireType:function(R,W){return W?y:w},argPackAdvance:Jt,readValueFromPointer:function(R){return this.fromWireType(it[R])},destructorFunction:null})},Xe=[],Pe=[],r=h=>{h>9&&--Pe[h+1]===0&&(Pe[h]=void 0,Xe.push(h))},a=()=>Pe.length/2-5-Xe.length,l=()=>{Pe.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=a},p={toValue:h=>(h||Dt("Cannot use deleted val. handle = "+h),Pe[h]),toHandle:h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let m=Xe.pop()||Pe.length;return Pe[m]=h,Pe[m+1]=1,m}}}};function v(h){return this.fromWireType(tt[h>>2])}var A={name:"emscripten::val",fromWireType:h=>{var m=p.toValue(h);return r(h),m},toWireType:(h,m)=>p.toHandle(m),argPackAdvance:Jt,readValueFromPointer:v,destructorFunction:null},D=h=>pe(h,A),q=(h,m)=>{switch(m){case 4:return function(y){return this.fromWireType(H[y>>2])};case 8:return function(y){return this.fromWireType(_t[y>>3])};default:throw new TypeError(`invalid float width (${m}): ${h}`)}},Z=(h,m,y)=>{m=et(m),pe(h,{name:m,fromWireType:w=>w,toWireType:(w,R)=>R,argPackAdvance:Jt,readValueFromPointer:q(m,y),destructorFunction:null})},ct=(h,m)=>Object.defineProperty(m,"name",{value:h}),wt=h=>{for(;h.length;){var m=h.pop(),y=h.pop();y(m)}};function bt(h){for(var m=1;m<h.length;++m)if(h[m]!==null&&h[m].destructorFunction===void 0)return!0;return!1}function Ct(h,m){if(!(h instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof h} which is not a function`);var y=ct(h.name||"unknownFunctionName",function(){});y.prototype=h.prototype;var w=new y,R=h.apply(w,m);return R instanceof Object?R:w}function re(h,m,y,w){var R=bt(h),W=h.length-2,$=[],nt=["fn"];m&&nt.push("thisWired");for(var xt=0;xt<W;++xt)$.push(`arg${xt}`),nt.push(`arg${xt}Wired`);$=$.join(","),nt=nt.join(",");var Nt=`return function (${$}) {
`;R&&(Nt+=`var destructors = [];
`);var $t=R?"destructors":"null",te=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];m&&(Nt+=`var thisWired = classParam['toWireType'](${$t}, this);
`);for(var xt=0;xt<W;++xt)Nt+=`var arg${xt}Wired = argType${xt}['toWireType'](${$t}, arg${xt});
`,te.push(`argType${xt}`);if(Nt+=(y||w?"var rv = ":"")+`invoker(${nt});
`,R)Nt+=`runDestructors(destructors);
`;else for(var xt=m?1:2;xt<h.length;++xt){var ce=xt===1?"thisWired":"arg"+(xt-2)+"Wired";h[xt].destructorFunction!==null&&(Nt+=`${ce}_dtor(${ce});
`,te.push(`${ce}_dtor`))}return y&&(Nt+=`var ret = retType['fromWireType'](rv);
return ret;
`),Nt+=`}
`,[te,Nt]}function ve(h,m,y,w,R,W){var $=m.length;$<2&&Dt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var nt=m[1]!==null&&y!==null,xt=bt(m),Nt=m[0].name!=="void",$t=[h,Dt,w,R,wt,m[0],m[1]],te=0;te<$-2;++te)$t.push(m[te+2]);if(!xt)for(var te=nt?1:2;te<m.length;++te)m[te].destructorFunction!==null&&$t.push(m[te].destructorFunction);let[ce,se]=re(m,nt,Nt,W);ce.push(se);var ye=Ct(Function,ce)(...$t);return ct(h,ye)}var Ee=(h,m,y)=>{if(h[m].overloadTable===void 0){var w=h[m];h[m]=function(...R){return h[m].overloadTable.hasOwnProperty(R.length)||Dt(`Function '${y}' called with an invalid number of arguments (${R.length}) - expects one of (${h[m].overloadTable})!`),h[m].overloadTable[R.length].apply(this,R)},h[m].overloadTable=[],h[m].overloadTable[w.argCount]=w}},Be=(h,m,y)=>{i.hasOwnProperty(h)?((y===void 0||i[h].overloadTable!==void 0&&i[h].overloadTable[y]!==void 0)&&Dt(`Cannot register public name '${h}' twice`),Ee(i,h,h),i.hasOwnProperty(y)&&Dt(`Cannot register multiple overloads of a function with the same number of arguments (${y})!`),i[h].overloadTable[y]=m):(i[h]=m,y!==void 0&&(i[h].numArguments=y))},pn=(h,m)=>{for(var y=[],w=0;w<h;w++)y.push(tt[m+w*4>>2]);return y},Hn=(h,m,y)=>{i.hasOwnProperty(h)||Qt("Replacing nonexistent public symbol"),i[h].overloadTable!==void 0&&y!==void 0?i[h].overloadTable[y]=m:(i[h]=m,i[h].argCount=y)},Fi=(h,m,y)=>{h=h.replace(/p/g,"i");var w=i["dynCall_"+h];return w(m,...y)},Lr=[],Uo,wi=h=>{var m=Lr[h];return m||(h>=Lr.length&&(Lr.length=h+1),Lr[h]=m=Uo.get(h)),m},Kd=(h,m,y=[])=>{if(h.includes("j"))return Fi(h,m,y);var w=wi(m)(...y);return w},Qd=(h,m)=>(...y)=>Kd(h,m,y),tp=(h,m)=>{h=et(h);function y(){return h.includes("j")?Qd(h,m):wi(m)}var w=y();return typeof w!="function"&&Dt(`unknown function pointer with signature ${h}: ${m}`),w},ep=(h,m)=>{var y=ct(m,function(w){this.name=m,this.message=w;var R=new Error(w).stack;R!==void 0&&(this.stack=this.toString()+`
`+R.replace(/^Error(:[^\n]*)?\n/,""))});return y.prototype=Object.create(h.prototype),y.prototype.constructor=y,y.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},y},Qh,tu=h=>{var m=ou(h),y=et(m);return Ei(m),y},np=(h,m)=>{var y=[],w={};function R(W){if(!w[W]&&!ft[W]){if(dt[W]){dt[W].forEach(R);return}y.push(W),w[W]=!0}}throw m.forEach(R),new Qh(`${h}: `+y.map(tu).join([", "]))},ip=h=>{h=h.trim();let m=h.indexOf("(");return m!==-1?h.substr(0,m):h},rp=(h,m,y,w,R,W,$,nt)=>{var xt=pn(m,y);h=et(h),h=ip(h),R=tp(w,R),Be(h,function(){np(`Cannot call ${h} due to unbound types`,xt)},m-1),ie([],xt,Nt=>{var $t=[Nt[0],null].concat(Nt.slice(1));return Hn(h,ve(h,$t,null,R,W,$),m-1),[]})},sp=(h,m,y)=>{switch(m){case 1:return y?w=>K[w]:w=>it[w];case 2:return y?w=>ht[w>>1]:w=>Q[w>>1];case 4:return y?w=>z[w>>2]:w=>tt[w>>2];default:throw new TypeError(`invalid integer width (${m}): ${h}`)}},op=(h,m,y,w,R)=>{m=et(m),R===-1&&(R=4294967295);var W=$t=>$t;if(w===0){var $=32-8*y;W=$t=>$t<<$>>>$}var nt=m.includes("unsigned"),xt=($t,te)=>{},Nt;nt?Nt=function($t,te){return xt(te,this.name),te>>>0}:Nt=function($t,te){return xt(te,this.name),te},pe(h,{name:m,fromWireType:W,toWireType:Nt,argPackAdvance:Jt,readValueFromPointer:sp(m,y,w!==0),destructorFunction:null})},ap=(h,m,y)=>{var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],R=w[m];function W($){var nt=tt[$>>2],xt=tt[$+4>>2];return new R(K.buffer,xt,nt)}y=et(y),pe(h,{name:y,fromWireType:W,argPackAdvance:Jt,readValueFromPointer:W},{ignoreDuplicateRegistrations:!0})},Nr=(h,m,y)=>_e(h,it,m,y),lp=(h,m)=>{m=et(m);var y=m==="std::string";pe(h,{name:m,fromWireType(w){var R=tt[w>>2],W=w+4,$;if(y)for(var nt=W,xt=0;xt<=R;++xt){var Nt=W+xt;if(xt==R||it[Nt]==0){var $t=Nt-nt,te=Mi(nt,$t);$===void 0?$=te:($+="\0",$+=te),nt=Nt+1}}else{for(var ce=new Array(R),xt=0;xt<R;++xt)ce[xt]=String.fromCharCode(it[W+xt]);$=ce.join("")}return Ei(w),$},toWireType(w,R){R instanceof ArrayBuffer&&(R=new Uint8Array(R));var W,$=typeof R=="string";$||R instanceof Uint8Array||R instanceof Uint8ClampedArray||R instanceof Int8Array||Dt("Cannot pass non-string to std::string"),y&&$?W=ae(R):W=R.length;var nt=lc(4+W+1),xt=nt+4;if(tt[nt>>2]=W,y&&$)Nr(R,xt,W+1);else if($)for(var Nt=0;Nt<W;++Nt){var $t=R.charCodeAt(Nt);$t>255&&(Ei(xt),Dt("String has UTF-16 code units that do not fit in 8 bits")),it[xt+Nt]=$t}else for(var Nt=0;Nt<W;++Nt)it[xt+Nt]=R[Nt];return w!==null&&w.push(Ei,nt),nt},argPackAdvance:Jt,readValueFromPointer:v,destructorFunction(w){Ei(w)}})},eu=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,cp=(h,m)=>{for(var y=h,w=y>>1,R=w+m/2;!(w>=R)&&Q[w];)++w;if(y=w<<1,y-h>32&&eu)return eu.decode(it.subarray(h,y));for(var W="",$=0;!($>=m/2);++$){var nt=ht[h+$*2>>1];if(nt==0)break;W+=String.fromCharCode(nt)}return W},hp=(h,m,y)=>{if(y??=2147483647,y<2)return 0;y-=2;for(var w=m,R=y<h.length*2?y/2:h.length,W=0;W<R;++W){var $=h.charCodeAt(W);ht[m>>1]=$,m+=2}return ht[m>>1]=0,m-w},up=h=>h.length*2,fp=(h,m)=>{for(var y=0,w="";!(y>=m/4);){var R=z[h+y*4>>2];if(R==0)break;if(++y,R>=65536){var W=R-65536;w+=String.fromCharCode(55296|W>>10,56320|W&1023)}else w+=String.fromCharCode(R)}return w},dp=(h,m,y)=>{if(y??=2147483647,y<4)return 0;for(var w=m,R=w+y-4,W=0;W<h.length;++W){var $=h.charCodeAt(W);if($>=55296&&$<=57343){var nt=h.charCodeAt(++W);$=65536+(($&1023)<<10)|nt&1023}if(z[m>>2]=$,m+=4,m+4>R)break}return z[m>>2]=0,m-w},pp=h=>{for(var m=0,y=0;y<h.length;++y){var w=h.charCodeAt(y);w>=55296&&w<=57343&&++y,m+=4}return m},mp=(h,m,y)=>{y=et(y);var w,R,W,$;m===2?(w=cp,R=hp,$=up,W=nt=>Q[nt>>1]):m===4&&(w=fp,R=dp,$=pp,W=nt=>tt[nt>>2]),pe(h,{name:y,fromWireType:nt=>{for(var xt=tt[nt>>2],Nt,$t=nt+4,te=0;te<=xt;++te){var ce=nt+4+te*m;if(te==xt||W(ce)==0){var se=ce-$t,ye=w($t,se);Nt===void 0?Nt=ye:(Nt+="\0",Nt+=ye),$t=ce+m}}return Ei(nt),Nt},toWireType:(nt,xt)=>{typeof xt!="string"&&Dt(`Cannot pass non-string to C++ string type ${y}`);var Nt=$(xt),$t=lc(4+Nt+m);return tt[$t>>2]=Nt/m,R(xt,$t+4,Nt+m),nt!==null&&nt.push(Ei,$t),$t},argPackAdvance:Jt,readValueFromPointer:v,destructorFunction(nt){Ei(nt)}})},gp=(h,m)=>{m=et(m),pe(h,{isVoid:!0,name:m,argPackAdvance:0,fromWireType:()=>{},toWireType:(y,w)=>{}})},_p=1,vp=()=>_p,nu=h=>{for(var m=h.split("."),y=0;y<4;y++){var w=Number(m[y]);if(isNaN(w))return null;m[y]=w}return(m[0]|m[1]<<8|m[2]<<16|m[3]<<24)>>>0},Bo=h=>parseInt(h),yp=h=>{var m,y,w,R,W=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,$=[];if(!W.test(h))return null;if(h==="::")return[0,0,0,0,0,0,0,0];for(h.startsWith("::")?h=h.replace("::","Z:"):h=h.replace("::",":Z:"),h.indexOf(".")>0?(h=h.replace(new RegExp("[.]","g"),":"),m=h.split(":"),m[m.length-4]=Bo(m[m.length-4])+Bo(m[m.length-3])*256,m[m.length-3]=Bo(m[m.length-2])+Bo(m[m.length-1])*256,m=m.slice(0,m.length-2)):m=h.split(":"),w=0,R=0,y=0;y<m.length;y++)if(typeof m[y]=="string")if(m[y]==="Z"){for(R=0;R<8-m.length+1;R++)$[y+R]=0;w=R-1}else $[y+w]=au(parseInt(m[y],16));else $[y+w]=m[y];return[$[1]<<16|$[0],$[3]<<16|$[2],$[5]<<16|$[4],$[7]<<16|$[6]]},Ui={address_map:{id:1,addrs:{},names:{}},lookup_name(h){var m=nu(h);if(m!==null||(m=yp(h),m!==null))return h;var y;if(Ui.address_map.addrs[h])y=Ui.address_map.addrs[h];else{var w=Ui.address_map.id++;J(w<65535,"exceeded max address mappings of 65535"),y="172.29."+(w&255)+"."+(w&65280),Ui.address_map.names[y]=h,Ui.address_map.addrs[h]=y}return y},lookup_addr(h){return Ui.address_map.names[h]?Ui.address_map.names[h]:null}},xp=h=>{var m=Mi(h);return nu(Ui.lookup_name(m))},Sp=(h,m,y)=>it.copyWithin(h,m,m+y),ic=(h,m)=>{var y=ft[h];return y===void 0&&Dt(`${m} has unknown type ${tu(h)}`),y},iu=(h,m,y)=>{var w=[],R=h.toWireType(w,y);return w.length&&(tt[m>>2]=p.toHandle(w)),R},Mp=(h,m,y)=>(h=p.toValue(h),m=ic(m,"emval::as"),iu(m,y,h)),bp={},rc=h=>{var m=bp[h];return m===void 0?et(h):m},sc=[],wp=(h,m,y,w,R)=>(h=sc[h],m=p.toValue(m),y=rc(y),h(m,m[y],w,R)),ru=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),Ep=h=>h===0?p.toHandle(ru()):(h=rc(h),p.toHandle(ru()[h])),Tp=h=>{var m=sc.length;return sc.push(h),m},Ap=(h,m)=>{for(var y=new Array(h),w=0;w<h;++w)y[w]=ic(tt[m+w*4>>2],"parameter "+w);return y},fS=Reflect.construct,Pp=(h,m,y)=>{var w=Ap(h,m),R=w.shift();h--;var W=`return function (obj, func, destructorsRef, args) {
`,$=0,nt=[];y===0&&nt.push("obj");for(var xt=["retType"],Nt=[R],$t=0;$t<h;++$t)nt.push("arg"+$t),xt.push("argType"+$t),Nt.push(w[$t]),W+=`  var arg${$t} = argType${$t}.readValueFromPointer(args${$?"+"+$:""});
`,$+=w[$t].argPackAdvance;var te=y===1?"new func":"func.call";W+=`  var rv = ${te}(${nt.join(", ")});
`,R.isVoid||(xt.push("emval_returnValue"),Nt.push(iu),W+=`  return emval_returnValue(retType, destructorsRef, rv);
`),W+=`};
`,xt.push(W);var ce=Ct(Function,xt)(...Nt),se=`methodCaller<(${w.map(ye=>ye.name).join(", ")}) => ${R.name}>`;return Tp(ct(se,ce))},Cp=(h,m)=>(h=p.toValue(h),m=p.toValue(m),p.toHandle(h[m])),Ip=h=>{h>9&&(Pe[h+1]+=1)},Rp=()=>p.toHandle([]),Lp=h=>p.toHandle(rc(h)),Np=()=>p.toHandle({}),Dp=h=>{var m=p.toValue(h);wt(m),r(h)},Op=(h,m,y)=>{h=p.toValue(h),m=p.toValue(m),y=p.toValue(y),h[m]=y},Fp=(h,m)=>{h=ic(h,"_emval_take_value");var y=h.readValueFromPointer(m);return p.toHandle(y)},Up=h=>h%4===0&&(h%100!==0||h%400===0),Bp=[0,31,60,91,121,152,182,213,244,274,305,335],kp=[0,31,59,90,120,151,181,212,243,273,304,334],zp=h=>{var m=Up(h.getFullYear()),y=m?Bp:kp,w=y[h.getMonth()]+h.getDate()-1;return w},oc=(h,m)=>m+2097152>>>0<4194305-!!h?(h>>>0)+m*4294967296:NaN;function Vp(h,m,y){var w=oc(h,m),R=new Date(w*1e3);z[y>>2]=R.getSeconds(),z[y+4>>2]=R.getMinutes(),z[y+8>>2]=R.getHours(),z[y+12>>2]=R.getDate(),z[y+16>>2]=R.getMonth(),z[y+20>>2]=R.getFullYear()-1900,z[y+24>>2]=R.getDay();var W=zp(R)|0;z[y+28>>2]=W,z[y+36>>2]=-(R.getTimezoneOffset()*60);var $=new Date(R.getFullYear(),0,1),nt=new Date(R.getFullYear(),6,1).getTimezoneOffset(),xt=$.getTimezoneOffset(),Nt=(nt!=xt&&R.getTimezoneOffset()==Math.min(xt,nt))|0;z[y+32>>2]=Nt}function Hp(h,m,y,w,R,W,$){var nt=oc(W,$);try{var xt=Re.getStreamFromFD(R);y&2&&Re.doMsync(h,xt,m,w,nt)}catch(Nt){if(typeof I>"u"||Nt.name!=="ErrnoError")throw Nt;return-Nt.errno}}var Gp=(h,m,y,w)=>{var R=new Date().getFullYear(),W=new Date(R,0,1),$=new Date(R,6,1),nt=W.getTimezoneOffset(),xt=$.getTimezoneOffset(),Nt=Math.max(nt,xt);tt[h>>2]=Nt*60,z[m>>2]=+(nt!=xt);var $t=se=>{var ye=se>=0?"-":"+",Oe=Math.abs(se),mn=String(Math.floor(Oe/60)).padStart(2,"0"),Ke=String(Oe%60).padStart(2,"0");return`UTC${ye}${mn}${Ke}`},te=$t(nt),ce=$t(xt);xt<nt?(Nr(te,y,17),Nr(ce,w,17)):(Nr(te,w,17),Nr(ce,y,17))},Xp=()=>Date.now();function Wp(){return new Error().stack.toString()}var ko=h=>{ko.shown||={},ko.shown[h]||(ko.shown[h]=1,d&&(h="warning: "+h),O(h))};function Yp(h){var m=Wp(),y=m.lastIndexOf("_emscripten_log"),w=m.lastIndexOf("_emscripten_get_callstack"),R=m.indexOf(`
`,Math.max(y,w))+1;m=m.slice(R),h&8&&typeof emscripten_source_map>"u"&&(ko('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),h^=8,h|=16);var W=m.split(`
`);m="";var $=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),nt=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),xt=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Nt in W){var $t=W[Nt],te="",ce="",se=0,ye=0,Oe=xt.exec($t);if(Oe&&Oe.length==5)te=Oe[1],ce=Oe[2],se=Oe[3],ye=Oe[4];else if(Oe=$.exec($t)||nt.exec($t),Oe&&Oe.length>=4)te=Oe[1],ce=Oe[2],se=Oe[3],ye=Oe[4]|0;else{m+=$t+`
`;continue}var mn=!1;if(h&8){var Ke=emscripten_source_map.originalPositionFor({line:se,column:ye});mn=Ke?.source,mn&&(h&64&&(Ke.source=Ke.source.substring(Ke.source.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=`    at ${te} (${Ke.source}:${Ke.line}:${Ke.column})
`)}(h&16||!mn)&&(h&64&&(ce=ce.substring(ce.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=(mn?`     = ${te}`:`    at ${te}`)+` (${ce}:${se}:${ye})
`)}return m=m.replace(/\s+$/,""),m}function qp(h,m,y){var w=Yp(h);if(!m||y<=0)return ae(w)+1;var R=Nr(w,m,y);return R+1}var su=()=>2147483648,$p=()=>su(),Zp=h=>{var m=Y.buffer,y=(h-m.byteLength+65535)/65536|0;try{return Y.grow(y),at(),1}catch{}},Jp=h=>{var m=it.length;h>>>=0;var y=su();if(h>y)return!1;for(var w=1;w<=4;w*=2){var R=m*(1+.2/w);R=Math.min(R,h+100663296);var W=Math.min(y,qt(Math.max(h,R),65536)),$=Zp(W);if($)return!0}return!1},ac={},jp=()=>g||"./this.program",Os=()=>{if(!Os.strings){var h=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",m={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:h,_:jp()};for(var y in ac)ac[y]===void 0?delete m[y]:m[y]=ac[y];var w=[];for(var y in m)w.push(`${y}=${m[y]}`);Os.strings=w}return Os.strings},Kp=(h,m)=>{for(var y=0;y<h.length;++y)K[m++]=h.charCodeAt(y);K[m]=0},Qp=(h,m)=>{var y=0;return Os().forEach((w,R)=>{var W=m+y;tt[h+R*4>>2]=W,Kp(w,W),y+=w.length+1}),0},tm=(h,m)=>{var y=Os();tt[h>>2]=y.length;var w=0;return y.forEach(R=>w+=R.length+1),tt[m>>2]=w,0},em=0,nm=()=>Bt||em>0,im=h=>{V=h,nm()||(i.onExit?.(h),P=!0),b(h,new mt(h))},rm=(h,m)=>{V=h,im(h)},sm=rm;function om(h){try{var m=Re.getStreamFromFD(h);return I.close(m),0}catch(y){if(typeof I>"u"||y.name!=="ErrnoError")throw y;return y.errno}}var am=(h,m,y,w)=>{for(var R=0,W=0;W<y;W++){var $=tt[m>>2],nt=tt[m+4>>2];m+=8;var xt=I.read(h,K,$,nt,w);if(xt<0)return-1;if(R+=xt,xt<nt)break;typeof w<"u"&&(w+=xt)}return R};function lm(h,m,y,w){try{var R=Re.getStreamFromFD(h),W=am(R,m,y);return tt[w>>2]=W,0}catch($){if(typeof I>"u"||$.name!=="ErrnoError")throw $;return $.errno}}function cm(h,m,y,w,R){var W=oc(m,y);try{if(isNaN(W))return 61;var $=Re.getStreamFromFD(h);return I.llseek($,W,w),rt=[$.position>>>0,(G=$.position,+Math.abs(G)>=1?G>0?+Math.floor(G/4294967296)>>>0:~~+Math.ceil((G-+(~~G>>>0))/4294967296)>>>0:0)],z[R>>2]=rt[0],z[R+4>>2]=rt[1],$.getdents&&W===0&&w===0&&($.getdents=null),0}catch(nt){if(typeof I>"u"||nt.name!=="ErrnoError")throw nt;return nt.errno}}var hm=(h,m,y,w)=>{for(var R=0,W=0;W<y;W++){var $=tt[m>>2],nt=tt[m+4>>2];m+=8;var xt=I.write(h,K,$,nt,w);if(xt<0)return-1;if(R+=xt,xt<nt)break;typeof w<"u"&&(w+=xt)}return R};function um(h,m,y,w){try{var R=Re.getStreamFromFD(h),W=hm(R,m,y);return tt[w>>2]=W,0}catch($){if(typeof I>"u"||$.name!=="ErrnoError")throw $;return $.errno}}I.createPreloadedFile=Tn,I.staticInit(),Rr(),Yt=i.BindingError=class extends Error{constructor(m){super(m),this.name="BindingError"}},Wt=i.InternalError=class extends Error{constructor(m){super(m),this.name="InternalError"}},l(),Qh=i.UnboundTypeError=ep(Error,"UnboundTypeError");var fm={M:Er,N:Tr,h:Ar,I:hi,Q:bi,F:Pr,G:Oi,j:Cr,B:Ir,H:Ls,C:ui,A:Ns,w:Ds,V:Ne,U:D,n:Z,f:rp,b:op,a:ap,m:lp,i:mp,W:gp,J:vp,x:xp,L:Sp,e:Mp,q:wp,T:r,u:Ep,p:Pp,k:Cp,Y:Ip,X:Rp,r:Lp,Z:Np,o:Dp,c:Op,d:Fp,t:Vp,s:Hp,O:Gp,K:Xp,R:qp,z:$p,y:Jp,D:Qp,E:tm,S:sm,g:om,P:lm,v:cm,l:um},on=T(),dm=()=>(dm=on.$)(),ou=h=>(ou=on.aa)(h),lc=h=>(lc=on.ca)(h),Ei=h=>(Ei=on.da)(h),au=h=>(au=on.ea)(h),lu=(h,m)=>(lu=on.fa)(h,m),cu=()=>(cu=on.ga)(),pm=i.dynCall_viijii=(h,m,y,w,R,W,$)=>(pm=i.dynCall_viijii=on.ha)(h,m,y,w,R,W,$),mm=i.dynCall_viiiiji=(h,m,y,w,R,W,$,nt)=>(mm=i.dynCall_viiiiji=on.ia)(h,m,y,w,R,W,$,nt),gm=i.dynCall_jiji=(h,m,y,w,R)=>(gm=i.dynCall_jiji=on.ja)(h,m,y,w,R),_m=i.dynCall_iiiiij=(h,m,y,w,R,W,$)=>(_m=i.dynCall_iiiiij=on.ka)(h,m,y,w,R,W,$),vm=i.dynCall_iiiiijj=(h,m,y,w,R,W,$,nt,xt)=>(vm=i.dynCall_iiiiijj=on.la)(h,m,y,w,R,W,$,nt,xt),ym=i.dynCall_iiiiiijj=(h,m,y,w,R,W,$,nt,xt,Nt)=>(ym=i.dynCall_iiiiiijj=on.ma)(h,m,y,w,R,W,$,nt,xt,Nt),zo,hu;ge=function h(){zo||uu(),zo||(ge=h)};function uu(){if(oe>0||!hu&&(hu=1,ue(),oe>0))return;function h(){zo||(zo=1,i.calledRun=1,!P&&(fe(),s(i),i.onRuntimeInitialized?.(),be()))}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),h()},1)):h()}if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return uu(),e=c,e})})();typeof mu=="object"&&typeof uc=="object"?uc.exports=pu:typeof define=="function"&&define.amd&&define([],()=>pu)});function fc(n,t){let e=n.diameter/2,i=Math.ceil(e/t),s=[];for(let o=-i;o<=i;o++)for(let c=-i;c<=i;c++){let u=Math.hypot(c,o)*t;if(u>e+1e-6)continue;let f=Math.min(u,e),d=0;if(n.kind==="ball")d=e-Math.sqrt(Math.max(0,e*e-f*f));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let _=(n.angle||(n.kind==="drill"?118:60))*Math.PI/360;d=f/Math.tan(_)}s.push(c,o,d)}return Float32Array.from(s)}function Am(n,t,e,i,s,o){let c=Math.hypot(i.x-e.x,i.y-e.y),u=Math.max(1,Math.ceil(c/(n.cell*.5))),f=!1;for(let d=s?0:1;d<=u;d++){let _=d/u,S=(e.x+(i.x-e.x)*_-n.x0)/n.cell,g=(e.y+(i.y-e.y)*_-n.y0)/n.cell,b=e.z+(i.z-e.z)*_;if(b>=n.top)continue;let E=Math.round(S),C=Math.round(g);for(let M=0;M<t.length;M+=3){let x=E+t[M],U=C+t[M+1];if(x<0||U<0||x>=n.nx||U>=n.ny)continue;let X=U*n.nx+x,N=b+t[M+2];if(n.h[X]>N+1e-4){if(s){n.h[X]>N+.05&&(f=!0);continue}n.h[X]=N,n.op[X]=o+1}}}return f}function _u(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function dc(n,t,e,i,s){let o=t.diameter/2,c=n.cell,u=o/c,f=Math.ceil(u)+3,d=t.kind==="ball"?Y=>o-Math.sqrt(Math.max(0,o*o-Y*Y)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(Y=>P=>P/Y)(Math.tan((t.angle||(t.kind==="drill"?118:60))*Math.PI/360)):()=>0,_=!t.kind||t.kind==="flat"||t.kind==="surfacing",S=Math.hypot(i.x-e.x,i.y-e.y),g=Math.max(1,Math.ceil(S/(c*.5))),{h:b,sx:E,sy:C,wx:M,wy:x,gap:U,deep:X,nx:N,ny:O}=n,F=1.5*c;for(let Y=1;Y<=g;Y++){let P=Y/g,V=(e.x+(i.x-e.x)*P-n.x0)/c,J=(e.y+(i.y-e.y)*P-n.y0)/c,K=e.z+(i.z-e.z)*P;if(K>=n.top)continue;let it=Math.max(0,Math.floor(V-f)),ht=Math.min(N-1,Math.ceil(V+f)),Q=Math.max(0,Math.floor(J-f)),z=Math.min(O-1,Math.ceil(J+f));for(let tt=Q;tt<=z;tt++)for(let H=it;H<=ht;H++){let _t=H-V,at=tt-J,pt=Math.hypot(_t,at);if(pt>u+1.5)continue;let gt=tt*N+H,At=pt*c;if(At<=o){let Ot=K+d(At);if(b[gt]>Ot+1e-4)b[gt]=Ot,n.op[gt]=s+1,U[gt]=1/0,X[gt]=-1/0;else if(b[gt]<Ot-1e-4)continue;o-At>X[gt]&&(X[gt]=o-At,_&&o-At<F&&pt>1e-6?(E[gt]=_t/pt*(o-At),C[gt]=at/pt*(o-At),M[gt]=-_t/pt,x[gt]=-at/pt):(E[gt]=0,C[gt]=0,M[gt]=0,x[gt]=0))}else _&&b[gt]>K+1e-4&&At-o<U[gt]&&(U[gt]=At-o,E[gt]=_t/pt*(o-At),C[gt]=at/pt*(o-At),M[gt]=-_t/pt,x[gt]=-at/pt)}}}function vu(n,t){let e=new Bi(n.stock,t||Bi.cellFor(n.stock)),i=[];return n.ops.forEach((s,o)=>{if(!s.enabled||!s.moves)return;let c=fc(s.tool,e.cell),u=null;for(let f of s.moves)u&&Am(e,c,u,f,!!f.r,o)&&i.push({op:s.id,at:f}),u=f}),{hm:e,collisions:i}}function yu(n,t){let e=new Float32Array(t.nx*t.ny).fill(-1/0),i=n.positions,s=n.indices;for(let o=0;o<s.length;o+=3){let c=s[o]*3,u=s[o+1]*3,f=s[o+2]*3,d=i[c],_=i[c+1],S=i[c+2],g=i[u],b=i[u+1],E=i[u+2],C=i[f],M=i[f+1],x=i[f+2],U=(b-M)*(d-C)+(C-g)*(_-M);if(Math.abs(U)<1e-12)continue;let X=Math.max(0,Math.floor((Math.min(d,g,C)-t.x0)/t.cell)),N=Math.min(t.nx-1,Math.ceil((Math.max(d,g,C)-t.x0)/t.cell)),O=Math.max(0,Math.floor((Math.min(_,b,M)-t.y0)/t.cell)),F=Math.min(t.ny-1,Math.ceil((Math.max(_,b,M)-t.y0)/t.cell));for(let Y=O;Y<=F;Y++)for(let P=X;P<=N;P++){let V=t.x0+P*t.cell,J=t.y0+Y*t.cell,K=((b-M)*(V-C)+(C-g)*(J-M))/U,it=((M-_)*(V-C)+(d-C)*(J-M))/U,ht=1-K-it;if(K<-1e-9||it<-1e-9||ht<-1e-9)continue;let Q=K*S+it*E+ht*x,z=Y*t.nx+P;Q>e[z]&&(e[z]=Q)}}return e}var Bi,pc=Pn(()=>{Bi=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});function Su(n){let t=[],e=[],i=[],s=[];for(let o of n.meshes||[]){let c=t.length/3,u=e.length/3,f=o.attributes.position.array;for(let _=0;_<f.length;_++)t.push(f[_]);let d=o.index.array;for(let _=0;_<d.length;_++)e.push(d[_]+c);for(let _ of o.brep_faces||[])i.push({first:_.first+u,last:_.last+u});o.name&&s.push(o.name)}return{positions:Float64Array.from(t),indices:Uint32Array.from(e),faces:i,solids:(n.meshes||[]).length,names:s}}function Us(n){let t=n.positions,e=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(let s=0;s<t.length;s+=3)for(let o=0;o<3;o++)t[s+o]<e[o]&&(e[o]=t[s+o]),t[s+o]>i[o]&&(i[o]=t[s+o]);return{min:e,max:i,size:[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}}function gc(n,t){let e=n.positions,i=n.indices,s=i[t*3]*3,o=i[t*3+1]*3,c=i[t*3+2]*3,u=e[o]-e[s],f=e[o+1]-e[s+1],d=e[o+2]-e[s+2],_=e[c]-e[s],S=e[c+1]-e[s+1],g=e[c+2]-e[s+2],b=f*g-d*S,E=d*_-u*g,C=u*S-f*_,M=Math.hypot(b,E,C);return M>0?[b/M,E/M,C/M]:[0,0,0]}function Pm(n){let[t,e,i]=n;if(i>.999999)return[1,0,0,0,1,0,0,0,1];if(i<-.999999)return[1,0,0,0,-1,0,0,0,-1];let s=e,o=-t,c=Math.hypot(s,o);s/=c,o/=c;let u=i,f=c,d=1-u;return[d*s*s+u,d*s*o,o*f,d*s*o,d*o*o+u,-s*f,-o*f,s*f,u]}function Cm(n,t){let e=n.positions,i=new Float64Array(e.length);for(let c=0;c<e.length;c+=3){let u=e[c],f=e[c+1],d=e[c+2];i[c]=t[0]*u+t[1]*f+t[2]*d,i[c+1]=t[3]*u+t[4]*f+t[5]*d,i[c+2]=t[6]*u+t[7]*f+t[8]*d}let s={positions:i,indices:n.indices,faces:n.faces},{min:o}=Us(s);for(let c=0;c<i.length;c+=3)i[c]-=o[0],i[c+1]-=o[1],i[c+2]-=o[2];for(let c=0;c<i.length;c++)i[c]=Math.round(i[c]*1e6)/1e6;return s}function Or(n,t=.001){let{max:e,size:i}=Us(n),s=e[2],o=new Set,c=0,u=0,f=0,d=n.positions,_=n.indices,S=_.length/3;for(let E=0;E<S;E++){let C=_[E*3]*3,M=_[E*3+1]*3,x=_[E*3+2]*3,U=gc(n,E),X=d[M]-d[C],N=d[M+1]-d[C+1],O=d[M+2]-d[C+2],F=d[x]-d[C],Y=d[x+1]-d[C+1],P=d[x+2]-d[C+2],V=Math.hypot(N*P-O*Y,O*F-X*P,X*Y-N*F)/2;f+=V;let J=(d[C+2]+d[M+2]+d[x+2])/3;U[2]>1-t?o.add(Math.round(J*1e3)/1e3):U[2]<-(1-t)?J>t&&(c+=V):Math.abs(U[2])>t&&(U[2]<0?c+=V:u+=V)}let g=c>.001*f,b=g?Rm(n):0;return{size:i,top:s,floors:[...o].sort((E,C)=>C-E),undercut:g&&b>xu,squareEdges:g&&b<=xu,sloped:u>.001*f,undercutArea:c,slopedArea:u,missed:b}}function Im(n){let t=n.positions,e=n.indices,i=0;for(let s=0;s<e.length;s+=3){let o=e[s]*3,c=e[s+1]*3,u=e[s+2]*3;i+=t[o]*(t[c+1]*t[u+2]-t[c+2]*t[u+1])-t[o+1]*(t[c]*t[u+2]-t[c+2]*t[u])+t[o+2]*(t[c]*t[u+1]-t[c+1]*t[u])}return Math.abs(i/6)}function Rm(n){let{min:t,max:e}=Us(n),i=e[0]-t[0],s=e[1]-t[1],o=Math.max(.05,Math.sqrt(i*s/25e4)),c={x0:t[0],y0:t[1],cell:o,nx:Math.ceil(i/o)+1,ny:Math.ceil(s/o)+1},u=yu(n,c),f=0;for(let _=0;_<u.length;_++)u[_]>t[2]&&(f+=u[_]-t[2]);f*=o*o;let d=Im(n);return d>0?Math.max(0,f-d)/d:0}function Mu(n,t){let e=n.positions,i=n.indices,s=[],o=i.length/3;for(let c=0;c<o;c++){let u=[i[c*3]*3,i[c*3+1]*3,i[c*3+2]*3],f=[];for(let d=0;d<3;d++){let _=u[d],S=u[(d+1)%3],g=e[_+2]-t,b=e[S+2]-t;if(g<0!=b<0){let E=g/(g-b);f.push([e[_]+(e[S]-e[_])*E,e[_+1]+(e[S+1]-e[_+1])*E])}}f.length===2&&s.push(f)}return Lm(s)}function Lm(n){let t=([o,c])=>`${Math.round(o*1e4)},${Math.round(c*1e4)}`,e=new Map;n.forEach((o,c)=>{for(let u of[0,1]){let f=t(o[u]);e.has(f)||e.set(f,[]),e.get(f).push(c)}});let i=new Uint8Array(n.length),s=[];for(let o=0;o<n.length;o++){if(i[o])continue;i[o]=1;let c=[n[o][0],n[o][1]],u=t(n[o][0]),f=n[o][1];for(let d=0;d<n.length;d++){let _=t(f);if(_===u)break;let S=(e.get(_)||[]).find(b=>!i[b]);if(S===void 0)break;i[S]=1;let g=n[S];f=t(g[0])===_?g[1]:g[0],t(f)!==u&&c.push(f)}c.length>=3&&s.push(c)}return s}function bu(n){let t={};for(let s of Object.keys(mc)){let o=Or(Vo(n,s));t[s]={reachable:!o.undercut,missed:o.missed,undercutArea:o.undercutArea,slopedArea:o.slopedArea,height:o.size[2]}}let e=Object.keys(mc),i=e.slice().sort((s,o)=>{let c=t[s],u=t[o];return(c.reachable===u.reachable?0:c.reachable?-1:1)||(Math.abs(c.missed-u.missed)>1e-4?c.missed-u.missed:0)||(Math.abs(c.slopedArea-u.slopedArea)>1e-6?c.slopedArea-u.slopedArea:0)||(Math.abs(c.height-u.height)>1e-6?c.height-u.height:0)||e.indexOf(s)-e.indexOf(o)});if(!i.some(s=>t[s].reachable))for(let s of e)t[s].reachable=!0;return{sides:t,best:i[0]}}var mc,Vo,xu,_c=Pn(()=>{pc();mc={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],left:[-1,0,0],right:[1,0,0]};Vo=(n,t)=>Cm(n,Pm(typeof t=="string"?mc[t]:t));xu=.05});var wu=fu((MS,Ho)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof Ho<"u"&&Ho.exports?(Ho.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,i.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?s.safari=1:s.safari=0,i.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,i.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,i.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,i.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,i.indexOf("opera")!=-1?s.opera=1:s.opera=0,i.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,i.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,i.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,i.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,i.indexOf("msie ")!=-1?s.msie=1:s.msie=0,n.biginteger_used=null;var o,c=0xdeadbeefcafe,u=(c&16777215)==15715070;function f(r,a,l){n.biginteger_used=1,r!=null&&(typeof r=="number"&&typeof a>"u"?this.fromInt(r):typeof r=="number"?this.fromNumber(r,a,l):a==null&&typeof r!="string"?this.fromString(r,256):this.fromString(r,a))}function d(){return new f(null,void 0,void 0)}function _(r,a,l,p,v,A){for(;--A>=0;){var D=a*this[r++]+l[p]+v;v=Math.floor(D/67108864),l[p++]=D&67108863}return v}function S(r,a,l,p,v,A){for(var D=a&32767,q=a>>15;--A>=0;){var Z=this[r]&32767,ct=this[r++]>>15,wt=q*Z+ct*D;Z=D*Z+((wt&32767)<<15)+l[p]+(v&1073741823),v=(Z>>>30)+(wt>>>15)+q*ct+(v>>>30),l[p++]=Z&1073741823}return v}function g(r,a,l,p,v,A){for(var D=a&16383,q=a>>14;--A>=0;){var Z=this[r]&16383,ct=this[r++]>>14,wt=q*Z+ct*D;Z=D*Z+((wt&16383)<<14)+l[p]+v,v=(Z>>28)+(wt>>14)+q*ct,l[p++]=Z&268435455}return v}u&&e=="Microsoft Internet Explorer"?(f.prototype.am=S,o=30):u&&e!="Netscape"?(f.prototype.am=_,o=26):(f.prototype.am=g,o=28),f.prototype.DB=o,f.prototype.DM=(1<<o)-1,f.prototype.DV=1<<o;var b=52;f.prototype.FV=Math.pow(2,b),f.prototype.F1=b-o,f.prototype.F2=2*o-b;var E="0123456789abcdefghijklmnopqrstuvwxyz",C=new Array,M,x;for(M=48,x=0;x<=9;++x)C[M++]=x;for(M=97,x=10;x<36;++x)C[M++]=x;for(M=65,x=10;x<36;++x)C[M++]=x;function U(r){return E.charAt(r)}function X(r,a){var l=C[r.charCodeAt(a)];return l??-1}function N(r){for(var a=this.t-1;a>=0;--a)r[a]=this[a];r.t=this.t,r.s=this.s}function O(r){this.t=1,this.s=r<0?-1:0,r>0?this[0]=r:r<-1?this[0]=r+this.DV:this.t=0}function F(r){var a=d();return a.fromInt(r),a}function Y(r,a){var l;if(a==16)l=4;else if(a==8)l=3;else if(a==256)l=8;else if(a==2)l=1;else if(a==32)l=5;else if(a==4)l=2;else{this.fromRadix(r,a);return}this.t=0,this.s=0;for(var p=r.length,v=!1,A=0;--p>=0;){var D=l==8?r[p]&255:X(r,p);if(D<0){r.charAt(p)=="-"&&(v=!0);continue}v=!1,A==0?this[this.t++]=D:A+l>this.DB?(this[this.t-1]|=(D&(1<<this.DB-A)-1)<<A,this[this.t++]=D>>this.DB-A):this[this.t-1]|=D<<A,A+=l,A>=this.DB&&(A-=this.DB)}l==8&&(r[0]&128)!=0&&(this.s=-1,A>0&&(this[this.t-1]|=(1<<this.DB-A)-1<<A)),this.clamp(),v&&f.ZERO.subTo(this,this)}function P(){for(var r=this.s&this.DM;this.t>0&&this[this.t-1]==r;)--this.t}function V(r){if(this.s<0)return"-"+this.negate().toString(r);var a;if(r==16)a=4;else if(r==8)a=3;else if(r==2)a=1;else if(r==32)a=5;else if(r==4)a=2;else return this.toRadix(r);var l=(1<<a)-1,p,v=!1,A="",D=this.t,q=this.DB-D*this.DB%a;if(D-- >0)for(q<this.DB&&(p=this[D]>>q)>0&&(v=!0,A=U(p));D>=0;)q<a?(p=(this[D]&(1<<q)-1)<<a-q,p|=this[--D]>>(q+=this.DB-a)):(p=this[D]>>(q-=a)&l,q<=0&&(q+=this.DB,--D)),p>0&&(v=!0),v&&(A+=U(p));return v?A:"0"}function J(){var r=d();return f.ZERO.subTo(this,r),r}function K(){return this.s<0?this.negate():this}function it(r){var a=this.s-r.s;if(a!=0)return a;var l=this.t;if(a=l-r.t,a!=0)return this.s<0?-a:a;for(;--l>=0;)if((a=this[l]-r[l])!=0)return a;return 0}function ht(r){var a=1,l;return(l=r>>>16)!=0&&(r=l,a+=16),(l=r>>8)!=0&&(r=l,a+=8),(l=r>>4)!=0&&(r=l,a+=4),(l=r>>2)!=0&&(r=l,a+=2),(l=r>>1)!=0&&(r=l,a+=1),a}function Q(){return this.t<=0?0:this.DB*(this.t-1)+ht(this[this.t-1]^this.s&this.DM)}function z(r,a){var l;for(l=this.t-1;l>=0;--l)a[l+r]=this[l];for(l=r-1;l>=0;--l)a[l]=0;a.t=this.t+r,a.s=this.s}function tt(r,a){for(var l=r;l<this.t;++l)a[l-r]=this[l];a.t=Math.max(this.t-r,0),a.s=this.s}function H(r,a){var l=r%this.DB,p=this.DB-l,v=(1<<p)-1,A=Math.floor(r/this.DB),D=this.s<<l&this.DM,q;for(q=this.t-1;q>=0;--q)a[q+A+1]=this[q]>>p|D,D=(this[q]&v)<<l;for(q=A-1;q>=0;--q)a[q]=0;a[A]=D,a.t=this.t+A+1,a.s=this.s,a.clamp()}function _t(r,a){a.s=this.s;var l=Math.floor(r/this.DB);if(l>=this.t){a.t=0;return}var p=r%this.DB,v=this.DB-p,A=(1<<p)-1;a[0]=this[l]>>p;for(var D=l+1;D<this.t;++D)a[D-l-1]|=(this[D]&A)<<v,a[D-l]=this[D]>>p;p>0&&(a[this.t-l-1]|=(this.s&A)<<v),a.t=this.t-l,a.clamp()}function at(r,a){for(var l=0,p=0,v=Math.min(r.t,this.t);l<v;)p+=this[l]-r[l],a[l++]=p&this.DM,p>>=this.DB;if(r.t<this.t){for(p-=r.s;l<this.t;)p+=this[l],a[l++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;l<r.t;)p-=r[l],a[l++]=p&this.DM,p>>=this.DB;p-=r.s}a.s=p<0?-1:0,p<-1?a[l++]=this.DV+p:p>0&&(a[l++]=p),a.t=l,a.clamp()}function pt(r,a){var l=this.abs(),p=r.abs(),v=l.t;for(a.t=v+p.t;--v>=0;)a[v]=0;for(v=0;v<p.t;++v)a[v+l.t]=l.am(0,p[v],a,v,0,l.t);a.s=0,a.clamp(),this.s!=r.s&&f.ZERO.subTo(a,a)}function gt(r){for(var a=this.abs(),l=r.t=2*a.t;--l>=0;)r[l]=0;for(l=0;l<a.t-1;++l){var p=a.am(l,a[l],r,2*l,0,1);(r[l+a.t]+=a.am(l+1,2*a[l],r,2*l+1,p,a.t-l-1))>=a.DV&&(r[l+a.t]-=a.DV,r[l+a.t+1]=1)}r.t>0&&(r[r.t-1]+=a.am(l,a[l],r,2*l,0,1)),r.s=0,r.clamp()}function At(r,a,l){var p=r.abs();if(!(p.t<=0)){var v=this.abs();if(v.t<p.t){a?.fromInt(0),l!=null&&this.copyTo(l);return}l==null&&(l=d());var A=d(),D=this.s,q=r.s,Z=this.DB-ht(p[p.t-1]);Z>0?(p.lShiftTo(Z,A),v.lShiftTo(Z,l)):(p.copyTo(A),v.copyTo(l));var ct=A.t,wt=A[ct-1];if(wt!=0){var bt=wt*(1<<this.F1)+(ct>1?A[ct-2]>>this.F2:0),Ct=this.FV/bt,re=(1<<this.F1)/bt,ve=1<<this.F2,Ee=l.t,Be=Ee-ct,pn=a??d();for(A.dlShiftTo(Be,pn),l.compareTo(pn)>=0&&(l[l.t++]=1,l.subTo(pn,l)),f.ONE.dlShiftTo(ct,pn),pn.subTo(A,A);A.t<ct;)A[A.t++]=0;for(;--Be>=0;){var Hn=l[--Ee]==wt?this.DM:Math.floor(l[Ee]*Ct+(l[Ee-1]+ve)*re);if((l[Ee]+=A.am(0,Hn,l,Be,0,ct))<Hn)for(A.dlShiftTo(Be,pn),l.subTo(pn,l);l[Ee]<--Hn;)l.subTo(pn,l)}a!=null&&(l.drShiftTo(ct,a),D!=q&&f.ZERO.subTo(a,a)),l.t=ct,l.clamp(),Z>0&&l.rShiftTo(Z,l),D<0&&f.ZERO.subTo(l,l)}}}function Ot(r){var a=d();return this.abs().divRemTo(r,null,a),this.s<0&&a.compareTo(f.ZERO)>0&&r.subTo(a,a),a}function ue(r){this.m=r}function fe(r){return r.s<0||r.compareTo(this.m)>=0?r.mod(this.m):r}function be(r){return r}function St(r){r.divRemTo(this.m,null,r)}function Et(r,a,l){r.multiplyTo(a,l),this.reduce(l)}function Xt(r,a){r.squareTo(a),this.reduce(a)}ue.prototype.convert=fe,ue.prototype.revert=be,ue.prototype.reduce=St,ue.prototype.mulTo=Et,ue.prototype.sqrTo=Xt;function oe(){if(this.t<1)return 0;var r=this[0];if((r&1)==0)return 0;var a=r&3;return a=a*(2-(r&15)*a)&15,a=a*(2-(r&255)*a)&255,a=a*(2-((r&65535)*a&65535))&65535,a=a*(2-r*a%this.DV)%this.DV,a>0?this.DV-a:-a}function Ut(r){this.m=r,this.mp=r.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<r.DB-15)-1,this.mt2=2*r.t}function ge(r){var a=d();return r.abs().dlShiftTo(this.m.t,a),a.divRemTo(this.m,null,a),r.s<0&&a.compareTo(f.ZERO)>0&&this.m.subTo(a,a),a}function Je(r){var a=d();return r.copyTo(a),this.reduce(a),a}function he(r){for(;r.t<=this.mt2;)r[r.t++]=0;for(var a=0;a<this.m.t;++a){var l=r[a]&32767,p=l*this.mpl+((l*this.mph+(r[a]>>15)*this.mpl&this.um)<<15)&r.DM;for(l=a+this.m.t,r[l]+=this.m.am(0,p,r,a,0,this.m.t);r[l]>=r.DV;)r[l]-=r.DV,r[++l]++}r.clamp(),r.drShiftTo(this.m.t,r),r.compareTo(this.m)>=0&&r.subTo(this.m,r)}function Me(r,a){r.squareTo(a),this.reduce(a)}function Ce(r,a,l){r.multiplyTo(a,l),this.reduce(l)}Ut.prototype.convert=ge,Ut.prototype.revert=Je,Ut.prototype.reduce=he,Ut.prototype.mulTo=Ce,Ut.prototype.sqrTo=Me;function we(){return(this.t>0?this[0]&1:this.s)==0}function De(r,a){if(r>4294967295||r<1)return f.ONE;var l=d(),p=d(),v=a.convert(this),A=ht(r)-1;for(v.copyTo(l);--A>=0;)if(a.sqrTo(l,p),(r&1<<A)>0)a.mulTo(p,v,l);else{var D=l;l=p,p=D}return a.revert(l)}function He(r,a){var l;return r<256||a.isEven()?l=new ue(a):l=new Ut(a),this.exp(r,l)}f.prototype.copyTo=N,f.prototype.fromInt=O,f.prototype.fromString=Y,f.prototype.clamp=P,f.prototype.dlShiftTo=z,f.prototype.drShiftTo=tt,f.prototype.lShiftTo=H,f.prototype.rShiftTo=_t,f.prototype.subTo=at,f.prototype.multiplyTo=pt,f.prototype.squareTo=gt,f.prototype.divRemTo=At,f.prototype.invDigit=oe,f.prototype.isEven=we,f.prototype.exp=De,f.prototype.toString=V,f.prototype.negate=J,f.prototype.abs=K,f.prototype.compareTo=it,f.prototype.bitLength=Q,f.prototype.mod=Ot,f.prototype.modPowInt=He,f.ZERO=F(0),f.ONE=F(1);function j(){var r=d();return this.copyTo(r),r}function ut(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function lt(){return this.t==0?this.s:this[0]<<24>>24}function k(){return this.t==0?this.s:this[0]<<16>>16}function Rt(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function Kt(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function B(r){if(r==null&&(r=10),this.signum()==0||r<2||r>36)return"0";var a=this.chunkSize(r),l=Math.pow(r,a),p=F(l),v=d(),A=d(),D="";for(this.divRemTo(p,v,A);v.signum()>0;)D=(l+A.intValue()).toString(r).substr(1)+D,v.divRemTo(p,v,A);return A.intValue().toString(r)+D}function T(r,a){this.fromInt(0),a==null&&(a=10);for(var l=this.chunkSize(a),p=Math.pow(a,l),v=!1,A=0,D=0,q=0;q<r.length;++q){var Z=X(r,q);if(Z<0){r.charAt(q)=="-"&&this.signum()==0&&(v=!0);continue}D=a*D+Z,++A>=l&&(this.dMultiply(p),this.dAddOffset(D,0),A=0,D=0)}A>0&&(this.dMultiply(Math.pow(a,A)),this.dAddOffset(D,0)),v&&f.ZERO.subTo(this,this)}function G(r,a,l){if(typeof a=="number")if(r<2)this.fromInt(1);else for(this.fromNumber(r,l),this.testBit(r-1)||this.bitwiseTo(f.ONE.shiftLeft(r-1),jt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(a);)this.dAddOffset(2,0),this.bitLength()>r&&this.subTo(f.ONE.shiftLeft(r-1),this);else{var p=new Array,v=r&7;p.length=(r>>3)+1,a.nextBytes(p),v>0?p[0]&=(1<<v)-1:p[0]=0,this.fromString(p,256)}}function rt(){var r=this.t,a=new Array;a[0]=this.s;var l=this.DB-r*this.DB%8,p,v=0;if(r-- >0)for(l<this.DB&&(p=this[r]>>l)!=(this.s&this.DM)>>l&&(a[v++]=p|this.s<<this.DB-l);r>=0;)l<8?(p=(this[r]&(1<<l)-1)<<8-l,p|=this[--r]>>(l+=this.DB-8)):(p=this[r]>>(l-=8)&255,l<=0&&(l+=this.DB,--r)),(p&128)!=0&&(p|=-256),v==0&&(this.s&128)!=(p&128)&&++v,(v>0||p!=this.s)&&(a[v++]=p);return a}function mt(r){return this.compareTo(r)==0}function It(r){return this.compareTo(r)<0?this:r}function Bt(r){return this.compareTo(r)>0?this:r}function vt(r,a,l){var p,v,A=Math.min(r.t,this.t);for(p=0;p<A;++p)l[p]=a(this[p],r[p]);if(r.t<this.t){for(v=r.s&this.DM,p=A;p<this.t;++p)l[p]=a(this[p],v);l.t=this.t}else{for(v=this.s&this.DM,p=A;p<r.t;++p)l[p]=a(v,r[p]);l.t=r.t}l.s=a(this.s,r.s),l.clamp()}function Tt(r,a){return r&a}function kt(r){var a=d();return this.bitwiseTo(r,Tt,a),a}function jt(r,a){return r|a}function Gt(r){var a=d();return this.bitwiseTo(r,jt,a),a}function Ft(r,a){return r^a}function ne(r){var a=d();return this.bitwiseTo(r,Ft,a),a}function ae(r,a){return r&~a}function _e(r){var a=d();return this.bitwiseTo(r,ae,a),a}function st(){for(var r=d(),a=0;a<this.t;++a)r[a]=this.DM&~this[a];return r.t=this.t,r.s=~this.s,r}function zt(r){var a=d();return r<0?this.rShiftTo(-r,a):this.lShiftTo(r,a),a}function Mt(r){var a=d();return r<0?this.lShiftTo(-r,a):this.rShiftTo(r,a),a}function Vt(r){if(r==0)return-1;var a=0;return(r&65535)==0&&(r>>=16,a+=16),(r&255)==0&&(r>>=8,a+=8),(r&15)==0&&(r>>=4,a+=4),(r&3)==0&&(r>>=2,a+=2),(r&1)==0&&++a,a}function qt(){for(var r=0;r<this.t;++r)if(this[r]!=0)return r*this.DB+Vt(this[r]);return this.s<0?this.t*this.DB:-1}function Pt(r){for(var a=0;r!=0;)r&=r-1,++a;return a}function Lt(){for(var r=0,a=this.s&this.DM,l=0;l<this.t;++l)r+=Pt(this[l]^a);return r}function ee(r){var a=Math.floor(r/this.DB);return a>=this.t?this.s!=0:(this[a]&1<<r%this.DB)!=0}function Fe(r,a){var l=f.ONE.shiftLeft(r);return this.bitwiseTo(l,a,l),l}function Le(r){return this.changeBit(r,jt)}function Sn(r){return this.changeBit(r,ae)}function Tn(r){return this.changeBit(r,Ft)}function Rs(r,a){for(var l=0,p=0,v=Math.min(r.t,this.t);l<v;)p+=this[l]+r[l],a[l++]=p&this.DM,p>>=this.DB;if(r.t<this.t){for(p+=r.s;l<this.t;)p+=this[l],a[l++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;l<r.t;)p+=r[l],a[l++]=p&this.DM,p>>=this.DB;p+=r.s}a.s=p<0?-1:0,p>0?a[l++]=p:p<-1&&(a[l++]=this.DV+p),a.t=l,a.clamp()}function lr(r){var a=d();return this.addTo(r,a),a}function I(r){var a=d();return this.subTo(r,a),a}function Mi(r){var a=d();return this.multiplyTo(r,a),a}function Re(){var r=d();return this.squareTo(r),r}function Er(r){var a=d();return this.divRemTo(r,a,null),a}function Tr(r){var a=d();return this.divRemTo(r,null,a),a}function An(r){var a=d(),l=d();return this.divRemTo(r,a,l),new Array(a,l)}function Vn(r){this[this.t]=this.am(0,r-1,this,0,0,this.t),++this.t,this.clamp()}function Ar(r,a){if(r!=0){for(;this.t<=a;)this[this.t++]=0;for(this[a]+=r;this[a]>=this.DV;)this[a]-=this.DV,++a>=this.t&&(this[this.t++]=0),++this[a]}}function hi(){}function bi(r){return r}function Pr(r,a,l){r.multiplyTo(a,l)}function Oi(r,a){r.squareTo(a)}hi.prototype.convert=bi,hi.prototype.revert=bi,hi.prototype.mulTo=Pr,hi.prototype.sqrTo=Oi;function Cr(r){return this.exp(r,new hi)}function Ir(r,a,l){var p=Math.min(this.t+r.t,a);for(l.s=0,l.t=p;p>0;)l[--p]=0;var v;for(v=l.t-this.t;p<v;++p)l[p+this.t]=this.am(0,r[p],l,p,0,this.t);for(v=Math.min(r.t,a);p<v;++p)this.am(0,r[p],l,p,0,a-p);l.clamp()}function Ls(r,a,l){--a;var p=l.t=this.t+r.t-a;for(l.s=0;--p>=0;)l[p]=0;for(p=Math.max(a-this.t,0);p<r.t;++p)l[this.t+p-a]=this.am(a-p,r[p],l,0,0,this.t+p-a);l.clamp(),l.drShiftTo(1,l)}function ui(r){this.r2=d(),this.q3=d(),f.ONE.dlShiftTo(2*r.t,this.r2),this.mu=this.r2.divide(r),this.m=r}function Ns(r){if(r.s<0||r.t>2*this.m.t)return r.mod(this.m);if(r.compareTo(this.m)<0)return r;var a=d();return r.copyTo(a),this.reduce(a),a}function Ds(r){return r}function Rr(r){for(r.drShiftTo(this.m.t-1,this.r2),r.t>this.m.t+1&&(r.t=this.m.t+1,r.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);r.compareTo(this.r2)<0;)r.dAddOffset(1,this.m.t+1);for(r.subTo(this.r2,r);r.compareTo(this.m)>=0;)r.subTo(this.m,r)}function L(r,a){r.squareTo(a),this.reduce(a)}function et(r,a,l){r.multiplyTo(a,l),this.reduce(l)}ui.prototype.convert=Ns,ui.prototype.revert=Ds,ui.prototype.reduce=Rr,ui.prototype.mulTo=et,ui.prototype.sqrTo=L;function yt(r,a){var l=r.bitLength(),p,v=F(1),A;if(l<=0)return v;l<18?p=1:l<48?p=3:l<144?p=4:l<768?p=5:p=6,l<8?A=new ue(a):a.isEven()?A=new ui(a):A=new Ut(a);var D=new Array,q=3,Z=p-1,ct=(1<<p)-1;if(D[1]=A.convert(this),p>1){var wt=d();for(A.sqrTo(D[1],wt);q<=ct;)D[q]=d(),A.mulTo(wt,D[q-2],D[q]),q+=2}var bt=r.t-1,Ct,re=!0,ve=d(),Ee;for(l=ht(r[bt])-1;bt>=0;){for(l>=Z?Ct=r[bt]>>l-Z&ct:(Ct=(r[bt]&(1<<l+1)-1)<<Z-l,bt>0&&(Ct|=r[bt-1]>>this.DB+l-Z)),q=p;(Ct&1)==0;)Ct>>=1,--q;if((l-=q)<0&&(l+=this.DB,--bt),re)D[Ct].copyTo(v),re=!1;else{for(;q>1;)A.sqrTo(v,ve),A.sqrTo(ve,v),q-=2;q>0?A.sqrTo(v,ve):(Ee=v,v=ve,ve=Ee),A.mulTo(ve,D[Ct],v)}for(;bt>=0&&(r[bt]&1<<l)==0;)A.sqrTo(v,ve),Ee=v,v=ve,ve=Ee,--l<0&&(l=this.DB-1,--bt)}return A.revert(v)}function ft(r){var a=this.s<0?this.negate():this.clone(),l=r.s<0?r.negate():r.clone();if(a.compareTo(l)<0){var p=a;a=l,l=p}var v=a.getLowestSetBit(),A=l.getLowestSetBit();if(A<0)return a;for(v<A&&(A=v),A>0&&(a.rShiftTo(A,a),l.rShiftTo(A,l));a.signum()>0;)(v=a.getLowestSetBit())>0&&a.rShiftTo(v,a),(v=l.getLowestSetBit())>0&&l.rShiftTo(v,l),a.compareTo(l)>=0?(a.subTo(l,a),a.rShiftTo(1,a)):(l.subTo(a,l),l.rShiftTo(1,l));return A>0&&l.lShiftTo(A,l),l}function dt(r){if(r<=0)return 0;var a=this.DV%r,l=this.s<0?r-1:0;if(this.t>0)if(a==0)l=this[0]%r;else for(var p=this.t-1;p>=0;--p)l=(a*l+this[p])%r;return l}function Yt(r){var a=r.isEven();if(this.isEven()&&a||r.signum()==0)return f.ZERO;for(var l=r.clone(),p=this.clone(),v=F(1),A=F(0),D=F(0),q=F(1);l.signum()!=0;){for(;l.isEven();)l.rShiftTo(1,l),a?((!v.isEven()||!A.isEven())&&(v.addTo(this,v),A.subTo(r,A)),v.rShiftTo(1,v)):A.isEven()||A.subTo(r,A),A.rShiftTo(1,A);for(;p.isEven();)p.rShiftTo(1,p),a?((!D.isEven()||!q.isEven())&&(D.addTo(this,D),q.subTo(r,q)),D.rShiftTo(1,D)):q.isEven()||q.subTo(r,q),q.rShiftTo(1,q);l.compareTo(p)>=0?(l.subTo(p,l),a&&v.subTo(D,v),A.subTo(q,A)):(p.subTo(l,p),a&&D.subTo(v,D),q.subTo(A,q))}if(p.compareTo(f.ONE)!=0)return f.ZERO;if(q.compareTo(r)>=0)return q.subtract(r);if(q.signum()<0)q.addTo(r,q);else return q;return q.signum()<0?q.add(r):q}var Dt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Wt=(1<<26)/Dt[Dt.length-1];function Qt(r){var a,l=this.abs();if(l.t==1&&l[0]<=Dt[Dt.length-1]){for(a=0;a<Dt.length;++a)if(l[0]==Dt[a])return!0;return!1}if(l.isEven())return!1;for(a=1;a<Dt.length;){for(var p=Dt[a],v=a+1;v<Dt.length&&p<Wt;)p*=Dt[v++];for(p=l.modInt(p);a<v;)if(p%Dt[a++]==0)return!1}return l.millerRabin(r)}function ie(r){var a=this.subtract(f.ONE),l=a.getLowestSetBit();if(l<=0)return!1;var p=a.shiftRight(l);r=r+1>>1,r>Dt.length&&(r=Dt.length);for(var v=d(),A=0;A<r;++A){v.fromInt(Dt[Math.floor(Math.random()*Dt.length)]);var D=v.modPow(p,this);if(D.compareTo(f.ONE)!=0&&D.compareTo(a)!=0){for(var q=1;q++<l&&D.compareTo(a)!=0;)if(D=D.modPowInt(2,this),D.compareTo(f.ONE)==0)return!1;if(D.compareTo(a)!=0)return!1}}return!0}f.prototype.chunkSize=Rt,f.prototype.toRadix=B,f.prototype.fromRadix=T,f.prototype.fromNumber=G,f.prototype.bitwiseTo=vt,f.prototype.changeBit=Fe,f.prototype.addTo=Rs,f.prototype.dMultiply=Vn,f.prototype.dAddOffset=Ar,f.prototype.multiplyLowerTo=Ir,f.prototype.multiplyUpperTo=Ls,f.prototype.modInt=dt,f.prototype.millerRabin=ie,f.prototype.clone=j,f.prototype.intValue=ut,f.prototype.byteValue=lt,f.prototype.shortValue=k,f.prototype.signum=Kt,f.prototype.toByteArray=rt,f.prototype.equals=mt,f.prototype.min=It,f.prototype.max=Bt,f.prototype.and=kt,f.prototype.or=Gt,f.prototype.xor=ne,f.prototype.andNot=_e,f.prototype.not=st,f.prototype.shiftLeft=zt,f.prototype.shiftRight=Mt,f.prototype.getLowestSetBit=qt,f.prototype.bitCount=Lt,f.prototype.testBit=ee,f.prototype.setBit=Le,f.prototype.clearBit=Sn,f.prototype.flipBit=Tn,f.prototype.add=lr,f.prototype.subtract=I,f.prototype.multiply=Mi,f.prototype.divide=Er,f.prototype.remainder=Tr,f.prototype.divideAndRemainder=An,f.prototype.modPow=yt,f.prototype.modInverse=Yt,f.prototype.pow=Cr,f.prototype.gcd=ft,f.prototype.isProbablePrime=Qt,f.prototype.square=Re;var Ht=f;Ht.prototype.IsNegative=function(){return this.compareTo(Ht.ZERO)==-1},Ht.op_Equality=function(r,a){return r.compareTo(a)==0},Ht.op_Inequality=function(r,a){return r.compareTo(a)!=0},Ht.op_GreaterThan=function(r,a){return r.compareTo(a)>0},Ht.op_LessThan=function(r,a){return r.compareTo(a)<0},Ht.op_Addition=function(r,a){return new Ht(r,void 0,void 0).add(new Ht(a,void 0,void 0))},Ht.op_Subtraction=function(r,a){return new Ht(r,void 0,void 0).subtract(new Ht(a,void 0,void 0))},Ht.Int128Mul=function(r,a){return new Ht(r,void 0,void 0).multiply(new Ht(a,void 0,void 0))},Ht.op_Division=function(r,a){return r.divide(a)},Ht.prototype.ToDouble=function(){return parseFloat(this.toString())};var pe=function(r,a){var l;if(typeof Object.getOwnPropertyNames>"u"){for(l in a.prototype)(typeof r.prototype[l]>"u"||r.prototype[l]===Object.prototype[l])&&(r.prototype[l]=a.prototype[l]);for(l in a)typeof r[l]>"u"&&(r[l]=a[l]);r.$baseCtor=a}else{for(var p=Object.getOwnPropertyNames(a.prototype),v=0;v<p.length;v++)typeof Object.getOwnPropertyDescriptor(r.prototype,p[v])>"u"&&Object.defineProperty(r.prototype,p[v],Object.getOwnPropertyDescriptor(a.prototype,p[v]));for(l in a)typeof r[l]>"u"&&(r[l]=a[l]);r.$baseCtor=a}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var r=arguments;this.X=0,this.Y=0,r.length===1?(this.X=r[0].X,this.Y=r[0].Y):r.length===2&&(this.X=r[0],this.Y=r[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(r){this.X=r.X,this.Y=r.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(r,a){this.X=r,this.Y=a},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var r=!0,a=this.m_Parent;a!==null;)r=!r,a=a.m_Parent;return r},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(r){var a=this.m_Childs.length;this.m_Childs.push(r),r.m_Parent=this,r.m_Index=a},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var r=0,a=this.m_AllPolys.length;r<a;r++)this.m_AllPolys[r]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var r=this.m_AllPolys.length;return r>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&r--,r},pe(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(r){return Math.abs(r)},n.Math_Max_Int32_Int32=function(r,a){return Math.max(r,a)},s.msie||s.opera||s.safari?n.Cast_Int32=function(r){return r|0}:n.Cast_Int32=function(r){return~~r},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):~~r}:s.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(r){return Number.toInteger(r)}:s.msie7||s.msie8?n.Cast_Int64=function(r){return parseInt(r,10)}:s.msie?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):r|0}:n.Cast_Int64=function(r){return r<0?Math.ceil(r):Math.floor(r)},n.Clear=function(r){r.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var r=arguments,a=r.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,a===3)this.X=r[0],this.Y=r[1],this.Z=r[2];else if(a===2)this.X=r[0],this.Y=r[1],this.Z=0;else if(a===1)if(r[0]instanceof n.DoublePoint){var l=r[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y),this.Z=0}else{var p=r[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(a===2)this.X=r[0],this.Y=r[1];else if(a===1)if(r[0]instanceof n.DoublePoint){var l=r[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y)}else{var p=r[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(r,a){return r.X===a.X&&r.Y===a.Y},n.IntPoint.op_Inequality=function(r,a){return r.X!==a.X||r.Y!==a.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(r){this.X=r.X,this.Y=r.Y,n.use_xyz&&(typeof r.Z>"u"?this.Z=0:this.Z=r.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(r){this.X=n.Clipper.Round(r.X),this.Y=n.Clipper.Round(r.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(r,a,l){this.X=r,this.Y=a,n.use_xyz&&(typeof l>"u"?this.Z=0:this.Z=l)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var r=arguments,a=r.length;if(a===4)this.left=r[0],this.top=r[1],this.right=r[2],this.bottom=r[3];else if(a===1){var l=r[0];this.left=l.left,this.top=l.top,this.right=l.right,this.bottom=l.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(r){this.left=r.left,this.top=r.top,this.right=r.right,this.bottom=r.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(r,a,l,p){this.left=r,this.top=a,this.right=l,this.bottom=p},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(r,a){var l=a.Pt.Y-r.Pt.Y;return l>0?1:l<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(r){return r>-n.ClipperBase.tolerance&&r<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(r){return r.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(r,a){var l=a;do{if(n.IntPoint.op_Equality(l.Pt,r))return!0;l=l.Next}while(l!==a);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(r,a,l,p){return p?r.X===a.X&&r.Y===a.Y||r.X===l.X&&r.Y===l.Y||r.X>a.X==r.X<l.X&&r.Y>a.Y==r.Y<l.Y&&Ht.op_Equality(Ht.Int128Mul(r.X-a.X,l.Y-a.Y),Ht.Int128Mul(l.X-a.X,r.Y-a.Y)):r.X===a.X&&r.Y===a.Y||r.X===l.X&&r.Y===l.Y||r.X>a.X==r.X<l.X&&r.Y>a.Y==r.Y<l.Y&&(r.X-a.X)*(l.Y-a.Y)===(l.X-a.X)*(r.Y-a.Y)},n.ClipperBase.prototype.PointOnPolygon=function(r,a,l){for(var p=a;;){if(this.PointOnLineSegment(r,p.Pt,p.Next.Pt,l))return!0;if(p=p.Next,p===a)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var r=arguments,a=r.length,l,p,v,A,D,q,Z;return a===3?(l=r[0],p=r[1],Z=r[2],Z?Ht.op_Equality(Ht.Int128Mul(l.Delta.Y,p.Delta.X),Ht.Int128Mul(l.Delta.X,p.Delta.Y)):n.Cast_Int64(l.Delta.Y*p.Delta.X)===n.Cast_Int64(l.Delta.X*p.Delta.Y)):a===4?(v=r[0],A=r[1],D=r[2],Z=r[3],Z?Ht.op_Equality(Ht.Int128Mul(v.Y-A.Y,A.X-D.X),Ht.Int128Mul(v.X-A.X,A.Y-D.Y)):n.Cast_Int64((v.Y-A.Y)*(A.X-D.X))-n.Cast_Int64((v.X-A.X)*(A.Y-D.Y))===0):(v=r[0],A=r[1],D=r[2],q=r[3],Z=r[4],Z?Ht.op_Equality(Ht.Int128Mul(v.Y-A.Y,D.X-q.X),Ht.Int128Mul(v.X-A.X,D.Y-q.Y)):n.Cast_Int64((v.Y-A.Y)*(D.X-q.X))-n.Cast_Int64((v.X-A.X)*(D.Y-q.Y))===0)},n.ClipperBase.SlopesEqual3=function(r,a,l){return l?Ht.op_Equality(Ht.Int128Mul(r.Delta.Y,a.Delta.X),Ht.Int128Mul(r.Delta.X,a.Delta.Y)):n.Cast_Int64(r.Delta.Y*a.Delta.X)===n.Cast_Int64(r.Delta.X*a.Delta.Y)},n.ClipperBase.SlopesEqual4=function(r,a,l,p){return p?Ht.op_Equality(Ht.Int128Mul(r.Y-a.Y,a.X-l.X),Ht.Int128Mul(r.X-a.X,a.Y-l.Y)):n.Cast_Int64((r.Y-a.Y)*(a.X-l.X))-n.Cast_Int64((r.X-a.X)*(a.Y-l.Y))===0},n.ClipperBase.SlopesEqual5=function(r,a,l,p,v){return v?Ht.op_Equality(Ht.Int128Mul(r.Y-a.Y,l.X-p.X),Ht.Int128Mul(r.X-a.X,l.Y-p.Y)):n.Cast_Int64((r.Y-a.Y)*(l.X-p.X))-n.Cast_Int64((r.X-a.X)*(l.Y-p.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var r=0,a=this.m_edges.length;r<a;++r){for(var l=0,p=this.m_edges[r].length;l<p;++l)this.m_edges[r][l]=null;n.Clear(this.m_edges[r])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var r=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=r}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(r,a){a.Value?(r.X>n.ClipperBase.hiRange||r.Y>n.ClipperBase.hiRange||-r.X>n.ClipperBase.hiRange||-r.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(r.X>n.ClipperBase.loRange||r.Y>n.ClipperBase.loRange||-r.X>n.ClipperBase.loRange||-r.Y>n.ClipperBase.loRange)&&(a.Value=!0,this.RangeTest(r,a))},n.ClipperBase.prototype.InitEdge=function(r,a,l,p){r.Next=a,r.Prev=l,r.Curr.X=p.X,r.Curr.Y=p.Y,n.use_xyz&&(r.Curr.Z=p.Z),r.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(r,a){r.Curr.Y>=r.Next.Curr.Y?(r.Bot.X=r.Curr.X,r.Bot.Y=r.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Curr.Z),r.Top.X=r.Next.Curr.X,r.Top.Y=r.Next.Curr.Y,n.use_xyz&&(r.Top.Z=r.Next.Curr.Z)):(r.Top.X=r.Curr.X,r.Top.Y=r.Curr.Y,n.use_xyz&&(r.Top.Z=r.Curr.Z),r.Bot.X=r.Next.Curr.X,r.Bot.Y=r.Next.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Next.Curr.Z)),this.SetDx(r),r.PolyTyp=a},n.ClipperBase.prototype.FindNextLocMin=function(r){for(var a;;){for(;n.IntPoint.op_Inequality(r.Bot,r.Prev.Bot)||n.IntPoint.op_Equality(r.Curr,r.Top);)r=r.Next;if(r.Dx!==n.ClipperBase.horizontal&&r.Prev.Dx!==n.ClipperBase.horizontal)break;for(;r.Prev.Dx===n.ClipperBase.horizontal;)r=r.Prev;for(a=r;r.Dx===n.ClipperBase.horizontal;)r=r.Next;if(r.Top.Y!==r.Prev.Bot.Y){a.Prev.Bot.X<r.Bot.X&&(r=a);break}}return r},n.ClipperBase.prototype.ProcessBound=function(r,a){var l,p=r,v;if(p.OutIdx===n.ClipperBase.Skip){if(r=p,a){for(;r.Top.Y===r.Next.Bot.Y;)r=r.Next;for(;r!==p&&r.Dx===n.ClipperBase.horizontal;)r=r.Prev}else{for(;r.Top.Y===r.Prev.Bot.Y;)r=r.Prev;for(;r!==p&&r.Dx===n.ClipperBase.horizontal;)r=r.Next}if(r===p)a?p=r.Next:p=r.Prev;else{a?r=p.Next:r=p.Prev;var A=new n.LocalMinima;A.Next=null,A.Y=r.Bot.Y,A.LeftBound=null,A.RightBound=r,r.WindDelta=0,p=this.ProcessBound(r,a),this.InsertLocalMinima(A)}return p}if(r.Dx===n.ClipperBase.horizontal&&(a?l=r.Prev:l=r.Next,l.Dx===n.ClipperBase.horizontal?l.Bot.X!==r.Bot.X&&l.Top.X!==r.Bot.X&&this.ReverseHorizontal(r):l.Bot.X!==r.Bot.X&&this.ReverseHorizontal(r)),l=r,a){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==n.ClipperBase.Skip;)p=p.Next;if(p.Dx===n.ClipperBase.horizontal&&p.Next.OutIdx!==n.ClipperBase.Skip){for(v=p;v.Prev.Dx===n.ClipperBase.horizontal;)v=v.Prev;v.Prev.Top.X>p.Next.Top.X&&(p=v.Prev)}for(;r!==p;)r.NextInLML=r.Next,r.Dx===n.ClipperBase.horizontal&&r!==l&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),r=r.Next;r.Dx===n.ClipperBase.horizontal&&r!==l&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==n.ClipperBase.Skip;)p=p.Prev;if(p.Dx===n.ClipperBase.horizontal&&p.Prev.OutIdx!==n.ClipperBase.Skip){for(v=p;v.Next.Dx===n.ClipperBase.horizontal;)v=v.Next;(v.Next.Top.X===p.Prev.Top.X||v.Next.Top.X>p.Prev.Top.X)&&(p=v.Next)}for(;r!==p;)r.NextInLML=r.Prev,r.Dx===n.ClipperBase.horizontal&&r!==l&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),r=r.Prev;r.Dx===n.ClipperBase.horizontal&&r!==l&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),p=p.Prev}return p},n.ClipperBase.prototype.AddPath=function(r,a,l){n.use_lines?!l&&a===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):l||n.Error("AddPath: Open paths have been disabled.");var p=r.length-1;if(l)for(;p>0&&n.IntPoint.op_Equality(r[p],r[0]);)--p;for(;p>0&&n.IntPoint.op_Equality(r[p],r[p-1]);)--p;if(l&&p<2||!l&&p<1)return!1;for(var v=new Array,A=0;A<=p;A++)v.push(new n.TEdge);var D=!0;v[1].Curr.X=r[1].X,v[1].Curr.Y=r[1].Y,n.use_xyz&&(v[1].Curr.Z=r[1].Z);var q={Value:this.m_UseFullRange};this.RangeTest(r[0],q),this.m_UseFullRange=q.Value,q.Value=this.m_UseFullRange,this.RangeTest(r[p],q),this.m_UseFullRange=q.Value,this.InitEdge(v[0],v[1],v[p],r[0]),this.InitEdge(v[p],v[0],v[p-1],r[p]);for(var A=p-1;A>=1;--A)q.Value=this.m_UseFullRange,this.RangeTest(r[A],q),this.m_UseFullRange=q.Value,this.InitEdge(v[A],v[A+1],v[A-1],r[A]);for(var Z=v[0],ct=Z,wt=Z;;){if(ct.Curr===ct.Next.Curr&&(l||ct.Next!==Z)){if(ct===ct.Next)break;ct===Z&&(Z=ct.Next),ct=this.RemoveEdge(ct),wt=ct;continue}if(ct.Prev===ct.Next)break;if(l&&n.ClipperBase.SlopesEqual4(ct.Prev.Curr,ct.Curr,ct.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(ct.Prev.Curr,ct.Curr,ct.Next.Curr))){ct===Z&&(Z=ct.Next),ct=this.RemoveEdge(ct),ct=ct.Prev,wt=ct;continue}if(ct=ct.Next,ct===wt||!l&&ct.Next===Z)break}if(!l&&ct===ct.Next||l&&ct.Prev===ct.Next)return!1;l||(this.m_HasOpenPaths=!0,Z.Prev.OutIdx=n.ClipperBase.Skip),ct=Z;do this.InitEdge2(ct,a),ct=ct.Next,D&&ct.Curr.Y!==Z.Curr.Y&&(D=!1);while(ct!==Z);if(D){if(l)return!1;ct.Prev.OutIdx=n.ClipperBase.Skip;var bt=new n.LocalMinima;for(bt.Next=null,bt.Y=ct.Bot.Y,bt.LeftBound=null,bt.RightBound=ct,bt.RightBound.Side=n.EdgeSide.esRight,bt.RightBound.WindDelta=0;ct.Bot.X!==ct.Prev.Top.X&&this.ReverseHorizontal(ct),ct.Next.OutIdx!==n.ClipperBase.Skip;)ct.NextInLML=ct.Next,ct=ct.Next;return this.InsertLocalMinima(bt),this.m_edges.push(v),!0}this.m_edges.push(v);var Ct,re=null;for(n.IntPoint.op_Equality(ct.Prev.Bot,ct.Prev.Top)&&(ct=ct.Next);ct=this.FindNextLocMin(ct),ct!==re;){re===null&&(re=ct);var bt=new n.LocalMinima;bt.Next=null,bt.Y=ct.Bot.Y,ct.Dx<ct.Prev.Dx?(bt.LeftBound=ct.Prev,bt.RightBound=ct,Ct=!1):(bt.LeftBound=ct,bt.RightBound=ct.Prev,Ct=!0),bt.LeftBound.Side=n.EdgeSide.esLeft,bt.RightBound.Side=n.EdgeSide.esRight,l?bt.LeftBound.Next===bt.RightBound?bt.LeftBound.WindDelta=-1:bt.LeftBound.WindDelta=1:bt.LeftBound.WindDelta=0,bt.RightBound.WindDelta=-bt.LeftBound.WindDelta,ct=this.ProcessBound(bt.LeftBound,Ct),ct.OutIdx===n.ClipperBase.Skip&&(ct=this.ProcessBound(ct,Ct));var ve=this.ProcessBound(bt.RightBound,!Ct);ve.OutIdx===n.ClipperBase.Skip&&(ve=this.ProcessBound(ve,!Ct)),bt.LeftBound.OutIdx===n.ClipperBase.Skip?bt.LeftBound=null:bt.RightBound.OutIdx===n.ClipperBase.Skip&&(bt.RightBound=null),this.InsertLocalMinima(bt),Ct||(ct=ve)}return!0},n.ClipperBase.prototype.AddPaths=function(r,a,l){for(var p=!1,v=0,A=r.length;v<A;++v)this.AddPath(r[v],a,l)&&(p=!0);return p},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(r,a,l){return n.IntPoint.op_Equality(r,l)||n.IntPoint.op_Equality(r,a)||n.IntPoint.op_Equality(l,a)?!1:r.X!==l.X?a.X>r.X==a.X<l.X:a.Y>r.Y==a.Y<l.Y},n.ClipperBase.prototype.RemoveEdge=function(r){r.Prev.Next=r.Next,r.Next.Prev=r.Prev;var a=r.Next;return r.Prev=null,a},n.ClipperBase.prototype.SetDx=function(r){r.Delta.X=r.Top.X-r.Bot.X,r.Delta.Y=r.Top.Y-r.Bot.Y,r.Delta.Y===0?r.Dx=n.ClipperBase.horizontal:r.Dx=r.Delta.X/r.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(r){if(this.m_MinimaList===null)this.m_MinimaList=r;else if(r.Y>=this.m_MinimaList.Y)r.Next=this.m_MinimaList,this.m_MinimaList=r;else{for(var a=this.m_MinimaList;a.Next!==null&&r.Y<a.Next.Y;)a=a.Next;r.Next=a.Next,a.Next=r}},n.ClipperBase.prototype.PopLocalMinima=function(r,a){return a.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===r?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(r){var a=r.Top.X;r.Top.X=r.Bot.X,r.Bot.X=a,n.use_xyz&&(a=r.Top.Z,r.Top.Z=r.Bot.Z,r.Bot.Z=a)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var r=this.m_MinimaList;r!==null;){this.InsertScanbeam(r.Y);var a=r.LeftBound;a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),a=r.RightBound,a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),r=r.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(r){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=r;else if(r>this.m_Scanbeam.Y){var a=new n.Scanbeam;a.Y=r,a.Next=this.m_Scanbeam,this.m_Scanbeam=a}else{for(var l=this.m_Scanbeam;l.Next!==null&&r<=l.Next.Y;)l=l.Next;if(r===l.Y)return;var p=new n.Scanbeam;p.Y=r,p.Next=l.Next,l.Next=p}},n.ClipperBase.prototype.PopScanbeam=function(r){return this.m_Scanbeam===null?(r.v=0,!1):(r.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var r=new n.OutRec;return r.Idx=n.ClipperBase.Unassigned,r.IsHole=!1,r.IsOpen=!1,r.FirstLeft=null,r.Pts=null,r.BottomPt=null,r.PolyNode=null,this.m_PolyOuts.push(r),r.Idx=this.m_PolyOuts.length-1,r},n.ClipperBase.prototype.DisposeOutRec=function(r){var a=this.m_PolyOuts[r];a.Pts=null,a=null,this.m_PolyOuts[r]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(r){r.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var a=r.PrevInAEL,l=r.NextInAEL;return r.NextInLML.OutIdx=r.OutIdx,a!==null?a.NextInAEL=r.NextInLML:this.m_ActiveEdges=r.NextInLML,l!==null&&(l.PrevInAEL=r.NextInLML),r.NextInLML.Side=r.Side,r.NextInLML.WindDelta=r.WindDelta,r.NextInLML.WindCnt=r.WindCnt,r.NextInLML.WindCnt2=r.WindCnt2,r=r.NextInLML,r.Curr.X=r.Bot.X,r.Curr.Y=r.Bot.Y,r.PrevInAEL=a,r.NextInAEL=l,n.ClipperBase.IsHorizontal(r)||this.InsertScanbeam(r.Top.Y),r},n.ClipperBase.prototype.SwapPositionsInAEL=function(r,a){if(!(r.NextInAEL===r.PrevInAEL||a.NextInAEL===a.PrevInAEL)){if(r.NextInAEL===a){var l=a.NextInAEL;l!==null&&(l.PrevInAEL=r);var p=r.PrevInAEL;p!==null&&(p.NextInAEL=a),a.PrevInAEL=p,a.NextInAEL=r,r.PrevInAEL=a,r.NextInAEL=l}else if(a.NextInAEL===r){var v=r.NextInAEL;v!==null&&(v.PrevInAEL=a);var A=a.PrevInAEL;A!==null&&(A.NextInAEL=r),r.PrevInAEL=A,r.NextInAEL=a,a.PrevInAEL=r,a.NextInAEL=v}else{var D=r.NextInAEL,q=r.PrevInAEL;r.NextInAEL=a.NextInAEL,r.NextInAEL!==null&&(r.NextInAEL.PrevInAEL=r),r.PrevInAEL=a.PrevInAEL,r.PrevInAEL!==null&&(r.PrevInAEL.NextInAEL=r),a.NextInAEL=D,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=a),a.PrevInAEL=q,a.PrevInAEL!==null&&(a.PrevInAEL.NextInAEL=a)}r.PrevInAEL===null?this.m_ActiveEdges=r:a.PrevInAEL===null&&(this.m_ActiveEdges=a)}},n.ClipperBase.prototype.DeleteFromAEL=function(r){var a=r.PrevInAEL,l=r.NextInAEL;a===null&&l===null&&r!==this.m_ActiveEdges||(a!==null?a.NextInAEL=l:this.m_ActiveEdges=l,l!==null&&(l.PrevInAEL=a),r.NextInAEL=null,r.PrevInAEL=null)},n.Clipper=function(r){typeof r>"u"&&(r=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&r)!==0,this.StrictlySimple=(2&r)!==0,this.PreserveCollinear=(4&r)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(r){var a=new n.Maxima;if(a.X=r,this.m_Maxima===null)this.m_Maxima=a,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(r<this.m_Maxima.X)a.Next=this.m_Maxima,a.Prev=null,this.m_Maxima=a;else{for(var l=this.m_Maxima;l.Next!==null&&r>=l.Next.X;)l=l.Next;if(r===l.X)return;a.Next=l.Next,a.Prev=l,l.Next!==null&&(l.Next.Prev=a),l.Next=a}},n.Clipper.prototype.Execute=function(){var r=arguments,a=r.length,l=r[1]instanceof n.PolyTree;if(a===4&&!l){var p=r[0],v=r[1],A=r[2],D=r[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(v),this.m_SubjFillType=A,this.m_ClipFillType=D,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var q=this.ExecuteInternal();q&&this.BuildResult(v)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return q}else if(a===4&&l){var p=r[0],Z=r[1],A=r[2],D=r[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=A,this.m_ClipFillType=D,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var q=this.ExecuteInternal();q&&this.BuildResult2(Z)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return q}else if(a===2&&!l){var p=r[0],v=r[1];return this.Execute(p,v,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(a===2&&l){var p=r[0],Z=r[1];return this.Execute(p,Z,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(r){if(!(r.FirstLeft===null||r.IsHole!==r.FirstLeft.IsHole&&r.FirstLeft.Pts!==null)){for(var a=r.FirstLeft;a!==null&&(a.IsHole===r.IsHole||a.Pts===null);)a=a.FirstLeft;r.FirstLeft=a}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var r={},a={};if(!this.PopScanbeam(r))return!1;for(this.InsertLocalMinimaIntoAEL(r.v);this.PopScanbeam(a)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(a.v))return!1;this.ProcessEdgesAtTopOfScanbeam(a.v),r.v=a.v,this.InsertLocalMinimaIntoAEL(r.v)}var l,p,v;for(p=0,v=this.m_PolyOuts.length;p<v;p++)l=this.m_PolyOuts[p],!(l.Pts===null||l.IsOpen)&&(l.IsHole^this.ReverseSolution)==this.Area$1(l)>0&&this.ReversePolyPtLinks(l.Pts);for(this.JoinCommonEdges(),p=0,v=this.m_PolyOuts.length;p<v;p++)l=this.m_PolyOuts[p],l.Pts!==null&&(l.IsOpen?this.FixupOutPolyline(l):this.FixupOutPolygon(l));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var r=0,a=this.m_PolyOuts.length;r<a;++r)this.DisposeOutRec(r);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(r,a,l){var p=new n.Join;p.OutPt1=r,p.OutPt2=a,p.OffPt.X=l.X,p.OffPt.Y=l.Y,n.use_xyz&&(p.OffPt.Z=l.Z),this.m_Joins.push(p)},n.Clipper.prototype.AddGhostJoin=function(r,a){var l=new n.Join;l.OutPt1=r,l.OffPt.X=a.X,l.OffPt.Y=a.Y,n.use_xyz&&(l.OffPt.Z=a.Z),this.m_GhostJoins.push(l)},n.Clipper.prototype.SetZ=function(r,a,l){if(this.ZFillFunction!==null){if(r.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(r,a.Bot)?r.Z=a.Bot.Z:n.IntPoint.op_Equality(r,a.Top)?r.Z=a.Top.Z:n.IntPoint.op_Equality(r,l.Bot)?r.Z=l.Bot.Z:n.IntPoint.op_Equality(r,l.Top)?r.Z=l.Top.Z:this.ZFillFunction(a.Bot,a.Top,l.Bot,l.Top,r)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(r){for(var a={},l,p;this.PopLocalMinima(r,a);){l=a.v.LeftBound,p=a.v.RightBound;var v=null;if(l===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(v=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(l,null),this.SetWindingCount(l),this.IsContributing(l)&&(v=this.AddOutPt(l,l.Bot)),this.InsertScanbeam(l.Top.Y)):(this.InsertEdgeIntoAEL(l,null),this.InsertEdgeIntoAEL(p,l),this.SetWindingCount(l),p.WindCnt=l.WindCnt,p.WindCnt2=l.WindCnt2,this.IsContributing(l)&&(v=this.AddLocalMinPoly(l,p,l.Bot)),this.InsertScanbeam(l.Top.Y)),p!==null&&(n.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(l===null||p===null)){if(v!==null&&n.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var A=0,D=this.m_GhostJoins.length;A<D;A++){var q=this.m_GhostJoins[A];this.HorzSegmentsOverlap(q.OutPt1.Pt.X,q.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin(q.OutPt1,v,q.OffPt)}if(l.OutIdx>=0&&l.PrevInAEL!==null&&l.PrevInAEL.Curr.X===l.Bot.X&&l.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(l.PrevInAEL.Curr,l.PrevInAEL.Top,l.Curr,l.Top,this.m_UseFullRange)&&l.WindDelta!==0&&l.PrevInAEL.WindDelta!==0){var Z=this.AddOutPt(l.PrevInAEL,l.Bot);this.AddJoin(v,Z,l.Top)}if(l.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var Z=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(v,Z,p.Top)}var ct=l.NextInAEL;if(ct!==null)for(;ct!==p;)this.IntersectEdges(p,ct,l.Curr),ct=ct.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(r,a){if(this.m_ActiveEdges===null)r.PrevInAEL=null,r.NextInAEL=null,this.m_ActiveEdges=r;else if(a===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,r))r.PrevInAEL=null,r.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=r,this.m_ActiveEdges=r;else{for(a===null&&(a=this.m_ActiveEdges);a.NextInAEL!==null&&!this.E2InsertsBeforeE1(a.NextInAEL,r);)a=a.NextInAEL;r.NextInAEL=a.NextInAEL,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=r),r.PrevInAEL=a,a.NextInAEL=r}},n.Clipper.prototype.E2InsertsBeforeE1=function(r,a){return a.Curr.X===r.Curr.X?a.Top.Y>r.Top.Y?a.Top.X<n.Clipper.TopX(r,a.Top.Y):r.Top.X>n.Clipper.TopX(a,r.Top.Y):a.Curr.X<r.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(r){var a,l;switch(r.PolyTyp===n.PolyType.ptSubject?(a=this.m_SubjFillType,l=this.m_ClipFillType):(a=this.m_ClipFillType,l=this.m_SubjFillType),a){case n.PolyFillType.pftEvenOdd:if(r.WindDelta===0&&r.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(r.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(r.WindCnt!==1)return!1;break;default:if(r.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctUnion:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}case n.ClipType.ctDifference:if(r.PolyTyp===n.PolyType.ptSubject)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctXor:if(r.WindDelta===0)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(r){for(var a=r.PrevInAEL;a!==null&&(a.PolyTyp!==r.PolyTyp||a.WindDelta===0);)a=a.PrevInAEL;if(a===null){var l=r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;r.WindDelta===0?r.WindCnt=l===n.PolyFillType.pftNegative?-1:1:r.WindCnt=r.WindDelta,r.WindCnt2=0,a=this.m_ActiveEdges}else if(r.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)r.WindCnt=1,r.WindCnt2=a.WindCnt2,a=a.NextInAEL;else if(this.IsEvenOddFillType(r)){if(r.WindDelta===0){for(var p=!0,v=a.PrevInAEL;v!==null;)v.PolyTyp===a.PolyTyp&&v.WindDelta!==0&&(p=!p),v=v.PrevInAEL;r.WindCnt=p?0:1}else r.WindCnt=r.WindDelta;r.WindCnt2=a.WindCnt2,a=a.NextInAEL}else a.WindCnt*a.WindDelta<0?Math.abs(a.WindCnt)>1?a.WindDelta*r.WindDelta<0?r.WindCnt=a.WindCnt:r.WindCnt=a.WindCnt+r.WindDelta:r.WindCnt=r.WindDelta===0?1:r.WindDelta:r.WindDelta===0?r.WindCnt=a.WindCnt<0?a.WindCnt-1:a.WindCnt+1:a.WindDelta*r.WindDelta<0?r.WindCnt=a.WindCnt:r.WindCnt=a.WindCnt+r.WindDelta,r.WindCnt2=a.WindCnt2,a=a.NextInAEL;if(this.IsEvenOddAltFillType(r))for(;a!==r;)a.WindDelta!==0&&(r.WindCnt2=r.WindCnt2===0?1:0),a=a.NextInAEL;else for(;a!==r;)r.WindCnt2+=a.WindDelta,a=a.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(r){this.m_SortedEdges===null?(this.m_SortedEdges=r,r.PrevInSEL=null,r.NextInSEL=null):(r.NextInSEL=this.m_SortedEdges,r.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=r,this.m_SortedEdges=r)},n.Clipper.prototype.PopEdgeFromSEL=function(r){if(r.v=this.m_SortedEdges,r.v===null)return!1;var a=r.v;return this.m_SortedEdges=r.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),a.NextInSEL=null,a.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var r=this.m_ActiveEdges;for(this.m_SortedEdges=r;r!==null;)r.PrevInSEL=r.PrevInAEL,r.NextInSEL=r.NextInAEL,r=r.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(r,a){if(!(r.NextInSEL===null&&r.PrevInSEL===null)&&!(a.NextInSEL===null&&a.PrevInSEL===null)){if(r.NextInSEL===a){var l=a.NextInSEL;l!==null&&(l.PrevInSEL=r);var p=r.PrevInSEL;p!==null&&(p.NextInSEL=a),a.PrevInSEL=p,a.NextInSEL=r,r.PrevInSEL=a,r.NextInSEL=l}else if(a.NextInSEL===r){var l=r.NextInSEL;l!==null&&(l.PrevInSEL=a);var p=a.PrevInSEL;p!==null&&(p.NextInSEL=r),r.PrevInSEL=p,r.NextInSEL=a,a.PrevInSEL=r,a.NextInSEL=l}else{var l=r.NextInSEL,p=r.PrevInSEL;r.NextInSEL=a.NextInSEL,r.NextInSEL!==null&&(r.NextInSEL.PrevInSEL=r),r.PrevInSEL=a.PrevInSEL,r.PrevInSEL!==null&&(r.PrevInSEL.NextInSEL=r),a.NextInSEL=l,a.NextInSEL!==null&&(a.NextInSEL.PrevInSEL=a),a.PrevInSEL=p,a.PrevInSEL!==null&&(a.PrevInSEL.NextInSEL=a)}r.PrevInSEL===null?this.m_SortedEdges=r:a.PrevInSEL===null&&(this.m_SortedEdges=a)}},n.Clipper.prototype.AddLocalMaxPoly=function(r,a,l){this.AddOutPt(r,l),a.WindDelta===0&&this.AddOutPt(a,l),r.OutIdx===a.OutIdx?(r.OutIdx=-1,a.OutIdx=-1):r.OutIdx<a.OutIdx?this.AppendPolygon(r,a):this.AppendPolygon(a,r)},n.Clipper.prototype.AddLocalMinPoly=function(r,a,l){var p,v,A;if(n.ClipperBase.IsHorizontal(a)||r.Dx>a.Dx?(p=this.AddOutPt(r,l),a.OutIdx=r.OutIdx,r.Side=n.EdgeSide.esLeft,a.Side=n.EdgeSide.esRight,v=r,v.PrevInAEL===a?A=a.PrevInAEL:A=v.PrevInAEL):(p=this.AddOutPt(a,l),r.OutIdx=a.OutIdx,r.Side=n.EdgeSide.esRight,a.Side=n.EdgeSide.esLeft,v=a,v.PrevInAEL===r?A=r.PrevInAEL:A=v.PrevInAEL),A!==null&&A.OutIdx>=0&&A.Top.Y<l.Y&&v.Top.Y<l.Y){var D=n.Clipper.TopX(A,l.Y),q=n.Clipper.TopX(v,l.Y);if(D===q&&v.WindDelta!==0&&A.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(D,l.Y),A.Top,new n.IntPoint2(q,l.Y),v.Top,this.m_UseFullRange)){var Z=this.AddOutPt(A,l);this.AddJoin(p,Z,v.Top)}}return p},n.Clipper.prototype.AddOutPt=function(r,a){if(r.OutIdx<0){var l=this.CreateOutRec();l.IsOpen=r.WindDelta===0;var p=new n.OutPt;return l.Pts=p,p.Idx=l.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=p,p.Prev=p,l.IsOpen||this.SetHoleState(r,l),r.OutIdx=l.Idx,p}else{var l=this.m_PolyOuts[r.OutIdx],v=l.Pts,A=r.Side===n.EdgeSide.esLeft;if(A&&n.IntPoint.op_Equality(a,v.Pt))return v;if(!A&&n.IntPoint.op_Equality(a,v.Prev.Pt))return v.Prev;var p=new n.OutPt;return p.Idx=l.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=v,p.Prev=v.Prev,p.Prev.Next=p,v.Prev=p,A&&(l.Pts=p),p}},n.Clipper.prototype.GetLastOutPt=function(r){var a=this.m_PolyOuts[r.OutIdx];return r.Side===n.EdgeSide.esLeft?a.Pts:a.Pts.Prev},n.Clipper.prototype.SwapPoints=function(r,a){var l=new n.IntPoint1(r.Value);r.Value.X=a.Value.X,r.Value.Y=a.Value.Y,n.use_xyz&&(r.Value.Z=a.Value.Z),a.Value.X=l.X,a.Value.Y=l.Y,n.use_xyz&&(a.Value.Z=l.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(r,a,l,p){var v;return r>a&&(v=r,r=a,a=v),l>p&&(v=l,l=p,p=v),r<p&&l<a},n.Clipper.prototype.SetHoleState=function(r,a){for(var l=r.PrevInAEL,p=null;l!==null;)l.OutIdx>=0&&l.WindDelta!==0&&(p===null?p=l:p.OutIdx===l.OutIdx&&(p=null)),l=l.PrevInAEL;p===null?(a.FirstLeft=null,a.IsHole=!1):(a.FirstLeft=this.m_PolyOuts[p.OutIdx],a.IsHole=!a.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(r,a){return r.Y===a.Y?n.ClipperBase.horizontal:(a.X-r.X)/(a.Y-r.Y)},n.Clipper.prototype.FirstIsBottomPt=function(r,a){for(var l=r.Prev;n.IntPoint.op_Equality(l.Pt,r.Pt)&&l!==r;)l=l.Prev;var p=Math.abs(this.GetDx(r.Pt,l.Pt));for(l=r.Next;n.IntPoint.op_Equality(l.Pt,r.Pt)&&l!==r;)l=l.Next;var v=Math.abs(this.GetDx(r.Pt,l.Pt));for(l=a.Prev;n.IntPoint.op_Equality(l.Pt,a.Pt)&&l!==a;)l=l.Prev;var A=Math.abs(this.GetDx(a.Pt,l.Pt));for(l=a.Next;n.IntPoint.op_Equality(l.Pt,a.Pt)&&l!==a;)l=l.Next;var D=Math.abs(this.GetDx(a.Pt,l.Pt));return Math.max(p,v)===Math.max(A,D)&&Math.min(p,v)===Math.min(A,D)?this.Area(r)>0:p>=A&&p>=D||v>=A&&v>=D},n.Clipper.prototype.GetBottomPt=function(r){for(var a=null,l=r.Next;l!==r;)l.Pt.Y>r.Pt.Y?(r=l,a=null):l.Pt.Y===r.Pt.Y&&l.Pt.X<=r.Pt.X&&(l.Pt.X<r.Pt.X?(a=null,r=l):l.Next!==r&&l.Prev!==r&&(a=l)),l=l.Next;if(a!==null)for(;a!==l;)for(this.FirstIsBottomPt(l,a)||(r=a),a=a.Next;n.IntPoint.op_Inequality(a.Pt,r.Pt);)a=a.Next;return r},n.Clipper.prototype.GetLowermostRec=function(r,a){r.BottomPt===null&&(r.BottomPt=this.GetBottomPt(r.Pts)),a.BottomPt===null&&(a.BottomPt=this.GetBottomPt(a.Pts));var l=r.BottomPt,p=a.BottomPt;return l.Pt.Y>p.Pt.Y?r:l.Pt.Y<p.Pt.Y?a:l.Pt.X<p.Pt.X?r:l.Pt.X>p.Pt.X||l.Next===l?a:p.Next===p||this.FirstIsBottomPt(l,p)?r:a},n.Clipper.prototype.OutRec1RightOfOutRec2=function(r,a){do if(r=r.FirstLeft,r===a)return!0;while(r!==null);return!1},n.Clipper.prototype.GetOutRec=function(r){for(var a=this.m_PolyOuts[r];a!==this.m_PolyOuts[a.Idx];)a=this.m_PolyOuts[a.Idx];return a},n.Clipper.prototype.AppendPolygon=function(r,a){var l=this.m_PolyOuts[r.OutIdx],p=this.m_PolyOuts[a.OutIdx],v;this.OutRec1RightOfOutRec2(l,p)?v=p:this.OutRec1RightOfOutRec2(p,l)?v=l:v=this.GetLowermostRec(l,p);var A=l.Pts,D=A.Prev,q=p.Pts,Z=q.Prev;r.Side===n.EdgeSide.esLeft?a.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(q),q.Next=A,A.Prev=q,D.Next=Z,Z.Prev=D,l.Pts=Z):(Z.Next=A,A.Prev=Z,q.Prev=D,D.Next=q,l.Pts=q):a.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(q),D.Next=Z,Z.Prev=D,q.Next=A,A.Prev=q):(D.Next=q,q.Prev=D,A.Prev=Z,Z.Next=A),l.BottomPt=null,v===p&&(p.FirstLeft!==l&&(l.FirstLeft=p.FirstLeft),l.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=l;var ct=r.OutIdx,wt=a.OutIdx;r.OutIdx=-1,a.OutIdx=-1;for(var bt=this.m_ActiveEdges;bt!==null;){if(bt.OutIdx===wt){bt.OutIdx=ct,bt.Side=r.Side;break}bt=bt.NextInAEL}p.Idx=l.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(r){if(r!==null){var a,l;a=r;do l=a.Next,a.Next=a.Prev,a.Prev=l,a=l;while(a!==r)}},n.Clipper.SwapSides=function(r,a){var l=r.Side;r.Side=a.Side,a.Side=l},n.Clipper.SwapPolyIndexes=function(r,a){var l=r.OutIdx;r.OutIdx=a.OutIdx,a.OutIdx=l},n.Clipper.prototype.IntersectEdges=function(r,a,l){var p=r.OutIdx>=0,v=a.OutIdx>=0;if(n.use_xyz&&this.SetZ(l,r,a),n.use_lines&&(r.WindDelta===0||a.WindDelta===0)){if(r.WindDelta===0&&a.WindDelta===0)return;r.PolyTyp===a.PolyTyp&&r.WindDelta!==a.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?r.WindDelta===0?v&&(this.AddOutPt(r,l),p&&(r.OutIdx=-1)):p&&(this.AddOutPt(a,l),v&&(a.OutIdx=-1)):r.PolyTyp!==a.PolyTyp&&(r.WindDelta===0&&Math.abs(a.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||a.WindCnt2===0)?(this.AddOutPt(r,l),p&&(r.OutIdx=-1)):a.WindDelta===0&&Math.abs(r.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||r.WindCnt2===0)&&(this.AddOutPt(a,l),v&&(a.OutIdx=-1)));return}if(r.PolyTyp===a.PolyTyp)if(this.IsEvenOddFillType(r)){var A=r.WindCnt;r.WindCnt=a.WindCnt,a.WindCnt=A}else r.WindCnt+a.WindDelta===0?r.WindCnt=-r.WindCnt:r.WindCnt+=a.WindDelta,a.WindCnt-r.WindDelta===0?a.WindCnt=-a.WindCnt:a.WindCnt-=r.WindDelta;else this.IsEvenOddFillType(a)?r.WindCnt2=r.WindCnt2===0?1:0:r.WindCnt2+=a.WindDelta,this.IsEvenOddFillType(r)?a.WindCnt2=a.WindCnt2===0?1:0:a.WindCnt2-=r.WindDelta;var D,q,Z,ct;r.PolyTyp===n.PolyType.ptSubject?(D=this.m_SubjFillType,Z=this.m_ClipFillType):(D=this.m_ClipFillType,Z=this.m_SubjFillType),a.PolyTyp===n.PolyType.ptSubject?(q=this.m_SubjFillType,ct=this.m_ClipFillType):(q=this.m_ClipFillType,ct=this.m_SubjFillType);var wt,bt;switch(D){case n.PolyFillType.pftPositive:wt=r.WindCnt;break;case n.PolyFillType.pftNegative:wt=-r.WindCnt;break;default:wt=Math.abs(r.WindCnt);break}switch(q){case n.PolyFillType.pftPositive:bt=a.WindCnt;break;case n.PolyFillType.pftNegative:bt=-a.WindCnt;break;default:bt=Math.abs(a.WindCnt);break}if(p&&v)wt!==0&&wt!==1||bt!==0&&bt!==1||r.PolyTyp!==a.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(r,a,l):(this.AddOutPt(r,l),this.AddOutPt(a,l),n.Clipper.SwapSides(r,a),n.Clipper.SwapPolyIndexes(r,a));else if(p)(bt===0||bt===1)&&(this.AddOutPt(r,l),n.Clipper.SwapSides(r,a),n.Clipper.SwapPolyIndexes(r,a));else if(v)(wt===0||wt===1)&&(this.AddOutPt(a,l),n.Clipper.SwapSides(r,a),n.Clipper.SwapPolyIndexes(r,a));else if((wt===0||wt===1)&&(bt===0||bt===1)){var Ct,re;switch(Z){case n.PolyFillType.pftPositive:Ct=r.WindCnt2;break;case n.PolyFillType.pftNegative:Ct=-r.WindCnt2;break;default:Ct=Math.abs(r.WindCnt2);break}switch(ct){case n.PolyFillType.pftPositive:re=a.WindCnt2;break;case n.PolyFillType.pftNegative:re=-a.WindCnt2;break;default:re=Math.abs(a.WindCnt2);break}if(r.PolyTyp!==a.PolyTyp)this.AddLocalMinPoly(r,a,l);else if(wt===1&&bt===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Ct>0&&re>0&&this.AddLocalMinPoly(r,a,l);break;case n.ClipType.ctUnion:Ct<=0&&re<=0&&this.AddLocalMinPoly(r,a,l);break;case n.ClipType.ctDifference:(r.PolyTyp===n.PolyType.ptClip&&Ct>0&&re>0||r.PolyTyp===n.PolyType.ptSubject&&Ct<=0&&re<=0)&&this.AddLocalMinPoly(r,a,l);break;case n.ClipType.ctXor:this.AddLocalMinPoly(r,a,l);break}else n.Clipper.SwapSides(r,a)}},n.Clipper.prototype.DeleteFromSEL=function(r){var a=r.PrevInSEL,l=r.NextInSEL;a===null&&l===null&&r!==this.m_SortedEdges||(a!==null?a.NextInSEL=l:this.m_SortedEdges=l,l!==null&&(l.PrevInSEL=a),r.NextInSEL=null,r.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var r={};this.PopEdgeFromSEL(r);)this.ProcessHorizontal(r.v)},n.Clipper.prototype.GetHorzDirection=function(r,a){r.Bot.X<r.Top.X?(a.Left=r.Bot.X,a.Right=r.Top.X,a.Dir=n.Direction.dLeftToRight):(a.Left=r.Top.X,a.Right=r.Bot.X,a.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(r){var a={Dir:null,Left:null,Right:null};this.GetHorzDirection(r,a);for(var l=a.Dir,p=a.Left,v=a.Right,A=r.WindDelta===0,D=r,q=null;D.NextInLML!==null&&n.ClipperBase.IsHorizontal(D.NextInLML);)D=D.NextInLML;D.NextInLML===null&&(q=this.GetMaximaPair(D));var Z=this.m_Maxima;if(Z!==null)if(l===n.Direction.dLeftToRight){for(;Z!==null&&Z.X<=r.Bot.X;)Z=Z.Next;Z!==null&&Z.X>=D.Top.X&&(Z=null)}else{for(;Z.Next!==null&&Z.Next.X<r.Bot.X;)Z=Z.Next;Z.X<=D.Top.X&&(Z=null)}for(var ct=null;;){for(var wt=r===D,bt=this.GetNextInAEL(r,l);bt!==null;){if(Z!==null)if(l===n.Direction.dLeftToRight)for(;Z!==null&&Z.X<bt.Curr.X;)r.OutIdx>=0&&!A&&this.AddOutPt(r,new n.IntPoint2(Z.X,r.Bot.Y)),Z=Z.Next;else for(;Z!==null&&Z.X>bt.Curr.X;)r.OutIdx>=0&&!A&&this.AddOutPt(r,new n.IntPoint2(Z.X,r.Bot.Y)),Z=Z.Prev;if(l===n.Direction.dLeftToRight&&bt.Curr.X>v||l===n.Direction.dRightToLeft&&bt.Curr.X<p||bt.Curr.X===r.Top.X&&r.NextInLML!==null&&bt.Dx<r.NextInLML.Dx)break;if(r.OutIdx>=0&&!A){n.use_xyz&&(l===n.Direction.dLeftToRight?this.SetZ(bt.Curr,r,bt):this.SetZ(bt.Curr,bt,r)),ct=this.AddOutPt(r,bt.Curr);for(var Ct=this.m_SortedEdges;Ct!==null;){if(Ct.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Ct.Bot.X,Ct.Top.X)){var re=this.GetLastOutPt(Ct);this.AddJoin(re,ct,Ct.Top)}Ct=Ct.NextInSEL}this.AddGhostJoin(ct,r.Bot)}if(bt===q&&wt){r.OutIdx>=0&&this.AddLocalMaxPoly(r,q,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(q);return}if(l===n.Direction.dLeftToRight){var ve=new n.IntPoint2(bt.Curr.X,r.Curr.Y);this.IntersectEdges(r,bt,ve)}else{var ve=new n.IntPoint2(bt.Curr.X,r.Curr.Y);this.IntersectEdges(bt,r,ve)}var Ee=this.GetNextInAEL(bt,l);this.SwapPositionsInAEL(r,bt),bt=Ee}if(r.NextInLML===null||!n.ClipperBase.IsHorizontal(r.NextInLML))break;r=this.UpdateEdgeIntoAEL(r),r.OutIdx>=0&&this.AddOutPt(r,r.Bot),a={Dir:l,Left:p,Right:v},this.GetHorzDirection(r,a),l=a.Dir,p=a.Left,v=a.Right}if(r.OutIdx>=0&&ct===null){ct=this.GetLastOutPt(r);for(var Ct=this.m_SortedEdges;Ct!==null;){if(Ct.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Ct.Bot.X,Ct.Top.X)){var re=this.GetLastOutPt(Ct);this.AddJoin(re,ct,Ct.Top)}Ct=Ct.NextInSEL}this.AddGhostJoin(ct,r.Top)}if(r.NextInLML!==null)if(r.OutIdx>=0){if(ct=this.AddOutPt(r,r.Top),r=this.UpdateEdgeIntoAEL(r),r.WindDelta===0)return;var Be=r.PrevInAEL,Ee=r.NextInAEL;if(Be!==null&&Be.Curr.X===r.Bot.X&&Be.Curr.Y===r.Bot.Y&&Be.WindDelta===0&&Be.OutIdx>=0&&Be.Curr.Y>Be.Top.Y&&n.ClipperBase.SlopesEqual3(r,Be,this.m_UseFullRange)){var re=this.AddOutPt(Be,r.Bot);this.AddJoin(ct,re,r.Top)}else if(Ee!==null&&Ee.Curr.X===r.Bot.X&&Ee.Curr.Y===r.Bot.Y&&Ee.WindDelta!==0&&Ee.OutIdx>=0&&Ee.Curr.Y>Ee.Top.Y&&n.ClipperBase.SlopesEqual3(r,Ee,this.m_UseFullRange)){var re=this.AddOutPt(Ee,r.Bot);this.AddJoin(ct,re,r.Top)}}else r=this.UpdateEdgeIntoAEL(r);else r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r)},n.Clipper.prototype.GetNextInAEL=function(r,a){return a===n.Direction.dLeftToRight?r.NextInAEL:r.PrevInAEL},n.Clipper.prototype.IsMinima=function(r){return r!==null&&r.Prev.NextInLML!==r&&r.Next.NextInLML!==r},n.Clipper.prototype.IsMaxima=function(r,a){return r!==null&&r.Top.Y===a&&r.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(r,a){return r.Top.Y===a&&r.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(r){return n.IntPoint.op_Equality(r.Next.Top,r.Top)&&r.Next.NextInLML===null?r.Next:n.IntPoint.op_Equality(r.Prev.Top,r.Top)&&r.Prev.NextInLML===null?r.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(r){var a=this.GetMaximaPair(r);return a===null||a.OutIdx===n.ClipperBase.Skip||a.NextInAEL===a.PrevInAEL&&!n.ClipperBase.IsHorizontal(a)?null:a},n.Clipper.prototype.ProcessIntersections=function(r){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(r),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(r){if(this.m_ActiveEdges!==null){var a=this.m_ActiveEdges;for(this.m_SortedEdges=a;a!==null;)a.PrevInSEL=a.PrevInAEL,a.NextInSEL=a.NextInAEL,a.Curr.X=n.Clipper.TopX(a,r),a=a.NextInAEL;for(var l=!0;l&&this.m_SortedEdges!==null;){for(l=!1,a=this.m_SortedEdges;a.NextInSEL!==null;){var p=a.NextInSEL,v=new n.IntPoint0;if(a.Curr.X>p.Curr.X){this.IntersectPoint(a,p,v),v.Y<r&&(v=new n.IntPoint2(n.Clipper.TopX(a,r),r));var A=new n.IntersectNode;A.Edge1=a,A.Edge2=p,A.Pt.X=v.X,A.Pt.Y=v.Y,n.use_xyz&&(A.Pt.Z=v.Z),this.m_IntersectList.push(A),this.SwapPositionsInSEL(a,p),l=!0}else a=p}if(a.PrevInSEL!==null)a.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(r){return r.Edge1.NextInSEL===r.Edge2||r.Edge1.PrevInSEL===r.Edge2},n.Clipper.IntersectNodeSort=function(r,a){return a.Pt.Y-r.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var r=this.m_IntersectList.length,a=0;a<r;a++){if(!this.EdgesAdjacent(this.m_IntersectList[a])){for(var l=a+1;l<r&&!this.EdgesAdjacent(this.m_IntersectList[l]);)l++;if(l===r)return!1;var p=this.m_IntersectList[a];this.m_IntersectList[a]=this.m_IntersectList[l],this.m_IntersectList[l]=p}this.SwapPositionsInSEL(this.m_IntersectList[a].Edge1,this.m_IntersectList[a].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var r=0,a=this.m_IntersectList.length;r<a;r++){var l=this.m_IntersectList[r];this.IntersectEdges(l.Edge1,l.Edge2,l.Pt),this.SwapPositionsInAEL(l.Edge1,l.Edge2)}this.m_IntersectList.length=0};var Jt=function(r){return r<0?Math.ceil(r-.5):Math.round(r)},Ne=function(r){return r<0?Math.ceil(r-.5):Math.floor(r+.5)},Xe=function(r){return r<0?-Math.round(Math.abs(r)):Math.round(r)},Pe=function(r){return r<0?(r-=.5,r<-2147483648?Math.ceil(r):r|0):(r+=.5,r>2147483647?Math.floor(r):r|0)};s.msie?n.Clipper.Round=Jt:s.chromium?n.Clipper.Round=Xe:s.safari?n.Clipper.Round=Pe:n.Clipper.Round=Ne,n.Clipper.TopX=function(r,a){return a===r.Top.Y?r.Top.X:r.Bot.X+n.Clipper.Round(r.Dx*(a-r.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(r,a,l){l.X=0,l.Y=0;var p,v;if(r.Dx===a.Dx){l.Y=r.Curr.Y,l.X=n.Clipper.TopX(r,l.Y);return}if(r.Delta.X===0)l.X=r.Bot.X,n.ClipperBase.IsHorizontal(a)?l.Y=a.Bot.Y:(v=a.Bot.Y-a.Bot.X/a.Dx,l.Y=n.Clipper.Round(l.X/a.Dx+v));else if(a.Delta.X===0)l.X=a.Bot.X,n.ClipperBase.IsHorizontal(r)?l.Y=r.Bot.Y:(p=r.Bot.Y-r.Bot.X/r.Dx,l.Y=n.Clipper.Round(l.X/r.Dx+p));else{p=r.Bot.X-r.Bot.Y*r.Dx,v=a.Bot.X-a.Bot.Y*a.Dx;var A=(v-p)/(r.Dx-a.Dx);l.Y=n.Clipper.Round(A),Math.abs(r.Dx)<Math.abs(a.Dx)?l.X=n.Clipper.Round(r.Dx*A+p):l.X=n.Clipper.Round(a.Dx*A+v)}if(l.Y<r.Top.Y||l.Y<a.Top.Y){if(r.Top.Y>a.Top.Y)return l.Y=r.Top.Y,l.X=n.Clipper.TopX(a,r.Top.Y),l.X<r.Top.X;l.Y=a.Top.Y,Math.abs(r.Dx)<Math.abs(a.Dx)?l.X=n.Clipper.TopX(r,l.Y):l.X=n.Clipper.TopX(a,l.Y)}l.Y>r.Curr.Y&&(l.Y=r.Curr.Y,Math.abs(r.Dx)>Math.abs(a.Dx)?l.X=n.Clipper.TopX(a,l.Y):l.X=n.Clipper.TopX(r,l.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(r){for(var a=this.m_ActiveEdges;a!==null;){var l=this.IsMaxima(a,r);if(l){var p=this.GetMaximaPairEx(a);l=p===null||!n.ClipperBase.IsHorizontal(p)}if(l){this.StrictlySimple&&this.InsertMaxima(a.Top.X);var v=a.PrevInAEL;this.DoMaxima(a),v===null?a=this.m_ActiveEdges:a=v.NextInAEL}else{if(this.IsIntermediate(a,r)&&n.ClipperBase.IsHorizontal(a.NextInLML)?(a=this.UpdateEdgeIntoAEL(a),a.OutIdx>=0&&this.AddOutPt(a,a.Bot),this.AddEdgeToSEL(a)):(a.Curr.X=n.Clipper.TopX(a,r),a.Curr.Y=r),n.use_xyz&&(a.Top.Y===r?a.Curr.Z=a.Top.Z:a.Bot.Y===r?a.Curr.Z=a.Bot.Z:a.Curr.Z=0),this.StrictlySimple){var v=a.PrevInAEL;if(a.OutIdx>=0&&a.WindDelta!==0&&v!==null&&v.OutIdx>=0&&v.Curr.X===a.Curr.X&&v.WindDelta!==0){var A=new n.IntPoint1(a.Curr);n.use_xyz&&this.SetZ(A,v,a);var D=this.AddOutPt(v,A),q=this.AddOutPt(a,A);this.AddJoin(D,q,A)}}a=a.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,a=this.m_ActiveEdges;a!==null;){if(this.IsIntermediate(a,r)){var D=null;a.OutIdx>=0&&(D=this.AddOutPt(a,a.Top)),a=this.UpdateEdgeIntoAEL(a);var v=a.PrevInAEL,Z=a.NextInAEL;if(v!==null&&v.Curr.X===a.Bot.X&&v.Curr.Y===a.Bot.Y&&D!==null&&v.OutIdx>=0&&v.Curr.Y===v.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,v.Curr,v.Top,this.m_UseFullRange)&&a.WindDelta!==0&&v.WindDelta!==0){var q=this.AddOutPt(ePrev2,a.Bot);this.AddJoin(D,q,a.Top)}else if(Z!==null&&Z.Curr.X===a.Bot.X&&Z.Curr.Y===a.Bot.Y&&D!==null&&Z.OutIdx>=0&&Z.Curr.Y===Z.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,Z.Curr,Z.Top,this.m_UseFullRange)&&a.WindDelta!==0&&Z.WindDelta!==0){var q=this.AddOutPt(Z,a.Bot);this.AddJoin(D,q,a.Top)}}a=a.NextInAEL}},n.Clipper.prototype.DoMaxima=function(r){var a=this.GetMaximaPairEx(r);if(a===null){r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r);return}for(var l=r.NextInAEL;l!==null&&l!==a;)this.IntersectEdges(r,l,r.Top),this.SwapPositionsInAEL(r,l),l=r.NextInAEL;r.OutIdx===-1&&a.OutIdx===-1?(this.DeleteFromAEL(r),this.DeleteFromAEL(a)):r.OutIdx>=0&&a.OutIdx>=0?(r.OutIdx>=0&&this.AddLocalMaxPoly(r,a,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(a)):n.use_lines&&r.WindDelta===0?(r.OutIdx>=0&&(this.AddOutPt(r,r.Top),r.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(r),a.OutIdx>=0&&(this.AddOutPt(a,r.Top),a.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(a)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(r){for(var a=0,l=r.length;a<l;a++)r[a].reverse()},n.Clipper.Orientation=function(r){return n.Clipper.Area(r)>=0},n.Clipper.prototype.PointCount=function(r){if(r===null)return 0;var a=0,l=r;do a++,l=l.Next;while(l!==r);return a},n.Clipper.prototype.BuildResult=function(r){n.Clear(r);for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a];if(p.Pts!==null){var v=p.Pts.Prev,A=this.PointCount(v);if(!(A<2)){for(var D=new Array(A),q=0;q<A;q++)D[q]=v.Pt,v=v.Prev;r.push(D)}}}},n.Clipper.prototype.BuildResult2=function(r){r.Clear();for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a],v=this.PointCount(p.Pts);if(!(p.IsOpen&&v<2||!p.IsOpen&&v<3)){this.FixHoleLinkage(p);var A=new n.PolyNode;r.m_AllPolys.push(A),p.PolyNode=A,A.m_polygon.length=v;for(var D=p.Pts.Prev,q=0;q<v;q++)A.m_polygon[q]=D.Pt,D=D.Prev}}for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,r.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):r.AddChild(p.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(r){for(var a=r.Pts,l=a.Prev;a!==l;)if(a=a.Next,n.IntPoint.op_Equality(a.Pt,a.Prev.Pt)){a===l&&(l=a.Prev);var p=a.Prev;p.Next=a.Next,a.Next.Prev=p,a=p}a===a.Prev&&(r.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(r){var a=null;r.BottomPt=null;for(var l=r.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(l.Prev===l||l.Prev===l.Next){r.Pts=null;return}if(n.IntPoint.op_Equality(l.Pt,l.Next.Pt)||n.IntPoint.op_Equality(l.Pt,l.Prev.Pt)||n.ClipperBase.SlopesEqual4(l.Prev.Pt,l.Pt,l.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(l.Prev.Pt,l.Pt,l.Next.Pt)))a=null,l.Prev.Next=l.Next,l.Next.Prev=l.Prev,l=l.Prev;else{if(l===a)break;a===null&&(a=l),l=l.Next}}r.Pts=l},n.Clipper.prototype.DupOutPt=function(r,a){var l=new n.OutPt;return l.Pt.X=r.Pt.X,l.Pt.Y=r.Pt.Y,n.use_xyz&&(l.Pt.Z=r.Pt.Z),l.Idx=r.Idx,a?(l.Next=r.Next,l.Prev=r,r.Next.Prev=l,r.Next=l):(l.Prev=r.Prev,l.Next=r,r.Prev.Next=l,r.Prev=l),l},n.Clipper.prototype.GetOverlap=function(r,a,l,p,v){return r<a?l<p?(v.Left=Math.max(r,l),v.Right=Math.min(a,p)):(v.Left=Math.max(r,p),v.Right=Math.min(a,l)):l<p?(v.Left=Math.max(a,l),v.Right=Math.min(r,p)):(v.Left=Math.max(a,p),v.Right=Math.min(r,l)),v.Left<v.Right},n.Clipper.prototype.JoinHorz=function(r,a,l,p,v,A){var D=r.Pt.X>a.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,q=l.Pt.X>p.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(D===q)return!1;if(D===n.Direction.dLeftToRight){for(;r.Next.Pt.X<=v.X&&r.Next.Pt.X>=r.Pt.X&&r.Next.Pt.Y===v.Y;)r=r.Next;A&&r.Pt.X!==v.X&&(r=r.Next),a=this.DupOutPt(r,!A),n.IntPoint.op_Inequality(a.Pt,v)&&(r=a,r.Pt.X=v.X,r.Pt.Y=v.Y,n.use_xyz&&(r.Pt.Z=v.Z),a=this.DupOutPt(r,!A))}else{for(;r.Next.Pt.X>=v.X&&r.Next.Pt.X<=r.Pt.X&&r.Next.Pt.Y===v.Y;)r=r.Next;!A&&r.Pt.X!==v.X&&(r=r.Next),a=this.DupOutPt(r,A),n.IntPoint.op_Inequality(a.Pt,v)&&(r=a,r.Pt.X=v.X,r.Pt.Y=v.Y,n.use_xyz&&(r.Pt.Z=v.Z),a=this.DupOutPt(r,A))}if(q===n.Direction.dLeftToRight){for(;l.Next.Pt.X<=v.X&&l.Next.Pt.X>=l.Pt.X&&l.Next.Pt.Y===v.Y;)l=l.Next;A&&l.Pt.X!==v.X&&(l=l.Next),p=this.DupOutPt(l,!A),n.IntPoint.op_Inequality(p.Pt,v)&&(l=p,l.Pt.X=v.X,l.Pt.Y=v.Y,n.use_xyz&&(l.Pt.Z=v.Z),p=this.DupOutPt(l,!A))}else{for(;l.Next.Pt.X>=v.X&&l.Next.Pt.X<=l.Pt.X&&l.Next.Pt.Y===v.Y;)l=l.Next;!A&&l.Pt.X!==v.X&&(l=l.Next),p=this.DupOutPt(l,A),n.IntPoint.op_Inequality(p.Pt,v)&&(l=p,l.Pt.X=v.X,l.Pt.Y=v.Y,n.use_xyz&&(l.Pt.Z=v.Z),p=this.DupOutPt(l,A))}return D===n.Direction.dLeftToRight===A?(r.Prev=l,l.Next=r,a.Next=p,p.Prev=a):(r.Next=l,l.Prev=r,a.Prev=p,p.Next=a),!0},n.Clipper.prototype.JoinPoints=function(r,a,l){var p=r.OutPt1,v=new n.OutPt,A=r.OutPt2,D=new n.OutPt,q=r.OutPt1.Pt.Y===r.OffPt.Y;if(q&&n.IntPoint.op_Equality(r.OffPt,r.OutPt1.Pt)&&n.IntPoint.op_Equality(r.OffPt,r.OutPt2.Pt)){if(a!==l)return!1;for(v=r.OutPt1.Next;v!==p&&n.IntPoint.op_Equality(v.Pt,r.OffPt);)v=v.Next;var Z=v.Pt.Y>r.OffPt.Y;for(D=r.OutPt2.Next;D!==A&&n.IntPoint.op_Equality(D.Pt,r.OffPt);)D=D.Next;var ct=D.Pt.Y>r.OffPt.Y;return Z===ct?!1:Z?(v=this.DupOutPt(p,!1),D=this.DupOutPt(A,!0),p.Prev=A,A.Next=p,v.Next=D,D.Prev=v,r.OutPt1=p,r.OutPt2=v,!0):(v=this.DupOutPt(p,!0),D=this.DupOutPt(A,!1),p.Next=A,A.Prev=p,v.Prev=D,D.Next=v,r.OutPt1=p,r.OutPt2=v,!0)}else if(q){for(v=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==v&&p.Prev!==A;)p=p.Prev;for(;v.Next.Pt.Y===v.Pt.Y&&v.Next!==p&&v.Next!==A;)v=v.Next;if(v.Next===p||v.Next===A)return!1;for(D=A;A.Prev.Pt.Y===A.Pt.Y&&A.Prev!==D&&A.Prev!==v;)A=A.Prev;for(;D.Next.Pt.Y===D.Pt.Y&&D.Next!==A&&D.Next!==p;)D=D.Next;if(D.Next===A||D.Next===p)return!1;var wt={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,v.Pt.X,A.Pt.X,D.Pt.X,wt))return!1;var bt=wt.Left,Ct=wt.Right,re=new n.IntPoint0,ve;return p.Pt.X>=bt&&p.Pt.X<=Ct?(re.X=p.Pt.X,re.Y=p.Pt.Y,n.use_xyz&&(re.Z=p.Pt.Z),ve=p.Pt.X>v.Pt.X):A.Pt.X>=bt&&A.Pt.X<=Ct?(re.X=A.Pt.X,re.Y=A.Pt.Y,n.use_xyz&&(re.Z=A.Pt.Z),ve=A.Pt.X>D.Pt.X):v.Pt.X>=bt&&v.Pt.X<=Ct?(re.X=v.Pt.X,re.Y=v.Pt.Y,n.use_xyz&&(re.Z=v.Pt.Z),ve=v.Pt.X>p.Pt.X):(re.X=D.Pt.X,re.Y=D.Pt.Y,n.use_xyz&&(re.Z=D.Pt.Z),ve=D.Pt.X>A.Pt.X),r.OutPt1=p,r.OutPt2=A,this.JoinHorz(p,v,A,D,re,ve)}else{for(v=p.Next;n.IntPoint.op_Equality(v.Pt,p.Pt)&&v!==p;)v=v.Next;var Ee=v.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,v.Pt,r.OffPt,this.m_UseFullRange);if(Ee){for(v=p.Prev;n.IntPoint.op_Equality(v.Pt,p.Pt)&&v!==p;)v=v.Prev;if(v.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,v.Pt,r.OffPt,this.m_UseFullRange))return!1}for(D=A.Next;n.IntPoint.op_Equality(D.Pt,A.Pt)&&D!==A;)D=D.Next;var Be=D.Pt.Y>A.Pt.Y||!n.ClipperBase.SlopesEqual4(A.Pt,D.Pt,r.OffPt,this.m_UseFullRange);if(Be){for(D=A.Prev;n.IntPoint.op_Equality(D.Pt,A.Pt)&&D!==A;)D=D.Prev;if(D.Pt.Y>A.Pt.Y||!n.ClipperBase.SlopesEqual4(A.Pt,D.Pt,r.OffPt,this.m_UseFullRange))return!1}return v===p||D===A||v===D||a===l&&Ee===Be?!1:Ee?(v=this.DupOutPt(p,!1),D=this.DupOutPt(A,!0),p.Prev=A,A.Next=p,v.Next=D,D.Prev=v,r.OutPt1=p,r.OutPt2=v,!0):(v=this.DupOutPt(p,!0),D=this.DupOutPt(A,!1),p.Next=A,A.Prev=p,v.Prev=D,D.Next=v,r.OutPt1=p,r.OutPt2=v,!0)}},n.Clipper.GetBounds=function(r){for(var a=0,l=r.length;a<l&&r[a].length===0;)a++;if(a===l)return new n.IntRect(0,0,0,0);var p=new n.IntRect;for(p.left=r[a][0].X,p.right=p.left,p.top=r[a][0].Y,p.bottom=p.top;a<l;a++)for(var v=0,A=r[a].length;v<A;v++)r[a][v].X<p.left?p.left=r[a][v].X:r[a][v].X>p.right&&(p.right=r[a][v].X),r[a][v].Y<p.top?p.top=r[a][v].Y:r[a][v].Y>p.bottom&&(p.bottom=r[a][v].Y);return p},n.Clipper.prototype.GetBounds2=function(r){var a=r,l=new n.IntRect;for(l.left=r.Pt.X,l.right=r.Pt.X,l.top=r.Pt.Y,l.bottom=r.Pt.Y,r=r.Next;r!==a;)r.Pt.X<l.left&&(l.left=r.Pt.X),r.Pt.X>l.right&&(l.right=r.Pt.X),r.Pt.Y<l.top&&(l.top=r.Pt.Y),r.Pt.Y>l.bottom&&(l.bottom=r.Pt.Y),r=r.Next;return l},n.Clipper.PointInPolygon=function(r,a){var l=0,p=a.length;if(p<3)return 0;for(var v=a[0],A=1;A<=p;++A){var D=A===p?a[0]:a[A];if(D.Y===r.Y&&(D.X===r.X||v.Y===r.Y&&D.X>r.X==v.X<r.X))return-1;if(v.Y<r.Y!=D.Y<r.Y){if(v.X>=r.X)if(D.X>r.X)l=1-l;else{var q=(v.X-r.X)*(D.Y-r.Y)-(D.X-r.X)*(v.Y-r.Y);if(q===0)return-1;q>0==D.Y>v.Y&&(l=1-l)}else if(D.X>r.X){var q=(v.X-r.X)*(D.Y-r.Y)-(D.X-r.X)*(v.Y-r.Y);if(q===0)return-1;q>0==D.Y>v.Y&&(l=1-l)}}v=D}return l},n.Clipper.prototype.PointInPolygon=function(r,a){var l=0,p=a,v=r.X,A=r.Y,D=a.Pt.X,q=a.Pt.Y;do{a=a.Next;var Z=a.Pt.X,ct=a.Pt.Y;if(ct===A&&(Z===v||q===A&&Z>v==D<v))return-1;if(q<A!=ct<A){if(D>=v)if(Z>v)l=1-l;else{var wt=(D-v)*(ct-A)-(Z-v)*(q-A);if(wt===0)return-1;wt>0==ct>q&&(l=1-l)}else if(Z>v){var wt=(D-v)*(ct-A)-(Z-v)*(q-A);if(wt===0)return-1;wt>0==ct>q&&(l=1-l)}}D=Z,q=ct}while(p!==a);return l},n.Clipper.prototype.Poly2ContainsPoly1=function(r,a){var l=r;do{var p=this.PointInPolygon(l.Pt,a);if(p>=0)return p>0;l=l.Next}while(l!==r);return!0},n.Clipper.prototype.FixupFirstLefts1=function(r,a){for(var l,p,v=0,A=this.m_PolyOuts.length;v<A;v++)l=this.m_PolyOuts[v],p=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&p===r&&this.Poly2ContainsPoly1(l.Pts,a.Pts)&&(l.FirstLeft=a)},n.Clipper.prototype.FixupFirstLefts2=function(r,a){for(var l=a.FirstLeft,p,v,A=0,D=this.m_PolyOuts.length;A<D;A++)p=this.m_PolyOuts[A],!(p.Pts===null||p===a||p===r)&&(v=n.Clipper.ParseFirstLeft(p.FirstLeft),!(v!==l&&v!==r&&v!==a)&&(this.Poly2ContainsPoly1(p.Pts,r.Pts)?p.FirstLeft=r:this.Poly2ContainsPoly1(p.Pts,a.Pts)?p.FirstLeft=a:(p.FirstLeft===r||p.FirstLeft===a)&&(p.FirstLeft=l)))},n.Clipper.prototype.FixupFirstLefts3=function(r,a){for(var l,p,v=0,A=this.m_PolyOuts.length;v<A;v++)l=this.m_PolyOuts[v],p=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&p===r&&(l.FirstLeft=a)},n.Clipper.ParseFirstLeft=function(r){for(;r!==null&&r.Pts===null;)r=r.FirstLeft;return r},n.Clipper.prototype.JoinCommonEdges=function(){for(var r=0,a=this.m_Joins.length;r<a;r++){var l=this.m_Joins[r],p=this.GetOutRec(l.OutPt1.Idx),v=this.GetOutRec(l.OutPt2.Idx);if(!(p.Pts===null||v.Pts===null)&&!(p.IsOpen||v.IsOpen)){var A;p===v?A=p:this.OutRec1RightOfOutRec2(p,v)?A=v:this.OutRec1RightOfOutRec2(v,p)?A=p:A=this.GetLowermostRec(p,v),this.JoinPoints(l,p,v)&&(p===v?(p.Pts=l.OutPt1,p.BottomPt=null,v=this.CreateOutRec(),v.Pts=l.OutPt2,this.UpdateOutPtIdxs(v),this.Poly2ContainsPoly1(v.Pts,p.Pts)?(v.IsHole=!p.IsHole,v.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(v,p),(v.IsHole^this.ReverseSolution)==this.Area$1(v)>0&&this.ReversePolyPtLinks(v.Pts)):this.Poly2ContainsPoly1(p.Pts,v.Pts)?(v.IsHole=p.IsHole,p.IsHole=!v.IsHole,v.FirstLeft=p.FirstLeft,p.FirstLeft=v,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,v),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(v.IsHole=p.IsHole,v.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,v))):(v.Pts=null,v.BottomPt=null,v.Idx=p.Idx,p.IsHole=A.IsHole,A===v&&(p.FirstLeft=v.FirstLeft),v.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(v,p)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(r){var a=r.Pts;do a.Idx=r.Idx,a=a.Prev;while(a!==r.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var r=0;r<this.m_PolyOuts.length;){var a=this.m_PolyOuts[r++],l=a.Pts;if(!(l===null||a.IsOpen))do{for(var p=l.Next;p!==a.Pts;){if(n.IntPoint.op_Equality(l.Pt,p.Pt)&&p.Next!==l&&p.Prev!==l){var v=l.Prev,A=p.Prev;l.Prev=A,A.Next=l,p.Prev=v,v.Next=p,a.Pts=l;var D=this.CreateOutRec();D.Pts=p,this.UpdateOutPtIdxs(D),this.Poly2ContainsPoly1(D.Pts,a.Pts)?(D.IsHole=!a.IsHole,D.FirstLeft=a,this.m_UsingPolyTree&&this.FixupFirstLefts2(D,a)):this.Poly2ContainsPoly1(a.Pts,D.Pts)?(D.IsHole=a.IsHole,a.IsHole=!D.IsHole,D.FirstLeft=a.FirstLeft,a.FirstLeft=D,this.m_UsingPolyTree&&this.FixupFirstLefts2(a,D)):(D.IsHole=a.IsHole,D.FirstLeft=a.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(a,D)),p=l}p=p.Next}l=l.Next}while(l!==a.Pts)}},n.Clipper.Area=function(r){if(!Array.isArray(r))return 0;var a=r.length;if(a<3)return 0;for(var l=0,p=0,v=a-1;p<a;++p)l+=(r[v].X+r[p].X)*(r[v].Y-r[p].Y),v=p;return-l*.5},n.Clipper.prototype.Area=function(r){var a=r;if(r===null)return 0;var l=0;do l=l+(r.Prev.Pt.X+r.Pt.X)*(r.Prev.Pt.Y-r.Pt.Y),r=r.Next;while(r!==a);return l*.5},n.Clipper.prototype.Area$1=function(r){return this.Area(r.Pts)},n.Clipper.SimplifyPolygon=function(r,a){var l=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPath(r,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,a,a),l},n.Clipper.SimplifyPolygons=function(r,a){typeof a>"u"&&(a=n.PolyFillType.pftEvenOdd);var l=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(r,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,a,a),l},n.Clipper.DistanceSqrd=function(r,a){var l=r.X-a.X,p=r.Y-a.Y;return l*l+p*p},n.Clipper.DistanceFromLineSqrd=function(r,a,l){var p=a.Y-l.Y,v=l.X-a.X,A=p*a.X+v*a.Y;return A=p*r.X+v*r.Y-A,A*A/(p*p+v*v)},n.Clipper.SlopesNearCollinear=function(r,a,l,p){return Math.abs(r.X-a.X)>Math.abs(r.Y-a.Y)?r.X>a.X==r.X<l.X?n.Clipper.DistanceFromLineSqrd(r,a,l)<p:a.X>r.X==a.X<l.X?n.Clipper.DistanceFromLineSqrd(a,r,l)<p:n.Clipper.DistanceFromLineSqrd(l,r,a)<p:r.Y>a.Y==r.Y<l.Y?n.Clipper.DistanceFromLineSqrd(r,a,l)<p:a.Y>r.Y==a.Y<l.Y?n.Clipper.DistanceFromLineSqrd(a,r,l)<p:n.Clipper.DistanceFromLineSqrd(l,r,a)<p},n.Clipper.PointsAreClose=function(r,a,l){var p=r.X-a.X,v=r.Y-a.Y;return p*p+v*v<=l},n.Clipper.ExcludeOp=function(r){var a=r.Prev;return a.Next=r.Next,r.Next.Prev=a,a.Idx=0,a},n.Clipper.CleanPolygon=function(r,a){typeof a>"u"&&(a=1.415);var l=r.length;if(l===0)return new Array;for(var p=new Array(l),v=0;v<l;++v)p[v]=new n.OutPt;for(var v=0;v<l;++v)p[v].Pt=r[v],p[v].Next=p[(v+1)%l],p[v].Next.Prev=p[v],p[v].Idx=0;for(var A=a*a,D=p[0];D.Idx===0&&D.Next!==D.Prev;)n.Clipper.PointsAreClose(D.Pt,D.Prev.Pt,A)?(D=n.Clipper.ExcludeOp(D),l--):n.Clipper.PointsAreClose(D.Prev.Pt,D.Next.Pt,A)?(n.Clipper.ExcludeOp(D.Next),D=n.Clipper.ExcludeOp(D),l-=2):n.Clipper.SlopesNearCollinear(D.Prev.Pt,D.Pt,D.Next.Pt,A)?(D=n.Clipper.ExcludeOp(D),l--):(D.Idx=1,D=D.Next);l<3&&(l=0);for(var q=new Array(l),v=0;v<l;++v)q[v]=new n.IntPoint1(D.Pt),D=D.Next;return p=null,q},n.Clipper.CleanPolygons=function(r,a){for(var l=new Array(r.length),p=0,v=r.length;p<v;p++)l[p]=n.Clipper.CleanPolygon(r[p],a);return l},n.Clipper.Minkowski=function(r,a,l,p){var v=p?1:0,A=r.length,D=a.length,q=new Array;if(l)for(var Z=0;Z<D;Z++){for(var ct=new Array(A),wt=0,bt=r.length,Ct=r[wt];wt<bt;wt++,Ct=r[wt])ct[wt]=new n.IntPoint2(a[Z].X+Ct.X,a[Z].Y+Ct.Y);q.push(ct)}else for(var Z=0;Z<D;Z++){for(var ct=new Array(A),wt=0,bt=r.length,Ct=r[wt];wt<bt;wt++,Ct=r[wt])ct[wt]=new n.IntPoint2(a[Z].X-Ct.X,a[Z].Y-Ct.Y);q.push(ct)}for(var re=new Array,Z=0;Z<D-1+v;Z++)for(var wt=0;wt<A;wt++){var ve=new Array;ve.push(q[Z%D][wt%A]),ve.push(q[(Z+1)%D][wt%A]),ve.push(q[(Z+1)%D][(wt+1)%A]),ve.push(q[Z%D][(wt+1)%A]),n.Clipper.Orientation(ve)||ve.reverse(),re.push(ve)}return re},n.Clipper.MinkowskiSum=function(r,a,l){if(a[0]instanceof Array){for(var v=a,D=new n.Paths,A=new n.Clipper,q=0;q<v.length;++q){var Z=n.Clipper.Minkowski(r,v[q],!0,l);if(A.AddPaths(Z,n.PolyType.ptSubject,!0),l){var p=n.Clipper.TranslatePath(v[q],r[0]);A.AddPath(p,n.PolyType.ptClip,!0)}}return A.Execute(n.ClipType.ctUnion,D,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),D}else{var p=a,v=n.Clipper.Minkowski(r,p,!0,l),A=new n.Clipper;return A.AddPaths(v,n.PolyType.ptSubject,!0),A.Execute(n.ClipType.ctUnion,v,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),v}},n.Clipper.TranslatePath=function(r,a){for(var l=new n.Path,p=0;p<r.length;p++)l.push(new n.IntPoint2(r[p].X+a.X,r[p].Y+a.Y));return l},n.Clipper.MinkowskiDiff=function(r,a){var l=n.Clipper.Minkowski(r,a,!1,!0),p=new n.Clipper;return p.AddPaths(l,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),l},n.Clipper.PolyTreeToPaths=function(r){var a=new Array;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntAny,a),a},n.Clipper.AddPolyNodeToPaths=function(r,a,l){var p=!0;switch(a){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:p=!r.IsOpen;break;default:break}r.m_polygon.length>0&&p&&l.push(r.m_polygon);for(var v=0,A=r.Childs(),D=A.length,q=A[v];v<D;v++,q=A[v])n.Clipper.AddPolyNodeToPaths(q,a,l)},n.Clipper.OpenPathsFromPolyTree=function(r){for(var a=new n.Paths,l=0,p=r.ChildCount();l<p;l++)r.Childs()[l].IsOpen&&a.push(r.Childs()[l].m_polygon);return a},n.Clipper.ClosedPathsFromPolyTree=function(r){var a=new n.Paths;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntClosed,a),a},pe(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(r,a){typeof r>"u"&&(r=2),typeof a>"u"&&(a=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=r,this.ArcTolerance=a,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(r,a,l){var p=r.length-1;if(!(p<0)){var v=new n.PolyNode;if(v.m_jointype=a,v.m_endtype=l,l===n.EndType.etClosedLine||l===n.EndType.etClosedPolygon)for(;p>0&&n.IntPoint.op_Equality(r[0],r[p]);)p--;v.m_polygon.push(r[0]);for(var A=0,D=0,q=1;q<=p;q++)n.IntPoint.op_Inequality(v.m_polygon[A],r[q])&&(A++,v.m_polygon.push(r[q]),(r[q].Y>v.m_polygon[D].Y||r[q].Y===v.m_polygon[D].Y&&r[q].X<v.m_polygon[D].X)&&(D=A));if(!(l===n.EndType.etClosedPolygon&&A<2)&&(this.m_polyNodes.AddChild(v),l===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D);else{var Z=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(v.m_polygon[D].Y>Z.Y||v.m_polygon[D].Y===Z.Y&&v.m_polygon[D].X<Z.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D))}}},n.ClipperOffset.prototype.AddPaths=function(r,a,l){for(var p=0,v=r.length;p<v;p++)this.AddPath(r[p],a,l)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var r=0;r<this.m_polyNodes.ChildCount();r++){var a=this.m_polyNodes.Childs()[r];(a.m_endtype===n.EndType.etClosedPolygon||a.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(a.m_polygon))&&a.m_polygon.reverse()}else for(var r=0;r<this.m_polyNodes.ChildCount();r++){var a=this.m_polyNodes.Childs()[r];a.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(a.m_polygon)&&a.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(r,a){var l=a.X-r.X,p=a.Y-r.Y;if(l===0&&p===0)return new n.DoublePoint2(0,0);var v=1/Math.sqrt(l*l+p*p);return l*=v,p*=v,new n.DoublePoint2(p,-l)},n.ClipperOffset.prototype.DoOffset=function(r){if(this.m_destPolys=new Array,this.m_delta=r,n.ClipperBase.near_zero(r)){for(var a=0;a<this.m_polyNodes.ChildCount();a++){var l=this.m_polyNodes.Childs()[a];l.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(l.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(r)*n.ClipperOffset.def_arc_tolerance?p=Math.abs(r)*n.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var v=3.14159265358979/Math.acos(1-p/Math.abs(r));this.m_sin=Math.sin(n.ClipperOffset.two_pi/v),this.m_cos=Math.cos(n.ClipperOffset.two_pi/v),this.m_StepsPerRad=v/n.ClipperOffset.two_pi,r<0&&(this.m_sin=-this.m_sin);for(var a=0;a<this.m_polyNodes.ChildCount();a++){var l=this.m_polyNodes.Childs()[a];this.m_srcPoly=l.m_polygon;var A=this.m_srcPoly.length;if(!(A===0||r<=0&&(A<3||l.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,A===1){if(l.m_jointype===n.JoinType.jtRound)for(var D=1,q=0,Z=1;Z<=v;Z++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+q*r)));var ct=D;D=D*this.m_cos-this.m_sin*q,q=ct*this.m_sin+q*this.m_cos}else for(var D=-1,q=-1,Z=0;Z<4;++Z)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+q*r))),D<0?D=1:q<0?q=1:D=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var Z=0;Z<A-1;Z++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[Z],this.m_srcPoly[Z+1]));if(l.m_endtype===n.EndType.etClosedLine||l.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[A-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[A-2])),l.m_endtype===n.EndType.etClosedPolygon){for(var wt=A-1,Z=0;Z<A;Z++)wt=this.OffsetPoint(Z,wt,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(l.m_endtype===n.EndType.etClosedLine){for(var wt=A-1,Z=0;Z<A;Z++)wt=this.OffsetPoint(Z,wt,l.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var bt=this.m_normals[A-1],Z=A-1;Z>0;Z--)this.m_normals[Z]=new n.DoublePoint2(-this.m_normals[Z-1].X,-this.m_normals[Z-1].Y);this.m_normals[0]=new n.DoublePoint2(-bt.X,-bt.Y),wt=0;for(var Z=A-1;Z>=0;Z--)wt=this.OffsetPoint(Z,wt,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var wt=0,Z=1;Z<A-1;++Z)wt=this.OffsetPoint(Z,wt,l.m_jointype);var Ct;if(l.m_endtype===n.EndType.etOpenButt){var Z=A-1;Ct=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[Z].X+this.m_normals[Z].X*r),n.ClipperOffset.Round(this.m_srcPoly[Z].Y+this.m_normals[Z].Y*r)),this.m_destPoly.push(Ct),Ct=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[Z].X-this.m_normals[Z].X*r),n.ClipperOffset.Round(this.m_srcPoly[Z].Y-this.m_normals[Z].Y*r)),this.m_destPoly.push(Ct)}else{var Z=A-1;wt=A-2,this.m_sinA=0,this.m_normals[Z]=new n.DoublePoint2(-this.m_normals[Z].X,-this.m_normals[Z].Y),l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(Z,wt):this.DoRound(Z,wt)}for(var Z=A-1;Z>0;Z--)this.m_normals[Z]=new n.DoublePoint2(-this.m_normals[Z-1].X,-this.m_normals[Z-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),wt=A-1;for(var Z=wt-1;Z>0;--Z)wt=this.OffsetPoint(Z,wt,l.m_jointype);l.m_endtype===n.EndType.etOpenButt?(Ct=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*r)),this.m_destPoly.push(Ct),Ct=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*r)),this.m_destPoly.push(Ct)):(wt=1,this.m_sinA=0,l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var r=arguments,a=r[0]instanceof n.PolyTree;if(a){var l=r[0],p=r[1];l.Clear(),this.FixOrientations(),this.DoOffset(p);var v=new n.Clipper(0);if(v.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)v.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var A=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;if(D.push(new n.IntPoint2(A.left-10,A.bottom+10)),D.push(new n.IntPoint2(A.right+10,A.bottom+10)),D.push(new n.IntPoint2(A.right+10,A.top-10)),D.push(new n.IntPoint2(A.left-10,A.top-10)),v.AddPath(D,n.PolyType.ptSubject,!0),v.ReverseSolution=!0,v.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.ChildCount()===1&&l.Childs()[0].ChildCount()>0){var q=l.Childs()[0];l.Childs()[0]=q.Childs()[0],l.Childs()[0].m_Parent=l;for(var Z=1;Z<q.ChildCount();Z++)l.AddChild(q.Childs()[Z])}else l.Clear()}}else{var l=r[0],p=r[1];n.Clear(l),this.FixOrientations(),this.DoOffset(p);var v=new n.Clipper(0);if(v.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)v.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var A=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;D.push(new n.IntPoint2(A.left-10,A.bottom+10)),D.push(new n.IntPoint2(A.right+10,A.bottom+10)),D.push(new n.IntPoint2(A.right+10,A.top-10)),D.push(new n.IntPoint2(A.left-10,A.top-10)),v.AddPath(D,n.PolyType.ptSubject,!0),v.ReverseSolution=!0,v.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.length>0&&l.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(r,a,l){if(this.m_sinA=this.m_normals[a].X*this.m_normals[r].Y-this.m_normals[r].X*this.m_normals[a].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[a].X*this.m_normals[r].X+this.m_normals[r].Y*this.m_normals[a].Y;if(p>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[a].Y*this.m_delta))),a}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[a].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[r])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)));else switch(l){case n.JoinType.jtMiter:{var v=1+(this.m_normals[r].X*this.m_normals[a].X+this.m_normals[r].Y*this.m_normals[a].Y);v>=this.m_miterLim?this.DoMiter(r,a,v):this.DoSquare(r,a);break}case n.JoinType.jtSquare:this.DoSquare(r,a);break;case n.JoinType.jtRound:this.DoRound(r,a);break}return a=r,a},n.ClipperOffset.prototype.DoSquare=function(r,a){var l=Math.tan(Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[r].X+this.m_normals[a].Y*this.m_normals[r].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[a].X-this.m_normals[a].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[a].Y+this.m_normals[a].X*l)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[r].X+this.m_normals[r].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[r].Y-this.m_normals[r].X*l))))},n.ClipperOffset.prototype.DoMiter=function(r,a,l){var p=this.m_delta/l;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+(this.m_normals[a].X+this.m_normals[r].X)*p),n.ClipperOffset.Round(this.m_srcPoly[r].Y+(this.m_normals[a].Y+this.m_normals[r].Y)*p)))},n.ClipperOffset.prototype.DoRound=function(r,a){for(var l=Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[r].X+this.m_normals[a].Y*this.m_normals[r].Y),p=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(l))),1),v=this.m_normals[a].X,A=this.m_normals[a].Y,D,q=0;q<p;++q)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+v*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+A*this.m_delta))),D=v,v=v*this.m_cos-this.m_sin*A,A=D*this.m_sin+A*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)))},n.Error=function(r){try{throw new Error(r)}catch(a){alert(a.message)}},n.JS={},n.JS.AreaOfPolygon=function(r,a){return a||(a=1),n.Clipper.Area(r)/(a*a)},n.JS.AreaOfPolygons=function(r,a){a||(a=1);for(var l=0,p=0;p<r.length;p++)l+=n.Clipper.Area(r[p]);return l/(a*a)},n.JS.BoundsOfPath=function(r,a){return n.JS.BoundsOfPaths([r],a)},n.JS.BoundsOfPaths=function(r,a){a||(a=1);var l=n.Clipper.GetBounds(r);return l.left/=a,l.bottom/=a,l.right/=a,l.top/=a,l},n.JS.Clean=function(p,a){if(!(p instanceof Array))return[];var l=p[0]instanceof Array,p=n.JS.Clone(p);if(typeof a!="number"||a===null)return n.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||a<0)return p;l||(p=[p]);for(var v=p.length,A,D,q,Z,ct,wt,bt,Ct=[],re=0;re<v;re++)if(D=p[re],A=D.length,A!==0){if(A<3){q=D,Ct.push(q);continue}for(q=D,Z=a*a,ct=D[0],wt=1,bt=1;bt<A;bt++)(D[bt].X-ct.X)*(D[bt].X-ct.X)+(D[bt].Y-ct.Y)*(D[bt].Y-ct.Y)<=Z||(q[wt]=D[bt],ct=D[bt],wt++);ct=D[wt-1],(D[0].X-ct.X)*(D[0].X-ct.X)+(D[0].Y-ct.Y)*(D[0].Y-ct.Y)<=Z&&wt--,wt<A&&q.splice(wt,A-wt),q.length&&Ct.push(q)}return!l&&Ct.length?Ct=Ct[0]:!l&&Ct.length===0?Ct=[]:l&&Ct.length===0&&(Ct=[[]]),Ct},n.JS.Clone=function(r){if(!(r instanceof Array))return[];if(r.length===0)return[];if(r.length===1&&r[0].length===0)return[[]];var a=r[0]instanceof Array;a||(r=[r]);var l=r.length,p,v,A,D,q=new Array(l);for(v=0;v<l;v++){for(p=r[v].length,D=new Array(p),A=0;A<p;A++)D[A]={X:r[v][A].X,Y:r[v][A].Y};q[v]=D}return a||(q=q[0]),q},n.JS.Lighten=function(r,a){if(!(r instanceof Array))return[];if(typeof a!="number"||a===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(r);if(r.length===0||r.length===1&&r[0].length===0||a<0)return n.JS.Clone(r);var l=r[0]instanceof Array;l||(r=[r]);var p,v,A,D,q,Z,ct,wt,bt,Ct,re,ve,Ee,Be,pn,Hn,Fi,Lr=r.length,Uo=a*a,wi=[];for(p=0;p<Lr;p++)if(A=r[p],Z=A.length,Z!==0){for(D=0;D<1e6;D++){for(q=[],Z=A.length,A[Z-1].X!==A[0].X||A[Z-1].Y!==A[0].Y?(ve=1,A.push({X:A[0].X,Y:A[0].Y}),Z=A.length):ve=0,re=[],v=0;v<Z-2;v++)ct=A[v],bt=A[v+1],wt=A[v+2],Hn=ct.X,Fi=ct.Y,Ee=wt.X-Hn,Be=wt.Y-Fi,(Ee!==0||Be!==0)&&(pn=((bt.X-Hn)*Ee+(bt.Y-Fi)*Be)/(Ee*Ee+Be*Be),pn>1?(Hn=wt.X,Fi=wt.Y):pn>0&&(Hn+=Ee*pn,Fi+=Be*pn)),Ee=bt.X-Hn,Be=bt.Y-Fi,Ct=Ee*Ee+Be*Be,Ct<=Uo&&(re[v+1]=1,v++);for(q.push({X:A[0].X,Y:A[0].Y}),v=1;v<Z-1;v++)re[v]||q.push({X:A[v].X,Y:A[v].Y});if(q.push({X:A[Z-1].X,Y:A[Z-1].Y}),ve&&A.pop(),re.length)A=q;else break}Z=q.length,q[Z-1].X===q[0].X&&q[Z-1].Y===q[0].Y&&q.pop(),q.length>2&&wi.push(q)}return l||(wi=wi[0]),typeof wi>"u"&&(wi=[]),wi},n.JS.PerimeterOfPath=function(r,a,l){if(typeof r>"u")return 0;var p=Math.sqrt,v=0,A,D,q=0,Z=0,ct=0,wt=0,bt=r.length;if(bt<2)return 0;for(a&&(r[bt]=r[0],bt++);--bt;)A=r[bt],q=A.X,Z=A.Y,D=r[bt-1],ct=D.X,wt=D.Y,v+=p((q-ct)*(q-ct)+(Z-wt)*(Z-wt));return a&&r.pop(),v/l},n.JS.PerimeterOfPaths=function(r,a,l){l||(l=1);for(var p=0,v=0;v<r.length;v++)p+=n.JS.PerimeterOfPath(r[v],a,l);return p},n.JS.ScaleDownPath=function(r,a){var l,p;for(a||(a=1),l=r.length;l--;)p=r[l],p.X=p.X/a,p.Y=p.Y/a},n.JS.ScaleDownPaths=function(r,a){var l,p,v;for(a||(a=1),l=r.length;l--;)for(p=r[l].length;p--;)v=r[l][p],v.X=v.X/a,v.Y=v.Y/a},n.JS.ScaleUpPath=function(r,a){var l,p,v=Math.round;for(a||(a=1),l=r.length;l--;)p=r[l],p.X=v(p.X*a),p.Y=v(p.Y*a)},n.JS.ScaleUpPaths=function(r,a){var l,p,v,A=Math.round;for(a||(a=1),l=r.length;l--;)for(p=r[l].length;p--;)v=r[l][p],v.X=A(v.X*a),v.Y=A(v.Y*a)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(r,a){var l=new n.ExPolygon;l.outer=r.Contour();var p=r.Childs(),v=p.length;l.holes=new Array(v);var A,D,q,Z,ct,wt;for(q=0;q<v;q++)for(A=p[q],l.holes[q]=A.Contour(),Z=0,ct=A.Childs(),wt=ct.length;Z<wt;Z++)D=ct[Z],n.JS.AddOuterPolyNodeToExPolygons(D,a);a.push(l)},n.JS.ExPolygonsToPaths=function(r){var a,l,p,v,A=new n.Paths;for(a=0,p=r.length;a<p;a++)for(A.push(r[a].outer),l=0,v=r[a].holes.length;l<v;l++)A.push(r[a].holes[l]);return A},n.JS.PolyTreeToExPolygons=function(r){var a=new n.ExPolygons,l,p,v,A;for(p=0,v=r.Childs(),A=v.length;p<A;p++)l=v[p],n.JS.AddOuterPolyNodeToExPolygons(l,a);return a}})()});function Xo(n,t,e,i=Qe.default.PolyFillType.pftNonZero){let s=new Qe.default.Clipper;s.AddPaths(Go(t),Qe.default.PolyType.ptSubject,!0),e&&s.AddPaths(Go(e),Qe.default.PolyType.ptClip,!0);let o=new Qe.default.Paths;return s.Execute(n,o,i,i),vc(o)}function Tu(n,t=256){let e=n;for(;e.length>t;){let i=[];for(let s=0;s<e.length;s+=t)i.push(Bs(e.slice(s,s+t)));if(e=i.flat(),i.length===1)return e}return Bs(e)}function an(n,t){if(!n.length)return[];let e=new Qe.default.ClipperOffset(2,Nm);e.AddPaths(Go(n),Qe.default.JoinType.jtRound,Qe.default.EndType.etClosedPolygon);let i=new Qe.default.Paths;return e.Execute(i,t*Fr),vc(i)}function Gn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function ki(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let o of n)for(let[c,u]of o)c<t&&(t=c),c>i&&(i=c),u<e&&(e=u),u>s&&(s=u);return{minX:t,minY:e,maxX:i,maxY:s}}function Br(n){if(!n.length)return[];let t=new Qe.default.Clipper;t.AddPaths(Go(n),Qe.default.PolyType.ptSubject,!0);let e=new Qe.default.PolyTree;t.Execute(Qe.default.ClipType.ctUnion,e,Qe.default.PolyFillType.pftNonZero,Qe.default.PolyFillType.pftNonZero);let i=[],s=o=>{for(let c of o.Childs()){if(c.IsHole()){s(c);continue}let u=c.Childs().map(f=>f.Contour());i.push(vc([c.Contour(),...u]));for(let f of c.Childs())s(f)}};return s(e),i}function zs([n,t],e){let i=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){let[c,u]=e[s],[f,d]=e[o];u>t!=d>t&&n<(f-c)*(t-u)/(d-u)+c&&(i=!i)}return i}function di(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(Gn(e))>t)}function Dm(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let u=1;u<n.length;u++){let f=(n[u][0]-n[0][0])**2+(n[u][1]-n[0][1])**2;f>i&&(i=f,e=u)}let s=u=>{let f=new Uint8Array(u.length);f[0]=f[u.length-1]=1;let d=[[0,u.length-1]];for(;d.length;){let[_,S]=d.pop(),[g,b]=u[_],[E,C]=u[S],M=Math.hypot(E-g,C-b)||1e-12,x=-1,U=t;for(let X=_+1;X<S;X++){let N=Math.abs((E-g)*(b-u[X][1])-(g-u[X][0])*(C-b))/M;N>U&&(U=N,x=X)}x>0&&(f[x]=1,d.push([_,x],[x,S]))}return u.filter((_,S)=>f[S])},o=s(n.slice(0,e+1)),c=s([...n.slice(e),n[0]]);return[...o,...c.slice(1,-1)]}var Qe,Fr,Nm,Go,vc,Eu,Bs,Ur,ks,Jn,Vs,Wo=Pn(()=>{Qe=du(wu(),1),Fr=1e3,Nm=.01*Fr,Go=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*Fr),Y:Math.round(i*Fr)}))),vc=n=>n.map(t=>t.map(e=>[e.X/Fr,e.Y/Fr]));Eu=n=>Xo(Qe.default.ClipType.ctUnion,n,null,Qe.default.PolyFillType.pftEvenOdd),Bs=n=>Xo(Qe.default.ClipType.ctUnion,n,null);Ur=(n,t)=>Xo(Qe.default.ClipType.ctDifference,n,t),ks=(n,t)=>Xo(Qe.default.ClipType.ctIntersection,n,t);Jn=n=>n.reduce((t,e)=>t+Gn(e),0);Vs=(n,t)=>n.map(e=>Dm(e,t)).filter(e=>e.length>=3)});function Au(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return Om.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t||"flat"}function hr(n,t){return t==="toolId"?n.toolId??n.id:n.toolNumber??n.toolId??n.id}function Pu(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${Au(t)}`,kind:Au(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2}))}function Cu(n,t,e,i={}){let s=cr[t]||cr.mdf,o=Xn[e]||Xn.balanced,c=i.maxRpm||24e3,u=i.minRpm||0,f=Math.round(Math.min(c,Math.max(u,s.rpm))),d=Math.min(s.maxChip,s.chip*n.diameter),_=Math.min(i.maxFeed||4e3,4e3),S=Math.round(Math.min(_,Math.max(150,f*n.flutes*d*o.feed)));return{rpm:f,feed:S,plunge:Math.round(Math.max(60,S*.3)),stepdown:Math.max(.05,n.diameter*s.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,s.stepover*o.stepover)),rampAngle:s.ramp}}var cr,Xn,Om,Hs=Pn(()=>{cr={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},Xn={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},Om=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"])});function Sc(n){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:2,extraTop:1,width:n.size[0]+4,depth:n.size[1]+4,thickness:n.size[2]+1},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,height:3},throughDepth:.3,disabled:{},toolOverride:{}}}function Yo(n,t){let[e,i,s]=n.size,o=t.stock,c=o.fit?e+2*o.margin:Math.max(e,o.width),u=o.fit?i+2*o.margin:Math.max(i,o.depth),f=o.fit?s+o.extraTop:Math.max(s,o.thickness);return{minX:(e-c)/2,minY:(i-u)/2,maxX:(e+c)/2,maxY:(i+u)/2,bottom:0,top:f,width:c,depth:u,thickness:f}}function Mc(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,s=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(s=n.minY),e.includes("back")&&(s=n.maxY),{x:i,y:s,z:t.z==="bed"?n.bottom:n.top}}function Fm(n){let t=n.positions,e=n.indices,i=[];for(let s=0;s<e.length/3;s++){if(gc(n,s)[2]>-.001)continue;let c=[e[s*3]*3,e[s*3+1]*3,e[s*3+2]*3],u=c.map(f=>[t[f],t[f+1]]);Math.abs(Gn(u))<1e-6||i.push({loop:Gn(u)>0?u:u.reverse(),maxZ:Math.max(...c.map(f=>t[f+2]))})}return i}function Bm(n){if(n.length!==1)return null;let t=n[0];if(t.length<12)return null;let e=ki([t]),i=(e.minX+e.maxX)/2,s=(e.minY+e.maxY)/2,o=t.map(([u,f])=>Math.hypot(u-i,f-s)),c=o.reduce((u,f)=>u+f,0)/o.length;return o.every(u=>Math.abs(u-c)<Math.max(.03,c*.01))?{x:i,y:s,d:2*c}:null}function Lu(n,t,e,i={}){let s=Or(n),o=Yo(s,e),c=Xn[e.finish]||Xn.balanced,u=[];s.squareEdges&&u.push({kind:"edges",text:"Chamfers or rounded edges face down on this side, so they are left square."}),s.undercut&&u.push({kind:"undercut",text:"Some faces point down, so they can\u2019t be reached from the top. Turn the part or cut it in a second setup."}),s.sloped&&u.push({kind:"sloped",text:"Sloped or curved faces (chamfers, fillets) aren\u2019t cut in 3D yet, so they are left square."});let f=t.filter(z=>z.kind==="flat").sort((z,tt)=>tt.diameter-z.diameter),d=t.filter(z=>z.kind==="drill"),_=t.filter(z=>z.kind==="surfacing").sort((z,tt)=>tt.diameter-z.diameter),S=new Map,g=z=>(z&&S.set(z.id,(S.get(z.id)||0)+1),z),b=e.material==="aluminum"?8:12.8,E=s.undercutArea>0?Fm(n):[],C=new Map,M=z=>{if(C.has(z))return C.get(z);let tt=Eu(Mu(n,z+kr)),H=E.filter(at=>at.maxZ>z+kr).map(at=>at.loop),_t=H.length?an(an(Bs([...tt,...Tu(H)]),.002),-.002):tt;return C.set(z,_t),_t},x=M(0),U=Bs(Br(x).map(z=>z[0])),X=[],N=1,O=z=>(z.id=z.id||`op${N++}`,X.push(z),z);function F(z,tt,H){let _t=f.filter(At=>At.diameter<=b&&Gs(At,tt)&&an(z,-(At.diameter/2+H)).length);if(!_t.length)return null;let at=_t.map(At=>({t:At,c:km(z,At.diameter/2)})),pt=at.find(At=>At.c>=.85)||at.reduce((At,Ot)=>Ot.c>At.c?Ot:At);return(at.find(At=>S.has(At.t.id)&&At.c>=Math.min(.85,pt.c*.98))||pt).t}function Y(z,tt,H){let _t=di(Ur(z,xc(z,tt.diameter/2)),zi);if(Jn(_t)<zi)return null;let at=f.filter(At=>At.diameter<tt.diameter-1e-6&&Gs(At,H));if(!at.length)return{tool:null,left:_t};let pt=Jn(_t);return{tool:at.find(At=>Jn(di(Ur(z,xc(z,At.diameter/2)),zi))<pt*.25)||at[at.length-1],left:_t}}let P=z=>Cu(z,e.material,e.finish,i);if(o.top>s.top+kr){let z=_[0]||f[0];z&&O({id:"face",kind:"face",label:"Flatten the top",tool:g(z),zTop:o.top,zBottom:s.top,region:Iu(o),detail:`${Cn(o.top-s.top)} mm off the top`})}let V=[s.top,...s.floors.filter(z=>z<s.top-kr&&z>kr),0],J=[],K=(z,tt)=>{let H=Jn(z),_t=Jn(tt);if(Math.abs(H-_t)>Math.max(zi,H*.005))return!1;let at=ki(z),pt=ki(tt);return Math.abs(at.minX-pt.minX)<.01&&Math.abs(at.maxX-pt.maxX)<.01&&Math.abs(at.minY-pt.minY)<.01&&Math.abs(at.maxY-pt.maxY)<.01};for(let z=1;z<V.length;z++){let tt=V[z-1],H=V[z],_t=Ur(Iu(o),M(H));for(let at of Br(_t)){if(Jn(at)<zi||!an(at,-.05).length)continue;let pt=ki([at[0]]),gt=pt.minX<=o.minX+.001||pt.maxX>=o.maxX-.001||pt.minY<=o.minY+.001||pt.maxY>=o.maxY-.001,At=null;if(gt&&(H===0||(At=di(ks(at,U),zi),Jn(At)<zi)))continue;let Ot=gt?At:at,ue=J.find(fe=>fe.zFloor===tt&&fe.outer===gt&&K(fe.shape,Ot));ue?(ue.zFloor=H,ue.region=at):J.push({outer:gt,region:at,over:At,shape:Ot,zTop:tt,zFloor:H})}}let it=new Map;for(let{outer:z,region:tt,over:H,zTop:_t,zFloor:at}of J){let pt=at===0,gt=pt?-e.throughDepth:at,At=_t-gt;{if(z){let Xt=F(ks(tt,an(H,13)),At,c.allowance);if(!Xt){u.push({kind:"notool",text:`A step ${Cn(_t-at)} mm deep has no end mill that fits.`});continue}let oe=ks(tt,an(H,Xt.diameter+.5));O({kind:"step",label:"Cut the step",tool:g(Xt),zTop:_t,zBottom:gt,region:oe,walls:tt,detail:`${Cn(_t-at)} mm deep`});continue}let Ot=Bm(tt);if(Ot){let Xt=`${Cn(Ot.d)}|${Cn(_t)}|${Cn(gt)}`;it.has(Xt)||it.set(Xt,{d:Ot.d,zTop:_t,zBottom:gt,through:pt,centers:[],regions:[]}),it.get(Xt).centers.push(Ot),it.get(Xt).regions.push(tt);continue}let ue=ki([tt[0]]),fe=F(tt,At,c.allowance),be=`${Cn(ue.maxX-ue.minX)} \xD7 ${Cn(ue.maxY-ue.minY)} mm \xB7 ${pt?"through":`${Cn(_t-at)} mm deep`}`;if(!fe){u.push({kind:"notool",text:`No end mill fits the pocket ${be}.`});continue}let St=O({kind:"pocket",label:pt?"Cut the opening":"Clear the pocket",tool:g(fe),zTop:_t,zBottom:gt,region:tt,detail:be}),Et=Y(tt,fe,At);Et&&Et.tool?O({kind:"corners",label:"Clean the corners",tool:g(Et.tool),zTop:_t,zBottom:gt,region:tt,after:St.id,detail:`Corners too tight for ${fe.name}`}):Et&&u.push({kind:"corners",text:`Pocket corners stay rounded to ${Cn(fe.diameter/2)} mm: no smaller end mill in your library.`})}}for(let z of it.values()){let tt=z.centers.length,H=z.zTop-z.zBottom,_t=`\xD8${Cn(z.d)} mm ${z.through?"through":`${Cn(z.zTop-z.zBottom)} mm deep`}`,at=d.find(At=>Um(At.diameter,z.d)&&Gs(At,H));if(at){O({kind:"drill",label:tt>1?`Drill ${tt} holes`:"Drill the hole",tool:g(at),zTop:z.zTop,zBottom:z.zBottom,centers:z.centers,detail:_t});continue}let pt=z.regions.flat().length?z.regions.flatMap(At=>At):[],gt=F(pt,H,0)||null;if(!gt||gt.diameter>z.d-.4){let At=f.find(Ot=>Ot.diameter<=z.d-.4&&Gs(Ot,H));if(!At){u.push({kind:"notool",text:`No drill or end mill fits the ${_t} hole${tt>1?"s":""}.`});continue}O({kind:"hole",label:tt>1?`Cut ${tt} holes`:"Cut the hole",tool:g(At),zTop:z.zTop,zBottom:z.zBottom,region:pt,centers:z.centers,detail:`${_t} \xB7 spiral`});continue}O({kind:"hole",label:tt>1?`Cut ${tt} holes`:"Cut the hole",tool:g(gt),zTop:z.zTop,zBottom:z.zBottom,region:pt,centers:z.centers,detail:`${_t} \xB7 spiral`})}if(U.length){let z=s.top+e.throughDepth,tt=f.filter(at=>Gs(at,z)&&at.diameter<=b),H=tt.find(at=>S.has(at.id))||tt.slice().sort((at,pt)=>Math.abs(at.diameter-6.35)-Math.abs(pt.diameter-6.35))[0],_t=e.tabs.enabled?`${e.tabs.count} tabs`:"no tabs";H?O({id:"cutout",kind:"cutout",label:"Cut out the part",tool:g(H),zTop:s.top,zBottom:-e.throughDepth,region:U,detail:`${Cn(s.top)} mm \xB7 ${_t}`}):u.push({kind:"notool",text:`No end mill is long enough to cut out the part (${Cn(z)} mm).`})}let ht=[],Q=new Map;for(let z of X){if(z.kind!=="pocket"&&z.kind!=="corners"){ht.push(z);continue}let tt=z.after&&Q.has(z.after)?Q.get(z.after):z.after,H=ht.find(_t=>_t.kind===z.kind&&_t.detail===z.detail&&_t.zTop===z.zTop&&_t.zBottom===z.zBottom&&_t.tool.id===z.tool.id&&(_t.after||null)===(tt||null));H?(H.region=[...H.region,...z.region],H.count=(H.count||1)+1,Q.set(z.id,H.id)):ht.push({...z,after:tt})}for(let z of ht)z.count>1&&(z.kind==="pocket"&&(z.label=z.label==="Cut the opening"?`Cut ${z.count} openings`:`Clear ${z.count} pockets`),z.kind==="corners"&&(z.label=`Clean the corners of ${z.count} pockets`));X.length=0,X.push(...ht);for(let z of X){let tt=e.toolOverride?.[z.id];if(tt){let H=t.find(_t=>_t.id===tt);H&&(z.tool=H)}z.enabled=!e.disabled?.[z.id],z.feeds=P(z.tool)}return{analysis:s,stock:o,zero:Mc(o,e.zero),ops:zm(X),warnings:u,job:e}}function zm(n){let t=n.filter(d=>d.kind==="face"),e=n.filter(d=>d.kind==="cutout"),i=n.filter(d=>d.kind!=="face"&&d.kind!=="cutout"),s=d=>d.region||(d.centers||[]).map(_=>Vm(_)),o=new Map(i.map(d=>[d,i.filter(_=>_!==d&&(d.after===_.id||_.zTop>d.zTop+kr&&Jn(ks(s(d),s(_)))>zi))])),c=new Set,u=[...t],f=t.length?t[t.length-1].tool:null;for(;c.size<i.length;){let d=i.filter(S=>!c.has(S)&&o.get(S).every(g=>c.has(g))),_=d.find(S=>f&&S.tool.id===f.id)||d[0];c.add(_),u.push(_),f=_.tool}return[...u,...e]}function Vm(n,t=32){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}function qo(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var kr,zi,Ru,Iu,Um,xc,km,Gs,Cn,Nu=Pn(()=>{_c();Wo();Hs();kr=.01,zi=.05,Ru=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"];Iu=n=>[[[n.minX,n.minY],[n.maxX,n.minY],[n.maxX,n.maxY],[n.minX,n.maxY]]],Um=(n,t)=>Math.abs(n-t)<.05;xc=(n,t)=>an(an(n,-t),t),km=(n,t)=>{let e=Jn(n);return e>0?Jn(xc(n,t))/e:0},Gs=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,Cn=n=>(Math.round(n*10)/10).toString()});function zr(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(s,o)=>n-(o+1)*(n-t)/i)}function Xs(n,t,e,i,s,o,c){let u=[...t.breaks(e,i),i];if(c)for(let d of c.edges(e,i))u.push(d);u.sort((d,_)=>d-_);let f=e;for(let d of u){if(d-f<1e-9)continue;let _=(f+d)/2,S=c&&c.inside(_)?c.top:-1/0,[g,b]=t.at(f),E=Math.max(s(f),S);n.at&&Math.abs(n.at.z-E)>1e-6&&n.feed(g,b,E,o);let[C,M]=t.at(d);n.feed(C,M,Math.max(s(d),S),o),f=d}}function Du(n,t,e,i,s,o,c){let u=Math.max(0,(i-s)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||u<1e-6){let[d,_]=t.at(e);return n.feed(d,_,c&&c.inside(e)?Math.max(s,c.top):s,o.plunge),Xs(n,t,e,e+t.length,()=>s,o.feed,c),e}let f=e+u;return Xs(n,t,e,f,d=>i-(d-e)/u*(i-s),Math.min(o.feed,o.plunge*2),c),Xs(n,t,f,f+t.length,()=>s,o.feed,c),f}function Gm(n,t,e){let i=[];for(let s=t,o=0;o<500;s+=e,o++){let c=Vs(di(an(n,-s),.001),.005);if(!c.length)break;i.push(c)}return i}function Xm(n){let t=n.map((s,o)=>s.map(c=>({loop:c,depth:o,kids:[]})));for(let s=1;s<t.length;s++)for(let o of t[s])(t[s-1].find(u=>zs(o.loop[0],u.loop)&&Math.sign(Gn(u.loop))===Math.sign(Gn(o.loop)))||t[s-1].find(u=>zs(o.loop[0],u.loop))||t[0][0]).kids.push(o);let e=[],i=s=>{if(!s.kids.length){e.push([s.loop]);return}for(let o of s.kids)i(o);e[e.length-1].push(s.loop)};for(let s of t[0]||[])Gn(s.loop)>0&&i(s);for(let s of t[0]||[])Gn(s.loop)<=0&&!t[0].some(o=>o.kids.includes(s))&&i(s);return e}function Wm(n,t){let e=0;for(let i of t)zs(n,i)&&(e+=Gn(i)>0?1:-1);return e>0}function Ym(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let s=1;s<i;s++){let o=s/i;if(!Wm([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function qm(n,t,e,i,s,o,c){let u=Math.min(i.stepover,e*.95),f=Gm(t,e+c,u);if(!f.length)return;let d=an(t,-(e+c)+.01),_=Xm(f),S=s;for(let g of zr(s,o,i.stepdown)){for(let b of _){let E=new ur(b[0]),[C,M]=E.at(0);n.goTo(C,M,S),n.feed(C,M,S,i.plunge);let x=Du(n,E,0,S,g,i);for(let U=1;U<b.length;U++){let X=E.at(x),N=new ur(b[U]),O=N.nearest(X);Ym(X,N.at(O),d)||([C,M]=N.at(O),n.rapid(X[0],X[1],S+1),n.rapid(C,M,S+1),n.feed(C,M,g,i.plunge)),Xs(n,N,O,O+N.length,()=>g,i.feed),E=N,x=O}}S=g}n.retract()}function Ou(n,t,e,i,s,o,c){let u=Vs(di(an(t,-e),.001),.005);for(let f of u){let d=new ur(f),[_,S]=d.at(0);n.goTo(_,S,s);for(let g of zr(s,o,c))n.feed(_,S,g,i.plunge),Xs(n,d,0,d.length,()=>g,i.feed*.9);n.retract()}}function $m(n,t,e,i,s,o,c){let u=di(Ur(t,an(an(t,-i),i)),.01);if(!u.length)return;let f=an(u,e+.5);for(let d of Vs(di(an(t,-e),.001),.005)){let _=new ur(d),S=Math.max(8,Math.ceil(_.length/.25)),g=Array.from({length:S},(E,C)=>f.some(M=>zs(_.at(C/S*_.length),M)));if(g.every(Boolean)){Ou(n,t,e,s,o,c,s.stepdown);return}let b=g.indexOf(!1);for(let E=0;E<S;E++){let C=(b+E)%S;if(!g[C]||g[(C-1+S)%S])continue;let M=C;for(;g[(M+1)%S]&&M-C<S;)M++;let x=C/S*_.length,U=(M+1)/S*_.length,[X,N]=_.at(x);n.goTo(X,N,o);let O=!0;for(let F of zr(o,c,s.stepdown)){let Y=[..._.breaks(x,U),U],P=O?Y:[...Y.slice(0,-1).reverse(),x],[V,J]=_.at(O?x:U);n.feed(V,J,F,s.plunge);for(let K of P){let[it,ht]=_.at(K);n.feed(it,ht,F,s.feed)}O=!O}n.retract()}}}function Zm(n,t,e,i,s,o){let c=Math.min(i.stepover,e*1.6),u=t.minX-e-2,f=t.maxX+e+2;for(let d of zr(s,o,i.stepdown)){let _=t.minY+e*.6;n.goTo(u,_,s),n.feed(u,_,d,i.plunge);let S=1;for(;n.feed(S>0?f:u,_,d,i.feed),!(_>=t.maxY-e*.6-1e-6);)_=Math.min(_+c,t.maxY-e*.6),n.feed(S>0?f:u,_,d,i.feed),S=-S}n.retract()}function Jm(n,t,e,i,s,o){let c=Math.max(.5,o*1.5);for(let u of t){n.goTo(u.x,u.y,i);let f=i;for(;f>s+1e-6;){let d=Math.max(s,f-c);f<i&&n.rapid(u.x,u.y,f+.5),n.feed(u.x,u.y,d,e.plunge),n.rapid(u.x,u.y,i+1),f=d}n.retract()}}function jm(n,t,e,i){let s=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!s)return null;let o=2*e+4,c=Array.from({length:s},(f,d)=>{let _=(d+.5)/s*n;return[_-o/2,_+o/2]}),u=n;return{top:i+t.tabs.height,inside:f=>{let d=(f%u+u)%u;return c.some(([_,S])=>d>_&&d<S)},edges:(f,d)=>{let _=[];for(let S=Math.floor(f/u);S*u<=d;S++)for(let[g,b]of c)for(let E of[g,b]){let C=S*u+E;C>f&&C<d&&_.push(C)}return _}}}function Km(n,t,e,i,s,o,c,u){let f=[{off:e+u,fd:i}];u>0&&f.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let d of f)for(let _ of Br(t).map(S=>S[0])){let S=Vs(di(an([_],d.off),.001),.005).filter(g=>Gn(g)>0);for(let g of S){let b=new ur(g.slice().reverse()),E=jm(b.length,c,e,0),[C,M]=b.at(0);n.goTo(C,M,s),n.feed(C,M,s,i.plunge);let x=0,U=s,X=d.finish?zr(s,o,Math.max(i.stepdown,Math.min(6*e,s-o))):zr(s,o,i.stepdown);for(let N of X)x=Du(n,b,x,U,N,d.fd,E),U=N;n.retract()}}}function Qm(n,t){let e=c=>{let u=ki([c[0]]);return[(u.minX+u.maxX)/2,(u.minY+u.maxY)/2]},i=n.map(c=>({a:c,m:e(c)})),s=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let c=0;for(let f=1;f<i.length;f++)Math.hypot(i[f].m[0]-o[0],i[f].m[1]-o[1])<Math.hypot(i[c].m[0]-o[0],i[c].m[1]-o[1])&&(c=f);let[u]=i.splice(c,1);s.push(u.a),o=u.m}return s}function Fu(n){let t=n.stock.top+Hm,e=(Xn[n.job.finish]||Xn.balanced).allowance,s=n.ops.some(o=>o.kind==="face"&&o.enabled)?n.analysis.top:n.stock.top;for(let o of n.ops){let c=new bc(t),u=o.kind!=="face"&&o.zTop>=n.analysis.top-1e-6?Math.max(o.zTop,s):o.zTop,f=o.tool.diameter/2,d=o.feeds,_=Math.min(o.tool.fluteLength||1/0,3*o.tool.diameter);switch(o.kind){case"face":Zm(c,n.stock,f,d,u,o.zBottom);break;case"pocket":case"step":case"hole":for(let S of Qm(Br(o.region),c.at))qm(c,S,f,d,u,o.zBottom,e),e>0&&Ou(c,S,f,d,u,o.zBottom,_);break;case"corners":{let S=n.ops.find(g=>g.id===o.after);$m(c,o.region,f,S?S.tool.diameter/2:f*2,d,u,o.zBottom);break}case"drill":Jm(c,o.centers,d,u,o.zBottom,o.tool.diameter);break;case"cutout":Km(c,o.region,f,d,u,o.zBottom,n.job,e);break}o.moves=c.moves}return n}var Hm,bc,ur,Uu=Pn(()=>{Wo();Hs();Hm=3;bc=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,s){this.push({x:t,y:e,z:i,f:s})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ),this.rapid(t,e,this.clearZ),this.rapid(t,e,i+1)}retract(){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ)}},ur=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],s=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(s[0]-i[0],s[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,s=1;for(;s<this.s.length-1&&this.s[s]<i;)s++;let o=this.p[s-1],c=this.p[s%this.p.length],u=this.s[s]-this.s[s-1]||1,f=(i-this.s[s-1])/u;return[o[0]+(c[0]-o[0])*f,o[1]+(c[1]-o[1])*f]}breaks(t,e){let i=[],s=this.length;for(let o=Math.floor(t/s);o*s<=e;o++)for(let c=0;c<this.p.length;c++){let u=o*s+this.s[c];u>t+1e-9&&u<e-1e-9&&i.push(u)}return i}nearest([t,e]){let i=0,s=1/0;for(let o=0;o<this.p.length;o++){let c=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;c<s&&(s=c,i=this.s[o])}return i}}});function Bu(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:s=null,spindleDelay:o=3}=t,c=Number.isFinite(s)?`G53 G0 Z${Vi(s)}`:"G53 G0 Z0",u=n.zero,f=n.stock,d=[Vr(`ncCAM: ${e}`),Vr(`Stock ${Vi(f.width)} x ${Vi(f.depth)} x ${Vi(f.thickness)} mm, ${(cr[n.job.material]||{}).name||n.job.material}, ${(Xn[n.job.finish]||{}).name||n.job.finish}`),Vr(`Zero: X Y at the ${eg[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],_=n.ops.filter(C=>C.enabled&&C.moves&&C.moves.length);for(let C of[...new Map(_.map(M=>[M.tool.id,M.tool])).values()])d.push(Vr(`T${hr(C,i)}: ${C.name}, ${Vi(C.diameter)} mm`));d.push("G21 G90 G94 G17");let S=null,g={},b=null,E=null;for(let C of _){(!S||C.tool.id!==S.id)&&(S&&d.push("M5"),d.push(c,`M6 T${hr(C.tool,i)}`,Vr(C.tool.name)),S=C.tool,d.push(`M3 S${C.feeds.rpm}`),o>0&&d.push(`G4 P${o}`),g={},b=null,E=null),d.push(Vr(`${C.label}${C.detail?": "+C.detail:""}`));for(let M of C.moves){let x=Vi(M.x-u.x),U=Vi(M.y-u.y),X=Vi(M.z-u.z);if(M.r&&(x!==g.x||U!==g.y)&&X!==g.z){let Y=g.z===void 0||+X<+g.z?[`X${x} Y${U}`,`Z${X}`]:[`Z${X}`,`X${x} Y${U}`];for(let P of Y)d.push(`${E==="G0"?"":"G0 "}${P}`),E="G0";g={x,y:U,z:X};continue}let N=M.r?"G0":"G1",O=N===E?"":N;x!==g.x&&(O+=` X${x}`),U!==g.y&&(O+=` Y${U}`),X!==g.z&&(O+=` Z${X}`),!M.r&&M.f!==b&&(O+=` F${Math.round(M.f)}`,b=M.f),O=O.trim(),!(!O||O===N)&&(d.push(O),E=N,g={x,y:U,z:X})}}return d.push("M5",c,"M30",""),d.join(`
`)}function ku(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let s=0,o=null,c=null;for(let u of n.ops){if(!u.enabled||!u.moves)continue;(!c||u.tool.id!==c.id)&&(s+=e+(c?i:0),c=u.tool);let f=0;for(let d of u.moves){if(o){let _=Math.hypot(d.x-o.x,d.y-o.y,d.z-o.z);f+=_/(d.r?t:d.f)*60}o=d}u.seconds=f,s+=f}return s}var Vi,tg,Vr,eg,zu=Pn(()=>{Hs();Vi=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},tg={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Vr=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>tg[t]??"")})`,eg={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});var wc=Pn(()=>{_c();Nu();Uu();zu();pc();Hs();Wo()});function ig(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function rg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function td(){let n=io("canvas");return n.style.display="block",n}function ro(...n){let t="THREE."+n.shift();cs?cs("log",t,...n):console.log(t,...n)}function ed(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function de(...n){n=ed(n);let t="THREE."+n.shift();if(cs)cs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function me(...n){n=ed(n);let t="THREE."+n.shift();if(cs)cs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function gr(...n){let t=n.join(" ");t in Gu||(Gu[t]=!0,de(...n))}function nd(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Ri(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function Ae(n,t,e){return Math.max(t,Math.min(e,n))}function Ch(n,t){return(n%t+t)%t}function sg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function og(n,t,e){return n!==t?(e-n)/(t-n):0}function Qs(n,t,e){return(1-e)*n+e*t}function ag(n,t,e,i){return Qs(n,t,1-Math.exp(-e*i))}function lg(n,t=1){return t-Math.abs(Ch(n,t*2)-t)}function cg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function hg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ug(n,t){return n+Math.floor(Math.random()*(t-n+1))}function fg(n,t){return n+Math.random()*(t-n)}function dg(n){return n*(.5-Math.random())}function pg(n){n!==void 0&&(Xu=n);let t=Xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mg(n){return n*ss}function gg(n){return n*hs}function _g(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function vg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xg(n,t,e,i,s){let o=Math.cos,c=Math.sin,u=o(e/2),f=c(e/2),d=o((t+i)/2),_=c((t+i)/2),S=o((t-i)/2),g=c((t-i)/2),b=o((i-t)/2),E=c((i-t)/2);switch(s){case"XYX":n.set(u*_,f*S,f*g,u*d);break;case"YZY":n.set(f*g,u*_,f*S,u*d);break;case"ZXZ":n.set(f*S,f*g,u*_,u*d);break;case"XZX":n.set(u*_,f*E,f*b,u*d);break;case"YXY":n.set(f*b,u*_,f*E,u*d);break;case"ZYZ":n.set(f*E,f*b,u*_,u*d);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sg(){let n={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ue&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ue&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?no:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[eo]:{primaries:t,whitePoint:i,transfer:no,toXYZ:Yu,fromXYZ:qu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:Yu,fromXYZ:qu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),n}function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Da.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}function Rc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function kc(n,t,e,i,s){for(let o=0,c=n.length-3;o<=c;o+=3){dr.fromArray(n,o);let u=s.x*Math.abs(dr.x)+s.y*Math.abs(dr.y)+s.z*Math.abs(dr.z),f=t.dot(dr),d=e.dot(dr),_=i.dot(dr);if(Math.max(-Math.max(f,d,_),Math.min(f,d,_))>u)return!1}return!0}function ia(n,t,e,i,s,o){es.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Js.x=o*es.x-s*es.y,Js.y=s*es.x+o*es.y):Js.copy(es),n.copy(t),n.x+=Js.x,n.y+=Js.y,n.applyMatrix4(sd)}function Ug(n,t,e,i,s,o,c,u){let f;if(t.side===En?f=i.intersectTriangle(c,o,s,!0,u):f=i.intersectTriangle(s,o,c,t.side===ir,u),f===null)return null;ua.copy(u),ua.applyMatrix4(n.matrixWorld);let d=e.ray.origin.distanceTo(ua);return d<e.near||d>e.far?null:{distance:d,point:ua.clone(),object:n}}function fa(n,t,e,i,s,o,c,u,f,d){n.getVertexPosition(u,aa),n.getVertexPosition(f,la),n.getVertexPosition(d,ca);let _=Ug(n,t,e,i,aa,la,ca,af);if(_){let S=new ot;mi.getBarycoord(af,aa,la,ca,S),s&&(_.uv=mi.getInterpolatedAttribute(s,u,f,d,S,new le)),o&&(_.uv1=mi.getInterpolatedAttribute(o,u,f,d,S,new le)),c&&(_.normal=mi.getInterpolatedAttribute(c,u,f,d,S,new ot),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));let g={a:u,b:f,c:d,normal:new ot,materialIndex:0};mi.getNormal(aa,la,ca,g.normal),_.face=g,_.barycoord=S}return _}function ma(n,t,e,i,s,o,c){let u=n.geometry.attributes.position;if(ka.fromBufferAttribute(u,s),za.fromBufferAttribute(u,o),e.distanceSqToSegment(ka,za,Yc,cf)>i)return;Yc.applyMatrix4(n.matrixWorld);let d=t.ray.origin.distanceTo(Yc);if(!(d<t.near||d>t.far))return{distance:d,point:cf.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}function br(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(ff(s))s.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ff(s[0])){let o=[];for(let c=0,u=s.length;c<u;c++)o[c]=s[c].clone();t[e][i]=o}else t[e][i]=s.slice();else t[e][i]=s}}return t}function xn(n){let t={};for(let e=0;e<n.length;e++){let i=br(n[e]);for(let s in i)t[s]=i[s]}return t}function ff(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function kg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}function ns(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function $c(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function ad(n,t,e,i,s){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*s}function Hg(n,t,e,i,s){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(s-i)}function Gg(n,t,e,i,s){let o=(n-t)/(s-t);for(let c=0;c<8;c++){let u=ad(o,t,e,i,s)-n;if(Math.abs(u)<1e-10)break;let f=Hg(o,t,e,i,s);if(Math.abs(f)<1e-10)break;o=Math.max(0,Math.min(1,o-u/f))}return o}function df(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function yf(n,t){return n.distance-t.distance}function ih(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let o=n.children;for(let c=0,u=o.length;c<u;c++)ih(o[c],t,e,!0)}}function Dh(n,t,e,i){let s=Kg(i);switch(e){case wh:return n*t;case Th:return n*t/s.components*s.byteLength;case hl:return n*t/s.components*s.byteLength;case ar:return n*t*2/s.components*s.byteLength;case ul:return n*t*2/s.components*s.byteLength;case Eh:return n*t*3/s.components*s.byteLength;case Yn:return n*t*4/s.components*s.byteLength;case fl:return n*t*4/s.components*s.byteLength;case Po:case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Io:case Ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(n,16)*Math.max(t,8)/4;case dl:case ml:return Math.max(n,8)*Math.max(t,8)/2;case _l:case vl:case xl:case Sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yl:case Lo:case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ul:case Bl:case kl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case zl:case Vl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case No:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kg(n){switch(n){case Ln:case xh:return{byteLength:1,components:1};case bs:case Sh:case ci:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case ai:case al:case li:return{byteLength:4,components:1};case Mh:case bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var er,nr,Sf,sh,Mf,Eo,bf,Ss,ir,En,yn,yi,Ms,oh,ah,lh,wf,Sr,Ef,Tf,Af,Pf,Cf,If,Rf,Lf,ch,hh,Nf,Df,Of,Ff,Uf,Bf,kf,zf,Vf,wa,Ea,Ta,as,Aa,Pa,Ca,Ia,uh,Hf,Gf,oi,fh,dh,ph,mh,gh,_h,vh,yh,rr,Mr,rl,sl,To,Ra,gi,La,cn,Xf,Ao,fn,ol,sr,Ln,xh,Sh,bs,al,ai,li,ci,ll,cl,ws,Mh,bh,wh,Eh,Yn,_i,or,Th,hl,ar,ul,fl,Po,Co,Io,Ro,dl,pl,ml,gl,_l,vl,yl,xl,Sl,Lo,Ml,bl,wl,El,Tl,Al,Pl,Cl,Il,Rl,Ll,Nl,Dl,Ol,Fl,Ul,Bl,kl,zl,Vl,No,Hl,to,Na,Ma,jc,Kc,Qc,th,Wf,Gl,Yf,Di,bn,eo,no,Ue,ba,qf,$f,Zf,Jf,Xl,jf,Kf,Wl,Qf,Ah,Es,Ph,ei,ls,Gu,cs,id,ii,gn,Xu,ss,hs,Ih,le,Bn,ot,Tc,Wu,Se,Ac,Yu,qu,Ie,Hr,Da,Mg,us,bg,Cc,wn,je,Oa,In,so,Fa,We,Gr,jn,wg,Eg,Hi,$o,On,$u,Zu,Ni,fs,Tg,Ju,Xr,Ti,Zo,Ws,Ag,Pg,ju,Ku,Qu,tf,Cg,Wr,Ic,en,ni,Ig,ds,rd,Gi,Jo,xe,_n,oo,Kn,Ai,Lc,Pi,Yr,qr,ef,Nc,Dc,Oc,Fc,Uc,Bc,mi,qi,Ci,Qn,jo,$r,Zr,Jr,Xi,Wi,fr,Ys,Ko,Qo,dr,tn,ta,Rg,$e,ao,lo,Ge,Lg,qs,zc,_r,Ng,Wn,Vc,jr,Fn,$s,ln,Ze,Ua,Mn,co,Hc,Dg,Og,Un,Fg,vi,ps,Kr,Zs,Qr,ts,es,Js,sd,ea,js,na,nf,Gc,rf,ho,Ii,Xc,ra,sa,$i,ri,sf,pr,oa,of,aa,la,ca,Wc,ha,af,ua,ze,Ba,mr,Bg,da,ms,si,ka,za,lf,Ks,pa,Yc,cf,vr,hf,uf,yr,uo,fo,Zi,Va,po,Ji,ji,gs,ga,_a,qc,va,_s,mo,go,xr,od,zg,Vg,kn,Ha,Rn,Ga,Xa,_o,Ki,Wa,Ya,qa,$a,zn,Qi,Za,Ja,ja,vo,tr,Ka,Qa,ld,tl,yo,xo,Zc,pf,mf,el,ya,xa,pi,So,Yi,gf,_f,vn,vs,eh,ys,is,rs,nl,il,Lh,Xg,Nh,Wg,Yg,qg,$g,Zg,Jg,jg,nh,qe,BS,vf,Mo,xs,rh,xf,Sa,Jc,bo,wo,Oh=Pn(()=>{er={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sf=0,sh=1,Mf=2,Eo=1,bf=2,Ss=3,ir=0,En=1,yn=2,yi=0,Ms=1,oh=2,ah=3,lh=4,wf=5,Sr=100,Ef=101,Tf=102,Af=103,Pf=104,Cf=200,If=201,Rf=202,Lf=203,ch=204,hh=205,Nf=206,Df=207,Of=208,Ff=209,Uf=210,Bf=211,kf=212,zf=213,Vf=214,wa=0,Ea=1,Ta=2,as=3,Aa=4,Pa=5,Ca=6,Ia=7,uh=0,Hf=1,Gf=2,oi=0,fh=1,dh=2,ph=3,mh=4,gh=5,_h=6,vh=7,yh=300,rr=301,Mr=302,rl=303,sl=304,To=306,Ra=1e3,gi=1001,La=1002,cn=1003,Xf=1004,Ao=1005,fn=1006,ol=1007,sr=1008,Ln=1009,xh=1010,Sh=1011,bs=1012,al=1013,ai=1014,li=1015,ci=1016,ll=1017,cl=1018,ws=1020,Mh=35902,bh=35899,wh=1021,Eh=1022,Yn=1023,_i=1026,or=1027,Th=1028,hl=1029,ar=1030,ul=1031,fl=1033,Po=33776,Co=33777,Io=33778,Ro=33779,dl=35840,pl=35841,ml=35842,gl=35843,_l=36196,vl=37492,yl=37496,xl=37488,Sl=37489,Lo=37490,Ml=37491,bl=37808,wl=37809,El=37810,Tl=37811,Al=37812,Pl=37813,Cl=37814,Il=37815,Rl=37816,Ll=37817,Nl=37818,Dl=37819,Ol=37820,Fl=37821,Ul=36492,Bl=36494,kl=36495,zl=36283,Vl=36284,No=36285,Hl=36286,to=2300,Na=2301,Ma=2302,jc=2303,Kc=2400,Qc=2401,th=2402,Wf=3200,Gl=0,Yf=1,Di="",bn="srgb",eo="srgb-linear",no="linear",Ue="srgb",ba=7680,qf=519,$f=512,Zf=513,Jf=514,Xl=515,jf=516,Kf=517,Wl=518,Qf=519,Ah=35044,Es=35048,Ph="300 es",ei=2e3,ls=2001;Gu={},cs=null;id={[wa]:Ea,[Ta]:Ca,[Aa]:Ia,[as]:Pa,[Ea]:wa,[Ca]:Ta,[Ia]:Aa,[Pa]:as},ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=1234567,ss=Math.PI/180,hs=180/Math.PI;Ih={DEG2RAD:ss,RAD2DEG:hs,generateUUID:Ri,clamp:Ae,euclideanModulo:Ch,mapLinear:sg,inverseLerp:og,lerp:Qs,damp:ag,pingpong:lg,smoothstep:cg,smootherstep:hg,randInt:ug,randFloat:fg,randFloatSpread:dg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:_g,ceilPowerOfTwo:vg,floorPowerOfTwo:yg,setQuaternionFromProperEuler:xg,normalize:ke,denormalize:ti},le=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*s+t.x,this.y=o*s+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,c,u){let f=i[s+0],d=i[s+1],_=i[s+2],S=i[s+3],g=o[c+0],b=o[c+1],E=o[c+2],C=o[c+3];if(S!==C||f!==g||d!==b||_!==E){let M=f*g+d*b+_*E+S*C;M<0&&(g=-g,b=-b,E=-E,C=-C,M=-M);let x=1-u;if(M<.9995){let U=Math.acos(M),X=Math.sin(U);x=Math.sin(x*U)/X,u=Math.sin(u*U)/X,f=f*x+g*u,d=d*x+b*u,_=_*x+E*u,S=S*x+C*u}else{f=f*x+g*u,d=d*x+b*u,_=_*x+E*u,S=S*x+C*u;let U=1/Math.sqrt(f*f+d*d+_*_+S*S);f*=U,d*=U,_*=U,S*=U}}t[e]=f,t[e+1]=d,t[e+2]=_,t[e+3]=S}static multiplyQuaternionsFlat(t,e,i,s,o,c){let u=i[s],f=i[s+1],d=i[s+2],_=i[s+3],S=o[c],g=o[c+1],b=o[c+2],E=o[c+3];return t[e]=u*E+_*S+f*b-d*g,t[e+1]=f*E+_*g+d*S-u*b,t[e+2]=d*E+_*b+u*g-f*S,t[e+3]=_*E-u*S-f*g-d*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,c=t._order,u=Math.cos,f=Math.sin,d=u(i/2),_=u(s/2),S=u(o/2),g=f(i/2),b=f(s/2),E=f(o/2);switch(c){case"XYZ":this._x=g*_*S+d*b*E,this._y=d*b*S-g*_*E,this._z=d*_*E+g*b*S,this._w=d*_*S-g*b*E;break;case"YXZ":this._x=g*_*S+d*b*E,this._y=d*b*S-g*_*E,this._z=d*_*E-g*b*S,this._w=d*_*S+g*b*E;break;case"ZXY":this._x=g*_*S-d*b*E,this._y=d*b*S+g*_*E,this._z=d*_*E+g*b*S,this._w=d*_*S-g*b*E;break;case"ZYX":this._x=g*_*S-d*b*E,this._y=d*b*S+g*_*E,this._z=d*_*E-g*b*S,this._w=d*_*S+g*b*E;break;case"YZX":this._x=g*_*S+d*b*E,this._y=d*b*S+g*_*E,this._z=d*_*E-g*b*S,this._w=d*_*S-g*b*E;break;case"XZY":this._x=g*_*S-d*b*E,this._y=d*b*S-g*_*E,this._z=d*_*E+g*b*S,this._w=d*_*S+g*b*E;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],c=e[1],u=e[5],f=e[9],d=e[2],_=e[6],S=e[10],g=i+u+S;if(g>0){let b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(_-f)*b,this._y=(o-d)*b,this._z=(c-s)*b}else if(i>u&&i>S){let b=2*Math.sqrt(1+i-u-S);this._w=(_-f)/b,this._x=.25*b,this._y=(s+c)/b,this._z=(o+d)/b}else if(u>S){let b=2*Math.sqrt(1+u-i-S);this._w=(o-d)/b,this._x=(s+c)/b,this._y=.25*b,this._z=(f+_)/b}else{let b=2*Math.sqrt(1+S-i-u);this._w=(c-s)/b,this._x=(o+d)/b,this._y=(f+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,c=t._w,u=e._x,f=e._y,d=e._z,_=e._w;return this._x=i*_+c*u+s*d-o*f,this._y=s*_+c*f+o*u-i*d,this._z=o*_+c*d+i*f-s*u,this._w=c*_-i*u-s*f-o*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,o=t._z,c=t._w,u=this.dot(t);u<0&&(i=-i,s=-s,o=-o,c=-c,u=-u);let f=1-e;if(u<.9995){let d=Math.acos(u),_=Math.sin(d);f=Math.sin(f*d)/_,e=Math.sin(e*d)/_,this._x=this._x*f+i*e,this._y=this._y*f+s*e,this._z=this._z*f+o*e,this._w=this._w*f+c*e,this._onChangeCallback()}else this._x=this._x*f+i*e,this._y=this._y*f+s*e,this._z=this._z*f+o*e,this._w=this._w*f+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ot=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,c=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,c=t.y,u=t.z,f=t.w,d=2*(c*s-u*i),_=2*(u*e-o*s),S=2*(o*i-c*e);return this.x=e+f*d+c*S-u*_,this.y=i+f*_+u*d-o*S,this.z=s+f*S+o*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,c=e.x,u=e.y,f=e.z;return this.x=s*f-o*u,this.y=o*c-i*f,this.z=i*u-s*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Tc.copy(this).projectOnVector(t),this.sub(Tc)}reflect(t){return this.sub(Tc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tc=new ot,Wu=new Bn,Se=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,o,c,u,f,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,c,u,f,d)}set(t,e,i,s,o,c,u,f,d){let _=this.elements;return _[0]=t,_[1]=s,_[2]=u,_[3]=e,_[4]=o,_[5]=f,_[6]=i,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,c=i[0],u=i[3],f=i[6],d=i[1],_=i[4],S=i[7],g=i[2],b=i[5],E=i[8],C=s[0],M=s[3],x=s[6],U=s[1],X=s[4],N=s[7],O=s[2],F=s[5],Y=s[8];return o[0]=c*C+u*U+f*O,o[3]=c*M+u*X+f*F,o[6]=c*x+u*N+f*Y,o[1]=d*C+_*U+S*O,o[4]=d*M+_*X+S*F,o[7]=d*x+_*N+S*Y,o[2]=g*C+b*U+E*O,o[5]=g*M+b*X+E*F,o[8]=g*x+b*N+E*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],_=t[8];return e*c*_-e*u*d-i*o*_+i*u*f+s*o*d-s*c*f}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],_=t[8],S=_*c-u*d,g=u*f-_*o,b=d*o-c*f,E=e*S+i*g+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/E;return t[0]=S*C,t[1]=(s*d-_*i)*C,t[2]=(u*i-s*c)*C,t[3]=g*C,t[4]=(_*e-s*f)*C,t[5]=(s*o-u*e)*C,t[6]=b*C,t[7]=(i*f-d*e)*C,t[8]=(c*e-i*o)*C,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,c,u){let f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*c+d*u)+c+t,-s*d,s*f,-s*(-d*c+f*u)+u+e,0,0,1),this}scale(t,e){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ac.makeScale(t,e)),this}rotate(t){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ac.makeRotation(-t)),this}translate(t,e){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ac.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ac=new Se,Yu=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qu=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ie=Sg();Da=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Hr===void 0&&(Hr=io("canvas")),Hr.width=t.width,Hr.height=t.height;let s=Hr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Hr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=io("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=Li(o[c]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mg=0,us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?o.push(Pc(s[c].image)):o.push(Pc(s[c]))}else o=Pc(s);i.url=o}return e||(t.images[this.uuid]=i),i}};bg=0,Cc=new ot,wn=class n extends ii{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gi,s=gi,o=fn,c=sr,u=Yn,f=Ln,d=n.DEFAULT_ANISOTROPY,_=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Ri(),this.name="",this.source=new us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cc).x}get height(){return this.source.getSize(Cc).y}get depth(){return this.source.getSize(Cc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){de(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ra:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ra:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=yh;wn.DEFAULT_ANISOTROPY=1;je=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*e+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*e+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*e+c[7]*i+c[11]*s+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,f=t.elements,d=f[0],_=f[4],S=f[8],g=f[1],b=f[5],E=f[9],C=f[2],M=f[6],x=f[10];if(Math.abs(_-g)<.01&&Math.abs(S-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(S+C)<.1&&Math.abs(E+M)<.1&&Math.abs(d+b+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let X=(d+1)/2,N=(b+1)/2,O=(x+1)/2,F=(_+g)/4,Y=(S+C)/4,P=(E+M)/4;return X>N&&X>O?X<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(X),s=F/i,o=Y/i):N>O?N<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(N),i=F/s,o=P/s):O<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),i=Y/o,s=P/o),this.set(i,s,o,e),this}let U=Math.sqrt((M-E)*(M-E)+(S-C)*(S-C)+(g-_)*(g-_));return Math.abs(U)<.001&&(U=1),this.x=(M-E)/U,this.y=(S-C)/U,this.z=(g-_)/U,this.w=Math.acos((d+b+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this.w=Ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this.w=Ae(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oa=class extends ii{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new je(0,0,t,e),this.scissorTest=!1,this.viewport=new je(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},o=new wn(s),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new us(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Oa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},so=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Fa=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},We=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,o,c,u,f,d,_,S,g,b,E,C,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,c,u,f,d,_,S,g,b,E,C,M)}set(t,e,i,s,o,c,u,f,d,_,S,g,b,E,C,M){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=o,x[5]=c,x[9]=u,x[13]=f,x[2]=d,x[6]=_,x[10]=S,x[14]=g,x[3]=b,x[7]=E,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Gr.setFromMatrixColumn(t,0).length(),o=1/Gr.setFromMatrixColumn(t,1).length(),c=1/Gr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),_=Math.cos(o),S=Math.sin(o);if(t.order==="XYZ"){let g=c*_,b=c*S,E=u*_,C=u*S;e[0]=f*_,e[4]=-f*S,e[8]=d,e[1]=b+E*d,e[5]=g-C*d,e[9]=-u*f,e[2]=C-g*d,e[6]=E+b*d,e[10]=c*f}else if(t.order==="YXZ"){let g=f*_,b=f*S,E=d*_,C=d*S;e[0]=g+C*u,e[4]=E*u-b,e[8]=c*d,e[1]=c*S,e[5]=c*_,e[9]=-u,e[2]=b*u-E,e[6]=C+g*u,e[10]=c*f}else if(t.order==="ZXY"){let g=f*_,b=f*S,E=d*_,C=d*S;e[0]=g-C*u,e[4]=-c*S,e[8]=E+b*u,e[1]=b+E*u,e[5]=c*_,e[9]=C-g*u,e[2]=-c*d,e[6]=u,e[10]=c*f}else if(t.order==="ZYX"){let g=c*_,b=c*S,E=u*_,C=u*S;e[0]=f*_,e[4]=E*d-b,e[8]=g*d+C,e[1]=f*S,e[5]=C*d+g,e[9]=b*d-E,e[2]=-d,e[6]=u*f,e[10]=c*f}else if(t.order==="YZX"){let g=c*f,b=c*d,E=u*f,C=u*d;e[0]=f*_,e[4]=C-g*S,e[8]=E*S+b,e[1]=S,e[5]=c*_,e[9]=-u*_,e[2]=-d*_,e[6]=b*S+E,e[10]=g-C*S}else if(t.order==="XZY"){let g=c*f,b=c*d,E=u*f,C=u*d;e[0]=f*_,e[4]=-S,e[8]=d*_,e[1]=g*S+C,e[5]=c*_,e[9]=b*S-E,e[2]=E*S-b,e[6]=u*_,e[10]=C*S+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wg,t,Eg)}lookAt(t,e,i){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Hi.crossVectors(i,On),Hi.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Hi.crossVectors(i,On)),Hi.normalize(),$o.crossVectors(On,Hi),s[0]=Hi.x,s[4]=$o.x,s[8]=On.x,s[1]=Hi.y,s[5]=$o.y,s[9]=On.y,s[2]=Hi.z,s[6]=$o.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,c=i[0],u=i[4],f=i[8],d=i[12],_=i[1],S=i[5],g=i[9],b=i[13],E=i[2],C=i[6],M=i[10],x=i[14],U=i[3],X=i[7],N=i[11],O=i[15],F=s[0],Y=s[4],P=s[8],V=s[12],J=s[1],K=s[5],it=s[9],ht=s[13],Q=s[2],z=s[6],tt=s[10],H=s[14],_t=s[3],at=s[7],pt=s[11],gt=s[15];return o[0]=c*F+u*J+f*Q+d*_t,o[4]=c*Y+u*K+f*z+d*at,o[8]=c*P+u*it+f*tt+d*pt,o[12]=c*V+u*ht+f*H+d*gt,o[1]=_*F+S*J+g*Q+b*_t,o[5]=_*Y+S*K+g*z+b*at,o[9]=_*P+S*it+g*tt+b*pt,o[13]=_*V+S*ht+g*H+b*gt,o[2]=E*F+C*J+M*Q+x*_t,o[6]=E*Y+C*K+M*z+x*at,o[10]=E*P+C*it+M*tt+x*pt,o[14]=E*V+C*ht+M*H+x*gt,o[3]=U*F+X*J+N*Q+O*_t,o[7]=U*Y+X*K+N*z+O*at,o[11]=U*P+X*it+N*tt+O*pt,o[15]=U*V+X*ht+N*H+O*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],c=t[1],u=t[5],f=t[9],d=t[13],_=t[2],S=t[6],g=t[10],b=t[14],E=t[3],C=t[7],M=t[11],x=t[15],U=f*b-d*g,X=u*b-d*S,N=u*g-f*S,O=c*b-d*_,F=c*g-f*_,Y=c*S-u*_;return e*(C*U-M*X+x*N)-i*(E*U-M*O+x*F)+s*(E*X-C*O+x*Y)-o*(E*N-C*F+M*Y)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[1],c=t[5],u=t[9],f=t[2],d=t[6],_=t[10];return e*(c*_-u*d)-i*(o*_-u*f)+s*(o*d-c*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],_=t[8],S=t[9],g=t[10],b=t[11],E=t[12],C=t[13],M=t[14],x=t[15],U=e*u-i*c,X=e*f-s*c,N=e*d-o*c,O=i*f-s*u,F=i*d-o*u,Y=s*d-o*f,P=_*C-S*E,V=_*M-g*E,J=_*x-b*E,K=S*M-g*C,it=S*x-b*C,ht=g*x-b*M,Q=U*ht-X*it+N*K+O*J-F*V+Y*P;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/Q;return t[0]=(u*ht-f*it+d*K)*z,t[1]=(s*it-i*ht-o*K)*z,t[2]=(C*Y-M*F+x*O)*z,t[3]=(g*F-S*Y-b*O)*z,t[4]=(f*J-c*ht-d*V)*z,t[5]=(e*ht-s*J+o*V)*z,t[6]=(M*N-E*Y-x*X)*z,t[7]=(_*Y-g*N+b*X)*z,t[8]=(c*it-u*J+d*P)*z,t[9]=(i*J-e*it-o*P)*z,t[10]=(E*F-C*N+x*U)*z,t[11]=(S*N-_*F-b*U)*z,t[12]=(u*V-c*K-f*P)*z,t[13]=(e*K-i*V+s*P)*z,t[14]=(C*X-E*O-M*U)*z,t[15]=(_*O-S*X+g*U)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,c=t.x,u=t.y,f=t.z,d=o*c,_=o*u;return this.set(d*c+i,d*u-s*f,d*f+s*u,0,d*u+s*f,_*u+i,_*f-s*c,0,d*f-s*u,_*f+s*c,o*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,c){return this.set(1,i,o,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,c=e._y,u=e._z,f=e._w,d=o+o,_=c+c,S=u+u,g=o*d,b=o*_,E=o*S,C=c*_,M=c*S,x=u*S,U=f*d,X=f*_,N=f*S,O=i.x,F=i.y,Y=i.z;return s[0]=(1-(C+x))*O,s[1]=(b+N)*O,s[2]=(E-X)*O,s[3]=0,s[4]=(b-N)*F,s[5]=(1-(g+x))*F,s[6]=(M+U)*F,s[7]=0,s[8]=(E+X)*Y,s[9]=(M-U)*Y,s[10]=(1-(g+C))*Y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let c=Gr.set(s[0],s[1],s[2]).length(),u=Gr.set(s[4],s[5],s[6]).length(),f=Gr.set(s[8],s[9],s[10]).length();o<0&&(c=-c),jn.copy(this);let d=1/c,_=1/u,S=1/f;return jn.elements[0]*=d,jn.elements[1]*=d,jn.elements[2]*=d,jn.elements[4]*=_,jn.elements[5]*=_,jn.elements[6]*=_,jn.elements[8]*=S,jn.elements[9]*=S,jn.elements[10]*=S,e.setFromRotationMatrix(jn),i.x=c,i.y=u,i.z=f,this}makePerspective(t,e,i,s,o,c,u=ei,f=!1){let d=this.elements,_=2*o/(e-t),S=2*o/(i-s),g=(e+t)/(e-t),b=(i+s)/(i-s),E,C;if(f)E=o/(c-o),C=c*o/(c-o);else if(u===ei)E=-(c+o)/(c-o),C=-2*c*o/(c-o);else if(u===ls)E=-c/(c-o),C=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=S,d[9]=b,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,s,o,c,u=ei,f=!1){let d=this.elements,_=2/(e-t),S=2/(i-s),g=-(e+t)/(e-t),b=-(i+s)/(i-s),E,C;if(f)E=1/(c-o),C=c/(c-o);else if(u===ei)E=-2/(c-o),C=-(c+o)/(c-o);else if(u===ls)E=-1/(c-o),C=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=S,d[9]=0,d[13]=b,d[2]=0,d[6]=0,d[10]=E,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Gr=new ot,jn=new We,wg=new ot(0,0,0),Eg=new ot(1,1,1),Hi=new ot,$o=new ot,On=new ot,$u=new We,Zu=new Bn,Ni=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],c=s[4],u=s[8],f=s[1],d=s[5],_=s[9],S=s[2],g=s[6],b=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(u,b),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-S,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,b),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Ae(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-S,o)):(this._x=0,this._y=Math.atan2(u,b));break;case"XZY":this._z=Math.asin(-Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-_,b),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $u.makeRotationFromQuaternion(t),this.setFromRotationMatrix($u,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tg=0,Ju=new ot,Xr=new Bn,Ti=new We,Zo=new ot,Ws=new ot,Ag=new ot,Pg=new Bn,ju=new ot(1,0,0),Ku=new ot(0,1,0),Qu=new ot(0,0,1),tf={type:"added"},Cg={type:"removed"},Wr={type:"childadded",child:null},Ic={type:"childremoved",child:null},en=class n extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new ot,e=new Ni,i=new Bn,s=new ot(1,1,1);function o(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Se}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(ju,t)}rotateY(t){return this.rotateOnAxis(Ku,t)}rotateZ(t){return this.rotateOnAxis(Qu,t)}translateOnAxis(t,e){return Ju.copy(t).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ju,t)}translateY(t){return this.translateOnAxis(Ku,t)}translateZ(t){return this.translateOnAxis(Qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zo.copy(t):Zo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Ws,Zo,this.up):Ti.lookAt(Zo,Ws,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Xr.setFromRotationMatrix(Ti),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tf),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cg),Ic.child=t,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tf),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,Ag),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Pg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*s,o[13]+=i-o[1]*e-o[5]*i-o[9]*s,o[14]+=s-o[2]*e-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){let f=u.shapes;if(Array.isArray(f))for(let d=0,_=f.length;d<_;d++){let S=f[d];o(t.shapes,S)}else o(t.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(t.materials,this.material[f]));s.material=u}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){let f=this.animations[u];s.animations.push(o(t.animations,f))}}if(e){let u=c(t.geometries),f=c(t.materials),d=c(t.textures),_=c(t.images),S=c(t.shapes),g=c(t.skeletons),b=c(t.animations),E=c(t.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),_.length>0&&(i.images=_),S.length>0&&(i.shapes=S),g.length>0&&(i.skeletons=g),b.length>0&&(i.animations=b),E.length>0&&(i.nodes=E)}return i.object=s,i;function c(u){let f=[];for(let d in u){let _=u[d];delete _.metadata,f.push(_)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new ot(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ni=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ig={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,c=null,u=this._targetRay,f=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(let C of t.hand.values()){let M=e.getJointPose(C,i),x=this._getHandJoint(d,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}let _=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],g=_.position.distanceTo(S.position),b=.02,E=.005;d.inputState.pinching&&g>b+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=b-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:t,target:this})));u!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ni;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Jo={h:0,s:0,l:0};xe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ie.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ie.workingColorSpace){if(t=Ch(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,c=2*i-o;this.r=Rc(c,o,t+1/3),this.g=Rc(c,o,t),this.b=Rc(c,o,t-1/3)}return Ie.colorSpaceToWorking(this,s),this}setStyle(t,e=bn){function i(o){o!==void 0&&parseFloat(o)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:de("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){let i=rd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return Ie.workingToColorSpace(_n.copy(this),t),Math.round(Ae(_n.r*255,0,255))*65536+Math.round(Ae(_n.g*255,0,255))*256+Math.round(Ae(_n.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.workingToColorSpace(_n.copy(this),e);let i=_n.r,s=_n.g,o=_n.b,c=Math.max(i,s,o),u=Math.min(i,s,o),f,d,_=(u+c)/2;if(u===c)f=0,d=0;else{let S=c-u;switch(d=_<=.5?S/(c+u):S/(2-c-u),c){case i:f=(s-o)/S+(s<o?6:0);break;case s:f=(o-i)/S+2;break;case o:f=(i-s)/S+4;break}f/=6}return t.h=f,t.s=d,t.l=_,t}getRGB(t,e=Ie.workingColorSpace){return Ie.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=bn){Ie.workingToColorSpace(_n.copy(this),t);let e=_n.r,i=_n.g,s=_n.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL(Jo);let i=Qs(Gi.h,Jo.h,e),s=Qs(Gi.s,Jo.s,e),o=Qs(Gi.l,Jo.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new xe;xe.NAMES=rd;oo=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Kn=new ot,Ai=new ot,Lc=new ot,Pi=new ot,Yr=new ot,qr=new ot,ef=new ot,Nc=new ot,Dc=new ot,Oc=new ot,Fc=new je,Uc=new je,Bc=new je,mi=class n{constructor(t=new ot,e=new ot,i=new ot){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Kn.subVectors(t,e),s.cross(Kn);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Kn.subVectors(s,e),Ai.subVectors(i,e),Lc.subVectors(t,e);let c=Kn.dot(Kn),u=Kn.dot(Ai),f=Kn.dot(Lc),d=Ai.dot(Ai),_=Ai.dot(Lc),S=c*d-u*u;if(S===0)return o.set(0,0,0),null;let g=1/S,b=(d*f-u*_)*g,E=(c*_-u*f)*g;return o.set(1-b-E,E,b)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,i,s,o,c,u,f){return this.getBarycoord(t,e,i,s,Pi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Pi.x),f.addScaledVector(c,Pi.y),f.addScaledVector(u,Pi.z),f)}static getInterpolatedAttribute(t,e,i,s,o,c){return Fc.setScalar(0),Uc.setScalar(0),Bc.setScalar(0),Fc.fromBufferAttribute(t,e),Uc.fromBufferAttribute(t,i),Bc.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Fc,o.x),c.addScaledVector(Uc,o.y),c.addScaledVector(Bc,o.z),c}static isFrontFacing(t,e,i,s){return Kn.subVectors(i,e),Ai.subVectors(t,e),Kn.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Kn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,c,u;Yr.subVectors(s,i),qr.subVectors(o,i),Nc.subVectors(t,i);let f=Yr.dot(Nc),d=qr.dot(Nc);if(f<=0&&d<=0)return e.copy(i);Dc.subVectors(t,s);let _=Yr.dot(Dc),S=qr.dot(Dc);if(_>=0&&S<=_)return e.copy(s);let g=f*S-_*d;if(g<=0&&f>=0&&_<=0)return c=f/(f-_),e.copy(i).addScaledVector(Yr,c);Oc.subVectors(t,o);let b=Yr.dot(Oc),E=qr.dot(Oc);if(E>=0&&b<=E)return e.copy(o);let C=b*d-f*E;if(C<=0&&d>=0&&E<=0)return u=d/(d-E),e.copy(i).addScaledVector(qr,u);let M=_*E-b*S;if(M<=0&&S-_>=0&&b-E>=0)return ef.subVectors(o,s),u=(S-_)/(S-_+(b-E)),e.copy(s).addScaledVector(ef,u);let x=1/(M+C+g);return c=C*x,u=g*x,e.copy(i).addScaledVector(Yr,c).addScaledVector(qr,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qi=class{constructor(t=new ot(1/0,1/0,1/0),e=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,Qn):Qn.fromBufferAttribute(o,c),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jo.copy(i.boundingBox)),jo.applyMatrix4(t.matrixWorld),this.union(jo)}let s=t.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Ko.subVectors(this.max,Ys),$r.subVectors(t.a,Ys),Zr.subVectors(t.b,Ys),Jr.subVectors(t.c,Ys),Xi.subVectors(Zr,$r),Wi.subVectors(Jr,Zr),fr.subVectors($r,Jr);let e=[0,-Xi.z,Xi.y,0,-Wi.z,Wi.y,0,-fr.z,fr.y,Xi.z,0,-Xi.x,Wi.z,0,-Wi.x,fr.z,0,-fr.x,-Xi.y,Xi.x,0,-Wi.y,Wi.x,0,-fr.y,fr.x,0];return!kc(e,$r,Zr,Jr,Ko)||(e=[1,0,0,0,1,0,0,0,1],!kc(e,$r,Zr,Jr,Ko))?!1:(Qo.crossVectors(Xi,Wi),e=[Qo.x,Qo.y,Qo.z],kc(e,$r,Zr,Jr,Ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ci=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],Qn=new ot,jo=new qi,$r=new ot,Zr=new ot,Jr=new ot,Xi=new ot,Wi=new ot,fr=new ot,Ys=new ot,Ko=new ot,Qo=new ot,dr=new ot;tn=new ot,ta=new le,Rg=0,$e=class extends ii{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ah,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),o=ke(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},ao=class extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}},lo=class extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}},Ge=class extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}},Lg=new qi,qs=new ot,zc=new ot,_r=class{constructor(t=new ot,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Lg.setFromPoints(t).getCenter(i);let s=0;for(let o=0,c=t.length;o<c;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);let e=qs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(qs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(zc)),this.expandByPoint(qs.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ng=0,Wn=new We,Vc=new en,jr=new ot,Fn=new qi,$s=new qi,ln=new ot,Ze=class n extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ig(t)?lo:ao)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new Se().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,i){return Wn.makeTranslation(t,e,i),this.applyMatrix4(Wn),this}scale(t,e,i){return Wn.makeScale(t,e,i),this.applyMatrix4(Wn),this}lookAt(t){return Vc.lookAt(t),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,o=t.length;s<o;s++){let c=t[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ge(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];Fn.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){let u=e[o];$s.setFromBufferAttribute(u),this.morphTargetsRelative?(ln.addVectors(Fn.min,$s.min),Fn.expandByPoint(ln),ln.addVectors(Fn.max,$s.max),Fn.expandByPoint(ln)):(Fn.expandByPoint($s.min),Fn.expandByPoint($s.max))}Fn.getCenter(i);let s=0;for(let o=0,c=t.count;o<c;o++)ln.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(ln));if(e)for(let o=0,c=e.length;o<c;o++){let u=e[o],f=this.morphTargetsRelative;for(let d=0,_=u.count;d<_;d++)ln.fromBufferAttribute(u,d),f&&(jr.fromBufferAttribute(t,d),ln.add(jr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,o=e.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new $e(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));let u=[],f=[];for(let P=0;P<i.count;P++)u[P]=new ot,f[P]=new ot;let d=new ot,_=new ot,S=new ot,g=new le,b=new le,E=new le,C=new ot,M=new ot;function x(P,V,J){d.fromBufferAttribute(i,P),_.fromBufferAttribute(i,V),S.fromBufferAttribute(i,J),g.fromBufferAttribute(o,P),b.fromBufferAttribute(o,V),E.fromBufferAttribute(o,J),_.sub(d),S.sub(d),b.sub(g),E.sub(g);let K=1/(b.x*E.y-E.x*b.y);isFinite(K)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(S,-b.y).multiplyScalar(K),M.copy(S).multiplyScalar(b.x).addScaledVector(_,-E.x).multiplyScalar(K),u[P].add(C),u[V].add(C),u[J].add(C),f[P].add(M),f[V].add(M),f[J].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let P=0,V=U.length;P<V;++P){let J=U[P],K=J.start,it=J.count;for(let ht=K,Q=K+it;ht<Q;ht+=3)x(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}let X=new ot,N=new ot,O=new ot,F=new ot;function Y(P){O.fromBufferAttribute(s,P),F.copy(O);let V=u[P];X.copy(V),X.sub(O.multiplyScalar(O.dot(V))).normalize(),N.crossVectors(F,V);let K=N.dot(f[P])<0?-1:1;c.setXYZW(P,X.x,X.y,X.z,K)}for(let P=0,V=U.length;P<V;++P){let J=U[P],K=J.start,it=J.count;for(let ht=K,Q=K+it;ht<Q;ht+=3)Y(t.getX(ht+0)),Y(t.getX(ht+1)),Y(t.getX(ht+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,b=i.count;g<b;g++)i.setXYZ(g,0,0,0);let s=new ot,o=new ot,c=new ot,u=new ot,f=new ot,d=new ot,_=new ot,S=new ot;if(t)for(let g=0,b=t.count;g<b;g+=3){let E=t.getX(g+0),C=t.getX(g+1),M=t.getX(g+2);s.fromBufferAttribute(e,E),o.fromBufferAttribute(e,C),c.fromBufferAttribute(e,M),_.subVectors(c,o),S.subVectors(s,o),_.cross(S),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),u.add(_),f.add(_),d.add(_),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(C,f.x,f.y,f.z),i.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,b=e.count;g<b;g+=3)s.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),_.subVectors(c,o),S.subVectors(s,o),_.cross(S),i.setXYZ(g+0,_.x,_.y,_.z),i.setXYZ(g+1,_.x,_.y,_.z),i.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(u,f){let d=u.array,_=u.itemSize,S=u.normalized,g=new d.constructor(f.length*_),b=0,E=0;for(let C=0,M=f.length;C<M;C++){u.isInterleavedBufferAttribute?b=f[C]*u.data.stride+u.offset:b=f[C]*_;for(let x=0;x<_;x++)g[E++]=d[b++]}return new $e(g,_,S)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let u in s){let f=s[u],d=t(f,i);e.setAttribute(u,d)}let o=this.morphAttributes;for(let u in o){let f=[],d=o[u];for(let _=0,S=d.length;_<S;_++){let g=d[_],b=t(g,i);f.push(b)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let u=0,f=c.length;u<f;u++){let d=c[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let f=this.parameters;for(let d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let f in i){let d=i[f];t.data.attributes[f]=d.toJSON(t.data)}let s={},o=!1;for(let f in this.morphAttributes){let d=this.morphAttributes[f],_=[];for(let S=0,g=d.length;S<g;S++){let b=d[S];_.push(b.toJSON(t.data))}_.length>0&&(s[f]=_,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let d in s){let _=s[d];this.setAttribute(d,_.clone(e))}let o=t.morphAttributes;for(let d in o){let _=[],S=o[d];for(let g=0,b=S.length;g<b;g++)_.push(S[g].clone(e));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let d=0,_=c.length;d<_;d++){let S=c[d];this.addGroup(S.start,S.count,S.materialIndex)}let u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());let f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ua=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ah,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Mn=new ot,co=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),o=ke(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hc=new ot,Dg=new ot,Og=new Se,Un=class{constructor(t=new ot(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Hc.subVectors(i,e).cross(Dg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Hc),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let c=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:e.copy(t.start).addScaledVector(s,c)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Og.getNormalMatrix(t),s=this.coplanarPoint(Hc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Fg=0,vi=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Ms,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){de(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let c=[];for(let u in o){let f=o[u];delete f.metadata,c.push(f)}return c}if(e){let o=s(t.textures),c=s(t.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Un().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ps=class extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zs=new ot,Qr=new ot,ts=new ot,es=new le,Js=new le,sd=new We,ea=new ot,js=new ot,na=new ot,nf=new le,Gc=new le,rf=new le,ho=class extends en{constructor(t=new ps){if(super(),this.isSprite=!0,this.type="Sprite",Kr===void 0){Kr=new Ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ua(e,5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute("position",new co(i,3,0,!1)),Kr.setAttribute("uv",new co(i,2,3,!1))}this.geometry=Kr,this.material=t,this.center=new le(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&me('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qr.setFromMatrixScale(this.matrixWorld),sd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qr.multiplyScalar(-ts.z);let i=this.material.rotation,s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));let c=this.center;ia(ea.set(-.5,-.5,0),ts,c,Qr,s,o),ia(js.set(.5,-.5,0),ts,c,Qr,s,o),ia(na.set(.5,.5,0),ts,c,Qr,s,o),nf.set(0,0),Gc.set(1,0),rf.set(1,1);let u=t.ray.intersectTriangle(ea,js,na,!1,Zs);if(u===null&&(ia(js.set(-.5,.5,0),ts,c,Qr,s,o),Gc.set(0,1),u=t.ray.intersectTriangle(ea,na,js,!1,Zs),u===null))return;let f=t.ray.origin.distanceTo(Zs);f<t.near||f>t.far||e.push({distance:f,point:Zs.clone(),uv:mi.getInterpolation(Zs,ea,js,na,nf,Gc,rf,new le),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Ii=new ot,Xc=new ot,ra=new ot,sa=new ot,$i=class{constructor(t=new ot,e=new ot(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xc.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),sa.copy(this.origin).sub(Xc);let o=t.distanceTo(e)*.5,c=-this.direction.dot(ra),u=sa.dot(this.direction),f=-sa.dot(ra),d=sa.lengthSq(),_=Math.abs(1-c*c),S,g,b,E;if(_>0)if(S=c*f-u,g=c*u-f,E=o*_,S>=0)if(g>=-E)if(g<=E){let C=1/_;S*=C,g*=C,b=S*(S+c*g+2*u)+g*(c*S+g+2*f)+d}else g=o,S=Math.max(0,-(c*g+u)),b=-S*S+g*(g+2*f)+d;else g=-o,S=Math.max(0,-(c*g+u)),b=-S*S+g*(g+2*f)+d;else g<=-E?(S=Math.max(0,-(-c*o+u)),g=S>0?-o:Math.min(Math.max(-o,-f),o),b=-S*S+g*(g+2*f)+d):g<=E?(S=0,g=Math.min(Math.max(-o,-f),o),b=g*(g+2*f)+d):(S=Math.max(0,-(c*o+u)),g=S>0?o:Math.min(Math.max(-o,-f),o),b=-S*S+g*(g+2*f)+d);else g=c>0?-o:o,S=Math.max(0,-(c*g+u)),b=-S*S+g*(g+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,S),s&&s.copy(Xc).addScaledVector(ra,g),b}intersectSphere(t,e){if(t.radius<0)return null;Ii.subVectors(t.center,this.origin);let i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,o=t.radius*t.radius;if(s>o)return null;let c=Math.sqrt(o-s),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,c,u,f,d=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,g=this.origin;return d>=0?(i=(t.min.x-g.x)*d,s=(t.max.x-g.x)*d):(i=(t.max.x-g.x)*d,s=(t.min.x-g.x)*d),_>=0?(o=(t.min.y-g.y)*_,c=(t.max.y-g.y)*_):(o=(t.max.y-g.y)*_,c=(t.min.y-g.y)*_),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),S>=0?(u=(t.min.z-g.z)*S,f=(t.max.z-g.z)*S):(u=(t.max.z-g.z)*S,f=(t.min.z-g.z)*S),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,i,s,o){let c=this.origin,u=this.direction,f=u.x,d=u.y,_=u.z,S=t.x-c.x,g=t.y-c.y,b=t.z-c.z,E=e.x-c.x,C=e.y-c.y,M=e.z-c.z,x=i.x-c.x,U=i.y-c.y,X=i.z-c.z,N=Math.abs(f),O=Math.abs(d),F=Math.abs(_),Y,P,V,J,K,it,ht,Q,z,tt,H,_t;if(N>=O&&N>=F?(V=f,it=S,z=E,_t=x,f>=0?(Y=d,P=_,J=g,K=b,ht=C,Q=M,tt=U,H=X):(Y=_,P=d,J=b,K=g,ht=M,Q=C,tt=X,H=U)):O>=F?(V=d,it=g,z=C,_t=U,d>=0?(Y=_,P=f,J=b,K=S,ht=M,Q=E,tt=X,H=x):(Y=f,P=_,J=S,K=b,ht=E,Q=M,tt=x,H=X)):(V=_,it=b,z=M,_t=X,_>=0?(Y=f,P=d,J=S,K=g,ht=E,Q=C,tt=x,H=U):(Y=d,P=f,J=g,K=S,ht=C,Q=E,tt=U,H=x)),V===0)return null;let at=Y/V,pt=P/V,gt=1/V,At=J-at*it,Ot=K-pt*it,ue=ht-at*z,fe=Q-pt*z,be=tt-at*_t,St=H-pt*_t,Et=be*fe-St*ue,Xt=At*St-Ot*be,oe=ue*Ot-fe*At;if(s){if(Et<0||Xt<0||oe<0)return null}else if((Et<0||Xt<0||oe<0)&&(Et>0||Xt>0||oe>0))return null;let Ut=Et+Xt+oe;if(Ut===0)return null;let ge=gt*(Et*it+Xt*z+oe*_t);return(Ut>0?ge<0:ge>0)?null:this.at(ge/Ut,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ri=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},sf=new We,pr=new $i,oa=new _r,of=new ot,aa=new ot,la=new ot,ca=new ot,Wc=new ot,ha=new ot,af=new ot,ua=new ot,ze=class extends en{constructor(t=new Ze,e=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let u=this.morphTargetInfluences;if(o&&u){ha.set(0,0,0);for(let f=0,d=o.length;f<d;f++){let _=u[f],S=o[f];_!==0&&(Wc.fromBufferAttribute(S,t),c?ha.addScaledVector(Wc,_):ha.addScaledVector(Wc.sub(e),_))}e.add(ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(o),pr.copy(t.ray).recast(t.near),!(oa.containsPoint(pr.origin)===!1&&(pr.intersectSphere(oa,of)===null||pr.origin.distanceToSquared(of)>(t.far-t.near)**2))&&(sf.copy(o).invert(),pr.copy(t.ray).applyMatrix4(sf),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pr)))}_computeIntersections(t,e,i){let s,o=this.geometry,c=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,_=o.attributes.uv1,S=o.attributes.normal,g=o.groups,b=o.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,C=g.length;E<C;E++){let M=g[E],x=c[M.materialIndex],U=Math.max(M.start,b.start),X=Math.min(u.count,Math.min(M.start+M.count,b.start+b.count));for(let N=U,O=X;N<O;N+=3){let F=u.getX(N),Y=u.getX(N+1),P=u.getX(N+2);s=fa(this,x,t,i,d,_,S,F,Y,P),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=M.materialIndex,e.push(s))}}else{let E=Math.max(0,b.start),C=Math.min(u.count,b.start+b.count);for(let M=E,x=C;M<x;M+=3){let U=u.getX(M),X=u.getX(M+1),N=u.getX(M+2);s=fa(this,c,t,i,d,_,S,U,X,N),s&&(s.faceIndex=Math.floor(M/3),e.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,C=g.length;E<C;E++){let M=g[E],x=c[M.materialIndex],U=Math.max(M.start,b.start),X=Math.min(f.count,Math.min(M.start+M.count,b.start+b.count));for(let N=U,O=X;N<O;N+=3){let F=N,Y=N+1,P=N+2;s=fa(this,x,t,i,d,_,S,F,Y,P),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=M.materialIndex,e.push(s))}}else{let E=Math.max(0,b.start),C=Math.min(f.count,b.start+b.count);for(let M=E,x=C;M<x;M+=3){let U=M,X=M+1,N=M+2;s=fa(this,c,t,i,d,_,S,U,X,N),s&&(s.faceIndex=Math.floor(M/3),e.push(s))}}}};Ba=class extends wn{constructor(t=null,e=1,i=1,s,o,c,u,f,d=cn,_=cn,S,g){super(null,c,u,f,d,_,s,o,S,g),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mr=new _r,Bg=new le(.5,.5),da=new ot,ms=class{constructor(t=new Un,e=new Un,i=new Un,s=new Un,o=new Un,c=new Un){this.planes=[t,e,i,s,o,c]}set(t,e,i,s,o,c){let u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(c),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ei,i=!1){let s=this.planes,o=t.elements,c=o[0],u=o[1],f=o[2],d=o[3],_=o[4],S=o[5],g=o[6],b=o[7],E=o[8],C=o[9],M=o[10],x=o[11],U=o[12],X=o[13],N=o[14],O=o[15];if(s[0].setComponents(d-c,b-_,x-E,O-U).normalize(),s[1].setComponents(d+c,b+_,x+E,O+U).normalize(),s[2].setComponents(d+u,b+S,x+C,O+X).normalize(),s[3].setComponents(d-u,b-S,x-C,O-X).normalize(),i)s[4].setComponents(f,g,M,N).normalize(),s[5].setComponents(d-f,b-g,x-M,O-N).normalize();else if(s[4].setComponents(d-f,b-g,x-M,O-N).normalize(),e===ei)s[5].setComponents(d+f,b+g,x+M,O+N).normalize();else if(e===ls)s[5].setComponents(f,g,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){mr.center.set(0,0,0);let e=Bg.distanceTo(t.center);return mr.radius=.7071067811865476+e,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(da.x=s.normal.x>0?t.max.x:t.min.x,da.y=s.normal.y>0?t.max.y:t.min.y,da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},si=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ka=new ot,za=new ot,lf=new We,Ks=new $i,pa=new _r,Yc=new ot,cf=new ot,vr=class extends en{constructor(t=new Ze,e=new si){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)ka.fromBufferAttribute(e,s-1),za.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ka.distanceTo(za);t.setAttribute("lineDistance",new Ge(i,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),pa.radius+=o,t.ray.intersectsSphere(pa)===!1)return;lf.copy(s).invert(),Ks.copy(t.ray).applyMatrix4(lf);let u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,_=i.index,g=i.attributes.position;if(_!==null){let b=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let C=b,M=E-1;C<M;C+=d){let x=_.getX(C),U=_.getX(C+1),X=ma(this,t,Ks,f,x,U,C);X&&e.push(X)}if(this.isLineLoop){let C=_.getX(E-1),M=_.getX(b),x=ma(this,t,Ks,f,C,M,E-1);x&&e.push(x)}}else{let b=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let C=b,M=E-1;C<M;C+=d){let x=ma(this,t,Ks,f,C,C+1,C);x&&e.push(x)}if(this.isLineLoop){let C=ma(this,t,Ks,f,E-1,b,E-1);C&&e.push(C)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}};hf=new ot,uf=new ot,yr=class extends vr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)hf.fromBufferAttribute(e,s),uf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+hf.distanceTo(uf);t.setAttribute("lineDistance",new Ge(i,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},uo=class extends wn{constructor(t=[],e=rr,i,s,o,c,u,f,d,_){super(t,e,i,s,o,c,u,f,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fo=class extends wn{constructor(t,e,i,s,o,c,u,f,d){super(t,e,i,s,o,c,u,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zi=class extends wn{constructor(t,e,i=ai,s,o,c,u=cn,f=cn,d,_=_i,S=1){if(_!==_i&&_!==or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:S};super(g,s,o,c,u,f,_,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Va=class extends Zi{constructor(t,e=ai,i=rr,s,o,c=cn,u=cn,f,d=_i){let _={width:t,height:t,depth:1},S=[_,_,_,_,_,_];super(t,t,e,i,s,o,c,u,f,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},po=class extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ji=class n extends Ze{constructor(t=1,e=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};let u=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);let f=[],d=[],_=[],S=[],g=0,b=0;E("z","y","x",-1,-1,i,e,t,c,o,0),E("z","y","x",1,-1,i,e,-t,c,o,1),E("x","z","y",1,1,t,i,e,s,c,2),E("x","z","y",1,-1,t,i,-e,s,c,3),E("x","y","z",1,-1,t,e,i,s,o,4),E("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(f),this.setAttribute("position",new Ge(d,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(S,2));function E(C,M,x,U,X,N,O,F,Y,P,V){let J=N/Y,K=O/P,it=N/2,ht=O/2,Q=F/2,z=Y+1,tt=P+1,H=0,_t=0,at=new ot;for(let pt=0;pt<tt;pt++){let gt=pt*K-ht;for(let At=0;At<z;At++){let Ot=At*J-it;at[C]=Ot*U,at[M]=gt*X,at[x]=Q,d.push(at.x,at.y,at.z),at[C]=0,at[M]=0,at[x]=F>0?1:-1,_.push(at.x,at.y,at.z),S.push(At/Y),S.push(1-pt/P),H+=1}}for(let pt=0;pt<P;pt++)for(let gt=0;gt<Y;gt++){let At=g+gt+z*pt,Ot=g+gt+z*(pt+1),ue=g+(gt+1)+z*(pt+1),fe=g+(gt+1)+z*pt;f.push(At,Ot,fe),f.push(Ot,ue,fe),_t+=6}u.addGroup(b,_t,V),b+=_t,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ji=class n extends Ze{constructor(t=1,e=1,i=1,s=32,o=1,c=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:f};let d=this;s=Math.floor(s),o=Math.floor(o);let _=[],S=[],g=[],b=[],E=0,C=[],M=i/2,x=0;U(),c===!1&&(t>0&&X(!0),e>0&&X(!1)),this.setIndex(_),this.setAttribute("position",new Ge(S,3)),this.setAttribute("normal",new Ge(g,3)),this.setAttribute("uv",new Ge(b,2));function U(){let N=new ot,O=new ot,F=0,Y=(e-t)/i;for(let P=0;P<=o;P++){let V=[],J=P/o,K=J*(e-t)+t;for(let it=0;it<=s;it++){let ht=it/s,Q=ht*f+u,z=Math.sin(Q),tt=Math.cos(Q);O.x=K*z,O.y=-J*i+M,O.z=K*tt,S.push(O.x,O.y,O.z),N.set(z,Y,tt).normalize(),g.push(N.x,N.y,N.z),b.push(ht,1-J),V.push(E++)}C.push(V)}for(let P=0;P<s;P++)for(let V=0;V<o;V++){let J=C[V][P],K=C[V+1][P],it=C[V+1][P+1],ht=C[V][P+1];(t>0||V!==0)&&(_.push(J,K,ht),F+=3),(e>0||V!==o-1)&&(_.push(K,it,ht),F+=3)}d.addGroup(x,F,0),x+=F}function X(N){let O=E,F=new le,Y=new ot,P=0,V=N===!0?t:e,J=N===!0?1:-1;for(let it=1;it<=s;it++)S.push(0,M*J,0),g.push(0,J,0),b.push(.5,.5),E++;let K=E;for(let it=0;it<=s;it++){let Q=it/s*f+u,z=Math.cos(Q),tt=Math.sin(Q);Y.x=V*tt,Y.y=M*J,Y.z=V*z,S.push(Y.x,Y.y,Y.z),g.push(0,J,0),F.x=z*.5+.5,F.y=tt*.5*J+.5,b.push(F.x,F.y),E++}for(let it=0;it<s;it++){let ht=O+it,Q=K+it;N===!0?_.push(Q,Q+1,ht):_.push(Q+1,Q,ht),P+=3}d.addGroup(x,P,N===!0?1:2),x+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gs=class n extends ji{constructor(t=1,e=1,i=32,s=1,o=!1,c=0,u=Math.PI*2){super(0,t,e,i,s,o,c,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ga=new ot,_a=new ot,qc=new ot,va=new mi,_s=class extends Ze{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),o=Math.cos(ss*e),c=t.getIndex(),u=t.getAttribute("position"),f=c?c.count:u.count,d=[0,0,0],_=["a","b","c"],S=new Array(3),g={},b=[];for(let E=0;E<f;E+=3){c?(d[0]=c.getX(E),d[1]=c.getX(E+1),d[2]=c.getX(E+2)):(d[0]=E,d[1]=E+1,d[2]=E+2);let{a:C,b:M,c:x}=va;if(C.fromBufferAttribute(u,d[0]),M.fromBufferAttribute(u,d[1]),x.fromBufferAttribute(u,d[2]),va.getNormal(qc),S[0]=`${Math.round(C.x*s)},${Math.round(C.y*s)},${Math.round(C.z*s)}`,S[1]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,S[2]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,!(S[0]===S[1]||S[1]===S[2]||S[2]===S[0]))for(let U=0;U<3;U++){let X=(U+1)%3,N=S[U],O=S[X],F=va[_[U]],Y=va[_[X]],P=`${N}_${O}`,V=`${O}_${N}`;V in g&&g[V]?(qc.dot(g[V].normal)<=o&&(b.push(F.x,F.y,F.z),b.push(Y.x,Y.y,Y.z)),g[V]=null):P in g||(g[P]={index0:d[U],index1:d[X],normal:qc.clone()})}}for(let E in g)if(g[E]){let{index0:C,index1:M}=g[E];ga.fromBufferAttribute(u,C),_a.fromBufferAttribute(u,M),b.push(ga.x,ga.y,ga.z),b.push(_a.x,_a.y,_a.z)}this.setAttribute("position",new Ge(b,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},mo=class n extends Ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,c=e/2,u=Math.floor(i),f=Math.floor(s),d=u+1,_=f+1,S=t/u,g=e/f,b=[],E=[],C=[],M=[];for(let x=0;x<_;x++){let U=x*g-c;for(let X=0;X<d;X++){let N=X*S-o;E.push(N,-U,0),C.push(0,0,1),M.push(X/u),M.push(1-x/f)}}for(let x=0;x<f;x++)for(let U=0;U<u;U++){let X=U+d*x,N=U+d*(x+1),O=U+1+d*(x+1),F=U+1+d*x;b.push(X,N,F),b.push(N,O,F)}this.setIndex(b),this.setAttribute("position",new Ge(E,3)),this.setAttribute("normal",new Ge(C,3)),this.setAttribute("uv",new Ge(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},go=class n extends Ze{constructor(t=.5,e=1,i=32,s=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:c},i=Math.max(3,i),s=Math.max(1,s);let u=[],f=[],d=[],_=[],S=t,g=(e-t)/s,b=new ot,E=new le;for(let C=0;C<=s;C++){for(let M=0;M<=i;M++){let x=o+M/i*c;b.x=S*Math.cos(x),b.y=S*Math.sin(x),f.push(b.x,b.y,b.z),d.push(0,0,1),E.x=(b.x/e+1)/2,E.y=(b.y/e+1)/2,_.push(E.x,E.y)}S+=g}for(let C=0;C<s;C++){let M=C*(i+1);for(let x=0;x<i;x++){let U=x+M,X=U,N=U+i+1,O=U+i+2,F=U+1;u.push(X,N,F),u.push(N,O,F)}}this.setIndex(u),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},xr=class n extends Ze{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let f=Math.min(c+u,Math.PI),d=0,_=[],S=new ot,g=new ot,b=[],E=[],C=[],M=[];for(let x=0;x<=i;x++){let U=[],X=x/i,N=c+X*u,O=t*Math.cos(N),F=Math.sqrt(t*t-O*O),Y=0;x===0&&c===0?Y=.5/e:x===i&&f===Math.PI&&(Y=-.5/e);for(let P=0;P<=e;P++){let V=P/e,J=s+V*o;S.x=-F*Math.cos(J),S.y=O,S.z=F*Math.sin(J),E.push(S.x,S.y,S.z),g.copy(S).normalize(),C.push(g.x,g.y,g.z),M.push(V+Y,1-X),U.push(d++)}_.push(U)}for(let x=0;x<i;x++)for(let U=0;U<e;U++){let X=_[x][U+1],N=_[x][U],O=_[x+1][U],F=_[x+1][U+1];(x!==0||c>0)&&b.push(X,N,F),(x!==i-1||f<Math.PI)&&b.push(N,O,F)}this.setIndex(b),this.setAttribute("position",new Ge(E,3)),this.setAttribute("normal",new Ge(C,3)),this.setAttribute("uv",new Ge(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};od={clone:br,merge:xn},zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=kg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let c=this.uniforms[s].value;c&&c.isTexture?e.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[s]={type:"m4",value:c.toArray()}:e.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new xe().setHex(s.value);break;case"v2":this.uniforms[i].value=new le().fromArray(s.value);break;case"v3":this.uniforms[i].value=new ot().fromArray(s.value);break;case"v4":this.uniforms[i].value=new je().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Se().fromArray(s.value);break;case"m4":this.uniforms[i].value=new We().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ha=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rn=class extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ga=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xa=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},_o=class extends si{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};Ki=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let c;e:{i:if(!(t<s)){for(let u=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(o=s,s=e[++i],t<s)break t}c=e.length;break e}if(!(t>=o)){let u=e[1];t<u&&(i=2,o=u);for(let f=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(s=o,o=e[--i-1],t>=o)break t}c=i,i=0;break e}break n}for(;i<c;){let u=i+c>>>1;t<e[u]?c=u:i=u+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let c=0;c!==s;++c)e[c]=i[o+c];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wa=class extends Ki{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,c=t+1,u=s[o],f=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case Qc:o=t,u=2*e-i;break;case th:o=s.length-2,u=e+s[o]-s[o+1];break;default:o=t,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case Qc:c=t,f=2*i-e;break;case th:c=1,f=i+s[1]-s[0];break;default:c=t-1,f=e}let d=(i-e)*.5,_=this.valueSize;this._weightPrev=d/(e-u),this._weightNext=d/(f-i),this._offsetPrev=o*_,this._offsetNext=c*_}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,_=this._offsetPrev,S=this._offsetNext,g=this._weightPrev,b=this._weightNext,E=(i-e)/(s-e),C=E*E,M=C*E,x=-g*M+2*g*C-g*E,U=(1+g)*M+(-1.5-2*g)*C+(-.5+g)*E+1,X=(-1-b)*M+(1.5+b)*C+.5*E,N=b*M-b*C;for(let O=0;O!==u;++O)o[O]=x*c[_+O]+U*c[d+O]+X*c[f+O]+N*c[S+O];return o}},Ya=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,_=(i-e)/(s-e),S=1-_;for(let g=0;g!==u;++g)o[g]=c[d+g]*S+c[f+g]*_;return o}},qa=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$a=class extends Ki{interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,_=this.inTangents,S=this.outTangents;if(!_||!S){let E=(i-e)/(s-e),C=1-E;for(let M=0;M!==u;++M)o[M]=c[d+M]*C+c[f+M]*E;return o}let g=u*2,b=t-1;for(let E=0;E!==u;++E){let C=c[d+E],M=c[f+E],x=b*g+E*2,U=S[x],X=S[x+1],N=t*g+E*2,O=_[N],F=_[N+1],Y=Gg(i,e,U,O,s);o[E]=ad(Y,C,X,F,M)}return o}};zn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ns(e,this.TimeBufferType),this.values=ns(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ns(t.times,Array),values:ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),$c(t.settings)&&(i.settings={inTangents:ns(t.settings.inTangents,Array),outTangents:ns(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $a(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case Na:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break;case jc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return de("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return Ma;case this.InterpolantFactoryMethodBezier:return jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;$c(this.settings)&&(df(this.settings.inTangents,t),df(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,o=0,c=s-1;for(;o!==s&&i[o]<t;)++o;for(;c!==-1&&i[c]>e;)--c;if(++c,o!==0||c!==s){o>=c&&(c=Math.max(c,1),o=c-1);let u=this.getValueSize();this.times=i.slice(o,c),this.values=this.values.slice(o*u,c*u)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(me("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(me("KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let u=0;u!==o;u++){let f=i[u];if(typeof f=="number"&&isNaN(f)){me("KeyframeTrack: Time is not a valid number.",this,u,f),t=!1;break}if(c!==null&&c>f){me("KeyframeTrack: Out of order keys.",this,u,f,c),t=!1;break}c=f}if(s!==void 0&&rg(s))for(let u=0,f=s.length;u!==f;++u){let d=s[u];if(isNaN(d)){me("KeyframeTrack: Value is not a valid number.",this,u,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ma,o=t.length-1,c=1;for(let u=1;u<o;++u){let f=!1,d=t[u],_=t[u+1];if(d!==_&&(u!==1||d!==t[0]))if(s)f=!0;else{let S=u*i,g=S-i,b=S+i;for(let E=0;E!==i;++E){let C=e[S+E];if(C!==e[g+E]||C!==e[b+E]){f=!0;break}}}if(f){if(u!==c){t[c]=t[u];let S=u*i,g=c*i;for(let b=0;b!==i;++b)e[g+b]=e[S+b]}++c}}if(o>0){t[c]=t[o];for(let u=o*i,f=c*i,d=0;d!==i;++d)e[f+d]=e[u+d];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,$c(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Na;Qi=class extends zn{constructor(t,e,i){super(t,e,i)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=to;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;Za=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};Za.prototype.ValueTypeName="color";Ja=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};Ja.prototype.ValueTypeName="number";ja=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-e)/(s-e),d=t*u;for(let _=d+u;d!==_;d+=4)Bn.slerpFlat(o,0,c,d-u,c,d,f);return o}},vo=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;tr=class extends zn{constructor(t,e,i){super(t,e,i)}};tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=to;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;Ka=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};Ka.prototype.ValueTypeName="vector";Qa=class{constructor(t,e,i){let s=this,o=!1,c=0,u=0,f,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(_){u++,o===!1&&s.onStart!==void 0&&s.onStart(_,c,u),o=!0},this.itemEnd=function(_){c++,s.onProgress!==void 0&&s.onProgress(_,c,u),c===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(_){s.onError!==void 0&&s.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),f?f(_):_},this.setURLModifier=function(_){return f=_,this},this.addHandler=function(_,S){return d.push(_,S),this},this.removeHandler=function(_){let S=d.indexOf(_);return S!==-1&&d.splice(S,2),this},this.getHandler=function(_){for(let S=0,g=d.length;S<g;S+=2){let b=d[S],E=d[S+1];if(b.global&&(b.lastIndex=0),b.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ld=new Qa,tl=class{constructor(t){this.manager=t!==void 0?t:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};tl.DEFAULT_MATERIAL_NAME="__DEFAULT";yo=class extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xo=class extends yo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Zc=new We,pf=new ot,mf=new ot,el=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(pf),mf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Zc,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,c=s?s.z/o.x:1,u=s?s.w/o.y:1,f=s?s.x/o.x:0,d=s?s.y/o.y:0;t.coordinateSystem===ls||t.reversedDepth?e.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+d,0,0,1,0,0,0,0,1):e.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+d,0,0,.5,.5,0,0,0,1),e.multiply(Zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ya=new ot,xa=new Bn,pi=new ot,So=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ya,xa,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,xa,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ya,xa,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,xa,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new ot,gf=new le,_f=new le,vn=class extends So{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,gf,_f),e.subVectors(_f,gf)}setViewOffset(t,e,i,s,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ss*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,c=this.view;if(this.view!==null&&this.view.enabled){let f=c.fullWidth,d=c.fullHeight;o+=c.offsetX*s/f,e-=c.offsetY*i/d,s*=c.width/f,i*=c.height/d}let u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vs=class extends So{constructor(t=-1,e=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,c=i+t,u=s+e,f=s-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,u-=_*this.view.offsetY,f=u-_*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},eh=class extends el{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends yo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new eh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},is=-90,rs=1,nl=class extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(is,rs,t,e);s.layers=this.layers,this.add(s);let o=new vn(is,rs,t,e);o.layers=this.layers,this.add(o);let c=new vn(is,rs,t,e);c.layers=this.layers,this.add(c);let u=new vn(is,rs,t,e);u.layers=this.layers,this.add(u);let f=new vn(is,rs,t,e);f.layers=this.layers,this.add(f);let d=new vn(is,rs,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,c,u,f]=e;for(let d of e)this.remove(d);if(t===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,c,u,f,d,_]=this.children,S=t.getRenderTarget(),g=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;let C=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,2,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,3,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,4,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=C,t.setRenderTarget(i,5,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,_),t.setRenderTarget(S,g,b),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}},il=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Lh="\\[\\]\\.:\\/",Xg=new RegExp("["+Lh+"]","g"),Nh="[^"+Lh+"]",Wg="[^"+Lh.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",Nh),qg=/(WCOD+)?/.source.replace("WCOD",Wg),$g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),Zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),Jg=new RegExp("^"+Yg+qg+$g+Zg+"$"),jg=["material","materials","bones","map"],nh=class{constructor(t,e,i){let s=i||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},qe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(t){let e=Jg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);jg.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let c=0;c<o.length;c++){let u=o[c];if(u.name===e||u.uuid===e)return u;let f=i(u.children);if(f)return f}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){me("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){me("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let _=0;_<t.length;_++)if(t[_].name===d){d=_;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){me("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){me("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){me("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let c=t[s];if(c===void 0){let d=e.nodeName;me("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",t);return}let u=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?u=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=nh;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];BS=new Float32Array(1),vf=new We,Mo=class{constructor(t,e,i=0,s=1/0){this.ray=new $i(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):me("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vf),this}intersectObject(t,e=!0,i=[]){return ih(t,this,i,e),i.sort(yf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,o=t.length;s<o;s++)ih(t[s],this,i,e);return i.sort(yf),i}};xs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},rh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=s,this}},xf=new ot,bo=class extends en{constructor(t=new ot(0,0,1),e=new ot(0,0,0),i=1,s=16776960,o=i*.2,c=o*.2){super(),this.type="ArrowHelper",Sa===void 0&&(Sa=new Ze,Sa.setAttribute("position",new Ge([0,0,0,0,1,0],3)),Jc=new gs(.5,1,5,1),Jc.translate(0,-.5,0)),this.position.copy(e),this.line=new vr(Sa,new si({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ze(Jc,new ri({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,c)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{xf.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(xf,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},wo=class extends ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Id(){let n=null,t=!1,e=null,i=null;function s(o,c){i=n.requestAnimationFrame(s),e(o,c)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function t0(n){let t=new WeakMap;function e(u,f){let d=u.array,_=u.usage,S=d.byteLength,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,d,_),u.onUploadCallback();let b;if(d instanceof Float32Array)b=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)b=n.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?b=n.HALF_FLOAT:b=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=n.SHORT;else if(d instanceof Uint32Array)b=n.UNSIGNED_INT;else if(d instanceof Int32Array)b=n.INT;else if(d instanceof Int8Array)b=n.BYTE;else if(d instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:S}}function i(u,f,d){let _=f.array,S=f.updateRanges;if(n.bindBuffer(d,u),S.length===0)n.bufferSubData(d,0,_);else{S.sort((b,E)=>b.start-E.start);let g=0;for(let b=1;b<S.length;b++){let E=S[g],C=S[b];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,S[g]=C)}S.length=g+1;for(let b=0,E=S.length;b<E;b++){let C=S[b];n.bufferSubData(d,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);let f=t.get(u);f&&(n.deleteBuffer(f.buffer),t.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){let _=t.get(u);(!_||_.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}let d=t.get(u);if(d===void 0)t.set(u,e(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:s,remove:o,update:c}}function Fv(n,t,e,i,s,o){let c=new xe(0),u=s===!0?0:1,f,d,_=null,S=0,g=null;function b(U){let X=U.isScene===!0?U.background:null;if(X&&X.isTexture){let N=U.backgroundBlurriness>0;X=t.get(X,N)}return X}function E(U){let X=!1,N=b(U);N===null?M(c,u):N&&N.isColor&&(M(N,1),X=!0);let O=n.xr.getEnvironmentBlendMode();O==="additive"?e.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||X)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function C(U,X){let N=b(X);N&&(N.isCubeTexture||N.mapping===To)?(d===void 0&&(d=new ze(new Ji(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:br(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,F,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=N,d.material.uniforms.backgroundBlurriness.value=X.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(X.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Rd),d.material.toneMapped=Ie.getTransfer(N.colorSpace)!==Ue,(_!==N||S!==N.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,_=N,S=N.version,g=n.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(f===void 0&&(f=new ze(new mo(2,2),new kn({name:"BackgroundMaterial",uniforms:br(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=N,f.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,f.material.toneMapped=Ie.getTransfer(N.colorSpace)!==Ue,N.matrixAutoUpdate===!0&&N.updateMatrix(),f.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||S!==N.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,_=N,S=N.version,g=n.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function M(U,X){U.getRGB(Yl,Rh(n)),e.buffers.color.setClear(Yl.r,Yl.g,Yl.b,X,o)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(U,X=1){c.set(U),u=X,M(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(U){u=U,M(c,u)},render:E,addToRenderList:C,dispose:x}}function Uv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=g(null),o=s,c=!1;function u(K,it,ht,Q,z){let tt=!1,H=S(K,Q,ht,it);o!==H&&(o=H,d(o.object)),tt=b(K,Q,ht,z),tt&&E(K,Q,ht,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(tt||c)&&(c=!1,N(K,it,ht,Q),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function f(){return n.createVertexArray()}function d(K){return n.bindVertexArray(K)}function _(K){return n.deleteVertexArray(K)}function S(K,it,ht,Q){let z=Q.wireframe===!0,tt=i[it.id];tt===void 0&&(tt={},i[it.id]=tt);let H=K.isInstancedMesh===!0?K.id:0,_t=tt[H];_t===void 0&&(_t={},tt[H]=_t);let at=_t[ht.id];at===void 0&&(at={},_t[ht.id]=at);let pt=at[z];return pt===void 0&&(pt=g(f()),at[z]=pt),pt}function g(K){let it=[],ht=[],Q=[];for(let z=0;z<e;z++)it[z]=0,ht[z]=0,Q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:it,enabledAttributes:ht,attributeDivisors:Q,object:K,attributes:{},index:null}}function b(K,it,ht,Q){let z=o.attributes,tt=it.attributes,H=0,_t=ht.getAttributes();for(let at in _t)if(_t[at].location>=0){let gt=z[at],At=tt[at];if(At===void 0&&(at==="instanceMatrix"&&K.instanceMatrix&&(At=K.instanceMatrix),at==="instanceColor"&&K.instanceColor&&(At=K.instanceColor)),gt===void 0||gt.attribute!==At||At&&gt.data!==At.data)return!0;H++}return o.attributesNum!==H||o.index!==Q}function E(K,it,ht,Q){let z={},tt=it.attributes,H=0,_t=ht.getAttributes();for(let at in _t)if(_t[at].location>=0){let gt=tt[at];gt===void 0&&(at==="instanceMatrix"&&K.instanceMatrix&&(gt=K.instanceMatrix),at==="instanceColor"&&K.instanceColor&&(gt=K.instanceColor));let At={};At.attribute=gt,gt&&gt.data&&(At.data=gt.data),z[at]=At,H++}o.attributes=z,o.attributesNum=H,o.index=Q}function C(){let K=o.newAttributes;for(let it=0,ht=K.length;it<ht;it++)K[it]=0}function M(K){x(K,0)}function x(K,it){let ht=o.newAttributes,Q=o.enabledAttributes,z=o.attributeDivisors;ht[K]=1,Q[K]===0&&(n.enableVertexAttribArray(K),Q[K]=1),z[K]!==it&&(n.vertexAttribDivisor(K,it),z[K]=it)}function U(){let K=o.newAttributes,it=o.enabledAttributes;for(let ht=0,Q=it.length;ht<Q;ht++)it[ht]!==K[ht]&&(n.disableVertexAttribArray(ht),it[ht]=0)}function X(K,it,ht,Q,z,tt,H){H===!0?n.vertexAttribIPointer(K,it,ht,z,tt):n.vertexAttribPointer(K,it,ht,Q,z,tt)}function N(K,it,ht,Q){C();let z=Q.attributes,tt=ht.getAttributes(),H=it.defaultAttributeValues;for(let _t in tt){let at=tt[_t];if(at.location>=0){let pt=z[_t];if(pt===void 0&&(_t==="instanceMatrix"&&K.instanceMatrix&&(pt=K.instanceMatrix),_t==="instanceColor"&&K.instanceColor&&(pt=K.instanceColor)),pt!==void 0){let gt=pt.normalized,At=pt.itemSize,Ot=t.get(pt);if(Ot===void 0)continue;let ue=Ot.buffer,fe=Ot.type,be=Ot.bytesPerElement,St=fe===n.INT||fe===n.UNSIGNED_INT||pt.gpuType===al;if(pt.isInterleavedBufferAttribute){let Et=pt.data,Xt=Et.stride,oe=pt.offset;if(Et.isInstancedInterleavedBuffer){for(let Ut=0;Ut<at.locationSize;Ut++)x(at.location+Ut,Et.meshPerAttribute);K.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Ut=0;Ut<at.locationSize;Ut++)M(at.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let Ut=0;Ut<at.locationSize;Ut++)X(at.location+Ut,At/at.locationSize,fe,gt,Xt*be,(oe+At/at.locationSize*Ut)*be,St)}else{if(pt.isInstancedBufferAttribute){for(let Et=0;Et<at.locationSize;Et++)x(at.location+Et,pt.meshPerAttribute);K.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Et=0;Et<at.locationSize;Et++)M(at.location+Et);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let Et=0;Et<at.locationSize;Et++)X(at.location+Et,At/at.locationSize,fe,gt,At*be,At/at.locationSize*Et*be,St)}}else if(H!==void 0){let gt=H[_t];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(at.location,gt);break;case 3:n.vertexAttrib3fv(at.location,gt);break;case 4:n.vertexAttrib4fv(at.location,gt);break;default:n.vertexAttrib1fv(at.location,gt)}}}}U()}function O(){V();for(let K in i){let it=i[K];for(let ht in it){let Q=it[ht];for(let z in Q){let tt=Q[z];for(let H in tt)_(tt[H].object),delete tt[H];delete Q[z]}}delete i[K]}}function F(K){if(i[K.id]===void 0)return;let it=i[K.id];for(let ht in it){let Q=it[ht];for(let z in Q){let tt=Q[z];for(let H in tt)_(tt[H].object),delete tt[H];delete Q[z]}}delete i[K.id]}function Y(K){for(let it in i){let ht=i[it];for(let Q in ht){let z=ht[Q];if(z[K.id]===void 0)continue;let tt=z[K.id];for(let H in tt)_(tt[H].object),delete tt[H];delete z[K.id]}}}function P(K){for(let it in i){let ht=i[it],Q=K.isInstancedMesh===!0?K.id:0,z=ht[Q];if(z!==void 0){for(let tt in z){let H=z[tt];for(let _t in H)_(H[_t].object),delete H[_t];delete z[tt]}delete ht[Q],Object.keys(ht).length===0&&delete i[it]}}}function V(){J(),c=!0,o!==s&&(o=s,d(o.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:V,resetDefaultState:J,dispose:O,releaseStatesOfGeometry:F,releaseStatesOfObject:P,releaseStatesOfProgram:Y,initAttributes:C,enableAttribute:M,disableUnusedAttributes:U}}function Bv(n,t,e){let i;function s(f){i=f}function o(f,d){n.drawArrays(i,f,d),e.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawArraysInstanced(i,f,d,_),e.update(d,i,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,_);let g=0;for(let b=0;b<_;b++)g+=d[b];e.update(g,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function kv(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let Y=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(Y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(Y){return!(Y!==Yn&&i.convert(Y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(Y){let P=Y===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(Y!==Ln&&Y!==li&&!P&&i.convert(Y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(Y){if(Y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";Y="mediump"}return Y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",_=f(d);_!==d&&(de("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);let S=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let b=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),U=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),X=n.getParameter(n.MAX_VARYING_VECTORS),N=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=n.getParameter(n.MAX_SAMPLES),F=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:U,maxVaryings:X,maxFragmentUniforms:N,maxSamples:O,samples:F}}function zv(n){let t=this,e=null,i=0,s=!1,o=!1,c=new Un,u=new Se,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){let b=S.length!==0||g||i!==0||s;return s=g,i=S.length,b},this.beginShadows=function(){o=!0,_(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(S,g){e=_(S,g,0)},this.setState=function(S,g,b){let E=S.clippingPlanes,C=S.clipIntersection,M=S.clipShadows,x=n.get(S);if(!s||E===null||E.length===0||o&&!M)o?_(null):d();else{let U=o?0:i,X=U*4,N=x.clippingState||null;f.value=N,N=_(E,g,X,b);for(let O=0;O!==X;++O)N[O]=e[O];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function d(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function _(S,g,b,E){let C=S!==null?S.length:0,M=null;if(C!==0){if(M=f.value,E!==!0||M===null){let x=b+C*4,U=g.matrixWorldInverse;u.getNormalMatrix(U),(M===null||M.length<x)&&(M=new Float32Array(x));for(let X=0,N=b;X!==C;++X,N+=4)c.copy(S[X]).applyMatrix4(U,u),c.normal.toArray(M,N),M[N+3]=c.constant}f.value=M,f.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function Wv(n){let t=[],e=[],i=n,s=n-As+1+Vv;for(let o=0;o<s;o++){let c=Math.pow(2,i);t.push(c);let u=1/(c-2),f=-u,d=1+u,_=[f,f,d,f,d,d,f,f,d,d,f,d],S=6,g=6,b=3,E=new Float32Array(b*g*S),C=new Float32Array(b*g*S);for(let x=0;x<S;x++){let U=x%3*2/3-1,X=x>2?0:-1,N=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];E.set(N,b*g*x);for(let O=0;O<g;O++){let F=_[O*2]*2-1,Y=_[O*2+1]*2-1;x===0?wr.set(1,Y,F):x===1?wr.set(-F,1,-Y):x===2?wr.set(-F,Y,1):x===3?wr.set(-1,Y,-F):x===4?wr.set(-F,-1,Y):wr.set(F,Y,-1),wr.toArray(C,(x*g+O)*b)}}let M=new Ze;M.setAttribute("position",new $e(E,b)),M.setAttribute("outputDirection",new $e(C,b)),e.push(new ze(M,null)),i>As&&i--}return{lodMeshes:e,sizeLods:t}}function hd(n,t,e){let i=new In(n,t,e);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ts(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Yv(n,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function qv(n,t,e){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:Hv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ud(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function fd(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

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
	`}function $v(n){let t=new WeakMap,e=new WeakMap,i=null;function s(g,b=!1){return g==null?null:b?c(g):o(g)}function o(g){if(g&&g.isTexture){let b=g.mapping;if(b===rl||b===sl)if(t.has(g)){let E=t.get(g).texture;return u(E,g.mapping)}else{let E=g.image;if(E&&E.height>0){let C=new Zl(E.height);return C.fromEquirectangularTexture(n,g),t.set(g,C),g.addEventListener("dispose",d),u(C.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){let b=g.mapping,E=b===rl||b===sl,C=b===rr||b===Mr;if(E||C){let M=e.get(g),x=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return i===null&&(i=new $l(n)),M=E?i.fromEquirectangular(g,M):i.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,e.set(g,M),M.texture;if(M!==void 0)return M.texture;{let U=g.image;return E&&U&&U.height>0||C&&U&&f(U)?(i===null&&(i=new $l(n)),M=E?i.fromEquirectangular(g):i.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,e.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function u(g,b){return b===rl?g.mapping=rr:b===sl&&(g.mapping=Mr),g}function f(g){let b=0,E=6;for(let C=0;C<E;C++)g[C]!==void 0&&b++;return b===E}function d(g){let b=g.target;b.removeEventListener("dispose",d);let E=t.get(b);E!==void 0&&(t.delete(b),E.dispose())}function _(g){let b=g.target;b.removeEventListener("dispose",_);let E=e.get(b);E!==void 0&&(e.delete(b),E.dispose())}function S(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:S}}function Zv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&gr("WebGLRenderer: "+i+" extension not supported."),s}}}function Jv(n,t,e,i){let s={},o=new WeakMap;function c(S){let g=S.target;g.index!==null&&t.remove(g.index);for(let E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",c),delete s[g.id];let b=o.get(g);b&&(t.remove(b),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(S,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,e.memory.geometries++),g}function f(S){let g=S.attributes;for(let b in g)t.update(g[b],n.ARRAY_BUFFER)}function d(S){let g=[],b=S.index,E=S.attributes.position,C=0;if(E===void 0)return;if(b!==null){let U=b.array;C=b.version;for(let X=0,N=U.length;X<N;X+=3){let O=U[X+0],F=U[X+1],Y=U[X+2];g.push(O,F,F,Y,Y,O)}}else{let U=E.array;C=E.version;for(let X=0,N=U.length/3-1;X<N;X+=3){let O=X+0,F=X+1,Y=X+2;g.push(O,F,F,Y,Y,O)}}let M=new(E.count>=65535?lo:ao)(g,1);M.version=C;let x=o.get(S);x&&t.remove(x),o.set(S,M)}function _(S){let g=o.get(S);if(g){let b=S.index;b!==null&&g.version<b.version&&d(S)}else d(S);return o.get(S)}return{get:u,update:f,getWireframeAttribute:_}}function jv(n,t,e){let i;function s(S){i=S}let o,c;function u(S){o=S.type,c=S.bytesPerElement}function f(S,g){n.drawElements(i,g,o,S*c),e.update(g,i,1)}function d(S,g,b){b!==0&&(n.drawElementsInstanced(i,g,o,S*c,b),e.update(g,i,b))}function _(S,g,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,o,S,0,b);let C=0;for(let M=0;M<b;M++)C+=g[M];e.update(C,i,1)}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=_}function Kv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(e.calls++,c){case n.TRIANGLES:e.triangles+=u*(o/3);break;case n.LINES:e.lines+=u*(o/2);break;case n.LINE_STRIP:e.lines+=u*(o-1);break;case n.LINE_LOOP:e.lines+=u*o;break;case n.POINTS:e.points+=u*o;break;default:me("WebGLInfo: Unknown draw mode:",c);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Qv(n,t,e){let i=new WeakMap,s=new je;function o(c,u,f){let d=c.morphTargetInfluences,_=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,S=_!==void 0?_.length:0,g=i.get(u);if(g===void 0||g.count!==S){let V=function(){Y.dispose(),i.delete(u),u.removeEventListener("dispose",V)};g!==void 0&&g.texture.dispose();let b=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],U=u.morphAttributes.color||[],X=0;b===!0&&(X=1),E===!0&&(X=2),C===!0&&(X=3);let N=u.attributes.position.count*X,O=1;N>t.maxTextureSize&&(O=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);let F=new Float32Array(N*O*4*S),Y=new so(F,N,O,S);Y.type=li,Y.needsUpdate=!0;let P=X*4;for(let J=0;J<S;J++){let K=M[J],it=x[J],ht=U[J],Q=N*O*4*J;for(let z=0;z<K.count;z++){let tt=z*P;b===!0&&(s.fromBufferAttribute(K,z),F[Q+tt+0]=s.x,F[Q+tt+1]=s.y,F[Q+tt+2]=s.z,F[Q+tt+3]=0),E===!0&&(s.fromBufferAttribute(it,z),F[Q+tt+4]=s.x,F[Q+tt+5]=s.y,F[Q+tt+6]=s.z,F[Q+tt+7]=0),C===!0&&(s.fromBufferAttribute(ht,z),F[Q+tt+8]=s.x,F[Q+tt+9]=s.y,F[Q+tt+10]=s.z,F[Q+tt+11]=ht.itemSize===4?s.w:1)}}g={count:S,texture:Y,size:new le(N,O)},i.set(u,g),u.addEventListener("dispose",V)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let b=0;for(let C=0;C<d.length;C++)b+=d[C];let E=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:o}}function ty(n,t,e,i,s){let o=new WeakMap;function c(d){let _=s.render.frame,S=d.geometry,g=t.get(d,S);if(o.get(g)!==_&&(t.update(g),o.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==_&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,_))),d.isSkinnedMesh){let b=d.skeleton;o.get(b)!==_&&(b.update(),o.set(b,_))}return g}function u(){o=new WeakMap}function f(d){let _=d.target;_.removeEventListener("dispose",f),i.releaseStatesOfObject(_),e.remove(_.instanceMatrix),_.instanceColor!==null&&e.remove(_.instanceColor)}return{update:c,dispose:u}}function ny(n,t,e,i,s,o){let c=new In(t,e,{type:n,depthBuffer:s,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),u=null,f=null,d=new Ze;d.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let _=new Ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),S=new ze(d,_),g=new vs(-1,1,1,-1,0,1),b=null,E=null,C=!1,M,x=null,U=[],X=!1;this.setSize=function(N,O){c.setSize(N,O),u!==null&&u.setSize(N,O),f!==null&&f.setSize(N,O);for(let F=0;F<U.length;F++){let Y=U[F];Y.setSize&&Y.setSize(N,O)}},this.setEffects=function(N){U=N,X=U.length>0&&U[0].isRenderPass===!0;let O=c.width,F=c.height;U.length>0&&u===null&&(u=new In(O,F,{type:ci,depthBuffer:!1,stencilBuffer:!1}),f=new In(O,F,{type:ci,depthBuffer:!1,stencilBuffer:!1}));for(let Y=0;Y<U.length;Y++){let P=U[Y];P.setSize&&P.setSize(O,F)}},this.begin=function(N,O){if(C||N.toneMapping===oi&&U.length===0)return!1;if(x=O,O!==null){let F=O.width,Y=O.height;(c.width!==F||c.height!==Y)&&this.setSize(F,Y)}return X===!1&&N.setRenderTarget(c),M=N.toneMapping,N.toneMapping=oi,!0},this.hasRenderPass=function(){return X},this.end=function(N,O){N.toneMapping=M,C=!0;let F=c,Y=u;for(let P=0;P<U.length;P++){let V=U[P];V.enabled!==!1&&(V.render(N,Y,F,O),V.needsSwap!==!1&&(F=Y,Y=Y===u?f:u))}if(b!==N.outputColorSpace||E!==N.toneMapping){b=N.outputColorSpace,E=N.toneMapping,_.defines={},Ie.getTransfer(b)===Ue&&(_.defines.SRGB_TRANSFER="");let P=ey[E];P&&(_.defines[P]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=F.texture,N.setRenderTarget(x),N.render(S,g),x=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),f!==null&&f.dispose(),d.dispose(),_.dispose()}}function Cs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=dd[s];if(o===void 0&&(o=new Float32Array(s),dd[s]=o),t!==0){i.toArray(o,0);for(let c=1,u=0;c!==t;++c)u+=e,n[c].toArray(o,u)}return o}function nn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function rn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Kl(n,t){let e=pd[t];e===void 0&&(e=new Int32Array(t),pd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function iy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ry(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2fv(this.addr,t),rn(e,t)}}function sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;n.uniform3fv(this.addr,t),rn(e,t)}}function oy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4fv(this.addr,t),rn(e,t)}}function ay(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,i))return;_d.set(i),n.uniformMatrix2fv(this.addr,!1,_d),rn(e,i)}}function ly(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,i))return;gd.set(i),n.uniformMatrix3fv(this.addr,!1,gd),rn(e,i)}}function cy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,i))return;md.set(i),n.uniformMatrix4fv(this.addr,!1,md),rn(e,i)}}function hy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function uy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2iv(this.addr,t),rn(e,t)}}function fy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3iv(this.addr,t),rn(e,t)}}function dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4iv(this.addr,t),rn(e,t)}}function py(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function my(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2uiv(this.addr,t),rn(e,t)}}function gy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3uiv(this.addr,t),rn(e,t)}}function _y(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4uiv(this.addr,t),rn(e,t)}}function vy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Hh.compareFunction=e.isReversedDepthBuffer()?Wl:Xl,o=Hh):o=Ld,e.setTexture2D(t||o,s)}function yy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Dd,s)}function xy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Od,s)}function Sy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Nd,s)}function My(n){switch(n){case 5126:return iy;case 35664:return ry;case 35665:return sy;case 35666:return oy;case 35674:return ay;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return hy;case 35667:case 35671:return uy;case 35668:case 35672:return fy;case 35669:case 35673:return dy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return Sy}}function by(n,t){n.uniform1fv(this.addr,t)}function wy(n,t){let e=Cs(t,this.size,2);n.uniform2fv(this.addr,e)}function Ey(n,t){let e=Cs(t,this.size,3);n.uniform3fv(this.addr,e)}function Ty(n,t){let e=Cs(t,this.size,4);n.uniform4fv(this.addr,e)}function Ay(n,t){let e=Cs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Py(n,t){let e=Cs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Cy(n,t){let e=Cs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Iy(n,t){n.uniform1iv(this.addr,t)}function Ry(n,t){n.uniform2iv(this.addr,t)}function Ly(n,t){n.uniform3iv(this.addr,t)}function Ny(n,t){n.uniform4iv(this.addr,t)}function Dy(n,t){n.uniform1uiv(this.addr,t)}function Oy(n,t){n.uniform2uiv(this.addr,t)}function Fy(n,t){n.uniform3uiv(this.addr,t)}function Uy(n,t){n.uniform4uiv(this.addr,t)}function By(n,t,e){let i=this.cache,s=t.length,o=Kl(e,s);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));let c;this.type===n.SAMPLER_2D_SHADOW?c=Hh:c=Ld;for(let u=0;u!==s;++u)e.setTexture2D(t[u]||c,o[u])}function ky(n,t,e){let i=this.cache,s=t.length,o=Kl(e,s);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let c=0;c!==s;++c)e.setTexture3D(t[c]||Dd,o[c])}function zy(n,t,e){let i=this.cache,s=t.length,o=Kl(e,s);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let c=0;c!==s;++c)e.setTextureCube(t[c]||Od,o[c])}function Vy(n,t,e){let i=this.cache,s=t.length,o=Kl(e,s);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let c=0;c!==s;++c)e.setTexture2DArray(t[c]||Nd,o[c])}function Hy(n){switch(n){case 5126:return by;case 35664:return wy;case 35665:return Ey;case 35666:return Ty;case 35674:return Ay;case 35675:return Py;case 35676:return Cy;case 5124:case 35670:return Iy;case 35667:case 35671:return Ry;case 35668:case 35672:return Ly;case 35669:case 35673:return Ny;case 5125:return Dy;case 36294:return Oy;case 36295:return Fy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return Vy}}function vd(n,t){n.seq.push(t),n.map[t.id]=t}function Gy(n,t,e){let i=n.name,s=i.length;for(zh.lastIndex=0;;){let o=zh.exec(i),c=zh.lastIndex,u=o[1],f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===s){vd(e,d===void 0?new Gh(u,n,t):new Xh(u,n,t));break}else{let S=e.map[u];S===void 0&&(S=new Wh(u),vd(e,S)),e=S}}}function yd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function Yy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=s;c<o;c++){let u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}function qy(n){Ie._getMatrix(xd,Ie.workingColorSpace,n);let t=`mat3( ${xd.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(n)){case no:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Sd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let c=/ERROR: 0:(\d+)/.exec(o);if(c){let u=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+Yy(n.getShaderSource(t),u)}else return o}function $y(n,t){let e=qy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jy(n,t){let e=Zy[t];return e===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function jy(){Ie.getLuminanceCoefficients(ql);let n=ql.x.toFixed(4),t=ql.y.toFixed(4),e=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ky(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function Qy(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),c=o.name,u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),e[c]={type:o.type,location:n.getAttribLocation(t,c),locationSize:u}}return e}function Fo(n){return n!==""}function Md(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Yh(n){return n.replace(ex,ix)}function ix(n,t){let e=Te[t];if(e===void 0){let i=nx.get(t);if(i!==void 0)e=Te[i],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Yh(e)}function wd(n){return n.replace(rx,sx)}function sx(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ed(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ax(n){return ox[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function cx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":lx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function ux(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":hx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function dx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":fx[n.combine]||"ENVMAP_BLENDING_NONE"}function px(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function mx(n,t,e,i){let s=n.getContext(),o=e.defines,c=e.vertexShader,u=e.fragmentShader,f=ax(e),d=cx(e),_=ux(e),S=dx(e),g=px(e),b=Ky(e),E=Qy(o),C=s.createProgram(),M,x,U=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Fo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Fo).join(`
`),x.length>0&&(x+=`
`)):(M=[Ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+_:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),x=[Ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+_:"",e.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Te.tonemapping_pars_fragment:"",e.toneMapping!==oi?Jy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,$y("linearToOutputTexel",e.outputColorSpace),jy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fo).join(`
`)),c=Yh(c),c=Md(c,e),c=bd(c,e),u=Yh(u),u=Md(u,e),u=bd(u,e),c=wd(c),u=wd(u),e.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",e.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let X=U+M+c,N=U+x+u,O=yd(s,s.VERTEX_SHADER,X),F=yd(s,s.FRAGMENT_SHADER,N);s.attachShader(C,O),s.attachShader(C,F),e.index0AttributeName!==void 0?s.bindAttribLocation(C,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(C,0,"position"),s.linkProgram(C);function Y(K){if(n.debug.checkShaderErrors){let it=s.getProgramInfoLog(C)||"",ht=s.getShaderInfoLog(O)||"",Q=s.getShaderInfoLog(F)||"",z=it.trim(),tt=ht.trim(),H=Q.trim(),_t=!0,at=!0;if(s.getProgramParameter(C,s.LINK_STATUS)===!1)if(_t=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,C,O,F);else{let pt=Sd(s,O,"vertex"),gt=Sd(s,F,"fragment");me("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(C,s.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+z+`
`+pt+`
`+gt)}else z!==""?de("WebGLProgram: Program Info Log:",z):(tt===""||H==="")&&(at=!1);at&&(K.diagnostics={runnable:_t,programLog:z,vertexShader:{log:tt,prefix:M},fragmentShader:{log:H,prefix:x}})}s.deleteShader(O),s.deleteShader(F),P=new Ps(s,C),V=tx(s,C)}let P;this.getUniforms=function(){return P===void 0&&Y(this),P};let V;this.getAttributes=function(){return V===void 0&&Y(this),V};let J=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=s.getProgramParameter(C,Xy)),J},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(C),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wy++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=O,this.fragmentShader=F,this}function _x(n){return n===ar||n===Lo||n===No}function vx(n,t,e,i,s,o){let c=new fs,u=new qh,f=new Set,d=[],_=new Map,S=i.logarithmicDepthBuffer,g=i.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return f.add(P),P===0?"uv":`uv${P}`}function C(P,V,J,K,it,ht){let Q=K.fog,z=it.geometry,tt=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?K.environment:null,H=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,_t=t.get(P.envMap||tt,H),at=_t&&_t.mapping===To?_t.image.height:null,pt=b[P.type];P.precision!==null&&(g=i.getMaxPrecision(P.precision),g!==P.precision&&de("WebGLProgram.getParameters:",P.precision,"not supported, using",g,"instead."));let gt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,At=gt!==void 0?gt.length:0,Ot=0;z.morphAttributes.position!==void 0&&(Ot=1),z.morphAttributes.normal!==void 0&&(Ot=2),z.morphAttributes.color!==void 0&&(Ot=3);let ue,fe,be,St;if(pt){let Fe=Si[pt];ue=Fe.vertexShader,fe=Fe.fragmentShader}else{ue=P.vertexShader,fe=P.fragmentShader;let Fe=u.getVertexShaderStage(P),Le=u.getFragmentShaderStage(P);u.update(P,Fe,Le),be=Fe.id,St=Le.id}let Et=n.getRenderTarget(),Xt=n.state.buffers.depth.getReversed(),oe=it.isInstancedMesh===!0,Ut=it.isBatchedMesh===!0,ge=!!P.map,Je=!!P.matcap,he=!!_t,Me=!!P.aoMap,Ce=!!P.lightMap,we=!!P.bumpMap&&P.wireframe===!1,De=!!P.normalMap,He=!!P.displacementMap,j=!!P.emissiveMap,ut=!!P.metalnessMap,lt=!!P.roughnessMap,k=P.anisotropy>0,Rt=P.clearcoat>0,Kt=P.dispersion>0,B=P.retroreflectivity>0,T=P.iridescence>0,G=P.sheen>0,rt=P.transmission>0,mt=k&&!!P.anisotropyMap,It=Rt&&!!P.clearcoatMap,Bt=Rt&&!!P.clearcoatNormalMap,vt=Rt&&!!P.clearcoatRoughnessMap,Tt=T&&!!P.iridescenceMap,kt=T&&!!P.iridescenceThicknessMap,jt=G&&!!P.sheenColorMap,Gt=G&&!!P.sheenRoughnessMap,Ft=!!P.specularMap,ne=!!P.specularColorMap,ae=!!P.specularIntensityMap,_e=rt&&!!P.transmissionMap,st=rt&&!!P.thicknessMap,zt=!!P.gradientMap,Mt=!!P.alphaMap,Vt=P.alphaTest>0,qt=!!P.alphaHash,Pt=!!P.extensions,Lt=oi;P.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Lt=n.toneMapping);let ee={shaderID:pt,shaderType:P.type,shaderName:P.name,vertexShader:ue,fragmentShader:fe,defines:P.defines,customVertexShaderID:be,customFragmentShaderID:St,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:g,batching:Ut,batchingColor:Ut&&it._colorsTexture!==null,instancing:oe,instancingColor:oe&&it.instanceColor!==null,instancingMorph:oe&&it.morphTexture!==null,outputColorSpace:Et===null?n.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Ie.workingColorSpace,alphaToCoverage:!!P.alphaToCoverage,map:ge,matcap:Je,envMap:he,envMapMode:he&&_t.mapping,envMapCubeUVHeight:at,aoMap:Me,lightMap:Ce,bumpMap:we,normalMap:De,displacementMap:He,emissiveMap:j,normalMapObjectSpace:De&&P.normalMapType===Yf,normalMapTangentSpace:De&&P.normalMapType===Gl,packedNormalMap:De&&P.normalMapType===Gl&&_x(P.normalMap.format),metalnessMap:ut,roughnessMap:lt,anisotropy:k,anisotropyMap:mt,clearcoat:Rt,clearcoatMap:It,clearcoatNormalMap:Bt,clearcoatRoughnessMap:vt,dispersion:Kt,retroreflection:B,iridescence:T,iridescenceMap:Tt,iridescenceThicknessMap:kt,sheen:G,sheenColorMap:jt,sheenRoughnessMap:Gt,specularMap:Ft,specularColorMap:ne,specularIntensityMap:ae,transmission:rt,transmissionMap:_e,thicknessMap:st,gradientMap:zt,opaque:P.transparent===!1&&P.blending===Ms&&P.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Vt,alphaHash:qt,combine:P.combine,mapUv:ge&&E(P.map.channel),aoMapUv:Me&&E(P.aoMap.channel),lightMapUv:Ce&&E(P.lightMap.channel),bumpMapUv:we&&E(P.bumpMap.channel),normalMapUv:De&&E(P.normalMap.channel),displacementMapUv:He&&E(P.displacementMap.channel),emissiveMapUv:j&&E(P.emissiveMap.channel),metalnessMapUv:ut&&E(P.metalnessMap.channel),roughnessMapUv:lt&&E(P.roughnessMap.channel),anisotropyMapUv:mt&&E(P.anisotropyMap.channel),clearcoatMapUv:It&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&E(P.sheenRoughnessMap.channel),specularMapUv:Ft&&E(P.specularMap.channel),specularColorMapUv:ne&&E(P.specularColorMap.channel),specularIntensityMapUv:ae&&E(P.specularIntensityMap.channel),transmissionMapUv:_e&&E(P.transmissionMap.channel),thicknessMapUv:st&&E(P.thicknessMap.channel),alphaMapUv:Mt&&E(P.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(De||k),vertexNormals:!!z.attributes.normal,vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!z.attributes.uv&&(ge||Mt),fog:!!Q,useFog:P.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:P.wireframe===!1&&(P.flatShading===!0||z.attributes.normal===void 0&&De===!1&&(P.isMeshLambertMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isMeshPhysicalMaterial)),sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Xt,skinning:it.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Ot,numSunLights:V.sun.length,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numSunLightShadows:V.sunShadowMap.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:ht.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&J.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,decodeVideoTexture:ge&&P.map.isVideoTexture===!0&&Ie.getTransfer(P.map.colorSpace)===Ue,decodeVideoTextureEmissive:j&&P.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(P.emissiveMap.colorSpace)===Ue,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===yn,flipSided:P.side===En,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Pt&&P.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&P.extensions.multiDraw===!0||Ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return ee.vertexUv1s=f.has(1),ee.vertexUv2s=f.has(2),ee.vertexUv3s=f.has(3),f.clear(),ee}function M(P){let V=[];if(P.shaderID?V.push(P.shaderID):(V.push(P.customVertexShaderID),V.push(P.customFragmentShaderID)),P.defines!==void 0)for(let J in P.defines)V.push(J),V.push(P.defines[J]);return P.isRawShaderMaterial===!1&&(x(V,P),U(V,P),V.push(n.outputColorSpace)),V.push(P.customProgramCacheKey),V.join()}function x(P,V){P.push(V.precision),P.push(V.outputColorSpace),P.push(V.envMapMode),P.push(V.envMapCubeUVHeight),P.push(V.mapUv),P.push(V.alphaMapUv),P.push(V.lightMapUv),P.push(V.aoMapUv),P.push(V.bumpMapUv),P.push(V.normalMapUv),P.push(V.displacementMapUv),P.push(V.emissiveMapUv),P.push(V.metalnessMapUv),P.push(V.roughnessMapUv),P.push(V.anisotropyMapUv),P.push(V.clearcoatMapUv),P.push(V.clearcoatNormalMapUv),P.push(V.clearcoatRoughnessMapUv),P.push(V.iridescenceMapUv),P.push(V.iridescenceThicknessMapUv),P.push(V.sheenColorMapUv),P.push(V.sheenRoughnessMapUv),P.push(V.specularMapUv),P.push(V.specularColorMapUv),P.push(V.specularIntensityMapUv),P.push(V.transmissionMapUv),P.push(V.thicknessMapUv),P.push(V.combine),P.push(V.fogExp2),P.push(V.sizeAttenuation),P.push(V.morphTargetsCount),P.push(V.morphAttributeCount),P.push(V.numSunLights),P.push(V.numDirLights),P.push(V.numPointLights),P.push(V.numSpotLights),P.push(V.numSpotLightMaps),P.push(V.numHemiLights),P.push(V.numRectAreaLights),P.push(V.numSunLightShadows),P.push(V.numDirLightShadows),P.push(V.numPointLightShadows),P.push(V.numSpotLightShadows),P.push(V.numSpotLightShadowsWithMaps),P.push(V.numLightProbes),P.push(V.shadowMapType),P.push(V.toneMapping),P.push(V.numClippingPlanes),P.push(V.numClipIntersection),P.push(V.depthPacking)}function U(P,V){c.disableAll(),V.instancing&&c.enable(0),V.instancingColor&&c.enable(1),V.instancingMorph&&c.enable(2),V.matcap&&c.enable(3),V.envMap&&c.enable(4),V.normalMapObjectSpace&&c.enable(5),V.normalMapTangentSpace&&c.enable(6),V.clearcoat&&c.enable(7),V.iridescence&&c.enable(8),V.alphaTest&&c.enable(9),V.vertexColors&&c.enable(10),V.vertexAlphas&&c.enable(11),V.vertexUv1s&&c.enable(12),V.vertexUv2s&&c.enable(13),V.vertexUv3s&&c.enable(14),V.vertexTangents&&c.enable(15),V.anisotropy&&c.enable(16),V.alphaHash&&c.enable(17),V.batching&&c.enable(18),V.dispersion&&c.enable(19),V.retroreflection&&c.enable(24),V.batchingColor&&c.enable(20),V.gradientMap&&c.enable(21),V.packedNormalMap&&c.enable(22),V.vertexNormals&&c.enable(23),P.push(c.mask),c.disableAll(),V.fog&&c.enable(0),V.useFog&&c.enable(1),V.flatShading&&c.enable(2),V.logarithmicDepthBuffer&&c.enable(3),V.reversedDepthBuffer&&c.enable(4),V.skinning&&c.enable(5),V.morphTargets&&c.enable(6),V.morphNormals&&c.enable(7),V.morphColors&&c.enable(8),V.premultipliedAlpha&&c.enable(9),V.shadowMapEnabled&&c.enable(10),V.doubleSided&&c.enable(11),V.flipSided&&c.enable(12),V.useDepthPacking&&c.enable(13),V.dithering&&c.enable(14),V.transmission&&c.enable(15),V.sheen&&c.enable(16),V.opaque&&c.enable(17),V.pointsUvs&&c.enable(18),V.decodeVideoTexture&&c.enable(19),V.decodeVideoTextureEmissive&&c.enable(20),V.alphaToCoverage&&c.enable(21),V.numLightProbeGrids>0&&c.enable(22),V.hasPositionAttribute&&c.enable(23),P.push(c.mask)}function X(P){let V=b[P.type],J;if(V){let K=Si[V];J=od.clone(K.uniforms)}else J=P.uniforms;return J}function N(P,V){let J=_.get(V);return J!==void 0?++J.usedTimes:(J=new mx(n,V,P,s),d.push(J),_.set(V,J)),J}function O(P){if(--P.usedTimes===0){let V=d.indexOf(P);d[V]=d[d.length-1],d.pop(),_.delete(P.cacheKey),P.destroy()}}function F(P){u.remove(P)}function Y(){u.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:X,acquireProgram:N,releaseProgram:O,releaseShaderCache:F,programs:d,dispose:Y}}function yx(){let n=new WeakMap;function t(c){return n.has(c)}function e(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function s(c,u,f){n.get(c)[u]=f}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function xx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Td(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ad(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function c(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function u(g,b,E,C,M,x){let U=n[t];return U===void 0?(U={id:g.id,object:g,geometry:b,material:E,materialVariant:c(g),groupOrder:C,renderOrder:g.renderOrder,z:M,group:x},n[t]=U):(U.id=g.id,U.object=g,U.geometry=b,U.material=E,U.materialVariant=c(g),U.groupOrder=C,U.renderOrder=g.renderOrder,U.z=M,U.group=x),t++,U}function f(g,b,E,C,M,x,U){U.reversedDepth===!0&&(M=-M);let X=u(g,b,E,C,M,x);E.transmission>0?i.push(X):E.transparent===!0?s.push(X):e.push(X)}function d(g,b,E,C,M,x){let U=u(g,b,E,C,M,x);E.transmission>0?i.unshift(U):E.transparent===!0?s.unshift(U):e.unshift(U)}function _(g,b){e.length>1&&e.sort(g||xx),i.length>1&&i.sort(b||Td),s.length>1&&s.sort(b||Td)}function S(){for(let g=t,b=n.length;g<b;g++){let E=n[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:f,unshift:d,finish:S,sort:_}}function Sx(){let n=new WeakMap;function t(i,s){let o=n.get(i),c;return o===void 0?(c=new Ad,n.set(i,[c])):s>=o.length?(c=new Ad,o.push(c)):c=o[s],c}function e(){n=new WeakMap}return{get:t,dispose:e}}function Mx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ot,color:new xe};break;case"SpotLight":e={position:new ot,direction:new ot,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ot,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ot,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return n[t.id]=e,e}}}function bx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function Ex(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Tx(n){let t=new Mx,e=bx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ot);let s=new ot,o=new We,c=new We;function u(d){let _=0,S=0,g=0;for(let it=0;it<9;it++)i.probe[it].set(0,0,0);let b=0,E=0,C=0,M=0,x=0,U=0,X=0,N=0,O=0,F=0,Y=0,P=0,V=0,J=0;d.sort(Ex);for(let it=0,ht=d.length;it<ht;it++){let Q=d[it],z=Q.color,tt=Q.intensity,H=Q.distance,_t=null;if(Q.shadow&&Q.shadow.map&&(Q.shadow.map.texture.format===ar?_t=Q.shadow.map.texture:_t=Q.shadow.map.depthTexture||Q.shadow.map.texture),Q.isAmbientLight)_+=z.r*tt,S+=z.g*tt,g+=z.b*tt;else if(Q.isLightProbe){for(let at=0;at<9;at++)i.probe[at].addScaledVector(Q.sh.coefficients[at],tt);J++}else if(Q.isSunLight){let at=t.get(Q);if(at.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){let pt=Q.shadow,gt=e.get(Q);gt.shadowIntensity=pt.intensity,gt.shadowBias=pt.bias,gt.shadowNormalBias=pt.normalBias,gt.shadowRadius=pt.radius,gt.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),i.sunShadow[E]=gt,i.sunShadowMap[E]=_t;let At=pt.getViewportCount();for(let Ot=0;Ot<At;Ot++)i.sunShadowMatrix[C+Ot]=pt.getMatrix(Ot),i.sunShadowCascade[C+Ot]=pt._cascadeData[Ot];C+=At,E++}i.sun[b]=at,b++}else if(Q.isDirectionalLight){let at=t.get(Q);if(at.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){let pt=Q.shadow,gt=e.get(Q);gt.shadowIntensity=pt.intensity,gt.shadowBias=pt.bias,gt.shadowNormalBias=pt.normalBias,gt.shadowRadius=pt.radius,gt.shadowMapSize=pt.mapSize,i.directionalShadow[M]=gt,i.directionalShadowMap[M]=_t,i.directionalShadowMatrix[M]=Q.shadow.matrix,O++}i.directional[M]=at,M++}else if(Q.isSpotLight){let at=t.get(Q);at.position.setFromMatrixPosition(Q.matrixWorld),at.color.copy(z).multiplyScalar(tt),at.distance=H,at.coneCos=Math.cos(Q.angle),at.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),at.decay=Q.decay,i.spot[U]=at;let pt=Q.shadow;if(Q.map&&(i.spotLightMap[P]=Q.map,P++,pt.updateMatrices(Q),Q.castShadow&&V++),i.spotLightMatrix[U]=pt.matrix,Q.castShadow){let gt=e.get(Q);gt.shadowIntensity=pt.intensity,gt.shadowBias=pt.bias,gt.shadowNormalBias=pt.normalBias,gt.shadowRadius=pt.radius,gt.shadowMapSize=pt.mapSize,i.spotShadow[U]=gt,i.spotShadowMap[U]=_t,Y++}U++}else if(Q.isRectAreaLight){let at=t.get(Q);at.color.copy(z).multiplyScalar(tt),at.halfWidth.set(Q.width*.5,0,0),at.halfHeight.set(0,Q.height*.5,0),i.rectArea[X]=at,X++}else if(Q.isPointLight){let at=t.get(Q);if(at.color.copy(Q.color).multiplyScalar(Q.intensity),at.distance=Q.distance,at.decay=Q.decay,Q.castShadow){let pt=Q.shadow,gt=e.get(Q);gt.shadowIntensity=pt.intensity,gt.shadowBias=pt.bias,gt.shadowNormalBias=pt.normalBias,gt.shadowRadius=pt.radius,gt.shadowMapSize=pt.mapSize,gt.shadowCameraNear=pt.camera.near,gt.shadowCameraFar=pt.camera.far,i.pointShadow[x]=gt,i.pointShadowMap[x]=_t,i.pointShadowMatrix[x]=Q.shadow.matrix,F++}i.point[x]=at,x++}else if(Q.isHemisphereLight){let at=t.get(Q);at.skyColor.copy(Q.color).multiplyScalar(tt),at.groundColor.copy(Q.groundColor).multiplyScalar(tt),i.hemi[N]=at,N++}}X>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Zt.LTC_FLOAT_1,i.rectAreaLTC2=Zt.LTC_FLOAT_2):(i.rectAreaLTC1=Zt.LTC_HALF_1,i.rectAreaLTC2=Zt.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=S,i.ambient[2]=g;let K=i.hash;(K.sunLength!==b||K.directionalLength!==M||K.pointLength!==x||K.spotLength!==U||K.rectAreaLength!==X||K.hemiLength!==N||K.numSunShadows!==E||K.numDirectionalShadows!==O||K.numPointShadows!==F||K.numSpotShadows!==Y||K.numSpotMaps!==P||K.numLightProbes!==J)&&(i.sun.length=b,i.directional.length=M,i.spot.length=U,i.rectArea.length=X,i.point.length=x,i.hemi.length=N,i.sunShadow.length=E,i.sunShadowMap.length=E,i.sunShadowMatrix.length=C,i.sunShadowCascade.length=C,i.directionalShadow.length=O,i.directionalShadowMap.length=O,i.directionalShadowMatrix.length=O,i.pointShadow.length=F,i.pointShadowMap.length=F,i.pointShadowMatrix.length=F,i.spotShadow.length=Y,i.spotShadowMap.length=Y,i.spotLightMatrix.length=Y+P-V,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=J,K.sunLength=b,K.directionalLength=M,K.pointLength=x,K.spotLength=U,K.rectAreaLength=X,K.hemiLength=N,K.numSunShadows=E,K.numDirectionalShadows=O,K.numPointShadows=F,K.numSpotShadows=Y,K.numSpotMaps=P,K.numLightProbes=J,i.version=wx++)}function f(d,_){let S=0,g=0,b=0,E=0,C=0,M=0,x=_.matrixWorldInverse;for(let U=0,X=d.length;U<X;U++){let N=d[U];if(N.isSunLight){let O=i.sun[S];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(x),S++}else if(N.isDirectionalLight){let O=i.directional[g];O.direction.setFromMatrixPosition(N.matrixWorld),s.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(x),g++}else if(N.isSpotLight){let O=i.spot[E];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(x),O.direction.setFromMatrixPosition(N.matrixWorld),s.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(x),E++}else if(N.isRectAreaLight){let O=i.rectArea[C];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(x),c.identity(),o.copy(N.matrixWorld),o.premultiply(x),c.extractRotation(o),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(c),O.halfHeight.applyMatrix4(c),C++}else if(N.isPointLight){let O=i.point[b];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(x),b++}else if(N.isHemisphereLight){let O=i.hemi[M];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(x),M++}}}return{setup:u,setupView:f,state:i}}function Pd(n){let t=new Tx(n),e=[],i=[],s=[];function o(g){S.camera=g,e.length=0,i.length=0,s.length=0}function c(g){e.push(g)}function u(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(e)}function _(g){t.setupView(e,g)}let S={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:S,setupLights:d,setupLightsView:_,pushLight:c,pushShadow:u,pushLightProbeGrid:f}}function Ax(n){let t=new WeakMap;function e(s,o=0){let c=t.get(s),u;return c===void 0?(u=new Pd(n),t.set(s,[u])):o>=c.length?(u=new Pd(n),c.push(u)):u=c[o],u}function i(){t=new WeakMap}return{get:e,dispose:i}}function Lx(n,t,e){let i=new ms,s=new le,o=new le,c=new je,u=new Ga,f=new Xa,d={},_=e.maxTextureSize,S={[ir]:En,[En]:ir,[yn]:yn},g=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Px,fragmentShader:Cx}),b=g.clone();b.defines.HORIZONTAL_PASS=1;let E=new Ze;E.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new ze(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let x=this.type;this.render=function(F,Y,P){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;this.type===bf&&(de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Eo);let V=n.getRenderTarget(),J=n.getActiveCubeFace(),K=n.getActiveMipmapLevel(),it=n.state;it.setBlending(yi),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);let ht=x!==this.type;ht&&Y.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(z=>z.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,z=F.length;Q<z;Q++){let tt=F[Q],H=tt.shadow;if(H===void 0){de("WebGLShadowMap:",tt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let _t=H.getFrameExtents();s.multiply(_t),o.copy(H.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(o.x=Math.floor(_/_t.x),s.x=o.x*_t.x,H.mapSize.x=o.x),s.y>_&&(o.y=Math.floor(_/_t.y),s.y=o.y*_t.y,H.mapSize.y=o.y));let at=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=at,H.map===null||ht===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ss){if(tt.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new In(s.x,s.y,{format:ar,type:ci,minFilter:fn,magFilter:fn,generateMipmaps:!1}),H.map.texture.name=tt.name+".shadowMap",H.map.depthTexture=new Zi(s.x,s.y,li),H.map.depthTexture.name=tt.name+".shadowMapDepth",H.map.depthTexture.format=_i,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=cn,H.map.depthTexture.magFilter=cn}else tt.isPointLight?(H.map=new Zl(s.x),H.map.depthTexture=new Va(s.x,ai)):(H.map=new In(s.x,s.y),H.map.depthTexture=new Zi(s.x,s.y,ai)),H.map.depthTexture.name=tt.name+".shadowMap",H.map.depthTexture.format=_i,this.type===Eo?(H.map.depthTexture.compareFunction=at?Wl:Xl,H.map.depthTexture.minFilter=fn,H.map.depthTexture.magFilter=fn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=cn,H.map.depthTexture.magFilter=cn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let pt=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();tt.isPointLight!==!0&&H.updateMatrices(tt,P);for(let gt=0;gt<pt;gt++){let At=H.getCamera(gt);if(tt.isPointLight){let Ot=H.camera,ue=H.matrix,fe=tt.distance||Ot.far;fe!==Ot.far&&(Ot.far=fe,Ot.updateProjectionMatrix()),Oo.setFromMatrixPosition(tt.matrixWorld),Ot.position.copy(Oo),Vh.copy(Ot.position),Vh.add(Ix[gt]),Ot.up.copy(Rx[gt]),Ot.lookAt(Vh),Ot.updateMatrixWorld(),ue.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Cd.multiplyMatrices(Ot.projectionMatrix,Ot.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Cd,Ot.coordinateSystem,Ot.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,gt),n.clear();else{gt===0&&(n.setRenderTarget(H.map),n.clear());let Ot=H.getViewport(gt);c.set(o.x*Ot.x,o.y*Ot.y,o.x*Ot.z,o.y*Ot.w),it.viewport(c)}i=H.getFrustum(gt),N(Y,P,At,tt,this.type)}H.isPointLightShadow!==!0&&this.type===Ss&&U(H,P),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,n.setRenderTarget(V,J,K)};function U(F,Y){let P=t.update(C);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,b.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),F.mapPass===null?F.mapPass=new In(s.x,s.y,{format:ar,type:ci}):(F.mapPass.width!==F.map.width||F.mapPass.height!==F.map.height)&&F.mapPass.setSize(F.map.width,F.map.height),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value.set(F.map.width,F.map.height),g.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(Y,null,P,g,C,null),b.uniforms.shadow_pass.value=F.mapPass.texture,b.uniforms.resolution.value.set(F.map.width,F.map.height),b.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(Y,null,P,b,C,null)}function X(F,Y,P,V){let J=null,K=P.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(K!==void 0)J=K;else if(J=P.isPointLight===!0?f:u,n.localClippingEnabled&&Y.clipShadows===!0&&Array.isArray(Y.clippingPlanes)&&Y.clippingPlanes.length!==0||Y.displacementMap&&Y.displacementScale!==0||Y.alphaMap&&Y.alphaTest>0||Y.map&&Y.alphaTest>0||Y.alphaToCoverage===!0){let it=J.uuid,ht=Y.uuid,Q=d[it];Q===void 0&&(Q={},d[it]=Q);let z=Q[ht];z===void 0&&(z=J.clone(),Q[ht]=z,Y.addEventListener("dispose",O)),J=z}if(J.visible=Y.visible,J.wireframe=Y.wireframe,V===Ss?J.side=Y.shadowSide!==null?Y.shadowSide:Y.side:J.side=Y.shadowSide!==null?Y.shadowSide:S[Y.side],J.alphaMap=Y.alphaMap,J.alphaTest=Y.alphaToCoverage===!0?.5:Y.alphaTest,J.map=Y.map,J.clipShadows=Y.clipShadows,J.clippingPlanes=Y.clippingPlanes,J.clipIntersection=Y.clipIntersection,J.displacementMap=Y.displacementMap,J.displacementScale=Y.displacementScale,J.displacementBias=Y.displacementBias,J.wireframeLinewidth=Y.wireframeLinewidth,J.linewidth=Y.linewidth,P.isPointLight===!0&&J.isMeshDistanceMaterial===!0){let it=n.properties.get(J);it.light=P}return J}function N(F,Y,P,V,J){if(F.visible===!1)return;if(F.layers.test(Y.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&J===Ss)&&(!F.frustumCulled||F.intersectsFrustum(i))){F.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,F.matrixWorld);let ht=t.update(F),Q=F.material;if(Array.isArray(Q)){let z=ht.groups;for(let tt=0,H=z.length;tt<H;tt++){let _t=z[tt],at=Q[_t.materialIndex];if(at&&at.visible){let pt=X(F,at,V,J);F.onBeforeShadow(n,F,Y,P,ht,pt,_t),n.renderBufferDirect(P,null,ht,pt,F,_t),F.onAfterShadow(n,F,Y,P,ht,pt,_t)}}}else if(Q.visible){let z=X(F,Q,V,J);F.onBeforeShadow(n,F,Y,P,ht,z,null),n.renderBufferDirect(P,null,ht,z,F,null),F.onAfterShadow(n,F,Y,P,ht,z,null)}}let it=F.children;for(let ht=0,Q=it.length;ht<Q;ht++)N(it[ht],Y,P,V,J)}function O(F){F.target.removeEventListener("dispose",O);for(let P in d){let V=d[P],J=F.target.uuid;J in V&&(V[J].dispose(),delete V[J])}}}function Nx(n,t){function e(){let st=!1,zt=new je,Mt=null,Vt=new je(0,0,0,0);return{setMask:function(qt){Mt!==qt&&!st&&(n.colorMask(qt,qt,qt,qt),Mt=qt)},setLocked:function(qt){st=qt},setClear:function(qt,Pt,Lt,ee,Fe){Fe===!0&&(qt*=ee,Pt*=ee,Lt*=ee),zt.set(qt,Pt,Lt,ee),Vt.equals(zt)===!1&&(n.clearColor(qt,Pt,Lt,ee),Vt.copy(zt))},reset:function(){st=!1,Mt=null,Vt.set(-1,0,0,0)}}}function i(){let st=!1,zt=!1,Mt=null,Vt=null,qt=null;return{setReversed:function(Pt){if(zt!==Pt){let Lt=t.get("EXT_clip_control");Pt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),zt=Pt;let ee=qt;qt=null,this.setClear(ee)}},getReversed:function(){return zt},setTest:function(Pt){Pt?Et(n.DEPTH_TEST):Xt(n.DEPTH_TEST)},setMask:function(Pt){Mt!==Pt&&!st&&(n.depthMask(Pt),Mt=Pt)},setFunc:function(Pt){if(zt&&(Pt=id[Pt]),Vt!==Pt){switch(Pt){case wa:n.depthFunc(n.NEVER);break;case Ea:n.depthFunc(n.ALWAYS);break;case Ta:n.depthFunc(n.LESS);break;case as:n.depthFunc(n.LEQUAL);break;case Aa:n.depthFunc(n.EQUAL);break;case Pa:n.depthFunc(n.GEQUAL);break;case Ca:n.depthFunc(n.GREATER);break;case Ia:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Vt=Pt}},setLocked:function(Pt){st=Pt},setClear:function(Pt){qt!==Pt&&(qt=Pt,zt&&(Pt=1-Pt),n.clearDepth(Pt))},reset:function(){st=!1,Mt=null,Vt=null,qt=null,zt=!1}}}function s(){let st=!1,zt=null,Mt=null,Vt=null,qt=null,Pt=null,Lt=null,ee=null,Fe=null;return{setTest:function(Le){st||(Le?Et(n.STENCIL_TEST):Xt(n.STENCIL_TEST))},setMask:function(Le){zt!==Le&&!st&&(n.stencilMask(Le),zt=Le)},setFunc:function(Le,Sn,Tn){(Mt!==Le||Vt!==Sn||qt!==Tn)&&(n.stencilFunc(Le,Sn,Tn),Mt=Le,Vt=Sn,qt=Tn)},setOp:function(Le,Sn,Tn){(Pt!==Le||Lt!==Sn||ee!==Tn)&&(n.stencilOp(Le,Sn,Tn),Pt=Le,Lt=Sn,ee=Tn)},setLocked:function(Le){st=Le},setClear:function(Le){Fe!==Le&&(n.clearStencil(Le),Fe=Le)},reset:function(){st=!1,zt=null,Mt=null,Vt=null,qt=null,Pt=null,Lt=null,ee=null,Fe=null}}}let o=new e,c=new i,u=new s,f=new WeakMap,d=new WeakMap,_={},S={},g={},b=new WeakMap,E=[],C=null,M=!1,x=null,U=null,X=null,N=null,O=null,F=null,Y=null,P=new xe(0,0,0),V=0,J=!1,K=null,it=null,ht=null,Q=null,z=null,tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,_t=0,at=n.getParameter(n.VERSION);at.indexOf("WebGL")!==-1?(_t=parseFloat(/^WebGL (\d)/.exec(at)[1]),H=_t>=1):at.indexOf("OpenGL ES")!==-1&&(_t=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),H=_t>=2);let pt=null,gt={},At=n.getParameter(n.SCISSOR_BOX),Ot=n.getParameter(n.VIEWPORT),ue=new je().fromArray(At),fe=new je().fromArray(Ot);function be(st,zt,Mt,Vt){let qt=new Uint8Array(4),Pt=n.createTexture();n.bindTexture(st,Pt),n.texParameteri(st,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(st,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<Mt;Lt++)st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?n.texImage3D(zt,0,n.RGBA,1,1,Vt,0,n.RGBA,n.UNSIGNED_BYTE,qt):n.texImage2D(zt+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,qt);return Pt}let St={};St[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Et(n.DEPTH_TEST),c.setFunc(as),we(!1),De(sh),Et(n.CULL_FACE),Me(yi);function Et(st){_[st]!==!0&&(n.enable(st),_[st]=!0)}function Xt(st){_[st]!==!1&&(n.disable(st),_[st]=!1)}function oe(st,zt){return g[st]!==zt?(n.bindFramebuffer(st,zt),g[st]=zt,st===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=zt),st===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=zt),!0):!1}function Ut(st,zt){let Mt=E,Vt=!1;if(st){Mt=b.get(zt),Mt===void 0&&(Mt=[],b.set(zt,Mt));let qt=st.textures;if(Mt.length!==qt.length||Mt[0]!==n.COLOR_ATTACHMENT0){for(let Pt=0,Lt=qt.length;Pt<Lt;Pt++)Mt[Pt]=n.COLOR_ATTACHMENT0+Pt;Mt.length=qt.length,Vt=!0}}else Mt[0]!==n.BACK&&(Mt[0]=n.BACK,Vt=!0);Vt&&n.drawBuffers(Mt)}function ge(st){return C!==st?(n.useProgram(st),C=st,!0):!1}let Je={[Sr]:n.FUNC_ADD,[Ef]:n.FUNC_SUBTRACT,[Tf]:n.FUNC_REVERSE_SUBTRACT};Je[Af]=n.MIN,Je[Pf]=n.MAX;let he={[Cf]:n.ZERO,[If]:n.ONE,[Rf]:n.SRC_COLOR,[ch]:n.SRC_ALPHA,[Uf]:n.SRC_ALPHA_SATURATE,[Of]:n.DST_COLOR,[Nf]:n.DST_ALPHA,[Lf]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[Ff]:n.ONE_MINUS_DST_COLOR,[Df]:n.ONE_MINUS_DST_ALPHA,[Bf]:n.CONSTANT_COLOR,[kf]:n.ONE_MINUS_CONSTANT_COLOR,[zf]:n.CONSTANT_ALPHA,[Vf]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(st,zt,Mt,Vt,qt,Pt,Lt,ee,Fe,Le){if(st===yi){M===!0&&(Xt(n.BLEND),M=!1);return}if(M===!1&&(Et(n.BLEND),M=!0),st!==wf){if(st!==x||Le!==J){if((U!==Sr||O!==Sr)&&(n.blendEquation(n.FUNC_ADD),U=Sr,O=Sr),Le)switch(st){case Ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oh:n.blendFunc(n.ONE,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:me("WebGLState: Invalid blending: ",st);break}else switch(st){case Ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ah:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",st);break}X=null,N=null,F=null,Y=null,P.set(0,0,0),V=0,x=st,J=Le}return}qt=qt||zt,Pt=Pt||Mt,Lt=Lt||Vt,(zt!==U||qt!==O)&&(n.blendEquationSeparate(Je[zt],Je[qt]),U=zt,O=qt),(Mt!==X||Vt!==N||Pt!==F||Lt!==Y)&&(n.blendFuncSeparate(he[Mt],he[Vt],he[Pt],he[Lt]),X=Mt,N=Vt,F=Pt,Y=Lt),(ee.equals(P)===!1||Fe!==V)&&(n.blendColor(ee.r,ee.g,ee.b,Fe),P.copy(ee),V=Fe),x=st,J=!1}function Ce(st,zt){st.side===yn?Xt(n.CULL_FACE):Et(n.CULL_FACE);let Mt=st.side===En;zt&&(Mt=!Mt),we(Mt),st.blending===Ms&&st.transparent===!1?Me(yi):Me(st.blending,st.blendEquation,st.blendSrc,st.blendDst,st.blendEquationAlpha,st.blendSrcAlpha,st.blendDstAlpha,st.blendColor,st.blendAlpha,st.premultipliedAlpha),c.setFunc(st.depthFunc),c.setTest(st.depthTest),c.setMask(st.depthWrite),o.setMask(st.colorWrite);let Vt=st.stencilWrite;u.setTest(Vt),Vt&&(u.setMask(st.stencilWriteMask),u.setFunc(st.stencilFunc,st.stencilRef,st.stencilFuncMask),u.setOp(st.stencilFail,st.stencilZFail,st.stencilZPass)),j(st.polygonOffset,st.polygonOffsetFactor,st.polygonOffsetUnits),st.alphaToCoverage===!0?Et(n.SAMPLE_ALPHA_TO_COVERAGE):Xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(st){K!==st&&(st?n.frontFace(n.CW):n.frontFace(n.CCW),K=st)}function De(st){st!==Sf?(Et(n.CULL_FACE),st!==it&&(st===sh?n.cullFace(n.BACK):st===Mf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xt(n.CULL_FACE),it=st}function He(st){st!==ht&&(H&&n.lineWidth(st),ht=st)}function j(st,zt,Mt){st?(Et(n.POLYGON_OFFSET_FILL),(Q!==zt||z!==Mt)&&(Q=zt,z=Mt,c.getReversed()&&(zt=-zt),n.polygonOffset(zt,Mt))):Xt(n.POLYGON_OFFSET_FILL)}function ut(st){st?Et(n.SCISSOR_TEST):Xt(n.SCISSOR_TEST)}function lt(st){st===void 0&&(st=n.TEXTURE0+tt-1),pt!==st&&(n.activeTexture(st),pt=st)}function k(st,zt,Mt){Mt===void 0&&(pt===null?Mt=n.TEXTURE0+tt-1:Mt=pt);let Vt=gt[Mt];Vt===void 0&&(Vt={type:void 0,texture:void 0},gt[Mt]=Vt),(Vt.type!==st||Vt.texture!==zt)&&(pt!==Mt&&(n.activeTexture(Mt),pt=Mt),n.bindTexture(st,zt||St[st]),Vt.type=st,Vt.texture=zt)}function Rt(){let st=gt[pt];st!==void 0&&st.type!==void 0&&(n.bindTexture(st.type,null),st.type=void 0,st.texture=void 0)}function Kt(){try{n.compressedTexImage2D(...arguments)}catch(st){me("WebGLState:",st)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(st){me("WebGLState:",st)}}function T(){try{n.texSubImage2D(...arguments)}catch(st){me("WebGLState:",st)}}function G(){try{n.texSubImage3D(...arguments)}catch(st){me("WebGLState:",st)}}function rt(){try{n.compressedTexSubImage2D(...arguments)}catch(st){me("WebGLState:",st)}}function mt(){try{n.compressedTexSubImage3D(...arguments)}catch(st){me("WebGLState:",st)}}function It(){try{n.texStorage2D(...arguments)}catch(st){me("WebGLState:",st)}}function Bt(){try{n.texStorage3D(...arguments)}catch(st){me("WebGLState:",st)}}function vt(){try{n.texImage2D(...arguments)}catch(st){me("WebGLState:",st)}}function Tt(){try{n.texImage3D(...arguments)}catch(st){me("WebGLState:",st)}}function kt(st){return S[st]!==void 0?S[st]:n.getParameter(st)}function jt(st,zt){S[st]!==zt&&(n.pixelStorei(st,zt),S[st]=zt)}function Gt(st){ue.equals(st)===!1&&(n.scissor(st.x,st.y,st.z,st.w),ue.copy(st))}function Ft(st){fe.equals(st)===!1&&(n.viewport(st.x,st.y,st.z,st.w),fe.copy(st))}function ne(st,zt){let Mt=d.get(zt);Mt===void 0&&(Mt=new WeakMap,d.set(zt,Mt));let Vt=Mt.get(st);Vt===void 0&&(Vt=n.getUniformBlockIndex(zt,st.name),Mt.set(st,Vt))}function ae(st,zt){let Vt=d.get(zt).get(st);f.get(zt)!==Vt&&(n.uniformBlockBinding(zt,Vt,st.__bindingPointIndex),f.set(zt,Vt))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),_={},S={},pt=null,gt={},g={},b=new WeakMap,E=[],C=null,M=!1,x=null,U=null,X=null,N=null,O=null,F=null,Y=null,P=new xe(0,0,0),V=0,J=!1,K=null,it=null,ht=null,Q=null,z=null,ue.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Et,disable:Xt,bindFramebuffer:oe,drawBuffers:Ut,useProgram:ge,setBlending:Me,setMaterial:Ce,setFlipSided:we,setCullFace:De,setLineWidth:He,setPolygonOffset:j,setScissorTest:ut,activeTexture:lt,bindTexture:k,unbindTexture:Rt,compressedTexImage2D:Kt,compressedTexImage3D:B,texImage2D:vt,texImage3D:Tt,pixelStorei:jt,getParameter:kt,updateUBOMapping:ne,uniformBlockBinding:ae,texStorage2D:It,texStorage3D:Bt,texSubImage2D:T,texSubImage3D:G,compressedTexSubImage2D:rt,compressedTexSubImage3D:mt,scissor:Gt,viewport:Ft,reset:_e}}function Dx(n,t,e,i,s,o,c){let u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new le,_=new WeakMap,S=new Set,g,b=new WeakMap,E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(B,T){return E?new OffscreenCanvas(B,T):io("canvas")}function M(B,T,G){let rt=1,mt=Kt(B);if((mt.width>G||mt.height>G)&&(rt=G/Math.max(mt.width,mt.height)),rt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let It=Math.floor(rt*mt.width),Bt=Math.floor(rt*mt.height);g===void 0&&(g=C(It,Bt));let vt=T?C(It,Bt):g;return vt.width=It,vt.height=Bt,vt.getContext("2d").drawImage(B,0,0,It,Bt),de("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+It+"x"+Bt+")."),vt}else return"data"in B&&de("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),B;return B}function x(B){return B.generateMipmaps}function U(B){n.generateMipmap(B)}function X(B){return B.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?n.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function N(B,T,G,rt,mt,It=!1){if(B!==null){if(n[B]!==void 0)return n[B];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Bt;rt&&(Bt=t.get("EXT_texture_norm16"),Bt||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let vt=T;if(T===n.RED&&(G===n.FLOAT&&(vt=n.R32F),G===n.HALF_FLOAT&&(vt=n.R16F),G===n.UNSIGNED_BYTE&&(vt=n.R8),G===n.UNSIGNED_SHORT&&Bt&&(vt=Bt.R16_EXT),G===n.SHORT&&Bt&&(vt=Bt.R16_SNORM_EXT)),T===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(vt=n.R8UI),G===n.UNSIGNED_SHORT&&(vt=n.R16UI),G===n.UNSIGNED_INT&&(vt=n.R32UI),G===n.BYTE&&(vt=n.R8I),G===n.SHORT&&(vt=n.R16I),G===n.INT&&(vt=n.R32I)),T===n.RG&&(G===n.FLOAT&&(vt=n.RG32F),G===n.HALF_FLOAT&&(vt=n.RG16F),G===n.UNSIGNED_BYTE&&(vt=n.RG8),G===n.UNSIGNED_SHORT&&Bt&&(vt=Bt.RG16_EXT),G===n.SHORT&&Bt&&(vt=Bt.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(vt=n.RG8UI),G===n.UNSIGNED_SHORT&&(vt=n.RG16UI),G===n.UNSIGNED_INT&&(vt=n.RG32UI),G===n.BYTE&&(vt=n.RG8I),G===n.SHORT&&(vt=n.RG16I),G===n.INT&&(vt=n.RG32I)),T===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(vt=n.RGB8UI),G===n.UNSIGNED_SHORT&&(vt=n.RGB16UI),G===n.UNSIGNED_INT&&(vt=n.RGB32UI),G===n.BYTE&&(vt=n.RGB8I),G===n.SHORT&&(vt=n.RGB16I),G===n.INT&&(vt=n.RGB32I)),T===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(vt=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(vt=n.RGBA16UI),G===n.UNSIGNED_INT&&(vt=n.RGBA32UI),G===n.BYTE&&(vt=n.RGBA8I),G===n.SHORT&&(vt=n.RGBA16I),G===n.INT&&(vt=n.RGBA32I)),T===n.RGB&&(G===n.UNSIGNED_SHORT&&Bt&&(vt=Bt.RGB16_EXT),G===n.SHORT&&Bt&&(vt=Bt.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(vt=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(vt=n.R11F_G11F_B10F)),T===n.RGBA){let Tt=It?no:Ie.getTransfer(mt);G===n.FLOAT&&(vt=n.RGBA32F),G===n.HALF_FLOAT&&(vt=n.RGBA16F),G===n.UNSIGNED_BYTE&&(vt=Tt===Ue?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&Bt&&(vt=Bt.RGBA16_EXT),G===n.SHORT&&Bt&&(vt=Bt.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(vt=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(vt=n.RGB5_A1)}return(vt===n.R16F||vt===n.R32F||vt===n.RG16F||vt===n.RG32F||vt===n.RGBA16F||vt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function O(B,T){let G;return B?T===null||T===ai||T===ws?G=n.DEPTH24_STENCIL8:T===li?G=n.DEPTH32F_STENCIL8:T===bs&&(G=n.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ai||T===ws?G=n.DEPTH_COMPONENT24:T===li?G=n.DEPTH_COMPONENT32F:T===bs&&(G=n.DEPTH_COMPONENT16),G}function F(B,T){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==cn&&B.minFilter!==fn?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function Y(B){let T=B.target;T.removeEventListener("dispose",Y),V(T),T.isVideoTexture&&_.delete(T),T.isHTMLTexture&&S.delete(T)}function P(B){let T=B.target;T.removeEventListener("dispose",P),K(T)}function V(B){let T=i.get(B);if(T.__webglInit===void 0)return;let G=B.source,rt=b.get(G);if(rt){let mt=rt[T.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&J(B),Object.keys(rt).length===0&&b.delete(G)}i.remove(B)}function J(B){let T=i.get(B);n.deleteTexture(T.__webglTexture);let G=B.source,rt=b.get(G);delete rt[T.__cacheKey],c.memory.textures--}function K(B){let T=i.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),i.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(T.__webglFramebuffer[rt]))for(let mt=0;mt<T.__webglFramebuffer[rt].length;mt++)n.deleteFramebuffer(T.__webglFramebuffer[rt][mt]);else n.deleteFramebuffer(T.__webglFramebuffer[rt]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[rt])}else{if(Array.isArray(T.__webglFramebuffer))for(let rt=0;rt<T.__webglFramebuffer.length;rt++)n.deleteFramebuffer(T.__webglFramebuffer[rt]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let rt=0;rt<T.__webglColorRenderbuffer.length;rt++)T.__webglColorRenderbuffer[rt]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[rt]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let G=B.textures;for(let rt=0,mt=G.length;rt<mt;rt++){let It=i.get(G[rt]);It.__webglTexture&&(n.deleteTexture(It.__webglTexture),c.memory.textures--),i.remove(G[rt])}i.remove(B)}let it=0;function ht(){it=0}function Q(){return it}function z(B){it=B}function tt(){let B=it;return B>=s.maxTextures&&de("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),it+=1,B}function H(B){let T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function _t(B,T){let G=i.get(B);if(B.isVideoTexture&&k(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&G.__version!==B.version){let rt=B.image;if(rt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(G,B,T);return}}else B.isExternalTexture&&(G.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+T)}function at(B,T){let G=i.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&G.__version!==B.version){Xt(G,B,T);return}else B.isExternalTexture&&(G.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+T)}function pt(B,T){let G=i.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&G.__version!==B.version){Xt(G,B,T);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+T)}function gt(B,T){let G=i.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&G.__version!==B.version){oe(G,B,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+T)}let At={[Ra]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[La]:n.MIRRORED_REPEAT},Ot={[cn]:n.NEAREST,[Xf]:n.NEAREST_MIPMAP_NEAREST,[Ao]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[ol]:n.LINEAR_MIPMAP_NEAREST,[sr]:n.LINEAR_MIPMAP_LINEAR},ue={[$f]:n.NEVER,[Qf]:n.ALWAYS,[Zf]:n.LESS,[Xl]:n.LEQUAL,[Jf]:n.EQUAL,[Wl]:n.GEQUAL,[jf]:n.GREATER,[Kf]:n.NOTEQUAL};function fe(B,T){if(T.type===li&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===fn||T.magFilter===ol||T.magFilter===Ao||T.magFilter===sr||T.minFilter===fn||T.minFilter===ol||T.minFilter===Ao||T.minFilter===sr)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(B,n.TEXTURE_WRAP_S,At[T.wrapS]),n.texParameteri(B,n.TEXTURE_WRAP_T,At[T.wrapT]),(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)&&n.texParameteri(B,n.TEXTURE_WRAP_R,At[T.wrapR]),n.texParameteri(B,n.TEXTURE_MAG_FILTER,Ot[T.magFilter]),n.texParameteri(B,n.TEXTURE_MIN_FILTER,Ot[T.minFilter]),T.compareFunction&&(n.texParameteri(B,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(B,n.TEXTURE_COMPARE_FUNC,ue[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===cn||T.minFilter!==Ao&&T.minFilter!==sr||T.type===li&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(B,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function be(B,T){let G=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",Y));let rt=T.source,mt=b.get(rt);mt===void 0&&(mt={},b.set(rt,mt));let It=H(T);if(It!==B.__cacheKey){mt[It]===void 0&&(mt[It]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,G=!0),mt[It].usedTimes++;let Bt=mt[B.__cacheKey];Bt!==void 0&&(mt[B.__cacheKey].usedTimes--,Bt.usedTimes===0&&J(T)),B.__cacheKey=It,B.__webglTexture=mt[It].texture}return G}function St(B,T,G){return Math.floor(Math.floor(B/G)/T)}function Et(B,T,G,rt){let It=B.updateRanges;if(It.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,G,rt,T.data);else{It.sort((jt,Gt)=>jt.start-Gt.start);let Bt=0;for(let jt=1;jt<It.length;jt++){let Gt=It[Bt],Ft=It[jt],ne=Gt.start+Gt.count,ae=St(Ft.start,T.width,4),_e=St(Gt.start,T.width,4);Ft.start<=ne+1&&ae===_e&&St(Ft.start+Ft.count-1,T.width,4)===ae?Gt.count=Math.max(Gt.count,Ft.start+Ft.count-Gt.start):(++Bt,It[Bt]=Ft)}It.length=Bt+1;let vt=e.getParameter(n.UNPACK_ROW_LENGTH),Tt=e.getParameter(n.UNPACK_SKIP_PIXELS),kt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let jt=0,Gt=It.length;jt<Gt;jt++){let Ft=It[jt],ne=Math.floor(Ft.start/4),ae=Math.ceil(Ft.count/4),_e=ne%T.width,st=Math.floor(ne/T.width),zt=ae,Mt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),e.pixelStorei(n.UNPACK_SKIP_ROWS,st),e.texSubImage2D(n.TEXTURE_2D,0,_e,st,zt,Mt,G,rt,T.data)}B.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,vt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,kt)}}function Xt(B,T,G){let rt=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(rt=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(rt=n.TEXTURE_3D);let mt=be(B,T),It=T.source;e.bindTexture(rt,B.__webglTexture,n.TEXTURE0+G);let Bt=i.get(It);if(It.version!==Bt.__version||mt===!0){if(e.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let Mt=Ie.getPrimaries(Ie.workingColorSpace),Vt=T.colorSpace===Di?null:Ie.getPrimaries(T.colorSpace),qt=T.colorSpace===Di||Mt===Vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let Tt=M(T.image,!1,s.maxTextureSize);Tt=Rt(T,Tt);let kt=o.convert(T.format,T.colorSpace),jt=o.convert(T.type),Gt=N(T.internalFormat,kt,jt,T.normalized,T.colorSpace,T.isVideoTexture);fe(rt,T);let Ft,ne=T.mipmaps,ae=T.isVideoTexture!==!0,_e=Bt.__version===void 0||mt===!0,st=It.dataReady,zt=F(T,Tt);if(T.isDepthTexture)Gt=O(T.format===or,T.type),_e&&(ae?e.texStorage2D(n.TEXTURE_2D,1,Gt,Tt.width,Tt.height):e.texImage2D(n.TEXTURE_2D,0,Gt,Tt.width,Tt.height,0,kt,jt,null));else if(T.isDataTexture)if(ne.length>0){ae&&_e&&e.texStorage2D(n.TEXTURE_2D,zt,Gt,ne[0].width,ne[0].height);for(let Mt=0,Vt=ne.length;Mt<Vt;Mt++)Ft=ne[Mt],ae?st&&e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,Ft.width,Ft.height,kt,jt,Ft.data):e.texImage2D(n.TEXTURE_2D,Mt,Gt,Ft.width,Ft.height,0,kt,jt,Ft.data);T.generateMipmaps=!1}else ae?(_e&&e.texStorage2D(n.TEXTURE_2D,zt,Gt,Tt.width,Tt.height),st&&Et(T,Tt,kt,jt)):e.texImage2D(n.TEXTURE_2D,0,Gt,Tt.width,Tt.height,0,kt,jt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,zt,Gt,ne[0].width,ne[0].height,Tt.depth);for(let Mt=0,Vt=ne.length;Mt<Vt;Mt++)if(Ft=ne[Mt],T.format!==Yn)if(kt!==null)if(ae){if(st)if(T.layerUpdates.size>0){let qt=Dh(Ft.width,Ft.height,T.format,T.type);for(let Pt of T.layerUpdates){let Lt=Ft.data.subarray(Pt*qt/Ft.data.BYTES_PER_ELEMENT,(Pt+1)*qt/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,Pt,Ft.width,Ft.height,1,kt,Lt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,0,Ft.width,Ft.height,Tt.depth,kt,Ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Mt,Gt,Ft.width,Ft.height,Tt.depth,0,Ft.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?st&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,0,Ft.width,Ft.height,Tt.depth,kt,jt,Ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Mt,Gt,Ft.width,Ft.height,Tt.depth,0,kt,jt,Ft.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ae&&_e&&e.texStorage2D(n.TEXTURE_2D,zt,Gt,ne[0].width,ne[0].height);for(let Mt=0,Vt=ne.length;Mt<Vt;Mt++)Ft=ne[Mt],T.format!==Yn?kt!==null?ae?st&&e.compressedTexSubImage2D(n.TEXTURE_2D,Mt,0,0,Ft.width,Ft.height,kt,Ft.data):e.compressedTexImage2D(n.TEXTURE_2D,Mt,Gt,Ft.width,Ft.height,0,Ft.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?st&&e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,Ft.width,Ft.height,kt,jt,Ft.data):e.texImage2D(n.TEXTURE_2D,Mt,Gt,Ft.width,Ft.height,0,kt,jt,Ft.data)}else if(T.isDataArrayTexture)if(ae){if(_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,zt,Gt,Tt.width,Tt.height,Tt.depth),st)if(T.layerUpdates.size>0){let Mt=Dh(Tt.width,Tt.height,T.format,T.type);for(let Vt of T.layerUpdates){let qt=Tt.data.subarray(Vt*Mt/Tt.data.BYTES_PER_ELEMENT,(Vt+1)*Mt/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Vt,Tt.width,Tt.height,1,kt,jt,qt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,kt,jt,Tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Gt,Tt.width,Tt.height,Tt.depth,0,kt,jt,Tt.data);else if(T.isData3DTexture)ae?(_e&&e.texStorage3D(n.TEXTURE_3D,zt,Gt,Tt.width,Tt.height,Tt.depth),st&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,kt,jt,Tt.data)):e.texImage3D(n.TEXTURE_3D,0,Gt,Tt.width,Tt.height,Tt.depth,0,kt,jt,Tt.data);else if(T.isFramebufferTexture){if(_e)if(ae)e.texStorage2D(n.TEXTURE_2D,zt,Gt,Tt.width,Tt.height);else{let Mt=Tt.width,Vt=Tt.height;for(let qt=0;qt<zt;qt++)e.texImage2D(n.TEXTURE_2D,qt,Gt,Mt,Vt,0,kt,jt,null),Mt>>=1,Vt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let Mt=n.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),Tt.parentNode!==Mt){Mt.appendChild(Tt),S.add(T),Mt.onpaint=Vt=>{let qt=Vt.changedElements;for(let Pt of S)qt.includes(Pt.image)&&(Pt.needsUpdate=!0)},Mt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Tt);else{let qt=n.RGBA,Pt=n.RGBA,Lt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,qt,Pt,Lt,Tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ne.length>0){if(ae&&_e){let Mt=Kt(ne[0]);e.texStorage2D(n.TEXTURE_2D,zt,Gt,Mt.width,Mt.height)}for(let Mt=0,Vt=ne.length;Mt<Vt;Mt++)Ft=ne[Mt],ae?st&&e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,kt,jt,Ft):e.texImage2D(n.TEXTURE_2D,Mt,Gt,kt,jt,Ft);T.generateMipmaps=!1}else if(ae){if(_e){let Mt=Kt(Tt);e.texStorage2D(n.TEXTURE_2D,zt,Gt,Mt.width,Mt.height)}st&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,kt,jt,Tt)}else e.texImage2D(n.TEXTURE_2D,0,Gt,kt,jt,Tt);x(T)&&U(rt),Bt.__version=It.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function oe(B,T,G){if(T.image.length!==6)return;let rt=be(B,T),mt=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+G);let It=i.get(mt);if(mt.version!==It.__version||rt===!0){e.activeTexture(n.TEXTURE0+G);let Bt=Ie.getPrimaries(Ie.workingColorSpace),vt=T.colorSpace===Di?null:Ie.getPrimaries(T.colorSpace),Tt=T.colorSpace===Di||Bt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let kt=T.isCompressedTexture||T.image[0].isCompressedTexture,jt=T.image[0]&&T.image[0].isDataTexture,Gt=[];for(let Pt=0;Pt<6;Pt++)!kt&&!jt?Gt[Pt]=M(T.image[Pt],!0,s.maxCubemapSize):Gt[Pt]=jt?T.image[Pt].image:T.image[Pt],Gt[Pt]=Rt(T,Gt[Pt]);let Ft=Gt[0],ne=o.convert(T.format,T.colorSpace),ae=o.convert(T.type),_e=N(T.internalFormat,ne,ae,T.normalized,T.colorSpace),st=T.isVideoTexture!==!0,zt=It.__version===void 0||rt===!0,Mt=mt.dataReady,Vt=F(T,Ft);fe(n.TEXTURE_CUBE_MAP,T);let qt;if(kt){st&&zt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Vt,_e,Ft.width,Ft.height);for(let Pt=0;Pt<6;Pt++){qt=Gt[Pt].mipmaps;for(let Lt=0;Lt<qt.length;Lt++){let ee=qt[Lt];T.format!==Yn?ne!==null?st?Mt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Lt,0,0,ee.width,ee.height,ne,ee.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Lt,_e,ee.width,ee.height,0,ee.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Lt,0,0,ee.width,ee.height,ne,ae,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Lt,_e,ee.width,ee.height,0,ne,ae,ee.data)}}}else{if(qt=T.mipmaps,st&&zt){qt.length>0&&Vt++;let Pt=Kt(Gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Vt,_e,Pt.width,Pt.height)}for(let Pt=0;Pt<6;Pt++)if(jt){st?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,Gt[Pt].width,Gt[Pt].height,ne,ae,Gt[Pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,_e,Gt[Pt].width,Gt[Pt].height,0,ne,ae,Gt[Pt].data);for(let Lt=0;Lt<qt.length;Lt++){let Fe=qt[Lt].image[Pt].image;st?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Lt+1,0,0,Fe.width,Fe.height,ne,ae,Fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Lt+1,_e,Fe.width,Fe.height,0,ne,ae,Fe.data)}}else{st?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,ne,ae,Gt[Pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,_e,ne,ae,Gt[Pt]);for(let Lt=0;Lt<qt.length;Lt++){let ee=qt[Lt];st?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Lt+1,0,0,ne,ae,ee.image[Pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Lt+1,_e,ne,ae,ee.image[Pt])}}}x(T)&&U(n.TEXTURE_CUBE_MAP),It.__version=mt.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function Ut(B,T,G,rt,mt,It){let Bt=o.convert(G.format,G.colorSpace),vt=o.convert(G.type),Tt=N(G.internalFormat,Bt,vt,G.normalized,G.colorSpace),kt=i.get(T),jt=i.get(G);if(jt.__renderTarget=T,!kt.__hasExternalTextures){let Gt=Math.max(1,T.width>>It),Ft=Math.max(1,T.height>>It);mt===n.TEXTURE_3D||mt===n.TEXTURE_2D_ARRAY?e.texImage3D(mt,It,Tt,Gt,Ft,T.depth,0,Bt,vt,null):e.texImage2D(mt,It,Tt,Gt,Ft,0,Bt,vt,null)}e.bindFramebuffer(n.FRAMEBUFFER,B),lt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,mt,jt.__webglTexture,0,ut(T)):(mt===n.TEXTURE_2D||mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,rt,mt,jt.__webglTexture,It),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(B,T,G){if(n.bindRenderbuffer(n.RENDERBUFFER,B),T.depthBuffer){let rt=T.depthTexture,mt=rt&&rt.isDepthTexture?rt.type:null,It=O(T.stencilBuffer,mt),Bt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;lt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(T),It,T.width,T.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(T),It,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,It,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Bt,n.RENDERBUFFER,B)}else{let rt=T.textures;for(let mt=0;mt<rt.length;mt++){let It=rt[mt],Bt=o.convert(It.format,It.colorSpace),vt=o.convert(It.type),Tt=N(It.internalFormat,Bt,vt,It.normalized,It.colorSpace);lt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(T),Tt,T.width,T.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(T),Tt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Je(B,T,G){let rt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let mt=i.get(T.depthTexture);if(mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),rt){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,T.depthTexture.addEventListener("dispose",Y)),mt.__webglTexture===void 0){mt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,mt.__webglTexture),fe(n.TEXTURE_CUBE_MAP,T.depthTexture);let kt=o.convert(T.depthTexture.format),jt=o.convert(T.depthTexture.type),Gt;T.depthTexture.format===_i?Gt=n.DEPTH_COMPONENT24:T.depthTexture.format===or&&(Gt=n.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Gt,T.width,T.height,0,kt,jt,null)}}else _t(T.depthTexture,0);let It=mt.__webglTexture,Bt=ut(T),vt=rt?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,Tt=T.depthTexture.format===or?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===_i)lt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Tt,vt,It,0,Bt):n.framebufferTexture2D(n.FRAMEBUFFER,Tt,vt,It,0);else if(T.depthTexture.format===or)lt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Tt,vt,It,0,Bt):n.framebufferTexture2D(n.FRAMEBUFFER,Tt,vt,It,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(B){let T=i.get(B),G=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){let rt=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),rt){let mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,rt.removeEventListener("dispose",mt)};rt.addEventListener("dispose",mt),T.__depthDisposeCallback=mt}T.__boundDepthTexture=rt}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(G)for(let rt=0;rt<6;rt++)Je(T.__webglFramebuffer[rt],B,rt);else{let rt=B.texture.mipmaps;rt&&rt.length>0?Je(T.__webglFramebuffer[0],B,0):Je(T.__webglFramebuffer,B,0)}else if(G){T.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[rt]),T.__webglDepthbuffer[rt]===void 0)T.__webglDepthbuffer[rt]=n.createRenderbuffer(),ge(T.__webglDepthbuffer[rt],B,!1);else{let mt=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=T.__webglDepthbuffer[rt];n.bindRenderbuffer(n.RENDERBUFFER,It),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,It)}}else{let rt=B.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ge(T.__webglDepthbuffer,B,!1);else{let mt=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,It),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,It)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(B,T,G){let rt=i.get(B);T!==void 0&&Ut(rt.__webglFramebuffer,B,B.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&he(B)}function Ce(B){let T=B.texture,G=i.get(B),rt=i.get(T);B.addEventListener("dispose",P);let mt=B.textures,It=B.isWebGLCubeRenderTarget===!0,Bt=mt.length>1;if(Bt||(rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture()),rt.__version=T.version,c.memory.textures++),It){G.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[vt]=[];for(let Tt=0;Tt<T.mipmaps.length;Tt++)G.__webglFramebuffer[vt][Tt]=n.createFramebuffer()}else G.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let vt=0;vt<T.mipmaps.length;vt++)G.__webglFramebuffer[vt]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Bt)for(let vt=0,Tt=mt.length;vt<Tt;vt++){let kt=i.get(mt[vt]);kt.__webglTexture===void 0&&(kt.__webglTexture=n.createTexture(),c.memory.textures++)}if(B.samples>0&&lt(B)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let vt=0;vt<mt.length;vt++){let Tt=mt[vt];G.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[vt]);let kt=o.convert(Tt.format,Tt.colorSpace),jt=o.convert(Tt.type),Gt=N(Tt.internalFormat,kt,jt,Tt.normalized,Tt.colorSpace,B.isXRRenderTarget===!0),Ft=ut(B);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,Gt,B.width,B.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,G.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),B.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(G.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(It){e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture),fe(n.TEXTURE_CUBE_MAP,T);for(let vt=0;vt<6;vt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Tt=0;Tt<T.mipmaps.length;Tt++)Ut(G.__webglFramebuffer[vt][Tt],B,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt);else Ut(G.__webglFramebuffer[vt],B,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);x(T)&&U(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let vt=0,Tt=mt.length;vt<Tt;vt++){let kt=mt[vt],jt=i.get(kt),Gt=n.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Gt=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Gt,jt.__webglTexture),fe(Gt,kt),Ut(G.__webglFramebuffer,B,kt,n.COLOR_ATTACHMENT0+vt,Gt,0),x(kt)&&U(Gt)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(vt=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,rt.__webglTexture),fe(vt,T),T.mipmaps&&T.mipmaps.length>0)for(let Tt=0;Tt<T.mipmaps.length;Tt++)Ut(G.__webglFramebuffer[Tt],B,T,n.COLOR_ATTACHMENT0,vt,Tt);else Ut(G.__webglFramebuffer,B,T,n.COLOR_ATTACHMENT0,vt,0);x(T)&&U(vt),e.unbindTexture()}B.depthBuffer&&he(B)}function we(B){let T=B.textures;for(let G=0,rt=T.length;G<rt;G++){let mt=T[G];if(x(mt)){let It=X(B),Bt=i.get(mt).__webglTexture;e.bindTexture(It,Bt),U(It),e.unbindTexture()}}}let De=[],He=[];function j(B){if(B.samples>0){if(lt(B)===!1){let T=B.textures,G=B.width,rt=B.height,mt=n.COLOR_BUFFER_BIT,It=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Bt=i.get(B),vt=T.length>1;if(vt)for(let kt=0;kt<T.length;kt++)e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);let Tt=B.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let kt=0;kt<T.length;kt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(mt|=n.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(mt|=n.STENCIL_BUFFER_BIT)),vt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Bt.__webglColorRenderbuffer[kt]);let jt=i.get(T[kt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,G,rt,0,0,G,rt,mt,n.NEAREST),f===!0&&(De.length=0,He.length=0,De.push(n.COLOR_ATTACHMENT0+kt),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(De.push(It),He.push(It),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let kt=0;kt<T.length;kt++){e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.RENDERBUFFER,Bt.__webglColorRenderbuffer[kt]);let jt=i.get(T[kt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&f){let T=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function ut(B){return Math.min(s.maxSamples,B.samples)}function lt(B){let T=i.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function k(B){let T=c.render.frame;_.get(B)!==T&&(_.set(B,T),B.update())}function Rt(B,T){let G=B.colorSpace,rt=B.format,mt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||G!==eo&&G!==Di&&(Ie.getTransfer(G)===Ue?(rt!==Yn||mt!==Ln)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",G)),T}function Kt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(d.width=B.naturalWidth||B.width,d.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(d.width=B.displayWidth,d.height=B.displayHeight):(d.width=B.width,d.height=B.height),d}this.allocateTextureUnit=tt,this.resetTextureUnits=ht,this.getTextureUnits=Q,this.setTextureUnits=z,this.setTexture2D=_t,this.setTexture2DArray=at,this.setTexture3D=pt,this.setTextureCube=gt,this.rebindTextures=Me,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ox(n,t){function e(i,s=Di){let o,c=Ie.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xh)return n.BYTE;if(i===Sh)return n.SHORT;if(i===bs)return n.UNSIGNED_SHORT;if(i===al)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===wh)return n.ALPHA;if(i===Eh)return n.RGB;if(i===Yn)return n.RGBA;if(i===_i)return n.DEPTH_COMPONENT;if(i===or)return n.DEPTH_STENCIL;if(i===Th)return n.RED;if(i===hl)return n.RED_INTEGER;if(i===ar)return n.RG;if(i===ul)return n.RG_INTEGER;if(i===fl)return n.RGBA_INTEGER;if(i===Po||i===Co||i===Io||i===Ro)if(c===Ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Po)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Po)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Co)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Io)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ro)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===pl||i===ml||i===gl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===dl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_l||i===vl||i===yl||i===xl||i===Sl||i===Lo||i===Ml)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===_l||i===vl)return c===Ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===yl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===xl)return o.COMPRESSED_R11_EAC;if(i===Sl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Lo)return o.COMPRESSED_RG11_EAC;if(i===Ml)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bl||i===wl||i===El||i===Tl||i===Al||i===Pl||i===Cl||i===Il||i===Rl||i===Ll||i===Nl||i===Dl||i===Ol||i===Fl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===bl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===El)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Al)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Il)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ol)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ul||i===Bl||i===kl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Ul)return c===Ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zl||i===Vl||i===No||i===Hl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===zl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Vl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===No)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function kx(n,t){function e(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function i(M,x){x.color.getRGB(M.fogColor.value,Rh(n)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function s(M,x,U,X,N){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?o(M,x):x.isMeshLambertMaterial?(o(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(o(M,x),S(M,x)):x.isMeshPhongMaterial?(o(M,x),_(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(o(M,x),g(M,x),x.isMeshPhysicalMaterial&&b(M,x,N)):x.isMeshMatcapMaterial?(o(M,x),E(M,x)):x.isMeshDepthMaterial?o(M,x):x.isMeshDistanceMaterial?(o(M,x),C(M,x)):x.isMeshNormalMaterial?o(M,x):x.isLineBasicMaterial?(c(M,x),x.isLineDashedMaterial&&u(M,x)):x.isPointsMaterial?f(M,x,U,X):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,e(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,e(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,e(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===En&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,e(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===En&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,e(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,e(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);let U=t.get(x),X=U.envMap,N=U.envMapRotation;X&&(M.envMap.value=X,M.envMapRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(N)).transpose(),X.isCubeTexture&&X.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Fd),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,M.aoMapTransform))}function c(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,e(x.map,M.mapTransform))}function u(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function f(M,x,U,X){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*U,M.scale.value=X*.5,x.map&&(M.map.value=x.map,e(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,e(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,e(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,e(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function S(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function g(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function b(M,x,U){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===En&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){let U=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zx(n,t,e,i){let s={},o={},c=[],u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(N,O){let F=O.program;i.uniformBlockBinding(N,F)}function d(N,O){let F=s[N.id];F===void 0&&(M(N),F=_(N),s[N.id]=F,N.addEventListener("dispose",U));let Y=O.program;i.updateUBOMapping(N,Y);let P=t.render.frame;o[N.id]!==P&&(g(N),o[N.id]=P)}function _(N){let O=S();N.__bindingPointIndex=O;let F=n.createBuffer(),Y=N.__size,P=N.usage;return n.bindBuffer(n.UNIFORM_BUFFER,F),n.bufferData(n.UNIFORM_BUFFER,Y,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,O,F),F}function S(){for(let N=0;N<u;N++)if(c.indexOf(N)===-1)return c.push(N),N;return me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){let O=s[N.id],F=N.uniforms,Y=N.__cache;n.bindBuffer(n.UNIFORM_BUFFER,O);for(let P=0,V=F.length;P<V;P++){let J=F[P];if(Array.isArray(J))for(let K=0,it=J.length;K<it;K++)b(J[K],P,K,Y);else b(J,P,0,Y)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function b(N,O,F,Y){if(C(N,O,F,Y)===!0){let P=N.__offset,V=N.value;if(Array.isArray(V)){let J=0;for(let K=0;K<V.length;K++){let it=V[K],ht=x(it);E(it,N.__data,J),typeof it!="number"&&typeof it!="boolean"&&!it.isMatrix3&&!ArrayBuffer.isView(it)&&(J+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(V,N.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,P,N.__data)}}function E(N,O,F){typeof N=="number"||typeof N=="boolean"?O[0]=N:N.isMatrix3?(O[0]=N.elements[0],O[1]=N.elements[1],O[2]=N.elements[2],O[3]=0,O[4]=N.elements[3],O[5]=N.elements[4],O[6]=N.elements[5],O[7]=0,O[8]=N.elements[6],O[9]=N.elements[7],O[10]=N.elements[8],O[11]=0):ArrayBuffer.isView(N)?O.set(new N.constructor(N.buffer,N.byteOffset,O.length)):N.toArray(O,F)}function C(N,O,F,Y){let P=N.value,V=O+"_"+F;if(Y[V]===void 0)return typeof P=="number"||typeof P=="boolean"?Y[V]=P:ArrayBuffer.isView(P)?Y[V]=P.slice():Y[V]=P.clone(),!0;{let J=Y[V];if(typeof P=="number"||typeof P=="boolean"){if(J!==P)return Y[V]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(J.equals(P)===!1)return J.copy(P),!0}}return!1}function M(N){let O=N.uniforms,F=0,Y=16;for(let V=0,J=O.length;V<J;V++){let K=Array.isArray(O[V])?O[V]:[O[V]];for(let it=0,ht=K.length;it<ht;it++){let Q=K[it],z=Array.isArray(Q.value)?Q.value:[Q.value];for(let tt=0,H=z.length;tt<H;tt++){let _t=z[tt],at=x(_t),pt=F%Y,gt=pt%at.boundary,At=pt+gt;F+=gt,At!==0&&Y-At<at.storage&&(F+=Y-At),Q.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=F,F+=at.storage}}}let P=F%Y;return P>0&&(F+=Y-P),N.__size=F,N.__cache={},this}function x(N){let O={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(O.boundary=4,O.storage=4):N.isVector2?(O.boundary=8,O.storage=8):N.isVector3||N.isColor?(O.boundary=16,O.storage=12):N.isVector4?(O.boundary=16,O.storage=16):N.isMatrix3?(O.boundary=48,O.storage=48):N.isMatrix4?(O.boundary=64,O.storage=64):N.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(O.boundary=16,O.storage=N.byteLength):de("WebGLRenderer: Unsupported uniform value type.",N),O}function U(N){let O=N.target;O.removeEventListener("dispose",U);let F=c.indexOf(O.__bindingPointIndex);c.splice(F,1),n.deleteBuffer(s[O.id]),delete s[O.id],delete o[O.id]}function X(){for(let N in s)n.deleteBuffer(s[N]);c=[],s={},o={}}return{bind:f,update:d,dispose:X}}function Hx(){return xi===null&&(xi=new Ba(Vx,16,16,ar,ci),xi.name="DFG_LUT",xi.minFilter=fn,xi.magFilter=fn,xi.wrapS=gi,xi.wrapT=gi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var e0,n0,i0,r0,s0,o0,a0,l0,c0,h0,u0,f0,d0,p0,m0,g0,_0,v0,y0,x0,S0,M0,b0,w0,E0,T0,A0,P0,C0,I0,R0,L0,N0,D0,O0,F0,U0,B0,k0,z0,V0,H0,G0,X0,W0,Y0,q0,$0,Z0,J0,j0,K0,Q0,t_,e_,n_,i_,r_,s_,o_,a_,l_,c_,h_,u_,f_,d_,p_,m_,g_,__,v_,y_,x_,S_,M_,b_,w_,E_,T_,A_,P_,C_,I_,R_,L_,N_,D_,O_,F_,U_,B_,k_,z_,V_,H_,G_,X_,W_,Y_,q_,$_,Z_,J_,j_,K_,Q_,tv,ev,nv,iv,rv,sv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,vv,yv,xv,Sv,Mv,bv,wv,Ev,Tv,Av,Pv,Cv,Iv,Rv,Lv,Nv,Dv,Te,Zt,Si,Yl,Ov,Rd,As,Vv,Hv,Gv,Do,cd,Fh,Uh,Bh,kh,Xv,wr,$l,Zl,ey,Ld,Hh,Nd,Dd,Od,dd,pd,md,gd,_d,Gh,Xh,Wh,zh,Ps,Xy,Wy,xd,Zy,ql,ex,nx,rx,ox,lx,hx,fx,gx,qh,$h,wx,Px,Cx,Ix,Rx,Cd,Oo,Vh,Fx,Ux,Zh,Jh,Bx,Fd,Vx,xi,Jl,Ql=Pn(()=>{Oh();Oh();e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n0=`#ifdef USE_ALPHAHASH
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
#endif`,i0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a0=`#ifdef USE_AOMAP
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
#endif`,l0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p0=`#ifdef USE_IRIDESCENCE
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
#endif`,m0=`#ifdef USE_BUMPMAP
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
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,w0=`#define PI 3.141592653589793
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
} // validated`,E0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T0=`vec3 transformedNormal = objectNormal;
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
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
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
}`,G0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,q0=`#ifdef USE_ENVMAP
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
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
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
#endif`,Q0=`uniform sampler2D dfgLUT;
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
}`,t_=`
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
#endif`,e_=`#if defined( RE_IndirectDiffuse )
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
#endif`,n_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,r_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u_=`#if defined( USE_POINTS_UV )
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
#endif`,f_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,__=`#ifdef USE_MORPHTARGETS
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
#endif`,v_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w_=`#ifdef USE_NORMALMAP
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
#endif`,E_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
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
#endif`,C_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z_=`float getShadowMask() {
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
}`,V_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H_=`#ifdef USE_SKINNING
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
#endif`,G_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X_=`#ifdef USE_SKINNING
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
#endif`,W_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z_=`#ifdef USE_TRANSMISSION
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
#endif`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ev=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nv=`uniform sampler2D t2D;
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
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`#include <common>
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
}`,lv=`#if DEPTH_PACKING == 3200
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
}`,cv=`#define DISTANCE
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
}`,hv=`#define DISTANCE
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`uniform float scale;
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
}`,pv=`uniform vec3 diffuse;
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
}`,mv=`#include <common>
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
}`,gv=`uniform vec3 diffuse;
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
}`,_v=`#define LAMBERT
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
}`,vv=`#define LAMBERT
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
}`,yv=`#define MATCAP
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
}`,xv=`#define MATCAP
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
}`,Mv=`#define NORMAL
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
}`,bv=`#define PHONG
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
}`,wv=`#define PHONG
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
}`,Ev=`#define STANDARD
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
}`,Tv=`#define STANDARD
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
}`,Av=`#define TOON
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
}`,Cv=`uniform float size;
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
}`,Iv=`uniform vec3 diffuse;
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
}`,Rv=`#include <common>
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
}`,Lv=`uniform vec3 color;
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
}`,Nv=`uniform float rotation;
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
}`,Dv=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:e0,alphahash_pars_fragment:n0,alphamap_fragment:i0,alphamap_pars_fragment:r0,alphatest_fragment:s0,alphatest_pars_fragment:o0,aomap_fragment:a0,aomap_pars_fragment:l0,batching_pars_vertex:c0,batching_vertex:h0,begin_vertex:u0,beginnormal_vertex:f0,bsdfs:d0,iridescence_fragment:p0,bumpmap_pars_fragment:m0,clipping_planes_fragment:g0,clipping_planes_pars_fragment:_0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:y0,color_fragment:x0,color_pars_fragment:S0,color_pars_vertex:M0,color_vertex:b0,common:w0,cube_uv_reflection_fragment:E0,defaultnormal_vertex:T0,displacementmap_pars_vertex:A0,displacementmap_vertex:P0,emissivemap_fragment:C0,emissivemap_pars_fragment:I0,colorspace_fragment:R0,colorspace_pars_fragment:L0,envmap_fragment:N0,envmap_common_pars_fragment:D0,envmap_pars_fragment:O0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:q0,envmap_vertex:U0,fog_vertex:B0,fog_pars_vertex:k0,fog_fragment:z0,fog_pars_fragment:V0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:G0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:W0,lights_pars_begin:Y0,lights_toon_fragment:$0,lights_toon_pars_fragment:Z0,lights_phong_fragment:J0,lights_phong_pars_fragment:j0,lights_physical_fragment:K0,lights_physical_pars_fragment:Q0,lights_fragment_begin:t_,lights_fragment_maps:e_,lights_fragment_end:n_,lightprobes_pars_fragment:i_,logdepthbuf_fragment:r_,logdepthbuf_pars_fragment:s_,logdepthbuf_pars_vertex:o_,logdepthbuf_vertex:a_,map_fragment:l_,map_pars_fragment:c_,map_particle_fragment:h_,map_particle_pars_fragment:u_,metalnessmap_fragment:f_,metalnessmap_pars_fragment:d_,morphinstance_vertex:p_,morphcolor_vertex:m_,morphnormal_vertex:g_,morphtarget_pars_vertex:__,morphtarget_vertex:v_,normal_fragment_begin:y_,normal_fragment_maps:x_,normal_pars_fragment:S_,normal_pars_vertex:M_,normal_vertex:b_,normalmap_pars_fragment:w_,clearcoat_normal_fragment_begin:E_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:P_,opaque_fragment:C_,packing:I_,premultiplied_alpha_fragment:R_,project_vertex:L_,dithering_fragment:N_,dithering_pars_fragment:D_,roughnessmap_fragment:O_,roughnessmap_pars_fragment:F_,shadowmap_pars_fragment:U_,shadowmap_pars_vertex:B_,shadowmap_vertex:k_,shadowmask_pars_fragment:z_,skinbase_vertex:V_,skinning_pars_vertex:H_,skinning_vertex:G_,skinnormal_vertex:X_,specularmap_fragment:W_,specularmap_pars_fragment:Y_,tonemapping_fragment:q_,tonemapping_pars_fragment:$_,transmission_fragment:Z_,transmission_pars_fragment:J_,uv_pars_fragment:j_,uv_pars_vertex:K_,uv_vertex:Q_,worldpos_vertex:tv,background_vert:ev,background_frag:nv,backgroundCube_vert:iv,backgroundCube_frag:rv,cube_vert:sv,cube_frag:ov,depth_vert:av,depth_frag:lv,distance_vert:cv,distance_frag:hv,equirect_vert:uv,equirect_frag:fv,linedashed_vert:dv,linedashed_frag:pv,meshbasic_vert:mv,meshbasic_frag:gv,meshlambert_vert:_v,meshlambert_frag:vv,meshmatcap_vert:yv,meshmatcap_frag:xv,meshnormal_vert:Sv,meshnormal_frag:Mv,meshphong_vert:bv,meshphong_frag:wv,meshphysical_vert:Ev,meshphysical_frag:Tv,meshtoon_vert:Av,meshtoon_frag:Pv,points_vert:Cv,points_frag:Iv,shadow_vert:Rv,shadow_frag:Lv,sprite_vert:Nv,sprite_frag:Dv},Zt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ot},probesMax:{value:new ot},probesResolution:{value:new ot}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Si={basic:{uniforms:xn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:xn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:xn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:xn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:xn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new xe(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:xn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:xn([Zt.points,Zt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:xn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:xn([Zt.common,Zt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:xn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:xn([Zt.sprite,Zt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distance:{uniforms:xn([Zt.common,Zt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distance_vert,fragmentShader:Te.distance_frag},shadow:{uniforms:xn([Zt.lights,Zt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Si.physical={uniforms:xn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};Yl={r:0,b:0,g:0},Ov=new We,Rd=new Se;Rd.set(-1,0,0,0,1,0,0,0,1);As=4,Vv=6,Hv=20,Gv=256,Do=new vs,cd=new xe,Fh=null,Uh=0,Bh=0,kh=!1,Xv=new ot,wr=new ot,$l=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,o={}){let{size:c=256,position:u=Xv}=o;Fh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,i,s,f,u),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fh,Uh,Bh),this._renderer.xr.enabled=kh,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ci,format:Yn,colorSpace:eo,depthBuffer:!1},s=hd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wv(o)),this._blurMaterial=qv(o,t,e),this._ggxMaterial=Yv(o,t,e)}return s}_compileMaterial(t){let e=new ze(new Ze,t);this._renderer.compile(e,Do)}_sceneToCubeUV(t,e,i,s,o){let f=new vn(90,1,e,i),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,b=S.toneMapping;S.getClearColor(cd),S.toneMapping=oi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(s),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new Ji,new ri({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let C=this._backgroundBox,M=C.material,x=!1,U=t.background;U?U.isColor&&(M.color.copy(U),t.background=null,x=!0):(M.color.copy(cd),x=!0);for(let X=0;X<6;X++){let N=X%3;N===0?(f.up.set(0,d[X],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+_[X],o.y,o.z)):N===1?(f.up.set(0,0,d[X]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+_[X],o.z)):(f.up.set(0,d[X],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+_[X]));let O=this._cubeSize;Ts(s,N*O,X>2?O:0,O,O),S.setRenderTarget(s),x&&S.render(C,f),S.render(t,f)}S.toneMapping=b,S.autoClear=g,t.background=U}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===rr||t.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());let o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;let u=o.uniforms;u.envMap.value=t;let f=this._cubeSize;Ts(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(c,Do)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=i/(this._lodMeshes.length-1),_=e/(this._lodMeshes.length-1),S=Math.sqrt(d*d-_*_),g=d*1.25,b=S*g,{_lodMax:E}=this,C=this._sizeLods[i],M=3*C*(i>E-As?i-E+As:0),x=4*(this._cubeSize-C);f.envMap.value=t.texture,f.roughness.value=b,f.mipInt.value=E-e,Ts(o,M,x,3*C,2*C),s.setRenderTarget(o),s.render(u,Do),f.envMap.value=o.texture,f.roughness.value=0,f.mipInt.value=E-i,Ts(t,M,x,3*C,2*C),s.setRenderTarget(t),s.render(u,Do)}_blur(t,e,i,s){let o=this._pingPongRenderTarget,c=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,c),this._blurPass(o,t,i,i,c)}_blurPass(t,e,i,s,o){let c=this._renderer,u=this._blurMaterial,f=this._lodMeshes[s];f.material=u;let d=u.uniforms;d.envMap.value=t.texture,d.sigma.value=o,d.mipInt.value=this._lodMax-i;let _=this._sizeLods[s],S=3*_*(s>this._lodMax-As?s-this._lodMax+As:0),g=4*(this._cubeSize-_);Ts(e,S,g,3*_,2*_),c.setRenderTarget(e),c.render(f,Do)}};Zl=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new uo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ji(5,5,5),o=new kn({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:yi});o.uniforms.tEquirect.value=e;let c=new ze(s,o),u=e.minFilter;return e.minFilter===sr&&(e.minFilter=fn),new nl(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,s);t.setRenderTarget(o)}};ey={[fh]:"LINEAR_TONE_MAPPING",[dh]:"REINHARD_TONE_MAPPING",[ph]:"CINEON_TONE_MAPPING",[mh]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[vh]:"NEUTRAL_TONE_MAPPING",[gh]:"CUSTOM_TONE_MAPPING"};Ld=new wn,Hh=new Zi(1,1),Nd=new so,Dd=new Fa,Od=new uo,dd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);Gh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=My(e.type)}},Xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hy(e.type)}},Wh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,c=s.length;o!==c;++o){let u=s[o];u.setValue(t,e[u.id],i)}}},zh=/(\w+)(\])?(\[|\.)?/g;Ps=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){let u=t.getActiveUniform(e,c),f=t.getUniformLocation(e,u.name);Gy(u,f,this)}let s=[],o=[];for(let c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,c=e.length;o!==c;++o){let u=e[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let c=t[s];c.id in e&&i.push(c)}return i}};Xy=37297,Wy=0;xd=new Se;Zy={[fh]:"Linear",[dh]:"Reinhard",[ph]:"Cineon",[mh]:"ACESFilmic",[_h]:"AgX",[vh]:"Neutral",[gh]:"Custom"};ql=new ot;ex=/^[ \t]*#include +<([\w\d./]+)>/gm;nx=new Map;rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;ox={[Eo]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};lx={[rr]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};hx={[Mr]:"ENVMAP_MODE_REFRACTION"};fx={[uh]:"ENVMAP_BLENDING_MULTIPLY",[Hf]:"ENVMAP_BLENDING_MIX",[Gf]:"ENVMAP_BLENDING_ADD"};gx=0,qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new $h(t),e.set(t,i)),i}},$h=class{constructor(t){this.id=gx++,this.code=t,this.usedTimes=0}};wx=0;Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
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
}`,Ix=[new ot(1,0,0),new ot(-1,0,0),new ot(0,1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1)],Rx=[new ot(0,-1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1),new ot(0,-1,0),new ot(0,-1,0)],Cd=new We,Oo=new ot,Vh=new ot;Fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
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

}`,Zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new po(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new kn({vertexShader:Fx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends ii{constructor(t,e){super();let i=this,s=null,o=1,c=null,u="local-floor",f=1,d=null,_=null,S=null,g=null,b=null,E=null,C=typeof XRWebGLBinding<"u",M=new Zh,x={},U=e.getContextAttributes(),X=null,N=null,O=[],F=[],Y=new le,P=null,V=null,J=new vn;J.viewport=new je;let K=new vn;K.viewport=new je;let it=[J,K],ht=new il,Q=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(St){let Et=O[St];return Et===void 0&&(Et=new ds,O[St]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(St){let Et=O[St];return Et===void 0&&(Et=new ds,O[St]=Et),Et.getGripSpace()},this.getHand=function(St){let Et=O[St];return Et===void 0&&(Et=new ds,O[St]=Et),Et.getHandSpace()};function tt(St){let Et=F.indexOf(St.inputSource);if(Et===-1)return;let Xt=O[Et];Xt!==void 0&&(Xt.update(St.inputSource,St.frame,d||c),Xt.dispatchEvent({type:St.type,data:St.inputSource}))}function H(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",_t);for(let St=0;St<O.length;St++){let Et=F[St];Et!==null&&(F[St]=null,O[St].disconnect(Et))}Q=null,z=null,M.reset();for(let St in x)delete x[St];if(t.setRenderTarget(X),b=null,g=null,S=null,s=null,N=null,be.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(Y.width,Y.height,!1),V!==null){let St=V.camera;St.fov=V.fov,St.zoom=V.zoom,St.updateProjectionMatrix(),V=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(St){o=St,i.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(St){u=St,i.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(St){d=St},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(s,e)),S},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(St){if(s=St,s!==null){if(X=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",H),s.addEventListener("inputsourceschange",_t),U.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(Y),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Xt=null,oe=null,Ut=null;U.depth&&(Ut=U.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Xt=U.stencil?or:_i,oe=U.stencil?ws:ai);let ge={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:o};S=this.getBinding(),g=S.createProjectionLayer(ge),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new In(g.textureWidth,g.textureHeight,{format:Yn,type:Ln,depthTexture:new Zi(g.textureWidth,g.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Xt),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Xt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:o};b=new XRWebGLLayer(s,e,Xt),s.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),N=new In(b.framebufferWidth,b.framebufferHeight,{format:Yn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await s.requestReferenceSpace(u),be.setContext(s),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function _t(St){for(let Et=0;Et<St.removed.length;Et++){let Xt=St.removed[Et],oe=F.indexOf(Xt);oe>=0&&(F[oe]=null,O[oe].disconnect(Xt))}for(let Et=0;Et<St.added.length;Et++){let Xt=St.added[Et],oe=F.indexOf(Xt);if(oe===-1){for(let ge=0;ge<O.length;ge++)if(ge>=F.length){F.push(Xt),oe=ge;break}else if(F[ge]===null){F[ge]=Xt,oe=ge;break}if(oe===-1)break}let Ut=O[oe];Ut&&Ut.connect(Xt)}}let at=new ot,pt=new ot;function gt(St,Et,Xt){at.setFromMatrixPosition(Et.matrixWorld),pt.setFromMatrixPosition(Xt.matrixWorld);let oe=at.distanceTo(pt),Ut=Et.projectionMatrix.elements,ge=Xt.projectionMatrix.elements,Je=Ut[14]/(Ut[10]-1),he=Ut[14]/(Ut[10]+1),Me=(Ut[9]+1)/Ut[5],Ce=(Ut[9]-1)/Ut[5],we=(Ut[8]-1)/Ut[0],De=(ge[8]+1)/ge[0],He=Je*we,j=Je*De,ut=oe/(-we+De),lt=ut*-we;if(Et.matrixWorld.decompose(St.position,St.quaternion,St.scale),St.translateX(lt),St.translateZ(ut),St.matrixWorld.compose(St.position,St.quaternion,St.scale),St.matrixWorldInverse.copy(St.matrixWorld).invert(),Ut[10]===-1)St.projectionMatrix.copy(Et.projectionMatrix),St.projectionMatrixInverse.copy(Et.projectionMatrixInverse);else{let k=Je+ut,Rt=he+ut,Kt=He-lt,B=j+(oe-lt),T=Me*he/Rt*k,G=Ce*he/Rt*k;St.projectionMatrix.makePerspective(Kt,B,T,G,k,Rt),St.projectionMatrixInverse.copy(St.projectionMatrix).invert()}}function At(St,Et){Et===null?St.matrixWorld.copy(St.matrix):St.matrixWorld.multiplyMatrices(Et.matrixWorld,St.matrix),St.matrixWorldInverse.copy(St.matrixWorld).invert()}this.updateCamera=function(St){if(s===null)return;let Et=St.near,Xt=St.far;M.texture!==null&&(M.depthNear>0&&(Et=M.depthNear),M.depthFar>0&&(Xt=M.depthFar)),ht.near=K.near=J.near=Et,ht.far=K.far=J.far=Xt,(Q!==ht.near||z!==ht.far)&&(s.updateRenderState({depthNear:ht.near,depthFar:ht.far}),Q=ht.near,z=ht.far),ht.layers.mask=St.layers.mask|6,J.layers.mask=ht.layers.mask&-5,K.layers.mask=ht.layers.mask&-3;let oe=St.parent,Ut=ht.cameras;At(ht,oe);for(let ge=0;ge<Ut.length;ge++)At(Ut[ge],oe);Ut.length===2?gt(ht,J,K):ht.projectionMatrix.copy(J.projectionMatrix),V===null&&St.isPerspectiveCamera&&(V={camera:St,fov:St.fov,zoom:St.zoom}),Ot(St,ht,oe)};function Ot(St,Et,Xt){Xt===null?St.matrix.copy(Et.matrixWorld):(St.matrix.copy(Xt.matrixWorld),St.matrix.invert(),St.matrix.multiply(Et.matrixWorld)),St.matrix.decompose(St.position,St.quaternion,St.scale),St.updateMatrixWorld(!0),St.projectionMatrix.copy(Et.projectionMatrix),St.projectionMatrixInverse.copy(Et.projectionMatrixInverse),St.isPerspectiveCamera&&(St.fov=hs*2*Math.atan(1/St.projectionMatrix.elements[5]),St.zoom=1)}this.getCamera=function(){return ht},this.getFoveation=function(){if(!(g===null&&b===null))return f},this.setFoveation=function(St){f=St,g!==null&&(g.fixedFoveation=St),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=St)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ht)},this.getCameraTexture=function(St){return x[St]};let ue=null;function fe(St,Et){if(_=Et.getViewerPose(d||c),E=Et,_!==null){let Xt=_.views;b!==null&&(t.setRenderTargetFramebuffer(N,b.framebuffer),t.setRenderTarget(N));let oe=!1;Xt.length!==ht.cameras.length&&(ht.cameras.length=0,oe=!0);for(let he=0;he<Xt.length;he++){let Me=Xt[he],Ce=null;if(b!==null)Ce=b.getViewport(Me);else{let De=S.getViewSubImage(g,Me);Ce=De.viewport,he===0&&(t.setRenderTargetTextures(N,De.colorTexture,De.depthStencilTexture),t.setRenderTarget(N))}let we=it[he];we===void 0&&(we=new vn,we.layers.enable(he),we.viewport=new je,it[he]=we),we.matrix.fromArray(Me.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Me.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),he===0&&(ht.matrix.copy(we.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale)),oe===!0&&ht.cameras.push(we)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&C){S=i.getBinding();let he=S.getDepthInformation(Xt[0]);he&&he.isValid&&he.texture&&M.init(he,s.renderState)}if(Ut&&Ut.includes("camera-access")&&C){t.state.unbindTexture(),S=i.getBinding();for(let he=0;he<Xt.length;he++){let Me=Xt[he].camera;if(Me){let Ce=x[Me];Ce||(Ce=new po,x[Me]=Ce);let we=S.getCameraImage(Me);Ce.sourceTexture=we}}}}for(let Xt=0;Xt<O.length;Xt++){let oe=F[Xt],Ut=O[Xt];oe!==null&&Ut!==void 0&&Ut.update(oe,Et,d||c)}ue&&ue(St,Et),Et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Et}),E=null}let be=new Id;be.setAnimationLoop(fe),this.setAnimationLoop=function(St){ue=St},this.dispose=function(){}}},Bx=new We,Fd=new Se;Fd.set(-1,0,0,0,1,0,0,0,1);Vx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;Jl=class{constructor(t={}){let{canvas:e=td(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:b=Ln}=t;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=c;let C=b,M=new Set([fl,ul,hl]),x=new Set([Ln,ai,bs,ws,ll,cl]),U=new Uint32Array(4),X=new Int32Array(4),N=new ot,O=null,F=null,Y=[],P=[],V=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let J=this,K=!1,it=null,ht=null,Q=null,z=null;this._outputColorSpace=bn;let tt=0,H=0,_t=null,at=-1,pt=null,gt=new je,At=new je,Ot=null,ue=new xe(0),fe=0,be=e.width,St=e.height,Et=1,Xt=null,oe=null,Ut=new je(0,0,be,St),ge=new je(0,0,be,St),Je=!1,he=new ms,Me=!1,Ce=!1,we=new We,De=new ot,He=new je,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function lt(){return _t===null?Et:1}let k=i;function Rt(L,et){return e.getContext(L,et)}let Kt,B,T,G,rt,mt,It,Bt,vt,Tt,kt,jt,Gt,Ft,ne,ae,_e,st,zt,Mt,Vt,qt,Pt;try{let L={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Le,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),k===null){let et="webgl2";if(k=Rt(et,L),k===null)throw Rt(et)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(L){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),me("WebGLRenderer: "+L.message),L}function Lt(){Kt=new Zv(k),Kt.init(),Vt=new Ox(k,Kt),B=new kv(k,Kt,t,Vt),T=new Nx(k,Kt),B.reversedDepthBuffer&&g&&T.buffers.depth.setReversed(!0),ht=k.createFramebuffer(),Q=k.createFramebuffer(),z=k.createFramebuffer(),G=new Kv(k),rt=new yx,mt=new Dx(k,Kt,T,rt,B,Vt,G),It=new $v(J),Bt=new t0(k),qt=new Uv(k,Bt),vt=new Jv(k,Bt,G,qt),Tt=new ty(k,vt,Bt,qt,G),st=new Qv(k,B,mt),ne=new zv(rt),kt=new vx(J,It,Kt,B,qt,ne),jt=new kx(J,rt),Gt=new Sx,Ft=new Ax(Kt),_e=new Fv(J,It,T,Tt,E,f),ae=new Lx(J,Tt,B),Pt=new zx(k,G,B,T),zt=new Bv(k,Kt,G),Mt=new jv(k,Kt,G),G.programs=kt.programs,J.capabilities=B,J.extensions=Kt,J.properties=rt,J.renderLists=Gt,J.shadowMap=ae,J.state=T,J.info=G}C!==Ln&&(V=new ny(C,e.width,e.height,u,s,o));let ee=new Jh(J,k);this.xr=ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let L=Kt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Kt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(L){L!==void 0&&(Et=L,this.setSize(be,St,!1))},this.getSize=function(L){return L.set(be,St)},this.setSize=function(L,et,yt=!0){if(ee.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}be=L,St=et,e.width=Math.floor(L*Et),e.height=Math.floor(et*Et),yt===!0&&(e.style.width=L+"px",e.style.height=et+"px"),V!==null&&V.setSize(e.width,e.height),this.setViewport(0,0,L,et)},this.getDrawingBufferSize=function(L){return L.set(be*Et,St*Et).floor()},this.setDrawingBufferSize=function(L,et,yt){be=L,St=et,Et=yt,e.width=Math.floor(L*yt),e.height=Math.floor(et*yt),this.setViewport(0,0,L,et)},this.setEffects=function(L){if(C===Ln){me("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let et=0;et<L.length;et++)if(L[et].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(gt)},this.getViewport=function(L){return L.copy(Ut)},this.setViewport=function(L,et,yt,ft){L.isVector4?Ut.set(L.x,L.y,L.z,L.w):Ut.set(L,et,yt,ft),T.viewport(gt.copy(Ut).multiplyScalar(Et).round())},this.getScissor=function(L){return L.copy(ge)},this.setScissor=function(L,et,yt,ft){L.isVector4?ge.set(L.x,L.y,L.z,L.w):ge.set(L,et,yt,ft),T.scissor(At.copy(ge).multiplyScalar(Et).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(L){T.setScissorTest(Je=L)},this.setOpaqueSort=function(L){Xt=L},this.setTransparentSort=function(L){oe=L},this.getClearColor=function(L){return L.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(L=!0,et=!0,yt=!0){let ft=0;if(L){let dt=!1;if(_t!==null){let Yt=_t.texture.format;dt=M.has(Yt)}if(dt){let Yt=_t.texture.type,Dt=x.has(Yt),Wt=_e.getClearColor(),Qt=_e.getClearAlpha(),ie=Wt.r,Ht=Wt.g,pe=Wt.b;Dt?(U[0]=ie,U[1]=Ht,U[2]=pe,U[3]=Qt,k.clearBufferuiv(k.COLOR,0,U)):(X[0]=ie,X[1]=Ht,X[2]=pe,X[3]=Qt,k.clearBufferiv(k.COLOR,0,X))}else ft|=k.COLOR_BUFFER_BIT}et&&(ft|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),yt&&(ft|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ft!==0&&k.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),it=L},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),_e.dispose(),Gt.dispose(),Ft.dispose(),rt.dispose(),It.dispose(),Tt.dispose(),qt.dispose(),Pt.dispose(),kt.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Er),ee.removeEventListener("sessionend",Tr),An.stop()};function Fe(L){L.preventDefault(),ro("WebGLRenderer: Context Lost."),K=!0}function Le(){ro("WebGLRenderer: Context Restored."),K=!1;let L=G.autoReset,et=ae.enabled,yt=ae.autoUpdate,ft=ae.needsUpdate,dt=ae.type;Lt(),G.autoReset=L,ae.enabled=et,ae.autoUpdate=yt,ae.needsUpdate=ft,ae.type=dt}function Sn(L){me("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Tn(L){let et=L.target;et.removeEventListener("dispose",Tn),Rs(et)}function Rs(L){lr(L),rt.remove(L)}function lr(L){let et=rt.get(L).programs;et!==void 0&&(et.forEach(function(yt){kt.releaseProgram(yt)}),L.isShaderMaterial&&kt.releaseShaderCache(L))}this.renderBufferDirect=function(L,et,yt,ft,dt,Yt){et===null&&(et=j);let Dt=dt.isMesh&&dt.matrixWorld.determinantAffine()<0,Wt=ui(L,et,yt,ft,dt);T.setMaterial(ft,Dt);let Qt=yt.index,ie=1;if(ft.wireframe===!0){if(Qt=vt.getWireframeAttribute(yt),Qt===void 0)return;ie=2}let Ht=yt.drawRange,pe=yt.attributes.position,Jt=Ht.start*ie,Ne=(Ht.start+Ht.count)*ie;Yt!==null&&(Jt=Math.max(Jt,Yt.start*ie),Ne=Math.min(Ne,(Yt.start+Yt.count)*ie)),Qt!==null?(Jt=Math.max(Jt,0),Ne=Math.min(Ne,Qt.count)):pe!=null&&(Jt=Math.max(Jt,0),Ne=Math.min(Ne,pe.count));let Xe=Ne-Jt;if(Xe<0||Xe===1/0)return;qt.setup(dt,ft,Wt,yt,Qt);let Pe,r=zt;if(Qt!==null&&(Pe=Bt.get(Qt),r=Mt,r.setIndex(Pe)),dt.isMesh)ft.wireframe===!0?(T.setLineWidth(ft.wireframeLinewidth*lt()),r.setMode(k.LINES)):r.setMode(k.TRIANGLES);else if(dt.isLine){let a=ft.linewidth;a===void 0&&(a=1),T.setLineWidth(a*lt()),dt.isLineSegments?r.setMode(k.LINES):dt.isLineLoop?r.setMode(k.LINE_LOOP):r.setMode(k.LINE_STRIP)}else dt.isPoints?r.setMode(k.POINTS):dt.isSprite&&r.setMode(k.TRIANGLES);if(dt.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))r.renderMultiDraw(dt._multiDrawStarts,dt._multiDrawCounts,dt._multiDrawCount);else{let a=dt._multiDrawStarts,l=dt._multiDrawCounts,p=dt._multiDrawCount,v=Qt?Bt.get(Qt).bytesPerElement:1,A=rt.get(ft).currentProgram.getUniforms();for(let D=0;D<p;D++)A.setValue(k,"_gl_DrawID",D),r.render(a[D]/v,l[D])}else if(dt.isInstancedMesh)r.renderInstances(Jt,Xe,dt.count);else if(yt.isInstancedBufferGeometry){let a=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,l=Math.min(yt.instanceCount,a);r.renderInstances(Jt,Xe,l)}else r.render(Jt,Xe)};function I(L,et,yt,ft){it!==null&&L.isNodeMaterial&&it.setObject(ft,L),Me===!0&&ne.setState(L,yt,!1),L.transparent===!0&&L.side===yn&&L.forceSinglePass===!1?(L.side=En,L.needsUpdate=!0,Oi(L,et,ft),L.side=ir,L.needsUpdate=!0,Oi(L,et,ft),L.side=yn):Oi(L,et,ft)}this.compile=function(L,et,yt=null){yt===null&&(yt=L),it!==null&&it.renderStart(L,et,yt),F=Ft.get(yt),F.init(et),P.push(F),yt.traverseVisible(function(dt){dt.isLight&&dt.layers.test(et.layers)&&(F.pushLight(dt),dt.castShadow&&F.pushShadow(dt))}),L!==yt&&L.traverseVisible(function(dt){dt.isLight&&dt.layers.test(et.layers)&&(F.pushLight(dt),dt.castShadow&&F.pushShadow(dt))}),F.setupLights(),it!==null&&it.updateLights(F.state.lightsArray),Ce=this.localClippingEnabled,Me=ne.init(this.clippingPlanes,Ce),Me===!0&&ne.setGlobalState(this.clippingPlanes,et),it!==null&&ae.render(F.state.shadowsArray,yt,et);let ft=new Set;return L.traverse(function(dt){if(!(dt.isMesh||dt.isPoints||dt.isLine||dt.isSprite))return;let Yt=dt.material;if(Yt)if(Array.isArray(Yt))for(let Dt=0;Dt<Yt.length;Dt++){let Wt=Yt[Dt];I(Wt,yt,et,dt),ft.add(Wt)}else I(Yt,yt,et,dt),ft.add(Yt)}),F=P.pop(),it!==null&&it.renderEnd(),ft},this.compileAsync=function(L,et,yt=null){let ft=this.compile(L,et,yt);return new Promise(dt=>{function Yt(){if(ft.forEach(function(Dt){let Qt=rt.get(Dt).currentProgram;(Qt===void 0||Qt.isReady())&&ft.delete(Dt)}),ft.size===0){dt(L);return}setTimeout(Yt,10)}Kt.get("KHR_parallel_shader_compile")!==null?Yt():setTimeout(Yt,10)})};let Mi=null;function Re(L){Mi&&Mi(L)}function Er(){An.stop()}function Tr(){An.start()}let An=new Id;An.setAnimationLoop(Re),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(L){Mi=L,ee.setAnimationLoop(L),L===null?An.stop():An.start()},ee.addEventListener("sessionstart",Er),ee.addEventListener("sessionend",Tr),this.render=function(L,et){if(et!==void 0&&et.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;it!==null&&it.renderStart(L,et);let yt=ee.enabled===!0&&ee.isPresenting===!0,ft=V!==null&&(_t===null||yt)&&V.begin(J,_t);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(et),et=ee.getCamera()),L.isScene===!0&&L.onBeforeRender(J,L,et,_t),F=Ft.get(L,P.length),F.init(et),F.state.textureUnits=mt.getTextureUnits(),P.push(F),we.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),he.setFromProjectionMatrix(we,ei,et.reversedDepth),Ce=this.localClippingEnabled,Me=ne.init(this.clippingPlanes,Ce),O=Gt.get(L,Y.length),O.init(),Y.push(O),ee.enabled===!0&&ee.isPresenting===!0){let Dt=J.xr.getDepthSensingMesh();Dt!==null&&Vn(Dt,et,-1/0,J.sortObjects)}Vn(L,et,0,J.sortObjects),O.finish(),it!==null&&it.updateLights(F.state.lightsArray),J.sortObjects===!0&&O.sort(Xt,oe),ut=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ut&&_e.addToRenderList(O,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Me===!0&&ne.beginShadows();let dt=F.state.shadowsArray;if(ae.render(dt,L,et),Me===!0&&ne.endShadows(),(ft&&V.hasRenderPass())===!1){let Dt=O.opaque,Wt=O.transmissive;if(F.setupLights(),et.isArrayCamera){let Qt=et.cameras;if(Wt.length>0)for(let ie=0,Ht=Qt.length;ie<Ht;ie++){let pe=Qt[ie];hi(Dt,Wt,L,pe)}ut&&_e.render(L);for(let ie=0,Ht=Qt.length;ie<Ht;ie++){let pe=Qt[ie];Ar(O,L,pe,pe.viewport)}}else Wt.length>0&&hi(Dt,Wt,L,et),ut&&_e.render(L),Ar(O,L,et)}_t!==null&&H===0&&(mt.updateMultisampleRenderTarget(_t),mt.updateRenderTargetMipmap(_t)),ft&&V.end(J),L.isScene===!0&&L.onAfterRender(J,L,et),qt.resetDefaultState(),at=-1,pt=null,P.pop(),P.length>0?(F=P[P.length-1],mt.setTextureUnits(F.state.textureUnits),Me===!0&&ne.setGlobalState(J.clippingPlanes,F.state.camera)):F=null,Y.pop(),Y.length>0?O=Y[Y.length-1]:O=null,it!==null&&it.renderEnd()};function Vn(L,et,yt,ft){if(L.visible===!1)return;if(L.layers.test(et.layers)){if(L.isGroup)yt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(et);else if(L.isLightProbeGrid)F.pushLightProbeGrid(L);else if(L.isLight)F.pushLight(L),L.castShadow&&F.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(he)){ft&&He.setFromMatrixPosition(L.matrixWorld).applyMatrix4(we);let Dt=Tt.update(L),Wt=L.material;Wt.visible&&O.push(L,Dt,Wt,yt,He.z,null,et)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(he))){let Dt=Tt.update(L),Wt=L.material;if(ft&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),He.copy(L.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),He.copy(Dt.boundingSphere.center)),He.applyMatrix4(L.matrixWorld).applyMatrix4(we)),Array.isArray(Wt)){let Qt=Dt.groups;for(let ie=0,Ht=Qt.length;ie<Ht;ie++){let pe=Qt[ie],Jt=Wt[pe.materialIndex];Jt&&Jt.visible&&O.push(L,Dt,Jt,yt,He.z,pe,et)}}else Wt.visible&&O.push(L,Dt,Wt,yt,He.z,null,et)}}let Yt=L.children;for(let Dt=0,Wt=Yt.length;Dt<Wt;Dt++)Vn(Yt[Dt],et,yt,ft)}function Ar(L,et,yt,ft){let{opaque:dt,transmissive:Yt,transparent:Dt}=L;F.setupLightsView(yt),Me===!0&&ne.setGlobalState(J.clippingPlanes,yt),ft&&T.viewport(gt.copy(ft)),dt.length>0&&bi(dt,et,yt),Yt.length>0&&bi(Yt,et,yt),Dt.length>0&&bi(Dt,et,yt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function hi(L,et,yt,ft){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ft.id]===void 0){let Jt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ft.id]=new In(1,1,{generateMipmaps:!0,type:Jt?ci:Ln,minFilter:sr,samples:Math.max(4,B.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}let Yt=F.state.transmissionRenderTarget[ft.id],Dt=ft.viewport||gt;Yt.setSize(Dt.z*J.transmissionResolutionScale,Dt.w*J.transmissionResolutionScale);let Wt=J.getRenderTarget(),Qt=J.getActiveCubeFace(),ie=J.getActiveMipmapLevel();J.setRenderTarget(Yt),J.getClearColor(ue),fe=J.getClearAlpha(),fe<1&&J.setClearColor(16777215,.5),J.clear(),ut&&_e.render(yt);let Ht=J.toneMapping;J.toneMapping=oi;let pe=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),F.setupLightsView(ft),Me===!0&&ne.setGlobalState(J.clippingPlanes,ft),bi(L,yt,ft),mt.updateMultisampleRenderTarget(Yt),mt.updateRenderTargetMipmap(Yt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ne=0,Xe=et.length;Ne<Xe;Ne++){let Pe=et[Ne],{object:r,geometry:a,material:l,group:p}=Pe;if(l.side===yn&&r.layers.test(ft.layers)){let v=l.side;l.side=En,l.needsUpdate=!0,Pr(r,yt,ft,a,l,p),l.side=v,l.needsUpdate=!0,Jt=!0}}Jt===!0&&(mt.updateMultisampleRenderTarget(Yt),mt.updateRenderTargetMipmap(Yt))}J.setRenderTarget(Wt,Qt,ie),J.setClearColor(ue,fe),pe!==void 0&&(ft.viewport=pe),J.toneMapping=Ht}function bi(L,et,yt){let ft=et.isScene===!0?et.overrideMaterial:null;for(let dt=0,Yt=L.length;dt<Yt;dt++){let Dt=L[dt],{object:Wt,geometry:Qt,group:ie}=Dt,Ht=Dt.material;Ht.allowOverride===!0&&ft!==null&&(Ht=ft),Wt.layers.test(yt.layers)&&Pr(Wt,et,yt,Qt,Ht,ie)}}function Pr(L,et,yt,ft,dt,Yt){it!==null&&dt.isNodeMaterial&&it.setObject(L,dt),L.onBeforeRender(J,et,yt,ft,dt,Yt),L.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),dt.onBeforeRender(J,et,yt,ft,L,Yt),dt.transparent===!0&&dt.side===yn&&dt.forceSinglePass===!1?(dt.side=En,dt.needsUpdate=!0,J.renderBufferDirect(yt,et,ft,dt,L,Yt),dt.side=ir,dt.needsUpdate=!0,J.renderBufferDirect(yt,et,ft,dt,L,Yt),dt.side=yn):J.renderBufferDirect(yt,et,ft,dt,L,Yt),L.onAfterRender(J,et,yt,ft,dt,Yt)}function Oi(L,et,yt){et.isScene!==!0&&(et=j);let ft=rt.get(L),dt=F.state.lights,Yt=F.state.shadowsArray,Dt=dt.state.version,Wt=kt.getParameters(L,dt.state,Yt,et,yt,F.state.lightProbeGridArray),Qt=kt.getProgramCacheKey(Wt),ie=ft.programs;ft.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?et.environment:null,ft.fog=et.fog;let Ht=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ft.envMap=It.get(L.envMap||ft.environment,Ht),ft.envMapRotation=ft.environment!==null&&L.envMap===null?et.environmentRotation:L.envMapRotation,ie===void 0&&(L.addEventListener("dispose",Tn),ie=new Map,ft.programs=ie);let pe=ie.get(Qt);if(pe!==void 0){if(ft.currentProgram===pe&&ft.lightsStateVersion===Dt)return Ir(L,Wt),pe}else Wt.uniforms=kt.getUniforms(L),it!==null&&L.isNodeMaterial&&it.build(L,yt,Wt),L.onBeforeCompile(Wt,J),pe=kt.acquireProgram(Wt,Qt),ie.set(Qt,pe),ft.uniforms=Wt.uniforms;let Jt=ft.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Jt.clippingPlanes=ne.uniform),Ir(L,Wt),ft.needsLights=Ds(L),ft.lightsStateVersion=Dt,ft.needsLights&&(Jt.ambientLightColor.value=dt.state.ambient,Jt.lightProbe.value=dt.state.probe,Jt.sunLights.value=dt.state.sun,Jt.sunLightShadows.value=dt.state.sunShadow,Jt.directionalLights.value=dt.state.directional,Jt.directionalLightShadows.value=dt.state.directionalShadow,Jt.spotLights.value=dt.state.spot,Jt.spotLightShadows.value=dt.state.spotShadow,Jt.rectAreaLights.value=dt.state.rectArea,Jt.ltc_1.value=dt.state.rectAreaLTC1,Jt.ltc_2.value=dt.state.rectAreaLTC2,Jt.pointLights.value=dt.state.point,Jt.pointLightShadows.value=dt.state.pointShadow,Jt.hemisphereLights.value=dt.state.hemi,Jt.sunShadowMatrix.value=dt.state.sunShadowMatrix,Jt.sunShadowCascade.value=dt.state.sunShadowCascade,Jt.directionalShadowMatrix.value=dt.state.directionalShadowMatrix,Jt.spotLightMatrix.value=dt.state.spotLightMatrix,Jt.spotLightMap.value=dt.state.spotLightMap,Jt.pointShadowMatrix.value=dt.state.pointShadowMatrix),ft.lightProbeGrid=F.state.lightProbeGridArray.length>0,ft.currentProgram=pe,ft.uniformsList=null,pe}function Cr(L){if(L.uniformsList===null){let et=L.currentProgram.getUniforms();L.uniformsList=Ps.seqWithValue(et.seq,L.uniforms)}return L.uniformsList}function Ir(L,et){let yt=rt.get(L);yt.outputColorSpace=et.outputColorSpace,yt.batching=et.batching,yt.batchingColor=et.batchingColor,yt.instancing=et.instancing,yt.instancingColor=et.instancingColor,yt.instancingMorph=et.instancingMorph,yt.skinning=et.skinning,yt.morphTargets=et.morphTargets,yt.morphNormals=et.morphNormals,yt.morphColors=et.morphColors,yt.morphTargetsCount=et.morphTargetsCount,yt.numClippingPlanes=et.numClippingPlanes,yt.numIntersection=et.numClipIntersection,yt.vertexAlphas=et.vertexAlphas,yt.vertexTangents=et.vertexTangents,yt.toneMapping=et.toneMapping}function Ls(L,et){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;N.setFromMatrixPosition(et.matrixWorld);for(let yt=0,ft=L.length;yt<ft;yt++){let dt=L[yt];if(dt.texture!==null&&dt.boundingBox.containsPoint(N))return dt}return null}function ui(L,et,yt,ft,dt){et.isScene!==!0&&(et=j),mt.resetTextureUnits();let Yt=et.fog,Dt=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial?et.environment:null,Wt=_t===null?J.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ie.workingColorSpace,Qt=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial&&!ft.envMap||ft.isMeshPhongMaterial&&!ft.envMap,ie=It.get(ft.envMap||Dt,Qt),Ht=ft.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,pe=!!yt.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),Jt=!!yt.morphAttributes.position,Ne=!!yt.morphAttributes.normal,Xe=!!yt.morphAttributes.color,Pe=oi;ft.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Pe=J.toneMapping);let r=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,a=r!==void 0?r.length:0,l=rt.get(ft),p=F.state.lights;if(Me===!0&&(Ce===!0||L!==pt)){let Ct=L===pt&&ft.id===at;ne.setState(ft,L,Ct)}let v=!1;ft.version===l.__version?(l.needsLights&&l.lightsStateVersion!==p.state.version||l.outputColorSpace!==Wt||dt.isBatchedMesh&&l.batching===!1||!dt.isBatchedMesh&&l.batching===!0||dt.isBatchedMesh&&l.batchingColor===!0&&dt._colorsTexture===null||dt.isBatchedMesh&&l.batchingColor===!1&&dt._colorsTexture!==null||dt.isInstancedMesh&&l.instancing===!1||!dt.isInstancedMesh&&l.instancing===!0||dt.isSkinnedMesh&&l.skinning===!1||!dt.isSkinnedMesh&&l.skinning===!0||dt.isInstancedMesh&&l.instancingColor===!0&&dt.instanceColor===null||dt.isInstancedMesh&&l.instancingColor===!1&&dt.instanceColor!==null||dt.isInstancedMesh&&l.instancingMorph===!0&&dt.morphTexture===null||dt.isInstancedMesh&&l.instancingMorph===!1&&dt.morphTexture!==null||l.envMap!==ie||ft.fog===!0&&l.fog!==Yt||l.numClippingPlanes!==void 0&&(l.numClippingPlanes!==ne.numPlanes||l.numIntersection!==ne.numIntersection)||l.vertexAlphas!==Ht||l.vertexTangents!==pe||l.morphTargets!==Jt||l.morphNormals!==Ne||l.morphColors!==Xe||l.toneMapping!==Pe||l.morphTargetsCount!==a||!!l.lightProbeGrid!=F.state.lightProbeGridArray.length>0)&&(v=!0):(v=!0,l.__version=ft.version);let A=l.currentProgram;v===!0&&(A=Oi(ft,et,dt),it&&ft.isNodeMaterial&&it.onUpdateProgram(ft,A,l));let D=!1,q=!1,Z=!1,ct=A.getUniforms(),wt=l.uniforms;if(T.useProgram(A.program)&&(D=!0,q=!0,Z=!0),ft.id!==at&&(at=ft.id,q=!0),l.needsLights){let Ct=Ls(F.state.lightProbeGridArray,dt);l.lightProbeGrid!==Ct&&(l.lightProbeGrid=Ct,q=!0)}if(D||pt!==L){T.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),ct.setValue(k,"projectionMatrix",L.projectionMatrix),ct.setValue(k,"viewMatrix",L.matrixWorldInverse);let re=ct.map.cameraPosition;re!==void 0&&re.setValue(k,De.setFromMatrixPosition(L.matrixWorld)),B.logarithmicDepthBuffer&&ct.setValue(k,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&ct.setValue(k,"isOrthographic",L.isOrthographicCamera===!0),pt!==L&&(pt=L,q=!0,Z=!0)}if(l.needsLights&&(p.state.sunShadowMap.length>0&&ct.setValue(k,"sunShadowMap",p.state.sunShadowMap,mt),p.state.directionalShadowMap.length>0&&ct.setValue(k,"directionalShadowMap",p.state.directionalShadowMap,mt),p.state.spotShadowMap.length>0&&ct.setValue(k,"spotShadowMap",p.state.spotShadowMap,mt),p.state.pointShadowMap.length>0&&ct.setValue(k,"pointShadowMap",p.state.pointShadowMap,mt)),dt.isSkinnedMesh){ct.setOptional(k,dt,"bindMatrix"),ct.setOptional(k,dt,"bindMatrixInverse");let Ct=dt.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ct.setValue(k,"boneTexture",Ct.boneTexture,mt))}dt.isBatchedMesh&&(ct.setOptional(k,dt,"batchingTexture"),ct.setValue(k,"batchingTexture",dt._matricesTexture,mt),ct.setOptional(k,dt,"batchingIdTexture"),ct.setValue(k,"batchingIdTexture",dt._indirectTexture,mt),ct.setOptional(k,dt,"batchingColorTexture"),dt._colorsTexture!==null&&ct.setValue(k,"batchingColorTexture",dt._colorsTexture,mt));let bt=yt.morphAttributes;if((bt.position!==void 0||bt.normal!==void 0||bt.color!==void 0)&&st.update(dt,yt,A),(q||l.receiveShadow!==dt.receiveShadow)&&(l.receiveShadow=dt.receiveShadow,ct.setValue(k,"receiveShadow",dt.receiveShadow)),(ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial)&&ft.envMap===null&&et.environment!==null&&(wt.envMapIntensity.value=et.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=Hx()),q){if(ct.setValue(k,"toneMappingExposure",J.toneMappingExposure),l.needsLights&&Ns(wt,Z),Yt&&ft.fog===!0&&jt.refreshFogUniforms(wt,Yt),jt.refreshMaterialUniforms(wt,ft,Et,St,F.state.transmissionRenderTarget[L.id]),l.needsLights&&l.lightProbeGrid){let Ct=l.lightProbeGrid;wt.probesSH.value=Ct.texture,wt.probesMin.value.copy(Ct.boundingBox.min),wt.probesMax.value.copy(Ct.boundingBox.max),wt.probesResolution.value.copy(Ct.resolution)}Ps.upload(k,Cr(l),wt,mt)}if(ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Ps.upload(k,Cr(l),wt,mt),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&ct.setValue(k,"center",dt.center),ct.setValue(k,"modelViewMatrix",dt.modelViewMatrix),ct.setValue(k,"normalMatrix",dt.normalMatrix),ct.setValue(k,"modelMatrix",dt.matrixWorld),ft.uniformsGroups!==void 0){let Ct=ft.uniformsGroups;for(let re=0,ve=Ct.length;re<ve;re++){let Ee=Ct[re];Pt.update(Ee,A),Pt.bind(Ee,A)}}return A}function Ns(L,et){L.ambientLightColor.needsUpdate=et,L.lightProbe.needsUpdate=et,L.sunLights.needsUpdate=et,L.sunLightShadows.needsUpdate=et,L.directionalLights.needsUpdate=et,L.directionalLightShadows.needsUpdate=et,L.pointLights.needsUpdate=et,L.pointLightShadows.needsUpdate=et,L.spotLights.needsUpdate=et,L.spotLightShadows.needsUpdate=et,L.rectAreaLights.needsUpdate=et,L.hemisphereLights.needsUpdate=et}function Ds(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return _t},this.setRenderTargetTextures=function(L,et,yt){let ft=rt.get(L);ft.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),rt.get(L.texture).__webglTexture=et,rt.get(L.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:yt,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,et){let yt=rt.get(L);yt.__webglFramebuffer=et,yt.__useDefaultFramebuffer=et===void 0},this.setRenderTarget=function(L,et=0,yt=0){_t=L,tt=et,H=yt;let ft=null,dt=!1,Yt=!1;if(L){let Wt=rt.get(L);if(Wt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(k.FRAMEBUFFER,Wt.__webglFramebuffer),gt.copy(L.viewport),At.copy(L.scissor),Ot=L.scissorTest,T.viewport(gt),T.scissor(At),T.setScissorTest(Ot),at=-1;return}else if(Wt.__webglFramebuffer===void 0)mt.setupRenderTarget(L);else if(Wt.__hasExternalTextures)mt.rebindTextures(L,rt.get(L.texture).__webglTexture,rt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Ht=L.depthTexture;if(Wt.__boundDepthTexture!==Ht){if(Ht!==null&&rt.has(Ht)&&(L.width!==Ht.image.width||L.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(L)}}let Qt=L.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Yt=!0);let ie=rt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ie[et])?ft=ie[et][yt]:ft=ie[et],dt=!0):L.samples>0&&mt.useMultisampledRTT(L)===!1?ft=rt.get(L).__webglMultisampledFramebuffer:Array.isArray(ie)?ft=ie[yt]:ft=ie,gt.copy(L.viewport),At.copy(L.scissor),Ot=L.scissorTest}else gt.copy(Ut).multiplyScalar(Et).floor(),At.copy(ge).multiplyScalar(Et).floor(),Ot=Je;if(yt!==0&&(ft=ht),T.bindFramebuffer(k.FRAMEBUFFER,ft)&&T.drawBuffers(L,ft),T.viewport(gt),T.scissor(At),T.setScissorTest(Ot),dt){let Wt=rt.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+et,Wt.__webglTexture,yt)}else if(Yt){let Wt=et;for(let Qt=0;Qt<L.textures.length;Qt++){let ie=rt.get(L.textures[Qt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Qt,ie.__webglTexture,yt,Wt)}}else if(L!==null&&yt!==0){let Wt=rt.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Wt.__webglTexture,yt)}at=-1};function Rr(L){let et=rt.get(L);return(et.__readFormat!==L.format||et.__readType!==L.type)&&(et.__readFormat=L.format,et.__readType=L.type,et.__formatReadable=B.textureFormatReadable(L.format),et.__typeReadable=B.textureTypeReadable(L.type)),et}this.readRenderTargetPixels=function(L,et,yt,ft,dt,Yt,Dt,Wt=0){if(!(L&&L.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=rt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Dt!==void 0&&(Qt=Qt[Dt]),Qt){T.bindFramebuffer(k.FRAMEBUFFER,Qt);try{let ie=L.textures[Wt],Ht=ie.format,pe=ie.type;L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Wt);let Jt=Rr(ie);if(Jt.__formatReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt.__typeReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=L.width-ft&&yt>=0&&yt<=L.height-dt&&k.readPixels(et,yt,ft,dt,Vt.convert(Ht),Vt.convert(pe),Yt)}finally{let ie=_t!==null?rt.get(_t).__webglFramebuffer:null;T.bindFramebuffer(k.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(L,et,yt,ft,dt,Yt,Dt,Wt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=rt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Dt!==void 0&&(Qt=Qt[Dt]),Qt)if(et>=0&&et<=L.width-ft&&yt>=0&&yt<=L.height-dt){T.bindFramebuffer(k.FRAMEBUFFER,Qt);let ie=L.textures[Wt],Ht=ie.format,pe=ie.type;L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Wt);let Jt=Rr(ie);if(Jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ne),k.bufferData(k.PIXEL_PACK_BUFFER,Yt.byteLength,k.STREAM_READ),k.readPixels(et,yt,ft,dt,Vt.convert(Ht),Vt.convert(pe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Xe=_t!==null?rt.get(_t).__webglFramebuffer:null;T.bindFramebuffer(k.FRAMEBUFFER,Xe);let Pe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await nd(k,Pe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ne),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Yt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Ne),k.deleteSync(Pe),Yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,et=null,yt=0){let ft=Math.pow(2,-yt),dt=Math.floor(L.image.width*ft),Yt=Math.floor(L.image.height*ft),Dt=et!==null?et.x:0,Wt=et!==null?et.y:0;mt.setTexture2D(L,0),k.copyTexSubImage2D(k.TEXTURE_2D,yt,0,0,Dt,Wt,dt,Yt),T.unbindTexture()},this.copyTextureToTexture=function(L,et,yt=null,ft=null,dt=0,Yt=0){let Dt,Wt,Qt,ie,Ht,pe,Jt,Ne,Xe,Pe=L.isCompressedTexture?L.mipmaps[Yt]:L.image;if(yt!==null)Dt=yt.max.x-yt.min.x,Wt=yt.max.y-yt.min.y,Qt=yt.isBox3?yt.max.z-yt.min.z:1,ie=yt.min.x,Ht=yt.min.y,pe=yt.isBox3?yt.min.z:0;else{let wt=Math.pow(2,-dt);Dt=Math.floor(Pe.width*wt),Wt=Math.floor(Pe.height*wt),L.isDataArrayTexture?Qt=Pe.depth:L.isData3DTexture?Qt=Math.floor(Pe.depth*wt):Qt=1,ie=0,Ht=0,pe=0}ft!==null?(Jt=ft.x,Ne=ft.y,Xe=ft.z):(Jt=0,Ne=0,Xe=0);let r=Vt.convert(et.format),a=Vt.convert(et.type),l;et.isData3DTexture?(mt.setTexture3D(et,0),l=k.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(mt.setTexture2DArray(et,0),l=k.TEXTURE_2D_ARRAY):(mt.setTexture2D(et,0),l=k.TEXTURE_2D),T.activeTexture(k.TEXTURE0),T.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,et.flipY),T.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),T.pixelStorei(k.UNPACK_ALIGNMENT,et.unpackAlignment);let p=T.getParameter(k.UNPACK_ROW_LENGTH),v=T.getParameter(k.UNPACK_IMAGE_HEIGHT),A=T.getParameter(k.UNPACK_SKIP_PIXELS),D=T.getParameter(k.UNPACK_SKIP_ROWS),q=T.getParameter(k.UNPACK_SKIP_IMAGES);T.pixelStorei(k.UNPACK_ROW_LENGTH,Pe.width),T.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pe.height),T.pixelStorei(k.UNPACK_SKIP_PIXELS,ie),T.pixelStorei(k.UNPACK_SKIP_ROWS,Ht),T.pixelStorei(k.UNPACK_SKIP_IMAGES,pe);let Z=L.isDataArrayTexture||L.isData3DTexture,ct=et.isDataArrayTexture||et.isData3DTexture;if(L.isDepthTexture){let wt=rt.get(L),bt=rt.get(et),Ct=rt.get(wt.__renderTarget),re=rt.get(bt.__renderTarget);T.bindFramebuffer(k.READ_FRAMEBUFFER,Ct.__webglFramebuffer),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ve=0;ve<Qt;ve++)Z&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rt.get(L).__webglTexture,dt,pe+ve),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rt.get(et).__webglTexture,Yt,Xe+ve)),k.blitFramebuffer(ie,Ht,Dt,Wt,Jt,Ne,Dt,Wt,k.DEPTH_BUFFER_BIT,k.NEAREST);T.bindFramebuffer(k.READ_FRAMEBUFFER,null),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(dt!==0||L.isRenderTargetTexture||rt.has(L)){let wt=rt.get(L),bt=rt.get(et);T.bindFramebuffer(k.READ_FRAMEBUFFER,Q),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,z);for(let Ct=0;Ct<Qt;Ct++)Z?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wt.__webglTexture,dt,pe+Ct):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,wt.__webglTexture,dt),ct?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bt.__webglTexture,Yt,Xe+Ct):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bt.__webglTexture,Yt),dt!==0?k.blitFramebuffer(ie,Ht,Dt,Wt,Jt,Ne,Dt,Wt,k.COLOR_BUFFER_BIT,k.NEAREST):ct?k.copyTexSubImage3D(l,Yt,Jt,Ne,Xe+Ct,ie,Ht,Dt,Wt):k.copyTexSubImage2D(l,Yt,Jt,Ne,ie,Ht,Dt,Wt);T.bindFramebuffer(k.READ_FRAMEBUFFER,null),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ct?L.isDataTexture||L.isData3DTexture?k.texSubImage3D(l,Yt,Jt,Ne,Xe,Dt,Wt,Qt,r,a,Pe.data):et.isCompressedArrayTexture?k.compressedTexSubImage3D(l,Yt,Jt,Ne,Xe,Dt,Wt,Qt,r,Pe.data):k.texSubImage3D(l,Yt,Jt,Ne,Xe,Dt,Wt,Qt,r,a,Pe):L.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Yt,Jt,Ne,Dt,Wt,r,a,Pe.data):L.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Yt,Jt,Ne,Pe.width,Pe.height,r,Pe.data):k.texSubImage2D(k.TEXTURE_2D,Yt,Jt,Ne,Dt,Wt,r,a,Pe);T.pixelStorei(k.UNPACK_ROW_LENGTH,p),T.pixelStorei(k.UNPACK_IMAGE_HEIGHT,v),T.pixelStorei(k.UNPACK_SKIP_PIXELS,A),T.pixelStorei(k.UNPACK_SKIP_ROWS,D),T.pixelStorei(k.UNPACK_SKIP_IMAGES,q),Yt===0&&et.generateMipmaps&&k.generateMipmap(l),T.unbindTexture()},this.initRenderTarget=function(L){rt.get(L).__webglFramebuffer===void 0&&mt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?mt.setTextureCube(L,0):L.isData3DTexture?mt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?mt.setTexture2DArray(L,0):mt.setTexture2D(L,0),T.unbindTexture()},this.resetState=function(){tt=0,H=0,_t=null,T.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}}});function Wx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Yx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function qx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kd),this.state=Ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $x(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ve.DOLLY;break;case er.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}break;case er.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Kh)}function Zx(n){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Jx(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(n.preventDefault(),this.dispatchEvent(Kh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(kd))}function jx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Kx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ve.TOUCH_ROTATE;break;case nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ve.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Kh)}function Qx(n){switch(this._trackPointer(n),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ve.NONE}}function tS(n){this.enabled!==!1&&n.preventDefault()}function eS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ud,Kh,kd,tc,Bd,Xx,sn,Nn,Ve,jh,ec,zd=Pn(()=>{Ql();Ud={type:"change"},Kh={type:"start"},kd={type:"end"},tc=new $i,Bd=new Un,Xx=Math.cos(70*Ih.DEG2RAD),sn=new ot,Nn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jh=1e-6,ec=class extends wo{constructor(t,e=null){super(t,e),this.state=Ve.NONE,this.target=new ot,this.cursor=new ot,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:er.ROTATE,MIDDLE:er.DOLLY,RIGHT:er.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ot,this._lastQuaternion=new Bn,this._lastTargetPosition=new ot,this._quat=new Bn().setFromUnitVectors(t.up,new ot(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xs,this._sphericalDelta=new xs,this._scale=1,this._panOffset=new ot,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new ot,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yx.bind(this),this._onPointerDown=Wx.bind(this),this._onPointerUp=qx.bind(this),this._onContextMenu=tS.bind(this),this._onMouseWheel=Jx.bind(this),this._onKeyDown=jx.bind(this),this._onTouchStart=Kx.bind(this),this._onTouchMove=Qx.bind(this),this._onMouseDown=$x.bind(this),this._onMouseMove=Zx.bind(this),this._interceptControlDown=eS.bind(this),this._interceptControlUp=nS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ve.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ud),this.update(),this.state=Ve.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;sn.copy(e).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Nn:i>Math.PI&&(i-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),e.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){let u=sn.length();c=this._clampDistance(u*this._scale);let f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){let u=new ot(this._mouse.x,this._mouse.y,0);u.unproject(this.object);let f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;let d=new ot(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),c=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(tc.origin.copy(this.object.position),tc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tc.direction))<Xx?this.object.lookAt(this.target):(Bd.setFromNormalAndCoplanarPoint(this.object.up,this.target),tc.intersectPlane(Bd,this.target))))}else if(this.object.isOrthographicCamera){let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jh||this._lastTargetPosition.distanceToSquared(this.target)>jh?(this.dispatchEvent(Ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Nn/60*this.autoRotateSpeed*t:Nn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){sn.setFromMatrixColumn(e,0),sn.multiplyScalar(-t),this._panOffset.add(sn)}_panUp(t,e){this.screenSpacePanning===!0?sn.setFromMatrixColumn(e,1):(sn.setFromMatrixColumn(e,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(t),this._panOffset.add(sn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;sn.copy(s).sub(this.target);let o=sn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,c=i.width,u=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let c=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new le,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function Vd(n,t,e){n.onBeforeCompile=i=>{i.uniforms.uCut={value:t-.05},i.uniforms.uBottom={value:t},i.vertexShader=`varying float vZ;
uniform float uBottom;
`+i.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
`+(e?"objectNormal = vec3(0.0, 0.0, -1.0);":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vZ = transformed.z;
`+(e?"transformed.z = uBottom;":"")),i.fragmentShader=`varying float vZ;
uniform float uCut;
`+i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (vZ < uCut) discard;`),e||(i.fragmentShader=i.fragmentShader.replace("#include <normal_fragment_begin>",Te.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")))},n.customProgramCacheKey=()=>`through-${e}`}function Hd(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let s=i.getContext("2d");s.font="600 84px Inter, system-ui, sans-serif",s.fillStyle="#"+new xe(t).getHexString(),s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,64);let o=new fo(i);o.colorSpace=bn;let c=new ho(new ps({map:o,depthTest:!1,transparent:!0}));return c.scale.set(e*2,e,1),c.renderOrder=6,c}var qn,Is,iS,nc,Gd=Pn(()=>{Ql();zd();qn={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa"},Is={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};iS=(n,t)=>n.some(e=>e.key===t);nc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new Jl({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new oo,this.camera=new vn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new ec(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new xo(16777215,4478310,1.6));let t=new ys(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new ys(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new ni,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=s=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&s-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=s,this.onFrame&&this.onFrame(s),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,s=new ot((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),c=new ot(-.45,-.8,.75).normalize(),u=[];for(let S of[t[0],e[0]])for(let g of[t[1],e[1]])for(let b of[t[2],e[2]])u.push(new ot(S,g,b));let f=s.clone(),d=o*2,_=()=>{this.camera.position.copy(f).addScaledVector(c,d),this.camera.near=d/100,this.camera.far=d*100,this.camera.lookAt(f),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let S=0;S<8;S++){_();let g=1/0,b=-1/0,E=1/0,C=-1/0;for(let O of u){let F=O.clone().project(this.camera);g=Math.min(g,F.x),b=Math.max(b,F.x),E=Math.min(E,F.y),C=Math.max(C,F.y)}let M=Math.max((b-g)/2,(C-E)/2);if(!(M>0))break;let x=d*Math.tan(this.camera.fov*Math.PI/360),U=x*this.camera.aspect,X=new ot().setFromMatrixColumn(this.camera.matrixWorld,0),N=new ot().setFromMatrixColumn(this.camera.matrixWorld,1);f.addScaledVector(X,(g+b)/2*U).addScaledVector(N,(E+C)/2*x),d*=M/(1-i)}_(),this.controls.target.copy(f),this.controls.update()}showPart(t,e=[]){this.clear();let i=new Ze;i.setAttribute("position",new $e(t.positions,3)),i.setIndex(new $e(t.indices,1)),i.computeVertexNormals();let s=new ze(i,new Rn({color:9348283,metalness:.15,roughness:.55,side:yn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(s),this.pickMesh=s;let o=new yr(new _s(i,25),new si({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let u of e)this.addLoops(u.loops,u.z,u.color,u.dashed,u.opacity);i.computeBoundingBox();let c=i.boundingBox;this.keepCamera||this.frame(c.min.toArray(),c.max.toArray())}addLoops(t,e,i,s,o=.95){for(let c of t){let u=c.map(([S,g])=>new ot(S,g,e)),f=new Ze().setFromPoints([...u,u[0]]),d=s?new _o({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new si({color:i,transparent:!0,opacity:o,depthTest:!1}),_=new vr(f,d);s&&_.computeLineDistances(),_.renderOrder=2,this.content.add(_)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let s=t.getBoundingClientRect(),o=new Mo;if(o.setFromCamera(new le((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let f=o.intersectObjects(this.markers)[0];if(f){this.onMarker(f.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let c=o.intersectObject(this.pickMesh)[0];if(!c||!c.face)return;let u=c.face.normal.clone();u.dot(o.ray.direction)>0&&u.negate(),this.onPick([u.x,u.y,u.z])})}showZero({stock:t,part:e,points:i,selected:s,zFace:o,color:c,accent:u="#4c6ef5"}){this.clear();let f=t.maxX-t.minX,d=t.maxY-t.minY,_=t.top-t.bottom,S=Math.max(f,d,_),g=new Ji(f,d,_);g.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let b=new ze(g,new Rn({color:c,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(b.renderOrder=2,this.content.add(b),this.content.add(new yr(new _s(g),new si({color:new xe(c).multiplyScalar(.6)}))),e){let x=new Ze;x.setAttribute("position",new $e(e.positions,3)),x.setIndex(new $e(e.indices,1)),x.computeVertexNormals(),this.content.add(new ze(x,new Rn({color:9348283,metalness:.15,roughness:.55})))}let E=o==="bed"?t.bottom:t.top,C=S*.014;this.markers=[];for(let x of i){let U=x.key===s,X=new ze(new xr(U?C*1.3:C,24,16),new ri({color:U?u:16777215}));if(X.position.set(x.x,x.y,E),X.userData.key=x.key,X.renderOrder=4,X.material.depthTest=!1,!U){let O=new ze(new xr(C*1.25,24,16),new ri({color:6187893,depthTest:!1}));O.renderOrder=3,X.add(O)}let N=new ze(new xr(C*3.5,12,8),new ri({visible:!1}));if(N.userData.key=x.key,X.add(N),this.markers.push(N),this.content.add(X),U){let O=new ze(new go(C*1.6,C*2,40),new ri({color:u,transparent:!0,depthTest:!1,side:yn}));O.position.copy(X.position),O.renderOrder=4,this.content.add(O),this.pulse=O;let F=S*.3;for(let[Y,P,V]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let J=new bo(new ot(...Y),X.position,F,P,F*.13,F*.055);J.line.material.depthTest=!1,J.cone.material.depthTest=!1,J.renderOrder=5,J.line.renderOrder=5,J.cone.renderOrder=5,this.content.add(J);let K=Hd(V,P,S*.05);K.position.copy(X.position).add(new ot(...Y).multiplyScalar(F*1.18)),this.content.add(K)}}}let M=Hd("Front",9675444,S*.04);M.position.set((t.minX+t.maxX)/2,t.minY-S*.08,t.bottom),this.content.add(M),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),iS(i,s)||(this.pulse=null),this.onFrame=x=>{if(!this.pulse)return;let U=x%1600/1600;this.pulse.scale.setScalar(1+U*1.6),this.pulse.material.opacity=.8*(1-U),this.pulse.lookAt(this.camera.position)}}showStock(t,e,i){this.clear(),this.keepCamera=!1;let s=t.nx,o=t.ny,c=s*o,u=new Float32Array(c*3),f=new Float32Array(c*3),d=new xe(e);for(let x=0;x<o;x++)for(let U=0;U<s;U++){let X=x*s+U;u[X*3]=t.x0+U*t.cell,u[X*3+1]=t.y0+x*t.cell,u[X*3+2]=t.h[X],f[X*3]=d.r,f[X*3+1]=d.g,f[X*3+2]=d.b}let _=new Uint32Array((s-1)*(o-1)*6),S=0;for(let x=0;x<o-1;x++)for(let U=0;U<s-1;U++){let X=x*s+U,N=X+1,O=X+s,F=O+1;_[S++]=X,_[S++]=N,_[S++]=F,_[S++]=X,_[S++]=F,_[S++]=O}let g=new Ze;g.setAttribute("position",new $e(u,3).setUsage(Es)),g.setAttribute("color",new $e(f,3).setUsage(Es));let b=new Float32Array(c*3);for(let x=0;x<c;x++)b[x*3+2]=1;g.setAttribute("normal",new $e(b,3).setUsage(Es)),g.setIndex(new $e(_,1));let E=new Rn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Is.aluminum?.5:.05,side:yn});Vd(E,t.bottom,!1);let C=new ze(g,E);this.content.add(C),this.stock={hm:t,geo:g,base:d,sides:this.makeSides(t,d)};let M=new Rn({color:d.clone().multiplyScalar(.7),roughness:.9,side:yn});if(Vd(M,t.bottom,!0),this.content.add(new ze(g,M)),i){let x=new Ze;x.setAttribute("position",new $e(i.positions,3)),x.setIndex(new $e(i.indices,1)),x.computeVertexNormals(),this.partGhost=new ze(x,new Rn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new ni,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(s-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let f=0;f<t.nx;f++)i.push(f);for(let f=1;f<t.ny;f++)i.push(f*t.nx+t.nx-1);for(let f=t.nx-2;f>=0;f--)i.push((t.ny-1)*t.nx+f);for(let f=t.ny-2;f>=0;f--)i.push(f*t.nx);let s=new Float32Array(i.length*6),o=[];for(let f=0;f<i.length;f++){let d=i[f],_=t.x0+d%t.nx*t.cell,S=t.y0+Math.floor(d/t.nx)*t.cell;if(s.set([_,S,t.h[d],_,S,t.bottom],f*6),f<i.length-1){let g=f*2;o.push(g,g+1,g+3,g,g+3,g+2)}}let c=new Ze;c.setAttribute("position",new $e(s,3).setUsage(Es)),c.setIndex(o);let u=new ze(c,new Rn({color:e.clone().multiplyScalar(.85),flatShading:!0,roughness:.85,side:yn}));return this.content.add(u),{g:c,edge:i}}refreshStock(t,e,i){let s=this.stock;if(!s||e<t)return;let{hm:o,geo:c,base:u}=s,f=o.nx,d=o.ny,_=o.h,S=c.attributes.position,g=c.attributes.color,b=c.attributes.normal,E=new xe,C=Math.max(0,t),M=Math.min(d-1,e),x=o.cell*1.5;for(let F=C;F<=M;F++)for(let Y=0;Y<f;Y++){let P=F*f+Y;S.array[P*3]=o.x0+Y*o.cell+(o.sx?o.sx[P]:0),S.array[P*3+1]=o.y0+F*o.cell+(o.sy?o.sy[P]:0),S.array[P*3+2]=_[P];let V=o.op[P],J=o.wx&&(o.wx[P]||o.wy[P])&&(Y>0&&_[P-1]-_[P]>x||Y<f-1&&_[P+1]-_[P]>x||F>0&&_[P-f]-_[P]>x||F<d-1&&_[P+f]-_[P]>x);V&&!J?(E.copy(u).lerp(i[V-1],.28),E.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(_[P]-o.bottom)/Math.max(1,o.top-o.bottom))))):E.copy(u),g.array[P*3]=E.r,g.array[P*3+1]=E.g,g.array[P*3+2]=E.b}let U=S.array,X=Math.max(0,C-1),N=Math.min(d-1,M+1);for(let F=X;F<=N;F++)for(let Y=0;Y<f;Y++){let P=F*f+Y;if(o.wx&&(o.wx[P]||o.wy[P])){let Ot=_[P];if(Y>0&&Math.abs(_[P-1]-Ot)>x||Y<f-1&&Math.abs(_[P+1]-Ot)>x||F>0&&Math.abs(_[P-f]-Ot)>x||F<d-1&&Math.abs(_[P+f]-Ot)>x){b.array[P*3]=o.wx[P]*.7071,b.array[P*3+1]=o.wy[P]*.7071,b.array[P*3+2]=.7071;continue}}let V=(F*f+Math.max(0,Y-1))*3,J=(F*f+Math.min(f-1,Y+1))*3,K=(Math.max(0,F-1)*f+Y)*3,it=(Math.min(d-1,F+1)*f+Y)*3,ht=U[J]-U[V],Q=U[J+1]-U[V+1],z=U[J+2]-U[V+2],tt=U[it]-U[K],H=U[it+1]-U[K+1],_t=U[it+2]-U[K+2],at=Q*_t-z*H,pt=z*tt-ht*_t,gt=ht*H-Q*tt,At=Math.hypot(at,pt,gt)||1;gt<0&&(at=-at,pt=-pt,gt=-gt),b.array[P*3]=at/At,b.array[P*3+1]=pt/At,b.array[P*3+2]=gt/At}S.addUpdateRange(C*f*3,(M-C+1)*f*3),g.addUpdateRange(C*f*3,(M-C+1)*f*3),b.addUpdateRange(X*f*3,(N-X+1)*f*3),S.needsUpdate=!0,g.needsUpdate=!0,b.needsUpdate=!0;let O=s.sides.g.attributes.position;s.sides.edge.forEach((F,Y)=>{O.array[Y*6+2]=_[F]}),O.needsUpdate=!0}setTool(t,e){for(let d of[...this.tool.children])this.tool.remove(d),d.geometry.dispose(),d.material.dispose();let i=t.diameter/2,s=Math.max(t.fluteLength||0,Math.min(40,Math.max(e+3,t.diameter*2))),o=new Rn({color:14015457,metalness:.85,roughness:.3}),c;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let d=i/Math.tan((t.kind==="drill"?118:60)*Math.PI/360);c=new ze(new gs(i,d,32),o),c.rotation.x=-Math.PI/2,c.position.z=d/2}else c=new ze(new ji(i,i,s,32),o),c.rotation.x=Math.PI/2,c.position.z=s/2;let u=new ze(new ji(Math.max(i,3.175),Math.max(i,3.175),22,32),new Rn({color:11187132,metalness:.8,roughness:.35}));u.rotation.x=Math.PI/2,u.position.z=s+11;let f=new ze(new ji(Math.max(i,3.175)*3.2,Math.max(i,3.175)*2.6,18,40),new Rn({color:3884629,metalness:.6,roughness:.4}));f.rotation.x=Math.PI/2,f.position.z=s+22+9,this.tool.add(c,u,f)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new ni;for(let e of t){let i=e.track;if(!i)continue;let s=[],o=[];for(let u=4;u<i.length;u+=4)(i[u+3]>0?s:o).push(i[u-4],i[u-3],i[u-2]+.02,i[u],i[u+1],i[u+2]+.02);let c=(u,f,d)=>{if(!u.length)return;let _=new Ze;_.setAttribute("position",new Ge(u,3));let S=new yr(_,new si({color:f,transparent:!0,opacity:d}));S.renderOrder=3,this.paths.add(S)};c(s,qn[e.kind]||"#1abc9c",.75),c(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function sS(){return new Promise((n,t)=>{let e=indexedDB.open(rS,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Xd(n,t){let e=await sS();return new Promise((i,s)=>{let o=e.transaction("kv",n),c=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(c?.result)},o.onerror=o.onabort=()=>{e.close(),s(o.error)}})}var rS,Wd,Yd,qd=Pn(()=>{rS="nccam";Wd=n=>Xd("readonly",t=>t.get(n)).catch(()=>null),Yd=(n,t)=>Xd("readwrite",e=>e.put(t,n)).catch(()=>{})});var Jd={};Em(Jd,{mountApp:()=>hS});function hS(n,t,e){let i={get:async j=>{let ut=await fetch(t.base+j);if(!ut.ok)throw new Error(`${j}: ${ut.status}`);return ut.json()},post:(j,ut)=>fetch(t.base+j,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ut)})},s={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,tools:[],numbering:"slot",safeZ:null,connected:!1,limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:""},o=new nc,c=0;(async()=>{let[j,ut,lt,k]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);s.numbering=j?.tool?.numbering==="toolId"?"toolId":"slot";let Rt=Number(j?.safeZHeight);s.safeZ=Number.isFinite(Rt)?Rt:null,s.tools=Pu(Array.isArray(ut)?ut:ut?.tools);let Kt=lt?.settings||{},B=G=>{let rt=parseFloat(Kt[G]?.value);return Number.isFinite(rt)&&rt>0?rt:null};s.limits={maxRpm:B("30")||void 0,minRpm:B("31")||void 0,maxFeed:Math.min(B("110")||1/0,B("111")||1/0,1/0)},Number.isFinite(s.limits.maxFeed)||delete s.limits.maxFeed,s.maxRapid=Math.min(B("110")||5e3,B("111")||5e3),B("130")&&B("131")&&(s.travel={x:B("130"),y:B("131"),z:B("132")}),s.connected=!!k?.machineState?.connected,g();let T=await Wd("last");T?.bytes&&!s.part&&!s.loading&&u(null,T)})();async function u(j,ut=null){if(!j&&!ut)return;let lt=ut?ut.name:j.name;s.fileName=lt,s.loading=`Reading ${lt}\u2026`,s.error="",s.plan=null,s.result=null,s.analysis=null,s.part=null,s.step=1,s.maxStep=1,g();try{let k=ut?ut.bytes:await j.arrayBuffer();s.bytes=k.slice(0);let Rt=await e("load",{bytes:k},[k]);if(s.sides=Rt.sides,ut?.upPath?.length){s.job=null;for(let Kt of ut.upPath)await f(Kt,!0);s.job={...Sc(s.analysis),...ut.job},await d()}else await f(Rt.best);S()}catch(k){s.error=k.message||String(k),s.fileName=""}s.loading="",g()}async function f(j,ut=!1){s.loading="Turning the part\u2026",g();let lt=await e(Array.isArray(j)?"tilt":"orient",Array.isArray(j)?{normal:j}:{up:j});if(s.up=Array.isArray(j)?"custom":j,s.upPath=Array.isArray(j)?[...s.upPath||[],j]:[j],ut){s.part={positions:lt.positions,indices:lt.indices},s.analysis=lt.analysis,s.loading="";return}s.part={positions:lt.positions,indices:lt.indices},s.analysis=lt.analysis;let k=s.job;s.job=Sc(lt.analysis),k&&Object.assign(s.job,{material:k.material,finish:k.finish,zero:k.zero,tabs:k.tabs,stock:{...s.job.stock,fit:k.stock.fit,margin:k.stock.margin,extraTop:k.stock.extraTop}}),s.loading="",await d()}async function d(j=!1){if(!s.part)return;let ut=++c;s.planning=!0,j&&(s.result=null),g();try{let lt=await e("plan",{tools:s.tools,job:s.job,limits:s.limits,paths:j,gcodeOptions:{name:s.fileName,numbering:s.numbering,safeZHeightMm:s.safeZ},timing:{maxRapid:s.maxRapid||5e3}});if(ut!==c)return;s.plan=lt.plan,S(),j&&(s.result=lt,s.simChecks=null)}catch(lt){ut===c&&(s.error=lt.message||String(lt))}ut===c&&(s.planning=!1,g())}let _=null;function S(){!s.bytes||!s.job||(clearTimeout(_),_=setTimeout(()=>Yd("last",{name:s.fileName,bytes:s.bytes,upPath:s.upPath,job:s.job,savedAt:Date.now()}),400))}function g(){if(!n.isConnected)return;let j=n.querySelector("[data-keep-scroll]"),ut=j?j.scrollTop:0,lt=s.step,k=["Drop a STEP file. ncCAM finds the pockets, holes and outline for you.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][lt-1],Rt=[s.part?"Your part":"Open your part","What are you cutting it from?","Here\u2019s the plan",s.simChecks&&!s.simChecks.ok?"Check the warnings":"Ready to cut"][lt-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCAM<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">STEP file to G-code</div></div>
        <div class="ncc-steps">${aS.map((T,G)=>{let rt=G+1,mt=rt===lt?"on":rt<s.maxStep||rt<lt?"done":"";return`<button class="ncc-step ${mt}" type="button" data-go="${rt}" ${rt<=s.maxStep?"":"disabled"}><span class="ncc-num">${mt==="done"?"\u2713":rt}</span>${Ye(T)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${hn.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${Ye(Rt)}</h1><p class="ncc-lede">${Ye(k)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${s.connected?"ok":""}"></span>${s.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${lt===3?"fixed":""}">${[E,O,K,Q][lt-1]()}</div>
        <div class="ncc-foot">${b()}</div>
      </section>
      ${s.toast?`<div class="ncc-toast" role="status">${Ye(s.toast)}</div>`:""}`;let Kt=n.querySelector("[data-keep-scroll]");Kt&&(Kt.scrollTop=ut);let B=n.querySelector("[data-viewer]");if(B){B.replaceWith(o.el);let T=s.loading||lt===4&&!s.result?`<div class="ncc-busy"><span class="ncc-spin"></span>${Ye(s.loading||"Making toolpaths\u2026")}</div>`:"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(G=>G.remove()),o.el.insertAdjacentHTML("beforeend",(lt===1?U():lt===4?at():"")+T),o.fit(),lt===1&&N(),lt===2&&J(),lt===3&&it(),lt===4&&s.result&&gt()}}function b(){let j=`<button class="ncc-back" type="button" data-go="${s.step-1}" ${s.step>1?"":"disabled"}>Back</button>`;if(s.step===1)return`${j}<button class="ncc-next" type="button" data-go="2" ${s.plan&&s.plan.ops.length&&!s.loading?"":"disabled"}>Next: Stock ${hn.next}</button>`;if(s.step===2)return`${j}<button class="ncc-next" type="button" data-go="3">Next: Operations ${hn.next}</button>`;if(s.step===3){let lt=s.plan&&s.plan.ops.some(k=>k.enabled);return`${j}<button class="ncc-next" type="button" data-go="4" ${lt&&!s.planning?"":"disabled"}>Make toolpaths ${hn.next}</button>`}let ut=s.simChecks&&!s.simChecks.ok;return`${j}${ut?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${s.result&&s.simChecks&&!ut?"":"disabled"}>${hn.load}Load into ncSender</button>`}function E(){if(!s.part&&!s.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${hn.upload}</div>
        <h2>Drop a STEP file here</h2>
        <p>Export your part from Fusion, Onshape, FreeCAD or SolidWorks as <strong>.step</strong> or <strong>.stp</strong>. Millimetres or inches both work.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open STEP file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        ${s.error?`<div class="ncc-hint bad" style="max-width: 520px">${hn.warn}<span>${Ye(s.error)}</span></div>`:""}
        ${s.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${hn.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCAM can pick them.</span></div>`}
      </div>`;let j=s.analysis;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${hn.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${Ye(s.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${j?`${Dn(j.size[0])} \xD7 ${Dn(j.size[1])} \xD7 ${Dn(j.size[2])} mm`:"&nbsp;"}</div></div>
          </div>
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        </div>
        <div data-viewer></div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card">
          <div class="ncc-label">Which side faces up?</div>
          <div class="ncc-picks">${lS.map(([ut,lt])=>{let k=!s.sides||s.sides[ut].reachable;return`<button class="ncc-pick ${s.up===ut?"sel":""}" type="button" data-up="${ut}" ${k?"":"disabled"} ${k?"":`title="With the ${lt.toLowerCase()} up, some faces point down and the tool can\u2019t reach them"`}>${dn(cS[ut],24,'stroke-width="1.8"')}${lt}${k?"":"<small>Can\u2019t reach</small>"}</button>`}).join("")}</div>
          <div class="ncc-row-sub">Or click a flat face on the model to put it on top.</div>
        </div>
        ${C()}
        ${x(!0)}
      </div>`}function C(){if(!s.plan)return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-row-sub">${s.planning?"Looking\u2026":""}</div></div>`;let j=new Map;for(let lt of s.plan.ops.filter(k=>k.kind!=="face"&&k.kind!=="corners")){let k=M(lt),Rt=j.get(k)||{o:lt,name:k,n:0};Rt.n+=lt.count||1,j.set(k,Rt)}let ut=lt=>lt.n<2?lt.name:lt.name.replace(/^(Pocket|Step), /,(k,Rt)=>`${lt.n} ${Rt.toLowerCase()}s, `);return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-found">${[...j.values()].map(lt=>`<div class="ncc-row"><span style="display: flex; align-items: center; gap: 8px"><span class="ncc-swatch" style="background: ${qn[lt.o.kind]}"></span>${Ye(ut(lt))}</span><span class="ncc-ok">\u2713</span></div>`).join("")||'<div class="ncc-row-sub">Nothing to cut from this side.</div>'}</div></div>`}function M(j){let ut=j.detail.replace(/ · spiral$/,"");return j.kind==="cutout"?`Outline, ${Dn(j.zTop)} mm cut-out`:j.kind==="hole"||j.kind==="drill"?`${j.centers.length>1?`${j.centers.length} holes`:"Hole"}, ${ut}`:j.kind==="step"?`Step, ${ut}`:`Pocket, ${ut.split(" \xB7 ").pop()}`}function x(j){if(!s.plan)return"";let ut=s.plan.warnings.filter(lt=>!j||lt.kind==="undercut"||lt.kind==="sloped"||lt.kind==="edges");return!ut.length&&j?`<div class="ncc-hint">${hn.info}<span>Everything can be cut from the top in one setup.</span></div>`:ut.map(lt=>`<div class="ncc-hint ${lt.kind==="undercut"||lt.kind==="notool"?"bad":""}">${lt.kind==="undercut"||lt.kind==="notool"?hn.warn:hn.info}<span>${Ye(lt.text)}</span></div>`).join("")}function U(){if(!s.plan)return"";let j=[...new Set(s.plan.ops.filter(lt=>lt.kind!=="face"&&lt.kind!=="corners").map(lt=>lt.kind))],ut={pocket:"Pockets",hole:"Holes",drill:"Holes",step:"Steps",cutout:"Outline"};return`<div class="ncc-overlay tr">${j.map(lt=>`<span class="ncc-chip"><span class="ncc-swatch" style="background: ${qn[lt]}"></span>${ut[lt]}</span>`).join("")}</div>
      <div class="ncc-overlay bl"><span class="ncc-chip">Drag to rotate</span><span class="ncc-chip">Scroll to zoom</span><span class="ncc-chip">Click a face to put it on top</span></div>`}let X=null;function N(){if(!s.part)return;pt=null,V=null;let j=s.part.positions,ut=(s.plan?.ops||[]).filter(lt=>lt.kind!=="face"&&lt.kind!=="corners").flatMap(lt=>lt.kind==="cutout"?[{loops:lt.region,z:lt.zTop+.05,color:qn.cutout,dashed:!0}]:lt.centers&&!lt.region?[{loops:lt.centers.map(k=>Zd(k)),z:lt.zTop+.05,color:qn[lt.kind]}]:[{loops:lt.region,z:lt.zTop+.05,color:qn[lt.kind]}]);o.keepCamera=X===j,o.showPart(s.part,ut),X=j,o.onFrame=null,o.onPick=async lt=>{if(s.loading)return;let k=s.up;try{await f(lt),s.analysis.undercut&&k!=="custom"&&(!s.sides||s.sides[k]?.reachable)&&(await f(k),Me("With that face up, some of the part can\u2019t be reached from the top."))}catch(Rt){s.error=Rt.message,g()}}}function O(){let j=s.job,ut=s.plan?.stock||Yo(s.analysis,j),lt=Object.entries(cr).map(([Rt,Kt])=>`<button class="ncc-pick ncc-mat ${j.material===Rt?"sel":""}" type="button" data-material="${Rt}"><span class="ncc-mat-swatch" style="background: ${Is[Rt]}"></span>${Ye(Kt.name)}<small>${Ye(Kt.note)}</small></button>`).join(""),k=(Rt,Kt,B)=>`<div class="ncc-field"><label for="ncc-${Rt}">${Kt}</label><input id="ncc-${Rt}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${Rt}" value="${Math.round(B*100)/100}" ${j.stock.fit?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${lt}</div></div>
        <div class="ncc-card">
          ${F("fit","Size the stock to the part",`Adds ${Dn(j.stock.margin)} mm on every side and ${Dn(j.stock.extraTop)} mm on top`,j.stock.fit)}
          <div class="ncc-fields">${k("width","Width X (mm)",ut.width)}${k("depth","Depth Y (mm)",ut.depth)}${k("thickness","Thickness Z (mm)",ut.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${F("tabs","Leave tabs to hold the part",j.tabs.enabled?`${Dn(j.tabs.height)} mm tall, so the part stays put until you cut it free`:"The part comes loose at the end",j.tabs.enabled)}
          ${j.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${j.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${j.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${j.tabs.count>=12?"disabled":""}>+</button></div></div>`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${P(ut)}
          <div style="font-size: 14px">X Y zero: <strong>${Ye(Y(j.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${j.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${j.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let F=(j,ut,lt,k)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${Ye(ut)}</div><div class="ncc-row-sub">${Ye(lt)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${k}" aria-label="${Ye(ut)}" data-toggle="${j}"></button></div>`;function Y(j){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[j]}function P(j){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${Dn(j.width)} \xD7 ${Dn(j.depth)} \xD7 ${Dn(j.thickness)} mm stock \xB7 tap a point, drag to turn</div>`}let V=null;function J(){let j=s.plan?.stock||Yo(s.analysis,s.job),ut=Ru.map(Rt=>({key:Rt,...Mc(j,{xy:Rt,z:"top"})})),lt=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",k=`${s.part?.positions?.length}|${j.width}|${j.depth}|${j.thickness}`;o.keepCamera=V===k,o.showZero({stock:j,part:s.part,points:ut,selected:s.job.zero.xy,zFace:s.job.zero.z,color:Is[s.job.material],accent:lt}),V=k,X=null,pt=null,o.onPick=null,o.onMarker=Rt=>{Rt!==s.job.zero.xy&&(s.job.zero.xy=Rt,he())}}function K(){let j=s.plan;if(!j)return'<div class="ncc-busy" style="position: static; flex: 1"><span class="ncc-spin"></span>Planning\u2026</div>';let ut=j.ops.map(G=>{let rt=ht(G);return`<div class="ncc-op ${G.enabled?"":"off"} ${s.focusOp===G.id?"focus":""}" data-focus="${G.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${qn[G.kind]} 16%, transparent); color: ${qn[G.kind]}">${hn[G.kind]||hn.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${Ye(G.label)}</div><div class="ncc-op-sub ncc-mono">${Ye(G.detail)}</div></div>
        <select class="ncc-select" data-tool="${G.id}" aria-label="Tool for ${Ye(G.label)}">${rt.map(mt=>`<option value="${mt.id}" ${mt.id===G.tool.id?"selected":""}>T${hr(mt,s.numbering)} \xB7 ${Ye(mt.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${G.enabled}" aria-label="${Ye(G.label)}" data-op="${G.id}"></button>
      </div>`}).join(""),lt=qo(j),k=new Map;for(let G of j.ops)G.enabled&&G.kind!=="face"&&k.set(G.tool.id,(k.get(G.tool.id)||0)+1);let Rt=[...k].sort((G,rt)=>rt[1]-G[1])[0]?.[0],Kt=j.ops.find(G=>G.enabled&&G.tool.id===Rt)||j.ops.find(G=>G.enabled),B=Kt?.feeds,T=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(Xn).map(([G,rt])=>`<button type="button" class="${s.job.finish===G?"sel":""}" data-finish="${G}">${rt.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${{fast:"Bigger steps, no finishing pass.",balanced:"Leaves 0.2 mm on the walls, then a clean finishing pass.",smooth:"Lighter steps and a finishing pass, for the best walls."}[s.job.finish]}</div>
            ${B?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${Ye(Kt.tool.name)}<br>${Ye(cr[s.job.material].name)} \xB7 ${B.rpm.toLocaleString()} RPM<br>${B.feed.toLocaleString()} mm/min \xB7 ${Dn(B.stepdown,2)} mm per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${lt.map(G=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${hr(G,s.numbering)}</span> ${Ye(G.name)}</span><span class="ncc-slot ${G.toolNumber?"":"hand"}">${G.toolNumber?`Slot ${G.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${lt.some(G=>!G.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops"><div class="ncc-ops">${ut}</div>${x(!1)}<div class="ncc-plan-pair-in">${T}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${T}</div>
      </div>`}function it(){let ut=(s.plan?.ops||[]).filter(lt=>lt.enabled&&lt.kind!=="face").map(lt=>{let k=s.focusOp&&s.focusOp!==lt.id;return{loops:lt.region||(lt.centers||[]).map(Kt=>Zd(Kt)),z:lt.kind==="cutout"?lt.zTop+.05:Math.max(lt.zBottom,0)+.05,color:qn[lt.kind],dashed:lt.kind==="cutout",opacity:k?.2:1,top:lt.zTop}});o.keepCamera=X===s.part?.positions,o.showPart(s.part,ut),X=s.part?.positions,pt=null,V=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function ht(j){let ut=j.kind==="drill"?["drill"]:j.kind==="face"?["surfacing","flat"]:["flat"],lt=s.tools.filter(k=>ut.includes(k.kind)).sort((k,Rt)=>Rt.diameter-k.diameter);return lt.some(k=>k.id===j.tool.id)?lt:[j.tool,...lt]}function Q(){let j=s.result,ut=j?.plan,lt=ut?qo(ut):[],k=ut?ut.ops.filter(Rt=>Rt.enabled).reduce((Rt,Kt,B,T)=>Rt+(B>0&&T[B-1].tool.id!==Kt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${_t()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${ut?Math.max(1,Math.round(j.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${lt.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${ut?k:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${tt()}</div>
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${Ye(z())}${j?` \xB7 ${(j.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${j?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let z=()=>`${(s.fileName||"part").replace(/\.(step|stp)$/i,"")}.nc`;function tt(){let j=s.simChecks;return j?j.items.map(ut=>`<div class="ncc-check"><span class="ncc-ck ${ut.state}">${ut.state==="bad"?hn.cross:ut.state==="info"?"!":hn.check}</span><span>${Ye(ut.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${s.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}</div>`}let H={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:20,hm:null,stamps:[],colors:[],cursor:null};function _t(){if(!s.result)return"";let ut=s.result.plan.ops.filter(Rt=>Rt.enabled&&Rt.track),lt=H.total||1,k=ut[Math.max(0,H.opIndexAt?.(H.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${H.playing?"Pause":"Play"}">${H.playing?hn.pause:hn.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(lt)}" aria-valuenow="${Math.round(H.t)}">
          ${ut.map(Rt=>`<i style="width: ${(Rt.seconds||0)/lt*100}%; background: ${qn[Rt.kind]}"></i>`).join("")}
          <b style="width: ${H.t/lt*100}%"></b><em style="left: ${H.t/lt*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span>${k?`Step ${ut.indexOf(k)+1} of ${ut.length} \xB7 ${Ye(k.label)} \xB7 T${hr(k.tool,s.numbering)}`:""}</span><span class="ncc-mono">${$d(H.t)} / ${$d(lt)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[5,"Slow"],[20,"Normal"],[100,"Fast"]].map(([Rt,Kt])=>`<button type="button" style="padding: 6px 8px" class="${H.speed===Rt?"sel":""}" data-speed="${Rt}">${Kt}</button>`).join("")}</div>`}function at(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&s.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${s.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let pt=null;function gt(){if(pt===s.result){At();return}pt=s.result,X=null,V=null,o.onMarker=null,o.onPick=null;let j=s.result.plan,ut=j.ops.filter(G=>G.enabled&&G.track),lt=Bi.cellFor(j.stock,520*520);H.ops=ut,H.hm=_u(new Bi(j.stock,lt)),H.colors=j.ops.map(G=>new xe(qn[G.kind])),H.stamps=j.ops.map(G=>fc(G.tool,lt));let k=0;for(let G of ut)k+=G.track.length/4;H.moves=new Float32Array(k*4),H.opOf=new Uint16Array(k),H.cum=new Float64Array(k);let Rt=0,Kt=0,B=null,T=s.maxRapid||5e3;for(let G of ut){let rt=j.ops.indexOf(G);for(let mt=0;mt<G.track.length;mt+=4,Rt++){if(H.moves.set(G.track.subarray(mt,mt+4),Rt*4),H.opOf[Rt]=rt,B){let It=Math.hypot(G.track[mt]-B[0],G.track[mt+1]-B[1],G.track[mt+2]-B[2]);Kt+=It/(G.track[mt+3]>0?G.track[mt+3]:T)*60}B=[G.track[mt],G.track[mt+1],G.track[mt+2]],H.cum[Rt]=Kt}}H.total=Kt,H.opIndexAt=G=>{let rt=Math.min(k-1,Ot(H.cum,G));return ut.indexOf(j.ops[H.opOf[rt]])},H.t=0,H.i=1,H.cursor=null,H.toolOp=-1,o.showStock(H.hm,Is[j.job.material]||Is.mdf,s.part),o.showPaths(ut),s.showPaths=s.showPaths??!1,At(),be(0),H.speed=20,H.rate=Math.max(1,H.total/40/20),o.onFrame=Xt,ge(j),H.playing=!0,Ut()}function At(){o.paths&&(o.paths.visible=!!s.showPaths),o.partGhost&&(o.partGhost.visible=!!s.showPart)}function Ot(j,ut){let lt=0,k=j.length;for(;lt<k;){let Rt=lt+k>>1;j[Rt]<ut?lt=Rt+1:k=Rt}return lt}let ue=j=>({x:H.moves[j*4],y:H.moves[j*4+1],z:H.moves[j*4+2],r:H.moves[j*4+3]===0});function fe(j){let ut=H.hm,lt=H.cum.length,k=1/0,Rt=-1,Kt=(B,T,G)=>{let rt=s.result.plan.ops[G].tool.diameter/2/ut.cell+3,mt=Math.floor((Math.min(B.y,T.y)-ut.y0)/ut.cell-rt),It=Math.ceil((Math.max(B.y,T.y)-ut.y0)/ut.cell+rt);k=Math.min(k,Math.max(0,mt)),Rt=Math.max(Rt,Math.min(ut.ny-1,It))};for(;H.i<lt&&H.cum[H.i]<=j;){let B=H.cursor||ue(H.i-1),T=ue(H.i),G=H.opOf[H.i];T.r||(dc(ut,s.result.plan.ops[G].tool,B,T,G),Kt(B,T,G)),H.cursor=null,H.i++}if(H.i<lt&&j>H.cum[H.i-1]){let B=H.cursor||ue(H.i-1),T=ue(H.i),G=H.opOf[H.i],rt=H.cum[H.i-1],mt=(j-rt)/(H.cum[H.i]-rt||1),It=ue(H.i-1),Bt={x:It.x+(T.x-It.x)*mt,y:It.y+(T.y-It.y)*mt,z:It.z+(T.z-It.z)*mt};T.r||(dc(ut,s.result.plan.ops[G].tool,B,Bt,G),Kt(B,Bt,G)),H.cursor=Bt}return[k,Rt]}function be(j){let ut=H.cum.length;if(!ut)return;let lt=Math.min(ut-1,Ot(H.cum,j)),k=H.opOf[lt];if(k!==H.toolOp){let Kt=s.result.plan.ops[k];o.setTool(Kt.tool,Kt.zTop-Kt.zBottom),H.toolOp=k}let Rt=H.cursor||ue(Math.max(0,H.i-1));o.moveTool(Rt.x,Rt.y,Rt.z)}let St=0,Et=0;function Xt(j){let ut=St?Math.min(.1,(j-St)/1e3):0;if(St=j,!H.playing||!H.cum)return;H.t=Math.min(H.total,H.t+ut*H.speed*H.rate);let[lt,k]=fe(H.t);o.refreshStock(lt,k,H.colors),be(H.t),H.t>=H.total?(H.playing=!1,Ut()):j-Et>200&&(Et=j,Ut())}function oe(j){if(j=Math.max(0,Math.min(H.total,j)),j<H.t)H.hm.h.fill(H.hm.top),H.hm.op.fill(0),H.hm.sx.fill(0),H.hm.sy.fill(0),H.hm.wx.fill(0),H.hm.wy.fill(0),H.hm.gap.fill(1/0),H.hm.deep.fill(-1/0),H.i=1,H.cursor=null,fe(j),o.refreshStock(0,H.hm.ny-1,H.colors);else{let[ut,lt]=fe(j);o.refreshStock(ut,lt,H.colors)}H.t=j,be(j),Ut()}function Ut(){let j=n.querySelector("[data-playbar]");j&&(j.innerHTML=_t())}function ge(j){setTimeout(()=>{if(s.result?.plan!==j)return;let ut=j.ops.map(B=>({...B,moves:B.track?Array.from({length:B.track.length/4},(T,G)=>({x:B.track[G*4],y:B.track[G*4+1],z:B.track[G*4+2],r:B.track[G*4+3]===0,f:B.track[G*4+3]})):null})),{collisions:lt}=vu({...j,ops:ut},Bi.cellFor(j.stock,300*300)),k=[];if(k.push(lt.length?{state:"bad",text:`${lt.length} fast move${lt.length>1?"s go":" goes"} into the material (${[...new Set(lt.map(B=>j.ops.find(T=>T.id===B.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),s.travel){let B=j.stock.width<=s.travel.x&&j.stock.depth<=s.travel.y;k.push(B?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${Dn(s.travel.x)} \xD7 ${Dn(s.travel.y)} mm).`})}let Rt=qo(j);k.push(Rt.every(B=>B.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),j.ops.find(B=>B.kind==="cutout"&&B.enabled)&&k.push({state:"ok",text:`The cut-out goes ${Dn(j.job.throughDepth)} mm into the spoilboard${j.job.tabs.enabled?`, with ${j.job.tabs.count} tabs`:""}`}),j.warnings.some(B=>B.kind==="undercut")&&k.push({state:"bad",text:"Some of the part can\u2019t be reached from the top."}),s.simChecks={ok:!k.some(B=>B.state==="bad"),items:k},g()},50)}let Je=j=>{if(!(j<1||j>4||j>s.maxStep+1)){if(j===4&&s.step!==4){H.playing=!1,s.step=4,s.maxStep=4,g(),d(!0);return}s.step=j,s.maxStep=Math.max(s.maxStep,j),j!==4&&(H.playing=!1),g()}},he=()=>{s.maxStep=Math.min(s.maxStep,Math.max(s.step,3)),s.result=null,d(!1)};n.addEventListener("click",j=>{let ut=j.target.closest("[data-focus]");if(ut&&!j.target.closest("button, select")){s.focusOp=s.focusOp===ut.dataset.focus?null:ut.dataset.focus,g();return}let lt=j.target.closest("button, [data-scrub]");if(!lt||lt.disabled)return;let k=lt.dataset;if(k.go)return Je(+k.go);if(k.up)return f(k.up).catch(Rt=>{s.error=Rt.message,g()});if(k.material)return s.job.material=k.material,he();if(k.zero)return s.job.zero.xy=k.zero,he();if(k.z)return s.job.zero.z=k.z,he();if(k.finish)return s.job.finish=k.finish,he();if(k.tabs)return s.job.tabs.count=Math.max(1,Math.min(12,s.job.tabs.count+ +k.tabs)),he();if(k.toggle==="fit"){let Rt=s.plan?.stock;return s.job.stock.fit=!s.job.stock.fit,!s.job.stock.fit&&Rt&&Object.assign(s.job.stock,{width:Rt.width,depth:Rt.depth,thickness:Rt.thickness}),he()}if(k.toggle==="tabs")return s.job.tabs.enabled=!s.job.tabs.enabled,he();if(k.op)return s.job.disabled[k.op]=!s.job.disabled[k.op],he();if(k.speed)return H.speed=+k.speed,!H.playing&&H.t>=H.total&&oe(0),H.playing=!0,Ut();if(k.act==="play")return H.t>=H.total&&oe(0),H.playing=!H.playing,St=0,Ut();if(k.act==="paths"){s.showPaths=!s.showPaths,At(),lt.classList.toggle("on",s.showPaths);return}if(k.act==="ghost"){s.showPart=!s.showPart,At(),lt.classList.toggle("on",s.showPart);return}if(k.act==="close")return He();if(k.act==="load")return Ce(lt);if(k.act==="save")return we(lt)}),n.addEventListener("pointerdown",j=>{let ut=j.target.closest("[data-scrub]");if(!ut||!H.cum)return;let lt=H.playing;H.playing=!1;let k=B=>{let T=ut.getBoundingClientRect();oe((B.clientX-T.left)/T.width*H.total)};k(j);let Rt=B=>k(B),Kt=()=>{window.removeEventListener("pointermove",Rt),window.removeEventListener("pointerup",Kt),H.playing=lt&&H.t<H.total,St=0,Ut()};window.addEventListener("pointermove",Rt),window.addEventListener("pointerup",Kt)}),n.addEventListener("change",j=>{let ut=j.target;if(ut.matches("[data-file]"))return u(ut.files[0]);if(ut.dataset.tool)return s.job.toolOverride[ut.dataset.tool]=+ut.value||ut.value,he();if(ut.dataset.stock){let lt=parseFloat(String(ut.value).replace(",","."));return Number.isFinite(lt)&&lt>0&&(s.job.stock[ut.dataset.stock]=lt),he()}}),n.addEventListener("dragover",j=>{let ut=j.target.closest("[data-drop]");ut&&(j.preventDefault(),ut.classList.add("over"))}),n.addEventListener("dragleave",j=>{let ut=j.target.closest("[data-drop]");ut&&ut.classList.remove("over")}),n.addEventListener("drop",j=>{j.target.closest("[data-drop]")&&(j.preventDefault(),u(j.dataTransfer.files[0]))});function Me(j){s.toast=j,g(),setTimeout(()=>{s.toast===j&&(s.toast="",g())},2600)}async function Ce(j){j.disabled=!0;try{let ut=await i.post("/api/gcode-files/load-temp",{filename:z(),content:s.result.gcode});if(!ut.ok)throw new Error(`ncSender said ${ut.status}`);He()}catch(ut){j.disabled=!1,Me(`Couldn\u2019t load the program: ${ut.message}`)}}async function we(j){j.disabled=!0;try{let ut=await De(z()),lt=await i.post("/api/gcode-files/file/save",{path:ut,content:s.result.gcode});if(!lt.ok)throw new Error(`save failed (${lt.status})`);Me(`Saved to File Manager: ${ut}`)}catch(ut){Me(`Couldn\u2019t save: ${ut.message}`)}j.disabled=!1}async function De(j){let ut=j.replace(/\.nc$/,"");for(let lt=1;lt<1e3;lt++){let k=`ncCAM/${lt<2?j:`${ut} (${lt}).nc`}`,Rt=await fetch(`${t.base}/api/gcode-files/file?path=${encodeURIComponent(k)}`);if(Rt.status===404)return k;if(!Rt.ok)throw new Error(`could not check File Manager (${Rt.status})`)}throw new Error("too many saved copies")}function He(){H.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}g(),window.__nccam={S:s,PLAY:H,viewer:o}}function Zd(n,t=48){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}var aS,lS,Ye,Dn,$d,dn,hn,cS,jd=Pn(()=>{Ql();wc();Gd();qd();aS=["Model","Stock & Zero","Operations","Preview & Load"],lS=[["top","Top"],["bottom","Bottom"],["front","Front"],["back","Back"],["left","Left"],["right","Right"]],Ye=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Dn=(n,t=1)=>`${(Math.round(n*10**t)/10**t).toLocaleString()}`,$d=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},dn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,hn={close:dn('<path d="M6 6l12 12M18 6L6 18"/>'),next:dn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:dn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:dn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:dn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:dn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:dn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:dn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:dn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:dn('<path d="M3 9h18M3 15h18"/>'),pocket:dn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:dn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:dn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:dn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:dn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:dn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>')},cS={top:'<path d="M12 3l9 5-9 5-9-5z" fill="currentColor" fill-opacity=".35"/><path d="M3 8v8l9 5 9-5V8"/>',bottom:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M3 16l9-5 9 5" stroke-dasharray="2 2"/>',front:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".35"/><path d="M21 8v8l-9 5"/>',back:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 3v8" stroke-dasharray="2 2"/>',left:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".2"/><path d="M21 8v8l-9 5"/>',right:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5"/><path d="M21 8v8l-9 5V13z" fill="currentColor" fill-opacity=".35"/>'}});var Hu=du(gu(),1);wc();var ng={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.02,angularDeflection:.1};function Ec(){let n=null,t=null,e=null,i=null,s={async init({wasmBinary:o}){return i=o,!0},async load({bytes:o}){n||=await(0,Hu.default)({wasmBinary:i});let c=n.ReadStepFile(new Uint8Array(o),ng);if(!c.success||!c.meshes?.length)throw new Error("This file has no solid ncCAM can read. Export it again as STEP (AP214 or AP242).");return t=Su(c),{solids:t.solids,size:Us(t).size,...bu(t)}},async orient({up:o}){e=Vo(t,o);let c=Or(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:c}},async tilt({normal:o}){e=Vo(e,o);let c=Or(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:c}},async plan({tools:o,job:c,limits:u,paths:f,gcodeOptions:d,timing:_}){let S=Lu(e,o,c,u);f&&Fu(S);let g=f?ku(S,_):0,b=f?Bu(S,d):"";for(let E of S.ops){if(!E.moves)continue;let C=new Float32Array(E.moves.length*4);E.moves.forEach((M,x)=>{C[x*4]=M.x,C[x*4+1]=M.y,C[x*4+2]=M.z,C[x*4+3]=M.r?0:M.f}),E.track=C,delete E.moves}return{plan:S,gcode:b,seconds:g}}};return async function(c){let u=s[c.type];if(!u)throw new Error(`unknown request ${c.type}`);return u(c)}}var uS="0.1.0-mvu58ceq";if(typeof document>"u"){let n=Ec();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e&&e.positions?[e.positions.buffer,e.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCam=window.NcCam||{};n.build=uS,n.mount=async(i,s)=>{let{mountApp:o}=await Promise.resolve().then(()=>(jd(),Jd));try{o(i,s,await t(s))}catch(c){i.textContent=`ncCAM could not start: ${c.message||c}`}};let t=i=>n.engine||=e(i);async function e(i){let s=await fetch(i.file("lib/occt-import-js.wasm")).then(u=>{if(!u.ok)throw new Error(`lib/occt-import-js.wasm: ${u.status}`);return u.arrayBuffer()}),o=null;try{o=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{o=null}if(o){let u=0,f=new Map;o.onmessage=({data:S})=>{let g=f.get(S.id);g&&(f.delete(S.id),S.ok?g.resolve(S.result):g.reject(new Error(S.error)))};let d=(S,g={},b=[])=>new Promise((E,C)=>{let M=++u;f.set(M,{resolve:E,reject:C}),o.postMessage({...g,id:M,type:S},b)});if(await Promise.race([d("init",{wasmBinary:s}).then(()=>!0),new Promise(S=>setTimeout(()=>S(!1),5e3))]))return d;o.terminate()}let c=Ec();return await c({type:"init",wasmBinary:s}),(u,f={})=>c({...f,type:u})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
