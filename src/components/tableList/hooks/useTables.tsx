import { useCallback, useState, useEffect } from "react";

interface Table {
  id: number;
  name: string;
}

export const useTables = () => {
  const [tables, setTables] = useState<Table[]>([]);

  const fetchTables = useCallback(async () => {
    const res = await fetch("/tables");
    const data: Table[] = await res.json();
    setTables(data);
  }, []);

  useEffect(() => {
    fetchTables();
  }, [fetchTables]);

  return { tables };
};
