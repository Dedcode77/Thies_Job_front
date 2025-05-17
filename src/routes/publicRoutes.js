import Accueil from "../pages/Accueil";
import Connexion from "../pages/auth/Connexion";
import Inscription from "../pages/auth/Inscription";

const publicRoutes = [
  { path: "/", element: Accueil },
  { path: "/login", element: Connexion },
  { path: "/register", element: Inscription },
];

export default publicRoutes;
