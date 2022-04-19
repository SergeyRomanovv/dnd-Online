import React from 'react';
import style from './style.module.css';

export default function GamePlay() {
  return (
    <div className={style.gameplayBox}>
      <div className={style.mainBox}>
        <div className={style.sectionZero}>
          <h1>Описание игры</h1>
          <div className={style.descrip}>
            <p>В игре присутствуют гейммастер и  игроки.</p>
            <p> Гейммастер является главным в игре. Он создает игровое поле, создает комнаты, придумывает сценарии и управляет игрой.</p>
            <p>Гейммастер может взаимадействовать со всеми персонажами, героями и атрибутами, поставить ловушки, поставить врагов, убрать их так далее. Для этого нужно открыть панель гейм мастера из нижней части экрана.</p>
            <p>Игроки могут взаимодействовать только со своим персонажем, и кидать куби. Для этого нужно открыть панель игрока из нижней части экрана</p>
          </div>
        </div>
        <div className={style.sectionOne}>
          <h1>Инструкция</h1>
            <div className={style.instruction}>
            <p><span className={style.properties}>Выставить персонажа</span> - <span className={style.values}>двойной клик по полю.</span></p>
            <p><span className={style.properties}>Удалить персонажа</span> - <span className={style.values}>alt+ click</span></p>
            <p><span className={style.properties}>Передвижение персонажа :</span>
              <ol>
                <li><span className={style.properties}>Выбор персонажа</span> - <span className={style.values}>shift + click</span></li>
                <li><span className={style.properties}>Новая клетка для персонажа</span> - <span className={style.values}>ctrl + click</span></li>
              </ol>
            </p>
            </div>
        </div>
        <div className={style.sectionTwo}>
          <h1>Очки действий</h1>
          <div className={style.points}>
          <p><span className={style.properties}>Количество</span> - <span className={style.values}>3 ОД</span></p>
          <p><span className={style.properties}>Передвижение</span> - <span className={style.values}>1 ОД (на 2 клетки)</span></p>
          <p><span className={style.properties}>Подбор предмета</span> - <span className={style.values}>1 ОД (на клетке с персонажем)</span></p>
          <p><span className={style.properties}>Смена оружия</span> - <span className={style.values}>1 ОД</span></p>
          <p><span className={style.properties}>Быстрый удар/заклинание/выстрел</span> - <span className={style.values}>1 ОД (-2 к броску кубика)</span></p>
          <p><span className={style.properties}>Обычный удар/заклинание/выстрел</span> - <span className={style.values}>2 ОД</span></p>
          <p><span className={style.properties}>Заряженная атака/заклинание/выстрел</span> - <span className={style.values}>3 ОД (+2 к броску кубика)</span></p>
          <p><span className={style.properties}>Использование предмета</span> - <span className={style.values}>2 ОД</span></p>
          <p><span className={style.properties}>Контролировать сектор</span> - <span className={style.values}>1 ОД (-1 к броску)</span></p>
          <p><span className={style.properties}>Защититься от атаки в ближнем бою</span> - <span className={style.values}>1 ОД</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

