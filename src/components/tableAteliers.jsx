import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

class TableAteliers extends Component {
  colonnes = [
    {
      attribut: "titre",
      nom: "Titre",
      contenu: (atelier) => (
        <Link to={`/ateliers/${atelier._id}`}>{atelier.titre}</Link>
      ),
    },
    { attribut: "categorie.nom", nom: "Catégorie" },
    { attribut: "placeDisponible", nom: "Place disponible" },
    { attribut: "prix", nom: "Prix" },
    {
      key: "like",
      contenu: (atelier) => (
        <Like
          liked={atelier.liked}
          onLiked={() => this.props.onLike(atelier)}
        />
      ),
    },
    {
      key: "supprimer",
      contenu: (atelier) => (
        <button
          onClick={() => this.props.onDelete(atelier)}
          className="btn btn-danger btn-sm"
        >
          Supprimer
        </button>
      ),
    },
  ];
  render() {
    const { ateliers, onSort, tri } = this.props;
    return (
      <Table
        data={ateliers}
        colonnes={this.colonnes}
        tri={tri}
        onSort={onSort}
      />
    );
  }
}

export default TableAteliers;
