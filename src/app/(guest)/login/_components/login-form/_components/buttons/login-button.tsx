import { Button } from '@nextui-org/react'
import { useSelectedUserState } from '../../_stores/selected-user'
import { useFormSubmissionState } from '@/stores/form-submission'

export default function Login() {
  const { hasSelectedUser } = useSelectedUserState()
  const { isSubmitting } = useFormSubmissionState()

  return (
    <Button
      color="primary"
      className="w-full"
      isDisabled={!hasSelectedUser()}
      isLoading={isSubmitting}
      type="submit">
      Masuk
    </Button>
  )
}
