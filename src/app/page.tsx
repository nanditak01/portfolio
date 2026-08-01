import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          Nandita K
        </h1>

        <h2 className="text-2xl text-gray-700 mb-6">
          Electronics and Communication Engineering Student
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
          I enjoy building web applications and learning new technologies.
          My portfolio showcases projects, case studies, and the skills I've
          developed through coursework and internships.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-xl mb-3">Frontend</h3>
            <p>React, Next.js, Tailwind CSS, HTML, CSS, JavaScript</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-xl mb-3">Programming</h3>
            <p>Python, C, Embedded Systems</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-xl mb-3">Tools</h3>
            <p>GitHub, VS Code, NotebookLM, Vercel</p>
          </div>

        </div>
      </section>

    </main>
  );
}