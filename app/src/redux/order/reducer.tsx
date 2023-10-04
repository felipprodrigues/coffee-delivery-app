/* eslint-disable no-case-declarations */
import { OrderActionTypes } from "./action-types.ts";

const initialState = {
  finalOrder: null,
};

const OrderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OrderActionTypes.PLACE_ORDER:
      const { addressNumber, addressDetails, paymentMethod, dataCep } =
        action.finalOrder;

      const finalOrder = {
        address: dataCep.logradouro,
        addressDetails,
        addressNumber,
        cep: dataCep.cep,
        city: dataCep.localidade,
        neighbourhood: dataCep.bairro,
        neighbourhoodDetails: dataCep.complemento,
        paymentMethod,
        state: dataCep.uf,
      };

      return {
        ...state,
        finalOrder,
      };

    default:
      return state;
  }
};

export default OrderReducer;
