import React from 'react';
import Homenav from '../navbar/homenavbar';
import './home.css'
import Footer from '../footer/footer'


function Home() {
    return (  
        <>
        <Homenav/>
        <div className='w-100'>
          <div className='videocontainer'>
            <video
  src="/assets/floating-fresh-organic-fruits-underwater-in-super-slow-motion-close-up-tasty-s-SBV-347214737-preview_1747025053396_GStory_1747025272963.mp4"
  autoPlay
  muted
  loop
  playsInline
   style={{
    width: "100%", 
    objectFit: "cover",
    display: "block", 
  }}/>
  <div class="overlay-text">
    <h1 style={{fontSize:'5rem'}}>Freshure</h1>
    <p>Delivering Freshness, One Click at a Time.</p>
  </div>
  
</div>
        <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
  <img
    src="assets/immunity-boosting-food-healthy-lifestyle-with-citrus.jpg"
    alt="Background"
    style={{ width: '100%', height: 'auto' }}
  />
  <h1 style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 'bold',
    fontSize: '3.5rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
  }}>
    Explore healthy choices
  </h1>
  <h2 style={{
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 'light',
    fontSize: '1.5rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
  }}>
    Naturally Nurtured for you
  </h2>
</div >
<div className="container-fluid py-5" style={{ backgroundColor: 'rgba(197, 246, 186, 0.52)' }}>
  <h1
    style={{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '3.5rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
      marginBottom: '3rem',
    }}
  > Our outlets in India
  </h1>
  <div className="row">
    {[
      { city: 'Hyderabad', img: '/assets/hyderabad.webp' },
      { city: 'Bangalore', img: '/assets/bangalore.webp' },
      { city: 'Chennai', img: '/assets/chennai.jpg' },
      { city: 'Thiruvananthapuram', img: '/assets/thiruvananthapuram.jpg' },
      { city: 'Vizag', img: '/assets/vizag.jpg' },
      { city: 'Raichur', img: '/assets/miryalaguda.jpg' },
    ].map((outlet) => (
      <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
        <div className="card outlet-card" style={{ width: '18rem' }}>
          <img 
  src={outlet.img} 
  className="card-img-top" 
  alt={outlet.city}
  style={{
    height: '200px',
    objectFit: 'cover'
  }}
/>    
 {/* {   <div className="card-body">
          <h5 className="card-title">{outlet.city}</h5>
          </div> */} 
          <h5 className="card-title" style={{textAlign:"center"}}>{outlet.city}</h5>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
    <Footer/>
           </>
    );
}

export default Home;