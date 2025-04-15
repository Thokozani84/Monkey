import { useState, useMemo, createContext, useCallback } from "react";
import { images, fakeApi } from "../readyimage/readyimage";

const fileContext = createContext();

const MyProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [id, setId] = useState("");
  const url = "http://localhost:5000";

  // Static data - no need for memo
  const sections = ["xrepo", "sizokthola", "dlozilami", "reastotela", "skeemsam", "umkhokha"];

  // Stable function references
  const updateData = useCallback((newData) => {
    setData(prev => ({ ...prev, ...newData }));
  }, []);

  const values = useMemo(() => ({
    data,
    setData: updateData, // More controlled update
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