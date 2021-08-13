import buttonImg from './button.png'

const FixedButton = ({ text, fixed, onClick }) => {
  return (
    <div
      className={
        'flex justify-center items-center w-full ' +
        (fixed ? 'fixed bottom-[17vh] left-0' : '')
      }
      onClick={onClick}
    >
      <img src={buttonImg} className="w-[40vw]" alt="" />
      <p className="absolute font-bold text-[4.4vw] pb-[2vw]">{text}</p>
    </div>
  )
}

export default FixedButton
