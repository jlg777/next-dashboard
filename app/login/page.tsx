import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative mx-auto flex w-full max-w-md flex-col space-y-4 p-6 bg-white rounded-lg shadow-lg md:max-w-lg">
        {/* Encabezado con logo */}
        <div className="flex h-24 w-full items-end rounded-lg bg-blue-500 p-4">
          <div className="w-32 text-white">
            <AcmeLogo />
          </div>
        </div>
        {/* Formulario de inicio de sesión */}
        <LoginForm />
      </div>
    </main>
  );
}
