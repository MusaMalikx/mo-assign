import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <div className="container-xxl">
      {title && (
        <Head>
          <title>{title} | Motive</title>
        </Head>
      )}
      {children}
    </div>
  );
};

export default Layout;