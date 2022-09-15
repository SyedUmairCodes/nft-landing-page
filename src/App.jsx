import './App.css'
import Faq from './components/faq/Faq'
import Collection from './components/collection/Collection'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Community from './components/community/Community'
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Collection/>
      <Faq/>
      <Community/>
    </div>
  )
}

export default App
