import styles from './Button.scss';


export default class Button {
    constructor() {
        this.color = 'primary';
        this.status = '';
    }

    withText(text) {
        this.text = text;
        return this;
    }

    withColor(color) {
        this.color = color;
        return this;
    }

    withStatus(status) {
        this.status = status;
        return this;
    }

    render() {
        debugger;
        return `
            <button class='${styles.btn} ${styles[this.color]}' ${this.status}>${this.text}</button>
        `;
    }
}