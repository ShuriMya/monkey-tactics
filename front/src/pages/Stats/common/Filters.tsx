import { Select } from "react-daisyui";

export type PatchFilters = Array<{
	game_version: string;
}>;

interface FiltersProps {
	allFilters: PatchFilters;
	onPatchFilterChange: (newPatch: string) => void;
	selectedFilter: string;
}

const Filters = ({
	onPatchFilterChange,
	allFilters,
	selectedFilter,
}: FiltersProps) => {
	return (
		<div className="flex mb-5 text-sm">
			<div>
				<label className="label mr-2">Patch</label>
				<Select
					onChange={onPatchFilterChange}
					value={selectedFilter}
					className="select-sm text-sm"
				>
					{allFilters.map((filter) => (
						<Select.Option
							value={filter.game_version}
							key={filter.game_version}
						>
							{filter.game_version}
						</Select.Option>
					))}
				</Select>
			</div>
		</div>
	);
};

export default Filters;
