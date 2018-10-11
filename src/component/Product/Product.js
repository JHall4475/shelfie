import React, {Component} from 'react';

class Product extends Component {

funciton () {

}


    render(){
        
        const { name, price, imgurl } =this.props
        return (
            <div style={{backgroundColor: '#D34735'}} >
                {console.log(imgurl, name, price) }
                <img src={imgurl} alt=''></img>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        )
    }
}

export default Product;