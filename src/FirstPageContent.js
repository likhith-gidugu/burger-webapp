
import bigimage from './images/mockup_bg-removebg-preview-removebg-preview.png';


const FirstPagetxt=()=>{
return(
<div className='container-fluid' style={{color:'rgb(48, 5, 5)',backgroundColor:' #e8b049'}}>
<div className='container   gl-fptxt-photo'>
    <div className="row">
<div className='col-md-6 col-sm-12  gl-fptxt'>
 <span className='gl-itgtftb'>IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</span>   
 <h1 className='gl-burger'>BURGER</h1>
 <h5 className='gl-week'>week</h5>
</div>
<div className='col-md-6 col-sm-12 gl-fpbgimg'><img style={{width:'80%'}} src={bigimage}/></div>

    </div>
    </div>


</div>
);

}
export default  FirstPagetxt;