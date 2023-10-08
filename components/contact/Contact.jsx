import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div className="flex">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
