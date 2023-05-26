import {useState} from 'react';
import './App.css';
import './components/ShortUrl';
import ShortUrl from './components/ShortUrl';


function App() {
  const [fullUrl, setFullUrl] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [shortUrl, setShortUrl] = useState('');

  async function processSubmit(event) {
    event.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log(apiUrl);

    let response = await fetch(apiUrl, {
      'method': 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      'body': JSON.stringify({'full_url': fullUrl})
    });
    const url = await response.json();

    setShortUrl(url.short_url);
    setShowResult(true);
  }

  function processUrlChange(event) {
    setFullUrl(event.target.value);
  }

  return (
    <div id="App">
      <header className="App-header">
        <div id="header-container">Url Shortner App</div>
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

      {showResult && <ShortUrl shortUrl={shortUrl} /> }
    </div>
  );
}

export default App;
