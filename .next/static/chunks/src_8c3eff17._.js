(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "card": "ExpenseStatistics-module-scss-module__Gly9zG__card",
  "wrapper": "ExpenseStatistics-module-scss-module__Gly9zG__wrapper",
});
}}),
"[project]/src/utiles/getToolTip.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getToolTip": (()=>getToolTip)
});
function getToolTip() {
    return {
        tooltip: {
            backgroundColor: '#ffffff',
            borderColor: '#718ebf',
            borderWidth: 1,
            titleColor: '#343c6a',
            bodyColor: '#718ebf',
            cornerRadius: 11,
            usePointStyle: true
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Chart/Circle/useCircleChartData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCircleChartData": (()=>useCircleChartData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getToolTip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getToolTip.ts [app-client] (ecmascript)");
;
function useCircleChartData(DATA) {
    const data = {
        labels: DATA.labels,
        datasets: [
            {
                label: DATA.label,
                data: DATA.datasets,
                backgroundColor: DATA.backgroundColor,
                borderWidth: DATA.border
            }
        ]
    };
    const options = {
        layout: {
            padding: 0
        },
        cutout: DATA.cutout,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: '#718ebf',
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: DATA.padding
                },
                align: 'center'
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getToolTip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToolTip"])()
        }
    };
    return {
        options,
        data
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Chart/Circle/Circle-chart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CircleChart": (()=>CircleChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Circle$2f$useCircleChartData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Chart/Circle/useCircleChartData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/NotEnougtData/NotEnougtData.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const CircleChart = ({ chartData })=>{
    _s();
    const { data, options } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Circle$2f$useCircleChartData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCircleChartData"])({
        ...chartData
    });
    if (chartData.labels.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotEnougtData"], {}, void 0, false, {
            fileName: "[project]/src/components/UI/Chart/Circle/Circle-chart.tsx",
            lineNumber: 13,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/src/components/UI/Chart/Circle/Circle-chart.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(CircleChart, "8qHMbRJI3ftBjqUfz2U2TkdFFOw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Circle$2f$useCircleChartData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCircleChartData"]
    ];
});
_c = CircleChart;
var _c;
__turbopack_context__.k.register(_c, "CircleChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "EXPENSE_STATISTICS_DATA": (()=>EXPENSE_STATISTICS_DATA)
});
const EXPENSE_STATISTICS_DATA = {
    labels: [
        'Entertaiment',
        'Bill Expence',
        'Other',
        'Investments',
        'Other',
        'Investments'
    ],
    datasets: [
        30,
        15,
        35,
        20,
        20,
        12
    ],
    backgroundColor: [
        '#343C6A',
        '#FC7900',
        '#1814F3',
        '#FA00FF',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)'
    ],
    border: 6,
    cutout: '0',
    label: 'In a %',
    padding: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loayout$2f$CardWrapper$2f$CardWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/loayout/CardWrapper/CardWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ExpenseStatistics$2f$ExpenseStatistics$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Circle$2f$Circle$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Chart/Circle/Circle-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ExpenseStatistics$2f$ExpenseStatistics$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.data.ts [app-client] (ecmascript)");
;
;
;
;
;
const ExpenseStatistics = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ExpenseStatistics$2f$ExpenseStatistics$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Expense Statistics"
            }, void 0, false, {
                fileName: "[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loayout$2f$CardWrapper$2f$CardWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ExpenseStatistics$2f$ExpenseStatistics$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Circle$2f$Circle$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleChart"], {
                    chartData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ExpenseStatistics$2f$ExpenseStatistics$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPENSE_STATISTICS_DATA"]
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = ExpenseStatistics;
const __TURBOPACK__default__export__ = ExpenseStatistics;
var _c;
__turbopack_context__.k.register(_c, "ExpenseStatistics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/UI/ExpenseStatistics/ExpenseStatistics.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_8c3eff17._.js.map