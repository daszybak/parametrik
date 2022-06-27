import styles from "./copyright.module.scss";

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <hr />© Parametrik Engineering, 2022. Sva prava pridržana. | Design by
      <a
        href="https://www.karlodelmis.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        karlodelmis.com
      </a>
      <br />
      MB: 02183757 OIB: 72945246296 VAT: HR72945246296
      <br />
      Društvo je upisano u sudski registar Trgovačkog suda u Zagrebu pod brojem
      <br />
      Račun za redovno poslovanje društva vodi se kod ZABA d.d. IBAN:
      HR4923600001101940440 SWIFT: ZABAHR2X. MBS: 080596078.
      <br />
      Temeljni kapital iznosi 20.000,00 kn i uplaćen je u cijelosti.
      <br />
    </div>
  );
};

export default Copyright;
