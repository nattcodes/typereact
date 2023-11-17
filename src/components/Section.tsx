
type SectionProps = {
  title: string
}

const Section = ({
title = "Subheading"

}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, architecto!</p>
    </section>
  )
}

export default Section