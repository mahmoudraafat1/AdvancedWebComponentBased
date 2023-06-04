import React, {Component} from 'react'
import Card from './MusicCardUI'
import img1 from '/AdvancedWebComponentBased/client/src/components/assets/music2.JPG'
import img2 from '/AdvancedWebComponentBased/client/src/components/assets/music1.JPG'
import img3 from '/AdvancedWebComponentBased/client/src/components/assets/music3.JPG'
import img5 from '/AdvancedWebComponentBased/client/src/components/assets/music5.jpg'

class MusicCards extends Component{
    render(){
        return(
          <>
          <h1 class="title-main">Most popular Projects</h1>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title={"music 1"} />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title={"Music 2"} />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img5} title={"Ana ba3eed"} linkSpotify={"https://open.spotify.com/track/7MaHcIjcqR7lGxmZDXAhDO?si=B5GV1P-HRraOLIEPknovcg"} linkYoutube={"https://youtu.be/0V-QW07G7JQ"} />
                    </div>
                </div>
            </div>
            </>

        );
    }
}

export default MusicCards;