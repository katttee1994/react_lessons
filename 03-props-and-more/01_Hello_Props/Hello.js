class Hello extends React.Component {
    render() {
        // repeat sluzy do powtorzen. w tym przypadku 4 razy zostanie powtorzony "!"
        let bangs = "!".repeat(this.props.bangs); 
    //    nie mozemy modyfikowac, ani dodawac nic do properties. Nie mozna tego bezposrednio zrobic. They are immutable
        return (
        <div>
            <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
            <img src={this.props.img} />
        </div>
        );
    }
}