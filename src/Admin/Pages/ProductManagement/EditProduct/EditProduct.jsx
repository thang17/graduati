import React, { useContext, useEffect, useState } from 'react'
import styles from '../EditProduct/EditProduct.module.css'
import Breadcrumbs from '../../../../Admin/components/BreadCrumb/BreadCrumb';
import Switch from '@mui/material/Switch';
import anh from '../../../../asstes/images/burger.png'
// import { DataContext } from "../../../../contexts/DataContext";
function EditProduct() {
    // const {data} = useContext(DataContext)
    //console.log(data);
   
    const [status, setStatus] = useState(true)
    const [warnDate, setWarnDate] = useState("")
    const [saleDateStart, setSaleDateStart] = useState()
    const [saleDateEnd, setSaleDateEnd] = useState()
    const [img, setImg] = useState("")
     

    useEffect(() => {
        if (saleDateStart && saleDateEnd) {
            const start = new Date(saleDateStart)
            const end = new Date(saleDateEnd)
            setWarnDate((end - start) / (1000 * 3600 * 24))
        }
        else {
            setWarnDate("")
        }

    }, [saleDateEnd, saleDateStart])
    useEffect(() => {

        return () => {
            img && URL.revokeObjectURL(img)
        }
    }, [img])
    const breadcrumItem = [
        {
            href: "/",
            title: "Quản lý",
            isActive: false,
        },
        {
            href: "/Admin/quan-ly-san-pham",
            title: "Quản lý sản phẩm",
            isActive: false,
        },
        {
            href: "/sua-san-pham",
            title: "Sửa sản phẩm",
            isActive: true,
        },
    ];

    function getImg(e) {
        const urlImg = URL.createObjectURL(e.target.files[0])
        setImg(urlImg)
    }
        
     //const idProduct = window.location.hash.split("#")[1]
    // const productDetailt = data.find((e) => e._id === idProduct)
    // console.log(productDetailt)

    return (
        <>
            <div className={`${styles.main}`}>

                <Breadcrumbs breadItem={breadcrumItem} />
                <h2 style={{ fontSize: `30px`, fontWeight: `bold`, color: `#1A358F` }}>Sửa sản phẩm</h2>
                <div style={!status ? { filter: `brightness(80%)` } : {}}>
                    <div className={`${styles.formRow} `} >

                        <div className={`${styles.uploadImg}`}>

                            <div className={`${styles.imgWrapper}`}>
                                {img && <img src={anh} alt="img" />}
                                <input
                                    id="upLoadImg"
                                    type="file"
                                    className={`${styles.importImg}`}
                                    onChange={getImg}
                                    accept='image/png, image/png, image/jpeg' />
                                <label htmlFor='upLoadImg' style={img ? { transform: `translateY(-100%)`, opacity: `0` } : {}}>
                                    <p>+</p>
                                    <p>Tải ảnh lên </p>
                                </label>

                            </div>


                            <p style={{ marginLeft: `31px`, color: `#1A358F` }}>Ảnh sản phẩm</p>
                        </div>
                        <div className={`${styles.showHideProducts} `}>
                            <label htmlFor="" style={{ display: `flex`, justifyContent: `end` }}>Trạng thái <span> *</span></label>
                            <Switch defaultChecked style={{ color: `#1a358f` }} onClick={() => setStatus(!status)} />
                            {
                                status
                                    ? <p style={{ color: `#1a358f`, fontWeight: `bold`, width: `30px`, display: `inline-block`, textAlign: `end` }}>Hiện</p>
                                    : <p style={{ color: `#000`, fontWeight: `bold`, width: `30px`, display: `inline-block`, textAlign: `end` }}>Ẩn</p>
                            }

                        </div>

                    </div>
                    <div className={`${styles.form}`}>
                        <div className={`${styles.formRow} `}>
                            <div className={`${styles.formLeft} `}>
                                <div className={`${styles.wrapLeft}`}>
                                    <label htmlFor="">Tên sản phẩm <span>*</span></label>
                                    <input type="text"
                                     id='Fullname'
                                     value="name"
                                    />

                                </div>
                            </div>
                            <div className={`${styles.formRight} `}>
                                <div className={`${styles.wrapRight}`}>
                                    <label htmlFor="">Mã sản phẩm  <span>*</span></label>
                                    <input type="text" id='code' value="10"/>
                                </div>

                            </div>
                        </div>
                        <div className={`${styles.formRow} `}>
                            <div className={`${styles.formLeft} `}>
                                <div className={`${styles.wrapLeft}`}>
                                    <label htmlFor="">Mã giảm giá<span>*</span></label>
                                    <input type="text" id='discount' />
                                </div>
                            </div>
                            <div className={`${styles.formRight} `}>
                                <div className={`${styles.wrapRight}`}>
                                    <label htmlFor="">Giá sản phẩm <span>*</span></label>
                                    <input type="text" id='price' value="100.000 vnđ"/>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.formRow} `}>
                            <div className={`${styles.formLeft} `}>
                                <div className={`${styles.wrapLeft}`}>
                                    <label htmlFor="">Số lượng <span>*</span></label>
                                    <input type="number" id='amount' value="10"/>
                                </div>

                            </div>
                            <div className={`${styles.formRight} `}>
                                <div className={`${styles.wrapRight}`}>
                                <label htmlFor="">Mô tả <span>*</span></label>
                                    <input type="text" id='nametext' value="50"/>
                                </div>

                            </div>
                        </div>
                        <div className={`${styles.formRow} `}>
                        <div className={`${styles.formLeft} `}>
                                <label htmlFor="">Thời gian<span>*</span></label>
                                <div className={`${styles.wrapDate}`}>
                                    <input
                                    id='date'
                                    value="12/03/2000"
                                        type="text"
                                        className={`${styles.saleStart}`}
                                        onChange={(e) => setSaleDateStart(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className={`${styles.formRight} `}>
                                <div className={`${styles.wrapRight}`}>
                                    <label htmlFor="">Trạng thái <span>*</span></label>
                                    <select >
                                           <option value="true">Còn hàng</option> : 
                                           <option value="false">Hết hàng</option>
                                       
                                    </select>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className={`${styles.formRow} `}>
                        <div className={`${styles.formLeft} `}>
                        <div className={`${styles.wrapLeft}`}>
                                    <label htmlFor="">Hình thức thanh toán<span>*</span></label>
                                    <input type="text" id='discount' value="tiề mặt" />
                                </div>
                        </div>

                        <div className={`${styles.formRight} `}>
                            <div className={`${styles.buttonSection}`}>
                                <button className={`${styles.btnAdd}`}>
                                    Cập nhật
                                </button>
                                <button className={`${styles.btnCancel}`}>
                                    Huỷ
                                </button>

                            </div>
                        </div>
                    </div>
                    {warnDate < 0

                        ? <p style={{ color: `red` }}>Ngày kết thúc không được lớn hơn ngày bắt đầu</p>
                        : (
                            warnDate === ""
                                ? ""
                                : <p>Số ngày giảm giá <span style={{ color: `red` }}>{warnDate + 1}</span></p>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default EditProduct;