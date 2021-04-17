import React from 'react';
import Balerina from '../Image/balerina.jpg'

export default class Exe9 extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            value: "",

            x:"",
            
        }
    }

    render() {
        var jsx=''
        if (this.props.event === "onsearch") {

            jsx=<div>
                <h3>{this.props.event}</h3>
                <span>search</span>
                <input type="search" name="onSearch" onSearch= {(event) => this.setState({ value: event.target.value})} />
                <span>You wrote: {this.state.value}</span>
                
               
            </div>
        }
            else if(this.props.event === "onkeydown") {
                jsx=<div>
                    <h3>{this.props.event}</h3>
                    <span>The onKeydown</span>
                    <form>
                        <input type="text" name="onKeydown" onKeyDown={() => alert('you pressed a key')} />
            
                    </form>
                </div>
        }
    
    else if(this.props.event === "onmousseover"){
        jsx=<div>
            <h3>{this.props.event}</h3>
            <span>Mousse over</span>
            <img name="onMousseover" onMouseOver={()=> (this.state.x.width='50px',this.state.x.height='50px') } 
            src={Balerina }  width="60px" height="50px"  alt="Balerina"></img>
        </div>
    }
      return(
            <div>
                {jsx}
            </div>
        )
    }
}