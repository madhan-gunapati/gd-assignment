import {Link} from 'react-router-dom'

import Cookies from 'js-cookies'



const NotFound = ()=>
<div className='d-flex flex-column justify-content-center align-items-center'>
<p>The page you are looking for is not found</p>
<Link to='/login'><button type='button'>go Back</button></Link>

</div>


export default NotFound