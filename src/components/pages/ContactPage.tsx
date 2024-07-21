import ContactForm from "@/templates/contact-form"
import Image from "next/image"

const ContactPage = () => {
  return (
    <section className="w-full min-h-svh bg-fuchsia-600 py-28 lg:px-20 place-items-center
    grid grid-cols-1 lg:grid-cols-2
    ">
      <ContactForm />

      <Image
        className="lg:w-[550px] lg:h-[550px] object-fill bg-green-300"
        width={900}
        height={900}
        src="https://i.postimg.cc/sgjYKhJ7/Call-Center-Streamline-Havana.png"
        alt="logo"
      />
    </section>
  )
}

export default ContactPage