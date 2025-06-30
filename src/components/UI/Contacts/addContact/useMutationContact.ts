import { AvatarService } from '@/service/avatar.service'
import { contactService } from '@/service/contacts.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useMutationContact = () => {
  const queryClient = useQueryClient()

  const creacteContactMutation = useMutation({
    mutationKey: ['add_contact'],
    mutationFn: contactService.addContact,
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['contacts'],
      })
    },
    onSuccess: () => {
      console.log('контакт успешно добавлен')
    },
    onError: () => {
      console.log('ошибка в добавлении контакта')
    },
  })

  return { creacteContactMutation }
}
