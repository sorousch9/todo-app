import CourseBroadItem from "../CourseBroadItem/CourseBroadItem";
import "./CourseBroadList.css";

const CourseBroadList = (props) => {
  return (
    <ul className="broad-list">
      {props.items.map((item) => (
        <CourseBroadItem
          key={item.id}
          id={item.id}
          onDelete={props.onDeleteItem}
        >
          {item.text}
        </CourseBroadItem>
      ))}
    </ul>
  );
};

export default CourseBroadList;
