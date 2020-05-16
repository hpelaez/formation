import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (attribut) => {
    const { tri, onSort } = this.props;

    if (tri.attribut === attribut) {
      tri.ordre = tri.ordre === "asc" ? "desc" : "asc";
    } else {
      tri.attribut = attribut;
      tri.ordre = "asc";
    }
    onSort(tri);
  };

  renderSortIcon = (colonne) => {
    const { tri } = this.props;
    if (colonne.attribut !== tri.attribut) return null;
    if (tri.ordre === "asc")
      return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
    return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
  };

  render() {
    const { colonnes } = this.props;

    return (
      <thead>
        <tr>
          {colonnes.map((colonne, index) => (
            <th
              key={index}
              onClick={() => this.raiseSort(colonne.attribut)}
              style={{ cursor: "pointer" }}
            >
              {colonne.nom}
              {this.renderSortIcon(colonne)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
