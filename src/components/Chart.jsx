import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const options = {
    plugins:{
        legend: {
            position: 'left'
        },
        title:{
            display: true,
            text: "Service Plan"
        },
    }
}
const labels = [ 'Parts', 'Fluids', 'Labour', 'Sundries', 'Total']
const data = {
    labels,
    datasets : [
        {
            label : '15 000 km',
            data : [162,684.8,616,267,1729.8],
            backgroundColor: '#bf2222'
        },
        {
            label : '30 000 km',
            data : [531.5,943.3,1496,267,3237.8],
            backgroundColor: 'grey'
        },
    ]
}
function Charts() {
    
    return(
        <div className="Chart">
            <Bar options={options} data={data}/>
        </div>
    )
}

export default Charts;