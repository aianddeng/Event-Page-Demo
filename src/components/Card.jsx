import LikePng from '../assets/like.png'

export default function Card({ image, name, like }) {
  return (
    <div className="rounded-md mt-[1vw] h-[53vw] flex flex-col justify-between overflow-hidden">
      <div
        className="flex-grow bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="h-[10vw] px-[4vw] bg-[#cfba80] flex justify-between items-center font-bold text-[3.8vw]">
        <div>{name}</div>
        <div className="flex items-center">
          <div className="scale-75 text-[0px]">
            <img src={LikePng} className="h-full max-h-full" alt="" />
          </div>
          <span className="text-[#887130]">{like}</span>
        </div>
      </div>
    </div>
  )
}
