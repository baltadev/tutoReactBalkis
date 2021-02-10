import React from 'react';

import Img from '../Image/img.jpg';

class Note extends React.Component {

 
    render() {
      return (
        <div className="note" >

        
      <h2>{this.props.note}</h2>
      <img src={Img }  width="100" height="80%" />
      
        </div>
        
      );
    }

  }
  export default Note;