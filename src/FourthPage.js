import BurgerFlex from'./images/burger_img.png'

const FourthPage=()=>{

return(
<div className='container-fluid' style={{margin:'60px 0px'}}  >
<div className='container' style={{padding:'0px 0px 0px 20px',boxShadow:'2px 3px 2px 3px #c0b8aa'}}>
<div className='row'>
 <div className='col-md-6 col-sm-12'><span className='gl-Discover'>DISCOVER</span><h1 className='gl-upcomingevents'>UPCOMING EVENTS</h1><p className='gl-fourptag'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted</p><div className='gl-divdots'><div className='gl-onedot'></div><div className='gl-twodots'></div><div className='gl-twodots'></div></div></div> 
 <div className='col-md-6 col-sm-12'><img style={{width:'80%',height:'80%'}} src={BurgerFlex} alt='burgerimg'/></div>  
</div>

</div>
</div>

);


}
export default FourthPage;