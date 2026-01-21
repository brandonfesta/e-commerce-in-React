import { useState } from "react"

export default function AsciiConvrter() {
 const [convertedText, setConvertedText] = useState([])

  function createAsciiCode(text){
    let asciiTest =  [...text].map((letter) => " " + letter.charCodeAt(0))
    setConvertedText(asciiTest)
  }

  let displayArray = convertedText.map((item) => item)

  return (
    <div>
      <input type="text" onChange={(event) => createAsciiCode(event.target.value)}/>
      {displayArray}
    </div>
  )
}
