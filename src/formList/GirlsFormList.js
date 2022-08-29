const GirlsFormListFunction = (formState, formStateGirl) => {
    const GirlsFormList = [
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
                    label: "Вес, кг",
                    type: "input",
                    must: true,
                    fetchLabel: "weight",
                    typeInput: "number",
                },
                {
                    label: "Грудь",
                    type: "input",
                    must: true,
                    fetchLabel: "breast_size",
                    typeInput: "number",
                },
                {
                    label: "Национальность",
                    type: "select",
                    must: true,
                    fetchLabel: "nationality",
                    default: "Другая",
                    selectArrey: [
                        {
                            optionText: "Азиатка",
                            optionValue: "Саха",
                        },
                        {
                            optionText: "Славянка",
                            optionValue: "Славянская",
                        },
                        {
                            optionText: "Митиска",
                            optionValue: "Кавказская",
                        },
                        {
                            optionText: "Другая",
                            optionValue: "Другое",
                        },
                    ],
                },
                {
                    label: "Цвет волос",
                    type: "select",
                    must: true,
                    fetchLabel: "hair_color",
                    default: "Другое",
                    selectArrey: [
                        {
                            optionText: "Темные",
                            optionValue: "Темные",
                        },
                        {
                            optionText: "Рыжие",
                            optionValue: "Рыжие",
                        },
                        {
                            optionText: "Светлые",
                            optionValue: "Светлые",
                        },
                        {
                            optionText: "Другие",
                            optionValue: "Другое",
                        },
                    ],
                },
                {
                    label: "Ориентация",
                    // value: formState.orientation,
                    type: "select",
                    must: true,
                    fetchLabel: "orientation",
                    default: "Гетеросексуальная",
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
                    label: "Телосложение",

                    type: "select",
                    must: true,
                    fetchLabel: "body_type",
                    default: "Другое",
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
            ],
        },
        {
            title: "Контактная информация:",
            row: [
                {
                    label: "Улица",
                    typeInput: "input",
                    type: "input",
                    fetchLabel: "address",
                },
                {
                    label: "Телефон",
                    typeInput: "number",
                    type: "input",
                    must: true,
                    fetchLabel: "phone",
                },
            ],
        },
        {
            title: "Дополнительная информация",
            row: [
                {
                    label: "Ограничение по возрасту",

                    type: "select",
                    must: false,
                    fetchLabel: "age_limit",
                    default: "Все",
                    selectArrey: [
                        {
                            optionText: "Старше 25 лет",
                            optionValue: "от 25",
                        },
                        {
                            optionText: "Старше 30 лет",
                            optionValue: "от 30",
                        },
                        {
                            optionText: "Старше 35 лет",
                            optionValue: "от 35",
                        },
                        {
                            optionText: "Все",
                            optionValue: "Все",
                        },
                    ],
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
                    typeInput: "number",
                    type: "input",
                    fetchLabel: "apartment_per_hour",
                    manyType: "currency",
                },
                {
                    label: "Апартаменты: 2 часа",
                    typeInput: "number",
                    type: "input",
                    fetchLabel: "apartment_per_two_hours",
                    manyType: "currency",
                },
                {
                    label: "Апартаменты: ночь",
                    typeInput: "number",
                    type: "input",
                    fetchLabel: "apartment_per_night",
                    manyType: "currency",
                },
                {
                    label: "Эспресс программа",
                    typeInput: "number",
                    type: "input",
                    fetchLabel: "express",
                    checkBoxType: "notCheckbox",
                },
                {
                    description:
                        "Если у вас есть экспресс программа (30 минут), то выберите размер скидки, которая автоматически рассчитается от вашего часа в апартаментах.",
                },
                {
                    description:
                        "Если вы не выезжаете к клиенту, то оставьте поля пустыми",
                },
                {
                    label: "Выезд: 1 час",
                    typeInput: "number",
                    type: "input",
                    fetchLabel: "check_out_per_hour",
                    manyType: "currency",
                },
                {
                    label: "Выезд: 2 часа",
                    typeInput: "number",
                    type: "input",
                    fetchLabel: "check_out_per_two_hours",
                    manyType: "currency",
                },
                {
                    label: "Выезд: ночь",
                    typeInput: "number",
                    type: "input",
                    fetchLabel: "check_out_per_night",
                    manyType: "currency",
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
                    must: true,
                },
            ],
        },
        {
            title: "Услуги:",
            row: [
                {
                    description:
                        "Если одна из услуг требует дополнительной оплаты, укажите ее в расположенном рядом поле.",
                },
            ],
        },
        {
            title: "Основные",
            titleSurcharge: "Доплата за основные услуги",
            row: [
                {
                    label: "Секс классический",
                    type: "inputGirl",
                    fetchLabel: "classic_sex",
                },
                {
                    label: "Минет в презервативе",
                    type: "inputGirl",
                    fetchLabel: "blowjob_in_a_condom",
                },
            ],
        },
        {
            title: "Дополнительные",
            titleSurcharge: "Доплата за дополнительный услуги",
            row: [
                {
                    label: "Минет без резинки",
                    type: "inputGirl",
                    fetchLabel: "blowjob_without_an_elastic_band",
                },
                {
                    label: "Анал",
                    type: "inputGirl",
                    fetchLabel: "anal_sex",
                },
                {
                    label: "Минет глубокий",
                    type: "inputGirl",
                    fetchLabel: "deep_blowjob",
                },
                {
                    label: "Cекс в машине",
                    type: "inputGirl",
                    fetchLabel: "sex_in_the_car",
                },
                {
                    label: "Окончание на грудь",
                    type: "inputGirl",
                    fetchLabel: "cum_on_the_chest",
                },
                {
                    label: "Окончание на лицо",
                    type: "inputGirl",
                    fetchLabel: "cum_on_the_face",
                },
                {
                    label: "Окончание в рот",
                    type: "inputGirl",
                    fetchLabel: "cum_in_the_mouth",
                },
                {
                    label: "Куннилингус",
                    type: "inputGirl",
                    fetchLabel: "cunnilingus",
                },
                {
                    label: "Поза 69",
                    type: "inputGirl",
                    fetchLabel: "pose_69",
                },
                {
                    label: "Игрушки",
                    type: "inputGirl",
                    fetchLabel: "toys",
                },
                {
                    label: "Ролевые игры",
                    type: "inputGirl",
                    fetchLabel: "role_playing_games",
                },
                {
                    label: "Услуги семейной паре",
                    type: "inputGirl",
                    fetchLabel: "services_for_a_married_couple",
                },
                {
                    label: "Фото и видео съемка",
                    type: "inputGirl",
                    fetchLabel: "photo_and_video_shooting",
                },
                {
                    label: "Эскорт",
                    type: "inputGirl",
                    fetchLabel: "escort",
                },
                {
                    label: "Стриптиз",
                    type: "inputGirl",
                    fetchLabel: "striptease",
                },
                {
                    label: "Лесби-шоу легкое",
                    type: "inputGirl",
                    fetchLabel: "lesbian_show_is_easy",
                },
            ],
        },
        {
            title: "Садо-мазо",
            titleSurcharge: "Доплата за садо-мазо услуги",
            row: [
                {
                    label: "Бандаж",
                    type: "inputGirl",
                    fetchLabel: "bandage",
                },
                {
                    label: "Госпожа",
                    type: "inputGirl",
                    fetchLabel: "madam",
                },
                {
                    label: "Рабыня",
                    type: "inputGirl",
                    fetchLabel: "slave_girl",
                },
                {
                    label: "Легкая доминация",
                    type: "inputGirl",
                    fetchLabel: "easy_domination",
                },
                {
                    label: "Порка",
                    type: "inputGirl",
                    fetchLabel: "spanking",
                },
                {
                    label: "Фетиш",
                    type: "inputGirl",
                    fetchLabel: "fetish",
                },
                {
                    label: "Трамплинг",
                    type: "inputGirl",
                    fetchLabel: "trampling",
                },
            ],
        },
        {
            title: "Массаж",
            titleSurcharge: "Доплата за массаж услуги",
            row: [
                {
                    label: "Эротический",
                    type: "inputGirl",
                    fetchLabel: "erotic_massage",
                },
                {
                    label: "Боди массаж",
                    type: "inputGirl",
                    fetchLabel: "body_massage",
                },
                {
                    label: "Лингама массаж",
                    type: "inputGirl",
                    fetchLabel: "lingama_massage",
                },
                {
                    label: "Расслабляющий",
                    type: "inputGirl",
                    fetchLabel: "relaxing_massage",
                },
                {
                    label: "Классический",
                    type: "inputGirl",
                    fetchLabel: "classic_massage",
                },
                {
                    label: "Профессиональный",
                    type: "inputGirl",
                    fetchLabel: "professional_massage",
                },
                {
                    label: "Урологический",
                    type: "inputGirl",
                    fetchLabel: "urological_massage",
                },
                {
                    label: "Точечный",
                    type: "inputGirl",
                    fetchLabel: "acupressure_massage",
                },
                {
                    label: "Ветка сакуры",
                    type: "inputGirl",
                    fetchLabel: "sakura_branch",
                },
            ],
        },
        {
            title: "Экстрим",
            titleSurcharge: "Доплата за экстрим услуги",
            row: [
                {
                    label: "Страпон",
                    type: "inputGirl",
                    fetchLabel: "strap_on",
                },
                {
                    label: "Анилингус делаю",
                    type: "inputGirlGirls",
                    fetchLabel: "i_do_anilingus",
                },
                {
                    label: "Золотой дождь выдача",
                    type: "inputGirl",
                    fetchLabel: "golden_rain_issue",
                },
                {
                    label: "Золотой дождь прием",
                    type: "inputGirl",
                    fetchLabel: "golden_rain_reception",
                },
                {
                    label: "Копрофагия выдача",
                    type: "inputGirl",
                    fetchLabel: "coprophagia_issue",
                },
                {
                    label: "Копрофагия прием",
                    type: "inputGirl",
                    fetchLabel: "coprophagia_reception",
                },
                {
                    label: "Фистинг анальный",
                    type: "inputGirl",
                    fetchLabel: "anal_fisting",
                },
                {
                    label: "Фистинг классический",
                    type: "inputGirl",
                    fetchLabel: "classic_fisting",
                },
            ],
        },
        // {
        //     title: 'Индивидуальные услуги',
        //     titleSurcharge: 'Доплата за индивидуальные услуги',
        //     row: [
        //         {
        //             label: '1.',
        //             type: 'individual',
        //             fetchLabel: 'age',

        //         },
        //         {
        //             label: '2.',
        //             type: 'individual',
        //             fetchLabel: 'age',

        //         },
        //         {
        //             label: '3.',
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
    ];
    return GirlsFormList;
};

export default GirlsFormListFunction;
