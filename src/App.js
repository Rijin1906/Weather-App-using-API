
import "./App.css";
import SearchBar from "./component.js/Searchbar";
import Card from "./component.js/Card";

function App() {
  return (
    <div className="App">
      {/* <h1 
      style={{color:"rgba(231,124,3,0.9)", fontSize:"45px", fontWeight:"100"}}>Weather Today🌁</h1> */}
      <SearchBar/>
      {/* <Card/> */}
    </div>
  );
}

export default App;
