import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Styles from "./CategoriesOptions.module.css";

export default function CategoriesOptions(props) {
  console.log(props, "=====subitem");

  const [optionsData, setOptionsData] = useState("");

  let result = [];

  useEffect((e) => {
    // setData([...data, props.data.splice(0, 7)]);
    // console.log([...props.data.splice(0, 7)], "=====");
    // result = [...result, props.data.splice(0, 7)];
    // console.log(props.data.splice(0, 7), "====data");
    // setOptionsData([...optionsData, props.data]);
  }, []);

  console.log(optionsData, "====");

  return (
    <div>
      <Dropdown.Menu className={Styles.container}>
        {/* <Dropdown.Item
          className="p-0"
          onChange={(e) => console.log(e.target.value, "===option")}
        >
          {[...new Array(Math.ceil(props.data.length / 7))].map((e, index) => (
            <ul className={Styles.ul + " mb-0"}>
              {props.data.splice(index * 7, index * 7 + 7).map((e) => (
                <li
                  onClick={(e) => console.log(e.target.value)}
                  className={Styles.li}
                >
                  {e}
                </li>
              ))}
            </ul>
          ))}
        </Dropdown.Item> */}

        <div>
          {props.data.map((e) => {
            setOptionsData([...optionsData, props.data.splice(0, 7)]);
            <div>
              <Dropdown.Item value="test">{e}</Dropdown.Item>;
            </div>;
          })}
        </div>
      </Dropdown.Menu>
    </div>
  );
}
