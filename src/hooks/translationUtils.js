import React from "react";

const translationUtils = (key, language, data) => {
    if (data && data[key]) {
      console.log(data[key][language]);
      return data[key][language] || 'No text';
    } else {
      return 'No Data';
    }
  };

  export default translationUtils