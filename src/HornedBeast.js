import React from 'react';
class HornedBeast extends React.Component {
    constructor(props){
       super(props);
    }

    render () {
        return (<><h2>{this.props.title}</h2> <img src={this.props.imageUrl} alt={this.props.imageUrl} /> <p>description={this.props.description}</p> </>

        )
    }
}
export default HornedBeast;