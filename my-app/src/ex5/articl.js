import React from 'react';
import Title from './title';
import Text from './text';
class Articl extends React.Component {
    render() {
      return (
        <div className="articl" >
            
<h2>{this.props.aname}</h2>
<Title  titre={this.props.titre}/>
<Text text={this.props.text} />
</div>
       );
    }

  }
  export default Articl;