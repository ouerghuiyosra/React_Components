
import Photo from "./Component/Profile/ProfilePhoto";
import  Name from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Address"
import './App.css';


function App() {
  return (
    
    <div className="App">
   

    <form>
  <Photo/>
  <Name/>
  <Adress/>
  </form>
    </div>
  );
}

export default App;
