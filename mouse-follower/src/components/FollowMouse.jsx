import { useState, useEffect } from 'react'

export function FollowMouse() {
    const [enable, setEnable] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const handleClick = () => {
        setEnable(!enable)
    }


    //useEffect
    useEffect(() => {
        console.log('useEffect')

        const handleMove = (event) => {
            const { clientX, clientY } = event
            setPosition({ x: clientX, y: clientY })
        }

        if (enable) {
            window.addEventListener('pointermove', handleMove)
        }

        //se ejecuta 
        //cuando deja de renderizar el componente
        //cuando cambia la dependecia

        //se crea metodo para limpiar el efecto -> cleanup 

        return () => {
            setPosition({ x: 0, y: 0 }) //se reinicia el estado
            window.removeEventListener('pointermove', handleMove)
        }

    }, [enable])


    return (
        <main>
            <div style={{
                position: 'absolute',
                backgroundColor: '#646cff',
                borderRadius: '50%',
                opacity: 0.8,
                boxShadow: '0 0 10px #646cff',
                filter: 'blur(5px)',
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 20,
                height: 20,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
            />

            <h3>Mouse Follower</h3>
            <button onClick={handleClick}>
                {enable ? 'Disable' : 'Enable'} mouse follow
            </button>
        </main>
    )
}