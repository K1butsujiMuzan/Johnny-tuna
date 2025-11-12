import styles from './Search.module.css'
import ClearButton from '@components/ui/Search/ClearButton'
import Button from '@components/ui/Button/Button'
import { memo } from 'react'

function SearchInput({ onChange, value, clearSearch }) {
  return (
    <form method={'get'} className={styles.searchForm}>
      <input
        name={'search'}
        className={styles.searchInput}
        placeholder={'Поиск...'}
        onChange={onChange}
        value={value}
        aria-label={'Поиск'}
        autoComplete={'off'}
        type={'search'}
      />
      <div className={styles.searchButtons}>
        <ClearButton onClick={clearSearch} />
        <Button isSubmit isAccent>
          Найти
        </Button>
      </div>
    </form>
  )
}

export default memo(SearchInput)
