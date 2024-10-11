import PageUrlEnum from '@/enums/page-url'
import mergeClass from '@/functions/merge-class'
import { useFormSubmissionState } from '@/stores/form-submission'
import Link from 'next/link'

export default function ForgotPasswordLink() {
  const { isSubmitting } = useFormSubmissionState()

  return (
    <Link
      href={`${PageUrlEnum.FORGOT_PASSWORD}?method=email`}
      className={mergeClass(
        isSubmitting
          ? 'pointer-events-none text-default-400'
          : 'pointer-events-auto',
        'my-4 block text-center text-sm',
      )}>
      Lupa Kata Sandi?
    </Link>
  )
}
