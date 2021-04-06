import { createMessages } from './createMessages';
import { localeManager } from './localeManager';

export const messages = createMessages(localeManager.getLocales(), {
  sign_in: {
    ru: 'Вход',
    uz: 'Kirish',
  },
  username: {
    ru: 'Имя пользователя',
    uz: 'Foydalanuvchi nomi',
  },
  password: {
    ru: 'Пароль',
    uz: 'Parol',
  },
  add: {
    ru: 'Добавить',
    uz: "Qo'shish",
  },
  search: {
    ru: 'Поиск',
    uz: 'Izlash',
  },
  edit: {
    ru: 'Редактировать',
    uz: 'Tahrirlash',
  },
  update: {
    ru: 'Обновить',
    uz: 'Yangilash',
  },
  delete: {
    ru: 'Удалить',
    uz: "O'chirish",
  },
  save: {
    ru: 'Сохранить',
    uz: 'Saqlash',
  },
  cancel: {
    ru: 'Отмена',
    uz: 'Bekor qilish',
  },
  reload: {
    ru: 'Перезагрузить',
    uz: 'Қайта юклаш',
  },
  yes: {
    ru: 'Да',
    uz: 'Ha',
  },
  no: {
    ru: 'Нет',
    uz: "Yo'q",
  },
  required_field: {
    ru: 'This field is required',
    uz: 'This field is required',
  },
  choose_role: {
    ru: 'Выберите роль',
    uz: 'Rolni tanlang',
  },
  role: {
    ru: 'Роль',
    uz: 'Rol',
  },
  name: {
    ru: 'Название',
    uz: 'Nomi',
  },
  permission: {
    ru: 'Разрешение',
    uz: 'Ruhsatnoma',
  },
  choose_permission: {
    ru: 'Выберите разрешение',
    uz: 'Ruhsatnomani tanlang',
  },
  user: {
    ru: 'Пользователь',
    uz: 'Foydalanuvchi',
  },
  permissions: {
    ru: 'Разрешения',
    uz: 'Ruhsatnomalar',
  },
  roles: {
    ru: 'Роли',
    uz: 'Rollar',
  },
  users: {
    ru: 'Пользователи',
    uz: 'Foydalanuvchilar',
  },
  settings: {
    ru: 'Настройки',
    uz: 'Sozlamalar',
  },
  are_you_sure_delete: {
    ru: 'Вы уверены, что хотите удалить?',
    uz: "Aniq o'chirib tashlashni hohlaysizmi?",
  },
  loading: {
    ru: 'Загрузка',
    uz: 'Yuklanmoqda',
  },
  add_role: {
    ru: 'Добавить роль',
    uz: "Rol qo'shish",
  },
});

export type MessageKey = Parameters<typeof messages>[0];
