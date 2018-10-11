import React, {Component} from 'react';
import Product from '../Product/Product'
class Dashboard extends Component {

    render(){
        
        
        return (
            <div>Dashboard
                {this.props.inventory.map(products => {
                    return (
                        <div>
                            product
                        <Product 
                        name={products.name}
                        price={products.price}
                        imgurl={products.imgurl}
                        
                        />
                        </div>
                    )
                })}
                
                
                

            </div>

        )
    }
}

export default Dashboard;