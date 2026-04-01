function Contact() {
  return (
    <section className="card">
      <h1>Contact</h1>
      <p>This page will be upgraded with react-hook-form in finals_a3.</p>
      <div className="contact-placeholder">
        <div>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" disabled />
        </div>
        <div>
          <label>Message</label>
          <textarea placeholder="Type your message" rows={4} disabled />
        </div>
      </div>
    </section>
  )
}

export default Contact
