import './Logo.css'
import logo from '@assets/icons/MainIcons/Logo.svg'
import { Link } from 'react-router'
import { scrollTop } from '@/utils/toTop'
import { closeBurger, useIsBurgerOpen } from '@/store/useBurgerOpen'
import { linkName, linkPath } from '@/config/links.data'

function Logo({ className }) {
  const isBurgerOpen = useIsBurgerOpen()

  return (
    <Link
      to={linkPath.main}
      aria-label={linkName.main}
      onClick={() => {
        scrollTop()
        isBurgerOpen ? closeBurger() : undefined
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
