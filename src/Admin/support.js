import _ from "lodash";

export const formatInputNumber = {
  formatter: (val) => `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  parser: (val) => val.replace(/\$\s?|(,*)/g, ""),
};

export const formatLesson = {
  formatter: (val) => val?.toFixed(1),
};

export const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

export const checkFormEditChange = (object, base) => {
  function changes(object, base) {
    return _.transform(object, function (result, value, key) {
      if (_.isArray(value)) {
        if (!_.isEqual(value, base[key])) {
          result[key] = value;
        }
      } else {
        if (!value && !base[key]) {
        } else {
          if (!_.isEqual(value, base[key])) {
            result[key] =
              !(value instanceof Date) &&
              _.isObject(value) &&
              _.isObject(base[key])
                ? changes(value, base[key])
                : value;
          }
        }
      }
    });
  }
  return changes(object, base);
};

export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
