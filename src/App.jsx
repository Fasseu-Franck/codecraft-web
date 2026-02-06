// Routing pour parcourir les pages de l'application
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

// Auth pages
import { SigninPage } from "@/src/pages/Signin";
import { SignupPage } from "@/src/pages/Signup";

// Home page
// Home page
import { Home } from "@/src/pages/Home";
import { HowItWorks } from "@/src/pages/HowItWorks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />
        <Route path="/comment-ca-marche" element={<HowItWorks />} />

        {/* Pages d'authentification */}
        <Route path="/inscription" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/connexion" element={<SigninPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
