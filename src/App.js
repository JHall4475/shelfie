import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header'
//git pushes to shelfie not origin

class App extends Component {

  state = {
    inventory: [
     { name: 'citizen blue angel',
       price: 512,
       imgurl:'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/vxkAAMXQlgtS-pPU/$_35.JPG?set_id=2'
    },
    {name: 'ugg mini II',
    price: 140,
    imgurl:'https://ta-ugg.s3.amazonaws.com/product/U1016222CHE_1_large.jpg'}
    ]
  }






  render() {
    return (
      <div>
        <div>
          <Dashboard
            inventory={this.state.inventory}
          >

          </Dashboard>
        </div>
        <div>
          <Form></Form>
        </div>
        <div>
          <Header></Header>
        </div>
      </div>
    );
  }
}

export default App;
