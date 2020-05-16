import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
  const { colonnes, tri, onSort, data } = props;
  return (
    <table className="table">
      <TableHeader colonnes={colonnes} tri={tri} onSort={onSort} />
      <TableBody data={data} colonnes={colonnes} />
    </table>
  );
};

export default Table;
