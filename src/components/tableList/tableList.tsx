import { memo } from "react";
import { useTables } from "./hooks/useTables";

export const TableList: React.FC = memo(() => {
  const { tables } = useTables();

  return (
    <ul>
      {tables.map((table) => (
        <li key={table.id}>{table.name}</li>
      ))}
    </ul>
  );
});

TableList.displayName = "TableList";
