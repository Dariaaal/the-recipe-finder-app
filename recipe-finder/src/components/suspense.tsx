"use client";

import { Suspense, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SuspenseWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Suspense fallback={<p className="text-gray-500">Loading...</p>}>
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
