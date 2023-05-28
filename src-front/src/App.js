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
    const apiDomain = `${process.env.REACT_APP_API_URL}/urls`;

    try {
      let response = await fetch(apiDomain, {
        'method': 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        'body': JSON.stringify({'full_url': fullUrl})
      });
      const url = await response.json();
      setShortUrl(url.short_url);
      setShowResult(true);
      setFullUrl('');
    } catch(err) {
      console.log(err);
    }
  }

  function processUrlChange(event) {
    setFullUrl(event.target.value);
  }

  return (
    <div id="App">
      <header className="App-header">
        <div id="header-container">Url Shortener App</div>
      </header>

      <div id="form-container">
        <form  id="form-itself" onSubmit={processSubmit}>
          <label id="label-input">
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
