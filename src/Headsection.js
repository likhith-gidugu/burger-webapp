 import logo from './images/logo.png'
 const Headersec=()=>{

return(
<div className='container-fluid 'style={{backgroundColor:'#e8b049',color:'rgb(48, 5, 5)'}}>

<div className='container '>

<div className='row'>

<nav className='navbar navbar-expand-lg'>
<a href='#' className='navbar-brand'><img style={{width:'60%'}}src={logo} alt='logo'/></a>
<p>EXPRESS DELIVERY +123456</p> 
<button className='navbar-toggler' data-bs-target='#navigation' data-bs-toggle='collapse'><span class='navbar-toggler-icon'></span></button>

<div className='collapse navbar-collapse' id='navigation'>

<ul className='navbar-nav'>
<li className='nav-item'><p className='nav-link'>home </p></li>
<li clasName='nav-item'><p  className='nav-link'>menu</p></li>
<li className='nav-item'><p className='nav-link'>gallery </p></li>
<li className='nav-item'><p className='nav-link'>help </p></li>
</ul>


</div>


</nav>
</div>
</div>


</div>


);


}
export default Headersec;