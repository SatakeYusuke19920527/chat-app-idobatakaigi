import { ReactNode, useEffect } from 'react';

import '../styles/Layout.css';
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="layout-wrapper">
      <main>{children}</main>
    </section>
  );
};

export default Layout;
