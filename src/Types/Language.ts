interface Translation {
    title: string;
    username: string;
    password: string;
    login: string;
    forgotPassword: string;
    register: string;
    errorTitle: string;
    errorInvalidCredentials: string;
    errorTooManyRequests: string;
    errorUserDisabled: string;
    errorUserNotFound: string;
    errorWrongPassword: string;
    errorNetworkRequestFailed: string;
    loginSuccess: string;
    redirecting: string;
    rememberMe: string;
    forgotPasswordTitle: string;
    forgotPasswordDescription: string;
    loading: string;
    success: string;
    validation: string;
    notValid: string;
    empty: string;
    cannot: string;
    email: string;
    passwordNotValid: string;
    loginFailed: string;
    tryAgain: string;
    unexpectedError: string;
    signin: string;
    oops: string;
    errorContent: string;
    goBack: string;
    readMore: string;
    playNow: string;
    details: string;
}

export interface Language {
    languageCode: string;
    languageString: string;
    languageStringLocal: string;
    isRightToLeft: boolean;
    datetimeFormatLong: string;
    datetimeFormatShort: string;
    datetimeFormatTime: string;
    translation: Translation;
}

export type LanguageJSON = Language;
