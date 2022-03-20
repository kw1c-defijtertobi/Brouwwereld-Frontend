import { ref } from "vue";

export interface ICartItem {
  id: number,
  amount: number;
}

export const cart = ref(<ICartItem[]>[])