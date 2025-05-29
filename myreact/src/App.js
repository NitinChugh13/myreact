import './App.css';
import Navbar from './myComponents/Navbar';
import TextForm from './myComponents/TextForm';

function App() {
  return (
    <div>
      <Navbar searchBar={false} /> {/* Change this to true/false to enable/disable search */}
      <TextForm />
      
    </div>
  );
}

export default App;