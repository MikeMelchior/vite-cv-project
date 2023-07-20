import Inputs from "./components/Inputs";
import Outputs from "./components/Outputs";
import Sidebar from "./components/Sidebar";

export default function App() {

	return (
    <main className="grid md:grid-cols-3 text-blue-500 m-[24px] gap-[24px]">
      <Sidebar />
      <Inputs />
      <Outputs />
    </main>
  );
}
