(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{136:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(220),c=n(222),i=n(149),l=(n(33),n(153)),u=n.n(l),s=n(4),d=n.n(s),f=n(140),p=n(223),m=n(206),h=n.n(m),g=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var v={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},k={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},b=["style","script"],x=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,w=/mailto:/i,E=/\n{2,}$/,O=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,S=/^ *> ?/gm,j=/^ {2,}\n/,C=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,P=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,T=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,z=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,_=/^(?:\n *)*\n/,R=/\r\n?/g,q=/^\[\^(.*)\](:.*)\n/,A=/^\[\^(.*)\]/,$=/\f/g,I=/^\s*?\[(x|\s)\]/,M=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,L=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,B=/^ *<([A-Za-z][^ >\/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/,D=/&([a-z]+);/g,W=/^<!--.*?-->/,N=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,G=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,Q=/^\{.*\}$/,F=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,U=/^<([^ >]+@[^ >]+)>/,Z=/^<([^ >]+:\/[^ >]+)>/,J=/ *\n+$/,V=/(?:^|\n)( *)$/,H=/-([a-z])?/gi,K=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,X=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,Y=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,ee=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,te=/^\[([^\]]*)\] ?\[([^\]]*)\]/,ne=/(\[|\])/g,re=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,ae=/\t/g,oe=/(^ *\||\| *$)/g,ce=/^ *:-+: *$/,ie=/^ *:-+ *$/,le=/^ *-+: *$/,ue=/ *\| */,se=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,de=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,fe=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,pe=/^\\([^0-9A-Za-z\s])/,me=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,he=/(^\n+|(\n|\s)+$)/g,ge=/^([ \t]*)/,ye=/\\([^0-9A-Z\s])/gi,ve=/^( *)((?:[*+-]|\d+\.)) +/,ke=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,be=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,xe=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,we=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,Ee=[O,T,P,M,L,B,W,G,ke,be,K,X];function Oe(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Se(e){return le.test(e)?"right":ce.test(e)?"center":ie.test(e)?"left":null}function je(e,t,n){n.inline=!0;var r=function(e,t,n){return e[1].replace(oe,"").trim().split(ue).map(function(e){return t(e,n)})}(e,t,n),a=function(e){return e[2].replace(oe,"").trim().split(ue).map(Se)}(e),o=function(e,t,n){return e[3].replace(oe,"").trim().split("\n").map(function(e){return e.replace(oe,"").split(ue).map(function(e){return t(e.trim(),n)})})}(e,t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function Ce(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Pe(e){function t(r,a){for(var o=[],c="";r;)for(var i=0;i<n.length;){var l=n[i],u=e[l],s=u.match(r,a,c);if(s){var d=s[0];r=r.substring(d.length);var f=u.parse(s,t,a);null==f.type&&(f.type=l),o.push(f),c=d;break}i++}return o}var n=Object.keys(e);return n.sort(function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a}),function(e,n){return t(function(e){return e.replace(R,"\n").replace($,"").replace(ae,"    ")}(e),n)}}function Te(e){return function(t,n){return n.inline?e.exec(t):null}}function ze(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function _e(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Re(e){return function(t){return e.exec(t)}}function qe(e){try{if(decodeURIComponent(e).match(/^\s*javascript:/i))return null}catch(e){return null}return e}function Ae(e){return e.replace(ye,"$1")}function $e(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ie(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Me(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function Le(e,t,n){return{content:$e(t,e[1],n)}}function Be(){return{}}function De(){return null}function We(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Ne(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Ge(e,t){var n=Ne(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":y(n))&&"render"in n?n:Ne(t,e+".component",e):e}var Qe=1,Fe=2,Ue=3,Ze=4,Je=5;function Ve(e,t){function n(e,n){for(var r=Ne(t.overrides,e+".props",{}),a=arguments.length,o=Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];return c.apply(void 0,[Ge(e,t.overrides),g({},r,n,{className:We(n&&n.className,r.className)||void 0})].concat(o))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===re.test(e));var a=d(s(r?e:e.replace(he,"")+"\n\n",{inline:r})),o=void 0;return a.length>1?o=n(r?"span":"div",null,a):1===a.length?"string"==typeof(o=a[0])&&(o=n("span",null,o)):o=n("span",null),o}function o(e){var t=e.match(x);return t?t.reduce(function(e,t,n){var o=t.indexOf("=");if(-1!==o){var c=function(e){return-1!==e.indexOf("-")&&null===e.match(N)&&(e=e.replace(H,function(e,t){return t.toUpperCase()})),e}(t.slice(0,o)).trim(),i=h()(t.slice(o+1).trim()),l=v[c]||c,u=e[l]=function(e,t){return"style"===e?t.split(/;\s?/).reduce(function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,function(e){return e[1].toUpperCase()});return e[r]=t.slice(n.length+1).trim(),e},{}):(t.match(Q)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(c,i);(B.test(u)||G.test(u))&&(e[l]=a.a.cloneElement(r(u.trim()),{key:n}))}else e[v[t]||t]=!0;return e},{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||Oe;var c=t.createElement||a.a.createElement;var i=[],l={},u={blockQuote:{match:_e(O),order:Fe,parse:function(e,t,n){return{content:t(e[0].replace(S,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Re(j),order:Fe,parse:Be,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:_e(C),order:Fe,parse:Be,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:_e(T),order:Qe,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:_e(P),order:Qe,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:ze(z),order:Ze,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:_e(q),order:Qe,parse:function(e){return i.push({footnote:e[2],identifier:e[1]}),{}},react:De},footnoteReference:{match:Te(A),order:Fe,parse:function(e){return{content:e[1],target:"#"+e[1]}},react:function(e,t,r){return n("a",{key:r.key,href:qe(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:Te(I),order:Fe,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:_e(M),order:Fe,parse:function(e,n,r){return{content:$e(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:_e(L),order:Qe,parse:function(e,t,n){return{content:$e(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlBlock:{match:Re(B),order:Fe,parse:function(e,t,n){var r=e[3].match(ge)[1],a=new RegExp("^"+r,"gm"),c=e[3].replace(a,""),i=function(e){return Ee.some(function(t){return t.test(e)})}(c)?Me:$e,l=-1!==b.indexOf(e[1]);return{attrs:o(e[2]),content:l?e[3]:i(t,c,n),noInnerParse:l,tag:e[1]}},react:function(e,t,r){return n(e.tag,g({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},htmlComment:{match:Re(W),order:Fe,parse:function(){return{}},react:De},htmlSelfClosing:{match:Re(G),order:Fe,parse:function(e){return{attrs:o(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,g({},e.attrs,{key:r.key}))}},image:{match:ze(we),order:Fe,parse:function(e){return{alt:e[1],target:Ae(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:qe(e.target)})}},link:{match:Te(xe),order:Ze,parse:function(e,t,n){return{content:Ie(t,e[1],n),target:Ae(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:qe(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:Te(Z),order:Qe,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:Te(F),order:Qe,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:Te(U),order:Qe,parse:function(e){var t=e[1],n=e[1];return w.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=V.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,be.exec(e)):null},order:Fe,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,c=e[0].replace(E,"\n").match(ke),i=!1;return{items:c.map(function(e,r){var a=ve.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(ve,""),u=r===c.length-1,s=-1!==l.indexOf("\n\n")||u&&i;i=s;var d,f=n.inline,p=n._list;n._list=!0,s?(n.inline=!1,d=l.replace(J,"\n\n")):(n.inline=!0,d=l.replace(J,""));var m=t(d,n);return n.inline=f,n._list=p,m}),ordered:a,start:o}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map(function(e,a){return n("li",{key:a},t(e,r))}))}},newlineCoalescer:{match:_e(_),order:Ze,parse:Be,react:function(){return"\n"}},paragraph:{match:_e(X),order:Ze,parse:Le,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:Te(Y),order:Qe,parse:function(e){return l[e[1]]={target:e[2],title:e[4]},{}},react:De},refImage:{match:ze(ee),order:Qe,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:qe(l[e.ref].target),title:l[e.ref].title})}},refLink:{match:Te(te),order:Qe,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(ne,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return l[e.ref]?n("a",{key:r.key,href:qe(l[e.ref].target),title:l[e.ref].title},t(e.content,r)):n("span",null,t(e.fallbackContent,r))}},table:{match:_e(K),order:Fe,parse:je,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map(function(a,o){return n("th",{key:o,style:Ce(e,o)},t(a,r))}))),n("tbody",null,e.cells.map(function(a,o){return n("tr",{key:o},a.map(function(a,o){return n("td",{key:o,style:Ce(e,o)},t(a,r))}))})))}},text:{match:Re(me),order:Je,parse:function(e){return{content:e[0].replace(D,function(e,t){return k[t]?k[t]:e})}},react:function(e){return e.content}},textBolded:{match:ze(se),order:Ue,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:ze(de),order:Ze,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:ze(pe),order:Fe,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:ze(fe),order:Ze,parse:Le,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}},s=Pe(u),d=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,o=[],c=!1,i=0;i<n.length;i++){r.key=i;var l=t(n[i],r),u="string"==typeof l;u&&c?o[o.length-1]+=l:o.push(l),c=u}return r.key=a,o}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(u)),f=r(e);return i.length&&f.props.children.push(n("footer",null,i.map(function(e){return n("div",{id:e.identifier,key:e.identifier},e.identifier,d(s(e.footnote,{inline:!0})))}))),f}function He(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return a.a.cloneElement(Ve(t,n),r)}var Ke=n(216),Xe=n(221),Ye=n(167),et=n(162),tt=n(144),nt=n(155),rt=n(190),at=f.default.a.withConfig({displayName:"StyledAnchor",componentId:"sc-1rp7lwl-0"})(["box-sizing:border-box;"," color:",";"," text-decoration:",";cursor:pointer;outline:none;"," "," "," "," "," ",""],function(e){return function(e){if(e.size){var t=e.size||"medium",n=e.theme.text[t];return Object(f.css)(["font-size:",";line-height:",";"],n.size,n.height)}return Object(f.css)(["font-size:inherit;line-height:inherit;"])}(e)},function(e){return Object(et.c)(e.colorProp||e.theme.anchor.color,e.theme)},function(e){return e.theme.anchor.fontWeight&&"font-weight: "+e.theme.anchor.fontWeight+";"},function(e){return e.hasIcon?"none":e.theme.anchor.textDecoration},rt.e,function(e){return!e.disabled&&e.theme.anchor.hover&&Object(f.css)(["&:hover{"," "," ","}"],e.theme.anchor.hover.textDecoration&&"text-decoration: "+e.theme.anchor.hover.textDecoration+";",e.theme.anchor.hover.fontWeight&&"font-weight: "+e.theme.anchor.hover.fontWeight+";",e.theme.anchor.hover.extend)},function(e){return e.hasIcon&&!e.hasLabel&&"\n    padding: "+e.theme.global.edgeSize.small+";\n  "},function(e){return e.disabled&&"\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n"},function(e){return e.focus&&rt.d},function(e){return e.theme.anchor.extend});function ot(){return(ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}at.defaultProps={},Object.setPrototypeOf(at.defaultProps,tt.a);var ct=function(e){var t,n;function c(t){var n;n=e.call(this,t)||this;var r=t.children,a=t.icon,o=t.label;return(a||o)&&r&&console.warn("Anchor should not have children if icon or label is provided"),n}return n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,c.prototype.render=function(){var e=this.props,t=e.a11yTitle,n=e.children,c=e.color,i=e.disabled,l=e.forwardRef,u=e.href,s=e.icon,d=e.focus,f=e.label,p=e.onClick,m=e.reverse,h=e.theme,g=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["a11yTitle","children","color","disabled","forwardRef","href","icon","focus","label","onClick","reverse","theme"]),y=s;s&&!s.props.color&&(y=Object(r.cloneElement)(s,{color:Object(et.c)(c||h.anchor.color,h)}));var v=m?f:y,k=m?y:f;return a.a.createElement(at,ot({},g,{ref:l,"aria-label":t,colorProp:c,disabled:i,hasIcon:!!s,focus:d,hasLabel:f,reverse:m,href:i?void 0:u,onClick:i?void 0:p}),v&&k?a.a.createElement(o.a,{as:"span",direction:"row",align:"center",gap:"small",style:{display:"inline-flex"}},v,k):v||k||n)},c}(r.Component);ct.defaultProps={},Object.setPrototypeOf(ct.defaultProps,tt.a);var it=Object(Ye.a)(nt.b,f.withTheme,nt.c)(ct);function lt(){return(lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ut=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.components,n=(e.theme,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components","theme"])),r=[1,2,3,4].reduce(function(e,t){var n=lt({},e);return n["h"+t]={component:c.a,props:{level:t}},n},{}),o=Object(Ke.b)({p:{component:Xe.a},a:{component:it}},r,t);return a.a.createElement(He,lt({options:{overrides:o}},n))},r}(r.Component),st=function(e){var t=e.children,n=u()(e,["children"]);return a.a.createElement(o.a,Object.assign({pad:"medium",round:"medium",border:{side:"all",color:"brand",size:"1px"}},n),a.a.createElement(p.a,null,t))},dt=f.default.code.withConfig({displayName:"Markdown__Code",componentId:"sc-186h9da-0"})(["display:inline-block;background:",";color:",";padding:0 6px;border-radius:3px;"],function(e){return e.theme.global.colors["dark-1"]},function(e){return e.theme.global.colors["light-1"]}),ft=function(e){var t=e.children,n=u()(e,["children"]);return a.a.createElement(o.a,Object.assign({as:"pre",background:"dark-1",pad:"medium",round:"medium"},n),a.a.createElement(p.a,null,a.a.createElement("code",null,t)))},pt=function(e){var t=e.children,n=u()(e,["children"]);return a.a.createElement(ut,Object.assign({components:{blockquote:{component:st},pre:{component:ft},code:{component:dt},p:{component:Xe.a,props:{size:"large"}}}},n),t)};pt.propTypes={children:d.a.node.isRequired};var mt=pt;function ht(e){var t=e.data.markdownRemark,n=t.frontmatter,r=t.rawMarkdownBody;return a.a.createElement(i.a,null,a.a.createElement(o.a,{width:"large"},a.a.createElement(c.a,{margin:"none"},n.title),a.a.createElement(mt,null,r)))}n.d(t,"default",function(){return ht}),n.d(t,"pageQuery",function(){return gt});var gt="1003844891"},139:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),o=n(4),c=n.n(o),i=n(138),l=n.n(i);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var u=n(143),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var f=a.a.createContext({}),p=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},143:function(e,t,n){var r;e.exports=(r=n(146))&&r.default||r},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Grommet Docs Starter"}}}}},146:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),i=n(50),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},147:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"afd8958d-a8fa-5483-a8a6-d288e1a58c8e",frontmatter:{title:"Introduction",path:"/docs/introduction"}}},{node:{id:"c507af86-043d-57fd-8464-0148379e9b06",frontmatter:{title:"Troubleshooting",path:"/docs/troubleshooting"}}},{node:{id:"a8a1b56a-370f-5eda-ac1d-48501b4f3502",frontmatter:{title:"Tutorial",path:"/docs/tutorial"}}}]}}}},148:function(e,t,n){},149:function(e,t,n){"use strict";var r=n(145),a=n(0),o=n.n(a),c=n(4),i=n.n(c),l=n(150),u=n.n(l),s=n(219),d=n(220),f=n(152),p=n(151),m=n(139),h=n(147),g=n(223),y=function(){return o.a.createElement(m.StaticQuery,{query:"1590431454",render:function(e){return o.a.createElement(d.a,{gap:"small"},e.allMarkdownRemark&&e.allMarkdownRemark.edges.length>0&&e.allMarkdownRemark.edges.map(function(e){var t=e.node;return o.a.createElement(m.Link,{to:t.frontmatter.path,style:{textDecoration:"none"},key:t.frontmatter.path},o.a.createElement(g.a,{color:"light-2",margin:{right:"small"}},t.frontmatter.title))}))},data:h})},v=n(222),k=function(e){var t=e.siteTitle;return o.a.createElement(d.a,{tag:"header",margin:{bottom:"medium"}},o.a.createElement(v.a,{margin:"none"},o.a.createElement(m.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t)))};k.propTypes={siteTitle:i.a.string},k.defaultProps={siteTitle:""};var b=k,x=(n(148),Object(p.deepMerge)(f.a,{paragraph:{small:{maxWidth:"100%"},medium:{maxWidth:"100%"},large:{maxWidth:"100%"},xlarge:{maxWidth:"100%"},xxlarge:{maxWidth:"100%"}}})),w=function(e){var t=e.children;return o.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(s.a,{theme:x,full:!0},o.a.createElement(d.a,{full:!0,direction:"row"},o.a.createElement(d.a,{background:"brand",width:"medium",height:"100vh",pad:"medium",style:{overflow:"auto"}},o.a.createElement(d.a,{flex:!1}," ",o.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(y,null))),o.a.createElement(d.a,{width:"100%",height:"100vh",style:{overflow:"auto"},pad:{horizontal:"large",vertical:"medium"}},o.a.createElement(d.a,{flex:!1}," ",t)))))},data:r})};w.propTypes={children:i.a.node.isRequired};t.a=w},206:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}}}]);
//# sourceMappingURL=component---src-templates-doc-template-js-5b270803cce8b4c79d8f.js.map