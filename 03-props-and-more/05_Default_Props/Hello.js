class Hello extends React.Component {
    // jezeli chcemy uzupelnic brakujace pola w wywolanym Hello (plik index.js) to piszemy kod poniżej. Jezeli
    // zmienimy defaultProps na defaultprops to nie bedzie to dzialac. To jest stałe - nie mozna tego zmieniac.
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1
    }
    render() {
        let bangs = "!".repeat(this.props.bangs); 
        return (
        <div>
            <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
        </div>
        );
    }
}