import {useState} from 'react';
import './App.css';

function App() {
  const [fullUrl, setFullUrl] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [shortUrl, setShortUrl] = useState('');

  async function processSubmit(event) {
    event.preventDefault();

    let response = await fetch('http://localhost:9000/urls', {
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

      {showResult && <div >
        The short URL is: <a href={shortUrl}>{shortUrl}</a>
      </div>
      }
    </div>
  );
}

export default App;
