import {Footer} from '../../../shared/components/organisms/index';
import NavBarServer from '../../../shared/components/organisms/navbar/NavBarServer';
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <NavBarServer />
      {children}
        <Footer />
    </>
  );
}
