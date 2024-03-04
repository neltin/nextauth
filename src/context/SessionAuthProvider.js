import { SessionProvider } from "next-auth/react";

// Eliminamos las anotaciones de tipos
const SessionAuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

// Exportamos el componente
export default SessionAuthProvider;