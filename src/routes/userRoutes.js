import Dashboard from "../pages/Dashboard";
import Acceuil from "../pages/Accueil";
import Connexion from "../pages/auth/Connexion";
import Inscription from "../pages/auth/Inscription";

const userRoutes = [
  { path: "/", element: Acceuil },
  { path: "/login", element: Connexion },
  { path: "/register", element: Inscription },
  { path: "/dashboard", element: Dashboard },
];

export default userRoutes;
