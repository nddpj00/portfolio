import FilterProjects from "./components/FilterProjects";
import HeroContainer from "./components/HeroContainer";
import ProjectDisplay from "./components/ProjectDisplay";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white min-h-screen">
      <div className="sm:mx-6 md:mx-10 lg:mx-18 xl:mx-40">
        <HeroContainer />
        <FilterProjects />
        <ProjectDisplay />
      </div>
    </div>
  );
}
