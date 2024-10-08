import React, {Component} from 'react';


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
    }

    // Incorrect function
    changeName = () => {
        this.setState({name: 'Charlie'});

    }

    render() {
        return (
            <div className={styles.profile}>
                <h1>User</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change the Name</button>
            </div>
        );
    }
}

export default UserProfile