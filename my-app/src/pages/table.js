import Suisse from '../Image/suisse.png';
import Finland from '../Image/finland.png';
import Denmark from '../Image/denmark.png';
import Norway from '../Image/norway.png';
import Iceland from '../Image/iceland.png';
import Happy from './happy';

function Table (){
    return(
<div>
  <Happy/>
    <table className='table' align='center'>
<tr  >
 <td>
 Finland
   </td> 
   <td>
   Denmark
   </td> 
   <td>
   Switzerland
   </td> 
   <td>
   Iceland
   </td> 
   <td>
     Norway

   </td>
   
 </tr>
 <tr  >
 <td>
 <img src={Finland }  width="60px" height="50px" />
   </td> 
   <td>
   <img src={Denmark }  width="60px" height="50px" />
   </td> 
   <td>
   <img src={Suisse }  width="60px" height="50px" />
   </td> 
   <td>
   <img src={Norway }  width="60px" height="50px" />
   </td> 
   <td>
   <img src={Iceland }  width="60px" height="50px" />
   </td> 
 </tr>
 </table>
</div>
    );

    
}
 export default Table;