import {Component} from 'react'
import Header from '../Header';

import ProgressBar from "@asyrafhussin/react-progress-bar";

import './index.css'


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
        return <div className='home-container'>
            <Header />

           <div className='container'>
            <h1 className='homepage-heading'>Employee Productivity Dashboard</h1>
            <ul className='progressbar-container'>
                {
                    ProductivityList.map((item)=><li key={item.day} className='list-item d-flex flex-row justify-content-between '>
                       <div>
                        <p className='li-text'>Productivity on {item.day}</p>
                        <ProgressBar completed={item.percentage} height={11} bgColor='#36A546' baseBgColor='#5E5E5E82' isLabelVisible={false} />
                        </div>
                        <p className='li-percentage'>{item.percentage}%</p>
                        
                    </li>)
                }
            </ul>
            
           </div>
            <Footer />
        </div>
    }
}

export default Home