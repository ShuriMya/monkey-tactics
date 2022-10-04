import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Leaderboard from "./pages/Leaderboard";
import ChampionsStats from "./pages/Stats/Champions";
import AugmentsStats from "./pages/Stats/Augments";
import PlayerProfile from "./pages/PlayerProfile";
import "./App.css";
import AppMenu from "./AppMenu";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AppMenu />
				<Routes>
					<Route path="/" element={<Navigate to="/players" />} />
					<Route path="players" element={<Leaderboard />} />
					<Route path="players/:playerName" element={<PlayerProfile />} />

					<Route path="stats/champions" element={<ChampionsStats />} />
					<Route path="stats/augments" element={<AugmentsStats />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
