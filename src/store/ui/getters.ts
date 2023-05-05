import UiState from "@/models/ui/UiState";

export const getAlert = ( state: UiState ) => {
  return state.alert;
}

export const getLoading = ( state: UiState ) => {
  return state.loading;
}