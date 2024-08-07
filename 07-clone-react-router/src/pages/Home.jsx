import { Link } from "../components/Link"

export function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link to={'/about'}>Go to about</Link>
    </main>
  )
}
