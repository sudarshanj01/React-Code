import React, { useState } from "react";
// call back events

 function CallBackEvents() {

    const [message, setMessage] = useState("");

    const handlechange = (event) => {
        setMessage(event.target.value);
       
      };

  return (
    <div>
      <h2>Call Back Event</h2>
      <p>Message :{message} </p>
      <ChildComponent message={message} onInputChange={handlechange} />
    </div>
  );
}

 function ChildComponent({message,onInputChange}) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>message:{message}</p>
      <input type="text" onChange={onInputChange} />
      
    </div>
  );
}

export default CallBackEvents;




