import { Dogs } from './dogs';
import dog2 from '../assets/images/dog2.jpg'
import cat1 from '../assets/images/cat1.jpg'
import doc from '../assets/images/doc.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';



function Home(){

  function opendog(){
    
  }
  
    return(
        <div className='head-text'>

          <div>   
        <Carousel  >

      <Carousel.Item interval={3000} className='img-size '>
     
        <img
          className="d-block w-100"
          src={dog2}
          alt="dogs"
          onClick={opendog}
          
        />
        {/* <Carousel.Caption>
          <h5>DOG'S</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item >

      <Carousel.Item interval={3000} className='img-size '>
       
        <img
          className="d-block w-100"
          src={cat1}
          alt="Second slide"
            />
        {/* <Carousel.Caption>
          <h5>CAT'S</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item >

      <Carousel.Item interval={3000} className='img-size '>
        <img
          className="d-block w-100"
          src={doc}
          alt="Third slide"
         
        />
        {/* <Carousel.Caption>
          <h5>COW'S</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div >

    <div className='text-on-image notworking'>
    <h1 style={{fontSize:100, fontFamily:'Times-Italic'}}>ADOPET </h1>
    <p>
           <Link to="/"  className='lnkcolor'>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/Dogs"  className='lnkcolor'>Dogs</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/about"  className='lnkcolor'>About</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/contact"  className='lnkcolor'>Contact</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/ngo"  className='lnkcolor'>NGO</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/donate"  className='lnkcolor'>Donate</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           
    </p>
    </div >

    <div className='text-on-image-left'>
     <p >
           <Link to="/login"  className='lnkcolor' >Log in</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/help"  className='lnkcolor'>Help</Link> &nbsp;&nbsp;&nbsp;&nbsp;
       
     </p>
    
    </div>


    {/* <div style={{color:"#777", backgroundColor:"white",  padding:"50px 80px",textAlign:"justify"}}>
<h3 style={{textAlign:"center"}}>DOG'S</h3>
</div> */}

        </div>
    )
}
export default Home;