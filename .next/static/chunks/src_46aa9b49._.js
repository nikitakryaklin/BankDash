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
"[project]/src/context/statsContext/statsContext.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/context/statsContext/statsContext.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_46aa9b49._.js.map