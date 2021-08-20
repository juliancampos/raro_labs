const paginatorService = ({ page, quantityPages }) => {
  let pagination = [];

  let i = 1;
  while(i <= quantityPages){
    pagination.push(i);
    i++;
  }  

  let startIndex = (page-1) - 2;
  startIndex = startIndex > -1 ? startIndex : 0;

  let endIndex = startIndex+5;
  endIndex = endIndex > quantityPages ? quantityPages : endIndex;

  pagination = pagination.slice(startIndex, endIndex);

  while(pagination.length < 5) {
    pagination.unshift(pagination[0]-1);
  }

  if (quantityPages !== 5) {
    pagination[0] !== 1 && pagination.unshift('...');
    pagination[pagination.length-1] !== quantityPages && pagination.push('...');
  }

  const result = pagination.map(item => item == page ? `**${item.toString()}**` : item.toString());
  return result;
}

module.exports = paginatorService;
