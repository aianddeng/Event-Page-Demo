import borderWrapperImg from '../assets/borderWrapper.png'

const BorderBox = () => {
  return (
    <div>
      <div className="w-full h-[77vw] relative">
        <div
          className="w-full h-full bg-no-repeat bg-center bg-contain absolute top-0 left-0 z-[-100]"
          style={{
            backgroundImage: `url(${borderWrapperImg})`,
          }}
        >
          <div className="h-full p-[3vw] text-center text-[#eadcae]">
            <h2 className="text-[#eadcae] text-[7.3vw] font-bold pt-[9vw] pb-[3vw] tracking-[3px]">
              精彩瞬间征集
            </h2>
            <div className="tracking-[4.2px] scale-[0.75] space-y-[2vw]">
              <div className="text-white text-[4vw] origin-top space-y-[1.8vw]">
                <p>艺术之旅精彩动人</p>
                <p>上传你拍下的精彩照片（最多6张）</p>
                <p>审核通过后发布于首页，</p>
              </div>
              <div className="text-[#eadcae] text-[4vw] space-y-[1.8vw] font-bold">
                <p>获得点赞数量最高的前10名用户</p>
                <p>即可获得11月15日压轴场的门票~</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BorderBox
