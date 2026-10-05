export declare enum MaskType {
    EMAIL = "email",
    PHONE = "phone",
    CPF = "cpf",
    CEP = "cep",
    DATE = "date",
    MONETARY = "monetary"
}
export declare enum PhoneType {
    BR = "BR",
    International = "International"
}
export type PhoneTypeValue = `${PhoneType.BR}` | `${PhoneType.International}`;
export declare enum DateType {
    BR = "BR",
    US = "US"
}
export declare enum InputType {
    TEXT = "text",
    PASSWORD = "password",
    EMAIL = "email",
    NUMBER = "number",
    TEL = "tel",
    SEARCH = "search",
    DATE = "date",
    SELECT = "select"
}
export declare enum ForceBarLevel {
    DEFAULT = "default",
    WEAK = "weak",
    MEDIUM = "medium",
    STRONG = "strong"
}
