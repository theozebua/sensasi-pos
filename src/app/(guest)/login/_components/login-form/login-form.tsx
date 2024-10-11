import { FormEvent } from 'react'
import { useFormSubmissionState } from '@/stores/form-submission'
import { useSelectedUserState } from './_stores/selected-user'
import Password from './_components/fields/password'
import User from './_components/fields/user'
import Login from './_components/buttons/login-button'
import ForgotPassword from './_components/links/forgot-password-link'
import { validateInputFields } from './_validation/input-validation'
import { useErrorMessageState } from '@/stores/input-error-message'

export default function LoginForm() {
  const { toggleSubmitting } = useFormSubmissionState()
  const { hasSelectedUser } = useSelectedUserState()
  const { setErrorMessage, clearErrorMessages } = useErrorMessageState()

  const handleAuthentication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    clearErrorMessages()

    if (
      !validateInputFields(new FormData(event.currentTarget), setErrorMessage)
    ) {
      return
    }

    toggleSubmitting()

    setTimeout(() => {
      toggleSubmitting()
    }, 2000)
  }

  return (
    <form className="space-y-4" onSubmit={handleAuthentication}>
      <User />

      {hasSelectedUser() && <Password />}

      <Login />

      <ForgotPassword />
    </form>
  )
}
