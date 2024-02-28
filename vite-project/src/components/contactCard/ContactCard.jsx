import "./ContactCard.css";

export default function ContactCard({ name, phoneNumber, email }) {
  return (
    <div className="contact-card">
      <h3>{name}</h3>
      <p>Phone: {phoneNumber}</p>
      <p>Email: {email}</p>
    </div>
  );
}
