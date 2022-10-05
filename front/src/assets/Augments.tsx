import { useCallback } from "react";
import allAugments from "./allAugments.json";
import Asset from "./Asset";

const Augment = ({
	augmentName,
	className,
}: {
	augmentName: string;
	className?: string;
}) => {
	const getAsset = useCallback((augmentName: string) => {
		return allAugments.find((asset) => asset.name === augmentName);
	}, []);

	const asset = getAsset(augmentName);

	return (
		<Asset
			type="Augments"
			name={asset?.imgName ?? ""}
			className={className}
			title={asset?.displayName ?? augmentName}
		/>
	);
};

export default Augment;
