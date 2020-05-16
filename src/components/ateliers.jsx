import React, { Component } from "react";
import _ from "lodash";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import TableAteliers from "./tableAteliers";
import { getAteliers } from "../services/simServiceAtelier";
import { getCategories } from "../services/simServiceCategorie";
import paginer from "../utils/pagiger";

class Ateliers extends Component {
  state = {
    ateliers: [],
    categories: [],
    taillePage: 4,
    pageCourante: 1,
    categorieCourante: { _id: "", nom: "Toutes les categories" },
    tri: { attribut: "titre", ordre: "asc" },
  };

  handleCategorieSelect = (categorie) => {
    this.setState({ categorieCourante: categorie, pageCourante: 1 });
  };

  handlePageChange = (page) => {
    this.setState({ pageCourante: page });
  };

  handleLike = (atelier) => {
    const ateliers = [...this.state.ateliers];
    const index = ateliers.indexOf(atelier);
    ateliers[index] = { ...ateliers[index] };
    ateliers[index].liked = !ateliers[index].liked;
    this.setState({ ateliers });
  };

  handleDelete = (atelier) => {
    const ateliers = this.state.ateliers.filter((a) => a._id !== atelier._id);
    this.setState({ ateliers });
  };

  handleSort = (tri) => {
    this.setState({ tri });
  };

  componentDidMount() {
    const categories = [this.state.categorieCourante, ...getCategories()];
    this.setState({ ateliers: getAteliers(), categories });
  }

  render() {
    const {
      taillePage,
      pageCourante,
      categorieCourante,
      ateliers: ateliersTous,
      tri,
    } = this.state;

    const ateliersFiltres =
      categorieCourante && categorieCourante._id
        ? ateliersTous.filter((a) => a.categorie._id === categorieCourante._id)
        : ateliersTous;

    const ateliersTries = _.orderBy(
      ateliersFiltres,
      [tri.attribut],
      [tri.ordre]
    );

    const ateliers = paginer(ateliersTries, pageCourante, taillePage);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.categories}
              selectedItem={this.state.categorieCourante}
              onItemSelect={this.handleCategorieSelect}
            />
          </div>
          <div className="col">
            <p>{this.getMessage(ateliersFiltres.length)}</p>
            <TableAteliers
              ateliers={ateliers}
              tri={tri}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              nombreItems={ateliersFiltres.length}
              taillePage={taillePage}
              pageCourante={pageCourante}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  getMessage(nombreItems) {
    if (nombreItems === 0) return "Aucun atelier à afficher.";
    if (nombreItems === 1) return `${nombreItems} atelier est affiché.`;
    return `${nombreItems} ateliers sont affichés.`;
  }
}
export default Ateliers;
