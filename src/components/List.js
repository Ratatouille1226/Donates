import { Component } from '../core/Component';

export class List extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    this.$h2 = document.createElement('h2');
    this.$h2.textContent = 'Список донатов';
    this.$h2.className = 'donates-container__title';

    this.$divDonatesContainer = document.createElement('div');
    this.$divDonatesContainer.className = 'donates-container__donates';
    this.$listContainer = this.$divDonatesContainer;

    this.$rootElement.appendChild(this.$h2);
    this.$rootElement.appendChild(this.$divDonatesContainer);
  }

  addItem(item) {
    const itemValue = item.$rootElement;
    this.$listContainer.appendChild(itemValue);
  }
}