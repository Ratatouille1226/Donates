import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: '',
    }
    
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    this.$label = document.createElement('label');
    this.$label.className = 'donate-form__input-label';
    this.$label.textContent = 'Введите сумму в $';

    this.$input = document.createElement('input');
    this.$input.className = 'donate-form__donate-input';
    this.$input.name = 'amount';
    this.$input.type = 'number';
    this.$input.max = '100';
    this.$input.min = '1';
    this.$input.required = true;

    this.$button = document.createElement('button');
    this.$button.className = 'donate-form__submit-button';
    this.$button.textContent = 'Задонатить';
    this.$button.type = 'submit';
    this.$button.disabled = true;

    this.$label.appendChild(this.$input);
    this.$rootElement.appendChild(this.$label);
    this.$rootElement.appendChild(this.$button);

    this.$input.addEventListener('input', this.handleInput.bind(this))
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))
  }

  get isValid () {
    return this.state.amount > 0 && this.state.amount <=100 ? true : false;
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    this.isValid ? this.$button.disabled = false : this.$button.disabled = true;
  }

  handleSubmit(event) {
    event.preventDefault()
    if(this.isValid) {
      this.props.onSubmit(+this.state.amount);
      this.state.amount = '';
      this.$input.value = '';
    }
  }
}
