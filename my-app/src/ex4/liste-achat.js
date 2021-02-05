import React from 'react';


class List extends React.Component {

 
    render() {
      return (
        <div className="List"  style={{
          backgroundColor: 'yellow',
         width: '400px',
        height: '150px'}}>

        
      <h2> Liste des achats </h2>
Item1:{this.props.item};
Item2:{this.props.item2};
Item3:{this.props.item3};

        </div>
        
      );
    }

  }
  export default List;