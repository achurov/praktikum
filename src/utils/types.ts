export type Props = Record<string, any>;
export type ElementEvents = Record<string, EventListener>;

export type ValidateMassage = {
    result: boolean,
    message: string
}

export type ValidateResult = Array<ValidateMassage>

export type BodyRequest = Record<string, any>

export type Options = {
    method: string
    timeout?: number
    credentials?: boolean
    mode?: string
    headers?: Record<string, string>
    body?: BodyRequest
    query?: Record<string, any>
};
