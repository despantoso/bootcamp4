import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: [],
      infoText: '',
      name: '',
      code: '',
      address: '',
      viewInfo: [1,2,3,4]
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    const list = this.state.selectedBuilding.concat([id]);
    this.setState({
      selectedBuilding : list
    })
  }

  addViewInfo(id){
    console.log(id)
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1 className="title">UF Directory App</h1>
        </div>

        <Search
        filterText={this.props.filterText}
        filterUpdate={this.filterUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b className="orangeText">Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    filterText={this.state.filterText}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                selectedBuilding={this.state.selectedBuilding}
                data={this.props.data}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
