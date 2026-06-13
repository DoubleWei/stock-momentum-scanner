/**
 * Stock Dashboard - Pure Vanilla JS Application
 * Technical Indicators + News Sentiment Analysis
 */

// ================================
// Stock Data (10+ Taiwan Stocks)
// ================================
const stockData = [
    {
        symbol: '2330',
        name: '台積電',
        price: 876,
        change: 2.34,
        techScore: 85,
        sentimentScore: 88,
        compositeScore: 86.2,
        confidence: 82,
        indicators: {
            ma5: 865,
            ma10: 852,
            ma20: 840,
            maStatus: 'bullish', // MA5 > MA10 > MA20
            k: 72,
            d: 65,
            kdStatus: 'golden_cross',
            macd: 12.5,
            macdSignal: 8.2,
            macdStatus: 'above_signal',
            rsi: 58,
            rsiStatus: 'neutral',
            volume: 15234,
            volumeChange: 18.5
        }
    },
    {
        symbol: '2454',
        name: '聯發科',
        price: 1245,
        change: -1.28,
        techScore: 72,
        sentimentScore: 75,
        compositeScore: 73.3,
        confidence: 68,
        indicators: {
            ma5: 1252,
            ma10: 1238,
            ma20: 1220,
            maStatus: 'bullish',
            k: 45,
            d: 48,
            kdStatus: 'oversold_recovery',
            macd: 5.2,
            macdSignal: 4.8,
            macdStatus: 'above_signal',
            rsi: 42,
            rsiStatus: 'oversold',
            volume: 8934,
            volumeChange: -5.2
        }
    },
    {
        symbol: '2881',
        name: '富邦金',
        price: 68.5,
        change: 0.88,
        techScore: 78,
        sentimentScore: 82,
        compositeScore: 79.7,
        confidence: 75,
        indicators: {
            ma5: 67.8,
            ma10: 67.2,
            ma20: 66.5,
            maStatus: 'bullish',
            k: 68,
            d: 62,
            kdStatus: 'bullish',
            macd: 0.85,
            macdSignal: 0.62,
            macdStatus: 'above_signal',
            rsi: 55,
            rsiStatus: 'neutral',
            volume: 12456,
            volumeChange: 12.3
        }
    },
    {
        symbol: '2891',
        name: '中信金',
        price: 32.4,
        change: 1.57,
        techScore: 82,
        sentimentScore: 79,
        compositeScore: 80.8,
        confidence: 78,
        indicators: {
            ma5: 31.9,
            ma10: 31.5,
            ma20: 31.0,
            maStatus: 'bullish',
            k: 75,
            d: 68,
            kdStatus: 'bullish',
            macd: 0.42,
            macdSignal: 0.28,
            macdStatus: 'above_signal',
            rsi: 62,
            rsiStatus: 'neutral',
            volume: 18723,
            volumeChange: 22.7
        }
    },
    {
        symbol: '2303',
        name: '鴻海',
        price: 198,
        change: 3.21,
        techScore: 88,
        sentimentScore: 85,
        compositeScore: 86.9,
        confidence: 84,
        indicators: {
            ma5: 192,
            ma10: 188,
            ma20: 185,
            maStatus: 'bullish',
            k: 78,
            d: 70,
            kdStatus: 'bullish',
            macd: 3.5,
            macdSignal: 2.8,
            macdStatus: 'above_signal',
            rsi: 65,
            rsiStatus: 'neutral',
            volume: 24567,
            volumeChange: 35.2
        }
    },
    {
        symbol: '3711',
        name: '日月光',
        price: 156,
        change: -0.64,
        techScore: 65,
        sentimentScore: 68,
        compositeScore: 66.2,
        confidence: 58,
        indicators: {
            ma5: 158,
            ma10: 157,
            ma20: 155,
            maStatus: 'mixed',
            k: 52,
            d: 54,
            kdStatus: 'neutral',
            macd: -0.5,
            macdSignal: -0.2,
            macdStatus: 'below_signal',
            rsi: 48,
            rsiStatus: 'neutral',
            volume: 6789,
            volumeChange: -8.4
        }
    },
    {
        symbol: '3474',
        name: '華碩',
        price: 428,
        change: 4.15,
        techScore: 91,
        sentimentScore: 87,
        compositeScore: 89.4,
        confidence: 88,
        indicators: {
            ma5: 415,
            ma10: 405,
            ma20: 395,
            maStatus: 'bullish',
            k: 82,
            d: 74,
            kdStatus: 'bullish',
            macd: 8.5,
            macdSignal: 6.2,
            macdStatus: 'above_signal',
            rsi: 68,
            rsiStatus: 'overbought',
            volume: 5678,
            volumeChange: 42.8
        }
    },
    {
        symbol: '1605',
        name: '華新',
        price: 28.6,
        change: 1.42,
        techScore: 76,
        sentimentScore: 72,
        compositeScore: 74.4,
        confidence: 70,
        indicators: {
            ma5: 28.1,
            ma10: 27.8,
            ma20: 27.4,
            maStatus: 'bullish',
            k: 65,
            d: 60,
            kdStatus: 'bullish',
            macd: 0.32,
            macdSignal: 0.18,
            macdStatus: 'above_signal',
            rsi: 54,
            rsiStatus: 'neutral',
            volume: 9876,
            volumeChange: 15.6
        }
    },
    {
        symbol: '2615',
        name: '萬海',
        price: 112,
        change: -2.18,
        techScore: 58,
        sentimentScore: 55,
        compositeScore: 56.8,
        confidence: 48,
        indicators: {
            ma5: 115,
            ma10: 116,
            ma20: 114,
            maStatus: 'bearish',
            k: 35,
            d: 42,
            kdStatus: 'death_cross',
            macd: -1.2,
            macdSignal: -0.8,
            macdStatus: 'below_signal',
            rsi: 38,
            rsiStatus: 'oversold',
            volume: 11234,
            volumeChange: -12.5
        }
    },
    {
        symbol: '3034',
        name: '聯詠',
        price: 568,
        change: 1.85,
        techScore: 80,
        sentimentScore: 78,
        compositeScore: 79.2,
        confidence: 76,
        indicators: {
            ma5: 558,
            ma10: 550,
            ma20: 542,
            maStatus: 'bullish',
            k: 70,
            d: 65,
            kdStatus: 'bullish',
            macd: 6.8,
            macdSignal: 5.2,
            macdStatus: 'above_signal',
            rsi: 60,
            rsiStatus: 'neutral',
            volume: 7654,
            volumeChange: 20.3
        }
    },
    {
        symbol: '2301',
        name: '光寶科',
        price: 98.5,
        change: 0.51,
        techScore: 70,
        sentimentScore: 65,
        compositeScore: 68.0,
        confidence: 62,
        indicators: {
            ma5: 97.8,
            ma10: 97.2,
            ma20: 96.5,
            maStatus: 'bullish',
            k: 58,
            d: 55,
            kdStatus: 'bullish',
            macd: 0.65,
            macdSignal: 0.45,
            macdStatus: 'above_signal',
            rsi: 52,
            rsiStatus: 'neutral',
            volume: 4567,
            volumeChange: 5.8
        }
    },
    {
        symbol: '2498',
        name: '宏達電',
        price: 52.3,
        change: -3.68,
        techScore: 42,
        sentimentScore: 38,
        compositeScore: 40.4,
        confidence: 32,
        indicators: {
            ma5: 55.2,
            ma10: 54.8,
            ma20: 53.5,
            maStatus: 'bearish',
            k: 25,
            d: 35,
            kdStatus: 'oversold',
            macd: -0.85,
            macdSignal: -0.55,
            macdStatus: 'below_signal',
            rsi: 32,
            rsiStatus: 'oversold',
            volume: 23456,
            volumeChange: -18.2
        }
    }
];

// ================================
// News Sentiment Data
// ================================
const newsData = [
    {
        id: 1,
        title: '台積電CoWoS產能利用率達90% AI晶片需求超預期',
        sentiment: 'positive',
        relatedStocks: ['2330', '2454'],
        time: '10:30',
        score: 85
    },
    {
        id: 2,
        title: '聯發科旗艦晶片出貨放量 預估Q3營收季增15%',
        sentiment: 'positive',
        relatedStocks: ['2454'],
        time: '09:45',
        score: 78
    },
    {
        id: 3,
        title: '富邦金去年EPS 4.2元 創歷史新高',
        sentiment: 'positive',
        relatedStocks: ['2881'],
        time: '08:30',
        score: 82
    },
    {
        id: 4,
        title: '鴻海AI伺服器訂單看增 法人調高目標價',
        sentiment: 'positive',
        relatedStocks: ['2303'],
        time: '11:15',
        score: 88
    },
    {
        id: 5,
        title: '華碩電競筆電市佔率突破25% 持續領先競爭對手',
        sentiment: 'positive',
        relatedStocks: ['3474'],
        time: '13:20',
        score: 80
    },
    {
        id: 6,
        title: '日月光面臨大陸成熟製程競爭 毛利率承壓',
        sentiment: 'negative',
        relatedStocks: ['3711'],
        time: '14:00',
        score: 35
    },
    {
        id: 7,
        title: '萬海運費下跌壓力浮現 歐洲線現貨價走低',
        sentiment: 'negative',
        relatedStocks: ['2615'],
        time: '14:30',
        score: 28
    },
    {
        id: 8,
        title: '聯詠驅動IC需求回溫 TDDI出貨放量',
        sentiment: 'positive',
        relatedStocks: ['3034'],
        time: '15:00',
        score: 72
    },
    {
        id: 9,
        title: '中信金併購話題持續發燒 法人買盤進駐',
        sentiment: 'positive',
        relatedStocks: ['2891'],
        time: '15:30',
        score: 76
    },
    {
        id: 10,
        title: '華新銅價支撐 線纜事業獲利看增',
        sentiment: 'positive',
        relatedStocks: ['1605'],
        time: '16:00',
        score: 68
    }
];

// ================================
// Chart Data (30 days of simulated price data)
// ================================
function generateChartData(basePrice, volatility = 0.02) {
    const dates = [];
    const close = [];
    const open = [];
    const high = [];
    const low = [];
    const volume = [];
    const ma5 = [];
    const ma10 = [];
    const ma20 = [];
    
    let price = basePrice * 0.9; // Start 10% lower
    const today = new Date();
    
    for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        dates.push(`${date.getMonth() + 1}/${date.getDate()}`);
        
        // Generate OHLC
        const change = (Math.random() - 0.45) * volatility * price;
        const openPrice = price;
        const closePrice = price + change;
        const highPrice = Math.max(openPrice, closePrice) * (1 + Math.random() * 0.01);
        const lowPrice = Math.min(openPrice, closePrice) * (1 - Math.random() * 0.01);
        
        open.push(openPrice);
        close.push(closePrice);
        high.push(highPrice);
        low.push(lowPrice);
        
        price = closePrice;
        
        // Volume with some randomness
        volume.push(Math.floor(5000 + Math.random() * 15000));
    }
    
    // Calculate MAs
    for (let i = 0; i < 30; i++) {
        const ma5Val = i < 4 ? null : close.slice(i - 4, i + 1).reduce((a, b) => a + b) / 5;
        const ma10Val = i < 9 ? null : close.slice(i - 9, i + 1).reduce((a, b) => a + b) / 10;
        const ma20Val = i < 19 ? null : close.slice(i - 19, i + 1).reduce((a, b) => a + b) / 20;
        
        ma5.push(ma5Val);
        ma10.push(ma10Val);
        ma20.push(ma20Val);
    }
    
    return { dates, open, high, low, close, volume, ma5, ma10, ma20 };
}

// Generate chart data for each stock
const chartDataMap = {};
stockData.forEach(stock => {
    chartDataMap[stock.symbol] = generateChartData(stock.price);
});

// ================================
// Application State
// ================================
const state = {
    currentStock: null,
    chart: null
};

// ================================
// DOM Ready Initialization
// ================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    updateTimestamp();
    renderDashboard();
    renderStockTable();
    renderNewsFeed();
    initStockSelector();
    initChart();
    
    // Update timestamp every second
    setInterval(updateTimestamp, 1000);
});

// ================================
// Navigation
// ================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// ================================
// Timestamp
// ================================
function updateTimestamp() {
    const el = document.getElementById('updateTime');
    if (el) {
        el.textContent = new Date().toLocaleTimeString('zh-TW');
    }
}

// ================================
// Dashboard Statistics
// ================================
function renderDashboard() {
    const gainers = stockData.filter(s => s.change > 0).length;
    const losers = stockData.filter(s => s.change < 0).length;
    const buySignals = stockData.filter(s => s.compositeScore > 70).length;
    const avgConfidence = Math.round(stockData.reduce((sum, s) => sum + s.confidence, 0) / stockData.length);
    
    document.getElementById('gainers').textContent = gainers;
    document.getElementById('losers').textContent = losers;
    document.getElementById('buySignals').textContent = buySignals;
    document.getElementById('avgConfidence').textContent = avgConfidence + '%';
}

// ================================
// Stock Table
// ================================
function renderStockTable() {
    const tbody = document.getElementById('stockTableBody');
    const sortedStocks = [...stockData].sort((a, b) => b.compositeScore - a.compositeScore);
    
    tbody.innerHTML = sortedStocks.map((stock, index) => {
        const changeClass = stock.change >= 0 ? 'change-positive' : 'change-negative';
        const changeIcon = stock.change >= 0 ? '↑' : '↓';
        
        return `
            <tr data-symbol="${stock.symbol}">
                <td><span class="rank-badge">${index + 1}</span></td>
                <td><span class="stock-symbol">${stock.symbol}</span></td>
                <td>${stock.name}</td>
                <td class="stock-price">${stock.price.toFixed(2)}</td>
                <td>
                    <span class="${changeClass}">
                        ${changeIcon} ${Math.abs(stock.change).toFixed(2)}%
                    </span>
                </td>
                <td><span class="score-badge tech">${stock.techScore}</span></td>
                <td><span class="score-badge sentiment">${stock.sentimentScore}</span></td>
                <td><span class="score-badge composite">${stock.compositeScore.toFixed(1)}</span></td>
                <td class="confidence-cell">
                    <div class="confidence-bar">
                        <div class="confidence-bar__track">
                            <div class="confidence-bar__fill" style="width: ${stock.confidence}%"></div>
                        </div>
                        <span class="confidence-bar__value">${stock.confidence}%</span>
                    </div>
                </td>
                <td>
                    <button class="btn-analysis" onclick="selectStock('${stock.symbol}')">
                        <i class="icon-chart"></i>
                        <span>分析</span>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// ================================
// Stock Selector
// ================================
function initStockSelector() {
    const selector = document.getElementById('stockSelector');
    if (!selector) return;
    
    stockData.forEach(stock => {
        const option = document.createElement('option');
        option.value = stock.symbol;
        option.textContent = `${stock.symbol} ${stock.name}`;
        selector.appendChild(option);
    });
    
    selector.addEventListener('change', function() {
        if (this.value) {
            selectStock(this.value);
        }
    });
}

// ================================
// Select Stock
// ================================
function selectStock(symbol) {
    state.currentStock = stockData.find(s => s.symbol === symbol);
    if (!state.currentStock) return;
    
    // Update selector
    const selector = document.getElementById('stockSelector');
    if (selector) selector.value = symbol;
    
    // Update chart title
    const chartTitle = document.getElementById('chartTitle');
    if (chartTitle) {
        chartTitle.textContent = `${symbol} ${state.currentStock.name} K線圖`;
    }
    
    // Update chart
    updateChart(symbol);
    
    // Scroll to chart
    const chartSection = document.getElementById('chart');
    if (chartSection) {
        chartSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ================================
// News Feed
// ================================
function renderNewsFeed() {
    const container = document.getElementById('newsFeed');
    if (!container) return;
    
    container.innerHTML = newsData.map(news => {
        const sentimentClass = news.sentiment;
        const sentimentLabel = news.sentiment === 'positive' ? '利多' : 
                              news.sentiment === 'negative' ? '利空' : '中性';
        const sentimentIcon = news.sentiment === 'positive' ? '↑' : 
                             news.sentiment === 'negative' ? '↓' : '—';
        
        return `
            <div class="news-item ${sentimentClass}">
                <div class="news-item__header">
                    <span class="news-item__sentiment">
                        ${sentimentIcon} ${sentimentLabel} (${news.score})
                    </span>
                    <span class="news-item__time">${news.time}</span>
                </div>
                <p class="news-item__title">${news.title}</p>
                <span class="news-item__stocks">相關: ${news.relatedStocks.join(', ')}</span>
            </div>
        `;
    }).join('');
}

// ================================
// Chart Initialization
// ================================
function initChart() {
    const canvas = document.getElementById('klineChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    state.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: '收盤價',
                    data: [],
                    borderColor: '#2962ff',
                    backgroundColor: 'rgba(41, 98, 255, 0.1)',
                    fill: true,
                    tension: 0.1,
                    pointRadius: 0,
                    pointHoverRadius: 4,
                    borderWidth: 2
                },
                {
                    label: 'MA5',
                    data: [],
                    borderColor: '#00bcd4',
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.1,
                    pointRadius: 0,
                    borderWidth: 1.5
                },
                {
                    label: 'MA10',
                    data: [],
                    borderColor: '#e3a507',
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.1,
                    pointRadius: 0,
                    borderWidth: 1.5
                },
                {
                    label: 'MA20',
                    data: [],
                    borderColor: '#7b61ff',
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.1,
                    pointRadius: 0,
                    borderWidth: 1.5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1e222d',
                    titleColor: '#d1d4dc',
                    bodyColor: '#d1d4dc',
                    borderColor: '#2a2e39',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(42, 46, 57, 0.5)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#787b86',
                        maxRotation: 0,
                        maxTicksLimit: 8
                    }
                },
                y: {
                    position: 'right',
                    grid: {
                        color: 'rgba(42, 46, 57, 0.5)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#787b86'
                    }
                }
            }
        }
    });
}

// ================================
// Update Chart
// ================================
function updateChart(symbol) {
    if (!state.chart) return;
    
    const data = chartDataMap[symbol];
    if (!data) return;
    
    state.chart.data.labels = data.dates;
    state.chart.data.datasets[0].data = data.close;
    state.chart.data.datasets[1].data = data.ma5;
    state.chart.data.datasets[2].data = data.ma10;
    state.chart.data.datasets[3].data = data.ma20;
    state.chart.update();
}

// ================================
// Utility Functions
// ================================
function formatNumber(num) {
    return num.toLocaleString('zh-TW');
}

// Make selectStock globally available
window.selectStock = selectStock;