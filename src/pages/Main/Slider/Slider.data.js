import slide1_png from '@assets/images/Slider/SliderImage1.png'
import slide1_webp from '@assets/images/Slider/SliderImage1.webp'
import slide1_avif from '@assets/images/Slider/SliderImage1.avif'
import slide2_png from '@assets/images/Slider/SliderImage2.png'
import slide2_webp from '@assets/images/Slider/SliderImage2.webp'
import slide2_avif from '@assets/images/Slider/SliderImage2.avif'
import slide3_png from '@assets/images/Slider/SliderImage3.png'
import slide3_webp from '@assets/images/Slider/SliderImage3.webp'
import slide3_avif from '@assets/images/Slider/SliderImage3.avif'

export const sliderImages = [
  {
    sources: [
      { srcSet: slide1_avif, type: 'image/avif' },
      { srcSet: slide1_webp, type: 'image/webp' },
    ],
    src: slide1_png,
    alt: 'Пицца в подарок по промокоду LETO25',
  },
  {
    sources: [
      { srcSet: slide2_avif, type: 'image/avif' },
      { srcSet: slide2_webp, type: 'image/webp' },
    ],
    src: slide2_png,
    alt: 'Закажи в пиццерии две пиццы - третью получи бесплатно',
  },
  {
    sources: [
      { srcSet: slide3_avif, type: 'image/avif' },
      { srcSet: slide3_webp, type: 'image/webp' },
    ],
    src: slide3_png,
    alt: 'День пиццы: только в пятницу каждая третья пицца бесплатно',
  },
]