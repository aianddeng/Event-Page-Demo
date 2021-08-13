import FixedButton from '../components/FixedButton'
import BorderBox from '../components/BorderBox'
import BackButton from '../components/BackButton'
import RuleLink from '../components/RuleLink'
import HeadTitle from '../components/HeadTitle'
import RulesBox from '../components/RulesBox'
import { useCallback, useState } from 'react'

const Collection = () => {
  const [showRules, setShowRules] = useState(false)

  const handleSwitchShown = useCallback(
    () => setShowRules(!showRules),
    [showRules]
  )

  return (
    <>
      <BackButton />
      <HeadTitle />
      <BorderBox />
      <FixedButton text="上传照片" href="/upload" />
      <RuleLink text="活动规则" onClick={() => handleSwitchShown()} />
      <RulesBox showRules={showRules} onClick={() => handleSwitchShown()} />
    </>
  )
}

export default Collection
