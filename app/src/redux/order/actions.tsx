import { OrderActionTypes } from "./action-types";

export const placeFinalOrder = (finalOrder: any) => ({
  type: OrderActionTypes.PLACE_ORDER,
  finalOrder,
});

