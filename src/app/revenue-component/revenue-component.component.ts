import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-revenue-component',
  templateUrl: './revenue-component.component.html',
  styleUrls: ['./revenue-component.component.css']
})
export class RevenueComponentComponent implements OnInit{
  colors:any[] = [
    {
    name:'Red',
    hexName:'#FF0000'
  },
  {
    name:'Green',
    hexName:'#008000'
  },
  {
    name:'Purple',
    hexName:'#800080'
  },
  {
    name:'Yellow',
    hexName:'#FFFF00'
  },
  {
    name:'Blue',
    hexName:' #0000FF'
  },
  {
    name:'Grey',
    hexName:'#808080'
  },
  {
    name:'Orange',
    hexName:'#FFA500'
  },
]


chartTypes:any[] = ["Bar", "Pie", "Line"]
  chartOptions!: Highcharts.Options;
  revenueData :any[] = [];
  formData:any={};
  selectedChartType:string = '';
  chart: Highcharts.Chart | undefined;
  constructor(){

  }

  ngOnInit(): void {
    this.formData.januaryRevenue = 500;
    this.formData.februaryRevenue = 1000;
    this.formData.marchRevenue = 1500;
    this.formData.januaryColor = "#FFA500";
    this.formData.februaryColor = "#FFA500";
    this.formData.marchColor = "#FFA500";
    this.formData.chartType = 'Bar'
    this.createFromData();
    this.createBarChart();
  }

  generateChart(form:NgForm) {
    if(form.valid){
      this.createFromData()
      console.log(`Form Data ${this.revenueData}`);
      this.chart?.destroy();
      this.createChart()

    }else{
      alert("Please fill out the required fields correcly");
    }
    
    
  }

  createChart(){
    switch(this.selectedChartType){
      case 'Bar': this.createBarChart(); 
                break;
       case 'Pie': this.createPieChart();
                  break;

      case 'Line': this.createLineChart();
                    break;
    }

    
  }

  createLineChart(){
    
      this.chart = Highcharts.chart('chartContainer',{
        chart: {
          type: 'line',
        },
        title: {
          text: 'Market Qtr Report',
        },
        xAxis: {
          title:{
            text:'',
          },
          categories: this.revenueData.map((data) => data.month),
        },
        yAxis: {
          title: {
            text: 'Select Monthly revenue',
          },
        },
        series:[{
          type:'line',
          name:'Color',
          data:this.revenueData.map((item) =>( {y:item.revenue, color:item.color})),
          
        }]
      })
  }

  createPieChart(){
    const seriesPieData = this.revenueData.map(item =>({
      name:item.month,
      y:item.revenue,
      color:item.color
    }))
      this.chart = Highcharts.chart('chartContainer', {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Market Qtr Report'
        },
        series:[{
          type:'pie',
          name: 'Color',
          data:seriesPieData
        }]
      })
  }

  createBarChart(){
    this.chart = Highcharts.chart('chartContainer', {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Market Qtr Report'
      },
      xAxis: {
        categories: this.revenueData.map(data => data.month)
      },
      yAxis: {
        title: {
          text: 'Select monthly revenue'
        }
      },
       plotOptions: {
        bar: {
          colorByPoint: true,
        },
      },
      series: [{
        type:'column',
        name: 'Color',
        data: this.revenueData.map(item => ({ y:item.revenue , color: item.color}))
        
      }]
    });
  }


  createFromData(){
     this.revenueData = [
      {
        month : "January",
        revenue:this.formData.januaryRevenue,
        color:this.formData.januaryColor,
        
      },
      {
        month : "February",
        revenue:this.formData.februaryRevenue,
        color:this.formData.februaryColor,
      },
      {
        month : "March",
        revenue:this.formData.marchRevenue,
        color:this.formData.marchColor
      }

    ]
    this.selectedChartType = this.formData.chartType;
    
  }
}
