import { TwitterFollowCard } from './TwitterCollowCard'
import './app.css'


export function App () {

    const users = [
        {
            initialIsFollowing: true,
            userName: 'midudev',
            name: 'Miguel Angel Duran'
        },
        {
            initialIsFollowing: false,
            userName: 'coniconi',
            name: 'Nicoll Cano Castro'
        },
        {
            initialIsFollowing: false,
            userName: 'elXocas',
            name: 'David Santiago Usuga'
        },
        {
            initialIsFollowing: true,
            userName: 'midu',
            name: 'Miguel Angel Sanchez'
        }
    ]
        
    
    return (
        <section className="app">
            {
              users.map(user => {
                const {initialIsFollowing, name, userName} = user
                return (
                    <TwitterFollowCard
                        key={userName}
                        initialIsFollowing={initialIsFollowing}
                        userName={userName}
                    >
                        {name}
                    </TwitterFollowCard>
                )
              })
            }
        </section>
    )
}
  

