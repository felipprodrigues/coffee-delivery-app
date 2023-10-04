import { FormActionTypes } from "./action-types";

export const fetchAddressRequest = (cep: string) => ({
  type: FormActionTypes.FETCH_ADDRESS,
  cep,
});

export const fetchAddressSuccess = (response: any) => ({
  type: FormActionTypes.FETCH_ADDRESS_SUCCESS,
  response,
});

export const fetchAddressFailure = (error: Error) => ({
  type: FormActionTypes.FETCH_ADDRESS_FAILURE,
  error: error.message,
});

export const updateAddressNumber = (number: string) => ({
  type: FormActionTypes.UPDATE_ADDRESS_NUMBER,
  number,
});

export const updateAddressDetails = (details: string) => ({
  type: FormActionTypes.UPDATE_ADDRESS_DETAILS,
  details,
});

export const updatePaymentMethod = (method: string) => ({
  type: FormActionTypes.PAYMENT_METHOD,
  method,
});

export const fetchAddress = (cep: string) => {
  return async (dispatch) => {
    if (cep.length === 8) {
      dispatch(fetchAddressRequest(cep));

      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        dispatch(fetchAddressSuccess(responseData));
      } catch (error: any) {
        console.error("Error fetching address:", error);
        dispatch(fetchAddressFailure(error));
      }
    } else {
      dispatch(fetchAddressFailure(new Error("Invalid CEP format")));
    }
  };
};
