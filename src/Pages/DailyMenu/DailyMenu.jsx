import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../Pages/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";
import styles from "../DailyMenu/DailyMenu.module.css";
import Table from "rsuite/Table";
import Button from "rsuite/Button";
import "rsuite-table/dist/css/rsuite-table.css";
import fakeData from "./MOCKDATA .json";
import { Link } from "react-router-dom";

export const EditCell = ({ rowData, dataKey, onChange, ...props }) => {
    const editing = rowData.status === 'EDIT';
    console.log(editing);
    return (
      <Table.Cell {...props} className={editing ? 'table-content-editing' : ''}>
        {editing ? (
          <input
            className="rs-input"
            defaultValue={rowData[dataKey]}
            onChange={event => {
              onChange && onChange(rowData.id, dataKey, event.target.value);
            }}
          />
        ) : (
          <span className="table-content-edit-span">{rowData[dataKey]}</span>
        )}
      </Table.Cell>
    );
  };
  const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
    return (
      <Table.Cell {...props} style={{ padding: '6px' }}>
        <Button
          appearance="link"
          onClick={() => {
            onClick && onClick(rowData.id);
          }}
        >
          {rowData.status === 'EDIT' ? 'Save' : 'Edit'}
        </Button>
      </Table.Cell>
    );
  };

const DailyMenu = () => {
  const PositionCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell
      {...props}
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      {rowData[dataKey] === true ? (
        <div className={`${styles.on}`}>Còn món</div>
      ) : (
        <div className={`${styles.off}`}>Hết món</div>
      )}
    </Table.Cell>
  );
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/cua-hang",
      title: "Cửa hàng",
      isActive: false,
    },
    {
      href: "/thong-tin-cua-hang",
      title: "Thông tin của hàng",
      isActive: false,
    },
    {
      href: "/thuc-don-hang-ngay",
      title: "Thực đơn hàng ngày",
      isActive: true,
    },
  ];

  

  const [data, setData] = useState(fakeData.filter((v, i) => i < 8));
  const handleChange = (id, key, value) => {
    const nextData = Object.assign([], data);
    nextData.find(item => item.id === id)[key] = value;
    setData(nextData);
  };
  const handleEditState = id => {
    const nextData = Object.assign([], data);
    const activeItem = nextData.find(item => item.id === id);
    activeItem.status = activeItem.status ? null : 'EDIT';
    setData(nextData);
  };

  return (
    <>
      <Header />
      <div className={styles.DailyMenu}>
        <div className={` container mt-5 `}>
          <Breadcrumbs breadItem={breadcrumItem} />
          <div className="row mb-2">
            <div className="col-md-5">
              <div className={styles.DailyMenuText}>
                <h6>Danh sách món ăn hôm nay</h6>
              </div>
              <div className={styles.AccountPro}>
                <div className={styles.ManageTable}>
                  <Table data={fakeData} rowHeight={55} height={300}>
                    <Table.Column width={60} align="center" fixed>
                      <Table.HeaderCell className={styles.HeaderCell}>
                        STT
                      </Table.HeaderCell>
                      <Table.Cell dataKey="id" />
                    </Table.Column>
                    <Table.Column width={150} align="center" fixed>
                      <Table.HeaderCell className={styles.HeaderCell}>
                        Tên món ăn
                      </Table.HeaderCell>
                      <Table.Cell dataKey="name" />
                    </Table.Column>
                    <Table.Column width={150} align="center" fixed>
                      <Table.HeaderCell className={styles.HeaderCell}>
                        Giá tiền
                      </Table.HeaderCell>
                      <Table.Cell dataKey="price" />
                    </Table.Column>
                    <Table.Column width={100} align="center" fixed>
                      <Table.HeaderCell className={styles.HeaderCell}>
                        Trạng thái
                      </Table.HeaderCell>
                      <PositionCell dataKey="status" />
                    </Table.Column>
                  </Table>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div className={styles.DailyMenuText}>
                <h6>Danh sách món ăn bạn đặt</h6>
              </div>
              <div className={styles.AccountPro}>
              <div className={styles.ManageTable}>
                  <Table data={fakeData} rowHeight={55} height={300}>
                    <Table.Column width={60} align="center" fixed>
                      <Table.HeaderCell className={styles.HeaderCell}>
                        STT
                      </Table.HeaderCell>
                      <Table.Cell dataKey="id" />
                    </Table.Column>
                    <Table.Column width={150} align="center" fixed>
                      <Table.HeaderCell className={styles.HeaderCell}>
                        Tên món ăn
                      </Table.HeaderCell>
                      <Table.Cell dataKey="name" />
                    </Table.Column>
                    <Table.Column width={150} align="center" >
                      <Table.HeaderCell className={styles.HeaderCell}>
                        Giá tiền
                      </Table.HeaderCell>
                      <Table.Cell dataKey="price" />
                    </Table.Column>
                    <Table.Column width={150} align="center" >
                      <Table.HeaderCell className={styles.HeaderCell}>
                        Trạng thái
                      </Table.HeaderCell>
                      <PositionCell dataKey="status" />
                    </Table.Column>
                    <Table.Column width={170} align="center" >
                      <Table.HeaderCell className={styles.HeaderCell}>
                        Số món ăn bạn chọn
                      </Table.HeaderCell>
                      <EditCell dataKey="_id" onChange={handleChange}/>
                    </Table.Column>
                    <Table.Column width={100} align="center" fixed="right">
                      <Table.HeaderCell className={styles.HeaderCell}>
                       Hoạt động
                      </Table.HeaderCell>
                      <ActionCell dataKey="id"  onClick={handleEditState}/>
                    </Table.Column>
                  </Table>
                </div>
                <div className={`${styles.buttonSection}`}>
                  <Link to="/thanh-toan" className={`${styles.btnAdd}`}>Giao hàng</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DailyMenu;
