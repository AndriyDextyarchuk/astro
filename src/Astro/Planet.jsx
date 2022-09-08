export function Planet({count, title}) {

  let orbits = []
  for (let i = count; i > 0; --i) {
    orbits = [...orbits, (
      <div 
        key={i} 
        className='orbit' 
        style={{width: `${100 + (i*10)}px`, height: `${100 + (i*5)}px`}}
      />
    )]
  }

  return (
    <span className='planet'>
      {title}
      {orbits}
    </span> 
  )
}