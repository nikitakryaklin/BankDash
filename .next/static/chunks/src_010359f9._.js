(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/context/statsContext/statsContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StatsProvider),
    "useStatistics": (()=>useStatistics)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactionsByDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTransactionsByDate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDateTranscript$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDateTranscript.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
const StatsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function StatsProvider({ children }) {
    _s();
    const { data: transactions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactionsByDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionsByDate"])();
    const staticticsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StatsProvider.useMemo[staticticsData]": ()=>{
            var _s = __turbopack_context__.k.signature();
            // bar
            const weeklyActivity = new Map();
            const debitAndCredit = new Map();
            // circle
            const expenseStatistics = {};
            transactions?.forEach(_s({
                "StatsProvider.useMemo[staticticsData]": (el)=>{
                    _s();
                    const { day, isoDate: date } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDateTranscript$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDateTranscript"])(el.date);
                    if (!weeklyActivity.has(date)) {
                        if (el.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTIONS"].type.outgoing) {
                            weeklyActivity.set(date, {
                                day,
                                data: {
                                    expenses: el.amount,
                                    replenishment: 0
                                }
                            });
                        }
                        if (el.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTIONS"].type.incoming) {
                            weeklyActivity.set(date, {
                                day,
                                data: {
                                    expenses: 0,
                                    replenishment: el.amount
                                }
                            });
                        }
                        if (el.card.type === 'Debit') {
                            debitAndCredit.set(date, {
                                day,
                                data: {
                                    debit: el.amount,
                                    credit: 0
                                }
                            });
                        }
                        if (el.card.type === 'Credit') {
                            debitAndCredit.set(date, {
                                day,
                                data: {
                                    debit: 0,
                                    credit: el.amount
                                }
                            });
                        }
                    } else {
                        if (el.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTIONS"].type.outgoing) {
                            weeklyActivity.get(date).data.expenses += el.amount;
                        }
                        if (el.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTIONS"].type.incoming) {
                            weeklyActivity.get(date).data.replenishment += el.amount;
                        }
                        if (el.card.type === 'Debit') {
                            debitAndCredit.get(date).data.debit += el.amount;
                        }
                        if (el.card.type === 'Credit') {
                            debitAndCredit.get(date).data.credit += el.amount;
                        }
                    }
                    // expense statistics
                    if (el.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTIONS"].type.outgoing) {
                        if (!expenseStatistics[el.category]) {
                            expenseStatistics[el.category] = {
                                dataset: el.amount,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][el.category]
                            };
                        } else {
                            expenseStatistics[el.category].dataset += el.amount;
                        }
                    }
                }
            }["StatsProvider.useMemo[staticticsData]"], "H3u2LAiMWx4PmX++eDlFYZYB/1I=", false, {
                "StatsProvider.useMemo[staticticsData]": function() {
                    return [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDateTranscript$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDateTranscript"]
                    ];
                }
            }["StatsProvider.useMemo[staticticsData]"]));
            const weeklyActivitySorted = [
                ...weeklyActivity.entries()
            ].sort({
                "StatsProvider.useMemo[staticticsData].weeklyActivitySorted": ([a], [b])=>a.localeCompare(b)
            }["StatsProvider.useMemo[staticticsData].weeklyActivitySorted"]);
            const labelDays = weeklyActivitySorted.map({
                "StatsProvider.useMemo[staticticsData].labelDays": ([, el])=>el.day.slice(0, 3)
            }["StatsProvider.useMemo[staticticsData].labelDays"]);
            const expenses = weeklyActivitySorted.map({
                "StatsProvider.useMemo[staticticsData].expenses": ([, el])=>el.data.expenses
            }["StatsProvider.useMemo[staticticsData].expenses"]);
            const debitAndCreditSorted = [
                ...debitAndCredit.entries()
            ].sort({
                "StatsProvider.useMemo[staticticsData].debitAndCreditSorted": ([a], [b])=>a.localeCompare(b)
            }["StatsProvider.useMemo[staticticsData].debitAndCreditSorted"]);
            const debit = debitAndCreditSorted.map({
                "StatsProvider.useMemo[staticticsData].debit": ([, el])=>el.data.debit
            }["StatsProvider.useMemo[staticticsData].debit"]);
            const credit = debitAndCreditSorted.map({
                "StatsProvider.useMemo[staticticsData].credit": ([, el])=>el.data.credit
            }["StatsProvider.useMemo[staticticsData].credit"]);
            return {
                expenseStatistics: {
                    labels: Object.keys(expenseStatistics),
                    datasets: Object.values(expenseStatistics).map({
                        "StatsProvider.useMemo[staticticsData]": (el)=>el.dataset
                    }["StatsProvider.useMemo[staticticsData]"]),
                    colors: Object.values(expenseStatistics).map({
                        "StatsProvider.useMemo[staticticsData]": (el)=>el.color
                    }["StatsProvider.useMemo[staticticsData]"])
                },
                weeklyActivity: {
                    labels: labelDays,
                    expenses: expenses,
                    replenishment: weeklyActivitySorted.map({
                        "StatsProvider.useMemo[staticticsData]": ([, el])=>el.data.replenishment
                    }["StatsProvider.useMemo[staticticsData]"])
                },
                myExpense: {
                    labels: labelDays,
                    expenses: expenses
                },
                debitAndCredit: {
                    labels: labelDays,
                    debit: debit,
                    credit: credit
                }
            };
        }
    }["StatsProvider.useMemo[staticticsData]"], [
        transactions
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsContext.Provider, {
        value: staticticsData,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/statsContext/statsContext.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(StatsProvider, "84IEfloi3cTn6CMyGdjMQVqbAnw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactionsByDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionsByDate"]
    ];
});
_c = StatsProvider;
const useStatistics = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StatsContext);
    if (!context) {
        throw new Error('useStatistics must be used within an StatsProvider');
    }
    return context;
};
_s1(useStatistics, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "StatsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/MyExpense/MyExpense.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "wrapper": "MyExpense-module-scss-module__L0uFrq__wrapper",
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
"[project]/src/components/UI/MyExpense/useMyExpenseCalculator.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMyExpenseCalculator": (()=>useMyExpenseCalculator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$statsContext$2f$statsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/statsContext/statsContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useMyExpenseCalculator = ()=>{
    _s();
    const { myExpense } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$statsContext$2f$statsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatistics"])();
    const MY_EXPENSE_DATA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMyExpenseCalculator.useMemo[MY_EXPENSE_DATA]": ()=>{
            //   const DATA_MAP = new Map()
            //   transactions?.forEach((el) => {
            //     if (el.type === TRANSACTIONS.type.outgoing) {
            //       const { day, isoDate: date } = useDateTranscript(el.date)
            //       if (!DATA_MAP.has(date)) {
            //         DATA_MAP.set(date, { day, amount: 0 })
            //       } else {
            //         DATA_MAP.get(date).amount += el.amount
            //       }
            //     }
            //   })
            //   const sorted = [...DATA_MAP.entries()].sort(([a], [b]) =>
            //     a.localeCompare(b)
            //   )
            return {
                isTitle: false,
                isLegend: false,
                isGrid: false,
                labels: myExpense.labels,
                datasets: [
                    {
                        label: 'Dataset 2',
                        data: myExpense.expenses,
                        backgroundColor: '#EDF0F7',
                        borderRadius: 10,
                        borderSkipped: false,
                        borderWidth: 7,
                        borderColor: '#EDF0F7',
                        hoverBorderWidth: 6,
                        hoverBackgroundColor: '#16DBCC',
                        hoverBorderColor: '#16DBCC'
                    }
                ]
            };
        }
    }["useMyExpenseCalculator.useMemo[MY_EXPENSE_DATA]"], [
        myExpense
    ]);
    return {
        MY_EXPENSE_DATA
    };
};
_s(useMyExpenseCalculator, "64lzeeDWVzhWVAKRKfLwpbsquks=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$statsContext$2f$statsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatistics"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/MyExpense/MyExpenseChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MyExpenseChart": (()=>MyExpenseChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loayout$2f$CardWrapper$2f$CardWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/loayout/CardWrapper/CardWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$MyExpense$2f$MyExpense$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/MyExpense/MyExpense.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Bar$2f$Bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Chart/Bar/Bar-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$MyExpense$2f$useMyExpenseCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/MyExpense/useMyExpenseCalculator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ElementWrapper$2f$ElementWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/ElementWrapper/ElementWrapper.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const MyExpenseChart = ()=>{
    _s();
    const { MY_EXPENSE_DATA } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$MyExpense$2f$useMyExpenseCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMyExpenseCalculator"])();
    if (!MY_EXPENSE_DATA.labels) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "u lox"
        }, void 0, false, {
            fileName: "[project]/src/components/UI/MyExpense/MyExpenseChart.tsx",
            lineNumber: 13,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ElementWrapper$2f$ElementWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementWrapper"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$MyExpense$2f$MyExpense$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        id: "my_expense",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "My Expense"
            }, void 0, false, {
                fileName: "[project]/src/components/UI/MyExpense/MyExpenseChart.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loayout$2f$CardWrapper$2f$CardWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Chart$2f$Bar$2f$Bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    chartData: MY_EXPENSE_DATA
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/MyExpense/MyExpenseChart.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/MyExpense/MyExpenseChart.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/MyExpense/MyExpenseChart.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_s(MyExpenseChart, "nrKgfzduNc2g3LNpO42AVAZ07hI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$MyExpense$2f$useMyExpenseCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMyExpenseCalculator"]
    ];
});
_c = MyExpenseChart;
var _c;
__turbopack_context__.k.register(_c, "MyExpenseChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/MyExpense/MyExpense.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MyExpense": (()=>MyExpense)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$statsContext$2f$statsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/statsContext/statsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$MyExpense$2f$MyExpenseChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/MyExpense/MyExpenseChart.tsx [app-client] (ecmascript)");
;
;
;
const MyExpense = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$statsContext$2f$statsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$MyExpense$2f$MyExpenseChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MyExpenseChart"], {}, void 0, false, {
            fileName: "[project]/src/components/UI/MyExpense/MyExpense.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/UI/MyExpense/MyExpense.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = MyExpense;
var _c;
__turbopack_context__.k.register(_c, "MyExpense");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/MyExpense/MyExpense.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/UI/MyExpense/MyExpense.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_010359f9._.js.map