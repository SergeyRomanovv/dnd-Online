import React from 'react';
import style from './style.module.css';

export default function GamePlay() {
  return (
    <div className={style.gameplayBox}>
      <div className={style.mainBox}>
        <div className={style.sectionZero}>
          <h1>Описание игры</h1>
          <div className={style.descrip}>
            <p>В игре присутствуют гейммастер (далее ГМ) и  игроки.</p>
            <p>ГМ является главным в игре. Он создает игровое поле, создает комнаты, придумывает сценарии и управляет игрой.</p>
            <p>ГМ может ставить ловушки, ставить врагов, перемещать их и удалять. Для этого нужно открыть панель ГМ в нижней части экрана.</p>
            <p>Игроки могут взаимодействовать только со своим персонажем, и кидать кубы. Делается это с панели игрока из нижней части экрана</p>
            <p>Все спорные или неясные игровые ситуации выносятся на решения ГМ</p>
            <p>`Основное правило любой игры, 'чья игра - тот и прав' здесь не работает)))` </p>
            <p>В игре два режима: 'Боевой' и 'Социальный'</p>
            <ul> Боевой режим:
              <li>Взаимодействие с противниками, игроками и элементами на поле посредством бросания кубов и озвучивание своих намерений(Может редактироваться ГМ)</li>
              <li>Решение в бою должны приниматься быстро и без обсуждений, в противном случае результат может быть изменён или отменён ГМ </li>
            </ul>
            <ul> Социальный режим:
              <li>Взаимодействие с окружением, NPC и сопартийцами в свободной форме озвучиванием намерений, иногда с проверками броском кубов по решению ГМ </li>
              <li>Решения принимаются самолично, либо в формате диалога или обсуждения, если ГМ не утвердил обратное</li>
            </ul>
            <p><span className={style.properties}>Более развёрнутые правила вы можете найти <a href="https://www.igromania.ru/article/31235/Chto_takoe_Dungeons_and_Dragons_i_kak_v_yeto_igrat._Kratkiy_spravochnik_dlya_novichkov.html" target="_blank">здесь!</a> Очень много текста!!! </span></p>
          </div>
        </div>
        <div className={style.sectionOne}>
          <h1>Инструкция</h1>
          <div className={style.instruction}>
            <p><span className={style.properties}>Выставить персонажа:</span> - <span className={style.values}>двойной клик по полю.</span></p>
            <p><span className={style.properties}>Удалить персонажа:</span> - <span className={style.values}>alt+ click</span></p>
            <p><span className={style.properties}>Передвижение персонажа :</span></p>
              <ol>
                <li><span className={style.properties}>Выбор персонажа:</span> - <span className={style.values}>shift + click</span></li>
                <li><span className={style.properties}>Новая клетка для персонажа:</span> - <span className={style.values}>ctrl + click</span></li>
              </ol>
          </div>
        </div>
        <div className={style.sectionTwo}>
          <h1>Очки действий</h1>
          <div className={style.points}>
            <p><span className={style.properties}>Количество</span> - <span className={style.values}>3 ОД</span></p>
            <p><span className={style.properties}>Передвижение</span> - <span className={style.values}>1 ОД (на 2 клетки)</span></p>
            <p><span className={style.properties}>Подбор предмета</span> - <span className={style.values}>1 ОД (на клетке с персонажем)</span></p>
            <p><span className={style.properties}>Смена оружия</span> - <span className={style.values}>1 ОД</span></p>
            <p><span className={style.properties}>Быстрый удар/заклинание/выстрел</span> - <span className={style.values}>1 ОД (-1 к броску кубика)</span></p>
            <p><span className={style.properties}>Обычный удар/заклинание/выстрел</span> - <span className={style.values}>2 ОД</span></p>
            <p><span className={style.properties}>Заряженная атака/заклинание/выстрел</span> - <span className={style.values}>3 ОД (+1 к броску кубика)</span></p>
            <p><span className={style.properties}>Использование предмета</span> - <span className={style.values}>2 ОД</span></p>
            <p><span className={style.properties}>Контролировать сектор</span> - <span className={style.values}>1 ОД (-1 к броску)</span></p>
            <p><span className={style.properties}>Защититься от атаки в ближнем бою</span> - <span className={style.values}>1 ОД</span></p>
          </div>
        </div>
      </div>
    </div>



  )
}

