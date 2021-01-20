import moment from 'moment-timezone';
import './App.css';
import Counter from './Scene/Counter';

function App() {

  const theDate = '2021-12-24T00:00:00';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown</h1>
      </header>
      <div className='counter-container'>
        <Counter 
          theDate={theDate} 
          footer='You will never be the same again'
          header={'CTO birthday is comming ' + moment.tz(theDate, moment.tz.guess()).format('YYYY/MM/DD')}
        />
      </div>
    </div>
  );
}

export default App;
