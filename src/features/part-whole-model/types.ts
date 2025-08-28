export const ItemTypes = {
  NUMBER: "number",
};

export interface DragNumber {
  value: number;
  type: typeof ItemTypes.NUMBER;
}
