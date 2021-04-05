import Navbar from './components/Navbar'
import Champion from './components/Champion'


function App() {
  return (
    <div>
        <Navbar/>
        <Champion role="Top" />
        <Champion role="Jg" />
        <Champion role="Mid" />
        <Champion role="Adc" />
        <Champion role="Supp" />
    </div>
  );
}

export default App;
