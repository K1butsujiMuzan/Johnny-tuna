import styles from './Search.module.css'
import Button from '@components/UI/Button/Button'
import { useCallback, useState } from 'react'

function Search() {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = useCallback(event => {
    setSearchValue(event.target.value)
  }, [])

  return (
    <form method={'get'} className={styles.searchForm}>
      <input
        name={'Search'}
        className={styles.searchInput}
        placeholder={'Поиск...'}
        onChange={handleChange}
        value={searchValue}
        aria-label={'Поиск'}
        autoComplete={'off'}
      />
      <div className={styles.searchButtons}>
        <button
          type={'button'}
          className={styles.clearButton}
          onClick={() => setSearchValue('')}
          aria-label={'Очистить'}
        >
          <svg
            className={styles.clearIcon}
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9898 1L0.773926 14.0946"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0.773926 1L12.9898 14.0946"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Button isSubmit isAccent>
          Найти
        </Button>
      </div>
    </form>
  )
}

export default Search
