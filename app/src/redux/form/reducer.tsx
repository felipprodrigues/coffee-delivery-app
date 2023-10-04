import { FormActionTypes } from "./action-types";

const initialState = {
  dataCep: null,
  loading: false,
  error: null,
};

const FormReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FormActionTypes.FETCH_ADDRESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FormActionTypes.FETCH_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        dataCep: action.response,
      };
    case FormActionTypes.FETCH_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case FormActionTypes.UPDATE_ADDRESS_NUMBER:
      return {
        ...state,
        addressNumber: action.number,
      };

    case FormActionTypes.UPDATE_ADDRESS_DETAILS:
      return {
        ...state,
        addressDetails: action.details,
      };

    case FormActionTypes.PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.method,
      };

    default:
      return state;
  }
};

export default FormReducer;
