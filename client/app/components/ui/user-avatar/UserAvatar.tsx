import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './UserAvatar.module.scss';

const UserAvatar: FC<{ avatarPath: string; link: string; title?: string }> = ({
	avatarPath,
	link,
	title
}) => {
	console.log(avatarPath);
	return (
		<Link href={link}>
			<a className={styles.link} title={title}>
				<Image
					className={styles.avatar}
					src={avatarPath}
					width={44}
					height={44}
					alt=''
				/>
			</a>
		</Link>
	);
};

export default UserAvatar;
