import styles from './FooterTop.module.css'
import NavLinks from '@components/UI/NavLink/NavLinks'
import Phone from '@components/UI/Phone/Phone'
import Logo from '@components/UI/Logo/Logo'
import Socials from '@components/UI/Socials/Socials'

function FooterTop() {
  const links = [
    {
      to: '/stocks',
      text: 'Акции',
    },
    {
      to: '/contacts',
      text: 'Контакты',
    },
    {
      to: '/about',
      text: 'О нас',
    },
    {
      to: '/information',
      text: 'Правовая информация',
    },
    {
      to: '/delivery',
      text: 'Доставка',
    },
  ]

  return (
    <div className={`${styles.footerTopInner} container`}>
      <div className={styles.innerLeft}>
        <p className={styles.navigationText}>Навигация</p>
        <nav>
          <ul className={styles.footerLinks}>
            {links.map((link, index) => (
              <NavLinks to={link.to} key={index}>
                {link.text}
              </NavLinks>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.innerMiddle}>
        <div className={styles.timePhoneContainer}>
          <p className={styles.middleText}>Заказывайте по телефону</p>
          <Phone />
        </div>
        <div className={styles.timePhoneContainer}>
          <p className={styles.middleText}>Доставка работает</p>
          <span className={styles.timeOfWork}>
            <time dateTime={'09:00'}>с 9:00 </time>
            <time dateTime={'23:00'}>до 23:00</time>
          </span>
          <a href={'https://desktop.telegram.org/?setln=ru'} target={'_blank'}>
            <svg
              className={styles.vkIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.579 6.855c.14-.465 0-.806-.662-.806h-2.193c-.558 0-.813.295-.953.619c0 0-1.115 2.719-2.695 4.482c-.51.513-.743.675-1.021.675c-.139 0-.341-.162-.341-.627V6.855c0-.558-.161-.806-.626-.806H9.642c-.348 0-.558.258-.558.504c0 .528.79.65.871 2.138v3.228c0 .707-.127.836-.407.836c-.743 0-2.551-2.729-3.624-5.853c-.209-.607-.42-.852-.98-.852H2.752c-.627 0-.752.295-.752.619c0 .582.743 3.462 3.461 7.271c1.812 2.601 4.363 4.011 6.687 4.011c1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752c.324 0 .882.164 2.183 1.417c1.486 1.486 1.732 2.153 2.567 2.153h2.192c.626 0 .939-.313.759-.931c-.197-.615-.907-1.51-1.849-2.569c-.512-.604-1.277-1.254-1.51-1.579c-.325-.419-.231-.604 0-.976c.001.001 2.672-3.761 2.95-5.04"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.innerRight}>
        <Logo className={'footerLogo'} />
        <span>
          <p className={styles.downloadText}>Любимые блюда в приложении!</p>
          <p className={styles.downloadText}>Скачай сейчас!</p>
        </span>
        <div className={styles.socials}>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default FooterTop
