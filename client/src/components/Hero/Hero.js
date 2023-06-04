import './Hero.css';
import Cards from '../Cards/Cards'

function Hero() {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>welcome to Ozone Studios</h6>
            <h4 className='hero-title'><en>Explore Our packges here</en></h4>

            <Cards />
            
        </div>
        
        

    </div>
    
    
    
  );
}

export default Hero;
