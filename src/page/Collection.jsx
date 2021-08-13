import titlePng from '../assets/title.png'

import FixedButton from '../components/FixedButton'
import BorderBox from '../components/BorderBox'
import BackButton from '../components/BackButton'
import RuleLink from '../components/RuleLink'

const Wrapper = () => {
  return (
    <>
      <div>
        <BackButton />
      </div>
      <div className="px-[5vw] pb-[1vw]">
        <img src={titlePng} alt="" className="m-auto" />
      </div>
      <div>
        <BorderBox />
      </div>
      <FixedButton text="上传照片" />
      <RuleLink text="活动规则" link="#" />
    </>
  )
}

export default Wrapper
