(this["webpackJsonppotomato.github.io"]=this["webpackJsonppotomato.github.io"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),i=n.n(l),u=(n(13),n(14),n(3)),o=n(4),s=n(6),m=n(5),c=n(7);var h=function(e){return r.a.createElement("div",{className:"Target"},r.a.createElement("div",null,r.a.createElement("span",null,"Target is "),r.a.createElement("input",{type:"number",min:2,max:35,value:e.targetValue,onChange:function(t){return e.onChange(function(e){var t=parseInt(e);return!t||t<2||t>35?null:t}(t.target.value))}})),"    ")},E=function(e){return r.a.createElement("div",{className:"ElemCount"},r.a.createElement("div",null,"".concat(e.description," ").concat(e.currentValue)),r.a.createElement("div",null,r.a.createElement("input",{type:"range",min:e.minValue,max:e.maxValue,value:e.currentValue,onChange:function(t){return e.onChange(parseInt(t.target.value))}})))};function g(e){var t=[];return function e(t,n,a,r){var l=a.reduce((function(e,t){return e+t}),0);l===n&&(console.log("%s=%s",a.join("+"),n),r.push(a));if(l>=n)return;for(var i=0;i<t.length;i++){var u=t[i],o=t.slice(i+1);e(o,n,a.concat([u]),r)}}([2,3,4,5,6,7,8],e,[],t),t}var f=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={target:20,minElems:1,maxElems:7},n.setTarget=function(e){e&&n.setState({target:e,minElems:1,maxElems:7})},n.setMinElems=function(e){n.setState({minElems:e,maxElems:Math.max(n.state.maxElems,e)})},n.setMaxElems=function(e){n.setState({maxElems:e,minElems:Math.min(n.state.minElems,e)})},n.getResults=function(){return n.state.target?function(e,t,n){return e.filter((function(e){return e.length>=t&&e.length<=n}))}(g(n.state.target),n.state.minElems,n.state.maxElems).sort((function(e,t){return e.length<t.length?-1:e.join()<t.join()?-1:1})):[]},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Sandwich Sudoku Combination Solver"),r.a.createElement(h,{targetValue:this.state.target,onChange:this.setTarget}),r.a.createElement(E,{description:"Minimum number of elements is",minValue:1,maxValue:7,currentValue:this.state.minElems,onChange:function(t){return e.setMinElems(t)}}),r.a.createElement(E,{description:"Maximum number of elements is",minValue:1,maxValue:7,currentValue:this.state.maxElems,onChange:function(t){return e.setMaxElems(t)}}),r.a.createElement("div",null,this.getResults().map((function(e){return r.a.createElement("div",null,e.join(" + "))}))))}}]),t}(a.Component),v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.63e03ee3.chunk.js.map