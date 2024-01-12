import Bglogo from './images/logo.png';

import Locationicon from'./images/location_icon.png';

import Emailicon from'./images/mail_icon.png';

import instagram from './images/instagram.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import whatsapp from './images/whatsapp.png'

const Footer=()=>{

return(
    <footer>
<div className='container bgimg'>
    <div className='container'>
<div className='row' >
<div className='col-md-6 col-sm-12'><img style={{margin:'30px 0px 30px 0px',width:'90%'}} src={Bglogo} alt='bg-logo'/></div>

</div>
<div className='row'>
  <div className='col-md-6 col-sm-12'> <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>        </div> 

<div className='col-md-6 col-sm-12 iconsposition'><img src={Locationicon} alt='location icon' style={{width:'3%'}}/> <span>MAIN ROAD,BUILDINGNAME,COUNTRY</span><br/>

<img src={Emailicon} alt='emailicon' style={{width:'3%'}}/><span>&nbsp;INFO@COMPANYNAME.COM</span>
</div>


</div>

<div className='row'>
    <div className='col-md-6 col-sm-12 companyname'><p>COMPANY NAME 2020 ALL RIGHTS RESERVED</p></div>

<div className='col-md-6 col-sm-12 endingLogos'><div><img src={instagram} alt='instagram'/></div> <div><img src={facebook} alt='facebook'/></div> <div><img src={twitter} alt='twitter'/></div> <div><img src={whatsapp} alt='whatsapp'/></div>
</div>
</div>

</div>
</div>

    </footer>
);

    
}
export default Footer;