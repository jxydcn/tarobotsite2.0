"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[537],{5567:function(e,t){t.Z={src:"/_next/static/media/bleed.9b1bbade.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzElEQVR42mMAAV1GJqaYxFg2BjA4xRXcPGtqcssETwYMkLZKcOqc+psTFk74n9s3fSdc3EpHqy41THFHZpJnTf+U2vdLVnf9r5oyYw5cgb2uwvYAZ/P/UfnF//PKqj9XTJj8P6Bhii9EtmwqI4iy1bGVi6jquBpR1f4/pKTpf1RZYxLcBOvw+FzvnLKWpLZJh5I7p/5PaJ5wKySvUgCuwMDLv8s1Kft9ctvklPimniveGQW/gMI8cAW2vpEsQIoLxLYMjIjT8/TfApMDAEpaSV88JstEAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},9335:function(e,t,s){s.d(t,{Z:function(){return n}});var l=s(7294);function n(e){let[t,s]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{let t=setTimeout(()=>{s(!1)},null!=e?e:800);return()=>clearTimeout(t)},[e]),t}},5600:function(e,t,s){s.d(t,{Z:function(){return n}});var l=s(7294);function n(){let[e,t]=(0,l.useState)({width:0,height:0});return(0,l.useEffect)(()=>{function e(){t({width:window.innerWidth,height:window.innerHeight})}return t({width:window.innerWidth,height:window.innerHeight}),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}},8849:function(e,t,s){var l=s(5893),n=s(4343),a=s(5675),i=s.n(a),r=s(5567);let o=()=>(0,l.jsx)("div",{className:"fixed flex flex-col inset-0 z-[200] bg-bleed-background-1000",children:(0,l.jsx)("div",{className:"m-auto",children:(0,l.jsx)(n.E.div,{initial:{opacity:0,y:300,scale:.6},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,scale:.6},transition:{type:"spring",damping:15,mass:.2,stiffness:70},className:"inline-block will-change-transform",children:(0,l.jsx)(i(),{priority:!0,src:r.Z,alt:"bleed logo",quality:100,className:"h-40 w-40 animate-pulse rio-freestyle"})})})});t.Z=o},6701:function(e,t,s){var l=s(5893),n=s(7294),a=s(5675),i=s.n(a),r=s(1664),o=s.n(r),c=s(4343),d=s(6010),m=s(1163),u=s(2926),x=s(6517),b=s(8400),h=s(5567),f=s(1526),p=s(5600);let g=e=>{let{links:t,menu:s,setMenu:a}=e,i=(0,m.useRouter)(),r=(0,n.useMemo)(()=>i.route,[i]);return(0,l.jsx)(c.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.3},className:"z-[500] fixed inset-0 bg-bleed-background-1000/90 px-4",children:(0,l.jsxs)(c.E.div,{initial:{opacity:0,y:100,scale:.7},animate:{opacity:1,y:0,scale:1},transition:{type:"spring",damping:10,mass:.2,stiffness:80},className:"z-[600] mt-24 w-full max-h-full p-6 bg-bleed-background-950 flex flex-col rounded-2xl shadow-2xl border border-bleed-background-850",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold",children:"Menu"}),(0,l.jsx)("button",{onClick:()=>a(!1),className:"transition duration-200 ease-linear text-neutral-400 hover:text-white",children:(0,l.jsx)(u.Z,{className:"h-7 w-7",strokeWidth:2})})]}),(0,l.jsxs)("div",{className:"flex flex-col flex-grow mt-6 overflow-auto gap-y-3",children:[t.map(e=>(0,l.jsx)(o(),{href:s?e.route:"",className:(0,d.Z)("font-semibold w-full block rounded-xl py-4 px-6",r===e.route?"text-bleed-blue-1 bg-bleed-background-800":"transition duration-200 ease-linear text-neutral-300 hover:text-white bg-bleed-background-900"),children:e.name},e.route)),(0,l.jsxs)(o(),{href:s?"https://discord.com/api/oauth2/authorize?client_id=593921296224747521&permissions=8&scope=bot%20applications.commands":"",rel:"noopener",target:"_blank",className:"flex items-center w-full px-6 py-4 font-semibold transition duration-200 ease-linear rounded-lg group text-neutral-300 hover:text-white bg-bleed-background-900",children:["Invite",(0,l.jsx)("span",{className:"inline-block ml-3 transition duration-200 ease-linear text-neutral-500 group-hover:text-bleed-blue-1",children:(0,l.jsx)(x.Z,{className:"w-4 h-4",strokeWidth:2})})]}),(0,l.jsxs)(o(),{href:s?"https://docs.bleed.bot/":"",rel:"noopener",target:"_blank",className:"flex items-center w-full px-6 py-4 font-semibold transition duration-200 ease-linear rounded-lg group text-neutral-300 hover:text-white bg-bleed-background-900",children:["Documentation",(0,l.jsx)("span",{className:"inline-block ml-3 transition duration-200 ease-linear text-neutral-500 group-hover:text-bleed-blue-1",children:(0,l.jsx)(x.Z,{className:"w-4 h-4",strokeWidth:2})})]})]})]})})},w=()=>{let e=[{name:"Commands",route:"/commands"},{name:"Status",route:"/status"},{name:"FAQ",route:"/faq"}],t=(0,m.useRouter)(),s=(0,p.Z)(),[a,r]=(0,n.useState)(!1);(0,n.useEffect)(()=>{a?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[a]),(0,n.useEffect)(()=>{s.width>640&&r(!1)},[s]);let c=(0,n.useMemo)(()=>t.route,[t]);return(0,l.jsxs)("div",{className:"fixed top-0 inset-x-0 z-[100] px-6 py-5 sm:py-0 border-b border-bleed-background-800 bg-bleed-background-1000/95",children:[(0,l.jsxs)("nav",{className:"flex items-center justify-between w-full max-w-5xl mx-auto",children:[(0,l.jsx)("div",{className:"flex-grow basis-0",children:(0,l.jsxs)(o(),{href:"/",className:"inline-flex items-center",children:[(0,l.jsx)(i(),{priority:!0,src:h.Z,alt:"bleed logo",quality:100,className:"w-10 h-10 logo-shadow"}),(0,l.jsx)("p",{className:"text-3xl ml-3 sm:ml-4 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#caca90] via-white to-[#caca90]",children:"bleed"})]})}),(0,l.jsx)("div",{className:"items-center hidden sm:flex gap-x-10",children:e.map(e=>(0,l.jsx)(o(),{href:e.route,className:(0,d.Z)("font-semibold -mb-[1px] border-b-2 py-7",c===e.route?"text-bleed-blue-1 border-b-bleed-blue-2":"transition duration-200 ease-linear text-white border-transparent hover:border-bleed-background-500"),children:e.name},e.route))}),(0,l.jsxs)("div",{className:"flex items-center justify-end flex-grow basis-0 gap-x-5",children:[(0,l.jsx)("button",{onClick:()=>r(!0),className:"flex items-center transition duration-200 ease-linear sm:hidden text-neutral-400 hover:text-white",children:(0,l.jsx)(b.Z,{className:"inline-block w-6 h-6",strokeWidth:2,color:"currentColor"})}),(0,l.jsxs)(o(),{href:"https://discord.gg/bleed",rel:"noopener",target:"_blank",className:"flex items-center px-4 py-3 text-sm font-semibold transition duration-200 ease-linear bg-discord hover:ring-2 hover:ring-discord sm:px-5 rounded-xl",children:[(0,l.jsx)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"inline-block w-5 h-5 sm:-ml-1",fill:"#ffffff",children:(0,l.jsx)("path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"})}),(0,l.jsx)("span",{className:"hidden sm:inline-block ml-3.5",children:"Discord"})]})]})]}),(0,l.jsx)(f.M,{children:a&&(0,l.jsx)(g,{links:e,menu:a,setMenu:r})})]})};t.Z=w},2099:function(e,t,s){s.d(t,{Z:function(){return b}});var l=s(5893),n=s(1838),a=s(5675),i=s.n(a),r=s(1664),o=s.n(r),c=s(5567);let d=()=>(0,l.jsx)("footer",{className:"absolute bottom-0 w-full py-14 px-6 shadow-xl shadow-bleed-blue-1 border-t border-bleed-background-800 bg-bleed-background-950",children:(0,l.jsxs)("div",{className:"max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-10",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center sm:items-start",children:[(0,l.jsx)(i(),{src:c.Z,alt:"bleed logo",className:"h-20 w-20 logo-shadow",priority:!0,quality:100}),(0,l.jsx)("div",{className:"mt-4 sm:mt-0 flex-grow flex items-end",children:(0,l.jsxs)("p",{className:"text-xs text-neutral-300 text-center sm:text-left leading-5",children:["Copyright \xa9 2023 bleed.bot,"," ",(0,l.jsx)("span",{className:"block sm:inline-block",children:"All rights reserved."})]})})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center sm:items-start",children:[(0,l.jsx)("p",{className:"text-xl font-semibold text-white",children:"Bot"}),(0,l.jsxs)("div",{className:"mt-6 flex flex-col items-center sm:items-start gap-y-4",children:[(0,l.jsx)(o(),{href:"https://discord.com/api/oauth2/authorize?client_id=593921296224747521&permissions=8&scope=bot%20applications.commands",rel:"noopener",target:"_blank",className:"font-medium text-bleed-blue-1 transition duration-200 ease-linear hover:text-bleed-blue-2",children:"Invite"}),(0,l.jsx)(o(),{href:"https://docs.bleed.bot/",rel:"noopener",target:"_blank",className:"font-medium text-bleed-blue-1 transition duration-200 ease-linear hover:text-bleed-blue-2",children:"Documentation"}),(0,l.jsx)(o(),{href:"https://discord.gg/bleed",rel:"noopener",target:"_blank",className:"font-medium text-bleed-blue-1 transition duration-200 ease-linear hover:text-bleed-blue-2",children:"Support Server"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center sm:items-start",children:[(0,l.jsx)("p",{className:"text-xl font-semibold text-white",children:"Legal"}),(0,l.jsxs)("div",{className:"mt-6 flex flex-col items-center sm:items-start gap-y-4",children:[(0,l.jsx)(o(),{href:"/terms",className:"font-medium text-bleed-blue-1 transition duration-200 ease-linear hover:text-bleed-blue-2",children:"Terms of Service"}),(0,l.jsx)(o(),{href:"/privacy",className:"font-medium text-bleed-blue-1 transition duration-200 ease-linear hover:text-bleed-blue-2",children:"Privacy Policy"}),(0,l.jsx)(o(),{href:"/refunds",className:"font-medium text-bleed-blue-1 transition duration-200 ease-linear hover:text-bleed-blue-2",children:"Refund Policy"})]})]})]})});var m=s(6701),u=s(3073);let x=e=>{let{title:t,route:s,children:a}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{title:t,canonical:s?u.Z.canonical+"/".concat(s):u.Z.canonical}),(0,l.jsx)(m.Z,{}),(0,l.jsx)("div",{className:"p-6",children:(0,l.jsx)("div",{className:"max-w-5xl mx-auto w-full flex flex-col pt-28 pb-[40rem] sm:pb-[20rem]",children:a})}),(0,l.jsx)(d,{})]})};var b=x},9151:function(e,t,s){function l(e){let{src:t}=e;return t}s.r(t),s.d(t,{default:function(){return l}})}}]);