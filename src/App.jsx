import './App.scss'
import Grid from "./components/Grid.jsx";
import Header from "./components/Header.jsx";


function App() {
  return (
      <>
        <div className="main">
            <Header/>
          <h1 className="hero">
              Don<br/>DeWaay
          </h1>
            <Grid/>
        </div>
      </>
  )
}

export default App
