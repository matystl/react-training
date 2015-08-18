// Flux

// Original
https://facebook.github.io/flux/
// Redux
http://gaearon.github.io/redux/


const INC = 'inc';

//action creator
function increment(by = 1) {
  //akcia
  return {
    type: INC,
    by: 1,
  };
}
counter()
// like store in flux
// reducer
function counter(state = 0, {type, by} ) {
  switch  (type) {
    case INC:
     return state + by
    case DEC:
     return state - by
    default:
     return state
  }
}

function mapState(state) {
  return {mojCounter: state.counter}
}
class Componenta extends Component {
  // this.props.dispach(akcia)
  render() {

  }
})

export default connect(mapState)(Componenta);
