export default function Demo(){

    const countries=['India','US','Japan'];
  
    const results = [];
    if(countries.length>0){

    //   countries.forEach((country, index) => {
    //     results.push(
    //       <div key={index}>
    //         <p>{country}</p>        
    //       </div>,

    for(let country of countries){
        results.push(
               <div>
                 <p>{country}</p>        
               </div>
        )
      }

      return (
        <div>{results.length>0 ? results : <p>No Data!!!</p> }</div>
      )
       
}
}