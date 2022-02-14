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
        <li id={el.id} onClick={props.showContent}>{el.name}</li>
    )
    return (
        <ul>{list}</ul>
    )
}


var list_contacts = [{ "id": 1, "name": 'email', "content": "ciaooo" }, { "id": 2, "name": 'telegram', "content": "aaaaaaaa" }]
var list_life = [{ "id": 1, "name": 'curriculum', "content": "contenuto del curriculum" }, { "id": 2, "name": 'projects', "content": "contentuo progetti" }]



class BoxList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.changeBox(e.target.id);
    }

    render() {
        return (
            <div>
                <TextBox text={this.props.text} />
                <List elements={this.props.list}
                    showContent={this.handleChange}
                />
            </div>
        )
    }
}



function Box(props) {
    return (
        <p>{list_life[props.category - 1].content}</p>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { isClicked: 1 };
    }

    handleClick(category) {
        this.setState({ isClicked: category });
    }

    render() {
        const isClicked = this.state.isClicked;

        return (
            <div>
                <TextBox text={data.presentation} />
                <BoxList text="contact me" list={list_contacts} />
                <BoxList text="Know about me" list={list_life} changeBox={this.handleClick} />
                <br />
                <Box category={isClicked} />
            </div>
        );
    }
}






export default App