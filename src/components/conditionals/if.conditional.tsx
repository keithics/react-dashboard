import { ReactNode } from 'react';

function If({ show, children }: { show: boolean; children: ReactNode }) {
  if (show) return <>{children}</>;
  else return <></>;
}

export default If;
