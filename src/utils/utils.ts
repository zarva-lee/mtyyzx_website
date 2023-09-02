/**
 * 千分价格
 * @param {*} num
 * @returns
 */
export const formatNumberRgx = (num: string | number) => {
  if (num) {
    let parts = Number(num).toFixed(0).toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  } else {
    return 0;
  }
};

// 当前日期
export const getDateNow = (time?: any) => {
  let now = time ? new Date(time) : new Date();
  let year = now.getFullYear(); //得到年份
  let month = now.getMonth(); //得到月份
  let date = now.getDate(); //得到日期

  month = month + 1;
  let mon = month.toString().padStart(2, "0");
  let dat = date.toString().padStart(2, "0");
  let defaultDate = `${year}-${mon}-${dat}`; //
  return defaultDate;
};
