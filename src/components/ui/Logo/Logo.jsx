import './Logo.css'
import logo from '@assets/icons/MainIcons/Logo.svg'
import { Link } from 'react-router'
import { scrollTop } from '@/utils/functions/toTop'
import { useBurgerOpen } from '@/store/useBurgerOpen'

function Logo({ className }) {
  const { isOpen, closeBurger } = useBurgerOpen()
  return (
    <Link
      to={'/'}
      aria-label={'На главную'}
      onClick={() => {
        scrollTop()
        isOpen ? closeBurger() : undefined
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
