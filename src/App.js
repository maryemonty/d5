import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Films from './Components/Films';
import MyFooter from './Components/MyFooter';
import MyNav from './Components/MyNav';
import TvShows from './Components/TvShows';

function App() {
  return (
    <div className="App bg-black">
      <MyNav />
      <TvShows />
      <Films />
      <MyFooter />
    </div>
  );
}

export default App;
