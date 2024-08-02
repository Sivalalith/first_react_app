import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy User",
    email: "dummy@email.com",
  },
});

export default UserContext;
