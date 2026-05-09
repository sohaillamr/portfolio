export default function About() {
  return (
    <section id="about" className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400">
            At the intersection of computer science, marketing, and high-end graphic design. I specialize in integrating AI automation (Gemini/Groq APIs) into creative workflows to scale production and drive business results.
          </p>
        </div>
      </div>
    </section>
  );
}