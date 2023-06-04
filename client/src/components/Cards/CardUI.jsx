import './Cards.css';

function Cards(props) {
  return (
    <div className="card text-center">
        <div className="overflow">
            <img src="" alt="" className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <div className="card-text text-secondary">
                <li> {props.text1}</li>
                <li> {props.text2}</li>
                <li> {props.text3}</li>
                
                
            </div>
            <p className="card-text text-secondary">
                
            </p>
            <a href="#" className="btn btn-outline-success my">Book Now</a>


        </div>

    </div>
  );
}

export default Cards;
