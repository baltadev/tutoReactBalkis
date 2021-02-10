import React from 'react';


class Panier extends React.Component {
    render() {
      return (
        <div className="Panier"  style={{
          backgroundColor: 'yellow',
            width: '400px',
          height: '200px'}}>
            <h2> Panier</h2>
       
            {this.props.panier}
       
        </div>
        
        );
      }
  
    }
    export default Panier;