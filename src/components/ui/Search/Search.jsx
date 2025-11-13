import styles from './Search.module.css'
import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import useDebounce from '@/hooks/useDebounce'
import { getSearchProducts } from '@/services/getSearchProducts'
import LoadingCircle from '@components/ui/LoadingCircle/LoadingCircle'
import SearchInput from '@components/ui/Search/SearchInput'

const LazySearchProductModal = lazy(
  () => import('@components/ui/Search/SearchProductItem'),
)

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const searchRef = useRef(null)

  const debouncedSearchValue = useDebounce(searchValue, 500)
  const shortSearchResult = useMemo(
    () => searchResult.slice(0, 5),
    [searchResult],
  )

  const handleChange = useCallback(event => {
    setSearchValue(event.target.value)
  }, [])

  useEffect(() => {
    const fetchResult = async () => {
      if (!debouncedSearchValue.trim()) {
        setSearchResult([])
        return
      }
      const result = await getSearchProducts(
        debouncedSearchValue.toLowerCase().trim(),
      )
      setSearchResult(result)
    }
    fetchResult()
  }, [debouncedSearchValue])

  const clearSearch = useCallback(() => {
    setSearchValue('')
    setSearchResult([])
  }, [])

  useEffect(() => {
    const onCloseSearchModal = event => {
      if (
        searchResult.length &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setSearchResult([])
      }
    }
    window.addEventListener('click', onCloseSearchModal)

    return () => window.removeEventListener('click', onCloseSearchModal)
  }, [searchResult])

  return (
    <div className={styles.searchWrapper} ref={searchRef}>
      <SearchInput
        clearSearch={clearSearch}
        value={searchValue}
        onChange={handleChange}
      />
      {searchResult.length > 0 && searchValue && (
        <Suspense
          fallback={
            <ul
              className={`${styles.searchProducts} ${styles.searchProductsLoading}`}
            >
              <LoadingCircle width={'5rem'} />
            </ul>
          }
        >
          <ul className={styles.searchProducts}>
            {shortSearchResult.map(product => (
              <LazySearchProductModal
                product={product}
                key={product?.id ?? product}
              />
            ))}
          </ul>
        </Suspense>
      )}
    </div>
  )
}

export default Search
