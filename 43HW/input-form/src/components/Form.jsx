import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import styles from "./form.module.scss";

export default function Form() {
  const { register, control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const subjectOptions = [
    { value: "Subject 1", label: "Subject 1" },
    { value: "Subject 2", label: "Subject 2" },
    { value: "Subject 3", label: "Subject 3" },
  ];

  return (
    <>
      <div className={styles.form}>
        <div className={styles.formBody}>
          <h2 className={styles.formTitle}>Registration Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formRow}>
              <div className={styles.formCol}>
                <label htmlFor="firstName" className={styles.formLabel}>
                  first name
                </label>
                <input
                  id="firstName"
                  className={styles.formInput}
                  type="text"
                  {...register("firstName")}
                />
              </div>
              <div className={styles.formCol}>
                <label htmlFor="lastName" className={styles.formLabel}>
                  last name
                </label>
                <input
                  id="lastName"
                  className={styles.formInput}
                  type="text"
                  {...register("lastName")}
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formCol}>
                <label htmlFor="birthday" className={styles.formLabel}>
                  Birthday
                </label>
                <div className={`${styles.formInptIcon} ${styles.birthday}`}>
                  <input
                    id="birthday"
                    className={styles.formInput}
                    type="date"
                    min="2018-01-01"
                    max="2023-12-31"
                    {...register("birthday")}
                  />
                  {/* <span className={styles.formIcon}></span> */}
                </div>
              </div>
              <div className={styles.formCol}>
                <label htmlFor="gender" className={styles.formLabel}>
                  gender
                </label>
                <div className={styles.formGender}>
                  <label htmlFor="male" className={styles.radioContainer}>
                    Male
                    <input id="male" type="radio" {...register("gender")} />
                    <span className={styles.checkmark}></span>
                  </label>
                  <label htmlFor="female" className={styles.radioContainer}>
                    Female
                    <input id="female" type="radio" {...register("gender")} />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formCol}>
                <label htmlFor="email" className={styles.formLabel}>
                  email
                </label>
                <input
                  id="email"
                  className={styles.formInput}
                  type="email"
                  {...register("email")}
                />
              </div>
              <div className={styles.formCol}>
                <label htmlFor="phone" className={styles.formLabel}>
                  phone number
                </label>
                <input
                  id="phone"
                  className={styles.formInput}
                  type="text"
                  {...register("phone")}
                />
              </div>
            </div>
            <div className={styles.formFull}>
              <label className={styles.formLabel}>Subject</label>
              <Controller
                control={control}
                render={({ field: { onChange, value, name, ref } }) => (
                  <Select
                    classNames={{
                      control: () => styles.formSelect,
                    }}
                    inputRef={ref}
                    value={subjectOptions.find((c) => c.value === value)}
                    name={name}
                    options={subjectOptions}
                    onChange={(selectedOption) => {
                      onChange(selectedOption.value);
                    }}
                  />
                )}
                name="subject"
              />
            </div>
            <input type="submit" className={styles.formBtn} />
          </form>
        </div>
      </div>
    </>
  );
}
