# Форма с валидацией. 

Реализована форма регистрации с полями ввода:
* Имя
* Фамилия
* Email
* Пароль
* Подтверждение пароля
* Дата рождения
* Кнопка "*отправить*"

Каждое поле имеет валидацию после снятия фокуса. Кнопка *отправить* активируется только после прохождения валидации всеми полями, если какое то из полей её не прошло - остаётся неактивной.

### Поля *Имя* и *Фамилия*:
имеют ограничения в минимум 2 символа и максимум 50. Нижняя граница обусловлена требованиями ТЗ, верхняя выбрана по ориентировочно среднему значению между рекомендациями в стандартах и самым длинным именем на "Википедии". Не проходят валидацию цифры и спец. символы.

### Поле Email:
валидируется атрибутом ```type-"email"```.

### Поля *Пароль* и *Подтвердите пароль*:
сравниваются между собой и в случае несовпадения выводится ошибка. Минимальная длинна пароля составляет 8 символов, должна присутствовать миниму одна заглавная и строчная буква латинского алфавита. Реализована всплывающая подсказка с требованиями к паролю.

### Поле *Дата рождения*:
имеет ограничение на возраст не младше 18 лет. Реализована всплывающая подсказка с требованием к возрасту регистрируемого.

Ссылка на [GitHubPages](https://smokysvyat.github.io/form/)
