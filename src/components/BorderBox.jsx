import borderWrapperImg from '../assets/borderWrapper.png'

const BorderBox = () => (
  <div>
    <div className="w-[280px] h-[290px] m-auto relative overflow-hidden">
      <div
        className="w-full h-full bg-no-repeat bg-center bg-contain absolute top-0 left-0"
        style={{
          backgroundImage: `url(${borderWrapperImg})`,
        }}
      >
        <div className="h-full text-center">
          <h2 className="text-[#eadcae] text-[25px] leading-[25px] font-bold tracking-[6px] pt-[56.5px] pb-[33px]">
            精彩瞬间征集
          </h2>
          <div className="text-white space-y-[12.5px] tracking-[2.5px] text-[12px] leading-[12px]">
            <p>艺术之旅精彩动人</p>
            <p>上传你拍下的精彩照片（最多6张）</p>
            <p>审核通过后发布于首页，</p>
          </div>
          <div className="text-[#eadcae] space-y-[8.5px] tracking-[2.6px] text-[13.5px] leading-[13.5px] mt-[8px] font-bold">
            <p>获得点赞数量最高的前10名用户</p>
            <p>即可获得11月15日压轴场的门票~</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default BorderBox
