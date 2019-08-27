export const value = (arr) => {
  return parseInt(arr.reduce((a,b) => a + colorCode(b), ''));
};

export const colorCode = (color) => {
  return COLORS.findIndex(c => c === color);
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
