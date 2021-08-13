import photoPng from '../assets/photo.png'
import Card from '../components/Card'
import HeadTitle from '../components/HeadTitle'
import FixedButton from '../components/FixedButton'
import { useState } from 'react'

export default function CardList() {
  const [cards] = useState(
    Array(7).fill({
      image: photoPng,
      name: '陈欢',
      like: 20,
    })
  )

  return (
    <>
      <HeadTitle />
      <div className="grid grid-cols-2 gap-[8px] px-[22px] py-[13.5px]">
        {cards.map((el, index) => (
          <Card {...el} key={index} />
        ))}
      </div>
      <FixedButton text="赢取门票" fixed href="/collection" />
    </>
  )
}
