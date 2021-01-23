import React from 'react';
class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Liste de courses pour {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          
          </ul>
          <h2>
            {this.props.taille}</h2>
    
        </div>
      );
    }

  }
  export default ShoppingList;