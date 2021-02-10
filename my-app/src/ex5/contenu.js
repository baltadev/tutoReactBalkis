import React from 'react';
import Articl from './articl';
import Note from'./note';


class Contenu extends React.Component {

 
    render() {
      return (
        <div className="contenu" >

        
      <h2>{this.props.cname}</h2>
     <Articl articl={this.props.anme} titre={this.props.titre} text={this.props.text} aname={this.props.aname}/>
     <Note note={this.props.note}/>
        </div>
        
      );
    }

  }
  export default Contenu;