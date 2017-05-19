var Script = function () {

    //morris chart

    $(function () {
      // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
      var tax_data = [
           {"period": "2011 Q3", "Users Before Rizzmi": 4007, "Rizzmi Users": 660},
           {"period": "2011 Q2", "Users Before Rizzmi": 3551, "Rizzmi Users": 629},
           {"period": "2011 Q1", "Users Before Rizzmi": 3369, "Rizzmi Users": 618},
           {"period": "2010 Q4", "Users Before Rizzmi": 3246, "Rizzmi Users": 661},
           {"period": "2009 Q4", "Users Before Rizzmi": 3171, "Rizzmi Users": 676},
           {"period": "2008 Q4", "Users Before Rizzmi": 3155, "Rizzmi Users": 681},
           {"period": "2007 Q4", "Users Before Rizzmi": 3226, "Rizzmi Users": 620},
           {"period": "2006 Q4", "Users Before Rizzmi": null, "Rizzmi Users": 610},
           {"period": "2005 Q4", "Users Before Rizzmi": null, "Rizzmi Users": 600}
      ];
      Morris.Line({
        element: 'hero-graph',
        data: tax_data,
        xkey: 'period',
        ykeys: ['Users Before Rizzmi', 'Rizzmi Users'],
        labels: ['Rizzmi users', 'Non-Rizzmi users'],
        lineColors:['#4ECDC4','#ed5565']
      });

      Morris.Donut({
        element: 'hero-donut',
        data: [
          {label: 'Programmers', value: 25 },
          {label: 'Engineers', value: 40 },
          {label: 'Designers', value: 25 },
          {label: 'Lawyers', value: 10 }
        ],
          colors: ['#3498db', '#2980b9', '#34495e'],
        formatter: function (y) { return y + "%" }
      });

      Morris.Area({
        element: 'hero-area',
        data: [
          {period: '2010 Q1', Marketing: 2666, SocialMedia: null, Music: 2647},
          {period: '2010 Q2', Marketing: 2778, SocialMedia: 2294, Music: 2441},
          {period: '2010 Q3', Marketing: 4912, SocialMedia: 1969, Music: 2501},
          {period: '2010 Q4', Marketing: 3767, SocialMedia: 3597, Music: 5689},
          {period: '2011 Q1', Marketing: 6810, SocialMedia: 1914, Music: 2293},
          {period: '2011 Q2', Marketing: 5670, SocialMedia: 4293, Music: 1881},
          {period: '2011 Q3', Marketing: 4820, SocialMedia: 3795, Music: 1588},
          {period: '2011 Q4', Marketing: 15073, SocialMedia: 5967, Music: 5175},
          {period: '2012 Q1', Marketing: 10687, SocialMedia: 4460, Music: 2028},
          {period: '2012 Q2', Marketing: 8432, SocialMedia: 5713, Music: 1791}
        ],

          xkey: 'period',
          ykeys: ['Marketing', 'SocialMedia', 'Music'],
          labels: ['Marketing', 'Social Media', 'Music'],
          hideHover: 'auto',
          lineWidth: 1,
          pointSize: 5,
          lineColors: ['#4a8bc2', '#ff6c60', '#a9d86e'],
          fillOpacity: 0.5,
          smooth: true
      });

      Morris.Bar({
        element: 'hero-bar',
        data: [
          {device: '2014 Q1', NewEnrollments: 136},
          {device: '2014 Q2', NewEnrollments: 137},
          {device: '2014 Q3', NewEnrollments: 275},
          {device: '2014 Q4', NewEnrollments: 380},
          {device: '2015 Q1', NewEnrollments: 655},
          {device: '2016 Q2', NewEnrollments: 1571}
        ],
        xkey: 'device',
        ykeys: ['NewEnrollments'],
        labels: ['New Enrollments'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        barColors: ['#ac92ec']
      });

      new Morris.Line({
        element: 'examplefirst',
        xkey: 'year',
        ykeys: ['value'],
        labels: ['Value'],
        data: [
          {year: '2008', value: 20},
          {year: '2009', value: 10},
          {year: '2010', value: 5},
          {year: '2011', value: 5},
          {year: '2012', value: 20}
        ]
      });

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();




