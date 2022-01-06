import Validator from '../../utils/validator'
import { ValidateResult } from '../../utils/types'
import { ValidateMassage } from '../../utils/types'
import Input from '../../modules/form/components/input';
import AuthController from '../../controllers/auth-controller'

export default {
    inputFocus: function (event: Event): void {
        const element = event.target as HTMLInputElement;
        removeError.call(this, element);
    },

    inputBlur: function (event: Event): void {
        const element = event.target as HTMLInputElement;
        validateElement.call(this, element);
    },

    submit: function (event: Event): void {
        event.preventDefault();

        let error = false;

        this.children.elements.forEach(child => {
            if (child instanceof Input) {
                const element = child.getElement() as HTMLInputElement;
                const validateResult = validateElement.call(child, element);
                error = validateResult.length || error;
            }
        });

        const formData = {};
        (this.getElement() as HTMLFormElement).querySelectorAll('.form__input').forEach((element: HTMLInputElement) => {
            formData[element.name] = element.value;
        })

        if (error) {
            console.log('submit not OK');
        }
        else {
            console.log('submit OK');
            AuthController.signin({
                'login': formData.login,
                'password': formData.password
            });
        }

        // console.log(formData);
    }

}

const rules = {
    'login': 'required',
    'password': 'min:3'
}

function validateElement(element: HTMLInputElement): ValidateResult {
    removeError.call(this, element);

    let rule = rules[element.name];
    if (!rule) {
        return [] as ValidateResult;
    }

    const validateResult = Validator.validate(element.value, rule);

    const messages = [];
    validateResult.forEach(validateMassage => {
        if (!validateMassage.result) {
            element.classList.add('error');
            messages.push(validateMassage.message);
        }
    })

    if (messages) {
        const messagesElement = document.createElement('div');
        messagesElement.classList.add('error-massege');
        messagesElement.setAttribute('data-input-id', this.id);
        messagesElement.textContent = messages.join(', ');

        element.after(messagesElement);
    }

    return validateResult;
}

function removeError(element: HTMLInputElement): void {
    element.classList.remove('error');

    if (this.id) {
        document.querySelectorAll(`[data-input-id="${this.id}"]`).forEach(errorElement => {
            errorElement.remove();
        })
    }
}