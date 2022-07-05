import React, { useContext } from "react";
import { getName } from "../../../../Utils/Common";
import styles from "./Dashboard.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Table } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import "./DashboardDonutChart.css";
import { Chart as ChartJS, registerables } from "chart.js";
import data from "./DATA .json";

function Dashboard() {
  const name = getName();
  console.log(data.map((e) => e.quantity));

//   const state = {
//     labels: data.map((e) => e.name),
//     datasets: [
//       {
//         label: "Ẩn",
//         backgroundColor:
//           "hsl(" +
//           360 * Math.random() +
//           "," +
//           (25 + 70 * Math.random()) +
//           "%," +
//           (85 + 10 * Math.random()) +
//           "%)",
//         borderColor: "#ccc",
//         borderWidth: 1,
//         data: data.map((e) => e.quantity),
//       },
//     ],
//   };
//   const stateDoughnut = {
//     labels: ["January", "February", "March", "April", "May"],
//     datasets: [
//       {
//         label: "Rainfall",
//         backgroundColor: [
//           "#B21F00",
//           "#C9DE00",
//           "#2FDE00",
//           "#00A6B4",
//           "#6800B4",
//         ],
//         hoverBackgroundColor: [
//           "#501800",
//           "#4B5000",
//           "#175000",
//           "#003350",
//           "#35014F",
//         ],
//         data: [65, 59, 80, 81, 56],
//       },
//     ],
//   };

  return (
    <div className={`${styles.main} row`}>
      <div className={`${styles.leftSide} col-9   `}>
        <div className={`${styles.greeting}`}>
          <div>
            <h2 style={{ color: `#1A358F`, fontSize: `38px` }}>Xin chào !</h2>
            <p>Chào mừng {name} đến với trang Admin</p>
          </div>
          <div>
            <div className={`${styles.addBtn}`}>
              <AddIcon />
              QUÉT MÃ VẠCH
            </div>
          </div>
        </div>
        <div className={`${styles.myDevice}`}>
          <div>
            <h3>Thiết bị của tôi</h3>
            <p style={{ color: `#75767E` }}>6 thiết bị</p>
          </div>
          <div
            style={{
              transform: `translateX(-30px)`,
              paddingRight: `30px`,
              borderRight: `1px solid #ddd`,
            }}
          >
            <h3>4</h3>
            <p style={{ color: `#1A358F` }}>Đang sử dụng</p>
          </div>
          <div style={{}}>
            <h3>2</h3>
            <p style={{ color: `#ED942B` }}>Đã sử dụng</p>
          </div>
        </div>
        <div className={`${styles.chartSection}`}>
          <Bar
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      </div>
      <div className={`${styles.rightSide} col-3`}>
        <div className={`${styles.topRight} row`}>
          <p
            style={{
              marginTop: `30px`,
              textAlign: `center`,
              fontSize: `32px`,
              fontWeight: `600`,
            }}
          >
            ĐƠN HÀNG{" "}
          </p>

          {/* <Doughnut
            data={stateDoughnut}
            options={{
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          /> */}
        </div>
        <div className={`${styles.staffRequest} row`}>
          <div className={`${styles.content} `}>
            <h3>Yêu cầu của nhân viên</h3>
            <p>
              <span
                style={{
                  fontSize: `24px`,
                  fontWeight: `600`,
                  color: `#1a358f`,
                  width: `10px`,
                  display: `inline-block`,
                  width: `25px`,
                  textAlign: `center`,
                }}
              >
                2
              </span>
              Yêu cầu thiết bị
            </p>
            <p>
              <span
                style={{
                  fontSize: `24px`,
                  fontWeight: `600`,
                  color: `#f4cc3d`,
                  width: `10px`,
                  display: `inline-block`,
                  width: `25px`,
                  textAlign: `center`,
                }}
              >
                1
              </span>
              Yêu cầu chỉnh hồ sơ
            </p>
            <Table style={{ marginTop: `20px` }} borderless>
              <thead>
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
  );
}

export default Dashboard;
