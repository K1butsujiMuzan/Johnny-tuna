import { socialsLinks } from '@components/ui/Socials/Socials.data'

function Socials() {
  return (
    <>
      {socialsLinks.map(({ link, src, alt }, index) => (
        <a
          key={index}
          href={link}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <img width={140} height={40} src={src} alt={alt} />
        </a>
      ))}
    </>
  )
}

export default Socials
