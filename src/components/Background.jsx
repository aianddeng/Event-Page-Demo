import backgroundImage from '../assets/background.png'

const Background = () => (
  <div
    className="w-screen h-screen bg-no-repeat bg-center bg-cover fixed top-0 left-0 z-[-100]"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  />
)

export default Background
