/* NFRAMEWORK */(()=>{var l=[];module.exports=o=>{let t=new Object,e=[];t.customTypeDatas=[],t.customTypeDatas.Add=function(e,n){t.customTypeDatas.push({key:e,value:n})};var r=new(require("F:\\code1101110\\nframework\\ncompiler\\tags/../../nmodule/nmodule")),n=(()=>{if(0==l.length)return"console";{let e="console";for(var n=l.length-1;0<=n;n--)e=l[n]+":"+e;return e}})();r.name=n,r.shortName="console",r.__TYPE="NMODULE",r.baseModules=[],r.side="both",r.RunExternalMethod=function(e){e.call(r)},r.RunExternalMethod(function(){if(o.NFramework.console.enable){const e=require("readline"),n=e.createInterface({input:process.stdin,output:process.stdout}),t=function(){const e=async function*(){for await(const e of n)yield e}();return async()=>(await e.next()).value}();this.AddMethod("log",(...e)=>{return function(...e){console.log(...e)}.call(this,...e)}),this.AddMethod("clear",(...e)=>{return function(){console.clear()}.call(this,...e)}),this.AddMethod("readLine",async(...e)=>{let n=async function(){return t()}.bind(this);return n(...e)})}});var s=require("fs");r.client_js_code=s.readFileSync("F:\\code1101110\\nframework/nmodules/console/console.nlc.client.js");var c="";for(let e=0;e<n.length;e++)":"==n[e]?c+="--":c+=n[e];return"server"!=r.side&&r.Routing("/nlc/"+c,(e,n)=>n.send(r.client_js_code)),e.push(r),t.nmodules=e,t.pages=[],t.packages=[],t}})();