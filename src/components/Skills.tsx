const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'Tailwind', 'Git'];

export default function Skills() {
  return (
    <section className="mt-10 px-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
