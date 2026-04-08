import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="card not-found">
      <p className="eyebrow">404</p>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="link-button">
        Back to Home
      </Link>
    </section>
  )
}

export default NotFound
