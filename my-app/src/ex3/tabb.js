import React from 'react';
import Colonne from './colonne';
import  Ligne from './ligne';

class Tabb extends React.Component {
    render() {
      return (
        <div className="tabb">

<table border='2' align='center' >
      <tr>
 <th>
     
   </th> 
   <th>
      
       <Colonne colonne = {this.props.colonne} >
      
       </Colonne>
  
   </th> 
  
 </tr>

 <tr>
 <th>
<Ligne ligne={this.props.ligne}>

</Ligne>
   </th>
    <th>

   </th> 
  
 </tr>

  
</table>
</div>
      );
    }

  }

export default Tabb;
