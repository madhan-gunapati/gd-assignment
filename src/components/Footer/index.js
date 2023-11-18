import {Link} from 'react-router-dom'

const Footer = ()=> <div className='d-flex flex-row justify-content-around fixed-bottom pb-2 bg-dark'>
    <Link  to='/' >Home</Link>
    <Link to='/details' >Details</Link>
</div>

export default Footer