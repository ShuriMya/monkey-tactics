import { Checkbox, Select } from "react-daisyui";

export type PatchFilters = Array<{
	game_version: string;
}>;

interface FiltersProps {
	allFilters: PatchFilters;
	onPatchFilterChange: (newPatch: string) => void;
	onMonitoredFilterChange: React.ChangeEventHandler<HTMLInputElement>;
	selectedFilters: {
		game_version: string | undefined;
		only_monitored: boolean;
	};
}

const Filters = ({
	onPatchFilterChange,
	onMonitoredFilterChange,
	allFilters,
	selectedFilters,
}: FiltersProps) => {
	return (
		<div className="flex mb-5 text-sm items-center">
			<div className="flex flex-col">
				<label className="label mr-2">Patch</label>
				<Select
					onChange={onPatchFilterChange}
					value={selectedFilters.game_version}
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
			<div className="flex flex-col ml-6">
				<label className="label mr-2">Only monitored players</label>
				<Checkbox
					checked={selectedFilters.only_monitored}
					onChange={onMonitoredFilterChange}
				/>
			</div>
		</div>
	);
};

export default Filters;
