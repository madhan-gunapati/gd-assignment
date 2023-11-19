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
            
                    let val = e.target.value 
                    val = val.toLowerCase()
                    function finder(item){
                            const name = item['Name'].toLowerCase()
                            return name.includes(val)
                                          }

                    const newList = EmployeeDetails.filter(finder)
            
                    this.setState({inputValue:e.target.value , list:newList})
                            }

    render(){
        const {inputValue , list} = this.state
        return <div className="details-container">
                    <Header />
                    <div className="d-flex flex-column align-items-center">
                    <input type='search' className="search-bar" placeholder="Search with name" value={inputValue} onChange={this.changeInput} />
                    </div>
                    {list.length ===0 ? <p className="text-light m-5 text-center">No Employees Found</p>:
                     <ul className="card-container d-flex flex-column align-items-center">
                       {
                         list.map((item)=><li key={item['EMP ID']} className={`list-item  d-flex flex-row justify-content-between ${item['EMP ID'] % 2 ===0 ? 'list-item-left' : ''}`}>
                        <p className="order-1 card-number">{item['EMP ID']}</p>
                        <div className="order-0">
                        <p>EMP ID : {item['EMP ID']}</p>
                        <p>NAME : {item.Name}</p>
                        <p>DOB :<span style={{color:'#ad3a17'}}> {item.DOB}</span></p>
                        <p >Role : <span className="text-success">{item.Role}</span></p>
                        </div>
                         </li>)
                       }
                     </ul>
    }
                     <Footer />
                </div>
    }
}

export default Details