import React, { useEffect, useState } from "react";
import styles from "../OrderManager/OrderManager.module.css";
import Breadcrumbs from "../../../Admin/components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import Table from "rsuite/Table";
import "rsuite-table/dist/css/rsuite-table.css";
import ExportReact from "../../../../extensions/ExportReact/ExportReact";
import map from "./DATA_MOC.json"
import Pagination from '../../../../extensions/Pagination/Pagination'


console.log(map.status);
let PageSize = 7;

const OrderManager = () => {

    const [dataSliced, setdataSliced] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [sortPosition, setSortPosition] = useState("");
    const [sortStatus, setSortStatus] = useState("");
    const [active, setActive] = useState("");

    useEffect(() => {
        if (map) {
          const firstPageIndex = (currentPage - 1) * PageSize;
          const lastPageIndex = firstPageIndex + PageSize;
          setdataSliced(map.slice(firstPageIndex, lastPageIndex));
        }
        if (searchValue !== "" || sortPosition !== "" || sortStatus !== "") {
          const firstPageIndex = (currentPage - 1) * PageSize;
          const lastPageIndex = firstPageIndex + PageSize;
          setdataSliced(
            map
              .filter((e) => e.name.toLowerCase().indexOf(searchValue) !== -1)
              .filter((e) => e.city.indexOf(sortStatus) !== -1)
              .filter((e) => e.phone.indexOf(sortPosition) !== -1)
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
      href: "/admin/quan-ly-don-hang",
      title: "Quản lý đơn hàng",
      isActive: true,
    },
  ];

  const PositionCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell {...props} style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}>
        {
            rowData[dataKey] === "true"
                ?
                <div className={`${styles.on}`}>
                   Giao hàng thành công
                </div>
                :
                <div className={`${styles.off}`}>
                    Chưa giao hàng
                </div>
        }
    </Table.Cell>
);
  return (
    <>
      <div className={styles.Account}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.AccountMain} row`}>
          <div className={`${styles.leftSide} col-8`}>
            <p className={`${styles.title}`}>
              <ArrowBackIcon />
              Quản lý đơn hàng
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
              <ExportReact csvData={map} />
            </div>
          </div>
        </div>
        <div className={styles.AccountPro}>
          <div className={styles.ManageTable}>
            <Table
              data={dataSliced.filter((e) =>
                e.name.toLowerCase().includes(searchValue)
              )}
              rowHeight={55}
              height={500}
            >
              <Table.Column width={60} align="center" fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  STT
                </Table.HeaderCell>
                <Table.Cell dataKey="id" />
              </Table.Column>
              <Table.Column width={150} align="center" fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Mã đơn hàng
                </Table.HeaderCell>
                <Table.Cell dataKey="id" />
              </Table.Column>
              <Table.Column align="center" width={180}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Tên
                </Table.HeaderCell>
                <Table.Cell dataKey="name" />
              </Table.Column>
              <Table.Column align="center" width={290}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Email
                </Table.HeaderCell>
                <Table.Cell dataKey="email" />
              </Table.Column>
              <Table.Column align="center" width={170}>
                <Table.HeaderCell  className={styles.HeaderCell}>
                 Số điện thoại
                </Table.HeaderCell>
                <Table.Cell dataKey="phone" />
              </Table.Column>
              <Table.Column align="center" width={130}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Địa chỉ
                </Table.HeaderCell>
                <Table.Cell dataKey="city" />
              </Table.Column>
              <Table.Column align="center"  width={190}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Tổng sản phẩm
                </Table.HeaderCell>
                <Table.Cell dataKey="bill" />
              </Table.Column>
              <Table.Column align="center"  width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Trạng thái
                </Table.HeaderCell>
                <PositionCell dataKey="status"/> 
              </Table.Column>
              <Table.Column align="center" width={160} >
                <Table.HeaderCell className={styles.HeaderCell}>
                  Ngày đặt hàng
                </Table.HeaderCell>
                <Table.Cell dataKey="city" />
              </Table.Column>
              <Table.Column align="center" width={190}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Ngày hết hạn
                </Table.HeaderCell>
                <Table.Cell dataKey="city" />
              </Table.Column>
              <Table.Column align="center"  width={170} fixed="right">
                <Table.HeaderCell className={styles.HeaderCell}>
                  Quản lý
                </Table.HeaderCell>
                <Table.Cell> 
                <div className={styles.Celll}>
                 <Link to="/admin/chi-tiet-don-hang" className={`${styles.btnEdit} `} href="#" role="button">Chi tiết</Link>
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
                  ? map.length
                  : map.filter(
                      (e) => e.name.toLowerCase().indexOf(searchValue) !== -1
                    ).length}
              </span>{" "}
              bản ghi
            </span>
            {searchValue === "" && sortPosition === "" && sortStatus === "" ? (
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={map && map.length}
                pageSize={10}
                onPageChange={(page) => setCurrentPage(page)}
              />
            ) : (
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={
                  map &&
                  map.filter(
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

export default OrderManager;
