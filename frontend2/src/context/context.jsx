import { useState, useMemo, createContext, useCallback } from "react";
import { images, fakeApi } from "../readyimage/readyimage";

const fileContext = createContext();

const MyProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [id, setId] = useState("");

  // 🔥 Hard‑coded backend URL for production
  const url = "https://backend200.onrender.com";

  // Static data array
  const sections = [
    "xrepo",
    "sizokthola",
    "dlozilami",
    "reastotela",
    "skeemsam",
    "umkhokha"
  ];

  // Stable updater function
  const updateData = useCallback((newData) => {
    setData(prev => ({ ...prev, ...newData }));
  }, []);

  const values = useMemo(() => ({
    data,
    setData: updateData,
    id,
    setId,
    url,
    images,
    fakeApi,
    sections
  }), [data, id, updateData]);

  return (
    <fileContext.Provider value={values}>
      {children}
    </fileContext.Provider>
  );
};

export { MyProvider, fileContext };
