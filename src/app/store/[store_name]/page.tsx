import styles from "@/styles/Index.module.scss";

import axios from "axios";

import storeStyles from "@/styles/store.module.scss";

import Product from "@/components/store/Product";

async function getStoreDetails(storeName: string) {
  return await axios
    .get(`http://localhost:3001/store/by-id/${storeName}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return;
    });
}

async function getStoreProducts(storeId: string) {
  return await axios
    .get(`http://localhost:3001/store/${storeId}/products`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return;
    });
}

export default async function store({
  params,
}: {
  params: { store_name: string };
}) {
  const storeDetails = await getStoreDetails(params.store_name);
  let storeProducts;

  if (storeDetails) {
    storeProducts = await getStoreProducts(storeDetails.store_id);
  }

  return (
    <div>
      {storeDetails ? (
        <>
          <div className={styles.title}>{storeDetails.store_display_name}</div>
          <div className={storeStyles.products_container}>
            {storeProducts.map((product: any) => (
              <Product key={product.product_id} product={product} />
              // <Product key={product.product_id} product={product} />r
            ))}
          </div>
        </>
      ) : (
        <div className={styles.title}>Store not found</div>
      )}
      {/*<div className={styles.title}>{params.store_name}</div>*/}
      {/*<div className={styles.title}>Store</div>*/}
      {/*<div className={storeStyles.product_container}>*/}
      {/*  <Product />*/}
      {/*  <Product />*/}
      {/*</div>*/}
    </div>
  );
}
