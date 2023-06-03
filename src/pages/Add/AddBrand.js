import React from 'react'
import CustomInput from '../../components/CustomInput'

const AddBrand = () => {
  return (
    <div>
        <h3 className='mb-4'>Thêm thương hiệu</h3>
        <div>
            <form action=''>
                <CustomInput type='text' label='Nhập tên thương hiệu' />
            </form>
            <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Thêm thương hiệu</button>
        </div>
    </div>
  )
}

export default AddBrand