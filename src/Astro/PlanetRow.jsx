import {useState} from 'react'
import {Moon} from './Moon'
import {Planet} from './Planet'
import './index.css'

export function PlanetRow({planet}) {
  const [orbitCount, setOrbitCount] = useState(0)

  const increment = () => setOrbitCount(prev => ++prev)
  const decrement = () => setOrbitCount(prev => --prev)
  return (
    <artitle className='planetRow' >
      <Planet title={planet.title} count={orbitCount}/>
      {planet.moons?.map(moon => (
        <Moon 
          moon={moon}
          increment={increment}
          decrement={decrement}
        />
      ))}
    </artitle>
  )
}