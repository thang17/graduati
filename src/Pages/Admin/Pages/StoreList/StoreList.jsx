import React, { useEffect, useState } from "react";
import styles from "./StoreList.module.css";
import Sidebars from "../../Sidebars/Sidebars";
import Breadcrumbs from "../../../Admin/components/BreadCrumb/BreadCrumb";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Table from "rsuite/Table";
import "rsuite-table/dist/css/rsuite-table.css";
import users from "./MOCKDATA.json";
import ExportReact from "../../../../extensions/ExportReact/ExportReact";
import Pagination from '../../../../extensions/Pagination/Pagination'

console.log(users);
let PageSize = 7;
const StoreList = () => {
  const [dataSliced, setdataSliced] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [position, setPosition] = useState(false);
  const [sortPosition, setSortPosition] = useState("");
  const [sortStatus, setSortStatus] = useState("");

  useEffect(() => {
    if (users) {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      setdataSliced(users.slice(firstPageIndex, lastPageIndex));
    }
    if (searchValue !== "" || sortPosition !== "" || sortStatus !== "") {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      setdataSliced(
        users
          .filter((e) => e.name.toLowerCase().indexOf(searchValue) !== -1)
          .filter((e) => e.Address.indexOf(sortStatus) !== -1)
          .filter((e) => e.Description.indexOf(sortPosition) !== -1)
          .slice(firstPageIndex, lastPageIndex)
      );
    }
  }, [currentPage, searchValue, sortPosition, sortStatus]);
  const breadcrumItem = [
    {
      href: "/",
      title: "Quản lý",
      isActive: false,
    },

    {
      href: "/quan-ly-cua-hang",
      title: "Quản lý cửa hàng",
      isActive: true,
    },
  ];

  const ImageCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell {...props} style={{ padding: 0 }}>
      <div
        style={{
          width: 40,
          height: 40,
          background: "#f5f5f5",
          borderRadius: 20,
          marginTop: 2,
          overflow: "hidden",
          display: "inline-block",
        }}
      >
        <img src={rowData[dataKey]} width="100%" />
      </div>
    </Table.Cell>
  );
  return (
    <>
      <div className={styles.Store}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.StoreList} row`}>
          <div className={`${styles.StoreSide} col-8`}>
            <p className={`${styles.title}`}>
              <ArrowBackIcon />
              Danh sách cửa hàng
            </p>
            <div className={`${styles.search}`}>
              <input
                type="text"
                placeholder="Tìm kiếm "
                onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
              />
              <div className={`${styles.searchIcon}`}>
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className={`${styles.rightSide} col-4`}>
            <div className={`${styles.rightSideBtn}`}>
              <Link to="/profile">
                <button
                  style={{
                    backgroundColor: "#1a358f",
                    color: "#fff",
                    height: "38px",
                  }}
                >
                  <AddIcon />
                  Thêm tài khoản
                </button>
              </Link>
              <ExportReact csvData={users} />
            </div>
          </div>
        </div>
        <div className={styles.StoreProfile}>
          <h2>Quản lý cửa hàng</h2>
          <div className={styles.Profiletable}>
            <Table
                data={dataSliced.filter((e) =>
                  e.name.toLowerCase().includes(searchValue)
                )}
              //data={users}
              rowHeight={55}
              height={430}
            >
              <Table.Column width={60} align="center" fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  STT
                </Table.HeaderCell>
                <Table.Cell dataKey="id" />
              </Table.Column>
              {/* <Table.Column align="center" width={150} fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Mã số kinh doanh
                </Table.HeaderCell>
                <Table.Cell dataKey="Business" />
              </Table.Column> */}
              <Table.Column align="center" width={100} fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Ảnh
                </Table.HeaderCell>
                <ImageCell dataKey="image" />
              </Table.Column>

              <Table.Column align="center" width={150} fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Tên cửa hàng
                </Table.HeaderCell>
                <Table.Cell dataKey="name" />
              </Table.Column>

              <Table.Column align="center" width={150} fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Email
                </Table.HeaderCell>
                <Table.Cell dataKey="email" />
              </Table.Column>
              <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Số điện thoại
                </Table.HeaderCell>
                <Table.Cell dataKey="category" />
              </Table.Column>
              <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Địa chỉ
                </Table.HeaderCell>
                <Table.Cell dataKey="Address" />
              </Table.Column>
              <Table.Column align="center" width={175}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Mô tả
                </Table.HeaderCell>
                <Table.Cell dataKey="Description" />
              </Table.Column>
              <Table.Column align="center">
                <Table.HeaderCell className={styles.HeaderCell}>
                  Danh sách Menu
                </Table.HeaderCell>
                <Table.Cell dataKey="Menu list" />
              </Table.Column>
              <Table.Column align="center"  width={140}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Quản lý
                </Table.HeaderCell>
                <Table.Cell> 
                <div className={styles.Celll}>
                 <Link to="/admin/chi-tiet-tai-khoan" className={`${styles.btnEdit} `} href="#" role="button">Sửa</Link>
                <a className={`${styles.btnDelete}`} href="#" role="button">Xóa</a>
                 </div>
                </Table.Cell>
              </Table.Column>
            </Table>
          </div>
          <div className={`${styles.pagination} `}>
            <span style={{ marginRight: `25px` }}>
              có{" "}
              <span style={{ fontWeight: `bold`, color: `#1A358F` }}>
                {searchValue === "" && sortPosition === "" && sortStatus === ""
                  ? users.length
                  : users.filter(
                      (e) => e.name.toLowerCase().indexOf(searchValue) !== -1
                    ).length}
              </span>{" "}
              bản ghi
            </span>
            {searchValue === "" && sortPosition === "" && sortStatus === "" ? (
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={users && users.length}
                pageSize={10}
                onPageChange={(page) => setCurrentPage(page)}
              />
            ) : (
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={
                  users &&
                  users.filter(
                    (e) => e.name.toLowerCase().indexOf(searchValue) !== -1
                  ).length
                }
                pageSize={10}
                onPageChange={(page) => setCurrentPage(page)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreList;
