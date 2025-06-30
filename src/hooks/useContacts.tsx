import { contactService } from "@/service/contacts.service";
import { useQuery } from "@tanstack/react-query";

export const useContacts = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => contactService.get(),
    select: (data) => data.data,
  });

  return { data, isLoading, isSuccess };
};
