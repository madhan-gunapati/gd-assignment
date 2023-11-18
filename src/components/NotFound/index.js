import {Link} from 'react-router-dom'

import Cookies from 'js-cookies'



const NotFound = ()=>
<div>
<p>The page you are looking for is not found</p>
<Link to='/login'><button type='button'>go Back</button></Link>

</div>


export default NotFound