import { useRouter } from 'next/router';
import Link from 'next/link';

const RecipePage = () => {
	const router = useRouter();
	return (
		<div className="">
			Recipes Page
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</div>
	);
};

export default RecipePage;
