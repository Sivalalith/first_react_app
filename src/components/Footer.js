import UserContext from "../utils/UserContext";
import { useContext } from "react";
// footer component
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h4 className="p-5 m-5">
      It is developed by {user.name}-{user.email}
    </h4>
  );
};

export default Footer;
