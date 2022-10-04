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
					className={location.pathname === "/stats" ? "active" : undefined}
					to="/stats"
				>
					Statistics
				</Link>
			</Menu.Item>
		</Menu>
	);
};

export default AppMenu;
