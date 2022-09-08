import {useState, useEffect} from 'react'
import {PlanetRow} from './PlanetRow'
import {planets, moons} from './data'

export function Astro() {
  const [customPlanets, setCustomPlanets] = useState([])

  useEffect(() => {
    const mappedPlanets = (planets, moons) => {
      console.log(planets)
      return planets.map(planet => {
        const filteredMoons = moons.filter(moon => moon.planetId === planet.id)
        return {
          id: planet.id,
          title: planet.title,
          moons: filteredMoons,
        }
      })
    }
    setCustomPlanets(mappedPlanets(planets, moons))
  }, [])
   console.log(customPlanets)
  return (
    <section className='container'>
      {customPlanets?.map(planet => (<PlanetRow key={planet.id} planet={planet}/>))}
    </section>
  )
}