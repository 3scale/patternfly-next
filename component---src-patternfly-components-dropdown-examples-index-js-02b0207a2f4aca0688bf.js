webpackJsonp([93835562911203],{882:function(e,d){e.exports="<h2 id=overview>Overview</h2> <p>The dropdown menu can contain either links or buttons, depending on the expected behavior when clicking the menu item. If you are using the menu item to navigate to another page, then menu item is a link. Otherwise, use a button for the menu item.</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>aria-expanded=&quot;false&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Indicates that the menu is hidden</td> </tr> <tr> <td><code>aria-expanded=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Indicates that the menu is visible</td> </tr> <tr> <td><code>aria-label=&quot;Actions&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Provides an accessible name for the dropdown when an icon is used instead of text. <strong>Required when icon is used with no supporting text</strong></td> </tr> <tr> <td><code>aria-hidden=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__toggle-icon</code></td> <td>Hides the icon from assistive technologies</td> </tr> <tr> <td><code>hidden</code></td> <td><code>.pf-c-dropdown__menu</code></td> <td>Indicates that the menu is hidden so that it isn&#39;t visible in the UI and isn&#39;t accessed by assistive technologies</td> </tr> <tr> <td><code>aria-expanded=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__menu</code></td> <td>Indicates that the menu is visible</td> </tr> <tr> <td><code>role=&quot;separator&quot;</code></td> <td><code>.pf-c-dropdown__separator</code></td> <td>Indicates that the separator is a separator</td> </tr> <tr> <td><code>disabled</code></td> <td><code>button.pf-c-dropdown__menu-item</code></td> <td>When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus</td> </tr> <tr> <td><code>aria-disabled=&quot;true&quot;</code></td> <td><code>a.pf-c-dropdown__menu-item</code></td> <td>When the menu item uses a link element, indicates that it is unavailable</td> </tr> <tr> <td><code>tabindex=&quot;-1&quot;</code></td> <td><code>a.pf-c-dropdown__menu-item</code></td> <td>When the menu item uses a link element, removes it from keyboard focus</td> </tr> <tr> <td><code>aria-pressed=&quot;true&quot;</code></td> <td><code>button.pf-c-dropdown__menu-item</code></td> <td><strong>Select only</strong> The attribute <code>aria-pressed=&quot;true&quot;</code> should be set programmatically to the active item. Value should be false when not selected.</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-dropdown</code></td> <td><code>&lt;div&gt;</code></td> <td>Defines the parent wrapper of the dropdown.</td> </tr> <tr> <td><code>.pf-c-dropdown__toggle</code></td> <td><code>&lt;button&gt;</code></td> <td>Defines the dropdown toggle</td> </tr> <tr> <td><code>.pf-c-dropdown__toggle-icon</code></td> <td><code>&lt;i&gt;</code></td> <td>Defines the dropdown toggle icon</td> </tr> <tr> <td><code>.pf-c-dropdown__menu</code></td> <td><code>&lt;div&gt;</code></td> <td>Defines the parent wrapper of the menu items</td> </tr> <tr> <td><code>.pf-c-dropdown__menu-item</code></td> <td><code>&lt;a&gt;</code></td> <td>Defines a menu item that navigates to another page</td> </tr> <tr> <td><code>.pf-c-dropdown__menu-item</code></td> <td><code>&lt;button&gt;</code></td> <td>Defines a menu item that performs an action on the current page</td> </tr> <tr> <td><code>.pf-c-dropdown__separator</code></td> <td><code>&lt;div&gt;</code></td> <td>Defines a separator within the menu</td> </tr> <tr> <td><code>.pf-m-expanded</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies for the expanded state</td> </tr> <tr> <td><code>.pf-m-plain</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the toggle with no border or background</td> </tr> <tr> <td><code>.pf-m-top</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the menu above the toggle</td> </tr> <tr> <td><code>.pf-m-align-right</code></td> <td><code>.pf-c-dropdown__menu</code></td> <td>Modifies to display the menu aligned to the right edge of the toggle</td> </tr> <tr> <td><code>.pf-m-hover</code></td> <td><code>.pf-c-dropdown__menu-item</code>, <code>.pf-c-dropdown__toggle</code></td> <td>Forces display of the hover state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the <code>:hover</code> pseudo-class.</td> </tr> <tr> <td><code>.pf-m-focus</code></td> <td><code>.pf-c-dropdown__menu-item</code></td> <td>Forces display of the focus state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the <code>:focus</code> pseudo-class.</td> </tr> <tr> <td><code>.pf-m-active</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Forces display of the active state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the <code>:active</code> pseudo-class.</td> </tr> <tr> <td><code>.pf-m-disabled</code></td> <td><code>a.pf-c-dropdown__menu-item</code></td> <td>Modifies to display the menu item as disabled. This applies to <code>a.pf-c-dropdown__menu-item</code> and should not be used in lieu of the <code>:disabled</code> attribute on <code>button.pf-c-dropdown__menu-item</code></td> </tr> </tbody> </table> "},883:function(e,d){e.exports="<p>The Basic Dropdown is provided for flexibility in allowing various content within a dropdown. </p> "},884:function(e,d){e.exports="<p>The Dropdown Multi Select should be used when the user is selecting multiple items from a list. Although the presentation is similar to the basic dropdown, the underlying HTML and Aria tag structure is specific to a select list.</p> "},885:function(e,d){e.exports="<p>The Dropdown Select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and Aria tag structure is specific to a select list.</p> <p><em>Note:</em> The attribute <code>aria-pressed=&quot;true&quot;</code> should be set programmatically to the active item.</p> "},1079:function(e,d){},689:function(e,d,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,d,o,t,n){return"  Right\n"},compiler:[7,">= 4.0.0"],main:function(e,d,t,n,r){var a;return null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"dropdown-menu--modifier":"pf-m-align-right","dropdown--HasToggleIcon":"true","dropdown--IsExpanded":"true","dropdown--IsActionMenu":"true",id:"dropdown-example-rightAligned"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},1149:function(e,d){e.exports='{{#> dropdown id="dropdown-example-rightAligned" dropdown--IsActionMenu="true" dropdown--IsExpanded="true" dropdown--HasToggleIcon="true" dropdown-menu--modifier="pf-m-align-right"}}\n  Right\n{{/dropdown}}'},1150:function(e,d){e.exports='{{#> dropdown id="dropdown-basic-example-expanded" dropdown--IsExpanded="true" dropdown--HasToggleIcon="true"}}\n  Expanded Dropdown\n{{/dropdown}}\n'},690:function(e,d,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,d,o,t,n){return"  Expanded Dropdown\n"},compiler:[7,">= 4.0.0"],main:function(e,d,t,n,r){var a;return null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"dropdown--HasToggleIcon":"true","dropdown--IsExpanded":"true",id:"dropdown-basic-example-expanded"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},1151:function(e,d){e.exports='{{#> dropdown id="dropdown-example-collapsed" dropdown--IsActionMenu="true" dropdown--HasToggleIcon="true"}}\n  Collapsed Dropdown\n{{/dropdown}}\n'},691:function(e,d,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,d,o,t,n){return"  Collapsed Dropdown\n"},compiler:[7,">= 4.0.0"],main:function(e,d,t,n,r){var a;return null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"dropdown--HasToggleIcon":"true","dropdown--IsActionMenu":"true",id:"dropdown-example-collapsed"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},1152:function(e,d){e.exports='{{#> dropdown id="dropdown-example-expanded" dropdown--IsActionMenu="true" dropdown--IsExpanded="true" dropdown--HasToggleIcon="true"}}\n  Expanded Dropdown\n{{/dropdown}}\n'},692:function(e,d,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,d,o,t,n){return"  Expanded Dropdown\n"},compiler:[7,">= 4.0.0"],main:function(e,d,t,n,r){var a;return null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"dropdown--HasToggleIcon":"true","dropdown--IsExpanded":"true","dropdown--IsActionMenu":"true",id:"dropdown-example-expanded"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},693:function(e,d,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,d,o,t,n){return""},compiler:[7,">= 4.0.0"],main:function(e,d,t,n,r){var a;return null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"dropdown-menu--modifier":"pf-m-align-right","aria-label":"Actions","dropdown--HasKebabIcon":"true","dropdown--modifier":"pf-m-plain","dropdown--IsExpanded":"true","dropdown--IsActionMenu":"true",id:"dropdown-example-kebab-right-aligned"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},1153:function(e,d){e.exports='{{#> dropdown id="dropdown-example-kebab-right-aligned" dropdown--IsActionMenu="true" dropdown--IsExpanded="true" dropdown--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions" dropdown-menu--modifier="pf-m-align-right"}}\n{{/dropdown}}\n'},1154:function(e,d){e.exports='{{#> dropdown id="dropdown-example-kebab" dropdown--IsActionMenu="true" dropdown--IsExpanded="true" dropdown--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}\n'},694:function(e,d,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,d,o,t,n){return""},compiler:[7,">= 4.0.0"],main:function(e,d,t,n,r){var a;return(null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"aria-label":"Actions","dropdown--HasKebabIcon":"true","dropdown--modifier":"pf-m-plain","dropdown--IsExpanded":"true","dropdown--IsActionMenu":"true",id:"dropdown-example-kebab"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:"")+"\n"},usePartial:!0,useData:!0})},1155:function(e,d){e.exports='{{#> dropdown id="dropdown-multi-select-example" dropdown--IsMultiSelect="true" dropdown--HasToggleIcon="true"}}\n  Apples, Oranges\n{{/dropdown}}\n'},695:function(e,d,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,d,o,t,n){return"  Apples, Oranges\n"},compiler:[7,">= 4.0.0"],main:function(e,d,t,n,r){var a;return null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"dropdown--HasToggleIcon":"true","dropdown--IsMultiSelect":"true",id:"dropdown-multi-select-example"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},1156:function(e,d){e.exports='{{#> dropdown id="dropdown-multi-select-example-expanded" dropdown--IsMultiSelect="true" dropdown--IsExpanded="true" dropdown--HasToggleIcon="true"}}\n  Choose many\n{{/dropdown}}\n'},696:function(e,d,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,d,o,t,n){return"  Choose many\n"},compiler:[7,">= 4.0.0"],main:function(e,d,t,n,r){var a;return null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"dropdown--HasToggleIcon":"true","dropdown--IsExpanded":"true","dropdown--IsMultiSelect":"true",id:"dropdown-multi-select-example-expanded"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},697:function(e,d,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,d,o,t,n){return"  Apples\n"},compiler:[7,">= 4.0.0"],main:function(e,d,t,n,r){var a;return null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"dropdown--HasToggleIcon":"true","dropdown--ItemIsSelected":"true","dropdown--IsSelect":"true",id:"dropdown-select-example"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},1157:function(e,d){e.exports='{{#> dropdown id="dropdown-select-example" dropdown--IsSelect="true" dropdown--ItemIsSelected="true" dropdown--HasToggleIcon="true"}}\n  Apples\n{{/dropdown}}\n'},698:function(e,d,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,d,o,t,n){return"  Choose one\n"},compiler:[7,">= 4.0.0"],main:function(e,d,t,n,r){var a;return null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"dropdown--HasToggleIcon":"true","dropdown--IsExpanded":"true","dropdown--IsSelect":"true",id:"dropdown-select-example-expanded"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},1158:function(e,d){e.exports='{{#> dropdown id="dropdown-select-example-expanded" dropdown--IsSelect="true" dropdown--IsExpanded="true" dropdown--HasToggleIcon="true"}}\n  Choose one\n{{/dropdown}}\n'},699:function(e,d,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,d,o,t,n){return"  Apples\n"},compiler:[7,">= 4.0.0"],main:function(e,d,t,n,r){var a;return null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"dropdown--HasToggleIcon":"true","dropdown--ItemIsSelected":"true","dropdown--IsExpanded":"true","dropdown--IsSelect":"true",id:"dropdown-select-example-expanded-selected"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},1159:function(e,d){e.exports='{{#> dropdown id="dropdown-select-example-expanded-selected" dropdown--IsSelect="true" dropdown--IsExpanded="true" dropdown--ItemIsSelected="true" dropdown--HasToggleIcon="true"}}\n  Apples\n{{/dropdown}}\n'},1160:function(e,d){e.exports='{{#> dropdown id="dropdown-example-top-collapsed" dropdown--IsActionMenu="true" dropdown--modifier="pf-m-top" dropdown--HasToggleIcon="true"}}\n  Top\n{{/dropdown}}\n{{#> dropdown id="dropdown-example-top-expanded" dropdown--IsActionMenu="true" dropdown--IsExpanded="true" dropdown--modifier="pf-m-top" dropdown--HasToggleIcon="true"}}\n  Top\n{{/dropdown}}\n'},700:function(e,d,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,d,o,t,n){return"  Top\n"},compiler:[7,">= 4.0.0"],main:function(e,d,t,n,r){var a;return(null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"dropdown--HasToggleIcon":"true","dropdown--modifier":"pf-m-top","dropdown--IsActionMenu":"true",id:"dropdown-example-top-collapsed"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:"")+(null!=(a=e.invokePartial(o(23),d,{name:"dropdown",hash:{"dropdown--HasToggleIcon":"true","dropdown--modifier":"pf-m-top","dropdown--IsExpanded":"true","dropdown--IsActionMenu":"true",id:"dropdown-example-top-expanded"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:n,decorators:e.decorators}))?a:"")},usePartial:!0,useData:!0})},307:function(e,d,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}d.__esModule=!0,d.Docs=void 0;var n=o(3),r=t(n),a=o(11),p=t(a),i=o(12),s=t(i),l=o(1152),c=t(l),u=o(1150),m=t(u),f=o(1158),w=t(f),h=o(1159),g=t(h),x=o(1157),b=t(x),v=o(1155),I=t(v),_=o(1156),D=t(_),T=o(1151),A=t(T),E=o(1154),y=t(E),M=o(1153),H=t(M),k=o(1149),P=t(k),q=o(1160),S=t(q),N=o(692),C=t(N),K=o(690),O=t(K),R=o(698),F=t(R),W=o(699),B=t(W),L=o(697),U=t(L),J=o(695),V=t(J),j=o(696),z=t(j),G=o(691),Q=t(G),X=o(694),Y=t(X),Z=o(693),$=t(Z),ee=o(689),de=t(ee),oe=o(700),te=t(oe),ne=o(883),re=t(ne),ae=o(885),pe=t(ae),ie=o(884),se=t(ie),le=o(882),ce=t(le);o(1079);var ue=d.Docs=ce.default;d.default=function(){var e=(0,C.default)(),d=(0,O.default)(),o=(0,F.default)(),t=(0,B.default)(),n=(0,U.default)(),a=(0,V.default)(),i=(0,z.default)(),l=(0,Q.default)(),u=(0,Y.default)(),f=(0,$.default)(),h=(0,de.default)(),x=(0,te.default)(),v="Dropdown",_={height:"13em"};return r.default.createElement(p.default,{style:_,docs:ue,heading:v},r.default.createElement(s.default,{className:"is-expanded-dropdown",heading:"Basic Dropdown (expanded)",handlebars:m.default,docs:re.default},d),r.default.createElement(s.default,{className:"is-expanded-dropdown",heading:"Dropdown with links and actions (expanded)",handlebars:c.default},e),r.default.createElement(s.default,{heading:"Dropdown (collapsed)",handlebars:A.default},l),r.default.createElement(s.default,{className:"is-expanded-dropdown",heading:"Dropdown Select (expanded)",handlebars:w.default,docs:pe.default},o),r.default.createElement(s.default,{className:"is-expanded-dropdown",heading:"Dropdown Select (expanded, first item selected)",handlebars:g.default,docs:pe.default},t),r.default.createElement(s.default,{heading:"Dropdown Select (collapsed)",handlebars:b.default,docs:pe.default},n),r.default.createElement(s.default,{className:"is-expanded-dropdown",heading:"Dropdown Multi-Select (expanded)",handlebars:D.default,docs:se.default},i),r.default.createElement(s.default,{heading:"Dropdown Multi-Select (collapsed)",handlebars:I.default},a),r.default.createElement(s.default,{className:"is-expanded-dropdown",heading:"Kebab",handlebars:y.default},u),r.default.createElement(s.default,{className:"is-expanded-dropdown is-align-right",heading:"Kebab Align Right",handlebars:H.default},f),r.default.createElement(s.default,{className:"is-expanded-dropdown is-align-right",heading:"Align Right",handlebars:P.default},h),r.default.createElement(s.default,{className:"is-expanded-top",heading:"Top",handlebars:S.default},x))}}});
//# sourceMappingURL=component---src-patternfly-components-dropdown-examples-index-js-02b0207a2f4aca0688bf.js.map