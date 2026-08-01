import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Student Dashboard",
      description:
        "Designed and developed a responsive Student Dashboard using React and Tailwind CSS. The dashboard includes course management, assignments, progress tracking, and a clean user interface.",
      image: "/images/student-dashboard.png",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website using Next.js and Tailwind CSS to showcase my projects, skills, case studies, and contact information.",
      image: null,
    },
    {
      title: "Source-Grounded Study Notes Workflow",
      description:
        "Created a structured study notes workflow using NotebookLM. Generated organized notes from source documents, summarized key concepts, and documented the complete workflow for learning and revision.",
      image: null,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 px-8 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        My Projects
      </h1>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="rounded-lg mb-4 w-full h-auto"
              />
            )}

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {project.title}
            </h2>

            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}