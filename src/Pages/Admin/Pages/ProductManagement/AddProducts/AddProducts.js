import React, { useEffect, useState } from 'react'
import styles from './AddProducts.module.css'
import Breadcrumbs from '../../../components/BreadCrumb/BreadCrumb';

import Switch from '@mui/material/Switch';
// import Header from '../../../components/admin/Header/Header';
function AddProducts() {

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
            href: "/admin",
            title: "Quản lý",
            isActive: false,
        },
        {
            href: "/admin/quan-ly-san-pham",
            title: "Quản lý sản phẩm",
            isActive: false ,
        },
        {
            href: "/them-san-pham",
            title: "Thêm sản phẩm",
            isActive: true,
        },
    ];

    function getImg(e) {
        const urlImg = URL.createObjectURL(e.target.files[0])
        setImg(urlImg)
    }


    return (
        <>
            {/* {window.innerWidth <= 425 && <Header />} */}
            <div className={`${styles.main}`}>

                <Breadcrumbs breadItem={breadcrumItem} />
                <h2 style={{ fontSize: `30px`, fontWeight: `bold`, color: `#1A358F` }}>Thêm sản phẩm mới</h2>
                <div style={!status ? { filter: `brightness(80%)` } : {}}>
                    <div className={`${styles.formRow} `} >

                        <div className={`${styles.uploadImg}`}>

                            <div className={`${styles.imgWrapper}`}>
                                {img && <img src={img} alt="img" />}
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

                                    />

                                </div>
                            </div>
                            <div className={`${styles.formRight} `}>
                                <div className={`${styles.wrapRight}`}>
                                    <label htmlFor="">Mô tả  <span>*</span></label>
                                    <input type="text" />
                                </div>

                            </div>
                        </div>
                        <div className={`${styles.formRow} `}>
                            <div className={`${styles.formLeft} `}>
                                <div className={`${styles.wrapLeft}`}>
                                    <label htmlFor="">Giá gốc<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className={`${styles.formRight} `}>
                                <div className={`${styles.wrapRight}`}>
                                    <label htmlFor="">Giá đã giảm <span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.formRow} `}>
                            <div className={`${styles.formLeft} `}>
                                <div className={`${styles.wrapLeft}`}>
                                    <label htmlFor="">Số lượng <span>*</span></label>
                                    <input type="number" />
                                </div>

                            </div>
                            <div className={`${styles.formRight} `}>
                                <div className={`${styles.wrapRight}`}>
                                    <label htmlFor="">Đơn vị <span>*</span></label>
                                    <select >
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div className={`${styles.formRow} `}>
                            <div className={`${styles.formLeft} `}>
                                <div className={`${styles.wrapLeft}`}>
                                    <label htmlFor="">Nhãn <span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className={`${styles.formRight} `}>
                                <div className={`${styles.wrapRight}`}>
                                    <label htmlFor="">Thuộc tính <span>*</span></label>
                                    <select >
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.formRow} `}>
                            <div className={`${styles.formLeft} `}>
                                <label htmlFor="">Thời gian giảm giá <span>*</span></label>
                                <div className={`${styles.wrapDate}`}>
                                    <p style={{ fontStyle: `italic  `, marginRight: `20px`, display: `inline` }}>Bắt đầu</p>
                                    <input
                                        type="date"
                                        className={`${styles.saleStart}`}
                                        onChange={(e) => setSaleDateStart(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className={`${styles.formRight} `}>
                                <div className={`${styles.wrapRight}`}>
                                    <label htmlFor="">Loại <span>*</span></label>
                                    <input type="text" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.formRow} `}>
                        <div className={`${styles.formLeft} `}>
                            <div className={`${styles.wrapDate}`}>
                                <p style={{ fontStyle: `italic  `, marginRight: `20px`, display: `inline` }}>Kết thúc</p>
                                <input
                                    type="date"
                                    className={`${styles.saleEnd}`}
                                    onChange={(e) => setSaleDateEnd(e.target.value)}
                                />
                            </div>

                        </div>

                        <div className={`${styles.formRight} `}>
                            <div className={`${styles.buttonSection}`}>
                                <button className={`${styles.btnAdd}`}>
                                    Thêm sản phẩm
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

export default AddProducts