import {useState} from 'react';
import './App.css';

function App() {
  const [fullUrl, setFullUrl] = useState('');

  async function processSubmit(event) {
    event.preventDefault();

    let response = await fetch('http://localhost:9000/urls', {
      'method': 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      'body': JSON.stringify({'full_url': fullUrl})
    });
    console.log(response);
  }

  function processUrlChange(event) {
    setFullUrl(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Url Shortner App</div>
      </header>

      <div>
        <form onSubmit={processSubmit}>
          <label>
            Enter a full url:
            <input id="full_url" value={fullUrl} onChange={processUrlChange} />
          </label>
          <button type="submit">Get short link</button>
        </form>
      </div>
    </div>
  );
}

export default App;
