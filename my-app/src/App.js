import './App.css';

import Ex1 from './pages/ex1';
import Ex2 from './pages/ex2';
import Ex3 from './pages/ex3';
import Ex4 from './pages/ex4';
import Ex5 from './pages/Ex5';
import Ex6 from './pages/ex6';
import Text from './pages/text';
import Play from './pages/play';
import Table from './pages/table';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <div >
         <Router>
           <div>
         <nav>
           <ul className='nav'>
           <li className='nav'>
             <Link to="/ex1">
                 EXercice 1
               </Link>
             </li>
             <li className='nav'>
               <Link to="/ex2">
                 EXercice 2
               </Link>
             </li>
             <li className='nav'>
             <Link to="/ex3">
                 EXercice 3
               </Link>
             </li>
             <li className='nav'>
             <Link to="/ex4">
                 EXercice 4
               </Link>
             </li>
             
             <li className='nav'>
             <Link to="/Ex5">
                 EXercice 5
               </Link>
             </li>
             <li className='nav'>
             <Link to="/ex6">
                 EXercice 6
               </Link>
             </li>
             <li className='nav'>
             <Link to="/table">
                 Table
               </Link>
             </li>
             <li className='nav'>
             <Link to="/play">
                 Play
               </Link>
             </li>
             <li className='nav'>
             <Link to="/text">
                 Text
               </Link>
             </li>
           </ul>
         </nav>
      
      
    </div>
    <Switch>
    <Route path='/ex1'>
         <Ex1/>
      </Route>
       <Route path='/ex2'>
         <Ex2/>
      </Route>
      <Route path='/ex3'>
         <Ex3/>
      </Route>
      <Route path='/ex4'>
         <Ex4/>
      </Route>
      <Route path='/Ex5'>
         <Ex5/>
      </Route>
      <Route path='/ex6'>
         <Ex6/>
      </Route>
      <Route path='/Table'>
         <Table/>
      </Route>
      <Route path='/text'>
         <Text/>
      </Route>
      <Route path='/play'>
         <Play/>
      </Route>

    </Switch>
  
    </Router>
    
    
</div>
  );
}

export default App;
