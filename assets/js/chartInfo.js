$(document).ready(function ($) {
  let chart;
  let legend;
  let chartData = [
      {
          'section': 'Pre-Sale',
          'value': 35 * 1000,
          'color': '#b16060'
      },
      {
          'section': 'Token-Sale',
          'value': 52 * 1000,
          'color': '#a90e0e'
      },
      {
          'section': 'Bonus',
          'value': 3 * 1000,
          'color': '#844848'
      },
      {
          'section': 'Bounty',
          'value': 4 * 1000,
          'color': '#847548'
      },
      {
          'section': 'Team',
          'value': 6 * 1000,
          'color': '#b5973f'
      }
  ];

  chart = new AmCharts.AmPieChart();
            chart.dataProvider = chartData;
            chart.titleField = 'section';
            chart.valueField = 'value';
            chart.colorField = 'color';
            chart.outlineColor = '#FFF';
            chart.outlineAlpha = 0;
            chart.outlineThickness = 0;
            chart.balloonText = "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
            chart.gradientRatio = [0.25, -0.25];
            chart.fontFamily = 'Roboto';
            chart.fontSize = '14';
            chart.responsive = { enabled: true };
            chart.depth3D = 15;
            chart.angle = 30;
            chart.write('token-chart');
});
