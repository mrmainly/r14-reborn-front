export const FiltersListFormFunc = () => {
    const FiltersListForm = [
        {
            title: 'Основные',
            row: [
                {
                    fetchLabel: 'classic_sex',
                    type: 'checkbox',
                    label: 'секс классический'
                },
                {
                    fetchLabel: 'anal_sex',
                    type: 'checkbox',
                    label: 'Секс анальный'
                },
                {
                    fetchLabel: 'blowjob_in_a_condom',
                    type: 'checkbox',
                    label: 'Минет в презервативе'
                },
                {
                    fetchLabel: 'sex_in_the_car',
                    type: 'checkbox',
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
                    label: 'Минет без резинки'
                },
                {
                    fetchLabel: 'deep_blowjob',
                    type: 'checkbox',
                    label: 'Минет глубокий'
                },
                {
                    fetchLabel: 'cunnilingus',
                    type: 'checkbox',
                    label: 'Куннилингус'
                },
                {
                    fetchLabel: 'pose_69',
                    type: 'checkbox',
                    label: 'Поза 69'
                },
                {
                    fetchLabel: 'toys',
                    type: 'checkbox',
                    label: 'Игрушки'
                },
                {
                    fetchLabel: 'role_playing_games',
                    type: 'checkbox',
                    label: 'Ролевые игры'
                },
                {
                    fetchLabel: 'services_for_a_married_couple',
                    type: 'checkbox',
                    label: 'Услуги семейной пары'
                },
                {
                    fetchLabel: 'cum_on_the_chest',
                    type: 'checkbox',
                    label: 'Окончание на грудь'
                },
                {
                    fetchLabel: 'cum_on_the_face',
                    type: 'checkbox',
                    label: 'Окончание на лицо'
                },
                {
                    fetchLabel: 'cum_in_the_mouth',
                    type: 'checkbox',
                    label: 'Окончание в рот'
                },
                {
                    fetchLabel: 'escort',
                    type: 'checkbox',
                    label: 'Эксорт'
                },
                {
                    fetchLabel: 'striptease',
                    type: 'checkbox',
                    label: 'Стриптиз'
                },
                {
                    fetchLabel: 'lesbian_show_is_easy',
                    type: 'checkbox',
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
                    label: 'Бандаж'
                },
                {
                    fetchLabel: 'madam',
                    type: 'checkbox',
                    label: 'Госпожа'
                },
                {
                    fetchLabel: 'easy_domination',
                    type: 'checkbox',
                    label: 'Легкая доминация'
                },
                {
                    fetchLabel: 'spanking',
                    type: 'checkbox',
                    label: 'Порка'
                },
                {
                    fetchLabel: 'slave_girl',
                    type: 'checkbox',
                    label: 'Рабыня'
                },
                {
                    fetchLabel: 'trampling',
                    type: 'checkbox',
                    label: 'Трамплинг'
                },
                {
                    fetchLabel: 'fetish',
                    type: 'checkbox',
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
                    label: 'Классический'
                },
                {
                    fetchLabel: 'professional_massage',
                    type: 'checkbox',
                    label: 'Профессиональный'
                },
                {
                    fetchLabel: 'erotic_massage',
                    type: 'checkbox',
                    label: 'Эротический'
                },
                {
                    fetchLabel: 'relaxing_massage',
                    type: 'checkbox',
                    label: 'Расслабляющий'
                },
                {
                    fetchLabel: 'urological_massage',
                    type: 'checkbox',
                    label: 'Урологический'
                },
                {
                    fetchLabel: 'sakura_branch',
                    type: 'checkbox',
                    label: 'Ветка сакуры'
                },
                {
                    fetchLabel: 'body_massage',
                    type: 'checkbox',
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
                    label: 'Грудь',
                    fetchLabelMax: 'breast_size_max',
                },
                {
                    fetchLabelMin: 'age_min',
                    type: 'TextField',
                    label: 'Возраст',
                    fetchLabelMax: 'age_max',
                },
                {
                    fetchLabelMin: 'weight_min',
                    type: 'TextField',
                    label: 'Вес, гк:',
                    fetchLabelMax: 'weight_max',
                },
                {
                    fetchLabelMin: 'height_min',
                    type: 'TextField',
                    label: 'Рост, см',
                    fetchLabelMax: 'height_max',
                },
                {
                    fetchLabelMin: 'penis_length_min',
                    type: 'TextField',
                    label: 'Длина члена',
                    fetchLabelMax: 'penis_length_max',
                },
                {
                    label: 'Цвет волос',
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
                    label: 'Выезд 1 час',
                    fetchLabelMax: 'check_out_per_hour_max',
                },
                {
                    fetchLabelMin: 'check_out_per_two_hours_min',
                    type: 'TextField',
                    label: 'Выезд 2 час',
                    fetchLabelMax: 'check_out_per_two_hours_max',
                },
                {
                    fetchLabelMin: 'check_out_per_night_min',
                    type: 'TextField',
                    label: 'Выезд ночь',
                    fetchLabelMax: 'check_out_per_night_max',
                },
                {
                    fetchLabelMin: 'apartment_per_hour_min',
                    type: 'TextField',
                    label: 'Апартаменты 1 час',
                    fetchLabelMax: 'apartment_per_hour_max',
                },
                {
                    fetchLabelMin: 'apartment_per_two_hours_min',
                    type: 'TextField',
                    label: 'Апартаменты 2 часа',
                    fetchLabelMax: 'apartment_per_two_hours_max',
                },
                {
                    fetchLabelMin: 'apartment_per_night_min',
                    type: 'TextField',
                    label: 'Апартаменты ночь',
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
                    label: 'Страпон'
                },
                {
                    fetchLabel: 'i_do_anilingus',
                    type: 'checkbox',
                    label: 'Анилингус делаю'
                },
                {
                    fetchLabel: 'golden_rain_issue',
                    type: 'checkbox',
                    label: 'Золотой дождь выдача'
                },
                {
                    fetchLabel: 'golden_rain_reception',
                    type: 'checkbox',
                    label: 'Золотой дождь прием'
                },
                {
                    fetchLabel: 'coprophagia_issue',
                    type: 'checkbox',
                    label: 'Копрофагия выдача'
                },
                {
                    label: 'Копрофагия прием',
                    type: 'inputGirl',
                    fetchLabel: 'coprophagia_reception',
                },
                {
                    fetchLabel: 'anal_fisting',
                    type: 'checkbox',
                    label: 'Фистинг анальный'
                },
                {
                    fetchLabel: 'classic_fisting',
                    type: 'checkbox',
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
                    label: 'Проверенное фото'
                },
            ]
        },
    ]
    return FilterListFormTwo
}