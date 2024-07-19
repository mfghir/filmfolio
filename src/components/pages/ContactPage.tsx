import ContactForm from "@/templates/contact-form"
import Image from "next/image"

const ContactPage = () => {
  return (
    <section className="w-full min-h-svh bg-fuchsia-600 py-28">
      <Image
        className="w-16 h-16 rounded-full object-fill "
        width={70}
        height={70}
        src="https://i.postimg.cc/yNpn4ymk/logo.png"
        alt="logo"
      />



      <ContactForm />


    </section>
  )
}

export default ContactPage