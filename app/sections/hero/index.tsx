import { type FC } from 'react'
import styles from './styles.module.css'
import LayoutWrapper from '@/components/layout-wrapper'
import BlurPopUpByWord from '@/components/blur-pop-up-by-words'
import { cn } from '@/lib/utils'
import BlurPopUp from '@/components/blur-pop-up'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Sidebar from './components/sidebar'
import IllustrateAnimate from '@/components/illustrate-animate'

const Hero: FC = () => {
	return (
		<section className={styles.hero}>
			<LayoutWrapper>
				<h1 className={cn(styles.heading, styles.hide__mobile)}>
					<BlurPopUpByWord text='Mulai Bisnismu dalam Hitungan Menit bersama Bisnovo' />
				</h1>

				<h1 className={cn(styles.heading, styles.show__mobile, 'text-center')}>
					<BlurPopUpByWord text='Setup Cepat. Jualan Online Lebih Mudah.' />
				</h1>

				<BlurPopUp delay={1}>
					<h2 className={cn(styles.sub__heading, styles.hide__mobile)}>
						Kami bantu kamu membuat website, konten, chatbot, dan strategi promosi.
						Juga tersedia program reseller tanpa modal dengan untung langsung.
					</h2>
					<h2 className={cn(styles.sub__heading, styles.show__mobile)}>
						Paket lengkap untuk mulai jualan online + peluang jadi reseller gratis.
					</h2>
				</BlurPopUp>

				<div className={cn(styles.button__container)}>
					<BlurPopUp delay={1.1}>
						<Link
							className={styles.start__link}
							href='https://wa.me/6285156779923'
							target='_blank'
							rel='noopener noreferrer'>
							{' '}
							Konsultasi Gratis di WhatsApp{' '}
						</Link>
					</BlurPopUp>

					<BlurPopUp delay={1.15}>
						<Link
							className={styles.intoducing__link}
							href='https://wa.me/6285156779923'
							target='_blank'
							rel='noopener noreferrer'>
							<span>Gabung Jadi Reseller</span>
							<ChevronRight />
						</Link>
					</BlurPopUp>
				</div>

				<div className={styles.hero__img__container}>
					<div className={styles.hero__illustration__container}>
						<div className={styles.hero__illustration__perspective}>
							<div className={styles.hero__illustration__base}>
								<div className={styles.hero__illustration__sidebar}>
									<Sidebar />
								</div>
								<IllustrateAnimate
									delay={2}
									duration={1.4}
									className={styles.hero__illustration__inbox}>
									<Image
										src="/assets/angkabrpsaja.jpg"
										alt="Illustration"
										width={500}
										height={300}
										className={styles.hero__illustration__image}
									/>
								</IllustrateAnimate>
							</div>
						</div>
					</div>
				</div>
			</LayoutWrapper>
		</section>
	)
}

export default Hero
