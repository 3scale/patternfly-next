webpackJsonp([0xd9b25f44e792],{33:function(e,t,i){var n=i(1);e.exports=(n.default||n).template({1:function(e,t,i,n,a){var l;return e.escapeExpression((l=null!=(l=i["accessibility--element"]||(null!=t?t["accessibility--element"]:t))?l:i.helperMissing,"function"==typeof l?l.call(null!=t?t:e.nullContext||{},{name:"accessibility--element",hash:{},data:a}):l))},3:function(e,t,i,n,a){return"span"},5:function(e,t,i,n,a){var l;return" "+e.escapeExpression((l=null!=(l=i["accessibility--modifier"]||(null!=t?t["accessibility--modifier"]:t))?l:i.helperMissing,"function"==typeof l?l.call(null!=t?t:e.nullContext||{},{name:"accessibility--modifier",hash:{},data:a}):l))},7:function(e,t,i,n,a){var l,s;return"    "+(null!=(s=null!=(s=i["accessibility--attribute"]||(null!=t?t["accessibility--attribute"]:t))?s:i.helperMissing,l="function"==typeof s?s.call(null!=t?t:e.nullContext||{},{name:"accessibility--attribute",hash:{},data:a}):s)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,t,i,n,a){var l,s,r=null!=t?t:e.nullContext||{};return"<"+(null!=(l=i.if.call(r,null!=t?t["accessibility--element"]:t,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.program(3,a,0),data:a}))?l:"")+' class="pf-u-'+e.escapeExpression((s=null!=(s=i["accessibility--type"]||(null!=t?t["accessibility--type"]:t))?s:i.helperMissing,"function"==typeof s?s.call(r,{name:"accessibility--type",hash:{},data:a}):s))+(null!=(l=i.if.call(r,null!=t?t["accessibility--modifier"]:t,{name:"if",hash:{},fn:e.program(5,a,0),inverse:e.noop,data:a}))?l:"")+'"\n'+(null!=(l=i.if.call(r,null!=t?t["accessibility--attribute"]:t,{name:"if",hash:{},fn:e.program(7,a,0),inverse:e.noop,data:a}))?l:"")+">\n"+(null!=(l=e.invokePartial(n["@partial-block"],t,{name:"@partial-block",data:a,indent:"  ",helpers:i,partials:n,decorators:e.decorators}))?l:"")+"</"+(null!=(l=i.if.call(r,null!=t?t["accessibility--element"]:t,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.program(3,a,0),data:a}))?l:"")+">\n"},usePartial:!0,useData:!0})},1134:function(e,t){},956:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. <strong>Example .pf-u-sr-only-on-lg</strong></p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-u-sr-only{-on-[breakpoint]}</code></td> <td><code>*</code></td> <td>Visually hides element, but leaves accessible to assistive technologies</td> </tr> <tr> <td><code>.pf-u-visible{-on-[breakpoint]}</code></td> <td><code>*</code></td> <td>Unsets <code>.pf-u-sr-only</code></td> </tr> </tbody> </table> "},842:function(e,t,i){var n=i(1);e.exports=(n.default||n).template({1:function(e,t,i,n,a){return"  This text is hidden.\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,a,l){var s;return"The text underneath is hidden.\n"+(null!=(s=e.invokePartial(i(33),t,{name:"accessibility",hash:{"accessibility--type":"hidden"},fn:e.program(1,l,0),inverse:e.noop,data:l,helpers:n,partials:a,decorators:e.decorators}))?s:"")},usePartial:!0,useData:!0})},1294:function(e,t){e.exports='The text underneath is hidden.\n{{#> accessibility accessibility--type="hidden"}}\n  This text is hidden.\n{{/accessibility}}'},843:function(e,t,i){var n=i(1);e.exports=(n.default||n).template({1:function(e,t,i,n,a){return"    This content is intended to be announced by assistive technologies, but not visually presented.\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,a,l){var s;return"Content available only to screen reader, open inspector to investigate\n"+(null!=(s=e.invokePartial(i(33),t,{name:"accessibility",hash:{"accessibility--type":"sr-only"},fn:e.program(1,l,0),inverse:e.noop,data:l,helpers:n,partials:a,decorators:e.decorators}))?s:"")},usePartial:!0,useData:!0})},1295:function(e,t){e.exports='Content available only to screen reader, open inspector to investigate\n{{#> accessibility accessibility--type="sr-only"}}\n    This content is intended to be announced by assistive technologies, but not visually presented.\n{{/accessibility}}'},844:function(e,t,i){var n=i(1);e.exports=(n.default||n).template({1:function(e,t,i,n,a){return"    This class unsets .pf-u-sr-only. It will be visible.\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,a,l){var s;return null!=(s=e.invokePartial(i(33),t,{name:"accessibility",hash:{"accessibility--type":"visible"},fn:e.program(1,l,0),inverse:e.noop,data:l,helpers:n,partials:a,decorators:e.decorators}))?s:""},usePartial:!0,useData:!0})},1296:function(e,t){e.exports='{{#> accessibility accessibility--type="visible"}}\n    This class unsets .pf-u-sr-only. It will be visible.\n{{/accessibility}}'},342:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var a=i(3),l=n(a),s=i(10),r=n(s),o=i(11),c=n(o),u=i(1295),d=n(u),p=i(1296),f=n(p),b=i(1294),h=n(b),y=i(843),m=n(y),v=i(844),g=n(v),x=i(842),k=n(x),T=i(956),E=n(T);i(1134);var P=t.Docs=E.default;t.default=function(){var e=(0,m.default)(),t=(0,g.default)(),i=(0,k.default)(),n="Accessibility";return l.default.createElement(r.default,{docs:P,heading:n,className:"is-utility-page"},l.default.createElement(c.default,{heading:"Screen reader only",handlebars:d.default},e),l.default.createElement(c.default,{heading:"Visible",handlebars:f.default},t),l.default.createElement(c.default,{heading:"Hidden",handlebars:h.default},i))}}});
//# sourceMappingURL=component---src-patternfly-utilities-accessibility-examples-index-js-c9116494fb736e2cb8c6.js.map