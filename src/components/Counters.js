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
        //NOTE 1. clone array of existing counters (!!!clones by refference!!!)
        const counters = [...this.state.counters];

        //NOTE 2. First reference the right object refference
        // at the "counters" array index given by "counter")
        const index = counters.indexOf(counter);

        //NOTE 3. Reference the resulting "counter" inside the given index of "counters" array
        counters[index] = { ...counter };

        //Increment the value of counter by one
        counters[index].value++;

        // Update the State
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(
            (c) => (c.value = 0),
        );
        this.setState({
            value: 1,
        });
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
