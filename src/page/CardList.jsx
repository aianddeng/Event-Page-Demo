import titlePng from '../assets/title.png'
import photoPng from '../assets/photo.png'
import Card from '../components/Card'
import FixedButton from '../components/FixedButton'
import { useHistory } from 'react-router-dom'

export default function CardList() {
  const history = useHistory()
  const redirectLink = (link) => {
    history.push(link)
  }

  return (
    <div className="space-y-5">
      <div className="px-[5vw] pb-[1vw]">
        <img src={titlePng} alt="" className="m-auto" />
      </div>
      <div className="grid grid-cols-2 gap-[2vw]">
        <Card image={photoPng} name="陈欢" like={20} />
        <Card image={photoPng} name="陈欢" like={20} />
        <Card image={photoPng} name="陈欢" like={20} />
        <Card image={photoPng} name="陈欢" like={20} />
        <Card image={photoPng} name="陈欢" like={20} />
      </div>
      <FixedButton
        text="赢取门票"
        fixed
        onClick={() => redirectLink('/collection')}
      />
    </div>
  )
}
