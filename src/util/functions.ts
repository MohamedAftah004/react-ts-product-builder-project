
/**
 * 
 * @param {string} txt - The text to be sliced 
 * @param {number} [maxLength=50] - The maximum length of the text
 * @returns {string} - The sliced text with ellipsis if it exceeds the maxLength
 */
export function txtSlicer(txt:string , maxLength:number = 50)
{
  if(txt.length >= maxLength)
  {
    return txt.slice(0,maxLength) + '...';
  }
  else
  {
    return txt;
  }
}