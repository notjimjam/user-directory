import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';

function App() {
  // console.log(data);
  return (
    <div className='App'>
      <Header />
      <Card data={data} />
    </div>
  );
}

export default App;
