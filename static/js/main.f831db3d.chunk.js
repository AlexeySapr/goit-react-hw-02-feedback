(this["webpackJsonpgoit-react-hw-template"]=this["webpackJsonpgoit-react-hw-template"]||[]).push([[0],[,,function(e,t,a){e.exports={feedback:"FeedbackOptions_feedback__YtZKx",feedbackGood:"FeedbackOptions_feedbackGood__1_1h8",feedbackNeutral:"FeedbackOptions_feedbackNeutral__e3b5c",feedbackBad:"FeedbackOptions_feedbackBad__3HCj8"}},,function(e,t,a){e.exports={section:"Section_section__r3m6L",title:"Section_title__1Ru__"}},,,,,function(e,t,a){e.exports={container:"Container_container__30aPH"}},function(e,t,a){e.exports={statistics:"Statistics_statistics__17Pbn"}},,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),i=a.n(s),r=(a(17),a(6)),o=a(7),d=a(8),l=a(12),b=a(11),u=(a(18),a(9)),j=a.n(u),h=a(0);var f=function(e){var t=e.children;return Object(h.jsx)("div",{className:j.a.container,children:t})},k=a(4),O=a.n(k);var x=function(e){var t=e.title,a=e.children;return Object(h.jsxs)("div",{className:O.a.section,children:[Object(h.jsx)("h2",{className:O.a.title,children:t}),a]})},p=a(2),v=a.n(p),_=function(e){var t=e.onLeaveFeedback;return Object(h.jsxs)("div",{className:v.a.feedback,children:[Object(h.jsx)("button",{className:v.a.feedbackGood,type:"button",name:"good",onClick:t,children:"Good"}),Object(h.jsx)("button",{className:v.a.feedbackNeutral,type:"button",name:"neutral",onClick:t,children:"Neutral"}),Object(h.jsx)("button",{className:v.a.feedbackBad,type:"button",name:"bad",onClick:t,children:"Bad"})]})},m=a(10),g=a.n(m),N=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(h.jsxs)("ul",{className:g.a.statistics,children:[Object(h.jsxs)("li",{children:["Good: ",t]}),Object(h.jsxs)("li",{children:["Neutral: ",a]}),Object(h.jsxs)("li",{children:["Bad: ",c]}),Object(h.jsxs)("li",{children:["Total: ",n]}),Object(h.jsxs)("li",{children:["Positive feedback: ",s,"%"]})]})},F=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},P=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){var a=t.currentTarget.name;e.setState((function(e){return Object(r.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(t){return Math.round(e.state.good/t*100)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(e),a=this.state,c=a.good,n=a.neutral,s=a.bad;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"AppHeader",children:"Reviews widget"}),Object(h.jsxs)(f,{children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(_,{onLeaveFeedback:this.addFeedback})}),Object(h.jsx)(x,{title:"Statistics",children:e>0?Object(h.jsx)(N,{good:c,neutral:n,bad:s,total:e,positivePercentage:t||"0"}):Object(h.jsx)(F,{message:"There is no feedback"})})]})]})}}]),a}(n.a.Component),w=P;i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.f831db3d.chunk.js.map