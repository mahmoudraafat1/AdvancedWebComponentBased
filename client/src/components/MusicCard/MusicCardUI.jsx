import './MusicCard.css';


import { Button } from 'react-bootstrap';
function MusicCards(props) {
  return (
    <div className="card text-center">
        <div className="overflow">
            <img src={props.imgsrc} alt='Image 1' className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <a href={props.linkSpotify}>
              <i class="fa-brands fa-spotify"></i>
            </a>
            <a href={props.linkYoutube}>
              <i class="fa-brands fa-youtube"></i>
            </a>
            
            
            
        </div>

    </div>
  );
}

export default MusicCards;
