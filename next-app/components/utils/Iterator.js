const Iterator = (props) => {
  return props.data.map((e, i) => props.render(e, i));
};

export default Iterator;
