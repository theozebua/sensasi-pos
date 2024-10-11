import { SetErrorMessage } from '@/stores/input-error-message'
import { inputFieldNames } from '../_form/input-field-names'

export function validateInputFields(
  formData: FormData,
  setErrorMessage: SetErrorMessage,
): boolean {
  const password = formData.get(inputFieldNames.password) as string

  let passed = true

  passed = validatePassword(password, passed, setErrorMessage)

  return passed
}

function validatePassword(
  password: string,
  passed = true,
  setErrorMessage: SetErrorMessage,
) {
  if (password.length < 1) {
    setErrorMessage(inputFieldNames.password, 'Kata sandi tidak boleh kosong')

    passed = false
  }

  return passed
}
