import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div className="flex justify-between mt-5 md:mt-2 pt-16">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
