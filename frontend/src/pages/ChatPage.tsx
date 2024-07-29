import { Link } from "react-router-dom";
import { getRoutes } from "../routes";

export const ChatPage = () => {
  return (
    <>
      <h1>Chat</h1>
      <Link to={getRoutes.loginPagePath()}>Login</Link>
    </>
  );
};
