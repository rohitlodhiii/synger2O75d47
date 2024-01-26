"use strict";
exports.id = 351;
exports.ids = [351];
exports.modules = {

/***/ 9351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ArtistCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8740);
/* harmony import */ var _redux_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6080);





function ArtistCard({ artist }) {
    if (!artist) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: "Loading artist details..."
    });
    const { data: artistData, isFetching: isFetchingArtistDetails } = (0,_redux_service__WEBPACK_IMPORTED_MODULE_4__/* .useGetArtistDetailsQuery */ .IA)(artist.id);
    if (isFetchingArtistDetails) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: "Loading artist details..."
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: {
            pathname: `/artist/${artistData?.data?.id}`,
            query: artistData?.data
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col w-1.2 h-1/3  animate-slideup rounded-lg cursor-pointer",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-full h-30 group",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        alt: "song_img",
                        src: artistData?.data?.image ? artistData?.data?.image[2].link : "/images.png",
                        className: "w-full rounded-full object-contain"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4 flex flex-col justify-center items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "font-semibold text-lg text-dark-1 truncate",
                        children: artistData?.data?.name
                    })
                })
            ]
        })
    });
}


/***/ })

};
;