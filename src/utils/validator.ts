import { ValidateMassage } from '../utils/types'
import { ValidateResult } from '../utils/types'

export default class Validator {

    static result: ValidateResult;

    public static validate(value: string | number, rules: string): ValidateResult {
        this.result = [];

        rules.split('|').forEach(rule => {
            rule = rule.toLocaleLowerCase();

            this.required(rule, value);
            this.email(rule, value as string);
            this.phone(rule, value as string);
            this.min(rule, value as string);

        });

        return this.result;
    }

    private static required(rule, value: string | number): void {
        if (rule !== 'required') return

        if (!value) {
            this.result.push({
                result: false,
                message: 'field is required'
            } as ValidateMassage);
        }
    }

    private static email(rule, value: string): void {
        if (rule !== 'email') return

        if (!value.match(/.+\@.+\..+/)) {
            this.result.push({
                result: false,
                message: 'is not email'
            } as ValidateMassage);
        }
    }

    private static phone(rule, value: string): void {
        if (rule !== 'phone') return

        if (!value.match(/^(?:\+7|8)?9(?:\d{9})$/)) {
            this.result.push({
                result: false,
                message: 'is not phone'
            } as ValidateMassage);
        }
    }

    private static min(rule: string, value: string): void {
        if (rule.slice(0, 3) !== 'min') return
        if (typeof value !== 'string') return

        const minCount = Number(rule.split(':')[1]);

        if (value.length < minCount) {
            this.result.push({
                result: false,
                message: `min length is ${minCount}`
            } as ValidateMassage);
        }
    }
}

