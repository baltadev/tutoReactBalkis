import React from 'react';
import List from './liste-achat';
import Panier from './panier';
import Total from './total';
class Magazin extends React.Component {
    render() {
      return (
        <div className="Magazin"   style={{
          backgroundColor: 'red',
         width: '800px',
          height: '800px'}}>
     <h2>{this.props.name}</h2>
  
        <List 
      item={this.props.item}
      item2={this.props.item2}
      item3={this.props.item3}>
      </List>
    
           <Panier
      titre={this.props.item}
      titre2={this.props.item2}
      titre3={this.props.item3}>
           </Panier>
 
       <Total
        total='...'>
    
    </Total>
    
        </div>
        
      );
    }

  }
  export default Magazin;