import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.counter.value,
    };

    /*constructor() {
        super();
        // Method one, for making "this" accessible
        //this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    // Methode two, for making "this" accessible:
    // By chaninging the Class Methode into a arrow function method.
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={this.handleIncrement}
                    // NOTE Rules for "this":
                    // Inside "obj.method" this => refferce to => current object
                    // Inside a function() this => refferce to => window, gloabl object

                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() =>
                        this.props.onDelete(this.props.counter.id)
                    }
                    className="btn btn-danger btn-danger m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
