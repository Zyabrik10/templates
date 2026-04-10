import { Header, Footer } from 'widgets/index';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <div
              style={{
                paddingTop: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
