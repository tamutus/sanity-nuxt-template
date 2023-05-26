import { Ref } from "vue";

export const useUpdateSelection = async function (
  selectionRef: Ref<any>,
  fetchURL: string,
  loadingRef?: Ref<boolean>,
  errorRef?: Ref<any>
) {
  if (loadingRef) {
    loadingRef.value = true;
  }
  const fetchOptions: any = {
    method: "GET",
  };
  let { data: newSelection, error: fetchError } = await useFetch(
    fetchURL,
    fetchOptions
  );
  selectionRef.value = newSelection.value;
  if (loadingRef) {
    loadingRef.value = false;
  }
  if (errorRef) {
    errorRef.value = fetchError.value;
    if (errorRef.value) {
      console.error(errorRef.value);
    }
  }
};
