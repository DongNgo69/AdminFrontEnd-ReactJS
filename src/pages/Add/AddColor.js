import React from 'react'
import CustomInput from '../../components/CustomInput'

const AddColor = () => {
  return (
    <div>
        <h3 className='mb-4'>Thêm màu sắc</h3>
        <div>
            <form action=''>
                <CustomInput type='text' label='Nhập tên màu sắc' />
            </form>
            <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Thêm màu sắc</button>
        </div>
    </div>
  )
}

export default AddColor
