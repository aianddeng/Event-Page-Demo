import addPng from './add.png'

export default function PhotoCard({ src }) {
  return (
    <div className="m-auto w-[89px] h-[89px] border border-[#f3e3b5] ">
      <div className="bg-[#f3e3b555] w-full h-full flex justify-center items-center">
        <div className={src ? 'w-full h-full' : 'w-[34.5px] h-[34.5px]'}>
          <img src={src || addPng} alt="add new" />
        </div>
      </div>
    </div>
  )
}
