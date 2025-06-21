'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import IllustrateAnimate from '@/components/illustrate-animate'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<IllustrateAnimate delay={2}>
				<Image
					src="/assets/a1.png" // pastikan ini ada di public/assets/
					alt="Bisnovo Sidebar"
					width={300}
					height={600}
					className={styles.sidebar__image}
				/>
			</IllustrateAnimate>
		</div>
	)
}

export default Sidebar
