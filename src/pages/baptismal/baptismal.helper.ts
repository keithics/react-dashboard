import { BaptismalConfirmation } from 'pages/baptismal/baptismal.interface';

export function getType(): BaptismalConfirmation {
  const isBaptismal = window.location.href.includes('baptismal');
  return isBaptismal ? BaptismalConfirmation.BAPTISMAL : BaptismalConfirmation.CONFIRMATION;
}
