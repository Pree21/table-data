(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),o=(a(15),a(16),a(1)),i=a(2),s=a(4),u=a(3),h=a(5),m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){alert("Row Clicked")},a.state={selectData:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.SelectAllData;void 0!==t&&this.setState({selectData:t})}},{key:"selectData",value:function(e){this.setState({selectData:!this.state.selectData}),e.stopPropagation()}},{key:"render",value:function(){var e=this,t=this.props.item,a=this.state.selectData;return l.a.createElement("tr",{onClick:this.handleClick,style:{background:a?"#eee":"#fff"}},l.a.createElement("td",null,t.id),l.a.createElement("td",null,l.a.createElement("input",{type:"checkbox",value:a,checked:a,onClick:function(t){return e.selectData(t)}})),l.a.createElement("td",null,l.a.createElement("img",{src:t.thumbnailUrl,width:"50"})),l.a.createElement("td",null,t.title))}}]),t}(l.a.Component),d=a(8),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleSearch=function(t){e.setState({term:t.target.value})},e.SelectAll=function(){e.setState({SelectAllData:!e.state.SelectAllData})},e.state={data:[],term:"",page:1,SelectAllData:!1},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refresh(1)}},{key:"refresh",value:function(e){var t=this,a=this.state.data;console.log("refresh"),fetch("https://jsonplaceholder.typicode.com/photos?albumId=".concat(e)).then(function(e){return e.json()}).then(function(n){console.log("res",n);for(var l=a,c=0;c<n.length;c++)l.push(n[c]);t.setState({data:l,SelectAllData:!1,page:e})})}},{key:"fetchData",value:function(){console.log("fetchData");var e=this.state.page;e++,this.refresh(e),this.setState({page:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.term,c=t.SelectAllData;return l.a.createElement("div",{className:"app"},l.a.createElement("header",null,l.a.createElement("h1",{className:"logo"},"Data Table")),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"search-form"},l.a.createElement("form",null,l.a.createElement("input",{type:"text",className:"text",placeholder:"Search by title",onChange:this.handleSearch}))),l.a.createElement("div",{className:""},l.a.createElement(d.a,{dataLength:a.length,next:function(){return e.fetchData()},hasMore:!0,style:{width:"100%"},refreshFunction:function(){return e.refresh(1)},pullDownToRefresh:!0},l.a.createElement("table",{cellPadding:"8",cellSpacing:"0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"S.No"),l.a.createElement("td",null,l.a.createElement("input",{type:"checkbox",checked:c,onClick:this.SelectAll})," All "),l.a.createElement("td",null,"Image"),l.a.createElement("td",null,"Title"))),l.a.createElement("tbody",null,a.length>0&&a.filter(function(e){return function(t){return t.title.toLowerCase().includes(e.toLowerCase())||!e}}(n)).map(function(e,t){return l.a.createElement(m,{key:t,item:e,SelectAllData:c})})))))))}}]),t}(n.Component);var p=function(){return l.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.8c0f963b.chunk.js.map