import BackButton from '../components/BackButton'
import FixedButton from '../components/FixedButton'
import borderWrapperImg from '../assets/borderWrapper3.png'
import buttonImg from '../components/FixedButton/button.png'

const Infomation = () => {
  return (
    <>
      <BackButton />
      <div className="my-[36px]">
        <h2 className="text-center text-[25.5px] text-[#eadcae] tracking-[4.5px]">
          填写信息
        </h2>
      </div>
      <div>
        <div className="w-[317.5px] h-[329px] m-auto relative overflow-hidden">
          <div
            className="w-full h-full bg-no-repeat bg-center bg-contain absolute top-0 left-0"
            style={{
              backgroundImage: `url(${borderWrapperImg})`,
            }}
          >
            <div className="py-[20px] px-[41.5px]">
              <form
                action="#"
                method="post"
                className="text-white space-y-[10px]"
              >
                <div className="flex flex-col">
                  <label
                    className="leading-[1em] py-[8.5px] tracking-[6.5px] text-xs"
                    htmlFor="name"
                  >
                    姓名
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="bg-[#cfba80] border-[#766b4c] h-[36px] pl-[0.5em] border-l-[4px] text-sm tracking-[1px] outline-none text-[#675c3f]"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="leading-[1em] py-[8.5px] tracking-[6.5px] text-xs"
                    htmlFor="phone"
                  >
                    手机
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="bg-[#cfba80] border-[#766b4c] h-[36px] pl-[0.5em] border-l-[4px] text-sm tracking-[1px] outline-none text-[#675c3f]"
                    placeholder="请输入您的手机号"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="leading-[1em] py-[8.5px] tracking-[6.5px] text-xs"
                    htmlFor="check"
                  >
                    验证码
                  </label>
                  <div className="flex justify-between gap-[12px]">
                    <input
                      type="text"
                      name="check"
                      className="w-1/2 bg-[#cfba80] border-[#766b4c] h-[36px] pl-[0.5em] border-l-[4px] text-sm tracking-[1px] outline-none text-[#675c3f]"
                      placeholder="请输入验证码"
                    />
                    <div className="flex justify-center items-center w-[120px] h-[39.5pxz]">
                      <div className="w-full h-full">
                        <img
                          src={buttonImg}
                          className="w-full max-w-full h-full max-h-full"
                          alt="button"
                        />
                      </div>
                      <p className="absolute font-bold text-md pb-[3.5px] pr-[3.5px] text-black text-md">
                        发送验证码
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-gray-300 tracking-[2px] leading-[19px]">
                    *请确保填写的手机号码真实有效，照片审核通过后，您将收到短信通知，作品也将在【首页】中展示
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FixedButton text="提交" />
    </>
  )
}

export default Infomation
