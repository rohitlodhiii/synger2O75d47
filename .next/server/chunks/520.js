"use strict";
exports.id = 520;
exports.ids = [520];
exports.modules = {

/***/ 520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ChartCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8740);




function ChartCard({ chart }) {
    if (!chart?.id) /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: "loading playlist"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: {
            pathname: `/chart/${chart?.id}`,
            query: chart
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mx-auto w-full flex-wrap bg-white rounded-lg overflow-hidden shadow-lg",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "w-full  object-contain",
                    src: chart.image[2].link,
                    alt: chart.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "p-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "truncate text-sm md:text-xl  font-semibold mb-2",
                        children: chart.name ? chart?.name : chart?.title
                    })
                })
            ]
        })
    });
}


/***/ })

};
;