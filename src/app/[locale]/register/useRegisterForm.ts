import { useState } from "react";

interface SetRegisterForm {
  (field: 'account'|'password'|'repeatPassword', value: string): void
}
interface UseRegisterForm {
  (): {
    account: string,
    password: string,
    repeatPassword: string,
    setRegisterForm: SetRegisterForm
    validForm: () => { isPass: boolean, message: string }
  }
}

const useRegisterForm: UseRegisterForm = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const set = {
    account: (value: string) => setAccount(value),
    password: (value: string) => setPassword(value),
    repeatPassword: (value: string) => setRepeatPassword(value)
  }

  const setRegisterForm: SetRegisterForm = (field, value) => {
    set[field](value)
  }
  
  const validForm = () => {
    const renderResult = (isPass: boolean = true, message: string = '') => ({ isPass, message })
    const pattern = /^[a-zA-Z0-9]+$/;
    if(account.length < 5) return renderResult(false, 'Account should have a length of 5 characters or more.')
    if(!pattern.test(account)) return renderResult(false, 'Account can only contain letters and numbers.')
    if(password !== repeatPassword) return renderResult(false, 'Passwords do not match')
    if(password.length < 5) return renderResult(false, 'Password should have a length of 5 characters or more.')
    if(!pattern.test(password)) return renderResult(false, 'Password can only contain letters and numbers.')
    return renderResult()
  }
  return {
    account,
    password,
    repeatPassword,
    setRegisterForm,
    validForm
  }
}
export default useRegisterForm