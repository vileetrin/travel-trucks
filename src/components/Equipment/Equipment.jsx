import css from './Equipment.module.css';

export default function Equipment({ equipment }) {
  const { AC, bathroom, kitchen, TV, radio, transmission, engine } = equipment;

  const equipmentList = [
    { name: 'AC', icon: '#icon-ac', condition: AC },
    { name: 'Bathroom', icon: '#icon-bathroom', condition: bathroom },
    { name: 'Kitchen', icon: '#icon-kitchen', condition: kitchen },
    { name: 'TV', icon: '#icon-tv', condition: TV },
    { name: 'Radio', icon: '#icon-radio', condition: radio },
  ];

  return (
    <ul className={css.list}>
      {equipmentList.map(
        (item, index) =>
          item.condition && (
            <li key={index} className={css.listItem}>
              <svg className={css.listImg}>
                <use href={`icons.svg${item.icon}`}></use>
              </svg>
              <span className={css.text}>{item.name}</span>
            </li>
          )
      )}

      {transmission && (
        <li className={css.listItem}>
          <svg className={css.listImg}>
            <use href="icons.svg#icon-transmission"></use>
          </svg>
          <span>{transmission}</span>
        </li>
      )}
      {engine && (
        <li className={css.listItem}>
          <svg className={css.listImg}>
            <use href="icons.svg#icon-petrol"></use>
          </svg>
          <span>{engine}</span>
        </li>
      )}
    </ul>
  );
}
