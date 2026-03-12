import Dashboard from "./components/Dashboard";
import AddJob from "./pages/AddJob";

function App() {
  return (
    <div style={{background:"#f4f6f8",minHeight:"100vh",padding:"20px"}}>
      
      <h1 style={{textAlign:"center",color:"#1e3a8a"}}>
        Job Application Tracker
      </h1>

      <Dashboard/>

      <AddJob/>

    </div>
  );
}

export default App;
