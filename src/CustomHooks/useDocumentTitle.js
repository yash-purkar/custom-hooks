import { useEffect } from "react"

export const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `Chats (${count})`
  }, [count])
}