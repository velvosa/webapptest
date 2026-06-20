function Contact() {
  return (
    <>
      <section id="contact" className="contact-panel">
        <h1>Contact Me</h1>
        <p><strong>Email:</strong> srouane@my.centennialcollege.ca</p>
        <p><strong>Phone:</strong> 514-123-4567</p>
        <p><strong>GitHub:</strong> https://github.com/velvosa</p>
        <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/sararouane</p>
      </section>

      <section className="card">
        <h2>Send a Message</h2>

        <form id="contactForm">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="phone">Contact Number</label>
          <input type="text" id="phone" name="phone" />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  )
}

export default Contact