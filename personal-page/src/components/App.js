import data from '../data/data.json'
import React from 'react'

function TextBox(props) {
    return (
        <p>
            {props.text}
        </p>
    )
}

function List(props) {
    const list = props.elements.map(el =>
        <li>{el}</li>
    )
    return (
        <ul>{list}</ul>
    )
}


var list_contacts = ['email', 'telegram', 'linkedin', 'github']
var list_life = ['curriculum', 'projects', 'passions']



class BoxList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.changeBox();
    }

    render() {
        return (
            <div>
                <TextBox text={this.props.text} />
                <List elements={this.props.list}
                    pressed={this.handleChange}
                />
            </div>
        )
    }
}

function Box() {
    return (
        <p>Info about what's clicked</p>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { isClicked: false };
    }

    handleClick() {
        this.setState({ isClicked: !this.state.isClicked });
    }

    render() {
        const isClicked = this.state.isClicked;

        return (
            <div>

                <TextBox text={data.presentation} />
                <BoxList text="contact me" list={list_contacts} />
                <BoxList text="Know about me" list={list_life} changeBox={this.handleClick} />
                <button onClick={this.handleClick}>Click</button>
                <br />
                {isClicked ? <Box /> : null}
            </div>
        );
    }
}






export default App