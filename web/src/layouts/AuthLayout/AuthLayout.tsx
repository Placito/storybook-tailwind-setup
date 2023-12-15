type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="min-w-screen min-[1440px]:bg-[lenght:100%_auto] bg[center_top] min-h-screen bg-silverTree bg-auth bg-[length:1440px_auto] bg-no-repeat dark:bg-nileBlue">
      <img
        src="/images/logo__secret-santa.svg"
        alt="Secret Santa"
        className="mx-auto mb-24 w-[460px] pt-24"
      />
      {children}
    </main>
  )
}

export default AuthLayout
