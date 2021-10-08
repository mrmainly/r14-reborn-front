const GuysFormListFunction = (formState, manState) => {
    const GuysFormList = [
        {
            title: 'Основная информация',
            row: [
                {
                    label: 'Ваше имя',
                    value: formState.name,
                    type: 'text',
                    must: true,
                    fetchLabel: 'name'
                },
                {
                    label: 'Возраст, лет',
                    value: formState.age,
                    type: 'number',
                    must: true,
                    fetchLabel: 'age'
                },
                {
                    label: 'Рост, см',
                    value: formState.height,
                    type: 'number',
                    must: true,
                    fetchLabel: 'height'
                },
                {
                    fetchLabel: 'hair_color',
                    type: 'select',
                    value: formState.hair_color,
                    label: 'Цвет волос',
                    must: true,
                    default: 'Другое',
                    selectArrey: [
                        {
                            optionText: 'Темные',
                            optionValue: 'Темные'
                        },
                        {
                            optionText: 'Другое',
                            optionValue: 'Другое'
                        },
                        {
                            optionText: 'Светлые',
                            optionValue: 'Светлые'
                        },
                    ]
                },
                {
                    fetchLabel: 'nationality',
                    type: 'select',
                    value: formState.nationality,
                    label: 'Нацианальность',
                    must: true,
                    default: 'Другая',
                    selectArrey: [
                        {
                            optionText: 'Саха',
                            optionValue: 'Саха'
                        },
                        {
                            optionText: 'Славянская',
                            optionValue: 'Славянская'
                        },
                        {
                            optionText: 'Кавказская',
                            optionValue: 'Кавказская'
                        },
                        {
                            optionText: 'Другая',
                            optionValue: 'Другая'
                        },
                    ]
                },
                {
                    fetchLabel: 'body_type',
                    type: 'select',
                    value: formState.body_type,
                    label: 'Телосложение',
                    default: 'Другое',
                    must: true,
                    selectArrey: [
                        {
                            optionText: 'Худощавое',
                            optionValue: 'Худощавое'
                        },
                        {
                            optionText: 'Другое',
                            optionValue: 'Другое'
                        },
                        {
                            optionText: 'Спортивное',
                            optionValue: 'Спортивное'
                        },
                        {
                            optionText: 'Полное',
                            optionValue: 'Полное'
                        },
                    ]
                },
                {
                    fetchLabel: 'orientation',
                    type: 'select',
                    value: formState.orientation,
                    label: 'Ориентация',
                    default: 'Гетеросексуальная',
                    must: true,
                    selectArrey: [
                        {
                            optionText: 'Гетеросексуальная',
                            optionValue: 'Гетеросексуальная'
                        },
                        {
                            optionText: 'Бисексуальная',
                            optionValue: 'Бисексуальная'
                        },
                        {
                            optionText: 'Гомосексуальная',
                            optionValue: 'Гомосексуальная'
                        },
                    ]
                },
                {
                    label: 'Вес, кг',
                    value: formState.weight,
                    type: 'number',
                    must: true,
                    fetchLabel: 'weight'
                },
                {
                    label: 'Длина члена, см',
                    value: manState.penis_length,
                    type: 'inputMan',
                    must: true,
                    fetchLabel: 'penis_length'
                },
            ]
        },
        {
            title: 'Контактная информация:',
            row: [
                {
                    label: 'Улица ',
                    value: formState.address,
                    type: 'text',
                    fetchLabel: 'address'
                },
                {
                    label: 'Телефон',
                    value: formState.phone,
                    type: 'text',
                    must: true,
                    fetchLabel: 'phone'
                },
            ]
        },
        {
            title: 'Мои тарифы:',
            row: [
                {
                    description: 'Если вы не оказываете услуги в апартаментах, то оставьте поля пустыми.',
                },
                {
                    label: 'Апартаменты: 1 час',
                    value: formState.apartment_per_hour,
                    type: 'number',
                    fetchLabel: 'apartment_per_hour',
                    secondType: 'currency'
                },
                {
                    label: 'Апартаменты: 2 часа',
                    value: formState.apartment_per_two_hours,
                    type: 'number',
                    fetchLabel: 'apartment_per_two_hours',
                    secondType: 'currency'
                },
                {
                    label: 'Апартаменты: ночь',
                    value: formState.apartment_per_night,
                    type: 'number',
                    fetchLabel: 'apartment_per_night',
                    secondType: 'currency'
                },
                {
                    description: 'Если вы не выезжаете к клиенту, то оставьте поля пустыми',
                },
                {
                    label: 'Выезд: 1 час',
                    value: formState.check_out_per_hour,
                    type: 'number',
                    fetchLabel: 'check_out_per_hour',
                    secondType: 'currency'
                },
                {
                    label: 'Выезд: 2 часа',
                    value: formState.check_out_per_two_hours,
                    type: 'number',
                    fetchLabel: 'check_out_per_two_hours',
                    secondType: 'currency'
                },
                {
                    label: 'Выезд: ночь',
                    value: formState.check_out_per_night,
                    type: 'number',
                    fetchLabel: 'check_out_per_night',
                    secondType: 'currency'
                },
                {
                    label: 'Выезжаем:',
                    type: 'checkBox',
                    list: [{ labelCheckBox: 'на квартиру', checked: formState.check_out_apartment, fetchLabel: 'check_out_apartment' },
                    { labelCheckBox: 'в гостиницу', checked: formState.check_out_hotel, fetchLabel: 'check_out_hotel' },
                    { labelCheckBox: 'в загородный дом', checked: formState.check_out_house, fetchLabel: 'check_out_house' },
                    { labelCheckBox: 'в офис', checked: formState.check_out_office, fetchLabel: 'check_out_office' },
                    { labelCheckBox: 'в сауну', checked: formState.check_out_sauna, fetchLabel: 'check_out_sauna' }]
                },
            ]
        },
        {
            title: 'Описание о себе и о своих услугах:',
            row: [
                {
                    description: '1. Поле "О себе" должно быть максимально подробным (не менее 200 символов). Подробное, интересное, смысловое описание значительно увеличивает эффективность вашей анкеты.',
                },
                {
                    description: '2. Запрещено в поле "О себе" указывать любые контактные данные: телефон, telegram, емайл и пр.!'
                },
                {
                    value: formState.description,
                    type: 'textArea',
                    fetchLabel: 'description',
                    must: true,
                },
            ]
        },
    ]
    return GuysFormList
}

export default GuysFormListFunction