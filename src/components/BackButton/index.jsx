import backImg from './back.png'
import { useHistory } from 'react-router-dom'

const BackButton = () => {
  const history = useHistory()

  return (
    <div className="h-[6.9vw]">
      <img
        src={backImg}
        alt=""
        className="h-full max-h-full"
        onClick={() => history.goBack()}
      />
    </div>
  )
}

export default BackButton
