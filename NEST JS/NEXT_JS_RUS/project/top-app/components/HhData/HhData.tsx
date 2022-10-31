import cn from "classnames";

import { Card } from "../Card/Card";
import { HhDataProps } from "./HhData.props";
import { MdBrightnessLow } from "react-icons/md";
import { priceRu } from "../../helpers/helpers";

import styles from "./HhData.module.css";

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <MdBrightnessLow className={styles.filled} />
            <MdBrightnessLow />
            <MdBrightnessLow />
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <MdBrightnessLow className={styles.filled} />
            <MdBrightnessLow className={styles.filled} />
            <MdBrightnessLow />
          </div>
        </div>
        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <MdBrightnessLow className={styles.filled} />
            <MdBrightnessLow className={styles.filled} />
            <MdBrightnessLow className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
