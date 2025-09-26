export default function Log({ turns }) {
	return (
		<ol id="log">
			{turns.map((turn) => {
				<li
					key={`${turn?.square?.row}${turn?.square?.col}`}
				>{`Player ${turn?.player} selected column ${turn?.square?.col}, row ${turn?.squre?.row}`}</li>;
			})}
		</ol>
	);
}
