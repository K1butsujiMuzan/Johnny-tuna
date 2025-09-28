import './Logo.css'
import logo from '@assets/icons/MainIcons/Logo.svg'
import { Link } from 'react-router'
import { scrollTop } from '@/utils/functions/toTop'
import { closeBurger, useIsBurgerOpen } from '@/store/useBurgerOpen'

function Logo({ className }) {
  const isBurgerOpen = useIsBurgerOpen()

  return (
    <Link
      to={'/'}
      aria-label={'На главную'}
      onClick={() => {
        scrollTop()
        isBurgerOpen ? closeBurger()  : undefined
      }}
    >
      <img
        className={className}
        src={logo}
        alt={'Logo'}
        height={35.96}
        width={442.04}
      />
    </Link>
  )
}

export default Logo
