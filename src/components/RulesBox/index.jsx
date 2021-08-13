import closePng from './close.png'

const RulesBox = ({ showRules, onClick }) => {
  return (
    <>
      {showRules ? (
        <div className="fixed top-0 left-0">
          <div className="flex flex-col justify-center items-center w-screen h-screen bg-[rgba(0,0,0,.8)]">
            <div className="border border-[#f2e3b5] bg-[#766b4c] w-[285px] h-[450px] py-[26.5px] px-[24px]">
              <div className="text-white text-[12px] leading-[1em]">
                <h2 className="mb-[19px] text-[17px] leading-[1em] font-bold tracking-[3px] text-center">
                  活动规则
                </h2>
                <ul className="tracking-[0.8px] font-thin list-decimal list-outside space-y-[2.8px] leading-[16px]">
                  <li>本次照片征集对象为现场参与活动的用户</li>
                  <li>同一个手机号码只能参与一次</li>
                  <li>照片审核时间为1个工作日，请耐心等待</li>
                  <li>照片审核通过后会在首页展示</li>
                  <li>点赞功能仅在微信端可用，每个微信号每天仅可点赞1次</li>
                  <li>
                    用户可关注科勒微信公众号，在菜单栏“最新活动”→“罗依尔艺术时光秀”→“打卡集赞”找到入口
                  </li>
                  <li>
                    点赞截止日期：11月10日，点赞最高的前10名获得11月15日压轴场的现场门票
                  </li>
                </ul>
                <h2 className="mt-[23px] mb-[19px] text-[17px] leading-[1em] font-bold tracking-[3px] text-center">
                  演出时间及地点
                </h2>
                <ul className="tracking-[0.8px] font-thin list-decimal space-y-[2.8px] leading-[16px]">
                  <li>演出时间：10月11日-11月15日每周日下午2点</li>
                  <li>
                    具体演出排期可关注科勒微信公众号在菜单栏中找到购票渠道
                  </li>
                  <li>演出地址：南京西路456号科勒上海体验中心</li>
                </ul>
                <h3 className="opacity-50 mt-[12.5px] scale-90 text-center">
                  本次活动最终解释权归科勒公司所有
                </h3>
              </div>
            </div>
            <button
              className="text-white w-[16px] h-[16px] mt-[15.5px]"
              onClick={() => onClick()}
            >
              <img src={closePng} alt="close" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default RulesBox
