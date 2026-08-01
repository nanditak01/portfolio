export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-gray-100 px-8 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Case Studies
      </h1>

      <div className="space-y-8">

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Student Dashboard
          </h2>

          <p className="mb-2">
            <strong>Project Goal:</strong> Build a simple and responsive dashboard for students to view courses, assignments, and learning progress.
          </p>

          <p className="mb-2">
            <strong>My Role:</strong> Designed and developed the user interface using React and Tailwind CSS.
          </p>

          <p className="mb-2">
            <strong>What I Learned:</strong> Creating reusable components, responsive layouts, and improving user experience.
          </p>

          <p>
            <strong>Technologies:</strong> React, Tailwind CSS
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Portfolio Website
          </h2>

          <p className="mb-2">
            <strong>Project Goal:</strong> Create a personal portfolio to showcase my projects, skills, and case studies.
          </p>

          <p className="mb-2">
            <strong>My Role:</strong> Designed the layout and built the website using Next.js and Tailwind CSS.
          </p>

          <p className="mb-2">
            <strong>What I Learned:</strong> File-based routing in Next.js, reusable components, and portfolio design.
          </p>

          <p>
            <strong>Technologies:</strong> Next.js, Tailwind CSS
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Source-Grounded Study Notes Workflow
          </h2>

          <p className="mb-2">
            <strong>Project Goal:</strong> Create accurate study notes from source documents using NotebookLM.
          </p>

          <p className="mb-2">
            <strong>My Role:</strong> Organized source materials, generated structured notes, and documented the complete workflow.
          </p>

          <p className="mb-2">
            <strong>What I Learned:</strong> AI-assisted note generation, organizing information, and creating reliable study resources.
          </p>

          <p>
            <strong>Technologies:</strong> NotebookLM, AI-assisted learning
          </p>
        </div>

      </div>
    </main>
  );
}