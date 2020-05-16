import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, colonne) => {
    if (colonne.contenu) return colonne.contenu(item);
    return _.get(item, colonne.attribut);
  };

  render() {
    const { data, colonnes } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {colonnes.map((colonne, index) => (
              <td key={index}>{this.renderCell(item, colonne)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
