import {useEffect} from "react";

function useHead(headData) {
  useEffect(() => {
    const {
      title,
      description,
      keywords
    } = headData

    if(title) {
      document.title = title
    }

    if(description) {
      setMeta("description", description)
    }

    if(keywords) {
      setMeta("keywords", keywords)
    }

    function setMeta(name, content) {
      let metaTag = document.querySelector(`meta[name=${name}]`)

      if(metaTag) {
        metaTag.setAttribute('content', content)
      } else {
        metaTag = document.createElement("meta")
        metaTag.name = name
        metaTag.content = content
        document.head.appendChild(metaTag)
      }
    }

    return () => {}
  }, [headData])
}
 export default useHead