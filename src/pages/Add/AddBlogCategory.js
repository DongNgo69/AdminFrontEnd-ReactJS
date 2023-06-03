import React from 'react'
import CustomInput from '../../components/CustomInput'

const AddBlogCategory = () => {
  return (
    <div>
        <h3 className='mb-4'>Thêm danh mục Blog</h3>
        <div>
            <form action=''>
                <CustomInput type='text' label='Nhập tên danh mục' />
            </form>
            <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Thêm danh mục</button>
        </div>
    </div>
  )
}

export default AddBlogCategory