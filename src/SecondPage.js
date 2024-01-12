import Most from './images/mockupburgerss_bg.jpg';
import MoreFunMoreTaste from './images/mockuprs.jpg';
import FreshandChilli     from './images/mockupfc_bg.jpg'

const SecondPage=()=>{

return(
<div className='container'>
<div className='row'>
<div className='col-md-6 col-sm-12 leftsideimg'><img style={{width:'100%'}}src={Most} alt='mostPopularBurger'/> </div>
<div className='col-md-6 col-sm-12 '><img  style={{width:'100%',height:'46.3%'}} className=''src={MoreFunMoreTaste} alt='morefunmoretaste'/><img style={{width:'100%',height:'44%'}}src={FreshandChilli} alt='FreshandChill'/></div>
</div>
<div style={{textAlign:'center'}} ><button className='btn altb-butn' >ALWAYS TASTY BURGER</button></div>

</div>

);


}
export default SecondPage;