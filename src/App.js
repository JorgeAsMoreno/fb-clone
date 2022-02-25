import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Widgets from './Components/Widgets/Widgets';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
