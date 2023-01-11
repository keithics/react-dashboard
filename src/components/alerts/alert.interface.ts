export interface AlertBoxesInterface {
  title?: string | null | undefined;
  message: string | null | undefined;
  onClose?(): void;
}

export interface AlertInterface {
  messageOnly?: boolean;
}
