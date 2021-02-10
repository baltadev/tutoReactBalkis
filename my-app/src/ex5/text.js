import React from 'react';


class Text extends React.Component {

 
    render() {
      return (
        <div className="text"> 

        
      <h2>{this.props.text}</h2>

       
       Les Oscars du cinéma sont des récompenses cinématographiques américaines décernées chaque année 
       depuis 1929 à Los Angeles1 et destinées à saluer l'excellence des productions américaines et internationales du
        cinéma. L'attribution de ces distinctions dans les domaines choisis pour représenter les métiers de la création
         cinématographique (réalisation, interprétation, scénario, technique) est organisée,
        gérée et dirigée par l'association professionnelle Academy of Motion Picture Arts and Sciences
       
        </div>
        
      );
    }

  }
  export default Text;