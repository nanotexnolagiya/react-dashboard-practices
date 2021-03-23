import { createMessages } from './createMessages';
import { localeManager } from './localeManager';

export const messages = createMessages(localeManager.getLocales(), {
  project_name: {
    ru: 'КИС Адолат',
    uz: 'KIS Adolat',
  },
  something_went_wrong: {
    ru: 'Сорри, что то пошел не так',
    uz: 'Узр, кандайдир хато булди',
  },
  sign_in: {
    ru: 'Вход',
    uz: 'Кириш',
  },
  username: {
    ru: 'Имя пользователя',
    uz: 'Фойдаланнувчи номи',
  },
  password: {
    ru: 'Пароль',
    uz: 'Парол',
  },
  add: {
    ru: 'Добавить',
    uz: 'Қўшиш',
  },
  search: {
    ru: 'Поиск',
    uz: 'Излаш',
  },
  edit: {
    ru: 'редакт',
    uz: 'таҳрир',
  },
  delete: {
    ru: 'удалить',
    uz: 'ўчир',
  },
  save: {
    ru: 'Сохранить',
    uz: 'Сақлаш',
  },
  cancel: {
    ru: 'Отмена',
    uz: 'Бекор қилиш',
  },
  reload: {
    ru: '',
    uz: 'Қайта юклаш',
  },
  yes: {
    ru: 'Да',
    uz: 'Ҳа',
  },
  no: {
    ru: 'Нет',
    uz: 'Йўқ',
  },
  are_you_sure_to_delete: {
    ru: 'Вы действительно хотите его выключить?',
    uz: 'Сиз ростдан ҳам ўчирмоқчимисиз?',
  },
  no_data_found: {
    ru: 'Данные не найдены.',
    uz: 'Маълумотлар топилмади.',
  },
  name_uz: {
    ru: 'Ўзбекча номи',
    uz: 'Ўзбекча номи',
  },
  name_ru: {
    ru: 'Русча номи',
    uz: 'Русча номи',
  },
  code: {
    ru: 'Коди',
    uz: 'Коди',
  },
  type: {
    ru: 'Тури',
    uz: 'Тури',
  },
  court_type: {
    ru: 'Суд тури',
    uz: 'Суд тури',
  },
  region_code: {
    ru: 'Вилоят коди (МИБ)',
    uz: 'Вилоят коди (МИБ)',
  },
  category: {
    ru: 'Категорияси',
    uz: 'Категорияси',
  },
  is_active: {
    ru: 'Ҳолати',
    uz: 'Ҳолати',
  },
  order_nr: {
    ru: 'Навбат рақами',
    uz: 'Навбат рақами',
  },
  doc_group: {
    ru: 'Назорат варақаси тури',
    uz: 'Назорат варақаси тури',
  },
  material_type_id: {
    ru: 'Материал тури',
    uz: 'Материал тури',
  },
  permissions: {
    ru: 'Рухсатнома',
    uz: 'Рухсатнома',
  },
  is_publication: {
    ru: 'Публикация',
    uz: 'Публикация',
  },
  actions: {
    ru: '',
    uz: '',
  },
  order_code: {
    ru: 'Тартиб рақами',
    uz: 'Тартиб рақами',
  },
  instance: {
    ru: 'Инстансия',
    uz: 'Инстансия',
  },
  appeal: {
    ru: 'Аппеляция',
    uz: 'Аппеляция',
  },
  cassation: {
    ru: 'Кассация',
    uz: 'Кассация',
  },
  is_appeal: {
    ru: 'Аппеляция',
    uz: 'Аппеляция',
  },
  is_cassation: {
    ru: 'Кассация',
    uz: 'Кассация',
  },
  control: {
    ru: 'Назорат судлов ҳайъати',
    uz: 'Назорат судлов ҳайъати',
  },
  is_control: {
    ru: 'Назорат судлов ҳайъати',
    uz: 'Назорат судлов ҳайъати',
  },
  first_instance: {
    ru: 'Биринчи инстансия',
    uz: 'Биринчи инстансия',
  },
  is_first: {
    ru: 'Биринчи инстансия',
    uz: 'Биринчи инстансия',
  },
  is_conflict: {
    ru: 'Низога оид',
    uz: 'Низога оид',
  },
  is_claim: {
    ru: 'Ишга оид',
    uz: 'Ишга оид',
  },
  ministry_id: {
    ru: 'Вазирлик',
    uz: 'Вазирлик',
  },
  parent_id: {
    ru: 'Юқори бўлим',
    uz: 'Юқори бўлим',
  },
  definition: {
    ru: 'Таъриф',
    uz: 'Таъриф',
  },
  court_type_administrative: {
    ru: 'Административный суд',
    uz: 'Маъмурий суд',
  },
  court_type_civil: {
    ru: 'Гражданский суд,',
    uz: 'Фуқоролик ишлари бўйича суд',
  },
  court_type_economy: {
    ru: 'Хозяйственный суд',
    uz: 'Иқтисодий суд',
  },
  court_type_criminal: {
    ru: 'Уголовный суд,',
    uz: 'Жиноий ишлар бўйича суд',
  },
  income_document: {
    ru: 'Документ о доходах',
    uz: 'Кирим ҳужжати',
  },
  exit_document: {
    ru: 'Выйти из документа',
    uz: 'Чиқиш ҳужжати',
  },
  internal_document: {
    ru: 'Внутренний документ',
    uz: 'Ички ҳужжат',
  },
  cc_type: {
    ru: 'Назорат варақаси тури',
    uz: 'Назорат варақаси тури',
  },
  is_final: {
    ru: 'Якуний натижа',
    uz: 'Якуний натижа',
  },
  is_gai: {
    ru: 'ЙЙҲБ учун',
    uz: 'ЙЙҲБ учун',
  },
  is_related: {
    ru: 'Ишга боғлиқ',
    uz: 'Ишга боғлиқ',
  },
  is_file_required: {
    ru: 'Файл талаб қилиш',
    uz: 'Файл талаб қилиш',
  },
  is_to_date_indefinite: {
    ru: 'Тугаш вақтини киритиш',
    uz: 'Тугаш вақтини киритиш',
  },
  leave_type_id: {
    ru: 'Имконсизлик тури',
    uz: 'Имконсизлик тури',
  },
  make_judge_un_available: {
    ru: 'Судяни ишдан четлаштириш',
    uz: 'Судяни ишдан четлаштириш',
  },
  article_id: {
    ru: 'Модда',
    uz: 'Модда',
  },
  wage: {
    ru: 'Ойлик хаққи',
    uz: 'Ойлик хаққи',
  },
  start_date: {
    ru: 'Бошланиш санаси',
    uz: 'Бошланиш санаси',
  },
  part_id: {
    ru: 'МИБ моддаси қисми',
    uz: 'МИБ моддаси қисми',
  },
  clause_id: {
    ru: 'МИБ моддаси (clauses)',
    uz: 'МИБ моддаси (clauses)',
  },
  has_final_result: {
    ru: 'has_final_result',
    uz: 'has_final_result',
  },
  has_delayed_term: {
    ru: 'has_delayed_term',
    uz: 'has_delayed_term',
  },
  related_to_case: {
    ru: 'related_to_case',
    uz: 'related_to_case',
  },
  auto_number: {
    ru: 'Авто рақамлаш',
    uz: 'Авто рақамлаш',
  },
  cur_index: {
    ru: 'Ҳозирги индехси',
    uz: 'Ҳозирги индехси',
  },
  has_reset: {
    ru: 'Охирги пайтидан бошлаш',
    uz: 'Охирги пайтидан бошлаш',
  },
  reset_type: {
    ru: 'Қайтадан бошлаш оралиғи',
    uz: 'Қайтадан бошлаш оралиғи',
  },
  template: {
    ru: 'Шаблон',
    uz: 'Шаблон',
  },
  department_id: {
    ru: 'Бўлим',
    uz: 'Бўлим',
  },
  has_prefix: {
    ru: 'Префех',
    uz: 'Префех',
  },
  has_suffix: {
    ru: 'Cуффих',
    uz: 'Cуффих',
  },
  cc_type_a: {
    ru: '1a',
    uz: '1a',
  },
  cc_type_b: {
    ru: '2a',
    uz: '2a',
  },
  cc_type_c: {
    ru: '3a',
    uz: '3a',
  },
  base_types: {
    ru: 'Базалар',
    uz: 'Базалар',
  },
  base_type: {
    ru: 'База',
    uz: 'База',
  },
  department_type: {
    ru: 'Бўлим',
    uz: 'Бўлим',
  },
  department_types: {
    ru: 'Бўлимлар',
    uz: 'Бўлимлар',
  },
  position_types: {
    ru: 'Лавозимлар',
    uz: 'Лавозимлар',
  },
  position_type: {
    ru: 'Лавозим',
    uz: 'Лавозим',
  },
  journal_types: {
    ru: 'Журналлар',
    uz: 'Журналлар',
  },
  journal_type: {
    ru: 'Журнал',
    uz: 'Журнал',
  },
  users: {
    ru: 'Фойдаланувчилар',
    uz: 'Фойдаланувчилар',
  },
  user: {
    ru: 'Фойдаланувчи',
    uz: 'Фойдаланувчи',
  },
  roles: {
    ru: 'Роллар',
    uz: 'Роллар',
  },
  role: {
    ru: 'Рол',
    uz: 'Рол',
  },
  unavailable_periods: {
    ru: 'Имконсизлик даври',
    uz: 'Имконсизлик даври',
  },
  unavailable_period: {
    ru: 'Имконсизлик даври',
    uz: 'Имконсизлик даври',
  },
  journal_renewal: {
    ru: 'Журнални янгилаш',
    uz: 'Журнални янгилаш',
  },
  document_type: {
    ru: 'Ҳужжат тури',
    uz: 'Ҳужжат тури',
  },
  document_types: {
    ru: 'Ҳужжат турлари',
    uz: 'Ҳужжат турлари',
  },
  file_types: {
    ru: 'Иш ҳужжати ',
    uz: 'Иш ҳужжати турлари',
  },
  file_type: {
    ru: 'Иш ҳужжати тури',
    uz: 'Иш ҳужжати тури',
  },
  material_types_cases: {
    ru: 'Материал турлари (Иш)',
    uz: 'Материал турлари (Иш)',
  },
  material_type_cases: {
    ru: 'Материал тури',
    uz: 'Материал тури',
  },
  conflict_material_types: {
    ru: 'Материал турлари (Низо)',
    uz: 'Материал турлари (Низо)',
  },
  conflict_material_type: {
    ru: 'Материал тури',
    uz: 'Материал тури',
  },
  material_sub_types: {
    ru: 'Қўшимча материал турлари',
    uz: 'Қўшимча материал турлари',
  },
  material_sub_type: {
    ru: 'Қўшимча материал тури',
    uz: 'Қўшимча материал тури',
  },
  document_result: {
    ru: 'Ҳужжат натижаси',
    uz: 'Ҳужжат натижаси',
  },
  banks: {
    ru: 'Банклар',
    uz: 'Банклар',
  },
  bank: {
    ru: 'Банк',
    uz: 'Банк',
  },
  ministries: {
    ru: 'Вазирликлар',
    uz: 'Вазирликлар',
  },
  ministry: {
    ru: 'Вазирлик',
    uz: 'Вазирлик',
  },
  representing_orgs: {
    ru: 'Манфаатида идоралар',
    uz: 'Манфаатида идоралар',
  },
  representing_org: {
    ru: 'Манфаатида идора',
    uz: 'Манфаатида идора',
  },
  suddep_representingorgs: {
    ru: 'Манфаатида идоралар (МИБ)',
    uz: 'Манфаатида идоралар (МИБ)',
  },
  suddep_representingorg: {
    ru: 'Манфаатида идора (МИБ)',
    uz: 'Манфаатида идора (МИБ)',
  },
  investigating_orgs: {
    ru: 'Ишни тақдим қилган идоралар',
    uz: 'Ишни тақдим қилган идоралар',
  },
  investigating_org: {
    ru: 'Ишни тақдим қилган идора',
    uz: 'Ишни тақдим қилган идора',
  },
  ministries_and_organizations: {
    ru: 'Маъмурий вазирлик ва идоралар',
    uz: 'Маъмурий вазирлик ва идоралар',
  },
  ministries_and_organization: {
    ru: 'Маъмурий вазирлик ва идора',
    uz: 'Маъмурий вазирлик ва идора',
  },
  decision_reasons: {
    ru: 'Натижа сабаблари',
    uz: 'Натижа сабаблари',
  },
  decision_reason: {
    ru: 'Натижа сабаби',
    uz: 'Натижа сабаби',
  },
  article_end_bases: {
    ru: 'Тугатиш асослари',
    uz: 'Тугатиш асослари',
  },
  article_end_base: {
    ru: 'Тугатиш асоси',
    uz: 'Тугатиш асоси',
  },
  publication_reject_reasons: {
    ru: 'Рухсат этилмаслик сабаблари',
    uz: 'Рухсат этилмаслик сабаблари',
  },
  publication_reject_reason: {
    ru: 'Рухсат этилмаслик сабаби',
    uz: 'Рухсат этилмаслик сабаби',
  },
  case_prolong_reason: {
    ru: 'Иш муддатини узайтириш сабаби',
    uz: 'Иш муддатини узайтириш сабаби',
  },
  case_prolong_reasons: {
    ru: 'Иш муддатини узайтириш сабаблари',
    uz: 'Иш муддатини узайтириш сабаблари',
  },
  redistribution_reasons: {
    ru: 'Қайта тақсимлаш сабаби',
    uz: 'Қайта тақсимлаш сабаби',
  },
  redistribution_reason: {
    ru: 'Қайта тақсимлаш сабаби',
    uz: 'Қайта тақсимлаш сабаби',
  },
  material_reject_reasons: {
    ru: 'Материални рад қилиш сабаблари (Иш)',
    uz: 'Материални рад қилиш сабаблари (Иш)',
  },
  material_reject_reason: {
    ru: 'Материални рад қилиш сабаби',
    uz: 'Материални рад қилиш сабаби',
  },
  conflict_material_reject_reasons: {
    ru: 'Материални рад қилиш сабаблари (Низо)',
    uz: 'Материални рад қилиш сабаблари (Низо)',
  },
  conflict_material_reject_reason: {
    ru: 'Материални рад қилиш сабаби (Низо)',
    uz: 'Материални рад қилиш сабаби (Низо)',
  },
  suddep_articles: {
    ru: 'МИБ моддалари',
    uz: 'МИБ моддалари',
  },
  suddep_article: {
    ru: 'МИБ моддаси',
    uz: 'МИБ моддаси',
  },
  sud_dep_article_id: {
    ru: 'МИБ моддаси',
    uz: 'МИБ моддаси',
  },

  suddep_article_parts: {
    ru: 'МИБ моддалари қисмлари',
    uz: 'МИБ моддалари қисмлари',
  },
  suddep_article_part: {
    ru: 'МИБ моддаси қисми',
    uz: 'МИБ моддаси қисми',
  },
  sud_dep_article_part_id: {
    ru: 'МИБ моддаси қисми',
    uz: 'МИБ моддаси қисми',
  },
  suddep_clauses: {
    ru: 'МИБ моддалари (clauses)',
    uz: 'МИБ моддалари (clauses)',
  },
  suddep_clause: {
    ru: 'МИБ моддаси (clauses)',
    uz: 'МИБ моддаси (clauses)',
  },
  sud_dep_clause_id: {
    ru: 'МИБ моддаси (clauses)',
    uz: 'МИБ моддаси (clauses)',
  },
  appeal_types: {
    ru: 'Апелляция турлари',
    uz: 'Апелляция турлари',
  },
  appeal_type: {
    ru: 'Апелляция тури',
    uz: 'Апелляция тури',
  },
  cassation_types: {
    ru: 'Кассация турлари',
    uz: 'Кассация турлари',
  },
  cassation_type: {
    ru: 'Кассация тури',
    uz: 'Кассация тури',
  },
  claim_categories: {
    ru: 'Иш туркумлари',
    uz: 'Иш туркумлари',
  },
  claim_category: {
    ru: 'Иш туркуми',
    uz: 'Иш туркуми',
  },
  claim_sub_category: {
    ru: 'Қўшимча иш туркумлари',
    uz: 'Қўшимча иш туркумлари',
  },
  accusation_type: {
    ru: 'Маъмурий айбланганлиги',
    uz: 'Маъмурий айбланганлиги',
  },
  accusation_types: {
    ru: 'Маъмурий айбланганлиги',
    uz: 'Маъмурий айбланганлиги',
  },
  second_categories: {
    ru: 'Иккиламчи иш туркумлари',
    uz: 'Иккиламчи иш туркумлари',
  },
  second_category: {
    ru: 'Иккиламчи иш туркуми',
    uz: 'Иккиламчи иш туркуми',
  },
  second_category_id: {
    ru: 'Иккиламчи иш туркуми',
    uz: 'Иккиламчи иш туркуми',
  },
  category_id: {
    ru: 'Модда категорияси',
    uz: 'Модда категорияси',
  },
  admission_types: {
    ru: 'Иш келиб тушиш тартиби',
    uz: 'Иш келиб тушиш тартиби',
  },
  admission_type: {
    ru: 'Иш келиб тушиш тартиби',
    uz: 'Иш келиб тушиш тартиби',
  },
  expertise_types: {
    ru: 'Экспертиза турлари',
    uz: 'Экспертиза турлари',
  },
  expertise_type: {
    ru: 'Экспертиза тури',
    uz: 'Экспертиза тури',
  },
  participant_types: {
    ru: 'Процесс иштирокчилари',
    uz: 'Процесс иштирокчилари',
  },
  participant_type: {
    ru: 'Процесс иштирокчиси',
    uz: 'Процесс иштирокчиси',
  },
  precaution_types: {
    ru: 'Эҳтиёт чоралари',
    uz: 'Эҳтиёт чоралари',
  },
  precaution_type: {
    ru: 'Эҳтиёт чораси',
    uz: 'Эҳтиёт чораси',
  },
  judge_group: {
    ru: 'Судлов таркиблари',
    uz: 'Судлов таркиблари',
  },
  special_article: {
    ru: 'МЖтК махсус қисми',
    uz: 'МЖтК махсус қисми',
  },
  disciplined_actions: {
    ru: 'Интизомий чора',
    uz: 'Интизомий чора',
  },
  disciplined_action: {
    ru: 'Интизомий чоралар',
    uz: 'Интизомий чоралар',
  },
  duty_reasons: {
    ru: 'Давлат божи ҳолатлари',
    uz: 'Давлат божи ҳолатлари',
  },
  duty_reason: {
    ru: 'Давлат божи ҳолати',
    uz: 'Давлат божи ҳолати',
  },
  post_expense: {
    ru: 'Почта ҳаражати ҳолати',
    uz: 'Почта ҳаражати ҳолати',
  },
  post_expenses: {
    ru: 'Почта ҳаражати ҳолатлари',
    uz: 'Почта ҳаражати ҳолатлари',
  },
  minimum_wage: {
    ru: 'Энг кам иш хақлари',
    uz: 'Энг кам иш хақлари',
  },
  currency_types: {
    ru: 'Валюталар',
    uz: 'Валюталар',
  },
  currency_type: {
    ru: 'Валюта',
    uz: 'Валюта',
  },
  country_names: {
    ru: 'Давлатлар',
    uz: 'Давлатлар',
  },
  country_name: {
    ru: 'Давлат',
    uz: 'Давлат',
  },
  region_names: {
    ru: 'Вилоятлар',
    uz: 'Вилоятлар',
  },
  region_name: {
    ru: 'Вилоят',
    uz: 'Вилоят',
  },
  lawman_departments: {
    ru: 'Суд ижрочилари департаментлари',
    uz: 'Суд ижрочилари департаментлари',
  },
  lawman_department: {
    ru: 'Суд ижрочилари департамент',
    uz: 'Суд ижрочилари департамент',
  },
  lawman_tax_authorities: {
    ru: 'Суд деп. солиқ органлари справочниги',
    uz: 'Суд деп. солиқ органлари справочниги',
  },
  lawman_tax_authorty: {
    ru: 'Суд деп. солиқ органлари справочниги',
    uz: 'Суд деп. солиқ органлари справочниги',
  },
  org_forms: {
    ru: 'Қисқартмалар',
    uz: 'Қисқартмалар',
  },
  org_form: {
    ru: 'Қисқартма',
    uz: 'Қисқартма',
  },
  topics: {
    ru: 'Мавзулар',
    uz: 'Мавзулар',
  },
  topic: {
    ru: 'Мавзу',
    uz: 'Мавзу',
  },
  address_types: {
    ru: 'Манзил турлари',
    uz: 'Манзил турлари',
  },
  address_type: {
    ru: 'Манзил тури',
    uz: 'Манзил тури',
  },
  mobile_court_address: {
    ru: 'Сайёр суд манзили',
    uz: 'Сайёр суд манзили',
  },
  education_types: {
    ru: 'Маълумоти',
    uz: 'Маълумоти',
  },
  education_type: {
    ru: 'Маълумот тури',
    uz: 'Маълумот тури',
  },
  health_type: {
    ru: 'Соғлиги',
    uz: 'Соғлиги',
  },
  nationalities: {
    ru: 'Миллати',
    uz: 'Миллати',
  },
  occupation: {
    ru: 'Машғулоти',
    uz: 'Машғулоти',
  },
  place_type: {
    ru: 'Ҳуқуқбузарлик содир қилинган жой',
    uz: 'Ҳуқуқбузарлик содир қилинган жой',
  },
  evidence_categories: {
    ru: 'Далиллар категорияси',
    uz: 'Далиллар категорияси',
  },
  resolver_receptions: {
    ru: 'Раҳбарият қабулидан',
    uz: 'Раҳбарият қабулидан',
  },
  leave_types: {
    ru: 'Имконсизлик турлари',
    uz: 'Имконсизлик турлари',
  },
  leave_type: {
    ru: 'Имконсизлик тури',
    uz: 'Имконсизлик тури',
  },
  manuals: {
    ru: 'Йўриқномалар',
    uz: 'Йўриқномалар',
  },
  decision_base_with_instances: {
    ru: 'Хусусий ажрим чиқариш асослари',
    uz: 'Хусусий ажрим чиқариш асослари',
  },
  decision_base_with_instance: {
    ru: 'Хусусий ажрим чиқариш асоси',
    uz: 'Хусусий ажрим чиқариш асоси',
  },
  recipient_orgs: {
    ru: 'Хусусий ажрим юбориладиган ташкилотлар',
    uz: 'Хусусий ажрим юбориладиган ташкилотлар',
  },
  recipient_org: {
    ru: 'Хусусий ажрим юбориладиган ташкилот',
    uz: 'Хусусий ажрим юбориладиган ташкилот',
  },
  identity_document_types: {
    ru: 'Шахсни тасдиқловчи ҳужжат турлари (ИИБ)',
    uz: 'Шахсни тасдиқловчи ҳужжат турлари (ИИБ)',
  },
  identity_document_type: {
    ru: 'Шахсни тасдиқловчи ҳужжат тури',
    uz: 'Шахсни тасдиқловчи ҳужжат тури',
  },
  eQabul_decline_reason: {
    ru: 'Ишни рад этиш сабаби (E-Qabul)',
    uz: 'Ишни рад этиш сабаби (E-Qabul)',
  },
  claim_decline_reasons: {
    ru: 'Ишни рад этиш сабаблари',
    uz: 'Ишни рад этиш сабаблари',
  },
  claim_decline_reason: {
    ru: 'Ишни рад этиш сабаби',
    uz: 'Ишни рад этиш сабаби',
  },
  report_types: {
    ru: 'Ҳисобот турлари',
    uz: 'Ҳисобот турлари',
  },
  report_type: {
    ru: 'Ҳисобот тури',
    uz: 'Ҳисобот тури',
  },
  publicity_place_type: {
    ru: 'Тарғибот ўтказилган жойлар',
    uz: 'Тарғибот ўтказилган жойлар',
  },
  document_explanation: {
    ru: 'Тушунтириш мазмуни',
    uz: 'Тушунтириш мазмуни',
  },
  non_material_requirement_types: {
    ru: 'Номулкий тусдаги талаб турлари',
    uz: 'Номулкий тусдаги талаб турлари',
  },
  non_material_requirement_type: {
    ru: 'Номулкий тусдаги талаб тури',
    uz: 'Номулкий тусдаги талаб тури',
  },
  restore_reasons: {
    ru: 'Архивдан олиш',
    uz: 'Архивдан олиш сабаблари',
  },
  restore_reason: {
    ru: 'Архивдан олиш сабаби',
    uz: 'Архивдан олиш сабаби',
  },
  archive_push_reject_reasons: {
    ru: 'Архивга қабул қилишни рад этиш сабаблари',
    uz: 'Архивга қабул қилишни рад этиш сабаблари',
  },
  archive_push_reject_reason: {
    ru: 'Архивга қабул қилишни рад этиш сабаби',
    uz: 'Архивга қабул қилишни рад этиш сабаби',
  },
  archive_pull_reject_reasons: {
    ru: 'Архивдан олиш сўровини рад этиш сабаблари',
    uz: 'Архивдан олиш сўровини рад этиш сабаблари',
  },
  archive_pull_reject_reason: {
    ru: 'Архивдан олиш сўровини рад этиш сабаби',
    uz: 'Архивдан олиш сўровини рад этиш сабаби',
  },
  articles: {
    ru: 'МСИЮтК моддалари (A)',
    uz: 'МСИЮтК моддалари (A)',
  },
  article: {
    ru: 'Модда',
    uz: 'Модда',
  },
  articles_passive: {
    ru: 'МСИЮтК моддалари (N)',
    uz: 'МСИЮтК моддалари (N)',
  },
  article_control: {
    ru: 'Болғача моддалари (A/N)',
    uz: 'Болғача моддалари (A/N)',
  },
  article_controls: {
    ru: 'Болғача моддаси (A/N)',
    uz: 'Болғача моддаси (A/N)',
  },
  article_restrictions: {
    ru: 'МСИЮтК модда таъқиқлари',
    uz: 'МСИЮтК модда таъқиқлари',
  },
  article_categories: {
    ru: 'Модда категориялари',
    uz: 'Модда категориялари',
  },
  article_category: {
    ru: 'Модда категорияси',
    uz: 'Модда категорияси',
  },
  execution_result: {
    ru: 'Ижро натижаси',
    uz: 'Ижро натижаси',
  },
  suddep_reasons: {
    ru: 'Ижро натижаси (МИБ)',
    uz: 'Ижро натижаси (МИБ)',
  },
  sud_dep_reason_id: {
    ru: 'Ижро натижаси (МИБ)',
    uz: 'Ижро натижаси (МИБ)',
  },
  claim_defer_reasons: {
    ru: 'Ишни қолдириш сабаблари',
    uz: 'Ишни қолдириш сабаблари',
  },
  claim_defer_reason: {
    ru: 'Ишни қолдириш сабаби',
    uz: 'Ишни қолдириш сабаби',
  },
  document_applications: {
    ru: 'Ариза, шикоят ва таклифлар',
    uz: 'Ариза, шикоят ва таклифлар',
  },
  document_general: {
    ru: 'Умумий мазмундаги мурожаатлар',
    uz: 'Умумий мазмундаги мурожаатлар',
  },
  document_control: {
    ru: 'Назорат тартибида кўриладиган мурожаатлар',
    uz: 'Назорат тартибида кўриладиган мурожаатлар',
  },
  document324_27: {
    ru: 'МЖтК 324/17-моддаси бўйича кўриладиган аризалар',
    uz: 'МЖтК 324/17-моддаси бўйича кўриладиган аризалар',
  },
  document257: {
    ru: 'МСИЮтК 257-моддаси бўйича кўриладиган аризалар',
    uz: 'МСИЮтК 257-моддаси бўйича кўриладиган аризалар',
  },
  active_on: {
    ru: 'Активный',
    uz: 'Aktiv',
  },
  active_off: {
    ru: 'Пассивный',
    uz: 'Passiv',
  },
  ministry_part: {
    ru: 'Vazirlik qismi.',
    uz: 'Vazirlik qismi',
  },
  register_new_document: {
    ru: 'Янги хужжатни рўйҳатга олиш',
    uz: 'Янги хужжатни рўйҳатга олиш',
  },
  administrative_claim: {
    ru: 'Маъмурий иш',
    uz: 'Маъмурий иш',
  },
  administrative_conflict: {
    ru: 'Маъмурий низо',
    uz: 'Маъмурий низо',
  },
  administrative_claim_number: {
    ru: 'Маъмурий иш рақами',
    uz: 'Маъмурий иш рақами',
  },
  administrative_claim_date: {
    ru: 'Иш келиб тушган сана',
    uz: 'Иш келиб тушган сана',
  },
  administrative_claim_time: {
    ru: 'Иш келиб тушган вақт',
    uz: 'Иш келиб тушган вақт',
  },
  investigating_org_name: {
    ru: 'Идора номи',
    uz: 'Идора номи',
  },
  delivery_type: {
    ru: 'Юбориш тури',
    uz: 'Юбориш тури',
  },
  delivery_types: {
    ru: 'Юбориш турлари',
    uz: 'Юбориш турлари',
  },
  place_location: {
    ru: 'Ҳуқуқбузарлик содир бўлган манзил',
    uz: 'Ҳуқуқбузарлик содир бўлган манзил',
  },
  investigator_name: {
    ru: 'Терговчининг Ф.И.Ш.',
    uz: 'Терговчининг Ф.И.Ш.',
  },
  iscase_returning: {
    ru: 'Ишни қайтариб юбориш учун',
    uz: 'Ишни қайтариб юбориш учун',
  },
  iscase_residue: {
    ru: 'Қолдиқ',
    uz: 'Қолдиқ',
  },
  claim_registry_number: {
    ru: 'Маъмурий иш рақами (суд)',
    uz: 'Маъмурий иш рақами (суд)',
  },
  registry_number: {
    ru: 'Кирим рақами',
    uz: 'Кирим рақами',
  },
  administrative_offender: {
    ru: 'Маъмурий хуқуқбузарлар',
    uz: 'Маъмурий хуқуқбузарлар',
  },
  other_information: {
    ru: 'Бошқа маълумотлар',
    uz: 'Бошқа маълумотлар',
  },
  claimant: {
    ru: 'Жабрланувчи',
    uz: 'Жабрланувчи',
  },
  plaintiff: {
    ru: 'Даъвогар',
    uz: 'Даъвогар',
  },
  responsible: {
    ru: 'Жавобгар',
    uz: 'Жавобгар',
  },
  representing: {
    ru: 'Манфаатини кўзлаб',
    uz: 'Манфаатини кўзлаб',
  },
  comments: {
    ru: 'Изоҳлар ',
    uz: 'Изоҳлар ',
  },
  document_number: {
    ru: 'Ҳужжат рақами',
    uz: 'Ҳужжат рақами',
  },
  registration_date: {
    ru: 'Кирим санаси',
    uz: 'Кирим санаси',
  },
  document_date: {
    ru: 'Ҳужжат санаси',
    uz: 'Ҳужжат санаси',
  },
  remainder_case_number: {
    ru: 'Маъмурий иш рақами (суд)',
    uz: 'Маъмурий иш рақами (суд)',
  },
  content_of_application: {
    ru: ' Ариза (шикоят) мазмуни',
    uz: ' Ариза (шикоят) мазмуни',
  },
  claim_amount: {
    ru: 'Даъво суммаси',
    uz: 'Даъво суммаси',
  },
  main_dept: {
    ru: 'Асосий қарз',
    uz: 'Асосий қарз',
  },
  administrative_damage: {
    ru: 'Маънавий зарар',
    uz: 'Маънавий зарар',
  },
  property_damage: {
    ru: 'Моддий зарар',
    uz: 'Моддий зарар',
  },
  lost_profit: {
    ru: 'Бой берилган фойда',
    uz: 'Бой берилган фойда',
  },
  down_payment: {
    ru: 'Aванс',
    uz: 'Aванс',
  },
  penalty: {
    ru: 'Пеня',
    uz: 'Пеня',
  },
  forfeit: {
    ru: 'Жарима',
    uz: 'Жарима',
  },
  percent_amount: {
    ru: 'Фоиз суммаси',
    uz: 'Фоиз суммаси',
  },
  fine_amount: {
    ru: 'Шундан неустойка',
    uz: 'Шундан неустойка',
  },
  state_duty: {
    ru: 'Ихтиёрий тўланган давлат божи',
    uz: 'Ихтиёрий тўланган давлат божи',
  },
  receipt_number: {
    ru: 'Рақами',
    uz: 'Рақами',
  },
  receipt_total: {
    ru: 'Суммаси',
    uz: 'Суммаси',
  },
  receipt_date: {
    ru: 'Санаси',
    uz: 'Санаси',
  },
  claim_receipt: {
    ru: 'Квитанция',
    uz: 'Квитанция',
  },
  claim_state_duty_tax: {
    ru: 'ДСИ маълумоти',
    uz: 'ДСИ маълумоти',
  },
  number: {
    ru: 'Рақами',
    uz: 'Рақами',
  },
  date: {
    ru: 'Санаси',
    uz: 'Санаси',
  },
  claim_state_duty_bank: {
    ru: 'Банк маълумоти',
    uz: 'Банк маълумоти',
  },
  claim_state_duty_bank_number: {
    ru: 'Рақами',
    uz: 'Рақами',
  },
  claim_state_duty_bank_date: {
    ru: 'Санаси',
    uz: 'Санаси',
  },
  claim_state_duty_dept: {
    ru: 'Тўланмаган ДБ суммаси',
    uz: 'Тўланмаган ДБ суммаси ',
  },
  vcc_fee: {
    ru: 'Ихтиёрий тўланган ПҲ',
    uz: 'Ихтиёрий тўланган ПҲ',
  },
  post_fee: {
    ru: 'Ихтиёрий тўланган ВКА ҳаражатлари',
    uz: 'Ихтиёрий тўланган ВКА ҳаражатлари',
  },
  request_amounts: {
    ru: 'Сўралган',
    uz: 'Сўралган',
  },
  currency_total: {
    ru: 'Сумма',
    uz: 'Сумма',
  },
  currency_fine: {
    ru: 'Неустойка',
    uz: 'Неустойка',
  },
  currency_state_duty: {
    ru: 'Давлат божи:',
    uz: 'Давлат божи:',
  },
  first_name: {
    ru: 'Исми',
    uz: 'Исми',
  },
  last_name: {
    ru: 'Фамилияси',
    uz: 'Фамилияси',
  },
  middle_name: {
    ru: 'Шарифи',
    uz: 'Шарифи',
  },
  serial_passport_and_number: {
    ru: 'Паспорт серияси ва рақами',
    uz: 'Паспорт серияси ва рақами',
  },
  tin: {
    ru: 'СТИР',
    uz: 'СТИР',
  },
  district: {
    ru: 'Туман',
    uz: 'Туман',
  },
  name: {
    ru: 'Номи',
    uz: 'Номи',
  },
  director: {
    ru: 'Раҳбар',
    uz: 'Раҳбар',
  },
  phone: {
    ru: 'Телефон',
    uz: 'Телефон',
  },
  bank_account: {
    ru: 'Ҳисоб рақами',
    uz: 'Ҳисоб рақами',
  },
  address: {
    ru: 'Манзил',
    uz: 'Манзил',
  },
  postcode: {
    ru: 'Индекс',
    uz: 'Индекс',
  },
  mailing_address: {
    ru: 'Почта манзили',
    uz: 'Почта манзили',
  },
  small_business: {
    ru: 'Кичик бизнес',
    uz: 'Кичик бизнес',
  },
  gender: {
    ru: 'Жинси',
    uz: 'Жинси',
  },
  male: {
    ru: 'Эркак',
    uz: 'Эркак',
  },
  female: {
    ru: 'Аёл',
    uz: 'Аёл',
  },
  birth_date: {
    ru: 'Туғилган санаси',
    uz: 'Туғилган санаси',
  },
  age: {
    ru: 'Ёши',
    uz: 'Ёши',
  },
  citizenship: {
    ru: 'Фуқаролиги',
    uz: 'Фуқаролиги',
  },
  administrative_case_number: {
    ru: 'Маъмурий иш рақами (суд)',
    uz: 'Маъмурий иш рақами (суд)',
  },
  is_second_category_required: {
    ru: 'Иккиламчи иш туркуми талаб қилиш',
    uz: 'Иккиламчи иш туркуми талаб қилиш',
  },
  is_sub_category_required: {
    ru: 'Қўшимча иш туркуми талаб қилиш',
    uz: 'Қўшимча иш туркуми талаб қилиш',
  },
  score: {
    ru: 'Балл',
    uz: 'Балл',
  },
  appealing_side: {
    ru: 'Шикоят берган тараф',
    uz: 'Шикоят берган тараф',
  },
  with_documents: {
    ru: 'Иш ҳужжатлари',
    uz: 'Иш ҳужжатлари',
  },
  short_name: {
    ru: 'Қисқа номи',
    uz: 'Қисқа номи',
  },
  pinfl: {
    ru: 'ПИНФЛ',
    uz: 'ЖШШИР',
  },
  counter_claim: {
    ru: 'Қарши даъво',
    uz: 'Қарши даъво',
  },
  repeated: {
    ru: 'Такрор',
    uz: 'Такрор',
  },
  is_protest: {
    ru: 'Протест',
    uz: 'Протест',
  },
  entity_type: {
    ru: 'Шахс тури',
    uz: 'Шахс тури',
  },
  physical_entity: {
    ru: 'Жисмоний шахс',
    uz: 'Жисмоний шахс',
  },
  legal_entity: {
    ru: 'Юридик шахс',
    uz: 'Юридик шахс',
  },
});

export type MessageKey = Parameters<typeof messages>[0];
