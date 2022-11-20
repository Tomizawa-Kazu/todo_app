import { VFC } from "react";
import { LogoutIcon } from "@heroicons/react/solid";
import { useProcessAuth } from "../hooks/useProcessAuth";

export const Todo:VFC = () =>{
  const { logout } = useProcessAuth()

  return (
    <div className="flex justify-center items-senter flex-col min-h-screen text-gray-600 font-mono">
      <LogoutIcon
      onClick={logout}
      className="h-7 w-7 mt-1 mb-5 text-blue-500 cursor-pointer"
    />
    </div>
  )
}
