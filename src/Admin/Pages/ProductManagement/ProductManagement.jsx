import React, { useEffect, useState } from "react";
import styles from "./ProductManagement.module.css";
import Breadcrumbs from "../../../Admin/components/BreadCrumb/BreadCrumb";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import Table from "rsuite/Table";
import "rsuite-table/dist/css/rsuite-table.css";
import users from "./DATA.json";
import Pagination from "../../../extensions/Pagination/Pagination";
import { Link, NavLink } from "react-router-dom";
import ExportReact from "../../../extensions/ExportReact/ExportReact";

let PageSize = 7;
const ProductManagement = () => {
    const [dataSliced, setdataSliced] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState(false);
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
          .filter((e) => e.status.indexOf(sortStatus) !== -1)
          .filter((e) => e.comment.indexOf(sortPosition) !== -1)
          .slice(firstPageIndex, lastPageIndex)
      );
    }
  }, [currentPage, searchValue, sortPosition, sortStatus]);

  const headers = [
    // { label: / * Nhãn để hiển thị ở đầu CSV * / , khóa: / * Khóa dữ liệu * / }
    { label: "Ảnh sản phẩm", key: "images" },
    { label: "Mã sản phẩm", key: "id" },
    { label: "Tên sản phẩm", key: "name" },
    { label: "Mô tả", key: "describe" },
    { label: "Mã giảm giá", key: "discount" },
    { label: "Số lượng", key: "category" },
    { label: "Gía sản phẩm", key: "price" },
    { label: "Thanh toán", key: "payment" },
    { label: "Trạng thái", key: "status" },
  ];

  function customersData() {
    const custs = users;
    return custs;
  }

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

  const breadcrumItem = [
    {
      href: "/",
      title: "Quản lý",
      isActive: false,
    },
    {
      href: "/quan-ly-san-pham",
      title: "Quản lý sản phẩm",
      isActive: true,
    },
  ];
  return (
    <>
   <div className={`${styles.Equipment}`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.EquipmentMain} row`}>
          <div className={`${styles.leftSide} col-8`}>
            <p className={`${styles.title}`}>
              <ArrowBackIcon />
              Danh sách sản phẩm
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
              <NavLink to="/admin/them-san-pham">
                <button
                  style={{
                    backgroundColor: "#1a358f",
                    color: "#fff",
                    height: "38px",
                  }}
                >
                  <AddIcon />
                  Thêm sản phẩm
                </button>
              </NavLink>
              <ExportReact csvHeaders={headers} csvData={customersData()} />
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <h2>Quản lý sản phẩm</h2>
          <div className={styles.Profiletable}>
            <Table
              data={dataSliced.filter((e) =>
                e.name.toLowerCase().includes(searchValue)
              )}
              rowHeight={55}
              height={430}
            >
              <Table.Column width={60} align="center" fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  STT
                </Table.HeaderCell>
                <Table.Cell dataKey="id" />
              </Table.Column>

              <Table.Column align="center" width={130} fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Ảnh
                </Table.HeaderCell>

                <ImageCell dataKey="images" />
              </Table.Column>

              <Table.Column align="center" width={130}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Mã sản phẩm
                </Table.HeaderCell>
                <Table.Cell dataKey="id" />
              </Table.Column>

              <Table.Column align="center" width={200}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Tên sản phẩm
                </Table.HeaderCell>
                <Table.Cell dataKey="name" />
              </Table.Column>
              <Table.Column align="center" width={130}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Số lượng
                </Table.HeaderCell>
                <Table.Cell dataKey="category" />
              </Table.Column>
              <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Mô tả
                </Table.HeaderCell>
                <Table.Cell dataKey="describe" />
              </Table.Column>
              <Table.Column align="center" width={250}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Mã giảm giá
                </Table.HeaderCell>
                <Table.Cell dataKey="discount" />
              </Table.Column>
              <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Giá sản phẩm
                </Table.HeaderCell>
                <Table.Cell dataKey="price" />
              </Table.Column>
              <Table.Column align="center" width={130}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Trạng thái
                </Table.HeaderCell>
                <Table.Cell dataKey="status" />
              </Table.Column>
              <Table.Column align="center" width={130}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Thời gian
                </Table.HeaderCell>
                <Table.Cell dataKey="status" />
              </Table.Column>
              <Table.Column align="center" width={150} fixed="right">
                <Table.HeaderCell className={styles.HeaderCell}>
                  Quản lý
                </Table.HeaderCell>
                <Table.Cell> 
                 <div className={styles.Celll}>
                 <Link to="/admin/sua-san-pham" className={`${styles.btnEdit} `} href="#" role="button">Sửa</Link>
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
  )
}

export default ProductManagement