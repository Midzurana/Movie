import React, { Component } from 'react'
import Item from './Items'
import { Link } from 'react-router-dom'



class MainPage extends Component {

    componentDidMount = () => {
        const { lang, page } = this.props.mainState;
        this.props.fetchData(page, lang);
    }


    renderItems = () => {
        const { items } = this.props.mainState
        const mainContent = items.map(item => {
            return (
                <div className='movie'>
                    <Link to={`film/${item.id}`}>
                        <Item
                            key={item.id}
                            poster={item.poster_path}
                            title={item.title}
                            origin_country={item.origin_country}
                        />
                    </Link>
                </div>
            )
        })

        return mainContent;
    }

    renderPage = () => {
        const { items, isLoading, error } = this.props.mainState;

        if (isLoading) {
            return <div>Загрузка</div>
        }

        if (!isLoading && error) {
            return <div>Ошибка</div>
        }

        if (!items.length) {
            return <div>Извините, мы нечего не смогли найти</div>
        }

        return this.renderItems()
    }
    
    render() {
        return (
            <>
                {this.renderPage()}
            </>
        )
    }
}

export default MainPage

