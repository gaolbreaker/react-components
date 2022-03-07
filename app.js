// refactor GroceryListItem to be a class component

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  onMouseEnter() {
    this.setState({hover: true});
  }

  onMouseLeave() {
    this.setState({hover: false});
  }

  render() {
    var style = {fontWeight: this.state.hover ? 'bold' : 'normal' };

    return (
      <li style={style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>{this.props.item}</li>
    )
  }
}

// TODO

var GroceryList = () => (
  <ul>
    <Eggs />
    <Flour />
  </ul>
);

var Eggs = (props) => (
  <GroceryListItem item={'Eggs'}/>
);

var Flour = (props) => (
  <GroceryListItem item={'Flour'}/>
);

// var GroceryListItem = (props) => (
//   <li>
//     {props.item}
//   </li>
// );


ReactDOM.render(<GroceryList />, document.getElementById('app'));

