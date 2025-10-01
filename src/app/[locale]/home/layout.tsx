import {NavBar, Footer} from '../../../shared/components/organisms/index';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <NavBar />
      {children}
        <Footer />
    </>
  );
}
