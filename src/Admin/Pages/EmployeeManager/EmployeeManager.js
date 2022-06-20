import React, { useEffect, useState } from 'react'
import styles from './EmployeeManager.module.css'
import Breadcrumbs from "../../components/BreadCrumb/BreadCrumb";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AddIcon from '@mui/icons-material/Add';
import fakeData from './MOCK_DATA.json'
import Table from 'rsuite/Table';
import "rsuite-table/dist/css/rsuite-table.css";
import Pagination from "../../../extensions/Pagination/Pagination"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import clsx from "clsx"
import ExportReact from "../../../extensions/ExportReact/ExportReact";
import { Link } from 'react-router-dom';
let PageSize = 10
function EmployeeManager() {
    const [dataSliced, setdataSliced] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [status, setStatus] = useState(false)
    const [position, setPosition] = useState(false)
    const [sortPosition, setSortPosition] = useState("")
    const [sortStatus, setSortStatus] = useState("")


    const handleChangeStatus = (props) => {
        setSortStatus(props);
        setStatus(false);
        setCurrentPage(1)
    }
    const handleChangePosition = (props) => {
        setSortPosition(props);
        setPosition(false);
        setCurrentPage(1)
    }
    useEffect(() => {
        if (fakeData) {
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
            setdataSliced(fakeData.slice(firstPageIndex, lastPageIndex));
        }
        if (searchValue !== "" || sortPosition !== "" || sortStatus !== "") {
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
            setdataSliced(fakeData
                .filter((e) => e.name.toLowerCase().indexOf(searchValue) !== -1)
                .filter((e) => e.status.indexOf(sortStatus) !== -1)
                .filter((e) => e.position.indexOf(sortPosition) !== -1).slice(firstPageIndex, lastPageIndex));
        }
    }, [currentPage, searchValue, sortPosition, sortStatus]);
    const breadcrumItem = [
        {
            href: "/",
            title: "Quản lý",
            isActive: false,
        },

        {
            href: "/quan-ly-ho-so-nhan-vien",
            title: "Quản lý hồ sơ nhân viên",
            isActive: true,
        },
    ];


    const ImageCell = ({ rowData, dataKey, ...props }) => (
        <Table.Cell {...props} style={{ padding: 0 }}>
            <div
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 20,
                    marginTop: 2,
                    overflow: 'hidden',
                    display: 'inline-block'
                }}
            >
                <img src={rowData[dataKey]} alt="" width="100%" />
            </div>
        </Table.Cell>
    );
    const OnlineCell = ({ rowData, dataKey, ...props }) => (
        <Table.Cell {...props} >
            <div style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, height: `100%` }} >
                {rowData[dataKey] === "F"
                    ?
                    <RemoveRedEyeIcon style={{ fontWeight: `bold`, color: `#1A358F` }} />
                    :
                    <VisibilityOffIcon style={{ fontWeight: `bold`, color: `#1A358F` }} />}
                <MoreHorizIcon />
            </div>
        </Table.Cell>
    );

    const PositionCell = ({ rowData, dataKey, ...props }) => (
        <Table.Cell {...props} style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}>
            {
                rowData[dataKey] === "Male"
                    ?
                    <div className={`${styles.on}`}>
                        Đang làm việc
                    </div>
                    :
                    <div className={`${styles.off}`}>
                        Đã nghỉ việc
                    </div>
            }
        </Table.Cell>
    );

    const StatusCell = ({ rowData, dataKey, ...props }) => (
        <Table.Cell {...props} style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}>
            {
                rowData[dataKey] === "F"
                    ?
                    <>
                        <FiberManualRecordIcon
                            style={{ color: `#28A4DC`, height: `8px`, width: `8px`, marginRight: `5px` }}
                        /> Nhân viên
                    </>
                    :
                    <>
                        <FiberManualRecordIcon
                            style={{ color: `#EDE634`, height: `8px`, width: `8px`, marginRight: `5px` }}
                        /> admin
                    </>
            }

        </Table.Cell>
    );



    return (

        <div className={`${styles.main}`}>

            <Breadcrumbs breadItem={breadcrumItem} />
            <div className={`${styles.control} row`}>
                <div className={`${styles.leftSide} col-8 p-0`}>
                    <p className={`${styles.title}`}>
                        <ArrowBackIcon />
                        Danh sách hồ sơ nhân viên
                    </p>
                    <div className={`${styles.search}`}>
                        <input type="text" placeholder='Tìm kiếm ' onChange={(e) => setSearchValue(e.target.value)} />
                        <div className={`${styles.searchIcon}`}>
                            <SearchIcon />
                        </div>
                    </div>

                </div>
                <div className={`${styles.rightSide} col-4`}>
                    <div className={`${styles.rightSideBtn}`}>
                        <button className={`${styles.btnAdd}`} onClick={(e) => { test(e) }}><AddIcon />Thêm tài khoản</button>
                        <ExportReact csvData={fakeData} />
                    </div>

                    <div className={`${styles.rightSideOption}`}>

                        <div>
                            <div
                                className={`${styles.position}`}
                                onClick={() => { setPosition(!position); setStatus(false) }}
                            >
                                {sortPosition === "" ? <span>Chức vụ</span> : <span>{sortPosition}</span>}

                                <ArrowDropUpIcon style={position ? { fontSize: `24px `, transform: `rotate(180deg)` } : { fontSize: `24px ` }} />
                            </div>

                            <ul className={clsx(styles.positionOption, {
                                [styles.active]: position
                            })}
                            >
                                <li onClick={() => { handleChangePosition('Non-binary') }}>
                                    Phó giám đốc
                                </li>
                                <li onClick={() => { handleChangePosition('Female') }}>
                                    Trưởng phòng
                                </li>
                                <li onClick={() => { handleChangePosition('Male') }}>
                                    Nhân viên chính thức
                                </li>
                                <li onClick={() => { handleChangePosition('') }}>
                                    Không chọn
                                </li>

                            </ul>

                        </div>
                        <div >
                            <div
                                className={`${styles.status}`}
                                onClick={() => { setStatus(!status); setPosition(false) }}

                            >
                                {sortStatus === "" ? <span> Trạng thái</span> : <span>{sortStatus}</span>}

                                <ArrowDropUpIcon style={status ? { fontSize: `24px `, transform: `rotate(180deg)` } : { fontSize: `24px ` }} />
                            </div>
                            <ul
                                className={clsx(styles.statusOption, {
                                    [styles.active]: status
                                })}
                            >
                                <li onClick={() => { handleChangeStatus("F") }}>
                                    Nhân viên
                                </li>
                                <li onClick={() => { handleChangeStatus("M") }}>
                                    admin
                                </li>
                                <li onClick={() => { handleChangeStatus("") }}>
                                    Không chọn
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.table} `}>
                <Table
                    data={
                        dataSliced
                            .filter((e) => e.name.toLowerCase().indexOf(searchValue) !== -1)
                            .filter((e) => e.status.indexOf(sortStatus) !== -1)
                            .filter((e) => e.position.indexOf(sortPosition) !== -1)
                    }
                    rowHeight={55}
                    height={590} >
                    <Table.Column align="center" width={40}>
                        <Table.HeaderCell className={styles.tableHeader} >
                            Id
                        </Table.HeaderCell>
                        <Table.Cell dataKey="id" />
                    </Table.Column>

                    <Table.Column align="center">
                        <Table.HeaderCell className={styles.tableHeader} >
                            Ảnh
                        </Table.HeaderCell>
                        <ImageCell dataKey="avartar" />
                    </Table.Column>

                    <Table.Column align="center" width={130}>
                        <Table.HeaderCell className={styles.tableHeader} >
                            Mã nhân viên
                        </Table.HeaderCell>
                        <Table.Cell dataKey="staff_id" />
                    </Table.Column>

                    <Table.Column align="center" flexGrow={1} >
                        <Table.HeaderCell className={styles.tableHeader} >
                            Tên
                        </Table.HeaderCell>
                        <Table.Cell dataKey="name" />
                    </Table.Column>

                    <Table.Column align="center" flexGrow={1}>
                        <Table.HeaderCell className={styles.tableHeader} >
                            Số điện thoại
                        </Table.HeaderCell>
                        <Table.Cell dataKey="phone_number" />
                    </Table.Column>

                    <Table.Column align="center" flexGrow={1} >
                        <Table.HeaderCell className={styles.tableHeader} >
                            Email
                        </Table.HeaderCell>
                        <Table.Cell dataKey="email" />
                    </Table.Column>

                    <Table.Column align="center" >
                        <Table.HeaderCell className={styles.tableHeader} >
                            Chức vụ
                        </Table.HeaderCell>
                        <Table.Cell dataKey="role" />
                    </Table.Column>

                    <Table.Column align="center" >
                        <Table.HeaderCell className={styles.tableHeader} >
                            Trạng thái
                        </Table.HeaderCell>
                        <StatusCell dataKey="status" />
                    </Table.Column>
                    
                    <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.tableHeader}>
                  Quản lý
                </Table.HeaderCell>
                <Table.Cell> 
                 <div className={styles.Celll}>
                 <Link to="/admin/thong-tin-bai-viet" className={`${styles.btnEdit} `} href="#" role="button">Sửa</Link>
                <a className={`${styles.btnDelete}`} href="#" role="button">Xóa</a>
                 </div>
                </Table.Cell>
              </Table.Column>
                </Table>
            </div>


            <div className={`${styles.pagination} `}>
                <span style={{ marginRight: `25px` }}>có <span style={{ fontWeight: `bold`, color: `#1A358F` }}>{searchValue === "" && sortPosition === '' && sortStatus === '' ? fakeData.length :
                    fakeData
                        .filter((e) => e.name.toLowerCase().indexOf(searchValue) !== -1)
                        .filter((e) => e.status.indexOf(sortStatus) !== -1)
                        .filter((e) => e.position.indexOf(sortPosition) !== -1).length}</span> bản ghi</span>
                {searchValue === "" && sortPosition === '' && sortStatus === '' ? <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={fakeData && fakeData.length}
                    pageSize={10}
                    onPageChange={(page) => setCurrentPage(page)}

                /> :
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={fakeData && fakeData
                            .filter((e) => e.name.toLowerCase().indexOf(searchValue) !== -1)
                            .filter((e) => e.status.indexOf(sortStatus) !== -1)
                            .filter((e) => e.position.indexOf(sortPosition) !== -1).length}
                        pageSize={10}
                        onPageChange={(page) => setCurrentPage(page)}

                    />}
            </div>




        </div >
    )
}

export default EmployeeManager