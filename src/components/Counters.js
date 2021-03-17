import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 4 },
            { id: 3, value: 3 },
            { id: 4, value: 2 },
        ],
    };

    handleIncrement = (counter) => {
        //clone array of existing counters (!!!clones by refference!!!)
        const counters = [...this.state.counters];
        //NOTE BIG NO-NO in React, never change the State directly, instead use setState Method!!
        counters[0].value++;
        console.log(this.state.counters[0]);
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(
            (c) => c.id !== counterId,
        );
        this.setState({ counters });
    };

    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm"
                >
                    Reset
                </button>
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
