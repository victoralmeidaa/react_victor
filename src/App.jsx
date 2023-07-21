import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles/components/App.sass"

function App() {
  return (
    <div className="portfolio">
      <h1>Victor Almeida</h1>
      <Sidebar />
      <MainContent />
    </div>

  );
}

export default App
