import ContactForm from "@/templates/contact-form"
import Image from "next/image"

const ContactPage = () => {
  return (
    <section className="w-full h-full  place-items-center grid grid-cols-1 gap-y-6 lg:grid-cols-2">
      <div className="w-full flex flex-col gap-y-4">
        <p className="text-2xl font-bold text-primary">فرم تماس</p>
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