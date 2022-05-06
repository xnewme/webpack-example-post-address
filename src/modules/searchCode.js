import ajaxService from './ajaxService';
const searchCode = (term) => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector('.term').value;
    let searchResponse;
    ajaxService(searchTerm)
      .then(response => searchResponse = response)
      .then(() => {console.log(searchResponse)})
      .then((result) => {
        if (searchResponse.data[0]) {
          document.querySelector('.result').value =
            searchResponse.data[0].post_code;
        } else {
          document.querySelector('main').innerHTML +=
            '<span>Paieska nesekminga</span>';
        }
      })
  })
}
export default searchCode
