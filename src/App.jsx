import MainContent from "./components/MainContent.jsx";
import Sidebar from "./components/Sidebar.jsx";
import "./styles/components/App.sass"

function App() {
  return (
    <div id="portfolio">
      <h1>Victor Almeida</h1>
      <Sidebar />
      <MainContent />
    </div>

  )
}

export default App;
