import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import ReactQuill from 'react-quill'; //form edit text
import 'react-quill/dist/quill.snow.css';
// import { Stepper } from 'react-form-stepper'; //from stepper các bước
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
};
const AddBlog = () => {
    const [desc, setDesc] = useState()
    const handleDesc = (e) => {
        setDesc(e)
    }
  return (
    <div>
        <h3 className='mb-4'>Add Blog</h3>
        <div className=''>
            <form action=''>
                <div className='mt-3'>
                    <CustomInput type='text' label='Nhập tiêu đề Blog' />
                </div>
                <select name='' className='form-control py-3 mb-3' id=''>
                    <option value=''>Chọn danh mục Blog</option>
                </select>
                <ReactQuill 
                    theme="snow" 
                    value={desc} 
                    onChange={(evt) => {handleDesc(evt)}} 
                />
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Nhấp hoặc kéo tệp vào khu vực này để tải file</p>
                </Dragger>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Thêm Blog</button>
            </form>
        </div>
    </div>
  )
}

export default AddBlog