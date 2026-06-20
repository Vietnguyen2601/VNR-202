import { useEffect, useState, useCallback } from 'react'

/**
 * Hook goi API don gian, ho tro loading / error / refetch.
 * Vi du: const { data, loading, error, refetch } = useFetch(() => userApi.getAll())
 */
export function useFetch(requestFn, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await requestFn()
      setData(result)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, refetch: fetchData }
}
