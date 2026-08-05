import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import { LoginModalProvider } from "./components/common/LoginModal.jsx";

import Landing from "./pages/Landing.jsx";
import Hub from "./pages/Hub.jsx";
import Alumni from "./pages/Alumni.jsx";
import Calendario from "./pages/Calendario.jsx";
import Mentores from "./pages/Mentores.jsx";
import Perfil from "./pages/Perfil.jsx";
import Perks from "./pages/Perks.jsx";
import Recursos from "./pages/Recursos.jsx";
import { HashRouter } from "react-router-dom";


const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginModalProvider>
        <HashRouter>
          <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col">
            <Navbar />

            <main className="flex-1 pt-20">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/hub" element={<Hub />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/mentores" element={<Mentores />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/perks" element={<Perks />} />
                <Route path="/recursos" element={<Recursos />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </HashRouter>
      </LoginModalProvider>
    </QueryClientProvider>
  );
}