import dynamic from 'next/dynamic';
import Image from 'next/image';

const EmailFormSection = dynamic(
  () => import('../../containers/login-page/EmailFormSection'),
  {
    ssr: false,
  }
);

const LoginPage = () => {
  return (
    <>
      <main
        style={{
          width: 'calc(100% - 40px)',
          minHeight: 'calc(100vh - 100px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px 20px',
          flexDirection: 'column',
          gap: '50px'
        }}
      >
        <Image
        src="https://placehold.co/197x103"
        alt="Logo"
        width="197"
        height="103"
      />
        <EmailFormSection />
        <hr style={{ width: '100%' }} />
      </main>
    </>
  );
};

export default LoginPage;
