import { Formik, Field, Form, ErrorMessage } from 'formik'
import PhoneNumber from '../Components/PhoneNumber'
import * as Yup from 'yup'
// import SelectField from '../Components/SelectField'
// import { genderOptions } from '../Data/DropdownData'
import { validatePhoneNumber } from '../Utils/Helper'

const ScanForm = () => {
  return (
    <div className='w-screen py-5 min-h-screen flex items-center justify-center bg-jams_purple'>
      <div className='z-40 sm:top-0 bg-indigo-900 w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 p-7 text-left rounded-xl flex flex-col'>
        <div className='w-2/3 mx-auto text-center text-2xl text-white font-bold'>
          Send your details to the guardians
        </div>
        <div className='mt-5'>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phone: '',
              age: ''
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required(),
              lastName: Yup.string().required(),
              phone: Yup.string().required(),
              age: Yup.string().required()
            })}
            onSubmit={(values) => {
              console.log('submit')
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
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default ScanForm
