Highcharts.chart('column_container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Strawberries', 'Peaches', 'Papayas', 'Passion Fruit', 'Achachairú']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Colin Jorgensen',
        data: [4, 5, 3, 9, 12]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});