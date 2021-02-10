import React from 'react';
import Panier from './panier';
import Total from './total';
import List from './liste-achat';

class Magazin extends React.Component {
    render() {
      return (
        <div className="Magazin"   style={{
          backgroundColor: 'red',
         width: '400px',
          height: '800px'}}>
     <h2>{this.props.name}</h2>
    
     <List liste={this.props.list}/>
     
     <Panier panier={this.props.panier}/>
     <Total total={this.props.total}/>
    
   
    
        </div>
        
      );
    }

  }
  export default Magazin;