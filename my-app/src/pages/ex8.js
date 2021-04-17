import React from 'react';
import EventTest from '../ex8/testenvent';

export default class Ex8 extends React.Component {

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
                <option value="onblur">Form Events - OnBlur</option>
                <option value="onfocus">Form events - OnFocus</option>
                <option value="oninput">Form Events - OnInput</option>
                <option value="oninvalid">Form events - OnInvalid</option>
                <option value="onreset">Form events - OnReset</option>
            </select>
            <EventTest event={this.state.event} />
        </div>

    );  
    }
} 
