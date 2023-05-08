import { Fireworks } from '@fireworks-js/react'

const FireworksBack = () => {
    return (
        <Fireworks
        options={{
            colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
            rocketsPoint: {
            min: 0,
            max: 100
            }
        }}
        style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            background: '#000'
        }}
        />
    )
}

export default FireworksBack;