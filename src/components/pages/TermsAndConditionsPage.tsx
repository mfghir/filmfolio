import Image from 'next/image'
import { termsItems } from '@/utilities/types-data'
import HexagonGradientIcon from '@/utilities/HexagonGradientIcon'

const TermsAndConditionsPage = () => {
  return (
    <section className="w-full h-full place-content-between justify-between  grid grid-cols-1 gap-y-6 lg:grid-cols-2">
      <section>
        <div className="flex flex-col gap-y-3">
          <h3 className="text-2xl lg:text-3xl font-bold galaxy-gradient-text">قوانین و مقررات</h3>
          <p className="text-gray-700 dark:text-gray-400 text-base ">
            سلام دوستان عزیز! خوشحالیم که توی فیلم‌فولیو هستید و می‌خوایم چندتا نکته مهم رو باهاتون در میون بذاریم تا همه بتونیم از این فضا لذت ببریم و تجربه بهتری داشته باشیم:
          </p>
        </div>

        <ul className="my-10 ">
          {termsItems.map((item,index) =>
            <li key={index} className="my-8 flex flex-col gap-y-2">
              <div className="flex gap-x-2">
                <HexagonGradientIcon sortType="" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{item.title}</h4>
              </div>
              <p className="text-base text-gray-700 dark:text-gray-400">{item.text}</p>
            </li>
          )}
        </ul>


        <p className="text-gray-700 dark:text-gray-400 text-base">
          با رعایت این موارد، می‌تونیم همگی از محیطی امن و دوستانه برای اشتراک‌گذاری نظرات و تجربیات فیلم‌بازیمون لذت ببریم. ممنون از همراهیتون!
        </p>
      </section>

      <Image
        className="w-auto h-auto lg:max-w-[550px] lg:max-h-[550px] object-fill rounded-3xl place-self-end self-start"
        width={1024}
        height={1024}
        src="https://i.postimg.cc/8kJ8pXNb/terms.jpg"
        alt="terms pic"
      />
    </section>
  )
}

export default TermsAndConditionsPage