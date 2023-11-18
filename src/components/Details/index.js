import { Component } from "react";

import Header from "../Header";

import Footer from "../Footer";

import './index.css'

const EmployeeDetails = [
    {
        'EMP ID': 1,
        'Name' : 'Arjun',
        'DOB' : '16-11-2000',
        'Role': 'Software Engineer'
    },
    {
        'EMP ID': 2,
        'Name' : 'Mahesh',
        'DOB' : '15-01-2000',
        'Role': 'Web Developer'
    },
    {
        'EMP ID': 3,
        'Name' : 'Ravi',
        'DOB' : '25-01-2002',
        'Role': 'Accountant'
    },
    {
        'EMP ID': 4,
        'Name' : 'Siva',
        'DOB' : '5-12-2001',
        'Role': 'Junior Developer'
    },
    {
        'EMP ID': 5,
        'Name' : 'Srinu',
        'DOB' : '13-05-2000',
        'Role': 'Attender'
    },
    {
        'EMP ID': 6,
        'Name' : 'Murthy',
        'DOB' : '2-04-1995',
        'Role': 'Manager'
    },
    {
        'EMP ID': 7,
        'Name' : 'Pavan',
        'DOB' : '11-07-2001',
        'Role': 'Developer'
    },
]

class Details extends Component{
        state={inputValue:'' , list:EmployeeDetails}

        changeInput = (e)=>{
            
                    const val = e.target.value 
                    function finder(item){
                            const name = item['Name'].toLowerCase()
                            return name.includes(val)
                                          }

                    const newList = EmployeeDetails.filter(finder)
            
                    this.setState({inputValue:e.target.value , list:newList})
                            }

    render(){
        const {inputValue , list} = this.state
        return <div>
                    <Header />
                    <input type='search' placeholder="Search with name" value={inputValue} onChange={this.changeInput} />
                     <ul>
                       {
                         list.map((item)=><li key={item['EMP ID']} className="list-item m-2 bg-dark text-white p-2 rounded d-flex flex-row justify-content-between">
                        <p className="order-1">{item['EMP ID']}</p>
                        <div className="order-0">
                        <p>EMP ID : {item['EMP ID']}</p>
                        <p>NAME : {item.Name}</p>
                        <p>DOB : {item.DOB}</p>
                        <p>Role : {item.Role}</p>
                        </div>
                         </li>)
                       }
                     </ul>
                     <Footer />
                </div>
    }
}

export default Details