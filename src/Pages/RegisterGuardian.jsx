import { Formik, Field, Form, ErrorMessage } from 'formik'
// import { useSelector } from 'react-redux'
import PhoneNumber from '../Components/PhoneNumber'
// import { useHistory } from 'react-router'
import * as Yup from 'yup'
// import { ReactComponent as Devjams } from 'Assets/Night/DevJams Logo.svg'
// import { setRegister1 } from 'Redux/slices/register'
// import SelectField from '../Components/SelectField'
// import { genderOptions } from '../Data/DropdownData'
import { validatePhoneNumber } from '../Utils/Helper'

const RegisterGuardian = () => {
  // const dispatch = useDispatch()
  // const history = useHistory()
  const data = {
    firstName: '',
    lastName: '',
    phone: '',
    // gender: '',
    age: ''
  }
  return (
    <div className='z-40 sm:top-0 bg-indigo-900 w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 p-7 text-left rounded-xl flex flex-col'>
      {/* <Devjams className='w-1/2 mx-auto' /> */}
      <div className=' mt-5'>
        <Formik
          initialValues={data}
          validationSchema={Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            phone: Yup.string().required('Required'),
            // gender: Yup.string().required('Required'),
            age: Yup.string().required('Required'),
          })}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form>
            <div className='grid sm:grid-cols-2 gap-x-6 text-sm'>
              <div className='mt-2'>
                <label
                  className='formikLabel text-white mt-2'
                  htmlFor='firstName'
                >
                  First name
                </label>
                <Field
                  name='firstName'
                  className='formikInput py-1'
                  type='text'
                />
                <ErrorMessage name='firstName'>
                  {(msg) => (
                    <div className='text-red-500 w-full text-xs'>{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className='mt-2'>
                <label
                  className='formikLabel text-white mt-2'
                  htmlFor='lastName'
                >
                  Last name
                </label>
                <Field
                  name='lastName'
                  className='formikInput py-1'
                  type='text'
                />
                <ErrorMessage name='lastName'>
                  {(msg) => (
                    <div className='text-red-500 w-full text-xs'>{msg}</div>
                  )}
                </ErrorMessage>
              </div>
            </div>
            <div className='grid sm:grid-cols-3 lg:grid-cols-4 gap-x-6 text-sm'>
              <div className='sm:col-span-2 lg:col-span-3 mt-2'>
                <label className='formikLabel text-white mt-2' htmlFor='phone'>
                  Phone Number
                </label>
                <Field
                  validate={validatePhoneNumber}
                  name='phone'
                  component={PhoneNumber}
                  placeholder=''
                />
                <ErrorMessage name='phone'>
                  {(msg) => (
                    <div className='text-red-500 w-full text-xs'>{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              {/* <div className='mt-2'>
                <label className='formikLabel' htmlFor='gender'>
                  Gender
                </label>
                <Field
                  name='gender'
                  component={SelectField}
                  options={genderOptions}
                  placeholder=''
                />
                <ErrorMessage name='gender'>
                  {(msg) => (
                    <div className='text-red-500 w-full text-xs'>{msg}</div>
                  )}
                </ErrorMessage>
              </div> */}
            </div>
            <div className='mt-2 grid grid-cols-2 gap-x-6 text-sm'>
              <div>
                <label className='formikLabel' htmlFor='age'>
                  Age
                </label>
                <Field name='age' className='formikInput' type='number' />
                <ErrorMessage name='age'>
                  {(msg) => (
                    <div className='text-red-500 w-full text-xs'>{msg}</div>
                  )}
                </ErrorMessage>
              </div>
            </div>
            <div className='text-center'>
              <button
                type='submit'
                className='bg-red-500 text-white px-6 py-2 rounded-md mt-7 text-sm'
              >
                Add User
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default RegisterGuardian