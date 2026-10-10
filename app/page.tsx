
type Project = {
  id: number;
  name: string;
  description: string;
  progress: number;
  color: string;
};

type Task = {
  id: number;
  title: string;
  project: string;
  status: "To do" | "In progress" | "Done";
  priority: "High" | "Medium" | "Low";
};

const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "Personal portfolio redesign",
    progress: 75,
    color: "#818cf8",
  },
  {
    id: 2,
    name: "Mobile App",
    description: "Design and build a mobile app",
    progress: 45,
    color: "#34d399",
  },
  {
    id: 3,
    name: "IoT Dashboard",
    description: "Connected device monitoring",
    progress: 30,
    color: "#fbbf24",
  },
];

const tasks: Task[] = [
  {
    id: 1,
    title: "Design the dashboard",
    project: "Portfolio Website",
    status: "Done",
    priority: "High",
  },
  {
    id: 2,
    title: "Create the database schema",
    project: "Mobile App",
    status: "In progress",
    priority: "High",
  },
  {
    id: 3,
    title: "Build the navigation menu",
    project: "Portfolio Website",
    status: "In progress",
    priority: "Medium",
  },
  {
    id: 4,
    title: "Test sensor data display",
    project: "IoT Dashboard",
    status: "To do",
    priority: "Low",
  },
];

const statusStyles: Record<Task["status"], string> = {
  Done: "bg-emerald-100 text-emerald-700",
  "In progress": "bg-blue-100 text-blue-700",
  "To do": "bg-slate-100 text-slate-600",
};

const priorityStyles: Record<Task["priority"], string> = {
  High: "text-rose-600",
  Medium: "text-amber-600",
  Low: "text-slate-500",
};

export default function Home() {
  const completedTasks = tasks.filter(
    (task) => task.status === "Done"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 md:flex">
      <aside className="border-b border-slate-200 bg-white p-6 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
        <h1 className="text-2xl font-bold tracking-tight text-indigo-600">
          DevTrack.
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Your workspace
        </p>

        <nav className="mt-8 flex gap-3 overflow-x-auto md:flex-col">
          <a
            href="#dashboard"
            className="rounded-xl bg-indigo-50 px-4 py-3 font-medium text-indigo-700"
          >
            Dashboard
          </a>
          <a
            href="#projects"
            className="rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
          >
            Projects
          </a>
          <a
            href="#tasks"
            className="rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
          >
            My tasks
          </a>
        </nav>

        <div className="mt-10 hidden rounded-2xl bg-indigo-50 p-4 md:block">
          <p className="font-semibold text-indigo-900">
            Keep going!
          </p>
          <p className="mt-2 text-sm text-indigo-700">
            Small steps lead to big results.
          </p>
        </div>
      </aside>

      <section id="dashboard" className="min-w-0 flex-1 p-5 sm:p-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">
              Workspace / Overview
            </p>
            <h2 className="mt-1 text-3xl font-bold">
              Dashboard
            </h2>
            <p className="mt-2 text-slate-500">
              Track your projects and get things done.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium">
            DevTrack Workspace
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total projects"
            value={projects.length}
            detail="Across your workspace"
          />
          <StatCard
            title="Total tasks"
            value={tasks.length}
            detail="All project tasks"
          />
          <StatCard
            title="Completed"
            value={completedTasks}
            detail="Tasks finished"
          />
          <StatCard
            title="In progress"
            value={
              tasks.filter((task) => task.status === "In progress")
                .length
            }
            detail="Currently active"
          />
        </div>

        <section id="projects" className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-bold">Your projects</h3>
            <span className="text-sm text-slate-500">
              {projects.length} projects
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="mt-1 h-10 w-2 rounded-full"
                    style={{ backgroundColor: project.color }}
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold">{project.name}</h4>
                    <p className="mt-1 text-sm text-slate-500">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-between text-sm">
                  <span className="text-slate-500">Progress</span>
                  <span className="font-semibold">
                    {project.progress}%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${project.progress}%`,
                      backgroundColor: project.color,
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="tasks" className="mt-10">
          <h3 className="mb-5 text-xl font-bold">Recent tasks</h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-5 py-4 font-medium">Task</th>
                  <th className="px-5 py-4 font-medium">Project</th>
                  <th className="px-5 py-4 font-medium">Priority</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr
                    key={task.id}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="px-5 py-4 font-medium">
                      {task.title}
                    </td>
                    <td className="px-5 py-4 text-slate-500">
                      {task.project}
                    </td>
                    <td
                      className={`px-5 py-4 font-medium ${priorityStyles[task.priority]}`}
                    >
                      {task.priority}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${statusStyles[task.status]}`}
                      >
                        {task.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="mt-10 border-t border-slate-200 py-5 text-sm text-slate-400">
          DevTrack · Project management made simple
        </footer>
      </section>
    </main>
  );
}

function StatCard({
  title,
  value,
  detail,
}: {
  title: string;
  value: number;
  detail: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-3 text-3xl font-bold">{value}</p>
      <p className="mt-2 text-xs text-slate-400">{detail}</p>
    </article>
  );
}
