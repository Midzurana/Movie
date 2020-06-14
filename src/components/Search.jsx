import React, { Component } from 'react'
import _ from 'lodash';

class Search extends Component {
    constructor () {
        super()

        this.state =  {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.search = _.debounce((lang, value, page) => {
            if (value.trim().length >= 2) {
                return this.props.getDataBySearch(lang, value)
            }
            this.props.fetchData(page, lang)
        }, 700);
    }

    handleChange(event) {
        const {mainState: { lang, page }} = this.props;
        const value = event.currentTarget.value;

        this.setState({
            value
        })

        this.search(lang, value, page)
    }

    render() {
        return (
            <div>
                <input 
                    type='text'
                    placeholder='Search'
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}


export default Search;

