import {Link} from 'react-router-dom'

import { FaHome } from "react-icons/fa";

import { IoMdPerson } from "react-icons/io";

import './index.css'

const Footer = ()=> <div className='d-flex flex-row justify-content-around align-items-center fixed-bottom footer-container'>
    <Link  to='/' ><FaHome  style={{ opacity: 0.5 }} color='#36A546' size={28} /></Link>
    <Link to='/details' ><IoMdPerson  style={{ opacity: 0.5 }} color='#36A546' size={28} /></Link>
</div>

export default Footer