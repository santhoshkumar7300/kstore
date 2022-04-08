import { Dropdown } from "react-bootstrap";
import Styles from "./CategoriesOptions.module.css";

export default function CategoriesOptions(props) {
  console.log(props, "=====subitem");
  return (
    <div>
      <Dropdown.Menu className={Styles.container}>
        <Dropdown.Item
          className="p-0"
          onMouseOver="this.style.backgroundColor='unset'"
        >
          {[...new Array(Math.ceil(props.data.length / 7))].map((e, index) => (
            <div>
              <ul className="mb-0">
                {props.data.splice(index * 7, index * 7 + 7).map((e) => (
                  <li>{e}</li>
                ))}
              </ul>
            </div>
          ))}
        </Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
}
