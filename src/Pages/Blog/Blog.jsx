import React from "react";
import styles from "../Blog/Blog.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../Pages/Breadcrumbs/Breadcrumbs";
import dochay from "../../asstes/images/dochay.jpg";
import dochay1 from "../../asstes/images/dochay1.jpg";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Blog = () => {
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/blog",
      title: "Blog",
      isActive: true,
    },
  ];
  return (
    <>
      <Header />
      <div className={`${styles.Blog} container mt-5 mb-5`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div class="grid wide">
          <div class="row">
            <div class="col-md-4">
              <div class={styles.blogCategory}>
                <div class={styles.blogCategoryTitle}>
                  <p>Danh mục blog</p>
                </div>
                <ul class={styles.blogCategoryContent}>
                  <li class={styles.blogCategoryItem}>
                    <a href="#" class={styles.blogCategoryLink}>
                      Trang chủ
                    </a>
                  </li>
                  <li class={styles.blogCategoryItem}>
                    <a href="#" class={styles.blogCategoryLink}>
                      Giới thiệu
                    </a>
                  </li>
                  <li class={styles.blogCategoryItem}>
                    <a href="#" class={styles.blogCategoryLink}>
                      Cửa hàng
                    </a>
                  </li>
                  <li class={styles.blogCategoryItem}>
                    <a href="#" class={styles.blogCategoryLink}>
                      Liên hệ
                    </a>
                  </li>
                </ul>
                <div class={styles.blogCategory}>
                  <div class={styles.blogCategoryTitle}>
                    <p>thẻ tags</p>
                  </div>
                  <ul class={styles.blogCategoryContent}>
                    <li
                      class={`${styles.blogCategoryItem} ${styles.blogCategoryItemBoder}`}
                    >
                      <a href="#" class={styles.blogCategoryLink}>
                        Đồ chay
                      </a>
                    </li>
                    <li
                      class={`${styles.blogCategoryItem} ${styles.blogCategoryItemBoder}`}
                    >
                      <a href="#" class={styles.blogCategoryLink}>
                        Món mặn
                      </a>
                    </li>
                    <li
                      class={`${styles.blogCategoryItem} ${styles.blogCategoryItemBoder}`}
                    >
                      <a href="#" class={styles.blogCategoryLink}></a>
                    </li>
                    <li
                      class={`${styles.blogCategoryItem} ${styles.blogCategoryItemBoder}`}
                    >
                      <a href="#" class={styles.blogCategoryLink}>
                        Asian Bread
                      </a>
                    </li>
                    <li
                      class={`${styles.blogCategoryItem} ${styles.blogCategoryItemBoder}`}
                    >
                      <a href="#" class={styles.blogCategoryLink}>
                        Steak
                      </a>
                    </li>
                  </ul>
                </div>
                <div class={styles.blogCategory} data-aos="fade-up">
                  <div class={styles.blogCategoryTitle}>
                    <p>tin tức nổi bật</p>
                  </div>
                  <ul class={styles.blogCategoryContent}>
                    <li className={styles.blogCategoryItem}>
                      <div className={styles.blogCategoryBox}>
                        <a className={styles.blogCategoryBoxImg} href="#">
                          <img src={dochay} alt />
                        </a>
                        <a className={styles.blogCategoryCoxText} href="#">
                          Nhà Hàng Ăn Chay - Tâm Hoài An
                        </a>
                      </div>
                    </li>
                    <li className={styles.blogCategoryItem}>
                      <div className={styles.blogCategoryBox}>
                        <a className={styles.blogCategoryBoxImg} href="#">
                          <img src={dochay} alt />
                        </a>
                        <a className={styles.blogCategoryCoxText} href="#">
                          Nhà Hàng Ăn Chay - Tâm Hoài An
                        </a>
                      </div>
                    </li>
                    <li className={styles.blogCategoryItem}>
                      <div className={styles.blogCategoryBox}>
                        <a className={styles.blogCategoryBoxImg} href="#">
                          <img src={dochay} alt />
                        </a>
                        <a className={styles.blogCategoryCoxText} href="#">
                          Nhà Hàng Ăn Chay - Tâm Hoài An
                        </a>
                      </div>
                    </li>
                    <li className={styles.blogCategoryItem}>
                      <div className={styles.blogCategoryBox}>
                        <a className={styles.blogCategoryBoxImg} href="#">
                          <img src={dochay} alt />
                        </a>
                        <a className={styles.blogCategoryCoxText} href="#">
                          Nhà Hàng Ăn Chay - Tâm Hoài An
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class={styles.listBlogs}>
                <div class={styles.myblog} data-aos="fade-up">
                  <div className={styles.blogThumnail}>
                    <a href="#" className={styles.blogThumnailLink}>
                      <img
                        src={dochay1}
                        alt
                        className={styles.blogThumnailImg}
                      />
                    </a>
                  </div>
                  <div class={styles.myblogTitle}>
                    <a href="#" class={styles.myblockTitleLink}>
                      Nhà hàng Chay Tâm An Lạc
                    </a>
                  </div>
                  <p class={styles.myblogTitleContent}>
                    Các món ăn thuần chay không sử dụng ngũ tân,các sản phẩm
                    thực dưỡng,nông sản sạch,ấn phẩm Phật giáo, Nhận đặt cỗ chay
                    <a href="/tin-tuc-1.html">[Đọc tiếp]</a>
                  </p>
                  <div class="row " style={{display: "flex", alignItems: "center"}}>
                    <div class="col-md-9">
                      <div class={styles.timePost}>
                        <span class={styles.timeDate}>
                          <CalendarTodayIcon sx={{fontSize: "18px"}} />
                          24/11/2021
                        </span>
                        <span class={styles.timeComment}>
                          <ChatBubbleIcon sx={{fontSize: "18px"}}/>3
                        </span>
                        <span class={styles.timeTag}>
                          <LocalOfferIcon sx={{fontSize: "18px"}}/>
                          Tags:
                          <a href="#" class={styles.timeTagLink}>
                            Đồ chay
                          </a>
                          
                        </span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class={styles.social}>
                        <a href="#" class={styles.socialLink}>
                          <FacebookIcon />
                        </a>
                        <a href="#" class={styles.socialLink}>
                          <TwitterIcon />
                        </a>
                        <a href="#" class={styles.socialLink}>
                          <GoogleIcon />
                        </a>
                        <a href="#" class={styles.socialLink}>
                         <YouTubeIcon />
                        </a>
                      </div>
                    </div>
                  </div>
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

export default Blog;
