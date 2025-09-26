import React, { useState } from "react";

export default function Player({
	initialName,
	symbol,
	isActivePlayer,
	onChangeName,
}) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing((editing) => !editing);
		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	};

	const handleChange = (event) => {
		setPlayerName(event.target.value);
	};

	return (
		<>
			<li className={isActivePlayer ? "active" : undefined}>
				<span className="player">
					{isEditing ? (
						<input
							id="playerName"
							name="playerName"
							type="text"
							required
							value={playerName}
							onChange={handleChange}
						></input>
					) : (
						<span className="player-name">{playerName}</span>
					)}

					<span className="player-symbol">{symbol}</span>
				</span>
				<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
			</li>
		</>
	);
}
