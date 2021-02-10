import './App.css';

import Tabb from './ex3/tabb';
import Magazin from './ex4/magasin';
import Footer from './Ex2/Footer';
import Tab from './Ex2/tab';
import Titre from './Ex2/titre';
import ShoppingList from './ex1/shopping-list';
import Card from './ex1/card';
import Page from './ex5/page';


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
        ex4</h2>
        
         <Magazin name='Magazin'list='Liste' panier='Panier' total='Total'/>
      <h2>ex5</h2>
     <Page name='OSCAR'hname='Academy Awards'bname=' 25 avril 2021'mname='Menu'fname='Footer' note='Note' titre='Titre' text='Text' cname='Contenu' aname='Article'/>
     
      
    </div>
  
   
    

  );
}

export default App;
