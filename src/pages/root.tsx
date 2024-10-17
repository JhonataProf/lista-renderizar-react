import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="flex justify-center">
      <h1 className="text-3xl font-bold underline">Página Root</h1>
      <Outlet />
      </div>
    </>
  );
};
export default Root;
