import React from 'react';

class Formulaire extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            word1: '',
            word2: '',
            word3: '',
            result:'...........',
            result2:'..........',
            result3:'..........'
            
        };
    }
    render() {
      return (
        <div>
            <text>
            <p> Well there's three versions of this story mine and yours </p>
<p>And then the truth</p>
<p>Now we can put it down to circumstance, our <span className='word'>{this.state.result}</span>  then our youth</p>
<p>Out of some sentimental gain I wanted you to feel my pain,</p>
<p>But it came back return to <span className='word'>{this.state.result2}</span></p>
<p>I read your mind and tried to call,</p>
<p>My tears could fill the Albert Hall,</p>
<p>Is this the sound of sweet <span className='word'>{this.state.result3}</span>?</p>
            </text>
           <form>
           <p><input type='text' name='word1' value={this.state.word1} onChange={(event) => this.setState({word1: event.target.value})}></input></p>
           <p><input type='text' name='word2' value={this.state.word2} onChange={(event) => this.setState({word2: event.target.value})}></input></p>
           <p><input type='text' name='word3' value={this.state.word3} onChange={(event) => this.setState({word3: event.target.value})}></input></p>
           <input type="button" value="Submit" onClick={(event) =>{ event.preventDefault(); this.setState({result: this.state.word1 ,result2: this.state.word2 ,result3: this.state.word3})} }></input>
                
           </form>
     
      
        </div>
        
      );
    }

  }
  export default Formulaire;