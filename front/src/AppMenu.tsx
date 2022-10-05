import { Menu } from "react-daisyui";
import { Link, useLocation } from "react-router-dom";

const AppMenu = () => {
	let location = useLocation();

	return (
		<Menu className={`mb-20 menu-horizontal w-full flex bg-base-300`}>
			<Menu.Item>
				<Link
					className={location.pathname === "/players" ? "active" : undefined}
					to="/players"
				>
					Leaderboard
				</Link>
			</Menu.Item>
			<Menu.Item>
				<Link
					className={
						location.pathname === "/stats/champions" ? "active" : undefined
					}
					to="/stats/champions"
				>
					Champions
				</Link>
			</Menu.Item>
			<Menu.Item>
				<Link
					className={
						location.pathname === "/stats/augments" ? "active" : undefined
					}
					to="/stats/augments"
				>
					Augments
				</Link>
			</Menu.Item>
			<Menu.Item>
				<Link
					className={
						location.pathname === "/stats/traits" ? "active" : undefined
					}
					to="/stats/traits"
				>
					Traits
				</Link>
			</Menu.Item>
			<Menu.Item>
				<Link
					className={
						location.pathname === "/stats/items" ? "active" : undefined
					}
					to="/stats/items"
				>
					Items
				</Link>
			</Menu.Item>
		</Menu>
	);
};

export default AppMenu;
