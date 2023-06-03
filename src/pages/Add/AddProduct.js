import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import ReactQuill from 'react-quill'; //form edit text
import 'react-quill/dist/quill.snow.css';
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
const AddProduct = () => {
    const [desc, setDesc] = useState()
    const handleDesc = (e) => {
        setDesc(e)
    }
  return (
    <div>
        <h3 className='mb-4'>Thêm sản phẩm</h3>
        <div className=''>
            <form>
                <div className='mt-3'>
                    <CustomInput type='text' label='Nhập tên sản phẩm' />
                </div>
                <select name='' className='form-control py-3 mb-3' id=''>
                    <option value=''>Chọn danh mục</option>
                </select>
                <select name='' className='form-control py-3 mb-3' id=''>
                    <option value=''>Chọn thương hiệu</option>
                </select>
                <select name='' className='form-control py-3 mb-3' id=''>
                    <option value=''>Chọn màu sắc</option>
                </select>
                <div className='mt-3'>
                    <CustomInput type='number' label='Nhập số lượng sản phẩm' />
                </div>
                <div className='mt-3'>
                    <CustomInput type='number' label='Nhập giá sản phẩm' />
                </div>
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
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Thêm sản phẩm</button>
            </form>
        </div>
    </div>
  )
}

export default AddProduct