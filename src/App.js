import React from 'react';
import SlotM from './SlotMac';

const App =() => {

    return(
<>
<h2 className ="game">
    🎰Welcome to { " "}
    <span>Slot Machine Game</span>
</h2>
<div>
    <SlotM   x="😄" y= "😄" z= "😄" />
    <SlotM  x="🙉" y= "🙉" z ="🙉" />
    <SlotM  x= "❤️" y=  "❤️" z= "😍"/>
</div>
</>  
  );
}
export default App;