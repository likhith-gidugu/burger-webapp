 import Threeimgs from './images/mockup_item.jpg'
 
 
 const ThirdPage=()=>{

return(
    <div className='container'>
        <div style={{color:'rgb(48, 5, 5)',fontFamily:'AlfaSlabOne',textAlign:'center'}}>
   <h1>CHOOSE&ENJOY</h1></div>
   <div style={{color:'rgb(48, 5, 5)',textAlign:'center'}}>
   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted </p>
   </div>
   <div className='row'>
<div className='col-md-4 col-sm-12'><img style={{width:'100%'}} src={Threeimgs} alt='three burger images'/> <h3 className='threephotos-txtimg'>Lorem Ipsum Dolor</h3> <p className='threephotos-txtimg'>It is a long established fact that a reader will be distracted </p><div style={{textAlign:'center',paddingBottom:'20px'}}><button className='orderNow-buton'>ORDER NOW</button></div></div>
<div className='col-md-4 col-sm-12'><img style={{width:'100%'}} src={Threeimgs} alt='three burger images'/>
<h3 className='threephotos-txtimg'>Lorem Ipsum Dolor</h3> <p className='threephotos-txtimg'>It is a long established fact that a reader will be distracted   </p><div style={{textAlign:'center',paddingBottom:'20px'}}><button className='orderNow-buton'>ORDER NOW</button></div></div>
<div className='col-md-4 col-sm-12'><img style={{width:'100%'}} src={Threeimgs} alt='three burger images'/>
<h3 className='threephotos-txtimg'>Lorem Ipsum Dolor</h3> <p className='threephotos-txtimg'>It is a long established fact that a reader will be distracted   </p><div style={{textAlign:'center',paddingBottom:'20px'}}><button className='orderNow-buton'>ORDER NOW</button></div></div>
  </div>

<div className=''></div>
    </div>
);

  }
  export default ThirdPage;