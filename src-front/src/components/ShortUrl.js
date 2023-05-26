import "./ShortUrl.css";

export default function ShortUrl({shortUrl}) {
    return (
        <div className="chort-url-container">The short URL is: <a href={shortUrl}>{shortUrl}</a></div>
    )
}