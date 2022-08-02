import React from 'react';
import preview0 from "./imgs/teploizol.jpg"
import preview1 from "./imgs/teplo1.jpg"
import preview2 from "./imgs/teplo2.jpg"
import "./ThermalInsulation.scss"

const ThermalInsulation = () => {
    return (
        <div className="ThermalInsulation">
            <h3>Теплоизоляция</h3>
            <img src={preview0} alt="Теплоизоляция"/>
            <p>Теплоизоляция – это важнейшая часть в промышленных видах строительства, ведь правильно сделанная теплоизоляция серьезно повышает экономию энергии, что позволяет значительно экономить средства ввиду постоянно растущих тарифов на энергоносители.</p>
            <ul>
                <p>
                    <li>Компания «Техностиль» оказывает услуги по теплоизоляции промышленного оборудования и технологических трубопроводов вне зависимости от сложности работ, в работе мы используем исключительно новые современные материалы и инновационные технологии.</li>
                </p>
            </ul>
            <h3>Используемые материалы:</h3>
            <ul>
                <p>
                    <li>Минеральноватные: обладают высокой прочностью и негорючие, не загрязняют окружающую среду. Главными преимуществами данных изделий являются долгий срок эксплуатации (более 50 лет), а превосходные характеристики и способность к шумопоглощению делают данный материал универсальным.</li>
                    <li>Вспененный полиэтилен обычно применяется для гидроизоляции ввиду характеристик и структуры материала. Применение изделий из ППЭ избавляет от необходимости применения других материалов для гидроизоляции, что позволяет значительно сократить сроки строительства и сэкономить на бюджете, сохранив при этом высочайше качество.</li>
                    <li>Вспененный каучук полезен тогда, когда необходимо избежать появление конденсата в кондиционерах, вентиляционных системах и холодильных установках. Обладает стойкостью к коррозии и значительно уменьшает потери теплоты.</li>
                    <li>Пенополиуретан (ППУ) довольно часто используемый материал, благодаря его использованию можно сохранить до чеверти тепла, а, значит, существенно экономить на энергоносителях.</li>
                </p>
            </ul>
            <h3>При проектировании технологических трубопроводов важно учесть способ изоляции, который будет использован при строительстве:</h3>
            <ul>
                <p>
                    <li>Нанесение на установленные трубопроводы ППУ методом напыления</li>
                    <li>Установка скорлуп изоляции</li>
                    <li>Метод «труба в трубе» (ППУ наносится на металлическую или пластиковую трубу – предварительное изолирование)</li>
                    <li>Аналогичный предыдущему метод, однако ППУ наносится на трубы другого вида: касафлекс, изофлекс и т.п.</li>
                </p>
            </ul>
            <div>
                <img src={preview1} alt="Теплоизоляция"/>
                <img src={preview2} alt="Теплоизоляция"/>
            </div>
            <h4>Отделка наружной поверхности</h4>
            <ul>
                <p>
                    <li>алюминимй</li>
                    <li>оцинкованная сталь</li>
                    <li>ПВХ плёнка</li>
                </p>
            </ul>
            <h4>Крепления</h4>
            <ul>
                <p>
                    <li>монтажные хомуты</li>
                    <li>проволока</li>
                    <li>алюминиевый скотч</li>
                </p>
            </ul>
            <ul>
                <p>
                    <li>Качество используемых материалов и большой опыт работы позволяет нашей компании выполнить работы качественно и в срок</li>
                </p>
            </ul>
        </div>
    );
};

export default ThermalInsulation;