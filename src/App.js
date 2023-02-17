import './App.css';
import { useState } from 'react';

function App() {

  const [calcText, setCalcText] = useState ("");

  const editCalcText = (input) => {
    setCalcText(calcText.concat(input));
    //console.log(input)
  }

  const clearCalcText = (input) => {
    setCalcText(input);
  }
  
  const calculate = () => {
  
    if(calcText != "")
    {
      let calcResult = (`${eval(calcText)}`);
      return calcResult;
    }
    else
    {
      return "";
    }  
    
  }

const dec2bin = () => {
  if(calcText != "")
  {

    return (`${(eval(calcText) >>> 0).toString(2)}`);          
  }
  else
  {
    return "";
  }  
}
const bin2Dec = () => {
  if(calcText != "")
    {
      // not working yet
      return (`${(eval(calcText) >>> 0).toString(10)}`);     
    }
    else
    {
      return "";
    }  
}

  return (
    <div className="App">

      <div className="calculator">
        <div className="calcText">{calcText}</div>        
        <div className="button" onClick={() => {editCalcText("1")}}>1</div>
        <div className="button" onClick={() => {editCalcText("2")}}>2</div>
        <div className="button" onClick={() => {editCalcText("3")}}>3</div>
        <div className="button" onClick={() => {editCalcText("+")}}>+</div>     
        <div className="button" onClick={() => {editCalcText("4")}}>4</div>
        <div className="button" onClick={() => {editCalcText("5")}}>5</div>
        <div className="button" onClick={() => {editCalcText("6")}}>6</div>
        <div className="button" onClick={() => {editCalcText("-")}}>-</div>
        <div className="button" onClick={() => {editCalcText("7")}}>7</div>
        <div className="button" onClick={() => {editCalcText("8")}}>8</div>
        <div className="button" onClick={() => {editCalcText("9")}}>9</div>
        <div className="button" onClick={() => {editCalcText("*")}}>x</div>     
        <div className="button" onClick={() => {clearCalcText("")}}>c</div>
        <div className="button" onClick={() => {editCalcText("0")}}>0</div>
        <div className="button" onClick={() => {editCalcText(".")}}>.</div>
        <div className="button" onClick={() => {editCalcText("/")}}>/</div>
        <div className="button" onClick={() => {editCalcText(`**2`)}}>Sqr</div>
        <div className="button" onClick={() => {editCalcText(`**3`)}}>Cub</div>
        <div className="button" onClick={() => {editCalcText(`**`)}}>Pwr</div>
        <div className="button" onClick={() => {setCalcText(calculate())}}>=</div>
        <div className="button" onClick={() => {setCalcText(dec2bin())}}>bin</div>
        <div className="button" onClick={() => {setCalcText(bin2Dec())}}>den</div>
        <div className="button" onClick={() => {editCalcText(`(`)}}>&#40;</div>
        <div className="button" onClick={() => {editCalcText(`)`)}}>&#41;</div>
      </div>
     
    </div>
  );
}

export default App;
