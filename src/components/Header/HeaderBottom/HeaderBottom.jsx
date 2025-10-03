import styles from './HeaderBottom.module.css'
import Search from '@components/ui/Search/Search'
import BasketLink from '@components/ui/BasketLink/BasketLink'
import ProfileLink from '@components/ui/ProfileLink/ProfileLink'

function HeaderBottom() {
  return (
    <div className={`${styles.headerBottomInner} container`}>
      <Search />
      <div className={styles.headerBottomButtons}>
        <BasketLink />
        <ProfileLink />
      </div>
    </div>
  )
}

export default HeaderBottom
