import './App.css';
import Data from './data';
import Card from './Card'

function Movie(value) {
  return (
    <div className="App">
      <Card
        imgsrc={value.src}
        title={value.title}
        year={value.year}
        distributor={value.distributor}
        amount={value.amount}
        ranking={value.ranking}
      />
    </div>
  );
}

export default function App() {
  return <>
    <h1 className='nav-title'>Movie List</h1>
    {Data.map(Movie)}
  </>
}
