import Styles from "./ManageMembers.module.css";
import search from "../../../Assets/search.svg";
import newMember from "../../../Assets/newMember.svg";
import edit from "../../../Assets/edit.svg";
import del from "../../../Assets/wishlist_del.svg";
import ReactPaginate from "react-paginate";
export default function ManageMembers() {
  return (
    <div className={Styles.bg}>
      <div className={Styles.overallBody + " container bg-white"}>
        <div
          className={Styles.titleContainer + " d-flex justify-content-between"}
        >
          <h4 className="kstoreFont">Manage Members</h4>
          <div className={Styles.btnContainer}>
            <div className={Styles.searchContainer}>
              <img className={Styles.img} src={search} alt="search" />
              <input
                className={Styles.input}
                type="text"
                placeholder="Search"
              />
            </div>
            <div className={Styles.addMemberContainer}>
              <div className={Styles.addMemberImgContainer}>
                <img className={Styles.addImg} src={newMember} alt="new" />
              </div>
              <span className={Styles.addText}>Add to New</span>
            </div>
          </div>
        </div>
        <div>
          <table>
            <thead className={Styles.heading}>
              <tr>
                <th className="text-center">S.No</th>
                <th className="text-center">User Name</th>
                <th className="text-center">Day & Date</th>
                <th className="text-center">Mobile Number</th>
                <th className="text-center">Type</th>
                <th className="text-center">Amount</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            {[...new Array(16)].map((e) => (
              <tbody>
                <tr>
                  <td className={Styles.td}>1</td>
                  <td>Ram bala</td>
                  <td>
                    <p className="mb-0">Wednesday</p>
                    <p className="mb-0">16 April, 2022</p>
                  </td>
                  <td>+91 987456321</td>
                  <td>Lorum ipsum</td>
                  <td>₹ 650.00</td>
                  <td>Pending</td>
                  <td>
                    <div className="d-flex justify-content-evenly">
                      <div className={Styles.editContainer}>
                        <img className={Styles.editImg} src={edit} alt="edit" />
                      </div>
                      <div className={Styles.delContainer}>
                        <img className={Styles.delImg} src={del} alt="del" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div>
          <ReactPaginate breakLabel="..." nextLabel=">" previousLabel="<" />
        </div>
      </div>
    </div>
  );
}