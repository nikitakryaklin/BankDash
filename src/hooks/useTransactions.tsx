import { transactionsService } from "@/service/transaction.service";
import { IUser } from "@/types/User.type";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useTransactions = (user: IUser, limit: number) => {
  const result: string[] = [];
  user?.cards?.map((card) => result.push(card.number));

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => transactionsService.get(result, limit),
    select: (data) => data.data,
  });

  return { data, isLoading, isSuccess };
};
