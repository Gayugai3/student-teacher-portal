import { createContext, useState } from "react";

let AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "" });

  return (
    <AdminContext.Provider value={{ user, setUser }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
