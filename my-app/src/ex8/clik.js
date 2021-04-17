import React from 'react';
class Click extends React.Component{

    constructor(props){
        super(props);
        this.state= {
        name:'',
        lastname:'',
        passeword:'',
        result:'....',
        result2:'....',
        result3:'....',

           
        };
       
        };
        
   
    render() {
        return (
          <div>
              <form>
              
<p> Name : <input type='text' name='name'value={this.state.name}  
onChange={(event) => this.setState({name: event.target.value})}  ></input></p>
<p> Last Name : <input type='text' name='lastname' value={this.state.lastname} 
onChange={(event) => this.setState({lastname: event.target.value})}></input></p>
<p> PassWord : <input type='password' name='password' value={this.state.password}
onChange={(event) => this.setState({password: event.target.value})}></input></p>
        <input type="button" value="Submit" onClick={(event) =>{ event.preventDefault(); this.setState({result: this.state.name, result2: this.state.lastname, result3: this.state.password})} }
        ></input>
        <input type='date'></input>
 
                
<p> <span className='word'>{this.state.result }</span>'....'  
 <span className='word'>{this.state.result2 }</span></p>
<p> <span className='word'>{this.state.result3 }</span></p>
Pick a number between 2 and 5: 
<input type="number" id="myInput" name="quantity" min="2" max="5" required></input>
</form>

       
          </div>
        );
    }

}
export default Click ;