import React, { useContext } from 'react'
// import { getName } from '../../../utils/Common'
import styles from "./Dashboard.module.css"
import AddIcon from '@mui/icons-material/Add';
import Input from '../../../Admin/components/Input'
import { Table } from 'react-bootstrap'
import DonutChart from "react-donut-chart";
// import { DataContext } from "../../../contexts/DataContext"
// import { OrderContext } from "../../../contexts/OrderContext"
// import { UserContext } from "../../../contexts/UserContext"
import "./DashboardDonutChart.css"
function Dashboard() {
    // const { data } = useContext(DataContext)
    // const { user } = useContext(UserContext)
    // const { orders } = useContext(OrderContext)
    // const name = getName()

    const reactDonutChartdataOrders = [
        {
            label: "Đã giao",
            // value: orders.filter(e => e.status).length,
            value: 10,
            color: "#00E396"
        },
        {
            label: "Đang giao",
            // value: orders.length - orders.filter(e => e.status).length,
            value: 10,
            color: "#FEB019"
        },
        {
            label: "Đã huỷ",
            value: 1,
            color: "#FF4560"
        },

    ];
    const reactDonutChartBackgroundColorOrders = [
        "#00E396",
        "#FEB019",
        "#FF4560",
    ];

    const reactDonutChartdataProducts = [
        {
            // label: "Đã giao",
            // value: orders.filter(e => e.status).length,
            value: 5,
            color: "#00E396"
        },
        {
            label: "Đang giao",
            // value: orders.length - orders.filter(e => e.status).length,
            value: 6,
            color: "#FEB019"
        },
        {
            label: "Đã huỷ",
            value: 1,
            color: "#FF4560"
        },

    ];
    const reactDonutChartBackgroundColorProducts = [
        "#00E396",
        "#FEB019",
        "#FF4560",
    ];
   // console.log(data);
    const reactDonutChartInnerRadius = 0.5;
    const reactDonutChartSelectedOffset = 0.04;
    const reactDonutChartHandleClick = (item, toggled) => {
        if (toggled) {
            console.log(item);
        }
    };
    let reactDonutChartStrokeColor = "#FFFFFF";
    const reactDonutChartOnMouseEnter = (item) => {
        let color = reactDonutChartdataOrders.find((q) => q.label === item.label).color;
        reactDonutChartStrokeColor = color;
    };



    return (


        <div className={`${styles.main} row`}>
            <div className={`${styles.leftSide} col-9   `}>
                <div className={`${styles.greeting}`}>
                    <div>
                        <h2 style={{ color: `#1A358F`, fontSize: `30px` }}>Xin chào !</h2>
                        <p>Chào mừng bạn đến với trang Admin</p>
                    </div>
                    <div>
                        <div className={`${styles.addBtn}`} >
                            <AddIcon />QUÉT MÃ VẠCH
                        </div>
                    </div>
                </div>
                <div className={`${styles.myDevice}`}>
                    <div>
                        <h3>Tổng số của hàng</h3>
                        <p style={{ color: `#75767E` }}>60 cửa hàng</p>
                    </div>
                    <div style={{ transform: `translateX(-30px)`, paddingRight: `30px`, borderRight: `1px solid #ddd` }}>
                        <h3>4</h3>
                        <p style={{ color: `#1A358F` }}>Đang sử dụng</p>
                    </div>
                    <div style={{}}>
                        <h3>2</h3>
                        <p style={{ color: `#ED942B` }}>Đã sử dụng</p>
                    </div>
                </div>
                <div className={`${styles.chartSection}`} >
                    <div className={`${styles.device} `}>
                        <div>
                            <h3>Đơn hàng</h3>
                            <p>
                                <span style={{ fontSize: `24px`, color: `#1A358F` }}>150  </span>
                                Đang sử dụng
                            </p>
                            <p>
                                <span style={{ fontSize: `24px`, color: `#F4CC3D` }}>30  </span>
                                Chưa sử dụng
                            </p>
                            <p>
                                <span style={{ fontSize: `24px`, color: `#DF3D3D` }}>04  </span>
                                Đã hỏng / thanh lý
                            </p>
                        </div>
                        <div className={`${styles.chartWrapper} `}>
                            <div className={`${styles.chart} `}>
                                <DonutChart
                                    width={400}
                                    onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
                                    strokeColor={reactDonutChartStrokeColor}
                                    data={reactDonutChartdataOrders}
                                    colors={reactDonutChartBackgroundColorOrders}
                                    innerRadius={reactDonutChartInnerRadius}
                                    selectedOffset={reactDonutChartSelectedOffset}
                                    onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
                                />
                            </div>

                        </div>
                    </div>
                    <div className={`${styles.staff} `}>
                        <div>
                            <h3>Sản phẩm</h3>
                            <p>
                                <span style={{ fontSize: `24px`, color: `#1A358F` }}>150  </span>
                                Đang làm việc
                            </p>
                            <p>
                                <span style={{ fontSize: `24px`, color: `#F4CC3D` }}>30  </span>
                                Đã nghỉ việc
                            </p>
                        </div>
                        <div className={`${styles.chartWrapper} `}>
                            <div className={`${styles.chart} `}>
                                <DonutChart
                                    className={styles.donutChartt}
                                    style={{}}
                                    width={400}
                                    onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
                                    strokeColor={reactDonutChartStrokeColor}
                                    data={reactDonutChartdataProducts}
                                    colors={reactDonutChartBackgroundColorProducts}
                                    innerRadius={reactDonutChartInnerRadius}
                                    selectedOffset={reactDonutChartSelectedOffset}
                                    onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.rightSide} col-3`}>
                <div className={`${styles.myRequest} row`}>
                    <div className={`${styles.content} `}>
                        <div className={`${styles.date} `} >
                            <Input label="Từ ngày - Tới ngày" type="date" />
                        </div>
                        <h3>Đơn hàng</h3>
                        <p><span style={{ fontSize: `24px`, fontWeight: `600`, color: `#1a358f`, width: `10px`, display: `inline-block`, width: `25px`, textAlign: `center` }}>
                            2
                        </span>Chờ duyệt</p>
                        <p><span style={{ fontSize: `24px`, fontWeight: `600`, color: `#f4cc3d`, width: `10px`, display: `inline-block`, width: `25px`, textAlign: `center` }}>
                            1
                        </span>Đang xử lý</p>
                        <p><span style={{ fontSize: `24px`, fontWeight: `600`, color: `#F27400`, width: `10px`, display: `inline-block`, width: `25px`, textAlign: `center` }}>
                            4
                        </span>Đã hoàn thành</p>
                        <p><span style={{ fontSize: `24px`, fontWeight: `600`, color: `#df3d3d`, width: `10px`, display: `inline-block`, width: `25px`, textAlign: `center` }}>
                            1
                        </span>Đã bị từ chối</p>
                    </div>
                </div>
                <div className={`${styles.staffRequest} row`}>
                    <div className={`${styles.content} `}>

                        <h3>Yêu cầu của nhân viên</h3>
                        <p><span style={{ fontSize: `24px`, fontWeight: `600`, color: `#1a358f`, width: `10px`, display: `inline-block`, width: `25px`, textAlign: `center` }}>
                            2
                        </span>Yêu cầu thiết bị</p>
                        <p><span style={{ fontSize: `24px`, fontWeight: `600`, color: `#f4cc3d`, width: `10px`, display: `inline-block`, width: `25px`, textAlign: `center` }}>
                            1
                        </span>Yêu cầu chỉnh hồ sơ</p>
                        <Table style={{ marginTop: `20px` }} borderless>
                            <thead >
                                <tr>
                                    <th>Số</th>
                                    <th style={{ width: `150px` }}>Yêu cầu</th>
                                    <th>Trạng thái </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>081</td>
                                    <td>Yêu cầu chỉnh hồ sơ</td>
                                    <td>
                                        <div className={`${styles.status} ${styles.red}`}>
                                            Đợi phê duyệt
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>113</td>
                                    <td>Yêu cầu thiết bị</td>
                                    <td>
                                        <div className={`${styles.status} ${styles.orange}`}>
                                            Đợi phê duyệt
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>131</td>
                                    <td>Yêu cầu chỉnh hồ sơ</td>
                                    <td>
                                        <div className={`${styles.status} ${styles.red}`}>
                                            Đợi chỉnh sửa
                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default Dashboard