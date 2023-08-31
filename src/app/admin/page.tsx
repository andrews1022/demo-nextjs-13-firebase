"use client";

import { useAuthContext } from "@/context/AuthContext";

const AdminPage = () => {
  const { handleLogout, user } = useAuthContext();

  return (
    <div className="pt-10">
      <h1 className="font-bold text-4xl">Admin</h1>

      {user ? (
        <div>
          <p>Welcome to the admin page and our super secret tech</p>
          <p>You can logout if you want:</p>
          <button
            className="border-solid border-slate-600 border-2 p-2"
            onClick={handleLogout}
            type="button"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Go away!</p>
      )}
    </div>
  );
};

export default AdminPage;
