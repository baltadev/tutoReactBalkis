import React from 'react';
class Panier extends React.Component {
    render() {
      return (
        <div className="Panier"  style={{
          backgroundColor: 'yellow',
            width: '400px',
          height: '150px'}}>
            <h2> Panier</h2>
       
     Titre1={this.props.titre};
     Titre2= {this.props.titre2};
    Titre3={this.props.titre3};
       
        </div>
        
        );
      }
  
    }
    export default Panier;