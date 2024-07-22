import ContactForm from "@/templates/contact-form"
import Image from "next/image"

const ContactPage = () => {
  return (
    <section className="w-full h-full  place-items-center
    grid grid-cols-1 lg:grid-cols-2
    
    ">
      <div className="w-full flex flex-col gap-y-4">
        <p className="text-2xl font-bold text-primary">فرم تماس</p>
        <ContactForm />
      </div>


      <img
        className="lg:w-[550px] lg:h-[550px] object-fill bg-white/20"
        // width={900}
        // height={900}
        // src="https://i.postimg.cc/sgjYKhJ7/Call-Center-Streamline-Havana.png"
        src="/Contact.svg"
        alt="logo"
      />
    </section>
  )
}

export default ContactPage