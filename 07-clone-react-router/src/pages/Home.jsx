import { navigate } from "../components/Link"

export function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/about')}>Go to about</button>
    </main>
  )
}
