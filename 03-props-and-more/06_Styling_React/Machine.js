class Machine extends React.Component {
	render() {
		const { s1, s2, s3 } = this.props;
		const winner = s1 === s2 && s2 === s3;
// w react uzywamy camel caze czyli wlasnie fontSize a nie jak w css piszemy font-size 
		// to co ponizej zamiast definiowac jako colors mozemy napisac w <p> jak kilka linijek nizej
		const colors = { fontSize: '50px', backgroundColor: 'purple' }; 

		return (
			// Stylowanie w css piszemy w oddzielnym pliku. odwołujemy sie do nieg za pomoca className 
			// i podajemy nazwe, jak ponizej
			<div className="Machine">
				{/* Dwa sposoby dodawania style. Pierwszy za pomoca zmiennej colors 
				 (wtedy musimy sie do niej odwolac w <p style={colors}>) drugi ponizej */}
				{/* <p style={{ fontSize: '50px', backgroundColor: 'purple'}}> */}
				<p style={colors}>
					{s1} {s2} {s3}
				</p>
				{/* <p className={winner ? 'win' : 'lose'}> jezeli zmienna winner to true to wykonaj win, 
				jezeli false to wykonaj lose */}
				<p className={winner ? 'win' : 'lose'}>
					{winner ? 'Winner!' : 'Loser!'}</p>
			</div>
		);
	}
}
