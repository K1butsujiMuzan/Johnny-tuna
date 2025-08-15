import GooglePlay from "@assets/images/Header/GooglePlay.png";
import AppStore from "@assets/images/Header/AppStore.png";

function Soc1als() {
  const socialsLinks = [
    {
      link: "https://play.google.com/store/apps/details?id=com.dts.freefiremax&pli=1",
      src: GooglePlay,
      alt: "Google Play"
    },
    {
      link: "https://apps.apple.com/us/app/apple-store/id375380948?l=ru",
      src: AppStore,
      alt: "App Store"
    }
  ]

  return(
    <>
      {socialsLinks.map(({link, src, alt}, index) => (
        <a key={index} href={link} target={"_blank"} rel={"noopener noreferrer"}>
          <img
            width={140}
            height={40}
            src={src}
            alt={alt}
          />
        </a>
      ))}
    </>
  )
}

export default Soc1als