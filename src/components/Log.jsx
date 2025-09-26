const Log = ({ turns }) => {
	return (
		<>
			{turns.length > 0 && (
				<ol id="log">
					{turns.map((turn) => (
						<li key={`${turn.square.row}${turn.square.col}`}>
							Player {turn.player} selected column {turn.square.col}, row
							{turn.square.row}
						</li>
					))}
				</ol>
			)}
		</>
	);
};

export default Log;
