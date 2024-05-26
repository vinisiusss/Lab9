import {Cityselct} from './component/n1'
import {Calculator} from './component/n2'
import {Calcul} from './component/n3'
import {Dates} from './component/n4'

import {Register} from './component/n1val'
import {RegisterProfile} from './component/n2val'

function App() {
  return (
   <div className='div-n1'>
      <>
        <Cityselct/>
      </>
      <>
        <Calculator/>
      </>
      <>
        <Calcul/>
      </>
      <>
        <Dates/>
      </>
      <>
        <Register/>
      </>
      <>
      <RegisterProfile/>
      </>
   </div>
  );
}

export default App;
