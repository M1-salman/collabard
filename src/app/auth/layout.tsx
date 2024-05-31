const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[90vh] flex justify-center items-center">{children}</div>
  );
};

export default AuthLayout;
