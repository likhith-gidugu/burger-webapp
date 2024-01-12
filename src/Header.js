import {useState} from 'react';

const Header=()=>{

   const [color,setcolor]=useState('#ff0'); 
return(
<section>
<h1 className='Head-container'>this is header component</h1>

<h1 style={{backgroundColor:color}}>hello</h1>
<button class='btn' onClick={()=>{setcolor('#f00') }}>butn</button>

</section>
);  



}
export default Header;