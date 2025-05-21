import Accueil from "../pages/Accueil";
import Connexion from "../pages/auth/Connexion";
import Inscription from "../pages/auth/Inscription";
import InscriptionCom from "../pages/Communauter/InscriptionCom";

const publicRoutes = [
  { path: "/", element: Accueil },
  { path: "/login", element: Connexion },
  { path: "/register", element: Inscription },
  { path: "/inscriptionCom", element: InscriptionCom },
];

export default publicRoutes;
