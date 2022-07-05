import React from "react";
import styles from "./Introduce.module.css";
import Header from "../../../components/Header/Header";
import Breadcrumbs from "../../../Pages/Site/Breadcrumbs/Breadcrumbs";
import Footer from "../../../components/Footer/Footer"

const Introduce = () => {
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/Introduce",
      title: "Giới thiệu",
      isActive: true,
    },
  ];
  return (
    <>
      <Header />
      <div className={`${styles.Introduce} container mt-5 mb-5`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className="mt-5">
          <article className="blog-post">
            <h2 className={`${styles.blogPost} mb-4 blog-post-title`}>OfFood.vn là gì </h2>
            <p className="blog-post-meta">
              Được xây dựng từ giữa năm 2012 tại TP. HCM, Việt Nam, Foody là
              cộng đồng tin cậy cho mọi người có thể tìm kiếm, đánh giá, bình
              luận các địa điểm ăn uống: nhà hàng, quán ăn, cafe, bar, karaoke,
              tiệm bánh, khu du lịch... tại Việt Nam - từ website hoặc ứng dụng
              di động. Tất cả thành viên từ Bắc đến Nam, Foody kết nối những
              thực khách đến với các địa điểm ăn uống lớn nhỏ cả đất nước.
            </p>
            <p>
              Đến thời điểm hiện tại, Foody với hàng trăm ngàn địa điểm và hàng
              trăm ngàn bình luận, hình ảnh tại Việt Nam, ở hầu hết các tỉnh
              thành. Foody là cách dễ nhất để bạn có thể tìm kiếm và lựa chọn
              địa điểm tốt nhất cho mình và bạn bè.
            </p>
            <h2 className={`${styles.blogPost} mb-4 blog-post-title`}>Tìm kiếm dễ dàng</h2>
            <p>
              Công cụ tìm kiếm thông minh bằng cách gõ: tên địa điểm, hoặc địa
              chỉ, hoặc tên đường, hoặc tên món ăn, hoặc mục đích, hoặc tên khu
              vực. Hệ thống tìm kiếm sử dụng gợi ý & xem nhanh thông tin, giúp
              bạn tìm địa điểm nhanh nhất
            </p>
            <h3 className={`${styles.blogPost} mb-4 blog-post-title`}>Phân loại rõ ràng</h3>
            <p>
              Foody phân loại các địa điểm ra rất chi tiết: theo mục đích, loại
              hình, món ăn, giá cả, loại ẩm thực... Điều này giúp cộng đồng lọc
              địa điểm theo mục đích của mình rất nhanh chóng.
            </p>
            <h2 className={`${styles.blogPost} mb-4 blog-post-title`}>Bình luận & Đánh giá</h2>
            <p>
              Foody cho phép thành viên chèn hình ảnh vào bình luận, đánh giá
              địa điểm với 5 tiêu chí: Món ăn, Vị trí, Không gian, Giá cả và
              Dịch vụ, điều này giúp cộng đồng có cái nhìn tổng quan về các tiêu
              chí của mỗi địa điểm. Do đặc thù của mỗi địa điểm khác nhau, ví dụ
              Quán cafe, cộng đồng sẽ quan tâm đến Không gian, đối với Quán Ăn
              thì cộng đồng quan tâm đến chất lượng món... Đây chính là điểm
              khác biệt của Foody so với cách dịch vụ khác.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Introduce;
