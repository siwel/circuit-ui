(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/content/components/blockquote.mdx":function(e,a,n){"use strict";n.r(a);var o=n("./node_modules/react/index.js"),t=n.n(o),s=n("./node_modules/@mdx-js/tag/dist/index.js"),r=n("./node_modules/docz/dist/index.m.js"),c=n("./node_modules/prop-types/index.js"),p=n.n(c),m=n("./node_modules/react-emotion/dist/index.esm.js"),l=n("./src/util/shared-prop-types.js"),i=n("./src/components/Text/index.js");var d=Object(m.c)(i.a,{target:"e1wt4ki20"})(function(e){var a=e.theme;return Object(m.a)("label:blockquote;padding-left:",a.spacings.kilo,";border-left:2px solid ",a.colors.p500,";")},";",function(e){var a=e.theme;return e.size===i.a.GIGA&&Object(m.a)("label:blockquote--giga;padding-left:",a.spacings.mega,";border-left:3px solid ",a.colors.p500,";")},";"),u=function(e){var a=e.children,n=function(e,a){var n={};for(var o in e)a.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["children"]);return t.a.createElement(d,Object.assign({},n,{element:"blockquote",italic:!0}),a)},g=function(e){return t.a.createElement(u,e)};g.KILO=i.a.KILO,g.MEGA=i.a.MEGA,g.GIGA=i.a.GIGA,g.propTypes={children:l.a.isRequired,size:p.a.oneOf([g.KILO,g.MEGA,g.GIGA])},u.propTypes=g.propTypes,g.defaultProps={size:g.KILO};var k=g,h=n("./docs/utils/PropTable.js"),E=n("./docs/utils/Wrapper.js");a.default=function(e){var a=e.components;!function(e,a){var n={};for(var o in e)a.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}(e,["components"]);return t.a.createElement(s.MDXTag,{name:"wrapper",components:a},t.a.createElement(s.MDXTag,{name:"h1",components:a,props:{id:"blockquote"}},t.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#blockquote"}},t.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Blockquote"),t.a.createElement(r.d,{__position:0,__code:"<Blockquote>Blockquote</Blockquote>",wrapper:E.a},t.a.createElement(k,null,"Blockquote")),t.a.createElement(s.MDXTag,{name:"h2",components:a,props:{id:"props"}},t.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#props"}},t.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Props"),t.a.createElement(h.a,{component:k}),t.a.createElement(s.MDXTag,{name:"h2",components:a,props:{id:"best-practices"}},t.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#best-practices"}},t.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Best practices"),t.a.createElement(s.MDXTag,{name:"h2",components:a,props:{id:"usage-guidelines"}},t.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#usage-guidelines"}},t.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Usage guidelines"),t.a.createElement(s.MDXTag,{name:"h2",components:a,props:{id:"component-variations"}},t.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#component-variations"}},t.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Component variations"),t.a.createElement(s.MDXTag,{name:"h3",components:a,props:{id:"sizes-blockquotes"}},t.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h3",props:{"aria-hidden":!0,href:"#sizes-blockquotes"}},t.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Sizes blockquotes"),t.a.createElement(s.MDXTag,{name:"p",components:a},"The blockquotes come in a number of colors based on their semantic meaning."),t.a.createElement(r.d,{__position:2,__code:"<Fragment>\n  <Blockquote size={Blockquote.KILO}>Blockquote</Blockquote>\n  <Blockquote size={Blockquote.MEGA}>Blockquote</Blockquote>\n  <Blockquote size={Blockquote.GIGA}>Blockquote</Blockquote>\n</Fragment>",wrapper:E.a},t.a.createElement(o.Fragment,null,t.a.createElement(k,{size:k.KILO},"Blockquote"),t.a.createElement(k,{size:k.MEGA},"Blockquote"),t.a.createElement(k,{size:k.GIGA},"Blockquote"))))}}}]);