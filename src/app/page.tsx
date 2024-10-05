import styles from "./page.module.scss";

import { Card } from "@/components/custom/card";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Card />
        <Card />
      </div>
    </div>
  );
}
