// Data from https://finance.yahoo.com/quote/NFLX/financials/

const translations = {
    totAss: 'Total Assets',
    currAss: 'Current Assets',
    nCurrAss: 'non-Current Assets',
    totLia: 'Total Liabilities',
    curLia: 'Current Liabilities',
    nCurLia: 'non-Current Liabilities',
    totEq: 'Total Equity',
    capStock: 'Capital Stock',
    retEarn: 'Retained Earning',
    treas: 'Treasury',
    nonAffect: 'non Affected',
};

export function addLabels(series) {
    return series.map((item) => ({
        ...item,
        label: translations[item.dataKey],
        valueFormatter: (v) => (v ? `$ ${v.toLocaleString()}k` : '-'),
    }));
}

export const balanceSheet = [
    {
        year: 'JAN',
        totAss: 30,
        currAss: 4,
        nCurrAss: 26,
    },
    {
        year: 'FEB',
        totAss: 30,
        currAss: 10,
        nCurrAss: 20,
    },
    {
        year: 'MAR',
        totAss: 30,
        currAss: 18,
        nCurrAss: 12,
    },
    {
        year: 'APR',
        totAss: 30,
        currAss: 2,
        nCurrAss: 28,
    },
    {
        year: 'MAY',
        totAss: 30,
        currAss: 10,
        nCurrAss: 20,
    },
    {
        year: 'JUN',
        totAss: 30,
        currAss: 15,
        nCurrAss: 15,
    },
    {
        year: 'JUL',
        totAss: 30,
        currAss: 12,
        nCurrAss: 18,
    },
    {
        year: 'AUG',
        totAss: 30,
        currAss: 20,
        nCurrAss: 10,
    },
    {
        year: 'SEP',
        totAss: 30,
        currAss: 9,
        nCurrAss: 21,
    },
    {
        year: 'OCT',
        totAss: 30,
        currAss: 8,
        nCurrAss: 22,
    },
    {
        year: 'NOV',
        totAss: 30,
        currAss: 7,
        nCurrAss: 23,
    },
    {
        year: 'DEC',
        totAss: 30,
        currAss: 10,
        nCurrAss: 20,
    },
];
