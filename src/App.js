import logo from './logo.svg';
import './App.css';

function App() {

    const getUsers = () => {
      try {
          fetch("https://api.github.com/users")
              .then(res => res.json())
              .then(data => {
                  console.log(data);
              })
              .catch(error => {
                  console.error('Error fetching data:', error);
              });
      } catch (err) {
          console.log(err);
      }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={getUsers}>get users</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
