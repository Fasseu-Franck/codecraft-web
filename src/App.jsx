// Routing pour parcourir les pages de l'application
import { ThemeProvider } from "@/src/components/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

// Auth pages
import { SigninPage } from "@/src/pages/Signin";
import { SignupPage } from "@/src/pages/Signup";

// Home page
import { Contact } from "@/src/pages/Contact";
import { Formations } from "@/src/pages/Formations";
import { Home } from "@/src/pages/Home";
import { HowItWorks } from "@/src/pages/HowItWorks";
import { Pricing } from "@/src/pages/Pricing";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Home />} />

          {/* Pages d'authentification */}
          <Route path="/register" element={<SignupPage />} />
          <Route path="/login" element={<SigninPage />} />

          {/* Pages comment ça marche */}
          <Route path="/comment-ca-marche" element={<HowItWorks />} />

          {/* Page Tarification */}
          <Route path="/tarifs" element={<Pricing />} />

          {/* Bibliothèque des formations */}
          <Route path="/formations" element={<Formations />} />

          {/* Page Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
