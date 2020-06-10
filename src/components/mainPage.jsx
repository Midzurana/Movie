import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Items'
import { Search } from './Search'
import { setLanguage, fetchData } from '../actions/PageActions'

export class MainPage extends Component {
    state = {
        page: 3
    }

    componentDidMount = () => {
        const { lang } = this.props.mainState;
        this.props.fetchData(this.state.page, lang);
    }


    renderItems = () => {
        const { items } = this.props.mainState
        const mainContent = items.map(item => {
            return (
                <Item
                    key={item.id}
                    poster={item.poster_path}
                    title={item.title}
                />
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
            <div>
                <Search />
                {this.renderPage()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mainState: state.main,
        settings: state.settings,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLanguageAction: lang => dispatch(setLanguage(lang)),
        fetchData: (page, lang) => dispatch(fetchData(page, lang))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)


// export class MainPage extends Component {
//     render() {
//             console.log(this.props)
//             const { name, settings, items, setLanguageAction } = this.props;
//         return (
//             <div>
//                 {name}, кажется, все не так плохо. 
//                 <Items items={items.items} />
//                 <Settings setLanguage={setLanguageAction} />
//             </div>
//         )
//     }
// }
