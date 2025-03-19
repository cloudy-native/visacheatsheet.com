"use strict";(self.webpackChunkgatsby_typescript_chakraui=self.webpackChunkgatsby_typescript_chakraui||[]).push([[248],{94:function(e,t,r){r.d(t,{l:function(){return o},m:function(){return l}});var a=r(6662),n=r(6540);function o(e){const{loading:t,src:r,srcSet:o,onLoad:l,onError:i,crossOrigin:s,sizes:c,ignoreFallback:d}=e,[g,u]=(0,n.useState)("pending");(0,n.useEffect)((()=>{u(r?"loading":"pending")}),[r]);const m=(0,n.useRef)(null),f=(0,n.useCallback)((()=>{if(!r)return;h();const e=new Image;e.src=r,s&&(e.crossOrigin=s),o&&(e.srcset=o),c&&(e.sizes=c),t&&(e.loading=t),e.onload=e=>{h(),u("loaded"),l?.(e)},e.onerror=e=>{h(),u("failed"),i?.(e)},m.current=e}),[r,s,o,c,l,i,t]),h=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,a.U)((()=>{if(!d)return"loading"===g&&f(),()=>{h()}}),[g,f,d]),d?"loaded":g}const l=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t},551:function(e,t,r){r.d(t,{T:function(){return o}});var a=r(4848),n=r(5958);const o=(0,r(2600).R)(((e,t)=>(0,a.jsx)(n.B,{align:"center",...e,direction:"column",ref:t})));o.displayName="VStack"},4074:function(e,t,r){r.r(t),r.d(t,{Head:function(){return D},default:function(){return M}});var a=r(3840),n=r(9146),o=r(5958),l=r(5353),i=r(1052),s=r(4848),c=r(7692),d=r(456),g=r(3738),u=r(2600),m=r(7182),f=r(816);const[h,p]=(0,d.q)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),b=(0,u.R)(((e,t)=>{const r=(0,m.o)("Tag",e),a=(0,c.M)(e),n={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...r.container};return(0,s.jsx)(h,{value:r,children:(0,s.jsx)(f.B.span,{ref:t,...a,__css:n})})}));b.displayName="Tag";(0,u.R)(((e,t)=>{const r=p();return(0,s.jsx)(f.B.span,{ref:t,noOfLines:1,...e,__css:r.label})})).displayName="TagLabel";(0,u.R)(((e,t)=>(0,s.jsx)(g.I,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e}))).displayName="TagLeftIcon";(0,u.R)(((e,t)=>(0,s.jsx)(g.I,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e}))).displayName="TagRightIcon";const x=e=>(0,s.jsx)(g.I,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});x.displayName="TagCloseIcon";(0,u.R)(((e,t)=>{const{isDisabled:r,children:a,...n}=e,o={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...p().closeButton};return(0,s.jsx)(f.B.button,{ref:t,"aria-label":"close",...n,type:"button",disabled:r,__css:o,children:a||(0,s.jsx)(x,{})})})).displayName="TagCloseButton";var y=r(551);const v=(0,u.R)(((e,t)=>(0,s.jsx)(o.B,{align:"center",...e,direction:"row",ref:t})));v.displayName="HStack";var E=r(7234),j=r(8827),k=r(5270),_=r(3682);function C(...e){return function(t){e.some((e=>(e?.(t),t?.defaultPrevented)))}}var S=r(6540);const[N,w]=(0,d.q)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function R(e){const t=e.trim().split(" "),r=t[0]??"",a=t.length>1?t[t.length-1]:"";return r&&a?`${r.charAt(0)}${a.charAt(0)}`:r.charAt(0)}function B(e){const{name:t,getInitials:r,...a}=e,n=w();return(0,s.jsx)(f.B.div,{role:"img","aria-label":t,...a,__css:n.label,children:t?r?.(t):null})}B.displayName="AvatarName";const A=e=>(0,s.jsxs)(f.B.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[(0,s.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,s.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]});var L=r(94);function T(e){const{src:t,srcSet:r,onError:a,onLoad:n,getInitials:o,name:l,borderRadius:i,loading:c,iconLabel:d,icon:g=(0,s.jsx)(A,{}),ignoreFallback:u,referrerPolicy:m,crossOrigin:h}=e,p=(0,L.l)({src:t,onError:a,crossOrigin:h,ignoreFallback:u});return!t||!("loaded"===p)?l?(0,s.jsx)(B,{className:"chakra-avatar__initials",getInitials:o,name:l}):(0,S.cloneElement)(g,{role:"img","aria-label":d}):(0,s.jsx)(f.B.img,{src:t,srcSet:r,alt:l??d,onLoad:n,referrerPolicy:m,crossOrigin:h??void 0,className:"chakra-avatar__img",loading:c,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:i}})}T.displayName="AvatarImage";const I=(0,j.H2)({display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0}),z=(0,u.R)(((e,t)=>{const r=(0,m.o)("Avatar",e),[a,n]=(0,S.useState)(!1),{src:o,srcSet:l,name:i,showBorder:d,borderRadius:g="full",onError:u,onLoad:h,getInitials:p=R,icon:b=(0,s.jsx)(A,{}),iconLabel:x=" avatar",loading:y,children:v,borderColor:E,ignoreFallback:j,crossOrigin:w,referrerPolicy:B,...L}=(0,c.M)(e),z={borderRadius:g,borderWidth:d?"2px":void 0,...I,...r.container};return E&&(z.borderColor=E),(0,s.jsx)(f.B.span,{ref:t,...L,className:(0,k.cx)("chakra-avatar",e.className),"data-loaded":(0,_.s)(a),__css:z,children:(0,s.jsxs)(N,{value:r,children:[(0,s.jsx)(T,{src:o,srcSet:l,loading:y,onLoad:C(h,(()=>{n(!0)})),onError:u,getInitials:p,name:i,borderRadius:g,icon:b,iconLabel:x,ignoreFallback:j,crossOrigin:w,referrerPolicy:B}),v]})})}));z.displayName="Avatar";var U=r(9290),F=r(7286),O=r(4810);const W=()=>{const e=(0,a.dU)("linear(to-b, blue.50, white)","linear(to-b, gray.900, gray.800)"),t=(0,a.dU)("blue.600","blue.300"),r=(0,a.dU)("gray.700","gray.100");return S.createElement(n.a,{bg:(0,a.dU)("blue.50","gray.900"),bgGradient:e,pt:16,pb:10,borderBottomWidth:"1px",borderBottomColor:(0,a.dU)("gray.200","gray.700")},S.createElement(o.B,{spacing:6,textAlign:"center"},S.createElement(l.D,{as:"h1",fontSize:{base:"3xl",md:"4xl",lg:"5xl"},fontWeight:"bold",color:t,lineHeight:"1.2"},"Blog"),S.createElement(i.E,{fontSize:{base:"md",md:"lg"},color:r,maxW:"3xl",mx:"auto",lineHeight:"1.8"},"We love to share our story and what we found along the way.")))},H=e=>{let{title:t,excerpt:r,date:o,author:s,slug:c,tags:d=[],isFeatured:g=!1}=e;const u=(0,a.dU)("white","gray.800"),m=(0,a.dU)("gray.200","gray.700"),f=(0,a.dU)("gray.700","gray.300"),h=(0,a.dU)("blue.50","blue.900");return S.createElement(n.a,{as:O.N_,to:c,display:"block",_hover:{textDecoration:"none"}},S.createElement(n.a,{p:6,h:"full",bg:u,borderWidth:"1px",borderColor:m,borderRadius:"lg",shadow:"md",transition:"all 0.3s",position:"relative",_hover:{transform:"translateY(-4px)",shadow:"lg"}},g&&S.createElement(b,{position:"absolute",top:3,right:3,colorScheme:"blue",size:"sm"},"Featured"),S.createElement(y.T,{align:"start",spacing:4},S.createElement(l.D,{as:"h3",fontSize:"xl",lineHeight:"tight"},t),S.createElement(i.E,{color:f,noOfLines:3},r),S.createElement(v,{spacing:2,mt:2,wrap:"wrap"},d.map((e=>S.createElement(b,{key:e,size:"sm",bg:h,my:1},e)))),S.createElement(E.s,{justify:"space-between",align:"center",w:"full",mt:2},S.createElement(v,null,S.createElement(z,{name:s.name,src:s.avatar,size:"xs"}),S.createElement(i.E,{fontSize:"sm",fontWeight:"medium"},s.name)),S.createElement(i.E,{fontSize:"sm",color:(0,a.dU)("gray.500","gray.400")},o)))))};var M=()=>{const e=(0,O.GR)("2256721612").allMarkdownRemark.nodes.map((e=>{var t;return{title:e.frontmatter.title,excerpt:e.frontmatter.description||e.excerpt,date:new Date(e.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),author:{name:e.frontmatter.author||"Gatsby Team"},slug:e.fields.slug,tags:e.frontmatter.tags||[],isFeatured:(null===(t=e.frontmatter.tags)||void 0===t?void 0:t.includes("Tutorial"))||!1}}));return S.createElement(S.Fragment,null,S.createElement(W,null),S.createElement(U.m,{maxW:"6xl",py:12},S.createElement(y.T,{spacing:10,align:"stretch"},0===e.length?S.createElement(i.E,{textAlign:"center",fontSize:"lg"},"No blog posts found. Check back soon!"):S.createElement(F.r,{columns:{base:1,md:2},spacing:8},e.map((e=>S.createElement(H,Object.assign({key:e.slug},e))))))))};const D=()=>S.createElement("title",null,"Visa Cheat Sheet | Find the Right Visa for Your Trip")},5353:function(e,t,r){r.d(t,{D:function(){return c}});var a=r(4848),n=r(7692),o=r(5270),l=r(2600),i=r(7182),s=r(816);const c=(0,l.R)((function(e,t){const r=(0,i.V)("Heading",e),{className:l,...c}=(0,n.M)(e);return(0,a.jsx)(s.B.h2,{ref:t,className:(0,o.cx)("chakra-heading",e.className),...c,__css:r})}));c.displayName="Heading"}}]);
//# sourceMappingURL=component---src-pages-blog-index-tsx-c412560a6d0ee246fa8c.js.map