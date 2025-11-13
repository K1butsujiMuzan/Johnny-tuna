import useHead from '@/hooks/useHead'
import { useSearchParams } from 'react-router'
import { SEARCH_QUERY } from '@/config/links.data'
import { useEffect, useState } from 'react'
import { getSearchProducts } from '@/services/getSearchProducts'
import LoadingCircle from '@components/ui/LoadingCircle/LoadingCircle'
import ProductCard from '@components/ui/ProductCard/ProductCard'
import styles from './Result.module.css'

function Result() {
  const [searchResult, setSearchResult] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get(SEARCH_QUERY)

  useHead({
    title: `Джонни Тунец | Поиск - ${searchQuery}`,
    description: `Результаты поиска по запросу "${searchQuery}"`,
    keywords: 'поиск, результат поиска, найти',
  })

  useEffect(() => {
    const fetchResult = async () => {
      if (!searchQuery.trim()) {
        return
      }
      try {
        setIsLoading(true)
        const result = await getSearchProducts(searchQuery.toLowerCase().trim())
        setSearchResult(result)
      } catch (error) {
        console.error('Ошибка поиска: ', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchResult()
  }, [searchParams])

  return (
    <section className={'container pageContainer'}>
      <h1>Результат поиска: {searchQuery}</h1>
      <div className={styles.categoryProducts}>
        {searchResult.length > 0 &&
          !isLoading &&
          searchResult.map(product =>
            product?.id ? (
              <ProductCard product={product} key={product.id} />
            ) : (
              <span key={product}>{product}</span>
            ),
          )}
        {isLoading && <LoadingCircle width={'15rem'} />}
      </div>
    </section>
  )
}

export default Result
