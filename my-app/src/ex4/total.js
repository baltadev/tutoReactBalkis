import React from 'react';

class Total extends React.Component {
    render() {
      return (
        <div className="Total" style={{
          backgroundColor: 'yellow',
          width: '400px',
          height: ''}} >
          
            <h2> Total</h2>
            {this.props.total}
           
        </div>
        
        );
      }
  
    }
    export default Total;