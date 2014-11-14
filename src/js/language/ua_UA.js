(function($) {
    /**
     * Ukrainian language package
     * Translated by @oleg-voloshyn
     */
    $.fn.bootstrapValidator.i18n = $.extend(true, $.fn.bootstrapValidator.i18n, {
        'ua_UA': {
            base64: {
                'default': 'Будь ласка, введіть коректний рядок base64'
            },
            between: {
                'default': 'Будь ласка, введіть значення від %s до %s',
                notInclusive: 'Будь ласка, введіть значення між %s і %s'
            },
            callback: {
                'default': 'Будь ласка, введіть коректне значення'
            },
            choice: {
                'default': 'Будь ласка, введіть коректне значення',
                less: 'Будь ласка, виберіть хоча б %s опцій',
                more: 'Будь ласка, виберіть не більше %s опцій',
                between: 'Будь ласка, виберіть %s - %s опцій'
            },
            color: {
                'default': 'Будь ласка, введіть правильний номер кольору'
            },
            creditCard: {
                'default': 'Будь ласка, введіть правильний номер кредитної картки'
            },
            cusip: {
                'default': 'Будь ласка, введіть правильний номер CUSIP'
            },
            cvv: {
                'default': 'Будь ласка, введіть правильний номер CVV'
            },
            date: {
                'default': 'Будь ласка, введіть правильну дату',
                min: 'Будь ласка, введіть дату після %s',
                max: 'Будь ласка, введіть дату перед %s',
                range: 'Будь ласка, введіть дату у діапазоні %s - %s'
            },
            different: {
                'default': 'Будь ласка, введіть інше значення'
            },
            digits: {
                'default': 'Будь ласка, введіть тільки цифри'
            },
            ean: {
                'default': 'Будь ласка, введіть правильний номер EAN'
            },
            emailAddress: {
                'default': 'Будь ласка, введіть правильну адресу e-mail'
            },
            file: {
                'default': 'Будь ласка, виберіть файл'
            },
            greaterThan: {
                'default': 'Будь ласка, введіть значення більше або рівне %s',
                notInclusive: 'Будь ласка, введіть значення більше %s'
            },
            grid: {
                'default': 'Будь ласка, введіть правильний номер GRId'
            },
            hex: {
                'default': 'Будь ласка, введіть правильний шістнадцятковий(16) номер'
            },
            hexColor: {
                'default': 'Будь ласка, введіть правильний шістнадцятковий(16) номер кольору'
            },
            iban: {
                'default': 'Будь ласка, введіть правильний номер IBAN',
                countryNotSupported: 'Код країни %s не підтримується',
                country: 'Будь ласка, введіть правильний номер IBAN в %s',
                countries: {
                    AD: 'Андоррі',
                    AE: 'Об\'єднаних Арабських Еміратах',
                    AL: 'Албанії',
                    AO: 'Анголі',
                    AT: 'Австрії',
                    AZ: 'Азербайджані',
                    BA: 'Боснії і Герцеговині',
                    BE: 'Бельгії',
                    BF: 'Буркіна-Фасо',
                    BG: 'Болгарії',
                    BH: 'Бахрейні',
                    BI: 'Бурунді',
                    BJ: 'Беніні',
                    BR: 'Бразилії',
                    CH: 'Швейцарії',
                    CI: 'Кот-д\'Івуарі',
                    CM: 'Камеруні',
                    CR: 'Коста-Ріці',
                    CV: 'Кабо-Верде',
                    CY: 'Кіпрі',
                    CZ: 'Чехії',
                    DE: 'Германії',
                    DK: 'Данії',
                    DO: 'Домінікані',
                    DZ: 'Алжирі',
                    EE: 'Естонії',
                    ES: 'Іспанії',
                    FI: 'Фінляндії',
                    FO: 'Фарерських островах',
                    FR: 'Франції',
                    GB: 'Великобританії',
                    GE: 'Грузії',
                    GI: 'Гібралтарі',
                    GL: 'Гренландії',
                    GR: 'Греції',
                    GT: 'Гватемалі',
                    HR: 'Хорватії',
                    HU: 'Венгрії',
                    IE: 'Ірландії',
                    IL: 'Ізраїлі',
                    IR: 'Ірані',
                    IS: 'Ісландії',
                    IT: 'Італії',
                    JO: 'Йорданії',
                    KW: 'Кувейті',
                    KZ: 'Казахстані',
                    LB: 'Лівані',
                    LI: 'Ліхтенштейні',
                    LT: 'Литві',
                    LU: 'Люксембурзі',
                    LV: 'Латвії',
                    MC: 'Монако',
                    MD: 'Молдові',
                    ME: 'Чорногорії',
                    MG: 'Мадагаскарі',
                    MK: 'Македонії',
                    ML: 'Малі',
                    MR: 'Мавританії',
                    MT: 'Мальті',
                    MU: 'Маврикії',
                    MZ: 'Мозамбіку',
                    NL: 'Нідерландах',
                    NO: 'Норвегії',
                    PK: 'Пакистані',
                    PL: 'Польщі',
                    PS: 'Палестині',
                    PT: 'Португалії',
                    QA: 'Катарі',
                    RO: 'Румунії',
                    RS: 'Сербії',
                    SA: 'Саудівської Аравії',
                    SE: 'Швеції',
                    SI: 'Словенії',
                    SK: 'Словаччині',
                    SM: 'Сан-Марино',
                    SN: 'Сенегалі',
                    TN: 'Тунісі',
                    TR: 'Туреччині',
                    VG: 'Британських Віргінських островах'
                }
            },
            id: {
                'default': 'Будь ласка, введіть правильний ідентифікаційний номер',
                countryNotSupported: 'Код країни %s не підтримується',
                country: 'Будь ласка, введіть правильний ідентифікаційний номер в %s',
                countries: {
                    BA: 'Боснії і Герцеговині',
                    BG: 'Болгарії',
                    BR: 'Бразилії',
                    CH: 'Швейцарії',
                    CL: 'Чилі',
                    CN: 'Китаї',
                    CZ: 'Чехії',
                    DK: 'Данії',
                    EE: 'Естонії',
                    ES: 'Іспанії',
                    FI: 'Фінляндії',
                    HR: 'Хорватії',
                    IE: 'Ірландії',
                    IS: 'Ісландії',
                    LT: 'Литві',
                    LV: 'Латвії',
                    ME: 'Чорногорії',
                    MK: 'Македонії',
                    NL: 'Нідерландах',
                    RO: 'Румунії',
                    RS: 'Сербії',
                    SE: 'Швеції',
                    SI: 'Словенії',
                    SK: 'Словаччині',
                    SM: 'Сан-Марино',
                    TH: 'Таїланді',
                    ZA: 'ПАР'
                }
            },
            identical: {
                'default': 'Будь ласка, введіть таке ж значення'
            },
            imei: {
                'default': 'Будь ласка, введіть правильний номер IMEI'
            },
            imo: {
                'default': 'Будь ласка, введіть правильний номер IMO'
            },
            integer: {
                'default': 'Будь ласка, введіть правильне ціле значення'
            },
            ip: {
                'default': 'Будь ласка, введіть правильну IP-адресу',
                ipv4: 'Будь ласка введіть правильну IPv4-адресу',
                ipv6: 'Будь ласка введіть правильну IPv6-адресу'
            },
            isbn: {
                'default': 'Будь ласка, введіть правильний номер ISBN'
            },
            isin: {
                'default': 'Будь ласка, введіть правильний номер ISIN'
            },
            ismn: {
                'default': 'Будь ласка, введіть правильний номер ISMN'
            },
            issn: {
                'default': 'Будь ласка, введіть правильний номер ISSN'
            },
            lessThan: {
                'default': 'Будь ласка, введіть значення менше або рівне %s',
                notInclusive: 'Будь ласка, введіть значення менше ніж %s'
            },
            mac: {
                'default': 'Будь ласка, введіть правильну MAC-адресу'
            },
            meid: {
                'default': 'Будь ласка, введіть правильний номер MEID'
            },
            notEmpty: {
                'default': 'Будь ласка, введіть значення'
            },
            numeric: {
                'default': 'Будь ласка, введіть коректне дійсне число'
            },
            phone: {
                'default': 'Будь ласка, введіть правильний номер телефону',
                countryNotSupported: 'Код країни %s не підтримується',
                country: 'Будь ласка, введіть правильний номер телефону в %s',
                countries: {
                    AE: 'Об\'єднаних Арабських Еміратах',
                    BR: 'Бразилії',
                    CN: 'Китаї',
                    CZ: 'Чехії',
                    DE: 'Германії',
                    DK: 'Данії',
                    ES: 'Іспанії',
                    FR: 'Франції',
                    GB: 'Великобританії',
                    MA: 'Марокко',
                    PK: 'Пакистані',
                    RO: 'Румунії',
                    RU: 'Росії',
                    SK: 'Словаччині',
                    TH: 'Таїланді',
                    US: 'США',
                    VE: 'Венесуелі'
                }
            },
            regexp: {
                'default': 'Будь ласка, введіть значення відповідне до шаблону'
            },
            remote: {
                'default': 'Будь ласка, введіть правильне значення'
            },
            rtn: {
                'default': 'Будь ласка, введіть правильний номер RTN'
            },
            sedol: {
                'default': 'Будь ласка, введіть правильний номер SEDOL'
            },
            siren: {
                'default': 'Будь ласка, введіть правильний номер SIREN'
            },
            siret: {
                'default': 'Будь ласка, введіть правильний номер SIRET'
            },
            step: {
                'default': 'Будь ласка, введіть правильний крок %s'
            },
            stringCase: {
                'default': 'Будь ласка, вводите тільки малі літери',
                upper: 'Будь ласка, вводите тільки заголовні букви'
            },
            stringLength: {
                'default': 'Будь ласка, введіть значення коректної довжини',
                less: 'Будь ласка, введіть не більше %s символів',
                more: 'Будь ласка, введіть, не менше %s символів',
                between: 'Будь ласка, введіть рядок довжиною від %s до %s символів'
            },
            uri: {
                'default': 'Будь ласка, введіть правильний URI'
            },
            uuid: {
                'default': 'Будь ласка, введіть правильний номер UUID',
                version: 'Будь ласка, введіть правильний номер UUID версії %s'
            },
            vat: {
                'default': 'Будь ласка, введіть правильний номер VAT',
                countryNotSupported: 'Код країни %s не підтримується',
                country: 'Будь ласка, введіть правильний номер VAT в %s',
                countries: {
                    AT: 'Австрії',
                    BE: 'Бельгії',
                    BG: 'Болгарії',
                    BR: 'Бразилії',
                    CH: 'Швейцарії',
                    CY: 'Кіпрі',
                    CZ: 'Чехії',
                    DE: 'Германії',
                    DK: 'Данії',
                    EE: 'Естонії',
                    ES: 'Іспанії',
                    FI: 'Фінляндії',
                    FR: 'Франції',
                    GB: 'Великобританії',
                    GR: 'Греції',
                    EL: 'Греції',
                    HU: 'Венгрії',
                    HR: 'Хорватії',
                    IE: 'Ірландії',
                    IS: 'Ісландії',
                    IT: 'Італії',
                    LT: 'Литві',
                    LU: 'Люксембургі',
                    LV: 'Латвії',
                    MT: 'Мальті',
                    NL: 'Нідерландах',
                    NO: 'Норвегії',
                    PL: 'Польщі',
                    PT: 'Португалії',
                    RO: 'Румунії',
                    RU: 'Росії',
                    RS: 'Сербії',
                    SE: 'Швеції',
                    SI: 'Словенії',
                    SK: 'Словаччині',
                    VE: 'Венесуелі',
                    ZA: 'ПАР'
                }
            },
            vin: {
                'default': 'Будь ласка, введіть правильний номер VIN'
            },
            zipCode: {
                'default': 'Будь ласка, введіть правильний поштовий індекс',
                countryNotSupported: 'Код країни %s не підтримується',
                country: 'Будь ласка, введіть правильний поштовий індекс в %s',
                countries: {
                    AT: 'Австрії',
                    BR: 'Бразилії',
                    CA: 'Канаді',
                    CH: 'Швейцарії',
                    CZ: 'Чехії',
                    DE: 'Германії',
                    DK: 'Данії',
                    FR: 'Франції',
                    GB: 'Великобританії',
                    IE: 'Ірландії',
                    IT: 'Італії',
                    MA: 'Марокко',
                    NL: 'Нідерландах',
                    PT: 'Португалії',
                    RO: 'Румунії',
                    RU: 'Росії',
                    SE: 'Швеції',
                    SG: 'Сингапурі',
                    SK: 'Словаччині',
                    US: 'США'
                }
            }
        }
    });
}(jQuery));
