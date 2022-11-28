import "./CourseBroadItem.css";

const CourseBroadItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="broad-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseBroadItem;
