import React from "react";

const translationUtils = (key, language, data) => {
    if (data && data[key]) {
      return data[key][language] || 'No text set';
    } else {
      return 'No Data set';
    }
  };

  export default translationUtils