import PhoneInput from 'react-phone-number-input'

const PhoneNumber = ({ field, form, placeholder, disabled }) => (
  <PhoneInput
    className='formikInput'
    name={field.name}
    placeholder={placeholder}
    value={field.value}
    countrySelectProps={{
      className: 'bg-jams_dark_purple text-white'
    }}
    disabled={disabled}
    defaultCountry='IN'
    onChange={(value) => form.setFieldValue(field.name, value)}
    onBlur={field.onBlur} // eslint-disable-line
  />
)

export default PhoneNumber
