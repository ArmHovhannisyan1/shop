import { Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
//   desc_validation,
  email_validation,
//   num_validation,
  password_validation,
} from './utils/inputValidations'
import { useState } from 'react'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit((data) => {
    // Manually trim the values before processing
    // const trimmedData = Object.fromEntries(
    //   Object.entries(data).map(([key, value]) => [key, value.trim()])
    // );
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
      >
        <div>
          <Input {...name_validation} />
          <Input {...email_validation} />
          {/* <Input {...num_validation} /> */}
          <Input {...password_validation} />
          {/* <Input {...desc_validation}  /> */}
        </div>
        <div className="mt-5">
          {success && (
            <p >
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <button
            onClick={onSubmit}
          >
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}