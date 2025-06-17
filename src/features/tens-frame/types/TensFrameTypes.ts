export const TensFrameTypes = {
  COUNTER: "counter",
} as const;

export type TensFrameType =
  (typeof TensFrameTypes)[keyof typeof TensFrameTypes];

export interface DragItem {
  id: number;
  type: TensFrameType;
  color: string;
}

export type TensFrameContext = {
  totalBlue: number;
  setTotalBlue: (totalBlue: number) => void;
  totalRed: number;
  setTotalRed: (totalRed: number) => void;
};
