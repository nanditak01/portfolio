export default function About() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        About Me
      </h1>

      <p className="text-lg mb-4">
        Hello! I'm Nandita K, an Electronics and Communication Engineering student.
      </p>

      <p className="text-lg mb-4">
        I enjoy building web applications, AI projects, and embedded systems. I am
        passionate about learning new technologies and solving real-world problems.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Skills</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Python</li>
        <li>Machine Learning</li>
        <li>Embedded Systems</li>
      </ul>
    </main>
  );
}