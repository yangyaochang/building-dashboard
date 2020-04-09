import React, {Component} from 'react';
import Chart from '../../../node_modules/chart.js';


export default class BarChart extends Component {
    constructor(props) {
        super(props)
        this.barChartRef = React.createRef()
    }

    // Tha chart has to be created after the canvas element is rendered
    componentDidMount() {
        this.barChart = new Chart(this.barChartRef.current, {
            type: 'bar',
            data: {
                labels: this.props.data.map(d => d.label),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map(d => d.value),
                    backgroundColor: this.props.color
                }]
            }
        })
    }

    render() {
        return (
            // The canvas element containing the bar chart
            <canvas ref = {this.barChartRef}/>
        )
    }
}