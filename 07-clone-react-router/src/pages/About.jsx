import { navigate } from "../components/Link"

export function About() {
  return (
    <main>
      <h1>About Page</h1>
      <button onClick={() => navigate('/')}>Go to home</button>
    </main>
  )
}