import React from 'react';
class Titre extends React.Component {
    render() {
      return (
        <div className="titre"align='center'>
     <h1>Title: {this.props.name}</h1>
      
        </div>
        
      );
    }

  }
  export default Titre;