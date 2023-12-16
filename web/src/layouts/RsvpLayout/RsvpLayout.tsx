import Footer from 'src/components/Footer/Footer'
import Icon from 'src/components/Icon/Icon'

type RsvpLayoutProps = {
  children?: React.ReactNode
}

const RsvpLayout = ({ children }: RsvpLayoutProps) => {
  return (
    <>
      <main className="min-w-screen min-[1440px]:bg-[lenght:100%_auto] bg[center_top] min-h-screen bg-silverTree bg-auth bg-[length:1440px_auto] bg-no-repeat dark:bg-nileBlue">
        <img
          src="/images/logo__secret-santa.svg"
          alt="Secret Santa"
          className="mx-auto mb-10 w-[460px] pt-24"
        />
        <div className="mx-auto w-[660px] text-5xl uppercase text-white">
          {' '}
          -- you&apos;re inveted to --
        </div>
        <div className="center mx-auto w-[660px] text-5xl font-bold uppercase text-white">
          smith christmas
        </div>
        <div className="center mx-auto mb-14 w-[660px] uppercase text-white">
          December 24, 2023
        </div>
        <div className="center min-w-screen min-[1440px]:bg-[lenght:100%_auto] bg[center_top] mx-auto flex w-[660px] gap-20">
          <a href="#" className="cursor-pointer">
            <div className="center min-w-screen min-[1440px]:bg-[lenght:100%_auto] bg[center_top] inline-block font-bold">
              <div className="inveted absolute left-[32%] z-50 border-white bg-orangeRed text-white">
                <Icon id="thumbsDown" size={42} />
              </div>
              <div className="flex flex-col bg-white px-8 py-2">
                <p>Regretfully</p>
                <p>Decline</p>
              </div>
            </div>
          </a>
          <a href="#" className="cursor-pointer">
            <div className="center min-w-screen min-[1440px]:bg-[lenght:100%_auto] bg[center_top] inline-block font-bold">
              <div className="inveted absolute left-[49%] z-50 border-white bg-spanishGreen text-white">
                <Icon id="thumbsUp" size={42} />
              </div>
              <p className="z-30 bg-white px-8 py-5">I&apos;ll Be There!</p>
            </div>
          </a>
        </div>
        {children}
      </main>
      <Footer />
    </>
  )
}
export default RsvpLayout
