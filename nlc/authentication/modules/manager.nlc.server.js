/* NFRAMEWORK */(()=>{var o=[];module.exports=e=>{let t=new Object,n=[];t.customTypeDatas=[],t.customTypeDatas.Add=function(e,n){t.customTypeDatas.push({key:e,value:n})},o.push("code1101110"),o.push("authentication");var a=new(require("F:\\code1101110\\nframework\\ncompiler\\tags/../../nmodule/nmodule")),r=(()=>{if(0==o.length)return"manager";{let e="manager";for(var n=o.length-1;0<=n;n--)e=o[n]+":"+e;return e}})();a.name=r,a.shortName="manager",a.__TYPE="NMODULE",a.baseModules=[],a.side="both",a.RunExternalMethod=function(e){e.call(a)},a.RunExternalMethod(function(){this.AddMethod("setup",(...e)=>{return function(){}.call(this,...e)})});var s=require("fs");a.client_js_code=s.readFileSync("F:\\code1101110/nlc/authentication/modules/manager.nlc.client.js");var l="";for(let e=0;e<r.length;e++)":"==r[e]?l+="--":l+=r[e];return"server"!=a.side&&a.Routing("/nlc/"+l,(e,n)=>n.send(a.client_js_code)),n.push(a),o.splice(o.length-1,1),o.splice(o.length-1,1),t.nmodules=n,t.pages=[],t.packages=[],t}})();