import styles from './Hamburger.scss';

export default class Hamburger {
    constructor() {
        this.list = [];
    }

    withList(list) {
        this.list = list;
        return this;
    }

    renderList() {
        return this.list.map((item, index) => {
            return `<a href="#" key=${index}><li>${item}</li></a>`;
        });
    }

    render() {
        return `
        <nav role="navigation">
            <div id=${styles.menuToggle}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            
            <ul id=${styles.menu}>
                ${this.renderList()}
            </ul>
            </div>
        </nav>
        `;
    }
}