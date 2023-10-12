const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full mt-40 flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
