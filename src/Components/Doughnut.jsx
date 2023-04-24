import { Chart, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement, 
    Tooltip,
    Legend
} from 'chart.js'
import numeral from 'numeral';


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const DoughnutComponent = (props) => {
    // setup 
    
  const meter = props.meter
  
  const goal = meter.goal
  const currentm = meter.meter 
  const meterresult = goal - currentm
  



    const data = {
        labels: false,
        datasets: [{
          label: 'Weekly Sales',
        //   data: [18, 12, 6, 9, 12, 3, 9],
          data: [currentm, meterresult],
          //data: [goal, currentm],
          backgroundColor: [
            'rgb(223 141 107)',
            // 'rgba(54, 162, 235, 0.2)',
            // 'rgba(255, 206, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)',
            'rgba(0 0 0)'
          ],
          borderColor: [
            '#df8d6b',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)',
            '#df8d6b'
          ],
          borderWidth: 1,
          needleValue: 10,
          cutout: '50%',
          circumference: 200,
          rotation: 260
        }]
      };

   
      // config 
      const config = {
        "type": "doughnut",
        plugins: {
          legend: {
            dispaly: false,
            labels: {
              font: {
                size: 16 // изменить значение на нужное вам
              }
            }
          }
        }
    }

    //const current = data.datasets[0].data[0]
    

    let str_current;
    
    const formula = currentm / 1000000;
    if (formula >= 1000) {
      str_current = currentm / 1000000000
      str_current = str_current.toFixed(1) + 'B';
      console.log(str_current); // выведет "1.0"
    } else if (formula < 1000){
      
      str_current = Math.trunc(formula) + 'M'
      
    } else {
      return;
    }
    console.log(str_current)
    let x = 1.80203649;

      const gaugeText = {
        id: 'gaugeText',
        beforeDatasetsDraw(chart, args, pluginOptions){
            const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;

            const xCenter = chart.getDatasetMeta(0).data[0].x;
            const yCenter = chart.getDatasetMeta(0).data[0].y;

            ctx.save();
            ctx.fillStyle = '#fff';
            //ctx.font = 'bold 30px sans-serif';
            ctx.font = '34px Montserrat'
            ctx.textAlign = 'center'  

            
            
            ctx.fillText(str_current, xCenter, yCenter + 15)
        }
      }
      
    return <>
       <div className='goal-block'>
        <p>Next goal 1.4 B</p>
        <Doughnut data={data} options={config} plugins ={ [gaugeText] }/>
       </div>
       {/* <div class="chartCard">
          <div class="chartBox">
            <canvas id="myChart"></canvas>
          </div>
        </div> */}
    </>
}

export default DoughnutComponent