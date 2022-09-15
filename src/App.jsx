import './App.css'
import Faq from './components/faq/Faq'
import Collection from './components/collection/Collection'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Community from './components/community/Community'
import Newsletter from './components/newsletter/Newsletter'
import Footer from './components/footer/Footer'
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Collection/>
      <Faq/>
      <Community/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
