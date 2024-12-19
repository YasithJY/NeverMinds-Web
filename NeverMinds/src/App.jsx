import Footer from "./components/Footer";
import Hero from "./components/hero";
import Sidebar from "./components/sidebar";
import Team from "./components/Team";

const App = () => {
  return (
    <div className="flex bg-gray-50">
        <Sidebar />
      <main className="w-full">
        <Hero />
        <Team />
        <Footer />
       
      </main>
    </div>
  );
};

export default App;
