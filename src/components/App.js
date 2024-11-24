import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    this.$h1 = document.createElement('h1');
    this.$h1.className = 'total-amount';
    this.$h1.textContent = 'Итого: $';

    this.$spanH1 = document.createElement('span');
    this.$spanH1.textContent = `${this.state.total}`;

    this.$h1.appendChild(this.$spanH1);
    this.$rootElement.appendChild(this.$h1)
   
    const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
    this.$rootElement.appendChild(donateForm.$rootElement);
    this.donateList = new List();
    this.$rootElement.appendChild(this.donateList.$rootElement);

  }
  
  onItemCreate(amount) {
      const item = new ListItem({amount});
      this.state.donates.push(item);

      this.donateList.addItem(item);

      this.state.total += amount;
      this.$spanH1.textContent = `${this.state.total}`
  }

}
