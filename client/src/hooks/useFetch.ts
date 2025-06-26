import { useEffect, useState } from "react"

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export function useFetch<T>(fetchFunction: () => Promise<T>,deps: any[] = []) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchData = async () => {
    setLoading(true)
    try {
      const result = await fetchFunction()
      await delay(100)
      setData(result)
      setError("")
    } catch (error) {
      setError((error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, deps)

  return { data, loading, error, refetch: fetchData }
}
