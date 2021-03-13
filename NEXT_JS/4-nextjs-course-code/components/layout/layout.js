import MainHeader from "./main-header";

function Layout(props) {
  const { children } = props;

  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
export default Layout;
