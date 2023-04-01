import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyFooter from './Components/MyFooter';
import MyNav from './Components/MyNav';

function App() {
  return (
    <div className="App bg-black">
      <MyNav />
      <MyFooter />
    </div>
  );
}

export default App;
