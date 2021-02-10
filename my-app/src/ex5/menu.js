import React from 'react';

class Menu extends React.Component {

 
    render() {
      return (
        <div className="menu"> 

        
      <h2>{this.props.mname}</h2>
      <p>Accueil</p>
<p>Portails thématiques</p>
<p>Article au hasard</p>
<p>Contact</p>

        </div>
        
      );
    }

  }
  export default Menu;