import React from 'react'

const InputView = ({formik,data}) => {

    const {label,name,type} = data

  return (
    <div className={formik.touched[name] && formik.errors[name] && 'error'}>
        <label>{label}</label>
        <input type={type} className='form-control mt-2' name={name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <span>{formik.errors[name]}.</span>
    </div>
  )
}

export default InputView