import LikePng from '../assets/like.png'

export default function Card({ image, name, like }) {
  return (
    //  w-[161px]
    <div className="rounded-md h-[200px] flex flex-col justify-between overflow-hidden">
      <div
        className="flex-grow bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="h-[38.5px] px-[14px] bg-[#cfba80] flex justify-between items-center font-bold text-sm">
        <div className="font-bold">{name}</div>
        <div className="flex items-center">
          <div className="w-[12px] h-[10.5px] mr-[4px]">
            <img
              src={LikePng}
              className="h-full max-h-full w-full max-w-full"
              alt="heart"
            />
          </div>
          <span className="text-[#887130]">{like}</span>
        </div>
      </div>
    </div>
  )
}
