(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{2675:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/artist/[id]",function(){return s(3627)}])},2757:function(e,l,s){"use strict";s.d(l,{Z:function(){return n}});var t=s(5893);s(7294);var a=s(1664),i=s.n(a);function n(e){var l;let{album:s}=e;return(0,t.jsx)(i(),{href:{pathname:"/album/".concat(s.id),query:s},children:(0,t.jsxs)("div",{className:"flex flex-col w-1.2 h-1/3 p-1 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer",children:[(0,t.jsx)("div",{className:"relative w-full h-30 group",children:(0,t.jsx)("img",{alt:"song_img",src:s.image[2].link,className:"w-full h-full rounded-lg"})}),(0,t.jsxs)("div",{className:"mt-4 flex flex-col",children:[(0,t.jsx)("p",{className:"font-semibold text-lg text-dark-1 truncate",children:s.name}),(0,t.jsx)("p",{className:"text-sm truncate text-gray-300 mt-1",children:null==s?void 0:null===(l=s.artists)||void 0===l?void 0:l.map((e,l)=>(0,t.jsxs)(i(),{href:{pathname:"/artist/[id]",query:e},children:[e.name," ,"]},e.name+"hello"+l))})]})]})})}},8740:function(e,l,s){"use strict";var t=s(5893);s(7294),l.Z=e=>{let{title:l}=e;return(0,t.jsxs)("div",{className:"w-full flex justify-center items-center flex-col",children:[(0,t.jsx)("img",{src:"/loader.svg",alt:"loader",className:"w-32 h-32 object-contain"}),(0,t.jsx)("h1",{className:"font-bold text-2xl text-white mt-2",children:l||"Loading"})]})}},9434:function(e,l,s){"use strict";s.d(l,{Z:function(){return m}});var t=s(5893),a=s(7294),i=s(1664),n=s.n(i),r=s(1248),d=s(8740),c=s(9583),o=e=>{let{isPlaying:l,activeSong:s,song:a,handlePause:i,handlePlay:n}=e;return l&&(null==s?void 0:s.name)===a.name?(0,t.jsx)(c.x00,{size:35,className:"text-light-1",onClick:i}):(0,t.jsx)(c.Gzj,{size:35,className:"text-light-1",onClick:n})},u=s(2872),m=e=>{var l,s,i;let{song:c,isPlaying:m,activeSong:x,data:h,i:g}=e,f=(0,r.I0)();return c?(null==c||null===(l=c.primaryArtists)||void 0===l||l.split(","),(0,t.jsxs)("div",{className:"flex flex-col w-1.2 h-1/3 p-1 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer",children:[(0,t.jsxs)("div",{className:"relative w-full h-30 group",children:[(0,t.jsx)("div",{className:"absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ".concat((null==x?void 0:x.name)===(null==c?void 0:c.name)?"flex bg-black bg-opacity-70":"hidden"),children:(0,t.jsx)(o,{isPlaying:m,activeSong:x,song:c,handlePause:()=>{f((0,u.A7)(!1))},handlePlay:()=>{f((0,u.c_)({song:c,data:h,i:g})),f((0,u.A7)(!0))}})}),(0,t.jsx)("img",{alt:"song_img",src:null==c?void 0:null===(s=c.image[2])||void 0===s?void 0:s.link,className:"w-full h-full rounded-lg"})]}),(0,t.jsxs)("div",{className:"mt-4 flex flex-col",children:[(0,t.jsx)("p",{className:"font-semibold text-lg text-dark-1 truncate",children:(0,t.jsx)(n(),{href:{pathname:"/song/[id]",query:{id:null==c?void 0:c.id}},children:null==c?void 0:c.name})}),(0,t.jsx)("p",{className:"text-sm truncate text-gray-300 mt-1",children:null==c?void 0:null===(i=c.artists)||void 0===i?void 0:i.map(e=>(0,t.jsx)(a.Fragment,{children:(0,t.jsx)(n(),{href:{pathname:"/artist/[id]",query:e},children:(0,t.jsx)("a",{className:"text-blue-500",children:e.name})})},e.id))})]})]})):(0,t.jsx)(d.Z,{title:"Loading song details..."})}},3627:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return m}});var t=s(5893);s(7294);var a=s(1163),i=s(8740),n=s(1248),r=s(2585),d=s(5640),c=s(9434),o=s(2757);function u(e){var l,s;let{artistId:a}=e;if(!a)return(0,t.jsx)(i.Z,{title:"Loading artist details..."});let{data:u,isFetching:m}=(0,d.IA)(a),{data:x,isFetching:h}=(0,d.Cf)(a),{data:g,isFetching:f}=(0,d.nN)(a),{activeSong:v,isPlaying:j}=(0,n.v9)(e=>e.player)||{};if(m||h||f)return(0,t.jsx)(i.Z,{title:"Loading artist details..."});let p=(null==u?void 0:u.data)||{},N=(null==x?void 0:null===(l=x.data)||void 0===l?void 0:l.results)||[],b=(null==g?void 0:null===(s=g.data)||void 0===s?void 0:s.results)||[];return(0,t.jsxs)("div",{className:"relative w-full flex flex-wrap flex-col",children:[(0,t.jsx)("div",{className:"w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28"}),(0,t.jsxs)("div",{className:"absolute flex flex-col inset-0 items-center ",children:[(0,t.jsx)("img",{alt:p.name,src:p.image[2].link,className:"sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"}),(0,t.jsx)("div",{className:"ml-2",children:(0,t.jsx)("p",{className:"font-bold sm:text-3xl text-xl text-dark-1",children:p.name})}),(0,t.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,t.jsxs)("p",{className:"font-extralight sm:text-2xl text-sm text-dark-1",children:["Followers : ",null==p?void 0:p.followerCount]}),(0,t.jsxs)("p",{className:"font-extralight flex flex-row sm:text-2xl text-sm text-dark-1 ml-8",children:[(0,t.jsx)(r.TEy,{}),null==p?void 0:p.dominantLanguage]})]})]}),(0,t.jsx)("h1",{className:"text-3xl mt-14 mb-5 font-bold",children:"Top Songs"}),(0,t.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4",children:N&&N.map((e,l)=>(0,t.jsx)(c.Z,{song:e,isPlaying:j,activeSong:v,data:N,i:l}))}),(0,t.jsx)("h1",{className:"text-3xl mt-14 mb-5 font-bold",children:"Top Albums"}),(0,t.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4",children:b&&b.map((e,l)=>(0,t.jsx)(o.Z,{album:e}))})]})}function m(){let e=(0,a.useRouter)(),l=e.query.id;return(0,t.jsx)(u,{artistId:l})}}},function(e){e.O(0,[445,980,774,888,179],function(){return e(e.s=2675)}),_N_E=e.O()}]);