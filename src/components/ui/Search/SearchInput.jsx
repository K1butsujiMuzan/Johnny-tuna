import styles from './Search.module.css'
import ClearButton from '@components/ui/Search/ClearButton'
import Button from '@components/ui/Button/Button'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { linkPath, SEARCH_QUERY } from '@/config/links.data'

function SearchInput({ onChange, value, clearSearch }) {
  const navigate = useNavigate()

  const onSearchSubmit = event => {
    event.preventDefault()
    navigate(`${linkPath.result}?${SEARCH_QUERY}=${value}`)
    clearSearch()
  }

  return (
    <form
      method={'get'}
      className={styles.searchForm}
      onSubmit={onSearchSubmit}
    >
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
