export default function ShortUrl({shortUrl}) {
    return (
        <div >The short URL is: <a href={shortUrl}>{shortUrl}</a></div>
    )
}