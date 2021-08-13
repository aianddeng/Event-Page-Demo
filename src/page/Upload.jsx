import BackButton from '../components/BackButton'
import FixedButton from '../components/FixedButton'
import borderWrapperImg from '../assets/borderWrapper2.png'
import demoPhoto1 from '../assets/demoPhoto1.png'
import demoPhoto2 from '../assets/demoPhoto2.png'
import demoPhoto3 from '../assets/demoPhoto3.png'
import demoPhoto4 from '../assets/demoPhoto4.png'
import PhotoCard from '../components/PhotoCard'
import { useMemo, useState } from 'react'

const UploadPhoto = () => {
  const [photoList] = useState([
    {
      src: demoPhoto1,
    },
    {
      src: demoPhoto2,
    },
    {
      src: demoPhoto3,
    },
    {
      src: demoPhoto4,
    },
  ])

  const photoListData = useMemo(() => {
    return photoList.length < 6 ? photoList.concat({}) : photoList
  }, [photoList])

  return (
    <>
      <BackButton />
      <div className="my-[36px]">
        <h2 className="text-center text-[25.5px] leading-[1em] text-[#eadcae] tracking-[4.5px]">
          上传照片
        </h2>
      </div>
      <div>
        <div className="max-w-[262.5px] h-[329px] m-auto relative overflow-hidden">
          <div
            className="w-full h-full bg-no-repeat bg-center bg-contain absolute top-0 left-0"
            style={{
              backgroundImage: `url(${borderWrapperImg})`,
            }}
          >
            <div className="grid grid-cols-2 gap-[13px] px-[29.5px] py-[18px]">
              {photoListData.map((el, index) => (
                <PhotoCard src={el.src} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FixedButton text="确认" href="/infomation" />
    </>
  )
}

export default UploadPhoto
