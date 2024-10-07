import styles from "@/styles/Index.module.scss";

import storeStyles from "@/styles/store.module.scss";

import { Product } from "@/components/custom/Product";

export default function store({ params }: { params: { store_name: string } }) {
  return (
    <div>
      <div className={styles.title}>{params.store_name}</div>
      <div className={styles.title}>Store</div>
      <div className={storeStyles.product_container}>
        <Product />
        <Product />
      </div>
    </div>
  );
}
