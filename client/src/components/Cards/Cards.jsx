import React, {Component} from 'react'
import Card from './CardUI'


class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card title={"package 1"} text1={"1 hr of recording"} text2={"Simple mastring"} />
                    </div>
                    <div className="col-md-4">
                        <Card title={"package 2"} text1={"1 hr of recording"} text2={"Normal Mix and mastring"}/>
                    </div>
                    <div className="col-md-4">
                        <Card title={"package 3"} text1={"1 hr of recording"} text2={"Advanced Mix and mastring"} text3={"live session while recording"}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;