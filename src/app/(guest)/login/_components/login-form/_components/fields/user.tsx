import { User, users } from '@/data/users'
import { useFormSubmissionState } from '@/stores/form-submission'
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { UserRound } from 'lucide-react'
import { useSelectedUserState } from '../../_stores/selected-user'
import { inputFieldNames } from '../../_form/input-field-names'

export default function UserField() {
  const { isSubmitting } = useFormSubmissionState()
  const { setSelectedUserId } = useSelectedUserState()

  return (
    <Autocomplete
      label="Pilih Pengguna"
      name={inputFieldNames.userId}
      onSelectionChange={setSelectedUserId}
      isRequired
      isDisabled={isSubmitting}
      listboxProps={{
        emptyContent: 'Pengguna tidak ditemukan.',
      }}>
      {users.map((user: User) => (
        <AutocompleteItem
          key={user.id}
          startContent={<UserRound size={24} className="text-primary-300" />}>
          {user.name}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  )
}
