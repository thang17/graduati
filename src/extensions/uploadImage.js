import React, { useEffect, useState } from 'react'
export default function UploadImages(props) {
  const [thumnail_img, setThumnail] = useState(props.imageThumnail && props.imageThumnail)
  useEffect(() => {
    props.form.register("thumbnail", { value: thumnail_img });
    props.form.setValue("thumbnail", thumnail_img);
    return () => {
      thumnail_img && URL.revokeObjectURL(thumnail_img.preview)
    }
  }, [thumnail_img, props.form])
  const updateThumbnail = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setThumnail(file)
  }
  // console.log(thumnail_img)
  return (
    <div className="items-imageProduct" style={{ width: `${props.width && props.width}`, height: `${props.height && props.height}` }}>
      <label htmlFor={`product-upload-${props.index_manage}`}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx={12} cy={13} r={4} /></svg></label>
      <input id={`product-upload-${props.index_manage}`} name={`product-upload-${props.index_manage}`} type="file" accept=".png, .jpg, .jpeg" onChange={updateThumbnail} />
      {(thumnail_img &&
        <>
          <div
            id={`form__img__product-${props.index_manage}`}
            className='thumnail_upload'
            style={{ backgroundImage: 'url(' + thumnail_img.preview + ')' }} >
            {/* <div className='d-flex justify-content-around action_thumnail'> 
                <Modal content_modal={ <ImageEdit image={thumnail_img}/> }  class="edit_thumnail" icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>} acceptText="Lưu" denyText="Đóng"/>
                <Modal content_modal={<ConfirmDelete />} class="delete_thumnail" icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg>} acceptText="Đồng ý" denyText="Hủy"/>
              </div> */}
          </div>
        </>
      )
      }

    </div>
  )
}
