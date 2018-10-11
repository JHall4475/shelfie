import React, {Component} from 'react';

class Form extends Component {

state = {
        name:'',
        price:0,
        imgurl:''
      }

     onInputChangeImgurl = (e) => {
         this.setState({imgurl: e.target.value})
     }
     onInputChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    onInputChangePrice = (e) => {
        this.setState({price: e.target.value})
    }



    onClickCancelButton = () => {
        this.setState({ name:'',
        price:'',
        imgurl:''
     })
    }

    onClickAddButton = () => {}


    render(){
        return (
            <div>Form
            <input 
                onChange={this.onInputChangeImgurl}
                value={this.state.imgurl}
                type="text"
                placeholder="Image URL"
                />

            <input 
                onChange={this.onInputChangeName}
                value={this.state.name}
                type="text"
                placeholder="Name"
                />

            <input 
                onChange={this.onInputChangePrice}
                value={this.state.price}
                type="text"
                placeholder="Price"
                />

            <button onClick={this.onClickCancelButton} >Cancel</button>
            <button onClick={this.onClickAddButton}>Add</button>

            </div>
        )
    }
}

export default Form;