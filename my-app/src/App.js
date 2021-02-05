import './App.css';

import Tabb from './ex3/tabb';
import Magazin from './ex4/magasin';
import Footer from './Ex2/Footer';
import Tab from './Ex2/tab';
import Titre from './Ex2/titre';
import ShoppingList from './ex1/shopping-list';
import Card from './ex1/card';


function App() {
  return (
    <div >
      <h2> ex1</h2>
      <ShoppingList name='Client1'/>
      <Card name='Card'/>


   <h2> ex2</h2>
   <Titre name='Video Games'/>
   <Tab/>
<Footer/>
    <h2> ex3</h2>
      <Tabb ligne='123' colonne='456'
      />
      <h2>
        ex4
        <Magazin 
        name='Magazin'
        item='1'
        item2='2'
        item3='3'/>
      </h2>
      
    </div>
  
   
    

  );
}

export default App;
