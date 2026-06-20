function About() {
  return (
    <section id="about" className="card">
      <h1>About Me</h1>

      <img
        className="profile-photo"
        src="/assets/images/profile-photo.jpg"
        alt="Professional photo of Sara"
      />

      <h2>Sara Rouane</h2>

      <p>
        My name is Sara Rouane, and I am currently studying Software Engineering
        Technology with a focus on web development and artificial intelligence.
        I also have a background in interior design, which has helped me develop
        strong creative, visual, and problem-solving skills. I enjoy learning new
        technologies, building practical solutions, and combining design with
        technical knowledge to create engaging user experiences.
      </p>

      <a className="button" href="/assets/files/resume.pdf" target="_blank">
        View My Resume
      </a>
    </section>
  )
}

export default About