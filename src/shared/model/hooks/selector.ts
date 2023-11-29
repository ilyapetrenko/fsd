import { TypedUseSelectorHook, useSelector } from "react-redux";

// @ts-expect-error global_declaration
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
