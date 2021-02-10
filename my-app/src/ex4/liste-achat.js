import React from 'react';


class List extends React.Component {

 
    render() {
      return (
        <div className="List"  style={{
          backgroundColor: 'yellow',
         width: '400px',
        height: '150px'}}>

        
      <h2> Liste des achats </h2>

       {this.props.liste}
        </div>
        
      );
    }

  }
  export default List;