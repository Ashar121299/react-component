import React from "react";

class HorndBeast extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt={this.props.imgAlt} title={this.props.imgTitle}/>
                <p>{this.props.discription}</p>
            </div>
        );
    }
}
export default HorndBeast;