import React from 'react';
import SlotM from './SlotMac';

const App =() => {

    return(
<>
<h2 className ="game">
    π°Welcome to { " "}
    <span>Slot Machine Game</span>
</h2>
<div>
    <SlotM   x="π" y= "π" z= "π" />
    <SlotM  x="π" y= "π" z ="π" />
    <SlotM  x= "β€οΈ" y=  "β€οΈ" z= "π"/>
</div>
</>  
  );
}
export default App;