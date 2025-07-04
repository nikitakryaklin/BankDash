(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/UI/BalanceHistory/BalanceHistory.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "card": "BalanceHistory-module-scss-module__Qe6GUW__card",
  "wrapper": "BalanceHistory-module-scss-module__Qe6GUW__wrapper",
});
}}),
"[project]/src/components/UI/BalanceHistory/BalanceHistory.data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BALANCE_HISTORY_DATA": (()=>BALANCE_HISTORY_DATA)
});
const BALANCE_HISTORY_DATA = {
    scale: 0.5,
    XGrid: false,
    label: '',
    pointBorderWidth: 0,
    pointRadius: 0,
    borderColor: '#1814F3'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
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
"[project]/src/components/UI/Chart/Line/useLineChartData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLineChartData": (()=>useLineChartData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getCardValues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getCardValues.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getToolTip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getToolTip.ts [app-client] (ecmascript)");
;
;
function useLineChartData(DATA) {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            line: {
                tension: DATA.scale
            }
        },
        scales: {
            x: {
                border: {
                    display: false
                },
                grid: {
                    display: DATA.XGrid
                },
                ticks: {
                    color: '#718ebf',
                    autoSkip: true,
                    maxTicksLimit: 7,
                    drawTicks: false
                }
            },
            y: {
                beginAtZero: true,
                border: {
                    display: false,
                    dash: [
                        3,
                        3
                    ]
                },
                ticks: {
                    drawTicks: true,
                    color: '#718ebf',
                    padding: 15,
                    maxTicksLimit: 5,
                    callback: function(value) {
                        return '$' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getCardValues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardValues"].balance(value);
                    }
                },
                grid: {
                    color: '#718ebf7a',
                    drawBorder: true
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getToolTip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToolTip"])()
        }
    };
    const data = {
        labels: DATA.labes,
        datasets: [
            {
                label: DATA.label,
                data: DATA.data,
                borderColor: DATA.borderColor,
                borderWidth: 3,
                pointBorderWidth: DATA.pointBorderWidth,
                pointRadius: DATA.pointRadius,
                pointBackgroundColor: '#fff'
            }
        ]
    };
    return {
        data,
        options
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utiles/shadowLinePlugin.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "shadowLinePlugin": (()=>shadowLinePlugin)
});
const shadowLinePlugin = {
    id: 'shadowLine',
    beforeDatasetsDraw (chart) {
        const { ctx } = chart;
        ctx.save();
        ctx.shadowColor = '#1814F3';
        ctx.shadowBlur = 60;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 30;
    },
    afterDatasetsDraw (chart) {
        chart.ctx.restore();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Chart/Line/Line-chart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LineChart": (()=>LineChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Line$2f$useLineChartData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Chart/Line/useLineChartData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$shadowLinePlugin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/shadowLinePlugin.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/NotEnougtData/NotEnougtData.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const LineChart = ({ chartData, isPlugin = false })=>{
    _s();
    const { data, options } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Line$2f$useLineChartData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLineChartData"])({
        ...chartData
    });
    console.log(chartData.labes, 'line');
    if (chartData.labes.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$NotEnougtData$2f$NotEnougtData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotEnougtData"], {}, void 0, false, {
            fileName: "[project]/src/components/UI/Chart/Line/Line-chart.tsx",
            lineNumber: 39,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            options: options,
            data: data,
            plugins: isPlugin ? [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$shadowLinePlugin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowLinePlugin"]
            ] : []
        }, void 0, false, {
            fileName: "[project]/src/components/UI/Chart/Line/Line-chart.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(LineChart, "7HfBDBVTi7/riFhDpSevLvocmnQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Line$2f$useLineChartData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLineChartData"]
    ];
});
_c = LineChart;
var _c;
__turbopack_context__.k.register(_c, "LineChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utiles/getDateByDays.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDateByDays": (()=>getDateByDays)
});
const getDateByDays = (day)=>{
    const date = new Date();
    date.setDate(date.getDate() - day);
    return date.toISOString();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useTransactionsByDate.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTransactionsByDate": (()=>useTransactionsByDate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$transaction$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/service/transaction.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getDateByDays$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utiles/getDateByDays.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useTransactionsByDate = (day = 7)=>{
    _s();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])().getQueryData([
        'user'
    ]);
    const result = [];
    user?.cards?.forEach((card)=>result.push(card.number));
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utiles$2f$getDateByDays$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDateByDays"])(day);
    const { data, isLoading, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'transactions',
            'byDate'
        ],
        queryFn: {
            "useTransactionsByDate.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$transaction$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsService"].getByDate(result, date)
        }["useTransactionsByDate.useQuery"],
        enabled: !!user && result.length > 0,
        select: {
            "useTransactionsByDate.useQuery": (data)=>data.data
        }["useTransactionsByDate.useQuery"]
    });
    return {
        data,
        isLoading,
        isSuccess
    };
};
_s(useTransactionsByDate, "vosioXjoI9OioFjMIW35OSYCK7U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useUserBalance.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useUserBalance": (()=>useUserBalance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUser.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useUserBalance = ()=>{
    _s();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const cards = data?.cards;
    const balance = cards?.reduce((sum, { balance })=>Number(balance) + sum, 0);
    return {
        balance
    };
};
_s(useUserBalance, "j+B6bS0KwwAshe4Iinmk0NND7UI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/BalanceHistory/useBalanceHistoryCalculator.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useBalanceHistoryCalculator": (()=>useBalanceHistoryCalculator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUserBalance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useBalanceHistoryCalculator = (transactions)=>{
    _s();
    const { balance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserBalance"])();
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useBalanceHistoryCalculator.useMemo[data]": ()=>{
            const treansactions_reverse = transactions?.reverse();
            let local_balance = balance;
            let DATA = {
                day: [],
                balance: []
            };
            treansactions_reverse?.forEach({
                "useBalanceHistoryCalculator.useMemo[data]": (el)=>{
                    const date = new Date(el.date);
                    const day = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAYS"][date.getDay()];
                    if (el.type !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTIONS"].type.cancelled) {
                        if (el.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTIONS"].type.incoming) {
                            DATA.day.push(day);
                            DATA.balance.push(Number(local_balance) - Number(el.amount));
                            local_balance -= Number(el.amount);
                        } else {
                            DATA.day.push(day);
                            DATA.balance.push(Number(local_balance) + Number(el.amount));
                            local_balance += Number(el.amount);
                        }
                    }
                }
            }["useBalanceHistoryCalculator.useMemo[data]"]);
            return {
                labels: DATA.day.reverse(),
                data: DATA.balance.reverse()
            };
        }
    }["useBalanceHistoryCalculator.useMemo[data]"], [
        transactions
    ]);
    return {
        labels: data.labels,
        data: data.data
    };
};
_s(useBalanceHistoryCalculator, "Fa3/sXkwgN0AFsWl6oNCoCUsf08=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserBalance"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/BalanceHistory/BalanceHistory.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loayout$2f$CardWrapper$2f$CardWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/loayout/CardWrapper/CardWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$BalanceHistory$2f$BalanceHistory$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/BalanceHistory/BalanceHistory.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$BalanceHistory$2f$BalanceHistory$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/BalanceHistory/BalanceHistory.data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Line$2f$Line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Chart/Line/Line-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactionsByDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTransactionsByDate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$BalanceHistory$2f$useBalanceHistoryCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/BalanceHistory/useBalanceHistoryCalculator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const BalanceHistory = ()=>{
    _s();
    const { data: transactions, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactionsByDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionsByDate"])();
    const { labels, data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$BalanceHistory$2f$useBalanceHistoryCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBalanceHistoryCalculator"])(transactions);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$BalanceHistory$2f$BalanceHistory$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Balance History"
            }, void 0, false, {
                fileName: "[project]/src/components/UI/BalanceHistory/BalanceHistory.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loayout$2f$CardWrapper$2f$CardWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$BalanceHistory$2f$BalanceHistory$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Line$2f$Line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                    chartData: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$BalanceHistory$2f$BalanceHistory$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BALANCE_HISTORY_DATA"],
                        labes: labels,
                        data: data
                    },
                    isPlugin: true
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/BalanceHistory/BalanceHistory.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/BalanceHistory/BalanceHistory.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/BalanceHistory/BalanceHistory.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_s(BalanceHistory, "mcwyq39LD/xAYSD3sx3jmzcxifc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactionsByDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionsByDate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$BalanceHistory$2f$useBalanceHistoryCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBalanceHistoryCalculator"]
    ];
});
_c = BalanceHistory;
const __TURBOPACK__default__export__ = BalanceHistory;
var _c;
__turbopack_context__.k.register(_c, "BalanceHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/BalanceHistory/BalanceHistory.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/UI/BalanceHistory/BalanceHistory.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_eeacd98f._.js.map