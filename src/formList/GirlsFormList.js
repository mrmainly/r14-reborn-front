const GirlsFormListFunction = (formState, formStateGirl) => {
    const GirlsFormList = [
        {
            title: 'Основная информация',
            row: [
                {
                    label: 'Ваше имя',
                    value: formState.username,
                    type: 'input',
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
                    label: 'Вес, кг',
                    value: formState.weight,
                    type: 'number',
                    must: true,
                    fetchLabel: 'weight'
                },
                {
                    label: 'Грудь',
                    value: formStateGirl.breast_size,
                    type: 'inputGirl',
                    must: true,
                    fetchLabel: 'breast_size',
                    checkBoxType: 'notCheckbox',
                    manyType: 'notMoney',
                },
                {
                    label: 'Национальность',
                    value: formState.nationality,
                    type: 'select',
                    must: true,
                    fetchLabel: 'nationality',
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
                    label: 'Цвет волос',
                    value: formState.hair_color,
                    type: 'select',
                    must: true,
                    fetchLabel: 'hair_color',
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
                    label: 'Ориентация',
                    value: formState.orientation,
                    type: 'select',
                    must: true,
                    fetchLabel: 'orientation',
                    default: 'Гетеросексуальная',
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
                    label: 'Телосложение',
                    value: formState.body_type,
                    type: 'select',
                    must: true,
                    fetchLabel: 'body_type',
                    default: 'Другое',
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
            ]
        },
        {
            title: 'Контактная информация:',
            row: [
                {
                    label: 'Улица',
                    value: formState.address,
                    type: 'input',
                    fetchLabel: 'address'
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
            title: 'Дополнительная информация',
            row: [
                {
                    label: 'Ограничение по возрасту',
                    value: formState.age_limit,
                    type: 'select',
                    must: true,
                    fetchLabel: 'age_limit',
                    default: 'Все',
                    selectArrey: [
                        {
                            optionText: 'Старше 25 лет',
                            optionValue: 'от 25'
                        },
                        {
                            optionText: 'Старше 30 лет',
                            optionValue: 'от 30'
                        },
                        {
                            optionText: 'Старше 35 лет',
                            optionValue: 'от 35'
                        },
                        {
                            optionText: 'Все',
                            optionValue: 'Все'
                        },
                    ]
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
                    manyType: 'currency'
                },
                {
                    label: 'Апартаменты: 2 часа',
                    value: formState.apartment_per_two_hours,
                    type: 'number',
                    fetchLabel: 'apartment_per_two_hours',
                    manyType: 'currency'
                },
                {
                    label: 'Апартаменты: ночь',
                    value: formState.apartment_per_night,
                    type: 'number',
                    fetchLabel: 'apartment_per_night',
                    manyType: 'currency'
                },
                {
                    label: 'Эспресс программа',
                    value: formStateGirl.express,
                    type: 'inputGirl',
                    fetchLabel: 'express',
                    checkBoxType: 'notCheckbox',
                },
                {
                    description: 'Если у вас есть экспресс программа (30 минут), то выберите размер скидки, которая автоматически рассчитается от вашего часа в апартаментах.',
                },
                {
                    description: 'Если вы не выезжаете к клиенту, то оставьте поля пустыми',
                },
                {
                    label: 'Выезд: 1 час',
                    value: formState.check_out_per_hour,
                    type: 'number',
                    fetchLabel: 'check_out_per_hour',
                    manyType: 'currency'
                },
                {
                    label: 'Выезд: 2 часа',
                    value: formState.check_out_per_two_hours,
                    type: 'number',
                    fetchLabel: 'check_out_per_two_hours',
                    manyType: 'currency'
                },
                {
                    label: 'Выезд: ночь',
                    value: formState.check_out_per_night,
                    type: 'number',
                    fetchLabel: 'check_out_per_night',
                    manyType: 'currency'
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
        {
            title: 'Услуги:',
            row: [
                {
                    description: 'Если одна из услуг требует дополнительной оплаты, укажите ее в расположенном рядом поле.',
                },
            ]
        },
        {
            title: 'Основные',
            titleSurcharge: 'Доплата за основные услуги',
            row: [
                {
                    label: 'Секс классический',
                    value: formStateGirl.classic_sex,
                    type: 'inputGirl',
                    fetchLabel: 'classic_sex',
                },
                {
                    label: 'Минет в презервативе',
                    value: formStateGirl.blowjob_in_a_condom,
                    type: 'inputGirl',
                    fetchLabel: 'blowjob_in_a_condom',
                },

            ]
        },
        {
            title: 'Дополнительные',
            titleSurcharge: 'Доплата за дополнительный услуги',
            row: [
                {
                    label: 'Минет без резинки',
                    value: formStateGirl.blowjob_without_an_elastic_band,
                    type: 'inputGirl',
                    fetchLabel: 'blowjob_without_an_elastic_band',
                },
                {
                    label: 'Анал',
                    value: formStateGirl.anal_sex,
                    type: 'inputGirl',
                    fetchLabel: 'anal_sex',
                },
                {
                    label: 'Минет глубокий',
                    value: formStateGirl.deep_blowjob,
                    type: 'inputGirl',
                    fetchLabel: 'deep_blowjob',
                },
                {
                    label: 'Cекс в машине',
                    value: formStateGirl.sex_in_the_car,
                    type: 'inputGirl',
                    fetchLabel: 'sex_in_the_car',

                },
                {
                    label: 'Окончание на грудь',
                    value: formStateGirl.cum_on_the_chest,
                    type: 'inputGirl',
                    fetchLabel: 'cum_on_the_chest',

                },
                {
                    label: 'Окончание на лицо',
                    value: formStateGirl.cum_on_the_face,
                    type: 'inputGirl',
                    fetchLabel: 'cum_on_the_face',

                },
                {
                    label: 'Окончание в рот',
                    value: formStateGirl.cum_in_the_mouth,
                    type: 'inputGirl',
                    fetchLabel: 'cum_in_the_mouth',

                },
                {
                    label: 'Куннилингус',
                    value: formStateGirl.cunnilingus,
                    type: 'inputGirl',
                    fetchLabel: 'cunnilingus',

                },
                {
                    label: 'Поза 69',
                    value: formStateGirl.pose_69,
                    type: 'inputGirl',
                    fetchLabel: 'pose_69',

                },
                {
                    label: 'Игрушки',
                    value: formStateGirl.toys,
                    type: 'inputGirl',
                    fetchLabel: 'toys',

                },
                {
                    label: 'Ролевые игры',
                    value: formStateGirl.role_playing_games,
                    type: 'inputGirl',
                    fetchLabel: 'role_playing_games',

                },
                {
                    label: 'Услуги семейной паре',
                    value: formStateGirl.services_for_a_married_couple,
                    type: 'inputGirl',
                    fetchLabel: 'services_for_a_married_couple',
                },
                {
                    label: 'Фото и видео съемка',
                    value: formStateGirl.photo_and_video_shooting,
                    type: 'inputGirl',
                    fetchLabel: 'photo_and_video_shooting',

                },
                {
                    label: 'Эскорт',
                    value: formStateGirl.escort,
                    type: 'inputGirl',
                    fetchLabel: 'escort',
                },
                {
                    label: 'Стриптиз',
                    value: formStateGirl.striptease,
                    type: 'inputGirl',
                    fetchLabel: 'striptease',
                },
                {
                    label: 'Лесби-шоу легкое',
                    value: formStateGirl.lesbian_show_is_easy,
                    type: 'inputGirl',
                    fetchLabel: 'lesbian_show_is_easy',
                },
            ]
        },
        {
            title: 'Садо-мазо',
            titleSurcharge: 'Доплата за садо-мазо услуги',
            row: [
                {
                    label: 'Бандаж',
                    value: formStateGirl.bandage,
                    type: 'inputGirl',
                    fetchLabel: 'bandage',

                },
                {
                    label: 'Госпожа',
                    value: formStateGirl.madam,
                    type: 'inputGirl',
                    fetchLabel: 'madam',

                },
                {
                    label: 'Рабыня',
                    value: formStateGirl.slave_girl,
                    type: 'inputGirl',
                    fetchLabel: 'slave_girl',

                },
                {
                    label: 'Легкая доминация',
                    value: formStateGirl.easy_domination,
                    type: 'inputGirl',
                    fetchLabel: 'easy_domination',

                },
                {
                    label: 'Порка',
                    value: formStateGirl.spanking,
                    type: 'inputGirl',
                    fetchLabel: 'spanking',

                },
                {
                    label: 'Фетиш',
                    value: formStateGirl.fetish,
                    type: 'inputGirl',
                    fetchLabel: 'fetish',

                },
                {
                    label: 'Трамплинг',
                    value: formStateGirl.trampling,
                    type: 'inputGirl',
                    fetchLabel: 'trampling',

                },
            ]
        },
        {
            title: 'Массаж',
            titleSurcharge: 'Доплата за массаж услуги',
            row: [
                {
                    label: 'Эротический',
                    value: formStateGirl.erotic_massage,
                    type: 'inputGirl',
                    fetchLabel: 'erotic_massage',

                },
                {
                    label: 'Боди массаж',
                    value: formStateGirl.body_massage,
                    type: 'inputGirl',
                    fetchLabel: 'body_massage',

                },
                {
                    label: 'Лингама массаж',
                    value: formStateGirl.lingama_massage,
                    type: 'inputGirl',
                    fetchLabel: 'lingama_massage',

                },
                {
                    label: 'Расслабляющий',
                    value: formStateGirl.relaxing_massage,
                    type: 'inputGirl',
                    fetchLabel: 'relaxing_massage',

                },
                {
                    label: 'Классический',
                    value: formStateGirl.classic_massage,
                    type: 'inputGirl',
                    fetchLabel: 'classic_massage',

                },
                {
                    label: 'Профессиональный',
                    value: formStateGirl.professional_massage,
                    type: 'inputGirl',
                    fetchLabel: 'professional_massage',

                },
                {
                    label: 'Урологический',
                    value: formStateGirl.urological_massage,
                    type: 'inputGirl',
                    fetchLabel: 'urological_massage',

                },
                {
                    label: 'Точечный',
                    value: formStateGirl.acupressure_massage,
                    type: 'inputGirl',
                    fetchLabel: 'acupressure_massage',

                },
                {
                    label: 'Ветка сакуры',
                    value: formStateGirl.sakura_branch,
                    type: 'inputGirl',
                    fetchLabel: 'sakura_branch',

                },
            ]
        },
        {
            title: 'Экстрим',
            titleSurcharge: 'Доплата за экстрим услуги',
            row: [
                {
                    label: 'Страпон',
                    value: formStateGirl.strap_on,
                    type: 'inputGirl',
                    fetchLabel: 'strap_on',

                },
                {
                    label: 'Анилингус делаю',
                    value: formStateGirl.i_do_anilingus,
                    type: 'inputGirl',
                    fetchLabel: 'i_do_anilingus',

                },
                {
                    label: 'Золотой дождь выдача',
                    value: formStateGirl.golden_rain_issue,
                    type: 'inputGirl',
                    fetchLabel: 'golden_rain_issue',

                },
                {
                    label: 'Золотой дождь прием',
                    value: formStateGirl.golden_rain_reception,
                    type: 'inputGirl',
                    fetchLabel: 'golden_rain_reception',

                },
                {
                    label: 'Копрофагия выдача',
                    value: formStateGirl.coprophagia_issue,
                    type: 'inputGirl',
                    fetchLabel: 'coprophagia_issue',

                },
                {
                    label: 'Копрофагия прием',
                    value: formStateGirl.coprophagia_reception,
                    type: 'inputGirl',
                    fetchLabel: 'coprophagia_reception',

                },
                {
                    label: 'Фистинг анальный',
                    value: formStateGirl.anal_fisting,
                    type: 'inputGirl',
                    fetchLabel: 'anal_fisting',

                },
                {
                    label: 'Фистинг классический',
                    value: formStateGirl.classic_fisting,
                    type: 'inputGirl',
                    fetchLabel: 'classic_fisting',

                },
            ]
        },
        // {
        //     title: 'Индивидуальные услуги',
        //     titleSurcharge: 'Доплата за индивидуальные услуги',
        //     row: [
        //         {
        //             label: '1.',
        //             value: formState.age,
        //             type: 'individual',
        //             fetchLabel: 'age',

        //         },
        //         {
        //             label: '2.',
        //             value: formState.age,
        //             type: 'individual',
        //             fetchLabel: 'age',

        //         },
        //         {
        //             label: '3.',
        //             value: formState.age,
        //             type: 'individual',
        //             fetchLabel: 'checked',

        //         },
        //     ]
        // },
        // {
        //     title: 'Загрузка фотографии',
        //     row: [
        //         {
        //             description: '1. В анкете должно быть загружено минимум 3 фото в хорошем качестве!'
        //         },
        //         {
        //             description: ' 2. На фотографиях НЕ должно быть «печати»/логотипов других сайтов!'
        //         },
        //         {
        //             description: ' 3. На фотографиях НЕ должны быть указаны любые контактные данные!'
        //         },
        //         {
        //             description: ' 4. На фотографиях НЕ могут быть сцены с половым актом!'
        //         },
        //         {
        //             description: '5. Фотографии НЕ ДОЛЖНЫ быть «порнографией», максимум – легкая эротика. То есть фото строго БЕЗ гениталий!!!'
        //         },
        //         {
        //             description: '6. Запрещено использовать фото взятые с соц. сетей!'
        //         },
        //         {
        //             label: '3.',
        //             type: 'photo_verif',
        //             fileChooseText: 'Максимальный размер файла: 15 МБ. Разрешённые типы файлов: jpg jpeg. Images must be at least 450x550 pixels. Images larger than 1400x1400 pixels will be resized.'
        //         },
        //     ]
        // },
    ]
    return GirlsFormList
}

export default GirlsFormListFunction