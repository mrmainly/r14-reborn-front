const FirmsFormListFunction = () => {
    const FirmsFormList = [
        {
            title: 'Основная информация',
            row: [
                {
                    label: 'Название фирмы',
                    type: 'input',
                    typeFirmsInput: 'text',
                    must: true,
                    fetchLabel: 'organisation',
                    typeInput: 'input'
                },
                {
                    label: 'Телефон',
                    type: 'input',
                    must: true,
                    fetchLabel: 'phone',
                    typeInput: 'number'
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
                    type: 'input',
                    fetchLabel: 'apartment_per_hour',
                    secondType: 'currency',
                    typeInput: 'number'
                },
                {
                    label: 'Апартаменты: 2 часа',
                    type: 'input',
                    fetchLabel: 'apartment_per_two_hours',
                    secondType: 'currency',
                    typeInput: 'number'
                },
                {
                    label: 'Апартаменты: ночь',
                    type: 'input',
                    fetchLabel: 'apartment_per_night',
                    secondType: 'currency',
                    typeInput: 'number'
                },
                {
                    description: 'Если вы не выезжаете к клиенту, то оставьте поля пустыми',
                },
                {
                    label: 'Выезд: 1 час',
                    type: 'input',
                    fetchLabel: 'check_out_per_hour',
                    secondType: 'currency',
                    typeInput: 'number'
                },
                {
                    label: 'Выезд: 2 часа',
                    type: 'input',
                    fetchLabel: 'check_out_per_two_hours',
                    secondType: 'currency',
                    typeInput: 'number'
                },
                {
                    label: 'Выезд: ночь',
                    type: 'input',
                    fetchLabel: 'check_out_per_night',
                    secondType: 'currency',
                    typeInput: 'number'
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
                    type: 'textArea',
                    fetchLabel: 'description',
                    must: true
                },
            ]
        },
    ]
    return FirmsFormList
}

export default FirmsFormListFunction