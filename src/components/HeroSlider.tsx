import { heroSliderText } from "../constants"


const HeroSlider = () => {
  return (
    <div className="bg-darkzinc h-20 flex items-center">
      <div className="slider-container">
        <div className="slider-track">
          {heroSliderText.map((text, index) => (
            <span key={index} className="text-2xl text-creampaper whitespace-nowrap">{text}</span>
          ))}
          {heroSliderText.map((text, index) => (
            <span key={`duplicate-${index}`} className="text-2xl text-creampaper whitespace-nowrap">{text}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSlider