(this.webpackJsonpamortization=this.webpackJsonpamortization||[]).push([[0],{130:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},168:function(e,t,a){e.exports=a(352)},173:function(e,t,a){},174:function(e,t,a){},352:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(51),s=a.n(l);a(173),a(130),a(174);var i=a(33),o=a(34),c=a(8),u=a(36),h=a(37);function p(e,t,a){return console.log("principal is"),console.log(e),console.log("interest per month is "),console.log(t),console.log("months: "),console.log(a),e*(t*Math.pow(1+t,a))/(Math.pow(1+t,a)-1)}function m(e,t,a){var n=[];console.log(t),console.log(e),e=Math.round(e);for(var r=0,l=arguments.length,s=new Array(l>3?l-3:0),i=3;i<l;i++)s[i-3]=arguments[i];console.log(s);var o=0,c=0;for(3===s.length&&(r=s[0],o=s[1],c=s[2]);t>0&&r<500;){var u=Math.round(t*a),h=e-u;t-=h,c+=h,o+=u,n.push({month:r,payed:e,interest:u,amortization:h,balance:t,tot_int:o,tot_mort:c,tot_cost:c+o}),r+=1}return n}r.a.Component;var d=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={payed:n.props.payed},n.handlePay=n.handlePay.bind(Object(c.a)(n)),n.update=n.update.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handlePay",value:function(e){this.setState({payed:e.target.value})}},{key:"update",value:function(e){this.props.onChange(e.target.value,this.props.month)}},{key:"render",value:function(){var e=this.props.month,t=this.props.interest,a=this.props.amortization,n=this.props.tot_int,l=this.props.tot_mort,s=this.props.balance;return r.a.createElement("tr",null,r.a.createElement("td",null,e),r.a.createElement("td",null,r.a.createElement("input",{row:e,value:this.state.payed,onChange:this.handlePay,onBlur:this.update})),r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,l+n),r.a.createElement("td",null,s))}}]),a}(r.a.Component),v=a(16),b=["black","blue","fuchsia","gray","green","lime","maroon","navy","olive","orange","purple","red","silver","teal","white","yellow"];function g(e){console.log(e);for(var t=e.mortTables,a=e.descriptions,n=12*e.graphYears,l=e.dataKey,s=0,i=0;i<t.length;i++)s<t[i].length&&(s=t[i].length);for(var o=[],c=0;c<t.length;c++)if(0===c)for(var u=0;u<n;u++){var h={};h[a[c]]=t[c][u][l],o.push(h)}else for(var p=0;p<n;p++)o[p][a[c]]=t[c][p][l];return console.log(o),r.a.createElement("div",null,r.a.createElement("h3",null,"The ",l," for ",n/12," years"),r.a.createElement(v.d,{width:730,height:250,data:o,margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(v.f,null),r.a.createElement(v.g,null),r.a.createElement(v.a,{strokeDasharray:"3 3"}),r.a.createElement(v.e,null),r.a.createElement(v.b,{verticalAlign:"bottom",height:36}),a.map((function(e,t){return r.a.createElement(v.c,{type:"monotone",dataKey:e,fillOpacity:1,stroke:b[t]})}))))}function E(e){console.log(e);for(var t=e.mortTables,a=e.descriptions,n=e.tableRows,l=e.dataKey,s=[],i=0;i<t.length;i++)if(0===i)for(var o=0;o<=n;o++){var c={};c[a[i]]=t[i][12*o][l],s.push(c)}else for(var u=0;u<=n;u++)s[u][a[i]]=t[i][12*u][l];return console.log(s),r.a.createElement("div",null,r.a.createElement("h3",null,l),r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Interval"),a.map((function(e){return r.a.createElement("th",null,e)})))),r.a.createElement("tbody",null,s.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,12*t+"months"),a.map((function(t){return r.a.createElement("td",null,e[t])})))})))))}var f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={principal:214544,interest:3.5,years:30,submitted:!1,month:0,mort_tables:[],descriptions:[],graphYears:5},n.handlePrincipal=n.handlePrincipal.bind(Object(c.a)(n)),n.handleInterest=n.handleInterest.bind(Object(c.a)(n)),n.handleYears=n.handleYears.bind(Object(c.a)(n)),n.handleGraph=n.handleGraph.bind(Object(c.a)(n)),n.handleGraphYears=n.handleGraphYears.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handlePrincipal",value:function(e){this.setState({principal:Number(e.target.value)})}},{key:"handleInterest",value:function(e){this.setState({interest:e.target.value})}},{key:"handleYears",value:function(e){this.setState({years:e.target.value})}},{key:"handleGraphYears",value:function(e){this.setState({graphYears:e.target.value})}},{key:"handleGraph",value:function(e){var t=.01*this.state.interest/12,a=p(this.state.principal,t,12*this.state.years),n=m(a,this.state.principal,t),r=this.state.mort_tables.slice();r.push(n);var l="principal: "+this.state.principal+" Interest: "+this.state.interest+" Years: "+this.state.years,s=this.state.descriptions.slice();s.push(l),this.setState({month:a,mort_tables:r,descriptions:s}),this.setState({submitted:!0}),console.log("getting graphs"),e.preventDefault()}},{key:"getGraph",value:function(){var e=this;return this.state.submitted?r.a.createElement("div",null,["tot_cost","tot_int","tot_mort"].map((function(t){return r.a.createElement(g,{mortTables:e.state.mort_tables,descriptions:e.state.descriptions,graphYears:e.state.graphYears,dataKey:t})}))):r.a.createElement("a",null,"waiting for input")}},{key:"getTable",value:function(){var e=this;return this.state.submitted?r.a.createElement("div",null,["tot_cost","tot_int","tot_mort"].map((function(t){return r.a.createElement(E,{mortTables:e.state.mort_tables,descriptions:e.state.descriptions,tableRows:e.state.graphYears,dataKey:t})}))):r.a.createElement("a",null)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleGraph},r.a.createElement("label",null,"Principal:",r.a.createElement("input",{type:"text",value:this.state.principal,onChange:this.handlePrincipal})),r.a.createElement("label",null,"Interest %:",r.a.createElement("input",{type:"text",value:this.state.interest,onChange:this.handleInterest})),r.a.createElement("label",null,"Years:",r.a.createElement("input",{type:"text",value:this.state.years,onChange:this.handleYears})),r.a.createElement("label",null,"Years to graph:",r.a.createElement("input",{type:"text",value:this.state.graphYears,onChange:this.handleGraphYears})),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("div",null,this.getGraph()),r.a.createElement("div",null,this.getTable()))}}]),a}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.4f25f969.chunk.js.map