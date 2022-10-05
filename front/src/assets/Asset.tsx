const ASSET_BASE_URL = import.meta.env.VITE_ASSETS_URL;

const Asset = ({
	type,
	name,
	className,
	title,
	extension = "png",
	asBackground = false,
	children,
}: {
	type: string;
	name: string;
	className?: string;
	title?: string;
	extension?: string;
	asBackground?: boolean;
	children?: React.ReactNode;
}) => {
	if (!name) {
		console.warn(`Missing asset for ${type} ${title}`);
		return <img className={className} title={title} placeholder="?" />;
	}

	if (asBackground) {
		return (
			<div
				className={className}
				title={title}
				style={{
					backgroundImage: `url('${ASSET_BASE_URL}/${type}/${name}.${extension}')`,
				}}
			>
				{children}
			</div>
		);
	}

	if (children) {
		console.error(`Asset image cannot contain children nodes`);
	}
	return (
		<img
			className={className}
			title={title}
			src={`${ASSET_BASE_URL}/${type}/${name}.${extension}`}
		/>
	);
};

export default Asset;
