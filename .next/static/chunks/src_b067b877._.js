(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/UI/DebitAndCredit/DebitAndCredit.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "wrapper": "DebitAndCredit-module-scss-module__ZeGmua__wrapper",
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
"[project]/src/components/UI/Chart/Bar/useBarChartData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useBarChartData": (()=>useBarChartData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getToolTip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getToolTip.ts [app-client] (ecmascript)");
;
function useBarChartData(DATA) {
    // DATA = DATA.chartData
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: DATA.isTitle,
                text: DATA.title
            },
            legend: {
                display: DATA.isLegend,
                position: 'top',
                align: 'end',
                labels: {
                    color: '#718ebf',
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 10
                }
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getToolTip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToolTip"])()
        },
        scales: {
            x: {
                border: {
                    display: false
                },
                grid: {
                    display: false
                },
                ticks: {
                    color: '#718ebf',
                    maxTicksLimit: 7,
                    drawTicks: false
                }
            },
            y: {
                beginAtZero: true,
                type: 'logarithmic',
                border: {
                    display: false
                },
                ticks: {
                    display: DATA.isGrid,
                    drawTicks: true,
                    color: '#718ebf',
                    padding: 15,
                    maxTicksLimit: 5
                },
                grid: {
                    display: DATA.isGrid,
                    color: '#F3F3F5',
                    drawBorder: true
                }
            }
        }
    };
    const data = {
        labels: DATA.labels,
        datasets: DATA.datasets
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
"[project]/src/components/UI/Chart/Bar/Bar-chart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BarChart": (()=>BarChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Bar$2f$useBarChartData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Chart/Bar/useBarChartData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/NotEnougtData/NotEnougtData.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LogarithmicScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const BarChart = ({ chartData })=>{
    _s();
    const { options, data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Bar$2f$useBarChartData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBarChartData"])({
        ...chartData
    });
    if (chartData.labels.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotEnougtData"], {}, void 0, false, {
            fileName: "[project]/src/components/UI/Chart/Bar/Bar-chart.tsx",
            lineNumber: 28,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            options: options,
            data: data
        }, void 0, false, {
            fileName: "[project]/src/components/UI/Chart/Bar/Bar-chart.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(BarChart, "cQYjs0glw2h8LKQzc4uDForrlMw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Bar$2f$useBarChartData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBarChartData"]
    ];
});
_c = BarChart;
var _c;
__turbopack_context__.k.register(_c, "BarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useDateTranscript.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useDateTranscript": (()=>useDateTranscript)
});
const useDateTranscript = (date_arg)=>{
    const date = new Date(date_arg);
    const isoDate = date.toISOString().split('T')[0];
    const day = date.toLocaleDateString('en-EN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    });
    return {
        day,
        isoDate
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/DebitAndCredit/useDebitAndCreditCalculator.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useDebitAndCreditCalculator": (()=>useDebitAndCreditCalculator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDateTranscript$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDateTranscript.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactionsByDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTransactionsByDate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useDebitAndCreditCalculator = ()=>{
    _s();
    const { data: transactions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactionsByDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionsByDate"])();
    const DEBIT_AND_CREDIT_DATA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDebitAndCreditCalculator.useMemo[DEBIT_AND_CREDIT_DATA]": ()=>{
            const result = new Map();
            transactions?.forEach({
                "useDebitAndCreditCalculator.useMemo[DEBIT_AND_CREDIT_DATA]": (el)=>{
                    if (!el.card) {
                        return null;
                    }
                    if (el.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTIONS"].type.outgoing) {
                        const { day, isoDate: date } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDateTranscript$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDateTranscript"])(el.date);
                        if (!result.has(date)) {
                            if (el.card.type === 'Debit') {
                                result.set(date, {
                                    day,
                                    data: {
                                        debit: el.amount,
                                        credit: 0
                                    }
                                });
                            }
                            if (el.card.type === 'Credit') {
                                result.set(date, {
                                    day,
                                    data: {
                                        debit: 0,
                                        credit: el.amount
                                    }
                                });
                            }
                        } else {
                            if (el.card.type === 'Debit') {
                                result.get(date).data.debit += el.amount;
                            }
                            if (el.card.type === 'Credit') {
                                result.get(date).data.credit += el.amount;
                            }
                        }
                    }
                }
            }["useDebitAndCreditCalculator.useMemo[DEBIT_AND_CREDIT_DATA]"]);
            const sorted = [
                ...result.entries()
            ].sort({
                "useDebitAndCreditCalculator.useMemo[DEBIT_AND_CREDIT_DATA].sorted": ([a], [b])=>a.localeCompare(b)
            }["useDebitAndCreditCalculator.useMemo[DEBIT_AND_CREDIT_DATA].sorted"]);
            const labels = sorted.map({
                "useDebitAndCreditCalculator.useMemo[DEBIT_AND_CREDIT_DATA].labels": ([, el])=>el.day.slice(0, 3)
            }["useDebitAndCreditCalculator.useMemo[DEBIT_AND_CREDIT_DATA].labels"]);
            const debit = sorted.map({
                "useDebitAndCreditCalculator.useMemo[DEBIT_AND_CREDIT_DATA].debit": ([, el])=>el.data.debit
            }["useDebitAndCreditCalculator.useMemo[DEBIT_AND_CREDIT_DATA].debit"]);
            const credit = sorted.map({
                "useDebitAndCreditCalculator.useMemo[DEBIT_AND_CREDIT_DATA].credit": ([, el])=>el.data.credit
            }["useDebitAndCreditCalculator.useMemo[DEBIT_AND_CREDIT_DATA].credit"]);
            console.log(sorted);
            return {
                isTitle: false,
                isLegend: true,
                isGrid: false,
                title: '$7,560 Debited & $5,420 Credited in this Week',
                labels: labels,
                datasets: [
                    {
                        label: 'Debit',
                        data: debit,
                        backgroundColor: '#1A16F3',
                        borderRadius: 14,
                        borderSkipped: false,
                        borderWidth: 4,
                        borderColor: '#fff',
                        hoverBorderColor: '#EDF0F7'
                    },
                    {
                        label: 'Credit',
                        data: credit,
                        backgroundColor: '#FCAA0B',
                        borderRadius: 14,
                        borderSkipped: false,
                        borderWidth: 4,
                        borderColor: '#fff',
                        hoverBorderColor: '#EDF0F7'
                    }
                ]
            };
        }
    }["useDebitAndCreditCalculator.useMemo[DEBIT_AND_CREDIT_DATA]"], [
        transactions
    ]);
    return {
        DEBIT_AND_CREDIT_DATA
    };
};
_s(useDebitAndCreditCalculator, "AkDcaPTOxAwH/KIzTdXMElsx21Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactionsByDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionsByDate"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/DebitAndCredit/DebitAndCredit.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DebitAndCredit": (()=>DebitAndCredit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loayout$2f$CardWrapper$2f$CardWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/loayout/CardWrapper/CardWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$DebitAndCredit$2f$DebitAndCredit$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/DebitAndCredit/DebitAndCredit.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Bar$2f$Bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Chart/Bar/Bar-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$DebitAndCredit$2f$useDebitAndCreditCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/DebitAndCredit/useDebitAndCreditCalculator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ElementWrapper$2f$ElementWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/ElementWrapper/ElementWrapper.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const DebitAndCredit = ()=>{
    _s();
    const { DEBIT_AND_CREDIT_DATA } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$DebitAndCredit$2f$useDebitAndCreditCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebitAndCreditCalculator"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ElementWrapper$2f$ElementWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementWrapper"], {
        id: "debit_&_credit_overview",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$DebitAndCredit$2f$DebitAndCredit$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Debit & Credit Overview"
            }, void 0, false, {
                fileName: "[project]/src/components/UI/DebitAndCredit/DebitAndCredit.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loayout$2f$CardWrapper$2f$CardWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Bar$2f$Bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    chartData: DEBIT_AND_CREDIT_DATA
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/DebitAndCredit/DebitAndCredit.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/DebitAndCredit/DebitAndCredit.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/DebitAndCredit/DebitAndCredit.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_s(DebitAndCredit, "ivcpAuRmE3Nyk+g4k2VPSHbXhzE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$DebitAndCredit$2f$useDebitAndCreditCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebitAndCreditCalculator"]
    ];
});
_c = DebitAndCredit;
var _c;
__turbopack_context__.k.register(_c, "DebitAndCredit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/DebitAndCredit/DebitAndCredit.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/UI/DebitAndCredit/DebitAndCredit.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_b067b877._.js.map