import { Outlet } from "react-router-dom";
import ComingSoon from "./ComingSoon";

export default function Root() {
  const isComingSoon = false;
  return <>{isComingSoon ? <ComingSoon /> : <Outlet />}</>;
}
