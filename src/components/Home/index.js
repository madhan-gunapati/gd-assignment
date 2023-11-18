import {Component} from 'react'
import Header from '../Header';

import ProgressBar from "@asyrafhussin/react-progress-bar";

import './index.css'

// const Example = () => {
//   return <ProgressBar completed={60} />;
// };

import Footer  from '../Footer'

const ProductivityList = [

    {day:'Monday' , percentage:4},
    {day:'Tuesday' , percentage:92},
    {day:'Wednesday' , percentage:122},
    {day:'Thursday' , percentage:93},
    {day:'Friday' , percentage:89},
    {day:'Saturday' , percentage:98}
]

class Home extends Component{
    render(){
        return <div>
            <Header />

           <div>
            <p>Employee Productivity Dashboard</p>
            <ul>
                {
                    ProductivityList.map((item)=><li key={item.day} className='list-item'>
                        <p>Productivity on {item.day}</p>
                        <p>{item.percentage}%</p>
                        <ProgressBar completed={item.percentage} />
                    </li>)
                }
            </ul>
            
           </div>
            <Footer />
        </div>
    }
}

export default Home