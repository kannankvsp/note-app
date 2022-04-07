import {useState} from 'react';

function Heading(){
  const [header, setHeader] = useState('');
  const [headerinput, setHeaderInput] = useState('');
  const [notes, setNotes] = useState([]);
  const [noteinput, setNoteInput] = useState('');

  if (header) {
     return(<>
     <h3>{header}</h3>
     <ol>{notes.map((item)=>{
          return <li key={item.key}>{item.value}</li>
        })}</ol>
    <input placeholder='type your notes' type="text" value={noteinput} onChange={(e)=>{setNoteInput(e.target.value)}}/>
    <button onClick={()=>{
      setNotes([...notes, {key: notes.length, value: noteinput}]);
      setNoteInput('');
    }}>Add Note</button>
    <br/>
    <button onClick={()=>{
      setHeader('');
      setHeaderInput('');
      setNotes([]);
      setNoteInput('');
    }
    }>Remove all</button>
     </>
     )}
  else{
    return(
      <>
      <input type="text" placeholder='Enter the title' value={headerinput} onChange={(e)=>setHeaderInput(e.target.value)}/>
      <button onClick={()=>setHeader(headerinput)}>OK</button>
      </>
    )}
}
function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <h1>Java sample approach</h1>
      {Heading()}
    </div>
  );
}

export default App;
