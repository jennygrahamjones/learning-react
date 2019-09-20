import PropTypes from "prop-types";
import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import { shapeOfFish } from "./Fish";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.objectOf(PropTypes.shape(shapeOfFish)),
    addFish: PropTypes.func.isRequired,
    loadSampleFishes: PropTypes.func.isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load sample fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
