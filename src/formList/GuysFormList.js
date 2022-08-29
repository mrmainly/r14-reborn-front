const GuysFormListFunction = (formState, manState) => {
    const GuysFormList = [
        {
            title: "Основная информация",
            row: [
                {
                    label: "Ваше имя",
                    type: "input",
                    must: true,
                    fetchLabel: "name",
                    typeInput: "input",
                },
                {
                    label: "Возраст, лет",
                    type: "input",
                    must: true,
                    fetchLabel: "age",
                    typeInput: "number",
                },
                {
                    label: "Рост, см",
                    type: "input",
                    must: true,
                    fetchLabel: "height",
                    typeInput: "number",
                },
                {
                    fetchLabel: "hair_color",
                    type: "select",
                    label: "Цвет волос",
                    must: true,
                    default: "Другое",
                    selectArrey: [
                        {
                            optionText: "Темный",
                            optionValue: "Темные",
                        },
                        {
                            optionText: "Светлый",
                            optionValue: "Светлые",
                        },
                        {
                            optionText: "Рыжий",
                            optionValue: "Рыжие",
                        },
                        {
                            optionText: "Другой",
                            optionValue: "Другое",
                        },
                    ],
                },
                {
                    fetchLabel: "nationality",
                    type: "select",
                    label: "Нацианальность",
                    must: true,
                    default: "Другое",
                    selectArrey: [
                        {
                            optionText: "Азиат",
                            optionValue: "Саха",
                        },
                        {
                            optionText: "Славянин",
                            optionValue: "Славянская",
                        },
                        {
                            optionText: "Митис",
                            optionValue: "Кавказская",
                        },
                        {
                            optionText: "Другое",
                            optionValue: "Другое",
                        },
                    ],
                },
                {
                    fetchLabel: "body_type",
                    type: "select",
                    label: "Телосложение",
                    default: "Другое",
                    must: true,
                    selectArrey: [
                        {
                            optionText: "Худощавое",
                            optionValue: "Худощавое",
                        },
                        {
                            optionText: "Спортивное",
                            optionValue: "Спортивное",
                        },
                        {
                            optionText: "Полное",
                            optionValue: "Полное",
                        },
                        {
                            optionText: "Другое",
                            optionValue: "Другое",
                        },
                    ],
                },
                {
                    fetchLabel: "orientation",
                    type: "select",
                    label: "Ориентация",
                    default: "Гетеросексуальная",
                    must: true,
                    selectArrey: [
                        {
                            optionText: "Гетеросексуальная",
                            optionValue: "Гетеросексуальная",
                        },
                        {
                            optionText: "Бисексуальная",
                            optionValue: "Бисексуальная",
                        },
                        {
                            optionText: "Гомосексуальная",
                            optionValue: "Гомосексуальная",
                        },
                    ],
                },
                {
                    label: "Вес, кг",
                    type: "input",
                    must: false,
                    fetchLabel: "weight",
                    typeInput: "number",
                },
                {
                    label: "Длина члена, см",
                    type: "input",
                    must: false,
                    fetchLabel: "penis_length",
                    typeInput: "number",
                },
            ],
        },
        {
            title: "Контактная информация:",
            row: [
                {
                    label: "Улица ",
                    type: "input",
                    fetchLabel: "address",
                },
                {
                    label: "Телефон",
                    type: "input",
                    must: true,
                    fetchLabel: "phone",
                },
            ],
        },
        {
            title: "Мои тарифы:",
            row: [
                {
                    description:
                        "Если вы не оказываете услуги в апартаментах, то оставьте поля пустыми.",
                },
                {
                    label: "Апартаменты: 1 час",
                    type: "input",
                    fetchLabel: "apartment_per_hour",
                    secondType: "currency",
                    typeInput: "number",
                },
                {
                    label: "Апартаменты: 2 часа",
                    type: "input",
                    fetchLabel: "apartment_per_two_hours",
                    secondType: "currency",
                    typeInput: "number",
                },
                {
                    label: "Апартаменты: ночь",
                    type: "input",
                    fetchLabel: "apartment_per_night",
                    secondType: "currency",
                    typeInput: "number",
                },
                {
                    description:
                        "Если вы не выезжаете к клиенту, то оставьте поля пустыми",
                },
                {
                    label: "Выезд: 1 час",
                    type: "input",
                    fetchLabel: "check_out_per_hour",
                    secondType: "currency",
                    typeInput: "number",
                },
                {
                    label: "Выезд: 2 часа",
                    type: "input",
                    fetchLabel: "check_out_per_two_hours",
                    secondType: "currency",
                    typeInput: "number",
                },
                {
                    label: "Выезд: ночь",
                    type: "input",
                    fetchLabel: "check_out_per_night",
                    secondType: "currency",
                    typeInput: "number",
                },
                {
                    label: "Выезжаем:",
                    type: "checkBox",
                    list: [
                        {
                            labelCheckBox: "на квартиру",
                            fetchLabel: "check_out_apartment",
                        },
                        {
                            labelCheckBox: "в гостиницу",
                            fetchLabel: "check_out_hotel",
                        },
                        {
                            labelCheckBox: "в загородный дом",
                            fetchLabel: "check_out_house",
                        },
                        {
                            labelCheckBox: "в офис",
                            fetchLabel: "check_out_office",
                        },
                        {
                            labelCheckBox: "в сауну",
                            fetchLabel: "check_out_sauna",
                        },
                    ],
                },
            ],
        },
        {
            title: "Описание о себе и о своих услугах:",
            row: [
                {
                    description:
                        '1. Поле "О себе" должно быть максимально подробным (не менее 200 символов). Подробное, интересное, смысловое описание значительно увеличивает эффективность вашей анкеты.',
                },
                {
                    description:
                        '2. Запрещено в поле "О себе" указывать любые контактные данные: телефон, telegram, емайл и пр.!',
                },
                {
                    type: "textArea",
                    fetchLabel: "description",
                    must: false,
                },
            ],
        },
    ];
    return GuysFormList;
};

export default GuysFormListFunction;
