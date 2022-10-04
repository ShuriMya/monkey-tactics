import { useCallback, useState } from "react";
import { Table } from "react-daisyui";

export type StatsData<T> = {
	nb_games: number;
	stats: Array<T>;
};

interface StatsTableProps<T> {
	data: StatsData<T>;
	columns: Array<{ name: string; sortField: keyof T }>;
	renderRow: (dataRow: T) => React.ReactElement<{ key: React.Key }>;
}

const StatsTable = <T,>({ data, columns, renderRow }: StatsTableProps<T>) => {
	const [sortState, setSortState] = useState<{
		columnName: string;
		field: keyof T | undefined;
		descOrder: boolean;
	}>({
		columnName: "",
		field: undefined,
		descOrder: false,
	});

	const onSortClick = useCallback(
		(sortField: keyof T, columnName: string) => () => {
			if (sortField === sortState.field) {
				setSortState((oldState) => ({
					...oldState,
					descOrder: !oldState.descOrder,
				}));
			} else {
				setSortState({ field: sortField, columnName, descOrder: false });
			}
		},
		[sortState]
	);

	const sortData = useCallback(
		(unsorted: StatsData<T>) => {
			let sorted = unsorted.stats;
			if (!sortState.field) return sorted;

			let sortField = sortState.field;
			if (sortField !== undefined) {
				sorted = unsorted.stats.sort((a, b) => {
					const comp = (a[sortField] as any) - (b[sortField] as any);
					if (sortState.descOrder) return -comp;
					return comp;
				});
			}
			return sorted;
		},
		[sortState]
	);

	const sortedData = sortData(data);

	return (
		<Table className="rounded-box w-full table-zebra">
			<Table.Head>
				{columns.map((header) => (
					<div
						key={header.name}
						onClick={onSortClick(header.sortField, header.name)}
					>
						<span>{header.name}</span>
						<span className="ml-2">
							{header.name === sortState.columnName
								? sortState.descOrder
									? "v"
									: "^"
								: undefined}
						</span>
					</div>
				))}
			</Table.Head>
			<Table.Body>{sortedData.map((dataRow) => renderRow(dataRow))}</Table.Body>
		</Table>
	);
};

export default StatsTable;
