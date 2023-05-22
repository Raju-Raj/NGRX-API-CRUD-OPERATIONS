import { createAction, props } from "@ngrx/store";
import { Book } from "./book";

export const invokeBooksAPI = createAction(
  "[Books API] invoke books Fetch API"
)

export const booksFetchAPISuccess = createAction(
  "[Books API] books fetch api success",
  props<{allBooks:Book[]}>()
)
