let jon = {
    testing:function(){
        setTimeout(function() {
           let chart = Highcharts.charts[0]
           chart.update({
               series:[{
                   color:"red"
               }]
           })
            },100);
    }
}
