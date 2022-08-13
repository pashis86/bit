import logo from './logo.svg';
import './App.css';
import Song from './component/Song';
let songs = [{artistName:"Prodigy", songName:"Fire Starter"},{artistName:"Daft Punk", songName:"Revolution 909"},{artistName:"Joey Beltram", songName:"Energy Flash"}];


function App() {
  return (
   <Song
   dainos = {songs}/>
  );
}


export default App;
