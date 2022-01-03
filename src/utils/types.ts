export type Props = Record<string, any>;
export type ElementEvents = Record<string, EventListener>;

export type ValidateMassage = {
    result: boolean,
    message: string
}

export type ValidateResult = Array<ValidateMassage>
