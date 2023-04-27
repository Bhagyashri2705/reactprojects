import react from "react";
import Amazon from "./Amazon";
import Netflix from "./Netflix";


const favSeries= 'netflix';

/*const Favs=()=>{
if (favSeries==='netflix') {
return <Netflix/>;   
} else {
 return <Amazon/>;
}
};*/


const App =()=>(

<>
  <h1 className="heading-style">List of top 5 Netflix series in 2020</h1>
 {/*<Favs/>*/}

 {(favSeries==='netflix') ? <Netflix/>: <Amazon/>}
</>
);

export default App;
