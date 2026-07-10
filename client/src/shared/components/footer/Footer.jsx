import { FaTelegramPlane } from 'react-icons/fa';
import { SiHabr } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';
import logo from '@/assets/icons/logo.svg';
import headhunter from '@/assets/icons/headhunter.svg';
import style from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.footer__contacts}>
				<img className={style.footer__logo} src={logo} alt="Logo" />
				<div className={style.footer__socials}>
					<a href="#" className={style.footer__social_link}>
						<FaTelegramPlane className={style.footer__social_icon} />
						<span>Telegram</span>
					</a>
					<a href="#" className={style.footer__social_link}>
						<SiHabr className={style.footer__social_icon} />
						<span>Habr</span>
					</a>
					<a
						href="#"
						className={`${style.footer__social_link} ${style['footer__social-link--youtube']}`}
					>
						<FaYoutube className={style.footer__social_icon} />
						<span>YouTube</span>
					</a>
					<a href="#" className={style.footer__social_link}>
						<img
							src={headhunter}
							alt="HeadHunter"
							className={style.footer__social_icon}
						/>
						<span>HeadHunter</span>
					</a>
				</div>
			</div>
			<p className={style.footer__copyright}>
				<span>© 2025</span>
				<span className={style.footer__company}>Verda</span>
				<span className={style.footer__rights}>All rights reserved</span>
			</p>
		</footer>
	);
};
