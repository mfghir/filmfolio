import ContactForm from "@/templates/contact-form"
import Image from "next/image"

const ContactPage = () => {
  return (
    <section className="w-full h-full place-items-center grid grid-cols-1 gap-y-6 lg:grid-cols-2">
      <div className="w-full flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-2xl lg:text-3xl font-bold galaxy-gradient-text">فرم  تماس</h3>
          <p className="text-gray-700 dark:text-gray-400 text-base">
            ما توی فیلم فولیو همیشه دنبال این هستیم که تجربه کاربرا رو بهتر کنیم و محتوای دقیق و خوبی ارائه بدیم. اگه سوال، پیشنهاد یا نظری در مورد مطالب ما داری، خیلی خوشحال می‌شیم از طریق این فرم باهامون در تماس باشی. تیم ما آماده‌ست بهت جواب بده و نظرات ارزشمندت رو برای بهبود سایت و محتوامون در نظر بگیره. منتظر پیام‌هات هستیم!
          </p>
        </div>
        <ContactForm />
      </div>


      <Image
        className="lg:w-[550px] lg:h-[550px] object-fill rounded-3xl"
        width={1024}
        height={1024}
        src="https://i.postimg.cc/1zhcQN4K/contact.jpg"
        alt="logo"
      />
    </section>
  )
}

export default ContactPage