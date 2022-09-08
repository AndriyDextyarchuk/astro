import {useState} from 'react' 
 
export function Moon({ moon, increment, decrement }) {
 const [isSelected, setIsSelected] = useState(false)
 console.log(moon);
 const clickHandler = () => {
   if(!isSelected) {
     increment()
   } else {
     decrement()
   }
   setIsSelected(prev => !prev)
 }
 return (
   <span  
     onClick={clickHandler} 
     className={isSelected ? 'moon selected' : 'moon'}
   >
     {moon.title}
   </span>);
}