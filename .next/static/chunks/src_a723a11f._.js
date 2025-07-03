(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/UI/card/card.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "bottom": "card-module-scss-module__DN01vW__bottom",
  "cardNumber": "card-module-scss-module__DN01vW__cardNumber",
  "dscr": "card-module-scss-module__DN01vW__dscr",
  "icon": "card-module-scss-module__DN01vW__icon",
  "info": "card-module-scss-module__DN01vW__info",
  "isActive": "card-module-scss-module__DN01vW__isActive",
  "number": "card-module-scss-module__DN01vW__number",
  "top": "card-module-scss-module__DN01vW__top",
  "values": "card-module-scss-module__DN01vW__values",
  "wrapper": "card-module-scss-module__DN01vW__wrapper",
});
}}),
"[project]/src/utiles/getCardValues.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCardValues": (()=>getCardValues)
});
class CardInfo {
    pediod(period) {
        return period.slice(5, period.length).replace("-", "/");
    }
    balance(balance) {
        return Number(balance).toLocaleString("en-US");
    }
    holder(holder) {
        return holder.toUpperCase();
    }
    number(number) {
        return number.slice(0, 4) + " **** **** " + number.slice(number.length - 4, number.length);
    }
}
const getCardValues = new CardInfo();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/card/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/card/card.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getCardValues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getCardValues.ts [app-client] (ecmascript)");
;
;
;
;
const Card = ({ balance, holder, period, number, primery, cvc })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper, primery && [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isActive
        ]),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dscr,
                                        children: "Balance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UI/card/card.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].values,
                                        children: [
                                            "$ ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getCardValues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardValues"].balance(balance)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UI/card/card.tsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UI/card/card.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "40",
                                    height: "35",
                                    viewBox: "0 0 1475 1148",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M1284.68 1114.04V1148H190.323V1114.04H1284.68ZM1441.01 957.799V190.201C1441.01 103.914 1371.02 33.9645 1284.68 33.9645H190.323C103.98 33.9645 33.9862 103.914 33.9862 190.201V957.799C33.9862 1044.09 103.98 1114.04 190.323 1114.04V1148L185.411 1147.94C84.2007 1145.38 2.62375 1063.85 0.0597413 962.708L0 957.799V190.201C0 86.7972 82.5684 2.6634 185.411 0.0597032L190.323 0H1284.68L1289.59 0.0597032C1392.43 2.6634 1475 86.7972 1475 190.201V957.799L1474.94 962.708C1472.38 1063.85 1390.8 1145.38 1289.59 1147.94L1284.68 1148V1114.04C1371.02 1114.04 1441.01 1044.09 1441.01 957.799Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M1033.18 115.479V135.108V149.444H958.41V115.479H1033.18Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M1475 360.024V754.012H1066.6H938.018V360.024H1053.01H1475ZM972.005 720.047H1441.01V393.988H972.005V720.047Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M639.774 940.817C617.764 969.58 588.296 1010.52 565.445 1048.63C553.991 1067.74 544.71 1085.6 539.126 1100.58C536.338 1108.05 534.645 1114.35 533.948 1119.42C533.234 1124.6 533.712 1127.45 534.161 1128.7L502.153 1140.13C499.203 1131.87 499.149 1123.02 500.281 1114.79C501.429 1106.44 503.959 1097.61 507.277 1088.71C513.907 1070.93 524.38 1051.05 536.291 1031.18C543.596 1019 551.417 1006.72 559.391 994.723C576.594 968.835 594.503 944.23 609.452 924.585C610.227 923.567 610.993 922.562 611.751 921.572L639.774 940.817Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M885.625 915.39C891.88 921.814 898.812 929.67 906.046 938.561C919.333 954.892 933.635 974.717 946.618 995.582C950.912 1002.48 955.061 1009.49 958.981 1016.53C970.116 1036.53 979.744 1057.31 985.513 1076.73C991.128 1095.64 993.869 1115.78 988.128 1132.99L955.881 1122.25C958.297 1115 957.896 1103.11 952.934 1086.4C948.124 1070.21 939.736 1051.81 929.29 1033.05C908.357 995.469 880.505 958.834 861.264 939.072L885.625 915.39Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M564.171 149.444L563.385 116.411C560.751 116.106 558.131 115.831 555.492 115.632C552.804 115.428 550.095 115.303 547.329 115.303C522.705 115.303 499.42 121.863 479.346 133.064C504.289 144.523 531.047 149.087 552.589 149.58C556.65 149.673 560.527 149.621 564.171 149.444Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M652.535 254.734C652.535 312.884 605.365 360.024 547.177 360.024H564.171V392.963C633.113 384.586 686.521 325.893 686.521 254.734C686.521 183.304 632.707 124.436 563.385 116.411L564.171 149.444C560.527 149.621 556.65 149.673 552.589 149.58C608.261 152.395 652.535 198.397 652.535 254.734Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M547.177 393.988V360.024H455.98C480.42 381.184 512.302 393.988 547.177 393.988Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M547.177 360.024V393.988C552.93 393.988 558.601 393.64 564.171 392.963V360.024H547.177Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M445.272 27.7023C444.151 63.5657 461.906 85.098 486.009 98.4042C505.282 109.044 528.239 114.027 547.329 115.303C522.705 115.303 499.42 121.863 479.346 133.064C476.04 131.545 472.776 129.905 469.573 128.136C436.665 109.969 409.702 77.7265 411.299 26.6409L445.272 27.7023ZM547.329 115.303C550.095 115.303 552.804 115.428 555.492 115.632C552.871 115.599 550.142 115.491 547.329 115.303Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M547.329 115.303C522.705 115.303 499.42 121.863 479.346 133.064C504.289 144.523 531.047 149.087 552.589 149.58C556.65 149.673 560.527 149.621 564.171 149.444L563.385 116.411C560.751 116.106 558.131 115.831 555.492 115.632C552.804 115.428 550.095 115.303 547.329 115.303ZM564.171 754.012V725.116C552.273 721.813 539.736 720.047 526.786 720.047C491.911 720.047 460.028 732.851 435.588 754.012H564.171Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0 360.024V754.012H435.588C460.028 732.851 491.911 720.047 526.786 720.047H33.9862V393.988H530.184V720.047H526.786C539.736 720.047 552.273 721.813 564.171 725.116V392.963C558.601 393.64 552.93 393.988 547.177 393.988C512.302 393.988 480.42 381.184 455.98 360.024H0Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M632.143 859.302C632.143 801.152 584.973 754.012 526.786 754.012H435.588C460.028 732.851 491.911 720.047 526.786 720.047C539.736 720.047 552.273 721.813 564.171 725.116C622.973 741.443 666.129 795.336 666.129 859.302C666.129 924.989 620.619 980.053 559.391 994.723C576.594 968.835 594.503 944.23 609.452 924.585C623.66 906.641 632.143 883.961 632.143 859.302Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M975.403 754.012C917.216 754.012 870.046 801.152 870.046 859.302C870.046 890.908 883.981 919.261 906.046 938.561C919.333 954.892 933.635 974.717 946.618 995.582C883.472 982.328 836.06 926.348 836.06 859.302C836.06 782.394 898.446 720.047 975.403 720.047C1010.28 720.047 1042.16 732.851 1066.6 754.012H975.403Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M856.452 254.734C856.452 196.584 903.622 149.444 961.809 149.444H1033.18V135.108C1012.3 122.642 987.894 115.479 961.809 115.479C884.852 115.479 822.465 177.826 822.465 254.734C822.465 331.642 884.852 393.988 961.809 393.988C996.684 393.988 1028.57 381.184 1053.01 360.024H961.809C903.622 360.024 856.452 312.884 856.452 254.734Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/card/card.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/UI/card/card.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/UI/card/card.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UI/card/card.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottom,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dscr,
                                        children: "CARD HOLDER"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UI/card/card.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].values,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getCardValues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardValues"].holder(holder)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UI/card/card.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UI/card/card.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dscr,
                                        children: "VALID THRU"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UI/card/card.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].values,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getCardValues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardValues"].pediod(period)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UI/card/card.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UI/card/card.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UI/card/card.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/card/card.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].number,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardNumber,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getCardValues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardValues"].number(number)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/card/card.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "44",
                        height: "30",
                        viewBox: "0 0 44 30",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "15",
                                cy: "15",
                                r: "15",
                                fill: "white",
                                fillOpacity: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UI/card/card.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "29",
                                cy: "15",
                                r: "15",
                                fill: "white",
                                fillOpacity: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UI/card/card.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UI/card/card.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/card/card.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/card/card.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/cardBlock/cardBlock.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "cards": "cardBlock-module-scss-module__YQ7LJa__cards",
  "header": "cardBlock-module-scss-module__YQ7LJa__header",
  "noCard": "cardBlock-module-scss-module__YQ7LJa__noCard",
  "oneCard": "cardBlock-module-scss-module__YQ7LJa__oneCard",
  "wrapper": "cardBlock-module-scss-module__YQ7LJa__wrapper",
});
}}),
"[project]/src/components/UI/NotEnougtData/NotEnougtData.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "text": "NotEnougtData-module-scss-module__m60WCq__text",
  "wrapper": "NotEnougtData-module-scss-module__m60WCq__wrapper",
});
}}),
"[project]/src/components/UI/NotEnougtData/NotEnougtData.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NotEnougtData": (()=>NotEnougtData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/NotEnougtData/NotEnougtData.module.scss.module.css [app-client] (css module)");
;
;
const NotEnougtData = ({ text = 'Not enougt data to display statistics' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
            children: text
        }, void 0, false, {
            fileName: "[project]/src/components/UI/NotEnougtData/NotEnougtData.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/UI/NotEnougtData/NotEnougtData.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = NotEnougtData;
var _c;
__turbopack_context__.k.register(_c, "NotEnougtData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/cardBlock/cardBlock.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/card/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$cardBlock$2f$cardBlock$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/cardBlock/cardBlock.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUser.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/NotEnougtData/NotEnougtData.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const CardBlock = ({ buttomText, flug = false })=>{
    _s();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const cards = data?.cards;
    const fullName = data?.about?.fullname || '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$cardBlock$2f$cardBlock$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$cardBlock$2f$cardBlock$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "My Cards"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/cardBlock/cardBlock.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSTANTS"].credit,
                        children: buttomText
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/cardBlock/cardBlock.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/cardBlock/cardBlock.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$cardBlock$2f$cardBlock$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cards,
                children: [
                    cards?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$cardBlock$2f$cardBlock$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noCard,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotEnougtData"], {
                            text: "You do not have any card"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UI/cardBlock/cardBlock.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/cardBlock/cardBlock.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    !flug && cards?.length > 1 && cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            balance: card.balance,
                            holder: fullName,
                            cvc: card.cvc,
                            period: card.period,
                            number: card.number,
                            primery: index === 0
                        }, card.id, false, {
                            fileName: "[project]/src/components/UI/cardBlock/cardBlock.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)),
                    !flug && cards?.length === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                balance: cards[0].balance,
                                holder: fullName,
                                period: cards[0].period,
                                cvc: cards[0].cvc,
                                number: cards[0].number,
                                primery: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/UI/cardBlock/cardBlock.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$cardBlock$2f$cardBlock$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].oneCard,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotEnougtData"], {
                                    text: "Create one more card"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UI/cardBlock/cardBlock.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/UI/cardBlock/cardBlock.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    cards.length > 0 && flug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$card$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        balance: cards?.[0]?.balance || '',
                        holder: fullName,
                        period: cards?.[0]?.period || '',
                        cvc: cards?.[0]?.cvc,
                        number: cards?.[0]?.number || '',
                        primery: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/cardBlock/cardBlock.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/cardBlock/cardBlock.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/cardBlock/cardBlock.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
_s(CardBlock, "j+B6bS0KwwAshe4Iinmk0NND7UI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = CardBlock;
const __TURBOPACK__default__export__ = CardBlock;
var _c;
__turbopack_context__.k.register(_c, "CardBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/screens/home/HomePage.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "card": "HomePage-module-scss-module__bZfz1q__card",
  "card_fild": "HomePage-module-scss-module__bZfz1q__card_fild",
  "wrapper": "HomePage-module-scss-module__bZfz1q__wrapper",
});
}}),
"[project]/src/components/UI/RecentTransaction/RecentTransaction.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "card": "RecentTransaction-module-scss-module__mRszra__card",
  "wrapper": "RecentTransaction-module-scss-module__mRszra__wrapper",
});
}}),
"[project]/src/utiles/getFormatDate.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getFormatDate": (()=>getFormatDate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
;
const getFormatDate = (date, format)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).format(format);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TransantionCategory": (()=>TransantionCategory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad.js [app-client] (ecmascript) <export default as Gamepad>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$basket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBasket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-basket.js [app-client] (ecmascript) <export default as ShoppingBasket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-dollar-sign.js [app-client] (ecmascript) <export default as BadgeDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book.js [app-client] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeDollarSignIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-dollar-sign.js [app-client] (ecmascript) <export default as BadgeDollarSignIcon>");
;
;
const TransantionCategory = {
    Products: {
        color: "#E7FFD9",
        iconColor: "#A8D86D",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$basket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBasket$3e$__["ShoppingBasket"], {
            style: {
                stroke: "#A8D86D",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 25,
            columnNumber: 11
        }, this)
    },
    Transport: {
        color: "#D9E6F2",
        iconColor: "#5A91C5",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
            style: {
                stroke: "#5A91C5",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 30,
            columnNumber: 11
        }, this)
    },
    Utilities: {
        // комуналка
        color: "#FFF9D9",
        iconColor: "#FFBB38",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
            style: {
                stroke: "#FFBB38",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 36,
            columnNumber: 11
        }, this)
    },
    CommunicationsAndInternet: {
        color: "#D9F2E6",
        iconColor: "#00B894",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
            style: {
                stroke: "#00B894",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 41,
            columnNumber: 11
        }, this)
    },
    Entertainment: {
        // развлечения
        color: "#F2D9F2",
        iconColor: "#C56FC5",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad$3e$__["Gamepad"], {
            style: {
                stroke: "#C56FC5",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 47,
            columnNumber: 11
        }, this)
    },
    Health: {
        color: "#FFE1E1",
        iconColor: "#FF6B6B",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
            style: {
                stroke: "#FF6B6B",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 52,
            columnNumber: 11
        }, this)
    },
    Education: {
        color: "#D9F0FF",
        iconColor: "#00A8FF",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"], {
            style: {
                stroke: "#00A8FF",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 57,
            columnNumber: 11
        }, this)
    },
    Shopping: {
        color: "#E7E1FF",
        iconColor: "#8868FF",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
            style: {
                stroke: "#8868FF",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 62,
            columnNumber: 11
        }, this)
    },
    Travel: {
        color: "#F4EAD9",
        iconColor: "#D1A26D",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
            style: {
                stroke: "#D1A26D",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 67,
            columnNumber: 11
        }, this)
    },
    Subscriptions: {
        color: "#E0E9FF",
        iconColor: "#5B82E6",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
            style: {
                stroke: "#5B82E6",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 72,
            columnNumber: 11
        }, this)
    },
    Gifts: {
        color: "#FFD9C7",
        iconColor: "#FF7855",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
            style: {
                stroke: "#FF7855",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 77,
            columnNumber: 11
        }, this)
    },
    Income: {
        color: "#D9FFD9",
        iconColor: "#37B24D",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            style: {
                stroke: "#37B24D",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 82,
            columnNumber: 11
        }, this)
    },
    BonusesAndCashback: {
        color: "#D9F2FF",
        iconColor: "#4DA3D9",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeDollarSign$3e$__["BadgeDollarSign"], {
            style: {
                stroke: "#4DA3D9",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 87,
            columnNumber: 11
        }, this)
    },
    Investments: {
        color: "#FFF5D9",
        iconColor: "#FFBB38",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"], {
            style: {
                stroke: "#FFBB38",
                fill: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 92,
            columnNumber: 11
        }, this)
    },
    Other: {
        color: "#F0F0F0",
        iconColor: "#BDBDBD",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
            style: {
                stroke: "#BDBDBD",
                fill: "none",
                margin: "0 auto"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    },
    Send: {
        color: "#F8D3E0",
        iconColor: "#D48EB4",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeDollarSignIcon$3e$__["BadgeDollarSignIcon"], {
            style: {
                stroke: "#D48EB4",
                fill: "none",
                margin: "0 auto"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this)
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "icon": "TransactionItem-module-scss-module__3j9oLW__icon",
  "info": "TransactionItem-module-scss-module__3j9oLW__info",
  "main_info": "TransactionItem-module-scss-module__3j9oLW__main_info",
  "wrapper": "TransactionItem-module-scss-module__3j9oLW__wrapper",
});
}}),
"[project]/src/types/Amount.type.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "typeCategory": (()=>typeCategory)
});
const typeCategory = {
    incoming: {
        color: "#41D4A8",
        mark: "+"
    },
    outgoing: {
        color: "#FF4B4A",
        mark: "-"
    },
    cancelled: {
        color: "#FF4B4A",
        mark: ""
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getFormatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getFormatDate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$TransactionItem$2f$TransactionItem$2e$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.data.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$TransactionItem$2f$TransactionItem$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getCardValues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getCardValues.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Amount$2e$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/Amount.type.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const TransactionItem = ({ title, date, type, category, amount, flug })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$TransactionItem$2f$TransactionItem$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$TransactionItem$2f$TransactionItem$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                style: category !== undefined ? {
                    background: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$TransactionItem$2f$TransactionItem$2e$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransantionCategory"][category].color}`
                } : {},
                children: category !== undefined && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$TransactionItem$2f$TransactionItem$2e$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransantionCategory"][category].icon
            }, void 0, false, {
                fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$TransactionItem$2f$TransactionItem$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        style: type === "cancelled" ? {
                            color: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Amount$2e$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typeCategory"][type].color}`
                        } : {
                            color: "var(--title)"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: type === "cancelled" ? {
                            color: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Amount$2e$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typeCategory"][type].color}`
                        } : {
                            color: "var(--text-color)"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getFormatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFormatDate"])(date, "D MMMM HH:mm")
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            flug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$TransactionItem$2f$TransactionItem$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main_info,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: type === "cancelled" ? {
                            color: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Amount$2e$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typeCategory"][type].color}`
                        } : {
                            color: "var(--text-color)"
                        },
                        children: category
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: type === "cancelled" ? {
                            color: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Amount$2e$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typeCategory"][type].color}`
                        } : {
                            color: "var(--text-color)"
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getCardValues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardValues"].number("1111222233334444").slice(0, 8)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: type === "cancelled" ? {
                            color: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Amount$2e$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typeCategory"][type].color}`
                        } : {
                            color: "var(--text-color)"
                        },
                        children: "Completed"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Amount$2e$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typeCategory"][type].color}`
                },
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Amount$2e$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typeCategory"][type].mark,
                    "$",
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getCardValues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardValues"].balance(amount.toString())
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
_c = TransactionItem;
const __TURBOPACK__default__export__ = TransactionItem;
var _c;
__turbopack_context__.k.register(_c, "TransactionItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utiles/getArray.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getArray": (()=>getArray)
});
const qs = __turbopack_context__.r("[project]/node_modules/qs/lib/index.js [app-client] (ecmascript)");
const getArray = (fild, options, arr)=>{
    const query = qs.stringify({
        filters: {
            [fild]: {
                [options]: {
                    $in: arr
                }
            }
        }
    }, {
        encodeValuesOnly: true
    });
    return query;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/service/transaction.service.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "transactionsService": (()=>transactionsService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getArray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getArray.ts [app-client] (ecmascript)");
;
class Transactions {
    URL = 'http://localhost:1337/api/transactions';
    async get(numbers, limit) {
        const filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getArray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArray"])('card', 'number', numbers);
        try {
            const result = await fetch(this.URL + `?${filter}&pagination[limit]=${limit}&sort=createdAt:desc`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (result.ok) {
                return result.json();
            } else {
                const errorMessage = result.text();
                throw new Error('ошибка запроса ' + errorMessage);
            }
        } catch (error) {
            console.log(error, ' - ошибка запроса транзакции');
            throw error;
        }
    }
    async getByDate(numbers, date) {
        const filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getArray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArray"])('card', 'number', numbers);
        try {
            const result = await fetch(this.URL + `?${filter}&[createdAt][$gte]=${date}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (result.ok) {
                return result.json();
            } else {
                const errorMessage = result.text();
                throw new Error('ошибка запроса ' + errorMessage);
            }
        } catch (error) {
            console.log(error, ' - ошибка запроса транзакции');
            throw error;
        }
    }
    async getAll(numbers, page, filter) {
        const help = 'createdAt:desc';
        const filterString = filter !== '' ? `&filters[type]=${filter}` : '';
        const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getArray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArray"])('card', 'number', numbers);
        try {
            const result = await fetch(this.URL + `?populate=*&${cards}${filterString}&pagination[page]=${page}&pagination[pageSize]=5&sort=${help}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            // checkResponse(result)
            if (result.ok) {
                return result.json();
            } else {
                const errorMessage = result.text();
                throw new Error('ошибка запроса ' + errorMessage);
            }
        } catch (error) {
            console.log(error, ' - ошибка запроса транзакции');
            throw error;
        }
    }
    post = async (formData)=>{
        const data = {
            title: formData.title,
            date: formData.date,
            type: formData.type,
            category: formData.category,
            amount: formData.amount,
            card: formData.id
        };
        try {
            const result = await fetch(this.URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    data: data
                })
            });
            if (result.ok) {
                return result.json();
            } else {
                const errorMessage = result.text();
                throw new Error('ошибка запроса ' + errorMessage);
            }
        } catch (error) {
            console.log(error, ' - ошибка запроса транзакции');
            throw error;
        }
    };
}
const transactionsService = new Transactions();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useTransactions.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTransactions": (()=>useTransactions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$transaction$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/service/transaction.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useTransactions = (user, limit)=>{
    _s();
    const result = [];
    user?.cards?.map((card)=>result.push(card.number));
    console.log(!!user && result.length > 0, 'useTrans');
    const { data, isLoading, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'transactions',
            limit
        ],
        queryFn: {
            "useTransactions.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$transaction$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsService"].get(result, limit)
        }["useTransactions.useQuery"],
        enabled: result.length > 0,
        select: {
            "useTransactions.useQuery": (data)=>data.data
        }["useTransactions.useQuery"]
    });
    return {
        data,
        isLoading,
        isSuccess
    };
};
_s(useTransactions, "u3NwUtvZkyl03u4wNWTUHfEOiSQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/loayout/CardWrapper/CardWrapper.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "wrapper": "CardWrapper-module-scss-module__tpMZxq__wrapper",
});
}}),
"[project]/src/components/loayout/CardWrapper/CardWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CardWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loayout$2f$CardWrapper$2f$CardWrapper$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/loayout/CardWrapper/CardWrapper.module.scss.module.css [app-client] (css module)");
;
;
;
function CardWrapper({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loayout$2f$CardWrapper$2f$CardWrapper$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/loayout/CardWrapper/CardWrapper.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c = CardWrapper;
var _c;
__turbopack_context__.k.register(_c, "CardWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Loader/Loader.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "loader": "Loader-module-scss-module__ae0pTq__loader",
  "spin": "Loader-module-scss-module__ae0pTq__spin",
});
}}),
"[project]/src/components/UI/Loader/loader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Loader": (()=>Loader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideLoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as LucideLoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/Loader/Loader.module.scss.module.css [app-client] (css module)");
;
;
;
const Loader = ({ color = '#718ebf' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loader,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideLoaderCircle$3e$__["LucideLoaderCircle"], {
            style: {
                fill: 'none',
                stroke: `${color}`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UI/Loader/loader.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/UI/Loader/loader.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/RecentTransaction/RecentTransaction.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$RecentTransaction$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/RecentTransaction/RecentTransaction.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$TransactionItem$2f$TransactionItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/RecentTransaction/TransactionItem/TransactionItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTransactions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loayout$2f$CardWrapper$2f$CardWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/loayout/CardWrapper/CardWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/NotEnougtData/NotEnougtData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Loader$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Loader/loader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const RecentTransaction = ({ title = 'Recent Transaction', className, flug = false })=>{
    _s();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])().getQueryData([
        'user'
    ]);
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactions"])(user, 3);
    console.log(data, 'RT');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$RecentTransaction$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/UI/RecentTransaction/RecentTransaction.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loayout$2f$CardWrapper$2f$CardWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$RecentTransaction$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                children: [
                    !isLoading && data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: data.map((trans)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$TransactionItem$2f$TransactionItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: trans.title,
                                date: trans.date.toString(),
                                type: trans.type,
                                category: trans.category,
                                amount: trans.amount,
                                flug: flug
                            }, trans.id, false, {
                                fileName: "[project]/src/components/UI/RecentTransaction/RecentTransaction.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this))
                    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotEnougtData"], {}, void 0, false, {
                        fileName: "[project]/src/components/UI/RecentTransaction/RecentTransaction.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    isLoading ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Loader$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                        color: "var(--text-color)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/RecentTransaction/RecentTransaction.tsx",
                        lineNumber: 47,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/RecentTransaction/RecentTransaction.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/RecentTransaction/RecentTransaction.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_s(RecentTransaction, "sOdrBHp3H7VRt1ikspG9dKjXMeE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactions"]
    ];
});
_c = RecentTransaction;
const __TURBOPACK__default__export__ = RecentTransaction;
var _c;
__turbopack_context__.k.register(_c, "RecentTransaction");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Contacts/ContactItem/contactItem.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "isActive": "contactItem-module-scss-module__kXDFFW__isActive",
  "isFirst": "contactItem-module-scss-module__kXDFFW__isFirst",
  "name": "contactItem-module-scss-module__kXDFFW__name",
  "role": "contactItem-module-scss-module__kXDFFW__role",
  "wrapper": "contactItem-module-scss-module__kXDFFW__wrapper",
});
}}),
"[project]/src/store/useIsActiveContact.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIsActiveContact": (()=>useIsActiveContact)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useIsActiveContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        id: 0,
        setId: (id)=>set((state)=>({
                    id: state.id = id
                }))
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Contacts/ContactItem/contactItem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$ContactItem$2f$contactItem$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/Contacts/ContactItem/contactItem.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getAvatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getAvatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useIsActiveContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useIsActiveContact.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const ContactItem = ({ avatar, name, role, isFirst, goBack, choose, idContact, isImActive })=>{
    _s();
    const { id, setId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useIsActiveContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsActiveContact"])();
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isImActive);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactItem.useEffect": ()=>{
            setIsActive(idContact === id);
        }
    }["ContactItem.useEffect"], [
        id
    ]);
    const hendelClick = (name, idContact)=>{
        setIsActive(!isActive);
        idContact && setId(idContact);
        goBack && goBack();
        choose && name && idContact !== undefined && choose(name, idContact);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: ()=>hendelClick(name, idContact),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$ContactItem$2f$contactItem$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper, isFirst && [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$ContactItem$2f$contactItem$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isFirst
        ], isActive && [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$ContactItem$2f$contactItem$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isActive
        ]),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: avatar ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getAvatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvaterUrl"])(avatar) : '/noAvatar.svg',
                width: 70,
                height: 70,
                alt: "avatar",
                priority: true,
                draggable: false
            }, void 0, false, {
                fileName: "[project]/src/components/UI/Contacts/ContactItem/contactItem.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$ContactItem$2f$contactItem$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/Contacts/ContactItem/contactItem.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$ContactItem$2f$contactItem$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].role,
                        children: role
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/Contacts/ContactItem/contactItem.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/Contacts/ContactItem/contactItem.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/Contacts/ContactItem/contactItem.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
_s(ContactItem, "s3miOXZcoiOx2jOBYgHT5pDdxMM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useIsActiveContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsActiveContact"]
    ];
});
_c = ContactItem;
const __TURBOPACK__default__export__ = ContactItem;
var _c;
__turbopack_context__.k.register(_c, "ContactItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Contacts/Contacts.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "card": "Contacts-module-scss-module__oQSaHq__card",
  "contacts": "Contacts-module-scss-module__oQSaHq__contacts",
  "disabled": "Contacts-module-scss-module__oQSaHq__disabled",
  "input": "Contacts-module-scss-module__oQSaHq__input",
  "isError": "Contacts-module-scss-module__oQSaHq__isError",
  "wrapper": "Contacts-module-scss-module__oQSaHq__wrapper",
});
}}),
"[project]/src/service/avatar.service.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AvatarService": (()=>AvatarService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/constants.ts [app-client] (ecmascript)");
;
class Avatar {
    URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSTANTS"].API + `/`;
    post = async (FormData)=>{
        try {
            const response = await fetch(this.URL + 'upload', {
                method: 'POST',
                body: FormData,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.ok) {
                const responseJSON = await response.json();
                const avatarId = responseJSON[0].id;
                return avatarId;
            } else {
                const errorMessage = await response.text();
                throw new Error('ошибка запроса ' + errorMessage);
            }
        } catch (error) {
            throw Error;
        }
    };
}
const AvatarService = new Avatar();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/service/contacts.service.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "contactService": (()=>contactService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$avatar$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/service/avatar.service.ts [app-client] (ecmascript)");
;
class Contacts {
    URL = ("TURBOPACK compile-time value", "http://localhost:1337/api") + `/contacts`;
    async get() {
        const id = localStorage.getItem('User_id');
        if (!id) return;
        try {
            const response = await fetch(this.URL + `?filters[user][id][$eq]=${id}&populate=*`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.ok) {
                return await response.json();
            } else {
                const errorMessage = await response.text();
                throw new Error('ошибка запроса ' + errorMessage);
            }
        } catch (error) {
            throw Error;
        }
    }
    addContact = async (contact)=>{
        const avatarId = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$avatar$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarService"].post(contact.formData);
        const body = {
            data: {
                avatar: avatarId,
                name: contact.name,
                role: contact.role,
                user: localStorage.getItem('User_id')
            }
        };
        try {
            const response = await fetch(this.URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error('ошибка запроса ' + errorMessage);
            }
        } catch (error) {
            throw Error;
        }
    };
}
const contactService = new Contacts();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useContacts.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useContacts": (()=>useContacts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$contacts$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/service/contacts.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useContacts = ()=>{
    _s();
    const { data, isLoading, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "contacts"
        ],
        queryFn: {
            "useContacts.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$contacts$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactService"].get()
        }["useContacts.useQuery"],
        select: {
            "useContacts.useQuery": (data)=>data.data
        }["useContacts.useQuery"]
    });
    return {
        data,
        isLoading,
        isSuccess
    };
};
_s(useContacts, "u3NwUtvZkyl03u4wNWTUHfEOiSQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/fild/fild.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "avatar": "fild-module-scss-module__u8qaRG__avatar",
  "error": "fild-module-scss-module__u8qaRG__error",
  "input": "fild-module-scss-module__u8qaRG__input",
  "isError": "fild-module-scss-module__u8qaRG__isError",
  "selector": "fild-module-scss-module__u8qaRG__selector",
  "title": "fild-module-scss-module__u8qaRG__title",
});
}}),
"[project]/src/components/UI/fild/fild.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/fild/fild.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
;
const Fild = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ title, error, type = 'text', ...inputProps }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper, !!error && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error),
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/UI/fild/fild.tsx",
                lineNumber: 13,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: type,
                    ref: ref,
                    ...inputProps
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/fild/fild.tsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/fild/fild.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/fild/fild.tsx",
        lineNumber: 12,
        columnNumber: 7
    }, this);
});
_c1 = Fild;
const __TURBOPACK__default__export__ = Fild;
var _c, _c1;
__turbopack_context__.k.register(_c, "Fild$forwardRef");
__turbopack_context__.k.register(_c1, "Fild");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Contacts/addContact/addContact.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "form": "addContact-module-scss-module__A5JyiG__form",
  "header": "addContact-module-scss-module__A5JyiG__header",
  "wrraper": "addContact-module-scss-module__A5JyiG__wrraper",
});
}}),
"[project]/src/components/UI/fild/fileFild.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/fild/fild.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const FileFild = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ title, error, placeholder, ...inputProps }, ref)=>{
    _s();
    const [FileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("avatar is't selectes");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper, !!error && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error),
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/UI/fild/fileFild.tsx",
                lineNumber: 15,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "file",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: placeholder
                        }, void 0, false, {
                            fileName: "[project]/src/components/UI/fild/fileFild.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            name: "avatar",
                            id: "file",
                            accept: ".jpg, .jpeg, .png",
                            ref: ref,
                            onChange: (e)=>{
                                // нету события ончанге
                                setFileName(e.target.files[0].name);
                            },
                            ...inputProps
                        }, void 0, false, {
                            fileName: "[project]/src/components/UI/fild/fileFild.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: FileName
                        }, void 0, false, {
                            fileName: "[project]/src/components/UI/fild/fileFild.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/UI/fild/fileFild.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/fild/fileFild.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/fild/fileFild.tsx",
        lineNumber: 14,
        columnNumber: 7
    }, this);
}, "5Z1uhFLcIsQbCmlukhHYIT72xoQ=")), "5Z1uhFLcIsQbCmlukhHYIT72xoQ=");
_c1 = FileFild;
const __TURBOPACK__default__export__ = FileFild;
var _c, _c1;
__turbopack_context__.k.register(_c, "FileFild$forwardRef");
__turbopack_context__.k.register(_c1, "FileFild");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Contacts/addContact/useMutationContact.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMutationContact": (()=>useMutationContact)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$contacts$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/service/contacts.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useMutationContact = ()=>{
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const creacteContactMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            'add_contact'
        ],
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$contacts$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactService"].addContact,
        onSettled: {
            "useMutationContact.useMutation[creacteContactMutation]": async ()=>{
                await queryClient.invalidateQueries({
                    queryKey: [
                        'contacts'
                    ]
                });
            }
        }["useMutationContact.useMutation[creacteContactMutation]"],
        onSuccess: {
            "useMutationContact.useMutation[creacteContactMutation]": ()=>{
                console.log('контакт успешно добавлен');
            }
        }["useMutationContact.useMutation[creacteContactMutation]"],
        onError: {
            "useMutationContact.useMutation[creacteContactMutation]": ()=>{
                console.log('ошибка в добавлении контакта');
            }
        }["useMutationContact.useMutation[creacteContactMutation]"]
    });
    return {
        creacteContactMutation
    };
};
_s(useMutationContact, "+MG9tyQwitdOHiaFHA0c0OnBv60=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utiles/getToasterPromisSuccess.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getToasterPromisSuccess": (()=>getToasterPromisSuccess)
});
const getToasterPromisSuccess = (name)=>{
    return {
        loading: 'loading...',
        success: name,
        error: (error)=>`${error?.message || 'unknow error'}`
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Contacts/addContact/useFormContact.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFormContact": (()=>useFormContact)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$addContact$2f$useMutationContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Contacts/addContact/useMutationContact.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getToasterPromisSuccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getToasterPromisSuccess.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useFormContact = ({ goBack })=>{
    _s();
    const { handleSubmit, register, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])();
    const { creacteContactMutation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$addContact$2f$useMutationContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutationContact"])();
    const formSubmit = async (data)=>{
        const formData = new FormData();
        formData.append('files', data.avatar[0]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].promise(creacteContactMutation.mutateAsync({
            formData: formData,
            name: data.name,
            role: data.role
        }), {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getToasterPromisSuccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToasterPromisSuccess"])('Contact is added')
        });
        goBack();
    };
    return {
        onSubmit: handleSubmit(formSubmit),
        register,
        errors
    };
};
_s(useFormContact, "z1v8JB3x7LdL+8FbHx2PwqdkW6U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$addContact$2f$useMutationContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutationContact"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utiles/getValidateError.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getValidateError": (()=>getValidateError)
});
const getValidateError = (name, isLength = true, min = 3, max = 40)=>{
    if (isLength) {
        return {
            required: `${name} is required`,
            minLength: {
                value: min,
                message: `Min length is ${min} `
            },
            maxLength: {
                value: max,
                message: `Max length is ${max}`
            }
        };
    } else {
        return {
            required: `${name} is required`
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Contacts/addContact/addContact.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/fild/fild.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$addContact$2f$addContact$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/Contacts/addContact/addContact.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fileFild$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/fild/fileFild.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$addContact$2f$useFormContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Contacts/addContact/useFormContact.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getValidateError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getValidateError.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const AddContact = ({ goBack })=>{
    _s();
    const { onSubmit, register, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$addContact$2f$useFormContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContact"])({
        goBack
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$addContact$2f$addContact$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$addContact$2f$addContact$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goBack,
                        children: "go back"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/Contacts/addContact/addContact.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "add contact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/Contacts/addContact/addContact.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/Contacts/addContact/addContact.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: onSubmit,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$addContact$2f$addContact$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        placeholder: errors.name?.message || 'name',
                        error: errors.name?.message,
                        ...register('name', {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getValidateError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValidateError"])('Name')
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/Contacts/addContact/addContact.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fild$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        placeholder: errors.role?.message || 'role',
                        error: errors.role?.message,
                        ...register('role', {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getValidateError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValidateError"])('Role')
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/Contacts/addContact/addContact.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$fild$2f$fileFild$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        error: errors.avatar?.message,
                        placeholder: errors.avatar?.message || 'choose an avatar',
                        ...register('avatar', {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getValidateError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValidateError"])('Avatar', false)
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/Contacts/addContact/addContact.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        children: "add contact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/Contacts/addContact/addContact.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/Contacts/addContact/addContact.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/Contacts/addContact/addContact.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_s(AddContact, "5kPV7v2pPoWK8Q0hGKipbo4gN4Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$addContact$2f$useFormContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContact"]
    ];
});
_c = AddContact;
const __TURBOPACK__default__export__ = AddContact;
var _c;
__turbopack_context__.k.register(_c, "AddContact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/service/balance.service.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "balance": (()=>balance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/constants.ts [app-client] (ecmascript)");
;
const balance = async (balanceData)=>{
    const URL = ("TURBOPACK compile-time value", "http://localhost:1337/api");
    if (balanceData.type !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTIONS"].type.cancelled) {
        try {
            const responce = await fetch(`${URL}/cards?filters[id][$eq]=${balanceData.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            const responceJSON = await responce.json();
            console.log(responceJSON);
            const cardBalance = responceJSON.data[0].balance;
            const cardDocumentId = responceJSON.data[0].documentId;
            const newBalance = balanceData.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTIONS"].type.incoming ? Number(cardBalance) + balanceData.amount : Number(cardBalance) - balanceData.amount;
            fetch(`${URL}/cards/${cardDocumentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    data: {
                        balance: newBalance
                    }
                })
            });
            if (!responce.ok) {
                const errorMessage = responce.text();
                throw new Error('ошибка запроса ' + errorMessage);
            }
        } catch (error) {
            console.log(error, ' - ошибка обработки баланса');
            throw error;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useBalanceMutation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useBalanceMutation": (()=>useBalanceMutation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$balance$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/service/balance.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useBalanceMutation = ()=>{
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const createBalanceMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            'balance'
        ],
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$balance$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["balance"],
        onSettled: {
            "useBalanceMutation.useMutation[createBalanceMutation]": async ()=>{
                await queryClient.invalidateQueries({
                    queryKey: [
                        'user'
                    ]
                });
            }
        }["useBalanceMutation.useMutation[createBalanceMutation]"]
    });
    return {
        createBalanceMutation
    };
};
_s(useBalanceMutation, "KVWmARwpDxGbvuolvFTboQNIsAI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useTransactionMutation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTransactionMutation": (()=>useTransactionMutation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$transaction$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/service/transaction.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useTransactionMutation = ()=>{
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const createTransactionMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            'create_transaction'
        ],
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$transaction$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsService"].post,
        onSettled: {
            "useTransactionMutation.useMutation[createTransactionMutation]": async ()=>{
                await queryClient.invalidateQueries({
                    queryKey: [
                        'transactions'
                    ]
                });
            }
        }["useTransactionMutation.useMutation[createTransactionMutation]"],
        onSuccess: {
            "useTransactionMutation.useMutation[createTransactionMutation]": ()=>{
                console.log('Транзакция успешно проведенна');
            }
        }["useTransactionMutation.useMutation[createTransactionMutation]"],
        onError: {
            "useTransactionMutation.useMutation[createTransactionMutation]": ()=>{
                console.log('Ошибка в совершении транзакции');
            }
        }["useTransactionMutation.useMutation[createTransactionMutation]"]
    });
    return {
        createTransactionMutation
    };
};
_s(useTransactionMutation, "iC64VzIQjhIG/Fycz+sDd487hGk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Contacts/useFormSendContact.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFormSendContact": (()=>useFormSendContact)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBalanceMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBalanceMutation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactionMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTransactionMutation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getToasterPromisSuccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getToasterPromisSuccess.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const useFormSendContact = ({ name })=>{
    _s();
    const { register, handleSubmit, reset, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])();
    const { createBalanceMutation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBalanceMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBalanceMutation"])();
    const { createTransactionMutation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactionMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionMutation"])();
    const onFormSubmit = (data)=>{
        if (!name) {
            return;
        }
        createBalanceMutation.mutate({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTIONS"].type.outgoing,
            amount: data.amound,
            id: 1
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].promise(createTransactionMutation.mutateAsync({
            title: name,
            date: new Date(),
            type: 'outgoing',
            category: 'Send',
            amount: Number(data.amound),
            id: 1
        }), {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getToasterPromisSuccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToasterPromisSuccess"])('Transalation delivered')
        });
        reset();
    };
    return {
        register,
        errors,
        onSubmit: handleSubmit(onFormSubmit),
        isPanding: createTransactionMutation.isPending
    };
};
_s(useFormSendContact, "7occAEJRJHEEkaAmCzQwAhthiYI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBalanceMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBalanceMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactionMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Contacts/Contacts.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$ContactItem$2f$contactItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Contacts/ContactItem/contactItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$Contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/Contacts/Contacts.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useContacts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useContacts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$addContact$2f$addContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Contacts/addContact/addContact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$useFormSendContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Contacts/useFormSendContact.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Loader$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Loader/loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getValidateError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getValidateError.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const Contacts = ()=>{
    _s();
    const [isAdd, setIsAdd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [ActiveId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { data, isLoading, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useContacts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContacts"])();
    const { onSubmit, register, isPanding, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$useFormSendContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormSendContact"])({
        name
    });
    const goBack = ()=>{
        setIsAdd(!isAdd);
    };
    const chooseContact = (name, id)=>{
        setActiveId(id);
        setName(name);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$Contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Quick Transfer"
            }, void 0, false, {
                fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$Contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                children: isAdd ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$addContact$2f$addContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    goBack: goBack
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$Contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contacts,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$ContactItem$2f$contactItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    name: 'add',
                                    role: 'Contact',
                                    isFirst: true,
                                    goBack: goBack,
                                    idContact: 0,
                                    isImActive: false
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: "loading..."
                                }, void 0, false),
                                isSuccess ? data?.map((cont)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$ContactItem$2f$contactItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        avatar: cont.avatar !== null ? cont.avatar[0].url : '',
                                        name: cont.name,
                                        role: cont.role,
                                        isFirst: false,
                                        choose: chooseContact,
                                        isImActive: ActiveId === cont.id,
                                        idContact: cont.id
                                    }, cont.id, false, {
                                        fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                                        lineNumber: 54,
                                        columnNumber: 19
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: " no result "
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$Contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Write Amount"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: onSubmit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            placeholder: errors.amound?.message || '525.25',
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!!errors.amound?.message && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$Contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isError),
                                            ...register('amound', {
                                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getValidateError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValidateError"])('Amount', true, 1, 9)
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isPanding,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(isPanding && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$Contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disabled),
                                            children: [
                                                isPanding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Loader$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                                                    color: "#fff"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 33
                                                }, this),
                                                !isPanding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Send"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                            style: {
                                                                color: 'var(--white)',
                                                                fill: 'none'
                                                            },
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/Contacts/Contacts.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(Contacts, "Hsh3VmRq7m0wgCV8W8Ga+4WVT7Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useContacts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContacts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$useFormSendContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormSendContact"]
    ];
});
_c = Contacts;
const __TURBOPACK__default__export__ = Contacts;
var _c;
__turbopack_context__.k.register(_c, "Contacts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/screens/home/HomePage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$cardBlock$2f$cardBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/cardBlock/cardBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$home$2f$HomePage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/screens/home/HomePage.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUser.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$authContext$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/authContext/authContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$RecentTransaction$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/RecentTransaction/RecentTransaction.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$Contacts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Contacts/Contacts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Loader$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Loader/loader.tsx [app-client] (ecmascript)");
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const DynamicBalanceHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/UI/BalanceHistory/BalanceHistory.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/UI/BalanceHistory/BalanceHistory.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Loader$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {}, void 0, false, {
            fileName: "[project]/src/components/screens/home/HomePage.tsx",
            lineNumber: 14,
            columnNumber: 32
        }, this)
});
_c = DynamicBalanceHistory;
const DynamicWeeklyActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/UI/WeeklyActivity/WeeklyActivity.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/UI/WeeklyActivity/WeeklyActivity.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Loader$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {}, void 0, false, {
            fileName: "[project]/src/components/screens/home/HomePage.tsx",
            lineNumber: 18,
            columnNumber: 32
        }, this)
});
_c1 = DynamicWeeklyActivity;
const DynamicExpenseStatistics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Loader$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {}, void 0, false, {
            fileName: "[project]/src/components/screens/home/HomePage.tsx",
            lineNumber: 23,
            columnNumber: 32
        }, this)
});
_c2 = DynamicExpenseStatistics;
const HomePage = ()=>{
    _s();
    const { isLogin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$authContext$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Loader$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {}, void 0, false, {
            fileName: "[project]/src/components/screens/home/HomePage.tsx",
            lineNumber: 31,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$home$2f$HomePage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$cardBlock$2f$cardBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    buttomText: "See All"
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/home/HomePage.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$RecentTransaction$2f$RecentTransaction$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/screens/home/HomePage.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicWeeklyActivity, {}, void 0, false, {
                    fileName: "[project]/src/components/screens/home/HomePage.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicExpenseStatistics, {}, void 0, false, {
                    fileName: "[project]/src/components/screens/home/HomePage.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Contacts$2f$Contacts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/screens/home/HomePage.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicBalanceHistory, {}, void 0, false, {
                    fileName: "[project]/src/components/screens/home/HomePage.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/screens/home/HomePage.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(HomePage, "iLDYVa4Y4Yfod6jNQt8iAoNZ+hc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$authContext$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c3 = HomePage;
const __TURBOPACK__default__export__ = HomePage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DynamicBalanceHistory");
__turbopack_context__.k.register(_c1, "DynamicWeeklyActivity");
__turbopack_context__.k.register(_c2, "DynamicExpenseStatistics");
__turbopack_context__.k.register(_c3, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a723a11f._.js.map