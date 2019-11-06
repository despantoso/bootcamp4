import React from "react";

class ViewBuilding extends React.Component {
  render() {
    const { data, selectedBuilding } = this.props;
    const namesList = selectedBuilding.map(id => {
      const { name } = data[id - 1];
      const { code } = data[id - 1];
      const { address } = data[id - 1];

      return (
        <>
    
          <ul key={id}>{name} </ul>
          <ul> {code} </ul>
          <ul> {address} </ul>
          <p></p>
        </>
      );
    });
    return (
      <div>
        <p>
          <i>Click on a name to view more information</i>
          <ul>{namesList}</ul>
        </p>
      </div>
    );
  }
}
export default ViewBuilding;
