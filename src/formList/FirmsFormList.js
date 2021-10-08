const FirmsFormListFunction = (formState) => {
    const FirmsFormList = [
        {
            title: 'Основная информация',
            row: [
                {
                    label: 'Название фирмы',
                    value: formState.organisation,
                    type: 'input',
                    typeFirmsInput: 'text',
                    must: true,
                    fetchLabel: 'organisation'
                },
                {
                    label: 'Телефон',
                    value: formState.phone,
                    type: 'number',
                    must: true,
                    fetchLabel: 'phone'
                },
            ]
        },
        {
            title: 'Тарифы:',
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
                    fetchLabel: 'description'
                },
            ]
        },
    ]
    return FirmsFormList
}

export default FirmsFormListFunction