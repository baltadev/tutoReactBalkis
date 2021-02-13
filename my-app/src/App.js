import './App.css';

import Ex1 from './pages/ex1';
import Ex2 from './pages/ex2';
import Ex3 from './pages/ex3';
import Ex4 from './pages/ex4';
import Ex5 from './pages/Ex5';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <div >
         <Router>
           <div>
         <nav>
           <ul>
           <li>
             <Link to="/ex1">
                 EXercice 1
               </Link>
             </li>
             <il>
               <Link to="/ex2">
                 EXercice 2
               </Link>
             </il>
             <li>
             <Link to="/ex3">
                 EXercice 3
               </Link>
             </li>
             <li>
             <Link to="/ex4">
                 EXercice 4
               </Link>
             </li>
             
             <li>
             <Link to="/Ex5">
                 EXercice 5
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
      <Route path='/'>
         <Ex5/>
      </Route>

    </Switch>
  
    </Router>
    
    
</div>
  );
}

export default App;
