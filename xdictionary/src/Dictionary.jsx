import React , {useState} from 'react'

export default function Dictionary() {
    let [inputText, setInputText] = useState('')
    let [wordsMeaning, setWordsMeaning] = useState(
        [
        
            { word: "React", meaning: "A JavaScript library for building user interfaces." },
        
            { word: "Component", meaning: "A reusable building block in React." },
        
            { word: "State", meaning: "An object that stores data for a component." }
        
        ]
        )

    let [definition , setDefinition] = useState('')

    let handleInput = (e) => {
        setDefinition('')
        let value = e.target.value
        setInputText(value)
    }

    let searchMeaning = (e) => {
        let found = false
        if(inputText.length > 0){
            for(let index in wordsMeaning){
                if(wordsMeaning[index].word.toLowerCase() === inputText.toLowerCase()){
                    setDefinition(wordsMeaning[index].meaning)
                    found = true
                }
                
            }
            if(!found){
                setDefinition("Word not found in the dictionary.")
            }
        }else{
            setDefinition("Word not found in the dictionary.")
        }
    }
  return (
    <div>
        <h1>Dictionary App</h1>
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={searchMeaning}>Search</button>
        <h2>Definition: </h2>
        {
            definition.length > 0 && <p>{definition}</p>
        }
        
    </div>
  )
}
