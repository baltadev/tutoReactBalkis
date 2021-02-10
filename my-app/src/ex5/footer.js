import React from 'react';
import '../style/ex5.css';

class Footer extends React.Component {

 
    render() {
      return (
        <div className="footer"> 

        
      <h2>{this.props.fname}</h2>
      Certains gagnants aux Oscars ont d'ailleurs refusé leur trophée et boycotté la cérémonie.
       Le premier fut Dudley Nichols, lauréat en 1936 de l'Oscar de la meilleure adaptation pour Le Mouchard.
        
        </div>
        
      );
    }

  }
  export default Footer;