import { useState } from 'react'


export function TwitterFollowCard ({userName, children, initialIsFollowing}){

    const [isFollowing, setIsFollow] = useState(initialIsFollowing)
    
    // const stateFollow = useState(false) --> devuelve array de 2 posiciones
    // const isFollowing = stateFollow[0] --> valor del estado
    // const setIsFollowing = stateFollow[1] --> funcion que permite actualizar el estado 

    const handleClick = () =>{
        setIsFollow(!isFollowing)
    }

    
    const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button' 

    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar' 
            src={`https://unavatar.io/${userName}`} alt="profile image"
            />

            <div className='tw-followCard-info'>
                <strong className='tw-followCard-infoUserName'>{children}</strong>
                <span className='tw-followCard-infoUserTag'>@{userName}</span> 
            </div>
        </header>

        <aside>
            <button onClick={handleClick} className={buttonClassName}>
                <span className='tw-followCard-isFollow'>{textButton}</span>
                <span className='tw-followCard-unFollow'>Dejar de seguir</span>
            </button>
        </aside>
        </article>
    )
}