import buttonImg from './button.png'
import { useHistory } from 'react-router-dom'

const FixedButton = ({ text, fixed, href, className }) => {
  const history = useHistory()
  const redirectLink = (link) => {
    history.push(link)
  }

  return (
    <div
      className={
        'mt-[12.5px] pt-[3.5px] pl-[3.5px] flex justify-center items-center w-full ' +
        (fixed ? 'fixed bottom-[126px] left-0 ' : '') +
        (className ? className : '')
      }
      onClick={() => redirectLink(href)}
    >
      <div className="w-[143.5px] h-[43.5px]">
        <img
          src={buttonImg}
          className="w-full max-w-full h-full max-h-full"
          alt="button"
        />
      </div>
      <p className="absolute font-bold text-md pb-[3.5px] pr-[3.5px]">{text}</p>
    </div>
  )
}

export default FixedButton
