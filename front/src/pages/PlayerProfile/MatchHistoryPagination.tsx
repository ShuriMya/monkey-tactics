import { Button, Pagination } from "react-daisyui";

interface MatchHistoryPaginationProps {
	count: number;
	currentPage: number;
	updatePage: (newPage: number) => () => void;
}

const MATCH_HISTORY_PAGE_SIZE = 10;

const MatchHistoryPagination = ({
	count,
	currentPage,
	updatePage,
}: MatchHistoryPaginationProps) => {
	const nbPages = Math.ceil(count / MATCH_HISTORY_PAGE_SIZE / 8);
	return (
		<Pagination>
			{Array(nbPages)
				.fill(null)
				.map((_, index) => (
					<Button
						active={currentPage === index + 1}
						key={index}
						onClick={updatePage(index + 1)}
					>
						{index + 1}
					</Button>
				))}
		</Pagination>
	);
};

export default MatchHistoryPagination;
