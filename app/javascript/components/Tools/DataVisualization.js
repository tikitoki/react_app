import React from 'react'
import Chart from "chart.js"
import InputForm from "../InputForm"



export default class DataVisualization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xlabels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            ydatas: [12, 19, 3, 5, 2, 3],
            ifShowWarning: [false, false, false, false, false, false],
            chartType: "bar",
            currentChart:null
        };
    }

    handelChangex = (index, e) => {
        // console.log(e);
        // console.log(e.target.value);
        let temparray = this.state.xlabels;
        temparray[index] = e.target.value;
        this.setState({ xlabels: temparray });
        console.log(this.state.xlabels);
        this.updateChart(this.state.chartType);
    }

    setWarning(index, judge) {
        let temparray = this.state.ifShowWarning;
        temparray[index] = judge;
        this.setState({ ifShowWarning: temparray });
    }

    handelChangey = (index, e) => {
        // console.log("here1" + parseFloat(e.target.value));
        let temparray = this.state.ydatas;
        temparray[index] = e.target.value;
        this.setState({ ydatas: temparray });
        this.setWarning(index, false);
        if (parseFloat(e.target.value)) {
            this.updateChart(this.state.chartType);
        }
        else {
            // console.log("here");
            // console.log(temparray);
            this.setWarning(index, true);
        }
    }

    handleChartType = (chartType) => {
        this.setState({ chartType: chartType });
        let temp_chartType = "bar";
        if (!!chartType) {
            temp_chartType = chartType;
        }
        else {
            temp_chartType = "bar";
        }
        // console.log(chartType);
        this.updateChart(temp_chartType);
    }

    chartRef = React.createRef();

    updateChart(chartType) {
        // console.log(this.chartRef);
        // console.log(this.chartRef.current);
        // console.log(!!this.state.currentChart);
        // console.log(this.state.currentChart);
        //每次rerender的时候destroy，解决图表遗留
        if (this.state.currentChart){
            this.state.currentChart.destroy();
        }
        
        var ctx = this.chartRef.current.getContext('2d');
        var currentChart=new Chart(ctx, {
            type: chartType,
            data: {
                labels: this.state.xlabels,
                datasets: [{
                    label: '# of Votes',
                    data: this.state.ydatas,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        this.setState({currentChart:currentChart});
        console.log(currentChart);
    }

    componentDidMount() {
        // console.log(parseFloat("aaa") == NaN);
        this.updateChart("bar");
    }

    render() {
        return (
            <div className="route-page row" id="data-visual-canvas">
                
                <div className="x-input col-sm-6">
                <p>横轴</p>
                    {this.state.xlabels.map((xlabel, index) => (
                        <div>
                            <InputForm key={index} maxLength={12} showWarning={false} value={xlabel} onChangeFunction={(e) => this.handelChangex(index, e)} />
                        </div>

                    ))}
                </div>
                <div className="y-input col-sm-6">
                <p>纵轴</p>
                    {this.state.ydatas.map((ydata, index) => (
                        // <input form="text" value={ydata} onChange={(e) => this.handelChangey(index, e)}></input>
                        <InputForm key={index+this.state.xlabels.length} maxLength={12} showWarning={this.state.ifShowWarning[index]} value={ydata} onChangeFunction={(e) => this.handelChangey(index, e)} />
                    ))}
                </div>
                <div className="row">
                    <div className="col-md-2 chart-type-container">
                        <button className="chart-type-btn btn" onClick={() => this.handleChartType("bar")}>柱状图</button>
                        <button className="chart-type-btn btn" onClick={() => this.handleChartType("line")}>折线图</button>
                        <button className="chart-type-btn btn" onClick={() => this.handleChartType("pie")}>饼图</button>
                    </div>
                    <div className="col-md-10">
                    <canvas id='myChart' ref={this.chartRef} />
                    </div>
                </div>
            </div>


        )
    };
}
