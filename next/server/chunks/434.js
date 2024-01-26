"use strict";
exports.id = 434;
exports.ids = [434];
exports.modules = {

/***/ 8740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Loader = ({ title })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex justify-center items-center flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/loader.svg",
                alt: "loader",
                className: "w-32 h-32 object-contain"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "font-bold text-2xl text-white mt-2",
                children: title || "Loading"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 9434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_SongCard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/Loader.js
var Loader = __webpack_require__(8740);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/PlayPause.js



const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay })=>isPlaying && activeSong?.name === song.name ? /*#__PURE__*/ jsx_runtime.jsx(fa_.FaPauseCircle, {
        size: 35,
        className: "text-light-1",
        onClick: handlePause
    }) : /*#__PURE__*/ jsx_runtime.jsx(fa_.FaPlayCircle, {
        size: 35,
        className: "text-light-1",
        onClick: handlePlay
    });
/* harmony default export */ const components_PlayPause = (PlayPause);

// EXTERNAL MODULE: ./src/redux/playerSlice.js
var playerSlice = __webpack_require__(2872);
;// CONCATENATED MODULE: ./src/components/SongCard.js







const SongCard = ({ song, isPlaying, activeSong, data, i })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    // const songid = song?.id;
    if (!song) return /*#__PURE__*/ jsx_runtime.jsx(Loader/* default */.Z, {
        title: "Loading song details..."
    });
    const regex = /\d+/g;
    const artists = song?.primaryArtists?.split(",") || [];
    const handlePauseClick = ()=>{
        dispatch((0,playerSlice/* playPause */.A7)(false));
    };
    const handlePlayClick = ()=>{
        dispatch((0,playerSlice/* setActiveSong */.c_)({
            song,
            data,
            i
        }));
        dispatch((0,playerSlice/* playPause */.A7)(true));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col w-1.2 h-1/3 p-1 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative w-full h-30 group",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.name === song?.name ? "flex bg-black bg-opacity-70" : "hidden"}`,
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_PlayPause, {
                            isPlaying: isPlaying,
                            activeSong: activeSong,
                            song: song,
                            handlePause: handlePauseClick,
                            handlePlay: handlePlayClick
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        alt: "song_img",
                        src: song?.image[2]?.link,
                        className: "w-full h-full rounded-lg"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-4 flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "font-semibold text-lg text-dark-1 truncate",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: {
                                pathname: "/song/[id]",
                                query: {
                                    id: song?.id
                                }
                            },
                            children: song?.name
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-sm truncate text-gray-300 mt-1",
                        children: song?.artists?.map((artist)=>/*#__PURE__*/ jsx_runtime.jsx((external_react_default()).Fragment, {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: {
                                        pathname: "/artist/[id]",
                                        query: artist
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        className: "text-blue-500",
                                        children: artist.name
                                    })
                                })
                            }, artist.id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_SongCard = (SongCard);


/***/ })

};
;