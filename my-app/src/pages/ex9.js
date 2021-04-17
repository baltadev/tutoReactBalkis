import React from 'react';
import Exe9 from '../ex9/exe9';

export default class Ex9 extends React.Component {

    constructor(props){
        super(props);
        this.state={
            event: ''
        }
    }

    render() {
      return( 
        <div>
            <h2>HTML Event Attributes</h2>
            <select name="events" onChange={(event) => this.setState({event: event.target.value})}>
                <option value="">Select an Event</option>
                <option value="onsearch">Form Events - onSearch</option>
                <option value="onkeydown">Form events - onKeydown</option>
                <option value="onclick">Form Events - onClick</option>
                <option value="onmousedown">Form events - onMousedown</option>
                <option value="onmouseover">Form events - onMouseover</option>
            </select>
            <Exe9 event={this.state.event} />
        </div>

    );  
    }
} 
