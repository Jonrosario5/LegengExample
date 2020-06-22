let jon = {
    testing:function(){
           console.log("Hi")
           let chart = Highcharts.charts[0]
           chart.update({
               series:[{
                   color:"red"
               }]
           })

    }
}
