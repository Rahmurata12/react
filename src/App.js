
import './App.css';
import GeneralProfile from './componentes/General-Profile/General-Profile';
import Historic from './componentes/Historic/Historic';
import MostPlayedChampions from './componentes/Most-Played-Champions/Most-Played-Champions';
import NavBar from './componentes/Nav-bar/Nav-bar';

function App() {
  return (
    <div className="Main-page">
      <NavBar></NavBar>
      <GeneralProfile></GeneralProfile>
      <MostPlayedChampions></MostPlayedChampions>
      <Historic></Historic>
    </div>
  );
}

export default App;
