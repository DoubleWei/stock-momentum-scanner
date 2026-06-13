// Stock Data - 模擬一週看漲推薦股票
// 評分依據：Agent A 技術指標研究報告
// 篩選條件：MA多頭排列 + MACD黃金交叉 + RSI合理區間 + 成交量放大

const stockData = [
    {
        symbol: '2330',
        name: '台積電',
        price: 598.0,
        change: 2.85,
        // 技術指標評分
        indicators: {
            maStatus: '多頭排列', // MA5 > MA10 > MA20
            macdSignal: '黃金交叉', // DIF > MACD Signal
            rsi: 58, // 合理區間 40-65
            kdStatus: '高档區', // K值位置
            volumeRatio: 1.8 // 成交量 / 5日均量
        },
        techScore: 88,
        sentimentScore: 92,
        compositeScore: 89.2,
        confidence: 87,
        chartData: {
            dates: ['06/07', '06/08', '06/09', '06/10', '06/11', '06/12', '06/13'],
            close: [572, 578, 582, 588, 591, 595, 598],
            ma5: [568, 572, 576, 580, 585, 589, 593],
            ma10: [560, 564, 568, 572, 577, 581, 586],
            ma20: [550, 554, 558, 562, 566, 570, 575]
        },
        reason: 'MA5>MA10>MA20多頭排列，MACD黃金交叉，RSI 58位於合理區間'
    },
    {
        symbol: '2454',
        name: '聯發科',
        price: 1055.0,
        change: 3.42,
        indicators: {
            maStatus: '多頭排列',
            macdSignal: '黃金交叉',
            rsi: 62,
            kdStatus: '中檔區',
            volumeRatio: 2.1
        },
        techScore: 85,
        sentimentScore: 88,
        compositeScore: 86.1,
        confidence: 84,
        chartData: {
            dates: ['06/07', '06/08', '06/09', '06/10', '06/11', '06/12', '06/13'],
            close: [1002, 1015, 1025, 1035, 1042, 1048, 1055],
            ma5: [995, 1002, 1010, 1018, 1026, 1034, 1042],
            ma10: [980, 988, 996, 1004, 1012, 1020, 1028],
            ma20: [965, 972, 979, 986, 993, 1000, 1008]
        },
        reason: '均線多頭，MACD柱狀體由負轉正，量增1.8倍'
    },
    {
        symbol: '3481',
        name: '群創',
        price: 15.85,
        change: 4.26,
        indicators: {
            maStatus: '多頭排列',
            macdSignal: '黃金交叉',
            rsi: 55,
            kdStatus: '低檔黃金交叉',
            volumeRatio: 2.5
        },
        techScore: 90,
        sentimentScore: 78,
        compositeScore: 85.6,
        confidence: 82,
        chartData: {
            dates: ['06/07', '06/08', '06/09', '06/10', '06/11', '06/12', '06/13'],
            close: [14.5, 14.8, 15.1, 15.3, 15.5, 15.7, 15.85],
            ma5: [14.3, 14.5, 14.7, 14.9, 15.1, 15.3, 15.5],
            ma10: [14.0, 14.2, 14.4, 14.6, 14.8, 15.0, 15.2],
            ma20: [13.8, 13.9, 14.0, 14.1, 14.2, 14.3, 14.4]
        },
        reason: 'KD低檔黃金交叉，RSI 55支撐確認，量能放大2.5倍'
    },
    {
        symbol: '2317',
        name: '鴻海',
        price: 168.5,
        change: 1.81,
        indicators: {
            maStatus: '多頭排列',
            macdSignal: '持續多頭',
            rsi: 60,
            kdStatus: '中檔區',
            volumeRatio: 1.6
        },
        techScore: 82,
        sentimentScore: 85,
        compositeScore: 83.2,
        confidence: 79,
        chartData: {
            dates: ['06/07', '06/08', '06/09', '06/10', '06/11', '06/12', '06/13'],
            close: [162, 163.5, 164.2, 165.5, 166.8, 167.5, 168.5],
            ma5: [161, 162, 163, 164, 165, 166, 167],
            ma10: [159, 160, 161, 162, 163, 164, 165],
            ma20: [156, 157, 158, 159, 160, 161, 162]
        },
        reason: 'AI伺服器訂單湧入，MA多頭排列確認'
    },
    {
        symbol: '2303',
        name: '聯電',
        price: 52.8,
        change: 2.13,
        indicators: {
            maStatus: '多頭排列',
            macdSignal: '黃金交叉',
            rsi: 52,
            kdStatus: '低檔黃金交叉',
            volumeRatio: 1.9
        },
        techScore: 80,
        sentimentScore: 76,
        compositeScore: 78.4,
        confidence: 76,
        chartData: {
            dates: ['06/07', '06/08', '06/09', '06/10', '06/11', '06/12', '06/13'],
            close: [50.5, 51.0, 51.5, 52.0, 52.3, 52.6, 52.8],
            ma5: [50.0, 50.3, 50.6, 50.9, 51.2, 51.5, 51.8],
            ma10: [49.5, 49.7, 49.9, 50.1, 50.3, 50.5, 50.7],
            ma20: [48.8, 49.0, 49.2, 49.4, 49.6, 49.8, 50.0]
        },
        reason: '半導體景氣回溫，KD低檔黃金交叉'
    },
    {
        symbol: '2881',
        name: '富邦金',
        price: 68.2,
        change: 1.19,
        indicators: {
            maStatus: '多頭排列',
            macdSignal: '持續多頭',
            rsi: 58,
            kdStatus: '中檔區',
            volumeRatio: 1.4
        },
        techScore: 78,
        sentimentScore: 82,
        compositeScore: 79.6,
        confidence: 75,
        chartData: {
            dates: ['06/07', '06/08', '06/09', '06/10', '06/11', '06/12', '06/13'],
            close: [66.0, 66.5, 67.0, 67.3, 67.6, 67.9, 68.2],
            ma5: [65.5, 65.8, 66.1, 66.4, 66.7, 67.0, 67.3],
            ma10: [64.8, 65.0, 65.2, 65.4, 65.6, 65.8, 66.0],
            ma20: [64.0, 64.1, 64.2, 64.3, 64.4, 64.5, 64.6]
        },
        reason: '金控上半年獲利亮眼，利差擴大'
    },
    {
        symbol: '2891',
        name: '中信金',
        price: 28.45,
        change: 0.89,
        indicators: {
            maStatus: '偏多整理',
            macdSignal: '持續多頭',
            rsi: 55,
            kdStatus: '中檔區',
            volumeRatio: 1.3
        },
        techScore: 75,
        sentimentScore: 80,
        compositeScore: 77.0,
        confidence: 72,
        chartData: {
            dates: ['06/07', '06/08', '06/09', '06/10', '06/11', '06/12', '06/13'],
            close: [27.8, 27.95, 28.1, 28.2, 28.3, 28.4, 28.45],
            ma5: [27.6, 27.7, 27.8, 27.9, 28.0, 28.1, 28.2],
            ma10: [27.4, 27.5, 27.6, 27.7, 27.8, 27.9, 28.0],
            ma20: [27.2, 27.25, 27.3, 27.35, 27.4, 27.45, 27.5]
        },
        reason: '銀行存放款利差擴大，基本面支撐'
    },
    {
        symbol: '2002',
        name: '中鋼',
        price: 25.6,
        change: -0.39,
        indicators: {
            maStatus: '偏空整理',
            macdSignal: '死亡交叉',
            rsi: 42,
            kdStatus: '低檔區',
            volumeRatio: 0.8
        },
        techScore: 65,
        sentimentScore: 70,
        compositeScore: 67.0,
        confidence: 60,
        chartData: {
            dates: ['06/07', '06/08', '06/09', '06/10', '06/11', '06/12', '06/13'],
            close: [26.1, 25.9, 25.8, 25.7, 25.65, 25.6, 25.6],
            ma5: [26.2, 26.1, 26.0, 25.9, 25.8, 25.7, 25.6],
            ma10: [26.4, 26.3, 26.2, 26.1, 26.0, 25.9, 25.8],
            ma20: [26.5, 26.5, 26.4, 26.3, 26.2, 26.1, 26.0]
        },
        reason: '中國PMI放緩，鋼鐵需求前景不明，暫不建議'
    }
];

// News Sentiment Data
const newsData = [
    {
        title: '台積電CoWoS產能持續擴張 半導體供應鏈雨露均霑',
        sentiment: 'positive',
        time: '10:30',
        relatedStocks: ['2330', '2454', '2303']
    },
    {
        title: '聯發科旗艦晶片出貨順暢 Q2營收展望樂觀',
        sentiment: 'positive',
        time: '09:45',
        relatedStocks: ['2454']
    },
    {
        title: '鴻海AI伺服器訂單湧入 毛利有望持續改善',
        sentiment: 'positive',
        time: '09:15',
        relatedStocks: ['2317']
    },
    {
        title: '面板報價止跌回升 群創友達產能利用率提升',
        sentiment: 'positive',
        time: '08:50',
        relatedStocks: ['3481']
    },
    {
        title: '金控上半年獲利亮眼 銀行存放款利差擴大',
        sentiment: 'positive',
        time: '08:30',
        relatedStocks: ['2881', '2891']
    },
    {
        title: 'Fed利率決策牽動資金流向 新興市場震盪加劇',
        sentiment: 'negative',
        time: '14:20',
        relatedStocks: ['2881', '2891']
    },
    {
        title: '中國製造業PMI放緩 鋼鐵需求前景不明',
        sentiment: 'negative',
        time: '13:45',
        relatedStocks: ['2002']
    },
    {
        title: '美科技股財報週登場 市場觀望氣氛浓厚',
        sentiment: 'neutral',
        time: '12:00',
        relatedStocks: ['2330', '2454']
    }
];

// ==========================================
// 技術指標計算函數 (依據 Agent A 研究報告)
// ==========================================

/**
 * 計算RSI (相對強弱指標)
 * @param {number[]} prices - 價格陣列
 * @param {number} period - 計算週期 (預設14)
 * @returns {number} RSI值 (0-100)
 */
function calculateRSI(prices, period = 14) {
    if (prices.length < period + 1) return 50;
    let gains = 0, losses = 0;
    for (let i = prices.length - period; i < prices.length; i++) {
        const diff = prices[i] - prices[i - 1];
        if (diff > 0) gains += diff;
        else losses -= diff;
    }
    const avgGain = gains / period;
    const avgLoss = losses / period;
    if (avgLoss === 0) return 100;
    const rs = avgGain / avgLoss;
    return 100 - (100 / (1 + rs));
}

/**
 * 計算EMA (指數移動平均)
 * @param {number[]} prices - 價格陣列
 * @param {number} period - 計算週期
 * @returns {number} EMA值
 */
function calculateEMA(prices, period) {
    const k = 2 / (period + 1);
    let ema = prices.slice(0, period).reduce((a, b) => a + b) / period;
    for (let i = period; i < prices.length; i++) {
        ema = prices[i] * k + ema * (1 - k);
    }
    return ema;
}

/**
 * 計算MACD (平滑異同移動平均線)
 * @param {number[]} prices - 價格陣列
 * @returns {object} { dif, dea, macd }
 */
function calculateMACD(prices) {
    const ema12 = calculateEMA(prices, 12);
    const ema26 = calculateEMA(prices, 26);
    const dif = ema12 - ema26;
    // DEA/Signal線用9日EMA
    const dea = calculateEMA([dif, dif * 0.9, dif * 0.8, dif * 0.7, dif * 0.6, dif * 0.5, dif * 0.4, dif * 0.3, dif * 0.2], 9);
    const macd = (dif - dea) * 2;
    return { dif, dea, macd };
}

/**
 * 計算KDJ (隨機指標)
 * @param {number[]} prices - 價格陣列
 * @param {number} period - 計算週期 (預設9)
 * @returns {object} { K, D, J }
 */
function calculateKDJ(prices, period = 9) {
    const recentPrices = prices.slice(-period);
    const highest = Math.max(...recentPrices);
    const lowest = Math.min(...recentPrices);
    const close = prices[prices.length - 1];
    
    if (highest === lowest) return { K: 50, D: 50, J: 50 };
    
    const rsv = ((close - lowest) / (highest - lowest)) * 100;
    const K = (2/3) * 50 + (1/3) * rsv;
    const D = (2/3) * 50 + (1/3) * K;
    const J = 3 * K - 2 * D;
    
    return { K, D, J };
}

/**
 * 判斷均線多頭排列
 * @param {number[]} ma5 - 5日均線陣列
 * @param {number[]} ma10 - 10日均線陣列
 * @param {number[]} ma20 - 20日均線陣列
 * @returns {string} 多頭排列狀態
 */
function checkMAStatus(ma5, ma10, ma20) {
    const last = ma5.length - 1;
    if (ma5[last] > ma10[last] && ma10[last] > ma20[last]) {
        return '多頭排列';
    } else if (ma5[last] < ma10[last] && ma10[last] < ma20[last]) {
        return '空頭排列';
    }
    return '整理區間';
}

/**
 * 評估進場信號強度 (根據 Agent A 研究報告)
 * @param {object} stock - 股票資料
 * @returns {object} { score, reasons }
 */
function evaluateEntrySignal(stock) {
    let score = 0;
    const reasons = [];
    
    const ind = stock.indicators;
    
    // 1. 均線多頭排列 (+9分)
    if (ind.maStatus === '多頭排列') {
        score += 9;
        reasons.push('MA5>MA10>MA20多頭排列(+9)');
    }
    
    // 2. MACD黃金交叉 (+8分)
    if (ind.macdSignal === '黃金交叉') {
        score += 8;
        reasons.push('MACD黃金交叉(+8)');
    } else if (ind.macdSignal === '持續多頭') {
        score += 5;
        reasons.push('MACD持續多頭(+5)');
    }
    
    // 3. RSI合理區間 (+7分)
    if (ind.rsi >= 40 && ind.rsi <= 65) {
        score += 7;
        reasons.push(`RSI ${ind.rsi}合理區間(+7)`);
    } else if (ind.rsi > 65 && ind.rsi < 75) {
        score += 3;
        reasons.push(`RSI ${ind.rsi}偏熱(+3)`);
    }
    
    // 4. KDJ低檔黃金交叉 (+8分)
    if (ind.kdStatus === '低檔黃金交叉') {
        score += 8;
        reasons.push('KDJ低檔黃金交叉(+8)');
    } else if (ind.kdStatus === '中檔區') {
        score += 5;
        reasons.push('KDJ中檔整理(+5)');
    }
    
    // 5. 成交量放大 (+8分)
    if (ind.volumeRatio >= 1.5) {
        score += 8;
        reasons.push(`量增${ind.volumeRatio}倍(+8)`);
    } else if (ind.volumeRatio >= 1.2) {
        score += 5;
        reasons.push(`量增${ind.volumeRatio}倍(+5)`);
    }
    
    return { score: Math.min(score, 40), reasons };
}

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        stockData, 
        newsData, 
        calculateRSI, 
        calculateMACD, 
        calculateEMA, 
        calculateKDJ,
        checkMAStatus,
        evaluateEntrySignal
    };
}