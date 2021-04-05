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
    ru: '',
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
    uz: 'Ruhsatlar',
  },
});

export type MessageKey = Parameters<typeof messages>[0];
