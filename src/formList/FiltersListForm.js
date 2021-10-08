export const FiltersListFormFunc = (formState) => {
    const FiltersListForm = [
        {
            title: 'Основные',
            row: [
                {
                    fetchLabel: 'classic_sex',
                    type: 'checkbox',
                    value: formState.classic_sex,
                    label: 'секс классический'
                },
                {
                    fetchLabel: 'anal_sex',
                    type: 'checkbox',
                    value: formState.anal_sex,
                    label: 'Секс анальный'
                },
                {
                    fetchLabel: 'blowjob_in_a_condom',
                    type: 'checkbox',
                    value: formState.blowjob_in_a_condom,
                    label: 'Минет в презервативе'
                },
                {
                    fetchLabel: 'sex_in_the_car',
                    type: 'checkbox',
                    value: formState.sex_in_the_car,
                    label: 'Секс в машине'
                }
            ]
        },
        {
            title: 'Дополнительные',
            row: [
                {
                    fetchLabel: 'blowjob_without_an_elastic_band',
                    type: 'checkbox',
                    value: formState.blowjob_without_an_elastic_band,
                    label: 'Минет без резинки'
                },
                {
                    fetchLabel: 'deep_blowjob',
                    type: 'checkbox',
                    value: formState.deep_blowjob,
                    label: 'Минет глубокий'
                },
                {
                    fetchLabel: 'cunnilingus',
                    type: 'checkbox',
                    value: formState.cunnilingus,
                    label: 'Куннилингус'
                },
                {
                    fetchLabel: 'pose_69',
                    type: 'checkbox',
                    value: formState.pose_69,
                    label: 'Поза 69'
                },
                {
                    fetchLabel: 'toys',
                    type: 'checkbox',
                    value: formState.toys,
                    label: 'Игрушки'
                },
                {
                    fetchLabel: 'role_playing_games',
                    type: 'checkbox',
                    value: formState.role_playing_games,
                    label: 'Ролевые игры'
                },
                {
                    fetchLabel: 'services_for_a_married_couple',
                    type: 'checkbox',
                    value: formState.services_for_a_married_couple,
                    label: 'Услуги семейной пары'
                },
                {
                    fetchLabel: 'cum_on_the_chest',
                    type: 'checkbox',
                    value: formState.cum_on_the_chest,
                    label: 'Окончание на грудь'
                },
                {
                    fetchLabel: 'cum_on_the_face',
                    type: 'checkbox',
                    value: formState.cum_on_the_face,
                    label: 'Окончание на лицо'
                },
                {
                    fetchLabel: 'cum_in_the_mouth',
                    type: 'checkbox',
                    value: formState.cum_in_the_mouth,
                    label: 'Окончание в рот'
                },
                {
                    fetchLabel: 'escort',
                    type: 'checkbox',
                    value: formState.escort,
                    label: 'Эксорт'
                },
                {
                    fetchLabel: 'striptease',
                    type: 'checkbox',
                    value: formState.striptease,
                    label: 'Стриптиз'
                },
                {
                    fetchLabel: 'lesbian_show_is_easy',
                    type: 'checkbox',
                    value: formState.lesbian_show_is_easy,
                    label: 'Лесби-шоу легкое'
                }
            ]
        },
        {
            title: 'Садо-мазо',
            row: [
                {
                    fetchLabel: 'bandage',
                    type: 'checkbox',
                    value: formState.bandage,
                    label: 'Бандаж'
                },
                {
                    fetchLabel: 'madam',
                    type: 'checkbox',
                    value: formState.madam,
                    label: 'Госпожа'
                },
                {
                    fetchLabel: 'easy_domination',
                    type: 'checkbox',
                    value: formState.easy_domination,
                    label: 'Легкая доминация'
                },
                {
                    fetchLabel: 'spanking',
                    type: 'checkbox',
                    value: formState.spanking,
                    label: 'Порка'
                },
                {
                    fetchLabel: 'slave_girl',
                    type: 'checkbox',
                    value: formState.slave_girl,
                    label: 'Рабыня'
                },
                {
                    fetchLabel: 'trampling',
                    type: 'checkbox',
                    value: formState.trampling,
                    label: 'Трамплинг'
                },
                {
                    fetchLabel: 'fetish',
                    type: 'checkbox',
                    value: formState.fetish,
                    label: 'Фетиш'
                }
            ]
        },
        {
            title: 'Массаж',
            row: [
                {
                    fetchLabel: 'classic_massage',
                    type: 'checkbox',
                    value: formState.classic_massage,
                    label: 'Классический'
                },
                {
                    fetchLabel: 'professional_massage',
                    type: 'checkbox',
                    value: formState.professional_massage,
                    label: 'Профессиональный'
                },
                {
                    fetchLabel: 'erotic_massage',
                    type: 'checkbox',
                    value: formState.erotic_massage,
                    label: 'Эротический'
                },
                {
                    fetchLabel: 'relaxing_massage',
                    type: 'checkbox',
                    value: formState.relaxing_massage,
                    label: 'Расслабляющий'
                },
                {
                    fetchLabel: 'urological_massage',
                    type: 'checkbox',
                    value: formState.urological_massage,
                    label: 'Урологический'
                },
                {
                    fetchLabel: 'sakura_branch',
                    type: 'checkbox',
                    value: formState.sakura_branch,
                    label: 'Ветка сакуры'
                },
                {
                    fetchLabel: 'body_massage',
                    type: 'checkbox',
                    value: formState.body_massage,
                    label: 'Боди массаж'
                },
            ]
        },
    ]
    return FiltersListForm
}
export const FilterListFormTwoFunc = (formState) => {
    const FilterListFormTwo = [
        {
            title: 'По параметрам:',
            row: [
                {
                    fetchLabelMin: 'breast_size_min',
                    type: 'TextField',
                    valueMin: formState.breast_size_min,
                    label: 'Грудь',
                    valueMax: formState.breast_size_max,
                    fetchLabelMax: 'breast_size_max',
                },
                {
                    fetchLabelMin: 'age_min',
                    type: 'TextField',
                    valueMin: formState.age_min,
                    label: 'Возраст',
                    valueMax: formState.age_max,
                    fetchLabelMax: 'age_max',
                },
                {
                    fetchLabelMin: 'weight_min',
                    type: 'TextField',
                    valueMin: formState.weight_min,
                    label: 'Вес, гк:',
                    valueMax: formState.weight_max,
                    fetchLabelMax: 'weight_max',
                },
                {
                    fetchLabelMin: 'height_min',
                    type: 'TextField',
                    valueMin: formState.height_min,
                    label: 'Рост, см',
                    valueMax: formState.height_max,
                    fetchLabelMax: 'height_max',
                },
                {
                    fetchLabelMin: 'penis_length_min',
                    type: 'TextField',
                    valueMin: formState.penis_length_min,
                    label: 'Длина члена',
                    valueMax: formState.penis_length_max,
                    fetchLabelMax: 'penis_length_max',
                },
                {
                    label: 'Цвет волос',
                    value: formState.hair_color,
                    type: 'select',
                    must: false,
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
                    label: 'Национальность',
                    value: formState.nationality,
                    type: 'select',
                    must: true,
                    fetchLabel: 'nationality',
                    default: 'Другое',
                    selectArrey: [
                        {
                            optionText: 'Саха',
                            optionValue: 'Саха'
                        },
                        {
                            optionText: 'Славяны',
                            optionValue: 'Славяны'
                        },
                        {
                            optionText: 'Другое',
                            optionValue: 'Другое'
                        },
                    ]
                },
                {
                    label: 'Ориентация',
                    value: formState.orientation,
                    type: 'select',
                    must: true,
                    fetchLabel: 'orientation',
                    default: 'м',
                    selectArrey: [
                        {
                            optionText: 'Натуралка',
                            optionValue: 'м'
                        },
                        {
                            optionText: 'Би',
                            optionValue: 'би'
                        },
                        {
                            optionText: 'Лесбиянка',
                            optionValue: 'ж'
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
            title: 'Тариф',
            row: [
                {
                    fetchLabelMin: 'check_out_per_hour_min',
                    type: 'TextField',
                    valueMin: formState.check_out_per_hour_min,
                    label: 'Выезд 1 час',
                    valueMax: formState.check_out_per_hour_max,
                    fetchLabelMax: 'check_out_per_hour_max',
                },
                {
                    fetchLabelMin: 'check_out_per_two_hours_min',
                    type: 'TextField',
                    valueMin: formState.check_out_per_two_hours_min,
                    label: 'Выезд 2 час',
                    valueMax: formState.check_out_per_two_hours_max,
                    fetchLabelMax: 'check_out_per_two_hours_max',
                },
                {
                    fetchLabelMin: 'check_out_per_night_min',
                    type: 'TextField',
                    valueMin: formState.check_out_per_night_min,
                    label: 'Выезд ночь',
                    valueMax: formState.check_out_per_night_max,
                    fetchLabelMax: 'check_out_per_night_max',
                },
                {
                    fetchLabelMin: 'apartment_per_hour_min',
                    type: 'TextField',
                    valueMin: formState.apartment_per_hour_min,
                    label: 'Апартаменты 1 час',
                    valueMax: formState.apartment_per_hour_max,
                    fetchLabelMax: 'apartment_per_hour_max',
                },
                {
                    fetchLabelMin: 'apartment_per_two_hours_min',
                    type: 'TextField',
                    valueMin: formState.apartment_per_two_hours_min,
                    label: 'Апартаменты 2 часа',
                    valueMax: formState.apartment_per_two_hours_max,
                    fetchLabelMax: 'apartment_per_two_hours_max',
                },
                {
                    fetchLabelMin: 'apartment_per_night_min',
                    type: 'TextField',
                    valueMin: formState.apartment_per_night_min,
                    label: 'Апартаменты ночь',
                    valueMax: formState.apartment_per_night_max,
                    fetchLabelMax: 'apartment_per_night_max',
                },
            ]
        },
        {
            title: 'Экстрим',
            row: [
                {
                    fetchLabel: 'strap_on',
                    type: 'checkbox',
                    value: formState.strap_on,
                    label: 'Страпон'
                },
                {
                    fetchLabel: 'i_do_anilingus',
                    type: 'checkbox',
                    value: formState.i_do_anilingus,
                    label: 'Анилингус делаю'
                },
                {
                    fetchLabel: 'golden_rain_issue',
                    type: 'checkbox',
                    value: formState.golden_rain_issue,
                    label: 'Золотой дождь выдача'
                },
                {
                    fetchLabel: 'golden_rain_reception',
                    type: 'checkbox',
                    value: formState.golden_rain_reception,
                    label: 'Золотой дождь прием'
                },
                {
                    fetchLabel: 'coprophagia_issue',
                    type: 'checkbox',
                    value: formState.coprophagia_issue,
                    label: 'Копрофагия выдача'
                },
                {
                    label: 'Копрофагия прием',
                    value: formState.coprophagia_reception,
                    type: 'inputGirl',
                    fetchLabel: 'coprophagia_reception',
                },
                {
                    fetchLabel: 'anal_fisting',
                    type: 'checkbox',
                    value: formState.anal_fisting,
                    label: 'Фистинг анальный'
                },
                {
                    fetchLabel: 'classic_fisting',
                    type: 'checkbox',
                    value: formState.classic_fisting,
                    label: 'Фистинг классический'
                }
            ]
        },
        {
            title: 'Экспресс программа',
            row: [
                {
                    fetchLabel: 'title',
                    type: 'checkbox',
                    value: false,
                    label: 'Есть экспресс (30 минут)'
                },
            ]
        },
        {
            title: 'Фото',
            row: [
                {
                    fetchLabel: 'title',
                    type: 'checkbox',
                    value: false,
                    label: 'Проверенное фото'
                },
            ]
        },
    ]
    return FilterListFormTwo
}