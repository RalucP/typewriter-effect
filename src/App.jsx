import './App.css'
import TypingComponent from './components/TypingComponent'

function App() {
  const carouselText = ["Passport✈️", "Sun Screen☀️", "Camera📷", "Phone Charger📱", "Comfortable shoes👞", "Head phones🎶", "Lip Balm💄"];

  return (
    <div className='text-wrapper'>
      <p className='text'>Packing for you adventure! Do not forget: </p>
      <TypingComponent
        sentences={carouselText}
      />
    </div>
  )
}

export default App
