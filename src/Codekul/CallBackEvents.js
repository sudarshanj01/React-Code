import { deepOrange } from "@mui/material/colors";
import React from "react";

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
      <ChildComponentTwo/>
    </div>
  );
}

export default CallBackEvents;




