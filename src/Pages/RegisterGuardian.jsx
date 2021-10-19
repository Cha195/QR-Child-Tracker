import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'
import PhoneNumber from '../Components/PhoneNumber'
import { useHistory } from 'react-router'
import * as Yup from 'yup'
// import { ReactComponent as Devjams } from 'Assets/Night/DevJams Logo.svg'
import SelectField from '../Components/SelectField'
import { genderOptions } from '../Data/DropdownData'
import { validatePhoneNumber } from '../Utils/Helper'

const RegisterGuardian = () => {
  const history = useHistory()

  return (
    <div className='w-screen py-5 min-h-screen flex items-center justify-center bg-jams_purple'>
      <div className='z-40 sm:top-0 bg-indigo-900 w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 p-7 text-left rounded-xl flex flex-col'>
        <div className='w-1/2 mx-auto text-center text-2xl text-white font-bold'>
          Register a guardian
        </div>
        <div className='mt-5'>
          <Formik
            initialValues={{
              users: [{
                firstName: '',
                lastName: '',
                phone: '',
                gender: '',
                age: ''
              }]
            }}
            validationSchema={Yup.object({
              users: Yup.array((Yup.object({
                firstName: Yup.string().required(),
                lastName: Yup.string().required(),
                phone: Yup.string().required(),
                age: Yup.string().required(),
                gender: Yup.string().required()
              }))).min(1).max(3)
            })}
            onSubmit={(values) => {
              console.log(values)
              history.push('/qr')
            }}
          >
            {({ values }) => (
              <Form>
                <div className='h-full md:h-3/4'>
                  <FieldArray name='users'>
                    {({ push, remove }) => (
                      <div className=' divide-y-2 divide-gray-100 overflow-auto '>
                        {values.users.map((_, index) => (
                          <div className='py-5' key={index}>
                            <div className='grid sm:grid-cols-2 gap-x-6 text-sm'>
                              <div className='mt-2'>
                                <label
                                  className='formikLabel text-white mt-2'
                                  htmlFor={`users[${index}].firstName`}
                                >
                                  First name
                                </label>
                                <Field
                                  name={`users[${index}].firstName`}
                                  className='formikInput py-1'
                                  type='text'
                                />
                                <ErrorMessage name={`users[${index}].firstName`}>
                                  {(msg) => (
                                    <div className='text-red-500 w-full text-xs'>{msg}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                              <div className='mt-2'>
                                <label
                                  className='formikLabel text-white mt-2'
                                  htmlFor={`users[${index}].lastName`}
                                >
                                  Last name
                                </label>
                                <Field
                                  name={`users[${index}].lastName`}
                                  className='formikInput py-1'
                                  type='text'
                                />
                                <ErrorMessage name={`users[${index}].lastName`}>
                                  {(msg) => (
                                    <div className='text-red-500 w-full text-xs'>{msg}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>
                            <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-x-6 text-sm'>
                              <div className='sm:col-span-2 lg:col-span-3 mt-2'>
                                <label className='formikLabel text-white mt-2' htmlFor={`users[${index}].phone`}>
                                  Phone Number
                                </label>
                                <Field
                                  validate={validatePhoneNumber}
                                  name={`users[${index}].phone`}
                                  component={PhoneNumber}
                                  placeholder=''
                                />
                                <ErrorMessage name={`users[${index}].phone`}>
                                  {(msg) => (
                                    <div className='text-red-500 w-full text-xs'>{msg}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                              <div className='mt-2 lg:col-span-2'>
                                <label className='formikLabel' htmlFor={`users[${index}].gender`}>
                                  Gender
                                </label>
                                <Field
                                  name={`users[${index}].gender`}
                                  component={SelectField}
                                  options={genderOptions}
                                  placeholder=''
                                />
                                <ErrorMessage name={`users[${index}].gender`}>
                                  {(msg) => (
                                    <div className='text-red-500 w-full text-xs'>{msg}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>
                            <div className='mt-2 grid grid-cols-2 gap-x-6 text-sm'>
                              <div>
                                <label className='formikLabel' htmlFor={`users[${index}].age`}>
                                  Age
                                </label>
                                <Field
                                  name={`users[${index}].age`}
                                  className='formikInput'
                                  type='number'
                                />
                                <ErrorMessage name={`users[${index}].age`}>
                                  {(msg) => (
                                    <div className='text-red-500 w-full text-xs'>{msg}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>
                            <div className='w-full mt-7 flex justify-center'>
                              <button
                                type='button'
                                onClick={() => remove(index)}
                                className={`w-48 bg-red-500 text-white px-3 py-2 rounded-md ${values.users.length < 2 ? 'hidden' : ''}`}
                              >
                                Remove User
                              </button>
                            </div>
                          </div>
                        ))}
                        <div className='w-2/3 flex gap-5 mx-auto'>
                          <button
                            type='button'
                            onClick={() => push({ firstName: '', lastName: '', phone: '', gender: '', age: '' })}
                            className='mx-auto w-28 bg-red-500 text-white px-3 py-2 rounded-md mt-7'
                          >
                            Add User
                          </button>
                          <button
                            type='submit'
                            className='mx-auto w-28 bg-red-500 text-white px-3 py-2 rounded-md mt-7'
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    )}
                  </FieldArray>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default RegisterGuardian
