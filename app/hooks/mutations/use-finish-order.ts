import { useMutation, useQueryClient } from "@tanstack/react-query";

import { finishOrder } from "@/app/actions/finish-order";

import { getUseCartQueryKey } from "../queries/get-cart";

export const getUseFinishOrderMutationKey = () => ["finish-order"];

export const useFinishOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: getUseFinishOrderMutationKey(),
    mutationFn: async () => {
      await finishOrder();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUseCartQueryKey() });
    },
  });
};
