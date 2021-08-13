import backImg from './back.png'
import { useHistory } from 'react-router-dom'

const BackButton = () => {
  const history = useHistory()

  return (
    <div className="mx-[15.5px] mb-[10px] h-[28.5px] w-[37.5px]">
      <img
        src={backImg}
        alt="back"
        className="h-full max-h-full w-full max-w-full"
        onClick={() => history.goBack()}
      />
    </div>
  )
}

export default BackButton
