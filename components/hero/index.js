import './index.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero__content'>
                <h1 className='hero__content__title'>super title that’s very <strong>very cool</strong> and useful</h1>
                <div className='hero__content__card'>
                    <h2 className='hero__content__card__title'>Fluent with Ambre</h2>
                    <p className='hero__content__card__text'>Lorem ipsum dolor sic amed amed amed ametLorem ipsum dolor sic amed amed amed amet</p>
                </div>
                <Link
                    className='hero__content__card__link'
                    href="#"
                >Voir les disponibilités
                <Image 
                src="/images/calendar_white.svg"
                width={24}
                height={24}
                alt='calendar_white'
                />
                </Link>

            </div>
            <Image
            className='hero__illu'
                    src="/images/illu_hero.png"
                    width={521}
                    height={648}
                    priority={true}
                    alt='illu_hero'
                    />
        </div>
    )
}