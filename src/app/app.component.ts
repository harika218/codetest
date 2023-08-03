import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Angular test';
//   colors:any[] = [
//     {
//     name:'Red',
//     hexName:'#FF0000'
//   },
//   {
//     name:'Green',
//     hexName:'#008000'
//   },
//   {
//     name:'Purple',
//     hexName:'#800080'
//   },
//   {
//     name:'Yellow',
//     hexName:'#FFFF00'
//   },
//   {
//     name:'Blue',
//     hexName:' #0000FF'
//   },
//   {
//     name:'Grey',
//     hexName:'#808080'
//   },
//   {
//     name:'Orange',
//     hexName:'#FFA500'
//   },
// ]

// chartTypes:any[] = ["Bar", "Pie", "Line"]
//   chartOptions!: Highcharts.Options;
//   revenueData :any[] = [];
//   revenue:any={};
//   selectedChartType:string = '';
//   chart: Highcharts.Chart | undefined;
//   constructor(){

//   }

//   generateChart(form:NgForm) {
//     if(form.valid){
//       this.revenue = form.value;
//       this.createFromData()
//       console.log(`Form Data ${this.revenueData}`);
//       this.chart?.destroy();
//       this.createChart()

//     }else{
//       alert("Please fill out the required fields correcly");
//     }
    
    
//   }

//   createChart(){
//     switch(this.selectedChartType){
//       case 'Bar': this.createBarChart(); 
//                 break;
//        case 'Pie': this.createPieChart();
//                   break;

//       case 'Line': this.createLineChart();
//                     break;
//     }

    
//   }

//   createLineChart(){
    
//       this.chart = Highcharts.chart('chartContainer',{
//         chart: {
//           type: 'line',
//         },
//         title: {
//           text: 'Market Qtr Report',
//         },
//         xAxis: {
//           title:{
//             text:'',
//           },
//           categories: this.revenueData.map((data) => data.month),
//         },
//         yAxis: {
//           title: {
//             text: 'Select Monthly revenue',
//           },
//         },
//         series:[{
//           type:'line',
//           name:'Color',
//           data:this.revenueData.map((data) => data.revenue),
          
//         }]
//       })
//   }

//   createPieChart(){
//     const seriesPieData = this.revenueData.map(item =>({
//       name:item.month,
//       y:item.revenue,
//       color:item.color
//     }))
//       this.chart = Highcharts.chart('chartContainer', {
//         chart: {
//           type: 'pie'
//         },
//         title: {
//           text: 'Market Qtr Report'
//         },
//         series:[{
//           type:'pie',
//           name: 'Color',
//           data:seriesPieData
//         }]
//       })
//   }

//   createBarChart(){
//     const selectedColors = this.revenueData.map(data => data.color);
//     this.chart = Highcharts.chart('chartContainer', {
//       chart: {
//         type: 'column',
//       },
//       title: {
//         text: 'Market Qtr Report'
//       },
//       xAxis: {
//         categories: this.revenueData.map(data => data.month)
//       },
//       yAxis: {
//         title: {
//           text: 'Select monthly revenue'
//         }
//       },
//        plotOptions: {
//         bar: {
//           colorByPoint: true,
//         },
//       },
//       series: [{
//         type:'column',
//         name: 'Color',
//         data: this.revenueData.map(data => data.revenue),
//         colors:this.revenueData.map(data =>data.color)
//       }]
//     });
//   }


//   createFromData(){
//      this.revenueData = [
//       {
//         month : "January",
//         revenue:this.revenue.januaryRevenue,
//         color:this.revenue.januaryColor,
        
//       },
//       {
//         month : "February",
//         revenue:this.revenue.februaryRevenue,
//         color:this.revenue.februaryColor,
//       },
//       {
//         month : "March",
//         revenue:this.revenue.marchRevenue,
//         color:this.revenue.marchColor
//       }

//     ]
//     this.selectedChartType = this.revenue.chartType;
    
//   }

  NavigateToMaps(){

  }
  
}
