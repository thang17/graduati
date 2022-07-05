import React, { useContext } from "react";
import styles from "../UserDetail/UserDetail.module.css";
import { Table } from "react-bootstrap";
import Breadcrumbs from "../../../../Admin/components/BreadCrumb/BreadCrumb";
import anh from "../../../../../asstes/images/comsuon.jpeg"
// import { UserContext } from '../../../../contexts/UserContext';
// import { OrderContext } from '../../../../contexts/OrderContext';
// import { DataContext } from '../../../../contexts/DataContext';

const UserDetail = () => {
  // const { user } = useContext(UserContext)
  // const { orders } = useContext(OrderContext)
  // const { data } = useContext(DataContext)

  // const [userInfo, setUserInfo] = useState("")
  const hanldSumit = (e) => {
    var MaUser = document.getElementById("User").value;
    var UserName = document.getElementById("UserName").value;
    var Phone = document.getElementById("phone").value;
    var Email = document.getElementById("Email").value;
    var Address = document.getElementById("Address").value;
    console.log({ MaUser, UserName, Phone, Email, Address });
  };

  // const idUser = window.location.hash.split("#")[1];
  // const userInfo = user.find(e => e._id === idUser)

  const breadcrumItem = [
    {
      href: "/",
      title: "Quản lý",
      isActive: false,
    },

    {
      href: "/Admin/quan-ly-nguoi-dung",
      title: "Quản lý người dùng",
      isActive: false,
    },

    {
      title: "Chi tiết người dùng",
      isActive: true,
    },
  ];

  // const orderIds = userInfo?.orders.map(e => e.id)
  // console.log(orders);
  // console.log(
  //   orders && orders.filter(e => orderIds?.includes(e._id)).map(ele => ele.items)

  // )
  return (
    <div className={`${styles.main}  `}>
      <Breadcrumbs breadItem={breadcrumItem} />
      <div className={`d-flex align-middle`}>
        <div
          style={{ height: `120px`, width: `120px`, border: `1px solid #fff` }}
        >
          <img src={anh} alt="" style={{ width: `100%` }} />
        </div>
        <h2
          className={styles.name}
          style={{
            fontSize: `30px`,
            fontWeight: `bold`,
            color: `#1A358F`,
            marginLeft: `20px`,
          }}
        >
          {/* {userInfo?.name} */}
          Name
        </h2>
      </div>
      <div className={`${styles.content} row`}>
        <div className="col-6">
          <label
            htmlFor="phone"
            className={styles.formlabel}
            style={{ marginTop: `40px` }}
          >
            Số điện thoại
          </label>
          <input
            type="text"
            id="phone"
            // value={userInfo?.phone}
            value="0123456789"
            disabled
            className={styles.formcontrol}
          />

          <label htmlFor="User" className={styles.formlabel}>
            Ngày tháng năm sinh
          </label>
          <input
            type="text"
            id="User"
            // value={userInfo?.dob}
            value="18/09/2020"
            disabled
            className={styles.formcontrol}
          />

          <label htmlFor="UserName" className={styles.formlabel}>
            Ngày tạo tài khoản
          </label>
          <input
            type="text"
            id="UserName"
            // value={userInfo?.createdAt}
            value="17/18/2020"
            disabled
            className={styles.formcontrol}
          />

          <label htmlFor="Address" className={styles.formlabel}>
            Địa chỉ
          </label>
          <input
            type="text"
            id="Address"
            // value={userInfo?.address}
            value="12 trường chinh"
            disabled
            className={styles.formcontrol}
          />

          <label htmlFor="Email" className={styles.formlabel}>
            Email
          </label>
          <input
            type="email"
            id="Email"
            // value={userInfo?.email}
            value="abc@gmail.com"
            disabled
            className={styles.formcontrol}
          />
        </div>
        <div className="col-6">
          <h2>Số lần mua hàng</h2>
          <div className={styles.Profiletable}>
            <Table borderless>
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Mã sản phẩm</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Ngày mua</th>
                  <th scope="col">Tổng tiền</th>
                  <th scope="col">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>MH29</td>
                  <td>Máy tính Dell</td>
                  <td>10</td>
                  <td style={{ color: "#1A358F", fontWeight: "600" }}>
                    19/03/2022
                  </td>
                  <td>10,000,000 đ</td>
                  <td className={styles.Remove}>Đã thanh toán</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>MH29</td>
                  <td>Máy tính Dell</td>
                  <td>5</td>
                  <td style={{ color: "#1A358F", fontWeight: "600" }}>
                    29/03/2022
                  </td>
                  <td>1,000,000 đ</td>
                  <td className={styles.Remove1}>Chưa thanh toán</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className={`${styles.ProfileCRUD} row`}>
          <div className="col-6">
            <button className={styles.ProfiLRBtn}>Xóa tài khoản</button>
          </div>
          <div className="col-6">
            <div className={styles.right}>
              <button className={styles.ProfiLRBtn1} onClick={hanldSumit}>
                Cập nhật
              </button>
              <button className={styles.ProfiLRBtn2}>Đóng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
