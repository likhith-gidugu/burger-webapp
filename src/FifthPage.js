import sideBurger from './images/burger_single-removebg-preview1.png'
import Saucebottle from'./images/sauce_bottle.png'
import Burgerplate  from './images/burger_on_plate1.png'

const FifthPage=()=>{

return(
<div className='container-fluid'>
<div className='row'>
<div className='col-md-4  col-sm-12  fi-bgimg'>
<img style={{width:'36%',height:'67%'}} className='' src={sideBurger} alt='burgerimg'/></div>
<div className='col-md-8  col-sm-12'><p className='gl-reservation'>RESERVATION</p>
<h1 className=' reservationtable'>BOOK YOUR TABLE</h1></div>
</div>


<div className='container-fluid'>


<div className='row'><div className='col-md-3 col-sm-12 saucebottleimg' ><img src={Saucebottle} alt='saucebottle'/></div>
<div className='col-md-6 col-sm-12 gl-placeholders'><input type='text' placeholder='NAME'/> <input type='text' placeholder='EMAIL'/><br/><br/><input type='text' placeholder='DATE'/> <input type='text' placeholder='TIME'/><br/><br/> <input type='text' placeholder='PEOPLE'/> <button className='gl-findatable'>FIND A TABLE</button></div>

<div className='col-md-3 col-sm-12  burgerPlate'><img style={{width:'36%',height:'100%'}} src={Burgerplate} alt='burgerplate'/></div>


</div>

</div>



</div>



);

} 
export default FifthPage;