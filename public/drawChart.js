// adapted from the highcharts example located at:
// https://www.highcharts.com/demo/stock/stock-tools-gui

function drawChart(symbol, data) {
    var symbolUp = symbol.toUpperCase();

    // split the data set into ohlc and volume
    var ohlc = [],
        volume = [];

    for (var i = 0; i < data.length; i += 1) {
        var date = new Date(data[i].Date);

        ohlc.push([
            date.getTime(),
            Number(data[i].Open), // open
            Number(data[i].High), // high
            Number(data[i].Low), // low
            Number(data[i].Close) // close
        ]);

        volume.push([
            date.getTime(),
            Number(data[i].Volume) // the volume
        ]);
    }

    Highcharts.stockChart('container', {
        yAxis: [{
            labels: {
                align: 'left'
            },
            height: '80%',
            resize: {
                enabled: true
            }
        }, {
            labels: {
                align: 'left'
            },
            top: '80%',
            height: '20%',
            offset: 0
        }],
        tooltip: {
            shape: 'square',
            headerShape: 'callout',
            borderWidth: 0,
            shadow: false,
            positioner: function (width, height, point) {
                var chart = this.chart,
                    position;

                if (point.isHeader) {
                    position = {
                        x: Math.max(
                            // Left side limit
                            chart.plotLeft,
                            Math.min(
                                point.plotX + chart.plotLeft - width / 2,
                                // Right side limit
                                chart.chartWidth - width - chart.marginRight
                            )
                        ),
                        y: point.plotY
                    };
                } else {
                    position = {
                        x: point.series.chart.plotLeft,
                        y: point.series.yAxis.top - chart.plotTop
                    };
                }

                return position;
            }
        },
        series: [{
            type: 'ohlc',
            id: `${symbol}-ohlc`,
            name: `${symbolUp} Stock Price`,
            data: ohlc
        }, {
            type: 'column',
            id: `${symbol}-volume`,
            name: `${symbolUp} Volume`,
            data: volume,
            yAxis: 1
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 800
                },
                chartOptions: {
                    rangeSelector: {
                        inputEnabled: false
                    }
                }
            }]
        }
    });
}
