// To show children when a certain condition is true
const Visibility = (props) => {
  return props.visible ? props.children : null;
};

export default Visibility;
