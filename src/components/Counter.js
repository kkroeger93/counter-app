import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() =>
                        //NOTE pass whole counter instead of only the id, bacause this makes it easier to
                        //modify the state in the parent component.
                        this.props.onIncrement(this.props.counter)
                    }
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
        classes += this.props.counter === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
