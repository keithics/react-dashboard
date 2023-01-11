import { ReactNode } from 'react';

function IfElse({ show, children }: { show: boolean; children: ReactNode[] }) {
  if (show) return <>{children[0]}</>;
  else return <>{children[1]}</>;
}

export default IfElse;
