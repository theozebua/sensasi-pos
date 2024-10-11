import { useFormSubmissionState } from '@/stores/form-submission'
import { Input } from '@nextui-org/react'
import { Eye, EyeOff } from 'lucide-react'
import { usePasswordVisibilityState } from '../../_stores/password-visibility'
import { inputFieldNames } from '../../_form/input-field-names'
import { useErrorMessageState } from '@/stores/input-error-message'

export default function Password() {
  const { isSubmitting } = useFormSubmissionState()
  const { isVisible, toggleVisibility } = usePasswordVisibilityState()
  const { fields } = useErrorMessageState()

  const errorMessage = fields.find(
    field => field.identifier === inputFieldNames.password,
  )?.message

  return (
    <Input
      label="Kata Sandi"
      name={inputFieldNames.password}
      isRequired
      isDisabled={isSubmitting}
      isInvalid={!!errorMessage}
      errorMessage={errorMessage}
      endContent={
        <button
          tabIndex={-1}
          className="focus:outline-none"
          type="button"
          onClick={() => toggleVisibility()}
          aria-label="toggle password visibility">
          {isVisible ? (
            <EyeOff className="pointer-events-none text-2xl text-default-400" />
          ) : (
            <Eye className="pointer-events-none text-2xl text-default-400" />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
    />
  )
}
