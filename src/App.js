
import './App.css';
import Headersec from './Headsection';
import FirstPagetxt from './FirstPageContent';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import Footer from './FooterPage';


const App=()=> {
  return (
    <section>
  <div  className='one'>    
<Headersec/>
<FirstPagetxt/>
</div>
<div className='two'>
<SecondPage/>
</div>
<div className='three'>
 <ThirdPage/> 
</div>
<div className='four'>
  <FourthPage/>
</div>
<div className='five'>
<FifthPage/>

</div>
<footer>
  <Footer/>
</footer>
</section>

  );
}

export default App;
