"use strict";
exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 2754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Trending)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SongCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9434);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);




function Trending() {
    const { topCharts } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.player) || [];
    const { activeSong, isPlaying } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.player) || {};
    const songs = topCharts.songs;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container mx-auto py-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Trending Songs..."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2",
                children: songs?.map((song, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SongCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        song: song,
                        isPlaying: isPlaying,
                        activeSong: activeSong,
                        data: songs,
                        i: i
                    }, song.id + "hello"))
            })
        ]
    });
}


/***/ })

};
;