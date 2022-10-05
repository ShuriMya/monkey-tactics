import { useCallback } from "react";
import Asset from "./Asset";
import allItems from "./allItems.json";

const Item = ({
	itemId,
	itemName,
	className,
}: {
	itemId: number;
	itemName: string;
	className?: string;
}) => {
	const getAsset = useCallback((itemId: number) => {
		return allItems.find((asset) => asset.id === itemId);
	}, []);

	const asset = getAsset(itemId);

	return (
		<Asset
			type="Items"
			name={asset?.imgName ?? itemName}
			title={asset?.displayName ?? `${itemId} ${itemName}`}
			className={className}
		/>
	);
};

export default Item;
