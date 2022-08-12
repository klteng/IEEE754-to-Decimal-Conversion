
function parseFloat(str) {
  var float = 0, sign, order, mantiss,exp,
      int = 0, multi = 1;
      int = parseInt(str,16);
      sign = (int>>>31)?-1:1;
      exp = (int >>> 23 & 0xff) - 127; 
      mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
      for (i=0; i<mantissa.length; i+=1){
        float += parseInt(mantissa[i])? Math.pow(2,exp):0;
        exp--;
      }
  return float*sign;
}
